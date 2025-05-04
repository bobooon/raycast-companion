import { useEffect, useState } from "react";
import { Icon, MenuBarExtra } from "@raycast/api";

interface Network {
  name: string;
  location: string;
}

export default function WiFi() {
  const [state, setState] = useState<Network | false>(false);

  useEffect(() => {
    (async () => {
      const { execa } = await import("execa");
      try {
        const name = await execa`/usr/sbin/ipconfig getsummary en0`.pipe`grep ${` SSID :`}`;
        const location = await execa`/usr/sbin/networksetup -getcurrentlocation`;

        setState({
          name: name.stdout.replace("SSID :", "").trim(),
          location: location.stdout.trim(),
        });
      } catch (_error) {
        setState({ name: "", location: "" });
      }
    })();
  }, []);

  const status = state && state.name.length;

  return (
    <MenuBarExtra
      isLoading={state === false}
      title={status ? `${state.name} on ${state.location}` : "No Wi-Fi"}
      icon={status ? { source: "" } : { source: Icon.Warning, tintColor: "orange" }}
    ></MenuBarExtra>
  );
}
