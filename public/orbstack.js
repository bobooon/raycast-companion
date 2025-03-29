"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/orbstack.tsx
var orbstack_exports = {};
__export(orbstack_exports, {
  default: () => OrbStack
});
module.exports = __toCommonJS(orbstack_exports);
var import_react = require("react");
var import_node_os = require("node:os");
var import_promises = require("fs/promises");
var import_node_path = __toESM(require("node:path"));
var import_api = require("@raycast/api");
var import_jsx_runtime = require("react/jsx-runtime");
function OrbStack() {
  const [name, setName] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    (async () => {
      try {
        setName(import_node_path.default.basename(JSON.parse(await (0, import_promises.readFile)(`${(0, import_node_os.homedir)()}/.orbstack/vmconfig.json`, "utf8")).data_dir));
      } catch (_e) {
        setName("Default");
      }
    })();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.MenuBarExtra, { isLoading: !name, title: name || "" });
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL29yYnN0YWNrLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaG9tZWRpciB9IGZyb20gXCJub2RlOm9zXCI7XG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gXCJmcy9wcm9taXNlc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IHsgTWVudUJhckV4dHJhIH0gZnJvbSBcIkByYXljYXN0L2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmJTdGFjaygpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgZmFsc2U+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXROYW1lKHBhdGguYmFzZW5hbWUoSlNPTi5wYXJzZShhd2FpdCByZWFkRmlsZShgJHtob21lZGlyKCl9Ly5vcmJzdGFjay92bWNvbmZpZy5qc29uYCwgXCJ1dGY4XCIpKS5kYXRhX2RpcikpO1xuICAgICAgfSBjYXRjaCAoX2UpIHtcbiAgICAgICAgc2V0TmFtZShcIkRlZmF1bHRcIik7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8TWVudUJhckV4dHJhIGlzTG9hZGluZz17IW5hbWV9IHRpdGxlPXtuYW1lIHx8IFwiXCJ9PjwvTWVudUJhckV4dHJhPjtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBb0M7QUFDcEMscUJBQXdCO0FBQ3hCLHNCQUF5QjtBQUN6Qix1QkFBaUI7QUFDakIsaUJBQTZCO0FBZXBCO0FBYk0sU0FBUixXQUE0QjtBQUNqQyxRQUFNLENBQUMsTUFBTSxPQUFPLFFBQUksdUJBQXlCLEtBQUs7QUFFdEQsOEJBQVUsTUFBTTtBQUNkLEtBQUMsWUFBWTtBQUNYLFVBQUk7QUFDRixnQkFBUSxpQkFBQUEsUUFBSyxTQUFTLEtBQUssTUFBTSxVQUFNLDBCQUFTLE9BQUcsd0JBQVEsQ0FBQyw0QkFBNEIsTUFBTSxDQUFDLEVBQUUsUUFBUSxDQUFDO0FBQUEsTUFDNUcsU0FBUyxJQUFJO0FBQ1gsZ0JBQVEsU0FBUztBQUFBLE1BQ25CO0FBQUEsSUFDRixHQUFHO0FBQUEsRUFDTCxHQUFHLENBQUMsQ0FBQztBQUVMLFNBQU8sNENBQUMsMkJBQWEsV0FBVyxDQUFDLE1BQU0sT0FBTyxRQUFRLElBQUk7QUFDNUQ7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==
