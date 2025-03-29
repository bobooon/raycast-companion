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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3RyYW5zZm9ybS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUGFuZWwsIGdldFNlbGVjdGVkVGV4dCwgSWNvbiwgTGlzdCwgcG9wVG9Sb290IH0gZnJvbSBcIkByYXljYXN0L2FwaVwiO1xuXG5jb25zdCB0eXBlcyA9IHtcbiAgbG93ZXJDYXNlOiB7XG4gICAgdGl0bGU6IFwiTG93ZXJcIixcbiAgICBjYWxsYmFjazogKHRleHQ6IHN0cmluZykgPT4gdGV4dC50b0xvd2VyQ2FzZSgpLFxuICB9LFxuICB1cHBlckNhc2U6IHtcbiAgICB0aXRsZTogXCJVcHBlclwiLFxuICAgIGNhbGxiYWNrOiAodGV4dDogc3RyaW5nKSA9PiB0ZXh0LnRvVXBwZXJDYXNlKCksXG4gIH0sXG4gIHVyaUVuY29kZToge1xuICAgIHRpdGxlOiBcIlVSSVwiLFxuICAgIGNhbGxiYWNrOiAodGV4dDogc3RyaW5nKSA9PiBuZXcgVVJMKHRleHQsIFwicjovL2NcIikudG9TdHJpbmcoKS5yZXBsYWNlKFwicjovL2NcIiwgXCJcIiksXG4gIH0sXG4gIHVyaURlY29kZToge1xuICAgIHRpdGxlOiBcIlVSSVwiLFxuICAgIGNhbGxiYWNrOiAodGV4dDogc3RyaW5nKSA9PiBkZWNvZGVVUklDb21wb25lbnQodGV4dCksXG4gIH0sXG4gIGJhc2U2NEVuY29kZToge1xuICAgIHRpdGxlOiBcIkJhc2U2NFwiLFxuICAgIGNhbGxiYWNrOiAodGV4dDogc3RyaW5nKSA9PiBidG9hKHRleHQpLFxuICB9LFxuICBiYXNlNjREZWNvZGU6IHtcbiAgICB0aXRsZTogXCJCYXNlNjRcIixcbiAgICBjYWxsYmFjazogKHRleHQ6IHN0cmluZykgPT4gYXRvYih0ZXh0KSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zZm9ybSgpIHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWxlY3RlZFRleHQsIHNldFNlbGVjdGVkVGV4dF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBsZXQgY3VycmVudFRleHQgPSBcIlwiO1xuICBpZiAodGV4dC5sZW5ndGgpIGN1cnJlbnRUZXh0ID0gdGV4dDtcbiAgZWxzZSBpZiAoc2VsZWN0ZWRUZXh0ICE9PSBudWxsICYmIHNlbGVjdGVkVGV4dC50cmltKCkubGVuZ3RoKSBjdXJyZW50VGV4dCA9IHNlbGVjdGVkVGV4dDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRTZWxlY3RlZFRleHQoYXdhaXQgZ2V0U2VsZWN0ZWRUZXh0KCkpO1xuICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgIHNldFNlbGVjdGVkVGV4dChcIlwiKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25UZXh0Q2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRUZXh0KHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBDYXNlQWN0aW9uID0gKHByb3BzOiB7IGNhbGxiYWNrOiBGdW5jdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gcHJvcHMuY2FsbGJhY2soY3VycmVudFRleHQpO1xuICAgIHJldHVybiAoXG4gICAgICA8QWN0aW9uUGFuZWw+XG4gICAgICAgIDxBY3Rpb24uUGFzdGUgY29udGVudD17cmVzdWx0fSBvblBhc3RlPXsoKSA9PiBwb3BUb1Jvb3QoKX0gLz5cbiAgICAgICAgPEFjdGlvbi5Db3B5VG9DbGlwYm9hcmQgY29udGVudD17cmVzdWx0fSBvbkNvcHk9eygpID0+IHBvcFRvUm9vdCgpfSAvPlxuICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExpc3RcbiAgICAgIGlzTG9hZGluZz17c2VsZWN0ZWRUZXh0ID09PSBudWxsfVxuICAgICAgZmlsdGVyaW5nPXtmYWxzZX1cbiAgICAgIHNlYXJjaEJhclBsYWNlaG9sZGVyPVwiVGV4dFwiXG4gICAgICBvblNlYXJjaFRleHRDaGFuZ2U9e29uVGV4dENoYW5nZX1cbiAgICAgIHRocm90dGxlPXt0cnVlfVxuICAgID5cbiAgICAgIHtjdXJyZW50VGV4dC5sZW5ndGggJiZcbiAgICAgICAgT2JqZWN0LmVudHJpZXModHlwZXMpLm1hcCgoW2lkLCB0eXBlXSkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGlzdC5JdGVtXG4gICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICB0aXRsZT17dHlwZS5jYWxsYmFjayhjdXJyZW50VGV4dCl9XG4gICAgICAgICAgICAgICAgYWNjZXNzb3JpZXM9e1t7IHRhZzogdHlwZS50aXRsZSB9XX1cbiAgICAgICAgICAgICAgICBhY3Rpb25zPXs8Q2FzZUFjdGlvbiBjYWxsYmFjaz17dHlwZS5jYWxsYmFja30gLz59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cblxuICAgICAgPExpc3QuRW1wdHlWaWV3IHRpdGxlPVwiXCIgaWNvbj17SWNvbi5UZXh0fSAvPlxuICAgIDwvTGlzdD5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFvQztBQUNwQyxpQkFBNEU7QUFzRHRFO0FBcEROLElBQU0sUUFBUTtBQUFBLEVBQ1osV0FBVztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsVUFBVSxDQUFDLFNBQWlCLEtB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
