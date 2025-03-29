import { promises as fs } from "fs";
import path from "node:path";
import crypto from "node:crypto";
import { environment } from "@raycast/api";
import { useEffect } from "react";
import { getDataUri, getFileInfo } from "../utils/file.ts";

const tmp = path.join(environment.supportPath, "encoder");
fs.mkdir(tmp, { recursive: true });

type EncoderResult = { text: string; data?: string; file?: string };

export default function useEncoder() {
  useEffect(() => {
    (async () => {
      (await fs.readdir(tmp)).forEach((file) => fs.rm(path.join(tmp, file)));
    })();
  }, []);

  const encode = async (source: string, data: string) => {
    if (source === "text") return { text: Buffer.from(data).toString("base64") };
    const file = await fs.readFile(data);
    const text = file.toString("base64");
    return { text, data: getDataUri(text, await getFileInfo(data)) } as EncoderResult;
  };

  const decode = async (source: string, data: string) => {
    const result =
      source === "text"
        ? Buffer.from(data.replace(/^data:.*;base64,/, ""), "base64")
        : Buffer.from(await fs.readFile(data, "utf8"), "base64");

    const file = path.join(tmp, crypto.randomUUID());
    await fs.writeFile(file, result as unknown as DataView);
    const info = await getFileInfo(file);

    if (info.mime === "image/svg+xml") info.extension = "svg";
    if (info.extension !== "???") {
      await fs.rename(file, `${file}.${info.extension}`);
      return {
        text: `${info.mime}`,
        file: `${file}.${info.extension}`,
        data: getDataUri(Buffer.from(result.buffer).toString("base64"), info),
      };
    }

    await fs.rm(file);
    return { text: result.toString() } as EncoderResult;
  };

  return { encode, decode };
}
