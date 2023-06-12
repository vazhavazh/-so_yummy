"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[540],{8130:function(e,i,n){n.d(i,{V:function(){return a}});var r=n(9439),_=n(2791),s=n(7689),c=n(3329),a=function(e){var i=e.recipeTitle,n=(0,_.useState)(""),a=(0,r.Z)(n,2),t=a[0],p=a[1],l=(0,s.TH)();(0,_.useEffect)((function(){var e=d(l.pathname);p(e)}),[l]);var d=function(e){switch(e.substring(1)){case"categories":return"Categories";case"favorite":return"Favorites";case"add":return"Add recipe";case"my":return"My recipes";case"search":return"Search";case"shopping-list":return"Shopping list";default:return"Page Title"}};return(0,c.jsx)(c.Fragment,{children:i?(0,c.jsx)("h1",{className:"recipeName",children:i}):(0,c.jsx)("div",{className:"page-wrapper",children:(0,c.jsxs)("div",{className:"mainTitle-container",children:[(0,c.jsx)("h1",{className:"mainTitle",children:t}),(0,c.jsx)("div",{className:"mainTitle-decorator1"}),(0,c.jsx)("div",{className:"mainTitle-decorator2"}),(0,c.jsx)("div",{className:"mainTitle-decorator3"})]})})})}},3540:function(e,i,n){n.r(i),n.d(i,{default:function(){return R}});var r=n(2791),_={"dark-mode":"RecipeMain_dark-mode__G6t-U","remove-btnX":"RecipeMain_remove-btnX__iLElv","remove-btnX--icon":"RecipeMain_remove-btnX--icon__UChU1","base-link-leaf":"RecipeMain_base-link-leaf__4mkQ2",trashBtn:"RecipeMain_trashBtn__r50f5","trashBtn--icon":"RecipeMain_trashBtn--icon__0G2Sr",flexWrapper:"RecipeMain_flexWrapper__qKpNE",active:"RecipeMain_active__o73SC",container:"RecipeMain_container__ym69S",body:"RecipeMain_body__Hs97W",hero:"RecipeMain_hero__PnFNi",hero__title:"RecipeMain_hero__title__MmXyg",hero__text:"RecipeMain_hero__text__VD-2o",hero__button:"RecipeMain_hero__button__qJHBD",hero__clock:"RecipeMain_hero__clock__bUNGw",svg:"RecipeMain_svg__dWo6w",hero__time:"RecipeMain_hero__time__FK7lD",list:"RecipeMain_list__dHuKp",list__head:"RecipeMain_list__head__cAAY4",list__second:"RecipeMain_list__second__HY-+k",ingred__list:"RecipeMain_ingred__list__d302P",ingred__item:"RecipeMain_ingred__item__Y6mRd",ingred__wrapper:"RecipeMain_ingred__wrapper__RLv30",ingred__img:"RecipeMain_ingred__img__2Mdmy",ingred__name:"RecipeMain_ingred__name__Ejjvn",ingred__wrapper_second:"RecipeMain_ingred__wrapper_second__ziMun",ingred__quantity:"RecipeMain_ingred__quantity__gnw-8",checkbox__wrapper:"RecipeMain_checkbox__wrapper__xhLQ+",ingred__checkbox:"RecipeMain_ingred__checkbox__yx+LR",ingred__checkbox_custom:"RecipeMain_ingred__checkbox_custom__bewfK",prep__container:"RecipeMain_prep__container__OW2e0",prep__title:"RecipeMain_prep__title__N2gmg",prep__list:"RecipeMain_prep__list__0eALh",prep__item:"RecipeMain_prep__item__VSqI2",prep__step:"RecipeMain_prep__step__9uvhW",prep__img:"RecipeMain_prep__img__AQDb-"},s=n(3329),c=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:_.prep__container,children:[(0,s.jsxs)("div",{className:_.prep__box,children:[(0,s.jsx)("h3",{className:_.prep__title,children:"Recipe Preparation"}),(0,s.jsx)("ol",{className:_.prep__list})]}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:_.prep__img,src:"./static/media/salad.07661521d67a51570636.jpg",alt:"dish"})})]})})},a=n(5861),t=n(4687),p=n.n(t),l=n(8130),d=function(){return(0,s.jsxs)("svg",{className:_.svg,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsxs)("g",{clipPath:"url(#clip0_264_738)",children:[(0,s.jsx)("path",{d:"M9.99996 18.3334C14.6023 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6023 1.66669 9.99996 1.66669C5.39759 1.66669 1.66663 5.39765 1.66663 10C1.66663 14.6024 5.39759 18.3334 9.99996 18.3334Z",stroke:"#23262A",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M10 5V10L13.3333 11.6667",stroke:"#23262A",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"clip0_264_738",children:(0,s.jsx)("rect",{width:"20",height:"20",fill:"white"})})})]})},o=n(9434),h=n(3838),m=function(e){var i=e.recipes,n=(0,o.I0)(),r=function(){var e=(0,a.Z)(p().mark((function e(i){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n((0,h.O)(i));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(i){return e.apply(this,arguments)}}();return(0,s.jsx)(s.Fragment,{children:i.map((function(e){return(0,s.jsxs)("div",{className:_.hero,children:[(0,s.jsx)(l.V,{recipeTitle:e.title}),(0,s.jsx)("p",{className:_.hero__text,children:e.description}),(0,s.jsx)("button",{className:_.hero__button,type:"button",onClick:function(){return r(e._id)},children:"Add to favorite recipes"}),(0,s.jsxs)("div",{className:_.hero__clock,children:[(0,s.jsx)(d,{className:_.svg}),(0,s.jsxs)("p",{className:_.hero__time,children:[e.time," min"]})]})]},e._id)}))})},u=n(7689),x=n(9564),g=function(e){return e.simpleRecipe.simpleRecipe},j=function(e){var i=e.simpleRecipe.simpleRecipe;return i.length>0?i[0].ingredients:[]},v=function(e){var i=e.ingredients;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:_.list,children:[(0,s.jsxs)("div",{className:_.list__head,children:[(0,s.jsx)("p",{className:_.list__first,children:"Ingridients"}),(0,s.jsxs)("div",{className:_.list__second,children:[(0,s.jsx)("p",{children:"Number"}),(0,s.jsx)("p",{children:"Add to list"})]})]}),(0,s.jsx)("ul",{className:_.ingred__list,children:i.map((function(e){return(0,s.jsxs)("li",{className:_.ingred__item,children:[(0,s.jsxs)("div",{className:_.ingred__wrapper,children:[(0,s.jsx)("img",{className:_.ingred__img,src:e.thb,alt:e.ttl}),(0,s.jsx)("h2",{className:_.ingred__name,children:e.ttl})]}),(0,s.jsxs)("div",{className:_.ingred__wrapper_second,children:[(0,s.jsx)("p",{className:_.ingred__quantity,children:e.measure}),(0,s.jsxs)("label",{className:_.checkbox__wrapper,children:[(0,s.jsx)("input",{className:_.ingred__checkbox,type:"checkbox"}),(0,s.jsx)("span",{className:_.ingred__checkbox_custom})]})]})]},e._id)}))})]})})},R=function(){var e=(0,u.UO)().recipeId,i=(0,o.I0)();(0,r.useEffect)((function(){i((0,x.m)(e))}),[i,e]);var n=(0,o.v9)(g),a=(0,o.v9)(j);return console.log(n),console.log(a),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:_.body,children:[(0,s.jsx)(m,{recipes:n}),(0,s.jsx)(v,{ingredients:a}),(0,s.jsx)(c,{})]})})}}}]);
//# sourceMappingURL=540.6577fc37.chunk.js.map