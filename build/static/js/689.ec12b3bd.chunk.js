"use strict";(self.webpackChunkprestige_realty=self.webpackChunkprestige_realty||[]).push([[689],{5689:(e,s,n)=>{n.r(s),n.d(s,{default:()=>r});var t=n(5043),a=n(579);const r=function(e){let{selectedType:s,reset:n}=e;const[r,l]=(0,t.useState)(!1),[c,i]=(0,t.useState)(""),o=(0,t.useRef)(null);(0,t.useEffect)((()=>{""!==c&&s(c)}),[c]),(0,t.useEffect)((()=>{const e=e=>{o.current&&!o.current.contains(e.target)&&l(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]);const d=[{src:"/assests/Img/any_icon.png",label:"Residential"},{src:"/assests/Img/Apartment.png",label:"Commercial"},{src:"/assests/Img/home_icon.png",label:"Condominium"},{src:"/assests/Img/Condo_icon.png",label:"Land"}];return(0,t.useEffect)((()=>{i("")}),[n]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{ref:o,className:"GeographicalFilters_area_hp",children:[(0,a.jsxs)("button",{onClick:()=>{l(!r)},children:[c||"Property Type",(0,a.jsx)("i",{className:"fa-solid fa-angle-down ms-3"})]}),r&&(0,a.jsxs)("div",{className:"GeographicalFilters_content_area_hp",children:[(0,a.jsx)("div",{className:"GeographicalFilters_heading_content_area_hp",children:(0,a.jsx)("h4",{children:"Property Type"})}),"  ",(0,a.jsx)("div",{className:"mt-4 d-flex align-items-center justify-content-center flex-wrap",children:null===d||void 0===d?void 0:d.map(((e,s)=>(0,a.jsxs)("a",{onClick:()=>(e=>{i(e.label),l(!1)})(e),className:"PropertyTypeFilters_icon_hp",children:[(0,a.jsx)("img",{src:e.src,alt:""}),(0,a.jsx)("p",{children:e.label})]},s)))})]})]})})}}}]);
//# sourceMappingURL=689.ec12b3bd.chunk.js.map