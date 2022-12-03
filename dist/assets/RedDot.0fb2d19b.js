import{_ as u,o as l,c as a,a as d,e as r,f,w as m,d as g,g as h,t as _,p as v,h as y}from"./index.0aedb84a.js";const b={props:{imageUrl:String,xPercent:Number,yPercent:Number,alwaysVisible:Boolean},data(){return{visible:!1,imageLoaded:!1,dotPositioned:!1,imageWidth:null,imageHeight:null,offsetX:null,offsetY:null,startTime:null,duration:null}},computed:{isLoaded(){return this.imageLoaded&&this.dotPositioned},dotX(){return this.offsetX+this.imageWidth*(this.xPercent/100)-4},dotY(){return this.offsetY+this.imageHeight*(this.yPercent/100)-4},friendlyDuration(){if(!!this.duration)return`${(this.duration/1e3).toFixed(2)} sec`}},methods:{onLoad(){this.imageLoaded=!0,this.$nextTick(()=>{const t=this.$refs.image.getBoundingClientRect();this.imageWidth=t.width,this.imageHeight=t.height,this.offsetX=t.left,this.offsetY=t.top,this.positionDot()})},positionDot(){this.$refs.dot.style.left=`${this.dotX}px`,this.$refs.dot.style.top=`${this.dotY}px`,this.dotPositioned=!0},show(t){t.which===1?(this.visible=!0,this.startTime=performance.now()):(this.visible=!1,this.startTime=null)},hide(){this.visible=!1,this.duration=performance.now()-this.startTime,this.startTime=null},clickImage(t){this.$emit("clickImage",t)}},watch:{xPercent(){this.positionDot()},yPercent(){this.positionDot()}}},c=t=>(v("data-v-90b148d4"),t=t(),y(),t),x={class:"flex fixed items-center justify-center top-0 left-0 bottom-0 right-0"},p={key:0,class:"fixed top-0 left-0 bottom-0 right-0 z-40"},w=["src"],k={class:"dot",ref:"dot"},L={key:0,class:"text-white text-4xl"},D={key:1,class:"text-white text-2 fixed bottom-4 left-16 right-16 text-center"},P=h(" Focus your eyes on the red dot, then tap and hold to reveal the image "),I=c(()=>d("br",null,null,-1)),T=h(" Don't move your eyes! Let go as soon as you do "),V={key:0},S=c(()=>d("br",null,null,-1));function Y(t,i,n,B,o,e){return l(),a("div",null,[d("div",{class:"fixed top-0 left-0 bottom-0 right-0",onMousedown:i[2]||(i[2]=(...s)=>e.show&&e.show(...s)),onMouseup:i[3]||(i[3]=(...s)=>e.hide&&e.hide(...s))},[d("div",x,[n.alwaysVisible?r("",!0):(l(),a("div",p)),d("img",{src:n.imageUrl,class:f(["image object-cover overflow-hidden h-full z-20",{"opacity-0":!o.visible,"opacity-100":o.visible||n.alwaysVisible}]),onLoad:i[0]||(i[0]=(...s)=>e.onLoad&&e.onLoad(...s)),onClick:i[1]||(i[1]=(...s)=>e.clickImage&&e.clickImage(...s)),ref:"image"},null,42,w)])],32),m(d("div",k,null,512),[[g,o.dotPositioned&&!o.visible||n.alwaysVisible]]),e.isLoaded?r("",!0):(l(),a("div",L,"Loading, please wait...")),e.isLoaded&&!o.visible?(l(),a("div",D,[P,I,T,o.duration?(l(),a("div",V,[S,h("You lasted "+_(e.friendlyDuration),1)])):r("",!0)])):r("",!0)])}const X=u(b,[["render",Y],["__scopeId","data-v-90b148d4"]]);export{X as R};
