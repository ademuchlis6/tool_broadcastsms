(this.webpackJsonpsms=this.webpackJsonpsms||[]).push([[0],{123:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(21),c=a.n(s),r=(a(123),a(30)),i=a(34),o=(a(79),a(80),a(81),a(218)),l=a(217),j=a(114),m=a(59),b=a.n(m),d=(a(58),a.p,a(216)),u=a(214),h=a(215),p=a(219),O=a(7),x={labelCol:{xs:{span:10},sm:{span:10},md:{span:10},lg:{span:6}},wrapperCol:{xs:{span:100},sm:{span:100},md:{span:100},lg:{span:18}}},g=function(e){var t=l.a.useForm(),a=(Object(i.a)(t,1)[0],Object(n.useState)(62)),s=Object(i.a)(a,2);s[0],s[1];return Object(O.jsx)(l.a.List,{name:"kirim",children:function(e,t){var a=t.add,n=t.remove;return Object(O.jsxs)("div",{children:[e.map((function(t,a){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{style:{paddingTop:5},children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(h.a,{sm:3,children:Object(O.jsx)(l.a.Item,Object(r.a)(Object(r.a)({},x),{},{name:[a,"nomor"],label:"Nomor Hp",rules:[{required:!0,message:"Nomor Hp Diperlukan"}],children:Object(O.jsx)(o.a,{placeholder:"Masukkan Nomor Hp",maxLength:16})}))}),Object(O.jsx)(h.a,{sm:9,children:Object(O.jsx)(l.a.Item,Object(r.a)(Object(r.a)({},x),{},{name:[a,"pesan"],label:"Pesan",rules:[{required:!0,message:"Pesan Diperlukan, max 150 character"}],children:Object(O.jsx)(o.a.TextArea,{style:{width:500},maxLength:150})}))})]})}),e.length>1?Object(O.jsx)(p.a,{variant:"danger",className:"dynamic-delete-button",onClick:function(){return n(t.name)},children:"Hapus pesan diatas"}):null]},t.key)})),Object(O.jsx)(d.a,{}),Object(O.jsx)(l.a.Item,{children:e.length<10?Object(O.jsx)(p.a,{type:"dashed",onClick:function(){return a()},style:{width:"60%"},children:"Tambah Pesan"}):j.b.error({content:"maksimal 10 Pesan",className:"custom-class",style:{marginTop:"20vh"}})})]})}})},f=(a(211),function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("div",{className:"ade"})})})}),v=(o.a.TextArea,l.a.Item,function(){var e=l.a.useForm(),t=Object(i.a)(e,1)[0],a=Object(n.useState)(1),s=Object(i.a)(a,2),c=(s[0],s[1],Object(n.useState)()),o=Object(i.a)(c,2),m=(o[0],o[1],Object(n.useState)()),d=Object(i.a)(m,2),x=(d[0],d[1],Object(n.useState)(!1)),v=Object(i.a)(x,2),y=v[0],k=v[1];return Object(O.jsxs)("div",{style:{paddingLeft:20,paddingTop:20},children:[y?Object(O.jsx)(f,{}):null,Object(O.jsx)(u.a,{children:Object(O.jsxs)(h.a,{children:["Nomor Hp wajib pake 62",Object(O.jsx)("br",{}),"contoh 6282299222900"]})}),Object(O.jsxs)(l.a,Object(r.a)(Object(r.a)({},{labelCol:{span:8},wrapperCol:{span:16}}),{},{form:t,layout:"horizontal",onFinish:function(e){fetch("./key.json").then((function(e){return e.json()})).then((function(a){if(console.log("ade",e),"undefined"!==typeof e.kirim){k(!0);var n={secret:a.secret,data:e};console.log("ade",n),b.a.post("http://192.168.1.245/smsreceiver/kirim.php",n,{headers:{"Content-Type":"application/json"}}).then((function(e){k(!1),t.resetFields(),j.b.success({content:e.data.message,className:"custom-class",style:{marginTop:"20vh"}})})).catch((function(e){k(!1),j.b.error({content:"ada error di server sms",className:"custom-class",style:{marginTop:"20vh"}})}))}else j.b.error({content:"Tambahakan pesan",className:"custom-class",style:{marginTop:"20vh"}})})).catch((function(e){j.b.error({content:"Tool sms butuh Key",className:"custom-class",style:{marginTop:"20vh"}})}))},initialValues:{nomor:62},children:[Object(O.jsx)(g,{}),Object(O.jsx)(l.a.Item,{children:Object(O.jsx)(p.a,{variant:"success",type:"submit",children:"kirim"})})]}))]})}),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,220)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};c.a.render(Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),y()},79:function(e,t,a){}},[[212,1,2]]]);
//# sourceMappingURL=main.a1ac3b9b.chunk.js.map