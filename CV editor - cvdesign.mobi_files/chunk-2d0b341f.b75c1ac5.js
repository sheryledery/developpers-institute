(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b341f"],{2836:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"form_formation_section",staticClass:"box-formation"},[i("div",{staticClass:"head"},[i("div",{staticClass:"titles",class:{active:t.show},on:{click:function(e){return t.$emit("SET_SHOW_MODEL",t.getFormationModel.cuuid)}}},[i("div",{staticClass:"header"},[t._v(t._s(t.getTitleTeme))]),i("div",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))])]),i("div",{staticClass:"buttons"},[i("div",{staticClass:"edit-button",class:{active:t.show},on:{click:function(e){return t.$emit("SET_SHOW_MODEL",t.getFormationModel.cuuid)}}},[i("font-awesome-icon",{attrs:{icon:["fas","edit"]}})],1),i("div",{staticClass:"delete-button",on:{click:function(e){return t.deleteThis()}}},[i("font-awesome-icon",{attrs:{icon:["far","trash-alt"]}})],1),i("div",{staticClass:"handle"},[i("font-awesome-icon",{attrs:{icon:["fas","grip-vertical"]}})],1)])]),i("div",{staticClass:"form-box",class:{isClosed:!t.show}},[i("div",{staticClass:"grid"},[i("inputGroupText",{attrs:{label:t.$t("cv_builder.label:studies"),name:"section_formation_title",typeInput:"text"},model:{value:t.teme_section_title,callback:function(e){t.teme_section_title=e},expression:"teme_section_title"}}),i("inputGroupText",{attrs:{label:t.$t("cv_builder.label:studies_center"),name:"section_formation_employer",typeInput:"text"},model:{value:t.teme_section_center,callback:function(e){t.teme_section_center=e},expression:"teme_section_center"}}),i("inputTime",{attrs:{InObjectDate:{teme_section_date_from:t.teme_section_date_from,teme_section_date_until:t.teme_section_date_until,teme_section_date_actual:t.teme_section_date_actual}},on:{TXT:function(e){return t.subtitle=e.start_date_txt+" - "+e.end_date_txt},SET_DATA:t.setDates}}),i("inputGroupText",{attrs:{label:t.$t("cv_builder.label:studies_city"),name:"section_city",typeInput:"text"},model:{value:t.teme_section_city,callback:function(e){t.teme_section_city=e},expression:"teme_section_city"}})],1),i("textEditor",{attrs:{text:t.getFormationModel.section_description},on:{ADDED_TEXT_TO_EDITOR:function(e){return t.teme_section_description=e}}})],1)])},n=[],o=(i("7db0"),i("a9e3"),i("3df8")),c=i("4e5f"),a=i("2a55"),_=i("098c"),r=i("a748"),l={name:"form-formation",components:{inputGroupText:o["a"],textEditor:a["a"],inputTime:c["a"]},props:{id:String,cuuid:String,position:Number,show:Boolean},watch:{position:function(t){_["a"].update({where:this.id,data:{section_position:t+1}})}},data:function(){return{updater$:null,subtitle:"",teme_section_title:"",teme_section_center:"",teme_section_description:"",teme_section_date_from:"",teme_section_date_until:"",teme_section_date_actual:!1,teme_section_city:""}},mounted:function(){this.teme_section_title=this.getFormationModel.section_title,this.teme_section_center=this.getFormationModel.section_center,this.teme_section_description=this.getFormationModel.section_description,this.teme_section_date_from=this.getFormationModel.section_date_from,this.teme_section_date_until=this.getFormationModel.section_date_until,this.teme_section_date_actual=this.getFormationModel.section_date_actual,this.teme_section_city=this.getFormationModel.section_city;var t=Object(r["a"])(this.$watchAsObservable("teme_section_title"),this.$watchAsObservable("teme_section_center"),this.$watchAsObservable("teme_section_description"),this.$watchAsObservable("teme_section_date_from"),this.$watchAsObservable("teme_section_date_until"),this.$watchAsObservable("teme_section_date_actual"),this.$watchAsObservable("teme_section_city"));this.updater$=t.subscribe(this.updateModel)},methods:{syncDataResume:function(){this.$emit("SYNC_CV")},updateModel:function(){_["a"].update({where:this.id,data:{section_title:this.teme_section_title,section_center:this.teme_section_center,section_description:this.teme_section_description,section_date_from:this.teme_section_date_from,section_date_until:this.teme_section_date_until,section_date_actual:this.teme_section_date_actual,section_city:this.teme_section_city}})},setDates:function(t){this.teme_section_date_from=t.startDate,this.teme_section_date_until=t.endDate,this.teme_section_date_actual=t.isActual},deleteThis:function(){this.$refs.form_formation_section.remove(),this.$emit("DELETE_MODEL",this.id)}},computed:{getTitleTeme:function(){var t=this.getFormationModel,e=""==t.section_title?this.$t("cv_builder.not_specified"):t.section_title,i=""==t.section_center?"":", "+t.section_center;return e+i},getFormationModel:function(){return _["a"].find(this.id)}},beforeDestroy:function(){this.updater$.unsubscribe()}},d=l,u=i("2877"),m=Object(u["a"])(d,s,n,!1,null,null,null);e["default"]=m.exports}}]);