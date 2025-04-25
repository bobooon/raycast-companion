"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/transform.tsx
var transform_exports = {};
__export(transform_exports, {
  default: () => Transform
});
module.exports = __toCommonJS(transform_exports);
var import_react = require("react");
var import_api = require("@raycast/api");
var import_jsx_runtime = require("react/jsx-runtime");
var types = {
  lowerCase: {
    title: "Lower",
    callback: (text) => text.toLowerCase()
  },
  upperCase: {
    title: "Upper",
    callback: (text) => text.toUpperCase()
  },
  uriEncode: {
    title: "URI",
    callback: (text) => new URL(text, "r://c").toString().replace("r://c", "")
  },
  uriDecode: {
    title: "URI",
    callback: (text) => decodeURIComponent(text)
  },
  base64Encode: {
    title: "Base64",
    callback: (text) => btoa(text)
  },
  base64Decode: {
    title: "Base64",
    callback: (text) => atob(text)
  }
};
function Transform() {
  const [text, setText] = (0, import_react.useState)("");
  const [selectedText, setSelectedText] = (0, import_react.useState)(null);
  let currentText = "";
  if (text.length) currentText = text;
  else if (selectedText !== null && selectedText.trim().length) currentText = selectedText;
  (0, import_react.useEffect)(() => {
    (async () => {
      try {
        setSelectedText(await (0, import_api.getSelectedText)());
      } catch (_error) {
        setSelectedText("");
      }
    })();
  }, []);
  const onTextChange = (value) => {
    setText(value);
  };
  const CaseAction = (props) => {
    const result = props.callback(currentText);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.ActionPanel, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.Paste, { content: result, onPaste: () => (0, import_api.popToRoot)() }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.CopyToClipboard, { content: result, onCopy: () => (0, import_api.popToRoot)() })
    ] });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_api.List,
    {
      isLoading: selectedText === null,
      filtering: false,
      searchBarPlaceholder: "Text",
      onSearchTextChange: onTextChange,
      throttle: true,
      children: [
        currentText.length && Object.entries(types).map(([id, type]) => {
          try {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_api.List.Item,
              {
                title: type.callback(currentText),
                accessories: [{ tag: type.title }],
                actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseAction, { callback: type.callback })
              },
              id
            );
          } catch (_error) {
            return null;
          }
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List.EmptyView, { title: "", icon: import_api.Icon.Text })
      ]
    }
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL3NyYy90cmFuc2Zvcm0udHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvblBhbmVsLCBnZXRTZWxlY3RlZFRleHQsIEljb24sIExpc3QsIHBvcFRvUm9vdCB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcblxuY29uc3QgdHlwZXMgPSB7XG4gIGxvd2VyQ2FzZToge1xuICAgIHRpdGxlOiBcIkxvd2VyXCIsXG4gICAgY2FsbGJhY2s6ICh0ZXh0OiBzdHJpbmcpID0+IHRleHQudG9Mb3dlckNhc2UoKSxcbiAgfSxcbiAgdXBwZXJDYXNlOiB7XG4gICAgdGl0bGU6IFwiVXBwZXJcIixcbiAgICBjYWxsYmFjazogKHRleHQ6IHN0cmluZykgPT4gdGV4dC50b1VwcGVyQ2FzZSgpLFxuICB9LFxuICB1cmlFbmNvZGU6IHtcbiAgICB0aXRsZTogXCJVUklcIixcbiAgICBjYWxsYmFjazogKHRleHQ6IHN0cmluZykgPT4gbmV3IFVSTCh0ZXh0LCBcInI6Ly9jXCIpLnRvU3RyaW5nKCkucmVwbGFjZShcInI6Ly9jXCIsIFwiXCIpLFxuICB9LFxuICB1cmlEZWNvZGU6IHtcbiAgICB0aXRsZTogXCJVUklcIixcbiAgICBjYWxsYmFjazogKHRleHQ6IHN0cmluZykgPT4gZGVjb2RlVVJJQ29tcG9uZW50KHRleHQpLFxuICB9LFxuICBiYXNlNjRFbmNvZGU6IHtcbiAgICB0aXRsZTogXCJCYXNlNjRcIixcbiAgICBjYWxsYmFjazogKHRleHQ6IHN0cmluZykgPT4gYnRvYSh0ZXh0KSxcbiAgfSxcbiAgYmFzZTY0RGVjb2RlOiB7XG4gICAgdGl0bGU6IFwiQmFzZTY0XCIsXG4gICAgY2FsbGJhY2s6ICh0ZXh0OiBzdHJpbmcpID0+IGF0b2IodGV4dCksXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2Zvcm0oKSB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRUZXh0LCBzZXRTZWxlY3RlZFRleHRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgbGV0IGN1cnJlbnRUZXh0ID0gXCJcIjtcbiAgaWYgKHRleHQubGVuZ3RoKSBjdXJyZW50VGV4dCA9IHRleHQ7XG4gIGVsc2UgaWYgKHNlbGVjdGVkVGV4dCAhPT0gbnVsbCAmJiBzZWxlY3RlZFRleHQudHJpbSgpLmxlbmd0aCkgY3VycmVudFRleHQgPSBzZWxlY3RlZFRleHQ7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRUZXh0KGF3YWl0IGdldFNlbGVjdGVkVGV4dCgpKTtcbiAgICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgICBzZXRTZWxlY3RlZFRleHQoXCJcIik7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uVGV4dENoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0VGV4dCh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgQ2FzZUFjdGlvbiA9IChwcm9wczogeyBjYWxsYmFjazogRnVuY3Rpb24gfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHByb3BzLmNhbGxiYWNrKGN1cnJlbnRUZXh0KTtcbiAgICByZXR1cm4gKFxuICAgICAgPEFjdGlvblBhbmVsPlxuICAgICAgICA8QWN0aW9uLlBhc3RlIGNvbnRlbnQ9e3Jlc3VsdH0gb25QYXN0ZT17KCkgPT4gcG9wVG9Sb290KCl9IC8+XG4gICAgICAgIDxBY3Rpb24uQ29weVRvQ2xpcGJvYXJkIGNvbnRlbnQ9e3Jlc3VsdH0gb25Db3B5PXsoKSA9PiBwb3BUb1Jvb3QoKX0gLz5cbiAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0XG4gICAgICBpc0xvYWRpbmc9e3NlbGVjdGVkVGV4dCA9PT0gbnVsbH1cbiAgICAgIGZpbHRlcmluZz17ZmFsc2V9XG4gICAgICBzZWFyY2hCYXJQbGFjZWhvbGRlcj1cIlRleHRcIlxuICAgICAgb25TZWFyY2hUZXh0Q2hhbmdlPXtvblRleHRDaGFuZ2V9XG4gICAgICB0aHJvdHRsZT17dHJ1ZX1cbiAgICA+XG4gICAgICB7Y3VycmVudFRleHQubGVuZ3RoICYmXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHR5cGVzKS5tYXAoKFtpZCwgdHlwZV0pID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpc3QuSXRlbVxuICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3R5cGUuY2FsbGJhY2soY3VycmVudFRleHQpfVxuICAgICAgICAgICAgICAgIGFjY2Vzc29yaWVzPXtbeyB0YWc6IHR5cGUudGl0bGUgfV19XG4gICAgICAgICAgICAgICAgYWN0aW9ucz17PENhc2VBY3Rpb24gY2FsbGJhY2s9e3R5cGUuY2FsbGJhY2t9IC8+fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG5cbiAgICAgIDxMaXN0LkVtcHR5VmlldyB0aXRsZT1cIlwiIGljb249e0ljb24uVGV4dH0gLz5cbiAgICA8L0xpc3Q+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBb0M7QUFDcEMsaUJBQTRFO0FBc0R0RTtBQXBE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
