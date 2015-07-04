System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ],
    "blacklist": []
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "build": [
      "npm:react@0.14.0-beta1/lib/ReactCurrentOwner",
      "npm:process@0.10.1/browser",
      "npm:react@0.14.0-beta1/lib/escapeTextContentForBrowser",
      "npm:react@0.14.0-beta1/lib/emptyFunction",
      "npm:react@0.14.0-beta1/lib/CSSProperty",
      "npm:react@0.14.0-beta1/lib/ExecutionEnvironment",
      "npm:react@0.14.0-beta1/lib/camelize",
      "npm:react@0.14.0-beta1/lib/dangerousStyleValue",
      "npm:react@0.14.0-beta1/lib/hyphenate",
      "npm:react@0.14.0-beta1/lib/memoizeStringOnly",
      "npm:react@0.14.0-beta1/lib/toArray",
      "npm:react@0.14.0-beta1/lib/getMarkupWrap",
      "npm:react@0.14.0-beta1/lib/keyMirror",
      "npm:react@0.14.0-beta1/lib/setInnerHTML",
      "npm:react@0.14.0-beta1/lib/EventConstants",
      "npm:react@0.14.0-beta1/lib/EventPluginRegistry",
      "npm:react@0.14.0-beta1/lib/EventPluginUtils",
      "npm:react@0.14.0-beta1/lib/accumulateInto",
      "npm:react@0.14.0-beta1/lib/forEachAccumulated",
      "npm:react@0.14.0-beta1/lib/ReactEventEmitterMixin",
      "npm:react@0.14.0-beta1/lib/ViewportMetrics",
      "npm:react@0.14.0-beta1/lib/Object.assign",
      "npm:react@0.14.0-beta1/lib/isEventSupported",
      "npm:react@0.14.0-beta1/lib/ReactElement",
      "npm:react@0.14.0-beta1/lib/ReactInstanceMap",
      "npm:react@0.14.0-beta1/lib/ReactRootIndex",
      "npm:react@0.14.0-beta1/lib/adler32",
      "npm:react@0.14.0-beta1/lib/ReactPerf",
      "npm:react@0.14.0-beta1/lib/ReactOwner",
      "npm:react@0.14.0-beta1/lib/PooledClass",
      "npm:react@0.14.0-beta1/lib/Transaction",
      "npm:react@0.14.0-beta1/lib/emptyObject",
      "npm:react@0.14.0-beta1/lib/isNode",
      "npm:react@0.14.0-beta1/lib/ReactComponentEnvironment",
      "npm:react@0.14.0-beta1/lib/ReactPropTypeLocations",
      "npm:react@0.14.0-beta1/lib/ReactPropTypeLocationNames",
      "npm:react@0.14.0-beta1/lib/shouldUpdateReactComponent",
      "npm:react@0.14.0-beta1/lib/ReactNativeComponent",
      "npm:react@0.14.0-beta1/lib/validateDOMNesting",
      "npm:react@0.14.0-beta1/lib/findDOMNode",
      "npm:react@0.14.0-beta1/lib/focusNode",
      "npm:react@0.14.0-beta1/lib/ReactDOMButton",
      "npm:react@0.14.0-beta1/lib/ReactFragment",
      "npm:react@0.14.0-beta1/lib/getIteratorFn",
      "npm:react@0.14.0-beta1/lib/ReactDOMSelect",
      "npm:react@0.14.0-beta1/lib/ReactDOMTextarea",
      "npm:react@0.14.0-beta1/lib/flattenChildren",
      "npm:react@0.14.0-beta1/lib/keyOf",
      "npm:react@0.14.0-beta1/lib/shallowEqual",
      "npm:react@0.14.0-beta1/lib/EventPropagators",
      "npm:react@0.14.0-beta1/lib/getTextContentAccessor",
      "npm:react@0.14.0-beta1/lib/SyntheticEvent",
      "npm:react@0.14.0-beta1/lib/SyntheticInputEvent",
      "npm:react@0.14.0-beta1/lib/isTextInputElement",
      "npm:react@0.14.0-beta1/lib/ClientReactRootIndex",
      "npm:react@0.14.0-beta1/lib/DefaultEventPluginOrder",
      "npm:react@0.14.0-beta1/lib/getEventTarget",
      "npm:react@0.14.0-beta1/lib/getEventModifierState",
      "npm:react@0.14.0-beta1/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.0-beta1/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.0-beta1/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.0-beta1/lib/EventListener",
      "npm:react@0.14.0-beta1/lib/getUnboundedScrollPosition",
      "npm:react@0.14.0-beta1/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.0-beta1/lib/ReactErrorUtils",
      "npm:react@0.14.0-beta1/lib/getNodeForCharacterOffset",
      "npm:react@0.14.0-beta1/lib/getActiveElement",
      "npm:react@0.14.0-beta1/lib/SelectEventPlugin",
      "npm:react@0.14.0-beta1/lib/ServerReactRootIndex",
      "npm:react@0.14.0-beta1/lib/SyntheticClipboardEvent",
      "npm:react@0.14.0-beta1/lib/SyntheticFocusEvent",
      "npm:react@0.14.0-beta1/lib/getEventCharCode",
      "npm:react@0.14.0-beta1/lib/getEventKey",
      "npm:react@0.14.0-beta1/lib/SyntheticDragEvent",
      "npm:react@0.14.0-beta1/lib/SyntheticTouchEvent",
      "npm:react@0.14.0-beta1/lib/SyntheticWheelEvent",
      "npm:react@0.14.0-beta1/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.0-beta1/lib/ReactDefaultPerfAnalysis",
      "npm:react@0.14.0-beta1/lib/performance",
      "npm:react@0.14.0-beta1/lib/renderSubtreeIntoContainer",
      "npm:react@0.14.0-beta1/lib/ReactServerBatchingStrategy",
      "npm:react@0.14.0-beta1/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.0-beta1/lib/ReactElementValidator",
      "npm:react@0.14.0-beta1/lib/mapObject",
      "npm:react@0.14.0-beta1/lib/onlyChild",
      "npm:react@0.14.0-beta1/lib/deprecated",
      "npm:process@0.10.1",
      "npm:react@0.14.0-beta1/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.0-beta1/lib/warning",
      "npm:react@0.14.0-beta1/lib/camelizeStyleName",
      "npm:react@0.14.0-beta1/lib/hyphenateStyleName",
      "npm:react@0.14.0-beta1/lib/createArrayFromMixed",
      "npm:react@0.14.0-beta1/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.0-beta1/lib/setTextContent",
      "npm:react@0.14.0-beta1/lib/EventPluginHub",
      "npm:react@0.14.0-beta1/lib/ReactEmptyComponent",
      "npm:react@0.14.0-beta1/lib/ReactInstanceHandles",
      "npm:react@0.14.0-beta1/lib/ReactMarkupChecksum",
      "npm:react@0.14.0-beta1/lib/ReactRef",
      "npm:react@0.14.0-beta1/lib/CallbackQueue",
      "npm:react@0.14.0-beta1/lib/isTextNode",
      "npm:react@0.14.0-beta1/lib/ReactCompositeComponent",
      "npm:react@0.14.0-beta1/lib/AutoFocusUtils",
      "npm:react@0.14.0-beta1/lib/ReactPropTypes",
      "npm:react@0.14.0-beta1/lib/traverseAllChildren",
      "npm:react@0.14.0-beta1/lib/ReactChildReconciler",
      "npm:react@0.14.0-beta1/lib/FallbackCompositionState",
      "npm:react@0.14.0-beta1/lib/SyntheticCompositionEvent",
      "npm:react@0.14.0-beta1/lib/ChangeEventPlugin",
      "npm:react@0.14.0-beta1/lib/SyntheticUIEvent",
      "npm:react@0.14.0-beta1/lib/ReactEventListener",
      "npm:react@0.14.0-beta1/lib/ReactComponent",
      "npm:react@0.14.0-beta1/lib/ReactDOMSelection",
      "npm:react@0.14.0-beta1/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.0-beta1/lib/performanceNow",
      "npm:react@0.14.0-beta1/lib/ReactServerRendering",
      "npm:react@0.14.0-beta1/lib/ReactDOM",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:react@0.14.0-beta1/lib/CSSPropertyOperations",
      "npm:react@0.14.0-beta1/lib/createNodesFromMarkup",
      "npm:react@0.14.0-beta1/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.0-beta1/lib/ReactReconciler",
      "npm:react@0.14.0-beta1/lib/ReactUpdates",
      "npm:react@0.14.0-beta1/lib/containsNode",
      "npm:react@0.14.0-beta1/lib/instantiateReactComponent",
      "npm:react@0.14.0-beta1/lib/LinkedValueUtils",
      "npm:react@0.14.0-beta1/lib/ReactChildren",
      "npm:react@0.14.0-beta1/lib/ReactMultiChild",
      "npm:react@0.14.0-beta1/lib/BeforeInputEventPlugin",
      "npm:react@0.14.0-beta1/lib/SyntheticMouseEvent",
      "npm:react@0.14.0-beta1/lib/ReactClass",
      "npm:react@0.14.0-beta1/lib/ReactInputSelection",
      "npm:react@0.14.0-beta1/lib/SimpleEventPlugin",
      "npm:react@0.14.0-beta1/lib/ReactDefaultPerf",
      "npm:react@0.14.0-beta1/lib/ReactDOMServer",
      "npm:react@0.14.0-beta1/lib/ReactIsomorphic",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:react@0.14.0-beta1/lib/Danger",
      "npm:react@0.14.0-beta1/lib/ReactUpdateQueue",
      "npm:react@0.14.0-beta1/lib/ReactDOMInput",
      "npm:react@0.14.0-beta1/lib/ReactDOMOption",
      "npm:react@0.14.0-beta1/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.0-beta1/lib/ReactInjection",
      "npm:react@0.14.0-beta1/lib/ReactReconcileTransaction",
      "npm:react@0.14.0-beta1/lib/invariant",
      "npm:react@0.14.0-beta1/lib/DOMChildrenOperations",
      "npm:react@0.14.0-beta1/lib/ReactMount",
      "npm:react@0.14.0-beta1/lib/ReactDOMComponent",
      "npm:react@0.14.0-beta1/lib/ReactDefaultInjection",
      "npm:react@0.14.0-beta1/lib/DOMProperty",
      "npm:react@0.14.0-beta1/lib/ReactDOMIDOperations",
      "npm:react@0.14.0-beta1/lib/DOMPropertyOperations",
      "npm:react@0.14.0-beta1/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.14.0-beta1/lib/ReactDOMTextComponent",
      "npm:react@0.14.0-beta1/lib/ReactDOMClient",
      "npm:react@0.14.0-beta1/lib/React",
      "npm:react@0.14.0-beta1/react",
      "npm:react@0.14.0-beta1",
      "app/components/App"
    ]
  },
  "trace": true
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.6.15",
    "babel-runtime": "npm:babel-runtime@5.6.15",
    "core-js": "npm:core-js@0.9.18",
    "react": "npm:react@0.14.0-beta1",
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.3.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@0.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:babel-runtime@5.6.15": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.3.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react@0.14.0-beta1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

