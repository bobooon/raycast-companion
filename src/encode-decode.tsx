import { useState } from "react";
import { Action, ActionPanel, Detail, Form, useNavigation } from "@raycast/api";
import useEncoder from "./hooks/encoder.ts";
import truncateText from "./utils/truncate.ts";

type FormValues = { type: string; source: string; text: string; file: string[] };

export default function EncodeDecode() {
  const [source, setSource] = useState("text");
  const { encode, decode } = useEncoder();
  const { push } = useNavigation();

  const onSubmit = async (values: FormValues) => {
    const data = values.source === "file" ? values.file[0] : values.text;
    const result =
      values.type === "encode"
        ? await encode(values.source, data as string)
        : await decode(values.source, data as string);

    let preview = `\`\`\`\n${truncateText(result.text)}\n\`\`\``;
    if (result.file && result.text.match(/^image\//)) preview = `![](${result.data})`;

    push(
      <Detail
        markdown={preview}
        actions={
          <ActionPanel>
            <Action.CopyToClipboard content={result.file ? { file: result.file } : result.text} />
            {result.data && <Action.CopyToClipboard title="Copy Data URI to Clipboard" content={result.data} />}
          </ActionPanel>
        }
      />,
    );
  };

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Submit" onSubmit={onSubmit} />
        </ActionPanel>
      }
    >
      <Form.Dropdown id="type">
        <Form.Dropdown.Item value="encode" title="Encode" />
        <Form.Dropdown.Item value="decode" title="Decode" />
      </Form.Dropdown>

      <Form.Dropdown id="source" onChange={setSource}>
        <Form.Dropdown.Item value="text" title="Plain Text" />
        <Form.Dropdown.Item value="file" title="File" />
      </Form.Dropdown>

      {source === "text" && <Form.TextArea id="text" />}
      {source === "file" && <Form.FilePicker id="file" title="" allowMultipleSelection={false} />}
    </Form>
  );
}
