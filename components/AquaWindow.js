import{j as e,m as a}from"../assets/proxy.js";import{c as s}from"../assets/createLucideIcon.js";/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M5 12h14",key:"1ays0h"}]],c=s("minus",d);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],x=s("square",l);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],m=s("x",h);function f({title:r,children:i,onClose:o,className:n="",icon:t}){return e.jsxs(a.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{type:"spring",damping:25,stiffness:300},className:`flex flex-col rounded-t-xl rounded-b-md shadow-2xl overflow-hidden border border-blue-400/30 bg-slate-50/90 backdrop-blur-md ${n}`,children:[e.jsxs("div",{className:"xp-titlebar px-3 py-1.5 flex items-center justify-between select-none",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[t&&e.jsx("div",{className:"w-4 h-4 text-white drop-shadow-md",children:t}),e.jsx("span",{className:"text-sm font-display font-bold tracking-wider",children:r})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{className:"w-6 h-6 rounded flex items-center justify-center bg-blue-600 hover:bg-blue-500 border border-blue-400/50 shadow-inner transition-colors",children:e.jsx(c,{size:14,className:"text-white"})}),e.jsx("button",{className:"w-6 h-6 rounded flex items-center justify-center bg-blue-600 hover:bg-blue-500 border border-blue-400/50 shadow-inner transition-colors",children:e.jsx(x,{size:12,className:"text-white"})}),e.jsx("button",{onClick:o,className:"w-6 h-6 rounded flex items-center justify-center bg-red-500 hover:bg-red-400 border border-red-300/50 shadow-inner transition-colors",children:e.jsx(m,{size:14,className:"text-white"})})]})]}),e.jsx("div",{className:"flex-1 overflow-auto p-4 relative",children:i})]})}export{f as A};
