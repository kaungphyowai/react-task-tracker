(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n(9)),i=n(5),l=n(2),d=n(8),j=n(0),u=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(j.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(j.jsxs)("h3",{children:[t.text,Object(j.jsx)(d.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(j.jsx)("p",{children:t.day})]})},b=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)(u,{task:e,onDelete:n,onToggle:c},e.id)}))})},h=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(j.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};h.defaultProps={color:"steelblue"};var O=h,m=function(e){var t=e.title,n=e.onClickAdd,c=e.showAdd;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)(O,{onClick:n,color:c?"red":"green",text:c?"Close":"Add"})]})};m.defaultProps={title:"Task Trackder"};var x=m,f=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),d=i[0],u=i[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),O=h[0],m=h[1];return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:d,reminder:O}),o(""),u(""),m(!1)):alert("Please add a task")},children:[Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Task"}),Object(j.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Day & Time "}),Object(j.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:d,onChange:function(e){u(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-control form-control-check",children:[Object(j.jsx)("label",{children:"Reminder"}),Object(j.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){m(e.currentTarget.checked)}})]}),Object(j.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})};var k=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Doctors Appointment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Meeting at School",day:"Feb 6th at 1:30pm",reminder:!0}]),o=Object(l.a)(a,2),d=o[0],u=o[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x,{onClickAdd:function(){return r(!n)},showAdd:n}),n&&Object(j.jsx)(f,{onAdd:function(e){var t=Math.floor(1e3*Math.random())+1,n=Object(i.a)({id:t},e);u([].concat(Object(s.a)(d),[n]))}}),d.length>0?Object(j.jsx)(b,{tasks:d,onDelete:function(e){u(d.filter((function(t){return t.id!==e})))},onToggle:function(e){u(d.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"There is no task"]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.0c6a4970.chunk.js.map