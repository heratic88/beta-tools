import{R as s,g as i}from"./RollerImage.fbd3a9ac.js";import{_ as c,r as l,o as t,c as a,b as g,e as d,a as m}from"./index.e1869071.js";const u={components:{RollerImage:s},data(){return{configLoaded:!1,imageUrl:null,backgroundImageUrl:null,barSpeed:null,barHeight:null}},computed:{},mounted(){this.loadConfig()},methods:{loadConfig(){let r=this.$route.params.config;r=i.decode(r);const e=JSON.parse(r);this.imageUrl=e.image,this.backgroundImageUrl=e.background,this.barSpeed=e.speed,this.barHeight=e.height,this.$nextTick(()=>{this.configLoaded=!0})}}},h={class:"flex h-screen w-screen items-center justify-center bg-black"},p=m("div",{class:"fixed top-0 left-0 bottom-0 right-0 z-50"},null,-1),b={key:0};function f(r,e,_,k,o,U){const n=l("RollerImage");return t(),a("div",h,[p,o.configLoaded?(t(),a("div",b,[g(n,{imageUrl:o.imageUrl,backgroundImageUrl:o.backgroundImageUrl,barHeight:o.barHeight,barSpeed:o.barSpeed},null,8,["imageUrl","backgroundImageUrl","barHeight","barSpeed"])])):d("",!0)])}const x=c(u,[["render",f]]);export{x as default};
