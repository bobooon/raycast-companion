import { useEffect, useState } from "react";
import { homedir } from "node:os";
import { readFile } from "fs/promises";
import path from "node:path";
import { MenuBarExtra } from "@raycast/api";

export default function OrbStack() {
  const [name, setName] = useState<string | false>(false);

  useEffect(() => {
    (async () => {
      try {
        setName(path.basename(JSON.parse(await readFile(`${homedir()}/.orbstack/vmconfig.json`, "utf8")).data_dir));
      } catch (_e) {
        setName("Default");
      }
    })();
  }, []);

  return <MenuBarExtra isLoading={!name} title={name || ""}></MenuBarExtra>;
}
