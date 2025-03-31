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

// src/orb.tsx
var orb_exports = {};
__export(orb_exports, {
  default: () => Orb
});
module.exports = __toCommonJS(orb_exports);
var import_react = require("react");
var import_node_os = require("node:os");
var import_promises = require("fs/promises");
var import_node_path = __toESM(require("node:path"));
var import_api = require("@raycast/api");
var import_jsx_runtime = require("react/jsx-runtime");
function Orb() {
  const [name, setName] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    (async () => {
      try {
        setName(import_node_path.default.basename(JSON.parse(await (0, import_promises.readFile)(`${(0, import_node_os.homedir)()}/.orbstack/vmconfig.json`, "utf8")).data_dir));
      } catch (_error) {
        setName("Default");
      }
    })();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.MenuBarExtra, { isLoading: !name, title: name || "" });
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL29yYi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGhvbWVkaXIgfSBmcm9tIFwibm9kZTpvc1wiO1xuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJub2RlOnBhdGhcIjtcbmltcG9ydCB7IE1lbnVCYXJFeHRyYSB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JiKCkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBmYWxzZT4oZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldE5hbWUocGF0aC5iYXNlbmFtZShKU09OLnBhcnNlKGF3YWl0IHJlYWRGaWxlKGAke2hvbWVkaXIoKX0vLm9yYnN0YWNrL3ZtY29uZmlnLmpzb25gLCBcInV0ZjhcIikpLmRhdGFfZGlyKSk7XG4gICAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgc2V0TmFtZShcIkRlZmF1bHRcIik7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8TWVudUJhckV4dHJhIGlzTG9hZGluZz17IW5hbWV9IHRpdGxlPXtuYW1lIHx8IFwiXCJ9PjwvTWVudUJhckV4dHJhPjtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBb0M7QUFDcEMscUJBQXdCO0FBQ3hCLHNCQUF5QjtBQUN6Qix1QkFBaUI7QUFDakIsaUJBQTZCO0FBZXBCO0FBYk0sU0FBUixNQUF1QjtBQUM1QixRQUFNLENBQUMsTUFBTSxPQUFPLFFBQUksdUJBQXlCLEtBQUs7QUFFdEQsOEJBQVUsTUFBTTtBQUNkLEtBQUMsWUFBWTtBQUNYLFVBQUk7QUFDRixnQkFBUSxpQkFBQUEsUUFBSyxTQUFTLEtBQUssTUFBTSxVQUFNLDBCQUFTLE9BQUcsd0JBQVEsQ0FBQyw0QkFBNEIsTUFBTSxDQUFDLEVBQUUsUUFBUSxDQUFDO0FBQUEsTUFDNUcsU0FBUyxRQUFRO0FBQ2YsZ0JBQVEsU0FBUztBQUFBLE1BQ25CO0FBQUEsSUFDRixHQUFHO0FBQUEsRUFDTCxHQUFHLENBQUMsQ0FBQztBQUVMLFNBQU8sNENBQUMsMkJBQWEsV0FBVyxDQUFDLE1BQU0sT0FBTyxRQUFRLElBQUk7QUFDNUQ7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==
