(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1074:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(55),c=t.n(l),m=(t(633),t(1102)),o=t(1101),i=t(1105),u=t(1082),s=t(1108),E=t(1084),p=t(882),d=t(1103),g=t(84),v=t(1085),h=t(1104),f=t(1086),b=t(1110),k=t(1087),y=t(1088),x=t(1106),w=t(1089),B=t(1090),S=t(1091),O=t(1113),j=t(1092),P=t(1111),C=t(1093),T=t(180),K=t(181),D=t(200),A=t(182),I=t(203),J=t(24),F=t(73),N=t(1081),M=t(68),R=function(e){function a(){var e,t;Object(T.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(D.a)(this,(e=Object(A.a)(a)).call.apply(e,[this].concat(r)))).state={isOpen:!1},t.handleClick=function(){t.setState({isOpen:!0})},t.handleDialogClose=function(){t.setState({isOpen:!1})},t.handleConfirm=function(){var e=t.props,a=e.basePath;(0,e.crudUpdateMany)(e.resource,e.selectedIds,{views:0},a),t.setState({isOpen:!0})},t}return Object(I.a)(a,e),Object(K.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(F.a,{label:"Reset Checklist",onClick:this.handleClick}),r.a.createElement(N.a,{isOpen:this.state.isOpen,title:"Hilangkan Checklist",content:"Apakah anda yakin hilangkan checklist yang terpilih?",onConfirm:this.handleConfirm,onClose:this.handleDialogClose}))}}]),a}(n.Component),q=Object(J.b)(void 0,{crudUpdateMany:M.A})(R),H=t(411),G=function(e){return r.a.createElement(i.a,e,r.a.createElement(u.a,{label:"Cari Permintaan",source:"q",alwaysOn:!0}),r.a.createElement(s.a,{source:"customerId",reference:"customers",allowEmpty:!0},r.a.createElement(E.a,{optionText:"name"})))},_=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(q,Object.assign({label:"Reset Checklist"},e)),r.a.createElement(p.a,e))},V=function(e){return r.a.createElement(d.a,Object.assign({},e,{filters:r.a.createElement(G,null),bulkActionButtons:r.a.createElement(_,null),title:"Permintaan"}),r.a.createElement(g.a,{small:r.a.createElement(v.a,{primaryText:function(e){return e.id},secondaryText:function(e){return e.type},tertiaryText:function(e){return e.quantity}}),medium:r.a.createElement(h.a,null,r.a.createElement(f.a,{source:"id"}),r.a.createElement(b.a,{label:"Bank Sampah",source:"customerId",reference:"customers"},r.a.createElement(f.a,{source:"name"})),r.a.createElement(b.a,{label:"Tipe",source:"pricingId",reference:"pricings"},r.a.createElement(f.a,{source:"name"})),r.a.createElement(f.a,{label:"Jumlah",source:"quantity"}),r.a.createElement(b.a,{label:"Harga Satuan",source:"pricingId",reference:"pricings"},r.a.createElement(f.a,{source:"price"})),r.a.createElement(k.a,{label:"Keterangan",source:"comment"}),r.a.createElement(y.a,null))}))},$=function(e){var a=e.record;return r.a.createElement("span",null,"Post ",a?'"'.concat(a.id,'"'):"")},U=function(e){return r.a.createElement(x.a,Object.assign({title:r.a.createElement($,null)},e),r.a.createElement(w.a,null,r.a.createElement(B.a,{label:"pengguna"},r.a.createElement(S.a,{source:"id"}),r.a.createElement(s.a,{label:"bank sampah",source:"customerId",reference:"customers"},r.a.createElement(E.a,{optionText:"name"}))),r.a.createElement(B.a,{label:"barang"},r.a.createElement(s.a,{label:"tipe",source:"pricingId",reference:"pricings"},r.a.createElement(E.a,{optionText:"name"})),r.a.createElement(u.a,{label:"jumlah",source:"quantity"})),r.a.createElement(B.a,{label:"keterangan"},r.a.createElement(H.a,{label:"keterangan",source:"comment"}))))},z=function(e){return r.a.createElement(O.a,e,r.a.createElement(j.a,null,r.a.createElement(s.a,{label:"bank sampah",source:"customerId",reference:"customers"},r.a.createElement(E.a,{optionText:"name"})),r.a.createElement(s.a,{label:"tipe",source:"pricingId",reference:"pricings"},r.a.createElement(E.a,{optionText:"name"})),r.a.createElement(u.a,{label:"jumlah",source:"quantity"}),r.a.createElement(H.a,{label:"keterangan",source:"comment"})))},L=function(e){return r.a.createElement(P.a,e,r.a.createElement(C.a,null,r.a.createElement(f.a,{source:"id"}),r.a.createElement(b.a,{label:"Bank sampah",source:"customerId",reference:"customers"},r.a.createElement(f.a,{source:"name"})),r.a.createElement(b.a,{label:"Tipe",source:"pricingId",reference:"pricings"},r.a.createElement(f.a,{source:"name"})),r.a.createElement(f.a,{source:"quantity"}),r.a.createElement(b.a,{label:"Harga Satuan",source:"pricingId",reference:"pricings"},r.a.createElement(f.a,{source:"price"})),r.a.createElement(f.a,{source:"date"}),r.a.createElement(k.a,{source:"comment"})))},W=function(e){return r.a.createElement(i.a,e,r.a.createElement(u.a,{label:"Cari Pelanggan",source:"q",alwaysOn:!0}))},Z=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(q,Object.assign({label:"Reset Views"},e)),r.a.createElement(p.a,e))},Q=function(e){return r.a.createElement(d.a,Object.assign({},e,{filters:r.a.createElement(W,null),bulkActionButtons:r.a.createElement(Z,null),title:"Bank Sampah"}),r.a.createElement(g.a,{small:r.a.createElement(v.a,{primaryText:function(e){return e.id},secondaryText:function(e){return e.name}}),medium:r.a.createElement(h.a,null,r.a.createElement(f.a,{source:"id"}),r.a.createElement(f.a,{source:"name"}),r.a.createElement(f.a,{source:"email"}),r.a.createElement(y.a,null))}))},X=function(e){return r.a.createElement(O.a,e,r.a.createElement(j.a,null,r.a.createElement(u.a,{source:"name"}),r.a.createElement(u.a,{source:"email"})))},Y=function(e){var a=e.record;return r.a.createElement("span",null,"Customer ",a?'"'.concat(a.id,'"'):"")},ee=function(e){return r.a.createElement(x.a,Object.assign({title:r.a.createElement(Y,null)},e),r.a.createElement(j.a,null,r.a.createElement(S.a,{source:"id"}),r.a.createElement(u.a,{source:"name"}),r.a.createElement(u.a,{source:"email"})))},ae=t(1094),te=(t(1095),function(e){return r.a.createElement(i.a,e,r.a.createElement(u.a,{label:"Search",source:"q",alwaysOn:!0}),r.a.createElement(s.a,{label:"User",source:"userId",reference:"users",allowEmpty:!0},r.a.createElement(E.a,{optionText:"name"})))}),ne=function(e){return r.a.createElement(d.a,Object.assign({},e,{filters:r.a.createElement(te,null),title:"Transaksi"}),r.a.createElement(g.a,{small:r.a.createElement(v.a,{primaryText:function(e){return e.title},secondaryText:function(e){return"".concat(e.views," views")},tertiaryText:function(e){return new Date(e.published_at).toLocaleDateString()}}),medium:r.a.createElement(h.a,null,r.a.createElement(f.a,{source:"id"}),r.a.createElement(f.a,{source:"name"}),r.a.createElement(f.a,{source:"username"}),r.a.createElement(ae.a,{source:"email"}))}))},re=function(e){return r.a.createElement(i.a,e,r.a.createElement(u.a,{label:"Cari History",source:"q",alwaysOn:!0}))},le=function(e){return r.a.createElement(d.a,Object.assign({},e,{filters:r.a.createElement(re,null),title:"Histori Transaksi"}),r.a.createElement(g.a,{small:r.a.createElement(v.a,{primaryText:function(e){return e.id},secondaryText:function(e){return e.name},tertiaryText:function(e){return e.status}}),medium:r.a.createElement(h.a,null,r.a.createElement(f.a,{source:"id"}),r.a.createElement(f.a,{source:"name"}),r.a.createElement(f.a,{source:"status"}))}))},ce=function(e){return r.a.createElement(d.a,Object.assign({},e,{title:"Akun Saya"}),r.a.createElement(h.a,null,r.a.createElement(f.a,{source:"id"}),r.a.createElement(f.a,{source:"title"}),r.a.createElement(f.a,{source:"body"})))},me=function(e){return r.a.createElement(i.a,e,r.a.createElement(u.a,{label:"Cari Sampah",source:"q",alwaysOn:!0}))},oe=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(q,Object.assign({label:"Reset Views"},e)),r.a.createElement(p.a,e))},ie=function(e){return r.a.createElement(d.a,Object.assign({},e,{filters:r.a.createElement(me,null),bulkActionButtons:r.a.createElement(oe,null),title:"Harga Sampah"}),r.a.createElement(g.a,{small:r.a.createElement(v.a,{primaryText:function(e){return e.id},secondaryText:function(e){return e.name},tertiaryText:function(e){return e.price}}),medium:r.a.createElement(h.a,null,r.a.createElement(f.a,{source:"id"}),r.a.createElement(f.a,{source:"name"}),r.a.createElement(f.a,{source:"price"}),r.a.createElement(y.a,null))}))},ue=function(e){return r.a.createElement(O.a,e,r.a.createElement(j.a,null,r.a.createElement(u.a,{source:"name"}),r.a.createElement(u.a,{source:"price"})))},se=function(e){var a=e.record;return r.a.createElement("span",null,"Customer ",a?'"'.concat(a.id,'"'):"")},Ee=function(e){return r.a.createElement(x.a,Object.assign({title:r.a.createElement(se,null)},e),r.a.createElement(j.a,null,r.a.createElement(S.a,{source:"id"}),r.a.createElement(u.a,{source:"name"}),r.a.createElement(u.a,{source:"price"})))},pe=t(92),de=t.n(pe),ge=t(575),ve=t.n(ge),he=t(263),fe=t(10),be=t(57),ke=t.n(be),ye=t(81),xe=t.n(ye),we=t(568),Be=t.n(we),Se=t(569),Oe=t.n(Se),je=t(233),Pe=t.n(je),Ce=t(399),Te=t.n(Ce),Ke=t(400),De=t.n(Ke),Ae=t(572),Ie=t.n(Ae),Je=t(393),Fe=t.n(Je),Ne=t(283),Me=t.n(Ne),Re=[{name:"Mon",Jakarta:44e3,Bekasi:28e3,Bogor:25e3},{name:"Tue",Jakarta:12800,Bekasi:23980,Bogor:21e3},{name:"Wed",Jakarta:55e3,Bekasi:43e3,Bogor:38e3},{name:"Thu",Jakarta:43800,Bekasi:29080,Bogor:15e3},{name:"Fri",Jakarta:58900,Bekasi:28e3,Bogor:11e3},{name:"Sat",Jakarta:53900,Bekasi:38e3,Bogor:28e3},{name:"Sun",Jakarta:48900,Bekasi:41e3,Bogor:38e3}];var qe=function(){return r.a.createElement(Be.a,{width:"99%",height:200},r.a.createElement(Oe.a,{data:Re},r.a.createElement(Te.a,{dataKey:"name"}),r.a.createElement(De.a,null),r.a.createElement(Ie.a,{vertical:!1,strokeDasharray:"3 3"}),r.a.createElement(Fe.a,null),r.a.createElement(Me.a,null),r.a.createElement(Pe.a,{type:"monotone",dataKey:"Jakarta",stroke:"#82ca9d"}),r.a.createElement(Pe.a,{type:"monotone",dataKey:"Bekasi",stroke:"#8884d8"}),r.a.createElement(Pe.a,{type:"monotone",dataKey:"Bogor",stroke:"#eb8473  "})))},He=t(1096),Ge=t(1097),_e=t(269),Ve=t(270),$e=t(1075),Ue=t(529),ze=t(1098),Le=t(508),We=[{name:"1",Jakarta:24,Bekasi:12,Bogor:15},{name:"2",Jakarta:78,Bekasi:56,Bogor:61},{name:"3",Jakarta:120,Bekasi:97,Bogor:112},{name:"4",Jakarta:180,Bekasi:147,Bogor:156}];var Ze=function(){return r.a.createElement(He.a,{width:"99%",height:200},r.a.createElement(Ge.a,{data:We},r.a.createElement(_e.a,{dataKey:"name",stroke:"#8884d8"}),r.a.createElement(Ve.a,null),r.a.createElement($e.a,{wrapperStyle:{width:100,backgroundColor:"#ccc"}}),r.a.createElement(Ue.a,null),r.a.createElement(ze.a,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(Le.a,{type:"monotone",dataKey:"Jakarta",fill:"#82ca9d",barSize:20}),r.a.createElement(Le.a,{type:"monotone",dataKey:"Bekasi",fill:"#8884d8",barSize:20}),r.a.createElement(Le.a,{type:"monotone",dataKey:"Bogor",fill:"#eb8473  ",barSize:20})))},Qe=t(1112),Xe=t(510),Ye=t(509),ea=[{name:"Januari",organik:590,non_organik:800,kimia:1400},{name:"Februari",organik:868,non_organik:967,kimia:1506},{name:"Maret",organik:1397,non_organik:1098,kimia:989},{name:"April",organik:1480,non_organik:1200,kimia:1228},{name:"Mei",organik:1520,non_organik:1108,kimia:1100},{name:"Juni",organik:1400,non_organik:680,kimia:1700}];var aa=function(){return r.a.createElement(He.a,{width:"99%",height:200,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(Qe.a,{data:ea},r.a.createElement(_e.a,{dataKey:"name"}),r.a.createElement(Ve.a,null),r.a.createElement($e.a,null),r.a.createElement(Ue.a,null),r.a.createElement(ze.a,{stroke:"#f5f5f5"}),r.a.createElement(Xe.a,{type:"monotone",dataKey:"organik",fill:"#8884d8",stroke:"#8884d8"}),r.a.createElement(Le.a,{dataKey:"non_organik",barSize:20,fill:"#413ea0"}),r.a.createElement(Ye.a,{type:"monotone",dataKey:"kimia",stroke:"#ff7300"})))},ta=t(1099),na=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];var ra=function(){return r.a.createElement(He.a,{width:"99%",height:200},r.a.createElement(ta.a,{data:na,margin:{top:5,right:20,left:20,bottom:5}},r.a.createElement(ze.a,{strokeDasharray:"3 3"}),r.a.createElement(_e.a,{dataKey:"name"}),r.a.createElement(Ve.a,null),r.a.createElement($e.a,null),r.a.createElement(Ue.a,null),r.a.createElement(Ye.a,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},strokeDasharray:"5 5"}),r.a.createElement(Ye.a,{type:"monotone",dataKey:"uv",stroke:"#82ca9d",strokeDasharray:"3 4 5 2"})))},la=t(989),ca=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:-3e3,pv:1398,amt:2210},{name:"Page C",uv:-2e3,pv:-9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:-1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:-3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}];var ma=function(){return r.a.createElement(He.a,{width:"99%",height:200},r.a.createElement(Ge.a,{data:ca,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(ze.a,{strokeDasharray:"3 3"}),r.a.createElement(_e.a,{dataKey:"name"}),r.a.createElement(Ve.a,null),r.a.createElement($e.a,null),r.a.createElement(Ue.a,null),r.a.createElement(la.a,{y:0,stroke:"#000"}),r.a.createElement(Le.a,{dataKey:"pv",fill:"#8884d8"}),r.a.createElement(Le.a,{dataKey:"uv",fill:"#82ca9d"})))},oa=t(410),ia=t(1100),ua=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:-1e3,pv:9800,amt:2290},{name:"Page D",uv:500,pv:3908,amt:2e3},{name:"Page E",uv:-2e3,pv:4800,amt:2181},{name:"Page F",uv:-250,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],sa=function(){var e=Math.max.apply(Math,Object(oa.a)(ua.map(function(e){return e.uv}))),a=Math.min.apply(Math,Object(oa.a)(ua.map(function(e){return e.uv})));return e<=0?0:a>=0?1:e/(e-a)}();var Ea=function(){return r.a.createElement(He.a,{width:"99%",height:250},r.a.createElement(ia.a,{data:ua,margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(ze.a,{strokeDasharray:"3 3"}),r.a.createElement(_e.a,{dataKey:"name"}),r.a.createElement(Ve.a,null),r.a.createElement($e.a,null),r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"splitColor",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:sa,stopColor:"green",stopOpacity:1}),r.a.createElement("stop",{offset:sa,stopColor:"red",stopOpacity:1}))),r.a.createElement(Xe.a,{type:"monotone",dataKey:"uv",stroke:"#000",fill:"url(#splitColor)"})))},pa=t(1107),da=t(990),ga=t(284),va=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],ha=["#0088FE","#00C49F","#FFBB28","#FF8042"],fa=Math.PI/180,ba=function(e){var a=e.cx,t=e.cy,n=e.midAngle,l=e.innerRadius,c=e.outerRadius,m=e.percent,o=(e.index,l+.5*(c-l)),i=a+o*Math.cos(-n*fa),u=t+o*Math.sin(-n*fa);return r.a.createElement("text",{x:i,y:u,fill:"white",textAnchor:i>a?"start":"end",dominantBaseline:"central"},"".concat((100*m).toFixed(0),"%"))};var ka=function(){return r.a.createElement(He.a,{width:"99%",height:250},r.a.createElement(pa.a,null,r.a.createElement(da.a,{data:va,cx:150,cy:100,labelLine:!1,label:ba,outerRadius:80,fill:"#8884d8"},va.map(function(e,a){return r.a.createElement(ga.a,{fill:ha[a%ha.length]})}))))},ya=t(227),xa=t.n(ya),wa=t(310),Ba=t.n(wa),Sa=t(311),Oa=t.n(Sa);Ba()(xa.a);var ja={chart:{caption:"Salary Hikes by Country",subcaption:"2016 - 2017",showhovereffect:"1",numbersuffix:"%",rotatelabels:"1",theme:"fusion"},categories:[{category:[{label:"Australia"},{label:"New-Zealand"},{label:"India"},{label:"China"},{label:"Myanmar"},{label:"Bangladesh"},{label:"Thailand"},{label:"South Korea"},{label:"Hong Kong"},{label:"Singapore"},{label:"Taiwan"},{label:"Vietnam"}]}],dataset:[{seriesname:"2016 Actual Salary Increase",plottooltext:"Salaries increased by <b>$dataValue</b> in 2016",data:[{value:"3"},{value:"3"},{value:"10"},{value:"7"},{value:"7.4"},{value:"10"},{value:"5.4"},{value:"4.5"},{value:"4.1"},{value:"4"},{value:"3.7"},{value:"9.3"}]},{seriesname:"2017 Projected Salary Increase",plottooltext:"Salaries expected to increase by <b>$dataValue</b> in 2017",renderas:"line",data:[{value:"3"},{value:"2.8"},{value:"10"},{value:"6.9"},{value:"6.7"},{value:"9.4"},{value:"5.5"},{value:"5"},{value:"4"},{value:"4"},{value:"4.5"},{value:"9.8"}]},{seriesname:"Inflation rate",plottooltext:"$dataValue projected inflation",renderas:"area",showanchors:"0",data:[{value:"1.6"},{value:"0.6"},{value:"5.6"},{value:"2.3"},{value:"7"},{value:"5.6"},{value:"0.2"},{value:"1"},{value:"2.6"},{value:"0"},{value:"1.1"},{value:"2.4"}]}]},Pa=function(e){function a(){return Object(T.a)(this,a),Object(D.a)(this,Object(A.a)(a).apply(this,arguments))}return Object(I.a)(a,e),Object(K.a)(a,[{key:"render",value:function(){return r.a.createElement(He.a,{width:"99%",height:250},r.a.createElement(Oa.a,{type:"mscombi3d",dataFormat:"JSON",dataSource:ja}))}}]),a}(r.a.Component);Ba()(xa.a);var Ca={chart:{showpercentvalues:"1",aligncaptionwithcanvas:"0",captionpadding:"0",decimals:"1",plottooltext:"<b>$percentValue</b> of our Android users are on <b>$label</b>",centerlabel:"# Users: $value"},data:[{label:"Ice Cream Sandwich",value:"1000"},{label:"Jelly Bean",value:"5300"},{label:"Kitkat",value:"10500"},{label:"Lollipop",value:"18900"},{label:"Marshmallow",value:"17904"}]},Ta=function(e){function a(){return Object(T.a)(this,a),Object(D.a)(this,Object(A.a)(a).apply(this,arguments))}return Object(I.a)(a,e),Object(K.a)(a,[{key:"render",value:function(){return r.a.createElement(He.a,{width:"99%",height:200},r.a.createElement(Oa.a,{type:"doughnut2d",dataFormat:"JSON",dataSource:Ca}))}}]),a}(r.a.Component);var Ka=Object(fe.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(function(e){var a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(xe.a,{container:!0,spacing:24},r.a.createElement(xe.a,{item:!0,xs:12},r.a.createElement(de.a,null,r.a.createElement(he.a,{title:"Dashboard"}),r.a.createElement(ve.a,{style:{textAlign:"center"},title:"Selamat Datang Di Tampah Buyer"}))),r.a.createElement(xe.a,{item:!0,xs:12,md:6},r.a.createElement(ke.a,{className:a.paper},"Data Keseluruhan Sampah (/kg) ",r.a.createElement(qe,null))),r.a.createElement(xe.a,{item:!0,xs:12,md:6},r.a.createElement(ke.a,{className:a.paper},"Data Bank Sampah Keseluruhan (per-kuartal) ",r.a.createElement(Ze,null))),r.a.createElement(xe.a,{item:!0,xs:12,md:6},r.a.createElement(ke.a,{className:a.paper},"Data Sampah Keseluruhan (per-bulan, /ton) ",r.a.createElement(aa,null))),r.a.createElement(xe.a,{item:!0,xs:12,md:6},r.a.createElement(ke.a,{className:a.paper},"Data Sampah Keseluruhan (per-bulan, /ton) ",r.a.createElement(Ta,null))),r.a.createElement(xe.a,{item:!0,xs:12,md:6},r.a.createElement(ke.a,{className:a.paper},"Data Fluktuasi Bank Sampah ",r.a.createElement(ra,null))),r.a.createElement(xe.a,{item:!0,xs:12,md:6},r.a.createElement(ke.a,{className:a.paper},"Data Fluktuasi Sampah Nasabah ",r.a.createElement(ma,null))),r.a.createElement(xe.a,{item:!0,xs:12,md:6},r.a.createElement(ke.a,{className:a.paper},"Data Akumulasi Sampah Regional A",r.a.createElement(Ea,null))),r.a.createElement(xe.a,{item:!0,xs:12,md:6},r.a.createElement(ke.a,{className:a.paper},"Data Akumulasi Sampah Regional B",r.a.createElement(Pa,null))),r.a.createElement(xe.a,{item:!0,xs:12,md:4},r.a.createElement(ke.a,{className:a.paper},"Rating Sampah Regional A",r.a.createElement(ka,null))),r.a.createElement(xe.a,{item:!0,xs:12,md:4},r.a.createElement(ke.a,{className:a.paper},"Rating Sampah Regional B",r.a.createElement(ka,null))),r.a.createElement(xe.a,{item:!0,xs:12,md:4},r.a.createElement(ke.a,{className:a.paper},"Rating Sampah Regional C",r.a.createElement(ka,null)))))}),Da=t(511),Aa=function(e,a){if(e===Da.d){var t=a.username;return localStorage.setItem("username",t),Promise.resolve()}if(e===Da.e)return localStorage.removeItem("username"),Promise.resolve();if(e===Da.b){var n=a.status;return 401===n||403===n?(localStorage.removeItem("username"),Promise.reject()):Promise.resolve()}return e===Da.a?localStorage.getItem("username")?Promise.resolve():Promise.reject():Promise.reject("Unknown method")},Ia=t(577),Ja=t(578),Fa=t.n(Ja),Na=t(599),Ma=t.n(Na),Ra=t(600),qa=t.n(Ra),Ha=t(601),Ga=t.n(Ha),_a=t(602),Va=t.n(_a),$a=t(604),Ua=t.n($a),za=t(603),La=t.n(za),Wa=t(576),Za={idn:t.n(Wa).a},Qa=function(e){return Za[e]},Xa=Object(Ia.a)("https://my-json-server.typicode.com/muhidin94/jsonserver"),Ya=Object(fe.createMuiTheme)({palette:{primary:Fa.a,secondary:{main:"#0087ff"}}}),et=function(){return r.a.createElement(m.a,{theme:Ya,dashboard:Ka,authProvider:Aa,dataProvider:Xa,locale:"idn",i18nProvider:Qa},r.a.createElement(o.a,{name:"ondemands",list:V,edit:U,create:z,icon:Ma.a,filter:G,show:L,options:{label:"Permintaan"}}),r.a.createElement(o.a,{name:"customers",list:Q,icon:qa.a,create:X,edit:ee,filter:W,options:{label:"Bank Sampah"}}),r.a.createElement(o.a,{name:"transactions",list:ne,icon:Ga.a,options:{label:"Transaksi"}}),r.a.createElement(o.a,{name:"histories",list:le,icon:Va.a,filter:re,options:{label:"Histori"}}),r.a.createElement(o.a,{name:"pricings",list:ie,filter:me,create:ue,icon:La.a,edit:Ee,options:{label:"Harga"}}),r.a.createElement(o.a,{name:"account",list:ce,icon:Ua.a,options:{label:"Akun"}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},628:function(e,a,t){e.exports=t(1074)},633:function(e,a,t){},887:function(e,a){},889:function(e,a){}},[[628,2,1]]]);
//# sourceMappingURL=main.43fe8c41.chunk.js.map