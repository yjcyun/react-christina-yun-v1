(this.webpackJsonpreact_my_website=this.webpackJsonpreact_my_website||[]).push([[0],{30:function(e,n,t){e.exports=t.p+"static/media/fabric-1.1d3b4377.png"},31:function(e,n,t){e.exports=t.p+"static/media/adopt-1.bc6ad281.png"},32:function(e,n,t){e.exports=t.p+"static/media/plant-1.ded8f85c.png"},33:function(e,n,t){e.exports=t.p+"static/media/heather.65947652.png"},34:function(e,n,t){e.exports=t.p+"static/media/personalwebsite.e0ecd5c7.png"},35:function(e,n,t){e.exports=t.p+"static/media/mainBcg-blue.46ef55e3.png"},36:function(e,n,t){e.exports=t.p+"static/media/error.e971d617.png"},37:function(e,n,t){e.exports=t(49)},48:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(26),l=t.n(i),c=t(9),o=t(2),m=t(4),s=t(5);function d(){var e=Object(m.a)(["\nheight: calc(100vh - 79px);\nmargin-top: 3rem;\n\n.hero-text{\n  text-align:center;\n  margin: 3rem auto;\n}\n\n.fadeInAnimated {\n  opacity: 0;\n  animation: fadein 0.4s forwards;\n}\n\n.hero-text-1{\n  animation-delay:0.4s;\n}\n\n.hero-text-2{\n  animation-delay:1.3s;\n}\n\n@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\nhr {\n  margin: 1rem auto;\n}\n\n.hero-text h1 {\n  font-size: 1.8rem;\n}\n\n.img-container{\n  margin-left: 2rem;\n}\n\n@media (min-width: 768px) {\n  max-width: 1170px;\n  margin: 0 auto;\n  display:flex;\n  justify-content:center;\n  align-items: center;\n\n  .img-container{\n    flex: 1;\n  }\n\n  .hero-text {\n    flex:1;\n    padding-left: 5rem;\n  }\n\n  .hero-text h1{\n    font-size: 2.5rem;\n    text-align: left;\n  }\n\n  hr{\n    margin: 2rem 0;\n  }\n}\n"]);return d=function(){return e},e}var u=s.a.section(d()),p=function(e){var n=e.title,t=e.title2,a=e.title3,i=e.title4,l=e.img,c=e.children;return r.a.createElement(u,null,r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:l,alt:"avatar"})),r.a.createElement("div",{className:"hero-text"},r.a.createElement("div",{className:"hero-text-1 fadeInAnimated"},r.a.createElement("h1",null,n,r.a.createElement("br",null),t)),r.a.createElement("div",{className:"hero-text-2 fadeInAnimated"},r.a.createElement("hr",{className:"title-hr"}),r.a.createElement("h1",null,a,r.a.createElement("br",null),i)),c))};function f(){var e=Object(m.a)(["\nmargin: 2rem 1rem;\nmax-width: 1170px;\npadding: 2rem;\nborder: 1px solid #ffaeae;\nbackground: var(--lightestColor);\nborder-radius: 10px;\ntext-align: center;\nposition: relative;\ntransition: var(--mainTransition);\n\n.card-skill.large {\n  display: none\n}\n\n.img-container {\n  margin: 2rem auto;\n}\n\n.card-skill {\n  display:inline-block;\n}\n\n.card-skill span{\n  border: 1px solid grey;\n  border-radius: 1rem;\n  margin: 0 0.3rem;\n  padding: 0.1rem 0.4rem;\n  line-height: 2;\n}\n\n.card-title{\n  text-transform: capitalize;\n  margin-bottom: 1rem;\n  font-size:2rem;\n  font-family: 'Playfair Display', serif;\n}\n\n.btn {\n  padding: 0.5rem 1rem;\n  display: inline;\n  margin: 1.5rem 0.5rem 0 0.5rem;\n  border-radius: 0;\n}\n\n  @media (max-width: 380px) {\n    .btn {\n      padding: 0.5rem 0.7rem;\n      margin: 1.5rem 0.4rem 0 0;\n      font-size: 0.9rem;\n    }\n  }\n\n  @media (min-width: 996px) {\n    padding: 0;\n  \n    &:hover {\n      transform: scale(1.05);\n      background: #fff;\n    }\n    .img-container{\n      flex: 2;\n    }\n    .img-container img{\n      width: 80%;\n    }\n    .card-text-container{\n      flex:3;\n      padding: 2rem;\n    }\n\n    .card-skills {\n      display: flex;\n      flex-direction: row;\n      justify-content:center;\n      align-items: center;\n      position: relative;\n    }\n\n    .card-skill {\n      display: none;\n    }\n\n    .card-skill.large {\n      display: inline-block;\n      margin-bottom: 3rem;\n    }\n\n    .card-subtitle {\n      width: 25rem;\n      margin: 0 auto;\n    }\n\n    .card-title{\n      font-size: 2.8rem;\n    }\n  }\n\n  @media (min-width: 1100px) {\n    margin: 3rem auto;\n  }\n"]);return f=function(){return e},e}var h=s.a.div(f()),g=function(e){var n=e.title,t=e.skills,a=e.img,i=e.subtitle,l=e.live,c=e.github;return r.a.createElement(h,null,r.a.createElement("div",{className:"card-skills"},t.map((function(e){return r.a.createElement("div",{key:e,className:"card-skill"},r.a.createElement("span",null,e))})),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:a,alt:"project screenshot"})),r.a.createElement("div",{className:"card-text-container"},t.map((function(e){return r.a.createElement("div",{key:e,className:"card-skill large"},r.a.createElement("span",null,e))})),r.a.createElement("h1",{className:"card-title"},n),r.a.createElement("p",{className:"card-subtitle"},i),r.a.createElement("a",{href:l,className:"link-icon"},r.a.createElement("button",{className:"btn"},"Live Demo")),r.a.createElement("a",{href:c,className:"link-icon"},r.a.createElement("button",{className:"btn"},"Github")))))};function b(){var e=Object(m.a)(["\n text-align:center;\n margin-top: 5rem;\n text-transform:uppercase;\n font-size:1.7rem;\n font-weight: bold;\n\n .title-text{\n   letter-spacing: 0.1rem;\n }\n\n .title-hr{\n   margin: 1rem auto;\n }\n "]);return b=function(){return e},e}var v=s.a.div(b()),E=function(e){var n=e.title;return r.a.createElement(v,null,r.a.createElement("span",{className:"title-text"},n),r.a.createElement("hr",{className:"title-hr"}))},x=t(23),y=t(14),k=t(15),w=t(17),j=t(16),N=[{id:0,text:"home",path:"/"},{id:1,text:"projects",path:"/projects"},{id:2,text:"about",path:"/about"}],O=t(30),C=t.n(O),S=t(31),P=t.n(S),_=t(32),z=t.n(_),A=t(33),T=t.n(A),I=t(34),D=t.n(I),L=[{id:3,title:"Heather Dick's Portfolio Website",subtitle:"A personal portfolio website with blog",skills:["React","Gatsby","Strapi"],img:T.a,recent:!1,github:"https://github.com/yjcyun/heather_dick_portfolio",live:"https://heatherdick.netlify.app/"},{id:4,title:"Personal Website",subtitle:"A minimal website with backend supported by Strapi",skills:["React","Gatsby","Strapi","Styled-Components"],img:D.a,recent:!1,github:"https://github.com/yjcyun/gatsby_alex_leung",live:"https://alexleung.ca"},{id:0,title:"thread & needle",subtitle:"An online fabric store with a functional shopping cart and Paypal.",skills:["React","Context API","Styled-Components"],img:C.a,recent:!0,github:"https://github.com/yjcyun/react_fabric_store",live:"https://threadandneedle.netlify.app/"},{id:1,title:"adopt, don't shop",subtitle:"A dog adoption site with a list of adoptable dogs and information on each dog.",skills:["React","Context API","CSS"],img:P.a,recent:!0,github:"https://github.com/yjcyun/react_adopt_dog",live:"https://react-adopt-dog.netlify.app/"},{id:2,title:"plantiful",subtitle:"A plant store with shopping cart",skills:["Javascript","CSS","HTML"],img:z.a,recent:!0,github:"https://github.com/yjcyun/Plantiful_plants_store",live:"https://yjcyun.github.io/Plantiful_plants_store/"}],R=r.a.createContext(),B=function(e){Object(w.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={links:N,sidebarOpen:!1,projects:[],recentProjects:[]},e.handleSidebar=function(){e.setState({sidebarOpen:!e.state.sidebarOpen})},e.setProjects=function(n){var t=n.filter((function(e){return!0===e.recent}));e.setState({projects:n,recentProjects:t})},e}return Object(k.a)(t,[{key:"componentDidMount",value:function(){this.setProjects(L)}},{key:"render",value:function(){return r.a.createElement(R.Provider,{value:Object(x.a)(Object(x.a)({},this.state),{},{handleSidebar:this.handleSidebar})},this.props.children)}}]),t}(a.Component),G=R.Consumer;function H(){var e=Object(m.a)(["\n  padding: 1rem 0;\n"]);return H=function(){return e},e}var Y=s.a.section(H()),J=function(){return r.a.createElement(Y,null,r.a.createElement(E,{title:"Recent Projects"}),r.a.createElement(G,null,(function(e){return e.recentProjects.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))}))})),r.a.createElement(c.b,{to:"/projects"},r.a.createElement("button",{className:"btn"},"view more")))},M=t(35),W=t.n(M),F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{img:W.a,title:"Hi there,",title2:"I'm Christina.",title3:"A front-end developer",title4:"in Toronto, ON"}),r.a.createElement(J,null))},U=function(){return r.a.createElement(G,null,(function(e){var n=e.projects;return r.a.createElement("div",{style:{marginBottom:"6rem"}},r.a.createElement(E,{title:"Projects"}),n.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))})))}))};function V(){var e=Object(m.a)(["\n .contact-text {\n    width: 80%;\n    max-width: 40rem;\n    text-align: center;\n    margin: 2rem auto;\n  }\n\n  .contact-text p{\n    line-height:1.5;\n    margin-bottom: 5rem;\n    font-size: 1.4rem;\n  }\n"]);return V=function(){return e},e}var Z=s.a.section(V()),q=function(){return r.a.createElement(Z,null,r.a.createElement(E,{title:"about"}),r.a.createElement("div",{className:"contact-text"},r.a.createElement("p",null,"I am an ex-Registered Veterinary Technician who decided to become a web developer. I enjoy learning new technologies and am always fascinated by how much I do not know about this world. Should you want to learn more about me, do not hestitate to send me a message.")))},K=t(36),Q=t.n(K),X=function(){return r.a.createElement(p,{img:Q.a,title:"404",title3:"Oops!",title4:"This page does not exist"},r.a.createElement(c.b,{to:"/"},r.a.createElement("button",{className:"btn left-btn",style:{marginTop:"3rem"}},"return home")))},$=t(22);function ee(){var e=Object(m.a)(["\n  position:fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 2rem;\n  z-index:1;\n  background: white;\n\n  .nav-header {\n    display:flex;\n    justify-content:space-between;\n  }\n\n  .nav-btn{\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    outline: none;\n  }\n  /* ********TODO: ADD TRANSITION BETWEEN TOGGLE******* */\n\n  .nav-icon {\n    font-size: 1.5rem;\n  }\n\n  .logo {\n    font-size: 2rem;\n    font-family: 'Sacramento', cursive;\n    font-weight: bold;\n    color: black;\n    text-decoration:none;\n  }\n\n  .nav-links {\n    height: 0;\n    overflow: hidden;\n    transition: all 0.3s linear;\n    list-style: none;\n    transform: translateY(20%);\n  }\n\n  .nav-links a {\n    display:block;\n    text-decoration: none;\n    padding: 1rem 0;\n    color: black;\n    transition: var(--mainTransition);\n    text-align: center;\n    font-weight: 600;\n    font-size: 2rem;\n  }\n\n  .show-nav {\n    height: 100vh;\n  }\n\n  @media (min-width: 768px) {\n    .nav-btn {\n      display: none;\n    }\n\n    .nav-center {\n      max-width: 1170px;\n      margin: 0 auto;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n\n    .nav-links {\n      height: auto;\n      display: flex;\n      margin-left: 4rem;\n      transform: translateY(0);\n    }\n\n    .nav-links a {\n      padding: 0 1rem;\n      font-size: 1.2rem;\n    }\n  }\n"]);return ee=function(){return e},e}var ne=s.a.nav(ee()),te=function(){return r.a.createElement(G,null,(function(e){var n=e.links,t=e.sidebarOpen,a=e.handleSidebar;return r.a.createElement(ne,{className:"navbar"},r.a.createElement("div",{className:"nav-center"},r.a.createElement("div",{className:"nav-header"},r.a.createElement(c.b,{to:"/",className:"logo"},r.a.createElement("p",null,"Christina Yun")),t?r.a.createElement("button",{className:"nav-btn",onClick:a},r.a.createElement($.a,{className:"nav-icon close"})):r.a.createElement("button",{className:"nav-btn",onClick:a},r.a.createElement($.b,{className:"nav-icon open"}))),r.a.createElement("ul",{className:t?"nav-links show-nav":"nav-links"},n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(c.b,{to:e.path,onClick:a},e.text))})))))}))},ae=t(18);function re(){var e=Object(m.a)(["\n  .wave-container {\n    position:relative;\n    overflow:hidden;\n    /* background: rgb(255,255,255); */\n    /* background: linear-gradient(rgba(255,255,255,1) 0%, rgba(255,225,225,1) 100%); */\n    background-color: var(--mainColor);\nbackground-image: linear-gradient(#fff 0%,#cfdfef 100%);\n\n    text-align:center;\n  }\n\n  h2 {\n    margin-bottom:2rem;\n  }\n\n  .footer-icon{\n    font-size: 2rem;\n    color: black;\n    margin: 0 1rem 3rem 1rem;\n    transition: var(--mainTransition);\n  }\n\n  .footer-icon:hover {\n    transform: translateY(-1rem);\n  }\n\n  @media (min-width: 768px) {\n    .footer-text{\n      margin-top: -5rem;\n      margin-bottom: 3rem;\n    }\n  }\n"]);return re=function(){return e},e}var ie=s.a.footer(re()),le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null,r.a.createElement("div",{className:"wave-container"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},r.a.createElement("path",{fill:"#fff",fillOpacity:"1",d:"M0,64L48,58.7C96,53,192,43,288,74.7C384,107,480,181,576,176C672,171,768,85,864,74.7C960,64,1056,128,1152,133.3C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"})),r.a.createElement("div",{className:"footer-text"},r.a.createElement("h2",null,"Say Hi!"),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:"https://www.linkedin.com/in/christina-yun-58954a123/"},r.a.createElement(ae.b,{className:"footer-icon"})),r.a.createElement("a",{href:"mailto:yjc.yun@gmail.com"},r.a.createElement(ae.c,{className:"footer-icon"})),r.a.createElement("a",{href:"https://github.com/yjcyun"},r.a.createElement(ae.a,{className:"footer-icon"})))))))},ce=function(e){Object(w.a)(t,e);var n=Object(j.a)(t);function t(){return Object(y.a)(this,t),n.apply(this,arguments)}return Object(k.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),t}(r.a.Component),oe=Object(o.f)(ce);var me=function(){return r.a.createElement(c.a,null,r.a.createElement(oe,null),r.a.createElement(te,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(F,null)),r.a.createElement(o.a,{exact:!0,path:"/projects"},r.a.createElement(U,null)),r.a.createElement(o.a,{path:"/about"},r.a.createElement(q,null)),r.a.createElement(o.a,{path:"*"},r.a.createElement(X,null))),r.a.createElement(le,null))};t(48);l.a.render(r.a.createElement(B,null,r.a.createElement(me,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c35d7997.chunk.js.map