(this["webpackJsonpsample-project"]=this["webpackJsonpsample-project"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),s=a(23),r=a.n(s),o=(a(30),a.p,a(31),a(15)),i=a(4);function l(e){var t=e.navigation.map((function(e){return Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{to:e.link,className:"nav-link",activeClassName:"active",children:e.name})})}));return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:e.name}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:t}),Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}var b=a(5),j={apiKey:"AIzaSyDRtE2evhuc_jx7Hg0iaO2ZqHwYwFePonw",authDomain:"books-services.firebaseapp.com",projectId:"books-services",storageBucket:"books-services.appspot.com",messagingSenderId:"413476684155",appId:"1:413476684155:web:e2a8f3942501c81dd73dde"},d=a(22),h=(a(40),a(44),a(45),a(25));function u(e){var t=Object(n.useState)(),a=Object(h.a)(t,2),c=a[0],s=a[1];if(Object(n.useEffect)((function(){c||fetch("http://localhost/sample-project/build/php/book.php").then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return console.log(e)}))})),c){var r=c.books.map((function(e){return Object(i.jsx)("h3",{children:e.book_title})}));return Object(i.jsxs)("div",{className:"home",children:[Object(i.jsx)("h2",{children:"Books"}),r]})}return Object(i.jsx)("div",{className:"home",children:Object(i.jsx)("h2",{children:"Getting data ..."})})}function p(e){return Object(i.jsx)("div",{className:"about",children:Object(i.jsx)("h2",{children:"About"})})}function m(e){return d.a.apps.length||d.a.initializeApp(j),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:"Hello Content"}),Object(i.jsxs)(b.c,{children:[Object(i.jsx)(b.a,{exact:!0,path:"/",children:Object(i.jsx)(u,{})}),Object(i.jsx)(b.a,{path:"/about",children:Object(i.jsx)(p,{})})]})]})}function x(e){return Object(i.jsx)("footer",{className:"footer bg-dark",children:Object(i.jsx)("div",{className:"container-fluid text-light",children:Object(i.jsx)("h1",{children:"Hello Footer"})})})}var v=[{name:"Home",link:"/"},{name:"About",link:"/about"}];var O=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{name:"Books",navigation:v}),Object(i.jsx)(m,{}),Object(i.jsx)(x,{})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(o.a,{children:Object(i.jsx)(O,{})})}),document.getElementById("root")),f()}},[[43,1,2]]]);
//# sourceMappingURL=main.0d78630e.chunk.js.map