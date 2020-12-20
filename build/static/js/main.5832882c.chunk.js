(window.webpackJsonpproject_chat_application=window.webpackJsonpproject_chat_application||[]).push([[0],{108:function(e,t){},111:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),o=a(60),s=a.n(o),l=a(66),i=a(5),m=a(61),u=a.n(m),E=a(17),h=a.n(E),p=a(18),d=a.n(p),v=(a(111),function(e){var t=e.users;return r.a.createElement("div",{className:"textContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"EPIC Chat Application ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcac")),r.a.createElement("h2",null,"Upload your question to get help! ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f")),r.a.createElement("h2",null,"Try it out right now! ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2b05\ufe0f"))),t?r.a.createElement("div",null,r.a.createElement("h1",null,"People currently chatting:"),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,t.map(function(e){var t=e.name;return r.a.createElement("div",{key:t,className:"activeItem"},t,r.a.createElement("img",{alt:"Online Icon",src:d.a}))})))):null)}),f=a(62),g=a.n(f),A=(a(147),a(36)),b=a.n(A),j=function(e){var t=e.message,a=t.text,n=t.user,c=!1,o=e.name.trim().toLowerCase();return n===o&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},o),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},b.a.emojify(a)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},b.a.emojify(a))),r.a.createElement("p",{className:"sentText pl-10 "},n))},y=(a(148),function(e){var t=e.messages,a=e.name;return r.a.createElement(g.a,{className:"messages"},t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(j,{message:e,name:a}))}))}),C=a(63),N=a.n(C),O=(a(149),function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:d.a,alt:"online icon"}),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:N.a,alt:"close icon"}))))}),S=(a(150),function(e){var t=e.setMessage,a=e.sendMessage,n=e.message;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var a=e.target.value;return t(a)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return a(e)}},"Send"))}),x=(a(151),a(19)),I=a(20),k=a(23),w=a(21),z=a(24),B=(a(152),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(k.a)(this,Object(w.a)(t).call(this,e))).socket=h.a.connect("http://localhost:3000"),a.isDrawing=!1,a.socket.on("canvas-data",function(e){var t=this,a=setInterval(function(){if(!t.isDrawing){t.isDrawing=!0,clearInterval(a);var n=new Image,c=document.querySelector("#board").getContext("2d");n.onload=function(){c.drawImage(n,0,0),t.isDrawing=!1},n.src=e}},200)}),a}return Object(z.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.drawOnCanvas()}},{key:"componentWillReceiveProps",value:function(e){this.ctx.strokeStyle=e.color,this.ctx.lineWidth=e.size}},{key:"drawOnCanvas",value:function(){var e=document.querySelector("#board");this.ctx=e.getContext("2d");var t=this.ctx,a=document.querySelector("#sketch"),n=getComputedStyle(a);e.width=parseInt(n.getPropertyValue("width")),e.height=parseInt(n.getPropertyValue("height"));var c={x:0,y:0},r={x:0,y:0};e.addEventListener("mousemove",function(e){r.x=c.x,r.y=c.y,c.x=e.pageX-this.offsetLeft,c.y=e.pageY-this.offsetTop},!1),t.lineWidth=this.props.size,t.lineJoin="round",t.lineCap="round",t.strokeStyle=this.props.color,e.addEventListener("mousedown",function(t){e.addEventListener("mousemove",s,!1)},!1),e.addEventListener("mouseup",function(){e.removeEventListener("mousemove",s,!1)},!1);var o=this,s=function(){t.beginPath(),t.moveTo(r.x,r.y),t.lineTo(c.x,c.y),t.closePath(),t.stroke(),void 0!=o.timeout&&clearTimeout(o.timeout),o.timeout=setTimeout(function(){var t=e.toDataURL("image/png");o.socket.emit("canvas-data",t)},1e3)}}},{key:"render",value:function(){return r.a.createElement("div",{className:"sketch",id:"sketch"},r.a.createElement("canvas",{className:"board",id:"board"}))}}]),t}(r.a.Component)),D=(a(153),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(k.a)(this,Object(w.a)(t).call(this,e))).state={color:"#000000",size:"5"},a}return Object(z.a)(t,e),Object(I.a)(t,[{key:"changeColor",value:function(e){this.setState({color:e.target.value})}},{key:"changeSize",value:function(e){this.setState({size:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{class:"tools-section"},r.a.createElement("div",{className:"color-picker-container"},"Select Brush Color : \xa0",r.a.createElement("input",{type:"color",value:this.state.color,onChange:this.changeColor.bind(this)})),r.a.createElement("div",{className:"brushsize-container"},"Select Brush Size : \xa0",r.a.createElement("select",{value:this.state.size,onChange:this.changeSize.bind(this)},r.a.createElement("option",null," 5 "),r.a.createElement("option",null," 10 "),r.a.createElement("option",null," 15 "),r.a.createElement("option",null," 20 "),r.a.createElement("option",null," 25 "),r.a.createElement("option",null," 30 ")))),r.a.createElement("div",{class:"board-container"},r.a.createElement(B,{color:this.state.color,size:this.state.size})))}}]),t}(r.a.Component)),R="https://watzup.herokuapp.com/",U=function(e){var t=e.location,a=Object(c.useState)(""),o=Object(i.a)(a,2),s=o[0],m=o[1],E=Object(c.useState)(""),p=Object(i.a)(E,2),d=p[0],f=p[1],g=Object(c.useState)(""),A=Object(i.a)(g,2),b=A[0],j=A[1],C=Object(c.useState)(""),N=Object(i.a)(C,2),x=N[0],I=N[1],k=Object(c.useState)([]),w=Object(i.a)(k,2),z=w[0],B=w[1];Object(c.useEffect)(function(){var e=u.a.parse(t.search),a=e.name,c=e.room;n=h()(R),f(c),m(a),n.emit("join",{name:a,room:c},function(e){e&&alert(e)})},[R,t.search]),Object(c.useEffect)(function(){n.on("message",function(e){B(function(t){return[].concat(Object(l.a)(t),[e])})}),n.on("roomData",function(e){var t=e.users;j(t)})},[]);return r.a.createElement("div",{className:"rowC"},r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(O,{room:d}),r.a.createElement(y,{messages:z,name:s}),r.a.createElement(S,{message:x,setMessage:I,sendMessage:function(e){e.preventDefault(),x&&n.emit("sendMessage",x,function(){return I("")})}})),r.a.createElement(v,{users:b})),r.a.createElement(D,null))},L=a(22);a(154);function M(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(""),s=Object(i.a)(o,2),l=s[0],m=s[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Online Session"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Session ID",className:"joinInput mt-20",type:"text",onChange:function(e){return m(e.target.value)}})),r.a.createElement(L.b,{onClick:function(e){return a&&l?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(l)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Join Session"))))}var P=a(6),T=function(){return r.a.createElement(L.a,null,r.a.createElement(P.a,{path:"/board",component:D}),r.a.createElement(P.a,{path:"/",exact:!0,component:M}),r.a.createElement(P.a,{path:"/chat",component:U}))};s.a.render(r.a.createElement(T,null),document.getElementById("root"))},18:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},63:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},67:function(e,t,a){e.exports=a(157)}},[[67,1,2]]]);
//# sourceMappingURL=main.5832882c.chunk.js.map