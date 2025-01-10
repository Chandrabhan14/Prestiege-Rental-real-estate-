"use strict";(self.webpackChunkprestige_realty=self.webpackChunkprestige_realty||[]).push([[237],{5237:(e,a,s)=>{s.r(a),s.d(a,{default:()=>u});var r=s(5043),t=s(4858),n=s(8403),c=s(899),i=(s(671),s(8745)),l=s(9941),o=s(4182),m=s(579);const d=c.Ik().shape({firstName:c.Yj().trim().required("First name is required").min(3,"First name must be a minimum of 3 characters").max(20,"First name must be a maximum of 20 characters").matches(/^[A-Za-z]+$/,"First name must only contain alphabetic characters"),lastName:c.Yj().trim().required("Last name is required").min(3,"Last name must be a minimum of 3 characters").max(20,"Last name must be a maximum of 20 characters").matches(/^[A-Za-z]+$/,"Last name must only contain alphabetic characters"),email:c.Yj().required("Email is required").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Invalid email format"),subject:c.Yj().trim().required("Subject is required").min(3,"Subject must be a minimum of 3 characters").max(30,"Subject must be a maximum of 30 characters"),message:c.Yj().trim().required("Message is required").max(255,"Message  must be a maximum of 255 characters")});const u=function(){var e,a,s,c,u;const[h,x]=(0,r.useState)(!1),{register:p,handleSubmit:j,formState:{errors:g},reset:v}=(0,t.mN)({resolver:(0,n.t)(d)}),f=e=>{e.keyCode>=65&&e.keyCode<=90||e.keyCode>=97&&e.keyCode<=122||8===e.keyCode||9===e.keyCode||32===e.keyCode||37===e.keyCode||39===e.keyCode||e.preventDefault()};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("section",{className:"container-fluid page_title_banner_section my-4","data-aos":"zoom-in",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"page_title_banner_bgImage_Area",style:{backgroundImage:"linear-gradient(90deg, #0000007b, #00000000), url('/assests/Img/Contact_title_banner.png')"},children:(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-12",children:(0,m.jsx)("h3",{children:"Contact Us"})})})})})}),(0,m.jsx)("section",{className:"container-fluid contact_section my-4",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"Container_white_bg_hp",children:(0,m.jsxs)("div",{className:"row",children:[h?(0,m.jsx)(l.A,{}):(0,m.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-12 mb-4","data-aos":"fade-up-right",children:(0,m.jsxs)("div",{className:"contact_form_Area",children:[(0,m.jsx)("h3",{className:"contact_form_heading",children:"Send Us A Message"}),(0,m.jsxs)("form",{onSubmit:j((async e=>{console.log(e);try{x(!0);const a=await o.A.contacUs(e);200===a.statusCode?(i.oR.success("Contact Updated"),v()):i.oR.error((null===a||void 0===a?void 0:a.message)||"Error While Form Updates"),x(!1)}catch(r){var a,s;x(!1),i.oR.error((null===r||void 0===r||null===(a=r.response)||void 0===a||null===(s=a.data)||void 0===s?void 0:s.error)||"Internal Server Error")}})),children:[(0,m.jsxs)("div",{className:"form-group mb-3",children:[(0,m.jsx)("input",{type:"text",placeholder:"First name*",className:"form-control",...p("firstName"),onKeyDown:f,onCut:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onPaste:e=>e.preventDefault()}),g.firstName&&(0,m.jsx)("p",{className:"text-danger",children:null===g||void 0===g||null===(e=g.firstName)||void 0===e?void 0:e.message})]}),(0,m.jsxs)("div",{className:"form-group mb-3",children:[(0,m.jsx)("input",{type:"text",placeholder:"Last name*",className:"form-control",...p("lastName"),onKeyDown:f,onCut:e=>e.preventDefault(),onCopy:e=>e.preventDefault(),onPaste:e=>e.preventDefault()}),g.lastName&&(0,m.jsx)("p",{className:"text-danger",children:null===g||void 0===g||null===(a=g.lastName)||void 0===a?void 0:a.message})]}),(0,m.jsxs)("div",{className:"form-group mb-3",children:[(0,m.jsx)("input",{type:"text",placeholder:"Your email*",className:"form-control",...p("email"),maxLength:30}),g.email&&(0,m.jsx)("p",{className:"text-danger",children:null===g||void 0===g||null===(s=g.email)||void 0===s?void 0:s.message})]}),(0,m.jsxs)("div",{className:"form-group mb-3",children:[(0,m.jsx)("input",{type:"text",placeholder:"Subject*",className:"form-control",...p("subject")}),g.subject&&(0,m.jsx)("p",{className:"text-danger",children:null===g||void 0===g||null===(c=g.subject)||void 0===c?void 0:c.message})]}),(0,m.jsxs)("div",{className:"form-group mb-3",children:[(0,m.jsx)("textarea",{name:"",id:"",rows:"5",className:"form-control",placeholder:"Message*",...p("message")}),g.message&&(0,m.jsx)("p",{className:"text-danger",children:null===g||void 0===g||null===(u=g.message)||void 0===u?void 0:u.message})]}),(0,m.jsx)("button",{type:"submit",className:"btn btn_00529B",children:"Submit"})]})]})}),(0,m.jsxs)("div",{className:"col-xl-6 col-lg-6 col-md-12","data-aos":"fade-up-left",children:[(0,m.jsx)("div",{className:"contact_form_Area",children:(0,m.jsx)("h3",{className:"contact_form_heading",children:"Contact Us"})}),(0,m.jsxs)("div",{className:"contact_info_item_Area",children:[(0,m.jsx)("h4",{children:"Main office"}),(0,m.jsx)("div",{className:"mb-2",children:(0,m.jsx)("a",{children:"J.E. Irausquin Blvd. 12, 2nd Floor, Oranjestad, Aruba"})}),(0,m.jsx)("div",{className:"mb-2",children:(0,m.jsx)("a",{href:"tel:+18669407453",children:"+1-866-940-7453"})}),(0,m.jsx)("div",{className:"mb-2",children:(0,m.jsx)("a",{href:"tel:+2975820509",children:"+297-582-0509"})}),(0,m.jsxs)("div",{className:"mb-2",children:[(0,m.jsxs)("p",{children:["Monday \u2013 Friday ",(0,m.jsx)("strong",{className:"ms-1",children:"08:00 AM  \u2013 18:00 PM "})," "]}),(0,m.jsxs)("p",{children:["Saturday",(0,m.jsx)("strong",{className:"ms-1",children:" 09:00 AM \u2013 17:00 PM"})]})]})]})]})]})})})}),(0,m.jsx)("section",{className:"container-fluid contact_section my-4","data-aos":"zoom-in",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-12",children:(0,m.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.5155120659446!2d-70.03621788577444!3d12.526430761387286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e840a34f6f10ed3%3A0x9b68d6a13c83b9d1!2sJ.E.%20Irausquin%20Blvd%2012%2C%202nd%20Floor%2C%20Oranjestad%2C%20Aruba!5e0!3m2!1sen!2sin!4v1710419629830!5m2!1sen!2sin",width:"100%",height:"450",style:{border:0},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})})})})})]})}},4182:(e,a,s)=>{s.d(a,{A:()=>t});var r=s(671);const t={getProperty:async e=>{try{return(await r.A.get(`/properties/${e}`)).data}catch(a){throw a.response.data.message}},getAll:async()=>{try{return(await r.A.get("/properties/get-all")).data}catch(e){throw e.response.data.message}},contacUs:async e=>{try{return(await r.A.post("/contact-us/create_contact_us",e)).data}catch(a){throw a.response.data.message}},propertyInquire:async e=>{try{return(await r.A.post("/contact-us/propertyInquire",e)).data}catch(a){throw a.response.data.message}},homePageSearch:async e=>{try{return(await r.A.post("/property/homePageSearch",e)).data}catch(a){throw a.response.data.message}}}}}]);
//# sourceMappingURL=237.9a050faf.chunk.js.map