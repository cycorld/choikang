(this.webpackJsonpsaju84=this.webpackJsonpsaju84||[]).push([[0],{162:function(e,a,t){e.exports=t.p+"static/media/yes.57cc48d7.svg"},163:function(e,a,t){e.exports=t.p+"static/media/no.d4e512f9.svg"},171:function(e,a,t){e.exports=t(372)},176:function(e,a,t){},177:function(e,a,t){},275:function(e,a,t){},355:function(e,a,t){},356:function(e,a,t){},370:function(e,a,t){},372:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(6),c=t.n(r),m=(t(176),t(33)),u=t(24),i=t(376),o=t(76),s=t.n(o),E=(t(177),t(51)),d=t.n(E);var b=function(e){e.data;var a=Object(l.useState)(""),t=Object(u.a)(a,2),r=t[0],c=t[1],o=Object(l.useState)(""),E=Object(u.a)(o,2),b=E[0],v=E[1],h=Object(m.e)();return n.a.createElement("div",{className:"container"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"title"},"step 1"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"title-name"},"\ub098\uc640 \uc0c1\ub300\ubc29\uc758",n.a.createElement("br",null),"\uc0dd\ub144\uc6d4\uc77c\uc744 \uc785\ub825 \ud558\uc138\uc694."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("div",{className:"title"},"*\ub098\uc758 \uc0dd\ub144\uc6d4\uc77c"),n.a.createElement("br",null),n.a.createElement(i.a,{defaultValue:s()("1990-09-01","YYYY-MM-DD"),format:"YYYY-MM-DD",style:{width:"100%",height:"56px"},onChange:function(e,a){c(a)}})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("div",{className:"title"},"*\uc0c1\ub300\ubc29\uc758 \uc0dd\ub144\uc6d4\uc77c"),n.a.createElement("br",null),n.a.createElement(i.a,{defaultValue:s()("1990-09-01","YYYY-MM-DD"),format:"YYYY-MM-DD",style:{width:"100%",height:"56px"},onChange:function(e,a){v(a)}})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("button",{className:"confirm",onClick:function(){r&&b?d.a.get("https://his8t8n927.execute-api.ap-northeast-2.amazonaws.com/dev/day?my=".concat(r,"&ta=").concat(b)).then((function(e){var a=e.data;h.push({pathname:"/StepTwo",state:{detail:a}})})):alert("\ub450 \ub0a0\uc9dc\ub97c \ubaa8\ub450 \uc120\ud0dd\ud574\uc8fc\uc154\uc57c \ud569\ub2c8\ub2e4.")}},"\ud655\uc778")))},v=(t(275),t(377)),h=t(160),p=t.n(h),f=t(56),g=t.n(f);var N=function(e){var a=e.location.state.detail.me,t=e.location.state.detail.ta,r=Object(l.useState)(),c=Object(u.a)(r,2),i=c[0],o=c[1],s=Object(l.useState)("-"),E=Object(u.a)(s,2),b=E[0],h=E[1],f=Object(l.useState)(function(){console.log("init called");var e=[a,t];return p.a.shuffle(e)}()),N=Object(u.a)(f,2),y=N[0],x=(N[1],Object(m.e)()),j=function(e,a){o(a.target.value),a.target.value==e?h("o"):h("x")};return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"container"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"title"},"step 2"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"title-name"},"\uc131\uaca9\uc758 \uacb0\uacfc\ub97c \uc77d\uc5b4\ubcf4\uace0",n.a.createElement("br",null),"\ub204\uad6c\uc758 \uac83\uc778\uc9c0 \ub9de\ucdb0\ubcf4\uc138\uc694!"),n.a.createElement("br",null),n.a.createElement("div",{style:{border:"red 1px dashed",padding:"10px"}},n.a.createElement(g.a,{source:y[0].explain})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,"\uc704\uc758 \ub0b4\uc6a9\uc740 [",n.a.createElement(v.a.Group,{onChange:function(e){return j(y[0].day,e)},value:i},n.a.createElement(v.a,{value:a.day},"\ub098"),n.a.createElement(v.a,{value:t.day},"\uc0c1\ub300\ubc29")),"]\uc758 \uac83\uc785\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{style:{border:"blue 1px dashed",padding:"10px"}},n.a.createElement(g.a,{source:y[1].explain})),n.a.createElement("br",null),n.a.createElement("div",null,"\uc704\uc758 \ub0b4\uc6a9\uc740 [",n.a.createElement(v.a.Group,{onChange:function(e){return j(y[1].day,e)},value:i},n.a.createElement(v.a,{value:t.day},"\ub098"),n.a.createElement(v.a,{value:a.day},"\uc0c1\ub300\ubc29")),"]\uc758 \uac83\uc785\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("button",{className:"confirm",onClick:function(){d.a.get("https://his8t8n927.execute-api.ap-northeast-2.amazonaws.com/dev/quiz?my=".concat(a.birth,"&ta=").concat(t.birth,"&answer=").concat(b)).then((function(a){var t={answer:b,detail:e.location.state.detail};x.push({pathname:"/StepThree",state:{data:t}})}))}},"\uc815\ub2f5 \uc81c\ucd9c \ud83d\udc49"))))},y=(t(355),t(22));var x=function(){return n.a.createElement("div",{className:"header-box"},n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"header-title"},n.a.createElement(y.b,{to:"/"},n.a.createElement("h1",{style:{color:"#fff",fontWeight:"bold"}},"\uc0ac\uc8fc84")),n.a.createElement("span",{className:"main-title"},"\ub108\uc640 \ub098\uc758 \uc131\ud5a5 \uc54c\uc544\ubcf4\uae30"))))},j=t(162),Y=t.n(j),O=t(163),w=t.n(O),k=(t(356),t(374)),S=t(375),C=t(164),D=t.n(C);var M=function(e){k.a.TextArea;var a=S.a.Panel,t=(Object(m.e)(),Object(l.useState)("")),r=Object(u.a)(t,2),c=r[0],i=r[1],o=e.location.state.data.detail.me.birth,s=(e.location.state.data.detail.me.day,e.location.state.data.detail.me.explain),E=e.location.state.data.detail.ta.birth,b=(e.location.state.data.detail.ta.day,e.location.state.data.detail.ta.explain),v=e.location.state.data.answer;return n.a.createElement("div",{className:"container"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"title"},"step 3"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"title-name"},"\uc131\uaca9\uc758 \uacb0\uacfc\ub97c \uc77d\uc5b4\ubcf4\uace0",n.a.createElement("br",null),"\ub204\uad6c\uc758 \uac83\uc778\uc9c0 \ub9de\ucdb0\ubcf4\uc138\uc694!"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,"o"===v?n.a.createElement("img",{src:Y.a,alt:"logo"}):n.a.createElement("img",{src:w.a,alt:"logo"})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement(S.a,null,n.a.createElement(a,{header:"\ub098",key:"1"},n.a.createElement("h4",null,o),n.a.createElement(g.a,{source:s}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(S.a,null,n.a.createElement(a,{header:"\uc0c1\ub300\ubc29",key:"2"},n.a.createElement("h4",null,E),n.a.createElement(g.a,{source:b})))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"luck"},"\uc0c1\ub300\ubc29\uc5d0\uac8c \uacf5\uc720\ud558\uace0, \uc62c\ud574\uc758 \uc6b4\uc138\ub97c \ubc1b\uc544\ubcf4\uc138\uc694."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement(D.a,{"data-clipboard-text":"https://saju84.choi-kang.com",onSuccess:function(){document.body.getElementsByClassName("email-look")[0].classList.remove("hidden"),alert("URL \uc8fc\uc18c\uac00 \ubcf5\uc0ac \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),window.scrollTo(0,document.body.scrollHeight)},className:"confirm"},"\ud83d\ude80 \uacf5\uc720\ud558\uae30 \u2192")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"email-look hidden"},n.a.createElement("div",{className:"email-title"},"\uc774\uba54\uc77c\uc8fc\uc18c\ub85c \uc62c\ud574\uc758 \uc6b4\uc138\ub97c \ubcf4\ub0b4\ub4dc\ub9bd\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("div",{className:"box"},n.a.createElement("input",{type:"email",className:"input",placeholder:"\uc774\uba54\uc77c\uc8fc\uc18c \uc785\ub825",name:"email",onChange:function(e){i(e.target.value)},value:c}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"agree"},"*\uc774\uba54\uc77c \uc785\ub825\uc2dc \ub9c8\ucf00\ud305\ub3d9\uc758\ud55c\uac83\uc73c\ub85c \uac04\uc8fc\ud569\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("button",{className:"confirm",onClick:function(){d.a.get("https://his8t8n927.execute-api.ap-northeast-2.amazonaws.com/dev/email?my=".concat(o,"&email=").concat(c)).then((function(e){console.log(e),alert(e.data.message)}))}},"\ud83d\udce9 \ud655\uc778"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null))))};t(370);var T=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(x,null),n.a.createElement(m.a,{path:"/",component:b,exact:!0}),n.a.createElement(m.a,{path:"/StepTwo",component:N}),n.a.createElement(m.a,{path:"/StepThree",component:M}))};c.a.render(n.a.createElement(y.a,null,n.a.createElement(T,null)),document.getElementById("root"))}},[[171,1,2]]]);
//# sourceMappingURL=main.7b24269d.chunk.js.map