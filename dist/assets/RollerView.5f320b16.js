import{R as s,g as c}from"./RollerImage.d868042f.js";import{_ as i,r as l,o as a,c as t,b as g,e as d}from"./index.26eedb43.js";const m={components:{RollerImage:s},data(){return{configLoaded:!1,imageUrl:null,backgroundImageUrl:null,barSpeed:null,barHeight:null}},computed:{},mounted(){this.loadConfig()},methods:{loadConfig(){let r=this.$route.params.config;r=c.decode(r);const e=JSON.parse(r);this.imageUrl=e.image,this.backgroundImageUrl=e.background,this.barSpeed=e.speed,this.barHeight=e.height,this.$nextTick(()=>{this.configLoaded=!0})}}},u={class:"flex h-screen w-screen items-center justify-center bg-black"},p={key:0};function h(r,e,b,f,o,_){const n=l("RollerImage");return a(),t("div",u,[o.configLoaded?(a(),t("div",p,[g(n,{imageUrl:o.imageUrl,backgroundImageUrl:o.backgroundImageUrl,barHeight:o.barHeight,barSpeed:o.barSpeed},null,8,["imageUrl","backgroundImageUrl","barHeight","barSpeed"])])):d("",!0)])}const I=i(m,[["render",h]]);export{I as default};
