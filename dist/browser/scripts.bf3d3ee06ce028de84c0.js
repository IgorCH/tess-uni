!function(e){var t=this,n={ns:{},env:e,project:{preload:["package.system"],combineBatchSize:500}};n.performance=function(e){function t(){g=g||setTimeout(n,h)}function n(){clearTimeout(g),g=null;var e=function(){var e=[],t=0;for(var n in l)if(l.hasOwnProperty(n)&&l[n].length&&(e.push(n+"="+l[n].shift()),++t>=v))break;for(var n in u)if(u.hasOwnProperty(n)&&u[n].length&&(e.push(n+"="+u[n].shift()),++t>=v))break;return e.join(",")}();if(e){var n=o+"/vars="+e+"/*";if(!i||!navigator.sendBeacon(r,n)){var s=new Image,a=(new Date).getTime()+Math.round(100*Math.random());s.src=r+"/rnd="+a+n}t()}}var r,o,i,s,a={exports:{}},c=window.performance||{now:function(){return Date.now()}},u={},l={},d=c.getEntriesByType?function(e){return c.getEntriesByType("resource").filter(function(t){return t.name===e})[0]}:function(){},f={initjs:"i",mapjs:"m",combine_s:"cs",combine_m:"cm",combine_l:"cl"},p={eval:"e",duration:"d",cached:"c",encodedSize:"esz",decodedSize:"dsz",responseDuration:"res",requestDuration:"req"},m={statistics:{combine:{total:0,size:0,modules:0}},initTimings:{},now:function(){return c.now()},getResourceTimings:function(e){return d(e)||{}},init:function(e){r=e.url,o="/pid=443/cid=73188/dtype=stred"+e.data,i=Boolean(e.useSendBeacon&&navigator.sendBeacon),s=e.enable,m.initTimings=m.getResourceTimings(e.initUrl),m.saveResourceTimings("initjs",m.initTimings,{size:!1,cached:!1})},saveMeasure:function(e,n){if(s){var r=/^@/.test(e);if(r){var o=e.replace(/^@/,"").split(".");e=(f[o[0]]||o[0])+"."+(p[o[1]]||o[1])}if(n=Math.round(n),!isNaN(n)){var i=r?u:l;i[e]=i[e]||[],i[e].push(n),t()}}},startMeasure:function(e,t){t=void 0===t?c.now():t;var n=!1;return{finish:function(r){n||(r=void 0===r?c.now():r,m.saveMeasure(e,r-t),n=!0)}}},saveResourceTimings:function(e,t,n){var r="object"==typeof t?t:d(t);if(r&&(n=n||{},e=e.replace(/^@?/,"@"),this.saveMeasure(e+".duration",r.duration),r.responseStart)){var o=0===r.transferSize?1:0;this.saveMeasure(e+".responseDuration",r.responseEnd-r.responseStart),this.saveMeasure(e+".requestDuration",r.responseStart-r.requestStart),!1!==n.cached&&this.saveMeasure(e+".cached",o),!1===n.size||o||(this.saveMeasure(e+".encodedSize",r.encodedBodySize/1024),this.saveMeasure(e+".decodedSize",r.decodedBodySize/1024))}}},v=40,h=5e3,g=null;return window.addEventListener("beforeunload",function(){m.saveMeasure("combine.total",m.statistics.combine.total),m.saveMeasure("combine.modules",m.statistics.combine.modules),m.saveMeasure("combine.size",m.statistics.combine.size/1024),n()}),a.exports=m,a.exports}();var r=n.performance.startMeasure("@initjs.eval");n.count=function(e){var t={exports:{}},n=[],r=null,o=function(){(r||function(){n.push(arguments)}).apply(null,arguments)};return o.provideImplementation=function(e){if(r)throw new Error("ym.count: implementation was already provided.");r=e(n)},t.exports=o,t.exports}(),n.vow=n.ns.vow=function(e){var n={exports:{}};return function(e){var t,r=function(){var t=[],n=function(e){return t.push(e),1===t.length},r=function(){var e=t,n=0,r=t.length;for(t=[];n<r;)e[n++]()};if("function"==typeof setImmediate)return function(e){n(e)&&setImmediate(r)};if("object"==typeof process&&process.nextTick)return function(e){n(e)&&process.nextTick(r)};var o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=1,s=document.createTextNode("");return new o(r).observe(s,{characterData:!0}),function(e){n(e)&&(s.data=i*=-1)}}if(e.postMessage){var a=!0;if(e.attachEvent){var c=function(){a=!1};e.attachEvent("onmessage",c),e.postMessage("__checkAsync","*"),e.detachEvent("onmessage",c)}if(a){var u="__promise"+Math.random()+"_"+new Date,l=function(e){e.data===u&&(e.stopPropagation&&e.stopPropagation(),r())};return e.addEventListener?e.addEventListener("message",l,!0):e.attachEvent("onmessage",l),function(t){n(t)&&e.postMessage(u,"*")}}}var d=e.document;return"onreadystatechange"in d.createElement("script")?function(e){n(e)&&function(){var e=d.createElement("script");e.onreadystatechange=function(){e.parentNode.removeChild(e),e=e.onreadystatechange=null,r()},(d.documentElement||d.body).appendChild(e)}()}:function(e){n(e)&&setTimeout(r,0)}}(),o=function(e){r(function(){throw e})},i=function(e){return"function"==typeof e},s=function(e){return null!==e&&"object"==typeof e},a=Object.prototype.toString,c=Array.isArray||function(e){return"[object Array]"===a.call(e)},u=function(e){for(var t=[],n=0,r=e.length;n<r;)t.push(n++);return t},l=Object.keys||function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},d=function(e,t){return function(n){e.call(this,n,t)}},f=function(){this._promise=new p};f.prototype={promise:function(){return this._promise},resolve:function(e){this._promise.isResolved()||this._promise._resolve(e)},reject:function(e){this._promise.isResolved()||(h.isPromise(e)?(e=e.then(function(e){var t=h.defer();return t.reject(e),t.promise()}),this._promise._resolve(e)):this._promise._reject(e))},notify:function(e){this._promise.isResolved()||this._promise._notify(e)}};var p=function(e){if(this._value=t,this._status=0,this._fulfilledCallbacks=[],this._rejectedCallbacks=[],this._progressCallbacks=[],e){var n=this,r=e.length;e(function(e){n.isResolved()||n._resolve(e)},r>1?function(e){n.isResolved()||n._reject(e)}:t,r>2?function(e){n.isResolved()||n._notify(e)}:t)}};p.prototype={valueOf:function(){return this._value},isResolved:function(){return 0!==this._status},isFulfilled:function(){return 2===this._status},isRejected:function(){return 3===this._status},then:function(e,t,n,r){var o=new f;return this._addCallbacks(o,e,t,n,r),o.promise()},catch:function(e,n){return this.then(t,e,n)},fail:function(e,n){return this.then(t,e,n)},always:function(e,t){var n=this,r=function(){return e.call(this,n)};return this.then(r,r,t)},progress:function(e,n){return this.then(t,t,e,n)},spread:function(e,t,n){return this.then(function(t){return e.apply(this,t)},t,n)},done:function(e,t,n,r){this.then(e,t,n,r).fail(o)},delay:function(e){var t,n=this.then(function(n){var r=new f;return t=setTimeout(function(){r.resolve(n)},e),r.promise()});return n.always(function(){clearTimeout(t)}),n},timeout:function(e){var t=new f,n=setTimeout(function(){t.reject(new h.TimedOutError("timed out"))},e);return this.then(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise().always(function(){clearTimeout(n)}),t.promise()},_vow:!0,_resolve:function(e){if(!(this._status>1)){if(e===this)return void this._reject(TypeError("Can't resolve promise with itself"));if(this._status=1,e&&e._vow)return void(e.isFulfilled()?this._fulfill(e.valueOf()):e.isRejected()?this._reject(e.valueOf()):e.then(this._fulfill,this._reject,this._notify,this));if(s(e)||i(e)){var t;try{t=e.then}catch(e){return void this._reject(e)}if(i(t)){var n=this,r=!1;try{t.call(e,function(e){r||(r=!0,n._resolve(e))},function(e){r||(r=!0,n._reject(e))},function(e){n._notify(e)})}catch(e){r||this._reject(e)}return}}this._fulfill(e)}},_fulfill:function(e){this._status>1||(this._status=2,this._value=e,this._callCallbacks(this._fulfilledCallbacks,e),this._fulfilledCallbacks=this._rejectedCallbacks=this._progressCallbacks=t)},_reject:function(e){this._status>1||(this._status=3,this._value=e,this._callCallbacks(this._rejectedCallbacks,e),this._fulfilledCallbacks=this._rejectedCallbacks=this._progressCallbacks=t)},_notify:function(e){this._callCallbacks(this._progressCallbacks,e)},_addCallbacks:function(e,n,r,o,s){var a;r&&!i(r)?(s=r,r=t):o&&!i(o)&&(s=o,o=t),this.isRejected()||(a={defer:e,fn:i(n)?n:t,ctx:s},this.isFulfilled()?this._callCallbacks([a],this._value):this._fulfilledCallbacks.push(a)),this.isFulfilled()||(a={defer:e,fn:r,ctx:s},this.isRejected()?this._callCallbacks([a],this._value):this._rejectedCallbacks.push(a)),this._status<=1&&this._progressCallbacks.push({defer:e,fn:o,ctx:s})},_callCallbacks:function(e,t){var n=e.length;if(n){var o=this.isResolved(),i=this.isFulfilled(),s=this.isRejected();r(function(){for(var r,a,c,u=0;u<n;)if(a=(r=e[u++]).defer,c=r.fn){var l,d=r.ctx;try{l=d?c.call(d,t):c(t)}catch(e){a.reject(e);continue}o?a.resolve(l):a.notify(l)}else i?a.resolve(t):s?a.reject(t):a.notify(t)})}}};var m={cast:function(e){return h.cast(e)},all:function(e){return h.all(e)},race:function(e){return h.anyResolved(e)},resolve:function(e){return h.resolve(e)},reject:function(e){return h.reject(e)}};for(var v in m)m.hasOwnProperty(v)&&(p[v]=m[v]);var h={Deferred:f,Promise:p,defer:function(){return new f},when:function(e,t,n,r,o){return h.cast(e).then(t,n,r,o)},fail:function(e,n,r){return h.when(e,t,n,r)},always:function(e,t,n){return h.when(e).always(t,n)},progress:function(e,t,n){return h.when(e).progress(t,n)},spread:function(e,t,n,r){return h.when(e).spread(t,n,r)},done:function(e,t,n,r,o){h.when(e).done(t,n,r,o)},isPromise:function(e){return s(e)&&i(e.then)},cast:function(e){return e&&e._vow?e:h.resolve(e)},valueOf:function(e){return e&&i(e.valueOf)?e.valueOf():e},isFulfilled:function(e){return!e||!i(e.isFulfilled)||e.isFulfilled()},isRejected:function(e){return!(!e||!i(e.isRejected))&&e.isRejected()},isResolved:function(e){return!e||!i(e.isResolved)||e.isResolved()},resolve:function(e){var t=h.defer();return t.resolve(e),t.promise()},fulfill:function(e){var t=h.defer(),n=t.promise();return t.resolve(e),n.isFulfilled()?n:n.then(null,function(e){return e})},reject:function(e){var t=h.defer();return t.reject(e),t.promise()},invoke:function(t,n){var r,o=Math.max(arguments.length-1,0);if(o){r=Array(o);for(var i=0;i<o;)r[i++]=arguments[i]}try{return h.resolve(r?t.apply(e,r):t.call(e))}catch(e){return h.reject(e)}},all:function(e){var t=new f,n=c(e),r=n?u(e):l(e),o=r.length,i=n?[]:{};if(!o)return t.resolve(i),t.promise();var s=o;return h._forEach(e,function(e,n){i[r[n]]=e,--s||t.resolve(i)},t.reject,t.notify,t,r),t.promise()},allResolved:function(e){var t=new f,n=c(e),r=n?u(e):l(e),o=r.length;if(!o)return t.resolve(n?[]:{}),t.promise();var i=function(){--o||t.resolve(e)};return h._forEach(e,i,i,t.notify,t,r),t.promise()},allPatiently:function(e){return h.allResolved(e).then(function(){var t,n,r,o,i=c(e),s=i?u(e):l(e),a=s.length,d=0;if(!a)return i?[]:{};for(;d<a;)r=s[d++],h.isRejected(o=e[r])?(t||(t=i?[]:{}),i?t.push(o.valueOf()):t[r]=o.valueOf()):t||((n||(n=i?[]:{}))[r]=h.valueOf(o));if(t)throw t;return n})},any:function(e){var t=new f,n=e.length;if(!n)return t.reject(Error()),t.promise();var r,o=0;return h._forEach(e,t.resolve,function(e){o||(r=e),++o===n&&t.reject(r)},t.notify,t),t.promise()},anyResolved:function(e){var t=new f;return e.length?(h._forEach(e,t.resolve,t.reject,t.notify,t),t.promise()):(t.reject(Error()),t.promise())},delay:function(e,t){return h.resolve(e).delay(t)},timeout:function(e,t){return h.resolve(e).timeout(t)},_forEach:function(e,t,n,r,o,i){for(var s=i?i.length:e.length,a=0;a<s;)h.when(e[i?i[a]:a],d(t,a),n,r,o),++a},TimedOutError:function(e){var t=function(e){this.name="TimedOut",this.message=e};return t.prototype=new Error,t}()};h.__nextTick__=r;var g=!0;"object"==typeof n&&"object"==typeof n.exports&&(n.exports=h,g=!1),"object"==typeof modules&&i(modules.define)&&(modules.define("vow",function(e){e(h)}),g=!1),g&&(e.vow=h)}("undefined"!=typeof window?window:t),n.exports}(),n.utils=function(e){var t={exports:{}},n=t.exports,r=e.vow,o=Object.prototype.hasOwnProperty;return n.nextTick=r.__nextTick__,r.__nextTick__=void 0,n.isArray=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.call(e)},n.extend=Object.assign?Object.assign:function(e){for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];if(null!=r)for(var i in r)o.call(r,i)&&(e[i]=r[i])}return e},n.mergeSets=function(e,t){t.forEach(function(t){e.add(t)})},n.convertSetToArray=function(e){var t=[];return e.forEach(function(e){t.push(e)}),t},t.exports}({vow:n.vow});var o=function(e){var t={exports:{}},n=e.vow;return t.exports=function(e,t){var r=document.createElement("script"),o=n.defer();return window[t]=function(e){delete window[t],r.parentElement.removeChild(r),o.resolve(e)},r.src=e,document.head.appendChild(r),o.promise()},t.exports}({vow:n.vow}),i="__jsonp_"+(n.env.namespace||"ymaps"+Date.now()),s=function(e){function t(t){return e[t]}function n(e){this._config=e,this._sandbox=null,this._definitionsByName={},this._definitionsByStorage={},this._definitionsByAlias={},this._queuedForFetching={},this._remoteLoadingAllowed=l.defer(),this._modulesMapLoaded=this._remoteLoadingAllowed.promise().then(this._config.fetchMap).spread(function(e,t){this._processLoadedMap(e),t()},this);var t=this;this.providePackage=function(e){var n=t._findDefinition(this.name),r=Array.prototype.slice.call(arguments,1),o=t._require(["system.mergeImports"]).spread(function(e){return e.joinImports(n.name,{},n.depends,r)});e.async(o)}}function r(e,t,n,r,o,i,s,a,c){this.state=e,this.alias=null,this.name=t,this.storage=n,this.key=r,this.depends=o,this.dynamicDepends=a,this.declaration=i,this.context=s,this.exports=e===v.DEFINED?c:void 0,this.resolvingPromise=void 0,this.fetchingDeferred=void 0}function o(e,t){if(!e.dynamicDepends)return m;var n=[];for(var r in e.dynamicDepends)if(e.dynamicDepends.hasOwnProperty(r))for(var o=0,i=t.length;o<i;o++){var a=t[o];if(void 0!==a){var c=e.dynamicDepends[r](a);s(c)&&n.push(c)}}return n}function i(e,t,n){return f.call(e.dynamicDepends,t)?e.dynamicDepends[t].call(null,n):p}function s(e){return"string"==typeof e||function(e){return null!=e&&"object"==typeof e&&"string"==typeof e.key&&"string"==typeof e.storage}(e)}function a(e){return"string"==typeof e?e:e.key+"@"+e.storage}function c(e){var t=d.isArray(e);return"object"==typeof e&&!t&&f.call(e,"modules")?{modules:d.isArray(e.modules)?e.modules:[e.modules],data:e.data}:t?{modules:e}:{modules:[e]}}var u={exports:{}},l=t("vow"),d=t("./utils"),f=Object.prototype.hasOwnProperty,p={},m=Object.freeze([]),v={MENTIONED:1,QUEUED:2,FETCHING:3,DECLARED:4,RESOLVING:5,ERROR:6,DEFINED:7};return u.exports=n,n.prototype.allowRemoteLoading=function(){this._remoteLoadingAllowed.resolve()},n.prototype.isDefined=function(e){return Boolean(this._findDefinition(e))},n.prototype.define=function(e,t,n,o){var i,s,a,c;if("object"==typeof e){var u=e;e=u.name,s=u.storage,i=u.key,t=u.depends,n=u.declaration,o=u.context,a=u.dynamicDepends,c=u.exports}else 2===arguments.length&&(n=t,t=null);var l=new r(v.DECLARED,e,s,i,t,n,o,a,c);this._define(l)},n.prototype.defineSync=function(e){var t=new r(v.DEFINED,e.name,e.storage,e.key,null,null,null,null,e.module);this._define(t)},n.prototype._define=function(e){var t=this._definitionsByName[e.name];if(t){if(t.state!==v.FETCHING||e.state!==v.DECLARED){var n=new Error("ymaps.modules: redefinition of "+e.name);throw console.error(n),n}return t.state=v.DECLARED,t.declaration=e.declaration,void(t.context=e.context)}"function"==typeof e.depends&&(e.depends=e.depends.call({name:e.name},this._config.dependenciesContext)),e.depends=e.depends||m,this._definitionsByName[e.name]=e,this._saveDefinitionToStorage(e)},n.prototype._resolve=function(e,t){if(!e.dynamicDepends){if(e.state===v.DEFINED)return l.resolve(e.exports);if(e.state===v.ERROR)return l.reject(e.exports)}e.state<v.RESOLVING&&!e.resolvingPromise&&(e.resolvingPromise=this._resolveCore(e,t).always(function(t){return e.resolvingPromise=void 0,t}));var n=o(e,[t]);return l.all([e.resolvingPromise,this._require(n,t)]).then(function(){return e.state===v.DEFINED?l.resolve(e.exports):l.reject(e.exports)})},n.prototype._resolveCore=function(e,t){return this._fetchModule(e,t).then(function(){return e.state=v.RESOLVING,this._require(e.depends,t)},this).then(function(t){function n(t,n){e.state===v.RESOLVING&&(e.state=n?v.ERROR:v.DEFINED,e.exports=n||t),o&&o.resolve()}var r,o;n.async=function(t){e.state===v.RESOLVING&&(r=t.then(function(e){n(e)},function(e){n(void 0,e)}))},n.provide=n,n.provideAsync=n.async,n.dynamicDepends=e.dynamicDepends?{getValue:(function(t,n){var r=i(e,t,n);return r===p?l.reject(new Error("ymaps.modules: dynamic dependency `"+t+"` is not declared.")):s(r)?this._require([r],n):l.resolve([r])}).bind(this),getValueSync:(function(t,n){var r=i(e,t,n);if(!s(r))return r;var o=this._findDefinition(r);return o?this._requireSingleSync(o,n):void 0}).bind(this)}:null;var a=e.context||{name:e.name};try{e.declaration.apply(a,[n].concat(t))}catch(t){return e.state=v.ERROR,void(e.exports=t)}return r||(e.state!==v.DEFINED&&e.state!==v.ERROR?(console.warn("ymaps.modules: asynchronious provide is deprecated and will be removed. Module `"+e.name+"`."),(o=l.defer()).promise()):void 0)},this)},n.prototype.require=function(e,t,n,r){var o="object"==typeof e&&!d.isArray(e),i=1===arguments.length;o&&(n=e.errorCallback,r=e.context,i=!(t=e.successCallback)&&!n),e=c(e);var s=this._require(e.modules,e.data);return i?s:void s.spread(t,n,r)},n.prototype.requireSync=function(e){if(1!==(e=c(e)).modules.length)throw new Error("ymaps.modules: only one module can be required synchroniously.");var t=this._findDefinition(e.modules[0]);return t&&this._requireSingleSync(t,e.data)},n.prototype._requireSingleSync=function(e,t){for(var n=o(e,[t]),r=0,i=n.length;r<i;r++){var s=this._findDefinition(n[r]);if(!s||!this._requireSingleSync(s,t))return}return e.state===v.DEFINED?e.exports:void 0},n.prototype._require=function(e,t){var n=e.map(function(e){return this._requireSingle(e,t)},this);return l.all(n)},n.prototype._requireSingle=function(e,t){var n=this._findDefinition(e);return n?this._resolve(n,t):this._modulesMapLoaded.then(function(){var n=this._findDefinition(e);return n?this._resolve(n,t):l.reject(new Error("ymaps.modules: module `"+a(e)+"` is not defined."))},this)},n.prototype._findDefinition=function(e){if(void 0!==e)return"string"==typeof e?this._definitionsByName[e]:this._definitionsByStorage[e.storage]&&this._definitionsByStorage[e.storage][e.key]},n.prototype._saveDefinitionToStorage=function(e,t){if(e.key&&e.storage)for(var n=d.isArray((t=t||{key:e.key,storage:e.storage}).key)?t.key:[t.key],r=0,o=n.length;r<o;r++)this._definitionsByStorage[t.storage]=this._definitionsByStorage[t.storage]||{},this._definitionsByStorage[t.storage][n[r]]=e},n.prototype._fetchModule=function(e,t){return e.state>=v.DECLARED?l.resolve():(e.fetchingDeferred=e.fetchingDeferred||l.defer(),e.state===v.MENTIONED&&(e.state=v.QUEUED,this._queuedForFetching[e.name]={definition:e,dataList:[]},this._enqueueCombine()),e.state!==v.FETCHING&&this._queuedForFetching[e.name].dataList.push(t),e.fetchingDeferred.promise())},n.prototype._enqueueCombine=function(){this._combineEnqueued||(this._combineEnqueued=!0,this._modulesMapLoaded.then(function(){this._combineEnqueued=!1;var e=this._queuedForFetching;this._queuedForFetching={};var t=new Set;for(var n in e)if(e.hasOwnProperty(n)){var r=this._getAliasesToFetchFor(n,e[n].dataList);d.mergeSets(t,r)}for(var o=d.convertSetToArray(t),i=0,s=o.length;i<s;i+=this._config.combineBatchSize)this._fetchCombine(o.slice(i,i+this._config.combineBatchSize))},this))},n.prototype._fetchCombine=function(e){this._config.fetchCombine(e).spread(function(e,t){this._sandbox=this._sandbox||this._config.createSandbox();for(var n=0,r=e.length;n<r;n++){var o=this._definitionsByAlias[e[n][0]];if(e[n][1].call(null,this._sandbox),o.state===v.DECLARED)o.fetchingDeferred&&o.fetchingDeferred.resolve();else{o.state=v.ERROR;var i=new Error("[internal] ymaps.modules: module `"+o.name+"` was not defined after dynamic module loading");o.exports=i,o.fetchingDeferred&&o.fetchingDeferred.reject(i)}o.fetchingDeferred=void 0}t()},this).catch(function(t){for(var n=0,r=e.length;n<r;n++){var o=this._definitionsByAlias[e[n]];t=new Error("[internal] ymaps.modules: dynamic module loading failed"),o.state=v.ERROR,o.exports=t,o.fetchingDeferred&&o.fetchingDeferred.reject(t),o.fetchingDeferred=void 0}},this)},n.prototype._getAliasesToFetchFor=function(e,t){for(var n=[e],r=new Set;n.length;){var i=n.shift(),s=this._findDefinition(i);if(!s)return void console.error("ymaps.modules: trying to fetch unknown module `"+a(i)+"` while loading `"+a(e)+"`.");s.state<=v.QUEUED&&(s.state=v.FETCHING,r.add(s.alias),Array.prototype.push.apply(n,s.depends)),Array.prototype.push.apply(n,o(s,t))}return r},n.prototype._processLoadedMap=function(e){function t(e){if("function"==typeof e)return e;for(var t=[],r=0,o=e.length;r<o;r+=2){var i=e.substr(r,2);t.push(n[i])}return t}for(var n={},o=0,i=e.length;o<i;o++)n[a=e[o][1]]=s=e[o][0];for(o=0,i=e.length;o<i;o++){var s,a=e[o][1],c=this._definitionsByName[s=e[o][0]];if(!c){var u=t(e[o][2]);c=new r(v.MENTIONED,s,e[o][4],e[o][3],u,null,null,e[o][5]),this._define(c)}c.alias=a,this._definitionsByAlias[a]=c}},u.exports}({vow:n.vow,"./utils":n.utils}),a=n.env.server.url+"/map.js?callback={CALLBACK}&mode="+n.env.server.params.mode,c=n.env.server.url+"/combine.js?callback_prefix={CALLBACK_PREFIX}&mode="+n.env.server.params.mode,u=n.env.server.url+"/"+n.env.server.path.replace(/\/$/,"")+"/images/";if(n.modules=new s({dependenciesContext:n,combineBatchSize:n.project.combineBatchSize,fetchMap:function(){var e=i+"_map",t=a.replace("{CALLBACK}",e);return o(t,e).then(function(e){var r=n.performance.getResourceTimings(t);n.performance.saveResourceTimings("mapjs",r);var o=n.performance.startMeasure("@mapjs.eval");return[e,o.finish.bind(o)]})},fetchCombine:function(e){n.performance.statistics.combine.total++,n.performance.statistics.combine.modules+=e.length;var t=e.length<100?"s":e.length<300?"m":"l",r=e.join(""),s=i+"_combine",a=c.replace("{CALLBACK_PREFIX}",s)+"&load="+r;return o(a,s+"_"+r).then(function(e){var r=n.performance.getResourceTimings(a);n.performance.saveResourceTimings("combine_"+t,r),n.performance.statistics.combine.size+=r.encodedBodySize;var o=n.performance.startMeasure("@combine_"+t+".eval");return[e,o.finish.bind(o)]})},createSandbox:function(){var e=Object.create(n.modules);return e.importImages=function(e){return{get:function(t){return u+e[t].src}}},n.utils.extend({},n,{modules:e})}}),n.modules.define("system.supports.csp",[],function(e){var t=n.env?n.env.browser:null;e({isSupported:"undefined"!=typeof Blob&&"undefined"!=typeof URL,isNonceSupported:t&&t.name&&t.version?!(-1!=t.name.search("Safari")&&parseInt(t.version)<10):null})}),n.modules.define("system.supports.css",[],function(e){function t(e){return void 0===u[e]?u[e]=function(e){return r(e)||r(d+o(e))||r(l.cssPrefix+o(e))}(e):u[e]}function r(e){return void 0!==(s||(s=document.createElement("div"))).style[e]?e:null}function o(e){return e?e.substr(0,1).toUpperCase()+e.substr(1):e}function i(e){return a[e]&&t("transitionProperty")?function(e){var n=t(e);return n&&n!=e&&(n="-"+d+"-"+e),n}(a[e]):null}var s,a={transform:"transform",opacity:"opacity",transitionTimingFunction:"transition-timing-function",userSelect:"user-select",height:"height"},c={},u={},l=n.env.browser,d=l.cssPrefix.toLowerCase();e({checkProperty:t,checkTransitionProperty:function(e){return void 0===c[e]?c[e]=i(e):c[e]},checkTransitionAvailability:i})}),n.modules.define("system.supports.graphics",[],function(e){function t(){if(!window.WebGLRenderingContext)return!1;var e=n.env.browser;return!("Webkit"==e.engine&&+e.engineVersion<537||{"Samsung Internet":!0,AndroidBrowser:!0}[e.name])}var r={failIfMajorPerformanceCaveat:!0,antialias:!1},o={};e({hasSvg:function(){return"svg"in o||(o.svg=document.implementation&&document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")),o.svg},hasCanvas:function(){if(!("canvas"in o)){var e=document.createElement("canvas"),t="getContext"in e?e.getContext("2d"):null;o.canvas=!!t&&function(e,t){e.width=226,e.height=256,t.fillStyle="#fff",t.fillRect(0,0,150,150),t.globalCompositeOperation="xor",t.fillStyle="#f00",t.fillRect(10,10,100,100),t.fillStyle="#0f0",t.fillRect(50,50,100,100);for(var n=t.getImageData(49,49,2,2),r=[],o=0;o<16;o++)r.push(n.data[o]);return"0x0x0x0x0x0x0x0x0x0x0x0x0x255x0x255"==r.join("x")}(e,t)}return o.canvas},hasWebGl:function(){return"webgl"in o||(o.webgl=function(){if(!t())return null;var e,n;try{var o=document.createElement("canvas");(n=o.getContext(e="webgl",r))||(n=o.getContext(e="experimental-webgl",r))||(e=null)}catch(t){e=null}return e?{contextName:e,context:n}:null}()),o.webgl},redetect:function(){o={}},getWebGlContextName:function(){return o.webgl&&o.webgl.contextName}})}),n.modules.define("vectorEngine.isSupported",["system.supports.graphics","system.browser"],function(e,t,r){function o(e){var t=i();n.count("error",{path:["vectorEngine.reasonsVectorNotSupported",e,r.platform,r.name,t.vendor,t.renderer].join("."),share:.1})}function i(){var e={},n=t.hasWebGl();if(!n)return e;var r=n.context,o=r.getExtension("WEBGL_debug_renderer_info");return o&&(e.vendor=r.getParameter(o.UNMASKED_VENDOR_WEBGL).replace(/\W/g,"_"),e.renderer=r.getParameter(o.UNMASKED_RENDERER_WEBGL).replace(/\W/g,"_")),e}var s;e(function(){return void 0===s&&(s=function(){var e=!0;["requestAnimationFrame","Worker","URL","Blob","XMLHttpRequest","Set","Map"].forEach(function(t){window[t]||(e=!1,o(t))});var s=t.hasWebGl();if(!s||"webgl"!==s.contextName)return o("hasWebGl"),!1;var a=s.context;if(0==a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)&&(e=!1,o("MAX_VERTEX_TEXTURE_IMAGE_UNITS")),a.getExtension("OES_vertex_array_object")||(e=!1,o("OES_vertex_array_object")),a.getExtension("OES_standard_derivatives")||(e=!1,o("OES_standard_derivatives")),!function(){var e=document.createElement("canvas");e.width=1,e.height=1;var t=e.getContext("webgl",{alpha:!1,depth:!1,antialias:!1}),n=t.createShader(t.VERTEX_SHADER);t.shaderSource(n,"#version 100\nattribute vec2 p;\nvoid main() {\n    gl_Position = vec4(p,0,1);\n    gl_PointSize = 1.0;\n}"),t.compileShader(n);var r=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(r,"#version 100\nvoid main() {\n    gl_FragColor = vec4(1, 0, 0, 1);\n}"),t.compileShader(r);var o=t.createProgram();t.attachShader(o,n),t.attachShader(o,r),t.bindAttribLocation(o,0,"p"),t.linkProgram(o);var i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.clearColor(0,1,0,1),t.clear(t.COLOR_BUFFER_BIT),t.useProgram(o),t.drawArrays(t.POINTS,0,1);var s=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s),255===s[0]}()){var c=i();e=!1,n.count("error",{path:["vectorEngine.drawPointsError",r.platform,r.name,c.vendor,c.renderer].join("."),share:1})}return e}()),s})}),n.modules.define("vectorEngine.preload",["vectorEngine.isSupported"],function(e,t){t()&&n.modules.require("vectorEngine.VectorMapLayer"),e({})}),n.modules.define("vectorEngine.VectorMapLayer",["vow"],function(e,t){if("ymaps"===n.env.namespace)if(null!=n.env.vectorVersion){var r=t.defer(),o=document.createElement("script");o.onload=r.resolve.bind(r),o.onerror=r.reject.bind(r),o.src=n.env.hosts.vectorIndex.replace("{{version}}",n.env.vectorVersion),document.head.insertAdjacentElement("afterbegin",o);var i=r.promise().then(function(){return n.modules.require(["vectorEngine.implementation.VectorMapLayer"])},function(){return t.reject(new Error("Failed to load vector engine"))}).spread(function(e){return e});e.async(i)}else e(void 0,new Error("No vector version"));else e(void 0,new Error("Vector supports only `ymaps` namespace."))}),n.modules.define("system.browser",["system.supports.graphics"],function(e,t){var r=n.env.browser;r.documentMode=document.documentMode,r.isIE="MSIE"==r.name||"IEMobile"==r.name,r.isEdge="Edge"==r.engine,r.isChromium=r.base&&"chromium"==r.base.toLocaleLowerCase(),r.isSafari="Safari"==r.name,r.eventMapper="Edge"==r.engine||"MSIE"==r.name&&r.documentMode>=10&&r.osVersion>6.1||"IEMobile"==r.name&&r.engineVersion>=6?"pointer":"touchMouse",r.androidBrokenBuild="AndroidBrowser"==r.name&&"534.30"==r.engineVersion;var o=window.devicePixelRatio||screen.deviceXDPI&&screen.deviceXDPI/96||1;r.graphicsRenderEngine=!t.hasCanvas()||"MSIE"==r.name||"IEMobile"==r.name||"Android"==r.osFamily&&r.engine&&"gecko"==r.engine.toLocaleLowerCase()||o>1&&o<2?"svg":"canvas",r.transformTransition="Android"==r.osFamily||"iOS"==r.osFamily||"MSIE"==r.name&&r.documentMode>=10||r.base&&"chromium"==r.base.toLocaleLowerCase(),r.css3DTransform="WebKit"==r.engine&&!("Android"==r.osFamily&&parseFloat(r.osVersion)<3)||"Gecko"==r.engine&&parseInt(r.engineVersion.split(".")[0])>=10,r.unsupported="OperaMini"==r.name,e(r)}),n.modules.define("system.logger",[],function(e,t){function r(e,t){var r="";return n.env.debug&&(r+="("+e+"): "),r+t}var o="Yandex Maps JS API";e({assert:function(e,t){e||n.env.debug&&window.console&&console.log(r(o,t))},log:function(e){n.env.debug&&window.console&&console.log(r(o,e))},notice:function(e){n.env.debug&&window.console&&console.info(r(o,e))},warning:function(e){n.env.debug&&window.console&&console.warn(r(o,e))},error:function(e){window.console&&console.error(r(o,e))},exception:function(e,t){throw new Error(r(e,t))}})}),n.modules.define("system.nextTick",[],function(e){e(n.utils.nextTick)}),n.modules.define("system.mergeImports",[],function(e){function t(e,t,n){if(t){for(var r,o=e,i=0,s=(t=t.split(".")).length-1;i<s;i++)t[i]&&(o=o[r=t[i]]||(o[r]={}));return o[t[s]]=n,o[t[s]]}return n}function n(e,t){return e[2]-t[2]}function r(e){return 0===e.indexOf("package.")}e({isPackage:r,joinImports:function(e,o,i,s){var a=[];if(r(e))return function(e,n,r){for(var o=[],i={},s=0,a=n.length;s<a;++s){var c=r[s].__package;if(c)for(var u=0;u<c.length;++u)i[c[u][0]]||(t(e,c[u][0],c[u][1]),o.push([c[u][0],c[u][1]]),i[c[u][0]]=1);else t(e,n[s],r[s]),i[n[s]]||(o.push([n[s],r[s]]),i[n[s]]=1)}return e.__package=o,e}(o,i,s);for(var c=0,u=i.length;c<u;++c)a.push([i[c],c,i[c].length]);for(a.sort(n),c=0,u=a.length;c<u;++c){var l=a[c][1],d=i[l];if(r(d))for(var f=s[l].__package,p=0;p<f.length;++p)t(o,f[p][0],f[p][1]);else t(o,d,s[l])}return o},createNS:t})}),n.modules.define("vow",[],function(e){e(n.vow)}),n.ns.load=function(e,t,r,o){return"function"==typeof e?t?n.ns.ready(["package.full"],e,t):n.ns.ready(["package.full"],e):("string"==typeof e&&(e=[e]),n.ns.ready.apply(this,arguments))},function(){function e(e){return function(){console.warn("{NS}.modules.{FN} is not a public API and will be removed from {NS}.modules.".replace(/\{NS\}/g,n.project.namespace).replace(/\{FN\}/g,e));var t=n.modules[e].apply(n.modules,arguments);return t===n.modules?n.ns.modules:t}}n.ns.modules={require:function(){return n.modules.require.apply(n.modules,arguments)},isDefined:function(){return n.modules.isDefined.apply(n.modules,arguments)},requireSync:function(){return n.modules.requireSync.apply(n.modules,arguments)},define:function(e,t,r,o){return n.modules.define.apply(n.modules,arguments),n.ns.modules},defineSync:e("defineSync"),providePackage:e("providePackage"),getDefinition:e("getDefinition"),getState:e("getState"),setOptions:e("setOptions"),flush:e("flush"),nextTick:e("nextTick"),watchResolving:e("watchResolving"),__modules:n.modules}}(),function(e){function t(){return d||(d=n.modules.require(["system.mergeImports"]).spread(function(e){return e})),d}function r(t,n,o){var i=function(e,t){for(var n=e,r=0,o=(t=t.split(".")).length-1;r<o;r++)if(!(n=n[t[r]]))return;return{method:n[t[o]],context:n}}(e,n);i?i.method.call(i.context,o):window.setTimeout(function(){r(++t,n,o)},Math.pow(2,t))}function o(e){return e&&e.length}var i=n.vow,s=function(){var e=n.project.preload;if(!o(e))return i.resolve();var r=n.modules.require(e);return i.all([t(),r]).spread(function(t,r){o(r)&&t.joinImports("package.ymaps",n.ns,e,r)})}(),a=function(){var e=n.env.preload,a=e.load&&e.load.length>0&&e.load.split(","),c=a?n.modules.require(a):i.resolve();e.onError&&c.fail(function(t){n.utils.nextTick(function(){r(0,e.onError,t)})});var u=n.performance.startMeasure("ymaps.preload");return i.all([t(),c,s]).spread(function(t,i){o(i)&&t.joinImports("package.ymaps",n.ns,a,i),u.finish(),e.onLoad&&n.utils.nextTick(function(){r(0,e.onLoad,n.ns)})})}(),c="complete"==document.readyState,u=i.defer(),l=c?i.resolve():u.promise(),d=null,f=function(){c||(c=!0,u.resolve())};c||(document.addEventListener?(document.addEventListener("DOMContentLoaded",f,!1),window.addEventListener("load",f,!1)):document.attachEvent&&window.attachEvent("onload",f)),n.ns.ready=function(){p&&(n.performance.saveMeasure("ymaps.readyDelay",n.performance.now()-n.performance.initTimings.responseEnd),p=!1);var e=n.performance.startMeasure("ymaps.ready"),r={};arguments.length&&(1!=arguments.length||"object"!=typeof arguments[0]||arguments[0].length?"function"!=typeof arguments[0]?(r.require="string"==typeof arguments[0]?[arguments[0]]:arguments[0],r.successCallback=arguments[1],r.errorCallback=arguments[2]&&"function"==typeof arguments[2]?arguments[2]:null,r.context=arguments[2]&&"object"==typeof arguments[2]?arguments[2]:arguments[3]):(r.successCallback=arguments[0],r.errorCallback=arguments[1]&&"function"==typeof arguments[1]?arguments[1]:null,r.context=arguments[1]&&"object"==typeof arguments[1]?arguments[1]:arguments[2]):r=arguments[0]);var c=r.require?n.modules.require(r.require):i.resolve();return i.all([t(),c,a,s,l]).spread(function(t,i){return o(i)&&t.joinImports("package.ymaps",n.ns,r.require,i),r.successCallback&&n.utils.nextTick(function(){r.successCallback.call(r.context,n.ns)}),e.finish(),n.ns}).fail(function(e){return r.errorCallback&&n.utils.nextTick(function(){r.errorCallback.call(r.context,e)}),i.reject(e)})};var p=!0}(this),n.modules.require(["system.supports.css","system.supports.graphics","system.supports.csp","system.browser","system.logger"]).spread(function(e,t,r,o,i,s){n.env.server.params.csp&&!r.isSupported&&console.warn("CSP is not suported in this browser"),n.supports={css:e,graphics:t,printPatchNeeded:!e.checkProperty("printColorAdjust"),csp:r},n.logger=i,n.modules.allowRemoteLoading()}).catch(function(e){console.error("ymaps initialization failed: "+e.stack)}),n.env.namespace){for(var l=n.env.namespace.split("."),d=t;l.length>1;){var f=l.shift();d[f]=d[f]||{},d=d[f]}d[l.shift()]=n.ns}n.performance.init({url:n.env.hosts.api.statCounter+"/counter",data:"/path="+n.env.version.replace(/\W/g,"_")+"."+n.env.browser.platform,enable:"all"==n.env.counters||Math.random()<.01&&!n.env.server.params.debug,initUrl:document.currentScript&&document.currentScript.src,useSendBeacon:!n.env.server.params.csp}),n.env.switchLinkOnEnterprise&&(console.warn("You're using a wrong API host. For commercial API use enterprise.api-maps.yandex.ru"),n.env.hasValidApiKey||(n.env.apikey=void 0,console.warn("Invalid API key"))),r.finish()}({server:{url:"https://api-maps.yandex.ru/2.1.68",path:"build/release",params:{mode:"release",ns:"ymaps",csp:null}},preload:{load:"package.full"},mode:"release",debug:!1,namespace:"ymaps",enterprise:!1,key:void 0,apikey:void 0,browser:{name:"Chrome",version:"68.0.3440.106",base:"Chromium",engine:"WebKit",engineVersion:"537.36",osName:"Mac OS X High Sierra",osFamily:"MacOS",osVersion:"10.13.6",isMobile:!1,isTablet:!1,multiTouch:!1,platform:"Desktop",cssPrefix:"Webkit"},lang:"ru_RU",languageCode:"ru",countryCode:"RU",hosts:{api:{main:"https://api-maps.yandex.ru/",ua:"https://yandex.ru/legal/maps_termsofuse/?lang={{lang}}",maps:"https://yandex.ru/maps/",statCounter:"https://yandex.ru/clck/",services:{coverage:"https://api-maps.yandex.ru/services/coverage/",geocode:"https://geocode-maps.yandex.ru/",geoxml:"https://api-maps.yandex.ru/services/geoxml/",inception:"https://api-maps.yandex.ru/services/inception/",panoramaLocate:"https://api-maps.yandex.ru/services/panoramas/",search:"https://api-maps.yandex.ru/services/search/",suggest:"https://suggest-maps.yandex.ru/",regions:"https://api-maps.yandex.ru/services/regions/",route:"https://api-maps.yandex.ru/services/route/"}},layers:{map:"https://vec0%d.maps.yandex.net/tiles?l=map&%c&%l",mapj:"https://vec0%d.maps.yandex.net/tiles?l=mapj&%c&%l",sat:"https://sat0%d.maps.yandex.net/tiles?l=sat&%c&%l",skl:"https://vec0%d.maps.yandex.net/tiles?l=skl&%c&%l",sklj:"https://vec0%d.maps.yandex.net/tiles?l=sklj&%c&%l",stv:"https://0%d.srdr.maps.yandex.net/?l=stv&%c&v=%v&%l&action=render",sta:"https://lrs.maps.yandex.net/tiles?l=sta&%c&tm=%v&%l",staHotspot:"https://lrs.maps.yandex.net/tiles?l=stj&%c&tm=%v&%l",staHotspotKey:"%c&l=stj&tm=%v"},metro_RU:"https://metro.yandex.ru/",metro_UA:"https://metro.yandex.ua/",metro_BY:"https://metro.yandex.by/",metro_US:"https://metro.yandex.com/",traffic:"https://jgo.maps.yandex.net/",trafficArchive:"https://jft.maps.yandex.net/",vectorIndex:"https://yastatic.net/maps/vector/{{version}}/index.js",vectorTiles:"https://vec.maps.yandex.net/vmap2/tiles?l=vmap2&lang={{lang}}&x={{x}}&y={{y}}&z={{z}}&zmin={{zmin}}&zmax={{zmax}}",vectorImages:"https://vec.maps.yandex.net/vmap2/icons?id={{id}}&scale={{scale}}",vectorMeshes:"https://vec.maps.yandex.net/vmap2/meshes?id={{id}}",vectorGlyphs:"https://vec.maps.yandex.net/vmap2/glyphs?lang={{lang}}&font_id={{fontId}}&range={{range}}",panoramasTiles:"https://pano.maps.yandex.net/%s/%z.%x.%y"},layers:{map:{version:"18.09.17-0",scaled:!0,hotspotZoomRange:[8,23]},sat:{version:"3.430.0"},skl:{version:"18.09.17-0",scaled:!0,hotspotZoomRange:[8,23]},trf:{version:"1537367676",scaled:!0},sta:{version:"0.28.1-0.1.3.4-0.2018.09.18.16.00.stable"},stv:{version:"4.68.0-1"}},geolocation:{longitude:34.100156,latitude:44.948314,isHighAccuracy:!1,span:{longitude:.170913,latitude:.112392}},token:"413d247befd07cc59a5ff3a52e87c7cc",sign:function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r,o=n(1),i=n(2);e.exports=function(e){return r||(r=o(function(){for(var e=["a","3","b","2","9","7","3","0","e","f","e","f","f","d","1","a","6","c","e","b","d","6","5","f","4","8","0","2","d","9","1","3","0","e","2","e","c","4","1","3"],t=[[Range.END_TO_END+13,XMLHttpRequest.UNSENT+21],[function(){var e=document.createElement("a");return e.href="http://im.edu:775",+e.port}()-762,Event.BUBBLING_PHASE+8],[DOMException.VALIDATION_ERR+23,DOMException.VALIDATION_ERR-4]],n=0;n<t.length;n++){var r=t[n][0],o=t[n][1],i=e[r];e[r]=e[o],e[o]=i}return e.join("")}())),o(i(e),r)}},function(e,t){"use strict";e.exports=function(e,t){t=t||0;for(var n=0;n<e.length;n++)t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24),t^=e.charCodeAt(n);return t>>>0}},function(e,t){"use strict";e.exports=function(e){var t=(e=e.replace(/^.*\/\//,"")).indexOf("?");if(-1===t)return e;var n=t+1,r=e.indexOf("#",n);-1===r&&(r=e.length);var o=e.substring(n,r).split("&",1e3);return e.substring(0,n)+o.sort().join("&")+e.substring(r)}}]),distribution:{},vectorVersion:"0.4.2",version:"2.1.68",majorVersion:"2.1",cssPrefix:"ymaps-2-1-68-",coordinatesOrder:"latlong"});