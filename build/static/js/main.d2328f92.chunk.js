(this.webpackJsonplibraryreact=this.webpackJsonplibraryreact||[]).push([[0],{33:function(e,n,t){e.exports=t(45)},45:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(17),l=t.n(o),i=t(27),c=t(5),u=t(28),s=t(8),d=t.n(s),p=t(11),f=t(18),b=t(19),m=t(20),g=t(29),h=t(21),y=t(30),x=t(9),v=t(3),w=t(4);function E(){var e=Object(v.a)(["\n  max-height: 1000px;\n  background: #231e23;\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 60px auto;\n  padding: 30px;\n  border-radius: 4px;\n  box-shadow: 0 0 10px rgba(0, 0, 0.1);\n  h1 {\n    color: yellow;\n    font-size: 25px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    svg {\n      margin-right: 10px;\n    }\n    a {\n      color: yellow;\n      font-size: 25px;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      text-decoration: none;\n      color: yellow;\n    }\n  }\n"]);return E=function(){return e},e}var k=w.c.div(E());function O(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: row;\n  button {\n    background: yellow;\n    border: 0;\n    padding: 5px 10px;\n    margin-left: 20px;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(v.a)(["\n  list-style: none;\n  margin-top: 30px;\n  font-size: 17px;\n  li {\n    padding: 15px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    color: #eee;\n    & + li {\n      border-top: 1px solid #eeeeee;\n    }\n  }\n"]);return j=function(){return e},e}function S(){var e=Object(v.a)(["\n      svg {\n        animation: "," 2s linear infinite;\n      }\n    "]);return S=function(){return e},e}function C(){var e=Object(v.a)(["\n  background: yellow;\n  border: 0;\n  padding: 0 10px;\n  margin-left: 20px;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n  ","\n"]);return C=function(){return e},e}function P(){var e=Object(v.a)(["\n  from {\n    transform:rotate(0deg);\n  }\n  to{\n    transform:rotate(360deg);\n  }\n"]);return P=function(){return e},e}function A(){var e=Object(v.a)(["\n  margin-top: 25px;\n  display: flex;\n  flex-direction: row;\n\n  input,\n  select {\n    flex: 1;\n    border: 1px solid #eeee;\n    border-radius: 4px;\n    padding: 10px 15px;\n    & + input,\n    & + select {\n      margin-left: 20px;\n    }\n\n    &[type='number']::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n    }\n  }\n"]);return A=function(){return e},e}var R=w.c.form(A()),B=Object(w.d)(P()),D=w.c.button.attrs((function(e){return{type:"submit",disabled:e.loading}}))(C(),(function(e){return e.loading&&Object(w.b)(S(),B)})),T=w.c.ul(j()),z=w.c.span(O()),U=t(24),N=t.n(U);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var J=function(e){function n(){var e,t;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(g.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={newTitle:"",newAuthor:"",newPagesBook:0,newBookread:!1,books:[],loading:!1},t.handleDelete=function(e){t.setState({books:t.state.books.filter((function(n){return n!==e}))})},t.handleChangeRead=function(e){var n=t.state.books,a=t.state.books.findIndex((function(n){return n===e}));n[a]=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(t,!0).forEach((function(n){Object(f.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n[a],{read:!e.read}),t.setState({books:n})},t.handleStateChangeTitle=function(){var e=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({newTitle:n.target.value});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),t.handleStateChangeAuthor=function(e){t.setState({newAuthor:e.target.value})},t.handleStateChangeNumberPages=function(e){t.setState({newPagesBook:e.target.value})},t.handleStateChangeRead=function(e){t.setState({newBookread:e.target.value})},t.handleSubmitState=function(){var e=Object(p.a)(d.a.mark((function e(n){var a,r,o,l,i,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t.setState({loading:!0}),a=t.state,r=a.newTitle,o=a.newAuthor,l=a.newPagesBook,i=a.newBookread,c=a.books,s={title:r,author:o,pages:l,read:i},t.setState({books:[].concat(Object(u.a)(c),[s]),newTitle:"",newAuthor:"",newBookread:!1,newPagesBook:0,loading:!1});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),t}return Object(y.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("books");e&&this.setState({books:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,n){var t=this.state.books;n.books!==t&&localStorage.setItem("books",JSON.stringify(t))}},{key:"render",value:function(){var e=this,n=this.state,t=n.newTitle,a=n.newAuthor,o=n.newPagesBook,l=n.loading,i=n.books;return r.a.createElement(k,null,r.a.createElement("h1",null,r.a.createElement(x.a,null)," Books"),r.a.createElement("h1",null,r.a.createElement(x.c,null),"Pesquisar"),r.a.createElement(R,{onSubmit:this.handleSubmitState},r.a.createElement("input",{type:"text",placeholder:"Add title",value:t,onChange:this.handleStateChangeTitle}),r.a.createElement("input",{type:"text",placeholder:"Add Author",value:a,onChange:this.handleStateChangeAuthor}),r.a.createElement("input",{type:"number",placeholder:"Add pages number",value:o,min:"0",max:"10000",onChange:this.handleStateChangeNumberPages}),r.a.createElement("select",{name:"read",onChange:this.handleStateChangeRead},r.a.createElement("option",{value:!1},"Unread"),r.a.createElement("option",{value:!0},"Read")),r.a.createElement(D,{loading:l},l?r.a.createElement(x.d,{color:"#222",size:15}):r.a.createElement(x.b,{color:"#222",size:15}))),t?r.a.createElement(T,null,i.map((function(n){return N.a.compareTwoStrings(t,n.title)>.1?r.a.createElement("li",{key:n.title},r.a.createElement("span",null,n.title),r.a.createElement("span",null,n.author),r.a.createElement("span",null,n.pages),n.read?r.a.createElement("span",null,"Read"):r.a.createElement("span",null,"Unread"),r.a.createElement(z,null,n.read?r.a.createElement("button",{type:"button",onClick:function(){return e.handleChangeRead(n)}},"Unread"):r.a.createElement("button",{type:"button",onClick:function(){return e.handleChangeRead(n)}},"Read"),r.a.createElement("button",{type:"button",onClick:function(){return e.handleDelete(n)}},"Remove"))):r.a.createElement(z,null,"Not Found")}))):r.a.createElement(T,null,i.map((function(n){return r.a.createElement("li",{key:n.title},r.a.createElement("span",null,n.title),r.a.createElement("span",null,n.author),r.a.createElement("span",null,n.pages),n.read?r.a.createElement("span",null,"Read"):r.a.createElement("span",null,"Unread"),r.a.createElement(z,null,n.read?r.a.createElement("button",{type:"button",onClick:function(){return e.handleChangeRead(n)}},"Unread"):r.a.createElement("button",{type:"button",onClick:function(){return e.handleChangeRead(n)}},"Read"),r.a.createElement("button",{type:"button",onClick:function(){return e.handleDelete(n)}},"Remove")))}))))}}]),n}(a.Component);function F(){return r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:J})))}function H(){var e=Object(v.a)(["\n\n  *{\n    margin:0;\n    padding:0;\n    outline:0;\n    box-sizing:border-box;\n  }\n  html, body, #root{\n    min-height:100%;\n  }\n  body{\n    background-color: #981f3f21;\n    -webkit-font-smoothing: antialiased !important;\n  }\n  body,input,button{\n    color: #222;\n    font-size:14px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n  button{\n    cursor:pointer;\n  }\n"]);return H=function(){return e},e}var q=Object(w.a)(H());var M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(q,null))};l.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d2328f92.chunk.js.map