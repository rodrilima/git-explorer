(this["webpackJsonpgithub-explorer"]=this["webpackJsonpgithub-explorer"]||[]).push([[0],{15:function(n,e,t){n.exports=t.p+"static/media/logo.04f6798f.svg"},32:function(n,e,t){n.exports=t.p+"static/media/bg.0b819d63.svg"},41:function(n,e,t){n.exports=t(68)},68:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(31),l=t.n(o),i=t(7),c=t(3),u=t(4),p=t(32),s=t.n(p);function m(){var n=Object(c.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #F0F0F0 url(",") no-repeat 70% top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 16px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 20px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return m=function(){return n},n}var d=Object(u.a)(m(),s.a),f=t(6),b=t(17),g=t.n(b),x=t(40),h=t(36),E=t(8),v=t(13),y=t(15),O=t.n(y),j=t(37),k=t.n(j).a.create({baseURL:"https://api.github.com"}),w=t(39);function F(){var n=Object(c.a)(["\n  margin-top: 80px;\n  max-width: 700px;\n\n  a {\n    background: #FFF;\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    img {\n      width: 64px;\n      height: 64px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: #3D3D4D;\n      }\n\n      p {\n        font-size: 18px;\n        color: #A8A8B3;\n        margin-top: 4px;\n      }\n    }\n    svg {\n      margin-left: auto;\n      color: #cbcbd6;\n    }\n  }\n"]);return F=function(){return n},n}function A(){var n=Object(c.a)(["\n  display: block;\n  color: #c53030;\n  margin-top: 8px;\n"]);return A=function(){return n},n}function z(){var n=Object(c.a)(["\n      border-color: #c53030;\n    "]);return z=function(){return n},n}function S(){var n=Object(c.a)(["\n  margin-top: 40px;\n  max-width: 700px;\n\n  display: flex;\n\n  input {\n    flex: 1;\n    height: 70px;\n    padding: 0 24px;\n    border: 0;\n    border-radius: 5px 0 0 5px;\n    color: #3A4A4A;\n    border: 2px solid #fff;\n    border-right: 0;\n\n    ","\n\n    &::placeholder{\n      color: #A8A8A8;\n    }\n  }\n\n  button {\n    width: 210px;\n    height: 70px;\n    background: #04D361;\n    border-radius: 0 5px 5px 0;\n    border: 0;\n    color: #FFF;\n    font-weight: bold;\n    transition: background-color 0.2s;\n\n    &:hover {\n      background: ","\n    }\n  }\n"]);return S=function(){return n},n}function _(){var n=Object(c.a)(["\n  font-size: 48px;\n  color: #3A4A4A;\n  max-width: 450px;\n  line-height: 56px;\n\n  margin-top: 80px;\n"]);return _=function(){return n},n}var D=u.c.h1(_()),G=u.c.form(S(),(function(n){return n.hasError&&Object(u.b)(z())}),Object(w.a)(.2,"#04d361")),B=u.c.div(A()),I=u.c.div(F()),J=function(){var n=Object(r.useState)(""),e=Object(E.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)(""),c=Object(E.a)(l,2),u=c[0],p=c[1],s=Object(r.useState)((function(){var n=localStorage.getItem("@GithubExplorer:repositories");return n?JSON.parse(n):[]})),m=Object(E.a)(s,2),d=m[0],f=m[1];function b(){return(b=Object(h.a)(g.a.mark((function n(e){var r,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t){n.next=3;break}return n.abrupt("return",p("Enter the author/name of the repository"));case 3:return n.prev=3,n.next=6,k.get("repos/".concat(t));case 6:return r=n.sent,a=r.data,o(""),p(""),n.abrupt("return",f([].concat(Object(x.a)(d),[a])));case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",p("Error searching for this repository"));case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){localStorage.setItem("@GithubExplorer:repositories",JSON.stringify(d))}),[d]),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:O.a,alt:"Github Explorer"}),a.a.createElement(D,null,"Explore Repositories on Github"),a.a.createElement(G,{hasError:!!u,onSubmit:function(n){return b.apply(this,arguments)}},a.a.createElement("input",{value:t,onChange:function(n){return o(n.target.value)},placeholder:"Type the name of the repository"}),a.a.createElement("button",{type:"submit"},"Search")),u&&a.a.createElement(B,null,u),a.a.createElement(I,null,d.map((function(n){return a.a.createElement(i.b,{to:"/repositories/".concat(n.full_name),key:n.full_name},a.a.createElement("img",{src:n.owner.avatar_url,alt:n.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,n.full_name),a.a.createElement("p",null,n.description)),a.a.createElement(v.b,{size:20}))}))))};function R(){var n=Object(c.a)(["\nmargin-top: 80px;\n\na {\n  background: #FFF;\n  border-radius: 5px;\n  width: 100%;\n  padding: 24px;\n  display: block;\n  text-decoration: none;\n\n  display: flex;\n  align-items: center;\n  transition: transform 0.2s;\n\n  & + a {\n    margin-top: 16px;\n  }\n\n  &:hover {\n    transform: translateX(10px);\n  }\n\n  div {\n    margin: 0 16px;\n    flex: 1;\n\n    strong {\n      font-size: 20px;\n      color: #3D3D4D;\n    }\n\n    p {\n      font-size: 18px;\n      color: #A8A8B3;\n      margin-top: 4px;\n    }\n  }\n  svg {\n    margin-left: auto;\n    color: #cbcbd6;\n  }\n}\n"]);return R=function(){return n},n}function N(){var n=Object(c.a)(["\n  margin-top: 80px;\n\n  header {\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 120px;\n      height: 120px;\n      border-radius:50%;\n    }\n\n    div {\n      margin-left: 24px;\n\n      strong {\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #737380;\n        margin-top: 4px;\n      }\n    }\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 40px;\n\n    li {\n\n      & + li {\n        margin-left: 80px;\n      }\n      strong {\n        display: block;\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      span {\n        display: block;\n        margin-top: 4px;\n        color: #6c6c80;\n      }\n    }\n  }\n"]);return N=function(){return n},n}function X(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: #a8a8b3;\n    transition: color 0.2s;\n\n    &:hover {\n      color: #666;\n    }\n\n    svg {\n      margin-right: 4px;\n    }\n  }\n"]);return X=function(){return n},n}var C=u.c.header(X()),L=u.c.section(N()),M=u.c.div(R()),T=function(){var n=Object(r.useState)(null),e=Object(E.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)([]),c=Object(E.a)(l,2),u=c[0],p=c[1],s=Object(f.f)().params;return Object(r.useEffect)((function(){k.get("repos/".concat(s.repository)).then((function(n){var e=n.data;o(e)})),k.get("repos/".concat(s.repository,"/issues")).then((function(n){var e=n.data;p(e)}))}),[s.repository]),a.a.createElement(a.a.Fragment,null,a.a.createElement(C,null,a.a.createElement("img",{src:O.a,alt:"Github Explorer"}),a.a.createElement(i.b,{to:"/"},a.a.createElement(v.a,{size:16}),"Back")),t&&a.a.createElement(L,null,a.a.createElement("header",null,a.a.createElement("img",{src:t.owner.avatar_url,alt:t.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,t.full_name),a.a.createElement("p",null,t.description))),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,t.stargazers_count),a.a.createElement("span",null,"Stars")),a.a.createElement("li",null,a.a.createElement("strong",null,t.forks_count),a.a.createElement("span",null,"Forks")),a.a.createElement("li",null,a.a.createElement("strong",null,t.open_issues_count),a.a.createElement("span",null,"Issues Abertas")))),a.a.createElement(M,null,u.map((function(n){return a.a.createElement("a",{key:n.id,href:n.html_url,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("div",null,a.a.createElement("strong",null,n.title),a.a.createElement("p",null,n.user.login)),a.a.createElement(v.b,{size:20}))}))))},U=function(){return a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/",exact:!0,component:J}),a.a.createElement(f.a,{path:"/repositories/:repository+",component:T}))},q=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{basename:"/git-explorer"},a.a.createElement(U,null)),a.a.createElement(d,null))};l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(q,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d26726ec.chunk.js.map