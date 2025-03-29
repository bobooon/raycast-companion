import { useEffect, useState } from "react";
import { MenuBarExtra } from "@raycast/api";

export default function WiFi() {
  const [name, setName] = useState<string | false>(false);

  useEffect(() => {
    (async () => {
      const { execa } = await import("execa");
      try {
        const ssid = (await execa`/usr/sbin/ipconfig getsummary en0`.pipe`grep ${` SSID :`}`).stdout;
        setName(ssid.replace("SSID :", "").trim());
      } catch (_e) {
        setName("");
      }
    })();
  }, []);

  return <MenuBarExtra isLoading={name === false} title={name || "Not connected"}></MenuBarExtra>;
}
