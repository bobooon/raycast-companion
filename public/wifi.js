"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
var init_is_plain_obj = __esm({
  "node_modules/is-plain-obj/index.js"() {
  }
});

// node_modules/execa/lib/arguments/file-url.js
var import_node_url, safeNormalizeFileUrl, normalizeDenoExecPath, isDenoExecPath, normalizeFileUrl;
var init_file_url = __esm({
  "node_modules/execa/lib/arguments/file-url.js"() {
    import_node_url = require("node:url");
    safeNormalizeFileUrl = (file, name) => {
      const fileString = normalizeFileUrl(normalizeDenoExecPath(file));
      if (typeof fileString !== "string") {
        throw new TypeError(`${name} must be a string or a file URL: ${fileString}.`);
      }
      return fileString;
    };
    normalizeDenoExecPath = (file) => isDenoExecPath(file) ? file.toString() : file;
    isDenoExecPath = (file) => typeof file !== "string" && file && Object.getPrototypeOf(file) === String.prototype;
    normalizeFileUrl = (file) => file instanceof URL ? (0, import_node_url.fileURLToPath)(file) : file;
  }
});

// node_modules/execa/lib/methods/parameters.js
var normalizeParameters;
var init_parameters = __esm({
  "node_modules/execa/lib/methods/parameters.js"() {
    init_is_plain_obj();
    init_file_url();
    normalizeParameters = (rawFile, rawArguments = [], rawOptions = {}) => {
      const filePath = safeNormalizeFileUrl(rawFile, "First argument");
      const [commandArguments, options] = isPlainObject(rawArguments) ? [[], rawArguments] : [rawArguments, rawOptions];
      if (!Array.isArray(commandArguments)) {
        throw new TypeError(`Second argument must be either an array of arguments or an options object: ${commandArguments}`);
      }
      if (commandArguments.some((commandArgument) => typeof commandArgument === "object" && commandArgument !== null)) {
        throw new TypeError(`Second argument must be an array of strings: ${commandArguments}`);
      }
      const normalizedArguments = commandArguments.map(String);
      const nullByteArgument = normalizedArguments.find((normalizedArgument) => normalizedArgument.includes("\0"));
      if (nullByteArgument !== void 0) {
        throw new TypeError(`Arguments cannot contain null bytes ("\\0"): ${nullByteArgument}`);
      }
      if (!isPlainObject(options)) {
        throw new TypeError(`Last argument must be an options object: ${options}`);
      }
      return [filePath, normalizedArguments, options];
    };
  }
});

// node_modules/execa/lib/utils/uint-array.js
var import_node_string_decoder, objectToString, isArrayBuffer, isUint8Array, bufferToUint8Array, textEncoder, stringToUint8Array, textDecoder, uint8ArrayToString, joinToString, uint8ArraysToStrings, joinToUint8Array, stringsToUint8Arrays, concatUint8Arrays, getJoinLength;
var init_uint_array = __esm({
  "node_modules/execa/lib/utils/uint-array.js"() {
    import_node_string_decoder = require("node:string_decoder");
    ({ toString: objectToString } = Object.prototype);
    isArrayBuffer = (value) => objectToString.call(value) === "[object ArrayBuffer]";
    isUint8Array = (value) => objectToString.call(value) === "[object Uint8Array]";
    bufferToUint8Array = (buffer) => new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    textEncoder = new TextEncoder();
    stringToUint8Array = (string) => textEncoder.encode(string);
    textDecoder = new TextDecoder();
    uint8ArrayToString = (uint8Array) => textDecoder.decode(uint8Array);
    joinToString = (uint8ArraysOrStrings, encoding) => {
      const strings = uint8ArraysToStrings(uint8ArraysOrStrings, encoding);
      return strings.join("");
    };
    uint8ArraysToStrings = (uint8ArraysOrStrings, encoding) => {
      if (encoding === "utf8" && uint8ArraysOrStrings.every((uint8ArrayOrString) => typeof uint8ArrayOrString === "string")) {
        return uint8ArraysOrStrings;
      }
      const decoder = new import_node_string_decoder.StringDecoder(encoding);
      const strings = uint8ArraysOrStrings.map((uint8ArrayOrString) => typeof uint8ArrayOrString === "string" ? stringToUint8Array(uint8ArrayOrString) : uint8ArrayOrString).map((uint8Array) => decoder.write(uint8Array));
      const finalString = decoder.end();
      return finalString === "" ? strings : [...strings, finalString];
    };
    joinToUint8Array = (uint8ArraysOrStrings) => {
      if (uint8ArraysOrStrings.length === 1 && isUint8Array(uint8ArraysOrStrings[0])) {
        return uint8ArraysOrStrings[0];
      }
      return concatUint8Arrays(stringsToUint8Arrays(uint8ArraysOrStrings));
    };
    stringsToUint8Arrays = (uint8ArraysOrStrings) => uint8ArraysOrStrings.map((uint8ArrayOrString) => typeof uint8ArrayOrString === "string" ? stringToUint8Array(uint8ArrayOrString) : uint8ArrayOrString);
    concatUint8Arrays = (uint8Arrays) => {
      const result = new Uint8Array(getJoinLength(uint8Arrays));
      let index = 0;
      for (const uint8Array of uint8Arrays) {
        result.set(uint8Array, index);
        index += uint8Array.length;
      }
      return result;
    };
    getJoinLength = (uint8Arrays) => {
      let joinLength = 0;
      for (const uint8Array of uint8Arrays) {
        joinLength += uint8Array.length;
      }
      return joinLength;
    };
  }
});

// node_modules/execa/lib/methods/template.js
var import_node_child_process, isTemplateString, parseTemplates, parseTemplate, splitByWhitespaces, DELIMITERS, ESCAPE_LENGTH, concatTokens, parseExpression, getSubprocessResult;
var init_template = __esm({
  "node_modules/execa/lib/methods/template.js"() {
    import_node_child_process = require("node:child_process");
    init_is_plain_obj();
    init_uint_array();
    isTemplateString = (templates) => Array.isArray(templates) && Array.isArray(templates.raw);
    parseTemplates = (templates, expressions) => {
      let tokens = [];
      for (const [index, template] of templates.entries()) {
        tokens = parseTemplate({
          templates,
          expressions,
          tokens,
          index,
          template
        });
      }
      if (tokens.length === 0) {
        throw new TypeError("Template script must not be empty");
      }
      const [file, ...commandArguments] = tokens;
      return [file, commandArguments, {}];
    };
    parseTemplate = ({ templates, expressions, tokens, index, template }) => {
      if (template === void 0) {
        throw new TypeError(`Invalid backslash sequence: ${templates.raw[index]}`);
      }
      const { nextTokens, leadingWhitespaces, trailingWhitespaces } = splitByWhitespaces(template, templates.raw[index]);
      const newTokens = concatTokens(tokens, nextTokens, leadingWhitespaces);
      if (index === expressions.length) {
        return newTokens;
      }
      const expression = expressions[index];
      const expressionTokens = Array.isArray(expression) ? expression.map((expression2) => parseExpression(expression2)) : [parseExpression(expression)];
      return concatTokens(newTokens, expressionTokens, trailingWhitespaces);
    };
    splitByWhitespaces = (template, rawTemplate) => {
      if (rawTemplate.length === 0) {
        return { nextTokens: [], leadingWhitespaces: false, trailingWhitespaces: false };
      }
      const nextTokens = [];
      let templateStart = 0;
      const leadingWhitespaces = DELIMITERS.has(rawTemplate[0]);
      for (let templateIndex = 0, rawIndex = 0; templateIndex < template.length; templateIndex += 1, rawIndex += 1) {
        const rawCharacter = rawTemplate[rawIndex];
        if (DELIMITERS.has(rawCharacter)) {
          if (templateStart !== templateIndex) {
            nextTokens.push(template.slice(templateStart, templateIndex));
          }
          templateStart = templateIndex + 1;
        } else if (rawCharacter === "\\") {
          const nextRawCharacter = rawTemplate[rawIndex + 1];
          if (nextRawCharacter === "\n") {
            templateIndex -= 1;
            rawIndex += 1;
          } else if (nextRawCharacter === "u" && rawTemplate[rawIndex + 2] === "{") {
            rawIndex = rawTemplate.indexOf("}", rawIndex + 3);
          } else {
            rawIndex += ESCAPE_LENGTH[nextRawCharacter] ?? 1;
          }
        }
      }
      const trailingWhitespaces = templateStart === template.length;
      if (!trailingWhitespaces) {
        nextTokens.push(template.slice(templateStart));
      }
      return { nextTokens, leadingWhitespaces, trailingWhitespaces };
    };
    DELIMITERS = /* @__PURE__ */ new Set([" ", "	", "\r", "\n"]);
    ESCAPE_LENGTH = { x: 3, u: 5 };
    concatTokens = (tokens, nextTokens, isSeparated) => isSeparated || tokens.length === 0 || nextTokens.length === 0 ? [...tokens, ...nextTokens] : [
      ...tokens.slice(0, -1),
      `${tokens.at(-1)}${nextTokens[0]}`,
      ...nextTokens.slice(1)
    ];
    parseExpression = (expression) => {
      const typeOfExpression = typeof expression;
      if (typeOfExpression === "string") {
        return expression;
      }
      if (typeOfExpression === "number") {
        return String(expression);
      }
      if (isPlainObject(expression) && ("stdout" in expression || "isMaxBuffer" in expression)) {
        return getSubprocessResult(expression);
      }
      if (expression instanceof import_node_child_process.ChildProcess || Object.prototype.toString.call(expression) === "[object Promise]") {
        throw new TypeError("Unexpected subprocess in template expression. Please use ${await subprocess} instead of ${subprocess}.");
      }
      throw new TypeError(`Unexpected "${typeOfExpression}" in template expression`);
    };
    getSubprocessResult = ({ stdout }) => {
      if (typeof stdout === "string") {
        return stdout;
      }
      if (isUint8Array(stdout)) {
        return uint8ArrayToString(stdout);
      }
      if (stdout === void 0) {
        throw new TypeError(`Missing result.stdout in template expression. This is probably due to the previous subprocess' "stdout" option.`);
      }
      throw new TypeError(`Unexpected "${typeof stdout}" stdout in template expression`);
    };
  }
});

// node_modules/execa/lib/utils/standard-stream.js
var import_node_process, isStandardStream, STANDARD_STREAMS, STANDARD_STREAMS_ALIASES, getStreamName;
var init_standard_stream = __esm({
  "node_modules/execa/lib/utils/standard-stream.js"() {
    import_node_process = __toESM(require("node:process"), 1);
    isStandardStream = (stream) => STANDARD_STREAMS.includes(stream);
    STANDARD_STREAMS = [import_node_process.default.stdin, import_node_process.default.stdout, import_node_process.default.stderr];
    STANDARD_STREAMS_ALIASES = ["stdin", "stdout", "stderr"];
    getStreamName = (fdNumber) => STANDARD_STREAMS_ALIASES[fdNumber] ?? `stdio[${fdNumber}]`;
  }
});

// node_modules/execa/lib/arguments/specific.js
var import_node_util, normalizeFdSpecificOptions, normalizeFdSpecificOption, getStdioLength, normalizeFdSpecificValue, normalizeOptionObject, compareFdName, getFdNameOrder, parseFdName, parseFd, FD_REGEXP, addDefaultValue, verboseDefault, DEFAULT_OPTIONS, FD_SPECIFIC_OPTIONS, getFdSpecificValue;
var init_specific = __esm({
  "node_modules/execa/lib/arguments/specific.js"() {
    import_node_util = require("node:util");
    init_is_plain_obj();
    init_standard_stream();
    normalizeFdSpecificOptions = (options) => {
      const optionsCopy = { ...options };
      for (const optionName of FD_SPECIFIC_OPTIONS) {
        optionsCopy[optionName] = normalizeFdSpecificOption(options, optionName);
      }
      return optionsCopy;
    };
    normalizeFdSpecificOption = (options, optionName) => {
      const optionBaseArray = Array.from({ length: getStdioLength(options) + 1 });
      const optionArray = normalizeFdSpecificValue(options[optionName], optionBaseArray, optionName);
      return addDefaultValue(optionArray, optionName);
    };
    getStdioLength = ({ stdio }) => Array.isArray(stdio) ? Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length) : STANDARD_STREAMS_ALIASES.length;
    normalizeFdSpecificValue = (optionValue, optionArray, optionName) => isPlainObject(optionValue) ? normalizeOptionObject(optionValue, optionArray, optionName) : optionArray.fill(optionValue);
    normalizeOptionObject = (optionValue, optionArray, optionName) => {
      for (const fdName of Object.keys(optionValue).sort(compareFdName)) {
        for (const fdNumber of parseFdName(fdName, optionName, optionArray)) {
          optionArray[fdNumber] = optionValue[fdName];
        }
      }
      return optionArray;
    };
    compareFdName = (fdNameA, fdNameB) => getFdNameOrder(fdNameA) < getFdNameOrder(fdNameB) ? 1 : -1;
    getFdNameOrder = (fdName) => {
      if (fdName === "stdout" || fdName === "stderr") {
        return 0;
      }
      return fdName === "all" ? 2 : 1;
    };
    parseFdName = (fdName, optionName, optionArray) => {
      if (fdName === "ipc") {
        return [optionArray.length - 1];
      }
      const fdNumber = parseFd(fdName);
      if (fdNumber === void 0 || fdNumber === 0) {
        throw new TypeError(`"${optionName}.${fdName}" is invalid.
It must be "${optionName}.stdout", "${optionName}.stderr", "${optionName}.all", "${optionName}.ipc", or "${optionName}.fd3", "${optionName}.fd4" (and so on).`);
      }
      if (fdNumber >= optionArray.length) {
        throw new TypeError(`"${optionName}.${fdName}" is invalid: that file descriptor does not exist.
Please set the "stdio" option to ensure that file descriptor exists.`);
      }
      return fdNumber === "all" ? [1, 2] : [fdNumber];
    };
    parseFd = (fdName) => {
      if (fdName === "all") {
        return fdName;
      }
      if (STANDARD_STREAMS_ALIASES.includes(fdName)) {
        return STANDARD_STREAMS_ALIASES.indexOf(fdName);
      }
      const regexpResult = FD_REGEXP.exec(fdName);
      if (regexpResult !== null) {
        return Number(regexpResult[1]);
      }
    };
    FD_REGEXP = /^fd(\d+)$/;
    addDefaultValue = (optionArray, optionName) => optionArray.map((optionValue) => optionValue === void 0 ? DEFAULT_OPTIONS[optionName] : optionValue);
    verboseDefault = (0, import_node_util.debuglog)("execa").enabled ? "full" : "none";
    DEFAULT_OPTIONS = {
      lines: false,
      buffer: true,
      maxBuffer: 1e3 * 1e3 * 100,
      verbose: verboseDefault,
      stripFinalNewline: true
    };
    FD_SPECIFIC_OPTIONS = ["lines", "buffer", "maxBuffer", "verbose", "stripFinalNewline"];
    getFdSpecificValue = (optionArray, fdNumber) => fdNumber === "ipc" ? optionArray.at(-1) : optionArray[fdNumber];
  }
});

// node_modules/execa/lib/verbose/values.js
var isVerbose, isFullVerbose, getVerboseFunction, getFdVerbose, getFdGenericVerbose, isVerboseFunction, VERBOSE_VALUES;
var init_values = __esm({
  "node_modules/execa/lib/verbose/values.js"() {
    init_specific();
    isVerbose = ({ verbose }, fdNumber) => getFdVerbose(verbose, fdNumber) !== "none";
    isFullVerbose = ({ verbose }, fdNumber) => !["none", "short"].includes(getFdVerbose(verbose, fdNumber));
    getVerboseFunction = ({ verbose }, fdNumber) => {
      const fdVerbose = getFdVerbose(verbose, fdNumber);
      return isVerboseFunction(fdVerbose) ? fdVerbose : void 0;
    };
    getFdVerbose = (verbose, fdNumber) => fdNumber === void 0 ? getFdGenericVerbose(verbose) : getFdSpecificValue(verbose, fdNumber);
    getFdGenericVerbose = (verbose) => verbose.find((fdVerbose) => isVerboseFunction(fdVerbose)) ?? VERBOSE_VALUES.findLast((fdVerbose) => verbose.includes(fdVerbose));
    isVerboseFunction = (fdVerbose) => typeof fdVerbose === "function";
    VERBOSE_VALUES = ["none", "short", "full"];
  }
});

// node_modules/execa/lib/arguments/escape.js
var import_node_process2, import_node_util2, joinCommand, escapeLines, escapeControlCharacters, escapeControlCharacter, getSpecialCharRegExp, SPECIAL_CHAR_REGEXP, COMMON_ESCAPES, ASTRAL_START, quoteString, NO_ESCAPE_REGEXP;
var init_escape = __esm({
  "node_modules/execa/lib/arguments/escape.js"() {
    import_node_process2 = require("node:process");
    import_node_util2 = require("node:util");
    joinCommand = (filePath, rawArguments) => {
      const fileAndArguments = [filePath, ...rawArguments];
      const command = fileAndArguments.join(" ");
      const escapedCommand = fileAndArguments.map((fileAndArgument) => quoteString(escapeControlCharacters(fileAndArgument))).join(" ");
      return { command, escapedCommand };
    };
    escapeLines = (lines) => (0, import_node_util2.stripVTControlCharacters)(lines).split("\n").map((line) => escapeControlCharacters(line)).join("\n");
    escapeControlCharacters = (line) => line.replaceAll(SPECIAL_CHAR_REGEXP, (character) => escapeControlCharacter(character));
    escapeControlCharacter = (character) => {
      const commonEscape = COMMON_ESCAPES[character];
      if (commonEscape !== void 0) {
        return commonEscape;
      }
      const codepoint = character.codePointAt(0);
      const codepointHex = codepoint.toString(16);
      return codepoint <= ASTRAL_START ? `\\u${codepointHex.padStart(4, "0")}` : `\\U${codepointHex}`;
    };
    getSpecialCharRegExp = () => {
      try {
        return new RegExp("\\p{Separator}|\\p{Other}", "gu");
      } catch {
        return /[\s\u0000-\u001F\u007F-\u009F\u00AD]/g;
      }
    };
    SPECIAL_CHAR_REGEXP = getSpecialCharRegExp();
    COMMON_ESCAPES = {
      " ": " ",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t"
    };
    ASTRAL_START = 65535;
    quoteString = (escapedArgument) => {
      if (NO_ESCAPE_REGEXP.test(escapedArgument)) {
        return escapedArgument;
      }
      return import_node_process2.platform === "win32" ? `"${escapedArgument.replaceAll('"', '""')}"` : `'${escapedArgument.replaceAll("'", "'\\''")}'`;
    };
    NO_ESCAPE_REGEXP = /^[\w./-]+$/;
  }
});

// node_modules/is-unicode-supported/index.js
function isUnicodeSupported() {
  const { env } = import_node_process3.default;
  const { TERM, TERM_PROGRAM } = env;
  if (import_node_process3.default.platform !== "win32") {
    return TERM !== "linux";
  }
  return Boolean(env.WT_SESSION) || Boolean(env.TERMINUS_SUBLIME) || env.ConEmuTask === "{cmd::Cmder}" || TERM_PROGRAM === "Terminus-Sublime" || TERM_PROGRAM === "vscode" || TERM === "xterm-256color" || TERM === "alacritty" || TERM === "rxvt-unicode" || TERM === "rxvt-unicode-256color" || env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var import_node_process3;
var init_is_unicode_supported = __esm({
  "node_modules/is-unicode-supported/index.js"() {
    import_node_process3 = __toESM(require("node:process"), 1);
  }
});

// node_modules/figures/index.js
var common, specialMainSymbols, specialFallbackSymbols, mainSymbols, fallbackSymbols, shouldUseMain, figures, figures_default, replacements;
var init_figures = __esm({
  "node_modules/figures/index.js"() {
    init_is_unicode_supported();
    common = {
      circleQuestionMark: "(?)",
      questionMarkPrefix: "(?)",
      square: "\u2588",
      squareDarkShade: "\u2593",
      squareMediumShade: "\u2592",
      squareLightShade: "\u2591",
      squareTop: "\u2580",
      squareBottom: "\u2584",
      squareLeft: "\u258C",
      squareRight: "\u2590",
      squareCenter: "\u25A0",
      bullet: "\u25CF",
      dot: "\u2024",
      ellipsis: "\u2026",
      pointerSmall: "\u203A",
      triangleUp: "\u25B2",
      triangleUpSmall: "\u25B4",
      triangleDown: "\u25BC",
      triangleDownSmall: "\u25BE",
      triangleLeftSmall: "\u25C2",
      triangleRightSmall: "\u25B8",
      home: "\u2302",
      heart: "\u2665",
      musicNote: "\u266A",
      musicNoteBeamed: "\u266B",
      arrowUp: "\u2191",
      arrowDown: "\u2193",
      arrowLeft: "\u2190",
      arrowRight: "\u2192",
      arrowLeftRight: "\u2194",
      arrowUpDown: "\u2195",
      almostEqual: "\u2248",
      notEqual: "\u2260",
      lessOrEqual: "\u2264",
      greaterOrEqual: "\u2265",
      identical: "\u2261",
      infinity: "\u221E",
      subscriptZero: "\u2080",
      subscriptOne: "\u2081",
      subscriptTwo: "\u2082",
      subscriptThree: "\u2083",
      subscriptFour: "\u2084",
      subscriptFive: "\u2085",
      subscriptSix: "\u2086",
      subscriptSeven: "\u2087",
      subscriptEight: "\u2088",
      subscriptNine: "\u2089",
      oneHalf: "\xBD",
      oneThird: "\u2153",
      oneQuarter: "\xBC",
      oneFifth: "\u2155",
      oneSixth: "\u2159",
      oneEighth: "\u215B",
      twoThirds: "\u2154",
      twoFifths: "\u2156",
      threeQuarters: "\xBE",
      threeFifths: "\u2157",
      threeEighths: "\u215C",
      fourFifths: "\u2158",
      fiveSixths: "\u215A",
      fiveEighths: "\u215D",
      sevenEighths: "\u215E",
      line: "\u2500",
      lineBold: "\u2501",
      lineDouble: "\u2550",
      lineDashed0: "\u2504",
      lineDashed1: "\u2505",
      lineDashed2: "\u2508",
      lineDashed3: "\u2509",
      lineDashed4: "\u254C",
      lineDashed5: "\u254D",
      lineDashed6: "\u2574",
      lineDashed7: "\u2576",
      lineDashed8: "\u2578",
      lineDashed9: "\u257A",
      lineDashed10: "\u257C",
      lineDashed11: "\u257E",
      lineDashed12: "\u2212",
      lineDashed13: "\u2013",
      lineDashed14: "\u2010",
      lineDashed15: "\u2043",
      lineVertical: "\u2502",
      lineVerticalBold: "\u2503",
      lineVerticalDouble: "\u2551",
      lineVerticalDashed0: "\u2506",
      lineVerticalDashed1: "\u2507",
      lineVerticalDashed2: "\u250A",
      lineVerticalDashed3: "\u250B",
      lineVerticalDashed4: "\u254E",
      lineVerticalDashed5: "\u254F",
      lineVerticalDashed6: "\u2575",
      lineVerticalDashed7: "\u2577",
      lineVerticalDashed8: "\u2579",
      lineVerticalDashed9: "\u257B",
      lineVerticalDashed10: "\u257D",
      lineVerticalDashed11: "\u257F",
      lineDownLeft: "\u2510",
      lineDownLeftArc: "\u256E",
      lineDownBoldLeftBold: "\u2513",
      lineDownBoldLeft: "\u2512",
      lineDownLeftBold: "\u2511",
      lineDownDoubleLeftDouble: "\u2557",
      lineDownDoubleLeft: "\u2556",
      lineDownLeftDouble: "\u2555",
      lineDownRight: "\u250C",
      lineDownRightArc: "\u256D",
      lineDownBoldRightBold: "\u250F",
      lineDownBoldRight: "\u250E",
      lineDownRightBold: "\u250D",
      lineDownDoubleRightDouble: "\u2554",
      lineDownDoubleRight: "\u2553",
      lineDownRightDouble: "\u2552",
      lineUpLeft: "\u2518",
      lineUpLeftArc: "\u256F",
      lineUpBoldLeftBold: "\u251B",
      lineUpBoldLeft: "\u251A",
      lineUpLeftBold: "\u2519",
      lineUpDoubleLeftDouble: "\u255D",
      lineUpDoubleLeft: "\u255C",
      lineUpLeftDouble: "\u255B",
      lineUpRight: "\u2514",
      lineUpRightArc: "\u2570",
      lineUpBoldRightBold: "\u2517",
      lineUpBoldRight: "\u2516",
      lineUpRightBold: "\u2515",
      lineUpDoubleRightDouble: "\u255A",
      lineUpDoubleRight: "\u2559",
      lineUpRightDouble: "\u2558",
      lineUpDownLeft: "\u2524",
      lineUpBoldDownBoldLeftBold: "\u252B",
      lineUpBoldDownBoldLeft: "\u2528",
      lineUpDownLeftBold: "\u2525",
      lineUpBoldDownLeftBold: "\u2529",
      lineUpDownBoldLeftBold: "\u252A",
      lineUpDownBoldLeft: "\u2527",
      lineUpBoldDownLeft: "\u2526",
      lineUpDoubleDownDoubleLeftDouble: "\u2563",
      lineUpDoubleDownDoubleLeft: "\u2562",
      lineUpDownLeftDouble: "\u2561",
      lineUpDownRight: "\u251C",
      lineUpBoldDownBoldRightBold: "\u2523",
      lineUpBoldDownBoldRight: "\u2520",
      lineUpDownRightBold: "\u251D",
      lineUpBoldDownRightBold: "\u2521",
      lineUpDownBoldRightBold: "\u2522",
      lineUpDownBoldRight: "\u251F",
      lineUpBoldDownRight: "\u251E",
      lineUpDoubleDownDoubleRightDouble: "\u2560",
      lineUpDoubleDownDoubleRight: "\u255F",
      lineUpDownRightDouble: "\u255E",
      lineDownLeftRight: "\u252C",
      lineDownBoldLeftBoldRightBold: "\u2533",
      lineDownLeftBoldRightBold: "\u252F",
      lineDownBoldLeftRight: "\u2530",
      lineDownBoldLeftBoldRight: "\u2531",
      lineDownBoldLeftRightBold: "\u2532",
      lineDownLeftRightBold: "\u252E",
      lineDownLeftBoldRight: "\u252D",
      lineDownDoubleLeftDoubleRightDouble: "\u2566",
      lineDownDoubleLeftRight: "\u2565",
      lineDownLeftDoubleRightDouble: "\u2564",
      lineUpLeftRight: "\u2534",
      lineUpBoldLeftBoldRightBold: "\u253B",
      lineUpLeftBoldRightBold: "\u2537",
      lineUpBoldLeftRight: "\u2538",
      lineUpBoldLeftBoldRight: "\u2539",
      lineUpBoldLeftRightBold: "\u253A",
      lineUpLeftRightBold: "\u2536",
      lineUpLeftBoldRight: "\u2535",
      lineUpDoubleLeftDoubleRightDouble: "\u2569",
      lineUpDoubleLeftRight: "\u2568",
      lineUpLeftDoubleRightDouble: "\u2567",
      lineUpDownLeftRight: "\u253C",
      lineUpBoldDownBoldLeftBoldRightBold: "\u254B",
      lineUpDownBoldLeftBoldRightBold: "\u2548",
      lineUpBoldDownLeftBoldRightBold: "\u2547",
      lineUpBoldDownBoldLeftRightBold: "\u254A",
      lineUpBoldDownBoldLeftBoldRight: "\u2549",
      lineUpBoldDownLeftRight: "\u2540",
      lineUpDownBoldLeftRight: "\u2541",
      lineUpDownLeftBoldRight: "\u253D",
      lineUpDownLeftRightBold: "\u253E",
      lineUpBoldDownBoldLeftRight: "\u2542",
      lineUpDownLeftBoldRightBold: "\u253F",
      lineUpBoldDownLeftBoldRight: "\u2543",
      lineUpBoldDownLeftRightBold: "\u2544",
      lineUpDownBoldLeftBoldRight: "\u2545",
      lineUpDownBoldLeftRightBold: "\u2546",
      lineUpDoubleDownDoubleLeftDoubleRightDouble: "\u256C",
      lineUpDoubleDownDoubleLeftRight: "\u256B",
      lineUpDownLeftDoubleRightDouble: "\u256A",
      lineCross: "\u2573",
      lineBackslash: "\u2572",
      lineSlash: "\u2571"
    };
    specialMainSymbols = {
      tick: "\u2714",
      info: "\u2139",
      warning: "\u26A0",
      cross: "\u2718",
      squareSmall: "\u25FB",
      squareSmallFilled: "\u25FC",
      circle: "\u25EF",
      circleFilled: "\u25C9",
      circleDotted: "\u25CC",
      circleDouble: "\u25CE",
      circleCircle: "\u24DE",
      circleCross: "\u24E7",
      circlePipe: "\u24BE",
      radioOn: "\u25C9",
      radioOff: "\u25EF",
      checkboxOn: "\u2612",
      checkboxOff: "\u2610",
      checkboxCircleOn: "\u24E7",
      checkboxCircleOff: "\u24BE",
      pointer: "\u276F",
      triangleUpOutline: "\u25B3",
      triangleLeft: "\u25C0",
      triangleRight: "\u25B6",
      lozenge: "\u25C6",
      lozengeOutline: "\u25C7",
      hamburger: "\u2630",
      smiley: "\u32E1",
      mustache: "\u0DF4",
      star: "\u2605",
      play: "\u25B6",
      nodejs: "\u2B22",
      oneSeventh: "\u2150",
      oneNinth: "\u2151",
      oneTenth: "\u2152"
    };
    specialFallbackSymbols = {
      tick: "\u221A",
      info: "i",
      warning: "\u203C",
      cross: "\xD7",
      squareSmall: "\u25A1",
      squareSmallFilled: "\u25A0",
      circle: "( )",
      circleFilled: "(*)",
      circleDotted: "( )",
      circleDouble: "( )",
      circleCircle: "(\u25CB)",
      circleCross: "(\xD7)",
      circlePipe: "(\u2502)",
      radioOn: "(*)",
      radioOff: "( )",
      checkboxOn: "[\xD7]",
      checkboxOff: "[ ]",
      checkboxCircleOn: "(\xD7)",
      checkboxCircleOff: "( )",
      pointer: ">",
      triangleUpOutline: "\u2206",
      triangleLeft: "\u25C4",
      triangleRight: "\u25BA",
      lozenge: "\u2666",
      lozengeOutline: "\u25CA",
      hamburger: "\u2261",
      smiley: "\u263A",
      mustache: "\u250C\u2500\u2510",
      star: "\u2736",
      play: "\u25BA",
      nodejs: "\u2666",
      oneSeventh: "1/7",
      oneNinth: "1/9",
      oneTenth: "1/10"
    };
    mainSymbols = { ...common, ...specialMainSymbols };
    fallbackSymbols = { ...common, ...specialFallbackSymbols };
    shouldUseMain = isUnicodeSupported();
    figures = shouldUseMain ? mainSymbols : fallbackSymbols;
    figures_default = figures;
    replacements = Object.entries(specialMainSymbols);
  }
});

// node_modules/yoctocolors/base.js
var import_node_tty, hasColors, format, reset, bold, dim, italic, underline, overline, inverse, hidden, strikethrough, black, red, green, yellow, blue, magenta, cyan, white, gray, bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite, bgGray, redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright, bgRedBright, bgGreenBright, bgYellowBright, bgBlueBright, bgMagentaBright, bgCyanBright, bgWhiteBright;
var init_base = __esm({
  "node_modules/yoctocolors/base.js"() {
    import_node_tty = __toESM(require("node:tty"), 1);
    hasColors = import_node_tty.default?.WriteStream?.prototype?.hasColors?.() ?? false;
    format = (open, close) => {
      if (!hasColors) {
        return (input) => input;
      }
      const openCode = `\x1B[${open}m`;
      const closeCode = `\x1B[${close}m`;
      return (input) => {
        const string = input + "";
        let index = string.indexOf(closeCode);
        if (index === -1) {
          return openCode + string + closeCode;
        }
        let result = openCode;
        let lastIndex = 0;
        while (index !== -1) {
          result += string.slice(lastIndex, index) + openCode;
          lastIndex = index + closeCode.length;
          index = string.indexOf(closeCode, lastIndex);
        }
        result += string.slice(lastIndex) + closeCode;
        return result;
      };
    };
    reset = format(0, 0);
    bold = format(1, 22);
    dim = format(2, 22);
    italic = format(3, 23);
    underline = format(4, 24);
    overline = format(53, 55);
    inverse = format(7, 27);
    hidden = format(8, 28);
    strikethrough = format(9, 29);
    black = format(30, 39);
    red = format(31, 39);
    green = format(32, 39);
    yellow = format(33, 39);
    blue = format(34, 39);
    magenta = format(35, 39);
    cyan = format(36, 39);
    white = format(37, 39);
    gray = format(90, 39);
    bgBlack = format(40, 49);
    bgRed = format(41, 49);
    bgGreen = format(42, 49);
    bgYellow = format(43, 49);
    bgBlue = format(44, 49);
    bgMagenta = format(45, 49);
    bgCyan = format(46, 49);
    bgWhite = format(47, 49);
    bgGray = format(100, 49);
    redBright = format(91, 39);
    greenBright = format(92, 39);
    yellowBright = format(93, 39);
    blueBright = format(94, 39);
    magentaBright = format(95, 39);
    cyanBright = format(96, 39);
    whiteBright = format(97, 39);
    bgRedBright = format(101, 49);
    bgGreenBright = format(102, 49);
    bgYellowBright = format(103, 49);
    bgBlueBright = format(104, 49);
    bgMagentaBright = format(105, 49);
    bgCyanBright = format(106, 49);
    bgWhiteBright = format(107, 49);
  }
});

// node_modules/yoctocolors/index.js
var init_yoctocolors = __esm({
  "node_modules/yoctocolors/index.js"() {
    init_base();
    init_base();
  }
});

// node_modules/execa/lib/verbose/default.js
var defaultVerboseFunction, serializeTimestamp, padField, getFinalIcon, ICONS, identity, COLORS;
var init_default = __esm({
  "node_modules/execa/lib/verbose/default.js"() {
    init_figures();
    init_yoctocolors();
    defaultVerboseFunction = ({
      type,
      message,
      timestamp,
      piped,
      commandId,
      result: { failed = false } = {},
      options: { reject = true }
    }) => {
      const timestampString = serializeTimestamp(timestamp);
      const icon = ICONS[type]({ failed, reject, piped });
      const color = COLORS[type]({ reject });
      return `${gray(`[${timestampString}]`)} ${gray(`[${commandId}]`)} ${color(icon)} ${color(message)}`;
    };
    serializeTimestamp = (timestamp) => `${padField(timestamp.getHours(), 2)}:${padField(timestamp.getMinutes(), 2)}:${padField(timestamp.getSeconds(), 2)}.${padField(timestamp.getMilliseconds(), 3)}`;
    padField = (field, padding) => String(field).padStart(padding, "0");
    getFinalIcon = ({ failed, reject }) => {
      if (!failed) {
        return figures_default.tick;
      }
      return reject ? figures_default.cross : figures_default.warning;
    };
    ICONS = {
      command: ({ piped }) => piped ? "|" : "$",
      output: () => " ",
      ipc: () => "*",
      error: getFinalIcon,
      duration: getFinalIcon
    };
    identity = (string) => string;
    COLORS = {
      command: () => bold,
      output: () => identity,
      ipc: () => identity,
      error: ({ reject }) => reject ? redBright : yellowBright,
      duration: () => gray
    };
  }
});

// node_modules/execa/lib/verbose/custom.js
var applyVerboseOnLines, applyVerboseFunction, appendNewline;
var init_custom = __esm({
  "node_modules/execa/lib/verbose/custom.js"() {
    init_values();
    applyVerboseOnLines = (printedLines, verboseInfo, fdNumber) => {
      const verboseFunction = getVerboseFunction(verboseInfo, fdNumber);
      return printedLines.map(({ verboseLine, verboseObject }) => applyVerboseFunction(verboseLine, verboseObject, verboseFunction)).filter((printedLine) => printedLine !== void 0).map((printedLine) => appendNewline(printedLine)).join("");
    };
    applyVerboseFunction = (verboseLine, verboseObject, verboseFunction) => {
      if (verboseFunction === void 0) {
        return verboseLine;
      }
      const printedLine = verboseFunction(verboseLine, verboseObject);
      if (typeof printedLine === "string") {
        return printedLine;
      }
    };
    appendNewline = (printedLine) => printedLine.endsWith("\n") ? printedLine : `${printedLine}
`;
  }
});

// node_modules/execa/lib/verbose/log.js
var import_node_util3, verboseLog, getVerboseObject, getPrintedLines, getPrintedLine, serializeVerboseMessage, TAB_SIZE;
var init_log = __esm({
  "node_modules/execa/lib/verbose/log.js"() {
    import_node_util3 = require("node:util");
    init_escape();
    init_default();
    init_custom();
    verboseLog = ({ type, verboseMessage, fdNumber, verboseInfo, result }) => {
      const verboseObject = getVerboseObject({ type, result, verboseInfo });
      const printedLines = getPrintedLines(verboseMessage, verboseObject);
      const finalLines = applyVerboseOnLines(printedLines, verboseInfo, fdNumber);
      if (finalLines !== "") {
        console.warn(finalLines.slice(0, -1));
      }
    };
    getVerboseObject = ({
      type,
      result,
      verboseInfo: { escapedCommand, commandId, rawOptions: { piped = false, ...options } }
    }) => ({
      type,
      escapedCommand,
      commandId: `${commandId}`,
      timestamp: /* @__PURE__ */ new Date(),
      piped,
      result,
      options
    });
    getPrintedLines = (verboseMessage, verboseObject) => verboseMessage.split("\n").map((message) => getPrintedLine({ ...verboseObject, message }));
    getPrintedLine = (verboseObject) => {
      const verboseLine = defaultVerboseFunction(verboseObject);
      return { verboseLine, verboseObject };
    };
    serializeVerboseMessage = (message) => {
      const messageString = typeof message === "string" ? message : (0, import_node_util3.inspect)(message);
      const escapedMessage = escapeLines(messageString);
      return escapedMessage.replaceAll("	", " ".repeat(TAB_SIZE));
    };
    TAB_SIZE = 2;
  }
});

// node_modules/execa/lib/verbose/start.js
var logCommand;
var init_start = __esm({
  "node_modules/execa/lib/verbose/start.js"() {
    init_values();
    init_log();
    logCommand = (escapedCommand, verboseInfo) => {
      if (!isVerbose(verboseInfo)) {
        return;
      }
      verboseLog({
        type: "command",
        verboseMessage: escapedCommand,
        verboseInfo
      });
    };
  }
});

// node_modules/execa/lib/verbose/info.js
var getVerboseInfo, getCommandId, COMMAND_ID, validateVerbose;
var init_info = __esm({
  "node_modules/execa/lib/verbose/info.js"() {
    init_values();
    getVerboseInfo = (verbose, escapedCommand, rawOptions) => {
      validateVerbose(verbose);
      const commandId = getCommandId(verbose);
      return {
        verbose,
        escapedCommand,
        commandId,
        rawOptions
      };
    };
    getCommandId = (verbose) => isVerbose({ verbose }) ? COMMAND_ID++ : void 0;
    COMMAND_ID = 0n;
    validateVerbose = (verbose) => {
      for (const fdVerbose of verbose) {
        if (fdVerbose === false) {
          throw new TypeError(`The "verbose: false" option was renamed to "verbose: 'none'".`);
        }
        if (fdVerbose === true) {
          throw new TypeError(`The "verbose: true" option was renamed to "verbose: 'short'".`);
        }
        if (!VERBOSE_VALUES.includes(fdVerbose) && !isVerboseFunction(fdVerbose)) {
          const allowedValues = VERBOSE_VALUES.map((allowedValue) => `'${allowedValue}'`).join(", ");
          throw new TypeError(`The "verbose" option must not be ${fdVerbose}. Allowed values are: ${allowedValues} or a function.`);
        }
      }
    };
  }
});

// node_modules/execa/lib/return/duration.js
var import_node_process4, getStartTime, getDurationMs;
var init_duration = __esm({
  "node_modules/execa/lib/return/duration.js"() {
    import_node_process4 = require("node:process");
    getStartTime = () => import_node_process4.hrtime.bigint();
    getDurationMs = (startTime) => Number(import_node_process4.hrtime.bigint() - startTime) / 1e6;
  }
});

// node_modules/execa/lib/arguments/command.js
var handleCommand;
var init_command = __esm({
  "node_modules/execa/lib/arguments/command.js"() {
    init_start();
    init_info();
    init_duration();
    init_escape();
    init_specific();
    handleCommand = (filePath, rawArguments, rawOptions) => {
      const startTime = getStartTime();
      const { command, escapedCommand } = joinCommand(filePath, rawArguments);
      const verbose = normalizeFdSpecificOption(rawOptions, "verbose");
      const verboseInfo = getVerboseInfo(verbose, escapedCommand, { ...rawOptions });
      logCommand(escapedCommand, verboseInfo);
      return {
        command,
        escapedCommand,
        startTime,
        verboseInfo
      };
    };
  }
});

// node_modules/isexe/windows.js
var require_windows = __commonJS({
  "node_modules/isexe/windows.js"(exports2, module2) {
    module2.exports = isexe;
    isexe.sync = sync;
    var fs = require("fs");
    function checkPathExt(path6, options) {
      var pathext = options.pathExt !== void 0 ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i2 = 0; i2 < pathext.length; i2++) {
        var p = pathext[i2].toLowerCase();
        if (p && path6.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path6, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path6, options);
    }
    function isexe(path6, options, cb) {
      fs.stat(path6, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path6, options));
      });
    }
    function sync(path6, options) {
      return checkStat(fs.statSync(path6), path6, options);
    }
  }
});

// node_modules/isexe/mode.js
var require_mode = __commonJS({
  "node_modules/isexe/mode.js"(exports2, module2) {
    module2.exports = isexe;
    isexe.sync = sync;
    var fs = require("fs");
    function isexe(path6, options, cb) {
      fs.stat(path6, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path6, options) {
      return checkStat(fs.statSync(path6), options);
    }
    function checkStat(stat, options) {
      return stat.isFile() && checkMode(stat, options);
    }
    function checkMode(stat, options) {
      var mod = stat.mode;
      var uid = stat.uid;
      var gid = stat.gid;
      var myUid = options.uid !== void 0 ? options.uid : process.getuid && process.getuid();
      var myGid = options.gid !== void 0 ? options.gid : process.getgid && process.getgid();
      var u2 = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o2 = parseInt("001", 8);
      var ug = u2 | g;
      var ret = mod & o2 || mod & g && gid === myGid || mod & u2 && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
  }
});

// node_modules/isexe/index.js
var require_isexe = __commonJS({
  "node_modules/isexe/index.js"(exports2, module2) {
    var fs = require("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module2.exports = isexe;
    isexe.sync = sync;
    function isexe(path6, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve, reject) {
          isexe(path6, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve(is);
            }
          });
        });
      }
      core(path6, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path6, options) {
      try {
        return core.sync(path6, options || {});
      } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") {
          return false;
        } else {
          throw er;
        }
      }
    }
  }
});

// node_modules/which/which.js
var require_which = __commonJS({
  "node_modules/which/which.js"(exports2, module2) {
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path6 = require("path");
    var COLON = isWindows ? ";" : ":";
    var isexe = require_isexe();
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [
        // windows always checks the cwd first
        ...isWindows ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */
        "").split(colon)
      ];
      const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows ? pathExtExe.split(colon) : [""];
      if (isWindows) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
          pathExt.unshift("");
      }
      return {
        pathEnv,
        pathExt,
        pathExtExe
      };
    };
    var which = (cmd, opt, cb) => {
      if (typeof opt === "function") {
        cb = opt;
        opt = {};
      }
      if (!opt)
        opt = {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      const step = (i2) => new Promise((resolve, reject) => {
        if (i2 === pathEnv.length)
          return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i2];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path6.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve(subStep(p, i2, 0));
      });
      const subStep = (p, i2, ii) => new Promise((resolve, reject) => {
        if (ii === pathExt.length)
          return resolve(step(i2 + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve(p + ext);
          }
          return resolve(subStep(p, i2, ii + 1));
        });
      });
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    };
    var whichSync = (cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i2 = 0; i2 < pathEnv.length; i2++) {
        const ppRaw = pathEnv[i2];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path6.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for (let j = 0; j < pathExt.length; j++) {
          const cur = p + pathExt[j];
          try {
            const is = isexe.sync(cur, { pathExt: pathExtExe });
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {
          }
        }
      }
      if (opt.all && found.length)
        return found;
      if (opt.nothrow)
        return null;
      throw getNotFoundError(cmd);
    };
    module2.exports = which;
    which.sync = whichSync;
  }
});

// node_modules/path-key/index.js
var require_path_key = __commonJS({
  "node_modules/path-key/index.js"(exports2, module2) {
    "use strict";
    var pathKey2 = (options = {}) => {
      const environment = options.env || process.env;
      const platform2 = options.platform || process.platform;
      if (platform2 !== "win32") {
        return "PATH";
      }
      return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
    };
    module2.exports = pathKey2;
    module2.exports.default = pathKey2;
  }
});

// node_modules/cross-spawn/lib/util/resolveCommand.js
var require_resolveCommand = __commonJS({
  "node_modules/cross-spawn/lib/util/resolveCommand.js"(exports2, module2) {
    "use strict";
    var path6 = require("path");
    var which = require_which();
    var getPathKey = require_path_key();
    function resolveCommandAttempt(parsed, withoutPathExt) {
      const env = parsed.options.env || process.env;
      const cwd = process.cwd();
      const hasCustomCwd = parsed.options.cwd != null;
      const shouldSwitchCwd = hasCustomCwd && process.chdir !== void 0 && !process.chdir.disabled;
      if (shouldSwitchCwd) {
        try {
          process.chdir(parsed.options.cwd);
        } catch (err) {
        }
      }
      let resolved;
      try {
        resolved = which.sync(parsed.command, {
          path: env[getPathKey({ env })],
          pathExt: withoutPathExt ? path6.delimiter : void 0
        });
      } catch (e) {
      } finally {
        if (shouldSwitchCwd) {
          process.chdir(cwd);
        }
      }
      if (resolved) {
        resolved = path6.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
      }
      return resolved;
    }
    function resolveCommand(parsed) {
      return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
    }
    module2.exports = resolveCommand;
  }
});

// node_modules/cross-spawn/lib/util/escape.js
var require_escape = __commonJS({
  "node_modules/cross-spawn/lib/util/escape.js"(exports2, module2) {
    "use strict";
    var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
    function escapeCommand(arg) {
      arg = arg.replace(metaCharsRegExp, "^$1");
      return arg;
    }
    function escapeArgument(arg, doubleEscapeMetaChars) {
      arg = `${arg}`;
      arg = arg.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"');
      arg = arg.replace(/(?=(\\+?)?)\1$/, "$1$1");
      arg = `"${arg}"`;
      arg = arg.replace(metaCharsRegExp, "^$1");
      if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, "^$1");
      }
      return arg;
    }
    module2.exports.command = escapeCommand;
    module2.exports.argument = escapeArgument;
  }
});

// node_modules/shebang-regex/index.js
var require_shebang_regex = __commonJS({
  "node_modules/shebang-regex/index.js"(exports2, module2) {
    "use strict";
    module2.exports = /^#!(.*)/;
  }
});

// node_modules/shebang-command/index.js
var require_shebang_command = __commonJS({
  "node_modules/shebang-command/index.js"(exports2, module2) {
    "use strict";
    var shebangRegex = require_shebang_regex();
    module2.exports = (string = "") => {
      const match = string.match(shebangRegex);
      if (!match) {
        return null;
      }
      const [path6, argument] = match[0].replace(/#! ?/, "").split(" ");
      const binary = path6.split("/").pop();
      if (binary === "env") {
        return argument;
      }
      return argument ? `${binary} ${argument}` : binary;
    };
  }
});

// node_modules/cross-spawn/lib/util/readShebang.js
var require_readShebang = __commonJS({
  "node_modules/cross-spawn/lib/util/readShebang.js"(exports2, module2) {
    "use strict";
    var fs = require("fs");
    var shebangCommand = require_shebang_command();
    function readShebang(command) {
      const size = 150;
      const buffer = Buffer.alloc(size);
      let fd;
      try {
        fd = fs.openSync(command, "r");
        fs.readSync(fd, buffer, 0, size, 0);
        fs.closeSync(fd);
      } catch (e) {
      }
      return shebangCommand(buffer.toString());
    }
    module2.exports = readShebang;
  }
});

// node_modules/cross-spawn/lib/parse.js
var require_parse = __commonJS({
  "node_modules/cross-spawn/lib/parse.js"(exports2, module2) {
    "use strict";
    var path6 = require("path");
    var resolveCommand = require_resolveCommand();
    var escape = require_escape();
    var readShebang = require_readShebang();
    var isWin = process.platform === "win32";
    var isExecutableRegExp = /\.(?:com|exe)$/i;
    var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function detectShebang(parsed) {
      parsed.file = resolveCommand(parsed);
      const shebang = parsed.file && readShebang(parsed.file);
      if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return resolveCommand(parsed);
      }
      return parsed.file;
    }
    function parseNonShell(parsed) {
      if (!isWin) {
        return parsed;
      }
      const commandFile = detectShebang(parsed);
      const needsShell = !isExecutableRegExp.test(commandFile);
      if (parsed.options.forceShell || needsShell) {
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
        parsed.command = path6.normalize(parsed.command);
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [parsed.command].concat(parsed.args).join(" ");
        parsed.args = ["/d", "/s", "/c", `"${shellCommand}"`];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true;
      }
      return parsed;
    }
    function parse(command, args, options) {
      if (args && !Array.isArray(args)) {
        options = args;
        args = null;
      }
      args = args ? args.slice(0) : [];
      options = Object.assign({}, options);
      const parsed = {
        command,
        args,
        options,
        file: void 0,
        original: {
          command,
          args
        }
      };
      return options.shell ? parsed : parseNonShell(parsed);
    }
    module2.exports = parse;
  }
});

// node_modules/cross-spawn/lib/enoent.js
var require_enoent = __commonJS({
  "node_modules/cross-spawn/lib/enoent.js"(exports2, module2) {
    "use strict";
    var isWin = process.platform === "win32";
    function notFoundError(original, syscall) {
      return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
      });
    }
    function hookChildProcess(cp, parsed) {
      if (!isWin) {
        return;
      }
      const originalEmit = cp.emit;
      cp.emit = function(name, arg1) {
        if (name === "exit") {
          const err = verifyENOENT(arg1, parsed);
          if (err) {
            return originalEmit.call(cp, "error", err);
          }
        }
        return originalEmit.apply(cp, arguments);
      };
    }
    function verifyENOENT(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawn");
      }
      return null;
    }
    function verifyENOENTSync(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawnSync");
      }
      return null;
    }
    module2.exports = {
      hookChildProcess,
      verifyENOENT,
      verifyENOENTSync,
      notFoundError
    };
  }
});

// node_modules/cross-spawn/index.js
var require_cross_spawn = __commonJS({
  "node_modules/cross-spawn/index.js"(exports2, module2) {
    "use strict";
    var cp = require("child_process");
    var parse = require_parse();
    var enoent = require_enoent();
    function spawn2(command, args, options) {
      const parsed = parse(command, args, options);
      const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
      enoent.hookChildProcess(spawned, parsed);
      return spawned;
    }
    function spawnSync2(command, args, options) {
      const parsed = parse(command, args, options);
      const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
      result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
      return result;
    }
    module2.exports = spawn2;
    module2.exports.spawn = spawn2;
    module2.exports.sync = spawnSync2;
    module2.exports._parse = parse;
    module2.exports._enoent = enoent;
  }
});

// node_modules/npm-run-path/node_modules/path-key/index.js
function pathKey(options = {}) {
  const {
    env = process.env,
    platform: platform2 = process.platform
  } = options;
  if (platform2 !== "win32") {
    return "PATH";
  }
  return Object.keys(env).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
}
var init_path_key = __esm({
  "node_modules/npm-run-path/node_modules/path-key/index.js"() {
  }
});

// node_modules/unicorn-magic/default.js
var init_default2 = __esm({
  "node_modules/unicorn-magic/default.js"() {
  }
});

// node_modules/unicorn-magic/node.js
function toPath(urlOrPath) {
  return urlOrPath instanceof URL ? (0, import_node_url2.fileURLToPath)(urlOrPath) : urlOrPath;
}
function traversePathUp(startPath) {
  return {
    *[Symbol.iterator]() {
      let currentPath = import_node_path.default.resolve(toPath(startPath));
      let previousPath;
      while (previousPath !== currentPath) {
        yield currentPath;
        previousPath = currentPath;
        currentPath = import_node_path.default.resolve(currentPath, "..");
      }
    }
  };
}
var import_node_util4, import_node_child_process2, import_node_path, import_node_url2, execFileOriginal, TEN_MEGABYTES_IN_BYTES;
var init_node = __esm({
  "node_modules/unicorn-magic/node.js"() {
    import_node_util4 = require("node:util");
    import_node_child_process2 = require("node:child_process");
    import_node_path = __toESM(require("node:path"), 1);
    import_node_url2 = require("node:url");
    init_default2();
    execFileOriginal = (0, import_node_util4.promisify)(import_node_child_process2.execFile);
    TEN_MEGABYTES_IN_BYTES = 10 * 1024 * 1024;
  }
});

// node_modules/npm-run-path/index.js
var import_node_process5, import_node_path2, npmRunPath, applyPreferLocal, applyExecPath, npmRunPathEnv;
var init_npm_run_path = __esm({
  "node_modules/npm-run-path/index.js"() {
    import_node_process5 = __toESM(require("node:process"), 1);
    import_node_path2 = __toESM(require("node:path"), 1);
    init_path_key();
    init_node();
    npmRunPath = ({
      cwd = import_node_process5.default.cwd(),
      path: pathOption = import_node_process5.default.env[pathKey()],
      preferLocal = true,
      execPath: execPath2 = import_node_process5.default.execPath,
      addExecPath = true
    } = {}) => {
      const cwdPath = import_node_path2.default.resolve(toPath(cwd));
      const result = [];
      const pathParts = pathOption.split(import_node_path2.default.delimiter);
      if (preferLocal) {
        applyPreferLocal(result, pathParts, cwdPath);
      }
      if (addExecPath) {
        applyExecPath(result, pathParts, execPath2, cwdPath);
      }
      return pathOption === "" || pathOption === import_node_path2.default.delimiter ? `${result.join(import_node_path2.default.delimiter)}${pathOption}` : [...result, pathOption].join(import_node_path2.default.delimiter);
    };
    applyPreferLocal = (result, pathParts, cwdPath) => {
      for (const directory of traversePathUp(cwdPath)) {
        const pathPart = import_node_path2.default.join(directory, "node_modules/.bin");
        if (!pathParts.includes(pathPart)) {
          result.push(pathPart);
        }
      }
    };
    applyExecPath = (result, pathParts, execPath2, cwdPath) => {
      const pathPart = import_node_path2.default.resolve(cwdPath, toPath(execPath2), "..");
      if (!pathParts.includes(pathPart)) {
        result.push(pathPart);
      }
    };
    npmRunPathEnv = ({ env = import_node_process5.default.env, ...options } = {}) => {
      env = { ...env };
      const pathName = pathKey({ env });
      options.path = env[pathName];
      env[pathName] = npmRunPath(options);
      return env;
    };
  }
});

// node_modules/execa/lib/return/final-error.js
var getFinalError, DiscardedError, setErrorName, isExecaError, execaErrorSymbol, isErrorInstance, ExecaError, ExecaSyncError;
var init_final_error = __esm({
  "node_modules/execa/lib/return/final-error.js"() {
    getFinalError = (originalError, message, isSync) => {
      const ErrorClass = isSync ? ExecaSyncError : ExecaError;
      const options = originalError instanceof DiscardedError ? {} : { cause: originalError };
      return new ErrorClass(message, options);
    };
    DiscardedError = class extends Error {
    };
    setErrorName = (ErrorClass, value) => {
      Object.defineProperty(ErrorClass.prototype, "name", {
        value,
        writable: true,
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ErrorClass.prototype, execaErrorSymbol, {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false
      });
    };
    isExecaError = (error) => isErrorInstance(error) && execaErrorSymbol in error;
    execaErrorSymbol = Symbol("isExecaError");
    isErrorInstance = (value) => Object.prototype.toString.call(value) === "[object Error]";
    ExecaError = class extends Error {
    };
    setErrorName(ExecaError, ExecaError.name);
    ExecaSyncError = class extends Error {
    };
    setErrorName(ExecaSyncError, ExecaSyncError.name);
  }
});

// node_modules/human-signals/build/src/realtime.js
var getRealtimeSignals, getRealtimeSignal, SIGRTMIN, SIGRTMAX;
var init_realtime = __esm({
  "node_modules/human-signals/build/src/realtime.js"() {
    getRealtimeSignals = () => {
      const length = SIGRTMAX - SIGRTMIN + 1;
      return Array.from({ length }, getRealtimeSignal);
    };
    getRealtimeSignal = (value, index) => ({
      name: `SIGRT${index + 1}`,
      number: SIGRTMIN + index,
      action: "terminate",
      description: "Application-specific signal (realtime)",
      standard: "posix"
    });
    SIGRTMIN = 34;
    SIGRTMAX = 64;
  }
});

// node_modules/human-signals/build/src/core.js
var SIGNALS;
var init_core = __esm({
  "node_modules/human-signals/build/src/core.js"() {
    SIGNALS = [
      {
        name: "SIGHUP",
        number: 1,
        action: "terminate",
        description: "Terminal closed",
        standard: "posix"
      },
      {
        name: "SIGINT",
        number: 2,
        action: "terminate",
        description: "User interruption with CTRL-C",
        standard: "ansi"
      },
      {
        name: "SIGQUIT",
        number: 3,
        action: "core",
        description: "User interruption with CTRL-\\",
        standard: "posix"
      },
      {
        name: "SIGILL",
        number: 4,
        action: "core",
        description: "Invalid machine instruction",
        standard: "ansi"
      },
      {
        name: "SIGTRAP",
        number: 5,
        action: "core",
        description: "Debugger breakpoint",
        standard: "posix"
      },
      {
        name: "SIGABRT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "ansi"
      },
      {
        name: "SIGIOT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "bsd"
      },
      {
        name: "SIGBUS",
        number: 7,
        action: "core",
        description: "Bus error due to misaligned, non-existing address or paging error",
        standard: "bsd"
      },
      {
        name: "SIGEMT",
        number: 7,
        action: "terminate",
        description: "Command should be emulated but is not implemented",
        standard: "other"
      },
      {
        name: "SIGFPE",
        number: 8,
        action: "core",
        description: "Floating point arithmetic error",
        standard: "ansi"
      },
      {
        name: "SIGKILL",
        number: 9,
        action: "terminate",
        description: "Forced termination",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGUSR1",
        number: 10,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
      },
      {
        name: "SIGSEGV",
        number: 11,
        action: "core",
        description: "Segmentation fault",
        standard: "ansi"
      },
      {
        name: "SIGUSR2",
        number: 12,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
      },
      {
        name: "SIGPIPE",
        number: 13,
        action: "terminate",
        description: "Broken pipe or socket",
        standard: "posix"
      },
      {
        name: "SIGALRM",
        number: 14,
        action: "terminate",
        description: "Timeout or timer",
        standard: "posix"
      },
      {
        name: "SIGTERM",
        number: 15,
        action: "terminate",
        description: "Termination",
        standard: "ansi"
      },
      {
        name: "SIGSTKFLT",
        number: 16,
        action: "terminate",
        description: "Stack is empty or overflowed",
        standard: "other"
      },
      {
        name: "SIGCHLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "posix"
      },
      {
        name: "SIGCLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "other"
      },
      {
        name: "SIGCONT",
        number: 18,
        action: "unpause",
        description: "Unpaused",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGSTOP",
        number: 19,
        action: "pause",
        description: "Paused",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGTSTP",
        number: 20,
        action: "pause",
        description: 'Paused using CTRL-Z or "suspend"',
        standard: "posix"
      },
      {
        name: "SIGTTIN",
        number: 21,
        action: "pause",
        description: "Background process cannot read terminal input",
        standard: "posix"
      },
      {
        name: "SIGBREAK",
        number: 21,
        action: "terminate",
        description: "User interruption with CTRL-BREAK",
        standard: "other"
      },
      {
        name: "SIGTTOU",
        number: 22,
        action: "pause",
        description: "Background process cannot write to terminal output",
        standard: "posix"
      },
      {
        name: "SIGURG",
        number: 23,
        action: "ignore",
        description: "Socket received out-of-band data",
        standard: "bsd"
      },
      {
        name: "SIGXCPU",
        number: 24,
        action: "core",
        description: "Process timed out",
        standard: "bsd"
      },
      {
        name: "SIGXFSZ",
        number: 25,
        action: "core",
        description: "File too big",
        standard: "bsd"
      },
      {
        name: "SIGVTALRM",
        number: 26,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
      },
      {
        name: "SIGPROF",
        number: 27,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
      },
      {
        name: "SIGWINCH",
        number: 28,
        action: "ignore",
        description: "Terminal window size changed",
        standard: "bsd"
      },
      {
        name: "SIGIO",
        number: 29,
        action: "terminate",
        description: "I/O is available",
        standard: "other"
      },
      {
        name: "SIGPOLL",
        number: 29,
        action: "terminate",
        description: "Watched event",
        standard: "other"
      },
      {
        name: "SIGINFO",
        number: 29,
        action: "ignore",
        description: "Request for process information",
        standard: "other"
      },
      {
        name: "SIGPWR",
        number: 30,
        action: "terminate",
        description: "Device running out of power",
        standard: "systemv"
      },
      {
        name: "SIGSYS",
        number: 31,
        action: "core",
        description: "Invalid system call",
        standard: "other"
      },
      {
        name: "SIGUNUSED",
        number: 31,
        action: "terminate",
        description: "Invalid system call",
        standard: "other"
      }
    ];
  }
});

// node_modules/human-signals/build/src/signals.js
var import_node_os, getSignals, normalizeSignal;
var init_signals = __esm({
  "node_modules/human-signals/build/src/signals.js"() {
    import_node_os = require("node:os");
    init_core();
    init_realtime();
    getSignals = () => {
      const realtimeSignals = getRealtimeSignals();
      const signals2 = [...SIGNALS, ...realtimeSignals].map(normalizeSignal);
      return signals2;
    };
    normalizeSignal = ({
      name,
      number: defaultNumber,
      description,
      action,
      forced = false,
      standard
    }) => {
      const {
        signals: { [name]: constantSignal }
      } = import_node_os.constants;
      const supported = constantSignal !== void 0;
      const number = supported ? constantSignal : defaultNumber;
      return { name, number, description, supported, action, forced, standard };
    };
  }
});

// node_modules/human-signals/build/src/main.js
var import_node_os2, getSignalsByName, getSignalByName, signalsByName, getSignalsByNumber, getSignalByNumber, findSignalByNumber, signalsByNumber;
var init_main = __esm({
  "node_modules/human-signals/build/src/main.js"() {
    import_node_os2 = require("node:os");
    init_realtime();
    init_signals();
    getSignalsByName = () => {
      const signals2 = getSignals();
      return Object.fromEntries(signals2.map(getSignalByName));
    };
    getSignalByName = ({
      name,
      number,
      description,
      supported,
      action,
      forced,
      standard
    }) => [name, { name, number, description, supported, action, forced, standard }];
    signalsByName = getSignalsByName();
    getSignalsByNumber = () => {
      const signals2 = getSignals();
      const length = SIGRTMAX + 1;
      const signalsA = Array.from(
        { length },
        (value, number) => getSignalByNumber(number, signals2)
      );
      return Object.assign({}, ...signalsA);
    };
    getSignalByNumber = (number, signals2) => {
      const signal = findSignalByNumber(number, signals2);
      if (signal === void 0) {
        return {};
      }
      const { name, description, supported, action, forced, standard } = signal;
      return {
        [number]: {
          name,
          number,
          description,
          supported,
          action,
          forced,
          standard
        }
      };
    };
    findSignalByNumber = (number, signals2) => {
      const signal = signals2.find(({ name }) => import_node_os2.constants.signals[name] === number);
      if (signal !== void 0) {
        return signal;
      }
      return signals2.find((signalA) => signalA.number === number);
    };
    signalsByNumber = getSignalsByNumber();
  }
});

// node_modules/execa/lib/terminate/signal.js
var import_node_os3, normalizeKillSignal, normalizeSignalArgument, normalizeSignal2, normalizeSignalInteger, getSignalsIntegerToName, signalsIntegerToName, normalizeSignalName, getAvailableSignals, getAvailableSignalNames, getAvailableSignalIntegers, getSignalDescription;
var init_signal = __esm({
  "node_modules/execa/lib/terminate/signal.js"() {
    import_node_os3 = require("node:os");
    init_main();
    normalizeKillSignal = (killSignal) => {
      const optionName = "option `killSignal`";
      if (killSignal === 0) {
        throw new TypeError(`Invalid ${optionName}: 0 cannot be used.`);
      }
      return normalizeSignal2(killSignal, optionName);
    };
    normalizeSignalArgument = (signal) => signal === 0 ? signal : normalizeSignal2(signal, "`subprocess.kill()`'s argument");
    normalizeSignal2 = (signalNameOrInteger, optionName) => {
      if (Number.isInteger(signalNameOrInteger)) {
        return normalizeSignalInteger(signalNameOrInteger, optionName);
      }
      if (typeof signalNameOrInteger === "string") {
        return normalizeSignalName(signalNameOrInteger, optionName);
      }
      throw new TypeError(`Invalid ${optionName} ${String(signalNameOrInteger)}: it must be a string or an integer.
${getAvailableSignals()}`);
    };
    normalizeSignalInteger = (signalInteger, optionName) => {
      if (signalsIntegerToName.has(signalInteger)) {
        return signalsIntegerToName.get(signalInteger);
      }
      throw new TypeError(`Invalid ${optionName} ${signalInteger}: this signal integer does not exist.
${getAvailableSignals()}`);
    };
    getSignalsIntegerToName = () => new Map(Object.entries(import_node_os3.constants.signals).reverse().map(([signalName, signalInteger]) => [signalInteger, signalName]));
    signalsIntegerToName = getSignalsIntegerToName();
    normalizeSignalName = (signalName, optionName) => {
      if (signalName in import_node_os3.constants.signals) {
        return signalName;
      }
      if (signalName.toUpperCase() in import_node_os3.constants.signals) {
        throw new TypeError(`Invalid ${optionName} '${signalName}': please rename it to '${signalName.toUpperCase()}'.`);
      }
      throw new TypeError(`Invalid ${optionName} '${signalName}': this signal name does not exist.
${getAvailableSignals()}`);
    };
    getAvailableSignals = () => `Available signal names: ${getAvailableSignalNames()}.
Available signal numbers: ${getAvailableSignalIntegers()}.`;
    getAvailableSignalNames = () => Object.keys(import_node_os3.constants.signals).sort().map((signalName) => `'${signalName}'`).join(", ");
    getAvailableSignalIntegers = () => [...new Set(Object.values(import_node_os3.constants.signals).sort((signalInteger, signalIntegerTwo) => signalInteger - signalIntegerTwo))].join(", ");
    getSignalDescription = (signal) => signalsByName[signal].description;
  }
});

// node_modules/execa/lib/terminate/kill.js
var import_promises, normalizeForceKillAfterDelay, DEFAULT_FORCE_KILL_TIMEOUT, subprocessKill, parseKillArguments, emitKillError, setKillTimeout, killOnTimeout;
var init_kill = __esm({
  "node_modules/execa/lib/terminate/kill.js"() {
    import_promises = require("node:timers/promises");
    init_final_error();
    init_signal();
    normalizeForceKillAfterDelay = (forceKillAfterDelay) => {
      if (forceKillAfterDelay === false) {
        return forceKillAfterDelay;
      }
      if (forceKillAfterDelay === true) {
        return DEFAULT_FORCE_KILL_TIMEOUT;
      }
      if (!Number.isFinite(forceKillAfterDelay) || forceKillAfterDelay < 0) {
        throw new TypeError(`Expected the \`forceKillAfterDelay\` option to be a non-negative integer, got \`${forceKillAfterDelay}\` (${typeof forceKillAfterDelay})`);
      }
      return forceKillAfterDelay;
    };
    DEFAULT_FORCE_KILL_TIMEOUT = 1e3 * 5;
    subprocessKill = ({ kill, options: { forceKillAfterDelay, killSignal }, onInternalError, context, controller }, signalOrError, errorArgument) => {
      const { signal, error } = parseKillArguments(signalOrError, errorArgument, killSignal);
      emitKillError(error, onInternalError);
      const killResult = kill(signal);
      setKillTimeout({
        kill,
        signal,
        forceKillAfterDelay,
        killSignal,
        killResult,
        context,
        controller
      });
      return killResult;
    };
    parseKillArguments = (signalOrError, errorArgument, killSignal) => {
      const [signal = killSignal, error] = isErrorInstance(signalOrError) ? [void 0, signalOrError] : [signalOrError, errorArgument];
      if (typeof signal !== "string" && !Number.isInteger(signal)) {
        throw new TypeError(`The first argument must be an error instance or a signal name string/integer: ${String(signal)}`);
      }
      if (error !== void 0 && !isErrorInstance(error)) {
        throw new TypeError(`The second argument is optional. If specified, it must be an error instance: ${error}`);
      }
      return { signal: normalizeSignalArgument(signal), error };
    };
    emitKillError = (error, onInternalError) => {
      if (error !== void 0) {
        onInternalError.reject(error);
      }
    };
    setKillTimeout = async ({ kill, signal, forceKillAfterDelay, killSignal, killResult, context, controller }) => {
      if (signal === killSignal && killResult) {
        killOnTimeout({
          kill,
          forceKillAfterDelay,
          context,
          controllerSignal: controller.signal
        });
      }
    };
    killOnTimeout = async ({ kill, forceKillAfterDelay, context, controllerSignal }) => {
      if (forceKillAfterDelay === false) {
        return;
      }
      try {
        await (0, import_promises.setTimeout)(forceKillAfterDelay, void 0, { signal: controllerSignal });
        if (kill("SIGKILL")) {
          context.isForcefullyTerminated ??= true;
        }
      } catch {
      }
    };
  }
});

// node_modules/execa/lib/utils/abort-signal.js
var import_node_events, onAbortedSignal;
var init_abort_signal = __esm({
  "node_modules/execa/lib/utils/abort-signal.js"() {
    import_node_events = require("node:events");
    onAbortedSignal = async (mainSignal, stopSignal) => {
      if (!mainSignal.aborted) {
        await (0, import_node_events.once)(mainSignal, "abort", { signal: stopSignal });
      }
    };
  }
});

// node_modules/execa/lib/terminate/cancel.js
var validateCancelSignal, throwOnCancel, terminateOnCancel;
var init_cancel = __esm({
  "node_modules/execa/lib/terminate/cancel.js"() {
    init_abort_signal();
    validateCancelSignal = ({ cancelSignal }) => {
      if (cancelSignal !== void 0 && Object.prototype.toString.call(cancelSignal) !== "[object AbortSignal]") {
        throw new Error(`The \`cancelSignal\` option must be an AbortSignal: ${String(cancelSignal)}`);
      }
    };
    throwOnCancel = ({ subprocess, cancelSignal, gracefulCancel, context, controller }) => cancelSignal === void 0 || gracefulCancel ? [] : [terminateOnCancel(subprocess, cancelSignal, context, controller)];
    terminateOnCancel = async (subprocess, cancelSignal, context, { signal }) => {
      await onAbortedSignal(cancelSignal, signal);
      context.terminationReason ??= "cancel";
      subprocess.kill();
      throw cancelSignal.reason;
    };
  }
});

// node_modules/execa/lib/ipc/validation.js
var validateIpcMethod, validateIpcOption, validateConnection, throwOnEarlyDisconnect, throwOnStrictDeadlockError, getStrictResponseError, throwOnMissingStrict, throwOnStrictDisconnect, getAbortDisconnectError, throwOnMissingParent, handleEpipeError, handleSerializationError, isSerializationError, SERIALIZATION_ERROR_CODES, SERIALIZATION_ERROR_MESSAGES, getMethodName, getNamespaceName, getOtherProcessName, disconnect;
var init_validation = __esm({
  "node_modules/execa/lib/ipc/validation.js"() {
    validateIpcMethod = ({ methodName, isSubprocess, ipc, isConnected: isConnected2 }) => {
      validateIpcOption(methodName, isSubprocess, ipc);
      validateConnection(methodName, isSubprocess, isConnected2);
    };
    validateIpcOption = (methodName, isSubprocess, ipc) => {
      if (!ipc) {
        throw new Error(`${getMethodName(methodName, isSubprocess)} can only be used if the \`ipc\` option is \`true\`.`);
      }
    };
    validateConnection = (methodName, isSubprocess, isConnected2) => {
      if (!isConnected2) {
        throw new Error(`${getMethodName(methodName, isSubprocess)} cannot be used: the ${getOtherProcessName(isSubprocess)} has already exited or disconnected.`);
      }
    };
    throwOnEarlyDisconnect = (isSubprocess) => {
      throw new Error(`${getMethodName("getOneMessage", isSubprocess)} could not complete: the ${getOtherProcessName(isSubprocess)} exited or disconnected.`);
    };
    throwOnStrictDeadlockError = (isSubprocess) => {
      throw new Error(`${getMethodName("sendMessage", isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} is sending a message too, instead of listening to incoming messages.
This can be fixed by both sending a message and listening to incoming messages at the same time:

const [receivedMessage] = await Promise.all([
	${getMethodName("getOneMessage", isSubprocess)},
	${getMethodName("sendMessage", isSubprocess, "message, {strict: true}")},
]);`);
    };
    getStrictResponseError = (error, isSubprocess) => new Error(`${getMethodName("sendMessage", isSubprocess)} failed when sending an acknowledgment response to the ${getOtherProcessName(isSubprocess)}.`, { cause: error });
    throwOnMissingStrict = (isSubprocess) => {
      throw new Error(`${getMethodName("sendMessage", isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} is not listening to incoming messages.`);
    };
    throwOnStrictDisconnect = (isSubprocess) => {
      throw new Error(`${getMethodName("sendMessage", isSubprocess)} failed: the ${getOtherProcessName(isSubprocess)} exited without listening to incoming messages.`);
    };
    getAbortDisconnectError = () => new Error(`\`cancelSignal\` aborted: the ${getOtherProcessName(true)} disconnected.`);
    throwOnMissingParent = () => {
      throw new Error("`getCancelSignal()` cannot be used without setting the `cancelSignal` subprocess option.");
    };
    handleEpipeError = ({ error, methodName, isSubprocess }) => {
      if (error.code === "EPIPE") {
        throw new Error(`${getMethodName(methodName, isSubprocess)} cannot be used: the ${getOtherProcessName(isSubprocess)} is disconnecting.`, { cause: error });
      }
    };
    handleSerializationError = ({ error, methodName, isSubprocess, message }) => {
      if (isSerializationError(error)) {
        throw new Error(`${getMethodName(methodName, isSubprocess)}'s argument type is invalid: the message cannot be serialized: ${String(message)}.`, { cause: error });
      }
    };
    isSerializationError = ({ code, message }) => SERIALIZATION_ERROR_CODES.has(code) || SERIALIZATION_ERROR_MESSAGES.some((serializationErrorMessage) => message.includes(serializationErrorMessage));
    SERIALIZATION_ERROR_CODES = /* @__PURE__ */ new Set([
      // Message is `undefined`
      "ERR_MISSING_ARGS",
      // Message is a function, a bigint, a symbol
      "ERR_INVALID_ARG_TYPE"
    ]);
    SERIALIZATION_ERROR_MESSAGES = [
      // Message is a promise or a proxy, with `serialization: 'advanced'`
      "could not be cloned",
      // Message has cycles, with `serialization: 'json'`
      "circular structure",
      // Message has cycles inside toJSON(), with `serialization: 'json'`
      "call stack size exceeded"
    ];
    getMethodName = (methodName, isSubprocess, parameters = "") => methodName === "cancelSignal" ? "`cancelSignal`'s `controller.abort()`" : `${getNamespaceName(isSubprocess)}${methodName}(${parameters})`;
    getNamespaceName = (isSubprocess) => isSubprocess ? "" : "subprocess.";
    getOtherProcessName = (isSubprocess) => isSubprocess ? "parent process" : "subprocess";
    disconnect = (anyProcess) => {
      if (anyProcess.connected) {
        anyProcess.disconnect();
      }
    };
  }
});

// node_modules/execa/lib/utils/deferred.js
var createDeferred;
var init_deferred = __esm({
  "node_modules/execa/lib/utils/deferred.js"() {
    createDeferred = () => {
      const methods = {};
      const promise = new Promise((resolve, reject) => {
        Object.assign(methods, { resolve, reject });
      });
      return Object.assign(promise, methods);
    };
  }
});

// node_modules/execa/lib/arguments/fd-options.js
var getToStream, getFromStream, SUBPROCESS_OPTIONS, getFdNumber, parseFdNumber, validateFdNumber, getInvalidStdioOptionMessage, getInvalidStdioOption, getUsedDescriptor, getOptionName, serializeOptionValue;
var init_fd_options = __esm({
  "node_modules/execa/lib/arguments/fd-options.js"() {
    init_specific();
    getToStream = (destination, to = "stdin") => {
      const isWritable = true;
      const { options, fileDescriptors } = SUBPROCESS_OPTIONS.get(destination);
      const fdNumber = getFdNumber(fileDescriptors, to, isWritable);
      const destinationStream = destination.stdio[fdNumber];
      if (destinationStream === null) {
        throw new TypeError(getInvalidStdioOptionMessage(fdNumber, to, options, isWritable));
      }
      return destinationStream;
    };
    getFromStream = (source, from = "stdout") => {
      const isWritable = false;
      const { options, fileDescriptors } = SUBPROCESS_OPTIONS.get(source);
      const fdNumber = getFdNumber(fileDescriptors, from, isWritable);
      const sourceStream = fdNumber === "all" ? source.all : source.stdio[fdNumber];
      if (sourceStream === null || sourceStream === void 0) {
        throw new TypeError(getInvalidStdioOptionMessage(fdNumber, from, options, isWritable));
      }
      return sourceStream;
    };
    SUBPROCESS_OPTIONS = /* @__PURE__ */ new WeakMap();
    getFdNumber = (fileDescriptors, fdName, isWritable) => {
      const fdNumber = parseFdNumber(fdName, isWritable);
      validateFdNumber(fdNumber, fdName, isWritable, fileDescriptors);
      return fdNumber;
    };
    parseFdNumber = (fdName, isWritable) => {
      const fdNumber = parseFd(fdName);
      if (fdNumber !== void 0) {
        return fdNumber;
      }
      const { validOptions, defaultValue } = isWritable ? { validOptions: '"stdin"', defaultValue: "stdin" } : { validOptions: '"stdout", "stderr", "all"', defaultValue: "stdout" };
      throw new TypeError(`"${getOptionName(isWritable)}" must not be "${fdName}".
It must be ${validOptions} or "fd3", "fd4" (and so on).
It is optional and defaults to "${defaultValue}".`);
    };
    validateFdNumber = (fdNumber, fdName, isWritable, fileDescriptors) => {
      const fileDescriptor = fileDescriptors[getUsedDescriptor(fdNumber)];
      if (fileDescriptor === void 0) {
        throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. That file descriptor does not exist.
Please set the "stdio" option to ensure that file descriptor exists.`);
      }
      if (fileDescriptor.direction === "input" && !isWritable) {
        throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. It must be a readable stream, not writable.`);
      }
      if (fileDescriptor.direction !== "input" && isWritable) {
        throw new TypeError(`"${getOptionName(isWritable)}" must not be ${fdName}. It must be a writable stream, not readable.`);
      }
    };
    getInvalidStdioOptionMessage = (fdNumber, fdName, options, isWritable) => {
      if (fdNumber === "all" && !options.all) {
        return `The "all" option must be true to use "from: 'all'".`;
      }
      const { optionName, optionValue } = getInvalidStdioOption(fdNumber, options);
      return `The "${optionName}: ${serializeOptionValue(optionValue)}" option is incompatible with using "${getOptionName(isWritable)}: ${serializeOptionValue(fdName)}".
Please set this option with "pipe" instead.`;
    };
    getInvalidStdioOption = (fdNumber, { stdin, stdout, stderr, stdio }) => {
      const usedDescriptor = getUsedDescriptor(fdNumber);
      if (usedDescriptor === 0 && stdin !== void 0) {
        return { optionName: "stdin", optionValue: stdin };
      }
      if (usedDescriptor === 1 && stdout !== void 0) {
        return { optionName: "stdout", optionValue: stdout };
      }
      if (usedDescriptor === 2 && stderr !== void 0) {
        return { optionName: "stderr", optionValue: stderr };
      }
      return { optionName: `stdio[${usedDescriptor}]`, optionValue: stdio[usedDescriptor] };
    };
    getUsedDescriptor = (fdNumber) => fdNumber === "all" ? 1 : fdNumber;
    getOptionName = (isWritable) => isWritable ? "to" : "from";
    serializeOptionValue = (value) => {
      if (typeof value === "string") {
        return `'${value}'`;
      }
      return typeof value === "number" ? `${value}` : "Stream";
    };
  }
});

// node_modules/execa/lib/utils/max-listeners.js
var import_node_events2, incrementMaxListeners;
var init_max_listeners = __esm({
  "node_modules/execa/lib/utils/max-listeners.js"() {
    import_node_events2 = require("node:events");
    incrementMaxListeners = (eventEmitter, maxListenersIncrement, signal) => {
      const maxListeners = eventEmitter.getMaxListeners();
      if (maxListeners === 0 || maxListeners === Number.POSITIVE_INFINITY) {
        return;
      }
      eventEmitter.setMaxListeners(maxListeners + maxListenersIncrement);
      (0, import_node_events2.addAbortListener)(signal, () => {
        eventEmitter.setMaxListeners(eventEmitter.getMaxListeners() - maxListenersIncrement);
      });
    };
  }
});

// node_modules/execa/lib/ipc/reference.js
var addReference, addReferenceCount, removeReference, removeReferenceCount, undoAddedReferences, redoAddedReferences;
var init_reference = __esm({
  "node_modules/execa/lib/ipc/reference.js"() {
    addReference = (channel, reference) => {
      if (reference) {
        addReferenceCount(channel);
      }
    };
    addReferenceCount = (channel) => {
      channel.refCounted();
    };
    removeReference = (channel, reference) => {
      if (reference) {
        removeReferenceCount(channel);
      }
    };
    removeReferenceCount = (channel) => {
      channel.unrefCounted();
    };
    undoAddedReferences = (channel, isSubprocess) => {
      if (isSubprocess) {
        removeReferenceCount(channel);
        removeReferenceCount(channel);
      }
    };
    redoAddedReferences = (channel, isSubprocess) => {
      if (isSubprocess) {
        addReferenceCount(channel);
        addReferenceCount(channel);
      }
    };
  }
});

// node_modules/execa/lib/ipc/incoming.js
var import_node_events3, import_promises2, onMessage, onDisconnect, INCOMING_MESSAGES;
var init_incoming = __esm({
  "node_modules/execa/lib/ipc/incoming.js"() {
    import_node_events3 = require("node:events");
    import_promises2 = require("node:timers/promises");
    init_outgoing();
    init_reference();
    init_strict();
    init_graceful();
    onMessage = async ({ anyProcess, channel, isSubprocess, ipcEmitter }, wrappedMessage) => {
      if (handleStrictResponse(wrappedMessage) || handleAbort(wrappedMessage)) {
        return;
      }
      if (!INCOMING_MESSAGES.has(anyProcess)) {
        INCOMING_MESSAGES.set(anyProcess, []);
      }
      const incomingMessages = INCOMING_MESSAGES.get(anyProcess);
      incomingMessages.push(wrappedMessage);
      if (incomingMessages.length > 1) {
        return;
      }
      while (incomingMessages.length > 0) {
        await waitForOutgoingMessages(anyProcess, ipcEmitter, wrappedMessage);
        await import_promises2.scheduler.yield();
        const message = await handleStrictRequest({
          wrappedMessage: incomingMessages[0],
          anyProcess,
          channel,
          isSubprocess,
          ipcEmitter
        });
        incomingMessages.shift();
        ipcEmitter.emit("message", message);
        ipcEmitter.emit("message:done");
      }
    };
    onDisconnect = async ({ anyProcess, channel, isSubprocess, ipcEmitter, boundOnMessage }) => {
      abortOnDisconnect();
      const incomingMessages = INCOMING_MESSAGES.get(anyProcess);
      while (incomingMessages?.length > 0) {
        await (0, import_node_events3.once)(ipcEmitter, "message:done");
      }
      anyProcess.removeListener("message", boundOnMessage);
      redoAddedReferences(channel, isSubprocess);
      ipcEmitter.connected = false;
      ipcEmitter.emit("disconnect");
    };
    INCOMING_MESSAGES = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/execa/lib/ipc/forward.js
var import_node_events4, getIpcEmitter, IPC_EMITTERS, forwardEvents, isConnected;
var init_forward = __esm({
  "node_modules/execa/lib/ipc/forward.js"() {
    import_node_events4 = require("node:events");
    init_incoming();
    init_reference();
    getIpcEmitter = (anyProcess, channel, isSubprocess) => {
      if (IPC_EMITTERS.has(anyProcess)) {
        return IPC_EMITTERS.get(anyProcess);
      }
      const ipcEmitter = new import_node_events4.EventEmitter();
      ipcEmitter.connected = true;
      IPC_EMITTERS.set(anyProcess, ipcEmitter);
      forwardEvents({
        ipcEmitter,
        anyProcess,
        channel,
        isSubprocess
      });
      return ipcEmitter;
    };
    IPC_EMITTERS = /* @__PURE__ */ new WeakMap();
    forwardEvents = ({ ipcEmitter, anyProcess, channel, isSubprocess }) => {
      const boundOnMessage = onMessage.bind(void 0, {
        anyProcess,
        channel,
        isSubprocess,
        ipcEmitter
      });
      anyProcess.on("message", boundOnMessage);
      anyProcess.once("disconnect", onDisconnect.bind(void 0, {
        anyProcess,
        channel,
        isSubprocess,
        ipcEmitter,
        boundOnMessage
      }));
      undoAddedReferences(channel, isSubprocess);
    };
    isConnected = (anyProcess) => {
      const ipcEmitter = IPC_EMITTERS.get(anyProcess);
      return ipcEmitter === void 0 ? anyProcess.channel !== null : ipcEmitter.connected;
    };
  }
});

// node_modules/execa/lib/ipc/strict.js
var import_node_events5, handleSendStrict, count, validateStrictDeadlock, handleStrictRequest, handleStrictResponse, waitForStrictResponse, STRICT_RESPONSES, throwOnDisconnect, REQUEST_TYPE, RESPONSE_TYPE;
var init_strict = __esm({
  "node_modules/execa/lib/ipc/strict.js"() {
    import_node_events5 = require("node:events");
    init_deferred();
    init_max_listeners();
    init_send();
    init_validation();
    init_forward();
    init_outgoing();
    handleSendStrict = ({ anyProcess, channel, isSubprocess, message, strict }) => {
      if (!strict) {
        return message;
      }
      const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
      const hasListeners = hasMessageListeners(anyProcess, ipcEmitter);
      return {
        id: count++,
        type: REQUEST_TYPE,
        message,
        hasListeners
      };
    };
    count = 0n;
    validateStrictDeadlock = (outgoingMessages, wrappedMessage) => {
      if (wrappedMessage?.type !== REQUEST_TYPE || wrappedMessage.hasListeners) {
        return;
      }
      for (const { id } of outgoingMessages) {
        if (id !== void 0) {
          STRICT_RESPONSES[id].resolve({ isDeadlock: true, hasListeners: false });
        }
      }
    };
    handleStrictRequest = async ({ wrappedMessage, anyProcess, channel, isSubprocess, ipcEmitter }) => {
      if (wrappedMessage?.type !== REQUEST_TYPE || !anyProcess.connected) {
        return wrappedMessage;
      }
      const { id, message } = wrappedMessage;
      const response = { id, type: RESPONSE_TYPE, message: hasMessageListeners(anyProcess, ipcEmitter) };
      try {
        await sendMessage({
          anyProcess,
          channel,
          isSubprocess,
          ipc: true
        }, response);
      } catch (error) {
        ipcEmitter.emit("strict:error", error);
      }
      return message;
    };
    handleStrictResponse = (wrappedMessage) => {
      if (wrappedMessage?.type !== RESPONSE_TYPE) {
        return false;
      }
      const { id, message: hasListeners } = wrappedMessage;
      STRICT_RESPONSES[id]?.resolve({ isDeadlock: false, hasListeners });
      return true;
    };
    waitForStrictResponse = async (wrappedMessage, anyProcess, isSubprocess) => {
      if (wrappedMessage?.type !== REQUEST_TYPE) {
        return;
      }
      const deferred = createDeferred();
      STRICT_RESPONSES[wrappedMessage.id] = deferred;
      const controller = new AbortController();
      try {
        const { isDeadlock, hasListeners } = await Promise.race([
          deferred,
          throwOnDisconnect(anyProcess, isSubprocess, controller)
        ]);
        if (isDeadlock) {
          throwOnStrictDeadlockError(isSubprocess);
        }
        if (!hasListeners) {
          throwOnMissingStrict(isSubprocess);
        }
      } finally {
        controller.abort();
        delete STRICT_RESPONSES[wrappedMessage.id];
      }
    };
    STRICT_RESPONSES = {};
    throwOnDisconnect = async (anyProcess, isSubprocess, { signal }) => {
      incrementMaxListeners(anyProcess, 1, signal);
      await (0, import_node_events5.once)(anyProcess, "disconnect", { signal });
      throwOnStrictDisconnect(isSubprocess);
    };
    REQUEST_TYPE = "execa:ipc:request";
    RESPONSE_TYPE = "execa:ipc:response";
  }
});

// node_modules/execa/lib/ipc/outgoing.js
var startSendMessage, endSendMessage, waitForOutgoingMessages, OUTGOING_MESSAGES, hasMessageListeners, getMinListenerCount;
var init_outgoing = __esm({
  "node_modules/execa/lib/ipc/outgoing.js"() {
    init_deferred();
    init_specific();
    init_fd_options();
    init_strict();
    startSendMessage = (anyProcess, wrappedMessage, strict) => {
      if (!OUTGOING_MESSAGES.has(anyProcess)) {
        OUTGOING_MESSAGES.set(anyProcess, /* @__PURE__ */ new Set());
      }
      const outgoingMessages = OUTGOING_MESSAGES.get(anyProcess);
      const onMessageSent = createDeferred();
      const id = strict ? wrappedMessage.id : void 0;
      const outgoingMessage = { onMessageSent, id };
      outgoingMessages.add(outgoingMessage);
      return { outgoingMessages, outgoingMessage };
    };
    endSendMessage = ({ outgoingMessages, outgoingMessage }) => {
      outgoingMessages.delete(outgoingMessage);
      outgoingMessage.onMessageSent.resolve();
    };
    waitForOutgoingMessages = async (anyProcess, ipcEmitter, wrappedMessage) => {
      while (!hasMessageListeners(anyProcess, ipcEmitter) && OUTGOING_MESSAGES.get(anyProcess)?.size > 0) {
        const outgoingMessages = [...OUTGOING_MESSAGES.get(anyProcess)];
        validateStrictDeadlock(outgoingMessages, wrappedMessage);
        await Promise.all(outgoingMessages.map(({ onMessageSent }) => onMessageSent));
      }
    };
    OUTGOING_MESSAGES = /* @__PURE__ */ new WeakMap();
    hasMessageListeners = (anyProcess, ipcEmitter) => ipcEmitter.listenerCount("message") > getMinListenerCount(anyProcess);
    getMinListenerCount = (anyProcess) => SUBPROCESS_OPTIONS.has(anyProcess) && !getFdSpecificValue(SUBPROCESS_OPTIONS.get(anyProcess).options.buffer, "ipc") ? 1 : 0;
  }
});

// node_modules/execa/lib/ipc/send.js
var import_node_util5, sendMessage, sendMessageAsync, sendOneMessage, getSendMethod, PROCESS_SEND_METHODS;
var init_send = __esm({
  "node_modules/execa/lib/ipc/send.js"() {
    import_node_util5 = require("node:util");
    init_validation();
    init_outgoing();
    init_strict();
    sendMessage = ({ anyProcess, channel, isSubprocess, ipc }, message, { strict = false } = {}) => {
      const methodName = "sendMessage";
      validateIpcMethod({
        methodName,
        isSubprocess,
        ipc,
        isConnected: anyProcess.connected
      });
      return sendMessageAsync({
        anyProcess,
        channel,
        methodName,
        isSubprocess,
        message,
        strict
      });
    };
    sendMessageAsync = async ({ anyProcess, channel, methodName, isSubprocess, message, strict }) => {
      const wrappedMessage = handleSendStrict({
        anyProcess,
        channel,
        isSubprocess,
        message,
        strict
      });
      const outgoingMessagesState = startSendMessage(anyProcess, wrappedMessage, strict);
      try {
        await sendOneMessage({
          anyProcess,
          methodName,
          isSubprocess,
          wrappedMessage,
          message
        });
      } catch (error) {
        disconnect(anyProcess);
        throw error;
      } finally {
        endSendMessage(outgoingMessagesState);
      }
    };
    sendOneMessage = async ({ anyProcess, methodName, isSubprocess, wrappedMessage, message }) => {
      const sendMethod = getSendMethod(anyProcess);
      try {
        await Promise.all([
          waitForStrictResponse(wrappedMessage, anyProcess, isSubprocess),
          sendMethod(wrappedMessage)
        ]);
      } catch (error) {
        handleEpipeError({ error, methodName, isSubprocess });
        handleSerializationError({
          error,
          methodName,
          isSubprocess,
          message
        });
        throw error;
      }
    };
    getSendMethod = (anyProcess) => {
      if (PROCESS_SEND_METHODS.has(anyProcess)) {
        return PROCESS_SEND_METHODS.get(anyProcess);
      }
      const sendMethod = (0, import_node_util5.promisify)(anyProcess.send.bind(anyProcess));
      PROCESS_SEND_METHODS.set(anyProcess, sendMethod);
      return sendMethod;
    };
    PROCESS_SEND_METHODS = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/execa/lib/ipc/graceful.js
var import_promises3, sendAbort, getCancelSignal, startIpc, cancelListening, handleAbort, GRACEFUL_CANCEL_TYPE, abortOnDisconnect, cancelController;
var init_graceful = __esm({
  "node_modules/execa/lib/ipc/graceful.js"() {
    import_promises3 = require("node:timers/promises");
    init_send();
    init_forward();
    init_validation();
    sendAbort = (subprocess, message) => {
      const methodName = "cancelSignal";
      validateConnection(methodName, false, subprocess.connected);
      return sendOneMessage({
        anyProcess: subprocess,
        methodName,
        isSubprocess: false,
        wrappedMessage: { type: GRACEFUL_CANCEL_TYPE, message },
        message
      });
    };
    getCancelSignal = async ({ anyProcess, channel, isSubprocess, ipc }) => {
      await startIpc({
        anyProcess,
        channel,
        isSubprocess,
        ipc
      });
      return cancelController.signal;
    };
    startIpc = async ({ anyProcess, channel, isSubprocess, ipc }) => {
      if (cancelListening) {
        return;
      }
      cancelListening = true;
      if (!ipc) {
        throwOnMissingParent();
        return;
      }
      if (channel === null) {
        abortOnDisconnect();
        return;
      }
      getIpcEmitter(anyProcess, channel, isSubprocess);
      await import_promises3.scheduler.yield();
    };
    cancelListening = false;
    handleAbort = (wrappedMessage) => {
      if (wrappedMessage?.type !== GRACEFUL_CANCEL_TYPE) {
        return false;
      }
      cancelController.abort(wrappedMessage.message);
      return true;
    };
    GRACEFUL_CANCEL_TYPE = "execa:ipc:cancel";
    abortOnDisconnect = () => {
      cancelController.abort(getAbortDisconnectError());
    };
    cancelController = new AbortController();
  }
});

// node_modules/execa/lib/terminate/graceful.js
var validateGracefulCancel, throwOnGracefulCancel, sendOnAbort, getReason;
var init_graceful2 = __esm({
  "node_modules/execa/lib/terminate/graceful.js"() {
    init_abort_signal();
    init_graceful();
    init_kill();
    validateGracefulCancel = ({ gracefulCancel, cancelSignal, ipc, serialization }) => {
      if (!gracefulCancel) {
        return;
      }
      if (cancelSignal === void 0) {
        throw new Error("The `cancelSignal` option must be defined when setting the `gracefulCancel` option.");
      }
      if (!ipc) {
        throw new Error("The `ipc` option cannot be false when setting the `gracefulCancel` option.");
      }
      if (serialization === "json") {
        throw new Error("The `serialization` option cannot be 'json' when setting the `gracefulCancel` option.");
      }
    };
    throwOnGracefulCancel = ({
      subprocess,
      cancelSignal,
      gracefulCancel,
      forceKillAfterDelay,
      context,
      controller
    }) => gracefulCancel ? [sendOnAbort({
      subprocess,
      cancelSignal,
      forceKillAfterDelay,
      context,
      controller
    })] : [];
    sendOnAbort = async ({ subprocess, cancelSignal, forceKillAfterDelay, context, controller: { signal } }) => {
      await onAbortedSignal(cancelSignal, signal);
      const reason = getReason(cancelSignal);
      await sendAbort(subprocess, reason);
      killOnTimeout({
        kill: subprocess.kill,
        forceKillAfterDelay,
        context,
        controllerSignal: signal
      });
      context.terminationReason ??= "gracefulCancel";
      throw cancelSignal.reason;
    };
    getReason = ({ reason }) => {
      if (!(reason instanceof DOMException)) {
        return reason;
      }
      const error = new Error(reason.message);
      Object.defineProperty(error, "stack", {
        value: reason.stack,
        enumerable: false,
        configurable: true,
        writable: true
      });
      return error;
    };
  }
});

// node_modules/execa/lib/terminate/timeout.js
var import_promises4, validateTimeout, throwOnTimeout, killAfterTimeout;
var init_timeout = __esm({
  "node_modules/execa/lib/terminate/timeout.js"() {
    import_promises4 = require("node:timers/promises");
    init_final_error();
    validateTimeout = ({ timeout }) => {
      if (timeout !== void 0 && (!Number.isFinite(timeout) || timeout < 0)) {
        throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
      }
    };
    throwOnTimeout = (subprocess, timeout, context, controller) => timeout === 0 || timeout === void 0 ? [] : [killAfterTimeout(subprocess, timeout, context, controller)];
    killAfterTimeout = async (subprocess, timeout, context, { signal }) => {
      await (0, import_promises4.setTimeout)(timeout, void 0, { signal });
      context.terminationReason ??= "timeout";
      subprocess.kill();
      throw new DiscardedError();
    };
  }
});

// node_modules/execa/lib/methods/node.js
var import_node_process6, import_node_path3, mapNode, handleNodeOption;
var init_node2 = __esm({
  "node_modules/execa/lib/methods/node.js"() {
    import_node_process6 = require("node:process");
    import_node_path3 = __toESM(require("node:path"), 1);
    init_file_url();
    mapNode = ({ options }) => {
      if (options.node === false) {
        throw new TypeError('The "node" option cannot be false with `execaNode()`.');
      }
      return { options: { ...options, node: true } };
    };
    handleNodeOption = (file, commandArguments, {
      node: shouldHandleNode = false,
      nodePath = import_node_process6.execPath,
      nodeOptions = import_node_process6.execArgv.filter((nodeOption) => !nodeOption.startsWith("--inspect")),
      cwd,
      execPath: formerNodePath,
      ...options
    }) => {
      if (formerNodePath !== void 0) {
        throw new TypeError('The "execPath" option has been removed. Please use the "nodePath" option instead.');
      }
      const normalizedNodePath = safeNormalizeFileUrl(nodePath, 'The "nodePath" option');
      const resolvedNodePath = import_node_path3.default.resolve(cwd, normalizedNodePath);
      const newOptions = {
        ...options,
        nodePath: resolvedNodePath,
        node: shouldHandleNode,
        cwd
      };
      if (!shouldHandleNode) {
        return [file, commandArguments, newOptions];
      }
      if (import_node_path3.default.basename(file, ".exe") === "node") {
        throw new TypeError('When the "node" option is true, the first argument does not need to be "node".');
      }
      return [
        resolvedNodePath,
        [...nodeOptions, file, ...commandArguments],
        { ipc: true, ...newOptions, shell: false }
      ];
    };
  }
});

// node_modules/execa/lib/ipc/ipc-input.js
var import_node_v8, validateIpcInputOption, validateAdvancedInput, validateJsonInput, validateIpcInput, sendIpcInput;
var init_ipc_input = __esm({
  "node_modules/execa/lib/ipc/ipc-input.js"() {
    import_node_v8 = require("node:v8");
    validateIpcInputOption = ({ ipcInput, ipc, serialization }) => {
      if (ipcInput === void 0) {
        return;
      }
      if (!ipc) {
        throw new Error("The `ipcInput` option cannot be set unless the `ipc` option is `true`.");
      }
      validateIpcInput[serialization](ipcInput);
    };
    validateAdvancedInput = (ipcInput) => {
      try {
        (0, import_node_v8.serialize)(ipcInput);
      } catch (error) {
        throw new Error("The `ipcInput` option is not serializable with a structured clone.", { cause: error });
      }
    };
    validateJsonInput = (ipcInput) => {
      try {
        JSON.stringify(ipcInput);
      } catch (error) {
        throw new Error("The `ipcInput` option is not serializable with JSON.", { cause: error });
      }
    };
    validateIpcInput = {
      advanced: validateAdvancedInput,
      json: validateJsonInput
    };
    sendIpcInput = async (subprocess, ipcInput) => {
      if (ipcInput === void 0) {
        return;
      }
      await subprocess.sendMessage(ipcInput);
    };
  }
});

// node_modules/execa/lib/arguments/encoding-option.js
var validateEncoding, TEXT_ENCODINGS, BINARY_ENCODINGS, ENCODINGS, getCorrectEncoding, ENCODING_ALIASES, serializeEncoding;
var init_encoding_option = __esm({
  "node_modules/execa/lib/arguments/encoding-option.js"() {
    validateEncoding = ({ encoding }) => {
      if (ENCODINGS.has(encoding)) {
        return;
      }
      const correctEncoding = getCorrectEncoding(encoding);
      if (correctEncoding !== void 0) {
        throw new TypeError(`Invalid option \`encoding: ${serializeEncoding(encoding)}\`.
Please rename it to ${serializeEncoding(correctEncoding)}.`);
      }
      const correctEncodings = [...ENCODINGS].map((correctEncoding2) => serializeEncoding(correctEncoding2)).join(", ");
      throw new TypeError(`Invalid option \`encoding: ${serializeEncoding(encoding)}\`.
Please rename it to one of: ${correctEncodings}.`);
    };
    TEXT_ENCODINGS = /* @__PURE__ */ new Set(["utf8", "utf16le"]);
    BINARY_ENCODINGS = /* @__PURE__ */ new Set(["buffer", "hex", "base64", "base64url", "latin1", "ascii"]);
    ENCODINGS = /* @__PURE__ */ new Set([...TEXT_ENCODINGS, ...BINARY_ENCODINGS]);
    getCorrectEncoding = (encoding) => {
      if (encoding === null) {
        return "buffer";
      }
      if (typeof encoding !== "string") {
        return;
      }
      const lowerEncoding = encoding.toLowerCase();
      if (lowerEncoding in ENCODING_ALIASES) {
        return ENCODING_ALIASES[lowerEncoding];
      }
      if (ENCODINGS.has(lowerEncoding)) {
        return lowerEncoding;
      }
    };
    ENCODING_ALIASES = {
      // eslint-disable-next-line unicorn/text-encoding-identifier-case
      "utf-8": "utf8",
      "utf-16le": "utf16le",
      "ucs-2": "utf16le",
      ucs2: "utf16le",
      binary: "latin1"
    };
    serializeEncoding = (encoding) => typeof encoding === "string" ? `"${encoding}"` : String(encoding);
  }
});

// node_modules/execa/lib/arguments/cwd.js
var import_node_fs, import_node_path4, import_node_process7, normalizeCwd, getDefaultCwd, fixCwdError;
var init_cwd = __esm({
  "node_modules/execa/lib/arguments/cwd.js"() {
    import_node_fs = require("node:fs");
    import_node_path4 = __toESM(require("node:path"), 1);
    import_node_process7 = __toESM(require("node:process"), 1);
    init_file_url();
    normalizeCwd = (cwd = getDefaultCwd()) => {
      const cwdString = safeNormalizeFileUrl(cwd, 'The "cwd" option');
      return import_node_path4.default.resolve(cwdString);
    };
    getDefaultCwd = () => {
      try {
        return import_node_process7.default.cwd();
      } catch (error) {
        error.message = `The current directory does not exist.
${error.message}`;
        throw error;
      }
    };
    fixCwdError = (originalMessage, cwd) => {
      if (cwd === getDefaultCwd()) {
        return originalMessage;
      }
      let cwdStat;
      try {
        cwdStat = (0, import_node_fs.statSync)(cwd);
      } catch (error) {
        return `The "cwd" option is invalid: ${cwd}.
${error.message}
${originalMessage}`;
      }
      if (!cwdStat.isDirectory()) {
        return `The "cwd" option is not a directory: ${cwd}.
${originalMessage}`;
      }
      return originalMessage;
    };
  }
});

// node_modules/execa/lib/arguments/options.js
var import_node_path5, import_node_process8, import_cross_spawn, normalizeOptions, addDefaultOptions, getEnv;
var init_options = __esm({
  "node_modules/execa/lib/arguments/options.js"() {
    import_node_path5 = __toESM(require("node:path"), 1);
    import_node_process8 = __toESM(require("node:process"), 1);
    import_cross_spawn = __toESM(require_cross_spawn(), 1);
    init_npm_run_path();
    init_kill();
    init_signal();
    init_cancel();
    init_graceful2();
    init_timeout();
    init_node2();
    init_ipc_input();
    init_encoding_option();
    init_cwd();
    init_file_url();
    init_specific();
    normalizeOptions = (filePath, rawArguments, rawOptions) => {
      rawOptions.cwd = normalizeCwd(rawOptions.cwd);
      const [processedFile, processedArguments, processedOptions] = handleNodeOption(filePath, rawArguments, rawOptions);
      const { command: file, args: commandArguments, options: initialOptions } = import_cross_spawn.default._parse(processedFile, processedArguments, processedOptions);
      const fdOptions = normalizeFdSpecificOptions(initialOptions);
      const options = addDefaultOptions(fdOptions);
      validateTimeout(options);
      validateEncoding(options);
      validateIpcInputOption(options);
      validateCancelSignal(options);
      validateGracefulCancel(options);
      options.shell = normalizeFileUrl(options.shell);
      options.env = getEnv(options);
      options.killSignal = normalizeKillSignal(options.killSignal);
      options.forceKillAfterDelay = normalizeForceKillAfterDelay(options.forceKillAfterDelay);
      options.lines = options.lines.map((lines, fdNumber) => lines && !BINARY_ENCODINGS.has(options.encoding) && options.buffer[fdNumber]);
      if (import_node_process8.default.platform === "win32" && import_node_path5.default.basename(file, ".exe") === "cmd") {
        commandArguments.unshift("/q");
      }
      return { file, commandArguments, options };
    };
    addDefaultOptions = ({
      extendEnv = true,
      preferLocal = false,
      cwd,
      localDir: localDirectory = cwd,
      encoding = "utf8",
      reject = true,
      cleanup = true,
      all = false,
      windowsHide = true,
      killSignal = "SIGTERM",
      forceKillAfterDelay = true,
      gracefulCancel = false,
      ipcInput,
      ipc = ipcInput !== void 0 || gracefulCancel,
      serialization = "advanced",
      ...options
    }) => ({
      ...options,
      extendEnv,
      preferLocal,
      cwd,
      localDirectory,
      encoding,
      reject,
      cleanup,
      all,
      windowsHide,
      killSignal,
      forceKillAfterDelay,
      gracefulCancel,
      ipcInput,
      ipc,
      serialization
    });
    getEnv = ({ env: envOption, extendEnv, preferLocal, node, localDirectory, nodePath }) => {
      const env = extendEnv ? { ...import_node_process8.default.env, ...envOption } : envOption;
      if (preferLocal || node) {
        return npmRunPathEnv({
          env,
          cwd: localDirectory,
          execPath: nodePath,
          preferLocal,
          addExecPath: node
        });
      }
      return env;
    };
  }
});

// node_modules/execa/lib/arguments/shell.js
var concatenateShell;
var init_shell = __esm({
  "node_modules/execa/lib/arguments/shell.js"() {
    concatenateShell = (file, commandArguments, options) => options.shell && commandArguments.length > 0 ? [[file, ...commandArguments].join(" "), [], options] : [file, commandArguments, options];
  }
});

// node_modules/strip-final-newline/index.js
function stripFinalNewline(input) {
  if (typeof input === "string") {
    return stripFinalNewlineString(input);
  }
  if (!(ArrayBuffer.isView(input) && input.BYTES_PER_ELEMENT === 1)) {
    throw new Error("Input must be a string or a Uint8Array");
  }
  return stripFinalNewlineBinary(input);
}
var stripFinalNewlineString, stripFinalNewlineBinary, LF, LF_BINARY, CR, CR_BINARY;
var init_strip_final_newline = __esm({
  "node_modules/strip-final-newline/index.js"() {
    stripFinalNewlineString = (input) => input.at(-1) === LF ? input.slice(0, input.at(-2) === CR ? -2 : -1) : input;
    stripFinalNewlineBinary = (input) => input.at(-1) === LF_BINARY ? input.subarray(0, input.at(-2) === CR_BINARY ? -2 : -1) : input;
    LF = "\n";
    LF_BINARY = LF.codePointAt(0);
    CR = "\r";
    CR_BINARY = CR.codePointAt(0);
  }
});

// node_modules/is-stream/index.js
function isStream(stream, { checkOpen = true } = {}) {
  return stream !== null && typeof stream === "object" && (stream.writable || stream.readable || !checkOpen || stream.writable === void 0 && stream.readable === void 0) && typeof stream.pipe === "function";
}
function isWritableStream(stream, { checkOpen = true } = {}) {
  return isStream(stream, { checkOpen }) && (stream.writable || !checkOpen) && typeof stream.write === "function" && typeof stream.end === "function" && typeof stream.writable === "boolean" && typeof stream.writableObjectMode === "boolean" && typeof stream.destroy === "function" && typeof stream.destroyed === "boolean";
}
function isReadableStream(stream, { checkOpen = true } = {}) {
  return isStream(stream, { checkOpen }) && (stream.readable || !checkOpen) && typeof stream.read === "function" && typeof stream.readable === "boolean" && typeof stream.readableObjectMode === "boolean" && typeof stream.destroy === "function" && typeof stream.destroyed === "boolean";
}
function isDuplexStream(stream, options) {
  return isWritableStream(stream, options) && isReadableStream(stream, options);
}
var init_is_stream = __esm({
  "node_modules/is-stream/index.js"() {
  }
});

// node_modules/@sec-ant/readable-stream/dist/ponyfill/asyncIterator.js
function i() {
  return this[n].next();
}
function o(r) {
  return this[n].return(r);
}
function h({ preventCancel: r = false } = {}) {
  const e = this.getReader(), t = new c(
    e,
    r
  ), s = Object.create(u);
  return s[n] = t, s;
}
var a, c, n, u;
var init_asyncIterator = __esm({
  "node_modules/@sec-ant/readable-stream/dist/ponyfill/asyncIterator.js"() {
    a = Object.getPrototypeOf(
      Object.getPrototypeOf(
        /* istanbul ignore next */
        async function* () {
        }
      ).prototype
    );
    c = class {
      #t;
      #n;
      #r = false;
      #e = void 0;
      constructor(e, t) {
        this.#t = e, this.#n = t;
      }
      next() {
        const e = () => this.#s();
        return this.#e = this.#e ? this.#e.then(e, e) : e(), this.#e;
      }
      return(e) {
        const t = () => this.#i(e);
        return this.#e ? this.#e.then(t, t) : t();
      }
      async #s() {
        if (this.#r)
          return {
            done: true,
            value: void 0
          };
        let e;
        try {
          e = await this.#t.read();
        } catch (t) {
          throw this.#e = void 0, this.#r = true, this.#t.releaseLock(), t;
        }
        return e.done && (this.#e = void 0, this.#r = true, this.#t.releaseLock()), e;
      }
      async #i(e) {
        if (this.#r)
          return {
            done: true,
            value: e
          };
        if (this.#r = true, !this.#n) {
          const t = this.#t.cancel(e);
          return this.#t.releaseLock(), await t, {
            done: true,
            value: e
          };
        }
        return this.#t.releaseLock(), {
          done: true,
          value: e
        };
      }
    };
    n = Symbol();
    Object.defineProperty(i, "name", { value: "next" });
    Object.defineProperty(o, "name", { value: "return" });
    u = Object.create(a, {
      next: {
        enumerable: true,
        configurable: true,
        writable: true,
        value: i
      },
      return: {
        enumerable: true,
        configurable: true,
        writable: true,
        value: o
      }
    });
  }
});

// node_modules/@sec-ant/readable-stream/dist/ponyfill/fromAnyIterable.js
var init_fromAnyIterable = __esm({
  "node_modules/@sec-ant/readable-stream/dist/ponyfill/fromAnyIterable.js"() {
  }
});

// node_modules/@sec-ant/readable-stream/dist/ponyfill/index.js
var init_ponyfill = __esm({
  "node_modules/@sec-ant/readable-stream/dist/ponyfill/index.js"() {
    init_asyncIterator();
    init_fromAnyIterable();
  }
});

// node_modules/get-stream/source/stream.js
var getAsyncIterable, toString, getStreamIterable, handleStreamEnd, nodeImports;
var init_stream = __esm({
  "node_modules/get-stream/source/stream.js"() {
    init_is_stream();
    init_ponyfill();
    getAsyncIterable = (stream) => {
      if (isReadableStream(stream, { checkOpen: false }) && nodeImports.on !== void 0) {
        return getStreamIterable(stream);
      }
      if (typeof stream?.[Symbol.asyncIterator] === "function") {
        return stream;
      }
      if (toString.call(stream) === "[object ReadableStream]") {
        return h.call(stream);
      }
      throw new TypeError("The first argument must be a Readable, a ReadableStream, or an async iterable.");
    };
    ({ toString } = Object.prototype);
    getStreamIterable = async function* (stream) {
      const controller = new AbortController();
      const state = {};
      handleStreamEnd(stream, controller, state);
      try {
        for await (const [chunk] of nodeImports.on(stream, "data", { signal: controller.signal })) {
          yield chunk;
        }
      } catch (error) {
        if (state.error !== void 0) {
          throw state.error;
        } else if (!controller.signal.aborted) {
          throw error;
        }
      } finally {
        stream.destroy();
      }
    };
    handleStreamEnd = async (stream, controller, state) => {
      try {
        await nodeImports.finished(stream, {
          cleanup: true,
          readable: true,
          writable: false,
          error: false
        });
      } catch (error) {
        state.error = error;
      } finally {
        controller.abort();
      }
    };
    nodeImports = {};
  }
});

// node_modules/get-stream/source/contents.js
var getStreamContents, appendFinalChunk, appendChunk, addNewChunk, getChunkType, objectToString2, MaxBufferError;
var init_contents = __esm({
  "node_modules/get-stream/source/contents.js"() {
    init_stream();
    getStreamContents = async (stream, { init, convertChunk, getSize, truncateChunk, addChunk, getFinalChunk, finalize }, { maxBuffer = Number.POSITIVE_INFINITY } = {}) => {
      const asyncIterable = getAsyncIterable(stream);
      const state = init();
      state.length = 0;
      try {
        for await (const chunk of asyncIterable) {
          const chunkType = getChunkType(chunk);
          const convertedChunk = convertChunk[chunkType](chunk, state);
          appendChunk({
            convertedChunk,
            state,
            getSize,
            truncateChunk,
            addChunk,
            maxBuffer
          });
        }
        appendFinalChunk({
          state,
          convertChunk,
          getSize,
          truncateChunk,
          addChunk,
          getFinalChunk,
          maxBuffer
        });
        return finalize(state);
      } catch (error) {
        const normalizedError = typeof error === "object" && error !== null ? error : new Error(error);
        normalizedError.bufferedData = finalize(state);
        throw normalizedError;
      }
    };
    appendFinalChunk = ({ state, getSize, truncateChunk, addChunk, getFinalChunk, maxBuffer }) => {
      const convertedChunk = getFinalChunk(state);
      if (convertedChunk !== void 0) {
        appendChunk({
          convertedChunk,
          state,
          getSize,
          truncateChunk,
          addChunk,
          maxBuffer
        });
      }
    };
    appendChunk = ({ convertedChunk, state, getSize, truncateChunk, addChunk, maxBuffer }) => {
      const chunkSize = getSize(convertedChunk);
      const newLength = state.length + chunkSize;
      if (newLength <= maxBuffer) {
        addNewChunk(convertedChunk, state, addChunk, newLength);
        return;
      }
      const truncatedChunk = truncateChunk(convertedChunk, maxBuffer - state.length);
      if (truncatedChunk !== void 0) {
        addNewChunk(truncatedChunk, state, addChunk, maxBuffer);
      }
      throw new MaxBufferError();
    };
    addNewChunk = (convertedChunk, state, addChunk, newLength) => {
      state.contents = addChunk(convertedChunk, state, newLength);
      state.length = newLength;
    };
    getChunkType = (chunk) => {
      const typeOfChunk = typeof chunk;
      if (typeOfChunk === "string") {
        return "string";
      }
      if (typeOfChunk !== "object" || chunk === null) {
        return "others";
      }
      if (globalThis.Buffer?.isBuffer(chunk)) {
        return "buffer";
      }
      const prototypeName = objectToString2.call(chunk);
      if (prototypeName === "[object ArrayBuffer]") {
        return "arrayBuffer";
      }
      if (prototypeName === "[object DataView]") {
        return "dataView";
      }
      if (Number.isInteger(chunk.byteLength) && Number.isInteger(chunk.byteOffset) && objectToString2.call(chunk.buffer) === "[object ArrayBuffer]") {
        return "typedArray";
      }
      return "others";
    };
    ({ toString: objectToString2 } = Object.prototype);
    MaxBufferError = class extends Error {
      name = "MaxBufferError";
      constructor() {
        super("maxBuffer exceeded");
      }
    };
  }
});

// node_modules/get-stream/source/utils.js
var identity2, noop, getContentsProperty, throwObjectStream, getLengthProperty;
var init_utils = __esm({
  "node_modules/get-stream/source/utils.js"() {
    identity2 = (value) => value;
    noop = () => void 0;
    getContentsProperty = ({ contents }) => contents;
    throwObjectStream = (chunk) => {
      throw new Error(`Streams in object mode are not supported: ${String(chunk)}`);
    };
    getLengthProperty = (convertedChunk) => convertedChunk.length;
  }
});

// node_modules/get-stream/source/array.js
async function getStreamAsArray(stream, options) {
  return getStreamContents(stream, arrayMethods, options);
}
var initArray, increment, addArrayChunk, arrayMethods;
var init_array = __esm({
  "node_modules/get-stream/source/array.js"() {
    init_contents();
    init_utils();
    initArray = () => ({ contents: [] });
    increment = () => 1;
    addArrayChunk = (convertedChunk, { contents }) => {
      contents.push(convertedChunk);
      return contents;
    };
    arrayMethods = {
      init: initArray,
      convertChunk: {
        string: identity2,
        buffer: identity2,
        arrayBuffer: identity2,
        dataView: identity2,
        typedArray: identity2,
        others: identity2
      },
      getSize: increment,
      truncateChunk: noop,
      addChunk: addArrayChunk,
      getFinalChunk: noop,
      finalize: getContentsProperty
    };
  }
});

// node_modules/get-stream/source/array-buffer.js
async function getStreamAsArrayBuffer(stream, options) {
  return getStreamContents(stream, arrayBufferMethods, options);
}
var initArrayBuffer, useTextEncoder, textEncoder2, useUint8Array, useUint8ArrayWithOffset, truncateArrayBufferChunk, addArrayBufferChunk, resizeArrayBufferSlow, resizeArrayBuffer, getNewContentsLength, SCALE_FACTOR, finalizeArrayBuffer, hasArrayBufferResize, arrayBufferMethods;
var init_array_buffer = __esm({
  "node_modules/get-stream/source/array-buffer.js"() {
    init_contents();
    init_utils();
    initArrayBuffer = () => ({ contents: new ArrayBuffer(0) });
    useTextEncoder = (chunk) => textEncoder2.encode(chunk);
    textEncoder2 = new TextEncoder();
    useUint8Array = (chunk) => new Uint8Array(chunk);
    useUint8ArrayWithOffset = (chunk) => new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
    truncateArrayBufferChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
    addArrayBufferChunk = (convertedChunk, { contents, length: previousLength }, length) => {
      const newContents = hasArrayBufferResize() ? resizeArrayBuffer(contents, length) : resizeArrayBufferSlow(contents, length);
      new Uint8Array(newContents).set(convertedChunk, previousLength);
      return newContents;
    };
    resizeArrayBufferSlow = (contents, length) => {
      if (length <= contents.byteLength) {
        return contents;
      }
      const arrayBuffer = new ArrayBuffer(getNewContentsLength(length));
      new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
      return arrayBuffer;
    };
    resizeArrayBuffer = (contents, length) => {
      if (length <= contents.maxByteLength) {
        contents.resize(length);
        return contents;
      }
      const arrayBuffer = new ArrayBuffer(length, { maxByteLength: getNewContentsLength(length) });
      new Uint8Array(arrayBuffer).set(new Uint8Array(contents), 0);
      return arrayBuffer;
    };
    getNewContentsLength = (length) => SCALE_FACTOR ** Math.ceil(Math.log(length) / Math.log(SCALE_FACTOR));
    SCALE_FACTOR = 2;
    finalizeArrayBuffer = ({ contents, length }) => hasArrayBufferResize() ? contents : contents.slice(0, length);
    hasArrayBufferResize = () => "resize" in ArrayBuffer.prototype;
    arrayBufferMethods = {
      init: initArrayBuffer,
      convertChunk: {
        string: useTextEncoder,
        buffer: useUint8Array,
        arrayBuffer: useUint8Array,
        dataView: useUint8ArrayWithOffset,
        typedArray: useUint8ArrayWithOffset,
        others: throwObjectStream
      },
      getSize: getLengthProperty,
      truncateChunk: truncateArrayBufferChunk,
      addChunk: addArrayBufferChunk,
      getFinalChunk: noop,
      finalize: finalizeArrayBuffer
    };
  }
});

// node_modules/get-stream/source/string.js
async function getStreamAsString(stream, options) {
  return getStreamContents(stream, stringMethods, options);
}
var initString, useTextDecoder, addStringChunk, truncateStringChunk, getFinalStringChunk, stringMethods;
var init_string = __esm({
  "node_modules/get-stream/source/string.js"() {
    init_contents();
    init_utils();
    initString = () => ({ contents: "", textDecoder: new TextDecoder() });
    useTextDecoder = (chunk, { textDecoder: textDecoder2 }) => textDecoder2.decode(chunk, { stream: true });
    addStringChunk = (convertedChunk, { contents }) => contents + convertedChunk;
    truncateStringChunk = (convertedChunk, chunkSize) => convertedChunk.slice(0, chunkSize);
    getFinalStringChunk = ({ textDecoder: textDecoder2 }) => {
      const finalChunk = textDecoder2.decode();
      return finalChunk === "" ? void 0 : finalChunk;
    };
    stringMethods = {
      init: initString,
      convertChunk: {
        string: identity2,
        buffer: useTextDecoder,
        arrayBuffer: useTextDecoder,
        dataView: useTextDecoder,
        typedArray: useTextDecoder,
        others: throwObjectStream
      },
      getSize: getLengthProperty,
      truncateChunk: truncateStringChunk,
      addChunk: addStringChunk,
      getFinalChunk: getFinalStringChunk,
      finalize: getContentsProperty
    };
  }
});

// node_modules/get-stream/source/exports.js
var init_exports = __esm({
  "node_modules/get-stream/source/exports.js"() {
    init_array();
    init_array_buffer();
    init_string();
    init_contents();
  }
});

// node_modules/get-stream/source/index.js
var import_node_events6, import_promises5;
var init_source = __esm({
  "node_modules/get-stream/source/index.js"() {
    import_node_events6 = require("node:events");
    import_promises5 = require("node:stream/promises");
    init_stream();
    init_exports();
    Object.assign(nodeImports, { on: import_node_events6.on, finished: import_promises5.finished });
  }
});

// node_modules/execa/lib/io/max-buffer.js
var handleMaxBuffer, getMaxBufferUnit, checkIpcMaxBuffer, getMaxBufferMessage, getMaxBufferInfo, isMaxBufferSync, truncateMaxBufferSync, getMaxBufferSync;
var init_max_buffer = __esm({
  "node_modules/execa/lib/io/max-buffer.js"() {
    init_source();
    init_standard_stream();
    init_specific();
    handleMaxBuffer = ({ error, stream, readableObjectMode, lines, encoding, fdNumber }) => {
      if (!(error instanceof MaxBufferError)) {
        throw error;
      }
      if (fdNumber === "all") {
        return error;
      }
      const unit = getMaxBufferUnit(readableObjectMode, lines, encoding);
      error.maxBufferInfo = { fdNumber, unit };
      stream.destroy();
      throw error;
    };
    getMaxBufferUnit = (readableObjectMode, lines, encoding) => {
      if (readableObjectMode) {
        return "objects";
      }
      if (lines) {
        return "lines";
      }
      if (encoding === "buffer") {
        return "bytes";
      }
      return "characters";
    };
    checkIpcMaxBuffer = (subprocess, ipcOutput, maxBuffer) => {
      if (ipcOutput.length !== maxBuffer) {
        return;
      }
      const error = new MaxBufferError();
      error.maxBufferInfo = { fdNumber: "ipc" };
      throw error;
    };
    getMaxBufferMessage = (error, maxBuffer) => {
      const { streamName, threshold, unit } = getMaxBufferInfo(error, maxBuffer);
      return `Command's ${streamName} was larger than ${threshold} ${unit}`;
    };
    getMaxBufferInfo = (error, maxBuffer) => {
      if (error?.maxBufferInfo === void 0) {
        return { streamName: "output", threshold: maxBuffer[1], unit: "bytes" };
      }
      const { maxBufferInfo: { fdNumber, unit } } = error;
      delete error.maxBufferInfo;
      const threshold = getFdSpecificValue(maxBuffer, fdNumber);
      if (fdNumber === "ipc") {
        return { streamName: "IPC output", threshold, unit: "messages" };
      }
      return { streamName: getStreamName(fdNumber), threshold, unit };
    };
    isMaxBufferSync = (resultError, output, maxBuffer) => resultError?.code === "ENOBUFS" && output !== null && output.some((result) => result !== null && result.length > getMaxBufferSync(maxBuffer));
    truncateMaxBufferSync = (result, isMaxBuffer, maxBuffer) => {
      if (!isMaxBuffer) {
        return result;
      }
      const maxBufferValue = getMaxBufferSync(maxBuffer);
      return result.length > maxBufferValue ? result.slice(0, maxBufferValue) : result;
    };
    getMaxBufferSync = ([, stdoutMaxBuffer]) => stdoutMaxBuffer;
  }
});

// node_modules/execa/lib/return/message.js
var import_node_util6, createMessages, getErrorPrefix, getForcefulSuffix, getOriginalMessage, serializeIpcMessage, serializeMessagePart, serializeMessageItem;
var init_message = __esm({
  "node_modules/execa/lib/return/message.js"() {
    import_node_util6 = require("node:util");
    init_strip_final_newline();
    init_uint_array();
    init_cwd();
    init_escape();
    init_max_buffer();
    init_signal();
    init_final_error();
    createMessages = ({
      stdio,
      all,
      ipcOutput,
      originalError,
      signal,
      signalDescription,
      exitCode,
      escapedCommand,
      timedOut,
      isCanceled,
      isGracefullyCanceled,
      isMaxBuffer,
      isForcefullyTerminated,
      forceKillAfterDelay,
      killSignal,
      maxBuffer,
      timeout,
      cwd
    }) => {
      const errorCode = originalError?.code;
      const prefix = getErrorPrefix({
        originalError,
        timedOut,
        timeout,
        isMaxBuffer,
        maxBuffer,
        errorCode,
        signal,
        signalDescription,
        exitCode,
        isCanceled,
        isGracefullyCanceled,
        isForcefullyTerminated,
        forceKillAfterDelay,
        killSignal
      });
      const originalMessage = getOriginalMessage(originalError, cwd);
      const suffix = originalMessage === void 0 ? "" : `
${originalMessage}`;
      const shortMessage = `${prefix}: ${escapedCommand}${suffix}`;
      const messageStdio = all === void 0 ? [stdio[2], stdio[1]] : [all];
      const message = [
        shortMessage,
        ...messageStdio,
        ...stdio.slice(3),
        ipcOutput.map((ipcMessage) => serializeIpcMessage(ipcMessage)).join("\n")
      ].map((messagePart) => escapeLines(stripFinalNewline(serializeMessagePart(messagePart)))).filter(Boolean).join("\n\n");
      return { originalMessage, shortMessage, message };
    };
    getErrorPrefix = ({
      originalError,
      timedOut,
      timeout,
      isMaxBuffer,
      maxBuffer,
      errorCode,
      signal,
      signalDescription,
      exitCode,
      isCanceled,
      isGracefullyCanceled,
      isForcefullyTerminated,
      forceKillAfterDelay,
      killSignal
    }) => {
      const forcefulSuffix = getForcefulSuffix(isForcefullyTerminated, forceKillAfterDelay);
      if (timedOut) {
        return `Command timed out after ${timeout} milliseconds${forcefulSuffix}`;
      }
      if (isGracefullyCanceled) {
        if (signal === void 0) {
          return `Command was gracefully canceled with exit code ${exitCode}`;
        }
        return isForcefullyTerminated ? `Command was gracefully canceled${forcefulSuffix}` : `Command was gracefully canceled with ${signal} (${signalDescription})`;
      }
      if (isCanceled) {
        return `Command was canceled${forcefulSuffix}`;
      }
      if (isMaxBuffer) {
        return `${getMaxBufferMessage(originalError, maxBuffer)}${forcefulSuffix}`;
      }
      if (errorCode !== void 0) {
        return `Command failed with ${errorCode}${forcefulSuffix}`;
      }
      if (isForcefullyTerminated) {
        return `Command was killed with ${killSignal} (${getSignalDescription(killSignal)})${forcefulSuffix}`;
      }
      if (signal !== void 0) {
        return `Command was killed with ${signal} (${signalDescription})`;
      }
      if (exitCode !== void 0) {
        return `Command failed with exit code ${exitCode}`;
      }
      return "Command failed";
    };
    getForcefulSuffix = (isForcefullyTerminated, forceKillAfterDelay) => isForcefullyTerminated ? ` and was forcefully terminated after ${forceKillAfterDelay} milliseconds` : "";
    getOriginalMessage = (originalError, cwd) => {
      if (originalError instanceof DiscardedError) {
        return;
      }
      const originalMessage = isExecaError(originalError) ? originalError.originalMessage : String(originalError?.message ?? originalError);
      const escapedOriginalMessage = escapeLines(fixCwdError(originalMessage, cwd));
      return escapedOriginalMessage === "" ? void 0 : escapedOriginalMessage;
    };
    serializeIpcMessage = (ipcMessage) => typeof ipcMessage === "string" ? ipcMessage : (0, import_node_util6.inspect)(ipcMessage);
    serializeMessagePart = (messagePart) => Array.isArray(messagePart) ? messagePart.map((messageItem) => stripFinalNewline(serializeMessageItem(messageItem))).filter(Boolean).join("\n") : serializeMessageItem(messagePart);
    serializeMessageItem = (messageItem) => {
      if (typeof messageItem === "string") {
        return messageItem;
      }
      if (isUint8Array(messageItem)) {
        return uint8ArrayToString(messageItem);
      }
      return "";
    };
  }
});

// node_modules/execa/lib/return/result.js
var makeSuccessResult, makeEarlyError, makeError, getErrorProperties, omitUndefinedProperties, normalizeExitPayload;
var init_result = __esm({
  "node_modules/execa/lib/return/result.js"() {
    init_signal();
    init_duration();
    init_final_error();
    init_message();
    makeSuccessResult = ({
      command,
      escapedCommand,
      stdio,
      all,
      ipcOutput,
      options: { cwd },
      startTime
    }) => omitUndefinedProperties({
      command,
      escapedCommand,
      cwd,
      durationMs: getDurationMs(startTime),
      failed: false,
      timedOut: false,
      isCanceled: false,
      isGracefullyCanceled: false,
      isTerminated: false,
      isMaxBuffer: false,
      isForcefullyTerminated: false,
      exitCode: 0,
      stdout: stdio[1],
      stderr: stdio[2],
      all,
      stdio,
      ipcOutput,
      pipedFrom: []
    });
    makeEarlyError = ({
      error,
      command,
      escapedCommand,
      fileDescriptors,
      options,
      startTime,
      isSync
    }) => makeError({
      error,
      command,
      escapedCommand,
      startTime,
      timedOut: false,
      isCanceled: false,
      isGracefullyCanceled: false,
      isMaxBuffer: false,
      isForcefullyTerminated: false,
      stdio: Array.from({ length: fileDescriptors.length }),
      ipcOutput: [],
      options,
      isSync
    });
    makeError = ({
      error: originalError,
      command,
      escapedCommand,
      startTime,
      timedOut,
      isCanceled,
      isGracefullyCanceled,
      isMaxBuffer,
      isForcefullyTerminated,
      exitCode: rawExitCode,
      signal: rawSignal,
      stdio,
      all,
      ipcOutput,
      options: {
        timeoutDuration,
        timeout = timeoutDuration,
        forceKillAfterDelay,
        killSignal,
        cwd,
        maxBuffer
      },
      isSync
    }) => {
      const { exitCode, signal, signalDescription } = normalizeExitPayload(rawExitCode, rawSignal);
      const { originalMessage, shortMessage, message } = createMessages({
        stdio,
        all,
        ipcOutput,
        originalError,
        signal,
        signalDescription,
        exitCode,
        escapedCommand,
        timedOut,
        isCanceled,
        isGracefullyCanceled,
        isMaxBuffer,
        isForcefullyTerminated,
        forceKillAfterDelay,
        killSignal,
        maxBuffer,
        timeout,
        cwd
      });
      const error = getFinalError(originalError, message, isSync);
      Object.assign(error, getErrorProperties({
        error,
        command,
        escapedCommand,
        startTime,
        timedOut,
        isCanceled,
        isGracefullyCanceled,
        isMaxBuffer,
        isForcefullyTerminated,
        exitCode,
        signal,
        signalDescription,
        stdio,
        all,
        ipcOutput,
        cwd,
        originalMessage,
        shortMessage
      }));
      return error;
    };
    getErrorProperties = ({
      error,
      command,
      escapedCommand,
      startTime,
      timedOut,
      isCanceled,
      isGracefullyCanceled,
      isMaxBuffer,
      isForcefullyTerminated,
      exitCode,
      signal,
      signalDescription,
      stdio,
      all,
      ipcOutput,
      cwd,
      originalMessage,
      shortMessage
    }) => omitUndefinedProperties({
      shortMessage,
      originalMessage,
      command,
      escapedCommand,
      cwd,
      durationMs: getDurationMs(startTime),
      failed: true,
      timedOut,
      isCanceled,
      isGracefullyCanceled,
      isTerminated: signal !== void 0,
      isMaxBuffer,
      isForcefullyTerminated,
      exitCode,
      signal,
      signalDescription,
      code: error.cause?.code,
      stdout: stdio[1],
      stderr: stdio[2],
      all,
      stdio,
      ipcOutput,
      pipedFrom: []
    });
    omitUndefinedProperties = (result) => Object.fromEntries(Object.entries(result).filter(([, value]) => value !== void 0));
    normalizeExitPayload = (rawExitCode, rawSignal) => {
      const exitCode = rawExitCode === null ? void 0 : rawExitCode;
      const signal = rawSignal === null ? void 0 : rawSignal;
      const signalDescription = signal === void 0 ? void 0 : getSignalDescription(rawSignal);
      return { exitCode, signal, signalDescription };
    };
  }
});

// node_modules/parse-ms/index.js
function parseNumber(milliseconds) {
  return {
    days: Math.trunc(milliseconds / 864e5),
    hours: Math.trunc(milliseconds / 36e5 % 24),
    minutes: Math.trunc(milliseconds / 6e4 % 60),
    seconds: Math.trunc(milliseconds / 1e3 % 60),
    milliseconds: Math.trunc(milliseconds % 1e3),
    microseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1e3) % 1e3),
    nanoseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1e6) % 1e3)
  };
}
function parseBigint(milliseconds) {
  return {
    days: milliseconds / 86400000n,
    hours: milliseconds / 3600000n % 24n,
    minutes: milliseconds / 60000n % 60n,
    seconds: milliseconds / 1000n % 60n,
    milliseconds: milliseconds % 1000n,
    microseconds: 0n,
    nanoseconds: 0n
  };
}
function parseMilliseconds(milliseconds) {
  switch (typeof milliseconds) {
    case "number": {
      if (Number.isFinite(milliseconds)) {
        return parseNumber(milliseconds);
      }
      break;
    }
    case "bigint": {
      return parseBigint(milliseconds);
    }
  }
  throw new TypeError("Expected a finite number or bigint");
}
var toZeroIfInfinity;
var init_parse_ms = __esm({
  "node_modules/parse-ms/index.js"() {
    toZeroIfInfinity = (value) => Number.isFinite(value) ? value : 0;
  }
});

// node_modules/pretty-ms/index.js
function prettyMilliseconds(milliseconds, options) {
  const isBigInt = typeof milliseconds === "bigint";
  if (!isBigInt && !Number.isFinite(milliseconds)) {
    throw new TypeError("Expected a finite number or bigint");
  }
  options = { ...options };
  const sign = milliseconds < 0 ? "-" : "";
  milliseconds = milliseconds < 0 ? -milliseconds : milliseconds;
  if (options.colonNotation) {
    options.compact = false;
    options.formatSubMilliseconds = false;
    options.separateMilliseconds = false;
    options.verbose = false;
  }
  if (options.compact) {
    options.unitCount = 1;
    options.secondsDecimalDigits = 0;
    options.millisecondsDecimalDigits = 0;
  }
  let result = [];
  const floorDecimals = (value, decimalDigits) => {
    const flooredInterimValue = Math.floor(value * 10 ** decimalDigits + SECOND_ROUNDING_EPSILON);
    const flooredValue = Math.round(flooredInterimValue) / 10 ** decimalDigits;
    return flooredValue.toFixed(decimalDigits);
  };
  const add = (value, long, short, valueString) => {
    if ((result.length === 0 || !options.colonNotation) && isZero(value) && !(options.colonNotation && short === "m")) {
      return;
    }
    valueString ??= String(value);
    if (options.colonNotation) {
      const wholeDigits = valueString.includes(".") ? valueString.split(".")[0].length : valueString.length;
      const minLength = result.length > 0 ? 2 : 1;
      valueString = "0".repeat(Math.max(0, minLength - wholeDigits)) + valueString;
    } else {
      valueString += options.verbose ? " " + pluralize(long, value) : short;
    }
    result.push(valueString);
  };
  const parsed = parseMilliseconds(milliseconds);
  const days = BigInt(parsed.days);
  if (options.hideYearAndDays) {
    add(BigInt(days) * 24n + BigInt(parsed.hours), "hour", "h");
  } else {
    if (options.hideYear) {
      add(days, "day", "d");
    } else {
      add(days / 365n, "year", "y");
      add(days % 365n, "day", "d");
    }
    add(Number(parsed.hours), "hour", "h");
  }
  add(Number(parsed.minutes), "minute", "m");
  if (!options.hideSeconds) {
    if (options.separateMilliseconds || options.formatSubMilliseconds || !options.colonNotation && milliseconds < 1e3) {
      const seconds = Number(parsed.seconds);
      const milliseconds2 = Number(parsed.milliseconds);
      const microseconds = Number(parsed.microseconds);
      const nanoseconds = Number(parsed.nanoseconds);
      add(seconds, "second", "s");
      if (options.formatSubMilliseconds) {
        add(milliseconds2, "millisecond", "ms");
        add(microseconds, "microsecond", "\xB5s");
        add(nanoseconds, "nanosecond", "ns");
      } else {
        const millisecondsAndBelow = milliseconds2 + microseconds / 1e3 + nanoseconds / 1e6;
        const millisecondsDecimalDigits = typeof options.millisecondsDecimalDigits === "number" ? options.millisecondsDecimalDigits : 0;
        const roundedMilliseconds = millisecondsAndBelow >= 1 ? Math.round(millisecondsAndBelow) : Math.ceil(millisecondsAndBelow);
        const millisecondsString = millisecondsDecimalDigits ? millisecondsAndBelow.toFixed(millisecondsDecimalDigits) : roundedMilliseconds;
        add(
          Number.parseFloat(millisecondsString),
          "millisecond",
          "ms",
          millisecondsString
        );
      }
    } else {
      const seconds = (isBigInt ? Number(milliseconds % ONE_DAY_IN_MILLISECONDS) : milliseconds) / 1e3 % 60;
      const secondsDecimalDigits = typeof options.secondsDecimalDigits === "number" ? options.secondsDecimalDigits : 1;
      const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
      const secondsString = options.keepDecimalsOnWholeSeconds ? secondsFixed : secondsFixed.replace(/\.0+$/, "");
      add(Number.parseFloat(secondsString), "second", "s", secondsString);
    }
  }
  if (result.length === 0) {
    return sign + "0" + (options.verbose ? " milliseconds" : "ms");
  }
  const separator = options.colonNotation ? ":" : " ";
  if (typeof options.unitCount === "number") {
    result = result.slice(0, Math.max(options.unitCount, 1));
  }
  return sign + result.join(separator);
}
var isZero, pluralize, SECOND_ROUNDING_EPSILON, ONE_DAY_IN_MILLISECONDS;
var init_pretty_ms = __esm({
  "node_modules/pretty-ms/index.js"() {
    init_parse_ms();
    isZero = (value) => value === 0 || value === 0n;
    pluralize = (word, count2) => count2 === 1 || count2 === 1n ? word : `${word}s`;
    SECOND_ROUNDING_EPSILON = 1e-7;
    ONE_DAY_IN_MILLISECONDS = 24n * 60n * 60n * 1000n;
  }
});

// node_modules/execa/lib/verbose/error.js
var logError;
var init_error = __esm({
  "node_modules/execa/lib/verbose/error.js"() {
    init_log();
    logError = (result, verboseInfo) => {
      if (result.failed) {
        verboseLog({
          type: "error",
          verboseMessage: result.shortMessage,
          verboseInfo,
          result
        });
      }
    };
  }
});

// node_modules/execa/lib/verbose/complete.js
var logResult, logDuration;
var init_complete = __esm({
  "node_modules/execa/lib/verbose/complete.js"() {
    init_pretty_ms();
    init_values();
    init_log();
    init_error();
    logResult = (result, verboseInfo) => {
      if (!isVerbose(verboseInfo)) {
        return;
      }
      logError(result, verboseInfo);
      logDuration(result, verboseInfo);
    };
    logDuration = (result, verboseInfo) => {
      const verboseMessage = `(done in ${prettyMilliseconds(result.durationMs)})`;
      verboseLog({
        type: "duration",
        verboseMessage,
        verboseInfo,
        result
      });
    };
  }
});

// node_modules/execa/lib/return/reject.js
var handleResult;
var init_reject = __esm({
  "node_modules/execa/lib/return/reject.js"() {
    init_complete();
    handleResult = (result, verboseInfo, { reject }) => {
      logResult(result, verboseInfo);
      if (result.failed && reject) {
        throw result;
      }
      return result;
    };
  }
});

// node_modules/execa/lib/stdio/type.js
var getStdioItemType, getTransformObjectType, getDuplexType, getTransformStreamType, validateNonGeneratorType, checkUndefinedOption, getGeneratorObjectType, checkBooleanOption, isGenerator, isAsyncGenerator, isSyncGenerator, isTransformOptions, isUrl, isRegularUrl, isFilePathObject, FILE_PATH_KEYS, isFilePathString, isUnknownStdioString, KNOWN_STDIO_STRINGS, isReadableStream2, isWritableStream2, isWebStream, isTransformStream, isAsyncIterableObject, isIterableObject, isObject, TRANSFORM_TYPES, FILE_TYPES, SPECIAL_DUPLICATE_TYPES_SYNC, SPECIAL_DUPLICATE_TYPES, FORBID_DUPLICATE_TYPES, TYPE_TO_MESSAGE;
var init_type = __esm({
  "node_modules/execa/lib/stdio/type.js"() {
    init_is_stream();
    init_is_plain_obj();
    init_uint_array();
    getStdioItemType = (value, optionName) => {
      if (isAsyncGenerator(value)) {
        return "asyncGenerator";
      }
      if (isSyncGenerator(value)) {
        return "generator";
      }
      if (isUrl(value)) {
        return "fileUrl";
      }
      if (isFilePathObject(value)) {
        return "filePath";
      }
      if (isWebStream(value)) {
        return "webStream";
      }
      if (isStream(value, { checkOpen: false })) {
        return "native";
      }
      if (isUint8Array(value)) {
        return "uint8Array";
      }
      if (isAsyncIterableObject(value)) {
        return "asyncIterable";
      }
      if (isIterableObject(value)) {
        return "iterable";
      }
      if (isTransformStream(value)) {
        return getTransformStreamType({ transform: value }, optionName);
      }
      if (isTransformOptions(value)) {
        return getTransformObjectType(value, optionName);
      }
      return "native";
    };
    getTransformObjectType = (value, optionName) => {
      if (isDuplexStream(value.transform, { checkOpen: false })) {
        return getDuplexType(value, optionName);
      }
      if (isTransformStream(value.transform)) {
        return getTransformStreamType(value, optionName);
      }
      return getGeneratorObjectType(value, optionName);
    };
    getDuplexType = (value, optionName) => {
      validateNonGeneratorType(value, optionName, "Duplex stream");
      return "duplex";
    };
    getTransformStreamType = (value, optionName) => {
      validateNonGeneratorType(value, optionName, "web TransformStream");
      return "webTransform";
    };
    validateNonGeneratorType = ({ final, binary, objectMode }, optionName, typeName) => {
      checkUndefinedOption(final, `${optionName}.final`, typeName);
      checkUndefinedOption(binary, `${optionName}.binary`, typeName);
      checkBooleanOption(objectMode, `${optionName}.objectMode`);
    };
    checkUndefinedOption = (value, optionName, typeName) => {
      if (value !== void 0) {
        throw new TypeError(`The \`${optionName}\` option can only be defined when using a generator, not a ${typeName}.`);
      }
    };
    getGeneratorObjectType = ({ transform, final, binary, objectMode }, optionName) => {
      if (transform !== void 0 && !isGenerator(transform)) {
        throw new TypeError(`The \`${optionName}.transform\` option must be a generator, a Duplex stream or a web TransformStream.`);
      }
      if (isDuplexStream(final, { checkOpen: false })) {
        throw new TypeError(`The \`${optionName}.final\` option must not be a Duplex stream.`);
      }
      if (isTransformStream(final)) {
        throw new TypeError(`The \`${optionName}.final\` option must not be a web TransformStream.`);
      }
      if (final !== void 0 && !isGenerator(final)) {
        throw new TypeError(`The \`${optionName}.final\` option must be a generator.`);
      }
      checkBooleanOption(binary, `${optionName}.binary`);
      checkBooleanOption(objectMode, `${optionName}.objectMode`);
      return isAsyncGenerator(transform) || isAsyncGenerator(final) ? "asyncGenerator" : "generator";
    };
    checkBooleanOption = (value, optionName) => {
      if (value !== void 0 && typeof value !== "boolean") {
        throw new TypeError(`The \`${optionName}\` option must use a boolean.`);
      }
    };
    isGenerator = (value) => isAsyncGenerator(value) || isSyncGenerator(value);
    isAsyncGenerator = (value) => Object.prototype.toString.call(value) === "[object AsyncGeneratorFunction]";
    isSyncGenerator = (value) => Object.prototype.toString.call(value) === "[object GeneratorFunction]";
    isTransformOptions = (value) => isPlainObject(value) && (value.transform !== void 0 || value.final !== void 0);
    isUrl = (value) => Object.prototype.toString.call(value) === "[object URL]";
    isRegularUrl = (value) => isUrl(value) && value.protocol !== "file:";
    isFilePathObject = (value) => isPlainObject(value) && Object.keys(value).length > 0 && Object.keys(value).every((key) => FILE_PATH_KEYS.has(key)) && isFilePathString(value.file);
    FILE_PATH_KEYS = /* @__PURE__ */ new Set(["file", "append"]);
    isFilePathString = (file) => typeof file === "string";
    isUnknownStdioString = (type, value) => type === "native" && typeof value === "string" && !KNOWN_STDIO_STRINGS.has(value);
    KNOWN_STDIO_STRINGS = /* @__PURE__ */ new Set(["ipc", "ignore", "inherit", "overlapped", "pipe"]);
    isReadableStream2 = (value) => Object.prototype.toString.call(value) === "[object ReadableStream]";
    isWritableStream2 = (value) => Object.prototype.toString.call(value) === "[object WritableStream]";
    isWebStream = (value) => isReadableStream2(value) || isWritableStream2(value);
    isTransformStream = (value) => isReadableStream2(value?.readable) && isWritableStream2(value?.writable);
    isAsyncIterableObject = (value) => isObject(value) && typeof value[Symbol.asyncIterator] === "function";
    isIterableObject = (value) => isObject(value) && typeof value[Symbol.iterator] === "function";
    isObject = (value) => typeof value === "object" && value !== null;
    TRANSFORM_TYPES = /* @__PURE__ */ new Set(["generator", "asyncGenerator", "duplex", "webTransform"]);
    FILE_TYPES = /* @__PURE__ */ new Set(["fileUrl", "filePath", "fileNumber"]);
    SPECIAL_DUPLICATE_TYPES_SYNC = /* @__PURE__ */ new Set(["fileUrl", "filePath"]);
    SPECIAL_DUPLICATE_TYPES = /* @__PURE__ */ new Set([...SPECIAL_DUPLICATE_TYPES_SYNC, "webStream", "nodeStream"]);
    FORBID_DUPLICATE_TYPES = /* @__PURE__ */ new Set(["webTransform", "duplex"]);
    TYPE_TO_MESSAGE = {
      generator: "a generator",
      asyncGenerator: "an async generator",
      fileUrl: "a file URL",
      filePath: "a file path string",
      fileNumber: "a file descriptor number",
      webStream: "a web stream",
      nodeStream: "a Node.js stream",
      webTransform: "a web TransformStream",
      duplex: "a Duplex stream",
      native: "any value",
      iterable: "an iterable",
      asyncIterable: "an async iterable",
      string: "a string",
      uint8Array: "a Uint8Array"
    };
  }
});

// node_modules/execa/lib/transform/object-mode.js
var getTransformObjectModes, getOutputObjectModes, getInputObjectModes, getFdObjectMode;
var init_object_mode = __esm({
  "node_modules/execa/lib/transform/object-mode.js"() {
    init_type();
    getTransformObjectModes = (objectMode, index, newTransforms, direction) => direction === "output" ? getOutputObjectModes(objectMode, index, newTransforms) : getInputObjectModes(objectMode, index, newTransforms);
    getOutputObjectModes = (objectMode, index, newTransforms) => {
      const writableObjectMode = index !== 0 && newTransforms[index - 1].value.readableObjectMode;
      const readableObjectMode = objectMode ?? writableObjectMode;
      return { writableObjectMode, readableObjectMode };
    };
    getInputObjectModes = (objectMode, index, newTransforms) => {
      const writableObjectMode = index === 0 ? objectMode === true : newTransforms[index - 1].value.readableObjectMode;
      const readableObjectMode = index !== newTransforms.length - 1 && (objectMode ?? writableObjectMode);
      return { writableObjectMode, readableObjectMode };
    };
    getFdObjectMode = (stdioItems, direction) => {
      const lastTransform = stdioItems.findLast(({ type }) => TRANSFORM_TYPES.has(type));
      if (lastTransform === void 0) {
        return false;
      }
      return direction === "input" ? lastTransform.value.writableObjectMode : lastTransform.value.readableObjectMode;
    };
  }
});

// node_modules/execa/lib/transform/normalize.js
var normalizeTransforms, getTransforms, normalizeTransform, normalizeDuplex, normalizeTransformStream, normalizeGenerator, sortTransforms;
var init_normalize = __esm({
  "node_modules/execa/lib/transform/normalize.js"() {
    init_is_plain_obj();
    init_encoding_option();
    init_type();
    init_object_mode();
    normalizeTransforms = (stdioItems, optionName, direction, options) => [
      ...stdioItems.filter(({ type }) => !TRANSFORM_TYPES.has(type)),
      ...getTransforms(stdioItems, optionName, direction, options)
    ];
    getTransforms = (stdioItems, optionName, direction, { encoding }) => {
      const transforms = stdioItems.filter(({ type }) => TRANSFORM_TYPES.has(type));
      const newTransforms = Array.from({ length: transforms.length });
      for (const [index, stdioItem] of Object.entries(transforms)) {
        newTransforms[index] = normalizeTransform({
          stdioItem,
          index: Number(index),
          newTransforms,
          optionName,
          direction,
          encoding
        });
      }
      return sortTransforms(newTransforms, direction);
    };
    normalizeTransform = ({ stdioItem, stdioItem: { type }, index, newTransforms, optionName, direction, encoding }) => {
      if (type === "duplex") {
        return normalizeDuplex({ stdioItem, optionName });
      }
      if (type === "webTransform") {
        return normalizeTransformStream({
          stdioItem,
          index,
          newTransforms,
          direction
        });
      }
      return normalizeGenerator({
        stdioItem,
        index,
        newTransforms,
        direction,
        encoding
      });
    };
    normalizeDuplex = ({
      stdioItem,
      stdioItem: {
        value: {
          transform,
          transform: { writableObjectMode, readableObjectMode },
          objectMode = readableObjectMode
        }
      },
      optionName
    }) => {
      if (objectMode && !readableObjectMode) {
        throw new TypeError(`The \`${optionName}.objectMode\` option can only be \`true\` if \`new Duplex({objectMode: true})\` is used.`);
      }
      if (!objectMode && readableObjectMode) {
        throw new TypeError(`The \`${optionName}.objectMode\` option cannot be \`false\` if \`new Duplex({objectMode: true})\` is used.`);
      }
      return {
        ...stdioItem,
        value: { transform, writableObjectMode, readableObjectMode }
      };
    };
    normalizeTransformStream = ({ stdioItem, stdioItem: { value }, index, newTransforms, direction }) => {
      const { transform, objectMode } = isPlainObject(value) ? value : { transform: value };
      const { writableObjectMode, readableObjectMode } = getTransformObjectModes(objectMode, index, newTransforms, direction);
      return {
        ...stdioItem,
        value: { transform, writableObjectMode, readableObjectMode }
      };
    };
    normalizeGenerator = ({ stdioItem, stdioItem: { value }, index, newTransforms, direction, encoding }) => {
      const {
        transform,
        final,
        binary: binaryOption = false,
        preserveNewlines = false,
        objectMode
      } = isPlainObject(value) ? value : { transform: value };
      const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
      const { writableObjectMode, readableObjectMode } = getTransformObjectModes(objectMode, index, newTransforms, direction);
      return {
        ...stdioItem,
        value: {
          transform,
          final,
          binary,
          preserveNewlines,
          writableObjectMode,
          readableObjectMode
        }
      };
    };
    sortTransforms = (newTransforms, direction) => direction === "input" ? newTransforms.reverse() : newTransforms;
  }
});

// node_modules/execa/lib/stdio/direction.js
var import_node_process9, getStreamDirection, getStdioItemDirection, KNOWN_DIRECTIONS, anyDirection, alwaysInput, guessStreamDirection, getStandardStreamDirection, DEFAULT_DIRECTION;
var init_direction = __esm({
  "node_modules/execa/lib/stdio/direction.js"() {
    import_node_process9 = __toESM(require("node:process"), 1);
    init_is_stream();
    init_type();
    getStreamDirection = (stdioItems, fdNumber, optionName) => {
      const directions = stdioItems.map((stdioItem) => getStdioItemDirection(stdioItem, fdNumber));
      if (directions.includes("input") && directions.includes("output")) {
        throw new TypeError(`The \`${optionName}\` option must not be an array of both readable and writable values.`);
      }
      return directions.find(Boolean) ?? DEFAULT_DIRECTION;
    };
    getStdioItemDirection = ({ type, value }, fdNumber) => KNOWN_DIRECTIONS[fdNumber] ?? guessStreamDirection[type](value);
    KNOWN_DIRECTIONS = ["input", "output", "output"];
    anyDirection = () => void 0;
    alwaysInput = () => "input";
    guessStreamDirection = {
      generator: anyDirection,
      asyncGenerator: anyDirection,
      fileUrl: anyDirection,
      filePath: anyDirection,
      iterable: alwaysInput,
      asyncIterable: alwaysInput,
      uint8Array: alwaysInput,
      webStream: (value) => isWritableStream2(value) ? "output" : "input",
      nodeStream(value) {
        if (!isReadableStream(value, { checkOpen: false })) {
          return "output";
        }
        return isWritableStream(value, { checkOpen: false }) ? void 0 : "input";
      },
      webTransform: anyDirection,
      duplex: anyDirection,
      native(value) {
        const standardStreamDirection = getStandardStreamDirection(value);
        if (standardStreamDirection !== void 0) {
          return standardStreamDirection;
        }
        if (isStream(value, { checkOpen: false })) {
          return guessStreamDirection.nodeStream(value);
        }
      }
    };
    getStandardStreamDirection = (value) => {
      if ([0, import_node_process9.default.stdin].includes(value)) {
        return "input";
      }
      if ([1, 2, import_node_process9.default.stdout, import_node_process9.default.stderr].includes(value)) {
        return "output";
      }
    };
    DEFAULT_DIRECTION = "output";
  }
});

// node_modules/execa/lib/ipc/array.js
var normalizeIpcStdioArray;
var init_array2 = __esm({
  "node_modules/execa/lib/ipc/array.js"() {
    normalizeIpcStdioArray = (stdioArray, ipc) => ipc && !stdioArray.includes("ipc") ? [...stdioArray, "ipc"] : stdioArray;
  }
});

// node_modules/execa/lib/stdio/stdio-option.js
var normalizeStdioOption, getStdioArray, hasAlias, addDefaultValue2, normalizeStdioSync, isOutputPipeOnly;
var init_stdio_option = __esm({
  "node_modules/execa/lib/stdio/stdio-option.js"() {
    init_standard_stream();
    init_array2();
    init_values();
    normalizeStdioOption = ({ stdio, ipc, buffer, ...options }, verboseInfo, isSync) => {
      const stdioArray = getStdioArray(stdio, options).map((stdioOption, fdNumber) => addDefaultValue2(stdioOption, fdNumber));
      return isSync ? normalizeStdioSync(stdioArray, buffer, verboseInfo) : normalizeIpcStdioArray(stdioArray, ipc);
    };
    getStdioArray = (stdio, options) => {
      if (stdio === void 0) {
        return STANDARD_STREAMS_ALIASES.map((alias) => options[alias]);
      }
      if (hasAlias(options)) {
        throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${STANDARD_STREAMS_ALIASES.map((alias) => `\`${alias}\``).join(", ")}`);
      }
      if (typeof stdio === "string") {
        return [stdio, stdio, stdio];
      }
      if (!Array.isArray(stdio)) {
        throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
      }
      const length = Math.max(stdio.length, STANDARD_STREAMS_ALIASES.length);
      return Array.from({ length }, (_, fdNumber) => stdio[fdNumber]);
    };
    hasAlias = (options) => STANDARD_STREAMS_ALIASES.some((alias) => options[alias] !== void 0);
    addDefaultValue2 = (stdioOption, fdNumber) => {
      if (Array.isArray(stdioOption)) {
        return stdioOption.map((item) => addDefaultValue2(item, fdNumber));
      }
      if (stdioOption === null || stdioOption === void 0) {
        return fdNumber >= STANDARD_STREAMS_ALIASES.length ? "ignore" : "pipe";
      }
      return stdioOption;
    };
    normalizeStdioSync = (stdioArray, buffer, verboseInfo) => stdioArray.map((stdioOption, fdNumber) => !buffer[fdNumber] && fdNumber !== 0 && !isFullVerbose(verboseInfo, fdNumber) && isOutputPipeOnly(stdioOption) ? "ignore" : stdioOption);
    isOutputPipeOnly = (stdioOption) => stdioOption === "pipe" || Array.isArray(stdioOption) && stdioOption.every((item) => item === "pipe");
  }
});

// node_modules/execa/lib/stdio/native.js
var import_node_fs2, import_node_tty2, handleNativeStream, handleNativeStreamSync, getTargetFd, getTargetFdNumber, handleNativeStreamAsync, getStandardStream;
var init_native = __esm({
  "node_modules/execa/lib/stdio/native.js"() {
    import_node_fs2 = require("node:fs");
    import_node_tty2 = __toESM(require("node:tty"), 1);
    init_is_stream();
    init_standard_stream();
    init_uint_array();
    init_fd_options();
    handleNativeStream = ({ stdioItem, stdioItem: { type }, isStdioArray, fdNumber, direction, isSync }) => {
      if (!isStdioArray || type !== "native") {
        return stdioItem;
      }
      return isSync ? handleNativeStreamSync({ stdioItem, fdNumber, direction }) : handleNativeStreamAsync({ stdioItem, fdNumber });
    };
    handleNativeStreamSync = ({ stdioItem, stdioItem: { value, optionName }, fdNumber, direction }) => {
      const targetFd = getTargetFd({
        value,
        optionName,
        fdNumber,
        direction
      });
      if (targetFd !== void 0) {
        return targetFd;
      }
      if (isStream(value, { checkOpen: false })) {
        throw new TypeError(`The \`${optionName}: Stream\` option cannot both be an array and include a stream with synchronous methods.`);
      }
      return stdioItem;
    };
    getTargetFd = ({ value, optionName, fdNumber, direction }) => {
      const targetFdNumber = getTargetFdNumber(value, fdNumber);
      if (targetFdNumber === void 0) {
        return;
      }
      if (direction === "output") {
        return { type: "fileNumber", value: targetFdNumber, optionName };
      }
      if (import_node_tty2.default.isatty(targetFdNumber)) {
        throw new TypeError(`The \`${optionName}: ${serializeOptionValue(value)}\` option is invalid: it cannot be a TTY with synchronous methods.`);
      }
      return { type: "uint8Array", value: bufferToUint8Array((0, import_node_fs2.readFileSync)(targetFdNumber)), optionName };
    };
    getTargetFdNumber = (value, fdNumber) => {
      if (value === "inherit") {
        return fdNumber;
      }
      if (typeof value === "number") {
        return value;
      }
      const standardStreamIndex = STANDARD_STREAMS.indexOf(value);
      if (standardStreamIndex !== -1) {
        return standardStreamIndex;
      }
    };
    handleNativeStreamAsync = ({ stdioItem, stdioItem: { value, optionName }, fdNumber }) => {
      if (value === "inherit") {
        return { type: "nodeStream", value: getStandardStream(fdNumber, value, optionName), optionName };
      }
      if (typeof value === "number") {
        return { type: "nodeStream", value: getStandardStream(value, value, optionName), optionName };
      }
      if (isStream(value, { checkOpen: false })) {
        return { type: "nodeStream", value, optionName };
      }
      return stdioItem;
    };
    getStandardStream = (fdNumber, value, optionName) => {
      const standardStream = STANDARD_STREAMS[fdNumber];
      if (standardStream === void 0) {
        throw new TypeError(`The \`${optionName}: ${value}\` option is invalid: no such standard stream.`);
      }
      return standardStream;
    };
  }
});

// node_modules/execa/lib/stdio/input-option.js
var handleInputOptions, handleInputOption, getInputType, handleInputFileOption, getInputFileType;
var init_input_option = __esm({
  "node_modules/execa/lib/stdio/input-option.js"() {
    init_is_stream();
    init_uint_array();
    init_type();
    handleInputOptions = ({ input, inputFile }, fdNumber) => fdNumber === 0 ? [
      ...handleInputOption(input),
      ...handleInputFileOption(inputFile)
    ] : [];
    handleInputOption = (input) => input === void 0 ? [] : [{
      type: getInputType(input),
      value: input,
      optionName: "input"
    }];
    getInputType = (input) => {
      if (isReadableStream(input, { checkOpen: false })) {
        return "nodeStream";
      }
      if (typeof input === "string") {
        return "string";
      }
      if (isUint8Array(input)) {
        return "uint8Array";
      }
      throw new Error("The `input` option must be a string, a Uint8Array or a Node.js Readable stream.");
    };
    handleInputFileOption = (inputFile) => inputFile === void 0 ? [] : [{
      ...getInputFileType(inputFile),
      optionName: "inputFile"
    }];
    getInputFileType = (inputFile) => {
      if (isUrl(inputFile)) {
        return { type: "fileUrl", value: inputFile };
      }
      if (isFilePathString(inputFile)) {
        return { type: "filePath", value: { file: inputFile } };
      }
      throw new Error("The `inputFile` option must be a file path string or a file URL.");
    };
  }
});

// node_modules/execa/lib/stdio/duplicate.js
var filterDuplicates, getDuplicateStream, getOtherStdioItems, validateDuplicateStreamSync, getDuplicateStreamInstance, hasSameValue, validateDuplicateTransform, throwOnDuplicateStream;
var init_duplicate = __esm({
  "node_modules/execa/lib/stdio/duplicate.js"() {
    init_type();
    filterDuplicates = (stdioItems) => stdioItems.filter((stdioItemOne, indexOne) => stdioItems.every((stdioItemTwo, indexTwo) => stdioItemOne.value !== stdioItemTwo.value || indexOne >= indexTwo || stdioItemOne.type === "generator" || stdioItemOne.type === "asyncGenerator"));
    getDuplicateStream = ({ stdioItem: { type, value, optionName }, direction, fileDescriptors, isSync }) => {
      const otherStdioItems = getOtherStdioItems(fileDescriptors, type);
      if (otherStdioItems.length === 0) {
        return;
      }
      if (isSync) {
        validateDuplicateStreamSync({
          otherStdioItems,
          type,
          value,
          optionName,
          direction
        });
        return;
      }
      if (SPECIAL_DUPLICATE_TYPES.has(type)) {
        return getDuplicateStreamInstance({
          otherStdioItems,
          type,
          value,
          optionName,
          direction
        });
      }
      if (FORBID_DUPLICATE_TYPES.has(type)) {
        validateDuplicateTransform({
          otherStdioItems,
          type,
          value,
          optionName
        });
      }
    };
    getOtherStdioItems = (fileDescriptors, type) => fileDescriptors.flatMap(({ direction, stdioItems }) => stdioItems.filter((stdioItem) => stdioItem.type === type).map((stdioItem) => ({ ...stdioItem, direction })));
    validateDuplicateStreamSync = ({ otherStdioItems, type, value, optionName, direction }) => {
      if (SPECIAL_DUPLICATE_TYPES_SYNC.has(type)) {
        getDuplicateStreamInstance({
          otherStdioItems,
          type,
          value,
          optionName,
          direction
        });
      }
    };
    getDuplicateStreamInstance = ({ otherStdioItems, type, value, optionName, direction }) => {
      const duplicateStdioItems = otherStdioItems.filter((stdioItem) => hasSameValue(stdioItem, value));
      if (duplicateStdioItems.length === 0) {
        return;
      }
      const differentStdioItem = duplicateStdioItems.find((stdioItem) => stdioItem.direction !== direction);
      throwOnDuplicateStream(differentStdioItem, optionName, type);
      return direction === "output" ? duplicateStdioItems[0].stream : void 0;
    };
    hasSameValue = ({ type, value }, secondValue) => {
      if (type === "filePath") {
        return value.file === secondValue.file;
      }
      if (type === "fileUrl") {
        return value.href === secondValue.href;
      }
      return value === secondValue;
    };
    validateDuplicateTransform = ({ otherStdioItems, type, value, optionName }) => {
      const duplicateStdioItem = otherStdioItems.find(({ value: { transform } }) => transform === value.transform);
      throwOnDuplicateStream(duplicateStdioItem, optionName, type);
    };
    throwOnDuplicateStream = (stdioItem, optionName, type) => {
      if (stdioItem !== void 0) {
        throw new TypeError(`The \`${stdioItem.optionName}\` and \`${optionName}\` options must not target ${TYPE_TO_MESSAGE[type]} that is the same.`);
      }
    };
  }
});

// node_modules/execa/lib/stdio/handle.js
var handleStdio, getFileDescriptor, initializeStdioItems, initializeStdioItem, validateStdioArray, INVALID_STDIO_ARRAY_OPTIONS, validateStreams, validateFileStdio, validateFileObjectMode, getFinalFileDescriptors, getFinalFileDescriptor, addStreamProperties, cleanupCustomStreams, forwardStdio;
var init_handle = __esm({
  "node_modules/execa/lib/stdio/handle.js"() {
    init_standard_stream();
    init_normalize();
    init_object_mode();
    init_type();
    init_direction();
    init_stdio_option();
    init_native();
    init_input_option();
    init_duplicate();
    handleStdio = (addProperties3, options, verboseInfo, isSync) => {
      const stdio = normalizeStdioOption(options, verboseInfo, isSync);
      const initialFileDescriptors = stdio.map((stdioOption, fdNumber) => getFileDescriptor({
        stdioOption,
        fdNumber,
        options,
        isSync
      }));
      const fileDescriptors = getFinalFileDescriptors({
        initialFileDescriptors,
        addProperties: addProperties3,
        options,
        isSync
      });
      options.stdio = fileDescriptors.map(({ stdioItems }) => forwardStdio(stdioItems));
      return fileDescriptors;
    };
    getFileDescriptor = ({ stdioOption, fdNumber, options, isSync }) => {
      const optionName = getStreamName(fdNumber);
      const { stdioItems: initialStdioItems, isStdioArray } = initializeStdioItems({
        stdioOption,
        fdNumber,
        options,
        optionName
      });
      const direction = getStreamDirection(initialStdioItems, fdNumber, optionName);
      const stdioItems = initialStdioItems.map((stdioItem) => handleNativeStream({
        stdioItem,
        isStdioArray,
        fdNumber,
        direction,
        isSync
      }));
      const normalizedStdioItems = normalizeTransforms(stdioItems, optionName, direction, options);
      const objectMode = getFdObjectMode(normalizedStdioItems, direction);
      validateFileObjectMode(normalizedStdioItems, objectMode);
      return { direction, objectMode, stdioItems: normalizedStdioItems };
    };
    initializeStdioItems = ({ stdioOption, fdNumber, options, optionName }) => {
      const values = Array.isArray(stdioOption) ? stdioOption : [stdioOption];
      const initialStdioItems = [
        ...values.map((value) => initializeStdioItem(value, optionName)),
        ...handleInputOptions(options, fdNumber)
      ];
      const stdioItems = filterDuplicates(initialStdioItems);
      const isStdioArray = stdioItems.length > 1;
      validateStdioArray(stdioItems, isStdioArray, optionName);
      validateStreams(stdioItems);
      return { stdioItems, isStdioArray };
    };
    initializeStdioItem = (value, optionName) => ({
      type: getStdioItemType(value, optionName),
      value,
      optionName
    });
    validateStdioArray = (stdioItems, isStdioArray, optionName) => {
      if (stdioItems.length === 0) {
        throw new TypeError(`The \`${optionName}\` option must not be an empty array.`);
      }
      if (!isStdioArray) {
        return;
      }
      for (const { value, optionName: optionName2 } of stdioItems) {
        if (INVALID_STDIO_ARRAY_OPTIONS.has(value)) {
          throw new Error(`The \`${optionName2}\` option must not include \`${value}\`.`);
        }
      }
    };
    INVALID_STDIO_ARRAY_OPTIONS = /* @__PURE__ */ new Set(["ignore", "ipc"]);
    validateStreams = (stdioItems) => {
      for (const stdioItem of stdioItems) {
        validateFileStdio(stdioItem);
      }
    };
    validateFileStdio = ({ type, value, optionName }) => {
      if (isRegularUrl(value)) {
        throw new TypeError(`The \`${optionName}: URL\` option must use the \`file:\` scheme.
For example, you can use the \`pathToFileURL()\` method of the \`url\` core module.`);
      }
      if (isUnknownStdioString(type, value)) {
        throw new TypeError(`The \`${optionName}: { file: '...' }\` option must be used instead of \`${optionName}: '...'\`.`);
      }
    };
    validateFileObjectMode = (stdioItems, objectMode) => {
      if (!objectMode) {
        return;
      }
      const fileStdioItem = stdioItems.find(({ type }) => FILE_TYPES.has(type));
      if (fileStdioItem !== void 0) {
        throw new TypeError(`The \`${fileStdioItem.optionName}\` option cannot use both files and transforms in objectMode.`);
      }
    };
    getFinalFileDescriptors = ({ initialFileDescriptors, addProperties: addProperties3, options, isSync }) => {
      const fileDescriptors = [];
      try {
        for (const fileDescriptor of initialFileDescriptors) {
          fileDescriptors.push(getFinalFileDescriptor({
            fileDescriptor,
            fileDescriptors,
            addProperties: addProperties3,
            options,
            isSync
          }));
        }
        return fileDescriptors;
      } catch (error) {
        cleanupCustomStreams(fileDescriptors);
        throw error;
      }
    };
    getFinalFileDescriptor = ({
      fileDescriptor: { direction, objectMode, stdioItems },
      fileDescriptors,
      addProperties: addProperties3,
      options,
      isSync
    }) => {
      const finalStdioItems = stdioItems.map((stdioItem) => addStreamProperties({
        stdioItem,
        addProperties: addProperties3,
        direction,
        options,
        fileDescriptors,
        isSync
      }));
      return { direction, objectMode, stdioItems: finalStdioItems };
    };
    addStreamProperties = ({ stdioItem, addProperties: addProperties3, direction, options, fileDescriptors, isSync }) => {
      const duplicateStream = getDuplicateStream({
        stdioItem,
        direction,
        fileDescriptors,
        isSync
      });
      if (duplicateStream !== void 0) {
        return { ...stdioItem, stream: duplicateStream };
      }
      return {
        ...stdioItem,
        ...addProperties3[direction][stdioItem.type](stdioItem, options)
      };
    };
    cleanupCustomStreams = (fileDescriptors) => {
      for (const { stdioItems } of fileDescriptors) {
        for (const { stream } of stdioItems) {
          if (stream !== void 0 && !isStandardStream(stream)) {
            stream.destroy();
          }
        }
      }
    };
    forwardStdio = (stdioItems) => {
      if (stdioItems.length > 1) {
        return stdioItems.some(({ value: value2 }) => value2 === "overlapped") ? "overlapped" : "pipe";
      }
      const [{ type, value }] = stdioItems;
      return type === "native" ? value : "pipe";
    };
  }
});

// node_modules/execa/lib/stdio/handle-sync.js
var import_node_fs3, handleStdioSync, forbiddenIfSync, forbiddenNativeIfSync, throwInvalidSyncValue, addProperties, addPropertiesSync;
var init_handle_sync = __esm({
  "node_modules/execa/lib/stdio/handle-sync.js"() {
    import_node_fs3 = require("node:fs");
    init_uint_array();
    init_handle();
    init_type();
    handleStdioSync = (options, verboseInfo) => handleStdio(addPropertiesSync, options, verboseInfo, true);
    forbiddenIfSync = ({ type, optionName }) => {
      throwInvalidSyncValue(optionName, TYPE_TO_MESSAGE[type]);
    };
    forbiddenNativeIfSync = ({ optionName, value }) => {
      if (value === "ipc" || value === "overlapped") {
        throwInvalidSyncValue(optionName, `"${value}"`);
      }
      return {};
    };
    throwInvalidSyncValue = (optionName, value) => {
      throw new TypeError(`The \`${optionName}\` option cannot be ${value} with synchronous methods.`);
    };
    addProperties = {
      generator() {
      },
      asyncGenerator: forbiddenIfSync,
      webStream: forbiddenIfSync,
      nodeStream: forbiddenIfSync,
      webTransform: forbiddenIfSync,
      duplex: forbiddenIfSync,
      asyncIterable: forbiddenIfSync,
      native: forbiddenNativeIfSync
    };
    addPropertiesSync = {
      input: {
        ...addProperties,
        fileUrl: ({ value }) => ({ contents: [bufferToUint8Array((0, import_node_fs3.readFileSync)(value))] }),
        filePath: ({ value: { file } }) => ({ contents: [bufferToUint8Array((0, import_node_fs3.readFileSync)(file))] }),
        fileNumber: forbiddenIfSync,
        iterable: ({ value }) => ({ contents: [...value] }),
        string: ({ value }) => ({ contents: [value] }),
        uint8Array: ({ value }) => ({ contents: [value] })
      },
      output: {
        ...addProperties,
        fileUrl: ({ value }) => ({ path: value }),
        filePath: ({ value: { file, append } }) => ({ path: file, append }),
        fileNumber: ({ value }) => ({ path: value }),
        iterable: forbiddenIfSync,
        string: forbiddenIfSync,
        uint8Array: forbiddenIfSync
      }
    };
  }
});

// node_modules/execa/lib/io/strip-newline.js
var stripNewline, getStripFinalNewline;
var init_strip_newline = __esm({
  "node_modules/execa/lib/io/strip-newline.js"() {
    init_strip_final_newline();
    stripNewline = (value, { stripFinalNewline: stripFinalNewline2 }, fdNumber) => getStripFinalNewline(stripFinalNewline2, fdNumber) && value !== void 0 && !Array.isArray(value) ? stripFinalNewline(value) : value;
    getStripFinalNewline = (stripFinalNewline2, fdNumber) => fdNumber === "all" ? stripFinalNewline2[1] || stripFinalNewline2[2] : stripFinalNewline2[fdNumber];
  }
});

// node_modules/execa/lib/transform/split.js
var getSplitLinesGenerator, splitLinesSync, splitLinesItemSync, initializeSplitLines, splitGenerator, getNewlineLength, linesFinal, getAppendNewlineGenerator, appendNewlineGenerator, concatString, linesStringInfo, concatUint8Array, linesUint8ArrayInfo;
var init_split = __esm({
  "node_modules/execa/lib/transform/split.js"() {
    getSplitLinesGenerator = (binary, preserveNewlines, skipped, state) => binary || skipped ? void 0 : initializeSplitLines(preserveNewlines, state);
    splitLinesSync = (chunk, preserveNewlines, objectMode) => objectMode ? chunk.flatMap((item) => splitLinesItemSync(item, preserveNewlines)) : splitLinesItemSync(chunk, preserveNewlines);
    splitLinesItemSync = (chunk, preserveNewlines) => {
      const { transform, final } = initializeSplitLines(preserveNewlines, {});
      return [...transform(chunk), ...final()];
    };
    initializeSplitLines = (preserveNewlines, state) => {
      state.previousChunks = "";
      return {
        transform: splitGenerator.bind(void 0, state, preserveNewlines),
        final: linesFinal.bind(void 0, state)
      };
    };
    splitGenerator = function* (state, preserveNewlines, chunk) {
      if (typeof chunk !== "string") {
        yield chunk;
        return;
      }
      let { previousChunks } = state;
      let start = -1;
      for (let end = 0; end < chunk.length; end += 1) {
        if (chunk[end] === "\n") {
          const newlineLength = getNewlineLength(chunk, end, preserveNewlines, state);
          let line = chunk.slice(start + 1, end + 1 - newlineLength);
          if (previousChunks.length > 0) {
            line = concatString(previousChunks, line);
            previousChunks = "";
          }
          yield line;
          start = end;
        }
      }
      if (start !== chunk.length - 1) {
        previousChunks = concatString(previousChunks, chunk.slice(start + 1));
      }
      state.previousChunks = previousChunks;
    };
    getNewlineLength = (chunk, end, preserveNewlines, state) => {
      if (preserveNewlines) {
        return 0;
      }
      state.isWindowsNewline = end !== 0 && chunk[end - 1] === "\r";
      return state.isWindowsNewline ? 2 : 1;
    };
    linesFinal = function* ({ previousChunks }) {
      if (previousChunks.length > 0) {
        yield previousChunks;
      }
    };
    getAppendNewlineGenerator = ({ binary, preserveNewlines, readableObjectMode, state }) => binary || preserveNewlines || readableObjectMode ? void 0 : { transform: appendNewlineGenerator.bind(void 0, state) };
    appendNewlineGenerator = function* ({ isWindowsNewline = false }, chunk) {
      const { unixNewline, windowsNewline, LF: LF2, concatBytes } = typeof chunk === "string" ? linesStringInfo : linesUint8ArrayInfo;
      if (chunk.at(-1) === LF2) {
        yield chunk;
        return;
      }
      const newline = isWindowsNewline ? windowsNewline : unixNewline;
      yield concatBytes(chunk, newline);
    };
    concatString = (firstChunk, secondChunk) => `${firstChunk}${secondChunk}`;
    linesStringInfo = {
      windowsNewline: "\r\n",
      unixNewline: "\n",
      LF: "\n",
      concatBytes: concatString
    };
    concatUint8Array = (firstChunk, secondChunk) => {
      const chunk = new Uint8Array(firstChunk.length + secondChunk.length);
      chunk.set(firstChunk, 0);
      chunk.set(secondChunk, firstChunk.length);
      return chunk;
    };
    linesUint8ArrayInfo = {
      windowsNewline: new Uint8Array([13, 10]),
      unixNewline: new Uint8Array([10]),
      LF: 10,
      concatBytes: concatUint8Array
    };
  }
});

// node_modules/execa/lib/transform/validate.js
var import_node_buffer, getValidateTransformInput, validateStringTransformInput, getValidateTransformReturn, validateObjectTransformReturn, validateStringTransformReturn, validateEmptyReturn;
var init_validate = __esm({
  "node_modules/execa/lib/transform/validate.js"() {
    import_node_buffer = require("node:buffer");
    init_uint_array();
    getValidateTransformInput = (writableObjectMode, optionName) => writableObjectMode ? void 0 : validateStringTransformInput.bind(void 0, optionName);
    validateStringTransformInput = function* (optionName, chunk) {
      if (typeof chunk !== "string" && !isUint8Array(chunk) && !import_node_buffer.Buffer.isBuffer(chunk)) {
        throw new TypeError(`The \`${optionName}\` option's transform must use "objectMode: true" to receive as input: ${typeof chunk}.`);
      }
      yield chunk;
    };
    getValidateTransformReturn = (readableObjectMode, optionName) => readableObjectMode ? validateObjectTransformReturn.bind(void 0, optionName) : validateStringTransformReturn.bind(void 0, optionName);
    validateObjectTransformReturn = function* (optionName, chunk) {
      validateEmptyReturn(optionName, chunk);
      yield chunk;
    };
    validateStringTransformReturn = function* (optionName, chunk) {
      validateEmptyReturn(optionName, chunk);
      if (typeof chunk !== "string" && !isUint8Array(chunk)) {
        throw new TypeError(`The \`${optionName}\` option's function must yield a string or an Uint8Array, not ${typeof chunk}.`);
      }
      yield chunk;
    };
    validateEmptyReturn = (optionName, chunk) => {
      if (chunk === null || chunk === void 0) {
        throw new TypeError(`The \`${optionName}\` option's function must not call \`yield ${chunk}\`.
Instead, \`yield\` should either be called with a value, or not be called at all. For example:
  if (condition) { yield value; }`);
      }
    };
  }
});

// node_modules/execa/lib/transform/encoding-transform.js
var import_node_buffer2, import_node_string_decoder2, getEncodingTransformGenerator, encodingUint8ArrayGenerator, encodingStringGenerator, encodingStringFinal;
var init_encoding_transform = __esm({
  "node_modules/execa/lib/transform/encoding-transform.js"() {
    import_node_buffer2 = require("node:buffer");
    import_node_string_decoder2 = require("node:string_decoder");
    init_uint_array();
    getEncodingTransformGenerator = (binary, encoding, skipped) => {
      if (skipped) {
        return;
      }
      if (binary) {
        return { transform: encodingUint8ArrayGenerator.bind(void 0, new TextEncoder()) };
      }
      const stringDecoder = new import_node_string_decoder2.StringDecoder(encoding);
      return {
        transform: encodingStringGenerator.bind(void 0, stringDecoder),
        final: encodingStringFinal.bind(void 0, stringDecoder)
      };
    };
    encodingUint8ArrayGenerator = function* (textEncoder3, chunk) {
      if (import_node_buffer2.Buffer.isBuffer(chunk)) {
        yield bufferToUint8Array(chunk);
      } else if (typeof chunk === "string") {
        yield textEncoder3.encode(chunk);
      } else {
        yield chunk;
      }
    };
    encodingStringGenerator = function* (stringDecoder, chunk) {
      yield isUint8Array(chunk) ? stringDecoder.write(chunk) : chunk;
    };
    encodingStringFinal = function* (stringDecoder) {
      const lastChunk = stringDecoder.end();
      if (lastChunk !== "") {
        yield lastChunk;
      }
    };
  }
});

// node_modules/execa/lib/transform/run-async.js
var import_node_util7, pushChunks, transformChunk, finalChunks, generatorFinalChunks, destroyTransform, identityGenerator;
var init_run_async = __esm({
  "node_modules/execa/lib/transform/run-async.js"() {
    import_node_util7 = require("node:util");
    pushChunks = (0, import_node_util7.callbackify)(async (getChunks, state, getChunksArguments, transformStream) => {
      state.currentIterable = getChunks(...getChunksArguments);
      try {
        for await (const chunk of state.currentIterable) {
          transformStream.push(chunk);
        }
      } finally {
        delete state.currentIterable;
      }
    });
    transformChunk = async function* (chunk, generators, index) {
      if (index === generators.length) {
        yield chunk;
        return;
      }
      const { transform = identityGenerator } = generators[index];
      for await (const transformedChunk of transform(chunk)) {
        yield* transformChunk(transformedChunk, generators, index + 1);
      }
    };
    finalChunks = async function* (generators) {
      for (const [index, { final }] of Object.entries(generators)) {
        yield* generatorFinalChunks(final, Number(index), generators);
      }
    };
    generatorFinalChunks = async function* (final, index, generators) {
      if (final === void 0) {
        return;
      }
      for await (const finalChunk of final()) {
        yield* transformChunk(finalChunk, generators, index + 1);
      }
    };
    destroyTransform = (0, import_node_util7.callbackify)(async ({ currentIterable }, error) => {
      if (currentIterable !== void 0) {
        await (error ? currentIterable.throw(error) : currentIterable.return());
        return;
      }
      if (error) {
        throw error;
      }
    });
    identityGenerator = function* (chunk) {
      yield chunk;
    };
  }
});

// node_modules/execa/lib/transform/run-sync.js
var pushChunksSync, runTransformSync, transformChunkSync, finalChunksSync, generatorFinalChunksSync, identityGenerator2;
var init_run_sync = __esm({
  "node_modules/execa/lib/transform/run-sync.js"() {
    pushChunksSync = (getChunksSync, getChunksArguments, transformStream, done) => {
      try {
        for (const chunk of getChunksSync(...getChunksArguments)) {
          transformStream.push(chunk);
        }
        done();
      } catch (error) {
        done(error);
      }
    };
    runTransformSync = (generators, chunks) => [
      ...chunks.flatMap((chunk) => [...transformChunkSync(chunk, generators, 0)]),
      ...finalChunksSync(generators)
    ];
    transformChunkSync = function* (chunk, generators, index) {
      if (index === generators.length) {
        yield chunk;
        return;
      }
      const { transform = identityGenerator2 } = generators[index];
      for (const transformedChunk of transform(chunk)) {
        yield* transformChunkSync(transformedChunk, generators, index + 1);
      }
    };
    finalChunksSync = function* (generators) {
      for (const [index, { final }] of Object.entries(generators)) {
        yield* generatorFinalChunksSync(final, Number(index), generators);
      }
    };
    generatorFinalChunksSync = function* (final, index, generators) {
      if (final === void 0) {
        return;
      }
      for (const finalChunk of final()) {
        yield* transformChunkSync(finalChunk, generators, index + 1);
      }
    };
    identityGenerator2 = function* (chunk) {
      yield chunk;
    };
  }
});

// node_modules/execa/lib/transform/generator.js
var import_node_stream, generatorToStream, runGeneratorsSync, addInternalGenerators;
var init_generator = __esm({
  "node_modules/execa/lib/transform/generator.js"() {
    import_node_stream = require("node:stream");
    init_type();
    init_split();
    init_validate();
    init_encoding_transform();
    init_run_async();
    init_run_sync();
    generatorToStream = ({
      value,
      value: { transform, final, writableObjectMode, readableObjectMode },
      optionName
    }, { encoding }) => {
      const state = {};
      const generators = addInternalGenerators(value, encoding, optionName);
      const transformAsync = isAsyncGenerator(transform);
      const finalAsync = isAsyncGenerator(final);
      const transformMethod = transformAsync ? pushChunks.bind(void 0, transformChunk, state) : pushChunksSync.bind(void 0, transformChunkSync);
      const finalMethod = transformAsync || finalAsync ? pushChunks.bind(void 0, finalChunks, state) : pushChunksSync.bind(void 0, finalChunksSync);
      const destroyMethod = transformAsync || finalAsync ? destroyTransform.bind(void 0, state) : void 0;
      const stream = new import_node_stream.Transform({
        writableObjectMode,
        writableHighWaterMark: (0, import_node_stream.getDefaultHighWaterMark)(writableObjectMode),
        readableObjectMode,
        readableHighWaterMark: (0, import_node_stream.getDefaultHighWaterMark)(readableObjectMode),
        transform(chunk, encoding2, done) {
          transformMethod([chunk, generators, 0], this, done);
        },
        flush(done) {
          finalMethod([generators], this, done);
        },
        destroy: destroyMethod
      });
      return { stream };
    };
    runGeneratorsSync = (chunks, stdioItems, encoding, isInput) => {
      const generators = stdioItems.filter(({ type }) => type === "generator");
      const reversedGenerators = isInput ? generators.reverse() : generators;
      for (const { value, optionName } of reversedGenerators) {
        const generators2 = addInternalGenerators(value, encoding, optionName);
        chunks = runTransformSync(generators2, chunks);
      }
      return chunks;
    };
    addInternalGenerators = ({ transform, final, binary, writableObjectMode, readableObjectMode, preserveNewlines }, encoding, optionName) => {
      const state = {};
      return [
        { transform: getValidateTransformInput(writableObjectMode, optionName) },
        getEncodingTransformGenerator(binary, encoding, writableObjectMode),
        getSplitLinesGenerator(binary, preserveNewlines, writableObjectMode, state),
        { transform, final },
        { transform: getValidateTransformReturn(readableObjectMode, optionName) },
        getAppendNewlineGenerator({
          binary,
          preserveNewlines,
          readableObjectMode,
          state
        })
      ].filter(Boolean);
    };
  }
});

// node_modules/execa/lib/io/input-sync.js
var addInputOptionsSync, getInputFdNumbers, addInputOptionSync, applySingleInputGeneratorsSync, validateSerializable;
var init_input_sync = __esm({
  "node_modules/execa/lib/io/input-sync.js"() {
    init_generator();
    init_uint_array();
    init_type();
    addInputOptionsSync = (fileDescriptors, options) => {
      for (const fdNumber of getInputFdNumbers(fileDescriptors)) {
        addInputOptionSync(fileDescriptors, fdNumber, options);
      }
    };
    getInputFdNumbers = (fileDescriptors) => new Set(Object.entries(fileDescriptors).filter(([, { direction }]) => direction === "input").map(([fdNumber]) => Number(fdNumber)));
    addInputOptionSync = (fileDescriptors, fdNumber, options) => {
      const { stdioItems } = fileDescriptors[fdNumber];
      const allStdioItems = stdioItems.filter(({ contents }) => contents !== void 0);
      if (allStdioItems.length === 0) {
        return;
      }
      if (fdNumber !== 0) {
        const [{ type, optionName }] = allStdioItems;
        throw new TypeError(`Only the \`stdin\` option, not \`${optionName}\`, can be ${TYPE_TO_MESSAGE[type]} with synchronous methods.`);
      }
      const allContents = allStdioItems.map(({ contents }) => contents);
      const transformedContents = allContents.map((contents) => applySingleInputGeneratorsSync(contents, stdioItems));
      options.input = joinToUint8Array(transformedContents);
    };
    applySingleInputGeneratorsSync = (contents, stdioItems) => {
      const newContents = runGeneratorsSync(contents, stdioItems, "utf8", true);
      validateSerializable(newContents);
      return joinToUint8Array(newContents);
    };
    validateSerializable = (newContents) => {
      const invalidItem = newContents.find((item) => typeof item !== "string" && !isUint8Array(item));
      if (invalidItem !== void 0) {
        throw new TypeError(`The \`stdin\` option is invalid: when passing objects as input, a transform must be used to serialize them to strings or Uint8Arrays: ${invalidItem}.`);
      }
    };
  }
});

// node_modules/execa/lib/verbose/output.js
var shouldLogOutput, fdUsesVerbose, PIPED_STDIO_VALUES, logLines, logLinesSync, isPipingStream, logLine;
var init_output = __esm({
  "node_modules/execa/lib/verbose/output.js"() {
    init_encoding_option();
    init_type();
    init_log();
    init_values();
    shouldLogOutput = ({ stdioItems, encoding, verboseInfo, fdNumber }) => fdNumber !== "all" && isFullVerbose(verboseInfo, fdNumber) && !BINARY_ENCODINGS.has(encoding) && fdUsesVerbose(fdNumber) && (stdioItems.some(({ type, value }) => type === "native" && PIPED_STDIO_VALUES.has(value)) || stdioItems.every(({ type }) => TRANSFORM_TYPES.has(type)));
    fdUsesVerbose = (fdNumber) => fdNumber === 1 || fdNumber === 2;
    PIPED_STDIO_VALUES = /* @__PURE__ */ new Set(["pipe", "overlapped"]);
    logLines = async (linesIterable, stream, fdNumber, verboseInfo) => {
      for await (const line of linesIterable) {
        if (!isPipingStream(stream)) {
          logLine(line, fdNumber, verboseInfo);
        }
      }
    };
    logLinesSync = (linesArray, fdNumber, verboseInfo) => {
      for (const line of linesArray) {
        logLine(line, fdNumber, verboseInfo);
      }
    };
    isPipingStream = (stream) => stream._readableState.pipes.length > 0;
    logLine = (line, fdNumber, verboseInfo) => {
      const verboseMessage = serializeVerboseMessage(line);
      verboseLog({
        type: "output",
        verboseMessage,
        fdNumber,
        verboseInfo
      });
    };
  }
});

// node_modules/execa/lib/io/output-sync.js
var import_node_fs4, transformOutputSync, transformOutputResultSync, runOutputGeneratorsSync, serializeChunks, logOutputSync, writeToFiles;
var init_output_sync = __esm({
  "node_modules/execa/lib/io/output-sync.js"() {
    import_node_fs4 = require("node:fs");
    init_output();
    init_generator();
    init_split();
    init_uint_array();
    init_type();
    init_max_buffer();
    transformOutputSync = ({ fileDescriptors, syncResult: { output }, options, isMaxBuffer, verboseInfo }) => {
      if (output === null) {
        return { output: Array.from({ length: 3 }) };
      }
      const state = {};
      const outputFiles = /* @__PURE__ */ new Set([]);
      const transformedOutput = output.map((result, fdNumber) => transformOutputResultSync({
        result,
        fileDescriptors,
        fdNumber,
        state,
        outputFiles,
        isMaxBuffer,
        verboseInfo
      }, options));
      return { output: transformedOutput, ...state };
    };
    transformOutputResultSync = ({ result, fileDescriptors, fdNumber, state, outputFiles, isMaxBuffer, verboseInfo }, { buffer, encoding, lines, stripFinalNewline: stripFinalNewline2, maxBuffer }) => {
      if (result === null) {
        return;
      }
      const truncatedResult = truncateMaxBufferSync(result, isMaxBuffer, maxBuffer);
      const uint8ArrayResult = bufferToUint8Array(truncatedResult);
      const { stdioItems, objectMode } = fileDescriptors[fdNumber];
      const chunks = runOutputGeneratorsSync([uint8ArrayResult], stdioItems, encoding, state);
      const { serializedResult, finalResult = serializedResult } = serializeChunks({
        chunks,
        objectMode,
        encoding,
        lines,
        stripFinalNewline: stripFinalNewline2,
        fdNumber
      });
      logOutputSync({
        serializedResult,
        fdNumber,
        state,
        verboseInfo,
        encoding,
        stdioItems,
        objectMode
      });
      const returnedResult = buffer[fdNumber] ? finalResult : void 0;
      try {
        if (state.error === void 0) {
          writeToFiles(serializedResult, stdioItems, outputFiles);
        }
        return returnedResult;
      } catch (error) {
        state.error = error;
        return returnedResult;
      }
    };
    runOutputGeneratorsSync = (chunks, stdioItems, encoding, state) => {
      try {
        return runGeneratorsSync(chunks, stdioItems, encoding, false);
      } catch (error) {
        state.error = error;
        return chunks;
      }
    };
    serializeChunks = ({ chunks, objectMode, encoding, lines, stripFinalNewline: stripFinalNewline2, fdNumber }) => {
      if (objectMode) {
        return { serializedResult: chunks };
      }
      if (encoding === "buffer") {
        return { serializedResult: joinToUint8Array(chunks) };
      }
      const serializedResult = joinToString(chunks, encoding);
      if (lines[fdNumber]) {
        return { serializedResult, finalResult: splitLinesSync(serializedResult, !stripFinalNewline2[fdNumber], objectMode) };
      }
      return { serializedResult };
    };
    logOutputSync = ({ serializedResult, fdNumber, state, verboseInfo, encoding, stdioItems, objectMode }) => {
      if (!shouldLogOutput({
        stdioItems,
        encoding,
        verboseInfo,
        fdNumber
      })) {
        return;
      }
      const linesArray = splitLinesSync(serializedResult, false, objectMode);
      try {
        logLinesSync(linesArray, fdNumber, verboseInfo);
      } catch (error) {
        state.error ??= error;
      }
    };
    writeToFiles = (serializedResult, stdioItems, outputFiles) => {
      for (const { path: path6, append } of stdioItems.filter(({ type }) => FILE_TYPES.has(type))) {
        const pathString = typeof path6 === "string" ? path6 : path6.toString();
        if (append || outputFiles.has(pathString)) {
          (0, import_node_fs4.appendFileSync)(path6, serializedResult);
        } else {
          outputFiles.add(pathString);
          (0, import_node_fs4.writeFileSync)(path6, serializedResult);
        }
      }
    };
  }
});

// node_modules/execa/lib/resolve/all-sync.js
var getAllSync;
var init_all_sync = __esm({
  "node_modules/execa/lib/resolve/all-sync.js"() {
    init_uint_array();
    init_strip_newline();
    getAllSync = ([, stdout, stderr], options) => {
      if (!options.all) {
        return;
      }
      if (stdout === void 0) {
        return stderr;
      }
      if (stderr === void 0) {
        return stdout;
      }
      if (Array.isArray(stdout)) {
        return Array.isArray(stderr) ? [...stdout, ...stderr] : [...stdout, stripNewline(stderr, options, "all")];
      }
      if (Array.isArray(stderr)) {
        return [stripNewline(stdout, options, "all"), ...stderr];
      }
      if (isUint8Array(stdout) && isUint8Array(stderr)) {
        return concatUint8Arrays([stdout, stderr]);
      }
      return `${stdout}${stderr}`;
    };
  }
});

// node_modules/execa/lib/resolve/exit-async.js
var import_node_events7, waitForExit, waitForExitOrError, waitForSubprocessExit, waitForSuccessfulExit, isSubprocessErrorExit, isFailedExit;
var init_exit_async = __esm({
  "node_modules/execa/lib/resolve/exit-async.js"() {
    import_node_events7 = require("node:events");
    init_final_error();
    waitForExit = async (subprocess, context) => {
      const [exitCode, signal] = await waitForExitOrError(subprocess);
      context.isForcefullyTerminated ??= false;
      return [exitCode, signal];
    };
    waitForExitOrError = async (subprocess) => {
      const [spawnPayload, exitPayload] = await Promise.allSettled([
        (0, import_node_events7.once)(subprocess, "spawn"),
        (0, import_node_events7.once)(subprocess, "exit")
      ]);
      if (spawnPayload.status === "rejected") {
        return [];
      }
      return exitPayload.status === "rejected" ? waitForSubprocessExit(subprocess) : exitPayload.value;
    };
    waitForSubprocessExit = async (subprocess) => {
      try {
        return await (0, import_node_events7.once)(subprocess, "exit");
      } catch {
        return waitForSubprocessExit(subprocess);
      }
    };
    waitForSuccessfulExit = async (exitPromise) => {
      const [exitCode, signal] = await exitPromise;
      if (!isSubprocessErrorExit(exitCode, signal) && isFailedExit(exitCode, signal)) {
        throw new DiscardedError();
      }
      return [exitCode, signal];
    };
    isSubprocessErrorExit = (exitCode, signal) => exitCode === void 0 && signal === void 0;
    isFailedExit = (exitCode, signal) => exitCode !== 0 || signal !== null;
  }
});

// node_modules/execa/lib/resolve/exit-sync.js
var getExitResultSync, getResultError;
var init_exit_sync = __esm({
  "node_modules/execa/lib/resolve/exit-sync.js"() {
    init_final_error();
    init_max_buffer();
    init_exit_async();
    getExitResultSync = ({ error, status: exitCode, signal, output }, { maxBuffer }) => {
      const resultError = getResultError(error, exitCode, signal);
      const timedOut = resultError?.code === "ETIMEDOUT";
      const isMaxBuffer = isMaxBufferSync(resultError, output, maxBuffer);
      return {
        resultError,
        exitCode,
        signal,
        timedOut,
        isMaxBuffer
      };
    };
    getResultError = (error, exitCode, signal) => {
      if (error !== void 0) {
        return error;
      }
      return isFailedExit(exitCode, signal) ? new DiscardedError() : void 0;
    };
  }
});

// node_modules/execa/lib/methods/main-sync.js
var import_node_child_process3, execaCoreSync, handleSyncArguments, normalizeSyncOptions, validateSyncOptions, throwInvalidSyncOption, spawnSubprocessSync, runSubprocessSync, normalizeSpawnSyncOptions, getSyncResult;
var init_main_sync = __esm({
  "node_modules/execa/lib/methods/main-sync.js"() {
    import_node_child_process3 = require("node:child_process");
    init_command();
    init_options();
    init_shell();
    init_result();
    init_reject();
    init_handle_sync();
    init_strip_newline();
    init_input_sync();
    init_output_sync();
    init_max_buffer();
    init_all_sync();
    init_exit_sync();
    execaCoreSync = (rawFile, rawArguments, rawOptions) => {
      const { file, commandArguments, command, escapedCommand, startTime, verboseInfo, options, fileDescriptors } = handleSyncArguments(rawFile, rawArguments, rawOptions);
      const result = spawnSubprocessSync({
        file,
        commandArguments,
        options,
        command,
        escapedCommand,
        verboseInfo,
        fileDescriptors,
        startTime
      });
      return handleResult(result, verboseInfo, options);
    };
    handleSyncArguments = (rawFile, rawArguments, rawOptions) => {
      const { command, escapedCommand, startTime, verboseInfo } = handleCommand(rawFile, rawArguments, rawOptions);
      const syncOptions = normalizeSyncOptions(rawOptions);
      const { file, commandArguments, options } = normalizeOptions(rawFile, rawArguments, syncOptions);
      validateSyncOptions(options);
      const fileDescriptors = handleStdioSync(options, verboseInfo);
      return {
        file,
        commandArguments,
        command,
        escapedCommand,
        startTime,
        verboseInfo,
        options,
        fileDescriptors
      };
    };
    normalizeSyncOptions = (options) => options.node && !options.ipc ? { ...options, ipc: false } : options;
    validateSyncOptions = ({ ipc, ipcInput, detached, cancelSignal }) => {
      if (ipcInput) {
        throwInvalidSyncOption("ipcInput");
      }
      if (ipc) {
        throwInvalidSyncOption("ipc: true");
      }
      if (detached) {
        throwInvalidSyncOption("detached: true");
      }
      if (cancelSignal) {
        throwInvalidSyncOption("cancelSignal");
      }
    };
    throwInvalidSyncOption = (value) => {
      throw new TypeError(`The "${value}" option cannot be used with synchronous methods.`);
    };
    spawnSubprocessSync = ({ file, commandArguments, options, command, escapedCommand, verboseInfo, fileDescriptors, startTime }) => {
      const syncResult = runSubprocessSync({
        file,
        commandArguments,
        options,
        command,
        escapedCommand,
        fileDescriptors,
        startTime
      });
      if (syncResult.failed) {
        return syncResult;
      }
      const { resultError, exitCode, signal, timedOut, isMaxBuffer } = getExitResultSync(syncResult, options);
      const { output, error = resultError } = transformOutputSync({
        fileDescriptors,
        syncResult,
        options,
        isMaxBuffer,
        verboseInfo
      });
      const stdio = output.map((stdioOutput, fdNumber) => stripNewline(stdioOutput, options, fdNumber));
      const all = stripNewline(getAllSync(output, options), options, "all");
      return getSyncResult({
        error,
        exitCode,
        signal,
        timedOut,
        isMaxBuffer,
        stdio,
        all,
        options,
        command,
        escapedCommand,
        startTime
      });
    };
    runSubprocessSync = ({ file, commandArguments, options, command, escapedCommand, fileDescriptors, startTime }) => {
      try {
        addInputOptionsSync(fileDescriptors, options);
        const normalizedOptions = normalizeSpawnSyncOptions(options);
        return (0, import_node_child_process3.spawnSync)(...concatenateShell(file, commandArguments, normalizedOptions));
      } catch (error) {
        return makeEarlyError({
          error,
          command,
          escapedCommand,
          fileDescriptors,
          options,
          startTime,
          isSync: true
        });
      }
    };
    normalizeSpawnSyncOptions = ({ encoding, maxBuffer, ...options }) => ({ ...options, encoding: "buffer", maxBuffer: getMaxBufferSync(maxBuffer) });
    getSyncResult = ({ error, exitCode, signal, timedOut, isMaxBuffer, stdio, all, options, command, escapedCommand, startTime }) => error === void 0 ? makeSuccessResult({
      command,
      escapedCommand,
      stdio,
      all,
      ipcOutput: [],
      options,
      startTime
    }) : makeError({
      error,
      command,
      escapedCommand,
      timedOut,
      isCanceled: false,
      isGracefullyCanceled: false,
      isMaxBuffer,
      isForcefullyTerminated: false,
      exitCode,
      signal,
      stdio,
      all,
      ipcOutput: [],
      options,
      startTime,
      isSync: true
    });
  }
});

// node_modules/execa/lib/ipc/get-one.js
var import_node_events8, getOneMessage, getOneMessageAsync, getMessage, throwOnDisconnect2, throwOnStrictError;
var init_get_one = __esm({
  "node_modules/execa/lib/ipc/get-one.js"() {
    import_node_events8 = require("node:events");
    init_validation();
    init_forward();
    init_reference();
    getOneMessage = ({ anyProcess, channel, isSubprocess, ipc }, { reference = true, filter } = {}) => {
      validateIpcMethod({
        methodName: "getOneMessage",
        isSubprocess,
        ipc,
        isConnected: isConnected(anyProcess)
      });
      return getOneMessageAsync({
        anyProcess,
        channel,
        isSubprocess,
        filter,
        reference
      });
    };
    getOneMessageAsync = async ({ anyProcess, channel, isSubprocess, filter, reference }) => {
      addReference(channel, reference);
      const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
      const controller = new AbortController();
      try {
        return await Promise.race([
          getMessage(ipcEmitter, filter, controller),
          throwOnDisconnect2(ipcEmitter, isSubprocess, controller),
          throwOnStrictError(ipcEmitter, isSubprocess, controller)
        ]);
      } catch (error) {
        disconnect(anyProcess);
        throw error;
      } finally {
        controller.abort();
        removeReference(channel, reference);
      }
    };
    getMessage = async (ipcEmitter, filter, { signal }) => {
      if (filter === void 0) {
        const [message] = await (0, import_node_events8.once)(ipcEmitter, "message", { signal });
        return message;
      }
      for await (const [message] of (0, import_node_events8.on)(ipcEmitter, "message", { signal })) {
        if (filter(message)) {
          return message;
        }
      }
    };
    throwOnDisconnect2 = async (ipcEmitter, isSubprocess, { signal }) => {
      await (0, import_node_events8.once)(ipcEmitter, "disconnect", { signal });
      throwOnEarlyDisconnect(isSubprocess);
    };
    throwOnStrictError = async (ipcEmitter, isSubprocess, { signal }) => {
      const [error] = await (0, import_node_events8.once)(ipcEmitter, "strict:error", { signal });
      throw getStrictResponseError(error, isSubprocess);
    };
  }
});

// node_modules/execa/lib/ipc/get-each.js
var import_node_events9, getEachMessage, loopOnMessages, stopOnDisconnect, abortOnStrictError, iterateOnMessages, throwIfStrictError;
var init_get_each = __esm({
  "node_modules/execa/lib/ipc/get-each.js"() {
    import_node_events9 = require("node:events");
    init_validation();
    init_forward();
    init_reference();
    getEachMessage = ({ anyProcess, channel, isSubprocess, ipc }, { reference = true } = {}) => loopOnMessages({
      anyProcess,
      channel,
      isSubprocess,
      ipc,
      shouldAwait: !isSubprocess,
      reference
    });
    loopOnMessages = ({ anyProcess, channel, isSubprocess, ipc, shouldAwait, reference }) => {
      validateIpcMethod({
        methodName: "getEachMessage",
        isSubprocess,
        ipc,
        isConnected: isConnected(anyProcess)
      });
      addReference(channel, reference);
      const ipcEmitter = getIpcEmitter(anyProcess, channel, isSubprocess);
      const controller = new AbortController();
      const state = {};
      stopOnDisconnect(anyProcess, ipcEmitter, controller);
      abortOnStrictError({
        ipcEmitter,
        isSubprocess,
        controller,
        state
      });
      return iterateOnMessages({
        anyProcess,
        channel,
        ipcEmitter,
        isSubprocess,
        shouldAwait,
        controller,
        state,
        reference
      });
    };
    stopOnDisconnect = async (anyProcess, ipcEmitter, controller) => {
      try {
        await (0, import_node_events9.once)(ipcEmitter, "disconnect", { signal: controller.signal });
        controller.abort();
      } catch {
      }
    };
    abortOnStrictError = async ({ ipcEmitter, isSubprocess, controller, state }) => {
      try {
        const [error] = await (0, import_node_events9.once)(ipcEmitter, "strict:error", { signal: controller.signal });
        state.error = getStrictResponseError(error, isSubprocess);
        controller.abort();
      } catch {
      }
    };
    iterateOnMessages = async function* ({ anyProcess, channel, ipcEmitter, isSubprocess, shouldAwait, controller, state, reference }) {
      try {
        for await (const [message] of (0, import_node_events9.on)(ipcEmitter, "message", { signal: controller.signal })) {
          throwIfStrictError(state);
          yield message;
        }
      } catch {
        throwIfStrictError(state);
      } finally {
        controller.abort();
        removeReference(channel, reference);
        if (!isSubprocess) {
          disconnect(anyProcess);
        }
        if (shouldAwait) {
          await anyProcess;
        }
      }
    };
    throwIfStrictError = ({ error }) => {
      if (error) {
        throw error;
      }
    };
  }
});

// node_modules/execa/lib/ipc/methods.js
var import_node_process10, addIpcMethods, getIpcExport, getIpcMethods;
var init_methods = __esm({
  "node_modules/execa/lib/ipc/methods.js"() {
    import_node_process10 = __toESM(require("node:process"), 1);
    init_send();
    init_get_one();
    init_get_each();
    init_graceful();
    addIpcMethods = (subprocess, { ipc }) => {
      Object.assign(subprocess, getIpcMethods(subprocess, false, ipc));
    };
    getIpcExport = () => {
      const anyProcess = import_node_process10.default;
      const isSubprocess = true;
      const ipc = import_node_process10.default.channel !== void 0;
      return {
        ...getIpcMethods(anyProcess, isSubprocess, ipc),
        getCancelSignal: getCancelSignal.bind(void 0, {
          anyProcess,
          channel: anyProcess.channel,
          isSubprocess,
          ipc
        })
      };
    };
    getIpcMethods = (anyProcess, isSubprocess, ipc) => ({
      sendMessage: sendMessage.bind(void 0, {
        anyProcess,
        channel: anyProcess.channel,
        isSubprocess,
        ipc
      }),
      getOneMessage: getOneMessage.bind(void 0, {
        anyProcess,
        channel: anyProcess.channel,
        isSubprocess,
        ipc
      }),
      getEachMessage: getEachMessage.bind(void 0, {
        anyProcess,
        channel: anyProcess.channel,
        isSubprocess,
        ipc
      })
    });
  }
});

// node_modules/execa/lib/return/early-error.js
var import_node_child_process4, import_node_stream2, handleEarlyError, createDummyStreams, createDummyStream, readable, writable, duplex, handleDummyPromise;
var init_early_error = __esm({
  "node_modules/execa/lib/return/early-error.js"() {
    import_node_child_process4 = require("node:child_process");
    import_node_stream2 = require("node:stream");
    init_handle();
    init_result();
    init_reject();
    handleEarlyError = ({ error, command, escapedCommand, fileDescriptors, options, startTime, verboseInfo }) => {
      cleanupCustomStreams(fileDescriptors);
      const subprocess = new import_node_child_process4.ChildProcess();
      createDummyStreams(subprocess, fileDescriptors);
      Object.assign(subprocess, { readable, writable, duplex });
      const earlyError = makeEarlyError({
        error,
        command,
        escapedCommand,
        fileDescriptors,
        options,
        startTime,
        isSync: false
      });
      const promise = handleDummyPromise(earlyError, verboseInfo, options);
      return { subprocess, promise };
    };
    createDummyStreams = (subprocess, fileDescriptors) => {
      const stdin = createDummyStream();
      const stdout = createDummyStream();
      const stderr = createDummyStream();
      const extraStdio = Array.from({ length: fileDescriptors.length - 3 }, createDummyStream);
      const all = createDummyStream();
      const stdio = [stdin, stdout, stderr, ...extraStdio];
      Object.assign(subprocess, {
        stdin,
        stdout,
        stderr,
        all,
        stdio
      });
    };
    createDummyStream = () => {
      const stream = new import_node_stream2.PassThrough();
      stream.end();
      return stream;
    };
    readable = () => new import_node_stream2.Readable({ read() {
    } });
    writable = () => new import_node_stream2.Writable({ write() {
    } });
    duplex = () => new import_node_stream2.Duplex({ read() {
    }, write() {
    } });
    handleDummyPromise = async (error, verboseInfo, options) => handleResult(error, verboseInfo, options);
  }
});

// node_modules/execa/lib/stdio/handle-async.js
var import_node_fs5, import_node_buffer3, import_node_stream3, handleStdioAsync, forbiddenIfAsync, addProperties2, addPropertiesAsync;
var init_handle_async = __esm({
  "node_modules/execa/lib/stdio/handle-async.js"() {
    import_node_fs5 = require("node:fs");
    import_node_buffer3 = require("node:buffer");
    import_node_stream3 = require("node:stream");
    init_generator();
    init_handle();
    init_type();
    handleStdioAsync = (options, verboseInfo) => handleStdio(addPropertiesAsync, options, verboseInfo, false);
    forbiddenIfAsync = ({ type, optionName }) => {
      throw new TypeError(`The \`${optionName}\` option cannot be ${TYPE_TO_MESSAGE[type]}.`);
    };
    addProperties2 = {
      fileNumber: forbiddenIfAsync,
      generator: generatorToStream,
      asyncGenerator: generatorToStream,
      nodeStream: ({ value }) => ({ stream: value }),
      webTransform({ value: { transform, writableObjectMode, readableObjectMode } }) {
        const objectMode = writableObjectMode || readableObjectMode;
        const stream = import_node_stream3.Duplex.fromWeb(transform, { objectMode });
        return { stream };
      },
      duplex: ({ value: { transform } }) => ({ stream: transform }),
      native() {
      }
    };
    addPropertiesAsync = {
      input: {
        ...addProperties2,
        fileUrl: ({ value }) => ({ stream: (0, import_node_fs5.createReadStream)(value) }),
        filePath: ({ value: { file } }) => ({ stream: (0, import_node_fs5.createReadStream)(file) }),
        webStream: ({ value }) => ({ stream: import_node_stream3.Readable.fromWeb(value) }),
        iterable: ({ value }) => ({ stream: import_node_stream3.Readable.from(value) }),
        asyncIterable: ({ value }) => ({ stream: import_node_stream3.Readable.from(value) }),
        string: ({ value }) => ({ stream: import_node_stream3.Readable.from(value) }),
        uint8Array: ({ value }) => ({ stream: import_node_stream3.Readable.from(import_node_buffer3.Buffer.from(value)) })
      },
      output: {
        ...addProperties2,
        fileUrl: ({ value }) => ({ stream: (0, import_node_fs5.createWriteStream)(value) }),
        filePath: ({ value: { file, append } }) => ({ stream: (0, import_node_fs5.createWriteStream)(file, append ? { flags: "a" } : {}) }),
        webStream: ({ value }) => ({ stream: import_node_stream3.Writable.fromWeb(value) }),
        iterable: forbiddenIfAsync,
        asyncIterable: forbiddenIfAsync,
        string: forbiddenIfAsync,
        uint8Array: forbiddenIfAsync
      }
    };
  }
});

// node_modules/@sindresorhus/merge-streams/index.js
function mergeStreams(streams) {
  if (!Array.isArray(streams)) {
    throw new TypeError(`Expected an array, got \`${typeof streams}\`.`);
  }
  for (const stream of streams) {
    validateStream(stream);
  }
  const objectMode = streams.some(({ readableObjectMode }) => readableObjectMode);
  const highWaterMark = getHighWaterMark(streams, objectMode);
  const passThroughStream = new MergedStream({
    objectMode,
    writableHighWaterMark: highWaterMark,
    readableHighWaterMark: highWaterMark
  });
  for (const stream of streams) {
    passThroughStream.add(stream);
  }
  return passThroughStream;
}
var import_node_events10, import_node_stream4, import_promises6, getHighWaterMark, MergedStream, onMergedStreamFinished, onMergedStreamEnd, onInputStreamsUnpipe, validateStream, endWhenStreamsDone, afterMergedStreamFinished, onInputStreamEnd, onInputStreamUnpipe, endStream, errorOrAbortStream, isAbortError, abortStream, errorStream, noop2, updateMaxListeners, PASSTHROUGH_LISTENERS_COUNT, PASSTHROUGH_LISTENERS_PER_STREAM;
var init_merge_streams = __esm({
  "node_modules/@sindresorhus/merge-streams/index.js"() {
    import_node_events10 = require("node:events");
    import_node_stream4 = require("node:stream");
    import_promises6 = require("node:stream/promises");
    getHighWaterMark = (streams, objectMode) => {
      if (streams.length === 0) {
        return (0, import_node_stream4.getDefaultHighWaterMark)(objectMode);
      }
      const highWaterMarks = streams.filter(({ readableObjectMode }) => readableObjectMode === objectMode).map(({ readableHighWaterMark }) => readableHighWaterMark);
      return Math.max(...highWaterMarks);
    };
    MergedStream = class extends import_node_stream4.PassThrough {
      #streams = /* @__PURE__ */ new Set([]);
      #ended = /* @__PURE__ */ new Set([]);
      #aborted = /* @__PURE__ */ new Set([]);
      #onFinished;
      #unpipeEvent = Symbol("unpipe");
      #streamPromises = /* @__PURE__ */ new WeakMap();
      add(stream) {
        validateStream(stream);
        if (this.#streams.has(stream)) {
          return;
        }
        this.#streams.add(stream);
        this.#onFinished ??= onMergedStreamFinished(this, this.#streams, this.#unpipeEvent);
        const streamPromise = endWhenStreamsDone({
          passThroughStream: this,
          stream,
          streams: this.#streams,
          ended: this.#ended,
          aborted: this.#aborted,
          onFinished: this.#onFinished,
          unpipeEvent: this.#unpipeEvent
        });
        this.#streamPromises.set(stream, streamPromise);
        stream.pipe(this, { end: false });
      }
      async remove(stream) {
        validateStream(stream);
        if (!this.#streams.has(stream)) {
          return false;
        }
        const streamPromise = this.#streamPromises.get(stream);
        if (streamPromise === void 0) {
          return false;
        }
        this.#streamPromises.delete(stream);
        stream.unpipe(this);
        await streamPromise;
        return true;
      }
    };
    onMergedStreamFinished = async (passThroughStream, streams, unpipeEvent) => {
      updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_COUNT);
      const controller = new AbortController();
      try {
        await Promise.race([
          onMergedStreamEnd(passThroughStream, controller),
          onInputStreamsUnpipe(passThroughStream, streams, unpipeEvent, controller)
        ]);
      } finally {
        controller.abort();
        updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_COUNT);
      }
    };
    onMergedStreamEnd = async (passThroughStream, { signal }) => {
      try {
        await (0, import_promises6.finished)(passThroughStream, { signal, cleanup: true });
      } catch (error) {
        errorOrAbortStream(passThroughStream, error);
        throw error;
      }
    };
    onInputStreamsUnpipe = async (passThroughStream, streams, unpipeEvent, { signal }) => {
      for await (const [unpipedStream] of (0, import_node_events10.on)(passThroughStream, "unpipe", { signal })) {
        if (streams.has(unpipedStream)) {
          unpipedStream.emit(unpipeEvent);
        }
      }
    };
    validateStream = (stream) => {
      if (typeof stream?.pipe !== "function") {
        throw new TypeError(`Expected a readable stream, got: \`${typeof stream}\`.`);
      }
    };
    endWhenStreamsDone = async ({ passThroughStream, stream, streams, ended, aborted: aborted2, onFinished, unpipeEvent }) => {
      updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_PER_STREAM);
      const controller = new AbortController();
      try {
        await Promise.race([
          afterMergedStreamFinished(onFinished, stream, controller),
          onInputStreamEnd({
            passThroughStream,
            stream,
            streams,
            ended,
            aborted: aborted2,
            controller
          }),
          onInputStreamUnpipe({
            stream,
            streams,
            ended,
            aborted: aborted2,
            unpipeEvent,
            controller
          })
        ]);
      } finally {
        controller.abort();
        updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_PER_STREAM);
      }
      if (streams.size > 0 && streams.size === ended.size + aborted2.size) {
        if (ended.size === 0 && aborted2.size > 0) {
          abortStream(passThroughStream);
        } else {
          endStream(passThroughStream);
        }
      }
    };
    afterMergedStreamFinished = async (onFinished, stream, { signal }) => {
      try {
        await onFinished;
        if (!signal.aborted) {
          abortStream(stream);
        }
      } catch (error) {
        if (!signal.aborted) {
          errorOrAbortStream(stream, error);
        }
      }
    };
    onInputStreamEnd = async ({ passThroughStream, stream, streams, ended, aborted: aborted2, controller: { signal } }) => {
      try {
        await (0, import_promises6.finished)(stream, {
          signal,
          cleanup: true,
          readable: true,
          writable: false
        });
        if (streams.has(stream)) {
          ended.add(stream);
        }
      } catch (error) {
        if (signal.aborted || !streams.has(stream)) {
          return;
        }
        if (isAbortError(error)) {
          aborted2.add(stream);
        } else {
          errorStream(passThroughStream, error);
        }
      }
    };
    onInputStreamUnpipe = async ({ stream, streams, ended, aborted: aborted2, unpipeEvent, controller: { signal } }) => {
      await (0, import_node_events10.once)(stream, unpipeEvent, { signal });
      if (!stream.readable) {
        return (0, import_node_events10.once)(signal, "abort", { signal });
      }
      streams.delete(stream);
      ended.delete(stream);
      aborted2.delete(stream);
    };
    endStream = (stream) => {
      if (stream.writable) {
        stream.end();
      }
    };
    errorOrAbortStream = (stream, error) => {
      if (isAbortError(error)) {
        abortStream(stream);
      } else {
        errorStream(stream, error);
      }
    };
    isAbortError = (error) => error?.code === "ERR_STREAM_PREMATURE_CLOSE";
    abortStream = (stream) => {
      if (stream.readable || stream.writable) {
        stream.destroy();
      }
    };
    errorStream = (stream, error) => {
      if (!stream.destroyed) {
        stream.once("error", noop2);
        stream.destroy(error);
      }
    };
    noop2 = () => {
    };
    updateMaxListeners = (passThroughStream, increment2) => {
      const maxListeners = passThroughStream.getMaxListeners();
      if (maxListeners !== 0 && maxListeners !== Number.POSITIVE_INFINITY) {
        passThroughStream.setMaxListeners(maxListeners + increment2);
      }
    };
    PASSTHROUGH_LISTENERS_COUNT = 2;
    PASSTHROUGH_LISTENERS_PER_STREAM = 1;
  }
});

// node_modules/execa/lib/io/pipeline.js
var import_promises7, pipeStreams, onSourceFinish, endDestinationStream, onDestinationFinish, abortSourceStream;
var init_pipeline = __esm({
  "node_modules/execa/lib/io/pipeline.js"() {
    import_promises7 = require("node:stream/promises");
    init_standard_stream();
    pipeStreams = (source, destination) => {
      source.pipe(destination);
      onSourceFinish(source, destination);
      onDestinationFinish(source, destination);
    };
    onSourceFinish = async (source, destination) => {
      if (isStandardStream(source) || isStandardStream(destination)) {
        return;
      }
      try {
        await (0, import_promises7.finished)(source, { cleanup: true, readable: true, writable: false });
      } catch {
      }
      endDestinationStream(destination);
    };
    endDestinationStream = (destination) => {
      if (destination.writable) {
        destination.end();
      }
    };
    onDestinationFinish = async (source, destination) => {
      if (isStandardStream(source) || isStandardStream(destination)) {
        return;
      }
      try {
        await (0, import_promises7.finished)(destination, { cleanup: true, readable: false, writable: true });
      } catch {
      }
      abortSourceStream(source);
    };
    abortSourceStream = (source) => {
      if (source.readable) {
        source.destroy();
      }
    };
  }
});

// node_modules/execa/lib/io/output-async.js
var pipeOutputAsync, pipeTransform, SUBPROCESS_STREAM_PROPERTIES, pipeStdioItem, setStandardStreamMaxListeners, MAX_LISTENERS_INCREMENT;
var init_output_async = __esm({
  "node_modules/execa/lib/io/output-async.js"() {
    init_merge_streams();
    init_standard_stream();
    init_max_listeners();
    init_type();
    init_pipeline();
    pipeOutputAsync = (subprocess, fileDescriptors, controller) => {
      const pipeGroups = /* @__PURE__ */ new Map();
      for (const [fdNumber, { stdioItems, direction }] of Object.entries(fileDescriptors)) {
        for (const { stream } of stdioItems.filter(({ type }) => TRANSFORM_TYPES.has(type))) {
          pipeTransform(subprocess, stream, direction, fdNumber);
        }
        for (const { stream } of stdioItems.filter(({ type }) => !TRANSFORM_TYPES.has(type))) {
          pipeStdioItem({
            subprocess,
            stream,
            direction,
            fdNumber,
            pipeGroups,
            controller
          });
        }
      }
      for (const [outputStream, inputStreams] of pipeGroups.entries()) {
        const inputStream = inputStreams.length === 1 ? inputStreams[0] : mergeStreams(inputStreams);
        pipeStreams(inputStream, outputStream);
      }
    };
    pipeTransform = (subprocess, stream, direction, fdNumber) => {
      if (direction === "output") {
        pipeStreams(subprocess.stdio[fdNumber], stream);
      } else {
        pipeStreams(stream, subprocess.stdio[fdNumber]);
      }
      const streamProperty = SUBPROCESS_STREAM_PROPERTIES[fdNumber];
      if (streamProperty !== void 0) {
        subprocess[streamProperty] = stream;
      }
      subprocess.stdio[fdNumber] = stream;
    };
    SUBPROCESS_STREAM_PROPERTIES = ["stdin", "stdout", "stderr"];
    pipeStdioItem = ({ subprocess, stream, direction, fdNumber, pipeGroups, controller }) => {
      if (stream === void 0) {
        return;
      }
      setStandardStreamMaxListeners(stream, controller);
      const [inputStream, outputStream] = direction === "output" ? [stream, subprocess.stdio[fdNumber]] : [subprocess.stdio[fdNumber], stream];
      const outputStreams = pipeGroups.get(inputStream) ?? [];
      pipeGroups.set(inputStream, [...outputStreams, outputStream]);
    };
    setStandardStreamMaxListeners = (stream, { signal }) => {
      if (isStandardStream(stream)) {
        incrementMaxListeners(stream, MAX_LISTENERS_INCREMENT, signal);
      }
    };
    MAX_LISTENERS_INCREMENT = 2;
  }
});

// node_modules/signal-exit/dist/mjs/signals.js
var signals;
var init_signals2 = __esm({
  "node_modules/signal-exit/dist/mjs/signals.js"() {
    signals = [];
    signals.push("SIGHUP", "SIGINT", "SIGTERM");
    if (process.platform !== "win32") {
      signals.push(
        "SIGALRM",
        "SIGABRT",
        "SIGVTALRM",
        "SIGXCPU",
        "SIGXFSZ",
        "SIGUSR2",
        "SIGTRAP",
        "SIGSYS",
        "SIGQUIT",
        "SIGIOT"
        // should detect profiler and enable/disable accordingly.
        // see #21
        // 'SIGPROF'
      );
    }
    if (process.platform === "linux") {
      signals.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
    }
  }
});

// node_modules/signal-exit/dist/mjs/index.js
var processOk, kExitEmitter, global2, ObjectDefineProperty, Emitter, SignalExitBase, signalExitWrap, SignalExitFallback, SignalExit, process9, onExit, load, unload;
var init_mjs = __esm({
  "node_modules/signal-exit/dist/mjs/index.js"() {
    init_signals2();
    processOk = (process10) => !!process10 && typeof process10 === "object" && typeof process10.removeListener === "function" && typeof process10.emit === "function" && typeof process10.reallyExit === "function" && typeof process10.listeners === "function" && typeof process10.kill === "function" && typeof process10.pid === "number" && typeof process10.on === "function";
    kExitEmitter = Symbol.for("signal-exit emitter");
    global2 = globalThis;
    ObjectDefineProperty = Object.defineProperty.bind(Object);
    Emitter = class {
      emitted = {
        afterExit: false,
        exit: false
      };
      listeners = {
        afterExit: [],
        exit: []
      };
      count = 0;
      id = Math.random();
      constructor() {
        if (global2[kExitEmitter]) {
          return global2[kExitEmitter];
        }
        ObjectDefineProperty(global2, kExitEmitter, {
          value: this,
          writable: false,
          enumerable: false,
          configurable: false
        });
      }
      on(ev, fn) {
        this.listeners[ev].push(fn);
      }
      removeListener(ev, fn) {
        const list = this.listeners[ev];
        const i2 = list.indexOf(fn);
        if (i2 === -1) {
          return;
        }
        if (i2 === 0 && list.length === 1) {
          list.length = 0;
        } else {
          list.splice(i2, 1);
        }
      }
      emit(ev, code, signal) {
        if (this.emitted[ev]) {
          return false;
        }
        this.emitted[ev] = true;
        let ret = false;
        for (const fn of this.listeners[ev]) {
          ret = fn(code, signal) === true || ret;
        }
        if (ev === "exit") {
          ret = this.emit("afterExit", code, signal) || ret;
        }
        return ret;
      }
    };
    SignalExitBase = class {
    };
    signalExitWrap = (handler) => {
      return {
        onExit(cb, opts) {
          return handler.onExit(cb, opts);
        },
        load() {
          return handler.load();
        },
        unload() {
          return handler.unload();
        }
      };
    };
    SignalExitFallback = class extends SignalExitBase {
      onExit() {
        return () => {
        };
      }
      load() {
      }
      unload() {
      }
    };
    SignalExit = class extends SignalExitBase {
      // "SIGHUP" throws an `ENOSYS` error on Windows,
      // so use a supported signal instead
      /* c8 ignore start */
      #hupSig = process9.platform === "win32" ? "SIGINT" : "SIGHUP";
      /* c8 ignore stop */
      #emitter = new Emitter();
      #process;
      #originalProcessEmit;
      #originalProcessReallyExit;
      #sigListeners = {};
      #loaded = false;
      constructor(process10) {
        super();
        this.#process = process10;
        this.#sigListeners = {};
        for (const sig of signals) {
          this.#sigListeners[sig] = () => {
            const listeners = this.#process.listeners(sig);
            let { count: count2 } = this.#emitter;
            const p = process10;
            if (typeof p.__signal_exit_emitter__ === "object" && typeof p.__signal_exit_emitter__.count === "number") {
              count2 += p.__signal_exit_emitter__.count;
            }
            if (listeners.length === count2) {
              this.unload();
              const ret = this.#emitter.emit("exit", null, sig);
              const s = sig === "SIGHUP" ? this.#hupSig : sig;
              if (!ret)
                process10.kill(process10.pid, s);
            }
          };
        }
        this.#originalProcessReallyExit = process10.reallyExit;
        this.#originalProcessEmit = process10.emit;
      }
      onExit(cb, opts) {
        if (!processOk(this.#process)) {
          return () => {
          };
        }
        if (this.#loaded === false) {
          this.load();
        }
        const ev = opts?.alwaysLast ? "afterExit" : "exit";
        this.#emitter.on(ev, cb);
        return () => {
          this.#emitter.removeListener(ev, cb);
          if (this.#emitter.listeners["exit"].length === 0 && this.#emitter.listeners["afterExit"].length === 0) {
            this.unload();
          }
        };
      }
      load() {
        if (this.#loaded) {
          return;
        }
        this.#loaded = true;
        this.#emitter.count += 1;
        for (const sig of signals) {
          try {
            const fn = this.#sigListeners[sig];
            if (fn)
              this.#process.on(sig, fn);
          } catch (_) {
          }
        }
        this.#process.emit = (ev, ...a2) => {
          return this.#processEmit(ev, ...a2);
        };
        this.#process.reallyExit = (code) => {
          return this.#processReallyExit(code);
        };
      }
      unload() {
        if (!this.#loaded) {
          return;
        }
        this.#loaded = false;
        signals.forEach((sig) => {
          const listener = this.#sigListeners[sig];
          if (!listener) {
            throw new Error("Listener not defined for signal: " + sig);
          }
          try {
            this.#process.removeListener(sig, listener);
          } catch (_) {
          }
        });
        this.#process.emit = this.#originalProcessEmit;
        this.#process.reallyExit = this.#originalProcessReallyExit;
        this.#emitter.count -= 1;
      }
      #processReallyExit(code) {
        if (!processOk(this.#process)) {
          return 0;
        }
        this.#process.exitCode = code || 0;
        this.#emitter.emit("exit", this.#process.exitCode, null);
        return this.#originalProcessReallyExit.call(this.#process, this.#process.exitCode);
      }
      #processEmit(ev, ...args) {
        const og = this.#originalProcessEmit;
        if (ev === "exit" && processOk(this.#process)) {
          if (typeof args[0] === "number") {
            this.#process.exitCode = args[0];
          }
          const ret = og.call(this.#process, ev, ...args);
          this.#emitter.emit("exit", this.#process.exitCode, null);
          return ret;
        } else {
          return og.call(this.#process, ev, ...args);
        }
      }
    };
    process9 = globalThis.process;
    ({
      onExit: (
        /**
         * Called when the process is exiting, whether via signal, explicit
         * exit, or running out of stuff to do.
         *
         * If the global process object is not suitable for instrumentation,
         * then this will be a no-op.
         *
         * Returns a function that may be used to unload signal-exit.
         */
        onExit
      ),
      load: (
        /**
         * Load the listeners.  Likely you never need to call this, unless
         * doing a rather deep integration with signal-exit functionality.
         * Mostly exposed for the benefit of testing.
         *
         * @internal
         */
        load
      ),
      unload: (
        /**
         * Unload the listeners.  Likely you never need to call this, unless
         * doing a rather deep integration with signal-exit functionality.
         * Mostly exposed for the benefit of testing.
         *
         * @internal
         */
        unload
      )
    } = signalExitWrap(processOk(process9) ? new SignalExit(process9) : new SignalExitFallback()));
  }
});

// node_modules/execa/lib/terminate/cleanup.js
var import_node_events11, cleanupOnExit;
var init_cleanup = __esm({
  "node_modules/execa/lib/terminate/cleanup.js"() {
    import_node_events11 = require("node:events");
    init_mjs();
    cleanupOnExit = (subprocess, { cleanup, detached }, { signal }) => {
      if (!cleanup || detached) {
        return;
      }
      const removeExitHandler = onExit(() => {
        subprocess.kill();
      });
      (0, import_node_events11.addAbortListener)(signal, () => {
        removeExitHandler();
      });
    };
  }
});

// node_modules/execa/lib/pipe/pipe-arguments.js
var normalizePipeArguments, getDestinationStream, getDestination, mapDestinationArguments, getSourceStream;
var init_pipe_arguments = __esm({
  "node_modules/execa/lib/pipe/pipe-arguments.js"() {
    init_parameters();
    init_duration();
    init_fd_options();
    init_file_url();
    normalizePipeArguments = ({ source, sourcePromise, boundOptions, createNested }, ...pipeArguments) => {
      const startTime = getStartTime();
      const {
        destination,
        destinationStream,
        destinationError,
        from,
        unpipeSignal
      } = getDestinationStream(boundOptions, createNested, pipeArguments);
      const { sourceStream, sourceError } = getSourceStream(source, from);
      const { options: sourceOptions, fileDescriptors } = SUBPROCESS_OPTIONS.get(source);
      return {
        sourcePromise,
        sourceStream,
        sourceOptions,
        sourceError,
        destination,
        destinationStream,
        destinationError,
        unpipeSignal,
        fileDescriptors,
        startTime
      };
    };
    getDestinationStream = (boundOptions, createNested, pipeArguments) => {
      try {
        const {
          destination,
          pipeOptions: { from, to, unpipeSignal } = {}
        } = getDestination(boundOptions, createNested, ...pipeArguments);
        const destinationStream = getToStream(destination, to);
        return {
          destination,
          destinationStream,
          from,
          unpipeSignal
        };
      } catch (error) {
        return { destinationError: error };
      }
    };
    getDestination = (boundOptions, createNested, firstArgument, ...pipeArguments) => {
      if (Array.isArray(firstArgument)) {
        const destination = createNested(mapDestinationArguments, boundOptions)(firstArgument, ...pipeArguments);
        return { destination, pipeOptions: boundOptions };
      }
      if (typeof firstArgument === "string" || firstArgument instanceof URL || isDenoExecPath(firstArgument)) {
        if (Object.keys(boundOptions).length > 0) {
          throw new TypeError('Please use .pipe("file", ..., options) or .pipe(execa("file", ..., options)) instead of .pipe(options)("file", ...).');
        }
        const [rawFile, rawArguments, rawOptions] = normalizeParameters(firstArgument, ...pipeArguments);
        const destination = createNested(mapDestinationArguments)(rawFile, rawArguments, rawOptions);
        return { destination, pipeOptions: rawOptions };
      }
      if (SUBPROCESS_OPTIONS.has(firstArgument)) {
        if (Object.keys(boundOptions).length > 0) {
          throw new TypeError("Please use .pipe(options)`command` or .pipe($(options)`command`) instead of .pipe(options)($`command`).");
        }
        return { destination: firstArgument, pipeOptions: pipeArguments[0] };
      }
      throw new TypeError(`The first argument must be a template string, an options object, or an Execa subprocess: ${firstArgument}`);
    };
    mapDestinationArguments = ({ options }) => ({ options: { ...options, stdin: "pipe", piped: true } });
    getSourceStream = (source, from) => {
      try {
        const sourceStream = getFromStream(source, from);
        return { sourceStream };
      } catch (error) {
        return { sourceError: error };
      }
    };
  }
});

// node_modules/execa/lib/pipe/throw.js
var handlePipeArgumentsError, getPipeArgumentsError, createNonCommandError, PIPE_COMMAND_MESSAGE;
var init_throw = __esm({
  "node_modules/execa/lib/pipe/throw.js"() {
    init_result();
    init_pipeline();
    handlePipeArgumentsError = ({
      sourceStream,
      sourceError,
      destinationStream,
      destinationError,
      fileDescriptors,
      sourceOptions,
      startTime
    }) => {
      const error = getPipeArgumentsError({
        sourceStream,
        sourceError,
        destinationStream,
        destinationError
      });
      if (error !== void 0) {
        throw createNonCommandError({
          error,
          fileDescriptors,
          sourceOptions,
          startTime
        });
      }
    };
    getPipeArgumentsError = ({ sourceStream, sourceError, destinationStream, destinationError }) => {
      if (sourceError !== void 0 && destinationError !== void 0) {
        return destinationError;
      }
      if (destinationError !== void 0) {
        abortSourceStream(sourceStream);
        return destinationError;
      }
      if (sourceError !== void 0) {
        endDestinationStream(destinationStream);
        return sourceError;
      }
    };
    createNonCommandError = ({ error, fileDescriptors, sourceOptions, startTime }) => makeEarlyError({
      error,
      command: PIPE_COMMAND_MESSAGE,
      escapedCommand: PIPE_COMMAND_MESSAGE,
      fileDescriptors,
      options: sourceOptions,
      startTime,
      isSync: false
    });
    PIPE_COMMAND_MESSAGE = "source.pipe(destination)";
  }
});

// node_modules/execa/lib/pipe/sequence.js
var waitForBothSubprocesses;
var init_sequence = __esm({
  "node_modules/execa/lib/pipe/sequence.js"() {
    waitForBothSubprocesses = async (subprocessPromises) => {
      const [
        { status: sourceStatus, reason: sourceReason, value: sourceResult = sourceReason },
        { status: destinationStatus, reason: destinationReason, value: destinationResult = destinationReason }
      ] = await subprocessPromises;
      if (!destinationResult.pipedFrom.includes(sourceResult)) {
        destinationResult.pipedFrom.push(sourceResult);
      }
      if (destinationStatus === "rejected") {
        throw destinationResult;
      }
      if (sourceStatus === "rejected") {
        throw sourceResult;
      }
      return destinationResult;
    };
  }
});

// node_modules/execa/lib/pipe/streaming.js
var import_promises8, pipeSubprocessStream, pipeFirstSubprocessStream, pipeMoreSubprocessStream, cleanupMergedStreamsMap, MERGED_STREAMS, SOURCE_LISTENERS_PER_PIPE, DESTINATION_LISTENERS_PER_PIPE;
var init_streaming = __esm({
  "node_modules/execa/lib/pipe/streaming.js"() {
    import_promises8 = require("node:stream/promises");
    init_merge_streams();
    init_max_listeners();
    init_pipeline();
    pipeSubprocessStream = (sourceStream, destinationStream, maxListenersController) => {
      const mergedStream = MERGED_STREAMS.has(destinationStream) ? pipeMoreSubprocessStream(sourceStream, destinationStream) : pipeFirstSubprocessStream(sourceStream, destinationStream);
      incrementMaxListeners(sourceStream, SOURCE_LISTENERS_PER_PIPE, maxListenersController.signal);
      incrementMaxListeners(destinationStream, DESTINATION_LISTENERS_PER_PIPE, maxListenersController.signal);
      cleanupMergedStreamsMap(destinationStream);
      return mergedStream;
    };
    pipeFirstSubprocessStream = (sourceStream, destinationStream) => {
      const mergedStream = mergeStreams([sourceStream]);
      pipeStreams(mergedStream, destinationStream);
      MERGED_STREAMS.set(destinationStream, mergedStream);
      return mergedStream;
    };
    pipeMoreSubprocessStream = (sourceStream, destinationStream) => {
      const mergedStream = MERGED_STREAMS.get(destinationStream);
      mergedStream.add(sourceStream);
      return mergedStream;
    };
    cleanupMergedStreamsMap = async (destinationStream) => {
      try {
        await (0, import_promises8.finished)(destinationStream, { cleanup: true, readable: false, writable: true });
      } catch {
      }
      MERGED_STREAMS.delete(destinationStream);
    };
    MERGED_STREAMS = /* @__PURE__ */ new WeakMap();
    SOURCE_LISTENERS_PER_PIPE = 2;
    DESTINATION_LISTENERS_PER_PIPE = 1;
  }
});

// node_modules/execa/lib/pipe/abort.js
var import_node_util8, unpipeOnAbort, unpipeOnSignalAbort;
var init_abort = __esm({
  "node_modules/execa/lib/pipe/abort.js"() {
    import_node_util8 = require("node:util");
    init_throw();
    unpipeOnAbort = (unpipeSignal, unpipeContext) => unpipeSignal === void 0 ? [] : [unpipeOnSignalAbort(unpipeSignal, unpipeContext)];
    unpipeOnSignalAbort = async (unpipeSignal, { sourceStream, mergedStream, fileDescriptors, sourceOptions, startTime }) => {
      await (0, import_node_util8.aborted)(unpipeSignal, sourceStream);
      await mergedStream.remove(sourceStream);
      const error = new Error("Pipe canceled by `unpipeSignal` option.");
      throw createNonCommandError({
        error,
        fileDescriptors,
        sourceOptions,
        startTime
      });
    };
  }
});

// node_modules/execa/lib/pipe/setup.js
var pipeToSubprocess, handlePipePromise, getSubprocessPromises;
var init_setup = __esm({
  "node_modules/execa/lib/pipe/setup.js"() {
    init_is_plain_obj();
    init_pipe_arguments();
    init_throw();
    init_sequence();
    init_streaming();
    init_abort();
    pipeToSubprocess = (sourceInfo, ...pipeArguments) => {
      if (isPlainObject(pipeArguments[0])) {
        return pipeToSubprocess.bind(void 0, {
          ...sourceInfo,
          boundOptions: { ...sourceInfo.boundOptions, ...pipeArguments[0] }
        });
      }
      const { destination, ...normalizedInfo } = normalizePipeArguments(sourceInfo, ...pipeArguments);
      const promise = handlePipePromise({ ...normalizedInfo, destination });
      promise.pipe = pipeToSubprocess.bind(void 0, {
        ...sourceInfo,
        source: destination,
        sourcePromise: promise,
        boundOptions: {}
      });
      return promise;
    };
    handlePipePromise = async ({
      sourcePromise,
      sourceStream,
      sourceOptions,
      sourceError,
      destination,
      destinationStream,
      destinationError,
      unpipeSignal,
      fileDescriptors,
      startTime
    }) => {
      const subprocessPromises = getSubprocessPromises(sourcePromise, destination);
      handlePipeArgumentsError({
        sourceStream,
        sourceError,
        destinationStream,
        destinationError,
        fileDescriptors,
        sourceOptions,
        startTime
      });
      const maxListenersController = new AbortController();
      try {
        const mergedStream = pipeSubprocessStream(sourceStream, destinationStream, maxListenersController);
        return await Promise.race([
          waitForBothSubprocesses(subprocessPromises),
          ...unpipeOnAbort(unpipeSignal, {
            sourceStream,
            mergedStream,
            sourceOptions,
            fileDescriptors,
            startTime
          })
        ]);
      } finally {
        maxListenersController.abort();
      }
    };
    getSubprocessPromises = (sourcePromise, destination) => Promise.allSettled([sourcePromise, destination]);
  }
});

// node_modules/execa/lib/io/iterate.js
var import_node_events12, import_node_stream5, iterateOnSubprocessStream, stopReadingOnExit, iterateForResult, stopReadingOnStreamEnd, iterateOnStream, DEFAULT_OBJECT_HIGH_WATER_MARK, HIGH_WATER_MARK, iterateOnData, getGenerators;
var init_iterate = __esm({
  "node_modules/execa/lib/io/iterate.js"() {
    import_node_events12 = require("node:events");
    import_node_stream5 = require("node:stream");
    init_encoding_transform();
    init_split();
    init_run_sync();
    iterateOnSubprocessStream = ({ subprocessStdout, subprocess, binary, shouldEncode, encoding, preserveNewlines }) => {
      const controller = new AbortController();
      stopReadingOnExit(subprocess, controller);
      return iterateOnStream({
        stream: subprocessStdout,
        controller,
        binary,
        shouldEncode: !subprocessStdout.readableObjectMode && shouldEncode,
        encoding,
        shouldSplit: !subprocessStdout.readableObjectMode,
        preserveNewlines
      });
    };
    stopReadingOnExit = async (subprocess, controller) => {
      try {
        await subprocess;
      } catch {
      } finally {
        controller.abort();
      }
    };
    iterateForResult = ({ stream, onStreamEnd, lines, encoding, stripFinalNewline: stripFinalNewline2, allMixed }) => {
      const controller = new AbortController();
      stopReadingOnStreamEnd(onStreamEnd, controller, stream);
      const objectMode = stream.readableObjectMode && !allMixed;
      return iterateOnStream({
        stream,
        controller,
        binary: encoding === "buffer",
        shouldEncode: !objectMode,
        encoding,
        shouldSplit: !objectMode && lines,
        preserveNewlines: !stripFinalNewline2
      });
    };
    stopReadingOnStreamEnd = async (onStreamEnd, controller, stream) => {
      try {
        await onStreamEnd;
      } catch {
        stream.destroy();
      } finally {
        controller.abort();
      }
    };
    iterateOnStream = ({ stream, controller, binary, shouldEncode, encoding, shouldSplit, preserveNewlines }) => {
      const onStdoutChunk = (0, import_node_events12.on)(stream, "data", {
        signal: controller.signal,
        highWaterMark: HIGH_WATER_MARK,
        // Backward compatibility with older name for this option
        // See https://github.com/nodejs/node/pull/52080#discussion_r1525227861
        // @todo Remove after removing support for Node 21
        highWatermark: HIGH_WATER_MARK
      });
      return iterateOnData({
        onStdoutChunk,
        controller,
        binary,
        shouldEncode,
        encoding,
        shouldSplit,
        preserveNewlines
      });
    };
    DEFAULT_OBJECT_HIGH_WATER_MARK = (0, import_node_stream5.getDefaultHighWaterMark)(true);
    HIGH_WATER_MARK = DEFAULT_OBJECT_HIGH_WATER_MARK;
    iterateOnData = async function* ({ onStdoutChunk, controller, binary, shouldEncode, encoding, shouldSplit, preserveNewlines }) {
      const generators = getGenerators({
        binary,
        shouldEncode,
        encoding,
        shouldSplit,
        preserveNewlines
      });
      try {
        for await (const [chunk] of onStdoutChunk) {
          yield* transformChunkSync(chunk, generators, 0);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          throw error;
        }
      } finally {
        yield* finalChunksSync(generators);
      }
    };
    getGenerators = ({ binary, shouldEncode, encoding, shouldSplit, preserveNewlines }) => [
      getEncodingTransformGenerator(binary, encoding, !shouldEncode),
      getSplitLinesGenerator(binary, preserveNewlines, !shouldSplit, {})
    ].filter(Boolean);
  }
});

// node_modules/execa/lib/io/contents.js
var import_promises9, getStreamOutput, logOutputAsync, resumeStream, getStreamContents2, getBufferedData, handleBufferedData;
var init_contents2 = __esm({
  "node_modules/execa/lib/io/contents.js"() {
    import_promises9 = require("node:timers/promises");
    init_source();
    init_uint_array();
    init_output();
    init_iterate();
    init_max_buffer();
    init_strip_newline();
    getStreamOutput = async ({ stream, onStreamEnd, fdNumber, encoding, buffer, maxBuffer, lines, allMixed, stripFinalNewline: stripFinalNewline2, verboseInfo, streamInfo }) => {
      const logPromise = logOutputAsync({
        stream,
        onStreamEnd,
        fdNumber,
        encoding,
        allMixed,
        verboseInfo,
        streamInfo
      });
      if (!buffer) {
        await Promise.all([resumeStream(stream), logPromise]);
        return;
      }
      const stripFinalNewlineValue = getStripFinalNewline(stripFinalNewline2, fdNumber);
      const iterable = iterateForResult({
        stream,
        onStreamEnd,
        lines,
        encoding,
        stripFinalNewline: stripFinalNewlineValue,
        allMixed
      });
      const [output] = await Promise.all([
        getStreamContents2({
          stream,
          iterable,
          fdNumber,
          encoding,
          maxBuffer,
          lines
        }),
        logPromise
      ]);
      return output;
    };
    logOutputAsync = async ({ stream, onStreamEnd, fdNumber, encoding, allMixed, verboseInfo, streamInfo: { fileDescriptors } }) => {
      if (!shouldLogOutput({
        stdioItems: fileDescriptors[fdNumber]?.stdioItems,
        encoding,
        verboseInfo,
        fdNumber
      })) {
        return;
      }
      const linesIterable = iterateForResult({
        stream,
        onStreamEnd,
        lines: true,
        encoding,
        stripFinalNewline: true,
        allMixed
      });
      await logLines(linesIterable, stream, fdNumber, verboseInfo);
    };
    resumeStream = async (stream) => {
      await (0, import_promises9.setImmediate)();
      if (stream.readableFlowing === null) {
        stream.resume();
      }
    };
    getStreamContents2 = async ({ stream, stream: { readableObjectMode }, iterable, fdNumber, encoding, maxBuffer, lines }) => {
      try {
        if (readableObjectMode || lines) {
          return await getStreamAsArray(iterable, { maxBuffer });
        }
        if (encoding === "buffer") {
          return new Uint8Array(await getStreamAsArrayBuffer(iterable, { maxBuffer }));
        }
        return await getStreamAsString(iterable, { maxBuffer });
      } catch (error) {
        return handleBufferedData(handleMaxBuffer({
          error,
          stream,
          readableObjectMode,
          lines,
          encoding,
          fdNumber
        }));
      }
    };
    getBufferedData = async (streamPromise) => {
      try {
        return await streamPromise;
      } catch (error) {
        return handleBufferedData(error);
      }
    };
    handleBufferedData = ({ bufferedData }) => isArrayBuffer(bufferedData) ? new Uint8Array(bufferedData) : bufferedData;
  }
});

// node_modules/execa/lib/resolve/wait-stream.js
var import_promises10, waitForStream, handleStdinDestroy, spyOnStdinDestroy, setStdinCleanedUp, handleStreamError, shouldIgnoreStreamError, isInputFileDescriptor, isStreamAbort, isStreamEpipe;
var init_wait_stream = __esm({
  "node_modules/execa/lib/resolve/wait-stream.js"() {
    import_promises10 = require("node:stream/promises");
    waitForStream = async (stream, fdNumber, streamInfo, { isSameDirection, stopOnExit = false } = {}) => {
      const state = handleStdinDestroy(stream, streamInfo);
      const abortController = new AbortController();
      try {
        await Promise.race([
          ...stopOnExit ? [streamInfo.exitPromise] : [],
          (0, import_promises10.finished)(stream, { cleanup: true, signal: abortController.signal })
        ]);
      } catch (error) {
        if (!state.stdinCleanedUp) {
          handleStreamError(error, fdNumber, streamInfo, isSameDirection);
        }
      } finally {
        abortController.abort();
      }
    };
    handleStdinDestroy = (stream, { originalStreams: [originalStdin], subprocess }) => {
      const state = { stdinCleanedUp: false };
      if (stream === originalStdin) {
        spyOnStdinDestroy(stream, subprocess, state);
      }
      return state;
    };
    spyOnStdinDestroy = (subprocessStdin, subprocess, state) => {
      const { _destroy } = subprocessStdin;
      subprocessStdin._destroy = (...destroyArguments) => {
        setStdinCleanedUp(subprocess, state);
        _destroy.call(subprocessStdin, ...destroyArguments);
      };
    };
    setStdinCleanedUp = ({ exitCode, signalCode }, state) => {
      if (exitCode !== null || signalCode !== null) {
        state.stdinCleanedUp = true;
      }
    };
    handleStreamError = (error, fdNumber, streamInfo, isSameDirection) => {
      if (!shouldIgnoreStreamError(error, fdNumber, streamInfo, isSameDirection)) {
        throw error;
      }
    };
    shouldIgnoreStreamError = (error, fdNumber, streamInfo, isSameDirection = true) => {
      if (streamInfo.propagating) {
        return isStreamEpipe(error) || isStreamAbort(error);
      }
      streamInfo.propagating = true;
      return isInputFileDescriptor(streamInfo, fdNumber) === isSameDirection ? isStreamEpipe(error) : isStreamAbort(error);
    };
    isInputFileDescriptor = ({ fileDescriptors }, fdNumber) => fdNumber !== "all" && fileDescriptors[fdNumber].direction === "input";
    isStreamAbort = (error) => error?.code === "ERR_STREAM_PREMATURE_CLOSE";
    isStreamEpipe = (error) => error?.code === "EPIPE";
  }
});

// node_modules/execa/lib/resolve/stdio.js
var waitForStdioStreams, waitForSubprocessStream;
var init_stdio = __esm({
  "node_modules/execa/lib/resolve/stdio.js"() {
    init_contents2();
    init_wait_stream();
    waitForStdioStreams = ({ subprocess, encoding, buffer, maxBuffer, lines, stripFinalNewline: stripFinalNewline2, verboseInfo, streamInfo }) => subprocess.stdio.map((stream, fdNumber) => waitForSubprocessStream({
      stream,
      fdNumber,
      encoding,
      buffer: buffer[fdNumber],
      maxBuffer: maxBuffer[fdNumber],
      lines: lines[fdNumber],
      allMixed: false,
      stripFinalNewline: stripFinalNewline2,
      verboseInfo,
      streamInfo
    }));
    waitForSubprocessStream = async ({ stream, fdNumber, encoding, buffer, maxBuffer, lines, allMixed, stripFinalNewline: stripFinalNewline2, verboseInfo, streamInfo }) => {
      if (!stream) {
        return;
      }
      const onStreamEnd = waitForStream(stream, fdNumber, streamInfo);
      if (isInputFileDescriptor(streamInfo, fdNumber)) {
        await onStreamEnd;
        return;
      }
      const [output] = await Promise.all([
        getStreamOutput({
          stream,
          onStreamEnd,
          fdNumber,
          encoding,
          buffer,
          maxBuffer,
          lines,
          allMixed,
          stripFinalNewline: stripFinalNewline2,
          verboseInfo,
          streamInfo
        }),
        onStreamEnd
      ]);
      return output;
    };
  }
});

// node_modules/execa/lib/resolve/all-async.js
var makeAllStream, waitForAllStream, getAllStream, getAllMixed;
var init_all_async = __esm({
  "node_modules/execa/lib/resolve/all-async.js"() {
    init_merge_streams();
    init_stdio();
    makeAllStream = ({ stdout, stderr }, { all }) => all && (stdout || stderr) ? mergeStreams([stdout, stderr].filter(Boolean)) : void 0;
    waitForAllStream = ({ subprocess, encoding, buffer, maxBuffer, lines, stripFinalNewline: stripFinalNewline2, verboseInfo, streamInfo }) => waitForSubprocessStream({
      ...getAllStream(subprocess, buffer),
      fdNumber: "all",
      encoding,
      maxBuffer: maxBuffer[1] + maxBuffer[2],
      lines: lines[1] || lines[2],
      allMixed: getAllMixed(subprocess),
      stripFinalNewline: stripFinalNewline2,
      verboseInfo,
      streamInfo
    });
    getAllStream = ({ stdout, stderr, all }, [, bufferStdout, bufferStderr]) => {
      const buffer = bufferStdout || bufferStderr;
      if (!buffer) {
        return { stream: all, buffer };
      }
      if (!bufferStdout) {
        return { stream: stderr, buffer };
      }
      if (!bufferStderr) {
        return { stream: stdout, buffer };
      }
      return { stream: all, buffer };
    };
    getAllMixed = ({ all, stdout, stderr }) => all && stdout && stderr && stdout.readableObjectMode !== stderr.readableObjectMode;
  }
});

// node_modules/execa/lib/verbose/ipc.js
var shouldLogIpc, logIpcOutput;
var init_ipc = __esm({
  "node_modules/execa/lib/verbose/ipc.js"() {
    init_log();
    init_values();
    shouldLogIpc = (verboseInfo) => isFullVerbose(verboseInfo, "ipc");
    logIpcOutput = (message, verboseInfo) => {
      const verboseMessage = serializeVerboseMessage(message);
      verboseLog({
        type: "ipc",
        verboseMessage,
        fdNumber: "ipc",
        verboseInfo
      });
    };
  }
});

// node_modules/execa/lib/ipc/buffer-messages.js
var waitForIpcOutput, getBufferedIpcOutput;
var init_buffer_messages = __esm({
  "node_modules/execa/lib/ipc/buffer-messages.js"() {
    init_max_buffer();
    init_ipc();
    init_specific();
    init_get_each();
    waitForIpcOutput = async ({
      subprocess,
      buffer: bufferArray,
      maxBuffer: maxBufferArray,
      ipc,
      ipcOutput,
      verboseInfo
    }) => {
      if (!ipc) {
        return ipcOutput;
      }
      const isVerbose2 = shouldLogIpc(verboseInfo);
      const buffer = getFdSpecificValue(bufferArray, "ipc");
      const maxBuffer = getFdSpecificValue(maxBufferArray, "ipc");
      for await (const message of loopOnMessages({
        anyProcess: subprocess,
        channel: subprocess.channel,
        isSubprocess: false,
        ipc,
        shouldAwait: false,
        reference: true
      })) {
        if (buffer) {
          checkIpcMaxBuffer(subprocess, ipcOutput, maxBuffer);
          ipcOutput.push(message);
        }
        if (isVerbose2) {
          logIpcOutput(message, verboseInfo);
        }
      }
      return ipcOutput;
    };
    getBufferedIpcOutput = async (ipcOutputPromise, ipcOutput) => {
      await Promise.allSettled([ipcOutputPromise]);
      return ipcOutput;
    };
  }
});

// node_modules/execa/lib/resolve/wait-subprocess.js
var import_node_events13, waitForSubprocessResult, waitForOriginalStreams, waitForCustomStreamsEnd, throwOnSubprocessError;
var init_wait_subprocess = __esm({
  "node_modules/execa/lib/resolve/wait-subprocess.js"() {
    import_node_events13 = require("node:events");
    init_is_stream();
    init_timeout();
    init_cancel();
    init_graceful2();
    init_standard_stream();
    init_type();
    init_contents2();
    init_buffer_messages();
    init_ipc_input();
    init_all_async();
    init_stdio();
    init_exit_async();
    init_wait_stream();
    waitForSubprocessResult = async ({
      subprocess,
      options: {
        encoding,
        buffer,
        maxBuffer,
        lines,
        timeoutDuration: timeout,
        cancelSignal,
        gracefulCancel,
        forceKillAfterDelay,
        stripFinalNewline: stripFinalNewline2,
        ipc,
        ipcInput
      },
      context,
      verboseInfo,
      fileDescriptors,
      originalStreams,
      onInternalError,
      controller
    }) => {
      const exitPromise = waitForExit(subprocess, context);
      const streamInfo = {
        originalStreams,
        fileDescriptors,
        subprocess,
        exitPromise,
        propagating: false
      };
      const stdioPromises = waitForStdioStreams({
        subprocess,
        encoding,
        buffer,
        maxBuffer,
        lines,
        stripFinalNewline: stripFinalNewline2,
        verboseInfo,
        streamInfo
      });
      const allPromise = waitForAllStream({
        subprocess,
        encoding,
        buffer,
        maxBuffer,
        lines,
        stripFinalNewline: stripFinalNewline2,
        verboseInfo,
        streamInfo
      });
      const ipcOutput = [];
      const ipcOutputPromise = waitForIpcOutput({
        subprocess,
        buffer,
        maxBuffer,
        ipc,
        ipcOutput,
        verboseInfo
      });
      const originalPromises = waitForOriginalStreams(originalStreams, subprocess, streamInfo);
      const customStreamsEndPromises = waitForCustomStreamsEnd(fileDescriptors, streamInfo);
      try {
        return await Promise.race([
          Promise.all([
            {},
            waitForSuccessfulExit(exitPromise),
            Promise.all(stdioPromises),
            allPromise,
            ipcOutputPromise,
            sendIpcInput(subprocess, ipcInput),
            ...originalPromises,
            ...customStreamsEndPromises
          ]),
          onInternalError,
          throwOnSubprocessError(subprocess, controller),
          ...throwOnTimeout(subprocess, timeout, context, controller),
          ...throwOnCancel({
            subprocess,
            cancelSignal,
            gracefulCancel,
            context,
            controller
          }),
          ...throwOnGracefulCancel({
            subprocess,
            cancelSignal,
            gracefulCancel,
            forceKillAfterDelay,
            context,
            controller
          })
        ]);
      } catch (error) {
        context.terminationReason ??= "other";
        return Promise.all([
          { error },
          exitPromise,
          Promise.all(stdioPromises.map((stdioPromise) => getBufferedData(stdioPromise))),
          getBufferedData(allPromise),
          getBufferedIpcOutput(ipcOutputPromise, ipcOutput),
          Promise.allSettled(originalPromises),
          Promise.allSettled(customStreamsEndPromises)
        ]);
      }
    };
    waitForOriginalStreams = (originalStreams, subprocess, streamInfo) => originalStreams.map((stream, fdNumber) => stream === subprocess.stdio[fdNumber] ? void 0 : waitForStream(stream, fdNumber, streamInfo));
    waitForCustomStreamsEnd = (fileDescriptors, streamInfo) => fileDescriptors.flatMap(({ stdioItems }, fdNumber) => stdioItems.filter(({ value, stream = value }) => isStream(stream, { checkOpen: false }) && !isStandardStream(stream)).map(({ type, value, stream = value }) => waitForStream(stream, fdNumber, streamInfo, {
      isSameDirection: TRANSFORM_TYPES.has(type),
      stopOnExit: type === "native"
    })));
    throwOnSubprocessError = async (subprocess, { signal }) => {
      const [error] = await (0, import_node_events13.once)(subprocess, "error", { signal });
      throw error;
    };
  }
});

// node_modules/execa/lib/convert/concurrent.js
var initializeConcurrentStreams, addConcurrentStream, waitForConcurrentStreams;
var init_concurrent = __esm({
  "node_modules/execa/lib/convert/concurrent.js"() {
    init_deferred();
    initializeConcurrentStreams = () => ({
      readableDestroy: /* @__PURE__ */ new WeakMap(),
      writableFinal: /* @__PURE__ */ new WeakMap(),
      writableDestroy: /* @__PURE__ */ new WeakMap()
    });
    addConcurrentStream = (concurrentStreams, stream, waitName) => {
      const weakMap = concurrentStreams[waitName];
      if (!weakMap.has(stream)) {
        weakMap.set(stream, []);
      }
      const promises = weakMap.get(stream);
      const promise = createDeferred();
      promises.push(promise);
      const resolve = promise.resolve.bind(promise);
      return { resolve, promises };
    };
    waitForConcurrentStreams = async ({ resolve, promises }, subprocess) => {
      resolve();
      const [isSubprocessExit] = await Promise.race([
        Promise.allSettled([true, subprocess]),
        Promise.all([false, ...promises])
      ]);
      return !isSubprocessExit;
    };
  }
});

// node_modules/execa/lib/convert/shared.js
var import_promises11, safeWaitForSubprocessStdin, safeWaitForSubprocessStdout, waitForSubprocessStdin, waitForSubprocessStdout, waitForSubprocess, destroyOtherStream;
var init_shared = __esm({
  "node_modules/execa/lib/convert/shared.js"() {
    import_promises11 = require("node:stream/promises");
    init_wait_stream();
    safeWaitForSubprocessStdin = async (subprocessStdin) => {
      if (subprocessStdin === void 0) {
        return;
      }
      try {
        await waitForSubprocessStdin(subprocessStdin);
      } catch {
      }
    };
    safeWaitForSubprocessStdout = async (subprocessStdout) => {
      if (subprocessStdout === void 0) {
        return;
      }
      try {
        await waitForSubprocessStdout(subprocessStdout);
      } catch {
      }
    };
    waitForSubprocessStdin = async (subprocessStdin) => {
      await (0, import_promises11.finished)(subprocessStdin, { cleanup: true, readable: false, writable: true });
    };
    waitForSubprocessStdout = async (subprocessStdout) => {
      await (0, import_promises11.finished)(subprocessStdout, { cleanup: true, readable: true, writable: false });
    };
    waitForSubprocess = async (subprocess, error) => {
      await subprocess;
      if (error) {
        throw error;
      }
    };
    destroyOtherStream = (stream, isOpen, error) => {
      if (error && !isStreamAbort(error)) {
        stream.destroy(error);
      } else if (isOpen) {
        stream.destroy();
      }
    };
  }
});

// node_modules/execa/lib/convert/readable.js
var import_node_stream6, import_node_util9, createReadable, getSubprocessStdout, getReadableOptions, getReadableMethods, onRead, onStdoutFinished, onReadableDestroy, destroyOtherReadable;
var init_readable = __esm({
  "node_modules/execa/lib/convert/readable.js"() {
    import_node_stream6 = require("node:stream");
    import_node_util9 = require("node:util");
    init_encoding_option();
    init_fd_options();
    init_iterate();
    init_deferred();
    init_concurrent();
    init_shared();
    createReadable = ({ subprocess, concurrentStreams, encoding }, { from, binary: binaryOption = true, preserveNewlines = true } = {}) => {
      const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
      const { subprocessStdout, waitReadableDestroy } = getSubprocessStdout(subprocess, from, concurrentStreams);
      const { readableEncoding, readableObjectMode, readableHighWaterMark } = getReadableOptions(subprocessStdout, binary);
      const { read, onStdoutDataDone } = getReadableMethods({
        subprocessStdout,
        subprocess,
        binary,
        encoding,
        preserveNewlines
      });
      const readable2 = new import_node_stream6.Readable({
        read,
        destroy: (0, import_node_util9.callbackify)(onReadableDestroy.bind(void 0, { subprocessStdout, subprocess, waitReadableDestroy })),
        highWaterMark: readableHighWaterMark,
        objectMode: readableObjectMode,
        encoding: readableEncoding
      });
      onStdoutFinished({
        subprocessStdout,
        onStdoutDataDone,
        readable: readable2,
        subprocess
      });
      return readable2;
    };
    getSubprocessStdout = (subprocess, from, concurrentStreams) => {
      const subprocessStdout = getFromStream(subprocess, from);
      const waitReadableDestroy = addConcurrentStream(concurrentStreams, subprocessStdout, "readableDestroy");
      return { subprocessStdout, waitReadableDestroy };
    };
    getReadableOptions = ({ readableEncoding, readableObjectMode, readableHighWaterMark }, binary) => binary ? { readableEncoding, readableObjectMode, readableHighWaterMark } : { readableEncoding, readableObjectMode: true, readableHighWaterMark: DEFAULT_OBJECT_HIGH_WATER_MARK };
    getReadableMethods = ({ subprocessStdout, subprocess, binary, encoding, preserveNewlines }) => {
      const onStdoutDataDone = createDeferred();
      const onStdoutData = iterateOnSubprocessStream({
        subprocessStdout,
        subprocess,
        binary,
        shouldEncode: !binary,
        encoding,
        preserveNewlines
      });
      return {
        read() {
          onRead(this, onStdoutData, onStdoutDataDone);
        },
        onStdoutDataDone
      };
    };
    onRead = async (readable2, onStdoutData, onStdoutDataDone) => {
      try {
        const { value, done } = await onStdoutData.next();
        if (done) {
          onStdoutDataDone.resolve();
        } else {
          readable2.push(value);
        }
      } catch {
      }
    };
    onStdoutFinished = async ({ subprocessStdout, onStdoutDataDone, readable: readable2, subprocess, subprocessStdin }) => {
      try {
        await waitForSubprocessStdout(subprocessStdout);
        await subprocess;
        await safeWaitForSubprocessStdin(subprocessStdin);
        await onStdoutDataDone;
        if (readable2.readable) {
          readable2.push(null);
        }
      } catch (error) {
        await safeWaitForSubprocessStdin(subprocessStdin);
        destroyOtherReadable(readable2, error);
      }
    };
    onReadableDestroy = async ({ subprocessStdout, subprocess, waitReadableDestroy }, error) => {
      if (await waitForConcurrentStreams(waitReadableDestroy, subprocess)) {
        destroyOtherReadable(subprocessStdout, error);
        await waitForSubprocess(subprocess, error);
      }
    };
    destroyOtherReadable = (stream, error) => {
      destroyOtherStream(stream, stream.readable, error);
    };
  }
});

// node_modules/execa/lib/convert/writable.js
var import_node_stream7, import_node_util10, createWritable, getSubprocessStdin, getWritableMethods, onWrite, onWritableFinal, onStdinFinished, onWritableDestroy, destroyOtherWritable;
var init_writable = __esm({
  "node_modules/execa/lib/convert/writable.js"() {
    import_node_stream7 = require("node:stream");
    import_node_util10 = require("node:util");
    init_fd_options();
    init_concurrent();
    init_shared();
    createWritable = ({ subprocess, concurrentStreams }, { to } = {}) => {
      const { subprocessStdin, waitWritableFinal, waitWritableDestroy } = getSubprocessStdin(subprocess, to, concurrentStreams);
      const writable2 = new import_node_stream7.Writable({
        ...getWritableMethods(subprocessStdin, subprocess, waitWritableFinal),
        destroy: (0, import_node_util10.callbackify)(onWritableDestroy.bind(void 0, {
          subprocessStdin,
          subprocess,
          waitWritableFinal,
          waitWritableDestroy
        })),
        highWaterMark: subprocessStdin.writableHighWaterMark,
        objectMode: subprocessStdin.writableObjectMode
      });
      onStdinFinished(subprocessStdin, writable2);
      return writable2;
    };
    getSubprocessStdin = (subprocess, to, concurrentStreams) => {
      const subprocessStdin = getToStream(subprocess, to);
      const waitWritableFinal = addConcurrentStream(concurrentStreams, subprocessStdin, "writableFinal");
      const waitWritableDestroy = addConcurrentStream(concurrentStreams, subprocessStdin, "writableDestroy");
      return { subprocessStdin, waitWritableFinal, waitWritableDestroy };
    };
    getWritableMethods = (subprocessStdin, subprocess, waitWritableFinal) => ({
      write: onWrite.bind(void 0, subprocessStdin),
      final: (0, import_node_util10.callbackify)(onWritableFinal.bind(void 0, subprocessStdin, subprocess, waitWritableFinal))
    });
    onWrite = (subprocessStdin, chunk, encoding, done) => {
      if (subprocessStdin.write(chunk, encoding)) {
        done();
      } else {
        subprocessStdin.once("drain", done);
      }
    };
    onWritableFinal = async (subprocessStdin, subprocess, waitWritableFinal) => {
      if (await waitForConcurrentStreams(waitWritableFinal, subprocess)) {
        if (subprocessStdin.writable) {
          subprocessStdin.end();
        }
        await subprocess;
      }
    };
    onStdinFinished = async (subprocessStdin, writable2, subprocessStdout) => {
      try {
        await waitForSubprocessStdin(subprocessStdin);
        if (writable2.writable) {
          writable2.end();
        }
      } catch (error) {
        await safeWaitForSubprocessStdout(subprocessStdout);
        destroyOtherWritable(writable2, error);
      }
    };
    onWritableDestroy = async ({ subprocessStdin, subprocess, waitWritableFinal, waitWritableDestroy }, error) => {
      await waitForConcurrentStreams(waitWritableFinal, subprocess);
      if (await waitForConcurrentStreams(waitWritableDestroy, subprocess)) {
        destroyOtherWritable(subprocessStdin, error);
        await waitForSubprocess(subprocess, error);
      }
    };
    destroyOtherWritable = (stream, error) => {
      destroyOtherStream(stream, stream.writable, error);
    };
  }
});

// node_modules/execa/lib/convert/duplex.js
var import_node_stream8, import_node_util11, createDuplex, onDuplexDestroy;
var init_duplex = __esm({
  "node_modules/execa/lib/convert/duplex.js"() {
    import_node_stream8 = require("node:stream");
    import_node_util11 = require("node:util");
    init_encoding_option();
    init_readable();
    init_writable();
    createDuplex = ({ subprocess, concurrentStreams, encoding }, { from, to, binary: binaryOption = true, preserveNewlines = true } = {}) => {
      const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
      const { subprocessStdout, waitReadableDestroy } = getSubprocessStdout(subprocess, from, concurrentStreams);
      const { subprocessStdin, waitWritableFinal, waitWritableDestroy } = getSubprocessStdin(subprocess, to, concurrentStreams);
      const { readableEncoding, readableObjectMode, readableHighWaterMark } = getReadableOptions(subprocessStdout, binary);
      const { read, onStdoutDataDone } = getReadableMethods({
        subprocessStdout,
        subprocess,
        binary,
        encoding,
        preserveNewlines
      });
      const duplex2 = new import_node_stream8.Duplex({
        read,
        ...getWritableMethods(subprocessStdin, subprocess, waitWritableFinal),
        destroy: (0, import_node_util11.callbackify)(onDuplexDestroy.bind(void 0, {
          subprocessStdout,
          subprocessStdin,
          subprocess,
          waitReadableDestroy,
          waitWritableFinal,
          waitWritableDestroy
        })),
        readableHighWaterMark,
        writableHighWaterMark: subprocessStdin.writableHighWaterMark,
        readableObjectMode,
        writableObjectMode: subprocessStdin.writableObjectMode,
        encoding: readableEncoding
      });
      onStdoutFinished({
        subprocessStdout,
        onStdoutDataDone,
        readable: duplex2,
        subprocess,
        subprocessStdin
      });
      onStdinFinished(subprocessStdin, duplex2, subprocessStdout);
      return duplex2;
    };
    onDuplexDestroy = async ({ subprocessStdout, subprocessStdin, subprocess, waitReadableDestroy, waitWritableFinal, waitWritableDestroy }, error) => {
      await Promise.all([
        onReadableDestroy({ subprocessStdout, subprocess, waitReadableDestroy }, error),
        onWritableDestroy({
          subprocessStdin,
          subprocess,
          waitWritableFinal,
          waitWritableDestroy
        }, error)
      ]);
    };
  }
});

// node_modules/execa/lib/convert/iterable.js
var createIterable, iterateOnStdoutData;
var init_iterable = __esm({
  "node_modules/execa/lib/convert/iterable.js"() {
    init_encoding_option();
    init_fd_options();
    init_iterate();
    createIterable = (subprocess, encoding, {
      from,
      binary: binaryOption = false,
      preserveNewlines = false
    } = {}) => {
      const binary = binaryOption || BINARY_ENCODINGS.has(encoding);
      const subprocessStdout = getFromStream(subprocess, from);
      const onStdoutData = iterateOnSubprocessStream({
        subprocessStdout,
        subprocess,
        binary,
        shouldEncode: true,
        encoding,
        preserveNewlines
      });
      return iterateOnStdoutData(onStdoutData, subprocessStdout, subprocess);
    };
    iterateOnStdoutData = async function* (onStdoutData, subprocessStdout, subprocess) {
      try {
        yield* onStdoutData;
      } finally {
        if (subprocessStdout.readable) {
          subprocessStdout.destroy();
        }
        await subprocess;
      }
    };
  }
});

// node_modules/execa/lib/convert/add.js
var addConvertedStreams;
var init_add = __esm({
  "node_modules/execa/lib/convert/add.js"() {
    init_concurrent();
    init_readable();
    init_writable();
    init_duplex();
    init_iterable();
    addConvertedStreams = (subprocess, { encoding }) => {
      const concurrentStreams = initializeConcurrentStreams();
      subprocess.readable = createReadable.bind(void 0, { subprocess, concurrentStreams, encoding });
      subprocess.writable = createWritable.bind(void 0, { subprocess, concurrentStreams });
      subprocess.duplex = createDuplex.bind(void 0, { subprocess, concurrentStreams, encoding });
      subprocess.iterable = createIterable.bind(void 0, subprocess, encoding);
      subprocess[Symbol.asyncIterator] = createIterable.bind(void 0, subprocess, encoding, {});
    };
  }
});

// node_modules/execa/lib/methods/promise.js
var mergePromise, nativePromisePrototype, descriptors;
var init_promise = __esm({
  "node_modules/execa/lib/methods/promise.js"() {
    mergePromise = (subprocess, promise) => {
      for (const [property, descriptor] of descriptors) {
        const value = descriptor.value.bind(promise);
        Reflect.defineProperty(subprocess, property, { ...descriptor, value });
      }
    };
    nativePromisePrototype = (async () => {
    })().constructor.prototype;
    descriptors = ["then", "catch", "finally"].map((property) => [
      property,
      Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property)
    ]);
  }
});

// node_modules/execa/lib/methods/main-async.js
var import_node_events14, import_node_child_process5, execaCoreAsync, handleAsyncArguments, handleAsyncOptions, spawnSubprocessAsync, handlePromise, getAsyncResult;
var init_main_async = __esm({
  "node_modules/execa/lib/methods/main-async.js"() {
    import_node_events14 = require("node:events");
    import_node_child_process5 = require("node:child_process");
    init_source();
    init_command();
    init_options();
    init_fd_options();
    init_shell();
    init_methods();
    init_result();
    init_reject();
    init_early_error();
    init_handle_async();
    init_strip_newline();
    init_output_async();
    init_kill();
    init_cleanup();
    init_setup();
    init_all_async();
    init_wait_subprocess();
    init_add();
    init_deferred();
    init_promise();
    execaCoreAsync = (rawFile, rawArguments, rawOptions, createNested) => {
      const { file, commandArguments, command, escapedCommand, startTime, verboseInfo, options, fileDescriptors } = handleAsyncArguments(rawFile, rawArguments, rawOptions);
      const { subprocess, promise } = spawnSubprocessAsync({
        file,
        commandArguments,
        options,
        startTime,
        verboseInfo,
        command,
        escapedCommand,
        fileDescriptors
      });
      subprocess.pipe = pipeToSubprocess.bind(void 0, {
        source: subprocess,
        sourcePromise: promise,
        boundOptions: {},
        createNested
      });
      mergePromise(subprocess, promise);
      SUBPROCESS_OPTIONS.set(subprocess, { options, fileDescriptors });
      return subprocess;
    };
    handleAsyncArguments = (rawFile, rawArguments, rawOptions) => {
      const { command, escapedCommand, startTime, verboseInfo } = handleCommand(rawFile, rawArguments, rawOptions);
      const { file, commandArguments, options: normalizedOptions } = normalizeOptions(rawFile, rawArguments, rawOptions);
      const options = handleAsyncOptions(normalizedOptions);
      const fileDescriptors = handleStdioAsync(options, verboseInfo);
      return {
        file,
        commandArguments,
        command,
        escapedCommand,
        startTime,
        verboseInfo,
        options,
        fileDescriptors
      };
    };
    handleAsyncOptions = ({ timeout, signal, ...options }) => {
      if (signal !== void 0) {
        throw new TypeError('The "signal" option has been renamed to "cancelSignal" instead.');
      }
      return { ...options, timeoutDuration: timeout };
    };
    spawnSubprocessAsync = ({ file, commandArguments, options, startTime, verboseInfo, command, escapedCommand, fileDescriptors }) => {
      let subprocess;
      try {
        subprocess = (0, import_node_child_process5.spawn)(...concatenateShell(file, commandArguments, options));
      } catch (error) {
        return handleEarlyError({
          error,
          command,
          escapedCommand,
          fileDescriptors,
          options,
          startTime,
          verboseInfo
        });
      }
      const controller = new AbortController();
      (0, import_node_events14.setMaxListeners)(Number.POSITIVE_INFINITY, controller.signal);
      const originalStreams = [...subprocess.stdio];
      pipeOutputAsync(subprocess, fileDescriptors, controller);
      cleanupOnExit(subprocess, options, controller);
      const context = {};
      const onInternalError = createDeferred();
      subprocess.kill = subprocessKill.bind(void 0, {
        kill: subprocess.kill.bind(subprocess),
        options,
        onInternalError,
        context,
        controller
      });
      subprocess.all = makeAllStream(subprocess, options);
      addConvertedStreams(subprocess, options);
      addIpcMethods(subprocess, options);
      const promise = handlePromise({
        subprocess,
        options,
        startTime,
        verboseInfo,
        fileDescriptors,
        originalStreams,
        command,
        escapedCommand,
        context,
        onInternalError,
        controller
      });
      return { subprocess, promise };
    };
    handlePromise = async ({ subprocess, options, startTime, verboseInfo, fileDescriptors, originalStreams, command, escapedCommand, context, onInternalError, controller }) => {
      const [
        errorInfo,
        [exitCode, signal],
        stdioResults,
        allResult,
        ipcOutput
      ] = await waitForSubprocessResult({
        subprocess,
        options,
        context,
        verboseInfo,
        fileDescriptors,
        originalStreams,
        onInternalError,
        controller
      });
      controller.abort();
      onInternalError.resolve();
      const stdio = stdioResults.map((stdioResult, fdNumber) => stripNewline(stdioResult, options, fdNumber));
      const all = stripNewline(allResult, options, "all");
      const result = getAsyncResult({
        errorInfo,
        exitCode,
        signal,
        stdio,
        all,
        ipcOutput,
        context,
        options,
        command,
        escapedCommand,
        startTime
      });
      return handleResult(result, verboseInfo, options);
    };
    getAsyncResult = ({ errorInfo, exitCode, signal, stdio, all, ipcOutput, context, options, command, escapedCommand, startTime }) => "error" in errorInfo ? makeError({
      error: errorInfo.error,
      command,
      escapedCommand,
      timedOut: context.terminationReason === "timeout",
      isCanceled: context.terminationReason === "cancel" || context.terminationReason === "gracefulCancel",
      isGracefullyCanceled: context.terminationReason === "gracefulCancel",
      isMaxBuffer: errorInfo.error instanceof MaxBufferError,
      isForcefullyTerminated: context.isForcefullyTerminated,
      exitCode,
      signal,
      stdio,
      all,
      ipcOutput,
      options,
      startTime,
      isSync: false
    }) : makeSuccessResult({
      command,
      escapedCommand,
      stdio,
      all,
      ipcOutput,
      options,
      startTime
    });
  }
});

// node_modules/execa/lib/methods/bind.js
var mergeOptions, mergeOption, DEEP_OPTIONS;
var init_bind = __esm({
  "node_modules/execa/lib/methods/bind.js"() {
    init_is_plain_obj();
    init_specific();
    mergeOptions = (boundOptions, options) => {
      const newOptions = Object.fromEntries(
        Object.entries(options).map(([optionName, optionValue]) => [
          optionName,
          mergeOption(optionName, boundOptions[optionName], optionValue)
        ])
      );
      return { ...boundOptions, ...newOptions };
    };
    mergeOption = (optionName, boundOptionValue, optionValue) => {
      if (DEEP_OPTIONS.has(optionName) && isPlainObject(boundOptionValue) && isPlainObject(optionValue)) {
        return { ...boundOptionValue, ...optionValue };
      }
      return optionValue;
    };
    DEEP_OPTIONS = /* @__PURE__ */ new Set(["env", ...FD_SPECIFIC_OPTIONS]);
  }
});

// node_modules/execa/lib/methods/create.js
var createExeca, callBoundExeca, parseArguments;
var init_create = __esm({
  "node_modules/execa/lib/methods/create.js"() {
    init_is_plain_obj();
    init_parameters();
    init_template();
    init_main_sync();
    init_main_async();
    init_bind();
    createExeca = (mapArguments, boundOptions, deepOptions, setBoundExeca) => {
      const createNested = (mapArguments2, boundOptions2, setBoundExeca2) => createExeca(mapArguments2, boundOptions2, deepOptions, setBoundExeca2);
      const boundExeca = (...execaArguments) => callBoundExeca({
        mapArguments,
        deepOptions,
        boundOptions,
        setBoundExeca,
        createNested
      }, ...execaArguments);
      if (setBoundExeca !== void 0) {
        setBoundExeca(boundExeca, createNested, boundOptions);
      }
      return boundExeca;
    };
    callBoundExeca = ({ mapArguments, deepOptions = {}, boundOptions = {}, setBoundExeca, createNested }, firstArgument, ...nextArguments) => {
      if (isPlainObject(firstArgument)) {
        return createNested(mapArguments, mergeOptions(boundOptions, firstArgument), setBoundExeca);
      }
      const { file, commandArguments, options, isSync } = parseArguments({
        mapArguments,
        firstArgument,
        nextArguments,
        deepOptions,
        boundOptions
      });
      return isSync ? execaCoreSync(file, commandArguments, options) : execaCoreAsync(file, commandArguments, options, createNested);
    };
    parseArguments = ({ mapArguments, firstArgument, nextArguments, deepOptions, boundOptions }) => {
      const callArguments = isTemplateString(firstArgument) ? parseTemplates(firstArgument, nextArguments) : [firstArgument, ...nextArguments];
      const [initialFile, initialArguments, initialOptions] = normalizeParameters(...callArguments);
      const mergedOptions = mergeOptions(mergeOptions(deepOptions, boundOptions), initialOptions);
      const {
        file = initialFile,
        commandArguments = initialArguments,
        options = mergedOptions,
        isSync = false
      } = mapArguments({ file: initialFile, commandArguments: initialArguments, options: mergedOptions });
      return {
        file,
        commandArguments,
        options,
        isSync
      };
    };
  }
});

// node_modules/execa/lib/methods/command.js
var mapCommandAsync, mapCommandSync, parseCommand, parseCommandString, SPACES_REGEXP;
var init_command2 = __esm({
  "node_modules/execa/lib/methods/command.js"() {
    mapCommandAsync = ({ file, commandArguments }) => parseCommand(file, commandArguments);
    mapCommandSync = ({ file, commandArguments }) => ({ ...parseCommand(file, commandArguments), isSync: true });
    parseCommand = (command, unusedArguments) => {
      if (unusedArguments.length > 0) {
        throw new TypeError(`The command and its arguments must be passed as a single string: ${command} ${unusedArguments}.`);
      }
      const [file, ...commandArguments] = parseCommandString(command);
      return { file, commandArguments };
    };
    parseCommandString = (command) => {
      if (typeof command !== "string") {
        throw new TypeError(`The command must be a string: ${String(command)}.`);
      }
      const trimmedCommand = command.trim();
      if (trimmedCommand === "") {
        return [];
      }
      const tokens = [];
      for (const token of trimmedCommand.split(SPACES_REGEXP)) {
        const previousToken = tokens.at(-1);
        if (previousToken && previousToken.endsWith("\\")) {
          tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`;
        } else {
          tokens.push(token);
        }
      }
      return tokens;
    };
    SPACES_REGEXP = / +/g;
  }
});

// node_modules/execa/lib/methods/script.js
var setScriptSync, mapScriptAsync, mapScriptSync, getScriptOptions, getScriptStdinOption, deepScriptOptions;
var init_script = __esm({
  "node_modules/execa/lib/methods/script.js"() {
    setScriptSync = (boundExeca, createNested, boundOptions) => {
      boundExeca.sync = createNested(mapScriptSync, boundOptions);
      boundExeca.s = boundExeca.sync;
    };
    mapScriptAsync = ({ options }) => getScriptOptions(options);
    mapScriptSync = ({ options }) => ({ ...getScriptOptions(options), isSync: true });
    getScriptOptions = (options) => ({ options: { ...getScriptStdinOption(options), ...options } });
    getScriptStdinOption = ({ input, inputFile, stdio }) => input === void 0 && inputFile === void 0 && stdio === void 0 ? { stdin: "inherit" } : {};
    deepScriptOptions = { preferLocal: true };
  }
});

// node_modules/execa/index.js
var execa_exports = {};
__export(execa_exports, {
  $: () => $,
  ExecaError: () => ExecaError,
  ExecaSyncError: () => ExecaSyncError,
  execa: () => execa,
  execaCommand: () => execaCommand,
  execaCommandSync: () => execaCommandSync,
  execaNode: () => execaNode,
  execaSync: () => execaSync,
  getCancelSignal: () => getCancelSignal2,
  getEachMessage: () => getEachMessage2,
  getOneMessage: () => getOneMessage2,
  parseCommandString: () => parseCommandString,
  sendMessage: () => sendMessage2
});
var execa, execaSync, execaCommand, execaCommandSync, execaNode, $, sendMessage2, getOneMessage2, getEachMessage2, getCancelSignal2;
var init_execa = __esm({
  "node_modules/execa/index.js"() {
    init_create();
    init_command2();
    init_node2();
    init_script();
    init_methods();
    init_command2();
    init_final_error();
    execa = createExeca(() => ({}));
    execaSync = createExeca(() => ({ isSync: true }));
    execaCommand = createExeca(mapCommandAsync);
    execaCommandSync = createExeca(mapCommandSync);
    execaNode = createExeca(mapNode);
    $ = createExeca(mapScriptAsync, {}, deepScriptOptions, setScriptSync);
    ({
      sendMessage: sendMessage2,
      getOneMessage: getOneMessage2,
      getEachMessage: getEachMessage2,
      getCancelSignal: getCancelSignal2
    } = getIpcExport());
  }
});

// src/wifi.tsx
var wifi_exports = {};
__export(wifi_exports, {
  default: () => WiFi
});
module.exports = __toCommonJS(wifi_exports);
var import_react = require("react");
var import_api = require("@raycast/api");
var import_jsx_runtime = require("react/jsx-runtime");
function WiFi() {
  const [state, setState] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    (async () => {
      const { execa: execa2 } = await Promise.resolve().then(() => (init_execa(), execa_exports));
      try {
        const name = await execa2`/usr/sbin/ipconfig getsummary en0`.pipe`grep ${` SSID :`}`;
        const location = await execa2`/usr/sbin/networksetup -getcurrentlocation`;
        setState({
          name: name.stdout.replace("SSID :", "").trim(),
          location: location.stdout.trim()
        });
      } catch (_error) {
        setState({ name: "", location: "" });
      }
    })();
  }, []);
  const status = state && state.name.length;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_api.MenuBarExtra,
    {
      isLoading: state === false,
      title: status ? `${state.name} on ${state.location}` : "No Wi-Fi",
      icon: status ? { source: "" } : { source: import_api.Icon.Warning, tintColor: "orange" }
    }
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmovaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvYXJndW1lbnRzL2ZpbGUtdXJsLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvcGFyYW1ldGVycy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi91dGlscy91aW50LWFycmF5LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvdGVtcGxhdGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdXRpbHMvc3RhbmRhcmQtc3RyZWFtLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2FyZ3VtZW50cy9zcGVjaWZpYy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL3ZhbHVlcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9hcmd1bWVudHMvZXNjYXBlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvaXMtdW5pY29kZS1zdXBwb3J0ZWQvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9maWd1cmVzL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMveW9jdG9jb2xvcnMvYmFzZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL3lvY3RvY29sb3JzL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3ZlcmJvc2UvZGVmYXVsdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL2N1c3RvbS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL2xvZy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL3N0YXJ0LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3ZlcmJvc2UvaW5mby5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXR1cm4vZHVyYXRpb24uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvYXJndW1lbnRzL2NvbW1hbmQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9pc2V4ZS93aW5kb3dzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvaXNleGUvbW9kZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2lzZXhlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvd2hpY2gvd2hpY2guanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9wYXRoLWtleS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nyb3NzLXNwYXduL2xpYi91dGlsL3Jlc29sdmVDb21tYW5kLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY3Jvc3Mtc3Bhd24vbGliL3V0aWwvZXNjYXBlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvc2hlYmFuZy1yZWdleC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL3NoZWJhbmctY29tbWFuZC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nyb3NzLXNwYXduL2xpYi91dGlsL3JlYWRTaGViYW5nLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY3Jvc3Mtc3Bhd24vbGliL3BhcnNlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY3Jvc3Mtc3Bhd24vbGliL2Vub2VudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nyb3NzLXNwYXduL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvbnBtLXJ1bi1wYXRoL25vZGVfbW9kdWxlcy9wYXRoLWtleS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL3VuaWNvcm4tbWFnaWMvZGVmYXVsdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL3VuaWNvcm4tbWFnaWMvbm9kZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL25wbS1ydW4tcGF0aC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXR1cm4vZmluYWwtZXJyb3IuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9odW1hbi1zaWduYWxzL2J1aWxkL3NyYy9yZWFsdGltZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2h1bWFuLXNpZ25hbHMvYnVpbGQvc3JjL2NvcmUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9odW1hbi1zaWduYWxzL2J1aWxkL3NyYy9zaWduYWxzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvaHVtYW4tc2lnbmFscy9idWlsZC9zcmMvbWFpbi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90ZXJtaW5hdGUvc2lnbmFsLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3Rlcm1pbmF0ZS9raWxsLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3V0aWxzL2Fib3J0LXNpZ25hbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90ZXJtaW5hdGUvY2FuY2VsLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy92YWxpZGF0aW9uLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3V0aWxzL2RlZmVycmVkLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2FyZ3VtZW50cy9mZC1vcHRpb25zLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3V0aWxzL21heC1saXN0ZW5lcnMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL3JlZmVyZW5jZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pcGMvaW5jb21pbmcuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL2ZvcndhcmQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL3N0cmljdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pcGMvb3V0Z29pbmcuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL3NlbmQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL2dyYWNlZnVsLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3Rlcm1pbmF0ZS9ncmFjZWZ1bC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90ZXJtaW5hdGUvdGltZW91dC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9tZXRob2RzL25vZGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL2lwYy1pbnB1dC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9hcmd1bWVudHMvZW5jb2Rpbmctb3B0aW9uLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2FyZ3VtZW50cy9jd2QuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvYXJndW1lbnRzL29wdGlvbnMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvYXJndW1lbnRzL3NoZWxsLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvc3RyaXAtZmluYWwtbmV3bGluZS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2lzLXN0cmVhbS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL0BzZWMtYW50L3JlYWRhYmxlLXN0cmVhbS9kaXN0L3BvbnlmaWxsL2FzeW5jSXRlcmF0b3IuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9Ac2VjLWFudC9yZWFkYWJsZS1zdHJlYW0vZGlzdC9wb255ZmlsbC9mcm9tQW55SXRlcmFibGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9Ac2VjLWFudC9yZWFkYWJsZS1zdHJlYW0vZGlzdC9wb255ZmlsbC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2dldC1zdHJlYW0vc291cmNlL3N0cmVhbS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2dldC1zdHJlYW0vc291cmNlL2NvbnRlbnRzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9zb3VyY2UvdXRpbHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9nZXQtc3RyZWFtL3NvdXJjZS9hcnJheS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2dldC1zdHJlYW0vc291cmNlL2FycmF5LWJ1ZmZlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2dldC1zdHJlYW0vc291cmNlL3N0cmluZy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2dldC1zdHJlYW0vc291cmNlL2V4cG9ydHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9nZXQtc3RyZWFtL3NvdXJjZS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pby9tYXgtYnVmZmVyLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3JldHVybi9tZXNzYWdlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3JldHVybi9yZXN1bHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9wYXJzZS1tcy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL3ByZXR0eS1tcy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL2Vycm9yLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3ZlcmJvc2UvY29tcGxldGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcmV0dXJuL3JlamVjdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9zdGRpby90eXBlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3RyYW5zZm9ybS9vYmplY3QtbW9kZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90cmFuc2Zvcm0vbm9ybWFsaXplLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3N0ZGlvL2RpcmVjdGlvbi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pcGMvYXJyYXkuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvc3RkaW8vc3RkaW8tb3B0aW9uLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3N0ZGlvL25hdGl2ZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9zdGRpby9pbnB1dC1vcHRpb24uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvc3RkaW8vZHVwbGljYXRlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3N0ZGlvL2hhbmRsZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9zdGRpby9oYW5kbGUtc3luYy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pby9zdHJpcC1uZXdsaW5lLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3RyYW5zZm9ybS9zcGxpdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90cmFuc2Zvcm0vdmFsaWRhdGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdHJhbnNmb3JtL2VuY29kaW5nLXRyYW5zZm9ybS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90cmFuc2Zvcm0vcnVuLWFzeW5jLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3RyYW5zZm9ybS9ydW4tc3luYy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90cmFuc2Zvcm0vZ2VuZXJhdG9yLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lvL2lucHV0LXN5bmMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdmVyYm9zZS9vdXRwdXQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaW8vb3V0cHV0LXN5bmMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcmVzb2x2ZS9hbGwtc3luYy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXNvbHZlL2V4aXQtYXN5bmMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcmVzb2x2ZS9leGl0LXN5bmMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvbWV0aG9kcy9tYWluLXN5bmMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL2dldC1vbmUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL2dldC1lYWNoLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy9tZXRob2RzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3JldHVybi9lYXJseS1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9zdGRpby9oYW5kbGUtYXN5bmMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9Ac2luZHJlc29yaHVzL21lcmdlLXN0cmVhbXMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaW8vcGlwZWxpbmUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaW8vb3V0cHV0LWFzeW5jLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvc2lnbmFsLWV4aXQvc3JjL3NpZ25hbHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9zaWduYWwtZXhpdC9zcmMvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdGVybWluYXRlL2NsZWFudXAuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcGlwZS9waXBlLWFyZ3VtZW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9waXBlL3Rocm93LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3BpcGUvc2VxdWVuY2UuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcGlwZS9zdHJlYW1pbmcuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcGlwZS9hYm9ydC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9waXBlL3NldHVwLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lvL2l0ZXJhdGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaW8vY29udGVudHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcmVzb2x2ZS93YWl0LXN0cmVhbS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXNvbHZlL3N0ZGlvLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3Jlc29sdmUvYWxsLWFzeW5jLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3ZlcmJvc2UvaXBjLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy9idWZmZXItbWVzc2FnZXMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcmVzb2x2ZS93YWl0LXN1YnByb2Nlc3MuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvY29udmVydC9jb25jdXJyZW50LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2NvbnZlcnQvc2hhcmVkLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2NvbnZlcnQvcmVhZGFibGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvY29udmVydC93cml0YWJsZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9jb252ZXJ0L2R1cGxleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9jb252ZXJ0L2l0ZXJhYmxlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2NvbnZlcnQvYWRkLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvcHJvbWlzZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9tZXRob2RzL21haW4tYXN5bmMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvbWV0aG9kcy9iaW5kLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvY3JlYXRlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvY29tbWFuZC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9tZXRob2RzL3NjcmlwdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9zcmMvd2lmaS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuXHRyZXR1cm4gKHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkgPT09IG51bGwpICYmICEoU3ltYm9sLnRvU3RyaW5nVGFnIGluIHZhbHVlKSAmJiAhKFN5bWJvbC5pdGVyYXRvciBpbiB2YWx1ZSk7XG59XG4iLCAiaW1wb3J0IHtmaWxlVVJMVG9QYXRofSBmcm9tICdub2RlOnVybCc7XG5cbi8vIEFsbG93IHNvbWUgYXJndW1lbnRzL29wdGlvbnMgdG8gYmUgZWl0aGVyIGEgZmlsZSBwYXRoIHN0cmluZyBvciBhIGZpbGUgVVJMXG5leHBvcnQgY29uc3Qgc2FmZU5vcm1hbGl6ZUZpbGVVcmwgPSAoZmlsZSwgbmFtZSkgPT4ge1xuXHRjb25zdCBmaWxlU3RyaW5nID0gbm9ybWFsaXplRmlsZVVybChub3JtYWxpemVEZW5vRXhlY1BhdGgoZmlsZSkpO1xuXG5cdGlmICh0eXBlb2YgZmlsZVN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGAke25hbWV9IG11c3QgYmUgYSBzdHJpbmcgb3IgYSBmaWxlIFVSTDogJHtmaWxlU3RyaW5nfS5gKTtcblx0fVxuXG5cdHJldHVybiBmaWxlU3RyaW5nO1xufTtcblxuLy8gSW4gRGVubyBub2RlOnByb2Nlc3MgZXhlY1BhdGggaXMgYSBzcGVjaWFsIG9iamVjdCwgbm90IGp1c3QgYSBzdHJpbmc6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGVub2xhbmQvZGVuby9ibG9iL2Y0NjAxODhlNTgzZjAwMTQ0MDAwYWEwZDhhZGUwODIxOGQ0N2MzYzEvZXh0L25vZGUvcG9seWZpbGxzL3Byb2Nlc3MudHMjTDM0NFxuY29uc3Qgbm9ybWFsaXplRGVub0V4ZWNQYXRoID0gZmlsZSA9PiBpc0Rlbm9FeGVjUGF0aChmaWxlKVxuXHQ/IGZpbGUudG9TdHJpbmcoKVxuXHQ6IGZpbGU7XG5cbmV4cG9ydCBjb25zdCBpc0Rlbm9FeGVjUGF0aCA9IGZpbGUgPT4gdHlwZW9mIGZpbGUgIT09ICdzdHJpbmcnXG5cdCYmIGZpbGVcblx0JiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGZpbGUpID09PSBTdHJpbmcucHJvdG90eXBlO1xuXG4vLyBTYW1lIGJ1dCBhbHNvIGFsbG93cyBvdGhlciB2YWx1ZXMsIGUuZy4gYGJvb2xlYW5gIGZvciB0aGUgYHNoZWxsYCBvcHRpb25cbmV4cG9ydCBjb25zdCBub3JtYWxpemVGaWxlVXJsID0gZmlsZSA9PiBmaWxlIGluc3RhbmNlb2YgVVJMID8gZmlsZVVSTFRvUGF0aChmaWxlKSA6IGZpbGU7XG4iLCAiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnaXMtcGxhaW4tb2JqJztcbmltcG9ydCB7c2FmZU5vcm1hbGl6ZUZpbGVVcmx9IGZyb20gJy4uL2FyZ3VtZW50cy9maWxlLXVybC5qcyc7XG5cbi8vIFRoZSBjb21tYW5kIGBhcmd1bWVudHNgIGFuZCBgb3B0aW9uc2AgYXJlIGJvdGggb3B0aW9uYWwuXG4vLyBUaGlzIGFsc28gZG9lcyBiYXNpYyB2YWxpZGF0aW9uIG9uIHRoZW0gYW5kIG9uIHRoZSBjb21tYW5kIGZpbGUuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGFyYW1ldGVycyA9IChyYXdGaWxlLCByYXdBcmd1bWVudHMgPSBbXSwgcmF3T3B0aW9ucyA9IHt9KSA9PiB7XG5cdGNvbnN0IGZpbGVQYXRoID0gc2FmZU5vcm1hbGl6ZUZpbGVVcmwocmF3RmlsZSwgJ0ZpcnN0IGFyZ3VtZW50Jyk7XG5cdGNvbnN0IFtjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zXSA9IGlzUGxhaW5PYmplY3QocmF3QXJndW1lbnRzKVxuXHRcdD8gW1tdLCByYXdBcmd1bWVudHNdXG5cdFx0OiBbcmF3QXJndW1lbnRzLCByYXdPcHRpb25zXTtcblxuXHRpZiAoIUFycmF5LmlzQXJyYXkoY29tbWFuZEFyZ3VtZW50cykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBlaXRoZXIgYW4gYXJyYXkgb2YgYXJndW1lbnRzIG9yIGFuIG9wdGlvbnMgb2JqZWN0OiAke2NvbW1hbmRBcmd1bWVudHN9YCk7XG5cdH1cblxuXHRpZiAoY29tbWFuZEFyZ3VtZW50cy5zb21lKGNvbW1hbmRBcmd1bWVudCA9PiB0eXBlb2YgY29tbWFuZEFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBjb21tYW5kQXJndW1lbnQgIT09IG51bGwpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXkgb2Ygc3RyaW5nczogJHtjb21tYW5kQXJndW1lbnRzfWApO1xuXHR9XG5cblx0Y29uc3Qgbm9ybWFsaXplZEFyZ3VtZW50cyA9IGNvbW1hbmRBcmd1bWVudHMubWFwKFN0cmluZyk7XG5cdGNvbnN0IG51bGxCeXRlQXJndW1lbnQgPSBub3JtYWxpemVkQXJndW1lbnRzLmZpbmQobm9ybWFsaXplZEFyZ3VtZW50ID0+IG5vcm1hbGl6ZWRBcmd1bWVudC5pbmNsdWRlcygnXFwwJykpO1xuXHRpZiAobnVsbEJ5dGVBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgQXJndW1lbnRzIGNhbm5vdCBjb250YWluIG51bGwgYnl0ZXMgKFwiXFxcXDBcIik6ICR7bnVsbEJ5dGVBcmd1bWVudH1gKTtcblx0fVxuXG5cdGlmICghaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYExhc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBvcHRpb25zIG9iamVjdDogJHtvcHRpb25zfWApO1xuXHR9XG5cblx0cmV0dXJuIFtmaWxlUGF0aCwgbm9ybWFsaXplZEFyZ3VtZW50cywgb3B0aW9uc107XG59O1xuIiwgImltcG9ydCB7U3RyaW5nRGVjb2Rlcn0gZnJvbSAnbm9kZTpzdHJpbmdfZGVjb2Rlcic7XG5cbmNvbnN0IHt0b1N0cmluZzogb2JqZWN0VG9TdHJpbmd9ID0gT2JqZWN0LnByb3RvdHlwZTtcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXlCdWZmZXIgPSB2YWx1ZSA9PiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcblxuLy8gSXMgZWl0aGVyIFVpbnQ4QXJyYXkgb3IgQnVmZmVyXG5leHBvcnQgY29uc3QgaXNVaW50OEFycmF5ID0gdmFsdWUgPT4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFVpbnQ4QXJyYXldJztcblxuZXhwb3J0IGNvbnN0IGJ1ZmZlclRvVWludDhBcnJheSA9IGJ1ZmZlciA9PiBuZXcgVWludDhBcnJheShidWZmZXIuYnVmZmVyLCBidWZmZXIuYnl0ZU9mZnNldCwgYnVmZmVyLmJ5dGVMZW5ndGgpO1xuXG5jb25zdCB0ZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuY29uc3Qgc3RyaW5nVG9VaW50OEFycmF5ID0gc3RyaW5nID0+IHRleHRFbmNvZGVyLmVuY29kZShzdHJpbmcpO1xuXG5jb25zdCB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuZXhwb3J0IGNvbnN0IHVpbnQ4QXJyYXlUb1N0cmluZyA9IHVpbnQ4QXJyYXkgPT4gdGV4dERlY29kZXIuZGVjb2RlKHVpbnQ4QXJyYXkpO1xuXG5leHBvcnQgY29uc3Qgam9pblRvU3RyaW5nID0gKHVpbnQ4QXJyYXlzT3JTdHJpbmdzLCBlbmNvZGluZykgPT4ge1xuXHRjb25zdCBzdHJpbmdzID0gdWludDhBcnJheXNUb1N0cmluZ3ModWludDhBcnJheXNPclN0cmluZ3MsIGVuY29kaW5nKTtcblx0cmV0dXJuIHN0cmluZ3Muam9pbignJyk7XG59O1xuXG5jb25zdCB1aW50OEFycmF5c1RvU3RyaW5ncyA9ICh1aW50OEFycmF5c09yU3RyaW5ncywgZW5jb2RpbmcpID0+IHtcblx0aWYgKGVuY29kaW5nID09PSAndXRmOCcgJiYgdWludDhBcnJheXNPclN0cmluZ3MuZXZlcnkodWludDhBcnJheU9yU3RyaW5nID0+IHR5cGVvZiB1aW50OEFycmF5T3JTdHJpbmcgPT09ICdzdHJpbmcnKSkge1xuXHRcdHJldHVybiB1aW50OEFycmF5c09yU3RyaW5ncztcblx0fVxuXG5cdGNvbnN0IGRlY29kZXIgPSBuZXcgU3RyaW5nRGVjb2RlcihlbmNvZGluZyk7XG5cdGNvbnN0IHN0cmluZ3MgPSB1aW50OEFycmF5c09yU3RyaW5nc1xuXHRcdC5tYXAodWludDhBcnJheU9yU3RyaW5nID0+IHR5cGVvZiB1aW50OEFycmF5T3JTdHJpbmcgPT09ICdzdHJpbmcnXG5cdFx0XHQ/IHN0cmluZ1RvVWludDhBcnJheSh1aW50OEFycmF5T3JTdHJpbmcpXG5cdFx0XHQ6IHVpbnQ4QXJyYXlPclN0cmluZylcblx0XHQubWFwKHVpbnQ4QXJyYXkgPT4gZGVjb2Rlci53cml0ZSh1aW50OEFycmF5KSk7XG5cdGNvbnN0IGZpbmFsU3RyaW5nID0gZGVjb2Rlci5lbmQoKTtcblx0cmV0dXJuIGZpbmFsU3RyaW5nID09PSAnJyA/IHN0cmluZ3MgOiBbLi4uc3RyaW5ncywgZmluYWxTdHJpbmddO1xufTtcblxuZXhwb3J0IGNvbnN0IGpvaW5Ub1VpbnQ4QXJyYXkgPSB1aW50OEFycmF5c09yU3RyaW5ncyA9PiB7XG5cdGlmICh1aW50OEFycmF5c09yU3RyaW5ncy5sZW5ndGggPT09IDEgJiYgaXNVaW50OEFycmF5KHVpbnQ4QXJyYXlzT3JTdHJpbmdzWzBdKSkge1xuXHRcdHJldHVybiB1aW50OEFycmF5c09yU3RyaW5nc1swXTtcblx0fVxuXG5cdHJldHVybiBjb25jYXRVaW50OEFycmF5cyhzdHJpbmdzVG9VaW50OEFycmF5cyh1aW50OEFycmF5c09yU3RyaW5ncykpO1xufTtcblxuY29uc3Qgc3RyaW5nc1RvVWludDhBcnJheXMgPSB1aW50OEFycmF5c09yU3RyaW5ncyA9PiB1aW50OEFycmF5c09yU3RyaW5ncy5tYXAodWludDhBcnJheU9yU3RyaW5nID0+IHR5cGVvZiB1aW50OEFycmF5T3JTdHJpbmcgPT09ICdzdHJpbmcnXG5cdD8gc3RyaW5nVG9VaW50OEFycmF5KHVpbnQ4QXJyYXlPclN0cmluZylcblx0OiB1aW50OEFycmF5T3JTdHJpbmcpO1xuXG5leHBvcnQgY29uc3QgY29uY2F0VWludDhBcnJheXMgPSB1aW50OEFycmF5cyA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGdldEpvaW5MZW5ndGgodWludDhBcnJheXMpKTtcblxuXHRsZXQgaW5kZXggPSAwO1xuXHRmb3IgKGNvbnN0IHVpbnQ4QXJyYXkgb2YgdWludDhBcnJheXMpIHtcblx0XHRyZXN1bHQuc2V0KHVpbnQ4QXJyYXksIGluZGV4KTtcblx0XHRpbmRleCArPSB1aW50OEFycmF5Lmxlbmd0aDtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRKb2luTGVuZ3RoID0gdWludDhBcnJheXMgPT4ge1xuXHRsZXQgam9pbkxlbmd0aCA9IDA7XG5cdGZvciAoY29uc3QgdWludDhBcnJheSBvZiB1aW50OEFycmF5cykge1xuXHRcdGpvaW5MZW5ndGggKz0gdWludDhBcnJheS5sZW5ndGg7XG5cdH1cblxuXHRyZXR1cm4gam9pbkxlbmd0aDtcbn07XG4iLCAiaW1wb3J0IHtDaGlsZFByb2Nlc3N9IGZyb20gJ25vZGU6Y2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdpcy1wbGFpbi1vYmonO1xuaW1wb3J0IHtpc1VpbnQ4QXJyYXksIHVpbnQ4QXJyYXlUb1N0cmluZ30gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5cbi8vIENoZWNrIHdoZXRoZXIgdGhlIHRlbXBsYXRlIHN0cmluZyBzeW50YXggaXMgYmVpbmcgdXNlZFxuZXhwb3J0IGNvbnN0IGlzVGVtcGxhdGVTdHJpbmcgPSB0ZW1wbGF0ZXMgPT4gQXJyYXkuaXNBcnJheSh0ZW1wbGF0ZXMpICYmIEFycmF5LmlzQXJyYXkodGVtcGxhdGVzLnJhdyk7XG5cbi8vIENvbnZlcnQgZXhlY2FgZmlsZSAuLi5jb21tYW5kQXJndW1lbnRzYCB0byBleGVjYShmaWxlLCBjb21tYW5kQXJndW1lbnRzKVxuZXhwb3J0IGNvbnN0IHBhcnNlVGVtcGxhdGVzID0gKHRlbXBsYXRlcywgZXhwcmVzc2lvbnMpID0+IHtcblx0bGV0IHRva2VucyA9IFtdO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCB0ZW1wbGF0ZV0gb2YgdGVtcGxhdGVzLmVudHJpZXMoKSkge1xuXHRcdHRva2VucyA9IHBhcnNlVGVtcGxhdGUoe1xuXHRcdFx0dGVtcGxhdGVzLFxuXHRcdFx0ZXhwcmVzc2lvbnMsXG5cdFx0XHR0b2tlbnMsXG5cdFx0XHRpbmRleCxcblx0XHRcdHRlbXBsYXRlLFxuXHRcdH0pO1xuXHR9XG5cblx0aWYgKHRva2Vucy5sZW5ndGggPT09IDApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUZW1wbGF0ZSBzY3JpcHQgbXVzdCBub3QgYmUgZW1wdHknKTtcblx0fVxuXG5cdGNvbnN0IFtmaWxlLCAuLi5jb21tYW5kQXJndW1lbnRzXSA9IHRva2Vucztcblx0cmV0dXJuIFtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCB7fV07XG59O1xuXG5jb25zdCBwYXJzZVRlbXBsYXRlID0gKHt0ZW1wbGF0ZXMsIGV4cHJlc3Npb25zLCB0b2tlbnMsIGluZGV4LCB0ZW1wbGF0ZX0pID0+IHtcblx0aWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIGJhY2tzbGFzaCBzZXF1ZW5jZTogJHt0ZW1wbGF0ZXMucmF3W2luZGV4XX1gKTtcblx0fVxuXG5cdGNvbnN0IHtuZXh0VG9rZW5zLCBsZWFkaW5nV2hpdGVzcGFjZXMsIHRyYWlsaW5nV2hpdGVzcGFjZXN9ID0gc3BsaXRCeVdoaXRlc3BhY2VzKHRlbXBsYXRlLCB0ZW1wbGF0ZXMucmF3W2luZGV4XSk7XG5cdGNvbnN0IG5ld1Rva2VucyA9IGNvbmNhdFRva2Vucyh0b2tlbnMsIG5leHRUb2tlbnMsIGxlYWRpbmdXaGl0ZXNwYWNlcyk7XG5cblx0aWYgKGluZGV4ID09PSBleHByZXNzaW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gbmV3VG9rZW5zO1xuXHR9XG5cblx0Y29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25zW2luZGV4XTtcblx0Y29uc3QgZXhwcmVzc2lvblRva2VucyA9IEFycmF5LmlzQXJyYXkoZXhwcmVzc2lvbilcblx0XHQ/IGV4cHJlc3Npb24ubWFwKGV4cHJlc3Npb24gPT4gcGFyc2VFeHByZXNzaW9uKGV4cHJlc3Npb24pKVxuXHRcdDogW3BhcnNlRXhwcmVzc2lvbihleHByZXNzaW9uKV07XG5cdHJldHVybiBjb25jYXRUb2tlbnMobmV3VG9rZW5zLCBleHByZXNzaW9uVG9rZW5zLCB0cmFpbGluZ1doaXRlc3BhY2VzKTtcbn07XG5cbi8vIExpa2UgYHN0cmluZy5zcGxpdCgvWyBcXHRcXHJcXG5dKy8pYCBleGNlcHQgbmV3bGluZXMgYW5kIHRhYnMgYXJlOlxuLy8gIC0gaWdub3JlZCB3aGVuIGlucHV0IGFzIGEgYmFja3NsYXNoIHNlcXVlbmNlIGxpa2U6IGBlY2hvIGZvb1xcbiBiYXJgXG4vLyAgLSBub3QgaWdub3JlZCB3aGVuIGlucHV0IGRpcmVjdGx5XG4vLyBUaGUgb25seSB3YXkgdG8gZGlzdGluZ3Vpc2ggdGhvc2UgaW4gSmF2YVNjcmlwdCBpcyB0byB1c2UgYSB0YWdnZWQgdGVtcGxhdGUgYW5kIGNvbXBhcmU6XG4vLyAgLSB0aGUgZmlyc3QgYXJyYXkgYXJndW1lbnQsIHdoaWNoIGRvZXMgbm90IGVzY2FwZSBiYWNrc2xhc2ggc2VxdWVuY2VzXG4vLyAgLSBpdHMgYHJhd2AgcHJvcGVydHksIHdoaWNoIGVzY2FwZXMgdGhlbVxuY29uc3Qgc3BsaXRCeVdoaXRlc3BhY2VzID0gKHRlbXBsYXRlLCByYXdUZW1wbGF0ZSkgPT4ge1xuXHRpZiAocmF3VGVtcGxhdGUubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHtuZXh0VG9rZW5zOiBbXSwgbGVhZGluZ1doaXRlc3BhY2VzOiBmYWxzZSwgdHJhaWxpbmdXaGl0ZXNwYWNlczogZmFsc2V9O1xuXHR9XG5cblx0Y29uc3QgbmV4dFRva2VucyA9IFtdO1xuXHRsZXQgdGVtcGxhdGVTdGFydCA9IDA7XG5cdGNvbnN0IGxlYWRpbmdXaGl0ZXNwYWNlcyA9IERFTElNSVRFUlMuaGFzKHJhd1RlbXBsYXRlWzBdKTtcblxuXHRmb3IgKFxuXHRcdGxldCB0ZW1wbGF0ZUluZGV4ID0gMCwgcmF3SW5kZXggPSAwO1xuXHRcdHRlbXBsYXRlSW5kZXggPCB0ZW1wbGF0ZS5sZW5ndGg7XG5cdFx0dGVtcGxhdGVJbmRleCArPSAxLCByYXdJbmRleCArPSAxXG5cdCkge1xuXHRcdGNvbnN0IHJhd0NoYXJhY3RlciA9IHJhd1RlbXBsYXRlW3Jhd0luZGV4XTtcblx0XHRpZiAoREVMSU1JVEVSUy5oYXMocmF3Q2hhcmFjdGVyKSkge1xuXHRcdFx0aWYgKHRlbXBsYXRlU3RhcnQgIT09IHRlbXBsYXRlSW5kZXgpIHtcblx0XHRcdFx0bmV4dFRva2Vucy5wdXNoKHRlbXBsYXRlLnNsaWNlKHRlbXBsYXRlU3RhcnQsIHRlbXBsYXRlSW5kZXgpKTtcblx0XHRcdH1cblxuXHRcdFx0dGVtcGxhdGVTdGFydCA9IHRlbXBsYXRlSW5kZXggKyAxO1xuXHRcdH0gZWxzZSBpZiAocmF3Q2hhcmFjdGVyID09PSAnXFxcXCcpIHtcblx0XHRcdGNvbnN0IG5leHRSYXdDaGFyYWN0ZXIgPSByYXdUZW1wbGF0ZVtyYXdJbmRleCArIDFdO1xuXHRcdFx0aWYgKG5leHRSYXdDaGFyYWN0ZXIgPT09ICdcXG4nKSB7XG5cdFx0XHRcdC8vIEhhbmRsZXMgZXNjYXBlZCBuZXdsaW5lcyBpbiB0ZW1wbGF0ZXNcblx0XHRcdFx0dGVtcGxhdGVJbmRleCAtPSAxO1xuXHRcdFx0XHRyYXdJbmRleCArPSAxO1xuXHRcdFx0fSBlbHNlIGlmIChuZXh0UmF3Q2hhcmFjdGVyID09PSAndScgJiYgcmF3VGVtcGxhdGVbcmF3SW5kZXggKyAyXSA9PT0gJ3snKSB7XG5cdFx0XHRcdHJhd0luZGV4ID0gcmF3VGVtcGxhdGUuaW5kZXhPZignfScsIHJhd0luZGV4ICsgMyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyYXdJbmRleCArPSBFU0NBUEVfTEVOR1RIW25leHRSYXdDaGFyYWN0ZXJdID8/IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdHJhaWxpbmdXaGl0ZXNwYWNlcyA9IHRlbXBsYXRlU3RhcnQgPT09IHRlbXBsYXRlLmxlbmd0aDtcblx0aWYgKCF0cmFpbGluZ1doaXRlc3BhY2VzKSB7XG5cdFx0bmV4dFRva2Vucy5wdXNoKHRlbXBsYXRlLnNsaWNlKHRlbXBsYXRlU3RhcnQpKTtcblx0fVxuXG5cdHJldHVybiB7bmV4dFRva2VucywgbGVhZGluZ1doaXRlc3BhY2VzLCB0cmFpbGluZ1doaXRlc3BhY2VzfTtcbn07XG5cbmNvbnN0IERFTElNSVRFUlMgPSBuZXcgU2V0KFsnICcsICdcXHQnLCAnXFxyJywgJ1xcbiddKTtcblxuLy8gTnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gYmFja3NsYXNoIGVzY2FwZSBzZXF1ZW5jZXM6IFxcMCBcXHhYWCBvciBcXHVYWFhYXG4vLyBcXGNYIGlzIGFsbG93ZWQgaW4gUmVnRXhwcyBidXQgbm90IGluIHN0cmluZ3Ncbi8vIE9jdGFsIHNlcXVlbmNlcyBhcmUgbm90IGFsbG93ZWQgaW4gc3RyaWN0IG1vZGVcbmNvbnN0IEVTQ0FQRV9MRU5HVEggPSB7eDogMywgdTogNX07XG5cbmNvbnN0IGNvbmNhdFRva2VucyA9ICh0b2tlbnMsIG5leHRUb2tlbnMsIGlzU2VwYXJhdGVkKSA9PiBpc1NlcGFyYXRlZFxuXHR8fCB0b2tlbnMubGVuZ3RoID09PSAwXG5cdHx8IG5leHRUb2tlbnMubGVuZ3RoID09PSAwXG5cdD8gWy4uLnRva2VucywgLi4ubmV4dFRva2Vuc11cblx0OiBbXG5cdFx0Li4udG9rZW5zLnNsaWNlKDAsIC0xKSxcblx0XHRgJHt0b2tlbnMuYXQoLTEpfSR7bmV4dFRva2Vuc1swXX1gLFxuXHRcdC4uLm5leHRUb2tlbnMuc2xpY2UoMSksXG5cdF07XG5cbi8vIEhhbmRsZSBgJHtleHByZXNzaW9ufWAgaW5zaWRlIHRoZSB0ZW1wbGF0ZSBzdHJpbmcgc3ludGF4XG5jb25zdCBwYXJzZUV4cHJlc3Npb24gPSBleHByZXNzaW9uID0+IHtcblx0Y29uc3QgdHlwZU9mRXhwcmVzc2lvbiA9IHR5cGVvZiBleHByZXNzaW9uO1xuXG5cdGlmICh0eXBlT2ZFeHByZXNzaW9uID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBleHByZXNzaW9uO1xuXHR9XG5cblx0aWYgKHR5cGVPZkV4cHJlc3Npb24gPT09ICdudW1iZXInKSB7XG5cdFx0cmV0dXJuIFN0cmluZyhleHByZXNzaW9uKTtcblx0fVxuXG5cdGlmIChpc1BsYWluT2JqZWN0KGV4cHJlc3Npb24pICYmICgnc3Rkb3V0JyBpbiBleHByZXNzaW9uIHx8ICdpc01heEJ1ZmZlcicgaW4gZXhwcmVzc2lvbikpIHtcblx0XHRyZXR1cm4gZ2V0U3VicHJvY2Vzc1Jlc3VsdChleHByZXNzaW9uKTtcblx0fVxuXG5cdGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgQ2hpbGRQcm9jZXNzIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChleHByZXNzaW9uKSA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRlbXBsYXRlLWN1cmx5LWluLXN0cmluZ1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1VuZXhwZWN0ZWQgc3VicHJvY2VzcyBpbiB0ZW1wbGF0ZSBleHByZXNzaW9uLiBQbGVhc2UgdXNlICR7YXdhaXQgc3VicHJvY2Vzc30gaW5zdGVhZCBvZiAke3N1YnByb2Nlc3N9LicpO1xuXHR9XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVW5leHBlY3RlZCBcIiR7dHlwZU9mRXhwcmVzc2lvbn1cIiBpbiB0ZW1wbGF0ZSBleHByZXNzaW9uYCk7XG59O1xuXG5jb25zdCBnZXRTdWJwcm9jZXNzUmVzdWx0ID0gKHtzdGRvdXR9KSA9PiB7XG5cdGlmICh0eXBlb2Ygc3Rkb3V0ID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBzdGRvdXQ7XG5cdH1cblxuXHRpZiAoaXNVaW50OEFycmF5KHN0ZG91dCkpIHtcblx0XHRyZXR1cm4gdWludDhBcnJheVRvU3RyaW5nKHN0ZG91dCk7XG5cdH1cblxuXHRpZiAoc3Rkb3V0ID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdNaXNzaW5nIHJlc3VsdC5zdGRvdXQgaW4gdGVtcGxhdGUgZXhwcmVzc2lvbi4gVGhpcyBpcyBwcm9iYWJseSBkdWUgdG8gdGhlIHByZXZpb3VzIHN1YnByb2Nlc3NcXCcgXCJzdGRvdXRcIiBvcHRpb24uJyk7XG5cdH1cblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmV4cGVjdGVkIFwiJHt0eXBlb2Ygc3Rkb3V0fVwiIHN0ZG91dCBpbiB0ZW1wbGF0ZSBleHByZXNzaW9uYCk7XG59O1xuIiwgImltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBpc1N0YW5kYXJkU3RyZWFtID0gc3RyZWFtID0+IFNUQU5EQVJEX1NUUkVBTVMuaW5jbHVkZXMoc3RyZWFtKTtcbmV4cG9ydCBjb25zdCBTVEFOREFSRF9TVFJFQU1TID0gW3Byb2Nlc3Muc3RkaW4sIHByb2Nlc3Muc3Rkb3V0LCBwcm9jZXNzLnN0ZGVycl07XG5leHBvcnQgY29uc3QgU1RBTkRBUkRfU1RSRUFNU19BTElBU0VTID0gWydzdGRpbicsICdzdGRvdXQnLCAnc3RkZXJyJ107XG5leHBvcnQgY29uc3QgZ2V0U3RyZWFtTmFtZSA9IGZkTnVtYmVyID0+IFNUQU5EQVJEX1NUUkVBTVNfQUxJQVNFU1tmZE51bWJlcl0gPz8gYHN0ZGlvWyR7ZmROdW1iZXJ9XWA7XG4iLCAiaW1wb3J0IHtkZWJ1Z2xvZ30gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2lzLXBsYWluLW9iaic7XG5pbXBvcnQge1NUQU5EQVJEX1NUUkVBTVNfQUxJQVNFU30gZnJvbSAnLi4vdXRpbHMvc3RhbmRhcmQtc3RyZWFtLmpzJztcblxuLy8gU29tZSBvcHRpb25zIGNhbiBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgZm9yIGBzdGRvdXRgL2BzdGRlcnJgL2BmZDNgLlxuLy8gVGhpcyBub3JtYWxpemVzIHRob3NlIHRvIGFycmF5IG9mIHZhbHVlcy5cbi8vIEZvciBleGFtcGxlLCBge3ZlcmJvc2U6IHtzdGRvdXQ6ICdub25lJywgc3RkZXJyOiAnZnVsbCd9fWAgYmVjb21lcyBge3ZlcmJvc2U6IFsnbm9uZScsICdub25lJywgJ2Z1bGwnXX1gXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplRmRTcGVjaWZpY09wdGlvbnMgPSBvcHRpb25zID0+IHtcblx0Y29uc3Qgb3B0aW9uc0NvcHkgPSB7Li4ub3B0aW9uc307XG5cblx0Zm9yIChjb25zdCBvcHRpb25OYW1lIG9mIEZEX1NQRUNJRklDX09QVElPTlMpIHtcblx0XHRvcHRpb25zQ29weVtvcHRpb25OYW1lXSA9IG5vcm1hbGl6ZUZkU3BlY2lmaWNPcHRpb24ob3B0aW9ucywgb3B0aW9uTmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9uc0NvcHk7XG59O1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplRmRTcGVjaWZpY09wdGlvbiA9IChvcHRpb25zLCBvcHRpb25OYW1lKSA9PiB7XG5cdGNvbnN0IG9wdGlvbkJhc2VBcnJheSA9IEFycmF5LmZyb20oe2xlbmd0aDogZ2V0U3RkaW9MZW5ndGgob3B0aW9ucykgKyAxfSk7XG5cdGNvbnN0IG9wdGlvbkFycmF5ID0gbm9ybWFsaXplRmRTcGVjaWZpY1ZhbHVlKG9wdGlvbnNbb3B0aW9uTmFtZV0sIG9wdGlvbkJhc2VBcnJheSwgb3B0aW9uTmFtZSk7XG5cdHJldHVybiBhZGREZWZhdWx0VmFsdWUob3B0aW9uQXJyYXksIG9wdGlvbk5hbWUpO1xufTtcblxuY29uc3QgZ2V0U3RkaW9MZW5ndGggPSAoe3N0ZGlvfSkgPT4gQXJyYXkuaXNBcnJheShzdGRpbylcblx0PyBNYXRoLm1heChzdGRpby5sZW5ndGgsIFNUQU5EQVJEX1NUUkVBTVNfQUxJQVNFUy5sZW5ndGgpXG5cdDogU1RBTkRBUkRfU1RSRUFNU19BTElBU0VTLmxlbmd0aDtcblxuY29uc3Qgbm9ybWFsaXplRmRTcGVjaWZpY1ZhbHVlID0gKG9wdGlvblZhbHVlLCBvcHRpb25BcnJheSwgb3B0aW9uTmFtZSkgPT4gaXNQbGFpbk9iamVjdChvcHRpb25WYWx1ZSlcblx0PyBub3JtYWxpemVPcHRpb25PYmplY3Qob3B0aW9uVmFsdWUsIG9wdGlvbkFycmF5LCBvcHRpb25OYW1lKVxuXHQ6IG9wdGlvbkFycmF5LmZpbGwob3B0aW9uVmFsdWUpO1xuXG5jb25zdCBub3JtYWxpemVPcHRpb25PYmplY3QgPSAob3B0aW9uVmFsdWUsIG9wdGlvbkFycmF5LCBvcHRpb25OYW1lKSA9PiB7XG5cdGZvciAoY29uc3QgZmROYW1lIG9mIE9iamVjdC5rZXlzKG9wdGlvblZhbHVlKS5zb3J0KGNvbXBhcmVGZE5hbWUpKSB7XG5cdFx0Zm9yIChjb25zdCBmZE51bWJlciBvZiBwYXJzZUZkTmFtZShmZE5hbWUsIG9wdGlvbk5hbWUsIG9wdGlvbkFycmF5KSkge1xuXHRcdFx0b3B0aW9uQXJyYXlbZmROdW1iZXJdID0gb3B0aW9uVmFsdWVbZmROYW1lXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9uQXJyYXk7XG59O1xuXG4vLyBFbnN1cmUgcHJpb3JpdHkgb3JkZXIgd2hlbiBzZXR0aW5nIGJvdGggYHN0ZG91dGAvYHN0ZGVycmAsIGBmZDFgL2BmZDJgLCBhbmQgYGFsbGBcbmNvbnN0IGNvbXBhcmVGZE5hbWUgPSAoZmROYW1lQSwgZmROYW1lQikgPT4gZ2V0RmROYW1lT3JkZXIoZmROYW1lQSkgPCBnZXRGZE5hbWVPcmRlcihmZE5hbWVCKSA/IDEgOiAtMTtcblxuY29uc3QgZ2V0RmROYW1lT3JkZXIgPSBmZE5hbWUgPT4ge1xuXHRpZiAoZmROYW1lID09PSAnc3Rkb3V0JyB8fCBmZE5hbWUgPT09ICdzdGRlcnInKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRyZXR1cm4gZmROYW1lID09PSAnYWxsJyA/IDIgOiAxO1xufTtcblxuY29uc3QgcGFyc2VGZE5hbWUgPSAoZmROYW1lLCBvcHRpb25OYW1lLCBvcHRpb25BcnJheSkgPT4ge1xuXHRpZiAoZmROYW1lID09PSAnaXBjJykge1xuXHRcdHJldHVybiBbb3B0aW9uQXJyYXkubGVuZ3RoIC0gMV07XG5cdH1cblxuXHRjb25zdCBmZE51bWJlciA9IHBhcnNlRmQoZmROYW1lKTtcblx0aWYgKGZkTnVtYmVyID09PSB1bmRlZmluZWQgfHwgZmROdW1iZXIgPT09IDApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBcIiR7b3B0aW9uTmFtZX0uJHtmZE5hbWV9XCIgaXMgaW52YWxpZC5cbkl0IG11c3QgYmUgXCIke29wdGlvbk5hbWV9LnN0ZG91dFwiLCBcIiR7b3B0aW9uTmFtZX0uc3RkZXJyXCIsIFwiJHtvcHRpb25OYW1lfS5hbGxcIiwgXCIke29wdGlvbk5hbWV9LmlwY1wiLCBvciBcIiR7b3B0aW9uTmFtZX0uZmQzXCIsIFwiJHtvcHRpb25OYW1lfS5mZDRcIiAoYW5kIHNvIG9uKS5gKTtcblx0fVxuXG5cdGlmIChmZE51bWJlciA+PSBvcHRpb25BcnJheS5sZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBcIiR7b3B0aW9uTmFtZX0uJHtmZE5hbWV9XCIgaXMgaW52YWxpZDogdGhhdCBmaWxlIGRlc2NyaXB0b3IgZG9lcyBub3QgZXhpc3QuXG5QbGVhc2Ugc2V0IHRoZSBcInN0ZGlvXCIgb3B0aW9uIHRvIGVuc3VyZSB0aGF0IGZpbGUgZGVzY3JpcHRvciBleGlzdHMuYCk7XG5cdH1cblxuXHRyZXR1cm4gZmROdW1iZXIgPT09ICdhbGwnID8gWzEsIDJdIDogW2ZkTnVtYmVyXTtcbn07XG5cbi8vIFVzZSB0aGUgc2FtZSBzeW50YXggZm9yIGZkLXNwZWNpZmljIG9wdGlvbnMgYW5kIHRoZSBgZnJvbWAvYHRvYCBvcHRpb25zXG5leHBvcnQgY29uc3QgcGFyc2VGZCA9IGZkTmFtZSA9PiB7XG5cdGlmIChmZE5hbWUgPT09ICdhbGwnKSB7XG5cdFx0cmV0dXJuIGZkTmFtZTtcblx0fVxuXG5cdGlmIChTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMuaW5jbHVkZXMoZmROYW1lKSkge1xuXHRcdHJldHVybiBTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMuaW5kZXhPZihmZE5hbWUpO1xuXHR9XG5cblx0Y29uc3QgcmVnZXhwUmVzdWx0ID0gRkRfUkVHRVhQLmV4ZWMoZmROYW1lKTtcblx0aWYgKHJlZ2V4cFJlc3VsdCAhPT0gbnVsbCkge1xuXHRcdHJldHVybiBOdW1iZXIocmVnZXhwUmVzdWx0WzFdKTtcblx0fVxufTtcblxuY29uc3QgRkRfUkVHRVhQID0gL15mZChcXGQrKSQvO1xuXG5jb25zdCBhZGREZWZhdWx0VmFsdWUgPSAob3B0aW9uQXJyYXksIG9wdGlvbk5hbWUpID0+IG9wdGlvbkFycmF5Lm1hcChvcHRpb25WYWx1ZSA9PiBvcHRpb25WYWx1ZSA9PT0gdW5kZWZpbmVkXG5cdD8gREVGQVVMVF9PUFRJT05TW29wdGlvbk5hbWVdXG5cdDogb3B0aW9uVmFsdWUpO1xuXG4vLyBEZWZhdWx0IHZhbHVlIGZvciB0aGUgYHZlcmJvc2VgIG9wdGlvblxuY29uc3QgdmVyYm9zZURlZmF1bHQgPSBkZWJ1Z2xvZygnZXhlY2EnKS5lbmFibGVkID8gJ2Z1bGwnIDogJ25vbmUnO1xuXG5jb25zdCBERUZBVUxUX09QVElPTlMgPSB7XG5cdGxpbmVzOiBmYWxzZSxcblx0YnVmZmVyOiB0cnVlLFxuXHRtYXhCdWZmZXI6IDEwMDAgKiAxMDAwICogMTAwLFxuXHR2ZXJib3NlOiB2ZXJib3NlRGVmYXVsdCxcblx0c3RyaXBGaW5hbE5ld2xpbmU6IHRydWUsXG59O1xuXG4vLyBMaXN0IG9mIG9wdGlvbnMgd2hpY2ggY2FuIGhhdmUgZGlmZmVyZW50IHZhbHVlcyBmb3IgYHN0ZG91dGAvYHN0ZGVycmBcbmV4cG9ydCBjb25zdCBGRF9TUEVDSUZJQ19PUFRJT05TID0gWydsaW5lcycsICdidWZmZXInLCAnbWF4QnVmZmVyJywgJ3ZlcmJvc2UnLCAnc3RyaXBGaW5hbE5ld2xpbmUnXTtcblxuLy8gUmV0cmlldmUgZmQtc3BlY2lmaWMgb3B0aW9uXG5leHBvcnQgY29uc3QgZ2V0RmRTcGVjaWZpY1ZhbHVlID0gKG9wdGlvbkFycmF5LCBmZE51bWJlcikgPT4gZmROdW1iZXIgPT09ICdpcGMnXG5cdD8gb3B0aW9uQXJyYXkuYXQoLTEpXG5cdDogb3B0aW9uQXJyYXlbZmROdW1iZXJdO1xuIiwgImltcG9ydCB7Z2V0RmRTcGVjaWZpY1ZhbHVlfSBmcm9tICcuLi9hcmd1bWVudHMvc3BlY2lmaWMuanMnO1xuXG4vLyBUaGUgYHZlcmJvc2VgIG9wdGlvbiBjYW4gaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIGZvciBgc3Rkb3V0YC9gc3RkZXJyYFxuZXhwb3J0IGNvbnN0IGlzVmVyYm9zZSA9ICh7dmVyYm9zZX0sIGZkTnVtYmVyKSA9PiBnZXRGZFZlcmJvc2UodmVyYm9zZSwgZmROdW1iZXIpICE9PSAnbm9uZSc7XG5cbi8vIFdoZXRoZXIgSVBDIGFuZCBvdXRwdXQgYW5kIGxvZ2dlZFxuZXhwb3J0IGNvbnN0IGlzRnVsbFZlcmJvc2UgPSAoe3ZlcmJvc2V9LCBmZE51bWJlcikgPT4gIVsnbm9uZScsICdzaG9ydCddLmluY2x1ZGVzKGdldEZkVmVyYm9zZSh2ZXJib3NlLCBmZE51bWJlcikpO1xuXG4vLyBUaGUgYHZlcmJvc2VgIG9wdGlvbiBjYW4gYmUgYSBmdW5jdGlvbiB0byBjdXN0b21pemUgbG9nZ2luZ1xuZXhwb3J0IGNvbnN0IGdldFZlcmJvc2VGdW5jdGlvbiA9ICh7dmVyYm9zZX0sIGZkTnVtYmVyKSA9PiB7XG5cdGNvbnN0IGZkVmVyYm9zZSA9IGdldEZkVmVyYm9zZSh2ZXJib3NlLCBmZE51bWJlcik7XG5cdHJldHVybiBpc1ZlcmJvc2VGdW5jdGlvbihmZFZlcmJvc2UpID8gZmRWZXJib3NlIDogdW5kZWZpbmVkO1xufTtcblxuLy8gV2hlbiB1c2luZyBgdmVyYm9zZToge3N0ZG91dCwgc3RkZXJyLCBmZDMsIGlwY31gOlxuLy8gIC0gYHZlcmJvc2Uuc3Rkb3V0fHN0ZGVycnxmZDNgIGlzIHVzZWQgZm9yICdvdXRwdXQnXG4vLyAgLSBgdmVyYm9zZS5pcGNgIGlzIG9ubHkgdXNlZCBmb3IgJ2lwYydcbi8vICAtIGhpZ2hlc3QgYHZlcmJvc2UuKmAgdmFsdWUgaXMgdXNlZCBmb3IgJ2NvbW1hbmQnLCAnZXJyb3InIGFuZCAnZHVyYXRpb24nXG5jb25zdCBnZXRGZFZlcmJvc2UgPSAodmVyYm9zZSwgZmROdW1iZXIpID0+IGZkTnVtYmVyID09PSB1bmRlZmluZWRcblx0PyBnZXRGZEdlbmVyaWNWZXJib3NlKHZlcmJvc2UpXG5cdDogZ2V0RmRTcGVjaWZpY1ZhbHVlKHZlcmJvc2UsIGZkTnVtYmVyKTtcblxuLy8gV2hlbiB1c2luZyBgdmVyYm9zZToge3N0ZG91dCwgc3RkZXJyLCBmZDMsIGlwY31gIGFuZCBsb2dnaW5nIGlzIG5vdCBzcGVjaWZpYyB0byBhIGZpbGUgZGVzY3JpcHRvci5cbi8vIFdlIHRoZW4gdXNlIHRoZSBoaWdoZXN0IGB2ZXJib3NlLipgIHZhbHVlLCB1c2luZyB0aGUgZm9sbG93aW5nIG9yZGVyOlxuLy8gIC0gZnVuY3Rpb24gPiAnZnVsbCcgPiAnc2hvcnQnID4gJ25vbmUnXG4vLyAgLSBpZiBzZXZlcmFsIGZ1bmN0aW9ucyBhcmUgZGVmaW5lZDogc3Rkb3V0ID4gc3RkZXJyID4gZmQzID4gaXBjXG5jb25zdCBnZXRGZEdlbmVyaWNWZXJib3NlID0gdmVyYm9zZSA9PiB2ZXJib3NlLmZpbmQoZmRWZXJib3NlID0+IGlzVmVyYm9zZUZ1bmN0aW9uKGZkVmVyYm9zZSkpXG5cdD8/IFZFUkJPU0VfVkFMVUVTLmZpbmRMYXN0KGZkVmVyYm9zZSA9PiB2ZXJib3NlLmluY2x1ZGVzKGZkVmVyYm9zZSkpO1xuXG4vLyBXaGV0aGVyIHRoZSBgdmVyYm9zZWAgb3B0aW9uIGlzIGN1c3RvbWl6ZWQgdXNpbmcgYSBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IGlzVmVyYm9zZUZ1bmN0aW9uID0gZmRWZXJib3NlID0+IHR5cGVvZiBmZFZlcmJvc2UgPT09ICdmdW5jdGlvbic7XG5cbmV4cG9ydCBjb25zdCBWRVJCT1NFX1ZBTFVFUyA9IFsnbm9uZScsICdzaG9ydCcsICdmdWxsJ107XG4iLCAiaW1wb3J0IHtwbGF0Zm9ybX0gZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCB7c3RyaXBWVENvbnRyb2xDaGFyYWN0ZXJzfSBmcm9tICdub2RlOnV0aWwnO1xuXG4vLyBDb21wdXRlIGByZXN1bHQuY29tbWFuZGAgYW5kIGByZXN1bHQuZXNjYXBlZENvbW1hbmRgXG5leHBvcnQgY29uc3Qgam9pbkNvbW1hbmQgPSAoZmlsZVBhdGgsIHJhd0FyZ3VtZW50cykgPT4ge1xuXHRjb25zdCBmaWxlQW5kQXJndW1lbnRzID0gW2ZpbGVQYXRoLCAuLi5yYXdBcmd1bWVudHNdO1xuXHRjb25zdCBjb21tYW5kID0gZmlsZUFuZEFyZ3VtZW50cy5qb2luKCcgJyk7XG5cdGNvbnN0IGVzY2FwZWRDb21tYW5kID0gZmlsZUFuZEFyZ3VtZW50c1xuXHRcdC5tYXAoZmlsZUFuZEFyZ3VtZW50ID0+IHF1b3RlU3RyaW5nKGVzY2FwZUNvbnRyb2xDaGFyYWN0ZXJzKGZpbGVBbmRBcmd1bWVudCkpKVxuXHRcdC5qb2luKCcgJyk7XG5cdHJldHVybiB7Y29tbWFuZCwgZXNjYXBlZENvbW1hbmR9O1xufTtcblxuLy8gUmVtb3ZlIEFOU0kgc2VxdWVuY2VzIGFuZCBlc2NhcGUgY29udHJvbCBjaGFyYWN0ZXJzIGFuZCBuZXdsaW5lc1xuZXhwb3J0IGNvbnN0IGVzY2FwZUxpbmVzID0gbGluZXMgPT4gc3RyaXBWVENvbnRyb2xDaGFyYWN0ZXJzKGxpbmVzKVxuXHQuc3BsaXQoJ1xcbicpXG5cdC5tYXAobGluZSA9PiBlc2NhcGVDb250cm9sQ2hhcmFjdGVycyhsaW5lKSlcblx0LmpvaW4oJ1xcbicpO1xuXG5jb25zdCBlc2NhcGVDb250cm9sQ2hhcmFjdGVycyA9IGxpbmUgPT4gbGluZS5yZXBsYWNlQWxsKFNQRUNJQUxfQ0hBUl9SRUdFWFAsIGNoYXJhY3RlciA9PiBlc2NhcGVDb250cm9sQ2hhcmFjdGVyKGNoYXJhY3RlcikpO1xuXG5jb25zdCBlc2NhcGVDb250cm9sQ2hhcmFjdGVyID0gY2hhcmFjdGVyID0+IHtcblx0Y29uc3QgY29tbW9uRXNjYXBlID0gQ09NTU9OX0VTQ0FQRVNbY2hhcmFjdGVyXTtcblx0aWYgKGNvbW1vbkVzY2FwZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNvbW1vbkVzY2FwZTtcblx0fVxuXG5cdGNvbnN0IGNvZGVwb2ludCA9IGNoYXJhY3Rlci5jb2RlUG9pbnRBdCgwKTtcblx0Y29uc3QgY29kZXBvaW50SGV4ID0gY29kZXBvaW50LnRvU3RyaW5nKDE2KTtcblx0cmV0dXJuIGNvZGVwb2ludCA8PSBBU1RSQUxfU1RBUlRcblx0XHQ/IGBcXFxcdSR7Y29kZXBvaW50SGV4LnBhZFN0YXJ0KDQsICcwJyl9YFxuXHRcdDogYFxcXFxVJHtjb2RlcG9pbnRIZXh9YDtcbn07XG5cbi8vIENoYXJhY3RlcnMgdGhhdCB3b3VsZCBjcmVhdGUgaXNzdWVzIHdoZW4gcHJpbnRlZCBhcmUgZXNjYXBlZCB1c2luZyB0aGUgXFx1IG9yIFxcVSBub3RhdGlvbi5cbi8vIFRob3NlIGluY2x1ZGUgY29udHJvbCBjaGFyYWN0ZXJzIGFuZCBuZXdsaW5lcy5cbi8vIFRoZSBcXHUgYW5kIFxcVSBub3RhdGlvbiBpcyBCYXNoIHNwZWNpZmljLCBidXQgdGhlcmUgaXMgbm8gd2F5IHRvIGRvIHRoaXMgaW4gYSBzaGVsbC1hZ25vc3RpYyB3YXkuXG4vLyBTb21lIHNoZWxscyBkbyBub3QgZXZlbiBoYXZlIGEgd2F5IHRvIHByaW50IHRob3NlIGNoYXJhY3RlcnMgaW4gYW4gZXNjYXBlZCBmYXNoaW9uLlxuLy8gVGhlcmVmb3JlLCB3ZSBwcmlvcml0aXplIHByaW50aW5nIHRob3NlIHNhZmVseSwgaW5zdGVhZCBvZiBhbGxvd2luZyB0aG9zZSB0byBiZSBjb3B5LXBhc3RlZC5cbi8vIExpc3Qgb2YgVW5pY29kZSBjaGFyYWN0ZXIgY2F0ZWdvcmllczogaHR0cHM6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9pbmRleC5odG1cbmNvbnN0IGdldFNwZWNpYWxDaGFyUmVnRXhwID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdC8vIFRoaXMgdGhyb3dzIHdoZW4gdXNpbmcgTm9kZS5qcyB3aXRob3V0IElDVSBzdXBwb3J0LlxuXHRcdC8vIFdoZW4gdXNpbmcgYSBSZWdFeHAgbGl0ZXJhbCwgdGhpcyB3b3VsZCB0aHJvdyBhdCBwYXJzaW5nLXRpbWUsIGluc3RlYWQgb2YgcnVudGltZS5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlZ2V4LWxpdGVyYWxzXG5cdFx0cmV0dXJuIG5ldyBSZWdFeHAoJ1xcXFxwe1NlcGFyYXRvcn18XFxcXHB7T3RoZXJ9JywgJ2d1Jyk7XG5cdH0gY2F0Y2gge1xuXHRcdC8vIFNpbWlsYXIgdG8gdGhlIGFib3ZlIFJlZ0V4cCwgYnV0IHdvcmtzIGV2ZW4gd2hlbiBOb2RlLmpzIGhhcyBiZWVuIGJ1aWx0IHdpdGhvdXQgSUNVIHN1cHBvcnQuXG5cdFx0Ly8gVW5saWtlIHRoZSBhYm92ZSBSZWdFeHAsIGl0IG9ubHkgY292ZXJzIHdoaXRlc3BhY2VzIGFuZCBDMC9DMSBjb250cm9sIGNoYXJhY3RlcnMuXG5cdFx0Ly8gSXQgZG9lcyBub3QgY292ZXIgc29tZSBlZGdlIGNhc2VzLCBzdWNoIGFzIFVuaWNvZGUgcmVzZXJ2ZWQgY2hhcmFjdGVycy5cblx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9leGVjYS9pc3N1ZXMvMTE0M1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5cdFx0cmV0dXJuIC9bXFxzXFx1MDAwMC1cXHUwMDFGXFx1MDA3Ri1cXHUwMDlGXFx1MDBBRF0vZztcblx0fVxufTtcblxuY29uc3QgU1BFQ0lBTF9DSEFSX1JFR0VYUCA9IGdldFNwZWNpYWxDaGFyUmVnRXhwKCk7XG5cbi8vIEFjY2VwdGVkIGJ5ICQnLi4uJyBpbiBCYXNoLlxuLy8gRXhjbHVkZSBcXGEgXFxlIFxcdiB3aGljaCBhcmUgYWNjZXB0ZWQgaW4gQmFzaCBidXQgbm90IGluIEphdmFTY3JpcHQgKGV4Y2VwdCBcXHYpIGFuZCBKU09OLlxuY29uc3QgQ09NTU9OX0VTQ0FQRVMgPSB7XG5cdCcgJzogJyAnLFxuXHQnXFxiJzogJ1xcXFxiJyxcblx0J1xcZic6ICdcXFxcZicsXG5cdCdcXG4nOiAnXFxcXG4nLFxuXHQnXFxyJzogJ1xcXFxyJyxcblx0J1xcdCc6ICdcXFxcdCcsXG59O1xuXG4vLyBVcCB1bnRpbCB0aGF0IGNvZGVwb2ludCwgXFx1IG5vdGF0aW9uIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgXFxVXG5jb25zdCBBU1RSQUxfU1RBUlQgPSA2NV81MzU7XG5cbi8vIFNvbWUgY2hhcmFjdGVycyBhcmUgc2hlbGwtc3BlY2lmaWMsIGkuZS4gbmVlZCB0byBiZSBlc2NhcGVkIHdoZW4gdGhlIGNvbW1hbmQgaXMgY29weS1wYXN0ZWQgdGhlbiBydW4uXG4vLyBFc2NhcGluZyBpcyBzaGVsbC1zcGVjaWZpYy4gV2UgY2Fubm90IGtub3cgd2hpY2ggc2hlbGwgaXMgdXNlZDogYHByb2Nlc3MucGxhdGZvcm1gIGRldGVjdGlvbiBpcyBub3QgZW5vdWdoLlxuLy8gRm9yIGV4YW1wbGUsIFdpbmRvd3MgdXNlcnMgY291bGQgYmUgdXNpbmcgYGNtZC5leGVgLCBQb3dlcnNoZWxsIG9yIEJhc2ggZm9yIFdpbmRvd3Mgd2hpY2ggYWxsIHVzZSBkaWZmZXJlbnQgZXNjYXBpbmcuXG4vLyBXZSB1c2UgJy4uLicgb24gVW5peCwgd2hpY2ggaXMgUE9TSVggc2hlbGwgY29tcGxpYW50IGFuZCBlc2NhcGUgYWxsIGNoYXJhY3RlcnMgYnV0ICcgc28gdGhpcyBpcyBmYWlybHkgc2FmZS5cbi8vIE9uIFdpbmRvd3MsIHdlIGFzc3VtZSBjbWQuZXhlIGlzIHVzZWQgYW5kIGVzY2FwZSB3aXRoIFwiLi4uXCIsIHdoaWNoIGFsc28gd29ya3Mgd2l0aCBQb3dlcnNoZWxsLlxuY29uc3QgcXVvdGVTdHJpbmcgPSBlc2NhcGVkQXJndW1lbnQgPT4ge1xuXHRpZiAoTk9fRVNDQVBFX1JFR0VYUC50ZXN0KGVzY2FwZWRBcmd1bWVudCkpIHtcblx0XHRyZXR1cm4gZXNjYXBlZEFyZ3VtZW50O1xuXHR9XG5cblx0cmV0dXJuIHBsYXRmb3JtID09PSAnd2luMzInXG5cdFx0PyBgXCIke2VzY2FwZWRBcmd1bWVudC5yZXBsYWNlQWxsKCdcIicsICdcIlwiJyl9XCJgXG5cdFx0OiBgJyR7ZXNjYXBlZEFyZ3VtZW50LnJlcGxhY2VBbGwoJ1xcJycsICdcXCdcXFxcXFwnXFwnJyl9J2A7XG59O1xuXG5jb25zdCBOT19FU0NBUEVfUkVHRVhQID0gL15bXFx3Li8tXSskLztcbiIsICJpbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1VuaWNvZGVTdXBwb3J0ZWQoKSB7XG5cdGNvbnN0IHtlbnZ9ID0gcHJvY2Vzcztcblx0Y29uc3Qge1RFUk0sIFRFUk1fUFJPR1JBTX0gPSBlbnY7XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICd3aW4zMicpIHtcblx0XHRyZXR1cm4gVEVSTSAhPT0gJ2xpbnV4JzsgLy8gTGludXggY29uc29sZSAoa2VybmVsKVxuXHR9XG5cblx0cmV0dXJuIEJvb2xlYW4oZW52LldUX1NFU1NJT04pIC8vIFdpbmRvd3MgVGVybWluYWxcblx0XHR8fCBCb29sZWFuKGVudi5URVJNSU5VU19TVUJMSU1FKSAvLyBUZXJtaW51cyAoPDAuMi4yNylcblx0XHR8fCBlbnYuQ29uRW11VGFzayA9PT0gJ3tjbWQ6OkNtZGVyfScgLy8gQ29uRW11IGFuZCBjbWRlclxuXHRcdHx8IFRFUk1fUFJPR1JBTSA9PT0gJ1Rlcm1pbnVzLVN1YmxpbWUnXG5cdFx0fHwgVEVSTV9QUk9HUkFNID09PSAndnNjb2RlJ1xuXHRcdHx8IFRFUk0gPT09ICd4dGVybS0yNTZjb2xvcidcblx0XHR8fCBURVJNID09PSAnYWxhY3JpdHR5J1xuXHRcdHx8IFRFUk0gPT09ICdyeHZ0LXVuaWNvZGUnXG5cdFx0fHwgVEVSTSA9PT0gJ3J4dnQtdW5pY29kZS0yNTZjb2xvcidcblx0XHR8fCBlbnYuVEVSTUlOQUxfRU1VTEFUT1IgPT09ICdKZXRCcmFpbnMtSmVkaVRlcm0nO1xufVxuIiwgImltcG9ydCBpc1VuaWNvZGVTdXBwb3J0ZWQgZnJvbSAnaXMtdW5pY29kZS1zdXBwb3J0ZWQnO1xuXG5jb25zdCBjb21tb24gPSB7XG5cdGNpcmNsZVF1ZXN0aW9uTWFyazogJyg/KScsXG5cdHF1ZXN0aW9uTWFya1ByZWZpeDogJyg/KScsXG5cdHNxdWFyZTogJ1x1MjU4OCcsXG5cdHNxdWFyZURhcmtTaGFkZTogJ1x1MjU5MycsXG5cdHNxdWFyZU1lZGl1bVNoYWRlOiAnXHUyNTkyJyxcblx0c3F1YXJlTGlnaHRTaGFkZTogJ1x1MjU5MScsXG5cdHNxdWFyZVRvcDogJ1x1MjU4MCcsXG5cdHNxdWFyZUJvdHRvbTogJ1x1MjU4NCcsXG5cdHNxdWFyZUxlZnQ6ICdcdTI1OEMnLFxuXHRzcXVhcmVSaWdodDogJ1x1MjU5MCcsXG5cdHNxdWFyZUNlbnRlcjogJ1x1MjVBMCcsXG5cdGJ1bGxldDogJ1x1MjVDRicsXG5cdGRvdDogJ1x1MjAyNCcsXG5cdGVsbGlwc2lzOiAnXHUyMDI2Jyxcblx0cG9pbnRlclNtYWxsOiAnXHUyMDNBJyxcblx0dHJpYW5nbGVVcDogJ1x1MjVCMicsXG5cdHRyaWFuZ2xlVXBTbWFsbDogJ1x1MjVCNCcsXG5cdHRyaWFuZ2xlRG93bjogJ1x1MjVCQycsXG5cdHRyaWFuZ2xlRG93blNtYWxsOiAnXHUyNUJFJyxcblx0dHJpYW5nbGVMZWZ0U21hbGw6ICdcdTI1QzInLFxuXHR0cmlhbmdsZVJpZ2h0U21hbGw6ICdcdTI1QjgnLFxuXHRob21lOiAnXHUyMzAyJyxcblx0aGVhcnQ6ICdcdTI2NjUnLFxuXHRtdXNpY05vdGU6ICdcdTI2NkEnLFxuXHRtdXNpY05vdGVCZWFtZWQ6ICdcdTI2NkInLFxuXHRhcnJvd1VwOiAnXHUyMTkxJyxcblx0YXJyb3dEb3duOiAnXHUyMTkzJyxcblx0YXJyb3dMZWZ0OiAnXHUyMTkwJyxcblx0YXJyb3dSaWdodDogJ1x1MjE5MicsXG5cdGFycm93TGVmdFJpZ2h0OiAnXHUyMTk0Jyxcblx0YXJyb3dVcERvd246ICdcdTIxOTUnLFxuXHRhbG1vc3RFcXVhbDogJ1x1MjI0OCcsXG5cdG5vdEVxdWFsOiAnXHUyMjYwJyxcblx0bGVzc09yRXF1YWw6ICdcdTIyNjQnLFxuXHRncmVhdGVyT3JFcXVhbDogJ1x1MjI2NScsXG5cdGlkZW50aWNhbDogJ1x1MjI2MScsXG5cdGluZmluaXR5OiAnXHUyMjFFJyxcblx0c3Vic2NyaXB0WmVybzogJ1x1MjA4MCcsXG5cdHN1YnNjcmlwdE9uZTogJ1x1MjA4MScsXG5cdHN1YnNjcmlwdFR3bzogJ1x1MjA4MicsXG5cdHN1YnNjcmlwdFRocmVlOiAnXHUyMDgzJyxcblx0c3Vic2NyaXB0Rm91cjogJ1x1MjA4NCcsXG5cdHN1YnNjcmlwdEZpdmU6ICdcdTIwODUnLFxuXHRzdWJzY3JpcHRTaXg6ICdcdTIwODYnLFxuXHRzdWJzY3JpcHRTZXZlbjogJ1x1MjA4NycsXG5cdHN1YnNjcmlwdEVpZ2h0OiAnXHUyMDg4Jyxcblx0c3Vic2NyaXB0TmluZTogJ1x1MjA4OScsXG5cdG9uZUhhbGY6ICdcdTAwQkQnLFxuXHRvbmVUaGlyZDogJ1x1MjE1MycsXG5cdG9uZVF1YXJ0ZXI6ICdcdTAwQkMnLFxuXHRvbmVGaWZ0aDogJ1x1MjE1NScsXG5cdG9uZVNpeHRoOiAnXHUyMTU5Jyxcblx0b25lRWlnaHRoOiAnXHUyMTVCJyxcblx0dHdvVGhpcmRzOiAnXHUyMTU0Jyxcblx0dHdvRmlmdGhzOiAnXHUyMTU2Jyxcblx0dGhyZWVRdWFydGVyczogJ1x1MDBCRScsXG5cdHRocmVlRmlmdGhzOiAnXHUyMTU3Jyxcblx0dGhyZWVFaWdodGhzOiAnXHUyMTVDJyxcblx0Zm91ckZpZnRoczogJ1x1MjE1OCcsXG5cdGZpdmVTaXh0aHM6ICdcdTIxNUEnLFxuXHRmaXZlRWlnaHRoczogJ1x1MjE1RCcsXG5cdHNldmVuRWlnaHRoczogJ1x1MjE1RScsXG5cdGxpbmU6ICdcdTI1MDAnLFxuXHRsaW5lQm9sZDogJ1x1MjUwMScsXG5cdGxpbmVEb3VibGU6ICdcdTI1NTAnLFxuXHRsaW5lRGFzaGVkMDogJ1x1MjUwNCcsXG5cdGxpbmVEYXNoZWQxOiAnXHUyNTA1Jyxcblx0bGluZURhc2hlZDI6ICdcdTI1MDgnLFxuXHRsaW5lRGFzaGVkMzogJ1x1MjUwOScsXG5cdGxpbmVEYXNoZWQ0OiAnXHUyNTRDJyxcblx0bGluZURhc2hlZDU6ICdcdTI1NEQnLFxuXHRsaW5lRGFzaGVkNjogJ1x1MjU3NCcsXG5cdGxpbmVEYXNoZWQ3OiAnXHUyNTc2Jyxcblx0bGluZURhc2hlZDg6ICdcdTI1NzgnLFxuXHRsaW5lRGFzaGVkOTogJ1x1MjU3QScsXG5cdGxpbmVEYXNoZWQxMDogJ1x1MjU3QycsXG5cdGxpbmVEYXNoZWQxMTogJ1x1MjU3RScsXG5cdGxpbmVEYXNoZWQxMjogJ1x1MjIxMicsXG5cdGxpbmVEYXNoZWQxMzogJ1x1MjAxMycsXG5cdGxpbmVEYXNoZWQxNDogJ1x1MjAxMCcsXG5cdGxpbmVEYXNoZWQxNTogJ1x1MjA0MycsXG5cdGxpbmVWZXJ0aWNhbDogJ1x1MjUwMicsXG5cdGxpbmVWZXJ0aWNhbEJvbGQ6ICdcdTI1MDMnLFxuXHRsaW5lVmVydGljYWxEb3VibGU6ICdcdTI1NTEnLFxuXHRsaW5lVmVydGljYWxEYXNoZWQwOiAnXHUyNTA2Jyxcblx0bGluZVZlcnRpY2FsRGFzaGVkMTogJ1x1MjUwNycsXG5cdGxpbmVWZXJ0aWNhbERhc2hlZDI6ICdcdTI1MEEnLFxuXHRsaW5lVmVydGljYWxEYXNoZWQzOiAnXHUyNTBCJyxcblx0bGluZVZlcnRpY2FsRGFzaGVkNDogJ1x1MjU0RScsXG5cdGxpbmVWZXJ0aWNhbERhc2hlZDU6ICdcdTI1NEYnLFxuXHRsaW5lVmVydGljYWxEYXNoZWQ2OiAnXHUyNTc1Jyxcblx0bGluZVZlcnRpY2FsRGFzaGVkNzogJ1x1MjU3NycsXG5cdGxpbmVWZXJ0aWNhbERhc2hlZDg6ICdcdTI1NzknLFxuXHRsaW5lVmVydGljYWxEYXNoZWQ5OiAnXHUyNTdCJyxcblx0bGluZVZlcnRpY2FsRGFzaGVkMTA6ICdcdTI1N0QnLFxuXHRsaW5lVmVydGljYWxEYXNoZWQxMTogJ1x1MjU3RicsXG5cdGxpbmVEb3duTGVmdDogJ1x1MjUxMCcsXG5cdGxpbmVEb3duTGVmdEFyYzogJ1x1MjU2RScsXG5cdGxpbmVEb3duQm9sZExlZnRCb2xkOiAnXHUyNTEzJyxcblx0bGluZURvd25Cb2xkTGVmdDogJ1x1MjUxMicsXG5cdGxpbmVEb3duTGVmdEJvbGQ6ICdcdTI1MTEnLFxuXHRsaW5lRG93bkRvdWJsZUxlZnREb3VibGU6ICdcdTI1NTcnLFxuXHRsaW5lRG93bkRvdWJsZUxlZnQ6ICdcdTI1NTYnLFxuXHRsaW5lRG93bkxlZnREb3VibGU6ICdcdTI1NTUnLFxuXHRsaW5lRG93blJpZ2h0OiAnXHUyNTBDJyxcblx0bGluZURvd25SaWdodEFyYzogJ1x1MjU2RCcsXG5cdGxpbmVEb3duQm9sZFJpZ2h0Qm9sZDogJ1x1MjUwRicsXG5cdGxpbmVEb3duQm9sZFJpZ2h0OiAnXHUyNTBFJyxcblx0bGluZURvd25SaWdodEJvbGQ6ICdcdTI1MEQnLFxuXHRsaW5lRG93bkRvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTU0Jyxcblx0bGluZURvd25Eb3VibGVSaWdodDogJ1x1MjU1MycsXG5cdGxpbmVEb3duUmlnaHREb3VibGU6ICdcdTI1NTInLFxuXHRsaW5lVXBMZWZ0OiAnXHUyNTE4Jyxcblx0bGluZVVwTGVmdEFyYzogJ1x1MjU2RicsXG5cdGxpbmVVcEJvbGRMZWZ0Qm9sZDogJ1x1MjUxQicsXG5cdGxpbmVVcEJvbGRMZWZ0OiAnXHUyNTFBJyxcblx0bGluZVVwTGVmdEJvbGQ6ICdcdTI1MTknLFxuXHRsaW5lVXBEb3VibGVMZWZ0RG91YmxlOiAnXHUyNTVEJyxcblx0bGluZVVwRG91YmxlTGVmdDogJ1x1MjU1QycsXG5cdGxpbmVVcExlZnREb3VibGU6ICdcdTI1NUInLFxuXHRsaW5lVXBSaWdodDogJ1x1MjUxNCcsXG5cdGxpbmVVcFJpZ2h0QXJjOiAnXHUyNTcwJyxcblx0bGluZVVwQm9sZFJpZ2h0Qm9sZDogJ1x1MjUxNycsXG5cdGxpbmVVcEJvbGRSaWdodDogJ1x1MjUxNicsXG5cdGxpbmVVcFJpZ2h0Qm9sZDogJ1x1MjUxNScsXG5cdGxpbmVVcERvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTVBJyxcblx0bGluZVVwRG91YmxlUmlnaHQ6ICdcdTI1NTknLFxuXHRsaW5lVXBSaWdodERvdWJsZTogJ1x1MjU1OCcsXG5cdGxpbmVVcERvd25MZWZ0OiAnXHUyNTI0Jyxcblx0bGluZVVwQm9sZERvd25Cb2xkTGVmdEJvbGQ6ICdcdTI1MkInLFxuXHRsaW5lVXBCb2xkRG93bkJvbGRMZWZ0OiAnXHUyNTI4Jyxcblx0bGluZVVwRG93bkxlZnRCb2xkOiAnXHUyNTI1Jyxcblx0bGluZVVwQm9sZERvd25MZWZ0Qm9sZDogJ1x1MjUyOScsXG5cdGxpbmVVcERvd25Cb2xkTGVmdEJvbGQ6ICdcdTI1MkEnLFxuXHRsaW5lVXBEb3duQm9sZExlZnQ6ICdcdTI1MjcnLFxuXHRsaW5lVXBCb2xkRG93bkxlZnQ6ICdcdTI1MjYnLFxuXHRsaW5lVXBEb3VibGVEb3duRG91YmxlTGVmdERvdWJsZTogJ1x1MjU2MycsXG5cdGxpbmVVcERvdWJsZURvd25Eb3VibGVMZWZ0OiAnXHUyNTYyJyxcblx0bGluZVVwRG93bkxlZnREb3VibGU6ICdcdTI1NjEnLFxuXHRsaW5lVXBEb3duUmlnaHQ6ICdcdTI1MUMnLFxuXHRsaW5lVXBCb2xkRG93bkJvbGRSaWdodEJvbGQ6ICdcdTI1MjMnLFxuXHRsaW5lVXBCb2xkRG93bkJvbGRSaWdodDogJ1x1MjUyMCcsXG5cdGxpbmVVcERvd25SaWdodEJvbGQ6ICdcdTI1MUQnLFxuXHRsaW5lVXBCb2xkRG93blJpZ2h0Qm9sZDogJ1x1MjUyMScsXG5cdGxpbmVVcERvd25Cb2xkUmlnaHRCb2xkOiAnXHUyNTIyJyxcblx0bGluZVVwRG93bkJvbGRSaWdodDogJ1x1MjUxRicsXG5cdGxpbmVVcEJvbGREb3duUmlnaHQ6ICdcdTI1MUUnLFxuXHRsaW5lVXBEb3VibGVEb3duRG91YmxlUmlnaHREb3VibGU6ICdcdTI1NjAnLFxuXHRsaW5lVXBEb3VibGVEb3duRG91YmxlUmlnaHQ6ICdcdTI1NUYnLFxuXHRsaW5lVXBEb3duUmlnaHREb3VibGU6ICdcdTI1NUUnLFxuXHRsaW5lRG93bkxlZnRSaWdodDogJ1x1MjUyQycsXG5cdGxpbmVEb3duQm9sZExlZnRCb2xkUmlnaHRCb2xkOiAnXHUyNTMzJyxcblx0bGluZURvd25MZWZ0Qm9sZFJpZ2h0Qm9sZDogJ1x1MjUyRicsXG5cdGxpbmVEb3duQm9sZExlZnRSaWdodDogJ1x1MjUzMCcsXG5cdGxpbmVEb3duQm9sZExlZnRCb2xkUmlnaHQ6ICdcdTI1MzEnLFxuXHRsaW5lRG93bkJvbGRMZWZ0UmlnaHRCb2xkOiAnXHUyNTMyJyxcblx0bGluZURvd25MZWZ0UmlnaHRCb2xkOiAnXHUyNTJFJyxcblx0bGluZURvd25MZWZ0Qm9sZFJpZ2h0OiAnXHUyNTJEJyxcblx0bGluZURvd25Eb3VibGVMZWZ0RG91YmxlUmlnaHREb3VibGU6ICdcdTI1NjYnLFxuXHRsaW5lRG93bkRvdWJsZUxlZnRSaWdodDogJ1x1MjU2NScsXG5cdGxpbmVEb3duTGVmdERvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTY0Jyxcblx0bGluZVVwTGVmdFJpZ2h0OiAnXHUyNTM0Jyxcblx0bGluZVVwQm9sZExlZnRCb2xkUmlnaHRCb2xkOiAnXHUyNTNCJyxcblx0bGluZVVwTGVmdEJvbGRSaWdodEJvbGQ6ICdcdTI1MzcnLFxuXHRsaW5lVXBCb2xkTGVmdFJpZ2h0OiAnXHUyNTM4Jyxcblx0bGluZVVwQm9sZExlZnRCb2xkUmlnaHQ6ICdcdTI1MzknLFxuXHRsaW5lVXBCb2xkTGVmdFJpZ2h0Qm9sZDogJ1x1MjUzQScsXG5cdGxpbmVVcExlZnRSaWdodEJvbGQ6ICdcdTI1MzYnLFxuXHRsaW5lVXBMZWZ0Qm9sZFJpZ2h0OiAnXHUyNTM1Jyxcblx0bGluZVVwRG91YmxlTGVmdERvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTY5Jyxcblx0bGluZVVwRG91YmxlTGVmdFJpZ2h0OiAnXHUyNTY4Jyxcblx0bGluZVVwTGVmdERvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTY3Jyxcblx0bGluZVVwRG93bkxlZnRSaWdodDogJ1x1MjUzQycsXG5cdGxpbmVVcEJvbGREb3duQm9sZExlZnRCb2xkUmlnaHRCb2xkOiAnXHUyNTRCJyxcblx0bGluZVVwRG93bkJvbGRMZWZ0Qm9sZFJpZ2h0Qm9sZDogJ1x1MjU0OCcsXG5cdGxpbmVVcEJvbGREb3duTGVmdEJvbGRSaWdodEJvbGQ6ICdcdTI1NDcnLFxuXHRsaW5lVXBCb2xkRG93bkJvbGRMZWZ0UmlnaHRCb2xkOiAnXHUyNTRBJyxcblx0bGluZVVwQm9sZERvd25Cb2xkTGVmdEJvbGRSaWdodDogJ1x1MjU0OScsXG5cdGxpbmVVcEJvbGREb3duTGVmdFJpZ2h0OiAnXHUyNTQwJyxcblx0bGluZVVwRG93bkJvbGRMZWZ0UmlnaHQ6ICdcdTI1NDEnLFxuXHRsaW5lVXBEb3duTGVmdEJvbGRSaWdodDogJ1x1MjUzRCcsXG5cdGxpbmVVcERvd25MZWZ0UmlnaHRCb2xkOiAnXHUyNTNFJyxcblx0bGluZVVwQm9sZERvd25Cb2xkTGVmdFJpZ2h0OiAnXHUyNTQyJyxcblx0bGluZVVwRG93bkxlZnRCb2xkUmlnaHRCb2xkOiAnXHUyNTNGJyxcblx0bGluZVVwQm9sZERvd25MZWZ0Qm9sZFJpZ2h0OiAnXHUyNTQzJyxcblx0bGluZVVwQm9sZERvd25MZWZ0UmlnaHRCb2xkOiAnXHUyNTQ0Jyxcblx0bGluZVVwRG93bkJvbGRMZWZ0Qm9sZFJpZ2h0OiAnXHUyNTQ1Jyxcblx0bGluZVVwRG93bkJvbGRMZWZ0UmlnaHRCb2xkOiAnXHUyNTQ2Jyxcblx0bGluZVVwRG91YmxlRG93bkRvdWJsZUxlZnREb3VibGVSaWdodERvdWJsZTogJ1x1MjU2QycsXG5cdGxpbmVVcERvdWJsZURvd25Eb3VibGVMZWZ0UmlnaHQ6ICdcdTI1NkInLFxuXHRsaW5lVXBEb3duTGVmdERvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTZBJyxcblx0bGluZUNyb3NzOiAnXHUyNTczJyxcblx0bGluZUJhY2tzbGFzaDogJ1x1MjU3MicsXG5cdGxpbmVTbGFzaDogJ1x1MjU3MScsXG59O1xuXG5jb25zdCBzcGVjaWFsTWFpblN5bWJvbHMgPSB7XG5cdHRpY2s6ICdcdTI3MTQnLFxuXHRpbmZvOiAnXHUyMTM5Jyxcblx0d2FybmluZzogJ1x1MjZBMCcsXG5cdGNyb3NzOiAnXHUyNzE4Jyxcblx0c3F1YXJlU21hbGw6ICdcdTI1RkInLFxuXHRzcXVhcmVTbWFsbEZpbGxlZDogJ1x1MjVGQycsXG5cdGNpcmNsZTogJ1x1MjVFRicsXG5cdGNpcmNsZUZpbGxlZDogJ1x1MjVDOScsXG5cdGNpcmNsZURvdHRlZDogJ1x1MjVDQycsXG5cdGNpcmNsZURvdWJsZTogJ1x1MjVDRScsXG5cdGNpcmNsZUNpcmNsZTogJ1x1MjRERScsXG5cdGNpcmNsZUNyb3NzOiAnXHUyNEU3Jyxcblx0Y2lyY2xlUGlwZTogJ1x1MjRCRScsXG5cdHJhZGlvT246ICdcdTI1QzknLFxuXHRyYWRpb09mZjogJ1x1MjVFRicsXG5cdGNoZWNrYm94T246ICdcdTI2MTInLFxuXHRjaGVja2JveE9mZjogJ1x1MjYxMCcsXG5cdGNoZWNrYm94Q2lyY2xlT246ICdcdTI0RTcnLFxuXHRjaGVja2JveENpcmNsZU9mZjogJ1x1MjRCRScsXG5cdHBvaW50ZXI6ICdcdTI3NkYnLFxuXHR0cmlhbmdsZVVwT3V0bGluZTogJ1x1MjVCMycsXG5cdHRyaWFuZ2xlTGVmdDogJ1x1MjVDMCcsXG5cdHRyaWFuZ2xlUmlnaHQ6ICdcdTI1QjYnLFxuXHRsb3plbmdlOiAnXHUyNUM2Jyxcblx0bG96ZW5nZU91dGxpbmU6ICdcdTI1QzcnLFxuXHRoYW1idXJnZXI6ICdcdTI2MzAnLFxuXHRzbWlsZXk6ICdcdTMyRTEnLFxuXHRtdXN0YWNoZTogJ1x1MERGNCcsXG5cdHN0YXI6ICdcdTI2MDUnLFxuXHRwbGF5OiAnXHUyNUI2Jyxcblx0bm9kZWpzOiAnXHUyQjIyJyxcblx0b25lU2V2ZW50aDogJ1x1MjE1MCcsXG5cdG9uZU5pbnRoOiAnXHUyMTUxJyxcblx0b25lVGVudGg6ICdcdTIxNTInLFxufTtcblxuY29uc3Qgc3BlY2lhbEZhbGxiYWNrU3ltYm9scyA9IHtcblx0dGljazogJ1x1MjIxQScsXG5cdGluZm86ICdpJyxcblx0d2FybmluZzogJ1x1MjAzQycsXG5cdGNyb3NzOiAnXHUwMEQ3Jyxcblx0c3F1YXJlU21hbGw6ICdcdTI1QTEnLFxuXHRzcXVhcmVTbWFsbEZpbGxlZDogJ1x1MjVBMCcsXG5cdGNpcmNsZTogJyggKScsXG5cdGNpcmNsZUZpbGxlZDogJygqKScsXG5cdGNpcmNsZURvdHRlZDogJyggKScsXG5cdGNpcmNsZURvdWJsZTogJyggKScsXG5cdGNpcmNsZUNpcmNsZTogJyhcdTI1Q0IpJyxcblx0Y2lyY2xlQ3Jvc3M6ICcoXHUwMEQ3KScsXG5cdGNpcmNsZVBpcGU6ICcoXHUyNTAyKScsXG5cdHJhZGlvT246ICcoKiknLFxuXHRyYWRpb09mZjogJyggKScsXG5cdGNoZWNrYm94T246ICdbXHUwMEQ3XScsXG5cdGNoZWNrYm94T2ZmOiAnWyBdJyxcblx0Y2hlY2tib3hDaXJjbGVPbjogJyhcdTAwRDcpJyxcblx0Y2hlY2tib3hDaXJjbGVPZmY6ICcoICknLFxuXHRwb2ludGVyOiAnPicsXG5cdHRyaWFuZ2xlVXBPdXRsaW5lOiAnXHUyMjA2Jyxcblx0dHJpYW5nbGVMZWZ0OiAnXHUyNUM0Jyxcblx0dHJpYW5nbGVSaWdodDogJ1x1MjVCQScsXG5cdGxvemVuZ2U6ICdcdTI2NjYnLFxuXHRsb3plbmdlT3V0bGluZTogJ1x1MjVDQScsXG5cdGhhbWJ1cmdlcjogJ1x1MjI2MScsXG5cdHNtaWxleTogJ1x1MjYzQScsXG5cdG11c3RhY2hlOiAnXHUyNTBDXHUyNTAwXHUyNTEwJyxcblx0c3RhcjogJ1x1MjczNicsXG5cdHBsYXk6ICdcdTI1QkEnLFxuXHRub2RlanM6ICdcdTI2NjYnLFxuXHRvbmVTZXZlbnRoOiAnMS83Jyxcblx0b25lTmludGg6ICcxLzknLFxuXHRvbmVUZW50aDogJzEvMTAnLFxufTtcblxuZXhwb3J0IGNvbnN0IG1haW5TeW1ib2xzID0gey4uLmNvbW1vbiwgLi4uc3BlY2lhbE1haW5TeW1ib2xzfTtcbmV4cG9ydCBjb25zdCBmYWxsYmFja1N5bWJvbHMgPSB7Li4uY29tbW9uLCAuLi5zcGVjaWFsRmFsbGJhY2tTeW1ib2xzfTtcblxuY29uc3Qgc2hvdWxkVXNlTWFpbiA9IGlzVW5pY29kZVN1cHBvcnRlZCgpO1xuY29uc3QgZmlndXJlcyA9IHNob3VsZFVzZU1haW4gPyBtYWluU3ltYm9scyA6IGZhbGxiYWNrU3ltYm9scztcbmV4cG9ydCBkZWZhdWx0IGZpZ3VyZXM7XG5cbmNvbnN0IHJlcGxhY2VtZW50cyA9IE9iamVjdC5lbnRyaWVzKHNwZWNpYWxNYWluU3ltYm9scyk7XG5cbi8vIE9uIHRlcm1pbmFscyB3aGljaCBkbyBub3Qgc3VwcG9ydCBVbmljb2RlIHN5bWJvbHMsIHN1YnN0aXR1dGUgdGhlbSB0byBvdGhlciBzeW1ib2xzXG5leHBvcnQgY29uc3QgcmVwbGFjZVN5bWJvbHMgPSAoc3RyaW5nLCB7dXNlRmFsbGJhY2sgPSAhc2hvdWxkVXNlTWFpbn0gPSB7fSkgPT4ge1xuXHRpZiAodXNlRmFsbGJhY2spIHtcblx0XHRmb3IgKGNvbnN0IFtrZXksIG1haW5TeW1ib2xdIG9mIHJlcGxhY2VtZW50cykge1xuXHRcdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2VBbGwobWFpblN5bWJvbCwgZmFsbGJhY2tTeW1ib2xzW2tleV0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHJpbmc7XG59O1xuIiwgImltcG9ydCB0dHkgZnJvbSAnbm9kZTp0dHknO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8td2FybmluZy1jb21tZW50c1xuLy8gVE9ETzogVXNlIGEgYmV0dGVyIG1ldGhvZCB3aGVuIGl0J3MgYWRkZWQgdG8gTm9kZS5qcyAoaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL3B1bGwvNDAyNDApXG4vLyBMb3RzIG9mIG9wdGlvbmFscyBoZXJlIHRvIHN1cHBvcnQgRGVuby5cbmNvbnN0IGhhc0NvbG9ycyA9IHR0eT8uV3JpdGVTdHJlYW0/LnByb3RvdHlwZT8uaGFzQ29sb3JzPy4oKSA/PyBmYWxzZTtcblxuY29uc3QgZm9ybWF0ID0gKG9wZW4sIGNsb3NlKSA9PiB7XG5cdGlmICghaGFzQ29sb3JzKSB7XG5cdFx0cmV0dXJuIGlucHV0ID0+IGlucHV0O1xuXHR9XG5cblx0Y29uc3Qgb3BlbkNvZGUgPSBgXFx1MDAxQlske29wZW59bWA7XG5cdGNvbnN0IGNsb3NlQ29kZSA9IGBcXHUwMDFCWyR7Y2xvc2V9bWA7XG5cblx0cmV0dXJuIGlucHV0ID0+IHtcblx0XHRjb25zdCBzdHJpbmcgPSBpbnB1dCArICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uIC0tIFRoaXMgaXMgZmFzdGVyLlxuXHRcdGxldCBpbmRleCA9IHN0cmluZy5pbmRleE9mKGNsb3NlQ29kZSk7XG5cblx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHQvLyBOb3RlOiBJbnRlbnRpb25hbGx5IG5vdCB1c2luZyBzdHJpbmcgaW50ZXJwb2xhdGlvbiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cblx0XHRcdHJldHVybiBvcGVuQ29kZSArIHN0cmluZyArIGNsb3NlQ29kZTtcblx0XHR9XG5cblx0XHQvLyBIYW5kbGUgbmVzdGVkIGNvbG9ycy5cblxuXHRcdC8vIFdlIGNvdWxkIGhhdmUgZG9uZSB0aGlzLCBidXQgaXQncyB0b28gc2xvdyAoYXMgb2YgTm9kZS5qcyAyMikuXG5cdFx0Ly8gcmV0dXJuIG9wZW5Db2RlICsgc3RyaW5nLnJlcGxhY2VBbGwoY2xvc2VDb2RlLCBvcGVuQ29kZSkgKyBjbG9zZUNvZGU7XG5cblx0XHRsZXQgcmVzdWx0ID0gb3BlbkNvZGU7XG5cdFx0bGV0IGxhc3RJbmRleCA9IDA7XG5cblx0XHR3aGlsZSAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRyZXN1bHQgKz0gc3RyaW5nLnNsaWNlKGxhc3RJbmRleCwgaW5kZXgpICsgb3BlbkNvZGU7XG5cdFx0XHRsYXN0SW5kZXggPSBpbmRleCArIGNsb3NlQ29kZS5sZW5ndGg7XG5cdFx0XHRpbmRleCA9IHN0cmluZy5pbmRleE9mKGNsb3NlQ29kZSwgbGFzdEluZGV4KTtcblx0XHR9XG5cblx0XHRyZXN1bHQgKz0gc3RyaW5nLnNsaWNlKGxhc3RJbmRleCkgKyBjbG9zZUNvZGU7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0ID0gZm9ybWF0KDAsIDApO1xuZXhwb3J0IGNvbnN0IGJvbGQgPSBmb3JtYXQoMSwgMjIpO1xuZXhwb3J0IGNvbnN0IGRpbSA9IGZvcm1hdCgyLCAyMik7XG5leHBvcnQgY29uc3QgaXRhbGljID0gZm9ybWF0KDMsIDIzKTtcbmV4cG9ydCBjb25zdCB1bmRlcmxpbmUgPSBmb3JtYXQoNCwgMjQpO1xuZXhwb3J0IGNvbnN0IG92ZXJsaW5lID0gZm9ybWF0KDUzLCA1NSk7XG5leHBvcnQgY29uc3QgaW52ZXJzZSA9IGZvcm1hdCg3LCAyNyk7XG5leHBvcnQgY29uc3QgaGlkZGVuID0gZm9ybWF0KDgsIDI4KTtcbmV4cG9ydCBjb25zdCBzdHJpa2V0aHJvdWdoID0gZm9ybWF0KDksIDI5KTtcblxuZXhwb3J0IGNvbnN0IGJsYWNrID0gZm9ybWF0KDMwLCAzOSk7XG5leHBvcnQgY29uc3QgcmVkID0gZm9ybWF0KDMxLCAzOSk7XG5leHBvcnQgY29uc3QgZ3JlZW4gPSBmb3JtYXQoMzIsIDM5KTtcbmV4cG9ydCBjb25zdCB5ZWxsb3cgPSBmb3JtYXQoMzMsIDM5KTtcbmV4cG9ydCBjb25zdCBibHVlID0gZm9ybWF0KDM0LCAzOSk7XG5leHBvcnQgY29uc3QgbWFnZW50YSA9IGZvcm1hdCgzNSwgMzkpO1xuZXhwb3J0IGNvbnN0IGN5YW4gPSBmb3JtYXQoMzYsIDM5KTtcbmV4cG9ydCBjb25zdCB3aGl0ZSA9IGZvcm1hdCgzNywgMzkpO1xuZXhwb3J0IGNvbnN0IGdyYXkgPSBmb3JtYXQoOTAsIDM5KTtcblxuZXhwb3J0IGNvbnN0IGJnQmxhY2sgPSBmb3JtYXQoNDAsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ1JlZCA9IGZvcm1hdCg0MSwgNDkpO1xuZXhwb3J0IGNvbnN0IGJnR3JlZW4gPSBmb3JtYXQoNDIsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ1llbGxvdyA9IGZvcm1hdCg0MywgNDkpO1xuZXhwb3J0IGNvbnN0IGJnQmx1ZSA9IGZvcm1hdCg0NCwgNDkpO1xuZXhwb3J0IGNvbnN0IGJnTWFnZW50YSA9IGZvcm1hdCg0NSwgNDkpO1xuZXhwb3J0IGNvbnN0IGJnQ3lhbiA9IGZvcm1hdCg0NiwgNDkpO1xuZXhwb3J0IGNvbnN0IGJnV2hpdGUgPSBmb3JtYXQoNDcsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ0dyYXkgPSBmb3JtYXQoMTAwLCA0OSk7XG5cbmV4cG9ydCBjb25zdCByZWRCcmlnaHQgPSBmb3JtYXQoOTEsIDM5KTtcbmV4cG9ydCBjb25zdCBncmVlbkJyaWdodCA9IGZvcm1hdCg5MiwgMzkpO1xuZXhwb3J0IGNvbnN0IHllbGxvd0JyaWdodCA9IGZvcm1hdCg5MywgMzkpO1xuZXhwb3J0IGNvbnN0IGJsdWVCcmlnaHQgPSBmb3JtYXQoOTQsIDM5KTtcbmV4cG9ydCBjb25zdCBtYWdlbnRhQnJpZ2h0ID0gZm9ybWF0KDk1LCAzOSk7XG5leHBvcnQgY29uc3QgY3lhbkJyaWdodCA9IGZvcm1hdCg5NiwgMzkpO1xuZXhwb3J0IGNvbnN0IHdoaXRlQnJpZ2h0ID0gZm9ybWF0KDk3LCAzOSk7XG5cbmV4cG9ydCBjb25zdCBiZ1JlZEJyaWdodCA9IGZvcm1hdCgxMDEsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ0dyZWVuQnJpZ2h0ID0gZm9ybWF0KDEwMiwgNDkpO1xuZXhwb3J0IGNvbnN0IGJnWWVsbG93QnJpZ2h0ID0gZm9ybWF0KDEwMywgNDkpO1xuZXhwb3J0IGNvbnN0IGJnQmx1ZUJyaWdodCA9IGZvcm1hdCgxMDQsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ01hZ2VudGFCcmlnaHQgPSBmb3JtYXQoMTA1LCA0OSk7XG5leHBvcnQgY29uc3QgYmdDeWFuQnJpZ2h0ID0gZm9ybWF0KDEwNiwgNDkpO1xuZXhwb3J0IGNvbnN0IGJnV2hpdGVCcmlnaHQgPSBmb3JtYXQoMTA3LCA0OSk7XG4iLCAiZXhwb3J0ICogZnJvbSAnLi9iYXNlLmpzJztcbmV4cG9ydCAqIGFzIGRlZmF1bHQgZnJvbSAnLi9iYXNlLmpzJztcbiIsICJpbXBvcnQgZmlndXJlcyBmcm9tICdmaWd1cmVzJztcbmltcG9ydCB7XG5cdGdyYXksXG5cdGJvbGQsXG5cdHJlZEJyaWdodCxcblx0eWVsbG93QnJpZ2h0LFxufSBmcm9tICd5b2N0b2NvbG9ycyc7XG5cbi8vIERlZmF1bHQgd2hlbiBgdmVyYm9zZWAgaXMgbm90IGEgZnVuY3Rpb25cbmV4cG9ydCBjb25zdCBkZWZhdWx0VmVyYm9zZUZ1bmN0aW9uID0gKHtcblx0dHlwZSxcblx0bWVzc2FnZSxcblx0dGltZXN0YW1wLFxuXHRwaXBlZCxcblx0Y29tbWFuZElkLFxuXHRyZXN1bHQ6IHtmYWlsZWQgPSBmYWxzZX0gPSB7fSxcblx0b3B0aW9uczoge3JlamVjdCA9IHRydWV9LFxufSkgPT4ge1xuXHRjb25zdCB0aW1lc3RhbXBTdHJpbmcgPSBzZXJpYWxpemVUaW1lc3RhbXAodGltZXN0YW1wKTtcblx0Y29uc3QgaWNvbiA9IElDT05TW3R5cGVdKHtmYWlsZWQsIHJlamVjdCwgcGlwZWR9KTtcblx0Y29uc3QgY29sb3IgPSBDT0xPUlNbdHlwZV0oe3JlamVjdH0pO1xuXHRyZXR1cm4gYCR7Z3JheShgWyR7dGltZXN0YW1wU3RyaW5nfV1gKX0gJHtncmF5KGBbJHtjb21tYW5kSWR9XWApfSAke2NvbG9yKGljb24pfSAke2NvbG9yKG1lc3NhZ2UpfWA7XG59O1xuXG4vLyBQcmVwZW5kaW5nIHRoZSB0aW1lc3RhbXAgYWxsb3dzIGRlYnVnZ2luZyB0aGUgc2xvdyBwYXRocyBvZiBhIHN1YnByb2Nlc3NcbmNvbnN0IHNlcmlhbGl6ZVRpbWVzdGFtcCA9IHRpbWVzdGFtcCA9PiBgJHtwYWRGaWVsZCh0aW1lc3RhbXAuZ2V0SG91cnMoKSwgMil9OiR7cGFkRmllbGQodGltZXN0YW1wLmdldE1pbnV0ZXMoKSwgMil9OiR7cGFkRmllbGQodGltZXN0YW1wLmdldFNlY29uZHMoKSwgMil9LiR7cGFkRmllbGQodGltZXN0YW1wLmdldE1pbGxpc2Vjb25kcygpLCAzKX1gO1xuXG5jb25zdCBwYWRGaWVsZCA9IChmaWVsZCwgcGFkZGluZykgPT4gU3RyaW5nKGZpZWxkKS5wYWRTdGFydChwYWRkaW5nLCAnMCcpO1xuXG5jb25zdCBnZXRGaW5hbEljb24gPSAoe2ZhaWxlZCwgcmVqZWN0fSkgPT4ge1xuXHRpZiAoIWZhaWxlZCkge1xuXHRcdHJldHVybiBmaWd1cmVzLnRpY2s7XG5cdH1cblxuXHRyZXR1cm4gcmVqZWN0ID8gZmlndXJlcy5jcm9zcyA6IGZpZ3VyZXMud2FybmluZztcbn07XG5cbmNvbnN0IElDT05TID0ge1xuXHRjb21tYW5kOiAoe3BpcGVkfSkgPT4gcGlwZWQgPyAnfCcgOiAnJCcsXG5cdG91dHB1dDogKCkgPT4gJyAnLFxuXHRpcGM6ICgpID0+ICcqJyxcblx0ZXJyb3I6IGdldEZpbmFsSWNvbixcblx0ZHVyYXRpb246IGdldEZpbmFsSWNvbixcbn07XG5cbmNvbnN0IGlkZW50aXR5ID0gc3RyaW5nID0+IHN0cmluZztcblxuY29uc3QgQ09MT1JTID0ge1xuXHRjb21tYW5kOiAoKSA9PiBib2xkLFxuXHRvdXRwdXQ6ICgpID0+IGlkZW50aXR5LFxuXHRpcGM6ICgpID0+IGlkZW50aXR5LFxuXHRlcnJvcjogKHtyZWplY3R9KSA9PiByZWplY3QgPyByZWRCcmlnaHQgOiB5ZWxsb3dCcmlnaHQsXG5cdGR1cmF0aW9uOiAoKSA9PiBncmF5LFxufTtcbiIsICJpbXBvcnQge2dldFZlcmJvc2VGdW5jdGlvbn0gZnJvbSAnLi92YWx1ZXMuanMnO1xuXG4vLyBBcHBseSB0aGUgYHZlcmJvc2VgIGZ1bmN0aW9uIG9uIGVhY2ggbGluZVxuZXhwb3J0IGNvbnN0IGFwcGx5VmVyYm9zZU9uTGluZXMgPSAocHJpbnRlZExpbmVzLCB2ZXJib3NlSW5mbywgZmROdW1iZXIpID0+IHtcblx0Y29uc3QgdmVyYm9zZUZ1bmN0aW9uID0gZ2V0VmVyYm9zZUZ1bmN0aW9uKHZlcmJvc2VJbmZvLCBmZE51bWJlcik7XG5cdHJldHVybiBwcmludGVkTGluZXNcblx0XHQubWFwKCh7dmVyYm9zZUxpbmUsIHZlcmJvc2VPYmplY3R9KSA9PiBhcHBseVZlcmJvc2VGdW5jdGlvbih2ZXJib3NlTGluZSwgdmVyYm9zZU9iamVjdCwgdmVyYm9zZUZ1bmN0aW9uKSlcblx0XHQuZmlsdGVyKHByaW50ZWRMaW5lID0+IHByaW50ZWRMaW5lICE9PSB1bmRlZmluZWQpXG5cdFx0Lm1hcChwcmludGVkTGluZSA9PiBhcHBlbmROZXdsaW5lKHByaW50ZWRMaW5lKSlcblx0XHQuam9pbignJyk7XG59O1xuXG5jb25zdCBhcHBseVZlcmJvc2VGdW5jdGlvbiA9ICh2ZXJib3NlTGluZSwgdmVyYm9zZU9iamVjdCwgdmVyYm9zZUZ1bmN0aW9uKSA9PiB7XG5cdGlmICh2ZXJib3NlRnVuY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB2ZXJib3NlTGluZTtcblx0fVxuXG5cdGNvbnN0IHByaW50ZWRMaW5lID0gdmVyYm9zZUZ1bmN0aW9uKHZlcmJvc2VMaW5lLCB2ZXJib3NlT2JqZWN0KTtcblx0aWYgKHR5cGVvZiBwcmludGVkTGluZSA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gcHJpbnRlZExpbmU7XG5cdH1cbn07XG5cbmNvbnN0IGFwcGVuZE5ld2xpbmUgPSBwcmludGVkTGluZSA9PiBwcmludGVkTGluZS5lbmRzV2l0aCgnXFxuJylcblx0PyBwcmludGVkTGluZVxuXHQ6IGAke3ByaW50ZWRMaW5lfVxcbmA7XG4iLCAiaW1wb3J0IHtpbnNwZWN0fSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IHtlc2NhcGVMaW5lc30gZnJvbSAnLi4vYXJndW1lbnRzL2VzY2FwZS5qcyc7XG5pbXBvcnQge2RlZmF1bHRWZXJib3NlRnVuY3Rpb259IGZyb20gJy4vZGVmYXVsdC5qcyc7XG5pbXBvcnQge2FwcGx5VmVyYm9zZU9uTGluZXN9IGZyb20gJy4vY3VzdG9tLmpzJztcblxuLy8gVGhpcyBwcmludHMgb24gc3RkZXJyLlxuLy8gSWYgdGhlIHN1YnByb2Nlc3MgcHJpbnRzIG9uIHN0ZG91dCBhbmQgaXMgdXNpbmcgYHN0ZG91dDogJ2luaGVyaXQnYCxcbi8vIHRoZXJlIGlzIGEgY2hhbmNlIGJvdGggd3JpdGVzIHdpbGwgY29tcGV0ZSAoaW50cm9kdWNpbmcgYSByYWNlIGNvbmRpdGlvbikuXG4vLyBUaGlzIG1lYW5zIHRoZWlyIHJlc3BlY3RpdmUgb3JkZXIgaXMgbm90IGRldGVybWluaXN0aWMuXG4vLyBJbiBwYXJ0aWN1bGFyLCB0aGlzIG1lYW5zIHRoZSB2ZXJib3NlIGNvbW1hbmQgbGluZXMgbWlnaHQgYmUgYWZ0ZXIgdGhlIHN0YXJ0IG9mIHRoZSBzdWJwcm9jZXNzIG91dHB1dC5cbi8vIFVzaW5nIHN5bmNocm9ub3VzIEkvTyBkb2VzIG5vdCBzb2x2ZSB0aGlzIHByb2JsZW0uXG4vLyBIb3dldmVyLCB0aGlzIG9ubHkgc2VlbXMgdG8gaGFwcGVuIHdoZW4gdGhlIHN0ZG91dC9zdGRlcnIgdGFyZ2V0XG4vLyAoZS5nLiBhIHRlcm1pbmFsKSBpcyBiZWluZyB3cml0dGVuIHRvIGJ5IG1hbnkgc3VicHJvY2Vzc2VzIGF0IG9uY2UsIHdoaWNoIGlzIHVubGlrZWx5IGluIHJlYWwgc2NlbmFyaW9zLlxuZXhwb3J0IGNvbnN0IHZlcmJvc2VMb2cgPSAoe3R5cGUsIHZlcmJvc2VNZXNzYWdlLCBmZE51bWJlciwgdmVyYm9zZUluZm8sIHJlc3VsdH0pID0+IHtcblx0Y29uc3QgdmVyYm9zZU9iamVjdCA9IGdldFZlcmJvc2VPYmplY3Qoe3R5cGUsIHJlc3VsdCwgdmVyYm9zZUluZm99KTtcblx0Y29uc3QgcHJpbnRlZExpbmVzID0gZ2V0UHJpbnRlZExpbmVzKHZlcmJvc2VNZXNzYWdlLCB2ZXJib3NlT2JqZWN0KTtcblx0Y29uc3QgZmluYWxMaW5lcyA9IGFwcGx5VmVyYm9zZU9uTGluZXMocHJpbnRlZExpbmVzLCB2ZXJib3NlSW5mbywgZmROdW1iZXIpO1xuXHRpZiAoZmluYWxMaW5lcyAhPT0gJycpIHtcblx0XHRjb25zb2xlLndhcm4oZmluYWxMaW5lcy5zbGljZSgwLCAtMSkpO1xuXHR9XG59O1xuXG5jb25zdCBnZXRWZXJib3NlT2JqZWN0ID0gKHtcblx0dHlwZSxcblx0cmVzdWx0LFxuXHR2ZXJib3NlSW5mbzoge2VzY2FwZWRDb21tYW5kLCBjb21tYW5kSWQsIHJhd09wdGlvbnM6IHtwaXBlZCA9IGZhbHNlLCAuLi5vcHRpb25zfX0sXG59KSA9PiAoe1xuXHR0eXBlLFxuXHRlc2NhcGVkQ29tbWFuZCxcblx0Y29tbWFuZElkOiBgJHtjb21tYW5kSWR9YCxcblx0dGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxuXHRwaXBlZCxcblx0cmVzdWx0LFxuXHRvcHRpb25zLFxufSk7XG5cbmNvbnN0IGdldFByaW50ZWRMaW5lcyA9ICh2ZXJib3NlTWVzc2FnZSwgdmVyYm9zZU9iamVjdCkgPT4gdmVyYm9zZU1lc3NhZ2Vcblx0LnNwbGl0KCdcXG4nKVxuXHQubWFwKG1lc3NhZ2UgPT4gZ2V0UHJpbnRlZExpbmUoey4uLnZlcmJvc2VPYmplY3QsIG1lc3NhZ2V9KSk7XG5cbmNvbnN0IGdldFByaW50ZWRMaW5lID0gdmVyYm9zZU9iamVjdCA9PiB7XG5cdGNvbnN0IHZlcmJvc2VMaW5lID0gZGVmYXVsdFZlcmJvc2VGdW5jdGlvbih2ZXJib3NlT2JqZWN0KTtcblx0cmV0dXJuIHt2ZXJib3NlTGluZSwgdmVyYm9zZU9iamVjdH07XG59O1xuXG4vLyBTZXJpYWxpemUgYW55IHR5cGUgdG8gYSBsaW5lIHN0cmluZywgZm9yIGxvZ2dpbmdcbmV4cG9ydCBjb25zdCBzZXJpYWxpemVWZXJib3NlTWVzc2FnZSA9IG1lc3NhZ2UgPT4ge1xuXHRjb25zdCBtZXNzYWdlU3RyaW5nID0gdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnID8gbWVzc2FnZSA6IGluc3BlY3QobWVzc2FnZSk7XG5cdGNvbnN0IGVzY2FwZWRNZXNzYWdlID0gZXNjYXBlTGluZXMobWVzc2FnZVN0cmluZyk7XG5cdHJldHVybiBlc2NhcGVkTWVzc2FnZS5yZXBsYWNlQWxsKCdcXHQnLCAnICcucmVwZWF0KFRBQl9TSVpFKSk7XG59O1xuXG4vLyBTYW1lIGFzIGB1dGlsLmluc3BlY3QoKWBcbmNvbnN0IFRBQl9TSVpFID0gMjtcbiIsICJpbXBvcnQge2lzVmVyYm9zZX0gZnJvbSAnLi92YWx1ZXMuanMnO1xuaW1wb3J0IHt2ZXJib3NlTG9nfSBmcm9tICcuL2xvZy5qcyc7XG5cbi8vIFdoZW4gYHZlcmJvc2VgIGlzIGBzaG9ydHxmdWxsfGN1c3RvbWAsIHByaW50IGVhY2ggY29tbWFuZFxuZXhwb3J0IGNvbnN0IGxvZ0NvbW1hbmQgPSAoZXNjYXBlZENvbW1hbmQsIHZlcmJvc2VJbmZvKSA9PiB7XG5cdGlmICghaXNWZXJib3NlKHZlcmJvc2VJbmZvKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZlcmJvc2VMb2coe1xuXHRcdHR5cGU6ICdjb21tYW5kJyxcblx0XHR2ZXJib3NlTWVzc2FnZTogZXNjYXBlZENvbW1hbmQsXG5cdFx0dmVyYm9zZUluZm8sXG5cdH0pO1xufTtcbiIsICJpbXBvcnQge2lzVmVyYm9zZSwgVkVSQk9TRV9WQUxVRVMsIGlzVmVyYm9zZUZ1bmN0aW9ufSBmcm9tICcuL3ZhbHVlcy5qcyc7XG5cbi8vIEluZm9ybWF0aW9uIGNvbXB1dGVkIGJlZm9yZSBzcGF3bmluZywgdXNlZCBieSB0aGUgYHZlcmJvc2VgIG9wdGlvblxuZXhwb3J0IGNvbnN0IGdldFZlcmJvc2VJbmZvID0gKHZlcmJvc2UsIGVzY2FwZWRDb21tYW5kLCByYXdPcHRpb25zKSA9PiB7XG5cdHZhbGlkYXRlVmVyYm9zZSh2ZXJib3NlKTtcblx0Y29uc3QgY29tbWFuZElkID0gZ2V0Q29tbWFuZElkKHZlcmJvc2UpO1xuXHRyZXR1cm4ge1xuXHRcdHZlcmJvc2UsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0Y29tbWFuZElkLFxuXHRcdHJhd09wdGlvbnMsXG5cdH07XG59O1xuXG5jb25zdCBnZXRDb21tYW5kSWQgPSB2ZXJib3NlID0+IGlzVmVyYm9zZSh7dmVyYm9zZX0pID8gQ09NTUFORF9JRCsrIDogdW5kZWZpbmVkO1xuXG4vLyBQcmVwZW5kaW5nIHRoZSBgcGlkYCBpcyB1c2VmdWwgd2hlbiBtdWx0aXBsZSBjb21tYW5kcyBwcmludCB0aGVpciBvdXRwdXQgYXQgdGhlIHNhbWUgdGltZS5cbi8vIEhvd2V2ZXIsIHdlIGNhbm5vdCB1c2UgdGhlIHJlYWwgUElEIHNpbmNlIHRoaXMgaXMgbm90IGF2YWlsYWJsZSB3aXRoIGBjaGlsZF9wcm9jZXNzLnNwYXduU3luYygpYC5cbi8vIEFsc28sIHdlIGNhbm5vdCB1c2UgdGhlIHJlYWwgUElEIGlmIHdlIHdhbnQgdG8gcHJpbnQgaXQgYmVmb3JlIGBjaGlsZF9wcm9jZXNzLnNwYXduKClgIGlzIHJ1bi5cbi8vIEFzIGEgcHJvLCBpdCBpcyBzaG9ydGVyIHRoYW4gYSBub3JtYWwgUElEIGFuZCBuZXZlciByZS11c2VzIHRoZSBzYW1lIGlkLlxuLy8gQXMgYSBjb24sIGl0IGNhbm5vdCBiZSB1c2VkIHRvIHNlbmQgc2lnbmFscy5cbmxldCBDT01NQU5EX0lEID0gMG47XG5cbmNvbnN0IHZhbGlkYXRlVmVyYm9zZSA9IHZlcmJvc2UgPT4ge1xuXHRmb3IgKGNvbnN0IGZkVmVyYm9zZSBvZiB2ZXJib3NlKSB7XG5cdFx0aWYgKGZkVmVyYm9zZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInZlcmJvc2U6IGZhbHNlXCIgb3B0aW9uIHdhcyByZW5hbWVkIHRvIFwidmVyYm9zZTogXFwnbm9uZVxcJ1wiLicpO1xuXHRcdH1cblxuXHRcdGlmIChmZFZlcmJvc2UgPT09IHRydWUpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInZlcmJvc2U6IHRydWVcIiBvcHRpb24gd2FzIHJlbmFtZWQgdG8gXCJ2ZXJib3NlOiBcXCdzaG9ydFxcJ1wiLicpO1xuXHRcdH1cblxuXHRcdGlmICghVkVSQk9TRV9WQUxVRVMuaW5jbHVkZXMoZmRWZXJib3NlKSAmJiAhaXNWZXJib3NlRnVuY3Rpb24oZmRWZXJib3NlKSkge1xuXHRcdFx0Y29uc3QgYWxsb3dlZFZhbHVlcyA9IFZFUkJPU0VfVkFMVUVTLm1hcChhbGxvd2VkVmFsdWUgPT4gYCcke2FsbG93ZWRWYWx1ZX0nYCkuam9pbignLCAnKTtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcInZlcmJvc2VcIiBvcHRpb24gbXVzdCBub3QgYmUgJHtmZFZlcmJvc2V9LiBBbGxvd2VkIHZhbHVlcyBhcmU6ICR7YWxsb3dlZFZhbHVlc30gb3IgYSBmdW5jdGlvbi5gKTtcblx0XHR9XG5cdH1cbn07XG4iLCAiaW1wb3J0IHtocnRpbWV9IGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5cbi8vIFN0YXJ0IGNvdW50aW5nIHRpbWUgYmVmb3JlIHNwYXduaW5nIHRoZSBzdWJwcm9jZXNzXG5leHBvcnQgY29uc3QgZ2V0U3RhcnRUaW1lID0gKCkgPT4gaHJ0aW1lLmJpZ2ludCgpO1xuXG4vLyBDb21wdXRlIGR1cmF0aW9uIGFmdGVyIHRoZSBzdWJwcm9jZXNzIGVuZGVkLlxuLy8gUHJpbnRlZCBieSB0aGUgYHZlcmJvc2VgIG9wdGlvbi5cbmV4cG9ydCBjb25zdCBnZXREdXJhdGlvbk1zID0gc3RhcnRUaW1lID0+IE51bWJlcihocnRpbWUuYmlnaW50KCkgLSBzdGFydFRpbWUpIC8gMWU2O1xuIiwgImltcG9ydCB7bG9nQ29tbWFuZH0gZnJvbSAnLi4vdmVyYm9zZS9zdGFydC5qcyc7XG5pbXBvcnQge2dldFZlcmJvc2VJbmZvfSBmcm9tICcuLi92ZXJib3NlL2luZm8uanMnO1xuaW1wb3J0IHtnZXRTdGFydFRpbWV9IGZyb20gJy4uL3JldHVybi9kdXJhdGlvbi5qcyc7XG5pbXBvcnQge2pvaW5Db21tYW5kfSBmcm9tICcuL2VzY2FwZS5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZUZkU3BlY2lmaWNPcHRpb259IGZyb20gJy4vc3BlY2lmaWMuanMnO1xuXG4vLyBDb21wdXRlIGByZXN1bHQuY29tbWFuZGAsIGByZXN1bHQuZXNjYXBlZENvbW1hbmRgIGFuZCBgdmVyYm9zZWAtcmVsYXRlZCBpbmZvcm1hdGlvblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNvbW1hbmQgPSAoZmlsZVBhdGgsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucykgPT4ge1xuXHRjb25zdCBzdGFydFRpbWUgPSBnZXRTdGFydFRpbWUoKTtcblx0Y29uc3Qge2NvbW1hbmQsIGVzY2FwZWRDb21tYW5kfSA9IGpvaW5Db21tYW5kKGZpbGVQYXRoLCByYXdBcmd1bWVudHMpO1xuXHRjb25zdCB2ZXJib3NlID0gbm9ybWFsaXplRmRTcGVjaWZpY09wdGlvbihyYXdPcHRpb25zLCAndmVyYm9zZScpO1xuXHRjb25zdCB2ZXJib3NlSW5mbyA9IGdldFZlcmJvc2VJbmZvKHZlcmJvc2UsIGVzY2FwZWRDb21tYW5kLCB7Li4ucmF3T3B0aW9uc30pO1xuXHRsb2dDb21tYW5kKGVzY2FwZWRDb21tYW5kLCB2ZXJib3NlSW5mbyk7XG5cdHJldHVybiB7XG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRzdGFydFRpbWUsXG5cdFx0dmVyYm9zZUluZm8sXG5cdH07XG59O1xuIiwgIm1vZHVsZS5leHBvcnRzID0gaXNleGVcbmlzZXhlLnN5bmMgPSBzeW5jXG5cbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJylcblxuZnVuY3Rpb24gY2hlY2tQYXRoRXh0IChwYXRoLCBvcHRpb25zKSB7XG4gIHZhciBwYXRoZXh0ID0gb3B0aW9ucy5wYXRoRXh0ICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdGlvbnMucGF0aEV4dCA6IHByb2Nlc3MuZW52LlBBVEhFWFRcblxuICBpZiAoIXBhdGhleHQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcGF0aGV4dCA9IHBhdGhleHQuc3BsaXQoJzsnKVxuICBpZiAocGF0aGV4dC5pbmRleE9mKCcnKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aGV4dC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwID0gcGF0aGV4dFtpXS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKHAgJiYgcGF0aC5zdWJzdHIoLXAubGVuZ3RoKS50b0xvd2VyQ2FzZSgpID09PSBwKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gY2hlY2tTdGF0IChzdGF0LCBwYXRoLCBvcHRpb25zKSB7XG4gIGlmICghc3RhdC5pc1N5bWJvbGljTGluaygpICYmICFzdGF0LmlzRmlsZSgpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIGNoZWNrUGF0aEV4dChwYXRoLCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBpc2V4ZSAocGF0aCwgb3B0aW9ucywgY2IpIHtcbiAgZnMuc3RhdChwYXRoLCBmdW5jdGlvbiAoZXIsIHN0YXQpIHtcbiAgICBjYihlciwgZXIgPyBmYWxzZSA6IGNoZWNrU3RhdChzdGF0LCBwYXRoLCBvcHRpb25zKSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gc3luYyAocGF0aCwgb3B0aW9ucykge1xuICByZXR1cm4gY2hlY2tTdGF0KGZzLnN0YXRTeW5jKHBhdGgpLCBwYXRoLCBvcHRpb25zKVxufVxuIiwgIm1vZHVsZS5leHBvcnRzID0gaXNleGVcbmlzZXhlLnN5bmMgPSBzeW5jXG5cbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJylcblxuZnVuY3Rpb24gaXNleGUgKHBhdGgsIG9wdGlvbnMsIGNiKSB7XG4gIGZzLnN0YXQocGF0aCwgZnVuY3Rpb24gKGVyLCBzdGF0KSB7XG4gICAgY2IoZXIsIGVyID8gZmFsc2UgOiBjaGVja1N0YXQoc3RhdCwgb3B0aW9ucykpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHN5bmMgKHBhdGgsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNoZWNrU3RhdChmcy5zdGF0U3luYyhwYXRoKSwgb3B0aW9ucylcbn1cblxuZnVuY3Rpb24gY2hlY2tTdGF0IChzdGF0LCBvcHRpb25zKSB7XG4gIHJldHVybiBzdGF0LmlzRmlsZSgpICYmIGNoZWNrTW9kZShzdGF0LCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBjaGVja01vZGUgKHN0YXQsIG9wdGlvbnMpIHtcbiAgdmFyIG1vZCA9IHN0YXQubW9kZVxuICB2YXIgdWlkID0gc3RhdC51aWRcbiAgdmFyIGdpZCA9IHN0YXQuZ2lkXG5cbiAgdmFyIG15VWlkID0gb3B0aW9ucy51aWQgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy51aWQgOiBwcm9jZXNzLmdldHVpZCAmJiBwcm9jZXNzLmdldHVpZCgpXG4gIHZhciBteUdpZCA9IG9wdGlvbnMuZ2lkICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdGlvbnMuZ2lkIDogcHJvY2Vzcy5nZXRnaWQgJiYgcHJvY2Vzcy5nZXRnaWQoKVxuXG4gIHZhciB1ID0gcGFyc2VJbnQoJzEwMCcsIDgpXG4gIHZhciBnID0gcGFyc2VJbnQoJzAxMCcsIDgpXG4gIHZhciBvID0gcGFyc2VJbnQoJzAwMScsIDgpXG4gIHZhciB1ZyA9IHUgfCBnXG5cbiAgdmFyIHJldCA9IChtb2QgJiBvKSB8fFxuICAgIChtb2QgJiBnKSAmJiBnaWQgPT09IG15R2lkIHx8XG4gICAgKG1vZCAmIHUpICYmIHVpZCA9PT0gbXlVaWQgfHxcbiAgICAobW9kICYgdWcpICYmIG15VWlkID09PSAwXG5cbiAgcmV0dXJuIHJldFxufVxuIiwgInZhciBmcyA9IHJlcXVpcmUoJ2ZzJylcbnZhciBjb3JlXG5pZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyB8fCBnbG9iYWwuVEVTVElOR19XSU5ET1dTKSB7XG4gIGNvcmUgPSByZXF1aXJlKCcuL3dpbmRvd3MuanMnKVxufSBlbHNlIHtcbiAgY29yZSA9IHJlcXVpcmUoJy4vbW9kZS5qcycpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNleGVcbmlzZXhlLnN5bmMgPSBzeW5jXG5cbmZ1bmN0aW9uIGlzZXhlIChwYXRoLCBvcHRpb25zLCBjYikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IG9wdGlvbnNcbiAgICBvcHRpb25zID0ge31cbiAgfVxuXG4gIGlmICghY2IpIHtcbiAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NhbGxiYWNrIG5vdCBwcm92aWRlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlzZXhlKHBhdGgsIG9wdGlvbnMgfHwge30sIGZ1bmN0aW9uIChlciwgaXMpIHtcbiAgICAgICAgaWYgKGVyKSB7XG4gICAgICAgICAgcmVqZWN0KGVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoaXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGNvcmUocGF0aCwgb3B0aW9ucyB8fCB7fSwgZnVuY3Rpb24gKGVyLCBpcykge1xuICAgIC8vIGlnbm9yZSBFQUNDRVMgYmVjYXVzZSB0aGF0IGp1c3QgbWVhbnMgd2UgYXJlbid0IGFsbG93ZWQgdG8gcnVuIGl0XG4gICAgaWYgKGVyKSB7XG4gICAgICBpZiAoZXIuY29kZSA9PT0gJ0VBQ0NFUycgfHwgb3B0aW9ucyAmJiBvcHRpb25zLmlnbm9yZUVycm9ycykge1xuICAgICAgICBlciA9IG51bGxcbiAgICAgICAgaXMgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBjYihlciwgaXMpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHN5bmMgKHBhdGgsIG9wdGlvbnMpIHtcbiAgLy8gbXkga2luZ2RvbSBmb3IgYSBmaWx0ZXJlZCBjYXRjaFxuICB0cnkge1xuICAgIHJldHVybiBjb3JlLnN5bmMocGF0aCwgb3B0aW9ucyB8fCB7fSlcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmlnbm9yZUVycm9ycyB8fCBlci5jb2RlID09PSAnRUFDQ0VTJykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVyXG4gICAgfVxuICB9XG59XG4iLCAiY29uc3QgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyB8fFxuICAgIHByb2Nlc3MuZW52Lk9TVFlQRSA9PT0gJ2N5Z3dpbicgfHxcbiAgICBwcm9jZXNzLmVudi5PU1RZUEUgPT09ICdtc3lzJ1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBDT0xPTiA9IGlzV2luZG93cyA/ICc7JyA6ICc6J1xuY29uc3QgaXNleGUgPSByZXF1aXJlKCdpc2V4ZScpXG5cbmNvbnN0IGdldE5vdEZvdW5kRXJyb3IgPSAoY21kKSA9PlxuICBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihgbm90IGZvdW5kOiAke2NtZH1gKSwgeyBjb2RlOiAnRU5PRU5UJyB9KVxuXG5jb25zdCBnZXRQYXRoSW5mbyA9IChjbWQsIG9wdCkgPT4ge1xuICBjb25zdCBjb2xvbiA9IG9wdC5jb2xvbiB8fCBDT0xPTlxuXG4gIC8vIElmIGl0IGhhcyBhIHNsYXNoLCB0aGVuIHdlIGRvbid0IGJvdGhlciBzZWFyY2hpbmcgdGhlIHBhdGhlbnYuXG4gIC8vIGp1c3QgY2hlY2sgdGhlIGZpbGUgaXRzZWxmLCBhbmQgdGhhdCdzIGl0LlxuICBjb25zdCBwYXRoRW52ID0gY21kLm1hdGNoKC9cXC8vKSB8fCBpc1dpbmRvd3MgJiYgY21kLm1hdGNoKC9cXFxcLykgPyBbJyddXG4gICAgOiAoXG4gICAgICBbXG4gICAgICAgIC8vIHdpbmRvd3MgYWx3YXlzIGNoZWNrcyB0aGUgY3dkIGZpcnN0XG4gICAgICAgIC4uLihpc1dpbmRvd3MgPyBbcHJvY2Vzcy5jd2QoKV0gOiBbXSksXG4gICAgICAgIC4uLihvcHQucGF0aCB8fCBwcm9jZXNzLmVudi5QQVRIIHx8XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHZlcnkgdW51c3VhbCAqLyAnJykuc3BsaXQoY29sb24pLFxuICAgICAgXVxuICAgIClcbiAgY29uc3QgcGF0aEV4dEV4ZSA9IGlzV2luZG93c1xuICAgID8gb3B0LnBhdGhFeHQgfHwgcHJvY2Vzcy5lbnYuUEFUSEVYVCB8fCAnLkVYRTsuQ01EOy5CQVQ7LkNPTSdcbiAgICA6ICcnXG4gIGNvbnN0IHBhdGhFeHQgPSBpc1dpbmRvd3MgPyBwYXRoRXh0RXhlLnNwbGl0KGNvbG9uKSA6IFsnJ11cblxuICBpZiAoaXNXaW5kb3dzKSB7XG4gICAgaWYgKGNtZC5pbmRleE9mKCcuJykgIT09IC0xICYmIHBhdGhFeHRbMF0gIT09ICcnKVxuICAgICAgcGF0aEV4dC51bnNoaWZ0KCcnKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoRW52LFxuICAgIHBhdGhFeHQsXG4gICAgcGF0aEV4dEV4ZSxcbiAgfVxufVxuXG5jb25zdCB3aGljaCA9IChjbWQsIG9wdCwgY2IpID0+IHtcbiAgaWYgKHR5cGVvZiBvcHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IG9wdFxuICAgIG9wdCA9IHt9XG4gIH1cbiAgaWYgKCFvcHQpXG4gICAgb3B0ID0ge31cblxuICBjb25zdCB7IHBhdGhFbnYsIHBhdGhFeHQsIHBhdGhFeHRFeGUgfSA9IGdldFBhdGhJbmZvKGNtZCwgb3B0KVxuICBjb25zdCBmb3VuZCA9IFtdXG5cbiAgY29uc3Qgc3RlcCA9IGkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpID09PSBwYXRoRW52Lmxlbmd0aClcbiAgICAgIHJldHVybiBvcHQuYWxsICYmIGZvdW5kLmxlbmd0aCA/IHJlc29sdmUoZm91bmQpXG4gICAgICAgIDogcmVqZWN0KGdldE5vdEZvdW5kRXJyb3IoY21kKSlcblxuICAgIGNvbnN0IHBwUmF3ID0gcGF0aEVudltpXVxuICAgIGNvbnN0IHBhdGhQYXJ0ID0gL15cIi4qXCIkLy50ZXN0KHBwUmF3KSA/IHBwUmF3LnNsaWNlKDEsIC0xKSA6IHBwUmF3XG5cbiAgICBjb25zdCBwQ21kID0gcGF0aC5qb2luKHBhdGhQYXJ0LCBjbWQpXG4gICAgY29uc3QgcCA9ICFwYXRoUGFydCAmJiAvXlxcLltcXFxcXFwvXS8udGVzdChjbWQpID8gY21kLnNsaWNlKDAsIDIpICsgcENtZFxuICAgICAgOiBwQ21kXG5cbiAgICByZXNvbHZlKHN1YlN0ZXAocCwgaSwgMCkpXG4gIH0pXG5cbiAgY29uc3Qgc3ViU3RlcCA9IChwLCBpLCBpaSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGlmIChpaSA9PT0gcGF0aEV4dC5sZW5ndGgpXG4gICAgICByZXR1cm4gcmVzb2x2ZShzdGVwKGkgKyAxKSlcbiAgICBjb25zdCBleHQgPSBwYXRoRXh0W2lpXVxuICAgIGlzZXhlKHAgKyBleHQsIHsgcGF0aEV4dDogcGF0aEV4dEV4ZSB9LCAoZXIsIGlzKSA9PiB7XG4gICAgICBpZiAoIWVyICYmIGlzKSB7XG4gICAgICAgIGlmIChvcHQuYWxsKVxuICAgICAgICAgIGZvdW5kLnB1c2gocCArIGV4dClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHAgKyBleHQpXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzb2x2ZShzdWJTdGVwKHAsIGksIGlpICsgMSkpXG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gY2IgPyBzdGVwKDApLnRoZW4ocmVzID0+IGNiKG51bGwsIHJlcyksIGNiKSA6IHN0ZXAoMClcbn1cblxuY29uc3Qgd2hpY2hTeW5jID0gKGNtZCwgb3B0KSA9PiB7XG4gIG9wdCA9IG9wdCB8fCB7fVxuXG4gIGNvbnN0IHsgcGF0aEVudiwgcGF0aEV4dCwgcGF0aEV4dEV4ZSB9ID0gZ2V0UGF0aEluZm8oY21kLCBvcHQpXG4gIGNvbnN0IGZvdW5kID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhFbnYubGVuZ3RoOyBpICsrKSB7XG4gICAgY29uc3QgcHBSYXcgPSBwYXRoRW52W2ldXG4gICAgY29uc3QgcGF0aFBhcnQgPSAvXlwiLipcIiQvLnRlc3QocHBSYXcpID8gcHBSYXcuc2xpY2UoMSwgLTEpIDogcHBSYXdcblxuICAgIGNvbnN0IHBDbWQgPSBwYXRoLmpvaW4ocGF0aFBhcnQsIGNtZClcbiAgICBjb25zdCBwID0gIXBhdGhQYXJ0ICYmIC9eXFwuW1xcXFxcXC9dLy50ZXN0KGNtZCkgPyBjbWQuc2xpY2UoMCwgMikgKyBwQ21kXG4gICAgICA6IHBDbWRcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGF0aEV4dC5sZW5ndGg7IGogKyspIHtcbiAgICAgIGNvbnN0IGN1ciA9IHAgKyBwYXRoRXh0W2pdXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBpcyA9IGlzZXhlLnN5bmMoY3VyLCB7IHBhdGhFeHQ6IHBhdGhFeHRFeGUgfSlcbiAgICAgICAgaWYgKGlzKSB7XG4gICAgICAgICAgaWYgKG9wdC5hbGwpXG4gICAgICAgICAgICBmb3VuZC5wdXNoKGN1cilcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gY3VyXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGV4KSB7fVxuICAgIH1cbiAgfVxuXG4gIGlmIChvcHQuYWxsICYmIGZvdW5kLmxlbmd0aClcbiAgICByZXR1cm4gZm91bmRcblxuICBpZiAob3B0Lm5vdGhyb3cpXG4gICAgcmV0dXJuIG51bGxcblxuICB0aHJvdyBnZXROb3RGb3VuZEVycm9yKGNtZClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aGljaFxud2hpY2guc3luYyA9IHdoaWNoU3luY1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGF0aEtleSA9IChvcHRpb25zID0ge30pID0+IHtcblx0Y29uc3QgZW52aXJvbm1lbnQgPSBvcHRpb25zLmVudiB8fCBwcm9jZXNzLmVudjtcblx0Y29uc3QgcGxhdGZvcm0gPSBvcHRpb25zLnBsYXRmb3JtIHx8IHByb2Nlc3MucGxhdGZvcm07XG5cblx0aWYgKHBsYXRmb3JtICE9PSAnd2luMzInKSB7XG5cdFx0cmV0dXJuICdQQVRIJztcblx0fVxuXG5cdHJldHVybiBPYmplY3Qua2V5cyhlbnZpcm9ubWVudCkucmV2ZXJzZSgpLmZpbmQoa2V5ID0+IGtleS50b1VwcGVyQ2FzZSgpID09PSAnUEFUSCcpIHx8ICdQYXRoJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aEtleTtcbi8vIFRPRE86IFJlbW92ZSB0aGlzIGZvciB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gcGF0aEtleTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCB3aGljaCA9IHJlcXVpcmUoJ3doaWNoJyk7XG5jb25zdCBnZXRQYXRoS2V5ID0gcmVxdWlyZSgncGF0aC1rZXknKTtcblxuZnVuY3Rpb24gcmVzb2x2ZUNvbW1hbmRBdHRlbXB0KHBhcnNlZCwgd2l0aG91dFBhdGhFeHQpIHtcbiAgICBjb25zdCBlbnYgPSBwYXJzZWQub3B0aW9ucy5lbnYgfHwgcHJvY2Vzcy5lbnY7XG4gICAgY29uc3QgY3dkID0gcHJvY2Vzcy5jd2QoKTtcbiAgICBjb25zdCBoYXNDdXN0b21Dd2QgPSBwYXJzZWQub3B0aW9ucy5jd2QgIT0gbnVsbDtcbiAgICAvLyBXb3JrZXIgdGhyZWFkcyBkbyBub3QgaGF2ZSBwcm9jZXNzLmNoZGlyKClcbiAgICBjb25zdCBzaG91bGRTd2l0Y2hDd2QgPSBoYXNDdXN0b21Dd2QgJiYgcHJvY2Vzcy5jaGRpciAhPT0gdW5kZWZpbmVkICYmICFwcm9jZXNzLmNoZGlyLmRpc2FibGVkO1xuXG4gICAgLy8gSWYgYSBjdXN0b20gYGN3ZGAgd2FzIHNwZWNpZmllZCwgd2UgbmVlZCB0byBjaGFuZ2UgdGhlIHByb2Nlc3MgY3dkXG4gICAgLy8gYmVjYXVzZSBgd2hpY2hgIHdpbGwgZG8gc3RhdCBjYWxscyBidXQgZG9lcyBub3Qgc3VwcG9ydCBhIGN1c3RvbSBjd2RcbiAgICBpZiAoc2hvdWxkU3dpdGNoQ3dkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9jZXNzLmNoZGlyKHBhcnNlZC5vcHRpb25zLmN3ZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLyogRW1wdHkgKi9cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZXNvbHZlZDtcblxuICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmVkID0gd2hpY2guc3luYyhwYXJzZWQuY29tbWFuZCwge1xuICAgICAgICAgICAgcGF0aDogZW52W2dldFBhdGhLZXkoeyBlbnYgfSldLFxuICAgICAgICAgICAgcGF0aEV4dDogd2l0aG91dFBhdGhFeHQgPyBwYXRoLmRlbGltaXRlciA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvKiBFbXB0eSAqL1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChzaG91bGRTd2l0Y2hDd2QpIHtcbiAgICAgICAgICAgIHByb2Nlc3MuY2hkaXIoY3dkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHdlIHN1Y2Nlc3NmdWxseSByZXNvbHZlZCwgZW5zdXJlIHRoYXQgYW4gYWJzb2x1dGUgcGF0aCBpcyByZXR1cm5lZFxuICAgIC8vIE5vdGUgdGhhdCB3aGVuIGEgY3VzdG9tIGBjd2RgIHdhcyB1c2VkLCB3ZSBuZWVkIHRvIHJlc29sdmUgdG8gYW4gYWJzb2x1dGUgcGF0aCBiYXNlZCBvbiBpdFxuICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICByZXNvbHZlZCA9IHBhdGgucmVzb2x2ZShoYXNDdXN0b21Dd2QgPyBwYXJzZWQub3B0aW9ucy5jd2QgOiAnJywgcmVzb2x2ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNvbW1hbmQocGFyc2VkKSB7XG4gICAgcmV0dXJuIHJlc29sdmVDb21tYW5kQXR0ZW1wdChwYXJzZWQpIHx8IHJlc29sdmVDb21tYW5kQXR0ZW1wdChwYXJzZWQsIHRydWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc29sdmVDb21tYW5kO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLy8gU2VlIGh0dHA6Ly93d3cucm9idmFuZGVyd291ZGUuY29tL2VzY2FwZWNoYXJzLnBocFxuY29uc3QgbWV0YUNoYXJzUmVnRXhwID0gLyhbKClcXF1bJSFeXCJgPD4mfDssICo/XSkvZztcblxuZnVuY3Rpb24gZXNjYXBlQ29tbWFuZChhcmcpIHtcbiAgICAvLyBFc2NhcGUgbWV0YSBjaGFyc1xuICAgIGFyZyA9IGFyZy5yZXBsYWNlKG1ldGFDaGFyc1JlZ0V4cCwgJ14kMScpO1xuXG4gICAgcmV0dXJuIGFyZztcbn1cblxuZnVuY3Rpb24gZXNjYXBlQXJndW1lbnQoYXJnLCBkb3VibGVFc2NhcGVNZXRhQ2hhcnMpIHtcbiAgICAvLyBDb252ZXJ0IHRvIHN0cmluZ1xuICAgIGFyZyA9IGAke2FyZ31gO1xuXG4gICAgLy8gQWxnb3JpdGhtIGJlbG93IGlzIGJhc2VkIG9uIGh0dHBzOi8vcW50bS5vcmcvY21kXG4gICAgLy8gSXQncyBzbGlnaHRseSBhbHRlcmVkIHRvIGRpc2FibGUgSlMgYmFja3RyYWNraW5nIHRvIGF2b2lkIGhhbmdpbmcgb24gc3BlY2lhbGx5IGNyYWZ0ZWQgaW5wdXRcbiAgICAvLyBQbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3h5c3R1ZGlvL25vZGUtY3Jvc3Mtc3Bhd24vcHVsbC8xNjAgZm9yIG1vcmUgaW5mb3JtYXRpb25cblxuICAgIC8vIFNlcXVlbmNlIG9mIGJhY2tzbGFzaGVzIGZvbGxvd2VkIGJ5IGEgZG91YmxlIHF1b3RlOlxuICAgIC8vIGRvdWJsZSB1cCBhbGwgdGhlIGJhY2tzbGFzaGVzIGFuZCBlc2NhcGUgdGhlIGRvdWJsZSBxdW90ZVxuICAgIGFyZyA9IGFyZy5yZXBsYWNlKC8oPz0oXFxcXCs/KT8pXFwxXCIvZywgJyQxJDFcXFxcXCInKTtcblxuICAgIC8vIFNlcXVlbmNlIG9mIGJhY2tzbGFzaGVzIGZvbGxvd2VkIGJ5IHRoZSBlbmQgb2YgdGhlIHN0cmluZ1xuICAgIC8vICh3aGljaCB3aWxsIGJlY29tZSBhIGRvdWJsZSBxdW90ZSBsYXRlcik6XG4gICAgLy8gZG91YmxlIHVwIGFsbCB0aGUgYmFja3NsYXNoZXNcbiAgICBhcmcgPSBhcmcucmVwbGFjZSgvKD89KFxcXFwrPyk/KVxcMSQvLCAnJDEkMScpO1xuXG4gICAgLy8gQWxsIG90aGVyIGJhY2tzbGFzaGVzIG9jY3VyIGxpdGVyYWxseVxuXG4gICAgLy8gUXVvdGUgdGhlIHdob2xlIHRoaW5nOlxuICAgIGFyZyA9IGBcIiR7YXJnfVwiYDtcblxuICAgIC8vIEVzY2FwZSBtZXRhIGNoYXJzXG4gICAgYXJnID0gYXJnLnJlcGxhY2UobWV0YUNoYXJzUmVnRXhwLCAnXiQxJyk7XG5cbiAgICAvLyBEb3VibGUgZXNjYXBlIG1ldGEgY2hhcnMgaWYgbmVjZXNzYXJ5XG4gICAgaWYgKGRvdWJsZUVzY2FwZU1ldGFDaGFycykge1xuICAgICAgICBhcmcgPSBhcmcucmVwbGFjZShtZXRhQ2hhcnNSZWdFeHAsICdeJDEnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJnO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5jb21tYW5kID0gZXNjYXBlQ29tbWFuZDtcbm1vZHVsZS5leHBvcnRzLmFyZ3VtZW50ID0gZXNjYXBlQXJndW1lbnQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSAvXiMhKC4qKS87XG4iLCAiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgc2hlYmFuZ1JlZ2V4ID0gcmVxdWlyZSgnc2hlYmFuZy1yZWdleCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChzdHJpbmcgPSAnJykgPT4ge1xuXHRjb25zdCBtYXRjaCA9IHN0cmluZy5tYXRjaChzaGViYW5nUmVnZXgpO1xuXG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IFtwYXRoLCBhcmd1bWVudF0gPSBtYXRjaFswXS5yZXBsYWNlKC8jISA/LywgJycpLnNwbGl0KCcgJyk7XG5cdGNvbnN0IGJpbmFyeSA9IHBhdGguc3BsaXQoJy8nKS5wb3AoKTtcblxuXHRpZiAoYmluYXJ5ID09PSAnZW52Jykge1xuXHRcdHJldHVybiBhcmd1bWVudDtcblx0fVxuXG5cdHJldHVybiBhcmd1bWVudCA/IGAke2JpbmFyeX0gJHthcmd1bWVudH1gIDogYmluYXJ5O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHNoZWJhbmdDb21tYW5kID0gcmVxdWlyZSgnc2hlYmFuZy1jb21tYW5kJyk7XG5cbmZ1bmN0aW9uIHJlYWRTaGViYW5nKGNvbW1hbmQpIHtcbiAgICAvLyBSZWFkIHRoZSBmaXJzdCAxNTAgYnl0ZXMgZnJvbSB0aGUgZmlsZVxuICAgIGNvbnN0IHNpemUgPSAxNTA7XG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmFsbG9jKHNpemUpO1xuXG4gICAgbGV0IGZkO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgZmQgPSBmcy5vcGVuU3luYyhjb21tYW5kLCAncicpO1xuICAgICAgICBmcy5yZWFkU3luYyhmZCwgYnVmZmVyLCAwLCBzaXplLCAwKTtcbiAgICAgICAgZnMuY2xvc2VTeW5jKGZkKTtcbiAgICB9IGNhdGNoIChlKSB7IC8qIEVtcHR5ICovIH1cblxuICAgIC8vIEF0dGVtcHQgdG8gZXh0cmFjdCBzaGViYW5nIChudWxsIGlzIHJldHVybmVkIGlmIG5vdCBhIHNoZWJhbmcpXG4gICAgcmV0dXJuIHNoZWJhbmdDb21tYW5kKGJ1ZmZlci50b1N0cmluZygpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWFkU2hlYmFuZztcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCByZXNvbHZlQ29tbWFuZCA9IHJlcXVpcmUoJy4vdXRpbC9yZXNvbHZlQ29tbWFuZCcpO1xuY29uc3QgZXNjYXBlID0gcmVxdWlyZSgnLi91dGlsL2VzY2FwZScpO1xuY29uc3QgcmVhZFNoZWJhbmcgPSByZXF1aXJlKCcuL3V0aWwvcmVhZFNoZWJhbmcnKTtcblxuY29uc3QgaXNXaW4gPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xuY29uc3QgaXNFeGVjdXRhYmxlUmVnRXhwID0gL1xcLig/OmNvbXxleGUpJC9pO1xuY29uc3QgaXNDbWRTaGltUmVnRXhwID0gL25vZGVfbW9kdWxlc1tcXFxcL10uYmluW1xcXFwvXVteXFxcXC9dK1xcLmNtZCQvaTtcblxuZnVuY3Rpb24gZGV0ZWN0U2hlYmFuZyhwYXJzZWQpIHtcbiAgICBwYXJzZWQuZmlsZSA9IHJlc29sdmVDb21tYW5kKHBhcnNlZCk7XG5cbiAgICBjb25zdCBzaGViYW5nID0gcGFyc2VkLmZpbGUgJiYgcmVhZFNoZWJhbmcocGFyc2VkLmZpbGUpO1xuXG4gICAgaWYgKHNoZWJhbmcpIHtcbiAgICAgICAgcGFyc2VkLmFyZ3MudW5zaGlmdChwYXJzZWQuZmlsZSk7XG4gICAgICAgIHBhcnNlZC5jb21tYW5kID0gc2hlYmFuZztcblxuICAgICAgICByZXR1cm4gcmVzb2x2ZUNvbW1hbmQocGFyc2VkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkLmZpbGU7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTm9uU2hlbGwocGFyc2VkKSB7XG4gICAgaWYgKCFpc1dpbikge1xuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cblxuICAgIC8vIERldGVjdCAmIGFkZCBzdXBwb3J0IGZvciBzaGViYW5nc1xuICAgIGNvbnN0IGNvbW1hbmRGaWxlID0gZGV0ZWN0U2hlYmFuZyhwYXJzZWQpO1xuXG4gICAgLy8gV2UgZG9uJ3QgbmVlZCBhIHNoZWxsIGlmIHRoZSBjb21tYW5kIGZpbGVuYW1lIGlzIGFuIGV4ZWN1dGFibGVcbiAgICBjb25zdCBuZWVkc1NoZWxsID0gIWlzRXhlY3V0YWJsZVJlZ0V4cC50ZXN0KGNvbW1hbmRGaWxlKTtcblxuICAgIC8vIElmIGEgc2hlbGwgaXMgcmVxdWlyZWQsIHVzZSBjbWQuZXhlIGFuZCB0YWtlIGNhcmUgb2YgZXNjYXBpbmcgZXZlcnl0aGluZyBjb3JyZWN0bHlcbiAgICAvLyBOb3RlIHRoYXQgYGZvcmNlU2hlbGxgIGlzIGFuIGhpZGRlbiBvcHRpb24gdXNlZCBvbmx5IGluIHRlc3RzXG4gICAgaWYgKHBhcnNlZC5vcHRpb25zLmZvcmNlU2hlbGwgfHwgbmVlZHNTaGVsbCkge1xuICAgICAgICAvLyBOZWVkIHRvIGRvdWJsZSBlc2NhcGUgbWV0YSBjaGFycyBpZiB0aGUgY29tbWFuZCBpcyBhIGNtZC1zaGltIGxvY2F0ZWQgaW4gYG5vZGVfbW9kdWxlcy8uYmluL2BcbiAgICAgICAgLy8gVGhlIGNtZC1zaGltIHNpbXBseSBjYWxscyBleGVjdXRlIHRoZSBwYWNrYWdlIGJpbiBmaWxlIHdpdGggTm9kZUpTLCBwcm94eWluZyBhbnkgYXJndW1lbnRcbiAgICAgICAgLy8gQmVjYXVzZSB0aGUgZXNjYXBlIG9mIG1ldGFjaGFycyB3aXRoIF4gZ2V0cyBpbnRlcnByZXRlZCB3aGVuIHRoZSBjbWQuZXhlIGlzIGZpcnN0IGNhbGxlZCxcbiAgICAgICAgLy8gd2UgbmVlZCB0byBkb3VibGUgZXNjYXBlIHRoZW1cbiAgICAgICAgY29uc3QgbmVlZHNEb3VibGVFc2NhcGVNZXRhQ2hhcnMgPSBpc0NtZFNoaW1SZWdFeHAudGVzdChjb21tYW5kRmlsZSk7XG5cbiAgICAgICAgLy8gTm9ybWFsaXplIHBvc2l4IHBhdGhzIGludG8gT1MgY29tcGF0aWJsZSBwYXRocyAoZS5nLjogZm9vL2JhciAtPiBmb29cXGJhcilcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3Nhcnkgb3RoZXJ3aXNlIGl0IHdpbGwgYWx3YXlzIGZhaWwgd2l0aCBFTk9FTlQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgcGFyc2VkLmNvbW1hbmQgPSBwYXRoLm5vcm1hbGl6ZShwYXJzZWQuY29tbWFuZCk7XG5cbiAgICAgICAgLy8gRXNjYXBlIGNvbW1hbmQgJiBhcmd1bWVudHNcbiAgICAgICAgcGFyc2VkLmNvbW1hbmQgPSBlc2NhcGUuY29tbWFuZChwYXJzZWQuY29tbWFuZCk7XG4gICAgICAgIHBhcnNlZC5hcmdzID0gcGFyc2VkLmFyZ3MubWFwKChhcmcpID0+IGVzY2FwZS5hcmd1bWVudChhcmcsIG5lZWRzRG91YmxlRXNjYXBlTWV0YUNoYXJzKSk7XG5cbiAgICAgICAgY29uc3Qgc2hlbGxDb21tYW5kID0gW3BhcnNlZC5jb21tYW5kXS5jb25jYXQocGFyc2VkLmFyZ3MpLmpvaW4oJyAnKTtcblxuICAgICAgICBwYXJzZWQuYXJncyA9IFsnL2QnLCAnL3MnLCAnL2MnLCBgXCIke3NoZWxsQ29tbWFuZH1cImBdO1xuICAgICAgICBwYXJzZWQuY29tbWFuZCA9IHByb2Nlc3MuZW52LmNvbXNwZWMgfHwgJ2NtZC5leGUnO1xuICAgICAgICBwYXJzZWQub3B0aW9ucy53aW5kb3dzVmVyYmF0aW1Bcmd1bWVudHMgPSB0cnVlOyAvLyBUZWxsIG5vZGUncyBzcGF3biB0aGF0IHRoZSBhcmd1bWVudHMgYXJlIGFscmVhZHkgZXNjYXBlZFxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlKGNvbW1hbmQsIGFyZ3MsIG9wdGlvbnMpIHtcbiAgICAvLyBOb3JtYWxpemUgYXJndW1lbnRzLCBzaW1pbGFyIHRvIG5vZGVqc1xuICAgIGlmIChhcmdzICYmICFBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgICAgIG9wdGlvbnMgPSBhcmdzO1xuICAgICAgICBhcmdzID0gbnVsbDtcbiAgICB9XG5cbiAgICBhcmdzID0gYXJncyA/IGFyZ3Muc2xpY2UoMCkgOiBbXTsgLy8gQ2xvbmUgYXJyYXkgdG8gYXZvaWQgY2hhbmdpbmcgdGhlIG9yaWdpbmFsXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpOyAvLyBDbG9uZSBvYmplY3QgdG8gYXZvaWQgY2hhbmdpbmcgdGhlIG9yaWdpbmFsXG5cbiAgICAvLyBCdWlsZCBvdXIgcGFyc2VkIG9iamVjdFxuICAgIGNvbnN0IHBhcnNlZCA9IHtcbiAgICAgICAgY29tbWFuZCxcbiAgICAgICAgYXJncyxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgZmlsZTogdW5kZWZpbmVkLFxuICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgICAgY29tbWFuZCxcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIERlbGVnYXRlIGZ1cnRoZXIgcGFyc2luZyB0byBzaGVsbCBvciBub24tc2hlbGxcbiAgICByZXR1cm4gb3B0aW9ucy5zaGVsbCA/IHBhcnNlZCA6IHBhcnNlTm9uU2hlbGwocGFyc2VkKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzV2luID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcblxuZnVuY3Rpb24gbm90Rm91bmRFcnJvcihvcmlnaW5hbCwgc3lzY2FsbCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihgJHtzeXNjYWxsfSAke29yaWdpbmFsLmNvbW1hbmR9IEVOT0VOVGApLCB7XG4gICAgICAgIGNvZGU6ICdFTk9FTlQnLFxuICAgICAgICBlcnJubzogJ0VOT0VOVCcsXG4gICAgICAgIHN5c2NhbGw6IGAke3N5c2NhbGx9ICR7b3JpZ2luYWwuY29tbWFuZH1gLFxuICAgICAgICBwYXRoOiBvcmlnaW5hbC5jb21tYW5kLFxuICAgICAgICBzcGF3bmFyZ3M6IG9yaWdpbmFsLmFyZ3MsXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhvb2tDaGlsZFByb2Nlc3MoY3AsIHBhcnNlZCkge1xuICAgIGlmICghaXNXaW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9yaWdpbmFsRW1pdCA9IGNwLmVtaXQ7XG5cbiAgICBjcC5lbWl0ID0gZnVuY3Rpb24gKG5hbWUsIGFyZzEpIHtcbiAgICAgICAgLy8gSWYgZW1pdHRpbmcgXCJleGl0XCIgZXZlbnQgYW5kIGV4aXQgY29kZSBpcyAxLCB3ZSBuZWVkIHRvIGNoZWNrIGlmXG4gICAgICAgIC8vIHRoZSBjb21tYW5kIGV4aXN0cyBhbmQgZW1pdCBhbiBcImVycm9yXCIgaW5zdGVhZFxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0luZGlnb1VuaXRlZC9ub2RlLWNyb3NzLXNwYXduL2lzc3Vlcy8xNlxuICAgICAgICBpZiAobmFtZSA9PT0gJ2V4aXQnKSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSB2ZXJpZnlFTk9FTlQoYXJnMSwgcGFyc2VkKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEVtaXQuY2FsbChjcCwgJ2Vycm9yJywgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcmlnaW5hbEVtaXQuYXBwbHkoY3AsIGFyZ3VtZW50cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RU5PRU5UKHN0YXR1cywgcGFyc2VkKSB7XG4gICAgaWYgKGlzV2luICYmIHN0YXR1cyA9PT0gMSAmJiAhcGFyc2VkLmZpbGUpIHtcbiAgICAgICAgcmV0dXJuIG5vdEZvdW5kRXJyb3IocGFyc2VkLm9yaWdpbmFsLCAnc3Bhd24nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RU5PRU5UU3luYyhzdGF0dXMsIHBhcnNlZCkge1xuICAgIGlmIChpc1dpbiAmJiBzdGF0dXMgPT09IDEgJiYgIXBhcnNlZC5maWxlKSB7XG4gICAgICAgIHJldHVybiBub3RGb3VuZEVycm9yKHBhcnNlZC5vcmlnaW5hbCwgJ3NwYXduU3luYycpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBob29rQ2hpbGRQcm9jZXNzLFxuICAgIHZlcmlmeUVOT0VOVCxcbiAgICB2ZXJpZnlFTk9FTlRTeW5jLFxuICAgIG5vdEZvdW5kRXJyb3IsXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3AgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vbGliL3BhcnNlJyk7XG5jb25zdCBlbm9lbnQgPSByZXF1aXJlKCcuL2xpYi9lbm9lbnQnKTtcblxuZnVuY3Rpb24gc3Bhd24oY29tbWFuZCwgYXJncywgb3B0aW9ucykge1xuICAgIC8vIFBhcnNlIHRoZSBhcmd1bWVudHNcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZShjb21tYW5kLCBhcmdzLCBvcHRpb25zKTtcblxuICAgIC8vIFNwYXduIHRoZSBjaGlsZCBwcm9jZXNzXG4gICAgY29uc3Qgc3Bhd25lZCA9IGNwLnNwYXduKHBhcnNlZC5jb21tYW5kLCBwYXJzZWQuYXJncywgcGFyc2VkLm9wdGlvbnMpO1xuXG4gICAgLy8gSG9vayBpbnRvIGNoaWxkIHByb2Nlc3MgXCJleGl0XCIgZXZlbnQgdG8gZW1pdCBhbiBlcnJvciBpZiB0aGUgY29tbWFuZFxuICAgIC8vIGRvZXMgbm90IGV4aXN0cywgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vSW5kaWdvVW5pdGVkL25vZGUtY3Jvc3Mtc3Bhd24vaXNzdWVzLzE2XG4gICAgZW5vZW50Lmhvb2tDaGlsZFByb2Nlc3Moc3Bhd25lZCwgcGFyc2VkKTtcblxuICAgIHJldHVybiBzcGF3bmVkO1xufVxuXG5mdW5jdGlvbiBzcGF3blN5bmMoY29tbWFuZCwgYXJncywgb3B0aW9ucykge1xuICAgIC8vIFBhcnNlIHRoZSBhcmd1bWVudHNcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZShjb21tYW5kLCBhcmdzLCBvcHRpb25zKTtcblxuICAgIC8vIFNwYXduIHRoZSBjaGlsZCBwcm9jZXNzXG4gICAgY29uc3QgcmVzdWx0ID0gY3Auc3Bhd25TeW5jKHBhcnNlZC5jb21tYW5kLCBwYXJzZWQuYXJncywgcGFyc2VkLm9wdGlvbnMpO1xuXG4gICAgLy8gQW5hbHl6ZSBpZiB0aGUgY29tbWFuZCBkb2VzIG5vdCBleGlzdCwgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vSW5kaWdvVW5pdGVkL25vZGUtY3Jvc3Mtc3Bhd24vaXNzdWVzLzE2XG4gICAgcmVzdWx0LmVycm9yID0gcmVzdWx0LmVycm9yIHx8IGVub2VudC52ZXJpZnlFTk9FTlRTeW5jKHJlc3VsdC5zdGF0dXMsIHBhcnNlZCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNwYXduO1xubW9kdWxlLmV4cG9ydHMuc3Bhd24gPSBzcGF3bjtcbm1vZHVsZS5leHBvcnRzLnN5bmMgPSBzcGF3blN5bmM7XG5cbm1vZHVsZS5leHBvcnRzLl9wYXJzZSA9IHBhcnNlO1xubW9kdWxlLmV4cG9ydHMuX2Vub2VudCA9IGVub2VudDtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXRoS2V5KG9wdGlvbnMgPSB7fSkge1xuXHRjb25zdCB7XG5cdFx0ZW52ID0gcHJvY2Vzcy5lbnYsXG5cdFx0cGxhdGZvcm0gPSBwcm9jZXNzLnBsYXRmb3JtXG5cdH0gPSBvcHRpb25zO1xuXG5cdGlmIChwbGF0Zm9ybSAhPT0gJ3dpbjMyJykge1xuXHRcdHJldHVybiAnUEFUSCc7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0LmtleXMoZW52KS5yZXZlcnNlKCkuZmluZChrZXkgPT4ga2V5LnRvVXBwZXJDYXNlKCkgPT09ICdQQVRIJykgfHwgJ1BhdGgnO1xufVxuIiwgImV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxheSh7c2Vjb25kcywgbWlsbGlzZWNvbmRzfSA9IHt9KSB7XG5cdGxldCBkdXJhdGlvbjtcblx0aWYgKHR5cGVvZiBzZWNvbmRzID09PSAnbnVtYmVyJykge1xuXHRcdGR1cmF0aW9uID0gc2Vjb25kcyAqIDEwMDA7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1pbGxpc2Vjb25kcyA9PT0gJ251bWJlcicpIHtcblx0XHRkdXJhdGlvbiA9IG1pbGxpc2Vjb25kcztcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbiBvYmplY3Qgd2l0aCBlaXRoZXIgYHNlY29uZHNgIG9yIGBtaWxsaXNlY29uZHNgLicpO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdHNldFRpbWVvdXQocmVzb2x2ZSwgZHVyYXRpb24pO1xuXHR9KTtcbn1cbiIsICJpbXBvcnQge3Byb21pc2lmeX0gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCB7ZXhlY0ZpbGUgYXMgZXhlY0ZpbGVDYWxsYmFjaywgZXhlY0ZpbGVTeW5jIGFzIGV4ZWNGaWxlU3luY09yaWdpbmFsfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7ZmlsZVVSTFRvUGF0aH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5jb25zdCBleGVjRmlsZU9yaWdpbmFsID0gcHJvbWlzaWZ5KGV4ZWNGaWxlQ2FsbGJhY2spO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9QYXRoKHVybE9yUGF0aCkge1xuXHRyZXR1cm4gdXJsT3JQYXRoIGluc3RhbmNlb2YgVVJMID8gZmlsZVVSTFRvUGF0aCh1cmxPclBhdGgpIDogdXJsT3JQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm9vdERpcmVjdG9yeShwYXRoSW5wdXQpIHtcblx0cmV0dXJuIHBhdGgucGFyc2UodG9QYXRoKHBhdGhJbnB1dCkpLnJvb3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZVBhdGhVcChzdGFydFBhdGgpIHtcblx0cmV0dXJuIHtcblx0XHQqIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdFx0bGV0IGN1cnJlbnRQYXRoID0gcGF0aC5yZXNvbHZlKHRvUGF0aChzdGFydFBhdGgpKTtcblx0XHRcdGxldCBwcmV2aW91c1BhdGg7XG5cblx0XHRcdHdoaWxlIChwcmV2aW91c1BhdGggIT09IGN1cnJlbnRQYXRoKSB7XG5cdFx0XHRcdHlpZWxkIGN1cnJlbnRQYXRoO1xuXHRcdFx0XHRwcmV2aW91c1BhdGggPSBjdXJyZW50UGF0aDtcblx0XHRcdFx0Y3VycmVudFBhdGggPSBwYXRoLnJlc29sdmUoY3VycmVudFBhdGgsICcuLicpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG59XG5cbmNvbnN0IFRFTl9NRUdBQllURVNfSU5fQllURVMgPSAxMCAqIDEwMjQgKiAxMDI0O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY0ZpbGUoZmlsZSwgYXJndW1lbnRzXywgb3B0aW9ucyA9IHt9KSB7XG5cdHJldHVybiBleGVjRmlsZU9yaWdpbmFsKGZpbGUsIGFyZ3VtZW50c18sIHtcblx0XHRtYXhCdWZmZXI6IFRFTl9NRUdBQllURVNfSU5fQllURVMsXG5cdFx0Li4ub3B0aW9ucyxcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjRmlsZVN5bmMoZmlsZSwgYXJndW1lbnRzXyA9IFtdLCBvcHRpb25zID0ge30pIHtcblx0cmV0dXJuIGV4ZWNGaWxlU3luY09yaWdpbmFsKGZpbGUsIGFyZ3VtZW50c18sIHtcblx0XHRtYXhCdWZmZXI6IFRFTl9NRUdBQllURVNfSU5fQllURVMsXG5cdFx0ZW5jb2Rpbmc6ICd1dGY4Jyxcblx0XHRzdGRpbzogJ3BpcGUnLFxuXHRcdC4uLm9wdGlvbnMsXG5cdH0pO1xufVxuXG5leHBvcnQgKiBmcm9tICcuL2RlZmF1bHQuanMnO1xuIiwgImltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHBhdGhLZXkgZnJvbSAncGF0aC1rZXknO1xuaW1wb3J0IHt0b1BhdGgsIHRyYXZlcnNlUGF0aFVwfSBmcm9tICd1bmljb3JuLW1hZ2ljJztcblxuZXhwb3J0IGNvbnN0IG5wbVJ1blBhdGggPSAoe1xuXHRjd2QgPSBwcm9jZXNzLmN3ZCgpLFxuXHRwYXRoOiBwYXRoT3B0aW9uID0gcHJvY2Vzcy5lbnZbcGF0aEtleSgpXSxcblx0cHJlZmVyTG9jYWwgPSB0cnVlLFxuXHRleGVjUGF0aCA9IHByb2Nlc3MuZXhlY1BhdGgsXG5cdGFkZEV4ZWNQYXRoID0gdHJ1ZSxcbn0gPSB7fSkgPT4ge1xuXHRjb25zdCBjd2RQYXRoID0gcGF0aC5yZXNvbHZlKHRvUGF0aChjd2QpKTtcblx0Y29uc3QgcmVzdWx0ID0gW107XG5cdGNvbnN0IHBhdGhQYXJ0cyA9IHBhdGhPcHRpb24uc3BsaXQocGF0aC5kZWxpbWl0ZXIpO1xuXG5cdGlmIChwcmVmZXJMb2NhbCkge1xuXHRcdGFwcGx5UHJlZmVyTG9jYWwocmVzdWx0LCBwYXRoUGFydHMsIGN3ZFBhdGgpO1xuXHR9XG5cblx0aWYgKGFkZEV4ZWNQYXRoKSB7XG5cdFx0YXBwbHlFeGVjUGF0aChyZXN1bHQsIHBhdGhQYXJ0cywgZXhlY1BhdGgsIGN3ZFBhdGgpO1xuXHR9XG5cblx0cmV0dXJuIHBhdGhPcHRpb24gPT09ICcnIHx8IHBhdGhPcHRpb24gPT09IHBhdGguZGVsaW1pdGVyXG5cdFx0PyBgJHtyZXN1bHQuam9pbihwYXRoLmRlbGltaXRlcil9JHtwYXRoT3B0aW9ufWBcblx0XHQ6IFsuLi5yZXN1bHQsIHBhdGhPcHRpb25dLmpvaW4ocGF0aC5kZWxpbWl0ZXIpO1xufTtcblxuY29uc3QgYXBwbHlQcmVmZXJMb2NhbCA9IChyZXN1bHQsIHBhdGhQYXJ0cywgY3dkUGF0aCkgPT4ge1xuXHRmb3IgKGNvbnN0IGRpcmVjdG9yeSBvZiB0cmF2ZXJzZVBhdGhVcChjd2RQYXRoKSkge1xuXHRcdGNvbnN0IHBhdGhQYXJ0ID0gcGF0aC5qb2luKGRpcmVjdG9yeSwgJ25vZGVfbW9kdWxlcy8uYmluJyk7XG5cdFx0aWYgKCFwYXRoUGFydHMuaW5jbHVkZXMocGF0aFBhcnQpKSB7XG5cdFx0XHRyZXN1bHQucHVzaChwYXRoUGFydCk7XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBFbnN1cmUgdGhlIHJ1bm5pbmcgYG5vZGVgIGJpbmFyeSBpcyB1c2VkXG5jb25zdCBhcHBseUV4ZWNQYXRoID0gKHJlc3VsdCwgcGF0aFBhcnRzLCBleGVjUGF0aCwgY3dkUGF0aCkgPT4ge1xuXHRjb25zdCBwYXRoUGFydCA9IHBhdGgucmVzb2x2ZShjd2RQYXRoLCB0b1BhdGgoZXhlY1BhdGgpLCAnLi4nKTtcblx0aWYgKCFwYXRoUGFydHMuaW5jbHVkZXMocGF0aFBhcnQpKSB7XG5cdFx0cmVzdWx0LnB1c2gocGF0aFBhcnQpO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgbnBtUnVuUGF0aEVudiA9ICh7ZW52ID0gcHJvY2Vzcy5lbnYsIC4uLm9wdGlvbnN9ID0ge30pID0+IHtcblx0ZW52ID0gey4uLmVudn07XG5cblx0Y29uc3QgcGF0aE5hbWUgPSBwYXRoS2V5KHtlbnZ9KTtcblx0b3B0aW9ucy5wYXRoID0gZW52W3BhdGhOYW1lXTtcblx0ZW52W3BhdGhOYW1lXSA9IG5wbVJ1blBhdGgob3B0aW9ucyk7XG5cblx0cmV0dXJuIGVudjtcbn07XG4iLCAiLy8gV2hlbiB0aGUgc3VicHJvY2VzcyBmYWlscywgdGhpcyBpcyB0aGUgZXJyb3IgaW5zdGFuY2UgYmVpbmcgcmV0dXJuZWQuXG4vLyBJZiBhbm90aGVyIGVycm9yIGluc3RhbmNlIGlzIGJlaW5nIHRocm93biwgaXQgaXMga2VwdCBhcyBgZXJyb3IuY2F1c2VgLlxuZXhwb3J0IGNvbnN0IGdldEZpbmFsRXJyb3IgPSAob3JpZ2luYWxFcnJvciwgbWVzc2FnZSwgaXNTeW5jKSA9PiB7XG5cdGNvbnN0IEVycm9yQ2xhc3MgPSBpc1N5bmMgPyBFeGVjYVN5bmNFcnJvciA6IEV4ZWNhRXJyb3I7XG5cdGNvbnN0IG9wdGlvbnMgPSBvcmlnaW5hbEVycm9yIGluc3RhbmNlb2YgRGlzY2FyZGVkRXJyb3IgPyB7fSA6IHtjYXVzZTogb3JpZ2luYWxFcnJvcn07XG5cdHJldHVybiBuZXcgRXJyb3JDbGFzcyhtZXNzYWdlLCBvcHRpb25zKTtcbn07XG5cbi8vIEluZGljYXRlcyB0aGF0IHRoZSBlcnJvciBpcyB1c2VkIG9ubHkgdG8gaW50ZXJydXB0IGNvbnRyb2wgZmxvdywgYnV0IG5vdCBpbiB0aGUgcmV0dXJuIHZhbHVlXG5leHBvcnQgY2xhc3MgRGlzY2FyZGVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG4vLyBQcm9wZXIgd2F5IHRvIHNldCBgZXJyb3IubmFtZWA6IGl0IHNob3VsZCBiZSBpbmhlcml0ZWQgYW5kIG5vbi1lbnVtZXJhYmxlXG5jb25zdCBzZXRFcnJvck5hbWUgPSAoRXJyb3JDbGFzcywgdmFsdWUpID0+IHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KEVycm9yQ2xhc3MucHJvdG90eXBlLCAnbmFtZScsIHtcblx0XHR2YWx1ZSxcblx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoRXJyb3JDbGFzcy5wcm90b3R5cGUsIGV4ZWNhRXJyb3JTeW1ib2wsIHtcblx0XHR2YWx1ZTogdHJ1ZSxcblx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcblx0fSk7XG59O1xuXG4vLyBVbmxpa2UgYGluc3RhbmNlb2ZgLCB0aGlzIHdvcmtzIGFjcm9zcyByZWFsbXNcbmV4cG9ydCBjb25zdCBpc0V4ZWNhRXJyb3IgPSBlcnJvciA9PiBpc0Vycm9ySW5zdGFuY2UoZXJyb3IpICYmIGV4ZWNhRXJyb3JTeW1ib2wgaW4gZXJyb3I7XG5cbmNvbnN0IGV4ZWNhRXJyb3JTeW1ib2wgPSBTeW1ib2woJ2lzRXhlY2FFcnJvcicpO1xuXG5leHBvcnQgY29uc3QgaXNFcnJvckluc3RhbmNlID0gdmFsdWUgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJztcblxuLy8gV2UgdXNlIHR3byBkaWZmZXJlbnQgRXJyb3IgY2xhc3NlcyBmb3IgYXN5bmMvc3luYyBtZXRob2RzIHNpbmNlIHRoZXkgaGF2ZSBzbGlnaHRseSBkaWZmZXJlbnQgc2hhcGUgYW5kIHR5cGVzXG5leHBvcnQgY2xhc3MgRXhlY2FFcnJvciBleHRlbmRzIEVycm9yIHt9XG5zZXRFcnJvck5hbWUoRXhlY2FFcnJvciwgRXhlY2FFcnJvci5uYW1lKTtcblxuZXhwb3J0IGNsYXNzIEV4ZWNhU3luY0Vycm9yIGV4dGVuZHMgRXJyb3Ige31cbnNldEVycm9yTmFtZShFeGVjYVN5bmNFcnJvciwgRXhlY2FTeW5jRXJyb3IubmFtZSk7XG4iLCAiXG5leHBvcnQgY29uc3QgZ2V0UmVhbHRpbWVTaWduYWxzPSgpPT57XG5jb25zdCBsZW5ndGg9U0lHUlRNQVgtU0lHUlRNSU4rMTtcbnJldHVybiBBcnJheS5mcm9tKHtsZW5ndGh9LGdldFJlYWx0aW1lU2lnbmFsKVxufTtcblxuY29uc3QgZ2V0UmVhbHRpbWVTaWduYWw9KHZhbHVlLGluZGV4KT0+KHtcbm5hbWU6YFNJR1JUJHtpbmRleCsxfWAsXG5udW1iZXI6U0lHUlRNSU4raW5kZXgsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiQXBwbGljYXRpb24tc3BlY2lmaWMgc2lnbmFsIChyZWFsdGltZSlcIixcbnN0YW5kYXJkOlwicG9zaXhcIlxufSk7XG5cbmNvbnN0IFNJR1JUTUlOPTM0O1xuZXhwb3J0IGNvbnN0IFNJR1JUTUFYPTY0OyIsICJcblxuZXhwb3J0IGNvbnN0IFNJR05BTFM9W1xue1xubmFtZTpcIlNJR0hVUFwiLFxubnVtYmVyOjEsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiVGVybWluYWwgY2xvc2VkXCIsXG5zdGFuZGFyZDpcInBvc2l4XCJcbn0sXG57XG5uYW1lOlwiU0lHSU5UXCIsXG5udW1iZXI6MixcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJVc2VyIGludGVycnVwdGlvbiB3aXRoIENUUkwtQ1wiLFxuc3RhbmRhcmQ6XCJhbnNpXCJcbn0sXG57XG5uYW1lOlwiU0lHUVVJVFwiLFxubnVtYmVyOjMsXG5hY3Rpb246XCJjb3JlXCIsXG5kZXNjcmlwdGlvbjpcIlVzZXIgaW50ZXJydXB0aW9uIHdpdGggQ1RSTC1cXFxcXCIsXG5zdGFuZGFyZDpcInBvc2l4XCJcbn0sXG57XG5uYW1lOlwiU0lHSUxMXCIsXG5udW1iZXI6NCxcbmFjdGlvbjpcImNvcmVcIixcbmRlc2NyaXB0aW9uOlwiSW52YWxpZCBtYWNoaW5lIGluc3RydWN0aW9uXCIsXG5zdGFuZGFyZDpcImFuc2lcIlxufSxcbntcbm5hbWU6XCJTSUdUUkFQXCIsXG5udW1iZXI6NSxcbmFjdGlvbjpcImNvcmVcIixcbmRlc2NyaXB0aW9uOlwiRGVidWdnZXIgYnJlYWtwb2ludFwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiXG59LFxue1xubmFtZTpcIlNJR0FCUlRcIixcbm51bWJlcjo2LFxuYWN0aW9uOlwiY29yZVwiLFxuZGVzY3JpcHRpb246XCJBYm9ydGVkXCIsXG5zdGFuZGFyZDpcImFuc2lcIlxufSxcbntcbm5hbWU6XCJTSUdJT1RcIixcbm51bWJlcjo2LFxuYWN0aW9uOlwiY29yZVwiLFxuZGVzY3JpcHRpb246XCJBYm9ydGVkXCIsXG5zdGFuZGFyZDpcImJzZFwiXG59LFxue1xubmFtZTpcIlNJR0JVU1wiLFxubnVtYmVyOjcsXG5hY3Rpb246XCJjb3JlXCIsXG5kZXNjcmlwdGlvbjpcblwiQnVzIGVycm9yIGR1ZSB0byBtaXNhbGlnbmVkLCBub24tZXhpc3RpbmcgYWRkcmVzcyBvciBwYWdpbmcgZXJyb3JcIixcbnN0YW5kYXJkOlwiYnNkXCJcbn0sXG57XG5uYW1lOlwiU0lHRU1UXCIsXG5udW1iZXI6NyxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJDb21tYW5kIHNob3VsZCBiZSBlbXVsYXRlZCBidXQgaXMgbm90IGltcGxlbWVudGVkXCIsXG5zdGFuZGFyZDpcIm90aGVyXCJcbn0sXG57XG5uYW1lOlwiU0lHRlBFXCIsXG5udW1iZXI6OCxcbmFjdGlvbjpcImNvcmVcIixcbmRlc2NyaXB0aW9uOlwiRmxvYXRpbmcgcG9pbnQgYXJpdGhtZXRpYyBlcnJvclwiLFxuc3RhbmRhcmQ6XCJhbnNpXCJcbn0sXG57XG5uYW1lOlwiU0lHS0lMTFwiLFxubnVtYmVyOjksXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiRm9yY2VkIHRlcm1pbmF0aW9uXCIsXG5zdGFuZGFyZDpcInBvc2l4XCIsXG5mb3JjZWQ6dHJ1ZVxufSxcbntcbm5hbWU6XCJTSUdVU1IxXCIsXG5udW1iZXI6MTAsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiQXBwbGljYXRpb24tc3BlY2lmaWMgc2lnbmFsXCIsXG5zdGFuZGFyZDpcInBvc2l4XCJcbn0sXG57XG5uYW1lOlwiU0lHU0VHVlwiLFxubnVtYmVyOjExLFxuYWN0aW9uOlwiY29yZVwiLFxuZGVzY3JpcHRpb246XCJTZWdtZW50YXRpb24gZmF1bHRcIixcbnN0YW5kYXJkOlwiYW5zaVwiXG59LFxue1xubmFtZTpcIlNJR1VTUjJcIixcbm51bWJlcjoxMixcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJBcHBsaWNhdGlvbi1zcGVjaWZpYyBzaWduYWxcIixcbnN0YW5kYXJkOlwicG9zaXhcIlxufSxcbntcbm5hbWU6XCJTSUdQSVBFXCIsXG5udW1iZXI6MTMsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiQnJva2VuIHBpcGUgb3Igc29ja2V0XCIsXG5zdGFuZGFyZDpcInBvc2l4XCJcbn0sXG57XG5uYW1lOlwiU0lHQUxSTVwiLFxubnVtYmVyOjE0LFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIlRpbWVvdXQgb3IgdGltZXJcIixcbnN0YW5kYXJkOlwicG9zaXhcIlxufSxcbntcbm5hbWU6XCJTSUdURVJNXCIsXG5udW1iZXI6MTUsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiVGVybWluYXRpb25cIixcbnN0YW5kYXJkOlwiYW5zaVwiXG59LFxue1xubmFtZTpcIlNJR1NUS0ZMVFwiLFxubnVtYmVyOjE2LFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIlN0YWNrIGlzIGVtcHR5IG9yIG92ZXJmbG93ZWRcIixcbnN0YW5kYXJkOlwib3RoZXJcIlxufSxcbntcbm5hbWU6XCJTSUdDSExEXCIsXG5udW1iZXI6MTcsXG5hY3Rpb246XCJpZ25vcmVcIixcbmRlc2NyaXB0aW9uOlwiQ2hpbGQgcHJvY2VzcyB0ZXJtaW5hdGVkLCBwYXVzZWQgb3IgdW5wYXVzZWRcIixcbnN0YW5kYXJkOlwicG9zaXhcIlxufSxcbntcbm5hbWU6XCJTSUdDTERcIixcbm51bWJlcjoxNyxcbmFjdGlvbjpcImlnbm9yZVwiLFxuZGVzY3JpcHRpb246XCJDaGlsZCBwcm9jZXNzIHRlcm1pbmF0ZWQsIHBhdXNlZCBvciB1bnBhdXNlZFwiLFxuc3RhbmRhcmQ6XCJvdGhlclwiXG59LFxue1xubmFtZTpcIlNJR0NPTlRcIixcbm51bWJlcjoxOCxcbmFjdGlvbjpcInVucGF1c2VcIixcbmRlc2NyaXB0aW9uOlwiVW5wYXVzZWRcIixcbnN0YW5kYXJkOlwicG9zaXhcIixcbmZvcmNlZDp0cnVlXG59LFxue1xubmFtZTpcIlNJR1NUT1BcIixcbm51bWJlcjoxOSxcbmFjdGlvbjpcInBhdXNlXCIsXG5kZXNjcmlwdGlvbjpcIlBhdXNlZFwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiLFxuZm9yY2VkOnRydWVcbn0sXG57XG5uYW1lOlwiU0lHVFNUUFwiLFxubnVtYmVyOjIwLFxuYWN0aW9uOlwicGF1c2VcIixcbmRlc2NyaXB0aW9uOlwiUGF1c2VkIHVzaW5nIENUUkwtWiBvciBcXFwic3VzcGVuZFxcXCJcIixcbnN0YW5kYXJkOlwicG9zaXhcIlxufSxcbntcbm5hbWU6XCJTSUdUVElOXCIsXG5udW1iZXI6MjEsXG5hY3Rpb246XCJwYXVzZVwiLFxuZGVzY3JpcHRpb246XCJCYWNrZ3JvdW5kIHByb2Nlc3MgY2Fubm90IHJlYWQgdGVybWluYWwgaW5wdXRcIixcbnN0YW5kYXJkOlwicG9zaXhcIlxufSxcbntcbm5hbWU6XCJTSUdCUkVBS1wiLFxubnVtYmVyOjIxLFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIlVzZXIgaW50ZXJydXB0aW9uIHdpdGggQ1RSTC1CUkVBS1wiLFxuc3RhbmRhcmQ6XCJvdGhlclwiXG59LFxue1xubmFtZTpcIlNJR1RUT1VcIixcbm51bWJlcjoyMixcbmFjdGlvbjpcInBhdXNlXCIsXG5kZXNjcmlwdGlvbjpcIkJhY2tncm91bmQgcHJvY2VzcyBjYW5ub3Qgd3JpdGUgdG8gdGVybWluYWwgb3V0cHV0XCIsXG5zdGFuZGFyZDpcInBvc2l4XCJcbn0sXG57XG5uYW1lOlwiU0lHVVJHXCIsXG5udW1iZXI6MjMsXG5hY3Rpb246XCJpZ25vcmVcIixcbmRlc2NyaXB0aW9uOlwiU29ja2V0IHJlY2VpdmVkIG91dC1vZi1iYW5kIGRhdGFcIixcbnN0YW5kYXJkOlwiYnNkXCJcbn0sXG57XG5uYW1lOlwiU0lHWENQVVwiLFxubnVtYmVyOjI0LFxuYWN0aW9uOlwiY29yZVwiLFxuZGVzY3JpcHRpb246XCJQcm9jZXNzIHRpbWVkIG91dFwiLFxuc3RhbmRhcmQ6XCJic2RcIlxufSxcbntcbm5hbWU6XCJTSUdYRlNaXCIsXG5udW1iZXI6MjUsXG5hY3Rpb246XCJjb3JlXCIsXG5kZXNjcmlwdGlvbjpcIkZpbGUgdG9vIGJpZ1wiLFxuc3RhbmRhcmQ6XCJic2RcIlxufSxcbntcbm5hbWU6XCJTSUdWVEFMUk1cIixcbm51bWJlcjoyNixcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJUaW1lb3V0IG9yIHRpbWVyXCIsXG5zdGFuZGFyZDpcImJzZFwiXG59LFxue1xubmFtZTpcIlNJR1BST0ZcIixcbm51bWJlcjoyNyxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJUaW1lb3V0IG9yIHRpbWVyXCIsXG5zdGFuZGFyZDpcImJzZFwiXG59LFxue1xubmFtZTpcIlNJR1dJTkNIXCIsXG5udW1iZXI6MjgsXG5hY3Rpb246XCJpZ25vcmVcIixcbmRlc2NyaXB0aW9uOlwiVGVybWluYWwgd2luZG93IHNpemUgY2hhbmdlZFwiLFxuc3RhbmRhcmQ6XCJic2RcIlxufSxcbntcbm5hbWU6XCJTSUdJT1wiLFxubnVtYmVyOjI5LFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIkkvTyBpcyBhdmFpbGFibGVcIixcbnN0YW5kYXJkOlwib3RoZXJcIlxufSxcbntcbm5hbWU6XCJTSUdQT0xMXCIsXG5udW1iZXI6MjksXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiV2F0Y2hlZCBldmVudFwiLFxuc3RhbmRhcmQ6XCJvdGhlclwiXG59LFxue1xubmFtZTpcIlNJR0lORk9cIixcbm51bWJlcjoyOSxcbmFjdGlvbjpcImlnbm9yZVwiLFxuZGVzY3JpcHRpb246XCJSZXF1ZXN0IGZvciBwcm9jZXNzIGluZm9ybWF0aW9uXCIsXG5zdGFuZGFyZDpcIm90aGVyXCJcbn0sXG57XG5uYW1lOlwiU0lHUFdSXCIsXG5udW1iZXI6MzAsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiRGV2aWNlIHJ1bm5pbmcgb3V0IG9mIHBvd2VyXCIsXG5zdGFuZGFyZDpcInN5c3RlbXZcIlxufSxcbntcbm5hbWU6XCJTSUdTWVNcIixcbm51bWJlcjozMSxcbmFjdGlvbjpcImNvcmVcIixcbmRlc2NyaXB0aW9uOlwiSW52YWxpZCBzeXN0ZW0gY2FsbFwiLFxuc3RhbmRhcmQ6XCJvdGhlclwiXG59LFxue1xubmFtZTpcIlNJR1VOVVNFRFwiLFxubnVtYmVyOjMxLFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIkludmFsaWQgc3lzdGVtIGNhbGxcIixcbnN0YW5kYXJkOlwib3RoZXJcIlxufV07IiwgImltcG9ydHtjb25zdGFudHN9ZnJvbVwibm9kZTpvc1wiO1xuXG5pbXBvcnR7U0lHTkFMU31mcm9tXCIuL2NvcmUuanNcIjtcbmltcG9ydHtnZXRSZWFsdGltZVNpZ25hbHN9ZnJvbVwiLi9yZWFsdGltZS5qc1wiO1xuXG5cblxuZXhwb3J0IGNvbnN0IGdldFNpZ25hbHM9KCk9PntcbmNvbnN0IHJlYWx0aW1lU2lnbmFscz1nZXRSZWFsdGltZVNpZ25hbHMoKTtcbmNvbnN0IHNpZ25hbHM9Wy4uLlNJR05BTFMsLi4ucmVhbHRpbWVTaWduYWxzXS5tYXAobm9ybWFsaXplU2lnbmFsKTtcbnJldHVybiBzaWduYWxzXG59O1xuXG5cblxuXG5cblxuXG5jb25zdCBub3JtYWxpemVTaWduYWw9KHtcbm5hbWUsXG5udW1iZXI6ZGVmYXVsdE51bWJlcixcbmRlc2NyaXB0aW9uLFxuYWN0aW9uLFxuZm9yY2VkPWZhbHNlLFxuc3RhbmRhcmRcbn0pPT57XG5jb25zdHtcbnNpZ25hbHM6e1tuYW1lXTpjb25zdGFudFNpZ25hbH1cbn09Y29uc3RhbnRzO1xuY29uc3Qgc3VwcG9ydGVkPWNvbnN0YW50U2lnbmFsIT09dW5kZWZpbmVkO1xuY29uc3QgbnVtYmVyPXN1cHBvcnRlZD9jb25zdGFudFNpZ25hbDpkZWZhdWx0TnVtYmVyO1xucmV0dXJue25hbWUsbnVtYmVyLGRlc2NyaXB0aW9uLHN1cHBvcnRlZCxhY3Rpb24sZm9yY2VkLHN0YW5kYXJkfVxufTsiLCAiaW1wb3J0e2NvbnN0YW50c31mcm9tXCJub2RlOm9zXCI7XG5cbmltcG9ydHtTSUdSVE1BWH1mcm9tXCIuL3JlYWx0aW1lLmpzXCI7XG5pbXBvcnR7Z2V0U2lnbmFsc31mcm9tXCIuL3NpZ25hbHMuanNcIjtcblxuXG5cbmNvbnN0IGdldFNpZ25hbHNCeU5hbWU9KCk9PntcbmNvbnN0IHNpZ25hbHM9Z2V0U2lnbmFscygpO1xucmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhzaWduYWxzLm1hcChnZXRTaWduYWxCeU5hbWUpKVxufTtcblxuY29uc3QgZ2V0U2lnbmFsQnlOYW1lPSh7XG5uYW1lLFxubnVtYmVyLFxuZGVzY3JpcHRpb24sXG5zdXBwb3J0ZWQsXG5hY3Rpb24sXG5mb3JjZWQsXG5zdGFuZGFyZFxufSk9PltuYW1lLHtuYW1lLG51bWJlcixkZXNjcmlwdGlvbixzdXBwb3J0ZWQsYWN0aW9uLGZvcmNlZCxzdGFuZGFyZH1dO1xuXG5leHBvcnQgY29uc3Qgc2lnbmFsc0J5TmFtZT1nZXRTaWduYWxzQnlOYW1lKCk7XG5cblxuXG5cbmNvbnN0IGdldFNpZ25hbHNCeU51bWJlcj0oKT0+e1xuY29uc3Qgc2lnbmFscz1nZXRTaWduYWxzKCk7XG5jb25zdCBsZW5ndGg9U0lHUlRNQVgrMTtcbmNvbnN0IHNpZ25hbHNBPUFycmF5LmZyb20oe2xlbmd0aH0sKHZhbHVlLG51bWJlcik9PlxuZ2V0U2lnbmFsQnlOdW1iZXIobnVtYmVyLHNpZ25hbHMpXG4pO1xucmV0dXJuIE9iamVjdC5hc3NpZ24oe30sLi4uc2lnbmFsc0EpXG59O1xuXG5jb25zdCBnZXRTaWduYWxCeU51bWJlcj0obnVtYmVyLHNpZ25hbHMpPT57XG5jb25zdCBzaWduYWw9ZmluZFNpZ25hbEJ5TnVtYmVyKG51bWJlcixzaWduYWxzKTtcblxuaWYoc2lnbmFsPT09dW5kZWZpbmVkKXtcbnJldHVybnt9XG59XG5cbmNvbnN0e25hbWUsZGVzY3JpcHRpb24sc3VwcG9ydGVkLGFjdGlvbixmb3JjZWQsc3RhbmRhcmR9PXNpZ25hbDtcbnJldHVybntcbltudW1iZXJdOntcbm5hbWUsXG5udW1iZXIsXG5kZXNjcmlwdGlvbixcbnN1cHBvcnRlZCxcbmFjdGlvbixcbmZvcmNlZCxcbnN0YW5kYXJkXG59XG59XG59O1xuXG5cblxuY29uc3QgZmluZFNpZ25hbEJ5TnVtYmVyPShudW1iZXIsc2lnbmFscyk9PntcbmNvbnN0IHNpZ25hbD1zaWduYWxzLmZpbmQoKHtuYW1lfSk9PmNvbnN0YW50cy5zaWduYWxzW25hbWVdPT09bnVtYmVyKTtcblxuaWYoc2lnbmFsIT09dW5kZWZpbmVkKXtcbnJldHVybiBzaWduYWxcbn1cblxucmV0dXJuIHNpZ25hbHMuZmluZCgoc2lnbmFsQSk9PnNpZ25hbEEubnVtYmVyPT09bnVtYmVyKVxufTtcblxuZXhwb3J0IGNvbnN0IHNpZ25hbHNCeU51bWJlcj1nZXRTaWduYWxzQnlOdW1iZXIoKTsiLCAiaW1wb3J0IHtjb25zdGFudHN9IGZyb20gJ25vZGU6b3MnO1xuaW1wb3J0IHtzaWduYWxzQnlOYW1lfSBmcm9tICdodW1hbi1zaWduYWxzJztcblxuLy8gTm9ybWFsaXplIHNpZ25hbHMgZm9yIGNvbXBhcmlzb24gcHVycG9zZS5cbi8vIEFsc28gdmFsaWRhdGUgdGhlIHNpZ25hbCBleGlzdHMuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplS2lsbFNpZ25hbCA9IGtpbGxTaWduYWwgPT4ge1xuXHRjb25zdCBvcHRpb25OYW1lID0gJ29wdGlvbiBga2lsbFNpZ25hbGAnO1xuXHRpZiAoa2lsbFNpZ25hbCA9PT0gMCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgJHtvcHRpb25OYW1lfTogMCBjYW5ub3QgYmUgdXNlZC5gKTtcblx0fVxuXG5cdHJldHVybiBub3JtYWxpemVTaWduYWwoa2lsbFNpZ25hbCwgb3B0aW9uTmFtZSk7XG59O1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplU2lnbmFsQXJndW1lbnQgPSBzaWduYWwgPT4gc2lnbmFsID09PSAwXG5cdD8gc2lnbmFsXG5cdDogbm9ybWFsaXplU2lnbmFsKHNpZ25hbCwgJ2BzdWJwcm9jZXNzLmtpbGwoKWBcXCdzIGFyZ3VtZW50Jyk7XG5cbmNvbnN0IG5vcm1hbGl6ZVNpZ25hbCA9IChzaWduYWxOYW1lT3JJbnRlZ2VyLCBvcHRpb25OYW1lKSA9PiB7XG5cdGlmIChOdW1iZXIuaXNJbnRlZ2VyKHNpZ25hbE5hbWVPckludGVnZXIpKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZVNpZ25hbEludGVnZXIoc2lnbmFsTmFtZU9ySW50ZWdlciwgb3B0aW9uTmFtZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHNpZ25hbE5hbWVPckludGVnZXIgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZVNpZ25hbE5hbWUoc2lnbmFsTmFtZU9ySW50ZWdlciwgb3B0aW9uTmFtZSk7XG5cdH1cblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkICR7b3B0aW9uTmFtZX0gJHtTdHJpbmcoc2lnbmFsTmFtZU9ySW50ZWdlcil9OiBpdCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIGludGVnZXIuXFxuJHtnZXRBdmFpbGFibGVTaWduYWxzKCl9YCk7XG59O1xuXG5jb25zdCBub3JtYWxpemVTaWduYWxJbnRlZ2VyID0gKHNpZ25hbEludGVnZXIsIG9wdGlvbk5hbWUpID0+IHtcblx0aWYgKHNpZ25hbHNJbnRlZ2VyVG9OYW1lLmhhcyhzaWduYWxJbnRlZ2VyKSkge1xuXHRcdHJldHVybiBzaWduYWxzSW50ZWdlclRvTmFtZS5nZXQoc2lnbmFsSW50ZWdlcik7XG5cdH1cblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkICR7b3B0aW9uTmFtZX0gJHtzaWduYWxJbnRlZ2VyfTogdGhpcyBzaWduYWwgaW50ZWdlciBkb2VzIG5vdCBleGlzdC5cXG4ke2dldEF2YWlsYWJsZVNpZ25hbHMoKX1gKTtcbn07XG5cbmNvbnN0IGdldFNpZ25hbHNJbnRlZ2VyVG9OYW1lID0gKCkgPT4gbmV3IE1hcChPYmplY3QuZW50cmllcyhjb25zdGFudHMuc2lnbmFscylcblx0LnJldmVyc2UoKVxuXHQubWFwKChbc2lnbmFsTmFtZSwgc2lnbmFsSW50ZWdlcl0pID0+IFtzaWduYWxJbnRlZ2VyLCBzaWduYWxOYW1lXSkpO1xuXG5jb25zdCBzaWduYWxzSW50ZWdlclRvTmFtZSA9IGdldFNpZ25hbHNJbnRlZ2VyVG9OYW1lKCk7XG5cbmNvbnN0IG5vcm1hbGl6ZVNpZ25hbE5hbWUgPSAoc2lnbmFsTmFtZSwgb3B0aW9uTmFtZSkgPT4ge1xuXHRpZiAoc2lnbmFsTmFtZSBpbiBjb25zdGFudHMuc2lnbmFscykge1xuXHRcdHJldHVybiBzaWduYWxOYW1lO1xuXHR9XG5cblx0aWYgKHNpZ25hbE5hbWUudG9VcHBlckNhc2UoKSBpbiBjb25zdGFudHMuc2lnbmFscykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgJHtvcHRpb25OYW1lfSAnJHtzaWduYWxOYW1lfSc6IHBsZWFzZSByZW5hbWUgaXQgdG8gJyR7c2lnbmFsTmFtZS50b1VwcGVyQ2FzZSgpfScuYCk7XG5cdH1cblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkICR7b3B0aW9uTmFtZX0gJyR7c2lnbmFsTmFtZX0nOiB0aGlzIHNpZ25hbCBuYW1lIGRvZXMgbm90IGV4aXN0LlxcbiR7Z2V0QXZhaWxhYmxlU2lnbmFscygpfWApO1xufTtcblxuY29uc3QgZ2V0QXZhaWxhYmxlU2lnbmFscyA9ICgpID0+IGBBdmFpbGFibGUgc2lnbmFsIG5hbWVzOiAke2dldEF2YWlsYWJsZVNpZ25hbE5hbWVzKCl9LlxuQXZhaWxhYmxlIHNpZ25hbCBudW1iZXJzOiAke2dldEF2YWlsYWJsZVNpZ25hbEludGVnZXJzKCl9LmA7XG5cbmNvbnN0IGdldEF2YWlsYWJsZVNpZ25hbE5hbWVzID0gKCkgPT4gT2JqZWN0LmtleXMoY29uc3RhbnRzLnNpZ25hbHMpXG5cdC5zb3J0KClcblx0Lm1hcChzaWduYWxOYW1lID0+IGAnJHtzaWduYWxOYW1lfSdgKVxuXHQuam9pbignLCAnKTtcblxuY29uc3QgZ2V0QXZhaWxhYmxlU2lnbmFsSW50ZWdlcnMgPSAoKSA9PiBbLi4ubmV3IFNldChPYmplY3QudmFsdWVzKGNvbnN0YW50cy5zaWduYWxzKVxuXHQuc29ydCgoc2lnbmFsSW50ZWdlciwgc2lnbmFsSW50ZWdlclR3bykgPT4gc2lnbmFsSW50ZWdlciAtIHNpZ25hbEludGVnZXJUd28pKV1cblx0LmpvaW4oJywgJyk7XG5cbi8vIEh1bWFuLWZyaWVuZGx5IGRlc2NyaXB0aW9uIG9mIGEgc2lnbmFsXG5leHBvcnQgY29uc3QgZ2V0U2lnbmFsRGVzY3JpcHRpb24gPSBzaWduYWwgPT4gc2lnbmFsc0J5TmFtZVtzaWduYWxdLmRlc2NyaXB0aW9uO1xuIiwgImltcG9ydCB7c2V0VGltZW91dH0gZnJvbSAnbm9kZTp0aW1lcnMvcHJvbWlzZXMnO1xuaW1wb3J0IHtpc0Vycm9ySW5zdGFuY2V9IGZyb20gJy4uL3JldHVybi9maW5hbC1lcnJvci5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZVNpZ25hbEFyZ3VtZW50fSBmcm9tICcuL3NpZ25hbC5qcyc7XG5cbi8vIE5vcm1hbGl6ZSB0aGUgYGZvcmNlS2lsbEFmdGVyRGVsYXlgIG9wdGlvblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUZvcmNlS2lsbEFmdGVyRGVsYXkgPSBmb3JjZUtpbGxBZnRlckRlbGF5ID0+IHtcblx0aWYgKGZvcmNlS2lsbEFmdGVyRGVsYXkgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIGZvcmNlS2lsbEFmdGVyRGVsYXk7XG5cdH1cblxuXHRpZiAoZm9yY2VLaWxsQWZ0ZXJEZWxheSA9PT0gdHJ1ZSkge1xuXHRcdHJldHVybiBERUZBVUxUX0ZPUkNFX0tJTExfVElNRU9VVDtcblx0fVxuXG5cdGlmICghTnVtYmVyLmlzRmluaXRlKGZvcmNlS2lsbEFmdGVyRGVsYXkpIHx8IGZvcmNlS2lsbEFmdGVyRGVsYXkgPCAwKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgdGhlIFxcYGZvcmNlS2lsbEFmdGVyRGVsYXlcXGAgb3B0aW9uIHRvIGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIsIGdvdCBcXGAke2ZvcmNlS2lsbEFmdGVyRGVsYXl9XFxgICgke3R5cGVvZiBmb3JjZUtpbGxBZnRlckRlbGF5fSlgKTtcblx0fVxuXG5cdHJldHVybiBmb3JjZUtpbGxBZnRlckRlbGF5O1xufTtcblxuY29uc3QgREVGQVVMVF9GT1JDRV9LSUxMX1RJTUVPVVQgPSAxMDAwICogNTtcblxuLy8gTW9ua2V5LXBhdGNoZXMgYHN1YnByb2Nlc3Mua2lsbCgpYCB0byBhZGQgYGZvcmNlS2lsbEFmdGVyRGVsYXlgIGJlaGF2aW9yIGFuZCBgLmtpbGwoZXJyb3IpYFxuZXhwb3J0IGNvbnN0IHN1YnByb2Nlc3NLaWxsID0gKFxuXHR7a2lsbCwgb3B0aW9uczoge2ZvcmNlS2lsbEFmdGVyRGVsYXksIGtpbGxTaWduYWx9LCBvbkludGVybmFsRXJyb3IsIGNvbnRleHQsIGNvbnRyb2xsZXJ9LFxuXHRzaWduYWxPckVycm9yLFxuXHRlcnJvckFyZ3VtZW50LFxuKSA9PiB7XG5cdGNvbnN0IHtzaWduYWwsIGVycm9yfSA9IHBhcnNlS2lsbEFyZ3VtZW50cyhzaWduYWxPckVycm9yLCBlcnJvckFyZ3VtZW50LCBraWxsU2lnbmFsKTtcblx0ZW1pdEtpbGxFcnJvcihlcnJvciwgb25JbnRlcm5hbEVycm9yKTtcblx0Y29uc3Qga2lsbFJlc3VsdCA9IGtpbGwoc2lnbmFsKTtcblx0c2V0S2lsbFRpbWVvdXQoe1xuXHRcdGtpbGwsXG5cdFx0c2lnbmFsLFxuXHRcdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdFx0a2lsbFNpZ25hbCxcblx0XHRraWxsUmVzdWx0LFxuXHRcdGNvbnRleHQsXG5cdFx0Y29udHJvbGxlcixcblx0fSk7XG5cdHJldHVybiBraWxsUmVzdWx0O1xufTtcblxuY29uc3QgcGFyc2VLaWxsQXJndW1lbnRzID0gKHNpZ25hbE9yRXJyb3IsIGVycm9yQXJndW1lbnQsIGtpbGxTaWduYWwpID0+IHtcblx0Y29uc3QgW3NpZ25hbCA9IGtpbGxTaWduYWwsIGVycm9yXSA9IGlzRXJyb3JJbnN0YW5jZShzaWduYWxPckVycm9yKVxuXHRcdD8gW3VuZGVmaW5lZCwgc2lnbmFsT3JFcnJvcl1cblx0XHQ6IFtzaWduYWxPckVycm9yLCBlcnJvckFyZ3VtZW50XTtcblxuXHRpZiAodHlwZW9mIHNpZ25hbCAhPT0gJ3N0cmluZycgJiYgIU51bWJlci5pc0ludGVnZXIoc2lnbmFsKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGFuIGVycm9yIGluc3RhbmNlIG9yIGEgc2lnbmFsIG5hbWUgc3RyaW5nL2ludGVnZXI6ICR7U3RyaW5nKHNpZ25hbCl9YCk7XG5cdH1cblxuXHRpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCAmJiAhaXNFcnJvckluc3RhbmNlKGVycm9yKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgb3B0aW9uYWwuIElmIHNwZWNpZmllZCwgaXQgbXVzdCBiZSBhbiBlcnJvciBpbnN0YW5jZTogJHtlcnJvcn1gKTtcblx0fVxuXG5cdHJldHVybiB7c2lnbmFsOiBub3JtYWxpemVTaWduYWxBcmd1bWVudChzaWduYWwpLCBlcnJvcn07XG59O1xuXG4vLyBGYWlscyByaWdodCBhd2F5IHdoZW4gY2FsbGluZyBgc3VicHJvY2Vzcy5raWxsKGVycm9yKWAuXG4vLyBEb2VzIG5vdCB3YWl0IGZvciBhY3R1YWwgc2lnbmFsIHRlcm1pbmF0aW9uLlxuLy8gVXNlcyBhIGRlZmVycmVkIHByb21pc2UgaW5zdGVhZCBvZiB0aGUgYGVycm9yYCBldmVudCBvbiB0aGUgc3VicHJvY2VzcywgYXMgdGhpcyBpcyBsZXNzIGludHJ1c2l2ZS5cbmNvbnN0IGVtaXRLaWxsRXJyb3IgPSAoZXJyb3IsIG9uSW50ZXJuYWxFcnJvcikgPT4ge1xuXHRpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdG9uSW50ZXJuYWxFcnJvci5yZWplY3QoZXJyb3IpO1xuXHR9XG59O1xuXG5jb25zdCBzZXRLaWxsVGltZW91dCA9IGFzeW5jICh7a2lsbCwgc2lnbmFsLCBmb3JjZUtpbGxBZnRlckRlbGF5LCBraWxsU2lnbmFsLCBraWxsUmVzdWx0LCBjb250ZXh0LCBjb250cm9sbGVyfSkgPT4ge1xuXHRpZiAoc2lnbmFsID09PSBraWxsU2lnbmFsICYmIGtpbGxSZXN1bHQpIHtcblx0XHRraWxsT25UaW1lb3V0KHtcblx0XHRcdGtpbGwsXG5cdFx0XHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRcdFx0Y29udGV4dCxcblx0XHRcdGNvbnRyb2xsZXJTaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyBGb3JjZWZ1bGx5IHRlcm1pbmF0ZSBhIHN1YnByb2Nlc3MgYWZ0ZXIgYSB0aW1lb3V0XG5leHBvcnQgY29uc3Qga2lsbE9uVGltZW91dCA9IGFzeW5jICh7a2lsbCwgZm9yY2VLaWxsQWZ0ZXJEZWxheSwgY29udGV4dCwgY29udHJvbGxlclNpZ25hbH0pID0+IHtcblx0aWYgKGZvcmNlS2lsbEFmdGVyRGVsYXkgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBzZXRUaW1lb3V0KGZvcmNlS2lsbEFmdGVyRGVsYXksIHVuZGVmaW5lZCwge3NpZ25hbDogY29udHJvbGxlclNpZ25hbH0pO1xuXHRcdGlmIChraWxsKCdTSUdLSUxMJykpIHtcblx0XHRcdGNvbnRleHQuaXNGb3JjZWZ1bGx5VGVybWluYXRlZCA/Pz0gdHJ1ZTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG4iLCAiaW1wb3J0IHtvbmNlfSBmcm9tICdub2RlOmV2ZW50cyc7XG5cbi8vIENvbWJpbmVzIGB1dGlsLmFib3J0ZWQoKWAgYW5kIGBldmVudHMuYWRkQWJvcnRMaXN0ZW5lcigpYDogcHJvbWlzZS1iYXNlZCBhbmQgY2xlYW5lZCB1cCB3aXRoIGEgc3RvcCBzaWduYWxcbmV4cG9ydCBjb25zdCBvbkFib3J0ZWRTaWduYWwgPSBhc3luYyAobWFpblNpZ25hbCwgc3RvcFNpZ25hbCkgPT4ge1xuXHRpZiAoIW1haW5TaWduYWwuYWJvcnRlZCkge1xuXHRcdGF3YWl0IG9uY2UobWFpblNpZ25hbCwgJ2Fib3J0Jywge3NpZ25hbDogc3RvcFNpZ25hbH0pO1xuXHR9XG59O1xuIiwgImltcG9ydCB7b25BYm9ydGVkU2lnbmFsfSBmcm9tICcuLi91dGlscy9hYm9ydC1zaWduYWwuanMnO1xuXG4vLyBWYWxpZGF0ZSB0aGUgYGNhbmNlbFNpZ25hbGAgb3B0aW9uXG5leHBvcnQgY29uc3QgdmFsaWRhdGVDYW5jZWxTaWduYWwgPSAoe2NhbmNlbFNpZ25hbH0pID0+IHtcblx0aWYgKGNhbmNlbFNpZ25hbCAhPT0gdW5kZWZpbmVkICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjYW5jZWxTaWduYWwpICE9PSAnW29iamVjdCBBYm9ydFNpZ25hbF0nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBUaGUgXFxgY2FuY2VsU2lnbmFsXFxgIG9wdGlvbiBtdXN0IGJlIGFuIEFib3J0U2lnbmFsOiAke1N0cmluZyhjYW5jZWxTaWduYWwpfWApO1xuXHR9XG59O1xuXG4vLyBUZXJtaW5hdGUgdGhlIHN1YnByb2Nlc3Mgd2hlbiBhYm9ydGluZyB0aGUgYGNhbmNlbFNpZ25hbGAgb3B0aW9uIGFuZCBgZ3JhY2VmdWxTaWduYWxgIGlzIGBmYWxzZWBcbmV4cG9ydCBjb25zdCB0aHJvd09uQ2FuY2VsID0gKHtzdWJwcm9jZXNzLCBjYW5jZWxTaWduYWwsIGdyYWNlZnVsQ2FuY2VsLCBjb250ZXh0LCBjb250cm9sbGVyfSkgPT4gY2FuY2VsU2lnbmFsID09PSB1bmRlZmluZWQgfHwgZ3JhY2VmdWxDYW5jZWxcblx0PyBbXVxuXHQ6IFt0ZXJtaW5hdGVPbkNhbmNlbChzdWJwcm9jZXNzLCBjYW5jZWxTaWduYWwsIGNvbnRleHQsIGNvbnRyb2xsZXIpXTtcblxuY29uc3QgdGVybWluYXRlT25DYW5jZWwgPSBhc3luYyAoc3VicHJvY2VzcywgY2FuY2VsU2lnbmFsLCBjb250ZXh0LCB7c2lnbmFsfSkgPT4ge1xuXHRhd2FpdCBvbkFib3J0ZWRTaWduYWwoY2FuY2VsU2lnbmFsLCBzaWduYWwpO1xuXHRjb250ZXh0LnRlcm1pbmF0aW9uUmVhc29uID8/PSAnY2FuY2VsJztcblx0c3VicHJvY2Vzcy5raWxsKCk7XG5cdHRocm93IGNhbmNlbFNpZ25hbC5yZWFzb247XG59O1xuIiwgIi8vIFZhbGlkYXRlIHRoZSBJUEMgY2hhbm5lbCBpcyBjb25uZWN0ZWQgYmVmb3JlIHJlY2VpdmluZy9zZW5kaW5nIG1lc3NhZ2VzXG5leHBvcnQgY29uc3QgdmFsaWRhdGVJcGNNZXRob2QgPSAoe21ldGhvZE5hbWUsIGlzU3VicHJvY2VzcywgaXBjLCBpc0Nvbm5lY3RlZH0pID0+IHtcblx0dmFsaWRhdGVJcGNPcHRpb24obWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzLCBpcGMpO1xuXHR2YWxpZGF0ZUNvbm5lY3Rpb24obWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzLCBpc0Nvbm5lY3RlZCk7XG59O1xuXG4vLyBCZXR0ZXIgZXJyb3IgbWVzc2FnZSB3aGVuIGZvcmdldHRpbmcgdG8gc2V0IGBpcGM6IHRydWVgIGFuZCB1c2luZyB0aGUgSVBDIG1ldGhvZHNcbmNvbnN0IHZhbGlkYXRlSXBjT3B0aW9uID0gKG1ldGhvZE5hbWUsIGlzU3VicHJvY2VzcywgaXBjKSA9PiB7XG5cdGlmICghaXBjKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke2dldE1ldGhvZE5hbWUobWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzKX0gY2FuIG9ubHkgYmUgdXNlZCBpZiB0aGUgXFxgaXBjXFxgIG9wdGlvbiBpcyBcXGB0cnVlXFxgLmApO1xuXHR9XG59O1xuXG4vLyBCZXR0ZXIgZXJyb3IgbWVzc2FnZSB3aGVuIG9uZSBwcm9jZXNzIGRvZXMgbm90IHNlbmQvcmVjZWl2ZSBtZXNzYWdlcyBvbmNlIHRoZSBvdGhlciBwcm9jZXNzIGhhcyBkaXNjb25uZWN0ZWQuXG4vLyBUaGlzIGFsc28gbWFrZXMgaXQgY2xlYXIgdGhhdCBhbnkgYnVmZmVyZWQgbWVzc2FnZXMgYXJlIGxvc3Qgb25jZSBlaXRoZXIgcHJvY2VzcyBoYXMgZGlzY29ubmVjdGVkLlxuLy8gQWxzbyB3aGVuIGFib3J0aW5nIGBjYW5jZWxTaWduYWxgIGFmdGVyIGRpc2Nvbm5lY3RpbmcgdGhlIElQQy5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUNvbm5lY3Rpb24gPSAobWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzLCBpc0Nvbm5lY3RlZCkgPT4ge1xuXHRpZiAoIWlzQ29ubmVjdGVkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke2dldE1ldGhvZE5hbWUobWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzKX0gY2Fubm90IGJlIHVzZWQ6IHRoZSAke2dldE90aGVyUHJvY2Vzc05hbWUoaXNTdWJwcm9jZXNzKX0gaGFzIGFscmVhZHkgZXhpdGVkIG9yIGRpc2Nvbm5lY3RlZC5gKTtcblx0fVxufTtcblxuLy8gV2hlbiBgZ2V0T25lTWVzc2FnZSgpYCBjb3VsZCBub3QgY29tcGxldGUgZHVlIHRvIGFuIGVhcmx5IGRpc2Nvbm5lY3Rpb25cbmV4cG9ydCBjb25zdCB0aHJvd09uRWFybHlEaXNjb25uZWN0ID0gaXNTdWJwcm9jZXNzID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKGAke2dldE1ldGhvZE5hbWUoJ2dldE9uZU1lc3NhZ2UnLCBpc1N1YnByb2Nlc3MpfSBjb3VsZCBub3QgY29tcGxldGU6IHRoZSAke2dldE90aGVyUHJvY2Vzc05hbWUoaXNTdWJwcm9jZXNzKX0gZXhpdGVkIG9yIGRpc2Nvbm5lY3RlZC5gKTtcbn07XG5cbi8vIFdoZW4gYm90aCBwcm9jZXNzZXMgdXNlIGBzZW5kTWVzc2FnZSgpYCB3aXRoIGBzdHJpY3RgIGF0IHRoZSBzYW1lIHRpbWVcbmV4cG9ydCBjb25zdCB0aHJvd09uU3RyaWN0RGVhZGxvY2tFcnJvciA9IGlzU3VicHJvY2VzcyA9PiB7XG5cdHRocm93IG5ldyBFcnJvcihgJHtnZXRNZXRob2ROYW1lKCdzZW5kTWVzc2FnZScsIGlzU3VicHJvY2Vzcyl9IGZhaWxlZDogdGhlICR7Z2V0T3RoZXJQcm9jZXNzTmFtZShpc1N1YnByb2Nlc3MpfSBpcyBzZW5kaW5nIGEgbWVzc2FnZSB0b28sIGluc3RlYWQgb2YgbGlzdGVuaW5nIHRvIGluY29taW5nIG1lc3NhZ2VzLlxuVGhpcyBjYW4gYmUgZml4ZWQgYnkgYm90aCBzZW5kaW5nIGEgbWVzc2FnZSBhbmQgbGlzdGVuaW5nIHRvIGluY29taW5nIG1lc3NhZ2VzIGF0IHRoZSBzYW1lIHRpbWU6XG5cbmNvbnN0IFtyZWNlaXZlZE1lc3NhZ2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuXHQke2dldE1ldGhvZE5hbWUoJ2dldE9uZU1lc3NhZ2UnLCBpc1N1YnByb2Nlc3MpfSxcblx0JHtnZXRNZXRob2ROYW1lKCdzZW5kTWVzc2FnZScsIGlzU3VicHJvY2VzcywgJ21lc3NhZ2UsIHtzdHJpY3Q6IHRydWV9Jyl9LFxuXSk7YCk7XG59O1xuXG4vLyBXaGVuIHRoZSBvdGhlciBwcm9jZXNzIHVzZWQgYHN0cmljdGAgYnV0IHRoZSBjdXJyZW50IHByb2Nlc3MgaGFkIEkvTyBlcnJvciBjYWxsaW5nIGBzZW5kTWVzc2FnZSgpYCBmb3IgdGhlIHJlc3BvbnNlXG5leHBvcnQgY29uc3QgZ2V0U3RyaWN0UmVzcG9uc2VFcnJvciA9IChlcnJvciwgaXNTdWJwcm9jZXNzKSA9PiBuZXcgRXJyb3IoYCR7Z2V0TWV0aG9kTmFtZSgnc2VuZE1lc3NhZ2UnLCBpc1N1YnByb2Nlc3MpfSBmYWlsZWQgd2hlbiBzZW5kaW5nIGFuIGFja25vd2xlZGdtZW50IHJlc3BvbnNlIHRvIHRoZSAke2dldE90aGVyUHJvY2Vzc05hbWUoaXNTdWJwcm9jZXNzKX0uYCwge2NhdXNlOiBlcnJvcn0pO1xuXG4vLyBXaGVuIHVzaW5nIGBzdHJpY3RgIGJ1dCB0aGUgb3RoZXIgcHJvY2VzcyB3YXMgbm90IGxpc3RlbmluZyBmb3IgbWVzc2FnZXNcbmV4cG9ydCBjb25zdCB0aHJvd09uTWlzc2luZ1N0cmljdCA9IGlzU3VicHJvY2VzcyA9PiB7XG5cdHRocm93IG5ldyBFcnJvcihgJHtnZXRNZXRob2ROYW1lKCdzZW5kTWVzc2FnZScsIGlzU3VicHJvY2Vzcyl9IGZhaWxlZDogdGhlICR7Z2V0T3RoZXJQcm9jZXNzTmFtZShpc1N1YnByb2Nlc3MpfSBpcyBub3QgbGlzdGVuaW5nIHRvIGluY29taW5nIG1lc3NhZ2VzLmApO1xufTtcblxuLy8gV2hlbiB1c2luZyBgc3RyaWN0YCBidXQgdGhlIG90aGVyIHByb2Nlc3MgZGlzY29ubmVjdGVkIGJlZm9yZSByZWNlaXZpbmcgdGhlIG1lc3NhZ2VcbmV4cG9ydCBjb25zdCB0aHJvd09uU3RyaWN0RGlzY29ubmVjdCA9IGlzU3VicHJvY2VzcyA9PiB7XG5cdHRocm93IG5ldyBFcnJvcihgJHtnZXRNZXRob2ROYW1lKCdzZW5kTWVzc2FnZScsIGlzU3VicHJvY2Vzcyl9IGZhaWxlZDogdGhlICR7Z2V0T3RoZXJQcm9jZXNzTmFtZShpc1N1YnByb2Nlc3MpfSBleGl0ZWQgd2l0aG91dCBsaXN0ZW5pbmcgdG8gaW5jb21pbmcgbWVzc2FnZXMuYCk7XG59O1xuXG4vLyBXaGVuIHRoZSBjdXJyZW50IHByb2Nlc3MgZGlzY29ubmVjdHMgd2hpbGUgdGhlIHN1YnByb2Nlc3MgaXMgbGlzdGVuaW5nIHRvIGBjYW5jZWxTaWduYWxgXG5leHBvcnQgY29uc3QgZ2V0QWJvcnREaXNjb25uZWN0RXJyb3IgPSAoKSA9PiBuZXcgRXJyb3IoYFxcYGNhbmNlbFNpZ25hbFxcYCBhYm9ydGVkOiB0aGUgJHtnZXRPdGhlclByb2Nlc3NOYW1lKHRydWUpfSBkaXNjb25uZWN0ZWQuYCk7XG5cbi8vIFdoZW4gdGhlIHN1YnByb2Nlc3MgdXNlcyBgY2FuY2VsU2lnbmFsYCBidXQgbm90IHRoZSBjdXJyZW50IHByb2Nlc3NcbmV4cG9ydCBjb25zdCB0aHJvd09uTWlzc2luZ1BhcmVudCA9ICgpID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKCdgZ2V0Q2FuY2VsU2lnbmFsKClgIGNhbm5vdCBiZSB1c2VkIHdpdGhvdXQgc2V0dGluZyB0aGUgYGNhbmNlbFNpZ25hbGAgc3VicHJvY2VzcyBvcHRpb24uJyk7XG59O1xuXG4vLyBFUElQRSBjYW4gaGFwcGVuIHdoZW4gc2VuZGluZyBhIG1lc3NhZ2UgdG8gYSBzdWJwcm9jZXNzIHRoYXQgaXMgY2xvc2luZyBidXQgaGFzIG5vdCBkaXNjb25uZWN0ZWQgeWV0XG5leHBvcnQgY29uc3QgaGFuZGxlRXBpcGVFcnJvciA9ICh7ZXJyb3IsIG1ldGhvZE5hbWUsIGlzU3VicHJvY2Vzc30pID0+IHtcblx0aWYgKGVycm9yLmNvZGUgPT09ICdFUElQRScpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7Z2V0TWV0aG9kTmFtZShtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MpfSBjYW5ub3QgYmUgdXNlZDogdGhlICR7Z2V0T3RoZXJQcm9jZXNzTmFtZShpc1N1YnByb2Nlc3MpfSBpcyBkaXNjb25uZWN0aW5nLmAsIHtjYXVzZTogZXJyb3J9KTtcblx0fVxufTtcblxuLy8gQmV0dGVyIGVycm9yIG1lc3NhZ2Ugd2hlbiBzZW5kaW5nIG1lc3NhZ2VzIHdoaWNoIGNhbm5vdCBiZSBzZXJpYWxpemVkLlxuLy8gV29ya3Mgd2l0aCBib3RoIGBzZXJpYWxpemF0aW9uOiAnYWR2YW5jZWQnYCBhbmQgYHNlcmlhbGl6YXRpb246ICdqc29uJ2AuXG5leHBvcnQgY29uc3QgaGFuZGxlU2VyaWFsaXphdGlvbkVycm9yID0gKHtlcnJvciwgbWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzLCBtZXNzYWdlfSkgPT4ge1xuXHRpZiAoaXNTZXJpYWxpemF0aW9uRXJyb3IoZXJyb3IpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGAke2dldE1ldGhvZE5hbWUobWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzKX0ncyBhcmd1bWVudCB0eXBlIGlzIGludmFsaWQ6IHRoZSBtZXNzYWdlIGNhbm5vdCBiZSBzZXJpYWxpemVkOiAke1N0cmluZyhtZXNzYWdlKX0uYCwge2NhdXNlOiBlcnJvcn0pO1xuXHR9XG59O1xuXG5jb25zdCBpc1NlcmlhbGl6YXRpb25FcnJvciA9ICh7Y29kZSwgbWVzc2FnZX0pID0+IFNFUklBTElaQVRJT05fRVJST1JfQ09ERVMuaGFzKGNvZGUpXG5cdHx8IFNFUklBTElaQVRJT05fRVJST1JfTUVTU0FHRVMuc29tZShzZXJpYWxpemF0aW9uRXJyb3JNZXNzYWdlID0+IG1lc3NhZ2UuaW5jbHVkZXMoc2VyaWFsaXphdGlvbkVycm9yTWVzc2FnZSkpO1xuXG4vLyBgZXJyb3IuY29kZWAgc2V0IGJ5IE5vZGUuanMgd2hlbiBpdCBmYWlsZWQgdG8gc2VyaWFsaXplIHRoZSBtZXNzYWdlXG5jb25zdCBTRVJJQUxJWkFUSU9OX0VSUk9SX0NPREVTID0gbmV3IFNldChbXG5cdC8vIE1lc3NhZ2UgaXMgYHVuZGVmaW5lZGBcblx0J0VSUl9NSVNTSU5HX0FSR1MnLFxuXHQvLyBNZXNzYWdlIGlzIGEgZnVuY3Rpb24sIGEgYmlnaW50LCBhIHN5bWJvbFxuXHQnRVJSX0lOVkFMSURfQVJHX1RZUEUnLFxuXSk7XG5cbi8vIGBlcnJvci5tZXNzYWdlYCBzZXQgYnkgTm9kZS5qcyB3aGVuIGl0IGZhaWxlZCB0byBzZXJpYWxpemUgdGhlIG1lc3NhZ2VcbmNvbnN0IFNFUklBTElaQVRJT05fRVJST1JfTUVTU0FHRVMgPSBbXG5cdC8vIE1lc3NhZ2UgaXMgYSBwcm9taXNlIG9yIGEgcHJveHksIHdpdGggYHNlcmlhbGl6YXRpb246ICdhZHZhbmNlZCdgXG5cdCdjb3VsZCBub3QgYmUgY2xvbmVkJyxcblx0Ly8gTWVzc2FnZSBoYXMgY3ljbGVzLCB3aXRoIGBzZXJpYWxpemF0aW9uOiAnanNvbidgXG5cdCdjaXJjdWxhciBzdHJ1Y3R1cmUnLFxuXHQvLyBNZXNzYWdlIGhhcyBjeWNsZXMgaW5zaWRlIHRvSlNPTigpLCB3aXRoIGBzZXJpYWxpemF0aW9uOiAnanNvbidgXG5cdCdjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWQnLFxuXTtcblxuY29uc3QgZ2V0TWV0aG9kTmFtZSA9IChtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MsIHBhcmFtZXRlcnMgPSAnJykgPT4gbWV0aG9kTmFtZSA9PT0gJ2NhbmNlbFNpZ25hbCdcblx0PyAnYGNhbmNlbFNpZ25hbGBcXCdzIGBjb250cm9sbGVyLmFib3J0KClgJ1xuXHQ6IGAke2dldE5hbWVzcGFjZU5hbWUoaXNTdWJwcm9jZXNzKX0ke21ldGhvZE5hbWV9KCR7cGFyYW1ldGVyc30pYDtcblxuY29uc3QgZ2V0TmFtZXNwYWNlTmFtZSA9IGlzU3VicHJvY2VzcyA9PiBpc1N1YnByb2Nlc3MgPyAnJyA6ICdzdWJwcm9jZXNzLic7XG5cbmNvbnN0IGdldE90aGVyUHJvY2Vzc05hbWUgPSBpc1N1YnByb2Nlc3MgPT4gaXNTdWJwcm9jZXNzID8gJ3BhcmVudCBwcm9jZXNzJyA6ICdzdWJwcm9jZXNzJztcblxuLy8gV2hlbiBhbnkgZXJyb3IgYXJpc2VzLCB3ZSBkaXNjb25uZWN0IHRoZSBJUEMuXG4vLyBPdGhlcndpc2UsIGl0IGlzIGxpa2VseSB0aGF0IG9uZSBvZiB0aGUgcHJvY2Vzc2VzIHdpbGwgc3RvcCBzZW5kaW5nL3JlY2VpdmluZyBtZXNzYWdlcy5cbi8vIFRoaXMgd291bGQgbGVhdmUgdGhlIG90aGVyIHByb2Nlc3MgaGFuZ2luZy5cbmV4cG9ydCBjb25zdCBkaXNjb25uZWN0ID0gYW55UHJvY2VzcyA9PiB7XG5cdGlmIChhbnlQcm9jZXNzLmNvbm5lY3RlZCkge1xuXHRcdGFueVByb2Nlc3MuZGlzY29ubmVjdCgpO1xuXHR9XG59O1xuIiwgImV4cG9ydCBjb25zdCBjcmVhdGVEZWZlcnJlZCA9ICgpID0+IHtcblx0Y29uc3QgbWV0aG9kcyA9IHt9O1xuXHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdE9iamVjdC5hc3NpZ24obWV0aG9kcywge3Jlc29sdmUsIHJlamVjdH0pO1xuXHR9KTtcblx0cmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvbWlzZSwgbWV0aG9kcyk7XG59O1xuIiwgImltcG9ydCB7cGFyc2VGZH0gZnJvbSAnLi9zcGVjaWZpYy5qcyc7XG5cbi8vIFJldHJpZXZlIHN0cmVhbSB0YXJnZXRlZCBieSB0aGUgYHRvYCBvcHRpb25cbmV4cG9ydCBjb25zdCBnZXRUb1N0cmVhbSA9IChkZXN0aW5hdGlvbiwgdG8gPSAnc3RkaW4nKSA9PiB7XG5cdGNvbnN0IGlzV3JpdGFibGUgPSB0cnVlO1xuXHRjb25zdCB7b3B0aW9ucywgZmlsZURlc2NyaXB0b3JzfSA9IFNVQlBST0NFU1NfT1BUSU9OUy5nZXQoZGVzdGluYXRpb24pO1xuXHRjb25zdCBmZE51bWJlciA9IGdldEZkTnVtYmVyKGZpbGVEZXNjcmlwdG9ycywgdG8sIGlzV3JpdGFibGUpO1xuXHRjb25zdCBkZXN0aW5hdGlvblN0cmVhbSA9IGRlc3RpbmF0aW9uLnN0ZGlvW2ZkTnVtYmVyXTtcblxuXHRpZiAoZGVzdGluYXRpb25TdHJlYW0gPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGdldEludmFsaWRTdGRpb09wdGlvbk1lc3NhZ2UoZmROdW1iZXIsIHRvLCBvcHRpb25zLCBpc1dyaXRhYmxlKSk7XG5cdH1cblxuXHRyZXR1cm4gZGVzdGluYXRpb25TdHJlYW07XG59O1xuXG4vLyBSZXRyaWV2ZSBzdHJlYW0gdGFyZ2V0ZWQgYnkgdGhlIGBmcm9tYCBvcHRpb25cbmV4cG9ydCBjb25zdCBnZXRGcm9tU3RyZWFtID0gKHNvdXJjZSwgZnJvbSA9ICdzdGRvdXQnKSA9PiB7XG5cdGNvbnN0IGlzV3JpdGFibGUgPSBmYWxzZTtcblx0Y29uc3Qge29wdGlvbnMsIGZpbGVEZXNjcmlwdG9yc30gPSBTVUJQUk9DRVNTX09QVElPTlMuZ2V0KHNvdXJjZSk7XG5cdGNvbnN0IGZkTnVtYmVyID0gZ2V0RmROdW1iZXIoZmlsZURlc2NyaXB0b3JzLCBmcm9tLCBpc1dyaXRhYmxlKTtcblx0Y29uc3Qgc291cmNlU3RyZWFtID0gZmROdW1iZXIgPT09ICdhbGwnID8gc291cmNlLmFsbCA6IHNvdXJjZS5zdGRpb1tmZE51bWJlcl07XG5cblx0aWYgKHNvdXJjZVN0cmVhbSA9PT0gbnVsbCB8fCBzb3VyY2VTdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoZ2V0SW52YWxpZFN0ZGlvT3B0aW9uTWVzc2FnZShmZE51bWJlciwgZnJvbSwgb3B0aW9ucywgaXNXcml0YWJsZSkpO1xuXHR9XG5cblx0cmV0dXJuIHNvdXJjZVN0cmVhbTtcbn07XG5cbi8vIEtlZXBzIHRyYWNrIG9mIHRoZSBvcHRpb25zIHBhc3NlZCB0byBlYWNoIEV4ZWNhIGNhbGxcbmV4cG9ydCBjb25zdCBTVUJQUk9DRVNTX09QVElPTlMgPSBuZXcgV2Vha01hcCgpO1xuXG5jb25zdCBnZXRGZE51bWJlciA9IChmaWxlRGVzY3JpcHRvcnMsIGZkTmFtZSwgaXNXcml0YWJsZSkgPT4ge1xuXHRjb25zdCBmZE51bWJlciA9IHBhcnNlRmROdW1iZXIoZmROYW1lLCBpc1dyaXRhYmxlKTtcblx0dmFsaWRhdGVGZE51bWJlcihmZE51bWJlciwgZmROYW1lLCBpc1dyaXRhYmxlLCBmaWxlRGVzY3JpcHRvcnMpO1xuXHRyZXR1cm4gZmROdW1iZXI7XG59O1xuXG5jb25zdCBwYXJzZUZkTnVtYmVyID0gKGZkTmFtZSwgaXNXcml0YWJsZSkgPT4ge1xuXHRjb25zdCBmZE51bWJlciA9IHBhcnNlRmQoZmROYW1lKTtcblx0aWYgKGZkTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gZmROdW1iZXI7XG5cdH1cblxuXHRjb25zdCB7dmFsaWRPcHRpb25zLCBkZWZhdWx0VmFsdWV9ID0gaXNXcml0YWJsZVxuXHRcdD8ge3ZhbGlkT3B0aW9uczogJ1wic3RkaW5cIicsIGRlZmF1bHRWYWx1ZTogJ3N0ZGluJ31cblx0XHQ6IHt2YWxpZE9wdGlvbnM6ICdcInN0ZG91dFwiLCBcInN0ZGVyclwiLCBcImFsbFwiJywgZGVmYXVsdFZhbHVlOiAnc3Rkb3V0J307XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoYFwiJHtnZXRPcHRpb25OYW1lKGlzV3JpdGFibGUpfVwiIG11c3Qgbm90IGJlIFwiJHtmZE5hbWV9XCIuXG5JdCBtdXN0IGJlICR7dmFsaWRPcHRpb25zfSBvciBcImZkM1wiLCBcImZkNFwiIChhbmQgc28gb24pLlxuSXQgaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIFwiJHtkZWZhdWx0VmFsdWV9XCIuYCk7XG59O1xuXG5jb25zdCB2YWxpZGF0ZUZkTnVtYmVyID0gKGZkTnVtYmVyLCBmZE5hbWUsIGlzV3JpdGFibGUsIGZpbGVEZXNjcmlwdG9ycykgPT4ge1xuXHRjb25zdCBmaWxlRGVzY3JpcHRvciA9IGZpbGVEZXNjcmlwdG9yc1tnZXRVc2VkRGVzY3JpcHRvcihmZE51bWJlcildO1xuXHRpZiAoZmlsZURlc2NyaXB0b3IgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFwiJHtnZXRPcHRpb25OYW1lKGlzV3JpdGFibGUpfVwiIG11c3Qgbm90IGJlICR7ZmROYW1lfS4gVGhhdCBmaWxlIGRlc2NyaXB0b3IgZG9lcyBub3QgZXhpc3QuXG5QbGVhc2Ugc2V0IHRoZSBcInN0ZGlvXCIgb3B0aW9uIHRvIGVuc3VyZSB0aGF0IGZpbGUgZGVzY3JpcHRvciBleGlzdHMuYCk7XG5cdH1cblxuXHRpZiAoZmlsZURlc2NyaXB0b3IuZGlyZWN0aW9uID09PSAnaW5wdXQnICYmICFpc1dyaXRhYmxlKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgXCIke2dldE9wdGlvbk5hbWUoaXNXcml0YWJsZSl9XCIgbXVzdCBub3QgYmUgJHtmZE5hbWV9LiBJdCBtdXN0IGJlIGEgcmVhZGFibGUgc3RyZWFtLCBub3Qgd3JpdGFibGUuYCk7XG5cdH1cblxuXHRpZiAoZmlsZURlc2NyaXB0b3IuZGlyZWN0aW9uICE9PSAnaW5wdXQnICYmIGlzV3JpdGFibGUpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBcIiR7Z2V0T3B0aW9uTmFtZShpc1dyaXRhYmxlKX1cIiBtdXN0IG5vdCBiZSAke2ZkTmFtZX0uIEl0IG11c3QgYmUgYSB3cml0YWJsZSBzdHJlYW0sIG5vdCByZWFkYWJsZS5gKTtcblx0fVxufTtcblxuY29uc3QgZ2V0SW52YWxpZFN0ZGlvT3B0aW9uTWVzc2FnZSA9IChmZE51bWJlciwgZmROYW1lLCBvcHRpb25zLCBpc1dyaXRhYmxlKSA9PiB7XG5cdGlmIChmZE51bWJlciA9PT0gJ2FsbCcgJiYgIW9wdGlvbnMuYWxsKSB7XG5cdFx0cmV0dXJuICdUaGUgXCJhbGxcIiBvcHRpb24gbXVzdCBiZSB0cnVlIHRvIHVzZSBcImZyb206IFxcJ2FsbFxcJ1wiLic7XG5cdH1cblxuXHRjb25zdCB7b3B0aW9uTmFtZSwgb3B0aW9uVmFsdWV9ID0gZ2V0SW52YWxpZFN0ZGlvT3B0aW9uKGZkTnVtYmVyLCBvcHRpb25zKTtcblx0cmV0dXJuIGBUaGUgXCIke29wdGlvbk5hbWV9OiAke3NlcmlhbGl6ZU9wdGlvblZhbHVlKG9wdGlvblZhbHVlKX1cIiBvcHRpb24gaXMgaW5jb21wYXRpYmxlIHdpdGggdXNpbmcgXCIke2dldE9wdGlvbk5hbWUoaXNXcml0YWJsZSl9OiAke3NlcmlhbGl6ZU9wdGlvblZhbHVlKGZkTmFtZSl9XCIuXG5QbGVhc2Ugc2V0IHRoaXMgb3B0aW9uIHdpdGggXCJwaXBlXCIgaW5zdGVhZC5gO1xufTtcblxuY29uc3QgZ2V0SW52YWxpZFN0ZGlvT3B0aW9uID0gKGZkTnVtYmVyLCB7c3RkaW4sIHN0ZG91dCwgc3RkZXJyLCBzdGRpb30pID0+IHtcblx0Y29uc3QgdXNlZERlc2NyaXB0b3IgPSBnZXRVc2VkRGVzY3JpcHRvcihmZE51bWJlcik7XG5cblx0aWYgKHVzZWREZXNjcmlwdG9yID09PSAwICYmIHN0ZGluICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4ge29wdGlvbk5hbWU6ICdzdGRpbicsIG9wdGlvblZhbHVlOiBzdGRpbn07XG5cdH1cblxuXHRpZiAodXNlZERlc2NyaXB0b3IgPT09IDEgJiYgc3Rkb3V0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4ge29wdGlvbk5hbWU6ICdzdGRvdXQnLCBvcHRpb25WYWx1ZTogc3Rkb3V0fTtcblx0fVxuXG5cdGlmICh1c2VkRGVzY3JpcHRvciA9PT0gMiAmJiBzdGRlcnIgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB7b3B0aW9uTmFtZTogJ3N0ZGVycicsIG9wdGlvblZhbHVlOiBzdGRlcnJ9O1xuXHR9XG5cblx0cmV0dXJuIHtvcHRpb25OYW1lOiBgc3RkaW9bJHt1c2VkRGVzY3JpcHRvcn1dYCwgb3B0aW9uVmFsdWU6IHN0ZGlvW3VzZWREZXNjcmlwdG9yXX07XG59O1xuXG5jb25zdCBnZXRVc2VkRGVzY3JpcHRvciA9IGZkTnVtYmVyID0+IGZkTnVtYmVyID09PSAnYWxsJyA/IDEgOiBmZE51bWJlcjtcblxuY29uc3QgZ2V0T3B0aW9uTmFtZSA9IGlzV3JpdGFibGUgPT4gaXNXcml0YWJsZSA/ICd0bycgOiAnZnJvbSc7XG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpemVPcHRpb25WYWx1ZSA9IHZhbHVlID0+IHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gYCcke3ZhbHVlfSdgO1xuXHR9XG5cblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBgJHt2YWx1ZX1gIDogJ1N0cmVhbSc7XG59O1xuIiwgImltcG9ydCB7YWRkQWJvcnRMaXN0ZW5lcn0gZnJvbSAnbm9kZTpldmVudHMnO1xuXG4vLyBUZW1wb3JhcmlseSBpbmNyZWFzZSB0aGUgbWF4aW11bSBudW1iZXIgb2YgbGlzdGVuZXJzIG9uIGFuIGV2ZW50RW1pdHRlclxuZXhwb3J0IGNvbnN0IGluY3JlbWVudE1heExpc3RlbmVycyA9IChldmVudEVtaXR0ZXIsIG1heExpc3RlbmVyc0luY3JlbWVudCwgc2lnbmFsKSA9PiB7XG5cdGNvbnN0IG1heExpc3RlbmVycyA9IGV2ZW50RW1pdHRlci5nZXRNYXhMaXN0ZW5lcnMoKTtcblx0aWYgKG1heExpc3RlbmVycyA9PT0gMCB8fCBtYXhMaXN0ZW5lcnMgPT09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGV2ZW50RW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMobWF4TGlzdGVuZXJzICsgbWF4TGlzdGVuZXJzSW5jcmVtZW50KTtcblx0YWRkQWJvcnRMaXN0ZW5lcihzaWduYWwsICgpID0+IHtcblx0XHRldmVudEVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKGV2ZW50RW1pdHRlci5nZXRNYXhMaXN0ZW5lcnMoKSAtIG1heExpc3RlbmVyc0luY3JlbWVudCk7XG5cdH0pO1xufTtcbiIsICIvLyBCeSBkZWZhdWx0LCBOb2RlLmpzIGtlZXBzIHRoZSBzdWJwcm9jZXNzIGFsaXZlIHdoaWxlIGl0IGhhcyBhIGBtZXNzYWdlYCBvciBgZGlzY29ubmVjdGAgbGlzdGVuZXIuXG4vLyBXZSByZXBsaWNhdGUgdGhlIHNhbWUgbG9naWMgZm9yIHRoZSBldmVudHMgdGhhdCB3ZSBwcm94eS5cbi8vIFRoaXMgZW5zdXJlcyB0aGUgc3VicHJvY2VzcyBpcyBrZXB0IGFsaXZlIHdoaWxlIGBnZXRPbmVNZXNzYWdlKClgIGFuZCBgZ2V0RWFjaE1lc3NhZ2UoKWAgYXJlIG9uZ29pbmcuXG4vLyBUaGlzIGlzIG5vdCBhIHByb2JsZW0gd2l0aCBgc2VuZE1lc3NhZ2UoKWAgc2luY2UgTm9kZS5qcyBoYW5kbGVzIHRoYXQgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4vLyBXZSBkbyBub3QgdXNlIGBhbnlQcm9jZXNzLmNoYW5uZWwucmVmKClgIHNpbmNlIHRoaXMgd291bGQgcHJldmVudCB0aGUgYXV0b21hdGljIGAuY2hhbm5lbC5yZWZDb3VudGVkKClgIE5vZGUuanMgaXMgZG9pbmcuXG4vLyBXZSBrZWVwIGEgcmVmZXJlbmNlIHRvIGBhbnlQcm9jZXNzLmNoYW5uZWxgIHNpbmNlIGl0IG1pZ2h0IGJlIGBudWxsYCB3aGlsZSBgZ2V0T25lTWVzc2FnZSgpYCBvciBgZ2V0RWFjaE1lc3NhZ2UoKWAgaXMgc3RpbGwgcHJvY2Vzc2luZyBkZWJvdW5jZWQgbWVzc2FnZXMuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvMmFhZWFhODYzYzM1YmVmYTJlYmFhOThmYjc3MzdlYzg0ZGY0ZDhlOS9saWIvaW50ZXJuYWwvY2hpbGRfcHJvY2Vzcy5qcyNMNTQ3XG5leHBvcnQgY29uc3QgYWRkUmVmZXJlbmNlID0gKGNoYW5uZWwsIHJlZmVyZW5jZSkgPT4ge1xuXHRpZiAocmVmZXJlbmNlKSB7XG5cdFx0YWRkUmVmZXJlbmNlQ291bnQoY2hhbm5lbCk7XG5cdH1cbn07XG5cbmNvbnN0IGFkZFJlZmVyZW5jZUNvdW50ID0gY2hhbm5lbCA9PiB7XG5cdGNoYW5uZWwucmVmQ291bnRlZCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVJlZmVyZW5jZSA9IChjaGFubmVsLCByZWZlcmVuY2UpID0+IHtcblx0aWYgKHJlZmVyZW5jZSkge1xuXHRcdHJlbW92ZVJlZmVyZW5jZUNvdW50KGNoYW5uZWwpO1xuXHR9XG59O1xuXG5jb25zdCByZW1vdmVSZWZlcmVuY2VDb3VudCA9IGNoYW5uZWwgPT4ge1xuXHRjaGFubmVsLnVucmVmQ291bnRlZCgpO1xufTtcblxuLy8gVG8gcHJveHkgZXZlbnRzLCB3ZSBzZXR1cCBzb21lIGdsb2JhbCBsaXN0ZW5lcnMgb24gdGhlIGBtZXNzYWdlYCBhbmQgYGRpc2Nvbm5lY3RgIGV2ZW50cy5cbi8vIFRob3NlIHNob3VsZCBub3Qga2VlcCB0aGUgc3VicHJvY2VzcyBhbGl2ZSwgc28gd2UgcmVtb3ZlIHRoZSBhdXRvbWF0aWMgY291bnRpbmcgdGhhdCBOb2RlLmpzIGlzIGRvaW5nLlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iLzFiOTY1MjcwYTljMjczZDRjZjcwZTg4MDhlOWQyOGI5YWRhNzg0NGYvbGliL2NoaWxkX3Byb2Nlc3MuanMjTDE4MFxuZXhwb3J0IGNvbnN0IHVuZG9BZGRlZFJlZmVyZW5jZXMgPSAoY2hhbm5lbCwgaXNTdWJwcm9jZXNzKSA9PiB7XG5cdGlmIChpc1N1YnByb2Nlc3MpIHtcblx0XHRyZW1vdmVSZWZlcmVuY2VDb3VudChjaGFubmVsKTtcblx0XHRyZW1vdmVSZWZlcmVuY2VDb3VudChjaGFubmVsKTtcblx0fVxufTtcblxuLy8gUmV2ZXJzZSBpdCBkdXJpbmcgYGRpc2Nvbm5lY3RgXG5leHBvcnQgY29uc3QgcmVkb0FkZGVkUmVmZXJlbmNlcyA9IChjaGFubmVsLCBpc1N1YnByb2Nlc3MpID0+IHtcblx0aWYgKGlzU3VicHJvY2Vzcykge1xuXHRcdGFkZFJlZmVyZW5jZUNvdW50KGNoYW5uZWwpO1xuXHRcdGFkZFJlZmVyZW5jZUNvdW50KGNoYW5uZWwpO1xuXHR9XG59O1xuIiwgImltcG9ydCB7b25jZX0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtzY2hlZHVsZXJ9IGZyb20gJ25vZGU6dGltZXJzL3Byb21pc2VzJztcbmltcG9ydCB7d2FpdEZvck91dGdvaW5nTWVzc2FnZXN9IGZyb20gJy4vb3V0Z29pbmcuanMnO1xuaW1wb3J0IHtyZWRvQWRkZWRSZWZlcmVuY2VzfSBmcm9tICcuL3JlZmVyZW5jZS5qcyc7XG5pbXBvcnQge2hhbmRsZVN0cmljdFJlcXVlc3QsIGhhbmRsZVN0cmljdFJlc3BvbnNlfSBmcm9tICcuL3N0cmljdC5qcyc7XG5pbXBvcnQge2hhbmRsZUFib3J0LCBhYm9ydE9uRGlzY29ubmVjdH0gZnJvbSAnLi9ncmFjZWZ1bC5qcyc7XG5cbi8vIEJ5IGRlZmF1bHQsIE5vZGUuanMgYnVmZmVycyBgbWVzc2FnZWAgZXZlbnRzLlxuLy8gIC0gQnVmZmVyaW5nIGhhcHBlbnMgd2hlbiB0aGVyZSBpcyBhIGBtZXNzYWdlYCBldmVudCBpcyBlbWl0dGVkIGJ1dCB0aGVyZSBpcyBubyBoYW5kbGVyLlxuLy8gIC0gQXMgc29vbiBhcyBhIGBtZXNzYWdlYCBldmVudCBoYW5kbGVyIGlzIHNldCwgYWxsIGJ1ZmZlcmVkIGBtZXNzYWdlYCBldmVudHMgYXJlIGVtaXR0ZWQsIGVtcHR5aW5nIHRoZSBidWZmZXIuXG4vLyAgLSBUaGlzIGhhcHBlbnMgYm90aCBpbiB0aGUgY3VycmVudCBwcm9jZXNzIGFuZCB0aGUgc3VicHJvY2Vzcy5cbi8vICAtIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi81MDE1NDZlOGYzNzA1OWNkNTc3MDQxZTIzOTQxYjY0MGQwZDRkNDA2L2xpYi9pbnRlcm5hbC9jaGlsZF9wcm9jZXNzLmpzI0w3MTlcbi8vIFRoaXMgaXMgaGVscGZ1bC4gTm90YWJseSwgdGhpcyBhbGxvd3Mgc2VuZGluZyBtZXNzYWdlcyB0byBhIHN1YnByb2Nlc3MgdGhhdCdzIHN0aWxsIGluaXRpYWxpemluZy5cbi8vIEhvd2V2ZXIsIGl0IGhhcyBzZXZlcmFsIHByb2JsZW1zLlxuLy8gIC0gVGhpcyB3b3JrcyB3aXRoIGBldmVudHMub24oKWAgYnV0IG5vdCBgZXZlbnRzLm9uY2UoKWAgc2luY2UgYWxsIGJ1ZmZlcmVkIG1lc3NhZ2VzIGFyZSBlbWl0dGVkIGF0IG9uY2UuXG4vLyAgICBGb3IgZXhhbXBsZSwgdXNlcnMgY2Fubm90IGNhbGwgYGF3YWl0IGdldE9uZU1lc3NhZ2UoKWAvYGdldEVhY2hNZXNzYWdlKClgIG11bHRpcGxlIHRpbWVzIGluIGEgcm93LlxuLy8gIC0gV2hlbiBhIHVzZXIgaW50ZW50aW9uYWxseSBzdGFydHMgbGlzdGVuaW5nIHRvIGBtZXNzYWdlYCBhdCBhIHNwZWNpZmljIHBvaW50IGluIHRpbWUsIHBhc3QgYG1lc3NhZ2VgIGV2ZW50cyBhcmUgcmVwbGF5ZWQsIHdoaWNoIG1pZ2h0IGJlIHVuZXhwZWN0ZWQuXG4vLyAgLSBCdWZmZXJpbmcgaXMgdW5saW1pdGVkLCB3aGljaCBtaWdodCBsZWFkIHRvIGFuIG91dC1vZi1tZW1vcnkgY3Jhc2guXG4vLyAgLSBUaGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIG11bHRpcGxlIGNvbnN1bWVycy5cbi8vICAgIEZvciBleGFtcGxlLCBFeGVjYSBjb25zdW1lcyBldmVudHMgd2l0aCBib3RoIGByZXN1bHQuaXBjT3V0cHV0YCBhbmQgbWFudWFsIElQQyBjYWxscyBsaWtlIGBnZXRPbmVNZXNzYWdlKClgLlxuLy8gICAgU2luY2UgYHJlc3VsdC5pcGNPdXRwdXRgIHJlYWRzIGFsbCBpbmNvbWluZyBtZXNzYWdlcywgbm8gYnVmZmVyaW5nIGhhcHBlbnMgZm9yIG1hbnVhbCBJUEMgY2FsbHMuXG4vLyAgLSBGb3JnZXR0aW5nIHRvIHNldHVwIGEgYG1lc3NhZ2VgIGxpc3RlbmVyLCBvciBzZXR0aW5nIGl0IHVwIHRvbyBsYXRlLCBpcyBhIHByb2dyYW1taW5nIG1pc3Rha2UuXG4vLyAgICBUaGUgZGVmYXVsdCBiZWhhdmlvciBkb2VzIG5vdCBhbGxvdyB1c2VycyB0byByZWFsaXplIHRoZXkgbWFkZSB0aGF0IG1pc3Rha2UuXG4vLyBUbyBzb2x2ZSB0aG9zZSBwcm9ibGVtcywgaW5zdGVhZCBvZiBidWZmZXJpbmcgbWVzc2FnZXMsIHdlIGRlYm91bmNlIHRoZW0uXG4vLyBUaGUgYG1lc3NhZ2VgIGV2ZW50IHNvIGl0IGlzIGVtaXR0ZWQgYXQgbW9zdCBvbmNlIHBlciBtYWNyb3Rhc2suXG5leHBvcnQgY29uc3Qgb25NZXNzYWdlID0gYXN5bmMgKHthbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MsIGlwY0VtaXR0ZXJ9LCB3cmFwcGVkTWVzc2FnZSkgPT4ge1xuXHRpZiAoaGFuZGxlU3RyaWN0UmVzcG9uc2Uod3JhcHBlZE1lc3NhZ2UpIHx8IGhhbmRsZUFib3J0KHdyYXBwZWRNZXNzYWdlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghSU5DT01JTkdfTUVTU0FHRVMuaGFzKGFueVByb2Nlc3MpKSB7XG5cdFx0SU5DT01JTkdfTUVTU0FHRVMuc2V0KGFueVByb2Nlc3MsIFtdKTtcblx0fVxuXG5cdGNvbnN0IGluY29taW5nTWVzc2FnZXMgPSBJTkNPTUlOR19NRVNTQUdFUy5nZXQoYW55UHJvY2Vzcyk7XG5cdGluY29taW5nTWVzc2FnZXMucHVzaCh3cmFwcGVkTWVzc2FnZSk7XG5cblx0aWYgKGluY29taW5nTWVzc2FnZXMubGVuZ3RoID4gMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdoaWxlIChpbmNvbWluZ01lc3NhZ2VzLmxlbmd0aCA+IDApIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuXHRcdGF3YWl0IHdhaXRGb3JPdXRnb2luZ01lc3NhZ2VzKGFueVByb2Nlc3MsIGlwY0VtaXR0ZXIsIHdyYXBwZWRNZXNzYWdlKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuXHRcdGF3YWl0IHNjaGVkdWxlci55aWVsZCgpO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3Bcblx0XHRjb25zdCBtZXNzYWdlID0gYXdhaXQgaGFuZGxlU3RyaWN0UmVxdWVzdCh7XG5cdFx0XHR3cmFwcGVkTWVzc2FnZTogaW5jb21pbmdNZXNzYWdlc1swXSxcblx0XHRcdGFueVByb2Nlc3MsXG5cdFx0XHRjaGFubmVsLFxuXHRcdFx0aXNTdWJwcm9jZXNzLFxuXHRcdFx0aXBjRW1pdHRlcixcblx0XHR9KTtcblxuXHRcdGluY29taW5nTWVzc2FnZXMuc2hpZnQoKTtcblx0XHRpcGNFbWl0dGVyLmVtaXQoJ21lc3NhZ2UnLCBtZXNzYWdlKTtcblx0XHRpcGNFbWl0dGVyLmVtaXQoJ21lc3NhZ2U6ZG9uZScpO1xuXHR9XG59O1xuXG4vLyBJZiB0aGUgYG1lc3NhZ2VgIGV2ZW50IGlzIGN1cnJlbnRseSBkZWJvdW5jZWQsIHRoZSBgZGlzY29ubmVjdGAgZXZlbnQgbXVzdCB3YWl0IGZvciBpdFxuZXhwb3J0IGNvbnN0IG9uRGlzY29ubmVjdCA9IGFzeW5jICh7YW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzLCBpcGNFbWl0dGVyLCBib3VuZE9uTWVzc2FnZX0pID0+IHtcblx0YWJvcnRPbkRpc2Nvbm5lY3QoKTtcblxuXHRjb25zdCBpbmNvbWluZ01lc3NhZ2VzID0gSU5DT01JTkdfTUVTU0FHRVMuZ2V0KGFueVByb2Nlc3MpO1xuXHR3aGlsZSAoaW5jb21pbmdNZXNzYWdlcz8ubGVuZ3RoID4gMCkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG5cdFx0YXdhaXQgb25jZShpcGNFbWl0dGVyLCAnbWVzc2FnZTpkb25lJyk7XG5cdH1cblxuXHRhbnlQcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCdtZXNzYWdlJywgYm91bmRPbk1lc3NhZ2UpO1xuXHRyZWRvQWRkZWRSZWZlcmVuY2VzKGNoYW5uZWwsIGlzU3VicHJvY2Vzcyk7XG5cdGlwY0VtaXR0ZXIuY29ubmVjdGVkID0gZmFsc2U7XG5cdGlwY0VtaXR0ZXIuZW1pdCgnZGlzY29ubmVjdCcpO1xufTtcblxuY29uc3QgSU5DT01JTkdfTUVTU0FHRVMgPSBuZXcgV2Vha01hcCgpO1xuIiwgImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge29uTWVzc2FnZSwgb25EaXNjb25uZWN0fSBmcm9tICcuL2luY29taW5nLmpzJztcbmltcG9ydCB7dW5kb0FkZGVkUmVmZXJlbmNlc30gZnJvbSAnLi9yZWZlcmVuY2UuanMnO1xuXG4vLyBGb3J3YXJkIHRoZSBgbWVzc2FnZWAgYW5kIGBkaXNjb25uZWN0YCBldmVudHMgZnJvbSB0aGUgcHJvY2VzcyBhbmQgc3VicHJvY2VzcyB0byBhIHByb3h5IGVtaXR0ZXIuXG4vLyBUaGlzIHByZXZlbnRzIHRoZSBgZXJyb3JgIGV2ZW50IGZyb20gc3RvcHBpbmcgSVBDLlxuLy8gVGhpcyBhbHNvIGFsbG93cyBkZWJvdW5jaW5nIHRoZSBgbWVzc2FnZWAgZXZlbnQuXG5leHBvcnQgY29uc3QgZ2V0SXBjRW1pdHRlciA9IChhbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MpID0+IHtcblx0aWYgKElQQ19FTUlUVEVSUy5oYXMoYW55UHJvY2VzcykpIHtcblx0XHRyZXR1cm4gSVBDX0VNSVRURVJTLmdldChhbnlQcm9jZXNzKTtcblx0fVxuXG5cdC8vIFVzZSBhbiBgRXZlbnRFbWl0dGVyYCwgbGlrZSB0aGUgYHByb2Nlc3NgIHRoYXQgaXMgYmVpbmcgcHJveGllZFxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZXZlbnQtdGFyZ2V0XG5cdGNvbnN0IGlwY0VtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGlwY0VtaXR0ZXIuY29ubmVjdGVkID0gdHJ1ZTtcblx0SVBDX0VNSVRURVJTLnNldChhbnlQcm9jZXNzLCBpcGNFbWl0dGVyKTtcblx0Zm9yd2FyZEV2ZW50cyh7XG5cdFx0aXBjRW1pdHRlcixcblx0XHRhbnlQcm9jZXNzLFxuXHRcdGNoYW5uZWwsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHR9KTtcblx0cmV0dXJuIGlwY0VtaXR0ZXI7XG59O1xuXG5jb25zdCBJUENfRU1JVFRFUlMgPSBuZXcgV2Vha01hcCgpO1xuXG4vLyBUaGUgYG1lc3NhZ2VgIGFuZCBgZGlzY29ubmVjdGAgZXZlbnRzIGFyZSBidWZmZXJlZCBpbiB0aGUgc3VicHJvY2VzcyB1bnRpbCB0aGUgZmlyc3QgbGlzdGVuZXIgaXMgc2V0dXAuXG4vLyBIb3dldmVyLCB1bmJ1ZmZlcmluZyBoYXBwZW5zIGFmdGVyIG9uZSB0aWNrLCBzbyB0aGlzIGdpdmUgZW5vdWdoIHRpbWUgZm9yIHRoZSBjYWxsZXIgdG8gc2V0dXAgdGhlIGxpc3RlbmVyIG9uIHRoZSBwcm94eSBlbWl0dGVyIGZpcnN0LlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iLzJhYWVhYTg2M2MzNWJlZmEyZWJhYTk4ZmI3NzM3ZWM4NGRmNGQ4ZTkvbGliL2ludGVybmFsL2NoaWxkX3Byb2Nlc3MuanMjTDcyMVxuY29uc3QgZm9yd2FyZEV2ZW50cyA9ICh7aXBjRW1pdHRlciwgYW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzfSkgPT4ge1xuXHRjb25zdCBib3VuZE9uTWVzc2FnZSA9IG9uTWVzc2FnZS5iaW5kKHVuZGVmaW5lZCwge1xuXHRcdGFueVByb2Nlc3MsXG5cdFx0Y2hhbm5lbCxcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0aXBjRW1pdHRlcixcblx0fSk7XG5cdGFueVByb2Nlc3Mub24oJ21lc3NhZ2UnLCBib3VuZE9uTWVzc2FnZSk7XG5cdGFueVByb2Nlc3Mub25jZSgnZGlzY29ubmVjdCcsIG9uRGlzY29ubmVjdC5iaW5kKHVuZGVmaW5lZCwge1xuXHRcdGFueVByb2Nlc3MsXG5cdFx0Y2hhbm5lbCxcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0aXBjRW1pdHRlcixcblx0XHRib3VuZE9uTWVzc2FnZSxcblx0fSkpO1xuXHR1bmRvQWRkZWRSZWZlcmVuY2VzKGNoYW5uZWwsIGlzU3VicHJvY2Vzcyk7XG59O1xuXG4vLyBDaGVjayB3aGV0aGVyIHRoZXJlIG1pZ2h0IHN0aWxsIGJlIHNvbWUgYG1lc3NhZ2VgIGV2ZW50cyB0byByZWNlaXZlXG5leHBvcnQgY29uc3QgaXNDb25uZWN0ZWQgPSBhbnlQcm9jZXNzID0+IHtcblx0Y29uc3QgaXBjRW1pdHRlciA9IElQQ19FTUlUVEVSUy5nZXQoYW55UHJvY2Vzcyk7XG5cdHJldHVybiBpcGNFbWl0dGVyID09PSB1bmRlZmluZWRcblx0XHQ/IGFueVByb2Nlc3MuY2hhbm5lbCAhPT0gbnVsbFxuXHRcdDogaXBjRW1pdHRlci5jb25uZWN0ZWQ7XG59O1xuIiwgImltcG9ydCB7b25jZX0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtjcmVhdGVEZWZlcnJlZH0gZnJvbSAnLi4vdXRpbHMvZGVmZXJyZWQuanMnO1xuaW1wb3J0IHtpbmNyZW1lbnRNYXhMaXN0ZW5lcnN9IGZyb20gJy4uL3V0aWxzL21heC1saXN0ZW5lcnMuanMnO1xuaW1wb3J0IHtzZW5kTWVzc2FnZX0gZnJvbSAnLi9zZW5kLmpzJztcbmltcG9ydCB7dGhyb3dPbk1pc3NpbmdTdHJpY3QsIHRocm93T25TdHJpY3REaXNjb25uZWN0LCB0aHJvd09uU3RyaWN0RGVhZGxvY2tFcnJvcn0gZnJvbSAnLi92YWxpZGF0aW9uLmpzJztcbmltcG9ydCB7Z2V0SXBjRW1pdHRlcn0gZnJvbSAnLi9mb3J3YXJkLmpzJztcbmltcG9ydCB7aGFzTWVzc2FnZUxpc3RlbmVyc30gZnJvbSAnLi9vdXRnb2luZy5qcyc7XG5cbi8vIFdoZW4gdXNpbmcgdGhlIGBzdHJpY3RgIG9wdGlvbiwgd3JhcCB0aGUgbWVzc2FnZSB3aXRoIG1ldGFkYXRhIGR1cmluZyBgc2VuZE1lc3NhZ2UoKWBcbmV4cG9ydCBjb25zdCBoYW5kbGVTZW5kU3RyaWN0ID0gKHthbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MsIG1lc3NhZ2UsIHN0cmljdH0pID0+IHtcblx0aWYgKCFzdHJpY3QpIHtcblx0XHRyZXR1cm4gbWVzc2FnZTtcblx0fVxuXG5cdGNvbnN0IGlwY0VtaXR0ZXIgPSBnZXRJcGNFbWl0dGVyKGFueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2Vzcyk7XG5cdGNvbnN0IGhhc0xpc3RlbmVycyA9IGhhc01lc3NhZ2VMaXN0ZW5lcnMoYW55UHJvY2VzcywgaXBjRW1pdHRlcik7XG5cdHJldHVybiB7XG5cdFx0aWQ6IGNvdW50KyssXG5cdFx0dHlwZTogUkVRVUVTVF9UWVBFLFxuXHRcdG1lc3NhZ2UsXG5cdFx0aGFzTGlzdGVuZXJzLFxuXHR9O1xufTtcblxubGV0IGNvdW50ID0gMG47XG5cbi8vIEhhbmRsZXMgd2hlbiBib3RoIHByb2Nlc3NlcyBhcmUgY2FsbGluZyBgc2VuZE1lc3NhZ2UoKWAgd2l0aCBgc3RyaWN0YCBhdCB0aGUgc2FtZSB0aW1lLlxuLy8gSWYgbmVpdGhlciBwcm9jZXNzIGlzIGxpc3RlbmluZywgdGhpcyB3b3VsZCBjcmVhdGUgYSBkZWFkbG9jay4gV2UgZGV0ZWN0IGl0IGFuZCB0aHJvdy5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVN0cmljdERlYWRsb2NrID0gKG91dGdvaW5nTWVzc2FnZXMsIHdyYXBwZWRNZXNzYWdlKSA9PiB7XG5cdGlmICh3cmFwcGVkTWVzc2FnZT8udHlwZSAhPT0gUkVRVUVTVF9UWVBFIHx8IHdyYXBwZWRNZXNzYWdlLmhhc0xpc3RlbmVycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3Qge2lkfSBvZiBvdXRnb2luZ01lc3NhZ2VzKSB7XG5cdFx0aWYgKGlkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFNUUklDVF9SRVNQT05TRVNbaWRdLnJlc29sdmUoe2lzRGVhZGxvY2s6IHRydWUsIGhhc0xpc3RlbmVyczogZmFsc2V9KTtcblx0XHR9XG5cdH1cbn07XG5cbi8vIFRoZSBvdGhlciBwcm9jZXNzIHRoZW4gc2VuZHMgdGhlIGFja25vd2xlZGdtZW50IGJhY2sgYXMgYSByZXNwb25zZVxuZXhwb3J0IGNvbnN0IGhhbmRsZVN0cmljdFJlcXVlc3QgPSBhc3luYyAoe3dyYXBwZWRNZXNzYWdlLCBhbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MsIGlwY0VtaXR0ZXJ9KSA9PiB7XG5cdGlmICh3cmFwcGVkTWVzc2FnZT8udHlwZSAhPT0gUkVRVUVTVF9UWVBFIHx8ICFhbnlQcm9jZXNzLmNvbm5lY3RlZCkge1xuXHRcdHJldHVybiB3cmFwcGVkTWVzc2FnZTtcblx0fVxuXG5cdGNvbnN0IHtpZCwgbWVzc2FnZX0gPSB3cmFwcGVkTWVzc2FnZTtcblx0Y29uc3QgcmVzcG9uc2UgPSB7aWQsIHR5cGU6IFJFU1BPTlNFX1RZUEUsIG1lc3NhZ2U6IGhhc01lc3NhZ2VMaXN0ZW5lcnMoYW55UHJvY2VzcywgaXBjRW1pdHRlcil9O1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgc2VuZE1lc3NhZ2Uoe1xuXHRcdFx0YW55UHJvY2Vzcyxcblx0XHRcdGNoYW5uZWwsXG5cdFx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0XHRpcGM6IHRydWUsXG5cdFx0fSwgcmVzcG9uc2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlwY0VtaXR0ZXIuZW1pdCgnc3RyaWN0OmVycm9yJywgZXJyb3IpO1xuXHR9XG5cblx0cmV0dXJuIG1lc3NhZ2U7XG59O1xuXG4vLyBSZWNlcHRpb24gb2YgdGhlIGFja25vd2xlZGdtZW50IHJlc3BvbnNlXG5leHBvcnQgY29uc3QgaGFuZGxlU3RyaWN0UmVzcG9uc2UgPSB3cmFwcGVkTWVzc2FnZSA9PiB7XG5cdGlmICh3cmFwcGVkTWVzc2FnZT8udHlwZSAhPT0gUkVTUE9OU0VfVFlQRSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN0IHtpZCwgbWVzc2FnZTogaGFzTGlzdGVuZXJzfSA9IHdyYXBwZWRNZXNzYWdlO1xuXHRTVFJJQ1RfUkVTUE9OU0VTW2lkXT8ucmVzb2x2ZSh7aXNEZWFkbG9jazogZmFsc2UsIGhhc0xpc3RlbmVyc30pO1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIFdhaXQgZm9yIHRoZSBvdGhlciBwcm9jZXNzIHRvIHJlY2VpdmUgdGhlIG1lc3NhZ2UgZnJvbSBgc2VuZE1lc3NhZ2UoKWBcbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3RyaWN0UmVzcG9uc2UgPSBhc3luYyAod3JhcHBlZE1lc3NhZ2UsIGFueVByb2Nlc3MsIGlzU3VicHJvY2VzcykgPT4ge1xuXHRpZiAod3JhcHBlZE1lc3NhZ2U/LnR5cGUgIT09IFJFUVVFU1RfVFlQRSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGRlZmVycmVkID0gY3JlYXRlRGVmZXJyZWQoKTtcblx0U1RSSUNUX1JFU1BPTlNFU1t3cmFwcGVkTWVzc2FnZS5pZF0gPSBkZWZlcnJlZDtcblx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHtpc0RlYWRsb2NrLCBoYXNMaXN0ZW5lcnN9ID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRcdGRlZmVycmVkLFxuXHRcdFx0dGhyb3dPbkRpc2Nvbm5lY3QoYW55UHJvY2VzcywgaXNTdWJwcm9jZXNzLCBjb250cm9sbGVyKSxcblx0XHRdKTtcblxuXHRcdGlmIChpc0RlYWRsb2NrKSB7XG5cdFx0XHR0aHJvd09uU3RyaWN0RGVhZGxvY2tFcnJvcihpc1N1YnByb2Nlc3MpO1xuXHRcdH1cblxuXHRcdGlmICghaGFzTGlzdGVuZXJzKSB7XG5cdFx0XHR0aHJvd09uTWlzc2luZ1N0cmljdChpc1N1YnByb2Nlc3MpO1xuXHRcdH1cblx0fSBmaW5hbGx5IHtcblx0XHRjb250cm9sbGVyLmFib3J0KCk7XG5cdFx0ZGVsZXRlIFNUUklDVF9SRVNQT05TRVNbd3JhcHBlZE1lc3NhZ2UuaWRdO1xuXHR9XG59O1xuXG5jb25zdCBTVFJJQ1RfUkVTUE9OU0VTID0ge307XG5cbmNvbnN0IHRocm93T25EaXNjb25uZWN0ID0gYXN5bmMgKGFueVByb2Nlc3MsIGlzU3VicHJvY2Vzcywge3NpZ25hbH0pID0+IHtcblx0aW5jcmVtZW50TWF4TGlzdGVuZXJzKGFueVByb2Nlc3MsIDEsIHNpZ25hbCk7XG5cdGF3YWl0IG9uY2UoYW55UHJvY2VzcywgJ2Rpc2Nvbm5lY3QnLCB7c2lnbmFsfSk7XG5cdHRocm93T25TdHJpY3REaXNjb25uZWN0KGlzU3VicHJvY2Vzcyk7XG59O1xuXG5jb25zdCBSRVFVRVNUX1RZUEUgPSAnZXhlY2E6aXBjOnJlcXVlc3QnO1xuY29uc3QgUkVTUE9OU0VfVFlQRSA9ICdleGVjYTppcGM6cmVzcG9uc2UnO1xuIiwgImltcG9ydCB7Y3JlYXRlRGVmZXJyZWR9IGZyb20gJy4uL3V0aWxzL2RlZmVycmVkLmpzJztcbmltcG9ydCB7Z2V0RmRTcGVjaWZpY1ZhbHVlfSBmcm9tICcuLi9hcmd1bWVudHMvc3BlY2lmaWMuanMnO1xuaW1wb3J0IHtTVUJQUk9DRVNTX09QVElPTlN9IGZyb20gJy4uL2FyZ3VtZW50cy9mZC1vcHRpb25zLmpzJztcbmltcG9ydCB7dmFsaWRhdGVTdHJpY3REZWFkbG9ja30gZnJvbSAnLi9zdHJpY3QuanMnO1xuXG4vLyBXaGVuIGBzZW5kTWVzc2FnZSgpYCBpcyBvbmdvaW5nLCBhbnkgYG1lc3NhZ2VgIGJlaW5nIHJlY2VpdmVkIHdhaXRzIGJlZm9yZSBiZWluZyBlbWl0dGVkLlxuLy8gVGhpcyBhbGxvd3MgY2FsbGluZyBvbmUgb3IgbXVsdGlwbGUgYGF3YWl0IHNlbmRNZXNzYWdlKClgIGZvbGxvd2VkIGJ5IGBhd2FpdCBnZXRPbmVNZXNzYWdlKClgL2Bhd2FpdCBnZXRFYWNoTWVzc2FnZSgpYC5cbi8vIFdpdGhvdXQgcnVubmluZyBpbnRvIGEgcmFjZSBjb25kaXRpb24gd2hlbiB0aGUgb3RoZXIgcHJvY2VzcyBzZW5kcyBhIHJlc3BvbnNlIHRvbyBmYXN0LCBiZWZvcmUgdGhlIGN1cnJlbnQgcHJvY2VzcyBzZXQgdXAgYSBsaXN0ZW5lci5cbmV4cG9ydCBjb25zdCBzdGFydFNlbmRNZXNzYWdlID0gKGFueVByb2Nlc3MsIHdyYXBwZWRNZXNzYWdlLCBzdHJpY3QpID0+IHtcblx0aWYgKCFPVVRHT0lOR19NRVNTQUdFUy5oYXMoYW55UHJvY2VzcykpIHtcblx0XHRPVVRHT0lOR19NRVNTQUdFUy5zZXQoYW55UHJvY2VzcywgbmV3IFNldCgpKTtcblx0fVxuXG5cdGNvbnN0IG91dGdvaW5nTWVzc2FnZXMgPSBPVVRHT0lOR19NRVNTQUdFUy5nZXQoYW55UHJvY2Vzcyk7XG5cdGNvbnN0IG9uTWVzc2FnZVNlbnQgPSBjcmVhdGVEZWZlcnJlZCgpO1xuXHRjb25zdCBpZCA9IHN0cmljdCA/IHdyYXBwZWRNZXNzYWdlLmlkIDogdW5kZWZpbmVkO1xuXHRjb25zdCBvdXRnb2luZ01lc3NhZ2UgPSB7b25NZXNzYWdlU2VudCwgaWR9O1xuXHRvdXRnb2luZ01lc3NhZ2VzLmFkZChvdXRnb2luZ01lc3NhZ2UpO1xuXHRyZXR1cm4ge291dGdvaW5nTWVzc2FnZXMsIG91dGdvaW5nTWVzc2FnZX07XG59O1xuXG5leHBvcnQgY29uc3QgZW5kU2VuZE1lc3NhZ2UgPSAoe291dGdvaW5nTWVzc2FnZXMsIG91dGdvaW5nTWVzc2FnZX0pID0+IHtcblx0b3V0Z29pbmdNZXNzYWdlcy5kZWxldGUob3V0Z29pbmdNZXNzYWdlKTtcblx0b3V0Z29pbmdNZXNzYWdlLm9uTWVzc2FnZVNlbnQucmVzb2x2ZSgpO1xufTtcblxuLy8gQXdhaXQgd2hpbGUgYHNlbmRNZXNzYWdlKClgIGlzIG9uZ29pbmcsIHVubGVzcyB0aGVyZSBpcyBhbHJlYWR5IGEgYG1lc3NhZ2VgIGxpc3RlbmVyXG5leHBvcnQgY29uc3Qgd2FpdEZvck91dGdvaW5nTWVzc2FnZXMgPSBhc3luYyAoYW55UHJvY2VzcywgaXBjRW1pdHRlciwgd3JhcHBlZE1lc3NhZ2UpID0+IHtcblx0d2hpbGUgKCFoYXNNZXNzYWdlTGlzdGVuZXJzKGFueVByb2Nlc3MsIGlwY0VtaXR0ZXIpICYmIE9VVEdPSU5HX01FU1NBR0VTLmdldChhbnlQcm9jZXNzKT8uc2l6ZSA+IDApIHtcblx0XHRjb25zdCBvdXRnb2luZ01lc3NhZ2VzID0gWy4uLk9VVEdPSU5HX01FU1NBR0VTLmdldChhbnlQcm9jZXNzKV07XG5cdFx0dmFsaWRhdGVTdHJpY3REZWFkbG9jayhvdXRnb2luZ01lc3NhZ2VzLCB3cmFwcGVkTWVzc2FnZSk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3Bcblx0XHRhd2FpdCBQcm9taXNlLmFsbChvdXRnb2luZ01lc3NhZ2VzLm1hcCgoe29uTWVzc2FnZVNlbnR9KSA9PiBvbk1lc3NhZ2VTZW50KSk7XG5cdH1cbn07XG5cbmNvbnN0IE9VVEdPSU5HX01FU1NBR0VTID0gbmV3IFdlYWtNYXAoKTtcblxuLy8gV2hldGhlciBhbnkgYG1lc3NhZ2VgIGxpc3RlbmVyIGlzIHNldHVwXG5leHBvcnQgY29uc3QgaGFzTWVzc2FnZUxpc3RlbmVycyA9IChhbnlQcm9jZXNzLCBpcGNFbWl0dGVyKSA9PiBpcGNFbWl0dGVyLmxpc3RlbmVyQ291bnQoJ21lc3NhZ2UnKSA+IGdldE1pbkxpc3RlbmVyQ291bnQoYW55UHJvY2Vzcyk7XG5cbi8vIFdoZW4gYGJ1ZmZlcmAgaXMgYGZhbHNlYCwgd2Ugc2V0IHVwIGEgYG1lc3NhZ2VgIGxpc3RlbmVyIHRoYXQgc2hvdWxkIGJlIGlnbm9yZWQuXG4vLyBUaGF0IGxpc3RlbmVyIGlzIG9ubHkgbWVhbnQgdG8gaW50ZXJjZXB0IGBzdHJpY3RgIGFja25vd2xlZGdlbWVudCByZXNwb25zZXMuXG5jb25zdCBnZXRNaW5MaXN0ZW5lckNvdW50ID0gYW55UHJvY2VzcyA9PiBTVUJQUk9DRVNTX09QVElPTlMuaGFzKGFueVByb2Nlc3MpXG5cdCYmICFnZXRGZFNwZWNpZmljVmFsdWUoU1VCUFJPQ0VTU19PUFRJT05TLmdldChhbnlQcm9jZXNzKS5vcHRpb25zLmJ1ZmZlciwgJ2lwYycpXG5cdD8gMVxuXHQ6IDA7XG4iLCAiaW1wb3J0IHtwcm9taXNpZnl9IGZyb20gJ25vZGU6dXRpbCc7XG5pbXBvcnQge1xuXHR2YWxpZGF0ZUlwY01ldGhvZCxcblx0aGFuZGxlRXBpcGVFcnJvcixcblx0aGFuZGxlU2VyaWFsaXphdGlvbkVycm9yLFxuXHRkaXNjb25uZWN0LFxufSBmcm9tICcuL3ZhbGlkYXRpb24uanMnO1xuaW1wb3J0IHtzdGFydFNlbmRNZXNzYWdlLCBlbmRTZW5kTWVzc2FnZX0gZnJvbSAnLi9vdXRnb2luZy5qcyc7XG5pbXBvcnQge2hhbmRsZVNlbmRTdHJpY3QsIHdhaXRGb3JTdHJpY3RSZXNwb25zZX0gZnJvbSAnLi9zdHJpY3QuanMnO1xuXG4vLyBMaWtlIGBbc3ViXXByb2Nlc3Muc2VuZCgpYCBidXQgcHJvbWlzZS1iYXNlZC5cbi8vIFdlIGRvIG5vdCBgYXdhaXQgc3VicHJvY2Vzc2AgZHVyaW5nIGAuc2VuZE1lc3NhZ2UoKWAgbm9yIGAuZ2V0T25lTWVzc2FnZSgpYCBzaW5jZSB0aG9zZSBtZXRob2RzIGFyZSB0cmFuc2llbnQuXG4vLyBVc2VycyB3b3VsZCBzdGlsbCBuZWVkIHRvIGBhd2FpdCBzdWJwcm9jZXNzYCBhZnRlciB0aGUgbWV0aG9kIGlzIGRvbmUuXG4vLyBBbHNvLCB0aGlzIHdvdWxkIHByZXZlbnQgYHVuaGFuZGxlZFJlamVjdGlvbmAgZXZlbnQgZnJvbSBiZWluZyBlbWl0dGVkLCBtYWtpbmcgaXQgc2lsZW50LlxuZXhwb3J0IGNvbnN0IHNlbmRNZXNzYWdlID0gKHthbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MsIGlwY30sIG1lc3NhZ2UsIHtzdHJpY3QgPSBmYWxzZX0gPSB7fSkgPT4ge1xuXHRjb25zdCBtZXRob2ROYW1lID0gJ3NlbmRNZXNzYWdlJztcblx0dmFsaWRhdGVJcGNNZXRob2Qoe1xuXHRcdG1ldGhvZE5hbWUsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGlwYyxcblx0XHRpc0Nvbm5lY3RlZDogYW55UHJvY2Vzcy5jb25uZWN0ZWQsXG5cdH0pO1xuXG5cdHJldHVybiBzZW5kTWVzc2FnZUFzeW5jKHtcblx0XHRhbnlQcm9jZXNzLFxuXHRcdGNoYW5uZWwsXG5cdFx0bWV0aG9kTmFtZSxcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0bWVzc2FnZSxcblx0XHRzdHJpY3QsXG5cdH0pO1xufTtcblxuY29uc3Qgc2VuZE1lc3NhZ2VBc3luYyA9IGFzeW5jICh7YW55UHJvY2VzcywgY2hhbm5lbCwgbWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzLCBtZXNzYWdlLCBzdHJpY3R9KSA9PiB7XG5cdGNvbnN0IHdyYXBwZWRNZXNzYWdlID0gaGFuZGxlU2VuZFN0cmljdCh7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0XHRtZXNzYWdlLFxuXHRcdHN0cmljdCxcblx0fSk7XG5cdGNvbnN0IG91dGdvaW5nTWVzc2FnZXNTdGF0ZSA9IHN0YXJ0U2VuZE1lc3NhZ2UoYW55UHJvY2Vzcywgd3JhcHBlZE1lc3NhZ2UsIHN0cmljdCk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgc2VuZE9uZU1lc3NhZ2Uoe1xuXHRcdFx0YW55UHJvY2Vzcyxcblx0XHRcdG1ldGhvZE5hbWUsXG5cdFx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0XHR3cmFwcGVkTWVzc2FnZSxcblx0XHRcdG1lc3NhZ2UsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZGlzY29ubmVjdChhbnlQcm9jZXNzKTtcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBmaW5hbGx5IHtcblx0XHRlbmRTZW5kTWVzc2FnZShvdXRnb2luZ01lc3NhZ2VzU3RhdGUpO1xuXHR9XG59O1xuXG4vLyBVc2VkIGludGVybmFsbHkgYnkgYGNhbmNlbFNpZ25hbGBcbmV4cG9ydCBjb25zdCBzZW5kT25lTWVzc2FnZSA9IGFzeW5jICh7YW55UHJvY2VzcywgbWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzLCB3cmFwcGVkTWVzc2FnZSwgbWVzc2FnZX0pID0+IHtcblx0Y29uc3Qgc2VuZE1ldGhvZCA9IGdldFNlbmRNZXRob2QoYW55UHJvY2Vzcyk7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBQcm9taXNlLmFsbChbXG5cdFx0XHR3YWl0Rm9yU3RyaWN0UmVzcG9uc2Uod3JhcHBlZE1lc3NhZ2UsIGFueVByb2Nlc3MsIGlzU3VicHJvY2VzcyksXG5cdFx0XHRzZW5kTWV0aG9kKHdyYXBwZWRNZXNzYWdlKSxcblx0XHRdKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRoYW5kbGVFcGlwZUVycm9yKHtlcnJvciwgbWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzfSk7XG5cdFx0aGFuZGxlU2VyaWFsaXphdGlvbkVycm9yKHtcblx0XHRcdGVycm9yLFxuXHRcdFx0bWV0aG9kTmFtZSxcblx0XHRcdGlzU3VicHJvY2Vzcyxcblx0XHRcdG1lc3NhZ2UsXG5cdFx0fSk7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbi8vIFtzdWJdcHJvY2Vzcy5zZW5kKCkgcHJvbWlzaWZpZWQsIG1lbW9pemVkXG5jb25zdCBnZXRTZW5kTWV0aG9kID0gYW55UHJvY2VzcyA9PiB7XG5cdGlmIChQUk9DRVNTX1NFTkRfTUVUSE9EUy5oYXMoYW55UHJvY2VzcykpIHtcblx0XHRyZXR1cm4gUFJPQ0VTU19TRU5EX01FVEhPRFMuZ2V0KGFueVByb2Nlc3MpO1xuXHR9XG5cblx0Y29uc3Qgc2VuZE1ldGhvZCA9IHByb21pc2lmeShhbnlQcm9jZXNzLnNlbmQuYmluZChhbnlQcm9jZXNzKSk7XG5cdFBST0NFU1NfU0VORF9NRVRIT0RTLnNldChhbnlQcm9jZXNzLCBzZW5kTWV0aG9kKTtcblx0cmV0dXJuIHNlbmRNZXRob2Q7XG59O1xuXG5jb25zdCBQUk9DRVNTX1NFTkRfTUVUSE9EUyA9IG5ldyBXZWFrTWFwKCk7XG4iLCAiaW1wb3J0IHtzY2hlZHVsZXJ9IGZyb20gJ25vZGU6dGltZXJzL3Byb21pc2VzJztcbmltcG9ydCB7c2VuZE9uZU1lc3NhZ2V9IGZyb20gJy4vc2VuZC5qcyc7XG5pbXBvcnQge2dldElwY0VtaXR0ZXJ9IGZyb20gJy4vZm9yd2FyZC5qcyc7XG5pbXBvcnQge3ZhbGlkYXRlQ29ubmVjdGlvbiwgZ2V0QWJvcnREaXNjb25uZWN0RXJyb3IsIHRocm93T25NaXNzaW5nUGFyZW50fSBmcm9tICcuL3ZhbGlkYXRpb24uanMnO1xuXG4vLyBTZW5kIGFuIElQQyBtZXNzYWdlIHNvIHRoZSBzdWJwcm9jZXNzIHBlcmZvcm1zIGEgZ3JhY2VmdWwgdGVybWluYXRpb25cbmV4cG9ydCBjb25zdCBzZW5kQWJvcnQgPSAoc3VicHJvY2VzcywgbWVzc2FnZSkgPT4ge1xuXHRjb25zdCBtZXRob2ROYW1lID0gJ2NhbmNlbFNpZ25hbCc7XG5cdHZhbGlkYXRlQ29ubmVjdGlvbihtZXRob2ROYW1lLCBmYWxzZSwgc3VicHJvY2Vzcy5jb25uZWN0ZWQpO1xuXHRyZXR1cm4gc2VuZE9uZU1lc3NhZ2Uoe1xuXHRcdGFueVByb2Nlc3M6IHN1YnByb2Nlc3MsXG5cdFx0bWV0aG9kTmFtZSxcblx0XHRpc1N1YnByb2Nlc3M6IGZhbHNlLFxuXHRcdHdyYXBwZWRNZXNzYWdlOiB7dHlwZTogR1JBQ0VGVUxfQ0FOQ0VMX1RZUEUsIG1lc3NhZ2V9LFxuXHRcdG1lc3NhZ2UsXG5cdH0pO1xufTtcblxuLy8gV2hlbiB0aGUgc2lnbmFsIGlzIGJlaW5nIHVzZWQsIHN0YXJ0IGxpc3RlbmluZyBmb3IgaW5jb21pbmcgbWVzc2FnZXMuXG4vLyBVbmJ1ZmZlcmluZyBtZXNzYWdlcyB0YWtlcyBvbmUgbWljcm90YXNrIHRvIGNvbXBsZXRlLCBzbyB0aGlzIG11c3QgYmUgYXN5bmMuXG5leHBvcnQgY29uc3QgZ2V0Q2FuY2VsU2lnbmFsID0gYXN5bmMgKHthbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MsIGlwY30pID0+IHtcblx0YXdhaXQgc3RhcnRJcGMoe1xuXHRcdGFueVByb2Nlc3MsXG5cdFx0Y2hhbm5lbCxcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0aXBjLFxuXHR9KTtcblx0cmV0dXJuIGNhbmNlbENvbnRyb2xsZXIuc2lnbmFsO1xufTtcblxuY29uc3Qgc3RhcnRJcGMgPSBhc3luYyAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgaXBjfSkgPT4ge1xuXHRpZiAoY2FuY2VsTGlzdGVuaW5nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y2FuY2VsTGlzdGVuaW5nID0gdHJ1ZTtcblxuXHRpZiAoIWlwYykge1xuXHRcdHRocm93T25NaXNzaW5nUGFyZW50KCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGNoYW5uZWwgPT09IG51bGwpIHtcblx0XHRhYm9ydE9uRGlzY29ubmVjdCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGdldElwY0VtaXR0ZXIoYW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzKTtcblx0YXdhaXQgc2NoZWR1bGVyLnlpZWxkKCk7XG59O1xuXG5sZXQgY2FuY2VsTGlzdGVuaW5nID0gZmFsc2U7XG5cbi8vIFJlY2VwdGlvbiBvZiBJUEMgbWVzc2FnZSB0byBwZXJmb3JtIGEgZ3JhY2VmdWwgdGVybWluYXRpb25cbmV4cG9ydCBjb25zdCBoYW5kbGVBYm9ydCA9IHdyYXBwZWRNZXNzYWdlID0+IHtcblx0aWYgKHdyYXBwZWRNZXNzYWdlPy50eXBlICE9PSBHUkFDRUZVTF9DQU5DRUxfVFlQRSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNhbmNlbENvbnRyb2xsZXIuYWJvcnQod3JhcHBlZE1lc3NhZ2UubWVzc2FnZSk7XG5cdHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgR1JBQ0VGVUxfQ0FOQ0VMX1RZUEUgPSAnZXhlY2E6aXBjOmNhbmNlbCc7XG5cbi8vIFdoZW4gdGhlIGN1cnJlbnQgcHJvY2VzcyBkaXNjb25uZWN0cyBlYXJseSwgdGhlIHN1YnByb2Nlc3MgYGNhbmNlbFNpZ25hbGAgaXMgYWJvcnRlZC5cbi8vIE90aGVyd2lzZSwgdGhlIHNpZ25hbCB3b3VsZCBuZXZlciBiZSBhYmxlIHRvIGJlIGFib3J0ZWQgbGF0ZXIgb24uXG5leHBvcnQgY29uc3QgYWJvcnRPbkRpc2Nvbm5lY3QgPSAoKSA9PiB7XG5cdGNhbmNlbENvbnRyb2xsZXIuYWJvcnQoZ2V0QWJvcnREaXNjb25uZWN0RXJyb3IoKSk7XG59O1xuXG5jb25zdCBjYW5jZWxDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuIiwgImltcG9ydCB7b25BYm9ydGVkU2lnbmFsfSBmcm9tICcuLi91dGlscy9hYm9ydC1zaWduYWwuanMnO1xuaW1wb3J0IHtzZW5kQWJvcnR9IGZyb20gJy4uL2lwYy9ncmFjZWZ1bC5qcyc7XG5pbXBvcnQge2tpbGxPblRpbWVvdXR9IGZyb20gJy4va2lsbC5qcyc7XG5cbi8vIFZhbGlkYXRlIHRoZSBgZ3JhY2VmdWxDYW5jZWxgIG9wdGlvblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlR3JhY2VmdWxDYW5jZWwgPSAoe2dyYWNlZnVsQ2FuY2VsLCBjYW5jZWxTaWduYWwsIGlwYywgc2VyaWFsaXphdGlvbn0pID0+IHtcblx0aWYgKCFncmFjZWZ1bENhbmNlbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChjYW5jZWxTaWduYWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBjYW5jZWxTaWduYWxgIG9wdGlvbiBtdXN0IGJlIGRlZmluZWQgd2hlbiBzZXR0aW5nIHRoZSBgZ3JhY2VmdWxDYW5jZWxgIG9wdGlvbi4nKTtcblx0fVxuXG5cdGlmICghaXBjKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYGlwY2Agb3B0aW9uIGNhbm5vdCBiZSBmYWxzZSB3aGVuIHNldHRpbmcgdGhlIGBncmFjZWZ1bENhbmNlbGAgb3B0aW9uLicpO1xuXHR9XG5cblx0aWYgKHNlcmlhbGl6YXRpb24gPT09ICdqc29uJykge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBzZXJpYWxpemF0aW9uYCBvcHRpb24gY2Fubm90IGJlIFxcJ2pzb25cXCcgd2hlbiBzZXR0aW5nIHRoZSBgZ3JhY2VmdWxDYW5jZWxgIG9wdGlvbi4nKTtcblx0fVxufTtcblxuLy8gU2VuZCBhYm9ydCByZWFzb24gdG8gdGhlIHN1YnByb2Nlc3Mgd2hlbiBhYm9ydGluZyB0aGUgYGNhbmNlbFNpZ25hbGAgb3B0aW9uIGFuZCBgZ3JhY2VmdWxDYW5jZWxgIGlzIGB0cnVlYFxuZXhwb3J0IGNvbnN0IHRocm93T25HcmFjZWZ1bENhbmNlbCA9ICh7XG5cdHN1YnByb2Nlc3MsXG5cdGNhbmNlbFNpZ25hbCxcblx0Z3JhY2VmdWxDYW5jZWwsXG5cdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdGNvbnRleHQsXG5cdGNvbnRyb2xsZXIsXG59KSA9PiBncmFjZWZ1bENhbmNlbFxuXHQ/IFtzZW5kT25BYm9ydCh7XG5cdFx0c3VicHJvY2Vzcyxcblx0XHRjYW5jZWxTaWduYWwsXG5cdFx0Zm9yY2VLaWxsQWZ0ZXJEZWxheSxcblx0XHRjb250ZXh0LFxuXHRcdGNvbnRyb2xsZXIsXG5cdH0pXVxuXHQ6IFtdO1xuXG5jb25zdCBzZW5kT25BYm9ydCA9IGFzeW5jICh7c3VicHJvY2VzcywgY2FuY2VsU2lnbmFsLCBmb3JjZUtpbGxBZnRlckRlbGF5LCBjb250ZXh0LCBjb250cm9sbGVyOiB7c2lnbmFsfX0pID0+IHtcblx0YXdhaXQgb25BYm9ydGVkU2lnbmFsKGNhbmNlbFNpZ25hbCwgc2lnbmFsKTtcblx0Y29uc3QgcmVhc29uID0gZ2V0UmVhc29uKGNhbmNlbFNpZ25hbCk7XG5cdGF3YWl0IHNlbmRBYm9ydChzdWJwcm9jZXNzLCByZWFzb24pO1xuXHRraWxsT25UaW1lb3V0KHtcblx0XHRraWxsOiBzdWJwcm9jZXNzLmtpbGwsXG5cdFx0Zm9yY2VLaWxsQWZ0ZXJEZWxheSxcblx0XHRjb250ZXh0LFxuXHRcdGNvbnRyb2xsZXJTaWduYWw6IHNpZ25hbCxcblx0fSk7XG5cdGNvbnRleHQudGVybWluYXRpb25SZWFzb24gPz89ICdncmFjZWZ1bENhbmNlbCc7XG5cdHRocm93IGNhbmNlbFNpZ25hbC5yZWFzb247XG59O1xuXG4vLyBUaGUgZGVmYXVsdCBgcmVhc29uYCBpcyBhIERPTUV4Y2VwdGlvbiwgd2hpY2ggaXMgbm90IHNlcmlhbGl6YWJsZSB3aXRoIFY4XG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy81MzIyNVxuY29uc3QgZ2V0UmVhc29uID0gKHtyZWFzb259KSA9PiB7XG5cdGlmICghKHJlYXNvbiBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbikpIHtcblx0XHRyZXR1cm4gcmVhc29uO1xuXHR9XG5cblx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVhc29uLm1lc3NhZ2UpO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyb3IsICdzdGFjaycsIHtcblx0XHR2YWx1ZTogcmVhc29uLnN0YWNrLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHR3cml0YWJsZTogdHJ1ZSxcblx0fSk7XG5cdHJldHVybiBlcnJvcjtcbn07XG4iLCAiaW1wb3J0IHtzZXRUaW1lb3V0fSBmcm9tICdub2RlOnRpbWVycy9wcm9taXNlcyc7XG5pbXBvcnQge0Rpc2NhcmRlZEVycm9yfSBmcm9tICcuLi9yZXR1cm4vZmluYWwtZXJyb3IuanMnO1xuXG4vLyBWYWxpZGF0ZSBgdGltZW91dGAgb3B0aW9uXG5leHBvcnQgY29uc3QgdmFsaWRhdGVUaW1lb3V0ID0gKHt0aW1lb3V0fSkgPT4ge1xuXHRpZiAodGltZW91dCAhPT0gdW5kZWZpbmVkICYmICghTnVtYmVyLmlzRmluaXRlKHRpbWVvdXQpIHx8IHRpbWVvdXQgPCAwKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIHRoZSBcXGB0aW1lb3V0XFxgIG9wdGlvbiB0byBiZSBhIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyLCBnb3QgXFxgJHt0aW1lb3V0fVxcYCAoJHt0eXBlb2YgdGltZW91dH0pYCk7XG5cdH1cbn07XG5cbi8vIEZhaWxzIHdoZW4gdGhlIGB0aW1lb3V0YCBvcHRpb24gaXMgZXhjZWVkZWRcbmV4cG9ydCBjb25zdCB0aHJvd09uVGltZW91dCA9IChzdWJwcm9jZXNzLCB0aW1lb3V0LCBjb250ZXh0LCBjb250cm9sbGVyKSA9PiB0aW1lb3V0ID09PSAwIHx8IHRpbWVvdXQgPT09IHVuZGVmaW5lZFxuXHQ/IFtdXG5cdDogW2tpbGxBZnRlclRpbWVvdXQoc3VicHJvY2VzcywgdGltZW91dCwgY29udGV4dCwgY29udHJvbGxlcildO1xuXG5jb25zdCBraWxsQWZ0ZXJUaW1lb3V0ID0gYXN5bmMgKHN1YnByb2Nlc3MsIHRpbWVvdXQsIGNvbnRleHQsIHtzaWduYWx9KSA9PiB7XG5cdGF3YWl0IHNldFRpbWVvdXQodGltZW91dCwgdW5kZWZpbmVkLCB7c2lnbmFsfSk7XG5cdGNvbnRleHQudGVybWluYXRpb25SZWFzb24gPz89ICd0aW1lb3V0Jztcblx0c3VicHJvY2Vzcy5raWxsKCk7XG5cdHRocm93IG5ldyBEaXNjYXJkZWRFcnJvcigpO1xufTtcbiIsICJpbXBvcnQge2V4ZWNQYXRoLCBleGVjQXJndn0gZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQge3NhZmVOb3JtYWxpemVGaWxlVXJsfSBmcm9tICcuLi9hcmd1bWVudHMvZmlsZS11cmwuanMnO1xuXG4vLyBgZXhlY2FOb2RlKClgIGlzIGEgc2hvcnRjdXQgZm9yIGBleGVjYSguLi4sIHtub2RlOiB0cnVlfSlgXG5leHBvcnQgY29uc3QgbWFwTm9kZSA9ICh7b3B0aW9uc30pID0+IHtcblx0aWYgKG9wdGlvbnMubm9kZSA9PT0gZmFsc2UpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJub2RlXCIgb3B0aW9uIGNhbm5vdCBiZSBmYWxzZSB3aXRoIGBleGVjYU5vZGUoKWAuJyk7XG5cdH1cblxuXHRyZXR1cm4ge29wdGlvbnM6IHsuLi5vcHRpb25zLCBub2RlOiB0cnVlfX07XG59O1xuXG4vLyBBcHBsaWVzIHRoZSBgbm9kZTogdHJ1ZWAgb3B0aW9uLCBhbmQgdGhlIHJlbGF0ZWQgYG5vZGVQYXRoYC9gbm9kZU9wdGlvbnNgIG9wdGlvbnMuXG4vLyBNb2RpZmllcyB0aGUgZmlsZSBjb21tYW5kcy9hcmd1bWVudHMgdG8gZW5zdXJlIHRoZSBzYW1lIE5vZGUgYmluYXJ5IGFuZCBmbGFncyBhcmUgcmUtdXNlZC5cbi8vIEFsc28gYWRkcyBgaXBjOiB0cnVlYCBhbmQgYHNoZWxsOiBmYWxzZWAuXG5leHBvcnQgY29uc3QgaGFuZGxlTm9kZU9wdGlvbiA9IChmaWxlLCBjb21tYW5kQXJndW1lbnRzLCB7XG5cdG5vZGU6IHNob3VsZEhhbmRsZU5vZGUgPSBmYWxzZSxcblx0bm9kZVBhdGggPSBleGVjUGF0aCxcblx0bm9kZU9wdGlvbnMgPSBleGVjQXJndi5maWx0ZXIobm9kZU9wdGlvbiA9PiAhbm9kZU9wdGlvbi5zdGFydHNXaXRoKCctLWluc3BlY3QnKSksXG5cdGN3ZCxcblx0ZXhlY1BhdGg6IGZvcm1lck5vZGVQYXRoLFxuXHQuLi5vcHRpb25zXG59KSA9PiB7XG5cdGlmIChmb3JtZXJOb2RlUGF0aCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZXhlY1BhdGhcIiBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZC4gUGxlYXNlIHVzZSB0aGUgXCJub2RlUGF0aFwiIG9wdGlvbiBpbnN0ZWFkLicpO1xuXHR9XG5cblx0Y29uc3Qgbm9ybWFsaXplZE5vZGVQYXRoID0gc2FmZU5vcm1hbGl6ZUZpbGVVcmwobm9kZVBhdGgsICdUaGUgXCJub2RlUGF0aFwiIG9wdGlvbicpO1xuXHRjb25zdCByZXNvbHZlZE5vZGVQYXRoID0gcGF0aC5yZXNvbHZlKGN3ZCwgbm9ybWFsaXplZE5vZGVQYXRoKTtcblx0Y29uc3QgbmV3T3B0aW9ucyA9IHtcblx0XHQuLi5vcHRpb25zLFxuXHRcdG5vZGVQYXRoOiByZXNvbHZlZE5vZGVQYXRoLFxuXHRcdG5vZGU6IHNob3VsZEhhbmRsZU5vZGUsXG5cdFx0Y3dkLFxuXHR9O1xuXG5cdGlmICghc2hvdWxkSGFuZGxlTm9kZSkge1xuXHRcdHJldHVybiBbZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgbmV3T3B0aW9uc107XG5cdH1cblxuXHRpZiAocGF0aC5iYXNlbmFtZShmaWxlLCAnLmV4ZScpID09PSAnbm9kZScpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdXaGVuIHRoZSBcIm5vZGVcIiBvcHRpb24gaXMgdHJ1ZSwgdGhlIGZpcnN0IGFyZ3VtZW50IGRvZXMgbm90IG5lZWQgdG8gYmUgXCJub2RlXCIuJyk7XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdHJlc29sdmVkTm9kZVBhdGgsXG5cdFx0Wy4uLm5vZGVPcHRpb25zLCBmaWxlLCAuLi5jb21tYW5kQXJndW1lbnRzXSxcblx0XHR7aXBjOiB0cnVlLCAuLi5uZXdPcHRpb25zLCBzaGVsbDogZmFsc2V9LFxuXHRdO1xufTtcbiIsICJpbXBvcnQge3NlcmlhbGl6ZX0gZnJvbSAnbm9kZTp2OCc7XG5cbi8vIFZhbGlkYXRlIHRoZSBgaXBjSW5wdXRgIG9wdGlvblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlSXBjSW5wdXRPcHRpb24gPSAoe2lwY0lucHV0LCBpcGMsIHNlcmlhbGl6YXRpb259KSA9PiB7XG5cdGlmIChpcGNJbnB1dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFpcGMpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgaXBjSW5wdXRgIG9wdGlvbiBjYW5ub3QgYmUgc2V0IHVubGVzcyB0aGUgYGlwY2Agb3B0aW9uIGlzIGB0cnVlYC4nKTtcblx0fVxuXG5cdHZhbGlkYXRlSXBjSW5wdXRbc2VyaWFsaXphdGlvbl0oaXBjSW5wdXQpO1xufTtcblxuY29uc3QgdmFsaWRhdGVBZHZhbmNlZElucHV0ID0gaXBjSW5wdXQgPT4ge1xuXHR0cnkge1xuXHRcdHNlcmlhbGl6ZShpcGNJbnB1dCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYGlwY0lucHV0YCBvcHRpb24gaXMgbm90IHNlcmlhbGl6YWJsZSB3aXRoIGEgc3RydWN0dXJlZCBjbG9uZS4nLCB7Y2F1c2U6IGVycm9yfSk7XG5cdH1cbn07XG5cbmNvbnN0IHZhbGlkYXRlSnNvbklucHV0ID0gaXBjSW5wdXQgPT4ge1xuXHR0cnkge1xuXHRcdEpTT04uc3RyaW5naWZ5KGlwY0lucHV0KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgaXBjSW5wdXRgIG9wdGlvbiBpcyBub3Qgc2VyaWFsaXphYmxlIHdpdGggSlNPTi4nLCB7Y2F1c2U6IGVycm9yfSk7XG5cdH1cbn07XG5cbmNvbnN0IHZhbGlkYXRlSXBjSW5wdXQgPSB7XG5cdGFkdmFuY2VkOiB2YWxpZGF0ZUFkdmFuY2VkSW5wdXQsXG5cdGpzb246IHZhbGlkYXRlSnNvbklucHV0LFxufTtcblxuLy8gV2hlbiB0aGUgYGlwY0lucHV0YCBvcHRpb24gaXMgc2V0LCBpdCBpcyBzZW50IGFzIGFuIGluaXRpYWwgSVBDIG1lc3NhZ2UgdG8gdGhlIHN1YnByb2Nlc3NcbmV4cG9ydCBjb25zdCBzZW5kSXBjSW5wdXQgPSBhc3luYyAoc3VicHJvY2VzcywgaXBjSW5wdXQpID0+IHtcblx0aWYgKGlwY0lucHV0ID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBzdWJwcm9jZXNzLnNlbmRNZXNzYWdlKGlwY0lucHV0KTtcbn07XG4iLCAiLy8gVmFsaWRhdGUgYGVuY29kaW5nYCBvcHRpb25cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUVuY29kaW5nID0gKHtlbmNvZGluZ30pID0+IHtcblx0aWYgKEVOQ09ESU5HUy5oYXMoZW5jb2RpbmcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29ycmVjdEVuY29kaW5nID0gZ2V0Q29ycmVjdEVuY29kaW5nKGVuY29kaW5nKTtcblx0aWYgKGNvcnJlY3RFbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBvcHRpb24gXFxgZW5jb2Rpbmc6ICR7c2VyaWFsaXplRW5jb2RpbmcoZW5jb2RpbmcpfVxcYC5cblBsZWFzZSByZW5hbWUgaXQgdG8gJHtzZXJpYWxpemVFbmNvZGluZyhjb3JyZWN0RW5jb2RpbmcpfS5gKTtcblx0fVxuXG5cdGNvbnN0IGNvcnJlY3RFbmNvZGluZ3MgPSBbLi4uRU5DT0RJTkdTXS5tYXAoY29ycmVjdEVuY29kaW5nID0+IHNlcmlhbGl6ZUVuY29kaW5nKGNvcnJlY3RFbmNvZGluZykpLmpvaW4oJywgJyk7XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgb3B0aW9uIFxcYGVuY29kaW5nOiAke3NlcmlhbGl6ZUVuY29kaW5nKGVuY29kaW5nKX1cXGAuXG5QbGVhc2UgcmVuYW1lIGl0IHRvIG9uZSBvZjogJHtjb3JyZWN0RW5jb2RpbmdzfS5gKTtcbn07XG5cbmNvbnN0IFRFWFRfRU5DT0RJTkdTID0gbmV3IFNldChbJ3V0ZjgnLCAndXRmMTZsZSddKTtcbmV4cG9ydCBjb25zdCBCSU5BUllfRU5DT0RJTkdTID0gbmV3IFNldChbJ2J1ZmZlcicsICdoZXgnLCAnYmFzZTY0JywgJ2Jhc2U2NHVybCcsICdsYXRpbjEnLCAnYXNjaWknXSk7XG5jb25zdCBFTkNPRElOR1MgPSBuZXcgU2V0KFsuLi5URVhUX0VOQ09ESU5HUywgLi4uQklOQVJZX0VOQ09ESU5HU10pO1xuXG5jb25zdCBnZXRDb3JyZWN0RW5jb2RpbmcgPSBlbmNvZGluZyA9PiB7XG5cdGlmIChlbmNvZGluZyA9PT0gbnVsbCkge1xuXHRcdHJldHVybiAnYnVmZmVyJztcblx0fVxuXG5cdGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbG93ZXJFbmNvZGluZyA9IGVuY29kaW5nLnRvTG93ZXJDYXNlKCk7XG5cdGlmIChsb3dlckVuY29kaW5nIGluIEVOQ09ESU5HX0FMSUFTRVMpIHtcblx0XHRyZXR1cm4gRU5DT0RJTkdfQUxJQVNFU1tsb3dlckVuY29kaW5nXTtcblx0fVxuXG5cdGlmIChFTkNPRElOR1MuaGFzKGxvd2VyRW5jb2RpbmcpKSB7XG5cdFx0cmV0dXJuIGxvd2VyRW5jb2Rpbmc7XG5cdH1cbn07XG5cbmNvbnN0IEVOQ09ESU5HX0FMSUFTRVMgPSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3RleHQtZW5jb2RpbmctaWRlbnRpZmllci1jYXNlXG5cdCd1dGYtOCc6ICd1dGY4Jyxcblx0J3V0Zi0xNmxlJzogJ3V0ZjE2bGUnLFxuXHQndWNzLTInOiAndXRmMTZsZScsXG5cdHVjczI6ICd1dGYxNmxlJyxcblx0YmluYXJ5OiAnbGF0aW4xJyxcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUVuY29kaW5nID0gZW5jb2RpbmcgPT4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyA/IGBcIiR7ZW5jb2Rpbmd9XCJgIDogU3RyaW5nKGVuY29kaW5nKTtcbiIsICJpbXBvcnQge3N0YXRTeW5jfSBmcm9tICdub2RlOmZzJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IHtzYWZlTm9ybWFsaXplRmlsZVVybH0gZnJvbSAnLi9maWxlLXVybC5qcyc7XG5cbi8vIE5vcm1hbGl6ZSBgY3dkYCBvcHRpb25cbmV4cG9ydCBjb25zdCBub3JtYWxpemVDd2QgPSAoY3dkID0gZ2V0RGVmYXVsdEN3ZCgpKSA9PiB7XG5cdGNvbnN0IGN3ZFN0cmluZyA9IHNhZmVOb3JtYWxpemVGaWxlVXJsKGN3ZCwgJ1RoZSBcImN3ZFwiIG9wdGlvbicpO1xuXHRyZXR1cm4gcGF0aC5yZXNvbHZlKGN3ZFN0cmluZyk7XG59O1xuXG5jb25zdCBnZXREZWZhdWx0Q3dkID0gKCkgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBwcm9jZXNzLmN3ZCgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yLm1lc3NhZ2UgPSBgVGhlIGN1cnJlbnQgZGlyZWN0b3J5IGRvZXMgbm90IGV4aXN0LlxcbiR7ZXJyb3IubWVzc2FnZX1gO1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuXG4vLyBXaGVuIGBjd2RgIG9wdGlvbiBoYXMgYW4gaW52YWxpZCB2YWx1ZSwgcHJvdmlkZSB3aXRoIGEgYmV0dGVyIGVycm9yIG1lc3NhZ2VcbmV4cG9ydCBjb25zdCBmaXhDd2RFcnJvciA9IChvcmlnaW5hbE1lc3NhZ2UsIGN3ZCkgPT4ge1xuXHRpZiAoY3dkID09PSBnZXREZWZhdWx0Q3dkKCkpIHtcblx0XHRyZXR1cm4gb3JpZ2luYWxNZXNzYWdlO1xuXHR9XG5cblx0bGV0IGN3ZFN0YXQ7XG5cdHRyeSB7XG5cdFx0Y3dkU3RhdCA9IHN0YXRTeW5jKGN3ZCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuIGBUaGUgXCJjd2RcIiBvcHRpb24gaXMgaW52YWxpZDogJHtjd2R9LlxcbiR7ZXJyb3IubWVzc2FnZX1cXG4ke29yaWdpbmFsTWVzc2FnZX1gO1xuXHR9XG5cblx0aWYgKCFjd2RTdGF0LmlzRGlyZWN0b3J5KCkpIHtcblx0XHRyZXR1cm4gYFRoZSBcImN3ZFwiIG9wdGlvbiBpcyBub3QgYSBkaXJlY3Rvcnk6ICR7Y3dkfS5cXG4ke29yaWdpbmFsTWVzc2FnZX1gO1xuXHR9XG5cblx0cmV0dXJuIG9yaWdpbmFsTWVzc2FnZTtcbn07XG4iLCAiaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQgY3Jvc3NTcGF3biBmcm9tICdjcm9zcy1zcGF3bic7XG5pbXBvcnQge25wbVJ1blBhdGhFbnZ9IGZyb20gJ25wbS1ydW4tcGF0aCc7XG5pbXBvcnQge25vcm1hbGl6ZUZvcmNlS2lsbEFmdGVyRGVsYXl9IGZyb20gJy4uL3Rlcm1pbmF0ZS9raWxsLmpzJztcbmltcG9ydCB7bm9ybWFsaXplS2lsbFNpZ25hbH0gZnJvbSAnLi4vdGVybWluYXRlL3NpZ25hbC5qcyc7XG5pbXBvcnQge3ZhbGlkYXRlQ2FuY2VsU2lnbmFsfSBmcm9tICcuLi90ZXJtaW5hdGUvY2FuY2VsLmpzJztcbmltcG9ydCB7dmFsaWRhdGVHcmFjZWZ1bENhbmNlbH0gZnJvbSAnLi4vdGVybWluYXRlL2dyYWNlZnVsLmpzJztcbmltcG9ydCB7dmFsaWRhdGVUaW1lb3V0fSBmcm9tICcuLi90ZXJtaW5hdGUvdGltZW91dC5qcyc7XG5pbXBvcnQge2hhbmRsZU5vZGVPcHRpb259IGZyb20gJy4uL21ldGhvZHMvbm9kZS5qcyc7XG5pbXBvcnQge3ZhbGlkYXRlSXBjSW5wdXRPcHRpb259IGZyb20gJy4uL2lwYy9pcGMtaW5wdXQuanMnO1xuaW1wb3J0IHt2YWxpZGF0ZUVuY29kaW5nLCBCSU5BUllfRU5DT0RJTkdTfSBmcm9tICcuL2VuY29kaW5nLW9wdGlvbi5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZUN3ZH0gZnJvbSAnLi9jd2QuanMnO1xuaW1wb3J0IHtub3JtYWxpemVGaWxlVXJsfSBmcm9tICcuL2ZpbGUtdXJsLmpzJztcbmltcG9ydCB7bm9ybWFsaXplRmRTcGVjaWZpY09wdGlvbnN9IGZyb20gJy4vc3BlY2lmaWMuanMnO1xuXG4vLyBOb3JtYWxpemUgdGhlIG9wdGlvbnMgb2JqZWN0LCBhbmQgc29tZXRpbWVzIGFsc28gdGhlIGZpbGUgcGF0aHMgYW5kIGFyZ3VtZW50cy5cbi8vIEFwcGxpZXMgZGVmYXVsdCB2YWx1ZXMsIHZhbGlkYXRlIGFsbG93ZWQgb3B0aW9ucywgbm9ybWFsaXplIHRoZW0uXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplT3B0aW9ucyA9IChmaWxlUGF0aCwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKSA9PiB7XG5cdHJhd09wdGlvbnMuY3dkID0gbm9ybWFsaXplQ3dkKHJhd09wdGlvbnMuY3dkKTtcblx0Y29uc3QgW3Byb2Nlc3NlZEZpbGUsIHByb2Nlc3NlZEFyZ3VtZW50cywgcHJvY2Vzc2VkT3B0aW9uc10gPSBoYW5kbGVOb2RlT3B0aW9uKGZpbGVQYXRoLCByYXdBcmd1bWVudHMsIHJhd09wdGlvbnMpO1xuXG5cdGNvbnN0IHtjb21tYW5kOiBmaWxlLCBhcmdzOiBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zOiBpbml0aWFsT3B0aW9uc30gPSBjcm9zc1NwYXduLl9wYXJzZShwcm9jZXNzZWRGaWxlLCBwcm9jZXNzZWRBcmd1bWVudHMsIHByb2Nlc3NlZE9wdGlvbnMpO1xuXG5cdGNvbnN0IGZkT3B0aW9ucyA9IG5vcm1hbGl6ZUZkU3BlY2lmaWNPcHRpb25zKGluaXRpYWxPcHRpb25zKTtcblx0Y29uc3Qgb3B0aW9ucyA9IGFkZERlZmF1bHRPcHRpb25zKGZkT3B0aW9ucyk7XG5cdHZhbGlkYXRlVGltZW91dChvcHRpb25zKTtcblx0dmFsaWRhdGVFbmNvZGluZyhvcHRpb25zKTtcblx0dmFsaWRhdGVJcGNJbnB1dE9wdGlvbihvcHRpb25zKTtcblx0dmFsaWRhdGVDYW5jZWxTaWduYWwob3B0aW9ucyk7XG5cdHZhbGlkYXRlR3JhY2VmdWxDYW5jZWwob3B0aW9ucyk7XG5cdG9wdGlvbnMuc2hlbGwgPSBub3JtYWxpemVGaWxlVXJsKG9wdGlvbnMuc2hlbGwpO1xuXHRvcHRpb25zLmVudiA9IGdldEVudihvcHRpb25zKTtcblx0b3B0aW9ucy5raWxsU2lnbmFsID0gbm9ybWFsaXplS2lsbFNpZ25hbChvcHRpb25zLmtpbGxTaWduYWwpO1xuXHRvcHRpb25zLmZvcmNlS2lsbEFmdGVyRGVsYXkgPSBub3JtYWxpemVGb3JjZUtpbGxBZnRlckRlbGF5KG9wdGlvbnMuZm9yY2VLaWxsQWZ0ZXJEZWxheSk7XG5cdG9wdGlvbnMubGluZXMgPSBvcHRpb25zLmxpbmVzLm1hcCgobGluZXMsIGZkTnVtYmVyKSA9PiBsaW5lcyAmJiAhQklOQVJZX0VOQ09ESU5HUy5oYXMob3B0aW9ucy5lbmNvZGluZykgJiYgb3B0aW9ucy5idWZmZXJbZmROdW1iZXJdKTtcblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyAmJiBwYXRoLmJhc2VuYW1lKGZpbGUsICcuZXhlJykgPT09ICdjbWQnKSB7XG5cdFx0Ly8gIzExNlxuXHRcdGNvbW1hbmRBcmd1bWVudHMudW5zaGlmdCgnL3EnKTtcblx0fVxuXG5cdHJldHVybiB7ZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9uc307XG59O1xuXG5jb25zdCBhZGREZWZhdWx0T3B0aW9ucyA9ICh7XG5cdGV4dGVuZEVudiA9IHRydWUsXG5cdHByZWZlckxvY2FsID0gZmFsc2UsXG5cdGN3ZCxcblx0bG9jYWxEaXI6IGxvY2FsRGlyZWN0b3J5ID0gY3dkLFxuXHRlbmNvZGluZyA9ICd1dGY4Jyxcblx0cmVqZWN0ID0gdHJ1ZSxcblx0Y2xlYW51cCA9IHRydWUsXG5cdGFsbCA9IGZhbHNlLFxuXHR3aW5kb3dzSGlkZSA9IHRydWUsXG5cdGtpbGxTaWduYWwgPSAnU0lHVEVSTScsXG5cdGZvcmNlS2lsbEFmdGVyRGVsYXkgPSB0cnVlLFxuXHRncmFjZWZ1bENhbmNlbCA9IGZhbHNlLFxuXHRpcGNJbnB1dCxcblx0aXBjID0gaXBjSW5wdXQgIT09IHVuZGVmaW5lZCB8fCBncmFjZWZ1bENhbmNlbCxcblx0c2VyaWFsaXphdGlvbiA9ICdhZHZhbmNlZCcsXG5cdC4uLm9wdGlvbnNcbn0pID0+ICh7XG5cdC4uLm9wdGlvbnMsXG5cdGV4dGVuZEVudixcblx0cHJlZmVyTG9jYWwsXG5cdGN3ZCxcblx0bG9jYWxEaXJlY3RvcnksXG5cdGVuY29kaW5nLFxuXHRyZWplY3QsXG5cdGNsZWFudXAsXG5cdGFsbCxcblx0d2luZG93c0hpZGUsXG5cdGtpbGxTaWduYWwsXG5cdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdGdyYWNlZnVsQ2FuY2VsLFxuXHRpcGNJbnB1dCxcblx0aXBjLFxuXHRzZXJpYWxpemF0aW9uLFxufSk7XG5cbmNvbnN0IGdldEVudiA9ICh7ZW52OiBlbnZPcHRpb24sIGV4dGVuZEVudiwgcHJlZmVyTG9jYWwsIG5vZGUsIGxvY2FsRGlyZWN0b3J5LCBub2RlUGF0aH0pID0+IHtcblx0Y29uc3QgZW52ID0gZXh0ZW5kRW52ID8gey4uLnByb2Nlc3MuZW52LCAuLi5lbnZPcHRpb259IDogZW52T3B0aW9uO1xuXG5cdGlmIChwcmVmZXJMb2NhbCB8fCBub2RlKSB7XG5cdFx0cmV0dXJuIG5wbVJ1blBhdGhFbnYoe1xuXHRcdFx0ZW52LFxuXHRcdFx0Y3dkOiBsb2NhbERpcmVjdG9yeSxcblx0XHRcdGV4ZWNQYXRoOiBub2RlUGF0aCxcblx0XHRcdHByZWZlckxvY2FsLFxuXHRcdFx0YWRkRXhlY1BhdGg6IG5vZGUsXG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gZW52O1xufTtcbiIsICIvLyBXaGVuIHRoZSBgc2hlbGxgIG9wdGlvbiBpcyBzZXQsIGFueSBjb21tYW5kIGFyZ3VtZW50IGlzIGNvbmNhdGVuYXRlZCBhcyBhIHNpbmdsZSBzdHJpbmcgYnkgTm9kZS5qczpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL2UzOGNlMjdmM2NhMGE2NWY2OGEzMWNlZGQ5ODRjZGRiOTI3ZDQwMDIvbGliL2NoaWxkX3Byb2Nlc3MuanMjTDYxNC1MNjI0XG4vLyBIb3dldmVyLCBzaW5jZSBOb2RlIDI0LCBpdCBhbHNvIHByaW50cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcuXG4vLyBUbyBhdm9pZCB0aGlzIHdhcm5pbmcsIHdlIHBlcmZvcm0gdGhhdCBzYW1lIG9wZXJhdGlvbiBiZWZvcmUgY2FsbGluZyBgbm9kZTpjaGlsZF9wcm9jZXNzYC5cbi8vIFNoZWxscyBvbmx5IHVuZGVyc3RhbmQgc3RyaW5ncywgd2hpY2ggaXMgd2h5IE5vZGUuanMgcGVyZm9ybXMgdGhhdCBjb25jYXRlbmF0aW9uLlxuLy8gSG93ZXZlciwgd2UgcmVseSBvbiB1c2VycyBzcGxpdHRpbmcgY29tbWFuZCBhcmd1bWVudHMgYXMgYW4gYXJyYXkuXG4vLyBGb3IgZXhhbXBsZSwgdGhpcyBhbGxvd3MgdXMgdG8gZWFzaWx5IGRldGVjdCB3aGljaCBhcmd1bWVudHMgYXJlIHBhc3NlZC5cbi8vIFNvIHdlIGRvIHdhbnQgdXNlcnMgdG8gcGFzcyBhcnJheSBvZiBhcmd1bWVudHMgZXZlbiB3aXRoIGBzaGVsbDogdHJ1ZWAsIGJ1dCB3ZSBhbHNvIHdhbnQgdG8gYXZvaWQgYW55IHdhcm5pbmcuXG5leHBvcnQgY29uc3QgY29uY2F0ZW5hdGVTaGVsbCA9IChmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zKSA9PiBvcHRpb25zLnNoZWxsICYmIGNvbW1hbmRBcmd1bWVudHMubGVuZ3RoID4gMFxuXHQ/IFtbZmlsZSwgLi4uY29tbWFuZEFyZ3VtZW50c10uam9pbignICcpLCBbXSwgb3B0aW9uc11cblx0OiBbZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9uc107XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyaXBGaW5hbE5ld2xpbmUoaW5wdXQpIHtcblx0aWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gc3RyaXBGaW5hbE5ld2xpbmVTdHJpbmcoaW5wdXQpO1xuXHR9XG5cblx0aWYgKCEoQXJyYXlCdWZmZXIuaXNWaWV3KGlucHV0KSAmJiBpbnB1dC5CWVRFU19QRVJfRUxFTUVOVCA9PT0gMSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IG11c3QgYmUgYSBzdHJpbmcgb3IgYSBVaW50OEFycmF5Jyk7XG5cdH1cblxuXHRyZXR1cm4gc3RyaXBGaW5hbE5ld2xpbmVCaW5hcnkoaW5wdXQpO1xufVxuXG5jb25zdCBzdHJpcEZpbmFsTmV3bGluZVN0cmluZyA9IGlucHV0ID0+XG5cdGlucHV0LmF0KC0xKSA9PT0gTEZcblx0XHQ/IGlucHV0LnNsaWNlKDAsIGlucHV0LmF0KC0yKSA9PT0gQ1IgPyAtMiA6IC0xKVxuXHRcdDogaW5wdXQ7XG5cbmNvbnN0IHN0cmlwRmluYWxOZXdsaW5lQmluYXJ5ID0gaW5wdXQgPT5cblx0aW5wdXQuYXQoLTEpID09PSBMRl9CSU5BUllcblx0XHQ/IGlucHV0LnN1YmFycmF5KDAsIGlucHV0LmF0KC0yKSA9PT0gQ1JfQklOQVJZID8gLTIgOiAtMSlcblx0XHQ6IGlucHV0O1xuXG5jb25zdCBMRiA9ICdcXG4nO1xuY29uc3QgTEZfQklOQVJZID0gTEYuY29kZVBvaW50QXQoMCk7XG5jb25zdCBDUiA9ICdcXHInO1xuY29uc3QgQ1JfQklOQVJZID0gQ1IuY29kZVBvaW50QXQoMCk7XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIGlzU3RyZWFtKHN0cmVhbSwge2NoZWNrT3BlbiA9IHRydWV9ID0ge30pIHtcblx0cmV0dXJuIHN0cmVhbSAhPT0gbnVsbFxuXHRcdCYmIHR5cGVvZiBzdHJlYW0gPT09ICdvYmplY3QnXG5cdFx0JiYgKHN0cmVhbS53cml0YWJsZSB8fCBzdHJlYW0ucmVhZGFibGUgfHwgIWNoZWNrT3BlbiB8fCAoc3RyZWFtLndyaXRhYmxlID09PSB1bmRlZmluZWQgJiYgc3RyZWFtLnJlYWRhYmxlID09PSB1bmRlZmluZWQpKVxuXHRcdCYmIHR5cGVvZiBzdHJlYW0ucGlwZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV3JpdGFibGVTdHJlYW0oc3RyZWFtLCB7Y2hlY2tPcGVuID0gdHJ1ZX0gPSB7fSkge1xuXHRyZXR1cm4gaXNTdHJlYW0oc3RyZWFtLCB7Y2hlY2tPcGVufSlcblx0XHQmJiAoc3RyZWFtLndyaXRhYmxlIHx8ICFjaGVja09wZW4pXG5cdFx0JiYgdHlwZW9mIHN0cmVhbS53cml0ZSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCYmIHR5cGVvZiBzdHJlYW0uZW5kID09PSAnZnVuY3Rpb24nXG5cdFx0JiYgdHlwZW9mIHN0cmVhbS53cml0YWJsZSA9PT0gJ2Jvb2xlYW4nXG5cdFx0JiYgdHlwZW9mIHN0cmVhbS53cml0YWJsZU9iamVjdE1vZGUgPT09ICdib29sZWFuJ1xuXHRcdCYmIHR5cGVvZiBzdHJlYW0uZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCYmIHR5cGVvZiBzdHJlYW0uZGVzdHJveWVkID09PSAnYm9vbGVhbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWRhYmxlU3RyZWFtKHN0cmVhbSwge2NoZWNrT3BlbiA9IHRydWV9ID0ge30pIHtcblx0cmV0dXJuIGlzU3RyZWFtKHN0cmVhbSwge2NoZWNrT3Blbn0pXG5cdFx0JiYgKHN0cmVhbS5yZWFkYWJsZSB8fCAhY2hlY2tPcGVuKVxuXHRcdCYmIHR5cGVvZiBzdHJlYW0ucmVhZCA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCYmIHR5cGVvZiBzdHJlYW0ucmVhZGFibGUgPT09ICdib29sZWFuJ1xuXHRcdCYmIHR5cGVvZiBzdHJlYW0ucmVhZGFibGVPYmplY3RNb2RlID09PSAnYm9vbGVhbidcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLmRlc3Ryb3kgPT09ICdmdW5jdGlvbidcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLmRlc3Ryb3llZCA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEdXBsZXhTdHJlYW0oc3RyZWFtLCBvcHRpb25zKSB7XG5cdHJldHVybiBpc1dyaXRhYmxlU3RyZWFtKHN0cmVhbSwgb3B0aW9ucylcblx0XHQmJiBpc1JlYWRhYmxlU3RyZWFtKHN0cmVhbSwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyYW5zZm9ybVN0cmVhbShzdHJlYW0sIG9wdGlvbnMpIHtcblx0cmV0dXJuIGlzRHVwbGV4U3RyZWFtKHN0cmVhbSwgb3B0aW9ucylcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLl90cmFuc2Zvcm0gPT09ICdmdW5jdGlvbic7XG59XG4iLCAiY29uc3QgYSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihcbiAgT2JqZWN0LmdldFByb3RvdHlwZU9mKFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgYXN5bmMgZnVuY3Rpb24qICgpIHtcbiAgICB9XG4gICkucHJvdG90eXBlXG4pO1xuY2xhc3MgYyB7XG4gICN0O1xuICAjbjtcbiAgI3IgPSAhMTtcbiAgI2UgPSB2b2lkIDA7XG4gIGNvbnN0cnVjdG9yKGUsIHQpIHtcbiAgICB0aGlzLiN0ID0gZSwgdGhpcy4jbiA9IHQ7XG4gIH1cbiAgbmV4dCgpIHtcbiAgICBjb25zdCBlID0gKCkgPT4gdGhpcy4jcygpO1xuICAgIHJldHVybiB0aGlzLiNlID0gdGhpcy4jZSA/IHRoaXMuI2UudGhlbihlLCBlKSA6IGUoKSwgdGhpcy4jZTtcbiAgfVxuICByZXR1cm4oZSkge1xuICAgIGNvbnN0IHQgPSAoKSA9PiB0aGlzLiNpKGUpO1xuICAgIHJldHVybiB0aGlzLiNlID8gdGhpcy4jZS50aGVuKHQsIHQpIDogdCgpO1xuICB9XG4gIGFzeW5jICNzKCkge1xuICAgIGlmICh0aGlzLiNyKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9uZTogITAsXG4gICAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICAgIH07XG4gICAgbGV0IGU7XG4gICAgdHJ5IHtcbiAgICAgIGUgPSBhd2FpdCB0aGlzLiN0LnJlYWQoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICB0aHJvdyB0aGlzLiNlID0gdm9pZCAwLCB0aGlzLiNyID0gITAsIHRoaXMuI3QucmVsZWFzZUxvY2soKSwgdDtcbiAgICB9XG4gICAgcmV0dXJuIGUuZG9uZSAmJiAodGhpcy4jZSA9IHZvaWQgMCwgdGhpcy4jciA9ICEwLCB0aGlzLiN0LnJlbGVhc2VMb2NrKCkpLCBlO1xuICB9XG4gIGFzeW5jICNpKGUpIHtcbiAgICBpZiAodGhpcy4jcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRvbmU6ICEwLFxuICAgICAgICB2YWx1ZTogZVxuICAgICAgfTtcbiAgICBpZiAodGhpcy4jciA9ICEwLCAhdGhpcy4jbikge1xuICAgICAgY29uc3QgdCA9IHRoaXMuI3QuY2FuY2VsKGUpO1xuICAgICAgcmV0dXJuIHRoaXMuI3QucmVsZWFzZUxvY2soKSwgYXdhaXQgdCwge1xuICAgICAgICBkb25lOiAhMCxcbiAgICAgICAgdmFsdWU6IGVcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiN0LnJlbGVhc2VMb2NrKCksIHtcbiAgICAgIGRvbmU6ICEwLFxuICAgICAgdmFsdWU6IGVcbiAgICB9O1xuICB9XG59XG5jb25zdCBuID0gU3ltYm9sKCk7XG5mdW5jdGlvbiBpKCkge1xuICByZXR1cm4gdGhpc1tuXS5uZXh0KCk7XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaSwgXCJuYW1lXCIsIHsgdmFsdWU6IFwibmV4dFwiIH0pO1xuZnVuY3Rpb24gbyhyKSB7XG4gIHJldHVybiB0aGlzW25dLnJldHVybihyKTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcIm5hbWVcIiwgeyB2YWx1ZTogXCJyZXR1cm5cIiB9KTtcbmNvbnN0IHUgPSBPYmplY3QuY3JlYXRlKGEsIHtcbiAgbmV4dDoge1xuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgd3JpdGFibGU6ICEwLFxuICAgIHZhbHVlOiBpXG4gIH0sXG4gIHJldHVybjoge1xuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgd3JpdGFibGU6ICEwLFxuICAgIHZhbHVlOiBvXG4gIH1cbn0pO1xuZnVuY3Rpb24gaCh7IHByZXZlbnRDYW5jZWw6IHIgPSAhMSB9ID0ge30pIHtcbiAgY29uc3QgZSA9IHRoaXMuZ2V0UmVhZGVyKCksIHQgPSBuZXcgYyhcbiAgICBlLFxuICAgIHJcbiAgKSwgcyA9IE9iamVjdC5jcmVhdGUodSk7XG4gIHJldHVybiBzW25dID0gdCwgcztcbn1cbmV4cG9ydCB7XG4gIGggYXMgYXN5bmNJdGVyYXRvclxufTtcbiIsICJmdW5jdGlvbiBjKG4pIHtcbiAgY29uc3QgdCA9IGEobik7XG4gIHJldHVybiBuZXcgUmVhZGFibGVTdHJlYW0oXG4gICAge1xuICAgICAgYXN5bmMgcHVsbChlKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IHIsIGRvbmU6IG8gfSA9IGF3YWl0IHQubmV4dCgpO1xuICAgICAgICBvID8gZS5jbG9zZSgpIDogZS5lbnF1ZXVlKHIpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGNhbmNlbChlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdC5yZXR1cm4gPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBhd2FpdCB0LnJldHVybihlKSAhPSBcIm9iamVjdFwiKVxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJyZXR1cm4oKSBmdWxmaWxscyB3aXRoIGEgbm9uLW9iamVjdC5cIik7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfVxuICAgIH0sXG4gICAgbmV3IENvdW50UXVldWluZ1N0cmF0ZWd5KHtcbiAgICAgIGhpZ2hXYXRlck1hcms6IDBcbiAgICB9KVxuICApO1xufVxuZnVuY3Rpb24gYShuKSB7XG4gIGxldCB0ID0gbltTeW1ib2wuYXN5bmNJdGVyYXRvcl0/LmJpbmQobik7XG4gIGlmICh0ID09PSB2b2lkIDApIHtcbiAgICBjb25zdCByID0gbltTeW1ib2wuaXRlcmF0b3JdKCksIG8gPSB7XG4gICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4gclxuICAgIH07XG4gICAgdCA9IGFzeW5jIGZ1bmN0aW9uKiAoKSB7XG4gICAgICByZXR1cm4geWllbGQqIG87XG4gICAgfTtcbiAgfVxuICByZXR1cm4gdCgpO1xufVxuZXhwb3J0IHtcbiAgYyBhcyBmcm9tQW55SXRlcmFibGVcbn07XG4iLCAiaW1wb3J0IHsgYXN5bmNJdGVyYXRvciBhcyBlIH0gZnJvbSBcIi4vYXN5bmNJdGVyYXRvci5qc1wiO1xuaW1wb3J0IHsgZnJvbUFueUl0ZXJhYmxlIGFzIGEgfSBmcm9tIFwiLi9mcm9tQW55SXRlcmFibGUuanNcIjtcbmV4cG9ydCB7XG4gIGUgYXMgYXN5bmNJdGVyYXRvcixcbiAgYSBhcyBmcm9tQW55SXRlcmFibGVcbn07XG4iLCAiaW1wb3J0IHtpc1JlYWRhYmxlU3RyZWFtfSBmcm9tICdpcy1zdHJlYW0nO1xuaW1wb3J0IHthc3luY0l0ZXJhdG9yfSBmcm9tICdAc2VjLWFudC9yZWFkYWJsZS1zdHJlYW0vcG9ueWZpbGwnO1xuXG5leHBvcnQgY29uc3QgZ2V0QXN5bmNJdGVyYWJsZSA9IHN0cmVhbSA9PiB7XG5cdGlmIChpc1JlYWRhYmxlU3RyZWFtKHN0cmVhbSwge2NoZWNrT3BlbjogZmFsc2V9KSAmJiBub2RlSW1wb3J0cy5vbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGdldFN0cmVhbUl0ZXJhYmxlKHN0cmVhbSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHN0cmVhbT8uW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBzdHJlYW07XG5cdH1cblxuXHQvLyBgUmVhZGFibGVTdHJlYW1bU3ltYm9sLmFzeW5jSXRlcmF0b3JdYCBzdXBwb3J0IGlzIG1pc3NpbmcgaW4gbXVsdGlwbGUgYnJvd3NlcnMsIHNvIHdlIHBvbnlmaWxsIGl0XG5cdGlmICh0b1N0cmluZy5jYWxsKHN0cmVhbSkgPT09ICdbb2JqZWN0IFJlYWRhYmxlU3RyZWFtXScpIHtcblx0XHRyZXR1cm4gYXN5bmNJdGVyYXRvci5jYWxsKHN0cmVhbSk7XG5cdH1cblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWRhYmxlLCBhIFJlYWRhYmxlU3RyZWFtLCBvciBhbiBhc3luYyBpdGVyYWJsZS4nKTtcbn07XG5cbmNvbnN0IHt0b1N0cmluZ30gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBUaGUgZGVmYXVsdCBpdGVyYWJsZSBmb3IgTm9kZS5qcyBzdHJlYW1zIGRvZXMgbm90IGFsbG93IGZvciBtdWx0aXBsZSByZWFkZXJzIGF0IG9uY2UsIHNvIHdlIHJlLWltcGxlbWVudCBpdFxuY29uc3QgZ2V0U3RyZWFtSXRlcmFibGUgPSBhc3luYyBmdW5jdGlvbiAqIChzdHJlYW0pIHtcblx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0Y29uc3Qgc3RhdGUgPSB7fTtcblx0aGFuZGxlU3RyZWFtRW5kKHN0cmVhbSwgY29udHJvbGxlciwgc3RhdGUpO1xuXG5cdHRyeSB7XG5cdFx0Zm9yIGF3YWl0IChjb25zdCBbY2h1bmtdIG9mIG5vZGVJbXBvcnRzLm9uKHN0cmVhbSwgJ2RhdGEnLCB7c2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbH0pKSB7XG5cdFx0XHR5aWVsZCBjaHVuaztcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3RyZWFtIGZhaWx1cmUsIGZvciBleGFtcGxlIGR1ZSB0byBgc3RyZWFtLmRlc3Ryb3koZXJyb3IpYFxuXHRcdGlmIChzdGF0ZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBzdGF0ZS5lcnJvcjtcblx0XHQvLyBgZXJyb3JgIGV2ZW50IGRpcmVjdGx5IGVtaXR0ZWQgb24gc3RyZWFtXG5cdFx0fSBlbHNlIGlmICghY29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0Ly8gT3RoZXJ3aXNlLCBzdHJlYW0gY29tcGxldGVkIHN1Y2Nlc3NmdWxseVxuXHRcdH1cblx0XHQvLyBUaGUgYGZpbmFsbHlgIGJsb2NrIGFsc28gcnVucyB3aGVuIHRoZSBjYWxsZXIgdGhyb3dzLCBmb3IgZXhhbXBsZSBkdWUgdG8gdGhlIGBtYXhCdWZmZXJgIG9wdGlvblxuXHR9IGZpbmFsbHkge1xuXHRcdHN0cmVhbS5kZXN0cm95KCk7XG5cdH1cbn07XG5cbmNvbnN0IGhhbmRsZVN0cmVhbUVuZCA9IGFzeW5jIChzdHJlYW0sIGNvbnRyb2xsZXIsIHN0YXRlKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgbm9kZUltcG9ydHMuZmluaXNoZWQoc3RyZWFtLCB7XG5cdFx0XHRjbGVhbnVwOiB0cnVlLFxuXHRcdFx0cmVhZGFibGU6IHRydWUsXG5cdFx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0c3RhdGUuZXJyb3IgPSBlcnJvcjtcblx0fSBmaW5hbGx5IHtcblx0XHRjb250cm9sbGVyLmFib3J0KCk7XG5cdH1cbn07XG5cbi8vIExvYWRlZCBieSB0aGUgTm9kZSBlbnRyeXBvaW50LCBidXQgbm90IGJ5IHRoZSBicm93c2VyIG9uZS5cbi8vIFRoaXMgcHJldmVudHMgdXNpbmcgZHluYW1pYyBpbXBvcnRzLlxuZXhwb3J0IGNvbnN0IG5vZGVJbXBvcnRzID0ge307XG4iLCAiaW1wb3J0IHtnZXRBc3luY0l0ZXJhYmxlfSBmcm9tICcuL3N0cmVhbS5qcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRTdHJlYW1Db250ZW50cyA9IGFzeW5jIChzdHJlYW0sIHtpbml0LCBjb252ZXJ0Q2h1bmssIGdldFNpemUsIHRydW5jYXRlQ2h1bmssIGFkZENodW5rLCBnZXRGaW5hbENodW5rLCBmaW5hbGl6ZX0sIHttYXhCdWZmZXIgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFl9ID0ge30pID0+IHtcblx0Y29uc3QgYXN5bmNJdGVyYWJsZSA9IGdldEFzeW5jSXRlcmFibGUoc3RyZWFtKTtcblxuXHRjb25zdCBzdGF0ZSA9IGluaXQoKTtcblx0c3RhdGUubGVuZ3RoID0gMDtcblxuXHR0cnkge1xuXHRcdGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgYXN5bmNJdGVyYWJsZSkge1xuXHRcdFx0Y29uc3QgY2h1bmtUeXBlID0gZ2V0Q2h1bmtUeXBlKGNodW5rKTtcblx0XHRcdGNvbnN0IGNvbnZlcnRlZENodW5rID0gY29udmVydENodW5rW2NodW5rVHlwZV0oY2h1bmssIHN0YXRlKTtcblx0XHRcdGFwcGVuZENodW5rKHtcblx0XHRcdFx0Y29udmVydGVkQ2h1bmssXG5cdFx0XHRcdHN0YXRlLFxuXHRcdFx0XHRnZXRTaXplLFxuXHRcdFx0XHR0cnVuY2F0ZUNodW5rLFxuXHRcdFx0XHRhZGRDaHVuayxcblx0XHRcdFx0bWF4QnVmZmVyLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0YXBwZW5kRmluYWxDaHVuayh7XG5cdFx0XHRzdGF0ZSxcblx0XHRcdGNvbnZlcnRDaHVuayxcblx0XHRcdGdldFNpemUsXG5cdFx0XHR0cnVuY2F0ZUNodW5rLFxuXHRcdFx0YWRkQ2h1bmssXG5cdFx0XHRnZXRGaW5hbENodW5rLFxuXHRcdFx0bWF4QnVmZmVyLFxuXHRcdH0pO1xuXHRcdHJldHVybiBmaW5hbGl6ZShzdGF0ZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc3Qgbm9ybWFsaXplZEVycm9yID0gdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiBlcnJvciAhPT0gbnVsbCA/IGVycm9yIDogbmV3IEVycm9yKGVycm9yKTtcblx0XHRub3JtYWxpemVkRXJyb3IuYnVmZmVyZWREYXRhID0gZmluYWxpemUoc3RhdGUpO1xuXHRcdHRocm93IG5vcm1hbGl6ZWRFcnJvcjtcblx0fVxufTtcblxuY29uc3QgYXBwZW5kRmluYWxDaHVuayA9ICh7c3RhdGUsIGdldFNpemUsIHRydW5jYXRlQ2h1bmssIGFkZENodW5rLCBnZXRGaW5hbENodW5rLCBtYXhCdWZmZXJ9KSA9PiB7XG5cdGNvbnN0IGNvbnZlcnRlZENodW5rID0gZ2V0RmluYWxDaHVuayhzdGF0ZSk7XG5cdGlmIChjb252ZXJ0ZWRDaHVuayAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0YXBwZW5kQ2h1bmsoe1xuXHRcdFx0Y29udmVydGVkQ2h1bmssXG5cdFx0XHRzdGF0ZSxcblx0XHRcdGdldFNpemUsXG5cdFx0XHR0cnVuY2F0ZUNodW5rLFxuXHRcdFx0YWRkQ2h1bmssXG5cdFx0XHRtYXhCdWZmZXIsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IGFwcGVuZENodW5rID0gKHtjb252ZXJ0ZWRDaHVuaywgc3RhdGUsIGdldFNpemUsIHRydW5jYXRlQ2h1bmssIGFkZENodW5rLCBtYXhCdWZmZXJ9KSA9PiB7XG5cdGNvbnN0IGNodW5rU2l6ZSA9IGdldFNpemUoY29udmVydGVkQ2h1bmspO1xuXHRjb25zdCBuZXdMZW5ndGggPSBzdGF0ZS5sZW5ndGggKyBjaHVua1NpemU7XG5cblx0aWYgKG5ld0xlbmd0aCA8PSBtYXhCdWZmZXIpIHtcblx0XHRhZGROZXdDaHVuayhjb252ZXJ0ZWRDaHVuaywgc3RhdGUsIGFkZENodW5rLCBuZXdMZW5ndGgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRydW5jYXRlZENodW5rID0gdHJ1bmNhdGVDaHVuayhjb252ZXJ0ZWRDaHVuaywgbWF4QnVmZmVyIC0gc3RhdGUubGVuZ3RoKTtcblxuXHRpZiAodHJ1bmNhdGVkQ2h1bmsgIT09IHVuZGVmaW5lZCkge1xuXHRcdGFkZE5ld0NodW5rKHRydW5jYXRlZENodW5rLCBzdGF0ZSwgYWRkQ2h1bmssIG1heEJ1ZmZlcik7XG5cdH1cblxuXHR0aHJvdyBuZXcgTWF4QnVmZmVyRXJyb3IoKTtcbn07XG5cbmNvbnN0IGFkZE5ld0NodW5rID0gKGNvbnZlcnRlZENodW5rLCBzdGF0ZSwgYWRkQ2h1bmssIG5ld0xlbmd0aCkgPT4ge1xuXHRzdGF0ZS5jb250ZW50cyA9IGFkZENodW5rKGNvbnZlcnRlZENodW5rLCBzdGF0ZSwgbmV3TGVuZ3RoKTtcblx0c3RhdGUubGVuZ3RoID0gbmV3TGVuZ3RoO1xufTtcblxuY29uc3QgZ2V0Q2h1bmtUeXBlID0gY2h1bmsgPT4ge1xuXHRjb25zdCB0eXBlT2ZDaHVuayA9IHR5cGVvZiBjaHVuaztcblxuXHRpZiAodHlwZU9mQ2h1bmsgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuICdzdHJpbmcnO1xuXHR9XG5cblx0aWYgKHR5cGVPZkNodW5rICE9PSAnb2JqZWN0JyB8fCBjaHVuayA9PT0gbnVsbCkge1xuXHRcdHJldHVybiAnb3RoZXJzJztcblx0fVxuXG5cdGlmIChnbG9iYWxUaGlzLkJ1ZmZlcj8uaXNCdWZmZXIoY2h1bmspKSB7XG5cdFx0cmV0dXJuICdidWZmZXInO1xuXHR9XG5cblx0Y29uc3QgcHJvdG90eXBlTmFtZSA9IG9iamVjdFRvU3RyaW5nLmNhbGwoY2h1bmspO1xuXG5cdGlmIChwcm90b3R5cGVOYW1lID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG5cdFx0cmV0dXJuICdhcnJheUJ1ZmZlcic7XG5cdH1cblxuXHRpZiAocHJvdG90eXBlTmFtZSA9PT0gJ1tvYmplY3QgRGF0YVZpZXddJykge1xuXHRcdHJldHVybiAnZGF0YVZpZXcnO1xuXHR9XG5cblx0aWYgKFxuXHRcdE51bWJlci5pc0ludGVnZXIoY2h1bmsuYnl0ZUxlbmd0aClcblx0XHQmJiBOdW1iZXIuaXNJbnRlZ2VyKGNodW5rLmJ5dGVPZmZzZXQpXG5cdFx0JiYgb2JqZWN0VG9TdHJpbmcuY2FsbChjaHVuay5idWZmZXIpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nXG5cdCkge1xuXHRcdHJldHVybiAndHlwZWRBcnJheSc7XG5cdH1cblxuXHRyZXR1cm4gJ290aGVycyc7XG59O1xuXG5jb25zdCB7dG9TdHJpbmc6IG9iamVjdFRvU3RyaW5nfSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbmV4cG9ydCBjbGFzcyBNYXhCdWZmZXJFcnJvciBleHRlbmRzIEVycm9yIHtcblx0bmFtZSA9ICdNYXhCdWZmZXJFcnJvcic7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoJ21heEJ1ZmZlciBleGNlZWRlZCcpO1xuXHR9XG59XG4iLCAiZXhwb3J0IGNvbnN0IGlkZW50aXR5ID0gdmFsdWUgPT4gdmFsdWU7XG5cbmV4cG9ydCBjb25zdCBub29wID0gKCkgPT4gdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29udGVudHNQcm9wZXJ0eSA9ICh7Y29udGVudHN9KSA9PiBjb250ZW50cztcblxuZXhwb3J0IGNvbnN0IHRocm93T2JqZWN0U3RyZWFtID0gY2h1bmsgPT4ge1xuXHR0aHJvdyBuZXcgRXJyb3IoYFN0cmVhbXMgaW4gb2JqZWN0IG1vZGUgYXJlIG5vdCBzdXBwb3J0ZWQ6ICR7U3RyaW5nKGNodW5rKX1gKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMZW5ndGhQcm9wZXJ0eSA9IGNvbnZlcnRlZENodW5rID0+IGNvbnZlcnRlZENodW5rLmxlbmd0aDtcbiIsICJpbXBvcnQge2dldFN0cmVhbUNvbnRlbnRzfSBmcm9tICcuL2NvbnRlbnRzLmpzJztcbmltcG9ydCB7aWRlbnRpdHksIG5vb3AsIGdldENvbnRlbnRzUHJvcGVydHl9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RyZWFtQXNBcnJheShzdHJlYW0sIG9wdGlvbnMpIHtcblx0cmV0dXJuIGdldFN0cmVhbUNvbnRlbnRzKHN0cmVhbSwgYXJyYXlNZXRob2RzLCBvcHRpb25zKTtcbn1cblxuY29uc3QgaW5pdEFycmF5ID0gKCkgPT4gKHtjb250ZW50czogW119KTtcblxuY29uc3QgaW5jcmVtZW50ID0gKCkgPT4gMTtcblxuY29uc3QgYWRkQXJyYXlDaHVuayA9IChjb252ZXJ0ZWRDaHVuaywge2NvbnRlbnRzfSkgPT4ge1xuXHRjb250ZW50cy5wdXNoKGNvbnZlcnRlZENodW5rKTtcblx0cmV0dXJuIGNvbnRlbnRzO1xufTtcblxuY29uc3QgYXJyYXlNZXRob2RzID0ge1xuXHRpbml0OiBpbml0QXJyYXksXG5cdGNvbnZlcnRDaHVuazoge1xuXHRcdHN0cmluZzogaWRlbnRpdHksXG5cdFx0YnVmZmVyOiBpZGVudGl0eSxcblx0XHRhcnJheUJ1ZmZlcjogaWRlbnRpdHksXG5cdFx0ZGF0YVZpZXc6IGlkZW50aXR5LFxuXHRcdHR5cGVkQXJyYXk6IGlkZW50aXR5LFxuXHRcdG90aGVyczogaWRlbnRpdHksXG5cdH0sXG5cdGdldFNpemU6IGluY3JlbWVudCxcblx0dHJ1bmNhdGVDaHVuazogbm9vcCxcblx0YWRkQ2h1bms6IGFkZEFycmF5Q2h1bmssXG5cdGdldEZpbmFsQ2h1bms6IG5vb3AsXG5cdGZpbmFsaXplOiBnZXRDb250ZW50c1Byb3BlcnR5LFxufTtcbiIsICJpbXBvcnQge2dldFN0cmVhbUNvbnRlbnRzfSBmcm9tICcuL2NvbnRlbnRzLmpzJztcbmltcG9ydCB7bm9vcCwgdGhyb3dPYmplY3RTdHJlYW0sIGdldExlbmd0aFByb3BlcnR5fSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmVhbUFzQXJyYXlCdWZmZXIoc3RyZWFtLCBvcHRpb25zKSB7XG5cdHJldHVybiBnZXRTdHJlYW1Db250ZW50cyhzdHJlYW0sIGFycmF5QnVmZmVyTWV0aG9kcywgb3B0aW9ucyk7XG59XG5cbmNvbnN0IGluaXRBcnJheUJ1ZmZlciA9ICgpID0+ICh7Y29udGVudHM6IG5ldyBBcnJheUJ1ZmZlcigwKX0pO1xuXG5jb25zdCB1c2VUZXh0RW5jb2RlciA9IGNodW5rID0+IHRleHRFbmNvZGVyLmVuY29kZShjaHVuayk7XG5jb25zdCB0ZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuXG5jb25zdCB1c2VVaW50OEFycmF5ID0gY2h1bmsgPT4gbmV3IFVpbnQ4QXJyYXkoY2h1bmspO1xuXG5jb25zdCB1c2VVaW50OEFycmF5V2l0aE9mZnNldCA9IGNodW5rID0+IG5ldyBVaW50OEFycmF5KGNodW5rLmJ1ZmZlciwgY2h1bmsuYnl0ZU9mZnNldCwgY2h1bmsuYnl0ZUxlbmd0aCk7XG5cbmNvbnN0IHRydW5jYXRlQXJyYXlCdWZmZXJDaHVuayA9IChjb252ZXJ0ZWRDaHVuaywgY2h1bmtTaXplKSA9PiBjb252ZXJ0ZWRDaHVuay5zbGljZSgwLCBjaHVua1NpemUpO1xuXG4vLyBgY29udGVudHNgIGlzIGFuIGluY3JlYXNpbmdseSBncm93aW5nIGBVaW50OEFycmF5YC5cbmNvbnN0IGFkZEFycmF5QnVmZmVyQ2h1bmsgPSAoY29udmVydGVkQ2h1bmssIHtjb250ZW50cywgbGVuZ3RoOiBwcmV2aW91c0xlbmd0aH0sIGxlbmd0aCkgPT4ge1xuXHRjb25zdCBuZXdDb250ZW50cyA9IGhhc0FycmF5QnVmZmVyUmVzaXplKCkgPyByZXNpemVBcnJheUJ1ZmZlcihjb250ZW50cywgbGVuZ3RoKSA6IHJlc2l6ZUFycmF5QnVmZmVyU2xvdyhjb250ZW50cywgbGVuZ3RoKTtcblx0bmV3IFVpbnQ4QXJyYXkobmV3Q29udGVudHMpLnNldChjb252ZXJ0ZWRDaHVuaywgcHJldmlvdXNMZW5ndGgpO1xuXHRyZXR1cm4gbmV3Q29udGVudHM7XG59O1xuXG4vLyBXaXRob3V0IGBBcnJheUJ1ZmZlci5yZXNpemUoKWAsIGBjb250ZW50c2Agc2l6ZSBpcyBhbHdheXMgYSBwb3dlciBvZiAyLlxuLy8gVGhpcyBtZWFucyBpdHMgbGFzdCBieXRlcyBhcmUgemVyb2VzIChub3Qgc3RyZWFtIGRhdGEpLCB3aGljaCBuZWVkIHRvIGJlXG4vLyB0cmltbWVkIGF0IHRoZSBlbmQgd2l0aCBgQXJyYXlCdWZmZXIuc2xpY2UoKWAuXG5jb25zdCByZXNpemVBcnJheUJ1ZmZlclNsb3cgPSAoY29udGVudHMsIGxlbmd0aCkgPT4ge1xuXHRpZiAobGVuZ3RoIDw9IGNvbnRlbnRzLmJ5dGVMZW5ndGgpIHtcblx0XHRyZXR1cm4gY29udGVudHM7XG5cdH1cblxuXHRjb25zdCBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihnZXROZXdDb250ZW50c0xlbmd0aChsZW5ndGgpKTtcblx0bmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpLnNldChuZXcgVWludDhBcnJheShjb250ZW50cyksIDApO1xuXHRyZXR1cm4gYXJyYXlCdWZmZXI7XG59O1xuXG4vLyBXaXRoIGBBcnJheUJ1ZmZlci5yZXNpemUoKWAsIGBjb250ZW50c2Agc2l6ZSBtYXRjaGVzIGV4YWN0bHkgdGhlIHNpemUgb2Zcbi8vIHRoZSBzdHJlYW0gZGF0YS4gSXQgZG9lcyBub3QgaW5jbHVkZSBleHRyYW5lb3VzIHplcm9lcyB0byB0cmltIGF0IHRoZSBlbmQuXG4vLyBUaGUgdW5kZXJseWluZyBgQXJyYXlCdWZmZXJgIGRvZXMgYWxsb2NhdGUgYSBudW1iZXIgb2YgYnl0ZXMgdGhhdCBpcyBhIHBvd2VyXG4vLyBvZiAyLCBidXQgdGhvc2UgYnl0ZXMgYXJlIG9ubHkgdmlzaWJsZSBhZnRlciBjYWxsaW5nIGBBcnJheUJ1ZmZlci5yZXNpemUoKWAuXG5jb25zdCByZXNpemVBcnJheUJ1ZmZlciA9IChjb250ZW50cywgbGVuZ3RoKSA9PiB7XG5cdGlmIChsZW5ndGggPD0gY29udGVudHMubWF4Qnl0ZUxlbmd0aCkge1xuXHRcdGNvbnRlbnRzLnJlc2l6ZShsZW5ndGgpO1xuXHRcdHJldHVybiBjb250ZW50cztcblx0fVxuXG5cdGNvbnN0IGFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aCwge21heEJ5dGVMZW5ndGg6IGdldE5ld0NvbnRlbnRzTGVuZ3RoKGxlbmd0aCl9KTtcblx0bmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpLnNldChuZXcgVWludDhBcnJheShjb250ZW50cyksIDApO1xuXHRyZXR1cm4gYXJyYXlCdWZmZXI7XG59O1xuXG4vLyBSZXRyaWV2ZSB0aGUgY2xvc2VzdCBgbGVuZ3RoYCB0aGF0IGlzIGJvdGggPj0gYW5kIGEgcG93ZXIgb2YgMlxuY29uc3QgZ2V0TmV3Q29udGVudHNMZW5ndGggPSBsZW5ndGggPT4gU0NBTEVfRkFDVE9SICoqIE1hdGguY2VpbChNYXRoLmxvZyhsZW5ndGgpIC8gTWF0aC5sb2coU0NBTEVfRkFDVE9SKSk7XG5cbmNvbnN0IFNDQUxFX0ZBQ1RPUiA9IDI7XG5cbmNvbnN0IGZpbmFsaXplQXJyYXlCdWZmZXIgPSAoe2NvbnRlbnRzLCBsZW5ndGh9KSA9PiBoYXNBcnJheUJ1ZmZlclJlc2l6ZSgpID8gY29udGVudHMgOiBjb250ZW50cy5zbGljZSgwLCBsZW5ndGgpO1xuXG4vLyBgQXJyYXlCdWZmZXIuc2xpY2UoKWAgaXMgc2xvdy4gV2hlbiBgQXJyYXlCdWZmZXIucmVzaXplKClgIGlzIGF2YWlsYWJsZVxuLy8gKE5vZGUgPj0yMC4wLjAsIFNhZmFyaSA+PTE2LjQgYW5kIENocm9tZSksIHdlIGNhbiB1c2UgaXQgaW5zdGVhZC5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby13YXJuaW5nLWNvbW1lbnRzXG4vLyBUT0RPOiByZW1vdmUgYWZ0ZXIgZHJvcHBpbmcgc3VwcG9ydCBmb3IgTm9kZSAyMC5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby13YXJuaW5nLWNvbW1lbnRzXG4vLyBUT0RPOiB1c2UgYEFycmF5QnVmZmVyLnRyYW5zZmVyVG9GaXhlZExlbmd0aCgpYCBpbnN0ZWFkIG9uY2UgaXQgaXMgYXZhaWxhYmxlXG5jb25zdCBoYXNBcnJheUJ1ZmZlclJlc2l6ZSA9ICgpID0+ICdyZXNpemUnIGluIEFycmF5QnVmZmVyLnByb3RvdHlwZTtcblxuY29uc3QgYXJyYXlCdWZmZXJNZXRob2RzID0ge1xuXHRpbml0OiBpbml0QXJyYXlCdWZmZXIsXG5cdGNvbnZlcnRDaHVuazoge1xuXHRcdHN0cmluZzogdXNlVGV4dEVuY29kZXIsXG5cdFx0YnVmZmVyOiB1c2VVaW50OEFycmF5LFxuXHRcdGFycmF5QnVmZmVyOiB1c2VVaW50OEFycmF5LFxuXHRcdGRhdGFWaWV3OiB1c2VVaW50OEFycmF5V2l0aE9mZnNldCxcblx0XHR0eXBlZEFycmF5OiB1c2VVaW50OEFycmF5V2l0aE9mZnNldCxcblx0XHRvdGhlcnM6IHRocm93T2JqZWN0U3RyZWFtLFxuXHR9LFxuXHRnZXRTaXplOiBnZXRMZW5ndGhQcm9wZXJ0eSxcblx0dHJ1bmNhdGVDaHVuazogdHJ1bmNhdGVBcnJheUJ1ZmZlckNodW5rLFxuXHRhZGRDaHVuazogYWRkQXJyYXlCdWZmZXJDaHVuayxcblx0Z2V0RmluYWxDaHVuazogbm9vcCxcblx0ZmluYWxpemU6IGZpbmFsaXplQXJyYXlCdWZmZXIsXG59O1xuIiwgImltcG9ydCB7Z2V0U3RyZWFtQ29udGVudHN9IGZyb20gJy4vY29udGVudHMuanMnO1xuaW1wb3J0IHtcblx0aWRlbnRpdHksXG5cdGdldENvbnRlbnRzUHJvcGVydHksXG5cdHRocm93T2JqZWN0U3RyZWFtLFxuXHRnZXRMZW5ndGhQcm9wZXJ0eSxcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHJlYW1Bc1N0cmluZyhzdHJlYW0sIG9wdGlvbnMpIHtcblx0cmV0dXJuIGdldFN0cmVhbUNvbnRlbnRzKHN0cmVhbSwgc3RyaW5nTWV0aG9kcywgb3B0aW9ucyk7XG59XG5cbmNvbnN0IGluaXRTdHJpbmcgPSAoKSA9PiAoe2NvbnRlbnRzOiAnJywgdGV4dERlY29kZXI6IG5ldyBUZXh0RGVjb2RlcigpfSk7XG5cbmNvbnN0IHVzZVRleHREZWNvZGVyID0gKGNodW5rLCB7dGV4dERlY29kZXJ9KSA9PiB0ZXh0RGVjb2Rlci5kZWNvZGUoY2h1bmssIHtzdHJlYW06IHRydWV9KTtcblxuY29uc3QgYWRkU3RyaW5nQ2h1bmsgPSAoY29udmVydGVkQ2h1bmssIHtjb250ZW50c30pID0+IGNvbnRlbnRzICsgY29udmVydGVkQ2h1bms7XG5cbmNvbnN0IHRydW5jYXRlU3RyaW5nQ2h1bmsgPSAoY29udmVydGVkQ2h1bmssIGNodW5rU2l6ZSkgPT4gY29udmVydGVkQ2h1bmsuc2xpY2UoMCwgY2h1bmtTaXplKTtcblxuY29uc3QgZ2V0RmluYWxTdHJpbmdDaHVuayA9ICh7dGV4dERlY29kZXJ9KSA9PiB7XG5cdGNvbnN0IGZpbmFsQ2h1bmsgPSB0ZXh0RGVjb2Rlci5kZWNvZGUoKTtcblx0cmV0dXJuIGZpbmFsQ2h1bmsgPT09ICcnID8gdW5kZWZpbmVkIDogZmluYWxDaHVuaztcbn07XG5cbmNvbnN0IHN0cmluZ01ldGhvZHMgPSB7XG5cdGluaXQ6IGluaXRTdHJpbmcsXG5cdGNvbnZlcnRDaHVuazoge1xuXHRcdHN0cmluZzogaWRlbnRpdHksXG5cdFx0YnVmZmVyOiB1c2VUZXh0RGVjb2Rlcixcblx0XHRhcnJheUJ1ZmZlcjogdXNlVGV4dERlY29kZXIsXG5cdFx0ZGF0YVZpZXc6IHVzZVRleHREZWNvZGVyLFxuXHRcdHR5cGVkQXJyYXk6IHVzZVRleHREZWNvZGVyLFxuXHRcdG90aGVyczogdGhyb3dPYmplY3RTdHJlYW0sXG5cdH0sXG5cdGdldFNpemU6IGdldExlbmd0aFByb3BlcnR5LFxuXHR0cnVuY2F0ZUNodW5rOiB0cnVuY2F0ZVN0cmluZ0NodW5rLFxuXHRhZGRDaHVuazogYWRkU3RyaW5nQ2h1bmssXG5cdGdldEZpbmFsQ2h1bms6IGdldEZpbmFsU3RyaW5nQ2h1bmssXG5cdGZpbmFsaXplOiBnZXRDb250ZW50c1Byb3BlcnR5LFxufTtcbiIsICJleHBvcnQge2dldFN0cmVhbUFzQXJyYXl9IGZyb20gJy4vYXJyYXkuanMnO1xuZXhwb3J0IHtnZXRTdHJlYW1Bc0FycmF5QnVmZmVyfSBmcm9tICcuL2FycmF5LWJ1ZmZlci5qcyc7XG5leHBvcnQge2dldFN0cmVhbUFzQnVmZmVyfSBmcm9tICcuL2J1ZmZlci5qcyc7XG5leHBvcnQge2dldFN0cmVhbUFzU3RyaW5nIGFzIGRlZmF1bHR9IGZyb20gJy4vc3RyaW5nLmpzJztcbmV4cG9ydCB7TWF4QnVmZmVyRXJyb3J9IGZyb20gJy4vY29udGVudHMuanMnO1xuIiwgImltcG9ydCB7b259IGZyb20gJ25vZGU6ZXZlbnRzJztcbmltcG9ydCB7ZmluaXNoZWR9IGZyb20gJ25vZGU6c3RyZWFtL3Byb21pc2VzJztcbmltcG9ydCB7bm9kZUltcG9ydHN9IGZyb20gJy4vc3RyZWFtLmpzJztcblxuT2JqZWN0LmFzc2lnbihub2RlSW1wb3J0cywge29uLCBmaW5pc2hlZH0pO1xuXG5leHBvcnQge1xuXHRkZWZhdWx0LFxuXHRnZXRTdHJlYW1Bc0FycmF5LFxuXHRnZXRTdHJlYW1Bc0FycmF5QnVmZmVyLFxuXHRnZXRTdHJlYW1Bc0J1ZmZlcixcblx0TWF4QnVmZmVyRXJyb3IsXG59IGZyb20gJy4vZXhwb3J0cy5qcyc7XG4iLCAiaW1wb3J0IHtNYXhCdWZmZXJFcnJvcn0gZnJvbSAnZ2V0LXN0cmVhbSc7XG5pbXBvcnQge2dldFN0cmVhbU5hbWV9IGZyb20gJy4uL3V0aWxzL3N0YW5kYXJkLXN0cmVhbS5qcyc7XG5pbXBvcnQge2dldEZkU3BlY2lmaWNWYWx1ZX0gZnJvbSAnLi4vYXJndW1lbnRzL3NwZWNpZmljLmpzJztcblxuLy8gV2hlbiB0aGUgYG1heEJ1ZmZlcmAgb3B0aW9uIGlzIGhpdCwgYSBNYXhCdWZmZXJFcnJvciBpcyB0aHJvd24uXG4vLyBUaGUgc3RyZWFtIGlzIGFib3J0ZWQsIHRoZW4gc3BlY2lmaWMgaW5mb3JtYXRpb24gaXMga2VwdCBmb3IgdGhlIGVycm9yIG1lc3NhZ2UuXG5leHBvcnQgY29uc3QgaGFuZGxlTWF4QnVmZmVyID0gKHtlcnJvciwgc3RyZWFtLCByZWFkYWJsZU9iamVjdE1vZGUsIGxpbmVzLCBlbmNvZGluZywgZmROdW1iZXJ9KSA9PiB7XG5cdGlmICghKGVycm9yIGluc3RhbmNlb2YgTWF4QnVmZmVyRXJyb3IpKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cblxuXHRpZiAoZmROdW1iZXIgPT09ICdhbGwnKSB7XG5cdFx0cmV0dXJuIGVycm9yO1xuXHR9XG5cblx0Y29uc3QgdW5pdCA9IGdldE1heEJ1ZmZlclVuaXQocmVhZGFibGVPYmplY3RNb2RlLCBsaW5lcywgZW5jb2RpbmcpO1xuXHRlcnJvci5tYXhCdWZmZXJJbmZvID0ge2ZkTnVtYmVyLCB1bml0fTtcblx0c3RyZWFtLmRlc3Ryb3koKTtcblx0dGhyb3cgZXJyb3I7XG59O1xuXG5jb25zdCBnZXRNYXhCdWZmZXJVbml0ID0gKHJlYWRhYmxlT2JqZWN0TW9kZSwgbGluZXMsIGVuY29kaW5nKSA9PiB7XG5cdGlmIChyZWFkYWJsZU9iamVjdE1vZGUpIHtcblx0XHRyZXR1cm4gJ29iamVjdHMnO1xuXHR9XG5cblx0aWYgKGxpbmVzKSB7XG5cdFx0cmV0dXJuICdsaW5lcyc7XG5cdH1cblxuXHRpZiAoZW5jb2RpbmcgPT09ICdidWZmZXInKSB7XG5cdFx0cmV0dXJuICdieXRlcyc7XG5cdH1cblxuXHRyZXR1cm4gJ2NoYXJhY3RlcnMnO1xufTtcblxuLy8gQ2hlY2sgdGhlIGBtYXhCdWZmZXJgIG9wdGlvbiB3aXRoIGByZXN1bHQuaXBjT3V0cHV0YFxuZXhwb3J0IGNvbnN0IGNoZWNrSXBjTWF4QnVmZmVyID0gKHN1YnByb2Nlc3MsIGlwY091dHB1dCwgbWF4QnVmZmVyKSA9PiB7XG5cdGlmIChpcGNPdXRwdXQubGVuZ3RoICE9PSBtYXhCdWZmZXIpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBlcnJvciA9IG5ldyBNYXhCdWZmZXJFcnJvcigpO1xuXHRlcnJvci5tYXhCdWZmZXJJbmZvID0ge2ZkTnVtYmVyOiAnaXBjJ307XG5cdHRocm93IGVycm9yO1xufTtcblxuLy8gRXJyb3IgbWVzc2FnZSB3aGVuIGBtYXhCdWZmZXJgIGlzIGhpdFxuZXhwb3J0IGNvbnN0IGdldE1heEJ1ZmZlck1lc3NhZ2UgPSAoZXJyb3IsIG1heEJ1ZmZlcikgPT4ge1xuXHRjb25zdCB7c3RyZWFtTmFtZSwgdGhyZXNob2xkLCB1bml0fSA9IGdldE1heEJ1ZmZlckluZm8oZXJyb3IsIG1heEJ1ZmZlcik7XG5cdHJldHVybiBgQ29tbWFuZCdzICR7c3RyZWFtTmFtZX0gd2FzIGxhcmdlciB0aGFuICR7dGhyZXNob2xkfSAke3VuaXR9YDtcbn07XG5cbmNvbnN0IGdldE1heEJ1ZmZlckluZm8gPSAoZXJyb3IsIG1heEJ1ZmZlcikgPT4ge1xuXHRpZiAoZXJyb3I/Lm1heEJ1ZmZlckluZm8gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB7c3RyZWFtTmFtZTogJ291dHB1dCcsIHRocmVzaG9sZDogbWF4QnVmZmVyWzFdLCB1bml0OiAnYnl0ZXMnfTtcblx0fVxuXG5cdGNvbnN0IHttYXhCdWZmZXJJbmZvOiB7ZmROdW1iZXIsIHVuaXR9fSA9IGVycm9yO1xuXHRkZWxldGUgZXJyb3IubWF4QnVmZmVySW5mbztcblxuXHRjb25zdCB0aHJlc2hvbGQgPSBnZXRGZFNwZWNpZmljVmFsdWUobWF4QnVmZmVyLCBmZE51bWJlcik7XG5cdGlmIChmZE51bWJlciA9PT0gJ2lwYycpIHtcblx0XHRyZXR1cm4ge3N0cmVhbU5hbWU6ICdJUEMgb3V0cHV0JywgdGhyZXNob2xkLCB1bml0OiAnbWVzc2FnZXMnfTtcblx0fVxuXG5cdHJldHVybiB7c3RyZWFtTmFtZTogZ2V0U3RyZWFtTmFtZShmZE51bWJlciksIHRocmVzaG9sZCwgdW5pdH07XG59O1xuXG4vLyBUaGUgb25seSB3YXkgdG8gYXBwbHkgYG1heEJ1ZmZlcmAgd2l0aCBgc3Bhd25TeW5jKClgIGlzIHRvIHVzZSB0aGUgbmF0aXZlIGBtYXhCdWZmZXJgIG9wdGlvbiBOb2RlLmpzIHByb3ZpZGVzLlxuLy8gSG93ZXZlciwgdGhpcyBoYXMgbXVsdGlwbGUgbGltaXRhdGlvbnMsIGFuZCBjYW5ub3QgYmVoYXZlIHRoZSBleGFjdCBzYW1lIHdheSBhcyB0aGUgYXN5bmMgYmVoYXZpb3IuXG4vLyBXaGVuIHRoZSBgbWF4QnVmZmVyYCBpcyBoaXQsIGEgYEVOT0JVRlNgIGVycm9yIGlzIHRocm93bi5cbmV4cG9ydCBjb25zdCBpc01heEJ1ZmZlclN5bmMgPSAocmVzdWx0RXJyb3IsIG91dHB1dCwgbWF4QnVmZmVyKSA9PiByZXN1bHRFcnJvcj8uY29kZSA9PT0gJ0VOT0JVRlMnXG5cdCYmIG91dHB1dCAhPT0gbnVsbFxuXHQmJiBvdXRwdXQuc29tZShyZXN1bHQgPT4gcmVzdWx0ICE9PSBudWxsICYmIHJlc3VsdC5sZW5ndGggPiBnZXRNYXhCdWZmZXJTeW5jKG1heEJ1ZmZlcikpO1xuXG4vLyBXaGVuIGBtYXhCdWZmZXJgIGlzIGhpdCwgZW5zdXJlIHRoZSByZXN1bHQgaXMgdHJ1bmNhdGVkXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVNYXhCdWZmZXJTeW5jID0gKHJlc3VsdCwgaXNNYXhCdWZmZXIsIG1heEJ1ZmZlcikgPT4ge1xuXHRpZiAoIWlzTWF4QnVmZmVyKSB7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGNvbnN0IG1heEJ1ZmZlclZhbHVlID0gZ2V0TWF4QnVmZmVyU3luYyhtYXhCdWZmZXIpO1xuXHRyZXR1cm4gcmVzdWx0Lmxlbmd0aCA+IG1heEJ1ZmZlclZhbHVlID8gcmVzdWx0LnNsaWNlKDAsIG1heEJ1ZmZlclZhbHVlKSA6IHJlc3VsdDtcbn07XG5cbi8vIGBzcGF3blN5bmMoKWAgZG9lcyBub3QgYWxsb3cgZGlmZmVyZW50aWF0aW5nIGBtYXhCdWZmZXJgIHBlciBmaWxlIGRlc2NyaXB0b3IsIHNvIHdlIGFsd2F5cyB1c2UgYHN0ZG91dGBcbmV4cG9ydCBjb25zdCBnZXRNYXhCdWZmZXJTeW5jID0gKFssIHN0ZG91dE1heEJ1ZmZlcl0pID0+IHN0ZG91dE1heEJ1ZmZlcjtcbiIsICJpbXBvcnQge2luc3BlY3R9IGZyb20gJ25vZGU6dXRpbCc7XG5pbXBvcnQgc3RyaXBGaW5hbE5ld2xpbmUgZnJvbSAnc3RyaXAtZmluYWwtbmV3bGluZSc7XG5pbXBvcnQge2lzVWludDhBcnJheSwgdWludDhBcnJheVRvU3RyaW5nfSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcbmltcG9ydCB7Zml4Q3dkRXJyb3J9IGZyb20gJy4uL2FyZ3VtZW50cy9jd2QuanMnO1xuaW1wb3J0IHtlc2NhcGVMaW5lc30gZnJvbSAnLi4vYXJndW1lbnRzL2VzY2FwZS5qcyc7XG5pbXBvcnQge2dldE1heEJ1ZmZlck1lc3NhZ2V9IGZyb20gJy4uL2lvL21heC1idWZmZXIuanMnO1xuaW1wb3J0IHtnZXRTaWduYWxEZXNjcmlwdGlvbn0gZnJvbSAnLi4vdGVybWluYXRlL3NpZ25hbC5qcyc7XG5pbXBvcnQge0Rpc2NhcmRlZEVycm9yLCBpc0V4ZWNhRXJyb3J9IGZyb20gJy4vZmluYWwtZXJyb3IuanMnO1xuXG4vLyBDb21wdXRlcyBgZXJyb3IubWVzc2FnZWAsIGBlcnJvci5zaG9ydE1lc3NhZ2VgIGFuZCBgZXJyb3Iub3JpZ2luYWxNZXNzYWdlYFxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lc3NhZ2VzID0gKHtcblx0c3RkaW8sXG5cdGFsbCxcblx0aXBjT3V0cHV0LFxuXHRvcmlnaW5hbEVycm9yLFxuXHRzaWduYWwsXG5cdHNpZ25hbERlc2NyaXB0aW9uLFxuXHRleGl0Q29kZSxcblx0ZXNjYXBlZENvbW1hbmQsXG5cdHRpbWVkT3V0LFxuXHRpc0NhbmNlbGVkLFxuXHRpc0dyYWNlZnVsbHlDYW5jZWxlZCxcblx0aXNNYXhCdWZmZXIsXG5cdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQsXG5cdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdGtpbGxTaWduYWwsXG5cdG1heEJ1ZmZlcixcblx0dGltZW91dCxcblx0Y3dkLFxufSkgPT4ge1xuXHRjb25zdCBlcnJvckNvZGUgPSBvcmlnaW5hbEVycm9yPy5jb2RlO1xuXHRjb25zdCBwcmVmaXggPSBnZXRFcnJvclByZWZpeCh7XG5cdFx0b3JpZ2luYWxFcnJvcixcblx0XHR0aW1lZE91dCxcblx0XHR0aW1lb3V0LFxuXHRcdGlzTWF4QnVmZmVyLFxuXHRcdG1heEJ1ZmZlcixcblx0XHRlcnJvckNvZGUsXG5cdFx0c2lnbmFsLFxuXHRcdHNpZ25hbERlc2NyaXB0aW9uLFxuXHRcdGV4aXRDb2RlLFxuXHRcdGlzQ2FuY2VsZWQsXG5cdFx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQsXG5cdFx0aXNGb3JjZWZ1bGx5VGVybWluYXRlZCxcblx0XHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRcdGtpbGxTaWduYWwsXG5cdH0pO1xuXHRjb25zdCBvcmlnaW5hbE1lc3NhZ2UgPSBnZXRPcmlnaW5hbE1lc3NhZ2Uob3JpZ2luYWxFcnJvciwgY3dkKTtcblx0Y29uc3Qgc3VmZml4ID0gb3JpZ2luYWxNZXNzYWdlID09PSB1bmRlZmluZWQgPyAnJyA6IGBcXG4ke29yaWdpbmFsTWVzc2FnZX1gO1xuXHRjb25zdCBzaG9ydE1lc3NhZ2UgPSBgJHtwcmVmaXh9OiAke2VzY2FwZWRDb21tYW5kfSR7c3VmZml4fWA7XG5cdGNvbnN0IG1lc3NhZ2VTdGRpbyA9IGFsbCA9PT0gdW5kZWZpbmVkID8gW3N0ZGlvWzJdLCBzdGRpb1sxXV0gOiBbYWxsXTtcblx0Y29uc3QgbWVzc2FnZSA9IFtcblx0XHRzaG9ydE1lc3NhZ2UsXG5cdFx0Li4ubWVzc2FnZVN0ZGlvLFxuXHRcdC4uLnN0ZGlvLnNsaWNlKDMpLFxuXHRcdGlwY091dHB1dC5tYXAoaXBjTWVzc2FnZSA9PiBzZXJpYWxpemVJcGNNZXNzYWdlKGlwY01lc3NhZ2UpKS5qb2luKCdcXG4nKSxcblx0XVxuXHRcdC5tYXAobWVzc2FnZVBhcnQgPT4gZXNjYXBlTGluZXMoc3RyaXBGaW5hbE5ld2xpbmUoc2VyaWFsaXplTWVzc2FnZVBhcnQobWVzc2FnZVBhcnQpKSkpXG5cdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdC5qb2luKCdcXG5cXG4nKTtcblx0cmV0dXJuIHtvcmlnaW5hbE1lc3NhZ2UsIHNob3J0TWVzc2FnZSwgbWVzc2FnZX07XG59O1xuXG5jb25zdCBnZXRFcnJvclByZWZpeCA9ICh7XG5cdG9yaWdpbmFsRXJyb3IsXG5cdHRpbWVkT3V0LFxuXHR0aW1lb3V0LFxuXHRpc01heEJ1ZmZlcixcblx0bWF4QnVmZmVyLFxuXHRlcnJvckNvZGUsXG5cdHNpZ25hbCxcblx0c2lnbmFsRGVzY3JpcHRpb24sXG5cdGV4aXRDb2RlLFxuXHRpc0NhbmNlbGVkLFxuXHRpc0dyYWNlZnVsbHlDYW5jZWxlZCxcblx0aXNGb3JjZWZ1bGx5VGVybWluYXRlZCxcblx0Zm9yY2VLaWxsQWZ0ZXJEZWxheSxcblx0a2lsbFNpZ25hbCxcbn0pID0+IHtcblx0Y29uc3QgZm9yY2VmdWxTdWZmaXggPSBnZXRGb3JjZWZ1bFN1ZmZpeChpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkLCBmb3JjZUtpbGxBZnRlckRlbGF5KTtcblxuXHRpZiAodGltZWRPdXQpIHtcblx0XHRyZXR1cm4gYENvbW1hbmQgdGltZWQgb3V0IGFmdGVyICR7dGltZW91dH0gbWlsbGlzZWNvbmRzJHtmb3JjZWZ1bFN1ZmZpeH1gO1xuXHR9XG5cblx0aWYgKGlzR3JhY2VmdWxseUNhbmNlbGVkKSB7XG5cdFx0aWYgKHNpZ25hbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gYENvbW1hbmQgd2FzIGdyYWNlZnVsbHkgY2FuY2VsZWQgd2l0aCBleGl0IGNvZGUgJHtleGl0Q29kZX1gO1xuXHRcdH1cblxuXHRcdHJldHVybiBpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkXG5cdFx0XHQ/IGBDb21tYW5kIHdhcyBncmFjZWZ1bGx5IGNhbmNlbGVkJHtmb3JjZWZ1bFN1ZmZpeH1gXG5cdFx0XHQ6IGBDb21tYW5kIHdhcyBncmFjZWZ1bGx5IGNhbmNlbGVkIHdpdGggJHtzaWduYWx9ICgke3NpZ25hbERlc2NyaXB0aW9ufSlgO1xuXHR9XG5cblx0aWYgKGlzQ2FuY2VsZWQpIHtcblx0XHRyZXR1cm4gYENvbW1hbmQgd2FzIGNhbmNlbGVkJHtmb3JjZWZ1bFN1ZmZpeH1gO1xuXHR9XG5cblx0aWYgKGlzTWF4QnVmZmVyKSB7XG5cdFx0cmV0dXJuIGAke2dldE1heEJ1ZmZlck1lc3NhZ2Uob3JpZ2luYWxFcnJvciwgbWF4QnVmZmVyKX0ke2ZvcmNlZnVsU3VmZml4fWA7XG5cdH1cblxuXHRpZiAoZXJyb3JDb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gYENvbW1hbmQgZmFpbGVkIHdpdGggJHtlcnJvckNvZGV9JHtmb3JjZWZ1bFN1ZmZpeH1gO1xuXHR9XG5cblx0aWYgKGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQpIHtcblx0XHRyZXR1cm4gYENvbW1hbmQgd2FzIGtpbGxlZCB3aXRoICR7a2lsbFNpZ25hbH0gKCR7Z2V0U2lnbmFsRGVzY3JpcHRpb24oa2lsbFNpZ25hbCl9KSR7Zm9yY2VmdWxTdWZmaXh9YDtcblx0fVxuXG5cdGlmIChzaWduYWwgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBgQ29tbWFuZCB3YXMga2lsbGVkIHdpdGggJHtzaWduYWx9ICgke3NpZ25hbERlc2NyaXB0aW9ufSlgO1xuXHR9XG5cblx0aWYgKGV4aXRDb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gYENvbW1hbmQgZmFpbGVkIHdpdGggZXhpdCBjb2RlICR7ZXhpdENvZGV9YDtcblx0fVxuXG5cdHJldHVybiAnQ29tbWFuZCBmYWlsZWQnO1xufTtcblxuY29uc3QgZ2V0Rm9yY2VmdWxTdWZmaXggPSAoaXNGb3JjZWZ1bGx5VGVybWluYXRlZCwgZm9yY2VLaWxsQWZ0ZXJEZWxheSkgPT4gaXNGb3JjZWZ1bGx5VGVybWluYXRlZFxuXHQ/IGAgYW5kIHdhcyBmb3JjZWZ1bGx5IHRlcm1pbmF0ZWQgYWZ0ZXIgJHtmb3JjZUtpbGxBZnRlckRlbGF5fSBtaWxsaXNlY29uZHNgXG5cdDogJyc7XG5cbmNvbnN0IGdldE9yaWdpbmFsTWVzc2FnZSA9IChvcmlnaW5hbEVycm9yLCBjd2QpID0+IHtcblx0aWYgKG9yaWdpbmFsRXJyb3IgaW5zdGFuY2VvZiBEaXNjYXJkZWRFcnJvcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9yaWdpbmFsTWVzc2FnZSA9IGlzRXhlY2FFcnJvcihvcmlnaW5hbEVycm9yKVxuXHRcdD8gb3JpZ2luYWxFcnJvci5vcmlnaW5hbE1lc3NhZ2Vcblx0XHQ6IFN0cmluZyhvcmlnaW5hbEVycm9yPy5tZXNzYWdlID8/IG9yaWdpbmFsRXJyb3IpO1xuXHRjb25zdCBlc2NhcGVkT3JpZ2luYWxNZXNzYWdlID0gZXNjYXBlTGluZXMoZml4Q3dkRXJyb3Iob3JpZ2luYWxNZXNzYWdlLCBjd2QpKTtcblx0cmV0dXJuIGVzY2FwZWRPcmlnaW5hbE1lc3NhZ2UgPT09ICcnID8gdW5kZWZpbmVkIDogZXNjYXBlZE9yaWdpbmFsTWVzc2FnZTtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUlwY01lc3NhZ2UgPSBpcGNNZXNzYWdlID0+IHR5cGVvZiBpcGNNZXNzYWdlID09PSAnc3RyaW5nJ1xuXHQ/IGlwY01lc3NhZ2Vcblx0OiBpbnNwZWN0KGlwY01lc3NhZ2UpO1xuXG5jb25zdCBzZXJpYWxpemVNZXNzYWdlUGFydCA9IG1lc3NhZ2VQYXJ0ID0+IEFycmF5LmlzQXJyYXkobWVzc2FnZVBhcnQpXG5cdD8gbWVzc2FnZVBhcnQubWFwKG1lc3NhZ2VJdGVtID0+IHN0cmlwRmluYWxOZXdsaW5lKHNlcmlhbGl6ZU1lc3NhZ2VJdGVtKG1lc3NhZ2VJdGVtKSkpLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuXHQ6IHNlcmlhbGl6ZU1lc3NhZ2VJdGVtKG1lc3NhZ2VQYXJ0KTtcblxuY29uc3Qgc2VyaWFsaXplTWVzc2FnZUl0ZW0gPSBtZXNzYWdlSXRlbSA9PiB7XG5cdGlmICh0eXBlb2YgbWVzc2FnZUl0ZW0gPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2VJdGVtO1xuXHR9XG5cblx0aWYgKGlzVWludDhBcnJheShtZXNzYWdlSXRlbSkpIHtcblx0XHRyZXR1cm4gdWludDhBcnJheVRvU3RyaW5nKG1lc3NhZ2VJdGVtKTtcblx0fVxuXG5cdHJldHVybiAnJztcbn07XG4iLCAiaW1wb3J0IHtnZXRTaWduYWxEZXNjcmlwdGlvbn0gZnJvbSAnLi4vdGVybWluYXRlL3NpZ25hbC5qcyc7XG5pbXBvcnQge2dldER1cmF0aW9uTXN9IGZyb20gJy4vZHVyYXRpb24uanMnO1xuaW1wb3J0IHtnZXRGaW5hbEVycm9yfSBmcm9tICcuL2ZpbmFsLWVycm9yLmpzJztcbmltcG9ydCB7Y3JlYXRlTWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZS5qcyc7XG5cbi8vIE9iamVjdCByZXR1cm5lZCBvbiBzdWJwcm9jZXNzIHN1Y2Nlc3NcbmV4cG9ydCBjb25zdCBtYWtlU3VjY2Vzc1Jlc3VsdCA9ICh7XG5cdGNvbW1hbmQsXG5cdGVzY2FwZWRDb21tYW5kLFxuXHRzdGRpbyxcblx0YWxsLFxuXHRpcGNPdXRwdXQsXG5cdG9wdGlvbnM6IHtjd2R9LFxuXHRzdGFydFRpbWUsXG59KSA9PiBvbWl0VW5kZWZpbmVkUHJvcGVydGllcyh7XG5cdGNvbW1hbmQsXG5cdGVzY2FwZWRDb21tYW5kLFxuXHRjd2QsXG5cdGR1cmF0aW9uTXM6IGdldER1cmF0aW9uTXMoc3RhcnRUaW1lKSxcblx0ZmFpbGVkOiBmYWxzZSxcblx0dGltZWRPdXQ6IGZhbHNlLFxuXHRpc0NhbmNlbGVkOiBmYWxzZSxcblx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQ6IGZhbHNlLFxuXHRpc1Rlcm1pbmF0ZWQ6IGZhbHNlLFxuXHRpc01heEJ1ZmZlcjogZmFsc2UsXG5cdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQ6IGZhbHNlLFxuXHRleGl0Q29kZTogMCxcblx0c3Rkb3V0OiBzdGRpb1sxXSxcblx0c3RkZXJyOiBzdGRpb1syXSxcblx0YWxsLFxuXHRzdGRpbyxcblx0aXBjT3V0cHV0LFxuXHRwaXBlZEZyb206IFtdLFxufSk7XG5cbi8vIE9iamVjdCByZXR1cm5lZCBvbiBzdWJwcm9jZXNzIGZhaWx1cmUgYmVmb3JlIHNwYXduaW5nXG5leHBvcnQgY29uc3QgbWFrZUVhcmx5RXJyb3IgPSAoe1xuXHRlcnJvcixcblx0Y29tbWFuZCxcblx0ZXNjYXBlZENvbW1hbmQsXG5cdGZpbGVEZXNjcmlwdG9ycyxcblx0b3B0aW9ucyxcblx0c3RhcnRUaW1lLFxuXHRpc1N5bmMsXG59KSA9PiBtYWtlRXJyb3Ioe1xuXHRlcnJvcixcblx0Y29tbWFuZCxcblx0ZXNjYXBlZENvbW1hbmQsXG5cdHN0YXJ0VGltZSxcblx0dGltZWRPdXQ6IGZhbHNlLFxuXHRpc0NhbmNlbGVkOiBmYWxzZSxcblx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQ6IGZhbHNlLFxuXHRpc01heEJ1ZmZlcjogZmFsc2UsXG5cdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQ6IGZhbHNlLFxuXHRzdGRpbzogQXJyYXkuZnJvbSh7bGVuZ3RoOiBmaWxlRGVzY3JpcHRvcnMubGVuZ3RofSksXG5cdGlwY091dHB1dDogW10sXG5cdG9wdGlvbnMsXG5cdGlzU3luYyxcbn0pO1xuXG4vLyBPYmplY3QgcmV0dXJuZWQgb24gc3VicHJvY2VzcyBmYWlsdXJlXG5leHBvcnQgY29uc3QgbWFrZUVycm9yID0gKHtcblx0ZXJyb3I6IG9yaWdpbmFsRXJyb3IsXG5cdGNvbW1hbmQsXG5cdGVzY2FwZWRDb21tYW5kLFxuXHRzdGFydFRpbWUsXG5cdHRpbWVkT3V0LFxuXHRpc0NhbmNlbGVkLFxuXHRpc0dyYWNlZnVsbHlDYW5jZWxlZCxcblx0aXNNYXhCdWZmZXIsXG5cdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQsXG5cdGV4aXRDb2RlOiByYXdFeGl0Q29kZSxcblx0c2lnbmFsOiByYXdTaWduYWwsXG5cdHN0ZGlvLFxuXHRhbGwsXG5cdGlwY091dHB1dCxcblx0b3B0aW9uczoge1xuXHRcdHRpbWVvdXREdXJhdGlvbixcblx0XHR0aW1lb3V0ID0gdGltZW91dER1cmF0aW9uLFxuXHRcdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdFx0a2lsbFNpZ25hbCxcblx0XHRjd2QsXG5cdFx0bWF4QnVmZmVyLFxuXHR9LFxuXHRpc1N5bmMsXG59KSA9PiB7XG5cdGNvbnN0IHtleGl0Q29kZSwgc2lnbmFsLCBzaWduYWxEZXNjcmlwdGlvbn0gPSBub3JtYWxpemVFeGl0UGF5bG9hZChyYXdFeGl0Q29kZSwgcmF3U2lnbmFsKTtcblx0Y29uc3Qge29yaWdpbmFsTWVzc2FnZSwgc2hvcnRNZXNzYWdlLCBtZXNzYWdlfSA9IGNyZWF0ZU1lc3NhZ2VzKHtcblx0XHRzdGRpbyxcblx0XHRhbGwsXG5cdFx0aXBjT3V0cHV0LFxuXHRcdG9yaWdpbmFsRXJyb3IsXG5cdFx0c2lnbmFsLFxuXHRcdHNpZ25hbERlc2NyaXB0aW9uLFxuXHRcdGV4aXRDb2RlLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdHRpbWVkT3V0LFxuXHRcdGlzQ2FuY2VsZWQsXG5cdFx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQsXG5cdFx0aXNNYXhCdWZmZXIsXG5cdFx0aXNGb3JjZWZ1bGx5VGVybWluYXRlZCxcblx0XHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRcdGtpbGxTaWduYWwsXG5cdFx0bWF4QnVmZmVyLFxuXHRcdHRpbWVvdXQsXG5cdFx0Y3dkLFxuXHR9KTtcblx0Y29uc3QgZXJyb3IgPSBnZXRGaW5hbEVycm9yKG9yaWdpbmFsRXJyb3IsIG1lc3NhZ2UsIGlzU3luYyk7XG5cdE9iamVjdC5hc3NpZ24oZXJyb3IsIGdldEVycm9yUHJvcGVydGllcyh7XG5cdFx0ZXJyb3IsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRzdGFydFRpbWUsXG5cdFx0dGltZWRPdXQsXG5cdFx0aXNDYW5jZWxlZCxcblx0XHRpc0dyYWNlZnVsbHlDYW5jZWxlZCxcblx0XHRpc01heEJ1ZmZlcixcblx0XHRpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkLFxuXHRcdGV4aXRDb2RlLFxuXHRcdHNpZ25hbCxcblx0XHRzaWduYWxEZXNjcmlwdGlvbixcblx0XHRzdGRpbyxcblx0XHRhbGwsXG5cdFx0aXBjT3V0cHV0LFxuXHRcdGN3ZCxcblx0XHRvcmlnaW5hbE1lc3NhZ2UsXG5cdFx0c2hvcnRNZXNzYWdlLFxuXHR9KSk7XG5cdHJldHVybiBlcnJvcjtcbn07XG5cbmNvbnN0IGdldEVycm9yUHJvcGVydGllcyA9ICh7XG5cdGVycm9yLFxuXHRjb21tYW5kLFxuXHRlc2NhcGVkQ29tbWFuZCxcblx0c3RhcnRUaW1lLFxuXHR0aW1lZE91dCxcblx0aXNDYW5jZWxlZCxcblx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQsXG5cdGlzTWF4QnVmZmVyLFxuXHRpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkLFxuXHRleGl0Q29kZSxcblx0c2lnbmFsLFxuXHRzaWduYWxEZXNjcmlwdGlvbixcblx0c3RkaW8sXG5cdGFsbCxcblx0aXBjT3V0cHV0LFxuXHRjd2QsXG5cdG9yaWdpbmFsTWVzc2FnZSxcblx0c2hvcnRNZXNzYWdlLFxufSkgPT4gb21pdFVuZGVmaW5lZFByb3BlcnRpZXMoe1xuXHRzaG9ydE1lc3NhZ2UsXG5cdG9yaWdpbmFsTWVzc2FnZSxcblx0Y29tbWFuZCxcblx0ZXNjYXBlZENvbW1hbmQsXG5cdGN3ZCxcblx0ZHVyYXRpb25NczogZ2V0RHVyYXRpb25NcyhzdGFydFRpbWUpLFxuXHRmYWlsZWQ6IHRydWUsXG5cdHRpbWVkT3V0LFxuXHRpc0NhbmNlbGVkLFxuXHRpc0dyYWNlZnVsbHlDYW5jZWxlZCxcblx0aXNUZXJtaW5hdGVkOiBzaWduYWwgIT09IHVuZGVmaW5lZCxcblx0aXNNYXhCdWZmZXIsXG5cdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQsXG5cdGV4aXRDb2RlLFxuXHRzaWduYWwsXG5cdHNpZ25hbERlc2NyaXB0aW9uLFxuXHRjb2RlOiBlcnJvci5jYXVzZT8uY29kZSxcblx0c3Rkb3V0OiBzdGRpb1sxXSxcblx0c3RkZXJyOiBzdGRpb1syXSxcblx0YWxsLFxuXHRzdGRpbyxcblx0aXBjT3V0cHV0LFxuXHRwaXBlZEZyb206IFtdLFxufSk7XG5cbmNvbnN0IG9taXRVbmRlZmluZWRQcm9wZXJ0aWVzID0gcmVzdWx0ID0+IE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhyZXN1bHQpLmZpbHRlcigoWywgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSk7XG5cbi8vIGBzaWduYWxgIGFuZCBgZXhpdENvZGVgIGVtaXR0ZWQgb24gYHN1YnByb2Nlc3Mub24oJ2V4aXQnKWAgZXZlbnQgY2FuIGJlIGBudWxsYC5cbi8vIFdlIG5vcm1hbGl6ZSB0aGVtIHRvIGB1bmRlZmluZWRgXG5jb25zdCBub3JtYWxpemVFeGl0UGF5bG9hZCA9IChyYXdFeGl0Q29kZSwgcmF3U2lnbmFsKSA9PiB7XG5cdGNvbnN0IGV4aXRDb2RlID0gcmF3RXhpdENvZGUgPT09IG51bGwgPyB1bmRlZmluZWQgOiByYXdFeGl0Q29kZTtcblx0Y29uc3Qgc2lnbmFsID0gcmF3U2lnbmFsID09PSBudWxsID8gdW5kZWZpbmVkIDogcmF3U2lnbmFsO1xuXHRjb25zdCBzaWduYWxEZXNjcmlwdGlvbiA9IHNpZ25hbCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0U2lnbmFsRGVzY3JpcHRpb24ocmF3U2lnbmFsKTtcblx0cmV0dXJuIHtleGl0Q29kZSwgc2lnbmFsLCBzaWduYWxEZXNjcmlwdGlvbn07XG59O1xuIiwgImNvbnN0IHRvWmVyb0lmSW5maW5pdHkgPSB2YWx1ZSA9PiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgOiAwO1xuXG5mdW5jdGlvbiBwYXJzZU51bWJlcihtaWxsaXNlY29uZHMpIHtcblx0cmV0dXJuIHtcblx0XHRkYXlzOiBNYXRoLnRydW5jKG1pbGxpc2Vjb25kcyAvIDg2XzQwMF8wMDApLFxuXHRcdGhvdXJzOiBNYXRoLnRydW5jKG1pbGxpc2Vjb25kcyAvIDNfNjAwXzAwMCAlIDI0KSxcblx0XHRtaW51dGVzOiBNYXRoLnRydW5jKG1pbGxpc2Vjb25kcyAvIDYwXzAwMCAlIDYwKSxcblx0XHRzZWNvbmRzOiBNYXRoLnRydW5jKG1pbGxpc2Vjb25kcyAvIDEwMDAgJSA2MCksXG5cdFx0bWlsbGlzZWNvbmRzOiBNYXRoLnRydW5jKG1pbGxpc2Vjb25kcyAlIDEwMDApLFxuXHRcdG1pY3Jvc2Vjb25kczogTWF0aC50cnVuYyh0b1plcm9JZkluZmluaXR5KG1pbGxpc2Vjb25kcyAqIDEwMDApICUgMTAwMCksXG5cdFx0bmFub3NlY29uZHM6IE1hdGgudHJ1bmModG9aZXJvSWZJbmZpbml0eShtaWxsaXNlY29uZHMgKiAxZTYpICUgMTAwMCksXG5cdH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlQmlnaW50KG1pbGxpc2Vjb25kcykge1xuXHRyZXR1cm4ge1xuXHRcdGRheXM6IG1pbGxpc2Vjb25kcyAvIDg2XzQwMF8wMDBuLFxuXHRcdGhvdXJzOiBtaWxsaXNlY29uZHMgLyAzXzYwMF8wMDBuICUgMjRuLFxuXHRcdG1pbnV0ZXM6IG1pbGxpc2Vjb25kcyAvIDYwXzAwMG4gJSA2MG4sXG5cdFx0c2Vjb25kczogbWlsbGlzZWNvbmRzIC8gMTAwMG4gJSA2MG4sXG5cdFx0bWlsbGlzZWNvbmRzOiBtaWxsaXNlY29uZHMgJSAxMDAwbixcblx0XHRtaWNyb3NlY29uZHM6IDBuLFxuXHRcdG5hbm9zZWNvbmRzOiAwbixcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VNaWxsaXNlY29uZHMobWlsbGlzZWNvbmRzKSB7XG5cdHN3aXRjaCAodHlwZW9mIG1pbGxpc2Vjb25kcykge1xuXHRcdGNhc2UgJ251bWJlcic6IHtcblx0XHRcdGlmIChOdW1iZXIuaXNGaW5pdGUobWlsbGlzZWNvbmRzKSkge1xuXHRcdFx0XHRyZXR1cm4gcGFyc2VOdW1iZXIobWlsbGlzZWNvbmRzKTtcblx0XHRcdH1cblxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnYmlnaW50Jzoge1xuXHRcdFx0cmV0dXJuIHBhcnNlQmlnaW50KG1pbGxpc2Vjb25kcyk7XG5cdFx0fVxuXG5cdFx0Ly8gTm8gZGVmYXVsdFxuXHR9XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBmaW5pdGUgbnVtYmVyIG9yIGJpZ2ludCcpO1xufVxuIiwgImltcG9ydCBwYXJzZU1pbGxpc2Vjb25kcyBmcm9tICdwYXJzZS1tcyc7XG5cbmNvbnN0IGlzWmVybyA9IHZhbHVlID0+IHZhbHVlID09PSAwIHx8IHZhbHVlID09PSAwbjtcbmNvbnN0IHBsdXJhbGl6ZSA9ICh3b3JkLCBjb3VudCkgPT4gKGNvdW50ID09PSAxIHx8IGNvdW50ID09PSAxbikgPyB3b3JkIDogYCR7d29yZH1zYDtcblxuY29uc3QgU0VDT05EX1JPVU5ESU5HX0VQU0lMT04gPSAwLjAwMF8wMDBfMTtcbmNvbnN0IE9ORV9EQVlfSU5fTUlMTElTRUNPTkRTID0gMjRuICogNjBuICogNjBuICogMTAwMG47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXR0eU1pbGxpc2Vjb25kcyhtaWxsaXNlY29uZHMsIG9wdGlvbnMpIHtcblx0Y29uc3QgaXNCaWdJbnQgPSB0eXBlb2YgbWlsbGlzZWNvbmRzID09PSAnYmlnaW50Jztcblx0aWYgKCFpc0JpZ0ludCAmJiAhTnVtYmVyLmlzRmluaXRlKG1pbGxpc2Vjb25kcykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIGZpbml0ZSBudW1iZXIgb3IgYmlnaW50Jyk7XG5cdH1cblxuXHRvcHRpb25zID0gey4uLm9wdGlvbnN9O1xuXG5cdGNvbnN0IHNpZ24gPSBtaWxsaXNlY29uZHMgPCAwID8gJy0nIDogJyc7XG5cdG1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcyA8IDAgPyAtbWlsbGlzZWNvbmRzIDogbWlsbGlzZWNvbmRzOyAvLyBDYW5ub3QgdXNlIGBNYXRoLmFicygpYCBiZWNhdXNlIG9mIEJpZ0ludCBzdXBwb3J0LlxuXG5cdGlmIChvcHRpb25zLmNvbG9uTm90YXRpb24pIHtcblx0XHRvcHRpb25zLmNvbXBhY3QgPSBmYWxzZTtcblx0XHRvcHRpb25zLmZvcm1hdFN1Yk1pbGxpc2Vjb25kcyA9IGZhbHNlO1xuXHRcdG9wdGlvbnMuc2VwYXJhdGVNaWxsaXNlY29uZHMgPSBmYWxzZTtcblx0XHRvcHRpb25zLnZlcmJvc2UgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChvcHRpb25zLmNvbXBhY3QpIHtcblx0XHRvcHRpb25zLnVuaXRDb3VudCA9IDE7XG5cdFx0b3B0aW9ucy5zZWNvbmRzRGVjaW1hbERpZ2l0cyA9IDA7XG5cdFx0b3B0aW9ucy5taWxsaXNlY29uZHNEZWNpbWFsRGlnaXRzID0gMDtcblx0fVxuXG5cdGxldCByZXN1bHQgPSBbXTtcblxuXHRjb25zdCBmbG9vckRlY2ltYWxzID0gKHZhbHVlLCBkZWNpbWFsRGlnaXRzKSA9PiB7XG5cdFx0Y29uc3QgZmxvb3JlZEludGVyaW1WYWx1ZSA9IE1hdGguZmxvb3IoKHZhbHVlICogKDEwICoqIGRlY2ltYWxEaWdpdHMpKSArIFNFQ09ORF9ST1VORElOR19FUFNJTE9OKTtcblx0XHRjb25zdCBmbG9vcmVkVmFsdWUgPSBNYXRoLnJvdW5kKGZsb29yZWRJbnRlcmltVmFsdWUpIC8gKDEwICoqIGRlY2ltYWxEaWdpdHMpO1xuXHRcdHJldHVybiBmbG9vcmVkVmFsdWUudG9GaXhlZChkZWNpbWFsRGlnaXRzKTtcblx0fTtcblxuXHRjb25zdCBhZGQgPSAodmFsdWUsIGxvbmcsIHNob3J0LCB2YWx1ZVN0cmluZykgPT4ge1xuXHRcdGlmIChcblx0XHRcdChyZXN1bHQubGVuZ3RoID09PSAwIHx8ICFvcHRpb25zLmNvbG9uTm90YXRpb24pXG5cdFx0XHQmJiBpc1plcm8odmFsdWUpXG5cdFx0XHQmJiAhKG9wdGlvbnMuY29sb25Ob3RhdGlvbiAmJiBzaG9ydCA9PT0gJ20nKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhbHVlU3RyaW5nID8/PSBTdHJpbmcodmFsdWUpO1xuXHRcdGlmIChvcHRpb25zLmNvbG9uTm90YXRpb24pIHtcblx0XHRcdGNvbnN0IHdob2xlRGlnaXRzID0gdmFsdWVTdHJpbmcuaW5jbHVkZXMoJy4nKSA/IHZhbHVlU3RyaW5nLnNwbGl0KCcuJylbMF0ubGVuZ3RoIDogdmFsdWVTdHJpbmcubGVuZ3RoO1xuXHRcdFx0Y29uc3QgbWluTGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCA+IDAgPyAyIDogMTtcblx0XHRcdHZhbHVlU3RyaW5nID0gJzAnLnJlcGVhdChNYXRoLm1heCgwLCBtaW5MZW5ndGggLSB3aG9sZURpZ2l0cykpICsgdmFsdWVTdHJpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlU3RyaW5nICs9IG9wdGlvbnMudmVyYm9zZSA/ICcgJyArIHBsdXJhbGl6ZShsb25nLCB2YWx1ZSkgOiBzaG9ydDtcblx0XHR9XG5cblx0XHRyZXN1bHQucHVzaCh2YWx1ZVN0cmluZyk7XG5cdH07XG5cblx0Y29uc3QgcGFyc2VkID0gcGFyc2VNaWxsaXNlY29uZHMobWlsbGlzZWNvbmRzKTtcblx0Y29uc3QgZGF5cyA9IEJpZ0ludChwYXJzZWQuZGF5cyk7XG5cblx0aWYgKG9wdGlvbnMuaGlkZVllYXJBbmREYXlzKSB7XG5cdFx0YWRkKChCaWdJbnQoZGF5cykgKiAyNG4pICsgQmlnSW50KHBhcnNlZC5ob3VycyksICdob3VyJywgJ2gnKTtcblx0fSBlbHNlIHtcblx0XHRpZiAob3B0aW9ucy5oaWRlWWVhcikge1xuXHRcdFx0YWRkKGRheXMsICdkYXknLCAnZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhZGQoZGF5cyAvIDM2NW4sICd5ZWFyJywgJ3knKTtcblx0XHRcdGFkZChkYXlzICUgMzY1biwgJ2RheScsICdkJyk7XG5cdFx0fVxuXG5cdFx0YWRkKE51bWJlcihwYXJzZWQuaG91cnMpLCAnaG91cicsICdoJyk7XG5cdH1cblxuXHRhZGQoTnVtYmVyKHBhcnNlZC5taW51dGVzKSwgJ21pbnV0ZScsICdtJyk7XG5cblx0aWYgKCFvcHRpb25zLmhpZGVTZWNvbmRzKSB7XG5cdFx0aWYgKFxuXHRcdFx0b3B0aW9ucy5zZXBhcmF0ZU1pbGxpc2Vjb25kc1xuXHRcdFx0fHwgb3B0aW9ucy5mb3JtYXRTdWJNaWxsaXNlY29uZHNcblx0XHRcdHx8ICghb3B0aW9ucy5jb2xvbk5vdGF0aW9uICYmIG1pbGxpc2Vjb25kcyA8IDEwMDApXG5cdFx0KSB7XG5cdFx0XHRjb25zdCBzZWNvbmRzID0gTnVtYmVyKHBhcnNlZC5zZWNvbmRzKTtcblx0XHRcdGNvbnN0IG1pbGxpc2Vjb25kcyA9IE51bWJlcihwYXJzZWQubWlsbGlzZWNvbmRzKTtcblx0XHRcdGNvbnN0IG1pY3Jvc2Vjb25kcyA9IE51bWJlcihwYXJzZWQubWljcm9zZWNvbmRzKTtcblx0XHRcdGNvbnN0IG5hbm9zZWNvbmRzID0gTnVtYmVyKHBhcnNlZC5uYW5vc2Vjb25kcyk7XG5cblx0XHRcdGFkZChzZWNvbmRzLCAnc2Vjb25kJywgJ3MnKTtcblxuXHRcdFx0aWYgKG9wdGlvbnMuZm9ybWF0U3ViTWlsbGlzZWNvbmRzKSB7XG5cdFx0XHRcdGFkZChtaWxsaXNlY29uZHMsICdtaWxsaXNlY29uZCcsICdtcycpO1xuXHRcdFx0XHRhZGQobWljcm9zZWNvbmRzLCAnbWljcm9zZWNvbmQnLCAnXHUwMEI1cycpO1xuXHRcdFx0XHRhZGQobmFub3NlY29uZHMsICduYW5vc2Vjb25kJywgJ25zJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBtaWxsaXNlY29uZHNBbmRCZWxvd1xuXHRcdFx0XHRcdD0gbWlsbGlzZWNvbmRzXG5cdFx0XHRcdFx0KyAobWljcm9zZWNvbmRzIC8gMTAwMClcblx0XHRcdFx0XHQrIChuYW5vc2Vjb25kcyAvIDFlNik7XG5cblx0XHRcdFx0Y29uc3QgbWlsbGlzZWNvbmRzRGVjaW1hbERpZ2l0c1xuXHRcdFx0XHRcdD0gdHlwZW9mIG9wdGlvbnMubWlsbGlzZWNvbmRzRGVjaW1hbERpZ2l0cyA9PT0gJ251bWJlcidcblx0XHRcdFx0XHRcdD8gb3B0aW9ucy5taWxsaXNlY29uZHNEZWNpbWFsRGlnaXRzXG5cdFx0XHRcdFx0XHQ6IDA7XG5cblx0XHRcdFx0Y29uc3Qgcm91bmRlZE1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kc0FuZEJlbG93ID49IDFcblx0XHRcdFx0XHQ/IE1hdGgucm91bmQobWlsbGlzZWNvbmRzQW5kQmVsb3cpXG5cdFx0XHRcdFx0OiBNYXRoLmNlaWwobWlsbGlzZWNvbmRzQW5kQmVsb3cpO1xuXG5cdFx0XHRcdGNvbnN0IG1pbGxpc2Vjb25kc1N0cmluZyA9IG1pbGxpc2Vjb25kc0RlY2ltYWxEaWdpdHNcblx0XHRcdFx0XHQ/IG1pbGxpc2Vjb25kc0FuZEJlbG93LnRvRml4ZWQobWlsbGlzZWNvbmRzRGVjaW1hbERpZ2l0cylcblx0XHRcdFx0XHQ6IHJvdW5kZWRNaWxsaXNlY29uZHM7XG5cblx0XHRcdFx0YWRkKFxuXHRcdFx0XHRcdE51bWJlci5wYXJzZUZsb2F0KG1pbGxpc2Vjb25kc1N0cmluZyksXG5cdFx0XHRcdFx0J21pbGxpc2Vjb25kJyxcblx0XHRcdFx0XHQnbXMnLFxuXHRcdFx0XHRcdG1pbGxpc2Vjb25kc1N0cmluZyxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgc2Vjb25kcyA9IChcblx0XHRcdFx0KGlzQmlnSW50ID8gTnVtYmVyKG1pbGxpc2Vjb25kcyAlIE9ORV9EQVlfSU5fTUlMTElTRUNPTkRTKSA6IG1pbGxpc2Vjb25kcylcblx0XHRcdFx0LyAxMDAwXG5cdFx0XHQpICUgNjA7XG5cdFx0XHRjb25zdCBzZWNvbmRzRGVjaW1hbERpZ2l0c1xuXHRcdFx0XHQ9IHR5cGVvZiBvcHRpb25zLnNlY29uZHNEZWNpbWFsRGlnaXRzID09PSAnbnVtYmVyJ1xuXHRcdFx0XHRcdD8gb3B0aW9ucy5zZWNvbmRzRGVjaW1hbERpZ2l0c1xuXHRcdFx0XHRcdDogMTtcblx0XHRcdGNvbnN0IHNlY29uZHNGaXhlZCA9IGZsb29yRGVjaW1hbHMoc2Vjb25kcywgc2Vjb25kc0RlY2ltYWxEaWdpdHMpO1xuXHRcdFx0Y29uc3Qgc2Vjb25kc1N0cmluZyA9IG9wdGlvbnMua2VlcERlY2ltYWxzT25XaG9sZVNlY29uZHNcblx0XHRcdFx0PyBzZWNvbmRzRml4ZWRcblx0XHRcdFx0OiBzZWNvbmRzRml4ZWQucmVwbGFjZSgvXFwuMCskLywgJycpO1xuXHRcdFx0YWRkKE51bWJlci5wYXJzZUZsb2F0KHNlY29uZHNTdHJpbmcpLCAnc2Vjb25kJywgJ3MnLCBzZWNvbmRzU3RyaW5nKTtcblx0XHR9XG5cdH1cblxuXHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBzaWduICsgJzAnICsgKG9wdGlvbnMudmVyYm9zZSA/ICcgbWlsbGlzZWNvbmRzJyA6ICdtcycpO1xuXHR9XG5cblx0Y29uc3Qgc2VwYXJhdG9yID0gb3B0aW9ucy5jb2xvbk5vdGF0aW9uID8gJzonIDogJyAnO1xuXHRpZiAodHlwZW9mIG9wdGlvbnMudW5pdENvdW50ID09PSAnbnVtYmVyJykge1xuXHRcdHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCBNYXRoLm1heChvcHRpb25zLnVuaXRDb3VudCwgMSkpO1xuXHR9XG5cblx0cmV0dXJuIHNpZ24gKyByZXN1bHQuam9pbihzZXBhcmF0b3IpO1xufVxuIiwgImltcG9ydCB7dmVyYm9zZUxvZ30gZnJvbSAnLi9sb2cuanMnO1xuXG4vLyBXaGVuIGB2ZXJib3NlYCBpcyBgc2hvcnR8ZnVsbHxjdXN0b21gLCBwcmludCBlYWNoIGNvbW1hbmQncyBlcnJvciB3aGVuIGl0IGZhaWxzXG5leHBvcnQgY29uc3QgbG9nRXJyb3IgPSAocmVzdWx0LCB2ZXJib3NlSW5mbykgPT4ge1xuXHRpZiAocmVzdWx0LmZhaWxlZCkge1xuXHRcdHZlcmJvc2VMb2coe1xuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdHZlcmJvc2VNZXNzYWdlOiByZXN1bHQuc2hvcnRNZXNzYWdlLFxuXHRcdFx0dmVyYm9zZUluZm8sXG5cdFx0XHRyZXN1bHQsXG5cdFx0fSk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHByZXR0eU1zIGZyb20gJ3ByZXR0eS1tcyc7XG5pbXBvcnQge2lzVmVyYm9zZX0gZnJvbSAnLi92YWx1ZXMuanMnO1xuaW1wb3J0IHt2ZXJib3NlTG9nfSBmcm9tICcuL2xvZy5qcyc7XG5pbXBvcnQge2xvZ0Vycm9yfSBmcm9tICcuL2Vycm9yLmpzJztcblxuLy8gV2hlbiBgdmVyYm9zZWAgaXMgYHNob3J0fGZ1bGx8Y3VzdG9tYCwgcHJpbnQgZWFjaCBjb21tYW5kJ3MgY29tcGxldGlvbiwgZHVyYXRpb24gYW5kIGVycm9yXG5leHBvcnQgY29uc3QgbG9nUmVzdWx0ID0gKHJlc3VsdCwgdmVyYm9zZUluZm8pID0+IHtcblx0aWYgKCFpc1ZlcmJvc2UodmVyYm9zZUluZm8pKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bG9nRXJyb3IocmVzdWx0LCB2ZXJib3NlSW5mbyk7XG5cdGxvZ0R1cmF0aW9uKHJlc3VsdCwgdmVyYm9zZUluZm8pO1xufTtcblxuY29uc3QgbG9nRHVyYXRpb24gPSAocmVzdWx0LCB2ZXJib3NlSW5mbykgPT4ge1xuXHRjb25zdCB2ZXJib3NlTWVzc2FnZSA9IGAoZG9uZSBpbiAke3ByZXR0eU1zKHJlc3VsdC5kdXJhdGlvbk1zKX0pYDtcblx0dmVyYm9zZUxvZyh7XG5cdFx0dHlwZTogJ2R1cmF0aW9uJyxcblx0XHR2ZXJib3NlTWVzc2FnZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRyZXN1bHQsXG5cdH0pO1xufTtcbiIsICJpbXBvcnQge2xvZ1Jlc3VsdH0gZnJvbSAnLi4vdmVyYm9zZS9jb21wbGV0ZS5qcyc7XG5cbi8vIEFwcGxpZXMgdGhlIGByZWplY3RgIG9wdGlvbi5cbi8vIEFsc28gcHJpbnQgdGhlIGZpbmFsIGxvZyBsaW5lIHdpdGggYHZlcmJvc2VgLlxuZXhwb3J0IGNvbnN0IGhhbmRsZVJlc3VsdCA9IChyZXN1bHQsIHZlcmJvc2VJbmZvLCB7cmVqZWN0fSkgPT4ge1xuXHRsb2dSZXN1bHQocmVzdWx0LCB2ZXJib3NlSW5mbyk7XG5cblx0aWYgKHJlc3VsdC5mYWlsZWQgJiYgcmVqZWN0KSB7XG5cdFx0dGhyb3cgcmVzdWx0O1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiaW1wb3J0IHtpc1N0cmVhbSBhcyBpc05vZGVTdHJlYW0sIGlzRHVwbGV4U3RyZWFtfSBmcm9tICdpcy1zdHJlYW0nO1xuaW1wb3J0IGlzUGxhaW5PYmogZnJvbSAnaXMtcGxhaW4tb2JqJztcbmltcG9ydCB7aXNVaW50OEFycmF5fSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcblxuLy8gVGhlIGBzdGRpbmAvYHN0ZG91dGAvYHN0ZGVycmAgb3B0aW9uIGNhbiBiZSBvZiBtYW55IHR5cGVzLiBUaGlzIGRldGVjdHMgaXQuXG5leHBvcnQgY29uc3QgZ2V0U3RkaW9JdGVtVHlwZSA9ICh2YWx1ZSwgb3B0aW9uTmFtZSkgPT4ge1xuXHRpZiAoaXNBc3luY0dlbmVyYXRvcih2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ2FzeW5jR2VuZXJhdG9yJztcblx0fVxuXG5cdGlmIChpc1N5bmNHZW5lcmF0b3IodmFsdWUpKSB7XG5cdFx0cmV0dXJuICdnZW5lcmF0b3InO1xuXHR9XG5cblx0aWYgKGlzVXJsKHZhbHVlKSkge1xuXHRcdHJldHVybiAnZmlsZVVybCc7XG5cdH1cblxuXHRpZiAoaXNGaWxlUGF0aE9iamVjdCh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ2ZpbGVQYXRoJztcblx0fVxuXG5cdGlmIChpc1dlYlN0cmVhbSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ3dlYlN0cmVhbSc7XG5cdH1cblxuXHRpZiAoaXNOb2RlU3RyZWFtKHZhbHVlLCB7Y2hlY2tPcGVuOiBmYWxzZX0pKSB7XG5cdFx0cmV0dXJuICduYXRpdmUnO1xuXHR9XG5cblx0aWYgKGlzVWludDhBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ3VpbnQ4QXJyYXknO1xuXHR9XG5cblx0aWYgKGlzQXN5bmNJdGVyYWJsZU9iamVjdCh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ2FzeW5jSXRlcmFibGUnO1xuXHR9XG5cblx0aWYgKGlzSXRlcmFibGVPYmplY3QodmFsdWUpKSB7XG5cdFx0cmV0dXJuICdpdGVyYWJsZSc7XG5cdH1cblxuXHRpZiAoaXNUcmFuc2Zvcm1TdHJlYW0odmFsdWUpKSB7XG5cdFx0cmV0dXJuIGdldFRyYW5zZm9ybVN0cmVhbVR5cGUoe3RyYW5zZm9ybTogdmFsdWV9LCBvcHRpb25OYW1lKTtcblx0fVxuXG5cdGlmIChpc1RyYW5zZm9ybU9wdGlvbnModmFsdWUpKSB7XG5cdFx0cmV0dXJuIGdldFRyYW5zZm9ybU9iamVjdFR5cGUodmFsdWUsIG9wdGlvbk5hbWUpO1xuXHR9XG5cblx0cmV0dXJuICduYXRpdmUnO1xufTtcblxuY29uc3QgZ2V0VHJhbnNmb3JtT2JqZWN0VHlwZSA9ICh2YWx1ZSwgb3B0aW9uTmFtZSkgPT4ge1xuXHRpZiAoaXNEdXBsZXhTdHJlYW0odmFsdWUudHJhbnNmb3JtLCB7Y2hlY2tPcGVuOiBmYWxzZX0pKSB7XG5cdFx0cmV0dXJuIGdldER1cGxleFR5cGUodmFsdWUsIG9wdGlvbk5hbWUpO1xuXHR9XG5cblx0aWYgKGlzVHJhbnNmb3JtU3RyZWFtKHZhbHVlLnRyYW5zZm9ybSkpIHtcblx0XHRyZXR1cm4gZ2V0VHJhbnNmb3JtU3RyZWFtVHlwZSh2YWx1ZSwgb3B0aW9uTmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gZ2V0R2VuZXJhdG9yT2JqZWN0VHlwZSh2YWx1ZSwgb3B0aW9uTmFtZSk7XG59O1xuXG5jb25zdCBnZXREdXBsZXhUeXBlID0gKHZhbHVlLCBvcHRpb25OYW1lKSA9PiB7XG5cdHZhbGlkYXRlTm9uR2VuZXJhdG9yVHlwZSh2YWx1ZSwgb3B0aW9uTmFtZSwgJ0R1cGxleCBzdHJlYW0nKTtcblx0cmV0dXJuICdkdXBsZXgnO1xufTtcblxuY29uc3QgZ2V0VHJhbnNmb3JtU3RyZWFtVHlwZSA9ICh2YWx1ZSwgb3B0aW9uTmFtZSkgPT4ge1xuXHR2YWxpZGF0ZU5vbkdlbmVyYXRvclR5cGUodmFsdWUsIG9wdGlvbk5hbWUsICd3ZWIgVHJhbnNmb3JtU3RyZWFtJyk7XG5cdHJldHVybiAnd2ViVHJhbnNmb3JtJztcbn07XG5cbmNvbnN0IHZhbGlkYXRlTm9uR2VuZXJhdG9yVHlwZSA9ICh7ZmluYWwsIGJpbmFyeSwgb2JqZWN0TW9kZX0sIG9wdGlvbk5hbWUsIHR5cGVOYW1lKSA9PiB7XG5cdGNoZWNrVW5kZWZpbmVkT3B0aW9uKGZpbmFsLCBgJHtvcHRpb25OYW1lfS5maW5hbGAsIHR5cGVOYW1lKTtcblx0Y2hlY2tVbmRlZmluZWRPcHRpb24oYmluYXJ5LCBgJHtvcHRpb25OYW1lfS5iaW5hcnlgLCB0eXBlTmFtZSk7XG5cdGNoZWNrQm9vbGVhbk9wdGlvbihvYmplY3RNb2RlLCBgJHtvcHRpb25OYW1lfS5vYmplY3RNb2RlYCk7XG59O1xuXG5jb25zdCBjaGVja1VuZGVmaW5lZE9wdGlvbiA9ICh2YWx1ZSwgb3B0aW9uTmFtZSwgdHlwZU5hbWUpID0+IHtcblx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfVxcYCBvcHRpb24gY2FuIG9ubHkgYmUgZGVmaW5lZCB3aGVuIHVzaW5nIGEgZ2VuZXJhdG9yLCBub3QgYSAke3R5cGVOYW1lfS5gKTtcblx0fVxufTtcblxuY29uc3QgZ2V0R2VuZXJhdG9yT2JqZWN0VHlwZSA9ICh7dHJhbnNmb3JtLCBmaW5hbCwgYmluYXJ5LCBvYmplY3RNb2RlfSwgb3B0aW9uTmFtZSkgPT4ge1xuXHRpZiAodHJhbnNmb3JtICE9PSB1bmRlZmluZWQgJiYgIWlzR2VuZXJhdG9yKHRyYW5zZm9ybSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfS50cmFuc2Zvcm1cXGAgb3B0aW9uIG11c3QgYmUgYSBnZW5lcmF0b3IsIGEgRHVwbGV4IHN0cmVhbSBvciBhIHdlYiBUcmFuc2Zvcm1TdHJlYW0uYCk7XG5cdH1cblxuXHRpZiAoaXNEdXBsZXhTdHJlYW0oZmluYWwsIHtjaGVja09wZW46IGZhbHNlfSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfS5maW5hbFxcYCBvcHRpb24gbXVzdCBub3QgYmUgYSBEdXBsZXggc3RyZWFtLmApO1xuXHR9XG5cblx0aWYgKGlzVHJhbnNmb3JtU3RyZWFtKGZpbmFsKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9LmZpbmFsXFxgIG9wdGlvbiBtdXN0IG5vdCBiZSBhIHdlYiBUcmFuc2Zvcm1TdHJlYW0uYCk7XG5cdH1cblxuXHRpZiAoZmluYWwgIT09IHVuZGVmaW5lZCAmJiAhaXNHZW5lcmF0b3IoZmluYWwpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX0uZmluYWxcXGAgb3B0aW9uIG11c3QgYmUgYSBnZW5lcmF0b3IuYCk7XG5cdH1cblxuXHRjaGVja0Jvb2xlYW5PcHRpb24oYmluYXJ5LCBgJHtvcHRpb25OYW1lfS5iaW5hcnlgKTtcblx0Y2hlY2tCb29sZWFuT3B0aW9uKG9iamVjdE1vZGUsIGAke29wdGlvbk5hbWV9Lm9iamVjdE1vZGVgKTtcblxuXHRyZXR1cm4gaXNBc3luY0dlbmVyYXRvcih0cmFuc2Zvcm0pIHx8IGlzQXN5bmNHZW5lcmF0b3IoZmluYWwpID8gJ2FzeW5jR2VuZXJhdG9yJyA6ICdnZW5lcmF0b3InO1xufTtcblxuY29uc3QgY2hlY2tCb29sZWFuT3B0aW9uID0gKHZhbHVlLCBvcHRpb25OYW1lKSA9PiB7XG5cdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uIG11c3QgdXNlIGEgYm9vbGVhbi5gKTtcblx0fVxufTtcblxuY29uc3QgaXNHZW5lcmF0b3IgPSB2YWx1ZSA9PiBpc0FzeW5jR2VuZXJhdG9yKHZhbHVlKSB8fCBpc1N5bmNHZW5lcmF0b3IodmFsdWUpO1xuZXhwb3J0IGNvbnN0IGlzQXN5bmNHZW5lcmF0b3IgPSB2YWx1ZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBc3luY0dlbmVyYXRvckZ1bmN0aW9uXSc7XG5jb25zdCBpc1N5bmNHZW5lcmF0b3IgPSB2YWx1ZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuY29uc3QgaXNUcmFuc2Zvcm1PcHRpb25zID0gdmFsdWUgPT4gaXNQbGFpbk9iaih2YWx1ZSlcblx0JiYgKHZhbHVlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkIHx8IHZhbHVlLmZpbmFsICE9PSB1bmRlZmluZWQpO1xuXG5leHBvcnQgY29uc3QgaXNVcmwgPSB2YWx1ZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBVUkxdJztcbmV4cG9ydCBjb25zdCBpc1JlZ3VsYXJVcmwgPSB2YWx1ZSA9PiBpc1VybCh2YWx1ZSkgJiYgdmFsdWUucHJvdG9jb2wgIT09ICdmaWxlOic7XG5cbmNvbnN0IGlzRmlsZVBhdGhPYmplY3QgPSB2YWx1ZSA9PiBpc1BsYWluT2JqKHZhbHVlKVxuXHQmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMFxuXHQmJiBPYmplY3Qua2V5cyh2YWx1ZSkuZXZlcnkoa2V5ID0+IEZJTEVfUEFUSF9LRVlTLmhhcyhrZXkpKVxuXHQmJiBpc0ZpbGVQYXRoU3RyaW5nKHZhbHVlLmZpbGUpO1xuY29uc3QgRklMRV9QQVRIX0tFWVMgPSBuZXcgU2V0KFsnZmlsZScsICdhcHBlbmQnXSk7XG5leHBvcnQgY29uc3QgaXNGaWxlUGF0aFN0cmluZyA9IGZpbGUgPT4gdHlwZW9mIGZpbGUgPT09ICdzdHJpbmcnO1xuXG5leHBvcnQgY29uc3QgaXNVbmtub3duU3RkaW9TdHJpbmcgPSAodHlwZSwgdmFsdWUpID0+IHR5cGUgPT09ICduYXRpdmUnXG5cdCYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcblx0JiYgIUtOT1dOX1NURElPX1NUUklOR1MuaGFzKHZhbHVlKTtcbmNvbnN0IEtOT1dOX1NURElPX1NUUklOR1MgPSBuZXcgU2V0KFsnaXBjJywgJ2lnbm9yZScsICdpbmhlcml0JywgJ292ZXJsYXBwZWQnLCAncGlwZSddKTtcblxuY29uc3QgaXNSZWFkYWJsZVN0cmVhbSA9IHZhbHVlID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlYWRhYmxlU3RyZWFtXSc7XG5leHBvcnQgY29uc3QgaXNXcml0YWJsZVN0cmVhbSA9IHZhbHVlID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFdyaXRhYmxlU3RyZWFtXSc7XG5jb25zdCBpc1dlYlN0cmVhbSA9IHZhbHVlID0+IGlzUmVhZGFibGVTdHJlYW0odmFsdWUpIHx8IGlzV3JpdGFibGVTdHJlYW0odmFsdWUpO1xuY29uc3QgaXNUcmFuc2Zvcm1TdHJlYW0gPSB2YWx1ZSA9PiBpc1JlYWRhYmxlU3RyZWFtKHZhbHVlPy5yZWFkYWJsZSkgJiYgaXNXcml0YWJsZVN0cmVhbSh2YWx1ZT8ud3JpdGFibGUpO1xuXG5jb25zdCBpc0FzeW5jSXRlcmFibGVPYmplY3QgPSB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJztcbmNvbnN0IGlzSXRlcmFibGVPYmplY3QgPSB2YWx1ZSA9PiBpc09iamVjdCh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0gPT09ICdmdW5jdGlvbic7XG5jb25zdCBpc09iamVjdCA9IHZhbHVlID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG5cbi8vIFR5cGVzIHdoaWNoIG1vZGlmeSBgc3VicHJvY2Vzcy5zdGQqYFxuZXhwb3J0IGNvbnN0IFRSQU5TRk9STV9UWVBFUyA9IG5ldyBTZXQoWydnZW5lcmF0b3InLCAnYXN5bmNHZW5lcmF0b3InLCAnZHVwbGV4JywgJ3dlYlRyYW5zZm9ybSddKTtcbi8vIFR5cGVzIHdoaWNoIHdyaXRlIHRvIGEgZmlsZSBvciBhIGZpbGUgZGVzY3JpcHRvclxuZXhwb3J0IGNvbnN0IEZJTEVfVFlQRVMgPSBuZXcgU2V0KFsnZmlsZVVybCcsICdmaWxlUGF0aCcsICdmaWxlTnVtYmVyJ10pO1xuLy8gV2hlbiB0d28gZmlsZSBkZXNjcmlwdG9ycyBvZiB0aGlzIHR5cGUgc2hhcmUgdGhlIHNhbWUgdGFyZ2V0LCB3ZSBuZWVkIHRvIGRvIHNvbWUgc3BlY2lhbCBsb2dpY1xuZXhwb3J0IGNvbnN0IFNQRUNJQUxfRFVQTElDQVRFX1RZUEVTX1NZTkMgPSBuZXcgU2V0KFsnZmlsZVVybCcsICdmaWxlUGF0aCddKTtcbmV4cG9ydCBjb25zdCBTUEVDSUFMX0RVUExJQ0FURV9UWVBFUyA9IG5ldyBTZXQoWy4uLlNQRUNJQUxfRFVQTElDQVRFX1RZUEVTX1NZTkMsICd3ZWJTdHJlYW0nLCAnbm9kZVN0cmVhbSddKTtcbi8vIERvIG5vdCBhbGxvdyB0d28gZmlsZSBkZXNjcmlwdG9ycyBvZiB0aGlzIHR5cGUgc2hhcmluZyB0aGUgc2FtZSB0YXJnZXRcbmV4cG9ydCBjb25zdCBGT1JCSURfRFVQTElDQVRFX1RZUEVTID0gbmV3IFNldChbJ3dlYlRyYW5zZm9ybScsICdkdXBsZXgnXSk7XG5cbi8vIENvbnZlcnQgdHlwZXMgdG8gaHVtYW4tZnJpZW5kbHkgc3RyaW5ncyBmb3IgZXJyb3IgbWVzc2FnZXNcbmV4cG9ydCBjb25zdCBUWVBFX1RPX01FU1NBR0UgPSB7XG5cdGdlbmVyYXRvcjogJ2EgZ2VuZXJhdG9yJyxcblx0YXN5bmNHZW5lcmF0b3I6ICdhbiBhc3luYyBnZW5lcmF0b3InLFxuXHRmaWxlVXJsOiAnYSBmaWxlIFVSTCcsXG5cdGZpbGVQYXRoOiAnYSBmaWxlIHBhdGggc3RyaW5nJyxcblx0ZmlsZU51bWJlcjogJ2EgZmlsZSBkZXNjcmlwdG9yIG51bWJlcicsXG5cdHdlYlN0cmVhbTogJ2Egd2ViIHN0cmVhbScsXG5cdG5vZGVTdHJlYW06ICdhIE5vZGUuanMgc3RyZWFtJyxcblx0d2ViVHJhbnNmb3JtOiAnYSB3ZWIgVHJhbnNmb3JtU3RyZWFtJyxcblx0ZHVwbGV4OiAnYSBEdXBsZXggc3RyZWFtJyxcblx0bmF0aXZlOiAnYW55IHZhbHVlJyxcblx0aXRlcmFibGU6ICdhbiBpdGVyYWJsZScsXG5cdGFzeW5jSXRlcmFibGU6ICdhbiBhc3luYyBpdGVyYWJsZScsXG5cdHN0cmluZzogJ2Egc3RyaW5nJyxcblx0dWludDhBcnJheTogJ2EgVWludDhBcnJheScsXG59O1xuIiwgImltcG9ydCB7VFJBTlNGT1JNX1RZUEVTfSBmcm9tICcuLi9zdGRpby90eXBlLmpzJztcblxuLypcblJldHJpZXZlIHRoZSBgb2JqZWN0TW9kZWBzIG9mIGEgc2luZ2xlIHRyYW5zZm9ybS5cbmBvYmplY3RNb2RlYCBkZXRlcm1pbmVzIHRoZSByZXR1cm4gdmFsdWUncyB0eXBlLCBpLmUuIHRoZSBgcmVhZGFibGVPYmplY3RNb2RlYC5cblRoZSBjaHVuayBhcmd1bWVudCdzIHR5cGUgaXMgYmFzZWQgb24gdGhlIHByZXZpb3VzIGdlbmVyYXRvcidzIHJldHVybiB2YWx1ZSwgaS5lLiB0aGUgYHdyaXRhYmxlT2JqZWN0TW9kZWAgaXMgYmFzZWQgb24gdGhlIHByZXZpb3VzIGByZWFkYWJsZU9iamVjdE1vZGVgLlxuVGhlIGxhc3QgaW5wdXQncyBnZW5lcmF0b3IgaXMgcmVhZCBieSBgc3VicHJvY2Vzcy5zdGRpbmAgd2hpY2g6XG4tIHNob3VsZCBub3QgYmUgaW4gYG9iamVjdE1vZGVgIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuLSBjYW4gb25seSBiZSBzdHJpbmdzLCBCdWZmZXJzIGFuZCBVaW50OEFycmF5cy5cblRoZXJlZm9yZSBpdHMgYHJlYWRhYmxlT2JqZWN0TW9kZWAgbXVzdCBiZSBgZmFsc2VgLlxuVGhlIHNhbWUgYXBwbGllcyB0byB0aGUgZmlyc3Qgb3V0cHV0J3MgZ2VuZXJhdG9yJ3MgYHdyaXRhYmxlT2JqZWN0TW9kZWAuXG4qL1xuZXhwb3J0IGNvbnN0IGdldFRyYW5zZm9ybU9iamVjdE1vZGVzID0gKG9iamVjdE1vZGUsIGluZGV4LCBuZXdUcmFuc2Zvcm1zLCBkaXJlY3Rpb24pID0+IGRpcmVjdGlvbiA9PT0gJ291dHB1dCdcblx0PyBnZXRPdXRwdXRPYmplY3RNb2RlcyhvYmplY3RNb2RlLCBpbmRleCwgbmV3VHJhbnNmb3Jtcylcblx0OiBnZXRJbnB1dE9iamVjdE1vZGVzKG9iamVjdE1vZGUsIGluZGV4LCBuZXdUcmFuc2Zvcm1zKTtcblxuY29uc3QgZ2V0T3V0cHV0T2JqZWN0TW9kZXMgPSAob2JqZWN0TW9kZSwgaW5kZXgsIG5ld1RyYW5zZm9ybXMpID0+IHtcblx0Y29uc3Qgd3JpdGFibGVPYmplY3RNb2RlID0gaW5kZXggIT09IDAgJiYgbmV3VHJhbnNmb3Jtc1tpbmRleCAtIDFdLnZhbHVlLnJlYWRhYmxlT2JqZWN0TW9kZTtcblx0Y29uc3QgcmVhZGFibGVPYmplY3RNb2RlID0gb2JqZWN0TW9kZSA/PyB3cml0YWJsZU9iamVjdE1vZGU7XG5cdHJldHVybiB7d3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9O1xufTtcblxuY29uc3QgZ2V0SW5wdXRPYmplY3RNb2RlcyA9IChvYmplY3RNb2RlLCBpbmRleCwgbmV3VHJhbnNmb3JtcykgPT4ge1xuXHRjb25zdCB3cml0YWJsZU9iamVjdE1vZGUgPSBpbmRleCA9PT0gMFxuXHRcdD8gb2JqZWN0TW9kZSA9PT0gdHJ1ZVxuXHRcdDogbmV3VHJhbnNmb3Jtc1tpbmRleCAtIDFdLnZhbHVlLnJlYWRhYmxlT2JqZWN0TW9kZTtcblx0Y29uc3QgcmVhZGFibGVPYmplY3RNb2RlID0gaW5kZXggIT09IG5ld1RyYW5zZm9ybXMubGVuZ3RoIC0gMSAmJiAob2JqZWN0TW9kZSA/PyB3cml0YWJsZU9iamVjdE1vZGUpO1xuXHRyZXR1cm4ge3dyaXRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVPYmplY3RNb2RlfTtcbn07XG5cbi8vIFJldHJpZXZlIHRoZSBgb2JqZWN0TW9kZWAgb2YgYSBmaWxlIGRlc2NyaXB0b3IsIGUuZy4gYHN0ZG91dGAgb3IgYHN0ZGVycmBcbmV4cG9ydCBjb25zdCBnZXRGZE9iamVjdE1vZGUgPSAoc3RkaW9JdGVtcywgZGlyZWN0aW9uKSA9PiB7XG5cdGNvbnN0IGxhc3RUcmFuc2Zvcm0gPSBzdGRpb0l0ZW1zLmZpbmRMYXN0KCh7dHlwZX0pID0+IFRSQU5TRk9STV9UWVBFUy5oYXModHlwZSkpO1xuXHRpZiAobGFzdFRyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIGRpcmVjdGlvbiA9PT0gJ2lucHV0J1xuXHRcdD8gbGFzdFRyYW5zZm9ybS52YWx1ZS53cml0YWJsZU9iamVjdE1vZGVcblx0XHQ6IGxhc3RUcmFuc2Zvcm0udmFsdWUucmVhZGFibGVPYmplY3RNb2RlO1xufTtcbiIsICJpbXBvcnQgaXNQbGFpbk9iaiBmcm9tICdpcy1wbGFpbi1vYmonO1xuaW1wb3J0IHtCSU5BUllfRU5DT0RJTkdTfSBmcm9tICcuLi9hcmd1bWVudHMvZW5jb2Rpbmctb3B0aW9uLmpzJztcbmltcG9ydCB7VFJBTlNGT1JNX1RZUEVTfSBmcm9tICcuLi9zdGRpby90eXBlLmpzJztcbmltcG9ydCB7Z2V0VHJhbnNmb3JtT2JqZWN0TW9kZXN9IGZyb20gJy4vb2JqZWN0LW1vZGUuanMnO1xuXG4vLyBUcmFuc2Zvcm1zIGdlbmVyYXRvcnMvZHVwbGV4L1RyYW5zZm9ybVN0cmVhbSBjYW4gaGF2ZSBtdWx0aXBsZSBzaGFwZXMuXG4vLyBUaGlzIG5vcm1hbGl6ZXMgaXQgYW5kIGFwcGxpZXMgZGVmYXVsdCB2YWx1ZXMuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplVHJhbnNmb3JtcyA9IChzdGRpb0l0ZW1zLCBvcHRpb25OYW1lLCBkaXJlY3Rpb24sIG9wdGlvbnMpID0+IFtcblx0Li4uc3RkaW9JdGVtcy5maWx0ZXIoKHt0eXBlfSkgPT4gIVRSQU5TRk9STV9UWVBFUy5oYXModHlwZSkpLFxuXHQuLi5nZXRUcmFuc2Zvcm1zKHN0ZGlvSXRlbXMsIG9wdGlvbk5hbWUsIGRpcmVjdGlvbiwgb3B0aW9ucyksXG5dO1xuXG5jb25zdCBnZXRUcmFuc2Zvcm1zID0gKHN0ZGlvSXRlbXMsIG9wdGlvbk5hbWUsIGRpcmVjdGlvbiwge2VuY29kaW5nfSkgPT4ge1xuXHRjb25zdCB0cmFuc2Zvcm1zID0gc3RkaW9JdGVtcy5maWx0ZXIoKHt0eXBlfSkgPT4gVFJBTlNGT1JNX1RZUEVTLmhhcyh0eXBlKSk7XG5cdGNvbnN0IG5ld1RyYW5zZm9ybXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IHRyYW5zZm9ybXMubGVuZ3RofSk7XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIHN0ZGlvSXRlbV0gb2YgT2JqZWN0LmVudHJpZXModHJhbnNmb3JtcykpIHtcblx0XHRuZXdUcmFuc2Zvcm1zW2luZGV4XSA9IG5vcm1hbGl6ZVRyYW5zZm9ybSh7XG5cdFx0XHRzdGRpb0l0ZW0sXG5cdFx0XHRpbmRleDogTnVtYmVyKGluZGV4KSxcblx0XHRcdG5ld1RyYW5zZm9ybXMsXG5cdFx0XHRvcHRpb25OYW1lLFxuXHRcdFx0ZGlyZWN0aW9uLFxuXHRcdFx0ZW5jb2RpbmcsXG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gc29ydFRyYW5zZm9ybXMobmV3VHJhbnNmb3JtcywgZGlyZWN0aW9uKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZVRyYW5zZm9ybSA9ICh7c3RkaW9JdGVtLCBzdGRpb0l0ZW06IHt0eXBlfSwgaW5kZXgsIG5ld1RyYW5zZm9ybXMsIG9wdGlvbk5hbWUsIGRpcmVjdGlvbiwgZW5jb2Rpbmd9KSA9PiB7XG5cdGlmICh0eXBlID09PSAnZHVwbGV4Jykge1xuXHRcdHJldHVybiBub3JtYWxpemVEdXBsZXgoe3N0ZGlvSXRlbSwgb3B0aW9uTmFtZX0pO1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICd3ZWJUcmFuc2Zvcm0nKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZVRyYW5zZm9ybVN0cmVhbSh7XG5cdFx0XHRzdGRpb0l0ZW0sXG5cdFx0XHRpbmRleCxcblx0XHRcdG5ld1RyYW5zZm9ybXMsXG5cdFx0XHRkaXJlY3Rpb24sXG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gbm9ybWFsaXplR2VuZXJhdG9yKHtcblx0XHRzdGRpb0l0ZW0sXG5cdFx0aW5kZXgsXG5cdFx0bmV3VHJhbnNmb3Jtcyxcblx0XHRkaXJlY3Rpb24sXG5cdFx0ZW5jb2RpbmcsXG5cdH0pO1xufTtcblxuY29uc3Qgbm9ybWFsaXplRHVwbGV4ID0gKHtcblx0c3RkaW9JdGVtLFxuXHRzdGRpb0l0ZW06IHtcblx0XHR2YWx1ZToge1xuXHRcdFx0dHJhbnNmb3JtLFxuXHRcdFx0dHJhbnNmb3JtOiB7d3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9LFxuXHRcdFx0b2JqZWN0TW9kZSA9IHJlYWRhYmxlT2JqZWN0TW9kZSxcblx0XHR9LFxuXHR9LFxuXHRvcHRpb25OYW1lLFxufSkgPT4ge1xuXHRpZiAob2JqZWN0TW9kZSAmJiAhcmVhZGFibGVPYmplY3RNb2RlKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX0ub2JqZWN0TW9kZVxcYCBvcHRpb24gY2FuIG9ubHkgYmUgXFxgdHJ1ZVxcYCBpZiBcXGBuZXcgRHVwbGV4KHtvYmplY3RNb2RlOiB0cnVlfSlcXGAgaXMgdXNlZC5gKTtcblx0fVxuXG5cdGlmICghb2JqZWN0TW9kZSAmJiByZWFkYWJsZU9iamVjdE1vZGUpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfS5vYmplY3RNb2RlXFxgIG9wdGlvbiBjYW5ub3QgYmUgXFxgZmFsc2VcXGAgaWYgXFxgbmV3IER1cGxleCh7b2JqZWN0TW9kZTogdHJ1ZX0pXFxgIGlzIHVzZWQuYCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdC4uLnN0ZGlvSXRlbSxcblx0XHR2YWx1ZToge3RyYW5zZm9ybSwgd3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9LFxuXHR9O1xufTtcblxuY29uc3Qgbm9ybWFsaXplVHJhbnNmb3JtU3RyZWFtID0gKHtzdGRpb0l0ZW0sIHN0ZGlvSXRlbToge3ZhbHVlfSwgaW5kZXgsIG5ld1RyYW5zZm9ybXMsIGRpcmVjdGlvbn0pID0+IHtcblx0Y29uc3Qge3RyYW5zZm9ybSwgb2JqZWN0TW9kZX0gPSBpc1BsYWluT2JqKHZhbHVlKSA/IHZhbHVlIDoge3RyYW5zZm9ybTogdmFsdWV9O1xuXHRjb25zdCB7d3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9ID0gZ2V0VHJhbnNmb3JtT2JqZWN0TW9kZXMob2JqZWN0TW9kZSwgaW5kZXgsIG5ld1RyYW5zZm9ybXMsIGRpcmVjdGlvbik7XG5cdHJldHVybiAoe1xuXHRcdC4uLnN0ZGlvSXRlbSxcblx0XHR2YWx1ZToge3RyYW5zZm9ybSwgd3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9LFxuXHR9KTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUdlbmVyYXRvciA9ICh7c3RkaW9JdGVtLCBzdGRpb0l0ZW06IHt2YWx1ZX0sIGluZGV4LCBuZXdUcmFuc2Zvcm1zLCBkaXJlY3Rpb24sIGVuY29kaW5nfSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0dHJhbnNmb3JtLFxuXHRcdGZpbmFsLFxuXHRcdGJpbmFyeTogYmluYXJ5T3B0aW9uID0gZmFsc2UsXG5cdFx0cHJlc2VydmVOZXdsaW5lcyA9IGZhbHNlLFxuXHRcdG9iamVjdE1vZGUsXG5cdH0gPSBpc1BsYWluT2JqKHZhbHVlKSA/IHZhbHVlIDoge3RyYW5zZm9ybTogdmFsdWV9O1xuXHRjb25zdCBiaW5hcnkgPSBiaW5hcnlPcHRpb24gfHwgQklOQVJZX0VOQ09ESU5HUy5oYXMoZW5jb2RpbmcpO1xuXHRjb25zdCB7d3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9ID0gZ2V0VHJhbnNmb3JtT2JqZWN0TW9kZXMob2JqZWN0TW9kZSwgaW5kZXgsIG5ld1RyYW5zZm9ybXMsIGRpcmVjdGlvbik7XG5cdHJldHVybiB7XG5cdFx0Li4uc3RkaW9JdGVtLFxuXHRcdHZhbHVlOiB7XG5cdFx0XHR0cmFuc2Zvcm0sXG5cdFx0XHRmaW5hbCxcblx0XHRcdGJpbmFyeSxcblx0XHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdFx0XHR3cml0YWJsZU9iamVjdE1vZGUsXG5cdFx0XHRyZWFkYWJsZU9iamVjdE1vZGUsXG5cdFx0fSxcblx0fTtcbn07XG5cbmNvbnN0IHNvcnRUcmFuc2Zvcm1zID0gKG5ld1RyYW5zZm9ybXMsIGRpcmVjdGlvbikgPT4gZGlyZWN0aW9uID09PSAnaW5wdXQnID8gbmV3VHJhbnNmb3Jtcy5yZXZlcnNlKCkgOiBuZXdUcmFuc2Zvcm1zO1xuIiwgImltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQge1xuXHRpc1N0cmVhbSBhcyBpc05vZGVTdHJlYW0sXG5cdGlzUmVhZGFibGVTdHJlYW0gYXMgaXNOb2RlUmVhZGFibGVTdHJlYW0sXG5cdGlzV3JpdGFibGVTdHJlYW0gYXMgaXNOb2RlV3JpdGFibGVTdHJlYW0sXG59IGZyb20gJ2lzLXN0cmVhbSc7XG5pbXBvcnQge2lzV3JpdGFibGVTdHJlYW19IGZyb20gJy4vdHlwZS5qcyc7XG5cbi8vIEZvciBgc3RkaW9bZmROdW1iZXJdYCBiZXlvbmQgc3RkaW4vc3Rkb3V0L3N0ZGVyciwgd2UgbmVlZCB0byBndWVzcyB3aGV0aGVyIHRoZSB2YWx1ZSBwYXNzZWQgaXMgaW50ZW5kZWQgZm9yIGlucHV0cyBvciBvdXRwdXRzLlxuLy8gVGhpcyBhbGxvd3MgdXMgdG8ga25vdyB3aGV0aGVyIHRvIHBpcGUgX2ludG9fIG9yIF9mcm9tXyB0aGUgc3RyZWFtLlxuLy8gV2hlbiBgc3RkaW9bZmROdW1iZXJdYCBpcyBhIHNpbmdsZSB2YWx1ZSwgdGhpcyBndWVzcyBpcyBmYWlybHkgc3RyYWlnaHRmb3J3YXJkLlxuLy8gSG93ZXZlciwgd2hlbiBpdCBpcyBhbiBhcnJheSBpbnN0ZWFkLCB3ZSBhbHNvIG5lZWQgdG8gbWFrZSBzdXJlIHRoZSBkaWZmZXJlbnQgdmFsdWVzIGFyZSBub3QgaW5jb21wYXRpYmxlIHdpdGggZWFjaCBvdGhlci5cbmV4cG9ydCBjb25zdCBnZXRTdHJlYW1EaXJlY3Rpb24gPSAoc3RkaW9JdGVtcywgZmROdW1iZXIsIG9wdGlvbk5hbWUpID0+IHtcblx0Y29uc3QgZGlyZWN0aW9ucyA9IHN0ZGlvSXRlbXMubWFwKHN0ZGlvSXRlbSA9PiBnZXRTdGRpb0l0ZW1EaXJlY3Rpb24oc3RkaW9JdGVtLCBmZE51bWJlcikpO1xuXG5cdGlmIChkaXJlY3Rpb25zLmluY2x1ZGVzKCdpbnB1dCcpICYmIGRpcmVjdGlvbnMuaW5jbHVkZXMoJ291dHB1dCcpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uIG11c3Qgbm90IGJlIGFuIGFycmF5IG9mIGJvdGggcmVhZGFibGUgYW5kIHdyaXRhYmxlIHZhbHVlcy5gKTtcblx0fVxuXG5cdHJldHVybiBkaXJlY3Rpb25zLmZpbmQoQm9vbGVhbikgPz8gREVGQVVMVF9ESVJFQ1RJT047XG59O1xuXG5jb25zdCBnZXRTdGRpb0l0ZW1EaXJlY3Rpb24gPSAoe3R5cGUsIHZhbHVlfSwgZmROdW1iZXIpID0+IEtOT1dOX0RJUkVDVElPTlNbZmROdW1iZXJdID8/IGd1ZXNzU3RyZWFtRGlyZWN0aW9uW3R5cGVdKHZhbHVlKTtcblxuLy8gYHN0ZGluYC9gc3Rkb3V0YC9gc3RkZXJyYCBoYXZlIGEga25vd24gZGlyZWN0aW9uXG5jb25zdCBLTk9XTl9ESVJFQ1RJT05TID0gWydpbnB1dCcsICdvdXRwdXQnLCAnb3V0cHV0J107XG5cbmNvbnN0IGFueURpcmVjdGlvbiA9ICgpID0+IHVuZGVmaW5lZDtcbmNvbnN0IGFsd2F5c0lucHV0ID0gKCkgPT4gJ2lucHV0JztcblxuLy8gYHN0cmluZ2AgY2FuIG9ubHkgYmUgYWRkZWQgdGhyb3VnaCB0aGUgYGlucHV0YCBvcHRpb24sIGkuZS4gZG9lcyBub3QgbmVlZCB0byBiZSBoYW5kbGVkIGhlcmVcbmNvbnN0IGd1ZXNzU3RyZWFtRGlyZWN0aW9uID0ge1xuXHRnZW5lcmF0b3I6IGFueURpcmVjdGlvbixcblx0YXN5bmNHZW5lcmF0b3I6IGFueURpcmVjdGlvbixcblx0ZmlsZVVybDogYW55RGlyZWN0aW9uLFxuXHRmaWxlUGF0aDogYW55RGlyZWN0aW9uLFxuXHRpdGVyYWJsZTogYWx3YXlzSW5wdXQsXG5cdGFzeW5jSXRlcmFibGU6IGFsd2F5c0lucHV0LFxuXHR1aW50OEFycmF5OiBhbHdheXNJbnB1dCxcblx0d2ViU3RyZWFtOiB2YWx1ZSA9PiBpc1dyaXRhYmxlU3RyZWFtKHZhbHVlKSA/ICdvdXRwdXQnIDogJ2lucHV0Jyxcblx0bm9kZVN0cmVhbSh2YWx1ZSkge1xuXHRcdGlmICghaXNOb2RlUmVhZGFibGVTdHJlYW0odmFsdWUsIHtjaGVja09wZW46IGZhbHNlfSkpIHtcblx0XHRcdHJldHVybiAnb3V0cHV0Jztcblx0XHR9XG5cblx0XHRyZXR1cm4gaXNOb2RlV3JpdGFibGVTdHJlYW0odmFsdWUsIHtjaGVja09wZW46IGZhbHNlfSkgPyB1bmRlZmluZWQgOiAnaW5wdXQnO1xuXHR9LFxuXHR3ZWJUcmFuc2Zvcm06IGFueURpcmVjdGlvbixcblx0ZHVwbGV4OiBhbnlEaXJlY3Rpb24sXG5cdG5hdGl2ZSh2YWx1ZSkge1xuXHRcdGNvbnN0IHN0YW5kYXJkU3RyZWFtRGlyZWN0aW9uID0gZ2V0U3RhbmRhcmRTdHJlYW1EaXJlY3Rpb24odmFsdWUpO1xuXHRcdGlmIChzdGFuZGFyZFN0cmVhbURpcmVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gc3RhbmRhcmRTdHJlYW1EaXJlY3Rpb247XG5cdFx0fVxuXG5cdFx0aWYgKGlzTm9kZVN0cmVhbSh2YWx1ZSwge2NoZWNrT3BlbjogZmFsc2V9KSkge1xuXHRcdFx0cmV0dXJuIGd1ZXNzU3RyZWFtRGlyZWN0aW9uLm5vZGVTdHJlYW0odmFsdWUpO1xuXHRcdH1cblx0fSxcbn07XG5cbmNvbnN0IGdldFN0YW5kYXJkU3RyZWFtRGlyZWN0aW9uID0gdmFsdWUgPT4ge1xuXHRpZiAoWzAsIHByb2Nlc3Muc3RkaW5dLmluY2x1ZGVzKHZhbHVlKSkge1xuXHRcdHJldHVybiAnaW5wdXQnO1xuXHR9XG5cblx0aWYgKFsxLCAyLCBwcm9jZXNzLnN0ZG91dCwgcHJvY2Vzcy5zdGRlcnJdLmluY2x1ZGVzKHZhbHVlKSkge1xuXHRcdHJldHVybiAnb3V0cHV0Jztcblx0fVxufTtcblxuLy8gV2hlbiBhbWJpZ3VvdXMsIHdlIGluaXRpYWxseSBrZWVwIHRoZSBkaXJlY3Rpb24gYXMgYHVuZGVmaW5lZGAuXG4vLyBUaGlzIGFsbG93cyBhcnJheXMgb2YgYHN0ZGlvYCB2YWx1ZXMgdG8gcmVzb2x2ZSB0aGUgYW1iaWd1aXR5LlxuLy8gRm9yIGV4YW1wbGUsIGBzdGRpb1szXTogRHVwbGV4U3RyZWFtYCBpcyBhbWJpZ3VvdXMsIGJ1dCBgc3RkaW9bM106IFtEdXBsZXhTdHJlYW0sIFdyaXRhYmxlU3RyZWFtXWAgaXMgbm90LlxuLy8gV2hlbiB0aGUgYW1iaWd1aXR5IHJlbWFpbnMsIHdlIGRlZmF1bHQgdG8gYG91dHB1dGAgc2luY2UgaXQgaXMgdGhlIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciBhZGRpdGlvbmFsIGZpbGUgZGVzY3JpcHRvcnMuXG5jb25zdCBERUZBVUxUX0RJUkVDVElPTiA9ICdvdXRwdXQnO1xuIiwgIi8vIFRoZSBgaXBjYCBvcHRpb24gYWRkcyBhbiBgaXBjYCBpdGVtIHRvIHRoZSBgc3RkaW9gIG9wdGlvblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUlwY1N0ZGlvQXJyYXkgPSAoc3RkaW9BcnJheSwgaXBjKSA9PiBpcGMgJiYgIXN0ZGlvQXJyYXkuaW5jbHVkZXMoJ2lwYycpXG5cdD8gWy4uLnN0ZGlvQXJyYXksICdpcGMnXVxuXHQ6IHN0ZGlvQXJyYXk7XG4iLCAiaW1wb3J0IHtTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVN9IGZyb20gJy4uL3V0aWxzL3N0YW5kYXJkLXN0cmVhbS5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZUlwY1N0ZGlvQXJyYXl9IGZyb20gJy4uL2lwYy9hcnJheS5qcyc7XG5pbXBvcnQge2lzRnVsbFZlcmJvc2V9IGZyb20gJy4uL3ZlcmJvc2UvdmFsdWVzLmpzJztcblxuLy8gQWRkIHN1cHBvcnQgZm9yIGBzdGRpbmAvYHN0ZG91dGAvYHN0ZGVycmAgYXMgYW4gYWxpYXMgZm9yIGBzdGRpb2AuXG4vLyBBbHNvIG5vcm1hbGl6ZSB0aGUgYHN0ZGlvYCBvcHRpb24uXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplU3RkaW9PcHRpb24gPSAoe3N0ZGlvLCBpcGMsIGJ1ZmZlciwgLi4ub3B0aW9uc30sIHZlcmJvc2VJbmZvLCBpc1N5bmMpID0+IHtcblx0Y29uc3Qgc3RkaW9BcnJheSA9IGdldFN0ZGlvQXJyYXkoc3RkaW8sIG9wdGlvbnMpLm1hcCgoc3RkaW9PcHRpb24sIGZkTnVtYmVyKSA9PiBhZGREZWZhdWx0VmFsdWUoc3RkaW9PcHRpb24sIGZkTnVtYmVyKSk7XG5cdHJldHVybiBpc1N5bmNcblx0XHQ/IG5vcm1hbGl6ZVN0ZGlvU3luYyhzdGRpb0FycmF5LCBidWZmZXIsIHZlcmJvc2VJbmZvKVxuXHRcdDogbm9ybWFsaXplSXBjU3RkaW9BcnJheShzdGRpb0FycmF5LCBpcGMpO1xufTtcblxuY29uc3QgZ2V0U3RkaW9BcnJheSA9IChzdGRpbywgb3B0aW9ucykgPT4ge1xuXHRpZiAoc3RkaW8gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMubWFwKGFsaWFzID0+IG9wdGlvbnNbYWxpYXNdKTtcblx0fVxuXG5cdGlmIChoYXNBbGlhcyhvcHRpb25zKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgSXQncyBub3QgcG9zc2libGUgdG8gcHJvdmlkZSBcXGBzdGRpb1xcYCBpbiBjb21iaW5hdGlvbiB3aXRoIG9uZSBvZiAke1NUQU5EQVJEX1NUUkVBTVNfQUxJQVNFUy5tYXAoYWxpYXMgPT4gYFxcYCR7YWxpYXN9XFxgYCkuam9pbignLCAnKX1gKTtcblx0fVxuXG5cdGlmICh0eXBlb2Ygc3RkaW8gPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIFtzdGRpbywgc3RkaW8sIHN0ZGlvXTtcblx0fVxuXG5cdGlmICghQXJyYXkuaXNBcnJheShzdGRpbykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBcXGBzdGRpb1xcYCB0byBiZSBvZiB0eXBlIFxcYHN0cmluZ1xcYCBvciBcXGBBcnJheVxcYCwgZ290IFxcYCR7dHlwZW9mIHN0ZGlvfVxcYGApO1xuXHR9XG5cblx0Y29uc3QgbGVuZ3RoID0gTWF0aC5tYXgoc3RkaW8ubGVuZ3RoLCBTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMubGVuZ3RoKTtcblx0cmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aH0sIChfLCBmZE51bWJlcikgPT4gc3RkaW9bZmROdW1iZXJdKTtcbn07XG5cbmNvbnN0IGhhc0FsaWFzID0gb3B0aW9ucyA9PiBTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMuc29tZShhbGlhcyA9PiBvcHRpb25zW2FsaWFzXSAhPT0gdW5kZWZpbmVkKTtcblxuY29uc3QgYWRkRGVmYXVsdFZhbHVlID0gKHN0ZGlvT3B0aW9uLCBmZE51bWJlcikgPT4ge1xuXHRpZiAoQXJyYXkuaXNBcnJheShzdGRpb09wdGlvbikpIHtcblx0XHRyZXR1cm4gc3RkaW9PcHRpb24ubWFwKGl0ZW0gPT4gYWRkRGVmYXVsdFZhbHVlKGl0ZW0sIGZkTnVtYmVyKSk7XG5cdH1cblxuXHRpZiAoc3RkaW9PcHRpb24gPT09IG51bGwgfHwgc3RkaW9PcHRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBmZE51bWJlciA+PSBTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMubGVuZ3RoID8gJ2lnbm9yZScgOiAncGlwZSc7XG5cdH1cblxuXHRyZXR1cm4gc3RkaW9PcHRpb247XG59O1xuXG4vLyBVc2luZyBgYnVmZmVyOiBmYWxzZWAgd2l0aCBzeW5jaHJvbm91cyBtZXRob2RzIGltcGxpZXMgYHN0ZG91dGAvYHN0ZGVycmA6IGBpZ25vcmVgLlxuLy8gVW5sZXNzIHRoZSBvdXRwdXQgaXMgbmVlZGVkLCBlLmcuIGR1ZSB0byBgdmVyYm9zZTogJ2Z1bGwnYCBvciB0byByZWRpcmVjdGluZyB0byBhIGZpbGUuXG5jb25zdCBub3JtYWxpemVTdGRpb1N5bmMgPSAoc3RkaW9BcnJheSwgYnVmZmVyLCB2ZXJib3NlSW5mbykgPT4gc3RkaW9BcnJheS5tYXAoKHN0ZGlvT3B0aW9uLCBmZE51bWJlcikgPT5cblx0IWJ1ZmZlcltmZE51bWJlcl1cblx0JiYgZmROdW1iZXIgIT09IDBcblx0JiYgIWlzRnVsbFZlcmJvc2UodmVyYm9zZUluZm8sIGZkTnVtYmVyKVxuXHQmJiBpc091dHB1dFBpcGVPbmx5KHN0ZGlvT3B0aW9uKVxuXHRcdD8gJ2lnbm9yZSdcblx0XHQ6IHN0ZGlvT3B0aW9uKTtcblxuY29uc3QgaXNPdXRwdXRQaXBlT25seSA9IHN0ZGlvT3B0aW9uID0+IHN0ZGlvT3B0aW9uID09PSAncGlwZSdcblx0fHwgKEFycmF5LmlzQXJyYXkoc3RkaW9PcHRpb24pICYmIHN0ZGlvT3B0aW9uLmV2ZXJ5KGl0ZW0gPT4gaXRlbSA9PT0gJ3BpcGUnKSk7XG4iLCAiaW1wb3J0IHtyZWFkRmlsZVN5bmN9IGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHR0eSBmcm9tICdub2RlOnR0eSc7XG5pbXBvcnQge2lzU3RyZWFtIGFzIGlzTm9kZVN0cmVhbX0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCB7U1RBTkRBUkRfU1RSRUFNU30gZnJvbSAnLi4vdXRpbHMvc3RhbmRhcmQtc3RyZWFtLmpzJztcbmltcG9ydCB7YnVmZmVyVG9VaW50OEFycmF5fSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcbmltcG9ydCB7c2VyaWFsaXplT3B0aW9uVmFsdWV9IGZyb20gJy4uL2FyZ3VtZW50cy9mZC1vcHRpb25zLmpzJztcblxuLy8gV2hlbiB3ZSB1c2UgbXVsdGlwbGUgYHN0ZGlvYCB2YWx1ZXMgZm9yIHRoZSBzYW1lIHN0cmVhbXMsIHdlIHBhc3MgJ3BpcGUnIHRvIGBjaGlsZF9wcm9jZXNzLnNwYXduKClgLlxuLy8gV2UgdGhlbiBlbXVsYXRlIHRoZSBwaXBpbmcgZG9uZSBieSBjb3JlIE5vZGUuanMuXG4vLyBUbyBkbyBzbywgd2UgdHJhbnNmb3JtIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuLy8gIC0gTm9kZS5qcyBzdHJlYW1zIGFyZSBtYXJrZWQgYXMgYHR5cGU6IG5vZGVTdHJlYW1gXG4vLyAgLSAnaW5oZXJpdCcgYmVjb21lcyBgcHJvY2Vzcy5zdGRpbnxzdGRvdXR8c3RkZXJyYFxuLy8gIC0gYW55IGZpbGUgZGVzY3JpcHRvciBpbnRlZ2VyIGJlY29tZXMgYHByb2Nlc3Muc3RkaW9bZmROdW1iZXJdYFxuLy8gQWxsIG9mIHRoZSBhYm92ZSB0cmFuc2Zvcm1hdGlvbnMgdGVsbCBFeGVjYSB0byBwZXJmb3JtIG1hbnVhbCBwaXBpbmcuXG5leHBvcnQgY29uc3QgaGFuZGxlTmF0aXZlU3RyZWFtID0gKHtzdGRpb0l0ZW0sIHN0ZGlvSXRlbToge3R5cGV9LCBpc1N0ZGlvQXJyYXksIGZkTnVtYmVyLCBkaXJlY3Rpb24sIGlzU3luY30pID0+IHtcblx0aWYgKCFpc1N0ZGlvQXJyYXkgfHwgdHlwZSAhPT0gJ25hdGl2ZScpIHtcblx0XHRyZXR1cm4gc3RkaW9JdGVtO1xuXHR9XG5cblx0cmV0dXJuIGlzU3luY1xuXHRcdD8gaGFuZGxlTmF0aXZlU3RyZWFtU3luYyh7c3RkaW9JdGVtLCBmZE51bWJlciwgZGlyZWN0aW9ufSlcblx0XHQ6IGhhbmRsZU5hdGl2ZVN0cmVhbUFzeW5jKHtzdGRpb0l0ZW0sIGZkTnVtYmVyfSk7XG59O1xuXG4vLyBTeW5jaHJvbm91cyBtZXRob2RzIHVzZSBhIGRpZmZlcmVudCBsb2dpYy5cbi8vICdpbmhlcml0JywgZmlsZSBkZXNjcmlwdG9ycyBhbmQgcHJvY2Vzcy5zdGQqIGFyZSBoYW5kbGVkIGJ5IHJlYWRGaWxlU3luYygpL3dyaXRlRmlsZVN5bmMoKS5cbmNvbnN0IGhhbmRsZU5hdGl2ZVN0cmVhbVN5bmMgPSAoe3N0ZGlvSXRlbSwgc3RkaW9JdGVtOiB7dmFsdWUsIG9wdGlvbk5hbWV9LCBmZE51bWJlciwgZGlyZWN0aW9ufSkgPT4ge1xuXHRjb25zdCB0YXJnZXRGZCA9IGdldFRhcmdldEZkKHtcblx0XHR2YWx1ZSxcblx0XHRvcHRpb25OYW1lLFxuXHRcdGZkTnVtYmVyLFxuXHRcdGRpcmVjdGlvbixcblx0fSk7XG5cdGlmICh0YXJnZXRGZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHRhcmdldEZkO1xuXHR9XG5cblx0aWYgKGlzTm9kZVN0cmVhbSh2YWx1ZSwge2NoZWNrT3BlbjogZmFsc2V9KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9OiBTdHJlYW1cXGAgb3B0aW9uIGNhbm5vdCBib3RoIGJlIGFuIGFycmF5IGFuZCBpbmNsdWRlIGEgc3RyZWFtIHdpdGggc3luY2hyb25vdXMgbWV0aG9kcy5gKTtcblx0fVxuXG5cdHJldHVybiBzdGRpb0l0ZW07XG59O1xuXG5jb25zdCBnZXRUYXJnZXRGZCA9ICh7dmFsdWUsIG9wdGlvbk5hbWUsIGZkTnVtYmVyLCBkaXJlY3Rpb259KSA9PiB7XG5cdGNvbnN0IHRhcmdldEZkTnVtYmVyID0gZ2V0VGFyZ2V0RmROdW1iZXIodmFsdWUsIGZkTnVtYmVyKTtcblx0aWYgKHRhcmdldEZkTnVtYmVyID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoZGlyZWN0aW9uID09PSAnb3V0cHV0Jykge1xuXHRcdHJldHVybiB7dHlwZTogJ2ZpbGVOdW1iZXInLCB2YWx1ZTogdGFyZ2V0RmROdW1iZXIsIG9wdGlvbk5hbWV9O1xuXHR9XG5cblx0aWYgKHR0eS5pc2F0dHkodGFyZ2V0RmROdW1iZXIpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX06ICR7c2VyaWFsaXplT3B0aW9uVmFsdWUodmFsdWUpfVxcYCBvcHRpb24gaXMgaW52YWxpZDogaXQgY2Fubm90IGJlIGEgVFRZIHdpdGggc3luY2hyb25vdXMgbWV0aG9kcy5gKTtcblx0fVxuXG5cdHJldHVybiB7dHlwZTogJ3VpbnQ4QXJyYXknLCB2YWx1ZTogYnVmZmVyVG9VaW50OEFycmF5KHJlYWRGaWxlU3luYyh0YXJnZXRGZE51bWJlcikpLCBvcHRpb25OYW1lfTtcbn07XG5cbmNvbnN0IGdldFRhcmdldEZkTnVtYmVyID0gKHZhbHVlLCBmZE51bWJlcikgPT4ge1xuXHRpZiAodmFsdWUgPT09ICdpbmhlcml0Jykge1xuXHRcdHJldHVybiBmZE51bWJlcjtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Y29uc3Qgc3RhbmRhcmRTdHJlYW1JbmRleCA9IFNUQU5EQVJEX1NUUkVBTVMuaW5kZXhPZih2YWx1ZSk7XG5cdGlmIChzdGFuZGFyZFN0cmVhbUluZGV4ICE9PSAtMSkge1xuXHRcdHJldHVybiBzdGFuZGFyZFN0cmVhbUluZGV4O1xuXHR9XG59O1xuXG5jb25zdCBoYW5kbGVOYXRpdmVTdHJlYW1Bc3luYyA9ICh7c3RkaW9JdGVtLCBzdGRpb0l0ZW06IHt2YWx1ZSwgb3B0aW9uTmFtZX0sIGZkTnVtYmVyfSkgPT4ge1xuXHRpZiAodmFsdWUgPT09ICdpbmhlcml0Jykge1xuXHRcdHJldHVybiB7dHlwZTogJ25vZGVTdHJlYW0nLCB2YWx1ZTogZ2V0U3RhbmRhcmRTdHJlYW0oZmROdW1iZXIsIHZhbHVlLCBvcHRpb25OYW1lKSwgb3B0aW9uTmFtZX07XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdHJldHVybiB7dHlwZTogJ25vZGVTdHJlYW0nLCB2YWx1ZTogZ2V0U3RhbmRhcmRTdHJlYW0odmFsdWUsIHZhbHVlLCBvcHRpb25OYW1lKSwgb3B0aW9uTmFtZX07XG5cdH1cblxuXHRpZiAoaXNOb2RlU3RyZWFtKHZhbHVlLCB7Y2hlY2tPcGVuOiBmYWxzZX0pKSB7XG5cdFx0cmV0dXJuIHt0eXBlOiAnbm9kZVN0cmVhbScsIHZhbHVlLCBvcHRpb25OYW1lfTtcblx0fVxuXG5cdHJldHVybiBzdGRpb0l0ZW07XG59O1xuXG4vLyBOb2RlLmpzIGRvZXMgbm90IGFsbG93IHRvIGVhc2lseSByZXRyaWV2ZSBmaWxlIGRlc2NyaXB0b3JzIGJleW9uZCBzdGRpbi9zdGRvdXQvc3RkZXJyIGFzIHN0cmVhbXMuXG4vLyAgLSBgZnMuY3JlYXRlUmVhZFN0cmVhbSgpYC9gZnMuY3JlYXRlV3JpdGVTdHJlYW0oKWAgd2l0aCB0aGUgYGZkYCBvcHRpb24gZG8gbm90IHdvcmsgd2l0aCBjaGFyYWN0ZXIgZGV2aWNlcyB0aGF0IHVzZSBibG9ja2luZyByZWFkcy93cml0ZXMgKHN1Y2ggYXMgaW50ZXJhY3RpdmUgVFRZcykuXG4vLyAgLSBVc2luZyBhIFRDUCBgU29ja2V0YCB3b3VsZCB3b3JrIGJ1dCBiZSByYXRoZXIgY29tcGxleCB0byBpbXBsZW1lbnQuXG4vLyBTaW5jZSB0aGlzIGlzIGFuIGVkZ2UgY2FzZSwgd2Ugc2ltcGx5IHRocm93IGFuIGVycm9yIG1lc3NhZ2UuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9leGVjYS9wdWxsLzY0MyNkaXNjdXNzaW9uX3IxNDM1OTA1NzA3XG5jb25zdCBnZXRTdGFuZGFyZFN0cmVhbSA9IChmZE51bWJlciwgdmFsdWUsIG9wdGlvbk5hbWUpID0+IHtcblx0Y29uc3Qgc3RhbmRhcmRTdHJlYW0gPSBTVEFOREFSRF9TVFJFQU1TW2ZkTnVtYmVyXTtcblxuXHRpZiAoc3RhbmRhcmRTdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9OiAke3ZhbHVlfVxcYCBvcHRpb24gaXMgaW52YWxpZDogbm8gc3VjaCBzdGFuZGFyZCBzdHJlYW0uYCk7XG5cdH1cblxuXHRyZXR1cm4gc3RhbmRhcmRTdHJlYW07XG59O1xuIiwgImltcG9ydCB7aXNSZWFkYWJsZVN0cmVhbX0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCB7aXNVaW50OEFycmF5fSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcbmltcG9ydCB7aXNVcmwsIGlzRmlsZVBhdGhTdHJpbmd9IGZyb20gJy4vdHlwZS5qcyc7XG5cbi8vIEFwcGVuZCB0aGUgYHN0ZGluYCBvcHRpb24gd2l0aCB0aGUgYGlucHV0YCBhbmQgYGlucHV0RmlsZWAgb3B0aW9uc1xuZXhwb3J0IGNvbnN0IGhhbmRsZUlucHV0T3B0aW9ucyA9ICh7aW5wdXQsIGlucHV0RmlsZX0sIGZkTnVtYmVyKSA9PiBmZE51bWJlciA9PT0gMFxuXHQ/IFtcblx0XHQuLi5oYW5kbGVJbnB1dE9wdGlvbihpbnB1dCksXG5cdFx0Li4uaGFuZGxlSW5wdXRGaWxlT3B0aW9uKGlucHV0RmlsZSksXG5cdF1cblx0OiBbXTtcblxuY29uc3QgaGFuZGxlSW5wdXRPcHRpb24gPSBpbnB1dCA9PiBpbnB1dCA9PT0gdW5kZWZpbmVkID8gW10gOiBbe1xuXHR0eXBlOiBnZXRJbnB1dFR5cGUoaW5wdXQpLFxuXHR2YWx1ZTogaW5wdXQsXG5cdG9wdGlvbk5hbWU6ICdpbnB1dCcsXG59XTtcblxuY29uc3QgZ2V0SW5wdXRUeXBlID0gaW5wdXQgPT4ge1xuXHRpZiAoaXNSZWFkYWJsZVN0cmVhbShpbnB1dCwge2NoZWNrT3BlbjogZmFsc2V9KSkge1xuXHRcdHJldHVybiAnbm9kZVN0cmVhbSc7XG5cdH1cblxuXHRpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiAnc3RyaW5nJztcblx0fVxuXG5cdGlmIChpc1VpbnQ4QXJyYXkoaW5wdXQpKSB7XG5cdFx0cmV0dXJuICd1aW50OEFycmF5Jztcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcignVGhlIGBpbnB1dGAgb3B0aW9uIG11c3QgYmUgYSBzdHJpbmcsIGEgVWludDhBcnJheSBvciBhIE5vZGUuanMgUmVhZGFibGUgc3RyZWFtLicpO1xufTtcblxuY29uc3QgaGFuZGxlSW5wdXRGaWxlT3B0aW9uID0gaW5wdXRGaWxlID0+IGlucHV0RmlsZSA9PT0gdW5kZWZpbmVkID8gW10gOiBbe1xuXHQuLi5nZXRJbnB1dEZpbGVUeXBlKGlucHV0RmlsZSksXG5cdG9wdGlvbk5hbWU6ICdpbnB1dEZpbGUnLFxufV07XG5cbmNvbnN0IGdldElucHV0RmlsZVR5cGUgPSBpbnB1dEZpbGUgPT4ge1xuXHRpZiAoaXNVcmwoaW5wdXRGaWxlKSkge1xuXHRcdHJldHVybiB7dHlwZTogJ2ZpbGVVcmwnLCB2YWx1ZTogaW5wdXRGaWxlfTtcblx0fVxuXG5cdGlmIChpc0ZpbGVQYXRoU3RyaW5nKGlucHV0RmlsZSkpIHtcblx0XHRyZXR1cm4ge3R5cGU6ICdmaWxlUGF0aCcsIHZhbHVlOiB7ZmlsZTogaW5wdXRGaWxlfX07XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgaW5wdXRGaWxlYCBvcHRpb24gbXVzdCBiZSBhIGZpbGUgcGF0aCBzdHJpbmcgb3IgYSBmaWxlIFVSTC4nKTtcbn07XG4iLCAiaW1wb3J0IHtcblx0U1BFQ0lBTF9EVVBMSUNBVEVfVFlQRVNfU1lOQyxcblx0U1BFQ0lBTF9EVVBMSUNBVEVfVFlQRVMsXG5cdEZPUkJJRF9EVVBMSUNBVEVfVFlQRVMsXG5cdFRZUEVfVE9fTUVTU0FHRSxcbn0gZnJvbSAnLi90eXBlLmpzJztcblxuLy8gRHVwbGljYXRlcyBpbiB0aGUgc2FtZSBmaWxlIGRlc2NyaXB0b3IgaXMgbW9zdCBsaWtlbHkgYW4gZXJyb3IuXG4vLyBIb3dldmVyLCB0aGlzIGNhbiBiZSB1c2VmdWwgd2l0aCBnZW5lcmF0b3JzLlxuZXhwb3J0IGNvbnN0IGZpbHRlckR1cGxpY2F0ZXMgPSBzdGRpb0l0ZW1zID0+IHN0ZGlvSXRlbXMuZmlsdGVyKChzdGRpb0l0ZW1PbmUsIGluZGV4T25lKSA9PlxuXHRzdGRpb0l0ZW1zLmV2ZXJ5KChzdGRpb0l0ZW1Ud28sIGluZGV4VHdvKSA9PiBzdGRpb0l0ZW1PbmUudmFsdWUgIT09IHN0ZGlvSXRlbVR3by52YWx1ZVxuXHRcdHx8IGluZGV4T25lID49IGluZGV4VHdvXG5cdFx0fHwgc3RkaW9JdGVtT25lLnR5cGUgPT09ICdnZW5lcmF0b3InXG5cdFx0fHwgc3RkaW9JdGVtT25lLnR5cGUgPT09ICdhc3luY0dlbmVyYXRvcicpKTtcblxuLy8gQ2hlY2sgaWYgdHdvIGZpbGUgZGVzY3JpcHRvcnMgYXJlIHNoYXJpbmcgdGhlIHNhbWUgdGFyZ2V0LlxuLy8gRm9yIGV4YW1wbGUgYHtzdGRvdXQ6IHtmaWxlOiAnLi9vdXRwdXQudHh0J30sIHN0ZGVycjoge2ZpbGU6ICcuL291dHB1dC50eHQnfX1gLlxuZXhwb3J0IGNvbnN0IGdldER1cGxpY2F0ZVN0cmVhbSA9ICh7c3RkaW9JdGVtOiB7dHlwZSwgdmFsdWUsIG9wdGlvbk5hbWV9LCBkaXJlY3Rpb24sIGZpbGVEZXNjcmlwdG9ycywgaXNTeW5jfSkgPT4ge1xuXHRjb25zdCBvdGhlclN0ZGlvSXRlbXMgPSBnZXRPdGhlclN0ZGlvSXRlbXMoZmlsZURlc2NyaXB0b3JzLCB0eXBlKTtcblx0aWYgKG90aGVyU3RkaW9JdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoaXNTeW5jKSB7XG5cdFx0dmFsaWRhdGVEdXBsaWNhdGVTdHJlYW1TeW5jKHtcblx0XHRcdG90aGVyU3RkaW9JdGVtcyxcblx0XHRcdHR5cGUsXG5cdFx0XHR2YWx1ZSxcblx0XHRcdG9wdGlvbk5hbWUsXG5cdFx0XHRkaXJlY3Rpb24sXG5cdFx0fSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFNQRUNJQUxfRFVQTElDQVRFX1RZUEVTLmhhcyh0eXBlKSkge1xuXHRcdHJldHVybiBnZXREdXBsaWNhdGVTdHJlYW1JbnN0YW5jZSh7XG5cdFx0XHRvdGhlclN0ZGlvSXRlbXMsXG5cdFx0XHR0eXBlLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRvcHRpb25OYW1lLFxuXHRcdFx0ZGlyZWN0aW9uLFxuXHRcdH0pO1xuXHR9XG5cblx0aWYgKEZPUkJJRF9EVVBMSUNBVEVfVFlQRVMuaGFzKHR5cGUpKSB7XG5cdFx0dmFsaWRhdGVEdXBsaWNhdGVUcmFuc2Zvcm0oe1xuXHRcdFx0b3RoZXJTdGRpb0l0ZW1zLFxuXHRcdFx0dHlwZSxcblx0XHRcdHZhbHVlLFxuXHRcdFx0b3B0aW9uTmFtZSxcblx0XHR9KTtcblx0fVxufTtcblxuLy8gVmFsdWVzIHNoYXJlZCBieSBtdWx0aXBsZSBmaWxlIGRlc2NyaXB0b3JzXG5jb25zdCBnZXRPdGhlclN0ZGlvSXRlbXMgPSAoZmlsZURlc2NyaXB0b3JzLCB0eXBlKSA9PiBmaWxlRGVzY3JpcHRvcnNcblx0LmZsYXRNYXAoKHtkaXJlY3Rpb24sIHN0ZGlvSXRlbXN9KSA9PiBzdGRpb0l0ZW1zXG5cdFx0LmZpbHRlcihzdGRpb0l0ZW0gPT4gc3RkaW9JdGVtLnR5cGUgPT09IHR5cGUpXG5cdFx0Lm1hcCgoc3RkaW9JdGVtID0+ICh7Li4uc3RkaW9JdGVtLCBkaXJlY3Rpb259KSkpKTtcblxuLy8gV2l0aCBgZXhlY2FTeW5jKClgLCBkbyBub3QgYWxsb3cgc2V0dGluZyBhIGZpbGUgcGF0aCBib3RoIGluIGlucHV0IGFuZCBvdXRwdXRcbmNvbnN0IHZhbGlkYXRlRHVwbGljYXRlU3RyZWFtU3luYyA9ICh7b3RoZXJTdGRpb0l0ZW1zLCB0eXBlLCB2YWx1ZSwgb3B0aW9uTmFtZSwgZGlyZWN0aW9ufSkgPT4ge1xuXHRpZiAoU1BFQ0lBTF9EVVBMSUNBVEVfVFlQRVNfU1lOQy5oYXModHlwZSkpIHtcblx0XHRnZXREdXBsaWNhdGVTdHJlYW1JbnN0YW5jZSh7XG5cdFx0XHRvdGhlclN0ZGlvSXRlbXMsXG5cdFx0XHR0eXBlLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRvcHRpb25OYW1lLFxuXHRcdFx0ZGlyZWN0aW9uLFxuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyBXaGVuIHR3byBmaWxlIGRlc2NyaXB0b3JzIHNoYXJlIHRoZSBmaWxlIG9yIHN0cmVhbSwgd2UgbmVlZCB0byByZS11c2UgdGhlIHNhbWUgdW5kZXJseWluZyBzdHJlYW0uXG4vLyBPdGhlcndpc2UsIHRoZSBzdHJlYW0gd291bGQgYmUgY2xvc2VkIHR3aWNlIHdoZW4gcGlwaW5nIGVuZHMuXG4vLyBUaGlzIGlzIG9ubHkgYW4gaXNzdWUgd2l0aCBvdXRwdXQgZmlsZSBkZXNjcmlwdG9ycy5cbi8vIFRoaXMgaXMgbm90IGEgcHJvYmxlbSB3aXRoIGdlbmVyYXRvciBmdW5jdGlvbnMgc2luY2UgdGhvc2UgY3JlYXRlIGEgbmV3IGluc3RhbmNlIGZvciBlYWNoIGZpbGUgZGVzY3JpcHRvci5cbi8vIFdlIGFsc28gZm9yYmlkIGlucHV0IGFuZCBvdXRwdXQgZmlsZSBkZXNjcmlwdG9ycyBzaGFyaW5nIHRoZSBzYW1lIGZpbGUgb3Igc3RyZWFtLCBzaW5jZSB0aGF0IGRvZXMgbm90IG1ha2Ugc2Vuc2UuXG5jb25zdCBnZXREdXBsaWNhdGVTdHJlYW1JbnN0YW5jZSA9ICh7b3RoZXJTdGRpb0l0ZW1zLCB0eXBlLCB2YWx1ZSwgb3B0aW9uTmFtZSwgZGlyZWN0aW9ufSkgPT4ge1xuXHRjb25zdCBkdXBsaWNhdGVTdGRpb0l0ZW1zID0gb3RoZXJTdGRpb0l0ZW1zLmZpbHRlcihzdGRpb0l0ZW0gPT4gaGFzU2FtZVZhbHVlKHN0ZGlvSXRlbSwgdmFsdWUpKTtcblx0aWYgKGR1cGxpY2F0ZVN0ZGlvSXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZGlmZmVyZW50U3RkaW9JdGVtID0gZHVwbGljYXRlU3RkaW9JdGVtcy5maW5kKHN0ZGlvSXRlbSA9PiBzdGRpb0l0ZW0uZGlyZWN0aW9uICE9PSBkaXJlY3Rpb24pO1xuXHR0aHJvd09uRHVwbGljYXRlU3RyZWFtKGRpZmZlcmVudFN0ZGlvSXRlbSwgb3B0aW9uTmFtZSwgdHlwZSk7XG5cblx0cmV0dXJuIGRpcmVjdGlvbiA9PT0gJ291dHB1dCcgPyBkdXBsaWNhdGVTdGRpb0l0ZW1zWzBdLnN0cmVhbSA6IHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IGhhc1NhbWVWYWx1ZSA9ICh7dHlwZSwgdmFsdWV9LCBzZWNvbmRWYWx1ZSkgPT4ge1xuXHRpZiAodHlwZSA9PT0gJ2ZpbGVQYXRoJykge1xuXHRcdHJldHVybiB2YWx1ZS5maWxlID09PSBzZWNvbmRWYWx1ZS5maWxlO1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICdmaWxlVXJsJykge1xuXHRcdHJldHVybiB2YWx1ZS5ocmVmID09PSBzZWNvbmRWYWx1ZS5ocmVmO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlID09PSBzZWNvbmRWYWx1ZTtcbn07XG5cbi8vIFdlIGRvIG5vdCBhbGxvdyB0d28gZmlsZSBkZXNjcmlwdG9ycyB0byBzaGFyZSB0aGUgc2FtZSBEdXBsZXggb3IgVHJhbnNmb3JtU3RyZWFtLlxuLy8gVGhpcyBpcyBiZWNhdXNlIHRob3NlIGFyZSBzZXQgZGlyZWN0bHkgdG8gYHN1YnByb2Nlc3Muc3RkKmAuXG4vLyBGb3IgZXhhbXBsZSwgdGhpcyBjb3VsZCByZXN1bHQgaW4gYHN1YnByb2Nlc3Muc3Rkb3V0YCBhbmQgYHN1YnByb2Nlc3Muc3RkZXJyYCBiZWluZyB0aGUgc2FtZSB2YWx1ZS5cbi8vIFRoaXMgbWVhbnMgcmVhZGluZyBmcm9tIGVpdGhlciB3b3VsZCBnZXQgZGF0YSBmcm9tIGJvdGggc3Rkb3V0IGFuZCBzdGRlcnIuXG5jb25zdCB2YWxpZGF0ZUR1cGxpY2F0ZVRyYW5zZm9ybSA9ICh7b3RoZXJTdGRpb0l0ZW1zLCB0eXBlLCB2YWx1ZSwgb3B0aW9uTmFtZX0pID0+IHtcblx0Y29uc3QgZHVwbGljYXRlU3RkaW9JdGVtID0gb3RoZXJTdGRpb0l0ZW1zLmZpbmQoKHt2YWx1ZToge3RyYW5zZm9ybX19KSA9PiB0cmFuc2Zvcm0gPT09IHZhbHVlLnRyYW5zZm9ybSk7XG5cdHRocm93T25EdXBsaWNhdGVTdHJlYW0oZHVwbGljYXRlU3RkaW9JdGVtLCBvcHRpb25OYW1lLCB0eXBlKTtcbn07XG5cbmNvbnN0IHRocm93T25EdXBsaWNhdGVTdHJlYW0gPSAoc3RkaW9JdGVtLCBvcHRpb25OYW1lLCB0eXBlKSA9PiB7XG5cdGlmIChzdGRpb0l0ZW0gIT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke3N0ZGlvSXRlbS5vcHRpb25OYW1lfVxcYCBhbmQgXFxgJHtvcHRpb25OYW1lfVxcYCBvcHRpb25zIG11c3Qgbm90IHRhcmdldCAke1RZUEVfVE9fTUVTU0FHRVt0eXBlXX0gdGhhdCBpcyB0aGUgc2FtZS5gKTtcblx0fVxufTtcbiIsICJpbXBvcnQge2dldFN0cmVhbU5hbWUsIGlzU3RhbmRhcmRTdHJlYW19IGZyb20gJy4uL3V0aWxzL3N0YW5kYXJkLXN0cmVhbS5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZVRyYW5zZm9ybXN9IGZyb20gJy4uL3RyYW5zZm9ybS9ub3JtYWxpemUuanMnO1xuaW1wb3J0IHtnZXRGZE9iamVjdE1vZGV9IGZyb20gJy4uL3RyYW5zZm9ybS9vYmplY3QtbW9kZS5qcyc7XG5pbXBvcnQge1xuXHRnZXRTdGRpb0l0ZW1UeXBlLFxuXHRpc1JlZ3VsYXJVcmwsXG5cdGlzVW5rbm93blN0ZGlvU3RyaW5nLFxuXHRGSUxFX1RZUEVTLFxufSBmcm9tICcuL3R5cGUuanMnO1xuaW1wb3J0IHtnZXRTdHJlYW1EaXJlY3Rpb259IGZyb20gJy4vZGlyZWN0aW9uLmpzJztcbmltcG9ydCB7bm9ybWFsaXplU3RkaW9PcHRpb259IGZyb20gJy4vc3RkaW8tb3B0aW9uLmpzJztcbmltcG9ydCB7aGFuZGxlTmF0aXZlU3RyZWFtfSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQge2hhbmRsZUlucHV0T3B0aW9uc30gZnJvbSAnLi9pbnB1dC1vcHRpb24uanMnO1xuaW1wb3J0IHtmaWx0ZXJEdXBsaWNhdGVzLCBnZXREdXBsaWNhdGVTdHJlYW19IGZyb20gJy4vZHVwbGljYXRlLmpzJztcblxuLy8gSGFuZGxlIGBpbnB1dGAsIGBpbnB1dEZpbGVgLCBgc3RkaW5gLCBgc3Rkb3V0YCBhbmQgYHN0ZGVycmAgb3B0aW9ucywgYmVmb3JlIHNwYXduaW5nLCBpbiBhc3luYy9zeW5jIG1vZGVcbi8vIFRoZXkgYXJlIGNvbnZlcnRlZCBpbnRvIGFuIGFycmF5IG9mIGBmaWxlRGVzY3JpcHRvcnNgLlxuLy8gRWFjaCBgZmlsZURlc2NyaXB0b3JgIGlzIG5vcm1hbGl6ZWQsIHZhbGlkYXRlZCBhbmQgY29udGFpbnMgYWxsIGluZm9ybWF0aW9uIG5lY2Vzc2FyeSBmb3IgZnVydGhlciBoYW5kbGluZy5cbmV4cG9ydCBjb25zdCBoYW5kbGVTdGRpbyA9IChhZGRQcm9wZXJ0aWVzLCBvcHRpb25zLCB2ZXJib3NlSW5mbywgaXNTeW5jKSA9PiB7XG5cdGNvbnN0IHN0ZGlvID0gbm9ybWFsaXplU3RkaW9PcHRpb24ob3B0aW9ucywgdmVyYm9zZUluZm8sIGlzU3luYyk7XG5cdGNvbnN0IGluaXRpYWxGaWxlRGVzY3JpcHRvcnMgPSBzdGRpby5tYXAoKHN0ZGlvT3B0aW9uLCBmZE51bWJlcikgPT4gZ2V0RmlsZURlc2NyaXB0b3Ioe1xuXHRcdHN0ZGlvT3B0aW9uLFxuXHRcdGZkTnVtYmVyLFxuXHRcdG9wdGlvbnMsXG5cdFx0aXNTeW5jLFxuXHR9KSk7XG5cdGNvbnN0IGZpbGVEZXNjcmlwdG9ycyA9IGdldEZpbmFsRmlsZURlc2NyaXB0b3JzKHtcblx0XHRpbml0aWFsRmlsZURlc2NyaXB0b3JzLFxuXHRcdGFkZFByb3BlcnRpZXMsXG5cdFx0b3B0aW9ucyxcblx0XHRpc1N5bmMsXG5cdH0pO1xuXHRvcHRpb25zLnN0ZGlvID0gZmlsZURlc2NyaXB0b3JzLm1hcCgoe3N0ZGlvSXRlbXN9KSA9PiBmb3J3YXJkU3RkaW8oc3RkaW9JdGVtcykpO1xuXHRyZXR1cm4gZmlsZURlc2NyaXB0b3JzO1xufTtcblxuY29uc3QgZ2V0RmlsZURlc2NyaXB0b3IgPSAoe3N0ZGlvT3B0aW9uLCBmZE51bWJlciwgb3B0aW9ucywgaXNTeW5jfSkgPT4ge1xuXHRjb25zdCBvcHRpb25OYW1lID0gZ2V0U3RyZWFtTmFtZShmZE51bWJlcik7XG5cdGNvbnN0IHtzdGRpb0l0ZW1zOiBpbml0aWFsU3RkaW9JdGVtcywgaXNTdGRpb0FycmF5fSA9IGluaXRpYWxpemVTdGRpb0l0ZW1zKHtcblx0XHRzdGRpb09wdGlvbixcblx0XHRmZE51bWJlcixcblx0XHRvcHRpb25zLFxuXHRcdG9wdGlvbk5hbWUsXG5cdH0pO1xuXHRjb25zdCBkaXJlY3Rpb24gPSBnZXRTdHJlYW1EaXJlY3Rpb24oaW5pdGlhbFN0ZGlvSXRlbXMsIGZkTnVtYmVyLCBvcHRpb25OYW1lKTtcblx0Y29uc3Qgc3RkaW9JdGVtcyA9IGluaXRpYWxTdGRpb0l0ZW1zLm1hcChzdGRpb0l0ZW0gPT4gaGFuZGxlTmF0aXZlU3RyZWFtKHtcblx0XHRzdGRpb0l0ZW0sXG5cdFx0aXNTdGRpb0FycmF5LFxuXHRcdGZkTnVtYmVyLFxuXHRcdGRpcmVjdGlvbixcblx0XHRpc1N5bmMsXG5cdH0pKTtcblx0Y29uc3Qgbm9ybWFsaXplZFN0ZGlvSXRlbXMgPSBub3JtYWxpemVUcmFuc2Zvcm1zKHN0ZGlvSXRlbXMsIG9wdGlvbk5hbWUsIGRpcmVjdGlvbiwgb3B0aW9ucyk7XG5cdGNvbnN0IG9iamVjdE1vZGUgPSBnZXRGZE9iamVjdE1vZGUobm9ybWFsaXplZFN0ZGlvSXRlbXMsIGRpcmVjdGlvbik7XG5cdHZhbGlkYXRlRmlsZU9iamVjdE1vZGUobm9ybWFsaXplZFN0ZGlvSXRlbXMsIG9iamVjdE1vZGUpO1xuXHRyZXR1cm4ge2RpcmVjdGlvbiwgb2JqZWN0TW9kZSwgc3RkaW9JdGVtczogbm9ybWFsaXplZFN0ZGlvSXRlbXN9O1xufTtcblxuLy8gV2UgbWFrZSBzdXJlIHBhc3NpbmcgYW4gYXJyYXkgd2l0aCBhIHNpbmdsZSBpdGVtIGJlaGF2ZXMgdGhlIHNhbWUgYXMgcGFzc2luZyB0aGF0IGl0ZW0gd2l0aG91dCBhbiBhcnJheS5cbi8vIFRoaXMgaXMgd2hhdCB1c2VycyB3b3VsZCBleHBlY3QuXG4vLyBGb3IgZXhhbXBsZSwgYHN0ZG91dDogWydpZ25vcmUnXWAgYmVoYXZlcyB0aGUgc2FtZSBhcyBgc3Rkb3V0OiAnaWdub3JlJ2AuXG5jb25zdCBpbml0aWFsaXplU3RkaW9JdGVtcyA9ICh7c3RkaW9PcHRpb24sIGZkTnVtYmVyLCBvcHRpb25zLCBvcHRpb25OYW1lfSkgPT4ge1xuXHRjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHN0ZGlvT3B0aW9uKSA/IHN0ZGlvT3B0aW9uIDogW3N0ZGlvT3B0aW9uXTtcblx0Y29uc3QgaW5pdGlhbFN0ZGlvSXRlbXMgPSBbXG5cdFx0Li4udmFsdWVzLm1hcCh2YWx1ZSA9PiBpbml0aWFsaXplU3RkaW9JdGVtKHZhbHVlLCBvcHRpb25OYW1lKSksXG5cdFx0Li4uaGFuZGxlSW5wdXRPcHRpb25zKG9wdGlvbnMsIGZkTnVtYmVyKSxcblx0XTtcblxuXHRjb25zdCBzdGRpb0l0ZW1zID0gZmlsdGVyRHVwbGljYXRlcyhpbml0aWFsU3RkaW9JdGVtcyk7XG5cdGNvbnN0IGlzU3RkaW9BcnJheSA9IHN0ZGlvSXRlbXMubGVuZ3RoID4gMTtcblx0dmFsaWRhdGVTdGRpb0FycmF5KHN0ZGlvSXRlbXMsIGlzU3RkaW9BcnJheSwgb3B0aW9uTmFtZSk7XG5cdHZhbGlkYXRlU3RyZWFtcyhzdGRpb0l0ZW1zKTtcblx0cmV0dXJuIHtzdGRpb0l0ZW1zLCBpc1N0ZGlvQXJyYXl9O1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZVN0ZGlvSXRlbSA9ICh2YWx1ZSwgb3B0aW9uTmFtZSkgPT4gKHtcblx0dHlwZTogZ2V0U3RkaW9JdGVtVHlwZSh2YWx1ZSwgb3B0aW9uTmFtZSksXG5cdHZhbHVlLFxuXHRvcHRpb25OYW1lLFxufSk7XG5cbmNvbnN0IHZhbGlkYXRlU3RkaW9BcnJheSA9IChzdGRpb0l0ZW1zLCBpc1N0ZGlvQXJyYXksIG9wdGlvbk5hbWUpID0+IHtcblx0aWYgKHN0ZGlvSXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uIG11c3Qgbm90IGJlIGFuIGVtcHR5IGFycmF5LmApO1xuXHR9XG5cblx0aWYgKCFpc1N0ZGlvQXJyYXkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IHt2YWx1ZSwgb3B0aW9uTmFtZX0gb2Ygc3RkaW9JdGVtcykge1xuXHRcdGlmIChJTlZBTElEX1NURElPX0FSUkFZX09QVElPTlMuaGFzKHZhbHVlKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfVxcYCBvcHRpb24gbXVzdCBub3QgaW5jbHVkZSBcXGAke3ZhbHVlfVxcYC5gKTtcblx0XHR9XG5cdH1cbn07XG5cbi8vIFVzaW5nIHRob3NlIGBzdGRpb2AgdmFsdWVzIHRvZ2V0aGVyIHdpdGggb3RoZXJzIGZvciB0aGUgc2FtZSBzdHJlYW0gZG9lcyBub3QgbWFrZSBzZW5zZSwgc28gd2UgbWFrZSBpdCBmYWlsLlxuLy8gSG93ZXZlciwgd2UgZG8gYWxsb3cgaXQgaWYgdGhlIGFycmF5IGhhcyBhIHNpbmdsZSBpdGVtLlxuY29uc3QgSU5WQUxJRF9TVERJT19BUlJBWV9PUFRJT05TID0gbmV3IFNldChbJ2lnbm9yZScsICdpcGMnXSk7XG5cbmNvbnN0IHZhbGlkYXRlU3RyZWFtcyA9IHN0ZGlvSXRlbXMgPT4ge1xuXHRmb3IgKGNvbnN0IHN0ZGlvSXRlbSBvZiBzdGRpb0l0ZW1zKSB7XG5cdFx0dmFsaWRhdGVGaWxlU3RkaW8oc3RkaW9JdGVtKTtcblx0fVxufTtcblxuY29uc3QgdmFsaWRhdGVGaWxlU3RkaW8gPSAoe3R5cGUsIHZhbHVlLCBvcHRpb25OYW1lfSkgPT4ge1xuXHRpZiAoaXNSZWd1bGFyVXJsKHZhbHVlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9OiBVUkxcXGAgb3B0aW9uIG11c3QgdXNlIHRoZSBcXGBmaWxlOlxcYCBzY2hlbWUuXG5Gb3IgZXhhbXBsZSwgeW91IGNhbiB1c2UgdGhlIFxcYHBhdGhUb0ZpbGVVUkwoKVxcYCBtZXRob2Qgb2YgdGhlIFxcYHVybFxcYCBjb3JlIG1vZHVsZS5gKTtcblx0fVxuXG5cdGlmIChpc1Vua25vd25TdGRpb1N0cmluZyh0eXBlLCB2YWx1ZSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfTogeyBmaWxlOiAnLi4uJyB9XFxgIG9wdGlvbiBtdXN0IGJlIHVzZWQgaW5zdGVhZCBvZiBcXGAke29wdGlvbk5hbWV9OiAnLi4uJ1xcYC5gKTtcblx0fVxufTtcblxuY29uc3QgdmFsaWRhdGVGaWxlT2JqZWN0TW9kZSA9IChzdGRpb0l0ZW1zLCBvYmplY3RNb2RlKSA9PiB7XG5cdGlmICghb2JqZWN0TW9kZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGZpbGVTdGRpb0l0ZW0gPSBzdGRpb0l0ZW1zLmZpbmQoKHt0eXBlfSkgPT4gRklMRV9UWVBFUy5oYXModHlwZSkpO1xuXHRpZiAoZmlsZVN0ZGlvSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7ZmlsZVN0ZGlvSXRlbS5vcHRpb25OYW1lfVxcYCBvcHRpb24gY2Fubm90IHVzZSBib3RoIGZpbGVzIGFuZCB0cmFuc2Zvcm1zIGluIG9iamVjdE1vZGUuYCk7XG5cdH1cbn07XG5cbi8vIFNvbWUgYHN0ZGlvYCB2YWx1ZXMgcmVxdWlyZSBFeGVjYSB0byBjcmVhdGUgc3RyZWFtcy5cbi8vIEZvciBleGFtcGxlLCBmaWxlIHBhdGhzIGNyZWF0ZSBmaWxlIHJlYWQvd3JpdGUgc3RyZWFtcy5cbi8vIFRob3NlIHRyYW5zZm9ybWF0aW9ucyBhcmUgc3BlY2lmaWVkIGluIGBhZGRQcm9wZXJ0aWVzYCwgd2hpY2ggaXMgYm90aCBkaXJlY3Rpb24tc3BlY2lmaWMgYW5kIHR5cGUtc3BlY2lmaWMuXG5jb25zdCBnZXRGaW5hbEZpbGVEZXNjcmlwdG9ycyA9ICh7aW5pdGlhbEZpbGVEZXNjcmlwdG9ycywgYWRkUHJvcGVydGllcywgb3B0aW9ucywgaXNTeW5jfSkgPT4ge1xuXHRjb25zdCBmaWxlRGVzY3JpcHRvcnMgPSBbXTtcblxuXHR0cnkge1xuXHRcdGZvciAoY29uc3QgZmlsZURlc2NyaXB0b3Igb2YgaW5pdGlhbEZpbGVEZXNjcmlwdG9ycykge1xuXHRcdFx0ZmlsZURlc2NyaXB0b3JzLnB1c2goZ2V0RmluYWxGaWxlRGVzY3JpcHRvcih7XG5cdFx0XHRcdGZpbGVEZXNjcmlwdG9yLFxuXHRcdFx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0XHRcdGFkZFByb3BlcnRpZXMsXG5cdFx0XHRcdG9wdGlvbnMsXG5cdFx0XHRcdGlzU3luYyxcblx0XHRcdH0pKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmlsZURlc2NyaXB0b3JzO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNsZWFudXBDdXN0b21TdHJlYW1zKGZpbGVEZXNjcmlwdG9ycyk7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbmNvbnN0IGdldEZpbmFsRmlsZURlc2NyaXB0b3IgPSAoe1xuXHRmaWxlRGVzY3JpcHRvcjoge2RpcmVjdGlvbiwgb2JqZWN0TW9kZSwgc3RkaW9JdGVtc30sXG5cdGZpbGVEZXNjcmlwdG9ycyxcblx0YWRkUHJvcGVydGllcyxcblx0b3B0aW9ucyxcblx0aXNTeW5jLFxufSkgPT4ge1xuXHRjb25zdCBmaW5hbFN0ZGlvSXRlbXMgPSBzdGRpb0l0ZW1zLm1hcChzdGRpb0l0ZW0gPT4gYWRkU3RyZWFtUHJvcGVydGllcyh7XG5cdFx0c3RkaW9JdGVtLFxuXHRcdGFkZFByb3BlcnRpZXMsXG5cdFx0ZGlyZWN0aW9uLFxuXHRcdG9wdGlvbnMsXG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdGlzU3luYyxcblx0fSkpO1xuXHRyZXR1cm4ge2RpcmVjdGlvbiwgb2JqZWN0TW9kZSwgc3RkaW9JdGVtczogZmluYWxTdGRpb0l0ZW1zfTtcbn07XG5cbmNvbnN0IGFkZFN0cmVhbVByb3BlcnRpZXMgPSAoe3N0ZGlvSXRlbSwgYWRkUHJvcGVydGllcywgZGlyZWN0aW9uLCBvcHRpb25zLCBmaWxlRGVzY3JpcHRvcnMsIGlzU3luY30pID0+IHtcblx0Y29uc3QgZHVwbGljYXRlU3RyZWFtID0gZ2V0RHVwbGljYXRlU3RyZWFtKHtcblx0XHRzdGRpb0l0ZW0sXG5cdFx0ZGlyZWN0aW9uLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRpc1N5bmMsXG5cdH0pO1xuXG5cdGlmIChkdXBsaWNhdGVTdHJlYW0gIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB7Li4uc3RkaW9JdGVtLCBzdHJlYW06IGR1cGxpY2F0ZVN0cmVhbX07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdC4uLnN0ZGlvSXRlbSxcblx0XHQuLi5hZGRQcm9wZXJ0aWVzW2RpcmVjdGlvbl1bc3RkaW9JdGVtLnR5cGVdKHN0ZGlvSXRlbSwgb3B0aW9ucyksXG5cdH07XG59O1xuXG4vLyBUaGUgc3RyZWFtIGVycm9yIGhhbmRsaW5nIGlzIHBlcmZvcm1lZCBieSB0aGUgcGlwaW5nIGxvZ2ljIGFib3ZlLCB3aGljaCBjYW5ub3QgYmUgcGVyZm9ybWVkIGJlZm9yZSBzdWJwcm9jZXNzIHNwYXduaW5nLlxuLy8gSWYgdGhlIHN1YnByb2Nlc3Mgc3Bhd25pbmcgZmFpbHMgKGUuZy4gZHVlIHRvIGFuIGludmFsaWQgY29tbWFuZCksIHRoZSBzdHJlYW1zIG5lZWQgdG8gYmUgbWFudWFsbHkgZGVzdHJveWVkLlxuLy8gV2UgbmVlZCB0byBjcmVhdGUgdGhvc2Ugc3RyZWFtcyBiZWZvcmUgc3VicHJvY2VzcyBzcGF3bmluZywgaW4gY2FzZSB0aGVpciBjcmVhdGlvbiBmYWlscywgZS5nLiB3aGVuIHBhc3NpbmcgYW4gaW52YWxpZCBnZW5lcmF0b3IgYXMgYXJndW1lbnQuXG4vLyBMaWtlIHRoaXMsIGFuIGV4Y2VwdGlvbiB3b3VsZCBiZSB0aHJvd24sIHdoaWNoIHdvdWxkIHByZXZlbnQgc3Bhd25pbmcgYSBzdWJwcm9jZXNzLlxuZXhwb3J0IGNvbnN0IGNsZWFudXBDdXN0b21TdHJlYW1zID0gZmlsZURlc2NyaXB0b3JzID0+IHtcblx0Zm9yIChjb25zdCB7c3RkaW9JdGVtc30gb2YgZmlsZURlc2NyaXB0b3JzKSB7XG5cdFx0Zm9yIChjb25zdCB7c3RyZWFtfSBvZiBzdGRpb0l0ZW1zKSB7XG5cdFx0XHRpZiAoc3RyZWFtICE9PSB1bmRlZmluZWQgJiYgIWlzU3RhbmRhcmRTdHJlYW0oc3RyZWFtKSkge1xuXHRcdFx0XHRzdHJlYW0uZGVzdHJveSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLy8gV2hlbiB0aGUgYHN0ZCo6IEl0ZXJhYmxlIHwgV2ViU3RyZWFtIHwgVVJMIHwgZmlsZVBhdGhgLCBgaW5wdXRgIG9yIGBpbnB1dEZpbGVgIG9wdGlvbiBpcyB1c2VkLCB3ZSBwaXBlIHRvIGBzdWJwcm9jZXNzLnN0ZCpgLlxuLy8gV2hlbiB0aGUgYHN0ZCo6IEFycmF5YCBvcHRpb24gaXMgdXNlZCwgd2UgZW11bGF0ZSBzb21lIG9mIHRoZSBuYXRpdmUgdmFsdWVzICgnaW5oZXJpdCcsIE5vZGUuanMgc3RyZWFtIGFuZCBmaWxlIGRlc2NyaXB0b3IgaW50ZWdlcikuIFRvIGRvIHNvLCB3ZSBhbHNvIG5lZWQgdG8gcGlwZSB0byBgc3VicHJvY2Vzcy5zdGQqYC5cbi8vIFRoZXJlZm9yZSB0aGUgYHN0ZCpgIG9wdGlvbnMgbXVzdCBiZSBlaXRoZXIgYHBpcGVgIG9yIGBvdmVybGFwcGVkYC4gT3RoZXIgdmFsdWVzIGRvIG5vdCBzZXQgYHN1YnByb2Nlc3Muc3RkKmAuXG5jb25zdCBmb3J3YXJkU3RkaW8gPSBzdGRpb0l0ZW1zID0+IHtcblx0aWYgKHN0ZGlvSXRlbXMubGVuZ3RoID4gMSkge1xuXHRcdHJldHVybiBzdGRpb0l0ZW1zLnNvbWUoKHt2YWx1ZX0pID0+IHZhbHVlID09PSAnb3ZlcmxhcHBlZCcpID8gJ292ZXJsYXBwZWQnIDogJ3BpcGUnO1xuXHR9XG5cblx0Y29uc3QgW3t0eXBlLCB2YWx1ZX1dID0gc3RkaW9JdGVtcztcblx0cmV0dXJuIHR5cGUgPT09ICduYXRpdmUnID8gdmFsdWUgOiAncGlwZSc7XG59O1xuIiwgImltcG9ydCB7cmVhZEZpbGVTeW5jfSBmcm9tICdub2RlOmZzJztcbmltcG9ydCB7YnVmZmVyVG9VaW50OEFycmF5fSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcbmltcG9ydCB7aGFuZGxlU3RkaW99IGZyb20gJy4vaGFuZGxlLmpzJztcbmltcG9ydCB7VFlQRV9UT19NRVNTQUdFfSBmcm9tICcuL3R5cGUuanMnO1xuXG4vLyBOb3JtYWxpemUgYGlucHV0YCwgYGlucHV0RmlsZWAsIGBzdGRpbmAsIGBzdGRvdXRgIGFuZCBgc3RkZXJyYCBvcHRpb25zLCBiZWZvcmUgc3Bhd25pbmcsIGluIHN5bmMgbW9kZVxuZXhwb3J0IGNvbnN0IGhhbmRsZVN0ZGlvU3luYyA9IChvcHRpb25zLCB2ZXJib3NlSW5mbykgPT4gaGFuZGxlU3RkaW8oYWRkUHJvcGVydGllc1N5bmMsIG9wdGlvbnMsIHZlcmJvc2VJbmZvLCB0cnVlKTtcblxuY29uc3QgZm9yYmlkZGVuSWZTeW5jID0gKHt0eXBlLCBvcHRpb25OYW1lfSkgPT4ge1xuXHR0aHJvd0ludmFsaWRTeW5jVmFsdWUob3B0aW9uTmFtZSwgVFlQRV9UT19NRVNTQUdFW3R5cGVdKTtcbn07XG5cbmNvbnN0IGZvcmJpZGRlbk5hdGl2ZUlmU3luYyA9ICh7b3B0aW9uTmFtZSwgdmFsdWV9KSA9PiB7XG5cdGlmICh2YWx1ZSA9PT0gJ2lwYycgfHwgdmFsdWUgPT09ICdvdmVybGFwcGVkJykge1xuXHRcdHRocm93SW52YWxpZFN5bmNWYWx1ZShvcHRpb25OYW1lLCBgXCIke3ZhbHVlfVwiYCk7XG5cdH1cblxuXHRyZXR1cm4ge307XG59O1xuXG5jb25zdCB0aHJvd0ludmFsaWRTeW5jVmFsdWUgPSAob3B0aW9uTmFtZSwgdmFsdWUpID0+IHtcblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uIGNhbm5vdCBiZSAke3ZhbHVlfSB3aXRoIHN5bmNocm9ub3VzIG1ldGhvZHMuYCk7XG59O1xuXG4vLyBDcmVhdGUgc3RyZWFtcyB1c2VkIGludGVybmFsbHkgZm9yIHJlZGlyZWN0aW5nIHdoZW4gdXNpbmcgc3BlY2lmaWMgdmFsdWVzIGZvciB0aGUgYHN0ZCpgIG9wdGlvbnMsIGluIHN5bmMgbW9kZS5cbi8vIEZvciBleGFtcGxlLCBgc3RkaW46IHtmaWxlfWAgcmVhZHMgdGhlIGZpbGUgc3luY2hyb25vdXNseSwgdGhlbiBwYXNzZXMgaXQgYXMgdGhlIGBpbnB1dGAgb3B0aW9uLlxuY29uc3QgYWRkUHJvcGVydGllcyA9IHtcblx0Z2VuZXJhdG9yKCkge30sXG5cdGFzeW5jR2VuZXJhdG9yOiBmb3JiaWRkZW5JZlN5bmMsXG5cdHdlYlN0cmVhbTogZm9yYmlkZGVuSWZTeW5jLFxuXHRub2RlU3RyZWFtOiBmb3JiaWRkZW5JZlN5bmMsXG5cdHdlYlRyYW5zZm9ybTogZm9yYmlkZGVuSWZTeW5jLFxuXHRkdXBsZXg6IGZvcmJpZGRlbklmU3luYyxcblx0YXN5bmNJdGVyYWJsZTogZm9yYmlkZGVuSWZTeW5jLFxuXHRuYXRpdmU6IGZvcmJpZGRlbk5hdGl2ZUlmU3luYyxcbn07XG5cbmNvbnN0IGFkZFByb3BlcnRpZXNTeW5jID0ge1xuXHRpbnB1dDoge1xuXHRcdC4uLmFkZFByb3BlcnRpZXMsXG5cdFx0ZmlsZVVybDogKHt2YWx1ZX0pID0+ICh7Y29udGVudHM6IFtidWZmZXJUb1VpbnQ4QXJyYXkocmVhZEZpbGVTeW5jKHZhbHVlKSldfSksXG5cdFx0ZmlsZVBhdGg6ICh7dmFsdWU6IHtmaWxlfX0pID0+ICh7Y29udGVudHM6IFtidWZmZXJUb1VpbnQ4QXJyYXkocmVhZEZpbGVTeW5jKGZpbGUpKV19KSxcblx0XHRmaWxlTnVtYmVyOiBmb3JiaWRkZW5JZlN5bmMsXG5cdFx0aXRlcmFibGU6ICh7dmFsdWV9KSA9PiAoe2NvbnRlbnRzOiBbLi4udmFsdWVdfSksXG5cdFx0c3RyaW5nOiAoe3ZhbHVlfSkgPT4gKHtjb250ZW50czogW3ZhbHVlXX0pLFxuXHRcdHVpbnQ4QXJyYXk6ICh7dmFsdWV9KSA9PiAoe2NvbnRlbnRzOiBbdmFsdWVdfSksXG5cdH0sXG5cdG91dHB1dDoge1xuXHRcdC4uLmFkZFByb3BlcnRpZXMsXG5cdFx0ZmlsZVVybDogKHt2YWx1ZX0pID0+ICh7cGF0aDogdmFsdWV9KSxcblx0XHRmaWxlUGF0aDogKHt2YWx1ZToge2ZpbGUsIGFwcGVuZH19KSA9PiAoe3BhdGg6IGZpbGUsIGFwcGVuZH0pLFxuXHRcdGZpbGVOdW1iZXI6ICh7dmFsdWV9KSA9PiAoe3BhdGg6IHZhbHVlfSksXG5cdFx0aXRlcmFibGU6IGZvcmJpZGRlbklmU3luYyxcblx0XHRzdHJpbmc6IGZvcmJpZGRlbklmU3luYyxcblx0XHR1aW50OEFycmF5OiBmb3JiaWRkZW5JZlN5bmMsXG5cdH0sXG59O1xuIiwgImltcG9ydCBzdHJpcEZpbmFsTmV3bGluZUZ1bmN0aW9uIGZyb20gJ3N0cmlwLWZpbmFsLW5ld2xpbmUnO1xuXG4vLyBBcHBseSBgc3RyaXBGaW5hbE5ld2xpbmVgIG9wdGlvbiwgd2hpY2ggYXBwbGllcyB0byBgcmVzdWx0LnN0ZG91dHxzdGRlcnJ8YWxsfHN0ZGlvWypdYC5cbi8vIElmIHRoZSBgbGluZXNgIG9wdGlvbiBpcyB1c2VkLCBpdCBpcyBhcHBsaWVkIG9uIGVhY2ggbGluZSwgYnV0IHVzaW5nIGEgZGlmZmVyZW50IGZ1bmN0aW9uLlxuZXhwb3J0IGNvbnN0IHN0cmlwTmV3bGluZSA9ICh2YWx1ZSwge3N0cmlwRmluYWxOZXdsaW5lfSwgZmROdW1iZXIpID0+IGdldFN0cmlwRmluYWxOZXdsaW5lKHN0cmlwRmluYWxOZXdsaW5lLCBmZE51bWJlcikgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSlcblx0PyBzdHJpcEZpbmFsTmV3bGluZUZ1bmN0aW9uKHZhbHVlKVxuXHQ6IHZhbHVlO1xuXG4vLyBSZXRyaWV2ZSBgc3RyaXBGaW5hbE5ld2xpbmVgIG9wdGlvbiB2YWx1ZSwgaW5jbHVkaW5nIHdpdGggYHN1YnByb2Nlc3MuYWxsYFxuZXhwb3J0IGNvbnN0IGdldFN0cmlwRmluYWxOZXdsaW5lID0gKHN0cmlwRmluYWxOZXdsaW5lLCBmZE51bWJlcikgPT4gZmROdW1iZXIgPT09ICdhbGwnXG5cdD8gc3RyaXBGaW5hbE5ld2xpbmVbMV0gfHwgc3RyaXBGaW5hbE5ld2xpbmVbMl1cblx0OiBzdHJpcEZpbmFsTmV3bGluZVtmZE51bWJlcl07XG4iLCAiLy8gU3BsaXQgY2h1bmtzIGxpbmUtd2lzZSBmb3IgZ2VuZXJhdG9ycyBwYXNzZWQgdG8gdGhlIGBzdGQqYCBvcHRpb25zXG5leHBvcnQgY29uc3QgZ2V0U3BsaXRMaW5lc0dlbmVyYXRvciA9IChiaW5hcnksIHByZXNlcnZlTmV3bGluZXMsIHNraXBwZWQsIHN0YXRlKSA9PiBiaW5hcnkgfHwgc2tpcHBlZFxuXHQ/IHVuZGVmaW5lZFxuXHQ6IGluaXRpYWxpemVTcGxpdExpbmVzKHByZXNlcnZlTmV3bGluZXMsIHN0YXRlKTtcblxuLy8gU2FtZSBidXQgZm9yIHN5bmNocm9ub3VzIG1ldGhvZHNcbmV4cG9ydCBjb25zdCBzcGxpdExpbmVzU3luYyA9IChjaHVuaywgcHJlc2VydmVOZXdsaW5lcywgb2JqZWN0TW9kZSkgPT4gb2JqZWN0TW9kZVxuXHQ/IGNodW5rLmZsYXRNYXAoaXRlbSA9PiBzcGxpdExpbmVzSXRlbVN5bmMoaXRlbSwgcHJlc2VydmVOZXdsaW5lcykpXG5cdDogc3BsaXRMaW5lc0l0ZW1TeW5jKGNodW5rLCBwcmVzZXJ2ZU5ld2xpbmVzKTtcblxuY29uc3Qgc3BsaXRMaW5lc0l0ZW1TeW5jID0gKGNodW5rLCBwcmVzZXJ2ZU5ld2xpbmVzKSA9PiB7XG5cdGNvbnN0IHt0cmFuc2Zvcm0sIGZpbmFsfSA9IGluaXRpYWxpemVTcGxpdExpbmVzKHByZXNlcnZlTmV3bGluZXMsIHt9KTtcblx0cmV0dXJuIFsuLi50cmFuc2Zvcm0oY2h1bmspLCAuLi5maW5hbCgpXTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVTcGxpdExpbmVzID0gKHByZXNlcnZlTmV3bGluZXMsIHN0YXRlKSA9PiB7XG5cdHN0YXRlLnByZXZpb3VzQ2h1bmtzID0gJyc7XG5cdHJldHVybiB7XG5cdFx0dHJhbnNmb3JtOiBzcGxpdEdlbmVyYXRvci5iaW5kKHVuZGVmaW5lZCwgc3RhdGUsIHByZXNlcnZlTmV3bGluZXMpLFxuXHRcdGZpbmFsOiBsaW5lc0ZpbmFsLmJpbmQodW5kZWZpbmVkLCBzdGF0ZSksXG5cdH07XG59O1xuXG4vLyBUaGlzIGltcGVyYXRpdmUgbG9naWMgaXMgbXVjaCBmYXN0ZXIgdGhhbiB1c2luZyBgU3RyaW5nLnNwbGl0KClgIGFuZCB1c2VzIHZlcnkgbG93IG1lbW9yeS5cbmNvbnN0IHNwbGl0R2VuZXJhdG9yID0gZnVuY3Rpb24gKiAoc3RhdGUsIHByZXNlcnZlTmV3bGluZXMsIGNodW5rKSB7XG5cdGlmICh0eXBlb2YgY2h1bmsgIT09ICdzdHJpbmcnKSB7XG5cdFx0eWllbGQgY2h1bms7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHtwcmV2aW91c0NodW5rc30gPSBzdGF0ZTtcblx0bGV0IHN0YXJ0ID0gLTE7XG5cblx0Zm9yIChsZXQgZW5kID0gMDsgZW5kIDwgY2h1bmsubGVuZ3RoOyBlbmQgKz0gMSkge1xuXHRcdGlmIChjaHVua1tlbmRdID09PSAnXFxuJykge1xuXHRcdFx0Y29uc3QgbmV3bGluZUxlbmd0aCA9IGdldE5ld2xpbmVMZW5ndGgoY2h1bmssIGVuZCwgcHJlc2VydmVOZXdsaW5lcywgc3RhdGUpO1xuXHRcdFx0bGV0IGxpbmUgPSBjaHVuay5zbGljZShzdGFydCArIDEsIGVuZCArIDEgLSBuZXdsaW5lTGVuZ3RoKTtcblxuXHRcdFx0aWYgKHByZXZpb3VzQ2h1bmtzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bGluZSA9IGNvbmNhdFN0cmluZyhwcmV2aW91c0NodW5rcywgbGluZSk7XG5cdFx0XHRcdHByZXZpb3VzQ2h1bmtzID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdHlpZWxkIGxpbmU7XG5cdFx0XHRzdGFydCA9IGVuZDtcblx0XHR9XG5cdH1cblxuXHRpZiAoc3RhcnQgIT09IGNodW5rLmxlbmd0aCAtIDEpIHtcblx0XHRwcmV2aW91c0NodW5rcyA9IGNvbmNhdFN0cmluZyhwcmV2aW91c0NodW5rcywgY2h1bmsuc2xpY2Uoc3RhcnQgKyAxKSk7XG5cdH1cblxuXHRzdGF0ZS5wcmV2aW91c0NodW5rcyA9IHByZXZpb3VzQ2h1bmtzO1xufTtcblxuY29uc3QgZ2V0TmV3bGluZUxlbmd0aCA9IChjaHVuaywgZW5kLCBwcmVzZXJ2ZU5ld2xpbmVzLCBzdGF0ZSkgPT4ge1xuXHRpZiAocHJlc2VydmVOZXdsaW5lcykge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0c3RhdGUuaXNXaW5kb3dzTmV3bGluZSA9IGVuZCAhPT0gMCAmJiBjaHVua1tlbmQgLSAxXSA9PT0gJ1xccic7XG5cdHJldHVybiBzdGF0ZS5pc1dpbmRvd3NOZXdsaW5lID8gMiA6IDE7XG59O1xuXG5jb25zdCBsaW5lc0ZpbmFsID0gZnVuY3Rpb24gKiAoe3ByZXZpb3VzQ2h1bmtzfSkge1xuXHRpZiAocHJldmlvdXNDaHVua3MubGVuZ3RoID4gMCkge1xuXHRcdHlpZWxkIHByZXZpb3VzQ2h1bmtzO1xuXHR9XG59O1xuXG4vLyBVbmxlc3MgYHByZXNlcnZlTmV3bGluZXM6IHRydWVgIGlzIHVzZWQsIHdlIHN0cmlwIHRoZSBuZXdsaW5lIG9mIGVhY2ggbGluZS5cbi8vIFRoaXMgcmUtYWRkcyB0aGVtIGFmdGVyIHRoZSB1c2VyIGB0cmFuc2Zvcm1gIGNvZGUgaGFzIHJ1bi5cbmV4cG9ydCBjb25zdCBnZXRBcHBlbmROZXdsaW5lR2VuZXJhdG9yID0gKHtiaW5hcnksIHByZXNlcnZlTmV3bGluZXMsIHJlYWRhYmxlT2JqZWN0TW9kZSwgc3RhdGV9KSA9PiBiaW5hcnkgfHwgcHJlc2VydmVOZXdsaW5lcyB8fCByZWFkYWJsZU9iamVjdE1vZGVcblx0PyB1bmRlZmluZWRcblx0OiB7dHJhbnNmb3JtOiBhcHBlbmROZXdsaW5lR2VuZXJhdG9yLmJpbmQodW5kZWZpbmVkLCBzdGF0ZSl9O1xuXG5jb25zdCBhcHBlbmROZXdsaW5lR2VuZXJhdG9yID0gZnVuY3Rpb24gKiAoe2lzV2luZG93c05ld2xpbmUgPSBmYWxzZX0sIGNodW5rKSB7XG5cdGNvbnN0IHt1bml4TmV3bGluZSwgd2luZG93c05ld2xpbmUsIExGLCBjb25jYXRCeXRlc30gPSB0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnID8gbGluZXNTdHJpbmdJbmZvIDogbGluZXNVaW50OEFycmF5SW5mbztcblxuXHRpZiAoY2h1bmsuYXQoLTEpID09PSBMRikge1xuXHRcdHlpZWxkIGNodW5rO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG5ld2xpbmUgPSBpc1dpbmRvd3NOZXdsaW5lID8gd2luZG93c05ld2xpbmUgOiB1bml4TmV3bGluZTtcblx0eWllbGQgY29uY2F0Qnl0ZXMoY2h1bmssIG5ld2xpbmUpO1xufTtcblxuY29uc3QgY29uY2F0U3RyaW5nID0gKGZpcnN0Q2h1bmssIHNlY29uZENodW5rKSA9PiBgJHtmaXJzdENodW5rfSR7c2Vjb25kQ2h1bmt9YDtcblxuY29uc3QgbGluZXNTdHJpbmdJbmZvID0ge1xuXHR3aW5kb3dzTmV3bGluZTogJ1xcclxcbicsXG5cdHVuaXhOZXdsaW5lOiAnXFxuJyxcblx0TEY6ICdcXG4nLFxuXHRjb25jYXRCeXRlczogY29uY2F0U3RyaW5nLFxufTtcblxuY29uc3QgY29uY2F0VWludDhBcnJheSA9IChmaXJzdENodW5rLCBzZWNvbmRDaHVuaykgPT4ge1xuXHRjb25zdCBjaHVuayA9IG5ldyBVaW50OEFycmF5KGZpcnN0Q2h1bmsubGVuZ3RoICsgc2Vjb25kQ2h1bmsubGVuZ3RoKTtcblx0Y2h1bmsuc2V0KGZpcnN0Q2h1bmssIDApO1xuXHRjaHVuay5zZXQoc2Vjb25kQ2h1bmssIGZpcnN0Q2h1bmsubGVuZ3RoKTtcblx0cmV0dXJuIGNodW5rO1xufTtcblxuY29uc3QgbGluZXNVaW50OEFycmF5SW5mbyA9IHtcblx0d2luZG93c05ld2xpbmU6IG5ldyBVaW50OEFycmF5KFsweDBELCAweDBBXSksXG5cdHVuaXhOZXdsaW5lOiBuZXcgVWludDhBcnJheShbMHgwQV0pLFxuXHRMRjogMHgwQSxcblx0Y29uY2F0Qnl0ZXM6IGNvbmNhdFVpbnQ4QXJyYXksXG59O1xuIiwgImltcG9ydCB7QnVmZmVyfSBmcm9tICdub2RlOmJ1ZmZlcic7XG5pbXBvcnQge2lzVWludDhBcnJheX0gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5cbi8vIFZhbGlkYXRlIHRoZSB0eXBlIG9mIGNodW5rIGFyZ3VtZW50IHBhc3NlZCB0byB0cmFuc2Zvcm0gZ2VuZXJhdG9yc1xuZXhwb3J0IGNvbnN0IGdldFZhbGlkYXRlVHJhbnNmb3JtSW5wdXQgPSAod3JpdGFibGVPYmplY3RNb2RlLCBvcHRpb25OYW1lKSA9PiB3cml0YWJsZU9iamVjdE1vZGVcblx0PyB1bmRlZmluZWRcblx0OiB2YWxpZGF0ZVN0cmluZ1RyYW5zZm9ybUlucHV0LmJpbmQodW5kZWZpbmVkLCBvcHRpb25OYW1lKTtcblxuY29uc3QgdmFsaWRhdGVTdHJpbmdUcmFuc2Zvcm1JbnB1dCA9IGZ1bmN0aW9uICogKG9wdGlvbk5hbWUsIGNodW5rKSB7XG5cdGlmICh0eXBlb2YgY2h1bmsgIT09ICdzdHJpbmcnICYmICFpc1VpbnQ4QXJyYXkoY2h1bmspICYmICFCdWZmZXIuaXNCdWZmZXIoY2h1bmspKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uJ3MgdHJhbnNmb3JtIG11c3QgdXNlIFwib2JqZWN0TW9kZTogdHJ1ZVwiIHRvIHJlY2VpdmUgYXMgaW5wdXQ6ICR7dHlwZW9mIGNodW5rfS5gKTtcblx0fVxuXG5cdHlpZWxkIGNodW5rO1xufTtcblxuLy8gVmFsaWRhdGUgdGhlIHR5cGUgb2YgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRyYW5zZm9ybSBnZW5lcmF0b3JzXG5leHBvcnQgY29uc3QgZ2V0VmFsaWRhdGVUcmFuc2Zvcm1SZXR1cm4gPSAocmVhZGFibGVPYmplY3RNb2RlLCBvcHRpb25OYW1lKSA9PiByZWFkYWJsZU9iamVjdE1vZGVcblx0PyB2YWxpZGF0ZU9iamVjdFRyYW5zZm9ybVJldHVybi5iaW5kKHVuZGVmaW5lZCwgb3B0aW9uTmFtZSlcblx0OiB2YWxpZGF0ZVN0cmluZ1RyYW5zZm9ybVJldHVybi5iaW5kKHVuZGVmaW5lZCwgb3B0aW9uTmFtZSk7XG5cbmNvbnN0IHZhbGlkYXRlT2JqZWN0VHJhbnNmb3JtUmV0dXJuID0gZnVuY3Rpb24gKiAob3B0aW9uTmFtZSwgY2h1bmspIHtcblx0dmFsaWRhdGVFbXB0eVJldHVybihvcHRpb25OYW1lLCBjaHVuayk7XG5cdHlpZWxkIGNodW5rO1xufTtcblxuY29uc3QgdmFsaWRhdGVTdHJpbmdUcmFuc2Zvcm1SZXR1cm4gPSBmdW5jdGlvbiAqIChvcHRpb25OYW1lLCBjaHVuaykge1xuXHR2YWxpZGF0ZUVtcHR5UmV0dXJuKG9wdGlvbk5hbWUsIGNodW5rKTtcblxuXHRpZiAodHlwZW9mIGNodW5rICE9PSAnc3RyaW5nJyAmJiAhaXNVaW50OEFycmF5KGNodW5rKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9XFxgIG9wdGlvbidzIGZ1bmN0aW9uIG11c3QgeWllbGQgYSBzdHJpbmcgb3IgYW4gVWludDhBcnJheSwgbm90ICR7dHlwZW9mIGNodW5rfS5gKTtcblx0fVxuXG5cdHlpZWxkIGNodW5rO1xufTtcblxuY29uc3QgdmFsaWRhdGVFbXB0eVJldHVybiA9IChvcHRpb25OYW1lLCBjaHVuaykgPT4ge1xuXHRpZiAoY2h1bmsgPT09IG51bGwgfHwgY2h1bmsgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9XFxgIG9wdGlvbidzIGZ1bmN0aW9uIG11c3Qgbm90IGNhbGwgXFxgeWllbGQgJHtjaHVua31cXGAuXG5JbnN0ZWFkLCBcXGB5aWVsZFxcYCBzaG91bGQgZWl0aGVyIGJlIGNhbGxlZCB3aXRoIGEgdmFsdWUsIG9yIG5vdCBiZSBjYWxsZWQgYXQgYWxsLiBGb3IgZXhhbXBsZTpcbiAgaWYgKGNvbmRpdGlvbikgeyB5aWVsZCB2YWx1ZTsgfWApO1xuXHR9XG59O1xuIiwgImltcG9ydCB7QnVmZmVyfSBmcm9tICdub2RlOmJ1ZmZlcic7XG5pbXBvcnQge1N0cmluZ0RlY29kZXJ9IGZyb20gJ25vZGU6c3RyaW5nX2RlY29kZXInO1xuaW1wb3J0IHtpc1VpbnQ4QXJyYXksIGJ1ZmZlclRvVWludDhBcnJheX0gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5cbi8qXG5XaGVuIHVzaW5nIGJpbmFyeSBlbmNvZGluZ3MsIGFkZCBhbiBpbnRlcm5hbCBnZW5lcmF0b3IgdGhhdCBjb252ZXJ0cyBjaHVua3MgZnJvbSBgQnVmZmVyYCB0byBgc3RyaW5nYCBvciBgVWludDhBcnJheWAuXG5DaHVua3MgbWlnaHQgYmUgQnVmZmVyLCBVaW50OEFycmF5IG9yIHN0cmluZ3Mgc2luY2U6XG4tIGBzdWJwcm9jZXNzLnN0ZG91dHxzdGRlcnJgIGVtaXRzIEJ1ZmZlcnNcbi0gYHN1YnByb2Nlc3Muc3RkaW4ud3JpdGUoKWAgYWNjZXB0cyBCdWZmZXIsIFVpbnQ4QXJyYXkgb3Igc3RyaW5nXG4tIFByZXZpb3VzIGdlbmVyYXRvcnMgbWlnaHQgcmV0dXJuIFVpbnQ4QXJyYXkgb3Igc3RyaW5nXG5cbkhvd2V2ZXIsIHRob3NlIGFyZSBjb252ZXJ0ZWQgdG8gQnVmZmVyOlxuLSBvbiB3cml0ZXM6IGBEdXBsZXgud3JpdGFibGVgIGBkZWNvZGVTdHJpbmdzOiB0cnVlYCBkZWZhdWx0IG9wdGlvblxuLSBvbiByZWFkczogYER1cGxleC5yZWFkYWJsZWAgYHJlYWRhYmxlRW5jb2Rpbmc6IG51bGxgIGRlZmF1bHQgb3B0aW9uXG4qL1xuZXhwb3J0IGNvbnN0IGdldEVuY29kaW5nVHJhbnNmb3JtR2VuZXJhdG9yID0gKGJpbmFyeSwgZW5jb2RpbmcsIHNraXBwZWQpID0+IHtcblx0aWYgKHNraXBwZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoYmluYXJ5KSB7XG5cdFx0cmV0dXJuIHt0cmFuc2Zvcm06IGVuY29kaW5nVWludDhBcnJheUdlbmVyYXRvci5iaW5kKHVuZGVmaW5lZCwgbmV3IFRleHRFbmNvZGVyKCkpfTtcblx0fVxuXG5cdGNvbnN0IHN0cmluZ0RlY29kZXIgPSBuZXcgU3RyaW5nRGVjb2RlcihlbmNvZGluZyk7XG5cdHJldHVybiB7XG5cdFx0dHJhbnNmb3JtOiBlbmNvZGluZ1N0cmluZ0dlbmVyYXRvci5iaW5kKHVuZGVmaW5lZCwgc3RyaW5nRGVjb2RlciksXG5cdFx0ZmluYWw6IGVuY29kaW5nU3RyaW5nRmluYWwuYmluZCh1bmRlZmluZWQsIHN0cmluZ0RlY29kZXIpLFxuXHR9O1xufTtcblxuY29uc3QgZW5jb2RpbmdVaW50OEFycmF5R2VuZXJhdG9yID0gZnVuY3Rpb24gKiAodGV4dEVuY29kZXIsIGNodW5rKSB7XG5cdGlmIChCdWZmZXIuaXNCdWZmZXIoY2h1bmspKSB7XG5cdFx0eWllbGQgYnVmZmVyVG9VaW50OEFycmF5KGNodW5rKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnKSB7XG5cdFx0eWllbGQgdGV4dEVuY29kZXIuZW5jb2RlKGNodW5rKTtcblx0fSBlbHNlIHtcblx0XHR5aWVsZCBjaHVuaztcblx0fVxufTtcblxuY29uc3QgZW5jb2RpbmdTdHJpbmdHZW5lcmF0b3IgPSBmdW5jdGlvbiAqIChzdHJpbmdEZWNvZGVyLCBjaHVuaykge1xuXHR5aWVsZCBpc1VpbnQ4QXJyYXkoY2h1bmspID8gc3RyaW5nRGVjb2Rlci53cml0ZShjaHVuaykgOiBjaHVuaztcbn07XG5cbmNvbnN0IGVuY29kaW5nU3RyaW5nRmluYWwgPSBmdW5jdGlvbiAqIChzdHJpbmdEZWNvZGVyKSB7XG5cdGNvbnN0IGxhc3RDaHVuayA9IHN0cmluZ0RlY29kZXIuZW5kKCk7XG5cdGlmIChsYXN0Q2h1bmsgIT09ICcnKSB7XG5cdFx0eWllbGQgbGFzdENodW5rO1xuXHR9XG59O1xuIiwgImltcG9ydCB7Y2FsbGJhY2tpZnl9IGZyb20gJ25vZGU6dXRpbCc7XG5cbi8vIEFwcGxpZXMgYSBzZXJpZXMgb2YgZ2VuZXJhdG9yIGZ1bmN0aW9ucyBhc3luY2hyb25vdXNseVxuZXhwb3J0IGNvbnN0IHB1c2hDaHVua3MgPSBjYWxsYmFja2lmeShhc3luYyAoZ2V0Q2h1bmtzLCBzdGF0ZSwgZ2V0Q2h1bmtzQXJndW1lbnRzLCB0cmFuc2Zvcm1TdHJlYW0pID0+IHtcblx0c3RhdGUuY3VycmVudEl0ZXJhYmxlID0gZ2V0Q2h1bmtzKC4uLmdldENodW5rc0FyZ3VtZW50cyk7XG5cblx0dHJ5IHtcblx0XHRmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHN0YXRlLmN1cnJlbnRJdGVyYWJsZSkge1xuXHRcdFx0dHJhbnNmb3JtU3RyZWFtLnB1c2goY2h1bmspO1xuXHRcdH1cblx0fSBmaW5hbGx5IHtcblx0XHRkZWxldGUgc3RhdGUuY3VycmVudEl0ZXJhYmxlO1xuXHR9XG59KTtcblxuLy8gRm9yIGVhY2ggbmV3IGNodW5rLCBhcHBseSBlYWNoIGB0cmFuc2Zvcm0oKWAgbWV0aG9kXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQ2h1bmsgPSBhc3luYyBmdW5jdGlvbiAqIChjaHVuaywgZ2VuZXJhdG9ycywgaW5kZXgpIHtcblx0aWYgKGluZGV4ID09PSBnZW5lcmF0b3JzLmxlbmd0aCkge1xuXHRcdHlpZWxkIGNodW5rO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt0cmFuc2Zvcm0gPSBpZGVudGl0eUdlbmVyYXRvcn0gPSBnZW5lcmF0b3JzW2luZGV4XTtcblx0Zm9yIGF3YWl0IChjb25zdCB0cmFuc2Zvcm1lZENodW5rIG9mIHRyYW5zZm9ybShjaHVuaykpIHtcblx0XHR5aWVsZCAqIHRyYW5zZm9ybUNodW5rKHRyYW5zZm9ybWVkQ2h1bmssIGdlbmVyYXRvcnMsIGluZGV4ICsgMSk7XG5cdH1cbn07XG5cbi8vIEF0IHRoZSBlbmQsIGFwcGx5IGVhY2ggYGZpbmFsKClgIG1ldGhvZCwgZm9sbG93ZWQgYnkgdGhlIGB0cmFuc2Zvcm0oKWAgbWV0aG9kIG9mIHRoZSBuZXh0IHRyYW5zZm9ybXNcbmV4cG9ydCBjb25zdCBmaW5hbENodW5rcyA9IGFzeW5jIGZ1bmN0aW9uICogKGdlbmVyYXRvcnMpIHtcblx0Zm9yIChjb25zdCBbaW5kZXgsIHtmaW5hbH1dIG9mIE9iamVjdC5lbnRyaWVzKGdlbmVyYXRvcnMpKSB7XG5cdFx0eWllbGQgKiBnZW5lcmF0b3JGaW5hbENodW5rcyhmaW5hbCwgTnVtYmVyKGluZGV4KSwgZ2VuZXJhdG9ycyk7XG5cdH1cbn07XG5cbmNvbnN0IGdlbmVyYXRvckZpbmFsQ2h1bmtzID0gYXN5bmMgZnVuY3Rpb24gKiAoZmluYWwsIGluZGV4LCBnZW5lcmF0b3JzKSB7XG5cdGlmIChmaW5hbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIGF3YWl0IChjb25zdCBmaW5hbENodW5rIG9mIGZpbmFsKCkpIHtcblx0XHR5aWVsZCAqIHRyYW5zZm9ybUNodW5rKGZpbmFsQ2h1bmssIGdlbmVyYXRvcnMsIGluZGV4ICsgMSk7XG5cdH1cbn07XG5cbi8vIENhbmNlbCBhbnkgb25nb2luZyBhc3luYyBnZW5lcmF0b3Igd2hlbiB0aGUgVHJhbnNmb3JtIGlzIGRlc3Ryb3llZCwgZS5nLiB3aGVuIHRoZSBzdWJwcm9jZXNzIGVycm9yc1xuZXhwb3J0IGNvbnN0IGRlc3Ryb3lUcmFuc2Zvcm0gPSBjYWxsYmFja2lmeShhc3luYyAoe2N1cnJlbnRJdGVyYWJsZX0sIGVycm9yKSA9PiB7XG5cdGlmIChjdXJyZW50SXRlcmFibGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGF3YWl0IChlcnJvciA/IGN1cnJlbnRJdGVyYWJsZS50aHJvdyhlcnJvcikgOiBjdXJyZW50SXRlcmFibGUucmV0dXJuKCkpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChlcnJvcikge1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59KTtcblxuY29uc3QgaWRlbnRpdHlHZW5lcmF0b3IgPSBmdW5jdGlvbiAqIChjaHVuaykge1xuXHR5aWVsZCBjaHVuaztcbn07XG4iLCAiLy8gRHVwbGljYXRlIHRoZSBjb2RlIGZyb20gYHJ1bi1hc3luYy5qc2AgYnV0IGFzIHN5bmNocm9ub3VzIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IHB1c2hDaHVua3NTeW5jID0gKGdldENodW5rc1N5bmMsIGdldENodW5rc0FyZ3VtZW50cywgdHJhbnNmb3JtU3RyZWFtLCBkb25lKSA9PiB7XG5cdHRyeSB7XG5cdFx0Zm9yIChjb25zdCBjaHVuayBvZiBnZXRDaHVua3NTeW5jKC4uLmdldENodW5rc0FyZ3VtZW50cykpIHtcblx0XHRcdHRyYW5zZm9ybVN0cmVhbS5wdXNoKGNodW5rKTtcblx0XHR9XG5cblx0XHRkb25lKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZG9uZShlcnJvcik7XG5cdH1cbn07XG5cbi8vIFJ1biBzeW5jaHJvbm91cyBnZW5lcmF0b3JzIHdpdGggYGV4ZWNhU3luYygpYFxuZXhwb3J0IGNvbnN0IHJ1blRyYW5zZm9ybVN5bmMgPSAoZ2VuZXJhdG9ycywgY2h1bmtzKSA9PiBbXG5cdC4uLmNodW5rcy5mbGF0TWFwKGNodW5rID0+IFsuLi50cmFuc2Zvcm1DaHVua1N5bmMoY2h1bmssIGdlbmVyYXRvcnMsIDApXSksXG5cdC4uLmZpbmFsQ2h1bmtzU3luYyhnZW5lcmF0b3JzKSxcbl07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1DaHVua1N5bmMgPSBmdW5jdGlvbiAqIChjaHVuaywgZ2VuZXJhdG9ycywgaW5kZXgpIHtcblx0aWYgKGluZGV4ID09PSBnZW5lcmF0b3JzLmxlbmd0aCkge1xuXHRcdHlpZWxkIGNodW5rO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt0cmFuc2Zvcm0gPSBpZGVudGl0eUdlbmVyYXRvcn0gPSBnZW5lcmF0b3JzW2luZGV4XTtcblx0Zm9yIChjb25zdCB0cmFuc2Zvcm1lZENodW5rIG9mIHRyYW5zZm9ybShjaHVuaykpIHtcblx0XHR5aWVsZCAqIHRyYW5zZm9ybUNodW5rU3luYyh0cmFuc2Zvcm1lZENodW5rLCBnZW5lcmF0b3JzLCBpbmRleCArIDEpO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZmluYWxDaHVua3NTeW5jID0gZnVuY3Rpb24gKiAoZ2VuZXJhdG9ycykge1xuXHRmb3IgKGNvbnN0IFtpbmRleCwge2ZpbmFsfV0gb2YgT2JqZWN0LmVudHJpZXMoZ2VuZXJhdG9ycykpIHtcblx0XHR5aWVsZCAqIGdlbmVyYXRvckZpbmFsQ2h1bmtzU3luYyhmaW5hbCwgTnVtYmVyKGluZGV4KSwgZ2VuZXJhdG9ycyk7XG5cdH1cbn07XG5cbmNvbnN0IGdlbmVyYXRvckZpbmFsQ2h1bmtzU3luYyA9IGZ1bmN0aW9uICogKGZpbmFsLCBpbmRleCwgZ2VuZXJhdG9ycykge1xuXHRpZiAoZmluYWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZmluYWxDaHVuayBvZiBmaW5hbCgpKSB7XG5cdFx0eWllbGQgKiB0cmFuc2Zvcm1DaHVua1N5bmMoZmluYWxDaHVuaywgZ2VuZXJhdG9ycywgaW5kZXggKyAxKTtcblx0fVxufTtcblxuY29uc3QgaWRlbnRpdHlHZW5lcmF0b3IgPSBmdW5jdGlvbiAqIChjaHVuaykge1xuXHR5aWVsZCBjaHVuaztcbn07XG4iLCAiaW1wb3J0IHtUcmFuc2Zvcm0sIGdldERlZmF1bHRIaWdoV2F0ZXJNYXJrfSBmcm9tICdub2RlOnN0cmVhbSc7XG5pbXBvcnQge2lzQXN5bmNHZW5lcmF0b3J9IGZyb20gJy4uL3N0ZGlvL3R5cGUuanMnO1xuaW1wb3J0IHtnZXRTcGxpdExpbmVzR2VuZXJhdG9yLCBnZXRBcHBlbmROZXdsaW5lR2VuZXJhdG9yfSBmcm9tICcuL3NwbGl0LmpzJztcbmltcG9ydCB7Z2V0VmFsaWRhdGVUcmFuc2Zvcm1JbnB1dCwgZ2V0VmFsaWRhdGVUcmFuc2Zvcm1SZXR1cm59IGZyb20gJy4vdmFsaWRhdGUuanMnO1xuaW1wb3J0IHtnZXRFbmNvZGluZ1RyYW5zZm9ybUdlbmVyYXRvcn0gZnJvbSAnLi9lbmNvZGluZy10cmFuc2Zvcm0uanMnO1xuaW1wb3J0IHtcblx0cHVzaENodW5rcyxcblx0dHJhbnNmb3JtQ2h1bmssXG5cdGZpbmFsQ2h1bmtzLFxuXHRkZXN0cm95VHJhbnNmb3JtLFxufSBmcm9tICcuL3J1bi1hc3luYy5qcyc7XG5pbXBvcnQge1xuXHRwdXNoQ2h1bmtzU3luYyxcblx0dHJhbnNmb3JtQ2h1bmtTeW5jLFxuXHRmaW5hbENodW5rc1N5bmMsXG5cdHJ1blRyYW5zZm9ybVN5bmMsXG59IGZyb20gJy4vcnVuLXN5bmMuanMnO1xuXG4vKlxuR2VuZXJhdG9ycyBjYW4gYmUgdXNlZCB0byB0cmFuc2Zvcm0vZmlsdGVyIHN0YW5kYXJkIHN0cmVhbXMuXG5cbkdlbmVyYXRvcnMgaGF2ZSBhIHNpbXBsZSBzeW50YXgsIHlldCBhbGxvd3MgYWxsIG9mIHRoZSBmb2xsb3dpbmc6XG4tIFNoYXJpbmcgYHN0YXRlYCBiZXR3ZWVuIGNodW5rc1xuLSBGbHVzaGluZyBsb2dpYywgYnkgdXNpbmcgYSBgZmluYWxgIGZ1bmN0aW9uXG4tIEFzeW5jaHJvbm91cyBsb2dpY1xuLSBFbWl0dGluZyBtdWx0aXBsZSBjaHVua3MgZnJvbSBhIHNpbmdsZSBzb3VyY2UgY2h1bmssIGV2ZW4gaWYgc3BhY2VkIGluIHRpbWUsIGJ5IHVzaW5nIG11bHRpcGxlIGB5aWVsZGBcbi0gRmlsdGVyaW5nLCBieSB1c2luZyBubyBgeWllbGRgXG5cblRoZXJlZm9yZSwgdGhlcmUgaXMgbm8gbmVlZCB0byBhbGxvdyBOb2RlLmpzIG9yIHdlYiB0cmFuc2Zvcm0gc3RyZWFtcy5cblxuVGhlIGBoaWdoV2F0ZXJNYXJrYCBpcyBrZXB0IGFzIHRoZSBkZWZhdWx0IHZhbHVlLCBzaW5jZSB0aGlzIGlzIHdoYXQgYHN1YnByb2Nlc3Muc3RkKmAgdXNlcy5cblxuQ2h1bmtzIGFyZSBjdXJyZW50bHkgcHJvY2Vzc2VkIHNlcmlhbGx5LiBXZSBjb3VsZCBhZGQgYSBgY29uY3VycmVuY3lgIG9wdGlvbiB0byBwYXJhbGxlbGl6ZSBpbiB0aGUgZnV0dXJlLlxuXG5UcmFuc2Zvcm0gYW4gYXJyYXkgb2YgZ2VuZXJhdG9yIGZ1bmN0aW9ucyBpbnRvIGEgYFRyYW5zZm9ybWAgc3RyZWFtLlxuYER1cGxleC5mcm9tKGdlbmVyYXRvcilgIGNhbm5vdCBiZSB1c2VkIGJlY2F1c2UgaXQgZG9lcyBub3QgYWxsb3cgc2V0dGluZyB0aGUgYG9iamVjdE1vZGVgIGFuZCBgaGlnaFdhdGVyTWFya2AuXG4qL1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRvclRvU3RyZWFtID0gKHtcblx0dmFsdWUsXG5cdHZhbHVlOiB7dHJhbnNmb3JtLCBmaW5hbCwgd3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9LFxuXHRvcHRpb25OYW1lLFxufSwge2VuY29kaW5nfSkgPT4ge1xuXHRjb25zdCBzdGF0ZSA9IHt9O1xuXHRjb25zdCBnZW5lcmF0b3JzID0gYWRkSW50ZXJuYWxHZW5lcmF0b3JzKHZhbHVlLCBlbmNvZGluZywgb3B0aW9uTmFtZSk7XG5cblx0Y29uc3QgdHJhbnNmb3JtQXN5bmMgPSBpc0FzeW5jR2VuZXJhdG9yKHRyYW5zZm9ybSk7XG5cdGNvbnN0IGZpbmFsQXN5bmMgPSBpc0FzeW5jR2VuZXJhdG9yKGZpbmFsKTtcblx0Y29uc3QgdHJhbnNmb3JtTWV0aG9kID0gdHJhbnNmb3JtQXN5bmNcblx0XHQ/IHB1c2hDaHVua3MuYmluZCh1bmRlZmluZWQsIHRyYW5zZm9ybUNodW5rLCBzdGF0ZSlcblx0XHQ6IHB1c2hDaHVua3NTeW5jLmJpbmQodW5kZWZpbmVkLCB0cmFuc2Zvcm1DaHVua1N5bmMpO1xuXHRjb25zdCBmaW5hbE1ldGhvZCA9IHRyYW5zZm9ybUFzeW5jIHx8IGZpbmFsQXN5bmNcblx0XHQ/IHB1c2hDaHVua3MuYmluZCh1bmRlZmluZWQsIGZpbmFsQ2h1bmtzLCBzdGF0ZSlcblx0XHQ6IHB1c2hDaHVua3NTeW5jLmJpbmQodW5kZWZpbmVkLCBmaW5hbENodW5rc1N5bmMpO1xuXHRjb25zdCBkZXN0cm95TWV0aG9kID0gdHJhbnNmb3JtQXN5bmMgfHwgZmluYWxBc3luY1xuXHRcdD8gZGVzdHJveVRyYW5zZm9ybS5iaW5kKHVuZGVmaW5lZCwgc3RhdGUpXG5cdFx0OiB1bmRlZmluZWQ7XG5cblx0Y29uc3Qgc3RyZWFtID0gbmV3IFRyYW5zZm9ybSh7XG5cdFx0d3JpdGFibGVPYmplY3RNb2RlLFxuXHRcdHdyaXRhYmxlSGlnaFdhdGVyTWFyazogZ2V0RGVmYXVsdEhpZ2hXYXRlck1hcmsod3JpdGFibGVPYmplY3RNb2RlKSxcblx0XHRyZWFkYWJsZU9iamVjdE1vZGUsXG5cdFx0cmVhZGFibGVIaWdoV2F0ZXJNYXJrOiBnZXREZWZhdWx0SGlnaFdhdGVyTWFyayhyZWFkYWJsZU9iamVjdE1vZGUpLFxuXHRcdHRyYW5zZm9ybShjaHVuaywgZW5jb2RpbmcsIGRvbmUpIHtcblx0XHRcdHRyYW5zZm9ybU1ldGhvZChbY2h1bmssIGdlbmVyYXRvcnMsIDBdLCB0aGlzLCBkb25lKTtcblx0XHR9LFxuXHRcdGZsdXNoKGRvbmUpIHtcblx0XHRcdGZpbmFsTWV0aG9kKFtnZW5lcmF0b3JzXSwgdGhpcywgZG9uZSk7XG5cdFx0fSxcblx0XHRkZXN0cm95OiBkZXN0cm95TWV0aG9kLFxuXHR9KTtcblx0cmV0dXJuIHtzdHJlYW19O1xufTtcblxuLy8gQXBwbGllcyB0cmFuc2Zvcm0gZ2VuZXJhdG9ycyBpbiBzeW5jIG1vZGVcbmV4cG9ydCBjb25zdCBydW5HZW5lcmF0b3JzU3luYyA9IChjaHVua3MsIHN0ZGlvSXRlbXMsIGVuY29kaW5nLCBpc0lucHV0KSA9PiB7XG5cdGNvbnN0IGdlbmVyYXRvcnMgPSBzdGRpb0l0ZW1zLmZpbHRlcigoe3R5cGV9KSA9PiB0eXBlID09PSAnZ2VuZXJhdG9yJyk7XG5cdGNvbnN0IHJldmVyc2VkR2VuZXJhdG9ycyA9IGlzSW5wdXQgPyBnZW5lcmF0b3JzLnJldmVyc2UoKSA6IGdlbmVyYXRvcnM7XG5cblx0Zm9yIChjb25zdCB7dmFsdWUsIG9wdGlvbk5hbWV9IG9mIHJldmVyc2VkR2VuZXJhdG9ycykge1xuXHRcdGNvbnN0IGdlbmVyYXRvcnMgPSBhZGRJbnRlcm5hbEdlbmVyYXRvcnModmFsdWUsIGVuY29kaW5nLCBvcHRpb25OYW1lKTtcblx0XHRjaHVua3MgPSBydW5UcmFuc2Zvcm1TeW5jKGdlbmVyYXRvcnMsIGNodW5rcyk7XG5cdH1cblxuXHRyZXR1cm4gY2h1bmtzO1xufTtcblxuLy8gR2VuZXJhdG9ycyB1c2VkIGludGVybmFsbHkgdG8gY29udmVydCB0aGUgY2h1bmsgdHlwZSwgdmFsaWRhdGUgaXQsIGFuZCBzcGxpdCBpbnRvIGxpbmVzXG5jb25zdCBhZGRJbnRlcm5hbEdlbmVyYXRvcnMgPSAoXG5cdHt0cmFuc2Zvcm0sIGZpbmFsLCBiaW5hcnksIHdyaXRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVPYmplY3RNb2RlLCBwcmVzZXJ2ZU5ld2xpbmVzfSxcblx0ZW5jb2RpbmcsXG5cdG9wdGlvbk5hbWUsXG4pID0+IHtcblx0Y29uc3Qgc3RhdGUgPSB7fTtcblx0cmV0dXJuIFtcblx0XHR7dHJhbnNmb3JtOiBnZXRWYWxpZGF0ZVRyYW5zZm9ybUlucHV0KHdyaXRhYmxlT2JqZWN0TW9kZSwgb3B0aW9uTmFtZSl9LFxuXHRcdGdldEVuY29kaW5nVHJhbnNmb3JtR2VuZXJhdG9yKGJpbmFyeSwgZW5jb2RpbmcsIHdyaXRhYmxlT2JqZWN0TW9kZSksXG5cdFx0Z2V0U3BsaXRMaW5lc0dlbmVyYXRvcihiaW5hcnksIHByZXNlcnZlTmV3bGluZXMsIHdyaXRhYmxlT2JqZWN0TW9kZSwgc3RhdGUpLFxuXHRcdHt0cmFuc2Zvcm0sIGZpbmFsfSxcblx0XHR7dHJhbnNmb3JtOiBnZXRWYWxpZGF0ZVRyYW5zZm9ybVJldHVybihyZWFkYWJsZU9iamVjdE1vZGUsIG9wdGlvbk5hbWUpfSxcblx0XHRnZXRBcHBlbmROZXdsaW5lR2VuZXJhdG9yKHtcblx0XHRcdGJpbmFyeSxcblx0XHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdFx0XHRyZWFkYWJsZU9iamVjdE1vZGUsXG5cdFx0XHRzdGF0ZSxcblx0XHR9KSxcblx0XS5maWx0ZXIoQm9vbGVhbik7XG59O1xuIiwgImltcG9ydCB7cnVuR2VuZXJhdG9yc1N5bmN9IGZyb20gJy4uL3RyYW5zZm9ybS9nZW5lcmF0b3IuanMnO1xuaW1wb3J0IHtqb2luVG9VaW50OEFycmF5LCBpc1VpbnQ4QXJyYXl9IGZyb20gJy4uL3V0aWxzL3VpbnQtYXJyYXkuanMnO1xuaW1wb3J0IHtUWVBFX1RPX01FU1NBR0V9IGZyb20gJy4uL3N0ZGlvL3R5cGUuanMnO1xuXG4vLyBBcHBseSBgc3RkaW5gL2BpbnB1dGAvYGlucHV0RmlsZWAgb3B0aW9ucywgYmVmb3JlIHNwYXduaW5nLCBpbiBzeW5jIG1vZGUsIGJ5IGNvbnZlcnRpbmcgaXQgdG8gdGhlIGBpbnB1dGAgb3B0aW9uXG5leHBvcnQgY29uc3QgYWRkSW5wdXRPcHRpb25zU3luYyA9IChmaWxlRGVzY3JpcHRvcnMsIG9wdGlvbnMpID0+IHtcblx0Zm9yIChjb25zdCBmZE51bWJlciBvZiBnZXRJbnB1dEZkTnVtYmVycyhmaWxlRGVzY3JpcHRvcnMpKSB7XG5cdFx0YWRkSW5wdXRPcHRpb25TeW5jKGZpbGVEZXNjcmlwdG9ycywgZmROdW1iZXIsIG9wdGlvbnMpO1xuXHR9XG59O1xuXG5jb25zdCBnZXRJbnB1dEZkTnVtYmVycyA9IGZpbGVEZXNjcmlwdG9ycyA9PiBuZXcgU2V0KE9iamVjdC5lbnRyaWVzKGZpbGVEZXNjcmlwdG9ycylcblx0LmZpbHRlcigoWywge2RpcmVjdGlvbn1dKSA9PiBkaXJlY3Rpb24gPT09ICdpbnB1dCcpXG5cdC5tYXAoKFtmZE51bWJlcl0pID0+IE51bWJlcihmZE51bWJlcikpKTtcblxuY29uc3QgYWRkSW5wdXRPcHRpb25TeW5jID0gKGZpbGVEZXNjcmlwdG9ycywgZmROdW1iZXIsIG9wdGlvbnMpID0+IHtcblx0Y29uc3Qge3N0ZGlvSXRlbXN9ID0gZmlsZURlc2NyaXB0b3JzW2ZkTnVtYmVyXTtcblx0Y29uc3QgYWxsU3RkaW9JdGVtcyA9IHN0ZGlvSXRlbXMuZmlsdGVyKCh7Y29udGVudHN9KSA9PiBjb250ZW50cyAhPT0gdW5kZWZpbmVkKTtcblx0aWYgKGFsbFN0ZGlvSXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGZkTnVtYmVyICE9PSAwKSB7XG5cdFx0Y29uc3QgW3t0eXBlLCBvcHRpb25OYW1lfV0gPSBhbGxTdGRpb0l0ZW1zO1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYE9ubHkgdGhlIFxcYHN0ZGluXFxgIG9wdGlvbiwgbm90IFxcYCR7b3B0aW9uTmFtZX1cXGAsIGNhbiBiZSAke1RZUEVfVE9fTUVTU0FHRVt0eXBlXX0gd2l0aCBzeW5jaHJvbm91cyBtZXRob2RzLmApO1xuXHR9XG5cblx0Y29uc3QgYWxsQ29udGVudHMgPSBhbGxTdGRpb0l0ZW1zLm1hcCgoe2NvbnRlbnRzfSkgPT4gY29udGVudHMpO1xuXHRjb25zdCB0cmFuc2Zvcm1lZENvbnRlbnRzID0gYWxsQ29udGVudHMubWFwKGNvbnRlbnRzID0+IGFwcGx5U2luZ2xlSW5wdXRHZW5lcmF0b3JzU3luYyhjb250ZW50cywgc3RkaW9JdGVtcykpO1xuXHRvcHRpb25zLmlucHV0ID0gam9pblRvVWludDhBcnJheSh0cmFuc2Zvcm1lZENvbnRlbnRzKTtcbn07XG5cbmNvbnN0IGFwcGx5U2luZ2xlSW5wdXRHZW5lcmF0b3JzU3luYyA9IChjb250ZW50cywgc3RkaW9JdGVtcykgPT4ge1xuXHRjb25zdCBuZXdDb250ZW50cyA9IHJ1bkdlbmVyYXRvcnNTeW5jKGNvbnRlbnRzLCBzdGRpb0l0ZW1zLCAndXRmOCcsIHRydWUpO1xuXHR2YWxpZGF0ZVNlcmlhbGl6YWJsZShuZXdDb250ZW50cyk7XG5cdHJldHVybiBqb2luVG9VaW50OEFycmF5KG5ld0NvbnRlbnRzKTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlU2VyaWFsaXphYmxlID0gbmV3Q29udGVudHMgPT4ge1xuXHRjb25zdCBpbnZhbGlkSXRlbSA9IG5ld0NvbnRlbnRzLmZpbmQoaXRlbSA9PiB0eXBlb2YgaXRlbSAhPT0gJ3N0cmluZycgJiYgIWlzVWludDhBcnJheShpdGVtKSk7XG5cdGlmIChpbnZhbGlkSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYHN0ZGluXFxgIG9wdGlvbiBpcyBpbnZhbGlkOiB3aGVuIHBhc3Npbmcgb2JqZWN0cyBhcyBpbnB1dCwgYSB0cmFuc2Zvcm0gbXVzdCBiZSB1c2VkIHRvIHNlcmlhbGl6ZSB0aGVtIHRvIHN0cmluZ3Mgb3IgVWludDhBcnJheXM6ICR7aW52YWxpZEl0ZW19LmApO1xuXHR9XG59O1xuIiwgImltcG9ydCB7QklOQVJZX0VOQ09ESU5HU30gZnJvbSAnLi4vYXJndW1lbnRzL2VuY29kaW5nLW9wdGlvbi5qcyc7XG5pbXBvcnQge1RSQU5TRk9STV9UWVBFU30gZnJvbSAnLi4vc3RkaW8vdHlwZS5qcyc7XG5pbXBvcnQge3ZlcmJvc2VMb2csIHNlcmlhbGl6ZVZlcmJvc2VNZXNzYWdlfSBmcm9tICcuL2xvZy5qcyc7XG5pbXBvcnQge2lzRnVsbFZlcmJvc2V9IGZyb20gJy4vdmFsdWVzLmpzJztcblxuLy8gYGlnbm9yZWAgb3B0cy1vdXQgb2YgYHZlcmJvc2VgIGZvciBhIHNwZWNpZmljIHN0cmVhbS5cbi8vIGBpcGNgIGNhbm5vdCB1c2UgcGlwaW5nLlxuLy8gYGluaGVyaXRgIHdvdWxkIHJlc3VsdCBpbiBkb3VibGUgcHJpbnRpbmcuXG4vLyBUaGV5IGNhbiBhbHNvIGxlYWQgdG8gZG91YmxlIHByaW50aW5nIHdoZW4gcGFzc2luZyBmaWxlIGRlc2NyaXB0b3IgaW50ZWdlcnMgb3IgYHByb2Nlc3Muc3RkKmAuXG4vLyBUaGlzIG9ubHkgbGVhdmVzIHdpdGggYHBpcGVgIGFuZCBgb3ZlcmxhcHBlZGAuXG5leHBvcnQgY29uc3Qgc2hvdWxkTG9nT3V0cHV0ID0gKHtzdGRpb0l0ZW1zLCBlbmNvZGluZywgdmVyYm9zZUluZm8sIGZkTnVtYmVyfSkgPT4gZmROdW1iZXIgIT09ICdhbGwnXG5cdCYmIGlzRnVsbFZlcmJvc2UodmVyYm9zZUluZm8sIGZkTnVtYmVyKVxuXHQmJiAhQklOQVJZX0VOQ09ESU5HUy5oYXMoZW5jb2RpbmcpXG5cdCYmIGZkVXNlc1ZlcmJvc2UoZmROdW1iZXIpXG5cdCYmIChzdGRpb0l0ZW1zLnNvbWUoKHt0eXBlLCB2YWx1ZX0pID0+IHR5cGUgPT09ICduYXRpdmUnICYmIFBJUEVEX1NURElPX1ZBTFVFUy5oYXModmFsdWUpKVxuXHR8fCBzdGRpb0l0ZW1zLmV2ZXJ5KCh7dHlwZX0pID0+IFRSQU5TRk9STV9UWVBFUy5oYXModHlwZSkpKTtcblxuLy8gUHJpbnRpbmcgaW5wdXQgc3RyZWFtcyB3b3VsZCBiZSBjb25mdXNpbmcuXG4vLyBGaWxlcyBhbmQgc3RyZWFtcyBjYW4gcHJvZHVjZSBiaWcgb3V0cHV0cywgd2hpY2ggd2UgZG9uJ3Qgd2FudCB0byBwcmludC5cbi8vIFdlIGNvdWxkIHByaW50IGBzdGRpb1szK11gIGJ1dCBpdCBvZnRlbiBpcyByZWRpcmVjdGVkIHRvIGZpbGVzIGFuZCBzdHJlYW1zLCB3aXRoIHRoZSBzYW1lIGlzc3VlLlxuLy8gU28gd2Ugb25seSBwcmludCBzdGRvdXQgYW5kIHN0ZGVyci5cbmNvbnN0IGZkVXNlc1ZlcmJvc2UgPSBmZE51bWJlciA9PiBmZE51bWJlciA9PT0gMSB8fCBmZE51bWJlciA9PT0gMjtcblxuY29uc3QgUElQRURfU1RESU9fVkFMVUVTID0gbmV3IFNldChbJ3BpcGUnLCAnb3ZlcmxhcHBlZCddKTtcblxuLy8gYHZlcmJvc2U6ICdmdWxsJ2AgcHJpbnRpbmcgbG9naWMgd2l0aCBhc3luYyBtZXRob2RzXG5leHBvcnQgY29uc3QgbG9nTGluZXMgPSBhc3luYyAobGluZXNJdGVyYWJsZSwgc3RyZWFtLCBmZE51bWJlciwgdmVyYm9zZUluZm8pID0+IHtcblx0Zm9yIGF3YWl0IChjb25zdCBsaW5lIG9mIGxpbmVzSXRlcmFibGUpIHtcblx0XHRpZiAoIWlzUGlwaW5nU3RyZWFtKHN0cmVhbSkpIHtcblx0XHRcdGxvZ0xpbmUobGluZSwgZmROdW1iZXIsIHZlcmJvc2VJbmZvKTtcblx0XHR9XG5cdH1cbn07XG5cbi8vIGB2ZXJib3NlOiAnZnVsbCdgIHByaW50aW5nIGxvZ2ljIHdpdGggc3luYyBtZXRob2RzXG5leHBvcnQgY29uc3QgbG9nTGluZXNTeW5jID0gKGxpbmVzQXJyYXksIGZkTnVtYmVyLCB2ZXJib3NlSW5mbykgPT4ge1xuXHRmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXNBcnJheSkge1xuXHRcdGxvZ0xpbmUobGluZSwgZmROdW1iZXIsIHZlcmJvc2VJbmZvKTtcblx0fVxufTtcblxuLy8gV2hlbiBgc3VicHJvY2Vzcy5zdGRvdXR8c3RkZXJyLnBpcGUoKWAgaXMgY2FsbGVkLCBgdmVyYm9zZWAgYmVjb21lcyBhIG5vb3AuXG4vLyBUaGlzIHByZXZlbnRzIHRoZSBmb2xsb3dpbmcgcHJvYmxlbXM6XG4vLyAgLSBgLnBpcGUoKWAgYWNoaWV2ZXMgdGhlIHNhbWUgcmVzdWx0IGFzIHVzaW5nIGBzdGRvdXQ6ICdpbmhlcml0J2AsIGBzdGRvdXQ6IHN0cmVhbWAsIGV0Yy4gd2hpY2ggYWxzbyBtYWtlIGB2ZXJib3NlYCBhIG5vb3AuXG4vLyAgICBGb3IgZXhhbXBsZSwgYHN1YnByb2Nlc3Muc3Rkb3V0LnBpcGUocHJvY2Vzcy5zdGRpbilgIHdvdWxkIHByaW50IGVhY2ggbGluZSB0d2ljZS5cbi8vICAtIFdoZW4gY2hhaW5pbmcgc3VicHJvY2Vzc2VzIHdpdGggYHN1YnByb2Nlc3MucGlwZShvdGhlclN1YnByb2Nlc3MpYCwgb25seSB0aGUgbGFzdCBvbmUgc2hvdWxkIHByaW50IGl0cyBvdXRwdXQuXG4vLyBEZXRlY3Rpbmcgd2hldGhlciBgLnBpcGUoKWAgaXMgaW1wb3NzaWJsZSB3aXRob3V0IG1vbmtleS1wYXRjaGluZyBpdCwgc28gd2UgdXNlIHRoZSBmb2xsb3dpbmcgdW5kb2N1bWVudGVkIHByb3BlcnR5LlxuLy8gVGhpcyBpcyBub3QgYSBjcml0aWNhbCBiZWhhdmlvciBzaW5jZSBjaGFuZ2VzIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydHkgd291bGQgb25seSBtYWtlIGB2ZXJib3NlYCBtb3JlIHZlcmJvc2UuXG5jb25zdCBpc1BpcGluZ1N0cmVhbSA9IHN0cmVhbSA9PiBzdHJlYW0uX3JlYWRhYmxlU3RhdGUucGlwZXMubGVuZ3RoID4gMDtcblxuLy8gV2hlbiBgdmVyYm9zZWAgaXMgYGZ1bGxgLCBwcmludCBzdGRvdXR8c3RkZXJyXG5jb25zdCBsb2dMaW5lID0gKGxpbmUsIGZkTnVtYmVyLCB2ZXJib3NlSW5mbykgPT4ge1xuXHRjb25zdCB2ZXJib3NlTWVzc2FnZSA9IHNlcmlhbGl6ZVZlcmJvc2VNZXNzYWdlKGxpbmUpO1xuXHR2ZXJib3NlTG9nKHtcblx0XHR0eXBlOiAnb3V0cHV0Jyxcblx0XHR2ZXJib3NlTWVzc2FnZSxcblx0XHRmZE51bWJlcixcblx0XHR2ZXJib3NlSW5mbyxcblx0fSk7XG59O1xuIiwgImltcG9ydCB7d3JpdGVGaWxlU3luYywgYXBwZW5kRmlsZVN5bmN9IGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHtzaG91bGRMb2dPdXRwdXQsIGxvZ0xpbmVzU3luY30gZnJvbSAnLi4vdmVyYm9zZS9vdXRwdXQuanMnO1xuaW1wb3J0IHtydW5HZW5lcmF0b3JzU3luY30gZnJvbSAnLi4vdHJhbnNmb3JtL2dlbmVyYXRvci5qcyc7XG5pbXBvcnQge3NwbGl0TGluZXNTeW5jfSBmcm9tICcuLi90cmFuc2Zvcm0vc3BsaXQuanMnO1xuaW1wb3J0IHtqb2luVG9TdHJpbmcsIGpvaW5Ub1VpbnQ4QXJyYXksIGJ1ZmZlclRvVWludDhBcnJheX0gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5pbXBvcnQge0ZJTEVfVFlQRVN9IGZyb20gJy4uL3N0ZGlvL3R5cGUuanMnO1xuaW1wb3J0IHt0cnVuY2F0ZU1heEJ1ZmZlclN5bmN9IGZyb20gJy4vbWF4LWJ1ZmZlci5qcyc7XG5cbi8vIEFwcGx5IGBzdGRvdXRgL2BzdGRlcnJgIG9wdGlvbnMsIGFmdGVyIHNwYXduaW5nLCBpbiBzeW5jIG1vZGVcbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1PdXRwdXRTeW5jID0gKHtmaWxlRGVzY3JpcHRvcnMsIHN5bmNSZXN1bHQ6IHtvdXRwdXR9LCBvcHRpb25zLCBpc01heEJ1ZmZlciwgdmVyYm9zZUluZm99KSA9PiB7XG5cdGlmIChvdXRwdXQgPT09IG51bGwpIHtcblx0XHRyZXR1cm4ge291dHB1dDogQXJyYXkuZnJvbSh7bGVuZ3RoOiAzfSl9O1xuXHR9XG5cblx0Y29uc3Qgc3RhdGUgPSB7fTtcblx0Y29uc3Qgb3V0cHV0RmlsZXMgPSBuZXcgU2V0KFtdKTtcblx0Y29uc3QgdHJhbnNmb3JtZWRPdXRwdXQgPSBvdXRwdXQubWFwKChyZXN1bHQsIGZkTnVtYmVyKSA9PlxuXHRcdHRyYW5zZm9ybU91dHB1dFJlc3VsdFN5bmMoe1xuXHRcdFx0cmVzdWx0LFxuXHRcdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdFx0ZmROdW1iZXIsXG5cdFx0XHRzdGF0ZSxcblx0XHRcdG91dHB1dEZpbGVzLFxuXHRcdFx0aXNNYXhCdWZmZXIsXG5cdFx0XHR2ZXJib3NlSW5mbyxcblx0XHR9LCBvcHRpb25zKSk7XG5cdHJldHVybiB7b3V0cHV0OiB0cmFuc2Zvcm1lZE91dHB1dCwgLi4uc3RhdGV9O1xufTtcblxuY29uc3QgdHJhbnNmb3JtT3V0cHV0UmVzdWx0U3luYyA9IChcblx0e3Jlc3VsdCwgZmlsZURlc2NyaXB0b3JzLCBmZE51bWJlciwgc3RhdGUsIG91dHB1dEZpbGVzLCBpc01heEJ1ZmZlciwgdmVyYm9zZUluZm99LFxuXHR7YnVmZmVyLCBlbmNvZGluZywgbGluZXMsIHN0cmlwRmluYWxOZXdsaW5lLCBtYXhCdWZmZXJ9LFxuKSA9PiB7XG5cdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0cnVuY2F0ZWRSZXN1bHQgPSB0cnVuY2F0ZU1heEJ1ZmZlclN5bmMocmVzdWx0LCBpc01heEJ1ZmZlciwgbWF4QnVmZmVyKTtcblx0Y29uc3QgdWludDhBcnJheVJlc3VsdCA9IGJ1ZmZlclRvVWludDhBcnJheSh0cnVuY2F0ZWRSZXN1bHQpO1xuXHRjb25zdCB7c3RkaW9JdGVtcywgb2JqZWN0TW9kZX0gPSBmaWxlRGVzY3JpcHRvcnNbZmROdW1iZXJdO1xuXHRjb25zdCBjaHVua3MgPSBydW5PdXRwdXRHZW5lcmF0b3JzU3luYyhbdWludDhBcnJheVJlc3VsdF0sIHN0ZGlvSXRlbXMsIGVuY29kaW5nLCBzdGF0ZSk7XG5cdGNvbnN0IHtzZXJpYWxpemVkUmVzdWx0LCBmaW5hbFJlc3VsdCA9IHNlcmlhbGl6ZWRSZXN1bHR9ID0gc2VyaWFsaXplQ2h1bmtzKHtcblx0XHRjaHVua3MsXG5cdFx0b2JqZWN0TW9kZSxcblx0XHRlbmNvZGluZyxcblx0XHRsaW5lcyxcblx0XHRzdHJpcEZpbmFsTmV3bGluZSxcblx0XHRmZE51bWJlcixcblx0fSk7XG5cblx0bG9nT3V0cHV0U3luYyh7XG5cdFx0c2VyaWFsaXplZFJlc3VsdCxcblx0XHRmZE51bWJlcixcblx0XHRzdGF0ZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRlbmNvZGluZyxcblx0XHRzdGRpb0l0ZW1zLFxuXHRcdG9iamVjdE1vZGUsXG5cdH0pO1xuXG5cdGNvbnN0IHJldHVybmVkUmVzdWx0ID0gYnVmZmVyW2ZkTnVtYmVyXSA/IGZpbmFsUmVzdWx0IDogdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0aWYgKHN0YXRlLmVycm9yID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHdyaXRlVG9GaWxlcyhzZXJpYWxpemVkUmVzdWx0LCBzdGRpb0l0ZW1zLCBvdXRwdXRGaWxlcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldHVybmVkUmVzdWx0O1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHN0YXRlLmVycm9yID0gZXJyb3I7XG5cdFx0cmV0dXJuIHJldHVybmVkUmVzdWx0O1xuXHR9XG59O1xuXG4vLyBBcHBsaWVzIHRyYW5zZm9ybSBnZW5lcmF0b3JzIHRvIGBzdGRvdXRgL2BzdGRlcnJgXG5jb25zdCBydW5PdXRwdXRHZW5lcmF0b3JzU3luYyA9IChjaHVua3MsIHN0ZGlvSXRlbXMsIGVuY29kaW5nLCBzdGF0ZSkgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBydW5HZW5lcmF0b3JzU3luYyhjaHVua3MsIHN0ZGlvSXRlbXMsIGVuY29kaW5nLCBmYWxzZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0c3RhdGUuZXJyb3IgPSBlcnJvcjtcblx0XHRyZXR1cm4gY2h1bmtzO1xuXHR9XG59O1xuXG4vLyBUaGUgY29udGVudHMgaXMgY29udmVydGVkIHRvIHRocmVlIHN0YWdlczpcbi8vICAtIHNlcmlhbGl6ZWRSZXN1bHQ6IHVzZWQgd2hlbiB0aGUgdGFyZ2V0IGlzIGEgZmlsZSBwYXRoL1VSTCBvciBhIGZpbGUgZGVzY3JpcHRvciAoaW5jbHVkaW5nICdpbmhlcml0Jylcbi8vICAtIGZpbmFsUmVzdWx0L3JldHVybmVkUmVzdWx0OiByZXR1cm5lZCBhcyBgcmVzdWx0LnN0ZCpgXG5jb25zdCBzZXJpYWxpemVDaHVua3MgPSAoe2NodW5rcywgb2JqZWN0TW9kZSwgZW5jb2RpbmcsIGxpbmVzLCBzdHJpcEZpbmFsTmV3bGluZSwgZmROdW1iZXJ9KSA9PiB7XG5cdGlmIChvYmplY3RNb2RlKSB7XG5cdFx0cmV0dXJuIHtzZXJpYWxpemVkUmVzdWx0OiBjaHVua3N9O1xuXHR9XG5cblx0aWYgKGVuY29kaW5nID09PSAnYnVmZmVyJykge1xuXHRcdHJldHVybiB7c2VyaWFsaXplZFJlc3VsdDogam9pblRvVWludDhBcnJheShjaHVua3MpfTtcblx0fVxuXG5cdGNvbnN0IHNlcmlhbGl6ZWRSZXN1bHQgPSBqb2luVG9TdHJpbmcoY2h1bmtzLCBlbmNvZGluZyk7XG5cdGlmIChsaW5lc1tmZE51bWJlcl0pIHtcblx0XHRyZXR1cm4ge3NlcmlhbGl6ZWRSZXN1bHQsIGZpbmFsUmVzdWx0OiBzcGxpdExpbmVzU3luYyhzZXJpYWxpemVkUmVzdWx0LCAhc3RyaXBGaW5hbE5ld2xpbmVbZmROdW1iZXJdLCBvYmplY3RNb2RlKX07XG5cdH1cblxuXHRyZXR1cm4ge3NlcmlhbGl6ZWRSZXN1bHR9O1xufTtcblxuY29uc3QgbG9nT3V0cHV0U3luYyA9ICh7c2VyaWFsaXplZFJlc3VsdCwgZmROdW1iZXIsIHN0YXRlLCB2ZXJib3NlSW5mbywgZW5jb2RpbmcsIHN0ZGlvSXRlbXMsIG9iamVjdE1vZGV9KSA9PiB7XG5cdGlmICghc2hvdWxkTG9nT3V0cHV0KHtcblx0XHRzdGRpb0l0ZW1zLFxuXHRcdGVuY29kaW5nLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHRcdGZkTnVtYmVyLFxuXHR9KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGxpbmVzQXJyYXkgPSBzcGxpdExpbmVzU3luYyhzZXJpYWxpemVkUmVzdWx0LCBmYWxzZSwgb2JqZWN0TW9kZSk7XG5cblx0dHJ5IHtcblx0XHRsb2dMaW5lc1N5bmMobGluZXNBcnJheSwgZmROdW1iZXIsIHZlcmJvc2VJbmZvKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRzdGF0ZS5lcnJvciA/Pz0gZXJyb3I7XG5cdH1cbn07XG5cbi8vIFdoZW4gdGhlIGBzdGQqYCB0YXJnZXQgaXMgYSBmaWxlIHBhdGgvVVJMIG9yIGEgZmlsZSBkZXNjcmlwdG9yXG5jb25zdCB3cml0ZVRvRmlsZXMgPSAoc2VyaWFsaXplZFJlc3VsdCwgc3RkaW9JdGVtcywgb3V0cHV0RmlsZXMpID0+IHtcblx0Zm9yIChjb25zdCB7cGF0aCwgYXBwZW5kfSBvZiBzdGRpb0l0ZW1zLmZpbHRlcigoe3R5cGV9KSA9PiBGSUxFX1RZUEVTLmhhcyh0eXBlKSkpIHtcblx0XHRjb25zdCBwYXRoU3RyaW5nID0gdHlwZW9mIHBhdGggPT09ICdzdHJpbmcnID8gcGF0aCA6IHBhdGgudG9TdHJpbmcoKTtcblx0XHRpZiAoYXBwZW5kIHx8IG91dHB1dEZpbGVzLmhhcyhwYXRoU3RyaW5nKSkge1xuXHRcdFx0YXBwZW5kRmlsZVN5bmMocGF0aCwgc2VyaWFsaXplZFJlc3VsdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG91dHB1dEZpbGVzLmFkZChwYXRoU3RyaW5nKTtcblx0XHRcdHdyaXRlRmlsZVN5bmMocGF0aCwgc2VyaWFsaXplZFJlc3VsdCk7XG5cdFx0fVxuXHR9XG59O1xuIiwgImltcG9ydCB7aXNVaW50OEFycmF5LCBjb25jYXRVaW50OEFycmF5c30gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5pbXBvcnQge3N0cmlwTmV3bGluZX0gZnJvbSAnLi4vaW8vc3RyaXAtbmV3bGluZS5qcyc7XG5cbi8vIFJldHJpZXZlIGByZXN1bHQuYWxsYCB3aXRoIHN5bmNocm9ub3VzIG1ldGhvZHNcbmV4cG9ydCBjb25zdCBnZXRBbGxTeW5jID0gKFssIHN0ZG91dCwgc3RkZXJyXSwgb3B0aW9ucykgPT4ge1xuXHRpZiAoIW9wdGlvbnMuYWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHN0ZG91dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHN0ZGVycjtcblx0fVxuXG5cdGlmIChzdGRlcnIgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBzdGRvdXQ7XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheShzdGRvdXQpKSB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoc3RkZXJyKVxuXHRcdFx0PyBbLi4uc3Rkb3V0LCAuLi5zdGRlcnJdXG5cdFx0XHQ6IFsuLi5zdGRvdXQsIHN0cmlwTmV3bGluZShzdGRlcnIsIG9wdGlvbnMsICdhbGwnKV07XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheShzdGRlcnIpKSB7XG5cdFx0cmV0dXJuIFtzdHJpcE5ld2xpbmUoc3Rkb3V0LCBvcHRpb25zLCAnYWxsJyksIC4uLnN0ZGVycl07XG5cdH1cblxuXHRpZiAoaXNVaW50OEFycmF5KHN0ZG91dCkgJiYgaXNVaW50OEFycmF5KHN0ZGVycikpIHtcblx0XHRyZXR1cm4gY29uY2F0VWludDhBcnJheXMoW3N0ZG91dCwgc3RkZXJyXSk7XG5cdH1cblxuXHRyZXR1cm4gYCR7c3Rkb3V0fSR7c3RkZXJyfWA7XG59O1xuIiwgImltcG9ydCB7b25jZX0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtEaXNjYXJkZWRFcnJvcn0gZnJvbSAnLi4vcmV0dXJuL2ZpbmFsLWVycm9yLmpzJztcblxuLy8gSWYgYGVycm9yYCBpcyBlbWl0dGVkIGJlZm9yZSBgc3Bhd25gLCBgZXhpdGAgd2lsbCBuZXZlciBiZSBlbWl0dGVkLlxuLy8gSG93ZXZlciwgYGVycm9yYCBtaWdodCBiZSBlbWl0dGVkIGFmdGVyIGBzcGF3bmAuXG4vLyBJbiB0aGF0IGNhc2UsIGBleGl0YCB3aWxsIHN0aWxsIGJlIGVtaXR0ZWQuXG4vLyBTaW5jZSB0aGUgYGV4aXRgIGV2ZW50IGNvbnRhaW5zIHRoZSBzaWduYWwgbmFtZSwgd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgYXJlIGxpc3RlbmluZyBmb3IgaXQuXG4vLyBUaGlzIGZ1bmN0aW9uIGFsc28gdGFrZXMgaW50byBhY2NvdW50IHRoZSBmb2xsb3dpbmcgdW5saWtlbHkgY2FzZXM6XG4vLyAgLSBgZXhpdGAgYmVpbmcgZW1pdHRlZCBpbiB0aGUgc2FtZSBtaWNyb3Rhc2sgYXMgYHNwYXduYFxuLy8gIC0gYGVycm9yYCBiZWluZyBlbWl0dGVkIG11bHRpcGxlIHRpbWVzXG5leHBvcnQgY29uc3Qgd2FpdEZvckV4aXQgPSBhc3luYyAoc3VicHJvY2VzcywgY29udGV4dCkgPT4ge1xuXHRjb25zdCBbZXhpdENvZGUsIHNpZ25hbF0gPSBhd2FpdCB3YWl0Rm9yRXhpdE9yRXJyb3Ioc3VicHJvY2Vzcyk7XG5cdGNvbnRleHQuaXNGb3JjZWZ1bGx5VGVybWluYXRlZCA/Pz0gZmFsc2U7XG5cdHJldHVybiBbZXhpdENvZGUsIHNpZ25hbF07XG59O1xuXG5jb25zdCB3YWl0Rm9yRXhpdE9yRXJyb3IgPSBhc3luYyBzdWJwcm9jZXNzID0+IHtcblx0Y29uc3QgW3NwYXduUGF5bG9hZCwgZXhpdFBheWxvYWRdID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFtcblx0XHRvbmNlKHN1YnByb2Nlc3MsICdzcGF3bicpLFxuXHRcdG9uY2Uoc3VicHJvY2VzcywgJ2V4aXQnKSxcblx0XSk7XG5cblx0aWYgKHNwYXduUGF5bG9hZC5zdGF0dXMgPT09ICdyZWplY3RlZCcpIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRyZXR1cm4gZXhpdFBheWxvYWQuc3RhdHVzID09PSAncmVqZWN0ZWQnXG5cdFx0PyB3YWl0Rm9yU3VicHJvY2Vzc0V4aXQoc3VicHJvY2Vzcylcblx0XHQ6IGV4aXRQYXlsb2FkLnZhbHVlO1xufTtcblxuY29uc3Qgd2FpdEZvclN1YnByb2Nlc3NFeGl0ID0gYXN5bmMgc3VicHJvY2VzcyA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IG9uY2Uoc3VicHJvY2VzcywgJ2V4aXQnKTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIHdhaXRGb3JTdWJwcm9jZXNzRXhpdChzdWJwcm9jZXNzKTtcblx0fVxufTtcblxuLy8gUmV0cmlldmUgdGhlIGZpbmFsIGV4aXQgY29kZSBhbmR8b3Igc2lnbmFsIG5hbWVcbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3VjY2Vzc2Z1bEV4aXQgPSBhc3luYyBleGl0UHJvbWlzZSA9PiB7XG5cdGNvbnN0IFtleGl0Q29kZSwgc2lnbmFsXSA9IGF3YWl0IGV4aXRQcm9taXNlO1xuXG5cdGlmICghaXNTdWJwcm9jZXNzRXJyb3JFeGl0KGV4aXRDb2RlLCBzaWduYWwpICYmIGlzRmFpbGVkRXhpdChleGl0Q29kZSwgc2lnbmFsKSkge1xuXHRcdHRocm93IG5ldyBEaXNjYXJkZWRFcnJvcigpO1xuXHR9XG5cblx0cmV0dXJuIFtleGl0Q29kZSwgc2lnbmFsXTtcbn07XG5cbi8vIFdoZW4gdGhlIHN1YnByb2Nlc3MgZmFpbHMgZHVlIHRvIGFuIGBlcnJvcmAgZXZlbnRcbmNvbnN0IGlzU3VicHJvY2Vzc0Vycm9yRXhpdCA9IChleGl0Q29kZSwgc2lnbmFsKSA9PiBleGl0Q29kZSA9PT0gdW5kZWZpbmVkICYmIHNpZ25hbCA9PT0gdW5kZWZpbmVkO1xuLy8gV2hlbiB0aGUgc3VicHJvY2VzcyBmYWlscyBkdWUgdG8gYSBub24tMCBleGl0IGNvZGUgb3IgdG8gYSBzaWduYWwgdGVybWluYXRpb25cbmV4cG9ydCBjb25zdCBpc0ZhaWxlZEV4aXQgPSAoZXhpdENvZGUsIHNpZ25hbCkgPT4gZXhpdENvZGUgIT09IDAgfHwgc2lnbmFsICE9PSBudWxsO1xuIiwgImltcG9ydCB7RGlzY2FyZGVkRXJyb3J9IGZyb20gJy4uL3JldHVybi9maW5hbC1lcnJvci5qcyc7XG5pbXBvcnQge2lzTWF4QnVmZmVyU3luY30gZnJvbSAnLi4vaW8vbWF4LWJ1ZmZlci5qcyc7XG5pbXBvcnQge2lzRmFpbGVkRXhpdH0gZnJvbSAnLi9leGl0LWFzeW5jLmpzJztcblxuLy8gUmV0cmlldmUgZXhpdCBjb2RlLCBzaWduYWwgbmFtZSBhbmQgZXJyb3IgaW5mb3JtYXRpb24sIHdpdGggc3luY2hyb25vdXMgbWV0aG9kc1xuZXhwb3J0IGNvbnN0IGdldEV4aXRSZXN1bHRTeW5jID0gKHtlcnJvciwgc3RhdHVzOiBleGl0Q29kZSwgc2lnbmFsLCBvdXRwdXR9LCB7bWF4QnVmZmVyfSkgPT4ge1xuXHRjb25zdCByZXN1bHRFcnJvciA9IGdldFJlc3VsdEVycm9yKGVycm9yLCBleGl0Q29kZSwgc2lnbmFsKTtcblx0Y29uc3QgdGltZWRPdXQgPSByZXN1bHRFcnJvcj8uY29kZSA9PT0gJ0VUSU1FRE9VVCc7XG5cdGNvbnN0IGlzTWF4QnVmZmVyID0gaXNNYXhCdWZmZXJTeW5jKHJlc3VsdEVycm9yLCBvdXRwdXQsIG1heEJ1ZmZlcik7XG5cdHJldHVybiB7XG5cdFx0cmVzdWx0RXJyb3IsXG5cdFx0ZXhpdENvZGUsXG5cdFx0c2lnbmFsLFxuXHRcdHRpbWVkT3V0LFxuXHRcdGlzTWF4QnVmZmVyLFxuXHR9O1xufTtcblxuY29uc3QgZ2V0UmVzdWx0RXJyb3IgPSAoZXJyb3IsIGV4aXRDb2RlLCBzaWduYWwpID0+IHtcblx0aWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gZXJyb3I7XG5cdH1cblxuXHRyZXR1cm4gaXNGYWlsZWRFeGl0KGV4aXRDb2RlLCBzaWduYWwpID8gbmV3IERpc2NhcmRlZEVycm9yKCkgOiB1bmRlZmluZWQ7XG59O1xuIiwgImltcG9ydCB7c3Bhd25TeW5jfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHtoYW5kbGVDb21tYW5kfSBmcm9tICcuLi9hcmd1bWVudHMvY29tbWFuZC5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZU9wdGlvbnN9IGZyb20gJy4uL2FyZ3VtZW50cy9vcHRpb25zLmpzJztcbmltcG9ydCB7Y29uY2F0ZW5hdGVTaGVsbH0gZnJvbSAnLi4vYXJndW1lbnRzL3NoZWxsLmpzJztcbmltcG9ydCB7bWFrZUVycm9yLCBtYWtlRWFybHlFcnJvciwgbWFrZVN1Y2Nlc3NSZXN1bHR9IGZyb20gJy4uL3JldHVybi9yZXN1bHQuanMnO1xuaW1wb3J0IHtoYW5kbGVSZXN1bHR9IGZyb20gJy4uL3JldHVybi9yZWplY3QuanMnO1xuaW1wb3J0IHtoYW5kbGVTdGRpb1N5bmN9IGZyb20gJy4uL3N0ZGlvL2hhbmRsZS1zeW5jLmpzJztcbmltcG9ydCB7c3RyaXBOZXdsaW5lfSBmcm9tICcuLi9pby9zdHJpcC1uZXdsaW5lLmpzJztcbmltcG9ydCB7YWRkSW5wdXRPcHRpb25zU3luY30gZnJvbSAnLi4vaW8vaW5wdXQtc3luYy5qcyc7XG5pbXBvcnQge3RyYW5zZm9ybU91dHB1dFN5bmN9IGZyb20gJy4uL2lvL291dHB1dC1zeW5jLmpzJztcbmltcG9ydCB7Z2V0TWF4QnVmZmVyU3luY30gZnJvbSAnLi4vaW8vbWF4LWJ1ZmZlci5qcyc7XG5pbXBvcnQge2dldEFsbFN5bmN9IGZyb20gJy4uL3Jlc29sdmUvYWxsLXN5bmMuanMnO1xuaW1wb3J0IHtnZXRFeGl0UmVzdWx0U3luY30gZnJvbSAnLi4vcmVzb2x2ZS9leGl0LXN5bmMuanMnO1xuXG4vLyBNYWluIHNoYXJlZCBsb2dpYyBmb3IgYWxsIHN5bmMgbWV0aG9kczogYGV4ZWNhU3luYygpYCwgYCQuc3luYygpYFxuZXhwb3J0IGNvbnN0IGV4ZWNhQ29yZVN5bmMgPSAocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKSA9PiB7XG5cdGNvbnN0IHtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBjb21tYW5kLCBlc2NhcGVkQ29tbWFuZCwgc3RhcnRUaW1lLCB2ZXJib3NlSW5mbywgb3B0aW9ucywgZmlsZURlc2NyaXB0b3JzfSA9IGhhbmRsZVN5bmNBcmd1bWVudHMocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKTtcblx0Y29uc3QgcmVzdWx0ID0gc3Bhd25TdWJwcm9jZXNzU3luYyh7XG5cdFx0ZmlsZSxcblx0XHRjb21tYW5kQXJndW1lbnRzLFxuXHRcdG9wdGlvbnMsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcblx0cmV0dXJuIGhhbmRsZVJlc3VsdChyZXN1bHQsIHZlcmJvc2VJbmZvLCBvcHRpb25zKTtcbn07XG5cbi8vIENvbXB1dGUgYXJndW1lbnRzIHRvIHBhc3MgdG8gYGNoaWxkX3Byb2Nlc3Muc3Bhd25TeW5jKClgXG5jb25zdCBoYW5kbGVTeW5jQXJndW1lbnRzID0gKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucykgPT4ge1xuXHRjb25zdCB7Y29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIHN0YXJ0VGltZSwgdmVyYm9zZUluZm99ID0gaGFuZGxlQ29tbWFuZChyYXdGaWxlLCByYXdBcmd1bWVudHMsIHJhd09wdGlvbnMpO1xuXHRjb25zdCBzeW5jT3B0aW9ucyA9IG5vcm1hbGl6ZVN5bmNPcHRpb25zKHJhd09wdGlvbnMpO1xuXHRjb25zdCB7ZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9uc30gPSBub3JtYWxpemVPcHRpb25zKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgc3luY09wdGlvbnMpO1xuXHR2YWxpZGF0ZVN5bmNPcHRpb25zKG9wdGlvbnMpO1xuXHRjb25zdCBmaWxlRGVzY3JpcHRvcnMgPSBoYW5kbGVTdGRpb1N5bmMob3B0aW9ucywgdmVyYm9zZUluZm8pO1xuXHRyZXR1cm4ge1xuXHRcdGZpbGUsXG5cdFx0Y29tbWFuZEFyZ3VtZW50cyxcblx0XHRjb21tYW5kLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdHN0YXJ0VGltZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRvcHRpb25zLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0fTtcbn07XG5cbi8vIE9wdGlvbnMgbm9ybWFsaXphdGlvbiBsb2dpYyBzcGVjaWZpYyB0byBzeW5jIG1ldGhvZHNcbmNvbnN0IG5vcm1hbGl6ZVN5bmNPcHRpb25zID0gb3B0aW9ucyA9PiBvcHRpb25zLm5vZGUgJiYgIW9wdGlvbnMuaXBjID8gey4uLm9wdGlvbnMsIGlwYzogZmFsc2V9IDogb3B0aW9ucztcblxuLy8gT3B0aW9ucyB2YWxpZGF0aW9uIGxvZ2ljIHNwZWNpZmljIHRvIHN5bmMgbWV0aG9kc1xuY29uc3QgdmFsaWRhdGVTeW5jT3B0aW9ucyA9ICh7aXBjLCBpcGNJbnB1dCwgZGV0YWNoZWQsIGNhbmNlbFNpZ25hbH0pID0+IHtcblx0aWYgKGlwY0lucHV0KSB7XG5cdFx0dGhyb3dJbnZhbGlkU3luY09wdGlvbignaXBjSW5wdXQnKTtcblx0fVxuXG5cdGlmIChpcGMpIHtcblx0XHR0aHJvd0ludmFsaWRTeW5jT3B0aW9uKCdpcGM6IHRydWUnKTtcblx0fVxuXG5cdGlmIChkZXRhY2hlZCkge1xuXHRcdHRocm93SW52YWxpZFN5bmNPcHRpb24oJ2RldGFjaGVkOiB0cnVlJyk7XG5cdH1cblxuXHRpZiAoY2FuY2VsU2lnbmFsKSB7XG5cdFx0dGhyb3dJbnZhbGlkU3luY09wdGlvbignY2FuY2VsU2lnbmFsJyk7XG5cdH1cbn07XG5cbmNvbnN0IHRocm93SW52YWxpZFN5bmNPcHRpb24gPSB2YWx1ZSA9PiB7XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcIiR7dmFsdWV9XCIgb3B0aW9uIGNhbm5vdCBiZSB1c2VkIHdpdGggc3luY2hyb25vdXMgbWV0aG9kcy5gKTtcbn07XG5cbmNvbnN0IHNwYXduU3VicHJvY2Vzc1N5bmMgPSAoe2ZpbGUsIGNvbW1hbmRBcmd1bWVudHMsIG9wdGlvbnMsIGNvbW1hbmQsIGVzY2FwZWRDb21tYW5kLCB2ZXJib3NlSW5mbywgZmlsZURlc2NyaXB0b3JzLCBzdGFydFRpbWV9KSA9PiB7XG5cdGNvbnN0IHN5bmNSZXN1bHQgPSBydW5TdWJwcm9jZXNzU3luYyh7XG5cdFx0ZmlsZSxcblx0XHRjb21tYW5kQXJndW1lbnRzLFxuXHRcdG9wdGlvbnMsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcblx0aWYgKHN5bmNSZXN1bHQuZmFpbGVkKSB7XG5cdFx0cmV0dXJuIHN5bmNSZXN1bHQ7XG5cdH1cblxuXHRjb25zdCB7cmVzdWx0RXJyb3IsIGV4aXRDb2RlLCBzaWduYWwsIHRpbWVkT3V0LCBpc01heEJ1ZmZlcn0gPSBnZXRFeGl0UmVzdWx0U3luYyhzeW5jUmVzdWx0LCBvcHRpb25zKTtcblx0Y29uc3Qge291dHB1dCwgZXJyb3IgPSByZXN1bHRFcnJvcn0gPSB0cmFuc2Zvcm1PdXRwdXRTeW5jKHtcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0c3luY1Jlc3VsdCxcblx0XHRvcHRpb25zLFxuXHRcdGlzTWF4QnVmZmVyLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHR9KTtcblx0Y29uc3Qgc3RkaW8gPSBvdXRwdXQubWFwKChzdGRpb091dHB1dCwgZmROdW1iZXIpID0+IHN0cmlwTmV3bGluZShzdGRpb091dHB1dCwgb3B0aW9ucywgZmROdW1iZXIpKTtcblx0Y29uc3QgYWxsID0gc3RyaXBOZXdsaW5lKGdldEFsbFN5bmMob3V0cHV0LCBvcHRpb25zKSwgb3B0aW9ucywgJ2FsbCcpO1xuXHRyZXR1cm4gZ2V0U3luY1Jlc3VsdCh7XG5cdFx0ZXJyb3IsXG5cdFx0ZXhpdENvZGUsXG5cdFx0c2lnbmFsLFxuXHRcdHRpbWVkT3V0LFxuXHRcdGlzTWF4QnVmZmVyLFxuXHRcdHN0ZGlvLFxuXHRcdGFsbCxcblx0XHRvcHRpb25zLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcbn07XG5cbmNvbnN0IHJ1blN1YnByb2Nlc3NTeW5jID0gKHtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zLCBjb21tYW5kLCBlc2NhcGVkQ29tbWFuZCwgZmlsZURlc2NyaXB0b3JzLCBzdGFydFRpbWV9KSA9PiB7XG5cdHRyeSB7XG5cdFx0YWRkSW5wdXRPcHRpb25zU3luYyhmaWxlRGVzY3JpcHRvcnMsIG9wdGlvbnMpO1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0gbm9ybWFsaXplU3Bhd25TeW5jT3B0aW9ucyhvcHRpb25zKTtcblx0XHRyZXR1cm4gc3Bhd25TeW5jKC4uLmNvbmNhdGVuYXRlU2hlbGwoZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgbm9ybWFsaXplZE9wdGlvbnMpKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gbWFrZUVhcmx5RXJyb3Ioe1xuXHRcdFx0ZXJyb3IsXG5cdFx0XHRjb21tYW5kLFxuXHRcdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0XHRvcHRpb25zLFxuXHRcdFx0c3RhcnRUaW1lLFxuXHRcdFx0aXNTeW5jOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG59O1xuXG4vLyBUaGUgYGVuY29kaW5nYCBvcHRpb24gaXMgaGFuZGxlZCBieSBFeGVjYSwgbm90IGJ5IGBjaGlsZF9wcm9jZXNzLnNwYXduU3luYygpYFxuY29uc3Qgbm9ybWFsaXplU3Bhd25TeW5jT3B0aW9ucyA9ICh7ZW5jb2RpbmcsIG1heEJ1ZmZlciwgLi4ub3B0aW9uc30pID0+ICh7Li4ub3B0aW9ucywgZW5jb2Rpbmc6ICdidWZmZXInLCBtYXhCdWZmZXI6IGdldE1heEJ1ZmZlclN5bmMobWF4QnVmZmVyKX0pO1xuXG5jb25zdCBnZXRTeW5jUmVzdWx0ID0gKHtlcnJvciwgZXhpdENvZGUsIHNpZ25hbCwgdGltZWRPdXQsIGlzTWF4QnVmZmVyLCBzdGRpbywgYWxsLCBvcHRpb25zLCBjb21tYW5kLCBlc2NhcGVkQ29tbWFuZCwgc3RhcnRUaW1lfSkgPT4gZXJyb3IgPT09IHVuZGVmaW5lZFxuXHQ/IG1ha2VTdWNjZXNzUmVzdWx0KHtcblx0XHRjb21tYW5kLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdHN0ZGlvLFxuXHRcdGFsbCxcblx0XHRpcGNPdXRwdXQ6IFtdLFxuXHRcdG9wdGlvbnMsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KVxuXHQ6IG1ha2VFcnJvcih7XG5cdFx0ZXJyb3IsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHR0aW1lZE91dCxcblx0XHRpc0NhbmNlbGVkOiBmYWxzZSxcblx0XHRpc0dyYWNlZnVsbHlDYW5jZWxlZDogZmFsc2UsXG5cdFx0aXNNYXhCdWZmZXIsXG5cdFx0aXNGb3JjZWZ1bGx5VGVybWluYXRlZDogZmFsc2UsXG5cdFx0ZXhpdENvZGUsXG5cdFx0c2lnbmFsLFxuXHRcdHN0ZGlvLFxuXHRcdGFsbCxcblx0XHRpcGNPdXRwdXQ6IFtdLFxuXHRcdG9wdGlvbnMsXG5cdFx0c3RhcnRUaW1lLFxuXHRcdGlzU3luYzogdHJ1ZSxcblx0fSk7XG4iLCAiaW1wb3J0IHtvbmNlLCBvbn0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtcblx0dmFsaWRhdGVJcGNNZXRob2QsXG5cdHRocm93T25FYXJseURpc2Nvbm5lY3QsXG5cdGRpc2Nvbm5lY3QsXG5cdGdldFN0cmljdFJlc3BvbnNlRXJyb3IsXG59IGZyb20gJy4vdmFsaWRhdGlvbi5qcyc7XG5pbXBvcnQge2dldElwY0VtaXR0ZXIsIGlzQ29ubmVjdGVkfSBmcm9tICcuL2ZvcndhcmQuanMnO1xuaW1wb3J0IHthZGRSZWZlcmVuY2UsIHJlbW92ZVJlZmVyZW5jZX0gZnJvbSAnLi9yZWZlcmVuY2UuanMnO1xuXG4vLyBMaWtlIGBbc3ViXXByb2Nlc3Mub25jZSgnbWVzc2FnZScpYCBidXQgcHJvbWlzZS1iYXNlZFxuZXhwb3J0IGNvbnN0IGdldE9uZU1lc3NhZ2UgPSAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgaXBjfSwge3JlZmVyZW5jZSA9IHRydWUsIGZpbHRlcn0gPSB7fSkgPT4ge1xuXHR2YWxpZGF0ZUlwY01ldGhvZCh7XG5cdFx0bWV0aG9kTmFtZTogJ2dldE9uZU1lc3NhZ2UnLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0XHRpcGMsXG5cdFx0aXNDb25uZWN0ZWQ6IGlzQ29ubmVjdGVkKGFueVByb2Nlc3MpLFxuXHR9KTtcblxuXHRyZXR1cm4gZ2V0T25lTWVzc2FnZUFzeW5jKHtcblx0XHRhbnlQcm9jZXNzLFxuXHRcdGNoYW5uZWwsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGZpbHRlcixcblx0XHRyZWZlcmVuY2UsXG5cdH0pO1xufTtcblxuY29uc3QgZ2V0T25lTWVzc2FnZUFzeW5jID0gYXN5bmMgKHthbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MsIGZpbHRlciwgcmVmZXJlbmNlfSkgPT4ge1xuXHRhZGRSZWZlcmVuY2UoY2hhbm5lbCwgcmVmZXJlbmNlKTtcblx0Y29uc3QgaXBjRW1pdHRlciA9IGdldElwY0VtaXR0ZXIoYW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzKTtcblx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRcdGdldE1lc3NhZ2UoaXBjRW1pdHRlciwgZmlsdGVyLCBjb250cm9sbGVyKSxcblx0XHRcdHRocm93T25EaXNjb25uZWN0KGlwY0VtaXR0ZXIsIGlzU3VicHJvY2VzcywgY29udHJvbGxlciksXG5cdFx0XHR0aHJvd09uU3RyaWN0RXJyb3IoaXBjRW1pdHRlciwgaXNTdWJwcm9jZXNzLCBjb250cm9sbGVyKSxcblx0XHRdKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRkaXNjb25uZWN0KGFueVByb2Nlc3MpO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGZpbmFsbHkge1xuXHRcdGNvbnRyb2xsZXIuYWJvcnQoKTtcblx0XHRyZW1vdmVSZWZlcmVuY2UoY2hhbm5lbCwgcmVmZXJlbmNlKTtcblx0fVxufTtcblxuY29uc3QgZ2V0TWVzc2FnZSA9IGFzeW5jIChpcGNFbWl0dGVyLCBmaWx0ZXIsIHtzaWduYWx9KSA9PiB7XG5cdGlmIChmaWx0ZXIgPT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbnN0IFttZXNzYWdlXSA9IGF3YWl0IG9uY2UoaXBjRW1pdHRlciwgJ21lc3NhZ2UnLCB7c2lnbmFsfSk7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH1cblxuXHRmb3IgYXdhaXQgKGNvbnN0IFttZXNzYWdlXSBvZiBvbihpcGNFbWl0dGVyLCAnbWVzc2FnZScsIHtzaWduYWx9KSkge1xuXHRcdGlmIChmaWx0ZXIobWVzc2FnZSkpIHtcblx0XHRcdHJldHVybiBtZXNzYWdlO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgdGhyb3dPbkRpc2Nvbm5lY3QgPSBhc3luYyAoaXBjRW1pdHRlciwgaXNTdWJwcm9jZXNzLCB7c2lnbmFsfSkgPT4ge1xuXHRhd2FpdCBvbmNlKGlwY0VtaXR0ZXIsICdkaXNjb25uZWN0Jywge3NpZ25hbH0pO1xuXHR0aHJvd09uRWFybHlEaXNjb25uZWN0KGlzU3VicHJvY2Vzcyk7XG59O1xuXG5jb25zdCB0aHJvd09uU3RyaWN0RXJyb3IgPSBhc3luYyAoaXBjRW1pdHRlciwgaXNTdWJwcm9jZXNzLCB7c2lnbmFsfSkgPT4ge1xuXHRjb25zdCBbZXJyb3JdID0gYXdhaXQgb25jZShpcGNFbWl0dGVyLCAnc3RyaWN0OmVycm9yJywge3NpZ25hbH0pO1xuXHR0aHJvdyBnZXRTdHJpY3RSZXNwb25zZUVycm9yKGVycm9yLCBpc1N1YnByb2Nlc3MpO1xufTtcbiIsICJpbXBvcnQge29uY2UsIG9ufSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge3ZhbGlkYXRlSXBjTWV0aG9kLCBkaXNjb25uZWN0LCBnZXRTdHJpY3RSZXNwb25zZUVycm9yfSBmcm9tICcuL3ZhbGlkYXRpb24uanMnO1xuaW1wb3J0IHtnZXRJcGNFbWl0dGVyLCBpc0Nvbm5lY3RlZH0gZnJvbSAnLi9mb3J3YXJkLmpzJztcbmltcG9ydCB7YWRkUmVmZXJlbmNlLCByZW1vdmVSZWZlcmVuY2V9IGZyb20gJy4vcmVmZXJlbmNlLmpzJztcblxuLy8gTGlrZSBgW3N1Yl1wcm9jZXNzLm9uKCdtZXNzYWdlJylgIGJ1dCBwcm9taXNlLWJhc2VkXG5leHBvcnQgY29uc3QgZ2V0RWFjaE1lc3NhZ2UgPSAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgaXBjfSwge3JlZmVyZW5jZSA9IHRydWV9ID0ge30pID0+IGxvb3BPbk1lc3NhZ2VzKHtcblx0YW55UHJvY2Vzcyxcblx0Y2hhbm5lbCxcblx0aXNTdWJwcm9jZXNzLFxuXHRpcGMsXG5cdHNob3VsZEF3YWl0OiAhaXNTdWJwcm9jZXNzLFxuXHRyZWZlcmVuY2UsXG59KTtcblxuLy8gU2FtZSBidXQgdXNlZCBpbnRlcm5hbGx5XG5leHBvcnQgY29uc3QgbG9vcE9uTWVzc2FnZXMgPSAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgaXBjLCBzaG91bGRBd2FpdCwgcmVmZXJlbmNlfSkgPT4ge1xuXHR2YWxpZGF0ZUlwY01ldGhvZCh7XG5cdFx0bWV0aG9kTmFtZTogJ2dldEVhY2hNZXNzYWdlJyxcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0aXBjLFxuXHRcdGlzQ29ubmVjdGVkOiBpc0Nvbm5lY3RlZChhbnlQcm9jZXNzKSxcblx0fSk7XG5cblx0YWRkUmVmZXJlbmNlKGNoYW5uZWwsIHJlZmVyZW5jZSk7XG5cdGNvbnN0IGlwY0VtaXR0ZXIgPSBnZXRJcGNFbWl0dGVyKGFueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2Vzcyk7XG5cdGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdGNvbnN0IHN0YXRlID0ge307XG5cdHN0b3BPbkRpc2Nvbm5lY3QoYW55UHJvY2VzcywgaXBjRW1pdHRlciwgY29udHJvbGxlcik7XG5cdGFib3J0T25TdHJpY3RFcnJvcih7XG5cdFx0aXBjRW1pdHRlcixcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0Y29udHJvbGxlcixcblx0XHRzdGF0ZSxcblx0fSk7XG5cdHJldHVybiBpdGVyYXRlT25NZXNzYWdlcyh7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsLFxuXHRcdGlwY0VtaXR0ZXIsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdHNob3VsZEF3YWl0LFxuXHRcdGNvbnRyb2xsZXIsXG5cdFx0c3RhdGUsXG5cdFx0cmVmZXJlbmNlLFxuXHR9KTtcbn07XG5cbmNvbnN0IHN0b3BPbkRpc2Nvbm5lY3QgPSBhc3luYyAoYW55UHJvY2VzcywgaXBjRW1pdHRlciwgY29udHJvbGxlcikgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IG9uY2UoaXBjRW1pdHRlciwgJ2Rpc2Nvbm5lY3QnLCB7c2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbH0pO1xuXHRcdGNvbnRyb2xsZXIuYWJvcnQoKTtcblx0fSBjYXRjaCB7fVxufTtcblxuY29uc3QgYWJvcnRPblN0cmljdEVycm9yID0gYXN5bmMgKHtpcGNFbWl0dGVyLCBpc1N1YnByb2Nlc3MsIGNvbnRyb2xsZXIsIHN0YXRlfSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IFtlcnJvcl0gPSBhd2FpdCBvbmNlKGlwY0VtaXR0ZXIsICdzdHJpY3Q6ZXJyb3InLCB7c2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbH0pO1xuXHRcdHN0YXRlLmVycm9yID0gZ2V0U3RyaWN0UmVzcG9uc2VFcnJvcihlcnJvciwgaXNTdWJwcm9jZXNzKTtcblx0XHRjb250cm9sbGVyLmFib3J0KCk7XG5cdH0gY2F0Y2gge31cbn07XG5cbmNvbnN0IGl0ZXJhdGVPbk1lc3NhZ2VzID0gYXN5bmMgZnVuY3Rpb24gKiAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlwY0VtaXR0ZXIsIGlzU3VicHJvY2Vzcywgc2hvdWxkQXdhaXQsIGNvbnRyb2xsZXIsIHN0YXRlLCByZWZlcmVuY2V9KSB7XG5cdHRyeSB7XG5cdFx0Zm9yIGF3YWl0IChjb25zdCBbbWVzc2FnZV0gb2Ygb24oaXBjRW1pdHRlciwgJ21lc3NhZ2UnLCB7c2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbH0pKSB7XG5cdFx0XHR0aHJvd0lmU3RyaWN0RXJyb3Ioc3RhdGUpO1xuXHRcdFx0eWllbGQgbWVzc2FnZTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHRocm93SWZTdHJpY3RFcnJvcihzdGF0ZSk7XG5cdH0gZmluYWxseSB7XG5cdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHRcdHJlbW92ZVJlZmVyZW5jZShjaGFubmVsLCByZWZlcmVuY2UpO1xuXG5cdFx0aWYgKCFpc1N1YnByb2Nlc3MpIHtcblx0XHRcdGRpc2Nvbm5lY3QoYW55UHJvY2Vzcyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNob3VsZEF3YWl0KSB7XG5cdFx0XHRhd2FpdCBhbnlQcm9jZXNzO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgdGhyb3dJZlN0cmljdEVycm9yID0gKHtlcnJvcn0pID0+IHtcblx0aWYgKGVycm9yKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCB7c2VuZE1lc3NhZ2V9IGZyb20gJy4vc2VuZC5qcyc7XG5pbXBvcnQge2dldE9uZU1lc3NhZ2V9IGZyb20gJy4vZ2V0LW9uZS5qcyc7XG5pbXBvcnQge2dldEVhY2hNZXNzYWdlfSBmcm9tICcuL2dldC1lYWNoLmpzJztcbmltcG9ydCB7Z2V0Q2FuY2VsU2lnbmFsfSBmcm9tICcuL2dyYWNlZnVsLmpzJztcblxuLy8gQWRkIHByb21pc2UtYmFzZWQgSVBDIG1ldGhvZHMgaW4gY3VycmVudCBwcm9jZXNzXG5leHBvcnQgY29uc3QgYWRkSXBjTWV0aG9kcyA9IChzdWJwcm9jZXNzLCB7aXBjfSkgPT4ge1xuXHRPYmplY3QuYXNzaWduKHN1YnByb2Nlc3MsIGdldElwY01ldGhvZHMoc3VicHJvY2VzcywgZmFsc2UsIGlwYykpO1xufTtcblxuLy8gR2V0IHByb21pc2UtYmFzZWQgSVBDIGluIHRoZSBzdWJwcm9jZXNzXG5leHBvcnQgY29uc3QgZ2V0SXBjRXhwb3J0ID0gKCkgPT4ge1xuXHRjb25zdCBhbnlQcm9jZXNzID0gcHJvY2Vzcztcblx0Y29uc3QgaXNTdWJwcm9jZXNzID0gdHJ1ZTtcblx0Y29uc3QgaXBjID0gcHJvY2Vzcy5jaGFubmVsICE9PSB1bmRlZmluZWQ7XG5cblx0cmV0dXJuIHtcblx0XHQuLi5nZXRJcGNNZXRob2RzKGFueVByb2Nlc3MsIGlzU3VicHJvY2VzcywgaXBjKSxcblx0XHRnZXRDYW5jZWxTaWduYWw6IGdldENhbmNlbFNpZ25hbC5iaW5kKHVuZGVmaW5lZCwge1xuXHRcdFx0YW55UHJvY2Vzcyxcblx0XHRcdGNoYW5uZWw6IGFueVByb2Nlc3MuY2hhbm5lbCxcblx0XHRcdGlzU3VicHJvY2Vzcyxcblx0XHRcdGlwYyxcblx0XHR9KSxcblx0fTtcbn07XG5cbi8vIFJldHJpZXZlIHRoZSBgaXBjYCBzaGFyZWQgYnkgYm90aCB0aGUgY3VycmVudCBwcm9jZXNzIGFuZCB0aGUgc3VicHJvY2Vzc1xuY29uc3QgZ2V0SXBjTWV0aG9kcyA9IChhbnlQcm9jZXNzLCBpc1N1YnByb2Nlc3MsIGlwYykgPT4gKHtcblx0c2VuZE1lc3NhZ2U6IHNlbmRNZXNzYWdlLmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsOiBhbnlQcm9jZXNzLmNoYW5uZWwsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGlwYyxcblx0fSksXG5cdGdldE9uZU1lc3NhZ2U6IGdldE9uZU1lc3NhZ2UuYmluZCh1bmRlZmluZWQsIHtcblx0XHRhbnlQcm9jZXNzLFxuXHRcdGNoYW5uZWw6IGFueVByb2Nlc3MuY2hhbm5lbCxcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0aXBjLFxuXHR9KSxcblx0Z2V0RWFjaE1lc3NhZ2U6IGdldEVhY2hNZXNzYWdlLmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsOiBhbnlQcm9jZXNzLmNoYW5uZWwsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGlwYyxcblx0fSksXG59KTtcbiIsICJpbXBvcnQge0NoaWxkUHJvY2Vzc30gZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7XG5cdFBhc3NUaHJvdWdoLFxuXHRSZWFkYWJsZSxcblx0V3JpdGFibGUsXG5cdER1cGxleCxcbn0gZnJvbSAnbm9kZTpzdHJlYW0nO1xuaW1wb3J0IHtjbGVhbnVwQ3VzdG9tU3RyZWFtc30gZnJvbSAnLi4vc3RkaW8vaGFuZGxlLmpzJztcbmltcG9ydCB7bWFrZUVhcmx5RXJyb3J9IGZyb20gJy4vcmVzdWx0LmpzJztcbmltcG9ydCB7aGFuZGxlUmVzdWx0fSBmcm9tICcuL3JlamVjdC5qcyc7XG5cbi8vIFdoZW4gdGhlIHN1YnByb2Nlc3MgZmFpbHMgdG8gc3Bhd24uXG4vLyBXZSBlbnN1cmUgdGhlIHJldHVybmVkIGVycm9yIGlzIGFsd2F5cyBib3RoIGEgcHJvbWlzZSBhbmQgYSBzdWJwcm9jZXNzLlxuZXhwb3J0IGNvbnN0IGhhbmRsZUVhcmx5RXJyb3IgPSAoe2Vycm9yLCBjb21tYW5kLCBlc2NhcGVkQ29tbWFuZCwgZmlsZURlc2NyaXB0b3JzLCBvcHRpb25zLCBzdGFydFRpbWUsIHZlcmJvc2VJbmZvfSkgPT4ge1xuXHRjbGVhbnVwQ3VzdG9tU3RyZWFtcyhmaWxlRGVzY3JpcHRvcnMpO1xuXG5cdGNvbnN0IHN1YnByb2Nlc3MgPSBuZXcgQ2hpbGRQcm9jZXNzKCk7XG5cdGNyZWF0ZUR1bW15U3RyZWFtcyhzdWJwcm9jZXNzLCBmaWxlRGVzY3JpcHRvcnMpO1xuXHRPYmplY3QuYXNzaWduKHN1YnByb2Nlc3MsIHtyZWFkYWJsZSwgd3JpdGFibGUsIGR1cGxleH0pO1xuXG5cdGNvbnN0IGVhcmx5RXJyb3IgPSBtYWtlRWFybHlFcnJvcih7XG5cdFx0ZXJyb3IsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0b3B0aW9ucyxcblx0XHRzdGFydFRpbWUsXG5cdFx0aXNTeW5jOiBmYWxzZSxcblx0fSk7XG5cdGNvbnN0IHByb21pc2UgPSBoYW5kbGVEdW1teVByb21pc2UoZWFybHlFcnJvciwgdmVyYm9zZUluZm8sIG9wdGlvbnMpO1xuXHRyZXR1cm4ge3N1YnByb2Nlc3MsIHByb21pc2V9O1xufTtcblxuY29uc3QgY3JlYXRlRHVtbXlTdHJlYW1zID0gKHN1YnByb2Nlc3MsIGZpbGVEZXNjcmlwdG9ycykgPT4ge1xuXHRjb25zdCBzdGRpbiA9IGNyZWF0ZUR1bW15U3RyZWFtKCk7XG5cdGNvbnN0IHN0ZG91dCA9IGNyZWF0ZUR1bW15U3RyZWFtKCk7XG5cdGNvbnN0IHN0ZGVyciA9IGNyZWF0ZUR1bW15U3RyZWFtKCk7XG5cdGNvbnN0IGV4dHJhU3RkaW8gPSBBcnJheS5mcm9tKHtsZW5ndGg6IGZpbGVEZXNjcmlwdG9ycy5sZW5ndGggLSAzfSwgY3JlYXRlRHVtbXlTdHJlYW0pO1xuXHRjb25zdCBhbGwgPSBjcmVhdGVEdW1teVN0cmVhbSgpO1xuXHRjb25zdCBzdGRpbyA9IFtzdGRpbiwgc3Rkb3V0LCBzdGRlcnIsIC4uLmV4dHJhU3RkaW9dO1xuXHRPYmplY3QuYXNzaWduKHN1YnByb2Nlc3MsIHtcblx0XHRzdGRpbixcblx0XHRzdGRvdXQsXG5cdFx0c3RkZXJyLFxuXHRcdGFsbCxcblx0XHRzdGRpbyxcblx0fSk7XG59O1xuXG5jb25zdCBjcmVhdGVEdW1teVN0cmVhbSA9ICgpID0+IHtcblx0Y29uc3Qgc3RyZWFtID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cdHN0cmVhbS5lbmQoKTtcblx0cmV0dXJuIHN0cmVhbTtcbn07XG5cbmNvbnN0IHJlYWRhYmxlID0gKCkgPT4gbmV3IFJlYWRhYmxlKHtyZWFkKCkge319KTtcbmNvbnN0IHdyaXRhYmxlID0gKCkgPT4gbmV3IFdyaXRhYmxlKHt3cml0ZSgpIHt9fSk7XG5jb25zdCBkdXBsZXggPSAoKSA9PiBuZXcgRHVwbGV4KHtyZWFkKCkge30sIHdyaXRlKCkge319KTtcblxuY29uc3QgaGFuZGxlRHVtbXlQcm9taXNlID0gYXN5bmMgKGVycm9yLCB2ZXJib3NlSW5mbywgb3B0aW9ucykgPT4gaGFuZGxlUmVzdWx0KGVycm9yLCB2ZXJib3NlSW5mbywgb3B0aW9ucyk7XG4iLCAiaW1wb3J0IHtjcmVhdGVSZWFkU3RyZWFtLCBjcmVhdGVXcml0ZVN0cmVhbX0gZnJvbSAnbm9kZTpmcyc7XG5pbXBvcnQge0J1ZmZlcn0gZnJvbSAnbm9kZTpidWZmZXInO1xuaW1wb3J0IHtSZWFkYWJsZSwgV3JpdGFibGUsIER1cGxleH0gZnJvbSAnbm9kZTpzdHJlYW0nO1xuaW1wb3J0IHtnZW5lcmF0b3JUb1N0cmVhbX0gZnJvbSAnLi4vdHJhbnNmb3JtL2dlbmVyYXRvci5qcyc7XG5pbXBvcnQge2hhbmRsZVN0ZGlvfSBmcm9tICcuL2hhbmRsZS5qcyc7XG5pbXBvcnQge1RZUEVfVE9fTUVTU0FHRX0gZnJvbSAnLi90eXBlLmpzJztcblxuLy8gSGFuZGxlIGBpbnB1dGAsIGBpbnB1dEZpbGVgLCBgc3RkaW5gLCBgc3Rkb3V0YCBhbmQgYHN0ZGVycmAgb3B0aW9ucywgYmVmb3JlIHNwYXduaW5nLCBpbiBhc3luYyBtb2RlXG5leHBvcnQgY29uc3QgaGFuZGxlU3RkaW9Bc3luYyA9IChvcHRpb25zLCB2ZXJib3NlSW5mbykgPT4gaGFuZGxlU3RkaW8oYWRkUHJvcGVydGllc0FzeW5jLCBvcHRpb25zLCB2ZXJib3NlSW5mbywgZmFsc2UpO1xuXG5jb25zdCBmb3JiaWRkZW5JZkFzeW5jID0gKHt0eXBlLCBvcHRpb25OYW1lfSkgPT4ge1xuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfVxcYCBvcHRpb24gY2Fubm90IGJlICR7VFlQRV9UT19NRVNTQUdFW3R5cGVdfS5gKTtcbn07XG5cbi8vIENyZWF0ZSBzdHJlYW1zIHVzZWQgaW50ZXJuYWxseSBmb3IgcGlwaW5nIHdoZW4gdXNpbmcgc3BlY2lmaWMgdmFsdWVzIGZvciB0aGUgYHN0ZCpgIG9wdGlvbnMsIGluIGFzeW5jIG1vZGUuXG4vLyBGb3IgZXhhbXBsZSwgYHN0ZG91dDoge2ZpbGV9YCBjcmVhdGVzIGEgZmlsZSBzdHJlYW0sIHdoaWNoIGlzIHBpcGVkIGZyb20vdG8uXG5jb25zdCBhZGRQcm9wZXJ0aWVzID0ge1xuXHRmaWxlTnVtYmVyOiBmb3JiaWRkZW5JZkFzeW5jLFxuXHRnZW5lcmF0b3I6IGdlbmVyYXRvclRvU3RyZWFtLFxuXHRhc3luY0dlbmVyYXRvcjogZ2VuZXJhdG9yVG9TdHJlYW0sXG5cdG5vZGVTdHJlYW06ICh7dmFsdWV9KSA9PiAoe3N0cmVhbTogdmFsdWV9KSxcblx0d2ViVHJhbnNmb3JtKHt2YWx1ZToge3RyYW5zZm9ybSwgd3JpdGFibGVPYmplY3RNb2RlLCByZWFkYWJsZU9iamVjdE1vZGV9fSkge1xuXHRcdGNvbnN0IG9iamVjdE1vZGUgPSB3cml0YWJsZU9iamVjdE1vZGUgfHwgcmVhZGFibGVPYmplY3RNb2RlO1xuXHRcdGNvbnN0IHN0cmVhbSA9IER1cGxleC5mcm9tV2ViKHRyYW5zZm9ybSwge29iamVjdE1vZGV9KTtcblx0XHRyZXR1cm4ge3N0cmVhbX07XG5cdH0sXG5cdGR1cGxleDogKHt2YWx1ZToge3RyYW5zZm9ybX19KSA9PiAoe3N0cmVhbTogdHJhbnNmb3JtfSksXG5cdG5hdGl2ZSgpIHt9LFxufTtcblxuY29uc3QgYWRkUHJvcGVydGllc0FzeW5jID0ge1xuXHRpbnB1dDoge1xuXHRcdC4uLmFkZFByb3BlcnRpZXMsXG5cdFx0ZmlsZVVybDogKHt2YWx1ZX0pID0+ICh7c3RyZWFtOiBjcmVhdGVSZWFkU3RyZWFtKHZhbHVlKX0pLFxuXHRcdGZpbGVQYXRoOiAoe3ZhbHVlOiB7ZmlsZX19KSA9PiAoe3N0cmVhbTogY3JlYXRlUmVhZFN0cmVhbShmaWxlKX0pLFxuXHRcdHdlYlN0cmVhbTogKHt2YWx1ZX0pID0+ICh7c3RyZWFtOiBSZWFkYWJsZS5mcm9tV2ViKHZhbHVlKX0pLFxuXHRcdGl0ZXJhYmxlOiAoe3ZhbHVlfSkgPT4gKHtzdHJlYW06IFJlYWRhYmxlLmZyb20odmFsdWUpfSksXG5cdFx0YXN5bmNJdGVyYWJsZTogKHt2YWx1ZX0pID0+ICh7c3RyZWFtOiBSZWFkYWJsZS5mcm9tKHZhbHVlKX0pLFxuXHRcdHN0cmluZzogKHt2YWx1ZX0pID0+ICh7c3RyZWFtOiBSZWFkYWJsZS5mcm9tKHZhbHVlKX0pLFxuXHRcdHVpbnQ4QXJyYXk6ICh7dmFsdWV9KSA9PiAoe3N0cmVhbTogUmVhZGFibGUuZnJvbShCdWZmZXIuZnJvbSh2YWx1ZSkpfSksXG5cdH0sXG5cdG91dHB1dDoge1xuXHRcdC4uLmFkZFByb3BlcnRpZXMsXG5cdFx0ZmlsZVVybDogKHt2YWx1ZX0pID0+ICh7c3RyZWFtOiBjcmVhdGVXcml0ZVN0cmVhbSh2YWx1ZSl9KSxcblx0XHRmaWxlUGF0aDogKHt2YWx1ZToge2ZpbGUsIGFwcGVuZH19KSA9PiAoe3N0cmVhbTogY3JlYXRlV3JpdGVTdHJlYW0oZmlsZSwgYXBwZW5kID8ge2ZsYWdzOiAnYSd9IDoge30pfSksXG5cdFx0d2ViU3RyZWFtOiAoe3ZhbHVlfSkgPT4gKHtzdHJlYW06IFdyaXRhYmxlLmZyb21XZWIodmFsdWUpfSksXG5cdFx0aXRlcmFibGU6IGZvcmJpZGRlbklmQXN5bmMsXG5cdFx0YXN5bmNJdGVyYWJsZTogZm9yYmlkZGVuSWZBc3luYyxcblx0XHRzdHJpbmc6IGZvcmJpZGRlbklmQXN5bmMsXG5cdFx0dWludDhBcnJheTogZm9yYmlkZGVuSWZBc3luYyxcblx0fSxcbn07XG4iLCAiaW1wb3J0IHtvbiwgb25jZX0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtQYXNzVGhyb3VnaCBhcyBQYXNzVGhyb3VnaFN0cmVhbSwgZ2V0RGVmYXVsdEhpZ2hXYXRlck1hcmt9IGZyb20gJ25vZGU6c3RyZWFtJztcbmltcG9ydCB7ZmluaXNoZWR9IGZyb20gJ25vZGU6c3RyZWFtL3Byb21pc2VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VTdHJlYW1zKHN0cmVhbXMpIHtcblx0aWYgKCFBcnJheS5pc0FycmF5KHN0cmVhbXMpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYW4gYXJyYXksIGdvdCBcXGAke3R5cGVvZiBzdHJlYW1zfVxcYC5gKTtcblx0fVxuXG5cdGZvciAoY29uc3Qgc3RyZWFtIG9mIHN0cmVhbXMpIHtcblx0XHR2YWxpZGF0ZVN0cmVhbShzdHJlYW0pO1xuXHR9XG5cblx0Y29uc3Qgb2JqZWN0TW9kZSA9IHN0cmVhbXMuc29tZSgoe3JlYWRhYmxlT2JqZWN0TW9kZX0pID0+IHJlYWRhYmxlT2JqZWN0TW9kZSk7XG5cdGNvbnN0IGhpZ2hXYXRlck1hcmsgPSBnZXRIaWdoV2F0ZXJNYXJrKHN0cmVhbXMsIG9iamVjdE1vZGUpO1xuXHRjb25zdCBwYXNzVGhyb3VnaFN0cmVhbSA9IG5ldyBNZXJnZWRTdHJlYW0oe1xuXHRcdG9iamVjdE1vZGUsXG5cdFx0d3JpdGFibGVIaWdoV2F0ZXJNYXJrOiBoaWdoV2F0ZXJNYXJrLFxuXHRcdHJlYWRhYmxlSGlnaFdhdGVyTWFyazogaGlnaFdhdGVyTWFyayxcblx0fSk7XG5cblx0Zm9yIChjb25zdCBzdHJlYW0gb2Ygc3RyZWFtcykge1xuXHRcdHBhc3NUaHJvdWdoU3RyZWFtLmFkZChzdHJlYW0pO1xuXHR9XG5cblx0cmV0dXJuIHBhc3NUaHJvdWdoU3RyZWFtO1xufVxuXG5jb25zdCBnZXRIaWdoV2F0ZXJNYXJrID0gKHN0cmVhbXMsIG9iamVjdE1vZGUpID0+IHtcblx0aWYgKHN0cmVhbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIGdldERlZmF1bHRIaWdoV2F0ZXJNYXJrKG9iamVjdE1vZGUpO1xuXHR9XG5cblx0Y29uc3QgaGlnaFdhdGVyTWFya3MgPSBzdHJlYW1zXG5cdFx0LmZpbHRlcigoe3JlYWRhYmxlT2JqZWN0TW9kZX0pID0+IHJlYWRhYmxlT2JqZWN0TW9kZSA9PT0gb2JqZWN0TW9kZSlcblx0XHQubWFwKCh7cmVhZGFibGVIaWdoV2F0ZXJNYXJrfSkgPT4gcmVhZGFibGVIaWdoV2F0ZXJNYXJrKTtcblx0cmV0dXJuIE1hdGgubWF4KC4uLmhpZ2hXYXRlck1hcmtzKTtcbn07XG5cbmNsYXNzIE1lcmdlZFN0cmVhbSBleHRlbmRzIFBhc3NUaHJvdWdoU3RyZWFtIHtcblx0I3N0cmVhbXMgPSBuZXcgU2V0KFtdKTtcblx0I2VuZGVkID0gbmV3IFNldChbXSk7XG5cdCNhYm9ydGVkID0gbmV3IFNldChbXSk7XG5cdCNvbkZpbmlzaGVkO1xuXHQjdW5waXBlRXZlbnQgPSBTeW1ib2woJ3VucGlwZScpO1xuXHQjc3RyZWFtUHJvbWlzZXMgPSBuZXcgV2Vha01hcCgpO1xuXG5cdGFkZChzdHJlYW0pIHtcblx0XHR2YWxpZGF0ZVN0cmVhbShzdHJlYW0pO1xuXG5cdFx0aWYgKHRoaXMuI3N0cmVhbXMuaGFzKHN0cmVhbSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLiNzdHJlYW1zLmFkZChzdHJlYW0pO1xuXG5cdFx0dGhpcy4jb25GaW5pc2hlZCA/Pz0gb25NZXJnZWRTdHJlYW1GaW5pc2hlZCh0aGlzLCB0aGlzLiNzdHJlYW1zLCB0aGlzLiN1bnBpcGVFdmVudCk7XG5cdFx0Y29uc3Qgc3RyZWFtUHJvbWlzZSA9IGVuZFdoZW5TdHJlYW1zRG9uZSh7XG5cdFx0XHRwYXNzVGhyb3VnaFN0cmVhbTogdGhpcyxcblx0XHRcdHN0cmVhbSxcblx0XHRcdHN0cmVhbXM6IHRoaXMuI3N0cmVhbXMsXG5cdFx0XHRlbmRlZDogdGhpcy4jZW5kZWQsXG5cdFx0XHRhYm9ydGVkOiB0aGlzLiNhYm9ydGVkLFxuXHRcdFx0b25GaW5pc2hlZDogdGhpcy4jb25GaW5pc2hlZCxcblx0XHRcdHVucGlwZUV2ZW50OiB0aGlzLiN1bnBpcGVFdmVudCxcblx0XHR9KTtcblx0XHR0aGlzLiNzdHJlYW1Qcm9taXNlcy5zZXQoc3RyZWFtLCBzdHJlYW1Qcm9taXNlKTtcblxuXHRcdHN0cmVhbS5waXBlKHRoaXMsIHtlbmQ6IGZhbHNlfSk7XG5cdH1cblxuXHRhc3luYyByZW1vdmUoc3RyZWFtKSB7XG5cdFx0dmFsaWRhdGVTdHJlYW0oc3RyZWFtKTtcblxuXHRcdGlmICghdGhpcy4jc3RyZWFtcy5oYXMoc3RyZWFtKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN0cmVhbVByb21pc2UgPSB0aGlzLiNzdHJlYW1Qcm9taXNlcy5nZXQoc3RyZWFtKTtcblx0XHRpZiAoc3RyZWFtUHJvbWlzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy4jc3RyZWFtUHJvbWlzZXMuZGVsZXRlKHN0cmVhbSk7XG5cblx0XHRzdHJlYW0udW5waXBlKHRoaXMpO1xuXHRcdGF3YWl0IHN0cmVhbVByb21pc2U7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuY29uc3Qgb25NZXJnZWRTdHJlYW1GaW5pc2hlZCA9IGFzeW5jIChwYXNzVGhyb3VnaFN0cmVhbSwgc3RyZWFtcywgdW5waXBlRXZlbnQpID0+IHtcblx0dXBkYXRlTWF4TGlzdGVuZXJzKHBhc3NUaHJvdWdoU3RyZWFtLCBQQVNTVEhST1VHSF9MSVNURU5FUlNfQ09VTlQpO1xuXHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRcdG9uTWVyZ2VkU3RyZWFtRW5kKHBhc3NUaHJvdWdoU3RyZWFtLCBjb250cm9sbGVyKSxcblx0XHRcdG9uSW5wdXRTdHJlYW1zVW5waXBlKHBhc3NUaHJvdWdoU3RyZWFtLCBzdHJlYW1zLCB1bnBpcGVFdmVudCwgY29udHJvbGxlciksXG5cdFx0XSk7XG5cdH0gZmluYWxseSB7XG5cdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHRcdHVwZGF0ZU1heExpc3RlbmVycyhwYXNzVGhyb3VnaFN0cmVhbSwgLVBBU1NUSFJPVUdIX0xJU1RFTkVSU19DT1VOVCk7XG5cdH1cbn07XG5cbmNvbnN0IG9uTWVyZ2VkU3RyZWFtRW5kID0gYXN5bmMgKHBhc3NUaHJvdWdoU3RyZWFtLCB7c2lnbmFsfSkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGZpbmlzaGVkKHBhc3NUaHJvdWdoU3RyZWFtLCB7c2lnbmFsLCBjbGVhbnVwOiB0cnVlfSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3JPckFib3J0U3RyZWFtKHBhc3NUaHJvdWdoU3RyZWFtLCBlcnJvcik7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbmNvbnN0IG9uSW5wdXRTdHJlYW1zVW5waXBlID0gYXN5bmMgKHBhc3NUaHJvdWdoU3RyZWFtLCBzdHJlYW1zLCB1bnBpcGVFdmVudCwge3NpZ25hbH0pID0+IHtcblx0Zm9yIGF3YWl0IChjb25zdCBbdW5waXBlZFN0cmVhbV0gb2Ygb24ocGFzc1Rocm91Z2hTdHJlYW0sICd1bnBpcGUnLCB7c2lnbmFsfSkpIHtcblx0XHRpZiAoc3RyZWFtcy5oYXModW5waXBlZFN0cmVhbSkpIHtcblx0XHRcdHVucGlwZWRTdHJlYW0uZW1pdCh1bnBpcGVFdmVudCk7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCB2YWxpZGF0ZVN0cmVhbSA9IHN0cmVhbSA9PiB7XG5cdGlmICh0eXBlb2Ygc3RyZWFtPy5waXBlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSByZWFkYWJsZSBzdHJlYW0sIGdvdDogXFxgJHt0eXBlb2Ygc3RyZWFtfVxcYC5gKTtcblx0fVxufTtcblxuY29uc3QgZW5kV2hlblN0cmVhbXNEb25lID0gYXN5bmMgKHtwYXNzVGhyb3VnaFN0cmVhbSwgc3RyZWFtLCBzdHJlYW1zLCBlbmRlZCwgYWJvcnRlZCwgb25GaW5pc2hlZCwgdW5waXBlRXZlbnR9KSA9PiB7XG5cdHVwZGF0ZU1heExpc3RlbmVycyhwYXNzVGhyb3VnaFN0cmVhbSwgUEFTU1RIUk9VR0hfTElTVEVORVJTX1BFUl9TVFJFQU0pO1xuXHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRcdGFmdGVyTWVyZ2VkU3RyZWFtRmluaXNoZWQob25GaW5pc2hlZCwgc3RyZWFtLCBjb250cm9sbGVyKSxcblx0XHRcdG9uSW5wdXRTdHJlYW1FbmQoe1xuXHRcdFx0XHRwYXNzVGhyb3VnaFN0cmVhbSxcblx0XHRcdFx0c3RyZWFtLFxuXHRcdFx0XHRzdHJlYW1zLFxuXHRcdFx0XHRlbmRlZCxcblx0XHRcdFx0YWJvcnRlZCxcblx0XHRcdFx0Y29udHJvbGxlcixcblx0XHRcdH0pLFxuXHRcdFx0b25JbnB1dFN0cmVhbVVucGlwZSh7XG5cdFx0XHRcdHN0cmVhbSxcblx0XHRcdFx0c3RyZWFtcyxcblx0XHRcdFx0ZW5kZWQsXG5cdFx0XHRcdGFib3J0ZWQsXG5cdFx0XHRcdHVucGlwZUV2ZW50LFxuXHRcdFx0XHRjb250cm9sbGVyLFxuXHRcdFx0fSksXG5cdFx0XSk7XG5cdH0gZmluYWxseSB7XG5cdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHRcdHVwZGF0ZU1heExpc3RlbmVycyhwYXNzVGhyb3VnaFN0cmVhbSwgLVBBU1NUSFJPVUdIX0xJU1RFTkVSU19QRVJfU1RSRUFNKTtcblx0fVxuXG5cdGlmIChzdHJlYW1zLnNpemUgPiAwICYmIHN0cmVhbXMuc2l6ZSA9PT0gZW5kZWQuc2l6ZSArIGFib3J0ZWQuc2l6ZSkge1xuXHRcdGlmIChlbmRlZC5zaXplID09PSAwICYmIGFib3J0ZWQuc2l6ZSA+IDApIHtcblx0XHRcdGFib3J0U3RyZWFtKHBhc3NUaHJvdWdoU3RyZWFtKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW5kU3RyZWFtKHBhc3NUaHJvdWdoU3RyZWFtKTtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IGFmdGVyTWVyZ2VkU3RyZWFtRmluaXNoZWQgPSBhc3luYyAob25GaW5pc2hlZCwgc3RyZWFtLCB7c2lnbmFsfSkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IG9uRmluaXNoZWQ7XG5cdFx0aWYgKCFzaWduYWwuYWJvcnRlZCkge1xuXHRcdFx0YWJvcnRTdHJlYW0oc3RyZWFtKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKCFzaWduYWwuYWJvcnRlZCkge1xuXHRcdFx0ZXJyb3JPckFib3J0U3RyZWFtKHN0cmVhbSwgZXJyb3IpO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgb25JbnB1dFN0cmVhbUVuZCA9IGFzeW5jICh7cGFzc1Rocm91Z2hTdHJlYW0sIHN0cmVhbSwgc3RyZWFtcywgZW5kZWQsIGFib3J0ZWQsIGNvbnRyb2xsZXI6IHtzaWduYWx9fSkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGZpbmlzaGVkKHN0cmVhbSwge1xuXHRcdFx0c2lnbmFsLFxuXHRcdFx0Y2xlYW51cDogdHJ1ZSxcblx0XHRcdHJlYWRhYmxlOiB0cnVlLFxuXHRcdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdH0pO1xuXHRcdGlmIChzdHJlYW1zLmhhcyhzdHJlYW0pKSB7XG5cdFx0XHRlbmRlZC5hZGQoc3RyZWFtKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKHNpZ25hbC5hYm9ydGVkIHx8ICFzdHJlYW1zLmhhcyhzdHJlYW0pKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGlzQWJvcnRFcnJvcihlcnJvcikpIHtcblx0XHRcdGFib3J0ZWQuYWRkKHN0cmVhbSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVycm9yU3RyZWFtKHBhc3NUaHJvdWdoU3RyZWFtLCBlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBvbklucHV0U3RyZWFtVW5waXBlID0gYXN5bmMgKHtzdHJlYW0sIHN0cmVhbXMsIGVuZGVkLCBhYm9ydGVkLCB1bnBpcGVFdmVudCwgY29udHJvbGxlcjoge3NpZ25hbH19KSA9PiB7XG5cdGF3YWl0IG9uY2Uoc3RyZWFtLCB1bnBpcGVFdmVudCwge3NpZ25hbH0pO1xuXG5cdGlmICghc3RyZWFtLnJlYWRhYmxlKSB7XG5cdFx0cmV0dXJuIG9uY2Uoc2lnbmFsLCAnYWJvcnQnLCB7c2lnbmFsfSk7XG5cdH1cblxuXHRzdHJlYW1zLmRlbGV0ZShzdHJlYW0pO1xuXHRlbmRlZC5kZWxldGUoc3RyZWFtKTtcblx0YWJvcnRlZC5kZWxldGUoc3RyZWFtKTtcbn07XG5cbmNvbnN0IGVuZFN0cmVhbSA9IHN0cmVhbSA9PiB7XG5cdGlmIChzdHJlYW0ud3JpdGFibGUpIHtcblx0XHRzdHJlYW0uZW5kKCk7XG5cdH1cbn07XG5cbmNvbnN0IGVycm9yT3JBYm9ydFN0cmVhbSA9IChzdHJlYW0sIGVycm9yKSA9PiB7XG5cdGlmIChpc0Fib3J0RXJyb3IoZXJyb3IpKSB7XG5cdFx0YWJvcnRTdHJlYW0oc3RyZWFtKTtcblx0fSBlbHNlIHtcblx0XHRlcnJvclN0cmVhbShzdHJlYW0sIGVycm9yKTtcblx0fVxufTtcblxuLy8gVGhpcyBpcyB0aGUgZXJyb3IgdGhyb3duIGJ5IGBmaW5pc2hlZCgpYCBvbiBgc3RyZWFtLmRlc3Ryb3koKWBcbmNvbnN0IGlzQWJvcnRFcnJvciA9IGVycm9yID0+IGVycm9yPy5jb2RlID09PSAnRVJSX1NUUkVBTV9QUkVNQVRVUkVfQ0xPU0UnO1xuXG5jb25zdCBhYm9ydFN0cmVhbSA9IHN0cmVhbSA9PiB7XG5cdGlmIChzdHJlYW0ucmVhZGFibGUgfHwgc3RyZWFtLndyaXRhYmxlKSB7XG5cdFx0c3RyZWFtLmRlc3Ryb3koKTtcblx0fVxufTtcblxuLy8gYHN0cmVhbS5kZXN0cm95KGVycm9yKWAgY3Jhc2hlcyB0aGUgcHJvY2VzcyB3aXRoIGB1bmNhdWdodEV4Y2VwdGlvbmAgaWYgbm8gYGVycm9yYCBldmVudCBsaXN0ZW5lciBleGlzdHMgb24gYHN0cmVhbWAuXG4vLyBXZSB0YWtlIGNhcmUgb2YgZXJyb3IgaGFuZGxpbmcgb24gdXNlciBiZWhhbGYsIHNvIHdlIGRvIG5vdCB3YW50IHRoaXMgdG8gaGFwcGVuLlxuY29uc3QgZXJyb3JTdHJlYW0gPSAoc3RyZWFtLCBlcnJvcikgPT4ge1xuXHRpZiAoIXN0cmVhbS5kZXN0cm95ZWQpIHtcblx0XHRzdHJlYW0ub25jZSgnZXJyb3InLCBub29wKTtcblx0XHRzdHJlYW0uZGVzdHJveShlcnJvcik7XG5cdH1cbn07XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuY29uc3QgdXBkYXRlTWF4TGlzdGVuZXJzID0gKHBhc3NUaHJvdWdoU3RyZWFtLCBpbmNyZW1lbnQpID0+IHtcblx0Y29uc3QgbWF4TGlzdGVuZXJzID0gcGFzc1Rocm91Z2hTdHJlYW0uZ2V0TWF4TGlzdGVuZXJzKCk7XG5cdGlmIChtYXhMaXN0ZW5lcnMgIT09IDAgJiYgbWF4TGlzdGVuZXJzICE9PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcblx0XHRwYXNzVGhyb3VnaFN0cmVhbS5zZXRNYXhMaXN0ZW5lcnMobWF4TGlzdGVuZXJzICsgaW5jcmVtZW50KTtcblx0fVxufTtcblxuLy8gTnVtYmVyIG9mIHRpbWVzIGBwYXNzVGhyb3VnaFN0cmVhbS5vbigpYCBpcyBjYWxsZWQgcmVnYXJkbGVzcyBvZiBzdHJlYW1zOlxuLy8gIC0gb25jZSBkdWUgdG8gYGZpbmlzaGVkKHBhc3NUaHJvdWdoU3RyZWFtKWBcbi8vICAtIG9uY2UgZHVlIHRvIGBvbihwYXNzVGhyb3VnaFN0cmVhbSlgXG5jb25zdCBQQVNTVEhST1VHSF9MSVNURU5FUlNfQ09VTlQgPSAyO1xuXG4vLyBOdW1iZXIgb2YgdGltZXMgYHBhc3NUaHJvdWdoU3RyZWFtLm9uKClgIGlzIGNhbGxlZCBwZXIgc3RyZWFtOlxuLy8gIC0gb25jZSBkdWUgdG8gYHN0cmVhbS5waXBlKHBhc3NUaHJvdWdoU3RyZWFtKWBcbmNvbnN0IFBBU1NUSFJPVUdIX0xJU1RFTkVSU19QRVJfU1RSRUFNID0gMTtcbiIsICJpbXBvcnQge2ZpbmlzaGVkfSBmcm9tICdub2RlOnN0cmVhbS9wcm9taXNlcyc7XG5pbXBvcnQge2lzU3RhbmRhcmRTdHJlYW19IGZyb20gJy4uL3V0aWxzL3N0YW5kYXJkLXN0cmVhbS5qcyc7XG5cbi8vIFNpbWlsYXIgdG8gYFN0cmVhbS5waXBlbGluZShzb3VyY2UsIGRlc3RpbmF0aW9uKWAsIGJ1dCBkb2VzIG5vdCBkZXN0cm95IHN0YW5kYXJkIHN0cmVhbXNcbmV4cG9ydCBjb25zdCBwaXBlU3RyZWFtcyA9IChzb3VyY2UsIGRlc3RpbmF0aW9uKSA9PiB7XG5cdHNvdXJjZS5waXBlKGRlc3RpbmF0aW9uKTtcblx0b25Tb3VyY2VGaW5pc2goc291cmNlLCBkZXN0aW5hdGlvbik7XG5cdG9uRGVzdGluYXRpb25GaW5pc2goc291cmNlLCBkZXN0aW5hdGlvbik7XG59O1xuXG4vLyBgc291cmNlLnBpcGUoZGVzdGluYXRpb24pYCBtYWtlcyBgZGVzdGluYXRpb25gIGVuZCB3aGVuIGBzb3VyY2VgIGVuZHMuXG4vLyBCdXQgaXQgZG9lcyBub3QgcHJvcGFnYXRlIGFib3J0cyBvciBlcnJvcnMuIFRoaXMgZnVuY3Rpb24gZG9lcyBpdC5cbmNvbnN0IG9uU291cmNlRmluaXNoID0gYXN5bmMgKHNvdXJjZSwgZGVzdGluYXRpb24pID0+IHtcblx0aWYgKGlzU3RhbmRhcmRTdHJlYW0oc291cmNlKSB8fCBpc1N0YW5kYXJkU3RyZWFtKGRlc3RpbmF0aW9uKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRyeSB7XG5cdFx0YXdhaXQgZmluaXNoZWQoc291cmNlLCB7Y2xlYW51cDogdHJ1ZSwgcmVhZGFibGU6IHRydWUsIHdyaXRhYmxlOiBmYWxzZX0pO1xuXHR9IGNhdGNoIHt9XG5cblx0ZW5kRGVzdGluYXRpb25TdHJlYW0oZGVzdGluYXRpb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuZERlc3RpbmF0aW9uU3RyZWFtID0gZGVzdGluYXRpb24gPT4ge1xuXHRpZiAoZGVzdGluYXRpb24ud3JpdGFibGUpIHtcblx0XHRkZXN0aW5hdGlvbi5lbmQoKTtcblx0fVxufTtcblxuLy8gV2UgZG8gdGhlIHNhbWUgdGhpbmcgaW4gdGhlIG90aGVyIGRpcmVjdGlvbiBhcyB3ZWxsLlxuY29uc3Qgb25EZXN0aW5hdGlvbkZpbmlzaCA9IGFzeW5jIChzb3VyY2UsIGRlc3RpbmF0aW9uKSA9PiB7XG5cdGlmIChpc1N0YW5kYXJkU3RyZWFtKHNvdXJjZSkgfHwgaXNTdGFuZGFyZFN0cmVhbShkZXN0aW5hdGlvbikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGF3YWl0IGZpbmlzaGVkKGRlc3RpbmF0aW9uLCB7Y2xlYW51cDogdHJ1ZSwgcmVhZGFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZX0pO1xuXHR9IGNhdGNoIHt9XG5cblx0YWJvcnRTb3VyY2VTdHJlYW0oc291cmNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhYm9ydFNvdXJjZVN0cmVhbSA9IHNvdXJjZSA9PiB7XG5cdGlmIChzb3VyY2UucmVhZGFibGUpIHtcblx0XHRzb3VyY2UuZGVzdHJveSgpO1xuXHR9XG59O1xuIiwgImltcG9ydCBtZXJnZVN0cmVhbXMgZnJvbSAnQHNpbmRyZXNvcmh1cy9tZXJnZS1zdHJlYW1zJztcbmltcG9ydCB7aXNTdGFuZGFyZFN0cmVhbX0gZnJvbSAnLi4vdXRpbHMvc3RhbmRhcmQtc3RyZWFtLmpzJztcbmltcG9ydCB7aW5jcmVtZW50TWF4TGlzdGVuZXJzfSBmcm9tICcuLi91dGlscy9tYXgtbGlzdGVuZXJzLmpzJztcbmltcG9ydCB7VFJBTlNGT1JNX1RZUEVTfSBmcm9tICcuLi9zdGRpby90eXBlLmpzJztcbmltcG9ydCB7cGlwZVN0cmVhbXN9IGZyb20gJy4vcGlwZWxpbmUuanMnO1xuXG4vLyBIYW5kbGUgYGlucHV0YCwgYGlucHV0RmlsZWAsIGBzdGRpbmAsIGBzdGRvdXRgIGFuZCBgc3RkZXJyYCBvcHRpb25zLCBhZnRlciBzcGF3bmluZywgaW4gYXN5bmMgbW9kZVxuLy8gV2hlbiBtdWx0aXBsZSBpbnB1dCBzdHJlYW1zIGFyZSB1c2VkLCB3ZSBtZXJnZSB0aGVtIHRvIGVuc3VyZSB0aGUgb3V0cHV0IHN0cmVhbSBlbmRzIG9ubHkgb25jZSBlYWNoIGlucHV0IHN0cmVhbSBoYXMgZW5kZWRcbmV4cG9ydCBjb25zdCBwaXBlT3V0cHV0QXN5bmMgPSAoc3VicHJvY2VzcywgZmlsZURlc2NyaXB0b3JzLCBjb250cm9sbGVyKSA9PiB7XG5cdGNvbnN0IHBpcGVHcm91cHMgPSBuZXcgTWFwKCk7XG5cblx0Zm9yIChjb25zdCBbZmROdW1iZXIsIHtzdGRpb0l0ZW1zLCBkaXJlY3Rpb259XSBvZiBPYmplY3QuZW50cmllcyhmaWxlRGVzY3JpcHRvcnMpKSB7XG5cdFx0Zm9yIChjb25zdCB7c3RyZWFtfSBvZiBzdGRpb0l0ZW1zLmZpbHRlcigoe3R5cGV9KSA9PiBUUkFOU0ZPUk1fVFlQRVMuaGFzKHR5cGUpKSkge1xuXHRcdFx0cGlwZVRyYW5zZm9ybShzdWJwcm9jZXNzLCBzdHJlYW0sIGRpcmVjdGlvbiwgZmROdW1iZXIpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3Qge3N0cmVhbX0gb2Ygc3RkaW9JdGVtcy5maWx0ZXIoKHt0eXBlfSkgPT4gIVRSQU5TRk9STV9UWVBFUy5oYXModHlwZSkpKSB7XG5cdFx0XHRwaXBlU3RkaW9JdGVtKHtcblx0XHRcdFx0c3VicHJvY2Vzcyxcblx0XHRcdFx0c3RyZWFtLFxuXHRcdFx0XHRkaXJlY3Rpb24sXG5cdFx0XHRcdGZkTnVtYmVyLFxuXHRcdFx0XHRwaXBlR3JvdXBzLFxuXHRcdFx0XHRjb250cm9sbGVyLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCBbb3V0cHV0U3RyZWFtLCBpbnB1dFN0cmVhbXNdIG9mIHBpcGVHcm91cHMuZW50cmllcygpKSB7XG5cdFx0Y29uc3QgaW5wdXRTdHJlYW0gPSBpbnB1dFN0cmVhbXMubGVuZ3RoID09PSAxID8gaW5wdXRTdHJlYW1zWzBdIDogbWVyZ2VTdHJlYW1zKGlucHV0U3RyZWFtcyk7XG5cdFx0cGlwZVN0cmVhbXMoaW5wdXRTdHJlYW0sIG91dHB1dFN0cmVhbSk7XG5cdH1cbn07XG5cbi8vIFdoZW4gdXNpbmcgdHJhbnNmb3JtcywgYHN1YnByb2Nlc3Muc3RkaW58c3Rkb3V0fHN0ZGVycnxzdGRpb2AgaXMgZGlyZWN0bHkgbXV0YXRlZFxuY29uc3QgcGlwZVRyYW5zZm9ybSA9IChzdWJwcm9jZXNzLCBzdHJlYW0sIGRpcmVjdGlvbiwgZmROdW1iZXIpID0+IHtcblx0aWYgKGRpcmVjdGlvbiA9PT0gJ291dHB1dCcpIHtcblx0XHRwaXBlU3RyZWFtcyhzdWJwcm9jZXNzLnN0ZGlvW2ZkTnVtYmVyXSwgc3RyZWFtKTtcblx0fSBlbHNlIHtcblx0XHRwaXBlU3RyZWFtcyhzdHJlYW0sIHN1YnByb2Nlc3Muc3RkaW9bZmROdW1iZXJdKTtcblx0fVxuXG5cdGNvbnN0IHN0cmVhbVByb3BlcnR5ID0gU1VCUFJPQ0VTU19TVFJFQU1fUFJPUEVSVElFU1tmZE51bWJlcl07XG5cdGlmIChzdHJlYW1Qcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0c3VicHJvY2Vzc1tzdHJlYW1Qcm9wZXJ0eV0gPSBzdHJlYW07XG5cdH1cblxuXHRzdWJwcm9jZXNzLnN0ZGlvW2ZkTnVtYmVyXSA9IHN0cmVhbTtcbn07XG5cbmNvbnN0IFNVQlBST0NFU1NfU1RSRUFNX1BST1BFUlRJRVMgPSBbJ3N0ZGluJywgJ3N0ZG91dCcsICdzdGRlcnInXTtcblxuLy8gTW9zdCBgc3RkKmAgb3B0aW9uIHZhbHVlcyBpbnZvbHZlIHBpcGluZyBgc3VicHJvY2Vzcy5zdGQqYCB0byBhIHN0cmVhbS5cbi8vIFRoZSBzdHJlYW0gaXMgZWl0aGVyIHBhc3NlZCBieSB0aGUgdXNlciBvciBjcmVhdGVkIGludGVybmFsbHkuXG5jb25zdCBwaXBlU3RkaW9JdGVtID0gKHtzdWJwcm9jZXNzLCBzdHJlYW0sIGRpcmVjdGlvbiwgZmROdW1iZXIsIHBpcGVHcm91cHMsIGNvbnRyb2xsZXJ9KSA9PiB7XG5cdGlmIChzdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHNldFN0YW5kYXJkU3RyZWFtTWF4TGlzdGVuZXJzKHN0cmVhbSwgY29udHJvbGxlcik7XG5cblx0Y29uc3QgW2lucHV0U3RyZWFtLCBvdXRwdXRTdHJlYW1dID0gZGlyZWN0aW9uID09PSAnb3V0cHV0J1xuXHRcdD8gW3N0cmVhbSwgc3VicHJvY2Vzcy5zdGRpb1tmZE51bWJlcl1dXG5cdFx0OiBbc3VicHJvY2Vzcy5zdGRpb1tmZE51bWJlcl0sIHN0cmVhbV07XG5cdGNvbnN0IG91dHB1dFN0cmVhbXMgPSBwaXBlR3JvdXBzLmdldChpbnB1dFN0cmVhbSkgPz8gW107XG5cdHBpcGVHcm91cHMuc2V0KGlucHV0U3RyZWFtLCBbLi4ub3V0cHV0U3RyZWFtcywgb3V0cHV0U3RyZWFtXSk7XG59O1xuXG4vLyBNdWx0aXBsZSBzdWJwcm9jZXNzZXMgbWlnaHQgYmUgcGlwaW5nIGZyb20vdG8gYHByb2Nlc3Muc3RkKmAgYXQgdGhlIHNhbWUgdGltZS5cbi8vIFRoaXMgaXMgbm90IG5lY2Vzc2FyaWx5IGFuIGVycm9yIGFuZCBzaG91bGQgbm90IHByaW50IGEgYG1heExpc3RlbmVyc2Agd2FybmluZy5cbmNvbnN0IHNldFN0YW5kYXJkU3RyZWFtTWF4TGlzdGVuZXJzID0gKHN0cmVhbSwge3NpZ25hbH0pID0+IHtcblx0aWYgKGlzU3RhbmRhcmRTdHJlYW0oc3RyZWFtKSkge1xuXHRcdGluY3JlbWVudE1heExpc3RlbmVycyhzdHJlYW0sIE1BWF9MSVNURU5FUlNfSU5DUkVNRU5ULCBzaWduYWwpO1xuXHR9XG59O1xuXG4vLyBgc291cmNlLnBpcGUoZGVzdGluYXRpb24pYCBhZGRzIGF0IG1vc3QgMSBsaXN0ZW5lciBmb3IgZWFjaCBldmVudC5cbi8vIElmIGBzdGRpbmAgb3B0aW9uIGlzIGFuIGFycmF5LCB0aGUgdmFsdWVzIG1pZ2h0IGJlIGNvbWJpbmVkIHdpdGggYG1lcmdlLXN0cmVhbXNgLlxuLy8gVGhhdCBsaWJyYXJ5IGFsc28gbGlzdGVucyBmb3IgYHNvdXJjZWAgZW5kLCB3aGljaCBhZGRzIDEgbW9yZSBsaXN0ZW5lci5cbmNvbnN0IE1BWF9MSVNURU5FUlNfSU5DUkVNRU5UID0gMjtcbiIsICIvKipcbiAqIFRoaXMgaXMgbm90IHRoZSBzZXQgb2YgYWxsIHBvc3NpYmxlIHNpZ25hbHMuXG4gKlxuICogSXQgSVMsIGhvd2V2ZXIsIHRoZSBzZXQgb2YgYWxsIHNpZ25hbHMgdGhhdCB0cmlnZ2VyXG4gKiBhbiBleGl0IG9uIGVpdGhlciBMaW51eCBvciBCU0Qgc3lzdGVtcy4gIExpbnV4IGlzIGFcbiAqIHN1cGVyc2V0IG9mIHRoZSBzaWduYWwgbmFtZXMgc3VwcG9ydGVkIG9uIEJTRCwgYW5kXG4gKiB0aGUgdW5rbm93biBzaWduYWxzIGp1c3QgZmFpbCB0byByZWdpc3Rlciwgc28gd2UgY2FuXG4gKiBjYXRjaCB0aGF0IGVhc2lseSBlbm91Z2guXG4gKlxuICogV2luZG93cyBzaWduYWxzIGFyZSBhIGRpZmZlcmVudCBzZXQsIHNpbmNlIHRoZXJlIGFyZVxuICogc2lnbmFscyB0aGF0IHRlcm1pbmF0ZSBXaW5kb3dzIHByb2Nlc3NlcywgYnV0IGRvbid0XG4gKiB0ZXJtaW5hdGUgKG9yIGRvbid0IGV2ZW4gZXhpc3QpIG9uIFBvc2l4IHN5c3RlbXMuXG4gKlxuICogRG9uJ3QgYm90aGVyIHdpdGggU0lHS0lMTC4gIEl0J3MgdW5jYXRjaGFibGUsIHdoaWNoXG4gKiBtZWFucyB0aGF0IHdlIGNhbid0IGZpcmUgYW55IGNhbGxiYWNrcyBhbnl3YXkuXG4gKlxuICogSWYgYSB1c2VyIGRvZXMgaGFwcGVuIHRvIHJlZ2lzdGVyIGEgaGFuZGxlciBvbiBhIG5vbi1cbiAqIGZhdGFsIHNpZ25hbCBsaWtlIFNJR1dJTkNIIG9yIHNvbWV0aGluZywgYW5kIHRoZW5cbiAqIGV4aXQsIGl0J2xsIGVuZCB1cCBmaXJpbmcgYHByb2Nlc3MuZW1pdCgnZXhpdCcpYCwgc29cbiAqIHRoZSBoYW5kbGVyIHdpbGwgYmUgZmlyZWQgYW55d2F5LlxuICpcbiAqIFNJR0JVUywgU0lHRlBFLCBTSUdTRUdWIGFuZCBTSUdJTEwsIHdoZW4gbm90IHJhaXNlZFxuICogYXJ0aWZpY2lhbGx5LCBpbmhlcmVudGx5IGxlYXZlIHRoZSBwcm9jZXNzIGluIGFcbiAqIHN0YXRlIGZyb20gd2hpY2ggaXQgaXMgbm90IHNhZmUgdG8gdHJ5IGFuZCBlbnRlciBKU1xuICogbGlzdGVuZXJzLlxuICovXG5leHBvcnQgY29uc3Qgc2lnbmFsczogTm9kZUpTLlNpZ25hbHNbXSA9IFtdXG5zaWduYWxzLnB1c2goJ1NJR0hVUCcsICdTSUdJTlQnLCAnU0lHVEVSTScpXG5cbmlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnd2luMzInKSB7XG4gIHNpZ25hbHMucHVzaChcbiAgICAnU0lHQUxSTScsXG4gICAgJ1NJR0FCUlQnLFxuICAgICdTSUdWVEFMUk0nLFxuICAgICdTSUdYQ1BVJyxcbiAgICAnU0lHWEZTWicsXG4gICAgJ1NJR1VTUjInLFxuICAgICdTSUdUUkFQJyxcbiAgICAnU0lHU1lTJyxcbiAgICAnU0lHUVVJVCcsXG4gICAgJ1NJR0lPVCdcbiAgICAvLyBzaG91bGQgZGV0ZWN0IHByb2ZpbGVyIGFuZCBlbmFibGUvZGlzYWJsZSBhY2NvcmRpbmdseS5cbiAgICAvLyBzZWUgIzIxXG4gICAgLy8gJ1NJR1BST0YnXG4gIClcbn1cblxuaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCcpIHtcbiAgc2lnbmFscy5wdXNoKCdTSUdJTycsICdTSUdQT0xMJywgJ1NJR1BXUicsICdTSUdTVEtGTFQnKVxufVxuIiwgIi8vIE5vdGU6IHNpbmNlIG55YyB1c2VzIHRoaXMgbW9kdWxlIHRvIG91dHB1dCBjb3ZlcmFnZSwgYW55IGxpbmVzXG4vLyB0aGF0IGFyZSBpbiB0aGUgZGlyZWN0IHN5bmMgZmxvdyBvZiBueWMncyBvdXRwdXRDb3ZlcmFnZSBhcmVcbi8vIGlnbm9yZWQsIHNpbmNlIHdlIGNhbiBuZXZlciBnZXQgY292ZXJhZ2UgZm9yIHRoZW0uXG4vLyBncmFiIGEgcmVmZXJlbmNlIHRvIG5vZGUncyByZWFsIHByb2Nlc3Mgb2JqZWN0IHJpZ2h0IGF3YXlcbmltcG9ydCB7IHNpZ25hbHMgfSBmcm9tICcuL3NpZ25hbHMuanMnXG5leHBvcnQgeyBzaWduYWxzIH1cblxuLy8ganVzdCBhIGxvb3NlbmVkIHByb2Nlc3MgdHlwZSBzbyB3ZSBjYW4gZG8gc29tZSBldmlsIHRoaW5nc1xudHlwZSBQcm9jZXNzUkUgPSBOb2RlSlMuUHJvY2VzcyAmIHtcbiAgcmVhbGx5RXhpdDogKGNvZGU/OiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsKSA9PiBhbnlcbiAgZW1pdDogKGV2OiBzdHJpbmcsIC4uLmE6IGFueVtdKSA9PiBhbnlcbn1cblxuY29uc3QgcHJvY2Vzc09rID0gKHByb2Nlc3M6IGFueSk6IHByb2Nlc3MgaXMgUHJvY2Vzc1JFID0+XG4gICEhcHJvY2VzcyAmJlxuICB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgdHlwZW9mIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHByb2Nlc3MuZW1pdCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcHJvY2Vzcy5yZWFsbHlFeGl0ID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwcm9jZXNzLmxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcHJvY2Vzcy5raWxsID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwcm9jZXNzLnBpZCA9PT0gJ251bWJlcicgJiZcbiAgdHlwZW9mIHByb2Nlc3Mub24gPT09ICdmdW5jdGlvbidcblxuY29uc3Qga0V4aXRFbWl0dGVyID0gU3ltYm9sLmZvcignc2lnbmFsLWV4aXQgZW1pdHRlcicpXG5jb25zdCBnbG9iYWw6IHR5cGVvZiBnbG9iYWxUaGlzICYgeyBba0V4aXRFbWl0dGVyXT86IEVtaXR0ZXIgfSA9IGdsb2JhbFRoaXNcbmNvbnN0IE9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5LmJpbmQoT2JqZWN0KVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBleGl0IGNvZGUgYW5kIHNpZ25hbCBhcyBhcmd1bWVudHNcbiAqXG4gKiBJbiB0aGUgY2FzZSBvZiBzaWduYWwgZXhpdHMgKm9ubHkqLCBhIHJldHVybiB2YWx1ZSBvZiB0cnVlXG4gKiB3aWxsIGluZGljYXRlIHRoYXQgdGhlIHNpZ25hbCBpcyBiZWluZyBoYW5kbGVkLCBhbmQgd2Ugc2hvdWxkXG4gKiBub3Qgc3ludGhldGljYWxseSBleGl0IHdpdGggdGhlIHNpZ25hbCB3ZSByZWNlaXZlZC4gUmVnYXJkbGVzc1xuICogb2YgdGhlIGhhbmRsZXIgcmV0dXJuIHZhbHVlLCB0aGUgaGFuZGxlciBpcyB1bmxvYWRlZCB3aGVuIGFuXG4gKiBvdGhlcndpc2UgZmF0YWwgc2lnbmFsIGlzIHJlY2VpdmVkLCBzbyB5b3UgZ2V0IGV4YWN0bHkgMSBzaG90XG4gKiBhdCBpdCwgdW5sZXNzIHlvdSBhZGQgYW5vdGhlciBvbkV4aXQgaGFuZGxlciBhdCB0aGF0IHBvaW50LlxuICpcbiAqIEluIHRoZSBjYXNlIG9mIG51bWVyaWMgY29kZSBleGl0cywgd2UgbWF5IGFscmVhZHkgaGF2ZSBjb21taXR0ZWRcbiAqIHRvIGV4aXRpbmcgdGhlIHByb2Nlc3MsIGZvciBleGFtcGxlIHZpYSBhIGZhdGFsIGV4Y2VwdGlvbiBvclxuICogdW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uLCBzbyBpdCBpcyBpbXBvc3NpYmxlIHRvIHN0b3Agc2FmZWx5LlxuICovXG5leHBvcnQgdHlwZSBIYW5kbGVyID0gKFxuICBjb2RlOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLFxuICBzaWduYWw6IE5vZGVKUy5TaWduYWxzIHwgbnVsbFxuKSA9PiB0cnVlIHwgdm9pZFxudHlwZSBFeGl0RXZlbnQgPSAnYWZ0ZXJFeGl0JyB8ICdleGl0J1xudHlwZSBFbWl0dGVkID0geyBbayBpbiBFeGl0RXZlbnRdOiBib29sZWFuIH1cbnR5cGUgTGlzdGVuZXJzID0geyBbayBpbiBFeGl0RXZlbnRdOiBIYW5kbGVyW10gfVxuXG4vLyB0ZWVueSBzcGVjaWFsIHB1cnBvc2UgZWVcbmNsYXNzIEVtaXR0ZXIge1xuICBlbWl0dGVkOiBFbWl0dGVkID0ge1xuICAgIGFmdGVyRXhpdDogZmFsc2UsXG4gICAgZXhpdDogZmFsc2UsXG4gIH1cblxuICBsaXN0ZW5lcnM6IExpc3RlbmVycyA9IHtcbiAgICBhZnRlckV4aXQ6IFtdLFxuICAgIGV4aXQ6IFtdLFxuICB9XG5cbiAgY291bnQ6IG51bWJlciA9IDBcbiAgaWQ6IG51bWJlciA9IE1hdGgucmFuZG9tKClcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoZ2xvYmFsW2tFeGl0RW1pdHRlcl0pIHtcbiAgICAgIHJldHVybiBnbG9iYWxba0V4aXRFbWl0dGVyXVxuICAgIH1cbiAgICBPYmplY3REZWZpbmVQcm9wZXJ0eShnbG9iYWwsIGtFeGl0RW1pdHRlciwge1xuICAgICAgdmFsdWU6IHRoaXMsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgfSlcbiAgfVxuXG4gIG9uKGV2OiBFeGl0RXZlbnQsIGZuOiBIYW5kbGVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnNbZXZdLnB1c2goZm4pXG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcihldjogRXhpdEV2ZW50LCBmbjogSGFuZGxlcikge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmxpc3RlbmVyc1tldl1cbiAgICBjb25zdCBpID0gbGlzdC5pbmRleE9mKGZuKVxuICAgIC8qIGM4IGlnbm9yZSBzdGFydCAqL1xuICAgIGlmIChpID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8qIGM4IGlnbm9yZSBzdG9wICovXG4gICAgaWYgKGkgPT09IDAgJiYgbGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpc3QubGVuZ3RoID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShpLCAxKVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoXG4gICAgZXY6IEV4aXRFdmVudCxcbiAgICBjb2RlOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIHNpZ25hbDogTm9kZUpTLlNpZ25hbHMgfCBudWxsXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmVtaXR0ZWRbZXZdKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgdGhpcy5lbWl0dGVkW2V2XSA9IHRydWVcbiAgICBsZXQgcmV0OiBib29sZWFuID0gZmFsc2VcbiAgICBmb3IgKGNvbnN0IGZuIG9mIHRoaXMubGlzdGVuZXJzW2V2XSkge1xuICAgICAgcmV0ID0gZm4oY29kZSwgc2lnbmFsKSA9PT0gdHJ1ZSB8fCByZXRcbiAgICB9XG4gICAgaWYgKGV2ID09PSAnZXhpdCcpIHtcbiAgICAgIHJldCA9IHRoaXMuZW1pdCgnYWZ0ZXJFeGl0JywgY29kZSwgc2lnbmFsKSB8fCByZXRcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIFNpZ25hbEV4aXRCYXNlIHtcbiAgYWJzdHJhY3Qgb25FeGl0KGNiOiBIYW5kbGVyLCBvcHRzPzogeyBhbHdheXNMYXN0PzogYm9vbGVhbiB9KTogKCkgPT4gdm9pZFxuICBhYnN0cmFjdCBsb2FkKCk6IHZvaWRcbiAgYWJzdHJhY3QgdW5sb2FkKCk6IHZvaWRcbn1cblxuY29uc3Qgc2lnbmFsRXhpdFdyYXAgPSA8VCBleHRlbmRzIFNpZ25hbEV4aXRCYXNlPihoYW5kbGVyOiBUKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb25FeGl0KGNiOiBIYW5kbGVyLCBvcHRzPzogeyBhbHdheXNMYXN0PzogYm9vbGVhbiB9KSB7XG4gICAgICByZXR1cm4gaGFuZGxlci5vbkV4aXQoY2IsIG9wdHMpXG4gICAgfSxcbiAgICBsb2FkKCkge1xuICAgICAgcmV0dXJuIGhhbmRsZXIubG9hZCgpXG4gICAgfSxcbiAgICB1bmxvYWQoKSB7XG4gICAgICByZXR1cm4gaGFuZGxlci51bmxvYWQoKVxuICAgIH0sXG4gIH1cbn1cblxuY2xhc3MgU2lnbmFsRXhpdEZhbGxiYWNrIGV4dGVuZHMgU2lnbmFsRXhpdEJhc2Uge1xuICBvbkV4aXQoKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cbiAgbG9hZCgpIHt9XG4gIHVubG9hZCgpIHt9XG59XG5cbmNsYXNzIFNpZ25hbEV4aXQgZXh0ZW5kcyBTaWduYWxFeGl0QmFzZSB7XG4gIC8vIFwiU0lHSFVQXCIgdGhyb3dzIGFuIGBFTk9TWVNgIGVycm9yIG9uIFdpbmRvd3MsXG4gIC8vIHNvIHVzZSBhIHN1cHBvcnRlZCBzaWduYWwgaW5zdGVhZFxuICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgI2h1cFNpZyA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgPyAnU0lHSU5UJyA6ICdTSUdIVVAnXG4gIC8qIGM4IGlnbm9yZSBzdG9wICovXG4gICNlbWl0dGVyID0gbmV3IEVtaXR0ZXIoKVxuICAjcHJvY2VzczogUHJvY2Vzc1JFXG4gICNvcmlnaW5hbFByb2Nlc3NFbWl0OiBQcm9jZXNzUkVbJ2VtaXQnXVxuICAjb3JpZ2luYWxQcm9jZXNzUmVhbGx5RXhpdDogUHJvY2Vzc1JFWydyZWFsbHlFeGl0J11cblxuICAjc2lnTGlzdGVuZXJzOiB7IFtrIGluIE5vZGVKUy5TaWduYWxzXT86ICgpID0+IHZvaWQgfSA9IHt9XG4gICNsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKHByb2Nlc3M6IFByb2Nlc3NSRSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLiNwcm9jZXNzID0gcHJvY2Vzc1xuICAgIC8vIHsgPHNpZ25hbD46IDxsaXN0ZW5lciBmbj4sIC4uLiB9XG4gICAgdGhpcy4jc2lnTGlzdGVuZXJzID0ge31cbiAgICBmb3IgKGNvbnN0IHNpZyBvZiBzaWduYWxzKSB7XG4gICAgICB0aGlzLiNzaWdMaXN0ZW5lcnNbc2lnXSA9ICgpID0+IHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIG90aGVyIGxpc3RlbmVycywgYW4gZXhpdCBpcyBjb21pbmchXG4gICAgICAgIC8vIFNpbXBsZXN0IHdheTogcmVtb3ZlIHVzIGFuZCB0aGVuIHJlLXNlbmQgdGhlIHNpZ25hbC5cbiAgICAgICAgLy8gV2Uga25vdyB0aGF0IHRoaXMgd2lsbCBraWxsIHRoZSBwcm9jZXNzLCBzbyB3ZSBjYW5cbiAgICAgICAgLy8gc2FmZWx5IGVtaXQgbm93LlxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLiNwcm9jZXNzLmxpc3RlbmVycyhzaWcpXG4gICAgICAgIGxldCB7IGNvdW50IH0gPSB0aGlzLiNlbWl0dGVyXG4gICAgICAgIC8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvciB0aGUgZmFjdCB0aGF0IHNpZ25hbC1leGl0IHYzIGFuZCBzaWduYWxcbiAgICAgICAgLy8gZXhpdCB2NCBhcmUgbm90IGF3YXJlIG9mIGVhY2ggb3RoZXIsIGFuZCBlYWNoIHdpbGwgYXR0ZW1wdCB0byBsZXRcbiAgICAgICAgLy8gdGhlIG90aGVyIGhhbmRsZSBpdCwgc28gbmVpdGhlciBvZiB0aGVtIGRvLiBUbyBjb3JyZWN0IHRoaXMsIHdlXG4gICAgICAgIC8vIGRldGVjdCBpZiB3ZSdyZSB0aGUgb25seSBoYW5kbGVyICpleGNlcHQqIGZvciBwcmV2aW91cyB2ZXJzaW9uc1xuICAgICAgICAvLyBvZiBzaWduYWwtZXhpdCwgYW5kIGluY3JlbWVudCBieSB0aGUgY291bnQgb2YgbGlzdGVuZXJzIGl0IGhhc1xuICAgICAgICAvLyBjcmVhdGVkLlxuICAgICAgICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgICAgICAgY29uc3QgcCA9IHByb2Nlc3MgYXMgdW5rbm93biBhcyB7XG4gICAgICAgICAgX19zaWduYWxfZXhpdF9lbWl0dGVyX18/OiB7IGNvdW50OiBudW1iZXIgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0eXBlb2YgcC5fX3NpZ25hbF9leGl0X2VtaXR0ZXJfXyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICB0eXBlb2YgcC5fX3NpZ25hbF9leGl0X2VtaXR0ZXJfXy5jb3VudCA9PT0gJ251bWJlcidcbiAgICAgICAgKSB7XG4gICAgICAgICAgY291bnQgKz0gcC5fX3NpZ25hbF9leGl0X2VtaXR0ZXJfXy5jb3VudFxuICAgICAgICB9XG4gICAgICAgIC8qIGM4IGlnbm9yZSBzdG9wICovXG4gICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSBjb3VudCkge1xuICAgICAgICAgIHRoaXMudW5sb2FkKClcbiAgICAgICAgICBjb25zdCByZXQgPSB0aGlzLiNlbWl0dGVyLmVtaXQoJ2V4aXQnLCBudWxsLCBzaWcpXG4gICAgICAgICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgICAgICAgY29uc3QgcyA9IHNpZyA9PT0gJ1NJR0hVUCcgPyB0aGlzLiNodXBTaWcgOiBzaWdcbiAgICAgICAgICBpZiAoIXJldCkgcHJvY2Vzcy5raWxsKHByb2Nlc3MucGlkLCBzKVxuICAgICAgICAgIC8qIGM4IGlnbm9yZSBzdG9wICovXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiNvcmlnaW5hbFByb2Nlc3NSZWFsbHlFeGl0ID0gcHJvY2Vzcy5yZWFsbHlFeGl0XG4gICAgdGhpcy4jb3JpZ2luYWxQcm9jZXNzRW1pdCA9IHByb2Nlc3MuZW1pdFxuICB9XG5cbiAgb25FeGl0KGNiOiBIYW5kbGVyLCBvcHRzPzogeyBhbHdheXNMYXN0PzogYm9vbGVhbiB9KSB7XG4gICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgaWYgKCFwcm9jZXNzT2sodGhpcy4jcHJvY2VzcykpIHtcbiAgICAgIHJldHVybiAoKSA9PiB7fVxuICAgIH1cbiAgICAvKiBjOCBpZ25vcmUgc3RvcCAqL1xuXG4gICAgaWYgKHRoaXMuI2xvYWRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubG9hZCgpXG4gICAgfVxuXG4gICAgY29uc3QgZXYgPSBvcHRzPy5hbHdheXNMYXN0ID8gJ2FmdGVyRXhpdCcgOiAnZXhpdCdcbiAgICB0aGlzLiNlbWl0dGVyLm9uKGV2LCBjYilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGhpcy4jZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihldiwgY2IpXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuI2VtaXR0ZXIubGlzdGVuZXJzWydleGl0J10ubGVuZ3RoID09PSAwICYmXG4gICAgICAgIHRoaXMuI2VtaXR0ZXIubGlzdGVuZXJzWydhZnRlckV4aXQnXS5sZW5ndGggPT09IDBcbiAgICAgICkge1xuICAgICAgICB0aGlzLnVubG9hZCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICBpZiAodGhpcy4jbG9hZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy4jbG9hZGVkID0gdHJ1ZVxuXG4gICAgLy8gVGhpcyBpcyB0aGUgbnVtYmVyIG9mIG9uU2lnbmFsRXhpdCdzIHRoYXQgYXJlIGluIHBsYXkuXG4gICAgLy8gSXQncyBpbXBvcnRhbnQgc28gdGhhdCB3ZSBjYW4gY291bnQgdGhlIGNvcnJlY3QgbnVtYmVyIG9mXG4gICAgLy8gbGlzdGVuZXJzIG9uIHNpZ25hbHMsIGFuZCBkb24ndCB3YWl0IGZvciB0aGUgb3RoZXIgb25lIHRvXG4gICAgLy8gaGFuZGxlIGl0IGluc3RlYWQgb2YgdXMuXG4gICAgdGhpcy4jZW1pdHRlci5jb3VudCArPSAxXG5cbiAgICBmb3IgKGNvbnN0IHNpZyBvZiBzaWduYWxzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmbiA9IHRoaXMuI3NpZ0xpc3RlbmVyc1tzaWddXG4gICAgICAgIGlmIChmbikgdGhpcy4jcHJvY2Vzcy5vbihzaWcsIGZuKVxuICAgICAgfSBjYXRjaCAoXykge31cbiAgICB9XG5cbiAgICB0aGlzLiNwcm9jZXNzLmVtaXQgPSAoZXY6IHN0cmluZywgLi4uYTogYW55W10pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLiNwcm9jZXNzRW1pdChldiwgLi4uYSlcbiAgICB9XG4gICAgdGhpcy4jcHJvY2Vzcy5yZWFsbHlFeGl0ID0gKGNvZGU/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy4jcHJvY2Vzc1JlYWxseUV4aXQoY29kZSlcbiAgICB9XG4gIH1cblxuICB1bmxvYWQoKSB7XG4gICAgaWYgKCF0aGlzLiNsb2FkZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLiNsb2FkZWQgPSBmYWxzZVxuXG4gICAgc2lnbmFscy5mb3JFYWNoKHNpZyA9PiB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMuI3NpZ0xpc3RlbmVyc1tzaWddXG4gICAgICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaXN0ZW5lciBub3QgZGVmaW5lZCBmb3Igc2lnbmFsOiAnICsgc2lnKVxuICAgICAgfVxuICAgICAgLyogYzggaWdub3JlIHN0b3AgKi9cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuI3Byb2Nlc3MucmVtb3ZlTGlzdGVuZXIoc2lnLCBsaXN0ZW5lcilcbiAgICAgICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgLyogYzggaWdub3JlIHN0b3AgKi9cbiAgICB9KVxuICAgIHRoaXMuI3Byb2Nlc3MuZW1pdCA9IHRoaXMuI29yaWdpbmFsUHJvY2Vzc0VtaXRcbiAgICB0aGlzLiNwcm9jZXNzLnJlYWxseUV4aXQgPSB0aGlzLiNvcmlnaW5hbFByb2Nlc3NSZWFsbHlFeGl0XG4gICAgdGhpcy4jZW1pdHRlci5jb3VudCAtPSAxXG4gIH1cblxuICAjcHJvY2Vzc1JlYWxseUV4aXQoY29kZT86IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgICBpZiAoIXByb2Nlc3NPayh0aGlzLiNwcm9jZXNzKSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgdGhpcy4jcHJvY2Vzcy5leGl0Q29kZSA9IGNvZGUgfHwgMFxuICAgIC8qIGM4IGlnbm9yZSBzdG9wICovXG5cbiAgICB0aGlzLiNlbWl0dGVyLmVtaXQoJ2V4aXQnLCB0aGlzLiNwcm9jZXNzLmV4aXRDb2RlLCBudWxsKVxuICAgIHJldHVybiB0aGlzLiNvcmlnaW5hbFByb2Nlc3NSZWFsbHlFeGl0LmNhbGwoXG4gICAgICB0aGlzLiNwcm9jZXNzLFxuICAgICAgdGhpcy4jcHJvY2Vzcy5leGl0Q29kZVxuICAgIClcbiAgfVxuXG4gICNwcm9jZXNzRW1pdChldjogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgY29uc3Qgb2cgPSB0aGlzLiNvcmlnaW5hbFByb2Nlc3NFbWl0XG4gICAgaWYgKGV2ID09PSAnZXhpdCcgJiYgcHJvY2Vzc09rKHRoaXMuI3Byb2Nlc3MpKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMuI3Byb2Nlc3MuZXhpdENvZGUgPSBhcmdzWzBdXG4gICAgICAgIC8qIGM4IGlnbm9yZSBzdGFydCAqL1xuICAgICAgfVxuICAgICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgICBjb25zdCByZXQgPSBvZy5jYWxsKHRoaXMuI3Byb2Nlc3MsIGV2LCAuLi5hcmdzKVxuICAgICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgICB0aGlzLiNlbWl0dGVyLmVtaXQoJ2V4aXQnLCB0aGlzLiNwcm9jZXNzLmV4aXRDb2RlLCBudWxsKVxuICAgICAgLyogYzggaWdub3JlIHN0b3AgKi9cbiAgICAgIHJldHVybiByZXRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9nLmNhbGwodGhpcy4jcHJvY2VzcywgZXYsIC4uLmFyZ3MpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3Ncbi8vIHdyYXAgc28gdGhhdCB3ZSBjYWxsIHRoZSBtZXRob2Qgb24gdGhlIGFjdHVhbCBoYW5kbGVyLCB3aXRob3V0XG4vLyBleHBvcnRpbmcgaXQgZGlyZWN0bHkuXG5leHBvcnQgY29uc3Qge1xuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHByb2Nlc3MgaXMgZXhpdGluZywgd2hldGhlciB2aWEgc2lnbmFsLCBleHBsaWNpdFxuICAgKiBleGl0LCBvciBydW5uaW5nIG91dCBvZiBzdHVmZiB0byBkby5cbiAgICpcbiAgICogSWYgdGhlIGdsb2JhbCBwcm9jZXNzIG9iamVjdCBpcyBub3Qgc3VpdGFibGUgZm9yIGluc3RydW1lbnRhdGlvbixcbiAgICogdGhlbiB0aGlzIHdpbGwgYmUgYSBuby1vcC5cbiAgICpcbiAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gdW5sb2FkIHNpZ25hbC1leGl0LlxuICAgKi9cbiAgb25FeGl0LFxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBsaXN0ZW5lcnMuICBMaWtlbHkgeW91IG5ldmVyIG5lZWQgdG8gY2FsbCB0aGlzLCB1bmxlc3NcbiAgICogZG9pbmcgYSByYXRoZXIgZGVlcCBpbnRlZ3JhdGlvbiB3aXRoIHNpZ25hbC1leGl0IGZ1bmN0aW9uYWxpdHkuXG4gICAqIE1vc3RseSBleHBvc2VkIGZvciB0aGUgYmVuZWZpdCBvZiB0ZXN0aW5nLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGxvYWQsXG5cbiAgLyoqXG4gICAqIFVubG9hZCB0aGUgbGlzdGVuZXJzLiAgTGlrZWx5IHlvdSBuZXZlciBuZWVkIHRvIGNhbGwgdGhpcywgdW5sZXNzXG4gICAqIGRvaW5nIGEgcmF0aGVyIGRlZXAgaW50ZWdyYXRpb24gd2l0aCBzaWduYWwtZXhpdCBmdW5jdGlvbmFsaXR5LlxuICAgKiBNb3N0bHkgZXhwb3NlZCBmb3IgdGhlIGJlbmVmaXQgb2YgdGVzdGluZy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICB1bmxvYWQsXG59ID0gc2lnbmFsRXhpdFdyYXAoXG4gIHByb2Nlc3NPayhwcm9jZXNzKSA/IG5ldyBTaWduYWxFeGl0KHByb2Nlc3MpIDogbmV3IFNpZ25hbEV4aXRGYWxsYmFjaygpXG4pXG4iLCAiaW1wb3J0IHthZGRBYm9ydExpc3RlbmVyfSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge29uRXhpdH0gZnJvbSAnc2lnbmFsLWV4aXQnO1xuXG4vLyBJZiB0aGUgYGNsZWFudXBgIG9wdGlvbiBpcyB1c2VkLCBjYWxsIGBzdWJwcm9jZXNzLmtpbGwoKWAgd2hlbiB0aGUgcGFyZW50IHByb2Nlc3MgZXhpdHNcbmV4cG9ydCBjb25zdCBjbGVhbnVwT25FeGl0ID0gKHN1YnByb2Nlc3MsIHtjbGVhbnVwLCBkZXRhY2hlZH0sIHtzaWduYWx9KSA9PiB7XG5cdGlmICghY2xlYW51cCB8fCBkZXRhY2hlZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbW92ZUV4aXRIYW5kbGVyID0gb25FeGl0KCgpID0+IHtcblx0XHRzdWJwcm9jZXNzLmtpbGwoKTtcblx0fSk7XG5cdGFkZEFib3J0TGlzdGVuZXIoc2lnbmFsLCAoKSA9PiB7XG5cdFx0cmVtb3ZlRXhpdEhhbmRsZXIoKTtcblx0fSk7XG59O1xuIiwgImltcG9ydCB7bm9ybWFsaXplUGFyYW1ldGVyc30gZnJvbSAnLi4vbWV0aG9kcy9wYXJhbWV0ZXJzLmpzJztcbmltcG9ydCB7Z2V0U3RhcnRUaW1lfSBmcm9tICcuLi9yZXR1cm4vZHVyYXRpb24uanMnO1xuaW1wb3J0IHtTVUJQUk9DRVNTX09QVElPTlMsIGdldFRvU3RyZWFtLCBnZXRGcm9tU3RyZWFtfSBmcm9tICcuLi9hcmd1bWVudHMvZmQtb3B0aW9ucy5qcyc7XG5pbXBvcnQge2lzRGVub0V4ZWNQYXRofSBmcm9tICcuLi9hcmd1bWVudHMvZmlsZS11cmwuanMnO1xuXG4vLyBOb3JtYWxpemUgYW5kIHZhbGlkYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYHNvdXJjZS5waXBlKGRlc3RpbmF0aW9uKWBcbmV4cG9ydCBjb25zdCBub3JtYWxpemVQaXBlQXJndW1lbnRzID0gKHtzb3VyY2UsIHNvdXJjZVByb21pc2UsIGJvdW5kT3B0aW9ucywgY3JlYXRlTmVzdGVkfSwgLi4ucGlwZUFyZ3VtZW50cykgPT4ge1xuXHRjb25zdCBzdGFydFRpbWUgPSBnZXRTdGFydFRpbWUoKTtcblx0Y29uc3Qge1xuXHRcdGRlc3RpbmF0aW9uLFxuXHRcdGRlc3RpbmF0aW9uU3RyZWFtLFxuXHRcdGRlc3RpbmF0aW9uRXJyb3IsXG5cdFx0ZnJvbSxcblx0XHR1bnBpcGVTaWduYWwsXG5cdH0gPSBnZXREZXN0aW5hdGlvblN0cmVhbShib3VuZE9wdGlvbnMsIGNyZWF0ZU5lc3RlZCwgcGlwZUFyZ3VtZW50cyk7XG5cdGNvbnN0IHtzb3VyY2VTdHJlYW0sIHNvdXJjZUVycm9yfSA9IGdldFNvdXJjZVN0cmVhbShzb3VyY2UsIGZyb20pO1xuXHRjb25zdCB7b3B0aW9uczogc291cmNlT3B0aW9ucywgZmlsZURlc2NyaXB0b3JzfSA9IFNVQlBST0NFU1NfT1BUSU9OUy5nZXQoc291cmNlKTtcblx0cmV0dXJuIHtcblx0XHRzb3VyY2VQcm9taXNlLFxuXHRcdHNvdXJjZVN0cmVhbSxcblx0XHRzb3VyY2VPcHRpb25zLFxuXHRcdHNvdXJjZUVycm9yLFxuXHRcdGRlc3RpbmF0aW9uLFxuXHRcdGRlc3RpbmF0aW9uU3RyZWFtLFxuXHRcdGRlc3RpbmF0aW9uRXJyb3IsXG5cdFx0dW5waXBlU2lnbmFsLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRzdGFydFRpbWUsXG5cdH07XG59O1xuXG5jb25zdCBnZXREZXN0aW5hdGlvblN0cmVhbSA9IChib3VuZE9wdGlvbnMsIGNyZWF0ZU5lc3RlZCwgcGlwZUFyZ3VtZW50cykgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGRlc3RpbmF0aW9uLFxuXHRcdFx0cGlwZU9wdGlvbnM6IHtmcm9tLCB0bywgdW5waXBlU2lnbmFsfSA9IHt9LFxuXHRcdH0gPSBnZXREZXN0aW5hdGlvbihib3VuZE9wdGlvbnMsIGNyZWF0ZU5lc3RlZCwgLi4ucGlwZUFyZ3VtZW50cyk7XG5cdFx0Y29uc3QgZGVzdGluYXRpb25TdHJlYW0gPSBnZXRUb1N0cmVhbShkZXN0aW5hdGlvbiwgdG8pO1xuXHRcdHJldHVybiB7XG5cdFx0XHRkZXN0aW5hdGlvbixcblx0XHRcdGRlc3RpbmF0aW9uU3RyZWFtLFxuXHRcdFx0ZnJvbSxcblx0XHRcdHVucGlwZVNpZ25hbCxcblx0XHR9O1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiB7ZGVzdGluYXRpb25FcnJvcjogZXJyb3J9O1xuXHR9XG59O1xuXG4vLyBQaXBpbmcgc3VicHJvY2Vzc2VzIGNhbiB1c2UgdGhyZWUgc3ludGF4ZXM6XG4vLyAgLSBzb3VyY2UucGlwZSgnY29tbWFuZCcsIGNvbW1hbmRBcmd1bWVudHMsIHBpcGVPcHRpb25zT3JEZXN0aW5hdGlvbk9wdGlvbnMpXG4vLyAgLSBzb3VyY2UucGlwZWBjb21tYW5kIGNvbW1hbmRBcmd1bWVudGAgb3Igc291cmNlLnBpcGUocGlwZU9wdGlvbnNPckRlc3RpbmF0aW9uT3B0aW9ucylgY29tbWFuZCBjb21tYW5kQXJndW1lbnRgXG4vLyAgLSBzb3VyY2UucGlwZShleGVjYSguLi4pLCBwaXBlT3B0aW9ucylcbmNvbnN0IGdldERlc3RpbmF0aW9uID0gKGJvdW5kT3B0aW9ucywgY3JlYXRlTmVzdGVkLCBmaXJzdEFyZ3VtZW50LCAuLi5waXBlQXJndW1lbnRzKSA9PiB7XG5cdGlmIChBcnJheS5pc0FycmF5KGZpcnN0QXJndW1lbnQpKSB7XG5cdFx0Y29uc3QgZGVzdGluYXRpb24gPSBjcmVhdGVOZXN0ZWQobWFwRGVzdGluYXRpb25Bcmd1bWVudHMsIGJvdW5kT3B0aW9ucykoZmlyc3RBcmd1bWVudCwgLi4ucGlwZUFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIHtkZXN0aW5hdGlvbiwgcGlwZU9wdGlvbnM6IGJvdW5kT3B0aW9uc307XG5cdH1cblxuXHRpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBVUkwgfHwgaXNEZW5vRXhlY1BhdGgoZmlyc3RBcmd1bWVudCkpIHtcblx0XHRpZiAoT2JqZWN0LmtleXMoYm91bmRPcHRpb25zKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdQbGVhc2UgdXNlIC5waXBlKFwiZmlsZVwiLCAuLi4sIG9wdGlvbnMpIG9yIC5waXBlKGV4ZWNhKFwiZmlsZVwiLCAuLi4sIG9wdGlvbnMpKSBpbnN0ZWFkIG9mIC5waXBlKG9wdGlvbnMpKFwiZmlsZVwiLCAuLi4pLicpO1xuXHRcdH1cblxuXHRcdGNvbnN0IFtyYXdGaWxlLCByYXdBcmd1bWVudHMsIHJhd09wdGlvbnNdID0gbm9ybWFsaXplUGFyYW1ldGVycyhmaXJzdEFyZ3VtZW50LCAuLi5waXBlQXJndW1lbnRzKTtcblx0XHRjb25zdCBkZXN0aW5hdGlvbiA9IGNyZWF0ZU5lc3RlZChtYXBEZXN0aW5hdGlvbkFyZ3VtZW50cykocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKTtcblx0XHRyZXR1cm4ge2Rlc3RpbmF0aW9uLCBwaXBlT3B0aW9uczogcmF3T3B0aW9uc307XG5cdH1cblxuXHRpZiAoU1VCUFJPQ0VTU19PUFRJT05TLmhhcyhmaXJzdEFyZ3VtZW50KSkge1xuXHRcdGlmIChPYmplY3Qua2V5cyhib3VuZE9wdGlvbnMpLmxlbmd0aCA+IDApIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1BsZWFzZSB1c2UgLnBpcGUob3B0aW9ucylgY29tbWFuZGAgb3IgLnBpcGUoJChvcHRpb25zKWBjb21tYW5kYCkgaW5zdGVhZCBvZiAucGlwZShvcHRpb25zKSgkYGNvbW1hbmRgKS4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge2Rlc3RpbmF0aW9uOiBmaXJzdEFyZ3VtZW50LCBwaXBlT3B0aW9uczogcGlwZUFyZ3VtZW50c1swXX07XG5cdH1cblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHRlbXBsYXRlIHN0cmluZywgYW4gb3B0aW9ucyBvYmplY3QsIG9yIGFuIEV4ZWNhIHN1YnByb2Nlc3M6ICR7Zmlyc3RBcmd1bWVudH1gKTtcbn07XG5cbi8vIEZvcmNlIGBzdGRpbjogJ3BpcGUnYCB3aXRoIHRoZSBkZXN0aW5hdGlvbiBzdWJwcm9jZXNzXG5jb25zdCBtYXBEZXN0aW5hdGlvbkFyZ3VtZW50cyA9ICh7b3B0aW9uc30pID0+ICh7b3B0aW9uczogey4uLm9wdGlvbnMsIHN0ZGluOiAncGlwZScsIHBpcGVkOiB0cnVlfX0pO1xuXG5jb25zdCBnZXRTb3VyY2VTdHJlYW0gPSAoc291cmNlLCBmcm9tKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgc291cmNlU3RyZWFtID0gZ2V0RnJvbVN0cmVhbShzb3VyY2UsIGZyb20pO1xuXHRcdHJldHVybiB7c291cmNlU3RyZWFtfTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4ge3NvdXJjZUVycm9yOiBlcnJvcn07XG5cdH1cbn07XG4iLCAiaW1wb3J0IHttYWtlRWFybHlFcnJvcn0gZnJvbSAnLi4vcmV0dXJuL3Jlc3VsdC5qcyc7XG5pbXBvcnQge2Fib3J0U291cmNlU3RyZWFtLCBlbmREZXN0aW5hdGlvblN0cmVhbX0gZnJvbSAnLi4vaW8vcGlwZWxpbmUuanMnO1xuXG4vLyBXaGVuIHBhc3NpbmcgaW52YWxpZCBhcmd1bWVudHMgdG8gYHNvdXJjZS5waXBlKClgLCB0aHJvdyBhc3luY2hyb25vdXNseS5cbi8vIFdlIGFsc28gYWJvcnQgYm90aCBzdWJwcm9jZXNzZXMuXG5leHBvcnQgY29uc3QgaGFuZGxlUGlwZUFyZ3VtZW50c0Vycm9yID0gKHtcblx0c291cmNlU3RyZWFtLFxuXHRzb3VyY2VFcnJvcixcblx0ZGVzdGluYXRpb25TdHJlYW0sXG5cdGRlc3RpbmF0aW9uRXJyb3IsXG5cdGZpbGVEZXNjcmlwdG9ycyxcblx0c291cmNlT3B0aW9ucyxcblx0c3RhcnRUaW1lLFxufSkgPT4ge1xuXHRjb25zdCBlcnJvciA9IGdldFBpcGVBcmd1bWVudHNFcnJvcih7XG5cdFx0c291cmNlU3RyZWFtLFxuXHRcdHNvdXJjZUVycm9yLFxuXHRcdGRlc3RpbmF0aW9uU3RyZWFtLFxuXHRcdGRlc3RpbmF0aW9uRXJyb3IsXG5cdH0pO1xuXHRpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IGNyZWF0ZU5vbkNvbW1hbmRFcnJvcih7XG5cdFx0XHRlcnJvcixcblx0XHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRcdHNvdXJjZU9wdGlvbnMsXG5cdFx0XHRzdGFydFRpbWUsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IGdldFBpcGVBcmd1bWVudHNFcnJvciA9ICh7c291cmNlU3RyZWFtLCBzb3VyY2VFcnJvciwgZGVzdGluYXRpb25TdHJlYW0sIGRlc3RpbmF0aW9uRXJyb3J9KSA9PiB7XG5cdGlmIChzb3VyY2VFcnJvciAhPT0gdW5kZWZpbmVkICYmIGRlc3RpbmF0aW9uRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBkZXN0aW5hdGlvbkVycm9yO1xuXHR9XG5cblx0aWYgKGRlc3RpbmF0aW9uRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdGFib3J0U291cmNlU3RyZWFtKHNvdXJjZVN0cmVhbSk7XG5cdFx0cmV0dXJuIGRlc3RpbmF0aW9uRXJyb3I7XG5cdH1cblxuXHRpZiAoc291cmNlRXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdGVuZERlc3RpbmF0aW9uU3RyZWFtKGRlc3RpbmF0aW9uU3RyZWFtKTtcblx0XHRyZXR1cm4gc291cmNlRXJyb3I7XG5cdH1cbn07XG5cbi8vIFNwZWNpZmljIGVycm9yIHJldHVybiB2YWx1ZSB3aGVuIHBhc3NpbmcgaW52YWxpZCBhcmd1bWVudHMgdG8gYHN1YnByb2Nlc3MucGlwZSgpYCBvciB3aGVuIHVzaW5nIGB1bnBpcGVTaWduYWxgXG5leHBvcnQgY29uc3QgY3JlYXRlTm9uQ29tbWFuZEVycm9yID0gKHtlcnJvciwgZmlsZURlc2NyaXB0b3JzLCBzb3VyY2VPcHRpb25zLCBzdGFydFRpbWV9KSA9PiBtYWtlRWFybHlFcnJvcih7XG5cdGVycm9yLFxuXHRjb21tYW5kOiBQSVBFX0NPTU1BTkRfTUVTU0FHRSxcblx0ZXNjYXBlZENvbW1hbmQ6IFBJUEVfQ09NTUFORF9NRVNTQUdFLFxuXHRmaWxlRGVzY3JpcHRvcnMsXG5cdG9wdGlvbnM6IHNvdXJjZU9wdGlvbnMsXG5cdHN0YXJ0VGltZSxcblx0aXNTeW5jOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBQSVBFX0NPTU1BTkRfTUVTU0FHRSA9ICdzb3VyY2UucGlwZShkZXN0aW5hdGlvbiknO1xuIiwgIi8vIExpa2UgQmFzaCwgd2UgYXdhaXQgYm90aCBzdWJwcm9jZXNzZXMuIFRoaXMgaXMgdW5saWtlIHNvbWUgb3RoZXIgc2hlbGxzIHdoaWNoIG9ubHkgYXdhaXQgdGhlIGRlc3RpbmF0aW9uIHN1YnByb2Nlc3MuXG4vLyBMaWtlIEJhc2ggd2l0aCB0aGUgYHBpcGVmYWlsYCBvcHRpb24sIGlmIGVpdGhlciBzdWJwcm9jZXNzIGZhaWxzLCB0aGUgd2hvbGUgcGlwZSBmYWlscy5cbi8vIExpa2UgQmFzaCwgaWYgYm90aCBzdWJwcm9jZXNzZXMgZmFpbCwgd2UgcmV0dXJuIHRoZSBmYWlsdXJlIG9mIHRoZSBkZXN0aW5hdGlvbi5cbi8vIFRoaXMgZW5zdXJlcyBib3RoIHN1YnByb2Nlc3NlcycgZXJyb3JzIGFyZSBwcmVzZW50LCB1c2luZyBgZXJyb3IucGlwZWRGcm9tYC5cbmV4cG9ydCBjb25zdCB3YWl0Rm9yQm90aFN1YnByb2Nlc3NlcyA9IGFzeW5jIHN1YnByb2Nlc3NQcm9taXNlcyA9PiB7XG5cdGNvbnN0IFtcblx0XHR7c3RhdHVzOiBzb3VyY2VTdGF0dXMsIHJlYXNvbjogc291cmNlUmVhc29uLCB2YWx1ZTogc291cmNlUmVzdWx0ID0gc291cmNlUmVhc29ufSxcblx0XHR7c3RhdHVzOiBkZXN0aW5hdGlvblN0YXR1cywgcmVhc29uOiBkZXN0aW5hdGlvblJlYXNvbiwgdmFsdWU6IGRlc3RpbmF0aW9uUmVzdWx0ID0gZGVzdGluYXRpb25SZWFzb259LFxuXHRdID0gYXdhaXQgc3VicHJvY2Vzc1Byb21pc2VzO1xuXG5cdGlmICghZGVzdGluYXRpb25SZXN1bHQucGlwZWRGcm9tLmluY2x1ZGVzKHNvdXJjZVJlc3VsdCkpIHtcblx0XHRkZXN0aW5hdGlvblJlc3VsdC5waXBlZEZyb20ucHVzaChzb3VyY2VSZXN1bHQpO1xuXHR9XG5cblx0aWYgKGRlc3RpbmF0aW9uU3RhdHVzID09PSAncmVqZWN0ZWQnKSB7XG5cdFx0dGhyb3cgZGVzdGluYXRpb25SZXN1bHQ7XG5cdH1cblxuXHRpZiAoc291cmNlU3RhdHVzID09PSAncmVqZWN0ZWQnKSB7XG5cdFx0dGhyb3cgc291cmNlUmVzdWx0O1xuXHR9XG5cblx0cmV0dXJuIGRlc3RpbmF0aW9uUmVzdWx0O1xufTtcbiIsICJpbXBvcnQge2ZpbmlzaGVkfSBmcm9tICdub2RlOnN0cmVhbS9wcm9taXNlcyc7XG5pbXBvcnQgbWVyZ2VTdHJlYW1zIGZyb20gJ0BzaW5kcmVzb3JodXMvbWVyZ2Utc3RyZWFtcyc7XG5pbXBvcnQge2luY3JlbWVudE1heExpc3RlbmVyc30gZnJvbSAnLi4vdXRpbHMvbWF4LWxpc3RlbmVycy5qcyc7XG5pbXBvcnQge3BpcGVTdHJlYW1zfSBmcm9tICcuLi9pby9waXBlbGluZS5qcyc7XG5cbi8vIFRoZSBwaXBpbmcgYmVoYXZpb3IgaXMgbGlrZSBCYXNoLlxuLy8gSW4gcGFydGljdWxhciwgd2hlbiBvbmUgc3VicHJvY2VzcyBleGl0cywgdGhlIG90aGVyIGlzIG5vdCB0ZXJtaW5hdGVkIGJ5IGEgc2lnbmFsLlxuLy8gSW5zdGVhZCwgaXRzIHN0ZG91dCAoZm9yIHRoZSBzb3VyY2UpIG9yIHN0ZGluIChmb3IgdGhlIGRlc3RpbmF0aW9uKSBjbG9zZXMuXG4vLyBJZiB0aGUgc3VicHJvY2VzcyB1c2VzIGl0LCBpdCB3aWxsIG1ha2UgaXQgZXJyb3Igd2l0aCBTSUdQSVBFIG9yIEVQSVBFIChmb3IgdGhlIHNvdXJjZSkgb3IgZW5kIChmb3IgdGhlIGRlc3RpbmF0aW9uKS5cbi8vIElmIGl0IGRvZXMgbm90IHVzZSBpdCwgaXQgd2lsbCBjb250aW51ZSBydW5uaW5nLlxuLy8gVGhpcyBhbGxvd3MgZm9yIHN1YnByb2Nlc3NlcyB0byBncmFjZWZ1bGx5IGV4aXQgYW5kIGxvd2VyIHRoZSBjb3VwbGluZyBiZXR3ZWVuIHN1YnByb2Nlc3Nlcy5cbmV4cG9ydCBjb25zdCBwaXBlU3VicHJvY2Vzc1N0cmVhbSA9IChzb3VyY2VTdHJlYW0sIGRlc3RpbmF0aW9uU3RyZWFtLCBtYXhMaXN0ZW5lcnNDb250cm9sbGVyKSA9PiB7XG5cdGNvbnN0IG1lcmdlZFN0cmVhbSA9IE1FUkdFRF9TVFJFQU1TLmhhcyhkZXN0aW5hdGlvblN0cmVhbSlcblx0XHQ/IHBpcGVNb3JlU3VicHJvY2Vzc1N0cmVhbShzb3VyY2VTdHJlYW0sIGRlc3RpbmF0aW9uU3RyZWFtKVxuXHRcdDogcGlwZUZpcnN0U3VicHJvY2Vzc1N0cmVhbShzb3VyY2VTdHJlYW0sIGRlc3RpbmF0aW9uU3RyZWFtKTtcblx0aW5jcmVtZW50TWF4TGlzdGVuZXJzKHNvdXJjZVN0cmVhbSwgU09VUkNFX0xJU1RFTkVSU19QRVJfUElQRSwgbWF4TGlzdGVuZXJzQ29udHJvbGxlci5zaWduYWwpO1xuXHRpbmNyZW1lbnRNYXhMaXN0ZW5lcnMoZGVzdGluYXRpb25TdHJlYW0sIERFU1RJTkFUSU9OX0xJU1RFTkVSU19QRVJfUElQRSwgbWF4TGlzdGVuZXJzQ29udHJvbGxlci5zaWduYWwpO1xuXHRjbGVhbnVwTWVyZ2VkU3RyZWFtc01hcChkZXN0aW5hdGlvblN0cmVhbSk7XG5cdHJldHVybiBtZXJnZWRTdHJlYW07XG59O1xuXG4vLyBXZSB1c2UgYG1lcmdlLXN0cmVhbXNgIHRvIGFsbG93IGZvciBtdWx0aXBsZSBzb3VyY2VzIHRvIHBpcGUgdG8gdGhlIHNhbWUgZGVzdGluYXRpb24uXG5jb25zdCBwaXBlRmlyc3RTdWJwcm9jZXNzU3RyZWFtID0gKHNvdXJjZVN0cmVhbSwgZGVzdGluYXRpb25TdHJlYW0pID0+IHtcblx0Y29uc3QgbWVyZ2VkU3RyZWFtID0gbWVyZ2VTdHJlYW1zKFtzb3VyY2VTdHJlYW1dKTtcblx0cGlwZVN0cmVhbXMobWVyZ2VkU3RyZWFtLCBkZXN0aW5hdGlvblN0cmVhbSk7XG5cdE1FUkdFRF9TVFJFQU1TLnNldChkZXN0aW5hdGlvblN0cmVhbSwgbWVyZ2VkU3RyZWFtKTtcblx0cmV0dXJuIG1lcmdlZFN0cmVhbTtcbn07XG5cbmNvbnN0IHBpcGVNb3JlU3VicHJvY2Vzc1N0cmVhbSA9IChzb3VyY2VTdHJlYW0sIGRlc3RpbmF0aW9uU3RyZWFtKSA9PiB7XG5cdGNvbnN0IG1lcmdlZFN0cmVhbSA9IE1FUkdFRF9TVFJFQU1TLmdldChkZXN0aW5hdGlvblN0cmVhbSk7XG5cdG1lcmdlZFN0cmVhbS5hZGQoc291cmNlU3RyZWFtKTtcblx0cmV0dXJuIG1lcmdlZFN0cmVhbTtcbn07XG5cbmNvbnN0IGNsZWFudXBNZXJnZWRTdHJlYW1zTWFwID0gYXN5bmMgZGVzdGluYXRpb25TdHJlYW0gPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGZpbmlzaGVkKGRlc3RpbmF0aW9uU3RyZWFtLCB7Y2xlYW51cDogdHJ1ZSwgcmVhZGFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZX0pO1xuXHR9IGNhdGNoIHt9XG5cblx0TUVSR0VEX1NUUkVBTVMuZGVsZXRlKGRlc3RpbmF0aW9uU3RyZWFtKTtcbn07XG5cbmNvbnN0IE1FUkdFRF9TVFJFQU1TID0gbmV3IFdlYWtNYXAoKTtcblxuLy8gTnVtYmVyIG9mIGxpc3RlbmVycyBzZXQgdXAgb24gYHNvdXJjZVN0cmVhbWAgYnkgZWFjaCBgc291cmNlU3RyZWFtLnBpcGUoZGVzdGluYXRpb25TdHJlYW0pYFxuLy8gVGhvc2UgYXJlIGFkZGVkIGJ5IGBtZXJnZS1zdHJlYW1zYFxuY29uc3QgU09VUkNFX0xJU1RFTkVSU19QRVJfUElQRSA9IDI7XG4vLyBOdW1iZXIgb2YgbGlzdGVuZXJzIHNldCB1cCBvbiBgZGVzdGluYXRpb25TdHJlYW1gIGJ5IGVhY2ggYHNvdXJjZVN0cmVhbS5waXBlKGRlc3RpbmF0aW9uU3RyZWFtKWBcbi8vIFRob3NlIGFyZSBhZGRlZCBieSBgZmluaXNoZWQoKWAgaW4gYGNsZWFudXBNZXJnZWRTdHJlYW1zTWFwKClgXG5jb25zdCBERVNUSU5BVElPTl9MSVNURU5FUlNfUEVSX1BJUEUgPSAxO1xuIiwgImltcG9ydCB7YWJvcnRlZH0gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCB7Y3JlYXRlTm9uQ29tbWFuZEVycm9yfSBmcm9tICcuL3Rocm93LmpzJztcblxuLy8gV2hlbiBwYXNzaW5nIGFuIGB1bnBpcGVTaWduYWxgIG9wdGlvbiwgYWJvcnQgcGlwaW5nIHdoZW4gdGhlIHNpZ25hbCBpcyBhYm9ydGVkLlxuLy8gSG93ZXZlciwgZG8gbm90IHRlcm1pbmF0ZSB0aGUgc3VicHJvY2Vzc2VzLlxuZXhwb3J0IGNvbnN0IHVucGlwZU9uQWJvcnQgPSAodW5waXBlU2lnbmFsLCB1bnBpcGVDb250ZXh0KSA9PiB1bnBpcGVTaWduYWwgPT09IHVuZGVmaW5lZFxuXHQ/IFtdXG5cdDogW3VucGlwZU9uU2lnbmFsQWJvcnQodW5waXBlU2lnbmFsLCB1bnBpcGVDb250ZXh0KV07XG5cbmNvbnN0IHVucGlwZU9uU2lnbmFsQWJvcnQgPSBhc3luYyAodW5waXBlU2lnbmFsLCB7c291cmNlU3RyZWFtLCBtZXJnZWRTdHJlYW0sIGZpbGVEZXNjcmlwdG9ycywgc291cmNlT3B0aW9ucywgc3RhcnRUaW1lfSkgPT4ge1xuXHRhd2FpdCBhYm9ydGVkKHVucGlwZVNpZ25hbCwgc291cmNlU3RyZWFtKTtcblx0YXdhaXQgbWVyZ2VkU3RyZWFtLnJlbW92ZShzb3VyY2VTdHJlYW0pO1xuXHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcignUGlwZSBjYW5jZWxlZCBieSBgdW5waXBlU2lnbmFsYCBvcHRpb24uJyk7XG5cdHRocm93IGNyZWF0ZU5vbkNvbW1hbmRFcnJvcih7XG5cdFx0ZXJyb3IsXG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdHNvdXJjZU9wdGlvbnMsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnaXMtcGxhaW4tb2JqJztcbmltcG9ydCB7bm9ybWFsaXplUGlwZUFyZ3VtZW50c30gZnJvbSAnLi9waXBlLWFyZ3VtZW50cy5qcyc7XG5pbXBvcnQge2hhbmRsZVBpcGVBcmd1bWVudHNFcnJvcn0gZnJvbSAnLi90aHJvdy5qcyc7XG5pbXBvcnQge3dhaXRGb3JCb3RoU3VicHJvY2Vzc2VzfSBmcm9tICcuL3NlcXVlbmNlLmpzJztcbmltcG9ydCB7cGlwZVN1YnByb2Nlc3NTdHJlYW19IGZyb20gJy4vc3RyZWFtaW5nLmpzJztcbmltcG9ydCB7dW5waXBlT25BYm9ydH0gZnJvbSAnLi9hYm9ydC5qcyc7XG5cbi8vIFBpcGUgYSBzdWJwcm9jZXNzJyBgc3Rkb3V0YC9gc3RkZXJyYC9gc3RkaW9gIGludG8gYW5vdGhlciBzdWJwcm9jZXNzJyBgc3RkaW5gXG5leHBvcnQgY29uc3QgcGlwZVRvU3VicHJvY2VzcyA9IChzb3VyY2VJbmZvLCAuLi5waXBlQXJndW1lbnRzKSA9PiB7XG5cdGlmIChpc1BsYWluT2JqZWN0KHBpcGVBcmd1bWVudHNbMF0pKSB7XG5cdFx0cmV0dXJuIHBpcGVUb1N1YnByb2Nlc3MuYmluZCh1bmRlZmluZWQsIHtcblx0XHRcdC4uLnNvdXJjZUluZm8sXG5cdFx0XHRib3VuZE9wdGlvbnM6IHsuLi5zb3VyY2VJbmZvLmJvdW5kT3B0aW9ucywgLi4ucGlwZUFyZ3VtZW50c1swXX0sXG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCB7ZGVzdGluYXRpb24sIC4uLm5vcm1hbGl6ZWRJbmZvfSA9IG5vcm1hbGl6ZVBpcGVBcmd1bWVudHMoc291cmNlSW5mbywgLi4ucGlwZUFyZ3VtZW50cyk7XG5cdGNvbnN0IHByb21pc2UgPSBoYW5kbGVQaXBlUHJvbWlzZSh7Li4ubm9ybWFsaXplZEluZm8sIGRlc3RpbmF0aW9ufSk7XG5cdHByb21pc2UucGlwZSA9IHBpcGVUb1N1YnByb2Nlc3MuYmluZCh1bmRlZmluZWQsIHtcblx0XHQuLi5zb3VyY2VJbmZvLFxuXHRcdHNvdXJjZTogZGVzdGluYXRpb24sXG5cdFx0c291cmNlUHJvbWlzZTogcHJvbWlzZSxcblx0XHRib3VuZE9wdGlvbnM6IHt9LFxuXHR9KTtcblx0cmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBBc3luY2hyb25vdXMgbG9naWMgd2hlbiBwaXBpbmcgc3VicHJvY2Vzc2VzXG5jb25zdCBoYW5kbGVQaXBlUHJvbWlzZSA9IGFzeW5jICh7XG5cdHNvdXJjZVByb21pc2UsXG5cdHNvdXJjZVN0cmVhbSxcblx0c291cmNlT3B0aW9ucyxcblx0c291cmNlRXJyb3IsXG5cdGRlc3RpbmF0aW9uLFxuXHRkZXN0aW5hdGlvblN0cmVhbSxcblx0ZGVzdGluYXRpb25FcnJvcixcblx0dW5waXBlU2lnbmFsLFxuXHRmaWxlRGVzY3JpcHRvcnMsXG5cdHN0YXJ0VGltZSxcbn0pID0+IHtcblx0Y29uc3Qgc3VicHJvY2Vzc1Byb21pc2VzID0gZ2V0U3VicHJvY2Vzc1Byb21pc2VzKHNvdXJjZVByb21pc2UsIGRlc3RpbmF0aW9uKTtcblx0aGFuZGxlUGlwZUFyZ3VtZW50c0Vycm9yKHtcblx0XHRzb3VyY2VTdHJlYW0sXG5cdFx0c291cmNlRXJyb3IsXG5cdFx0ZGVzdGluYXRpb25TdHJlYW0sXG5cdFx0ZGVzdGluYXRpb25FcnJvcixcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0c291cmNlT3B0aW9ucyxcblx0XHRzdGFydFRpbWUsXG5cdH0pO1xuXHRjb25zdCBtYXhMaXN0ZW5lcnNDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHR0cnkge1xuXHRcdGNvbnN0IG1lcmdlZFN0cmVhbSA9IHBpcGVTdWJwcm9jZXNzU3RyZWFtKHNvdXJjZVN0cmVhbSwgZGVzdGluYXRpb25TdHJlYW0sIG1heExpc3RlbmVyc0NvbnRyb2xsZXIpO1xuXHRcdHJldHVybiBhd2FpdCBQcm9taXNlLnJhY2UoW1xuXHRcdFx0d2FpdEZvckJvdGhTdWJwcm9jZXNzZXMoc3VicHJvY2Vzc1Byb21pc2VzKSxcblx0XHRcdC4uLnVucGlwZU9uQWJvcnQodW5waXBlU2lnbmFsLCB7XG5cdFx0XHRcdHNvdXJjZVN0cmVhbSxcblx0XHRcdFx0bWVyZ2VkU3RyZWFtLFxuXHRcdFx0XHRzb3VyY2VPcHRpb25zLFxuXHRcdFx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0XHRcdHN0YXJ0VGltZSxcblx0XHRcdH0pLFxuXHRcdF0pO1xuXHR9IGZpbmFsbHkge1xuXHRcdG1heExpc3RlbmVyc0NvbnRyb2xsZXIuYWJvcnQoKTtcblx0fVxufTtcblxuLy8gYC5waXBlKClgIGF3YWl0cyB0aGUgc3VicHJvY2VzcyBwcm9taXNlcy5cbi8vIFdoZW4gaW52YWxpZCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0byBgLnBpcGUoKWAsIHdlIHRocm93IGFuIGVycm9yLCB3aGljaCBwcmV2ZW50cyBhd2FpdGluZyB0aGVtLlxuLy8gV2UgbmVlZCB0byBlbnN1cmUgdGhpcyBkb2VzIG5vdCBjcmVhdGUgdW5oYW5kbGVkIHJlamVjdGlvbnMuXG5jb25zdCBnZXRTdWJwcm9jZXNzUHJvbWlzZXMgPSAoc291cmNlUHJvbWlzZSwgZGVzdGluYXRpb24pID0+IFByb21pc2UuYWxsU2V0dGxlZChbc291cmNlUHJvbWlzZSwgZGVzdGluYXRpb25dKTtcbiIsICJpbXBvcnQge29ufSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge2dldERlZmF1bHRIaWdoV2F0ZXJNYXJrfSBmcm9tICdub2RlOnN0cmVhbSc7XG5pbXBvcnQge2dldEVuY29kaW5nVHJhbnNmb3JtR2VuZXJhdG9yfSBmcm9tICcuLi90cmFuc2Zvcm0vZW5jb2RpbmctdHJhbnNmb3JtLmpzJztcbmltcG9ydCB7Z2V0U3BsaXRMaW5lc0dlbmVyYXRvcn0gZnJvbSAnLi4vdHJhbnNmb3JtL3NwbGl0LmpzJztcbmltcG9ydCB7dHJhbnNmb3JtQ2h1bmtTeW5jLCBmaW5hbENodW5rc1N5bmN9IGZyb20gJy4uL3RyYW5zZm9ybS9ydW4tc3luYy5qcyc7XG5cbi8vIEl0ZXJhdGUgb3ZlciBsaW5lcyBvZiBgc3VicHJvY2Vzcy5zdGRvdXRgLCB1c2VkIGJ5IGBzdWJwcm9jZXNzLnJlYWRhYmxlfGR1cGxleHxpdGVyYWJsZSgpYFxuZXhwb3J0IGNvbnN0IGl0ZXJhdGVPblN1YnByb2Nlc3NTdHJlYW0gPSAoe3N1YnByb2Nlc3NTdGRvdXQsIHN1YnByb2Nlc3MsIGJpbmFyeSwgc2hvdWxkRW5jb2RlLCBlbmNvZGluZywgcHJlc2VydmVOZXdsaW5lc30pID0+IHtcblx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0c3RvcFJlYWRpbmdPbkV4aXQoc3VicHJvY2VzcywgY29udHJvbGxlcik7XG5cdHJldHVybiBpdGVyYXRlT25TdHJlYW0oe1xuXHRcdHN0cmVhbTogc3VicHJvY2Vzc1N0ZG91dCxcblx0XHRjb250cm9sbGVyLFxuXHRcdGJpbmFyeSxcblx0XHRzaG91bGRFbmNvZGU6ICFzdWJwcm9jZXNzU3Rkb3V0LnJlYWRhYmxlT2JqZWN0TW9kZSAmJiBzaG91bGRFbmNvZGUsXG5cdFx0ZW5jb2RpbmcsXG5cdFx0c2hvdWxkU3BsaXQ6ICFzdWJwcm9jZXNzU3Rkb3V0LnJlYWRhYmxlT2JqZWN0TW9kZSxcblx0XHRwcmVzZXJ2ZU5ld2xpbmVzLFxuXHR9KTtcbn07XG5cbmNvbnN0IHN0b3BSZWFkaW5nT25FeGl0ID0gYXN5bmMgKHN1YnByb2Nlc3MsIGNvbnRyb2xsZXIpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBzdWJwcm9jZXNzO1xuXHR9IGNhdGNoIHt9IGZpbmFsbHkge1xuXHRcdGNvbnRyb2xsZXIuYWJvcnQoKTtcblx0fVxufTtcblxuLy8gSXRlcmF0ZSBvdmVyIGxpbmVzIG9mIGBzdWJwcm9jZXNzLnN0ZG91dGAsIHVzZWQgYnkgYHJlc3VsdC5zdGRvdXRgIGFuZCB0aGUgYHZlcmJvc2U6ICdmdWxsJ2Agb3B0aW9uLlxuLy8gQXBwbGllcyB0aGUgYGxpbmVzYCBhbmQgYGVuY29kaW5nYCBvcHRpb25zLlxuZXhwb3J0IGNvbnN0IGl0ZXJhdGVGb3JSZXN1bHQgPSAoe3N0cmVhbSwgb25TdHJlYW1FbmQsIGxpbmVzLCBlbmNvZGluZywgc3RyaXBGaW5hbE5ld2xpbmUsIGFsbE1peGVkfSkgPT4ge1xuXHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRzdG9wUmVhZGluZ09uU3RyZWFtRW5kKG9uU3RyZWFtRW5kLCBjb250cm9sbGVyLCBzdHJlYW0pO1xuXHRjb25zdCBvYmplY3RNb2RlID0gc3RyZWFtLnJlYWRhYmxlT2JqZWN0TW9kZSAmJiAhYWxsTWl4ZWQ7XG5cdHJldHVybiBpdGVyYXRlT25TdHJlYW0oe1xuXHRcdHN0cmVhbSxcblx0XHRjb250cm9sbGVyLFxuXHRcdGJpbmFyeTogZW5jb2RpbmcgPT09ICdidWZmZXInLFxuXHRcdHNob3VsZEVuY29kZTogIW9iamVjdE1vZGUsXG5cdFx0ZW5jb2RpbmcsXG5cdFx0c2hvdWxkU3BsaXQ6ICFvYmplY3RNb2RlICYmIGxpbmVzLFxuXHRcdHByZXNlcnZlTmV3bGluZXM6ICFzdHJpcEZpbmFsTmV3bGluZSxcblx0fSk7XG59O1xuXG5jb25zdCBzdG9wUmVhZGluZ09uU3RyZWFtRW5kID0gYXN5bmMgKG9uU3RyZWFtRW5kLCBjb250cm9sbGVyLCBzdHJlYW0pID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBvblN0cmVhbUVuZDtcblx0fSBjYXRjaCB7XG5cdFx0c3RyZWFtLmRlc3Ryb3koKTtcblx0fSBmaW5hbGx5IHtcblx0XHRjb250cm9sbGVyLmFib3J0KCk7XG5cdH1cbn07XG5cbmNvbnN0IGl0ZXJhdGVPblN0cmVhbSA9ICh7c3RyZWFtLCBjb250cm9sbGVyLCBiaW5hcnksIHNob3VsZEVuY29kZSwgZW5jb2RpbmcsIHNob3VsZFNwbGl0LCBwcmVzZXJ2ZU5ld2xpbmVzfSkgPT4ge1xuXHRjb25zdCBvblN0ZG91dENodW5rID0gb24oc3RyZWFtLCAnZGF0YScsIHtcblx0XHRzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuXHRcdGhpZ2hXYXRlck1hcms6IEhJR0hfV0FURVJfTUFSSyxcblx0XHQvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggb2xkZXIgbmFtZSBmb3IgdGhpcyBvcHRpb25cblx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL3B1bGwvNTIwODAjZGlzY3Vzc2lvbl9yMTUyNTIyNzg2MVxuXHRcdC8vIEB0b2RvIFJlbW92ZSBhZnRlciByZW1vdmluZyBzdXBwb3J0IGZvciBOb2RlIDIxXG5cdFx0aGlnaFdhdGVybWFyazogSElHSF9XQVRFUl9NQVJLLFxuXHR9KTtcblx0cmV0dXJuIGl0ZXJhdGVPbkRhdGEoe1xuXHRcdG9uU3Rkb3V0Q2h1bmssXG5cdFx0Y29udHJvbGxlcixcblx0XHRiaW5hcnksXG5cdFx0c2hvdWxkRW5jb2RlLFxuXHRcdGVuY29kaW5nLFxuXHRcdHNob3VsZFNwbGl0LFxuXHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfT0JKRUNUX0hJR0hfV0FURVJfTUFSSyA9IGdldERlZmF1bHRIaWdoV2F0ZXJNYXJrKHRydWUpO1xuXG4vLyBUaGUgYGhpZ2hXYXRlck1hcmtgIG9mIGBldmVudHMub24oKWAgaXMgbWVhc3VyZWQgaW4gbnVtYmVyIG9mIGV2ZW50cywgbm90IGluIGJ5dGVzLlxuLy8gTm90IGtub3dpbmcgdGhlIGF2ZXJhZ2UgYW1vdW50IG9mIGJ5dGVzIHBlciBgZGF0YWAgZXZlbnQsIHdlIHVzZSB0aGUgc2FtZSBoZXVyaXN0aWMgYXMgc3RyZWFtcyBpbiBvYmplY3RNb2RlLCBzaW5jZSB0aGV5IGhhdmUgdGhlIHNhbWUgaXNzdWUuXG4vLyBUaGVyZWZvcmUsIHdlIHVzZSB0aGUgdmFsdWUgb2YgYGdldERlZmF1bHRIaWdoV2F0ZXJNYXJrKHRydWUpYC5cbi8vIE5vdGU6IHRoaXMgb3B0aW9uIGRvZXMgbm90IGV4aXN0IG9uIE5vZGUgMTgsIGJ1dCB0aGlzIGlzIG9rIHNpbmNlIHRoZSBsb2dpYyB3b3JrcyB3aXRob3V0IGl0LiBJdCBqdXN0IGNvbnN1bWVzIG1vcmUgbWVtb3J5LlxuY29uc3QgSElHSF9XQVRFUl9NQVJLID0gREVGQVVMVF9PQkpFQ1RfSElHSF9XQVRFUl9NQVJLO1xuXG5jb25zdCBpdGVyYXRlT25EYXRhID0gYXN5bmMgZnVuY3Rpb24gKiAoe29uU3Rkb3V0Q2h1bmssIGNvbnRyb2xsZXIsIGJpbmFyeSwgc2hvdWxkRW5jb2RlLCBlbmNvZGluZywgc2hvdWxkU3BsaXQsIHByZXNlcnZlTmV3bGluZXN9KSB7XG5cdGNvbnN0IGdlbmVyYXRvcnMgPSBnZXRHZW5lcmF0b3JzKHtcblx0XHRiaW5hcnksXG5cdFx0c2hvdWxkRW5jb2RlLFxuXHRcdGVuY29kaW5nLFxuXHRcdHNob3VsZFNwbGl0LFxuXHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdH0pO1xuXG5cdHRyeSB7XG5cdFx0Zm9yIGF3YWl0IChjb25zdCBbY2h1bmtdIG9mIG9uU3Rkb3V0Q2h1bmspIHtcblx0XHRcdHlpZWxkICogdHJhbnNmb3JtQ2h1bmtTeW5jKGNodW5rLCBnZW5lcmF0b3JzLCAwKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKCFjb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0eWllbGQgKiBmaW5hbENodW5rc1N5bmMoZ2VuZXJhdG9ycyk7XG5cdH1cbn07XG5cbmNvbnN0IGdldEdlbmVyYXRvcnMgPSAoe2JpbmFyeSwgc2hvdWxkRW5jb2RlLCBlbmNvZGluZywgc2hvdWxkU3BsaXQsIHByZXNlcnZlTmV3bGluZXN9KSA9PiBbXG5cdGdldEVuY29kaW5nVHJhbnNmb3JtR2VuZXJhdG9yKGJpbmFyeSwgZW5jb2RpbmcsICFzaG91bGRFbmNvZGUpLFxuXHRnZXRTcGxpdExpbmVzR2VuZXJhdG9yKGJpbmFyeSwgcHJlc2VydmVOZXdsaW5lcywgIXNob3VsZFNwbGl0LCB7fSksXG5dLmZpbHRlcihCb29sZWFuKTtcbiIsICJpbXBvcnQge3NldEltbWVkaWF0ZX0gZnJvbSAnbm9kZTp0aW1lcnMvcHJvbWlzZXMnO1xuaW1wb3J0IGdldFN0cmVhbSwge2dldFN0cmVhbUFzQXJyYXlCdWZmZXIsIGdldFN0cmVhbUFzQXJyYXl9IGZyb20gJ2dldC1zdHJlYW0nO1xuaW1wb3J0IHtpc0FycmF5QnVmZmVyfSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcbmltcG9ydCB7c2hvdWxkTG9nT3V0cHV0LCBsb2dMaW5lc30gZnJvbSAnLi4vdmVyYm9zZS9vdXRwdXQuanMnO1xuaW1wb3J0IHtpdGVyYXRlRm9yUmVzdWx0fSBmcm9tICcuL2l0ZXJhdGUuanMnO1xuaW1wb3J0IHtoYW5kbGVNYXhCdWZmZXJ9IGZyb20gJy4vbWF4LWJ1ZmZlci5qcyc7XG5pbXBvcnQge2dldFN0cmlwRmluYWxOZXdsaW5lfSBmcm9tICcuL3N0cmlwLW5ld2xpbmUuanMnO1xuXG4vLyBSZXRyaWV2ZSBgcmVzdWx0LnN0ZG91dHxzdGRlcnJ8YWxsfHN0ZGlvWypdYFxuZXhwb3J0IGNvbnN0IGdldFN0cmVhbU91dHB1dCA9IGFzeW5jICh7c3RyZWFtLCBvblN0cmVhbUVuZCwgZmROdW1iZXIsIGVuY29kaW5nLCBidWZmZXIsIG1heEJ1ZmZlciwgbGluZXMsIGFsbE1peGVkLCBzdHJpcEZpbmFsTmV3bGluZSwgdmVyYm9zZUluZm8sIHN0cmVhbUluZm99KSA9PiB7XG5cdGNvbnN0IGxvZ1Byb21pc2UgPSBsb2dPdXRwdXRBc3luYyh7XG5cdFx0c3RyZWFtLFxuXHRcdG9uU3RyZWFtRW5kLFxuXHRcdGZkTnVtYmVyLFxuXHRcdGVuY29kaW5nLFxuXHRcdGFsbE1peGVkLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHRcdHN0cmVhbUluZm8sXG5cdH0pO1xuXG5cdGlmICghYnVmZmVyKSB7XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwoW3Jlc3VtZVN0cmVhbShzdHJlYW0pLCBsb2dQcm9taXNlXSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc3RyaXBGaW5hbE5ld2xpbmVWYWx1ZSA9IGdldFN0cmlwRmluYWxOZXdsaW5lKHN0cmlwRmluYWxOZXdsaW5lLCBmZE51bWJlcik7XG5cdGNvbnN0IGl0ZXJhYmxlID0gaXRlcmF0ZUZvclJlc3VsdCh7XG5cdFx0c3RyZWFtLFxuXHRcdG9uU3RyZWFtRW5kLFxuXHRcdGxpbmVzLFxuXHRcdGVuY29kaW5nLFxuXHRcdHN0cmlwRmluYWxOZXdsaW5lOiBzdHJpcEZpbmFsTmV3bGluZVZhbHVlLFxuXHRcdGFsbE1peGVkLFxuXHR9KTtcblx0Y29uc3QgW291dHB1dF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG5cdFx0Z2V0U3RyZWFtQ29udGVudHMoe1xuXHRcdFx0c3RyZWFtLFxuXHRcdFx0aXRlcmFibGUsXG5cdFx0XHRmZE51bWJlcixcblx0XHRcdGVuY29kaW5nLFxuXHRcdFx0bWF4QnVmZmVyLFxuXHRcdFx0bGluZXMsXG5cdFx0fSksXG5cdFx0bG9nUHJvbWlzZSxcblx0XSk7XG5cdHJldHVybiBvdXRwdXQ7XG59O1xuXG5jb25zdCBsb2dPdXRwdXRBc3luYyA9IGFzeW5jICh7c3RyZWFtLCBvblN0cmVhbUVuZCwgZmROdW1iZXIsIGVuY29kaW5nLCBhbGxNaXhlZCwgdmVyYm9zZUluZm8sIHN0cmVhbUluZm86IHtmaWxlRGVzY3JpcHRvcnN9fSkgPT4ge1xuXHRpZiAoIXNob3VsZExvZ091dHB1dCh7XG5cdFx0c3RkaW9JdGVtczogZmlsZURlc2NyaXB0b3JzW2ZkTnVtYmVyXT8uc3RkaW9JdGVtcyxcblx0XHRlbmNvZGluZyxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRmZE51bWJlcixcblx0fSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsaW5lc0l0ZXJhYmxlID0gaXRlcmF0ZUZvclJlc3VsdCh7XG5cdFx0c3RyZWFtLFxuXHRcdG9uU3RyZWFtRW5kLFxuXHRcdGxpbmVzOiB0cnVlLFxuXHRcdGVuY29kaW5nLFxuXHRcdHN0cmlwRmluYWxOZXdsaW5lOiB0cnVlLFxuXHRcdGFsbE1peGVkLFxuXHR9KTtcblx0YXdhaXQgbG9nTGluZXMobGluZXNJdGVyYWJsZSwgc3RyZWFtLCBmZE51bWJlciwgdmVyYm9zZUluZm8pO1xufTtcblxuLy8gV2hlbiB1c2luZyBgYnVmZmVyOiBmYWxzZWAsIHVzZXJzIG5lZWQgdG8gcmVhZCBgc3VicHJvY2Vzcy5zdGRvdXR8c3RkZXJyfGFsbGAgcmlnaHQgYXdheVxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvZXhlY2EvaXNzdWVzLzczMCBhbmQgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9leGVjYS9wdWxsLzcyOSNkaXNjdXNzaW9uX3IxNDY1NDk2MzEwXG5jb25zdCByZXN1bWVTdHJlYW0gPSBhc3luYyBzdHJlYW0gPT4ge1xuXHRhd2FpdCBzZXRJbW1lZGlhdGUoKTtcblx0aWYgKHN0cmVhbS5yZWFkYWJsZUZsb3dpbmcgPT09IG51bGwpIHtcblx0XHRzdHJlYW0ucmVzdW1lKCk7XG5cdH1cbn07XG5cbmNvbnN0IGdldFN0cmVhbUNvbnRlbnRzID0gYXN5bmMgKHtzdHJlYW0sIHN0cmVhbToge3JlYWRhYmxlT2JqZWN0TW9kZX0sIGl0ZXJhYmxlLCBmZE51bWJlciwgZW5jb2RpbmcsIG1heEJ1ZmZlciwgbGluZXN9KSA9PiB7XG5cdHRyeSB7XG5cdFx0aWYgKHJlYWRhYmxlT2JqZWN0TW9kZSB8fCBsaW5lcykge1xuXHRcdFx0cmV0dXJuIGF3YWl0IGdldFN0cmVhbUFzQXJyYXkoaXRlcmFibGUsIHttYXhCdWZmZXJ9KTtcblx0XHR9XG5cblx0XHRpZiAoZW5jb2RpbmcgPT09ICdidWZmZXInKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgZ2V0U3RyZWFtQXNBcnJheUJ1ZmZlcihpdGVyYWJsZSwge21heEJ1ZmZlcn0pKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXdhaXQgZ2V0U3RyZWFtKGl0ZXJhYmxlLCB7bWF4QnVmZmVyfSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuIGhhbmRsZUJ1ZmZlcmVkRGF0YShoYW5kbGVNYXhCdWZmZXIoe1xuXHRcdFx0ZXJyb3IsXG5cdFx0XHRzdHJlYW0sXG5cdFx0XHRyZWFkYWJsZU9iamVjdE1vZGUsXG5cdFx0XHRsaW5lcyxcblx0XHRcdGVuY29kaW5nLFxuXHRcdFx0ZmROdW1iZXIsXG5cdFx0fSkpO1xuXHR9XG59O1xuXG4vLyBPbiBmYWlsdXJlLCBgcmVzdWx0LnN0ZG91dHxzdGRlcnJ8YWxsYCBzaG91bGQgY29udGFpbiB0aGUgY3VycmVudGx5IGJ1ZmZlcmVkIHN0cmVhbVxuLy8gVGhleSBhcmUgYXV0b21hdGljYWxseSBjbG9zZWQgYW5kIGZsdXNoZWQgYnkgTm9kZS5qcyB3aGVuIHRoZSBzdWJwcm9jZXNzIGV4aXRzXG4vLyBXaGVuIGBidWZmZXJgIGlzIGBmYWxzZWAsIGBzdHJlYW1Qcm9taXNlYCBpcyBgdW5kZWZpbmVkYCBhbmQgdGhlcmUgaXMgbm8gYnVmZmVyZWQgZGF0YSB0byByZXRyaWV2ZVxuZXhwb3J0IGNvbnN0IGdldEJ1ZmZlcmVkRGF0YSA9IGFzeW5jIHN0cmVhbVByb21pc2UgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBzdHJlYW1Qcm9taXNlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBoYW5kbGVCdWZmZXJlZERhdGEoZXJyb3IpO1xuXHR9XG59O1xuXG4vLyBFbnN1cmUgd2UgYXJlIHJldHVybmluZyBVaW50OEFycmF5cyB3aGVuIHVzaW5nIGBlbmNvZGluZzogJ2J1ZmZlcidgXG5jb25zdCBoYW5kbGVCdWZmZXJlZERhdGEgPSAoe2J1ZmZlcmVkRGF0YX0pID0+IGlzQXJyYXlCdWZmZXIoYnVmZmVyZWREYXRhKVxuXHQ/IG5ldyBVaW50OEFycmF5KGJ1ZmZlcmVkRGF0YSlcblx0OiBidWZmZXJlZERhdGE7XG4iLCAiaW1wb3J0IHtmaW5pc2hlZH0gZnJvbSAnbm9kZTpzdHJlYW0vcHJvbWlzZXMnO1xuXG4vLyBXcmFwcyBgZmluaXNoZWQoc3RyZWFtKWAgdG8gaGFuZGxlIHRoZSBmb2xsb3dpbmcgY2FzZTpcbi8vICAtIFdoZW4gdGhlIHN1YnByb2Nlc3MgZXhpdHMsIE5vZGUuanMgYXV0b21hdGljYWxseSBjYWxscyBgc3VicHJvY2Vzcy5zdGRpbi5kZXN0cm95KClgLCB3aGljaCB3ZSBuZWVkIHRvIGlnbm9yZS5cbi8vICAtIEhvd2V2ZXIsIHdlIHN0aWxsIG5lZWQgdG8gdGhyb3cgaWYgYHN1YnByb2Nlc3Muc3RkaW4uZGVzdHJveSgpYCBpcyBjYWxsZWQgYmVmb3JlIHN1YnByb2Nlc3MgZXhpdC5cbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3RyZWFtID0gYXN5bmMgKHN0cmVhbSwgZmROdW1iZXIsIHN0cmVhbUluZm8sIHtpc1NhbWVEaXJlY3Rpb24sIHN0b3BPbkV4aXQgPSBmYWxzZX0gPSB7fSkgPT4ge1xuXHRjb25zdCBzdGF0ZSA9IGhhbmRsZVN0ZGluRGVzdHJveShzdHJlYW0sIHN0cmVhbUluZm8pO1xuXHRjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRcdC4uLihzdG9wT25FeGl0ID8gW3N0cmVhbUluZm8uZXhpdFByb21pc2VdIDogW10pLFxuXHRcdFx0ZmluaXNoZWQoc3RyZWFtLCB7Y2xlYW51cDogdHJ1ZSwgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsfSksXG5cdFx0XSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKCFzdGF0ZS5zdGRpbkNsZWFuZWRVcCkge1xuXHRcdFx0aGFuZGxlU3RyZWFtRXJyb3IoZXJyb3IsIGZkTnVtYmVyLCBzdHJlYW1JbmZvLCBpc1NhbWVEaXJlY3Rpb24pO1xuXHRcdH1cblx0fSBmaW5hbGx5IHtcblx0XHRhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcblx0fVxufTtcblxuLy8gSWYgYHN1YnByb2Nlc3Muc3RkaW5gIGlzIGRlc3Ryb3llZCBiZWZvcmUgYmVpbmcgZnVsbHkgd3JpdHRlbiB0bywgaXQgaXMgY29uc2lkZXJlZCBhYm9ydGVkIGFuZCBzaG91bGQgdGhyb3cgYW4gZXJyb3IuXG4vLyBUaGlzIGNhbiBoYXBwZW4gZm9yIGV4YW1wbGUgd2hlbiB1c2VyIGNhbGxlZCBgc3VicHJvY2Vzcy5zdGRpbi5kZXN0cm95KClgIGJlZm9yZSBgc3VicHJvY2Vzcy5zdGRpbi5lbmQoKWAuXG4vLyBIb3dldmVyLCBOb2RlLmpzIGNhbGxzIGBzdWJwcm9jZXNzLnN0ZGluLmRlc3Ryb3koKWAgb24gZXhpdCBmb3IgY2xlYW51cCBwdXJwb3Nlcy5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iLzBiNGNkYjRiNDI5NTZjYmQ3MDE5MDU4ZTQwOWUwNjcwMGExOTllMTEvbGliL2ludGVybmFsL2NoaWxkX3Byb2Nlc3MuanMjTDI3OFxuLy8gVGhpcyBpcyBub3JtYWwgYW5kIHNob3VsZCBub3QgdGhyb3cgYW4gZXJyb3IuXG4vLyBUaGVyZWZvcmUsIHdlIG5lZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIGJvdGggc2l0dWF0aW9ucyB0byBrbm93IHdoZXRoZXIgdG8gdGhyb3cgYW4gZXJyb3IuXG4vLyBVbmZvcnR1bmF0ZWx5LCBldmVudHMgKGBjbG9zZWAsIGBlcnJvcmAsIGBlbmRgLCBgZXhpdGApIGNhbm5vdCBiZSB1c2VkIGJlY2F1c2UgYC5kZXN0cm95KClgIGNhbiB0YWtlIGFuIGFyYml0cmFyeSBhbW91bnQgb2YgdGltZS5cbi8vIEZvciBleGFtcGxlLCBgc3RkaW46ICdwaXBlJ2AgaXMgaW1wbGVtZW50ZWQgYXMgYSBUQ1Agc29ja2V0LCBhbmQgaXRzIGAuZGVzdHJveSgpYCBtZXRob2Qgd2FpdHMgZm9yIFRDUCBkaXNjb25uZWN0aW9uLlxuLy8gVGhlcmVmb3JlIGAuZGVzdHJveSgpYCBtaWdodCBlbmQgYmVmb3JlIG9yIGFmdGVyIHN1YnByb2Nlc3MgZXhpdCwgYmFzZWQgb24gT1Mgc3BlZWQgYW5kIGxvYWQuXG4vLyBUaGUgb25seSB3YXkgdG8gZGV0ZWN0IHRoaXMgaXMgdG8gc3B5IG9uIGBzdWJwcm9jZXNzLnN0ZGluLl9kZXN0cm95KClgIGJ5IHdyYXBwaW5nIGl0LlxuLy8gSWYgYHN1YnByb2Nlc3MuZXhpdENvZGVgIG9yIGBzdWJwcm9jZXNzLnNpZ25hbENvZGVgIGlzIHNldCwgaXQgbWVhbnMgYC5kZXN0cm95KClgIGlzIGJlaW5nIGNhbGxlZCBieSBOb2RlLmpzIGl0c2VsZi5cbmNvbnN0IGhhbmRsZVN0ZGluRGVzdHJveSA9IChzdHJlYW0sIHtvcmlnaW5hbFN0cmVhbXM6IFtvcmlnaW5hbFN0ZGluXSwgc3VicHJvY2Vzc30pID0+IHtcblx0Y29uc3Qgc3RhdGUgPSB7c3RkaW5DbGVhbmVkVXA6IGZhbHNlfTtcblx0aWYgKHN0cmVhbSA9PT0gb3JpZ2luYWxTdGRpbikge1xuXHRcdHNweU9uU3RkaW5EZXN0cm95KHN0cmVhbSwgc3VicHJvY2Vzcywgc3RhdGUpO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufTtcblxuY29uc3Qgc3B5T25TdGRpbkRlc3Ryb3kgPSAoc3VicHJvY2Vzc1N0ZGluLCBzdWJwcm9jZXNzLCBzdGF0ZSkgPT4ge1xuXHRjb25zdCB7X2Rlc3Ryb3l9ID0gc3VicHJvY2Vzc1N0ZGluO1xuXHRzdWJwcm9jZXNzU3RkaW4uX2Rlc3Ryb3kgPSAoLi4uZGVzdHJveUFyZ3VtZW50cykgPT4ge1xuXHRcdHNldFN0ZGluQ2xlYW5lZFVwKHN1YnByb2Nlc3MsIHN0YXRlKTtcblx0XHRfZGVzdHJveS5jYWxsKHN1YnByb2Nlc3NTdGRpbiwgLi4uZGVzdHJveUFyZ3VtZW50cyk7XG5cdH07XG59O1xuXG5jb25zdCBzZXRTdGRpbkNsZWFuZWRVcCA9ICh7ZXhpdENvZGUsIHNpZ25hbENvZGV9LCBzdGF0ZSkgPT4ge1xuXHRpZiAoZXhpdENvZGUgIT09IG51bGwgfHwgc2lnbmFsQ29kZSAhPT0gbnVsbCkge1xuXHRcdHN0YXRlLnN0ZGluQ2xlYW5lZFVwID0gdHJ1ZTtcblx0fVxufTtcblxuLy8gV2UgaWdub3JlIEVQSVBFcyBvbiB3cml0YWJsZSBzdHJlYW1zIGFuZCBhYm9ydHMgb24gcmVhZGFibGUgc3RyZWFtcyBzaW5jZSB0aG9zZSBjYW4gaGFwcGVuIG5vcm1hbGx5LlxuLy8gV2hlbiBvbmUgc3RyZWFtIGVycm9ycywgdGhlIGVycm9yIGlzIHByb3BhZ2F0ZWQgdG8gdGhlIG90aGVyIHN0cmVhbXMgb24gdGhlIHNhbWUgZmlsZSBkZXNjcmlwdG9yLlxuLy8gVGhvc2Ugb3RoZXIgc3RyZWFtcyBtaWdodCBoYXZlIGEgZGlmZmVyZW50IGRpcmVjdGlvbiBkdWUgdG8gdGhlIGFib3ZlLlxuLy8gV2hlbiB0aGlzIGhhcHBlbnMsIHRoZSBkaXJlY3Rpb24gb2YgYm90aCB0aGUgaW5pdGlhbCBzdHJlYW0gYW5kIHRoZSBvdGhlcnMgc2hvdWxkIHRoZW4gYmUgdGFrZW4gaW50byBhY2NvdW50LlxuLy8gVGhlcmVmb3JlLCB3ZSBrZWVwIHRyYWNrIG9mIHdoZXRoZXIgYSBzdHJlYW0gZXJyb3IgaXMgY3VycmVudGx5IHByb3BhZ2F0aW5nLlxuY29uc3QgaGFuZGxlU3RyZWFtRXJyb3IgPSAoZXJyb3IsIGZkTnVtYmVyLCBzdHJlYW1JbmZvLCBpc1NhbWVEaXJlY3Rpb24pID0+IHtcblx0aWYgKCFzaG91bGRJZ25vcmVTdHJlYW1FcnJvcihlcnJvciwgZmROdW1iZXIsIHN0cmVhbUluZm8sIGlzU2FtZURpcmVjdGlvbikpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufTtcblxuY29uc3Qgc2hvdWxkSWdub3JlU3RyZWFtRXJyb3IgPSAoZXJyb3IsIGZkTnVtYmVyLCBzdHJlYW1JbmZvLCBpc1NhbWVEaXJlY3Rpb24gPSB0cnVlKSA9PiB7XG5cdGlmIChzdHJlYW1JbmZvLnByb3BhZ2F0aW5nKSB7XG5cdFx0cmV0dXJuIGlzU3RyZWFtRXBpcGUoZXJyb3IpIHx8IGlzU3RyZWFtQWJvcnQoZXJyb3IpO1xuXHR9XG5cblx0c3RyZWFtSW5mby5wcm9wYWdhdGluZyA9IHRydWU7XG5cdHJldHVybiBpc0lucHV0RmlsZURlc2NyaXB0b3Ioc3RyZWFtSW5mbywgZmROdW1iZXIpID09PSBpc1NhbWVEaXJlY3Rpb25cblx0XHQ/IGlzU3RyZWFtRXBpcGUoZXJyb3IpXG5cdFx0OiBpc1N0cmVhbUFib3J0KGVycm9yKTtcbn07XG5cbi8vIFVuZm9ydHVuYXRlbHksIHdlIGNhbm5vdCB1c2UgdGhlIHN0cmVhbSdzIGNsYXNzIG9yIHByb3BlcnRpZXMgdG8ga25vdyB3aGV0aGVyIGl0IGlzIHJlYWRhYmxlIG9yIHdyaXRhYmxlLlxuLy8gRm9yIGV4YW1wbGUsIGBzdWJwcm9jZXNzLnN0ZGluYCBpcyB0ZWNobmljYWxseSBhIER1cGxleCwgYnV0IGNhbiBvbmx5IGJlIHVzZWQgYXMgYSB3cml0YWJsZS5cbi8vIFRoZXJlZm9yZSwgd2UgbmVlZCB0byB1c2UgdGhlIGZpbGUgZGVzY3JpcHRvcidzIGRpcmVjdGlvbiAoYHN0ZGluYCBpcyBpbnB1dCwgYHN0ZG91dGAgaXMgb3V0cHV0LCBldGMuKS5cbi8vIEhvd2V2ZXIsIHdoaWxlIGBzdWJwcm9jZXNzLnN0ZCpgIGFuZCB0cmFuc2Zvcm1zIGZvbGxvdyB0aGF0IGRpcmVjdGlvbiwgYW55IHN0cmVhbSBwYXNzZWQgdGhlIGBzdGQqYCBvcHRpb24gaGFzIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXG4vLyBGb3IgZXhhbXBsZSwgYHN1YnByb2Nlc3Muc3RkaW5gIGlzIGEgd3JpdGFibGUsIGJ1dCB0aGUgYHN0ZGluYCBvcHRpb24gaXMgYSByZWFkYWJsZS5cbmV4cG9ydCBjb25zdCBpc0lucHV0RmlsZURlc2NyaXB0b3IgPSAoe2ZpbGVEZXNjcmlwdG9yc30sIGZkTnVtYmVyKSA9PiBmZE51bWJlciAhPT0gJ2FsbCcgJiYgZmlsZURlc2NyaXB0b3JzW2ZkTnVtYmVyXS5kaXJlY3Rpb24gPT09ICdpbnB1dCc7XG5cbi8vIFdoZW4gYHN0cmVhbS5kZXN0cm95KClgIGlzIGNhbGxlZCB3aXRob3V0IGFuIGBlcnJvcmAgYXJndW1lbnQsIHN0cmVhbSBpcyBhYm9ydGVkLlxuLy8gVGhpcyBpcyB0aGUgb25seSB3YXkgdG8gYWJvcnQgYSByZWFkYWJsZSBzdHJlYW0sIHdoaWNoIGNhbiBiZSB1c2VmdWwgaW4gc29tZSBpbnN0YW5jZXMuXG4vLyBUaGVyZWZvcmUsIHdlIGlnbm9yZSB0aGlzIGVycm9yIG9uIHJlYWRhYmxlIHN0cmVhbXMuXG5leHBvcnQgY29uc3QgaXNTdHJlYW1BYm9ydCA9IGVycm9yID0+IGVycm9yPy5jb2RlID09PSAnRVJSX1NUUkVBTV9QUkVNQVRVUkVfQ0xPU0UnO1xuXG4vLyBXaGVuIGBzdHJlYW0ud3JpdGUoKWAgaXMgY2FsbGVkIGJ1dCB0aGUgdW5kZXJseWluZyBzb3VyY2UgaGFzIGJlZW4gY2xvc2VkLCBgRVBJUEVgIGlzIGVtaXR0ZWQuXG4vLyBXaGVuIHBpcGluZyBzdWJwcm9jZXNzZXMsIHRoZSBzb3VyY2Ugc3VicHJvY2VzcyB1c3VhbGx5IGRlY2lkZXMgd2hlbiB0byBzdG9wIHBpcGluZy5cbi8vIEhvd2V2ZXIsIHRoZXJlIGFyZSBzb21lIGluc3RhbmNlcyB3aGVuIHRoZSBkZXN0aW5hdGlvbiBkb2VzIGluc3RlYWQsIHN1Y2ggYXMgYC4uLiB8IGhlYWQgLW4xYC5cbi8vIEl0IG5vdGlmaWVzIHRoZSBzb3VyY2UgYnkgdXNpbmcgYEVQSVBFYC5cbi8vIFRoZXJlZm9yZSwgd2UgaWdub3JlIHRoaXMgZXJyb3Igb24gd3JpdGFibGUgc3RyZWFtcy5cbmNvbnN0IGlzU3RyZWFtRXBpcGUgPSBlcnJvciA9PiBlcnJvcj8uY29kZSA9PT0gJ0VQSVBFJztcbiIsICJpbXBvcnQge2dldFN0cmVhbU91dHB1dH0gZnJvbSAnLi4vaW8vY29udGVudHMuanMnO1xuaW1wb3J0IHt3YWl0Rm9yU3RyZWFtLCBpc0lucHV0RmlsZURlc2NyaXB0b3J9IGZyb20gJy4vd2FpdC1zdHJlYW0uanMnO1xuXG4vLyBSZWFkIHRoZSBjb250ZW50cyBvZiBgc3VicHJvY2Vzcy5zdGQqYCBhbmR8b3Igd2FpdCBmb3IgaXRzIGNvbXBsZXRpb25cbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3RkaW9TdHJlYW1zID0gKHtzdWJwcm9jZXNzLCBlbmNvZGluZywgYnVmZmVyLCBtYXhCdWZmZXIsIGxpbmVzLCBzdHJpcEZpbmFsTmV3bGluZSwgdmVyYm9zZUluZm8sIHN0cmVhbUluZm99KSA9PiBzdWJwcm9jZXNzLnN0ZGlvLm1hcCgoc3RyZWFtLCBmZE51bWJlcikgPT4gd2FpdEZvclN1YnByb2Nlc3NTdHJlYW0oe1xuXHRzdHJlYW0sXG5cdGZkTnVtYmVyLFxuXHRlbmNvZGluZyxcblx0YnVmZmVyOiBidWZmZXJbZmROdW1iZXJdLFxuXHRtYXhCdWZmZXI6IG1heEJ1ZmZlcltmZE51bWJlcl0sXG5cdGxpbmVzOiBsaW5lc1tmZE51bWJlcl0sXG5cdGFsbE1peGVkOiBmYWxzZSxcblx0c3RyaXBGaW5hbE5ld2xpbmUsXG5cdHZlcmJvc2VJbmZvLFxuXHRzdHJlYW1JbmZvLFxufSkpO1xuXG4vLyBSZWFkIHRoZSBjb250ZW50cyBvZiBgc3VicHJvY2Vzcy5zdGQqYCBvciBgc3VicHJvY2Vzcy5hbGxgIGFuZHxvciB3YWl0IGZvciBpdHMgY29tcGxldGlvblxuZXhwb3J0IGNvbnN0IHdhaXRGb3JTdWJwcm9jZXNzU3RyZWFtID0gYXN5bmMgKHtzdHJlYW0sIGZkTnVtYmVyLCBlbmNvZGluZywgYnVmZmVyLCBtYXhCdWZmZXIsIGxpbmVzLCBhbGxNaXhlZCwgc3RyaXBGaW5hbE5ld2xpbmUsIHZlcmJvc2VJbmZvLCBzdHJlYW1JbmZvfSkgPT4ge1xuXHRpZiAoIXN0cmVhbSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9uU3RyZWFtRW5kID0gd2FpdEZvclN0cmVhbShzdHJlYW0sIGZkTnVtYmVyLCBzdHJlYW1JbmZvKTtcblx0aWYgKGlzSW5wdXRGaWxlRGVzY3JpcHRvcihzdHJlYW1JbmZvLCBmZE51bWJlcikpIHtcblx0XHRhd2FpdCBvblN0cmVhbUVuZDtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBbb3V0cHV0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRnZXRTdHJlYW1PdXRwdXQoe1xuXHRcdFx0c3RyZWFtLFxuXHRcdFx0b25TdHJlYW1FbmQsXG5cdFx0XHRmZE51bWJlcixcblx0XHRcdGVuY29kaW5nLFxuXHRcdFx0YnVmZmVyLFxuXHRcdFx0bWF4QnVmZmVyLFxuXHRcdFx0bGluZXMsXG5cdFx0XHRhbGxNaXhlZCxcblx0XHRcdHN0cmlwRmluYWxOZXdsaW5lLFxuXHRcdFx0dmVyYm9zZUluZm8sXG5cdFx0XHRzdHJlYW1JbmZvLFxuXHRcdH0pLFxuXHRcdG9uU3RyZWFtRW5kLFxuXHRdKTtcblx0cmV0dXJuIG91dHB1dDtcbn07XG4iLCAiaW1wb3J0IG1lcmdlU3RyZWFtcyBmcm9tICdAc2luZHJlc29yaHVzL21lcmdlLXN0cmVhbXMnO1xuaW1wb3J0IHt3YWl0Rm9yU3VicHJvY2Vzc1N0cmVhbX0gZnJvbSAnLi9zdGRpby5qcyc7XG5cbi8vIGBhbGxgIGludGVybGVhdmVzIGBzdGRvdXRgIGFuZCBgc3RkZXJyYFxuZXhwb3J0IGNvbnN0IG1ha2VBbGxTdHJlYW0gPSAoe3N0ZG91dCwgc3RkZXJyfSwge2FsbH0pID0+IGFsbCAmJiAoc3Rkb3V0IHx8IHN0ZGVycilcblx0PyBtZXJnZVN0cmVhbXMoW3N0ZG91dCwgc3RkZXJyXS5maWx0ZXIoQm9vbGVhbikpXG5cdDogdW5kZWZpbmVkO1xuXG4vLyBSZWFkIHRoZSBjb250ZW50cyBvZiBgc3VicHJvY2Vzcy5hbGxgIGFuZHxvciB3YWl0IGZvciBpdHMgY29tcGxldGlvblxuZXhwb3J0IGNvbnN0IHdhaXRGb3JBbGxTdHJlYW0gPSAoe3N1YnByb2Nlc3MsIGVuY29kaW5nLCBidWZmZXIsIG1heEJ1ZmZlciwgbGluZXMsIHN0cmlwRmluYWxOZXdsaW5lLCB2ZXJib3NlSW5mbywgc3RyZWFtSW5mb30pID0+IHdhaXRGb3JTdWJwcm9jZXNzU3RyZWFtKHtcblx0Li4uZ2V0QWxsU3RyZWFtKHN1YnByb2Nlc3MsIGJ1ZmZlciksXG5cdGZkTnVtYmVyOiAnYWxsJyxcblx0ZW5jb2RpbmcsXG5cdG1heEJ1ZmZlcjogbWF4QnVmZmVyWzFdICsgbWF4QnVmZmVyWzJdLFxuXHRsaW5lczogbGluZXNbMV0gfHwgbGluZXNbMl0sXG5cdGFsbE1peGVkOiBnZXRBbGxNaXhlZChzdWJwcm9jZXNzKSxcblx0c3RyaXBGaW5hbE5ld2xpbmUsXG5cdHZlcmJvc2VJbmZvLFxuXHRzdHJlYW1JbmZvLFxufSk7XG5cbmNvbnN0IGdldEFsbFN0cmVhbSA9ICh7c3Rkb3V0LCBzdGRlcnIsIGFsbH0sIFssIGJ1ZmZlclN0ZG91dCwgYnVmZmVyU3RkZXJyXSkgPT4ge1xuXHRjb25zdCBidWZmZXIgPSBidWZmZXJTdGRvdXQgfHwgYnVmZmVyU3RkZXJyO1xuXHRpZiAoIWJ1ZmZlcikge1xuXHRcdHJldHVybiB7c3RyZWFtOiBhbGwsIGJ1ZmZlcn07XG5cdH1cblxuXHRpZiAoIWJ1ZmZlclN0ZG91dCkge1xuXHRcdHJldHVybiB7c3RyZWFtOiBzdGRlcnIsIGJ1ZmZlcn07XG5cdH1cblxuXHRpZiAoIWJ1ZmZlclN0ZGVycikge1xuXHRcdHJldHVybiB7c3RyZWFtOiBzdGRvdXQsIGJ1ZmZlcn07XG5cdH1cblxuXHRyZXR1cm4ge3N0cmVhbTogYWxsLCBidWZmZXJ9O1xufTtcblxuLy8gV2hlbiBgc3VicHJvY2Vzcy5zdGRvdXRgIGlzIGluIG9iamVjdE1vZGUgYnV0IG5vdCBgc3VicHJvY2Vzcy5zdGRlcnJgIChvciB0aGUgb3Bwb3NpdGUpLCB3ZSBuZWVkIHRvIHVzZSBib3RoOlxuLy8gIC0gYGdldFN0cmVhbUFzQXJyYXkoKWAgZm9yIHRoZSBjaHVua3MgaW4gb2JqZWN0TW9kZSwgdG8gcmV0dXJuIGFzIGFuIGFycmF5IHdpdGhvdXQgY2hhbmdpbmcgZWFjaCBjaHVua1xuLy8gIC0gYGdldFN0cmVhbUFzQXJyYXlCdWZmZXIoKWAgb3IgYGdldFN0cmVhbSgpYCBmb3IgdGhlIGNodW5rcyBub3QgaW4gb2JqZWN0TW9kZSwgdG8gY29udmVydCB0aGVtIGZyb20gQnVmZmVycyB0byBzdHJpbmcgb3IgVWludDhBcnJheVxuLy8gV2UgZG8gdGhpcyBieSBlbXVsYXRpbmcgdGhlIEJ1ZmZlciAtPiBzdHJpbmd8VWludDhBcnJheSBjb252ZXJzaW9uIHBlcmZvcm1lZCBieSBgZ2V0LXN0cmVhbWAgd2l0aCBvdXIgb3duLCB3aGljaCBpcyBpZGVudGljYWwuXG5jb25zdCBnZXRBbGxNaXhlZCA9ICh7YWxsLCBzdGRvdXQsIHN0ZGVycn0pID0+IGFsbFxuXHQmJiBzdGRvdXRcblx0JiYgc3RkZXJyXG5cdCYmIHN0ZG91dC5yZWFkYWJsZU9iamVjdE1vZGUgIT09IHN0ZGVyci5yZWFkYWJsZU9iamVjdE1vZGU7XG4iLCAiaW1wb3J0IHt2ZXJib3NlTG9nLCBzZXJpYWxpemVWZXJib3NlTWVzc2FnZX0gZnJvbSAnLi9sb2cuanMnO1xuaW1wb3J0IHtpc0Z1bGxWZXJib3NlfSBmcm9tICcuL3ZhbHVlcy5qcyc7XG5cbi8vIFdoZW4gYHZlcmJvc2VgIGlzIGAnZnVsbCdgLCBwcmludCBJUEMgbWVzc2FnZXMgZnJvbSB0aGUgc3VicHJvY2Vzc1xuZXhwb3J0IGNvbnN0IHNob3VsZExvZ0lwYyA9IHZlcmJvc2VJbmZvID0+IGlzRnVsbFZlcmJvc2UodmVyYm9zZUluZm8sICdpcGMnKTtcblxuZXhwb3J0IGNvbnN0IGxvZ0lwY091dHB1dCA9IChtZXNzYWdlLCB2ZXJib3NlSW5mbykgPT4ge1xuXHRjb25zdCB2ZXJib3NlTWVzc2FnZSA9IHNlcmlhbGl6ZVZlcmJvc2VNZXNzYWdlKG1lc3NhZ2UpO1xuXHR2ZXJib3NlTG9nKHtcblx0XHR0eXBlOiAnaXBjJyxcblx0XHR2ZXJib3NlTWVzc2FnZSxcblx0XHRmZE51bWJlcjogJ2lwYycsXG5cdFx0dmVyYm9zZUluZm8sXG5cdH0pO1xufTtcbiIsICJpbXBvcnQge2NoZWNrSXBjTWF4QnVmZmVyfSBmcm9tICcuLi9pby9tYXgtYnVmZmVyLmpzJztcbmltcG9ydCB7c2hvdWxkTG9nSXBjLCBsb2dJcGNPdXRwdXR9IGZyb20gJy4uL3ZlcmJvc2UvaXBjLmpzJztcbmltcG9ydCB7Z2V0RmRTcGVjaWZpY1ZhbHVlfSBmcm9tICcuLi9hcmd1bWVudHMvc3BlY2lmaWMuanMnO1xuaW1wb3J0IHtsb29wT25NZXNzYWdlc30gZnJvbSAnLi9nZXQtZWFjaC5qcyc7XG5cbi8vIEl0ZXJhdGUgdGhyb3VnaCBJUEMgbWVzc2FnZXMgc2VudCBieSB0aGUgc3VicHJvY2Vzc1xuZXhwb3J0IGNvbnN0IHdhaXRGb3JJcGNPdXRwdXQgPSBhc3luYyAoe1xuXHRzdWJwcm9jZXNzLFxuXHRidWZmZXI6IGJ1ZmZlckFycmF5LFxuXHRtYXhCdWZmZXI6IG1heEJ1ZmZlckFycmF5LFxuXHRpcGMsXG5cdGlwY091dHB1dCxcblx0dmVyYm9zZUluZm8sXG59KSA9PiB7XG5cdGlmICghaXBjKSB7XG5cdFx0cmV0dXJuIGlwY091dHB1dDtcblx0fVxuXG5cdGNvbnN0IGlzVmVyYm9zZSA9IHNob3VsZExvZ0lwYyh2ZXJib3NlSW5mbyk7XG5cdGNvbnN0IGJ1ZmZlciA9IGdldEZkU3BlY2lmaWNWYWx1ZShidWZmZXJBcnJheSwgJ2lwYycpO1xuXHRjb25zdCBtYXhCdWZmZXIgPSBnZXRGZFNwZWNpZmljVmFsdWUobWF4QnVmZmVyQXJyYXksICdpcGMnKTtcblxuXHRmb3IgYXdhaXQgKGNvbnN0IG1lc3NhZ2Ugb2YgbG9vcE9uTWVzc2FnZXMoe1xuXHRcdGFueVByb2Nlc3M6IHN1YnByb2Nlc3MsXG5cdFx0Y2hhbm5lbDogc3VicHJvY2Vzcy5jaGFubmVsLFxuXHRcdGlzU3VicHJvY2VzczogZmFsc2UsXG5cdFx0aXBjLFxuXHRcdHNob3VsZEF3YWl0OiBmYWxzZSxcblx0XHRyZWZlcmVuY2U6IHRydWUsXG5cdH0pKSB7XG5cdFx0aWYgKGJ1ZmZlcikge1xuXHRcdFx0Y2hlY2tJcGNNYXhCdWZmZXIoc3VicHJvY2VzcywgaXBjT3V0cHV0LCBtYXhCdWZmZXIpO1xuXHRcdFx0aXBjT3V0cHV0LnB1c2gobWVzc2FnZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGlzVmVyYm9zZSkge1xuXHRcdFx0bG9nSXBjT3V0cHV0KG1lc3NhZ2UsIHZlcmJvc2VJbmZvKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaXBjT3V0cHV0O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJ1ZmZlcmVkSXBjT3V0cHV0ID0gYXN5bmMgKGlwY091dHB1dFByb21pc2UsIGlwY091dHB1dCkgPT4ge1xuXHRhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoW2lwY091dHB1dFByb21pc2VdKTtcblx0cmV0dXJuIGlwY091dHB1dDtcbn07XG4iLCAiaW1wb3J0IHtvbmNlfSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge2lzU3RyZWFtIGFzIGlzTm9kZVN0cmVhbX0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCB7dGhyb3dPblRpbWVvdXR9IGZyb20gJy4uL3Rlcm1pbmF0ZS90aW1lb3V0LmpzJztcbmltcG9ydCB7dGhyb3dPbkNhbmNlbH0gZnJvbSAnLi4vdGVybWluYXRlL2NhbmNlbC5qcyc7XG5pbXBvcnQge3Rocm93T25HcmFjZWZ1bENhbmNlbH0gZnJvbSAnLi4vdGVybWluYXRlL2dyYWNlZnVsLmpzJztcbmltcG9ydCB7aXNTdGFuZGFyZFN0cmVhbX0gZnJvbSAnLi4vdXRpbHMvc3RhbmRhcmQtc3RyZWFtLmpzJztcbmltcG9ydCB7VFJBTlNGT1JNX1RZUEVTfSBmcm9tICcuLi9zdGRpby90eXBlLmpzJztcbmltcG9ydCB7Z2V0QnVmZmVyZWREYXRhfSBmcm9tICcuLi9pby9jb250ZW50cy5qcyc7XG5pbXBvcnQge3dhaXRGb3JJcGNPdXRwdXQsIGdldEJ1ZmZlcmVkSXBjT3V0cHV0fSBmcm9tICcuLi9pcGMvYnVmZmVyLW1lc3NhZ2VzLmpzJztcbmltcG9ydCB7c2VuZElwY0lucHV0fSBmcm9tICcuLi9pcGMvaXBjLWlucHV0LmpzJztcbmltcG9ydCB7d2FpdEZvckFsbFN0cmVhbX0gZnJvbSAnLi9hbGwtYXN5bmMuanMnO1xuaW1wb3J0IHt3YWl0Rm9yU3RkaW9TdHJlYW1zfSBmcm9tICcuL3N0ZGlvLmpzJztcbmltcG9ydCB7d2FpdEZvckV4aXQsIHdhaXRGb3JTdWNjZXNzZnVsRXhpdH0gZnJvbSAnLi9leGl0LWFzeW5jLmpzJztcbmltcG9ydCB7d2FpdEZvclN0cmVhbX0gZnJvbSAnLi93YWl0LXN0cmVhbS5qcyc7XG5cbi8vIFJldHJpZXZlIHJlc3VsdCBvZiBzdWJwcm9jZXNzOiBleGl0IGNvZGUsIHNpZ25hbCwgZXJyb3IsIHN0cmVhbXMgKHN0ZG91dC9zdGRlcnIvYWxsKVxuZXhwb3J0IGNvbnN0IHdhaXRGb3JTdWJwcm9jZXNzUmVzdWx0ID0gYXN5bmMgKHtcblx0c3VicHJvY2Vzcyxcblx0b3B0aW9uczoge1xuXHRcdGVuY29kaW5nLFxuXHRcdGJ1ZmZlcixcblx0XHRtYXhCdWZmZXIsXG5cdFx0bGluZXMsXG5cdFx0dGltZW91dER1cmF0aW9uOiB0aW1lb3V0LFxuXHRcdGNhbmNlbFNpZ25hbCxcblx0XHRncmFjZWZ1bENhbmNlbCxcblx0XHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRcdHN0cmlwRmluYWxOZXdsaW5lLFxuXHRcdGlwYyxcblx0XHRpcGNJbnB1dCxcblx0fSxcblx0Y29udGV4dCxcblx0dmVyYm9zZUluZm8sXG5cdGZpbGVEZXNjcmlwdG9ycyxcblx0b3JpZ2luYWxTdHJlYW1zLFxuXHRvbkludGVybmFsRXJyb3IsXG5cdGNvbnRyb2xsZXIsXG59KSA9PiB7XG5cdGNvbnN0IGV4aXRQcm9taXNlID0gd2FpdEZvckV4aXQoc3VicHJvY2VzcywgY29udGV4dCk7XG5cdGNvbnN0IHN0cmVhbUluZm8gPSB7XG5cdFx0b3JpZ2luYWxTdHJlYW1zLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRzdWJwcm9jZXNzLFxuXHRcdGV4aXRQcm9taXNlLFxuXHRcdHByb3BhZ2F0aW5nOiBmYWxzZSxcblx0fTtcblxuXHRjb25zdCBzdGRpb1Byb21pc2VzID0gd2FpdEZvclN0ZGlvU3RyZWFtcyh7XG5cdFx0c3VicHJvY2Vzcyxcblx0XHRlbmNvZGluZyxcblx0XHRidWZmZXIsXG5cdFx0bWF4QnVmZmVyLFxuXHRcdGxpbmVzLFxuXHRcdHN0cmlwRmluYWxOZXdsaW5lLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHRcdHN0cmVhbUluZm8sXG5cdH0pO1xuXHRjb25zdCBhbGxQcm9taXNlID0gd2FpdEZvckFsbFN0cmVhbSh7XG5cdFx0c3VicHJvY2Vzcyxcblx0XHRlbmNvZGluZyxcblx0XHRidWZmZXIsXG5cdFx0bWF4QnVmZmVyLFxuXHRcdGxpbmVzLFxuXHRcdHN0cmlwRmluYWxOZXdsaW5lLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHRcdHN0cmVhbUluZm8sXG5cdH0pO1xuXHRjb25zdCBpcGNPdXRwdXQgPSBbXTtcblx0Y29uc3QgaXBjT3V0cHV0UHJvbWlzZSA9IHdhaXRGb3JJcGNPdXRwdXQoe1xuXHRcdHN1YnByb2Nlc3MsXG5cdFx0YnVmZmVyLFxuXHRcdG1heEJ1ZmZlcixcblx0XHRpcGMsXG5cdFx0aXBjT3V0cHV0LFxuXHRcdHZlcmJvc2VJbmZvLFxuXHR9KTtcblx0Y29uc3Qgb3JpZ2luYWxQcm9taXNlcyA9IHdhaXRGb3JPcmlnaW5hbFN0cmVhbXMob3JpZ2luYWxTdHJlYW1zLCBzdWJwcm9jZXNzLCBzdHJlYW1JbmZvKTtcblx0Y29uc3QgY3VzdG9tU3RyZWFtc0VuZFByb21pc2VzID0gd2FpdEZvckN1c3RvbVN0cmVhbXNFbmQoZmlsZURlc2NyaXB0b3JzLCBzdHJlYW1JbmZvKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBQcm9taXNlLnJhY2UoW1xuXHRcdFx0UHJvbWlzZS5hbGwoW1xuXHRcdFx0XHR7fSxcblx0XHRcdFx0d2FpdEZvclN1Y2Nlc3NmdWxFeGl0KGV4aXRQcm9taXNlKSxcblx0XHRcdFx0UHJvbWlzZS5hbGwoc3RkaW9Qcm9taXNlcyksXG5cdFx0XHRcdGFsbFByb21pc2UsXG5cdFx0XHRcdGlwY091dHB1dFByb21pc2UsXG5cdFx0XHRcdHNlbmRJcGNJbnB1dChzdWJwcm9jZXNzLCBpcGNJbnB1dCksXG5cdFx0XHRcdC4uLm9yaWdpbmFsUHJvbWlzZXMsXG5cdFx0XHRcdC4uLmN1c3RvbVN0cmVhbXNFbmRQcm9taXNlcyxcblx0XHRcdF0pLFxuXHRcdFx0b25JbnRlcm5hbEVycm9yLFxuXHRcdFx0dGhyb3dPblN1YnByb2Nlc3NFcnJvcihzdWJwcm9jZXNzLCBjb250cm9sbGVyKSxcblx0XHRcdC4uLnRocm93T25UaW1lb3V0KHN1YnByb2Nlc3MsIHRpbWVvdXQsIGNvbnRleHQsIGNvbnRyb2xsZXIpLFxuXHRcdFx0Li4udGhyb3dPbkNhbmNlbCh7XG5cdFx0XHRcdHN1YnByb2Nlc3MsXG5cdFx0XHRcdGNhbmNlbFNpZ25hbCxcblx0XHRcdFx0Z3JhY2VmdWxDYW5jZWwsXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHRcdGNvbnRyb2xsZXIsXG5cdFx0XHR9KSxcblx0XHRcdC4uLnRocm93T25HcmFjZWZ1bENhbmNlbCh7XG5cdFx0XHRcdHN1YnByb2Nlc3MsXG5cdFx0XHRcdGNhbmNlbFNpZ25hbCxcblx0XHRcdFx0Z3JhY2VmdWxDYW5jZWwsXG5cdFx0XHRcdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHRcdGNvbnRyb2xsZXIsXG5cdFx0XHR9KSxcblx0XHRdKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb250ZXh0LnRlcm1pbmF0aW9uUmVhc29uID8/PSAnb3RoZXInO1xuXHRcdHJldHVybiBQcm9taXNlLmFsbChbXG5cdFx0XHR7ZXJyb3J9LFxuXHRcdFx0ZXhpdFByb21pc2UsXG5cdFx0XHRQcm9taXNlLmFsbChzdGRpb1Byb21pc2VzLm1hcChzdGRpb1Byb21pc2UgPT4gZ2V0QnVmZmVyZWREYXRhKHN0ZGlvUHJvbWlzZSkpKSxcblx0XHRcdGdldEJ1ZmZlcmVkRGF0YShhbGxQcm9taXNlKSxcblx0XHRcdGdldEJ1ZmZlcmVkSXBjT3V0cHV0KGlwY091dHB1dFByb21pc2UsIGlwY091dHB1dCksXG5cdFx0XHRQcm9taXNlLmFsbFNldHRsZWQob3JpZ2luYWxQcm9taXNlcyksXG5cdFx0XHRQcm9taXNlLmFsbFNldHRsZWQoY3VzdG9tU3RyZWFtc0VuZFByb21pc2VzKSxcblx0XHRdKTtcblx0fVxufTtcblxuLy8gVHJhbnNmb3JtcyByZXBsYWNlIGBzdWJwcm9jZXNzLnN0ZCpgLCB3aGljaCBtZWFucyB0aGV5IGFyZSBub3QgZXhwb3NlZCB0byB1c2Vycy5cbi8vIEhvd2V2ZXIsIHdlIHN0aWxsIHdhbnQgdG8gd2FpdCBmb3IgdGhlaXIgY29tcGxldGlvbi5cbmNvbnN0IHdhaXRGb3JPcmlnaW5hbFN0cmVhbXMgPSAob3JpZ2luYWxTdHJlYW1zLCBzdWJwcm9jZXNzLCBzdHJlYW1JbmZvKSA9PlxuXHRvcmlnaW5hbFN0cmVhbXMubWFwKChzdHJlYW0sIGZkTnVtYmVyKSA9PiBzdHJlYW0gPT09IHN1YnByb2Nlc3Muc3RkaW9bZmROdW1iZXJdXG5cdFx0PyB1bmRlZmluZWRcblx0XHQ6IHdhaXRGb3JTdHJlYW0oc3RyZWFtLCBmZE51bWJlciwgc3RyZWFtSW5mbykpO1xuXG4vLyBTb21lIGBzdGRpbmAvYHN0ZG91dGAvYHN0ZGVycmAgb3B0aW9ucyBjcmVhdGUgYSBzdHJlYW0sIGUuZy4gd2hlbiBwYXNzaW5nIGEgZmlsZSBwYXRoLlxuLy8gVGhlIGAucGlwZSgpYCBtZXRob2QgYXV0b21hdGljYWxseSBlbmRzIHRoYXQgc3RyZWFtIHdoZW4gYHN1YnByb2Nlc3NgIGVuZHMuXG4vLyBUaGlzIG1ha2VzIHN1cmUgd2Ugd2FpdCBmb3IgdGhlIGNvbXBsZXRpb24gb2YgdGhvc2Ugc3RyZWFtcywgaW4gb3JkZXIgdG8gY2F0Y2ggYW55IGVycm9yLlxuY29uc3Qgd2FpdEZvckN1c3RvbVN0cmVhbXNFbmQgPSAoZmlsZURlc2NyaXB0b3JzLCBzdHJlYW1JbmZvKSA9PiBmaWxlRGVzY3JpcHRvcnMuZmxhdE1hcCgoe3N0ZGlvSXRlbXN9LCBmZE51bWJlcikgPT4gc3RkaW9JdGVtc1xuXHQuZmlsdGVyKCh7dmFsdWUsIHN0cmVhbSA9IHZhbHVlfSkgPT4gaXNOb2RlU3RyZWFtKHN0cmVhbSwge2NoZWNrT3BlbjogZmFsc2V9KSAmJiAhaXNTdGFuZGFyZFN0cmVhbShzdHJlYW0pKVxuXHQubWFwKCh7dHlwZSwgdmFsdWUsIHN0cmVhbSA9IHZhbHVlfSkgPT4gd2FpdEZvclN0cmVhbShzdHJlYW0sIGZkTnVtYmVyLCBzdHJlYW1JbmZvLCB7XG5cdFx0aXNTYW1lRGlyZWN0aW9uOiBUUkFOU0ZPUk1fVFlQRVMuaGFzKHR5cGUpLFxuXHRcdHN0b3BPbkV4aXQ6IHR5cGUgPT09ICduYXRpdmUnLFxuXHR9KSkpO1xuXG4vLyBGYWlscyB3aGVuIHRoZSBzdWJwcm9jZXNzIGVtaXRzIGFuIGBlcnJvcmAgZXZlbnRcbmNvbnN0IHRocm93T25TdWJwcm9jZXNzRXJyb3IgPSBhc3luYyAoc3VicHJvY2Vzcywge3NpZ25hbH0pID0+IHtcblx0Y29uc3QgW2Vycm9yXSA9IGF3YWl0IG9uY2Uoc3VicHJvY2VzcywgJ2Vycm9yJywge3NpZ25hbH0pO1xuXHR0aHJvdyBlcnJvcjtcbn07XG4iLCAiaW1wb3J0IHtjcmVhdGVEZWZlcnJlZH0gZnJvbSAnLi4vdXRpbHMvZGVmZXJyZWQuanMnO1xuXG4vLyBXaGVuIHVzaW5nIG11bHRpcGxlIGAucmVhZGFibGUoKWAvYC53cml0YWJsZSgpYC9gLmR1cGxleCgpYCwgYGZpbmFsYCBhbmQgYGRlc3Ryb3lgIHNob3VsZCB3YWl0IGZvciBvdGhlciBzdHJlYW1zXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUNvbmN1cnJlbnRTdHJlYW1zID0gKCkgPT4gKHtcblx0cmVhZGFibGVEZXN0cm95OiBuZXcgV2Vha01hcCgpLFxuXHR3cml0YWJsZUZpbmFsOiBuZXcgV2Vha01hcCgpLFxuXHR3cml0YWJsZURlc3Ryb3k6IG5ldyBXZWFrTWFwKCksXG59KTtcblxuLy8gRWFjaCBmaWxlIGRlc2NyaXB0b3IgKyBgd2FpdE5hbWVgIGhhcyBpdHMgb3duIGFycmF5IG9mIHByb21pc2VzLlxuLy8gRWFjaCBwcm9taXNlIGlzIGEgc2luZ2xlIGAucmVhZGFibGUoKWAvYC53cml0YWJsZSgpYC9gLmR1cGxleCgpYCBjYWxsLlxuZXhwb3J0IGNvbnN0IGFkZENvbmN1cnJlbnRTdHJlYW0gPSAoY29uY3VycmVudFN0cmVhbXMsIHN0cmVhbSwgd2FpdE5hbWUpID0+IHtcblx0Y29uc3Qgd2Vha01hcCA9IGNvbmN1cnJlbnRTdHJlYW1zW3dhaXROYW1lXTtcblx0aWYgKCF3ZWFrTWFwLmhhcyhzdHJlYW0pKSB7XG5cdFx0d2Vha01hcC5zZXQoc3RyZWFtLCBbXSk7XG5cdH1cblxuXHRjb25zdCBwcm9taXNlcyA9IHdlYWtNYXAuZ2V0KHN0cmVhbSk7XG5cdGNvbnN0IHByb21pc2UgPSBjcmVhdGVEZWZlcnJlZCgpO1xuXHRwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXHRjb25zdCByZXNvbHZlID0gcHJvbWlzZS5yZXNvbHZlLmJpbmQocHJvbWlzZSk7XG5cdHJldHVybiB7cmVzb2x2ZSwgcHJvbWlzZXN9O1xufTtcblxuLy8gV2FpdCBmb3Igb3RoZXIgc3RyZWFtcywgYnV0IHN0b3Agd2FpdGluZyB3aGVuIHN1YnByb2Nlc3MgZW5kc1xuZXhwb3J0IGNvbnN0IHdhaXRGb3JDb25jdXJyZW50U3RyZWFtcyA9IGFzeW5jICh7cmVzb2x2ZSwgcHJvbWlzZXN9LCBzdWJwcm9jZXNzKSA9PiB7XG5cdHJlc29sdmUoKTtcblx0Y29uc3QgW2lzU3VicHJvY2Vzc0V4aXRdID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRQcm9taXNlLmFsbFNldHRsZWQoW3RydWUsIHN1YnByb2Nlc3NdKSxcblx0XHRQcm9taXNlLmFsbChbZmFsc2UsIC4uLnByb21pc2VzXSksXG5cdF0pO1xuXHRyZXR1cm4gIWlzU3VicHJvY2Vzc0V4aXQ7XG59O1xuIiwgImltcG9ydCB7ZmluaXNoZWR9IGZyb20gJ25vZGU6c3RyZWFtL3Byb21pc2VzJztcbmltcG9ydCB7aXNTdHJlYW1BYm9ydH0gZnJvbSAnLi4vcmVzb2x2ZS93YWl0LXN0cmVhbS5qcyc7XG5cbmV4cG9ydCBjb25zdCBzYWZlV2FpdEZvclN1YnByb2Nlc3NTdGRpbiA9IGFzeW5jIHN1YnByb2Nlc3NTdGRpbiA9PiB7XG5cdGlmIChzdWJwcm9jZXNzU3RkaW4gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRyeSB7XG5cdFx0YXdhaXQgd2FpdEZvclN1YnByb2Nlc3NTdGRpbihzdWJwcm9jZXNzU3RkaW4pO1xuXHR9IGNhdGNoIHt9XG59O1xuXG5leHBvcnQgY29uc3Qgc2FmZVdhaXRGb3JTdWJwcm9jZXNzU3Rkb3V0ID0gYXN5bmMgc3VicHJvY2Vzc1N0ZG91dCA9PiB7XG5cdGlmIChzdWJwcm9jZXNzU3Rkb3V0ID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGF3YWl0IHdhaXRGb3JTdWJwcm9jZXNzU3Rkb3V0KHN1YnByb2Nlc3NTdGRvdXQpO1xuXHR9IGNhdGNoIHt9XG59O1xuXG5leHBvcnQgY29uc3Qgd2FpdEZvclN1YnByb2Nlc3NTdGRpbiA9IGFzeW5jIHN1YnByb2Nlc3NTdGRpbiA9PiB7XG5cdGF3YWl0IGZpbmlzaGVkKHN1YnByb2Nlc3NTdGRpbiwge2NsZWFudXA6IHRydWUsIHJlYWRhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWV9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3VicHJvY2Vzc1N0ZG91dCA9IGFzeW5jIHN1YnByb2Nlc3NTdGRvdXQgPT4ge1xuXHRhd2FpdCBmaW5pc2hlZChzdWJwcm9jZXNzU3Rkb3V0LCB7Y2xlYW51cDogdHJ1ZSwgcmVhZGFibGU6IHRydWUsIHdyaXRhYmxlOiBmYWxzZX0pO1xufTtcblxuLy8gV2hlbiBgcmVhZGFibGVgIG9yIGB3cml0YWJsZWAgYWJvcnRzL2Vycm9ycywgYXdhaXRzIHRoZSBzdWJwcm9jZXNzLCBmb3IgdGhlIHJlYXNvbiBtZW50aW9uZWQgYWJvdmVcbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3VicHJvY2VzcyA9IGFzeW5jIChzdWJwcm9jZXNzLCBlcnJvcikgPT4ge1xuXHRhd2FpdCBzdWJwcm9jZXNzO1xuXHRpZiAoZXJyb3IpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGRlc3Ryb3lPdGhlclN0cmVhbSA9IChzdHJlYW0sIGlzT3BlbiwgZXJyb3IpID0+IHtcblx0aWYgKGVycm9yICYmICFpc1N0cmVhbUFib3J0KGVycm9yKSkge1xuXHRcdHN0cmVhbS5kZXN0cm95KGVycm9yKTtcblx0fSBlbHNlIGlmIChpc09wZW4pIHtcblx0XHRzdHJlYW0uZGVzdHJveSgpO1xuXHR9XG59O1xuIiwgImltcG9ydCB7UmVhZGFibGV9IGZyb20gJ25vZGU6c3RyZWFtJztcbmltcG9ydCB7Y2FsbGJhY2tpZnl9IGZyb20gJ25vZGU6dXRpbCc7XG5pbXBvcnQge0JJTkFSWV9FTkNPRElOR1N9IGZyb20gJy4uL2FyZ3VtZW50cy9lbmNvZGluZy1vcHRpb24uanMnO1xuaW1wb3J0IHtnZXRGcm9tU3RyZWFtfSBmcm9tICcuLi9hcmd1bWVudHMvZmQtb3B0aW9ucy5qcyc7XG5pbXBvcnQge2l0ZXJhdGVPblN1YnByb2Nlc3NTdHJlYW0sIERFRkFVTFRfT0JKRUNUX0hJR0hfV0FURVJfTUFSS30gZnJvbSAnLi4vaW8vaXRlcmF0ZS5qcyc7XG5pbXBvcnQge2NyZWF0ZURlZmVycmVkfSBmcm9tICcuLi91dGlscy9kZWZlcnJlZC5qcyc7XG5pbXBvcnQge2FkZENvbmN1cnJlbnRTdHJlYW0sIHdhaXRGb3JDb25jdXJyZW50U3RyZWFtc30gZnJvbSAnLi9jb25jdXJyZW50LmpzJztcbmltcG9ydCB7XG5cdHNhZmVXYWl0Rm9yU3VicHJvY2Vzc1N0ZGluLFxuXHR3YWl0Rm9yU3VicHJvY2Vzc1N0ZG91dCxcblx0d2FpdEZvclN1YnByb2Nlc3MsXG5cdGRlc3Ryb3lPdGhlclN0cmVhbSxcbn0gZnJvbSAnLi9zaGFyZWQuanMnO1xuXG4vLyBDcmVhdGUgYSBgUmVhZGFibGVgIHN0cmVhbSB0aGF0IGZvcndhcmRzIGZyb20gYHN0ZG91dGAgYW5kIGF3YWl0cyB0aGUgc3VicHJvY2Vzc1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlYWRhYmxlID0gKHtzdWJwcm9jZXNzLCBjb25jdXJyZW50U3RyZWFtcywgZW5jb2Rpbmd9LCB7ZnJvbSwgYmluYXJ5OiBiaW5hcnlPcHRpb24gPSB0cnVlLCBwcmVzZXJ2ZU5ld2xpbmVzID0gdHJ1ZX0gPSB7fSkgPT4ge1xuXHRjb25zdCBiaW5hcnkgPSBiaW5hcnlPcHRpb24gfHwgQklOQVJZX0VOQ09ESU5HUy5oYXMoZW5jb2RpbmcpO1xuXHRjb25zdCB7c3VicHJvY2Vzc1N0ZG91dCwgd2FpdFJlYWRhYmxlRGVzdHJveX0gPSBnZXRTdWJwcm9jZXNzU3Rkb3V0KHN1YnByb2Nlc3MsIGZyb20sIGNvbmN1cnJlbnRTdHJlYW1zKTtcblx0Y29uc3Qge3JlYWRhYmxlRW5jb2RpbmcsIHJlYWRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVIaWdoV2F0ZXJNYXJrfSA9IGdldFJlYWRhYmxlT3B0aW9ucyhzdWJwcm9jZXNzU3Rkb3V0LCBiaW5hcnkpO1xuXHRjb25zdCB7cmVhZCwgb25TdGRvdXREYXRhRG9uZX0gPSBnZXRSZWFkYWJsZU1ldGhvZHMoe1xuXHRcdHN1YnByb2Nlc3NTdGRvdXQsXG5cdFx0c3VicHJvY2Vzcyxcblx0XHRiaW5hcnksXG5cdFx0ZW5jb2RpbmcsXG5cdFx0cHJlc2VydmVOZXdsaW5lcyxcblx0fSk7XG5cdGNvbnN0IHJlYWRhYmxlID0gbmV3IFJlYWRhYmxlKHtcblx0XHRyZWFkLFxuXHRcdGRlc3Ryb3k6IGNhbGxiYWNraWZ5KG9uUmVhZGFibGVEZXN0cm95LmJpbmQodW5kZWZpbmVkLCB7c3VicHJvY2Vzc1N0ZG91dCwgc3VicHJvY2Vzcywgd2FpdFJlYWRhYmxlRGVzdHJveX0pKSxcblx0XHRoaWdoV2F0ZXJNYXJrOiByZWFkYWJsZUhpZ2hXYXRlck1hcmssXG5cdFx0b2JqZWN0TW9kZTogcmVhZGFibGVPYmplY3RNb2RlLFxuXHRcdGVuY29kaW5nOiByZWFkYWJsZUVuY29kaW5nLFxuXHR9KTtcblx0b25TdGRvdXRGaW5pc2hlZCh7XG5cdFx0c3VicHJvY2Vzc1N0ZG91dCxcblx0XHRvblN0ZG91dERhdGFEb25lLFxuXHRcdHJlYWRhYmxlLFxuXHRcdHN1YnByb2Nlc3MsXG5cdH0pO1xuXHRyZXR1cm4gcmVhZGFibGU7XG59O1xuXG4vLyBSZXRyaWV2ZSBgc3Rkb3V0YCAob3Igb3RoZXIgc3RyZWFtIGRlcGVuZGluZyBvbiBgZnJvbWApXG5leHBvcnQgY29uc3QgZ2V0U3VicHJvY2Vzc1N0ZG91dCA9IChzdWJwcm9jZXNzLCBmcm9tLCBjb25jdXJyZW50U3RyZWFtcykgPT4ge1xuXHRjb25zdCBzdWJwcm9jZXNzU3Rkb3V0ID0gZ2V0RnJvbVN0cmVhbShzdWJwcm9jZXNzLCBmcm9tKTtcblx0Y29uc3Qgd2FpdFJlYWRhYmxlRGVzdHJveSA9IGFkZENvbmN1cnJlbnRTdHJlYW0oY29uY3VycmVudFN0cmVhbXMsIHN1YnByb2Nlc3NTdGRvdXQsICdyZWFkYWJsZURlc3Ryb3knKTtcblx0cmV0dXJuIHtzdWJwcm9jZXNzU3Rkb3V0LCB3YWl0UmVhZGFibGVEZXN0cm95fTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSZWFkYWJsZU9wdGlvbnMgPSAoe3JlYWRhYmxlRW5jb2RpbmcsIHJlYWRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVIaWdoV2F0ZXJNYXJrfSwgYmluYXJ5KSA9PiBiaW5hcnlcblx0PyB7cmVhZGFibGVFbmNvZGluZywgcmVhZGFibGVPYmplY3RNb2RlLCByZWFkYWJsZUhpZ2hXYXRlck1hcmt9XG5cdDoge3JlYWRhYmxlRW5jb2RpbmcsIHJlYWRhYmxlT2JqZWN0TW9kZTogdHJ1ZSwgcmVhZGFibGVIaWdoV2F0ZXJNYXJrOiBERUZBVUxUX09CSkVDVF9ISUdIX1dBVEVSX01BUkt9O1xuXG5leHBvcnQgY29uc3QgZ2V0UmVhZGFibGVNZXRob2RzID0gKHtzdWJwcm9jZXNzU3Rkb3V0LCBzdWJwcm9jZXNzLCBiaW5hcnksIGVuY29kaW5nLCBwcmVzZXJ2ZU5ld2xpbmVzfSkgPT4ge1xuXHRjb25zdCBvblN0ZG91dERhdGFEb25lID0gY3JlYXRlRGVmZXJyZWQoKTtcblx0Y29uc3Qgb25TdGRvdXREYXRhID0gaXRlcmF0ZU9uU3VicHJvY2Vzc1N0cmVhbSh7XG5cdFx0c3VicHJvY2Vzc1N0ZG91dCxcblx0XHRzdWJwcm9jZXNzLFxuXHRcdGJpbmFyeSxcblx0XHRzaG91bGRFbmNvZGU6ICFiaW5hcnksXG5cdFx0ZW5jb2RpbmcsXG5cdFx0cHJlc2VydmVOZXdsaW5lcyxcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRyZWFkKCkge1xuXHRcdFx0b25SZWFkKHRoaXMsIG9uU3Rkb3V0RGF0YSwgb25TdGRvdXREYXRhRG9uZSk7XG5cdFx0fSxcblx0XHRvblN0ZG91dERhdGFEb25lLFxuXHR9O1xufTtcblxuLy8gRm9yd2FyZHMgZGF0YSBmcm9tIGBzdGRvdXRgIHRvIGByZWFkYWJsZWBcbmNvbnN0IG9uUmVhZCA9IGFzeW5jIChyZWFkYWJsZSwgb25TdGRvdXREYXRhLCBvblN0ZG91dERhdGFEb25lKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qge3ZhbHVlLCBkb25lfSA9IGF3YWl0IG9uU3Rkb3V0RGF0YS5uZXh0KCk7XG5cdFx0aWYgKGRvbmUpIHtcblx0XHRcdG9uU3Rkb3V0RGF0YURvbmUucmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWFkYWJsZS5wdXNoKHZhbHVlKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG5cbi8vIFdoZW4gYHN1YnByb2Nlc3Muc3Rkb3V0YCBlbmRzL2Fib3J0cy9lcnJvcnMsIGRvIHRoZSBzYW1lIG9uIGByZWFkYWJsZWAuXG4vLyBBd2FpdCB0aGUgc3VicHJvY2VzcywgZm9yIHRoZSBzYW1lIHJlYXNvbiBhcyBhYm92ZS5cbmV4cG9ydCBjb25zdCBvblN0ZG91dEZpbmlzaGVkID0gYXN5bmMgKHtzdWJwcm9jZXNzU3Rkb3V0LCBvblN0ZG91dERhdGFEb25lLCByZWFkYWJsZSwgc3VicHJvY2Vzcywgc3VicHJvY2Vzc1N0ZGlufSkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IHdhaXRGb3JTdWJwcm9jZXNzU3Rkb3V0KHN1YnByb2Nlc3NTdGRvdXQpO1xuXHRcdGF3YWl0IHN1YnByb2Nlc3M7XG5cdFx0YXdhaXQgc2FmZVdhaXRGb3JTdWJwcm9jZXNzU3RkaW4oc3VicHJvY2Vzc1N0ZGluKTtcblx0XHRhd2FpdCBvblN0ZG91dERhdGFEb25lO1xuXG5cdFx0aWYgKHJlYWRhYmxlLnJlYWRhYmxlKSB7XG5cdFx0XHRyZWFkYWJsZS5wdXNoKG51bGwpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRhd2FpdCBzYWZlV2FpdEZvclN1YnByb2Nlc3NTdGRpbihzdWJwcm9jZXNzU3RkaW4pO1xuXHRcdGRlc3Ryb3lPdGhlclJlYWRhYmxlKHJlYWRhYmxlLCBlcnJvcik7XG5cdH1cbn07XG5cbi8vIFdoZW4gYHJlYWRhYmxlYCBhYm9ydHMvZXJyb3JzLCBkbyB0aGUgc2FtZSBvbiBgc3VicHJvY2Vzcy5zdGRvdXRgXG5leHBvcnQgY29uc3Qgb25SZWFkYWJsZURlc3Ryb3kgPSBhc3luYyAoe3N1YnByb2Nlc3NTdGRvdXQsIHN1YnByb2Nlc3MsIHdhaXRSZWFkYWJsZURlc3Ryb3l9LCBlcnJvcikgPT4ge1xuXHRpZiAoYXdhaXQgd2FpdEZvckNvbmN1cnJlbnRTdHJlYW1zKHdhaXRSZWFkYWJsZURlc3Ryb3ksIHN1YnByb2Nlc3MpKSB7XG5cdFx0ZGVzdHJveU90aGVyUmVhZGFibGUoc3VicHJvY2Vzc1N0ZG91dCwgZXJyb3IpO1xuXHRcdGF3YWl0IHdhaXRGb3JTdWJwcm9jZXNzKHN1YnByb2Nlc3MsIGVycm9yKTtcblx0fVxufTtcblxuY29uc3QgZGVzdHJveU90aGVyUmVhZGFibGUgPSAoc3RyZWFtLCBlcnJvcikgPT4ge1xuXHRkZXN0cm95T3RoZXJTdHJlYW0oc3RyZWFtLCBzdHJlYW0ucmVhZGFibGUsIGVycm9yKTtcbn07XG4iLCAiaW1wb3J0IHtXcml0YWJsZX0gZnJvbSAnbm9kZTpzdHJlYW0nO1xuaW1wb3J0IHtjYWxsYmFja2lmeX0gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCB7Z2V0VG9TdHJlYW19IGZyb20gJy4uL2FyZ3VtZW50cy9mZC1vcHRpb25zLmpzJztcbmltcG9ydCB7YWRkQ29uY3VycmVudFN0cmVhbSwgd2FpdEZvckNvbmN1cnJlbnRTdHJlYW1zfSBmcm9tICcuL2NvbmN1cnJlbnQuanMnO1xuaW1wb3J0IHtcblx0c2FmZVdhaXRGb3JTdWJwcm9jZXNzU3Rkb3V0LFxuXHR3YWl0Rm9yU3VicHJvY2Vzc1N0ZGluLFxuXHR3YWl0Rm9yU3VicHJvY2Vzcyxcblx0ZGVzdHJveU90aGVyU3RyZWFtLFxufSBmcm9tICcuL3NoYXJlZC5qcyc7XG5cbi8vIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RyZWFtIHRoYXQgZm9yd2FyZHMgdG8gYHN0ZGluYCBhbmQgYXdhaXRzIHRoZSBzdWJwcm9jZXNzXG5leHBvcnQgY29uc3QgY3JlYXRlV3JpdGFibGUgPSAoe3N1YnByb2Nlc3MsIGNvbmN1cnJlbnRTdHJlYW1zfSwge3RvfSA9IHt9KSA9PiB7XG5cdGNvbnN0IHtzdWJwcm9jZXNzU3RkaW4sIHdhaXRXcml0YWJsZUZpbmFsLCB3YWl0V3JpdGFibGVEZXN0cm95fSA9IGdldFN1YnByb2Nlc3NTdGRpbihzdWJwcm9jZXNzLCB0bywgY29uY3VycmVudFN0cmVhbXMpO1xuXHRjb25zdCB3cml0YWJsZSA9IG5ldyBXcml0YWJsZSh7XG5cdFx0Li4uZ2V0V3JpdGFibGVNZXRob2RzKHN1YnByb2Nlc3NTdGRpbiwgc3VicHJvY2Vzcywgd2FpdFdyaXRhYmxlRmluYWwpLFxuXHRcdGRlc3Ryb3k6IGNhbGxiYWNraWZ5KG9uV3JpdGFibGVEZXN0cm95LmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0XHRzdWJwcm9jZXNzU3RkaW4sXG5cdFx0XHRzdWJwcm9jZXNzLFxuXHRcdFx0d2FpdFdyaXRhYmxlRmluYWwsXG5cdFx0XHR3YWl0V3JpdGFibGVEZXN0cm95LFxuXHRcdH0pKSxcblx0XHRoaWdoV2F0ZXJNYXJrOiBzdWJwcm9jZXNzU3RkaW4ud3JpdGFibGVIaWdoV2F0ZXJNYXJrLFxuXHRcdG9iamVjdE1vZGU6IHN1YnByb2Nlc3NTdGRpbi53cml0YWJsZU9iamVjdE1vZGUsXG5cdH0pO1xuXHRvblN0ZGluRmluaXNoZWQoc3VicHJvY2Vzc1N0ZGluLCB3cml0YWJsZSk7XG5cdHJldHVybiB3cml0YWJsZTtcbn07XG5cbi8vIFJldHJpZXZlIGBzdGRpbmAgKG9yIG90aGVyIHN0cmVhbSBkZXBlbmRpbmcgb24gYHRvYClcbmV4cG9ydCBjb25zdCBnZXRTdWJwcm9jZXNzU3RkaW4gPSAoc3VicHJvY2VzcywgdG8sIGNvbmN1cnJlbnRTdHJlYW1zKSA9PiB7XG5cdGNvbnN0IHN1YnByb2Nlc3NTdGRpbiA9IGdldFRvU3RyZWFtKHN1YnByb2Nlc3MsIHRvKTtcblx0Y29uc3Qgd2FpdFdyaXRhYmxlRmluYWwgPSBhZGRDb25jdXJyZW50U3RyZWFtKGNvbmN1cnJlbnRTdHJlYW1zLCBzdWJwcm9jZXNzU3RkaW4sICd3cml0YWJsZUZpbmFsJyk7XG5cdGNvbnN0IHdhaXRXcml0YWJsZURlc3Ryb3kgPSBhZGRDb25jdXJyZW50U3RyZWFtKGNvbmN1cnJlbnRTdHJlYW1zLCBzdWJwcm9jZXNzU3RkaW4sICd3cml0YWJsZURlc3Ryb3knKTtcblx0cmV0dXJuIHtzdWJwcm9jZXNzU3RkaW4sIHdhaXRXcml0YWJsZUZpbmFsLCB3YWl0V3JpdGFibGVEZXN0cm95fTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRXcml0YWJsZU1ldGhvZHMgPSAoc3VicHJvY2Vzc1N0ZGluLCBzdWJwcm9jZXNzLCB3YWl0V3JpdGFibGVGaW5hbCkgPT4gKHtcblx0d3JpdGU6IG9uV3JpdGUuYmluZCh1bmRlZmluZWQsIHN1YnByb2Nlc3NTdGRpbiksXG5cdGZpbmFsOiBjYWxsYmFja2lmeShvbldyaXRhYmxlRmluYWwuYmluZCh1bmRlZmluZWQsIHN1YnByb2Nlc3NTdGRpbiwgc3VicHJvY2Vzcywgd2FpdFdyaXRhYmxlRmluYWwpKSxcbn0pO1xuXG4vLyBGb3J3YXJkcyBkYXRhIGZyb20gYHdyaXRhYmxlYCB0byBgc3RkaW5gXG5jb25zdCBvbldyaXRlID0gKHN1YnByb2Nlc3NTdGRpbiwgY2h1bmssIGVuY29kaW5nLCBkb25lKSA9PiB7XG5cdGlmIChzdWJwcm9jZXNzU3RkaW4ud3JpdGUoY2h1bmssIGVuY29kaW5nKSkge1xuXHRcdGRvbmUoKTtcblx0fSBlbHNlIHtcblx0XHRzdWJwcm9jZXNzU3RkaW4ub25jZSgnZHJhaW4nLCBkb25lKTtcblx0fVxufTtcblxuLy8gRW5zdXJlcyB0aGF0IHRoZSB3cml0YWJsZSBgZmluYWxgIGFuZCByZWFkYWJsZSBgZW5kYCBldmVudHMgYXdhaXRzIHRoZSBzdWJwcm9jZXNzLlxuLy8gTGlrZSB0aGlzLCBhbnkgc3VicHJvY2VzcyBmYWlsdXJlIGlzIHByb3BhZ2F0ZWQgYXMgYSBzdHJlYW0gYGVycm9yYCBldmVudCwgaW5zdGVhZCBvZiBiZWluZyBsb3N0LlxuLy8gVGhlIHVzZXIgZG9lcyBub3QgbmVlZCB0byBgYXdhaXRgIHRoZSBzdWJwcm9jZXNzIGFueW1vcmUsIGJ1dCBub3cgbmVlZHMgdG8gYXdhaXQgdGhlIHN0cmVhbSBjb21wbGV0aW9uIG9yIGVycm9yLlxuLy8gV2hlbiBtdWx0aXBsZSB3cml0YWJsZXMgYXJlIHRhcmdldGluZyB0aGUgc2FtZSBzdHJlYW0sIHRoZXkgd2FpdCBmb3IgZWFjaCBvdGhlciwgdW5sZXNzIHRoZSBzdWJwcm9jZXNzIGVuZHMgZmlyc3QuXG5jb25zdCBvbldyaXRhYmxlRmluYWwgPSBhc3luYyAoc3VicHJvY2Vzc1N0ZGluLCBzdWJwcm9jZXNzLCB3YWl0V3JpdGFibGVGaW5hbCkgPT4ge1xuXHRpZiAoYXdhaXQgd2FpdEZvckNvbmN1cnJlbnRTdHJlYW1zKHdhaXRXcml0YWJsZUZpbmFsLCBzdWJwcm9jZXNzKSkge1xuXHRcdGlmIChzdWJwcm9jZXNzU3RkaW4ud3JpdGFibGUpIHtcblx0XHRcdHN1YnByb2Nlc3NTdGRpbi5lbmQoKTtcblx0XHR9XG5cblx0XHRhd2FpdCBzdWJwcm9jZXNzO1xuXHR9XG59O1xuXG4vLyBXaGVuIGBzdWJwcm9jZXNzLnN0ZGluYCBlbmRzL2Fib3J0cy9lcnJvcnMsIGRvIHRoZSBzYW1lIG9uIGB3cml0YWJsZWAuXG5leHBvcnQgY29uc3Qgb25TdGRpbkZpbmlzaGVkID0gYXN5bmMgKHN1YnByb2Nlc3NTdGRpbiwgd3JpdGFibGUsIHN1YnByb2Nlc3NTdGRvdXQpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCB3YWl0Rm9yU3VicHJvY2Vzc1N0ZGluKHN1YnByb2Nlc3NTdGRpbik7XG5cdFx0aWYgKHdyaXRhYmxlLndyaXRhYmxlKSB7XG5cdFx0XHR3cml0YWJsZS5lbmQoKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0YXdhaXQgc2FmZVdhaXRGb3JTdWJwcm9jZXNzU3Rkb3V0KHN1YnByb2Nlc3NTdGRvdXQpO1xuXHRcdGRlc3Ryb3lPdGhlcldyaXRhYmxlKHdyaXRhYmxlLCBlcnJvcik7XG5cdH1cbn07XG5cbi8vIFdoZW4gYHdyaXRhYmxlYCBhYm9ydHMvZXJyb3JzLCBkbyB0aGUgc2FtZSBvbiBgc3VicHJvY2Vzcy5zdGRpbmBcbmV4cG9ydCBjb25zdCBvbldyaXRhYmxlRGVzdHJveSA9IGFzeW5jICh7c3VicHJvY2Vzc1N0ZGluLCBzdWJwcm9jZXNzLCB3YWl0V3JpdGFibGVGaW5hbCwgd2FpdFdyaXRhYmxlRGVzdHJveX0sIGVycm9yKSA9PiB7XG5cdGF3YWl0IHdhaXRGb3JDb25jdXJyZW50U3RyZWFtcyh3YWl0V3JpdGFibGVGaW5hbCwgc3VicHJvY2Vzcyk7XG5cdGlmIChhd2FpdCB3YWl0Rm9yQ29uY3VycmVudFN0cmVhbXMod2FpdFdyaXRhYmxlRGVzdHJveSwgc3VicHJvY2VzcykpIHtcblx0XHRkZXN0cm95T3RoZXJXcml0YWJsZShzdWJwcm9jZXNzU3RkaW4sIGVycm9yKTtcblx0XHRhd2FpdCB3YWl0Rm9yU3VicHJvY2VzcyhzdWJwcm9jZXNzLCBlcnJvcik7XG5cdH1cbn07XG5cbmNvbnN0IGRlc3Ryb3lPdGhlcldyaXRhYmxlID0gKHN0cmVhbSwgZXJyb3IpID0+IHtcblx0ZGVzdHJveU90aGVyU3RyZWFtKHN0cmVhbSwgc3RyZWFtLndyaXRhYmxlLCBlcnJvcik7XG59O1xuIiwgImltcG9ydCB7RHVwbGV4fSBmcm9tICdub2RlOnN0cmVhbSc7XG5pbXBvcnQge2NhbGxiYWNraWZ5fSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IHtCSU5BUllfRU5DT0RJTkdTfSBmcm9tICcuLi9hcmd1bWVudHMvZW5jb2Rpbmctb3B0aW9uLmpzJztcbmltcG9ydCB7XG5cdGdldFN1YnByb2Nlc3NTdGRvdXQsXG5cdGdldFJlYWRhYmxlT3B0aW9ucyxcblx0Z2V0UmVhZGFibGVNZXRob2RzLFxuXHRvblN0ZG91dEZpbmlzaGVkLFxuXHRvblJlYWRhYmxlRGVzdHJveSxcbn0gZnJvbSAnLi9yZWFkYWJsZS5qcyc7XG5pbXBvcnQge1xuXHRnZXRTdWJwcm9jZXNzU3RkaW4sXG5cdGdldFdyaXRhYmxlTWV0aG9kcyxcblx0b25TdGRpbkZpbmlzaGVkLFxuXHRvbldyaXRhYmxlRGVzdHJveSxcbn0gZnJvbSAnLi93cml0YWJsZS5qcyc7XG5cbi8vIENyZWF0ZSBhIGBEdXBsZXhgIHN0cmVhbSBjb21iaW5pbmcgYm90aCBgc3VicHJvY2Vzcy5yZWFkYWJsZSgpYCBhbmQgYHN1YnByb2Nlc3Mud3JpdGFibGUoKWBcbmV4cG9ydCBjb25zdCBjcmVhdGVEdXBsZXggPSAoe3N1YnByb2Nlc3MsIGNvbmN1cnJlbnRTdHJlYW1zLCBlbmNvZGluZ30sIHtmcm9tLCB0bywgYmluYXJ5OiBiaW5hcnlPcHRpb24gPSB0cnVlLCBwcmVzZXJ2ZU5ld2xpbmVzID0gdHJ1ZX0gPSB7fSkgPT4ge1xuXHRjb25zdCBiaW5hcnkgPSBiaW5hcnlPcHRpb24gfHwgQklOQVJZX0VOQ09ESU5HUy5oYXMoZW5jb2RpbmcpO1xuXHRjb25zdCB7c3VicHJvY2Vzc1N0ZG91dCwgd2FpdFJlYWRhYmxlRGVzdHJveX0gPSBnZXRTdWJwcm9jZXNzU3Rkb3V0KHN1YnByb2Nlc3MsIGZyb20sIGNvbmN1cnJlbnRTdHJlYW1zKTtcblx0Y29uc3Qge3N1YnByb2Nlc3NTdGRpbiwgd2FpdFdyaXRhYmxlRmluYWwsIHdhaXRXcml0YWJsZURlc3Ryb3l9ID0gZ2V0U3VicHJvY2Vzc1N0ZGluKHN1YnByb2Nlc3MsIHRvLCBjb25jdXJyZW50U3RyZWFtcyk7XG5cdGNvbnN0IHtyZWFkYWJsZUVuY29kaW5nLCByZWFkYWJsZU9iamVjdE1vZGUsIHJlYWRhYmxlSGlnaFdhdGVyTWFya30gPSBnZXRSZWFkYWJsZU9wdGlvbnMoc3VicHJvY2Vzc1N0ZG91dCwgYmluYXJ5KTtcblx0Y29uc3Qge3JlYWQsIG9uU3Rkb3V0RGF0YURvbmV9ID0gZ2V0UmVhZGFibGVNZXRob2RzKHtcblx0XHRzdWJwcm9jZXNzU3Rkb3V0LFxuXHRcdHN1YnByb2Nlc3MsXG5cdFx0YmluYXJ5LFxuXHRcdGVuY29kaW5nLFxuXHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdH0pO1xuXHRjb25zdCBkdXBsZXggPSBuZXcgRHVwbGV4KHtcblx0XHRyZWFkLFxuXHRcdC4uLmdldFdyaXRhYmxlTWV0aG9kcyhzdWJwcm9jZXNzU3RkaW4sIHN1YnByb2Nlc3MsIHdhaXRXcml0YWJsZUZpbmFsKSxcblx0XHRkZXN0cm95OiBjYWxsYmFja2lmeShvbkR1cGxleERlc3Ryb3kuYmluZCh1bmRlZmluZWQsIHtcblx0XHRcdHN1YnByb2Nlc3NTdGRvdXQsXG5cdFx0XHRzdWJwcm9jZXNzU3RkaW4sXG5cdFx0XHRzdWJwcm9jZXNzLFxuXHRcdFx0d2FpdFJlYWRhYmxlRGVzdHJveSxcblx0XHRcdHdhaXRXcml0YWJsZUZpbmFsLFxuXHRcdFx0d2FpdFdyaXRhYmxlRGVzdHJveSxcblx0XHR9KSksXG5cdFx0cmVhZGFibGVIaWdoV2F0ZXJNYXJrLFxuXHRcdHdyaXRhYmxlSGlnaFdhdGVyTWFyazogc3VicHJvY2Vzc1N0ZGluLndyaXRhYmxlSGlnaFdhdGVyTWFyayxcblx0XHRyZWFkYWJsZU9iamVjdE1vZGUsXG5cdFx0d3JpdGFibGVPYmplY3RNb2RlOiBzdWJwcm9jZXNzU3RkaW4ud3JpdGFibGVPYmplY3RNb2RlLFxuXHRcdGVuY29kaW5nOiByZWFkYWJsZUVuY29kaW5nLFxuXHR9KTtcblx0b25TdGRvdXRGaW5pc2hlZCh7XG5cdFx0c3VicHJvY2Vzc1N0ZG91dCxcblx0XHRvblN0ZG91dERhdGFEb25lLFxuXHRcdHJlYWRhYmxlOiBkdXBsZXgsXG5cdFx0c3VicHJvY2Vzcyxcblx0XHRzdWJwcm9jZXNzU3RkaW4sXG5cdH0pO1xuXHRvblN0ZGluRmluaXNoZWQoc3VicHJvY2Vzc1N0ZGluLCBkdXBsZXgsIHN1YnByb2Nlc3NTdGRvdXQpO1xuXHRyZXR1cm4gZHVwbGV4O1xufTtcblxuY29uc3Qgb25EdXBsZXhEZXN0cm95ID0gYXN5bmMgKHtzdWJwcm9jZXNzU3Rkb3V0LCBzdWJwcm9jZXNzU3RkaW4sIHN1YnByb2Nlc3MsIHdhaXRSZWFkYWJsZURlc3Ryb3ksIHdhaXRXcml0YWJsZUZpbmFsLCB3YWl0V3JpdGFibGVEZXN0cm95fSwgZXJyb3IpID0+IHtcblx0YXdhaXQgUHJvbWlzZS5hbGwoW1xuXHRcdG9uUmVhZGFibGVEZXN0cm95KHtzdWJwcm9jZXNzU3Rkb3V0LCBzdWJwcm9jZXNzLCB3YWl0UmVhZGFibGVEZXN0cm95fSwgZXJyb3IpLFxuXHRcdG9uV3JpdGFibGVEZXN0cm95KHtcblx0XHRcdHN1YnByb2Nlc3NTdGRpbixcblx0XHRcdHN1YnByb2Nlc3MsXG5cdFx0XHR3YWl0V3JpdGFibGVGaW5hbCxcblx0XHRcdHdhaXRXcml0YWJsZURlc3Ryb3ksXG5cdFx0fSwgZXJyb3IpLFxuXHRdKTtcbn07XG4iLCAiaW1wb3J0IHtCSU5BUllfRU5DT0RJTkdTfSBmcm9tICcuLi9hcmd1bWVudHMvZW5jb2Rpbmctb3B0aW9uLmpzJztcbmltcG9ydCB7Z2V0RnJvbVN0cmVhbX0gZnJvbSAnLi4vYXJndW1lbnRzL2ZkLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtpdGVyYXRlT25TdWJwcm9jZXNzU3RyZWFtfSBmcm9tICcuLi9pby9pdGVyYXRlLmpzJztcblxuLy8gQ29udmVydCB0aGUgc3VicHJvY2VzcyB0byBhbiBhc3luYyBpdGVyYWJsZVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUl0ZXJhYmxlID0gKHN1YnByb2Nlc3MsIGVuY29kaW5nLCB7XG5cdGZyb20sXG5cdGJpbmFyeTogYmluYXJ5T3B0aW9uID0gZmFsc2UsXG5cdHByZXNlcnZlTmV3bGluZXMgPSBmYWxzZSxcbn0gPSB7fSkgPT4ge1xuXHRjb25zdCBiaW5hcnkgPSBiaW5hcnlPcHRpb24gfHwgQklOQVJZX0VOQ09ESU5HUy5oYXMoZW5jb2RpbmcpO1xuXHRjb25zdCBzdWJwcm9jZXNzU3Rkb3V0ID0gZ2V0RnJvbVN0cmVhbShzdWJwcm9jZXNzLCBmcm9tKTtcblx0Y29uc3Qgb25TdGRvdXREYXRhID0gaXRlcmF0ZU9uU3VicHJvY2Vzc1N0cmVhbSh7XG5cdFx0c3VicHJvY2Vzc1N0ZG91dCxcblx0XHRzdWJwcm9jZXNzLFxuXHRcdGJpbmFyeSxcblx0XHRzaG91bGRFbmNvZGU6IHRydWUsXG5cdFx0ZW5jb2RpbmcsXG5cdFx0cHJlc2VydmVOZXdsaW5lcyxcblx0fSk7XG5cdHJldHVybiBpdGVyYXRlT25TdGRvdXREYXRhKG9uU3Rkb3V0RGF0YSwgc3VicHJvY2Vzc1N0ZG91dCwgc3VicHJvY2Vzcyk7XG59O1xuXG5jb25zdCBpdGVyYXRlT25TdGRvdXREYXRhID0gYXN5bmMgZnVuY3Rpb24gKiAob25TdGRvdXREYXRhLCBzdWJwcm9jZXNzU3Rkb3V0LCBzdWJwcm9jZXNzKSB7XG5cdHRyeSB7XG5cdFx0eWllbGQgKiBvblN0ZG91dERhdGE7XG5cdH0gZmluYWxseSB7XG5cdFx0aWYgKHN1YnByb2Nlc3NTdGRvdXQucmVhZGFibGUpIHtcblx0XHRcdHN1YnByb2Nlc3NTdGRvdXQuZGVzdHJveSgpO1xuXHRcdH1cblxuXHRcdGF3YWl0IHN1YnByb2Nlc3M7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHtpbml0aWFsaXplQ29uY3VycmVudFN0cmVhbXN9IGZyb20gJy4vY29uY3VycmVudC5qcyc7XG5pbXBvcnQge2NyZWF0ZVJlYWRhYmxlfSBmcm9tICcuL3JlYWRhYmxlLmpzJztcbmltcG9ydCB7Y3JlYXRlV3JpdGFibGV9IGZyb20gJy4vd3JpdGFibGUuanMnO1xuaW1wb3J0IHtjcmVhdGVEdXBsZXh9IGZyb20gJy4vZHVwbGV4LmpzJztcbmltcG9ydCB7Y3JlYXRlSXRlcmFibGV9IGZyb20gJy4vaXRlcmFibGUuanMnO1xuXG4vLyBBZGQgbWV0aG9kcyB0byBjb252ZXJ0IHRoZSBzdWJwcm9jZXNzIHRvIGEgc3RyZWFtIG9yIGl0ZXJhYmxlXG5leHBvcnQgY29uc3QgYWRkQ29udmVydGVkU3RyZWFtcyA9IChzdWJwcm9jZXNzLCB7ZW5jb2Rpbmd9KSA9PiB7XG5cdGNvbnN0IGNvbmN1cnJlbnRTdHJlYW1zID0gaW5pdGlhbGl6ZUNvbmN1cnJlbnRTdHJlYW1zKCk7XG5cdHN1YnByb2Nlc3MucmVhZGFibGUgPSBjcmVhdGVSZWFkYWJsZS5iaW5kKHVuZGVmaW5lZCwge3N1YnByb2Nlc3MsIGNvbmN1cnJlbnRTdHJlYW1zLCBlbmNvZGluZ30pO1xuXHRzdWJwcm9jZXNzLndyaXRhYmxlID0gY3JlYXRlV3JpdGFibGUuYmluZCh1bmRlZmluZWQsIHtzdWJwcm9jZXNzLCBjb25jdXJyZW50U3RyZWFtc30pO1xuXHRzdWJwcm9jZXNzLmR1cGxleCA9IGNyZWF0ZUR1cGxleC5iaW5kKHVuZGVmaW5lZCwge3N1YnByb2Nlc3MsIGNvbmN1cnJlbnRTdHJlYW1zLCBlbmNvZGluZ30pO1xuXHRzdWJwcm9jZXNzLml0ZXJhYmxlID0gY3JlYXRlSXRlcmFibGUuYmluZCh1bmRlZmluZWQsIHN1YnByb2Nlc3MsIGVuY29kaW5nKTtcblx0c3VicHJvY2Vzc1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBjcmVhdGVJdGVyYWJsZS5iaW5kKHVuZGVmaW5lZCwgc3VicHJvY2VzcywgZW5jb2RpbmcsIHt9KTtcbn07XG4iLCAiLy8gVGhlIHJldHVybiB2YWx1ZSBpcyBhIG1peGluIG9mIGBzdWJwcm9jZXNzYCBhbmQgYFByb21pc2VgXG5leHBvcnQgY29uc3QgbWVyZ2VQcm9taXNlID0gKHN1YnByb2Nlc3MsIHByb21pc2UpID0+IHtcblx0Zm9yIChjb25zdCBbcHJvcGVydHksIGRlc2NyaXB0b3JdIG9mIGRlc2NyaXB0b3JzKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlLmJpbmQocHJvbWlzZSk7XG5cdFx0UmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShzdWJwcm9jZXNzLCBwcm9wZXJ0eSwgey4uLmRlc2NyaXB0b3IsIHZhbHVlfSk7XG5cdH1cbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci10b3AtbGV2ZWwtYXdhaXRcbmNvbnN0IG5hdGl2ZVByb21pc2VQcm90b3R5cGUgPSAoYXN5bmMgKCkgPT4ge30pKCkuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXG5jb25zdCBkZXNjcmlwdG9ycyA9IFsndGhlbicsICdjYXRjaCcsICdmaW5hbGx5J10ubWFwKHByb3BlcnR5ID0+IFtcblx0cHJvcGVydHksXG5cdFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5hdGl2ZVByb21pc2VQcm90b3R5cGUsIHByb3BlcnR5KSxcbl0pO1xuIiwgImltcG9ydCB7c2V0TWF4TGlzdGVuZXJzfSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge3NwYXdufSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHtNYXhCdWZmZXJFcnJvcn0gZnJvbSAnZ2V0LXN0cmVhbSc7XG5pbXBvcnQge2hhbmRsZUNvbW1hbmR9IGZyb20gJy4uL2FyZ3VtZW50cy9jb21tYW5kLmpzJztcbmltcG9ydCB7bm9ybWFsaXplT3B0aW9uc30gZnJvbSAnLi4vYXJndW1lbnRzL29wdGlvbnMuanMnO1xuaW1wb3J0IHtTVUJQUk9DRVNTX09QVElPTlN9IGZyb20gJy4uL2FyZ3VtZW50cy9mZC1vcHRpb25zLmpzJztcbmltcG9ydCB7Y29uY2F0ZW5hdGVTaGVsbH0gZnJvbSAnLi4vYXJndW1lbnRzL3NoZWxsLmpzJztcbmltcG9ydCB7YWRkSXBjTWV0aG9kc30gZnJvbSAnLi4vaXBjL21ldGhvZHMuanMnO1xuaW1wb3J0IHttYWtlRXJyb3IsIG1ha2VTdWNjZXNzUmVzdWx0fSBmcm9tICcuLi9yZXR1cm4vcmVzdWx0LmpzJztcbmltcG9ydCB7aGFuZGxlUmVzdWx0fSBmcm9tICcuLi9yZXR1cm4vcmVqZWN0LmpzJztcbmltcG9ydCB7aGFuZGxlRWFybHlFcnJvcn0gZnJvbSAnLi4vcmV0dXJuL2Vhcmx5LWVycm9yLmpzJztcbmltcG9ydCB7aGFuZGxlU3RkaW9Bc3luY30gZnJvbSAnLi4vc3RkaW8vaGFuZGxlLWFzeW5jLmpzJztcbmltcG9ydCB7c3RyaXBOZXdsaW5lfSBmcm9tICcuLi9pby9zdHJpcC1uZXdsaW5lLmpzJztcbmltcG9ydCB7cGlwZU91dHB1dEFzeW5jfSBmcm9tICcuLi9pby9vdXRwdXQtYXN5bmMuanMnO1xuaW1wb3J0IHtzdWJwcm9jZXNzS2lsbH0gZnJvbSAnLi4vdGVybWluYXRlL2tpbGwuanMnO1xuaW1wb3J0IHtjbGVhbnVwT25FeGl0fSBmcm9tICcuLi90ZXJtaW5hdGUvY2xlYW51cC5qcyc7XG5pbXBvcnQge3BpcGVUb1N1YnByb2Nlc3N9IGZyb20gJy4uL3BpcGUvc2V0dXAuanMnO1xuaW1wb3J0IHttYWtlQWxsU3RyZWFtfSBmcm9tICcuLi9yZXNvbHZlL2FsbC1hc3luYy5qcyc7XG5pbXBvcnQge3dhaXRGb3JTdWJwcm9jZXNzUmVzdWx0fSBmcm9tICcuLi9yZXNvbHZlL3dhaXQtc3VicHJvY2Vzcy5qcyc7XG5pbXBvcnQge2FkZENvbnZlcnRlZFN0cmVhbXN9IGZyb20gJy4uL2NvbnZlcnQvYWRkLmpzJztcbmltcG9ydCB7Y3JlYXRlRGVmZXJyZWR9IGZyb20gJy4uL3V0aWxzL2RlZmVycmVkLmpzJztcbmltcG9ydCB7bWVyZ2VQcm9taXNlfSBmcm9tICcuL3Byb21pc2UuanMnO1xuXG4vLyBNYWluIHNoYXJlZCBsb2dpYyBmb3IgYWxsIGFzeW5jIG1ldGhvZHM6IGBleGVjYSgpYCwgYCRgLCBgZXhlY2FOb2RlKClgXG5leHBvcnQgY29uc3QgZXhlY2FDb3JlQXN5bmMgPSAocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zLCBjcmVhdGVOZXN0ZWQpID0+IHtcblx0Y29uc3Qge2ZpbGUsIGNvbW1hbmRBcmd1bWVudHMsIGNvbW1hbmQsIGVzY2FwZWRDb21tYW5kLCBzdGFydFRpbWUsIHZlcmJvc2VJbmZvLCBvcHRpb25zLCBmaWxlRGVzY3JpcHRvcnN9ID0gaGFuZGxlQXN5bmNBcmd1bWVudHMocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKTtcblx0Y29uc3Qge3N1YnByb2Nlc3MsIHByb21pc2V9ID0gc3Bhd25TdWJwcm9jZXNzQXN5bmMoe1xuXHRcdGZpbGUsXG5cdFx0Y29tbWFuZEFyZ3VtZW50cyxcblx0XHRvcHRpb25zLFxuXHRcdHN0YXJ0VGltZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRjb21tYW5kLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0fSk7XG5cdHN1YnByb2Nlc3MucGlwZSA9IHBpcGVUb1N1YnByb2Nlc3MuYmluZCh1bmRlZmluZWQsIHtcblx0XHRzb3VyY2U6IHN1YnByb2Nlc3MsXG5cdFx0c291cmNlUHJvbWlzZTogcHJvbWlzZSxcblx0XHRib3VuZE9wdGlvbnM6IHt9LFxuXHRcdGNyZWF0ZU5lc3RlZCxcblx0fSk7XG5cdG1lcmdlUHJvbWlzZShzdWJwcm9jZXNzLCBwcm9taXNlKTtcblx0U1VCUFJPQ0VTU19PUFRJT05TLnNldChzdWJwcm9jZXNzLCB7b3B0aW9ucywgZmlsZURlc2NyaXB0b3JzfSk7XG5cdHJldHVybiBzdWJwcm9jZXNzO1xufTtcblxuLy8gQ29tcHV0ZSBhcmd1bWVudHMgdG8gcGFzcyB0byBgY2hpbGRfcHJvY2Vzcy5zcGF3bigpYFxuY29uc3QgaGFuZGxlQXN5bmNBcmd1bWVudHMgPSAocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKSA9PiB7XG5cdGNvbnN0IHtjb21tYW5kLCBlc2NhcGVkQ29tbWFuZCwgc3RhcnRUaW1lLCB2ZXJib3NlSW5mb30gPSBoYW5kbGVDb21tYW5kKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucyk7XG5cdGNvbnN0IHtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zOiBub3JtYWxpemVkT3B0aW9uc30gPSBub3JtYWxpemVPcHRpb25zKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucyk7XG5cdGNvbnN0IG9wdGlvbnMgPSBoYW5kbGVBc3luY09wdGlvbnMobm9ybWFsaXplZE9wdGlvbnMpO1xuXHRjb25zdCBmaWxlRGVzY3JpcHRvcnMgPSBoYW5kbGVTdGRpb0FzeW5jKG9wdGlvbnMsIHZlcmJvc2VJbmZvKTtcblx0cmV0dXJuIHtcblx0XHRmaWxlLFxuXHRcdGNvbW1hbmRBcmd1bWVudHMsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRzdGFydFRpbWUsXG5cdFx0dmVyYm9zZUluZm8sXG5cdFx0b3B0aW9ucyxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdH07XG59O1xuXG4vLyBPcHRpb25zIG5vcm1hbGl6YXRpb24gbG9naWMgc3BlY2lmaWMgdG8gYXN5bmMgbWV0aG9kcy5cbi8vIFByZXZlbnQgcGFzc2luZyB0aGUgYHRpbWVvdXRgIG9wdGlvbiBkaXJlY3RseSB0byBgY2hpbGRfcHJvY2Vzcy5zcGF3bigpYC5cbmNvbnN0IGhhbmRsZUFzeW5jT3B0aW9ucyA9ICh7dGltZW91dCwgc2lnbmFsLCAuLi5vcHRpb25zfSkgPT4ge1xuXHRpZiAoc2lnbmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJzaWduYWxcIiBvcHRpb24gaGFzIGJlZW4gcmVuYW1lZCB0byBcImNhbmNlbFNpZ25hbFwiIGluc3RlYWQuJyk7XG5cdH1cblxuXHRyZXR1cm4gey4uLm9wdGlvbnMsIHRpbWVvdXREdXJhdGlvbjogdGltZW91dH07XG59O1xuXG5jb25zdCBzcGF3blN1YnByb2Nlc3NBc3luYyA9ICh7ZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9ucywgc3RhcnRUaW1lLCB2ZXJib3NlSW5mbywgY29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIGZpbGVEZXNjcmlwdG9yc30pID0+IHtcblx0bGV0IHN1YnByb2Nlc3M7XG5cdHRyeSB7XG5cdFx0c3VicHJvY2VzcyA9IHNwYXduKC4uLmNvbmNhdGVuYXRlU2hlbGwoZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9ucykpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBoYW5kbGVFYXJseUVycm9yKHtcblx0XHRcdGVycm9yLFxuXHRcdFx0Y29tbWFuZCxcblx0XHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdFx0b3B0aW9ucyxcblx0XHRcdHN0YXJ0VGltZSxcblx0XHRcdHZlcmJvc2VJbmZvLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0c2V0TWF4TGlzdGVuZXJzKE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgY29udHJvbGxlci5zaWduYWwpO1xuXG5cdGNvbnN0IG9yaWdpbmFsU3RyZWFtcyA9IFsuLi5zdWJwcm9jZXNzLnN0ZGlvXTtcblx0cGlwZU91dHB1dEFzeW5jKHN1YnByb2Nlc3MsIGZpbGVEZXNjcmlwdG9ycywgY29udHJvbGxlcik7XG5cdGNsZWFudXBPbkV4aXQoc3VicHJvY2Vzcywgb3B0aW9ucywgY29udHJvbGxlcik7XG5cblx0Y29uc3QgY29udGV4dCA9IHt9O1xuXHRjb25zdCBvbkludGVybmFsRXJyb3IgPSBjcmVhdGVEZWZlcnJlZCgpO1xuXHRzdWJwcm9jZXNzLmtpbGwgPSBzdWJwcm9jZXNzS2lsbC5iaW5kKHVuZGVmaW5lZCwge1xuXHRcdGtpbGw6IHN1YnByb2Nlc3Mua2lsbC5iaW5kKHN1YnByb2Nlc3MpLFxuXHRcdG9wdGlvbnMsXG5cdFx0b25JbnRlcm5hbEVycm9yLFxuXHRcdGNvbnRleHQsXG5cdFx0Y29udHJvbGxlcixcblx0fSk7XG5cdHN1YnByb2Nlc3MuYWxsID0gbWFrZUFsbFN0cmVhbShzdWJwcm9jZXNzLCBvcHRpb25zKTtcblx0YWRkQ29udmVydGVkU3RyZWFtcyhzdWJwcm9jZXNzLCBvcHRpb25zKTtcblx0YWRkSXBjTWV0aG9kcyhzdWJwcm9jZXNzLCBvcHRpb25zKTtcblxuXHRjb25zdCBwcm9taXNlID0gaGFuZGxlUHJvbWlzZSh7XG5cdFx0c3VicHJvY2Vzcyxcblx0XHRvcHRpb25zLFxuXHRcdHN0YXJ0VGltZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0b3JpZ2luYWxTdHJlYW1zLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0Y29udGV4dCxcblx0XHRvbkludGVybmFsRXJyb3IsXG5cdFx0Y29udHJvbGxlcixcblx0fSk7XG5cdHJldHVybiB7c3VicHJvY2VzcywgcHJvbWlzZX07XG59O1xuXG4vLyBBc3luY2hyb25vdXMgbG9naWMsIGFzIG9wcG9zZWQgdG8gdGhlIHByZXZpb3VzIGxvZ2ljIHdoaWNoIGNhbiBiZSBydW4gc3luY2hyb25vdXNseSwgaS5lLiBjYW4gYmUgcmV0dXJuZWQgdG8gdXNlciByaWdodCBhd2F5XG5jb25zdCBoYW5kbGVQcm9taXNlID0gYXN5bmMgKHtzdWJwcm9jZXNzLCBvcHRpb25zLCBzdGFydFRpbWUsIHZlcmJvc2VJbmZvLCBmaWxlRGVzY3JpcHRvcnMsIG9yaWdpbmFsU3RyZWFtcywgY29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIGNvbnRleHQsIG9uSW50ZXJuYWxFcnJvciwgY29udHJvbGxlcn0pID0+IHtcblx0Y29uc3QgW1xuXHRcdGVycm9ySW5mbyxcblx0XHRbZXhpdENvZGUsIHNpZ25hbF0sXG5cdFx0c3RkaW9SZXN1bHRzLFxuXHRcdGFsbFJlc3VsdCxcblx0XHRpcGNPdXRwdXQsXG5cdF0gPSBhd2FpdCB3YWl0Rm9yU3VicHJvY2Vzc1Jlc3VsdCh7XG5cdFx0c3VicHJvY2Vzcyxcblx0XHRvcHRpb25zLFxuXHRcdGNvbnRleHQsXG5cdFx0dmVyYm9zZUluZm8sXG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdG9yaWdpbmFsU3RyZWFtcyxcblx0XHRvbkludGVybmFsRXJyb3IsXG5cdFx0Y29udHJvbGxlcixcblx0fSk7XG5cdGNvbnRyb2xsZXIuYWJvcnQoKTtcblx0b25JbnRlcm5hbEVycm9yLnJlc29sdmUoKTtcblxuXHRjb25zdCBzdGRpbyA9IHN0ZGlvUmVzdWx0cy5tYXAoKHN0ZGlvUmVzdWx0LCBmZE51bWJlcikgPT4gc3RyaXBOZXdsaW5lKHN0ZGlvUmVzdWx0LCBvcHRpb25zLCBmZE51bWJlcikpO1xuXHRjb25zdCBhbGwgPSBzdHJpcE5ld2xpbmUoYWxsUmVzdWx0LCBvcHRpb25zLCAnYWxsJyk7XG5cdGNvbnN0IHJlc3VsdCA9IGdldEFzeW5jUmVzdWx0KHtcblx0XHRlcnJvckluZm8sXG5cdFx0ZXhpdENvZGUsXG5cdFx0c2lnbmFsLFxuXHRcdHN0ZGlvLFxuXHRcdGFsbCxcblx0XHRpcGNPdXRwdXQsXG5cdFx0Y29udGV4dCxcblx0XHRvcHRpb25zLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcblx0cmV0dXJuIGhhbmRsZVJlc3VsdChyZXN1bHQsIHZlcmJvc2VJbmZvLCBvcHRpb25zKTtcbn07XG5cbmNvbnN0IGdldEFzeW5jUmVzdWx0ID0gKHtlcnJvckluZm8sIGV4aXRDb2RlLCBzaWduYWwsIHN0ZGlvLCBhbGwsIGlwY091dHB1dCwgY29udGV4dCwgb3B0aW9ucywgY29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIHN0YXJ0VGltZX0pID0+ICdlcnJvcicgaW4gZXJyb3JJbmZvXG5cdD8gbWFrZUVycm9yKHtcblx0XHRlcnJvcjogZXJyb3JJbmZvLmVycm9yLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0dGltZWRPdXQ6IGNvbnRleHQudGVybWluYXRpb25SZWFzb24gPT09ICd0aW1lb3V0Jyxcblx0XHRpc0NhbmNlbGVkOiBjb250ZXh0LnRlcm1pbmF0aW9uUmVhc29uID09PSAnY2FuY2VsJyB8fCBjb250ZXh0LnRlcm1pbmF0aW9uUmVhc29uID09PSAnZ3JhY2VmdWxDYW5jZWwnLFxuXHRcdGlzR3JhY2VmdWxseUNhbmNlbGVkOiBjb250ZXh0LnRlcm1pbmF0aW9uUmVhc29uID09PSAnZ3JhY2VmdWxDYW5jZWwnLFxuXHRcdGlzTWF4QnVmZmVyOiBlcnJvckluZm8uZXJyb3IgaW5zdGFuY2VvZiBNYXhCdWZmZXJFcnJvcixcblx0XHRpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkOiBjb250ZXh0LmlzRm9yY2VmdWxseVRlcm1pbmF0ZWQsXG5cdFx0ZXhpdENvZGUsXG5cdFx0c2lnbmFsLFxuXHRcdHN0ZGlvLFxuXHRcdGFsbCxcblx0XHRpcGNPdXRwdXQsXG5cdFx0b3B0aW9ucyxcblx0XHRzdGFydFRpbWUsXG5cdFx0aXNTeW5jOiBmYWxzZSxcblx0fSlcblx0OiBtYWtlU3VjY2Vzc1Jlc3VsdCh7XG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRzdGRpbyxcblx0XHRhbGwsXG5cdFx0aXBjT3V0cHV0LFxuXHRcdG9wdGlvbnMsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcbiIsICJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdpcy1wbGFpbi1vYmonO1xuaW1wb3J0IHtGRF9TUEVDSUZJQ19PUFRJT05TfSBmcm9tICcuLi9hcmd1bWVudHMvc3BlY2lmaWMuanMnO1xuXG4vLyBEZWVwIG1lcmdlIHNwZWNpZmljIG9wdGlvbnMgbGlrZSBgZW52YC4gU2hhbGxvdyBtZXJnZSB0aGUgb3RoZXIgb25lcy5cbmV4cG9ydCBjb25zdCBtZXJnZU9wdGlvbnMgPSAoYm91bmRPcHRpb25zLCBvcHRpb25zKSA9PiB7XG5cdGNvbnN0IG5ld09wdGlvbnMgPSBPYmplY3QuZnJvbUVudHJpZXMoXG5cdFx0T2JqZWN0LmVudHJpZXMob3B0aW9ucykubWFwKChbb3B0aW9uTmFtZSwgb3B0aW9uVmFsdWVdKSA9PiBbXG5cdFx0XHRvcHRpb25OYW1lLFxuXHRcdFx0bWVyZ2VPcHRpb24ob3B0aW9uTmFtZSwgYm91bmRPcHRpb25zW29wdGlvbk5hbWVdLCBvcHRpb25WYWx1ZSksXG5cdFx0XSksXG5cdCk7XG5cdHJldHVybiB7Li4uYm91bmRPcHRpb25zLCAuLi5uZXdPcHRpb25zfTtcbn07XG5cbmNvbnN0IG1lcmdlT3B0aW9uID0gKG9wdGlvbk5hbWUsIGJvdW5kT3B0aW9uVmFsdWUsIG9wdGlvblZhbHVlKSA9PiB7XG5cdGlmIChERUVQX09QVElPTlMuaGFzKG9wdGlvbk5hbWUpICYmIGlzUGxhaW5PYmplY3QoYm91bmRPcHRpb25WYWx1ZSkgJiYgaXNQbGFpbk9iamVjdChvcHRpb25WYWx1ZSkpIHtcblx0XHRyZXR1cm4gey4uLmJvdW5kT3B0aW9uVmFsdWUsIC4uLm9wdGlvblZhbHVlfTtcblx0fVxuXG5cdHJldHVybiBvcHRpb25WYWx1ZTtcbn07XG5cbmNvbnN0IERFRVBfT1BUSU9OUyA9IG5ldyBTZXQoWydlbnYnLCAuLi5GRF9TUEVDSUZJQ19PUFRJT05TXSk7XG4iLCAiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnaXMtcGxhaW4tb2JqJztcbmltcG9ydCB7bm9ybWFsaXplUGFyYW1ldGVyc30gZnJvbSAnLi9wYXJhbWV0ZXJzLmpzJztcbmltcG9ydCB7aXNUZW1wbGF0ZVN0cmluZywgcGFyc2VUZW1wbGF0ZXN9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuaW1wb3J0IHtleGVjYUNvcmVTeW5jfSBmcm9tICcuL21haW4tc3luYy5qcyc7XG5pbXBvcnQge2V4ZWNhQ29yZUFzeW5jfSBmcm9tICcuL21haW4tYXN5bmMuanMnO1xuaW1wb3J0IHttZXJnZU9wdGlvbnN9IGZyb20gJy4vYmluZC5qcyc7XG5cbi8vIFdyYXBzIGV2ZXJ5IGV4cG9ydGVkIG1ldGhvZHMgdG8gcHJvdmlkZSB0aGUgZm9sbG93aW5nIGZlYXR1cmVzOlxuLy8gIC0gdGVtcGxhdGUgc3RyaW5nIHN5bnRheDogZXhlY2FgY29tbWFuZCBhcmd1bWVudGBcbi8vICAtIG9wdGlvbnMgYmluZGluZzogYm91bmRFeGVjYSA9IGV4ZWNhKG9wdGlvbnMpXG4vLyAgLSBvcHRpb25hbCBhcmd1bWVudC9vcHRpb25zOiBleGVjYShmaWxlKSwgZXhlY2EoZmlsZSwgYXJncyksIGV4ZWNhKGZpbGUsIG9wdGlvbnMpLCBleGVjYShmaWxlLCBhcmdzLCBvcHRpb25zKVxuLy8gYG1hcEFyZ3VtZW50cygpYCBhbmQgYHNldEJvdW5kRXhlY2EoKWAgYWxsb3dzIGZvciBtZXRob2Qtc3BlY2lmaWMgbG9naWMuXG5leHBvcnQgY29uc3QgY3JlYXRlRXhlY2EgPSAobWFwQXJndW1lbnRzLCBib3VuZE9wdGlvbnMsIGRlZXBPcHRpb25zLCBzZXRCb3VuZEV4ZWNhKSA9PiB7XG5cdGNvbnN0IGNyZWF0ZU5lc3RlZCA9IChtYXBBcmd1bWVudHMsIGJvdW5kT3B0aW9ucywgc2V0Qm91bmRFeGVjYSkgPT4gY3JlYXRlRXhlY2EobWFwQXJndW1lbnRzLCBib3VuZE9wdGlvbnMsIGRlZXBPcHRpb25zLCBzZXRCb3VuZEV4ZWNhKTtcblx0Y29uc3QgYm91bmRFeGVjYSA9ICguLi5leGVjYUFyZ3VtZW50cykgPT4gY2FsbEJvdW5kRXhlY2Eoe1xuXHRcdG1hcEFyZ3VtZW50cyxcblx0XHRkZWVwT3B0aW9ucyxcblx0XHRib3VuZE9wdGlvbnMsXG5cdFx0c2V0Qm91bmRFeGVjYSxcblx0XHRjcmVhdGVOZXN0ZWQsXG5cdH0sIC4uLmV4ZWNhQXJndW1lbnRzKTtcblxuXHRpZiAoc2V0Qm91bmRFeGVjYSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0c2V0Qm91bmRFeGVjYShib3VuZEV4ZWNhLCBjcmVhdGVOZXN0ZWQsIGJvdW5kT3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gYm91bmRFeGVjYTtcbn07XG5cbmNvbnN0IGNhbGxCb3VuZEV4ZWNhID0gKHttYXBBcmd1bWVudHMsIGRlZXBPcHRpb25zID0ge30sIGJvdW5kT3B0aW9ucyA9IHt9LCBzZXRCb3VuZEV4ZWNhLCBjcmVhdGVOZXN0ZWR9LCBmaXJzdEFyZ3VtZW50LCAuLi5uZXh0QXJndW1lbnRzKSA9PiB7XG5cdGlmIChpc1BsYWluT2JqZWN0KGZpcnN0QXJndW1lbnQpKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZU5lc3RlZChtYXBBcmd1bWVudHMsIG1lcmdlT3B0aW9ucyhib3VuZE9wdGlvbnMsIGZpcnN0QXJndW1lbnQpLCBzZXRCb3VuZEV4ZWNhKTtcblx0fVxuXG5cdGNvbnN0IHtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zLCBpc1N5bmN9ID0gcGFyc2VBcmd1bWVudHMoe1xuXHRcdG1hcEFyZ3VtZW50cyxcblx0XHRmaXJzdEFyZ3VtZW50LFxuXHRcdG5leHRBcmd1bWVudHMsXG5cdFx0ZGVlcE9wdGlvbnMsXG5cdFx0Ym91bmRPcHRpb25zLFxuXHR9KTtcblx0cmV0dXJuIGlzU3luY1xuXHRcdD8gZXhlY2FDb3JlU3luYyhmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zKVxuXHRcdDogZXhlY2FDb3JlQXN5bmMoZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9ucywgY3JlYXRlTmVzdGVkKTtcbn07XG5cbmNvbnN0IHBhcnNlQXJndW1lbnRzID0gKHttYXBBcmd1bWVudHMsIGZpcnN0QXJndW1lbnQsIG5leHRBcmd1bWVudHMsIGRlZXBPcHRpb25zLCBib3VuZE9wdGlvbnN9KSA9PiB7XG5cdGNvbnN0IGNhbGxBcmd1bWVudHMgPSBpc1RlbXBsYXRlU3RyaW5nKGZpcnN0QXJndW1lbnQpXG5cdFx0PyBwYXJzZVRlbXBsYXRlcyhmaXJzdEFyZ3VtZW50LCBuZXh0QXJndW1lbnRzKVxuXHRcdDogW2ZpcnN0QXJndW1lbnQsIC4uLm5leHRBcmd1bWVudHNdO1xuXHRjb25zdCBbaW5pdGlhbEZpbGUsIGluaXRpYWxBcmd1bWVudHMsIGluaXRpYWxPcHRpb25zXSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMoLi4uY2FsbEFyZ3VtZW50cyk7XG5cdGNvbnN0IG1lcmdlZE9wdGlvbnMgPSBtZXJnZU9wdGlvbnMobWVyZ2VPcHRpb25zKGRlZXBPcHRpb25zLCBib3VuZE9wdGlvbnMpLCBpbml0aWFsT3B0aW9ucyk7XG5cdGNvbnN0IHtcblx0XHRmaWxlID0gaW5pdGlhbEZpbGUsXG5cdFx0Y29tbWFuZEFyZ3VtZW50cyA9IGluaXRpYWxBcmd1bWVudHMsXG5cdFx0b3B0aW9ucyA9IG1lcmdlZE9wdGlvbnMsXG5cdFx0aXNTeW5jID0gZmFsc2UsXG5cdH0gPSBtYXBBcmd1bWVudHMoe2ZpbGU6IGluaXRpYWxGaWxlLCBjb21tYW5kQXJndW1lbnRzOiBpbml0aWFsQXJndW1lbnRzLCBvcHRpb25zOiBtZXJnZWRPcHRpb25zfSk7XG5cdHJldHVybiB7XG5cdFx0ZmlsZSxcblx0XHRjb21tYW5kQXJndW1lbnRzLFxuXHRcdG9wdGlvbnMsXG5cdFx0aXNTeW5jLFxuXHR9O1xufTtcbiIsICIvLyBNYWluIGxvZ2ljIGZvciBgZXhlY2FDb21tYW5kKClgXG5leHBvcnQgY29uc3QgbWFwQ29tbWFuZEFzeW5jID0gKHtmaWxlLCBjb21tYW5kQXJndW1lbnRzfSkgPT4gcGFyc2VDb21tYW5kKGZpbGUsIGNvbW1hbmRBcmd1bWVudHMpO1xuXG4vLyBNYWluIGxvZ2ljIGZvciBgZXhlY2FDb21tYW5kU3luYygpYFxuZXhwb3J0IGNvbnN0IG1hcENvbW1hbmRTeW5jID0gKHtmaWxlLCBjb21tYW5kQXJndW1lbnRzfSkgPT4gKHsuLi5wYXJzZUNvbW1hbmQoZmlsZSwgY29tbWFuZEFyZ3VtZW50cyksIGlzU3luYzogdHJ1ZX0pO1xuXG4vLyBDb252ZXJ0IGBleGVjYUNvbW1hbmQoY29tbWFuZClgIGludG8gYGV4ZWNhKGZpbGUsIC4uLmNvbW1hbmRBcmd1bWVudHMpYFxuY29uc3QgcGFyc2VDb21tYW5kID0gKGNvbW1hbmQsIHVudXNlZEFyZ3VtZW50cykgPT4ge1xuXHRpZiAodW51c2VkQXJndW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgY29tbWFuZCBhbmQgaXRzIGFyZ3VtZW50cyBtdXN0IGJlIHBhc3NlZCBhcyBhIHNpbmdsZSBzdHJpbmc6ICR7Y29tbWFuZH0gJHt1bnVzZWRBcmd1bWVudHN9LmApO1xuXHR9XG5cblx0Y29uc3QgW2ZpbGUsIC4uLmNvbW1hbmRBcmd1bWVudHNdID0gcGFyc2VDb21tYW5kU3RyaW5nKGNvbW1hbmQpO1xuXHRyZXR1cm4ge2ZpbGUsIGNvbW1hbmRBcmd1bWVudHN9O1xufTtcblxuLy8gQ29udmVydCBgY29tbWFuZGAgc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgZmlsZSBvciBhcmd1bWVudHMgdG8gcGFzcyB0byAkYCR7Li4uZmlsZU9yQ29tbWFuZEFyZ3VtZW50c31gXG5leHBvcnQgY29uc3QgcGFyc2VDb21tYW5kU3RyaW5nID0gY29tbWFuZCA9PiB7XG5cdGlmICh0eXBlb2YgY29tbWFuZCAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgY29tbWFuZCBtdXN0IGJlIGEgc3RyaW5nOiAke1N0cmluZyhjb21tYW5kKX0uYCk7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkQ29tbWFuZCA9IGNvbW1hbmQudHJpbSgpO1xuXHRpZiAodHJpbW1lZENvbW1hbmQgPT09ICcnKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgdG9rZW5zID0gW107XG5cdGZvciAoY29uc3QgdG9rZW4gb2YgdHJpbW1lZENvbW1hbmQuc3BsaXQoU1BBQ0VTX1JFR0VYUCkpIHtcblx0XHQvLyBBbGxvdyBzcGFjZXMgdG8gYmUgZXNjYXBlZCBieSBhIGJhY2tzbGFzaCBpZiBub3QgbWVhbnQgYXMgYSBkZWxpbWl0ZXJcblx0XHRjb25zdCBwcmV2aW91c1Rva2VuID0gdG9rZW5zLmF0KC0xKTtcblx0XHRpZiAocHJldmlvdXNUb2tlbiAmJiBwcmV2aW91c1Rva2VuLmVuZHNXaXRoKCdcXFxcJykpIHtcblx0XHRcdC8vIE1lcmdlIHByZXZpb3VzIHRva2VuIHdpdGggY3VycmVudCBvbmVcblx0XHRcdHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0gPSBgJHtwcmV2aW91c1Rva2VuLnNsaWNlKDAsIC0xKX0gJHt0b2tlbn1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b2tlbnMucHVzaCh0b2tlbik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRva2Vucztcbn07XG5cbmNvbnN0IFNQQUNFU19SRUdFWFAgPSAvICsvZztcbiIsICIvLyBTZXRzIGAkLnN5bmNgIGFuZCBgJC5zYFxuZXhwb3J0IGNvbnN0IHNldFNjcmlwdFN5bmMgPSAoYm91bmRFeGVjYSwgY3JlYXRlTmVzdGVkLCBib3VuZE9wdGlvbnMpID0+IHtcblx0Ym91bmRFeGVjYS5zeW5jID0gY3JlYXRlTmVzdGVkKG1hcFNjcmlwdFN5bmMsIGJvdW5kT3B0aW9ucyk7XG5cdGJvdW5kRXhlY2EucyA9IGJvdW5kRXhlY2Euc3luYztcbn07XG5cbi8vIE1haW4gbG9naWMgZm9yIGAkYFxuZXhwb3J0IGNvbnN0IG1hcFNjcmlwdEFzeW5jID0gKHtvcHRpb25zfSkgPT4gZ2V0U2NyaXB0T3B0aW9ucyhvcHRpb25zKTtcblxuLy8gTWFpbiBsb2dpYyBmb3IgYCQuc3luY2BcbmNvbnN0IG1hcFNjcmlwdFN5bmMgPSAoe29wdGlvbnN9KSA9PiAoey4uLmdldFNjcmlwdE9wdGlvbnMob3B0aW9ucyksIGlzU3luYzogdHJ1ZX0pO1xuXG4vLyBgJGAgaXMgbGlrZSBgZXhlY2FgIGJ1dCB3aXRoIHNjcmlwdC1mcmllbmRseSBvcHRpb25zOiBge3N0ZGluOiAnaW5oZXJpdCcsIHByZWZlckxvY2FsOiB0cnVlfWBcbmNvbnN0IGdldFNjcmlwdE9wdGlvbnMgPSBvcHRpb25zID0+ICh7b3B0aW9uczogey4uLmdldFNjcmlwdFN0ZGluT3B0aW9uKG9wdGlvbnMpLCAuLi5vcHRpb25zfX0pO1xuXG5jb25zdCBnZXRTY3JpcHRTdGRpbk9wdGlvbiA9ICh7aW5wdXQsIGlucHV0RmlsZSwgc3RkaW99KSA9PiBpbnB1dCA9PT0gdW5kZWZpbmVkICYmIGlucHV0RmlsZSA9PT0gdW5kZWZpbmVkICYmIHN0ZGlvID09PSB1bmRlZmluZWRcblx0PyB7c3RkaW46ICdpbmhlcml0J31cblx0OiB7fTtcblxuLy8gV2hlbiB1c2luZyAkKC4uLikucGlwZSguLi4pLCBtb3N0IHNjcmlwdC1mcmllbmRseSBvcHRpb25zIHNob3VsZCBhcHBseSB0byBib3RoIGNvbW1hbmRzLlxuLy8gSG93ZXZlciwgc29tZSBvcHRpb25zIChsaWtlIGBzdGRpbjogJ2luaGVyaXQnYCkgd291bGQgY3JlYXRlIGlzc3VlcyB3aXRoIHBpcGluZywgaS5lLiBjYW5ub3QgYmUgZGVlcC5cbmV4cG9ydCBjb25zdCBkZWVwU2NyaXB0T3B0aW9ucyA9IHtwcmVmZXJMb2NhbDogdHJ1ZX07XG4iLCAiaW1wb3J0IHtjcmVhdGVFeGVjYX0gZnJvbSAnLi9saWIvbWV0aG9kcy9jcmVhdGUuanMnO1xuaW1wb3J0IHttYXBDb21tYW5kQXN5bmMsIG1hcENvbW1hbmRTeW5jfSBmcm9tICcuL2xpYi9tZXRob2RzL2NvbW1hbmQuanMnO1xuaW1wb3J0IHttYXBOb2RlfSBmcm9tICcuL2xpYi9tZXRob2RzL25vZGUuanMnO1xuaW1wb3J0IHttYXBTY3JpcHRBc3luYywgc2V0U2NyaXB0U3luYywgZGVlcFNjcmlwdE9wdGlvbnN9IGZyb20gJy4vbGliL21ldGhvZHMvc2NyaXB0LmpzJztcbmltcG9ydCB7Z2V0SXBjRXhwb3J0fSBmcm9tICcuL2xpYi9pcGMvbWV0aG9kcy5qcyc7XG5cbmV4cG9ydCB7cGFyc2VDb21tYW5kU3RyaW5nfSBmcm9tICcuL2xpYi9tZXRob2RzL2NvbW1hbmQuanMnO1xuZXhwb3J0IHtFeGVjYUVycm9yLCBFeGVjYVN5bmNFcnJvcn0gZnJvbSAnLi9saWIvcmV0dXJuL2ZpbmFsLWVycm9yLmpzJztcblxuZXhwb3J0IGNvbnN0IGV4ZWNhID0gY3JlYXRlRXhlY2EoKCkgPT4gKHt9KSk7XG5leHBvcnQgY29uc3QgZXhlY2FTeW5jID0gY3JlYXRlRXhlY2EoKCkgPT4gKHtpc1N5bmM6IHRydWV9KSk7XG5leHBvcnQgY29uc3QgZXhlY2FDb21tYW5kID0gY3JlYXRlRXhlY2EobWFwQ29tbWFuZEFzeW5jKTtcbmV4cG9ydCBjb25zdCBleGVjYUNvbW1hbmRTeW5jID0gY3JlYXRlRXhlY2EobWFwQ29tbWFuZFN5bmMpO1xuZXhwb3J0IGNvbnN0IGV4ZWNhTm9kZSA9IGNyZWF0ZUV4ZWNhKG1hcE5vZGUpO1xuZXhwb3J0IGNvbnN0ICQgPSBjcmVhdGVFeGVjYShtYXBTY3JpcHRBc3luYywge30sIGRlZXBTY3JpcHRPcHRpb25zLCBzZXRTY3JpcHRTeW5jKTtcblxuY29uc3Qge1xuXHRzZW5kTWVzc2FnZSxcblx0Z2V0T25lTWVzc2FnZSxcblx0Z2V0RWFjaE1lc3NhZ2UsXG5cdGdldENhbmNlbFNpZ25hbCxcbn0gPSBnZXRJcGNFeHBvcnQoKTtcbmV4cG9ydCB7XG5cdHNlbmRNZXNzYWdlLFxuXHRnZXRPbmVNZXNzYWdlLFxuXHRnZXRFYWNoTWVzc2FnZSxcblx0Z2V0Q2FuY2VsU2lnbmFsLFxufTtcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJY29uLCBNZW51QmFyRXh0cmEgfSBmcm9tIFwiQHJheWNhc3QvYXBpXCI7XG5cbmludGVyZmFjZSBOZXR3b3JrIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsb2NhdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaUZpKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPE5ldHdvcmsgfCBmYWxzZT4oZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZXhlY2EgfSA9IGF3YWl0IGltcG9ydChcImV4ZWNhXCIpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGF3YWl0IGV4ZWNhYC91c3Ivc2Jpbi9pcGNvbmZpZyBnZXRzdW1tYXJ5IGVuMGAucGlwZWBncmVwICR7YCBTU0lEIDpgfWA7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgZXhlY2FgL3Vzci9zYmluL25ldHdvcmtzZXR1cCAtZ2V0Y3VycmVudGxvY2F0aW9uYDtcblxuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgbmFtZTogbmFtZS5zdGRvdXQucmVwbGFjZShcIlNTSUQgOlwiLCBcIlwiKS50cmltKCksXG4gICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLnN0ZG91dC50cmltKCksXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgIHNldFN0YXRlKHsgbmFtZTogXCJcIiwgbG9jYXRpb246IFwiXCIgfSk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0YXR1cyA9IHN0YXRlICYmIHN0YXRlLm5hbWUubGVuZ3RoO1xuXG4gIHJldHVybiAoXG4gICAgPE1lbnVCYXJFeHRyYVxuICAgICAgaXNMb2FkaW5nPXtzdGF0ZSA9PT0gZmFsc2V9XG4gICAgICB0aXRsZT17c3RhdHVzID8gYCR7c3RhdGUubmFtZX0gb24gJHtzdGF0ZS5sb2NhdGlvbn1gIDogXCJObyBXaS1GaVwifVxuICAgICAgaWNvbj17c3RhdHVzID8geyBzb3VyY2U6IFwiXCIgfSA6IHsgc291cmNlOiBJY29uLldhcm5pbmcsIHRpbnRDb2xvcjogXCJvcmFuZ2VcIiB9fVxuICAgID48L01lbnVCYXJFeHRyYT5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVIsY0FBK0IsT0FBTztBQUM1QyxNQUFJLE9BQU8sVUFBVSxZQUFZLFVBQVUsTUFBTTtBQUNoRCxXQUFPO0FBQUEsRUFDUjtBQUVBLFFBQU0sWUFBWSxPQUFPLGVBQWUsS0FBSztBQUM3QyxVQUFRLGNBQWMsUUFBUSxjQUFjLE9BQU8sYUFBYSxPQUFPLGVBQWUsU0FBUyxNQUFNLFNBQVMsRUFBRSxPQUFPLGVBQWUsVUFBVSxFQUFFLE9BQU8sWUFBWTtBQUN0SztBQVBBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxxQkFHYSxzQkFZUCx1QkFJTyxnQkFLQTtBQXhCYjtBQUFBO0FBQUEsc0JBQTRCO0FBR3JCLElBQU0sdUJBQXVCLENBQUMsTUFBTSxTQUFTO0FBQ25ELFlBQU0sYUFBYSxpQkFBaUIsc0JBQXNCLElBQUksQ0FBQztBQUUvRCxVQUFJLE9BQU8sZUFBZSxVQUFVO0FBQ25DLGNBQU0sSUFBSSxVQUFVLEdBQUcsSUFBSSxvQ0FBb0MsVUFBVSxHQUFHO0FBQUEsTUFDN0U7QUFFQSxhQUFPO0FBQUEsSUFDUjtBQUlBLElBQU0sd0JBQXdCLFVBQVEsZUFBZSxJQUFJLElBQ3RELEtBQUssU0FBUyxJQUNkO0FBRUksSUFBTSxpQkFBaUIsVUFBUSxPQUFPLFNBQVMsWUFDbEQsUUFDQSxPQUFPLGVBQWUsSUFBSSxNQUFNLE9BQU87QUFHcEMsSUFBTSxtQkFBbUIsVUFBUSxnQkFBZ0IsVUFBTSwrQkFBYyxJQUFJLElBQUk7QUFBQTtBQUFBOzs7QUN4QnBGLElBS2E7QUFMYjtBQUFBO0FBQUE7QUFDQTtBQUlPLElBQU0sc0JBQXNCLENBQUMsU0FBUyxlQUFlLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTTtBQUNuRixZQUFNLFdBQVcscUJBQXFCLFNBQVMsZ0JBQWdCO0FBQy9ELFlBQU0sQ0FBQyxrQkFBa0IsT0FBTyxJQUFJLGNBQWMsWUFBWSxJQUMzRCxDQUFDLENBQUMsR0FBRyxZQUFZLElBQ2pCLENBQUMsY0FBYyxVQUFVO0FBRTVCLFVBQUksQ0FBQyxNQUFNLFFBQVEsZ0JBQWdCLEdBQUc7QUFDckMsY0FBTSxJQUFJLFVBQVUsOEVBQThFLGdCQUFnQixFQUFFO0FBQUEsTUFDckg7QUFFQSxVQUFJLGlCQUFpQixLQUFLLHFCQUFtQixPQUFPLG9CQUFvQixZQUFZLG9CQUFvQixJQUFJLEdBQUc7QUFDOUcsY0FBTSxJQUFJLFVBQVUsZ0RBQWdELGdCQUFnQixFQUFFO0FBQUEsTUFDdkY7QUFFQSxZQUFNLHNCQUFzQixpQkFBaUIsSUFBSSxNQUFNO0FBQ3ZELFlBQU0sbUJBQW1CLG9CQUFvQixLQUFLLHdCQUFzQixtQkFBbUIsU0FBUyxJQUFJLENBQUM7QUFDekcsVUFBSSxxQkFBcUIsUUFBVztBQUNuQyxjQUFNLElBQUksVUFBVSxnREFBZ0QsZ0JBQWdCLEVBQUU7QUFBQSxNQUN2RjtBQUVBLFVBQUksQ0FBQyxjQUFjLE9BQU8sR0FBRztBQUM1QixjQUFNLElBQUksVUFBVSw0Q0FBNEMsT0FBTyxFQUFFO0FBQUEsTUFDMUU7QUFFQSxhQUFPLENBQUMsVUFBVSxxQkFBcUIsT0FBTztBQUFBLElBQy9DO0FBQUE7QUFBQTs7O0FDOUJBLGdDQUVpQixnQkFFSixlQUdBLGNBRUEsb0JBRVAsYUFDQSxvQkFFQSxhQUNPLG9CQUVBLGNBS1Asc0JBZU8sa0JBUVAsc0JBSU8sbUJBWVA7QUE3RE47QUFBQTtBQUFBLGlDQUE0QjtBQUU1QixLQUFNLEVBQUMsVUFBVSxtQkFBa0IsT0FBTztBQUVuQyxJQUFNLGdCQUFnQixXQUFTLGVBQWUsS0FBSyxLQUFLLE1BQU07QUFHOUQsSUFBTSxlQUFlLFdBQVMsZUFBZSxLQUFLLEtBQUssTUFBTTtBQUU3RCxJQUFNLHFCQUFxQixZQUFVLElBQUksV0FBVyxPQUFPLFFBQVEsT0FBTyxZQUFZLE9BQU8sVUFBVTtBQUU5RyxJQUFNLGNBQWMsSUFBSSxZQUFZO0FBQ3BDLElBQU0scUJBQXFCLFlBQVUsWUFBWSxPQUFPLE1BQU07QUFFOUQsSUFBTSxjQUFjLElBQUksWUFBWTtBQUM3QixJQUFNLHFCQUFxQixnQkFBYyxZQUFZLE9BQU8sVUFBVTtBQUV0RSxJQUFNLGVBQWUsQ0FBQyxzQkFBc0IsYUFBYTtBQUMvRCxZQUFNLFVBQVUscUJBQXFCLHNCQUFzQixRQUFRO0FBQ25FLGFBQU8sUUFBUSxLQUFLLEVBQUU7QUFBQSxJQUN2QjtBQUVBLElBQU0sdUJBQXVCLENBQUMsc0JBQXNCLGFBQWE7QUFDaEUsVUFBSSxhQUFhLFVBQVUscUJBQXFCLE1BQU0sd0JBQXNCLE9BQU8sdUJBQXVCLFFBQVEsR0FBRztBQUNwSCxlQUFPO0FBQUEsTUFDUjtBQUVBLFlBQU0sVUFBVSxJQUFJLHlDQUFjLFFBQVE7QUFDMUMsWUFBTSxVQUFVLHFCQUNkLElBQUksd0JBQXNCLE9BQU8sdUJBQXVCLFdBQ3RELG1CQUFtQixrQkFBa0IsSUFDckMsa0JBQWtCLEVBQ3BCLElBQUksZ0JBQWMsUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUM3QyxZQUFNLGNBQWMsUUFBUSxJQUFJO0FBQ2hDLGFBQU8sZ0JBQWdCLEtBQUssVUFBVSxDQUFDLEdBQUcsU0FBUyxXQUFXO0FBQUEsSUFDL0Q7QUFFTyxJQUFNLG1CQUFtQiwwQkFBd0I7QUFDdkQsVUFBSSxxQkFBcUIsV0FBVyxLQUFLLGFBQWEscUJBQXFCLENBQUMsQ0FBQyxHQUFHO0FBQy9FLGVBQU8scUJBQXFCLENBQUM7QUFBQSxNQUM5QjtBQUVBLGFBQU8sa0JBQWtCLHFCQUFxQixvQkFBb0IsQ0FBQztBQUFBLElBQ3BFO0FBRUEsSUFBTSx1QkFBdUIsMEJBQXdCLHFCQUFxQixJQUFJLHdCQUFzQixPQUFPLHVCQUF1QixXQUMvSCxtQkFBbUIsa0JBQWtCLElBQ3JDLGtCQUFrQjtBQUVkLElBQU0sb0JBQW9CLGlCQUFlO0FBQy9DLFlBQU0sU0FBUyxJQUFJLFdBQVcsY0FBYyxXQUFXLENBQUM7QUFFeEQsVUFBSSxRQUFRO0FBQ1osaUJBQVcsY0FBYyxhQUFhO0FBQ3JDLGVBQU8sSUFBSSxZQUFZLEtBQUs7QUFDNUIsaUJBQVMsV0FBVztBQUFBLE1BQ3JCO0FBRUEsYUFBTztBQUFBLElBQ1I7QUFFQSxJQUFNLGdCQUFnQixpQkFBZTtBQUNwQyxVQUFJLGFBQWE7QUFDakIsaUJBQVcsY0FBYyxhQUFhO0FBQ3JDLHNCQUFjLFdBQVc7QUFBQSxNQUMxQjtBQUVBLGFBQU87QUFBQSxJQUNSO0FBQUE7QUFBQTs7O0FDcEVBLCtCQUthLGtCQUdBLGdCQXFCUCxlQXlCQSxvQkEyQ0EsWUFLQSxlQUVBLGNBV0EsaUJBdUJBO0FBMUlOO0FBQUE7QUFBQSxnQ0FBMkI7QUFDM0I7QUFDQTtBQUdPLElBQU0sbUJBQW1CLGVBQWEsTUFBTSxRQUFRLFNBQVMsS0FBSyxNQUFNLFFBQVEsVUFBVSxHQUFHO0FBRzdGLElBQU0saUJBQWlCLENBQUMsV0FBVyxnQkFBZ0I7QUFDekQsVUFBSSxTQUFTLENBQUM7QUFFZCxpQkFBVyxDQUFDLE9BQU8sUUFBUSxLQUFLLFVBQVUsUUFBUSxHQUFHO0FBQ3BELGlCQUFTLGNBQWM7QUFBQSxVQUN0QjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNELENBQUM7QUFBQSxNQUNGO0FBRUEsVUFBSSxPQUFPLFdBQVcsR0FBRztBQUN4QixjQUFNLElBQUksVUFBVSxtQ0FBbUM7QUFBQSxNQUN4RDtBQUVBLFlBQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLElBQUk7QUFDcEMsYUFBTyxDQUFDLE1BQU0sa0JBQWtCLENBQUMsQ0FBQztBQUFBLElBQ25DO0FBRUEsSUFBTSxnQkFBZ0IsQ0FBQyxFQUFDLFdBQVcsYUFBYSxRQUFRLE9BQU8sU0FBUSxNQUFNO0FBQzVFLFVBQUksYUFBYSxRQUFXO0FBQzNCLGNBQU0sSUFBSSxVQUFVLCtCQUErQixVQUFVLElBQUksS0FBSyxDQUFDLEVBQUU7QUFBQSxNQUMxRTtBQUVBLFlBQU0sRUFBQyxZQUFZLG9CQUFvQixvQkFBbUIsSUFBSSxtQkFBbUIsVUFBVSxVQUFVLElBQUksS0FBSyxDQUFDO0FBQy9HLFlBQU0sWUFBWSxhQUFhLFFBQVEsWUFBWSxrQkFBa0I7QUFFckUsVUFBSSxVQUFVLFlBQVksUUFBUTtBQUNqQyxlQUFPO0FBQUEsTUFDUjtBQUVBLFlBQU0sYUFBYSxZQUFZLEtBQUs7QUFDcEMsWUFBTSxtQkFBbUIsTUFBTSxRQUFRLFVBQVUsSUFDOUMsV0FBVyxJQUFJLENBQUFBLGdCQUFjLGdCQUFnQkEsV0FBVSxDQUFDLElBQ3hELENBQUMsZ0JBQWdCLFVBQVUsQ0FBQztBQUMvQixhQUFPLGFBQWEsV0FBVyxrQkFBa0IsbUJBQW1CO0FBQUEsSUFDckU7QUFRQSxJQUFNLHFCQUFxQixDQUFDLFVBQVUsZ0JBQWdCO0FBQ3JELFVBQUksWUFBWSxXQUFXLEdBQUc7QUFDN0IsZUFBTyxFQUFDLFlBQVksQ0FBQyxHQUFHLG9CQUFvQixPQUFPLHFCQUFxQixNQUFLO0FBQUEsTUFDOUU7QUFFQSxZQUFNLGFBQWEsQ0FBQztBQUNwQixVQUFJLGdCQUFnQjtBQUNwQixZQUFNLHFCQUFxQixXQUFXLElBQUksWUFBWSxDQUFDLENBQUM7QUFFeEQsZUFDSyxnQkFBZ0IsR0FBRyxXQUFXLEdBQ2xDLGdCQUFnQixTQUFTLFFBQ3pCLGlCQUFpQixHQUFHLFlBQVksR0FDL0I7QUFDRCxjQUFNLGVBQWUsWUFBWSxRQUFRO0FBQ3pDLFlBQUksV0FBVyxJQUFJLFlBQVksR0FBRztBQUNqQyxjQUFJLGtCQUFrQixlQUFlO0FBQ3BDLHVCQUFXLEtBQUssU0FBUyxNQUFNLGVBQWUsYUFBYSxDQUFDO0FBQUEsVUFDN0Q7QUFFQSwwQkFBZ0IsZ0JBQWdCO0FBQUEsUUFDakMsV0FBVyxpQkFBaUIsTUFBTTtBQUNqQyxnQkFBTSxtQkFBbUIsWUFBWSxXQUFXLENBQUM7QUFDakQsY0FBSSxxQkFBcUIsTUFBTTtBQUU5Qiw2QkFBaUI7QUFDakIsd0JBQVk7QUFBQSxVQUNiLFdBQVcscUJBQXFCLE9BQU8sWUFBWSxXQUFXLENBQUMsTUFBTSxLQUFLO0FBQ3pFLHVCQUFXLFlBQVksUUFBUSxLQUFLLFdBQVcsQ0FBQztBQUFBLFVBQ2pELE9BQU87QUFDTix3QkFBWSxjQUFjLGdCQUFnQixLQUFLO0FBQUEsVUFDaEQ7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUVBLFlBQU0sc0JBQXNCLGtCQUFrQixTQUFTO0FBQ3ZELFVBQUksQ0FBQyxxQkFBcUI7QUFDekIsbUJBQVcsS0FBSyxTQUFTLE1BQU0sYUFBYSxDQUFDO0FBQUEsTUFDOUM7QUFFQSxhQUFPLEVBQUMsWUFBWSxvQkFBb0Isb0JBQW1CO0FBQUEsSUFDNUQ7QUFFQSxJQUFNLGFBQWEsb0JBQUksSUFBSSxDQUFDLEtBQUssS0FBTSxNQUFNLElBQUksQ0FBQztBQUtsRCxJQUFNLGdCQUFnQixFQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUM7QUFFakMsSUFBTSxlQUFlLENBQUMsUUFBUSxZQUFZLGdCQUFnQixlQUN0RCxPQUFPLFdBQVcsS0FDbEIsV0FBVyxXQUFXLElBQ3ZCLENBQUMsR0FBRyxRQUFRLEdBQUcsVUFBVSxJQUN6QjtBQUFBLE1BQ0QsR0FBRyxPQUFPLE1BQU0sR0FBRyxFQUFFO0FBQUEsTUFDckIsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7QUFBQSxNQUNoQyxHQUFHLFdBQVcsTUFBTSxDQUFDO0FBQUEsSUFDdEI7QUFHRCxJQUFNLGtCQUFrQixnQkFBYztBQUNyQyxZQUFNLG1CQUFtQixPQUFPO0FBRWhDLFVBQUkscUJBQXFCLFVBQVU7QUFDbEMsZUFBTztBQUFBLE1BQ1I7QUFFQSxVQUFJLHFCQUFxQixVQUFVO0FBQ2xDLGVBQU8sT0FBTyxVQUFVO0FBQUEsTUFDekI7QUFFQSxVQUFJLGNBQWMsVUFBVSxNQUFNLFlBQVksY0FBYyxpQkFBaUIsYUFBYTtBQUN6RixlQUFPLG9CQUFvQixVQUFVO0FBQUEsTUFDdEM7QUFFQSxVQUFJLHNCQUFzQiwwQ0FBZ0IsT0FBTyxVQUFVLFNBQVMsS0FBSyxVQUFVLE1BQU0sb0JBQW9CO0FBRTVHLGNBQU0sSUFBSSxVQUFVLHdHQUF3RztBQUFBLE1BQzdIO0FBRUEsWUFBTSxJQUFJLFVBQVUsZUFBZSxnQkFBZ0IsMEJBQTBCO0FBQUEsSUFDOUU7QUFFQSxJQUFNLHNCQUFzQixDQUFDLEVBQUMsT0FBTSxNQUFNO0FBQ3pDLFVBQUksT0FBTyxXQUFXLFVBQVU7QUFDL0IsZUFBTztBQUFBLE1BQ1I7QUFFQSxVQUFJLGFBQWEsTUFBTSxHQUFHO0FBQ3pCLGVBQU8sbUJBQW1CLE1BQU07QUFBQSxNQUNqQztBQUVBLFVBQUksV0FBVyxRQUFXO0FBQ3pCLGNBQU0sSUFBSSxVQUFVLGlIQUFrSDtBQUFBLE1BQ3ZJO0FBRUEsWUFBTSxJQUFJLFVBQVUsZUFBZSxPQUFPLE1BQU0saUNBQWlDO0FBQUEsSUFDbEY7QUFBQTtBQUFBOzs7QUN4SkEseUJBRWEsa0JBQ0Esa0JBQ0EsMEJBQ0E7QUFMYjtBQUFBO0FBQUEsMEJBQW9CO0FBRWIsSUFBTSxtQkFBbUIsWUFBVSxpQkFBaUIsU0FBUyxNQUFNO0FBQ25FLElBQU0sbUJBQW1CLENBQUMsb0JBQUFDLFFBQVEsT0FBTyxvQkFBQUEsUUFBUSxRQUFRLG9CQUFBQSxRQUFRLE1BQU07QUFDdkUsSUFBTSwyQkFBMkIsQ0FBQyxTQUFTLFVBQVUsUUFBUTtBQUM3RCxJQUFNLGdCQUFnQixjQUFZLHlCQUF5QixRQUFRLEtBQUssU0FBUyxRQUFRO0FBQUE7QUFBQTs7O0FDTGhHLHNCQU9hLDRCQVVBLDJCQU1QLGdCQUlBLDBCQUlBLHVCQVdBLGVBRUEsZ0JBUUEsYUFvQk8sU0FlUCxXQUVBLGlCQUtBLGdCQUVBLGlCQVNPLHFCQUdBO0FBNUdiO0FBQUE7QUFBQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUtPLElBQU0sNkJBQTZCLGFBQVc7QUFDcEQsWUFBTSxjQUFjLEVBQUMsR0FBRyxRQUFPO0FBRS9CLGlCQUFXLGNBQWMscUJBQXFCO0FBQzdDLG9CQUFZLFVBQVUsSUFBSSwwQkFBMEIsU0FBUyxVQUFVO0FBQUEsTUFDeEU7QUFFQSxhQUFPO0FBQUEsSUFDUjtBQUVPLElBQU0sNEJBQTRCLENBQUMsU0FBUyxlQUFlO0FBQ2pFLFlBQU0sa0JBQWtCLE1BQU0sS0FBSyxFQUFDLFFBQVEsZUFBZSxPQUFPLElBQUksRUFBQyxDQUFDO0FBQ3hFLFlBQU0sY0FBYyx5QkFBeUIsUUFBUSxVQUFVLEdBQUcsaUJBQWlCLFVBQVU7QUFDN0YsYUFBTyxnQkFBZ0IsYUFBYSxVQUFVO0FBQUEsSUFDL0M7QUFFQSxJQUFNLGlCQUFpQixDQUFDLEVBQUMsTUFBSyxNQUFNLE1BQU0sUUFBUSxLQUFLLElBQ3BELEtBQUssSUFBSSxNQUFNLFFBQVEseUJBQXlCLE1BQU0sSUFDdEQseUJBQXlCO0FBRTVCLElBQU0sMkJBQTJCLENBQUMsYUFBYSxhQUFhLGVBQWUsY0FBYyxXQUFXLElBQ2pHLHNCQUFzQixhQUFhLGFBQWEsVUFBVSxJQUMxRCxZQUFZLEtBQUssV0FBVztBQUUvQixJQUFNLHdCQUF3QixDQUFDLGFBQWEsYUFBYSxlQUFlO0FBQ3ZFLGlCQUFXLFVBQVUsT0FBTyxLQUFLLFdBQVcsRUFBRSxLQUFLLGFBQWEsR0FBRztBQUNsRSxtQkFBVyxZQUFZLFlBQVksUUFBUSxZQUFZLFdBQVcsR0FBRztBQUNwRSxzQkFBWSxRQUFRLElBQUksWUFBWSxNQUFNO0FBQUEsUUFDM0M7QUFBQSxNQUNEO0FBRUEsYUFBTztBQUFBLElBQ1I7QUFHQSxJQUFNLGdCQUFnQixDQUFDLFNBQVMsWUFBWSxlQUFlLE9BQU8sSUFBSSxlQUFlLE9BQU8sSUFBSSxJQUFJO0FBRXBHLElBQU0saUJBQWlCLFlBQVU7QUFDaEMsVUFBSSxXQUFXLFlBQVksV0FBVyxVQUFVO0FBQy9DLGVBQU87QUFBQSxNQUNSO0FBRUEsYUFBTyxXQUFXLFFBQVEsSUFBSTtBQUFBLElBQy9CO0FBRUEsSUFBTSxjQUFjLENBQUMsUUFBUSxZQUFZLGdCQUFnQjtBQUN4RCxVQUFJLFdBQVcsT0FBTztBQUNyQixlQUFPLENBQUMsWUFBWSxTQUFTLENBQUM7QUFBQSxNQUMvQjtBQUVBLFlBQU0sV0FBVyxRQUFRLE1BQU07QUFDL0IsVUFBSSxhQUFhLFVBQWEsYUFBYSxHQUFHO0FBQzdDLGNBQU0sSUFBSSxVQUFVLElBQUksVUFBVSxJQUFJLE1BQU07QUFBQSxjQUNoQyxVQUFVLGNBQWMsVUFBVSxjQUFjLFVBQVUsV0FBVyxVQUFVLGNBQWMsVUFBVSxXQUFXLFVBQVUsb0JBQW9CO0FBQUEsTUFDN0o7QUFFQSxVQUFJLFlBQVksWUFBWSxRQUFRO0FBQ25DLGNBQU0sSUFBSSxVQUFVLElBQUksVUFBVSxJQUFJLE1BQU07QUFBQSxxRUFDdUI7QUFBQSxNQUNwRTtBQUVBLGFBQU8sYUFBYSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO0FBQUEsSUFDL0M7QUFHTyxJQUFNLFVBQVUsWUFBVTtBQUNoQyxVQUFJLFdBQVcsT0FBTztBQUNyQixlQUFPO0FBQUEsTUFDUjtBQUVBLFVBQUkseUJBQXlCLFNBQVMsTUFBTSxHQUFHO0FBQzlDLGVBQU8seUJBQXlCLFFBQVEsTUFBTTtBQUFBLE1BQy9DO0FBRUEsWUFBTSxlQUFlLFVBQVUsS0FBSyxNQUFNO0FBQzFDLFVBQUksaUJBQWlCLE1BQU07QUFDMUIsZUFBTyxPQUFPLGFBQWEsQ0FBQyxDQUFDO0FBQUEsTUFDOUI7QUFBQSxJQUNEO0FBRUEsSUFBTSxZQUFZO0FBRWxCLElBQU0sa0JBQWtCLENBQUMsYUFBYSxlQUFlLFlBQVksSUFBSSxpQkFBZSxnQkFBZ0IsU0FDakcsZ0JBQWdCLFVBQVUsSUFDMUIsV0FBVztBQUdkLElBQU0scUJBQWlCLDJCQUFTLE9BQU8sRUFBRSxVQUFVLFNBQVM7QUFFNUQsSUFBTSxrQkFBa0I7QUFBQSxNQUN2QixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixXQUFXLE1BQU8sTUFBTztBQUFBLE1BQ3pCLFNBQVM7QUFBQSxNQUNULG1CQUFtQjtBQUFBLElBQ3BCO0FBR08sSUFBTSxzQkFBc0IsQ0FBQyxTQUFTLFVBQVUsYUFBYSxXQUFXLG1CQUFtQjtBQUczRixJQUFNLHFCQUFxQixDQUFDLGFBQWEsYUFBYSxhQUFhLFFBQ3ZFLFlBQVksR0FBRyxFQUFFLElBQ2pCLFlBQVksUUFBUTtBQUFBO0FBQUE7OztBQzlHdkIsSUFHYSxXQUdBLGVBR0Esb0JBU1AsY0FRQSxxQkFJTyxtQkFFQTtBQWhDYjtBQUFBO0FBQUE7QUFHTyxJQUFNLFlBQVksQ0FBQyxFQUFDLFFBQU8sR0FBRyxhQUFhLGFBQWEsU0FBUyxRQUFRLE1BQU07QUFHL0UsSUFBTSxnQkFBZ0IsQ0FBQyxFQUFDLFFBQU8sR0FBRyxhQUFhLENBQUMsQ0FBQyxRQUFRLE9BQU8sRUFBRSxTQUFTLGFBQWEsU0FBUyxRQUFRLENBQUM7QUFHMUcsSUFBTSxxQkFBcUIsQ0FBQyxFQUFDLFFBQU8sR0FBRyxhQUFhO0FBQzFELFlBQU0sWUFBWSxhQUFhLFNBQVMsUUFBUTtBQUNoRCxhQUFPLGtCQUFrQixTQUFTLElBQUksWUFBWTtBQUFBLElBQ25EO0FBTUEsSUFBTSxlQUFlLENBQUMsU0FBUyxhQUFhLGFBQWEsU0FDdEQsb0JBQW9CLE9BQU8sSUFDM0IsbUJBQW1CLFNBQVMsUUFBUTtBQU12QyxJQUFNLHNCQUFzQixhQUFXLFFBQVEsS0FBSyxlQUFhLGtCQUFrQixTQUFTLENBQUMsS0FDekYsZUFBZSxTQUFTLGVBQWEsUUFBUSxTQUFTLFNBQVMsQ0FBQztBQUc3RCxJQUFNLG9CQUFvQixlQUFhLE9BQU8sY0FBYztBQUU1RCxJQUFNLGlCQUFpQixDQUFDLFFBQVEsU0FBUyxNQUFNO0FBQUE7QUFBQTs7O0FDaEN0RCxJQUFBQyxzQkFDQUMsbUJBR2EsYUFVQSxhQUtQLHlCQUVBLHdCQW1CQSxzQkFnQkEscUJBSUEsZ0JBVUEsY0FPQSxhQVVBO0FBdkZOO0FBQUE7QUFBQSxJQUFBRCx1QkFBdUI7QUFDdkIsSUFBQUMsb0JBQXVDO0FBR2hDLElBQU0sY0FBYyxDQUFDLFVBQVUsaUJBQWlCO0FBQ3RELFlBQU0sbUJBQW1CLENBQUMsVUFBVSxHQUFHLFlBQVk7QUFDbkQsWUFBTSxVQUFVLGlCQUFpQixLQUFLLEdBQUc7QUFDekMsWUFBTSxpQkFBaUIsaUJBQ3JCLElBQUkscUJBQW1CLFlBQVksd0JBQXdCLGVBQWUsQ0FBQyxDQUFDLEVBQzVFLEtBQUssR0FBRztBQUNWLGFBQU8sRUFBQyxTQUFTLGVBQWM7QUFBQSxJQUNoQztBQUdPLElBQU0sY0FBYyxlQUFTLDRDQUF5QixLQUFLLEVBQ2hFLE1BQU0sSUFBSSxFQUNWLElBQUksVUFBUSx3QkFBd0IsSUFBSSxDQUFDLEVBQ3pDLEtBQUssSUFBSTtBQUVYLElBQU0sMEJBQTBCLFVBQVEsS0FBSyxXQUFXLHFCQUFxQixlQUFhLHVCQUF1QixTQUFTLENBQUM7QUFFM0gsSUFBTSx5QkFBeUIsZUFBYTtBQUMzQyxZQUFNLGVBQWUsZUFBZSxTQUFTO0FBQzdDLFVBQUksaUJBQWlCLFFBQVc7QUFDL0IsZUFBTztBQUFBLE1BQ1I7QUFFQSxZQUFNLFlBQVksVUFBVSxZQUFZLENBQUM7QUFDekMsWUFBTSxlQUFlLFVBQVUsU0FBUyxFQUFFO0FBQzFDLGFBQU8sYUFBYSxlQUNqQixNQUFNLGFBQWEsU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUNuQyxNQUFNLFlBQVk7QUFBQSxJQUN0QjtBQVFBLElBQU0sdUJBQXVCLE1BQU07QUFDbEMsVUFBSTtBQUlILGVBQU8sSUFBSSxPQUFPLDZCQUE2QixJQUFJO0FBQUEsTUFDcEQsUUFBUTtBQU1QLGVBQU87QUFBQSxNQUNSO0FBQUEsSUFDRDtBQUVBLElBQU0sc0JBQXNCLHFCQUFxQjtBQUlqRCxJQUFNLGlCQUFpQjtBQUFBLE1BQ3RCLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQU07QUFBQSxJQUNQO0FBR0EsSUFBTSxlQUFlO0FBT3JCLElBQU0sY0FBYyxxQkFBbUI7QUFDdEMsVUFBSSxpQkFBaUIsS0FBSyxlQUFlLEdBQUc7QUFDM0MsZUFBTztBQUFBLE1BQ1I7QUFFQSxhQUFPLGtDQUFhLFVBQ2pCLElBQUksZ0JBQWdCLFdBQVcsS0FBSyxJQUFJLENBQUMsTUFDekMsSUFBSSxnQkFBZ0IsV0FBVyxLQUFNLE9BQVUsQ0FBQztBQUFBLElBQ3BEO0FBRUEsSUFBTSxtQkFBbUI7QUFBQTtBQUFBOzs7QUNyRlYsU0FBUixxQkFBc0M7QUFDNUMsUUFBTSxFQUFDLElBQUcsSUFBSSxxQkFBQUM7QUFDZCxRQUFNLEVBQUMsTUFBTSxhQUFZLElBQUk7QUFFN0IsTUFBSSxxQkFBQUEsUUFBUSxhQUFhLFNBQVM7QUFDakMsV0FBTyxTQUFTO0FBQUEsRUFDakI7QUFFQSxTQUFPLFFBQVEsSUFBSSxVQUFVLEtBQ3pCLFFBQVEsSUFBSSxnQkFBZ0IsS0FDNUIsSUFBSSxlQUFlLGtCQUNuQixpQkFBaUIsc0JBQ2pCLGlCQUFpQixZQUNqQixTQUFTLG9CQUNULFNBQVMsZUFDVCxTQUFTLGtCQUNULFNBQVMsMkJBQ1QsSUFBSSxzQkFBc0I7QUFDL0I7QUFwQkEsSUFBQUM7QUFBQTtBQUFBO0FBQUEsSUFBQUEsdUJBQW9CO0FBQUE7QUFBQTs7O0FDQXBCLElBRU0sUUFxTUEsb0JBcUNBLHdCQXFDTyxhQUNBLGlCQUVQLGVBQ0EsU0FDQyxpQkFFRDtBQXhSTjtBQUFBO0FBQUE7QUFFQSxJQUFNLFNBQVM7QUFBQSxNQUNkLG9CQUFvQjtBQUFBLE1BQ3BCLG9CQUFvQjtBQUFBLE1BQ3BCLFFBQVE7QUFBQSxNQUNSLGlCQUFpQjtBQUFBLE1BQ2pCLG1CQUFtQjtBQUFBLE1BQ25CLGtCQUFrQjtBQUFBLE1BQ2xCLFdBQVc7QUFBQSxNQUNYLGNBQWM7QUFBQSxNQUNkLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxNQUNkLFlBQVk7QUFBQSxNQUNaLGlCQUFpQjtBQUFBLE1BQ2pCLGNBQWM7QUFBQSxNQUNkLG1CQUFtQjtBQUFBLE1BQ25CLG1CQUFtQjtBQUFBLE1BQ25CLG9CQUFvQjtBQUFBLE1BQ3BCLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLGlCQUFpQjtBQUFBLE1BQ2pCLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLE1BQ2hCLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLE1BQ2hCLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQSxNQUNmLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQSxNQUNmLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxNQUNmLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGtCQUFrQjtBQUFBLE1BQ2xCLG9CQUFvQjtBQUFBLE1BQ3BCLHFCQUFxQjtBQUFBLE1BQ3JCLHFCQUFxQjtBQUFBLE1BQ3JCLHFCQUFxQjtBQUFBLE1BQ3JCLHFCQUFxQjtBQUFBLE1BQ3JCLHFCQUFxQjtBQUFBLE1BQ3JCLHFCQUFxQjtBQUFBLE1BQ3JCLHFCQUFxQjtBQUFBLE1BQ3JCLHFCQUFxQjtBQUFBLE1BQ3JCLHFCQUFxQjtBQUFBLE1BQ3JCLHFCQUFxQjtBQUFBLE1BQ3JCLHNCQUFzQjtBQUFBLE1BQ3RCLHNCQUFz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UCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFDQTtBQUFBLFFBQ0EsVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLFFBQ1QsUUFBTztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsUUFDVCxRQUFPO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxRQUNULFFBQU87QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFB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RSxRQUFRLGdCQUFLLFNBQVMsV0FBVyxTQUFTO0FBQUE7QUFBQSxFQUM3RTtBQUVMOyIsCiAgIm5hbWVzIjogWyJleHByZXNzaW9uIiwgInByb2Nlc3MiLCAiaW1wb3J0X25vZGVfcHJvY2VzcyIsICJpbXBvcnRfbm9kZV91dGlsIiwgInByb2Nlc3MiLCAiaW1wb3J0X25vZGVfcHJvY2VzcyIsICJ0dHkiLCAiaW1wb3J0X25vZGVfdXRpbCIsICJpbXBvcnRfbm9kZV9wcm9jZXNzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInBhdGgiLCAiaSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJwYXRoIiwgInUiLCAibyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJwYXRoIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInBhdGgiLCAiaSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJwYXRoS2V5IiwgInBsYXRmb3JtIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInBhdGgiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicGF0aCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJwYXRoIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInNwYXduIiwgInNwYXduU3luYyIsICJwbGF0Zm9ybSIsICJpbml0X2RlZmF1bHQiLCAicGF0aCIsICJpbXBvcnRfbm9kZV91dGlsIiwgImltcG9ydF9ub2RlX2NoaWxkX3Byb2Nlc3MiLCAiaW1wb3J0X25vZGVfdXJsIiwgImluaXRfZGVmYXVsdCIsICJleGVjRmlsZUNhbGxiYWNrIiwgImltcG9ydF9ub2RlX3Byb2Nlc3MiLCAiaW1wb3J0X25vZGVfcGF0aCIsICJwcm9jZXNzIiwgImV4ZWNQYXRoIiwgInBhdGgiLCAic2lnbmFscyIsICJpbXBvcnRfbm9kZV9vcyIsICJzaWduYWxzIiwgImltcG9ydF9ub2RlX29zIiwgIm5vcm1hbGl6ZVNpZ25hbCIsICJpc0Nvbm5lY3RlZCIsICJpbXBvcnRfbm9kZV9ldmVudHMiLCAiaW1wb3J0X25vZGVfZXZlbnRzIiwgImltcG9ydF9wcm9taXNlcyIsICJpbXBvcnRfbm9kZV9ldmVudHMiLCAiaW1wb3J0X25vZGVfZXZlbnRzIiwgImltcG9ydF9ub2RlX3V0aWwiLCAiaW1wb3J0X3Byb21pc2VzIiwgImluaXRfZ3JhY2VmdWwiLCAiaW1wb3J0X3Byb21pc2VzIiwgImltcG9ydF9ub2RlX3Byb2Nlc3MiLCAiaW1wb3J0X25vZGVfcGF0aCIsICJpbml0X25vZGUiLCAicGF0aCIsICJjb3JyZWN0RW5jb2RpbmciLCAiaW1wb3J0X25vZGVfcGF0aCIsICJpbXBvcnRfbm9kZV9wcm9jZXNzIiwgInBhdGgiLCAicHJvY2VzcyIsICJpbXBvcnRfbm9kZV9wYXRoIiwgImltcG9ydF9ub2RlX3Byb2Nlc3MiLCAiaW5pdF9ncmFjZWZ1bCIsICJpbml0X25vZGUiLCAiY3Jvc3NTcGF3biIsICJwcm9jZXNzIiwgInBhdGgiLCAib2JqZWN0VG9TdHJpbmciLCAiaWRlbnRpdHkiLCAiaWRlbnRpdHkiLCAidGV4dEVuY29kZXIiLCAidGV4dERlY29kZXIiLCAiaWRlbnRpdHkiLCAiaW1wb3J0X25vZGVfZXZlbnRzIiwgImltcG9ydF9wcm9taXNlcyIsICJpbXBvcnRfbm9kZV91dGlsIiwgIm1pbGxpc2Vjb25kcyIsICJjb3VudCIsICJpc1JlYWRhYmxlU3RyZWFtIiwgImlzV3JpdGFibGVTdHJlYW0iLCAiaW1wb3J0X25vZGVfcHJvY2VzcyIsICJpc1dyaXRhYmxlU3RyZWFtIiwgInByb2Nlc3MiLCAiaW5pdF9hcnJheSIsICJhZGREZWZhdWx0VmFsdWUiLCAiaW5pdF9hcnJheSIsICJpbXBvcnRfbm9kZV9mcyIsICJpbXBvcnRfbm9kZV90dHkiLCAidHR5IiwgImFkZFByb3BlcnRpZXMiLCAib3B0aW9uTmFtZSIsICJ2YWx1ZSIsICJpbXBvcnRfbm9kZV9mcyIsICJzdHJpcEZpbmFsTmV3bGluZSIsICJMRiIsICJpbXBvcnRfbm9kZV9idWZmZXIiLCAiaW1wb3J0X25vZGVfc3RyaW5nX2RlY29kZXIiLCAidGV4dEVuY29kZXIiLCAiaW1wb3J0X25vZGVfdXRpbCIsICJpZGVudGl0eUdlbmVyYXRvciIsICJlbmNvZGluZyIsICJnZW5lcmF0b3JzIiwgImltcG9ydF9ub2RlX2ZzIiwgInN0cmlwRmluYWxOZXdsaW5lIiwgInBhdGgiLCAiaW1wb3J0X25vZGVfZXZlbnRzIiwgImltcG9ydF9ub2RlX2NoaWxkX3Byb2Nlc3MiLCAiaW1wb3J0X25vZGVfZXZlbnRzIiwgInRocm93T25EaXNjb25uZWN0IiwgImltcG9ydF9ub2RlX2V2ZW50cyIsICJpbXBvcnRfbm9kZV9wcm9jZXNzIiwgInByb2Nlc3MiLCAiaW1wb3J0X25vZGVfY2hpbGRfcHJvY2VzcyIsICJpbXBvcnRfbm9kZV9zdHJlYW0iLCAiaW1wb3J0X25vZGVfZnMiLCAiaW1wb3J0X25vZGVfYnVmZmVyIiwgImltcG9ydF9ub2RlX3N0cmVhbSIsICJhZGRQcm9wZXJ0aWVzIiwgImltcG9ydF9ub2RlX2V2ZW50cyIsICJpbXBvcnRfbm9kZV9zdHJlYW0iLCAiaW1wb3J0X3Byb21pc2VzIiwgIm5vb3AiLCAiUGFzc1Rocm91Z2hTdHJlYW0iLCAiYWJvcnRlZCIsICJpbmNyZW1lbnQiLCAiaW1wb3J0X3Byb21pc2VzIiwgImluaXRfc2lnbmFscyIsICJnbG9iYWwiLCAicHJvY2VzcyIsICJpbml0X3NpZ25hbHMiLCAiaSIsICJjb3VudCIsICJhIiwgImltcG9ydF9ub2RlX2V2ZW50cyIsICJpbXBvcnRfcHJvbWlzZXMiLCAiaW1wb3J0X25vZGVfdXRpbCIsICJpbXBvcnRfbm9kZV9ldmVudHMiLCAiaW1wb3J0X25vZGVfc3RyZWFtIiwgInN0cmlwRmluYWxOZXdsaW5lIiwgImltcG9ydF9wcm9taXNlcyIsICJnZXRTdHJlYW1Db250ZW50cyIsICJpbml0X2NvbnRlbnRzIiwgInN0cmlwRmluYWxOZXdsaW5lIiwgImltcG9ydF9wcm9taXNlcyIsICJpbml0X2NvbnRlbnRzIiwgInN0cmlwRmluYWxOZXdsaW5lIiwgInN0cmlwRmluYWxOZXdsaW5lIiwgImlzVmVyYm9zZSIsICJpbXBvcnRfbm9kZV9ldmVudHMiLCAiaW5pdF9ncmFjZWZ1bCIsICJpbml0X2NvbnRlbnRzIiwgInN0cmlwRmluYWxOZXdsaW5lIiwgImltcG9ydF9wcm9taXNlcyIsICJpbXBvcnRfbm9kZV9zdHJlYW0iLCAiaW1wb3J0X25vZGVfdXRpbCIsICJyZWFkYWJsZSIsICJpbXBvcnRfbm9kZV9zdHJlYW0iLCAiaW1wb3J0X25vZGVfdXRpbCIsICJ3cml0YWJsZSIsICJpbXBvcnRfbm9kZV9zdHJlYW0iLCAiaW1wb3J0X25vZGVfdXRpbCIsICJkdXBsZXgiLCAiaW1wb3J0X25vZGVfZXZlbnRzIiwgImltcG9ydF9ub2RlX2NoaWxkX3Byb2Nlc3MiLCAibWFwQXJndW1lbnRzIiwgImJvdW5kT3B0aW9ucyIsICJzZXRCb3VuZEV4ZWNhIiwgImluaXRfY29tbWFuZCIsICJnZXRDYW5jZWxTaWduYWwiLCAiZ2V0RWFjaE1lc3NhZ2UiLCAiZ2V0T25lTWVzc2FnZSIsICJzZW5kTWVzc2FnZSIsICJpbml0X2NvbW1hbmQiLCAiaW5pdF9ub2RlIiwgImV4ZWNhIl0KfQo=
