(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a971f9dc"],{"0324":function(e,t,i){},7568:function(e,t,i){"use strict";var n=i("0324"),s=i.n(n);s.a},9005:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"form_formation_section",staticClass:"box-formation"},[i("div",{staticClass:"head"},[i("div",{staticClass:"titles",class:{active:e.show},on:{click:function(t){return e.$emit("SET_SHOW_MODEL",e.getFormationModel.cuuid)}}},[i("div",{staticClass:"header"},[e._v(e._s(e.getTitleTeme))]),i("div",{staticClass:"subtitle"},[e._v(e._s(e.getDatesTeme))])]),i("div",{staticClass:"buttons"},[i("div",{staticClass:"edit-button",class:{active:e.show},on:{click:function(t){return e.$emit("SET_SHOW_MODEL",e.getFormationModel.cuuid)}}},[i("font-awesome-icon",{attrs:{icon:["fas","edit"]}})],1),i("div",{staticClass:"delete-button",on:{click:function(t){return e.deleteThis()}}},[i("font-awesome-icon",{attrs:{icon:["far","trash-alt"]}})],1),i("div",{staticClass:"handle"},[i("font-awesome-icon",{attrs:{icon:["fas","grip-vertical"]}})],1)])]),i("div",{staticClass:"form-box",class:{isClosed:!e.show}},[i("div",{staticClass:"grid"},[i("inputGroupText",{attrs:{label:e.$t("cv_builder.label:referece_person_contact"),name:"teme_section_person_name",typeInput:"text"},model:{value:e.teme_section_person_name,callback:function(t){e.teme_section_person_name=t},expression:"teme_section_person_name"}}),i("inputGroupText",{attrs:{label:e.$t("cv_builder.label:referece_company"),name:"teme_section_company",typeInput:"text"},model:{value:e.teme_section_company,callback:function(t){e.teme_section_company=t},expression:"teme_section_company"}}),i("inputGroupText",{attrs:{label:e.$t("cv_builder.label:phone"),name:"teme_section_person_phone",typeInput:"text"},model:{value:e.teme_section_person_phone,callback:function(t){e.teme_section_person_phone=t},expression:"teme_section_person_phone"}}),i("inputGroupText",{attrs:{label:e.$t("cv_builder.label:email"),name:"teme_section_person_email",typeInput:"text"},model:{value:e.teme_section_person_email,callback:function(t){e.teme_section_person_email=t},expression:"teme_section_person_email"}})],1),i("inputToggle",{attrs:{label:e.$t("cv_builder.label:referece_option1"),name:"teme_section_private"},model:{value:e.teme_section_private,callback:function(t){e.teme_section_private=t},expression:"teme_section_private"}}),i("inputToggle",{attrs:{label:e.$t("cv_builder.label:referece_option2"),name:"teme_section_private_phone"},model:{value:e.teme_section_private_phone,callback:function(t){e.teme_section_private_phone=t},expression:"teme_section_private_phone"}}),i("inputToggle",{attrs:{label:e.$t("cv_builder.label:referece_option3"),name:"teme_section_private_email"},model:{value:e.teme_section_private_email,callback:function(t){e.teme_section_private_email=t},expression:"teme_section_private_email"}})],1)])},s=[],o=(i("7db0"),i("a9e3"),i("3df8")),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"input-group"},[i("label",{staticClass:"switch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.isChecked,expression:"isChecked"}],attrs:{type:"checkbox",name:e.name},domProps:{checked:Array.isArray(e.isChecked)?e._i(e.isChecked,null)>-1:e.isChecked},on:{change:function(t){var i=e.isChecked,n=t.target,s=!!n.checked;if(Array.isArray(i)){var o=null,a=e._i(i,o);n.checked?a<0&&(e.isChecked=i.concat([o])):a>-1&&(e.isChecked=i.slice(0,a).concat(i.slice(a+1)))}else e.isChecked=s}}}),i("span",{staticClass:"slider round"})]),i("label",{staticClass:"text",attrs:{name:e.name},domProps:{innerHTML:e._s(e.label)}})])},c=[],_={name:"input-checkbox",props:{value:Boolean,label:{type:String,default:"Empty"},name:{type:String,default:null}},data:function(){return{isChecked:this.value}},watch:{isChecked:function(e){this.$emit("input",e)},value:function(e){this.isChecked=e}}},r=_,l=(i("7568"),i("2877")),m=Object(l["a"])(r,a,c,!1,null,"0073a5ba",null),p=m.exports,u=i("bf63"),h=i("a748"),d={name:"form-reference",components:{inputGroupText:o["a"],inputToggle:p},props:{id:String,cuuid:String,position:Number,show:Boolean},watch:{position:function(e){u["a"].update({where:this.id,data:{section_position:e+1}})}},data:function(){return{updater$:null,teme_section_person_name:"",teme_section_company:"",teme_section_person_phone:"",teme_section_person_email:"",teme_section_private:!1,teme_section_private_phone:!1,teme_section_private_email:!1}},mounted:function(){this.teme_section_person_name=this.getFormationModel.section_person_name,this.teme_section_company=this.getFormationModel.section_company,this.teme_section_person_phone=this.getFormationModel.section_person_phone,this.teme_section_person_email=this.getFormationModel.section_person_email,this.teme_section_private=this.getFormationModel.section_private,this.teme_section_private_phone=this.getFormationModel.section_private_phone,this.teme_section_private_email=this.getFormationModel.section_private_email;var e=Object(h["a"])(this.$watchAsObservable("teme_section_person_name"),this.$watchAsObservable("teme_section_company"),this.$watchAsObservable("teme_section_person_phone"),this.$watchAsObservable("teme_section_person_email"),this.$watchAsObservable("teme_section_private"),this.$watchAsObservable("teme_section_private_phone"),this.$watchAsObservable("teme_section_private_email"));this.updater$=e.subscribe(this.updateModel)},methods:{updateModel:function(){u["a"].update({where:this.id,data:{section_person_name:this.teme_section_person_name,section_company:this.teme_section_company,section_person_phone:this.teme_section_person_phone,section_person_email:this.teme_section_person_email,section_private:this.teme_section_private,section_private_phone:this.teme_section_private_phone,section_private_email:this.teme_section_private_email}})},deleteThis:function(){this.$refs.form_formation_section.remove(),this.$emit("DELETE_MODEL",this.id)}},computed:{getTitleTeme:function(){var e=this.getFormationModel,t=""==e.section_person_name?this.$t("cv_builder.not_specified"):e.section_person_name;return t},getDatesTeme:function(){var e=this.getFormationModel,t=""==e.section_company?"":e.section_company;return t},getFormationModel:function(){return u["a"].find(this.id)}},beforeDestroy:function(){this.updater$.unsubscribe()}},v=d,b=Object(l["a"])(v,n,s,!1,null,null,null);t["default"]=b.exports}}]);