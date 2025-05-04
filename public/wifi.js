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
        return (0, import_node_child_process3.spawnSync)(file, commandArguments, normalizedOptions);
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
        subprocess = (0, import_node_child_process5.spawn)(file, commandArguments, options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmovaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvYXJndW1lbnRzL2ZpbGUtdXJsLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvcGFyYW1ldGVycy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi91dGlscy91aW50LWFycmF5LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvdGVtcGxhdGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdXRpbHMvc3RhbmRhcmQtc3RyZWFtLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2FyZ3VtZW50cy9zcGVjaWZpYy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL3ZhbHVlcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9hcmd1bWVudHMvZXNjYXBlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvaXMtdW5pY29kZS1zdXBwb3J0ZWQvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9maWd1cmVzL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMveW9jdG9jb2xvcnMvYmFzZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL3lvY3RvY29sb3JzL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3ZlcmJvc2UvZGVmYXVsdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL2N1c3RvbS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL2xvZy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL3N0YXJ0LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3ZlcmJvc2UvaW5mby5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXR1cm4vZHVyYXRpb24uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvYXJndW1lbnRzL2NvbW1hbmQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9pc2V4ZS93aW5kb3dzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvaXNleGUvbW9kZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2lzZXhlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvd2hpY2gvd2hpY2guanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9wYXRoLWtleS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nyb3NzLXNwYXduL2xpYi91dGlsL3Jlc29sdmVDb21tYW5kLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY3Jvc3Mtc3Bhd24vbGliL3V0aWwvZXNjYXBlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvc2hlYmFuZy1yZWdleC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL3NoZWJhbmctY29tbWFuZC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nyb3NzLXNwYXduL2xpYi91dGlsL3JlYWRTaGViYW5nLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY3Jvc3Mtc3Bhd24vbGliL3BhcnNlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvY3Jvc3Mtc3Bhd24vbGliL2Vub2VudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2Nyb3NzLXNwYXduL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvbnBtLXJ1bi1wYXRoL25vZGVfbW9kdWxlcy9wYXRoLWtleS9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL3VuaWNvcm4tbWFnaWMvZGVmYXVsdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL3VuaWNvcm4tbWFnaWMvbm9kZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL25wbS1ydW4tcGF0aC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXR1cm4vZmluYWwtZXJyb3IuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9odW1hbi1zaWduYWxzL2J1aWxkL3NyYy9yZWFsdGltZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2h1bWFuLXNpZ25hbHMvYnVpbGQvc3JjL2NvcmUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9odW1hbi1zaWduYWxzL2J1aWxkL3NyYy9zaWduYWxzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvaHVtYW4tc2lnbmFscy9idWlsZC9zcmMvbWFpbi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90ZXJtaW5hdGUvc2lnbmFsLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3Rlcm1pbmF0ZS9raWxsLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3V0aWxzL2Fib3J0LXNpZ25hbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90ZXJtaW5hdGUvY2FuY2VsLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy92YWxpZGF0aW9uLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3V0aWxzL2RlZmVycmVkLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2FyZ3VtZW50cy9mZC1vcHRpb25zLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3V0aWxzL21heC1saXN0ZW5lcnMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL3JlZmVyZW5jZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pcGMvaW5jb21pbmcuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL2ZvcndhcmQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL3N0cmljdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pcGMvb3V0Z29pbmcuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL3NlbmQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL2dyYWNlZnVsLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3Rlcm1pbmF0ZS9ncmFjZWZ1bC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90ZXJtaW5hdGUvdGltZW91dC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9tZXRob2RzL25vZGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL2lwYy1pbnB1dC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9hcmd1bWVudHMvZW5jb2Rpbmctb3B0aW9uLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2FyZ3VtZW50cy9jd2QuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvYXJndW1lbnRzL29wdGlvbnMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9zdHJpcC1maW5hbC1uZXdsaW5lL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvaXMtc3RyZWFtL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvQHNlYy1hbnQvcmVhZGFibGUtc3RyZWFtL2Rpc3QvcG9ueWZpbGwvYXN5bmNJdGVyYXRvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL0BzZWMtYW50L3JlYWRhYmxlLXN0cmVhbS9kaXN0L3BvbnlmaWxsL2Zyb21BbnlJdGVyYWJsZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL0BzZWMtYW50L3JlYWRhYmxlLXN0cmVhbS9kaXN0L3BvbnlmaWxsL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9zb3VyY2Uvc3RyZWFtLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9zb3VyY2UvY29udGVudHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9nZXQtc3RyZWFtL3NvdXJjZS91dGlscy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2dldC1zdHJlYW0vc291cmNlL2FycmF5LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9zb3VyY2UvYXJyYXktYnVmZmVyLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9zb3VyY2Uvc3RyaW5nLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZ2V0LXN0cmVhbS9zb3VyY2UvZXhwb3J0cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2dldC1zdHJlYW0vc291cmNlL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lvL21heC1idWZmZXIuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcmV0dXJuL21lc3NhZ2UuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcmV0dXJuL3Jlc3VsdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL3BhcnNlLW1zL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvcHJldHR5LW1zL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3ZlcmJvc2UvZXJyb3IuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdmVyYm9zZS9jb21wbGV0ZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXR1cm4vcmVqZWN0LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3N0ZGlvL3R5cGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdHJhbnNmb3JtL29iamVjdC1tb2RlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3RyYW5zZm9ybS9ub3JtYWxpemUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvc3RkaW8vZGlyZWN0aW9uLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lwYy9hcnJheS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9zdGRpby9zdGRpby1vcHRpb24uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvc3RkaW8vbmF0aXZlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3N0ZGlvL2lucHV0LW9wdGlvbi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9zdGRpby9kdXBsaWNhdGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvc3RkaW8vaGFuZGxlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3N0ZGlvL2hhbmRsZS1zeW5jLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2lvL3N0cmlwLW5ld2xpbmUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdHJhbnNmb3JtL3NwbGl0LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3RyYW5zZm9ybS92YWxpZGF0ZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90cmFuc2Zvcm0vZW5jb2RpbmctdHJhbnNmb3JtLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3RyYW5zZm9ybS9ydW4tYXN5bmMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdHJhbnNmb3JtL3J1bi1zeW5jLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3RyYW5zZm9ybS9nZW5lcmF0b3IuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaW8vaW5wdXQtc3luYy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi92ZXJib3NlL291dHB1dC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pby9vdXRwdXQtc3luYy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXNvbHZlL2FsbC1zeW5jLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3Jlc29sdmUvZXhpdC1hc3luYy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXNvbHZlL2V4aXQtc3luYy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9tZXRob2RzL21haW4tc3luYy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pcGMvZ2V0LW9uZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pcGMvZ2V0LWVhY2guanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL21ldGhvZHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcmV0dXJuL2Vhcmx5LWVycm9yLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3N0ZGlvL2hhbmRsZS1hc3luYy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL0BzaW5kcmVzb3JodXMvbWVyZ2Utc3RyZWFtcy9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pby9waXBlbGluZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pby9vdXRwdXQtYXN5bmMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9zaWduYWwtZXhpdC9zcmMvc2lnbmFscy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL3NpZ25hbC1leGl0L3NyYy9pbmRleC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi90ZXJtaW5hdGUvY2xlYW51cC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9waXBlL3BpcGUtYXJndW1lbnRzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3BpcGUvdGhyb3cuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcGlwZS9zZXF1ZW5jZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9waXBlL3N0cmVhbWluZy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9waXBlL2Fib3J0LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3BpcGUvc2V0dXAuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaW8vaXRlcmF0ZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9pby9jb250ZW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXNvbHZlL3dhaXQtc3RyZWFtLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL3Jlc29sdmUvc3RkaW8uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvcmVzb2x2ZS9hbGwtYXN5bmMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvdmVyYm9zZS9pcGMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvaXBjL2J1ZmZlci1tZXNzYWdlcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9yZXNvbHZlL3dhaXQtc3VicHJvY2Vzcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9jb252ZXJ0L2NvbmN1cnJlbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvY29udmVydC9zaGFyZWQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvY29udmVydC9yZWFkYWJsZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9jb252ZXJ0L3dyaXRhYmxlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2NvbnZlcnQvZHVwbGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL2NvbnZlcnQvaXRlcmFibGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvY29udmVydC9hZGQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvbWV0aG9kcy9wcm9taXNlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvbWFpbi1hc3luYy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvaG9tZS9wbHVnaW5zL2NvbGxlY3Rpb24vcmF5Y2FzdC9jb21wYW5pb24vbm9kZV9tb2R1bGVzL2V4ZWNhL2xpYi9tZXRob2RzL2JpbmQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvbWV0aG9kcy9jcmVhdGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL25vZGVfbW9kdWxlcy9leGVjYS9saWIvbWV0aG9kcy9jb21tYW5kLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvbGliL21ldGhvZHMvc2NyaXB0LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9ob21lL3BsdWdpbnMvY29sbGVjdGlvbi9yYXljYXN0L2NvbXBhbmlvbi9ub2RlX21vZHVsZXMvZXhlY2EvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2hvbWUvcGx1Z2lucy9jb2xsZWN0aW9uL3JheWNhc3QvY29tcGFuaW9uL3NyYy93aWZpLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG5cdHJldHVybiAocHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKSA9PT0gbnVsbCkgJiYgIShTeW1ib2wudG9TdHJpbmdUYWcgaW4gdmFsdWUpICYmICEoU3ltYm9sLml0ZXJhdG9yIGluIHZhbHVlKTtcbn1cbiIsICJpbXBvcnQge2ZpbGVVUkxUb1BhdGh9IGZyb20gJ25vZGU6dXJsJztcblxuLy8gQWxsb3cgc29tZSBhcmd1bWVudHMvb3B0aW9ucyB0byBiZSBlaXRoZXIgYSBmaWxlIHBhdGggc3RyaW5nIG9yIGEgZmlsZSBVUkxcbmV4cG9ydCBjb25zdCBzYWZlTm9ybWFsaXplRmlsZVVybCA9IChmaWxlLCBuYW1lKSA9PiB7XG5cdGNvbnN0IGZpbGVTdHJpbmcgPSBub3JtYWxpemVGaWxlVXJsKG5vcm1hbGl6ZURlbm9FeGVjUGF0aChmaWxlKSk7XG5cblx0aWYgKHR5cGVvZiBmaWxlU3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYCR7bmFtZX0gbXVzdCBiZSBhIHN0cmluZyBvciBhIGZpbGUgVVJMOiAke2ZpbGVTdHJpbmd9LmApO1xuXHR9XG5cblx0cmV0dXJuIGZpbGVTdHJpbmc7XG59O1xuXG4vLyBJbiBEZW5vIG5vZGU6cHJvY2VzcyBleGVjUGF0aCBpcyBhIHNwZWNpYWwgb2JqZWN0LCBub3QganVzdCBhIHN0cmluZzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kZW5vbGFuZC9kZW5vL2Jsb2IvZjQ2MDE4OGU1ODNmMDAxNDQwMDBhYTBkOGFkZTA4MjE4ZDQ3YzNjMS9leHQvbm9kZS9wb2x5ZmlsbHMvcHJvY2Vzcy50cyNMMzQ0XG5jb25zdCBub3JtYWxpemVEZW5vRXhlY1BhdGggPSBmaWxlID0+IGlzRGVub0V4ZWNQYXRoKGZpbGUpXG5cdD8gZmlsZS50b1N0cmluZygpXG5cdDogZmlsZTtcblxuZXhwb3J0IGNvbnN0IGlzRGVub0V4ZWNQYXRoID0gZmlsZSA9PiB0eXBlb2YgZmlsZSAhPT0gJ3N0cmluZydcblx0JiYgZmlsZVxuXHQmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZmlsZSkgPT09IFN0cmluZy5wcm90b3R5cGU7XG5cbi8vIFNhbWUgYnV0IGFsc28gYWxsb3dzIG90aGVyIHZhbHVlcywgZS5nLiBgYm9vbGVhbmAgZm9yIHRoZSBgc2hlbGxgIG9wdGlvblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUZpbGVVcmwgPSBmaWxlID0+IGZpbGUgaW5zdGFuY2VvZiBVUkwgPyBmaWxlVVJMVG9QYXRoKGZpbGUpIDogZmlsZTtcbiIsICJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdpcy1wbGFpbi1vYmonO1xuaW1wb3J0IHtzYWZlTm9ybWFsaXplRmlsZVVybH0gZnJvbSAnLi4vYXJndW1lbnRzL2ZpbGUtdXJsLmpzJztcblxuLy8gVGhlIGNvbW1hbmQgYGFyZ3VtZW50c2AgYW5kIGBvcHRpb25zYCBhcmUgYm90aCBvcHRpb25hbC5cbi8vIFRoaXMgYWxzbyBkb2VzIGJhc2ljIHZhbGlkYXRpb24gb24gdGhlbSBhbmQgb24gdGhlIGNvbW1hbmQgZmlsZS5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXJhbWV0ZXJzID0gKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cyA9IFtdLCByYXdPcHRpb25zID0ge30pID0+IHtcblx0Y29uc3QgZmlsZVBhdGggPSBzYWZlTm9ybWFsaXplRmlsZVVybChyYXdGaWxlLCAnRmlyc3QgYXJndW1lbnQnKTtcblx0Y29uc3QgW2NvbW1hbmRBcmd1bWVudHMsIG9wdGlvbnNdID0gaXNQbGFpbk9iamVjdChyYXdBcmd1bWVudHMpXG5cdFx0PyBbW10sIHJhd0FyZ3VtZW50c11cblx0XHQ6IFtyYXdBcmd1bWVudHMsIHJhd09wdGlvbnNdO1xuXG5cdGlmICghQXJyYXkuaXNBcnJheShjb21tYW5kQXJndW1lbnRzKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGVpdGhlciBhbiBhcnJheSBvZiBhcmd1bWVudHMgb3IgYW4gb3B0aW9ucyBvYmplY3Q6ICR7Y29tbWFuZEFyZ3VtZW50c31gKTtcblx0fVxuXG5cdGlmIChjb21tYW5kQXJndW1lbnRzLnNvbWUoY29tbWFuZEFyZ3VtZW50ID0+IHR5cGVvZiBjb21tYW5kQXJndW1lbnQgPT09ICdvYmplY3QnICYmIGNvbW1hbmRBcmd1bWVudCAhPT0gbnVsbCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzOiAke2NvbW1hbmRBcmd1bWVudHN9YCk7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkQXJndW1lbnRzID0gY29tbWFuZEFyZ3VtZW50cy5tYXAoU3RyaW5nKTtcblx0Y29uc3QgbnVsbEJ5dGVBcmd1bWVudCA9IG5vcm1hbGl6ZWRBcmd1bWVudHMuZmluZChub3JtYWxpemVkQXJndW1lbnQgPT4gbm9ybWFsaXplZEFyZ3VtZW50LmluY2x1ZGVzKCdcXDAnKSk7XG5cdGlmIChudWxsQnl0ZUFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBBcmd1bWVudHMgY2Fubm90IGNvbnRhaW4gbnVsbCBieXRlcyAoXCJcXFxcMFwiKTogJHtudWxsQnl0ZUFyZ3VtZW50fWApO1xuXHR9XG5cblx0aWYgKCFpc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgTGFzdCBhcmd1bWVudCBtdXN0IGJlIGFuIG9wdGlvbnMgb2JqZWN0OiAke29wdGlvbnN9YCk7XG5cdH1cblxuXHRyZXR1cm4gW2ZpbGVQYXRoLCBub3JtYWxpemVkQXJndW1lbnRzLCBvcHRpb25zXTtcbn07XG4iLCAiaW1wb3J0IHtTdHJpbmdEZWNvZGVyfSBmcm9tICdub2RlOnN0cmluZ19kZWNvZGVyJztcblxuY29uc3Qge3RvU3RyaW5nOiBvYmplY3RUb1N0cmluZ30gPSBPYmplY3QucHJvdG90eXBlO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheUJ1ZmZlciA9IHZhbHVlID0+IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xuXG4vLyBJcyBlaXRoZXIgVWludDhBcnJheSBvciBCdWZmZXJcbmV4cG9ydCBjb25zdCBpc1VpbnQ4QXJyYXkgPSB2YWx1ZSA9PiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgVWludDhBcnJheV0nO1xuXG5leHBvcnQgY29uc3QgYnVmZmVyVG9VaW50OEFycmF5ID0gYnVmZmVyID0+IG5ldyBVaW50OEFycmF5KGJ1ZmZlci5idWZmZXIsIGJ1ZmZlci5ieXRlT2Zmc2V0LCBidWZmZXIuYnl0ZUxlbmd0aCk7XG5cbmNvbnN0IHRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG5jb25zdCBzdHJpbmdUb1VpbnQ4QXJyYXkgPSBzdHJpbmcgPT4gdGV4dEVuY29kZXIuZW5jb2RlKHN0cmluZyk7XG5cbmNvbnN0IHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XG5leHBvcnQgY29uc3QgdWludDhBcnJheVRvU3RyaW5nID0gdWludDhBcnJheSA9PiB0ZXh0RGVjb2Rlci5kZWNvZGUodWludDhBcnJheSk7XG5cbmV4cG9ydCBjb25zdCBqb2luVG9TdHJpbmcgPSAodWludDhBcnJheXNPclN0cmluZ3MsIGVuY29kaW5nKSA9PiB7XG5cdGNvbnN0IHN0cmluZ3MgPSB1aW50OEFycmF5c1RvU3RyaW5ncyh1aW50OEFycmF5c09yU3RyaW5ncywgZW5jb2RpbmcpO1xuXHRyZXR1cm4gc3RyaW5ncy5qb2luKCcnKTtcbn07XG5cbmNvbnN0IHVpbnQ4QXJyYXlzVG9TdHJpbmdzID0gKHVpbnQ4QXJyYXlzT3JTdHJpbmdzLCBlbmNvZGluZykgPT4ge1xuXHRpZiAoZW5jb2RpbmcgPT09ICd1dGY4JyAmJiB1aW50OEFycmF5c09yU3RyaW5ncy5ldmVyeSh1aW50OEFycmF5T3JTdHJpbmcgPT4gdHlwZW9mIHVpbnQ4QXJyYXlPclN0cmluZyA9PT0gJ3N0cmluZycpKSB7XG5cdFx0cmV0dXJuIHVpbnQ4QXJyYXlzT3JTdHJpbmdzO1xuXHR9XG5cblx0Y29uc3QgZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKGVuY29kaW5nKTtcblx0Y29uc3Qgc3RyaW5ncyA9IHVpbnQ4QXJyYXlzT3JTdHJpbmdzXG5cdFx0Lm1hcCh1aW50OEFycmF5T3JTdHJpbmcgPT4gdHlwZW9mIHVpbnQ4QXJyYXlPclN0cmluZyA9PT0gJ3N0cmluZydcblx0XHRcdD8gc3RyaW5nVG9VaW50OEFycmF5KHVpbnQ4QXJyYXlPclN0cmluZylcblx0XHRcdDogdWludDhBcnJheU9yU3RyaW5nKVxuXHRcdC5tYXAodWludDhBcnJheSA9PiBkZWNvZGVyLndyaXRlKHVpbnQ4QXJyYXkpKTtcblx0Y29uc3QgZmluYWxTdHJpbmcgPSBkZWNvZGVyLmVuZCgpO1xuXHRyZXR1cm4gZmluYWxTdHJpbmcgPT09ICcnID8gc3RyaW5ncyA6IFsuLi5zdHJpbmdzLCBmaW5hbFN0cmluZ107XG59O1xuXG5leHBvcnQgY29uc3Qgam9pblRvVWludDhBcnJheSA9IHVpbnQ4QXJyYXlzT3JTdHJpbmdzID0+IHtcblx0aWYgKHVpbnQ4QXJyYXlzT3JTdHJpbmdzLmxlbmd0aCA9PT0gMSAmJiBpc1VpbnQ4QXJyYXkodWludDhBcnJheXNPclN0cmluZ3NbMF0pKSB7XG5cdFx0cmV0dXJuIHVpbnQ4QXJyYXlzT3JTdHJpbmdzWzBdO1xuXHR9XG5cblx0cmV0dXJuIGNvbmNhdFVpbnQ4QXJyYXlzKHN0cmluZ3NUb1VpbnQ4QXJyYXlzKHVpbnQ4QXJyYXlzT3JTdHJpbmdzKSk7XG59O1xuXG5jb25zdCBzdHJpbmdzVG9VaW50OEFycmF5cyA9IHVpbnQ4QXJyYXlzT3JTdHJpbmdzID0+IHVpbnQ4QXJyYXlzT3JTdHJpbmdzLm1hcCh1aW50OEFycmF5T3JTdHJpbmcgPT4gdHlwZW9mIHVpbnQ4QXJyYXlPclN0cmluZyA9PT0gJ3N0cmluZydcblx0PyBzdHJpbmdUb1VpbnQ4QXJyYXkodWludDhBcnJheU9yU3RyaW5nKVxuXHQ6IHVpbnQ4QXJyYXlPclN0cmluZyk7XG5cbmV4cG9ydCBjb25zdCBjb25jYXRVaW50OEFycmF5cyA9IHVpbnQ4QXJyYXlzID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoZ2V0Sm9pbkxlbmd0aCh1aW50OEFycmF5cykpO1xuXG5cdGxldCBpbmRleCA9IDA7XG5cdGZvciAoY29uc3QgdWludDhBcnJheSBvZiB1aW50OEFycmF5cykge1xuXHRcdHJlc3VsdC5zZXQodWludDhBcnJheSwgaW5kZXgpO1xuXHRcdGluZGV4ICs9IHVpbnQ4QXJyYXkubGVuZ3RoO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldEpvaW5MZW5ndGggPSB1aW50OEFycmF5cyA9PiB7XG5cdGxldCBqb2luTGVuZ3RoID0gMDtcblx0Zm9yIChjb25zdCB1aW50OEFycmF5IG9mIHVpbnQ4QXJyYXlzKSB7XG5cdFx0am9pbkxlbmd0aCArPSB1aW50OEFycmF5Lmxlbmd0aDtcblx0fVxuXG5cdHJldHVybiBqb2luTGVuZ3RoO1xufTtcbiIsICJpbXBvcnQge0NoaWxkUHJvY2Vzc30gZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2lzLXBsYWluLW9iaic7XG5pbXBvcnQge2lzVWludDhBcnJheSwgdWludDhBcnJheVRvU3RyaW5nfSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcblxuLy8gQ2hlY2sgd2hldGhlciB0aGUgdGVtcGxhdGUgc3RyaW5nIHN5bnRheCBpcyBiZWluZyB1c2VkXG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVN0cmluZyA9IHRlbXBsYXRlcyA9PiBBcnJheS5pc0FycmF5KHRlbXBsYXRlcykgJiYgQXJyYXkuaXNBcnJheSh0ZW1wbGF0ZXMucmF3KTtcblxuLy8gQ29udmVydCBleGVjYWBmaWxlIC4uLmNvbW1hbmRBcmd1bWVudHNgIHRvIGV4ZWNhKGZpbGUsIGNvbW1hbmRBcmd1bWVudHMpXG5leHBvcnQgY29uc3QgcGFyc2VUZW1wbGF0ZXMgPSAodGVtcGxhdGVzLCBleHByZXNzaW9ucykgPT4ge1xuXHRsZXQgdG9rZW5zID0gW107XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIHRlbXBsYXRlXSBvZiB0ZW1wbGF0ZXMuZW50cmllcygpKSB7XG5cdFx0dG9rZW5zID0gcGFyc2VUZW1wbGF0ZSh7XG5cdFx0XHR0ZW1wbGF0ZXMsXG5cdFx0XHRleHByZXNzaW9ucyxcblx0XHRcdHRva2Vucyxcblx0XHRcdGluZGV4LFxuXHRcdFx0dGVtcGxhdGUsXG5cdFx0fSk7XG5cdH1cblxuXHRpZiAodG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1RlbXBsYXRlIHNjcmlwdCBtdXN0IG5vdCBiZSBlbXB0eScpO1xuXHR9XG5cblx0Y29uc3QgW2ZpbGUsIC4uLmNvbW1hbmRBcmd1bWVudHNdID0gdG9rZW5zO1xuXHRyZXR1cm4gW2ZpbGUsIGNvbW1hbmRBcmd1bWVudHMsIHt9XTtcbn07XG5cbmNvbnN0IHBhcnNlVGVtcGxhdGUgPSAoe3RlbXBsYXRlcywgZXhwcmVzc2lvbnMsIHRva2VucywgaW5kZXgsIHRlbXBsYXRlfSkgPT4ge1xuXHRpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgYmFja3NsYXNoIHNlcXVlbmNlOiAke3RlbXBsYXRlcy5yYXdbaW5kZXhdfWApO1xuXHR9XG5cblx0Y29uc3Qge25leHRUb2tlbnMsIGxlYWRpbmdXaGl0ZXNwYWNlcywgdHJhaWxpbmdXaGl0ZXNwYWNlc30gPSBzcGxpdEJ5V2hpdGVzcGFjZXModGVtcGxhdGUsIHRlbXBsYXRlcy5yYXdbaW5kZXhdKTtcblx0Y29uc3QgbmV3VG9rZW5zID0gY29uY2F0VG9rZW5zKHRva2VucywgbmV4dFRva2VucywgbGVhZGluZ1doaXRlc3BhY2VzKTtcblxuXHRpZiAoaW5kZXggPT09IGV4cHJlc3Npb25zLmxlbmd0aCkge1xuXHRcdHJldHVybiBuZXdUb2tlbnM7XG5cdH1cblxuXHRjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbnNbaW5kZXhdO1xuXHRjb25zdCBleHByZXNzaW9uVG9rZW5zID0gQXJyYXkuaXNBcnJheShleHByZXNzaW9uKVxuXHRcdD8gZXhwcmVzc2lvbi5tYXAoZXhwcmVzc2lvbiA9PiBwYXJzZUV4cHJlc3Npb24oZXhwcmVzc2lvbikpXG5cdFx0OiBbcGFyc2VFeHByZXNzaW9uKGV4cHJlc3Npb24pXTtcblx0cmV0dXJuIGNvbmNhdFRva2VucyhuZXdUb2tlbnMsIGV4cHJlc3Npb25Ub2tlbnMsIHRyYWlsaW5nV2hpdGVzcGFjZXMpO1xufTtcblxuLy8gTGlrZSBgc3RyaW5nLnNwbGl0KC9bIFxcdFxcclxcbl0rLylgIGV4Y2VwdCBuZXdsaW5lcyBhbmQgdGFicyBhcmU6XG4vLyAgLSBpZ25vcmVkIHdoZW4gaW5wdXQgYXMgYSBiYWNrc2xhc2ggc2VxdWVuY2UgbGlrZTogYGVjaG8gZm9vXFxuIGJhcmBcbi8vICAtIG5vdCBpZ25vcmVkIHdoZW4gaW5wdXQgZGlyZWN0bHlcbi8vIFRoZSBvbmx5IHdheSB0byBkaXN0aW5ndWlzaCB0aG9zZSBpbiBKYXZhU2NyaXB0IGlzIHRvIHVzZSBhIHRhZ2dlZCB0ZW1wbGF0ZSBhbmQgY29tcGFyZTpcbi8vICAtIHRoZSBmaXJzdCBhcnJheSBhcmd1bWVudCwgd2hpY2ggZG9lcyBub3QgZXNjYXBlIGJhY2tzbGFzaCBzZXF1ZW5jZXNcbi8vICAtIGl0cyBgcmF3YCBwcm9wZXJ0eSwgd2hpY2ggZXNjYXBlcyB0aGVtXG5jb25zdCBzcGxpdEJ5V2hpdGVzcGFjZXMgPSAodGVtcGxhdGUsIHJhd1RlbXBsYXRlKSA9PiB7XG5cdGlmIChyYXdUZW1wbGF0ZS5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4ge25leHRUb2tlbnM6IFtdLCBsZWFkaW5nV2hpdGVzcGFjZXM6IGZhbHNlLCB0cmFpbGluZ1doaXRlc3BhY2VzOiBmYWxzZX07XG5cdH1cblxuXHRjb25zdCBuZXh0VG9rZW5zID0gW107XG5cdGxldCB0ZW1wbGF0ZVN0YXJ0ID0gMDtcblx0Y29uc3QgbGVhZGluZ1doaXRlc3BhY2VzID0gREVMSU1JVEVSUy5oYXMocmF3VGVtcGxhdGVbMF0pO1xuXG5cdGZvciAoXG5cdFx0bGV0IHRlbXBsYXRlSW5kZXggPSAwLCByYXdJbmRleCA9IDA7XG5cdFx0dGVtcGxhdGVJbmRleCA8IHRlbXBsYXRlLmxlbmd0aDtcblx0XHR0ZW1wbGF0ZUluZGV4ICs9IDEsIHJhd0luZGV4ICs9IDFcblx0KSB7XG5cdFx0Y29uc3QgcmF3Q2hhcmFjdGVyID0gcmF3VGVtcGxhdGVbcmF3SW5kZXhdO1xuXHRcdGlmIChERUxJTUlURVJTLmhhcyhyYXdDaGFyYWN0ZXIpKSB7XG5cdFx0XHRpZiAodGVtcGxhdGVTdGFydCAhPT0gdGVtcGxhdGVJbmRleCkge1xuXHRcdFx0XHRuZXh0VG9rZW5zLnB1c2godGVtcGxhdGUuc2xpY2UodGVtcGxhdGVTdGFydCwgdGVtcGxhdGVJbmRleCkpO1xuXHRcdFx0fVxuXG5cdFx0XHR0ZW1wbGF0ZVN0YXJ0ID0gdGVtcGxhdGVJbmRleCArIDE7XG5cdFx0fSBlbHNlIGlmIChyYXdDaGFyYWN0ZXIgPT09ICdcXFxcJykge1xuXHRcdFx0Y29uc3QgbmV4dFJhd0NoYXJhY3RlciA9IHJhd1RlbXBsYXRlW3Jhd0luZGV4ICsgMV07XG5cdFx0XHRpZiAobmV4dFJhd0NoYXJhY3RlciA9PT0gJ1xcbicpIHtcblx0XHRcdFx0Ly8gSGFuZGxlcyBlc2NhcGVkIG5ld2xpbmVzIGluIHRlbXBsYXRlc1xuXHRcdFx0XHR0ZW1wbGF0ZUluZGV4IC09IDE7XG5cdFx0XHRcdHJhd0luZGV4ICs9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKG5leHRSYXdDaGFyYWN0ZXIgPT09ICd1JyAmJiByYXdUZW1wbGF0ZVtyYXdJbmRleCArIDJdID09PSAneycpIHtcblx0XHRcdFx0cmF3SW5kZXggPSByYXdUZW1wbGF0ZS5pbmRleE9mKCd9JywgcmF3SW5kZXggKyAzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJhd0luZGV4ICs9IEVTQ0FQRV9MRU5HVEhbbmV4dFJhd0NoYXJhY3Rlcl0gPz8gMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25zdCB0cmFpbGluZ1doaXRlc3BhY2VzID0gdGVtcGxhdGVTdGFydCA9PT0gdGVtcGxhdGUubGVuZ3RoO1xuXHRpZiAoIXRyYWlsaW5nV2hpdGVzcGFjZXMpIHtcblx0XHRuZXh0VG9rZW5zLnB1c2godGVtcGxhdGUuc2xpY2UodGVtcGxhdGVTdGFydCkpO1xuXHR9XG5cblx0cmV0dXJuIHtuZXh0VG9rZW5zLCBsZWFkaW5nV2hpdGVzcGFjZXMsIHRyYWlsaW5nV2hpdGVzcGFjZXN9O1xufTtcblxuY29uc3QgREVMSU1JVEVSUyA9IG5ldyBTZXQoWycgJywgJ1xcdCcsICdcXHInLCAnXFxuJ10pO1xuXG4vLyBOdW1iZXIgb2YgY2hhcmFjdGVycyBpbiBiYWNrc2xhc2ggZXNjYXBlIHNlcXVlbmNlczogXFwwIFxceFhYIG9yIFxcdVhYWFhcbi8vIFxcY1ggaXMgYWxsb3dlZCBpbiBSZWdFeHBzIGJ1dCBub3QgaW4gc3RyaW5nc1xuLy8gT2N0YWwgc2VxdWVuY2VzIGFyZSBub3QgYWxsb3dlZCBpbiBzdHJpY3QgbW9kZVxuY29uc3QgRVNDQVBFX0xFTkdUSCA9IHt4OiAzLCB1OiA1fTtcblxuY29uc3QgY29uY2F0VG9rZW5zID0gKHRva2VucywgbmV4dFRva2VucywgaXNTZXBhcmF0ZWQpID0+IGlzU2VwYXJhdGVkXG5cdHx8IHRva2Vucy5sZW5ndGggPT09IDBcblx0fHwgbmV4dFRva2Vucy5sZW5ndGggPT09IDBcblx0PyBbLi4udG9rZW5zLCAuLi5uZXh0VG9rZW5zXVxuXHQ6IFtcblx0XHQuLi50b2tlbnMuc2xpY2UoMCwgLTEpLFxuXHRcdGAke3Rva2Vucy5hdCgtMSl9JHtuZXh0VG9rZW5zWzBdfWAsXG5cdFx0Li4ubmV4dFRva2Vucy5zbGljZSgxKSxcblx0XTtcblxuLy8gSGFuZGxlIGAke2V4cHJlc3Npb259YCBpbnNpZGUgdGhlIHRlbXBsYXRlIHN0cmluZyBzeW50YXhcbmNvbnN0IHBhcnNlRXhwcmVzc2lvbiA9IGV4cHJlc3Npb24gPT4ge1xuXHRjb25zdCB0eXBlT2ZFeHByZXNzaW9uID0gdHlwZW9mIGV4cHJlc3Npb247XG5cblx0aWYgKHR5cGVPZkV4cHJlc3Npb24gPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGV4cHJlc3Npb247XG5cdH1cblxuXHRpZiAodHlwZU9mRXhwcmVzc2lvbiA9PT0gJ251bWJlcicpIHtcblx0XHRyZXR1cm4gU3RyaW5nKGV4cHJlc3Npb24pO1xuXHR9XG5cblx0aWYgKGlzUGxhaW5PYmplY3QoZXhwcmVzc2lvbikgJiYgKCdzdGRvdXQnIGluIGV4cHJlc3Npb24gfHwgJ2lzTWF4QnVmZmVyJyBpbiBleHByZXNzaW9uKSkge1xuXHRcdHJldHVybiBnZXRTdWJwcm9jZXNzUmVzdWx0KGV4cHJlc3Npb24pO1xuXHR9XG5cblx0aWYgKGV4cHJlc3Npb24gaW5zdGFuY2VvZiBDaGlsZFByb2Nlc3MgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGV4cHJlc3Npb24pID09PSAnW29iamVjdCBQcm9taXNlXScpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nXG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVW5leHBlY3RlZCBzdWJwcm9jZXNzIGluIHRlbXBsYXRlIGV4cHJlc3Npb24uIFBsZWFzZSB1c2UgJHthd2FpdCBzdWJwcm9jZXNzfSBpbnN0ZWFkIG9mICR7c3VicHJvY2Vzc30uJyk7XG5cdH1cblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmV4cGVjdGVkIFwiJHt0eXBlT2ZFeHByZXNzaW9ufVwiIGluIHRlbXBsYXRlIGV4cHJlc3Npb25gKTtcbn07XG5cbmNvbnN0IGdldFN1YnByb2Nlc3NSZXN1bHQgPSAoe3N0ZG91dH0pID0+IHtcblx0aWYgKHR5cGVvZiBzdGRvdXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHN0ZG91dDtcblx0fVxuXG5cdGlmIChpc1VpbnQ4QXJyYXkoc3Rkb3V0KSkge1xuXHRcdHJldHVybiB1aW50OEFycmF5VG9TdHJpbmcoc3Rkb3V0KTtcblx0fVxuXG5cdGlmIChzdGRvdXQgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ01pc3NpbmcgcmVzdWx0LnN0ZG91dCBpbiB0ZW1wbGF0ZSBleHByZXNzaW9uLiBUaGlzIGlzIHByb2JhYmx5IGR1ZSB0byB0aGUgcHJldmlvdXMgc3VicHJvY2Vzc1xcJyBcInN0ZG91dFwiIG9wdGlvbi4nKTtcblx0fVxuXG5cdHRocm93IG5ldyBUeXBlRXJyb3IoYFVuZXhwZWN0ZWQgXCIke3R5cGVvZiBzdGRvdXR9XCIgc3Rkb3V0IGluIHRlbXBsYXRlIGV4cHJlc3Npb25gKTtcbn07XG4iLCAiaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcblxuZXhwb3J0IGNvbnN0IGlzU3RhbmRhcmRTdHJlYW0gPSBzdHJlYW0gPT4gU1RBTkRBUkRfU1RSRUFNUy5pbmNsdWRlcyhzdHJlYW0pO1xuZXhwb3J0IGNvbnN0IFNUQU5EQVJEX1NUUkVBTVMgPSBbcHJvY2Vzcy5zdGRpbiwgcHJvY2Vzcy5zdGRvdXQsIHByb2Nlc3Muc3RkZXJyXTtcbmV4cG9ydCBjb25zdCBTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMgPSBbJ3N0ZGluJywgJ3N0ZG91dCcsICdzdGRlcnInXTtcbmV4cG9ydCBjb25zdCBnZXRTdHJlYW1OYW1lID0gZmROdW1iZXIgPT4gU1RBTkRBUkRfU1RSRUFNU19BTElBU0VTW2ZkTnVtYmVyXSA/PyBgc3RkaW9bJHtmZE51bWJlcn1dYDtcbiIsICJpbXBvcnQge2RlYnVnbG9nfSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnaXMtcGxhaW4tb2JqJztcbmltcG9ydCB7U1RBTkRBUkRfU1RSRUFNU19BTElBU0VTfSBmcm9tICcuLi91dGlscy9zdGFuZGFyZC1zdHJlYW0uanMnO1xuXG4vLyBTb21lIG9wdGlvbnMgY2FuIGhhdmUgZGlmZmVyZW50IHZhbHVlcyBmb3IgYHN0ZG91dGAvYHN0ZGVycmAvYGZkM2AuXG4vLyBUaGlzIG5vcm1hbGl6ZXMgdGhvc2UgdG8gYXJyYXkgb2YgdmFsdWVzLlxuLy8gRm9yIGV4YW1wbGUsIGB7dmVyYm9zZToge3N0ZG91dDogJ25vbmUnLCBzdGRlcnI6ICdmdWxsJ319YCBiZWNvbWVzIGB7dmVyYm9zZTogWydub25lJywgJ25vbmUnLCAnZnVsbCddfWBcbmV4cG9ydCBjb25zdCBub3JtYWxpemVGZFNwZWNpZmljT3B0aW9ucyA9IG9wdGlvbnMgPT4ge1xuXHRjb25zdCBvcHRpb25zQ29weSA9IHsuLi5vcHRpb25zfTtcblxuXHRmb3IgKGNvbnN0IG9wdGlvbk5hbWUgb2YgRkRfU1BFQ0lGSUNfT1BUSU9OUykge1xuXHRcdG9wdGlvbnNDb3B5W29wdGlvbk5hbWVdID0gbm9ybWFsaXplRmRTcGVjaWZpY09wdGlvbihvcHRpb25zLCBvcHRpb25OYW1lKTtcblx0fVxuXG5cdHJldHVybiBvcHRpb25zQ29weTtcbn07XG5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVGZFNwZWNpZmljT3B0aW9uID0gKG9wdGlvbnMsIG9wdGlvbk5hbWUpID0+IHtcblx0Y29uc3Qgb3B0aW9uQmFzZUFycmF5ID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiBnZXRTdGRpb0xlbmd0aChvcHRpb25zKSArIDF9KTtcblx0Y29uc3Qgb3B0aW9uQXJyYXkgPSBub3JtYWxpemVGZFNwZWNpZmljVmFsdWUob3B0aW9uc1tvcHRpb25OYW1lXSwgb3B0aW9uQmFzZUFycmF5LCBvcHRpb25OYW1lKTtcblx0cmV0dXJuIGFkZERlZmF1bHRWYWx1ZShvcHRpb25BcnJheSwgb3B0aW9uTmFtZSk7XG59O1xuXG5jb25zdCBnZXRTdGRpb0xlbmd0aCA9ICh7c3RkaW99KSA9PiBBcnJheS5pc0FycmF5KHN0ZGlvKVxuXHQ/IE1hdGgubWF4KHN0ZGlvLmxlbmd0aCwgU1RBTkRBUkRfU1RSRUFNU19BTElBU0VTLmxlbmd0aClcblx0OiBTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMubGVuZ3RoO1xuXG5jb25zdCBub3JtYWxpemVGZFNwZWNpZmljVmFsdWUgPSAob3B0aW9uVmFsdWUsIG9wdGlvbkFycmF5LCBvcHRpb25OYW1lKSA9PiBpc1BsYWluT2JqZWN0KG9wdGlvblZhbHVlKVxuXHQ/IG5vcm1hbGl6ZU9wdGlvbk9iamVjdChvcHRpb25WYWx1ZSwgb3B0aW9uQXJyYXksIG9wdGlvbk5hbWUpXG5cdDogb3B0aW9uQXJyYXkuZmlsbChvcHRpb25WYWx1ZSk7XG5cbmNvbnN0IG5vcm1hbGl6ZU9wdGlvbk9iamVjdCA9IChvcHRpb25WYWx1ZSwgb3B0aW9uQXJyYXksIG9wdGlvbk5hbWUpID0+IHtcblx0Zm9yIChjb25zdCBmZE5hbWUgb2YgT2JqZWN0LmtleXMob3B0aW9uVmFsdWUpLnNvcnQoY29tcGFyZUZkTmFtZSkpIHtcblx0XHRmb3IgKGNvbnN0IGZkTnVtYmVyIG9mIHBhcnNlRmROYW1lKGZkTmFtZSwgb3B0aW9uTmFtZSwgb3B0aW9uQXJyYXkpKSB7XG5cdFx0XHRvcHRpb25BcnJheVtmZE51bWJlcl0gPSBvcHRpb25WYWx1ZVtmZE5hbWVdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvcHRpb25BcnJheTtcbn07XG5cbi8vIEVuc3VyZSBwcmlvcml0eSBvcmRlciB3aGVuIHNldHRpbmcgYm90aCBgc3Rkb3V0YC9gc3RkZXJyYCwgYGZkMWAvYGZkMmAsIGFuZCBgYWxsYFxuY29uc3QgY29tcGFyZUZkTmFtZSA9IChmZE5hbWVBLCBmZE5hbWVCKSA9PiBnZXRGZE5hbWVPcmRlcihmZE5hbWVBKSA8IGdldEZkTmFtZU9yZGVyKGZkTmFtZUIpID8gMSA6IC0xO1xuXG5jb25zdCBnZXRGZE5hbWVPcmRlciA9IGZkTmFtZSA9PiB7XG5cdGlmIChmZE5hbWUgPT09ICdzdGRvdXQnIHx8IGZkTmFtZSA9PT0gJ3N0ZGVycicpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHJldHVybiBmZE5hbWUgPT09ICdhbGwnID8gMiA6IDE7XG59O1xuXG5jb25zdCBwYXJzZUZkTmFtZSA9IChmZE5hbWUsIG9wdGlvbk5hbWUsIG9wdGlvbkFycmF5KSA9PiB7XG5cdGlmIChmZE5hbWUgPT09ICdpcGMnKSB7XG5cdFx0cmV0dXJuIFtvcHRpb25BcnJheS5sZW5ndGggLSAxXTtcblx0fVxuXG5cdGNvbnN0IGZkTnVtYmVyID0gcGFyc2VGZChmZE5hbWUpO1xuXHRpZiAoZmROdW1iZXIgPT09IHVuZGVmaW5lZCB8fCBmZE51bWJlciA9PT0gMCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFwiJHtvcHRpb25OYW1lfS4ke2ZkTmFtZX1cIiBpcyBpbnZhbGlkLlxuSXQgbXVzdCBiZSBcIiR7b3B0aW9uTmFtZX0uc3Rkb3V0XCIsIFwiJHtvcHRpb25OYW1lfS5zdGRlcnJcIiwgXCIke29wdGlvbk5hbWV9LmFsbFwiLCBcIiR7b3B0aW9uTmFtZX0uaXBjXCIsIG9yIFwiJHtvcHRpb25OYW1lfS5mZDNcIiwgXCIke29wdGlvbk5hbWV9LmZkNFwiIChhbmQgc28gb24pLmApO1xuXHR9XG5cblx0aWYgKGZkTnVtYmVyID49IG9wdGlvbkFycmF5Lmxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFwiJHtvcHRpb25OYW1lfS4ke2ZkTmFtZX1cIiBpcyBpbnZhbGlkOiB0aGF0IGZpbGUgZGVzY3JpcHRvciBkb2VzIG5vdCBleGlzdC5cblBsZWFzZSBzZXQgdGhlIFwic3RkaW9cIiBvcHRpb24gdG8gZW5zdXJlIHRoYXQgZmlsZSBkZXNjcmlwdG9yIGV4aXN0cy5gKTtcblx0fVxuXG5cdHJldHVybiBmZE51bWJlciA9PT0gJ2FsbCcgPyBbMSwgMl0gOiBbZmROdW1iZXJdO1xufTtcblxuLy8gVXNlIHRoZSBzYW1lIHN5bnRheCBmb3IgZmQtc3BlY2lmaWMgb3B0aW9ucyBhbmQgdGhlIGBmcm9tYC9gdG9gIG9wdGlvbnNcbmV4cG9ydCBjb25zdCBwYXJzZUZkID0gZmROYW1lID0+IHtcblx0aWYgKGZkTmFtZSA9PT0gJ2FsbCcpIHtcblx0XHRyZXR1cm4gZmROYW1lO1xuXHR9XG5cblx0aWYgKFNUQU5EQVJEX1NUUkVBTVNfQUxJQVNFUy5pbmNsdWRlcyhmZE5hbWUpKSB7XG5cdFx0cmV0dXJuIFNUQU5EQVJEX1NUUkVBTVNfQUxJQVNFUy5pbmRleE9mKGZkTmFtZSk7XG5cdH1cblxuXHRjb25zdCByZWdleHBSZXN1bHQgPSBGRF9SRUdFWFAuZXhlYyhmZE5hbWUpO1xuXHRpZiAocmVnZXhwUmVzdWx0ICE9PSBudWxsKSB7XG5cdFx0cmV0dXJuIE51bWJlcihyZWdleHBSZXN1bHRbMV0pO1xuXHR9XG59O1xuXG5jb25zdCBGRF9SRUdFWFAgPSAvXmZkKFxcZCspJC87XG5cbmNvbnN0IGFkZERlZmF1bHRWYWx1ZSA9IChvcHRpb25BcnJheSwgb3B0aW9uTmFtZSkgPT4gb3B0aW9uQXJyYXkubWFwKG9wdGlvblZhbHVlID0+IG9wdGlvblZhbHVlID09PSB1bmRlZmluZWRcblx0PyBERUZBVUxUX09QVElPTlNbb3B0aW9uTmFtZV1cblx0OiBvcHRpb25WYWx1ZSk7XG5cbi8vIERlZmF1bHQgdmFsdWUgZm9yIHRoZSBgdmVyYm9zZWAgb3B0aW9uXG5jb25zdCB2ZXJib3NlRGVmYXVsdCA9IGRlYnVnbG9nKCdleGVjYScpLmVuYWJsZWQgPyAnZnVsbCcgOiAnbm9uZSc7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHtcblx0bGluZXM6IGZhbHNlLFxuXHRidWZmZXI6IHRydWUsXG5cdG1heEJ1ZmZlcjogMTAwMCAqIDEwMDAgKiAxMDAsXG5cdHZlcmJvc2U6IHZlcmJvc2VEZWZhdWx0LFxuXHRzdHJpcEZpbmFsTmV3bGluZTogdHJ1ZSxcbn07XG5cbi8vIExpc3Qgb2Ygb3B0aW9ucyB3aGljaCBjYW4gaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIGZvciBgc3Rkb3V0YC9gc3RkZXJyYFxuZXhwb3J0IGNvbnN0IEZEX1NQRUNJRklDX09QVElPTlMgPSBbJ2xpbmVzJywgJ2J1ZmZlcicsICdtYXhCdWZmZXInLCAndmVyYm9zZScsICdzdHJpcEZpbmFsTmV3bGluZSddO1xuXG4vLyBSZXRyaWV2ZSBmZC1zcGVjaWZpYyBvcHRpb25cbmV4cG9ydCBjb25zdCBnZXRGZFNwZWNpZmljVmFsdWUgPSAob3B0aW9uQXJyYXksIGZkTnVtYmVyKSA9PiBmZE51bWJlciA9PT0gJ2lwYydcblx0PyBvcHRpb25BcnJheS5hdCgtMSlcblx0OiBvcHRpb25BcnJheVtmZE51bWJlcl07XG4iLCAiaW1wb3J0IHtnZXRGZFNwZWNpZmljVmFsdWV9IGZyb20gJy4uL2FyZ3VtZW50cy9zcGVjaWZpYy5qcyc7XG5cbi8vIFRoZSBgdmVyYm9zZWAgb3B0aW9uIGNhbiBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgZm9yIGBzdGRvdXRgL2BzdGRlcnJgXG5leHBvcnQgY29uc3QgaXNWZXJib3NlID0gKHt2ZXJib3NlfSwgZmROdW1iZXIpID0+IGdldEZkVmVyYm9zZSh2ZXJib3NlLCBmZE51bWJlcikgIT09ICdub25lJztcblxuLy8gV2hldGhlciBJUEMgYW5kIG91dHB1dCBhbmQgbG9nZ2VkXG5leHBvcnQgY29uc3QgaXNGdWxsVmVyYm9zZSA9ICh7dmVyYm9zZX0sIGZkTnVtYmVyKSA9PiAhWydub25lJywgJ3Nob3J0J10uaW5jbHVkZXMoZ2V0RmRWZXJib3NlKHZlcmJvc2UsIGZkTnVtYmVyKSk7XG5cbi8vIFRoZSBgdmVyYm9zZWAgb3B0aW9uIGNhbiBiZSBhIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBsb2dnaW5nXG5leHBvcnQgY29uc3QgZ2V0VmVyYm9zZUZ1bmN0aW9uID0gKHt2ZXJib3NlfSwgZmROdW1iZXIpID0+IHtcblx0Y29uc3QgZmRWZXJib3NlID0gZ2V0RmRWZXJib3NlKHZlcmJvc2UsIGZkTnVtYmVyKTtcblx0cmV0dXJuIGlzVmVyYm9zZUZ1bmN0aW9uKGZkVmVyYm9zZSkgPyBmZFZlcmJvc2UgOiB1bmRlZmluZWQ7XG59O1xuXG4vLyBXaGVuIHVzaW5nIGB2ZXJib3NlOiB7c3Rkb3V0LCBzdGRlcnIsIGZkMywgaXBjfWA6XG4vLyAgLSBgdmVyYm9zZS5zdGRvdXR8c3RkZXJyfGZkM2AgaXMgdXNlZCBmb3IgJ291dHB1dCdcbi8vICAtIGB2ZXJib3NlLmlwY2AgaXMgb25seSB1c2VkIGZvciAnaXBjJ1xuLy8gIC0gaGlnaGVzdCBgdmVyYm9zZS4qYCB2YWx1ZSBpcyB1c2VkIGZvciAnY29tbWFuZCcsICdlcnJvcicgYW5kICdkdXJhdGlvbidcbmNvbnN0IGdldEZkVmVyYm9zZSA9ICh2ZXJib3NlLCBmZE51bWJlcikgPT4gZmROdW1iZXIgPT09IHVuZGVmaW5lZFxuXHQ/IGdldEZkR2VuZXJpY1ZlcmJvc2UodmVyYm9zZSlcblx0OiBnZXRGZFNwZWNpZmljVmFsdWUodmVyYm9zZSwgZmROdW1iZXIpO1xuXG4vLyBXaGVuIHVzaW5nIGB2ZXJib3NlOiB7c3Rkb3V0LCBzdGRlcnIsIGZkMywgaXBjfWAgYW5kIGxvZ2dpbmcgaXMgbm90IHNwZWNpZmljIHRvIGEgZmlsZSBkZXNjcmlwdG9yLlxuLy8gV2UgdGhlbiB1c2UgdGhlIGhpZ2hlc3QgYHZlcmJvc2UuKmAgdmFsdWUsIHVzaW5nIHRoZSBmb2xsb3dpbmcgb3JkZXI6XG4vLyAgLSBmdW5jdGlvbiA+ICdmdWxsJyA+ICdzaG9ydCcgPiAnbm9uZSdcbi8vICAtIGlmIHNldmVyYWwgZnVuY3Rpb25zIGFyZSBkZWZpbmVkOiBzdGRvdXQgPiBzdGRlcnIgPiBmZDMgPiBpcGNcbmNvbnN0IGdldEZkR2VuZXJpY1ZlcmJvc2UgPSB2ZXJib3NlID0+IHZlcmJvc2UuZmluZChmZFZlcmJvc2UgPT4gaXNWZXJib3NlRnVuY3Rpb24oZmRWZXJib3NlKSlcblx0Pz8gVkVSQk9TRV9WQUxVRVMuZmluZExhc3QoZmRWZXJib3NlID0+IHZlcmJvc2UuaW5jbHVkZXMoZmRWZXJib3NlKSk7XG5cbi8vIFdoZXRoZXIgdGhlIGB2ZXJib3NlYCBvcHRpb24gaXMgY3VzdG9taXplZCB1c2luZyBhIGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgaXNWZXJib3NlRnVuY3Rpb24gPSBmZFZlcmJvc2UgPT4gdHlwZW9mIGZkVmVyYm9zZSA9PT0gJ2Z1bmN0aW9uJztcblxuZXhwb3J0IGNvbnN0IFZFUkJPU0VfVkFMVUVTID0gWydub25lJywgJ3Nob3J0JywgJ2Z1bGwnXTtcbiIsICJpbXBvcnQge3BsYXRmb3JtfSBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IHtzdHJpcFZUQ29udHJvbENoYXJhY3RlcnN9IGZyb20gJ25vZGU6dXRpbCc7XG5cbi8vIENvbXB1dGUgYHJlc3VsdC5jb21tYW5kYCBhbmQgYHJlc3VsdC5lc2NhcGVkQ29tbWFuZGBcbmV4cG9ydCBjb25zdCBqb2luQ29tbWFuZCA9IChmaWxlUGF0aCwgcmF3QXJndW1lbnRzKSA9PiB7XG5cdGNvbnN0IGZpbGVBbmRBcmd1bWVudHMgPSBbZmlsZVBhdGgsIC4uLnJhd0FyZ3VtZW50c107XG5cdGNvbnN0IGNvbW1hbmQgPSBmaWxlQW5kQXJndW1lbnRzLmpvaW4oJyAnKTtcblx0Y29uc3QgZXNjYXBlZENvbW1hbmQgPSBmaWxlQW5kQXJndW1lbnRzXG5cdFx0Lm1hcChmaWxlQW5kQXJndW1lbnQgPT4gcXVvdGVTdHJpbmcoZXNjYXBlQ29udHJvbENoYXJhY3RlcnMoZmlsZUFuZEFyZ3VtZW50KSkpXG5cdFx0LmpvaW4oJyAnKTtcblx0cmV0dXJuIHtjb21tYW5kLCBlc2NhcGVkQ29tbWFuZH07XG59O1xuXG4vLyBSZW1vdmUgQU5TSSBzZXF1ZW5jZXMgYW5kIGVzY2FwZSBjb250cm9sIGNoYXJhY3RlcnMgYW5kIG5ld2xpbmVzXG5leHBvcnQgY29uc3QgZXNjYXBlTGluZXMgPSBsaW5lcyA9PiBzdHJpcFZUQ29udHJvbENoYXJhY3RlcnMobGluZXMpXG5cdC5zcGxpdCgnXFxuJylcblx0Lm1hcChsaW5lID0+IGVzY2FwZUNvbnRyb2xDaGFyYWN0ZXJzKGxpbmUpKVxuXHQuam9pbignXFxuJyk7XG5cbmNvbnN0IGVzY2FwZUNvbnRyb2xDaGFyYWN0ZXJzID0gbGluZSA9PiBsaW5lLnJlcGxhY2VBbGwoU1BFQ0lBTF9DSEFSX1JFR0VYUCwgY2hhcmFjdGVyID0+IGVzY2FwZUNvbnRyb2xDaGFyYWN0ZXIoY2hhcmFjdGVyKSk7XG5cbmNvbnN0IGVzY2FwZUNvbnRyb2xDaGFyYWN0ZXIgPSBjaGFyYWN0ZXIgPT4ge1xuXHRjb25zdCBjb21tb25Fc2NhcGUgPSBDT01NT05fRVNDQVBFU1tjaGFyYWN0ZXJdO1xuXHRpZiAoY29tbW9uRXNjYXBlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY29tbW9uRXNjYXBlO1xuXHR9XG5cblx0Y29uc3QgY29kZXBvaW50ID0gY2hhcmFjdGVyLmNvZGVQb2ludEF0KDApO1xuXHRjb25zdCBjb2RlcG9pbnRIZXggPSBjb2RlcG9pbnQudG9TdHJpbmcoMTYpO1xuXHRyZXR1cm4gY29kZXBvaW50IDw9IEFTVFJBTF9TVEFSVFxuXHRcdD8gYFxcXFx1JHtjb2RlcG9pbnRIZXgucGFkU3RhcnQoNCwgJzAnKX1gXG5cdFx0OiBgXFxcXFUke2NvZGVwb2ludEhleH1gO1xufTtcblxuLy8gQ2hhcmFjdGVycyB0aGF0IHdvdWxkIGNyZWF0ZSBpc3N1ZXMgd2hlbiBwcmludGVkIGFyZSBlc2NhcGVkIHVzaW5nIHRoZSBcXHUgb3IgXFxVIG5vdGF0aW9uLlxuLy8gVGhvc2UgaW5jbHVkZSBjb250cm9sIGNoYXJhY3RlcnMgYW5kIG5ld2xpbmVzLlxuLy8gVGhlIFxcdSBhbmQgXFxVIG5vdGF0aW9uIGlzIEJhc2ggc3BlY2lmaWMsIGJ1dCB0aGVyZSBpcyBubyB3YXkgdG8gZG8gdGhpcyBpbiBhIHNoZWxsLWFnbm9zdGljIHdheS5cbi8vIFNvbWUgc2hlbGxzIGRvIG5vdCBldmVuIGhhdmUgYSB3YXkgdG8gcHJpbnQgdGhvc2UgY2hhcmFjdGVycyBpbiBhbiBlc2NhcGVkIGZhc2hpb24uXG4vLyBUaGVyZWZvcmUsIHdlIHByaW9yaXRpemUgcHJpbnRpbmcgdGhvc2Ugc2FmZWx5LCBpbnN0ZWFkIG9mIGFsbG93aW5nIHRob3NlIHRvIGJlIGNvcHktcGFzdGVkLlxuLy8gTGlzdCBvZiBVbmljb2RlIGNoYXJhY3RlciBjYXRlZ29yaWVzOiBodHRwczovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NhdGVnb3J5L2luZGV4Lmh0bVxuY29uc3QgZ2V0U3BlY2lhbENoYXJSZWdFeHAgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Ly8gVGhpcyB0aHJvd3Mgd2hlbiB1c2luZyBOb2RlLmpzIHdpdGhvdXQgSUNVIHN1cHBvcnQuXG5cdFx0Ly8gV2hlbiB1c2luZyBhIFJlZ0V4cCBsaXRlcmFsLCB0aGlzIHdvdWxkIHRocm93IGF0IHBhcnNpbmctdGltZSwgaW5zdGVhZCBvZiBydW50aW1lLlxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVnZXgtbGl0ZXJhbHNcblx0XHRyZXR1cm4gbmV3IFJlZ0V4cCgnXFxcXHB7U2VwYXJhdG9yfXxcXFxccHtPdGhlcn0nLCAnZ3UnKTtcblx0fSBjYXRjaCB7XG5cdFx0Ly8gU2ltaWxhciB0byB0aGUgYWJvdmUgUmVnRXhwLCBidXQgd29ya3MgZXZlbiB3aGVuIE5vZGUuanMgaGFzIGJlZW4gYnVpbHQgd2l0aG91dCBJQ1Ugc3VwcG9ydC5cblx0XHQvLyBVbmxpa2UgdGhlIGFib3ZlIFJlZ0V4cCwgaXQgb25seSBjb3ZlcnMgd2hpdGVzcGFjZXMgYW5kIEMwL0MxIGNvbnRyb2wgY2hhcmFjdGVycy5cblx0XHQvLyBJdCBkb2VzIG5vdCBjb3ZlciBzb21lIGVkZ2UgY2FzZXMsIHN1Y2ggYXMgVW5pY29kZSByZXNlcnZlZCBjaGFyYWN0ZXJzLlxuXHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2V4ZWNhL2lzc3Vlcy8xMTQzXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcblx0XHRyZXR1cm4gL1tcXHNcXHUwMDAwLVxcdTAwMUZcXHUwMDdGLVxcdTAwOUZcXHUwMEFEXS9nO1xuXHR9XG59O1xuXG5jb25zdCBTUEVDSUFMX0NIQVJfUkVHRVhQID0gZ2V0U3BlY2lhbENoYXJSZWdFeHAoKTtcblxuLy8gQWNjZXB0ZWQgYnkgJCcuLi4nIGluIEJhc2guXG4vLyBFeGNsdWRlIFxcYSBcXGUgXFx2IHdoaWNoIGFyZSBhY2NlcHRlZCBpbiBCYXNoIGJ1dCBub3QgaW4gSmF2YVNjcmlwdCAoZXhjZXB0IFxcdikgYW5kIEpTT04uXG5jb25zdCBDT01NT05fRVNDQVBFUyA9IHtcblx0JyAnOiAnICcsXG5cdCdcXGInOiAnXFxcXGInLFxuXHQnXFxmJzogJ1xcXFxmJyxcblx0J1xcbic6ICdcXFxcbicsXG5cdCdcXHInOiAnXFxcXHInLFxuXHQnXFx0JzogJ1xcXFx0Jyxcbn07XG5cbi8vIFVwIHVudGlsIHRoYXQgY29kZXBvaW50LCBcXHUgbm90YXRpb24gY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBcXFVcbmNvbnN0IEFTVFJBTF9TVEFSVCA9IDY1XzUzNTtcblxuLy8gU29tZSBjaGFyYWN0ZXJzIGFyZSBzaGVsbC1zcGVjaWZpYywgaS5lLiBuZWVkIHRvIGJlIGVzY2FwZWQgd2hlbiB0aGUgY29tbWFuZCBpcyBjb3B5LXBhc3RlZCB0aGVuIHJ1bi5cbi8vIEVzY2FwaW5nIGlzIHNoZWxsLXNwZWNpZmljLiBXZSBjYW5ub3Qga25vdyB3aGljaCBzaGVsbCBpcyB1c2VkOiBgcHJvY2Vzcy5wbGF0Zm9ybWAgZGV0ZWN0aW9uIGlzIG5vdCBlbm91Z2guXG4vLyBGb3IgZXhhbXBsZSwgV2luZG93cyB1c2VycyBjb3VsZCBiZSB1c2luZyBgY21kLmV4ZWAsIFBvd2Vyc2hlbGwgb3IgQmFzaCBmb3IgV2luZG93cyB3aGljaCBhbGwgdXNlIGRpZmZlcmVudCBlc2NhcGluZy5cbi8vIFdlIHVzZSAnLi4uJyBvbiBVbml4LCB3aGljaCBpcyBQT1NJWCBzaGVsbCBjb21wbGlhbnQgYW5kIGVzY2FwZSBhbGwgY2hhcmFjdGVycyBidXQgJyBzbyB0aGlzIGlzIGZhaXJseSBzYWZlLlxuLy8gT24gV2luZG93cywgd2UgYXNzdW1lIGNtZC5leGUgaXMgdXNlZCBhbmQgZXNjYXBlIHdpdGggXCIuLi5cIiwgd2hpY2ggYWxzbyB3b3JrcyB3aXRoIFBvd2Vyc2hlbGwuXG5jb25zdCBxdW90ZVN0cmluZyA9IGVzY2FwZWRBcmd1bWVudCA9PiB7XG5cdGlmIChOT19FU0NBUEVfUkVHRVhQLnRlc3QoZXNjYXBlZEFyZ3VtZW50KSkge1xuXHRcdHJldHVybiBlc2NhcGVkQXJndW1lbnQ7XG5cdH1cblxuXHRyZXR1cm4gcGxhdGZvcm0gPT09ICd3aW4zMidcblx0XHQ/IGBcIiR7ZXNjYXBlZEFyZ3VtZW50LnJlcGxhY2VBbGwoJ1wiJywgJ1wiXCInKX1cImBcblx0XHQ6IGAnJHtlc2NhcGVkQXJndW1lbnQucmVwbGFjZUFsbCgnXFwnJywgJ1xcJ1xcXFxcXCdcXCcnKX0nYDtcbn07XG5cbmNvbnN0IE5PX0VTQ0FQRV9SRUdFWFAgPSAvXltcXHcuLy1dKyQvO1xuIiwgImltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVW5pY29kZVN1cHBvcnRlZCgpIHtcblx0Y29uc3Qge2Vudn0gPSBwcm9jZXNzO1xuXHRjb25zdCB7VEVSTSwgVEVSTV9QUk9HUkFNfSA9IGVudjtcblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ3dpbjMyJykge1xuXHRcdHJldHVybiBURVJNICE9PSAnbGludXgnOyAvLyBMaW51eCBjb25zb2xlIChrZXJuZWwpXG5cdH1cblxuXHRyZXR1cm4gQm9vbGVhbihlbnYuV1RfU0VTU0lPTikgLy8gV2luZG93cyBUZXJtaW5hbFxuXHRcdHx8IEJvb2xlYW4oZW52LlRFUk1JTlVTX1NVQkxJTUUpIC8vIFRlcm1pbnVzICg8MC4yLjI3KVxuXHRcdHx8IGVudi5Db25FbXVUYXNrID09PSAne2NtZDo6Q21kZXJ9JyAvLyBDb25FbXUgYW5kIGNtZGVyXG5cdFx0fHwgVEVSTV9QUk9HUkFNID09PSAnVGVybWludXMtU3VibGltZSdcblx0XHR8fCBURVJNX1BST0dSQU0gPT09ICd2c2NvZGUnXG5cdFx0fHwgVEVSTSA9PT0gJ3h0ZXJtLTI1NmNvbG9yJ1xuXHRcdHx8IFRFUk0gPT09ICdhbGFjcml0dHknXG5cdFx0fHwgVEVSTSA9PT0gJ3J4dnQtdW5pY29kZSdcblx0XHR8fCBURVJNID09PSAncnh2dC11bmljb2RlLTI1NmNvbG9yJ1xuXHRcdHx8IGVudi5URVJNSU5BTF9FTVVMQVRPUiA9PT0gJ0pldEJyYWlucy1KZWRpVGVybSc7XG59XG4iLCAiaW1wb3J0IGlzVW5pY29kZVN1cHBvcnRlZCBmcm9tICdpcy11bmljb2RlLXN1cHBvcnRlZCc7XG5cbmNvbnN0IGNvbW1vbiA9IHtcblx0Y2lyY2xlUXVlc3Rpb25NYXJrOiAnKD8pJyxcblx0cXVlc3Rpb25NYXJrUHJlZml4OiAnKD8pJyxcblx0c3F1YXJlOiAnXHUyNTg4Jyxcblx0c3F1YXJlRGFya1NoYWRlOiAnXHUyNTkzJyxcblx0c3F1YXJlTWVkaXVtU2hhZGU6ICdcdTI1OTInLFxuXHRzcXVhcmVMaWdodFNoYWRlOiAnXHUyNTkxJyxcblx0c3F1YXJlVG9wOiAnXHUyNTgwJyxcblx0c3F1YXJlQm90dG9tOiAnXHUyNTg0Jyxcblx0c3F1YXJlTGVmdDogJ1x1MjU4QycsXG5cdHNxdWFyZVJpZ2h0OiAnXHUyNTkwJyxcblx0c3F1YXJlQ2VudGVyOiAnXHUyNUEwJyxcblx0YnVsbGV0OiAnXHUyNUNGJyxcblx0ZG90OiAnXHUyMDI0Jyxcblx0ZWxsaXBzaXM6ICdcdTIwMjYnLFxuXHRwb2ludGVyU21hbGw6ICdcdTIwM0EnLFxuXHR0cmlhbmdsZVVwOiAnXHUyNUIyJyxcblx0dHJpYW5nbGVVcFNtYWxsOiAnXHUyNUI0Jyxcblx0dHJpYW5nbGVEb3duOiAnXHUyNUJDJyxcblx0dHJpYW5nbGVEb3duU21hbGw6ICdcdTI1QkUnLFxuXHR0cmlhbmdsZUxlZnRTbWFsbDogJ1x1MjVDMicsXG5cdHRyaWFuZ2xlUmlnaHRTbWFsbDogJ1x1MjVCOCcsXG5cdGhvbWU6ICdcdTIzMDInLFxuXHRoZWFydDogJ1x1MjY2NScsXG5cdG11c2ljTm90ZTogJ1x1MjY2QScsXG5cdG11c2ljTm90ZUJlYW1lZDogJ1x1MjY2QicsXG5cdGFycm93VXA6ICdcdTIxOTEnLFxuXHRhcnJvd0Rvd246ICdcdTIxOTMnLFxuXHRhcnJvd0xlZnQ6ICdcdTIxOTAnLFxuXHRhcnJvd1JpZ2h0OiAnXHUyMTkyJyxcblx0YXJyb3dMZWZ0UmlnaHQ6ICdcdTIxOTQnLFxuXHRhcnJvd1VwRG93bjogJ1x1MjE5NScsXG5cdGFsbW9zdEVxdWFsOiAnXHUyMjQ4Jyxcblx0bm90RXF1YWw6ICdcdTIyNjAnLFxuXHRsZXNzT3JFcXVhbDogJ1x1MjI2NCcsXG5cdGdyZWF0ZXJPckVxdWFsOiAnXHUyMjY1Jyxcblx0aWRlbnRpY2FsOiAnXHUyMjYxJyxcblx0aW5maW5pdHk6ICdcdTIyMUUnLFxuXHRzdWJzY3JpcHRaZXJvOiAnXHUyMDgwJyxcblx0c3Vic2NyaXB0T25lOiAnXHUyMDgxJyxcblx0c3Vic2NyaXB0VHdvOiAnXHUyMDgyJyxcblx0c3Vic2NyaXB0VGhyZWU6ICdcdTIwODMnLFxuXHRzdWJzY3JpcHRGb3VyOiAnXHUyMDg0Jyxcblx0c3Vic2NyaXB0Rml2ZTogJ1x1MjA4NScsXG5cdHN1YnNjcmlwdFNpeDogJ1x1MjA4NicsXG5cdHN1YnNjcmlwdFNldmVuOiAnXHUyMDg3Jyxcblx0c3Vic2NyaXB0RWlnaHQ6ICdcdTIwODgnLFxuXHRzdWJzY3JpcHROaW5lOiAnXHUyMDg5Jyxcblx0b25lSGFsZjogJ1x1MDBCRCcsXG5cdG9uZVRoaXJkOiAnXHUyMTUzJyxcblx0b25lUXVhcnRlcjogJ1x1MDBCQycsXG5cdG9uZUZpZnRoOiAnXHUyMTU1Jyxcblx0b25lU2l4dGg6ICdcdTIxNTknLFxuXHRvbmVFaWdodGg6ICdcdTIxNUInLFxuXHR0d29UaGlyZHM6ICdcdTIxNTQnLFxuXHR0d29GaWZ0aHM6ICdcdTIxNTYnLFxuXHR0aHJlZVF1YXJ0ZXJzOiAnXHUwMEJFJyxcblx0dGhyZWVGaWZ0aHM6ICdcdTIxNTcnLFxuXHR0aHJlZUVpZ2h0aHM6ICdcdTIxNUMnLFxuXHRmb3VyRmlmdGhzOiAnXHUyMTU4Jyxcblx0Zml2ZVNpeHRoczogJ1x1MjE1QScsXG5cdGZpdmVFaWdodGhzOiAnXHUyMTVEJyxcblx0c2V2ZW5FaWdodGhzOiAnXHUyMTVFJyxcblx0bGluZTogJ1x1MjUwMCcsXG5cdGxpbmVCb2xkOiAnXHUyNTAxJyxcblx0bGluZURvdWJsZTogJ1x1MjU1MCcsXG5cdGxpbmVEYXNoZWQwOiAnXHUyNTA0Jyxcblx0bGluZURhc2hlZDE6ICdcdTI1MDUnLFxuXHRsaW5lRGFzaGVkMjogJ1x1MjUwOCcsXG5cdGxpbmVEYXNoZWQzOiAnXHUyNTA5Jyxcblx0bGluZURhc2hlZDQ6ICdcdTI1NEMnLFxuXHRsaW5lRGFzaGVkNTogJ1x1MjU0RCcsXG5cdGxpbmVEYXNoZWQ2OiAnXHUyNTc0Jyxcblx0bGluZURhc2hlZDc6ICdcdTI1NzYnLFxuXHRsaW5lRGFzaGVkODogJ1x1MjU3OCcsXG5cdGxpbmVEYXNoZWQ5OiAnXHUyNTdBJyxcblx0bGluZURhc2hlZDEwOiAnXHUyNTdDJyxcblx0bGluZURhc2hlZDExOiAnXHUyNTdFJyxcblx0bGluZURhc2hlZDEyOiAnXHUyMjEyJyxcblx0bGluZURhc2hlZDEzOiAnXHUyMDEzJyxcblx0bGluZURhc2hlZDE0OiAnXHUyMDEwJyxcblx0bGluZURhc2hlZDE1OiAnXHUyMDQzJyxcblx0bGluZVZlcnRpY2FsOiAnXHUyNTAyJyxcblx0bGluZVZlcnRpY2FsQm9sZDogJ1x1MjUwMycsXG5cdGxpbmVWZXJ0aWNhbERvdWJsZTogJ1x1MjU1MScsXG5cdGxpbmVWZXJ0aWNhbERhc2hlZDA6ICdcdTI1MDYnLFxuXHRsaW5lVmVydGljYWxEYXNoZWQxOiAnXHUyNTA3Jyxcblx0bGluZVZlcnRpY2FsRGFzaGVkMjogJ1x1MjUwQScsXG5cdGxpbmVWZXJ0aWNhbERhc2hlZDM6ICdcdTI1MEInLFxuXHRsaW5lVmVydGljYWxEYXNoZWQ0OiAnXHUyNTRFJyxcblx0bGluZVZlcnRpY2FsRGFzaGVkNTogJ1x1MjU0RicsXG5cdGxpbmVWZXJ0aWNhbERhc2hlZDY6ICdcdTI1NzUnLFxuXHRsaW5lVmVydGljYWxEYXNoZWQ3OiAnXHUyNTc3Jyxcblx0bGluZVZlcnRpY2FsRGFzaGVkODogJ1x1MjU3OScsXG5cdGxpbmVWZXJ0aWNhbERhc2hlZDk6ICdcdTI1N0InLFxuXHRsaW5lVmVydGljYWxEYXNoZWQxMDogJ1x1MjU3RCcsXG5cdGxpbmVWZXJ0aWNhbERhc2hlZDExOiAnXHUyNTdGJyxcblx0bGluZURvd25MZWZ0OiAnXHUyNTEwJyxcblx0bGluZURvd25MZWZ0QXJjOiAnXHUyNTZFJyxcblx0bGluZURvd25Cb2xkTGVmdEJvbGQ6ICdcdTI1MTMnLFxuXHRsaW5lRG93bkJvbGRMZWZ0OiAnXHUyNTEyJyxcblx0bGluZURvd25MZWZ0Qm9sZDogJ1x1MjUxMScsXG5cdGxpbmVEb3duRG91YmxlTGVmdERvdWJsZTogJ1x1MjU1NycsXG5cdGxpbmVEb3duRG91YmxlTGVmdDogJ1x1MjU1NicsXG5cdGxpbmVEb3duTGVmdERvdWJsZTogJ1x1MjU1NScsXG5cdGxpbmVEb3duUmlnaHQ6ICdcdTI1MEMnLFxuXHRsaW5lRG93blJpZ2h0QXJjOiAnXHUyNTZEJyxcblx0bGluZURvd25Cb2xkUmlnaHRCb2xkOiAnXHUyNTBGJyxcblx0bGluZURvd25Cb2xkUmlnaHQ6ICdcdTI1MEUnLFxuXHRsaW5lRG93blJpZ2h0Qm9sZDogJ1x1MjUwRCcsXG5cdGxpbmVEb3duRG91YmxlUmlnaHREb3VibGU6ICdcdTI1NTQnLFxuXHRsaW5lRG93bkRvdWJsZVJpZ2h0OiAnXHUyNTUzJyxcblx0bGluZURvd25SaWdodERvdWJsZTogJ1x1MjU1MicsXG5cdGxpbmVVcExlZnQ6ICdcdTI1MTgnLFxuXHRsaW5lVXBMZWZ0QXJjOiAnXHUyNTZGJyxcblx0bGluZVVwQm9sZExlZnRCb2xkOiAnXHUyNTFCJyxcblx0bGluZVVwQm9sZExlZnQ6ICdcdTI1MUEnLFxuXHRsaW5lVXBMZWZ0Qm9sZDogJ1x1MjUxOScsXG5cdGxpbmVVcERvdWJsZUxlZnREb3VibGU6ICdcdTI1NUQnLFxuXHRsaW5lVXBEb3VibGVMZWZ0OiAnXHUyNTVDJyxcblx0bGluZVVwTGVmdERvdWJsZTogJ1x1MjU1QicsXG5cdGxpbmVVcFJpZ2h0OiAnXHUyNTE0Jyxcblx0bGluZVVwUmlnaHRBcmM6ICdcdTI1NzAnLFxuXHRsaW5lVXBCb2xkUmlnaHRCb2xkOiAnXHUyNTE3Jyxcblx0bGluZVVwQm9sZFJpZ2h0OiAnXHUyNTE2Jyxcblx0bGluZVVwUmlnaHRCb2xkOiAnXHUyNTE1Jyxcblx0bGluZVVwRG91YmxlUmlnaHREb3VibGU6ICdcdTI1NUEnLFxuXHRsaW5lVXBEb3VibGVSaWdodDogJ1x1MjU1OScsXG5cdGxpbmVVcFJpZ2h0RG91YmxlOiAnXHUyNTU4Jyxcblx0bGluZVVwRG93bkxlZnQ6ICdcdTI1MjQnLFxuXHRsaW5lVXBCb2xkRG93bkJvbGRMZWZ0Qm9sZDogJ1x1MjUyQicsXG5cdGxpbmVVcEJvbGREb3duQm9sZExlZnQ6ICdcdTI1MjgnLFxuXHRsaW5lVXBEb3duTGVmdEJvbGQ6ICdcdTI1MjUnLFxuXHRsaW5lVXBCb2xkRG93bkxlZnRCb2xkOiAnXHUyNTI5Jyxcblx0bGluZVVwRG93bkJvbGRMZWZ0Qm9sZDogJ1x1MjUyQScsXG5cdGxpbmVVcERvd25Cb2xkTGVmdDogJ1x1MjUyNycsXG5cdGxpbmVVcEJvbGREb3duTGVmdDogJ1x1MjUyNicsXG5cdGxpbmVVcERvdWJsZURvd25Eb3VibGVMZWZ0RG91YmxlOiAnXHUyNTYzJyxcblx0bGluZVVwRG91YmxlRG93bkRvdWJsZUxlZnQ6ICdcdTI1NjInLFxuXHRsaW5lVXBEb3duTGVmdERvdWJsZTogJ1x1MjU2MScsXG5cdGxpbmVVcERvd25SaWdodDogJ1x1MjUxQycsXG5cdGxpbmVVcEJvbGREb3duQm9sZFJpZ2h0Qm9sZDogJ1x1MjUyMycsXG5cdGxpbmVVcEJvbGREb3duQm9sZFJpZ2h0OiAnXHUyNTIwJyxcblx0bGluZVVwRG93blJpZ2h0Qm9sZDogJ1x1MjUxRCcsXG5cdGxpbmVVcEJvbGREb3duUmlnaHRCb2xkOiAnXHUyNTIxJyxcblx0bGluZVVwRG93bkJvbGRSaWdodEJvbGQ6ICdcdTI1MjInLFxuXHRsaW5lVXBEb3duQm9sZFJpZ2h0OiAnXHUyNTFGJyxcblx0bGluZVVwQm9sZERvd25SaWdodDogJ1x1MjUxRScsXG5cdGxpbmVVcERvdWJsZURvd25Eb3VibGVSaWdodERvdWJsZTogJ1x1MjU2MCcsXG5cdGxpbmVVcERvdWJsZURvd25Eb3VibGVSaWdodDogJ1x1MjU1RicsXG5cdGxpbmVVcERvd25SaWdodERvdWJsZTogJ1x1MjU1RScsXG5cdGxpbmVEb3duTGVmdFJpZ2h0OiAnXHUyNTJDJyxcblx0bGluZURvd25Cb2xkTGVmdEJvbGRSaWdodEJvbGQ6ICdcdTI1MzMnLFxuXHRsaW5lRG93bkxlZnRCb2xkUmlnaHRCb2xkOiAnXHUyNTJGJyxcblx0bGluZURvd25Cb2xkTGVmdFJpZ2h0OiAnXHUyNTMwJyxcblx0bGluZURvd25Cb2xkTGVmdEJvbGRSaWdodDogJ1x1MjUzMScsXG5cdGxpbmVEb3duQm9sZExlZnRSaWdodEJvbGQ6ICdcdTI1MzInLFxuXHRsaW5lRG93bkxlZnRSaWdodEJvbGQ6ICdcdTI1MkUnLFxuXHRsaW5lRG93bkxlZnRCb2xkUmlnaHQ6ICdcdTI1MkQnLFxuXHRsaW5lRG93bkRvdWJsZUxlZnREb3VibGVSaWdodERvdWJsZTogJ1x1MjU2NicsXG5cdGxpbmVEb3duRG91YmxlTGVmdFJpZ2h0OiAnXHUyNTY1Jyxcblx0bGluZURvd25MZWZ0RG91YmxlUmlnaHREb3VibGU6ICdcdTI1NjQnLFxuXHRsaW5lVXBMZWZ0UmlnaHQ6ICdcdTI1MzQnLFxuXHRsaW5lVXBCb2xkTGVmdEJvbGRSaWdodEJvbGQ6ICdcdTI1M0InLFxuXHRsaW5lVXBMZWZ0Qm9sZFJpZ2h0Qm9sZDogJ1x1MjUzNycsXG5cdGxpbmVVcEJvbGRMZWZ0UmlnaHQ6ICdcdTI1MzgnLFxuXHRsaW5lVXBCb2xkTGVmdEJvbGRSaWdodDogJ1x1MjUzOScsXG5cdGxpbmVVcEJvbGRMZWZ0UmlnaHRCb2xkOiAnXHUyNTNBJyxcblx0bGluZVVwTGVmdFJpZ2h0Qm9sZDogJ1x1MjUzNicsXG5cdGxpbmVVcExlZnRCb2xkUmlnaHQ6ICdcdTI1MzUnLFxuXHRsaW5lVXBEb3VibGVMZWZ0RG91YmxlUmlnaHREb3VibGU6ICdcdTI1NjknLFxuXHRsaW5lVXBEb3VibGVMZWZ0UmlnaHQ6ICdcdTI1NjgnLFxuXHRsaW5lVXBMZWZ0RG91YmxlUmlnaHREb3VibGU6ICdcdTI1NjcnLFxuXHRsaW5lVXBEb3duTGVmdFJpZ2h0OiAnXHUyNTNDJyxcblx0bGluZVVwQm9sZERvd25Cb2xkTGVmdEJvbGRSaWdodEJvbGQ6ICdcdTI1NEInLFxuXHRsaW5lVXBEb3duQm9sZExlZnRCb2xkUmlnaHRCb2xkOiAnXHUyNTQ4Jyxcblx0bGluZVVwQm9sZERvd25MZWZ0Qm9sZFJpZ2h0Qm9sZDogJ1x1MjU0NycsXG5cdGxpbmVVcEJvbGREb3duQm9sZExlZnRSaWdodEJvbGQ6ICdcdTI1NEEnLFxuXHRsaW5lVXBCb2xkRG93bkJvbGRMZWZ0Qm9sZFJpZ2h0OiAnXHUyNTQ5Jyxcblx0bGluZVVwQm9sZERvd25MZWZ0UmlnaHQ6ICdcdTI1NDAnLFxuXHRsaW5lVXBEb3duQm9sZExlZnRSaWdodDogJ1x1MjU0MScsXG5cdGxpbmVVcERvd25MZWZ0Qm9sZFJpZ2h0OiAnXHUyNTNEJyxcblx0bGluZVVwRG93bkxlZnRSaWdodEJvbGQ6ICdcdTI1M0UnLFxuXHRsaW5lVXBCb2xkRG93bkJvbGRMZWZ0UmlnaHQ6ICdcdTI1NDInLFxuXHRsaW5lVXBEb3duTGVmdEJvbGRSaWdodEJvbGQ6ICdcdTI1M0YnLFxuXHRsaW5lVXBCb2xkRG93bkxlZnRCb2xkUmlnaHQ6ICdcdTI1NDMnLFxuXHRsaW5lVXBCb2xkRG93bkxlZnRSaWdodEJvbGQ6ICdcdTI1NDQnLFxuXHRsaW5lVXBEb3duQm9sZExlZnRCb2xkUmlnaHQ6ICdcdTI1NDUnLFxuXHRsaW5lVXBEb3duQm9sZExlZnRSaWdodEJvbGQ6ICdcdTI1NDYnLFxuXHRsaW5lVXBEb3VibGVEb3duRG91YmxlTGVmdERvdWJsZVJpZ2h0RG91YmxlOiAnXHUyNTZDJyxcblx0bGluZVVwRG91YmxlRG93bkRvdWJsZUxlZnRSaWdodDogJ1x1MjU2QicsXG5cdGxpbmVVcERvd25MZWZ0RG91YmxlUmlnaHREb3VibGU6ICdcdTI1NkEnLFxuXHRsaW5lQ3Jvc3M6ICdcdTI1NzMnLFxuXHRsaW5lQmFja3NsYXNoOiAnXHUyNTcyJyxcblx0bGluZVNsYXNoOiAnXHUyNTcxJyxcbn07XG5cbmNvbnN0IHNwZWNpYWxNYWluU3ltYm9scyA9IHtcblx0dGljazogJ1x1MjcxNCcsXG5cdGluZm86ICdcdTIxMzknLFxuXHR3YXJuaW5nOiAnXHUyNkEwJyxcblx0Y3Jvc3M6ICdcdTI3MTgnLFxuXHRzcXVhcmVTbWFsbDogJ1x1MjVGQicsXG5cdHNxdWFyZVNtYWxsRmlsbGVkOiAnXHUyNUZDJyxcblx0Y2lyY2xlOiAnXHUyNUVGJyxcblx0Y2lyY2xlRmlsbGVkOiAnXHUyNUM5Jyxcblx0Y2lyY2xlRG90dGVkOiAnXHUyNUNDJyxcblx0Y2lyY2xlRG91YmxlOiAnXHUyNUNFJyxcblx0Y2lyY2xlQ2lyY2xlOiAnXHUyNERFJyxcblx0Y2lyY2xlQ3Jvc3M6ICdcdTI0RTcnLFxuXHRjaXJjbGVQaXBlOiAnXHUyNEJFJyxcblx0cmFkaW9PbjogJ1x1MjVDOScsXG5cdHJhZGlvT2ZmOiAnXHUyNUVGJyxcblx0Y2hlY2tib3hPbjogJ1x1MjYxMicsXG5cdGNoZWNrYm94T2ZmOiAnXHUyNjEwJyxcblx0Y2hlY2tib3hDaXJjbGVPbjogJ1x1MjRFNycsXG5cdGNoZWNrYm94Q2lyY2xlT2ZmOiAnXHUyNEJFJyxcblx0cG9pbnRlcjogJ1x1Mjc2RicsXG5cdHRyaWFuZ2xlVXBPdXRsaW5lOiAnXHUyNUIzJyxcblx0dHJpYW5nbGVMZWZ0OiAnXHUyNUMwJyxcblx0dHJpYW5nbGVSaWdodDogJ1x1MjVCNicsXG5cdGxvemVuZ2U6ICdcdTI1QzYnLFxuXHRsb3plbmdlT3V0bGluZTogJ1x1MjVDNycsXG5cdGhhbWJ1cmdlcjogJ1x1MjYzMCcsXG5cdHNtaWxleTogJ1x1MzJFMScsXG5cdG11c3RhY2hlOiAnXHUwREY0Jyxcblx0c3RhcjogJ1x1MjYwNScsXG5cdHBsYXk6ICdcdTI1QjYnLFxuXHRub2RlanM6ICdcdTJCMjInLFxuXHRvbmVTZXZlbnRoOiAnXHUyMTUwJyxcblx0b25lTmludGg6ICdcdTIxNTEnLFxuXHRvbmVUZW50aDogJ1x1MjE1MicsXG59O1xuXG5jb25zdCBzcGVjaWFsRmFsbGJhY2tTeW1ib2xzID0ge1xuXHR0aWNrOiAnXHUyMjFBJyxcblx0aW5mbzogJ2knLFxuXHR3YXJuaW5nOiAnXHUyMDNDJyxcblx0Y3Jvc3M6ICdcdTAwRDcnLFxuXHRzcXVhcmVTbWFsbDogJ1x1MjVBMScsXG5cdHNxdWFyZVNtYWxsRmlsbGVkOiAnXHUyNUEwJyxcblx0Y2lyY2xlOiAnKCApJyxcblx0Y2lyY2xlRmlsbGVkOiAnKCopJyxcblx0Y2lyY2xlRG90dGVkOiAnKCApJyxcblx0Y2lyY2xlRG91YmxlOiAnKCApJyxcblx0Y2lyY2xlQ2lyY2xlOiAnKFx1MjVDQiknLFxuXHRjaXJjbGVDcm9zczogJyhcdTAwRDcpJyxcblx0Y2lyY2xlUGlwZTogJyhcdTI1MDIpJyxcblx0cmFkaW9PbjogJygqKScsXG5cdHJhZGlvT2ZmOiAnKCApJyxcblx0Y2hlY2tib3hPbjogJ1tcdTAwRDddJyxcblx0Y2hlY2tib3hPZmY6ICdbIF0nLFxuXHRjaGVja2JveENpcmNsZU9uOiAnKFx1MDBENyknLFxuXHRjaGVja2JveENpcmNsZU9mZjogJyggKScsXG5cdHBvaW50ZXI6ICc+Jyxcblx0dHJpYW5nbGVVcE91dGxpbmU6ICdcdTIyMDYnLFxuXHR0cmlhbmdsZUxlZnQ6ICdcdTI1QzQnLFxuXHR0cmlhbmdsZVJpZ2h0OiAnXHUyNUJBJyxcblx0bG96ZW5nZTogJ1x1MjY2NicsXG5cdGxvemVuZ2VPdXRsaW5lOiAnXHUyNUNBJyxcblx0aGFtYnVyZ2VyOiAnXHUyMjYxJyxcblx0c21pbGV5OiAnXHUyNjNBJyxcblx0bXVzdGFjaGU6ICdcdTI1MENcdTI1MDBcdTI1MTAnLFxuXHRzdGFyOiAnXHUyNzM2Jyxcblx0cGxheTogJ1x1MjVCQScsXG5cdG5vZGVqczogJ1x1MjY2NicsXG5cdG9uZVNldmVudGg6ICcxLzcnLFxuXHRvbmVOaW50aDogJzEvOScsXG5cdG9uZVRlbnRoOiAnMS8xMCcsXG59O1xuXG5leHBvcnQgY29uc3QgbWFpblN5bWJvbHMgPSB7Li4uY29tbW9uLCAuLi5zcGVjaWFsTWFpblN5bWJvbHN9O1xuZXhwb3J0IGNvbnN0IGZhbGxiYWNrU3ltYm9scyA9IHsuLi5jb21tb24sIC4uLnNwZWNpYWxGYWxsYmFja1N5bWJvbHN9O1xuXG5jb25zdCBzaG91bGRVc2VNYWluID0gaXNVbmljb2RlU3VwcG9ydGVkKCk7XG5jb25zdCBmaWd1cmVzID0gc2hvdWxkVXNlTWFpbiA/IG1haW5TeW1ib2xzIDogZmFsbGJhY2tTeW1ib2xzO1xuZXhwb3J0IGRlZmF1bHQgZmlndXJlcztcblxuY29uc3QgcmVwbGFjZW1lbnRzID0gT2JqZWN0LmVudHJpZXMoc3BlY2lhbE1haW5TeW1ib2xzKTtcblxuLy8gT24gdGVybWluYWxzIHdoaWNoIGRvIG5vdCBzdXBwb3J0IFVuaWNvZGUgc3ltYm9scywgc3Vic3RpdHV0ZSB0aGVtIHRvIG90aGVyIHN5bWJvbHNcbmV4cG9ydCBjb25zdCByZXBsYWNlU3ltYm9scyA9IChzdHJpbmcsIHt1c2VGYWxsYmFjayA9ICFzaG91bGRVc2VNYWlufSA9IHt9KSA9PiB7XG5cdGlmICh1c2VGYWxsYmFjaykge1xuXHRcdGZvciAoY29uc3QgW2tleSwgbWFpblN5bWJvbF0gb2YgcmVwbGFjZW1lbnRzKSB7XG5cdFx0XHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZUFsbChtYWluU3ltYm9sLCBmYWxsYmFja1N5bWJvbHNba2V5XSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cmluZztcbn07XG4iLCAiaW1wb3J0IHR0eSBmcm9tICdub2RlOnR0eSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby13YXJuaW5nLWNvbW1lbnRzXG4vLyBUT0RPOiBVc2UgYSBiZXR0ZXIgbWV0aG9kIHdoZW4gaXQncyBhZGRlZCB0byBOb2RlLmpzIChodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvcHVsbC80MDI0MClcbi8vIExvdHMgb2Ygb3B0aW9uYWxzIGhlcmUgdG8gc3VwcG9ydCBEZW5vLlxuY29uc3QgaGFzQ29sb3JzID0gdHR5Py5Xcml0ZVN0cmVhbT8ucHJvdG90eXBlPy5oYXNDb2xvcnM/LigpID8/IGZhbHNlO1xuXG5jb25zdCBmb3JtYXQgPSAob3BlbiwgY2xvc2UpID0+IHtcblx0aWYgKCFoYXNDb2xvcnMpIHtcblx0XHRyZXR1cm4gaW5wdXQgPT4gaW5wdXQ7XG5cdH1cblxuXHRjb25zdCBvcGVuQ29kZSA9IGBcXHUwMDFCWyR7b3Blbn1tYDtcblx0Y29uc3QgY2xvc2VDb2RlID0gYFxcdTAwMUJbJHtjbG9zZX1tYDtcblxuXHRyZXR1cm4gaW5wdXQgPT4ge1xuXHRcdGNvbnN0IHN0cmluZyA9IGlucHV0ICsgJyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8taW1wbGljaXQtY29lcmNpb24gLS0gVGhpcyBpcyBmYXN0ZXIuXG5cdFx0bGV0IGluZGV4ID0gc3RyaW5nLmluZGV4T2YoY2xvc2VDb2RlKTtcblxuXHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdC8vIE5vdGU6IEludGVudGlvbmFsbHkgbm90IHVzaW5nIHN0cmluZyBpbnRlcnBvbGF0aW9uIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuXHRcdFx0cmV0dXJuIG9wZW5Db2RlICsgc3RyaW5nICsgY2xvc2VDb2RlO1xuXHRcdH1cblxuXHRcdC8vIEhhbmRsZSBuZXN0ZWQgY29sb3JzLlxuXG5cdFx0Ly8gV2UgY291bGQgaGF2ZSBkb25lIHRoaXMsIGJ1dCBpdCdzIHRvbyBzbG93IChhcyBvZiBOb2RlLmpzIDIyKS5cblx0XHQvLyByZXR1cm4gb3BlbkNvZGUgKyBzdHJpbmcucmVwbGFjZUFsbChjbG9zZUNvZGUsIG9wZW5Db2RlKSArIGNsb3NlQ29kZTtcblxuXHRcdGxldCByZXN1bHQgPSBvcGVuQ29kZTtcblx0XHRsZXQgbGFzdEluZGV4ID0gMDtcblxuXHRcdHdoaWxlIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdHJlc3VsdCArPSBzdHJpbmcuc2xpY2UobGFzdEluZGV4LCBpbmRleCkgKyBvcGVuQ29kZTtcblx0XHRcdGxhc3RJbmRleCA9IGluZGV4ICsgY2xvc2VDb2RlLmxlbmd0aDtcblx0XHRcdGluZGV4ID0gc3RyaW5nLmluZGV4T2YoY2xvc2VDb2RlLCBsYXN0SW5kZXgpO1xuXHRcdH1cblxuXHRcdHJlc3VsdCArPSBzdHJpbmcuc2xpY2UobGFzdEluZGV4KSArIGNsb3NlQ29kZTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXQgPSBmb3JtYXQoMCwgMCk7XG5leHBvcnQgY29uc3QgYm9sZCA9IGZvcm1hdCgxLCAyMik7XG5leHBvcnQgY29uc3QgZGltID0gZm9ybWF0KDIsIDIyKTtcbmV4cG9ydCBjb25zdCBpdGFsaWMgPSBmb3JtYXQoMywgMjMpO1xuZXhwb3J0IGNvbnN0IHVuZGVybGluZSA9IGZvcm1hdCg0LCAyNCk7XG5leHBvcnQgY29uc3Qgb3ZlcmxpbmUgPSBmb3JtYXQoNTMsIDU1KTtcbmV4cG9ydCBjb25zdCBpbnZlcnNlID0gZm9ybWF0KDcsIDI3KTtcbmV4cG9ydCBjb25zdCBoaWRkZW4gPSBmb3JtYXQoOCwgMjgpO1xuZXhwb3J0IGNvbnN0IHN0cmlrZXRocm91Z2ggPSBmb3JtYXQoOSwgMjkpO1xuXG5leHBvcnQgY29uc3QgYmxhY2sgPSBmb3JtYXQoMzAsIDM5KTtcbmV4cG9ydCBjb25zdCByZWQgPSBmb3JtYXQoMzEsIDM5KTtcbmV4cG9ydCBjb25zdCBncmVlbiA9IGZvcm1hdCgzMiwgMzkpO1xuZXhwb3J0IGNvbnN0IHllbGxvdyA9IGZvcm1hdCgzMywgMzkpO1xuZXhwb3J0IGNvbnN0IGJsdWUgPSBmb3JtYXQoMzQsIDM5KTtcbmV4cG9ydCBjb25zdCBtYWdlbnRhID0gZm9ybWF0KDM1LCAzOSk7XG5leHBvcnQgY29uc3QgY3lhbiA9IGZvcm1hdCgzNiwgMzkpO1xuZXhwb3J0IGNvbnN0IHdoaXRlID0gZm9ybWF0KDM3LCAzOSk7XG5leHBvcnQgY29uc3QgZ3JheSA9IGZvcm1hdCg5MCwgMzkpO1xuXG5leHBvcnQgY29uc3QgYmdCbGFjayA9IGZvcm1hdCg0MCwgNDkpO1xuZXhwb3J0IGNvbnN0IGJnUmVkID0gZm9ybWF0KDQxLCA0OSk7XG5leHBvcnQgY29uc3QgYmdHcmVlbiA9IGZvcm1hdCg0MiwgNDkpO1xuZXhwb3J0IGNvbnN0IGJnWWVsbG93ID0gZm9ybWF0KDQzLCA0OSk7XG5leHBvcnQgY29uc3QgYmdCbHVlID0gZm9ybWF0KDQ0LCA0OSk7XG5leHBvcnQgY29uc3QgYmdNYWdlbnRhID0gZm9ybWF0KDQ1LCA0OSk7XG5leHBvcnQgY29uc3QgYmdDeWFuID0gZm9ybWF0KDQ2LCA0OSk7XG5leHBvcnQgY29uc3QgYmdXaGl0ZSA9IGZvcm1hdCg0NywgNDkpO1xuZXhwb3J0IGNvbnN0IGJnR3JheSA9IGZvcm1hdCgxMDAsIDQ5KTtcblxuZXhwb3J0IGNvbnN0IHJlZEJyaWdodCA9IGZvcm1hdCg5MSwgMzkpO1xuZXhwb3J0IGNvbnN0IGdyZWVuQnJpZ2h0ID0gZm9ybWF0KDkyLCAzOSk7XG5leHBvcnQgY29uc3QgeWVsbG93QnJpZ2h0ID0gZm9ybWF0KDkzLCAzOSk7XG5leHBvcnQgY29uc3QgYmx1ZUJyaWdodCA9IGZvcm1hdCg5NCwgMzkpO1xuZXhwb3J0IGNvbnN0IG1hZ2VudGFCcmlnaHQgPSBmb3JtYXQoOTUsIDM5KTtcbmV4cG9ydCBjb25zdCBjeWFuQnJpZ2h0ID0gZm9ybWF0KDk2LCAzOSk7XG5leHBvcnQgY29uc3Qgd2hpdGVCcmlnaHQgPSBmb3JtYXQoOTcsIDM5KTtcblxuZXhwb3J0IGNvbnN0IGJnUmVkQnJpZ2h0ID0gZm9ybWF0KDEwMSwgNDkpO1xuZXhwb3J0IGNvbnN0IGJnR3JlZW5CcmlnaHQgPSBmb3JtYXQoMTAyLCA0OSk7XG5leHBvcnQgY29uc3QgYmdZZWxsb3dCcmlnaHQgPSBmb3JtYXQoMTAzLCA0OSk7XG5leHBvcnQgY29uc3QgYmdCbHVlQnJpZ2h0ID0gZm9ybWF0KDEwNCwgNDkpO1xuZXhwb3J0IGNvbnN0IGJnTWFnZW50YUJyaWdodCA9IGZvcm1hdCgxMDUsIDQ5KTtcbmV4cG9ydCBjb25zdCBiZ0N5YW5CcmlnaHQgPSBmb3JtYXQoMTA2LCA0OSk7XG5leHBvcnQgY29uc3QgYmdXaGl0ZUJyaWdodCA9IGZvcm1hdCgxMDcsIDQ5KTtcbiIsICJleHBvcnQgKiBmcm9tICcuL2Jhc2UuanMnO1xuZXhwb3J0ICogYXMgZGVmYXVsdCBmcm9tICcuL2Jhc2UuanMnO1xuIiwgImltcG9ydCBmaWd1cmVzIGZyb20gJ2ZpZ3VyZXMnO1xuaW1wb3J0IHtcblx0Z3JheSxcblx0Ym9sZCxcblx0cmVkQnJpZ2h0LFxuXHR5ZWxsb3dCcmlnaHQsXG59IGZyb20gJ3lvY3RvY29sb3JzJztcblxuLy8gRGVmYXVsdCB3aGVuIGB2ZXJib3NlYCBpcyBub3QgYSBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRWZXJib3NlRnVuY3Rpb24gPSAoe1xuXHR0eXBlLFxuXHRtZXNzYWdlLFxuXHR0aW1lc3RhbXAsXG5cdHBpcGVkLFxuXHRjb21tYW5kSWQsXG5cdHJlc3VsdDoge2ZhaWxlZCA9IGZhbHNlfSA9IHt9LFxuXHRvcHRpb25zOiB7cmVqZWN0ID0gdHJ1ZX0sXG59KSA9PiB7XG5cdGNvbnN0IHRpbWVzdGFtcFN0cmluZyA9IHNlcmlhbGl6ZVRpbWVzdGFtcCh0aW1lc3RhbXApO1xuXHRjb25zdCBpY29uID0gSUNPTlNbdHlwZV0oe2ZhaWxlZCwgcmVqZWN0LCBwaXBlZH0pO1xuXHRjb25zdCBjb2xvciA9IENPTE9SU1t0eXBlXSh7cmVqZWN0fSk7XG5cdHJldHVybiBgJHtncmF5KGBbJHt0aW1lc3RhbXBTdHJpbmd9XWApfSAke2dyYXkoYFske2NvbW1hbmRJZH1dYCl9ICR7Y29sb3IoaWNvbil9ICR7Y29sb3IobWVzc2FnZSl9YDtcbn07XG5cbi8vIFByZXBlbmRpbmcgdGhlIHRpbWVzdGFtcCBhbGxvd3MgZGVidWdnaW5nIHRoZSBzbG93IHBhdGhzIG9mIGEgc3VicHJvY2Vzc1xuY29uc3Qgc2VyaWFsaXplVGltZXN0YW1wID0gdGltZXN0YW1wID0+IGAke3BhZEZpZWxkKHRpbWVzdGFtcC5nZXRIb3VycygpLCAyKX06JHtwYWRGaWVsZCh0aW1lc3RhbXAuZ2V0TWludXRlcygpLCAyKX06JHtwYWRGaWVsZCh0aW1lc3RhbXAuZ2V0U2Vjb25kcygpLCAyKX0uJHtwYWRGaWVsZCh0aW1lc3RhbXAuZ2V0TWlsbGlzZWNvbmRzKCksIDMpfWA7XG5cbmNvbnN0IHBhZEZpZWxkID0gKGZpZWxkLCBwYWRkaW5nKSA9PiBTdHJpbmcoZmllbGQpLnBhZFN0YXJ0KHBhZGRpbmcsICcwJyk7XG5cbmNvbnN0IGdldEZpbmFsSWNvbiA9ICh7ZmFpbGVkLCByZWplY3R9KSA9PiB7XG5cdGlmICghZmFpbGVkKSB7XG5cdFx0cmV0dXJuIGZpZ3VyZXMudGljaztcblx0fVxuXG5cdHJldHVybiByZWplY3QgPyBmaWd1cmVzLmNyb3NzIDogZmlndXJlcy53YXJuaW5nO1xufTtcblxuY29uc3QgSUNPTlMgPSB7XG5cdGNvbW1hbmQ6ICh7cGlwZWR9KSA9PiBwaXBlZCA/ICd8JyA6ICckJyxcblx0b3V0cHV0OiAoKSA9PiAnICcsXG5cdGlwYzogKCkgPT4gJyonLFxuXHRlcnJvcjogZ2V0RmluYWxJY29uLFxuXHRkdXJhdGlvbjogZ2V0RmluYWxJY29uLFxufTtcblxuY29uc3QgaWRlbnRpdHkgPSBzdHJpbmcgPT4gc3RyaW5nO1xuXG5jb25zdCBDT0xPUlMgPSB7XG5cdGNvbW1hbmQ6ICgpID0+IGJvbGQsXG5cdG91dHB1dDogKCkgPT4gaWRlbnRpdHksXG5cdGlwYzogKCkgPT4gaWRlbnRpdHksXG5cdGVycm9yOiAoe3JlamVjdH0pID0+IHJlamVjdCA/IHJlZEJyaWdodCA6IHllbGxvd0JyaWdodCxcblx0ZHVyYXRpb246ICgpID0+IGdyYXksXG59O1xuIiwgImltcG9ydCB7Z2V0VmVyYm9zZUZ1bmN0aW9ufSBmcm9tICcuL3ZhbHVlcy5qcyc7XG5cbi8vIEFwcGx5IHRoZSBgdmVyYm9zZWAgZnVuY3Rpb24gb24gZWFjaCBsaW5lXG5leHBvcnQgY29uc3QgYXBwbHlWZXJib3NlT25MaW5lcyA9IChwcmludGVkTGluZXMsIHZlcmJvc2VJbmZvLCBmZE51bWJlcikgPT4ge1xuXHRjb25zdCB2ZXJib3NlRnVuY3Rpb24gPSBnZXRWZXJib3NlRnVuY3Rpb24odmVyYm9zZUluZm8sIGZkTnVtYmVyKTtcblx0cmV0dXJuIHByaW50ZWRMaW5lc1xuXHRcdC5tYXAoKHt2ZXJib3NlTGluZSwgdmVyYm9zZU9iamVjdH0pID0+IGFwcGx5VmVyYm9zZUZ1bmN0aW9uKHZlcmJvc2VMaW5lLCB2ZXJib3NlT2JqZWN0LCB2ZXJib3NlRnVuY3Rpb24pKVxuXHRcdC5maWx0ZXIocHJpbnRlZExpbmUgPT4gcHJpbnRlZExpbmUgIT09IHVuZGVmaW5lZClcblx0XHQubWFwKHByaW50ZWRMaW5lID0+IGFwcGVuZE5ld2xpbmUocHJpbnRlZExpbmUpKVxuXHRcdC5qb2luKCcnKTtcbn07XG5cbmNvbnN0IGFwcGx5VmVyYm9zZUZ1bmN0aW9uID0gKHZlcmJvc2VMaW5lLCB2ZXJib3NlT2JqZWN0LCB2ZXJib3NlRnVuY3Rpb24pID0+IHtcblx0aWYgKHZlcmJvc2VGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHZlcmJvc2VMaW5lO1xuXHR9XG5cblx0Y29uc3QgcHJpbnRlZExpbmUgPSB2ZXJib3NlRnVuY3Rpb24odmVyYm9zZUxpbmUsIHZlcmJvc2VPYmplY3QpO1xuXHRpZiAodHlwZW9mIHByaW50ZWRMaW5lID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBwcmludGVkTGluZTtcblx0fVxufTtcblxuY29uc3QgYXBwZW5kTmV3bGluZSA9IHByaW50ZWRMaW5lID0+IHByaW50ZWRMaW5lLmVuZHNXaXRoKCdcXG4nKVxuXHQ/IHByaW50ZWRMaW5lXG5cdDogYCR7cHJpbnRlZExpbmV9XFxuYDtcbiIsICJpbXBvcnQge2luc3BlY3R9IGZyb20gJ25vZGU6dXRpbCc7XG5pbXBvcnQge2VzY2FwZUxpbmVzfSBmcm9tICcuLi9hcmd1bWVudHMvZXNjYXBlLmpzJztcbmltcG9ydCB7ZGVmYXVsdFZlcmJvc2VGdW5jdGlvbn0gZnJvbSAnLi9kZWZhdWx0LmpzJztcbmltcG9ydCB7YXBwbHlWZXJib3NlT25MaW5lc30gZnJvbSAnLi9jdXN0b20uanMnO1xuXG4vLyBUaGlzIHByaW50cyBvbiBzdGRlcnIuXG4vLyBJZiB0aGUgc3VicHJvY2VzcyBwcmludHMgb24gc3Rkb3V0IGFuZCBpcyB1c2luZyBgc3Rkb3V0OiAnaW5oZXJpdCdgLFxuLy8gdGhlcmUgaXMgYSBjaGFuY2UgYm90aCB3cml0ZXMgd2lsbCBjb21wZXRlIChpbnRyb2R1Y2luZyBhIHJhY2UgY29uZGl0aW9uKS5cbi8vIFRoaXMgbWVhbnMgdGhlaXIgcmVzcGVjdGl2ZSBvcmRlciBpcyBub3QgZGV0ZXJtaW5pc3RpYy5cbi8vIEluIHBhcnRpY3VsYXIsIHRoaXMgbWVhbnMgdGhlIHZlcmJvc2UgY29tbWFuZCBsaW5lcyBtaWdodCBiZSBhZnRlciB0aGUgc3RhcnQgb2YgdGhlIHN1YnByb2Nlc3Mgb3V0cHV0LlxuLy8gVXNpbmcgc3luY2hyb25vdXMgSS9PIGRvZXMgbm90IHNvbHZlIHRoaXMgcHJvYmxlbS5cbi8vIEhvd2V2ZXIsIHRoaXMgb25seSBzZWVtcyB0byBoYXBwZW4gd2hlbiB0aGUgc3Rkb3V0L3N0ZGVyciB0YXJnZXRcbi8vIChlLmcuIGEgdGVybWluYWwpIGlzIGJlaW5nIHdyaXR0ZW4gdG8gYnkgbWFueSBzdWJwcm9jZXNzZXMgYXQgb25jZSwgd2hpY2ggaXMgdW5saWtlbHkgaW4gcmVhbCBzY2VuYXJpb3MuXG5leHBvcnQgY29uc3QgdmVyYm9zZUxvZyA9ICh7dHlwZSwgdmVyYm9zZU1lc3NhZ2UsIGZkTnVtYmVyLCB2ZXJib3NlSW5mbywgcmVzdWx0fSkgPT4ge1xuXHRjb25zdCB2ZXJib3NlT2JqZWN0ID0gZ2V0VmVyYm9zZU9iamVjdCh7dHlwZSwgcmVzdWx0LCB2ZXJib3NlSW5mb30pO1xuXHRjb25zdCBwcmludGVkTGluZXMgPSBnZXRQcmludGVkTGluZXModmVyYm9zZU1lc3NhZ2UsIHZlcmJvc2VPYmplY3QpO1xuXHRjb25zdCBmaW5hbExpbmVzID0gYXBwbHlWZXJib3NlT25MaW5lcyhwcmludGVkTGluZXMsIHZlcmJvc2VJbmZvLCBmZE51bWJlcik7XG5cdGlmIChmaW5hbExpbmVzICE9PSAnJykge1xuXHRcdGNvbnNvbGUud2FybihmaW5hbExpbmVzLnNsaWNlKDAsIC0xKSk7XG5cdH1cbn07XG5cbmNvbnN0IGdldFZlcmJvc2VPYmplY3QgPSAoe1xuXHR0eXBlLFxuXHRyZXN1bHQsXG5cdHZlcmJvc2VJbmZvOiB7ZXNjYXBlZENvbW1hbmQsIGNvbW1hbmRJZCwgcmF3T3B0aW9uczoge3BpcGVkID0gZmFsc2UsIC4uLm9wdGlvbnN9fSxcbn0pID0+ICh7XG5cdHR5cGUsXG5cdGVzY2FwZWRDb21tYW5kLFxuXHRjb21tYW5kSWQ6IGAke2NvbW1hbmRJZH1gLFxuXHR0aW1lc3RhbXA6IG5ldyBEYXRlKCksXG5cdHBpcGVkLFxuXHRyZXN1bHQsXG5cdG9wdGlvbnMsXG59KTtcblxuY29uc3QgZ2V0UHJpbnRlZExpbmVzID0gKHZlcmJvc2VNZXNzYWdlLCB2ZXJib3NlT2JqZWN0KSA9PiB2ZXJib3NlTWVzc2FnZVxuXHQuc3BsaXQoJ1xcbicpXG5cdC5tYXAobWVzc2FnZSA9PiBnZXRQcmludGVkTGluZSh7Li4udmVyYm9zZU9iamVjdCwgbWVzc2FnZX0pKTtcblxuY29uc3QgZ2V0UHJpbnRlZExpbmUgPSB2ZXJib3NlT2JqZWN0ID0+IHtcblx0Y29uc3QgdmVyYm9zZUxpbmUgPSBkZWZhdWx0VmVyYm9zZUZ1bmN0aW9uKHZlcmJvc2VPYmplY3QpO1xuXHRyZXR1cm4ge3ZlcmJvc2VMaW5lLCB2ZXJib3NlT2JqZWN0fTtcbn07XG5cbi8vIFNlcmlhbGl6ZSBhbnkgdHlwZSB0byBhIGxpbmUgc3RyaW5nLCBmb3IgbG9nZ2luZ1xuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZVZlcmJvc2VNZXNzYWdlID0gbWVzc2FnZSA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VTdHJpbmcgPSB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycgPyBtZXNzYWdlIDogaW5zcGVjdChtZXNzYWdlKTtcblx0Y29uc3QgZXNjYXBlZE1lc3NhZ2UgPSBlc2NhcGVMaW5lcyhtZXNzYWdlU3RyaW5nKTtcblx0cmV0dXJuIGVzY2FwZWRNZXNzYWdlLnJlcGxhY2VBbGwoJ1xcdCcsICcgJy5yZXBlYXQoVEFCX1NJWkUpKTtcbn07XG5cbi8vIFNhbWUgYXMgYHV0aWwuaW5zcGVjdCgpYFxuY29uc3QgVEFCX1NJWkUgPSAyO1xuIiwgImltcG9ydCB7aXNWZXJib3NlfSBmcm9tICcuL3ZhbHVlcy5qcyc7XG5pbXBvcnQge3ZlcmJvc2VMb2d9IGZyb20gJy4vbG9nLmpzJztcblxuLy8gV2hlbiBgdmVyYm9zZWAgaXMgYHNob3J0fGZ1bGx8Y3VzdG9tYCwgcHJpbnQgZWFjaCBjb21tYW5kXG5leHBvcnQgY29uc3QgbG9nQ29tbWFuZCA9IChlc2NhcGVkQ29tbWFuZCwgdmVyYm9zZUluZm8pID0+IHtcblx0aWYgKCFpc1ZlcmJvc2UodmVyYm9zZUluZm8pKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmVyYm9zZUxvZyh7XG5cdFx0dHlwZTogJ2NvbW1hbmQnLFxuXHRcdHZlcmJvc2VNZXNzYWdlOiBlc2NhcGVkQ29tbWFuZCxcblx0XHR2ZXJib3NlSW5mbyxcblx0fSk7XG59O1xuIiwgImltcG9ydCB7aXNWZXJib3NlLCBWRVJCT1NFX1ZBTFVFUywgaXNWZXJib3NlRnVuY3Rpb259IGZyb20gJy4vdmFsdWVzLmpzJztcblxuLy8gSW5mb3JtYXRpb24gY29tcHV0ZWQgYmVmb3JlIHNwYXduaW5nLCB1c2VkIGJ5IHRoZSBgdmVyYm9zZWAgb3B0aW9uXG5leHBvcnQgY29uc3QgZ2V0VmVyYm9zZUluZm8gPSAodmVyYm9zZSwgZXNjYXBlZENvbW1hbmQsIHJhd09wdGlvbnMpID0+IHtcblx0dmFsaWRhdGVWZXJib3NlKHZlcmJvc2UpO1xuXHRjb25zdCBjb21tYW5kSWQgPSBnZXRDb21tYW5kSWQodmVyYm9zZSk7XG5cdHJldHVybiB7XG5cdFx0dmVyYm9zZSxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRjb21tYW5kSWQsXG5cdFx0cmF3T3B0aW9ucyxcblx0fTtcbn07XG5cbmNvbnN0IGdldENvbW1hbmRJZCA9IHZlcmJvc2UgPT4gaXNWZXJib3NlKHt2ZXJib3NlfSkgPyBDT01NQU5EX0lEKysgOiB1bmRlZmluZWQ7XG5cbi8vIFByZXBlbmRpbmcgdGhlIGBwaWRgIGlzIHVzZWZ1bCB3aGVuIG11bHRpcGxlIGNvbW1hbmRzIHByaW50IHRoZWlyIG91dHB1dCBhdCB0aGUgc2FtZSB0aW1lLlxuLy8gSG93ZXZlciwgd2UgY2Fubm90IHVzZSB0aGUgcmVhbCBQSUQgc2luY2UgdGhpcyBpcyBub3QgYXZhaWxhYmxlIHdpdGggYGNoaWxkX3Byb2Nlc3Muc3Bhd25TeW5jKClgLlxuLy8gQWxzbywgd2UgY2Fubm90IHVzZSB0aGUgcmVhbCBQSUQgaWYgd2Ugd2FudCB0byBwcmludCBpdCBiZWZvcmUgYGNoaWxkX3Byb2Nlc3Muc3Bhd24oKWAgaXMgcnVuLlxuLy8gQXMgYSBwcm8sIGl0IGlzIHNob3J0ZXIgdGhhbiBhIG5vcm1hbCBQSUQgYW5kIG5ldmVyIHJlLXVzZXMgdGhlIHNhbWUgaWQuXG4vLyBBcyBhIGNvbiwgaXQgY2Fubm90IGJlIHVzZWQgdG8gc2VuZCBzaWduYWxzLlxubGV0IENPTU1BTkRfSUQgPSAwbjtcblxuY29uc3QgdmFsaWRhdGVWZXJib3NlID0gdmVyYm9zZSA9PiB7XG5cdGZvciAoY29uc3QgZmRWZXJib3NlIG9mIHZlcmJvc2UpIHtcblx0XHRpZiAoZmRWZXJib3NlID09PSBmYWxzZSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidmVyYm9zZTogZmFsc2VcIiBvcHRpb24gd2FzIHJlbmFtZWQgdG8gXCJ2ZXJib3NlOiBcXCdub25lXFwnXCIuJyk7XG5cdFx0fVxuXG5cdFx0aWYgKGZkVmVyYm9zZSA9PT0gdHJ1ZSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidmVyYm9zZTogdHJ1ZVwiIG9wdGlvbiB3YXMgcmVuYW1lZCB0byBcInZlcmJvc2U6IFxcJ3Nob3J0XFwnXCIuJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFWRVJCT1NFX1ZBTFVFUy5pbmNsdWRlcyhmZFZlcmJvc2UpICYmICFpc1ZlcmJvc2VGdW5jdGlvbihmZFZlcmJvc2UpKSB7XG5cdFx0XHRjb25zdCBhbGxvd2VkVmFsdWVzID0gVkVSQk9TRV9WQUxVRVMubWFwKGFsbG93ZWRWYWx1ZSA9PiBgJyR7YWxsb3dlZFZhbHVlfSdgKS5qb2luKCcsICcpO1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFwidmVyYm9zZVwiIG9wdGlvbiBtdXN0IG5vdCBiZSAke2ZkVmVyYm9zZX0uIEFsbG93ZWQgdmFsdWVzIGFyZTogJHthbGxvd2VkVmFsdWVzfSBvciBhIGZ1bmN0aW9uLmApO1xuXHRcdH1cblx0fVxufTtcbiIsICJpbXBvcnQge2hydGltZX0gZnJvbSAnbm9kZTpwcm9jZXNzJztcblxuLy8gU3RhcnQgY291bnRpbmcgdGltZSBiZWZvcmUgc3Bhd25pbmcgdGhlIHN1YnByb2Nlc3NcbmV4cG9ydCBjb25zdCBnZXRTdGFydFRpbWUgPSAoKSA9PiBocnRpbWUuYmlnaW50KCk7XG5cbi8vIENvbXB1dGUgZHVyYXRpb24gYWZ0ZXIgdGhlIHN1YnByb2Nlc3MgZW5kZWQuXG4vLyBQcmludGVkIGJ5IHRoZSBgdmVyYm9zZWAgb3B0aW9uLlxuZXhwb3J0IGNvbnN0IGdldER1cmF0aW9uTXMgPSBzdGFydFRpbWUgPT4gTnVtYmVyKGhydGltZS5iaWdpbnQoKSAtIHN0YXJ0VGltZSkgLyAxZTY7XG4iLCAiaW1wb3J0IHtsb2dDb21tYW5kfSBmcm9tICcuLi92ZXJib3NlL3N0YXJ0LmpzJztcbmltcG9ydCB7Z2V0VmVyYm9zZUluZm99IGZyb20gJy4uL3ZlcmJvc2UvaW5mby5qcyc7XG5pbXBvcnQge2dldFN0YXJ0VGltZX0gZnJvbSAnLi4vcmV0dXJuL2R1cmF0aW9uLmpzJztcbmltcG9ydCB7am9pbkNvbW1hbmR9IGZyb20gJy4vZXNjYXBlLmpzJztcbmltcG9ydCB7bm9ybWFsaXplRmRTcGVjaWZpY09wdGlvbn0gZnJvbSAnLi9zcGVjaWZpYy5qcyc7XG5cbi8vIENvbXB1dGUgYHJlc3VsdC5jb21tYW5kYCwgYHJlc3VsdC5lc2NhcGVkQ29tbWFuZGAgYW5kIGB2ZXJib3NlYC1yZWxhdGVkIGluZm9ybWF0aW9uXG5leHBvcnQgY29uc3QgaGFuZGxlQ29tbWFuZCA9IChmaWxlUGF0aCwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKSA9PiB7XG5cdGNvbnN0IHN0YXJ0VGltZSA9IGdldFN0YXJ0VGltZSgpO1xuXHRjb25zdCB7Y29tbWFuZCwgZXNjYXBlZENvbW1hbmR9ID0gam9pbkNvbW1hbmQoZmlsZVBhdGgsIHJhd0FyZ3VtZW50cyk7XG5cdGNvbnN0IHZlcmJvc2UgPSBub3JtYWxpemVGZFNwZWNpZmljT3B0aW9uKHJhd09wdGlvbnMsICd2ZXJib3NlJyk7XG5cdGNvbnN0IHZlcmJvc2VJbmZvID0gZ2V0VmVyYm9zZUluZm8odmVyYm9zZSwgZXNjYXBlZENvbW1hbmQsIHsuLi5yYXdPcHRpb25zfSk7XG5cdGxvZ0NvbW1hbmQoZXNjYXBlZENvbW1hbmQsIHZlcmJvc2VJbmZvKTtcblx0cmV0dXJuIHtcblx0XHRjb21tYW5kLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdHN0YXJ0VGltZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0fTtcbn07XG4iLCAibW9kdWxlLmV4cG9ydHMgPSBpc2V4ZVxuaXNleGUuc3luYyA9IHN5bmNcblxudmFyIGZzID0gcmVxdWlyZSgnZnMnKVxuXG5mdW5jdGlvbiBjaGVja1BhdGhFeHQgKHBhdGgsIG9wdGlvbnMpIHtcbiAgdmFyIHBhdGhleHQgPSBvcHRpb25zLnBhdGhFeHQgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy5wYXRoRXh0IDogcHJvY2Vzcy5lbnYuUEFUSEVYVFxuXG4gIGlmICghcGF0aGV4dCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBwYXRoZXh0ID0gcGF0aGV4dC5zcGxpdCgnOycpXG4gIGlmIChwYXRoZXh0LmluZGV4T2YoJycpICE9PSAtMSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHAgPSBwYXRoZXh0W2ldLnRvTG93ZXJDYXNlKClcbiAgICBpZiAocCAmJiBwYXRoLnN1YnN0cigtcC5sZW5ndGgpLnRvTG93ZXJDYXNlKCkgPT09IHApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBjaGVja1N0YXQgKHN0YXQsIHBhdGgsIG9wdGlvbnMpIHtcbiAgaWYgKCFzdGF0LmlzU3ltYm9saWNMaW5rKCkgJiYgIXN0YXQuaXNGaWxlKCkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gY2hlY2tQYXRoRXh0KHBhdGgsIG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIGlzZXhlIChwYXRoLCBvcHRpb25zLCBjYikge1xuICBmcy5zdGF0KHBhdGgsIGZ1bmN0aW9uIChlciwgc3RhdCkge1xuICAgIGNiKGVyLCBlciA/IGZhbHNlIDogY2hlY2tTdGF0KHN0YXQsIHBhdGgsIG9wdGlvbnMpKVxuICB9KVxufVxuXG5mdW5jdGlvbiBzeW5jIChwYXRoLCBvcHRpb25zKSB7XG4gIHJldHVybiBjaGVja1N0YXQoZnMuc3RhdFN5bmMocGF0aCksIHBhdGgsIG9wdGlvbnMpXG59XG4iLCAibW9kdWxlLmV4cG9ydHMgPSBpc2V4ZVxuaXNleGUuc3luYyA9IHN5bmNcblxudmFyIGZzID0gcmVxdWlyZSgnZnMnKVxuXG5mdW5jdGlvbiBpc2V4ZSAocGF0aCwgb3B0aW9ucywgY2IpIHtcbiAgZnMuc3RhdChwYXRoLCBmdW5jdGlvbiAoZXIsIHN0YXQpIHtcbiAgICBjYihlciwgZXIgPyBmYWxzZSA6IGNoZWNrU3RhdChzdGF0LCBvcHRpb25zKSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gc3luYyAocGF0aCwgb3B0aW9ucykge1xuICByZXR1cm4gY2hlY2tTdGF0KGZzLnN0YXRTeW5jKHBhdGgpLCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBjaGVja1N0YXQgKHN0YXQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHN0YXQuaXNGaWxlKCkgJiYgY2hlY2tNb2RlKHN0YXQsIG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIGNoZWNrTW9kZSAoc3RhdCwgb3B0aW9ucykge1xuICB2YXIgbW9kID0gc3RhdC5tb2RlXG4gIHZhciB1aWQgPSBzdGF0LnVpZFxuICB2YXIgZ2lkID0gc3RhdC5naWRcblxuICB2YXIgbXlVaWQgPSBvcHRpb25zLnVpZCAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRpb25zLnVpZCA6IHByb2Nlc3MuZ2V0dWlkICYmIHByb2Nlc3MuZ2V0dWlkKClcbiAgdmFyIG15R2lkID0gb3B0aW9ucy5naWQgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0aW9ucy5naWQgOiBwcm9jZXNzLmdldGdpZCAmJiBwcm9jZXNzLmdldGdpZCgpXG5cbiAgdmFyIHUgPSBwYXJzZUludCgnMTAwJywgOClcbiAgdmFyIGcgPSBwYXJzZUludCgnMDEwJywgOClcbiAgdmFyIG8gPSBwYXJzZUludCgnMDAxJywgOClcbiAgdmFyIHVnID0gdSB8IGdcblxuICB2YXIgcmV0ID0gKG1vZCAmIG8pIHx8XG4gICAgKG1vZCAmIGcpICYmIGdpZCA9PT0gbXlHaWQgfHxcbiAgICAobW9kICYgdSkgJiYgdWlkID09PSBteVVpZCB8fFxuICAgIChtb2QgJiB1ZykgJiYgbXlVaWQgPT09IDBcblxuICByZXR1cm4gcmV0XG59XG4iLCAidmFyIGZzID0gcmVxdWlyZSgnZnMnKVxudmFyIGNvcmVcbmlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInIHx8IGdsb2JhbC5URVNUSU5HX1dJTkRPV1MpIHtcbiAgY29yZSA9IHJlcXVpcmUoJy4vd2luZG93cy5qcycpXG59IGVsc2Uge1xuICBjb3JlID0gcmVxdWlyZSgnLi9tb2RlLmpzJylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc2V4ZVxuaXNleGUuc3luYyA9IHN5bmNcblxuZnVuY3Rpb24gaXNleGUgKHBhdGgsIG9wdGlvbnMsIGNiKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG5cbiAgaWYgKCFjYikge1xuICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2FsbGJhY2sgbm90IHByb3ZpZGVkJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaXNleGUocGF0aCwgb3B0aW9ucyB8fCB7fSwgZnVuY3Rpb24gKGVyLCBpcykge1xuICAgICAgICBpZiAoZXIpIHtcbiAgICAgICAgICByZWplY3QoZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShpcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY29yZShwYXRoLCBvcHRpb25zIHx8IHt9LCBmdW5jdGlvbiAoZXIsIGlzKSB7XG4gICAgLy8gaWdub3JlIEVBQ0NFUyBiZWNhdXNlIHRoYXQganVzdCBtZWFucyB3ZSBhcmVuJ3QgYWxsb3dlZCB0byBydW4gaXRcbiAgICBpZiAoZXIpIHtcbiAgICAgIGlmIChlci5jb2RlID09PSAnRUFDQ0VTJyB8fCBvcHRpb25zICYmIG9wdGlvbnMuaWdub3JlRXJyb3JzKSB7XG4gICAgICAgIGVyID0gbnVsbFxuICAgICAgICBpcyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGNiKGVyLCBpcylcbiAgfSlcbn1cblxuZnVuY3Rpb24gc3luYyAocGF0aCwgb3B0aW9ucykge1xuICAvLyBteSBraW5nZG9tIGZvciBhIGZpbHRlcmVkIGNhdGNoXG4gIHRyeSB7XG4gICAgcmV0dXJuIGNvcmUuc3luYyhwYXRoLCBvcHRpb25zIHx8IHt9KVxuICB9IGNhdGNoIChlcikge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaWdub3JlRXJyb3JzIHx8IGVyLmNvZGUgPT09ICdFQUNDRVMnKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJcbiAgICB9XG4gIH1cbn1cbiIsICJjb25zdCBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInIHx8XG4gICAgcHJvY2Vzcy5lbnYuT1NUWVBFID09PSAnY3lnd2luJyB8fFxuICAgIHByb2Nlc3MuZW52Lk9TVFlQRSA9PT0gJ21zeXMnXG5cbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IENPTE9OID0gaXNXaW5kb3dzID8gJzsnIDogJzonXG5jb25zdCBpc2V4ZSA9IHJlcXVpcmUoJ2lzZXhlJylcblxuY29uc3QgZ2V0Tm90Rm91bmRFcnJvciA9IChjbWQpID0+XG4gIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGBub3QgZm91bmQ6ICR7Y21kfWApLCB7IGNvZGU6ICdFTk9FTlQnIH0pXG5cbmNvbnN0IGdldFBhdGhJbmZvID0gKGNtZCwgb3B0KSA9PiB7XG4gIGNvbnN0IGNvbG9uID0gb3B0LmNvbG9uIHx8IENPTE9OXG5cbiAgLy8gSWYgaXQgaGFzIGEgc2xhc2gsIHRoZW4gd2UgZG9uJ3QgYm90aGVyIHNlYXJjaGluZyB0aGUgcGF0aGVudi5cbiAgLy8ganVzdCBjaGVjayB0aGUgZmlsZSBpdHNlbGYsIGFuZCB0aGF0J3MgaXQuXG4gIGNvbnN0IHBhdGhFbnYgPSBjbWQubWF0Y2goL1xcLy8pIHx8IGlzV2luZG93cyAmJiBjbWQubWF0Y2goL1xcXFwvKSA/IFsnJ11cbiAgICA6IChcbiAgICAgIFtcbiAgICAgICAgLy8gd2luZG93cyBhbHdheXMgY2hlY2tzIHRoZSBjd2QgZmlyc3RcbiAgICAgICAgLi4uKGlzV2luZG93cyA/IFtwcm9jZXNzLmN3ZCgpXSA6IFtdKSxcbiAgICAgICAgLi4uKG9wdC5wYXRoIHx8IHByb2Nlc3MuZW52LlBBVEggfHxcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogdmVyeSB1bnVzdWFsICovICcnKS5zcGxpdChjb2xvbiksXG4gICAgICBdXG4gICAgKVxuICBjb25zdCBwYXRoRXh0RXhlID0gaXNXaW5kb3dzXG4gICAgPyBvcHQucGF0aEV4dCB8fCBwcm9jZXNzLmVudi5QQVRIRVhUIHx8ICcuRVhFOy5DTUQ7LkJBVDsuQ09NJ1xuICAgIDogJydcbiAgY29uc3QgcGF0aEV4dCA9IGlzV2luZG93cyA/IHBhdGhFeHRFeGUuc3BsaXQoY29sb24pIDogWycnXVxuXG4gIGlmIChpc1dpbmRvd3MpIHtcbiAgICBpZiAoY21kLmluZGV4T2YoJy4nKSAhPT0gLTEgJiYgcGF0aEV4dFswXSAhPT0gJycpXG4gICAgICBwYXRoRXh0LnVuc2hpZnQoJycpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGhFbnYsXG4gICAgcGF0aEV4dCxcbiAgICBwYXRoRXh0RXhlLFxuICB9XG59XG5cbmNvbnN0IHdoaWNoID0gKGNtZCwgb3B0LCBjYikgPT4ge1xuICBpZiAodHlwZW9mIG9wdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gb3B0XG4gICAgb3B0ID0ge31cbiAgfVxuICBpZiAoIW9wdClcbiAgICBvcHQgPSB7fVxuXG4gIGNvbnN0IHsgcGF0aEVudiwgcGF0aEV4dCwgcGF0aEV4dEV4ZSB9ID0gZ2V0UGF0aEluZm8oY21kLCBvcHQpXG4gIGNvbnN0IGZvdW5kID0gW11cblxuICBjb25zdCBzdGVwID0gaSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGkgPT09IHBhdGhFbnYubGVuZ3RoKVxuICAgICAgcmV0dXJuIG9wdC5hbGwgJiYgZm91bmQubGVuZ3RoID8gcmVzb2x2ZShmb3VuZClcbiAgICAgICAgOiByZWplY3QoZ2V0Tm90Rm91bmRFcnJvcihjbWQpKVxuXG4gICAgY29uc3QgcHBSYXcgPSBwYXRoRW52W2ldXG4gICAgY29uc3QgcGF0aFBhcnQgPSAvXlwiLipcIiQvLnRlc3QocHBSYXcpID8gcHBSYXcuc2xpY2UoMSwgLTEpIDogcHBSYXdcblxuICAgIGNvbnN0IHBDbWQgPSBwYXRoLmpvaW4ocGF0aFBhcnQsIGNtZClcbiAgICBjb25zdCBwID0gIXBhdGhQYXJ0ICYmIC9eXFwuW1xcXFxcXC9dLy50ZXN0KGNtZCkgPyBjbWQuc2xpY2UoMCwgMikgKyBwQ21kXG4gICAgICA6IHBDbWRcblxuICAgIHJlc29sdmUoc3ViU3RlcChwLCBpLCAwKSlcbiAgfSlcblxuICBjb25zdCBzdWJTdGVwID0gKHAsIGksIGlpKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGlpID09PSBwYXRoRXh0Lmxlbmd0aClcbiAgICAgIHJldHVybiByZXNvbHZlKHN0ZXAoaSArIDEpKVxuICAgIGNvbnN0IGV4dCA9IHBhdGhFeHRbaWldXG4gICAgaXNleGUocCArIGV4dCwgeyBwYXRoRXh0OiBwYXRoRXh0RXhlIH0sIChlciwgaXMpID0+IHtcbiAgICAgIGlmICghZXIgJiYgaXMpIHtcbiAgICAgICAgaWYgKG9wdC5hbGwpXG4gICAgICAgICAgZm91bmQucHVzaChwICsgZXh0KVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUocCArIGV4dClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNvbHZlKHN1YlN0ZXAocCwgaSwgaWkgKyAxKSlcbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiBjYiA/IHN0ZXAoMCkudGhlbihyZXMgPT4gY2IobnVsbCwgcmVzKSwgY2IpIDogc3RlcCgwKVxufVxuXG5jb25zdCB3aGljaFN5bmMgPSAoY21kLCBvcHQpID0+IHtcbiAgb3B0ID0gb3B0IHx8IHt9XG5cbiAgY29uc3QgeyBwYXRoRW52LCBwYXRoRXh0LCBwYXRoRXh0RXhlIH0gPSBnZXRQYXRoSW5mbyhjbWQsIG9wdClcbiAgY29uc3QgZm91bmQgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aEVudi5sZW5ndGg7IGkgKyspIHtcbiAgICBjb25zdCBwcFJhdyA9IHBhdGhFbnZbaV1cbiAgICBjb25zdCBwYXRoUGFydCA9IC9eXCIuKlwiJC8udGVzdChwcFJhdykgPyBwcFJhdy5zbGljZSgxLCAtMSkgOiBwcFJhd1xuXG4gICAgY29uc3QgcENtZCA9IHBhdGguam9pbihwYXRoUGFydCwgY21kKVxuICAgIGNvbnN0IHAgPSAhcGF0aFBhcnQgJiYgL15cXC5bXFxcXFxcL10vLnRlc3QoY21kKSA/IGNtZC5zbGljZSgwLCAyKSArIHBDbWRcbiAgICAgIDogcENtZFxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwYXRoRXh0Lmxlbmd0aDsgaiArKykge1xuICAgICAgY29uc3QgY3VyID0gcCArIHBhdGhFeHRbal1cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGlzID0gaXNleGUuc3luYyhjdXIsIHsgcGF0aEV4dDogcGF0aEV4dEV4ZSB9KVxuICAgICAgICBpZiAoaXMpIHtcbiAgICAgICAgICBpZiAob3B0LmFsbClcbiAgICAgICAgICAgIGZvdW5kLnB1c2goY3VyKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBjdXJcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXgpIHt9XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdC5hbGwgJiYgZm91bmQubGVuZ3RoKVxuICAgIHJldHVybiBmb3VuZFxuXG4gIGlmIChvcHQubm90aHJvdylcbiAgICByZXR1cm4gbnVsbFxuXG4gIHRocm93IGdldE5vdEZvdW5kRXJyb3IoY21kKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdoaWNoXG53aGljaC5zeW5jID0gd2hpY2hTeW5jXG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXRoS2V5ID0gKG9wdGlvbnMgPSB7fSkgPT4ge1xuXHRjb25zdCBlbnZpcm9ubWVudCA9IG9wdGlvbnMuZW52IHx8IHByb2Nlc3MuZW52O1xuXHRjb25zdCBwbGF0Zm9ybSA9IG9wdGlvbnMucGxhdGZvcm0gfHwgcHJvY2Vzcy5wbGF0Zm9ybTtcblxuXHRpZiAocGxhdGZvcm0gIT09ICd3aW4zMicpIHtcblx0XHRyZXR1cm4gJ1BBVEgnO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdC5rZXlzKGVudmlyb25tZW50KS5yZXZlcnNlKCkuZmluZChrZXkgPT4ga2V5LnRvVXBwZXJDYXNlKCkgPT09ICdQQVRIJykgfHwgJ1BhdGgnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoS2V5O1xuLy8gVE9ETzogUmVtb3ZlIHRoaXMgZm9yIHRoZSBuZXh0IG1ham9yIHJlbGVhc2Vcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBwYXRoS2V5O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IHdoaWNoID0gcmVxdWlyZSgnd2hpY2gnKTtcbmNvbnN0IGdldFBhdGhLZXkgPSByZXF1aXJlKCdwYXRoLWtleScpO1xuXG5mdW5jdGlvbiByZXNvbHZlQ29tbWFuZEF0dGVtcHQocGFyc2VkLCB3aXRob3V0UGF0aEV4dCkge1xuICAgIGNvbnN0IGVudiA9IHBhcnNlZC5vcHRpb25zLmVudiB8fCBwcm9jZXNzLmVudjtcbiAgICBjb25zdCBjd2QgPSBwcm9jZXNzLmN3ZCgpO1xuICAgIGNvbnN0IGhhc0N1c3RvbUN3ZCA9IHBhcnNlZC5vcHRpb25zLmN3ZCAhPSBudWxsO1xuICAgIC8vIFdvcmtlciB0aHJlYWRzIGRvIG5vdCBoYXZlIHByb2Nlc3MuY2hkaXIoKVxuICAgIGNvbnN0IHNob3VsZFN3aXRjaEN3ZCA9IGhhc0N1c3RvbUN3ZCAmJiBwcm9jZXNzLmNoZGlyICE9PSB1bmRlZmluZWQgJiYgIXByb2Nlc3MuY2hkaXIuZGlzYWJsZWQ7XG5cbiAgICAvLyBJZiBhIGN1c3RvbSBgY3dkYCB3YXMgc3BlY2lmaWVkLCB3ZSBuZWVkIHRvIGNoYW5nZSB0aGUgcHJvY2VzcyBjd2RcbiAgICAvLyBiZWNhdXNlIGB3aGljaGAgd2lsbCBkbyBzdGF0IGNhbGxzIGJ1dCBkb2VzIG5vdCBzdXBwb3J0IGEgY3VzdG9tIGN3ZFxuICAgIGlmIChzaG91bGRTd2l0Y2hDd2QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHByb2Nlc3MuY2hkaXIocGFyc2VkLm9wdGlvbnMuY3dkKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvKiBFbXB0eSAqL1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZWQgPSB3aGljaC5zeW5jKHBhcnNlZC5jb21tYW5kLCB7XG4gICAgICAgICAgICBwYXRoOiBlbnZbZ2V0UGF0aEtleSh7IGVudiB9KV0sXG4gICAgICAgICAgICBwYXRoRXh0OiB3aXRob3V0UGF0aEV4dCA/IHBhdGguZGVsaW1pdGVyIDogdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8qIEVtcHR5ICovXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHNob3VsZFN3aXRjaEN3ZCkge1xuICAgICAgICAgICAgcHJvY2Vzcy5jaGRpcihjd2QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgd2Ugc3VjY2Vzc2Z1bGx5IHJlc29sdmVkLCBlbnN1cmUgdGhhdCBhbiBhYnNvbHV0ZSBwYXRoIGlzIHJldHVybmVkXG4gICAgLy8gTm90ZSB0aGF0IHdoZW4gYSBjdXN0b20gYGN3ZGAgd2FzIHVzZWQsIHdlIG5lZWQgdG8gcmVzb2x2ZSB0byBhbiBhYnNvbHV0ZSBwYXRoIGJhc2VkIG9uIGl0XG4gICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgIHJlc29sdmVkID0gcGF0aC5yZXNvbHZlKGhhc0N1c3RvbUN3ZCA/IHBhcnNlZC5vcHRpb25zLmN3ZCA6ICcnLCByZXNvbHZlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlQ29tbWFuZChwYXJzZWQpIHtcbiAgICByZXR1cm4gcmVzb2x2ZUNvbW1hbmRBdHRlbXB0KHBhcnNlZCkgfHwgcmVzb2x2ZUNvbW1hbmRBdHRlbXB0KHBhcnNlZCwgdHJ1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzb2x2ZUNvbW1hbmQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG4vLyBTZWUgaHR0cDovL3d3dy5yb2J2YW5kZXJ3b3VkZS5jb20vZXNjYXBlY2hhcnMucGhwXG5jb25zdCBtZXRhQ2hhcnNSZWdFeHAgPSAvKFsoKVxcXVslIV5cImA8PiZ8OywgKj9dKS9nO1xuXG5mdW5jdGlvbiBlc2NhcGVDb21tYW5kKGFyZykge1xuICAgIC8vIEVzY2FwZSBtZXRhIGNoYXJzXG4gICAgYXJnID0gYXJnLnJlcGxhY2UobWV0YUNoYXJzUmVnRXhwLCAnXiQxJyk7XG5cbiAgICByZXR1cm4gYXJnO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVBcmd1bWVudChhcmcsIGRvdWJsZUVzY2FwZU1ldGFDaGFycykge1xuICAgIC8vIENvbnZlcnQgdG8gc3RyaW5nXG4gICAgYXJnID0gYCR7YXJnfWA7XG5cbiAgICAvLyBBbGdvcml0aG0gYmVsb3cgaXMgYmFzZWQgb24gaHR0cHM6Ly9xbnRtLm9yZy9jbWRcbiAgICAvLyBJdCdzIHNsaWdodGx5IGFsdGVyZWQgdG8gZGlzYWJsZSBKUyBiYWNrdHJhY2tpbmcgdG8gYXZvaWQgaGFuZ2luZyBvbiBzcGVjaWFsbHkgY3JhZnRlZCBpbnB1dFxuICAgIC8vIFBsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21veHlzdHVkaW8vbm9kZS1jcm9zcy1zcGF3bi9wdWxsLzE2MCBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXG4gICAgLy8gU2VxdWVuY2Ugb2YgYmFja3NsYXNoZXMgZm9sbG93ZWQgYnkgYSBkb3VibGUgcXVvdGU6XG4gICAgLy8gZG91YmxlIHVwIGFsbCB0aGUgYmFja3NsYXNoZXMgYW5kIGVzY2FwZSB0aGUgZG91YmxlIHF1b3RlXG4gICAgYXJnID0gYXJnLnJlcGxhY2UoLyg/PShcXFxcKz8pPylcXDFcIi9nLCAnJDEkMVxcXFxcIicpO1xuXG4gICAgLy8gU2VxdWVuY2Ugb2YgYmFja3NsYXNoZXMgZm9sbG93ZWQgYnkgdGhlIGVuZCBvZiB0aGUgc3RyaW5nXG4gICAgLy8gKHdoaWNoIHdpbGwgYmVjb21lIGEgZG91YmxlIHF1b3RlIGxhdGVyKTpcbiAgICAvLyBkb3VibGUgdXAgYWxsIHRoZSBiYWNrc2xhc2hlc1xuICAgIGFyZyA9IGFyZy5yZXBsYWNlKC8oPz0oXFxcXCs/KT8pXFwxJC8sICckMSQxJyk7XG5cbiAgICAvLyBBbGwgb3RoZXIgYmFja3NsYXNoZXMgb2NjdXIgbGl0ZXJhbGx5XG5cbiAgICAvLyBRdW90ZSB0aGUgd2hvbGUgdGhpbmc6XG4gICAgYXJnID0gYFwiJHthcmd9XCJgO1xuXG4gICAgLy8gRXNjYXBlIG1ldGEgY2hhcnNcbiAgICBhcmcgPSBhcmcucmVwbGFjZShtZXRhQ2hhcnNSZWdFeHAsICdeJDEnKTtcblxuICAgIC8vIERvdWJsZSBlc2NhcGUgbWV0YSBjaGFycyBpZiBuZWNlc3NhcnlcbiAgICBpZiAoZG91YmxlRXNjYXBlTWV0YUNoYXJzKSB7XG4gICAgICAgIGFyZyA9IGFyZy5yZXBsYWNlKG1ldGFDaGFyc1JlZ0V4cCwgJ14kMScpO1xuICAgIH1cblxuICAgIHJldHVybiBhcmc7XG59XG5cbm1vZHVsZS5leHBvcnRzLmNvbW1hbmQgPSBlc2NhcGVDb21tYW5kO1xubW9kdWxlLmV4cG9ydHMuYXJndW1lbnQgPSBlc2NhcGVBcmd1bWVudDtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IC9eIyEoLiopLztcbiIsICIndXNlIHN0cmljdCc7XG5jb25zdCBzaGViYW5nUmVnZXggPSByZXF1aXJlKCdzaGViYW5nLXJlZ2V4Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKHN0cmluZyA9ICcnKSA9PiB7XG5cdGNvbnN0IG1hdGNoID0gc3RyaW5nLm1hdGNoKHNoZWJhbmdSZWdleCk7XG5cblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgW3BhdGgsIGFyZ3VtZW50XSA9IG1hdGNoWzBdLnJlcGxhY2UoLyMhID8vLCAnJykuc3BsaXQoJyAnKTtcblx0Y29uc3QgYmluYXJ5ID0gcGF0aC5zcGxpdCgnLycpLnBvcCgpO1xuXG5cdGlmIChiaW5hcnkgPT09ICdlbnYnKSB7XG5cdFx0cmV0dXJuIGFyZ3VtZW50O1xuXHR9XG5cblx0cmV0dXJuIGFyZ3VtZW50ID8gYCR7YmluYXJ5fSAke2FyZ3VtZW50fWAgOiBiaW5hcnk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3Qgc2hlYmFuZ0NvbW1hbmQgPSByZXF1aXJlKCdzaGViYW5nLWNvbW1hbmQnKTtcblxuZnVuY3Rpb24gcmVhZFNoZWJhbmcoY29tbWFuZCkge1xuICAgIC8vIFJlYWQgdGhlIGZpcnN0IDE1MCBieXRlcyBmcm9tIHRoZSBmaWxlXG4gICAgY29uc3Qgc2l6ZSA9IDE1MDtcbiAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuYWxsb2Moc2l6ZSk7XG5cbiAgICBsZXQgZmQ7XG5cbiAgICB0cnkge1xuICAgICAgICBmZCA9IGZzLm9wZW5TeW5jKGNvbW1hbmQsICdyJyk7XG4gICAgICAgIGZzLnJlYWRTeW5jKGZkLCBidWZmZXIsIDAsIHNpemUsIDApO1xuICAgICAgICBmcy5jbG9zZVN5bmMoZmQpO1xuICAgIH0gY2F0Y2ggKGUpIHsgLyogRW1wdHkgKi8gfVxuXG4gICAgLy8gQXR0ZW1wdCB0byBleHRyYWN0IHNoZWJhbmcgKG51bGwgaXMgcmV0dXJuZWQgaWYgbm90IGEgc2hlYmFuZylcbiAgICByZXR1cm4gc2hlYmFuZ0NvbW1hbmQoYnVmZmVyLnRvU3RyaW5nKCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWRTaGViYW5nO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IHJlc29sdmVDb21tYW5kID0gcmVxdWlyZSgnLi91dGlsL3Jlc29sdmVDb21tYW5kJyk7XG5jb25zdCBlc2NhcGUgPSByZXF1aXJlKCcuL3V0aWwvZXNjYXBlJyk7XG5jb25zdCByZWFkU2hlYmFuZyA9IHJlcXVpcmUoJy4vdXRpbC9yZWFkU2hlYmFuZycpO1xuXG5jb25zdCBpc1dpbiA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMic7XG5jb25zdCBpc0V4ZWN1dGFibGVSZWdFeHAgPSAvXFwuKD86Y29tfGV4ZSkkL2k7XG5jb25zdCBpc0NtZFNoaW1SZWdFeHAgPSAvbm9kZV9tb2R1bGVzW1xcXFwvXS5iaW5bXFxcXC9dW15cXFxcL10rXFwuY21kJC9pO1xuXG5mdW5jdGlvbiBkZXRlY3RTaGViYW5nKHBhcnNlZCkge1xuICAgIHBhcnNlZC5maWxlID0gcmVzb2x2ZUNvbW1hbmQocGFyc2VkKTtcblxuICAgIGNvbnN0IHNoZWJhbmcgPSBwYXJzZWQuZmlsZSAmJiByZWFkU2hlYmFuZyhwYXJzZWQuZmlsZSk7XG5cbiAgICBpZiAoc2hlYmFuZykge1xuICAgICAgICBwYXJzZWQuYXJncy51bnNoaWZ0KHBhcnNlZC5maWxlKTtcbiAgICAgICAgcGFyc2VkLmNvbW1hbmQgPSBzaGViYW5nO1xuXG4gICAgICAgIHJldHVybiByZXNvbHZlQ29tbWFuZChwYXJzZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQuZmlsZTtcbn1cblxuZnVuY3Rpb24gcGFyc2VOb25TaGVsbChwYXJzZWQpIHtcbiAgICBpZiAoIWlzV2luKSB7XG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuXG4gICAgLy8gRGV0ZWN0ICYgYWRkIHN1cHBvcnQgZm9yIHNoZWJhbmdzXG4gICAgY29uc3QgY29tbWFuZEZpbGUgPSBkZXRlY3RTaGViYW5nKHBhcnNlZCk7XG5cbiAgICAvLyBXZSBkb24ndCBuZWVkIGEgc2hlbGwgaWYgdGhlIGNvbW1hbmQgZmlsZW5hbWUgaXMgYW4gZXhlY3V0YWJsZVxuICAgIGNvbnN0IG5lZWRzU2hlbGwgPSAhaXNFeGVjdXRhYmxlUmVnRXhwLnRlc3QoY29tbWFuZEZpbGUpO1xuXG4gICAgLy8gSWYgYSBzaGVsbCBpcyByZXF1aXJlZCwgdXNlIGNtZC5leGUgYW5kIHRha2UgY2FyZSBvZiBlc2NhcGluZyBldmVyeXRoaW5nIGNvcnJlY3RseVxuICAgIC8vIE5vdGUgdGhhdCBgZm9yY2VTaGVsbGAgaXMgYW4gaGlkZGVuIG9wdGlvbiB1c2VkIG9ubHkgaW4gdGVzdHNcbiAgICBpZiAocGFyc2VkLm9wdGlvbnMuZm9yY2VTaGVsbCB8fCBuZWVkc1NoZWxsKSB7XG4gICAgICAgIC8vIE5lZWQgdG8gZG91YmxlIGVzY2FwZSBtZXRhIGNoYXJzIGlmIHRoZSBjb21tYW5kIGlzIGEgY21kLXNoaW0gbG9jYXRlZCBpbiBgbm9kZV9tb2R1bGVzLy5iaW4vYFxuICAgICAgICAvLyBUaGUgY21kLXNoaW0gc2ltcGx5IGNhbGxzIGV4ZWN1dGUgdGhlIHBhY2thZ2UgYmluIGZpbGUgd2l0aCBOb2RlSlMsIHByb3h5aW5nIGFueSBhcmd1bWVudFxuICAgICAgICAvLyBCZWNhdXNlIHRoZSBlc2NhcGUgb2YgbWV0YWNoYXJzIHdpdGggXiBnZXRzIGludGVycHJldGVkIHdoZW4gdGhlIGNtZC5leGUgaXMgZmlyc3QgY2FsbGVkLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIGRvdWJsZSBlc2NhcGUgdGhlbVxuICAgICAgICBjb25zdCBuZWVkc0RvdWJsZUVzY2FwZU1ldGFDaGFycyA9IGlzQ21kU2hpbVJlZ0V4cC50ZXN0KGNvbW1hbmRGaWxlKTtcblxuICAgICAgICAvLyBOb3JtYWxpemUgcG9zaXggcGF0aHMgaW50byBPUyBjb21wYXRpYmxlIHBhdGhzIChlLmcuOiBmb28vYmFyIC0+IGZvb1xcYmFyKVxuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBvdGhlcndpc2UgaXQgd2lsbCBhbHdheXMgZmFpbCB3aXRoIEVOT0VOVCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICBwYXJzZWQuY29tbWFuZCA9IHBhdGgubm9ybWFsaXplKHBhcnNlZC5jb21tYW5kKTtcblxuICAgICAgICAvLyBFc2NhcGUgY29tbWFuZCAmIGFyZ3VtZW50c1xuICAgICAgICBwYXJzZWQuY29tbWFuZCA9IGVzY2FwZS5jb21tYW5kKHBhcnNlZC5jb21tYW5kKTtcbiAgICAgICAgcGFyc2VkLmFyZ3MgPSBwYXJzZWQuYXJncy5tYXAoKGFyZykgPT4gZXNjYXBlLmFyZ3VtZW50KGFyZywgbmVlZHNEb3VibGVFc2NhcGVNZXRhQ2hhcnMpKTtcblxuICAgICAgICBjb25zdCBzaGVsbENvbW1hbmQgPSBbcGFyc2VkLmNvbW1hbmRdLmNvbmNhdChwYXJzZWQuYXJncykuam9pbignICcpO1xuXG4gICAgICAgIHBhcnNlZC5hcmdzID0gWycvZCcsICcvcycsICcvYycsIGBcIiR7c2hlbGxDb21tYW5kfVwiYF07XG4gICAgICAgIHBhcnNlZC5jb21tYW5kID0gcHJvY2Vzcy5lbnYuY29tc3BlYyB8fCAnY21kLmV4ZSc7XG4gICAgICAgIHBhcnNlZC5vcHRpb25zLndpbmRvd3NWZXJiYXRpbUFyZ3VtZW50cyA9IHRydWU7IC8vIFRlbGwgbm9kZSdzIHNwYXduIHRoYXQgdGhlIGFyZ3VtZW50cyBhcmUgYWxyZWFkeSBlc2NhcGVkXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2UoY29tbWFuZCwgYXJncywgb3B0aW9ucykge1xuICAgIC8vIE5vcm1hbGl6ZSBhcmd1bWVudHMsIHNpbWlsYXIgdG8gbm9kZWpzXG4gICAgaWYgKGFyZ3MgJiYgIUFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgICAgb3B0aW9ucyA9IGFyZ3M7XG4gICAgICAgIGFyZ3MgPSBudWxsO1xuICAgIH1cblxuICAgIGFyZ3MgPSBhcmdzID8gYXJncy5zbGljZSgwKSA6IFtdOyAvLyBDbG9uZSBhcnJheSB0byBhdm9pZCBjaGFuZ2luZyB0aGUgb3JpZ2luYWxcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7IC8vIENsb25lIG9iamVjdCB0byBhdm9pZCBjaGFuZ2luZyB0aGUgb3JpZ2luYWxcblxuICAgIC8vIEJ1aWxkIG91ciBwYXJzZWQgb2JqZWN0XG4gICAgY29uc3QgcGFyc2VkID0ge1xuICAgICAgICBjb21tYW5kLFxuICAgICAgICBhcmdzLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBmaWxlOiB1bmRlZmluZWQsXG4gICAgICAgIG9yaWdpbmFsOiB7XG4gICAgICAgICAgICBjb21tYW5kLFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gRGVsZWdhdGUgZnVydGhlciBwYXJzaW5nIHRvIHNoZWxsIG9yIG5vbi1zaGVsbFxuICAgIHJldHVybiBvcHRpb25zLnNoZWxsID8gcGFyc2VkIDogcGFyc2VOb25TaGVsbChwYXJzZWQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXNXaW4gPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xuXG5mdW5jdGlvbiBub3RGb3VuZEVycm9yKG9yaWdpbmFsLCBzeXNjYWxsKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGAke3N5c2NhbGx9ICR7b3JpZ2luYWwuY29tbWFuZH0gRU5PRU5UYCksIHtcbiAgICAgICAgY29kZTogJ0VOT0VOVCcsXG4gICAgICAgIGVycm5vOiAnRU5PRU5UJyxcbiAgICAgICAgc3lzY2FsbDogYCR7c3lzY2FsbH0gJHtvcmlnaW5hbC5jb21tYW5kfWAsXG4gICAgICAgIHBhdGg6IG9yaWdpbmFsLmNvbW1hbmQsXG4gICAgICAgIHNwYXduYXJnczogb3JpZ2luYWwuYXJncyxcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaG9va0NoaWxkUHJvY2VzcyhjcCwgcGFyc2VkKSB7XG4gICAgaWYgKCFpc1dpbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb3JpZ2luYWxFbWl0ID0gY3AuZW1pdDtcblxuICAgIGNwLmVtaXQgPSBmdW5jdGlvbiAobmFtZSwgYXJnMSkge1xuICAgICAgICAvLyBJZiBlbWl0dGluZyBcImV4aXRcIiBldmVudCBhbmQgZXhpdCBjb2RlIGlzIDEsIHdlIG5lZWQgdG8gY2hlY2sgaWZcbiAgICAgICAgLy8gdGhlIGNvbW1hbmQgZXhpc3RzIGFuZCBlbWl0IGFuIFwiZXJyb3JcIiBpbnN0ZWFkXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vSW5kaWdvVW5pdGVkL25vZGUtY3Jvc3Mtc3Bhd24vaXNzdWVzLzE2XG4gICAgICAgIGlmIChuYW1lID09PSAnZXhpdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IHZlcmlmeUVOT0VOVChhcmcxLCBwYXJzZWQpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRW1pdC5jYWxsKGNwLCAnZXJyb3InLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsRW1pdC5hcHBseShjcCwgYXJndW1lbnRzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICB9O1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlFTk9FTlQoc3RhdHVzLCBwYXJzZWQpIHtcbiAgICBpZiAoaXNXaW4gJiYgc3RhdHVzID09PSAxICYmICFwYXJzZWQuZmlsZSkge1xuICAgICAgICByZXR1cm4gbm90Rm91bmRFcnJvcihwYXJzZWQub3JpZ2luYWwsICdzcGF3bicpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlFTk9FTlRTeW5jKHN0YXR1cywgcGFyc2VkKSB7XG4gICAgaWYgKGlzV2luICYmIHN0YXR1cyA9PT0gMSAmJiAhcGFyc2VkLmZpbGUpIHtcbiAgICAgICAgcmV0dXJuIG5vdEZvdW5kRXJyb3IocGFyc2VkLm9yaWdpbmFsLCAnc3Bhd25TeW5jJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGhvb2tDaGlsZFByb2Nlc3MsXG4gICAgdmVyaWZ5RU5PRU5ULFxuICAgIHZlcmlmeUVOT0VOVFN5bmMsXG4gICAgbm90Rm91bmRFcnJvcixcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcCA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9saWIvcGFyc2UnKTtcbmNvbnN0IGVub2VudCA9IHJlcXVpcmUoJy4vbGliL2Vub2VudCcpO1xuXG5mdW5jdGlvbiBzcGF3bihjb21tYW5kLCBhcmdzLCBvcHRpb25zKSB7XG4gICAgLy8gUGFyc2UgdGhlIGFyZ3VtZW50c1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlKGNvbW1hbmQsIGFyZ3MsIG9wdGlvbnMpO1xuXG4gICAgLy8gU3Bhd24gdGhlIGNoaWxkIHByb2Nlc3NcbiAgICBjb25zdCBzcGF3bmVkID0gY3Auc3Bhd24ocGFyc2VkLmNvbW1hbmQsIHBhcnNlZC5hcmdzLCBwYXJzZWQub3B0aW9ucyk7XG5cbiAgICAvLyBIb29rIGludG8gY2hpbGQgcHJvY2VzcyBcImV4aXRcIiBldmVudCB0byBlbWl0IGFuIGVycm9yIGlmIHRoZSBjb21tYW5kXG4gICAgLy8gZG9lcyBub3QgZXhpc3RzLCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9JbmRpZ29Vbml0ZWQvbm9kZS1jcm9zcy1zcGF3bi9pc3N1ZXMvMTZcbiAgICBlbm9lbnQuaG9va0NoaWxkUHJvY2VzcyhzcGF3bmVkLCBwYXJzZWQpO1xuXG4gICAgcmV0dXJuIHNwYXduZWQ7XG59XG5cbmZ1bmN0aW9uIHNwYXduU3luYyhjb21tYW5kLCBhcmdzLCBvcHRpb25zKSB7XG4gICAgLy8gUGFyc2UgdGhlIGFyZ3VtZW50c1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlKGNvbW1hbmQsIGFyZ3MsIG9wdGlvbnMpO1xuXG4gICAgLy8gU3Bhd24gdGhlIGNoaWxkIHByb2Nlc3NcbiAgICBjb25zdCByZXN1bHQgPSBjcC5zcGF3blN5bmMocGFyc2VkLmNvbW1hbmQsIHBhcnNlZC5hcmdzLCBwYXJzZWQub3B0aW9ucyk7XG5cbiAgICAvLyBBbmFseXplIGlmIHRoZSBjb21tYW5kIGRvZXMgbm90IGV4aXN0LCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9JbmRpZ29Vbml0ZWQvbm9kZS1jcm9zcy1zcGF3bi9pc3N1ZXMvMTZcbiAgICByZXN1bHQuZXJyb3IgPSByZXN1bHQuZXJyb3IgfHwgZW5vZW50LnZlcmlmeUVOT0VOVFN5bmMocmVzdWx0LnN0YXR1cywgcGFyc2VkKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3Bhd247XG5tb2R1bGUuZXhwb3J0cy5zcGF3biA9IHNwYXduO1xubW9kdWxlLmV4cG9ydHMuc3luYyA9IHNwYXduU3luYztcblxubW9kdWxlLmV4cG9ydHMuX3BhcnNlID0gcGFyc2U7XG5tb2R1bGUuZXhwb3J0cy5fZW5vZW50ID0gZW5vZW50O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhdGhLZXkob3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IHtcblx0XHRlbnYgPSBwcm9jZXNzLmVudixcblx0XHRwbGF0Zm9ybSA9IHByb2Nlc3MucGxhdGZvcm1cblx0fSA9IG9wdGlvbnM7XG5cblx0aWYgKHBsYXRmb3JtICE9PSAnd2luMzInKSB7XG5cdFx0cmV0dXJuICdQQVRIJztcblx0fVxuXG5cdHJldHVybiBPYmplY3Qua2V5cyhlbnYpLnJldmVyc2UoKS5maW5kKGtleSA9PiBrZXkudG9VcHBlckNhc2UoKSA9PT0gJ1BBVEgnKSB8fCAnUGF0aCc7XG59XG4iLCAiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGF5KHtzZWNvbmRzLCBtaWxsaXNlY29uZHN9ID0ge30pIHtcblx0bGV0IGR1cmF0aW9uO1xuXHRpZiAodHlwZW9mIHNlY29uZHMgPT09ICdudW1iZXInKSB7XG5cdFx0ZHVyYXRpb24gPSBzZWNvbmRzICogMTAwMDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWlsbGlzZWNvbmRzID09PSAnbnVtYmVyJykge1xuXHRcdGR1cmF0aW9uID0gbWlsbGlzZWNvbmRzO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFuIG9iamVjdCB3aXRoIGVpdGhlciBgc2Vjb25kc2Agb3IgYG1pbGxpc2Vjb25kc2AuJyk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0c2V0VGltZW91dChyZXNvbHZlLCBkdXJhdGlvbik7XG5cdH0pO1xufVxuIiwgImltcG9ydCB7cHJvbWlzaWZ5fSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IHtleGVjRmlsZSBhcyBleGVjRmlsZUNhbGxiYWNrLCBleGVjRmlsZVN5bmMgYXMgZXhlY0ZpbGVTeW5jT3JpZ2luYWx9IGZyb20gJ25vZGU6Y2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHtmaWxlVVJMVG9QYXRofSBmcm9tICdub2RlOnVybCc7XG5cbmNvbnN0IGV4ZWNGaWxlT3JpZ2luYWwgPSBwcm9taXNpZnkoZXhlY0ZpbGVDYWxsYmFjayk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1BhdGgodXJsT3JQYXRoKSB7XG5cdHJldHVybiB1cmxPclBhdGggaW5zdGFuY2VvZiBVUkwgPyBmaWxlVVJMVG9QYXRoKHVybE9yUGF0aCkgOiB1cmxPclBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb290RGlyZWN0b3J5KHBhdGhJbnB1dCkge1xuXHRyZXR1cm4gcGF0aC5wYXJzZSh0b1BhdGgocGF0aElucHV0KSkucm9vdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlUGF0aFVwKHN0YXJ0UGF0aCkge1xuXHRyZXR1cm4ge1xuXHRcdCogW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG5cdFx0XHRsZXQgY3VycmVudFBhdGggPSBwYXRoLnJlc29sdmUodG9QYXRoKHN0YXJ0UGF0aCkpO1xuXHRcdFx0bGV0IHByZXZpb3VzUGF0aDtcblxuXHRcdFx0d2hpbGUgKHByZXZpb3VzUGF0aCAhPT0gY3VycmVudFBhdGgpIHtcblx0XHRcdFx0eWllbGQgY3VycmVudFBhdGg7XG5cdFx0XHRcdHByZXZpb3VzUGF0aCA9IGN1cnJlbnRQYXRoO1xuXHRcdFx0XHRjdXJyZW50UGF0aCA9IHBhdGgucmVzb2x2ZShjdXJyZW50UGF0aCwgJy4uJyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcbn1cblxuY29uc3QgVEVOX01FR0FCWVRFU19JTl9CWVRFUyA9IDEwICogMTAyNCAqIDEwMjQ7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjRmlsZShmaWxlLCBhcmd1bWVudHNfLCBvcHRpb25zID0ge30pIHtcblx0cmV0dXJuIGV4ZWNGaWxlT3JpZ2luYWwoZmlsZSwgYXJndW1lbnRzXywge1xuXHRcdG1heEJ1ZmZlcjogVEVOX01FR0FCWVRFU19JTl9CWVRFUyxcblx0XHQuLi5vcHRpb25zLFxuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNGaWxlU3luYyhmaWxlLCBhcmd1bWVudHNfID0gW10sIG9wdGlvbnMgPSB7fSkge1xuXHRyZXR1cm4gZXhlY0ZpbGVTeW5jT3JpZ2luYWwoZmlsZSwgYXJndW1lbnRzXywge1xuXHRcdG1heEJ1ZmZlcjogVEVOX01FR0FCWVRFU19JTl9CWVRFUyxcblx0XHRlbmNvZGluZzogJ3V0ZjgnLFxuXHRcdHN0ZGlvOiAncGlwZScsXG5cdFx0Li4ub3B0aW9ucyxcblx0fSk7XG59XG5cbmV4cG9ydCAqIGZyb20gJy4vZGVmYXVsdC5qcyc7XG4iLCAiaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgcGF0aEtleSBmcm9tICdwYXRoLWtleSc7XG5pbXBvcnQge3RvUGF0aCwgdHJhdmVyc2VQYXRoVXB9IGZyb20gJ3VuaWNvcm4tbWFnaWMnO1xuXG5leHBvcnQgY29uc3QgbnBtUnVuUGF0aCA9ICh7XG5cdGN3ZCA9IHByb2Nlc3MuY3dkKCksXG5cdHBhdGg6IHBhdGhPcHRpb24gPSBwcm9jZXNzLmVudltwYXRoS2V5KCldLFxuXHRwcmVmZXJMb2NhbCA9IHRydWUsXG5cdGV4ZWNQYXRoID0gcHJvY2Vzcy5leGVjUGF0aCxcblx0YWRkRXhlY1BhdGggPSB0cnVlLFxufSA9IHt9KSA9PiB7XG5cdGNvbnN0IGN3ZFBhdGggPSBwYXRoLnJlc29sdmUodG9QYXRoKGN3ZCkpO1xuXHRjb25zdCByZXN1bHQgPSBbXTtcblx0Y29uc3QgcGF0aFBhcnRzID0gcGF0aE9wdGlvbi5zcGxpdChwYXRoLmRlbGltaXRlcik7XG5cblx0aWYgKHByZWZlckxvY2FsKSB7XG5cdFx0YXBwbHlQcmVmZXJMb2NhbChyZXN1bHQsIHBhdGhQYXJ0cywgY3dkUGF0aCk7XG5cdH1cblxuXHRpZiAoYWRkRXhlY1BhdGgpIHtcblx0XHRhcHBseUV4ZWNQYXRoKHJlc3VsdCwgcGF0aFBhcnRzLCBleGVjUGF0aCwgY3dkUGF0aCk7XG5cdH1cblxuXHRyZXR1cm4gcGF0aE9wdGlvbiA9PT0gJycgfHwgcGF0aE9wdGlvbiA9PT0gcGF0aC5kZWxpbWl0ZXJcblx0XHQ/IGAke3Jlc3VsdC5qb2luKHBhdGguZGVsaW1pdGVyKX0ke3BhdGhPcHRpb259YFxuXHRcdDogWy4uLnJlc3VsdCwgcGF0aE9wdGlvbl0uam9pbihwYXRoLmRlbGltaXRlcik7XG59O1xuXG5jb25zdCBhcHBseVByZWZlckxvY2FsID0gKHJlc3VsdCwgcGF0aFBhcnRzLCBjd2RQYXRoKSA9PiB7XG5cdGZvciAoY29uc3QgZGlyZWN0b3J5IG9mIHRyYXZlcnNlUGF0aFVwKGN3ZFBhdGgpKSB7XG5cdFx0Y29uc3QgcGF0aFBhcnQgPSBwYXRoLmpvaW4oZGlyZWN0b3J5LCAnbm9kZV9tb2R1bGVzLy5iaW4nKTtcblx0XHRpZiAoIXBhdGhQYXJ0cy5pbmNsdWRlcyhwYXRoUGFydCkpIHtcblx0XHRcdHJlc3VsdC5wdXNoKHBhdGhQYXJ0KTtcblx0XHR9XG5cdH1cbn07XG5cbi8vIEVuc3VyZSB0aGUgcnVubmluZyBgbm9kZWAgYmluYXJ5IGlzIHVzZWRcbmNvbnN0IGFwcGx5RXhlY1BhdGggPSAocmVzdWx0LCBwYXRoUGFydHMsIGV4ZWNQYXRoLCBjd2RQYXRoKSA9PiB7XG5cdGNvbnN0IHBhdGhQYXJ0ID0gcGF0aC5yZXNvbHZlKGN3ZFBhdGgsIHRvUGF0aChleGVjUGF0aCksICcuLicpO1xuXHRpZiAoIXBhdGhQYXJ0cy5pbmNsdWRlcyhwYXRoUGFydCkpIHtcblx0XHRyZXN1bHQucHVzaChwYXRoUGFydCk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBucG1SdW5QYXRoRW52ID0gKHtlbnYgPSBwcm9jZXNzLmVudiwgLi4ub3B0aW9uc30gPSB7fSkgPT4ge1xuXHRlbnYgPSB7Li4uZW52fTtcblxuXHRjb25zdCBwYXRoTmFtZSA9IHBhdGhLZXkoe2Vudn0pO1xuXHRvcHRpb25zLnBhdGggPSBlbnZbcGF0aE5hbWVdO1xuXHRlbnZbcGF0aE5hbWVdID0gbnBtUnVuUGF0aChvcHRpb25zKTtcblxuXHRyZXR1cm4gZW52O1xufTtcbiIsICIvLyBXaGVuIHRoZSBzdWJwcm9jZXNzIGZhaWxzLCB0aGlzIGlzIHRoZSBlcnJvciBpbnN0YW5jZSBiZWluZyByZXR1cm5lZC5cbi8vIElmIGFub3RoZXIgZXJyb3IgaW5zdGFuY2UgaXMgYmVpbmcgdGhyb3duLCBpdCBpcyBrZXB0IGFzIGBlcnJvci5jYXVzZWAuXG5leHBvcnQgY29uc3QgZ2V0RmluYWxFcnJvciA9IChvcmlnaW5hbEVycm9yLCBtZXNzYWdlLCBpc1N5bmMpID0+IHtcblx0Y29uc3QgRXJyb3JDbGFzcyA9IGlzU3luYyA/IEV4ZWNhU3luY0Vycm9yIDogRXhlY2FFcnJvcjtcblx0Y29uc3Qgb3B0aW9ucyA9IG9yaWdpbmFsRXJyb3IgaW5zdGFuY2VvZiBEaXNjYXJkZWRFcnJvciA/IHt9IDoge2NhdXNlOiBvcmlnaW5hbEVycm9yfTtcblx0cmV0dXJuIG5ldyBFcnJvckNsYXNzKG1lc3NhZ2UsIG9wdGlvbnMpO1xufTtcblxuLy8gSW5kaWNhdGVzIHRoYXQgdGhlIGVycm9yIGlzIHVzZWQgb25seSB0byBpbnRlcnJ1cHQgY29udHJvbCBmbG93LCBidXQgbm90IGluIHRoZSByZXR1cm4gdmFsdWVcbmV4cG9ydCBjbGFzcyBEaXNjYXJkZWRFcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbi8vIFByb3BlciB3YXkgdG8gc2V0IGBlcnJvci5uYW1lYDogaXQgc2hvdWxkIGJlIGluaGVyaXRlZCBhbmQgbm9uLWVudW1lcmFibGVcbmNvbnN0IHNldEVycm9yTmFtZSA9IChFcnJvckNsYXNzLCB2YWx1ZSkgPT4ge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoRXJyb3JDbGFzcy5wcm90b3R5cGUsICduYW1lJywge1xuXHRcdHZhbHVlLFxuXHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFcnJvckNsYXNzLnByb3RvdHlwZSwgZXhlY2FFcnJvclN5bWJvbCwge1xuXHRcdHZhbHVlOiB0cnVlLFxuXHRcdHdyaXRhYmxlOiBmYWxzZSxcblx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHR9KTtcbn07XG5cbi8vIFVubGlrZSBgaW5zdGFuY2VvZmAsIHRoaXMgd29ya3MgYWNyb3NzIHJlYWxtc1xuZXhwb3J0IGNvbnN0IGlzRXhlY2FFcnJvciA9IGVycm9yID0+IGlzRXJyb3JJbnN0YW5jZShlcnJvcikgJiYgZXhlY2FFcnJvclN5bWJvbCBpbiBlcnJvcjtcblxuY29uc3QgZXhlY2FFcnJvclN5bWJvbCA9IFN5bWJvbCgnaXNFeGVjYUVycm9yJyk7XG5cbmV4cG9ydCBjb25zdCBpc0Vycm9ySW5zdGFuY2UgPSB2YWx1ZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBFcnJvcl0nO1xuXG4vLyBXZSB1c2UgdHdvIGRpZmZlcmVudCBFcnJvciBjbGFzc2VzIGZvciBhc3luYy9zeW5jIG1ldGhvZHMgc2luY2UgdGhleSBoYXZlIHNsaWdodGx5IGRpZmZlcmVudCBzaGFwZSBhbmQgdHlwZXNcbmV4cG9ydCBjbGFzcyBFeGVjYUVycm9yIGV4dGVuZHMgRXJyb3Ige31cbnNldEVycm9yTmFtZShFeGVjYUVycm9yLCBFeGVjYUVycm9yLm5hbWUpO1xuXG5leHBvcnQgY2xhc3MgRXhlY2FTeW5jRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuc2V0RXJyb3JOYW1lKEV4ZWNhU3luY0Vycm9yLCBFeGVjYVN5bmNFcnJvci5uYW1lKTtcbiIsICJcbmV4cG9ydCBjb25zdCBnZXRSZWFsdGltZVNpZ25hbHM9KCk9PntcbmNvbnN0IGxlbmd0aD1TSUdSVE1BWC1TSUdSVE1JTisxO1xucmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aH0sZ2V0UmVhbHRpbWVTaWduYWwpXG59O1xuXG5jb25zdCBnZXRSZWFsdGltZVNpZ25hbD0odmFsdWUsaW5kZXgpPT4oe1xubmFtZTpgU0lHUlQke2luZGV4KzF9YCxcbm51bWJlcjpTSUdSVE1JTitpbmRleCxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJBcHBsaWNhdGlvbi1zcGVjaWZpYyBzaWduYWwgKHJlYWx0aW1lKVwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiXG59KTtcblxuY29uc3QgU0lHUlRNSU49MzQ7XG5leHBvcnQgY29uc3QgU0lHUlRNQVg9NjQ7IiwgIlxuXG5leHBvcnQgY29uc3QgU0lHTkFMUz1bXG57XG5uYW1lOlwiU0lHSFVQXCIsXG5udW1iZXI6MSxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJUZXJtaW5hbCBjbG9zZWRcIixcbnN0YW5kYXJkOlwicG9zaXhcIlxufSxcbntcbm5hbWU6XCJTSUdJTlRcIixcbm51bWJlcjoyLFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIlVzZXIgaW50ZXJydXB0aW9uIHdpdGggQ1RSTC1DXCIsXG5zdGFuZGFyZDpcImFuc2lcIlxufSxcbntcbm5hbWU6XCJTSUdRVUlUXCIsXG5udW1iZXI6MyxcbmFjdGlvbjpcImNvcmVcIixcbmRlc2NyaXB0aW9uOlwiVXNlciBpbnRlcnJ1cHRpb24gd2l0aCBDVFJMLVxcXFxcIixcbnN0YW5kYXJkOlwicG9zaXhcIlxufSxcbntcbm5hbWU6XCJTSUdJTExcIixcbm51bWJlcjo0LFxuYWN0aW9uOlwiY29yZVwiLFxuZGVzY3JpcHRpb246XCJJbnZhbGlkIG1hY2hpbmUgaW5zdHJ1Y3Rpb25cIixcbnN0YW5kYXJkOlwiYW5zaVwiXG59LFxue1xubmFtZTpcIlNJR1RSQVBcIixcbm51bWJlcjo1LFxuYWN0aW9uOlwiY29yZVwiLFxuZGVzY3JpcHRpb246XCJEZWJ1Z2dlciBicmVha3BvaW50XCIsXG5zdGFuZGFyZDpcInBvc2l4XCJcbn0sXG57XG5uYW1lOlwiU0lHQUJSVFwiLFxubnVtYmVyOjYsXG5hY3Rpb246XCJjb3JlXCIsXG5kZXNjcmlwdGlvbjpcIkFib3J0ZWRcIixcbnN0YW5kYXJkOlwiYW5zaVwiXG59LFxue1xubmFtZTpcIlNJR0lPVFwiLFxubnVtYmVyOjYsXG5hY3Rpb246XCJjb3JlXCIsXG5kZXNjcmlwdGlvbjpcIkFib3J0ZWRcIixcbnN0YW5kYXJkOlwiYnNkXCJcbn0sXG57XG5uYW1lOlwiU0lHQlVTXCIsXG5udW1iZXI6NyxcbmFjdGlvbjpcImNvcmVcIixcbmRlc2NyaXB0aW9uOlxuXCJCdXMgZXJyb3IgZHVlIHRvIG1pc2FsaWduZWQsIG5vbi1leGlzdGluZyBhZGRyZXNzIG9yIHBhZ2luZyBlcnJvclwiLFxuc3RhbmRhcmQ6XCJic2RcIlxufSxcbntcbm5hbWU6XCJTSUdFTVRcIixcbm51bWJlcjo3LFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIkNvbW1hbmQgc2hvdWxkIGJlIGVtdWxhdGVkIGJ1dCBpcyBub3QgaW1wbGVtZW50ZWRcIixcbnN0YW5kYXJkOlwib3RoZXJcIlxufSxcbntcbm5hbWU6XCJTSUdGUEVcIixcbm51bWJlcjo4LFxuYWN0aW9uOlwiY29yZVwiLFxuZGVzY3JpcHRpb246XCJGbG9hdGluZyBwb2ludCBhcml0aG1ldGljIGVycm9yXCIsXG5zdGFuZGFyZDpcImFuc2lcIlxufSxcbntcbm5hbWU6XCJTSUdLSUxMXCIsXG5udW1iZXI6OSxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJGb3JjZWQgdGVybWluYXRpb25cIixcbnN0YW5kYXJkOlwicG9zaXhcIixcbmZvcmNlZDp0cnVlXG59LFxue1xubmFtZTpcIlNJR1VTUjFcIixcbm51bWJlcjoxMCxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJBcHBsaWNhdGlvbi1zcGVjaWZpYyBzaWduYWxcIixcbnN0YW5kYXJkOlwicG9zaXhcIlxufSxcbntcbm5hbWU6XCJTSUdTRUdWXCIsXG5udW1iZXI6MTEsXG5hY3Rpb246XCJjb3JlXCIsXG5kZXNjcmlwdGlvbjpcIlNlZ21lbnRhdGlvbiBmYXVsdFwiLFxuc3RhbmRhcmQ6XCJhbnNpXCJcbn0sXG57XG5uYW1lOlwiU0lHVVNSMlwiLFxubnVtYmVyOjEyLFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIkFwcGxpY2F0aW9uLXNwZWNpZmljIHNpZ25hbFwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiXG59LFxue1xubmFtZTpcIlNJR1BJUEVcIixcbm51bWJlcjoxMyxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJCcm9rZW4gcGlwZSBvciBzb2NrZXRcIixcbnN0YW5kYXJkOlwicG9zaXhcIlxufSxcbntcbm5hbWU6XCJTSUdBTFJNXCIsXG5udW1iZXI6MTQsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiVGltZW91dCBvciB0aW1lclwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiXG59LFxue1xubmFtZTpcIlNJR1RFUk1cIixcbm51bWJlcjoxNSxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJUZXJtaW5hdGlvblwiLFxuc3RhbmRhcmQ6XCJhbnNpXCJcbn0sXG57XG5uYW1lOlwiU0lHU1RLRkxUXCIsXG5udW1iZXI6MTYsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiU3RhY2sgaXMgZW1wdHkgb3Igb3ZlcmZsb3dlZFwiLFxuc3RhbmRhcmQ6XCJvdGhlclwiXG59LFxue1xubmFtZTpcIlNJR0NITERcIixcbm51bWJlcjoxNyxcbmFjdGlvbjpcImlnbm9yZVwiLFxuZGVzY3JpcHRpb246XCJDaGlsZCBwcm9jZXNzIHRlcm1pbmF0ZWQsIHBhdXNlZCBvciB1bnBhdXNlZFwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiXG59LFxue1xubmFtZTpcIlNJR0NMRFwiLFxubnVtYmVyOjE3LFxuYWN0aW9uOlwiaWdub3JlXCIsXG5kZXNjcmlwdGlvbjpcIkNoaWxkIHByb2Nlc3MgdGVybWluYXRlZCwgcGF1c2VkIG9yIHVucGF1c2VkXCIsXG5zdGFuZGFyZDpcIm90aGVyXCJcbn0sXG57XG5uYW1lOlwiU0lHQ09OVFwiLFxubnVtYmVyOjE4LFxuYWN0aW9uOlwidW5wYXVzZVwiLFxuZGVzY3JpcHRpb246XCJVbnBhdXNlZFwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiLFxuZm9yY2VkOnRydWVcbn0sXG57XG5uYW1lOlwiU0lHU1RPUFwiLFxubnVtYmVyOjE5LFxuYWN0aW9uOlwicGF1c2VcIixcbmRlc2NyaXB0aW9uOlwiUGF1c2VkXCIsXG5zdGFuZGFyZDpcInBvc2l4XCIsXG5mb3JjZWQ6dHJ1ZVxufSxcbntcbm5hbWU6XCJTSUdUU1RQXCIsXG5udW1iZXI6MjAsXG5hY3Rpb246XCJwYXVzZVwiLFxuZGVzY3JpcHRpb246XCJQYXVzZWQgdXNpbmcgQ1RSTC1aIG9yIFxcXCJzdXNwZW5kXFxcIlwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiXG59LFxue1xubmFtZTpcIlNJR1RUSU5cIixcbm51bWJlcjoyMSxcbmFjdGlvbjpcInBhdXNlXCIsXG5kZXNjcmlwdGlvbjpcIkJhY2tncm91bmQgcHJvY2VzcyBjYW5ub3QgcmVhZCB0ZXJtaW5hbCBpbnB1dFwiLFxuc3RhbmRhcmQ6XCJwb3NpeFwiXG59LFxue1xubmFtZTpcIlNJR0JSRUFLXCIsXG5udW1iZXI6MjEsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiVXNlciBpbnRlcnJ1cHRpb24gd2l0aCBDVFJMLUJSRUFLXCIsXG5zdGFuZGFyZDpcIm90aGVyXCJcbn0sXG57XG5uYW1lOlwiU0lHVFRPVVwiLFxubnVtYmVyOjIyLFxuYWN0aW9uOlwicGF1c2VcIixcbmRlc2NyaXB0aW9uOlwiQmFja2dyb3VuZCBwcm9jZXNzIGNhbm5vdCB3cml0ZSB0byB0ZXJtaW5hbCBvdXRwdXRcIixcbnN0YW5kYXJkOlwicG9zaXhcIlxufSxcbntcbm5hbWU6XCJTSUdVUkdcIixcbm51bWJlcjoyMyxcbmFjdGlvbjpcImlnbm9yZVwiLFxuZGVzY3JpcHRpb246XCJTb2NrZXQgcmVjZWl2ZWQgb3V0LW9mLWJhbmQgZGF0YVwiLFxuc3RhbmRhcmQ6XCJic2RcIlxufSxcbntcbm5hbWU6XCJTSUdYQ1BVXCIsXG5udW1iZXI6MjQsXG5hY3Rpb246XCJjb3JlXCIsXG5kZXNjcmlwdGlvbjpcIlByb2Nlc3MgdGltZWQgb3V0XCIsXG5zdGFuZGFyZDpcImJzZFwiXG59LFxue1xubmFtZTpcIlNJR1hGU1pcIixcbm51bWJlcjoyNSxcbmFjdGlvbjpcImNvcmVcIixcbmRlc2NyaXB0aW9uOlwiRmlsZSB0b28gYmlnXCIsXG5zdGFuZGFyZDpcImJzZFwiXG59LFxue1xubmFtZTpcIlNJR1ZUQUxSTVwiLFxubnVtYmVyOjI2LFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIlRpbWVvdXQgb3IgdGltZXJcIixcbnN0YW5kYXJkOlwiYnNkXCJcbn0sXG57XG5uYW1lOlwiU0lHUFJPRlwiLFxubnVtYmVyOjI3LFxuYWN0aW9uOlwidGVybWluYXRlXCIsXG5kZXNjcmlwdGlvbjpcIlRpbWVvdXQgb3IgdGltZXJcIixcbnN0YW5kYXJkOlwiYnNkXCJcbn0sXG57XG5uYW1lOlwiU0lHV0lOQ0hcIixcbm51bWJlcjoyOCxcbmFjdGlvbjpcImlnbm9yZVwiLFxuZGVzY3JpcHRpb246XCJUZXJtaW5hbCB3aW5kb3cgc2l6ZSBjaGFuZ2VkXCIsXG5zdGFuZGFyZDpcImJzZFwiXG59LFxue1xubmFtZTpcIlNJR0lPXCIsXG5udW1iZXI6MjksXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiSS9PIGlzIGF2YWlsYWJsZVwiLFxuc3RhbmRhcmQ6XCJvdGhlclwiXG59LFxue1xubmFtZTpcIlNJR1BPTExcIixcbm51bWJlcjoyOSxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJXYXRjaGVkIGV2ZW50XCIsXG5zdGFuZGFyZDpcIm90aGVyXCJcbn0sXG57XG5uYW1lOlwiU0lHSU5GT1wiLFxubnVtYmVyOjI5LFxuYWN0aW9uOlwiaWdub3JlXCIsXG5kZXNjcmlwdGlvbjpcIlJlcXVlc3QgZm9yIHByb2Nlc3MgaW5mb3JtYXRpb25cIixcbnN0YW5kYXJkOlwib3RoZXJcIlxufSxcbntcbm5hbWU6XCJTSUdQV1JcIixcbm51bWJlcjozMCxcbmFjdGlvbjpcInRlcm1pbmF0ZVwiLFxuZGVzY3JpcHRpb246XCJEZXZpY2UgcnVubmluZyBvdXQgb2YgcG93ZXJcIixcbnN0YW5kYXJkOlwic3lzdGVtdlwiXG59LFxue1xubmFtZTpcIlNJR1NZU1wiLFxubnVtYmVyOjMxLFxuYWN0aW9uOlwiY29yZVwiLFxuZGVzY3JpcHRpb246XCJJbnZhbGlkIHN5c3RlbSBjYWxsXCIsXG5zdGFuZGFyZDpcIm90aGVyXCJcbn0sXG57XG5uYW1lOlwiU0lHVU5VU0VEXCIsXG5udW1iZXI6MzEsXG5hY3Rpb246XCJ0ZXJtaW5hdGVcIixcbmRlc2NyaXB0aW9uOlwiSW52YWxpZCBzeXN0ZW0gY2FsbFwiLFxuc3RhbmRhcmQ6XCJvdGhlclwiXG59XTsiLCAiaW1wb3J0e2NvbnN0YW50c31mcm9tXCJub2RlOm9zXCI7XG5cbmltcG9ydHtTSUdOQUxTfWZyb21cIi4vY29yZS5qc1wiO1xuaW1wb3J0e2dldFJlYWx0aW1lU2lnbmFsc31mcm9tXCIuL3JlYWx0aW1lLmpzXCI7XG5cblxuXG5leHBvcnQgY29uc3QgZ2V0U2lnbmFscz0oKT0+e1xuY29uc3QgcmVhbHRpbWVTaWduYWxzPWdldFJlYWx0aW1lU2lnbmFscygpO1xuY29uc3Qgc2lnbmFscz1bLi4uU0lHTkFMUywuLi5yZWFsdGltZVNpZ25hbHNdLm1hcChub3JtYWxpemVTaWduYWwpO1xucmV0dXJuIHNpZ25hbHNcbn07XG5cblxuXG5cblxuXG5cbmNvbnN0IG5vcm1hbGl6ZVNpZ25hbD0oe1xubmFtZSxcbm51bWJlcjpkZWZhdWx0TnVtYmVyLFxuZGVzY3JpcHRpb24sXG5hY3Rpb24sXG5mb3JjZWQ9ZmFsc2UsXG5zdGFuZGFyZFxufSk9PntcbmNvbnN0e1xuc2lnbmFsczp7W25hbWVdOmNvbnN0YW50U2lnbmFsfVxufT1jb25zdGFudHM7XG5jb25zdCBzdXBwb3J0ZWQ9Y29uc3RhbnRTaWduYWwhPT11bmRlZmluZWQ7XG5jb25zdCBudW1iZXI9c3VwcG9ydGVkP2NvbnN0YW50U2lnbmFsOmRlZmF1bHROdW1iZXI7XG5yZXR1cm57bmFtZSxudW1iZXIsZGVzY3JpcHRpb24sc3VwcG9ydGVkLGFjdGlvbixmb3JjZWQsc3RhbmRhcmR9XG59OyIsICJpbXBvcnR7Y29uc3RhbnRzfWZyb21cIm5vZGU6b3NcIjtcblxuaW1wb3J0e1NJR1JUTUFYfWZyb21cIi4vcmVhbHRpbWUuanNcIjtcbmltcG9ydHtnZXRTaWduYWxzfWZyb21cIi4vc2lnbmFscy5qc1wiO1xuXG5cblxuY29uc3QgZ2V0U2lnbmFsc0J5TmFtZT0oKT0+e1xuY29uc3Qgc2lnbmFscz1nZXRTaWduYWxzKCk7XG5yZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHNpZ25hbHMubWFwKGdldFNpZ25hbEJ5TmFtZSkpXG59O1xuXG5jb25zdCBnZXRTaWduYWxCeU5hbWU9KHtcbm5hbWUsXG5udW1iZXIsXG5kZXNjcmlwdGlvbixcbnN1cHBvcnRlZCxcbmFjdGlvbixcbmZvcmNlZCxcbnN0YW5kYXJkXG59KT0+W25hbWUse25hbWUsbnVtYmVyLGRlc2NyaXB0aW9uLHN1cHBvcnRlZCxhY3Rpb24sZm9yY2VkLHN0YW5kYXJkfV07XG5cbmV4cG9ydCBjb25zdCBzaWduYWxzQnlOYW1lPWdldFNpZ25hbHNCeU5hbWUoKTtcblxuXG5cblxuY29uc3QgZ2V0U2lnbmFsc0J5TnVtYmVyPSgpPT57XG5jb25zdCBzaWduYWxzPWdldFNpZ25hbHMoKTtcbmNvbnN0IGxlbmd0aD1TSUdSVE1BWCsxO1xuY29uc3Qgc2lnbmFsc0E9QXJyYXkuZnJvbSh7bGVuZ3RofSwodmFsdWUsbnVtYmVyKT0+XG5nZXRTaWduYWxCeU51bWJlcihudW1iZXIsc2lnbmFscylcbik7XG5yZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwuLi5zaWduYWxzQSlcbn07XG5cbmNvbnN0IGdldFNpZ25hbEJ5TnVtYmVyPShudW1iZXIsc2lnbmFscyk9PntcbmNvbnN0IHNpZ25hbD1maW5kU2lnbmFsQnlOdW1iZXIobnVtYmVyLHNpZ25hbHMpO1xuXG5pZihzaWduYWw9PT11bmRlZmluZWQpe1xucmV0dXJue31cbn1cblxuY29uc3R7bmFtZSxkZXNjcmlwdGlvbixzdXBwb3J0ZWQsYWN0aW9uLGZvcmNlZCxzdGFuZGFyZH09c2lnbmFsO1xucmV0dXJue1xuW251bWJlcl06e1xubmFtZSxcbm51bWJlcixcbmRlc2NyaXB0aW9uLFxuc3VwcG9ydGVkLFxuYWN0aW9uLFxuZm9yY2VkLFxuc3RhbmRhcmRcbn1cbn1cbn07XG5cblxuXG5jb25zdCBmaW5kU2lnbmFsQnlOdW1iZXI9KG51bWJlcixzaWduYWxzKT0+e1xuY29uc3Qgc2lnbmFsPXNpZ25hbHMuZmluZCgoe25hbWV9KT0+Y29uc3RhbnRzLnNpZ25hbHNbbmFtZV09PT1udW1iZXIpO1xuXG5pZihzaWduYWwhPT11bmRlZmluZWQpe1xucmV0dXJuIHNpZ25hbFxufVxuXG5yZXR1cm4gc2lnbmFscy5maW5kKChzaWduYWxBKT0+c2lnbmFsQS5udW1iZXI9PT1udW1iZXIpXG59O1xuXG5leHBvcnQgY29uc3Qgc2lnbmFsc0J5TnVtYmVyPWdldFNpZ25hbHNCeU51bWJlcigpOyIsICJpbXBvcnQge2NvbnN0YW50c30gZnJvbSAnbm9kZTpvcyc7XG5pbXBvcnQge3NpZ25hbHNCeU5hbWV9IGZyb20gJ2h1bWFuLXNpZ25hbHMnO1xuXG4vLyBOb3JtYWxpemUgc2lnbmFscyBmb3IgY29tcGFyaXNvbiBwdXJwb3NlLlxuLy8gQWxzbyB2YWxpZGF0ZSB0aGUgc2lnbmFsIGV4aXN0cy5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVLaWxsU2lnbmFsID0ga2lsbFNpZ25hbCA9PiB7XG5cdGNvbnN0IG9wdGlvbk5hbWUgPSAnb3B0aW9uIGBraWxsU2lnbmFsYCc7XG5cdGlmIChraWxsU2lnbmFsID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCAke29wdGlvbk5hbWV9OiAwIGNhbm5vdCBiZSB1c2VkLmApO1xuXHR9XG5cblx0cmV0dXJuIG5vcm1hbGl6ZVNpZ25hbChraWxsU2lnbmFsLCBvcHRpb25OYW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVTaWduYWxBcmd1bWVudCA9IHNpZ25hbCA9PiBzaWduYWwgPT09IDBcblx0PyBzaWduYWxcblx0OiBub3JtYWxpemVTaWduYWwoc2lnbmFsLCAnYHN1YnByb2Nlc3Mua2lsbCgpYFxcJ3MgYXJndW1lbnQnKTtcblxuY29uc3Qgbm9ybWFsaXplU2lnbmFsID0gKHNpZ25hbE5hbWVPckludGVnZXIsIG9wdGlvbk5hbWUpID0+IHtcblx0aWYgKE51bWJlci5pc0ludGVnZXIoc2lnbmFsTmFtZU9ySW50ZWdlcikpIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplU2lnbmFsSW50ZWdlcihzaWduYWxOYW1lT3JJbnRlZ2VyLCBvcHRpb25OYW1lKTtcblx0fVxuXG5cdGlmICh0eXBlb2Ygc2lnbmFsTmFtZU9ySW50ZWdlciA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplU2lnbmFsTmFtZShzaWduYWxOYW1lT3JJbnRlZ2VyLCBvcHRpb25OYW1lKTtcblx0fVxuXG5cdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgJHtvcHRpb25OYW1lfSAke1N0cmluZyhzaWduYWxOYW1lT3JJbnRlZ2VyKX06IGl0IG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gaW50ZWdlci5cXG4ke2dldEF2YWlsYWJsZVNpZ25hbHMoKX1gKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZVNpZ25hbEludGVnZXIgPSAoc2lnbmFsSW50ZWdlciwgb3B0aW9uTmFtZSkgPT4ge1xuXHRpZiAoc2lnbmFsc0ludGVnZXJUb05hbWUuaGFzKHNpZ25hbEludGVnZXIpKSB7XG5cdFx0cmV0dXJuIHNpZ25hbHNJbnRlZ2VyVG9OYW1lLmdldChzaWduYWxJbnRlZ2VyKTtcblx0fVxuXG5cdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgJHtvcHRpb25OYW1lfSAke3NpZ25hbEludGVnZXJ9OiB0aGlzIHNpZ25hbCBpbnRlZ2VyIGRvZXMgbm90IGV4aXN0LlxcbiR7Z2V0QXZhaWxhYmxlU2lnbmFscygpfWApO1xufTtcblxuY29uc3QgZ2V0U2lnbmFsc0ludGVnZXJUb05hbWUgPSAoKSA9PiBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKGNvbnN0YW50cy5zaWduYWxzKVxuXHQucmV2ZXJzZSgpXG5cdC5tYXAoKFtzaWduYWxOYW1lLCBzaWduYWxJbnRlZ2VyXSkgPT4gW3NpZ25hbEludGVnZXIsIHNpZ25hbE5hbWVdKSk7XG5cbmNvbnN0IHNpZ25hbHNJbnRlZ2VyVG9OYW1lID0gZ2V0U2lnbmFsc0ludGVnZXJUb05hbWUoKTtcblxuY29uc3Qgbm9ybWFsaXplU2lnbmFsTmFtZSA9IChzaWduYWxOYW1lLCBvcHRpb25OYW1lKSA9PiB7XG5cdGlmIChzaWduYWxOYW1lIGluIGNvbnN0YW50cy5zaWduYWxzKSB7XG5cdFx0cmV0dXJuIHNpZ25hbE5hbWU7XG5cdH1cblxuXHRpZiAoc2lnbmFsTmFtZS50b1VwcGVyQ2FzZSgpIGluIGNvbnN0YW50cy5zaWduYWxzKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCAke29wdGlvbk5hbWV9ICcke3NpZ25hbE5hbWV9JzogcGxlYXNlIHJlbmFtZSBpdCB0byAnJHtzaWduYWxOYW1lLnRvVXBwZXJDYXNlKCl9Jy5gKTtcblx0fVxuXG5cdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgJHtvcHRpb25OYW1lfSAnJHtzaWduYWxOYW1lfSc6IHRoaXMgc2lnbmFsIG5hbWUgZG9lcyBub3QgZXhpc3QuXFxuJHtnZXRBdmFpbGFibGVTaWduYWxzKCl9YCk7XG59O1xuXG5jb25zdCBnZXRBdmFpbGFibGVTaWduYWxzID0gKCkgPT4gYEF2YWlsYWJsZSBzaWduYWwgbmFtZXM6ICR7Z2V0QXZhaWxhYmxlU2lnbmFsTmFtZXMoKX0uXG5BdmFpbGFibGUgc2lnbmFsIG51bWJlcnM6ICR7Z2V0QXZhaWxhYmxlU2lnbmFsSW50ZWdlcnMoKX0uYDtcblxuY29uc3QgZ2V0QXZhaWxhYmxlU2lnbmFsTmFtZXMgPSAoKSA9PiBPYmplY3Qua2V5cyhjb25zdGFudHMuc2lnbmFscylcblx0LnNvcnQoKVxuXHQubWFwKHNpZ25hbE5hbWUgPT4gYCcke3NpZ25hbE5hbWV9J2ApXG5cdC5qb2luKCcsICcpO1xuXG5jb25zdCBnZXRBdmFpbGFibGVTaWduYWxJbnRlZ2VycyA9ICgpID0+IFsuLi5uZXcgU2V0KE9iamVjdC52YWx1ZXMoY29uc3RhbnRzLnNpZ25hbHMpXG5cdC5zb3J0KChzaWduYWxJbnRlZ2VyLCBzaWduYWxJbnRlZ2VyVHdvKSA9PiBzaWduYWxJbnRlZ2VyIC0gc2lnbmFsSW50ZWdlclR3bykpXVxuXHQuam9pbignLCAnKTtcblxuLy8gSHVtYW4tZnJpZW5kbHkgZGVzY3JpcHRpb24gb2YgYSBzaWduYWxcbmV4cG9ydCBjb25zdCBnZXRTaWduYWxEZXNjcmlwdGlvbiA9IHNpZ25hbCA9PiBzaWduYWxzQnlOYW1lW3NpZ25hbF0uZGVzY3JpcHRpb247XG4iLCAiaW1wb3J0IHtzZXRUaW1lb3V0fSBmcm9tICdub2RlOnRpbWVycy9wcm9taXNlcyc7XG5pbXBvcnQge2lzRXJyb3JJbnN0YW5jZX0gZnJvbSAnLi4vcmV0dXJuL2ZpbmFsLWVycm9yLmpzJztcbmltcG9ydCB7bm9ybWFsaXplU2lnbmFsQXJndW1lbnR9IGZyb20gJy4vc2lnbmFsLmpzJztcblxuLy8gTm9ybWFsaXplIHRoZSBgZm9yY2VLaWxsQWZ0ZXJEZWxheWAgb3B0aW9uXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplRm9yY2VLaWxsQWZ0ZXJEZWxheSA9IGZvcmNlS2lsbEFmdGVyRGVsYXkgPT4ge1xuXHRpZiAoZm9yY2VLaWxsQWZ0ZXJEZWxheSA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gZm9yY2VLaWxsQWZ0ZXJEZWxheTtcblx0fVxuXG5cdGlmIChmb3JjZUtpbGxBZnRlckRlbGF5ID09PSB0cnVlKSB7XG5cdFx0cmV0dXJuIERFRkFVTFRfRk9SQ0VfS0lMTF9USU1FT1VUO1xuXHR9XG5cblx0aWYgKCFOdW1iZXIuaXNGaW5pdGUoZm9yY2VLaWxsQWZ0ZXJEZWxheSkgfHwgZm9yY2VLaWxsQWZ0ZXJEZWxheSA8IDApIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCB0aGUgXFxgZm9yY2VLaWxsQWZ0ZXJEZWxheVxcYCBvcHRpb24gdG8gYmUgYSBub24tbmVnYXRpdmUgaW50ZWdlciwgZ290IFxcYCR7Zm9yY2VLaWxsQWZ0ZXJEZWxheX1cXGAgKCR7dHlwZW9mIGZvcmNlS2lsbEFmdGVyRGVsYXl9KWApO1xuXHR9XG5cblx0cmV0dXJuIGZvcmNlS2lsbEFmdGVyRGVsYXk7XG59O1xuXG5jb25zdCBERUZBVUxUX0ZPUkNFX0tJTExfVElNRU9VVCA9IDEwMDAgKiA1O1xuXG4vLyBNb25rZXktcGF0Y2hlcyBgc3VicHJvY2Vzcy5raWxsKClgIHRvIGFkZCBgZm9yY2VLaWxsQWZ0ZXJEZWxheWAgYmVoYXZpb3IgYW5kIGAua2lsbChlcnJvcilgXG5leHBvcnQgY29uc3Qgc3VicHJvY2Vzc0tpbGwgPSAoXG5cdHtraWxsLCBvcHRpb25zOiB7Zm9yY2VLaWxsQWZ0ZXJEZWxheSwga2lsbFNpZ25hbH0sIG9uSW50ZXJuYWxFcnJvciwgY29udGV4dCwgY29udHJvbGxlcn0sXG5cdHNpZ25hbE9yRXJyb3IsXG5cdGVycm9yQXJndW1lbnQsXG4pID0+IHtcblx0Y29uc3Qge3NpZ25hbCwgZXJyb3J9ID0gcGFyc2VLaWxsQXJndW1lbnRzKHNpZ25hbE9yRXJyb3IsIGVycm9yQXJndW1lbnQsIGtpbGxTaWduYWwpO1xuXHRlbWl0S2lsbEVycm9yKGVycm9yLCBvbkludGVybmFsRXJyb3IpO1xuXHRjb25zdCBraWxsUmVzdWx0ID0ga2lsbChzaWduYWwpO1xuXHRzZXRLaWxsVGltZW91dCh7XG5cdFx0a2lsbCxcblx0XHRzaWduYWwsXG5cdFx0Zm9yY2VLaWxsQWZ0ZXJEZWxheSxcblx0XHRraWxsU2lnbmFsLFxuXHRcdGtpbGxSZXN1bHQsXG5cdFx0Y29udGV4dCxcblx0XHRjb250cm9sbGVyLFxuXHR9KTtcblx0cmV0dXJuIGtpbGxSZXN1bHQ7XG59O1xuXG5jb25zdCBwYXJzZUtpbGxBcmd1bWVudHMgPSAoc2lnbmFsT3JFcnJvciwgZXJyb3JBcmd1bWVudCwga2lsbFNpZ25hbCkgPT4ge1xuXHRjb25zdCBbc2lnbmFsID0ga2lsbFNpZ25hbCwgZXJyb3JdID0gaXNFcnJvckluc3RhbmNlKHNpZ25hbE9yRXJyb3IpXG5cdFx0PyBbdW5kZWZpbmVkLCBzaWduYWxPckVycm9yXVxuXHRcdDogW3NpZ25hbE9yRXJyb3IsIGVycm9yQXJndW1lbnRdO1xuXG5cdGlmICh0eXBlb2Ygc2lnbmFsICE9PSAnc3RyaW5nJyAmJiAhTnVtYmVyLmlzSW50ZWdlcihzaWduYWwpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYW4gZXJyb3IgaW5zdGFuY2Ugb3IgYSBzaWduYWwgbmFtZSBzdHJpbmcvaW50ZWdlcjogJHtTdHJpbmcoc2lnbmFsKX1gKTtcblx0fVxuXG5cdGlmIChlcnJvciAhPT0gdW5kZWZpbmVkICYmICFpc0Vycm9ySW5zdGFuY2UoZXJyb3IpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIHNlY29uZCBhcmd1bWVudCBpcyBvcHRpb25hbC4gSWYgc3BlY2lmaWVkLCBpdCBtdXN0IGJlIGFuIGVycm9yIGluc3RhbmNlOiAke2Vycm9yfWApO1xuXHR9XG5cblx0cmV0dXJuIHtzaWduYWw6IG5vcm1hbGl6ZVNpZ25hbEFyZ3VtZW50KHNpZ25hbCksIGVycm9yfTtcbn07XG5cbi8vIEZhaWxzIHJpZ2h0IGF3YXkgd2hlbiBjYWxsaW5nIGBzdWJwcm9jZXNzLmtpbGwoZXJyb3IpYC5cbi8vIERvZXMgbm90IHdhaXQgZm9yIGFjdHVhbCBzaWduYWwgdGVybWluYXRpb24uXG4vLyBVc2VzIGEgZGVmZXJyZWQgcHJvbWlzZSBpbnN0ZWFkIG9mIHRoZSBgZXJyb3JgIGV2ZW50IG9uIHRoZSBzdWJwcm9jZXNzLCBhcyB0aGlzIGlzIGxlc3MgaW50cnVzaXZlLlxuY29uc3QgZW1pdEtpbGxFcnJvciA9IChlcnJvciwgb25JbnRlcm5hbEVycm9yKSA9PiB7XG5cdGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b25JbnRlcm5hbEVycm9yLnJlamVjdChlcnJvcik7XG5cdH1cbn07XG5cbmNvbnN0IHNldEtpbGxUaW1lb3V0ID0gYXN5bmMgKHtraWxsLCBzaWduYWwsIGZvcmNlS2lsbEFmdGVyRGVsYXksIGtpbGxTaWduYWwsIGtpbGxSZXN1bHQsIGNvbnRleHQsIGNvbnRyb2xsZXJ9KSA9PiB7XG5cdGlmIChzaWduYWwgPT09IGtpbGxTaWduYWwgJiYga2lsbFJlc3VsdCkge1xuXHRcdGtpbGxPblRpbWVvdXQoe1xuXHRcdFx0a2lsbCxcblx0XHRcdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdFx0XHRjb250ZXh0LFxuXHRcdFx0Y29udHJvbGxlclNpZ25hbDogY29udHJvbGxlci5zaWduYWwsXG5cdFx0fSk7XG5cdH1cbn07XG5cbi8vIEZvcmNlZnVsbHkgdGVybWluYXRlIGEgc3VicHJvY2VzcyBhZnRlciBhIHRpbWVvdXRcbmV4cG9ydCBjb25zdCBraWxsT25UaW1lb3V0ID0gYXN5bmMgKHtraWxsLCBmb3JjZUtpbGxBZnRlckRlbGF5LCBjb250ZXh0LCBjb250cm9sbGVyU2lnbmFsfSkgPT4ge1xuXHRpZiAoZm9yY2VLaWxsQWZ0ZXJEZWxheSA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGF3YWl0IHNldFRpbWVvdXQoZm9yY2VLaWxsQWZ0ZXJEZWxheSwgdW5kZWZpbmVkLCB7c2lnbmFsOiBjb250cm9sbGVyU2lnbmFsfSk7XG5cdFx0aWYgKGtpbGwoJ1NJR0tJTEwnKSkge1xuXHRcdFx0Y29udGV4dC5pc0ZvcmNlZnVsbHlUZXJtaW5hdGVkID8/PSB0cnVlO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxufTtcbiIsICJpbXBvcnQge29uY2V9IGZyb20gJ25vZGU6ZXZlbnRzJztcblxuLy8gQ29tYmluZXMgYHV0aWwuYWJvcnRlZCgpYCBhbmQgYGV2ZW50cy5hZGRBYm9ydExpc3RlbmVyKClgOiBwcm9taXNlLWJhc2VkIGFuZCBjbGVhbmVkIHVwIHdpdGggYSBzdG9wIHNpZ25hbFxuZXhwb3J0IGNvbnN0IG9uQWJvcnRlZFNpZ25hbCA9IGFzeW5jIChtYWluU2lnbmFsLCBzdG9wU2lnbmFsKSA9PiB7XG5cdGlmICghbWFpblNpZ25hbC5hYm9ydGVkKSB7XG5cdFx0YXdhaXQgb25jZShtYWluU2lnbmFsLCAnYWJvcnQnLCB7c2lnbmFsOiBzdG9wU2lnbmFsfSk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHtvbkFib3J0ZWRTaWduYWx9IGZyb20gJy4uL3V0aWxzL2Fib3J0LXNpZ25hbC5qcyc7XG5cbi8vIFZhbGlkYXRlIHRoZSBgY2FuY2VsU2lnbmFsYCBvcHRpb25cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUNhbmNlbFNpZ25hbCA9ICh7Y2FuY2VsU2lnbmFsfSkgPT4ge1xuXHRpZiAoY2FuY2VsU2lnbmFsICE9PSB1bmRlZmluZWQgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNhbmNlbFNpZ25hbCkgIT09ICdbb2JqZWN0IEFib3J0U2lnbmFsXScpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYFRoZSBcXGBjYW5jZWxTaWduYWxcXGAgb3B0aW9uIG11c3QgYmUgYW4gQWJvcnRTaWduYWw6ICR7U3RyaW5nKGNhbmNlbFNpZ25hbCl9YCk7XG5cdH1cbn07XG5cbi8vIFRlcm1pbmF0ZSB0aGUgc3VicHJvY2VzcyB3aGVuIGFib3J0aW5nIHRoZSBgY2FuY2VsU2lnbmFsYCBvcHRpb24gYW5kIGBncmFjZWZ1bFNpZ25hbGAgaXMgYGZhbHNlYFxuZXhwb3J0IGNvbnN0IHRocm93T25DYW5jZWwgPSAoe3N1YnByb2Nlc3MsIGNhbmNlbFNpZ25hbCwgZ3JhY2VmdWxDYW5jZWwsIGNvbnRleHQsIGNvbnRyb2xsZXJ9KSA9PiBjYW5jZWxTaWduYWwgPT09IHVuZGVmaW5lZCB8fCBncmFjZWZ1bENhbmNlbFxuXHQ/IFtdXG5cdDogW3Rlcm1pbmF0ZU9uQ2FuY2VsKHN1YnByb2Nlc3MsIGNhbmNlbFNpZ25hbCwgY29udGV4dCwgY29udHJvbGxlcildO1xuXG5jb25zdCB0ZXJtaW5hdGVPbkNhbmNlbCA9IGFzeW5jIChzdWJwcm9jZXNzLCBjYW5jZWxTaWduYWwsIGNvbnRleHQsIHtzaWduYWx9KSA9PiB7XG5cdGF3YWl0IG9uQWJvcnRlZFNpZ25hbChjYW5jZWxTaWduYWwsIHNpZ25hbCk7XG5cdGNvbnRleHQudGVybWluYXRpb25SZWFzb24gPz89ICdjYW5jZWwnO1xuXHRzdWJwcm9jZXNzLmtpbGwoKTtcblx0dGhyb3cgY2FuY2VsU2lnbmFsLnJlYXNvbjtcbn07XG4iLCAiLy8gVmFsaWRhdGUgdGhlIElQQyBjaGFubmVsIGlzIGNvbm5lY3RlZCBiZWZvcmUgcmVjZWl2aW5nL3NlbmRpbmcgbWVzc2FnZXNcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUlwY01ldGhvZCA9ICh7bWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzLCBpcGMsIGlzQ29ubmVjdGVkfSkgPT4ge1xuXHR2YWxpZGF0ZUlwY09wdGlvbihtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MsIGlwYyk7XG5cdHZhbGlkYXRlQ29ubmVjdGlvbihtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MsIGlzQ29ubmVjdGVkKTtcbn07XG5cbi8vIEJldHRlciBlcnJvciBtZXNzYWdlIHdoZW4gZm9yZ2V0dGluZyB0byBzZXQgYGlwYzogdHJ1ZWAgYW5kIHVzaW5nIHRoZSBJUEMgbWV0aG9kc1xuY29uc3QgdmFsaWRhdGVJcGNPcHRpb24gPSAobWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzLCBpcGMpID0+IHtcblx0aWYgKCFpcGMpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7Z2V0TWV0aG9kTmFtZShtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MpfSBjYW4gb25seSBiZSB1c2VkIGlmIHRoZSBcXGBpcGNcXGAgb3B0aW9uIGlzIFxcYHRydWVcXGAuYCk7XG5cdH1cbn07XG5cbi8vIEJldHRlciBlcnJvciBtZXNzYWdlIHdoZW4gb25lIHByb2Nlc3MgZG9lcyBub3Qgc2VuZC9yZWNlaXZlIG1lc3NhZ2VzIG9uY2UgdGhlIG90aGVyIHByb2Nlc3MgaGFzIGRpc2Nvbm5lY3RlZC5cbi8vIFRoaXMgYWxzbyBtYWtlcyBpdCBjbGVhciB0aGF0IGFueSBidWZmZXJlZCBtZXNzYWdlcyBhcmUgbG9zdCBvbmNlIGVpdGhlciBwcm9jZXNzIGhhcyBkaXNjb25uZWN0ZWQuXG4vLyBBbHNvIHdoZW4gYWJvcnRpbmcgYGNhbmNlbFNpZ25hbGAgYWZ0ZXIgZGlzY29ubmVjdGluZyB0aGUgSVBDLlxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlQ29ubmVjdGlvbiA9IChtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MsIGlzQ29ubmVjdGVkKSA9PiB7XG5cdGlmICghaXNDb25uZWN0ZWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7Z2V0TWV0aG9kTmFtZShtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MpfSBjYW5ub3QgYmUgdXNlZDogdGhlICR7Z2V0T3RoZXJQcm9jZXNzTmFtZShpc1N1YnByb2Nlc3MpfSBoYXMgYWxyZWFkeSBleGl0ZWQgb3IgZGlzY29ubmVjdGVkLmApO1xuXHR9XG59O1xuXG4vLyBXaGVuIGBnZXRPbmVNZXNzYWdlKClgIGNvdWxkIG5vdCBjb21wbGV0ZSBkdWUgdG8gYW4gZWFybHkgZGlzY29ubmVjdGlvblxuZXhwb3J0IGNvbnN0IHRocm93T25FYXJseURpc2Nvbm5lY3QgPSBpc1N1YnByb2Nlc3MgPT4ge1xuXHR0aHJvdyBuZXcgRXJyb3IoYCR7Z2V0TWV0aG9kTmFtZSgnZ2V0T25lTWVzc2FnZScsIGlzU3VicHJvY2Vzcyl9IGNvdWxkIG5vdCBjb21wbGV0ZTogdGhlICR7Z2V0T3RoZXJQcm9jZXNzTmFtZShpc1N1YnByb2Nlc3MpfSBleGl0ZWQgb3IgZGlzY29ubmVjdGVkLmApO1xufTtcblxuLy8gV2hlbiBib3RoIHByb2Nlc3NlcyB1c2UgYHNlbmRNZXNzYWdlKClgIHdpdGggYHN0cmljdGAgYXQgdGhlIHNhbWUgdGltZVxuZXhwb3J0IGNvbnN0IHRocm93T25TdHJpY3REZWFkbG9ja0Vycm9yID0gaXNTdWJwcm9jZXNzID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKGAke2dldE1ldGhvZE5hbWUoJ3NlbmRNZXNzYWdlJywgaXNTdWJwcm9jZXNzKX0gZmFpbGVkOiB0aGUgJHtnZXRPdGhlclByb2Nlc3NOYW1lKGlzU3VicHJvY2Vzcyl9IGlzIHNlbmRpbmcgYSBtZXNzYWdlIHRvbywgaW5zdGVhZCBvZiBsaXN0ZW5pbmcgdG8gaW5jb21pbmcgbWVzc2FnZXMuXG5UaGlzIGNhbiBiZSBmaXhlZCBieSBib3RoIHNlbmRpbmcgYSBtZXNzYWdlIGFuZCBsaXN0ZW5pbmcgdG8gaW5jb21pbmcgbWVzc2FnZXMgYXQgdGhlIHNhbWUgdGltZTpcblxuY29uc3QgW3JlY2VpdmVkTWVzc2FnZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG5cdCR7Z2V0TWV0aG9kTmFtZSgnZ2V0T25lTWVzc2FnZScsIGlzU3VicHJvY2Vzcyl9LFxuXHQke2dldE1ldGhvZE5hbWUoJ3NlbmRNZXNzYWdlJywgaXNTdWJwcm9jZXNzLCAnbWVzc2FnZSwge3N0cmljdDogdHJ1ZX0nKX0sXG5dKTtgKTtcbn07XG5cbi8vIFdoZW4gdGhlIG90aGVyIHByb2Nlc3MgdXNlZCBgc3RyaWN0YCBidXQgdGhlIGN1cnJlbnQgcHJvY2VzcyBoYWQgSS9PIGVycm9yIGNhbGxpbmcgYHNlbmRNZXNzYWdlKClgIGZvciB0aGUgcmVzcG9uc2VcbmV4cG9ydCBjb25zdCBnZXRTdHJpY3RSZXNwb25zZUVycm9yID0gKGVycm9yLCBpc1N1YnByb2Nlc3MpID0+IG5ldyBFcnJvcihgJHtnZXRNZXRob2ROYW1lKCdzZW5kTWVzc2FnZScsIGlzU3VicHJvY2Vzcyl9IGZhaWxlZCB3aGVuIHNlbmRpbmcgYW4gYWNrbm93bGVkZ21lbnQgcmVzcG9uc2UgdG8gdGhlICR7Z2V0T3RoZXJQcm9jZXNzTmFtZShpc1N1YnByb2Nlc3MpfS5gLCB7Y2F1c2U6IGVycm9yfSk7XG5cbi8vIFdoZW4gdXNpbmcgYHN0cmljdGAgYnV0IHRoZSBvdGhlciBwcm9jZXNzIHdhcyBub3QgbGlzdGVuaW5nIGZvciBtZXNzYWdlc1xuZXhwb3J0IGNvbnN0IHRocm93T25NaXNzaW5nU3RyaWN0ID0gaXNTdWJwcm9jZXNzID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKGAke2dldE1ldGhvZE5hbWUoJ3NlbmRNZXNzYWdlJywgaXNTdWJwcm9jZXNzKX0gZmFpbGVkOiB0aGUgJHtnZXRPdGhlclByb2Nlc3NOYW1lKGlzU3VicHJvY2Vzcyl9IGlzIG5vdCBsaXN0ZW5pbmcgdG8gaW5jb21pbmcgbWVzc2FnZXMuYCk7XG59O1xuXG4vLyBXaGVuIHVzaW5nIGBzdHJpY3RgIGJ1dCB0aGUgb3RoZXIgcHJvY2VzcyBkaXNjb25uZWN0ZWQgYmVmb3JlIHJlY2VpdmluZyB0aGUgbWVzc2FnZVxuZXhwb3J0IGNvbnN0IHRocm93T25TdHJpY3REaXNjb25uZWN0ID0gaXNTdWJwcm9jZXNzID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKGAke2dldE1ldGhvZE5hbWUoJ3NlbmRNZXNzYWdlJywgaXNTdWJwcm9jZXNzKX0gZmFpbGVkOiB0aGUgJHtnZXRPdGhlclByb2Nlc3NOYW1lKGlzU3VicHJvY2Vzcyl9IGV4aXRlZCB3aXRob3V0IGxpc3RlbmluZyB0byBpbmNvbWluZyBtZXNzYWdlcy5gKTtcbn07XG5cbi8vIFdoZW4gdGhlIGN1cnJlbnQgcHJvY2VzcyBkaXNjb25uZWN0cyB3aGlsZSB0aGUgc3VicHJvY2VzcyBpcyBsaXN0ZW5pbmcgdG8gYGNhbmNlbFNpZ25hbGBcbmV4cG9ydCBjb25zdCBnZXRBYm9ydERpc2Nvbm5lY3RFcnJvciA9ICgpID0+IG5ldyBFcnJvcihgXFxgY2FuY2VsU2lnbmFsXFxgIGFib3J0ZWQ6IHRoZSAke2dldE90aGVyUHJvY2Vzc05hbWUodHJ1ZSl9IGRpc2Nvbm5lY3RlZC5gKTtcblxuLy8gV2hlbiB0aGUgc3VicHJvY2VzcyB1c2VzIGBjYW5jZWxTaWduYWxgIGJ1dCBub3QgdGhlIGN1cnJlbnQgcHJvY2Vzc1xuZXhwb3J0IGNvbnN0IHRocm93T25NaXNzaW5nUGFyZW50ID0gKCkgPT4ge1xuXHR0aHJvdyBuZXcgRXJyb3IoJ2BnZXRDYW5jZWxTaWduYWwoKWAgY2Fubm90IGJlIHVzZWQgd2l0aG91dCBzZXR0aW5nIHRoZSBgY2FuY2VsU2lnbmFsYCBzdWJwcm9jZXNzIG9wdGlvbi4nKTtcbn07XG5cbi8vIEVQSVBFIGNhbiBoYXBwZW4gd2hlbiBzZW5kaW5nIGEgbWVzc2FnZSB0byBhIHN1YnByb2Nlc3MgdGhhdCBpcyBjbG9zaW5nIGJ1dCBoYXMgbm90IGRpc2Nvbm5lY3RlZCB5ZXRcbmV4cG9ydCBjb25zdCBoYW5kbGVFcGlwZUVycm9yID0gKHtlcnJvciwgbWV0aG9kTmFtZSwgaXNTdWJwcm9jZXNzfSkgPT4ge1xuXHRpZiAoZXJyb3IuY29kZSA9PT0gJ0VQSVBFJykge1xuXHRcdHRocm93IG5ldyBFcnJvcihgJHtnZXRNZXRob2ROYW1lKG1ldGhvZE5hbWUsIGlzU3VicHJvY2Vzcyl9IGNhbm5vdCBiZSB1c2VkOiB0aGUgJHtnZXRPdGhlclByb2Nlc3NOYW1lKGlzU3VicHJvY2Vzcyl9IGlzIGRpc2Nvbm5lY3RpbmcuYCwge2NhdXNlOiBlcnJvcn0pO1xuXHR9XG59O1xuXG4vLyBCZXR0ZXIgZXJyb3IgbWVzc2FnZSB3aGVuIHNlbmRpbmcgbWVzc2FnZXMgd2hpY2ggY2Fubm90IGJlIHNlcmlhbGl6ZWQuXG4vLyBXb3JrcyB3aXRoIGJvdGggYHNlcmlhbGl6YXRpb246ICdhZHZhbmNlZCdgIGFuZCBgc2VyaWFsaXphdGlvbjogJ2pzb24nYC5cbmV4cG9ydCBjb25zdCBoYW5kbGVTZXJpYWxpemF0aW9uRXJyb3IgPSAoe2Vycm9yLCBtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MsIG1lc3NhZ2V9KSA9PiB7XG5cdGlmIChpc1NlcmlhbGl6YXRpb25FcnJvcihlcnJvcikpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7Z2V0TWV0aG9kTmFtZShtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MpfSdzIGFyZ3VtZW50IHR5cGUgaXMgaW52YWxpZDogdGhlIG1lc3NhZ2UgY2Fubm90IGJlIHNlcmlhbGl6ZWQ6ICR7U3RyaW5nKG1lc3NhZ2UpfS5gLCB7Y2F1c2U6IGVycm9yfSk7XG5cdH1cbn07XG5cbmNvbnN0IGlzU2VyaWFsaXphdGlvbkVycm9yID0gKHtjb2RlLCBtZXNzYWdlfSkgPT4gU0VSSUFMSVpBVElPTl9FUlJPUl9DT0RFUy5oYXMoY29kZSlcblx0fHwgU0VSSUFMSVpBVElPTl9FUlJPUl9NRVNTQUdFUy5zb21lKHNlcmlhbGl6YXRpb25FcnJvck1lc3NhZ2UgPT4gbWVzc2FnZS5pbmNsdWRlcyhzZXJpYWxpemF0aW9uRXJyb3JNZXNzYWdlKSk7XG5cbi8vIGBlcnJvci5jb2RlYCBzZXQgYnkgTm9kZS5qcyB3aGVuIGl0IGZhaWxlZCB0byBzZXJpYWxpemUgdGhlIG1lc3NhZ2VcbmNvbnN0IFNFUklBTElaQVRJT05fRVJST1JfQ09ERVMgPSBuZXcgU2V0KFtcblx0Ly8gTWVzc2FnZSBpcyBgdW5kZWZpbmVkYFxuXHQnRVJSX01JU1NJTkdfQVJHUycsXG5cdC8vIE1lc3NhZ2UgaXMgYSBmdW5jdGlvbiwgYSBiaWdpbnQsIGEgc3ltYm9sXG5cdCdFUlJfSU5WQUxJRF9BUkdfVFlQRScsXG5dKTtcblxuLy8gYGVycm9yLm1lc3NhZ2VgIHNldCBieSBOb2RlLmpzIHdoZW4gaXQgZmFpbGVkIHRvIHNlcmlhbGl6ZSB0aGUgbWVzc2FnZVxuY29uc3QgU0VSSUFMSVpBVElPTl9FUlJPUl9NRVNTQUdFUyA9IFtcblx0Ly8gTWVzc2FnZSBpcyBhIHByb21pc2Ugb3IgYSBwcm94eSwgd2l0aCBgc2VyaWFsaXphdGlvbjogJ2FkdmFuY2VkJ2Bcblx0J2NvdWxkIG5vdCBiZSBjbG9uZWQnLFxuXHQvLyBNZXNzYWdlIGhhcyBjeWNsZXMsIHdpdGggYHNlcmlhbGl6YXRpb246ICdqc29uJ2Bcblx0J2NpcmN1bGFyIHN0cnVjdHVyZScsXG5cdC8vIE1lc3NhZ2UgaGFzIGN5Y2xlcyBpbnNpZGUgdG9KU09OKCksIHdpdGggYHNlcmlhbGl6YXRpb246ICdqc29uJ2Bcblx0J2NhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZCcsXG5dO1xuXG5jb25zdCBnZXRNZXRob2ROYW1lID0gKG1ldGhvZE5hbWUsIGlzU3VicHJvY2VzcywgcGFyYW1ldGVycyA9ICcnKSA9PiBtZXRob2ROYW1lID09PSAnY2FuY2VsU2lnbmFsJ1xuXHQ/ICdgY2FuY2VsU2lnbmFsYFxcJ3MgYGNvbnRyb2xsZXIuYWJvcnQoKWAnXG5cdDogYCR7Z2V0TmFtZXNwYWNlTmFtZShpc1N1YnByb2Nlc3MpfSR7bWV0aG9kTmFtZX0oJHtwYXJhbWV0ZXJzfSlgO1xuXG5jb25zdCBnZXROYW1lc3BhY2VOYW1lID0gaXNTdWJwcm9jZXNzID0+IGlzU3VicHJvY2VzcyA/ICcnIDogJ3N1YnByb2Nlc3MuJztcblxuY29uc3QgZ2V0T3RoZXJQcm9jZXNzTmFtZSA9IGlzU3VicHJvY2VzcyA9PiBpc1N1YnByb2Nlc3MgPyAncGFyZW50IHByb2Nlc3MnIDogJ3N1YnByb2Nlc3MnO1xuXG4vLyBXaGVuIGFueSBlcnJvciBhcmlzZXMsIHdlIGRpc2Nvbm5lY3QgdGhlIElQQy5cbi8vIE90aGVyd2lzZSwgaXQgaXMgbGlrZWx5IHRoYXQgb25lIG9mIHRoZSBwcm9jZXNzZXMgd2lsbCBzdG9wIHNlbmRpbmcvcmVjZWl2aW5nIG1lc3NhZ2VzLlxuLy8gVGhpcyB3b3VsZCBsZWF2ZSB0aGUgb3RoZXIgcHJvY2VzcyBoYW5naW5nLlxuZXhwb3J0IGNvbnN0IGRpc2Nvbm5lY3QgPSBhbnlQcm9jZXNzID0+IHtcblx0aWYgKGFueVByb2Nlc3MuY29ubmVjdGVkKSB7XG5cdFx0YW55UHJvY2Vzcy5kaXNjb25uZWN0KCk7XG5cdH1cbn07XG4iLCAiZXhwb3J0IGNvbnN0IGNyZWF0ZURlZmVycmVkID0gKCkgPT4ge1xuXHRjb25zdCBtZXRob2RzID0ge307XG5cdGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0T2JqZWN0LmFzc2lnbihtZXRob2RzLCB7cmVzb2x2ZSwgcmVqZWN0fSk7XG5cdH0pO1xuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCBtZXRob2RzKTtcbn07XG4iLCAiaW1wb3J0IHtwYXJzZUZkfSBmcm9tICcuL3NwZWNpZmljLmpzJztcblxuLy8gUmV0cmlldmUgc3RyZWFtIHRhcmdldGVkIGJ5IHRoZSBgdG9gIG9wdGlvblxuZXhwb3J0IGNvbnN0IGdldFRvU3RyZWFtID0gKGRlc3RpbmF0aW9uLCB0byA9ICdzdGRpbicpID0+IHtcblx0Y29uc3QgaXNXcml0YWJsZSA9IHRydWU7XG5cdGNvbnN0IHtvcHRpb25zLCBmaWxlRGVzY3JpcHRvcnN9ID0gU1VCUFJPQ0VTU19PUFRJT05TLmdldChkZXN0aW5hdGlvbik7XG5cdGNvbnN0IGZkTnVtYmVyID0gZ2V0RmROdW1iZXIoZmlsZURlc2NyaXB0b3JzLCB0bywgaXNXcml0YWJsZSk7XG5cdGNvbnN0IGRlc3RpbmF0aW9uU3RyZWFtID0gZGVzdGluYXRpb24uc3RkaW9bZmROdW1iZXJdO1xuXG5cdGlmIChkZXN0aW5hdGlvblN0cmVhbSA9PT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoZ2V0SW52YWxpZFN0ZGlvT3B0aW9uTWVzc2FnZShmZE51bWJlciwgdG8sIG9wdGlvbnMsIGlzV3JpdGFibGUpKTtcblx0fVxuXG5cdHJldHVybiBkZXN0aW5hdGlvblN0cmVhbTtcbn07XG5cbi8vIFJldHJpZXZlIHN0cmVhbSB0YXJnZXRlZCBieSB0aGUgYGZyb21gIG9wdGlvblxuZXhwb3J0IGNvbnN0IGdldEZyb21TdHJlYW0gPSAoc291cmNlLCBmcm9tID0gJ3N0ZG91dCcpID0+IHtcblx0Y29uc3QgaXNXcml0YWJsZSA9IGZhbHNlO1xuXHRjb25zdCB7b3B0aW9ucywgZmlsZURlc2NyaXB0b3JzfSA9IFNVQlBST0NFU1NfT1BUSU9OUy5nZXQoc291cmNlKTtcblx0Y29uc3QgZmROdW1iZXIgPSBnZXRGZE51bWJlcihmaWxlRGVzY3JpcHRvcnMsIGZyb20sIGlzV3JpdGFibGUpO1xuXHRjb25zdCBzb3VyY2VTdHJlYW0gPSBmZE51bWJlciA9PT0gJ2FsbCcgPyBzb3VyY2UuYWxsIDogc291cmNlLnN0ZGlvW2ZkTnVtYmVyXTtcblxuXHRpZiAoc291cmNlU3RyZWFtID09PSBudWxsIHx8IHNvdXJjZVN0cmVhbSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihnZXRJbnZhbGlkU3RkaW9PcHRpb25NZXNzYWdlKGZkTnVtYmVyLCBmcm9tLCBvcHRpb25zLCBpc1dyaXRhYmxlKSk7XG5cdH1cblxuXHRyZXR1cm4gc291cmNlU3RyZWFtO1xufTtcblxuLy8gS2VlcHMgdHJhY2sgb2YgdGhlIG9wdGlvbnMgcGFzc2VkIHRvIGVhY2ggRXhlY2EgY2FsbFxuZXhwb3J0IGNvbnN0IFNVQlBST0NFU1NfT1BUSU9OUyA9IG5ldyBXZWFrTWFwKCk7XG5cbmNvbnN0IGdldEZkTnVtYmVyID0gKGZpbGVEZXNjcmlwdG9ycywgZmROYW1lLCBpc1dyaXRhYmxlKSA9PiB7XG5cdGNvbnN0IGZkTnVtYmVyID0gcGFyc2VGZE51bWJlcihmZE5hbWUsIGlzV3JpdGFibGUpO1xuXHR2YWxpZGF0ZUZkTnVtYmVyKGZkTnVtYmVyLCBmZE5hbWUsIGlzV3JpdGFibGUsIGZpbGVEZXNjcmlwdG9ycyk7XG5cdHJldHVybiBmZE51bWJlcjtcbn07XG5cbmNvbnN0IHBhcnNlRmROdW1iZXIgPSAoZmROYW1lLCBpc1dyaXRhYmxlKSA9PiB7XG5cdGNvbnN0IGZkTnVtYmVyID0gcGFyc2VGZChmZE5hbWUpO1xuXHRpZiAoZmROdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBmZE51bWJlcjtcblx0fVxuXG5cdGNvbnN0IHt2YWxpZE9wdGlvbnMsIGRlZmF1bHRWYWx1ZX0gPSBpc1dyaXRhYmxlXG5cdFx0PyB7dmFsaWRPcHRpb25zOiAnXCJzdGRpblwiJywgZGVmYXVsdFZhbHVlOiAnc3RkaW4nfVxuXHRcdDoge3ZhbGlkT3B0aW9uczogJ1wic3Rkb3V0XCIsIFwic3RkZXJyXCIsIFwiYWxsXCInLCBkZWZhdWx0VmFsdWU6ICdzdGRvdXQnfTtcblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgXCIke2dldE9wdGlvbk5hbWUoaXNXcml0YWJsZSl9XCIgbXVzdCBub3QgYmUgXCIke2ZkTmFtZX1cIi5cbkl0IG11c3QgYmUgJHt2YWxpZE9wdGlvbnN9IG9yIFwiZmQzXCIsIFwiZmQ0XCIgKGFuZCBzbyBvbikuXG5JdCBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gXCIke2RlZmF1bHRWYWx1ZX1cIi5gKTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlRmROdW1iZXIgPSAoZmROdW1iZXIsIGZkTmFtZSwgaXNXcml0YWJsZSwgZmlsZURlc2NyaXB0b3JzKSA9PiB7XG5cdGNvbnN0IGZpbGVEZXNjcmlwdG9yID0gZmlsZURlc2NyaXB0b3JzW2dldFVzZWREZXNjcmlwdG9yKGZkTnVtYmVyKV07XG5cdGlmIChmaWxlRGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgXCIke2dldE9wdGlvbk5hbWUoaXNXcml0YWJsZSl9XCIgbXVzdCBub3QgYmUgJHtmZE5hbWV9LiBUaGF0IGZpbGUgZGVzY3JpcHRvciBkb2VzIG5vdCBleGlzdC5cblBsZWFzZSBzZXQgdGhlIFwic3RkaW9cIiBvcHRpb24gdG8gZW5zdXJlIHRoYXQgZmlsZSBkZXNjcmlwdG9yIGV4aXN0cy5gKTtcblx0fVxuXG5cdGlmIChmaWxlRGVzY3JpcHRvci5kaXJlY3Rpb24gPT09ICdpbnB1dCcgJiYgIWlzV3JpdGFibGUpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBcIiR7Z2V0T3B0aW9uTmFtZShpc1dyaXRhYmxlKX1cIiBtdXN0IG5vdCBiZSAke2ZkTmFtZX0uIEl0IG11c3QgYmUgYSByZWFkYWJsZSBzdHJlYW0sIG5vdCB3cml0YWJsZS5gKTtcblx0fVxuXG5cdGlmIChmaWxlRGVzY3JpcHRvci5kaXJlY3Rpb24gIT09ICdpbnB1dCcgJiYgaXNXcml0YWJsZSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFwiJHtnZXRPcHRpb25OYW1lKGlzV3JpdGFibGUpfVwiIG11c3Qgbm90IGJlICR7ZmROYW1lfS4gSXQgbXVzdCBiZSBhIHdyaXRhYmxlIHN0cmVhbSwgbm90IHJlYWRhYmxlLmApO1xuXHR9XG59O1xuXG5jb25zdCBnZXRJbnZhbGlkU3RkaW9PcHRpb25NZXNzYWdlID0gKGZkTnVtYmVyLCBmZE5hbWUsIG9wdGlvbnMsIGlzV3JpdGFibGUpID0+IHtcblx0aWYgKGZkTnVtYmVyID09PSAnYWxsJyAmJiAhb3B0aW9ucy5hbGwpIHtcblx0XHRyZXR1cm4gJ1RoZSBcImFsbFwiIG9wdGlvbiBtdXN0IGJlIHRydWUgdG8gdXNlIFwiZnJvbTogXFwnYWxsXFwnXCIuJztcblx0fVxuXG5cdGNvbnN0IHtvcHRpb25OYW1lLCBvcHRpb25WYWx1ZX0gPSBnZXRJbnZhbGlkU3RkaW9PcHRpb24oZmROdW1iZXIsIG9wdGlvbnMpO1xuXHRyZXR1cm4gYFRoZSBcIiR7b3B0aW9uTmFtZX06ICR7c2VyaWFsaXplT3B0aW9uVmFsdWUob3B0aW9uVmFsdWUpfVwiIG9wdGlvbiBpcyBpbmNvbXBhdGlibGUgd2l0aCB1c2luZyBcIiR7Z2V0T3B0aW9uTmFtZShpc1dyaXRhYmxlKX06ICR7c2VyaWFsaXplT3B0aW9uVmFsdWUoZmROYW1lKX1cIi5cblBsZWFzZSBzZXQgdGhpcyBvcHRpb24gd2l0aCBcInBpcGVcIiBpbnN0ZWFkLmA7XG59O1xuXG5jb25zdCBnZXRJbnZhbGlkU3RkaW9PcHRpb24gPSAoZmROdW1iZXIsIHtzdGRpbiwgc3Rkb3V0LCBzdGRlcnIsIHN0ZGlvfSkgPT4ge1xuXHRjb25zdCB1c2VkRGVzY3JpcHRvciA9IGdldFVzZWREZXNjcmlwdG9yKGZkTnVtYmVyKTtcblxuXHRpZiAodXNlZERlc2NyaXB0b3IgPT09IDAgJiYgc3RkaW4gIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB7b3B0aW9uTmFtZTogJ3N0ZGluJywgb3B0aW9uVmFsdWU6IHN0ZGlufTtcblx0fVxuXG5cdGlmICh1c2VkRGVzY3JpcHRvciA9PT0gMSAmJiBzdGRvdXQgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB7b3B0aW9uTmFtZTogJ3N0ZG91dCcsIG9wdGlvblZhbHVlOiBzdGRvdXR9O1xuXHR9XG5cblx0aWYgKHVzZWREZXNjcmlwdG9yID09PSAyICYmIHN0ZGVyciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHtvcHRpb25OYW1lOiAnc3RkZXJyJywgb3B0aW9uVmFsdWU6IHN0ZGVycn07XG5cdH1cblxuXHRyZXR1cm4ge29wdGlvbk5hbWU6IGBzdGRpb1ske3VzZWREZXNjcmlwdG9yfV1gLCBvcHRpb25WYWx1ZTogc3RkaW9bdXNlZERlc2NyaXB0b3JdfTtcbn07XG5cbmNvbnN0IGdldFVzZWREZXNjcmlwdG9yID0gZmROdW1iZXIgPT4gZmROdW1iZXIgPT09ICdhbGwnID8gMSA6IGZkTnVtYmVyO1xuXG5jb25zdCBnZXRPcHRpb25OYW1lID0gaXNXcml0YWJsZSA9PiBpc1dyaXRhYmxlID8gJ3RvJyA6ICdmcm9tJztcblxuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZU9wdGlvblZhbHVlID0gdmFsdWUgPT4ge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBgJyR7dmFsdWV9J2A7XG5cdH1cblxuXHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IGAke3ZhbHVlfWAgOiAnU3RyZWFtJztcbn07XG4iLCAiaW1wb3J0IHthZGRBYm9ydExpc3RlbmVyfSBmcm9tICdub2RlOmV2ZW50cyc7XG5cbi8vIFRlbXBvcmFyaWx5IGluY3JlYXNlIHRoZSBtYXhpbXVtIG51bWJlciBvZiBsaXN0ZW5lcnMgb24gYW4gZXZlbnRFbWl0dGVyXG5leHBvcnQgY29uc3QgaW5jcmVtZW50TWF4TGlzdGVuZXJzID0gKGV2ZW50RW1pdHRlciwgbWF4TGlzdGVuZXJzSW5jcmVtZW50LCBzaWduYWwpID0+IHtcblx0Y29uc3QgbWF4TGlzdGVuZXJzID0gZXZlbnRFbWl0dGVyLmdldE1heExpc3RlbmVycygpO1xuXHRpZiAobWF4TGlzdGVuZXJzID09PSAwIHx8IG1heExpc3RlbmVycyA9PT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZXZlbnRFbWl0dGVyLnNldE1heExpc3RlbmVycyhtYXhMaXN0ZW5lcnMgKyBtYXhMaXN0ZW5lcnNJbmNyZW1lbnQpO1xuXHRhZGRBYm9ydExpc3RlbmVyKHNpZ25hbCwgKCkgPT4ge1xuXHRcdGV2ZW50RW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoZXZlbnRFbWl0dGVyLmdldE1heExpc3RlbmVycygpIC0gbWF4TGlzdGVuZXJzSW5jcmVtZW50KTtcblx0fSk7XG59O1xuIiwgIi8vIEJ5IGRlZmF1bHQsIE5vZGUuanMga2VlcHMgdGhlIHN1YnByb2Nlc3MgYWxpdmUgd2hpbGUgaXQgaGFzIGEgYG1lc3NhZ2VgIG9yIGBkaXNjb25uZWN0YCBsaXN0ZW5lci5cbi8vIFdlIHJlcGxpY2F0ZSB0aGUgc2FtZSBsb2dpYyBmb3IgdGhlIGV2ZW50cyB0aGF0IHdlIHByb3h5LlxuLy8gVGhpcyBlbnN1cmVzIHRoZSBzdWJwcm9jZXNzIGlzIGtlcHQgYWxpdmUgd2hpbGUgYGdldE9uZU1lc3NhZ2UoKWAgYW5kIGBnZXRFYWNoTWVzc2FnZSgpYCBhcmUgb25nb2luZy5cbi8vIFRoaXMgaXMgbm90IGEgcHJvYmxlbSB3aXRoIGBzZW5kTWVzc2FnZSgpYCBzaW5jZSBOb2RlLmpzIGhhbmRsZXMgdGhhdCBtZXRob2QgYXV0b21hdGljYWxseS5cbi8vIFdlIGRvIG5vdCB1c2UgYGFueVByb2Nlc3MuY2hhbm5lbC5yZWYoKWAgc2luY2UgdGhpcyB3b3VsZCBwcmV2ZW50IHRoZSBhdXRvbWF0aWMgYC5jaGFubmVsLnJlZkNvdW50ZWQoKWAgTm9kZS5qcyBpcyBkb2luZy5cbi8vIFdlIGtlZXAgYSByZWZlcmVuY2UgdG8gYGFueVByb2Nlc3MuY2hhbm5lbGAgc2luY2UgaXQgbWlnaHQgYmUgYG51bGxgIHdoaWxlIGBnZXRPbmVNZXNzYWdlKClgIG9yIGBnZXRFYWNoTWVzc2FnZSgpYCBpcyBzdGlsbCBwcm9jZXNzaW5nIGRlYm91bmNlZCBtZXNzYWdlcy5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi8yYWFlYWE4NjNjMzViZWZhMmViYWE5OGZiNzczN2VjODRkZjRkOGU5L2xpYi9pbnRlcm5hbC9jaGlsZF9wcm9jZXNzLmpzI0w1NDdcbmV4cG9ydCBjb25zdCBhZGRSZWZlcmVuY2UgPSAoY2hhbm5lbCwgcmVmZXJlbmNlKSA9PiB7XG5cdGlmIChyZWZlcmVuY2UpIHtcblx0XHRhZGRSZWZlcmVuY2VDb3VudChjaGFubmVsKTtcblx0fVxufTtcblxuY29uc3QgYWRkUmVmZXJlbmNlQ291bnQgPSBjaGFubmVsID0+IHtcblx0Y2hhbm5lbC5yZWZDb3VudGVkKCk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlUmVmZXJlbmNlID0gKGNoYW5uZWwsIHJlZmVyZW5jZSkgPT4ge1xuXHRpZiAocmVmZXJlbmNlKSB7XG5cdFx0cmVtb3ZlUmVmZXJlbmNlQ291bnQoY2hhbm5lbCk7XG5cdH1cbn07XG5cbmNvbnN0IHJlbW92ZVJlZmVyZW5jZUNvdW50ID0gY2hhbm5lbCA9PiB7XG5cdGNoYW5uZWwudW5yZWZDb3VudGVkKCk7XG59O1xuXG4vLyBUbyBwcm94eSBldmVudHMsIHdlIHNldHVwIHNvbWUgZ2xvYmFsIGxpc3RlbmVycyBvbiB0aGUgYG1lc3NhZ2VgIGFuZCBgZGlzY29ubmVjdGAgZXZlbnRzLlxuLy8gVGhvc2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBzdWJwcm9jZXNzIGFsaXZlLCBzbyB3ZSByZW1vdmUgdGhlIGF1dG9tYXRpYyBjb3VudGluZyB0aGF0IE5vZGUuanMgaXMgZG9pbmcuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvMWI5NjUyNzBhOWMyNzNkNGNmNzBlODgwOGU5ZDI4YjlhZGE3ODQ0Zi9saWIvY2hpbGRfcHJvY2Vzcy5qcyNMMTgwXG5leHBvcnQgY29uc3QgdW5kb0FkZGVkUmVmZXJlbmNlcyA9IChjaGFubmVsLCBpc1N1YnByb2Nlc3MpID0+IHtcblx0aWYgKGlzU3VicHJvY2Vzcykge1xuXHRcdHJlbW92ZVJlZmVyZW5jZUNvdW50KGNoYW5uZWwpO1xuXHRcdHJlbW92ZVJlZmVyZW5jZUNvdW50KGNoYW5uZWwpO1xuXHR9XG59O1xuXG4vLyBSZXZlcnNlIGl0IGR1cmluZyBgZGlzY29ubmVjdGBcbmV4cG9ydCBjb25zdCByZWRvQWRkZWRSZWZlcmVuY2VzID0gKGNoYW5uZWwsIGlzU3VicHJvY2VzcykgPT4ge1xuXHRpZiAoaXNTdWJwcm9jZXNzKSB7XG5cdFx0YWRkUmVmZXJlbmNlQ291bnQoY2hhbm5lbCk7XG5cdFx0YWRkUmVmZXJlbmNlQ291bnQoY2hhbm5lbCk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHtvbmNlfSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge3NjaGVkdWxlcn0gZnJvbSAnbm9kZTp0aW1lcnMvcHJvbWlzZXMnO1xuaW1wb3J0IHt3YWl0Rm9yT3V0Z29pbmdNZXNzYWdlc30gZnJvbSAnLi9vdXRnb2luZy5qcyc7XG5pbXBvcnQge3JlZG9BZGRlZFJlZmVyZW5jZXN9IGZyb20gJy4vcmVmZXJlbmNlLmpzJztcbmltcG9ydCB7aGFuZGxlU3RyaWN0UmVxdWVzdCwgaGFuZGxlU3RyaWN0UmVzcG9uc2V9IGZyb20gJy4vc3RyaWN0LmpzJztcbmltcG9ydCB7aGFuZGxlQWJvcnQsIGFib3J0T25EaXNjb25uZWN0fSBmcm9tICcuL2dyYWNlZnVsLmpzJztcblxuLy8gQnkgZGVmYXVsdCwgTm9kZS5qcyBidWZmZXJzIGBtZXNzYWdlYCBldmVudHMuXG4vLyAgLSBCdWZmZXJpbmcgaGFwcGVucyB3aGVuIHRoZXJlIGlzIGEgYG1lc3NhZ2VgIGV2ZW50IGlzIGVtaXR0ZWQgYnV0IHRoZXJlIGlzIG5vIGhhbmRsZXIuXG4vLyAgLSBBcyBzb29uIGFzIGEgYG1lc3NhZ2VgIGV2ZW50IGhhbmRsZXIgaXMgc2V0LCBhbGwgYnVmZmVyZWQgYG1lc3NhZ2VgIGV2ZW50cyBhcmUgZW1pdHRlZCwgZW1wdHlpbmcgdGhlIGJ1ZmZlci5cbi8vICAtIFRoaXMgaGFwcGVucyBib3RoIGluIHRoZSBjdXJyZW50IHByb2Nlc3MgYW5kIHRoZSBzdWJwcm9jZXNzLlxuLy8gIC0gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iLzUwMTU0NmU4ZjM3MDU5Y2Q1NzcwNDFlMjM5NDFiNjQwZDBkNGQ0MDYvbGliL2ludGVybmFsL2NoaWxkX3Byb2Nlc3MuanMjTDcxOVxuLy8gVGhpcyBpcyBoZWxwZnVsLiBOb3RhYmx5LCB0aGlzIGFsbG93cyBzZW5kaW5nIG1lc3NhZ2VzIHRvIGEgc3VicHJvY2VzcyB0aGF0J3Mgc3RpbGwgaW5pdGlhbGl6aW5nLlxuLy8gSG93ZXZlciwgaXQgaGFzIHNldmVyYWwgcHJvYmxlbXMuXG4vLyAgLSBUaGlzIHdvcmtzIHdpdGggYGV2ZW50cy5vbigpYCBidXQgbm90IGBldmVudHMub25jZSgpYCBzaW5jZSBhbGwgYnVmZmVyZWQgbWVzc2FnZXMgYXJlIGVtaXR0ZWQgYXQgb25jZS5cbi8vICAgIEZvciBleGFtcGxlLCB1c2VycyBjYW5ub3QgY2FsbCBgYXdhaXQgZ2V0T25lTWVzc2FnZSgpYC9gZ2V0RWFjaE1lc3NhZ2UoKWAgbXVsdGlwbGUgdGltZXMgaW4gYSByb3cuXG4vLyAgLSBXaGVuIGEgdXNlciBpbnRlbnRpb25hbGx5IHN0YXJ0cyBsaXN0ZW5pbmcgdG8gYG1lc3NhZ2VgIGF0IGEgc3BlY2lmaWMgcG9pbnQgaW4gdGltZSwgcGFzdCBgbWVzc2FnZWAgZXZlbnRzIGFyZSByZXBsYXllZCwgd2hpY2ggbWlnaHQgYmUgdW5leHBlY3RlZC5cbi8vICAtIEJ1ZmZlcmluZyBpcyB1bmxpbWl0ZWQsIHdoaWNoIG1pZ2h0IGxlYWQgdG8gYW4gb3V0LW9mLW1lbW9yeSBjcmFzaC5cbi8vICAtIFRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggbXVsdGlwbGUgY29uc3VtZXJzLlxuLy8gICAgRm9yIGV4YW1wbGUsIEV4ZWNhIGNvbnN1bWVzIGV2ZW50cyB3aXRoIGJvdGggYHJlc3VsdC5pcGNPdXRwdXRgIGFuZCBtYW51YWwgSVBDIGNhbGxzIGxpa2UgYGdldE9uZU1lc3NhZ2UoKWAuXG4vLyAgICBTaW5jZSBgcmVzdWx0LmlwY091dHB1dGAgcmVhZHMgYWxsIGluY29taW5nIG1lc3NhZ2VzLCBubyBidWZmZXJpbmcgaGFwcGVucyBmb3IgbWFudWFsIElQQyBjYWxscy5cbi8vICAtIEZvcmdldHRpbmcgdG8gc2V0dXAgYSBgbWVzc2FnZWAgbGlzdGVuZXIsIG9yIHNldHRpbmcgaXQgdXAgdG9vIGxhdGUsIGlzIGEgcHJvZ3JhbW1pbmcgbWlzdGFrZS5cbi8vICAgIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGRvZXMgbm90IGFsbG93IHVzZXJzIHRvIHJlYWxpemUgdGhleSBtYWRlIHRoYXQgbWlzdGFrZS5cbi8vIFRvIHNvbHZlIHRob3NlIHByb2JsZW1zLCBpbnN0ZWFkIG9mIGJ1ZmZlcmluZyBtZXNzYWdlcywgd2UgZGVib3VuY2UgdGhlbS5cbi8vIFRoZSBgbWVzc2FnZWAgZXZlbnQgc28gaXQgaXMgZW1pdHRlZCBhdCBtb3N0IG9uY2UgcGVyIG1hY3JvdGFzay5cbmV4cG9ydCBjb25zdCBvbk1lc3NhZ2UgPSBhc3luYyAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgaXBjRW1pdHRlcn0sIHdyYXBwZWRNZXNzYWdlKSA9PiB7XG5cdGlmIChoYW5kbGVTdHJpY3RSZXNwb25zZSh3cmFwcGVkTWVzc2FnZSkgfHwgaGFuZGxlQWJvcnQod3JhcHBlZE1lc3NhZ2UpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFJTkNPTUlOR19NRVNTQUdFUy5oYXMoYW55UHJvY2VzcykpIHtcblx0XHRJTkNPTUlOR19NRVNTQUdFUy5zZXQoYW55UHJvY2VzcywgW10pO1xuXHR9XG5cblx0Y29uc3QgaW5jb21pbmdNZXNzYWdlcyA9IElOQ09NSU5HX01FU1NBR0VTLmdldChhbnlQcm9jZXNzKTtcblx0aW5jb21pbmdNZXNzYWdlcy5wdXNoKHdyYXBwZWRNZXNzYWdlKTtcblxuXHRpZiAoaW5jb21pbmdNZXNzYWdlcy5sZW5ndGggPiAxKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2hpbGUgKGluY29taW5nTWVzc2FnZXMubGVuZ3RoID4gMCkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG5cdFx0YXdhaXQgd2FpdEZvck91dGdvaW5nTWVzc2FnZXMoYW55UHJvY2VzcywgaXBjRW1pdHRlciwgd3JhcHBlZE1lc3NhZ2UpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG5cdFx0YXdhaXQgc2NoZWR1bGVyLnlpZWxkKCk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuXHRcdGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBoYW5kbGVTdHJpY3RSZXF1ZXN0KHtcblx0XHRcdHdyYXBwZWRNZXNzYWdlOiBpbmNvbWluZ01lc3NhZ2VzWzBdLFxuXHRcdFx0YW55UHJvY2Vzcyxcblx0XHRcdGNoYW5uZWwsXG5cdFx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0XHRpcGNFbWl0dGVyLFxuXHRcdH0pO1xuXG5cdFx0aW5jb21pbmdNZXNzYWdlcy5zaGlmdCgpO1xuXHRcdGlwY0VtaXR0ZXIuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuXHRcdGlwY0VtaXR0ZXIuZW1pdCgnbWVzc2FnZTpkb25lJyk7XG5cdH1cbn07XG5cbi8vIElmIHRoZSBgbWVzc2FnZWAgZXZlbnQgaXMgY3VycmVudGx5IGRlYm91bmNlZCwgdGhlIGBkaXNjb25uZWN0YCBldmVudCBtdXN0IHdhaXQgZm9yIGl0XG5leHBvcnQgY29uc3Qgb25EaXNjb25uZWN0ID0gYXN5bmMgKHthbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MsIGlwY0VtaXR0ZXIsIGJvdW5kT25NZXNzYWdlfSkgPT4ge1xuXHRhYm9ydE9uRGlzY29ubmVjdCgpO1xuXG5cdGNvbnN0IGluY29taW5nTWVzc2FnZXMgPSBJTkNPTUlOR19NRVNTQUdFUy5nZXQoYW55UHJvY2Vzcyk7XG5cdHdoaWxlIChpbmNvbWluZ01lc3NhZ2VzPy5sZW5ndGggPiAwKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3Bcblx0XHRhd2FpdCBvbmNlKGlwY0VtaXR0ZXIsICdtZXNzYWdlOmRvbmUnKTtcblx0fVxuXG5cdGFueVByb2Nlc3MucmVtb3ZlTGlzdGVuZXIoJ21lc3NhZ2UnLCBib3VuZE9uTWVzc2FnZSk7XG5cdHJlZG9BZGRlZFJlZmVyZW5jZXMoY2hhbm5lbCwgaXNTdWJwcm9jZXNzKTtcblx0aXBjRW1pdHRlci5jb25uZWN0ZWQgPSBmYWxzZTtcblx0aXBjRW1pdHRlci5lbWl0KCdkaXNjb25uZWN0Jyk7XG59O1xuXG5jb25zdCBJTkNPTUlOR19NRVNTQUdFUyA9IG5ldyBXZWFrTWFwKCk7XG4iLCAiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ25vZGU6ZXZlbnRzJztcbmltcG9ydCB7b25NZXNzYWdlLCBvbkRpc2Nvbm5lY3R9IGZyb20gJy4vaW5jb21pbmcuanMnO1xuaW1wb3J0IHt1bmRvQWRkZWRSZWZlcmVuY2VzfSBmcm9tICcuL3JlZmVyZW5jZS5qcyc7XG5cbi8vIEZvcndhcmQgdGhlIGBtZXNzYWdlYCBhbmQgYGRpc2Nvbm5lY3RgIGV2ZW50cyBmcm9tIHRoZSBwcm9jZXNzIGFuZCBzdWJwcm9jZXNzIHRvIGEgcHJveHkgZW1pdHRlci5cbi8vIFRoaXMgcHJldmVudHMgdGhlIGBlcnJvcmAgZXZlbnQgZnJvbSBzdG9wcGluZyBJUEMuXG4vLyBUaGlzIGFsc28gYWxsb3dzIGRlYm91bmNpbmcgdGhlIGBtZXNzYWdlYCBldmVudC5cbmV4cG9ydCBjb25zdCBnZXRJcGNFbWl0dGVyID0gKGFueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcykgPT4ge1xuXHRpZiAoSVBDX0VNSVRURVJTLmhhcyhhbnlQcm9jZXNzKSkge1xuXHRcdHJldHVybiBJUENfRU1JVFRFUlMuZ2V0KGFueVByb2Nlc3MpO1xuXHR9XG5cblx0Ly8gVXNlIGFuIGBFdmVudEVtaXR0ZXJgLCBsaWtlIHRoZSBgcHJvY2Vzc2AgdGhhdCBpcyBiZWluZyBwcm94aWVkXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1ldmVudC10YXJnZXRcblx0Y29uc3QgaXBjRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0aXBjRW1pdHRlci5jb25uZWN0ZWQgPSB0cnVlO1xuXHRJUENfRU1JVFRFUlMuc2V0KGFueVByb2Nlc3MsIGlwY0VtaXR0ZXIpO1xuXHRmb3J3YXJkRXZlbnRzKHtcblx0XHRpcGNFbWl0dGVyLFxuXHRcdGFueVByb2Nlc3MsXG5cdFx0Y2hhbm5lbCxcblx0XHRpc1N1YnByb2Nlc3MsXG5cdH0pO1xuXHRyZXR1cm4gaXBjRW1pdHRlcjtcbn07XG5cbmNvbnN0IElQQ19FTUlUVEVSUyA9IG5ldyBXZWFrTWFwKCk7XG5cbi8vIFRoZSBgbWVzc2FnZWAgYW5kIGBkaXNjb25uZWN0YCBldmVudHMgYXJlIGJ1ZmZlcmVkIGluIHRoZSBzdWJwcm9jZXNzIHVudGlsIHRoZSBmaXJzdCBsaXN0ZW5lciBpcyBzZXR1cC5cbi8vIEhvd2V2ZXIsIHVuYnVmZmVyaW5nIGhhcHBlbnMgYWZ0ZXIgb25lIHRpY2ssIHNvIHRoaXMgZ2l2ZSBlbm91Z2ggdGltZSBmb3IgdGhlIGNhbGxlciB0byBzZXR1cCB0aGUgbGlzdGVuZXIgb24gdGhlIHByb3h5IGVtaXR0ZXIgZmlyc3QuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvMmFhZWFhODYzYzM1YmVmYTJlYmFhOThmYjc3MzdlYzg0ZGY0ZDhlOS9saWIvaW50ZXJuYWwvY2hpbGRfcHJvY2Vzcy5qcyNMNzIxXG5jb25zdCBmb3J3YXJkRXZlbnRzID0gKHtpcGNFbWl0dGVyLCBhbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3N9KSA9PiB7XG5cdGNvbnN0IGJvdW5kT25NZXNzYWdlID0gb25NZXNzYWdlLmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0XHRpcGNFbWl0dGVyLFxuXHR9KTtcblx0YW55UHJvY2Vzcy5vbignbWVzc2FnZScsIGJvdW5kT25NZXNzYWdlKTtcblx0YW55UHJvY2Vzcy5vbmNlKCdkaXNjb25uZWN0Jywgb25EaXNjb25uZWN0LmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0XHRpcGNFbWl0dGVyLFxuXHRcdGJvdW5kT25NZXNzYWdlLFxuXHR9KSk7XG5cdHVuZG9BZGRlZFJlZmVyZW5jZXMoY2hhbm5lbCwgaXNTdWJwcm9jZXNzKTtcbn07XG5cbi8vIENoZWNrIHdoZXRoZXIgdGhlcmUgbWlnaHQgc3RpbGwgYmUgc29tZSBgbWVzc2FnZWAgZXZlbnRzIHRvIHJlY2VpdmVcbmV4cG9ydCBjb25zdCBpc0Nvbm5lY3RlZCA9IGFueVByb2Nlc3MgPT4ge1xuXHRjb25zdCBpcGNFbWl0dGVyID0gSVBDX0VNSVRURVJTLmdldChhbnlQcm9jZXNzKTtcblx0cmV0dXJuIGlwY0VtaXR0ZXIgPT09IHVuZGVmaW5lZFxuXHRcdD8gYW55UHJvY2Vzcy5jaGFubmVsICE9PSBudWxsXG5cdFx0OiBpcGNFbWl0dGVyLmNvbm5lY3RlZDtcbn07XG4iLCAiaW1wb3J0IHtvbmNlfSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge2NyZWF0ZURlZmVycmVkfSBmcm9tICcuLi91dGlscy9kZWZlcnJlZC5qcyc7XG5pbXBvcnQge2luY3JlbWVudE1heExpc3RlbmVyc30gZnJvbSAnLi4vdXRpbHMvbWF4LWxpc3RlbmVycy5qcyc7XG5pbXBvcnQge3NlbmRNZXNzYWdlfSBmcm9tICcuL3NlbmQuanMnO1xuaW1wb3J0IHt0aHJvd09uTWlzc2luZ1N0cmljdCwgdGhyb3dPblN0cmljdERpc2Nvbm5lY3QsIHRocm93T25TdHJpY3REZWFkbG9ja0Vycm9yfSBmcm9tICcuL3ZhbGlkYXRpb24uanMnO1xuaW1wb3J0IHtnZXRJcGNFbWl0dGVyfSBmcm9tICcuL2ZvcndhcmQuanMnO1xuaW1wb3J0IHtoYXNNZXNzYWdlTGlzdGVuZXJzfSBmcm9tICcuL291dGdvaW5nLmpzJztcblxuLy8gV2hlbiB1c2luZyB0aGUgYHN0cmljdGAgb3B0aW9uLCB3cmFwIHRoZSBtZXNzYWdlIHdpdGggbWV0YWRhdGEgZHVyaW5nIGBzZW5kTWVzc2FnZSgpYFxuZXhwb3J0IGNvbnN0IGhhbmRsZVNlbmRTdHJpY3QgPSAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgbWVzc2FnZSwgc3RyaWN0fSkgPT4ge1xuXHRpZiAoIXN0cmljdCkge1xuXHRcdHJldHVybiBtZXNzYWdlO1xuXHR9XG5cblx0Y29uc3QgaXBjRW1pdHRlciA9IGdldElwY0VtaXR0ZXIoYW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzKTtcblx0Y29uc3QgaGFzTGlzdGVuZXJzID0gaGFzTWVzc2FnZUxpc3RlbmVycyhhbnlQcm9jZXNzLCBpcGNFbWl0dGVyKTtcblx0cmV0dXJuIHtcblx0XHRpZDogY291bnQrKyxcblx0XHR0eXBlOiBSRVFVRVNUX1RZUEUsXG5cdFx0bWVzc2FnZSxcblx0XHRoYXNMaXN0ZW5lcnMsXG5cdH07XG59O1xuXG5sZXQgY291bnQgPSAwbjtcblxuLy8gSGFuZGxlcyB3aGVuIGJvdGggcHJvY2Vzc2VzIGFyZSBjYWxsaW5nIGBzZW5kTWVzc2FnZSgpYCB3aXRoIGBzdHJpY3RgIGF0IHRoZSBzYW1lIHRpbWUuXG4vLyBJZiBuZWl0aGVyIHByb2Nlc3MgaXMgbGlzdGVuaW5nLCB0aGlzIHdvdWxkIGNyZWF0ZSBhIGRlYWRsb2NrLiBXZSBkZXRlY3QgaXQgYW5kIHRocm93LlxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU3RyaWN0RGVhZGxvY2sgPSAob3V0Z29pbmdNZXNzYWdlcywgd3JhcHBlZE1lc3NhZ2UpID0+IHtcblx0aWYgKHdyYXBwZWRNZXNzYWdlPy50eXBlICE9PSBSRVFVRVNUX1RZUEUgfHwgd3JhcHBlZE1lc3NhZ2UuaGFzTGlzdGVuZXJzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCB7aWR9IG9mIG91dGdvaW5nTWVzc2FnZXMpIHtcblx0XHRpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0U1RSSUNUX1JFU1BPTlNFU1tpZF0ucmVzb2x2ZSh7aXNEZWFkbG9jazogdHJ1ZSwgaGFzTGlzdGVuZXJzOiBmYWxzZX0pO1xuXHRcdH1cblx0fVxufTtcblxuLy8gVGhlIG90aGVyIHByb2Nlc3MgdGhlbiBzZW5kcyB0aGUgYWNrbm93bGVkZ21lbnQgYmFjayBhcyBhIHJlc3BvbnNlXG5leHBvcnQgY29uc3QgaGFuZGxlU3RyaWN0UmVxdWVzdCA9IGFzeW5jICh7d3JhcHBlZE1lc3NhZ2UsIGFueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgaXBjRW1pdHRlcn0pID0+IHtcblx0aWYgKHdyYXBwZWRNZXNzYWdlPy50eXBlICE9PSBSRVFVRVNUX1RZUEUgfHwgIWFueVByb2Nlc3MuY29ubmVjdGVkKSB7XG5cdFx0cmV0dXJuIHdyYXBwZWRNZXNzYWdlO1xuXHR9XG5cblx0Y29uc3Qge2lkLCBtZXNzYWdlfSA9IHdyYXBwZWRNZXNzYWdlO1xuXHRjb25zdCByZXNwb25zZSA9IHtpZCwgdHlwZTogUkVTUE9OU0VfVFlQRSwgbWVzc2FnZTogaGFzTWVzc2FnZUxpc3RlbmVycyhhbnlQcm9jZXNzLCBpcGNFbWl0dGVyKX07XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBzZW5kTWVzc2FnZSh7XG5cdFx0XHRhbnlQcm9jZXNzLFxuXHRcdFx0Y2hhbm5lbCxcblx0XHRcdGlzU3VicHJvY2Vzcyxcblx0XHRcdGlwYzogdHJ1ZSxcblx0XHR9LCByZXNwb25zZSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aXBjRW1pdHRlci5lbWl0KCdzdHJpY3Q6ZXJyb3InLCBlcnJvcik7XG5cdH1cblxuXHRyZXR1cm4gbWVzc2FnZTtcbn07XG5cbi8vIFJlY2VwdGlvbiBvZiB0aGUgYWNrbm93bGVkZ21lbnQgcmVzcG9uc2VcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJpY3RSZXNwb25zZSA9IHdyYXBwZWRNZXNzYWdlID0+IHtcblx0aWYgKHdyYXBwZWRNZXNzYWdlPy50eXBlICE9PSBSRVNQT05TRV9UWVBFKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3Qge2lkLCBtZXNzYWdlOiBoYXNMaXN0ZW5lcnN9ID0gd3JhcHBlZE1lc3NhZ2U7XG5cdFNUUklDVF9SRVNQT05TRVNbaWRdPy5yZXNvbHZlKHtpc0RlYWRsb2NrOiBmYWxzZSwgaGFzTGlzdGVuZXJzfSk7XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8gV2FpdCBmb3IgdGhlIG90aGVyIHByb2Nlc3MgdG8gcmVjZWl2ZSB0aGUgbWVzc2FnZSBmcm9tIGBzZW5kTWVzc2FnZSgpYFxuZXhwb3J0IGNvbnN0IHdhaXRGb3JTdHJpY3RSZXNwb25zZSA9IGFzeW5jICh3cmFwcGVkTWVzc2FnZSwgYW55UHJvY2VzcywgaXNTdWJwcm9jZXNzKSA9PiB7XG5cdGlmICh3cmFwcGVkTWVzc2FnZT8udHlwZSAhPT0gUkVRVUVTVF9UWVBFKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZGVmZXJyZWQgPSBjcmVhdGVEZWZlcnJlZCgpO1xuXHRTVFJJQ1RfUkVTUE9OU0VTW3dyYXBwZWRNZXNzYWdlLmlkXSA9IGRlZmVycmVkO1xuXHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3Qge2lzRGVhZGxvY2ssIGhhc0xpc3RlbmVyc30gPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuXHRcdFx0ZGVmZXJyZWQsXG5cdFx0XHR0aHJvd09uRGlzY29ubmVjdChhbnlQcm9jZXNzLCBpc1N1YnByb2Nlc3MsIGNvbnRyb2xsZXIpLFxuXHRcdF0pO1xuXG5cdFx0aWYgKGlzRGVhZGxvY2spIHtcblx0XHRcdHRocm93T25TdHJpY3REZWFkbG9ja0Vycm9yKGlzU3VicHJvY2Vzcyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFoYXNMaXN0ZW5lcnMpIHtcblx0XHRcdHRocm93T25NaXNzaW5nU3RyaWN0KGlzU3VicHJvY2Vzcyk7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdGNvbnRyb2xsZXIuYWJvcnQoKTtcblx0XHRkZWxldGUgU1RSSUNUX1JFU1BPTlNFU1t3cmFwcGVkTWVzc2FnZS5pZF07XG5cdH1cbn07XG5cbmNvbnN0IFNUUklDVF9SRVNQT05TRVMgPSB7fTtcblxuY29uc3QgdGhyb3dPbkRpc2Nvbm5lY3QgPSBhc3luYyAoYW55UHJvY2VzcywgaXNTdWJwcm9jZXNzLCB7c2lnbmFsfSkgPT4ge1xuXHRpbmNyZW1lbnRNYXhMaXN0ZW5lcnMoYW55UHJvY2VzcywgMSwgc2lnbmFsKTtcblx0YXdhaXQgb25jZShhbnlQcm9jZXNzLCAnZGlzY29ubmVjdCcsIHtzaWduYWx9KTtcblx0dGhyb3dPblN0cmljdERpc2Nvbm5lY3QoaXNTdWJwcm9jZXNzKTtcbn07XG5cbmNvbnN0IFJFUVVFU1RfVFlQRSA9ICdleGVjYTppcGM6cmVxdWVzdCc7XG5jb25zdCBSRVNQT05TRV9UWVBFID0gJ2V4ZWNhOmlwYzpyZXNwb25zZSc7XG4iLCAiaW1wb3J0IHtjcmVhdGVEZWZlcnJlZH0gZnJvbSAnLi4vdXRpbHMvZGVmZXJyZWQuanMnO1xuaW1wb3J0IHtnZXRGZFNwZWNpZmljVmFsdWV9IGZyb20gJy4uL2FyZ3VtZW50cy9zcGVjaWZpYy5qcyc7XG5pbXBvcnQge1NVQlBST0NFU1NfT1BUSU9OU30gZnJvbSAnLi4vYXJndW1lbnRzL2ZkLW9wdGlvbnMuanMnO1xuaW1wb3J0IHt2YWxpZGF0ZVN0cmljdERlYWRsb2NrfSBmcm9tICcuL3N0cmljdC5qcyc7XG5cbi8vIFdoZW4gYHNlbmRNZXNzYWdlKClgIGlzIG9uZ29pbmcsIGFueSBgbWVzc2FnZWAgYmVpbmcgcmVjZWl2ZWQgd2FpdHMgYmVmb3JlIGJlaW5nIGVtaXR0ZWQuXG4vLyBUaGlzIGFsbG93cyBjYWxsaW5nIG9uZSBvciBtdWx0aXBsZSBgYXdhaXQgc2VuZE1lc3NhZ2UoKWAgZm9sbG93ZWQgYnkgYGF3YWl0IGdldE9uZU1lc3NhZ2UoKWAvYGF3YWl0IGdldEVhY2hNZXNzYWdlKClgLlxuLy8gV2l0aG91dCBydW5uaW5nIGludG8gYSByYWNlIGNvbmRpdGlvbiB3aGVuIHRoZSBvdGhlciBwcm9jZXNzIHNlbmRzIGEgcmVzcG9uc2UgdG9vIGZhc3QsIGJlZm9yZSB0aGUgY3VycmVudCBwcm9jZXNzIHNldCB1cCBhIGxpc3RlbmVyLlxuZXhwb3J0IGNvbnN0IHN0YXJ0U2VuZE1lc3NhZ2UgPSAoYW55UHJvY2Vzcywgd3JhcHBlZE1lc3NhZ2UsIHN0cmljdCkgPT4ge1xuXHRpZiAoIU9VVEdPSU5HX01FU1NBR0VTLmhhcyhhbnlQcm9jZXNzKSkge1xuXHRcdE9VVEdPSU5HX01FU1NBR0VTLnNldChhbnlQcm9jZXNzLCBuZXcgU2V0KCkpO1xuXHR9XG5cblx0Y29uc3Qgb3V0Z29pbmdNZXNzYWdlcyA9IE9VVEdPSU5HX01FU1NBR0VTLmdldChhbnlQcm9jZXNzKTtcblx0Y29uc3Qgb25NZXNzYWdlU2VudCA9IGNyZWF0ZURlZmVycmVkKCk7XG5cdGNvbnN0IGlkID0gc3RyaWN0ID8gd3JhcHBlZE1lc3NhZ2UuaWQgOiB1bmRlZmluZWQ7XG5cdGNvbnN0IG91dGdvaW5nTWVzc2FnZSA9IHtvbk1lc3NhZ2VTZW50LCBpZH07XG5cdG91dGdvaW5nTWVzc2FnZXMuYWRkKG91dGdvaW5nTWVzc2FnZSk7XG5cdHJldHVybiB7b3V0Z29pbmdNZXNzYWdlcywgb3V0Z29pbmdNZXNzYWdlfTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmRTZW5kTWVzc2FnZSA9ICh7b3V0Z29pbmdNZXNzYWdlcywgb3V0Z29pbmdNZXNzYWdlfSkgPT4ge1xuXHRvdXRnb2luZ01lc3NhZ2VzLmRlbGV0ZShvdXRnb2luZ01lc3NhZ2UpO1xuXHRvdXRnb2luZ01lc3NhZ2Uub25NZXNzYWdlU2VudC5yZXNvbHZlKCk7XG59O1xuXG4vLyBBd2FpdCB3aGlsZSBgc2VuZE1lc3NhZ2UoKWAgaXMgb25nb2luZywgdW5sZXNzIHRoZXJlIGlzIGFscmVhZHkgYSBgbWVzc2FnZWAgbGlzdGVuZXJcbmV4cG9ydCBjb25zdCB3YWl0Rm9yT3V0Z29pbmdNZXNzYWdlcyA9IGFzeW5jIChhbnlQcm9jZXNzLCBpcGNFbWl0dGVyLCB3cmFwcGVkTWVzc2FnZSkgPT4ge1xuXHR3aGlsZSAoIWhhc01lc3NhZ2VMaXN0ZW5lcnMoYW55UHJvY2VzcywgaXBjRW1pdHRlcikgJiYgT1VUR09JTkdfTUVTU0FHRVMuZ2V0KGFueVByb2Nlc3MpPy5zaXplID4gMCkge1xuXHRcdGNvbnN0IG91dGdvaW5nTWVzc2FnZXMgPSBbLi4uT1VUR09JTkdfTUVTU0FHRVMuZ2V0KGFueVByb2Nlc3MpXTtcblx0XHR2YWxpZGF0ZVN0cmljdERlYWRsb2NrKG91dGdvaW5nTWVzc2FnZXMsIHdyYXBwZWRNZXNzYWdlKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuXHRcdGF3YWl0IFByb21pc2UuYWxsKG91dGdvaW5nTWVzc2FnZXMubWFwKCh7b25NZXNzYWdlU2VudH0pID0+IG9uTWVzc2FnZVNlbnQpKTtcblx0fVxufTtcblxuY29uc3QgT1VUR09JTkdfTUVTU0FHRVMgPSBuZXcgV2Vha01hcCgpO1xuXG4vLyBXaGV0aGVyIGFueSBgbWVzc2FnZWAgbGlzdGVuZXIgaXMgc2V0dXBcbmV4cG9ydCBjb25zdCBoYXNNZXNzYWdlTGlzdGVuZXJzID0gKGFueVByb2Nlc3MsIGlwY0VtaXR0ZXIpID0+IGlwY0VtaXR0ZXIubGlzdGVuZXJDb3VudCgnbWVzc2FnZScpID4gZ2V0TWluTGlzdGVuZXJDb3VudChhbnlQcm9jZXNzKTtcblxuLy8gV2hlbiBgYnVmZmVyYCBpcyBgZmFsc2VgLCB3ZSBzZXQgdXAgYSBgbWVzc2FnZWAgbGlzdGVuZXIgdGhhdCBzaG91bGQgYmUgaWdub3JlZC5cbi8vIFRoYXQgbGlzdGVuZXIgaXMgb25seSBtZWFudCB0byBpbnRlcmNlcHQgYHN0cmljdGAgYWNrbm93bGVkZ2VtZW50IHJlc3BvbnNlcy5cbmNvbnN0IGdldE1pbkxpc3RlbmVyQ291bnQgPSBhbnlQcm9jZXNzID0+IFNVQlBST0NFU1NfT1BUSU9OUy5oYXMoYW55UHJvY2Vzcylcblx0JiYgIWdldEZkU3BlY2lmaWNWYWx1ZShTVUJQUk9DRVNTX09QVElPTlMuZ2V0KGFueVByb2Nlc3MpLm9wdGlvbnMuYnVmZmVyLCAnaXBjJylcblx0PyAxXG5cdDogMDtcbiIsICJpbXBvcnQge3Byb21pc2lmeX0gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCB7XG5cdHZhbGlkYXRlSXBjTWV0aG9kLFxuXHRoYW5kbGVFcGlwZUVycm9yLFxuXHRoYW5kbGVTZXJpYWxpemF0aW9uRXJyb3IsXG5cdGRpc2Nvbm5lY3QsXG59IGZyb20gJy4vdmFsaWRhdGlvbi5qcyc7XG5pbXBvcnQge3N0YXJ0U2VuZE1lc3NhZ2UsIGVuZFNlbmRNZXNzYWdlfSBmcm9tICcuL291dGdvaW5nLmpzJztcbmltcG9ydCB7aGFuZGxlU2VuZFN0cmljdCwgd2FpdEZvclN0cmljdFJlc3BvbnNlfSBmcm9tICcuL3N0cmljdC5qcyc7XG5cbi8vIExpa2UgYFtzdWJdcHJvY2Vzcy5zZW5kKClgIGJ1dCBwcm9taXNlLWJhc2VkLlxuLy8gV2UgZG8gbm90IGBhd2FpdCBzdWJwcm9jZXNzYCBkdXJpbmcgYC5zZW5kTWVzc2FnZSgpYCBub3IgYC5nZXRPbmVNZXNzYWdlKClgIHNpbmNlIHRob3NlIG1ldGhvZHMgYXJlIHRyYW5zaWVudC5cbi8vIFVzZXJzIHdvdWxkIHN0aWxsIG5lZWQgdG8gYGF3YWl0IHN1YnByb2Nlc3NgIGFmdGVyIHRoZSBtZXRob2QgaXMgZG9uZS5cbi8vIEFsc28sIHRoaXMgd291bGQgcHJldmVudCBgdW5oYW5kbGVkUmVqZWN0aW9uYCBldmVudCBmcm9tIGJlaW5nIGVtaXR0ZWQsIG1ha2luZyBpdCBzaWxlbnQuXG5leHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgaXBjfSwgbWVzc2FnZSwge3N0cmljdCA9IGZhbHNlfSA9IHt9KSA9PiB7XG5cdGNvbnN0IG1ldGhvZE5hbWUgPSAnc2VuZE1lc3NhZ2UnO1xuXHR2YWxpZGF0ZUlwY01ldGhvZCh7XG5cdFx0bWV0aG9kTmFtZSxcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0aXBjLFxuXHRcdGlzQ29ubmVjdGVkOiBhbnlQcm9jZXNzLmNvbm5lY3RlZCxcblx0fSk7XG5cblx0cmV0dXJuIHNlbmRNZXNzYWdlQXN5bmMoe1xuXHRcdGFueVByb2Nlc3MsXG5cdFx0Y2hhbm5lbCxcblx0XHRtZXRob2ROYW1lLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0XHRtZXNzYWdlLFxuXHRcdHN0cmljdCxcblx0fSk7XG59O1xuXG5jb25zdCBzZW5kTWVzc2FnZUFzeW5jID0gYXN5bmMgKHthbnlQcm9jZXNzLCBjaGFubmVsLCBtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MsIG1lc3NhZ2UsIHN0cmljdH0pID0+IHtcblx0Y29uc3Qgd3JhcHBlZE1lc3NhZ2UgPSBoYW5kbGVTZW5kU3RyaWN0KHtcblx0XHRhbnlQcm9jZXNzLFxuXHRcdGNoYW5uZWwsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdG1lc3NhZ2UsXG5cdFx0c3RyaWN0LFxuXHR9KTtcblx0Y29uc3Qgb3V0Z29pbmdNZXNzYWdlc1N0YXRlID0gc3RhcnRTZW5kTWVzc2FnZShhbnlQcm9jZXNzLCB3cmFwcGVkTWVzc2FnZSwgc3RyaWN0KTtcblx0dHJ5IHtcblx0XHRhd2FpdCBzZW5kT25lTWVzc2FnZSh7XG5cdFx0XHRhbnlQcm9jZXNzLFxuXHRcdFx0bWV0aG9kTmFtZSxcblx0XHRcdGlzU3VicHJvY2Vzcyxcblx0XHRcdHdyYXBwZWRNZXNzYWdlLFxuXHRcdFx0bWVzc2FnZSxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRkaXNjb25uZWN0KGFueVByb2Nlc3MpO1xuXHRcdHRocm93IGVycm9yO1xuXHR9IGZpbmFsbHkge1xuXHRcdGVuZFNlbmRNZXNzYWdlKG91dGdvaW5nTWVzc2FnZXNTdGF0ZSk7XG5cdH1cbn07XG5cbi8vIFVzZWQgaW50ZXJuYWxseSBieSBgY2FuY2VsU2lnbmFsYFxuZXhwb3J0IGNvbnN0IHNlbmRPbmVNZXNzYWdlID0gYXN5bmMgKHthbnlQcm9jZXNzLCBtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3MsIHdyYXBwZWRNZXNzYWdlLCBtZXNzYWdlfSkgPT4ge1xuXHRjb25zdCBzZW5kTWV0aG9kID0gZ2V0U2VuZE1ldGhvZChhbnlQcm9jZXNzKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRcdHdhaXRGb3JTdHJpY3RSZXNwb25zZSh3cmFwcGVkTWVzc2FnZSwgYW55UHJvY2VzcywgaXNTdWJwcm9jZXNzKSxcblx0XHRcdHNlbmRNZXRob2Qod3JhcHBlZE1lc3NhZ2UpLFxuXHRcdF0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGhhbmRsZUVwaXBlRXJyb3Ioe2Vycm9yLCBtZXRob2ROYW1lLCBpc1N1YnByb2Nlc3N9KTtcblx0XHRoYW5kbGVTZXJpYWxpemF0aW9uRXJyb3Ioe1xuXHRcdFx0ZXJyb3IsXG5cdFx0XHRtZXRob2ROYW1lLFxuXHRcdFx0aXNTdWJwcm9jZXNzLFxuXHRcdFx0bWVzc2FnZSxcblx0XHR9KTtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufTtcblxuLy8gW3N1Yl1wcm9jZXNzLnNlbmQoKSBwcm9taXNpZmllZCwgbWVtb2l6ZWRcbmNvbnN0IGdldFNlbmRNZXRob2QgPSBhbnlQcm9jZXNzID0+IHtcblx0aWYgKFBST0NFU1NfU0VORF9NRVRIT0RTLmhhcyhhbnlQcm9jZXNzKSkge1xuXHRcdHJldHVybiBQUk9DRVNTX1NFTkRfTUVUSE9EUy5nZXQoYW55UHJvY2Vzcyk7XG5cdH1cblxuXHRjb25zdCBzZW5kTWV0aG9kID0gcHJvbWlzaWZ5KGFueVByb2Nlc3Muc2VuZC5iaW5kKGFueVByb2Nlc3MpKTtcblx0UFJPQ0VTU19TRU5EX01FVEhPRFMuc2V0KGFueVByb2Nlc3MsIHNlbmRNZXRob2QpO1xuXHRyZXR1cm4gc2VuZE1ldGhvZDtcbn07XG5cbmNvbnN0IFBST0NFU1NfU0VORF9NRVRIT0RTID0gbmV3IFdlYWtNYXAoKTtcbiIsICJpbXBvcnQge3NjaGVkdWxlcn0gZnJvbSAnbm9kZTp0aW1lcnMvcHJvbWlzZXMnO1xuaW1wb3J0IHtzZW5kT25lTWVzc2FnZX0gZnJvbSAnLi9zZW5kLmpzJztcbmltcG9ydCB7Z2V0SXBjRW1pdHRlcn0gZnJvbSAnLi9mb3J3YXJkLmpzJztcbmltcG9ydCB7dmFsaWRhdGVDb25uZWN0aW9uLCBnZXRBYm9ydERpc2Nvbm5lY3RFcnJvciwgdGhyb3dPbk1pc3NpbmdQYXJlbnR9IGZyb20gJy4vdmFsaWRhdGlvbi5qcyc7XG5cbi8vIFNlbmQgYW4gSVBDIG1lc3NhZ2Ugc28gdGhlIHN1YnByb2Nlc3MgcGVyZm9ybXMgYSBncmFjZWZ1bCB0ZXJtaW5hdGlvblxuZXhwb3J0IGNvbnN0IHNlbmRBYm9ydCA9IChzdWJwcm9jZXNzLCBtZXNzYWdlKSA9PiB7XG5cdGNvbnN0IG1ldGhvZE5hbWUgPSAnY2FuY2VsU2lnbmFsJztcblx0dmFsaWRhdGVDb25uZWN0aW9uKG1ldGhvZE5hbWUsIGZhbHNlLCBzdWJwcm9jZXNzLmNvbm5lY3RlZCk7XG5cdHJldHVybiBzZW5kT25lTWVzc2FnZSh7XG5cdFx0YW55UHJvY2Vzczogc3VicHJvY2Vzcyxcblx0XHRtZXRob2ROYW1lLFxuXHRcdGlzU3VicHJvY2VzczogZmFsc2UsXG5cdFx0d3JhcHBlZE1lc3NhZ2U6IHt0eXBlOiBHUkFDRUZVTF9DQU5DRUxfVFlQRSwgbWVzc2FnZX0sXG5cdFx0bWVzc2FnZSxcblx0fSk7XG59O1xuXG4vLyBXaGVuIHRoZSBzaWduYWwgaXMgYmVpbmcgdXNlZCwgc3RhcnQgbGlzdGVuaW5nIGZvciBpbmNvbWluZyBtZXNzYWdlcy5cbi8vIFVuYnVmZmVyaW5nIG1lc3NhZ2VzIHRha2VzIG9uZSBtaWNyb3Rhc2sgdG8gY29tcGxldGUsIHNvIHRoaXMgbXVzdCBiZSBhc3luYy5cbmV4cG9ydCBjb25zdCBnZXRDYW5jZWxTaWduYWwgPSBhc3luYyAoe2FueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2VzcywgaXBjfSkgPT4ge1xuXHRhd2FpdCBzdGFydElwYyh7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0XHRpcGMsXG5cdH0pO1xuXHRyZXR1cm4gY2FuY2VsQ29udHJvbGxlci5zaWduYWw7XG59O1xuXG5jb25zdCBzdGFydElwYyA9IGFzeW5jICh7YW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzLCBpcGN9KSA9PiB7XG5cdGlmIChjYW5jZWxMaXN0ZW5pbmcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjYW5jZWxMaXN0ZW5pbmcgPSB0cnVlO1xuXG5cdGlmICghaXBjKSB7XG5cdFx0dGhyb3dPbk1pc3NpbmdQYXJlbnQoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoY2hhbm5lbCA9PT0gbnVsbCkge1xuXHRcdGFib3J0T25EaXNjb25uZWN0KCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Z2V0SXBjRW1pdHRlcihhbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MpO1xuXHRhd2FpdCBzY2hlZHVsZXIueWllbGQoKTtcbn07XG5cbmxldCBjYW5jZWxMaXN0ZW5pbmcgPSBmYWxzZTtcblxuLy8gUmVjZXB0aW9uIG9mIElQQyBtZXNzYWdlIHRvIHBlcmZvcm0gYSBncmFjZWZ1bCB0ZXJtaW5hdGlvblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFib3J0ID0gd3JhcHBlZE1lc3NhZ2UgPT4ge1xuXHRpZiAod3JhcHBlZE1lc3NhZ2U/LnR5cGUgIT09IEdSQUNFRlVMX0NBTkNFTF9UWVBFKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y2FuY2VsQ29udHJvbGxlci5hYm9ydCh3cmFwcGVkTWVzc2FnZS5tZXNzYWdlKTtcblx0cmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBHUkFDRUZVTF9DQU5DRUxfVFlQRSA9ICdleGVjYTppcGM6Y2FuY2VsJztcblxuLy8gV2hlbiB0aGUgY3VycmVudCBwcm9jZXNzIGRpc2Nvbm5lY3RzIGVhcmx5LCB0aGUgc3VicHJvY2VzcyBgY2FuY2VsU2lnbmFsYCBpcyBhYm9ydGVkLlxuLy8gT3RoZXJ3aXNlLCB0aGUgc2lnbmFsIHdvdWxkIG5ldmVyIGJlIGFibGUgdG8gYmUgYWJvcnRlZCBsYXRlciBvbi5cbmV4cG9ydCBjb25zdCBhYm9ydE9uRGlzY29ubmVjdCA9ICgpID0+IHtcblx0Y2FuY2VsQ29udHJvbGxlci5hYm9ydChnZXRBYm9ydERpc2Nvbm5lY3RFcnJvcigpKTtcbn07XG5cbmNvbnN0IGNhbmNlbENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4iLCAiaW1wb3J0IHtvbkFib3J0ZWRTaWduYWx9IGZyb20gJy4uL3V0aWxzL2Fib3J0LXNpZ25hbC5qcyc7XG5pbXBvcnQge3NlbmRBYm9ydH0gZnJvbSAnLi4vaXBjL2dyYWNlZnVsLmpzJztcbmltcG9ydCB7a2lsbE9uVGltZW91dH0gZnJvbSAnLi9raWxsLmpzJztcblxuLy8gVmFsaWRhdGUgdGhlIGBncmFjZWZ1bENhbmNlbGAgb3B0aW9uXG5leHBvcnQgY29uc3QgdmFsaWRhdGVHcmFjZWZ1bENhbmNlbCA9ICh7Z3JhY2VmdWxDYW5jZWwsIGNhbmNlbFNpZ25hbCwgaXBjLCBzZXJpYWxpemF0aW9ufSkgPT4ge1xuXHRpZiAoIWdyYWNlZnVsQ2FuY2VsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGNhbmNlbFNpZ25hbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYGNhbmNlbFNpZ25hbGAgb3B0aW9uIG11c3QgYmUgZGVmaW5lZCB3aGVuIHNldHRpbmcgdGhlIGBncmFjZWZ1bENhbmNlbGAgb3B0aW9uLicpO1xuXHR9XG5cblx0aWYgKCFpcGMpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgaXBjYCBvcHRpb24gY2Fubm90IGJlIGZhbHNlIHdoZW4gc2V0dGluZyB0aGUgYGdyYWNlZnVsQ2FuY2VsYCBvcHRpb24uJyk7XG5cdH1cblxuXHRpZiAoc2VyaWFsaXphdGlvbiA9PT0gJ2pzb24nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYHNlcmlhbGl6YXRpb25gIG9wdGlvbiBjYW5ub3QgYmUgXFwnanNvblxcJyB3aGVuIHNldHRpbmcgdGhlIGBncmFjZWZ1bENhbmNlbGAgb3B0aW9uLicpO1xuXHR9XG59O1xuXG4vLyBTZW5kIGFib3J0IHJlYXNvbiB0byB0aGUgc3VicHJvY2VzcyB3aGVuIGFib3J0aW5nIHRoZSBgY2FuY2VsU2lnbmFsYCBvcHRpb24gYW5kIGBncmFjZWZ1bENhbmNlbGAgaXMgYHRydWVgXG5leHBvcnQgY29uc3QgdGhyb3dPbkdyYWNlZnVsQ2FuY2VsID0gKHtcblx0c3VicHJvY2Vzcyxcblx0Y2FuY2VsU2lnbmFsLFxuXHRncmFjZWZ1bENhbmNlbCxcblx0Zm9yY2VLaWxsQWZ0ZXJEZWxheSxcblx0Y29udGV4dCxcblx0Y29udHJvbGxlcixcbn0pID0+IGdyYWNlZnVsQ2FuY2VsXG5cdD8gW3NlbmRPbkFib3J0KHtcblx0XHRzdWJwcm9jZXNzLFxuXHRcdGNhbmNlbFNpZ25hbCxcblx0XHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRcdGNvbnRleHQsXG5cdFx0Y29udHJvbGxlcixcblx0fSldXG5cdDogW107XG5cbmNvbnN0IHNlbmRPbkFib3J0ID0gYXN5bmMgKHtzdWJwcm9jZXNzLCBjYW5jZWxTaWduYWwsIGZvcmNlS2lsbEFmdGVyRGVsYXksIGNvbnRleHQsIGNvbnRyb2xsZXI6IHtzaWduYWx9fSkgPT4ge1xuXHRhd2FpdCBvbkFib3J0ZWRTaWduYWwoY2FuY2VsU2lnbmFsLCBzaWduYWwpO1xuXHRjb25zdCByZWFzb24gPSBnZXRSZWFzb24oY2FuY2VsU2lnbmFsKTtcblx0YXdhaXQgc2VuZEFib3J0KHN1YnByb2Nlc3MsIHJlYXNvbik7XG5cdGtpbGxPblRpbWVvdXQoe1xuXHRcdGtpbGw6IHN1YnByb2Nlc3Mua2lsbCxcblx0XHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRcdGNvbnRleHQsXG5cdFx0Y29udHJvbGxlclNpZ25hbDogc2lnbmFsLFxuXHR9KTtcblx0Y29udGV4dC50ZXJtaW5hdGlvblJlYXNvbiA/Pz0gJ2dyYWNlZnVsQ2FuY2VsJztcblx0dGhyb3cgY2FuY2VsU2lnbmFsLnJlYXNvbjtcbn07XG5cbi8vIFRoZSBkZWZhdWx0IGByZWFzb25gIGlzIGEgRE9NRXhjZXB0aW9uLCB3aGljaCBpcyBub3Qgc2VyaWFsaXphYmxlIHdpdGggVjhcbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzUzMjI1XG5jb25zdCBnZXRSZWFzb24gPSAoe3JlYXNvbn0pID0+IHtcblx0aWYgKCEocmVhc29uIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uKSkge1xuXHRcdHJldHVybiByZWFzb247XG5cdH1cblxuXHRjb25zdCBlcnJvciA9IG5ldyBFcnJvcihyZWFzb24ubWVzc2FnZSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnJvciwgJ3N0YWNrJywge1xuXHRcdHZhbHVlOiByZWFzb24uc3RhY2ssXG5cdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdHdyaXRhYmxlOiB0cnVlLFxuXHR9KTtcblx0cmV0dXJuIGVycm9yO1xufTtcbiIsICJpbXBvcnQge3NldFRpbWVvdXR9IGZyb20gJ25vZGU6dGltZXJzL3Byb21pc2VzJztcbmltcG9ydCB7RGlzY2FyZGVkRXJyb3J9IGZyb20gJy4uL3JldHVybi9maW5hbC1lcnJvci5qcyc7XG5cbi8vIFZhbGlkYXRlIGB0aW1lb3V0YCBvcHRpb25cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVRpbWVvdXQgPSAoe3RpbWVvdXR9KSA9PiB7XG5cdGlmICh0aW1lb3V0ICE9PSB1bmRlZmluZWQgJiYgKCFOdW1iZXIuaXNGaW5pdGUodGltZW91dCkgfHwgdGltZW91dCA8IDApKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgdGhlIFxcYHRpbWVvdXRcXGAgb3B0aW9uIHRvIGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIsIGdvdCBcXGAke3RpbWVvdXR9XFxgICgke3R5cGVvZiB0aW1lb3V0fSlgKTtcblx0fVxufTtcblxuLy8gRmFpbHMgd2hlbiB0aGUgYHRpbWVvdXRgIG9wdGlvbiBpcyBleGNlZWRlZFxuZXhwb3J0IGNvbnN0IHRocm93T25UaW1lb3V0ID0gKHN1YnByb2Nlc3MsIHRpbWVvdXQsIGNvbnRleHQsIGNvbnRyb2xsZXIpID0+IHRpbWVvdXQgPT09IDAgfHwgdGltZW91dCA9PT0gdW5kZWZpbmVkXG5cdD8gW11cblx0OiBba2lsbEFmdGVyVGltZW91dChzdWJwcm9jZXNzLCB0aW1lb3V0LCBjb250ZXh0LCBjb250cm9sbGVyKV07XG5cbmNvbnN0IGtpbGxBZnRlclRpbWVvdXQgPSBhc3luYyAoc3VicHJvY2VzcywgdGltZW91dCwgY29udGV4dCwge3NpZ25hbH0pID0+IHtcblx0YXdhaXQgc2V0VGltZW91dCh0aW1lb3V0LCB1bmRlZmluZWQsIHtzaWduYWx9KTtcblx0Y29udGV4dC50ZXJtaW5hdGlvblJlYXNvbiA/Pz0gJ3RpbWVvdXQnO1xuXHRzdWJwcm9jZXNzLmtpbGwoKTtcblx0dGhyb3cgbmV3IERpc2NhcmRlZEVycm9yKCk7XG59O1xuIiwgImltcG9ydCB7ZXhlY1BhdGgsIGV4ZWNBcmd2fSBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7c2FmZU5vcm1hbGl6ZUZpbGVVcmx9IGZyb20gJy4uL2FyZ3VtZW50cy9maWxlLXVybC5qcyc7XG5cbi8vIGBleGVjYU5vZGUoKWAgaXMgYSBzaG9ydGN1dCBmb3IgYGV4ZWNhKC4uLiwge25vZGU6IHRydWV9KWBcbmV4cG9ydCBjb25zdCBtYXBOb2RlID0gKHtvcHRpb25zfSkgPT4ge1xuXHRpZiAob3B0aW9ucy5ub2RlID09PSBmYWxzZSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm5vZGVcIiBvcHRpb24gY2Fubm90IGJlIGZhbHNlIHdpdGggYGV4ZWNhTm9kZSgpYC4nKTtcblx0fVxuXG5cdHJldHVybiB7b3B0aW9uczogey4uLm9wdGlvbnMsIG5vZGU6IHRydWV9fTtcbn07XG5cbi8vIEFwcGxpZXMgdGhlIGBub2RlOiB0cnVlYCBvcHRpb24sIGFuZCB0aGUgcmVsYXRlZCBgbm9kZVBhdGhgL2Bub2RlT3B0aW9uc2Agb3B0aW9ucy5cbi8vIE1vZGlmaWVzIHRoZSBmaWxlIGNvbW1hbmRzL2FyZ3VtZW50cyB0byBlbnN1cmUgdGhlIHNhbWUgTm9kZSBiaW5hcnkgYW5kIGZsYWdzIGFyZSByZS11c2VkLlxuLy8gQWxzbyBhZGRzIGBpcGM6IHRydWVgIGFuZCBgc2hlbGw6IGZhbHNlYC5cbmV4cG9ydCBjb25zdCBoYW5kbGVOb2RlT3B0aW9uID0gKGZpbGUsIGNvbW1hbmRBcmd1bWVudHMsIHtcblx0bm9kZTogc2hvdWxkSGFuZGxlTm9kZSA9IGZhbHNlLFxuXHRub2RlUGF0aCA9IGV4ZWNQYXRoLFxuXHRub2RlT3B0aW9ucyA9IGV4ZWNBcmd2LmZpbHRlcihub2RlT3B0aW9uID0+ICFub2RlT3B0aW9uLnN0YXJ0c1dpdGgoJy0taW5zcGVjdCcpKSxcblx0Y3dkLFxuXHRleGVjUGF0aDogZm9ybWVyTm9kZVBhdGgsXG5cdC4uLm9wdGlvbnNcbn0pID0+IHtcblx0aWYgKGZvcm1lck5vZGVQYXRoICE9PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJleGVjUGF0aFwiIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLiBQbGVhc2UgdXNlIHRoZSBcIm5vZGVQYXRoXCIgb3B0aW9uIGluc3RlYWQuJyk7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkTm9kZVBhdGggPSBzYWZlTm9ybWFsaXplRmlsZVVybChub2RlUGF0aCwgJ1RoZSBcIm5vZGVQYXRoXCIgb3B0aW9uJyk7XG5cdGNvbnN0IHJlc29sdmVkTm9kZVBhdGggPSBwYXRoLnJlc29sdmUoY3dkLCBub3JtYWxpemVkTm9kZVBhdGgpO1xuXHRjb25zdCBuZXdPcHRpb25zID0ge1xuXHRcdC4uLm9wdGlvbnMsXG5cdFx0bm9kZVBhdGg6IHJlc29sdmVkTm9kZVBhdGgsXG5cdFx0bm9kZTogc2hvdWxkSGFuZGxlTm9kZSxcblx0XHRjd2QsXG5cdH07XG5cblx0aWYgKCFzaG91bGRIYW5kbGVOb2RlKSB7XG5cdFx0cmV0dXJuIFtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBuZXdPcHRpb25zXTtcblx0fVxuXG5cdGlmIChwYXRoLmJhc2VuYW1lKGZpbGUsICcuZXhlJykgPT09ICdub2RlJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1doZW4gdGhlIFwibm9kZVwiIG9wdGlvbiBpcyB0cnVlLCB0aGUgZmlyc3QgYXJndW1lbnQgZG9lcyBub3QgbmVlZCB0byBiZSBcIm5vZGVcIi4nKTtcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0cmVzb2x2ZWROb2RlUGF0aCxcblx0XHRbLi4ubm9kZU9wdGlvbnMsIGZpbGUsIC4uLmNvbW1hbmRBcmd1bWVudHNdLFxuXHRcdHtpcGM6IHRydWUsIC4uLm5ld09wdGlvbnMsIHNoZWxsOiBmYWxzZX0sXG5cdF07XG59O1xuIiwgImltcG9ydCB7c2VyaWFsaXplfSBmcm9tICdub2RlOnY4JztcblxuLy8gVmFsaWRhdGUgdGhlIGBpcGNJbnB1dGAgb3B0aW9uXG5leHBvcnQgY29uc3QgdmFsaWRhdGVJcGNJbnB1dE9wdGlvbiA9ICh7aXBjSW5wdXQsIGlwYywgc2VyaWFsaXphdGlvbn0pID0+IHtcblx0aWYgKGlwY0lucHV0ID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIWlwYykge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBpcGNJbnB1dGAgb3B0aW9uIGNhbm5vdCBiZSBzZXQgdW5sZXNzIHRoZSBgaXBjYCBvcHRpb24gaXMgYHRydWVgLicpO1xuXHR9XG5cblx0dmFsaWRhdGVJcGNJbnB1dFtzZXJpYWxpemF0aW9uXShpcGNJbnB1dCk7XG59O1xuXG5jb25zdCB2YWxpZGF0ZUFkdmFuY2VkSW5wdXQgPSBpcGNJbnB1dCA9PiB7XG5cdHRyeSB7XG5cdFx0c2VyaWFsaXplKGlwY0lucHV0KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgaXBjSW5wdXRgIG9wdGlvbiBpcyBub3Qgc2VyaWFsaXphYmxlIHdpdGggYSBzdHJ1Y3R1cmVkIGNsb25lLicsIHtjYXVzZTogZXJyb3J9KTtcblx0fVxufTtcblxuY29uc3QgdmFsaWRhdGVKc29uSW5wdXQgPSBpcGNJbnB1dCA9PiB7XG5cdHRyeSB7XG5cdFx0SlNPTi5zdHJpbmdpZnkoaXBjSW5wdXQpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBpcGNJbnB1dGAgb3B0aW9uIGlzIG5vdCBzZXJpYWxpemFibGUgd2l0aCBKU09OLicsIHtjYXVzZTogZXJyb3J9KTtcblx0fVxufTtcblxuY29uc3QgdmFsaWRhdGVJcGNJbnB1dCA9IHtcblx0YWR2YW5jZWQ6IHZhbGlkYXRlQWR2YW5jZWRJbnB1dCxcblx0anNvbjogdmFsaWRhdGVKc29uSW5wdXQsXG59O1xuXG4vLyBXaGVuIHRoZSBgaXBjSW5wdXRgIG9wdGlvbiBpcyBzZXQsIGl0IGlzIHNlbnQgYXMgYW4gaW5pdGlhbCBJUEMgbWVzc2FnZSB0byB0aGUgc3VicHJvY2Vzc1xuZXhwb3J0IGNvbnN0IHNlbmRJcGNJbnB1dCA9IGFzeW5jIChzdWJwcm9jZXNzLCBpcGNJbnB1dCkgPT4ge1xuXHRpZiAoaXBjSW5wdXQgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IHN1YnByb2Nlc3Muc2VuZE1lc3NhZ2UoaXBjSW5wdXQpO1xufTtcbiIsICIvLyBWYWxpZGF0ZSBgZW5jb2RpbmdgIG9wdGlvblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlRW5jb2RpbmcgPSAoe2VuY29kaW5nfSkgPT4ge1xuXHRpZiAoRU5DT0RJTkdTLmhhcyhlbmNvZGluZykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb3JyZWN0RW5jb2RpbmcgPSBnZXRDb3JyZWN0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXHRpZiAoY29ycmVjdEVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIG9wdGlvbiBcXGBlbmNvZGluZzogJHtzZXJpYWxpemVFbmNvZGluZyhlbmNvZGluZyl9XFxgLlxuUGxlYXNlIHJlbmFtZSBpdCB0byAke3NlcmlhbGl6ZUVuY29kaW5nKGNvcnJlY3RFbmNvZGluZyl9LmApO1xuXHR9XG5cblx0Y29uc3QgY29ycmVjdEVuY29kaW5ncyA9IFsuLi5FTkNPRElOR1NdLm1hcChjb3JyZWN0RW5jb2RpbmcgPT4gc2VyaWFsaXplRW5jb2RpbmcoY29ycmVjdEVuY29kaW5nKSkuam9pbignLCAnKTtcblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBvcHRpb24gXFxgZW5jb2Rpbmc6ICR7c2VyaWFsaXplRW5jb2RpbmcoZW5jb2RpbmcpfVxcYC5cblBsZWFzZSByZW5hbWUgaXQgdG8gb25lIG9mOiAke2NvcnJlY3RFbmNvZGluZ3N9LmApO1xufTtcblxuY29uc3QgVEVYVF9FTkNPRElOR1MgPSBuZXcgU2V0KFsndXRmOCcsICd1dGYxNmxlJ10pO1xuZXhwb3J0IGNvbnN0IEJJTkFSWV9FTkNPRElOR1MgPSBuZXcgU2V0KFsnYnVmZmVyJywgJ2hleCcsICdiYXNlNjQnLCAnYmFzZTY0dXJsJywgJ2xhdGluMScsICdhc2NpaSddKTtcbmNvbnN0IEVOQ09ESU5HUyA9IG5ldyBTZXQoWy4uLlRFWFRfRU5DT0RJTkdTLCAuLi5CSU5BUllfRU5DT0RJTkdTXSk7XG5cbmNvbnN0IGdldENvcnJlY3RFbmNvZGluZyA9IGVuY29kaW5nID0+IHtcblx0aWYgKGVuY29kaW5nID09PSBudWxsKSB7XG5cdFx0cmV0dXJuICdidWZmZXInO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsb3dlckVuY29kaW5nID0gZW5jb2RpbmcudG9Mb3dlckNhc2UoKTtcblx0aWYgKGxvd2VyRW5jb2RpbmcgaW4gRU5DT0RJTkdfQUxJQVNFUykge1xuXHRcdHJldHVybiBFTkNPRElOR19BTElBU0VTW2xvd2VyRW5jb2RpbmddO1xuXHR9XG5cblx0aWYgKEVOQ09ESU5HUy5oYXMobG93ZXJFbmNvZGluZykpIHtcblx0XHRyZXR1cm4gbG93ZXJFbmNvZGluZztcblx0fVxufTtcblxuY29uc3QgRU5DT0RJTkdfQUxJQVNFUyA9IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vdGV4dC1lbmNvZGluZy1pZGVudGlmaWVyLWNhc2Vcblx0J3V0Zi04JzogJ3V0ZjgnLFxuXHQndXRmLTE2bGUnOiAndXRmMTZsZScsXG5cdCd1Y3MtMic6ICd1dGYxNmxlJyxcblx0dWNzMjogJ3V0ZjE2bGUnLFxuXHRiaW5hcnk6ICdsYXRpbjEnLFxufTtcblxuY29uc3Qgc2VyaWFsaXplRW5jb2RpbmcgPSBlbmNvZGluZyA9PiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnID8gYFwiJHtlbmNvZGluZ31cImAgOiBTdHJpbmcoZW5jb2RpbmcpO1xuIiwgImltcG9ydCB7c3RhdFN5bmN9IGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQge3NhZmVOb3JtYWxpemVGaWxlVXJsfSBmcm9tICcuL2ZpbGUtdXJsLmpzJztcblxuLy8gTm9ybWFsaXplIGBjd2RgIG9wdGlvblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUN3ZCA9IChjd2QgPSBnZXREZWZhdWx0Q3dkKCkpID0+IHtcblx0Y29uc3QgY3dkU3RyaW5nID0gc2FmZU5vcm1hbGl6ZUZpbGVVcmwoY3dkLCAnVGhlIFwiY3dkXCIgb3B0aW9uJyk7XG5cdHJldHVybiBwYXRoLnJlc29sdmUoY3dkU3RyaW5nKTtcbn07XG5cbmNvbnN0IGdldERlZmF1bHRDd2QgPSAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHByb2Nlc3MuY3dkKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZXJyb3IubWVzc2FnZSA9IGBUaGUgY3VycmVudCBkaXJlY3RvcnkgZG9lcyBub3QgZXhpc3QuXFxuJHtlcnJvci5tZXNzYWdlfWA7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbi8vIFdoZW4gYGN3ZGAgb3B0aW9uIGhhcyBhbiBpbnZhbGlkIHZhbHVlLCBwcm92aWRlIHdpdGggYSBiZXR0ZXIgZXJyb3IgbWVzc2FnZVxuZXhwb3J0IGNvbnN0IGZpeEN3ZEVycm9yID0gKG9yaWdpbmFsTWVzc2FnZSwgY3dkKSA9PiB7XG5cdGlmIChjd2QgPT09IGdldERlZmF1bHRDd2QoKSkge1xuXHRcdHJldHVybiBvcmlnaW5hbE1lc3NhZ2U7XG5cdH1cblxuXHRsZXQgY3dkU3RhdDtcblx0dHJ5IHtcblx0XHRjd2RTdGF0ID0gc3RhdFN5bmMoY3dkKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gYFRoZSBcImN3ZFwiIG9wdGlvbiBpcyBpbnZhbGlkOiAke2N3ZH0uXFxuJHtlcnJvci5tZXNzYWdlfVxcbiR7b3JpZ2luYWxNZXNzYWdlfWA7XG5cdH1cblxuXHRpZiAoIWN3ZFN0YXQuaXNEaXJlY3RvcnkoKSkge1xuXHRcdHJldHVybiBgVGhlIFwiY3dkXCIgb3B0aW9uIGlzIG5vdCBhIGRpcmVjdG9yeTogJHtjd2R9LlxcbiR7b3JpZ2luYWxNZXNzYWdlfWA7XG5cdH1cblxuXHRyZXR1cm4gb3JpZ2luYWxNZXNzYWdlO1xufTtcbiIsICJpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJztcbmltcG9ydCBjcm9zc1NwYXduIGZyb20gJ2Nyb3NzLXNwYXduJztcbmltcG9ydCB7bnBtUnVuUGF0aEVudn0gZnJvbSAnbnBtLXJ1bi1wYXRoJztcbmltcG9ydCB7bm9ybWFsaXplRm9yY2VLaWxsQWZ0ZXJEZWxheX0gZnJvbSAnLi4vdGVybWluYXRlL2tpbGwuanMnO1xuaW1wb3J0IHtub3JtYWxpemVLaWxsU2lnbmFsfSBmcm9tICcuLi90ZXJtaW5hdGUvc2lnbmFsLmpzJztcbmltcG9ydCB7dmFsaWRhdGVDYW5jZWxTaWduYWx9IGZyb20gJy4uL3Rlcm1pbmF0ZS9jYW5jZWwuanMnO1xuaW1wb3J0IHt2YWxpZGF0ZUdyYWNlZnVsQ2FuY2VsfSBmcm9tICcuLi90ZXJtaW5hdGUvZ3JhY2VmdWwuanMnO1xuaW1wb3J0IHt2YWxpZGF0ZVRpbWVvdXR9IGZyb20gJy4uL3Rlcm1pbmF0ZS90aW1lb3V0LmpzJztcbmltcG9ydCB7aGFuZGxlTm9kZU9wdGlvbn0gZnJvbSAnLi4vbWV0aG9kcy9ub2RlLmpzJztcbmltcG9ydCB7dmFsaWRhdGVJcGNJbnB1dE9wdGlvbn0gZnJvbSAnLi4vaXBjL2lwYy1pbnB1dC5qcyc7XG5pbXBvcnQge3ZhbGlkYXRlRW5jb2RpbmcsIEJJTkFSWV9FTkNPRElOR1N9IGZyb20gJy4vZW5jb2Rpbmctb3B0aW9uLmpzJztcbmltcG9ydCB7bm9ybWFsaXplQ3dkfSBmcm9tICcuL2N3ZC5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZUZpbGVVcmx9IGZyb20gJy4vZmlsZS11cmwuanMnO1xuaW1wb3J0IHtub3JtYWxpemVGZFNwZWNpZmljT3B0aW9uc30gZnJvbSAnLi9zcGVjaWZpYy5qcyc7XG5cbi8vIE5vcm1hbGl6ZSB0aGUgb3B0aW9ucyBvYmplY3QsIGFuZCBzb21ldGltZXMgYWxzbyB0aGUgZmlsZSBwYXRocyBhbmQgYXJndW1lbnRzLlxuLy8gQXBwbGllcyBkZWZhdWx0IHZhbHVlcywgdmFsaWRhdGUgYWxsb3dlZCBvcHRpb25zLCBub3JtYWxpemUgdGhlbS5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVPcHRpb25zID0gKGZpbGVQYXRoLCByYXdBcmd1bWVudHMsIHJhd09wdGlvbnMpID0+IHtcblx0cmF3T3B0aW9ucy5jd2QgPSBub3JtYWxpemVDd2QocmF3T3B0aW9ucy5jd2QpO1xuXHRjb25zdCBbcHJvY2Vzc2VkRmlsZSwgcHJvY2Vzc2VkQXJndW1lbnRzLCBwcm9jZXNzZWRPcHRpb25zXSA9IGhhbmRsZU5vZGVPcHRpb24oZmlsZVBhdGgsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucyk7XG5cblx0Y29uc3Qge2NvbW1hbmQ6IGZpbGUsIGFyZ3M6IGNvbW1hbmRBcmd1bWVudHMsIG9wdGlvbnM6IGluaXRpYWxPcHRpb25zfSA9IGNyb3NzU3Bhd24uX3BhcnNlKHByb2Nlc3NlZEZpbGUsIHByb2Nlc3NlZEFyZ3VtZW50cywgcHJvY2Vzc2VkT3B0aW9ucyk7XG5cblx0Y29uc3QgZmRPcHRpb25zID0gbm9ybWFsaXplRmRTcGVjaWZpY09wdGlvbnMoaW5pdGlhbE9wdGlvbnMpO1xuXHRjb25zdCBvcHRpb25zID0gYWRkRGVmYXVsdE9wdGlvbnMoZmRPcHRpb25zKTtcblx0dmFsaWRhdGVUaW1lb3V0KG9wdGlvbnMpO1xuXHR2YWxpZGF0ZUVuY29kaW5nKG9wdGlvbnMpO1xuXHR2YWxpZGF0ZUlwY0lucHV0T3B0aW9uKG9wdGlvbnMpO1xuXHR2YWxpZGF0ZUNhbmNlbFNpZ25hbChvcHRpb25zKTtcblx0dmFsaWRhdGVHcmFjZWZ1bENhbmNlbChvcHRpb25zKTtcblx0b3B0aW9ucy5zaGVsbCA9IG5vcm1hbGl6ZUZpbGVVcmwob3B0aW9ucy5zaGVsbCk7XG5cdG9wdGlvbnMuZW52ID0gZ2V0RW52KG9wdGlvbnMpO1xuXHRvcHRpb25zLmtpbGxTaWduYWwgPSBub3JtYWxpemVLaWxsU2lnbmFsKG9wdGlvbnMua2lsbFNpZ25hbCk7XG5cdG9wdGlvbnMuZm9yY2VLaWxsQWZ0ZXJEZWxheSA9IG5vcm1hbGl6ZUZvcmNlS2lsbEFmdGVyRGVsYXkob3B0aW9ucy5mb3JjZUtpbGxBZnRlckRlbGF5KTtcblx0b3B0aW9ucy5saW5lcyA9IG9wdGlvbnMubGluZXMubWFwKChsaW5lcywgZmROdW1iZXIpID0+IGxpbmVzICYmICFCSU5BUllfRU5DT0RJTkdTLmhhcyhvcHRpb25zLmVuY29kaW5nKSAmJiBvcHRpb25zLmJ1ZmZlcltmZE51bWJlcl0pO1xuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInICYmIHBhdGguYmFzZW5hbWUoZmlsZSwgJy5leGUnKSA9PT0gJ2NtZCcpIHtcblx0XHQvLyAjMTE2XG5cdFx0Y29tbWFuZEFyZ3VtZW50cy51bnNoaWZ0KCcvcScpO1xuXHR9XG5cblx0cmV0dXJuIHtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zfTtcbn07XG5cbmNvbnN0IGFkZERlZmF1bHRPcHRpb25zID0gKHtcblx0ZXh0ZW5kRW52ID0gdHJ1ZSxcblx0cHJlZmVyTG9jYWwgPSBmYWxzZSxcblx0Y3dkLFxuXHRsb2NhbERpcjogbG9jYWxEaXJlY3RvcnkgPSBjd2QsXG5cdGVuY29kaW5nID0gJ3V0ZjgnLFxuXHRyZWplY3QgPSB0cnVlLFxuXHRjbGVhbnVwID0gdHJ1ZSxcblx0YWxsID0gZmFsc2UsXG5cdHdpbmRvd3NIaWRlID0gdHJ1ZSxcblx0a2lsbFNpZ25hbCA9ICdTSUdURVJNJyxcblx0Zm9yY2VLaWxsQWZ0ZXJEZWxheSA9IHRydWUsXG5cdGdyYWNlZnVsQ2FuY2VsID0gZmFsc2UsXG5cdGlwY0lucHV0LFxuXHRpcGMgPSBpcGNJbnB1dCAhPT0gdW5kZWZpbmVkIHx8IGdyYWNlZnVsQ2FuY2VsLFxuXHRzZXJpYWxpemF0aW9uID0gJ2FkdmFuY2VkJyxcblx0Li4ub3B0aW9uc1xufSkgPT4gKHtcblx0Li4ub3B0aW9ucyxcblx0ZXh0ZW5kRW52LFxuXHRwcmVmZXJMb2NhbCxcblx0Y3dkLFxuXHRsb2NhbERpcmVjdG9yeSxcblx0ZW5jb2RpbmcsXG5cdHJlamVjdCxcblx0Y2xlYW51cCxcblx0YWxsLFxuXHR3aW5kb3dzSGlkZSxcblx0a2lsbFNpZ25hbCxcblx0Zm9yY2VLaWxsQWZ0ZXJEZWxheSxcblx0Z3JhY2VmdWxDYW5jZWwsXG5cdGlwY0lucHV0LFxuXHRpcGMsXG5cdHNlcmlhbGl6YXRpb24sXG59KTtcblxuY29uc3QgZ2V0RW52ID0gKHtlbnY6IGVudk9wdGlvbiwgZXh0ZW5kRW52LCBwcmVmZXJMb2NhbCwgbm9kZSwgbG9jYWxEaXJlY3RvcnksIG5vZGVQYXRofSkgPT4ge1xuXHRjb25zdCBlbnYgPSBleHRlbmRFbnYgPyB7Li4ucHJvY2Vzcy5lbnYsIC4uLmVudk9wdGlvbn0gOiBlbnZPcHRpb247XG5cblx0aWYgKHByZWZlckxvY2FsIHx8IG5vZGUpIHtcblx0XHRyZXR1cm4gbnBtUnVuUGF0aEVudih7XG5cdFx0XHRlbnYsXG5cdFx0XHRjd2Q6IGxvY2FsRGlyZWN0b3J5LFxuXHRcdFx0ZXhlY1BhdGg6IG5vZGVQYXRoLFxuXHRcdFx0cHJlZmVyTG9jYWwsXG5cdFx0XHRhZGRFeGVjUGF0aDogbm9kZSxcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBlbnY7XG59O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cmlwRmluYWxOZXdsaW5lKGlucHV0KSB7XG5cdGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHN0cmlwRmluYWxOZXdsaW5lU3RyaW5nKGlucHV0KTtcblx0fVxuXG5cdGlmICghKEFycmF5QnVmZmVyLmlzVmlldyhpbnB1dCkgJiYgaW5wdXQuQllURVNfUEVSX0VMRU1FTlQgPT09IDEpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdJbnB1dCBtdXN0IGJlIGEgc3RyaW5nIG9yIGEgVWludDhBcnJheScpO1xuXHR9XG5cblx0cmV0dXJuIHN0cmlwRmluYWxOZXdsaW5lQmluYXJ5KGlucHV0KTtcbn1cblxuY29uc3Qgc3RyaXBGaW5hbE5ld2xpbmVTdHJpbmcgPSBpbnB1dCA9PlxuXHRpbnB1dC5hdCgtMSkgPT09IExGXG5cdFx0PyBpbnB1dC5zbGljZSgwLCBpbnB1dC5hdCgtMikgPT09IENSID8gLTIgOiAtMSlcblx0XHQ6IGlucHV0O1xuXG5jb25zdCBzdHJpcEZpbmFsTmV3bGluZUJpbmFyeSA9IGlucHV0ID0+XG5cdGlucHV0LmF0KC0xKSA9PT0gTEZfQklOQVJZXG5cdFx0PyBpbnB1dC5zdWJhcnJheSgwLCBpbnB1dC5hdCgtMikgPT09IENSX0JJTkFSWSA/IC0yIDogLTEpXG5cdFx0OiBpbnB1dDtcblxuY29uc3QgTEYgPSAnXFxuJztcbmNvbnN0IExGX0JJTkFSWSA9IExGLmNvZGVQb2ludEF0KDApO1xuY29uc3QgQ1IgPSAnXFxyJztcbmNvbnN0IENSX0JJTkFSWSA9IENSLmNvZGVQb2ludEF0KDApO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBpc1N0cmVhbShzdHJlYW0sIHtjaGVja09wZW4gPSB0cnVlfSA9IHt9KSB7XG5cdHJldHVybiBzdHJlYW0gIT09IG51bGxcblx0XHQmJiB0eXBlb2Ygc3RyZWFtID09PSAnb2JqZWN0J1xuXHRcdCYmIChzdHJlYW0ud3JpdGFibGUgfHwgc3RyZWFtLnJlYWRhYmxlIHx8ICFjaGVja09wZW4gfHwgKHN0cmVhbS53cml0YWJsZSA9PT0gdW5kZWZpbmVkICYmIHN0cmVhbS5yZWFkYWJsZSA9PT0gdW5kZWZpbmVkKSlcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLnBpcGUgPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dyaXRhYmxlU3RyZWFtKHN0cmVhbSwge2NoZWNrT3BlbiA9IHRydWV9ID0ge30pIHtcblx0cmV0dXJuIGlzU3RyZWFtKHN0cmVhbSwge2NoZWNrT3Blbn0pXG5cdFx0JiYgKHN0cmVhbS53cml0YWJsZSB8fCAhY2hlY2tPcGVuKVxuXHRcdCYmIHR5cGVvZiBzdHJlYW0ud3JpdGUgPT09ICdmdW5jdGlvbidcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLmVuZCA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCYmIHR5cGVvZiBzdHJlYW0ud3JpdGFibGUgPT09ICdib29sZWFuJ1xuXHRcdCYmIHR5cGVvZiBzdHJlYW0ud3JpdGFibGVPYmplY3RNb2RlID09PSAnYm9vbGVhbidcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLmRlc3Ryb3kgPT09ICdmdW5jdGlvbidcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLmRlc3Ryb3llZCA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFkYWJsZVN0cmVhbShzdHJlYW0sIHtjaGVja09wZW4gPSB0cnVlfSA9IHt9KSB7XG5cdHJldHVybiBpc1N0cmVhbShzdHJlYW0sIHtjaGVja09wZW59KVxuXHRcdCYmIChzdHJlYW0ucmVhZGFibGUgfHwgIWNoZWNrT3Blbilcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLnJlYWQgPT09ICdmdW5jdGlvbidcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLnJlYWRhYmxlID09PSAnYm9vbGVhbidcblx0XHQmJiB0eXBlb2Ygc3RyZWFtLnJlYWRhYmxlT2JqZWN0TW9kZSA9PT0gJ2Jvb2xlYW4nXG5cdFx0JiYgdHlwZW9mIHN0cmVhbS5kZXN0cm95ID09PSAnZnVuY3Rpb24nXG5cdFx0JiYgdHlwZW9mIHN0cmVhbS5kZXN0cm95ZWQgPT09ICdib29sZWFuJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHVwbGV4U3RyZWFtKHN0cmVhbSwgb3B0aW9ucykge1xuXHRyZXR1cm4gaXNXcml0YWJsZVN0cmVhbShzdHJlYW0sIG9wdGlvbnMpXG5cdFx0JiYgaXNSZWFkYWJsZVN0cmVhbShzdHJlYW0sIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmFuc2Zvcm1TdHJlYW0oc3RyZWFtLCBvcHRpb25zKSB7XG5cdHJldHVybiBpc0R1cGxleFN0cmVhbShzdHJlYW0sIG9wdGlvbnMpXG5cdFx0JiYgdHlwZW9mIHN0cmVhbS5fdHJhbnNmb3JtID09PSAnZnVuY3Rpb24nO1xufVxuIiwgImNvbnN0IGEgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoXG4gIE9iamVjdC5nZXRQcm90b3R5cGVPZihcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uKiAoKSB7XG4gICAgfVxuICApLnByb3RvdHlwZVxuKTtcbmNsYXNzIGMge1xuICAjdDtcbiAgI247XG4gICNyID0gITE7XG4gICNlID0gdm9pZCAwO1xuICBjb25zdHJ1Y3RvcihlLCB0KSB7XG4gICAgdGhpcy4jdCA9IGUsIHRoaXMuI24gPSB0O1xuICB9XG4gIG5leHQoKSB7XG4gICAgY29uc3QgZSA9ICgpID0+IHRoaXMuI3MoKTtcbiAgICByZXR1cm4gdGhpcy4jZSA9IHRoaXMuI2UgPyB0aGlzLiNlLnRoZW4oZSwgZSkgOiBlKCksIHRoaXMuI2U7XG4gIH1cbiAgcmV0dXJuKGUpIHtcbiAgICBjb25zdCB0ID0gKCkgPT4gdGhpcy4jaShlKTtcbiAgICByZXR1cm4gdGhpcy4jZSA/IHRoaXMuI2UudGhlbih0LCB0KSA6IHQoKTtcbiAgfVxuICBhc3luYyAjcygpIHtcbiAgICBpZiAodGhpcy4jcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRvbmU6ICEwLFxuICAgICAgICB2YWx1ZTogdm9pZCAwXG4gICAgICB9O1xuICAgIGxldCBlO1xuICAgIHRyeSB7XG4gICAgICBlID0gYXdhaXQgdGhpcy4jdC5yZWFkKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgdGhyb3cgdGhpcy4jZSA9IHZvaWQgMCwgdGhpcy4jciA9ICEwLCB0aGlzLiN0LnJlbGVhc2VMb2NrKCksIHQ7XG4gICAgfVxuICAgIHJldHVybiBlLmRvbmUgJiYgKHRoaXMuI2UgPSB2b2lkIDAsIHRoaXMuI3IgPSAhMCwgdGhpcy4jdC5yZWxlYXNlTG9jaygpKSwgZTtcbiAgfVxuICBhc3luYyAjaShlKSB7XG4gICAgaWYgKHRoaXMuI3IpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkb25lOiAhMCxcbiAgICAgICAgdmFsdWU6IGVcbiAgICAgIH07XG4gICAgaWYgKHRoaXMuI3IgPSAhMCwgIXRoaXMuI24pIHtcbiAgICAgIGNvbnN0IHQgPSB0aGlzLiN0LmNhbmNlbChlKTtcbiAgICAgIHJldHVybiB0aGlzLiN0LnJlbGVhc2VMb2NrKCksIGF3YWl0IHQsIHtcbiAgICAgICAgZG9uZTogITAsXG4gICAgICAgIHZhbHVlOiBlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy4jdC5yZWxlYXNlTG9jaygpLCB7XG4gICAgICBkb25lOiAhMCxcbiAgICAgIHZhbHVlOiBlXG4gICAgfTtcbiAgfVxufVxuY29uc3QgbiA9IFN5bWJvbCgpO1xuZnVuY3Rpb24gaSgpIHtcbiAgcmV0dXJuIHRoaXNbbl0ubmV4dCgpO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGksIFwibmFtZVwiLCB7IHZhbHVlOiBcIm5leHRcIiB9KTtcbmZ1bmN0aW9uIG8ocikge1xuICByZXR1cm4gdGhpc1tuXS5yZXR1cm4ocik7XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJuYW1lXCIsIHsgdmFsdWU6IFwicmV0dXJuXCIgfSk7XG5jb25zdCB1ID0gT2JqZWN0LmNyZWF0ZShhLCB7XG4gIG5leHQ6IHtcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMCxcbiAgICB2YWx1ZTogaVxuICB9LFxuICByZXR1cm46IHtcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMCxcbiAgICB2YWx1ZTogb1xuICB9XG59KTtcbmZ1bmN0aW9uIGgoeyBwcmV2ZW50Q2FuY2VsOiByID0gITEgfSA9IHt9KSB7XG4gIGNvbnN0IGUgPSB0aGlzLmdldFJlYWRlcigpLCB0ID0gbmV3IGMoXG4gICAgZSxcbiAgICByXG4gICksIHMgPSBPYmplY3QuY3JlYXRlKHUpO1xuICByZXR1cm4gc1tuXSA9IHQsIHM7XG59XG5leHBvcnQge1xuICBoIGFzIGFzeW5jSXRlcmF0b3Jcbn07XG4iLCAiZnVuY3Rpb24gYyhuKSB7XG4gIGNvbnN0IHQgPSBhKG4pO1xuICByZXR1cm4gbmV3IFJlYWRhYmxlU3RyZWFtKFxuICAgIHtcbiAgICAgIGFzeW5jIHB1bGwoZSkge1xuICAgICAgICBjb25zdCB7IHZhbHVlOiByLCBkb25lOiBvIH0gPSBhd2FpdCB0Lm5leHQoKTtcbiAgICAgICAgbyA/IGUuY2xvc2UoKSA6IGUuZW5xdWV1ZShyKTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBjYW5jZWwoZSkge1xuICAgICAgICBpZiAodHlwZW9mIHQucmV0dXJuID09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgYXdhaXQgdC5yZXR1cm4oZSkgIT0gXCJvYmplY3RcIilcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwicmV0dXJuKCkgZnVsZmlsbHMgd2l0aCBhIG5vbi1vYmplY3QuXCIpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG5ldyBDb3VudFF1ZXVpbmdTdHJhdGVneSh7XG4gICAgICBoaWdoV2F0ZXJNYXJrOiAwXG4gICAgfSlcbiAgKTtcbn1cbmZ1bmN0aW9uIGEobikge1xuICBsZXQgdCA9IG5bU3ltYm9sLmFzeW5jSXRlcmF0b3JdPy5iaW5kKG4pO1xuICBpZiAodCA9PT0gdm9pZCAwKSB7XG4gICAgY29uc3QgciA9IG5bU3ltYm9sLml0ZXJhdG9yXSgpLCBvID0ge1xuICAgICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHJcbiAgICB9O1xuICAgIHQgPSBhc3luYyBmdW5jdGlvbiogKCkge1xuICAgICAgcmV0dXJuIHlpZWxkKiBvO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHQoKTtcbn1cbmV4cG9ydCB7XG4gIGMgYXMgZnJvbUFueUl0ZXJhYmxlXG59O1xuIiwgImltcG9ydCB7IGFzeW5jSXRlcmF0b3IgYXMgZSB9IGZyb20gXCIuL2FzeW5jSXRlcmF0b3IuanNcIjtcbmltcG9ydCB7IGZyb21BbnlJdGVyYWJsZSBhcyBhIH0gZnJvbSBcIi4vZnJvbUFueUl0ZXJhYmxlLmpzXCI7XG5leHBvcnQge1xuICBlIGFzIGFzeW5jSXRlcmF0b3IsXG4gIGEgYXMgZnJvbUFueUl0ZXJhYmxlXG59O1xuIiwgImltcG9ydCB7aXNSZWFkYWJsZVN0cmVhbX0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCB7YXN5bmNJdGVyYXRvcn0gZnJvbSAnQHNlYy1hbnQvcmVhZGFibGUtc3RyZWFtL3BvbnlmaWxsJztcblxuZXhwb3J0IGNvbnN0IGdldEFzeW5jSXRlcmFibGUgPSBzdHJlYW0gPT4ge1xuXHRpZiAoaXNSZWFkYWJsZVN0cmVhbShzdHJlYW0sIHtjaGVja09wZW46IGZhbHNlfSkgJiYgbm9kZUltcG9ydHMub24gIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBnZXRTdHJlYW1JdGVyYWJsZShzdHJlYW0pO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBzdHJlYW0/LltTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gc3RyZWFtO1xuXHR9XG5cblx0Ly8gYFJlYWRhYmxlU3RyZWFtW1N5bWJvbC5hc3luY0l0ZXJhdG9yXWAgc3VwcG9ydCBpcyBtaXNzaW5nIGluIG11bHRpcGxlIGJyb3dzZXJzLCBzbyB3ZSBwb255ZmlsbCBpdFxuXHRpZiAodG9TdHJpbmcuY2FsbChzdHJlYW0pID09PSAnW29iamVjdCBSZWFkYWJsZVN0cmVhbV0nKSB7XG5cdFx0cmV0dXJuIGFzeW5jSXRlcmF0b3IuY2FsbChzdHJlYW0pO1xuXHR9XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBSZWFkYWJsZSwgYSBSZWFkYWJsZVN0cmVhbSwgb3IgYW4gYXN5bmMgaXRlcmFibGUuJyk7XG59O1xuXG5jb25zdCB7dG9TdHJpbmd9ID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gVGhlIGRlZmF1bHQgaXRlcmFibGUgZm9yIE5vZGUuanMgc3RyZWFtcyBkb2VzIG5vdCBhbGxvdyBmb3IgbXVsdGlwbGUgcmVhZGVycyBhdCBvbmNlLCBzbyB3ZSByZS1pbXBsZW1lbnQgaXRcbmNvbnN0IGdldFN0cmVhbUl0ZXJhYmxlID0gYXN5bmMgZnVuY3Rpb24gKiAoc3RyZWFtKSB7XG5cdGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdGNvbnN0IHN0YXRlID0ge307XG5cdGhhbmRsZVN0cmVhbUVuZChzdHJlYW0sIGNvbnRyb2xsZXIsIHN0YXRlKTtcblxuXHR0cnkge1xuXHRcdGZvciBhd2FpdCAoY29uc3QgW2NodW5rXSBvZiBub2RlSW1wb3J0cy5vbihzdHJlYW0sICdkYXRhJywge3NpZ25hbDogY29udHJvbGxlci5zaWduYWx9KSkge1xuXHRcdFx0eWllbGQgY2h1bms7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN0cmVhbSBmYWlsdXJlLCBmb3IgZXhhbXBsZSBkdWUgdG8gYHN0cmVhbS5kZXN0cm95KGVycm9yKWBcblx0XHRpZiAoc3RhdGUuZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhyb3cgc3RhdGUuZXJyb3I7XG5cdFx0Ly8gYGVycm9yYCBldmVudCBkaXJlY3RseSBlbWl0dGVkIG9uIHN0cmVhbVxuXHRcdH0gZWxzZSBpZiAoIWNvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdC8vIE90aGVyd2lzZSwgc3RyZWFtIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHlcblx0XHR9XG5cdFx0Ly8gVGhlIGBmaW5hbGx5YCBibG9jayBhbHNvIHJ1bnMgd2hlbiB0aGUgY2FsbGVyIHRocm93cywgZm9yIGV4YW1wbGUgZHVlIHRvIHRoZSBgbWF4QnVmZmVyYCBvcHRpb25cblx0fSBmaW5hbGx5IHtcblx0XHRzdHJlYW0uZGVzdHJveSgpO1xuXHR9XG59O1xuXG5jb25zdCBoYW5kbGVTdHJlYW1FbmQgPSBhc3luYyAoc3RyZWFtLCBjb250cm9sbGVyLCBzdGF0ZSkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IG5vZGVJbXBvcnRzLmZpbmlzaGVkKHN0cmVhbSwge1xuXHRcdFx0Y2xlYW51cDogdHJ1ZSxcblx0XHRcdHJlYWRhYmxlOiB0cnVlLFxuXHRcdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHN0YXRlLmVycm9yID0gZXJyb3I7XG5cdH0gZmluYWxseSB7XG5cdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHR9XG59O1xuXG4vLyBMb2FkZWQgYnkgdGhlIE5vZGUgZW50cnlwb2ludCwgYnV0IG5vdCBieSB0aGUgYnJvd3NlciBvbmUuXG4vLyBUaGlzIHByZXZlbnRzIHVzaW5nIGR5bmFtaWMgaW1wb3J0cy5cbmV4cG9ydCBjb25zdCBub2RlSW1wb3J0cyA9IHt9O1xuIiwgImltcG9ydCB7Z2V0QXN5bmNJdGVyYWJsZX0gZnJvbSAnLi9zdHJlYW0uanMnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RyZWFtQ29udGVudHMgPSBhc3luYyAoc3RyZWFtLCB7aW5pdCwgY29udmVydENodW5rLCBnZXRTaXplLCB0cnVuY2F0ZUNodW5rLCBhZGRDaHVuaywgZ2V0RmluYWxDaHVuaywgZmluYWxpemV9LCB7bWF4QnVmZmVyID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZfSA9IHt9KSA9PiB7XG5cdGNvbnN0IGFzeW5jSXRlcmFibGUgPSBnZXRBc3luY0l0ZXJhYmxlKHN0cmVhbSk7XG5cblx0Y29uc3Qgc3RhdGUgPSBpbml0KCk7XG5cdHN0YXRlLmxlbmd0aCA9IDA7XG5cblx0dHJ5IHtcblx0XHRmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIGFzeW5jSXRlcmFibGUpIHtcblx0XHRcdGNvbnN0IGNodW5rVHlwZSA9IGdldENodW5rVHlwZShjaHVuayk7XG5cdFx0XHRjb25zdCBjb252ZXJ0ZWRDaHVuayA9IGNvbnZlcnRDaHVua1tjaHVua1R5cGVdKGNodW5rLCBzdGF0ZSk7XG5cdFx0XHRhcHBlbmRDaHVuayh7XG5cdFx0XHRcdGNvbnZlcnRlZENodW5rLFxuXHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0Z2V0U2l6ZSxcblx0XHRcdFx0dHJ1bmNhdGVDaHVuayxcblx0XHRcdFx0YWRkQ2h1bmssXG5cdFx0XHRcdG1heEJ1ZmZlcixcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGFwcGVuZEZpbmFsQ2h1bmsoe1xuXHRcdFx0c3RhdGUsXG5cdFx0XHRjb252ZXJ0Q2h1bmssXG5cdFx0XHRnZXRTaXplLFxuXHRcdFx0dHJ1bmNhdGVDaHVuayxcblx0XHRcdGFkZENodW5rLFxuXHRcdFx0Z2V0RmluYWxDaHVuayxcblx0XHRcdG1heEJ1ZmZlcixcblx0XHR9KTtcblx0XHRyZXR1cm4gZmluYWxpemUoc3RhdGUpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWRFcnJvciA9IHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgZXJyb3IgIT09IG51bGwgPyBlcnJvciA6IG5ldyBFcnJvcihlcnJvcik7XG5cdFx0bm9ybWFsaXplZEVycm9yLmJ1ZmZlcmVkRGF0YSA9IGZpbmFsaXplKHN0YXRlKTtcblx0XHR0aHJvdyBub3JtYWxpemVkRXJyb3I7XG5cdH1cbn07XG5cbmNvbnN0IGFwcGVuZEZpbmFsQ2h1bmsgPSAoe3N0YXRlLCBnZXRTaXplLCB0cnVuY2F0ZUNodW5rLCBhZGRDaHVuaywgZ2V0RmluYWxDaHVuaywgbWF4QnVmZmVyfSkgPT4ge1xuXHRjb25zdCBjb252ZXJ0ZWRDaHVuayA9IGdldEZpbmFsQ2h1bmsoc3RhdGUpO1xuXHRpZiAoY29udmVydGVkQ2h1bmsgIT09IHVuZGVmaW5lZCkge1xuXHRcdGFwcGVuZENodW5rKHtcblx0XHRcdGNvbnZlcnRlZENodW5rLFxuXHRcdFx0c3RhdGUsXG5cdFx0XHRnZXRTaXplLFxuXHRcdFx0dHJ1bmNhdGVDaHVuayxcblx0XHRcdGFkZENodW5rLFxuXHRcdFx0bWF4QnVmZmVyLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5jb25zdCBhcHBlbmRDaHVuayA9ICh7Y29udmVydGVkQ2h1bmssIHN0YXRlLCBnZXRTaXplLCB0cnVuY2F0ZUNodW5rLCBhZGRDaHVuaywgbWF4QnVmZmVyfSkgPT4ge1xuXHRjb25zdCBjaHVua1NpemUgPSBnZXRTaXplKGNvbnZlcnRlZENodW5rKTtcblx0Y29uc3QgbmV3TGVuZ3RoID0gc3RhdGUubGVuZ3RoICsgY2h1bmtTaXplO1xuXG5cdGlmIChuZXdMZW5ndGggPD0gbWF4QnVmZmVyKSB7XG5cdFx0YWRkTmV3Q2h1bmsoY29udmVydGVkQ2h1bmssIHN0YXRlLCBhZGRDaHVuaywgbmV3TGVuZ3RoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0cnVuY2F0ZWRDaHVuayA9IHRydW5jYXRlQ2h1bmsoY29udmVydGVkQ2h1bmssIG1heEJ1ZmZlciAtIHN0YXRlLmxlbmd0aCk7XG5cblx0aWYgKHRydW5jYXRlZENodW5rICE9PSB1bmRlZmluZWQpIHtcblx0XHRhZGROZXdDaHVuayh0cnVuY2F0ZWRDaHVuaywgc3RhdGUsIGFkZENodW5rLCBtYXhCdWZmZXIpO1xuXHR9XG5cblx0dGhyb3cgbmV3IE1heEJ1ZmZlckVycm9yKCk7XG59O1xuXG5jb25zdCBhZGROZXdDaHVuayA9IChjb252ZXJ0ZWRDaHVuaywgc3RhdGUsIGFkZENodW5rLCBuZXdMZW5ndGgpID0+IHtcblx0c3RhdGUuY29udGVudHMgPSBhZGRDaHVuayhjb252ZXJ0ZWRDaHVuaywgc3RhdGUsIG5ld0xlbmd0aCk7XG5cdHN0YXRlLmxlbmd0aCA9IG5ld0xlbmd0aDtcbn07XG5cbmNvbnN0IGdldENodW5rVHlwZSA9IGNodW5rID0+IHtcblx0Y29uc3QgdHlwZU9mQ2h1bmsgPSB0eXBlb2YgY2h1bms7XG5cblx0aWYgKHR5cGVPZkNodW5rID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiAnc3RyaW5nJztcblx0fVxuXG5cdGlmICh0eXBlT2ZDaHVuayAhPT0gJ29iamVjdCcgfHwgY2h1bmsgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gJ290aGVycyc7XG5cdH1cblxuXHRpZiAoZ2xvYmFsVGhpcy5CdWZmZXI/LmlzQnVmZmVyKGNodW5rKSkge1xuXHRcdHJldHVybiAnYnVmZmVyJztcblx0fVxuXG5cdGNvbnN0IHByb3RvdHlwZU5hbWUgPSBvYmplY3RUb1N0cmluZy5jYWxsKGNodW5rKTtcblxuXHRpZiAocHJvdG90eXBlTmFtZSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuXHRcdHJldHVybiAnYXJyYXlCdWZmZXInO1xuXHR9XG5cblx0aWYgKHByb3RvdHlwZU5hbWUgPT09ICdbb2JqZWN0IERhdGFWaWV3XScpIHtcblx0XHRyZXR1cm4gJ2RhdGFWaWV3Jztcblx0fVxuXG5cdGlmIChcblx0XHROdW1iZXIuaXNJbnRlZ2VyKGNodW5rLmJ5dGVMZW5ndGgpXG5cdFx0JiYgTnVtYmVyLmlzSW50ZWdlcihjaHVuay5ieXRlT2Zmc2V0KVxuXHRcdCYmIG9iamVjdFRvU3RyaW5nLmNhbGwoY2h1bmsuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJ1xuXHQpIHtcblx0XHRyZXR1cm4gJ3R5cGVkQXJyYXknO1xuXHR9XG5cblx0cmV0dXJuICdvdGhlcnMnO1xufTtcblxuY29uc3Qge3RvU3RyaW5nOiBvYmplY3RUb1N0cmluZ30gPSBPYmplY3QucHJvdG90eXBlO1xuXG5leHBvcnQgY2xhc3MgTWF4QnVmZmVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdG5hbWUgPSAnTWF4QnVmZmVyRXJyb3InO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCdtYXhCdWZmZXIgZXhjZWVkZWQnKTtcblx0fVxufVxuIiwgImV4cG9ydCBjb25zdCBpZGVudGl0eSA9IHZhbHVlID0+IHZhbHVlO1xuXG5leHBvcnQgY29uc3Qgbm9vcCA9ICgpID0+IHVuZGVmaW5lZDtcblxuZXhwb3J0IGNvbnN0IGdldENvbnRlbnRzUHJvcGVydHkgPSAoe2NvbnRlbnRzfSkgPT4gY29udGVudHM7XG5cbmV4cG9ydCBjb25zdCB0aHJvd09iamVjdFN0cmVhbSA9IGNodW5rID0+IHtcblx0dGhyb3cgbmV3IEVycm9yKGBTdHJlYW1zIGluIG9iamVjdCBtb2RlIGFyZSBub3Qgc3VwcG9ydGVkOiAke1N0cmluZyhjaHVuayl9YCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGVuZ3RoUHJvcGVydHkgPSBjb252ZXJ0ZWRDaHVuayA9PiBjb252ZXJ0ZWRDaHVuay5sZW5ndGg7XG4iLCAiaW1wb3J0IHtnZXRTdHJlYW1Db250ZW50c30gZnJvbSAnLi9jb250ZW50cy5qcyc7XG5pbXBvcnQge2lkZW50aXR5LCBub29wLCBnZXRDb250ZW50c1Byb3BlcnR5fSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmVhbUFzQXJyYXkoc3RyZWFtLCBvcHRpb25zKSB7XG5cdHJldHVybiBnZXRTdHJlYW1Db250ZW50cyhzdHJlYW0sIGFycmF5TWV0aG9kcywgb3B0aW9ucyk7XG59XG5cbmNvbnN0IGluaXRBcnJheSA9ICgpID0+ICh7Y29udGVudHM6IFtdfSk7XG5cbmNvbnN0IGluY3JlbWVudCA9ICgpID0+IDE7XG5cbmNvbnN0IGFkZEFycmF5Q2h1bmsgPSAoY29udmVydGVkQ2h1bmssIHtjb250ZW50c30pID0+IHtcblx0Y29udGVudHMucHVzaChjb252ZXJ0ZWRDaHVuayk7XG5cdHJldHVybiBjb250ZW50cztcbn07XG5cbmNvbnN0IGFycmF5TWV0aG9kcyA9IHtcblx0aW5pdDogaW5pdEFycmF5LFxuXHRjb252ZXJ0Q2h1bms6IHtcblx0XHRzdHJpbmc6IGlkZW50aXR5LFxuXHRcdGJ1ZmZlcjogaWRlbnRpdHksXG5cdFx0YXJyYXlCdWZmZXI6IGlkZW50aXR5LFxuXHRcdGRhdGFWaWV3OiBpZGVudGl0eSxcblx0XHR0eXBlZEFycmF5OiBpZGVudGl0eSxcblx0XHRvdGhlcnM6IGlkZW50aXR5LFxuXHR9LFxuXHRnZXRTaXplOiBpbmNyZW1lbnQsXG5cdHRydW5jYXRlQ2h1bms6IG5vb3AsXG5cdGFkZENodW5rOiBhZGRBcnJheUNodW5rLFxuXHRnZXRGaW5hbENodW5rOiBub29wLFxuXHRmaW5hbGl6ZTogZ2V0Q29udGVudHNQcm9wZXJ0eSxcbn07XG4iLCAiaW1wb3J0IHtnZXRTdHJlYW1Db250ZW50c30gZnJvbSAnLi9jb250ZW50cy5qcyc7XG5pbXBvcnQge25vb3AsIHRocm93T2JqZWN0U3RyZWFtLCBnZXRMZW5ndGhQcm9wZXJ0eX0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHJlYW1Bc0FycmF5QnVmZmVyKHN0cmVhbSwgb3B0aW9ucykge1xuXHRyZXR1cm4gZ2V0U3RyZWFtQ29udGVudHMoc3RyZWFtLCBhcnJheUJ1ZmZlck1ldGhvZHMsIG9wdGlvbnMpO1xufVxuXG5jb25zdCBpbml0QXJyYXlCdWZmZXIgPSAoKSA9PiAoe2NvbnRlbnRzOiBuZXcgQXJyYXlCdWZmZXIoMCl9KTtcblxuY29uc3QgdXNlVGV4dEVuY29kZXIgPSBjaHVuayA9PiB0ZXh0RW5jb2Rlci5lbmNvZGUoY2h1bmspO1xuY29uc3QgdGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcblxuY29uc3QgdXNlVWludDhBcnJheSA9IGNodW5rID0+IG5ldyBVaW50OEFycmF5KGNodW5rKTtcblxuY29uc3QgdXNlVWludDhBcnJheVdpdGhPZmZzZXQgPSBjaHVuayA9PiBuZXcgVWludDhBcnJheShjaHVuay5idWZmZXIsIGNodW5rLmJ5dGVPZmZzZXQsIGNodW5rLmJ5dGVMZW5ndGgpO1xuXG5jb25zdCB0cnVuY2F0ZUFycmF5QnVmZmVyQ2h1bmsgPSAoY29udmVydGVkQ2h1bmssIGNodW5rU2l6ZSkgPT4gY29udmVydGVkQ2h1bmsuc2xpY2UoMCwgY2h1bmtTaXplKTtcblxuLy8gYGNvbnRlbnRzYCBpcyBhbiBpbmNyZWFzaW5nbHkgZ3Jvd2luZyBgVWludDhBcnJheWAuXG5jb25zdCBhZGRBcnJheUJ1ZmZlckNodW5rID0gKGNvbnZlcnRlZENodW5rLCB7Y29udGVudHMsIGxlbmd0aDogcHJldmlvdXNMZW5ndGh9LCBsZW5ndGgpID0+IHtcblx0Y29uc3QgbmV3Q29udGVudHMgPSBoYXNBcnJheUJ1ZmZlclJlc2l6ZSgpID8gcmVzaXplQXJyYXlCdWZmZXIoY29udGVudHMsIGxlbmd0aCkgOiByZXNpemVBcnJheUJ1ZmZlclNsb3coY29udGVudHMsIGxlbmd0aCk7XG5cdG5ldyBVaW50OEFycmF5KG5ld0NvbnRlbnRzKS5zZXQoY29udmVydGVkQ2h1bmssIHByZXZpb3VzTGVuZ3RoKTtcblx0cmV0dXJuIG5ld0NvbnRlbnRzO1xufTtcblxuLy8gV2l0aG91dCBgQXJyYXlCdWZmZXIucmVzaXplKClgLCBgY29udGVudHNgIHNpemUgaXMgYWx3YXlzIGEgcG93ZXIgb2YgMi5cbi8vIFRoaXMgbWVhbnMgaXRzIGxhc3QgYnl0ZXMgYXJlIHplcm9lcyAobm90IHN0cmVhbSBkYXRhKSwgd2hpY2ggbmVlZCB0byBiZVxuLy8gdHJpbW1lZCBhdCB0aGUgZW5kIHdpdGggYEFycmF5QnVmZmVyLnNsaWNlKClgLlxuY29uc3QgcmVzaXplQXJyYXlCdWZmZXJTbG93ID0gKGNvbnRlbnRzLCBsZW5ndGgpID0+IHtcblx0aWYgKGxlbmd0aCA8PSBjb250ZW50cy5ieXRlTGVuZ3RoKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnRzO1xuXHR9XG5cblx0Y29uc3QgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoZ2V0TmV3Q29udGVudHNMZW5ndGgobGVuZ3RoKSk7XG5cdG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKS5zZXQobmV3IFVpbnQ4QXJyYXkoY29udGVudHMpLCAwKTtcblx0cmV0dXJuIGFycmF5QnVmZmVyO1xufTtcblxuLy8gV2l0aCBgQXJyYXlCdWZmZXIucmVzaXplKClgLCBgY29udGVudHNgIHNpemUgbWF0Y2hlcyBleGFjdGx5IHRoZSBzaXplIG9mXG4vLyB0aGUgc3RyZWFtIGRhdGEuIEl0IGRvZXMgbm90IGluY2x1ZGUgZXh0cmFuZW91cyB6ZXJvZXMgdG8gdHJpbSBhdCB0aGUgZW5kLlxuLy8gVGhlIHVuZGVybHlpbmcgYEFycmF5QnVmZmVyYCBkb2VzIGFsbG9jYXRlIGEgbnVtYmVyIG9mIGJ5dGVzIHRoYXQgaXMgYSBwb3dlclxuLy8gb2YgMiwgYnV0IHRob3NlIGJ5dGVzIGFyZSBvbmx5IHZpc2libGUgYWZ0ZXIgY2FsbGluZyBgQXJyYXlCdWZmZXIucmVzaXplKClgLlxuY29uc3QgcmVzaXplQXJyYXlCdWZmZXIgPSAoY29udGVudHMsIGxlbmd0aCkgPT4ge1xuXHRpZiAobGVuZ3RoIDw9IGNvbnRlbnRzLm1heEJ5dGVMZW5ndGgpIHtcblx0XHRjb250ZW50cy5yZXNpemUobGVuZ3RoKTtcblx0XHRyZXR1cm4gY29udGVudHM7XG5cdH1cblxuXHRjb25zdCBhcnJheUJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihsZW5ndGgsIHttYXhCeXRlTGVuZ3RoOiBnZXROZXdDb250ZW50c0xlbmd0aChsZW5ndGgpfSk7XG5cdG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKS5zZXQobmV3IFVpbnQ4QXJyYXkoY29udGVudHMpLCAwKTtcblx0cmV0dXJuIGFycmF5QnVmZmVyO1xufTtcblxuLy8gUmV0cmlldmUgdGhlIGNsb3Nlc3QgYGxlbmd0aGAgdGhhdCBpcyBib3RoID49IGFuZCBhIHBvd2VyIG9mIDJcbmNvbnN0IGdldE5ld0NvbnRlbnRzTGVuZ3RoID0gbGVuZ3RoID0+IFNDQUxFX0ZBQ1RPUiAqKiBNYXRoLmNlaWwoTWF0aC5sb2cobGVuZ3RoKSAvIE1hdGgubG9nKFNDQUxFX0ZBQ1RPUikpO1xuXG5jb25zdCBTQ0FMRV9GQUNUT1IgPSAyO1xuXG5jb25zdCBmaW5hbGl6ZUFycmF5QnVmZmVyID0gKHtjb250ZW50cywgbGVuZ3RofSkgPT4gaGFzQXJyYXlCdWZmZXJSZXNpemUoKSA/IGNvbnRlbnRzIDogY29udGVudHMuc2xpY2UoMCwgbGVuZ3RoKTtcblxuLy8gYEFycmF5QnVmZmVyLnNsaWNlKClgIGlzIHNsb3cuIFdoZW4gYEFycmF5QnVmZmVyLnJlc2l6ZSgpYCBpcyBhdmFpbGFibGVcbi8vIChOb2RlID49MjAuMC4wLCBTYWZhcmkgPj0xNi40IGFuZCBDaHJvbWUpLCB3ZSBjYW4gdXNlIGl0IGluc3RlYWQuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8td2FybmluZy1jb21tZW50c1xuLy8gVE9ETzogcmVtb3ZlIGFmdGVyIGRyb3BwaW5nIHN1cHBvcnQgZm9yIE5vZGUgMjAuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8td2FybmluZy1jb21tZW50c1xuLy8gVE9ETzogdXNlIGBBcnJheUJ1ZmZlci50cmFuc2ZlclRvRml4ZWRMZW5ndGgoKWAgaW5zdGVhZCBvbmNlIGl0IGlzIGF2YWlsYWJsZVxuY29uc3QgaGFzQXJyYXlCdWZmZXJSZXNpemUgPSAoKSA9PiAncmVzaXplJyBpbiBBcnJheUJ1ZmZlci5wcm90b3R5cGU7XG5cbmNvbnN0IGFycmF5QnVmZmVyTWV0aG9kcyA9IHtcblx0aW5pdDogaW5pdEFycmF5QnVmZmVyLFxuXHRjb252ZXJ0Q2h1bms6IHtcblx0XHRzdHJpbmc6IHVzZVRleHRFbmNvZGVyLFxuXHRcdGJ1ZmZlcjogdXNlVWludDhBcnJheSxcblx0XHRhcnJheUJ1ZmZlcjogdXNlVWludDhBcnJheSxcblx0XHRkYXRhVmlldzogdXNlVWludDhBcnJheVdpdGhPZmZzZXQsXG5cdFx0dHlwZWRBcnJheTogdXNlVWludDhBcnJheVdpdGhPZmZzZXQsXG5cdFx0b3RoZXJzOiB0aHJvd09iamVjdFN0cmVhbSxcblx0fSxcblx0Z2V0U2l6ZTogZ2V0TGVuZ3RoUHJvcGVydHksXG5cdHRydW5jYXRlQ2h1bms6IHRydW5jYXRlQXJyYXlCdWZmZXJDaHVuayxcblx0YWRkQ2h1bms6IGFkZEFycmF5QnVmZmVyQ2h1bmssXG5cdGdldEZpbmFsQ2h1bms6IG5vb3AsXG5cdGZpbmFsaXplOiBmaW5hbGl6ZUFycmF5QnVmZmVyLFxufTtcbiIsICJpbXBvcnQge2dldFN0cmVhbUNvbnRlbnRzfSBmcm9tICcuL2NvbnRlbnRzLmpzJztcbmltcG9ydCB7XG5cdGlkZW50aXR5LFxuXHRnZXRDb250ZW50c1Byb3BlcnR5LFxuXHR0aHJvd09iamVjdFN0cmVhbSxcblx0Z2V0TGVuZ3RoUHJvcGVydHksXG59IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RyZWFtQXNTdHJpbmcoc3RyZWFtLCBvcHRpb25zKSB7XG5cdHJldHVybiBnZXRTdHJlYW1Db250ZW50cyhzdHJlYW0sIHN0cmluZ01ldGhvZHMsIG9wdGlvbnMpO1xufVxuXG5jb25zdCBpbml0U3RyaW5nID0gKCkgPT4gKHtjb250ZW50czogJycsIHRleHREZWNvZGVyOiBuZXcgVGV4dERlY29kZXIoKX0pO1xuXG5jb25zdCB1c2VUZXh0RGVjb2RlciA9IChjaHVuaywge3RleHREZWNvZGVyfSkgPT4gdGV4dERlY29kZXIuZGVjb2RlKGNodW5rLCB7c3RyZWFtOiB0cnVlfSk7XG5cbmNvbnN0IGFkZFN0cmluZ0NodW5rID0gKGNvbnZlcnRlZENodW5rLCB7Y29udGVudHN9KSA9PiBjb250ZW50cyArIGNvbnZlcnRlZENodW5rO1xuXG5jb25zdCB0cnVuY2F0ZVN0cmluZ0NodW5rID0gKGNvbnZlcnRlZENodW5rLCBjaHVua1NpemUpID0+IGNvbnZlcnRlZENodW5rLnNsaWNlKDAsIGNodW5rU2l6ZSk7XG5cbmNvbnN0IGdldEZpbmFsU3RyaW5nQ2h1bmsgPSAoe3RleHREZWNvZGVyfSkgPT4ge1xuXHRjb25zdCBmaW5hbENodW5rID0gdGV4dERlY29kZXIuZGVjb2RlKCk7XG5cdHJldHVybiBmaW5hbENodW5rID09PSAnJyA/IHVuZGVmaW5lZCA6IGZpbmFsQ2h1bms7XG59O1xuXG5jb25zdCBzdHJpbmdNZXRob2RzID0ge1xuXHRpbml0OiBpbml0U3RyaW5nLFxuXHRjb252ZXJ0Q2h1bms6IHtcblx0XHRzdHJpbmc6IGlkZW50aXR5LFxuXHRcdGJ1ZmZlcjogdXNlVGV4dERlY29kZXIsXG5cdFx0YXJyYXlCdWZmZXI6IHVzZVRleHREZWNvZGVyLFxuXHRcdGRhdGFWaWV3OiB1c2VUZXh0RGVjb2Rlcixcblx0XHR0eXBlZEFycmF5OiB1c2VUZXh0RGVjb2Rlcixcblx0XHRvdGhlcnM6IHRocm93T2JqZWN0U3RyZWFtLFxuXHR9LFxuXHRnZXRTaXplOiBnZXRMZW5ndGhQcm9wZXJ0eSxcblx0dHJ1bmNhdGVDaHVuazogdHJ1bmNhdGVTdHJpbmdDaHVuayxcblx0YWRkQ2h1bms6IGFkZFN0cmluZ0NodW5rLFxuXHRnZXRGaW5hbENodW5rOiBnZXRGaW5hbFN0cmluZ0NodW5rLFxuXHRmaW5hbGl6ZTogZ2V0Q29udGVudHNQcm9wZXJ0eSxcbn07XG4iLCAiZXhwb3J0IHtnZXRTdHJlYW1Bc0FycmF5fSBmcm9tICcuL2FycmF5LmpzJztcbmV4cG9ydCB7Z2V0U3RyZWFtQXNBcnJheUJ1ZmZlcn0gZnJvbSAnLi9hcnJheS1idWZmZXIuanMnO1xuZXhwb3J0IHtnZXRTdHJlYW1Bc0J1ZmZlcn0gZnJvbSAnLi9idWZmZXIuanMnO1xuZXhwb3J0IHtnZXRTdHJlYW1Bc1N0cmluZyBhcyBkZWZhdWx0fSBmcm9tICcuL3N0cmluZy5qcyc7XG5leHBvcnQge01heEJ1ZmZlckVycm9yfSBmcm9tICcuL2NvbnRlbnRzLmpzJztcbiIsICJpbXBvcnQge29ufSBmcm9tICdub2RlOmV2ZW50cyc7XG5pbXBvcnQge2ZpbmlzaGVkfSBmcm9tICdub2RlOnN0cmVhbS9wcm9taXNlcyc7XG5pbXBvcnQge25vZGVJbXBvcnRzfSBmcm9tICcuL3N0cmVhbS5qcyc7XG5cbk9iamVjdC5hc3NpZ24obm9kZUltcG9ydHMsIHtvbiwgZmluaXNoZWR9KTtcblxuZXhwb3J0IHtcblx0ZGVmYXVsdCxcblx0Z2V0U3RyZWFtQXNBcnJheSxcblx0Z2V0U3RyZWFtQXNBcnJheUJ1ZmZlcixcblx0Z2V0U3RyZWFtQXNCdWZmZXIsXG5cdE1heEJ1ZmZlckVycm9yLFxufSBmcm9tICcuL2V4cG9ydHMuanMnO1xuIiwgImltcG9ydCB7TWF4QnVmZmVyRXJyb3J9IGZyb20gJ2dldC1zdHJlYW0nO1xuaW1wb3J0IHtnZXRTdHJlYW1OYW1lfSBmcm9tICcuLi91dGlscy9zdGFuZGFyZC1zdHJlYW0uanMnO1xuaW1wb3J0IHtnZXRGZFNwZWNpZmljVmFsdWV9IGZyb20gJy4uL2FyZ3VtZW50cy9zcGVjaWZpYy5qcyc7XG5cbi8vIFdoZW4gdGhlIGBtYXhCdWZmZXJgIG9wdGlvbiBpcyBoaXQsIGEgTWF4QnVmZmVyRXJyb3IgaXMgdGhyb3duLlxuLy8gVGhlIHN0cmVhbSBpcyBhYm9ydGVkLCB0aGVuIHNwZWNpZmljIGluZm9ybWF0aW9uIGlzIGtlcHQgZm9yIHRoZSBlcnJvciBtZXNzYWdlLlxuZXhwb3J0IGNvbnN0IGhhbmRsZU1heEJ1ZmZlciA9ICh7ZXJyb3IsIHN0cmVhbSwgcmVhZGFibGVPYmplY3RNb2RlLCBsaW5lcywgZW5jb2RpbmcsIGZkTnVtYmVyfSkgPT4ge1xuXHRpZiAoIShlcnJvciBpbnN0YW5jZW9mIE1heEJ1ZmZlckVycm9yKSkge1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG5cblx0aWYgKGZkTnVtYmVyID09PSAnYWxsJykge1xuXHRcdHJldHVybiBlcnJvcjtcblx0fVxuXG5cdGNvbnN0IHVuaXQgPSBnZXRNYXhCdWZmZXJVbml0KHJlYWRhYmxlT2JqZWN0TW9kZSwgbGluZXMsIGVuY29kaW5nKTtcblx0ZXJyb3IubWF4QnVmZmVySW5mbyA9IHtmZE51bWJlciwgdW5pdH07XG5cdHN0cmVhbS5kZXN0cm95KCk7XG5cdHRocm93IGVycm9yO1xufTtcblxuY29uc3QgZ2V0TWF4QnVmZmVyVW5pdCA9IChyZWFkYWJsZU9iamVjdE1vZGUsIGxpbmVzLCBlbmNvZGluZykgPT4ge1xuXHRpZiAocmVhZGFibGVPYmplY3RNb2RlKSB7XG5cdFx0cmV0dXJuICdvYmplY3RzJztcblx0fVxuXG5cdGlmIChsaW5lcykge1xuXHRcdHJldHVybiAnbGluZXMnO1xuXHR9XG5cblx0aWYgKGVuY29kaW5nID09PSAnYnVmZmVyJykge1xuXHRcdHJldHVybiAnYnl0ZXMnO1xuXHR9XG5cblx0cmV0dXJuICdjaGFyYWN0ZXJzJztcbn07XG5cbi8vIENoZWNrIHRoZSBgbWF4QnVmZmVyYCBvcHRpb24gd2l0aCBgcmVzdWx0LmlwY091dHB1dGBcbmV4cG9ydCBjb25zdCBjaGVja0lwY01heEJ1ZmZlciA9IChzdWJwcm9jZXNzLCBpcGNPdXRwdXQsIG1heEJ1ZmZlcikgPT4ge1xuXHRpZiAoaXBjT3V0cHV0Lmxlbmd0aCAhPT0gbWF4QnVmZmVyKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZXJyb3IgPSBuZXcgTWF4QnVmZmVyRXJyb3IoKTtcblx0ZXJyb3IubWF4QnVmZmVySW5mbyA9IHtmZE51bWJlcjogJ2lwYyd9O1xuXHR0aHJvdyBlcnJvcjtcbn07XG5cbi8vIEVycm9yIG1lc3NhZ2Ugd2hlbiBgbWF4QnVmZmVyYCBpcyBoaXRcbmV4cG9ydCBjb25zdCBnZXRNYXhCdWZmZXJNZXNzYWdlID0gKGVycm9yLCBtYXhCdWZmZXIpID0+IHtcblx0Y29uc3Qge3N0cmVhbU5hbWUsIHRocmVzaG9sZCwgdW5pdH0gPSBnZXRNYXhCdWZmZXJJbmZvKGVycm9yLCBtYXhCdWZmZXIpO1xuXHRyZXR1cm4gYENvbW1hbmQncyAke3N0cmVhbU5hbWV9IHdhcyBsYXJnZXIgdGhhbiAke3RocmVzaG9sZH0gJHt1bml0fWA7XG59O1xuXG5jb25zdCBnZXRNYXhCdWZmZXJJbmZvID0gKGVycm9yLCBtYXhCdWZmZXIpID0+IHtcblx0aWYgKGVycm9yPy5tYXhCdWZmZXJJbmZvID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4ge3N0cmVhbU5hbWU6ICdvdXRwdXQnLCB0aHJlc2hvbGQ6IG1heEJ1ZmZlclsxXSwgdW5pdDogJ2J5dGVzJ307XG5cdH1cblxuXHRjb25zdCB7bWF4QnVmZmVySW5mbzoge2ZkTnVtYmVyLCB1bml0fX0gPSBlcnJvcjtcblx0ZGVsZXRlIGVycm9yLm1heEJ1ZmZlckluZm87XG5cblx0Y29uc3QgdGhyZXNob2xkID0gZ2V0RmRTcGVjaWZpY1ZhbHVlKG1heEJ1ZmZlciwgZmROdW1iZXIpO1xuXHRpZiAoZmROdW1iZXIgPT09ICdpcGMnKSB7XG5cdFx0cmV0dXJuIHtzdHJlYW1OYW1lOiAnSVBDIG91dHB1dCcsIHRocmVzaG9sZCwgdW5pdDogJ21lc3NhZ2VzJ307XG5cdH1cblxuXHRyZXR1cm4ge3N0cmVhbU5hbWU6IGdldFN0cmVhbU5hbWUoZmROdW1iZXIpLCB0aHJlc2hvbGQsIHVuaXR9O1xufTtcblxuLy8gVGhlIG9ubHkgd2F5IHRvIGFwcGx5IGBtYXhCdWZmZXJgIHdpdGggYHNwYXduU3luYygpYCBpcyB0byB1c2UgdGhlIG5hdGl2ZSBgbWF4QnVmZmVyYCBvcHRpb24gTm9kZS5qcyBwcm92aWRlcy5cbi8vIEhvd2V2ZXIsIHRoaXMgaGFzIG11bHRpcGxlIGxpbWl0YXRpb25zLCBhbmQgY2Fubm90IGJlaGF2ZSB0aGUgZXhhY3Qgc2FtZSB3YXkgYXMgdGhlIGFzeW5jIGJlaGF2aW9yLlxuLy8gV2hlbiB0aGUgYG1heEJ1ZmZlcmAgaXMgaGl0LCBhIGBFTk9CVUZTYCBlcnJvciBpcyB0aHJvd24uXG5leHBvcnQgY29uc3QgaXNNYXhCdWZmZXJTeW5jID0gKHJlc3VsdEVycm9yLCBvdXRwdXQsIG1heEJ1ZmZlcikgPT4gcmVzdWx0RXJyb3I/LmNvZGUgPT09ICdFTk9CVUZTJ1xuXHQmJiBvdXRwdXQgIT09IG51bGxcblx0JiYgb3V0cHV0LnNvbWUocmVzdWx0ID0+IHJlc3VsdCAhPT0gbnVsbCAmJiByZXN1bHQubGVuZ3RoID4gZ2V0TWF4QnVmZmVyU3luYyhtYXhCdWZmZXIpKTtcblxuLy8gV2hlbiBgbWF4QnVmZmVyYCBpcyBoaXQsIGVuc3VyZSB0aGUgcmVzdWx0IGlzIHRydW5jYXRlZFxuZXhwb3J0IGNvbnN0IHRydW5jYXRlTWF4QnVmZmVyU3luYyA9IChyZXN1bHQsIGlzTWF4QnVmZmVyLCBtYXhCdWZmZXIpID0+IHtcblx0aWYgKCFpc01heEJ1ZmZlcikge1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRjb25zdCBtYXhCdWZmZXJWYWx1ZSA9IGdldE1heEJ1ZmZlclN5bmMobWF4QnVmZmVyKTtcblx0cmV0dXJuIHJlc3VsdC5sZW5ndGggPiBtYXhCdWZmZXJWYWx1ZSA/IHJlc3VsdC5zbGljZSgwLCBtYXhCdWZmZXJWYWx1ZSkgOiByZXN1bHQ7XG59O1xuXG4vLyBgc3Bhd25TeW5jKClgIGRvZXMgbm90IGFsbG93IGRpZmZlcmVudGlhdGluZyBgbWF4QnVmZmVyYCBwZXIgZmlsZSBkZXNjcmlwdG9yLCBzbyB3ZSBhbHdheXMgdXNlIGBzdGRvdXRgXG5leHBvcnQgY29uc3QgZ2V0TWF4QnVmZmVyU3luYyA9IChbLCBzdGRvdXRNYXhCdWZmZXJdKSA9PiBzdGRvdXRNYXhCdWZmZXI7XG4iLCAiaW1wb3J0IHtpbnNwZWN0fSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IHN0cmlwRmluYWxOZXdsaW5lIGZyb20gJ3N0cmlwLWZpbmFsLW5ld2xpbmUnO1xuaW1wb3J0IHtpc1VpbnQ4QXJyYXksIHVpbnQ4QXJyYXlUb1N0cmluZ30gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5pbXBvcnQge2ZpeEN3ZEVycm9yfSBmcm9tICcuLi9hcmd1bWVudHMvY3dkLmpzJztcbmltcG9ydCB7ZXNjYXBlTGluZXN9IGZyb20gJy4uL2FyZ3VtZW50cy9lc2NhcGUuanMnO1xuaW1wb3J0IHtnZXRNYXhCdWZmZXJNZXNzYWdlfSBmcm9tICcuLi9pby9tYXgtYnVmZmVyLmpzJztcbmltcG9ydCB7Z2V0U2lnbmFsRGVzY3JpcHRpb259IGZyb20gJy4uL3Rlcm1pbmF0ZS9zaWduYWwuanMnO1xuaW1wb3J0IHtEaXNjYXJkZWRFcnJvciwgaXNFeGVjYUVycm9yfSBmcm9tICcuL2ZpbmFsLWVycm9yLmpzJztcblxuLy8gQ29tcHV0ZXMgYGVycm9yLm1lc3NhZ2VgLCBgZXJyb3Iuc2hvcnRNZXNzYWdlYCBhbmQgYGVycm9yLm9yaWdpbmFsTWVzc2FnZWBcbmV4cG9ydCBjb25zdCBjcmVhdGVNZXNzYWdlcyA9ICh7XG5cdHN0ZGlvLFxuXHRhbGwsXG5cdGlwY091dHB1dCxcblx0b3JpZ2luYWxFcnJvcixcblx0c2lnbmFsLFxuXHRzaWduYWxEZXNjcmlwdGlvbixcblx0ZXhpdENvZGUsXG5cdGVzY2FwZWRDb21tYW5kLFxuXHR0aW1lZE91dCxcblx0aXNDYW5jZWxlZCxcblx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQsXG5cdGlzTWF4QnVmZmVyLFxuXHRpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkLFxuXHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRraWxsU2lnbmFsLFxuXHRtYXhCdWZmZXIsXG5cdHRpbWVvdXQsXG5cdGN3ZCxcbn0pID0+IHtcblx0Y29uc3QgZXJyb3JDb2RlID0gb3JpZ2luYWxFcnJvcj8uY29kZTtcblx0Y29uc3QgcHJlZml4ID0gZ2V0RXJyb3JQcmVmaXgoe1xuXHRcdG9yaWdpbmFsRXJyb3IsXG5cdFx0dGltZWRPdXQsXG5cdFx0dGltZW91dCxcblx0XHRpc01heEJ1ZmZlcixcblx0XHRtYXhCdWZmZXIsXG5cdFx0ZXJyb3JDb2RlLFxuXHRcdHNpZ25hbCxcblx0XHRzaWduYWxEZXNjcmlwdGlvbixcblx0XHRleGl0Q29kZSxcblx0XHRpc0NhbmNlbGVkLFxuXHRcdGlzR3JhY2VmdWxseUNhbmNlbGVkLFxuXHRcdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQsXG5cdFx0Zm9yY2VLaWxsQWZ0ZXJEZWxheSxcblx0XHRraWxsU2lnbmFsLFxuXHR9KTtcblx0Y29uc3Qgb3JpZ2luYWxNZXNzYWdlID0gZ2V0T3JpZ2luYWxNZXNzYWdlKG9yaWdpbmFsRXJyb3IsIGN3ZCk7XG5cdGNvbnN0IHN1ZmZpeCA9IG9yaWdpbmFsTWVzc2FnZSA9PT0gdW5kZWZpbmVkID8gJycgOiBgXFxuJHtvcmlnaW5hbE1lc3NhZ2V9YDtcblx0Y29uc3Qgc2hvcnRNZXNzYWdlID0gYCR7cHJlZml4fTogJHtlc2NhcGVkQ29tbWFuZH0ke3N1ZmZpeH1gO1xuXHRjb25zdCBtZXNzYWdlU3RkaW8gPSBhbGwgPT09IHVuZGVmaW5lZCA/IFtzdGRpb1syXSwgc3RkaW9bMV1dIDogW2FsbF07XG5cdGNvbnN0IG1lc3NhZ2UgPSBbXG5cdFx0c2hvcnRNZXNzYWdlLFxuXHRcdC4uLm1lc3NhZ2VTdGRpbyxcblx0XHQuLi5zdGRpby5zbGljZSgzKSxcblx0XHRpcGNPdXRwdXQubWFwKGlwY01lc3NhZ2UgPT4gc2VyaWFsaXplSXBjTWVzc2FnZShpcGNNZXNzYWdlKSkuam9pbignXFxuJyksXG5cdF1cblx0XHQubWFwKG1lc3NhZ2VQYXJ0ID0+IGVzY2FwZUxpbmVzKHN0cmlwRmluYWxOZXdsaW5lKHNlcmlhbGl6ZU1lc3NhZ2VQYXJ0KG1lc3NhZ2VQYXJ0KSkpKVxuXHRcdC5maWx0ZXIoQm9vbGVhbilcblx0XHQuam9pbignXFxuXFxuJyk7XG5cdHJldHVybiB7b3JpZ2luYWxNZXNzYWdlLCBzaG9ydE1lc3NhZ2UsIG1lc3NhZ2V9O1xufTtcblxuY29uc3QgZ2V0RXJyb3JQcmVmaXggPSAoe1xuXHRvcmlnaW5hbEVycm9yLFxuXHR0aW1lZE91dCxcblx0dGltZW91dCxcblx0aXNNYXhCdWZmZXIsXG5cdG1heEJ1ZmZlcixcblx0ZXJyb3JDb2RlLFxuXHRzaWduYWwsXG5cdHNpZ25hbERlc2NyaXB0aW9uLFxuXHRleGl0Q29kZSxcblx0aXNDYW5jZWxlZCxcblx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQsXG5cdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQsXG5cdGZvcmNlS2lsbEFmdGVyRGVsYXksXG5cdGtpbGxTaWduYWwsXG59KSA9PiB7XG5cdGNvbnN0IGZvcmNlZnVsU3VmZml4ID0gZ2V0Rm9yY2VmdWxTdWZmaXgoaXNGb3JjZWZ1bGx5VGVybWluYXRlZCwgZm9yY2VLaWxsQWZ0ZXJEZWxheSk7XG5cblx0aWYgKHRpbWVkT3V0KSB7XG5cdFx0cmV0dXJuIGBDb21tYW5kIHRpbWVkIG91dCBhZnRlciAke3RpbWVvdXR9IG1pbGxpc2Vjb25kcyR7Zm9yY2VmdWxTdWZmaXh9YDtcblx0fVxuXG5cdGlmIChpc0dyYWNlZnVsbHlDYW5jZWxlZCkge1xuXHRcdGlmIChzaWduYWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGBDb21tYW5kIHdhcyBncmFjZWZ1bGx5IGNhbmNlbGVkIHdpdGggZXhpdCBjb2RlICR7ZXhpdENvZGV9YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gaXNGb3JjZWZ1bGx5VGVybWluYXRlZFxuXHRcdFx0PyBgQ29tbWFuZCB3YXMgZ3JhY2VmdWxseSBjYW5jZWxlZCR7Zm9yY2VmdWxTdWZmaXh9YFxuXHRcdFx0OiBgQ29tbWFuZCB3YXMgZ3JhY2VmdWxseSBjYW5jZWxlZCB3aXRoICR7c2lnbmFsfSAoJHtzaWduYWxEZXNjcmlwdGlvbn0pYDtcblx0fVxuXG5cdGlmIChpc0NhbmNlbGVkKSB7XG5cdFx0cmV0dXJuIGBDb21tYW5kIHdhcyBjYW5jZWxlZCR7Zm9yY2VmdWxTdWZmaXh9YDtcblx0fVxuXG5cdGlmIChpc01heEJ1ZmZlcikge1xuXHRcdHJldHVybiBgJHtnZXRNYXhCdWZmZXJNZXNzYWdlKG9yaWdpbmFsRXJyb3IsIG1heEJ1ZmZlcil9JHtmb3JjZWZ1bFN1ZmZpeH1gO1xuXHR9XG5cblx0aWYgKGVycm9yQ29kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGBDb21tYW5kIGZhaWxlZCB3aXRoICR7ZXJyb3JDb2RlfSR7Zm9yY2VmdWxTdWZmaXh9YDtcblx0fVxuXG5cdGlmIChpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkKSB7XG5cdFx0cmV0dXJuIGBDb21tYW5kIHdhcyBraWxsZWQgd2l0aCAke2tpbGxTaWduYWx9ICgke2dldFNpZ25hbERlc2NyaXB0aW9uKGtpbGxTaWduYWwpfSkke2ZvcmNlZnVsU3VmZml4fWA7XG5cdH1cblxuXHRpZiAoc2lnbmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gYENvbW1hbmQgd2FzIGtpbGxlZCB3aXRoICR7c2lnbmFsfSAoJHtzaWduYWxEZXNjcmlwdGlvbn0pYDtcblx0fVxuXG5cdGlmIChleGl0Q29kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGBDb21tYW5kIGZhaWxlZCB3aXRoIGV4aXQgY29kZSAke2V4aXRDb2RlfWA7XG5cdH1cblxuXHRyZXR1cm4gJ0NvbW1hbmQgZmFpbGVkJztcbn07XG5cbmNvbnN0IGdldEZvcmNlZnVsU3VmZml4ID0gKGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQsIGZvcmNlS2lsbEFmdGVyRGVsYXkpID0+IGlzRm9yY2VmdWxseVRlcm1pbmF0ZWRcblx0PyBgIGFuZCB3YXMgZm9yY2VmdWxseSB0ZXJtaW5hdGVkIGFmdGVyICR7Zm9yY2VLaWxsQWZ0ZXJEZWxheX0gbWlsbGlzZWNvbmRzYFxuXHQ6ICcnO1xuXG5jb25zdCBnZXRPcmlnaW5hbE1lc3NhZ2UgPSAob3JpZ2luYWxFcnJvciwgY3dkKSA9PiB7XG5cdGlmIChvcmlnaW5hbEVycm9yIGluc3RhbmNlb2YgRGlzY2FyZGVkRXJyb3IpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBvcmlnaW5hbE1lc3NhZ2UgPSBpc0V4ZWNhRXJyb3Iob3JpZ2luYWxFcnJvcilcblx0XHQ/IG9yaWdpbmFsRXJyb3Iub3JpZ2luYWxNZXNzYWdlXG5cdFx0OiBTdHJpbmcob3JpZ2luYWxFcnJvcj8ubWVzc2FnZSA/PyBvcmlnaW5hbEVycm9yKTtcblx0Y29uc3QgZXNjYXBlZE9yaWdpbmFsTWVzc2FnZSA9IGVzY2FwZUxpbmVzKGZpeEN3ZEVycm9yKG9yaWdpbmFsTWVzc2FnZSwgY3dkKSk7XG5cdHJldHVybiBlc2NhcGVkT3JpZ2luYWxNZXNzYWdlID09PSAnJyA/IHVuZGVmaW5lZCA6IGVzY2FwZWRPcmlnaW5hbE1lc3NhZ2U7XG59O1xuXG5jb25zdCBzZXJpYWxpemVJcGNNZXNzYWdlID0gaXBjTWVzc2FnZSA9PiB0eXBlb2YgaXBjTWVzc2FnZSA9PT0gJ3N0cmluZydcblx0PyBpcGNNZXNzYWdlXG5cdDogaW5zcGVjdChpcGNNZXNzYWdlKTtcblxuY29uc3Qgc2VyaWFsaXplTWVzc2FnZVBhcnQgPSBtZXNzYWdlUGFydCA9PiBBcnJheS5pc0FycmF5KG1lc3NhZ2VQYXJ0KVxuXHQ/IG1lc3NhZ2VQYXJ0Lm1hcChtZXNzYWdlSXRlbSA9PiBzdHJpcEZpbmFsTmV3bGluZShzZXJpYWxpemVNZXNzYWdlSXRlbShtZXNzYWdlSXRlbSkpKS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcblx0OiBzZXJpYWxpemVNZXNzYWdlSXRlbShtZXNzYWdlUGFydCk7XG5cbmNvbnN0IHNlcmlhbGl6ZU1lc3NhZ2VJdGVtID0gbWVzc2FnZUl0ZW0gPT4ge1xuXHRpZiAodHlwZW9mIG1lc3NhZ2VJdGVtID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBtZXNzYWdlSXRlbTtcblx0fVxuXG5cdGlmIChpc1VpbnQ4QXJyYXkobWVzc2FnZUl0ZW0pKSB7XG5cdFx0cmV0dXJuIHVpbnQ4QXJyYXlUb1N0cmluZyhtZXNzYWdlSXRlbSk7XG5cdH1cblxuXHRyZXR1cm4gJyc7XG59O1xuIiwgImltcG9ydCB7Z2V0U2lnbmFsRGVzY3JpcHRpb259IGZyb20gJy4uL3Rlcm1pbmF0ZS9zaWduYWwuanMnO1xuaW1wb3J0IHtnZXREdXJhdGlvbk1zfSBmcm9tICcuL2R1cmF0aW9uLmpzJztcbmltcG9ydCB7Z2V0RmluYWxFcnJvcn0gZnJvbSAnLi9maW5hbC1lcnJvci5qcyc7XG5pbXBvcnQge2NyZWF0ZU1lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2UuanMnO1xuXG4vLyBPYmplY3QgcmV0dXJuZWQgb24gc3VicHJvY2VzcyBzdWNjZXNzXG5leHBvcnQgY29uc3QgbWFrZVN1Y2Nlc3NSZXN1bHQgPSAoe1xuXHRjb21tYW5kLFxuXHRlc2NhcGVkQ29tbWFuZCxcblx0c3RkaW8sXG5cdGFsbCxcblx0aXBjT3V0cHV0LFxuXHRvcHRpb25zOiB7Y3dkfSxcblx0c3RhcnRUaW1lLFxufSkgPT4gb21pdFVuZGVmaW5lZFByb3BlcnRpZXMoe1xuXHRjb21tYW5kLFxuXHRlc2NhcGVkQ29tbWFuZCxcblx0Y3dkLFxuXHRkdXJhdGlvbk1zOiBnZXREdXJhdGlvbk1zKHN0YXJ0VGltZSksXG5cdGZhaWxlZDogZmFsc2UsXG5cdHRpbWVkT3V0OiBmYWxzZSxcblx0aXNDYW5jZWxlZDogZmFsc2UsXG5cdGlzR3JhY2VmdWxseUNhbmNlbGVkOiBmYWxzZSxcblx0aXNUZXJtaW5hdGVkOiBmYWxzZSxcblx0aXNNYXhCdWZmZXI6IGZhbHNlLFxuXHRpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkOiBmYWxzZSxcblx0ZXhpdENvZGU6IDAsXG5cdHN0ZG91dDogc3RkaW9bMV0sXG5cdHN0ZGVycjogc3RkaW9bMl0sXG5cdGFsbCxcblx0c3RkaW8sXG5cdGlwY091dHB1dCxcblx0cGlwZWRGcm9tOiBbXSxcbn0pO1xuXG4vLyBPYmplY3QgcmV0dXJuZWQgb24gc3VicHJvY2VzcyBmYWlsdXJlIGJlZm9yZSBzcGF3bmluZ1xuZXhwb3J0IGNvbnN0IG1ha2VFYXJseUVycm9yID0gKHtcblx0ZXJyb3IsXG5cdGNvbW1hbmQsXG5cdGVzY2FwZWRDb21tYW5kLFxuXHRmaWxlRGVzY3JpcHRvcnMsXG5cdG9wdGlvbnMsXG5cdHN0YXJ0VGltZSxcblx0aXNTeW5jLFxufSkgPT4gbWFrZUVycm9yKHtcblx0ZXJyb3IsXG5cdGNvbW1hbmQsXG5cdGVzY2FwZWRDb21tYW5kLFxuXHRzdGFydFRpbWUsXG5cdHRpbWVkT3V0OiBmYWxzZSxcblx0aXNDYW5jZWxlZDogZmFsc2UsXG5cdGlzR3JhY2VmdWxseUNhbmNlbGVkOiBmYWxzZSxcblx0aXNNYXhCdWZmZXI6IGZhbHNlLFxuXHRpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkOiBmYWxzZSxcblx0c3RkaW86IEFycmF5LmZyb20oe2xlbmd0aDogZmlsZURlc2NyaXB0b3JzLmxlbmd0aH0pLFxuXHRpcGNPdXRwdXQ6IFtdLFxuXHRvcHRpb25zLFxuXHRpc1N5bmMsXG59KTtcblxuLy8gT2JqZWN0IHJldHVybmVkIG9uIHN1YnByb2Nlc3MgZmFpbHVyZVxuZXhwb3J0IGNvbnN0IG1ha2VFcnJvciA9ICh7XG5cdGVycm9yOiBvcmlnaW5hbEVycm9yLFxuXHRjb21tYW5kLFxuXHRlc2NhcGVkQ29tbWFuZCxcblx0c3RhcnRUaW1lLFxuXHR0aW1lZE91dCxcblx0aXNDYW5jZWxlZCxcblx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQsXG5cdGlzTWF4QnVmZmVyLFxuXHRpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkLFxuXHRleGl0Q29kZTogcmF3RXhpdENvZGUsXG5cdHNpZ25hbDogcmF3U2lnbmFsLFxuXHRzdGRpbyxcblx0YWxsLFxuXHRpcGNPdXRwdXQsXG5cdG9wdGlvbnM6IHtcblx0XHR0aW1lb3V0RHVyYXRpb24sXG5cdFx0dGltZW91dCA9IHRpbWVvdXREdXJhdGlvbixcblx0XHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRcdGtpbGxTaWduYWwsXG5cdFx0Y3dkLFxuXHRcdG1heEJ1ZmZlcixcblx0fSxcblx0aXNTeW5jLFxufSkgPT4ge1xuXHRjb25zdCB7ZXhpdENvZGUsIHNpZ25hbCwgc2lnbmFsRGVzY3JpcHRpb259ID0gbm9ybWFsaXplRXhpdFBheWxvYWQocmF3RXhpdENvZGUsIHJhd1NpZ25hbCk7XG5cdGNvbnN0IHtvcmlnaW5hbE1lc3NhZ2UsIHNob3J0TWVzc2FnZSwgbWVzc2FnZX0gPSBjcmVhdGVNZXNzYWdlcyh7XG5cdFx0c3RkaW8sXG5cdFx0YWxsLFxuXHRcdGlwY091dHB1dCxcblx0XHRvcmlnaW5hbEVycm9yLFxuXHRcdHNpZ25hbCxcblx0XHRzaWduYWxEZXNjcmlwdGlvbixcblx0XHRleGl0Q29kZSxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHR0aW1lZE91dCxcblx0XHRpc0NhbmNlbGVkLFxuXHRcdGlzR3JhY2VmdWxseUNhbmNlbGVkLFxuXHRcdGlzTWF4QnVmZmVyLFxuXHRcdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQsXG5cdFx0Zm9yY2VLaWxsQWZ0ZXJEZWxheSxcblx0XHRraWxsU2lnbmFsLFxuXHRcdG1heEJ1ZmZlcixcblx0XHR0aW1lb3V0LFxuXHRcdGN3ZCxcblx0fSk7XG5cdGNvbnN0IGVycm9yID0gZ2V0RmluYWxFcnJvcihvcmlnaW5hbEVycm9yLCBtZXNzYWdlLCBpc1N5bmMpO1xuXHRPYmplY3QuYXNzaWduKGVycm9yLCBnZXRFcnJvclByb3BlcnRpZXMoe1xuXHRcdGVycm9yLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0c3RhcnRUaW1lLFxuXHRcdHRpbWVkT3V0LFxuXHRcdGlzQ2FuY2VsZWQsXG5cdFx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQsXG5cdFx0aXNNYXhCdWZmZXIsXG5cdFx0aXNGb3JjZWZ1bGx5VGVybWluYXRlZCxcblx0XHRleGl0Q29kZSxcblx0XHRzaWduYWwsXG5cdFx0c2lnbmFsRGVzY3JpcHRpb24sXG5cdFx0c3RkaW8sXG5cdFx0YWxsLFxuXHRcdGlwY091dHB1dCxcblx0XHRjd2QsXG5cdFx0b3JpZ2luYWxNZXNzYWdlLFxuXHRcdHNob3J0TWVzc2FnZSxcblx0fSkpO1xuXHRyZXR1cm4gZXJyb3I7XG59O1xuXG5jb25zdCBnZXRFcnJvclByb3BlcnRpZXMgPSAoe1xuXHRlcnJvcixcblx0Y29tbWFuZCxcblx0ZXNjYXBlZENvbW1hbmQsXG5cdHN0YXJ0VGltZSxcblx0dGltZWRPdXQsXG5cdGlzQ2FuY2VsZWQsXG5cdGlzR3JhY2VmdWxseUNhbmNlbGVkLFxuXHRpc01heEJ1ZmZlcixcblx0aXNGb3JjZWZ1bGx5VGVybWluYXRlZCxcblx0ZXhpdENvZGUsXG5cdHNpZ25hbCxcblx0c2lnbmFsRGVzY3JpcHRpb24sXG5cdHN0ZGlvLFxuXHRhbGwsXG5cdGlwY091dHB1dCxcblx0Y3dkLFxuXHRvcmlnaW5hbE1lc3NhZ2UsXG5cdHNob3J0TWVzc2FnZSxcbn0pID0+IG9taXRVbmRlZmluZWRQcm9wZXJ0aWVzKHtcblx0c2hvcnRNZXNzYWdlLFxuXHRvcmlnaW5hbE1lc3NhZ2UsXG5cdGNvbW1hbmQsXG5cdGVzY2FwZWRDb21tYW5kLFxuXHRjd2QsXG5cdGR1cmF0aW9uTXM6IGdldER1cmF0aW9uTXMoc3RhcnRUaW1lKSxcblx0ZmFpbGVkOiB0cnVlLFxuXHR0aW1lZE91dCxcblx0aXNDYW5jZWxlZCxcblx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQsXG5cdGlzVGVybWluYXRlZDogc2lnbmFsICE9PSB1bmRlZmluZWQsXG5cdGlzTWF4QnVmZmVyLFxuXHRpc0ZvcmNlZnVsbHlUZXJtaW5hdGVkLFxuXHRleGl0Q29kZSxcblx0c2lnbmFsLFxuXHRzaWduYWxEZXNjcmlwdGlvbixcblx0Y29kZTogZXJyb3IuY2F1c2U/LmNvZGUsXG5cdHN0ZG91dDogc3RkaW9bMV0sXG5cdHN0ZGVycjogc3RkaW9bMl0sXG5cdGFsbCxcblx0c3RkaW8sXG5cdGlwY091dHB1dCxcblx0cGlwZWRGcm9tOiBbXSxcbn0pO1xuXG5jb25zdCBvbWl0VW5kZWZpbmVkUHJvcGVydGllcyA9IHJlc3VsdCA9PiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMocmVzdWx0KS5maWx0ZXIoKFssIHZhbHVlXSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCkpO1xuXG4vLyBgc2lnbmFsYCBhbmQgYGV4aXRDb2RlYCBlbWl0dGVkIG9uIGBzdWJwcm9jZXNzLm9uKCdleGl0JylgIGV2ZW50IGNhbiBiZSBgbnVsbGAuXG4vLyBXZSBub3JtYWxpemUgdGhlbSB0byBgdW5kZWZpbmVkYFxuY29uc3Qgbm9ybWFsaXplRXhpdFBheWxvYWQgPSAocmF3RXhpdENvZGUsIHJhd1NpZ25hbCkgPT4ge1xuXHRjb25zdCBleGl0Q29kZSA9IHJhd0V4aXRDb2RlID09PSBudWxsID8gdW5kZWZpbmVkIDogcmF3RXhpdENvZGU7XG5cdGNvbnN0IHNpZ25hbCA9IHJhd1NpZ25hbCA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IHJhd1NpZ25hbDtcblx0Y29uc3Qgc2lnbmFsRGVzY3JpcHRpb24gPSBzaWduYWwgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldFNpZ25hbERlc2NyaXB0aW9uKHJhd1NpZ25hbCk7XG5cdHJldHVybiB7ZXhpdENvZGUsIHNpZ25hbCwgc2lnbmFsRGVzY3JpcHRpb259O1xufTtcbiIsICJjb25zdCB0b1plcm9JZkluZmluaXR5ID0gdmFsdWUgPT4gTnVtYmVyLmlzRmluaXRlKHZhbHVlKSA/IHZhbHVlIDogMDtcblxuZnVuY3Rpb24gcGFyc2VOdW1iZXIobWlsbGlzZWNvbmRzKSB7XG5cdHJldHVybiB7XG5cdFx0ZGF5czogTWF0aC50cnVuYyhtaWxsaXNlY29uZHMgLyA4Nl80MDBfMDAwKSxcblx0XHRob3VyczogTWF0aC50cnVuYyhtaWxsaXNlY29uZHMgLyAzXzYwMF8wMDAgJSAyNCksXG5cdFx0bWludXRlczogTWF0aC50cnVuYyhtaWxsaXNlY29uZHMgLyA2MF8wMDAgJSA2MCksXG5cdFx0c2Vjb25kczogTWF0aC50cnVuYyhtaWxsaXNlY29uZHMgLyAxMDAwICUgNjApLFxuXHRcdG1pbGxpc2Vjb25kczogTWF0aC50cnVuYyhtaWxsaXNlY29uZHMgJSAxMDAwKSxcblx0XHRtaWNyb3NlY29uZHM6IE1hdGgudHJ1bmModG9aZXJvSWZJbmZpbml0eShtaWxsaXNlY29uZHMgKiAxMDAwKSAlIDEwMDApLFxuXHRcdG5hbm9zZWNvbmRzOiBNYXRoLnRydW5jKHRvWmVyb0lmSW5maW5pdHkobWlsbGlzZWNvbmRzICogMWU2KSAlIDEwMDApLFxuXHR9O1xufVxuXG5mdW5jdGlvbiBwYXJzZUJpZ2ludChtaWxsaXNlY29uZHMpIHtcblx0cmV0dXJuIHtcblx0XHRkYXlzOiBtaWxsaXNlY29uZHMgLyA4Nl80MDBfMDAwbixcblx0XHRob3VyczogbWlsbGlzZWNvbmRzIC8gM182MDBfMDAwbiAlIDI0bixcblx0XHRtaW51dGVzOiBtaWxsaXNlY29uZHMgLyA2MF8wMDBuICUgNjBuLFxuXHRcdHNlY29uZHM6IG1pbGxpc2Vjb25kcyAvIDEwMDBuICUgNjBuLFxuXHRcdG1pbGxpc2Vjb25kczogbWlsbGlzZWNvbmRzICUgMTAwMG4sXG5cdFx0bWljcm9zZWNvbmRzOiAwbixcblx0XHRuYW5vc2Vjb25kczogMG4sXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlTWlsbGlzZWNvbmRzKG1pbGxpc2Vjb25kcykge1xuXHRzd2l0Y2ggKHR5cGVvZiBtaWxsaXNlY29uZHMpIHtcblx0XHRjYXNlICdudW1iZXInOiB7XG5cdFx0XHRpZiAoTnVtYmVyLmlzRmluaXRlKG1pbGxpc2Vjb25kcykpIHtcblx0XHRcdFx0cmV0dXJuIHBhcnNlTnVtYmVyKG1pbGxpc2Vjb25kcyk7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGNhc2UgJ2JpZ2ludCc6IHtcblx0XHRcdHJldHVybiBwYXJzZUJpZ2ludChtaWxsaXNlY29uZHMpO1xuXHRcdH1cblxuXHRcdC8vIE5vIGRlZmF1bHRcblx0fVxuXG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgZmluaXRlIG51bWJlciBvciBiaWdpbnQnKTtcbn1cbiIsICJpbXBvcnQgcGFyc2VNaWxsaXNlY29uZHMgZnJvbSAncGFyc2UtbXMnO1xuXG5jb25zdCBpc1plcm8gPSB2YWx1ZSA9PiB2YWx1ZSA9PT0gMCB8fCB2YWx1ZSA9PT0gMG47XG5jb25zdCBwbHVyYWxpemUgPSAod29yZCwgY291bnQpID0+IChjb3VudCA9PT0gMSB8fCBjb3VudCA9PT0gMW4pID8gd29yZCA6IGAke3dvcmR9c2A7XG5cbmNvbnN0IFNFQ09ORF9ST1VORElOR19FUFNJTE9OID0gMC4wMDBfMDAwXzE7XG5jb25zdCBPTkVfREFZX0lOX01JTExJU0VDT05EUyA9IDI0biAqIDYwbiAqIDYwbiAqIDEwMDBuO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmV0dHlNaWxsaXNlY29uZHMobWlsbGlzZWNvbmRzLCBvcHRpb25zKSB7XG5cdGNvbnN0IGlzQmlnSW50ID0gdHlwZW9mIG1pbGxpc2Vjb25kcyA9PT0gJ2JpZ2ludCc7XG5cdGlmICghaXNCaWdJbnQgJiYgIU51bWJlci5pc0Zpbml0ZShtaWxsaXNlY29uZHMpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBmaW5pdGUgbnVtYmVyIG9yIGJpZ2ludCcpO1xuXHR9XG5cblx0b3B0aW9ucyA9IHsuLi5vcHRpb25zfTtcblxuXHRjb25zdCBzaWduID0gbWlsbGlzZWNvbmRzIDwgMCA/ICctJyA6ICcnO1xuXHRtaWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHMgPCAwID8gLW1pbGxpc2Vjb25kcyA6IG1pbGxpc2Vjb25kczsgLy8gQ2Fubm90IHVzZSBgTWF0aC5hYnMoKWAgYmVjYXVzZSBvZiBCaWdJbnQgc3VwcG9ydC5cblxuXHRpZiAob3B0aW9ucy5jb2xvbk5vdGF0aW9uKSB7XG5cdFx0b3B0aW9ucy5jb21wYWN0ID0gZmFsc2U7XG5cdFx0b3B0aW9ucy5mb3JtYXRTdWJNaWxsaXNlY29uZHMgPSBmYWxzZTtcblx0XHRvcHRpb25zLnNlcGFyYXRlTWlsbGlzZWNvbmRzID0gZmFsc2U7XG5cdFx0b3B0aW9ucy52ZXJib3NlID0gZmFsc2U7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5jb21wYWN0KSB7XG5cdFx0b3B0aW9ucy51bml0Q291bnQgPSAxO1xuXHRcdG9wdGlvbnMuc2Vjb25kc0RlY2ltYWxEaWdpdHMgPSAwO1xuXHRcdG9wdGlvbnMubWlsbGlzZWNvbmRzRGVjaW1hbERpZ2l0cyA9IDA7XG5cdH1cblxuXHRsZXQgcmVzdWx0ID0gW107XG5cblx0Y29uc3QgZmxvb3JEZWNpbWFscyA9ICh2YWx1ZSwgZGVjaW1hbERpZ2l0cykgPT4ge1xuXHRcdGNvbnN0IGZsb29yZWRJbnRlcmltVmFsdWUgPSBNYXRoLmZsb29yKCh2YWx1ZSAqICgxMCAqKiBkZWNpbWFsRGlnaXRzKSkgKyBTRUNPTkRfUk9VTkRJTkdfRVBTSUxPTik7XG5cdFx0Y29uc3QgZmxvb3JlZFZhbHVlID0gTWF0aC5yb3VuZChmbG9vcmVkSW50ZXJpbVZhbHVlKSAvICgxMCAqKiBkZWNpbWFsRGlnaXRzKTtcblx0XHRyZXR1cm4gZmxvb3JlZFZhbHVlLnRvRml4ZWQoZGVjaW1hbERpZ2l0cyk7XG5cdH07XG5cblx0Y29uc3QgYWRkID0gKHZhbHVlLCBsb25nLCBzaG9ydCwgdmFsdWVTdHJpbmcpID0+IHtcblx0XHRpZiAoXG5cdFx0XHQocmVzdWx0Lmxlbmd0aCA9PT0gMCB8fCAhb3B0aW9ucy5jb2xvbk5vdGF0aW9uKVxuXHRcdFx0JiYgaXNaZXJvKHZhbHVlKVxuXHRcdFx0JiYgIShvcHRpb25zLmNvbG9uTm90YXRpb24gJiYgc2hvcnQgPT09ICdtJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YWx1ZVN0cmluZyA/Pz0gU3RyaW5nKHZhbHVlKTtcblx0XHRpZiAob3B0aW9ucy5jb2xvbk5vdGF0aW9uKSB7XG5cdFx0XHRjb25zdCB3aG9sZURpZ2l0cyA9IHZhbHVlU3RyaW5nLmluY2x1ZGVzKCcuJykgPyB2YWx1ZVN0cmluZy5zcGxpdCgnLicpWzBdLmxlbmd0aCA6IHZhbHVlU3RyaW5nLmxlbmd0aDtcblx0XHRcdGNvbnN0IG1pbkxlbmd0aCA9IHJlc3VsdC5sZW5ndGggPiAwID8gMiA6IDE7XG5cdFx0XHR2YWx1ZVN0cmluZyA9ICcwJy5yZXBlYXQoTWF0aC5tYXgoMCwgbWluTGVuZ3RoIC0gd2hvbGVEaWdpdHMpKSArIHZhbHVlU3RyaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZVN0cmluZyArPSBvcHRpb25zLnZlcmJvc2UgPyAnICcgKyBwbHVyYWxpemUobG9uZywgdmFsdWUpIDogc2hvcnQ7XG5cdFx0fVxuXG5cdFx0cmVzdWx0LnB1c2godmFsdWVTdHJpbmcpO1xuXHR9O1xuXG5cdGNvbnN0IHBhcnNlZCA9IHBhcnNlTWlsbGlzZWNvbmRzKG1pbGxpc2Vjb25kcyk7XG5cdGNvbnN0IGRheXMgPSBCaWdJbnQocGFyc2VkLmRheXMpO1xuXG5cdGlmIChvcHRpb25zLmhpZGVZZWFyQW5kRGF5cykge1xuXHRcdGFkZCgoQmlnSW50KGRheXMpICogMjRuKSArIEJpZ0ludChwYXJzZWQuaG91cnMpLCAnaG91cicsICdoJyk7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG9wdGlvbnMuaGlkZVllYXIpIHtcblx0XHRcdGFkZChkYXlzLCAnZGF5JywgJ2QnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWRkKGRheXMgLyAzNjVuLCAneWVhcicsICd5Jyk7XG5cdFx0XHRhZGQoZGF5cyAlIDM2NW4sICdkYXknLCAnZCcpO1xuXHRcdH1cblxuXHRcdGFkZChOdW1iZXIocGFyc2VkLmhvdXJzKSwgJ2hvdXInLCAnaCcpO1xuXHR9XG5cblx0YWRkKE51bWJlcihwYXJzZWQubWludXRlcyksICdtaW51dGUnLCAnbScpO1xuXG5cdGlmICghb3B0aW9ucy5oaWRlU2Vjb25kcykge1xuXHRcdGlmIChcblx0XHRcdG9wdGlvbnMuc2VwYXJhdGVNaWxsaXNlY29uZHNcblx0XHRcdHx8IG9wdGlvbnMuZm9ybWF0U3ViTWlsbGlzZWNvbmRzXG5cdFx0XHR8fCAoIW9wdGlvbnMuY29sb25Ob3RhdGlvbiAmJiBtaWxsaXNlY29uZHMgPCAxMDAwKVxuXHRcdCkge1xuXHRcdFx0Y29uc3Qgc2Vjb25kcyA9IE51bWJlcihwYXJzZWQuc2Vjb25kcyk7XG5cdFx0XHRjb25zdCBtaWxsaXNlY29uZHMgPSBOdW1iZXIocGFyc2VkLm1pbGxpc2Vjb25kcyk7XG5cdFx0XHRjb25zdCBtaWNyb3NlY29uZHMgPSBOdW1iZXIocGFyc2VkLm1pY3Jvc2Vjb25kcyk7XG5cdFx0XHRjb25zdCBuYW5vc2Vjb25kcyA9IE51bWJlcihwYXJzZWQubmFub3NlY29uZHMpO1xuXG5cdFx0XHRhZGQoc2Vjb25kcywgJ3NlY29uZCcsICdzJyk7XG5cblx0XHRcdGlmIChvcHRpb25zLmZvcm1hdFN1Yk1pbGxpc2Vjb25kcykge1xuXHRcdFx0XHRhZGQobWlsbGlzZWNvbmRzLCAnbWlsbGlzZWNvbmQnLCAnbXMnKTtcblx0XHRcdFx0YWRkKG1pY3Jvc2Vjb25kcywgJ21pY3Jvc2Vjb25kJywgJ1x1MDBCNXMnKTtcblx0XHRcdFx0YWRkKG5hbm9zZWNvbmRzLCAnbmFub3NlY29uZCcsICducycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgbWlsbGlzZWNvbmRzQW5kQmVsb3dcblx0XHRcdFx0XHQ9IG1pbGxpc2Vjb25kc1xuXHRcdFx0XHRcdCsgKG1pY3Jvc2Vjb25kcyAvIDEwMDApXG5cdFx0XHRcdFx0KyAobmFub3NlY29uZHMgLyAxZTYpO1xuXG5cdFx0XHRcdGNvbnN0IG1pbGxpc2Vjb25kc0RlY2ltYWxEaWdpdHNcblx0XHRcdFx0XHQ9IHR5cGVvZiBvcHRpb25zLm1pbGxpc2Vjb25kc0RlY2ltYWxEaWdpdHMgPT09ICdudW1iZXInXG5cdFx0XHRcdFx0XHQ/IG9wdGlvbnMubWlsbGlzZWNvbmRzRGVjaW1hbERpZ2l0c1xuXHRcdFx0XHRcdFx0OiAwO1xuXG5cdFx0XHRcdGNvbnN0IHJvdW5kZWRNaWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHNBbmRCZWxvdyA+PSAxXG5cdFx0XHRcdFx0PyBNYXRoLnJvdW5kKG1pbGxpc2Vjb25kc0FuZEJlbG93KVxuXHRcdFx0XHRcdDogTWF0aC5jZWlsKG1pbGxpc2Vjb25kc0FuZEJlbG93KTtcblxuXHRcdFx0XHRjb25zdCBtaWxsaXNlY29uZHNTdHJpbmcgPSBtaWxsaXNlY29uZHNEZWNpbWFsRGlnaXRzXG5cdFx0XHRcdFx0PyBtaWxsaXNlY29uZHNBbmRCZWxvdy50b0ZpeGVkKG1pbGxpc2Vjb25kc0RlY2ltYWxEaWdpdHMpXG5cdFx0XHRcdFx0OiByb3VuZGVkTWlsbGlzZWNvbmRzO1xuXG5cdFx0XHRcdGFkZChcblx0XHRcdFx0XHROdW1iZXIucGFyc2VGbG9hdChtaWxsaXNlY29uZHNTdHJpbmcpLFxuXHRcdFx0XHRcdCdtaWxsaXNlY29uZCcsXG5cdFx0XHRcdFx0J21zJyxcblx0XHRcdFx0XHRtaWxsaXNlY29uZHNTdHJpbmcsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHNlY29uZHMgPSAoXG5cdFx0XHRcdChpc0JpZ0ludCA/IE51bWJlcihtaWxsaXNlY29uZHMgJSBPTkVfREFZX0lOX01JTExJU0VDT05EUykgOiBtaWxsaXNlY29uZHMpXG5cdFx0XHRcdC8gMTAwMFxuXHRcdFx0KSAlIDYwO1xuXHRcdFx0Y29uc3Qgc2Vjb25kc0RlY2ltYWxEaWdpdHNcblx0XHRcdFx0PSB0eXBlb2Ygb3B0aW9ucy5zZWNvbmRzRGVjaW1hbERpZ2l0cyA9PT0gJ251bWJlcidcblx0XHRcdFx0XHQ/IG9wdGlvbnMuc2Vjb25kc0RlY2ltYWxEaWdpdHNcblx0XHRcdFx0XHQ6IDE7XG5cdFx0XHRjb25zdCBzZWNvbmRzRml4ZWQgPSBmbG9vckRlY2ltYWxzKHNlY29uZHMsIHNlY29uZHNEZWNpbWFsRGlnaXRzKTtcblx0XHRcdGNvbnN0IHNlY29uZHNTdHJpbmcgPSBvcHRpb25zLmtlZXBEZWNpbWFsc09uV2hvbGVTZWNvbmRzXG5cdFx0XHRcdD8gc2Vjb25kc0ZpeGVkXG5cdFx0XHRcdDogc2Vjb25kc0ZpeGVkLnJlcGxhY2UoL1xcLjArJC8sICcnKTtcblx0XHRcdGFkZChOdW1iZXIucGFyc2VGbG9hdChzZWNvbmRzU3RyaW5nKSwgJ3NlY29uZCcsICdzJywgc2Vjb25kc1N0cmluZyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gc2lnbiArICcwJyArIChvcHRpb25zLnZlcmJvc2UgPyAnIG1pbGxpc2Vjb25kcycgOiAnbXMnKTtcblx0fVxuXG5cdGNvbnN0IHNlcGFyYXRvciA9IG9wdGlvbnMuY29sb25Ob3RhdGlvbiA/ICc6JyA6ICcgJztcblx0aWYgKHR5cGVvZiBvcHRpb25zLnVuaXRDb3VudCA9PT0gJ251bWJlcicpIHtcblx0XHRyZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgTWF0aC5tYXgob3B0aW9ucy51bml0Q291bnQsIDEpKTtcblx0fVxuXG5cdHJldHVybiBzaWduICsgcmVzdWx0LmpvaW4oc2VwYXJhdG9yKTtcbn1cbiIsICJpbXBvcnQge3ZlcmJvc2VMb2d9IGZyb20gJy4vbG9nLmpzJztcblxuLy8gV2hlbiBgdmVyYm9zZWAgaXMgYHNob3J0fGZ1bGx8Y3VzdG9tYCwgcHJpbnQgZWFjaCBjb21tYW5kJ3MgZXJyb3Igd2hlbiBpdCBmYWlsc1xuZXhwb3J0IGNvbnN0IGxvZ0Vycm9yID0gKHJlc3VsdCwgdmVyYm9zZUluZm8pID0+IHtcblx0aWYgKHJlc3VsdC5mYWlsZWQpIHtcblx0XHR2ZXJib3NlTG9nKHtcblx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR2ZXJib3NlTWVzc2FnZTogcmVzdWx0LnNob3J0TWVzc2FnZSxcblx0XHRcdHZlcmJvc2VJbmZvLFxuXHRcdFx0cmVzdWx0LFxuXHRcdH0pO1xuXHR9XG59O1xuIiwgImltcG9ydCBwcmV0dHlNcyBmcm9tICdwcmV0dHktbXMnO1xuaW1wb3J0IHtpc1ZlcmJvc2V9IGZyb20gJy4vdmFsdWVzLmpzJztcbmltcG9ydCB7dmVyYm9zZUxvZ30gZnJvbSAnLi9sb2cuanMnO1xuaW1wb3J0IHtsb2dFcnJvcn0gZnJvbSAnLi9lcnJvci5qcyc7XG5cbi8vIFdoZW4gYHZlcmJvc2VgIGlzIGBzaG9ydHxmdWxsfGN1c3RvbWAsIHByaW50IGVhY2ggY29tbWFuZCdzIGNvbXBsZXRpb24sIGR1cmF0aW9uIGFuZCBlcnJvclxuZXhwb3J0IGNvbnN0IGxvZ1Jlc3VsdCA9IChyZXN1bHQsIHZlcmJvc2VJbmZvKSA9PiB7XG5cdGlmICghaXNWZXJib3NlKHZlcmJvc2VJbmZvKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxvZ0Vycm9yKHJlc3VsdCwgdmVyYm9zZUluZm8pO1xuXHRsb2dEdXJhdGlvbihyZXN1bHQsIHZlcmJvc2VJbmZvKTtcbn07XG5cbmNvbnN0IGxvZ0R1cmF0aW9uID0gKHJlc3VsdCwgdmVyYm9zZUluZm8pID0+IHtcblx0Y29uc3QgdmVyYm9zZU1lc3NhZ2UgPSBgKGRvbmUgaW4gJHtwcmV0dHlNcyhyZXN1bHQuZHVyYXRpb25Ncyl9KWA7XG5cdHZlcmJvc2VMb2coe1xuXHRcdHR5cGU6ICdkdXJhdGlvbicsXG5cdFx0dmVyYm9zZU1lc3NhZ2UsXG5cdFx0dmVyYm9zZUluZm8sXG5cdFx0cmVzdWx0LFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHtsb2dSZXN1bHR9IGZyb20gJy4uL3ZlcmJvc2UvY29tcGxldGUuanMnO1xuXG4vLyBBcHBsaWVzIHRoZSBgcmVqZWN0YCBvcHRpb24uXG4vLyBBbHNvIHByaW50IHRoZSBmaW5hbCBsb2cgbGluZSB3aXRoIGB2ZXJib3NlYC5cbmV4cG9ydCBjb25zdCBoYW5kbGVSZXN1bHQgPSAocmVzdWx0LCB2ZXJib3NlSW5mbywge3JlamVjdH0pID0+IHtcblx0bG9nUmVzdWx0KHJlc3VsdCwgdmVyYm9zZUluZm8pO1xuXG5cdGlmIChyZXN1bHQuZmFpbGVkICYmIHJlamVjdCkge1xuXHRcdHRocm93IHJlc3VsdDtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwgImltcG9ydCB7aXNTdHJlYW0gYXMgaXNOb2RlU3RyZWFtLCBpc0R1cGxleFN0cmVhbX0gZnJvbSAnaXMtc3RyZWFtJztcbmltcG9ydCBpc1BsYWluT2JqIGZyb20gJ2lzLXBsYWluLW9iaic7XG5pbXBvcnQge2lzVWludDhBcnJheX0gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5cbi8vIFRoZSBgc3RkaW5gL2BzdGRvdXRgL2BzdGRlcnJgIG9wdGlvbiBjYW4gYmUgb2YgbWFueSB0eXBlcy4gVGhpcyBkZXRlY3RzIGl0LlxuZXhwb3J0IGNvbnN0IGdldFN0ZGlvSXRlbVR5cGUgPSAodmFsdWUsIG9wdGlvbk5hbWUpID0+IHtcblx0aWYgKGlzQXN5bmNHZW5lcmF0b3IodmFsdWUpKSB7XG5cdFx0cmV0dXJuICdhc3luY0dlbmVyYXRvcic7XG5cdH1cblxuXHRpZiAoaXNTeW5jR2VuZXJhdG9yKHZhbHVlKSkge1xuXHRcdHJldHVybiAnZ2VuZXJhdG9yJztcblx0fVxuXG5cdGlmIChpc1VybCh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ2ZpbGVVcmwnO1xuXHR9XG5cblx0aWYgKGlzRmlsZVBhdGhPYmplY3QodmFsdWUpKSB7XG5cdFx0cmV0dXJuICdmaWxlUGF0aCc7XG5cdH1cblxuXHRpZiAoaXNXZWJTdHJlYW0odmFsdWUpKSB7XG5cdFx0cmV0dXJuICd3ZWJTdHJlYW0nO1xuXHR9XG5cblx0aWYgKGlzTm9kZVN0cmVhbSh2YWx1ZSwge2NoZWNrT3BlbjogZmFsc2V9KSkge1xuXHRcdHJldHVybiAnbmF0aXZlJztcblx0fVxuXG5cdGlmIChpc1VpbnQ4QXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuICd1aW50OEFycmF5Jztcblx0fVxuXG5cdGlmIChpc0FzeW5jSXRlcmFibGVPYmplY3QodmFsdWUpKSB7XG5cdFx0cmV0dXJuICdhc3luY0l0ZXJhYmxlJztcblx0fVxuXG5cdGlmIChpc0l0ZXJhYmxlT2JqZWN0KHZhbHVlKSkge1xuXHRcdHJldHVybiAnaXRlcmFibGUnO1xuXHR9XG5cblx0aWYgKGlzVHJhbnNmb3JtU3RyZWFtKHZhbHVlKSkge1xuXHRcdHJldHVybiBnZXRUcmFuc2Zvcm1TdHJlYW1UeXBlKHt0cmFuc2Zvcm06IHZhbHVlfSwgb3B0aW9uTmFtZSk7XG5cdH1cblxuXHRpZiAoaXNUcmFuc2Zvcm1PcHRpb25zKHZhbHVlKSkge1xuXHRcdHJldHVybiBnZXRUcmFuc2Zvcm1PYmplY3RUeXBlKHZhbHVlLCBvcHRpb25OYW1lKTtcblx0fVxuXG5cdHJldHVybiAnbmF0aXZlJztcbn07XG5cbmNvbnN0IGdldFRyYW5zZm9ybU9iamVjdFR5cGUgPSAodmFsdWUsIG9wdGlvbk5hbWUpID0+IHtcblx0aWYgKGlzRHVwbGV4U3RyZWFtKHZhbHVlLnRyYW5zZm9ybSwge2NoZWNrT3BlbjogZmFsc2V9KSkge1xuXHRcdHJldHVybiBnZXREdXBsZXhUeXBlKHZhbHVlLCBvcHRpb25OYW1lKTtcblx0fVxuXG5cdGlmIChpc1RyYW5zZm9ybVN0cmVhbSh2YWx1ZS50cmFuc2Zvcm0pKSB7XG5cdFx0cmV0dXJuIGdldFRyYW5zZm9ybVN0cmVhbVR5cGUodmFsdWUsIG9wdGlvbk5hbWUpO1xuXHR9XG5cblx0cmV0dXJuIGdldEdlbmVyYXRvck9iamVjdFR5cGUodmFsdWUsIG9wdGlvbk5hbWUpO1xufTtcblxuY29uc3QgZ2V0RHVwbGV4VHlwZSA9ICh2YWx1ZSwgb3B0aW9uTmFtZSkgPT4ge1xuXHR2YWxpZGF0ZU5vbkdlbmVyYXRvclR5cGUodmFsdWUsIG9wdGlvbk5hbWUsICdEdXBsZXggc3RyZWFtJyk7XG5cdHJldHVybiAnZHVwbGV4Jztcbn07XG5cbmNvbnN0IGdldFRyYW5zZm9ybVN0cmVhbVR5cGUgPSAodmFsdWUsIG9wdGlvbk5hbWUpID0+IHtcblx0dmFsaWRhdGVOb25HZW5lcmF0b3JUeXBlKHZhbHVlLCBvcHRpb25OYW1lLCAnd2ViIFRyYW5zZm9ybVN0cmVhbScpO1xuXHRyZXR1cm4gJ3dlYlRyYW5zZm9ybSc7XG59O1xuXG5jb25zdCB2YWxpZGF0ZU5vbkdlbmVyYXRvclR5cGUgPSAoe2ZpbmFsLCBiaW5hcnksIG9iamVjdE1vZGV9LCBvcHRpb25OYW1lLCB0eXBlTmFtZSkgPT4ge1xuXHRjaGVja1VuZGVmaW5lZE9wdGlvbihmaW5hbCwgYCR7b3B0aW9uTmFtZX0uZmluYWxgLCB0eXBlTmFtZSk7XG5cdGNoZWNrVW5kZWZpbmVkT3B0aW9uKGJpbmFyeSwgYCR7b3B0aW9uTmFtZX0uYmluYXJ5YCwgdHlwZU5hbWUpO1xuXHRjaGVja0Jvb2xlYW5PcHRpb24ob2JqZWN0TW9kZSwgYCR7b3B0aW9uTmFtZX0ub2JqZWN0TW9kZWApO1xufTtcblxuY29uc3QgY2hlY2tVbmRlZmluZWRPcHRpb24gPSAodmFsdWUsIG9wdGlvbk5hbWUsIHR5cGVOYW1lKSA9PiB7XG5cdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uIGNhbiBvbmx5IGJlIGRlZmluZWQgd2hlbiB1c2luZyBhIGdlbmVyYXRvciwgbm90IGEgJHt0eXBlTmFtZX0uYCk7XG5cdH1cbn07XG5cbmNvbnN0IGdldEdlbmVyYXRvck9iamVjdFR5cGUgPSAoe3RyYW5zZm9ybSwgZmluYWwsIGJpbmFyeSwgb2JqZWN0TW9kZX0sIG9wdGlvbk5hbWUpID0+IHtcblx0aWYgKHRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmICFpc0dlbmVyYXRvcih0cmFuc2Zvcm0pKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX0udHJhbnNmb3JtXFxgIG9wdGlvbiBtdXN0IGJlIGEgZ2VuZXJhdG9yLCBhIER1cGxleCBzdHJlYW0gb3IgYSB3ZWIgVHJhbnNmb3JtU3RyZWFtLmApO1xuXHR9XG5cblx0aWYgKGlzRHVwbGV4U3RyZWFtKGZpbmFsLCB7Y2hlY2tPcGVuOiBmYWxzZX0pKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX0uZmluYWxcXGAgb3B0aW9uIG11c3Qgbm90IGJlIGEgRHVwbGV4IHN0cmVhbS5gKTtcblx0fVxuXG5cdGlmIChpc1RyYW5zZm9ybVN0cmVhbShmaW5hbCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfS5maW5hbFxcYCBvcHRpb24gbXVzdCBub3QgYmUgYSB3ZWIgVHJhbnNmb3JtU3RyZWFtLmApO1xuXHR9XG5cblx0aWYgKGZpbmFsICE9PSB1bmRlZmluZWQgJiYgIWlzR2VuZXJhdG9yKGZpbmFsKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9LmZpbmFsXFxgIG9wdGlvbiBtdXN0IGJlIGEgZ2VuZXJhdG9yLmApO1xuXHR9XG5cblx0Y2hlY2tCb29sZWFuT3B0aW9uKGJpbmFyeSwgYCR7b3B0aW9uTmFtZX0uYmluYXJ5YCk7XG5cdGNoZWNrQm9vbGVhbk9wdGlvbihvYmplY3RNb2RlLCBgJHtvcHRpb25OYW1lfS5vYmplY3RNb2RlYCk7XG5cblx0cmV0dXJuIGlzQXN5bmNHZW5lcmF0b3IodHJhbnNmb3JtKSB8fCBpc0FzeW5jR2VuZXJhdG9yKGZpbmFsKSA/ICdhc3luY0dlbmVyYXRvcicgOiAnZ2VuZXJhdG9yJztcbn07XG5cbmNvbnN0IGNoZWNrQm9vbGVhbk9wdGlvbiA9ICh2YWx1ZSwgb3B0aW9uTmFtZSkgPT4ge1xuXHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9XFxgIG9wdGlvbiBtdXN0IHVzZSBhIGJvb2xlYW4uYCk7XG5cdH1cbn07XG5cbmNvbnN0IGlzR2VuZXJhdG9yID0gdmFsdWUgPT4gaXNBc3luY0dlbmVyYXRvcih2YWx1ZSkgfHwgaXNTeW5jR2VuZXJhdG9yKHZhbHVlKTtcbmV4cG9ydCBjb25zdCBpc0FzeW5jR2VuZXJhdG9yID0gdmFsdWUgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXN5bmNHZW5lcmF0b3JGdW5jdGlvbl0nO1xuY29uc3QgaXNTeW5jR2VuZXJhdG9yID0gdmFsdWUgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcbmNvbnN0IGlzVHJhbnNmb3JtT3B0aW9ucyA9IHZhbHVlID0+IGlzUGxhaW5PYmoodmFsdWUpXG5cdCYmICh2YWx1ZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCB8fCB2YWx1ZS5maW5hbCAhPT0gdW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IGlzVXJsID0gdmFsdWUgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgVVJMXSc7XG5leHBvcnQgY29uc3QgaXNSZWd1bGFyVXJsID0gdmFsdWUgPT4gaXNVcmwodmFsdWUpICYmIHZhbHVlLnByb3RvY29sICE9PSAnZmlsZTonO1xuXG5jb25zdCBpc0ZpbGVQYXRoT2JqZWN0ID0gdmFsdWUgPT4gaXNQbGFpbk9iaih2YWx1ZSlcblx0JiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDBcblx0JiYgT2JqZWN0LmtleXModmFsdWUpLmV2ZXJ5KGtleSA9PiBGSUxFX1BBVEhfS0VZUy5oYXMoa2V5KSlcblx0JiYgaXNGaWxlUGF0aFN0cmluZyh2YWx1ZS5maWxlKTtcbmNvbnN0IEZJTEVfUEFUSF9LRVlTID0gbmV3IFNldChbJ2ZpbGUnLCAnYXBwZW5kJ10pO1xuZXhwb3J0IGNvbnN0IGlzRmlsZVBhdGhTdHJpbmcgPSBmaWxlID0+IHR5cGVvZiBmaWxlID09PSAnc3RyaW5nJztcblxuZXhwb3J0IGNvbnN0IGlzVW5rbm93blN0ZGlvU3RyaW5nID0gKHR5cGUsIHZhbHVlKSA9PiB0eXBlID09PSAnbmF0aXZlJ1xuXHQmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG5cdCYmICFLTk9XTl9TVERJT19TVFJJTkdTLmhhcyh2YWx1ZSk7XG5jb25zdCBLTk9XTl9TVERJT19TVFJJTkdTID0gbmV3IFNldChbJ2lwYycsICdpZ25vcmUnLCAnaW5oZXJpdCcsICdvdmVybGFwcGVkJywgJ3BpcGUnXSk7XG5cbmNvbnN0IGlzUmVhZGFibGVTdHJlYW0gPSB2YWx1ZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWFkYWJsZVN0cmVhbV0nO1xuZXhwb3J0IGNvbnN0IGlzV3JpdGFibGVTdHJlYW0gPSB2YWx1ZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBXcml0YWJsZVN0cmVhbV0nO1xuY29uc3QgaXNXZWJTdHJlYW0gPSB2YWx1ZSA9PiBpc1JlYWRhYmxlU3RyZWFtKHZhbHVlKSB8fCBpc1dyaXRhYmxlU3RyZWFtKHZhbHVlKTtcbmNvbnN0IGlzVHJhbnNmb3JtU3RyZWFtID0gdmFsdWUgPT4gaXNSZWFkYWJsZVN0cmVhbSh2YWx1ZT8ucmVhZGFibGUpICYmIGlzV3JpdGFibGVTdHJlYW0odmFsdWU/LndyaXRhYmxlKTtcblxuY29uc3QgaXNBc3luY0l0ZXJhYmxlT2JqZWN0ID0gdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpICYmIHR5cGVvZiB2YWx1ZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPT09ICdmdW5jdGlvbic7XG5jb25zdCBpc0l0ZXJhYmxlT2JqZWN0ID0gdmFsdWUgPT4gaXNPYmplY3QodmFsdWUpICYmIHR5cGVvZiB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nO1xuY29uc3QgaXNPYmplY3QgPSB2YWx1ZSA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xuXG4vLyBUeXBlcyB3aGljaCBtb2RpZnkgYHN1YnByb2Nlc3Muc3RkKmBcbmV4cG9ydCBjb25zdCBUUkFOU0ZPUk1fVFlQRVMgPSBuZXcgU2V0KFsnZ2VuZXJhdG9yJywgJ2FzeW5jR2VuZXJhdG9yJywgJ2R1cGxleCcsICd3ZWJUcmFuc2Zvcm0nXSk7XG4vLyBUeXBlcyB3aGljaCB3cml0ZSB0byBhIGZpbGUgb3IgYSBmaWxlIGRlc2NyaXB0b3JcbmV4cG9ydCBjb25zdCBGSUxFX1RZUEVTID0gbmV3IFNldChbJ2ZpbGVVcmwnLCAnZmlsZVBhdGgnLCAnZmlsZU51bWJlciddKTtcbi8vIFdoZW4gdHdvIGZpbGUgZGVzY3JpcHRvcnMgb2YgdGhpcyB0eXBlIHNoYXJlIHRoZSBzYW1lIHRhcmdldCwgd2UgbmVlZCB0byBkbyBzb21lIHNwZWNpYWwgbG9naWNcbmV4cG9ydCBjb25zdCBTUEVDSUFMX0RVUExJQ0FURV9UWVBFU19TWU5DID0gbmV3IFNldChbJ2ZpbGVVcmwnLCAnZmlsZVBhdGgnXSk7XG5leHBvcnQgY29uc3QgU1BFQ0lBTF9EVVBMSUNBVEVfVFlQRVMgPSBuZXcgU2V0KFsuLi5TUEVDSUFMX0RVUExJQ0FURV9UWVBFU19TWU5DLCAnd2ViU3RyZWFtJywgJ25vZGVTdHJlYW0nXSk7XG4vLyBEbyBub3QgYWxsb3cgdHdvIGZpbGUgZGVzY3JpcHRvcnMgb2YgdGhpcyB0eXBlIHNoYXJpbmcgdGhlIHNhbWUgdGFyZ2V0XG5leHBvcnQgY29uc3QgRk9SQklEX0RVUExJQ0FURV9UWVBFUyA9IG5ldyBTZXQoWyd3ZWJUcmFuc2Zvcm0nLCAnZHVwbGV4J10pO1xuXG4vLyBDb252ZXJ0IHR5cGVzIHRvIGh1bWFuLWZyaWVuZGx5IHN0cmluZ3MgZm9yIGVycm9yIG1lc3NhZ2VzXG5leHBvcnQgY29uc3QgVFlQRV9UT19NRVNTQUdFID0ge1xuXHRnZW5lcmF0b3I6ICdhIGdlbmVyYXRvcicsXG5cdGFzeW5jR2VuZXJhdG9yOiAnYW4gYXN5bmMgZ2VuZXJhdG9yJyxcblx0ZmlsZVVybDogJ2EgZmlsZSBVUkwnLFxuXHRmaWxlUGF0aDogJ2EgZmlsZSBwYXRoIHN0cmluZycsXG5cdGZpbGVOdW1iZXI6ICdhIGZpbGUgZGVzY3JpcHRvciBudW1iZXInLFxuXHR3ZWJTdHJlYW06ICdhIHdlYiBzdHJlYW0nLFxuXHRub2RlU3RyZWFtOiAnYSBOb2RlLmpzIHN0cmVhbScsXG5cdHdlYlRyYW5zZm9ybTogJ2Egd2ViIFRyYW5zZm9ybVN0cmVhbScsXG5cdGR1cGxleDogJ2EgRHVwbGV4IHN0cmVhbScsXG5cdG5hdGl2ZTogJ2FueSB2YWx1ZScsXG5cdGl0ZXJhYmxlOiAnYW4gaXRlcmFibGUnLFxuXHRhc3luY0l0ZXJhYmxlOiAnYW4gYXN5bmMgaXRlcmFibGUnLFxuXHRzdHJpbmc6ICdhIHN0cmluZycsXG5cdHVpbnQ4QXJyYXk6ICdhIFVpbnQ4QXJyYXknLFxufTtcbiIsICJpbXBvcnQge1RSQU5TRk9STV9UWVBFU30gZnJvbSAnLi4vc3RkaW8vdHlwZS5qcyc7XG5cbi8qXG5SZXRyaWV2ZSB0aGUgYG9iamVjdE1vZGVgcyBvZiBhIHNpbmdsZSB0cmFuc2Zvcm0uXG5gb2JqZWN0TW9kZWAgZGV0ZXJtaW5lcyB0aGUgcmV0dXJuIHZhbHVlJ3MgdHlwZSwgaS5lLiB0aGUgYHJlYWRhYmxlT2JqZWN0TW9kZWAuXG5UaGUgY2h1bmsgYXJndW1lbnQncyB0eXBlIGlzIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBnZW5lcmF0b3IncyByZXR1cm4gdmFsdWUsIGkuZS4gdGhlIGB3cml0YWJsZU9iamVjdE1vZGVgIGlzIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBgcmVhZGFibGVPYmplY3RNb2RlYC5cblRoZSBsYXN0IGlucHV0J3MgZ2VuZXJhdG9yIGlzIHJlYWQgYnkgYHN1YnByb2Nlc3Muc3RkaW5gIHdoaWNoOlxuLSBzaG91bGQgbm90IGJlIGluIGBvYmplY3RNb2RlYCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbi0gY2FuIG9ubHkgYmUgc3RyaW5ncywgQnVmZmVycyBhbmQgVWludDhBcnJheXMuXG5UaGVyZWZvcmUgaXRzIGByZWFkYWJsZU9iamVjdE1vZGVgIG11c3QgYmUgYGZhbHNlYC5cblRoZSBzYW1lIGFwcGxpZXMgdG8gdGhlIGZpcnN0IG91dHB1dCdzIGdlbmVyYXRvcidzIGB3cml0YWJsZU9iamVjdE1vZGVgLlxuKi9cbmV4cG9ydCBjb25zdCBnZXRUcmFuc2Zvcm1PYmplY3RNb2RlcyA9IChvYmplY3RNb2RlLCBpbmRleCwgbmV3VHJhbnNmb3JtcywgZGlyZWN0aW9uKSA9PiBkaXJlY3Rpb24gPT09ICdvdXRwdXQnXG5cdD8gZ2V0T3V0cHV0T2JqZWN0TW9kZXMob2JqZWN0TW9kZSwgaW5kZXgsIG5ld1RyYW5zZm9ybXMpXG5cdDogZ2V0SW5wdXRPYmplY3RNb2RlcyhvYmplY3RNb2RlLCBpbmRleCwgbmV3VHJhbnNmb3Jtcyk7XG5cbmNvbnN0IGdldE91dHB1dE9iamVjdE1vZGVzID0gKG9iamVjdE1vZGUsIGluZGV4LCBuZXdUcmFuc2Zvcm1zKSA9PiB7XG5cdGNvbnN0IHdyaXRhYmxlT2JqZWN0TW9kZSA9IGluZGV4ICE9PSAwICYmIG5ld1RyYW5zZm9ybXNbaW5kZXggLSAxXS52YWx1ZS5yZWFkYWJsZU9iamVjdE1vZGU7XG5cdGNvbnN0IHJlYWRhYmxlT2JqZWN0TW9kZSA9IG9iamVjdE1vZGUgPz8gd3JpdGFibGVPYmplY3RNb2RlO1xuXHRyZXR1cm4ge3dyaXRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVPYmplY3RNb2RlfTtcbn07XG5cbmNvbnN0IGdldElucHV0T2JqZWN0TW9kZXMgPSAob2JqZWN0TW9kZSwgaW5kZXgsIG5ld1RyYW5zZm9ybXMpID0+IHtcblx0Y29uc3Qgd3JpdGFibGVPYmplY3RNb2RlID0gaW5kZXggPT09IDBcblx0XHQ/IG9iamVjdE1vZGUgPT09IHRydWVcblx0XHQ6IG5ld1RyYW5zZm9ybXNbaW5kZXggLSAxXS52YWx1ZS5yZWFkYWJsZU9iamVjdE1vZGU7XG5cdGNvbnN0IHJlYWRhYmxlT2JqZWN0TW9kZSA9IGluZGV4ICE9PSBuZXdUcmFuc2Zvcm1zLmxlbmd0aCAtIDEgJiYgKG9iamVjdE1vZGUgPz8gd3JpdGFibGVPYmplY3RNb2RlKTtcblx0cmV0dXJuIHt3cml0YWJsZU9iamVjdE1vZGUsIHJlYWRhYmxlT2JqZWN0TW9kZX07XG59O1xuXG4vLyBSZXRyaWV2ZSB0aGUgYG9iamVjdE1vZGVgIG9mIGEgZmlsZSBkZXNjcmlwdG9yLCBlLmcuIGBzdGRvdXRgIG9yIGBzdGRlcnJgXG5leHBvcnQgY29uc3QgZ2V0RmRPYmplY3RNb2RlID0gKHN0ZGlvSXRlbXMsIGRpcmVjdGlvbikgPT4ge1xuXHRjb25zdCBsYXN0VHJhbnNmb3JtID0gc3RkaW9JdGVtcy5maW5kTGFzdCgoe3R5cGV9KSA9PiBUUkFOU0ZPUk1fVFlQRVMuaGFzKHR5cGUpKTtcblx0aWYgKGxhc3RUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBkaXJlY3Rpb24gPT09ICdpbnB1dCdcblx0XHQ/IGxhc3RUcmFuc2Zvcm0udmFsdWUud3JpdGFibGVPYmplY3RNb2RlXG5cdFx0OiBsYXN0VHJhbnNmb3JtLnZhbHVlLnJlYWRhYmxlT2JqZWN0TW9kZTtcbn07XG4iLCAiaW1wb3J0IGlzUGxhaW5PYmogZnJvbSAnaXMtcGxhaW4tb2JqJztcbmltcG9ydCB7QklOQVJZX0VOQ09ESU5HU30gZnJvbSAnLi4vYXJndW1lbnRzL2VuY29kaW5nLW9wdGlvbi5qcyc7XG5pbXBvcnQge1RSQU5TRk9STV9UWVBFU30gZnJvbSAnLi4vc3RkaW8vdHlwZS5qcyc7XG5pbXBvcnQge2dldFRyYW5zZm9ybU9iamVjdE1vZGVzfSBmcm9tICcuL29iamVjdC1tb2RlLmpzJztcblxuLy8gVHJhbnNmb3JtcyBnZW5lcmF0b3JzL2R1cGxleC9UcmFuc2Zvcm1TdHJlYW0gY2FuIGhhdmUgbXVsdGlwbGUgc2hhcGVzLlxuLy8gVGhpcyBub3JtYWxpemVzIGl0IGFuZCBhcHBsaWVzIGRlZmF1bHQgdmFsdWVzLlxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVRyYW5zZm9ybXMgPSAoc3RkaW9JdGVtcywgb3B0aW9uTmFtZSwgZGlyZWN0aW9uLCBvcHRpb25zKSA9PiBbXG5cdC4uLnN0ZGlvSXRlbXMuZmlsdGVyKCh7dHlwZX0pID0+ICFUUkFOU0ZPUk1fVFlQRVMuaGFzKHR5cGUpKSxcblx0Li4uZ2V0VHJhbnNmb3JtcyhzdGRpb0l0ZW1zLCBvcHRpb25OYW1lLCBkaXJlY3Rpb24sIG9wdGlvbnMpLFxuXTtcblxuY29uc3QgZ2V0VHJhbnNmb3JtcyA9IChzdGRpb0l0ZW1zLCBvcHRpb25OYW1lLCBkaXJlY3Rpb24sIHtlbmNvZGluZ30pID0+IHtcblx0Y29uc3QgdHJhbnNmb3JtcyA9IHN0ZGlvSXRlbXMuZmlsdGVyKCh7dHlwZX0pID0+IFRSQU5TRk9STV9UWVBFUy5oYXModHlwZSkpO1xuXHRjb25zdCBuZXdUcmFuc2Zvcm1zID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiB0cmFuc2Zvcm1zLmxlbmd0aH0pO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBzdGRpb0l0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRyYW5zZm9ybXMpKSB7XG5cdFx0bmV3VHJhbnNmb3Jtc1tpbmRleF0gPSBub3JtYWxpemVUcmFuc2Zvcm0oe1xuXHRcdFx0c3RkaW9JdGVtLFxuXHRcdFx0aW5kZXg6IE51bWJlcihpbmRleCksXG5cdFx0XHRuZXdUcmFuc2Zvcm1zLFxuXHRcdFx0b3B0aW9uTmFtZSxcblx0XHRcdGRpcmVjdGlvbixcblx0XHRcdGVuY29kaW5nLFxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIHNvcnRUcmFuc2Zvcm1zKG5ld1RyYW5zZm9ybXMsIGRpcmVjdGlvbik7XG59O1xuXG5jb25zdCBub3JtYWxpemVUcmFuc2Zvcm0gPSAoe3N0ZGlvSXRlbSwgc3RkaW9JdGVtOiB7dHlwZX0sIGluZGV4LCBuZXdUcmFuc2Zvcm1zLCBvcHRpb25OYW1lLCBkaXJlY3Rpb24sIGVuY29kaW5nfSkgPT4ge1xuXHRpZiAodHlwZSA9PT0gJ2R1cGxleCcpIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplRHVwbGV4KHtzdGRpb0l0ZW0sIG9wdGlvbk5hbWV9KTtcblx0fVxuXG5cdGlmICh0eXBlID09PSAnd2ViVHJhbnNmb3JtJykge1xuXHRcdHJldHVybiBub3JtYWxpemVUcmFuc2Zvcm1TdHJlYW0oe1xuXHRcdFx0c3RkaW9JdGVtLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRuZXdUcmFuc2Zvcm1zLFxuXHRcdFx0ZGlyZWN0aW9uLFxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIG5vcm1hbGl6ZUdlbmVyYXRvcih7XG5cdFx0c3RkaW9JdGVtLFxuXHRcdGluZGV4LFxuXHRcdG5ld1RyYW5zZm9ybXMsXG5cdFx0ZGlyZWN0aW9uLFxuXHRcdGVuY29kaW5nLFxuXHR9KTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZUR1cGxleCA9ICh7XG5cdHN0ZGlvSXRlbSxcblx0c3RkaW9JdGVtOiB7XG5cdFx0dmFsdWU6IHtcblx0XHRcdHRyYW5zZm9ybSxcblx0XHRcdHRyYW5zZm9ybToge3dyaXRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVPYmplY3RNb2RlfSxcblx0XHRcdG9iamVjdE1vZGUgPSByZWFkYWJsZU9iamVjdE1vZGUsXG5cdFx0fSxcblx0fSxcblx0b3B0aW9uTmFtZSxcbn0pID0+IHtcblx0aWYgKG9iamVjdE1vZGUgJiYgIXJlYWRhYmxlT2JqZWN0TW9kZSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9Lm9iamVjdE1vZGVcXGAgb3B0aW9uIGNhbiBvbmx5IGJlIFxcYHRydWVcXGAgaWYgXFxgbmV3IER1cGxleCh7b2JqZWN0TW9kZTogdHJ1ZX0pXFxgIGlzIHVzZWQuYCk7XG5cdH1cblxuXHRpZiAoIW9iamVjdE1vZGUgJiYgcmVhZGFibGVPYmplY3RNb2RlKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX0ub2JqZWN0TW9kZVxcYCBvcHRpb24gY2Fubm90IGJlIFxcYGZhbHNlXFxgIGlmIFxcYG5ldyBEdXBsZXgoe29iamVjdE1vZGU6IHRydWV9KVxcYCBpcyB1c2VkLmApO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHQuLi5zdGRpb0l0ZW0sXG5cdFx0dmFsdWU6IHt0cmFuc2Zvcm0sIHdyaXRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVPYmplY3RNb2RlfSxcblx0fTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZVRyYW5zZm9ybVN0cmVhbSA9ICh7c3RkaW9JdGVtLCBzdGRpb0l0ZW06IHt2YWx1ZX0sIGluZGV4LCBuZXdUcmFuc2Zvcm1zLCBkaXJlY3Rpb259KSA9PiB7XG5cdGNvbnN0IHt0cmFuc2Zvcm0sIG9iamVjdE1vZGV9ID0gaXNQbGFpbk9iaih2YWx1ZSkgPyB2YWx1ZSA6IHt0cmFuc2Zvcm06IHZhbHVlfTtcblx0Y29uc3Qge3dyaXRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVPYmplY3RNb2RlfSA9IGdldFRyYW5zZm9ybU9iamVjdE1vZGVzKG9iamVjdE1vZGUsIGluZGV4LCBuZXdUcmFuc2Zvcm1zLCBkaXJlY3Rpb24pO1xuXHRyZXR1cm4gKHtcblx0XHQuLi5zdGRpb0l0ZW0sXG5cdFx0dmFsdWU6IHt0cmFuc2Zvcm0sIHdyaXRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVPYmplY3RNb2RlfSxcblx0fSk7XG59O1xuXG5jb25zdCBub3JtYWxpemVHZW5lcmF0b3IgPSAoe3N0ZGlvSXRlbSwgc3RkaW9JdGVtOiB7dmFsdWV9LCBpbmRleCwgbmV3VHJhbnNmb3JtcywgZGlyZWN0aW9uLCBlbmNvZGluZ30pID0+IHtcblx0Y29uc3Qge1xuXHRcdHRyYW5zZm9ybSxcblx0XHRmaW5hbCxcblx0XHRiaW5hcnk6IGJpbmFyeU9wdGlvbiA9IGZhbHNlLFxuXHRcdHByZXNlcnZlTmV3bGluZXMgPSBmYWxzZSxcblx0XHRvYmplY3RNb2RlLFxuXHR9ID0gaXNQbGFpbk9iaih2YWx1ZSkgPyB2YWx1ZSA6IHt0cmFuc2Zvcm06IHZhbHVlfTtcblx0Y29uc3QgYmluYXJ5ID0gYmluYXJ5T3B0aW9uIHx8IEJJTkFSWV9FTkNPRElOR1MuaGFzKGVuY29kaW5nKTtcblx0Y29uc3Qge3dyaXRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVPYmplY3RNb2RlfSA9IGdldFRyYW5zZm9ybU9iamVjdE1vZGVzKG9iamVjdE1vZGUsIGluZGV4LCBuZXdUcmFuc2Zvcm1zLCBkaXJlY3Rpb24pO1xuXHRyZXR1cm4ge1xuXHRcdC4uLnN0ZGlvSXRlbSxcblx0XHR2YWx1ZToge1xuXHRcdFx0dHJhbnNmb3JtLFxuXHRcdFx0ZmluYWwsXG5cdFx0XHRiaW5hcnksXG5cdFx0XHRwcmVzZXJ2ZU5ld2xpbmVzLFxuXHRcdFx0d3JpdGFibGVPYmplY3RNb2RlLFxuXHRcdFx0cmVhZGFibGVPYmplY3RNb2RlLFxuXHRcdH0sXG5cdH07XG59O1xuXG5jb25zdCBzb3J0VHJhbnNmb3JtcyA9IChuZXdUcmFuc2Zvcm1zLCBkaXJlY3Rpb24pID0+IGRpcmVjdGlvbiA9PT0gJ2lucHV0JyA/IG5ld1RyYW5zZm9ybXMucmV2ZXJzZSgpIDogbmV3VHJhbnNmb3JtcztcbiIsICJpbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IHtcblx0aXNTdHJlYW0gYXMgaXNOb2RlU3RyZWFtLFxuXHRpc1JlYWRhYmxlU3RyZWFtIGFzIGlzTm9kZVJlYWRhYmxlU3RyZWFtLFxuXHRpc1dyaXRhYmxlU3RyZWFtIGFzIGlzTm9kZVdyaXRhYmxlU3RyZWFtLFxufSBmcm9tICdpcy1zdHJlYW0nO1xuaW1wb3J0IHtpc1dyaXRhYmxlU3RyZWFtfSBmcm9tICcuL3R5cGUuanMnO1xuXG4vLyBGb3IgYHN0ZGlvW2ZkTnVtYmVyXWAgYmV5b25kIHN0ZGluL3N0ZG91dC9zdGRlcnIsIHdlIG5lZWQgdG8gZ3Vlc3Mgd2hldGhlciB0aGUgdmFsdWUgcGFzc2VkIGlzIGludGVuZGVkIGZvciBpbnB1dHMgb3Igb3V0cHV0cy5cbi8vIFRoaXMgYWxsb3dzIHVzIHRvIGtub3cgd2hldGhlciB0byBwaXBlIF9pbnRvXyBvciBfZnJvbV8gdGhlIHN0cmVhbS5cbi8vIFdoZW4gYHN0ZGlvW2ZkTnVtYmVyXWAgaXMgYSBzaW5nbGUgdmFsdWUsIHRoaXMgZ3Vlc3MgaXMgZmFpcmx5IHN0cmFpZ2h0Zm9yd2FyZC5cbi8vIEhvd2V2ZXIsIHdoZW4gaXQgaXMgYW4gYXJyYXkgaW5zdGVhZCwgd2UgYWxzbyBuZWVkIHRvIG1ha2Ugc3VyZSB0aGUgZGlmZmVyZW50IHZhbHVlcyBhcmUgbm90IGluY29tcGF0aWJsZSB3aXRoIGVhY2ggb3RoZXIuXG5leHBvcnQgY29uc3QgZ2V0U3RyZWFtRGlyZWN0aW9uID0gKHN0ZGlvSXRlbXMsIGZkTnVtYmVyLCBvcHRpb25OYW1lKSA9PiB7XG5cdGNvbnN0IGRpcmVjdGlvbnMgPSBzdGRpb0l0ZW1zLm1hcChzdGRpb0l0ZW0gPT4gZ2V0U3RkaW9JdGVtRGlyZWN0aW9uKHN0ZGlvSXRlbSwgZmROdW1iZXIpKTtcblxuXHRpZiAoZGlyZWN0aW9ucy5pbmNsdWRlcygnaW5wdXQnKSAmJiBkaXJlY3Rpb25zLmluY2x1ZGVzKCdvdXRwdXQnKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9XFxgIG9wdGlvbiBtdXN0IG5vdCBiZSBhbiBhcnJheSBvZiBib3RoIHJlYWRhYmxlIGFuZCB3cml0YWJsZSB2YWx1ZXMuYCk7XG5cdH1cblxuXHRyZXR1cm4gZGlyZWN0aW9ucy5maW5kKEJvb2xlYW4pID8/IERFRkFVTFRfRElSRUNUSU9OO1xufTtcblxuY29uc3QgZ2V0U3RkaW9JdGVtRGlyZWN0aW9uID0gKHt0eXBlLCB2YWx1ZX0sIGZkTnVtYmVyKSA9PiBLTk9XTl9ESVJFQ1RJT05TW2ZkTnVtYmVyXSA/PyBndWVzc1N0cmVhbURpcmVjdGlvblt0eXBlXSh2YWx1ZSk7XG5cbi8vIGBzdGRpbmAvYHN0ZG91dGAvYHN0ZGVycmAgaGF2ZSBhIGtub3duIGRpcmVjdGlvblxuY29uc3QgS05PV05fRElSRUNUSU9OUyA9IFsnaW5wdXQnLCAnb3V0cHV0JywgJ291dHB1dCddO1xuXG5jb25zdCBhbnlEaXJlY3Rpb24gPSAoKSA9PiB1bmRlZmluZWQ7XG5jb25zdCBhbHdheXNJbnB1dCA9ICgpID0+ICdpbnB1dCc7XG5cbi8vIGBzdHJpbmdgIGNhbiBvbmx5IGJlIGFkZGVkIHRocm91Z2ggdGhlIGBpbnB1dGAgb3B0aW9uLCBpLmUuIGRvZXMgbm90IG5lZWQgdG8gYmUgaGFuZGxlZCBoZXJlXG5jb25zdCBndWVzc1N0cmVhbURpcmVjdGlvbiA9IHtcblx0Z2VuZXJhdG9yOiBhbnlEaXJlY3Rpb24sXG5cdGFzeW5jR2VuZXJhdG9yOiBhbnlEaXJlY3Rpb24sXG5cdGZpbGVVcmw6IGFueURpcmVjdGlvbixcblx0ZmlsZVBhdGg6IGFueURpcmVjdGlvbixcblx0aXRlcmFibGU6IGFsd2F5c0lucHV0LFxuXHRhc3luY0l0ZXJhYmxlOiBhbHdheXNJbnB1dCxcblx0dWludDhBcnJheTogYWx3YXlzSW5wdXQsXG5cdHdlYlN0cmVhbTogdmFsdWUgPT4gaXNXcml0YWJsZVN0cmVhbSh2YWx1ZSkgPyAnb3V0cHV0JyA6ICdpbnB1dCcsXG5cdG5vZGVTdHJlYW0odmFsdWUpIHtcblx0XHRpZiAoIWlzTm9kZVJlYWRhYmxlU3RyZWFtKHZhbHVlLCB7Y2hlY2tPcGVuOiBmYWxzZX0pKSB7XG5cdFx0XHRyZXR1cm4gJ291dHB1dCc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlzTm9kZVdyaXRhYmxlU3RyZWFtKHZhbHVlLCB7Y2hlY2tPcGVuOiBmYWxzZX0pID8gdW5kZWZpbmVkIDogJ2lucHV0Jztcblx0fSxcblx0d2ViVHJhbnNmb3JtOiBhbnlEaXJlY3Rpb24sXG5cdGR1cGxleDogYW55RGlyZWN0aW9uLFxuXHRuYXRpdmUodmFsdWUpIHtcblx0XHRjb25zdCBzdGFuZGFyZFN0cmVhbURpcmVjdGlvbiA9IGdldFN0YW5kYXJkU3RyZWFtRGlyZWN0aW9uKHZhbHVlKTtcblx0XHRpZiAoc3RhbmRhcmRTdHJlYW1EaXJlY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHN0YW5kYXJkU3RyZWFtRGlyZWN0aW9uO1xuXHRcdH1cblxuXHRcdGlmIChpc05vZGVTdHJlYW0odmFsdWUsIHtjaGVja09wZW46IGZhbHNlfSkpIHtcblx0XHRcdHJldHVybiBndWVzc1N0cmVhbURpcmVjdGlvbi5ub2RlU3RyZWFtKHZhbHVlKTtcblx0XHR9XG5cdH0sXG59O1xuXG5jb25zdCBnZXRTdGFuZGFyZFN0cmVhbURpcmVjdGlvbiA9IHZhbHVlID0+IHtcblx0aWYgKFswLCBwcm9jZXNzLnN0ZGluXS5pbmNsdWRlcyh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ2lucHV0Jztcblx0fVxuXG5cdGlmIChbMSwgMiwgcHJvY2Vzcy5zdGRvdXQsIHByb2Nlc3Muc3RkZXJyXS5pbmNsdWRlcyh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ291dHB1dCc7XG5cdH1cbn07XG5cbi8vIFdoZW4gYW1iaWd1b3VzLCB3ZSBpbml0aWFsbHkga2VlcCB0aGUgZGlyZWN0aW9uIGFzIGB1bmRlZmluZWRgLlxuLy8gVGhpcyBhbGxvd3MgYXJyYXlzIG9mIGBzdGRpb2AgdmFsdWVzIHRvIHJlc29sdmUgdGhlIGFtYmlndWl0eS5cbi8vIEZvciBleGFtcGxlLCBgc3RkaW9bM106IER1cGxleFN0cmVhbWAgaXMgYW1iaWd1b3VzLCBidXQgYHN0ZGlvWzNdOiBbRHVwbGV4U3RyZWFtLCBXcml0YWJsZVN0cmVhbV1gIGlzIG5vdC5cbi8vIFdoZW4gdGhlIGFtYmlndWl0eSByZW1haW5zLCB3ZSBkZWZhdWx0IHRvIGBvdXRwdXRgIHNpbmNlIGl0IGlzIHRoZSBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgYWRkaXRpb25hbCBmaWxlIGRlc2NyaXB0b3JzLlxuY29uc3QgREVGQVVMVF9ESVJFQ1RJT04gPSAnb3V0cHV0JztcbiIsICIvLyBUaGUgYGlwY2Agb3B0aW9uIGFkZHMgYW4gYGlwY2AgaXRlbSB0byB0aGUgYHN0ZGlvYCBvcHRpb25cbmV4cG9ydCBjb25zdCBub3JtYWxpemVJcGNTdGRpb0FycmF5ID0gKHN0ZGlvQXJyYXksIGlwYykgPT4gaXBjICYmICFzdGRpb0FycmF5LmluY2x1ZGVzKCdpcGMnKVxuXHQ/IFsuLi5zdGRpb0FycmF5LCAnaXBjJ11cblx0OiBzdGRpb0FycmF5O1xuIiwgImltcG9ydCB7U1RBTkRBUkRfU1RSRUFNU19BTElBU0VTfSBmcm9tICcuLi91dGlscy9zdGFuZGFyZC1zdHJlYW0uanMnO1xuaW1wb3J0IHtub3JtYWxpemVJcGNTdGRpb0FycmF5fSBmcm9tICcuLi9pcGMvYXJyYXkuanMnO1xuaW1wb3J0IHtpc0Z1bGxWZXJib3NlfSBmcm9tICcuLi92ZXJib3NlL3ZhbHVlcy5qcyc7XG5cbi8vIEFkZCBzdXBwb3J0IGZvciBgc3RkaW5gL2BzdGRvdXRgL2BzdGRlcnJgIGFzIGFuIGFsaWFzIGZvciBgc3RkaW9gLlxuLy8gQWxzbyBub3JtYWxpemUgdGhlIGBzdGRpb2Agb3B0aW9uLlxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVN0ZGlvT3B0aW9uID0gKHtzdGRpbywgaXBjLCBidWZmZXIsIC4uLm9wdGlvbnN9LCB2ZXJib3NlSW5mbywgaXNTeW5jKSA9PiB7XG5cdGNvbnN0IHN0ZGlvQXJyYXkgPSBnZXRTdGRpb0FycmF5KHN0ZGlvLCBvcHRpb25zKS5tYXAoKHN0ZGlvT3B0aW9uLCBmZE51bWJlcikgPT4gYWRkRGVmYXVsdFZhbHVlKHN0ZGlvT3B0aW9uLCBmZE51bWJlcikpO1xuXHRyZXR1cm4gaXNTeW5jXG5cdFx0PyBub3JtYWxpemVTdGRpb1N5bmMoc3RkaW9BcnJheSwgYnVmZmVyLCB2ZXJib3NlSW5mbylcblx0XHQ6IG5vcm1hbGl6ZUlwY1N0ZGlvQXJyYXkoc3RkaW9BcnJheSwgaXBjKTtcbn07XG5cbmNvbnN0IGdldFN0ZGlvQXJyYXkgPSAoc3RkaW8sIG9wdGlvbnMpID0+IHtcblx0aWYgKHN0ZGlvID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gU1RBTkRBUkRfU1RSRUFNU19BTElBU0VTLm1hcChhbGlhcyA9PiBvcHRpb25zW2FsaWFzXSk7XG5cdH1cblxuXHRpZiAoaGFzQWxpYXMob3B0aW9ucykpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEl0J3Mgbm90IHBvc3NpYmxlIHRvIHByb3ZpZGUgXFxgc3RkaW9cXGAgaW4gY29tYmluYXRpb24gd2l0aCBvbmUgb2YgJHtTVEFOREFSRF9TVFJFQU1TX0FMSUFTRVMubWFwKGFsaWFzID0+IGBcXGAke2FsaWFzfVxcYGApLmpvaW4oJywgJyl9YCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHN0ZGlvID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBbc3RkaW8sIHN0ZGlvLCBzdGRpb107XG5cdH1cblxuXHRpZiAoIUFycmF5LmlzQXJyYXkoc3RkaW8pKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgc3RkaW9cXGAgdG8gYmUgb2YgdHlwZSBcXGBzdHJpbmdcXGAgb3IgXFxgQXJyYXlcXGAsIGdvdCBcXGAke3R5cGVvZiBzdGRpb31cXGBgKTtcblx0fVxuXG5cdGNvbnN0IGxlbmd0aCA9IE1hdGgubWF4KHN0ZGlvLmxlbmd0aCwgU1RBTkRBUkRfU1RSRUFNU19BTElBU0VTLmxlbmd0aCk7XG5cdHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGh9LCAoXywgZmROdW1iZXIpID0+IHN0ZGlvW2ZkTnVtYmVyXSk7XG59O1xuXG5jb25zdCBoYXNBbGlhcyA9IG9wdGlvbnMgPT4gU1RBTkRBUkRfU1RSRUFNU19BTElBU0VTLnNvbWUoYWxpYXMgPT4gb3B0aW9uc1thbGlhc10gIT09IHVuZGVmaW5lZCk7XG5cbmNvbnN0IGFkZERlZmF1bHRWYWx1ZSA9IChzdGRpb09wdGlvbiwgZmROdW1iZXIpID0+IHtcblx0aWYgKEFycmF5LmlzQXJyYXkoc3RkaW9PcHRpb24pKSB7XG5cdFx0cmV0dXJuIHN0ZGlvT3B0aW9uLm1hcChpdGVtID0+IGFkZERlZmF1bHRWYWx1ZShpdGVtLCBmZE51bWJlcikpO1xuXHR9XG5cblx0aWYgKHN0ZGlvT3B0aW9uID09PSBudWxsIHx8IHN0ZGlvT3B0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gZmROdW1iZXIgPj0gU1RBTkRBUkRfU1RSRUFNU19BTElBU0VTLmxlbmd0aCA/ICdpZ25vcmUnIDogJ3BpcGUnO1xuXHR9XG5cblx0cmV0dXJuIHN0ZGlvT3B0aW9uO1xufTtcblxuLy8gVXNpbmcgYGJ1ZmZlcjogZmFsc2VgIHdpdGggc3luY2hyb25vdXMgbWV0aG9kcyBpbXBsaWVzIGBzdGRvdXRgL2BzdGRlcnJgOiBgaWdub3JlYC5cbi8vIFVubGVzcyB0aGUgb3V0cHV0IGlzIG5lZWRlZCwgZS5nLiBkdWUgdG8gYHZlcmJvc2U6ICdmdWxsJ2Agb3IgdG8gcmVkaXJlY3RpbmcgdG8gYSBmaWxlLlxuY29uc3Qgbm9ybWFsaXplU3RkaW9TeW5jID0gKHN0ZGlvQXJyYXksIGJ1ZmZlciwgdmVyYm9zZUluZm8pID0+IHN0ZGlvQXJyYXkubWFwKChzdGRpb09wdGlvbiwgZmROdW1iZXIpID0+XG5cdCFidWZmZXJbZmROdW1iZXJdXG5cdCYmIGZkTnVtYmVyICE9PSAwXG5cdCYmICFpc0Z1bGxWZXJib3NlKHZlcmJvc2VJbmZvLCBmZE51bWJlcilcblx0JiYgaXNPdXRwdXRQaXBlT25seShzdGRpb09wdGlvbilcblx0XHQ/ICdpZ25vcmUnXG5cdFx0OiBzdGRpb09wdGlvbik7XG5cbmNvbnN0IGlzT3V0cHV0UGlwZU9ubHkgPSBzdGRpb09wdGlvbiA9PiBzdGRpb09wdGlvbiA9PT0gJ3BpcGUnXG5cdHx8IChBcnJheS5pc0FycmF5KHN0ZGlvT3B0aW9uKSAmJiBzdGRpb09wdGlvbi5ldmVyeShpdGVtID0+IGl0ZW0gPT09ICdwaXBlJykpO1xuIiwgImltcG9ydCB7cmVhZEZpbGVTeW5jfSBmcm9tICdub2RlOmZzJztcbmltcG9ydCB0dHkgZnJvbSAnbm9kZTp0dHknO1xuaW1wb3J0IHtpc1N0cmVhbSBhcyBpc05vZGVTdHJlYW19IGZyb20gJ2lzLXN0cmVhbSc7XG5pbXBvcnQge1NUQU5EQVJEX1NUUkVBTVN9IGZyb20gJy4uL3V0aWxzL3N0YW5kYXJkLXN0cmVhbS5qcyc7XG5pbXBvcnQge2J1ZmZlclRvVWludDhBcnJheX0gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5pbXBvcnQge3NlcmlhbGl6ZU9wdGlvblZhbHVlfSBmcm9tICcuLi9hcmd1bWVudHMvZmQtb3B0aW9ucy5qcyc7XG5cbi8vIFdoZW4gd2UgdXNlIG11bHRpcGxlIGBzdGRpb2AgdmFsdWVzIGZvciB0aGUgc2FtZSBzdHJlYW1zLCB3ZSBwYXNzICdwaXBlJyB0byBgY2hpbGRfcHJvY2Vzcy5zcGF3bigpYC5cbi8vIFdlIHRoZW4gZW11bGF0ZSB0aGUgcGlwaW5nIGRvbmUgYnkgY29yZSBOb2RlLmpzLlxuLy8gVG8gZG8gc28sIHdlIHRyYW5zZm9ybSB0aGUgZm9sbG93aW5nIHZhbHVlczpcbi8vICAtIE5vZGUuanMgc3RyZWFtcyBhcmUgbWFya2VkIGFzIGB0eXBlOiBub2RlU3RyZWFtYFxuLy8gIC0gJ2luaGVyaXQnIGJlY29tZXMgYHByb2Nlc3Muc3RkaW58c3Rkb3V0fHN0ZGVycmBcbi8vICAtIGFueSBmaWxlIGRlc2NyaXB0b3IgaW50ZWdlciBiZWNvbWVzIGBwcm9jZXNzLnN0ZGlvW2ZkTnVtYmVyXWBcbi8vIEFsbCBvZiB0aGUgYWJvdmUgdHJhbnNmb3JtYXRpb25zIHRlbGwgRXhlY2EgdG8gcGVyZm9ybSBtYW51YWwgcGlwaW5nLlxuZXhwb3J0IGNvbnN0IGhhbmRsZU5hdGl2ZVN0cmVhbSA9ICh7c3RkaW9JdGVtLCBzdGRpb0l0ZW06IHt0eXBlfSwgaXNTdGRpb0FycmF5LCBmZE51bWJlciwgZGlyZWN0aW9uLCBpc1N5bmN9KSA9PiB7XG5cdGlmICghaXNTdGRpb0FycmF5IHx8IHR5cGUgIT09ICduYXRpdmUnKSB7XG5cdFx0cmV0dXJuIHN0ZGlvSXRlbTtcblx0fVxuXG5cdHJldHVybiBpc1N5bmNcblx0XHQ/IGhhbmRsZU5hdGl2ZVN0cmVhbVN5bmMoe3N0ZGlvSXRlbSwgZmROdW1iZXIsIGRpcmVjdGlvbn0pXG5cdFx0OiBoYW5kbGVOYXRpdmVTdHJlYW1Bc3luYyh7c3RkaW9JdGVtLCBmZE51bWJlcn0pO1xufTtcblxuLy8gU3luY2hyb25vdXMgbWV0aG9kcyB1c2UgYSBkaWZmZXJlbnQgbG9naWMuXG4vLyAnaW5oZXJpdCcsIGZpbGUgZGVzY3JpcHRvcnMgYW5kIHByb2Nlc3Muc3RkKiBhcmUgaGFuZGxlZCBieSByZWFkRmlsZVN5bmMoKS93cml0ZUZpbGVTeW5jKCkuXG5jb25zdCBoYW5kbGVOYXRpdmVTdHJlYW1TeW5jID0gKHtzdGRpb0l0ZW0sIHN0ZGlvSXRlbToge3ZhbHVlLCBvcHRpb25OYW1lfSwgZmROdW1iZXIsIGRpcmVjdGlvbn0pID0+IHtcblx0Y29uc3QgdGFyZ2V0RmQgPSBnZXRUYXJnZXRGZCh7XG5cdFx0dmFsdWUsXG5cdFx0b3B0aW9uTmFtZSxcblx0XHRmZE51bWJlcixcblx0XHRkaXJlY3Rpb24sXG5cdH0pO1xuXHRpZiAodGFyZ2V0RmQgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB0YXJnZXRGZDtcblx0fVxuXG5cdGlmIChpc05vZGVTdHJlYW0odmFsdWUsIHtjaGVja09wZW46IGZhbHNlfSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfTogU3RyZWFtXFxgIG9wdGlvbiBjYW5ub3QgYm90aCBiZSBhbiBhcnJheSBhbmQgaW5jbHVkZSBhIHN0cmVhbSB3aXRoIHN5bmNocm9ub3VzIG1ldGhvZHMuYCk7XG5cdH1cblxuXHRyZXR1cm4gc3RkaW9JdGVtO1xufTtcblxuY29uc3QgZ2V0VGFyZ2V0RmQgPSAoe3ZhbHVlLCBvcHRpb25OYW1lLCBmZE51bWJlciwgZGlyZWN0aW9ufSkgPT4ge1xuXHRjb25zdCB0YXJnZXRGZE51bWJlciA9IGdldFRhcmdldEZkTnVtYmVyKHZhbHVlLCBmZE51bWJlcik7XG5cdGlmICh0YXJnZXRGZE51bWJlciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGRpcmVjdGlvbiA9PT0gJ291dHB1dCcpIHtcblx0XHRyZXR1cm4ge3R5cGU6ICdmaWxlTnVtYmVyJywgdmFsdWU6IHRhcmdldEZkTnVtYmVyLCBvcHRpb25OYW1lfTtcblx0fVxuXG5cdGlmICh0dHkuaXNhdHR5KHRhcmdldEZkTnVtYmVyKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9OiAke3NlcmlhbGl6ZU9wdGlvblZhbHVlKHZhbHVlKX1cXGAgb3B0aW9uIGlzIGludmFsaWQ6IGl0IGNhbm5vdCBiZSBhIFRUWSB3aXRoIHN5bmNocm9ub3VzIG1ldGhvZHMuYCk7XG5cdH1cblxuXHRyZXR1cm4ge3R5cGU6ICd1aW50OEFycmF5JywgdmFsdWU6IGJ1ZmZlclRvVWludDhBcnJheShyZWFkRmlsZVN5bmModGFyZ2V0RmROdW1iZXIpKSwgb3B0aW9uTmFtZX07XG59O1xuXG5jb25zdCBnZXRUYXJnZXRGZE51bWJlciA9ICh2YWx1ZSwgZmROdW1iZXIpID0+IHtcblx0aWYgKHZhbHVlID09PSAnaW5oZXJpdCcpIHtcblx0XHRyZXR1cm4gZmROdW1iZXI7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGNvbnN0IHN0YW5kYXJkU3RyZWFtSW5kZXggPSBTVEFOREFSRF9TVFJFQU1TLmluZGV4T2YodmFsdWUpO1xuXHRpZiAoc3RhbmRhcmRTdHJlYW1JbmRleCAhPT0gLTEpIHtcblx0XHRyZXR1cm4gc3RhbmRhcmRTdHJlYW1JbmRleDtcblx0fVxufTtcblxuY29uc3QgaGFuZGxlTmF0aXZlU3RyZWFtQXN5bmMgPSAoe3N0ZGlvSXRlbSwgc3RkaW9JdGVtOiB7dmFsdWUsIG9wdGlvbk5hbWV9LCBmZE51bWJlcn0pID0+IHtcblx0aWYgKHZhbHVlID09PSAnaW5oZXJpdCcpIHtcblx0XHRyZXR1cm4ge3R5cGU6ICdub2RlU3RyZWFtJywgdmFsdWU6IGdldFN0YW5kYXJkU3RyZWFtKGZkTnVtYmVyLCB2YWx1ZSwgb3B0aW9uTmFtZSksIG9wdGlvbk5hbWV9O1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcblx0XHRyZXR1cm4ge3R5cGU6ICdub2RlU3RyZWFtJywgdmFsdWU6IGdldFN0YW5kYXJkU3RyZWFtKHZhbHVlLCB2YWx1ZSwgb3B0aW9uTmFtZSksIG9wdGlvbk5hbWV9O1xuXHR9XG5cblx0aWYgKGlzTm9kZVN0cmVhbSh2YWx1ZSwge2NoZWNrT3BlbjogZmFsc2V9KSkge1xuXHRcdHJldHVybiB7dHlwZTogJ25vZGVTdHJlYW0nLCB2YWx1ZSwgb3B0aW9uTmFtZX07XG5cdH1cblxuXHRyZXR1cm4gc3RkaW9JdGVtO1xufTtcblxuLy8gTm9kZS5qcyBkb2VzIG5vdCBhbGxvdyB0byBlYXNpbHkgcmV0cmlldmUgZmlsZSBkZXNjcmlwdG9ycyBiZXlvbmQgc3RkaW4vc3Rkb3V0L3N0ZGVyciBhcyBzdHJlYW1zLlxuLy8gIC0gYGZzLmNyZWF0ZVJlYWRTdHJlYW0oKWAvYGZzLmNyZWF0ZVdyaXRlU3RyZWFtKClgIHdpdGggdGhlIGBmZGAgb3B0aW9uIGRvIG5vdCB3b3JrIHdpdGggY2hhcmFjdGVyIGRldmljZXMgdGhhdCB1c2UgYmxvY2tpbmcgcmVhZHMvd3JpdGVzIChzdWNoIGFzIGludGVyYWN0aXZlIFRUWXMpLlxuLy8gIC0gVXNpbmcgYSBUQ1AgYFNvY2tldGAgd291bGQgd29yayBidXQgYmUgcmF0aGVyIGNvbXBsZXggdG8gaW1wbGVtZW50LlxuLy8gU2luY2UgdGhpcyBpcyBhbiBlZGdlIGNhc2UsIHdlIHNpbXBseSB0aHJvdyBhbiBlcnJvciBtZXNzYWdlLlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvZXhlY2EvcHVsbC82NDMjZGlzY3Vzc2lvbl9yMTQzNTkwNTcwN1xuY29uc3QgZ2V0U3RhbmRhcmRTdHJlYW0gPSAoZmROdW1iZXIsIHZhbHVlLCBvcHRpb25OYW1lKSA9PiB7XG5cdGNvbnN0IHN0YW5kYXJkU3RyZWFtID0gU1RBTkRBUkRfU1RSRUFNU1tmZE51bWJlcl07XG5cblx0aWYgKHN0YW5kYXJkU3RyZWFtID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfTogJHt2YWx1ZX1cXGAgb3B0aW9uIGlzIGludmFsaWQ6IG5vIHN1Y2ggc3RhbmRhcmQgc3RyZWFtLmApO1xuXHR9XG5cblx0cmV0dXJuIHN0YW5kYXJkU3RyZWFtO1xufTtcbiIsICJpbXBvcnQge2lzUmVhZGFibGVTdHJlYW19IGZyb20gJ2lzLXN0cmVhbSc7XG5pbXBvcnQge2lzVWludDhBcnJheX0gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5pbXBvcnQge2lzVXJsLCBpc0ZpbGVQYXRoU3RyaW5nfSBmcm9tICcuL3R5cGUuanMnO1xuXG4vLyBBcHBlbmQgdGhlIGBzdGRpbmAgb3B0aW9uIHdpdGggdGhlIGBpbnB1dGAgYW5kIGBpbnB1dEZpbGVgIG9wdGlvbnNcbmV4cG9ydCBjb25zdCBoYW5kbGVJbnB1dE9wdGlvbnMgPSAoe2lucHV0LCBpbnB1dEZpbGV9LCBmZE51bWJlcikgPT4gZmROdW1iZXIgPT09IDBcblx0PyBbXG5cdFx0Li4uaGFuZGxlSW5wdXRPcHRpb24oaW5wdXQpLFxuXHRcdC4uLmhhbmRsZUlucHV0RmlsZU9wdGlvbihpbnB1dEZpbGUpLFxuXHRdXG5cdDogW107XG5cbmNvbnN0IGhhbmRsZUlucHV0T3B0aW9uID0gaW5wdXQgPT4gaW5wdXQgPT09IHVuZGVmaW5lZCA/IFtdIDogW3tcblx0dHlwZTogZ2V0SW5wdXRUeXBlKGlucHV0KSxcblx0dmFsdWU6IGlucHV0LFxuXHRvcHRpb25OYW1lOiAnaW5wdXQnLFxufV07XG5cbmNvbnN0IGdldElucHV0VHlwZSA9IGlucHV0ID0+IHtcblx0aWYgKGlzUmVhZGFibGVTdHJlYW0oaW5wdXQsIHtjaGVja09wZW46IGZhbHNlfSkpIHtcblx0XHRyZXR1cm4gJ25vZGVTdHJlYW0nO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gJ3N0cmluZyc7XG5cdH1cblxuXHRpZiAoaXNVaW50OEFycmF5KGlucHV0KSkge1xuXHRcdHJldHVybiAndWludDhBcnJheSc7XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgaW5wdXRgIG9wdGlvbiBtdXN0IGJlIGEgc3RyaW5nLCBhIFVpbnQ4QXJyYXkgb3IgYSBOb2RlLmpzIFJlYWRhYmxlIHN0cmVhbS4nKTtcbn07XG5cbmNvbnN0IGhhbmRsZUlucHV0RmlsZU9wdGlvbiA9IGlucHV0RmlsZSA9PiBpbnB1dEZpbGUgPT09IHVuZGVmaW5lZCA/IFtdIDogW3tcblx0Li4uZ2V0SW5wdXRGaWxlVHlwZShpbnB1dEZpbGUpLFxuXHRvcHRpb25OYW1lOiAnaW5wdXRGaWxlJyxcbn1dO1xuXG5jb25zdCBnZXRJbnB1dEZpbGVUeXBlID0gaW5wdXRGaWxlID0+IHtcblx0aWYgKGlzVXJsKGlucHV0RmlsZSkpIHtcblx0XHRyZXR1cm4ge3R5cGU6ICdmaWxlVXJsJywgdmFsdWU6IGlucHV0RmlsZX07XG5cdH1cblxuXHRpZiAoaXNGaWxlUGF0aFN0cmluZyhpbnB1dEZpbGUpKSB7XG5cdFx0cmV0dXJuIHt0eXBlOiAnZmlsZVBhdGgnLCB2YWx1ZToge2ZpbGU6IGlucHV0RmlsZX19O1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYGlucHV0RmlsZWAgb3B0aW9uIG11c3QgYmUgYSBmaWxlIHBhdGggc3RyaW5nIG9yIGEgZmlsZSBVUkwuJyk7XG59O1xuIiwgImltcG9ydCB7XG5cdFNQRUNJQUxfRFVQTElDQVRFX1RZUEVTX1NZTkMsXG5cdFNQRUNJQUxfRFVQTElDQVRFX1RZUEVTLFxuXHRGT1JCSURfRFVQTElDQVRFX1RZUEVTLFxuXHRUWVBFX1RPX01FU1NBR0UsXG59IGZyb20gJy4vdHlwZS5qcyc7XG5cbi8vIER1cGxpY2F0ZXMgaW4gdGhlIHNhbWUgZmlsZSBkZXNjcmlwdG9yIGlzIG1vc3QgbGlrZWx5IGFuIGVycm9yLlxuLy8gSG93ZXZlciwgdGhpcyBjYW4gYmUgdXNlZnVsIHdpdGggZ2VuZXJhdG9ycy5cbmV4cG9ydCBjb25zdCBmaWx0ZXJEdXBsaWNhdGVzID0gc3RkaW9JdGVtcyA9PiBzdGRpb0l0ZW1zLmZpbHRlcigoc3RkaW9JdGVtT25lLCBpbmRleE9uZSkgPT5cblx0c3RkaW9JdGVtcy5ldmVyeSgoc3RkaW9JdGVtVHdvLCBpbmRleFR3bykgPT4gc3RkaW9JdGVtT25lLnZhbHVlICE9PSBzdGRpb0l0ZW1Ud28udmFsdWVcblx0XHR8fCBpbmRleE9uZSA+PSBpbmRleFR3b1xuXHRcdHx8IHN0ZGlvSXRlbU9uZS50eXBlID09PSAnZ2VuZXJhdG9yJ1xuXHRcdHx8IHN0ZGlvSXRlbU9uZS50eXBlID09PSAnYXN5bmNHZW5lcmF0b3InKSk7XG5cbi8vIENoZWNrIGlmIHR3byBmaWxlIGRlc2NyaXB0b3JzIGFyZSBzaGFyaW5nIHRoZSBzYW1lIHRhcmdldC5cbi8vIEZvciBleGFtcGxlIGB7c3Rkb3V0OiB7ZmlsZTogJy4vb3V0cHV0LnR4dCd9LCBzdGRlcnI6IHtmaWxlOiAnLi9vdXRwdXQudHh0J319YC5cbmV4cG9ydCBjb25zdCBnZXREdXBsaWNhdGVTdHJlYW0gPSAoe3N0ZGlvSXRlbToge3R5cGUsIHZhbHVlLCBvcHRpb25OYW1lfSwgZGlyZWN0aW9uLCBmaWxlRGVzY3JpcHRvcnMsIGlzU3luY30pID0+IHtcblx0Y29uc3Qgb3RoZXJTdGRpb0l0ZW1zID0gZ2V0T3RoZXJTdGRpb0l0ZW1zKGZpbGVEZXNjcmlwdG9ycywgdHlwZSk7XG5cdGlmIChvdGhlclN0ZGlvSXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGlzU3luYykge1xuXHRcdHZhbGlkYXRlRHVwbGljYXRlU3RyZWFtU3luYyh7XG5cdFx0XHRvdGhlclN0ZGlvSXRlbXMsXG5cdFx0XHR0eXBlLFxuXHRcdFx0dmFsdWUsXG5cdFx0XHRvcHRpb25OYW1lLFxuXHRcdFx0ZGlyZWN0aW9uLFxuXHRcdH0pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChTUEVDSUFMX0RVUExJQ0FURV9UWVBFUy5oYXModHlwZSkpIHtcblx0XHRyZXR1cm4gZ2V0RHVwbGljYXRlU3RyZWFtSW5zdGFuY2Uoe1xuXHRcdFx0b3RoZXJTdGRpb0l0ZW1zLFxuXHRcdFx0dHlwZSxcblx0XHRcdHZhbHVlLFxuXHRcdFx0b3B0aW9uTmFtZSxcblx0XHRcdGRpcmVjdGlvbixcblx0XHR9KTtcblx0fVxuXG5cdGlmIChGT1JCSURfRFVQTElDQVRFX1RZUEVTLmhhcyh0eXBlKSkge1xuXHRcdHZhbGlkYXRlRHVwbGljYXRlVHJhbnNmb3JtKHtcblx0XHRcdG90aGVyU3RkaW9JdGVtcyxcblx0XHRcdHR5cGUsXG5cdFx0XHR2YWx1ZSxcblx0XHRcdG9wdGlvbk5hbWUsXG5cdFx0fSk7XG5cdH1cbn07XG5cbi8vIFZhbHVlcyBzaGFyZWQgYnkgbXVsdGlwbGUgZmlsZSBkZXNjcmlwdG9yc1xuY29uc3QgZ2V0T3RoZXJTdGRpb0l0ZW1zID0gKGZpbGVEZXNjcmlwdG9ycywgdHlwZSkgPT4gZmlsZURlc2NyaXB0b3JzXG5cdC5mbGF0TWFwKCh7ZGlyZWN0aW9uLCBzdGRpb0l0ZW1zfSkgPT4gc3RkaW9JdGVtc1xuXHRcdC5maWx0ZXIoc3RkaW9JdGVtID0+IHN0ZGlvSXRlbS50eXBlID09PSB0eXBlKVxuXHRcdC5tYXAoKHN0ZGlvSXRlbSA9PiAoey4uLnN0ZGlvSXRlbSwgZGlyZWN0aW9ufSkpKSk7XG5cbi8vIFdpdGggYGV4ZWNhU3luYygpYCwgZG8gbm90IGFsbG93IHNldHRpbmcgYSBmaWxlIHBhdGggYm90aCBpbiBpbnB1dCBhbmQgb3V0cHV0XG5jb25zdCB2YWxpZGF0ZUR1cGxpY2F0ZVN0cmVhbVN5bmMgPSAoe290aGVyU3RkaW9JdGVtcywgdHlwZSwgdmFsdWUsIG9wdGlvbk5hbWUsIGRpcmVjdGlvbn0pID0+IHtcblx0aWYgKFNQRUNJQUxfRFVQTElDQVRFX1RZUEVTX1NZTkMuaGFzKHR5cGUpKSB7XG5cdFx0Z2V0RHVwbGljYXRlU3RyZWFtSW5zdGFuY2Uoe1xuXHRcdFx0b3RoZXJTdGRpb0l0ZW1zLFxuXHRcdFx0dHlwZSxcblx0XHRcdHZhbHVlLFxuXHRcdFx0b3B0aW9uTmFtZSxcblx0XHRcdGRpcmVjdGlvbixcblx0XHR9KTtcblx0fVxufTtcblxuLy8gV2hlbiB0d28gZmlsZSBkZXNjcmlwdG9ycyBzaGFyZSB0aGUgZmlsZSBvciBzdHJlYW0sIHdlIG5lZWQgdG8gcmUtdXNlIHRoZSBzYW1lIHVuZGVybHlpbmcgc3RyZWFtLlxuLy8gT3RoZXJ3aXNlLCB0aGUgc3RyZWFtIHdvdWxkIGJlIGNsb3NlZCB0d2ljZSB3aGVuIHBpcGluZyBlbmRzLlxuLy8gVGhpcyBpcyBvbmx5IGFuIGlzc3VlIHdpdGggb3V0cHV0IGZpbGUgZGVzY3JpcHRvcnMuXG4vLyBUaGlzIGlzIG5vdCBhIHByb2JsZW0gd2l0aCBnZW5lcmF0b3IgZnVuY3Rpb25zIHNpbmNlIHRob3NlIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBmb3IgZWFjaCBmaWxlIGRlc2NyaXB0b3IuXG4vLyBXZSBhbHNvIGZvcmJpZCBpbnB1dCBhbmQgb3V0cHV0IGZpbGUgZGVzY3JpcHRvcnMgc2hhcmluZyB0aGUgc2FtZSBmaWxlIG9yIHN0cmVhbSwgc2luY2UgdGhhdCBkb2VzIG5vdCBtYWtlIHNlbnNlLlxuY29uc3QgZ2V0RHVwbGljYXRlU3RyZWFtSW5zdGFuY2UgPSAoe290aGVyU3RkaW9JdGVtcywgdHlwZSwgdmFsdWUsIG9wdGlvbk5hbWUsIGRpcmVjdGlvbn0pID0+IHtcblx0Y29uc3QgZHVwbGljYXRlU3RkaW9JdGVtcyA9IG90aGVyU3RkaW9JdGVtcy5maWx0ZXIoc3RkaW9JdGVtID0+IGhhc1NhbWVWYWx1ZShzdGRpb0l0ZW0sIHZhbHVlKSk7XG5cdGlmIChkdXBsaWNhdGVTdGRpb0l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGRpZmZlcmVudFN0ZGlvSXRlbSA9IGR1cGxpY2F0ZVN0ZGlvSXRlbXMuZmluZChzdGRpb0l0ZW0gPT4gc3RkaW9JdGVtLmRpcmVjdGlvbiAhPT0gZGlyZWN0aW9uKTtcblx0dGhyb3dPbkR1cGxpY2F0ZVN0cmVhbShkaWZmZXJlbnRTdGRpb0l0ZW0sIG9wdGlvbk5hbWUsIHR5cGUpO1xuXG5cdHJldHVybiBkaXJlY3Rpb24gPT09ICdvdXRwdXQnID8gZHVwbGljYXRlU3RkaW9JdGVtc1swXS5zdHJlYW0gOiB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBoYXNTYW1lVmFsdWUgPSAoe3R5cGUsIHZhbHVlfSwgc2Vjb25kVmFsdWUpID0+IHtcblx0aWYgKHR5cGUgPT09ICdmaWxlUGF0aCcpIHtcblx0XHRyZXR1cm4gdmFsdWUuZmlsZSA9PT0gc2Vjb25kVmFsdWUuZmlsZTtcblx0fVxuXG5cdGlmICh0eXBlID09PSAnZmlsZVVybCcpIHtcblx0XHRyZXR1cm4gdmFsdWUuaHJlZiA9PT0gc2Vjb25kVmFsdWUuaHJlZjtcblx0fVxuXG5cdHJldHVybiB2YWx1ZSA9PT0gc2Vjb25kVmFsdWU7XG59O1xuXG4vLyBXZSBkbyBub3QgYWxsb3cgdHdvIGZpbGUgZGVzY3JpcHRvcnMgdG8gc2hhcmUgdGhlIHNhbWUgRHVwbGV4IG9yIFRyYW5zZm9ybVN0cmVhbS5cbi8vIFRoaXMgaXMgYmVjYXVzZSB0aG9zZSBhcmUgc2V0IGRpcmVjdGx5IHRvIGBzdWJwcm9jZXNzLnN0ZCpgLlxuLy8gRm9yIGV4YW1wbGUsIHRoaXMgY291bGQgcmVzdWx0IGluIGBzdWJwcm9jZXNzLnN0ZG91dGAgYW5kIGBzdWJwcm9jZXNzLnN0ZGVycmAgYmVpbmcgdGhlIHNhbWUgdmFsdWUuXG4vLyBUaGlzIG1lYW5zIHJlYWRpbmcgZnJvbSBlaXRoZXIgd291bGQgZ2V0IGRhdGEgZnJvbSBib3RoIHN0ZG91dCBhbmQgc3RkZXJyLlxuY29uc3QgdmFsaWRhdGVEdXBsaWNhdGVUcmFuc2Zvcm0gPSAoe290aGVyU3RkaW9JdGVtcywgdHlwZSwgdmFsdWUsIG9wdGlvbk5hbWV9KSA9PiB7XG5cdGNvbnN0IGR1cGxpY2F0ZVN0ZGlvSXRlbSA9IG90aGVyU3RkaW9JdGVtcy5maW5kKCh7dmFsdWU6IHt0cmFuc2Zvcm19fSkgPT4gdHJhbnNmb3JtID09PSB2YWx1ZS50cmFuc2Zvcm0pO1xuXHR0aHJvd09uRHVwbGljYXRlU3RyZWFtKGR1cGxpY2F0ZVN0ZGlvSXRlbSwgb3B0aW9uTmFtZSwgdHlwZSk7XG59O1xuXG5jb25zdCB0aHJvd09uRHVwbGljYXRlU3RyZWFtID0gKHN0ZGlvSXRlbSwgb3B0aW9uTmFtZSwgdHlwZSkgPT4ge1xuXHRpZiAoc3RkaW9JdGVtICE9PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtzdGRpb0l0ZW0ub3B0aW9uTmFtZX1cXGAgYW5kIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9ucyBtdXN0IG5vdCB0YXJnZXQgJHtUWVBFX1RPX01FU1NBR0VbdHlwZV19IHRoYXQgaXMgdGhlIHNhbWUuYCk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHtnZXRTdHJlYW1OYW1lLCBpc1N0YW5kYXJkU3RyZWFtfSBmcm9tICcuLi91dGlscy9zdGFuZGFyZC1zdHJlYW0uanMnO1xuaW1wb3J0IHtub3JtYWxpemVUcmFuc2Zvcm1zfSBmcm9tICcuLi90cmFuc2Zvcm0vbm9ybWFsaXplLmpzJztcbmltcG9ydCB7Z2V0RmRPYmplY3RNb2RlfSBmcm9tICcuLi90cmFuc2Zvcm0vb2JqZWN0LW1vZGUuanMnO1xuaW1wb3J0IHtcblx0Z2V0U3RkaW9JdGVtVHlwZSxcblx0aXNSZWd1bGFyVXJsLFxuXHRpc1Vua25vd25TdGRpb1N0cmluZyxcblx0RklMRV9UWVBFUyxcbn0gZnJvbSAnLi90eXBlLmpzJztcbmltcG9ydCB7Z2V0U3RyZWFtRGlyZWN0aW9ufSBmcm9tICcuL2RpcmVjdGlvbi5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZVN0ZGlvT3B0aW9ufSBmcm9tICcuL3N0ZGlvLW9wdGlvbi5qcyc7XG5pbXBvcnQge2hhbmRsZU5hdGl2ZVN0cmVhbX0gZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHtoYW5kbGVJbnB1dE9wdGlvbnN9IGZyb20gJy4vaW5wdXQtb3B0aW9uLmpzJztcbmltcG9ydCB7ZmlsdGVyRHVwbGljYXRlcywgZ2V0RHVwbGljYXRlU3RyZWFtfSBmcm9tICcuL2R1cGxpY2F0ZS5qcyc7XG5cbi8vIEhhbmRsZSBgaW5wdXRgLCBgaW5wdXRGaWxlYCwgYHN0ZGluYCwgYHN0ZG91dGAgYW5kIGBzdGRlcnJgIG9wdGlvbnMsIGJlZm9yZSBzcGF3bmluZywgaW4gYXN5bmMvc3luYyBtb2RlXG4vLyBUaGV5IGFyZSBjb252ZXJ0ZWQgaW50byBhbiBhcnJheSBvZiBgZmlsZURlc2NyaXB0b3JzYC5cbi8vIEVhY2ggYGZpbGVEZXNjcmlwdG9yYCBpcyBub3JtYWxpemVkLCB2YWxpZGF0ZWQgYW5kIGNvbnRhaW5zIGFsbCBpbmZvcm1hdGlvbiBuZWNlc3NhcnkgZm9yIGZ1cnRoZXIgaGFuZGxpbmcuXG5leHBvcnQgY29uc3QgaGFuZGxlU3RkaW8gPSAoYWRkUHJvcGVydGllcywgb3B0aW9ucywgdmVyYm9zZUluZm8sIGlzU3luYykgPT4ge1xuXHRjb25zdCBzdGRpbyA9IG5vcm1hbGl6ZVN0ZGlvT3B0aW9uKG9wdGlvbnMsIHZlcmJvc2VJbmZvLCBpc1N5bmMpO1xuXHRjb25zdCBpbml0aWFsRmlsZURlc2NyaXB0b3JzID0gc3RkaW8ubWFwKChzdGRpb09wdGlvbiwgZmROdW1iZXIpID0+IGdldEZpbGVEZXNjcmlwdG9yKHtcblx0XHRzdGRpb09wdGlvbixcblx0XHRmZE51bWJlcixcblx0XHRvcHRpb25zLFxuXHRcdGlzU3luYyxcblx0fSkpO1xuXHRjb25zdCBmaWxlRGVzY3JpcHRvcnMgPSBnZXRGaW5hbEZpbGVEZXNjcmlwdG9ycyh7XG5cdFx0aW5pdGlhbEZpbGVEZXNjcmlwdG9ycyxcblx0XHRhZGRQcm9wZXJ0aWVzLFxuXHRcdG9wdGlvbnMsXG5cdFx0aXNTeW5jLFxuXHR9KTtcblx0b3B0aW9ucy5zdGRpbyA9IGZpbGVEZXNjcmlwdG9ycy5tYXAoKHtzdGRpb0l0ZW1zfSkgPT4gZm9yd2FyZFN0ZGlvKHN0ZGlvSXRlbXMpKTtcblx0cmV0dXJuIGZpbGVEZXNjcmlwdG9ycztcbn07XG5cbmNvbnN0IGdldEZpbGVEZXNjcmlwdG9yID0gKHtzdGRpb09wdGlvbiwgZmROdW1iZXIsIG9wdGlvbnMsIGlzU3luY30pID0+IHtcblx0Y29uc3Qgb3B0aW9uTmFtZSA9IGdldFN0cmVhbU5hbWUoZmROdW1iZXIpO1xuXHRjb25zdCB7c3RkaW9JdGVtczogaW5pdGlhbFN0ZGlvSXRlbXMsIGlzU3RkaW9BcnJheX0gPSBpbml0aWFsaXplU3RkaW9JdGVtcyh7XG5cdFx0c3RkaW9PcHRpb24sXG5cdFx0ZmROdW1iZXIsXG5cdFx0b3B0aW9ucyxcblx0XHRvcHRpb25OYW1lLFxuXHR9KTtcblx0Y29uc3QgZGlyZWN0aW9uID0gZ2V0U3RyZWFtRGlyZWN0aW9uKGluaXRpYWxTdGRpb0l0ZW1zLCBmZE51bWJlciwgb3B0aW9uTmFtZSk7XG5cdGNvbnN0IHN0ZGlvSXRlbXMgPSBpbml0aWFsU3RkaW9JdGVtcy5tYXAoc3RkaW9JdGVtID0+IGhhbmRsZU5hdGl2ZVN0cmVhbSh7XG5cdFx0c3RkaW9JdGVtLFxuXHRcdGlzU3RkaW9BcnJheSxcblx0XHRmZE51bWJlcixcblx0XHRkaXJlY3Rpb24sXG5cdFx0aXNTeW5jLFxuXHR9KSk7XG5cdGNvbnN0IG5vcm1hbGl6ZWRTdGRpb0l0ZW1zID0gbm9ybWFsaXplVHJhbnNmb3JtcyhzdGRpb0l0ZW1zLCBvcHRpb25OYW1lLCBkaXJlY3Rpb24sIG9wdGlvbnMpO1xuXHRjb25zdCBvYmplY3RNb2RlID0gZ2V0RmRPYmplY3RNb2RlKG5vcm1hbGl6ZWRTdGRpb0l0ZW1zLCBkaXJlY3Rpb24pO1xuXHR2YWxpZGF0ZUZpbGVPYmplY3RNb2RlKG5vcm1hbGl6ZWRTdGRpb0l0ZW1zLCBvYmplY3RNb2RlKTtcblx0cmV0dXJuIHtkaXJlY3Rpb24sIG9iamVjdE1vZGUsIHN0ZGlvSXRlbXM6IG5vcm1hbGl6ZWRTdGRpb0l0ZW1zfTtcbn07XG5cbi8vIFdlIG1ha2Ugc3VyZSBwYXNzaW5nIGFuIGFycmF5IHdpdGggYSBzaW5nbGUgaXRlbSBiZWhhdmVzIHRoZSBzYW1lIGFzIHBhc3NpbmcgdGhhdCBpdGVtIHdpdGhvdXQgYW4gYXJyYXkuXG4vLyBUaGlzIGlzIHdoYXQgdXNlcnMgd291bGQgZXhwZWN0LlxuLy8gRm9yIGV4YW1wbGUsIGBzdGRvdXQ6IFsnaWdub3JlJ11gIGJlaGF2ZXMgdGhlIHNhbWUgYXMgYHN0ZG91dDogJ2lnbm9yZSdgLlxuY29uc3QgaW5pdGlhbGl6ZVN0ZGlvSXRlbXMgPSAoe3N0ZGlvT3B0aW9uLCBmZE51bWJlciwgb3B0aW9ucywgb3B0aW9uTmFtZX0pID0+IHtcblx0Y29uc3QgdmFsdWVzID0gQXJyYXkuaXNBcnJheShzdGRpb09wdGlvbikgPyBzdGRpb09wdGlvbiA6IFtzdGRpb09wdGlvbl07XG5cdGNvbnN0IGluaXRpYWxTdGRpb0l0ZW1zID0gW1xuXHRcdC4uLnZhbHVlcy5tYXAodmFsdWUgPT4gaW5pdGlhbGl6ZVN0ZGlvSXRlbSh2YWx1ZSwgb3B0aW9uTmFtZSkpLFxuXHRcdC4uLmhhbmRsZUlucHV0T3B0aW9ucyhvcHRpb25zLCBmZE51bWJlciksXG5cdF07XG5cblx0Y29uc3Qgc3RkaW9JdGVtcyA9IGZpbHRlckR1cGxpY2F0ZXMoaW5pdGlhbFN0ZGlvSXRlbXMpO1xuXHRjb25zdCBpc1N0ZGlvQXJyYXkgPSBzdGRpb0l0ZW1zLmxlbmd0aCA+IDE7XG5cdHZhbGlkYXRlU3RkaW9BcnJheShzdGRpb0l0ZW1zLCBpc1N0ZGlvQXJyYXksIG9wdGlvbk5hbWUpO1xuXHR2YWxpZGF0ZVN0cmVhbXMoc3RkaW9JdGVtcyk7XG5cdHJldHVybiB7c3RkaW9JdGVtcywgaXNTdGRpb0FycmF5fTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVTdGRpb0l0ZW0gPSAodmFsdWUsIG9wdGlvbk5hbWUpID0+ICh7XG5cdHR5cGU6IGdldFN0ZGlvSXRlbVR5cGUodmFsdWUsIG9wdGlvbk5hbWUpLFxuXHR2YWx1ZSxcblx0b3B0aW9uTmFtZSxcbn0pO1xuXG5jb25zdCB2YWxpZGF0ZVN0ZGlvQXJyYXkgPSAoc3RkaW9JdGVtcywgaXNTdGRpb0FycmF5LCBvcHRpb25OYW1lKSA9PiB7XG5cdGlmIChzdGRpb0l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9XFxgIG9wdGlvbiBtdXN0IG5vdCBiZSBhbiBlbXB0eSBhcnJheS5gKTtcblx0fVxuXG5cdGlmICghaXNTdGRpb0FycmF5KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCB7dmFsdWUsIG9wdGlvbk5hbWV9IG9mIHN0ZGlvSXRlbXMpIHtcblx0XHRpZiAoSU5WQUxJRF9TVERJT19BUlJBWV9PUFRJT05TLmhhcyh2YWx1ZSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uIG11c3Qgbm90IGluY2x1ZGUgXFxgJHt2YWx1ZX1cXGAuYCk7XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBVc2luZyB0aG9zZSBgc3RkaW9gIHZhbHVlcyB0b2dldGhlciB3aXRoIG90aGVycyBmb3IgdGhlIHNhbWUgc3RyZWFtIGRvZXMgbm90IG1ha2Ugc2Vuc2UsIHNvIHdlIG1ha2UgaXQgZmFpbC5cbi8vIEhvd2V2ZXIsIHdlIGRvIGFsbG93IGl0IGlmIHRoZSBhcnJheSBoYXMgYSBzaW5nbGUgaXRlbS5cbmNvbnN0IElOVkFMSURfU1RESU9fQVJSQVlfT1BUSU9OUyA9IG5ldyBTZXQoWydpZ25vcmUnLCAnaXBjJ10pO1xuXG5jb25zdCB2YWxpZGF0ZVN0cmVhbXMgPSBzdGRpb0l0ZW1zID0+IHtcblx0Zm9yIChjb25zdCBzdGRpb0l0ZW0gb2Ygc3RkaW9JdGVtcykge1xuXHRcdHZhbGlkYXRlRmlsZVN0ZGlvKHN0ZGlvSXRlbSk7XG5cdH1cbn07XG5cbmNvbnN0IHZhbGlkYXRlRmlsZVN0ZGlvID0gKHt0eXBlLCB2YWx1ZSwgb3B0aW9uTmFtZX0pID0+IHtcblx0aWYgKGlzUmVndWxhclVybCh2YWx1ZSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfTogVVJMXFxgIG9wdGlvbiBtdXN0IHVzZSB0aGUgXFxgZmlsZTpcXGAgc2NoZW1lLlxuRm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlIHRoZSBcXGBwYXRoVG9GaWxlVVJMKClcXGAgbWV0aG9kIG9mIHRoZSBcXGB1cmxcXGAgY29yZSBtb2R1bGUuYCk7XG5cdH1cblxuXHRpZiAoaXNVbmtub3duU3RkaW9TdHJpbmcodHlwZSwgdmFsdWUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX06IHsgZmlsZTogJy4uLicgfVxcYCBvcHRpb24gbXVzdCBiZSB1c2VkIGluc3RlYWQgb2YgXFxgJHtvcHRpb25OYW1lfTogJy4uLidcXGAuYCk7XG5cdH1cbn07XG5cbmNvbnN0IHZhbGlkYXRlRmlsZU9iamVjdE1vZGUgPSAoc3RkaW9JdGVtcywgb2JqZWN0TW9kZSkgPT4ge1xuXHRpZiAoIW9iamVjdE1vZGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBmaWxlU3RkaW9JdGVtID0gc3RkaW9JdGVtcy5maW5kKCh7dHlwZX0pID0+IEZJTEVfVFlQRVMuaGFzKHR5cGUpKTtcblx0aWYgKGZpbGVTdGRpb0l0ZW0gIT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke2ZpbGVTdGRpb0l0ZW0ub3B0aW9uTmFtZX1cXGAgb3B0aW9uIGNhbm5vdCB1c2UgYm90aCBmaWxlcyBhbmQgdHJhbnNmb3JtcyBpbiBvYmplY3RNb2RlLmApO1xuXHR9XG59O1xuXG4vLyBTb21lIGBzdGRpb2AgdmFsdWVzIHJlcXVpcmUgRXhlY2EgdG8gY3JlYXRlIHN0cmVhbXMuXG4vLyBGb3IgZXhhbXBsZSwgZmlsZSBwYXRocyBjcmVhdGUgZmlsZSByZWFkL3dyaXRlIHN0cmVhbXMuXG4vLyBUaG9zZSB0cmFuc2Zvcm1hdGlvbnMgYXJlIHNwZWNpZmllZCBpbiBgYWRkUHJvcGVydGllc2AsIHdoaWNoIGlzIGJvdGggZGlyZWN0aW9uLXNwZWNpZmljIGFuZCB0eXBlLXNwZWNpZmljLlxuY29uc3QgZ2V0RmluYWxGaWxlRGVzY3JpcHRvcnMgPSAoe2luaXRpYWxGaWxlRGVzY3JpcHRvcnMsIGFkZFByb3BlcnRpZXMsIG9wdGlvbnMsIGlzU3luY30pID0+IHtcblx0Y29uc3QgZmlsZURlc2NyaXB0b3JzID0gW107XG5cblx0dHJ5IHtcblx0XHRmb3IgKGNvbnN0IGZpbGVEZXNjcmlwdG9yIG9mIGluaXRpYWxGaWxlRGVzY3JpcHRvcnMpIHtcblx0XHRcdGZpbGVEZXNjcmlwdG9ycy5wdXNoKGdldEZpbmFsRmlsZURlc2NyaXB0b3Ioe1xuXHRcdFx0XHRmaWxlRGVzY3JpcHRvcixcblx0XHRcdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdFx0XHRhZGRQcm9wZXJ0aWVzLFxuXHRcdFx0XHRvcHRpb25zLFxuXHRcdFx0XHRpc1N5bmMsXG5cdFx0XHR9KSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbGVEZXNjcmlwdG9ycztcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjbGVhbnVwQ3VzdG9tU3RyZWFtcyhmaWxlRGVzY3JpcHRvcnMpO1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuXG5jb25zdCBnZXRGaW5hbEZpbGVEZXNjcmlwdG9yID0gKHtcblx0ZmlsZURlc2NyaXB0b3I6IHtkaXJlY3Rpb24sIG9iamVjdE1vZGUsIHN0ZGlvSXRlbXN9LFxuXHRmaWxlRGVzY3JpcHRvcnMsXG5cdGFkZFByb3BlcnRpZXMsXG5cdG9wdGlvbnMsXG5cdGlzU3luYyxcbn0pID0+IHtcblx0Y29uc3QgZmluYWxTdGRpb0l0ZW1zID0gc3RkaW9JdGVtcy5tYXAoc3RkaW9JdGVtID0+IGFkZFN0cmVhbVByb3BlcnRpZXMoe1xuXHRcdHN0ZGlvSXRlbSxcblx0XHRhZGRQcm9wZXJ0aWVzLFxuXHRcdGRpcmVjdGlvbixcblx0XHRvcHRpb25zLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRpc1N5bmMsXG5cdH0pKTtcblx0cmV0dXJuIHtkaXJlY3Rpb24sIG9iamVjdE1vZGUsIHN0ZGlvSXRlbXM6IGZpbmFsU3RkaW9JdGVtc307XG59O1xuXG5jb25zdCBhZGRTdHJlYW1Qcm9wZXJ0aWVzID0gKHtzdGRpb0l0ZW0sIGFkZFByb3BlcnRpZXMsIGRpcmVjdGlvbiwgb3B0aW9ucywgZmlsZURlc2NyaXB0b3JzLCBpc1N5bmN9KSA9PiB7XG5cdGNvbnN0IGR1cGxpY2F0ZVN0cmVhbSA9IGdldER1cGxpY2F0ZVN0cmVhbSh7XG5cdFx0c3RkaW9JdGVtLFxuXHRcdGRpcmVjdGlvbixcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0aXNTeW5jLFxuXHR9KTtcblxuXHRpZiAoZHVwbGljYXRlU3RyZWFtICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gey4uLnN0ZGlvSXRlbSwgc3RyZWFtOiBkdXBsaWNhdGVTdHJlYW19O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHQuLi5zdGRpb0l0ZW0sXG5cdFx0Li4uYWRkUHJvcGVydGllc1tkaXJlY3Rpb25dW3N0ZGlvSXRlbS50eXBlXShzdGRpb0l0ZW0sIG9wdGlvbnMpLFxuXHR9O1xufTtcblxuLy8gVGhlIHN0cmVhbSBlcnJvciBoYW5kbGluZyBpcyBwZXJmb3JtZWQgYnkgdGhlIHBpcGluZyBsb2dpYyBhYm92ZSwgd2hpY2ggY2Fubm90IGJlIHBlcmZvcm1lZCBiZWZvcmUgc3VicHJvY2VzcyBzcGF3bmluZy5cbi8vIElmIHRoZSBzdWJwcm9jZXNzIHNwYXduaW5nIGZhaWxzIChlLmcuIGR1ZSB0byBhbiBpbnZhbGlkIGNvbW1hbmQpLCB0aGUgc3RyZWFtcyBuZWVkIHRvIGJlIG1hbnVhbGx5IGRlc3Ryb3llZC5cbi8vIFdlIG5lZWQgdG8gY3JlYXRlIHRob3NlIHN0cmVhbXMgYmVmb3JlIHN1YnByb2Nlc3Mgc3Bhd25pbmcsIGluIGNhc2UgdGhlaXIgY3JlYXRpb24gZmFpbHMsIGUuZy4gd2hlbiBwYXNzaW5nIGFuIGludmFsaWQgZ2VuZXJhdG9yIGFzIGFyZ3VtZW50LlxuLy8gTGlrZSB0aGlzLCBhbiBleGNlcHRpb24gd291bGQgYmUgdGhyb3duLCB3aGljaCB3b3VsZCBwcmV2ZW50IHNwYXduaW5nIGEgc3VicHJvY2Vzcy5cbmV4cG9ydCBjb25zdCBjbGVhbnVwQ3VzdG9tU3RyZWFtcyA9IGZpbGVEZXNjcmlwdG9ycyA9PiB7XG5cdGZvciAoY29uc3Qge3N0ZGlvSXRlbXN9IG9mIGZpbGVEZXNjcmlwdG9ycykge1xuXHRcdGZvciAoY29uc3Qge3N0cmVhbX0gb2Ygc3RkaW9JdGVtcykge1xuXHRcdFx0aWYgKHN0cmVhbSAhPT0gdW5kZWZpbmVkICYmICFpc1N0YW5kYXJkU3RyZWFtKHN0cmVhbSkpIHtcblx0XHRcdFx0c3RyZWFtLmRlc3Ryb3koKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8vIFdoZW4gdGhlIGBzdGQqOiBJdGVyYWJsZSB8IFdlYlN0cmVhbSB8IFVSTCB8IGZpbGVQYXRoYCwgYGlucHV0YCBvciBgaW5wdXRGaWxlYCBvcHRpb24gaXMgdXNlZCwgd2UgcGlwZSB0byBgc3VicHJvY2Vzcy5zdGQqYC5cbi8vIFdoZW4gdGhlIGBzdGQqOiBBcnJheWAgb3B0aW9uIGlzIHVzZWQsIHdlIGVtdWxhdGUgc29tZSBvZiB0aGUgbmF0aXZlIHZhbHVlcyAoJ2luaGVyaXQnLCBOb2RlLmpzIHN0cmVhbSBhbmQgZmlsZSBkZXNjcmlwdG9yIGludGVnZXIpLiBUbyBkbyBzbywgd2UgYWxzbyBuZWVkIHRvIHBpcGUgdG8gYHN1YnByb2Nlc3Muc3RkKmAuXG4vLyBUaGVyZWZvcmUgdGhlIGBzdGQqYCBvcHRpb25zIG11c3QgYmUgZWl0aGVyIGBwaXBlYCBvciBgb3ZlcmxhcHBlZGAuIE90aGVyIHZhbHVlcyBkbyBub3Qgc2V0IGBzdWJwcm9jZXNzLnN0ZCpgLlxuY29uc3QgZm9yd2FyZFN0ZGlvID0gc3RkaW9JdGVtcyA9PiB7XG5cdGlmIChzdGRpb0l0ZW1zLmxlbmd0aCA+IDEpIHtcblx0XHRyZXR1cm4gc3RkaW9JdGVtcy5zb21lKCh7dmFsdWV9KSA9PiB2YWx1ZSA9PT0gJ292ZXJsYXBwZWQnKSA/ICdvdmVybGFwcGVkJyA6ICdwaXBlJztcblx0fVxuXG5cdGNvbnN0IFt7dHlwZSwgdmFsdWV9XSA9IHN0ZGlvSXRlbXM7XG5cdHJldHVybiB0eXBlID09PSAnbmF0aXZlJyA/IHZhbHVlIDogJ3BpcGUnO1xufTtcbiIsICJpbXBvcnQge3JlYWRGaWxlU3luY30gZnJvbSAnbm9kZTpmcyc7XG5pbXBvcnQge2J1ZmZlclRvVWludDhBcnJheX0gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5pbXBvcnQge2hhbmRsZVN0ZGlvfSBmcm9tICcuL2hhbmRsZS5qcyc7XG5pbXBvcnQge1RZUEVfVE9fTUVTU0FHRX0gZnJvbSAnLi90eXBlLmpzJztcblxuLy8gTm9ybWFsaXplIGBpbnB1dGAsIGBpbnB1dEZpbGVgLCBgc3RkaW5gLCBgc3Rkb3V0YCBhbmQgYHN0ZGVycmAgb3B0aW9ucywgYmVmb3JlIHNwYXduaW5nLCBpbiBzeW5jIG1vZGVcbmV4cG9ydCBjb25zdCBoYW5kbGVTdGRpb1N5bmMgPSAob3B0aW9ucywgdmVyYm9zZUluZm8pID0+IGhhbmRsZVN0ZGlvKGFkZFByb3BlcnRpZXNTeW5jLCBvcHRpb25zLCB2ZXJib3NlSW5mbywgdHJ1ZSk7XG5cbmNvbnN0IGZvcmJpZGRlbklmU3luYyA9ICh7dHlwZSwgb3B0aW9uTmFtZX0pID0+IHtcblx0dGhyb3dJbnZhbGlkU3luY1ZhbHVlKG9wdGlvbk5hbWUsIFRZUEVfVE9fTUVTU0FHRVt0eXBlXSk7XG59O1xuXG5jb25zdCBmb3JiaWRkZW5OYXRpdmVJZlN5bmMgPSAoe29wdGlvbk5hbWUsIHZhbHVlfSkgPT4ge1xuXHRpZiAodmFsdWUgPT09ICdpcGMnIHx8IHZhbHVlID09PSAnb3ZlcmxhcHBlZCcpIHtcblx0XHR0aHJvd0ludmFsaWRTeW5jVmFsdWUob3B0aW9uTmFtZSwgYFwiJHt2YWx1ZX1cImApO1xuXHR9XG5cblx0cmV0dXJuIHt9O1xufTtcblxuY29uc3QgdGhyb3dJbnZhbGlkU3luY1ZhbHVlID0gKG9wdGlvbk5hbWUsIHZhbHVlKSA9PiB7XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9XFxgIG9wdGlvbiBjYW5ub3QgYmUgJHt2YWx1ZX0gd2l0aCBzeW5jaHJvbm91cyBtZXRob2RzLmApO1xufTtcblxuLy8gQ3JlYXRlIHN0cmVhbXMgdXNlZCBpbnRlcm5hbGx5IGZvciByZWRpcmVjdGluZyB3aGVuIHVzaW5nIHNwZWNpZmljIHZhbHVlcyBmb3IgdGhlIGBzdGQqYCBvcHRpb25zLCBpbiBzeW5jIG1vZGUuXG4vLyBGb3IgZXhhbXBsZSwgYHN0ZGluOiB7ZmlsZX1gIHJlYWRzIHRoZSBmaWxlIHN5bmNocm9ub3VzbHksIHRoZW4gcGFzc2VzIGl0IGFzIHRoZSBgaW5wdXRgIG9wdGlvbi5cbmNvbnN0IGFkZFByb3BlcnRpZXMgPSB7XG5cdGdlbmVyYXRvcigpIHt9LFxuXHRhc3luY0dlbmVyYXRvcjogZm9yYmlkZGVuSWZTeW5jLFxuXHR3ZWJTdHJlYW06IGZvcmJpZGRlbklmU3luYyxcblx0bm9kZVN0cmVhbTogZm9yYmlkZGVuSWZTeW5jLFxuXHR3ZWJUcmFuc2Zvcm06IGZvcmJpZGRlbklmU3luYyxcblx0ZHVwbGV4OiBmb3JiaWRkZW5JZlN5bmMsXG5cdGFzeW5jSXRlcmFibGU6IGZvcmJpZGRlbklmU3luYyxcblx0bmF0aXZlOiBmb3JiaWRkZW5OYXRpdmVJZlN5bmMsXG59O1xuXG5jb25zdCBhZGRQcm9wZXJ0aWVzU3luYyA9IHtcblx0aW5wdXQ6IHtcblx0XHQuLi5hZGRQcm9wZXJ0aWVzLFxuXHRcdGZpbGVVcmw6ICh7dmFsdWV9KSA9PiAoe2NvbnRlbnRzOiBbYnVmZmVyVG9VaW50OEFycmF5KHJlYWRGaWxlU3luYyh2YWx1ZSkpXX0pLFxuXHRcdGZpbGVQYXRoOiAoe3ZhbHVlOiB7ZmlsZX19KSA9PiAoe2NvbnRlbnRzOiBbYnVmZmVyVG9VaW50OEFycmF5KHJlYWRGaWxlU3luYyhmaWxlKSldfSksXG5cdFx0ZmlsZU51bWJlcjogZm9yYmlkZGVuSWZTeW5jLFxuXHRcdGl0ZXJhYmxlOiAoe3ZhbHVlfSkgPT4gKHtjb250ZW50czogWy4uLnZhbHVlXX0pLFxuXHRcdHN0cmluZzogKHt2YWx1ZX0pID0+ICh7Y29udGVudHM6IFt2YWx1ZV19KSxcblx0XHR1aW50OEFycmF5OiAoe3ZhbHVlfSkgPT4gKHtjb250ZW50czogW3ZhbHVlXX0pLFxuXHR9LFxuXHRvdXRwdXQ6IHtcblx0XHQuLi5hZGRQcm9wZXJ0aWVzLFxuXHRcdGZpbGVVcmw6ICh7dmFsdWV9KSA9PiAoe3BhdGg6IHZhbHVlfSksXG5cdFx0ZmlsZVBhdGg6ICh7dmFsdWU6IHtmaWxlLCBhcHBlbmR9fSkgPT4gKHtwYXRoOiBmaWxlLCBhcHBlbmR9KSxcblx0XHRmaWxlTnVtYmVyOiAoe3ZhbHVlfSkgPT4gKHtwYXRoOiB2YWx1ZX0pLFxuXHRcdGl0ZXJhYmxlOiBmb3JiaWRkZW5JZlN5bmMsXG5cdFx0c3RyaW5nOiBmb3JiaWRkZW5JZlN5bmMsXG5cdFx0dWludDhBcnJheTogZm9yYmlkZGVuSWZTeW5jLFxuXHR9LFxufTtcbiIsICJpbXBvcnQgc3RyaXBGaW5hbE5ld2xpbmVGdW5jdGlvbiBmcm9tICdzdHJpcC1maW5hbC1uZXdsaW5lJztcblxuLy8gQXBwbHkgYHN0cmlwRmluYWxOZXdsaW5lYCBvcHRpb24sIHdoaWNoIGFwcGxpZXMgdG8gYHJlc3VsdC5zdGRvdXR8c3RkZXJyfGFsbHxzdGRpb1sqXWAuXG4vLyBJZiB0aGUgYGxpbmVzYCBvcHRpb24gaXMgdXNlZCwgaXQgaXMgYXBwbGllZCBvbiBlYWNoIGxpbmUsIGJ1dCB1c2luZyBhIGRpZmZlcmVudCBmdW5jdGlvbi5cbmV4cG9ydCBjb25zdCBzdHJpcE5ld2xpbmUgPSAodmFsdWUsIHtzdHJpcEZpbmFsTmV3bGluZX0sIGZkTnVtYmVyKSA9PiBnZXRTdHJpcEZpbmFsTmV3bGluZShzdHJpcEZpbmFsTmV3bGluZSwgZmROdW1iZXIpICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpXG5cdD8gc3RyaXBGaW5hbE5ld2xpbmVGdW5jdGlvbih2YWx1ZSlcblx0OiB2YWx1ZTtcblxuLy8gUmV0cmlldmUgYHN0cmlwRmluYWxOZXdsaW5lYCBvcHRpb24gdmFsdWUsIGluY2x1ZGluZyB3aXRoIGBzdWJwcm9jZXNzLmFsbGBcbmV4cG9ydCBjb25zdCBnZXRTdHJpcEZpbmFsTmV3bGluZSA9IChzdHJpcEZpbmFsTmV3bGluZSwgZmROdW1iZXIpID0+IGZkTnVtYmVyID09PSAnYWxsJ1xuXHQ/IHN0cmlwRmluYWxOZXdsaW5lWzFdIHx8IHN0cmlwRmluYWxOZXdsaW5lWzJdXG5cdDogc3RyaXBGaW5hbE5ld2xpbmVbZmROdW1iZXJdO1xuIiwgIi8vIFNwbGl0IGNodW5rcyBsaW5lLXdpc2UgZm9yIGdlbmVyYXRvcnMgcGFzc2VkIHRvIHRoZSBgc3RkKmAgb3B0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFNwbGl0TGluZXNHZW5lcmF0b3IgPSAoYmluYXJ5LCBwcmVzZXJ2ZU5ld2xpbmVzLCBza2lwcGVkLCBzdGF0ZSkgPT4gYmluYXJ5IHx8IHNraXBwZWRcblx0PyB1bmRlZmluZWRcblx0OiBpbml0aWFsaXplU3BsaXRMaW5lcyhwcmVzZXJ2ZU5ld2xpbmVzLCBzdGF0ZSk7XG5cbi8vIFNhbWUgYnV0IGZvciBzeW5jaHJvbm91cyBtZXRob2RzXG5leHBvcnQgY29uc3Qgc3BsaXRMaW5lc1N5bmMgPSAoY2h1bmssIHByZXNlcnZlTmV3bGluZXMsIG9iamVjdE1vZGUpID0+IG9iamVjdE1vZGVcblx0PyBjaHVuay5mbGF0TWFwKGl0ZW0gPT4gc3BsaXRMaW5lc0l0ZW1TeW5jKGl0ZW0sIHByZXNlcnZlTmV3bGluZXMpKVxuXHQ6IHNwbGl0TGluZXNJdGVtU3luYyhjaHVuaywgcHJlc2VydmVOZXdsaW5lcyk7XG5cbmNvbnN0IHNwbGl0TGluZXNJdGVtU3luYyA9IChjaHVuaywgcHJlc2VydmVOZXdsaW5lcykgPT4ge1xuXHRjb25zdCB7dHJhbnNmb3JtLCBmaW5hbH0gPSBpbml0aWFsaXplU3BsaXRMaW5lcyhwcmVzZXJ2ZU5ld2xpbmVzLCB7fSk7XG5cdHJldHVybiBbLi4udHJhbnNmb3JtKGNodW5rKSwgLi4uZmluYWwoKV07XG59O1xuXG5jb25zdCBpbml0aWFsaXplU3BsaXRMaW5lcyA9IChwcmVzZXJ2ZU5ld2xpbmVzLCBzdGF0ZSkgPT4ge1xuXHRzdGF0ZS5wcmV2aW91c0NodW5rcyA9ICcnO1xuXHRyZXR1cm4ge1xuXHRcdHRyYW5zZm9ybTogc3BsaXRHZW5lcmF0b3IuYmluZCh1bmRlZmluZWQsIHN0YXRlLCBwcmVzZXJ2ZU5ld2xpbmVzKSxcblx0XHRmaW5hbDogbGluZXNGaW5hbC5iaW5kKHVuZGVmaW5lZCwgc3RhdGUpLFxuXHR9O1xufTtcblxuLy8gVGhpcyBpbXBlcmF0aXZlIGxvZ2ljIGlzIG11Y2ggZmFzdGVyIHRoYW4gdXNpbmcgYFN0cmluZy5zcGxpdCgpYCBhbmQgdXNlcyB2ZXJ5IGxvdyBtZW1vcnkuXG5jb25zdCBzcGxpdEdlbmVyYXRvciA9IGZ1bmN0aW9uICogKHN0YXRlLCBwcmVzZXJ2ZU5ld2xpbmVzLCBjaHVuaykge1xuXHRpZiAodHlwZW9mIGNodW5rICE9PSAnc3RyaW5nJykge1xuXHRcdHlpZWxkIGNodW5rO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCB7cHJldmlvdXNDaHVua3N9ID0gc3RhdGU7XG5cdGxldCBzdGFydCA9IC0xO1xuXG5cdGZvciAobGV0IGVuZCA9IDA7IGVuZCA8IGNodW5rLmxlbmd0aDsgZW5kICs9IDEpIHtcblx0XHRpZiAoY2h1bmtbZW5kXSA9PT0gJ1xcbicpIHtcblx0XHRcdGNvbnN0IG5ld2xpbmVMZW5ndGggPSBnZXROZXdsaW5lTGVuZ3RoKGNodW5rLCBlbmQsIHByZXNlcnZlTmV3bGluZXMsIHN0YXRlKTtcblx0XHRcdGxldCBsaW5lID0gY2h1bmsuc2xpY2Uoc3RhcnQgKyAxLCBlbmQgKyAxIC0gbmV3bGluZUxlbmd0aCk7XG5cblx0XHRcdGlmIChwcmV2aW91c0NodW5rcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGxpbmUgPSBjb25jYXRTdHJpbmcocHJldmlvdXNDaHVua3MsIGxpbmUpO1xuXHRcdFx0XHRwcmV2aW91c0NodW5rcyA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHR5aWVsZCBsaW5lO1xuXHRcdFx0c3RhcnQgPSBlbmQ7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHN0YXJ0ICE9PSBjaHVuay5sZW5ndGggLSAxKSB7XG5cdFx0cHJldmlvdXNDaHVua3MgPSBjb25jYXRTdHJpbmcocHJldmlvdXNDaHVua3MsIGNodW5rLnNsaWNlKHN0YXJ0ICsgMSkpO1xuXHR9XG5cblx0c3RhdGUucHJldmlvdXNDaHVua3MgPSBwcmV2aW91c0NodW5rcztcbn07XG5cbmNvbnN0IGdldE5ld2xpbmVMZW5ndGggPSAoY2h1bmssIGVuZCwgcHJlc2VydmVOZXdsaW5lcywgc3RhdGUpID0+IHtcblx0aWYgKHByZXNlcnZlTmV3bGluZXMpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHN0YXRlLmlzV2luZG93c05ld2xpbmUgPSBlbmQgIT09IDAgJiYgY2h1bmtbZW5kIC0gMV0gPT09ICdcXHInO1xuXHRyZXR1cm4gc3RhdGUuaXNXaW5kb3dzTmV3bGluZSA/IDIgOiAxO1xufTtcblxuY29uc3QgbGluZXNGaW5hbCA9IGZ1bmN0aW9uICogKHtwcmV2aW91c0NodW5rc30pIHtcblx0aWYgKHByZXZpb3VzQ2h1bmtzLmxlbmd0aCA+IDApIHtcblx0XHR5aWVsZCBwcmV2aW91c0NodW5rcztcblx0fVxufTtcblxuLy8gVW5sZXNzIGBwcmVzZXJ2ZU5ld2xpbmVzOiB0cnVlYCBpcyB1c2VkLCB3ZSBzdHJpcCB0aGUgbmV3bGluZSBvZiBlYWNoIGxpbmUuXG4vLyBUaGlzIHJlLWFkZHMgdGhlbSBhZnRlciB0aGUgdXNlciBgdHJhbnNmb3JtYCBjb2RlIGhhcyBydW4uXG5leHBvcnQgY29uc3QgZ2V0QXBwZW5kTmV3bGluZUdlbmVyYXRvciA9ICh7YmluYXJ5LCBwcmVzZXJ2ZU5ld2xpbmVzLCByZWFkYWJsZU9iamVjdE1vZGUsIHN0YXRlfSkgPT4gYmluYXJ5IHx8IHByZXNlcnZlTmV3bGluZXMgfHwgcmVhZGFibGVPYmplY3RNb2RlXG5cdD8gdW5kZWZpbmVkXG5cdDoge3RyYW5zZm9ybTogYXBwZW5kTmV3bGluZUdlbmVyYXRvci5iaW5kKHVuZGVmaW5lZCwgc3RhdGUpfTtcblxuY29uc3QgYXBwZW5kTmV3bGluZUdlbmVyYXRvciA9IGZ1bmN0aW9uICogKHtpc1dpbmRvd3NOZXdsaW5lID0gZmFsc2V9LCBjaHVuaykge1xuXHRjb25zdCB7dW5peE5ld2xpbmUsIHdpbmRvd3NOZXdsaW5lLCBMRiwgY29uY2F0Qnl0ZXN9ID0gdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJyA/IGxpbmVzU3RyaW5nSW5mbyA6IGxpbmVzVWludDhBcnJheUluZm87XG5cblx0aWYgKGNodW5rLmF0KC0xKSA9PT0gTEYpIHtcblx0XHR5aWVsZCBjaHVuaztcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBuZXdsaW5lID0gaXNXaW5kb3dzTmV3bGluZSA/IHdpbmRvd3NOZXdsaW5lIDogdW5peE5ld2xpbmU7XG5cdHlpZWxkIGNvbmNhdEJ5dGVzKGNodW5rLCBuZXdsaW5lKTtcbn07XG5cbmNvbnN0IGNvbmNhdFN0cmluZyA9IChmaXJzdENodW5rLCBzZWNvbmRDaHVuaykgPT4gYCR7Zmlyc3RDaHVua30ke3NlY29uZENodW5rfWA7XG5cbmNvbnN0IGxpbmVzU3RyaW5nSW5mbyA9IHtcblx0d2luZG93c05ld2xpbmU6ICdcXHJcXG4nLFxuXHR1bml4TmV3bGluZTogJ1xcbicsXG5cdExGOiAnXFxuJyxcblx0Y29uY2F0Qnl0ZXM6IGNvbmNhdFN0cmluZyxcbn07XG5cbmNvbnN0IGNvbmNhdFVpbnQ4QXJyYXkgPSAoZmlyc3RDaHVuaywgc2Vjb25kQ2h1bmspID0+IHtcblx0Y29uc3QgY2h1bmsgPSBuZXcgVWludDhBcnJheShmaXJzdENodW5rLmxlbmd0aCArIHNlY29uZENodW5rLmxlbmd0aCk7XG5cdGNodW5rLnNldChmaXJzdENodW5rLCAwKTtcblx0Y2h1bmsuc2V0KHNlY29uZENodW5rLCBmaXJzdENodW5rLmxlbmd0aCk7XG5cdHJldHVybiBjaHVuaztcbn07XG5cbmNvbnN0IGxpbmVzVWludDhBcnJheUluZm8gPSB7XG5cdHdpbmRvd3NOZXdsaW5lOiBuZXcgVWludDhBcnJheShbMHgwRCwgMHgwQV0pLFxuXHR1bml4TmV3bGluZTogbmV3IFVpbnQ4QXJyYXkoWzB4MEFdKSxcblx0TEY6IDB4MEEsXG5cdGNvbmNhdEJ5dGVzOiBjb25jYXRVaW50OEFycmF5LFxufTtcbiIsICJpbXBvcnQge0J1ZmZlcn0gZnJvbSAnbm9kZTpidWZmZXInO1xuaW1wb3J0IHtpc1VpbnQ4QXJyYXl9IGZyb20gJy4uL3V0aWxzL3VpbnQtYXJyYXkuanMnO1xuXG4vLyBWYWxpZGF0ZSB0aGUgdHlwZSBvZiBjaHVuayBhcmd1bWVudCBwYXNzZWQgdG8gdHJhbnNmb3JtIGdlbmVyYXRvcnNcbmV4cG9ydCBjb25zdCBnZXRWYWxpZGF0ZVRyYW5zZm9ybUlucHV0ID0gKHdyaXRhYmxlT2JqZWN0TW9kZSwgb3B0aW9uTmFtZSkgPT4gd3JpdGFibGVPYmplY3RNb2RlXG5cdD8gdW5kZWZpbmVkXG5cdDogdmFsaWRhdGVTdHJpbmdUcmFuc2Zvcm1JbnB1dC5iaW5kKHVuZGVmaW5lZCwgb3B0aW9uTmFtZSk7XG5cbmNvbnN0IHZhbGlkYXRlU3RyaW5nVHJhbnNmb3JtSW5wdXQgPSBmdW5jdGlvbiAqIChvcHRpb25OYW1lLCBjaHVuaykge1xuXHRpZiAodHlwZW9mIGNodW5rICE9PSAnc3RyaW5nJyAmJiAhaXNVaW50OEFycmF5KGNodW5rKSAmJiAhQnVmZmVyLmlzQnVmZmVyKGNodW5rKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGAke29wdGlvbk5hbWV9XFxgIG9wdGlvbidzIHRyYW5zZm9ybSBtdXN0IHVzZSBcIm9iamVjdE1vZGU6IHRydWVcIiB0byByZWNlaXZlIGFzIGlucHV0OiAke3R5cGVvZiBjaHVua30uYCk7XG5cdH1cblxuXHR5aWVsZCBjaHVuaztcbn07XG5cbi8vIFZhbGlkYXRlIHRoZSB0eXBlIG9mIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0cmFuc2Zvcm0gZ2VuZXJhdG9yc1xuZXhwb3J0IGNvbnN0IGdldFZhbGlkYXRlVHJhbnNmb3JtUmV0dXJuID0gKHJlYWRhYmxlT2JqZWN0TW9kZSwgb3B0aW9uTmFtZSkgPT4gcmVhZGFibGVPYmplY3RNb2RlXG5cdD8gdmFsaWRhdGVPYmplY3RUcmFuc2Zvcm1SZXR1cm4uYmluZCh1bmRlZmluZWQsIG9wdGlvbk5hbWUpXG5cdDogdmFsaWRhdGVTdHJpbmdUcmFuc2Zvcm1SZXR1cm4uYmluZCh1bmRlZmluZWQsIG9wdGlvbk5hbWUpO1xuXG5jb25zdCB2YWxpZGF0ZU9iamVjdFRyYW5zZm9ybVJldHVybiA9IGZ1bmN0aW9uICogKG9wdGlvbk5hbWUsIGNodW5rKSB7XG5cdHZhbGlkYXRlRW1wdHlSZXR1cm4ob3B0aW9uTmFtZSwgY2h1bmspO1xuXHR5aWVsZCBjaHVuaztcbn07XG5cbmNvbnN0IHZhbGlkYXRlU3RyaW5nVHJhbnNmb3JtUmV0dXJuID0gZnVuY3Rpb24gKiAob3B0aW9uTmFtZSwgY2h1bmspIHtcblx0dmFsaWRhdGVFbXB0eVJldHVybihvcHRpb25OYW1lLCBjaHVuayk7XG5cblx0aWYgKHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgIWlzVWludDhBcnJheShjaHVuaykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfVxcYCBvcHRpb24ncyBmdW5jdGlvbiBtdXN0IHlpZWxkIGEgc3RyaW5nIG9yIGFuIFVpbnQ4QXJyYXksIG5vdCAke3R5cGVvZiBjaHVua30uYCk7XG5cdH1cblxuXHR5aWVsZCBjaHVuaztcbn07XG5cbmNvbnN0IHZhbGlkYXRlRW1wdHlSZXR1cm4gPSAob3B0aW9uTmFtZSwgY2h1bmspID0+IHtcblx0aWYgKGNodW5rID09PSBudWxsIHx8IGNodW5rID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgJHtvcHRpb25OYW1lfVxcYCBvcHRpb24ncyBmdW5jdGlvbiBtdXN0IG5vdCBjYWxsIFxcYHlpZWxkICR7Y2h1bmt9XFxgLlxuSW5zdGVhZCwgXFxgeWllbGRcXGAgc2hvdWxkIGVpdGhlciBiZSBjYWxsZWQgd2l0aCBhIHZhbHVlLCBvciBub3QgYmUgY2FsbGVkIGF0IGFsbC4gRm9yIGV4YW1wbGU6XG4gIGlmIChjb25kaXRpb24pIHsgeWllbGQgdmFsdWU7IH1gKTtcblx0fVxufTtcbiIsICJpbXBvcnQge0J1ZmZlcn0gZnJvbSAnbm9kZTpidWZmZXInO1xuaW1wb3J0IHtTdHJpbmdEZWNvZGVyfSBmcm9tICdub2RlOnN0cmluZ19kZWNvZGVyJztcbmltcG9ydCB7aXNVaW50OEFycmF5LCBidWZmZXJUb1VpbnQ4QXJyYXl9IGZyb20gJy4uL3V0aWxzL3VpbnQtYXJyYXkuanMnO1xuXG4vKlxuV2hlbiB1c2luZyBiaW5hcnkgZW5jb2RpbmdzLCBhZGQgYW4gaW50ZXJuYWwgZ2VuZXJhdG9yIHRoYXQgY29udmVydHMgY2h1bmtzIGZyb20gYEJ1ZmZlcmAgdG8gYHN0cmluZ2Agb3IgYFVpbnQ4QXJyYXlgLlxuQ2h1bmtzIG1pZ2h0IGJlIEJ1ZmZlciwgVWludDhBcnJheSBvciBzdHJpbmdzIHNpbmNlOlxuLSBgc3VicHJvY2Vzcy5zdGRvdXR8c3RkZXJyYCBlbWl0cyBCdWZmZXJzXG4tIGBzdWJwcm9jZXNzLnN0ZGluLndyaXRlKClgIGFjY2VwdHMgQnVmZmVyLCBVaW50OEFycmF5IG9yIHN0cmluZ1xuLSBQcmV2aW91cyBnZW5lcmF0b3JzIG1pZ2h0IHJldHVybiBVaW50OEFycmF5IG9yIHN0cmluZ1xuXG5Ib3dldmVyLCB0aG9zZSBhcmUgY29udmVydGVkIHRvIEJ1ZmZlcjpcbi0gb24gd3JpdGVzOiBgRHVwbGV4LndyaXRhYmxlYCBgZGVjb2RlU3RyaW5nczogdHJ1ZWAgZGVmYXVsdCBvcHRpb25cbi0gb24gcmVhZHM6IGBEdXBsZXgucmVhZGFibGVgIGByZWFkYWJsZUVuY29kaW5nOiBudWxsYCBkZWZhdWx0IG9wdGlvblxuKi9cbmV4cG9ydCBjb25zdCBnZXRFbmNvZGluZ1RyYW5zZm9ybUdlbmVyYXRvciA9IChiaW5hcnksIGVuY29kaW5nLCBza2lwcGVkKSA9PiB7XG5cdGlmIChza2lwcGVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGJpbmFyeSkge1xuXHRcdHJldHVybiB7dHJhbnNmb3JtOiBlbmNvZGluZ1VpbnQ4QXJyYXlHZW5lcmF0b3IuYmluZCh1bmRlZmluZWQsIG5ldyBUZXh0RW5jb2RlcigpKX07XG5cdH1cblxuXHRjb25zdCBzdHJpbmdEZWNvZGVyID0gbmV3IFN0cmluZ0RlY29kZXIoZW5jb2RpbmcpO1xuXHRyZXR1cm4ge1xuXHRcdHRyYW5zZm9ybTogZW5jb2RpbmdTdHJpbmdHZW5lcmF0b3IuYmluZCh1bmRlZmluZWQsIHN0cmluZ0RlY29kZXIpLFxuXHRcdGZpbmFsOiBlbmNvZGluZ1N0cmluZ0ZpbmFsLmJpbmQodW5kZWZpbmVkLCBzdHJpbmdEZWNvZGVyKSxcblx0fTtcbn07XG5cbmNvbnN0IGVuY29kaW5nVWludDhBcnJheUdlbmVyYXRvciA9IGZ1bmN0aW9uICogKHRleHRFbmNvZGVyLCBjaHVuaykge1xuXHRpZiAoQnVmZmVyLmlzQnVmZmVyKGNodW5rKSkge1xuXHRcdHlpZWxkIGJ1ZmZlclRvVWludDhBcnJheShjaHVuayk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuXHRcdHlpZWxkIHRleHRFbmNvZGVyLmVuY29kZShjaHVuayk7XG5cdH0gZWxzZSB7XG5cdFx0eWllbGQgY2h1bms7XG5cdH1cbn07XG5cbmNvbnN0IGVuY29kaW5nU3RyaW5nR2VuZXJhdG9yID0gZnVuY3Rpb24gKiAoc3RyaW5nRGVjb2RlciwgY2h1bmspIHtcblx0eWllbGQgaXNVaW50OEFycmF5KGNodW5rKSA/IHN0cmluZ0RlY29kZXIud3JpdGUoY2h1bmspIDogY2h1bms7XG59O1xuXG5jb25zdCBlbmNvZGluZ1N0cmluZ0ZpbmFsID0gZnVuY3Rpb24gKiAoc3RyaW5nRGVjb2Rlcikge1xuXHRjb25zdCBsYXN0Q2h1bmsgPSBzdHJpbmdEZWNvZGVyLmVuZCgpO1xuXHRpZiAobGFzdENodW5rICE9PSAnJykge1xuXHRcdHlpZWxkIGxhc3RDaHVuaztcblx0fVxufTtcbiIsICJpbXBvcnQge2NhbGxiYWNraWZ5fSBmcm9tICdub2RlOnV0aWwnO1xuXG4vLyBBcHBsaWVzIGEgc2VyaWVzIG9mIGdlbmVyYXRvciBmdW5jdGlvbnMgYXN5bmNocm9ub3VzbHlcbmV4cG9ydCBjb25zdCBwdXNoQ2h1bmtzID0gY2FsbGJhY2tpZnkoYXN5bmMgKGdldENodW5rcywgc3RhdGUsIGdldENodW5rc0FyZ3VtZW50cywgdHJhbnNmb3JtU3RyZWFtKSA9PiB7XG5cdHN0YXRlLmN1cnJlbnRJdGVyYWJsZSA9IGdldENodW5rcyguLi5nZXRDaHVua3NBcmd1bWVudHMpO1xuXG5cdHRyeSB7XG5cdFx0Zm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiBzdGF0ZS5jdXJyZW50SXRlcmFibGUpIHtcblx0XHRcdHRyYW5zZm9ybVN0cmVhbS5wdXNoKGNodW5rKTtcblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0ZGVsZXRlIHN0YXRlLmN1cnJlbnRJdGVyYWJsZTtcblx0fVxufSk7XG5cbi8vIEZvciBlYWNoIG5ldyBjaHVuaywgYXBwbHkgZWFjaCBgdHJhbnNmb3JtKClgIG1ldGhvZFxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybUNodW5rID0gYXN5bmMgZnVuY3Rpb24gKiAoY2h1bmssIGdlbmVyYXRvcnMsIGluZGV4KSB7XG5cdGlmIChpbmRleCA9PT0gZ2VuZXJhdG9ycy5sZW5ndGgpIHtcblx0XHR5aWVsZCBjaHVuaztcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7dHJhbnNmb3JtID0gaWRlbnRpdHlHZW5lcmF0b3J9ID0gZ2VuZXJhdG9yc1tpbmRleF07XG5cdGZvciBhd2FpdCAoY29uc3QgdHJhbnNmb3JtZWRDaHVuayBvZiB0cmFuc2Zvcm0oY2h1bmspKSB7XG5cdFx0eWllbGQgKiB0cmFuc2Zvcm1DaHVuayh0cmFuc2Zvcm1lZENodW5rLCBnZW5lcmF0b3JzLCBpbmRleCArIDEpO1xuXHR9XG59O1xuXG4vLyBBdCB0aGUgZW5kLCBhcHBseSBlYWNoIGBmaW5hbCgpYCBtZXRob2QsIGZvbGxvd2VkIGJ5IHRoZSBgdHJhbnNmb3JtKClgIG1ldGhvZCBvZiB0aGUgbmV4dCB0cmFuc2Zvcm1zXG5leHBvcnQgY29uc3QgZmluYWxDaHVua3MgPSBhc3luYyBmdW5jdGlvbiAqIChnZW5lcmF0b3JzKSB7XG5cdGZvciAoY29uc3QgW2luZGV4LCB7ZmluYWx9XSBvZiBPYmplY3QuZW50cmllcyhnZW5lcmF0b3JzKSkge1xuXHRcdHlpZWxkICogZ2VuZXJhdG9yRmluYWxDaHVua3MoZmluYWwsIE51bWJlcihpbmRleCksIGdlbmVyYXRvcnMpO1xuXHR9XG59O1xuXG5jb25zdCBnZW5lcmF0b3JGaW5hbENodW5rcyA9IGFzeW5jIGZ1bmN0aW9uICogKGZpbmFsLCBpbmRleCwgZ2VuZXJhdG9ycykge1xuXHRpZiAoZmluYWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciBhd2FpdCAoY29uc3QgZmluYWxDaHVuayBvZiBmaW5hbCgpKSB7XG5cdFx0eWllbGQgKiB0cmFuc2Zvcm1DaHVuayhmaW5hbENodW5rLCBnZW5lcmF0b3JzLCBpbmRleCArIDEpO1xuXHR9XG59O1xuXG4vLyBDYW5jZWwgYW55IG9uZ29pbmcgYXN5bmMgZ2VuZXJhdG9yIHdoZW4gdGhlIFRyYW5zZm9ybSBpcyBkZXN0cm95ZWQsIGUuZy4gd2hlbiB0aGUgc3VicHJvY2VzcyBlcnJvcnNcbmV4cG9ydCBjb25zdCBkZXN0cm95VHJhbnNmb3JtID0gY2FsbGJhY2tpZnkoYXN5bmMgKHtjdXJyZW50SXRlcmFibGV9LCBlcnJvcikgPT4ge1xuXHRpZiAoY3VycmVudEl0ZXJhYmxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRhd2FpdCAoZXJyb3IgPyBjdXJyZW50SXRlcmFibGUudGhyb3coZXJyb3IpIDogY3VycmVudEl0ZXJhYmxlLnJldHVybigpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoZXJyb3IpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufSk7XG5cbmNvbnN0IGlkZW50aXR5R2VuZXJhdG9yID0gZnVuY3Rpb24gKiAoY2h1bmspIHtcblx0eWllbGQgY2h1bms7XG59O1xuIiwgIi8vIER1cGxpY2F0ZSB0aGUgY29kZSBmcm9tIGBydW4tYXN5bmMuanNgIGJ1dCBhcyBzeW5jaHJvbm91cyBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBwdXNoQ2h1bmtzU3luYyA9IChnZXRDaHVua3NTeW5jLCBnZXRDaHVua3NBcmd1bWVudHMsIHRyYW5zZm9ybVN0cmVhbSwgZG9uZSkgPT4ge1xuXHR0cnkge1xuXHRcdGZvciAoY29uc3QgY2h1bmsgb2YgZ2V0Q2h1bmtzU3luYyguLi5nZXRDaHVua3NBcmd1bWVudHMpKSB7XG5cdFx0XHR0cmFuc2Zvcm1TdHJlYW0ucHVzaChjaHVuayk7XG5cdFx0fVxuXG5cdFx0ZG9uZSgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGRvbmUoZXJyb3IpO1xuXHR9XG59O1xuXG4vLyBSdW4gc3luY2hyb25vdXMgZ2VuZXJhdG9ycyB3aXRoIGBleGVjYVN5bmMoKWBcbmV4cG9ydCBjb25zdCBydW5UcmFuc2Zvcm1TeW5jID0gKGdlbmVyYXRvcnMsIGNodW5rcykgPT4gW1xuXHQuLi5jaHVua3MuZmxhdE1hcChjaHVuayA9PiBbLi4udHJhbnNmb3JtQ2h1bmtTeW5jKGNodW5rLCBnZW5lcmF0b3JzLCAwKV0pLFxuXHQuLi5maW5hbENodW5rc1N5bmMoZ2VuZXJhdG9ycyksXG5dO1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQ2h1bmtTeW5jID0gZnVuY3Rpb24gKiAoY2h1bmssIGdlbmVyYXRvcnMsIGluZGV4KSB7XG5cdGlmIChpbmRleCA9PT0gZ2VuZXJhdG9ycy5sZW5ndGgpIHtcblx0XHR5aWVsZCBjaHVuaztcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7dHJhbnNmb3JtID0gaWRlbnRpdHlHZW5lcmF0b3J9ID0gZ2VuZXJhdG9yc1tpbmRleF07XG5cdGZvciAoY29uc3QgdHJhbnNmb3JtZWRDaHVuayBvZiB0cmFuc2Zvcm0oY2h1bmspKSB7XG5cdFx0eWllbGQgKiB0cmFuc2Zvcm1DaHVua1N5bmModHJhbnNmb3JtZWRDaHVuaywgZ2VuZXJhdG9ycywgaW5kZXggKyAxKTtcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGZpbmFsQ2h1bmtzU3luYyA9IGZ1bmN0aW9uICogKGdlbmVyYXRvcnMpIHtcblx0Zm9yIChjb25zdCBbaW5kZXgsIHtmaW5hbH1dIG9mIE9iamVjdC5lbnRyaWVzKGdlbmVyYXRvcnMpKSB7XG5cdFx0eWllbGQgKiBnZW5lcmF0b3JGaW5hbENodW5rc1N5bmMoZmluYWwsIE51bWJlcihpbmRleCksIGdlbmVyYXRvcnMpO1xuXHR9XG59O1xuXG5jb25zdCBnZW5lcmF0b3JGaW5hbENodW5rc1N5bmMgPSBmdW5jdGlvbiAqIChmaW5hbCwgaW5kZXgsIGdlbmVyYXRvcnMpIHtcblx0aWYgKGZpbmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGZpbmFsQ2h1bmsgb2YgZmluYWwoKSkge1xuXHRcdHlpZWxkICogdHJhbnNmb3JtQ2h1bmtTeW5jKGZpbmFsQ2h1bmssIGdlbmVyYXRvcnMsIGluZGV4ICsgMSk7XG5cdH1cbn07XG5cbmNvbnN0IGlkZW50aXR5R2VuZXJhdG9yID0gZnVuY3Rpb24gKiAoY2h1bmspIHtcblx0eWllbGQgY2h1bms7XG59O1xuIiwgImltcG9ydCB7VHJhbnNmb3JtLCBnZXREZWZhdWx0SGlnaFdhdGVyTWFya30gZnJvbSAnbm9kZTpzdHJlYW0nO1xuaW1wb3J0IHtpc0FzeW5jR2VuZXJhdG9yfSBmcm9tICcuLi9zdGRpby90eXBlLmpzJztcbmltcG9ydCB7Z2V0U3BsaXRMaW5lc0dlbmVyYXRvciwgZ2V0QXBwZW5kTmV3bGluZUdlbmVyYXRvcn0gZnJvbSAnLi9zcGxpdC5qcyc7XG5pbXBvcnQge2dldFZhbGlkYXRlVHJhbnNmb3JtSW5wdXQsIGdldFZhbGlkYXRlVHJhbnNmb3JtUmV0dXJufSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbmltcG9ydCB7Z2V0RW5jb2RpbmdUcmFuc2Zvcm1HZW5lcmF0b3J9IGZyb20gJy4vZW5jb2RpbmctdHJhbnNmb3JtLmpzJztcbmltcG9ydCB7XG5cdHB1c2hDaHVua3MsXG5cdHRyYW5zZm9ybUNodW5rLFxuXHRmaW5hbENodW5rcyxcblx0ZGVzdHJveVRyYW5zZm9ybSxcbn0gZnJvbSAnLi9ydW4tYXN5bmMuanMnO1xuaW1wb3J0IHtcblx0cHVzaENodW5rc1N5bmMsXG5cdHRyYW5zZm9ybUNodW5rU3luYyxcblx0ZmluYWxDaHVua3NTeW5jLFxuXHRydW5UcmFuc2Zvcm1TeW5jLFxufSBmcm9tICcuL3J1bi1zeW5jLmpzJztcblxuLypcbkdlbmVyYXRvcnMgY2FuIGJlIHVzZWQgdG8gdHJhbnNmb3JtL2ZpbHRlciBzdGFuZGFyZCBzdHJlYW1zLlxuXG5HZW5lcmF0b3JzIGhhdmUgYSBzaW1wbGUgc3ludGF4LCB5ZXQgYWxsb3dzIGFsbCBvZiB0aGUgZm9sbG93aW5nOlxuLSBTaGFyaW5nIGBzdGF0ZWAgYmV0d2VlbiBjaHVua3Ncbi0gRmx1c2hpbmcgbG9naWMsIGJ5IHVzaW5nIGEgYGZpbmFsYCBmdW5jdGlvblxuLSBBc3luY2hyb25vdXMgbG9naWNcbi0gRW1pdHRpbmcgbXVsdGlwbGUgY2h1bmtzIGZyb20gYSBzaW5nbGUgc291cmNlIGNodW5rLCBldmVuIGlmIHNwYWNlZCBpbiB0aW1lLCBieSB1c2luZyBtdWx0aXBsZSBgeWllbGRgXG4tIEZpbHRlcmluZywgYnkgdXNpbmcgbm8gYHlpZWxkYFxuXG5UaGVyZWZvcmUsIHRoZXJlIGlzIG5vIG5lZWQgdG8gYWxsb3cgTm9kZS5qcyBvciB3ZWIgdHJhbnNmb3JtIHN0cmVhbXMuXG5cblRoZSBgaGlnaFdhdGVyTWFya2AgaXMga2VwdCBhcyB0aGUgZGVmYXVsdCB2YWx1ZSwgc2luY2UgdGhpcyBpcyB3aGF0IGBzdWJwcm9jZXNzLnN0ZCpgIHVzZXMuXG5cbkNodW5rcyBhcmUgY3VycmVudGx5IHByb2Nlc3NlZCBzZXJpYWxseS4gV2UgY291bGQgYWRkIGEgYGNvbmN1cnJlbmN5YCBvcHRpb24gdG8gcGFyYWxsZWxpemUgaW4gdGhlIGZ1dHVyZS5cblxuVHJhbnNmb3JtIGFuIGFycmF5IG9mIGdlbmVyYXRvciBmdW5jdGlvbnMgaW50byBhIGBUcmFuc2Zvcm1gIHN0cmVhbS5cbmBEdXBsZXguZnJvbShnZW5lcmF0b3IpYCBjYW5ub3QgYmUgdXNlZCBiZWNhdXNlIGl0IGRvZXMgbm90IGFsbG93IHNldHRpbmcgdGhlIGBvYmplY3RNb2RlYCBhbmQgYGhpZ2hXYXRlck1hcmtgLlxuKi9cbmV4cG9ydCBjb25zdCBnZW5lcmF0b3JUb1N0cmVhbSA9ICh7XG5cdHZhbHVlLFxuXHR2YWx1ZToge3RyYW5zZm9ybSwgZmluYWwsIHdyaXRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVPYmplY3RNb2RlfSxcblx0b3B0aW9uTmFtZSxcbn0sIHtlbmNvZGluZ30pID0+IHtcblx0Y29uc3Qgc3RhdGUgPSB7fTtcblx0Y29uc3QgZ2VuZXJhdG9ycyA9IGFkZEludGVybmFsR2VuZXJhdG9ycyh2YWx1ZSwgZW5jb2RpbmcsIG9wdGlvbk5hbWUpO1xuXG5cdGNvbnN0IHRyYW5zZm9ybUFzeW5jID0gaXNBc3luY0dlbmVyYXRvcih0cmFuc2Zvcm0pO1xuXHRjb25zdCBmaW5hbEFzeW5jID0gaXNBc3luY0dlbmVyYXRvcihmaW5hbCk7XG5cdGNvbnN0IHRyYW5zZm9ybU1ldGhvZCA9IHRyYW5zZm9ybUFzeW5jXG5cdFx0PyBwdXNoQ2h1bmtzLmJpbmQodW5kZWZpbmVkLCB0cmFuc2Zvcm1DaHVuaywgc3RhdGUpXG5cdFx0OiBwdXNoQ2h1bmtzU3luYy5iaW5kKHVuZGVmaW5lZCwgdHJhbnNmb3JtQ2h1bmtTeW5jKTtcblx0Y29uc3QgZmluYWxNZXRob2QgPSB0cmFuc2Zvcm1Bc3luYyB8fCBmaW5hbEFzeW5jXG5cdFx0PyBwdXNoQ2h1bmtzLmJpbmQodW5kZWZpbmVkLCBmaW5hbENodW5rcywgc3RhdGUpXG5cdFx0OiBwdXNoQ2h1bmtzU3luYy5iaW5kKHVuZGVmaW5lZCwgZmluYWxDaHVua3NTeW5jKTtcblx0Y29uc3QgZGVzdHJveU1ldGhvZCA9IHRyYW5zZm9ybUFzeW5jIHx8IGZpbmFsQXN5bmNcblx0XHQ/IGRlc3Ryb3lUcmFuc2Zvcm0uYmluZCh1bmRlZmluZWQsIHN0YXRlKVxuXHRcdDogdW5kZWZpbmVkO1xuXG5cdGNvbnN0IHN0cmVhbSA9IG5ldyBUcmFuc2Zvcm0oe1xuXHRcdHdyaXRhYmxlT2JqZWN0TW9kZSxcblx0XHR3cml0YWJsZUhpZ2hXYXRlck1hcms6IGdldERlZmF1bHRIaWdoV2F0ZXJNYXJrKHdyaXRhYmxlT2JqZWN0TW9kZSksXG5cdFx0cmVhZGFibGVPYmplY3RNb2RlLFxuXHRcdHJlYWRhYmxlSGlnaFdhdGVyTWFyazogZ2V0RGVmYXVsdEhpZ2hXYXRlck1hcmsocmVhZGFibGVPYmplY3RNb2RlKSxcblx0XHR0cmFuc2Zvcm0oY2h1bmssIGVuY29kaW5nLCBkb25lKSB7XG5cdFx0XHR0cmFuc2Zvcm1NZXRob2QoW2NodW5rLCBnZW5lcmF0b3JzLCAwXSwgdGhpcywgZG9uZSk7XG5cdFx0fSxcblx0XHRmbHVzaChkb25lKSB7XG5cdFx0XHRmaW5hbE1ldGhvZChbZ2VuZXJhdG9yc10sIHRoaXMsIGRvbmUpO1xuXHRcdH0sXG5cdFx0ZGVzdHJveTogZGVzdHJveU1ldGhvZCxcblx0fSk7XG5cdHJldHVybiB7c3RyZWFtfTtcbn07XG5cbi8vIEFwcGxpZXMgdHJhbnNmb3JtIGdlbmVyYXRvcnMgaW4gc3luYyBtb2RlXG5leHBvcnQgY29uc3QgcnVuR2VuZXJhdG9yc1N5bmMgPSAoY2h1bmtzLCBzdGRpb0l0ZW1zLCBlbmNvZGluZywgaXNJbnB1dCkgPT4ge1xuXHRjb25zdCBnZW5lcmF0b3JzID0gc3RkaW9JdGVtcy5maWx0ZXIoKHt0eXBlfSkgPT4gdHlwZSA9PT0gJ2dlbmVyYXRvcicpO1xuXHRjb25zdCByZXZlcnNlZEdlbmVyYXRvcnMgPSBpc0lucHV0ID8gZ2VuZXJhdG9ycy5yZXZlcnNlKCkgOiBnZW5lcmF0b3JzO1xuXG5cdGZvciAoY29uc3Qge3ZhbHVlLCBvcHRpb25OYW1lfSBvZiByZXZlcnNlZEdlbmVyYXRvcnMpIHtcblx0XHRjb25zdCBnZW5lcmF0b3JzID0gYWRkSW50ZXJuYWxHZW5lcmF0b3JzKHZhbHVlLCBlbmNvZGluZywgb3B0aW9uTmFtZSk7XG5cdFx0Y2h1bmtzID0gcnVuVHJhbnNmb3JtU3luYyhnZW5lcmF0b3JzLCBjaHVua3MpO1xuXHR9XG5cblx0cmV0dXJuIGNodW5rcztcbn07XG5cbi8vIEdlbmVyYXRvcnMgdXNlZCBpbnRlcm5hbGx5IHRvIGNvbnZlcnQgdGhlIGNodW5rIHR5cGUsIHZhbGlkYXRlIGl0LCBhbmQgc3BsaXQgaW50byBsaW5lc1xuY29uc3QgYWRkSW50ZXJuYWxHZW5lcmF0b3JzID0gKFxuXHR7dHJhbnNmb3JtLCBmaW5hbCwgYmluYXJ5LCB3cml0YWJsZU9iamVjdE1vZGUsIHJlYWRhYmxlT2JqZWN0TW9kZSwgcHJlc2VydmVOZXdsaW5lc30sXG5cdGVuY29kaW5nLFxuXHRvcHRpb25OYW1lLFxuKSA9PiB7XG5cdGNvbnN0IHN0YXRlID0ge307XG5cdHJldHVybiBbXG5cdFx0e3RyYW5zZm9ybTogZ2V0VmFsaWRhdGVUcmFuc2Zvcm1JbnB1dCh3cml0YWJsZU9iamVjdE1vZGUsIG9wdGlvbk5hbWUpfSxcblx0XHRnZXRFbmNvZGluZ1RyYW5zZm9ybUdlbmVyYXRvcihiaW5hcnksIGVuY29kaW5nLCB3cml0YWJsZU9iamVjdE1vZGUpLFxuXHRcdGdldFNwbGl0TGluZXNHZW5lcmF0b3IoYmluYXJ5LCBwcmVzZXJ2ZU5ld2xpbmVzLCB3cml0YWJsZU9iamVjdE1vZGUsIHN0YXRlKSxcblx0XHR7dHJhbnNmb3JtLCBmaW5hbH0sXG5cdFx0e3RyYW5zZm9ybTogZ2V0VmFsaWRhdGVUcmFuc2Zvcm1SZXR1cm4ocmVhZGFibGVPYmplY3RNb2RlLCBvcHRpb25OYW1lKX0sXG5cdFx0Z2V0QXBwZW5kTmV3bGluZUdlbmVyYXRvcih7XG5cdFx0XHRiaW5hcnksXG5cdFx0XHRwcmVzZXJ2ZU5ld2xpbmVzLFxuXHRcdFx0cmVhZGFibGVPYmplY3RNb2RlLFxuXHRcdFx0c3RhdGUsXG5cdFx0fSksXG5cdF0uZmlsdGVyKEJvb2xlYW4pO1xufTtcbiIsICJpbXBvcnQge3J1bkdlbmVyYXRvcnNTeW5jfSBmcm9tICcuLi90cmFuc2Zvcm0vZ2VuZXJhdG9yLmpzJztcbmltcG9ydCB7am9pblRvVWludDhBcnJheSwgaXNVaW50OEFycmF5fSBmcm9tICcuLi91dGlscy91aW50LWFycmF5LmpzJztcbmltcG9ydCB7VFlQRV9UT19NRVNTQUdFfSBmcm9tICcuLi9zdGRpby90eXBlLmpzJztcblxuLy8gQXBwbHkgYHN0ZGluYC9gaW5wdXRgL2BpbnB1dEZpbGVgIG9wdGlvbnMsIGJlZm9yZSBzcGF3bmluZywgaW4gc3luYyBtb2RlLCBieSBjb252ZXJ0aW5nIGl0IHRvIHRoZSBgaW5wdXRgIG9wdGlvblxuZXhwb3J0IGNvbnN0IGFkZElucHV0T3B0aW9uc1N5bmMgPSAoZmlsZURlc2NyaXB0b3JzLCBvcHRpb25zKSA9PiB7XG5cdGZvciAoY29uc3QgZmROdW1iZXIgb2YgZ2V0SW5wdXRGZE51bWJlcnMoZmlsZURlc2NyaXB0b3JzKSkge1xuXHRcdGFkZElucHV0T3B0aW9uU3luYyhmaWxlRGVzY3JpcHRvcnMsIGZkTnVtYmVyLCBvcHRpb25zKTtcblx0fVxufTtcblxuY29uc3QgZ2V0SW5wdXRGZE51bWJlcnMgPSBmaWxlRGVzY3JpcHRvcnMgPT4gbmV3IFNldChPYmplY3QuZW50cmllcyhmaWxlRGVzY3JpcHRvcnMpXG5cdC5maWx0ZXIoKFssIHtkaXJlY3Rpb259XSkgPT4gZGlyZWN0aW9uID09PSAnaW5wdXQnKVxuXHQubWFwKChbZmROdW1iZXJdKSA9PiBOdW1iZXIoZmROdW1iZXIpKSk7XG5cbmNvbnN0IGFkZElucHV0T3B0aW9uU3luYyA9IChmaWxlRGVzY3JpcHRvcnMsIGZkTnVtYmVyLCBvcHRpb25zKSA9PiB7XG5cdGNvbnN0IHtzdGRpb0l0ZW1zfSA9IGZpbGVEZXNjcmlwdG9yc1tmZE51bWJlcl07XG5cdGNvbnN0IGFsbFN0ZGlvSXRlbXMgPSBzdGRpb0l0ZW1zLmZpbHRlcigoe2NvbnRlbnRzfSkgPT4gY29udGVudHMgIT09IHVuZGVmaW5lZCk7XG5cdGlmIChhbGxTdGRpb0l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChmZE51bWJlciAhPT0gMCkge1xuXHRcdGNvbnN0IFt7dHlwZSwgb3B0aW9uTmFtZX1dID0gYWxsU3RkaW9JdGVtcztcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBPbmx5IHRoZSBcXGBzdGRpblxcYCBvcHRpb24sIG5vdCBcXGAke29wdGlvbk5hbWV9XFxgLCBjYW4gYmUgJHtUWVBFX1RPX01FU1NBR0VbdHlwZV19IHdpdGggc3luY2hyb25vdXMgbWV0aG9kcy5gKTtcblx0fVxuXG5cdGNvbnN0IGFsbENvbnRlbnRzID0gYWxsU3RkaW9JdGVtcy5tYXAoKHtjb250ZW50c30pID0+IGNvbnRlbnRzKTtcblx0Y29uc3QgdHJhbnNmb3JtZWRDb250ZW50cyA9IGFsbENvbnRlbnRzLm1hcChjb250ZW50cyA9PiBhcHBseVNpbmdsZUlucHV0R2VuZXJhdG9yc1N5bmMoY29udGVudHMsIHN0ZGlvSXRlbXMpKTtcblx0b3B0aW9ucy5pbnB1dCA9IGpvaW5Ub1VpbnQ4QXJyYXkodHJhbnNmb3JtZWRDb250ZW50cyk7XG59O1xuXG5jb25zdCBhcHBseVNpbmdsZUlucHV0R2VuZXJhdG9yc1N5bmMgPSAoY29udGVudHMsIHN0ZGlvSXRlbXMpID0+IHtcblx0Y29uc3QgbmV3Q29udGVudHMgPSBydW5HZW5lcmF0b3JzU3luYyhjb250ZW50cywgc3RkaW9JdGVtcywgJ3V0ZjgnLCB0cnVlKTtcblx0dmFsaWRhdGVTZXJpYWxpemFibGUobmV3Q29udGVudHMpO1xuXHRyZXR1cm4gam9pblRvVWludDhBcnJheShuZXdDb250ZW50cyk7XG59O1xuXG5jb25zdCB2YWxpZGF0ZVNlcmlhbGl6YWJsZSA9IG5ld0NvbnRlbnRzID0+IHtcblx0Y29uc3QgaW52YWxpZEl0ZW0gPSBuZXdDb250ZW50cy5maW5kKGl0ZW0gPT4gdHlwZW9mIGl0ZW0gIT09ICdzdHJpbmcnICYmICFpc1VpbnQ4QXJyYXkoaXRlbSkpO1xuXHRpZiAoaW52YWxpZEl0ZW0gIT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcXGBzdGRpblxcYCBvcHRpb24gaXMgaW52YWxpZDogd2hlbiBwYXNzaW5nIG9iamVjdHMgYXMgaW5wdXQsIGEgdHJhbnNmb3JtIG11c3QgYmUgdXNlZCB0byBzZXJpYWxpemUgdGhlbSB0byBzdHJpbmdzIG9yIFVpbnQ4QXJyYXlzOiAke2ludmFsaWRJdGVtfS5gKTtcblx0fVxufTtcbiIsICJpbXBvcnQge0JJTkFSWV9FTkNPRElOR1N9IGZyb20gJy4uL2FyZ3VtZW50cy9lbmNvZGluZy1vcHRpb24uanMnO1xuaW1wb3J0IHtUUkFOU0ZPUk1fVFlQRVN9IGZyb20gJy4uL3N0ZGlvL3R5cGUuanMnO1xuaW1wb3J0IHt2ZXJib3NlTG9nLCBzZXJpYWxpemVWZXJib3NlTWVzc2FnZX0gZnJvbSAnLi9sb2cuanMnO1xuaW1wb3J0IHtpc0Z1bGxWZXJib3NlfSBmcm9tICcuL3ZhbHVlcy5qcyc7XG5cbi8vIGBpZ25vcmVgIG9wdHMtb3V0IG9mIGB2ZXJib3NlYCBmb3IgYSBzcGVjaWZpYyBzdHJlYW0uXG4vLyBgaXBjYCBjYW5ub3QgdXNlIHBpcGluZy5cbi8vIGBpbmhlcml0YCB3b3VsZCByZXN1bHQgaW4gZG91YmxlIHByaW50aW5nLlxuLy8gVGhleSBjYW4gYWxzbyBsZWFkIHRvIGRvdWJsZSBwcmludGluZyB3aGVuIHBhc3NpbmcgZmlsZSBkZXNjcmlwdG9yIGludGVnZXJzIG9yIGBwcm9jZXNzLnN0ZCpgLlxuLy8gVGhpcyBvbmx5IGxlYXZlcyB3aXRoIGBwaXBlYCBhbmQgYG92ZXJsYXBwZWRgLlxuZXhwb3J0IGNvbnN0IHNob3VsZExvZ091dHB1dCA9ICh7c3RkaW9JdGVtcywgZW5jb2RpbmcsIHZlcmJvc2VJbmZvLCBmZE51bWJlcn0pID0+IGZkTnVtYmVyICE9PSAnYWxsJ1xuXHQmJiBpc0Z1bGxWZXJib3NlKHZlcmJvc2VJbmZvLCBmZE51bWJlcilcblx0JiYgIUJJTkFSWV9FTkNPRElOR1MuaGFzKGVuY29kaW5nKVxuXHQmJiBmZFVzZXNWZXJib3NlKGZkTnVtYmVyKVxuXHQmJiAoc3RkaW9JdGVtcy5zb21lKCh7dHlwZSwgdmFsdWV9KSA9PiB0eXBlID09PSAnbmF0aXZlJyAmJiBQSVBFRF9TVERJT19WQUxVRVMuaGFzKHZhbHVlKSlcblx0fHwgc3RkaW9JdGVtcy5ldmVyeSgoe3R5cGV9KSA9PiBUUkFOU0ZPUk1fVFlQRVMuaGFzKHR5cGUpKSk7XG5cbi8vIFByaW50aW5nIGlucHV0IHN0cmVhbXMgd291bGQgYmUgY29uZnVzaW5nLlxuLy8gRmlsZXMgYW5kIHN0cmVhbXMgY2FuIHByb2R1Y2UgYmlnIG91dHB1dHMsIHdoaWNoIHdlIGRvbid0IHdhbnQgdG8gcHJpbnQuXG4vLyBXZSBjb3VsZCBwcmludCBgc3RkaW9bMytdYCBidXQgaXQgb2Z0ZW4gaXMgcmVkaXJlY3RlZCB0byBmaWxlcyBhbmQgc3RyZWFtcywgd2l0aCB0aGUgc2FtZSBpc3N1ZS5cbi8vIFNvIHdlIG9ubHkgcHJpbnQgc3Rkb3V0IGFuZCBzdGRlcnIuXG5jb25zdCBmZFVzZXNWZXJib3NlID0gZmROdW1iZXIgPT4gZmROdW1iZXIgPT09IDEgfHwgZmROdW1iZXIgPT09IDI7XG5cbmNvbnN0IFBJUEVEX1NURElPX1ZBTFVFUyA9IG5ldyBTZXQoWydwaXBlJywgJ292ZXJsYXBwZWQnXSk7XG5cbi8vIGB2ZXJib3NlOiAnZnVsbCdgIHByaW50aW5nIGxvZ2ljIHdpdGggYXN5bmMgbWV0aG9kc1xuZXhwb3J0IGNvbnN0IGxvZ0xpbmVzID0gYXN5bmMgKGxpbmVzSXRlcmFibGUsIHN0cmVhbSwgZmROdW1iZXIsIHZlcmJvc2VJbmZvKSA9PiB7XG5cdGZvciBhd2FpdCAoY29uc3QgbGluZSBvZiBsaW5lc0l0ZXJhYmxlKSB7XG5cdFx0aWYgKCFpc1BpcGluZ1N0cmVhbShzdHJlYW0pKSB7XG5cdFx0XHRsb2dMaW5lKGxpbmUsIGZkTnVtYmVyLCB2ZXJib3NlSW5mbyk7XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBgdmVyYm9zZTogJ2Z1bGwnYCBwcmludGluZyBsb2dpYyB3aXRoIHN5bmMgbWV0aG9kc1xuZXhwb3J0IGNvbnN0IGxvZ0xpbmVzU3luYyA9IChsaW5lc0FycmF5LCBmZE51bWJlciwgdmVyYm9zZUluZm8pID0+IHtcblx0Zm9yIChjb25zdCBsaW5lIG9mIGxpbmVzQXJyYXkpIHtcblx0XHRsb2dMaW5lKGxpbmUsIGZkTnVtYmVyLCB2ZXJib3NlSW5mbyk7XG5cdH1cbn07XG5cbi8vIFdoZW4gYHN1YnByb2Nlc3Muc3Rkb3V0fHN0ZGVyci5waXBlKClgIGlzIGNhbGxlZCwgYHZlcmJvc2VgIGJlY29tZXMgYSBub29wLlxuLy8gVGhpcyBwcmV2ZW50cyB0aGUgZm9sbG93aW5nIHByb2JsZW1zOlxuLy8gIC0gYC5waXBlKClgIGFjaGlldmVzIHRoZSBzYW1lIHJlc3VsdCBhcyB1c2luZyBgc3Rkb3V0OiAnaW5oZXJpdCdgLCBgc3Rkb3V0OiBzdHJlYW1gLCBldGMuIHdoaWNoIGFsc28gbWFrZSBgdmVyYm9zZWAgYSBub29wLlxuLy8gICAgRm9yIGV4YW1wbGUsIGBzdWJwcm9jZXNzLnN0ZG91dC5waXBlKHByb2Nlc3Muc3RkaW4pYCB3b3VsZCBwcmludCBlYWNoIGxpbmUgdHdpY2UuXG4vLyAgLSBXaGVuIGNoYWluaW5nIHN1YnByb2Nlc3NlcyB3aXRoIGBzdWJwcm9jZXNzLnBpcGUob3RoZXJTdWJwcm9jZXNzKWAsIG9ubHkgdGhlIGxhc3Qgb25lIHNob3VsZCBwcmludCBpdHMgb3V0cHV0LlxuLy8gRGV0ZWN0aW5nIHdoZXRoZXIgYC5waXBlKClgIGlzIGltcG9zc2libGUgd2l0aG91dCBtb25rZXktcGF0Y2hpbmcgaXQsIHNvIHdlIHVzZSB0aGUgZm9sbG93aW5nIHVuZG9jdW1lbnRlZCBwcm9wZXJ0eS5cbi8vIFRoaXMgaXMgbm90IGEgY3JpdGljYWwgYmVoYXZpb3Igc2luY2UgY2hhbmdlcyBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnR5IHdvdWxkIG9ubHkgbWFrZSBgdmVyYm9zZWAgbW9yZSB2ZXJib3NlLlxuY29uc3QgaXNQaXBpbmdTdHJlYW0gPSBzdHJlYW0gPT4gc3RyZWFtLl9yZWFkYWJsZVN0YXRlLnBpcGVzLmxlbmd0aCA+IDA7XG5cbi8vIFdoZW4gYHZlcmJvc2VgIGlzIGBmdWxsYCwgcHJpbnQgc3Rkb3V0fHN0ZGVyclxuY29uc3QgbG9nTGluZSA9IChsaW5lLCBmZE51bWJlciwgdmVyYm9zZUluZm8pID0+IHtcblx0Y29uc3QgdmVyYm9zZU1lc3NhZ2UgPSBzZXJpYWxpemVWZXJib3NlTWVzc2FnZShsaW5lKTtcblx0dmVyYm9zZUxvZyh7XG5cdFx0dHlwZTogJ291dHB1dCcsXG5cdFx0dmVyYm9zZU1lc3NhZ2UsXG5cdFx0ZmROdW1iZXIsXG5cdFx0dmVyYm9zZUluZm8sXG5cdH0pO1xufTtcbiIsICJpbXBvcnQge3dyaXRlRmlsZVN5bmMsIGFwcGVuZEZpbGVTeW5jfSBmcm9tICdub2RlOmZzJztcbmltcG9ydCB7c2hvdWxkTG9nT3V0cHV0LCBsb2dMaW5lc1N5bmN9IGZyb20gJy4uL3ZlcmJvc2Uvb3V0cHV0LmpzJztcbmltcG9ydCB7cnVuR2VuZXJhdG9yc1N5bmN9IGZyb20gJy4uL3RyYW5zZm9ybS9nZW5lcmF0b3IuanMnO1xuaW1wb3J0IHtzcGxpdExpbmVzU3luY30gZnJvbSAnLi4vdHJhbnNmb3JtL3NwbGl0LmpzJztcbmltcG9ydCB7am9pblRvU3RyaW5nLCBqb2luVG9VaW50OEFycmF5LCBidWZmZXJUb1VpbnQ4QXJyYXl9IGZyb20gJy4uL3V0aWxzL3VpbnQtYXJyYXkuanMnO1xuaW1wb3J0IHtGSUxFX1RZUEVTfSBmcm9tICcuLi9zdGRpby90eXBlLmpzJztcbmltcG9ydCB7dHJ1bmNhdGVNYXhCdWZmZXJTeW5jfSBmcm9tICcuL21heC1idWZmZXIuanMnO1xuXG4vLyBBcHBseSBgc3Rkb3V0YC9gc3RkZXJyYCBvcHRpb25zLCBhZnRlciBzcGF3bmluZywgaW4gc3luYyBtb2RlXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtT3V0cHV0U3luYyA9ICh7ZmlsZURlc2NyaXB0b3JzLCBzeW5jUmVzdWx0OiB7b3V0cHV0fSwgb3B0aW9ucywgaXNNYXhCdWZmZXIsIHZlcmJvc2VJbmZvfSkgPT4ge1xuXHRpZiAob3V0cHV0ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIHtvdXRwdXQ6IEFycmF5LmZyb20oe2xlbmd0aDogM30pfTtcblx0fVxuXG5cdGNvbnN0IHN0YXRlID0ge307XG5cdGNvbnN0IG91dHB1dEZpbGVzID0gbmV3IFNldChbXSk7XG5cdGNvbnN0IHRyYW5zZm9ybWVkT3V0cHV0ID0gb3V0cHV0Lm1hcCgocmVzdWx0LCBmZE51bWJlcikgPT5cblx0XHR0cmFuc2Zvcm1PdXRwdXRSZXN1bHRTeW5jKHtcblx0XHRcdHJlc3VsdCxcblx0XHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRcdGZkTnVtYmVyLFxuXHRcdFx0c3RhdGUsXG5cdFx0XHRvdXRwdXRGaWxlcyxcblx0XHRcdGlzTWF4QnVmZmVyLFxuXHRcdFx0dmVyYm9zZUluZm8sXG5cdFx0fSwgb3B0aW9ucykpO1xuXHRyZXR1cm4ge291dHB1dDogdHJhbnNmb3JtZWRPdXRwdXQsIC4uLnN0YXRlfTtcbn07XG5cbmNvbnN0IHRyYW5zZm9ybU91dHB1dFJlc3VsdFN5bmMgPSAoXG5cdHtyZXN1bHQsIGZpbGVEZXNjcmlwdG9ycywgZmROdW1iZXIsIHN0YXRlLCBvdXRwdXRGaWxlcywgaXNNYXhCdWZmZXIsIHZlcmJvc2VJbmZvfSxcblx0e2J1ZmZlciwgZW5jb2RpbmcsIGxpbmVzLCBzdHJpcEZpbmFsTmV3bGluZSwgbWF4QnVmZmVyfSxcbikgPT4ge1xuXHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdHJ1bmNhdGVkUmVzdWx0ID0gdHJ1bmNhdGVNYXhCdWZmZXJTeW5jKHJlc3VsdCwgaXNNYXhCdWZmZXIsIG1heEJ1ZmZlcik7XG5cdGNvbnN0IHVpbnQ4QXJyYXlSZXN1bHQgPSBidWZmZXJUb1VpbnQ4QXJyYXkodHJ1bmNhdGVkUmVzdWx0KTtcblx0Y29uc3Qge3N0ZGlvSXRlbXMsIG9iamVjdE1vZGV9ID0gZmlsZURlc2NyaXB0b3JzW2ZkTnVtYmVyXTtcblx0Y29uc3QgY2h1bmtzID0gcnVuT3V0cHV0R2VuZXJhdG9yc1N5bmMoW3VpbnQ4QXJyYXlSZXN1bHRdLCBzdGRpb0l0ZW1zLCBlbmNvZGluZywgc3RhdGUpO1xuXHRjb25zdCB7c2VyaWFsaXplZFJlc3VsdCwgZmluYWxSZXN1bHQgPSBzZXJpYWxpemVkUmVzdWx0fSA9IHNlcmlhbGl6ZUNodW5rcyh7XG5cdFx0Y2h1bmtzLFxuXHRcdG9iamVjdE1vZGUsXG5cdFx0ZW5jb2RpbmcsXG5cdFx0bGluZXMsXG5cdFx0c3RyaXBGaW5hbE5ld2xpbmUsXG5cdFx0ZmROdW1iZXIsXG5cdH0pO1xuXG5cdGxvZ091dHB1dFN5bmMoe1xuXHRcdHNlcmlhbGl6ZWRSZXN1bHQsXG5cdFx0ZmROdW1iZXIsXG5cdFx0c3RhdGUsXG5cdFx0dmVyYm9zZUluZm8sXG5cdFx0ZW5jb2RpbmcsXG5cdFx0c3RkaW9JdGVtcyxcblx0XHRvYmplY3RNb2RlLFxuXHR9KTtcblxuXHRjb25zdCByZXR1cm5lZFJlc3VsdCA9IGJ1ZmZlcltmZE51bWJlcl0gPyBmaW5hbFJlc3VsdCA6IHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHRcdGlmIChzdGF0ZS5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR3cml0ZVRvRmlsZXMoc2VyaWFsaXplZFJlc3VsdCwgc3RkaW9JdGVtcywgb3V0cHV0RmlsZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXR1cm5lZFJlc3VsdDtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRzdGF0ZS5lcnJvciA9IGVycm9yO1xuXHRcdHJldHVybiByZXR1cm5lZFJlc3VsdDtcblx0fVxufTtcblxuLy8gQXBwbGllcyB0cmFuc2Zvcm0gZ2VuZXJhdG9ycyB0byBgc3Rkb3V0YC9gc3RkZXJyYFxuY29uc3QgcnVuT3V0cHV0R2VuZXJhdG9yc1N5bmMgPSAoY2h1bmtzLCBzdGRpb0l0ZW1zLCBlbmNvZGluZywgc3RhdGUpID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gcnVuR2VuZXJhdG9yc1N5bmMoY2h1bmtzLCBzdGRpb0l0ZW1zLCBlbmNvZGluZywgZmFsc2UpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHN0YXRlLmVycm9yID0gZXJyb3I7XG5cdFx0cmV0dXJuIGNodW5rcztcblx0fVxufTtcblxuLy8gVGhlIGNvbnRlbnRzIGlzIGNvbnZlcnRlZCB0byB0aHJlZSBzdGFnZXM6XG4vLyAgLSBzZXJpYWxpemVkUmVzdWx0OiB1c2VkIHdoZW4gdGhlIHRhcmdldCBpcyBhIGZpbGUgcGF0aC9VUkwgb3IgYSBmaWxlIGRlc2NyaXB0b3IgKGluY2x1ZGluZyAnaW5oZXJpdCcpXG4vLyAgLSBmaW5hbFJlc3VsdC9yZXR1cm5lZFJlc3VsdDogcmV0dXJuZWQgYXMgYHJlc3VsdC5zdGQqYFxuY29uc3Qgc2VyaWFsaXplQ2h1bmtzID0gKHtjaHVua3MsIG9iamVjdE1vZGUsIGVuY29kaW5nLCBsaW5lcywgc3RyaXBGaW5hbE5ld2xpbmUsIGZkTnVtYmVyfSkgPT4ge1xuXHRpZiAob2JqZWN0TW9kZSkge1xuXHRcdHJldHVybiB7c2VyaWFsaXplZFJlc3VsdDogY2h1bmtzfTtcblx0fVxuXG5cdGlmIChlbmNvZGluZyA9PT0gJ2J1ZmZlcicpIHtcblx0XHRyZXR1cm4ge3NlcmlhbGl6ZWRSZXN1bHQ6IGpvaW5Ub1VpbnQ4QXJyYXkoY2h1bmtzKX07XG5cdH1cblxuXHRjb25zdCBzZXJpYWxpemVkUmVzdWx0ID0gam9pblRvU3RyaW5nKGNodW5rcywgZW5jb2RpbmcpO1xuXHRpZiAobGluZXNbZmROdW1iZXJdKSB7XG5cdFx0cmV0dXJuIHtzZXJpYWxpemVkUmVzdWx0LCBmaW5hbFJlc3VsdDogc3BsaXRMaW5lc1N5bmMoc2VyaWFsaXplZFJlc3VsdCwgIXN0cmlwRmluYWxOZXdsaW5lW2ZkTnVtYmVyXSwgb2JqZWN0TW9kZSl9O1xuXHR9XG5cblx0cmV0dXJuIHtzZXJpYWxpemVkUmVzdWx0fTtcbn07XG5cbmNvbnN0IGxvZ091dHB1dFN5bmMgPSAoe3NlcmlhbGl6ZWRSZXN1bHQsIGZkTnVtYmVyLCBzdGF0ZSwgdmVyYm9zZUluZm8sIGVuY29kaW5nLCBzdGRpb0l0ZW1zLCBvYmplY3RNb2RlfSkgPT4ge1xuXHRpZiAoIXNob3VsZExvZ091dHB1dCh7XG5cdFx0c3RkaW9JdGVtcyxcblx0XHRlbmNvZGluZyxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRmZE51bWJlcixcblx0fSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsaW5lc0FycmF5ID0gc3BsaXRMaW5lc1N5bmMoc2VyaWFsaXplZFJlc3VsdCwgZmFsc2UsIG9iamVjdE1vZGUpO1xuXG5cdHRyeSB7XG5cdFx0bG9nTGluZXNTeW5jKGxpbmVzQXJyYXksIGZkTnVtYmVyLCB2ZXJib3NlSW5mbyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0c3RhdGUuZXJyb3IgPz89IGVycm9yO1xuXHR9XG59O1xuXG4vLyBXaGVuIHRoZSBgc3RkKmAgdGFyZ2V0IGlzIGEgZmlsZSBwYXRoL1VSTCBvciBhIGZpbGUgZGVzY3JpcHRvclxuY29uc3Qgd3JpdGVUb0ZpbGVzID0gKHNlcmlhbGl6ZWRSZXN1bHQsIHN0ZGlvSXRlbXMsIG91dHB1dEZpbGVzKSA9PiB7XG5cdGZvciAoY29uc3Qge3BhdGgsIGFwcGVuZH0gb2Ygc3RkaW9JdGVtcy5maWx0ZXIoKHt0eXBlfSkgPT4gRklMRV9UWVBFUy5oYXModHlwZSkpKSB7XG5cdFx0Y29uc3QgcGF0aFN0cmluZyA9IHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJyA/IHBhdGggOiBwYXRoLnRvU3RyaW5nKCk7XG5cdFx0aWYgKGFwcGVuZCB8fCBvdXRwdXRGaWxlcy5oYXMocGF0aFN0cmluZykpIHtcblx0XHRcdGFwcGVuZEZpbGVTeW5jKHBhdGgsIHNlcmlhbGl6ZWRSZXN1bHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvdXRwdXRGaWxlcy5hZGQocGF0aFN0cmluZyk7XG5cdFx0XHR3cml0ZUZpbGVTeW5jKHBhdGgsIHNlcmlhbGl6ZWRSZXN1bHQpO1xuXHRcdH1cblx0fVxufTtcbiIsICJpbXBvcnQge2lzVWludDhBcnJheSwgY29uY2F0VWludDhBcnJheXN9IGZyb20gJy4uL3V0aWxzL3VpbnQtYXJyYXkuanMnO1xuaW1wb3J0IHtzdHJpcE5ld2xpbmV9IGZyb20gJy4uL2lvL3N0cmlwLW5ld2xpbmUuanMnO1xuXG4vLyBSZXRyaWV2ZSBgcmVzdWx0LmFsbGAgd2l0aCBzeW5jaHJvbm91cyBtZXRob2RzXG5leHBvcnQgY29uc3QgZ2V0QWxsU3luYyA9IChbLCBzdGRvdXQsIHN0ZGVycl0sIG9wdGlvbnMpID0+IHtcblx0aWYgKCFvcHRpb25zLmFsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChzdGRvdXQgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBzdGRlcnI7XG5cdH1cblxuXHRpZiAoc3RkZXJyID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gc3Rkb3V0O1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkoc3Rkb3V0KSkge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KHN0ZGVycilcblx0XHRcdD8gWy4uLnN0ZG91dCwgLi4uc3RkZXJyXVxuXHRcdFx0OiBbLi4uc3Rkb3V0LCBzdHJpcE5ld2xpbmUoc3RkZXJyLCBvcHRpb25zLCAnYWxsJyldO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkoc3RkZXJyKSkge1xuXHRcdHJldHVybiBbc3RyaXBOZXdsaW5lKHN0ZG91dCwgb3B0aW9ucywgJ2FsbCcpLCAuLi5zdGRlcnJdO1xuXHR9XG5cblx0aWYgKGlzVWludDhBcnJheShzdGRvdXQpICYmIGlzVWludDhBcnJheShzdGRlcnIpKSB7XG5cdFx0cmV0dXJuIGNvbmNhdFVpbnQ4QXJyYXlzKFtzdGRvdXQsIHN0ZGVycl0pO1xuXHR9XG5cblx0cmV0dXJuIGAke3N0ZG91dH0ke3N0ZGVycn1gO1xufTtcbiIsICJpbXBvcnQge29uY2V9IGZyb20gJ25vZGU6ZXZlbnRzJztcbmltcG9ydCB7RGlzY2FyZGVkRXJyb3J9IGZyb20gJy4uL3JldHVybi9maW5hbC1lcnJvci5qcyc7XG5cbi8vIElmIGBlcnJvcmAgaXMgZW1pdHRlZCBiZWZvcmUgYHNwYXduYCwgYGV4aXRgIHdpbGwgbmV2ZXIgYmUgZW1pdHRlZC5cbi8vIEhvd2V2ZXIsIGBlcnJvcmAgbWlnaHQgYmUgZW1pdHRlZCBhZnRlciBgc3Bhd25gLlxuLy8gSW4gdGhhdCBjYXNlLCBgZXhpdGAgd2lsbCBzdGlsbCBiZSBlbWl0dGVkLlxuLy8gU2luY2UgdGhlIGBleGl0YCBldmVudCBjb250YWlucyB0aGUgc2lnbmFsIG5hbWUsIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGFyZSBsaXN0ZW5pbmcgZm9yIGl0LlxuLy8gVGhpcyBmdW5jdGlvbiBhbHNvIHRha2VzIGludG8gYWNjb3VudCB0aGUgZm9sbG93aW5nIHVubGlrZWx5IGNhc2VzOlxuLy8gIC0gYGV4aXRgIGJlaW5nIGVtaXR0ZWQgaW4gdGhlIHNhbWUgbWljcm90YXNrIGFzIGBzcGF3bmBcbi8vICAtIGBlcnJvcmAgYmVpbmcgZW1pdHRlZCBtdWx0aXBsZSB0aW1lc1xuZXhwb3J0IGNvbnN0IHdhaXRGb3JFeGl0ID0gYXN5bmMgKHN1YnByb2Nlc3MsIGNvbnRleHQpID0+IHtcblx0Y29uc3QgW2V4aXRDb2RlLCBzaWduYWxdID0gYXdhaXQgd2FpdEZvckV4aXRPckVycm9yKHN1YnByb2Nlc3MpO1xuXHRjb250ZXh0LmlzRm9yY2VmdWxseVRlcm1pbmF0ZWQgPz89IGZhbHNlO1xuXHRyZXR1cm4gW2V4aXRDb2RlLCBzaWduYWxdO1xufTtcblxuY29uc3Qgd2FpdEZvckV4aXRPckVycm9yID0gYXN5bmMgc3VicHJvY2VzcyA9PiB7XG5cdGNvbnN0IFtzcGF3blBheWxvYWQsIGV4aXRQYXlsb2FkXSA9IGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChbXG5cdFx0b25jZShzdWJwcm9jZXNzLCAnc3Bhd24nKSxcblx0XHRvbmNlKHN1YnByb2Nlc3MsICdleGl0JyksXG5cdF0pO1xuXG5cdGlmIChzcGF3blBheWxvYWQuc3RhdHVzID09PSAncmVqZWN0ZWQnKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0cmV0dXJuIGV4aXRQYXlsb2FkLnN0YXR1cyA9PT0gJ3JlamVjdGVkJ1xuXHRcdD8gd2FpdEZvclN1YnByb2Nlc3NFeGl0KHN1YnByb2Nlc3MpXG5cdFx0OiBleGl0UGF5bG9hZC52YWx1ZTtcbn07XG5cbmNvbnN0IHdhaXRGb3JTdWJwcm9jZXNzRXhpdCA9IGFzeW5jIHN1YnByb2Nlc3MgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBvbmNlKHN1YnByb2Nlc3MsICdleGl0Jyk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiB3YWl0Rm9yU3VicHJvY2Vzc0V4aXQoc3VicHJvY2Vzcyk7XG5cdH1cbn07XG5cbi8vIFJldHJpZXZlIHRoZSBmaW5hbCBleGl0IGNvZGUgYW5kfG9yIHNpZ25hbCBuYW1lXG5leHBvcnQgY29uc3Qgd2FpdEZvclN1Y2Nlc3NmdWxFeGl0ID0gYXN5bmMgZXhpdFByb21pc2UgPT4ge1xuXHRjb25zdCBbZXhpdENvZGUsIHNpZ25hbF0gPSBhd2FpdCBleGl0UHJvbWlzZTtcblxuXHRpZiAoIWlzU3VicHJvY2Vzc0Vycm9yRXhpdChleGl0Q29kZSwgc2lnbmFsKSAmJiBpc0ZhaWxlZEV4aXQoZXhpdENvZGUsIHNpZ25hbCkpIHtcblx0XHR0aHJvdyBuZXcgRGlzY2FyZGVkRXJyb3IoKTtcblx0fVxuXG5cdHJldHVybiBbZXhpdENvZGUsIHNpZ25hbF07XG59O1xuXG4vLyBXaGVuIHRoZSBzdWJwcm9jZXNzIGZhaWxzIGR1ZSB0byBhbiBgZXJyb3JgIGV2ZW50XG5jb25zdCBpc1N1YnByb2Nlc3NFcnJvckV4aXQgPSAoZXhpdENvZGUsIHNpZ25hbCkgPT4gZXhpdENvZGUgPT09IHVuZGVmaW5lZCAmJiBzaWduYWwgPT09IHVuZGVmaW5lZDtcbi8vIFdoZW4gdGhlIHN1YnByb2Nlc3MgZmFpbHMgZHVlIHRvIGEgbm9uLTAgZXhpdCBjb2RlIG9yIHRvIGEgc2lnbmFsIHRlcm1pbmF0aW9uXG5leHBvcnQgY29uc3QgaXNGYWlsZWRFeGl0ID0gKGV4aXRDb2RlLCBzaWduYWwpID0+IGV4aXRDb2RlICE9PSAwIHx8IHNpZ25hbCAhPT0gbnVsbDtcbiIsICJpbXBvcnQge0Rpc2NhcmRlZEVycm9yfSBmcm9tICcuLi9yZXR1cm4vZmluYWwtZXJyb3IuanMnO1xuaW1wb3J0IHtpc01heEJ1ZmZlclN5bmN9IGZyb20gJy4uL2lvL21heC1idWZmZXIuanMnO1xuaW1wb3J0IHtpc0ZhaWxlZEV4aXR9IGZyb20gJy4vZXhpdC1hc3luYy5qcyc7XG5cbi8vIFJldHJpZXZlIGV4aXQgY29kZSwgc2lnbmFsIG5hbWUgYW5kIGVycm9yIGluZm9ybWF0aW9uLCB3aXRoIHN5bmNocm9ub3VzIG1ldGhvZHNcbmV4cG9ydCBjb25zdCBnZXRFeGl0UmVzdWx0U3luYyA9ICh7ZXJyb3IsIHN0YXR1czogZXhpdENvZGUsIHNpZ25hbCwgb3V0cHV0fSwge21heEJ1ZmZlcn0pID0+IHtcblx0Y29uc3QgcmVzdWx0RXJyb3IgPSBnZXRSZXN1bHRFcnJvcihlcnJvciwgZXhpdENvZGUsIHNpZ25hbCk7XG5cdGNvbnN0IHRpbWVkT3V0ID0gcmVzdWx0RXJyb3I/LmNvZGUgPT09ICdFVElNRURPVVQnO1xuXHRjb25zdCBpc01heEJ1ZmZlciA9IGlzTWF4QnVmZmVyU3luYyhyZXN1bHRFcnJvciwgb3V0cHV0LCBtYXhCdWZmZXIpO1xuXHRyZXR1cm4ge1xuXHRcdHJlc3VsdEVycm9yLFxuXHRcdGV4aXRDb2RlLFxuXHRcdHNpZ25hbCxcblx0XHR0aW1lZE91dCxcblx0XHRpc01heEJ1ZmZlcixcblx0fTtcbn07XG5cbmNvbnN0IGdldFJlc3VsdEVycm9yID0gKGVycm9yLCBleGl0Q29kZSwgc2lnbmFsKSA9PiB7XG5cdGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGVycm9yO1xuXHR9XG5cblx0cmV0dXJuIGlzRmFpbGVkRXhpdChleGl0Q29kZSwgc2lnbmFsKSA/IG5ldyBEaXNjYXJkZWRFcnJvcigpIDogdW5kZWZpbmVkO1xufTtcbiIsICJpbXBvcnQge3NwYXduU3luY30gZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7aGFuZGxlQ29tbWFuZH0gZnJvbSAnLi4vYXJndW1lbnRzL2NvbW1hbmQuanMnO1xuaW1wb3J0IHtub3JtYWxpemVPcHRpb25zfSBmcm9tICcuLi9hcmd1bWVudHMvb3B0aW9ucy5qcyc7XG5pbXBvcnQge21ha2VFcnJvciwgbWFrZUVhcmx5RXJyb3IsIG1ha2VTdWNjZXNzUmVzdWx0fSBmcm9tICcuLi9yZXR1cm4vcmVzdWx0LmpzJztcbmltcG9ydCB7aGFuZGxlUmVzdWx0fSBmcm9tICcuLi9yZXR1cm4vcmVqZWN0LmpzJztcbmltcG9ydCB7aGFuZGxlU3RkaW9TeW5jfSBmcm9tICcuLi9zdGRpby9oYW5kbGUtc3luYy5qcyc7XG5pbXBvcnQge3N0cmlwTmV3bGluZX0gZnJvbSAnLi4vaW8vc3RyaXAtbmV3bGluZS5qcyc7XG5pbXBvcnQge2FkZElucHV0T3B0aW9uc1N5bmN9IGZyb20gJy4uL2lvL2lucHV0LXN5bmMuanMnO1xuaW1wb3J0IHt0cmFuc2Zvcm1PdXRwdXRTeW5jfSBmcm9tICcuLi9pby9vdXRwdXQtc3luYy5qcyc7XG5pbXBvcnQge2dldE1heEJ1ZmZlclN5bmN9IGZyb20gJy4uL2lvL21heC1idWZmZXIuanMnO1xuaW1wb3J0IHtnZXRBbGxTeW5jfSBmcm9tICcuLi9yZXNvbHZlL2FsbC1zeW5jLmpzJztcbmltcG9ydCB7Z2V0RXhpdFJlc3VsdFN5bmN9IGZyb20gJy4uL3Jlc29sdmUvZXhpdC1zeW5jLmpzJztcblxuLy8gTWFpbiBzaGFyZWQgbG9naWMgZm9yIGFsbCBzeW5jIG1ldGhvZHM6IGBleGVjYVN5bmMoKWAsIGAkLnN5bmMoKWBcbmV4cG9ydCBjb25zdCBleGVjYUNvcmVTeW5jID0gKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucykgPT4ge1xuXHRjb25zdCB7ZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgY29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIHN0YXJ0VGltZSwgdmVyYm9zZUluZm8sIG9wdGlvbnMsIGZpbGVEZXNjcmlwdG9yc30gPSBoYW5kbGVTeW5jQXJndW1lbnRzKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucyk7XG5cdGNvbnN0IHJlc3VsdCA9IHNwYXduU3VicHJvY2Vzc1N5bmMoe1xuXHRcdGZpbGUsXG5cdFx0Y29tbWFuZEFyZ3VtZW50cyxcblx0XHRvcHRpb25zLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0dmVyYm9zZUluZm8sXG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdHN0YXJ0VGltZSxcblx0fSk7XG5cdHJldHVybiBoYW5kbGVSZXN1bHQocmVzdWx0LCB2ZXJib3NlSW5mbywgb3B0aW9ucyk7XG59O1xuXG4vLyBDb21wdXRlIGFyZ3VtZW50cyB0byBwYXNzIHRvIGBjaGlsZF9wcm9jZXNzLnNwYXduU3luYygpYFxuY29uc3QgaGFuZGxlU3luY0FyZ3VtZW50cyA9IChyYXdGaWxlLCByYXdBcmd1bWVudHMsIHJhd09wdGlvbnMpID0+IHtcblx0Y29uc3Qge2NvbW1hbmQsIGVzY2FwZWRDb21tYW5kLCBzdGFydFRpbWUsIHZlcmJvc2VJbmZvfSA9IGhhbmRsZUNvbW1hbmQocmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zKTtcblx0Y29uc3Qgc3luY09wdGlvbnMgPSBub3JtYWxpemVTeW5jT3B0aW9ucyhyYXdPcHRpb25zKTtcblx0Y29uc3Qge2ZpbGUsIGNvbW1hbmRBcmd1bWVudHMsIG9wdGlvbnN9ID0gbm9ybWFsaXplT3B0aW9ucyhyYXdGaWxlLCByYXdBcmd1bWVudHMsIHN5bmNPcHRpb25zKTtcblx0dmFsaWRhdGVTeW5jT3B0aW9ucyhvcHRpb25zKTtcblx0Y29uc3QgZmlsZURlc2NyaXB0b3JzID0gaGFuZGxlU3RkaW9TeW5jKG9wdGlvbnMsIHZlcmJvc2VJbmZvKTtcblx0cmV0dXJuIHtcblx0XHRmaWxlLFxuXHRcdGNvbW1hbmRBcmd1bWVudHMsXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRzdGFydFRpbWUsXG5cdFx0dmVyYm9zZUluZm8sXG5cdFx0b3B0aW9ucyxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdH07XG59O1xuXG4vLyBPcHRpb25zIG5vcm1hbGl6YXRpb24gbG9naWMgc3BlY2lmaWMgdG8gc3luYyBtZXRob2RzXG5jb25zdCBub3JtYWxpemVTeW5jT3B0aW9ucyA9IG9wdGlvbnMgPT4gb3B0aW9ucy5ub2RlICYmICFvcHRpb25zLmlwYyA/IHsuLi5vcHRpb25zLCBpcGM6IGZhbHNlfSA6IG9wdGlvbnM7XG5cbi8vIE9wdGlvbnMgdmFsaWRhdGlvbiBsb2dpYyBzcGVjaWZpYyB0byBzeW5jIG1ldGhvZHNcbmNvbnN0IHZhbGlkYXRlU3luY09wdGlvbnMgPSAoe2lwYywgaXBjSW5wdXQsIGRldGFjaGVkLCBjYW5jZWxTaWduYWx9KSA9PiB7XG5cdGlmIChpcGNJbnB1dCkge1xuXHRcdHRocm93SW52YWxpZFN5bmNPcHRpb24oJ2lwY0lucHV0Jyk7XG5cdH1cblxuXHRpZiAoaXBjKSB7XG5cdFx0dGhyb3dJbnZhbGlkU3luY09wdGlvbignaXBjOiB0cnVlJyk7XG5cdH1cblxuXHRpZiAoZGV0YWNoZWQpIHtcblx0XHR0aHJvd0ludmFsaWRTeW5jT3B0aW9uKCdkZXRhY2hlZDogdHJ1ZScpO1xuXHR9XG5cblx0aWYgKGNhbmNlbFNpZ25hbCkge1xuXHRcdHRocm93SW52YWxpZFN5bmNPcHRpb24oJ2NhbmNlbFNpZ25hbCcpO1xuXHR9XG59O1xuXG5jb25zdCB0aHJvd0ludmFsaWRTeW5jT3B0aW9uID0gdmFsdWUgPT4ge1xuXHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXCIke3ZhbHVlfVwiIG9wdGlvbiBjYW5ub3QgYmUgdXNlZCB3aXRoIHN5bmNocm9ub3VzIG1ldGhvZHMuYCk7XG59O1xuXG5jb25zdCBzcGF3blN1YnByb2Nlc3NTeW5jID0gKHtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zLCBjb21tYW5kLCBlc2NhcGVkQ29tbWFuZCwgdmVyYm9zZUluZm8sIGZpbGVEZXNjcmlwdG9ycywgc3RhcnRUaW1lfSkgPT4ge1xuXHRjb25zdCBzeW5jUmVzdWx0ID0gcnVuU3VicHJvY2Vzc1N5bmMoe1xuXHRcdGZpbGUsXG5cdFx0Y29tbWFuZEFyZ3VtZW50cyxcblx0XHRvcHRpb25zLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdHN0YXJ0VGltZSxcblx0fSk7XG5cdGlmIChzeW5jUmVzdWx0LmZhaWxlZCkge1xuXHRcdHJldHVybiBzeW5jUmVzdWx0O1xuXHR9XG5cblx0Y29uc3Qge3Jlc3VsdEVycm9yLCBleGl0Q29kZSwgc2lnbmFsLCB0aW1lZE91dCwgaXNNYXhCdWZmZXJ9ID0gZ2V0RXhpdFJlc3VsdFN5bmMoc3luY1Jlc3VsdCwgb3B0aW9ucyk7XG5cdGNvbnN0IHtvdXRwdXQsIGVycm9yID0gcmVzdWx0RXJyb3J9ID0gdHJhbnNmb3JtT3V0cHV0U3luYyh7XG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdHN5bmNSZXN1bHQsXG5cdFx0b3B0aW9ucyxcblx0XHRpc01heEJ1ZmZlcixcblx0XHR2ZXJib3NlSW5mbyxcblx0fSk7XG5cdGNvbnN0IHN0ZGlvID0gb3V0cHV0Lm1hcCgoc3RkaW9PdXRwdXQsIGZkTnVtYmVyKSA9PiBzdHJpcE5ld2xpbmUoc3RkaW9PdXRwdXQsIG9wdGlvbnMsIGZkTnVtYmVyKSk7XG5cdGNvbnN0IGFsbCA9IHN0cmlwTmV3bGluZShnZXRBbGxTeW5jKG91dHB1dCwgb3B0aW9ucyksIG9wdGlvbnMsICdhbGwnKTtcblx0cmV0dXJuIGdldFN5bmNSZXN1bHQoe1xuXHRcdGVycm9yLFxuXHRcdGV4aXRDb2RlLFxuXHRcdHNpZ25hbCxcblx0XHR0aW1lZE91dCxcblx0XHRpc01heEJ1ZmZlcixcblx0XHRzdGRpbyxcblx0XHRhbGwsXG5cdFx0b3B0aW9ucyxcblx0XHRjb21tYW5kLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdHN0YXJ0VGltZSxcblx0fSk7XG59O1xuXG5jb25zdCBydW5TdWJwcm9jZXNzU3luYyA9ICh7ZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9ucywgY29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIGZpbGVEZXNjcmlwdG9ycywgc3RhcnRUaW1lfSkgPT4ge1xuXHR0cnkge1xuXHRcdGFkZElucHV0T3B0aW9uc1N5bmMoZmlsZURlc2NyaXB0b3JzLCBvcHRpb25zKTtcblx0XHRjb25zdCBub3JtYWxpemVkT3B0aW9ucyA9IG5vcm1hbGl6ZVNwYXduU3luY09wdGlvbnMob3B0aW9ucyk7XG5cdFx0cmV0dXJuIHNwYXduU3luYyhmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBub3JtYWxpemVkT3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuIG1ha2VFYXJseUVycm9yKHtcblx0XHRcdGVycm9yLFxuXHRcdFx0Y29tbWFuZCxcblx0XHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdFx0b3B0aW9ucyxcblx0XHRcdHN0YXJ0VGltZSxcblx0XHRcdGlzU3luYzogdHJ1ZSxcblx0XHR9KTtcblx0fVxufTtcblxuLy8gVGhlIGBlbmNvZGluZ2Agb3B0aW9uIGlzIGhhbmRsZWQgYnkgRXhlY2EsIG5vdCBieSBgY2hpbGRfcHJvY2Vzcy5zcGF3blN5bmMoKWBcbmNvbnN0IG5vcm1hbGl6ZVNwYXduU3luY09wdGlvbnMgPSAoe2VuY29kaW5nLCBtYXhCdWZmZXIsIC4uLm9wdGlvbnN9KSA9PiAoey4uLm9wdGlvbnMsIGVuY29kaW5nOiAnYnVmZmVyJywgbWF4QnVmZmVyOiBnZXRNYXhCdWZmZXJTeW5jKG1heEJ1ZmZlcil9KTtcblxuY29uc3QgZ2V0U3luY1Jlc3VsdCA9ICh7ZXJyb3IsIGV4aXRDb2RlLCBzaWduYWwsIHRpbWVkT3V0LCBpc01heEJ1ZmZlciwgc3RkaW8sIGFsbCwgb3B0aW9ucywgY29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIHN0YXJ0VGltZX0pID0+IGVycm9yID09PSB1bmRlZmluZWRcblx0PyBtYWtlU3VjY2Vzc1Jlc3VsdCh7XG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRzdGRpbyxcblx0XHRhbGwsXG5cdFx0aXBjT3V0cHV0OiBbXSxcblx0XHRvcHRpb25zLFxuXHRcdHN0YXJ0VGltZSxcblx0fSlcblx0OiBtYWtlRXJyb3Ioe1xuXHRcdGVycm9yLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0dGltZWRPdXQsXG5cdFx0aXNDYW5jZWxlZDogZmFsc2UsXG5cdFx0aXNHcmFjZWZ1bGx5Q2FuY2VsZWQ6IGZhbHNlLFxuXHRcdGlzTWF4QnVmZmVyLFxuXHRcdGlzRm9yY2VmdWxseVRlcm1pbmF0ZWQ6IGZhbHNlLFxuXHRcdGV4aXRDb2RlLFxuXHRcdHNpZ25hbCxcblx0XHRzdGRpbyxcblx0XHRhbGwsXG5cdFx0aXBjT3V0cHV0OiBbXSxcblx0XHRvcHRpb25zLFxuXHRcdHN0YXJ0VGltZSxcblx0XHRpc1N5bmM6IHRydWUsXG5cdH0pO1xuIiwgImltcG9ydCB7b25jZSwgb259IGZyb20gJ25vZGU6ZXZlbnRzJztcbmltcG9ydCB7XG5cdHZhbGlkYXRlSXBjTWV0aG9kLFxuXHR0aHJvd09uRWFybHlEaXNjb25uZWN0LFxuXHRkaXNjb25uZWN0LFxuXHRnZXRTdHJpY3RSZXNwb25zZUVycm9yLFxufSBmcm9tICcuL3ZhbGlkYXRpb24uanMnO1xuaW1wb3J0IHtnZXRJcGNFbWl0dGVyLCBpc0Nvbm5lY3RlZH0gZnJvbSAnLi9mb3J3YXJkLmpzJztcbmltcG9ydCB7YWRkUmVmZXJlbmNlLCByZW1vdmVSZWZlcmVuY2V9IGZyb20gJy4vcmVmZXJlbmNlLmpzJztcblxuLy8gTGlrZSBgW3N1Yl1wcm9jZXNzLm9uY2UoJ21lc3NhZ2UnKWAgYnV0IHByb21pc2UtYmFzZWRcbmV4cG9ydCBjb25zdCBnZXRPbmVNZXNzYWdlID0gKHthbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MsIGlwY30sIHtyZWZlcmVuY2UgPSB0cnVlLCBmaWx0ZXJ9ID0ge30pID0+IHtcblx0dmFsaWRhdGVJcGNNZXRob2Qoe1xuXHRcdG1ldGhvZE5hbWU6ICdnZXRPbmVNZXNzYWdlJyxcblx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0aXBjLFxuXHRcdGlzQ29ubmVjdGVkOiBpc0Nvbm5lY3RlZChhbnlQcm9jZXNzKSxcblx0fSk7XG5cblx0cmV0dXJuIGdldE9uZU1lc3NhZ2VBc3luYyh7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0XHRmaWx0ZXIsXG5cdFx0cmVmZXJlbmNlLFxuXHR9KTtcbn07XG5cbmNvbnN0IGdldE9uZU1lc3NhZ2VBc3luYyA9IGFzeW5jICh7YW55UHJvY2VzcywgY2hhbm5lbCwgaXNTdWJwcm9jZXNzLCBmaWx0ZXIsIHJlZmVyZW5jZX0pID0+IHtcblx0YWRkUmVmZXJlbmNlKGNoYW5uZWwsIHJlZmVyZW5jZSk7XG5cdGNvbnN0IGlwY0VtaXR0ZXIgPSBnZXRJcGNFbWl0dGVyKGFueVByb2Nlc3MsIGNoYW5uZWwsIGlzU3VicHJvY2Vzcyk7XG5cdGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IFByb21pc2UucmFjZShbXG5cdFx0XHRnZXRNZXNzYWdlKGlwY0VtaXR0ZXIsIGZpbHRlciwgY29udHJvbGxlciksXG5cdFx0XHR0aHJvd09uRGlzY29ubmVjdChpcGNFbWl0dGVyLCBpc1N1YnByb2Nlc3MsIGNvbnRyb2xsZXIpLFxuXHRcdFx0dGhyb3dPblN0cmljdEVycm9yKGlwY0VtaXR0ZXIsIGlzU3VicHJvY2VzcywgY29udHJvbGxlciksXG5cdFx0XSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZGlzY29ubmVjdChhbnlQcm9jZXNzKTtcblx0XHR0aHJvdyBlcnJvcjtcblx0fSBmaW5hbGx5IHtcblx0XHRjb250cm9sbGVyLmFib3J0KCk7XG5cdFx0cmVtb3ZlUmVmZXJlbmNlKGNoYW5uZWwsIHJlZmVyZW5jZSk7XG5cdH1cbn07XG5cbmNvbnN0IGdldE1lc3NhZ2UgPSBhc3luYyAoaXBjRW1pdHRlciwgZmlsdGVyLCB7c2lnbmFsfSkgPT4ge1xuXHRpZiAoZmlsdGVyID09PSB1bmRlZmluZWQpIHtcblx0XHRjb25zdCBbbWVzc2FnZV0gPSBhd2FpdCBvbmNlKGlwY0VtaXR0ZXIsICdtZXNzYWdlJywge3NpZ25hbH0pO1xuXHRcdHJldHVybiBtZXNzYWdlO1xuXHR9XG5cblx0Zm9yIGF3YWl0IChjb25zdCBbbWVzc2FnZV0gb2Ygb24oaXBjRW1pdHRlciwgJ21lc3NhZ2UnLCB7c2lnbmFsfSkpIHtcblx0XHRpZiAoZmlsdGVyKG1lc3NhZ2UpKSB7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZTtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IHRocm93T25EaXNjb25uZWN0ID0gYXN5bmMgKGlwY0VtaXR0ZXIsIGlzU3VicHJvY2Vzcywge3NpZ25hbH0pID0+IHtcblx0YXdhaXQgb25jZShpcGNFbWl0dGVyLCAnZGlzY29ubmVjdCcsIHtzaWduYWx9KTtcblx0dGhyb3dPbkVhcmx5RGlzY29ubmVjdChpc1N1YnByb2Nlc3MpO1xufTtcblxuY29uc3QgdGhyb3dPblN0cmljdEVycm9yID0gYXN5bmMgKGlwY0VtaXR0ZXIsIGlzU3VicHJvY2Vzcywge3NpZ25hbH0pID0+IHtcblx0Y29uc3QgW2Vycm9yXSA9IGF3YWl0IG9uY2UoaXBjRW1pdHRlciwgJ3N0cmljdDplcnJvcicsIHtzaWduYWx9KTtcblx0dGhyb3cgZ2V0U3RyaWN0UmVzcG9uc2VFcnJvcihlcnJvciwgaXNTdWJwcm9jZXNzKTtcbn07XG4iLCAiaW1wb3J0IHtvbmNlLCBvbn0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHt2YWxpZGF0ZUlwY01ldGhvZCwgZGlzY29ubmVjdCwgZ2V0U3RyaWN0UmVzcG9uc2VFcnJvcn0gZnJvbSAnLi92YWxpZGF0aW9uLmpzJztcbmltcG9ydCB7Z2V0SXBjRW1pdHRlciwgaXNDb25uZWN0ZWR9IGZyb20gJy4vZm9yd2FyZC5qcyc7XG5pbXBvcnQge2FkZFJlZmVyZW5jZSwgcmVtb3ZlUmVmZXJlbmNlfSBmcm9tICcuL3JlZmVyZW5jZS5qcyc7XG5cbi8vIExpa2UgYFtzdWJdcHJvY2Vzcy5vbignbWVzc2FnZScpYCBidXQgcHJvbWlzZS1iYXNlZFxuZXhwb3J0IGNvbnN0IGdldEVhY2hNZXNzYWdlID0gKHthbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MsIGlwY30sIHtyZWZlcmVuY2UgPSB0cnVlfSA9IHt9KSA9PiBsb29wT25NZXNzYWdlcyh7XG5cdGFueVByb2Nlc3MsXG5cdGNoYW5uZWwsXG5cdGlzU3VicHJvY2Vzcyxcblx0aXBjLFxuXHRzaG91bGRBd2FpdDogIWlzU3VicHJvY2Vzcyxcblx0cmVmZXJlbmNlLFxufSk7XG5cbi8vIFNhbWUgYnV0IHVzZWQgaW50ZXJuYWxseVxuZXhwb3J0IGNvbnN0IGxvb3BPbk1lc3NhZ2VzID0gKHthbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MsIGlwYywgc2hvdWxkQXdhaXQsIHJlZmVyZW5jZX0pID0+IHtcblx0dmFsaWRhdGVJcGNNZXRob2Qoe1xuXHRcdG1ldGhvZE5hbWU6ICdnZXRFYWNoTWVzc2FnZScsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGlwYyxcblx0XHRpc0Nvbm5lY3RlZDogaXNDb25uZWN0ZWQoYW55UHJvY2VzcyksXG5cdH0pO1xuXG5cdGFkZFJlZmVyZW5jZShjaGFubmVsLCByZWZlcmVuY2UpO1xuXHRjb25zdCBpcGNFbWl0dGVyID0gZ2V0SXBjRW1pdHRlcihhbnlQcm9jZXNzLCBjaGFubmVsLCBpc1N1YnByb2Nlc3MpO1xuXHRjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHRjb25zdCBzdGF0ZSA9IHt9O1xuXHRzdG9wT25EaXNjb25uZWN0KGFueVByb2Nlc3MsIGlwY0VtaXR0ZXIsIGNvbnRyb2xsZXIpO1xuXHRhYm9ydE9uU3RyaWN0RXJyb3Ioe1xuXHRcdGlwY0VtaXR0ZXIsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGNvbnRyb2xsZXIsXG5cdFx0c3RhdGUsXG5cdH0pO1xuXHRyZXR1cm4gaXRlcmF0ZU9uTWVzc2FnZXMoe1xuXHRcdGFueVByb2Nlc3MsXG5cdFx0Y2hhbm5lbCxcblx0XHRpcGNFbWl0dGVyLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0XHRzaG91bGRBd2FpdCxcblx0XHRjb250cm9sbGVyLFxuXHRcdHN0YXRlLFxuXHRcdHJlZmVyZW5jZSxcblx0fSk7XG59O1xuXG5jb25zdCBzdG9wT25EaXNjb25uZWN0ID0gYXN5bmMgKGFueVByb2Nlc3MsIGlwY0VtaXR0ZXIsIGNvbnRyb2xsZXIpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBvbmNlKGlwY0VtaXR0ZXIsICdkaXNjb25uZWN0Jywge3NpZ25hbDogY29udHJvbGxlci5zaWduYWx9KTtcblx0XHRjb250cm9sbGVyLmFib3J0KCk7XG5cdH0gY2F0Y2gge31cbn07XG5cbmNvbnN0IGFib3J0T25TdHJpY3RFcnJvciA9IGFzeW5jICh7aXBjRW1pdHRlciwgaXNTdWJwcm9jZXNzLCBjb250cm9sbGVyLCBzdGF0ZX0pID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBbZXJyb3JdID0gYXdhaXQgb25jZShpcGNFbWl0dGVyLCAnc3RyaWN0OmVycm9yJywge3NpZ25hbDogY29udHJvbGxlci5zaWduYWx9KTtcblx0XHRzdGF0ZS5lcnJvciA9IGdldFN0cmljdFJlc3BvbnNlRXJyb3IoZXJyb3IsIGlzU3VicHJvY2Vzcyk7XG5cdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHR9IGNhdGNoIHt9XG59O1xuXG5jb25zdCBpdGVyYXRlT25NZXNzYWdlcyA9IGFzeW5jIGZ1bmN0aW9uICogKHthbnlQcm9jZXNzLCBjaGFubmVsLCBpcGNFbWl0dGVyLCBpc1N1YnByb2Nlc3MsIHNob3VsZEF3YWl0LCBjb250cm9sbGVyLCBzdGF0ZSwgcmVmZXJlbmNlfSkge1xuXHR0cnkge1xuXHRcdGZvciBhd2FpdCAoY29uc3QgW21lc3NhZ2VdIG9mIG9uKGlwY0VtaXR0ZXIsICdtZXNzYWdlJywge3NpZ25hbDogY29udHJvbGxlci5zaWduYWx9KSkge1xuXHRcdFx0dGhyb3dJZlN0cmljdEVycm9yKHN0YXRlKTtcblx0XHRcdHlpZWxkIG1lc3NhZ2U7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHR0aHJvd0lmU3RyaWN0RXJyb3Ioc3RhdGUpO1xuXHR9IGZpbmFsbHkge1xuXHRcdGNvbnRyb2xsZXIuYWJvcnQoKTtcblx0XHRyZW1vdmVSZWZlcmVuY2UoY2hhbm5lbCwgcmVmZXJlbmNlKTtcblxuXHRcdGlmICghaXNTdWJwcm9jZXNzKSB7XG5cdFx0XHRkaXNjb25uZWN0KGFueVByb2Nlc3MpO1xuXHRcdH1cblxuXHRcdGlmIChzaG91bGRBd2FpdCkge1xuXHRcdFx0YXdhaXQgYW55UHJvY2Vzcztcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IHRocm93SWZTdHJpY3RFcnJvciA9ICh7ZXJyb3J9KSA9PiB7XG5cdGlmIChlcnJvcikge1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuIiwgImltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5pbXBvcnQge3NlbmRNZXNzYWdlfSBmcm9tICcuL3NlbmQuanMnO1xuaW1wb3J0IHtnZXRPbmVNZXNzYWdlfSBmcm9tICcuL2dldC1vbmUuanMnO1xuaW1wb3J0IHtnZXRFYWNoTWVzc2FnZX0gZnJvbSAnLi9nZXQtZWFjaC5qcyc7XG5pbXBvcnQge2dldENhbmNlbFNpZ25hbH0gZnJvbSAnLi9ncmFjZWZ1bC5qcyc7XG5cbi8vIEFkZCBwcm9taXNlLWJhc2VkIElQQyBtZXRob2RzIGluIGN1cnJlbnQgcHJvY2Vzc1xuZXhwb3J0IGNvbnN0IGFkZElwY01ldGhvZHMgPSAoc3VicHJvY2Vzcywge2lwY30pID0+IHtcblx0T2JqZWN0LmFzc2lnbihzdWJwcm9jZXNzLCBnZXRJcGNNZXRob2RzKHN1YnByb2Nlc3MsIGZhbHNlLCBpcGMpKTtcbn07XG5cbi8vIEdldCBwcm9taXNlLWJhc2VkIElQQyBpbiB0aGUgc3VicHJvY2Vzc1xuZXhwb3J0IGNvbnN0IGdldElwY0V4cG9ydCA9ICgpID0+IHtcblx0Y29uc3QgYW55UHJvY2VzcyA9IHByb2Nlc3M7XG5cdGNvbnN0IGlzU3VicHJvY2VzcyA9IHRydWU7XG5cdGNvbnN0IGlwYyA9IHByb2Nlc3MuY2hhbm5lbCAhPT0gdW5kZWZpbmVkO1xuXG5cdHJldHVybiB7XG5cdFx0Li4uZ2V0SXBjTWV0aG9kcyhhbnlQcm9jZXNzLCBpc1N1YnByb2Nlc3MsIGlwYyksXG5cdFx0Z2V0Q2FuY2VsU2lnbmFsOiBnZXRDYW5jZWxTaWduYWwuYmluZCh1bmRlZmluZWQsIHtcblx0XHRcdGFueVByb2Nlc3MsXG5cdFx0XHRjaGFubmVsOiBhbnlQcm9jZXNzLmNoYW5uZWwsXG5cdFx0XHRpc1N1YnByb2Nlc3MsXG5cdFx0XHRpcGMsXG5cdFx0fSksXG5cdH07XG59O1xuXG4vLyBSZXRyaWV2ZSB0aGUgYGlwY2Agc2hhcmVkIGJ5IGJvdGggdGhlIGN1cnJlbnQgcHJvY2VzcyBhbmQgdGhlIHN1YnByb2Nlc3NcbmNvbnN0IGdldElwY01ldGhvZHMgPSAoYW55UHJvY2VzcywgaXNTdWJwcm9jZXNzLCBpcGMpID0+ICh7XG5cdHNlbmRNZXNzYWdlOiBzZW5kTWVzc2FnZS5iaW5kKHVuZGVmaW5lZCwge1xuXHRcdGFueVByb2Nlc3MsXG5cdFx0Y2hhbm5lbDogYW55UHJvY2Vzcy5jaGFubmVsLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0XHRpcGMsXG5cdH0pLFxuXHRnZXRPbmVNZXNzYWdlOiBnZXRPbmVNZXNzYWdlLmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0YW55UHJvY2Vzcyxcblx0XHRjaGFubmVsOiBhbnlQcm9jZXNzLmNoYW5uZWwsXG5cdFx0aXNTdWJwcm9jZXNzLFxuXHRcdGlwYyxcblx0fSksXG5cdGdldEVhY2hNZXNzYWdlOiBnZXRFYWNoTWVzc2FnZS5iaW5kKHVuZGVmaW5lZCwge1xuXHRcdGFueVByb2Nlc3MsXG5cdFx0Y2hhbm5lbDogYW55UHJvY2Vzcy5jaGFubmVsLFxuXHRcdGlzU3VicHJvY2Vzcyxcblx0XHRpcGMsXG5cdH0pLFxufSk7XG4iLCAiaW1wb3J0IHtDaGlsZFByb2Nlc3N9IGZyb20gJ25vZGU6Y2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQge1xuXHRQYXNzVGhyb3VnaCxcblx0UmVhZGFibGUsXG5cdFdyaXRhYmxlLFxuXHREdXBsZXgsXG59IGZyb20gJ25vZGU6c3RyZWFtJztcbmltcG9ydCB7Y2xlYW51cEN1c3RvbVN0cmVhbXN9IGZyb20gJy4uL3N0ZGlvL2hhbmRsZS5qcyc7XG5pbXBvcnQge21ha2VFYXJseUVycm9yfSBmcm9tICcuL3Jlc3VsdC5qcyc7XG5pbXBvcnQge2hhbmRsZVJlc3VsdH0gZnJvbSAnLi9yZWplY3QuanMnO1xuXG4vLyBXaGVuIHRoZSBzdWJwcm9jZXNzIGZhaWxzIHRvIHNwYXduLlxuLy8gV2UgZW5zdXJlIHRoZSByZXR1cm5lZCBlcnJvciBpcyBhbHdheXMgYm90aCBhIHByb21pc2UgYW5kIGEgc3VicHJvY2Vzcy5cbmV4cG9ydCBjb25zdCBoYW5kbGVFYXJseUVycm9yID0gKHtlcnJvciwgY29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIGZpbGVEZXNjcmlwdG9ycywgb3B0aW9ucywgc3RhcnRUaW1lLCB2ZXJib3NlSW5mb30pID0+IHtcblx0Y2xlYW51cEN1c3RvbVN0cmVhbXMoZmlsZURlc2NyaXB0b3JzKTtcblxuXHRjb25zdCBzdWJwcm9jZXNzID0gbmV3IENoaWxkUHJvY2VzcygpO1xuXHRjcmVhdGVEdW1teVN0cmVhbXMoc3VicHJvY2VzcywgZmlsZURlc2NyaXB0b3JzKTtcblx0T2JqZWN0LmFzc2lnbihzdWJwcm9jZXNzLCB7cmVhZGFibGUsIHdyaXRhYmxlLCBkdXBsZXh9KTtcblxuXHRjb25zdCBlYXJseUVycm9yID0gbWFrZUVhcmx5RXJyb3Ioe1xuXHRcdGVycm9yLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdG9wdGlvbnMsXG5cdFx0c3RhcnRUaW1lLFxuXHRcdGlzU3luYzogZmFsc2UsXG5cdH0pO1xuXHRjb25zdCBwcm9taXNlID0gaGFuZGxlRHVtbXlQcm9taXNlKGVhcmx5RXJyb3IsIHZlcmJvc2VJbmZvLCBvcHRpb25zKTtcblx0cmV0dXJuIHtzdWJwcm9jZXNzLCBwcm9taXNlfTtcbn07XG5cbmNvbnN0IGNyZWF0ZUR1bW15U3RyZWFtcyA9IChzdWJwcm9jZXNzLCBmaWxlRGVzY3JpcHRvcnMpID0+IHtcblx0Y29uc3Qgc3RkaW4gPSBjcmVhdGVEdW1teVN0cmVhbSgpO1xuXHRjb25zdCBzdGRvdXQgPSBjcmVhdGVEdW1teVN0cmVhbSgpO1xuXHRjb25zdCBzdGRlcnIgPSBjcmVhdGVEdW1teVN0cmVhbSgpO1xuXHRjb25zdCBleHRyYVN0ZGlvID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiBmaWxlRGVzY3JpcHRvcnMubGVuZ3RoIC0gM30sIGNyZWF0ZUR1bW15U3RyZWFtKTtcblx0Y29uc3QgYWxsID0gY3JlYXRlRHVtbXlTdHJlYW0oKTtcblx0Y29uc3Qgc3RkaW8gPSBbc3RkaW4sIHN0ZG91dCwgc3RkZXJyLCAuLi5leHRyYVN0ZGlvXTtcblx0T2JqZWN0LmFzc2lnbihzdWJwcm9jZXNzLCB7XG5cdFx0c3RkaW4sXG5cdFx0c3Rkb3V0LFxuXHRcdHN0ZGVycixcblx0XHRhbGwsXG5cdFx0c3RkaW8sXG5cdH0pO1xufTtcblxuY29uc3QgY3JlYXRlRHVtbXlTdHJlYW0gPSAoKSA9PiB7XG5cdGNvbnN0IHN0cmVhbSA9IG5ldyBQYXNzVGhyb3VnaCgpO1xuXHRzdHJlYW0uZW5kKCk7XG5cdHJldHVybiBzdHJlYW07XG59O1xuXG5jb25zdCByZWFkYWJsZSA9ICgpID0+IG5ldyBSZWFkYWJsZSh7cmVhZCgpIHt9fSk7XG5jb25zdCB3cml0YWJsZSA9ICgpID0+IG5ldyBXcml0YWJsZSh7d3JpdGUoKSB7fX0pO1xuY29uc3QgZHVwbGV4ID0gKCkgPT4gbmV3IER1cGxleCh7cmVhZCgpIHt9LCB3cml0ZSgpIHt9fSk7XG5cbmNvbnN0IGhhbmRsZUR1bW15UHJvbWlzZSA9IGFzeW5jIChlcnJvciwgdmVyYm9zZUluZm8sIG9wdGlvbnMpID0+IGhhbmRsZVJlc3VsdChlcnJvciwgdmVyYm9zZUluZm8sIG9wdGlvbnMpO1xuIiwgImltcG9ydCB7Y3JlYXRlUmVhZFN0cmVhbSwgY3JlYXRlV3JpdGVTdHJlYW19IGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHtCdWZmZXJ9IGZyb20gJ25vZGU6YnVmZmVyJztcbmltcG9ydCB7UmVhZGFibGUsIFdyaXRhYmxlLCBEdXBsZXh9IGZyb20gJ25vZGU6c3RyZWFtJztcbmltcG9ydCB7Z2VuZXJhdG9yVG9TdHJlYW19IGZyb20gJy4uL3RyYW5zZm9ybS9nZW5lcmF0b3IuanMnO1xuaW1wb3J0IHtoYW5kbGVTdGRpb30gZnJvbSAnLi9oYW5kbGUuanMnO1xuaW1wb3J0IHtUWVBFX1RPX01FU1NBR0V9IGZyb20gJy4vdHlwZS5qcyc7XG5cbi8vIEhhbmRsZSBgaW5wdXRgLCBgaW5wdXRGaWxlYCwgYHN0ZGluYCwgYHN0ZG91dGAgYW5kIGBzdGRlcnJgIG9wdGlvbnMsIGJlZm9yZSBzcGF3bmluZywgaW4gYXN5bmMgbW9kZVxuZXhwb3J0IGNvbnN0IGhhbmRsZVN0ZGlvQXN5bmMgPSAob3B0aW9ucywgdmVyYm9zZUluZm8pID0+IGhhbmRsZVN0ZGlvKGFkZFByb3BlcnRpZXNBc3luYywgb3B0aW9ucywgdmVyYm9zZUluZm8sIGZhbHNlKTtcblxuY29uc3QgZm9yYmlkZGVuSWZBc3luYyA9ICh7dHlwZSwgb3B0aW9uTmFtZX0pID0+IHtcblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFxcYCR7b3B0aW9uTmFtZX1cXGAgb3B0aW9uIGNhbm5vdCBiZSAke1RZUEVfVE9fTUVTU0FHRVt0eXBlXX0uYCk7XG59O1xuXG4vLyBDcmVhdGUgc3RyZWFtcyB1c2VkIGludGVybmFsbHkgZm9yIHBpcGluZyB3aGVuIHVzaW5nIHNwZWNpZmljIHZhbHVlcyBmb3IgdGhlIGBzdGQqYCBvcHRpb25zLCBpbiBhc3luYyBtb2RlLlxuLy8gRm9yIGV4YW1wbGUsIGBzdGRvdXQ6IHtmaWxlfWAgY3JlYXRlcyBhIGZpbGUgc3RyZWFtLCB3aGljaCBpcyBwaXBlZCBmcm9tL3RvLlxuY29uc3QgYWRkUHJvcGVydGllcyA9IHtcblx0ZmlsZU51bWJlcjogZm9yYmlkZGVuSWZBc3luYyxcblx0Z2VuZXJhdG9yOiBnZW5lcmF0b3JUb1N0cmVhbSxcblx0YXN5bmNHZW5lcmF0b3I6IGdlbmVyYXRvclRvU3RyZWFtLFxuXHRub2RlU3RyZWFtOiAoe3ZhbHVlfSkgPT4gKHtzdHJlYW06IHZhbHVlfSksXG5cdHdlYlRyYW5zZm9ybSh7dmFsdWU6IHt0cmFuc2Zvcm0sIHdyaXRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVPYmplY3RNb2RlfX0pIHtcblx0XHRjb25zdCBvYmplY3RNb2RlID0gd3JpdGFibGVPYmplY3RNb2RlIHx8IHJlYWRhYmxlT2JqZWN0TW9kZTtcblx0XHRjb25zdCBzdHJlYW0gPSBEdXBsZXguZnJvbVdlYih0cmFuc2Zvcm0sIHtvYmplY3RNb2RlfSk7XG5cdFx0cmV0dXJuIHtzdHJlYW19O1xuXHR9LFxuXHRkdXBsZXg6ICh7dmFsdWU6IHt0cmFuc2Zvcm19fSkgPT4gKHtzdHJlYW06IHRyYW5zZm9ybX0pLFxuXHRuYXRpdmUoKSB7fSxcbn07XG5cbmNvbnN0IGFkZFByb3BlcnRpZXNBc3luYyA9IHtcblx0aW5wdXQ6IHtcblx0XHQuLi5hZGRQcm9wZXJ0aWVzLFxuXHRcdGZpbGVVcmw6ICh7dmFsdWV9KSA9PiAoe3N0cmVhbTogY3JlYXRlUmVhZFN0cmVhbSh2YWx1ZSl9KSxcblx0XHRmaWxlUGF0aDogKHt2YWx1ZToge2ZpbGV9fSkgPT4gKHtzdHJlYW06IGNyZWF0ZVJlYWRTdHJlYW0oZmlsZSl9KSxcblx0XHR3ZWJTdHJlYW06ICh7dmFsdWV9KSA9PiAoe3N0cmVhbTogUmVhZGFibGUuZnJvbVdlYih2YWx1ZSl9KSxcblx0XHRpdGVyYWJsZTogKHt2YWx1ZX0pID0+ICh7c3RyZWFtOiBSZWFkYWJsZS5mcm9tKHZhbHVlKX0pLFxuXHRcdGFzeW5jSXRlcmFibGU6ICh7dmFsdWV9KSA9PiAoe3N0cmVhbTogUmVhZGFibGUuZnJvbSh2YWx1ZSl9KSxcblx0XHRzdHJpbmc6ICh7dmFsdWV9KSA9PiAoe3N0cmVhbTogUmVhZGFibGUuZnJvbSh2YWx1ZSl9KSxcblx0XHR1aW50OEFycmF5OiAoe3ZhbHVlfSkgPT4gKHtzdHJlYW06IFJlYWRhYmxlLmZyb20oQnVmZmVyLmZyb20odmFsdWUpKX0pLFxuXHR9LFxuXHRvdXRwdXQ6IHtcblx0XHQuLi5hZGRQcm9wZXJ0aWVzLFxuXHRcdGZpbGVVcmw6ICh7dmFsdWV9KSA9PiAoe3N0cmVhbTogY3JlYXRlV3JpdGVTdHJlYW0odmFsdWUpfSksXG5cdFx0ZmlsZVBhdGg6ICh7dmFsdWU6IHtmaWxlLCBhcHBlbmR9fSkgPT4gKHtzdHJlYW06IGNyZWF0ZVdyaXRlU3RyZWFtKGZpbGUsIGFwcGVuZCA/IHtmbGFnczogJ2EnfSA6IHt9KX0pLFxuXHRcdHdlYlN0cmVhbTogKHt2YWx1ZX0pID0+ICh7c3RyZWFtOiBXcml0YWJsZS5mcm9tV2ViKHZhbHVlKX0pLFxuXHRcdGl0ZXJhYmxlOiBmb3JiaWRkZW5JZkFzeW5jLFxuXHRcdGFzeW5jSXRlcmFibGU6IGZvcmJpZGRlbklmQXN5bmMsXG5cdFx0c3RyaW5nOiBmb3JiaWRkZW5JZkFzeW5jLFxuXHRcdHVpbnQ4QXJyYXk6IGZvcmJpZGRlbklmQXN5bmMsXG5cdH0sXG59O1xuIiwgImltcG9ydCB7b24sIG9uY2V9IGZyb20gJ25vZGU6ZXZlbnRzJztcbmltcG9ydCB7UGFzc1Rocm91Z2ggYXMgUGFzc1Rocm91Z2hTdHJlYW0sIGdldERlZmF1bHRIaWdoV2F0ZXJNYXJrfSBmcm9tICdub2RlOnN0cmVhbSc7XG5pbXBvcnQge2ZpbmlzaGVkfSBmcm9tICdub2RlOnN0cmVhbS9wcm9taXNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlU3RyZWFtcyhzdHJlYW1zKSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShzdHJlYW1zKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGFuIGFycmF5LCBnb3QgXFxgJHt0eXBlb2Ygc3RyZWFtc31cXGAuYCk7XG5cdH1cblxuXHRmb3IgKGNvbnN0IHN0cmVhbSBvZiBzdHJlYW1zKSB7XG5cdFx0dmFsaWRhdGVTdHJlYW0oc3RyZWFtKTtcblx0fVxuXG5cdGNvbnN0IG9iamVjdE1vZGUgPSBzdHJlYW1zLnNvbWUoKHtyZWFkYWJsZU9iamVjdE1vZGV9KSA9PiByZWFkYWJsZU9iamVjdE1vZGUpO1xuXHRjb25zdCBoaWdoV2F0ZXJNYXJrID0gZ2V0SGlnaFdhdGVyTWFyayhzdHJlYW1zLCBvYmplY3RNb2RlKTtcblx0Y29uc3QgcGFzc1Rocm91Z2hTdHJlYW0gPSBuZXcgTWVyZ2VkU3RyZWFtKHtcblx0XHRvYmplY3RNb2RlLFxuXHRcdHdyaXRhYmxlSGlnaFdhdGVyTWFyazogaGlnaFdhdGVyTWFyayxcblx0XHRyZWFkYWJsZUhpZ2hXYXRlck1hcms6IGhpZ2hXYXRlck1hcmssXG5cdH0pO1xuXG5cdGZvciAoY29uc3Qgc3RyZWFtIG9mIHN0cmVhbXMpIHtcblx0XHRwYXNzVGhyb3VnaFN0cmVhbS5hZGQoc3RyZWFtKTtcblx0fVxuXG5cdHJldHVybiBwYXNzVGhyb3VnaFN0cmVhbTtcbn1cblxuY29uc3QgZ2V0SGlnaFdhdGVyTWFyayA9IChzdHJlYW1zLCBvYmplY3RNb2RlKSA9PiB7XG5cdGlmIChzdHJlYW1zLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBnZXREZWZhdWx0SGlnaFdhdGVyTWFyayhvYmplY3RNb2RlKTtcblx0fVxuXG5cdGNvbnN0IGhpZ2hXYXRlck1hcmtzID0gc3RyZWFtc1xuXHRcdC5maWx0ZXIoKHtyZWFkYWJsZU9iamVjdE1vZGV9KSA9PiByZWFkYWJsZU9iamVjdE1vZGUgPT09IG9iamVjdE1vZGUpXG5cdFx0Lm1hcCgoe3JlYWRhYmxlSGlnaFdhdGVyTWFya30pID0+IHJlYWRhYmxlSGlnaFdhdGVyTWFyayk7XG5cdHJldHVybiBNYXRoLm1heCguLi5oaWdoV2F0ZXJNYXJrcyk7XG59O1xuXG5jbGFzcyBNZXJnZWRTdHJlYW0gZXh0ZW5kcyBQYXNzVGhyb3VnaFN0cmVhbSB7XG5cdCNzdHJlYW1zID0gbmV3IFNldChbXSk7XG5cdCNlbmRlZCA9IG5ldyBTZXQoW10pO1xuXHQjYWJvcnRlZCA9IG5ldyBTZXQoW10pO1xuXHQjb25GaW5pc2hlZDtcblx0I3VucGlwZUV2ZW50ID0gU3ltYm9sKCd1bnBpcGUnKTtcblx0I3N0cmVhbVByb21pc2VzID0gbmV3IFdlYWtNYXAoKTtcblxuXHRhZGQoc3RyZWFtKSB7XG5cdFx0dmFsaWRhdGVTdHJlYW0oc3RyZWFtKTtcblxuXHRcdGlmICh0aGlzLiNzdHJlYW1zLmhhcyhzdHJlYW0pKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy4jc3RyZWFtcy5hZGQoc3RyZWFtKTtcblxuXHRcdHRoaXMuI29uRmluaXNoZWQgPz89IG9uTWVyZ2VkU3RyZWFtRmluaXNoZWQodGhpcywgdGhpcy4jc3RyZWFtcywgdGhpcy4jdW5waXBlRXZlbnQpO1xuXHRcdGNvbnN0IHN0cmVhbVByb21pc2UgPSBlbmRXaGVuU3RyZWFtc0RvbmUoe1xuXHRcdFx0cGFzc1Rocm91Z2hTdHJlYW06IHRoaXMsXG5cdFx0XHRzdHJlYW0sXG5cdFx0XHRzdHJlYW1zOiB0aGlzLiNzdHJlYW1zLFxuXHRcdFx0ZW5kZWQ6IHRoaXMuI2VuZGVkLFxuXHRcdFx0YWJvcnRlZDogdGhpcy4jYWJvcnRlZCxcblx0XHRcdG9uRmluaXNoZWQ6IHRoaXMuI29uRmluaXNoZWQsXG5cdFx0XHR1bnBpcGVFdmVudDogdGhpcy4jdW5waXBlRXZlbnQsXG5cdFx0fSk7XG5cdFx0dGhpcy4jc3RyZWFtUHJvbWlzZXMuc2V0KHN0cmVhbSwgc3RyZWFtUHJvbWlzZSk7XG5cblx0XHRzdHJlYW0ucGlwZSh0aGlzLCB7ZW5kOiBmYWxzZX0pO1xuXHR9XG5cblx0YXN5bmMgcmVtb3ZlKHN0cmVhbSkge1xuXHRcdHZhbGlkYXRlU3RyZWFtKHN0cmVhbSk7XG5cblx0XHRpZiAoIXRoaXMuI3N0cmVhbXMuaGFzKHN0cmVhbSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBzdHJlYW1Qcm9taXNlID0gdGhpcy4jc3RyZWFtUHJvbWlzZXMuZ2V0KHN0cmVhbSk7XG5cdFx0aWYgKHN0cmVhbVByb21pc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuI3N0cmVhbVByb21pc2VzLmRlbGV0ZShzdHJlYW0pO1xuXG5cdFx0c3RyZWFtLnVucGlwZSh0aGlzKTtcblx0XHRhd2FpdCBzdHJlYW1Qcm9taXNlO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmNvbnN0IG9uTWVyZ2VkU3RyZWFtRmluaXNoZWQgPSBhc3luYyAocGFzc1Rocm91Z2hTdHJlYW0sIHN0cmVhbXMsIHVucGlwZUV2ZW50KSA9PiB7XG5cdHVwZGF0ZU1heExpc3RlbmVycyhwYXNzVGhyb3VnaFN0cmVhbSwgUEFTU1RIUk9VR0hfTElTVEVORVJTX0NPVU5UKTtcblx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IFByb21pc2UucmFjZShbXG5cdFx0XHRvbk1lcmdlZFN0cmVhbUVuZChwYXNzVGhyb3VnaFN0cmVhbSwgY29udHJvbGxlciksXG5cdFx0XHRvbklucHV0U3RyZWFtc1VucGlwZShwYXNzVGhyb3VnaFN0cmVhbSwgc3RyZWFtcywgdW5waXBlRXZlbnQsIGNvbnRyb2xsZXIpLFxuXHRcdF0pO1xuXHR9IGZpbmFsbHkge1xuXHRcdGNvbnRyb2xsZXIuYWJvcnQoKTtcblx0XHR1cGRhdGVNYXhMaXN0ZW5lcnMocGFzc1Rocm91Z2hTdHJlYW0sIC1QQVNTVEhST1VHSF9MSVNURU5FUlNfQ09VTlQpO1xuXHR9XG59O1xuXG5jb25zdCBvbk1lcmdlZFN0cmVhbUVuZCA9IGFzeW5jIChwYXNzVGhyb3VnaFN0cmVhbSwge3NpZ25hbH0pID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBmaW5pc2hlZChwYXNzVGhyb3VnaFN0cmVhbSwge3NpZ25hbCwgY2xlYW51cDogdHJ1ZX0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGVycm9yT3JBYm9ydFN0cmVhbShwYXNzVGhyb3VnaFN0cmVhbSwgZXJyb3IpO1xuXHRcdHRocm93IGVycm9yO1xuXHR9XG59O1xuXG5jb25zdCBvbklucHV0U3RyZWFtc1VucGlwZSA9IGFzeW5jIChwYXNzVGhyb3VnaFN0cmVhbSwgc3RyZWFtcywgdW5waXBlRXZlbnQsIHtzaWduYWx9KSA9PiB7XG5cdGZvciBhd2FpdCAoY29uc3QgW3VucGlwZWRTdHJlYW1dIG9mIG9uKHBhc3NUaHJvdWdoU3RyZWFtLCAndW5waXBlJywge3NpZ25hbH0pKSB7XG5cdFx0aWYgKHN0cmVhbXMuaGFzKHVucGlwZWRTdHJlYW0pKSB7XG5cdFx0XHR1bnBpcGVkU3RyZWFtLmVtaXQodW5waXBlRXZlbnQpO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgdmFsaWRhdGVTdHJlYW0gPSBzdHJlYW0gPT4ge1xuXHRpZiAodHlwZW9mIHN0cmVhbT8ucGlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgcmVhZGFibGUgc3RyZWFtLCBnb3Q6IFxcYCR7dHlwZW9mIHN0cmVhbX1cXGAuYCk7XG5cdH1cbn07XG5cbmNvbnN0IGVuZFdoZW5TdHJlYW1zRG9uZSA9IGFzeW5jICh7cGFzc1Rocm91Z2hTdHJlYW0sIHN0cmVhbSwgc3RyZWFtcywgZW5kZWQsIGFib3J0ZWQsIG9uRmluaXNoZWQsIHVucGlwZUV2ZW50fSkgPT4ge1xuXHR1cGRhdGVNYXhMaXN0ZW5lcnMocGFzc1Rocm91Z2hTdHJlYW0sIFBBU1NUSFJPVUdIX0xJU1RFTkVSU19QRVJfU1RSRUFNKTtcblx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IFByb21pc2UucmFjZShbXG5cdFx0XHRhZnRlck1lcmdlZFN0cmVhbUZpbmlzaGVkKG9uRmluaXNoZWQsIHN0cmVhbSwgY29udHJvbGxlciksXG5cdFx0XHRvbklucHV0U3RyZWFtRW5kKHtcblx0XHRcdFx0cGFzc1Rocm91Z2hTdHJlYW0sXG5cdFx0XHRcdHN0cmVhbSxcblx0XHRcdFx0c3RyZWFtcyxcblx0XHRcdFx0ZW5kZWQsXG5cdFx0XHRcdGFib3J0ZWQsXG5cdFx0XHRcdGNvbnRyb2xsZXIsXG5cdFx0XHR9KSxcblx0XHRcdG9uSW5wdXRTdHJlYW1VbnBpcGUoe1xuXHRcdFx0XHRzdHJlYW0sXG5cdFx0XHRcdHN0cmVhbXMsXG5cdFx0XHRcdGVuZGVkLFxuXHRcdFx0XHRhYm9ydGVkLFxuXHRcdFx0XHR1bnBpcGVFdmVudCxcblx0XHRcdFx0Y29udHJvbGxlcixcblx0XHRcdH0pLFxuXHRcdF0pO1xuXHR9IGZpbmFsbHkge1xuXHRcdGNvbnRyb2xsZXIuYWJvcnQoKTtcblx0XHR1cGRhdGVNYXhMaXN0ZW5lcnMocGFzc1Rocm91Z2hTdHJlYW0sIC1QQVNTVEhST1VHSF9MSVNURU5FUlNfUEVSX1NUUkVBTSk7XG5cdH1cblxuXHRpZiAoc3RyZWFtcy5zaXplID4gMCAmJiBzdHJlYW1zLnNpemUgPT09IGVuZGVkLnNpemUgKyBhYm9ydGVkLnNpemUpIHtcblx0XHRpZiAoZW5kZWQuc2l6ZSA9PT0gMCAmJiBhYm9ydGVkLnNpemUgPiAwKSB7XG5cdFx0XHRhYm9ydFN0cmVhbShwYXNzVGhyb3VnaFN0cmVhbSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVuZFN0cmVhbShwYXNzVGhyb3VnaFN0cmVhbSk7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBhZnRlck1lcmdlZFN0cmVhbUZpbmlzaGVkID0gYXN5bmMgKG9uRmluaXNoZWQsIHN0cmVhbSwge3NpZ25hbH0pID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBvbkZpbmlzaGVkO1xuXHRcdGlmICghc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdGFib3J0U3RyZWFtKHN0cmVhbSk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmICghc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdGVycm9yT3JBYm9ydFN0cmVhbShzdHJlYW0sIGVycm9yKTtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IG9uSW5wdXRTdHJlYW1FbmQgPSBhc3luYyAoe3Bhc3NUaHJvdWdoU3RyZWFtLCBzdHJlYW0sIHN0cmVhbXMsIGVuZGVkLCBhYm9ydGVkLCBjb250cm9sbGVyOiB7c2lnbmFsfX0pID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBmaW5pc2hlZChzdHJlYW0sIHtcblx0XHRcdHNpZ25hbCxcblx0XHRcdGNsZWFudXA6IHRydWUsXG5cdFx0XHRyZWFkYWJsZTogdHJ1ZSxcblx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcblx0XHR9KTtcblx0XHRpZiAoc3RyZWFtcy5oYXMoc3RyZWFtKSkge1xuXHRcdFx0ZW5kZWQuYWRkKHN0cmVhbSk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChzaWduYWwuYWJvcnRlZCB8fCAhc3RyZWFtcy5oYXMoc3RyZWFtKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChpc0Fib3J0RXJyb3IoZXJyb3IpKSB7XG5cdFx0XHRhYm9ydGVkLmFkZChzdHJlYW0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlcnJvclN0cmVhbShwYXNzVGhyb3VnaFN0cmVhbSwgZXJyb3IpO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgb25JbnB1dFN0cmVhbVVucGlwZSA9IGFzeW5jICh7c3RyZWFtLCBzdHJlYW1zLCBlbmRlZCwgYWJvcnRlZCwgdW5waXBlRXZlbnQsIGNvbnRyb2xsZXI6IHtzaWduYWx9fSkgPT4ge1xuXHRhd2FpdCBvbmNlKHN0cmVhbSwgdW5waXBlRXZlbnQsIHtzaWduYWx9KTtcblxuXHRpZiAoIXN0cmVhbS5yZWFkYWJsZSkge1xuXHRcdHJldHVybiBvbmNlKHNpZ25hbCwgJ2Fib3J0Jywge3NpZ25hbH0pO1xuXHR9XG5cblx0c3RyZWFtcy5kZWxldGUoc3RyZWFtKTtcblx0ZW5kZWQuZGVsZXRlKHN0cmVhbSk7XG5cdGFib3J0ZWQuZGVsZXRlKHN0cmVhbSk7XG59O1xuXG5jb25zdCBlbmRTdHJlYW0gPSBzdHJlYW0gPT4ge1xuXHRpZiAoc3RyZWFtLndyaXRhYmxlKSB7XG5cdFx0c3RyZWFtLmVuZCgpO1xuXHR9XG59O1xuXG5jb25zdCBlcnJvck9yQWJvcnRTdHJlYW0gPSAoc3RyZWFtLCBlcnJvcikgPT4ge1xuXHRpZiAoaXNBYm9ydEVycm9yKGVycm9yKSkge1xuXHRcdGFib3J0U3RyZWFtKHN0cmVhbSk7XG5cdH0gZWxzZSB7XG5cdFx0ZXJyb3JTdHJlYW0oc3RyZWFtLCBlcnJvcik7XG5cdH1cbn07XG5cbi8vIFRoaXMgaXMgdGhlIGVycm9yIHRocm93biBieSBgZmluaXNoZWQoKWAgb24gYHN0cmVhbS5kZXN0cm95KClgXG5jb25zdCBpc0Fib3J0RXJyb3IgPSBlcnJvciA9PiBlcnJvcj8uY29kZSA9PT0gJ0VSUl9TVFJFQU1fUFJFTUFUVVJFX0NMT1NFJztcblxuY29uc3QgYWJvcnRTdHJlYW0gPSBzdHJlYW0gPT4ge1xuXHRpZiAoc3RyZWFtLnJlYWRhYmxlIHx8IHN0cmVhbS53cml0YWJsZSkge1xuXHRcdHN0cmVhbS5kZXN0cm95KCk7XG5cdH1cbn07XG5cbi8vIGBzdHJlYW0uZGVzdHJveShlcnJvcilgIGNyYXNoZXMgdGhlIHByb2Nlc3Mgd2l0aCBgdW5jYXVnaHRFeGNlcHRpb25gIGlmIG5vIGBlcnJvcmAgZXZlbnQgbGlzdGVuZXIgZXhpc3RzIG9uIGBzdHJlYW1gLlxuLy8gV2UgdGFrZSBjYXJlIG9mIGVycm9yIGhhbmRsaW5nIG9uIHVzZXIgYmVoYWxmLCBzbyB3ZSBkbyBub3Qgd2FudCB0aGlzIHRvIGhhcHBlbi5cbmNvbnN0IGVycm9yU3RyZWFtID0gKHN0cmVhbSwgZXJyb3IpID0+IHtcblx0aWYgKCFzdHJlYW0uZGVzdHJveWVkKSB7XG5cdFx0c3RyZWFtLm9uY2UoJ2Vycm9yJywgbm9vcCk7XG5cdFx0c3RyZWFtLmRlc3Ryb3koZXJyb3IpO1xuXHR9XG59O1xuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbmNvbnN0IHVwZGF0ZU1heExpc3RlbmVycyA9IChwYXNzVGhyb3VnaFN0cmVhbSwgaW5jcmVtZW50KSA9PiB7XG5cdGNvbnN0IG1heExpc3RlbmVycyA9IHBhc3NUaHJvdWdoU3RyZWFtLmdldE1heExpc3RlbmVycygpO1xuXHRpZiAobWF4TGlzdGVuZXJzICE9PSAwICYmIG1heExpc3RlbmVycyAhPT0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB7XG5cdFx0cGFzc1Rocm91Z2hTdHJlYW0uc2V0TWF4TGlzdGVuZXJzKG1heExpc3RlbmVycyArIGluY3JlbWVudCk7XG5cdH1cbn07XG5cbi8vIE51bWJlciBvZiB0aW1lcyBgcGFzc1Rocm91Z2hTdHJlYW0ub24oKWAgaXMgY2FsbGVkIHJlZ2FyZGxlc3Mgb2Ygc3RyZWFtczpcbi8vICAtIG9uY2UgZHVlIHRvIGBmaW5pc2hlZChwYXNzVGhyb3VnaFN0cmVhbSlgXG4vLyAgLSBvbmNlIGR1ZSB0byBgb24ocGFzc1Rocm91Z2hTdHJlYW0pYFxuY29uc3QgUEFTU1RIUk9VR0hfTElTVEVORVJTX0NPVU5UID0gMjtcblxuLy8gTnVtYmVyIG9mIHRpbWVzIGBwYXNzVGhyb3VnaFN0cmVhbS5vbigpYCBpcyBjYWxsZWQgcGVyIHN0cmVhbTpcbi8vICAtIG9uY2UgZHVlIHRvIGBzdHJlYW0ucGlwZShwYXNzVGhyb3VnaFN0cmVhbSlgXG5jb25zdCBQQVNTVEhST1VHSF9MSVNURU5FUlNfUEVSX1NUUkVBTSA9IDE7XG4iLCAiaW1wb3J0IHtmaW5pc2hlZH0gZnJvbSAnbm9kZTpzdHJlYW0vcHJvbWlzZXMnO1xuaW1wb3J0IHtpc1N0YW5kYXJkU3RyZWFtfSBmcm9tICcuLi91dGlscy9zdGFuZGFyZC1zdHJlYW0uanMnO1xuXG4vLyBTaW1pbGFyIHRvIGBTdHJlYW0ucGlwZWxpbmUoc291cmNlLCBkZXN0aW5hdGlvbilgLCBidXQgZG9lcyBub3QgZGVzdHJveSBzdGFuZGFyZCBzdHJlYW1zXG5leHBvcnQgY29uc3QgcGlwZVN0cmVhbXMgPSAoc291cmNlLCBkZXN0aW5hdGlvbikgPT4ge1xuXHRzb3VyY2UucGlwZShkZXN0aW5hdGlvbik7XG5cdG9uU291cmNlRmluaXNoKHNvdXJjZSwgZGVzdGluYXRpb24pO1xuXHRvbkRlc3RpbmF0aW9uRmluaXNoKHNvdXJjZSwgZGVzdGluYXRpb24pO1xufTtcblxuLy8gYHNvdXJjZS5waXBlKGRlc3RpbmF0aW9uKWAgbWFrZXMgYGRlc3RpbmF0aW9uYCBlbmQgd2hlbiBgc291cmNlYCBlbmRzLlxuLy8gQnV0IGl0IGRvZXMgbm90IHByb3BhZ2F0ZSBhYm9ydHMgb3IgZXJyb3JzLiBUaGlzIGZ1bmN0aW9uIGRvZXMgaXQuXG5jb25zdCBvblNvdXJjZUZpbmlzaCA9IGFzeW5jIChzb3VyY2UsIGRlc3RpbmF0aW9uKSA9PiB7XG5cdGlmIChpc1N0YW5kYXJkU3RyZWFtKHNvdXJjZSkgfHwgaXNTdGFuZGFyZFN0cmVhbShkZXN0aW5hdGlvbikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGF3YWl0IGZpbmlzaGVkKHNvdXJjZSwge2NsZWFudXA6IHRydWUsIHJlYWRhYmxlOiB0cnVlLCB3cml0YWJsZTogZmFsc2V9KTtcblx0fSBjYXRjaCB7fVxuXG5cdGVuZERlc3RpbmF0aW9uU3RyZWFtKGRlc3RpbmF0aW9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmREZXN0aW5hdGlvblN0cmVhbSA9IGRlc3RpbmF0aW9uID0+IHtcblx0aWYgKGRlc3RpbmF0aW9uLndyaXRhYmxlKSB7XG5cdFx0ZGVzdGluYXRpb24uZW5kKCk7XG5cdH1cbn07XG5cbi8vIFdlIGRvIHRoZSBzYW1lIHRoaW5nIGluIHRoZSBvdGhlciBkaXJlY3Rpb24gYXMgd2VsbC5cbmNvbnN0IG9uRGVzdGluYXRpb25GaW5pc2ggPSBhc3luYyAoc291cmNlLCBkZXN0aW5hdGlvbikgPT4ge1xuXHRpZiAoaXNTdGFuZGFyZFN0cmVhbShzb3VyY2UpIHx8IGlzU3RhbmRhcmRTdHJlYW0oZGVzdGluYXRpb24pKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBmaW5pc2hlZChkZXN0aW5hdGlvbiwge2NsZWFudXA6IHRydWUsIHJlYWRhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWV9KTtcblx0fSBjYXRjaCB7fVxuXG5cdGFib3J0U291cmNlU3RyZWFtKHNvdXJjZSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWJvcnRTb3VyY2VTdHJlYW0gPSBzb3VyY2UgPT4ge1xuXHRpZiAoc291cmNlLnJlYWRhYmxlKSB7XG5cdFx0c291cmNlLmRlc3Ryb3koKTtcblx0fVxufTtcbiIsICJpbXBvcnQgbWVyZ2VTdHJlYW1zIGZyb20gJ0BzaW5kcmVzb3JodXMvbWVyZ2Utc3RyZWFtcyc7XG5pbXBvcnQge2lzU3RhbmRhcmRTdHJlYW19IGZyb20gJy4uL3V0aWxzL3N0YW5kYXJkLXN0cmVhbS5qcyc7XG5pbXBvcnQge2luY3JlbWVudE1heExpc3RlbmVyc30gZnJvbSAnLi4vdXRpbHMvbWF4LWxpc3RlbmVycy5qcyc7XG5pbXBvcnQge1RSQU5TRk9STV9UWVBFU30gZnJvbSAnLi4vc3RkaW8vdHlwZS5qcyc7XG5pbXBvcnQge3BpcGVTdHJlYW1zfSBmcm9tICcuL3BpcGVsaW5lLmpzJztcblxuLy8gSGFuZGxlIGBpbnB1dGAsIGBpbnB1dEZpbGVgLCBgc3RkaW5gLCBgc3Rkb3V0YCBhbmQgYHN0ZGVycmAgb3B0aW9ucywgYWZ0ZXIgc3Bhd25pbmcsIGluIGFzeW5jIG1vZGVcbi8vIFdoZW4gbXVsdGlwbGUgaW5wdXQgc3RyZWFtcyBhcmUgdXNlZCwgd2UgbWVyZ2UgdGhlbSB0byBlbnN1cmUgdGhlIG91dHB1dCBzdHJlYW0gZW5kcyBvbmx5IG9uY2UgZWFjaCBpbnB1dCBzdHJlYW0gaGFzIGVuZGVkXG5leHBvcnQgY29uc3QgcGlwZU91dHB1dEFzeW5jID0gKHN1YnByb2Nlc3MsIGZpbGVEZXNjcmlwdG9ycywgY29udHJvbGxlcikgPT4ge1xuXHRjb25zdCBwaXBlR3JvdXBzID0gbmV3IE1hcCgpO1xuXG5cdGZvciAoY29uc3QgW2ZkTnVtYmVyLCB7c3RkaW9JdGVtcywgZGlyZWN0aW9ufV0gb2YgT2JqZWN0LmVudHJpZXMoZmlsZURlc2NyaXB0b3JzKSkge1xuXHRcdGZvciAoY29uc3Qge3N0cmVhbX0gb2Ygc3RkaW9JdGVtcy5maWx0ZXIoKHt0eXBlfSkgPT4gVFJBTlNGT1JNX1RZUEVTLmhhcyh0eXBlKSkpIHtcblx0XHRcdHBpcGVUcmFuc2Zvcm0oc3VicHJvY2Vzcywgc3RyZWFtLCBkaXJlY3Rpb24sIGZkTnVtYmVyKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IHtzdHJlYW19IG9mIHN0ZGlvSXRlbXMuZmlsdGVyKCh7dHlwZX0pID0+ICFUUkFOU0ZPUk1fVFlQRVMuaGFzKHR5cGUpKSkge1xuXHRcdFx0cGlwZVN0ZGlvSXRlbSh7XG5cdFx0XHRcdHN1YnByb2Nlc3MsXG5cdFx0XHRcdHN0cmVhbSxcblx0XHRcdFx0ZGlyZWN0aW9uLFxuXHRcdFx0XHRmZE51bWJlcixcblx0XHRcdFx0cGlwZUdyb3Vwcyxcblx0XHRcdFx0Y29udHJvbGxlcixcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGZvciAoY29uc3QgW291dHB1dFN0cmVhbSwgaW5wdXRTdHJlYW1zXSBvZiBwaXBlR3JvdXBzLmVudHJpZXMoKSkge1xuXHRcdGNvbnN0IGlucHV0U3RyZWFtID0gaW5wdXRTdHJlYW1zLmxlbmd0aCA9PT0gMSA/IGlucHV0U3RyZWFtc1swXSA6IG1lcmdlU3RyZWFtcyhpbnB1dFN0cmVhbXMpO1xuXHRcdHBpcGVTdHJlYW1zKGlucHV0U3RyZWFtLCBvdXRwdXRTdHJlYW0pO1xuXHR9XG59O1xuXG4vLyBXaGVuIHVzaW5nIHRyYW5zZm9ybXMsIGBzdWJwcm9jZXNzLnN0ZGlufHN0ZG91dHxzdGRlcnJ8c3RkaW9gIGlzIGRpcmVjdGx5IG11dGF0ZWRcbmNvbnN0IHBpcGVUcmFuc2Zvcm0gPSAoc3VicHJvY2Vzcywgc3RyZWFtLCBkaXJlY3Rpb24sIGZkTnVtYmVyKSA9PiB7XG5cdGlmIChkaXJlY3Rpb24gPT09ICdvdXRwdXQnKSB7XG5cdFx0cGlwZVN0cmVhbXMoc3VicHJvY2Vzcy5zdGRpb1tmZE51bWJlcl0sIHN0cmVhbSk7XG5cdH0gZWxzZSB7XG5cdFx0cGlwZVN0cmVhbXMoc3RyZWFtLCBzdWJwcm9jZXNzLnN0ZGlvW2ZkTnVtYmVyXSk7XG5cdH1cblxuXHRjb25zdCBzdHJlYW1Qcm9wZXJ0eSA9IFNVQlBST0NFU1NfU1RSRUFNX1BST1BFUlRJRVNbZmROdW1iZXJdO1xuXHRpZiAoc3RyZWFtUHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHN1YnByb2Nlc3Nbc3RyZWFtUHJvcGVydHldID0gc3RyZWFtO1xuXHR9XG5cblx0c3VicHJvY2Vzcy5zdGRpb1tmZE51bWJlcl0gPSBzdHJlYW07XG59O1xuXG5jb25zdCBTVUJQUk9DRVNTX1NUUkVBTV9QUk9QRVJUSUVTID0gWydzdGRpbicsICdzdGRvdXQnLCAnc3RkZXJyJ107XG5cbi8vIE1vc3QgYHN0ZCpgIG9wdGlvbiB2YWx1ZXMgaW52b2x2ZSBwaXBpbmcgYHN1YnByb2Nlc3Muc3RkKmAgdG8gYSBzdHJlYW0uXG4vLyBUaGUgc3RyZWFtIGlzIGVpdGhlciBwYXNzZWQgYnkgdGhlIHVzZXIgb3IgY3JlYXRlZCBpbnRlcm5hbGx5LlxuY29uc3QgcGlwZVN0ZGlvSXRlbSA9ICh7c3VicHJvY2Vzcywgc3RyZWFtLCBkaXJlY3Rpb24sIGZkTnVtYmVyLCBwaXBlR3JvdXBzLCBjb250cm9sbGVyfSkgPT4ge1xuXHRpZiAoc3RyZWFtID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRzZXRTdGFuZGFyZFN0cmVhbU1heExpc3RlbmVycyhzdHJlYW0sIGNvbnRyb2xsZXIpO1xuXG5cdGNvbnN0IFtpbnB1dFN0cmVhbSwgb3V0cHV0U3RyZWFtXSA9IGRpcmVjdGlvbiA9PT0gJ291dHB1dCdcblx0XHQ/IFtzdHJlYW0sIHN1YnByb2Nlc3Muc3RkaW9bZmROdW1iZXJdXVxuXHRcdDogW3N1YnByb2Nlc3Muc3RkaW9bZmROdW1iZXJdLCBzdHJlYW1dO1xuXHRjb25zdCBvdXRwdXRTdHJlYW1zID0gcGlwZUdyb3Vwcy5nZXQoaW5wdXRTdHJlYW0pID8/IFtdO1xuXHRwaXBlR3JvdXBzLnNldChpbnB1dFN0cmVhbSwgWy4uLm91dHB1dFN0cmVhbXMsIG91dHB1dFN0cmVhbV0pO1xufTtcblxuLy8gTXVsdGlwbGUgc3VicHJvY2Vzc2VzIG1pZ2h0IGJlIHBpcGluZyBmcm9tL3RvIGBwcm9jZXNzLnN0ZCpgIGF0IHRoZSBzYW1lIHRpbWUuXG4vLyBUaGlzIGlzIG5vdCBuZWNlc3NhcmlseSBhbiBlcnJvciBhbmQgc2hvdWxkIG5vdCBwcmludCBhIGBtYXhMaXN0ZW5lcnNgIHdhcm5pbmcuXG5jb25zdCBzZXRTdGFuZGFyZFN0cmVhbU1heExpc3RlbmVycyA9IChzdHJlYW0sIHtzaWduYWx9KSA9PiB7XG5cdGlmIChpc1N0YW5kYXJkU3RyZWFtKHN0cmVhbSkpIHtcblx0XHRpbmNyZW1lbnRNYXhMaXN0ZW5lcnMoc3RyZWFtLCBNQVhfTElTVEVORVJTX0lOQ1JFTUVOVCwgc2lnbmFsKTtcblx0fVxufTtcblxuLy8gYHNvdXJjZS5waXBlKGRlc3RpbmF0aW9uKWAgYWRkcyBhdCBtb3N0IDEgbGlzdGVuZXIgZm9yIGVhY2ggZXZlbnQuXG4vLyBJZiBgc3RkaW5gIG9wdGlvbiBpcyBhbiBhcnJheSwgdGhlIHZhbHVlcyBtaWdodCBiZSBjb21iaW5lZCB3aXRoIGBtZXJnZS1zdHJlYW1zYC5cbi8vIFRoYXQgbGlicmFyeSBhbHNvIGxpc3RlbnMgZm9yIGBzb3VyY2VgIGVuZCwgd2hpY2ggYWRkcyAxIG1vcmUgbGlzdGVuZXIuXG5jb25zdCBNQVhfTElTVEVORVJTX0lOQ1JFTUVOVCA9IDI7XG4iLCAiLyoqXG4gKiBUaGlzIGlzIG5vdCB0aGUgc2V0IG9mIGFsbCBwb3NzaWJsZSBzaWduYWxzLlxuICpcbiAqIEl0IElTLCBob3dldmVyLCB0aGUgc2V0IG9mIGFsbCBzaWduYWxzIHRoYXQgdHJpZ2dlclxuICogYW4gZXhpdCBvbiBlaXRoZXIgTGludXggb3IgQlNEIHN5c3RlbXMuICBMaW51eCBpcyBhXG4gKiBzdXBlcnNldCBvZiB0aGUgc2lnbmFsIG5hbWVzIHN1cHBvcnRlZCBvbiBCU0QsIGFuZFxuICogdGhlIHVua25vd24gc2lnbmFscyBqdXN0IGZhaWwgdG8gcmVnaXN0ZXIsIHNvIHdlIGNhblxuICogY2F0Y2ggdGhhdCBlYXNpbHkgZW5vdWdoLlxuICpcbiAqIFdpbmRvd3Mgc2lnbmFscyBhcmUgYSBkaWZmZXJlbnQgc2V0LCBzaW5jZSB0aGVyZSBhcmVcbiAqIHNpZ25hbHMgdGhhdCB0ZXJtaW5hdGUgV2luZG93cyBwcm9jZXNzZXMsIGJ1dCBkb24ndFxuICogdGVybWluYXRlIChvciBkb24ndCBldmVuIGV4aXN0KSBvbiBQb3NpeCBzeXN0ZW1zLlxuICpcbiAqIERvbid0IGJvdGhlciB3aXRoIFNJR0tJTEwuICBJdCdzIHVuY2F0Y2hhYmxlLCB3aGljaFxuICogbWVhbnMgdGhhdCB3ZSBjYW4ndCBmaXJlIGFueSBjYWxsYmFja3MgYW55d2F5LlxuICpcbiAqIElmIGEgdXNlciBkb2VzIGhhcHBlbiB0byByZWdpc3RlciBhIGhhbmRsZXIgb24gYSBub24tXG4gKiBmYXRhbCBzaWduYWwgbGlrZSBTSUdXSU5DSCBvciBzb21ldGhpbmcsIGFuZCB0aGVuXG4gKiBleGl0LCBpdCdsbCBlbmQgdXAgZmlyaW5nIGBwcm9jZXNzLmVtaXQoJ2V4aXQnKWAsIHNvXG4gKiB0aGUgaGFuZGxlciB3aWxsIGJlIGZpcmVkIGFueXdheS5cbiAqXG4gKiBTSUdCVVMsIFNJR0ZQRSwgU0lHU0VHViBhbmQgU0lHSUxMLCB3aGVuIG5vdCByYWlzZWRcbiAqIGFydGlmaWNpYWxseSwgaW5oZXJlbnRseSBsZWF2ZSB0aGUgcHJvY2VzcyBpbiBhXG4gKiBzdGF0ZSBmcm9tIHdoaWNoIGl0IGlzIG5vdCBzYWZlIHRvIHRyeSBhbmQgZW50ZXIgSlNcbiAqIGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNpZ25hbHM6IE5vZGVKUy5TaWduYWxzW10gPSBbXVxuc2lnbmFscy5wdXNoKCdTSUdIVVAnLCAnU0lHSU5UJywgJ1NJR1RFUk0nKVxuXG5pZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ3dpbjMyJykge1xuICBzaWduYWxzLnB1c2goXG4gICAgJ1NJR0FMUk0nLFxuICAgICdTSUdBQlJUJyxcbiAgICAnU0lHVlRBTFJNJyxcbiAgICAnU0lHWENQVScsXG4gICAgJ1NJR1hGU1onLFxuICAgICdTSUdVU1IyJyxcbiAgICAnU0lHVFJBUCcsXG4gICAgJ1NJR1NZUycsXG4gICAgJ1NJR1FVSVQnLFxuICAgICdTSUdJT1QnXG4gICAgLy8gc2hvdWxkIGRldGVjdCBwcm9maWxlciBhbmQgZW5hYmxlL2Rpc2FibGUgYWNjb3JkaW5nbHkuXG4gICAgLy8gc2VlICMyMVxuICAgIC8vICdTSUdQUk9GJ1xuICApXG59XG5cbmlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnKSB7XG4gIHNpZ25hbHMucHVzaCgnU0lHSU8nLCAnU0lHUE9MTCcsICdTSUdQV1InLCAnU0lHU1RLRkxUJylcbn1cbiIsICIvLyBOb3RlOiBzaW5jZSBueWMgdXNlcyB0aGlzIG1vZHVsZSB0byBvdXRwdXQgY292ZXJhZ2UsIGFueSBsaW5lc1xuLy8gdGhhdCBhcmUgaW4gdGhlIGRpcmVjdCBzeW5jIGZsb3cgb2YgbnljJ3Mgb3V0cHV0Q292ZXJhZ2UgYXJlXG4vLyBpZ25vcmVkLCBzaW5jZSB3ZSBjYW4gbmV2ZXIgZ2V0IGNvdmVyYWdlIGZvciB0aGVtLlxuLy8gZ3JhYiBhIHJlZmVyZW5jZSB0byBub2RlJ3MgcmVhbCBwcm9jZXNzIG9iamVjdCByaWdodCBhd2F5XG5pbXBvcnQgeyBzaWduYWxzIH0gZnJvbSAnLi9zaWduYWxzLmpzJ1xuZXhwb3J0IHsgc2lnbmFscyB9XG5cbi8vIGp1c3QgYSBsb29zZW5lZCBwcm9jZXNzIHR5cGUgc28gd2UgY2FuIGRvIHNvbWUgZXZpbCB0aGluZ3NcbnR5cGUgUHJvY2Vzc1JFID0gTm9kZUpTLlByb2Nlc3MgJiB7XG4gIHJlYWxseUV4aXQ6IChjb2RlPzogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbCkgPT4gYW55XG4gIGVtaXQ6IChldjogc3RyaW5nLCAuLi5hOiBhbnlbXSkgPT4gYW55XG59XG5cbmNvbnN0IHByb2Nlc3NPayA9IChwcm9jZXNzOiBhbnkpOiBwcm9jZXNzIGlzIFByb2Nlc3NSRSA9PlxuICAhIXByb2Nlc3MgJiZcbiAgdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gIHR5cGVvZiBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwcm9jZXNzLmVtaXQgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHByb2Nlc3MucmVhbGx5RXhpdCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcHJvY2Vzcy5saXN0ZW5lcnMgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHByb2Nlc3Mua2lsbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcHJvY2Vzcy5waWQgPT09ICdudW1iZXInICYmXG4gIHR5cGVvZiBwcm9jZXNzLm9uID09PSAnZnVuY3Rpb24nXG5cbmNvbnN0IGtFeGl0RW1pdHRlciA9IFN5bWJvbC5mb3IoJ3NpZ25hbC1leGl0IGVtaXR0ZXInKVxuY29uc3QgZ2xvYmFsOiB0eXBlb2YgZ2xvYmFsVGhpcyAmIHsgW2tFeGl0RW1pdHRlcl0/OiBFbWl0dGVyIH0gPSBnbG9iYWxUaGlzXG5jb25zdCBPYmplY3REZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eS5iaW5kKE9iamVjdClcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW4gZXhpdCBjb2RlIGFuZCBzaWduYWwgYXMgYXJndW1lbnRzXG4gKlxuICogSW4gdGhlIGNhc2Ugb2Ygc2lnbmFsIGV4aXRzICpvbmx5KiwgYSByZXR1cm4gdmFsdWUgb2YgdHJ1ZVxuICogd2lsbCBpbmRpY2F0ZSB0aGF0IHRoZSBzaWduYWwgaXMgYmVpbmcgaGFuZGxlZCwgYW5kIHdlIHNob3VsZFxuICogbm90IHN5bnRoZXRpY2FsbHkgZXhpdCB3aXRoIHRoZSBzaWduYWwgd2UgcmVjZWl2ZWQuIFJlZ2FyZGxlc3NcbiAqIG9mIHRoZSBoYW5kbGVyIHJldHVybiB2YWx1ZSwgdGhlIGhhbmRsZXIgaXMgdW5sb2FkZWQgd2hlbiBhblxuICogb3RoZXJ3aXNlIGZhdGFsIHNpZ25hbCBpcyByZWNlaXZlZCwgc28geW91IGdldCBleGFjdGx5IDEgc2hvdFxuICogYXQgaXQsIHVubGVzcyB5b3UgYWRkIGFub3RoZXIgb25FeGl0IGhhbmRsZXIgYXQgdGhhdCBwb2ludC5cbiAqXG4gKiBJbiB0aGUgY2FzZSBvZiBudW1lcmljIGNvZGUgZXhpdHMsIHdlIG1heSBhbHJlYWR5IGhhdmUgY29tbWl0dGVkXG4gKiB0byBleGl0aW5nIHRoZSBwcm9jZXNzLCBmb3IgZXhhbXBsZSB2aWEgYSBmYXRhbCBleGNlcHRpb24gb3JcbiAqIHVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbiwgc28gaXQgaXMgaW1wb3NzaWJsZSB0byBzdG9wIHNhZmVseS5cbiAqL1xuZXhwb3J0IHR5cGUgSGFuZGxlciA9IChcbiAgY29kZTogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgc2lnbmFsOiBOb2RlSlMuU2lnbmFscyB8IG51bGxcbikgPT4gdHJ1ZSB8IHZvaWRcbnR5cGUgRXhpdEV2ZW50ID0gJ2FmdGVyRXhpdCcgfCAnZXhpdCdcbnR5cGUgRW1pdHRlZCA9IHsgW2sgaW4gRXhpdEV2ZW50XTogYm9vbGVhbiB9XG50eXBlIExpc3RlbmVycyA9IHsgW2sgaW4gRXhpdEV2ZW50XTogSGFuZGxlcltdIH1cblxuLy8gdGVlbnkgc3BlY2lhbCBwdXJwb3NlIGVlXG5jbGFzcyBFbWl0dGVyIHtcbiAgZW1pdHRlZDogRW1pdHRlZCA9IHtcbiAgICBhZnRlckV4aXQ6IGZhbHNlLFxuICAgIGV4aXQ6IGZhbHNlLFxuICB9XG5cbiAgbGlzdGVuZXJzOiBMaXN0ZW5lcnMgPSB7XG4gICAgYWZ0ZXJFeGl0OiBbXSxcbiAgICBleGl0OiBbXSxcbiAgfVxuXG4gIGNvdW50OiBudW1iZXIgPSAwXG4gIGlkOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGdsb2JhbFtrRXhpdEVtaXR0ZXJdKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsW2tFeGl0RW1pdHRlcl1cbiAgICB9XG4gICAgT2JqZWN0RGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrRXhpdEVtaXR0ZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIH0pXG4gIH1cblxuICBvbihldjogRXhpdEV2ZW50LCBmbjogSGFuZGxlcikge1xuICAgIHRoaXMubGlzdGVuZXJzW2V2XS5wdXNoKGZuKVxuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIoZXY6IEV4aXRFdmVudCwgZm46IEhhbmRsZXIpIHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5saXN0ZW5lcnNbZXZdXG4gICAgY29uc3QgaSA9IGxpc3QuaW5kZXhPZihmbilcbiAgICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvKiBjOCBpZ25vcmUgc3RvcCAqL1xuICAgIGlmIChpID09PSAwICYmIGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UoaSwgMSlcbiAgICB9XG4gIH1cblxuICBlbWl0KFxuICAgIGV2OiBFeGl0RXZlbnQsXG4gICAgY29kZTogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICBzaWduYWw6IE5vZGVKUy5TaWduYWxzIHwgbnVsbFxuICApOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5lbWl0dGVkW2V2XSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHRoaXMuZW1pdHRlZFtldl0gPSB0cnVlXG4gICAgbGV0IHJldDogYm9vbGVhbiA9IGZhbHNlXG4gICAgZm9yIChjb25zdCBmbiBvZiB0aGlzLmxpc3RlbmVyc1tldl0pIHtcbiAgICAgIHJldCA9IGZuKGNvZGUsIHNpZ25hbCkgPT09IHRydWUgfHwgcmV0XG4gICAgfVxuICAgIGlmIChldiA9PT0gJ2V4aXQnKSB7XG4gICAgICByZXQgPSB0aGlzLmVtaXQoJ2FmdGVyRXhpdCcsIGNvZGUsIHNpZ25hbCkgfHwgcmV0XG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBTaWduYWxFeGl0QmFzZSB7XG4gIGFic3RyYWN0IG9uRXhpdChjYjogSGFuZGxlciwgb3B0cz86IHsgYWx3YXlzTGFzdD86IGJvb2xlYW4gfSk6ICgpID0+IHZvaWRcbiAgYWJzdHJhY3QgbG9hZCgpOiB2b2lkXG4gIGFic3RyYWN0IHVubG9hZCgpOiB2b2lkXG59XG5cbmNvbnN0IHNpZ25hbEV4aXRXcmFwID0gPFQgZXh0ZW5kcyBTaWduYWxFeGl0QmFzZT4oaGFuZGxlcjogVCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uRXhpdChjYjogSGFuZGxlciwgb3B0cz86IHsgYWx3YXlzTGFzdD86IGJvb2xlYW4gfSkge1xuICAgICAgcmV0dXJuIGhhbmRsZXIub25FeGl0KGNiLCBvcHRzKVxuICAgIH0sXG4gICAgbG9hZCgpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyLmxvYWQoKVxuICAgIH0sXG4gICAgdW5sb2FkKCkge1xuICAgICAgcmV0dXJuIGhhbmRsZXIudW5sb2FkKClcbiAgICB9LFxuICB9XG59XG5cbmNsYXNzIFNpZ25hbEV4aXRGYWxsYmFjayBleHRlbmRzIFNpZ25hbEV4aXRCYXNlIHtcbiAgb25FeGl0KCkge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG4gIGxvYWQoKSB7fVxuICB1bmxvYWQoKSB7fVxufVxuXG5jbGFzcyBTaWduYWxFeGl0IGV4dGVuZHMgU2lnbmFsRXhpdEJhc2Uge1xuICAvLyBcIlNJR0hVUFwiIHRocm93cyBhbiBgRU5PU1lTYCBlcnJvciBvbiBXaW5kb3dzLFxuICAvLyBzbyB1c2UgYSBzdXBwb3J0ZWQgc2lnbmFsIGluc3RlYWRcbiAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICNodXBTaWcgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInID8gJ1NJR0lOVCcgOiAnU0lHSFVQJ1xuICAvKiBjOCBpZ25vcmUgc3RvcCAqL1xuICAjZW1pdHRlciA9IG5ldyBFbWl0dGVyKClcbiAgI3Byb2Nlc3M6IFByb2Nlc3NSRVxuICAjb3JpZ2luYWxQcm9jZXNzRW1pdDogUHJvY2Vzc1JFWydlbWl0J11cbiAgI29yaWdpbmFsUHJvY2Vzc1JlYWxseUV4aXQ6IFByb2Nlc3NSRVsncmVhbGx5RXhpdCddXG5cbiAgI3NpZ0xpc3RlbmVyczogeyBbayBpbiBOb2RlSlMuU2lnbmFsc10/OiAoKSA9PiB2b2lkIH0gPSB7fVxuICAjbG9hZGVkOiBib29sZWFuID0gZmFsc2VcblxuICBjb25zdHJ1Y3Rvcihwcm9jZXNzOiBQcm9jZXNzUkUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy4jcHJvY2VzcyA9IHByb2Nlc3NcbiAgICAvLyB7IDxzaWduYWw+OiA8bGlzdGVuZXIgZm4+LCAuLi4gfVxuICAgIHRoaXMuI3NpZ0xpc3RlbmVycyA9IHt9XG4gICAgZm9yIChjb25zdCBzaWcgb2Ygc2lnbmFscykge1xuICAgICAgdGhpcy4jc2lnTGlzdGVuZXJzW3NpZ10gPSAoKSA9PiB7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBvdGhlciBsaXN0ZW5lcnMsIGFuIGV4aXQgaXMgY29taW5nIVxuICAgICAgICAvLyBTaW1wbGVzdCB3YXk6IHJlbW92ZSB1cyBhbmQgdGhlbiByZS1zZW5kIHRoZSBzaWduYWwuXG4gICAgICAgIC8vIFdlIGtub3cgdGhhdCB0aGlzIHdpbGwga2lsbCB0aGUgcHJvY2Vzcywgc28gd2UgY2FuXG4gICAgICAgIC8vIHNhZmVseSBlbWl0IG5vdy5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy4jcHJvY2Vzcy5saXN0ZW5lcnMoc2lnKVxuICAgICAgICBsZXQgeyBjb3VudCB9ID0gdGhpcy4jZW1pdHRlclxuICAgICAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCBmb3IgdGhlIGZhY3QgdGhhdCBzaWduYWwtZXhpdCB2MyBhbmQgc2lnbmFsXG4gICAgICAgIC8vIGV4aXQgdjQgYXJlIG5vdCBhd2FyZSBvZiBlYWNoIG90aGVyLCBhbmQgZWFjaCB3aWxsIGF0dGVtcHQgdG8gbGV0XG4gICAgICAgIC8vIHRoZSBvdGhlciBoYW5kbGUgaXQsIHNvIG5laXRoZXIgb2YgdGhlbSBkby4gVG8gY29ycmVjdCB0aGlzLCB3ZVxuICAgICAgICAvLyBkZXRlY3QgaWYgd2UncmUgdGhlIG9ubHkgaGFuZGxlciAqZXhjZXB0KiBmb3IgcHJldmlvdXMgdmVyc2lvbnNcbiAgICAgICAgLy8gb2Ygc2lnbmFsLWV4aXQsIGFuZCBpbmNyZW1lbnQgYnkgdGhlIGNvdW50IG9mIGxpc3RlbmVycyBpdCBoYXNcbiAgICAgICAgLy8gY3JlYXRlZC5cbiAgICAgICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgICAgIGNvbnN0IHAgPSBwcm9jZXNzIGFzIHVua25vd24gYXMge1xuICAgICAgICAgIF9fc2lnbmFsX2V4aXRfZW1pdHRlcl9fPzogeyBjb3VudDogbnVtYmVyIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZW9mIHAuX19zaWduYWxfZXhpdF9lbWl0dGVyX18gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgdHlwZW9mIHAuX19zaWduYWxfZXhpdF9lbWl0dGVyX18uY291bnQgPT09ICdudW1iZXInXG4gICAgICAgICkge1xuICAgICAgICAgIGNvdW50ICs9IHAuX19zaWduYWxfZXhpdF9lbWl0dGVyX18uY291bnRcbiAgICAgICAgfVxuICAgICAgICAvKiBjOCBpZ25vcmUgc3RvcCAqL1xuICAgICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gY291bnQpIHtcbiAgICAgICAgICB0aGlzLnVubG9hZCgpXG4gICAgICAgICAgY29uc3QgcmV0ID0gdGhpcy4jZW1pdHRlci5lbWl0KCdleGl0JywgbnVsbCwgc2lnKVxuICAgICAgICAgIC8qIGM4IGlnbm9yZSBzdGFydCAqL1xuICAgICAgICAgIGNvbnN0IHMgPSBzaWcgPT09ICdTSUdIVVAnID8gdGhpcy4jaHVwU2lnIDogc2lnXG4gICAgICAgICAgaWYgKCFyZXQpIHByb2Nlc3Mua2lsbChwcm9jZXNzLnBpZCwgcylcbiAgICAgICAgICAvKiBjOCBpZ25vcmUgc3RvcCAqL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4jb3JpZ2luYWxQcm9jZXNzUmVhbGx5RXhpdCA9IHByb2Nlc3MucmVhbGx5RXhpdFxuICAgIHRoaXMuI29yaWdpbmFsUHJvY2Vzc0VtaXQgPSBwcm9jZXNzLmVtaXRcbiAgfVxuXG4gIG9uRXhpdChjYjogSGFuZGxlciwgb3B0cz86IHsgYWx3YXlzTGFzdD86IGJvb2xlYW4gfSkge1xuICAgIC8qIGM4IGlnbm9yZSBzdGFydCAqL1xuICAgIGlmICghcHJvY2Vzc09rKHRoaXMuI3Byb2Nlc3MpKSB7XG4gICAgICByZXR1cm4gKCkgPT4ge31cbiAgICB9XG4gICAgLyogYzggaWdub3JlIHN0b3AgKi9cblxuICAgIGlmICh0aGlzLiNsb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmxvYWQoKVxuICAgIH1cblxuICAgIGNvbnN0IGV2ID0gb3B0cz8uYWx3YXlzTGFzdCA/ICdhZnRlckV4aXQnIDogJ2V4aXQnXG4gICAgdGhpcy4jZW1pdHRlci5vbihldiwgY2IpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuI2VtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoZXYsIGNiKVxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLiNlbWl0dGVyLmxpc3RlbmVyc1snZXhpdCddLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICB0aGlzLiNlbWl0dGVyLmxpc3RlbmVyc1snYWZ0ZXJFeGl0J10ubGVuZ3RoID09PSAwXG4gICAgICApIHtcbiAgICAgICAgdGhpcy51bmxvYWQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgaWYgKHRoaXMuI2xvYWRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuI2xvYWRlZCA9IHRydWVcblxuICAgIC8vIFRoaXMgaXMgdGhlIG51bWJlciBvZiBvblNpZ25hbEV4aXQncyB0aGF0IGFyZSBpbiBwbGF5LlxuICAgIC8vIEl0J3MgaW1wb3J0YW50IHNvIHRoYXQgd2UgY2FuIGNvdW50IHRoZSBjb3JyZWN0IG51bWJlciBvZlxuICAgIC8vIGxpc3RlbmVycyBvbiBzaWduYWxzLCBhbmQgZG9uJ3Qgd2FpdCBmb3IgdGhlIG90aGVyIG9uZSB0b1xuICAgIC8vIGhhbmRsZSBpdCBpbnN0ZWFkIG9mIHVzLlxuICAgIHRoaXMuI2VtaXR0ZXIuY291bnQgKz0gMVxuXG4gICAgZm9yIChjb25zdCBzaWcgb2Ygc2lnbmFscykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZm4gPSB0aGlzLiNzaWdMaXN0ZW5lcnNbc2lnXVxuICAgICAgICBpZiAoZm4pIHRoaXMuI3Byb2Nlc3Mub24oc2lnLCBmbilcbiAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgfVxuXG4gICAgdGhpcy4jcHJvY2Vzcy5lbWl0ID0gKGV2OiBzdHJpbmcsIC4uLmE6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy4jcHJvY2Vzc0VtaXQoZXYsIC4uLmEpXG4gICAgfVxuICAgIHRoaXMuI3Byb2Nlc3MucmVhbGx5RXhpdCA9IChjb2RlPzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuI3Byb2Nlc3NSZWFsbHlFeGl0KGNvZGUpXG4gICAgfVxuICB9XG5cbiAgdW5sb2FkKCkge1xuICAgIGlmICghdGhpcy4jbG9hZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy4jbG9hZGVkID0gZmFsc2VcblxuICAgIHNpZ25hbHMuZm9yRWFjaChzaWcgPT4ge1xuICAgICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLiNzaWdMaXN0ZW5lcnNbc2lnXVxuICAgICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTGlzdGVuZXIgbm90IGRlZmluZWQgZm9yIHNpZ25hbDogJyArIHNpZylcbiAgICAgIH1cbiAgICAgIC8qIGM4IGlnbm9yZSBzdG9wICovXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLiNwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKHNpZywgbGlzdGVuZXIpXG4gICAgICAgIC8qIGM4IGlnbm9yZSBzdGFydCAqL1xuICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgIC8qIGM4IGlnbm9yZSBzdG9wICovXG4gICAgfSlcbiAgICB0aGlzLiNwcm9jZXNzLmVtaXQgPSB0aGlzLiNvcmlnaW5hbFByb2Nlc3NFbWl0XG4gICAgdGhpcy4jcHJvY2Vzcy5yZWFsbHlFeGl0ID0gdGhpcy4jb3JpZ2luYWxQcm9jZXNzUmVhbGx5RXhpdFxuICAgIHRoaXMuI2VtaXR0ZXIuY291bnQgLT0gMVxuICB9XG5cbiAgI3Byb2Nlc3NSZWFsbHlFeGl0KGNvZGU/OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkKSB7XG4gICAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gICAgaWYgKCFwcm9jZXNzT2sodGhpcy4jcHJvY2VzcykpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIHRoaXMuI3Byb2Nlc3MuZXhpdENvZGUgPSBjb2RlIHx8IDBcbiAgICAvKiBjOCBpZ25vcmUgc3RvcCAqL1xuXG4gICAgdGhpcy4jZW1pdHRlci5lbWl0KCdleGl0JywgdGhpcy4jcHJvY2Vzcy5leGl0Q29kZSwgbnVsbClcbiAgICByZXR1cm4gdGhpcy4jb3JpZ2luYWxQcm9jZXNzUmVhbGx5RXhpdC5jYWxsKFxuICAgICAgdGhpcy4jcHJvY2VzcyxcbiAgICAgIHRoaXMuI3Byb2Nlc3MuZXhpdENvZGVcbiAgICApXG4gIH1cblxuICAjcHJvY2Vzc0VtaXQoZXY6IHN0cmluZywgLi4uYXJnczogYW55W10pOiBhbnkge1xuICAgIGNvbnN0IG9nID0gdGhpcy4jb3JpZ2luYWxQcm9jZXNzRW1pdFxuICAgIGlmIChldiA9PT0gJ2V4aXQnICYmIHByb2Nlc3NPayh0aGlzLiNwcm9jZXNzKSkge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLiNwcm9jZXNzLmV4aXRDb2RlID0gYXJnc1swXVxuICAgICAgICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgICAgIH1cbiAgICAgIC8qIGM4IGlnbm9yZSBzdGFydCAqL1xuICAgICAgY29uc3QgcmV0ID0gb2cuY2FsbCh0aGlzLiNwcm9jZXNzLCBldiwgLi4uYXJncylcbiAgICAgIC8qIGM4IGlnbm9yZSBzdGFydCAqL1xuICAgICAgdGhpcy4jZW1pdHRlci5lbWl0KCdleGl0JywgdGhpcy4jcHJvY2Vzcy5leGl0Q29kZSwgbnVsbClcbiAgICAgIC8qIGM4IGlnbm9yZSBzdG9wICovXG4gICAgICByZXR1cm4gcmV0XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvZy5jYWxsKHRoaXMuI3Byb2Nlc3MsIGV2LCAuLi5hcmdzKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzXG4vLyB3cmFwIHNvIHRoYXQgd2UgY2FsbCB0aGUgbWV0aG9kIG9uIHRoZSBhY3R1YWwgaGFuZGxlciwgd2l0aG91dFxuLy8gZXhwb3J0aW5nIGl0IGRpcmVjdGx5LlxuZXhwb3J0IGNvbnN0IHtcbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBwcm9jZXNzIGlzIGV4aXRpbmcsIHdoZXRoZXIgdmlhIHNpZ25hbCwgZXhwbGljaXRcbiAgICogZXhpdCwgb3IgcnVubmluZyBvdXQgb2Ygc3R1ZmYgdG8gZG8uXG4gICAqXG4gICAqIElmIHRoZSBnbG9iYWwgcHJvY2VzcyBvYmplY3QgaXMgbm90IHN1aXRhYmxlIGZvciBpbnN0cnVtZW50YXRpb24sXG4gICAqIHRoZW4gdGhpcyB3aWxsIGJlIGEgbm8tb3AuXG4gICAqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IG1heSBiZSB1c2VkIHRvIHVubG9hZCBzaWduYWwtZXhpdC5cbiAgICovXG4gIG9uRXhpdCxcblxuICAvKipcbiAgICogTG9hZCB0aGUgbGlzdGVuZXJzLiAgTGlrZWx5IHlvdSBuZXZlciBuZWVkIHRvIGNhbGwgdGhpcywgdW5sZXNzXG4gICAqIGRvaW5nIGEgcmF0aGVyIGRlZXAgaW50ZWdyYXRpb24gd2l0aCBzaWduYWwtZXhpdCBmdW5jdGlvbmFsaXR5LlxuICAgKiBNb3N0bHkgZXhwb3NlZCBmb3IgdGhlIGJlbmVmaXQgb2YgdGVzdGluZy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBsb2FkLFxuXG4gIC8qKlxuICAgKiBVbmxvYWQgdGhlIGxpc3RlbmVycy4gIExpa2VseSB5b3UgbmV2ZXIgbmVlZCB0byBjYWxsIHRoaXMsIHVubGVzc1xuICAgKiBkb2luZyBhIHJhdGhlciBkZWVwIGludGVncmF0aW9uIHdpdGggc2lnbmFsLWV4aXQgZnVuY3Rpb25hbGl0eS5cbiAgICogTW9zdGx5IGV4cG9zZWQgZm9yIHRoZSBiZW5lZml0IG9mIHRlc3RpbmcuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgdW5sb2FkLFxufSA9IHNpZ25hbEV4aXRXcmFwKFxuICBwcm9jZXNzT2socHJvY2VzcykgPyBuZXcgU2lnbmFsRXhpdChwcm9jZXNzKSA6IG5ldyBTaWduYWxFeGl0RmFsbGJhY2soKVxuKVxuIiwgImltcG9ydCB7YWRkQWJvcnRMaXN0ZW5lcn0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtvbkV4aXR9IGZyb20gJ3NpZ25hbC1leGl0JztcblxuLy8gSWYgdGhlIGBjbGVhbnVwYCBvcHRpb24gaXMgdXNlZCwgY2FsbCBgc3VicHJvY2Vzcy5raWxsKClgIHdoZW4gdGhlIHBhcmVudCBwcm9jZXNzIGV4aXRzXG5leHBvcnQgY29uc3QgY2xlYW51cE9uRXhpdCA9IChzdWJwcm9jZXNzLCB7Y2xlYW51cCwgZGV0YWNoZWR9LCB7c2lnbmFsfSkgPT4ge1xuXHRpZiAoIWNsZWFudXAgfHwgZGV0YWNoZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCByZW1vdmVFeGl0SGFuZGxlciA9IG9uRXhpdCgoKSA9PiB7XG5cdFx0c3VicHJvY2Vzcy5raWxsKCk7XG5cdH0pO1xuXHRhZGRBYm9ydExpc3RlbmVyKHNpZ25hbCwgKCkgPT4ge1xuXHRcdHJlbW92ZUV4aXRIYW5kbGVyKCk7XG5cdH0pO1xufTtcbiIsICJpbXBvcnQge25vcm1hbGl6ZVBhcmFtZXRlcnN9IGZyb20gJy4uL21ldGhvZHMvcGFyYW1ldGVycy5qcyc7XG5pbXBvcnQge2dldFN0YXJ0VGltZX0gZnJvbSAnLi4vcmV0dXJuL2R1cmF0aW9uLmpzJztcbmltcG9ydCB7U1VCUFJPQ0VTU19PUFRJT05TLCBnZXRUb1N0cmVhbSwgZ2V0RnJvbVN0cmVhbX0gZnJvbSAnLi4vYXJndW1lbnRzL2ZkLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtpc0Rlbm9FeGVjUGF0aH0gZnJvbSAnLi4vYXJndW1lbnRzL2ZpbGUtdXJsLmpzJztcblxuLy8gTm9ybWFsaXplIGFuZCB2YWxpZGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGBzb3VyY2UucGlwZShkZXN0aW5hdGlvbilgXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGlwZUFyZ3VtZW50cyA9ICh7c291cmNlLCBzb3VyY2VQcm9taXNlLCBib3VuZE9wdGlvbnMsIGNyZWF0ZU5lc3RlZH0sIC4uLnBpcGVBcmd1bWVudHMpID0+IHtcblx0Y29uc3Qgc3RhcnRUaW1lID0gZ2V0U3RhcnRUaW1lKCk7XG5cdGNvbnN0IHtcblx0XHRkZXN0aW5hdGlvbixcblx0XHRkZXN0aW5hdGlvblN0cmVhbSxcblx0XHRkZXN0aW5hdGlvbkVycm9yLFxuXHRcdGZyb20sXG5cdFx0dW5waXBlU2lnbmFsLFxuXHR9ID0gZ2V0RGVzdGluYXRpb25TdHJlYW0oYm91bmRPcHRpb25zLCBjcmVhdGVOZXN0ZWQsIHBpcGVBcmd1bWVudHMpO1xuXHRjb25zdCB7c291cmNlU3RyZWFtLCBzb3VyY2VFcnJvcn0gPSBnZXRTb3VyY2VTdHJlYW0oc291cmNlLCBmcm9tKTtcblx0Y29uc3Qge29wdGlvbnM6IHNvdXJjZU9wdGlvbnMsIGZpbGVEZXNjcmlwdG9yc30gPSBTVUJQUk9DRVNTX09QVElPTlMuZ2V0KHNvdXJjZSk7XG5cdHJldHVybiB7XG5cdFx0c291cmNlUHJvbWlzZSxcblx0XHRzb3VyY2VTdHJlYW0sXG5cdFx0c291cmNlT3B0aW9ucyxcblx0XHRzb3VyY2VFcnJvcixcblx0XHRkZXN0aW5hdGlvbixcblx0XHRkZXN0aW5hdGlvblN0cmVhbSxcblx0XHRkZXN0aW5hdGlvbkVycm9yLFxuXHRcdHVucGlwZVNpZ25hbCxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0c3RhcnRUaW1lLFxuXHR9O1xufTtcblxuY29uc3QgZ2V0RGVzdGluYXRpb25TdHJlYW0gPSAoYm91bmRPcHRpb25zLCBjcmVhdGVOZXN0ZWQsIHBpcGVBcmd1bWVudHMpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB7XG5cdFx0XHRkZXN0aW5hdGlvbixcblx0XHRcdHBpcGVPcHRpb25zOiB7ZnJvbSwgdG8sIHVucGlwZVNpZ25hbH0gPSB7fSxcblx0XHR9ID0gZ2V0RGVzdGluYXRpb24oYm91bmRPcHRpb25zLCBjcmVhdGVOZXN0ZWQsIC4uLnBpcGVBcmd1bWVudHMpO1xuXHRcdGNvbnN0IGRlc3RpbmF0aW9uU3RyZWFtID0gZ2V0VG9TdHJlYW0oZGVzdGluYXRpb24sIHRvKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGVzdGluYXRpb24sXG5cdFx0XHRkZXN0aW5hdGlvblN0cmVhbSxcblx0XHRcdGZyb20sXG5cdFx0XHR1bnBpcGVTaWduYWwsXG5cdFx0fTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4ge2Rlc3RpbmF0aW9uRXJyb3I6IGVycm9yfTtcblx0fVxufTtcblxuLy8gUGlwaW5nIHN1YnByb2Nlc3NlcyBjYW4gdXNlIHRocmVlIHN5bnRheGVzOlxuLy8gIC0gc291cmNlLnBpcGUoJ2NvbW1hbmQnLCBjb21tYW5kQXJndW1lbnRzLCBwaXBlT3B0aW9uc09yRGVzdGluYXRpb25PcHRpb25zKVxuLy8gIC0gc291cmNlLnBpcGVgY29tbWFuZCBjb21tYW5kQXJndW1lbnRgIG9yIHNvdXJjZS5waXBlKHBpcGVPcHRpb25zT3JEZXN0aW5hdGlvbk9wdGlvbnMpYGNvbW1hbmQgY29tbWFuZEFyZ3VtZW50YFxuLy8gIC0gc291cmNlLnBpcGUoZXhlY2EoLi4uKSwgcGlwZU9wdGlvbnMpXG5jb25zdCBnZXREZXN0aW5hdGlvbiA9IChib3VuZE9wdGlvbnMsIGNyZWF0ZU5lc3RlZCwgZmlyc3RBcmd1bWVudCwgLi4ucGlwZUFyZ3VtZW50cykgPT4ge1xuXHRpZiAoQXJyYXkuaXNBcnJheShmaXJzdEFyZ3VtZW50KSkge1xuXHRcdGNvbnN0IGRlc3RpbmF0aW9uID0gY3JlYXRlTmVzdGVkKG1hcERlc3RpbmF0aW9uQXJndW1lbnRzLCBib3VuZE9wdGlvbnMpKGZpcnN0QXJndW1lbnQsIC4uLnBpcGVBcmd1bWVudHMpO1xuXHRcdHJldHVybiB7ZGVzdGluYXRpb24sIHBpcGVPcHRpb25zOiBib3VuZE9wdGlvbnN9O1xuXHR9XG5cblx0aWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgVVJMIHx8IGlzRGVub0V4ZWNQYXRoKGZpcnN0QXJndW1lbnQpKSB7XG5cdFx0aWYgKE9iamVjdC5rZXlzKGJvdW5kT3B0aW9ucykubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignUGxlYXNlIHVzZSAucGlwZShcImZpbGVcIiwgLi4uLCBvcHRpb25zKSBvciAucGlwZShleGVjYShcImZpbGVcIiwgLi4uLCBvcHRpb25zKSkgaW5zdGVhZCBvZiAucGlwZShvcHRpb25zKShcImZpbGVcIiwgLi4uKS4nKTtcblx0XHR9XG5cblx0XHRjb25zdCBbcmF3RmlsZSwgcmF3QXJndW1lbnRzLCByYXdPcHRpb25zXSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMoZmlyc3RBcmd1bWVudCwgLi4ucGlwZUFyZ3VtZW50cyk7XG5cdFx0Y29uc3QgZGVzdGluYXRpb24gPSBjcmVhdGVOZXN0ZWQobWFwRGVzdGluYXRpb25Bcmd1bWVudHMpKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucyk7XG5cdFx0cmV0dXJuIHtkZXN0aW5hdGlvbiwgcGlwZU9wdGlvbnM6IHJhd09wdGlvbnN9O1xuXHR9XG5cblx0aWYgKFNVQlBST0NFU1NfT1BUSU9OUy5oYXMoZmlyc3RBcmd1bWVudCkpIHtcblx0XHRpZiAoT2JqZWN0LmtleXMoYm91bmRPcHRpb25zKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdQbGVhc2UgdXNlIC5waXBlKG9wdGlvbnMpYGNvbW1hbmRgIG9yIC5waXBlKCQob3B0aW9ucylgY29tbWFuZGApIGluc3RlYWQgb2YgLnBpcGUob3B0aW9ucykoJGBjb21tYW5kYCkuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtkZXN0aW5hdGlvbjogZmlyc3RBcmd1bWVudCwgcGlwZU9wdGlvbnM6IHBpcGVBcmd1bWVudHNbMF19O1xuXHR9XG5cblx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSB0ZW1wbGF0ZSBzdHJpbmcsIGFuIG9wdGlvbnMgb2JqZWN0LCBvciBhbiBFeGVjYSBzdWJwcm9jZXNzOiAke2ZpcnN0QXJndW1lbnR9YCk7XG59O1xuXG4vLyBGb3JjZSBgc3RkaW46ICdwaXBlJ2Agd2l0aCB0aGUgZGVzdGluYXRpb24gc3VicHJvY2Vzc1xuY29uc3QgbWFwRGVzdGluYXRpb25Bcmd1bWVudHMgPSAoe29wdGlvbnN9KSA9PiAoe29wdGlvbnM6IHsuLi5vcHRpb25zLCBzdGRpbjogJ3BpcGUnLCBwaXBlZDogdHJ1ZX19KTtcblxuY29uc3QgZ2V0U291cmNlU3RyZWFtID0gKHNvdXJjZSwgZnJvbSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHNvdXJjZVN0cmVhbSA9IGdldEZyb21TdHJlYW0oc291cmNlLCBmcm9tKTtcblx0XHRyZXR1cm4ge3NvdXJjZVN0cmVhbX07XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuIHtzb3VyY2VFcnJvcjogZXJyb3J9O1xuXHR9XG59O1xuIiwgImltcG9ydCB7bWFrZUVhcmx5RXJyb3J9IGZyb20gJy4uL3JldHVybi9yZXN1bHQuanMnO1xuaW1wb3J0IHthYm9ydFNvdXJjZVN0cmVhbSwgZW5kRGVzdGluYXRpb25TdHJlYW19IGZyb20gJy4uL2lvL3BpcGVsaW5lLmpzJztcblxuLy8gV2hlbiBwYXNzaW5nIGludmFsaWQgYXJndW1lbnRzIHRvIGBzb3VyY2UucGlwZSgpYCwgdGhyb3cgYXN5bmNocm9ub3VzbHkuXG4vLyBXZSBhbHNvIGFib3J0IGJvdGggc3VicHJvY2Vzc2VzLlxuZXhwb3J0IGNvbnN0IGhhbmRsZVBpcGVBcmd1bWVudHNFcnJvciA9ICh7XG5cdHNvdXJjZVN0cmVhbSxcblx0c291cmNlRXJyb3IsXG5cdGRlc3RpbmF0aW9uU3RyZWFtLFxuXHRkZXN0aW5hdGlvbkVycm9yLFxuXHRmaWxlRGVzY3JpcHRvcnMsXG5cdHNvdXJjZU9wdGlvbnMsXG5cdHN0YXJ0VGltZSxcbn0pID0+IHtcblx0Y29uc3QgZXJyb3IgPSBnZXRQaXBlQXJndW1lbnRzRXJyb3Ioe1xuXHRcdHNvdXJjZVN0cmVhbSxcblx0XHRzb3VyY2VFcnJvcixcblx0XHRkZXN0aW5hdGlvblN0cmVhbSxcblx0XHRkZXN0aW5hdGlvbkVycm9yLFxuXHR9KTtcblx0aWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBjcmVhdGVOb25Db21tYW5kRXJyb3Ioe1xuXHRcdFx0ZXJyb3IsXG5cdFx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0XHRzb3VyY2VPcHRpb25zLFxuXHRcdFx0c3RhcnRUaW1lLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5jb25zdCBnZXRQaXBlQXJndW1lbnRzRXJyb3IgPSAoe3NvdXJjZVN0cmVhbSwgc291cmNlRXJyb3IsIGRlc3RpbmF0aW9uU3RyZWFtLCBkZXN0aW5hdGlvbkVycm9yfSkgPT4ge1xuXHRpZiAoc291cmNlRXJyb3IgIT09IHVuZGVmaW5lZCAmJiBkZXN0aW5hdGlvbkVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gZGVzdGluYXRpb25FcnJvcjtcblx0fVxuXG5cdGlmIChkZXN0aW5hdGlvbkVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRhYm9ydFNvdXJjZVN0cmVhbShzb3VyY2VTdHJlYW0pO1xuXHRcdHJldHVybiBkZXN0aW5hdGlvbkVycm9yO1xuXHR9XG5cblx0aWYgKHNvdXJjZUVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRlbmREZXN0aW5hdGlvblN0cmVhbShkZXN0aW5hdGlvblN0cmVhbSk7XG5cdFx0cmV0dXJuIHNvdXJjZUVycm9yO1xuXHR9XG59O1xuXG4vLyBTcGVjaWZpYyBlcnJvciByZXR1cm4gdmFsdWUgd2hlbiBwYXNzaW5nIGludmFsaWQgYXJndW1lbnRzIHRvIGBzdWJwcm9jZXNzLnBpcGUoKWAgb3Igd2hlbiB1c2luZyBgdW5waXBlU2lnbmFsYFxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vbkNvbW1hbmRFcnJvciA9ICh7ZXJyb3IsIGZpbGVEZXNjcmlwdG9ycywgc291cmNlT3B0aW9ucywgc3RhcnRUaW1lfSkgPT4gbWFrZUVhcmx5RXJyb3Ioe1xuXHRlcnJvcixcblx0Y29tbWFuZDogUElQRV9DT01NQU5EX01FU1NBR0UsXG5cdGVzY2FwZWRDb21tYW5kOiBQSVBFX0NPTU1BTkRfTUVTU0FHRSxcblx0ZmlsZURlc2NyaXB0b3JzLFxuXHRvcHRpb25zOiBzb3VyY2VPcHRpb25zLFxuXHRzdGFydFRpbWUsXG5cdGlzU3luYzogZmFsc2UsXG59KTtcblxuY29uc3QgUElQRV9DT01NQU5EX01FU1NBR0UgPSAnc291cmNlLnBpcGUoZGVzdGluYXRpb24pJztcbiIsICIvLyBMaWtlIEJhc2gsIHdlIGF3YWl0IGJvdGggc3VicHJvY2Vzc2VzLiBUaGlzIGlzIHVubGlrZSBzb21lIG90aGVyIHNoZWxscyB3aGljaCBvbmx5IGF3YWl0IHRoZSBkZXN0aW5hdGlvbiBzdWJwcm9jZXNzLlxuLy8gTGlrZSBCYXNoIHdpdGggdGhlIGBwaXBlZmFpbGAgb3B0aW9uLCBpZiBlaXRoZXIgc3VicHJvY2VzcyBmYWlscywgdGhlIHdob2xlIHBpcGUgZmFpbHMuXG4vLyBMaWtlIEJhc2gsIGlmIGJvdGggc3VicHJvY2Vzc2VzIGZhaWwsIHdlIHJldHVybiB0aGUgZmFpbHVyZSBvZiB0aGUgZGVzdGluYXRpb24uXG4vLyBUaGlzIGVuc3VyZXMgYm90aCBzdWJwcm9jZXNzZXMnIGVycm9ycyBhcmUgcHJlc2VudCwgdXNpbmcgYGVycm9yLnBpcGVkRnJvbWAuXG5leHBvcnQgY29uc3Qgd2FpdEZvckJvdGhTdWJwcm9jZXNzZXMgPSBhc3luYyBzdWJwcm9jZXNzUHJvbWlzZXMgPT4ge1xuXHRjb25zdCBbXG5cdFx0e3N0YXR1czogc291cmNlU3RhdHVzLCByZWFzb246IHNvdXJjZVJlYXNvbiwgdmFsdWU6IHNvdXJjZVJlc3VsdCA9IHNvdXJjZVJlYXNvbn0sXG5cdFx0e3N0YXR1czogZGVzdGluYXRpb25TdGF0dXMsIHJlYXNvbjogZGVzdGluYXRpb25SZWFzb24sIHZhbHVlOiBkZXN0aW5hdGlvblJlc3VsdCA9IGRlc3RpbmF0aW9uUmVhc29ufSxcblx0XSA9IGF3YWl0IHN1YnByb2Nlc3NQcm9taXNlcztcblxuXHRpZiAoIWRlc3RpbmF0aW9uUmVzdWx0LnBpcGVkRnJvbS5pbmNsdWRlcyhzb3VyY2VSZXN1bHQpKSB7XG5cdFx0ZGVzdGluYXRpb25SZXN1bHQucGlwZWRGcm9tLnB1c2goc291cmNlUmVzdWx0KTtcblx0fVxuXG5cdGlmIChkZXN0aW5hdGlvblN0YXR1cyA9PT0gJ3JlamVjdGVkJykge1xuXHRcdHRocm93IGRlc3RpbmF0aW9uUmVzdWx0O1xuXHR9XG5cblx0aWYgKHNvdXJjZVN0YXR1cyA9PT0gJ3JlamVjdGVkJykge1xuXHRcdHRocm93IHNvdXJjZVJlc3VsdDtcblx0fVxuXG5cdHJldHVybiBkZXN0aW5hdGlvblJlc3VsdDtcbn07XG4iLCAiaW1wb3J0IHtmaW5pc2hlZH0gZnJvbSAnbm9kZTpzdHJlYW0vcHJvbWlzZXMnO1xuaW1wb3J0IG1lcmdlU3RyZWFtcyBmcm9tICdAc2luZHJlc29yaHVzL21lcmdlLXN0cmVhbXMnO1xuaW1wb3J0IHtpbmNyZW1lbnRNYXhMaXN0ZW5lcnN9IGZyb20gJy4uL3V0aWxzL21heC1saXN0ZW5lcnMuanMnO1xuaW1wb3J0IHtwaXBlU3RyZWFtc30gZnJvbSAnLi4vaW8vcGlwZWxpbmUuanMnO1xuXG4vLyBUaGUgcGlwaW5nIGJlaGF2aW9yIGlzIGxpa2UgQmFzaC5cbi8vIEluIHBhcnRpY3VsYXIsIHdoZW4gb25lIHN1YnByb2Nlc3MgZXhpdHMsIHRoZSBvdGhlciBpcyBub3QgdGVybWluYXRlZCBieSBhIHNpZ25hbC5cbi8vIEluc3RlYWQsIGl0cyBzdGRvdXQgKGZvciB0aGUgc291cmNlKSBvciBzdGRpbiAoZm9yIHRoZSBkZXN0aW5hdGlvbikgY2xvc2VzLlxuLy8gSWYgdGhlIHN1YnByb2Nlc3MgdXNlcyBpdCwgaXQgd2lsbCBtYWtlIGl0IGVycm9yIHdpdGggU0lHUElQRSBvciBFUElQRSAoZm9yIHRoZSBzb3VyY2UpIG9yIGVuZCAoZm9yIHRoZSBkZXN0aW5hdGlvbikuXG4vLyBJZiBpdCBkb2VzIG5vdCB1c2UgaXQsIGl0IHdpbGwgY29udGludWUgcnVubmluZy5cbi8vIFRoaXMgYWxsb3dzIGZvciBzdWJwcm9jZXNzZXMgdG8gZ3JhY2VmdWxseSBleGl0IGFuZCBsb3dlciB0aGUgY291cGxpbmcgYmV0d2VlbiBzdWJwcm9jZXNzZXMuXG5leHBvcnQgY29uc3QgcGlwZVN1YnByb2Nlc3NTdHJlYW0gPSAoc291cmNlU3RyZWFtLCBkZXN0aW5hdGlvblN0cmVhbSwgbWF4TGlzdGVuZXJzQ29udHJvbGxlcikgPT4ge1xuXHRjb25zdCBtZXJnZWRTdHJlYW0gPSBNRVJHRURfU1RSRUFNUy5oYXMoZGVzdGluYXRpb25TdHJlYW0pXG5cdFx0PyBwaXBlTW9yZVN1YnByb2Nlc3NTdHJlYW0oc291cmNlU3RyZWFtLCBkZXN0aW5hdGlvblN0cmVhbSlcblx0XHQ6IHBpcGVGaXJzdFN1YnByb2Nlc3NTdHJlYW0oc291cmNlU3RyZWFtLCBkZXN0aW5hdGlvblN0cmVhbSk7XG5cdGluY3JlbWVudE1heExpc3RlbmVycyhzb3VyY2VTdHJlYW0sIFNPVVJDRV9MSVNURU5FUlNfUEVSX1BJUEUsIG1heExpc3RlbmVyc0NvbnRyb2xsZXIuc2lnbmFsKTtcblx0aW5jcmVtZW50TWF4TGlzdGVuZXJzKGRlc3RpbmF0aW9uU3RyZWFtLCBERVNUSU5BVElPTl9MSVNURU5FUlNfUEVSX1BJUEUsIG1heExpc3RlbmVyc0NvbnRyb2xsZXIuc2lnbmFsKTtcblx0Y2xlYW51cE1lcmdlZFN0cmVhbXNNYXAoZGVzdGluYXRpb25TdHJlYW0pO1xuXHRyZXR1cm4gbWVyZ2VkU3RyZWFtO1xufTtcblxuLy8gV2UgdXNlIGBtZXJnZS1zdHJlYW1zYCB0byBhbGxvdyBmb3IgbXVsdGlwbGUgc291cmNlcyB0byBwaXBlIHRvIHRoZSBzYW1lIGRlc3RpbmF0aW9uLlxuY29uc3QgcGlwZUZpcnN0U3VicHJvY2Vzc1N0cmVhbSA9IChzb3VyY2VTdHJlYW0sIGRlc3RpbmF0aW9uU3RyZWFtKSA9PiB7XG5cdGNvbnN0IG1lcmdlZFN0cmVhbSA9IG1lcmdlU3RyZWFtcyhbc291cmNlU3RyZWFtXSk7XG5cdHBpcGVTdHJlYW1zKG1lcmdlZFN0cmVhbSwgZGVzdGluYXRpb25TdHJlYW0pO1xuXHRNRVJHRURfU1RSRUFNUy5zZXQoZGVzdGluYXRpb25TdHJlYW0sIG1lcmdlZFN0cmVhbSk7XG5cdHJldHVybiBtZXJnZWRTdHJlYW07XG59O1xuXG5jb25zdCBwaXBlTW9yZVN1YnByb2Nlc3NTdHJlYW0gPSAoc291cmNlU3RyZWFtLCBkZXN0aW5hdGlvblN0cmVhbSkgPT4ge1xuXHRjb25zdCBtZXJnZWRTdHJlYW0gPSBNRVJHRURfU1RSRUFNUy5nZXQoZGVzdGluYXRpb25TdHJlYW0pO1xuXHRtZXJnZWRTdHJlYW0uYWRkKHNvdXJjZVN0cmVhbSk7XG5cdHJldHVybiBtZXJnZWRTdHJlYW07XG59O1xuXG5jb25zdCBjbGVhbnVwTWVyZ2VkU3RyZWFtc01hcCA9IGFzeW5jIGRlc3RpbmF0aW9uU3RyZWFtID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBmaW5pc2hlZChkZXN0aW5hdGlvblN0cmVhbSwge2NsZWFudXA6IHRydWUsIHJlYWRhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWV9KTtcblx0fSBjYXRjaCB7fVxuXG5cdE1FUkdFRF9TVFJFQU1TLmRlbGV0ZShkZXN0aW5hdGlvblN0cmVhbSk7XG59O1xuXG5jb25zdCBNRVJHRURfU1RSRUFNUyA9IG5ldyBXZWFrTWFwKCk7XG5cbi8vIE51bWJlciBvZiBsaXN0ZW5lcnMgc2V0IHVwIG9uIGBzb3VyY2VTdHJlYW1gIGJ5IGVhY2ggYHNvdXJjZVN0cmVhbS5waXBlKGRlc3RpbmF0aW9uU3RyZWFtKWBcbi8vIFRob3NlIGFyZSBhZGRlZCBieSBgbWVyZ2Utc3RyZWFtc2BcbmNvbnN0IFNPVVJDRV9MSVNURU5FUlNfUEVSX1BJUEUgPSAyO1xuLy8gTnVtYmVyIG9mIGxpc3RlbmVycyBzZXQgdXAgb24gYGRlc3RpbmF0aW9uU3RyZWFtYCBieSBlYWNoIGBzb3VyY2VTdHJlYW0ucGlwZShkZXN0aW5hdGlvblN0cmVhbSlgXG4vLyBUaG9zZSBhcmUgYWRkZWQgYnkgYGZpbmlzaGVkKClgIGluIGBjbGVhbnVwTWVyZ2VkU3RyZWFtc01hcCgpYFxuY29uc3QgREVTVElOQVRJT05fTElTVEVORVJTX1BFUl9QSVBFID0gMTtcbiIsICJpbXBvcnQge2Fib3J0ZWR9IGZyb20gJ25vZGU6dXRpbCc7XG5pbXBvcnQge2NyZWF0ZU5vbkNvbW1hbmRFcnJvcn0gZnJvbSAnLi90aHJvdy5qcyc7XG5cbi8vIFdoZW4gcGFzc2luZyBhbiBgdW5waXBlU2lnbmFsYCBvcHRpb24sIGFib3J0IHBpcGluZyB3aGVuIHRoZSBzaWduYWwgaXMgYWJvcnRlZC5cbi8vIEhvd2V2ZXIsIGRvIG5vdCB0ZXJtaW5hdGUgdGhlIHN1YnByb2Nlc3Nlcy5cbmV4cG9ydCBjb25zdCB1bnBpcGVPbkFib3J0ID0gKHVucGlwZVNpZ25hbCwgdW5waXBlQ29udGV4dCkgPT4gdW5waXBlU2lnbmFsID09PSB1bmRlZmluZWRcblx0PyBbXVxuXHQ6IFt1bnBpcGVPblNpZ25hbEFib3J0KHVucGlwZVNpZ25hbCwgdW5waXBlQ29udGV4dCldO1xuXG5jb25zdCB1bnBpcGVPblNpZ25hbEFib3J0ID0gYXN5bmMgKHVucGlwZVNpZ25hbCwge3NvdXJjZVN0cmVhbSwgbWVyZ2VkU3RyZWFtLCBmaWxlRGVzY3JpcHRvcnMsIHNvdXJjZU9wdGlvbnMsIHN0YXJ0VGltZX0pID0+IHtcblx0YXdhaXQgYWJvcnRlZCh1bnBpcGVTaWduYWwsIHNvdXJjZVN0cmVhbSk7XG5cdGF3YWl0IG1lcmdlZFN0cmVhbS5yZW1vdmUoc291cmNlU3RyZWFtKTtcblx0Y29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoJ1BpcGUgY2FuY2VsZWQgYnkgYHVucGlwZVNpZ25hbGAgb3B0aW9uLicpO1xuXHR0aHJvdyBjcmVhdGVOb25Db21tYW5kRXJyb3Ioe1xuXHRcdGVycm9yLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRzb3VyY2VPcHRpb25zLFxuXHRcdHN0YXJ0VGltZSxcblx0fSk7XG59O1xuIiwgImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2lzLXBsYWluLW9iaic7XG5pbXBvcnQge25vcm1hbGl6ZVBpcGVBcmd1bWVudHN9IGZyb20gJy4vcGlwZS1hcmd1bWVudHMuanMnO1xuaW1wb3J0IHtoYW5kbGVQaXBlQXJndW1lbnRzRXJyb3J9IGZyb20gJy4vdGhyb3cuanMnO1xuaW1wb3J0IHt3YWl0Rm9yQm90aFN1YnByb2Nlc3Nlc30gZnJvbSAnLi9zZXF1ZW5jZS5qcyc7XG5pbXBvcnQge3BpcGVTdWJwcm9jZXNzU3RyZWFtfSBmcm9tICcuL3N0cmVhbWluZy5qcyc7XG5pbXBvcnQge3VucGlwZU9uQWJvcnR9IGZyb20gJy4vYWJvcnQuanMnO1xuXG4vLyBQaXBlIGEgc3VicHJvY2VzcycgYHN0ZG91dGAvYHN0ZGVycmAvYHN0ZGlvYCBpbnRvIGFub3RoZXIgc3VicHJvY2VzcycgYHN0ZGluYFxuZXhwb3J0IGNvbnN0IHBpcGVUb1N1YnByb2Nlc3MgPSAoc291cmNlSW5mbywgLi4ucGlwZUFyZ3VtZW50cykgPT4ge1xuXHRpZiAoaXNQbGFpbk9iamVjdChwaXBlQXJndW1lbnRzWzBdKSkge1xuXHRcdHJldHVybiBwaXBlVG9TdWJwcm9jZXNzLmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0XHQuLi5zb3VyY2VJbmZvLFxuXHRcdFx0Ym91bmRPcHRpb25zOiB7Li4uc291cmNlSW5mby5ib3VuZE9wdGlvbnMsIC4uLnBpcGVBcmd1bWVudHNbMF19LFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qge2Rlc3RpbmF0aW9uLCAuLi5ub3JtYWxpemVkSW5mb30gPSBub3JtYWxpemVQaXBlQXJndW1lbnRzKHNvdXJjZUluZm8sIC4uLnBpcGVBcmd1bWVudHMpO1xuXHRjb25zdCBwcm9taXNlID0gaGFuZGxlUGlwZVByb21pc2Uoey4uLm5vcm1hbGl6ZWRJbmZvLCBkZXN0aW5hdGlvbn0pO1xuXHRwcm9taXNlLnBpcGUgPSBwaXBlVG9TdWJwcm9jZXNzLmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0Li4uc291cmNlSW5mbyxcblx0XHRzb3VyY2U6IGRlc3RpbmF0aW9uLFxuXHRcdHNvdXJjZVByb21pc2U6IHByb21pc2UsXG5cdFx0Ym91bmRPcHRpb25zOiB7fSxcblx0fSk7XG5cdHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gQXN5bmNocm9ub3VzIGxvZ2ljIHdoZW4gcGlwaW5nIHN1YnByb2Nlc3Nlc1xuY29uc3QgaGFuZGxlUGlwZVByb21pc2UgPSBhc3luYyAoe1xuXHRzb3VyY2VQcm9taXNlLFxuXHRzb3VyY2VTdHJlYW0sXG5cdHNvdXJjZU9wdGlvbnMsXG5cdHNvdXJjZUVycm9yLFxuXHRkZXN0aW5hdGlvbixcblx0ZGVzdGluYXRpb25TdHJlYW0sXG5cdGRlc3RpbmF0aW9uRXJyb3IsXG5cdHVucGlwZVNpZ25hbCxcblx0ZmlsZURlc2NyaXB0b3JzLFxuXHRzdGFydFRpbWUsXG59KSA9PiB7XG5cdGNvbnN0IHN1YnByb2Nlc3NQcm9taXNlcyA9IGdldFN1YnByb2Nlc3NQcm9taXNlcyhzb3VyY2VQcm9taXNlLCBkZXN0aW5hdGlvbik7XG5cdGhhbmRsZVBpcGVBcmd1bWVudHNFcnJvcih7XG5cdFx0c291cmNlU3RyZWFtLFxuXHRcdHNvdXJjZUVycm9yLFxuXHRcdGRlc3RpbmF0aW9uU3RyZWFtLFxuXHRcdGRlc3RpbmF0aW9uRXJyb3IsXG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdHNvdXJjZU9wdGlvbnMsXG5cdFx0c3RhcnRUaW1lLFxuXHR9KTtcblx0Y29uc3QgbWF4TGlzdGVuZXJzQ29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0dHJ5IHtcblx0XHRjb25zdCBtZXJnZWRTdHJlYW0gPSBwaXBlU3VicHJvY2Vzc1N0cmVhbShzb3VyY2VTdHJlYW0sIGRlc3RpbmF0aW9uU3RyZWFtLCBtYXhMaXN0ZW5lcnNDb250cm9sbGVyKTtcblx0XHRyZXR1cm4gYXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRcdHdhaXRGb3JCb3RoU3VicHJvY2Vzc2VzKHN1YnByb2Nlc3NQcm9taXNlcyksXG5cdFx0XHQuLi51bnBpcGVPbkFib3J0KHVucGlwZVNpZ25hbCwge1xuXHRcdFx0XHRzb3VyY2VTdHJlYW0sXG5cdFx0XHRcdG1lcmdlZFN0cmVhbSxcblx0XHRcdFx0c291cmNlT3B0aW9ucyxcblx0XHRcdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdFx0XHRzdGFydFRpbWUsXG5cdFx0XHR9KSxcblx0XHRdKTtcblx0fSBmaW5hbGx5IHtcblx0XHRtYXhMaXN0ZW5lcnNDb250cm9sbGVyLmFib3J0KCk7XG5cdH1cbn07XG5cbi8vIGAucGlwZSgpYCBhd2FpdHMgdGhlIHN1YnByb2Nlc3MgcHJvbWlzZXMuXG4vLyBXaGVuIGludmFsaWQgYXJndW1lbnRzIGFyZSBwYXNzZWQgdG8gYC5waXBlKClgLCB3ZSB0aHJvdyBhbiBlcnJvciwgd2hpY2ggcHJldmVudHMgYXdhaXRpbmcgdGhlbS5cbi8vIFdlIG5lZWQgdG8gZW5zdXJlIHRoaXMgZG9lcyBub3QgY3JlYXRlIHVuaGFuZGxlZCByZWplY3Rpb25zLlxuY29uc3QgZ2V0U3VicHJvY2Vzc1Byb21pc2VzID0gKHNvdXJjZVByb21pc2UsIGRlc3RpbmF0aW9uKSA9PiBQcm9taXNlLmFsbFNldHRsZWQoW3NvdXJjZVByb21pc2UsIGRlc3RpbmF0aW9uXSk7XG4iLCAiaW1wb3J0IHtvbn0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtnZXREZWZhdWx0SGlnaFdhdGVyTWFya30gZnJvbSAnbm9kZTpzdHJlYW0nO1xuaW1wb3J0IHtnZXRFbmNvZGluZ1RyYW5zZm9ybUdlbmVyYXRvcn0gZnJvbSAnLi4vdHJhbnNmb3JtL2VuY29kaW5nLXRyYW5zZm9ybS5qcyc7XG5pbXBvcnQge2dldFNwbGl0TGluZXNHZW5lcmF0b3J9IGZyb20gJy4uL3RyYW5zZm9ybS9zcGxpdC5qcyc7XG5pbXBvcnQge3RyYW5zZm9ybUNodW5rU3luYywgZmluYWxDaHVua3NTeW5jfSBmcm9tICcuLi90cmFuc2Zvcm0vcnVuLXN5bmMuanMnO1xuXG4vLyBJdGVyYXRlIG92ZXIgbGluZXMgb2YgYHN1YnByb2Nlc3Muc3Rkb3V0YCwgdXNlZCBieSBgc3VicHJvY2Vzcy5yZWFkYWJsZXxkdXBsZXh8aXRlcmFibGUoKWBcbmV4cG9ydCBjb25zdCBpdGVyYXRlT25TdWJwcm9jZXNzU3RyZWFtID0gKHtzdWJwcm9jZXNzU3Rkb3V0LCBzdWJwcm9jZXNzLCBiaW5hcnksIHNob3VsZEVuY29kZSwgZW5jb2RpbmcsIHByZXNlcnZlTmV3bGluZXN9KSA9PiB7XG5cdGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdHN0b3BSZWFkaW5nT25FeGl0KHN1YnByb2Nlc3MsIGNvbnRyb2xsZXIpO1xuXHRyZXR1cm4gaXRlcmF0ZU9uU3RyZWFtKHtcblx0XHRzdHJlYW06IHN1YnByb2Nlc3NTdGRvdXQsXG5cdFx0Y29udHJvbGxlcixcblx0XHRiaW5hcnksXG5cdFx0c2hvdWxkRW5jb2RlOiAhc3VicHJvY2Vzc1N0ZG91dC5yZWFkYWJsZU9iamVjdE1vZGUgJiYgc2hvdWxkRW5jb2RlLFxuXHRcdGVuY29kaW5nLFxuXHRcdHNob3VsZFNwbGl0OiAhc3VicHJvY2Vzc1N0ZG91dC5yZWFkYWJsZU9iamVjdE1vZGUsXG5cdFx0cHJlc2VydmVOZXdsaW5lcyxcblx0fSk7XG59O1xuXG5jb25zdCBzdG9wUmVhZGluZ09uRXhpdCA9IGFzeW5jIChzdWJwcm9jZXNzLCBjb250cm9sbGVyKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgc3VicHJvY2Vzcztcblx0fSBjYXRjaCB7fSBmaW5hbGx5IHtcblx0XHRjb250cm9sbGVyLmFib3J0KCk7XG5cdH1cbn07XG5cbi8vIEl0ZXJhdGUgb3ZlciBsaW5lcyBvZiBgc3VicHJvY2Vzcy5zdGRvdXRgLCB1c2VkIGJ5IGByZXN1bHQuc3Rkb3V0YCBhbmQgdGhlIGB2ZXJib3NlOiAnZnVsbCdgIG9wdGlvbi5cbi8vIEFwcGxpZXMgdGhlIGBsaW5lc2AgYW5kIGBlbmNvZGluZ2Agb3B0aW9ucy5cbmV4cG9ydCBjb25zdCBpdGVyYXRlRm9yUmVzdWx0ID0gKHtzdHJlYW0sIG9uU3RyZWFtRW5kLCBsaW5lcywgZW5jb2RpbmcsIHN0cmlwRmluYWxOZXdsaW5lLCBhbGxNaXhlZH0pID0+IHtcblx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblx0c3RvcFJlYWRpbmdPblN0cmVhbUVuZChvblN0cmVhbUVuZCwgY29udHJvbGxlciwgc3RyZWFtKTtcblx0Y29uc3Qgb2JqZWN0TW9kZSA9IHN0cmVhbS5yZWFkYWJsZU9iamVjdE1vZGUgJiYgIWFsbE1peGVkO1xuXHRyZXR1cm4gaXRlcmF0ZU9uU3RyZWFtKHtcblx0XHRzdHJlYW0sXG5cdFx0Y29udHJvbGxlcixcblx0XHRiaW5hcnk6IGVuY29kaW5nID09PSAnYnVmZmVyJyxcblx0XHRzaG91bGRFbmNvZGU6ICFvYmplY3RNb2RlLFxuXHRcdGVuY29kaW5nLFxuXHRcdHNob3VsZFNwbGl0OiAhb2JqZWN0TW9kZSAmJiBsaW5lcyxcblx0XHRwcmVzZXJ2ZU5ld2xpbmVzOiAhc3RyaXBGaW5hbE5ld2xpbmUsXG5cdH0pO1xufTtcblxuY29uc3Qgc3RvcFJlYWRpbmdPblN0cmVhbUVuZCA9IGFzeW5jIChvblN0cmVhbUVuZCwgY29udHJvbGxlciwgc3RyZWFtKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgb25TdHJlYW1FbmQ7XG5cdH0gY2F0Y2gge1xuXHRcdHN0cmVhbS5kZXN0cm95KCk7XG5cdH0gZmluYWxseSB7XG5cdFx0Y29udHJvbGxlci5hYm9ydCgpO1xuXHR9XG59O1xuXG5jb25zdCBpdGVyYXRlT25TdHJlYW0gPSAoe3N0cmVhbSwgY29udHJvbGxlciwgYmluYXJ5LCBzaG91bGRFbmNvZGUsIGVuY29kaW5nLCBzaG91bGRTcGxpdCwgcHJlc2VydmVOZXdsaW5lc30pID0+IHtcblx0Y29uc3Qgb25TdGRvdXRDaHVuayA9IG9uKHN0cmVhbSwgJ2RhdGEnLCB7XG5cdFx0c2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcblx0XHRoaWdoV2F0ZXJNYXJrOiBISUdIX1dBVEVSX01BUkssXG5cdFx0Ly8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIG5hbWUgZm9yIHRoaXMgb3B0aW9uXG5cdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9wdWxsLzUyMDgwI2Rpc2N1c3Npb25fcjE1MjUyMjc4NjFcblx0XHQvLyBAdG9kbyBSZW1vdmUgYWZ0ZXIgcmVtb3Zpbmcgc3VwcG9ydCBmb3IgTm9kZSAyMVxuXHRcdGhpZ2hXYXRlcm1hcms6IEhJR0hfV0FURVJfTUFSSyxcblx0fSk7XG5cdHJldHVybiBpdGVyYXRlT25EYXRhKHtcblx0XHRvblN0ZG91dENodW5rLFxuXHRcdGNvbnRyb2xsZXIsXG5cdFx0YmluYXJ5LFxuXHRcdHNob3VsZEVuY29kZSxcblx0XHRlbmNvZGluZyxcblx0XHRzaG91bGRTcGxpdCxcblx0XHRwcmVzZXJ2ZU5ld2xpbmVzLFxuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX09CSkVDVF9ISUdIX1dBVEVSX01BUksgPSBnZXREZWZhdWx0SGlnaFdhdGVyTWFyayh0cnVlKTtcblxuLy8gVGhlIGBoaWdoV2F0ZXJNYXJrYCBvZiBgZXZlbnRzLm9uKClgIGlzIG1lYXN1cmVkIGluIG51bWJlciBvZiBldmVudHMsIG5vdCBpbiBieXRlcy5cbi8vIE5vdCBrbm93aW5nIHRoZSBhdmVyYWdlIGFtb3VudCBvZiBieXRlcyBwZXIgYGRhdGFgIGV2ZW50LCB3ZSB1c2UgdGhlIHNhbWUgaGV1cmlzdGljIGFzIHN0cmVhbXMgaW4gb2JqZWN0TW9kZSwgc2luY2UgdGhleSBoYXZlIHRoZSBzYW1lIGlzc3VlLlxuLy8gVGhlcmVmb3JlLCB3ZSB1c2UgdGhlIHZhbHVlIG9mIGBnZXREZWZhdWx0SGlnaFdhdGVyTWFyayh0cnVlKWAuXG4vLyBOb3RlOiB0aGlzIG9wdGlvbiBkb2VzIG5vdCBleGlzdCBvbiBOb2RlIDE4LCBidXQgdGhpcyBpcyBvayBzaW5jZSB0aGUgbG9naWMgd29ya3Mgd2l0aG91dCBpdC4gSXQganVzdCBjb25zdW1lcyBtb3JlIG1lbW9yeS5cbmNvbnN0IEhJR0hfV0FURVJfTUFSSyA9IERFRkFVTFRfT0JKRUNUX0hJR0hfV0FURVJfTUFSSztcblxuY29uc3QgaXRlcmF0ZU9uRGF0YSA9IGFzeW5jIGZ1bmN0aW9uICogKHtvblN0ZG91dENodW5rLCBjb250cm9sbGVyLCBiaW5hcnksIHNob3VsZEVuY29kZSwgZW5jb2RpbmcsIHNob3VsZFNwbGl0LCBwcmVzZXJ2ZU5ld2xpbmVzfSkge1xuXHRjb25zdCBnZW5lcmF0b3JzID0gZ2V0R2VuZXJhdG9ycyh7XG5cdFx0YmluYXJ5LFxuXHRcdHNob3VsZEVuY29kZSxcblx0XHRlbmNvZGluZyxcblx0XHRzaG91bGRTcGxpdCxcblx0XHRwcmVzZXJ2ZU5ld2xpbmVzLFxuXHR9KTtcblxuXHR0cnkge1xuXHRcdGZvciBhd2FpdCAoY29uc3QgW2NodW5rXSBvZiBvblN0ZG91dENodW5rKSB7XG5cdFx0XHR5aWVsZCAqIHRyYW5zZm9ybUNodW5rU3luYyhjaHVuaywgZ2VuZXJhdG9ycywgMCk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmICghY29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdHlpZWxkICogZmluYWxDaHVua3NTeW5jKGdlbmVyYXRvcnMpO1xuXHR9XG59O1xuXG5jb25zdCBnZXRHZW5lcmF0b3JzID0gKHtiaW5hcnksIHNob3VsZEVuY29kZSwgZW5jb2RpbmcsIHNob3VsZFNwbGl0LCBwcmVzZXJ2ZU5ld2xpbmVzfSkgPT4gW1xuXHRnZXRFbmNvZGluZ1RyYW5zZm9ybUdlbmVyYXRvcihiaW5hcnksIGVuY29kaW5nLCAhc2hvdWxkRW5jb2RlKSxcblx0Z2V0U3BsaXRMaW5lc0dlbmVyYXRvcihiaW5hcnksIHByZXNlcnZlTmV3bGluZXMsICFzaG91bGRTcGxpdCwge30pLFxuXS5maWx0ZXIoQm9vbGVhbik7XG4iLCAiaW1wb3J0IHtzZXRJbW1lZGlhdGV9IGZyb20gJ25vZGU6dGltZXJzL3Byb21pc2VzJztcbmltcG9ydCBnZXRTdHJlYW0sIHtnZXRTdHJlYW1Bc0FycmF5QnVmZmVyLCBnZXRTdHJlYW1Bc0FycmF5fSBmcm9tICdnZXQtc3RyZWFtJztcbmltcG9ydCB7aXNBcnJheUJ1ZmZlcn0gZnJvbSAnLi4vdXRpbHMvdWludC1hcnJheS5qcyc7XG5pbXBvcnQge3Nob3VsZExvZ091dHB1dCwgbG9nTGluZXN9IGZyb20gJy4uL3ZlcmJvc2Uvb3V0cHV0LmpzJztcbmltcG9ydCB7aXRlcmF0ZUZvclJlc3VsdH0gZnJvbSAnLi9pdGVyYXRlLmpzJztcbmltcG9ydCB7aGFuZGxlTWF4QnVmZmVyfSBmcm9tICcuL21heC1idWZmZXIuanMnO1xuaW1wb3J0IHtnZXRTdHJpcEZpbmFsTmV3bGluZX0gZnJvbSAnLi9zdHJpcC1uZXdsaW5lLmpzJztcblxuLy8gUmV0cmlldmUgYHJlc3VsdC5zdGRvdXR8c3RkZXJyfGFsbHxzdGRpb1sqXWBcbmV4cG9ydCBjb25zdCBnZXRTdHJlYW1PdXRwdXQgPSBhc3luYyAoe3N0cmVhbSwgb25TdHJlYW1FbmQsIGZkTnVtYmVyLCBlbmNvZGluZywgYnVmZmVyLCBtYXhCdWZmZXIsIGxpbmVzLCBhbGxNaXhlZCwgc3RyaXBGaW5hbE5ld2xpbmUsIHZlcmJvc2VJbmZvLCBzdHJlYW1JbmZvfSkgPT4ge1xuXHRjb25zdCBsb2dQcm9taXNlID0gbG9nT3V0cHV0QXN5bmMoe1xuXHRcdHN0cmVhbSxcblx0XHRvblN0cmVhbUVuZCxcblx0XHRmZE51bWJlcixcblx0XHRlbmNvZGluZyxcblx0XHRhbGxNaXhlZCxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRzdHJlYW1JbmZvLFxuXHR9KTtcblxuXHRpZiAoIWJ1ZmZlcikge1xuXHRcdGF3YWl0IFByb21pc2UuYWxsKFtyZXN1bWVTdHJlYW0oc3RyZWFtKSwgbG9nUHJvbWlzZV0pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHN0cmlwRmluYWxOZXdsaW5lVmFsdWUgPSBnZXRTdHJpcEZpbmFsTmV3bGluZShzdHJpcEZpbmFsTmV3bGluZSwgZmROdW1iZXIpO1xuXHRjb25zdCBpdGVyYWJsZSA9IGl0ZXJhdGVGb3JSZXN1bHQoe1xuXHRcdHN0cmVhbSxcblx0XHRvblN0cmVhbUVuZCxcblx0XHRsaW5lcyxcblx0XHRlbmNvZGluZyxcblx0XHRzdHJpcEZpbmFsTmV3bGluZTogc3RyaXBGaW5hbE5ld2xpbmVWYWx1ZSxcblx0XHRhbGxNaXhlZCxcblx0fSk7XG5cdGNvbnN0IFtvdXRwdXRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuXHRcdGdldFN0cmVhbUNvbnRlbnRzKHtcblx0XHRcdHN0cmVhbSxcblx0XHRcdGl0ZXJhYmxlLFxuXHRcdFx0ZmROdW1iZXIsXG5cdFx0XHRlbmNvZGluZyxcblx0XHRcdG1heEJ1ZmZlcixcblx0XHRcdGxpbmVzLFxuXHRcdH0pLFxuXHRcdGxvZ1Byb21pc2UsXG5cdF0pO1xuXHRyZXR1cm4gb3V0cHV0O1xufTtcblxuY29uc3QgbG9nT3V0cHV0QXN5bmMgPSBhc3luYyAoe3N0cmVhbSwgb25TdHJlYW1FbmQsIGZkTnVtYmVyLCBlbmNvZGluZywgYWxsTWl4ZWQsIHZlcmJvc2VJbmZvLCBzdHJlYW1JbmZvOiB7ZmlsZURlc2NyaXB0b3JzfX0pID0+IHtcblx0aWYgKCFzaG91bGRMb2dPdXRwdXQoe1xuXHRcdHN0ZGlvSXRlbXM6IGZpbGVEZXNjcmlwdG9yc1tmZE51bWJlcl0/LnN0ZGlvSXRlbXMsXG5cdFx0ZW5jb2RpbmcsXG5cdFx0dmVyYm9zZUluZm8sXG5cdFx0ZmROdW1iZXIsXG5cdH0pKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbGluZXNJdGVyYWJsZSA9IGl0ZXJhdGVGb3JSZXN1bHQoe1xuXHRcdHN0cmVhbSxcblx0XHRvblN0cmVhbUVuZCxcblx0XHRsaW5lczogdHJ1ZSxcblx0XHRlbmNvZGluZyxcblx0XHRzdHJpcEZpbmFsTmV3bGluZTogdHJ1ZSxcblx0XHRhbGxNaXhlZCxcblx0fSk7XG5cdGF3YWl0IGxvZ0xpbmVzKGxpbmVzSXRlcmFibGUsIHN0cmVhbSwgZmROdW1iZXIsIHZlcmJvc2VJbmZvKTtcbn07XG5cbi8vIFdoZW4gdXNpbmcgYGJ1ZmZlcjogZmFsc2VgLCB1c2VycyBuZWVkIHRvIHJlYWQgYHN1YnByb2Nlc3Muc3Rkb3V0fHN0ZGVycnxhbGxgIHJpZ2h0IGF3YXlcbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2V4ZWNhL2lzc3Vlcy83MzAgYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvZXhlY2EvcHVsbC83MjkjZGlzY3Vzc2lvbl9yMTQ2NTQ5NjMxMFxuY29uc3QgcmVzdW1lU3RyZWFtID0gYXN5bmMgc3RyZWFtID0+IHtcblx0YXdhaXQgc2V0SW1tZWRpYXRlKCk7XG5cdGlmIChzdHJlYW0ucmVhZGFibGVGbG93aW5nID09PSBudWxsKSB7XG5cdFx0c3RyZWFtLnJlc3VtZSgpO1xuXHR9XG59O1xuXG5jb25zdCBnZXRTdHJlYW1Db250ZW50cyA9IGFzeW5jICh7c3RyZWFtLCBzdHJlYW06IHtyZWFkYWJsZU9iamVjdE1vZGV9LCBpdGVyYWJsZSwgZmROdW1iZXIsIGVuY29kaW5nLCBtYXhCdWZmZXIsIGxpbmVzfSkgPT4ge1xuXHR0cnkge1xuXHRcdGlmIChyZWFkYWJsZU9iamVjdE1vZGUgfHwgbGluZXMpIHtcblx0XHRcdHJldHVybiBhd2FpdCBnZXRTdHJlYW1Bc0FycmF5KGl0ZXJhYmxlLCB7bWF4QnVmZmVyfSk7XG5cdFx0fVxuXG5cdFx0aWYgKGVuY29kaW5nID09PSAnYnVmZmVyJykge1xuXHRcdFx0cmV0dXJuIG5ldyBVaW50OEFycmF5KGF3YWl0IGdldFN0cmVhbUFzQXJyYXlCdWZmZXIoaXRlcmFibGUsIHttYXhCdWZmZXJ9KSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGF3YWl0IGdldFN0cmVhbShpdGVyYWJsZSwge21heEJ1ZmZlcn0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBoYW5kbGVCdWZmZXJlZERhdGEoaGFuZGxlTWF4QnVmZmVyKHtcblx0XHRcdGVycm9yLFxuXHRcdFx0c3RyZWFtLFxuXHRcdFx0cmVhZGFibGVPYmplY3RNb2RlLFxuXHRcdFx0bGluZXMsXG5cdFx0XHRlbmNvZGluZyxcblx0XHRcdGZkTnVtYmVyLFxuXHRcdH0pKTtcblx0fVxufTtcblxuLy8gT24gZmFpbHVyZSwgYHJlc3VsdC5zdGRvdXR8c3RkZXJyfGFsbGAgc2hvdWxkIGNvbnRhaW4gdGhlIGN1cnJlbnRseSBidWZmZXJlZCBzdHJlYW1cbi8vIFRoZXkgYXJlIGF1dG9tYXRpY2FsbHkgY2xvc2VkIGFuZCBmbHVzaGVkIGJ5IE5vZGUuanMgd2hlbiB0aGUgc3VicHJvY2VzcyBleGl0c1xuLy8gV2hlbiBgYnVmZmVyYCBpcyBgZmFsc2VgLCBgc3RyZWFtUHJvbWlzZWAgaXMgYHVuZGVmaW5lZGAgYW5kIHRoZXJlIGlzIG5vIGJ1ZmZlcmVkIGRhdGEgdG8gcmV0cmlldmVcbmV4cG9ydCBjb25zdCBnZXRCdWZmZXJlZERhdGEgPSBhc3luYyBzdHJlYW1Qcm9taXNlID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgc3RyZWFtUHJvbWlzZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gaGFuZGxlQnVmZmVyZWREYXRhKGVycm9yKTtcblx0fVxufTtcblxuLy8gRW5zdXJlIHdlIGFyZSByZXR1cm5pbmcgVWludDhBcnJheXMgd2hlbiB1c2luZyBgZW5jb2Rpbmc6ICdidWZmZXInYFxuY29uc3QgaGFuZGxlQnVmZmVyZWREYXRhID0gKHtidWZmZXJlZERhdGF9KSA9PiBpc0FycmF5QnVmZmVyKGJ1ZmZlcmVkRGF0YSlcblx0PyBuZXcgVWludDhBcnJheShidWZmZXJlZERhdGEpXG5cdDogYnVmZmVyZWREYXRhO1xuIiwgImltcG9ydCB7ZmluaXNoZWR9IGZyb20gJ25vZGU6c3RyZWFtL3Byb21pc2VzJztcblxuLy8gV3JhcHMgYGZpbmlzaGVkKHN0cmVhbSlgIHRvIGhhbmRsZSB0aGUgZm9sbG93aW5nIGNhc2U6XG4vLyAgLSBXaGVuIHRoZSBzdWJwcm9jZXNzIGV4aXRzLCBOb2RlLmpzIGF1dG9tYXRpY2FsbHkgY2FsbHMgYHN1YnByb2Nlc3Muc3RkaW4uZGVzdHJveSgpYCwgd2hpY2ggd2UgbmVlZCB0byBpZ25vcmUuXG4vLyAgLSBIb3dldmVyLCB3ZSBzdGlsbCBuZWVkIHRvIHRocm93IGlmIGBzdWJwcm9jZXNzLnN0ZGluLmRlc3Ryb3koKWAgaXMgY2FsbGVkIGJlZm9yZSBzdWJwcm9jZXNzIGV4aXQuXG5leHBvcnQgY29uc3Qgd2FpdEZvclN0cmVhbSA9IGFzeW5jIChzdHJlYW0sIGZkTnVtYmVyLCBzdHJlYW1JbmZvLCB7aXNTYW1lRGlyZWN0aW9uLCBzdG9wT25FeGl0ID0gZmFsc2V9ID0ge30pID0+IHtcblx0Y29uc3Qgc3RhdGUgPSBoYW5kbGVTdGRpbkRlc3Ryb3koc3RyZWFtLCBzdHJlYW1JbmZvKTtcblx0Y29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXHR0cnkge1xuXHRcdGF3YWl0IFByb21pc2UucmFjZShbXG5cdFx0XHQuLi4oc3RvcE9uRXhpdCA/IFtzdHJlYW1JbmZvLmV4aXRQcm9taXNlXSA6IFtdKSxcblx0XHRcdGZpbmlzaGVkKHN0cmVhbSwge2NsZWFudXA6IHRydWUsIHNpZ25hbDogYWJvcnRDb250cm9sbGVyLnNpZ25hbH0pLFxuXHRcdF0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmICghc3RhdGUuc3RkaW5DbGVhbmVkVXApIHtcblx0XHRcdGhhbmRsZVN0cmVhbUVycm9yKGVycm9yLCBmZE51bWJlciwgc3RyZWFtSW5mbywgaXNTYW1lRGlyZWN0aW9uKTtcblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0YWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG5cdH1cbn07XG5cbi8vIElmIGBzdWJwcm9jZXNzLnN0ZGluYCBpcyBkZXN0cm95ZWQgYmVmb3JlIGJlaW5nIGZ1bGx5IHdyaXR0ZW4gdG8sIGl0IGlzIGNvbnNpZGVyZWQgYWJvcnRlZCBhbmQgc2hvdWxkIHRocm93IGFuIGVycm9yLlxuLy8gVGhpcyBjYW4gaGFwcGVuIGZvciBleGFtcGxlIHdoZW4gdXNlciBjYWxsZWQgYHN1YnByb2Nlc3Muc3RkaW4uZGVzdHJveSgpYCBiZWZvcmUgYHN1YnByb2Nlc3Muc3RkaW4uZW5kKClgLlxuLy8gSG93ZXZlciwgTm9kZS5qcyBjYWxscyBgc3VicHJvY2Vzcy5zdGRpbi5kZXN0cm95KClgIG9uIGV4aXQgZm9yIGNsZWFudXAgcHVycG9zZXMuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi8wYjRjZGI0YjQyOTU2Y2JkNzAxOTA1OGU0MDllMDY3MDBhMTk5ZTExL2xpYi9pbnRlcm5hbC9jaGlsZF9wcm9jZXNzLmpzI0wyNzhcbi8vIFRoaXMgaXMgbm9ybWFsIGFuZCBzaG91bGQgbm90IHRocm93IGFuIGVycm9yLlxuLy8gVGhlcmVmb3JlLCB3ZSBuZWVkIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBib3RoIHNpdHVhdGlvbnMgdG8ga25vdyB3aGV0aGVyIHRvIHRocm93IGFuIGVycm9yLlxuLy8gVW5mb3J0dW5hdGVseSwgZXZlbnRzIChgY2xvc2VgLCBgZXJyb3JgLCBgZW5kYCwgYGV4aXRgKSBjYW5ub3QgYmUgdXNlZCBiZWNhdXNlIGAuZGVzdHJveSgpYCBjYW4gdGFrZSBhbiBhcmJpdHJhcnkgYW1vdW50IG9mIHRpbWUuXG4vLyBGb3IgZXhhbXBsZSwgYHN0ZGluOiAncGlwZSdgIGlzIGltcGxlbWVudGVkIGFzIGEgVENQIHNvY2tldCwgYW5kIGl0cyBgLmRlc3Ryb3koKWAgbWV0aG9kIHdhaXRzIGZvciBUQ1AgZGlzY29ubmVjdGlvbi5cbi8vIFRoZXJlZm9yZSBgLmRlc3Ryb3koKWAgbWlnaHQgZW5kIGJlZm9yZSBvciBhZnRlciBzdWJwcm9jZXNzIGV4aXQsIGJhc2VkIG9uIE9TIHNwZWVkIGFuZCBsb2FkLlxuLy8gVGhlIG9ubHkgd2F5IHRvIGRldGVjdCB0aGlzIGlzIHRvIHNweSBvbiBgc3VicHJvY2Vzcy5zdGRpbi5fZGVzdHJveSgpYCBieSB3cmFwcGluZyBpdC5cbi8vIElmIGBzdWJwcm9jZXNzLmV4aXRDb2RlYCBvciBgc3VicHJvY2Vzcy5zaWduYWxDb2RlYCBpcyBzZXQsIGl0IG1lYW5zIGAuZGVzdHJveSgpYCBpcyBiZWluZyBjYWxsZWQgYnkgTm9kZS5qcyBpdHNlbGYuXG5jb25zdCBoYW5kbGVTdGRpbkRlc3Ryb3kgPSAoc3RyZWFtLCB7b3JpZ2luYWxTdHJlYW1zOiBbb3JpZ2luYWxTdGRpbl0sIHN1YnByb2Nlc3N9KSA9PiB7XG5cdGNvbnN0IHN0YXRlID0ge3N0ZGluQ2xlYW5lZFVwOiBmYWxzZX07XG5cdGlmIChzdHJlYW0gPT09IG9yaWdpbmFsU3RkaW4pIHtcblx0XHRzcHlPblN0ZGluRGVzdHJveShzdHJlYW0sIHN1YnByb2Nlc3MsIHN0YXRlKTtcblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn07XG5cbmNvbnN0IHNweU9uU3RkaW5EZXN0cm95ID0gKHN1YnByb2Nlc3NTdGRpbiwgc3VicHJvY2Vzcywgc3RhdGUpID0+IHtcblx0Y29uc3Qge19kZXN0cm95fSA9IHN1YnByb2Nlc3NTdGRpbjtcblx0c3VicHJvY2Vzc1N0ZGluLl9kZXN0cm95ID0gKC4uLmRlc3Ryb3lBcmd1bWVudHMpID0+IHtcblx0XHRzZXRTdGRpbkNsZWFuZWRVcChzdWJwcm9jZXNzLCBzdGF0ZSk7XG5cdFx0X2Rlc3Ryb3kuY2FsbChzdWJwcm9jZXNzU3RkaW4sIC4uLmRlc3Ryb3lBcmd1bWVudHMpO1xuXHR9O1xufTtcblxuY29uc3Qgc2V0U3RkaW5DbGVhbmVkVXAgPSAoe2V4aXRDb2RlLCBzaWduYWxDb2RlfSwgc3RhdGUpID0+IHtcblx0aWYgKGV4aXRDb2RlICE9PSBudWxsIHx8IHNpZ25hbENvZGUgIT09IG51bGwpIHtcblx0XHRzdGF0ZS5zdGRpbkNsZWFuZWRVcCA9IHRydWU7XG5cdH1cbn07XG5cbi8vIFdlIGlnbm9yZSBFUElQRXMgb24gd3JpdGFibGUgc3RyZWFtcyBhbmQgYWJvcnRzIG9uIHJlYWRhYmxlIHN0cmVhbXMgc2luY2UgdGhvc2UgY2FuIGhhcHBlbiBub3JtYWxseS5cbi8vIFdoZW4gb25lIHN0cmVhbSBlcnJvcnMsIHRoZSBlcnJvciBpcyBwcm9wYWdhdGVkIHRvIHRoZSBvdGhlciBzdHJlYW1zIG9uIHRoZSBzYW1lIGZpbGUgZGVzY3JpcHRvci5cbi8vIFRob3NlIG90aGVyIHN0cmVhbXMgbWlnaHQgaGF2ZSBhIGRpZmZlcmVudCBkaXJlY3Rpb24gZHVlIHRvIHRoZSBhYm92ZS5cbi8vIFdoZW4gdGhpcyBoYXBwZW5zLCB0aGUgZGlyZWN0aW9uIG9mIGJvdGggdGhlIGluaXRpYWwgc3RyZWFtIGFuZCB0aGUgb3RoZXJzIHNob3VsZCB0aGVuIGJlIHRha2VuIGludG8gYWNjb3VudC5cbi8vIFRoZXJlZm9yZSwgd2Uga2VlcCB0cmFjayBvZiB3aGV0aGVyIGEgc3RyZWFtIGVycm9yIGlzIGN1cnJlbnRseSBwcm9wYWdhdGluZy5cbmNvbnN0IGhhbmRsZVN0cmVhbUVycm9yID0gKGVycm9yLCBmZE51bWJlciwgc3RyZWFtSW5mbywgaXNTYW1lRGlyZWN0aW9uKSA9PiB7XG5cdGlmICghc2hvdWxkSWdub3JlU3RyZWFtRXJyb3IoZXJyb3IsIGZkTnVtYmVyLCBzdHJlYW1JbmZvLCBpc1NhbWVEaXJlY3Rpb24pKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbmNvbnN0IHNob3VsZElnbm9yZVN0cmVhbUVycm9yID0gKGVycm9yLCBmZE51bWJlciwgc3RyZWFtSW5mbywgaXNTYW1lRGlyZWN0aW9uID0gdHJ1ZSkgPT4ge1xuXHRpZiAoc3RyZWFtSW5mby5wcm9wYWdhdGluZykge1xuXHRcdHJldHVybiBpc1N0cmVhbUVwaXBlKGVycm9yKSB8fCBpc1N0cmVhbUFib3J0KGVycm9yKTtcblx0fVxuXG5cdHN0cmVhbUluZm8ucHJvcGFnYXRpbmcgPSB0cnVlO1xuXHRyZXR1cm4gaXNJbnB1dEZpbGVEZXNjcmlwdG9yKHN0cmVhbUluZm8sIGZkTnVtYmVyKSA9PT0gaXNTYW1lRGlyZWN0aW9uXG5cdFx0PyBpc1N0cmVhbUVwaXBlKGVycm9yKVxuXHRcdDogaXNTdHJlYW1BYm9ydChlcnJvcik7XG59O1xuXG4vLyBVbmZvcnR1bmF0ZWx5LCB3ZSBjYW5ub3QgdXNlIHRoZSBzdHJlYW0ncyBjbGFzcyBvciBwcm9wZXJ0aWVzIHRvIGtub3cgd2hldGhlciBpdCBpcyByZWFkYWJsZSBvciB3cml0YWJsZS5cbi8vIEZvciBleGFtcGxlLCBgc3VicHJvY2Vzcy5zdGRpbmAgaXMgdGVjaG5pY2FsbHkgYSBEdXBsZXgsIGJ1dCBjYW4gb25seSBiZSB1c2VkIGFzIGEgd3JpdGFibGUuXG4vLyBUaGVyZWZvcmUsIHdlIG5lZWQgdG8gdXNlIHRoZSBmaWxlIGRlc2NyaXB0b3IncyBkaXJlY3Rpb24gKGBzdGRpbmAgaXMgaW5wdXQsIGBzdGRvdXRgIGlzIG91dHB1dCwgZXRjLikuXG4vLyBIb3dldmVyLCB3aGlsZSBgc3VicHJvY2Vzcy5zdGQqYCBhbmQgdHJhbnNmb3JtcyBmb2xsb3cgdGhhdCBkaXJlY3Rpb24sIGFueSBzdHJlYW0gcGFzc2VkIHRoZSBgc3RkKmAgb3B0aW9uIGhhcyB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuLy8gRm9yIGV4YW1wbGUsIGBzdWJwcm9jZXNzLnN0ZGluYCBpcyBhIHdyaXRhYmxlLCBidXQgdGhlIGBzdGRpbmAgb3B0aW9uIGlzIGEgcmVhZGFibGUuXG5leHBvcnQgY29uc3QgaXNJbnB1dEZpbGVEZXNjcmlwdG9yID0gKHtmaWxlRGVzY3JpcHRvcnN9LCBmZE51bWJlcikgPT4gZmROdW1iZXIgIT09ICdhbGwnICYmIGZpbGVEZXNjcmlwdG9yc1tmZE51bWJlcl0uZGlyZWN0aW9uID09PSAnaW5wdXQnO1xuXG4vLyBXaGVuIGBzdHJlYW0uZGVzdHJveSgpYCBpcyBjYWxsZWQgd2l0aG91dCBhbiBgZXJyb3JgIGFyZ3VtZW50LCBzdHJlYW0gaXMgYWJvcnRlZC5cbi8vIFRoaXMgaXMgdGhlIG9ubHkgd2F5IHRvIGFib3J0IGEgcmVhZGFibGUgc3RyZWFtLCB3aGljaCBjYW4gYmUgdXNlZnVsIGluIHNvbWUgaW5zdGFuY2VzLlxuLy8gVGhlcmVmb3JlLCB3ZSBpZ25vcmUgdGhpcyBlcnJvciBvbiByZWFkYWJsZSBzdHJlYW1zLlxuZXhwb3J0IGNvbnN0IGlzU3RyZWFtQWJvcnQgPSBlcnJvciA9PiBlcnJvcj8uY29kZSA9PT0gJ0VSUl9TVFJFQU1fUFJFTUFUVVJFX0NMT1NFJztcblxuLy8gV2hlbiBgc3RyZWFtLndyaXRlKClgIGlzIGNhbGxlZCBidXQgdGhlIHVuZGVybHlpbmcgc291cmNlIGhhcyBiZWVuIGNsb3NlZCwgYEVQSVBFYCBpcyBlbWl0dGVkLlxuLy8gV2hlbiBwaXBpbmcgc3VicHJvY2Vzc2VzLCB0aGUgc291cmNlIHN1YnByb2Nlc3MgdXN1YWxseSBkZWNpZGVzIHdoZW4gdG8gc3RvcCBwaXBpbmcuXG4vLyBIb3dldmVyLCB0aGVyZSBhcmUgc29tZSBpbnN0YW5jZXMgd2hlbiB0aGUgZGVzdGluYXRpb24gZG9lcyBpbnN0ZWFkLCBzdWNoIGFzIGAuLi4gfCBoZWFkIC1uMWAuXG4vLyBJdCBub3RpZmllcyB0aGUgc291cmNlIGJ5IHVzaW5nIGBFUElQRWAuXG4vLyBUaGVyZWZvcmUsIHdlIGlnbm9yZSB0aGlzIGVycm9yIG9uIHdyaXRhYmxlIHN0cmVhbXMuXG5jb25zdCBpc1N0cmVhbUVwaXBlID0gZXJyb3IgPT4gZXJyb3I/LmNvZGUgPT09ICdFUElQRSc7XG4iLCAiaW1wb3J0IHtnZXRTdHJlYW1PdXRwdXR9IGZyb20gJy4uL2lvL2NvbnRlbnRzLmpzJztcbmltcG9ydCB7d2FpdEZvclN0cmVhbSwgaXNJbnB1dEZpbGVEZXNjcmlwdG9yfSBmcm9tICcuL3dhaXQtc3RyZWFtLmpzJztcblxuLy8gUmVhZCB0aGUgY29udGVudHMgb2YgYHN1YnByb2Nlc3Muc3RkKmAgYW5kfG9yIHdhaXQgZm9yIGl0cyBjb21wbGV0aW9uXG5leHBvcnQgY29uc3Qgd2FpdEZvclN0ZGlvU3RyZWFtcyA9ICh7c3VicHJvY2VzcywgZW5jb2RpbmcsIGJ1ZmZlciwgbWF4QnVmZmVyLCBsaW5lcywgc3RyaXBGaW5hbE5ld2xpbmUsIHZlcmJvc2VJbmZvLCBzdHJlYW1JbmZvfSkgPT4gc3VicHJvY2Vzcy5zdGRpby5tYXAoKHN0cmVhbSwgZmROdW1iZXIpID0+IHdhaXRGb3JTdWJwcm9jZXNzU3RyZWFtKHtcblx0c3RyZWFtLFxuXHRmZE51bWJlcixcblx0ZW5jb2RpbmcsXG5cdGJ1ZmZlcjogYnVmZmVyW2ZkTnVtYmVyXSxcblx0bWF4QnVmZmVyOiBtYXhCdWZmZXJbZmROdW1iZXJdLFxuXHRsaW5lczogbGluZXNbZmROdW1iZXJdLFxuXHRhbGxNaXhlZDogZmFsc2UsXG5cdHN0cmlwRmluYWxOZXdsaW5lLFxuXHR2ZXJib3NlSW5mbyxcblx0c3RyZWFtSW5mbyxcbn0pKTtcblxuLy8gUmVhZCB0aGUgY29udGVudHMgb2YgYHN1YnByb2Nlc3Muc3RkKmAgb3IgYHN1YnByb2Nlc3MuYWxsYCBhbmR8b3Igd2FpdCBmb3IgaXRzIGNvbXBsZXRpb25cbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3VicHJvY2Vzc1N0cmVhbSA9IGFzeW5jICh7c3RyZWFtLCBmZE51bWJlciwgZW5jb2RpbmcsIGJ1ZmZlciwgbWF4QnVmZmVyLCBsaW5lcywgYWxsTWl4ZWQsIHN0cmlwRmluYWxOZXdsaW5lLCB2ZXJib3NlSW5mbywgc3RyZWFtSW5mb30pID0+IHtcblx0aWYgKCFzdHJlYW0pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBvblN0cmVhbUVuZCA9IHdhaXRGb3JTdHJlYW0oc3RyZWFtLCBmZE51bWJlciwgc3RyZWFtSW5mbyk7XG5cdGlmIChpc0lucHV0RmlsZURlc2NyaXB0b3Ioc3RyZWFtSW5mbywgZmROdW1iZXIpKSB7XG5cdFx0YXdhaXQgb25TdHJlYW1FbmQ7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgW291dHB1dF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG5cdFx0Z2V0U3RyZWFtT3V0cHV0KHtcblx0XHRcdHN0cmVhbSxcblx0XHRcdG9uU3RyZWFtRW5kLFxuXHRcdFx0ZmROdW1iZXIsXG5cdFx0XHRlbmNvZGluZyxcblx0XHRcdGJ1ZmZlcixcblx0XHRcdG1heEJ1ZmZlcixcblx0XHRcdGxpbmVzLFxuXHRcdFx0YWxsTWl4ZWQsXG5cdFx0XHRzdHJpcEZpbmFsTmV3bGluZSxcblx0XHRcdHZlcmJvc2VJbmZvLFxuXHRcdFx0c3RyZWFtSW5mbyxcblx0XHR9KSxcblx0XHRvblN0cmVhbUVuZCxcblx0XSk7XG5cdHJldHVybiBvdXRwdXQ7XG59O1xuIiwgImltcG9ydCBtZXJnZVN0cmVhbXMgZnJvbSAnQHNpbmRyZXNvcmh1cy9tZXJnZS1zdHJlYW1zJztcbmltcG9ydCB7d2FpdEZvclN1YnByb2Nlc3NTdHJlYW19IGZyb20gJy4vc3RkaW8uanMnO1xuXG4vLyBgYWxsYCBpbnRlcmxlYXZlcyBgc3Rkb3V0YCBhbmQgYHN0ZGVycmBcbmV4cG9ydCBjb25zdCBtYWtlQWxsU3RyZWFtID0gKHtzdGRvdXQsIHN0ZGVycn0sIHthbGx9KSA9PiBhbGwgJiYgKHN0ZG91dCB8fCBzdGRlcnIpXG5cdD8gbWVyZ2VTdHJlYW1zKFtzdGRvdXQsIHN0ZGVycl0uZmlsdGVyKEJvb2xlYW4pKVxuXHQ6IHVuZGVmaW5lZDtcblxuLy8gUmVhZCB0aGUgY29udGVudHMgb2YgYHN1YnByb2Nlc3MuYWxsYCBhbmR8b3Igd2FpdCBmb3IgaXRzIGNvbXBsZXRpb25cbmV4cG9ydCBjb25zdCB3YWl0Rm9yQWxsU3RyZWFtID0gKHtzdWJwcm9jZXNzLCBlbmNvZGluZywgYnVmZmVyLCBtYXhCdWZmZXIsIGxpbmVzLCBzdHJpcEZpbmFsTmV3bGluZSwgdmVyYm9zZUluZm8sIHN0cmVhbUluZm99KSA9PiB3YWl0Rm9yU3VicHJvY2Vzc1N0cmVhbSh7XG5cdC4uLmdldEFsbFN0cmVhbShzdWJwcm9jZXNzLCBidWZmZXIpLFxuXHRmZE51bWJlcjogJ2FsbCcsXG5cdGVuY29kaW5nLFxuXHRtYXhCdWZmZXI6IG1heEJ1ZmZlclsxXSArIG1heEJ1ZmZlclsyXSxcblx0bGluZXM6IGxpbmVzWzFdIHx8IGxpbmVzWzJdLFxuXHRhbGxNaXhlZDogZ2V0QWxsTWl4ZWQoc3VicHJvY2VzcyksXG5cdHN0cmlwRmluYWxOZXdsaW5lLFxuXHR2ZXJib3NlSW5mbyxcblx0c3RyZWFtSW5mbyxcbn0pO1xuXG5jb25zdCBnZXRBbGxTdHJlYW0gPSAoe3N0ZG91dCwgc3RkZXJyLCBhbGx9LCBbLCBidWZmZXJTdGRvdXQsIGJ1ZmZlclN0ZGVycl0pID0+IHtcblx0Y29uc3QgYnVmZmVyID0gYnVmZmVyU3Rkb3V0IHx8IGJ1ZmZlclN0ZGVycjtcblx0aWYgKCFidWZmZXIpIHtcblx0XHRyZXR1cm4ge3N0cmVhbTogYWxsLCBidWZmZXJ9O1xuXHR9XG5cblx0aWYgKCFidWZmZXJTdGRvdXQpIHtcblx0XHRyZXR1cm4ge3N0cmVhbTogc3RkZXJyLCBidWZmZXJ9O1xuXHR9XG5cblx0aWYgKCFidWZmZXJTdGRlcnIpIHtcblx0XHRyZXR1cm4ge3N0cmVhbTogc3Rkb3V0LCBidWZmZXJ9O1xuXHR9XG5cblx0cmV0dXJuIHtzdHJlYW06IGFsbCwgYnVmZmVyfTtcbn07XG5cbi8vIFdoZW4gYHN1YnByb2Nlc3Muc3Rkb3V0YCBpcyBpbiBvYmplY3RNb2RlIGJ1dCBub3QgYHN1YnByb2Nlc3Muc3RkZXJyYCAob3IgdGhlIG9wcG9zaXRlKSwgd2UgbmVlZCB0byB1c2UgYm90aDpcbi8vICAtIGBnZXRTdHJlYW1Bc0FycmF5KClgIGZvciB0aGUgY2h1bmtzIGluIG9iamVjdE1vZGUsIHRvIHJldHVybiBhcyBhbiBhcnJheSB3aXRob3V0IGNoYW5naW5nIGVhY2ggY2h1bmtcbi8vICAtIGBnZXRTdHJlYW1Bc0FycmF5QnVmZmVyKClgIG9yIGBnZXRTdHJlYW0oKWAgZm9yIHRoZSBjaHVua3Mgbm90IGluIG9iamVjdE1vZGUsIHRvIGNvbnZlcnQgdGhlbSBmcm9tIEJ1ZmZlcnMgdG8gc3RyaW5nIG9yIFVpbnQ4QXJyYXlcbi8vIFdlIGRvIHRoaXMgYnkgZW11bGF0aW5nIHRoZSBCdWZmZXIgLT4gc3RyaW5nfFVpbnQ4QXJyYXkgY29udmVyc2lvbiBwZXJmb3JtZWQgYnkgYGdldC1zdHJlYW1gIHdpdGggb3VyIG93biwgd2hpY2ggaXMgaWRlbnRpY2FsLlxuY29uc3QgZ2V0QWxsTWl4ZWQgPSAoe2FsbCwgc3Rkb3V0LCBzdGRlcnJ9KSA9PiBhbGxcblx0JiYgc3Rkb3V0XG5cdCYmIHN0ZGVyclxuXHQmJiBzdGRvdXQucmVhZGFibGVPYmplY3RNb2RlICE9PSBzdGRlcnIucmVhZGFibGVPYmplY3RNb2RlO1xuIiwgImltcG9ydCB7dmVyYm9zZUxvZywgc2VyaWFsaXplVmVyYm9zZU1lc3NhZ2V9IGZyb20gJy4vbG9nLmpzJztcbmltcG9ydCB7aXNGdWxsVmVyYm9zZX0gZnJvbSAnLi92YWx1ZXMuanMnO1xuXG4vLyBXaGVuIGB2ZXJib3NlYCBpcyBgJ2Z1bGwnYCwgcHJpbnQgSVBDIG1lc3NhZ2VzIGZyb20gdGhlIHN1YnByb2Nlc3NcbmV4cG9ydCBjb25zdCBzaG91bGRMb2dJcGMgPSB2ZXJib3NlSW5mbyA9PiBpc0Z1bGxWZXJib3NlKHZlcmJvc2VJbmZvLCAnaXBjJyk7XG5cbmV4cG9ydCBjb25zdCBsb2dJcGNPdXRwdXQgPSAobWVzc2FnZSwgdmVyYm9zZUluZm8pID0+IHtcblx0Y29uc3QgdmVyYm9zZU1lc3NhZ2UgPSBzZXJpYWxpemVWZXJib3NlTWVzc2FnZShtZXNzYWdlKTtcblx0dmVyYm9zZUxvZyh7XG5cdFx0dHlwZTogJ2lwYycsXG5cdFx0dmVyYm9zZU1lc3NhZ2UsXG5cdFx0ZmROdW1iZXI6ICdpcGMnLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHtjaGVja0lwY01heEJ1ZmZlcn0gZnJvbSAnLi4vaW8vbWF4LWJ1ZmZlci5qcyc7XG5pbXBvcnQge3Nob3VsZExvZ0lwYywgbG9nSXBjT3V0cHV0fSBmcm9tICcuLi92ZXJib3NlL2lwYy5qcyc7XG5pbXBvcnQge2dldEZkU3BlY2lmaWNWYWx1ZX0gZnJvbSAnLi4vYXJndW1lbnRzL3NwZWNpZmljLmpzJztcbmltcG9ydCB7bG9vcE9uTWVzc2FnZXN9IGZyb20gJy4vZ2V0LWVhY2guanMnO1xuXG4vLyBJdGVyYXRlIHRocm91Z2ggSVBDIG1lc3NhZ2VzIHNlbnQgYnkgdGhlIHN1YnByb2Nlc3NcbmV4cG9ydCBjb25zdCB3YWl0Rm9ySXBjT3V0cHV0ID0gYXN5bmMgKHtcblx0c3VicHJvY2Vzcyxcblx0YnVmZmVyOiBidWZmZXJBcnJheSxcblx0bWF4QnVmZmVyOiBtYXhCdWZmZXJBcnJheSxcblx0aXBjLFxuXHRpcGNPdXRwdXQsXG5cdHZlcmJvc2VJbmZvLFxufSkgPT4ge1xuXHRpZiAoIWlwYykge1xuXHRcdHJldHVybiBpcGNPdXRwdXQ7XG5cdH1cblxuXHRjb25zdCBpc1ZlcmJvc2UgPSBzaG91bGRMb2dJcGModmVyYm9zZUluZm8pO1xuXHRjb25zdCBidWZmZXIgPSBnZXRGZFNwZWNpZmljVmFsdWUoYnVmZmVyQXJyYXksICdpcGMnKTtcblx0Y29uc3QgbWF4QnVmZmVyID0gZ2V0RmRTcGVjaWZpY1ZhbHVlKG1heEJ1ZmZlckFycmF5LCAnaXBjJyk7XG5cblx0Zm9yIGF3YWl0IChjb25zdCBtZXNzYWdlIG9mIGxvb3BPbk1lc3NhZ2VzKHtcblx0XHRhbnlQcm9jZXNzOiBzdWJwcm9jZXNzLFxuXHRcdGNoYW5uZWw6IHN1YnByb2Nlc3MuY2hhbm5lbCxcblx0XHRpc1N1YnByb2Nlc3M6IGZhbHNlLFxuXHRcdGlwYyxcblx0XHRzaG91bGRBd2FpdDogZmFsc2UsXG5cdFx0cmVmZXJlbmNlOiB0cnVlLFxuXHR9KSkge1xuXHRcdGlmIChidWZmZXIpIHtcblx0XHRcdGNoZWNrSXBjTWF4QnVmZmVyKHN1YnByb2Nlc3MsIGlwY091dHB1dCwgbWF4QnVmZmVyKTtcblx0XHRcdGlwY091dHB1dC5wdXNoKG1lc3NhZ2UpO1xuXHRcdH1cblxuXHRcdGlmIChpc1ZlcmJvc2UpIHtcblx0XHRcdGxvZ0lwY091dHB1dChtZXNzYWdlLCB2ZXJib3NlSW5mbyk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGlwY091dHB1dDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRCdWZmZXJlZElwY091dHB1dCA9IGFzeW5jIChpcGNPdXRwdXRQcm9taXNlLCBpcGNPdXRwdXQpID0+IHtcblx0YXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFtpcGNPdXRwdXRQcm9taXNlXSk7XG5cdHJldHVybiBpcGNPdXRwdXQ7XG59O1xuIiwgImltcG9ydCB7b25jZX0gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtpc1N0cmVhbSBhcyBpc05vZGVTdHJlYW19IGZyb20gJ2lzLXN0cmVhbSc7XG5pbXBvcnQge3Rocm93T25UaW1lb3V0fSBmcm9tICcuLi90ZXJtaW5hdGUvdGltZW91dC5qcyc7XG5pbXBvcnQge3Rocm93T25DYW5jZWx9IGZyb20gJy4uL3Rlcm1pbmF0ZS9jYW5jZWwuanMnO1xuaW1wb3J0IHt0aHJvd09uR3JhY2VmdWxDYW5jZWx9IGZyb20gJy4uL3Rlcm1pbmF0ZS9ncmFjZWZ1bC5qcyc7XG5pbXBvcnQge2lzU3RhbmRhcmRTdHJlYW19IGZyb20gJy4uL3V0aWxzL3N0YW5kYXJkLXN0cmVhbS5qcyc7XG5pbXBvcnQge1RSQU5TRk9STV9UWVBFU30gZnJvbSAnLi4vc3RkaW8vdHlwZS5qcyc7XG5pbXBvcnQge2dldEJ1ZmZlcmVkRGF0YX0gZnJvbSAnLi4vaW8vY29udGVudHMuanMnO1xuaW1wb3J0IHt3YWl0Rm9ySXBjT3V0cHV0LCBnZXRCdWZmZXJlZElwY091dHB1dH0gZnJvbSAnLi4vaXBjL2J1ZmZlci1tZXNzYWdlcy5qcyc7XG5pbXBvcnQge3NlbmRJcGNJbnB1dH0gZnJvbSAnLi4vaXBjL2lwYy1pbnB1dC5qcyc7XG5pbXBvcnQge3dhaXRGb3JBbGxTdHJlYW19IGZyb20gJy4vYWxsLWFzeW5jLmpzJztcbmltcG9ydCB7d2FpdEZvclN0ZGlvU3RyZWFtc30gZnJvbSAnLi9zdGRpby5qcyc7XG5pbXBvcnQge3dhaXRGb3JFeGl0LCB3YWl0Rm9yU3VjY2Vzc2Z1bEV4aXR9IGZyb20gJy4vZXhpdC1hc3luYy5qcyc7XG5pbXBvcnQge3dhaXRGb3JTdHJlYW19IGZyb20gJy4vd2FpdC1zdHJlYW0uanMnO1xuXG4vLyBSZXRyaWV2ZSByZXN1bHQgb2Ygc3VicHJvY2VzczogZXhpdCBjb2RlLCBzaWduYWwsIGVycm9yLCBzdHJlYW1zIChzdGRvdXQvc3RkZXJyL2FsbClcbmV4cG9ydCBjb25zdCB3YWl0Rm9yU3VicHJvY2Vzc1Jlc3VsdCA9IGFzeW5jICh7XG5cdHN1YnByb2Nlc3MsXG5cdG9wdGlvbnM6IHtcblx0XHRlbmNvZGluZyxcblx0XHRidWZmZXIsXG5cdFx0bWF4QnVmZmVyLFxuXHRcdGxpbmVzLFxuXHRcdHRpbWVvdXREdXJhdGlvbjogdGltZW91dCxcblx0XHRjYW5jZWxTaWduYWwsXG5cdFx0Z3JhY2VmdWxDYW5jZWwsXG5cdFx0Zm9yY2VLaWxsQWZ0ZXJEZWxheSxcblx0XHRzdHJpcEZpbmFsTmV3bGluZSxcblx0XHRpcGMsXG5cdFx0aXBjSW5wdXQsXG5cdH0sXG5cdGNvbnRleHQsXG5cdHZlcmJvc2VJbmZvLFxuXHRmaWxlRGVzY3JpcHRvcnMsXG5cdG9yaWdpbmFsU3RyZWFtcyxcblx0b25JbnRlcm5hbEVycm9yLFxuXHRjb250cm9sbGVyLFxufSkgPT4ge1xuXHRjb25zdCBleGl0UHJvbWlzZSA9IHdhaXRGb3JFeGl0KHN1YnByb2Nlc3MsIGNvbnRleHQpO1xuXHRjb25zdCBzdHJlYW1JbmZvID0ge1xuXHRcdG9yaWdpbmFsU3RyZWFtcyxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdFx0c3VicHJvY2Vzcyxcblx0XHRleGl0UHJvbWlzZSxcblx0XHRwcm9wYWdhdGluZzogZmFsc2UsXG5cdH07XG5cblx0Y29uc3Qgc3RkaW9Qcm9taXNlcyA9IHdhaXRGb3JTdGRpb1N0cmVhbXMoe1xuXHRcdHN1YnByb2Nlc3MsXG5cdFx0ZW5jb2RpbmcsXG5cdFx0YnVmZmVyLFxuXHRcdG1heEJ1ZmZlcixcblx0XHRsaW5lcyxcblx0XHRzdHJpcEZpbmFsTmV3bGluZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRzdHJlYW1JbmZvLFxuXHR9KTtcblx0Y29uc3QgYWxsUHJvbWlzZSA9IHdhaXRGb3JBbGxTdHJlYW0oe1xuXHRcdHN1YnByb2Nlc3MsXG5cdFx0ZW5jb2RpbmcsXG5cdFx0YnVmZmVyLFxuXHRcdG1heEJ1ZmZlcixcblx0XHRsaW5lcyxcblx0XHRzdHJpcEZpbmFsTmV3bGluZSxcblx0XHR2ZXJib3NlSW5mbyxcblx0XHRzdHJlYW1JbmZvLFxuXHR9KTtcblx0Y29uc3QgaXBjT3V0cHV0ID0gW107XG5cdGNvbnN0IGlwY091dHB1dFByb21pc2UgPSB3YWl0Rm9ySXBjT3V0cHV0KHtcblx0XHRzdWJwcm9jZXNzLFxuXHRcdGJ1ZmZlcixcblx0XHRtYXhCdWZmZXIsXG5cdFx0aXBjLFxuXHRcdGlwY091dHB1dCxcblx0XHR2ZXJib3NlSW5mbyxcblx0fSk7XG5cdGNvbnN0IG9yaWdpbmFsUHJvbWlzZXMgPSB3YWl0Rm9yT3JpZ2luYWxTdHJlYW1zKG9yaWdpbmFsU3RyZWFtcywgc3VicHJvY2Vzcywgc3RyZWFtSW5mbyk7XG5cdGNvbnN0IGN1c3RvbVN0cmVhbXNFbmRQcm9taXNlcyA9IHdhaXRGb3JDdXN0b21TdHJlYW1zRW5kKGZpbGVEZXNjcmlwdG9ycywgc3RyZWFtSW5mbyk7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgUHJvbWlzZS5yYWNlKFtcblx0XHRcdFByb21pc2UuYWxsKFtcblx0XHRcdFx0e30sXG5cdFx0XHRcdHdhaXRGb3JTdWNjZXNzZnVsRXhpdChleGl0UHJvbWlzZSksXG5cdFx0XHRcdFByb21pc2UuYWxsKHN0ZGlvUHJvbWlzZXMpLFxuXHRcdFx0XHRhbGxQcm9taXNlLFxuXHRcdFx0XHRpcGNPdXRwdXRQcm9taXNlLFxuXHRcdFx0XHRzZW5kSXBjSW5wdXQoc3VicHJvY2VzcywgaXBjSW5wdXQpLFxuXHRcdFx0XHQuLi5vcmlnaW5hbFByb21pc2VzLFxuXHRcdFx0XHQuLi5jdXN0b21TdHJlYW1zRW5kUHJvbWlzZXMsXG5cdFx0XHRdKSxcblx0XHRcdG9uSW50ZXJuYWxFcnJvcixcblx0XHRcdHRocm93T25TdWJwcm9jZXNzRXJyb3Ioc3VicHJvY2VzcywgY29udHJvbGxlciksXG5cdFx0XHQuLi50aHJvd09uVGltZW91dChzdWJwcm9jZXNzLCB0aW1lb3V0LCBjb250ZXh0LCBjb250cm9sbGVyKSxcblx0XHRcdC4uLnRocm93T25DYW5jZWwoe1xuXHRcdFx0XHRzdWJwcm9jZXNzLFxuXHRcdFx0XHRjYW5jZWxTaWduYWwsXG5cdFx0XHRcdGdyYWNlZnVsQ2FuY2VsLFxuXHRcdFx0XHRjb250ZXh0LFxuXHRcdFx0XHRjb250cm9sbGVyLFxuXHRcdFx0fSksXG5cdFx0XHQuLi50aHJvd09uR3JhY2VmdWxDYW5jZWwoe1xuXHRcdFx0XHRzdWJwcm9jZXNzLFxuXHRcdFx0XHRjYW5jZWxTaWduYWwsXG5cdFx0XHRcdGdyYWNlZnVsQ2FuY2VsLFxuXHRcdFx0XHRmb3JjZUtpbGxBZnRlckRlbGF5LFxuXHRcdFx0XHRjb250ZXh0LFxuXHRcdFx0XHRjb250cm9sbGVyLFxuXHRcdFx0fSksXG5cdFx0XSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29udGV4dC50ZXJtaW5hdGlvblJlYXNvbiA/Pz0gJ290aGVyJztcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoW1xuXHRcdFx0e2Vycm9yfSxcblx0XHRcdGV4aXRQcm9taXNlLFxuXHRcdFx0UHJvbWlzZS5hbGwoc3RkaW9Qcm9taXNlcy5tYXAoc3RkaW9Qcm9taXNlID0+IGdldEJ1ZmZlcmVkRGF0YShzdGRpb1Byb21pc2UpKSksXG5cdFx0XHRnZXRCdWZmZXJlZERhdGEoYWxsUHJvbWlzZSksXG5cdFx0XHRnZXRCdWZmZXJlZElwY091dHB1dChpcGNPdXRwdXRQcm9taXNlLCBpcGNPdXRwdXQpLFxuXHRcdFx0UHJvbWlzZS5hbGxTZXR0bGVkKG9yaWdpbmFsUHJvbWlzZXMpLFxuXHRcdFx0UHJvbWlzZS5hbGxTZXR0bGVkKGN1c3RvbVN0cmVhbXNFbmRQcm9taXNlcyksXG5cdFx0XSk7XG5cdH1cbn07XG5cbi8vIFRyYW5zZm9ybXMgcmVwbGFjZSBgc3VicHJvY2Vzcy5zdGQqYCwgd2hpY2ggbWVhbnMgdGhleSBhcmUgbm90IGV4cG9zZWQgdG8gdXNlcnMuXG4vLyBIb3dldmVyLCB3ZSBzdGlsbCB3YW50IHRvIHdhaXQgZm9yIHRoZWlyIGNvbXBsZXRpb24uXG5jb25zdCB3YWl0Rm9yT3JpZ2luYWxTdHJlYW1zID0gKG9yaWdpbmFsU3RyZWFtcywgc3VicHJvY2Vzcywgc3RyZWFtSW5mbykgPT5cblx0b3JpZ2luYWxTdHJlYW1zLm1hcCgoc3RyZWFtLCBmZE51bWJlcikgPT4gc3RyZWFtID09PSBzdWJwcm9jZXNzLnN0ZGlvW2ZkTnVtYmVyXVxuXHRcdD8gdW5kZWZpbmVkXG5cdFx0OiB3YWl0Rm9yU3RyZWFtKHN0cmVhbSwgZmROdW1iZXIsIHN0cmVhbUluZm8pKTtcblxuLy8gU29tZSBgc3RkaW5gL2BzdGRvdXRgL2BzdGRlcnJgIG9wdGlvbnMgY3JlYXRlIGEgc3RyZWFtLCBlLmcuIHdoZW4gcGFzc2luZyBhIGZpbGUgcGF0aC5cbi8vIFRoZSBgLnBpcGUoKWAgbWV0aG9kIGF1dG9tYXRpY2FsbHkgZW5kcyB0aGF0IHN0cmVhbSB3aGVuIGBzdWJwcm9jZXNzYCBlbmRzLlxuLy8gVGhpcyBtYWtlcyBzdXJlIHdlIHdhaXQgZm9yIHRoZSBjb21wbGV0aW9uIG9mIHRob3NlIHN0cmVhbXMsIGluIG9yZGVyIHRvIGNhdGNoIGFueSBlcnJvci5cbmNvbnN0IHdhaXRGb3JDdXN0b21TdHJlYW1zRW5kID0gKGZpbGVEZXNjcmlwdG9ycywgc3RyZWFtSW5mbykgPT4gZmlsZURlc2NyaXB0b3JzLmZsYXRNYXAoKHtzdGRpb0l0ZW1zfSwgZmROdW1iZXIpID0+IHN0ZGlvSXRlbXNcblx0LmZpbHRlcigoe3ZhbHVlLCBzdHJlYW0gPSB2YWx1ZX0pID0+IGlzTm9kZVN0cmVhbShzdHJlYW0sIHtjaGVja09wZW46IGZhbHNlfSkgJiYgIWlzU3RhbmRhcmRTdHJlYW0oc3RyZWFtKSlcblx0Lm1hcCgoe3R5cGUsIHZhbHVlLCBzdHJlYW0gPSB2YWx1ZX0pID0+IHdhaXRGb3JTdHJlYW0oc3RyZWFtLCBmZE51bWJlciwgc3RyZWFtSW5mbywge1xuXHRcdGlzU2FtZURpcmVjdGlvbjogVFJBTlNGT1JNX1RZUEVTLmhhcyh0eXBlKSxcblx0XHRzdG9wT25FeGl0OiB0eXBlID09PSAnbmF0aXZlJyxcblx0fSkpKTtcblxuLy8gRmFpbHMgd2hlbiB0aGUgc3VicHJvY2VzcyBlbWl0cyBhbiBgZXJyb3JgIGV2ZW50XG5jb25zdCB0aHJvd09uU3VicHJvY2Vzc0Vycm9yID0gYXN5bmMgKHN1YnByb2Nlc3MsIHtzaWduYWx9KSA9PiB7XG5cdGNvbnN0IFtlcnJvcl0gPSBhd2FpdCBvbmNlKHN1YnByb2Nlc3MsICdlcnJvcicsIHtzaWduYWx9KTtcblx0dGhyb3cgZXJyb3I7XG59O1xuIiwgImltcG9ydCB7Y3JlYXRlRGVmZXJyZWR9IGZyb20gJy4uL3V0aWxzL2RlZmVycmVkLmpzJztcblxuLy8gV2hlbiB1c2luZyBtdWx0aXBsZSBgLnJlYWRhYmxlKClgL2Aud3JpdGFibGUoKWAvYC5kdXBsZXgoKWAsIGBmaW5hbGAgYW5kIGBkZXN0cm95YCBzaG91bGQgd2FpdCBmb3Igb3RoZXIgc3RyZWFtc1xuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVDb25jdXJyZW50U3RyZWFtcyA9ICgpID0+ICh7XG5cdHJlYWRhYmxlRGVzdHJveTogbmV3IFdlYWtNYXAoKSxcblx0d3JpdGFibGVGaW5hbDogbmV3IFdlYWtNYXAoKSxcblx0d3JpdGFibGVEZXN0cm95OiBuZXcgV2Vha01hcCgpLFxufSk7XG5cbi8vIEVhY2ggZmlsZSBkZXNjcmlwdG9yICsgYHdhaXROYW1lYCBoYXMgaXRzIG93biBhcnJheSBvZiBwcm9taXNlcy5cbi8vIEVhY2ggcHJvbWlzZSBpcyBhIHNpbmdsZSBgLnJlYWRhYmxlKClgL2Aud3JpdGFibGUoKWAvYC5kdXBsZXgoKWAgY2FsbC5cbmV4cG9ydCBjb25zdCBhZGRDb25jdXJyZW50U3RyZWFtID0gKGNvbmN1cnJlbnRTdHJlYW1zLCBzdHJlYW0sIHdhaXROYW1lKSA9PiB7XG5cdGNvbnN0IHdlYWtNYXAgPSBjb25jdXJyZW50U3RyZWFtc1t3YWl0TmFtZV07XG5cdGlmICghd2Vha01hcC5oYXMoc3RyZWFtKSkge1xuXHRcdHdlYWtNYXAuc2V0KHN0cmVhbSwgW10pO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXMgPSB3ZWFrTWFwLmdldChzdHJlYW0pO1xuXHRjb25zdCBwcm9taXNlID0gY3JlYXRlRGVmZXJyZWQoKTtcblx0cHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0Y29uc3QgcmVzb2x2ZSA9IHByb21pc2UucmVzb2x2ZS5iaW5kKHByb21pc2UpO1xuXHRyZXR1cm4ge3Jlc29sdmUsIHByb21pc2VzfTtcbn07XG5cbi8vIFdhaXQgZm9yIG90aGVyIHN0cmVhbXMsIGJ1dCBzdG9wIHdhaXRpbmcgd2hlbiBzdWJwcm9jZXNzIGVuZHNcbmV4cG9ydCBjb25zdCB3YWl0Rm9yQ29uY3VycmVudFN0cmVhbXMgPSBhc3luYyAoe3Jlc29sdmUsIHByb21pc2VzfSwgc3VicHJvY2VzcykgPT4ge1xuXHRyZXNvbHZlKCk7XG5cdGNvbnN0IFtpc1N1YnByb2Nlc3NFeGl0XSA9IGF3YWl0IFByb21pc2UucmFjZShbXG5cdFx0UHJvbWlzZS5hbGxTZXR0bGVkKFt0cnVlLCBzdWJwcm9jZXNzXSksXG5cdFx0UHJvbWlzZS5hbGwoW2ZhbHNlLCAuLi5wcm9taXNlc10pLFxuXHRdKTtcblx0cmV0dXJuICFpc1N1YnByb2Nlc3NFeGl0O1xufTtcbiIsICJpbXBvcnQge2ZpbmlzaGVkfSBmcm9tICdub2RlOnN0cmVhbS9wcm9taXNlcyc7XG5pbXBvcnQge2lzU3RyZWFtQWJvcnR9IGZyb20gJy4uL3Jlc29sdmUvd2FpdC1zdHJlYW0uanMnO1xuXG5leHBvcnQgY29uc3Qgc2FmZVdhaXRGb3JTdWJwcm9jZXNzU3RkaW4gPSBhc3luYyBzdWJwcm9jZXNzU3RkaW4gPT4ge1xuXHRpZiAoc3VicHJvY2Vzc1N0ZGluID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGF3YWl0IHdhaXRGb3JTdWJwcm9jZXNzU3RkaW4oc3VicHJvY2Vzc1N0ZGluKTtcblx0fSBjYXRjaCB7fVxufTtcblxuZXhwb3J0IGNvbnN0IHNhZmVXYWl0Rm9yU3VicHJvY2Vzc1N0ZG91dCA9IGFzeW5jIHN1YnByb2Nlc3NTdGRvdXQgPT4ge1xuXHRpZiAoc3VicHJvY2Vzc1N0ZG91dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRhd2FpdCB3YWl0Rm9yU3VicHJvY2Vzc1N0ZG91dChzdWJwcm9jZXNzU3Rkb3V0KTtcblx0fSBjYXRjaCB7fVxufTtcblxuZXhwb3J0IGNvbnN0IHdhaXRGb3JTdWJwcm9jZXNzU3RkaW4gPSBhc3luYyBzdWJwcm9jZXNzU3RkaW4gPT4ge1xuXHRhd2FpdCBmaW5pc2hlZChzdWJwcm9jZXNzU3RkaW4sIHtjbGVhbnVwOiB0cnVlLCByZWFkYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgd2FpdEZvclN1YnByb2Nlc3NTdGRvdXQgPSBhc3luYyBzdWJwcm9jZXNzU3Rkb3V0ID0+IHtcblx0YXdhaXQgZmluaXNoZWQoc3VicHJvY2Vzc1N0ZG91dCwge2NsZWFudXA6IHRydWUsIHJlYWRhYmxlOiB0cnVlLCB3cml0YWJsZTogZmFsc2V9KTtcbn07XG5cbi8vIFdoZW4gYHJlYWRhYmxlYCBvciBgd3JpdGFibGVgIGFib3J0cy9lcnJvcnMsIGF3YWl0cyB0aGUgc3VicHJvY2VzcywgZm9yIHRoZSByZWFzb24gbWVudGlvbmVkIGFib3ZlXG5leHBvcnQgY29uc3Qgd2FpdEZvclN1YnByb2Nlc3MgPSBhc3luYyAoc3VicHJvY2VzcywgZXJyb3IpID0+IHtcblx0YXdhaXQgc3VicHJvY2Vzcztcblx0aWYgKGVycm9yKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZXN0cm95T3RoZXJTdHJlYW0gPSAoc3RyZWFtLCBpc09wZW4sIGVycm9yKSA9PiB7XG5cdGlmIChlcnJvciAmJiAhaXNTdHJlYW1BYm9ydChlcnJvcikpIHtcblx0XHRzdHJlYW0uZGVzdHJveShlcnJvcik7XG5cdH0gZWxzZSBpZiAoaXNPcGVuKSB7XG5cdFx0c3RyZWFtLmRlc3Ryb3koKTtcblx0fVxufTtcbiIsICJpbXBvcnQge1JlYWRhYmxlfSBmcm9tICdub2RlOnN0cmVhbSc7XG5pbXBvcnQge2NhbGxiYWNraWZ5fSBmcm9tICdub2RlOnV0aWwnO1xuaW1wb3J0IHtCSU5BUllfRU5DT0RJTkdTfSBmcm9tICcuLi9hcmd1bWVudHMvZW5jb2Rpbmctb3B0aW9uLmpzJztcbmltcG9ydCB7Z2V0RnJvbVN0cmVhbX0gZnJvbSAnLi4vYXJndW1lbnRzL2ZkLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtpdGVyYXRlT25TdWJwcm9jZXNzU3RyZWFtLCBERUZBVUxUX09CSkVDVF9ISUdIX1dBVEVSX01BUkt9IGZyb20gJy4uL2lvL2l0ZXJhdGUuanMnO1xuaW1wb3J0IHtjcmVhdGVEZWZlcnJlZH0gZnJvbSAnLi4vdXRpbHMvZGVmZXJyZWQuanMnO1xuaW1wb3J0IHthZGRDb25jdXJyZW50U3RyZWFtLCB3YWl0Rm9yQ29uY3VycmVudFN0cmVhbXN9IGZyb20gJy4vY29uY3VycmVudC5qcyc7XG5pbXBvcnQge1xuXHRzYWZlV2FpdEZvclN1YnByb2Nlc3NTdGRpbixcblx0d2FpdEZvclN1YnByb2Nlc3NTdGRvdXQsXG5cdHdhaXRGb3JTdWJwcm9jZXNzLFxuXHRkZXN0cm95T3RoZXJTdHJlYW0sXG59IGZyb20gJy4vc2hhcmVkLmpzJztcblxuLy8gQ3JlYXRlIGEgYFJlYWRhYmxlYCBzdHJlYW0gdGhhdCBmb3J3YXJkcyBmcm9tIGBzdGRvdXRgIGFuZCBhd2FpdHMgdGhlIHN1YnByb2Nlc3NcbmV4cG9ydCBjb25zdCBjcmVhdGVSZWFkYWJsZSA9ICh7c3VicHJvY2VzcywgY29uY3VycmVudFN0cmVhbXMsIGVuY29kaW5nfSwge2Zyb20sIGJpbmFyeTogYmluYXJ5T3B0aW9uID0gdHJ1ZSwgcHJlc2VydmVOZXdsaW5lcyA9IHRydWV9ID0ge30pID0+IHtcblx0Y29uc3QgYmluYXJ5ID0gYmluYXJ5T3B0aW9uIHx8IEJJTkFSWV9FTkNPRElOR1MuaGFzKGVuY29kaW5nKTtcblx0Y29uc3Qge3N1YnByb2Nlc3NTdGRvdXQsIHdhaXRSZWFkYWJsZURlc3Ryb3l9ID0gZ2V0U3VicHJvY2Vzc1N0ZG91dChzdWJwcm9jZXNzLCBmcm9tLCBjb25jdXJyZW50U3RyZWFtcyk7XG5cdGNvbnN0IHtyZWFkYWJsZUVuY29kaW5nLCByZWFkYWJsZU9iamVjdE1vZGUsIHJlYWRhYmxlSGlnaFdhdGVyTWFya30gPSBnZXRSZWFkYWJsZU9wdGlvbnMoc3VicHJvY2Vzc1N0ZG91dCwgYmluYXJ5KTtcblx0Y29uc3Qge3JlYWQsIG9uU3Rkb3V0RGF0YURvbmV9ID0gZ2V0UmVhZGFibGVNZXRob2RzKHtcblx0XHRzdWJwcm9jZXNzU3Rkb3V0LFxuXHRcdHN1YnByb2Nlc3MsXG5cdFx0YmluYXJ5LFxuXHRcdGVuY29kaW5nLFxuXHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdH0pO1xuXHRjb25zdCByZWFkYWJsZSA9IG5ldyBSZWFkYWJsZSh7XG5cdFx0cmVhZCxcblx0XHRkZXN0cm95OiBjYWxsYmFja2lmeShvblJlYWRhYmxlRGVzdHJveS5iaW5kKHVuZGVmaW5lZCwge3N1YnByb2Nlc3NTdGRvdXQsIHN1YnByb2Nlc3MsIHdhaXRSZWFkYWJsZURlc3Ryb3l9KSksXG5cdFx0aGlnaFdhdGVyTWFyazogcmVhZGFibGVIaWdoV2F0ZXJNYXJrLFxuXHRcdG9iamVjdE1vZGU6IHJlYWRhYmxlT2JqZWN0TW9kZSxcblx0XHRlbmNvZGluZzogcmVhZGFibGVFbmNvZGluZyxcblx0fSk7XG5cdG9uU3Rkb3V0RmluaXNoZWQoe1xuXHRcdHN1YnByb2Nlc3NTdGRvdXQsXG5cdFx0b25TdGRvdXREYXRhRG9uZSxcblx0XHRyZWFkYWJsZSxcblx0XHRzdWJwcm9jZXNzLFxuXHR9KTtcblx0cmV0dXJuIHJlYWRhYmxlO1xufTtcblxuLy8gUmV0cmlldmUgYHN0ZG91dGAgKG9yIG90aGVyIHN0cmVhbSBkZXBlbmRpbmcgb24gYGZyb21gKVxuZXhwb3J0IGNvbnN0IGdldFN1YnByb2Nlc3NTdGRvdXQgPSAoc3VicHJvY2VzcywgZnJvbSwgY29uY3VycmVudFN0cmVhbXMpID0+IHtcblx0Y29uc3Qgc3VicHJvY2Vzc1N0ZG91dCA9IGdldEZyb21TdHJlYW0oc3VicHJvY2VzcywgZnJvbSk7XG5cdGNvbnN0IHdhaXRSZWFkYWJsZURlc3Ryb3kgPSBhZGRDb25jdXJyZW50U3RyZWFtKGNvbmN1cnJlbnRTdHJlYW1zLCBzdWJwcm9jZXNzU3Rkb3V0LCAncmVhZGFibGVEZXN0cm95Jyk7XG5cdHJldHVybiB7c3VicHJvY2Vzc1N0ZG91dCwgd2FpdFJlYWRhYmxlRGVzdHJveX07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmVhZGFibGVPcHRpb25zID0gKHtyZWFkYWJsZUVuY29kaW5nLCByZWFkYWJsZU9iamVjdE1vZGUsIHJlYWRhYmxlSGlnaFdhdGVyTWFya30sIGJpbmFyeSkgPT4gYmluYXJ5XG5cdD8ge3JlYWRhYmxlRW5jb2RpbmcsIHJlYWRhYmxlT2JqZWN0TW9kZSwgcmVhZGFibGVIaWdoV2F0ZXJNYXJrfVxuXHQ6IHtyZWFkYWJsZUVuY29kaW5nLCByZWFkYWJsZU9iamVjdE1vZGU6IHRydWUsIHJlYWRhYmxlSGlnaFdhdGVyTWFyazogREVGQVVMVF9PQkpFQ1RfSElHSF9XQVRFUl9NQVJLfTtcblxuZXhwb3J0IGNvbnN0IGdldFJlYWRhYmxlTWV0aG9kcyA9ICh7c3VicHJvY2Vzc1N0ZG91dCwgc3VicHJvY2VzcywgYmluYXJ5LCBlbmNvZGluZywgcHJlc2VydmVOZXdsaW5lc30pID0+IHtcblx0Y29uc3Qgb25TdGRvdXREYXRhRG9uZSA9IGNyZWF0ZURlZmVycmVkKCk7XG5cdGNvbnN0IG9uU3Rkb3V0RGF0YSA9IGl0ZXJhdGVPblN1YnByb2Nlc3NTdHJlYW0oe1xuXHRcdHN1YnByb2Nlc3NTdGRvdXQsXG5cdFx0c3VicHJvY2Vzcyxcblx0XHRiaW5hcnksXG5cdFx0c2hvdWxkRW5jb2RlOiAhYmluYXJ5LFxuXHRcdGVuY29kaW5nLFxuXHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0cmVhZCgpIHtcblx0XHRcdG9uUmVhZCh0aGlzLCBvblN0ZG91dERhdGEsIG9uU3Rkb3V0RGF0YURvbmUpO1xuXHRcdH0sXG5cdFx0b25TdGRvdXREYXRhRG9uZSxcblx0fTtcbn07XG5cbi8vIEZvcndhcmRzIGRhdGEgZnJvbSBgc3Rkb3V0YCB0byBgcmVhZGFibGVgXG5jb25zdCBvblJlYWQgPSBhc3luYyAocmVhZGFibGUsIG9uU3Rkb3V0RGF0YSwgb25TdGRvdXREYXRhRG9uZSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHt2YWx1ZSwgZG9uZX0gPSBhd2FpdCBvblN0ZG91dERhdGEubmV4dCgpO1xuXHRcdGlmIChkb25lKSB7XG5cdFx0XHRvblN0ZG91dERhdGFEb25lLnJlc29sdmUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVhZGFibGUucHVzaCh2YWx1ZSk7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG59O1xuXG4vLyBXaGVuIGBzdWJwcm9jZXNzLnN0ZG91dGAgZW5kcy9hYm9ydHMvZXJyb3JzLCBkbyB0aGUgc2FtZSBvbiBgcmVhZGFibGVgLlxuLy8gQXdhaXQgdGhlIHN1YnByb2Nlc3MsIGZvciB0aGUgc2FtZSByZWFzb24gYXMgYWJvdmUuXG5leHBvcnQgY29uc3Qgb25TdGRvdXRGaW5pc2hlZCA9IGFzeW5jICh7c3VicHJvY2Vzc1N0ZG91dCwgb25TdGRvdXREYXRhRG9uZSwgcmVhZGFibGUsIHN1YnByb2Nlc3MsIHN1YnByb2Nlc3NTdGRpbn0pID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCB3YWl0Rm9yU3VicHJvY2Vzc1N0ZG91dChzdWJwcm9jZXNzU3Rkb3V0KTtcblx0XHRhd2FpdCBzdWJwcm9jZXNzO1xuXHRcdGF3YWl0IHNhZmVXYWl0Rm9yU3VicHJvY2Vzc1N0ZGluKHN1YnByb2Nlc3NTdGRpbik7XG5cdFx0YXdhaXQgb25TdGRvdXREYXRhRG9uZTtcblxuXHRcdGlmIChyZWFkYWJsZS5yZWFkYWJsZSkge1xuXHRcdFx0cmVhZGFibGUucHVzaChudWxsKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0YXdhaXQgc2FmZVdhaXRGb3JTdWJwcm9jZXNzU3RkaW4oc3VicHJvY2Vzc1N0ZGluKTtcblx0XHRkZXN0cm95T3RoZXJSZWFkYWJsZShyZWFkYWJsZSwgZXJyb3IpO1xuXHR9XG59O1xuXG4vLyBXaGVuIGByZWFkYWJsZWAgYWJvcnRzL2Vycm9ycywgZG8gdGhlIHNhbWUgb24gYHN1YnByb2Nlc3Muc3Rkb3V0YFxuZXhwb3J0IGNvbnN0IG9uUmVhZGFibGVEZXN0cm95ID0gYXN5bmMgKHtzdWJwcm9jZXNzU3Rkb3V0LCBzdWJwcm9jZXNzLCB3YWl0UmVhZGFibGVEZXN0cm95fSwgZXJyb3IpID0+IHtcblx0aWYgKGF3YWl0IHdhaXRGb3JDb25jdXJyZW50U3RyZWFtcyh3YWl0UmVhZGFibGVEZXN0cm95LCBzdWJwcm9jZXNzKSkge1xuXHRcdGRlc3Ryb3lPdGhlclJlYWRhYmxlKHN1YnByb2Nlc3NTdGRvdXQsIGVycm9yKTtcblx0XHRhd2FpdCB3YWl0Rm9yU3VicHJvY2VzcyhzdWJwcm9jZXNzLCBlcnJvcik7XG5cdH1cbn07XG5cbmNvbnN0IGRlc3Ryb3lPdGhlclJlYWRhYmxlID0gKHN0cmVhbSwgZXJyb3IpID0+IHtcblx0ZGVzdHJveU90aGVyU3RyZWFtKHN0cmVhbSwgc3RyZWFtLnJlYWRhYmxlLCBlcnJvcik7XG59O1xuIiwgImltcG9ydCB7V3JpdGFibGV9IGZyb20gJ25vZGU6c3RyZWFtJztcbmltcG9ydCB7Y2FsbGJhY2tpZnl9IGZyb20gJ25vZGU6dXRpbCc7XG5pbXBvcnQge2dldFRvU3RyZWFtfSBmcm9tICcuLi9hcmd1bWVudHMvZmQtb3B0aW9ucy5qcyc7XG5pbXBvcnQge2FkZENvbmN1cnJlbnRTdHJlYW0sIHdhaXRGb3JDb25jdXJyZW50U3RyZWFtc30gZnJvbSAnLi9jb25jdXJyZW50LmpzJztcbmltcG9ydCB7XG5cdHNhZmVXYWl0Rm9yU3VicHJvY2Vzc1N0ZG91dCxcblx0d2FpdEZvclN1YnByb2Nlc3NTdGRpbixcblx0d2FpdEZvclN1YnByb2Nlc3MsXG5cdGRlc3Ryb3lPdGhlclN0cmVhbSxcbn0gZnJvbSAnLi9zaGFyZWQuanMnO1xuXG4vLyBDcmVhdGUgYSBgV3JpdGFibGVgIHN0cmVhbSB0aGF0IGZvcndhcmRzIHRvIGBzdGRpbmAgYW5kIGF3YWl0cyB0aGUgc3VicHJvY2Vzc1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVdyaXRhYmxlID0gKHtzdWJwcm9jZXNzLCBjb25jdXJyZW50U3RyZWFtc30sIHt0b30gPSB7fSkgPT4ge1xuXHRjb25zdCB7c3VicHJvY2Vzc1N0ZGluLCB3YWl0V3JpdGFibGVGaW5hbCwgd2FpdFdyaXRhYmxlRGVzdHJveX0gPSBnZXRTdWJwcm9jZXNzU3RkaW4oc3VicHJvY2VzcywgdG8sIGNvbmN1cnJlbnRTdHJlYW1zKTtcblx0Y29uc3Qgd3JpdGFibGUgPSBuZXcgV3JpdGFibGUoe1xuXHRcdC4uLmdldFdyaXRhYmxlTWV0aG9kcyhzdWJwcm9jZXNzU3RkaW4sIHN1YnByb2Nlc3MsIHdhaXRXcml0YWJsZUZpbmFsKSxcblx0XHRkZXN0cm95OiBjYWxsYmFja2lmeShvbldyaXRhYmxlRGVzdHJveS5iaW5kKHVuZGVmaW5lZCwge1xuXHRcdFx0c3VicHJvY2Vzc1N0ZGluLFxuXHRcdFx0c3VicHJvY2Vzcyxcblx0XHRcdHdhaXRXcml0YWJsZUZpbmFsLFxuXHRcdFx0d2FpdFdyaXRhYmxlRGVzdHJveSxcblx0XHR9KSksXG5cdFx0aGlnaFdhdGVyTWFyazogc3VicHJvY2Vzc1N0ZGluLndyaXRhYmxlSGlnaFdhdGVyTWFyayxcblx0XHRvYmplY3RNb2RlOiBzdWJwcm9jZXNzU3RkaW4ud3JpdGFibGVPYmplY3RNb2RlLFxuXHR9KTtcblx0b25TdGRpbkZpbmlzaGVkKHN1YnByb2Nlc3NTdGRpbiwgd3JpdGFibGUpO1xuXHRyZXR1cm4gd3JpdGFibGU7XG59O1xuXG4vLyBSZXRyaWV2ZSBgc3RkaW5gIChvciBvdGhlciBzdHJlYW0gZGVwZW5kaW5nIG9uIGB0b2ApXG5leHBvcnQgY29uc3QgZ2V0U3VicHJvY2Vzc1N0ZGluID0gKHN1YnByb2Nlc3MsIHRvLCBjb25jdXJyZW50U3RyZWFtcykgPT4ge1xuXHRjb25zdCBzdWJwcm9jZXNzU3RkaW4gPSBnZXRUb1N0cmVhbShzdWJwcm9jZXNzLCB0byk7XG5cdGNvbnN0IHdhaXRXcml0YWJsZUZpbmFsID0gYWRkQ29uY3VycmVudFN0cmVhbShjb25jdXJyZW50U3RyZWFtcywgc3VicHJvY2Vzc1N0ZGluLCAnd3JpdGFibGVGaW5hbCcpO1xuXHRjb25zdCB3YWl0V3JpdGFibGVEZXN0cm95ID0gYWRkQ29uY3VycmVudFN0cmVhbShjb25jdXJyZW50U3RyZWFtcywgc3VicHJvY2Vzc1N0ZGluLCAnd3JpdGFibGVEZXN0cm95Jyk7XG5cdHJldHVybiB7c3VicHJvY2Vzc1N0ZGluLCB3YWl0V3JpdGFibGVGaW5hbCwgd2FpdFdyaXRhYmxlRGVzdHJveX07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V3JpdGFibGVNZXRob2RzID0gKHN1YnByb2Nlc3NTdGRpbiwgc3VicHJvY2Vzcywgd2FpdFdyaXRhYmxlRmluYWwpID0+ICh7XG5cdHdyaXRlOiBvbldyaXRlLmJpbmQodW5kZWZpbmVkLCBzdWJwcm9jZXNzU3RkaW4pLFxuXHRmaW5hbDogY2FsbGJhY2tpZnkob25Xcml0YWJsZUZpbmFsLmJpbmQodW5kZWZpbmVkLCBzdWJwcm9jZXNzU3RkaW4sIHN1YnByb2Nlc3MsIHdhaXRXcml0YWJsZUZpbmFsKSksXG59KTtcblxuLy8gRm9yd2FyZHMgZGF0YSBmcm9tIGB3cml0YWJsZWAgdG8gYHN0ZGluYFxuY29uc3Qgb25Xcml0ZSA9IChzdWJwcm9jZXNzU3RkaW4sIGNodW5rLCBlbmNvZGluZywgZG9uZSkgPT4ge1xuXHRpZiAoc3VicHJvY2Vzc1N0ZGluLndyaXRlKGNodW5rLCBlbmNvZGluZykpIHtcblx0XHRkb25lKCk7XG5cdH0gZWxzZSB7XG5cdFx0c3VicHJvY2Vzc1N0ZGluLm9uY2UoJ2RyYWluJywgZG9uZSk7XG5cdH1cbn07XG5cbi8vIEVuc3VyZXMgdGhhdCB0aGUgd3JpdGFibGUgYGZpbmFsYCBhbmQgcmVhZGFibGUgYGVuZGAgZXZlbnRzIGF3YWl0cyB0aGUgc3VicHJvY2Vzcy5cbi8vIExpa2UgdGhpcywgYW55IHN1YnByb2Nlc3MgZmFpbHVyZSBpcyBwcm9wYWdhdGVkIGFzIGEgc3RyZWFtIGBlcnJvcmAgZXZlbnQsIGluc3RlYWQgb2YgYmVpbmcgbG9zdC5cbi8vIFRoZSB1c2VyIGRvZXMgbm90IG5lZWQgdG8gYGF3YWl0YCB0aGUgc3VicHJvY2VzcyBhbnltb3JlLCBidXQgbm93IG5lZWRzIHRvIGF3YWl0IHRoZSBzdHJlYW0gY29tcGxldGlvbiBvciBlcnJvci5cbi8vIFdoZW4gbXVsdGlwbGUgd3JpdGFibGVzIGFyZSB0YXJnZXRpbmcgdGhlIHNhbWUgc3RyZWFtLCB0aGV5IHdhaXQgZm9yIGVhY2ggb3RoZXIsIHVubGVzcyB0aGUgc3VicHJvY2VzcyBlbmRzIGZpcnN0LlxuY29uc3Qgb25Xcml0YWJsZUZpbmFsID0gYXN5bmMgKHN1YnByb2Nlc3NTdGRpbiwgc3VicHJvY2Vzcywgd2FpdFdyaXRhYmxlRmluYWwpID0+IHtcblx0aWYgKGF3YWl0IHdhaXRGb3JDb25jdXJyZW50U3RyZWFtcyh3YWl0V3JpdGFibGVGaW5hbCwgc3VicHJvY2VzcykpIHtcblx0XHRpZiAoc3VicHJvY2Vzc1N0ZGluLndyaXRhYmxlKSB7XG5cdFx0XHRzdWJwcm9jZXNzU3RkaW4uZW5kKCk7XG5cdFx0fVxuXG5cdFx0YXdhaXQgc3VicHJvY2Vzcztcblx0fVxufTtcblxuLy8gV2hlbiBgc3VicHJvY2Vzcy5zdGRpbmAgZW5kcy9hYm9ydHMvZXJyb3JzLCBkbyB0aGUgc2FtZSBvbiBgd3JpdGFibGVgLlxuZXhwb3J0IGNvbnN0IG9uU3RkaW5GaW5pc2hlZCA9IGFzeW5jIChzdWJwcm9jZXNzU3RkaW4sIHdyaXRhYmxlLCBzdWJwcm9jZXNzU3Rkb3V0KSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgd2FpdEZvclN1YnByb2Nlc3NTdGRpbihzdWJwcm9jZXNzU3RkaW4pO1xuXHRcdGlmICh3cml0YWJsZS53cml0YWJsZSkge1xuXHRcdFx0d3JpdGFibGUuZW5kKCk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGF3YWl0IHNhZmVXYWl0Rm9yU3VicHJvY2Vzc1N0ZG91dChzdWJwcm9jZXNzU3Rkb3V0KTtcblx0XHRkZXN0cm95T3RoZXJXcml0YWJsZSh3cml0YWJsZSwgZXJyb3IpO1xuXHR9XG59O1xuXG4vLyBXaGVuIGB3cml0YWJsZWAgYWJvcnRzL2Vycm9ycywgZG8gdGhlIHNhbWUgb24gYHN1YnByb2Nlc3Muc3RkaW5gXG5leHBvcnQgY29uc3Qgb25Xcml0YWJsZURlc3Ryb3kgPSBhc3luYyAoe3N1YnByb2Nlc3NTdGRpbiwgc3VicHJvY2Vzcywgd2FpdFdyaXRhYmxlRmluYWwsIHdhaXRXcml0YWJsZURlc3Ryb3l9LCBlcnJvcikgPT4ge1xuXHRhd2FpdCB3YWl0Rm9yQ29uY3VycmVudFN0cmVhbXMod2FpdFdyaXRhYmxlRmluYWwsIHN1YnByb2Nlc3MpO1xuXHRpZiAoYXdhaXQgd2FpdEZvckNvbmN1cnJlbnRTdHJlYW1zKHdhaXRXcml0YWJsZURlc3Ryb3ksIHN1YnByb2Nlc3MpKSB7XG5cdFx0ZGVzdHJveU90aGVyV3JpdGFibGUoc3VicHJvY2Vzc1N0ZGluLCBlcnJvcik7XG5cdFx0YXdhaXQgd2FpdEZvclN1YnByb2Nlc3Moc3VicHJvY2VzcywgZXJyb3IpO1xuXHR9XG59O1xuXG5jb25zdCBkZXN0cm95T3RoZXJXcml0YWJsZSA9IChzdHJlYW0sIGVycm9yKSA9PiB7XG5cdGRlc3Ryb3lPdGhlclN0cmVhbShzdHJlYW0sIHN0cmVhbS53cml0YWJsZSwgZXJyb3IpO1xufTtcbiIsICJpbXBvcnQge0R1cGxleH0gZnJvbSAnbm9kZTpzdHJlYW0nO1xuaW1wb3J0IHtjYWxsYmFja2lmeX0gZnJvbSAnbm9kZTp1dGlsJztcbmltcG9ydCB7QklOQVJZX0VOQ09ESU5HU30gZnJvbSAnLi4vYXJndW1lbnRzL2VuY29kaW5nLW9wdGlvbi5qcyc7XG5pbXBvcnQge1xuXHRnZXRTdWJwcm9jZXNzU3Rkb3V0LFxuXHRnZXRSZWFkYWJsZU9wdGlvbnMsXG5cdGdldFJlYWRhYmxlTWV0aG9kcyxcblx0b25TdGRvdXRGaW5pc2hlZCxcblx0b25SZWFkYWJsZURlc3Ryb3ksXG59IGZyb20gJy4vcmVhZGFibGUuanMnO1xuaW1wb3J0IHtcblx0Z2V0U3VicHJvY2Vzc1N0ZGluLFxuXHRnZXRXcml0YWJsZU1ldGhvZHMsXG5cdG9uU3RkaW5GaW5pc2hlZCxcblx0b25Xcml0YWJsZURlc3Ryb3ksXG59IGZyb20gJy4vd3JpdGFibGUuanMnO1xuXG4vLyBDcmVhdGUgYSBgRHVwbGV4YCBzdHJlYW0gY29tYmluaW5nIGJvdGggYHN1YnByb2Nlc3MucmVhZGFibGUoKWAgYW5kIGBzdWJwcm9jZXNzLndyaXRhYmxlKClgXG5leHBvcnQgY29uc3QgY3JlYXRlRHVwbGV4ID0gKHtzdWJwcm9jZXNzLCBjb25jdXJyZW50U3RyZWFtcywgZW5jb2Rpbmd9LCB7ZnJvbSwgdG8sIGJpbmFyeTogYmluYXJ5T3B0aW9uID0gdHJ1ZSwgcHJlc2VydmVOZXdsaW5lcyA9IHRydWV9ID0ge30pID0+IHtcblx0Y29uc3QgYmluYXJ5ID0gYmluYXJ5T3B0aW9uIHx8IEJJTkFSWV9FTkNPRElOR1MuaGFzKGVuY29kaW5nKTtcblx0Y29uc3Qge3N1YnByb2Nlc3NTdGRvdXQsIHdhaXRSZWFkYWJsZURlc3Ryb3l9ID0gZ2V0U3VicHJvY2Vzc1N0ZG91dChzdWJwcm9jZXNzLCBmcm9tLCBjb25jdXJyZW50U3RyZWFtcyk7XG5cdGNvbnN0IHtzdWJwcm9jZXNzU3RkaW4sIHdhaXRXcml0YWJsZUZpbmFsLCB3YWl0V3JpdGFibGVEZXN0cm95fSA9IGdldFN1YnByb2Nlc3NTdGRpbihzdWJwcm9jZXNzLCB0bywgY29uY3VycmVudFN0cmVhbXMpO1xuXHRjb25zdCB7cmVhZGFibGVFbmNvZGluZywgcmVhZGFibGVPYmplY3RNb2RlLCByZWFkYWJsZUhpZ2hXYXRlck1hcmt9ID0gZ2V0UmVhZGFibGVPcHRpb25zKHN1YnByb2Nlc3NTdGRvdXQsIGJpbmFyeSk7XG5cdGNvbnN0IHtyZWFkLCBvblN0ZG91dERhdGFEb25lfSA9IGdldFJlYWRhYmxlTWV0aG9kcyh7XG5cdFx0c3VicHJvY2Vzc1N0ZG91dCxcblx0XHRzdWJwcm9jZXNzLFxuXHRcdGJpbmFyeSxcblx0XHRlbmNvZGluZyxcblx0XHRwcmVzZXJ2ZU5ld2xpbmVzLFxuXHR9KTtcblx0Y29uc3QgZHVwbGV4ID0gbmV3IER1cGxleCh7XG5cdFx0cmVhZCxcblx0XHQuLi5nZXRXcml0YWJsZU1ldGhvZHMoc3VicHJvY2Vzc1N0ZGluLCBzdWJwcm9jZXNzLCB3YWl0V3JpdGFibGVGaW5hbCksXG5cdFx0ZGVzdHJveTogY2FsbGJhY2tpZnkob25EdXBsZXhEZXN0cm95LmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0XHRzdWJwcm9jZXNzU3Rkb3V0LFxuXHRcdFx0c3VicHJvY2Vzc1N0ZGluLFxuXHRcdFx0c3VicHJvY2Vzcyxcblx0XHRcdHdhaXRSZWFkYWJsZURlc3Ryb3ksXG5cdFx0XHR3YWl0V3JpdGFibGVGaW5hbCxcblx0XHRcdHdhaXRXcml0YWJsZURlc3Ryb3ksXG5cdFx0fSkpLFxuXHRcdHJlYWRhYmxlSGlnaFdhdGVyTWFyayxcblx0XHR3cml0YWJsZUhpZ2hXYXRlck1hcms6IHN1YnByb2Nlc3NTdGRpbi53cml0YWJsZUhpZ2hXYXRlck1hcmssXG5cdFx0cmVhZGFibGVPYmplY3RNb2RlLFxuXHRcdHdyaXRhYmxlT2JqZWN0TW9kZTogc3VicHJvY2Vzc1N0ZGluLndyaXRhYmxlT2JqZWN0TW9kZSxcblx0XHRlbmNvZGluZzogcmVhZGFibGVFbmNvZGluZyxcblx0fSk7XG5cdG9uU3Rkb3V0RmluaXNoZWQoe1xuXHRcdHN1YnByb2Nlc3NTdGRvdXQsXG5cdFx0b25TdGRvdXREYXRhRG9uZSxcblx0XHRyZWFkYWJsZTogZHVwbGV4LFxuXHRcdHN1YnByb2Nlc3MsXG5cdFx0c3VicHJvY2Vzc1N0ZGluLFxuXHR9KTtcblx0b25TdGRpbkZpbmlzaGVkKHN1YnByb2Nlc3NTdGRpbiwgZHVwbGV4LCBzdWJwcm9jZXNzU3Rkb3V0KTtcblx0cmV0dXJuIGR1cGxleDtcbn07XG5cbmNvbnN0IG9uRHVwbGV4RGVzdHJveSA9IGFzeW5jICh7c3VicHJvY2Vzc1N0ZG91dCwgc3VicHJvY2Vzc1N0ZGluLCBzdWJwcm9jZXNzLCB3YWl0UmVhZGFibGVEZXN0cm95LCB3YWl0V3JpdGFibGVGaW5hbCwgd2FpdFdyaXRhYmxlRGVzdHJveX0sIGVycm9yKSA9PiB7XG5cdGF3YWl0IFByb21pc2UuYWxsKFtcblx0XHRvblJlYWRhYmxlRGVzdHJveSh7c3VicHJvY2Vzc1N0ZG91dCwgc3VicHJvY2Vzcywgd2FpdFJlYWRhYmxlRGVzdHJveX0sIGVycm9yKSxcblx0XHRvbldyaXRhYmxlRGVzdHJveSh7XG5cdFx0XHRzdWJwcm9jZXNzU3RkaW4sXG5cdFx0XHRzdWJwcm9jZXNzLFxuXHRcdFx0d2FpdFdyaXRhYmxlRmluYWwsXG5cdFx0XHR3YWl0V3JpdGFibGVEZXN0cm95LFxuXHRcdH0sIGVycm9yKSxcblx0XSk7XG59O1xuIiwgImltcG9ydCB7QklOQVJZX0VOQ09ESU5HU30gZnJvbSAnLi4vYXJndW1lbnRzL2VuY29kaW5nLW9wdGlvbi5qcyc7XG5pbXBvcnQge2dldEZyb21TdHJlYW19IGZyb20gJy4uL2FyZ3VtZW50cy9mZC1vcHRpb25zLmpzJztcbmltcG9ydCB7aXRlcmF0ZU9uU3VicHJvY2Vzc1N0cmVhbX0gZnJvbSAnLi4vaW8vaXRlcmF0ZS5qcyc7XG5cbi8vIENvbnZlcnQgdGhlIHN1YnByb2Nlc3MgdG8gYW4gYXN5bmMgaXRlcmFibGVcbmV4cG9ydCBjb25zdCBjcmVhdGVJdGVyYWJsZSA9IChzdWJwcm9jZXNzLCBlbmNvZGluZywge1xuXHRmcm9tLFxuXHRiaW5hcnk6IGJpbmFyeU9wdGlvbiA9IGZhbHNlLFxuXHRwcmVzZXJ2ZU5ld2xpbmVzID0gZmFsc2UsXG59ID0ge30pID0+IHtcblx0Y29uc3QgYmluYXJ5ID0gYmluYXJ5T3B0aW9uIHx8IEJJTkFSWV9FTkNPRElOR1MuaGFzKGVuY29kaW5nKTtcblx0Y29uc3Qgc3VicHJvY2Vzc1N0ZG91dCA9IGdldEZyb21TdHJlYW0oc3VicHJvY2VzcywgZnJvbSk7XG5cdGNvbnN0IG9uU3Rkb3V0RGF0YSA9IGl0ZXJhdGVPblN1YnByb2Nlc3NTdHJlYW0oe1xuXHRcdHN1YnByb2Nlc3NTdGRvdXQsXG5cdFx0c3VicHJvY2Vzcyxcblx0XHRiaW5hcnksXG5cdFx0c2hvdWxkRW5jb2RlOiB0cnVlLFxuXHRcdGVuY29kaW5nLFxuXHRcdHByZXNlcnZlTmV3bGluZXMsXG5cdH0pO1xuXHRyZXR1cm4gaXRlcmF0ZU9uU3Rkb3V0RGF0YShvblN0ZG91dERhdGEsIHN1YnByb2Nlc3NTdGRvdXQsIHN1YnByb2Nlc3MpO1xufTtcblxuY29uc3QgaXRlcmF0ZU9uU3Rkb3V0RGF0YSA9IGFzeW5jIGZ1bmN0aW9uICogKG9uU3Rkb3V0RGF0YSwgc3VicHJvY2Vzc1N0ZG91dCwgc3VicHJvY2Vzcykge1xuXHR0cnkge1xuXHRcdHlpZWxkICogb25TdGRvdXREYXRhO1xuXHR9IGZpbmFsbHkge1xuXHRcdGlmIChzdWJwcm9jZXNzU3Rkb3V0LnJlYWRhYmxlKSB7XG5cdFx0XHRzdWJwcm9jZXNzU3Rkb3V0LmRlc3Ryb3koKTtcblx0XHR9XG5cblx0XHRhd2FpdCBzdWJwcm9jZXNzO1xuXHR9XG59O1xuIiwgImltcG9ydCB7aW5pdGlhbGl6ZUNvbmN1cnJlbnRTdHJlYW1zfSBmcm9tICcuL2NvbmN1cnJlbnQuanMnO1xuaW1wb3J0IHtjcmVhdGVSZWFkYWJsZX0gZnJvbSAnLi9yZWFkYWJsZS5qcyc7XG5pbXBvcnQge2NyZWF0ZVdyaXRhYmxlfSBmcm9tICcuL3dyaXRhYmxlLmpzJztcbmltcG9ydCB7Y3JlYXRlRHVwbGV4fSBmcm9tICcuL2R1cGxleC5qcyc7XG5pbXBvcnQge2NyZWF0ZUl0ZXJhYmxlfSBmcm9tICcuL2l0ZXJhYmxlLmpzJztcblxuLy8gQWRkIG1ldGhvZHMgdG8gY29udmVydCB0aGUgc3VicHJvY2VzcyB0byBhIHN0cmVhbSBvciBpdGVyYWJsZVxuZXhwb3J0IGNvbnN0IGFkZENvbnZlcnRlZFN0cmVhbXMgPSAoc3VicHJvY2Vzcywge2VuY29kaW5nfSkgPT4ge1xuXHRjb25zdCBjb25jdXJyZW50U3RyZWFtcyA9IGluaXRpYWxpemVDb25jdXJyZW50U3RyZWFtcygpO1xuXHRzdWJwcm9jZXNzLnJlYWRhYmxlID0gY3JlYXRlUmVhZGFibGUuYmluZCh1bmRlZmluZWQsIHtzdWJwcm9jZXNzLCBjb25jdXJyZW50U3RyZWFtcywgZW5jb2Rpbmd9KTtcblx0c3VicHJvY2Vzcy53cml0YWJsZSA9IGNyZWF0ZVdyaXRhYmxlLmJpbmQodW5kZWZpbmVkLCB7c3VicHJvY2VzcywgY29uY3VycmVudFN0cmVhbXN9KTtcblx0c3VicHJvY2Vzcy5kdXBsZXggPSBjcmVhdGVEdXBsZXguYmluZCh1bmRlZmluZWQsIHtzdWJwcm9jZXNzLCBjb25jdXJyZW50U3RyZWFtcywgZW5jb2Rpbmd9KTtcblx0c3VicHJvY2Vzcy5pdGVyYWJsZSA9IGNyZWF0ZUl0ZXJhYmxlLmJpbmQodW5kZWZpbmVkLCBzdWJwcm9jZXNzLCBlbmNvZGluZyk7XG5cdHN1YnByb2Nlc3NbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gY3JlYXRlSXRlcmFibGUuYmluZCh1bmRlZmluZWQsIHN1YnByb2Nlc3MsIGVuY29kaW5nLCB7fSk7XG59O1xuIiwgIi8vIFRoZSByZXR1cm4gdmFsdWUgaXMgYSBtaXhpbiBvZiBgc3VicHJvY2Vzc2AgYW5kIGBQcm9taXNlYFxuZXhwb3J0IGNvbnN0IG1lcmdlUHJvbWlzZSA9IChzdWJwcm9jZXNzLCBwcm9taXNlKSA9PiB7XG5cdGZvciAoY29uc3QgW3Byb3BlcnR5LCBkZXNjcmlwdG9yXSBvZiBkZXNjcmlwdG9ycykge1xuXHRcdGNvbnN0IHZhbHVlID0gZGVzY3JpcHRvci52YWx1ZS5iaW5kKHByb21pc2UpO1xuXHRcdFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoc3VicHJvY2VzcywgcHJvcGVydHksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZX0pO1xuXHR9XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItdG9wLWxldmVsLWF3YWl0XG5jb25zdCBuYXRpdmVQcm9taXNlUHJvdG90eXBlID0gKGFzeW5jICgpID0+IHt9KSgpLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblxuY29uc3QgZGVzY3JpcHRvcnMgPSBbJ3RoZW4nLCAnY2F0Y2gnLCAnZmluYWxseSddLm1hcChwcm9wZXJ0eSA9PiBbXG5cdHByb3BlcnR5LFxuXHRSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuYXRpdmVQcm9taXNlUHJvdG90eXBlLCBwcm9wZXJ0eSksXG5dKTtcbiIsICJpbXBvcnQge3NldE1heExpc3RlbmVyc30gZnJvbSAnbm9kZTpldmVudHMnO1xuaW1wb3J0IHtzcGF3bn0gZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJztcbmltcG9ydCB7TWF4QnVmZmVyRXJyb3J9IGZyb20gJ2dldC1zdHJlYW0nO1xuaW1wb3J0IHtoYW5kbGVDb21tYW5kfSBmcm9tICcuLi9hcmd1bWVudHMvY29tbWFuZC5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZU9wdGlvbnN9IGZyb20gJy4uL2FyZ3VtZW50cy9vcHRpb25zLmpzJztcbmltcG9ydCB7U1VCUFJPQ0VTU19PUFRJT05TfSBmcm9tICcuLi9hcmd1bWVudHMvZmQtb3B0aW9ucy5qcyc7XG5pbXBvcnQge2FkZElwY01ldGhvZHN9IGZyb20gJy4uL2lwYy9tZXRob2RzLmpzJztcbmltcG9ydCB7bWFrZUVycm9yLCBtYWtlU3VjY2Vzc1Jlc3VsdH0gZnJvbSAnLi4vcmV0dXJuL3Jlc3VsdC5qcyc7XG5pbXBvcnQge2hhbmRsZVJlc3VsdH0gZnJvbSAnLi4vcmV0dXJuL3JlamVjdC5qcyc7XG5pbXBvcnQge2hhbmRsZUVhcmx5RXJyb3J9IGZyb20gJy4uL3JldHVybi9lYXJseS1lcnJvci5qcyc7XG5pbXBvcnQge2hhbmRsZVN0ZGlvQXN5bmN9IGZyb20gJy4uL3N0ZGlvL2hhbmRsZS1hc3luYy5qcyc7XG5pbXBvcnQge3N0cmlwTmV3bGluZX0gZnJvbSAnLi4vaW8vc3RyaXAtbmV3bGluZS5qcyc7XG5pbXBvcnQge3BpcGVPdXRwdXRBc3luY30gZnJvbSAnLi4vaW8vb3V0cHV0LWFzeW5jLmpzJztcbmltcG9ydCB7c3VicHJvY2Vzc0tpbGx9IGZyb20gJy4uL3Rlcm1pbmF0ZS9raWxsLmpzJztcbmltcG9ydCB7Y2xlYW51cE9uRXhpdH0gZnJvbSAnLi4vdGVybWluYXRlL2NsZWFudXAuanMnO1xuaW1wb3J0IHtwaXBlVG9TdWJwcm9jZXNzfSBmcm9tICcuLi9waXBlL3NldHVwLmpzJztcbmltcG9ydCB7bWFrZUFsbFN0cmVhbX0gZnJvbSAnLi4vcmVzb2x2ZS9hbGwtYXN5bmMuanMnO1xuaW1wb3J0IHt3YWl0Rm9yU3VicHJvY2Vzc1Jlc3VsdH0gZnJvbSAnLi4vcmVzb2x2ZS93YWl0LXN1YnByb2Nlc3MuanMnO1xuaW1wb3J0IHthZGRDb252ZXJ0ZWRTdHJlYW1zfSBmcm9tICcuLi9jb252ZXJ0L2FkZC5qcyc7XG5pbXBvcnQge2NyZWF0ZURlZmVycmVkfSBmcm9tICcuLi91dGlscy9kZWZlcnJlZC5qcyc7XG5pbXBvcnQge21lcmdlUHJvbWlzZX0gZnJvbSAnLi9wcm9taXNlLmpzJztcblxuLy8gTWFpbiBzaGFyZWQgbG9naWMgZm9yIGFsbCBhc3luYyBtZXRob2RzOiBgZXhlY2EoKWAsIGAkYCwgYGV4ZWNhTm9kZSgpYFxuZXhwb3J0IGNvbnN0IGV4ZWNhQ29yZUFzeW5jID0gKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucywgY3JlYXRlTmVzdGVkKSA9PiB7XG5cdGNvbnN0IHtmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBjb21tYW5kLCBlc2NhcGVkQ29tbWFuZCwgc3RhcnRUaW1lLCB2ZXJib3NlSW5mbywgb3B0aW9ucywgZmlsZURlc2NyaXB0b3JzfSA9IGhhbmRsZUFzeW5jQXJndW1lbnRzKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucyk7XG5cdGNvbnN0IHtzdWJwcm9jZXNzLCBwcm9taXNlfSA9IHNwYXduU3VicHJvY2Vzc0FzeW5jKHtcblx0XHRmaWxlLFxuXHRcdGNvbW1hbmRBcmd1bWVudHMsXG5cdFx0b3B0aW9ucyxcblx0XHRzdGFydFRpbWUsXG5cdFx0dmVyYm9zZUluZm8sXG5cdFx0Y29tbWFuZCxcblx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRmaWxlRGVzY3JpcHRvcnMsXG5cdH0pO1xuXHRzdWJwcm9jZXNzLnBpcGUgPSBwaXBlVG9TdWJwcm9jZXNzLmJpbmQodW5kZWZpbmVkLCB7XG5cdFx0c291cmNlOiBzdWJwcm9jZXNzLFxuXHRcdHNvdXJjZVByb21pc2U6IHByb21pc2UsXG5cdFx0Ym91bmRPcHRpb25zOiB7fSxcblx0XHRjcmVhdGVOZXN0ZWQsXG5cdH0pO1xuXHRtZXJnZVByb21pc2Uoc3VicHJvY2VzcywgcHJvbWlzZSk7XG5cdFNVQlBST0NFU1NfT1BUSU9OUy5zZXQoc3VicHJvY2Vzcywge29wdGlvbnMsIGZpbGVEZXNjcmlwdG9yc30pO1xuXHRyZXR1cm4gc3VicHJvY2Vzcztcbn07XG5cbi8vIENvbXB1dGUgYXJndW1lbnRzIHRvIHBhc3MgdG8gYGNoaWxkX3Byb2Nlc3Muc3Bhd24oKWBcbmNvbnN0IGhhbmRsZUFzeW5jQXJndW1lbnRzID0gKHJhd0ZpbGUsIHJhd0FyZ3VtZW50cywgcmF3T3B0aW9ucykgPT4ge1xuXHRjb25zdCB7Y29tbWFuZCwgZXNjYXBlZENvbW1hbmQsIHN0YXJ0VGltZSwgdmVyYm9zZUluZm99ID0gaGFuZGxlQ29tbWFuZChyYXdGaWxlLCByYXdBcmd1bWVudHMsIHJhd09wdGlvbnMpO1xuXHRjb25zdCB7ZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9uczogbm9ybWFsaXplZE9wdGlvbnN9ID0gbm9ybWFsaXplT3B0aW9ucyhyYXdGaWxlLCByYXdBcmd1bWVudHMsIHJhd09wdGlvbnMpO1xuXHRjb25zdCBvcHRpb25zID0gaGFuZGxlQXN5bmNPcHRpb25zKG5vcm1hbGl6ZWRPcHRpb25zKTtcblx0Y29uc3QgZmlsZURlc2NyaXB0b3JzID0gaGFuZGxlU3RkaW9Bc3luYyhvcHRpb25zLCB2ZXJib3NlSW5mbyk7XG5cdHJldHVybiB7XG5cdFx0ZmlsZSxcblx0XHRjb21tYW5kQXJndW1lbnRzLFxuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0c3RhcnRUaW1lLFxuXHRcdHZlcmJvc2VJbmZvLFxuXHRcdG9wdGlvbnMsXG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHR9O1xufTtcblxuLy8gT3B0aW9ucyBub3JtYWxpemF0aW9uIGxvZ2ljIHNwZWNpZmljIHRvIGFzeW5jIG1ldGhvZHMuXG4vLyBQcmV2ZW50IHBhc3NpbmcgdGhlIGB0aW1lb3V0YCBvcHRpb24gZGlyZWN0bHkgdG8gYGNoaWxkX3Byb2Nlc3Muc3Bhd24oKWAuXG5jb25zdCBoYW5kbGVBc3luY09wdGlvbnMgPSAoe3RpbWVvdXQsIHNpZ25hbCwgLi4ub3B0aW9uc30pID0+IHtcblx0aWYgKHNpZ25hbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwic2lnbmFsXCIgb3B0aW9uIGhhcyBiZWVuIHJlbmFtZWQgdG8gXCJjYW5jZWxTaWduYWxcIiBpbnN0ZWFkLicpO1xuXHR9XG5cblx0cmV0dXJuIHsuLi5vcHRpb25zLCB0aW1lb3V0RHVyYXRpb246IHRpbWVvdXR9O1xufTtcblxuY29uc3Qgc3Bhd25TdWJwcm9jZXNzQXN5bmMgPSAoe2ZpbGUsIGNvbW1hbmRBcmd1bWVudHMsIG9wdGlvbnMsIHN0YXJ0VGltZSwgdmVyYm9zZUluZm8sIGNvbW1hbmQsIGVzY2FwZWRDb21tYW5kLCBmaWxlRGVzY3JpcHRvcnN9KSA9PiB7XG5cdGxldCBzdWJwcm9jZXNzO1xuXHR0cnkge1xuXHRcdHN1YnByb2Nlc3MgPSBzcGF3bihmaWxlLCBjb21tYW5kQXJndW1lbnRzLCBvcHRpb25zKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gaGFuZGxlRWFybHlFcnJvcih7XG5cdFx0XHRlcnJvcixcblx0XHRcdGNvbW1hbmQsXG5cdFx0XHRlc2NhcGVkQ29tbWFuZCxcblx0XHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRcdG9wdGlvbnMsXG5cdFx0XHRzdGFydFRpbWUsXG5cdFx0XHR2ZXJib3NlSW5mbyxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cdHNldE1heExpc3RlbmVycyhOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIGNvbnRyb2xsZXIuc2lnbmFsKTtcblxuXHRjb25zdCBvcmlnaW5hbFN0cmVhbXMgPSBbLi4uc3VicHJvY2Vzcy5zdGRpb107XG5cdHBpcGVPdXRwdXRBc3luYyhzdWJwcm9jZXNzLCBmaWxlRGVzY3JpcHRvcnMsIGNvbnRyb2xsZXIpO1xuXHRjbGVhbnVwT25FeGl0KHN1YnByb2Nlc3MsIG9wdGlvbnMsIGNvbnRyb2xsZXIpO1xuXG5cdGNvbnN0IGNvbnRleHQgPSB7fTtcblx0Y29uc3Qgb25JbnRlcm5hbEVycm9yID0gY3JlYXRlRGVmZXJyZWQoKTtcblx0c3VicHJvY2Vzcy5raWxsID0gc3VicHJvY2Vzc0tpbGwuYmluZCh1bmRlZmluZWQsIHtcblx0XHRraWxsOiBzdWJwcm9jZXNzLmtpbGwuYmluZChzdWJwcm9jZXNzKSxcblx0XHRvcHRpb25zLFxuXHRcdG9uSW50ZXJuYWxFcnJvcixcblx0XHRjb250ZXh0LFxuXHRcdGNvbnRyb2xsZXIsXG5cdH0pO1xuXHRzdWJwcm9jZXNzLmFsbCA9IG1ha2VBbGxTdHJlYW0oc3VicHJvY2Vzcywgb3B0aW9ucyk7XG5cdGFkZENvbnZlcnRlZFN0cmVhbXMoc3VicHJvY2Vzcywgb3B0aW9ucyk7XG5cdGFkZElwY01ldGhvZHMoc3VicHJvY2Vzcywgb3B0aW9ucyk7XG5cblx0Y29uc3QgcHJvbWlzZSA9IGhhbmRsZVByb21pc2Uoe1xuXHRcdHN1YnByb2Nlc3MsXG5cdFx0b3B0aW9ucyxcblx0XHRzdGFydFRpbWUsXG5cdFx0dmVyYm9zZUluZm8sXG5cdFx0ZmlsZURlc2NyaXB0b3JzLFxuXHRcdG9yaWdpbmFsU3RyZWFtcyxcblx0XHRjb21tYW5kLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdGNvbnRleHQsXG5cdFx0b25JbnRlcm5hbEVycm9yLFxuXHRcdGNvbnRyb2xsZXIsXG5cdH0pO1xuXHRyZXR1cm4ge3N1YnByb2Nlc3MsIHByb21pc2V9O1xufTtcblxuLy8gQXN5bmNocm9ub3VzIGxvZ2ljLCBhcyBvcHBvc2VkIHRvIHRoZSBwcmV2aW91cyBsb2dpYyB3aGljaCBjYW4gYmUgcnVuIHN5bmNocm9ub3VzbHksIGkuZS4gY2FuIGJlIHJldHVybmVkIHRvIHVzZXIgcmlnaHQgYXdheVxuY29uc3QgaGFuZGxlUHJvbWlzZSA9IGFzeW5jICh7c3VicHJvY2Vzcywgb3B0aW9ucywgc3RhcnRUaW1lLCB2ZXJib3NlSW5mbywgZmlsZURlc2NyaXB0b3JzLCBvcmlnaW5hbFN0cmVhbXMsIGNvbW1hbmQsIGVzY2FwZWRDb21tYW5kLCBjb250ZXh0LCBvbkludGVybmFsRXJyb3IsIGNvbnRyb2xsZXJ9KSA9PiB7XG5cdGNvbnN0IFtcblx0XHRlcnJvckluZm8sXG5cdFx0W2V4aXRDb2RlLCBzaWduYWxdLFxuXHRcdHN0ZGlvUmVzdWx0cyxcblx0XHRhbGxSZXN1bHQsXG5cdFx0aXBjT3V0cHV0LFxuXHRdID0gYXdhaXQgd2FpdEZvclN1YnByb2Nlc3NSZXN1bHQoe1xuXHRcdHN1YnByb2Nlc3MsXG5cdFx0b3B0aW9ucyxcblx0XHRjb250ZXh0LFxuXHRcdHZlcmJvc2VJbmZvLFxuXHRcdGZpbGVEZXNjcmlwdG9ycyxcblx0XHRvcmlnaW5hbFN0cmVhbXMsXG5cdFx0b25JbnRlcm5hbEVycm9yLFxuXHRcdGNvbnRyb2xsZXIsXG5cdH0pO1xuXHRjb250cm9sbGVyLmFib3J0KCk7XG5cdG9uSW50ZXJuYWxFcnJvci5yZXNvbHZlKCk7XG5cblx0Y29uc3Qgc3RkaW8gPSBzdGRpb1Jlc3VsdHMubWFwKChzdGRpb1Jlc3VsdCwgZmROdW1iZXIpID0+IHN0cmlwTmV3bGluZShzdGRpb1Jlc3VsdCwgb3B0aW9ucywgZmROdW1iZXIpKTtcblx0Y29uc3QgYWxsID0gc3RyaXBOZXdsaW5lKGFsbFJlc3VsdCwgb3B0aW9ucywgJ2FsbCcpO1xuXHRjb25zdCByZXN1bHQgPSBnZXRBc3luY1Jlc3VsdCh7XG5cdFx0ZXJyb3JJbmZvLFxuXHRcdGV4aXRDb2RlLFxuXHRcdHNpZ25hbCxcblx0XHRzdGRpbyxcblx0XHRhbGwsXG5cdFx0aXBjT3V0cHV0LFxuXHRcdGNvbnRleHQsXG5cdFx0b3B0aW9ucyxcblx0XHRjb21tYW5kLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdHN0YXJ0VGltZSxcblx0fSk7XG5cdHJldHVybiBoYW5kbGVSZXN1bHQocmVzdWx0LCB2ZXJib3NlSW5mbywgb3B0aW9ucyk7XG59O1xuXG5jb25zdCBnZXRBc3luY1Jlc3VsdCA9ICh7ZXJyb3JJbmZvLCBleGl0Q29kZSwgc2lnbmFsLCBzdGRpbywgYWxsLCBpcGNPdXRwdXQsIGNvbnRleHQsIG9wdGlvbnMsIGNvbW1hbmQsIGVzY2FwZWRDb21tYW5kLCBzdGFydFRpbWV9KSA9PiAnZXJyb3InIGluIGVycm9ySW5mb1xuXHQ/IG1ha2VFcnJvcih7XG5cdFx0ZXJyb3I6IGVycm9ySW5mby5lcnJvcixcblx0XHRjb21tYW5kLFxuXHRcdGVzY2FwZWRDb21tYW5kLFxuXHRcdHRpbWVkT3V0OiBjb250ZXh0LnRlcm1pbmF0aW9uUmVhc29uID09PSAndGltZW91dCcsXG5cdFx0aXNDYW5jZWxlZDogY29udGV4dC50ZXJtaW5hdGlvblJlYXNvbiA9PT0gJ2NhbmNlbCcgfHwgY29udGV4dC50ZXJtaW5hdGlvblJlYXNvbiA9PT0gJ2dyYWNlZnVsQ2FuY2VsJyxcblx0XHRpc0dyYWNlZnVsbHlDYW5jZWxlZDogY29udGV4dC50ZXJtaW5hdGlvblJlYXNvbiA9PT0gJ2dyYWNlZnVsQ2FuY2VsJyxcblx0XHRpc01heEJ1ZmZlcjogZXJyb3JJbmZvLmVycm9yIGluc3RhbmNlb2YgTWF4QnVmZmVyRXJyb3IsXG5cdFx0aXNGb3JjZWZ1bGx5VGVybWluYXRlZDogY29udGV4dC5pc0ZvcmNlZnVsbHlUZXJtaW5hdGVkLFxuXHRcdGV4aXRDb2RlLFxuXHRcdHNpZ25hbCxcblx0XHRzdGRpbyxcblx0XHRhbGwsXG5cdFx0aXBjT3V0cHV0LFxuXHRcdG9wdGlvbnMsXG5cdFx0c3RhcnRUaW1lLFxuXHRcdGlzU3luYzogZmFsc2UsXG5cdH0pXG5cdDogbWFrZVN1Y2Nlc3NSZXN1bHQoe1xuXHRcdGNvbW1hbmQsXG5cdFx0ZXNjYXBlZENvbW1hbmQsXG5cdFx0c3RkaW8sXG5cdFx0YWxsLFxuXHRcdGlwY091dHB1dCxcblx0XHRvcHRpb25zLFxuXHRcdHN0YXJ0VGltZSxcblx0fSk7XG4iLCAiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnaXMtcGxhaW4tb2JqJztcbmltcG9ydCB7RkRfU1BFQ0lGSUNfT1BUSU9OU30gZnJvbSAnLi4vYXJndW1lbnRzL3NwZWNpZmljLmpzJztcblxuLy8gRGVlcCBtZXJnZSBzcGVjaWZpYyBvcHRpb25zIGxpa2UgYGVudmAuIFNoYWxsb3cgbWVyZ2UgdGhlIG90aGVyIG9uZXMuXG5leHBvcnQgY29uc3QgbWVyZ2VPcHRpb25zID0gKGJvdW5kT3B0aW9ucywgb3B0aW9ucykgPT4ge1xuXHRjb25zdCBuZXdPcHRpb25zID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuXHRcdE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLm1hcCgoW29wdGlvbk5hbWUsIG9wdGlvblZhbHVlXSkgPT4gW1xuXHRcdFx0b3B0aW9uTmFtZSxcblx0XHRcdG1lcmdlT3B0aW9uKG9wdGlvbk5hbWUsIGJvdW5kT3B0aW9uc1tvcHRpb25OYW1lXSwgb3B0aW9uVmFsdWUpLFxuXHRcdF0pLFxuXHQpO1xuXHRyZXR1cm4gey4uLmJvdW5kT3B0aW9ucywgLi4ubmV3T3B0aW9uc307XG59O1xuXG5jb25zdCBtZXJnZU9wdGlvbiA9IChvcHRpb25OYW1lLCBib3VuZE9wdGlvblZhbHVlLCBvcHRpb25WYWx1ZSkgPT4ge1xuXHRpZiAoREVFUF9PUFRJT05TLmhhcyhvcHRpb25OYW1lKSAmJiBpc1BsYWluT2JqZWN0KGJvdW5kT3B0aW9uVmFsdWUpICYmIGlzUGxhaW5PYmplY3Qob3B0aW9uVmFsdWUpKSB7XG5cdFx0cmV0dXJuIHsuLi5ib3VuZE9wdGlvblZhbHVlLCAuLi5vcHRpb25WYWx1ZX07XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9uVmFsdWU7XG59O1xuXG5jb25zdCBERUVQX09QVElPTlMgPSBuZXcgU2V0KFsnZW52JywgLi4uRkRfU1BFQ0lGSUNfT1BUSU9OU10pO1xuIiwgImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2lzLXBsYWluLW9iaic7XG5pbXBvcnQge25vcm1hbGl6ZVBhcmFtZXRlcnN9IGZyb20gJy4vcGFyYW1ldGVycy5qcyc7XG5pbXBvcnQge2lzVGVtcGxhdGVTdHJpbmcsIHBhcnNlVGVtcGxhdGVzfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmltcG9ydCB7ZXhlY2FDb3JlU3luY30gZnJvbSAnLi9tYWluLXN5bmMuanMnO1xuaW1wb3J0IHtleGVjYUNvcmVBc3luY30gZnJvbSAnLi9tYWluLWFzeW5jLmpzJztcbmltcG9ydCB7bWVyZ2VPcHRpb25zfSBmcm9tICcuL2JpbmQuanMnO1xuXG4vLyBXcmFwcyBldmVyeSBleHBvcnRlZCBtZXRob2RzIHRvIHByb3ZpZGUgdGhlIGZvbGxvd2luZyBmZWF0dXJlczpcbi8vICAtIHRlbXBsYXRlIHN0cmluZyBzeW50YXg6IGV4ZWNhYGNvbW1hbmQgYXJndW1lbnRgXG4vLyAgLSBvcHRpb25zIGJpbmRpbmc6IGJvdW5kRXhlY2EgPSBleGVjYShvcHRpb25zKVxuLy8gIC0gb3B0aW9uYWwgYXJndW1lbnQvb3B0aW9uczogZXhlY2EoZmlsZSksIGV4ZWNhKGZpbGUsIGFyZ3MpLCBleGVjYShmaWxlLCBvcHRpb25zKSwgZXhlY2EoZmlsZSwgYXJncywgb3B0aW9ucylcbi8vIGBtYXBBcmd1bWVudHMoKWAgYW5kIGBzZXRCb3VuZEV4ZWNhKClgIGFsbG93cyBmb3IgbWV0aG9kLXNwZWNpZmljIGxvZ2ljLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4ZWNhID0gKG1hcEFyZ3VtZW50cywgYm91bmRPcHRpb25zLCBkZWVwT3B0aW9ucywgc2V0Qm91bmRFeGVjYSkgPT4ge1xuXHRjb25zdCBjcmVhdGVOZXN0ZWQgPSAobWFwQXJndW1lbnRzLCBib3VuZE9wdGlvbnMsIHNldEJvdW5kRXhlY2EpID0+IGNyZWF0ZUV4ZWNhKG1hcEFyZ3VtZW50cywgYm91bmRPcHRpb25zLCBkZWVwT3B0aW9ucywgc2V0Qm91bmRFeGVjYSk7XG5cdGNvbnN0IGJvdW5kRXhlY2EgPSAoLi4uZXhlY2FBcmd1bWVudHMpID0+IGNhbGxCb3VuZEV4ZWNhKHtcblx0XHRtYXBBcmd1bWVudHMsXG5cdFx0ZGVlcE9wdGlvbnMsXG5cdFx0Ym91bmRPcHRpb25zLFxuXHRcdHNldEJvdW5kRXhlY2EsXG5cdFx0Y3JlYXRlTmVzdGVkLFxuXHR9LCAuLi5leGVjYUFyZ3VtZW50cyk7XG5cblx0aWYgKHNldEJvdW5kRXhlY2EgIT09IHVuZGVmaW5lZCkge1xuXHRcdHNldEJvdW5kRXhlY2EoYm91bmRFeGVjYSwgY3JlYXRlTmVzdGVkLCBib3VuZE9wdGlvbnMpO1xuXHR9XG5cblx0cmV0dXJuIGJvdW5kRXhlY2E7XG59O1xuXG5jb25zdCBjYWxsQm91bmRFeGVjYSA9ICh7bWFwQXJndW1lbnRzLCBkZWVwT3B0aW9ucyA9IHt9LCBib3VuZE9wdGlvbnMgPSB7fSwgc2V0Qm91bmRFeGVjYSwgY3JlYXRlTmVzdGVkfSwgZmlyc3RBcmd1bWVudCwgLi4ubmV4dEFyZ3VtZW50cykgPT4ge1xuXHRpZiAoaXNQbGFpbk9iamVjdChmaXJzdEFyZ3VtZW50KSkge1xuXHRcdHJldHVybiBjcmVhdGVOZXN0ZWQobWFwQXJndW1lbnRzLCBtZXJnZU9wdGlvbnMoYm91bmRPcHRpb25zLCBmaXJzdEFyZ3VtZW50KSwgc2V0Qm91bmRFeGVjYSk7XG5cdH1cblxuXHRjb25zdCB7ZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9ucywgaXNTeW5jfSA9IHBhcnNlQXJndW1lbnRzKHtcblx0XHRtYXBBcmd1bWVudHMsXG5cdFx0Zmlyc3RBcmd1bWVudCxcblx0XHRuZXh0QXJndW1lbnRzLFxuXHRcdGRlZXBPcHRpb25zLFxuXHRcdGJvdW5kT3B0aW9ucyxcblx0fSk7XG5cdHJldHVybiBpc1N5bmNcblx0XHQ/IGV4ZWNhQ29yZVN5bmMoZmlsZSwgY29tbWFuZEFyZ3VtZW50cywgb3B0aW9ucylcblx0XHQ6IGV4ZWNhQ29yZUFzeW5jKGZpbGUsIGNvbW1hbmRBcmd1bWVudHMsIG9wdGlvbnMsIGNyZWF0ZU5lc3RlZCk7XG59O1xuXG5jb25zdCBwYXJzZUFyZ3VtZW50cyA9ICh7bWFwQXJndW1lbnRzLCBmaXJzdEFyZ3VtZW50LCBuZXh0QXJndW1lbnRzLCBkZWVwT3B0aW9ucywgYm91bmRPcHRpb25zfSkgPT4ge1xuXHRjb25zdCBjYWxsQXJndW1lbnRzID0gaXNUZW1wbGF0ZVN0cmluZyhmaXJzdEFyZ3VtZW50KVxuXHRcdD8gcGFyc2VUZW1wbGF0ZXMoZmlyc3RBcmd1bWVudCwgbmV4dEFyZ3VtZW50cylcblx0XHQ6IFtmaXJzdEFyZ3VtZW50LCAuLi5uZXh0QXJndW1lbnRzXTtcblx0Y29uc3QgW2luaXRpYWxGaWxlLCBpbml0aWFsQXJndW1lbnRzLCBpbml0aWFsT3B0aW9uc10gPSBub3JtYWxpemVQYXJhbWV0ZXJzKC4uLmNhbGxBcmd1bWVudHMpO1xuXHRjb25zdCBtZXJnZWRPcHRpb25zID0gbWVyZ2VPcHRpb25zKG1lcmdlT3B0aW9ucyhkZWVwT3B0aW9ucywgYm91bmRPcHRpb25zKSwgaW5pdGlhbE9wdGlvbnMpO1xuXHRjb25zdCB7XG5cdFx0ZmlsZSA9IGluaXRpYWxGaWxlLFxuXHRcdGNvbW1hbmRBcmd1bWVudHMgPSBpbml0aWFsQXJndW1lbnRzLFxuXHRcdG9wdGlvbnMgPSBtZXJnZWRPcHRpb25zLFxuXHRcdGlzU3luYyA9IGZhbHNlLFxuXHR9ID0gbWFwQXJndW1lbnRzKHtmaWxlOiBpbml0aWFsRmlsZSwgY29tbWFuZEFyZ3VtZW50czogaW5pdGlhbEFyZ3VtZW50cywgb3B0aW9uczogbWVyZ2VkT3B0aW9uc30pO1xuXHRyZXR1cm4ge1xuXHRcdGZpbGUsXG5cdFx0Y29tbWFuZEFyZ3VtZW50cyxcblx0XHRvcHRpb25zLFxuXHRcdGlzU3luYyxcblx0fTtcbn07XG4iLCAiLy8gTWFpbiBsb2dpYyBmb3IgYGV4ZWNhQ29tbWFuZCgpYFxuZXhwb3J0IGNvbnN0IG1hcENvbW1hbmRBc3luYyA9ICh7ZmlsZSwgY29tbWFuZEFyZ3VtZW50c30pID0+IHBhcnNlQ29tbWFuZChmaWxlLCBjb21tYW5kQXJndW1lbnRzKTtcblxuLy8gTWFpbiBsb2dpYyBmb3IgYGV4ZWNhQ29tbWFuZFN5bmMoKWBcbmV4cG9ydCBjb25zdCBtYXBDb21tYW5kU3luYyA9ICh7ZmlsZSwgY29tbWFuZEFyZ3VtZW50c30pID0+ICh7Li4ucGFyc2VDb21tYW5kKGZpbGUsIGNvbW1hbmRBcmd1bWVudHMpLCBpc1N5bmM6IHRydWV9KTtcblxuLy8gQ29udmVydCBgZXhlY2FDb21tYW5kKGNvbW1hbmQpYCBpbnRvIGBleGVjYShmaWxlLCAuLi5jb21tYW5kQXJndW1lbnRzKWBcbmNvbnN0IHBhcnNlQ29tbWFuZCA9IChjb21tYW5kLCB1bnVzZWRBcmd1bWVudHMpID0+IHtcblx0aWYgKHVudXNlZEFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGNvbW1hbmQgYW5kIGl0cyBhcmd1bWVudHMgbXVzdCBiZSBwYXNzZWQgYXMgYSBzaW5nbGUgc3RyaW5nOiAke2NvbW1hbmR9ICR7dW51c2VkQXJndW1lbnRzfS5gKTtcblx0fVxuXG5cdGNvbnN0IFtmaWxlLCAuLi5jb21tYW5kQXJndW1lbnRzXSA9IHBhcnNlQ29tbWFuZFN0cmluZyhjb21tYW5kKTtcblx0cmV0dXJuIHtmaWxlLCBjb21tYW5kQXJndW1lbnRzfTtcbn07XG5cbi8vIENvbnZlcnQgYGNvbW1hbmRgIHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIGZpbGUgb3IgYXJndW1lbnRzIHRvIHBhc3MgdG8gJGAkey4uLmZpbGVPckNvbW1hbmRBcmd1bWVudHN9YFxuZXhwb3J0IGNvbnN0IHBhcnNlQ29tbWFuZFN0cmluZyA9IGNvbW1hbmQgPT4ge1xuXHRpZiAodHlwZW9mIGNvbW1hbmQgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGNvbW1hbmQgbXVzdCBiZSBhIHN0cmluZzogJHtTdHJpbmcoY29tbWFuZCl9LmApO1xuXHR9XG5cblx0Y29uc3QgdHJpbW1lZENvbW1hbmQgPSBjb21tYW5kLnRyaW0oKTtcblx0aWYgKHRyaW1tZWRDb21tYW5kID09PSAnJykge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0IHRva2VucyA9IFtdO1xuXHRmb3IgKGNvbnN0IHRva2VuIG9mIHRyaW1tZWRDb21tYW5kLnNwbGl0KFNQQUNFU19SRUdFWFApKSB7XG5cdFx0Ly8gQWxsb3cgc3BhY2VzIHRvIGJlIGVzY2FwZWQgYnkgYSBiYWNrc2xhc2ggaWYgbm90IG1lYW50IGFzIGEgZGVsaW1pdGVyXG5cdFx0Y29uc3QgcHJldmlvdXNUb2tlbiA9IHRva2Vucy5hdCgtMSk7XG5cdFx0aWYgKHByZXZpb3VzVG9rZW4gJiYgcHJldmlvdXNUb2tlbi5lbmRzV2l0aCgnXFxcXCcpKSB7XG5cdFx0XHQvLyBNZXJnZSBwcmV2aW91cyB0b2tlbiB3aXRoIGN1cnJlbnQgb25lXG5cdFx0XHR0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdID0gYCR7cHJldmlvdXNUb2tlbi5zbGljZSgwLCAtMSl9ICR7dG9rZW59YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG9rZW5zLnB1c2godG9rZW4pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0b2tlbnM7XG59O1xuXG5jb25zdCBTUEFDRVNfUkVHRVhQID0gLyArL2c7XG4iLCAiLy8gU2V0cyBgJC5zeW5jYCBhbmQgYCQuc2BcbmV4cG9ydCBjb25zdCBzZXRTY3JpcHRTeW5jID0gKGJvdW5kRXhlY2EsIGNyZWF0ZU5lc3RlZCwgYm91bmRPcHRpb25zKSA9PiB7XG5cdGJvdW5kRXhlY2Euc3luYyA9IGNyZWF0ZU5lc3RlZChtYXBTY3JpcHRTeW5jLCBib3VuZE9wdGlvbnMpO1xuXHRib3VuZEV4ZWNhLnMgPSBib3VuZEV4ZWNhLnN5bmM7XG59O1xuXG4vLyBNYWluIGxvZ2ljIGZvciBgJGBcbmV4cG9ydCBjb25zdCBtYXBTY3JpcHRBc3luYyA9ICh7b3B0aW9uc30pID0+IGdldFNjcmlwdE9wdGlvbnMob3B0aW9ucyk7XG5cbi8vIE1haW4gbG9naWMgZm9yIGAkLnN5bmNgXG5jb25zdCBtYXBTY3JpcHRTeW5jID0gKHtvcHRpb25zfSkgPT4gKHsuLi5nZXRTY3JpcHRPcHRpb25zKG9wdGlvbnMpLCBpc1N5bmM6IHRydWV9KTtcblxuLy8gYCRgIGlzIGxpa2UgYGV4ZWNhYCBidXQgd2l0aCBzY3JpcHQtZnJpZW5kbHkgb3B0aW9uczogYHtzdGRpbjogJ2luaGVyaXQnLCBwcmVmZXJMb2NhbDogdHJ1ZX1gXG5jb25zdCBnZXRTY3JpcHRPcHRpb25zID0gb3B0aW9ucyA9PiAoe29wdGlvbnM6IHsuLi5nZXRTY3JpcHRTdGRpbk9wdGlvbihvcHRpb25zKSwgLi4ub3B0aW9uc319KTtcblxuY29uc3QgZ2V0U2NyaXB0U3RkaW5PcHRpb24gPSAoe2lucHV0LCBpbnB1dEZpbGUsIHN0ZGlvfSkgPT4gaW5wdXQgPT09IHVuZGVmaW5lZCAmJiBpbnB1dEZpbGUgPT09IHVuZGVmaW5lZCAmJiBzdGRpbyA9PT0gdW5kZWZpbmVkXG5cdD8ge3N0ZGluOiAnaW5oZXJpdCd9XG5cdDoge307XG5cbi8vIFdoZW4gdXNpbmcgJCguLi4pLnBpcGUoLi4uKSwgbW9zdCBzY3JpcHQtZnJpZW5kbHkgb3B0aW9ucyBzaG91bGQgYXBwbHkgdG8gYm90aCBjb21tYW5kcy5cbi8vIEhvd2V2ZXIsIHNvbWUgb3B0aW9ucyAobGlrZSBgc3RkaW46ICdpbmhlcml0J2ApIHdvdWxkIGNyZWF0ZSBpc3N1ZXMgd2l0aCBwaXBpbmcsIGkuZS4gY2Fubm90IGJlIGRlZXAuXG5leHBvcnQgY29uc3QgZGVlcFNjcmlwdE9wdGlvbnMgPSB7cHJlZmVyTG9jYWw6IHRydWV9O1xuIiwgImltcG9ydCB7Y3JlYXRlRXhlY2F9IGZyb20gJy4vbGliL21ldGhvZHMvY3JlYXRlLmpzJztcbmltcG9ydCB7bWFwQ29tbWFuZEFzeW5jLCBtYXBDb21tYW5kU3luY30gZnJvbSAnLi9saWIvbWV0aG9kcy9jb21tYW5kLmpzJztcbmltcG9ydCB7bWFwTm9kZX0gZnJvbSAnLi9saWIvbWV0aG9kcy9ub2RlLmpzJztcbmltcG9ydCB7bWFwU2NyaXB0QXN5bmMsIHNldFNjcmlwdFN5bmMsIGRlZXBTY3JpcHRPcHRpb25zfSBmcm9tICcuL2xpYi9tZXRob2RzL3NjcmlwdC5qcyc7XG5pbXBvcnQge2dldElwY0V4cG9ydH0gZnJvbSAnLi9saWIvaXBjL21ldGhvZHMuanMnO1xuXG5leHBvcnQge3BhcnNlQ29tbWFuZFN0cmluZ30gZnJvbSAnLi9saWIvbWV0aG9kcy9jb21tYW5kLmpzJztcbmV4cG9ydCB7RXhlY2FFcnJvciwgRXhlY2FTeW5jRXJyb3J9IGZyb20gJy4vbGliL3JldHVybi9maW5hbC1lcnJvci5qcyc7XG5cbmV4cG9ydCBjb25zdCBleGVjYSA9IGNyZWF0ZUV4ZWNhKCgpID0+ICh7fSkpO1xuZXhwb3J0IGNvbnN0IGV4ZWNhU3luYyA9IGNyZWF0ZUV4ZWNhKCgpID0+ICh7aXNTeW5jOiB0cnVlfSkpO1xuZXhwb3J0IGNvbnN0IGV4ZWNhQ29tbWFuZCA9IGNyZWF0ZUV4ZWNhKG1hcENvbW1hbmRBc3luYyk7XG5leHBvcnQgY29uc3QgZXhlY2FDb21tYW5kU3luYyA9IGNyZWF0ZUV4ZWNhKG1hcENvbW1hbmRTeW5jKTtcbmV4cG9ydCBjb25zdCBleGVjYU5vZGUgPSBjcmVhdGVFeGVjYShtYXBOb2RlKTtcbmV4cG9ydCBjb25zdCAkID0gY3JlYXRlRXhlY2EobWFwU2NyaXB0QXN5bmMsIHt9LCBkZWVwU2NyaXB0T3B0aW9ucywgc2V0U2NyaXB0U3luYyk7XG5cbmNvbnN0IHtcblx0c2VuZE1lc3NhZ2UsXG5cdGdldE9uZU1lc3NhZ2UsXG5cdGdldEVhY2hNZXNzYWdlLFxuXHRnZXRDYW5jZWxTaWduYWwsXG59ID0gZ2V0SXBjRXhwb3J0KCk7XG5leHBvcnQge1xuXHRzZW5kTWVzc2FnZSxcblx0Z2V0T25lTWVzc2FnZSxcblx0Z2V0RWFjaE1lc3NhZ2UsXG5cdGdldENhbmNlbFNpZ25hbCxcbn07XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbiwgTWVudUJhckV4dHJhIH0gZnJvbSBcIkByYXljYXN0L2FwaVwiO1xuXG5pbnRlcmZhY2UgTmV0d29yayB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lGaSgpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxOZXR3b3JrIHwgZmFsc2U+KGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IGV4ZWNhIH0gPSBhd2FpdCBpbXBvcnQoXCJleGVjYVwiKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBhd2FpdCBleGVjYWAvdXNyL3NiaW4vaXBjb25maWcgZ2V0c3VtbWFyeSBlbjBgLnBpcGVgZ3JlcCAke2AgU1NJRCA6YH1gO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGF3YWl0IGV4ZWNhYC91c3Ivc2Jpbi9uZXR3b3Jrc2V0dXAgLWdldGN1cnJlbnRsb2NhdGlvbmA7XG5cbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIG5hbWU6IG5hbWUuc3Rkb3V0LnJlcGxhY2UoXCJTU0lEIDpcIiwgXCJcIikudHJpbSgpLFxuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbi5zdGRvdXQudHJpbSgpLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgICBzZXRTdGF0ZSh7IG5hbWU6IFwiXCIsIGxvY2F0aW9uOiBcIlwiIH0pO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzdGF0dXMgPSBzdGF0ZSAmJiBzdGF0ZS5uYW1lLmxlbmd0aDtcblxuICByZXR1cm4gKFxuICAgIDxNZW51QmFyRXh0cmFcbiAgICAgIGlzTG9hZGluZz17c3RhdGUgPT09IGZhbHNlfVxuICAgICAgdGl0bGU9e3N0YXR1cyA/IGAke3N0YXRlLm5hbWV9IG9uICR7c3RhdGUubG9jYXRpb259YCA6IFwiTm8gV2ktRmlcIn1cbiAgICAgIGljb249e3N0YXR1cyA/IHsgc291cmNlOiBcIlwiIH0gOiB7IHNvdXJjZTogSWNvbi5XYXJuaW5nLCB0aW50Q29sb3I6IFwib3JhbmdlXCIgfX1cbiAgICA+PC9NZW51QmFyRXh0cmE+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFSLGNBQStCLE9BQU87QUFDNUMsTUFBSSxPQUFPLFVBQVUsWUFBWSxVQUFVLE1BQU07QUFDaEQsV0FBTztBQUFBLEVBQ1I7QUFFQSxRQUFNLFlBQVksT0FBTyxlQUFlLEtBQUs7QUFDN0MsVUFBUSxjQUFjLFFBQVEsY0FBYyxPQUFPLGFBQWEsT0FBTyxlQUFlLFNBQVMsTUFBTSxTQUFTLEVBQUUsT0FBTyxlQUFlLFVBQVUsRUFBRSxPQUFPLFlBQVk7QUFDdEs7QUFQQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEscUJBR2Esc0JBWVAsdUJBSU8sZ0JBS0E7QUF4QmI7QUFBQTtBQUFBLHNCQUE0QjtBQUdyQixJQUFNLHVCQUF1QixDQUFDLE1BQU0sU0FBUztBQUNuRCxZQUFNLGFBQWEsaUJBQWlCLHNCQUFz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VUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxRQUNULFFBQU87QUFBQSxNQUNQO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLFFBQ1QsUUFBTztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsUUFDVCxRQUFPO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEsUUFDWixVQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNBLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLFVBQVM7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0EsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsUUFBTztBQUFBLFFBQ1AsYUFBWTtBQUFBLFFBQ1osVUFBUztBQUFBLE1BQ1Q7QUFBQSxNQUNBO0FBQUEsUUFDQSxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxRQUFPO0FBQUEsUUFDUCxhQUFZO0FBQUEs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QUFFLEVBQUUsS0FBSztBQUFBLFVBQzdDLFVBQVUsU0FBUyxPQUFPLEtBQUs7QUFBQSxRQUNqQyxDQUFDO0FBQUEsTUFDSCxTQUFTLFFBQVE7QUFDZixpQkFBUyxFQUFFLE1BQU0sSUFBSSxVQUFVLEdBQUcsQ0FBQztBQUFBLE1BQ3JDO0FBQUEsSUFDRixHQUFHO0FBQUEsRUFDTCxHQUFHLENBQUMsQ0FBQztBQUVMLFFBQU0sU0FBUyxTQUFTLE1BQU0sS0FBSztBQUVuQyxTQUNFO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxXQUFXLFVBQVU7QUFBQSxNQUNyQixPQUFPLFNBQVMsR0FBRyxNQUFNLElBQUksT0FBTyxNQUFNLFFBQVEsS0FBSztBQUFBLE1BQ3ZELE1BQU0sU0FBUyxFQUFFLFFBQVEsR0FBRyxJQUFJLEVBQUUsUUFBUSxnQkFBSyxTQUFTLFdBQVcsU0FBUztBQUFBO0FBQUEsRUFDN0U7QUFFTDsiLAogICJuYW1lcyI6IFsiZXhwcmVzc2lvbiIsICJwcm9jZXNzIiwgImltcG9ydF9ub2RlX3Byb2Nlc3MiLCAiaW1wb3J0X25vZGVfdXRpbCIsICJwcm9jZXNzIiwgImltcG9ydF9ub2RlX3Byb2Nlc3MiLCAidHR5IiwgImltcG9ydF9ub2RlX3V0aWwiLCAiaW1wb3J0X25vZGVfcHJvY2VzcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJwYXRoIiwgImkiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicGF0aCIsICJ1IiwgIm8iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicGF0aCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJwYXRoIiwgImkiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicGF0aEtleSIsICJwbGF0Zm9ybSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJwYXRoIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInBhdGgiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicGF0aCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJzcGF3biIsICJzcGF3blN5bmMiLCAicGxhdGZvcm0iLCAiaW5pdF9kZWZhdWx0IiwgInBhdGgiLCAiaW1wb3J0X25vZGVfdXRpbCIsICJpbXBvcnRfbm9kZV9jaGlsZF9wcm9jZXNzIiwgImltcG9ydF9ub2RlX3VybCIsICJpbml0X2RlZmF1bHQiLCAiZXhlY0ZpbGVDYWxsYmFjayIsICJpbXBvcnRfbm9kZV9wcm9jZXNzIiwgImltcG9ydF9ub2RlX3BhdGgiLCAicHJvY2VzcyIsICJleGVjUGF0aCIsICJwYXRoIiwgInNpZ25hbHMiLCAiaW1wb3J0X25vZGVfb3MiLCAic2lnbmFscyIsICJpbXBvcnRfbm9kZV9vcyIsICJub3JtYWxpemVTaWduYWwiLCAiaXNDb25uZWN0ZWQiLCAiaW1wb3J0X25vZGVfZXZlbnRzIiwgImltcG9ydF9ub2RlX2V2ZW50cyIsICJpbXBvcnRfcHJvbWlzZXMiLCAiaW1wb3J0X25vZGVfZXZlbnRzIiwgImltcG9ydF9ub2RlX2V2ZW50cyIsICJpbXBvcnRfbm9kZV91dGlsIiwgImltcG9ydF9wcm9taXNlcyIsICJpbml0X2dyYWNlZnVsIiwgImltcG9ydF9wcm9taXNlcyIsICJpbXBvcnRfbm9kZV9wcm9jZXNzIiwgImltcG9ydF9ub2RlX3BhdGgiLCAiaW5pdF9ub2RlIiwgInBhdGgiLCAiY29ycmVjdEVuY29kaW5nIiwgImltcG9ydF9ub2RlX3BhdGgiLCAiaW1wb3J0X25vZGVfcHJvY2VzcyIsICJwYXRoIiwgInByb2Nlc3MiLCAiaW1wb3J0X25vZGVfcGF0aCIsICJpbXBvcnRfbm9kZV9wcm9jZXNzIiwgImluaXRfZ3JhY2VmdWwiLCAiaW5pdF9ub2RlIiwgImNyb3NzU3Bhd24iLCAicHJvY2VzcyIsICJwYXRoIiwgIm9iamVjdFRvU3RyaW5nIiwgImlkZW50aXR5IiwgImlkZW50aXR5IiwgInRleHRFbmNvZGVyIiwgInRleHREZWNvZGVyIiwgImlkZW50aXR5IiwgImltcG9ydF9ub2RlX2V2ZW50cyIsICJpbXBvcnRfcHJvbWlzZXMiLCAiaW1wb3J0X25vZGVfdXRpbCIsICJtaWxsaXNlY29uZHMiLCAiY291bnQiLCAiaXNSZWFkYWJsZVN0cmVhbSIsICJpc1dyaXRhYmxlU3RyZWFtIiwgImltcG9ydF9ub2RlX3Byb2Nlc3MiLCAiaXNXcml0YWJsZVN0cmVhbSIsICJwcm9jZXNzIiwgImluaXRfYXJyYXkiLCAiYWRkRGVmYXVsdFZhbHVlIiwgImluaXRfYXJyYXkiLCAiaW1wb3J0X25vZGVfZnMiLCAiaW1wb3J0X25vZGVfdHR5IiwgInR0eSIsICJhZGRQcm9wZXJ0aWVzIiwgIm9wdGlvbk5hbWUiLCAidmFsdWUiLCAiaW1wb3J0X25vZGVfZnMiLCAic3RyaXBGaW5hbE5ld2xpbmUiLCAiTEYiLCAiaW1wb3J0X25vZGVfYnVmZmVyIiwgImltcG9ydF9ub2RlX3N0cmluZ19kZWNvZGVyIiwgInRleHRFbmNvZGVyIiwgImltcG9ydF9ub2RlX3V0aWwiLCAiaWRlbnRpdHlHZW5lcmF0b3IiLCAiZW5jb2RpbmciLCAiZ2VuZXJhdG9ycyIsICJpbXBvcnRfbm9kZV9mcyIsICJzdHJpcEZpbmFsTmV3bGluZSIsICJwYXRoIiwgImltcG9ydF9ub2RlX2V2ZW50cyIsICJpbXBvcnRfbm9kZV9jaGlsZF9wcm9jZXNzIiwgImltcG9ydF9ub2RlX2V2ZW50cyIsICJ0aHJvd09uRGlzY29ubmVjdCIsICJpbXBvcnRfbm9kZV9ldmVudHMiLCAiaW1wb3J0X25vZGVfcHJvY2VzcyIsICJwcm9jZXNzIiwgImltcG9ydF9ub2RlX2NoaWxkX3Byb2Nlc3MiLCAiaW1wb3J0X25vZGVfc3RyZWFtIiwgImltcG9ydF9ub2RlX2ZzIiwgImltcG9ydF9ub2RlX2J1ZmZlciIsICJpbXBvcnRfbm9kZV9zdHJlYW0iLCAiYWRkUHJvcGVydGllcyIsICJpbXBvcnRfbm9kZV9ldmVudHMiLCAiaW1wb3J0X25vZGVfc3RyZWFtIiwgImltcG9ydF9wcm9taXNlcyIsICJub29wIiwgIlBhc3NUaHJvdWdoU3RyZWFtIiwgImFib3J0ZWQiLCAiaW5jcmVtZW50IiwgImltcG9ydF9wcm9taXNlcyIsICJpbml0X3NpZ25hbHMiLCAiZ2xvYmFsIiwgInByb2Nlc3MiLCAiaW5pdF9zaWduYWxzIiwgImkiLCAiY291bnQiLCAiYSIsICJpbXBvcnRfbm9kZV9ldmVudHMiLCAiaW1wb3J0X3Byb21pc2VzIiwgImltcG9ydF9ub2RlX3V0aWwiLCAiaW1wb3J0X25vZGVfZXZlbnRzIiwgImltcG9ydF9ub2RlX3N0cmVhbSIsICJzdHJpcEZpbmFsTmV3bGluZSIsICJpbXBvcnRfcHJvbWlzZXMiLCAiZ2V0U3RyZWFtQ29udGVudHMiLCAiaW5pdF9jb250ZW50cyIsICJzdHJpcEZpbmFsTmV3bGluZSIsICJpbXBvcnRfcHJvbWlzZXMiLCAiaW5pdF9jb250ZW50cyIsICJzdHJpcEZpbmFsTmV3bGluZSIsICJzdHJpcEZpbmFsTmV3bGluZSIsICJpc1ZlcmJvc2UiLCAiaW1wb3J0X25vZGVfZXZlbnRzIiwgImluaXRfZ3JhY2VmdWwiLCAiaW5pdF9jb250ZW50cyIsICJzdHJpcEZpbmFsTmV3bGluZSIsICJpbXBvcnRfcHJvbWlzZXMiLCAiaW1wb3J0X25vZGVfc3RyZWFtIiwgImltcG9ydF9ub2RlX3V0aWwiLCAicmVhZGFibGUiLCAiaW1wb3J0X25vZGVfc3RyZWFtIiwgImltcG9ydF9ub2RlX3V0aWwiLCAid3JpdGFibGUiLCAiaW1wb3J0X25vZGVfc3RyZWFtIiwgImltcG9ydF9ub2RlX3V0aWwiLCAiZHVwbGV4IiwgImltcG9ydF9ub2RlX2V2ZW50cyIsICJpbXBvcnRfbm9kZV9jaGlsZF9wcm9jZXNzIiwgIm1hcEFyZ3VtZW50cyIsICJib3VuZE9wdGlvbnMiLCAic2V0Qm91bmRFeGVjYSIsICJpbml0X2NvbW1hbmQiLCAiZ2V0Q2FuY2VsU2lnbmFsIiwgImdldEVhY2hNZXNzYWdlIiwgImdldE9uZU1lc3NhZ2UiLCAic2VuZE1lc3NhZ2UiLCAiaW5pdF9jb21tYW5kIiwgImluaXRfbm9kZSIsICJleGVjYSJdCn0K
