(this["webpackJsonpcurso-react"]=this["webpackJsonpcurso-react"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(20),i=c.n(n),r=(c(30),c(31),c(4)),l=(c(32),c(33),c(7)),j=c(6),d=c(0),o=function(e){return Object(d.jsx)(s.Fragment,{children:Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{className:"title",children:e.title}),Object(d.jsxs)("div",{className:"cart",children:[Object(d.jsx)(j.a,{icon:l.a,size:"2x",color:"white"})," ",Object(d.jsxs)("span",{className:"counter",children:["(",e.itemsCart,")"]})]})]})})},m=function(e){return Object(d.jsx)(s.Fragment,{children:Object(d.jsx)("div",{className:"navigation",children:Object(d.jsx)("h1",{className:"title",children:e.title})})})},b=function(e){return Object(d.jsx)(s.Fragment,{children:Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)("h1",{className:"title",children:e.title})})})},O=function(e){return Object(d.jsx)(s.Fragment,{children:Object(d.jsx)("div",{className:"principal",children:Object(d.jsx)("h1",{className:"title",children:e.title})})})},h=function(e){return Object(d.jsx)(s.Fragment,{children:Object(d.jsxs)("div",{className:"producto",children:[Object(d.jsx)("h1",{className:"title",children:e.title}),Object(d.jsxs)("h4",{className:"price",children:["$ ",e.price]}),Object(d.jsxs)("button",{className:"btn btn-info",type:"button",onClick:function(){return function(){var t=e.itemsCart+1;e.addItemCart(t),console.log(t)}()},children:["Agregar al Carrito \xa0",Object(d.jsx)(j.a,{icon:l.a})]})]})})},x=function(e){return Object(d.jsx)(s.Fragment,{children:Object(d.jsx)("div",{className:"productos",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("h1",{className:"title",children:e.title})}),Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)(h,{title:"PRODUCTO",price:150,addItemCart:e.addItemCart,itemsCart:e.itemsCart})}),Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)(h,{title:"PRODUCTO",price:"2000",addItemCart:e.addItemCart,itemsCart:e.itemsCart})})]})})})})},u=function(e){var t=e.date;return Object(d.jsx)(s.Fragment,{children:Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("h1",{className:"date",children:["Derechos Reservados GrowthBox S.A. de C.V. \xa9 ",t]})})})},p=c(10),N=c.n(p),v=c(21),f=c(22),C=c.n(f),g=c(24).a.p({padding:"1rem",color:"#FFF",fontSize:30,textTransform:"uppercase",fontWeight:"bold",textAlign:"center",fontFamily:"cursive",width:"100%"}),F=function(e){var t=e.mensaje;return Object(d.jsx)(g,{children:t})},w=function(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(r.a)(n,2),l=i[0],j=i[1];return Object(s.useEffect)((function(){(function(){var e=Object(v.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",e.next=3,C.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");case 3:t=e.sent,j(t.data.Data),a(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsx)(s.Fragment,{children:Object(d.jsxs)("div",{className:"criptomonedas",children:[Object(d.jsx)("h3",{className:"titleCripto",children:"Top 10 Criptomonedas"}),c?Object(d.jsx)(F,{mensaje:"Cargando"}):Object(d.jsx)("ol",{className:"listCriptos",children:l.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:e.CoinInfo.FullName})})}))})]})})},I=function(){var e=(new Date).getFullYear(),t=Object(s.useState)(0),c=Object(r.a)(t,2),a=c[0],n=c[1];return Object(d.jsx)(s.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(o,{title:"HEADER",itemsCart:a})}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(m,{title:"NAVEGACI\xd3N"})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-3 align-self-center",children:Object(d.jsx)(b,{title:"SIDEBAR"})}),Object(d.jsx)("div",{className:"col-9",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(O,{title:"PRINCIPAL"})}),Object(d.jsx)("div",{className:"col-8",children:Object(d.jsx)(x,{title:"PRODUCTOS",addItemCart:n,itemsCart:a})}),Object(d.jsx)("div",{className:"col-4",children:Object(d.jsx)(w,{})})]})})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)(u,{date:e})})})]})})};var D=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(I,{})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),S()}},[[60,1,2]]]);
//# sourceMappingURL=main.5df8881a.chunk.js.map