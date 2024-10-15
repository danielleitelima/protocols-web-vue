import{_ as J}from"./NavbarComponent.vue_vue_type_script_setup_true_lang-DtwlYV6r.js";import{$ as W,B as G,o as r,c,q as K,m as S,v as Q,l as g,k as X,a as n,t as h,z as Y,d as M,a0 as Z,W as P,r as m,b as t,w as i,x as C,a1 as x,n as D,u as ee,H as N,f as ae,a2 as te,a3 as ne,s as le,a4 as oe}from"./index-BSYsxmI_.js";import{s as se,h as ie}from"./date-B1vuJ5x2.js";import{U as re}from"./UserService-DMXKoP1m.js";import"./index-C-4V0iVE.js";var ce={name:"Dropdown",extends:W,mounted:function(){console.warn("Deprecated since v4. Use Select component instead.")}},ue=function(p){var a=p.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(a("tag.primary.background"),`;
    color: `).concat(a("tag.primary.color"),`;
    font-size: `).concat(a("tag.font.size"),`;
    font-weight: `).concat(a("tag.font.weight"),`;
    padding: `).concat(a("tag.padding"),`;
    border-radius: `).concat(a("tag.border.radius"),`;
    gap: `).concat(a("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(a("tag.icon.size"),`;
    width: `).concat(a("tag.icon.size"),`;
    height:`).concat(a("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(a("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(a("tag.success.background"),`;
    color: `).concat(a("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(a("tag.info.background"),`;
    color: `).concat(a("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(a("tag.warn.background"),`;
    color: `).concat(a("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(a("tag.danger.background"),`;
    color: `).concat(a("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(a("tag.secondary.background"),`;
    color: `).concat(a("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(a("tag.contrast.background"),`;
    color: `).concat(a("tag.contrast.color"),`;
}
`)},de={root:function(p){var a=p.props;return["p-tag p-component",{"p-tag-info":a.severity==="info","p-tag-success":a.severity==="success","p-tag-warn":a.severity==="warn","p-tag-danger":a.severity==="danger","p-tag-secondary":a.severity==="secondary","p-tag-contrast":a.severity==="contrast","p-tag-rounded":a.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},pe=G.extend({name:"tag",theme:ue,classes:de}),ve={name:"BaseTag",extends:Y,props:{value:null,severity:null,rounded:Boolean,icon:String},style:pe,provide:function(){return{$pcTag:this,$parentInstance:this}}},I={name:"Tag",extends:ve,inheritAttrs:!1};function me(l,p,a,y,s,f){return r(),c("span",S({class:l.cx("root")},l.ptmi("root")),[l.$slots.icon?(r(),K(Q(l.$slots.icon),S({key:0,class:l.cx("icon")},l.ptm("icon")),null,16,["class"])):l.icon?(r(),c("span",S({key:1,class:[l.cx("icon"),l.icon]},l.ptm("icon")),null,16)):g("",!0),l.value!=null||l.$slots.default?X(l.$slots,"default",{key:2},function(){return[n("span",S({class:l.cx("label")},l.ptm("label")),h(l.value),17)]}):g("",!0)],16)}I.render=me;const ge={class:"card"},fe={class:"flex flex-wrap align-items-center justify-content-between gap-2"},be=n("span",{class:"text-xl text-900 font-bold"},"User",-1),he={class:"flex gap-3"},ye={class:"flex align-items-center gap-2"},_e={class:"confirmation-content"},ke=n("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),we=n("br",null,null,-1),Ue={key:0},De={class:"field"},$e=n("label",{for:"name"},"Name",-1),Re={key:0,class:"p-error"},Se={class:"field"},Te=n("label",{for:"email"},"E-Mail",-1),xe={key:0,class:"p-error"},Ae={class:"field"},Ee=n("label",{for:"role",class:"mb-3"},"Rolle",-1),Ve={key:0},Ce={key:1},Me={class:"field"},Ne=n("label",{for:"name"},"Name",-1),Ie={key:0,class:"p-error"},qe={class:"field"},ze=n("label",{for:"email"},"E-Mail",-1),Be={key:0,class:"p-error"},Oe={class:"field"},Fe=n("label",{for:"role",class:"mb-3"},"Rolle",-1),Le={key:0},je={key:1},He=M({__name:"UserList",setup(l){const p=Z(),a=()=>{re.getData().then(u=>y.value=u)};P(()=>{a()});const y=m(),s=m(),f=m(!1),_=m(!1),k=m(!1),$=m(),v=m(!1),A=m([{name:"Super Administrator",value:"SUPER_ADMINISTRATOR"},{name:"Administrator",value:"ADMINISTRATOR"},{name:"User",value:"USER"}]),w=u=>{switch(u){case"SUPER_ADMINISTRATOR":return"danger";case"ADMINISTRATOR":return"warning";case"USER":return"info";default:return null}},q=u=>{switch(u.role){case"SUPER_ADMINISTRATOR":return"Super Administrator";case"ADMINISTRATOR":return"Administrator";case"USER":return"User";default:return null}},z=u=>{s.value=u,f.value=!0},B=()=>{f.value=!1,p.add({severity:"success",summary:"Erfolgreich",detail:"User gelöscht",life:3e3})},O=u=>{s.value={...u},_.value=!0},F=()=>{v.value=!0,p.add({severity:"success",summary:"Erfolgreich",detail:"User aktualisiert",life:3e3}),_.value=!1,s.value={}},L=()=>{k.value=!1,p.add({severity:"success",summary:"Erfolgreich",detail:"User erstellt",life:3e3})};return(u,o)=>{const d=ae,b=te,U=I,j=ne,T=se,R=le,E=ce,V=oe("tooltip");return r(),c(N,null,[n("div",ge,[t(j,{value:y.value,stripedRows:"",paginator:"",rows:10,rowsPerPageOptions:[5,10,20,50],tableStyle:"min-width: 50rem"},{header:i(()=>[n("div",fe,[be,n("div",he,[C(t(d,{icon:"pi pi-plus",severity:"success",rounded:"",raised:"",onClick:o[0]||(o[0]=e=>k.value=!0)},null,512),[[V,{value:"User anlegen",showDelay:1e3,hideDelay:300},void 0,{bottom:!0}]]),C(t(d,{icon:"pi pi-refresh",rounded:"",raised:"",onClick:a},null,512),[[V,{value:"Tabelle neuladen",showDelay:1e3,hideDelay:300},void 0,{bottom:!0}]])])])]),footer:i(()=>[x("Insgesamt "+h(y.value?y.value.length:0)+" User.",1)]),default:i(()=>[t(b,{sortable:"",field:"name",header:"Name"}),t(b,{sortable:"",field:"email",header:"E-Mail"}),t(b,{header:"Rolle"},{body:i(e=>[t(U,{value:q(e.data),severity:w(e.data.role)},null,8,["value","severity"])]),_:1}),t(b,{field:"isVerified",header:"E-Mail bestätigt",dataType:"boolean",bodyClass:"text-center"},{body:i(({data:e})=>[n("i",{class:D(["pi",{"pi-check-circle text-green-500 ":e.isVerified,"pi-times-circle text-red-500":!e.isVerified}])},null,2)]),_:1}),t(b,{sortable:"",header:"Erstellt am",filterField:"createdAt",showFilterMenu:!1,filterMenuStyle:{width:"14rem"},style:{"min-width":"14rem"}},{body:i(({data:e})=>[n("div",ye,[n("span",null,h(ee(ie)(e.createdAt))+" Uhr",1)])]),_:1}),t(b,null,{body:i(e=>[t(d,{icon:"pi pi-pencil",outlined:"",rounded:"",class:"mr-2",onClick:H=>O(e.data)},null,8,["onClick"]),t(d,{icon:"pi pi-trash",outlined:"",rounded:"",severity:"danger",onClick:H=>z(e.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])]),t(T,{visible:f.value,"onUpdate:visible":o[2]||(o[2]=e=>f.value=e),style:{width:"450px"},header:"User löschen",modal:!0},{footer:i(()=>[t(d,{label:"Nein",icon:"pi pi-times",text:"",onClick:o[1]||(o[1]=e=>f.value=!1)}),t(d,{label:"Ja",icon:"pi pi-check",text:"",onClick:B})]),default:i(()=>[n("div",_e,[ke,we,s.value?(r(),c("span",Ue,[x("Möchten Sie den User "),n("b",null,h(s.value.name),1),x(" löschen?")])):g("",!0)])]),_:1},8,["visible"]),t(T,{visible:_.value,"onUpdate:visible":o[7]||(o[7]=e=>_.value=e),style:{width:"450px"},header:"User bearbeiten",modal:!0,class:"p-fluid"},{footer:i(()=>[t(d,{label:"Abbrechen",icon:"pi pi-times",text:"",onClick:o[6]||(o[6]=e=>_.value=!1)}),t(d,{label:"Speichern",icon:"pi pi-check",text:"",onClick:F})]),default:i(()=>[n("div",De,[$e,t(R,{id:"name",modelValue:s.value.name,"onUpdate:modelValue":o[3]||(o[3]=e=>s.value.name=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:D({"p-invalid":v.value&&!s.value.name})},null,8,["modelValue","class"]),v.value&&!s.value.name?(r(),c("small",Re,"Name is required.")):g("",!0)]),n("div",Se,[Te,t(R,{id:"email",modelValue:s.value.email,"onUpdate:modelValue":o[4]||(o[4]=e=>s.value.email=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:D({"p-invalid":v.value&&!s.value.email})},null,8,["modelValue","class"]),v.value&&!s.value.email?(r(),c("small",xe,"E-Mail is required.")):g("",!0)]),n("div",Ae,[Ee,t(E,{id:"role",modelValue:$.value,"onUpdate:modelValue":o[5]||(o[5]=e=>$.value=e),options:A.value,optionLabel:"name",placeholder:"Rolle auswählen"},{value:i(e=>[e.value?(r(),c("div",Ve,[t(U,{value:e.value.name,severity:w(e.value.value)},null,8,["value","severity"])])):(r(),c("span",Ce,h(e.placeholder),1))]),option:i(e=>[t(U,{value:e.option.name,severity:w(e.option.value)},null,8,["value","severity"])]),_:1},8,["modelValue","options"])])]),_:1},8,["visible"]),t(T,{visible:k.value,"onUpdate:visible":o[10]||(o[10]=e=>k.value=e),style:{width:"450px"},header:"User erstellen",modal:!0,class:"p-fluid"},{footer:i(()=>[t(d,{label:"Abbrechen",icon:"pi pi-times",text:"",onClick:o[9]||(o[9]=e=>k.value=!1)}),t(d,{label:"Speichern",icon:"pi pi-check",text:"",onClick:L})]),default:i(()=>[n("div",Me,[Ne,t(R,{id:"name",required:"true",autofocus:"",class:D({"p-invalid":v.value&&!s.value.name})},null,8,["class"]),v.value&&!s.value.name?(r(),c("small",Ie,"Name is required.")):g("",!0)]),n("div",qe,[ze,t(R,{id:"email",required:"true",autofocus:"",class:D({"p-invalid":v.value&&!s.value.email})},null,8,["class"]),v.value&&!s.value.email?(r(),c("small",Be,"E-Mail is required.")):g("",!0)]),n("div",Oe,[Fe,t(E,{id:"role",modelValue:$.value,"onUpdate:modelValue":o[8]||(o[8]=e=>$.value=e),options:A.value,optionLabel:"name",placeholder:"Rolle auswählen"},{value:i(e=>[e.value?(r(),c("div",Le,[t(U,{value:e.value.name,severity:w(e.value.value)},null,8,["value","severity"])])):(r(),c("span",je,h(e.placeholder),1))]),option:i(e=>[t(U,{value:e.option.name,severity:w(e.option.value)},null,8,["value","severity"])]),_:1},8,["modelValue","options"])])]),_:1},8,["visible"])],64)}}}),Xe=M({__name:"UserView",setup(l){return(p,a)=>(r(),c(N,null,[t(J),t(He)],64))}});export{Xe as default};
