(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cv_builder~49fc2dc6"],{cd42:function(t,e,n){"use strict";n.d(e,"a",(function(){return Q})),n.d(e,"b",(function(){return X})),n.d(e,"c",(function(){return et})),n.d(e,"d",(function(){return L})),n.d(e,"e",(function(){return F})),n.d(e,"f",(function(){return K}));var i=n("5313");n.d(e,"g",(function(){return i["Plugin"]})),n.d(e,"h",(function(){return i["PluginKey"]}));var r=n("576a"),o=n("304a"),s=n("23f1"),u=n("1a16"),a=n("7f06"),c=n("0010"),l=n("f95e"),h=n("a15f"),f=n("2b0e"),d=n("a9de");/*!
* tiptap v1.27.0
* (c) 2020 Scrumpy UG (limited liability)
* @license MIT
*/function p(t){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function y(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}function x(t,e){return x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},x(t,e)}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function M(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?M(t):e}function j(t){return function(){var e,n=O(t);if(P()){var i=O(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return S(this,e)}}function E(t,e){return N(t)||H(t,e)||D(t,e)||I()}function A(t){return R(t)||C(t)||D(t)||T()}function R(t){if(Array.isArray(t))return _(t)}function N(t){if(Array.isArray(t))return t}function C(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function H(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0)if(n.push(s.value),e&&n.length===e)break}catch(a){r=!0,o=a}finally{try{i||null==u["return"]||u["return"]()}finally{if(r)throw o}}return n}}function D(t,e){if(t){if("string"===typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function T(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function I(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function J(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,(function(t,e){return 0===e?t.toLowerCase():t.toUpperCase()})).replace(/\s+/g,"")}var U=function(){function t(e,n){var i=n.editor,r=n.extension,o=n.parent,s=n.node,u=n.view,a=n.decorations,c=n.getPos;v(this,t),this.component=e,this.editor=i,this.extension=r,this.parent=o,this.node=s,this.view=u,this.decorations=a,this.isNode=!!this.node.marks,this.isMark=!this.isNode,this.getPos=this.isMark?this.getMarkPos:c,this.captureEvents=!0,this.dom=this.createDOM(),this.contentDOM=this.vm.$refs.content}return y(t,[{key:"createDOM",value:function(){var t=this,e=f["default"].extend(this.component),n={editor:this.editor,node:this.node,view:this.view,getPos:function(){return t.getPos()},decorations:this.decorations,selected:!1,options:this.extension.options,updateAttrs:function(e){return t.updateAttrs(e)}};return"function"===typeof this.extension.setSelection&&(this.setSelection=this.extension.setSelection),"function"===typeof this.extension.update&&(this.update=this.extension.update),this.vm=new e({parent:this.parent,propsData:n}).$mount(),this.vm.$el}},{key:"update",value:function(t,e){return t.type===this.node.type&&(t===this.node&&this.decorations===e||(this.node=t,this.decorations=e,this.updateComponentProps({node:t,decorations:e})),!0)}},{key:"updateComponentProps",value:function(t){var e=this;if(this.vm._props){var n=f["default"].config.silent;f["default"].config.silent=!0,Object.entries(t).forEach((function(t){var n=E(t,2),i=n[0],r=n[1];e.vm._props[i]=r})),f["default"].config.silent=n}}},{key:"updateAttrs",value:function(t){if(this.view.editable){var e=this.view.state,n=this.node.type,i=this.getPos(),r=k({},this.node.attrs,{},t),o=this.isMark?e.tr.removeMark(i.from,i.to,n).addMark(i.from,i.to,n.create(r)):e.tr.setNodeMarkup(i,null,r);this.view.dispatch(o)}}},{key:"ignoreMutation",value:function(t){return"selection"!==t.type&&(!this.contentDOM||!this.contentDOM.contains(t.target))}},{key:"stopEvent",value:function(t){var e=this;if("function"===typeof this.extension.stopEvent)return this.extension.stopEvent(t);var n=!!this.extension.schema.draggable;if(n&&"mousedown"===t.type){var i=t.target.closest&&t.target.closest("[data-drag-handle]"),r=i&&(this.dom===i||this.dom.contains(i));r&&(this.captureEvents=!1,document.addEventListener("dragend",(function(){e.captureEvents=!0}),{once:!0}))}var o="copy"===t.type,s="paste"===t.type,u="cut"===t.type,a=t.type.startsWith("drag")||"drop"===t.type;return!(n&&a||o||s||u)&&this.captureEvents}},{key:"selectNode",value:function(){this.updateComponentProps({selected:!0})}},{key:"deselectNode",value:function(){this.updateComponentProps({selected:!1})}},{key:"getMarkPos",value:function(){var t=this.view.posAtDOM(this.dom),e=this.view.state.doc.resolve(t),n=Object(h["b"])(e,this.node.type);return n}},{key:"destroy",value:function(){this.vm.$destroy()}}]),t}(),V=function(){function t(){v(this,t)}return y(t,[{key:"on",value:function(t,e){return this._callbacks=this._callbacks||{},this._callbacks[t]||(this._callbacks[t]=[]),this._callbacks[t].push(e),this}},{key:"emit",value:function(t){for(var e=this,n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];this._callbacks=this._callbacks||{};var o=this._callbacks[t];return o&&o.forEach((function(t){return t.apply(e,i)})),this}},{key:"off",value:function(t,e){if(arguments.length){var n=this._callbacks?this._callbacks[t]:null;n&&(e?this._callbacks[t]=n.filter((function(t){return t!==e})):delete this._callbacks[t])}else this._callbacks={};return this}}]),t}(),L=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};v(this,t),this.options=k({},this.defaultOptions,{},e)}return y(t,[{key:"init",value:function(){return null}},{key:"bindEditor",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.editor=t}},{key:"inputRules",value:function(){return[]}},{key:"pasteRules",value:function(){return[]}},{key:"keys",value:function(){return{}}},{key:"name",get:function(){return null}},{key:"type",get:function(){return"extension"}},{key:"defaultOptions",get:function(){return{}}},{key:"plugins",get:function(){return[]}}]),t}(),B=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;v(this,t),e.forEach((function(t){t.bindEditor(n),t.init()})),this.extensions=e}return y(t,[{key:"keymaps",value:function(t){var e=t.schema,n=this.extensions.filter((function(t){return["extension"].includes(t.type)})).filter((function(t){return t.keys})).map((function(t){return t.keys({schema:e})})),i=this.extensions.filter((function(t){return["node","mark"].includes(t.type)})).filter((function(t){return t.keys})).map((function(t){return t.keys({type:e["".concat(t.type,"s")][t.name],schema:e})}));return[].concat(A(n),A(i)).map((function(t){return Object(a["b"])(t)}))}},{key:"inputRules",value:function(t){var e=t.schema,n=t.excludedExtensions;if(!(n instanceof Array)&&n)return[];var i=n instanceof Array?this.extensions.filter((function(t){return!n.includes(t.name)})):this.extensions,r=i.filter((function(t){return["extension"].includes(t.type)})).filter((function(t){return t.inputRules})).map((function(t){return t.inputRules({schema:e})})),o=i.filter((function(t){return["node","mark"].includes(t.type)})).filter((function(t){return t.inputRules})).map((function(t){return t.inputRules({type:e["".concat(t.type,"s")][t.name],schema:e})}));return[].concat(A(r),A(o)).reduce((function(t,e){return[].concat(A(t),A(e))}),[])}},{key:"pasteRules",value:function(t){var e=t.schema,n=t.excludedExtensions;if(!(n instanceof Array)&&n)return[];var i=n instanceof Array?this.extensions.filter((function(t){return!n.includes(t.name)})):this.extensions,r=i.filter((function(t){return["extension"].includes(t.type)})).filter((function(t){return t.pasteRules})).map((function(t){return t.pasteRules({schema:e})})),o=i.filter((function(t){return["node","mark"].includes(t.type)})).filter((function(t){return t.pasteRules})).map((function(t){return t.pasteRules({type:e["".concat(t.type,"s")][t.name],schema:e})}));return[].concat(A(r),A(o)).reduce((function(t,e){return[].concat(A(t),A(e))}),[])}},{key:"commands",value:function(t){var e=t.schema,n=t.view;return this.extensions.filter((function(t){return t.commands})).reduce((function(t,i){var r=i.name,o=i.type,s={},u=i.commands(k({schema:e},["node","mark"].includes(o)?{type:e["".concat(o,"s")][r]}:{})),a=function(t,e){return!!n.editable&&(n.focus(),t(e)(n.state,n.dispatch,n))},c=function(t,e){Array.isArray(e)?s[t]=function(t){return e.forEach((function(e){return a(e,t)}))}:"function"===typeof e&&(s[t]=function(t){return a(e,t)})};return"object"===p(u)?Object.entries(u).forEach((function(t){var e=E(t,2),n=e[0],i=e[1];c(n,i)})):c(r,u),k({},t,{},s)}),{})}},{key:"nodes",get:function(){return this.extensions.filter((function(t){return"node"===t.type})).reduce((function(t,e){var n=e.name,i=e.schema;return k({},t,g({},n,i))}),{})}},{key:"options",get:function(){var t=this.view;return this.extensions.reduce((function(e,n){return k({},e,g({},n.name,new Proxy(n.options,{set:function(e,n,i){var r=e[n]!==i;return Object.assign(e,g({},n,i)),r&&t.updateState(t.state),!0}})))}),{})}},{key:"marks",get:function(){return this.extensions.filter((function(t){return"mark"===t.type})).reduce((function(t,e){var n=e.name,i=e.schema;return k({},t,g({},n,i))}),{})}},{key:"plugins",get:function(){return this.extensions.filter((function(t){return t.plugins})).reduce((function(t,e){var n=e.plugins;return[].concat(A(t),A(n))}),[])}}]),t}();function $(t){var e=document.createElement("style");e.type="text/css",e.textContent=t;var n=document,i=n.head,r=i.firstChild;r?i.insertBefore(e,r):i.appendChild(e)}var F=function(t){w(n,t);var e=j(n);function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v(this,n),e.call(this,t)}return y(n,[{key:"command",value:function(){return function(){}}},{key:"type",get:function(){return"mark"}},{key:"view",get:function(){return null}},{key:"schema",get:function(){return null}}]),n}(L);function z(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Math.min(Math.max(parseInt(t,10),e),n)}var K=function(t){w(n,t);var e=j(n);function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v(this,n),e.call(this,t)}return y(n,[{key:"command",value:function(){return function(){}}},{key:"type",get:function(){return"node"}},{key:"view",get:function(){return null}},{key:"schema",get:function(){return null}}]),n}(L),W=function(t){w(n,t);var e=j(n);function n(){return v(this,n),e.apply(this,arguments)}return y(n,[{key:"name",get:function(){return"doc"}},{key:"schema",get:function(){return{content:"block+"}}}]),n}(K),q=function(t){w(n,t);var e=j(n);function n(){return v(this,n),e.apply(this,arguments)}return y(n,[{key:"commands",value:function(t){var e=t.type;return function(){return Object(d["k"])(e)}}},{key:"name",get:function(){return"paragraph"}},{key:"schema",get:function(){return{content:"inline*",group:"block",draggable:!1,parseDOM:[{tag:"p"}],toDOM:function(){return["p",0]}}}}]),n}(K),Z=function(t){w(n,t);var e=j(n);function n(){return v(this,n),e.apply(this,arguments)}return y(n,[{key:"name",get:function(){return"text"}},{key:"schema",get:function(){return{group:"inline"}}}]),n}(K),G='.ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n}\n\n.ProseMirror-gapcursor:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n',Q=function(t){w(n,t);var e=j(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v(this,n),t=e.call(this),t.defaultOptions={editorProps:{},editable:!0,autoFocus:null,extensions:[],content:"",topNode:"doc",emptyDocument:{type:"doc",content:[{type:"paragraph"}]},useBuiltInExtensions:!0,disableInputRules:!1,disablePasteRules:!1,dropCursor:{},parseOptions:{},injectCSS:!0,onInit:function(){},onTransaction:function(){},onUpdate:function(){},onFocus:function(){},onBlur:function(){},onPaste:function(){},onDrop:function(){}},t.events=["init","transaction","update","focus","blur","paste","drop"],t.init(i),t}return y(n,[{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setOptions(k({},this.defaultOptions,{},e)),this.focused=!1,this.selection={from:0,to:0},this.element=document.createElement("div"),this.extensions=this.createExtensions(),this.nodes=this.createNodes(),this.marks=this.createMarks(),this.schema=this.createSchema(),this.plugins=this.createPlugins(),this.keymaps=this.createKeymaps(),this.inputRules=this.createInputRules(),this.pasteRules=this.createPasteRules(),this.view=this.createView(),this.commands=this.createCommands(),this.setActiveNodesAndMarks(),this.options.injectCSS&&$(G),null!==this.options.autoFocus&&this.focus(this.options.autoFocus),this.events.forEach((function(e){t.on(e,t.options[J("on ".concat(e))]||function(){})})),this.emit("init",{view:this.view,state:this.state}),this.extensions.view=this.view}},{key:"setOptions",value:function(t){this.options=k({},this.options,{},t),this.view&&this.state&&this.view.updateState(this.state)}},{key:"createExtensions",value:function(){return new B([].concat(A(this.builtInExtensions),A(this.options.extensions)),this)}},{key:"createPlugins",value:function(){return this.extensions.plugins}},{key:"createKeymaps",value:function(){return this.extensions.keymaps({schema:this.schema})}},{key:"createInputRules",value:function(){return this.extensions.inputRules({schema:this.schema,excludedExtensions:this.options.disableInputRules})}},{key:"createPasteRules",value:function(){return this.extensions.pasteRules({schema:this.schema,excludedExtensions:this.options.disablePasteRules})}},{key:"createCommands",value:function(){return this.extensions.commands({schema:this.schema,view:this.view})}},{key:"createNodes",value:function(){return this.extensions.nodes}},{key:"createMarks",value:function(){return this.extensions.marks}},{key:"createSchema",value:function(){return new o["Schema"]({topNode:this.options.topNode,nodes:this.nodes,marks:this.marks})}},{key:"createState",value:function(){var t=this;return i["EditorState"].create({schema:this.schema,doc:this.createDocument(this.options.content),plugins:[].concat(A(this.plugins),[Object(l["b"])({rules:this.inputRules})],A(this.pasteRules),A(this.keymaps),[Object(a["b"])({Backspace:l["d"]}),Object(a["b"])(c["a"]),Object(s["a"])(this.options.dropCursor),Object(u["a"])(),new i["Plugin"]({key:new i["PluginKey"]("editable"),props:{editable:function(){return t.options.editable}}}),new i["Plugin"]({props:{attributes:{tabindex:0},handleDOMEvents:{focus:function(e,n){t.focused=!0,t.emit("focus",{event:n,state:e.state,view:e});var i=t.state.tr.setMeta("focused",!0);t.view.dispatch(i)},blur:function(e,n){t.focused=!1,t.emit("blur",{event:n,state:e.state,view:e});var i=t.state.tr.setMeta("focused",!1);t.view.dispatch(i)}}}}),new i["Plugin"]({props:this.options.editorProps})])})}},{key:"createDocument",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.parseOptions;if(null===t)return this.schema.nodeFromJSON(this.options.emptyDocument);if("object"===p(t))try{return this.schema.nodeFromJSON(t)}catch(i){return console.warn("[tiptap warn]: Invalid content.","Passed value:",t,"Error:",i),this.schema.nodeFromJSON(this.options.emptyDocument)}if("string"===typeof t){var n=document.createElement("div");return n.innerHTML=t.trim(),o["DOMParser"].fromSchema(this.schema).parse(n,e)}return!1}},{key:"createView",value:function(){var t=this;return new r["c"](this.element,{state:this.createState(),handlePaste:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];t.emit.apply(t,["paste"].concat(n))},handleDrop:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];t.emit.apply(t,["drop"].concat(n))},dispatchTransaction:this.dispatchTransaction.bind(this)})}},{key:"setParentComponent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&this.view.setProps({nodeViews:this.initNodeViews({parent:t,extensions:[].concat(A(this.builtInExtensions),A(this.options.extensions))})})}},{key:"initNodeViews",value:function(t){var e=this,n=t.parent,i=t.extensions;return i.filter((function(t){return["node","mark"].includes(t.type)})).filter((function(t){return t.view})).reduce((function(t,i){var r=function(t,r,o,s){var u=i.view;return new U(u,{editor:e,extension:i,parent:n,node:t,view:r,getPos:o,decorations:s})};return k({},t,g({},i.name,r))}),{})}},{key:"dispatchTransaction",value:function(t){var e=this.state.apply(t);this.view.updateState(e),this.selection={from:this.state.selection.from,to:this.state.selection.to},this.setActiveNodesAndMarks(),this.emit("transaction",{getHTML:this.getHTML.bind(this),getJSON:this.getJSON.bind(this),state:this.state,transaction:t}),t.docChanged&&!t.getMeta("preventUpdate")&&this.emitUpdate(t)}},{key:"emitUpdate",value:function(t){this.emit("update",{getHTML:this.getHTML.bind(this),getJSON:this.getJSON.bind(this),state:this.state,transaction:t})}},{key:"resolveSelection",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.selection&&null===t)return this.selection;if("start"===t||!0===t)return{from:0,to:0};if("end"===t){var e=this.state.doc;return{from:e.content.size,to:e.content.size}}return{from:t,to:t}}},{key:"focus",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!(this.view.focused&&null===e||!1===e)){var n=this.resolveSelection(e),i=n.from,r=n.to;this.setSelection(i,r),setTimeout((function(){return t.view.focus()}),10)}}},{key:"setSelection",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.state,r=n.doc,o=n.tr,s=z(t,0,r.content.size),u=z(e,0,r.content.size),a=i["TextSelection"].create(r,s,u),c=o.setSelection(a);this.view.dispatch(c)}},{key:"blur",value:function(){this.view.dom.blur()}},{key:"getSchemaJSON",value:function(){return JSON.parse(JSON.stringify({nodes:this.extensions.nodes,marks:this.extensions.marks}))}},{key:"getHTML",value:function(){var t=document.createElement("div"),e=o["DOMSerializer"].fromSchema(this.schema).serializeFragment(this.state.doc.content);return t.appendChild(e),t.innerHTML}},{key:"getJSON",value:function(){return this.state.doc.toJSON()}},{key:"setContent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,r=this.state,o=r.doc,s=r.tr,u=this.createDocument(t,n),a=i["TextSelection"].create(o,0,o.content.size),c=s.setSelection(a).replaceSelectionWith(u,!1).setMeta("preventUpdate",!e);this.view.dispatch(c)}},{key:"clearContent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setContent(this.options.emptyDocument,t)}},{key:"setActiveNodesAndMarks",value:function(){var t=this;this.activeMarks=Object.entries(this.schema.marks).reduce((function(e,n){var i=E(n,2),r=i[0],o=i[1];return k({},e,g({},r,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(h["d"])(t.state,o,e)})))}),{}),this.activeMarkAttrs=Object.entries(this.schema.marks).reduce((function(e,n){var i=E(n,2),r=i[0],o=i[1];return k({},e,g({},r,Object(h["a"])(t.state,o)))}),{}),this.activeNodes=Object.entries(this.schema.nodes).reduce((function(e,n){var i=E(n,2),r=i[0],o=i[1];return k({},e,g({},r,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(h["f"])(t.state,o,e)})))}),{})}},{key:"getMarkAttrs",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.activeMarkAttrs[t]}},{key:"getNodeAttrs",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return k({},Object(h["c"])(this.state,this.schema.nodes[t]))}},{key:"registerPlugin",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,n="function"===typeof e?e(t,this.state.plugins):[t].concat(A(this.state.plugins)),i=this.state.reconfigure({plugins:n});this.view.updateState(i)}},{key:"unregisterPlugin",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(t&&this.view.docView){var e=this.state.reconfigure({plugins:this.state.plugins.filter((function(e){return!e.key.startsWith("".concat(t,"$"))}))});this.view.updateState(e)}}},{key:"destroy",value:function(){this.view&&this.view.destroy()}},{key:"builtInExtensions",get:function(){return this.options.useBuiltInExtensions?[new W,new Z,new q]:[]}},{key:"state",get:function(){return this.view?this.view.state:null}},{key:"isActive",get:function(){return Object.entries(k({},this.activeMarks,{},this.activeNodes)).reduce((function(t,e){var n=E(e,2),i=n[0],r=n[1];return k({},t,g({},i,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(t)})))}),{})}}]),n}(V),X={props:{editor:{default:null,type:Object}},watch:{editor:{immediate:!0,handler:function(t){var e=this;t&&t.element&&this.$nextTick((function(){e.$el.appendChild(t.element.firstChild),t.setParentComponent(e)}))}}},render:function(t){return t("div")},beforeDestroy:function(){this.editor.element=this.$el}},Y=function(){function t(e){var n=this,i=e.options;v(this,t),this.options=i,this.preventHide=!1,this.mousedownHandler=this.handleClick.bind(this),this.options.element.addEventListener("mousedown",this.mousedownHandler,{capture:!0}),this.blurHandler=function(){n.preventHide?n.preventHide=!1:n.options.editor.emit("menubar:focusUpdate",!1)},this.options.editor.on("blur",this.blurHandler)}return y(t,[{key:"handleClick",value:function(){this.preventHide=!0}},{key:"destroy",value:function(){this.options.element.removeEventListener("mousedown",this.mousedownHandler),this.options.editor.off("blur",this.blurHandler)}}]),t}();function tt(t){return new i["Plugin"]({key:new i["PluginKey"]("menu_bar"),view:function(e){return new Y({editorView:e,options:t})}})}var et={props:{editor:{default:null,type:Object}},data:function(){return{focused:!1}},watch:{editor:{immediate:!0,handler:function(t){var e=this;t&&this.$nextTick((function(){t.registerPlugin(tt({editor:t,element:e.$el})),e.focused=t.focused,t.on("focus",(function(){e.focused=!0})),t.on("menubar:focusUpdate",(function(t){e.focused=t}))}))}}},render:function(){return this.editor?this.$scopedSlots.default({focused:this.focused,focus:this.editor.focus,commands:this.editor.commands,isActive:this.editor.isActive,getMarkAttrs:this.editor.getMarkAttrs.bind(this.editor),getNodeAttrs:this.editor.getNodeAttrs.bind(this.editor)}):null}};function nt(t,e,n){var i=document.createRange();return i.setEnd(t,null==n?t.nodeValue.length:n),i.setStart(t,e||0),i}function it(t,e){var n=t.getClientRects();return n.length?n[e<0?0:n.length-1]:t.getBoundingClientRect()}function rt(t,e){var n,i,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=t.docView.domFromPos(e),s=o.node,u=o.offset;if(3===s.nodeType)r&&u<s.nodeValue.length?(i=it(nt(s,u-1,u),-1),n="right"):u<s.nodeValue.length&&(i=it(nt(s,u,u+1),-1),n="left");else if(s.firstChild){if(u<s.childNodes.length){var a=s.childNodes[u];i=it(3===a.nodeType?nt(a):a,-1),n="left"}if((!i||i.top===i.bottom)&&u){var c=s.childNodes[u-1];i=it(3===c.nodeType?nt(c):c,1),n="right"}}else i=s.getBoundingClientRect(),n="left";var l=i[n];return{top:i.top,bottom:i.bottom,left:l,right:l}}var ot=function(){function t(e){var n=this,i=e.options,r=e.editorView;v(this,t),this.options=k({},{element:null,keepInBounds:!0,onUpdate:function(){return!1}},{},i),this.editorView=r,this.isActive=!1,this.left=0,this.bottom=0,this.top=0,this.preventHide=!1,this.mousedownHandler=this.handleClick.bind(this),this.options.element.addEventListener("mousedown",this.mousedownHandler,{capture:!0}),this.focusHandler=function(t){var e=t.view;n.update(e)},this.options.editor.on("focus",this.focusHandler),this.blurHandler=function(t){var e=t.event;n.preventHide?n.preventHide=!1:n.hide(e)},this.options.editor.on("blur",this.blurHandler)}return y(t,[{key:"handleClick",value:function(){this.preventHide=!0}},{key:"update",value:function(t,e){var n=t.state;if(!t.composing&&!(e&&e.doc.eq(n.doc)&&e.selection.eq(n.selection)))if(n.selection.empty)this.hide();else{var i=n.selection,r=i.from,o=i.to,s=rt(t,r),u=rt(t,o,!0),a=this.options.element.offsetParent;if(a){var c=a.getBoundingClientRect(),l=this.options.element.getBoundingClientRect(),h=(s.left+u.left)/2-c.left;this.left=Math.round(this.options.keepInBounds?Math.min(c.width-l.width/2,Math.max(h,l.width/2)):h),this.bottom=Math.round(c.bottom-s.top),this.top=Math.round(u.bottom-c.top),this.isActive=!0,this.sendUpdate()}else this.hide()}}},{key:"sendUpdate",value:function(){this.options.onUpdate({isActive:this.isActive,left:this.left,bottom:this.bottom,top:this.top})}},{key:"hide",value:function(t){t&&t.relatedTarget&&this.options.element.parentNode&&this.options.element.parentNode.contains(t.relatedTarget)||(this.isActive=!1,this.sendUpdate())}},{key:"destroy",value:function(){this.options.element.removeEventListener("mousedown",this.mousedownHandler),this.options.editor.off("focus",this.focusHandler),this.options.editor.off("blur",this.blurHandler)}}]),t}();function st(t){return new i["Plugin"]({key:new i["PluginKey"]("menu_bubble"),view:function(e){return new ot({editorView:e,options:t})}})}Boolean}}]);