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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL3NyYy9vcmIudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBob21lZGlyIH0gZnJvbSBcIm5vZGU6b3NcIjtcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcImZzL3Byb21pc2VzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBNZW51QmFyRXh0cmEgfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yYigpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgZmFsc2U+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXROYW1lKHBhdGguYmFzZW5hbWUoSlNPTi5wYXJzZShhd2FpdCByZWFkRmlsZShgJHtob21lZGlyKCl9Ly5vcmJzdGFjay92bWNvbmZpZy5qc29uYCwgXCJ1dGY4XCIpKS5kYXRhX2RpcikpO1xuICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgIHNldE5hbWUoXCJEZWZhdWx0XCIpO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPE1lbnVCYXJFeHRyYSBpc0xvYWRpbmc9eyFuYW1lfSB0aXRsZT17bmFtZSB8fCBcIlwifT48L01lbnVCYXJFeHRyYT47XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQW9DO0FBQ3BDLHFCQUF3QjtBQUN4QixzQkFBeUI7QUFDekIsdUJBQWlCO0FBQ2pCLGlCQUE2QjtBQWVwQjtBQWJNLFNBQVIsTUFBdUI7QUFDNUIsUUFBTSxDQUFDLE1BQU0sT0FBTyxRQUFJLHVCQUF5QixLQUFLO0FBRXRELDhCQUFVLE1BQU07QUFDZCxLQUFDLFlBQVk7QUFDWCxVQUFJO0FBQ0YsZ0JBQVEsaUJBQUFBLFFBQUssU0FBUyxLQUFLLE1BQU0sVUFBTSwwQkFBUyxPQUFHLHdCQUFRLENBQUMsNEJBQTRCLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQztBQUFBLE1BQzVHLFNBQVMsUUFBUTtBQUNmLGdCQUFRLFNBQVM7QUFBQSxNQUNuQjtBQUFBLElBQ0YsR0FBRztBQUFBLEVBQ0wsR0FBRyxDQUFDLENBQUM7QUFFTCxTQUFPLDRDQUFDLDJCQUFhLFdBQVcsQ0FBQyxNQUFNLE9BQU8sUUFBUSxJQUFJO0FBQzVEOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
