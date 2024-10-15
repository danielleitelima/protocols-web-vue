import{B as N,z as O,am as D,an as y,ao as se,m as l,ap as W,R as J,j as x,a4 as j,o as u,q as p,w as k,c as f,H as C,I as Q,a as v,x as A,v as P,n as L,l as I,t as w,T as X,U as T,a6 as E,a7 as g,aq as Y,al as K,ak as oe,Z as F,ab as ue,ah as ce,D as B,ai as me,aj as $,ar as V,ae as le,b as S,k as M,as as de,at as fe,au as he,av as be,aw as Ie,d as pe,r as G,u as U,a1 as ve}from"./index-BSYsxmI_.js";import{s as ge}from"./index-C-4V0iVE.js";var ye=function(e){var t=e.dt;return`
.p-tieredmenu {
    background: `.concat(t("tieredmenu.background"),`;
    color: `).concat(t("tieredmenu.color"),`;
    border: 1px solid `).concat(t("tieredmenu.border.color"),`;
    border-radius: `).concat(t("tieredmenu.border.radius"),`;
    min-width: 12.5rem;
}

.p-tieredmenu-root-list,
.p-tieredmenu-submenu {
    margin: 0;
    padding: `).concat(t("tieredmenu.list.padding"),`;
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("tieredmenu.list.gap"),`;
}

.p-tieredmenu-submenu {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    background: `).concat(t("tieredmenu.background"),`;
    color: `).concat(t("tieredmenu.color"),`;
    border: 1px solid `).concat(t("tieredmenu.border.color"),`;
    border-radius: `).concat(t("tieredmenu.border.radius"),`;
    box-shadow: `).concat(t("tieredmenu.shadow"),`;
}

.p-tieredmenu-item {
    position: relative;
}

.p-tieredmenu-item-content {
    transition: background `).concat(t("tieredmenu.transition.duration"),", color ").concat(t("tieredmenu.transition.duration"),`;
    border-radius: `).concat(t("tieredmenu.item.border.radius"),`;
    color: `).concat(t("tieredmenu.item.color"),`;
}

.p-tieredmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("tieredmenu.item.padding"),`;
    gap: `).concat(t("tieredmenu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-tieredmenu-item-label {
    line-height: 1;
}

.p-tieredmenu-item-icon {
    color: `).concat(t("tieredmenu.item.icon.color"),`;
}

.p-tieredmenu-submenu-icon {
    color: `).concat(t("tieredmenu.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(t("tieredmenu.submenu.icon.size"),`;
    width: `).concat(t("tieredmenu.submenu.icon.size"),`;
    height: `).concat(t("tieredmenu.submenu.icon.size"),`;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
    color: `).concat(t("tieredmenu.item.focus.color"),`;
    background: `).concat(t("tieredmenu.item.focus.background"),`;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: `).concat(t("tieredmenu.item.icon.focus.color"),`;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: `).concat(t("tieredmenu.submenu.icon.focus.color"),`;
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
    color: `).concat(t("tieredmenu.item.focus.color"),`;
    background: `).concat(t("tieredmenu.item.focus.background"),`;
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
    color: `).concat(t("tieredmenu.item.icon.focus.color"),`;
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
    color: `).concat(t("tieredmenu.submenu.icon.focus.color"),`;
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content {
    color: `).concat(t("tieredmenu.item.active.color"),`;
    background: `).concat(t("tieredmenu.item.active.background"),`;
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: `).concat(t("tieredmenu.item.icon.active.color"),`;
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: `).concat(t("tieredmenu.submenu.icon.active.color"),`;
}

.p-tieredmenu-separator {
    border-top: 1px solid `).concat(t("tieredmenu.separator.border.color"),`;
}

.p-tieredmenu-overlay {
    box-shadow: `).concat(t("tieredmenu.shadow"),`;
}

.p-tieredmenu-enter-from,
.p-tieredmenu-leave-active {
    opacity: 0;
}

.p-tieredmenu-enter-active {
    transition: opacity 250ms;
}

.p-tieredmenu-mobile {
    position: relative;
}

.p-tieredmenu-mobile .p-tieredmenu-button {
    display: flex;
}

.p-tieredmenu-mobile .p-tieredmenu-root-list > .p-tieredmenu-item > .p-tieredmenu-item-content > .p-tieredmenu-item-link {
    padding: `).concat(t("tieredmenu.item.padding"),`;
}

.p-tieredmenu-mobile .p-tieredmenu-root-list .p-tieredmenu-separator {
    border-top: 1px solid `).concat(t("tieredmenu.separator.border.color"),`;
}

.p-tieredmenu-mobile .p-tieredmenu-root-list > .p-tieredmenu-item > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-tieredmenu-mobile .p-tieredmenu-root-list > .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    transform: rotate(-90deg);
}

.p-tieredmenu-mobile .p-tieredmenu-submenu .p-tieredmenu-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-tieredmenu-mobile  .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    transform: rotate(-90deg);
}

.p-tieredmenu-mobile .p-tieredmenu-submenu {
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: `).concat(t("tieredmenu.submenu.mobile.indent"),`;
}
`)},ke={submenu:function(e){var t=e.instance,r=e.processedItem;return{display:t.isItemActive(r)?"flex":"none"}}},Le={root:function(e){var t=e.props,r=e.instance;return["p-tieredmenu p-component",{"p-tieredmenu-overlay":t.popup,"p-tieredmenu-mobile":r.queryMatches}]},start:"p-tieredmenu-start",rootList:"p-tieredmenu-root-list",item:function(e){var t=e.instance,r=e.processedItem;return["p-tieredmenu-item",{"p-tieredmenu-item-active":t.isItemActive(r),"p-focus":t.isItemFocused(r),"p-disabled":t.isItemDisabled(r)}]},itemContent:"p-tieredmenu-item-content",itemLink:"p-tieredmenu-item-link",itemIcon:"p-tieredmenu-item-icon",itemLabel:"p-tieredmenu-item-label",submenuIcon:"p-tieredmenu-submenu-icon",submenu:"p-tieredmenu-submenu",separator:"p-tieredmenu-separator",end:"p-tieredmenu-end"},Pe=N.extend({name:"tieredmenu",theme:ye,classes:Le,inlineStyles:ke}),xe={name:"BaseTieredMenu",extends:O,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},breakpoint:{type:String,default:"960px"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Pe,provide:function(){return{$pcTieredMenu:this,$parentInstance:this}}},ee={name:"TieredMenuSub",hostName:"TieredMenu",extends:O,emits:["item-click","item-mouseenter","item-mousemove"],container:null,props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,r){return e&&e.item?D(e.item[t],r):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,r){return this.ptm(r,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return y(e.items)},onEnter:function(){se(this.container,this.level)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(r){return t.isItemVisible(r)&&t.getItemProp(r,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:l({class:this.cx("itemLink"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,t,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,t,"itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions(e,t,"itemLabel")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,t,"submenuIcon"))}},containerRef:function(e){this.container=e}},components:{AngleRightIcon:W},directives:{ripple:J}},we=["tabindex"],Ke=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],Me=["onClick","onMouseenter","onMousemove"],Se=["href","target"],Ae=["id"],Ce=["id"];function Ee(n,e,t,r,a,i){var c=x("AngleRightIcon"),h=x("TieredMenuSub",!0),o=j("ripple");return u(),p(X,l({name:"p-tieredmenu",onEnter:i.onEnter},n.ptm("menu.transition")),{default:k(function(){return[t.level===0||t.visible?(u(),f("ul",{key:0,ref:i.containerRef,tabindex:t.tabindex},[(u(!0),f(C,null,Q(t.items,function(s,d){return u(),f(C,{key:i.getItemKey(s)},[i.isItemVisible(s)&&!i.getItemProp(s,"separator")?(u(),f("li",l({key:0,id:i.getItemId(s),style:i.getItemProp(s,"style"),class:[n.cx("item",{processedItem:s}),i.getItemProp(s,"class")],role:"menuitem","aria-label":i.getItemLabel(s),"aria-disabled":i.isItemDisabled(s)||void 0,"aria-expanded":i.isItemGroup(s)?i.isItemActive(s):void 0,"aria-haspopup":i.isItemGroup(s)&&!i.getItemProp(s,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(d),ref_for:!0},i.getPTOptions(s,d,"item"),{"data-p-active":i.isItemActive(s),"data-p-focused":i.isItemFocused(s),"data-p-disabled":i.isItemDisabled(s)}),[v("div",l({class:n.cx("itemContent"),onClick:function(b){return i.onItemClick(b,s)},onMouseenter:function(b){return i.onItemMouseEnter(b,s)},onMousemove:function(b){return i.onItemMouseMove(b,s)},ref_for:!0},i.getPTOptions(s,d,"itemContent")),[t.templates.item?(u(),p(P(t.templates.item),{key:1,item:s.item,hasSubmenu:i.getItemProp(s,"items"),label:i.getItemLabel(s),props:i.getMenuItemProps(s,d)},null,8,["item","hasSubmenu","label","props"])):A((u(),f("a",l({key:0,href:i.getItemProp(s,"url"),class:n.cx("itemLink"),target:i.getItemProp(s,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions(s,d,"itemLink")),[t.templates.itemicon?(u(),p(P(t.templates.itemicon),{key:0,item:s.item,class:L(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(s,"icon")?(u(),f("span",l({key:1,class:[n.cx("itemIcon"),i.getItemProp(s,"icon")],ref_for:!0},i.getPTOptions(s,d,"itemIcon")),null,16)):I("",!0),v("span",l({id:i.getItemLabelId(s),class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions(s,d,"itemLabel")),w(i.getItemLabel(s)),17,Ae),i.getItemProp(s,"items")?(u(),f(C,{key:2},[t.templates.submenuicon?(u(),p(P(t.templates.submenuicon),l({key:0,class:n.cx("submenuIcon"),active:i.isItemActive(s),ref_for:!0},i.getPTOptions(s,d,"submenuIcon")),null,16,["class","active"])):(u(),p(c,l({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions(s,d,"submenuIcon")),null,16,["class"]))],64)):I("",!0)],16,Se)),[[o]])],16,Me),i.isItemVisible(s)&&i.isItemGroup(s)?(u(),p(h,l({key:0,id:i.getItemId(s)+"_list",class:n.cx("submenu"),style:n.sx("submenu",!0,{processedItem:s}),"aria-labelledby":i.getItemLabelId(s),role:"menu",menuId:t.menuId,focusedItemId:t.focusedItemId,items:s.items,templates:t.templates,activeItemPath:t.activeItemPath,level:t.level+1,visible:i.isItemActive(s)&&i.isItemGroup(s),pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(m){return n.$emit("item-click",m)}),onItemMouseenter:e[1]||(e[1]=function(m){return n.$emit("item-mouseenter",m)}),onItemMousemove:e[2]||(e[2]=function(m){return n.$emit("item-mousemove",m)}),ref_for:!0},n.ptm("submenu")),null,16,["id","class","style","aria-labelledby","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled"])):I("",!0)],16,Ke)):I("",!0),i.isItemVisible(s)&&i.getItemProp(s,"separator")?(u(),f("li",l({key:1,id:i.getItemId(s),style:i.getItemProp(s,"style"),class:[n.cx("separator"),i.getItemProp(s,"class")],role:"separator",ref_for:!0},n.ptm("separator")),null,16,Ce)):I("",!0)],64)}),128))],8,we)):I("",!0)]}),_:1},16,["onEnter"])}ee.render=Ee;var te={name:"TieredMenu",extends:xe,inheritAttrs:!1,emits:["focus","blur","before-show","before-hide","hide","show"],outsideClickListener:null,matchMediaListener:null,scrollHandler:null,resizeListener:null,target:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!this.popup,submenuVisible:!1,dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||T()},activeItemPath:function(e){this.popup||(y(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener()))}},mounted:function(){this.id=this.id||T(),this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&E.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,t){return e?D(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return y(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&y(e.items)},toggle:function(e){this.visible?this.hide(e,!0):this.show(e)},show:function(e,t){this.popup&&(this.$emit("before-show"),this.visible=!0,this.target=this.target||e.currentTarget,this.relatedTarget=e.relatedTarget||null),t&&g(this.menubar)},hide:function(e,t){this.popup&&(this.$emit("before-hide"),this.visible=!1),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},t&&g(this.relatedTarget||this.target||this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.popup||(this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&Y(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var t=e.processedItem,r=e.isFocus;if(!K(t)){var a=t.index,i=t.key,c=t.level,h=t.parentKey,o=t.items,s=y(o),d=this.activeItemPath.filter(function(m){return m.parentKey!==h&&m.parentKey!==i});s&&(d.push(t),this.submenuVisible=!0),this.focusedItemInfo={index:a,level:c,parentKey:h},this.activeItemPath=d,s&&(this.dirty=!0),r&&g(this.menubar)}},onOverlayClick:function(e){oe.emit("overlay-click",{originalEvent:e,target:this.target})},onItemClick:function(e){var t=e.originalEvent,r=e.processedItem,a=this.isProccessedItemGroup(r),i=K(r.parent),c=this.isSelected(r);if(c){var h=r.index,o=r.key,s=r.level,d=r.parentKey;this.activeItemPath=this.activeItemPath.filter(function(b){return o!==b.key&&o.startsWith(b.key)}),this.focusedItemInfo={index:h,level:s,parentKey:d},this.dirty=!i,g(this.menubar)}else if(a)this.onItemChange(e);else{var m=i?r:this.activeItemPath.find(function(b){return b.parentKey===""});this.hide(t),this.changeFocusedItemIndex(t,m?m.index:-1),g(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(t);!r&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(e,!0),e.preventDefault()}else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}},onArrowLeftKey:function(e){var t=this,r=this.visibleItems[this.focusedItemInfo.index],a=this.activeItemPath.find(function(c){return c.key===r.parentKey}),i=K(r.parent);i||(this.focusedItemInfo={index:-1,parentKey:a?a.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(c){return c.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(t);r&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=F(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),r=t&&F(t,'[data-pc-section="itemlink"]');if(r?r.click():t&&t.click(),!this.popup){var a=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(a);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.popup||this.focusedItemInfo.level!==0){var t=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(t.parentKey.split("_")[0]),level:0,parentKey:""},this.popup&&g(this.target)}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(t);!r&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter:function(e){this.autoZIndex&&E.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),ue(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),g(this.menubar),this.scrollInView()},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.container=null,this.dirty=!1},onAfterLeave:function(e){this.autoZIndex&&E.clear(e)},alignOverlay:function(){ce(this.container,this.target);var e=B(this.target);e>B(this.container)&&(this.container.style.minWidth=B(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var r=e.container&&!e.container.contains(t.target),a=e.popup?!(e.target&&(e.target===t.target||e.target.contains(t.target))):!0;r&&a&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new me(this.target,function(t){e.hide(t,!0)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){$()||e.hide(t,!0)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return V(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,r=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(a){return t.isValidItem(a)}):-1;return r>-1?r+e+1:e},findPrevItemIndex:function(e){var t=this,r=e>0?V(this.visibleItems.slice(0,e),function(a){return t.isValidItem(a)}):-1;return r>-1?r:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var r=this;this.searchValue=(this.searchValue||"")+t;var a=-1,i=!1;return this.focusedItemInfo.index!==-1?(a=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(c){return r.isItemMatched(c)}),a=a===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(c){return r.isItemMatched(c)}):a+this.focusedItemInfo.index):a=this.visibleItems.findIndex(function(c){return r.isItemMatched(c)}),a!==-1&&(i=!0),a===-1&&this.focusedItemInfo.index===-1&&(a=this.findFirstFocusedItemIndex()),a!==-1&&this.changeFocusedItemIndex(e,a),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,r=F(this.menubar,'li[id="'.concat(t,'"]'));r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",c=[];return e&&e.forEach(function(h,o){var s=(i!==""?i+"_":"")+o,d={item:h,index:o,level:r,key:s,parent:a,parentKey:i};d.items=t.createProcessedItems(h.items,r+1,d,s),c.push(d)}),c},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(r){return r.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(y(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{TieredMenuSub:ee,Portal:le}},Fe=["id"];function ze(n,e,t,r,a,i){var c=x("TieredMenuSub"),h=x("Portal");return u(),p(h,{appendTo:n.appendTo,disabled:!n.popup},{default:k(function(){return[S(X,l({name:"p-connected-overlay",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:k(function(){return[a.visible?(u(),f("div",l({key:0,ref:i.containerRef,id:a.id,class:n.cx("root"),onClick:e[0]||(e[0]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},n.ptmi("root")),[n.$slots.start?(u(),f("div",l({key:0,class:n.cx("start")},n.ptm("start")),[M(n.$slots,"start")],16)):I("",!0),S(c,l({ref:i.menubarRef,id:a.id+"_list",class:n.cx("rootList"),tabindex:n.disabled?-1:n.tabindex,role:"menubar","aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,"aria-disabled":n.disabled||void 0,"aria-orientation":"vertical","aria-activedescendant":a.focused?i.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?i.focusedItemId:void 0,items:i.processedItems,templates:n.$slots,activeItemPath:a.activeItemPath,level:0,visible:a.submenuVisible,pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},n.ptm("rootList")),null,16,["id","class","tabindex","aria-label","aria-labelledby","aria-disabled","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),n.$slots.end?(u(),f("div",l({key:1,class:n.cx("end")},n.ptm("end")),[M(n.$slots,"end")],16)):I("",!0)],16,Fe)):I("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}te.render=ze;var Oe=function(e){var t=e.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(t("avatar.width"),`;
    height: `).concat(t("avatar.height"),`;
    font-size: `).concat(t("avatar.font.size"),`;
    background: `).concat(t("avatar.background"),`;
    border-radius: `).concat(t("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(t("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(t("avatar.lg.width"),`;
    height: `).concat(t("avatar.lg.width"),`;
    font-size: `).concat(t("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(t("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(t("avatar.xl.width"),`;
    height: `).concat(t("avatar.xl.width"),`;
    font-size: `).concat(t("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(t("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(t("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(t("avatar.group.border.color"),`;
}
`)},Te={root:function(e){var t=e.props;return["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Ve=N.extend({name:"avatar",theme:Oe,classes:Te}),De={name:"BaseAvatar",extends:O,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ve,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},ne={name:"Avatar",extends:De,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},Re=["aria-labelledby","aria-label"],_e=["src","alt"];function Be(n,e,t,r,a,i){return u(),f("div",l({class:n.cx("root"),"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel},n.ptmi("root")),[M(n.$slots,"default",{},function(){return[n.label?(u(),f("span",l({key:0,class:n.cx("label")},n.ptm("label")),w(n.label),17)):n.$slots.icon?(u(),p(P(n.$slots.icon),{key:1,class:L(n.cx("icon"))},null,8,["class"])):n.icon?(u(),f("span",l({key:2,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):n.image?(u(),f("img",l({key:3,src:n.image,alt:n.ariaLabel,onError:e[0]||(e[0]=function(){return i.onError&&i.onError.apply(i,arguments)})},n.ptm("image")),null,16,_e)):I("",!0)]})],16,Re)}ne.render=Be;var Ge=function(e){var t=e.dt;return`
.p-menubar {
    display: flex;
    align-items: center;
    background: `.concat(t("menubar.background"),`;
    border: 1px solid `).concat(t("menubar.border.color"),`;
    border-radius: `).concat(t("menubar.border.radius"),`;
    color: `).concat(t("menubar.color"),`;
    padding: `).concat(t("menubar.padding"),`;
    gap: `).concat(t("menubar.gap"),`;
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: `).concat(t("menubar.gap"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(t("menubar.base.item.border.radius"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(t("menubar.base.item.padding"),`;
}

.p-menubar-item-content {
    transition: background `).concat(t("menubar.transition.duration"),", color ").concat(t("menubar.transition.duration"),`;
    border-radius: `).concat(t("menubar.item.border.radius"),`;
    color: `).concat(t("menubar.item.color"),`;
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("menubar.item.padding"),`;
    gap: `).concat(t("menubar.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.color"),`;
}

.p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(t("menubar.submenu.icon.size"),`;
    width: `).concat(t("menubar.submenu.icon.size"),`;
    height: `).concat(t("menubar.submenu.icon.size"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: `).concat(t("menubar.item.focus.color"),`;
    background: `).concat(t("menubar.item.focus.background"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.focus.color"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: `).concat(t("menubar.item.focus.color"),`;
    background: `).concat(t("menubar.item.focus.background"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content {
    color: `).concat(t("menubar.item.active.color"),`;
    background: `).concat(t("menubar.item.active.background"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.active.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.active.color"),`;
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: `).concat(t("menubar.submenu.background"),`;
    border: 1px solid `).concat(t("menubar.submenu.border.color"),`;
    border-radius: `).concat(t("menubar.border.radius"),`;
    box-shadow: `).concat(t("menubar.submenu.shadow"),`;
    color: `).concat(t("menubar.submenu.color"),`;
    flex-direction: column;
    padding: `).concat(t("menubar.submenu.padding"),`;
    gap: `).concat(t("menubar.submenu.gap"),`;
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid `).concat(t("menubar.separator.border.color"),`;
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

 .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: `).concat(t("menubar.mobile.button.size"),`;
    height: `).concat(t("menubar.mobile.button.size"),`;
    position: relative;
    color: `).concat(t("menubar.mobile.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(t("menubar.mobile.button.border.radius"),`;
    transition: background `).concat(t("menubar.transition.duration"),", color ").concat(t("menubar.transition.duration"),", outline-color ").concat(t("menubar.transition.duration"),`;
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: `).concat(t("menubar.mobile.button.hover.color"),`;
    background: `).concat(t("menubar.mobile.button.hover.background"),`;
}

.p-menubar-button:focus-visible {
    box-shadow: `).concat(t("menubar.mobile.button.focus.ring.shadow"),`;
    outline: `).concat(t("menubar.mobile.button.focus.ring.width")," ").concat(t("menubar.mobile.button.focus.ring.style")," ").concat(t("menubar.mobile.button.focus.ring.color"),`;
    outline-offset: `).concat(t("menubar.mobile.button.focus.ring.offset"),`;
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: `).concat(t("menubar.submenu.padding"),`;
    background: `).concat(t("menubar.submenu.background"),`;
    border: 1px solid `).concat(t("menubar.submenu.border.color"),`;
    box-shadow: `).concat(t("menubar.submenu.shadow"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(t("menubar.item.border.radius"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(t("menubar.item.padding"),`;
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-top: 1px solid `).concat(t("menubar.separator.border.color"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: `).concat(t("menubar.submenu.mobile.indent"),`;
}
`)},Ne={submenu:function(e){var t=e.instance,r=e.processedItem;return{display:t.isItemActive(r)?"flex":"none"}}},je={root:function(e){var t=e.instance;return["p-menubar p-component",{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(e){var t=e.instance,r=e.processedItem;return["p-menubar-item",{"p-menubar-item-active":t.isItemActive(r),"p-focus":t.isItemFocused(r),"p-disabled":t.isItemDisabled(r)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},He=N.extend({name:"menubar",theme:Ge,classes:je,inlineStyles:Ne}),Ue={name:"BaseMenubar",extends:O,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:He,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},ie={name:"MenubarSub",hostName:"Menubar",extends:O,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,r){return e&&e.item?D(e.item[t],r):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,r){return this.ptm(r,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return y(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t})},getAriaPosInset:function(e){return e-this.calculateAriaSetSize.slice(0,e).length+1},getMenuItemProps:function(e,t){return{action:l({class:this.cx("itemLink"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,t,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,t,"itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions(e,t,"itemLabel")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,t,"submenuIcon"))}}},computed:{calculateAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&e.getItemProp(t,"separator")})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length}},components:{AngleRightIcon:W,AngleDownIcon:de},directives:{ripple:J}},qe=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],Ze=["onClick","onMouseenter","onMousemove"],We=["href","target"],Je=["id"],Qe=["id"];function Xe(n,e,t,r,a,i){var c=x("MenubarSub",!0),h=j("ripple");return u(),f("ul",l({class:t.level===0?n.cx("rootList"):n.cx("submenu")},t.level===0?n.ptm("rootList"):n.ptm("submenu")),[(u(!0),f(C,null,Q(t.items,function(o,s){return u(),f(C,{key:i.getItemKey(o)},[i.isItemVisible(o)&&!i.getItemProp(o,"separator")?(u(),f("li",l({key:0,id:i.getItemId(o),style:i.getItemProp(o,"style"),class:[n.cx("item",{processedItem:o}),i.getItemProp(o,"class")],role:"menuitem","aria-label":i.getItemLabel(o),"aria-disabled":i.isItemDisabled(o)||void 0,"aria-expanded":i.isItemGroup(o)?i.isItemActive(o):void 0,"aria-haspopup":i.isItemGroup(o)&&!i.getItemProp(o,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize,"aria-posinset":i.getAriaPosInset(s),ref_for:!0},i.getPTOptions(o,s,"item"),{"data-p-active":i.isItemActive(o),"data-p-focused":i.isItemFocused(o),"data-p-disabled":i.isItemDisabled(o)}),[v("div",l({class:n.cx("itemContent"),onClick:function(m){return i.onItemClick(m,o)},onMouseenter:function(m){return i.onItemMouseEnter(m,o)},onMousemove:function(m){return i.onItemMouseMove(m,o)},ref_for:!0},i.getPTOptions(o,s,"itemContent")),[t.templates.item?(u(),p(P(t.templates.item),{key:1,item:o.item,root:t.root,hasSubmenu:i.getItemProp(o,"items"),label:i.getItemLabel(o),props:i.getMenuItemProps(o,s)},null,8,["item","root","hasSubmenu","label","props"])):A((u(),f("a",l({key:0,href:i.getItemProp(o,"url"),class:n.cx("itemLink"),target:i.getItemProp(o,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions(o,s,"itemLink")),[t.templates.itemicon?(u(),p(P(t.templates.itemicon),{key:0,item:o.item,class:L(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(o,"icon")?(u(),f("span",l({key:1,class:[n.cx("itemIcon"),i.getItemProp(o,"icon")],ref_for:!0},i.getPTOptions(o,s,"itemIcon")),null,16)):I("",!0),v("span",l({id:i.getItemLabelId(o),class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions(o,s,"itemLabel")),w(i.getItemLabel(o)),17,Je),i.getItemProp(o,"items")?(u(),f(C,{key:2},[t.templates.submenuicon?(u(),p(P(t.templates.submenuicon),{key:0,root:t.root,active:i.isItemActive(o),class:L(n.cx("submenuIcon"))},null,8,["root","active","class"])):(u(),p(P(t.root?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions(o,s,"submenuIcon")),null,16,["class"]))],64)):I("",!0)],16,We)),[[h]])],16,Ze),i.isItemVisible(o)&&i.isItemGroup(o)?(u(),p(c,{key:0,id:i.getItemId(o)+"_list",menuId:t.menuId,role:"menu",style:fe(n.sx("submenu",!0,{processedItem:o})),focusedItemId:t.focusedItemId,items:o.items,mobileActive:t.mobileActive,activeItemPath:t.activeItemPath,templates:t.templates,level:t.level+1,"aria-labelledby":i.getItemLabelId(o),pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(d){return n.$emit("item-click",d)}),onItemMouseenter:e[1]||(e[1]=function(d){return n.$emit("item-mouseenter",d)}),onItemMousemove:e[2]||(e[2]=function(d){return n.$emit("item-mousemove",d)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):I("",!0)],16,qe)):I("",!0),i.isItemVisible(o)&&i.getItemProp(o,"separator")?(u(),f("li",l({key:1,id:i.getItemId(o),class:[n.cx("separator"),i.getItemProp(o,"class")],style:i.getItemProp(o,"style"),role:"separator",ref_for:!0},n.ptm("separator")),null,16,Qe)):I("",!0)],64)}),128))],16)}ie.render=Xe;var re={name:"Menubar",extends:Ue,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||T()},activeItemPath:function(e){y(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.id=this.id||T(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&E.clear(this.container),this.container=null},methods:{getItemProp:function(e,t){return e?D(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return y(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&y(e.items)},toggle:function(e){var t=this;this.mobileActive?(this.mobileActive=!1,E.clear(this.menubar),this.hide()):(this.mobileActive=!0,E.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){t.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){g(this.menubar)},hide:function(e,t){var r=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){g(r.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},t&&g(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&Y(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var t=e.processedItem,r=e.isFocus;if(!K(t)){var a=t.index,i=t.key,c=t.level,h=t.parentKey,o=t.items,s=y(o),d=this.activeItemPath.filter(function(m){return m.parentKey!==h&&m.parentKey!==i});s&&d.push(t),this.focusedItemInfo={index:a,level:c,parentKey:h},this.activeItemPath=d,s&&(this.dirty=!0),r&&g(this.menubar)}},onItemClick:function(e){var t=e.originalEvent,r=e.processedItem,a=this.isProccessedItemGroup(r),i=K(r.parent),c=this.isSelected(r);if(c){var h=r.index,o=r.key,s=r.level,d=r.parentKey;this.activeItemPath=this.activeItemPath.filter(function(b){return o!==b.key&&o.startsWith(b.key)}),this.focusedItemInfo={index:h,level:s,parentKey:d},this.dirty=!i,g(this.menubar)}else if(a)this.onItemChange(e);else{var m=i?r:this.activeItemPath.find(function(b){return b.parentKey===""});this.hide(t),this.changeFocusedItemIndex(t,m?m.index:-1),this.mobileActive=!1,g(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],r=t?K(t.parent):null;if(r){var a=this.isProccessedItemGroup(t);a&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowRightKey(e))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i)}e.preventDefault()},onArrowUpKey:function(e){var t=this,r=this.visibleItems[this.focusedItemInfo.index],a=K(r.parent);if(a){var i=this.isProccessedItemGroup(r);if(i){this.onItemChange({originalEvent:e,processedItem:r}),this.focusedItemInfo={index:-1,parentKey:r.key};var c=this.findLastItemIndex();this.changeFocusedItemIndex(e,c)}}else{var h=this.activeItemPath.find(function(s){return s.key===r.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:h?h.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==t.focusedItemInfo.parentKey});else{var o=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o)}}e.preventDefault()},onArrowLeftKey:function(e){var t=this,r=this.visibleItems[this.focusedItemInfo.index],a=r?this.activeItemPath.find(function(c){return c.key===r.parentKey}):null;if(a)this.onItemChange({originalEvent:e,processedItem:a}),this.activeItemPath=this.activeItemPath.filter(function(c){return c.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault();else{var i=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],r=t?this.activeItemPath.find(function(c){return c.key===t.parentKey}):null;if(r){var a=this.isProccessedItemGroup(t);a&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowDownKey(e))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=F(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),r=t&&F(t,'a[data-pc-section="itemlink"]');r?r.click():t&&t.click();var a=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(a);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var t=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(t.parentKey.split("_")[0]),level:0,parentKey:""}}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(t);!r&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var r=e.container&&!e.container.contains(t.target),a=!(e.target&&(e.target===t.target||e.target.contains(t.target)));r&&a&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){$()||e.hide(t,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return V(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,r=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(a){return t.isValidItem(a)}):-1;return r>-1?r+e+1:e},findPrevItemIndex:function(e){var t=this,r=e>0?V(this.visibleItems.slice(0,e),function(a){return t.isValidItem(a)}):-1;return r>-1?r:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var r=this;this.searchValue=(this.searchValue||"")+t;var a=-1,i=!1;return this.focusedItemInfo.index!==-1?(a=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(c){return r.isItemMatched(c)}),a=a===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(c){return r.isItemMatched(c)}):a+this.focusedItemInfo.index):a=this.visibleItems.findIndex(function(c){return r.isItemMatched(c)}),a!==-1&&(i=!0),a===-1&&this.focusedItemInfo.index===-1&&(a=this.findFirstFocusedItemIndex()),a!==-1&&this.changeFocusedItemIndex(e,a),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,r=F(this.menubar,'li[id="'.concat(t,'"]'));r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",c=[];return e&&e.forEach(function(h,o){var s=(i!==""?i+"_":"")+o,d={item:h,index:o,level:r,key:s,parent:a,parentKey:i};d.items=t.createProcessedItems(h.items,r+1,d,s),c.push(d)}),c},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(r){return r.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(y(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:ie,BarsIcon:he}};function z(n){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(n)}function q(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function Z(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?q(Object(t),!0).forEach(function(r){Ye(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Ye(n,e,t){return(e=$e(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function $e(n){var e=et(n,"string");return z(e)=="symbol"?e:e+""}function et(n,e){if(z(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(z(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var tt=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function nt(n,e,t,r,a,i){var c=x("BarsIcon"),h=x("MenubarSub");return u(),f("div",l({ref:i.containerRef,class:n.cx("root")},n.ptmi("root")),[n.$slots.start?(u(),f("div",l({key:0,class:n.cx("start")},n.ptm("start")),[M(n.$slots,"start")],16)):I("",!0),M(n.$slots,n.$slots.button?"button":"menubutton",{id:a.id,class:L(n.cx("button")),toggleCallback:function(s){return i.menuButtonClick(s)}},function(){var o;return[n.model&&n.model.length>0?(u(),f("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:n.cx("button"),"aria-haspopup":!!(n.model.length&&n.model.length>0),"aria-expanded":a.mobileActive,"aria-controls":a.id,"aria-label":(o=n.$primevue.config.locale.aria)===null||o===void 0?void 0:o.navigation,onClick:e[0]||(e[0]=function(s){return i.menuButtonClick(s)}),onKeydown:e[1]||(e[1]=function(s){return i.menuButtonKeydown(s)})},Z(Z({},n.buttonProps),n.ptm("button"))),[M(n.$slots,n.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[S(c,be(Ie(n.ptm("buttonicon"))),null,16)]})],16,tt)):I("",!0)]}),S(h,{ref:i.menubarRef,id:a.id+"_list",role:"menubar",items:i.processedItems,templates:n.$slots,root:!0,mobileActive:a.mobileActive,tabindex:"0","aria-activedescendant":a.focused?i.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?i.focusedItemId:void 0,activeItemPath:a.activeItemPath,level:0,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),n.$slots.end?(u(),f("div",l({key:1,class:n.cx("end")},n.ptm("end")),[M(n.$slots,"end")],16)):I("",!0)],16)}re.render=nt;const it=["href","onClick"],rt={class:"ml-2"},at=["href","target"],st={class:"ml-2"},ot={key:0,class:"pi pi-fw pi-angle-down ml-2"},ut={class:"flex align-items-center gap-2"},ct=["href","onClick"],mt={class:"ml-2"},lt=["href","target"],dt={class:"ml-2"},ft={key:0,class:"pi pi-angle-right ml-auto"},It=pe({__name:"NavbarComponent",setup(n){const e=G([{label:"Protokolle",icon:"pi pi-list",route:"/"},{label:"User",icon:"pi pi-users",route:"/user"},{label:"Administration",icon:"pi pi-bolt",items:[{label:"Kunden",icon:"pi pi-briefcase",route:"/clients"}]}]),t=G(),r=G([{label:"Profil bearbeiten",icon:"pi pi-cog",route:"/profile"},{separator:!0},{label:"Logout",icon:"pi pi-times",route:"/logout"}]),a=i=>{t.value.toggle(i)};return(i,c)=>{const h=x("router-link"),o=ne,s=te,d=j("ripple");return u(),p(U(re),{model:e.value},{start:k(()=>[S(U(ge),{src:"https://placehold.co/50?text=Logo",alt:"Image",width:"50",class:"ml-1 mr-2"})]),item:k(({item:m,props:b,hasSubmenu:R,root:H})=>[m.route?(u(),p(h,{key:0,to:m.route,custom:""},{default:k(({href:_,navigate:ae})=>[A((u(),f("a",l({href:_},b.action,{onClick:ae}),[v("span",{class:L(m.icon)},null,2),v("span",rt,w(m.label),1)],16,it)),[[d]])]),_:2},1032,["to"])):A((u(),f("a",l({key:1,href:m.url,target:m.target},b.action),[v("span",{class:L(m.icon)},null,2),v("span",st,w(m.label),1),R?(u(),f("span",ot)):I("",!0)],16,at)),[[d]])]),end:k(()=>[v("div",ut,[v("div",{onClick:a,"aria-haspopup":"true","aria-controls":"overlay_tmenu",class:"cursor-pointer"},[ve(" Max Mustermann "),S(o,{label:"MM",shape:"circle",size:"large",class:"mx-1"}),S(s,{ref_key:"menu",ref:t,id:"overlay_tmenu",model:r.value,popup:""},{item:k(({item:m,props:b,hasSubmenu:R})=>[m.route?(u(),p(h,{key:0,to:m.route,custom:""},{default:k(({href:H,navigate:_})=>[A((u(),f("a",l({href:H},b.action,{onClick:_}),[v("span",{class:L(m.icon)},null,2),v("span",mt,w(m.label),1)],16,ct)),[[d]])]),_:2},1032,["to"])):A((u(),f("a",l({key:1,href:m.url,target:m.target},b.action),[v("span",{class:L(m.icon)},null,2),v("span",dt,w(m.label),1),R?(u(),f("span",ft)):I("",!0)],16,lt)),[[d]])]),_:1},8,["model"])])])]),_:1},8,["model"])}}});export{It as _};
