(this.webpackJsonproom=this.webpackJsonproom||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var r=s(2),c=s.n(r),n=s(7),a=s.n(n),i=(s(13),s(3)),l=s(8),o=s(5),m=s(1),d=function(e){var t=e.minusBtn,s=e.plusBtn;return Object(m.jsxs)("div",{className:"absolute md:w-[140px]  w-[80px]   bg-black text-white flex items-center justify-center bottom-0 right-0 h-10 lg:-right-36  ",children:[Object(m.jsx)("button",{onClick:t,className:" pr-2 text-2xl md:text-3xl hover:opacity-80 ",children:Object(m.jsx)(o.a,{})}),Object(m.jsx)("button",{onClick:s,className:"  pl-2 text-2xl md:text-3xl hover:opacity-80",children:Object(m.jsx)(o.b,{})})]})},u=s(6),h=function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(m.jsx)("header",{className:"h-[10vh]  w-1/2 md:w-[60%] md:ml-11 text-white absolute top-3 left-0 text-lg",children:Object(m.jsxs)("nav",{className:"flex items-center justify-between w-full h-full relative ",children:[Object(m.jsx)("span",{className:"text-xl ml-11 md:hidden ",onClick:function(){c(!s)},children:s?Object(m.jsx)(u.a,{className:"cursor-pointer hover:opacity-80"}):Object(m.jsx)("div",{className:"  w-screen h-screen  1  fixed inset-0 bg-opacity-30 bg-gray-800 z-0 ",children:Object(m.jsxs)("div",{className:" w-screen h-[10vh]  z-50 flex  items-center bg-white  justify-between px-11",children:[Object(m.jsx)(u.b,{className:"ml-1 text-gray-300 cursor-pointer "}),Object(m.jsx)("div",{className:"",children:Object(m.jsxs)("ul",{className:"flex items-center text-sm text-gray-700 font-semibold ",children:[Object(m.jsx)("li",{className:"mr-2 cursor-pointer hover:opacity-80",children:"home"}),Object(m.jsx)("li",{className:" cursor-pointer hover:opacity-80",children:"shop"}),Object(m.jsx)("li",{className:"mx-2 cursor-pointer hover:opacity-80",children:"about"}),Object(m.jsx)("li",{className:" cursor-pointer hover:opacity-80",children:"contact"})]})})]})})}),Object(m.jsx)("h1",{className:"font-semibold text-xl",children:"room"}),Object(m.jsxs)("ul",{className:"hidden md:flex  ",children:[Object(m.jsx)("li",{className:" cursor-pointer hover:opacity-80 mr-3",children:"home"}),Object(m.jsx)("li",{className:" cursor-pointer hover:opacity-80",children:"shop"}),Object(m.jsx)("li",{className:" cursor-pointer hover:opacity-80 mx-3",children:"about"}),Object(m.jsx)("li",{className:" cursor-pointer hover:opacity-80",children:"contact"})]})]})})},j=[{name:"banner-1",title:"Discover innovative ways to decorate ",url:"/images/banner-1.jpg",description:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",button:"shop now"},{name:"banner-2",title:"We are available all across the globe ",url:"/images/banner-2.jpg",description:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we\u2019re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."},{name:"banner-3",title:"Manufactured with the best materials ",url:"/images/banner-3.jpg",description:" Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."}],x=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(r.useEffect)((function(){return function(){var e=j.length-1;s<0&&c(e),s>e&&c(0)}}),[s]),Object(r.useEffect)((function(){var e=setInterval((function(){return c(s+1)}),3e3);return function(){return clearInterval(e)}}),[s]),Object(m.jsxs)("header",{className:"w-screen min-h-screen bg-gray-50 overflow-x-hidden opacity-1 overflow-y-hidden ",children:[Object(m.jsx)("section",{className:"flex  max-w-[100vw] items-center overflow-hidden   ",children:j.map((function(e,t){var r="nextSlide";return t===s&&(r="slide"),(t===s-1||0===s&&t===j.length-1)&&(r="slide"),Object(m.jsxs)("article",{className:r+"  relative w-full h-screen flex flex-col items-center justify-start  md:justify-start md:items-start md:flex-row md:h-[70vh] md:mt-0 mx-auto  ",children:[Object(m.jsxs)("div",{className:"w-screen h-[400px]  md:min-h-[70vh] z-50 md:w-[60vw] relative   mx-auto ",children:[Object(m.jsx)("img",{src:e.url,className:"w-full h-full",alt:e.name}),Object(m.jsx)(d,{plusBtn:function(){c(s+1)},minusBtn:function(){c(s-1)}}),Object(m.jsx)(h,{})]}),Object(m.jsxs)("div",{className:"my-2 md:my-auto  px-10 md:pl-10 md:py-4 lg:px-8 md:w-[40vw] lg:max-h-full",children:[Object(m.jsx)("h1",{className:"text-2xl font-semibold py-3 ",children:e.title}),Object(m.jsx)("p",{className:"pb-4 text-sm leading-7 w-full",children:e.description}),Object(m.jsxs)("button",{className:"tracking-widest text-xl flex items-center justify-between hover:text-gray-500 active:text-gray-400",children:[Object(m.jsx)("span",{children:"shop now"}),Object(m.jsx)("span",{className:"ml-14 text-4xl",children:Object(m.jsx)(l.a,{})})]})]})]},e.name)}))}),Object(m.jsxs)("section",{className:" flex flex-col  md:h-1/3  md:overflow-hidden w-screen md:grid md:grid-cols-4",children:[Object(m.jsx)("div",{className:"w-full min-h-[200px] md:h-[30vh]   ",children:Object(m.jsx)("img",{src:"/images/image-about-dark.jpg",alt:"tile",className:"w-full h-full"})}),Object(m.jsxs)("div",{className:"col-span-2 p-10 md:p-6 min-h-[250px]",children:[Object(m.jsx)("h2",{className:"text-lg font-semibold pb-2",children:"about our furniture"}),Object(m.jsx)("p",{className:"text-xs leading-5",children:"Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space."})]}),Object(m.jsx)("div",{className:"min-w-[350px] md:h-[30vh]    relative",children:Object(m.jsx)("img",{src:"/images/image-about-light.jpg",className:"w-full h-full menu ",alt:"tile"})})]})]})};var b=function(){return Object(m.jsx)("main",{className:" font-spartan min-h-screen ",children:Object(m.jsx)(x,{})})};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b4ebeb44.chunk.js.map