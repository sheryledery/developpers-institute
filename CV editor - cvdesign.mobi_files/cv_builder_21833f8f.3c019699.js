(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cv_builder~21833f8f"],{"0a1a":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"grid",class:{"active-viewer":t.activarModoPopUpPDF}},[n("div",{staticClass:"editor-box"},[n("div",{staticClass:"editor"},[n("editorComponent")],1),n("buttonSwitcherViewMobile",{on:{BUTTON_CLICK:function(e){return t.switchViews()}}})],1),n("div",{staticClass:"viewer"},[n("viewerPdfComponent",{attrs:{isShowingMobile:t.activarModoPopUpPDF},on:{CLOSE_PDF_VIEW:function(e){t.activarModoPopUpPDF=!1},SYNC_DOC:function(e){return t.syncronize_doc()}}})],1)]),n("selectTemplate",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters["cvGlobalStore/showSelectorScreen"],expression:"$store.getters['cvGlobalStore/showSelectorScreen']"}],on:{SYNC_DOC:function(e){return t.syncronize_doc()}}}),t.$store.getters["cvGlobalStore/showEditorImage"]?n("editorImages"):t._e(),t.$store.getters["cvGlobalStore/showPaymentInterface"]?n("paymentInterfaceModalSubscription",{on:{PAYMENT_SUCCESS:t.payment_success},scopedSlots:t._u([{key:"content_header",fn:function(){return[n("h1",{domProps:{innerHTML:t._s(t.$t("payment.title"))}})]},proxy:!0},{key:"content_left",fn:function(){return[n("div",{staticClass:"box1"},[n("p",{domProps:{innerHTML:t._s(t.$t("payment.description2"))}}),n("ul",t._l(t.$t("premium_features"),(function(e){return n("li",{key:e},[n("font-awesome-icon",{attrs:{icon:["fas","check"]}}),t._v(t._s(e))],1)})),0),n("div",{staticClass:"title",domProps:{innerHTML:t._s(t.$t("payment.protected"))}}),n("div",{staticClass:"brands"},[n("font-awesome-icon",{attrs:{icon:["fab","cc-stripe"]}}),n("font-awesome-icon",{attrs:{icon:["fab","cc-visa"]}}),n("font-awesome-icon",{attrs:{icon:["fab","cc-mastercard"]}}),n("font-awesome-icon",{attrs:{icon:["fab","cc-jcb"]}})],1)])]},proxy:!0}],null,!1,4130381627)}):t._e()],1)},i=[],a=n("3242"),o=n("351f"),r=n("7b35"),c=n("2850"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ModalBackBlur",[[n("CardModal",{attrs:{maxWidth:"large"}},[n("div",{staticClass:"editor--content"},[n("div",{staticClass:"close",on:{click:function(e){return t.$store.commit("cvGlobalStore/showHideEditorImage")}}},[n("BgIconSmall",{attrs:{iconName:"times",color:"primary"}})],1),n("h1",{domProps:{innerHTML:t._s(t.$t("editor_image.title"))}}),n("div",{staticClass:"grid"},[n("div",{staticClass:"cropper-wrapper",class:{show:t.show}},[n("VueCropper",{ref:"cropper",attrs:{src:t.userImageCV,"aspect-ratio":1,cropBoxMovable:!1,"img-style":{width:"100%",height:"100%"},containerStyle:{width:"100%",height:"100%",display:"flex",alignContent:"center",justifyContent:"center"},cropBoxResizable:!1,"drag-mode":"move","view-mode":1,background:!1,guides:!1,center:!1,autoCropArea:1,zoomOnWheel:!1,toggleDragModeOnDblclick:!1},on:{ready:t.init}})],1),n("div",{staticClass:"options"},[n("div",{staticClass:"option"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:["fas","search-plus"]}})],1),n("div",{staticClass:"slider"},[n("rangeSlider",{staticClass:"slider",attrs:{min:"0",max:"100",step:"10"},model:{value:t.zoom,callback:function(e){t.zoom=e},expression:"zoom"}})],1)]),n("div",{staticClass:"option"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:["far","sun"]}})],1),n("div",{staticClass:"slider"},[n("rangeSlider",{staticClass:"slider",attrs:{min:"-5",max:"5",step:"1"},model:{value:t.brightness,callback:function(e){t.brightness=e},expression:"brightness"}})],1)]),n("div",{staticClass:"option"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:["fas","adjust"]}})],1),n("div",{staticClass:"slider"},[n("rangeSlider",{staticClass:"slider",attrs:{min:"-5",max:"5",step:"1"},model:{value:t.contrast,callback:function(e){t.contrast=e},expression:"contrast"}})],1)]),n("div",{staticClass:"option"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:["fas","palette"]}})],1),n("div",{staticClass:"slider"},[n("rangeSlider",{staticClass:"slider",attrs:{min:"0",max:"10",step:"1"},model:{value:t.greyScale,callback:function(e){t.greyScale=e},expression:"greyScale"}})],1)]),n("div",{staticClass:"buttons"},[n("div",{staticClass:"button-option",domProps:{innerHTML:t._s(t.$t("common.save"))},on:{click:t.saveImageEdited}})])])])])])]],2)},u=[],d=(n("99af"),n("4de4"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),m=n("95c3"),h=n.n(m),f=(n("6107"),n("c7e3")),p=n.n(f),v=(n("2760"),n("59ca"),{name:"editor-image",components:{VueCropper:h.a,RangeSlider:p.a},data:function(){return{show:!1,zoom:0,brightness:0,contrast:0,greyScale:10,defaultDimension:null}},watch:{zoom:function(){var t=this.zoom/150;this.defaultDimension||(this.defaultDimension={width:this.cropperElement.imageData.width,height:this.cropperElement.imageData.height}),this.cropperElement.scale(t+1)},filtersImage:function(t){this.cropperElement.viewBoxImage.style.filter=t}},computed:{userImageCV:function(){return this.$store.getters["cvStore/user_image_cv"]},filtersImage:function(){return"brightness(".concat(this.factorBrightness,") contrast(").concat(this.factorContrast,") grayscale(").concat(this.factorColor,")")},cropperElement:function(){return this.$refs.cropper.cropper},factorBrightness:function(){return this.brightness/10+1},factorContrast:function(){return this.contrast/10+1},factorColor:function(){return 1-this.greyScale/10}},methods:{saveImageEdited:function(){var t=this,e=this.cropperElement.getCroppedCanvas(),n=e.getContext("2d");n.filter=this.filtersImage,n.drawImage(e,0,0);var s=new URL(this.userImageCV),i=s.pathname.split(".").pop();e.toBlob((function(e){var n=t.$store.getters["userAuthStore/userPrivateID"],s=t.$store.getters["cvStore/curriculum_id"];t.$cvDesignApi("images").uploadImage(n,s,"user_picture.".concat(i),e,void 0,"blob").then(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:setTimeout(Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.commit("cvStore/setUser_image_cv",n),t.$store.commit("cvGlobalStore/showHideEditorImage"),t.$syncResume();case 3:case"end":return e.stop()}}),e)}))),500);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){return console.log(t)}))}))},init:function(){this.cropperElement.imageData;var t=this.cropperElement.getCropBoxData(),e=this.cropperElement.getCanvasData(),n=250,s=250,i=e.width,a=e.height;i>a?(a=s,i*=s/a):i<a?(a*=n/i,i=n):(i=n,a=s),250==i&&250==a?(this.$refs.cropper.setCropBoxData({top:25,left:t.left+25,width:250,height:250}),this.$refs.cropper.setCanvasData({top:25,left:(this.cropperElement.container.offsetWidth-i)/2,width:i,height:a})):(this.$refs.cropper.setCanvasData({top:25,left:(this.cropperElement.container.offsetWidth-i)/2,width:i,height:a}),this.$refs.cropper.setCropBoxData({top:25,left:t.left+25,width:250,height:250})),this.show=!0},change:function(){console.log("change")}}}),_=v,g=(n("0cf8"),n("2877")),b=Object(g["a"])(_,l,u,!1,null,"cec9601a",null),w=b.exports,C=n("df7a"),x=n("a5ef"),y={name:"cv_builder",mixins:[a["a"]],components:{viewerPdfComponent:o["a"],editorComponent:r["a"],selectTemplate:c["a"],editorImages:w,paymentInterfaceModalSubscription:x["a"],buttonSwitcherViewMobile:C["a"]},data:function(){return{activarModoPopUpPDF:!1}},computed:{},created:function(){},methods:{switchViews:function(){this.activarModoPopUpPDF=!this.activarModoPopUpPDF},syncronize_doc:function(){this.$syncResume()},payment_success:function(){var t=this;setTimeout((function(){t.MIXIN_downloadCV()}),1e3)}}},S=y,k=(n("9091"),Object(g["a"])(S,s,i,!1,null,"b8cd97f0",null));e["default"]=k.exports},"0cf8":function(t,e,n){"use strict";var s=n("ab65"),i=n.n(s);i.a},"0fb4":function(t,e,n){},"27c7":function(t,e,n){"use strict";var s=n("9e7f"),i=n.n(s);i.a},2850:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"animation-box-selector-1","enter-active-class":"custom-enter-slide-left","leave-active-class":"custom-leave-slide-left",appear:""}},[n("div",{staticClass:"box-selector"},[n("div",{staticClass:"background"},[n("div",{staticClass:"box-templates"},[n("div",{staticClass:"header"},[n("div",{staticClass:"button-back",domProps:{innerHTML:t._s(t.$t("selector_template.back_button"))},on:{click:function(e){return t.$store.commit("cvGlobalStore/showHideSelectorScreen")}}})]),n("div",{staticClass:"box1"},[n("vuescroll",{attrs:{ops:t.ops}},[n("div",{staticClass:"grid-templates"},[n("div",{staticClass:"box-tittle"},[n("h1",{domProps:{innerHTML:t._s(t.$t("selector_template.title"))}})]),t._l(t.listTemplates,(function(e){return n("div",{key:e.template_id,staticClass:"box"},[n("div",{staticClass:"box-image",class:{selected:e._id==t.templateSelected}},[n("div",{staticClass:"img",on:{click:function(n){return t.changeTemplate(e)}}},["cover-letters"==t.typeTemplates?[n("img",{attrs:{src:"/img/cover-letters/"+e.thumbnail}})]:[n("picture",[n("source",{attrs:{srcset:t.fileExtensionImage(e.thumbnail),type:"image/webp"}}),n("source",{attrs:{srcset:t.fileExtensionImage(e.thumbnail).replace(".webp",".png"),type:"image/png"}}),n("img",{attrs:{src:t.fileExtensionImage(e.thumbnail).replace(".webp",".png")}})])]],2),n("div",{staticClass:"colors"},t._l(e.option_color_2,(function(t,e){return n("div",{key:e,staticClass:"color",style:"background-color: "+t})})),0),n("div",{staticClass:"colors"},t._l(e.option_color,(function(t,e){return n("div",{key:e,staticClass:"color",style:"background-color: "+t})})),0)])])}))],2)])],1)])])])])},i=[],a=(n("99af"),n("96cf"),n("1da1")),o=n("2901"),r=n.n(o),c=n("5437"),l={name:"selector-template-view",components:{vuescroll:r.a,canvasPdf:c["a"]},props:{typeTemplates:{type:String,default:null}},data:function(){return{ops:{vuescroll:{mode:"native",sizeStrategy:"percent",detectResize:!0},scrollPanel:{initialScrollY:!1,initialScrollX:!1,scrollingX:!1,scrollingY:!0,speed:300,easing:"easeInQuad",verticalNativeBarPos:"right"},rail:{background:"#fff",opacity:0,size:"4px",specifyBorderRadius:!1,gutterOfEnds:null,gutterOfSide:"2px",keepShow:!1},bar:{showDelay:3e3,onlyShowBarOnScroll:!0,keepShow:!0,background:"#fff",opacity:1,specifyBorderRadius:!1,minSize:0,size:"4px",disable:!1}}}},methods:{changeTemplate:function(t){this.$store.commit("cvTemplateStore/set_template_id",t._id),this.$emit("SYNC_DOC")},fileExtensionImage:function(t){return"/img/resumes/".concat(this.$store.getters["webConfStore/language"]).concat(t)}},computed:{listTemplates:function(){return this.$store.getters["cvTemplatesStore/listTemplates"]},templateSelected:function(){return this.$store.getters["cvTemplateStore/template_id"]},linkImage:function(){}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!=t.listTemplates.length){e.next=3;break}return e.next=3,t.$cvDesignApi("templates").getAll().then((function(e){t.$store.commit("cvTemplatesStore/updateListTemplates",e.templates)}));case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){},beforeDestroy:function(){}},u=l,d=(n("2e8d"),n("2877")),m=Object(d["a"])(u,s,i,!1,null,"86f075d4",null);e["a"]=m.exports},"288a":function(t,e,n){},"2a55":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-column"},[n("div",{staticClass:"content__editor"},[n("div",{staticClass:"effect",class:{active:t.focus}}),n("EditorMenuBar",{staticClass:"menu-bar",attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.commands,i=e.isActive;return[n("div",{staticClass:"menu-options"},[n("div",{on:{click:s.bold}},[n("bottonMenuEditor",{staticClass:"black",class:{"is-active":i.bold()}},[t._v("B")])],1),n("div",{on:{click:s.italic}},[n("bottonMenuEditor",{staticClass:"italic",class:{"is-active":i.italic()}},[t._v("i")])],1),n("div",{on:{click:s.underline}},[n("bottonMenuEditor",{staticClass:"underline",class:{"is-active":i.underline()}},[t._v("U")])],1),n("div",{staticClass:"separator"}),n("div",{on:{click:s.ordered_list}},[n("bottonMenuEditor",{class:{"is-active":i.ordered_list()}},[n("font-awesome-icon",{attrs:{icon:["fas","list-ol"]}})],1)],1),n("div",{on:{click:s.bullet_list}},[n("bottonMenuEditor",{class:{"is-active":i.bullet_list()}},[n("font-awesome-icon",{attrs:{icon:["fas","list-ul"]}})],1)],1)])]}}])}),n("EditorContent",{attrs:{editor:t.editor,ondrop:""}}),n("div",{staticClass:"characters"},[n("p",[t._v("Words: "),n("span",[t._v(t._s(t.countWords))])])])],1)])},i=[],a=(n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("1276"),n("498a"),n("cd42")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-editor"},[t._t("default")],2)},r=[],c={name:"button-menu-editor"},l=c,u=(n("c493"),n("2877")),d=Object(u["a"])(l,o,r,!1,null,"8595fc2a",null),m=d.exports,h=n("f23d"),f={name:"text-editor",components:{EditorContent:a["b"],EditorMenuBar:a["c"],bottonMenuEditor:m},props:{text:{type:String}},data:function(){var t=this;return{focus:!1,editor:new a["a"]({extensions:[new h["e"],new h["b"],new h["d"],new h["f"],new h["g"],new h["a"],new h["c"],new h["h"]],onFocus:function(){return t.focus=!0},onBlur:function(){return t.focus=!1},onUpdate:function(e){e.getJSON;var n=e.getHTML;t.html=n()},content:this.text}),html:this.text}},created:function(){},computed:{countCharacters:function(){return this.html.trim().replace(/(<([^>]+)>)/gi,"").length},countWords:function(){if(this.html){var t=this.html.trim().replace(/(<([^>]+)>)/gi,"").trim();return""==t?0:t.split(" ").length}return 0}},watch:{html:function(t){var e=new RegExp("&nbsp;","g");this.$emit("ADDED_TEXT_TO_EDITOR",t.replace(e," "))}},beforeDestroy:function(){this.editor.destroy()}},p=f,v=(n("47d1"),Object(u["a"])(p,s,i,!1,null,"33904748",null));e["a"]=v.exports},"2e8d":function(t,e,n){"use strict";var s=n("bc24"),i=n.n(s);i.a},4643:function(t,e,n){},"47d1":function(t,e,n){"use strict";var s=n("4643"),i=n.n(s);i.a},"4e5f":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group"},[n("label",{staticClass:"label-name"},[t._v(t._s(t.$t("cv_builder.label:date_init")+" & "+t.$t("cv_builder.label:date_final")))]),n("div",{staticClass:"grid"},[n("div",{staticClass:"dater"},[n("div",{staticClass:"input-group",on:{click:function(e){return t.showStart()}}},[n("div",{staticClass:"fake-input"},[t._v(t._s(t.start_date_txt_lite)),n("span",{class:{active:t.show_start}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show_start,expression:"show_start"}],staticClass:"box-dates transformLeft"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"years"},[n("div",{staticClass:"minus",on:{click:function(e){t.start_year--}}},[n("font-awesome-icon",{attrs:{icon:["fas","chevron-up"]}})],1),n("div",{staticClass:"year",on:{click:function(e){t.start_month=null}}},[t._v(t._s(t.start_year))]),n("div",{staticClass:"plus",on:{click:function(e){t.start_year++}}},[n("font-awesome-icon",{attrs:{icon:["fas","chevron-down"]}})],1)]),n("div",{staticClass:"months"},t._l(t.months,(function(e,s){return n("div",{key:e,on:{click:function(e){t.start_month=s}}},[t._v(t._s(e.slice(0,3)))])})),0)])])]),n("div",{staticClass:"dater"},[n("div",{staticClass:"input-group",on:{click:function(e){return t.showEnd()}}},[n("div",{staticClass:"fake-input"},[t._v(t._s(t.end_date_txt_lite)),n("span",{class:{active:t.show_end}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show_end,expression:"show_end"}],staticClass:"box-dates transformRight"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"years"},[n("div",{staticClass:"minus",on:{click:function(e){t.end_year--}}},[n("font-awesome-icon",{attrs:{icon:["fas","chevron-up"]}})],1),n("div",{staticClass:"year",on:{click:function(e){t.end_month=null}}},[t._v(t._s(t.end_year))]),n("div",{staticClass:"plus",on:{click:function(e){t.end_year++}}},[n("font-awesome-icon",{attrs:{icon:["fas","chevron-down"]}})],1)]),n("div",{staticClass:"months"},t._l(t.months,(function(e,s){return n("div",{key:e,on:{click:function(e){t.end_month=s}}},[t._v(t._s(e.slice(0,3)))])})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:t.actual,expression:"actual"}],staticClass:"disabled"})]),n("div",{staticClass:"bottom",on:{click:function(e){t.actual=!t.actual}}},[n("inputCheckbox",{attrs:{iconName:"check",color:"green","color-hover":"green",showIcon:t.actual}}),n("label",{domProps:{innerHTML:t._s(t.$t("cv_builder.label:actual"))}})],1)])])])])},i=[],a=(n("caad"),n("fb6a"),n("ac1f"),n("1276"),n("3df8")),o=n("e63d"),r={name:"input-time",components:{inputGroupText:a["a"],inputCheckbox:o["a"]},props:{InObjectDate:{type:Object,default:null}},data:function(){return{show_start:!1,show_end:!1,start_year:2020,end_year:2020,txt_end_year:2020,start_month:null,end_month:null,actual:!1,months:this.$t("months")}},created:function(){this.$emit("TXT",{start_date_txt:this.start_date_txt,end_date_txt:this.end_date_txt}),this.$emit("SET_DATA",this.objectDateTime)},methods:{showStart:function(){this.show_end=!1,this.show_start=!this.show_start},showEnd:function(){this.show_start=!1,this.show_end=!this.show_end},eventClick:function(t){var e=["minus","plus","input-group","fake-input","box-dates","years","label-name","svg-inline--fa","bottom"];e.includes(t.srcElement.className)||(this.show_end=!1,this.show_start=!1,window.removeEventListener("click",this.eventClick,!0))}},computed:{start_date_txt:function(){return(null!==this.start_month?"".concat(this.months[this.start_month],", "):"")+this.start_year},end_date_txt:function(){return(null!==this.end_month?"".concat(this.months[this.end_month],", "):"")+this.txt_end_year},start_date_txt_lite:function(){return(null!==this.start_month?"".concat(this.months[this.start_month].slice(0,3),", "):"")+this.start_year},end_date_txt_lite:function(){return(null!==this.end_month?"".concat(this.months[this.end_month].slice(0,3),", "):"")+this.txt_end_year},objectDateTime:function(){return{startDate:this.start_year+(null!==this.start_month?":"+this.start_month:""),endDate:this.end_year+(null!==this.end_month?":"+this.end_month:""),isActual:this.actual}}},watch:{InObjectDate:function(t){if(""!=t.teme_section_date_from||""!=t.teme_section_date_until){var e=t.teme_section_date_from.split(":");this.start_year=e[0],e[1]&&(this.start_month=e[1]);var n=t.teme_section_date_until.split(":");this.end_year=n[0],n[1]&&(this.end_month=n[1]),this.actual=t.teme_section_date_actual}},show_start:function(t){t&&window.addEventListener("click",this.eventClick,!0)},show_end:function(t){t&&window.addEventListener("click",this.eventClick,!0)},end_year:function(t){this.txt_end_year=null,this.txt_end_year=t},actual:function(t){1==t?(this.end_month=null,this.txt_end_year=null,this.txt_end_year=this.$t("cv_builder.label:actual")):(this.txt_end_year=null,this.txt_end_year=this.end_year)},start_date_txt:function(){this.$emit("TXT",{start_date_txt:this.start_date_txt,end_date_txt:this.end_date_txt}),this.$emit("SET_DATA",this.objectDateTime)},end_date_txt:function(){this.$emit("TXT",{start_date_txt:this.start_date_txt,end_date_txt:this.end_date_txt}),this.$emit("SET_DATA",this.objectDateTime)}}},c=r,l=(n("b974"),n("2877")),u=Object(l["a"])(c,s,i,!1,null,"7855fd4b",null);e["a"]=u.exports},"82e9":function(t,e,n){},8506:function(t,e,n){},"87ba":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"input-group",class:{disabled:t.uploadDisabled}},[n("div",{staticClass:"button-image",on:{click:function(e){return t.clickUploadImg()}}},[n("transition",{attrs:{name:"profile_image_switcher","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.image||0!=t.currentStatus?t._e():n("div",{key:1,staticClass:"box-img"},[n("font-awesome-icon",{attrs:{icon:["fas","user"]}})],1),1==t.currentStatus?n("div",{key:2,staticClass:"box-img"},[n("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:["fas","circle-notch"]}})],1):t._e(),t.image&&0==t.currentStatus?n("div",{key:3,staticClass:"box-img"},[n("img",{attrs:{src:t.image}})]):t._e()])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.image,expression:"image"}],staticClass:"group-buttons"},[n("div",{staticClass:"button edit",on:{click:function(e){return t.openEditorImg()}}},[n("font-awesome-icon",{attrs:{icon:["fas","magic"]}}),t._v(t._s(t.$t("cv_builder.label:edit_img")))],1),n("div",{staticClass:"button delete",on:{click:t.deleteImage}},[n("font-awesome-icon",{attrs:{icon:["fas","trash-alt"]}}),t._v(t._s(t.$t("cv_builder.label:delete_img")))],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.image,expression:"!image"}],staticClass:"button text",on:{click:function(e){return t.clickUploadImg()}}},[t._v(t._s(t.$t("cv_builder.label:upload_img")))]),n("input",{ref:"inputFile",attrs:{type:"file",accept:"image/*"},on:{change:function(e){return t.event_inputFileChange(e.target.files)}}})])])},i=[],a=(n("99af"),n("b0c0"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),o=n("59ca"),r=n.n(o),c=0,l=1,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400;return new Promise((function(s){var i=new Image;i.src=t,i.onload=function(){var t=document.createElement("canvas"),a=e,o=n,r=i.width,c=i.height;r>c?r>a&&(c*=a/r,r=a):c>o&&(r*=o/c,c=o),t.width=r,t.height=c;var l=t.getContext("2d");l.drawImage(i,0,0,r,c),s(t.toDataURL())}}))},d=function(t,e){var n=new FileReader;n.onload=function(t){e(null,t.target.result)},n.onerror=function(t){e(t)},n.readAsDataURL(t)},m={name:"input-file-image",props:{image:{type:String,default:null}},data:function(){return{currentStatus:c,uploadDisabled:!0}},created:function(){var t=this;r.a.auth().onIdTokenChanged((function(e){e&&(t.uploadDisabled=!1)}))},methods:{clickUploadImg:function(){this.uploadDisabled||(this.$refs.inputFile.value=[],this.$refs.inputFile.click())},deleteImage:function(){var t=this,e=this.$store.getters["userAuthStore/userPrivateID"],n=this.$store.getters["cvStore/curriculum_id"],s=r.a.storage().ref(),i=new URL(this.image);s.child("".concat(e,"/thumbs/").concat(n,"/user_picture.").concat(i.pathname.split(".").pop())).delete().then((function(){t.$emit("CHANGE_IMAGE","")})).catch((function(t){}))},event_inputFileChange:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.length>0&&(e.currentStatus=l,s=t[0],d(s,function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,i){var o,r,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,u(i,450,450);case 4:o=t.sent,r=e.$store.getters["userAuthStore/userPrivateID"],l=e.$store.getters["cvStore/curriculum_id"],e.$cvDesignApi("images").uploadImage(r,l,"user_picture.".concat(s.name.split(".").pop()),o,s.contenType,"string").then(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:setTimeout(Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$emit("CHANGE_IMAGE",n),e.currentStatus=c,window.document.body.getBoundingClientRect().width>690&&e.$store.commit("cvGlobalStore/showHideEditorImage");case 3:case"end":return t.stop()}}),t)}))),1e3);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return console.log(t)}));case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 1:case"end":return n.stop()}}),n)})))()},openEditorImg:function(){window.document.body.getBoundingClientRect().width<690?this.clickUploadImg():this.$store.commit("cvGlobalStore/showHideEditorImage")}},computed:{isInitial:function(){return this.currentStatus===c},isSaving:function(){return this.currentStatus===l},isSuccess:function(){return this.currentStatus===STATUS_SUCCESS},isFailed:function(){return this.currentStatus===STATUS_FAILED}}},h=m,f=(n("ab24"),n("2877")),p=Object(f["a"])(h,s,i,!1,null,"df727b3e",null);e["a"]=p.exports},9091:function(t,e,n){"use strict";var s=n("288a"),i=n.n(s);i.a},"9e7f":function(t,e,n){},ab24:function(t,e,n){"use strict";var s=n("8506"),i=n.n(s);i.a},ab65:function(t,e,n){},b974:function(t,e,n){"use strict";var s=n("82e9"),i=n.n(s);i.a},bc24:function(t,e,n){},c493:function(t,e,n){"use strict";var s=n("cbde"),i=n.n(s);i.a},cbde:function(t,e,n){},df7a:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"switcher",on:{click:function(e){return t.$emit("BUTTON_CLICK")}}},[n("div",{staticClass:"button",class:{hide:t.hide}},[n("div",{staticClass:"txt",domProps:{innerHTML:t._s(t.$t("cv_builder.switch_button"))}}),n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:["fas","file-alt"]}})],1)])])},i=[],a=(n("1209"),{name:"button_switcher_view_mobile",data:function(){return{hide:!1,scrollPos:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(t){document.body.getBoundingClientRect().top>this.scrollPos?this.hide=!1:this.hide=!0,this.scrollPos=document.body.getBoundingClientRect().top}}}),o=a,r=(n("e6d0"),n("2877")),c=Object(r["a"])(o,s,i,!1,null,"6ee41a80",null);e["a"]=c.exports},e63d:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-icon"},[n("font-awesome-icon",{attrs:{icon:["far","square"]}}),n("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.showIcon,expression:"showIcon"}],attrs:{icon:[t.iconType,t.iconName]}}),n("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.showIcon,expression:"showIcon"}],class:"color--"+t.color+" color-hover--"+t.colorHover,attrs:{icon:[t.iconType,t.iconName]}})],1)},i=[],a={name:"input-checkbox",props:{iconType:{type:String,default:"fas"},iconName:String,color:{type:String,default:"green"},colorHover:{type:String,default:"green"},showIcon:{type:Boolean,default:!0}}},o=a,r=(n("27c7"),n("2877")),c=Object(r["a"])(o,s,i,!1,null,"df76b6c8",null);e["a"]=c.exports},e6d0:function(t,e,n){"use strict";var s=n("0fb4"),i=n.n(s);i.a}}]);