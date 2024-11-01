"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[577],{8577:function(n,e,o){o.r(e),o.d(e,{default:function(){return mn}});var r,t,i,c,a,s,l,d,u,p,x,m,b,h,f,g,Z,w,j=o(1413),v=o(9439),z=o(2791),y=o(9434),k=o(5705),P=o(6727),C=o(8174),S=(o(5462),o(6916)),L=function(n){return n.filter},q=function(n){return n.contacts.tempItems},I=function(n){return n.contacts.isLoading},N=function(n){return n.contacts.error},A=(0,S.P1)([function(n){return n.contacts.items},L],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),B=o(4903),D=o(1538),F=o(2234),K=o(168),Q=o(9942),T=(0,Q.Z)(k.l0)(r||(r=(0,K.Z)(["\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  align-items: center;\n  padding: 20px;\n  border: 1px orange solid;\n  border-radius: 6px;\n  min-width: 350px;\n"]))),_=Q.Z.label(t||(t=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 2px;\n  color: white;\n  max-width: 300px;\n"]))),E=(0,Q.Z)(k.gN)(i||(i=(0,K.Z)(["\n  min-width: 280px;\n  min-height: 22px;\n  padding: 5px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  border-radius: 6px;\n  font-size: 18px;\n\n  &:hover {\n    border-color: #dcc8f7;\n    \n    transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n"]))),G=Q.Z.button(c||(c=(0,K.Z)(["\n  padding: 10px 10px;\n  margin-top: 10px;\n  background-color: #007aff;\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  width: 50%;\n  border-radius: 6px;\n\n  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n  &:hover {\n    color: white;\n    background-color: #ff9f09;\n    border-color: white;\n    font-weight: bold;\n"]))),J=(0,Q.Z)(k.Bc)(a||(a=(0,K.Z)(["\n  font-size: 14px;\n  color: red;\n  max-width: 300px;\n"]))),M=o(3018),R=o(184),V={name:"",number:""},$=P.Ry().shape({name:P.Z_().required("* Name is required"),number:P.Z_().required("* Phone number is required").matches(/^[\d()+-]+$/,"Phone number can only contain digits and the following symbols: ( ) - +").min(8,"Phone number must be at least 8 characters long")}),H=function(){var n=(0,y.I0)(),e=(0,y.v9)(A),o=(0,y.v9)(I),r=(0,y.v9)(F.Qb),t=(0,z.useState)(!1),i=(0,v.Z)(t,2),c=i[0],a=i[1];return(0,R.jsx)(k.J9,{initialValues:V,onSubmit:function(o,t){if(a(!0),e.some((function(n){return n.name.toLowerCase()===o.name.toLowerCase()})))return a(!1),C.Am.warn("".concat(o.name," \u0443\u0436\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445."));r?n((0,B.uK)(o)).then((function(){a(!1)})):(n((0,D.Ms)((0,j.Z)((0,j.Z)({},o),{},{id:Date.now().toString()}))),a(!1)),t.resetForm()},validationSchema:$,children:(0,R.jsxs)(T,{children:[(0,R.jsxs)(_,{children:["Name",(0,R.jsx)(E,{type:"text",name:"name"}),(0,R.jsx)(J,{name:"name",component:"div"})]}),(0,R.jsxs)(_,{children:["Phone number",(0,R.jsx)(E,{type:"tel",name:"number"}),(0,R.jsx)(J,{name:"number",component:"div"})]}),(0,R.jsxs)(G,{type:"submit",disabled:o&&c,children:[o&&c&&(0,R.jsx)(M.a,{}),"Add contact"]})]})})},O=o(6487),U=O.ZP.ul(s||(s=(0,K.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),W=O.ZP.li(l||(l=(0,K.Z)(["\n  margin-bottom: 5px;\n"]))),X=O.ZP.div(d||(d=(0,K.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Y=O.ZP.p(u||(u=(0,K.Z)(["\n  font-size: 18px;\n  font-weight: bold;\n  margin-right: 10px;\n  margin-bottom: 0px;\n"]))),nn=O.ZP.p(p||(p=(0,K.Z)(["\n  color: #007afe;\n  font-weight: bold;\n  font-size: 18px;\n"]))),en=O.ZP.button(x||(x=(0,K.Z)(["\n  padding: 5px 15px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  background-color: #4f4f50;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n\n  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n  &:hover {\n    color: white;\n    background-color: #ff4539;\n    border-color: white;\n    font-weight: bold;\n"]))),on=O.ZP.p(m||(m=(0,K.Z)(["\n  color: #383838;\n"]))),rn=function(){var n=(0,y.I0)(),e=(0,y.v9)(F.Qb),o=(0,y.v9)(A),r=(0,y.v9)(q),t=(0,y.v9)(I),i=(0,y.v9)(N),c=(0,z.useState)(null),a=(0,v.Z)(c,2),s=a[0],l=a[1];(0,z.useEffect)((function(){e&&n((0,B.yF)())}),[n,e]);var d=e?o:r;return d.length||i||t?i?(0,R.jsx)("p",{children:i}):(0,R.jsx)(U,{children:d.map((function(o){var r=o.id,i=o.name,c=o.number;return(0,R.jsxs)(W,{children:[(0,R.jsxs)(X,{children:[(0,R.jsx)(Y,{children:i}),(0,R.jsx)(nn,{children:c})]}),(0,R.jsx)(en,{type:"button",onClick:function(){l(r),e?n((0,B.GK)(r)).then((function(){return l(null)})):(n({type:"contacts/deleteTempContact",payload:r}),l(null))},disabled:t&&s===r,children:s===r?(0,R.jsx)(M.a,{}):"Delete"})]},r)}))}):(0,R.jsx)(on,{children:"No contacts"})},tn=O.ZP.input(b||(b=(0,K.Z)(["\n  min-width: 280px;\n  min-height: 22px;\n  padding: 5px;\n  margin-bottom: 15px;\n  margin-top: 5px;\n  border-radius: 6px;\n  font-size: 18px;\n\n  &:hover {\n    border-color: #dcc8f7;\n    \n    transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n"]))),cn=o(1634),an=function(){var n=(0,y.I0)(),e=(0,y.v9)(L);return(0,R.jsx)(tn,{type:"text",value:e,onChange:function(e){return n((0,cn.T)(e.target.value.trim()))}})},sn=o(6907),ln=Q.Z.div(h||(h=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 600px;\n  margin: 0 auto;\n"]))),dn=Q.Z.div(f||(f=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  align-items: center;\n  padding: 20px;\n  border: 1px orange solid;\n  border-radius: 6px;\n  min-width: 350px;\n"]))),un=Q.Z.h1(g||(g=(0,K.Z)(["\n  margin-bottom: 20px;\n  font-size: 32px;\n  text-align: center;\n  color: white;\n"]))),pn=Q.Z.p(Z||(Z=(0,K.Z)(["\n  margin-bottom: 10px;\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n  color: white;\n"]))),xn=Q.Z.p(w||(w=(0,K.Z)(["\n  margin-bottom: 3px;\n  font-size: 18px;\n  text-align: center;\n  color: white;\n"])));function mn(){return(0,R.jsx)(sn.B6,{children:(0,R.jsxs)(ln,{children:[(0,R.jsx)(un,{children:"Phonebook"}),(0,R.jsx)(H,{}),(0,R.jsx)(pn,{children:"Contacts"}),(0,R.jsxs)(dn,{children:[(0,R.jsx)(xn,{children:"Search your contact name"}),(0,R.jsx)(an,{}),(0,R.jsx)(rn,{})]})]})})}}}]);
//# sourceMappingURL=577.9c2995a7.chunk.js.map