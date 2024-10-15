import{B as b,al as g,o as p,c as h,m as _,z as y,d as $,r as k,b as i,a as n,w as s,s as z,j as u,f as B,p as I,g as w}from"./index-DEH4TwCI.js";import{N as C}from"./Navigation-DEVybjps.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";var T=function(a){var e=a.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding: `).concat(e("textarea.padding.y")," ").concat(e("textarea.padding.x"),`;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background `).concat(e("textarea.transition.duration"),", color ").concat(e("textarea.transition.duration"),", border-color ").concat(e("textarea.transition.duration"),", outline-color ").concat(e("textarea.transition.duration"),", box-shadow ").concat(e("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    box-shadow: `).concat(e("textarea.focus.ring.shadow"),`;
    outline: `).concat(e("textarea.focus.ring.width")," ").concat(e("textarea.focus.ring.style")," ").concat(e("textarea.focus.ring.color"),`;
    outline-offset: `).concat(e("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(e("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(e("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}
`)},F={root:function(a){var e=a.instance,o=a.props;return["p-textarea p-component",{"p-filled":e.filled,"p-textarea-resizable ":o.autoResize,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":e.$primevue.config.inputStyle==="filled"||e.$primevue.config.inputVariant==="filled","p-textarea-fluid":e.hasFluid}]}},P=b.extend({name:"textarea",theme:T,classes:F}),S={name:"BaseTextarea",extends:y,props:{modelValue:null,autoResize:Boolean,invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:P,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},f={name:"Textarea",extends:S,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(a){this.autoResize&&this.resize(),this.$emit("update:modelValue",a.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}},hasFluid:function(){return g(this.fluid)?!!this.$pcFluid:this.fluid}}},R=["value","aria-invalid"];function L(t,a,e,o,d,r){return p(),h("textarea",_({class:t.cx("root"),value:t.modelValue,"aria-invalid":t.invalid||void 0,onInput:a[0]||(a[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},t.ptmi("root",r.ptmParams)),null,16,R)}f.render=L;const l=t=>(I("data-v-645a3aad"),t=t(),w(),t),N={id:"container"},H={id:"content-container"},j={id:"content"},E=l(()=>n("h1",{class:"text-display-medium"},"Create protocol model",-1)),M={id:"form"},U={id:"form-content"},A=l(()=>n("h1",{id:"title",class:"text-headline-small"},"Data",-1)),D=l(()=>n("label",{for:"title-input"},"Title",-1)),Y=l(()=>n("label",{for:"template-input"},"Template",-1)),q={id:"button-container"},G=l(()=>n("span",{class:"material-icons"},"check",-1)),J=$({__name:"ProtocolModelCreate",setup(t){const a=k({primary:{color:"var(--color-on-primary-container)",background:"var(--color-primary-container)",borderColor:"var(--color-primary-container)",hoverColor:"var(--color-on-primary-container)",hoverBackground:"var(--color-on-primary-container-hover)",hoverBorderColor:"var(--color-on-primary-container-hover)",activeBackground:"var(--color-primary-container)",activeBorderColor:"var(--color-primary-container)",activeColor:"var(--color-on-primary-container)"}});return(e,o)=>{const d=z,r=u("FloatLabel"),m=f,v=B,x=u("RouterLink");return p(),h("div",N,[i(C,{id:"navigation"}),n("div",H,[n("div",j,[E,n("div",M,[n("div",U,[A,i(r,{variant:"on",style:{"--p-floatlabel-on-active-background":"var(--color-surface-container-high)","--p-inputtext-background":"var(--color-surface-container-high)"}},{default:s(()=>[i(d,{value:e.title,"onUpdate:value":o[0]||(o[0]=c=>e.title=c),onInput:e.onTitleChanged,id:"title-input"},null,8,["value","onInput"]),D]),_:1}),i(r,{variant:"on",style:{"--p-floatlabel-on-active-background":"var(--color-surface-container-high)","--p-textarea-background":"var(--color-surface-container-high)"}},{default:s(()=>[i(m,{id:"template-input",modelValue:e.template,"onUpdate:modelValue":o[1]||(o[1]=c=>e.template=c),onInput:e.onTemplateChanged,rows:"5",cols:"30",style:{resize:"none"}},null,8,["modelValue","onInput"]),Y]),_:1})]),n("div",q,[i(x,{to:"/protocol/model/list"},{default:s(()=>[i(v,{label:"Confirm",dt:a.value},{icon:s(()=>[G]),_:1},8,["dt"])]),_:1})])])])])])}}}),W=V(J,[["__scopeId","data-v-645a3aad"]]);export{W as default};
