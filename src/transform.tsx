import { useEffect, useState } from "react";
import { Action, ActionPanel, getSelectedText, Icon, List, popToRoot } from "@raycast/api";

const types = {
  lowerCase: {
    title: "Lower",
    callback: (text: string) => text.toLowerCase(),
  },
  upperCase: {
    title: "Upper",
    callback: (text: string) => text.toUpperCase(),
  },
  uriEncode: {
    title: "URI",
    callback: (text: string) => new URL(text, "r://c").toString().replace("r://c", ""),
  },
  uriDecode: {
    title: "URI",
    callback: (text: string) => decodeURIComponent(text),
  },
  base64Encode: {
    title: "Base64",
    callback: (text: string) => btoa(text),
  },
  base64Decode: {
    title: "Base64",
    callback: (text: string) => atob(text),
  },
};

export default function Transform() {
  const [text, setText] = useState("");
  const [selectedText, setSelectedText] = useState<string | null>(null);

  let currentText = "";
  if (text.length) currentText = text;
  else if (selectedText !== null && selectedText.trim().length) currentText = selectedText;

  useEffect(() => {
    (async () => {
      try {
        setSelectedText(await getSelectedText());
      } catch (_error) {
        setSelectedText("");
      }
    })();
  }, []);

  const onTextChange = (value: string) => {
    setText(value);
  };

  const CaseAction = (props: { callback: Function }) => {
    const result = props.callback(currentText);
    return (
      <ActionPanel>
        <Action.Paste content={result} onPaste={() => popToRoot()} />
        <Action.CopyToClipboard content={result} onCopy={() => popToRoot()} />
      </ActionPanel>
    );
  };

  return (
    <List
      isLoading={selectedText === null}
      filtering={false}
      searchBarPlaceholder="Text"
      onSearchTextChange={onTextChange}
      throttle={true}
    >
      {currentText.length &&
        Object.entries(types).map(([id, type]) => {
          try {
            return (
              <List.Item
                key={id}
                title={type.callback(currentText)}
                accessories={[{ tag: type.title }]}
                actions={<CaseAction callback={type.callback} />}
              />
            );
          } catch (_error) {
            return null;
          }
        })}

      <List.EmptyView title="" icon={Icon.Text} />
    </List>
  );
}
