"use strict";(self.webpackChunkreact_hw_08_phonebook=self.webpackChunkreact_hw_08_phonebook||[]).push([[577],{8577:function(n,e,r){r.r(e),r.d(e,{default:function(){return ln}});var o,i,t,c,a,s,d,l,u,x,p,m,b,f,h,g,Z,w,j=r(9439),v=r(2791),z=r(9434),k=r(5705),y=r(6727),P=r(8174),C=(r(5462),r(6916)),_=function(n){return n.filter},L=function(n){return n.contacts.isLoading},S=function(n){return n.contacts.error},I=(0,C.P1)([function(n){return n.contacts.items},_],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),q=r(4903),B=r(168),F=r(9942),K=(0,F.Z)(k.l0)(o||(o=(0,B.Z)(["\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  align-items: center;\n  padding: 20px;\n  border: 1px orange solid;\n  border-radius: 6px;\n  min-width: 350px;\n"]))),N=F.Z.label(i||(i=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 2px;\n  color: white;\n  max-width: 300px;\n"]))),A=(0,F.Z)(k.gN)(t||(t=(0,B.Z)(["\n  min-width: 280px;\n  min-height: 22px;\n  padding: 5px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  border-radius: 6px;\n  font-size: 18px;\n\n  &:hover {\n    border-color: #dcc8f7;\n    \n    transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n"]))),D=F.Z.button(c||(c=(0,B.Z)(["\n  padding: 10px 10px;\n  margin-top: 10px;\n  background-color: #007aff;\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  width: 50%;\n  border-radius: 6px;\n\n  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n  &:hover {\n    color: white;\n    background-color: #ff9f09;\n    border-color: white;\n    font-weight: bold;\n"]))),E=(0,F.Z)(k.Bc)(a||(a=(0,B.Z)(["\n  font-size: 14px;\n  color: red;\n  max-width: 300px;\n"]))),G=r(3018),J=r(184),R={name:"",number:""},T=y.Ry().shape({name:y.Z_().required("* \u0418\u043c\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),number:y.Z_().required("* \u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f").matches(/^[\d()+-]+$/,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b \u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b: ( ) - +").min(8,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}),V=function(){var n=(0,z.I0)(),e=(0,z.v9)(I),r=(0,z.v9)(L),o=(0,v.useState)(!1),i=(0,j.Z)(o,2),t=i[0],c=i[1];return(0,J.jsx)(k.J9,{initialValues:R,onSubmit:function(r,o){if(c(!0),e.some((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})))return P.Am.warn("".concat(r.name," \u0443\u0436\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445."));n((0,q.uK)(r)).then((function(){c(!1)})),o.resetForm()},validationSchema:T,children:(0,J.jsxs)(K,{children:[(0,J.jsxs)(N,{children:["\u0418\u043c\u044f",(0,J.jsx)(A,{type:"text",name:"name"})," ",(0,J.jsx)(E,{name:"name",component:"div"})," "]}),(0,J.jsxs)(N,{children:["\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",(0,J.jsx)(A,{type:"tel",name:"number"})," ",(0,J.jsx)(E,{name:"number",component:"div"})," "]}),(0,J.jsxs)(D,{type:"submit",disabled:r&&t,children:[" "," ",r&&t&&(0,J.jsx)(G.a,{})," ","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"]})]})})},$=r(6487),H=$.ZP.ul(s||(s=(0,B.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),M=$.ZP.li(d||(d=(0,B.Z)(["\n  margin-bottom: 5px;\n"]))),O=$.ZP.div(l||(l=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Q=$.ZP.p(u||(u=(0,B.Z)(["\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px;\n  margin-bottom: 0px;\n"]))),U=$.ZP.p(x||(x=(0,B.Z)(["\n  color: #007afe;\n  font-weight: bold;\n  font-size: 18px;\n"]))),W=$.ZP.button(p||(p=(0,B.Z)(["\n  padding: 5px 15px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  background-color: #4f4f50;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n\n  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n  &:hover {\n    color: white;\n    background-color: #ff4539;\n    border-color: white;\n    font-weight: bold;\n"]))),X=$.ZP.p(m||(m=(0,B.Z)(["\n  color: #383838;\n"]))),Y=function(){var n=(0,z.I0)(),e=(0,z.v9)(I),r=(0,z.v9)(L),o=(0,z.v9)(S),i=(0,v.useState)(null),t=(0,j.Z)(i,2),c=t[0],a=t[1];return(0,v.useEffect)((function(){n((0,q.yF)())}),[n]),e.length||o||r?o?(0,J.jsx)("p",{children:o}):(0,J.jsx)(H,{children:e.map((function(e){var o=e.id,i=e.name,t=e.number;return(0,J.jsxs)(M,{children:[(0,J.jsxs)(O,{children:[(0,J.jsx)(Q,{children:i}),(0,J.jsx)(U,{children:t})]}),(0,J.jsxs)(W,{type:"button",onClick:function(){a(o),n((0,q.GK)(o)).then((function(){a(null)}))},disabled:r&&c===o,children:[c===o?(0,J.jsx)(G.a,{}):"Delete"," "]})]},o)}))}):(0,J.jsx)(X,{children:"No contacts"})},nn=$.ZP.input(b||(b=(0,B.Z)(["\n  min-width: 280px;\n  min-height: 22px;\n  padding: 5px;\n  margin-bottom: 15px;\n  margin-top: 5px;\n  border-radius: 6px;\n  font-size: 18px;\n\n  &:hover {\n    border-color: #dcc8f7;\n    \n    transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n"]))),en=r(1634),rn=function(){var n=(0,z.I0)(),e=(0,z.v9)(_);return(0,J.jsx)(nn,{type:"text",value:e,onChange:function(e){return n((0,en.T)(e.target.value.trim()))}})},on=r(6907),tn=F.Z.div(f||(f=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 600px;\n  margin: 0 auto;\n"]))),cn=F.Z.div(h||(h=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  align-items: center;\n  padding: 20px;\n  border: 1px orange solid;\n  border-radius: 6px;\n  min-width: 350px;\n"]))),an=F.Z.h1(g||(g=(0,B.Z)(["\n  margin-bottom: 20px;\n  font-size: 32px;\n  text-align: center;\n  color: white;\n"]))),sn=F.Z.p(Z||(Z=(0,B.Z)(["\n  margin-bottom: 10px;\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n  color: white;\n"]))),dn=F.Z.p(w||(w=(0,B.Z)(["\n  margin-bottom: 3px;\n  font-size: 18px;\n  text-align: center;\n  color: white;\n"])));function ln(){return(0,J.jsx)(on.B6,{children:(0,J.jsxs)(tn,{children:[(0,J.jsx)(an,{children:"Phonebook"}),(0,J.jsx)(V,{}),(0,J.jsx)(sn,{children:"Contacts"}),(0,J.jsxs)(cn,{children:[(0,J.jsx)(dn,{children:"Search your contact name"}),(0,J.jsx)(rn,{}),(0,J.jsx)(Y,{})]})]})})}}}]);
//# sourceMappingURL=577.251250f1.chunk.js.map