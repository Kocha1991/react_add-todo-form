(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a.n(n),r=a(7),l=a(4),s=(a(12),a(1)),o=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],c=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],d=a(0);var m=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(""),m=Object(l.a)(i,2),u=m[0],h=m[1],b=Object(s.useState)(c),j=Object(l.a)(b,2),f=j[0],p=j[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),n(""),h("")},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"title",className:"error",children:"Title:"}),Object(d.jsx)("input",{type:"text","data-cy":"titleInput",name:"title",id:"title",placeholder:"Enter a title",value:a,onChange:function(e){return n(e.target.value)}})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"user",className:"error",children:"User:"}),Object(d.jsxs)("select",{id:"user","data-cy":"userSelect",value:u,onChange:function(e){return h(e.target.value)},children:[Object(d.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),o.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name})}))]})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",className:"btn",disabled:!u||!a.trim(),onClick:function(){return p((function(e){return[].concat(Object(r.a)(e),[{id:e.length,title:a,completed:!!Math.floor(2*Math.random()+0),userId:Number(u)}])}))},children:"Add"})]}),Object(d.jsx)("section",{className:"TodoList",children:f.map((function(e){var t,a;return Object(d.jsxs)("article",{"data-id":e.id,className:e.completed?"TodoInfo TodoInfo--completed":"TodoInfo",children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:e.title}),Object(d.jsx)("a",{className:"UserInfo",href:"mailto:Sincere@april.biz",children:null===(a=e.userId,t=o.find((function(e){return e.id===a})))||void 0===t?void 0:t.name})]})}))})]})};i.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.feb26126.chunk.js.map