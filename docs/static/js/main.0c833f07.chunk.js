(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},s=n(2),u=n(9),o=n(0);var j=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(u.a)(t))})),i(""))},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(t){i(t.target.value)}})})})},d=n(10),l=n(6),f=n.n(l),b=n(8),m=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,a,c,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=".concat("e9NDh0olczBjgyILGqOmmHjmnNoolbnY","&q=").concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,t.abrupt("return",r.map((function(t){var e=t.id,n=t.images;return{id:e,title:t.title,img:null===n||void 0===n?void 0:n.downsized_medium.url}})));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=m,h=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){g(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c},O=function(t){t.id;var e=t.img,n=t.title;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn animate__delay-1s",children:[Object(o.jsx)("img",{src:e,alt:n}),Object(o.jsx)("p",{children:n})]})};var p=function(t){var e=t.category,n=h(e),a=n.data,c=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:e}),Object(o.jsx)("p",{className:"animate__animated animate__flash",children:c&&"Cargando ..."}),Object(o.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(o.jsx)(O,Object(d.a)({},t),t.id)}))})]})},x=function(){var t=Object(a.useState)(["One Punch"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(j,{setCategories:c}),Object(o.jsx)("hr",{}),n.map((function(t){return Object(o.jsx)(p,{category:t},t)}))]})};n(17);r.a.render(Object(o.jsx)(x,{}),document.getElementById("root")),i()}},[[18,1,2]]]);
//# sourceMappingURL=main.0c833f07.chunk.js.map