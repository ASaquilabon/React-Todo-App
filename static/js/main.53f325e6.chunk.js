(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),l=(n(24),n(10)),i=n(6),u=(n(26),n(36)),m=(n(28),n(35)),d=n(37);var s=function(e){var t=e.addTodo,n=o.a.useState(""),a=Object(i.a)(n,2),r=a[0],c=a[1];return o.a.createElement(m.a,{onSubmit:function(e){e.preventDefault(),r&&(t(r),c(""))}},o.a.createElement(m.a.Group,null,o.a.createElement(m.a.Label,null,o.a.createElement("b",null,"Add Todo")),o.a.createElement(m.a.Control,{type:"text",className:"input",value:r,onChange:function(e){return c(e.target.value)},placeholder:"Add new todo"}),o.a.createElement(d.a,{variant:"primary mb-3",type:"submit"},"SUBMIT")))};var v=function(e){var t=e.todo,n=e.index,a=e.markTodo,r=e.removeTodo;return o.a.createElement("div",{className:"todo"},o.a.createElement("span",{style:{textDecoration:t.isDone?"line-through":""}},t.text),o.a.createElement("div",null,o.a.createElement(d.a,{variant:"outline-success",onClick:function(){return a(n)}},"\u2713")," ",o.a.createElement(d.a,{variant:"outline-danger",onClick:function(){return r(n)}},"\u2715")))};var E=function(){var e=o.a.useState([{text:"This is a sample todo",done:!1}]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=function(e){var t=Object(l.a)(n);t[e].isDone=!0,a(t)},c=function(e){var t=Object(l.a)(n);t.splice(e,1),a(t)};return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("hi",{className:"text-center mb-4"},"Simple Todo List"),o.a.createElement(s,{addTodo:function(e){var t=[].concat(Object(l.a)(n),[{text:e}]);a(t)}}),o.a.createElement("div",null,n.map(function(e,t){return o.a.createElement(u.a,null,o.a.createElement(u.a.Body,null,o.a.createElement(v,{key:t,index:t,todo:e,markTodo:r,removeTodo:c})))}))))},p=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,34)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null))),p()}},[[15,3,2]]]);
//# sourceMappingURL=main.53f325e6.chunk.js.map