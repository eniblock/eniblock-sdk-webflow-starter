// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gPzTb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 50619;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6cc18547aa71878d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"84YVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlchemyProvider", ()=>AlchemyProvider);
var _index03Ad9998Js = require("./index-03ad9998.js");
var _networks = require("@ethersproject/networks");
var _providers = require("@ethersproject/providers");
var _web = require("@ethersproject/web");
var _utils = require("./api/utils");
var _bignumber = require("@ethersproject/bignumber");
var _axios = require("axios");
var _abstractProvider = require("@ethersproject/abstract-provider");
var _wallet = require("@ethersproject/wallet");
var _contracts = require("@ethersproject/contracts");
/** Maximum size of a batch on the rpc provider. */ const DEFAULT_MAX_REQUEST_BATCH_SIZE = 100;
/** Timeout interval before the pending batch is sent. */ const DEFAULT_REQUEST_BATCH_DELAY_MS = 10;
/**
 * Internal class to enqueue requests and automatically send/process batches.
 *
 * The underlying batching mechanism is loosely based on ethers.js's
 * `JsonRpcBatchProvider`.
 *
 * @internal
 */ class RequestBatcher {
    constructor(sendBatchFn, maxBatchSize = DEFAULT_MAX_REQUEST_BATCH_SIZE){
        this.sendBatchFn = sendBatchFn;
        this.maxBatchSize = maxBatchSize;
        /**
         * Array of enqueued requests along with the constructed promise handlers for
         * each request.
         */ this.pendingBatch = [];
    }
    /**
     * Enqueues the provided request. The batch is immediately sent if the maximum
     * batch size is reached. Otherwise, the request is enqueued onto a batch that
     * is sent after 10ms.
     *
     * Returns a promise that resolves with the result of the request.
     */ enqueueRequest(request) {
        return (0, _index03Ad9998Js._)(this, void 0, void 0, function*() {
            const inflightRequest = {
                request,
                resolve: undefined,
                reject: undefined
            };
            const promise = new Promise((resolve, reject)=>{
                inflightRequest.resolve = resolve;
                inflightRequest.reject = reject;
            });
            this.pendingBatch.push(inflightRequest);
            if (this.pendingBatch.length === this.maxBatchSize) // Send batch immediately if we are at the maximum batch size.
            this.sendBatchRequest();
            else if (!this.pendingBatchTimer) // Schedule batch for next event loop + short duration
            this.pendingBatchTimer = setTimeout(()=>this.sendBatchRequest(), DEFAULT_REQUEST_BATCH_DELAY_MS);
            return promise;
        });
    }
    /**
     * Sends the currently queued batches and resets the batch and timer. Processes
     * the batched response results back to the original promises.
     */ sendBatchRequest() {
        return (0, _index03Ad9998Js._)(this, void 0, void 0, function*() {
            // Get the current batch and clear it, so new requests
            // go into the next batch
            const batch = this.pendingBatch;
            this.pendingBatch = [];
            if (this.pendingBatchTimer) {
                clearTimeout(this.pendingBatchTimer);
                this.pendingBatchTimer = undefined;
            }
            // Get the request as an array of requests
            const request = batch.map((inflight)=>inflight.request);
            return this.sendBatchFn(request).then((result)=>{
                // For each result, feed it to the correct Promise, depending
                // on whether it was a success or error
                batch.forEach((inflightRequest, index)=>{
                    const payload = result[index];
                    if (payload.error) {
                        const error = new Error(payload.error.message);
                        error.code = payload.error.code;
                        error.data = payload.error.data;
                        inflightRequest.reject(error);
                    } else inflightRequest.resolve(payload.result);
                });
            }, (error)=>{
                batch.forEach((inflightRequest)=>{
                    inflightRequest.reject(error);
                });
            });
        });
    }
}
/**
 * SDK's custom implementation of ethers.js's 'AlchemyProvider'.
 *
 * Do not call this constructor directly. Instead, instantiate an instance of
 * {@link Alchemy} and call {@link Alchemy.config.getProvider()}.
 *
 * @public
 */ class AlchemyProvider extends (0, _providers.JsonRpcProvider) {
    /** @internal */ constructor(config){
        // Normalize the API Key to a string.
        const apiKey = AlchemyProvider.getApiKey(config.apiKey);
        // Generate our own connection info with the correct endpoint URLs.
        const alchemyNetwork = AlchemyProvider.getAlchemyNetwork(config.network);
        const connection = AlchemyProvider.getAlchemyConnectionInfo(alchemyNetwork, apiKey, "http");
        // If a hardcoded url was specified in the config, use that instead of the
        // provided apiKey or network.
        if (config.url !== undefined) connection.url = config.url;
        connection.throttleLimit = config.maxRetries;
        // Normalize the Alchemy named network input to the network names used by
        // ethers. This allows the parent super constructor in JsonRpcProvider to
        // correctly set the network.
        const ethersNetwork = (0, _index03Ad9998Js.E)[alchemyNetwork];
        super(connection, ethersNetwork);
        this.apiKey = config.apiKey;
        this.maxRetries = config.maxRetries;
        this.batchRequests = config.batchRequests;
        // TODO: support individual headers when calling batch
        const batcherConnection = Object.assign(Object.assign({}, this.connection), {
            headers: Object.assign(Object.assign({}, this.connection.headers), {
                "Alchemy-Ethers-Sdk-Method": "batchSend"
            })
        });
        const sendBatchFn = (requests)=>{
            return (0, _web.fetchJson)(batcherConnection, JSON.stringify(requests));
        };
        this.batcher = new RequestBatcher(sendBatchFn);
        this.modifyFormatter();
    }
    /**
     * Overrides the `UrlJsonRpcProvider.getApiKey` method as implemented by
     * ethers.js. Returns the API key for an Alchemy provider.
     *
     * @internal
     * @override
     */ static getApiKey(apiKey) {
        if (apiKey == null) return 0, _index03Ad9998Js.D;
        if (apiKey && typeof apiKey !== "string") throw new Error(`Invalid apiKey '${apiKey}' provided. apiKey must be a string.`);
        return apiKey;
    }
    /**
     * Overrides the `BaseProvider.getNetwork` method as implemented by ethers.js.
     *
     * This override allows the SDK to set the provider's network to values not
     * yet supported by ethers.js.
     *
     * @internal
     * @override
     */ static getNetwork(network) {
        if (typeof network === "string" && network in (0, _index03Ad9998Js.C)) return (0, _index03Ad9998Js.C)[network];
        // Call the standard ethers.js getNetwork method for other networks.
        return (0, _networks.getNetwork)(network);
    }
    /**
     * Converts the `Networkish` input to the network enum used by Alchemy.
     *
     * @internal
     */ static getAlchemyNetwork(network) {
        if (network === undefined) return 0, _index03Ad9998Js.a;
        if (typeof network === "number") throw new Error(`Invalid network '${network}' provided. Network must be a string.`);
        // Guaranteed that `typeof network === 'string`.
        const isValidNetwork = Object.values((0, _index03Ad9998Js.N)).includes(network);
        if (!isValidNetwork) throw new Error(`Invalid network '${network}' provided. Network must be one of: ` + `${Object.values((0, _index03Ad9998Js.N)).join(", ")}.`);
        return network;
    }
    /**
     * Returns a {@link ConnectionInfo} object compatible with ethers that contains
     * the correct URLs for Alchemy.
     *
     * @internal
     */ static getAlchemyConnectionInfo(network, apiKey, type) {
        const url = type === "http" ? (0, _index03Ad9998Js.g)(network, apiKey) : (0, _index03Ad9998Js.b)(network, apiKey);
        return {
            headers: (0, _index03Ad9998Js.I) ? {
                "Alchemy-Ethers-Sdk-Version": (0, _index03Ad9998Js.V)
            } : {
                "Alchemy-Ethers-Sdk-Version": (0, _index03Ad9998Js.V),
                "Accept-Encoding": "gzip"
            },
            allowGzip: true,
            url
        };
    }
    /**
     * Overrides the method in ethers.js's `StaticJsonRpcProvider` class. This
     * method is called when calling methods on the parent class `BaseProvider`.
     *
     * @override
     */ detectNetwork() {
        const _super = Object.create(null, {
            detectNetwork: {
                get: ()=>super.detectNetwork
            }
        });
        return (0, _index03Ad9998Js._)(this, void 0, void 0, function*() {
            let network = this.network;
            if (network == null) {
                network = yield _super.detectNetwork.call(this);
                if (!network) throw new Error("No network detected");
            }
            return network;
        });
    }
    _startPending() {
        (0, _index03Ad9998Js.l)("WARNING: Alchemy Provider does not support pending filters");
    }
    /**
     * Overrides the ether's `isCommunityResource()` method. Returns true if the
     * current api key is the default key.
     *
     * @override
     */ isCommunityResource() {
        return this.apiKey === (0, _index03Ad9998Js.D);
    }
    /**
     * Overrides the base {@link JsonRpcProvider.send} method to implement custom
     * logic for sending requests to Alchemy.
     *
     * @param method The method name to use for the request.
     * @param params The parameters to use for the request.
     * @override
     * @public
     */ // TODO: Add headers for `perform()` override.
    send(method, params) {
        return this._send(method, params, "send");
    }
    /**
     * DO NOT MODIFY.
     *
     * Original code copied over from ether.js's `JsonRpcProvider.send()`.
     *
     * This method is copied over directly in order to implement custom headers
     *
     * @internal
     */ _send(method, params, methodName, forceBatch = false) {
        const request = {
            method,
            params,
            id: this._nextId++,
            jsonrpc: "2.0"
        };
        // START MODIFIED CODE
        const connection = Object.assign({}, this.connection);
        connection.headers["Alchemy-Ethers-Sdk-Method"] = methodName;
        if (this.batchRequests || forceBatch) return this.batcher.enqueueRequest(request);
        // END MODIFIED CODE
        this.emit("debug", {
            action: "request",
            request: (0, _index03Ad9998Js.d)(request),
            provider: this
        });
        // We can expand this in the future to any call, but for now these
        // are the biggest wins and do not require any serializing parameters.
        const cache = [
            "eth_chainId",
            "eth_blockNumber"
        ].indexOf(method) >= 0;
        if (cache && this._cache[method]) return this._cache[method];
        const result = (0, _web.fetchJson)(this.connection, JSON.stringify(request), getResult).then((result)=>{
            this.emit("debug", {
                action: "response",
                request,
                response: result,
                provider: this
            });
            return result;
        }, (error)=>{
            this.emit("debug", {
                action: "response",
                error,
                request,
                provider: this
            });
            throw error;
        });
        // Cache the fetch, but clear it on the next event loop
        if (cache) {
            this._cache[method] = result;
            setTimeout(()=>{
                // @ts-ignore - This is done by ethers.
                this._cache[method] = null;
            }, 0);
        }
        return result;
    }
    /**
     * Overrides the base `Formatter` class inherited from ethers to support
     * returning custom fields in Ethers response types.
     *
     * For context, ethers has a `Formatter` class that is used to format the
     * response from a JSON-RPC request. Any fields that are not defined in the
     * `Formatter` class are removed from the returned response. By modifying the
     * `Formatter` class in this method, we can add support for fields that are
     * not defined in ethers.
     */ modifyFormatter() {
        this.formatter.formats["receiptLog"]["removed"] = (val)=>{
            if (typeof val === "boolean") return val;
            return undefined;
        };
    }
}
/**
 * DO NOT MODIFY.
 *
 * Original code copied over from ether.js's
 * `@ethersproject/web/src.ts/index.ts`. Used to support
 * {@link AlchemyProvider._send}, which is also copied over.
 */ function getResult(payload) {
    if (payload.error) {
        const error = new Error(payload.error.message);
        error.code = payload.error.code;
        error.data = payload.error.data;
        throw error;
    }
    return payload.result;
}

},{"./index-03ad9998.js":"nGRNG","@ethersproject/networks":"6JNhW","@ethersproject/providers":"bErvj","@ethersproject/web":"5yjI3","./api/utils":"byXgH","@ethersproject/bignumber":"ckYYW","axios":"6SddO","@ethersproject/abstract-provider":"g1jr1","@ethersproject/wallet":"2DfhD","@ethersproject/contracts":"97okZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gPzTb"], null, "parcelRequire94c2")

//# sourceMappingURL=alchemy-provider-033c5719.aa71878d.js.map
