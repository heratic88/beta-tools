import{g as a}from"./base64.04d59941.js";import{R as p,b as m}from"./helpers.70096365.js";import{_ as g,r as f,o as b,c as U,a as r,w as n,v as s,b as v}from"./index.ece10cb4.js";const w="https://cdni.pornpics.com/1280/1/141/21367141/21367141_014_e152.jpg",x={components:{RedDot:p},data(){return{configLoaded:!1,imageUrl:w,videoUrl:null,videoPreviewUrl:null,xPercent:50,yPercent:50}},computed:{config(){return{image:this.imageUrl,video:this.videoUrl,x:parseFloat(this.xPercent),y:parseFloat(this.yPercent)}},configString(){return a.encode(JSON.stringify(this.config))},url(){return this.$router.resolve({name:"red-dot",params:{config:this.configString}}).href}},methods:{clickImage(o){const e=o.target.getBoundingClientRect(),c=o.clientX-e.left,u=o.clientY-e.top;this.xPercent=(c/e.width*100).toFixed(2),this.yPercent=(u/e.height*100).toFixed(2)},copyLink(){this.$refs.copyInput.select(),this.$refs.copyInput.setSelectionRange(0,99999);{const o=window.location.origin+"/beta-tools/"+this.$refs.copyInput.value;navigator.clipboard.writeText(o)}},gotoLink(){this.$router.push(this.url.slice(1))}},watch:{videoUrl(o){o&&(this.videoPreviewUrl=null,this.imageUrl=null),m(o).then(e=>this.videoPreviewUrl=e)},imageUrl(o){o&&(this.videoUrl=null,this.videoPreviewUrl=null)}}},y={class:"flex h-screen w-screen items-center justify-center bg-black"},h={class:"fixed top-10 left-10 border-2 border-black bg-gray-100 w-48 z-50"};function P(o,e,c,u,l,i){const d=f("RedDot");return b(),U("div",y,[r("div",h,[n(r("input",{class:"block w-full border-b",placeholder:"Image URL","onUpdate:modelValue":e[0]||(e[0]=t=>l.imageUrl=t)},null,512),[[s,l.imageUrl]]),n(r("input",{class:"block w-full border-b",placeholder:"Video URL","onUpdate:modelValue":e[1]||(e[1]=t=>l.videoUrl=t)},null,512),[[s,l.videoUrl]]),n(r("input",{class:"block w-full border-b",title:"X Position","onUpdate:modelValue":e[2]||(e[2]=t=>l.xPercent=t),type:"number",min:"0",max:"100"},null,512),[[s,l.xPercent]]),n(r("input",{class:"block w-full border-b",title:"Y Position","onUpdate:modelValue":e[3]||(e[3]=t=>l.yPercent=t),type:"number",min:"0",max:"100"},null,512),[[s,l.yPercent]]),r("button",{class:"bg-blue-500 text-white w-full",onClick:e[4]||(e[4]=(...t)=>i.copyLink&&i.copyLink(...t))},"Copy Link"),r("button",{class:"bg-blue-500 text-white w-full",onClick:e[5]||(e[5]=(...t)=>i.gotoLink&&i.gotoLink(...t))},"Go To Link"),n(r("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>i.url=t),ref:"copyInput",class:"fixed -top-10 -left-10"},null,512),[[s,i.url]])]),v(d,{imageUrl:l.imageUrl,videoUrl:l.videoPreviewUrl,xPercent:parseFloat(l.xPercent),yPercent:parseFloat(l.yPercent),alwaysVisible:!0,onClickImage:i.clickImage},null,8,["imageUrl","videoUrl","xPercent","yPercent","onClickImage"])])}const I=g(x,[["render",P]]);export{I as default};
