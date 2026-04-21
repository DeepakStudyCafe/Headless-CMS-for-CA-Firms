import{r as me,j as L}from"./index-BlB-CK2s.js";const M_=(...i)=>i.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();const xy=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const vy=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());const Mp=i=>{const e=vy(i);return e.charAt(0).toUpperCase()+e.slice(1)};var yy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Sy=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const My=me.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:r="",children:s,iconNode:a,...o},l)=>me.createElement("svg",{ref:l,...yy,width:e,height:e,stroke:i,strokeWidth:n?Number(t)*24/Number(e):t,className:M_("lucide",r),...!s&&!Sy(o)&&{"aria-hidden":"true"},...o},[...a.map(([c,u])=>me.createElement(c,u)),...Array.isArray(s)?s:[s]]));const Gt=(i,e)=>{const t=me.forwardRef(({className:n,...r},s)=>me.createElement(My,{ref:s,iconNode:e,className:M_(`lucide-${xy(Mp(i))}`,`lucide-${i}`,n),...r}));return t.displayName=Mp(i),t};const Ty=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],hf=Gt("arrow-right",Ty);const by=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Ey=Gt("arrow-up-right",by);const Ay=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],wy=Gt("briefcase",Ay);const Cy=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Ry=Gt("building-2",Cy);const Py=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Dy=Gt("calculator",Py);const Ly=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ny=Gt("chevron-down",Ly);const Iy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],T_=Gt("circle-check",Iy);const Uy=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],Fy=Gt("clipboard-check",Uy);const Oy=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],b_=Gt("facebook",Oy);const By=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],ed=Gt("linkedin",By);const ky=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Vy=Gt("loader-circle",ky);const zy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],zc=Gt("mail",zy);const Gy=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],E_=Gt("map-pin",Gy);const Hy=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Wy=Gt("menu",Hy);const Xy=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],td=Gt("phone",Xy);const jy=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],Yy=Gt("receipt",jy);const qy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],$y=Gt("send",qy);const Ky=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],A_=Gt("shield-check",Ky);const Zy=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Jy=Gt("sparkles",Zy);const Qy=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],eS=Gt("trending-up",Qy);const tS=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],nd=Gt("twitter",tS);const nS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],iS=Gt("x",nS);function rS(){return L.jsx("div",{className:"hidden md:block border-b border-white/40 bg-gradient-deep text-xs text-white/90 relative z-50",children:L.jsxs("div",{className:"container mx-auto px-6 flex items-center justify-between h-10",children:[L.jsxs("div",{className:"flex items-center gap-7",children:[L.jsxs("a",{href:"tel:+910000000000",className:"group flex items-center gap-2 hover:text-accent-cyan transition-colors",children:[L.jsx(td,{className:"h-3.5 w-3.5 transition-transform group-hover:rotate-12"}),L.jsx("span",{children:"+91 XXXXX XXXXX"})]}),L.jsxs("a",{href:"mailto:contact@abcassociates.com",className:"group flex items-center gap-2 hover:text-accent-cyan transition-colors",children:[L.jsx(zc,{className:"h-3.5 w-3.5 transition-transform group-hover:scale-110"}),L.jsx("span",{children:"contact@abcassociates.com"})]})]}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("span",{className:"hidden lg:inline mr-2 text-white/60",children:"Follow us"}),[ed,b_,nd].map((i,e)=>L.jsx("a",{href:"#","aria-label":"social",className:"h-7 w-7 grid place-items-center rounded-full bg-white/10 hover:bg-accent-cyan hover:text-dark transition-all hover:-translate-y-0.5",children:L.jsx(i,{className:"h-3.5 w-3.5"})},e))]})]})})}const id=me.createContext({});function rd(i){const e=me.useRef(null);return e.current===null&&(e.current=i()),e.current}const sS=typeof window<"u",w_=sS?me.useLayoutEffect:me.useEffect,Gc=me.createContext(null);function sd(i,e){i.indexOf(e)===-1&&i.push(e)}function dc(i,e){const t=i.indexOf(e);t>-1&&i.splice(t,1)}const sr=(i,e,t)=>t>e?e:t<i?i:t;let ad=()=>{};const Kr={},C_=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function R_(i){return typeof i=="object"&&i!==null}const P_=i=>/^0[^.\s]+$/u.test(i);function D_(i){let e;return()=>(e===void 0&&(e=i()),e)}const Ei=i=>i,aS=(i,e)=>t=>e(i(t)),Wo=(...i)=>i.reduce(aS),Co=(i,e,t)=>{const n=e-i;return n===0?1:(t-i)/n};class od{constructor(){this.subscriptions=[]}add(e){return sd(this.subscriptions,e),()=>dc(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let s=0;s<r;s++){const a=this.subscriptions[s];a&&a(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ci=i=>i*1e3,Mi=i=>i/1e3;function L_(i,e){return e?i*(1e3/e):0}const N_=(i,e,t)=>(((1-3*t+3*e)*i+(3*t-6*e))*i+3*e)*i,oS=1e-7,lS=12;function cS(i,e,t,n,r){let s,a,o=0;do a=e+(t-e)/2,s=N_(a,n,r)-i,s>0?t=a:e=a;while(Math.abs(s)>oS&&++o<lS);return a}function Xo(i,e,t,n){if(i===e&&t===n)return Ei;const r=s=>cS(s,0,1,i,t);return s=>s===0||s===1?s:N_(r(s),e,n)}const I_=i=>e=>e<=.5?i(2*e)/2:(2-i(2*(1-e)))/2,U_=i=>e=>1-i(1-e),F_=Xo(.33,1.53,.69,.99),ld=U_(F_),O_=I_(ld),B_=i=>i>=1?1:(i*=2)<1?.5*ld(i):.5*(2-Math.pow(2,-10*(i-1))),cd=i=>1-Math.sin(Math.acos(i)),k_=U_(cd),V_=I_(cd),uS=Xo(.42,0,1,1),fS=Xo(0,0,.58,1),z_=Xo(.42,0,.58,1),hS=i=>Array.isArray(i)&&typeof i[0]!="number",G_=i=>Array.isArray(i)&&typeof i[0]=="number",dS={linear:Ei,easeIn:uS,easeInOut:z_,easeOut:fS,circIn:cd,circInOut:V_,circOut:k_,backIn:ld,backInOut:O_,backOut:F_,anticipate:B_},pS=i=>typeof i=="string",Tp=i=>{if(G_(i)){ad(i.length===4);const[e,t,n,r]=i;return Xo(e,t,n,r)}else if(pS(i))return dS[i];return i},Qo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function mS(i,e){let t=new Set,n=new Set,r=!1,s=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function l(u){a.has(u)&&(c.schedule(u),i()),u(o)}const c={schedule:(u,h=!1,f=!1)=>{const g=f&&r?t:n;return h&&a.add(u),g.add(u),u},cancel:u=>{n.delete(u),a.delete(u)},process:u=>{if(o=u,r){s=!0;return}r=!0;const h=t;t=n,n=h,t.forEach(l),t.clear(),r=!1,s&&(s=!1,c.process(u))}};return c}const gS=40;function H_(i,e){let t=!1,n=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>t=!0,a=Qo.reduce((M,y)=>(M[y]=mS(s),M),{}),{setup:o,read:l,resolveKeyframes:c,preUpdate:u,update:h,preRender:f,render:d,postRender:g}=a,_=()=>{const M=Kr.useManualTiming,y=M?r.timestamp:performance.now();t=!1,M||(r.delta=n?1e3/60:Math.max(Math.min(y-r.timestamp,gS),1)),r.timestamp=y,r.isProcessing=!0,o.process(r),l.process(r),c.process(r),u.process(r),h.process(r),f.process(r),d.process(r),g.process(r),r.isProcessing=!1,t&&e&&(n=!1,i(_))},p=()=>{t=!0,n=!0,r.isProcessing||i(_)};return{schedule:Qo.reduce((M,y)=>{const A=a[y];return M[y]=(b,w=!1,v=!1)=>(t||p(),A.schedule(b,w,v)),M},{}),cancel:M=>{for(let y=0;y<Qo.length;y++)a[Qo[y]].cancel(M)},state:r,steps:a}}const{schedule:wt,cancel:Zr,state:gn,steps:nu}=H_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ei,!0);let Hl;function _S(){Hl=void 0}const kn={now:()=>(Hl===void 0&&kn.set(gn.isProcessing||Kr.useManualTiming?gn.timestamp:performance.now()),Hl),set:i=>{Hl=i,queueMicrotask(_S)}},W_=i=>e=>typeof e=="string"&&e.startsWith(i),X_=W_("--"),xS=W_("var(--"),ud=i=>xS(i)?vS.test(i.split("/*")[0].trim()):!1,vS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function bp(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const ka={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Ro={...ka,transform:i=>sr(0,1,i)},el={...ka,default:1},fo=i=>Math.round(i*1e5)/1e5,fd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function yS(i){return i==null}const SS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,hd=(i,e)=>t=>!!(typeof t=="string"&&SS.test(t)&&t.startsWith(i)||e&&!yS(t)&&Object.prototype.hasOwnProperty.call(t,e)),j_=(i,e,t)=>n=>{if(typeof n!="string")return n;const[r,s,a,o]=n.match(fd);return{[i]:parseFloat(r),[e]:parseFloat(s),[t]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},MS=i=>sr(0,255,i),iu={...ka,transform:i=>Math.round(MS(i))},vs={test:hd("rgb","red"),parse:j_("red","green","blue"),transform:({red:i,green:e,blue:t,alpha:n=1})=>"rgba("+iu.transform(i)+", "+iu.transform(e)+", "+iu.transform(t)+", "+fo(Ro.transform(n))+")"};function TS(i){let e="",t="",n="",r="";return i.length>5?(e=i.substring(1,3),t=i.substring(3,5),n=i.substring(5,7),r=i.substring(7,9)):(e=i.substring(1,2),t=i.substring(2,3),n=i.substring(3,4),r=i.substring(4,5),e+=e,t+=t,n+=n,r+=r),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}const df={test:hd("#"),parse:TS,transform:vs.transform},jo=i=>({test:e=>typeof e=="string"&&e.endsWith(i)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${i}`}),Or=jo("deg"),tr=jo("%"),De=jo("px"),bS=jo("vh"),ES=jo("vw"),Ep={...tr,parse:i=>tr.parse(i)/100,transform:i=>tr.transform(i*100)},ha={test:hd("hsl","hue"),parse:j_("hue","saturation","lightness"),transform:({hue:i,saturation:e,lightness:t,alpha:n=1})=>"hsla("+Math.round(i)+", "+tr.transform(fo(e))+", "+tr.transform(fo(t))+", "+fo(Ro.transform(n))+")"},Qt={test:i=>vs.test(i)||df.test(i)||ha.test(i),parse:i=>vs.test(i)?vs.parse(i):ha.test(i)?ha.parse(i):df.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?vs.transform(i):ha.transform(i),getAnimatableNone:i=>{const e=Qt.parse(i);return e.alpha=0,Qt.transform(e)}},AS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function wS(i){return isNaN(i)&&typeof i=="string"&&(i.match(fd)?.length||0)+(i.match(AS)?.length||0)>0}const Y_="number",q_="color",CS="var",RS="var(",Ap="${}",PS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wa(i){const e=i.toString(),t=[],n={color:[],number:[],var:[]},r=[];let s=0;const o=e.replace(PS,l=>(Qt.test(l)?(n.color.push(s),r.push(q_),t.push(Qt.parse(l))):l.startsWith(RS)?(n.var.push(s),r.push(CS),t.push(l)):(n.number.push(s),r.push(Y_),t.push(parseFloat(l))),++s,Ap)).split(Ap);return{values:t,split:o,indexes:n,types:r}}function DS(i){return wa(i).values}function $_({split:i,types:e}){const t=i.length;return n=>{let r="";for(let s=0;s<t;s++)if(r+=i[s],n[s]!==void 0){const a=e[s];a===Y_?r+=fo(n[s]):a===q_?r+=Qt.transform(n[s]):r+=n[s]}return r}}function LS(i){return $_(wa(i))}const NS=i=>typeof i=="number"?0:Qt.test(i)?Qt.getAnimatableNone(i):i,IS=(i,e)=>typeof i=="number"?e?.trim().endsWith("/")?i:0:NS(i);function US(i){const e=wa(i);return $_(e)(e.values.map((n,r)=>IS(n,e.split[r])))}const Bi={test:wS,parse:DS,createTransformer:LS,getAnimatableNone:US};function ru(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i}function FS({hue:i,saturation:e,lightness:t,alpha:n}){i/=360,e/=100,t/=100;let r=0,s=0,a=0;if(!e)r=s=a=t;else{const o=t<.5?t*(1+e):t+e-t*e,l=2*t-o;r=ru(l,o,i+1/3),s=ru(l,o,i),a=ru(l,o,i-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:n}}function pc(i,e){return t=>t>0?e:i}const Dt=(i,e,t)=>i+(e-i)*t,su=(i,e,t)=>{const n=i*i,r=t*(e*e-n)+n;return r<0?0:Math.sqrt(r)},OS=[df,vs,ha],BS=i=>OS.find(e=>e.test(i));function wp(i){const e=BS(i);if(!e)return!1;let t=e.parse(i);return e===ha&&(t=FS(t)),t}const Cp=(i,e)=>{const t=wp(i),n=wp(e);if(!t||!n)return pc(i,e);const r={...t};return s=>(r.red=su(t.red,n.red,s),r.green=su(t.green,n.green,s),r.blue=su(t.blue,n.blue,s),r.alpha=Dt(t.alpha,n.alpha,s),vs.transform(r))},pf=new Set(["none","hidden"]);function kS(i,e){return pf.has(i)?t=>t<=0?i:e:t=>t>=1?e:i}function VS(i,e){return t=>Dt(i,e,t)}function dd(i){return typeof i=="number"?VS:typeof i=="string"?ud(i)?pc:Qt.test(i)?Cp:HS:Array.isArray(i)?K_:typeof i=="object"?Qt.test(i)?Cp:zS:pc}function K_(i,e){const t=[...i],n=t.length,r=i.map((s,a)=>dd(s)(s,e[a]));return s=>{for(let a=0;a<n;a++)t[a]=r[a](s);return t}}function zS(i,e){const t={...i,...e},n={};for(const r in t)i[r]!==void 0&&e[r]!==void 0&&(n[r]=dd(i[r])(i[r],e[r]));return r=>{for(const s in n)t[s]=n[s](r);return t}}function GS(i,e){const t=[],n={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],a=i.indexes[s][n[s]],o=i.values[a]??0;t[r]=o,n[s]++}return t}const HS=(i,e)=>{const t=Bi.createTransformer(e),n=wa(i),r=wa(e);return n.indexes.var.length===r.indexes.var.length&&n.indexes.color.length===r.indexes.color.length&&n.indexes.number.length>=r.indexes.number.length?pf.has(i)&&!r.values.length||pf.has(e)&&!n.values.length?kS(i,e):Wo(K_(GS(n,r),r.values),t):pc(i,e)};function Z_(i,e,t){return typeof i=="number"&&typeof e=="number"&&typeof t=="number"?Dt(i,e,t):dd(i)(i,e)}const WS=i=>{const e=({timestamp:t})=>i(t);return{start:(t=!0)=>wt.update(e,t),stop:()=>Zr(e),now:()=>gn.isProcessing?gn.timestamp:kn.now()}},J_=(i,e,t=10)=>{let n="";const r=Math.max(Math.round(e/t),2);for(let s=0;s<r;s++)n+=Math.round(i(s/(r-1))*1e4)/1e4+", ";return`linear(${n.substring(0,n.length-2)})`},mc=2e4;function pd(i){let e=0;const t=50;let n=i.next(e);for(;!n.done&&e<mc;)e+=t,n=i.next(e);return e>=mc?1/0:e}function XS(i,e=100,t){const n=t({...i,keyframes:[0,e]}),r=Math.min(pd(n),mc);return{type:"keyframes",ease:s=>n.next(r*s).value/e,duration:Mi(r)}}const Vt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function mf(i,e){return i*Math.sqrt(1-e*e)}const jS=12;function YS(i,e,t){let n=t;for(let r=1;r<jS;r++)n=n-i(n)/e(n);return n}const au=.001;function qS({duration:i=Vt.duration,bounce:e=Vt.bounce,velocity:t=Vt.velocity,mass:n=Vt.mass}){let r,s,a=1-e;a=sr(Vt.minDamping,Vt.maxDamping,a),i=sr(Vt.minDuration,Vt.maxDuration,Mi(i)),a<1?(r=c=>{const u=c*a,h=u*i,f=u-t,d=mf(c,a),g=Math.exp(-h);return au-f/d*g},s=c=>{const h=c*a*i,f=h*t+t,d=Math.pow(a,2)*Math.pow(c,2)*i,g=Math.exp(-h),_=mf(Math.pow(c,2),a);return(-r(c)+au>0?-1:1)*((f-d)*g)/_}):(r=c=>{const u=Math.exp(-c*i),h=(c-t)*i+1;return-au+u*h},s=c=>{const u=Math.exp(-c*i),h=(t-c)*(i*i);return u*h});const o=5/i,l=YS(r,s,o);if(i=ci(i),isNaN(l))return{stiffness:Vt.stiffness,damping:Vt.damping,duration:i};{const c=Math.pow(l,2)*n;return{stiffness:c,damping:a*2*Math.sqrt(n*c),duration:i}}}const $S=["duration","bounce"],KS=["stiffness","damping","mass"];function Rp(i,e){return e.some(t=>i[t]!==void 0)}function ZS(i){let e={velocity:Vt.velocity,stiffness:Vt.stiffness,damping:Vt.damping,mass:Vt.mass,isResolvedFromDuration:!1,...i};if(!Rp(i,KS)&&Rp(i,$S))if(e.velocity=0,i.visualDuration){const t=i.visualDuration,n=2*Math.PI/(t*1.2),r=n*n,s=2*sr(.05,1,1-(i.bounce||0))*Math.sqrt(r);e={...e,mass:Vt.mass,stiffness:r,damping:s}}else{const t=qS({...i,velocity:0});e={...e,...t,mass:Vt.mass},e.isResolvedFromDuration=!0}return e}function gc(i=Vt.visualDuration,e=Vt.bounce){const t=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:e}:i;let{restSpeed:n,restDelta:r}=t;const s=t.keyframes[0],a=t.keyframes[t.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:h,velocity:f,isResolvedFromDuration:d}=ZS({...t,velocity:-Mi(t.velocity||0)}),g=f||0,_=c/(2*Math.sqrt(l*u)),p=a-s,m=Mi(Math.sqrt(l/u)),x=Math.abs(p)<5;n||(n=x?Vt.restSpeed.granular:Vt.restSpeed.default),r||(r=x?Vt.restDelta.granular:Vt.restDelta.default);let M,y,A,b,w,v;if(_<1)A=mf(m,_),b=(g+_*m*p)/A,M=C=>{const P=Math.exp(-_*m*C);return a-P*(b*Math.sin(A*C)+p*Math.cos(A*C))},w=_*m*b+p*A,v=_*m*p-b*A,y=C=>Math.exp(-_*m*C)*(w*Math.sin(A*C)+v*Math.cos(A*C));else if(_===1){M=P=>a-Math.exp(-m*P)*(p+(g+m*p)*P);const C=g+m*p;y=P=>Math.exp(-m*P)*(m*C*P-g)}else{const C=m*Math.sqrt(_*_-1);M=V=>{const I=Math.exp(-_*m*V),F=Math.min(C*V,300);return a-I*((g+_*m*p)*Math.sinh(F)+C*p*Math.cosh(F))/C};const P=(g+_*m*p)/C,N=_*m*P-p*C,G=_*m*p-P*C;y=V=>{const I=Math.exp(-_*m*V),F=Math.min(C*V,300);return I*(N*Math.sinh(F)+G*Math.cosh(F))}}const T={calculatedDuration:d&&h||null,velocity:C=>ci(y(C)),next:C=>{if(!d&&_<1){const N=Math.exp(-_*m*C),G=Math.sin(A*C),V=Math.cos(A*C),I=a-N*(b*G+p*V),F=ci(N*(w*G+v*V));return o.done=Math.abs(F)<=n&&Math.abs(a-I)<=r,o.value=o.done?a:I,o}const P=M(C);if(d)o.done=C>=h;else{const N=ci(y(C));o.done=Math.abs(N)<=n&&Math.abs(a-P)<=r}return o.value=o.done?a:P,o},toString:()=>{const C=Math.min(pd(T),mc),P=J_(N=>T.next(C*N).value,C,30);return C+"ms "+P},toTransition:()=>{}};return T}gc.applyToOptions=i=>{const e=XS(i,100,gc);return i.ease=e.ease,i.duration=ci(e.duration),i.type="keyframes",i};const JS=5;function Q_(i,e,t){const n=Math.max(e-JS,0);return L_(t-i(n),e-n)}function gf({keyframes:i,velocity:e=0,power:t=.8,timeConstant:n=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:u}){const h=i[0],f={done:!1,value:h},d=v=>o!==void 0&&v<o||l!==void 0&&v>l,g=v=>o===void 0?l:l===void 0||Math.abs(o-v)<Math.abs(l-v)?o:l;let _=t*e;const p=h+_,m=a===void 0?p:a(p);m!==p&&(_=m-h);const x=v=>-_*Math.exp(-v/n),M=v=>m+x(v),y=v=>{const T=x(v),C=M(v);f.done=Math.abs(T)<=c,f.value=f.done?m:C};let A,b;const w=v=>{d(f.value)&&(A=v,b=gc({keyframes:[f.value,g(f.value)],velocity:Q_(M,v,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return w(0),{calculatedDuration:null,next:v=>{let T=!1;return!b&&A===void 0&&(T=!0,y(v),w(v)),A!==void 0&&v>=A?b.next(v-A):(!T&&y(v),f)}}}function QS(i,e,t){const n=[],r=t||Kr.mix||Z_,s=i.length-1;for(let a=0;a<s;a++){let o=r(i[a],i[a+1]);if(e){const l=Array.isArray(e)?e[a]||Ei:e;o=Wo(l,o)}n.push(o)}return n}function eM(i,e,{clamp:t=!0,ease:n,mixer:r}={}){const s=i.length;if(ad(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const a=i[0]===i[1];i[0]>i[s-1]&&(i=[...i].reverse(),e=[...e].reverse());const o=QS(e,n,r),l=o.length,c=u=>{if(a&&u<i[0])return e[0];let h=0;if(l>1)for(;h<i.length-2&&!(u<i[h+1]);h++);const f=Co(i[h],i[h+1],u);return o[h](f)};return t?u=>c(sr(i[0],i[s-1],u)):c}function tM(i,e){const t=i[i.length-1];for(let n=1;n<=e;n++){const r=Co(0,e,n);i.push(Dt(t,1,r))}}function nM(i){const e=[0];return tM(e,i.length-1),e}function iM(i,e){return i.map(t=>t*e)}function rM(i,e){return i.map(()=>e||z_).splice(0,i.length-1)}function ho({duration:i=300,keyframes:e,times:t,ease:n="easeInOut"}){const r=hS(n)?n.map(Tp):Tp(n),s={done:!1,value:e[0]},a=iM(t&&t.length===e.length?t:nM(e),i),o=eM(a,e,{ease:Array.isArray(r)?r:rM(e,r)});return{calculatedDuration:i,next:l=>(s.value=o(l),s.done=l>=i,s)}}const sM=i=>i!==null;function Hc(i,{repeat:e,repeatType:t="loop"},n,r=1){const s=i.filter(sM),o=r<0||e&&t!=="loop"&&e%2===1?0:s.length-1;return!o||n===void 0?s[o]:n}const aM={decay:gf,inertia:gf,tween:ho,keyframes:ho,spring:gc};function e0(i){typeof i.type=="string"&&(i.type=aM[i.type])}class md{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const oM=i=>i/100;class _c extends md{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:t}=this.options;t&&t.updatedAt!==kn.now()&&this.tick(kn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;e0(e);const{type:t=ho,repeat:n=0,repeatDelay:r=0,repeatType:s,velocity:a=0}=e;let{keyframes:o}=e;const l=t||ho;l!==ho&&typeof o[0]!="number"&&(this.mixKeyframes=Wo(oM,Z_(o[0],o[1])),o=[0,100]);const c=l({...e,keyframes:o});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=pd(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:n,totalDuration:r,mixKeyframes:s,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:l}=this;if(this.startTime===null)return n.next(0);const{delay:c=0,keyframes:u,repeat:h,repeatType:f,repeatDelay:d,type:g,onUpdate:_,finalKeyframe:p}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const m=this.currentTime-c*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?m<0:m>r;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let M=this.currentTime,y=n;if(h){const v=Math.min(this.currentTime,r)/o;let T=Math.floor(v),C=v%1;!C&&v>=1&&(C=1),C===1&&T--,T=Math.min(T,h+1),T%2&&(f==="reverse"?(C=1-C,d&&(C-=d/o)):f==="mirror"&&(y=a)),M=sr(0,1,C)*o}let A;x?(this.delayState.value=u[0],A=this.delayState):A=y.next(M),s&&!x&&(A.value=s(A.value));let{done:b}=A;!x&&l!==null&&(b=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const w=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return w&&g!==gf&&(A.value=Hc(u,this.options,p,this.speed)),_&&_(A.value),w&&this.finish(),A}then(e,t){return this.finished.then(e,t)}get duration(){return Mi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Mi(e)}get time(){return Mi(this.currentTime)}set time(e){e=ci(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return Q_(n=>this.generator.next(n).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(kn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Mi(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=WS,startTime:t}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),this.options.onPlay?.();const n=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=n):this.holdTime!==null?this.startTime=n-this.holdTime:this.startTime||(this.startTime=t??n),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(kn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function lM(i){for(let e=1;e<i.length;e++)i[e]??(i[e]=i[e-1])}const ys=i=>i*180/Math.PI,_f=i=>{const e=ys(Math.atan2(i[1],i[0]));return xf(e)},cM={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:_f,rotateZ:_f,skewX:i=>ys(Math.atan(i[1])),skewY:i=>ys(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},xf=i=>(i=i%360,i<0&&(i+=360),i),Pp=_f,Dp=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),Lp=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),uM={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Dp,scaleY:Lp,scale:i=>(Dp(i)+Lp(i))/2,rotateX:i=>xf(ys(Math.atan2(i[6],i[5]))),rotateY:i=>xf(ys(Math.atan2(-i[2],i[0]))),rotateZ:Pp,rotate:Pp,skewX:i=>ys(Math.atan(i[4])),skewY:i=>ys(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function vf(i){return i.includes("scale")?1:0}function yf(i,e){if(!i||i==="none")return vf(e);const t=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let n,r;if(t)n=uM,r=t;else{const o=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=cM,r=o}if(!r)return vf(e);const s=n[e],a=r[1].split(",").map(hM);return typeof s=="function"?s(a):a[s]}const fM=(i,e)=>{const{transform:t="none"}=getComputedStyle(i);return yf(t,e)};function hM(i){return parseFloat(i.trim())}const Va=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],za=new Set(Va),Np=i=>i===ka||i===De,dM=new Set(["x","y","z"]),pM=Va.filter(i=>!dM.has(i));function mM(i){const e=[];return pM.forEach(t=>{const n=i.getValue(t);n!==void 0&&(e.push([t,n.get()]),n.set(t.startsWith("scale")?1:0))}),e}const Vr={width:({x:i},{paddingLeft:e="0",paddingRight:t="0",boxSizing:n})=>{const r=i.max-i.min;return n==="border-box"?r:r-parseFloat(e)-parseFloat(t)},height:({y:i},{paddingTop:e="0",paddingBottom:t="0",boxSizing:n})=>{const r=i.max-i.min;return n==="border-box"?r:r-parseFloat(e)-parseFloat(t)},top:(i,{top:e})=>parseFloat(e),left:(i,{left:e})=>parseFloat(e),bottom:({y:i},{top:e})=>parseFloat(e)+(i.max-i.min),right:({x:i},{left:e})=>parseFloat(e)+(i.max-i.min),x:(i,{transform:e})=>yf(e,"x"),y:(i,{transform:e})=>yf(e,"y")};Vr.translateX=Vr.x;Vr.translateY=Vr.y;const Es=new Set;let Sf=!1,Mf=!1,Tf=!1;function t0(){if(Mf){const i=Array.from(Es).filter(n=>n.needsMeasurement),e=new Set(i.map(n=>n.element)),t=new Map;e.forEach(n=>{const r=mM(n);r.length&&(t.set(n,r),n.render())}),i.forEach(n=>n.measureInitialState()),e.forEach(n=>{n.render();const r=t.get(n);r&&r.forEach(([s,a])=>{n.getValue(s)?.set(a)})}),i.forEach(n=>n.measureEndState()),i.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}Mf=!1,Sf=!1,Es.forEach(i=>i.complete(Tf)),Es.clear()}function n0(){Es.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Mf=!0)})}function gM(){Tf=!0,n0(),t0(),Tf=!1}class gd{constructor(e,t,n,r,s,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=s,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(Es.add(this),Sf||(Sf=!0,wt.read(n0),wt.resolveKeyframes(t0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){const s=r?.get(),a=e[e.length-1];if(s!==void 0)e[0]=s;else if(n&&t){const o=n.readValue(t,a);o!=null&&(e[0]=o)}e[0]===void 0&&(e[0]=a),r&&s===void 0&&r.set(e[0])}lM(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Es.delete(this)}cancel(){this.state==="scheduled"&&(Es.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const _M=i=>i.startsWith("--");function i0(i,e,t){_M(e)?i.style.setProperty(e,t):i.style[e]=t}const xM={};function r0(i,e){const t=D_(i);return()=>xM[e]??t()}const vM=r0(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),s0=r0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),to=([i,e,t,n])=>`cubic-bezier(${i}, ${e}, ${t}, ${n})`,Ip={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:to([0,.65,.55,1]),circOut:to([.55,0,1,.45]),backIn:to([.31,.01,.66,-.59]),backOut:to([.33,1.53,.69,.99])};function a0(i,e){if(i)return typeof i=="function"?s0()?J_(i,e):"ease-out":G_(i)?to(i):Array.isArray(i)?i.map(t=>a0(t,e)||Ip.easeOut):Ip[i]}function yM(i,e,t,{delay:n=0,duration:r=300,repeat:s=0,repeatType:a="loop",ease:o="easeOut",times:l}={},c=void 0){const u={[e]:t};l&&(u.offset=l);const h=a0(o,r);Array.isArray(h)&&(u.easing=h);const f={delay:n,duration:r,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),i.animate(u,f)}function o0(i){return typeof i=="function"&&"applyToOptions"in i}function SM({type:i,...e}){return o0(i)&&s0()?i.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class l0 extends md{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:n,keyframes:r,pseudoElement:s,allowFlatten:a=!1,finalKeyframe:o,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=a,this.options=e,ad(typeof e.type!="string");const c=SM(e);this.animation=yM(t,n,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=Hc(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(u),i0(t,n,u),this.animation.cancel()}l?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return Mi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Mi(e)}get time(){return Mi(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ci(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&vM()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),Ei):r(this)}}const c0={anticipate:B_,backInOut:O_,circInOut:V_};function MM(i){return i in c0}function TM(i){typeof i.ease=="string"&&MM(i.ease)&&(i.ease=c0[i.ease])}const ou=10;class bM extends l0{constructor(e){TM(e),e0(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:n,onComplete:r,element:s,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const o=new _c({...a,autoplay:!1}),l=Math.max(ou,kn.now()-this.startTime),c=sr(0,ou,l-ou),u=o.sample(l).value,{name:h}=this.options;s&&h&&i0(s,h,u),t.setWithVelocity(o.sample(Math.max(0,l-c)).value,u,c),o.stop()}}const Up=(i,e)=>e==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(Bi.test(i)||i==="0")&&!i.startsWith("url("));function EM(i){const e=i[0];if(i.length===1)return!0;for(let t=0;t<i.length;t++)if(i[t]!==e)return!0}function AM(i,e,t,n){const r=i[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=i[i.length-1],a=Up(r,e),o=Up(s,e);return!a||!o?!1:EM(i)||(t==="spring"||o0(t))&&n}function bf(i){i.duration=0,i.type="keyframes"}const u0=new Set(["opacity","clipPath","filter","transform"]),wM=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function CM(i){for(let e=0;e<i.length;e++)if(typeof i[e]=="string"&&wM.test(i[e]))return!0;return!1}const RM=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),PM=D_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function DM(i){const{motionValue:e,name:t,repeatDelay:n,repeatType:r,damping:s,type:a,keyframes:o}=i;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=e.owner.getProps();return PM()&&t&&(u0.has(t)||RM.has(t)&&CM(o))&&(t!=="transform"||!u)&&!c&&!n&&r!=="mirror"&&s!==0&&a!=="inertia"}const LM=40;class NM extends md{constructor({autoplay:e=!0,delay:t=0,type:n="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:a="loop",keyframes:o,name:l,motionValue:c,element:u,...h}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=kn.now();const f={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:s,repeatType:a,name:l,motionValue:c,element:u,...h},d=u?.KeyframeResolver||gd;this.keyframeResolver=new d(o,(g,_,p)=>this.onKeyframesResolved(g,_,f,!p),l,c,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;const{name:s,type:a,velocity:o,delay:l,isHandoff:c,onUpdate:u}=n;this.resolvedAt=kn.now();let h=!0;AM(e,s,a,o)||(h=!1,(Kr.instantAnimations||!l)&&u?.(Hc(e,n,t)),e[0]=e[e.length-1],bf(n),n.repeat=0);const d={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>LM?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},g=h&&!c&&DM(d),_=d.motionValue?.owner?.current;let p;if(g)try{p=new bM({...d,element:_})}catch{p=new _c(d)}else p=new _c(d);p.finished.then(()=>{this.notifyFinished()}).catch(Ei),this.pendingTimeline&&(this.stopTimeline=p.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),gM()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function f0(i,e,t,n=0,r=1){const s=Array.from(i).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),a=i.size,o=(a-1)*n;return typeof t=="function"?t(s,a):r===1?s*n:o-s*n}const IM=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function UM(i){const e=IM.exec(i);if(!e)return[,];const[,t,n,r]=e;return[`--${t??n}`,r]}function h0(i,e,t=1){const[n,r]=UM(i);if(!n)return;const s=window.getComputedStyle(e).getPropertyValue(n);if(s){const a=s.trim();return C_(a)?parseFloat(a):a}return ud(r)?h0(r,e,t+1):r}const FM={type:"spring",stiffness:500,damping:25,restSpeed:10},OM=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),BM={type:"keyframes",duration:.8},kM={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},VM=(i,{keyframes:e})=>e.length>2?BM:za.has(i)?i.startsWith("scale")?OM(e[1]):FM:kM;function d0(i,e){if(i?.inherit&&e){const{inherit:t,...n}=i;return{...e,...n}}return i}function _d(i,e){const t=i?.[e]??i?.default??i;return t!==i?d0(t,i):t}const zM=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function GM(i){for(const e in i)if(!zM.has(e))return!0;return!1}const xd=(i,e,t,n={},r,s)=>a=>{const o=_d(n,i)||{},l=o.delay||n.delay||0;let{elapsed:c=0}=n;c=c-ci(l);const u={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...o,delay:-c,onUpdate:f=>{e.set(f),o.onUpdate&&o.onUpdate(f)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:i,motionValue:e,element:s?void 0:r};GM(o)||Object.assign(u,VM(i,u)),u.duration&&(u.duration=ci(u.duration)),u.repeatDelay&&(u.repeatDelay=ci(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(bf(u),u.delay===0&&(h=!0)),(Kr.instantAnimations||Kr.skipAnimations||r?.shouldSkipAnimations)&&(h=!0,bf(u),u.delay=0),u.allowFlatten=!o.type&&!o.ease,h&&!s&&e.get()!==void 0){const f=Hc(u.keyframes,o);if(f!==void 0){wt.update(()=>{u.onUpdate(f),u.onComplete()});return}}return o.isSync?new _c(u):new NM(u)};function Fp(i){const e=[{},{}];return i?.values.forEach((t,n)=>{e[0][n]=t.get(),e[1][n]=t.getVelocity()}),e}function vd(i,e,t,n){if(typeof e=="function"){const[r,s]=Fp(n);e=e(t!==void 0?t:i.custom,r,s)}if(typeof e=="string"&&(e=i.variants&&i.variants[e]),typeof e=="function"){const[r,s]=Fp(n);e=e(t!==void 0?t:i.custom,r,s)}return e}function As(i,e,t){const n=i.getProps();return vd(n,e,t!==void 0?t:n.custom,i)}const p0=new Set(["width","height","top","left","right","bottom",...Va]),Op=30,HM=i=>!isNaN(parseFloat(i));class WM{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=n=>{const r=kn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=kn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=HM(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new od);const n=this.events[e].add(t);return e==="change"?()=>{n(),wt.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=kn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Op)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Op);return L_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ca(i,e){return new WM(i,e)}const Ef=i=>Array.isArray(i);function XM(i,e,t){i.hasValue(e)?i.getValue(e).set(t):i.addValue(e,Ca(t))}function jM(i){return Ef(i)?i[i.length-1]||0:i}function YM(i,e){const t=As(i,e);let{transitionEnd:n={},transition:r={},...s}=t||{};s={...s,...n};for(const a in s){const o=jM(s[a]);XM(i,a,o)}}const _n=i=>!!(i&&i.getVelocity);function qM(i){return!!(_n(i)&&i.add)}function Af(i,e){const t=i.getValue("willChange");if(qM(t))return t.add(e);if(!t&&Kr.WillChange){const n=new Kr.WillChange("auto");i.addValue("willChange",n),n.add(e)}}function yd(i){return i.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const $M="framerAppearId",m0="data-"+yd($M);function g0(i){return i.props[m0]}function KM({protectedKeys:i,needsAnimating:e},t){const n=i.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,n}function _0(i,e,{delay:t=0,transitionOverride:n,type:r}={}){let{transition:s,transitionEnd:a,...o}=e;const l=i.getDefaultTransition();s=s?d0(s,l):l;const c=s?.reduceMotion;n&&(s=n);const u=[],h=r&&i.animationState&&i.animationState.getState()[r];for(const f in o){const d=i.getValue(f,i.latestValues[f]??null),g=o[f];if(g===void 0||h&&KM(h,f))continue;const _={delay:t,..._d(s||{},f)},p=d.get();if(p!==void 0&&!d.isAnimating()&&!Array.isArray(g)&&g===p&&!_.velocity){wt.update(()=>d.set(g));continue}let m=!1;if(window.MotionHandoffAnimation){const y=g0(i);if(y){const A=window.MotionHandoffAnimation(y,f,wt);A!==null&&(_.startTime=A,m=!0)}}Af(i,f);const x=c??i.shouldReduceMotion;d.start(xd(f,d,g,x&&p0.has(f)?{type:!1}:_,i,m));const M=d.animation;M&&u.push(M)}if(a){const f=()=>wt.update(()=>{a&&YM(i,a)});u.length?Promise.all(u).then(f):f()}return u}function wf(i,e,t={}){const n=As(i,e,t.type==="exit"?i.presenceContext?.custom:void 0);let{transition:r=i.getDefaultTransition()||{}}=n||{};t.transitionOverride&&(r=t.transitionOverride);const s=n?()=>Promise.all(_0(i,n,t)):()=>Promise.resolve(),a=i.variantChildren&&i.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:h}=r;return ZM(i,e,l,c,u,h,t)}:()=>Promise.resolve(),{when:o}=r;if(o){const[l,c]=o==="beforeChildren"?[s,a]:[a,s];return l().then(()=>c())}else return Promise.all([s(),a(t.delay)])}function ZM(i,e,t=0,n=0,r=0,s=1,a){const o=[];for(const l of i.variantChildren)l.notify("AnimationStart",e),o.push(wf(l,e,{...a,delay:t+(typeof n=="function"?0:n)+f0(i.variantChildren,l,n,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(o)}function JM(i,e,t={}){i.notify("AnimationStart",e);let n;if(Array.isArray(e)){const r=e.map(s=>wf(i,s,t));n=Promise.all(r)}else if(typeof e=="string")n=wf(i,e,t);else{const r=typeof e=="function"?As(i,e,t.custom):e;n=Promise.all(_0(i,r,t))}return n.then(()=>{i.notify("AnimationComplete",e)})}const QM={test:i=>i==="auto",parse:i=>i},x0=i=>e=>e.test(i),v0=[ka,De,tr,Or,ES,bS,QM],Bp=i=>v0.find(x0(i));function eT(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||P_(i):!0}const tT=new Set(["brightness","contrast","saturate","opacity"]);function nT(i){const[e,t]=i.slice(0,-1).split("(");if(e==="drop-shadow")return i;const[n]=t.match(fd)||[];if(!n)return i;const r=t.replace(n,"");let s=tT.has(e)?1:0;return n!==t&&(s*=100),e+"("+s+r+")"}const iT=/\b([a-z-]*)\(.*?\)/gu,Cf={...Bi,getAnimatableNone:i=>{const e=i.match(iT);return e?e.map(nT).join(" "):i}},Rf={...Bi,getAnimatableNone:i=>{const e=Bi.parse(i);return Bi.createTransformer(i)(e.map(n=>typeof n=="number"?0:typeof n=="object"?{...n,alpha:1}:n))}},kp={...ka,transform:Math.round},rT={rotate:Or,rotateX:Or,rotateY:Or,rotateZ:Or,scale:el,scaleX:el,scaleY:el,scaleZ:el,skew:Or,skewX:Or,skewY:Or,distance:De,translateX:De,translateY:De,translateZ:De,x:De,y:De,z:De,perspective:De,transformPerspective:De,opacity:Ro,originX:Ep,originY:Ep,originZ:De},Sd={borderWidth:De,borderTopWidth:De,borderRightWidth:De,borderBottomWidth:De,borderLeftWidth:De,borderRadius:De,borderTopLeftRadius:De,borderTopRightRadius:De,borderBottomRightRadius:De,borderBottomLeftRadius:De,width:De,maxWidth:De,height:De,maxHeight:De,top:De,right:De,bottom:De,left:De,inset:De,insetBlock:De,insetBlockStart:De,insetBlockEnd:De,insetInline:De,insetInlineStart:De,insetInlineEnd:De,padding:De,paddingTop:De,paddingRight:De,paddingBottom:De,paddingLeft:De,paddingBlock:De,paddingBlockStart:De,paddingBlockEnd:De,paddingInline:De,paddingInlineStart:De,paddingInlineEnd:De,margin:De,marginTop:De,marginRight:De,marginBottom:De,marginLeft:De,marginBlock:De,marginBlockStart:De,marginBlockEnd:De,marginInline:De,marginInlineStart:De,marginInlineEnd:De,fontSize:De,backgroundPositionX:De,backgroundPositionY:De,...rT,zIndex:kp,fillOpacity:Ro,strokeOpacity:Ro,numOctaves:kp},sT={...Sd,color:Qt,backgroundColor:Qt,outlineColor:Qt,fill:Qt,stroke:Qt,borderColor:Qt,borderTopColor:Qt,borderRightColor:Qt,borderBottomColor:Qt,borderLeftColor:Qt,filter:Cf,WebkitFilter:Cf,mask:Rf,WebkitMask:Rf},y0=i=>sT[i],aT=new Set([Cf,Rf]);function S0(i,e){let t=y0(i);return aT.has(t)||(t=Bi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const oT=new Set(["auto","none","0"]);function lT(i,e,t){let n=0,r;for(;n<i.length&&!r;){const s=i[n];typeof s=="string"&&!oT.has(s)&&wa(s).values.length&&(r=i[n]),n++}if(r&&t)for(const s of e)i[s]=S0(t,r)}class cT extends gd{constructor(e,t,n,r,s){super(e,t,n,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let h=e[u];if(typeof h=="string"&&(h=h.trim(),ud(h))){const f=h0(h,t.current);f!==void 0&&(e[u]=f),u===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!p0.has(n)||e.length!==2)return;const[r,s]=e,a=Bp(r),o=Bp(s),l=bp(r),c=bp(s);if(l!==c&&Vr[n]){this.needsMeasurement=!0;return}if(a!==o)if(Np(a)&&Np(o))for(let u=0;u<e.length;u++){const h=e[u];typeof h=="string"&&(e[u]=parseFloat(h))}else Vr[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)(e[r]===null||eT(e[r]))&&n.push(r);n.length&&lT(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const s=n.length-1,a=n[s];n[s]=Vr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([o,l])=>{e.getValue(o).set(l)}),this.resolveNoneKeyframes()}}function M0(i,e,t){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let n=document;const r=t?.[i]??n.querySelectorAll(i);return r?Array.from(r):[]}return Array.from(i).filter(n=>n!=null)}const T0=(i,e)=>e&&typeof i=="number"?e.transform(i):i;function Wl(i){return R_(i)&&"offsetHeight"in i&&!("ownerSVGElement"in i)}const{schedule:Md}=H_(queueMicrotask,!1),Ii={x:!1,y:!1};function b0(){return Ii.x||Ii.y}function uT(i){return i==="x"||i==="y"?Ii[i]?null:(Ii[i]=!0,()=>{Ii[i]=!1}):Ii.x||Ii.y?null:(Ii.x=Ii.y=!0,()=>{Ii.x=Ii.y=!1})}function E0(i,e){const t=M0(i),n=new AbortController,r={passive:!0,...e,signal:n.signal};return[t,r,()=>n.abort()]}function fT(i){return!(i.pointerType==="touch"||b0())}function hT(i,e,t={}){const[n,r,s]=E0(i,t);return n.forEach(a=>{let o=!1,l=!1,c;const u=()=>{a.removeEventListener("pointerleave",g)},h=p=>{c&&(c(p),c=void 0),u()},f=p=>{o=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),l&&(l=!1,h(p))},d=()=>{o=!0,window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",f,r)},g=p=>{if(p.pointerType!=="touch"){if(o){l=!0;return}h(p)}},_=p=>{if(!fT(p))return;l=!1;const m=e(a,p);typeof m=="function"&&(c=m,a.addEventListener("pointerleave",g,r))};a.addEventListener("pointerenter",_,r),a.addEventListener("pointerdown",d,r)}),s}const A0=(i,e)=>e?i===e?!0:A0(i,e.parentElement):!1,Td=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,dT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function pT(i){return dT.has(i.tagName)||i.isContentEditable===!0}const mT=new Set(["INPUT","SELECT","TEXTAREA"]);function gT(i){return mT.has(i.tagName)||i.isContentEditable===!0}const Xl=new WeakSet;function Vp(i){return e=>{e.key==="Enter"&&i(e)}}function lu(i,e){i.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const _T=(i,e)=>{const t=i.currentTarget;if(!t)return;const n=Vp(()=>{if(Xl.has(t))return;lu(t,"down");const r=Vp(()=>{lu(t,"up")}),s=()=>lu(t,"cancel");t.addEventListener("keyup",r,e),t.addEventListener("blur",s,e)});t.addEventListener("keydown",n,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",n),e)};function zp(i){return Td(i)&&!b0()}const Gp=new WeakSet;function xT(i,e,t={}){const[n,r,s]=E0(i,t),a=o=>{const l=o.currentTarget;if(!zp(o)||Gp.has(o))return;Xl.add(l),t.stopPropagation&&Gp.add(o);const c=e(l,o),u=(d,g)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",f),Xl.has(l)&&Xl.delete(l),zp(d)&&typeof c=="function"&&c(d,{success:g})},h=d=>{u(d,l===window||l===document||t.useGlobalTarget||A0(l,d.target))},f=d=>{u(d,!1)};window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",f,r)};return n.forEach(o=>{(t.useGlobalTarget?window:o).addEventListener("pointerdown",a,r),Wl(o)&&(o.addEventListener("focus",c=>_T(c,r)),!pT(o)&&!o.hasAttribute("tabindex")&&(o.tabIndex=0))}),s}function bd(i){return R_(i)&&"ownerSVGElement"in i}const jl=new WeakMap;let Yl;const w0=(i,e,t)=>(n,r)=>r&&r[0]?r[0][i+"Size"]:bd(n)&&"getBBox"in n?n.getBBox()[e]:n[t],vT=w0("inline","width","offsetWidth"),yT=w0("block","height","offsetHeight");function ST({target:i,borderBoxSize:e}){jl.get(i)?.forEach(t=>{t(i,{get width(){return vT(i,e)},get height(){return yT(i,e)}})})}function MT(i){i.forEach(ST)}function TT(){typeof ResizeObserver>"u"||(Yl=new ResizeObserver(MT))}function bT(i,e){Yl||TT();const t=M0(i);return t.forEach(n=>{let r=jl.get(n);r||(r=new Set,jl.set(n,r)),r.add(e),Yl?.observe(n)}),()=>{t.forEach(n=>{const r=jl.get(n);r?.delete(e),r?.size||Yl?.unobserve(n)})}}const ql=new Set;let da;function ET(){da=()=>{const i={get width(){return window.innerWidth},get height(){return window.innerHeight}};ql.forEach(e=>e(i))},window.addEventListener("resize",da)}function AT(i){return ql.add(i),da||ET(),()=>{ql.delete(i),!ql.size&&typeof da=="function"&&(window.removeEventListener("resize",da),da=void 0)}}function Hp(i,e){return typeof i=="function"?AT(i):bT(i,e)}function wT(i){return bd(i)&&i.tagName==="svg"}const CT=[...v0,Qt,Bi],RT=i=>CT.find(x0(i)),Wp=()=>({translate:0,scale:1,origin:0,originPoint:0}),pa=()=>({x:Wp(),y:Wp()}),Xp=()=>({min:0,max:0}),sn=()=>({x:Xp(),y:Xp()}),PT=new WeakMap;function Wc(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function Po(i){return typeof i=="string"||Array.isArray(i)}const Ed=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ad=["initial",...Ed];function Xc(i){return Wc(i.animate)||Ad.some(e=>Po(i[e]))}function C0(i){return!!(Xc(i)||i.variants)}function DT(i,e,t){for(const n in e){const r=e[n],s=t[n];if(_n(r))i.addValue(n,r);else if(_n(s))i.addValue(n,Ca(r,{owner:i}));else if(s!==r)if(i.hasValue(n)){const a=i.getValue(n);a.liveStyle===!0?a.jump(r):a.hasAnimated||a.set(r)}else{const a=i.getStaticValue(n);i.addValue(n,Ca(a!==void 0?a:r,{owner:i}))}}for(const n in t)e[n]===void 0&&i.removeValue(n);return e}const Pf={current:null},R0={current:!1},LT=typeof window<"u";function NT(){if(R0.current=!0,!!LT)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),e=()=>Pf.current=i.matches;i.addEventListener("change",e),e()}else Pf.current=!1}const jp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let xc={};function P0(i){xc=i}function IT(){return xc}class UT{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:a,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=gd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=kn.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,wt.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!a,this.isControllingVariants=Xc(t),this.isVariantNode=C0(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(t,{},this);for(const d in f){const g=f[d];c[d]!==void 0&&_n(g)&&g.set(c[d])}}mount(e){if(this.hasBeenMounted)for(const t in this.initialValues)this.values.get(t)?.jump(this.initialValues[t]),this.latestValues[t]=this.initialValues[t];this.current=e,PT.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,n)=>this.bindToMotionValue(n,t)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(R0.current||NT(),this.shouldReduceMotion=Pf.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Zr(this.notifyUpdate),Zr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&u0.has(e)&&this.current instanceof HTMLElement){const{factory:a,keyframes:o,times:l,ease:c,duration:u}=t.accelerate,h=new l0({element:this.current,name:e,keyframes:o,times:l,ease:c,duration:ci(u)}),f=a(h);this.valueSubscriptions.set(e,()=>{f(),h.cancel()});return}const n=za.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&wt.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in xc){const t=xc[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):sn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<jp.length;n++){const r=jp[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,a=e[s];a&&(this.propEventSubscriptions[r]=this.on(r,a))}this.prevMotionValues=DT(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Ca(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n=="string"&&(C_(n)||P_(n))?n=parseFloat(n):!RT(n)&&Bi.test(t)&&(n=S0(e,t)),this.setBaseTarget(e,_n(n)?n.get():n)),_n(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if(typeof t=="string"||typeof t=="object"){const s=vd(this.props,t,this.presenceContext?.custom);s&&(n=s[e])}if(t&&n!==void 0)return n;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!_n(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new od),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Md.render(this.render)}}class D0 extends UT{constructor(){super(...arguments),this.KeyframeResolver=cT}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;_n(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class is{constructor(e){this.isMounted=!1,this.node=e}update(){}}function L0({top:i,left:e,right:t,bottom:n}){return{x:{min:e,max:t},y:{min:i,max:n}}}function FT({x:i,y:e}){return{top:e.min,right:i.max,bottom:e.max,left:i.min}}function OT(i,e){if(!e)return i;const t=e({x:i.left,y:i.top}),n=e({x:i.right,y:i.bottom});return{top:t.y,left:t.x,bottom:n.y,right:n.x}}function cu(i){return i===void 0||i===1}function Df({scale:i,scaleX:e,scaleY:t}){return!cu(i)||!cu(e)||!cu(t)}function hs(i){return Df(i)||N0(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function N0(i){return Yp(i.x)||Yp(i.y)}function Yp(i){return i&&i!=="0%"}function vc(i,e,t){const n=i-t,r=e*n;return t+r}function qp(i,e,t,n,r){return r!==void 0&&(i=vc(i,r,n)),vc(i,t,n)+e}function Lf(i,e=0,t=1,n,r){i.min=qp(i.min,e,t,n,r),i.max=qp(i.max,e,t,n,r)}function I0(i,{x:e,y:t}){Lf(i.x,e.translate,e.scale,e.originPoint),Lf(i.y,t.translate,t.scale,t.originPoint)}const $p=.999999999999,Kp=1.0000000000001;function BT(i,e,t,n=!1){const r=t.length;if(!r)return;e.x=e.y=1;let s,a;for(let o=0;o<r;o++){s=t[o],a=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(n&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(qi(i.x,-s.scroll.offset.x),qi(i.y,-s.scroll.offset.y)),a&&(e.x*=a.x.scale,e.y*=a.y.scale,I0(i,a)),n&&hs(s.latestValues)&&$l(i,s.latestValues,s.layout?.layoutBox))}e.x<Kp&&e.x>$p&&(e.x=1),e.y<Kp&&e.y>$p&&(e.y=1)}function qi(i,e){i.min+=e,i.max+=e}function Zp(i,e,t,n,r=.5){const s=Dt(i.min,i.max,r);Lf(i,e,t,s,n)}function Jp(i,e){return typeof i=="string"?parseFloat(i)/100*(e.max-e.min):i}function $l(i,e,t){const n=t??i;Zp(i.x,Jp(e.x,n.x),e.scaleX,e.scale,e.originX),Zp(i.y,Jp(e.y,n.y),e.scaleY,e.scale,e.originY)}function U0(i,e){return L0(OT(i.getBoundingClientRect(),e))}function kT(i,e,t){const n=U0(i,t),{scroll:r}=e;return r&&(qi(n.x,r.offset.x),qi(n.y,r.offset.y)),n}const VT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},zT=Va.length;function GT(i,e,t){let n="",r=!0;for(let s=0;s<zT;s++){const a=Va[s],o=i[a];if(o===void 0)continue;let l=!0;if(typeof o=="number")l=o===(a.startsWith("scale")?1:0);else{const c=parseFloat(o);l=a.startsWith("scale")?c===1:c===0}if(!l||t){const c=T0(o,Sd[a]);if(!l){r=!1;const u=VT[a]||a;n+=`${u}(${c}) `}t&&(e[a]=c)}}return n=n.trim(),t?n=t(e,r?"":n):r&&(n="none"),n}function wd(i,e,t){const{style:n,vars:r,transformOrigin:s}=i;let a=!1,o=!1;for(const l in e){const c=e[l];if(za.has(l)){a=!0;continue}else if(X_(l)){r[l]=c;continue}else{const u=T0(c,Sd[l]);l.startsWith("origin")?(o=!0,s[l]=u):n[l]=u}}if(e.transform||(a||t?n.transform=GT(e,i.transform,t):n.transform&&(n.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;n.transformOrigin=`${l} ${c} ${u}`}}function F0(i,{style:e,vars:t},n,r){const s=i.style;let a;for(a in e)s[a]=e[a];r?.applyProjectionStyles(s,n);for(a in t)s.setProperty(a,t[a])}function Qp(i,e){return e.max===e.min?0:i/(e.max-e.min)*100}const Wa={correct:(i,e)=>{if(!e.target)return i;if(typeof i=="string")if(De.test(i))i=parseFloat(i);else return i;const t=Qp(i,e.target.x),n=Qp(i,e.target.y);return`${t}% ${n}%`}},HT={correct:(i,{treeScale:e,projectionDelta:t})=>{const n=i,r=Bi.parse(i);if(r.length>5)return n;const s=Bi.createTransformer(i),a=typeof r[0]!="number"?1:0,o=t.x.scale*e.x,l=t.y.scale*e.y;r[0+a]/=o,r[1+a]/=l;const c=Dt(o,l,.5);return typeof r[2+a]=="number"&&(r[2+a]/=c),typeof r[3+a]=="number"&&(r[3+a]/=c),s(r)}},Nf={borderRadius:{...Wa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Wa,borderTopRightRadius:Wa,borderBottomLeftRadius:Wa,borderBottomRightRadius:Wa,boxShadow:HT};function O0(i,{layout:e,layoutId:t}){return za.has(i)||i.startsWith("origin")||(e||t!==void 0)&&(!!Nf[i]||i==="opacity")}function Cd(i,e,t){const n=i.style,r=e?.style,s={};if(!n)return s;for(const a in n)(_n(n[a])||r&&_n(r[a])||O0(a,i)||t?.getValue(a)?.liveStyle!==void 0)&&(s[a]=n[a]);return s}function WT(i){return window.getComputedStyle(i)}class XT extends D0{constructor(){super(...arguments),this.type="html",this.renderInstance=F0}readValueFromInstance(e,t){if(za.has(t))return this.projection?.isProjecting?vf(t):fM(e,t);{const n=WT(e),r=(X_(t)?n.getPropertyValue(t):n[t])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return U0(e,t)}build(e,t,n){wd(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Cd(e,t,n)}}const jT={offset:"stroke-dashoffset",array:"stroke-dasharray"},YT={offset:"strokeDashoffset",array:"strokeDasharray"};function qT(i,e,t=1,n=0,r=!0){i.pathLength=1;const s=r?jT:YT;i[s.offset]=`${-n}`,i[s.array]=`${e} ${t}`}const $T=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function B0(i,{attrX:e,attrY:t,attrScale:n,pathLength:r,pathSpacing:s=1,pathOffset:a=0,...o},l,c,u){if(wd(i,o,c),l){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:h,style:f}=i;h.transform&&(f.transform=h.transform,delete h.transform),(f.transform||h.transformOrigin)&&(f.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??"fill-box",delete h.transformBox);for(const d of $T)h[d]!==void 0&&(f[d]=h[d],delete h[d]);e!==void 0&&(h.x=e),t!==void 0&&(h.y=t),n!==void 0&&(h.scale=n),r!==void 0&&qT(h,r,s,a,!1)}const k0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),V0=i=>typeof i=="string"&&i.toLowerCase()==="svg";function KT(i,e,t,n){F0(i,e,void 0,n);for(const r in e.attrs)i.setAttribute(k0.has(r)?r:yd(r),e.attrs[r])}function z0(i,e,t){const n=Cd(i,e,t);for(const r in i)if(_n(i[r])||_n(e[r])){const s=Va.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=i[r]}return n}class ZT extends D0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=sn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(za.has(t)){const n=y0(t);return n&&n.default||0}return t=k0.has(t)?t:yd(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return z0(e,t,n)}build(e,t,n){B0(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){KT(e,t,n,r)}mount(e){this.isSVGTag=V0(e.tagName),super.mount(e)}}const JT=Ad.length;function G0(i){if(!i)return;if(!i.isControllingVariants){const t=i.parent?G0(i.parent)||{}:{};return i.props.initial!==void 0&&(t.initial=i.props.initial),t}const e={};for(let t=0;t<JT;t++){const n=Ad[t],r=i.props[n];(Po(r)||r===!1)&&(e[n]=r)}return e}function H0(i,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==i.length)return!1;for(let n=0;n<t;n++)if(e[n]!==i[n])return!1;return!0}const QT=[...Ed].reverse(),eb=Ed.length;function tb(i){return e=>Promise.all(e.map(({animation:t,options:n})=>JM(i,t,n)))}function nb(i){let e=tb(i),t=em(),n=!0,r=!1;const s=c=>(u,h)=>{const f=As(i,h,c==="exit"?i.presenceContext?.custom:void 0);if(f){const{transition:d,transitionEnd:g,..._}=f;u={...u,..._,...g}}return u};function a(c){e=c(i)}function o(c){const{props:u}=i,h=G0(i.parent)||{},f=[],d=new Set;let g={},_=1/0;for(let m=0;m<eb;m++){const x=QT[m],M=t[x],y=u[x]!==void 0?u[x]:h[x],A=Po(y),b=x===c?M.isActive:null;b===!1&&(_=m);let w=y===h[x]&&y!==u[x]&&A;if(w&&(n||r)&&i.manuallyAnimateOnMount&&(w=!1),M.protectedKeys={...g},!M.isActive&&b===null||!y&&!M.prevProp||Wc(y)||typeof y=="boolean")continue;if(x==="exit"&&M.isActive&&b!==!0){M.prevResolvedValues&&(g={...g,...M.prevResolvedValues});continue}const v=ib(M.prevProp,y);let T=v||x===c&&M.isActive&&!w&&A||m>_&&A,C=!1;const P=Array.isArray(y)?y:[y];let N=P.reduce(s(x),{});b===!1&&(N={});const{prevResolvedValues:G={}}=M,V={...G,...N},I=q=>{T=!0,d.has(q)&&(C=!0,d.delete(q)),M.needsAnimating[q]=!0;const K=i.getValue(q);K&&(K.liveStyle=!1)};for(const q in V){const K=N[q],D=G[q];if(g.hasOwnProperty(q))continue;let le=!1;Ef(K)&&Ef(D)?le=!H0(K,D):le=K!==D,le?K!=null?I(q):d.add(q):K!==void 0&&d.has(q)?I(q):M.protectedKeys[q]=!0}M.prevProp=y,M.prevResolvedValues=N,M.isActive&&(g={...g,...N}),(n||r)&&i.blockInitialAnimation&&(T=!1);const F=w&&v;T&&(!F||C)&&f.push(...P.map(q=>{const K={type:x};if(typeof q=="string"&&(n||r)&&!F&&i.manuallyAnimateOnMount&&i.parent){const{parent:D}=i,le=As(D,q);if(D.enteringChildren&&le){const{delayChildren:Te}=le.transition||{};K.delay=f0(D.enteringChildren,i,Te)}}return{animation:q,options:K}}))}if(d.size){const m={};if(typeof u.initial!="boolean"){const x=As(i,Array.isArray(u.initial)?u.initial[0]:u.initial);x&&x.transition&&(m.transition=x.transition)}d.forEach(x=>{const M=i.getBaseTarget(x),y=i.getValue(x);y&&(y.liveStyle=!0),m[x]=M??null}),f.push({animation:m})}let p=!!f.length;return n&&(u.initial===!1||u.initial===u.animate)&&!i.manuallyAnimateOnMount&&(p=!1),n=!1,r=!1,p?e(f):Promise.resolve()}function l(c,u){if(t[c].isActive===u)return Promise.resolve();i.variantChildren?.forEach(f=>f.animationState?.setActive(c,u)),t[c].isActive=u;const h=o(c);for(const f in t)t[f].protectedKeys={};return h}return{animateChanges:o,setActive:l,setAnimateFunction:a,getState:()=>t,reset:()=>{t=em(),r=!0}}}function ib(i,e){return typeof e=="string"?e!==i:Array.isArray(e)?!H0(e,i):!1}function ss(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function em(){return{animate:ss(!0),whileInView:ss(),whileHover:ss(),whileTap:ss(),whileDrag:ss(),whileFocus:ss(),exit:ss()}}function If(i,e){i.min=e.min,i.max=e.max}function Ri(i,e){If(i.x,e.x),If(i.y,e.y)}function tm(i,e){i.translate=e.translate,i.scale=e.scale,i.originPoint=e.originPoint,i.origin=e.origin}const W0=1e-4,rb=1-W0,sb=1+W0,X0=.01,ab=0-X0,ob=0+X0;function Vn(i){return i.max-i.min}function lb(i,e,t){return Math.abs(i-e)<=t}function nm(i,e,t,n=.5){i.origin=n,i.originPoint=Dt(e.min,e.max,i.origin),i.scale=Vn(t)/Vn(e),i.translate=Dt(t.min,t.max,i.origin)-i.originPoint,(i.scale>=rb&&i.scale<=sb||isNaN(i.scale))&&(i.scale=1),(i.translate>=ab&&i.translate<=ob||isNaN(i.translate))&&(i.translate=0)}function po(i,e,t,n){nm(i.x,e.x,t.x,n?n.originX:void 0),nm(i.y,e.y,t.y,n?n.originY:void 0)}function im(i,e,t,n=0){const r=n?Dt(t.min,t.max,n):t.min;i.min=r+e.min,i.max=i.min+Vn(e)}function cb(i,e,t,n){im(i.x,e.x,t.x,n?.x),im(i.y,e.y,t.y,n?.y)}function rm(i,e,t,n=0){const r=n?Dt(t.min,t.max,n):t.min;i.min=e.min-r,i.max=i.min+Vn(e)}function yc(i,e,t,n){rm(i.x,e.x,t.x,n?.x),rm(i.y,e.y,t.y,n?.y)}function sm(i,e,t,n,r){return i-=e,i=vc(i,1/t,n),r!==void 0&&(i=vc(i,1/r,n)),i}function ub(i,e=0,t=1,n=.5,r,s=i,a=i){if(tr.test(e)&&(e=parseFloat(e),e=Dt(a.min,a.max,e/100)-a.min),typeof e!="number")return;let o=Dt(s.min,s.max,n);i===s&&(o-=e),i.min=sm(i.min,e,t,o,r),i.max=sm(i.max,e,t,o,r)}function am(i,e,[t,n,r],s,a){ub(i,e[t],e[n],e[r],e.scale,s,a)}const fb=["x","scaleX","originX"],hb=["y","scaleY","originY"];function om(i,e,t,n){am(i.x,e,fb,t?t.x:void 0,n?n.x:void 0),am(i.y,e,hb,t?t.y:void 0,n?n.y:void 0)}function lm(i){return i.translate===0&&i.scale===1}function j0(i){return lm(i.x)&&lm(i.y)}function cm(i,e){return i.min===e.min&&i.max===e.max}function db(i,e){return cm(i.x,e.x)&&cm(i.y,e.y)}function um(i,e){return Math.round(i.min)===Math.round(e.min)&&Math.round(i.max)===Math.round(e.max)}function Y0(i,e){return um(i.x,e.x)&&um(i.y,e.y)}function fm(i){return Vn(i.x)/Vn(i.y)}function hm(i,e){return i.translate===e.translate&&i.scale===e.scale&&i.originPoint===e.originPoint}function Xi(i){return[i("x"),i("y")]}function pb(i,e,t){let n="";const r=i.x.translate/e.x,s=i.y.translate/e.y,a=t?.z||0;if((r||s||a)&&(n=`translate3d(${r}px, ${s}px, ${a}px) `),(e.x!==1||e.y!==1)&&(n+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:f,skewX:d,skewY:g}=t;c&&(n=`perspective(${c}px) ${n}`),u&&(n+=`rotate(${u}deg) `),h&&(n+=`rotateX(${h}deg) `),f&&(n+=`rotateY(${f}deg) `),d&&(n+=`skewX(${d}deg) `),g&&(n+=`skewY(${g}deg) `)}const o=i.x.scale*e.x,l=i.y.scale*e.y;return(o!==1||l!==1)&&(n+=`scale(${o}, ${l})`),n||"none"}const q0=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],mb=q0.length,dm=i=>typeof i=="string"?parseFloat(i):i,pm=i=>typeof i=="number"||De.test(i);function gb(i,e,t,n,r,s){r?(i.opacity=Dt(0,t.opacity??1,_b(n)),i.opacityExit=Dt(e.opacity??1,0,xb(n))):s&&(i.opacity=Dt(e.opacity??1,t.opacity??1,n));for(let a=0;a<mb;a++){const o=q0[a];let l=mm(e,o),c=mm(t,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||pm(l)===pm(c)?(i[o]=Math.max(Dt(dm(l),dm(c),n),0),(tr.test(c)||tr.test(l))&&(i[o]+="%")):i[o]=c}(e.rotate||t.rotate)&&(i.rotate=Dt(e.rotate||0,t.rotate||0,n))}function mm(i,e){return i[e]!==void 0?i[e]:i.borderRadius}const _b=$0(0,.5,k_),xb=$0(.5,.95,Ei);function $0(i,e,t){return n=>n<i?0:n>e?1:t(Co(i,e,n))}function vb(i,e,t){const n=_n(i)?i:Ca(i);return n.start(xd("",n,e,t)),n.animation}function Do(i,e,t,n={passive:!0}){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t)}const yb=(i,e)=>i.depth-e.depth;class Sb{constructor(){this.children=[],this.isDirty=!1}add(e){sd(this.children,e),this.isDirty=!0}remove(e){dc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(yb),this.isDirty=!1,this.children.forEach(e)}}function Mb(i,e){const t=kn.now(),n=({timestamp:r})=>{const s=r-t;s>=e&&(Zr(n),i(s-e))};return wt.setup(n,!0),()=>Zr(n)}function Kl(i){return _n(i)?i.get():i}class Tb{constructor(){this.members=[]}add(e){sd(this.members,e);for(let t=this.members.length-1;t>=0;t--){const n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;const r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(dc(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(dc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){const n=this.members[t];if(n.isPresent!==!1&&n.instance?.isConnected!==!1)return this.promote(n),!0}return!1}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();const{layoutDependency:r}=n.options,{layoutDependency:s}=e.options;(r===void 0||r!==s)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const Zl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},uu=["","X","Y","Z"],bb=1e3;let Eb=0;function fu(i,e,t,n){const{latestValues:r}=e;r[i]&&(t[i]=r[i],e.setStaticValue(i,0),n&&(n[i]=0))}function K0(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:e}=i.options;if(!e)return;const t=g0(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:r,layoutId:s}=i.options;window.MotionCancelOptimisedAnimation(t,"transform",wt,!(r||s))}const{parent:n}=i;n&&!n.hasCheckedOptimisedAppear&&K0(n)}function Z0({attachResizeListener:i,defaultParent:e,measureScroll:t,checkIsScrollRoot:n,resetTransform:r}){return class{constructor(a={},o=e?.()){this.id=Eb++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Cb),this.nodes.forEach(Ib),this.nodes.forEach(Ub),this.nodes.forEach(Rb)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Sb)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new od),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=bd(a)&&!wT(a),this.instance=a;const{layoutId:o,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||o)&&(this.isLayoutDirty=!0),i){let u,h=0;const f=()=>this.root.updateBlockedByResize=!1;wt.read(()=>{h=window.innerWidth}),i(a,()=>{const d=window.innerWidth;d!==h&&(h=d,this.root.updateBlockedByResize=!0,u&&u(),u=Mb(f,250),Zl.hasAnimatedSinceResize&&(Zl.hasAnimatedSinceResize=!1,this.nodes.forEach(xm)))})}o&&this.root.registerSharedNode(o,this),this.options.animate!==!1&&c&&(o||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:f,layout:d})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||c.getDefaultTransition()||Vb,{onLayoutAnimationStart:_,onLayoutAnimationComplete:p}=c.getProps(),m=!this.targetLayout||!Y0(this.targetLayout,d),x=!h&&f;if(this.options.layoutRoot||this.resumeFrom||x||h&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const M={..._d(g,"layout"),onPlay:_,onComplete:p};(c.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M),this.setAnimationOrigin(u,x)}else h||xm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=d})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Zr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Fb),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&K0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,(typeof h.latestValues.x=="string"||typeof h.latestValues.y=="string")&&(h.isLayoutDirty=!0),h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(Db),this.nodes.forEach(gm);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(_m);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Lb),this.nodes.forEach(Nb),this.nodes.forEach(Ab),this.nodes.forEach(wb)):this.nodes.forEach(_m),this.clearAllSnapshots();const o=kn.now();gn.delta=sr(0,1e3/60,o-gn.timestamp),gn.timestamp=o,gn.isProcessing=!0,nu.update.process(gn),nu.preRender.process(gn),nu.render.process(gn),gn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Md.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Pb),this.sharedNodes.forEach(Ob)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,wt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){wt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vn(this.snapshot.measuredBox.x)&&!Vn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=sn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o&&this.instance){const l=n(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!j0(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;a&&this.instance&&(o||hs(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),zb(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return sn();const o=a.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Gb))){const{scroll:c}=this.root;c&&(qi(o.x,c.offset.x),qi(o.y,c.offset.y))}return o}removeElementScroll(a){const o=sn();if(Ri(o,a),this.scroll?.wasRoot)return o;for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:h}=c;c!==this.root&&u&&h.layoutScroll&&(u.wasRoot&&Ri(o,a),qi(o.x,u.offset.x),qi(o.y,u.offset.y))}return o}applyTransform(a,o=!1,l){const c=l||sn();Ri(c,a);for(let u=0;u<this.path.length;u++){const h=this.path[u];!o&&h.options.layoutScroll&&h.scroll&&h!==h.root&&(qi(c.x,-h.scroll.offset.x),qi(c.y,-h.scroll.offset.y)),hs(h.latestValues)&&$l(c,h.latestValues,h.layout?.layoutBox)}return hs(this.latestValues)&&$l(c,this.latestValues,this.layout?.layoutBox),c}removeTransform(a){const o=sn();Ri(o,a);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!hs(c.latestValues))continue;let u;c.instance&&(Df(c.latestValues)&&c.updateSnapshot(),u=sn(),Ri(u,c.measurePageBox())),om(o,c.latestValues,c.snapshot?.layoutBox,u)}return hs(this.latestValues)&&om(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==gn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){const o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==o;if(!(a||l&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:h}=this.options;if(!this.layout||!(u||h))return;this.resolvedRelativeTargetAt=gn.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=sn(),this.targetWithTransforms=sn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),cb(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ri(this.target,this.layout.layoutBox),I0(this.target,this.targetDelta)):Ri(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Df(this.parent.latestValues)||N0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(a,o,l){this.relativeParent=a,this.linkedParentVersion=a.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=sn(),this.relativeTargetOrigin=sn(),yc(this.relativeTargetOrigin,o,l,this.options.layoutAnchor||void 0),Ri(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const a=this.getLead(),o=!!this.resumingFrom||this!==a;let l=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(l=!1),o&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===gn.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Ri(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,f=this.treeScale.y;BT(this.layoutCorrected,this.treeScale,this.path,o),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=sn());const{target:d}=a;if(!d){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(tm(this.prevProjectionDelta.x,this.projectionDelta.x),tm(this.prevProjectionDelta.y,this.projectionDelta.y)),po(this.projectionDelta,this.layoutCorrected,d,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==f||!hm(this.projectionDelta.x,this.prevProjectionDelta.x)||!hm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",d))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.visualElement?.scheduleRender(),a){const o=this.getStack();o&&o.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=pa(),this.projectionDelta=pa(),this.projectionDeltaWithTransform=pa()}setAnimationOrigin(a,o=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=pa();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const f=sn(),d=l?l.source:void 0,g=this.layout?this.layout.source:void 0,_=d!==g,p=this.getStack(),m=!p||p.members.length<=1,x=!!(_&&!m&&this.options.crossfade===!0&&!this.path.some(kb));this.animationProgress=0;let M;this.mixTargetDelta=y=>{const A=y/1e3;vm(h.x,a.x,A),vm(h.y,a.y,A),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(yc(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Bb(this.relativeTarget,this.relativeTargetOrigin,f,A),M&&db(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=sn()),Ri(M,this.relativeTarget)),_&&(this.animationValues=u,gb(u,c,this.latestValues,A,x,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Zr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=wt.update(()=>{Zl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ca(0)),this.motionValue.jump(0,!1),this.currentAnimation=vb(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onStop:()=>{},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(bb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:u}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&J0(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||sn();const h=Vn(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+h;const f=Vn(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+f}Ri(o,l),$l(o,u),po(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new Tb),this.sharedNodes.get(a).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){const{layoutId:a}=this.options;return a?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:a}=this.options;return a?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const c={};l.z&&fu("z",a,c,this.animationValues);for(let u=0;u<uu.length;u++)fu(`rotate${uu[u]}`,a,c,this.animationValues),fu(`skew${uu[u]}`,a,c,this.animationValues);a.render();for(const u in c)a.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);a.scheduleRender()}applyProjectionStyles(a,o){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=Kl(o?.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=Kl(o?.pointerEvents)||""),this.hasProjected&&!hs(this.latestValues)&&(a.transform=l?l({},""):"none",this.hasProjected=!1);return}a.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let h=pb(this.projectionDeltaWithTransform,this.treeScale,u);l&&(h=l(u,h)),a.transform=h;const{x:f,y:d}=this.projectionDelta;a.transformOrigin=`${f.origin*100}% ${d.origin*100}% 0`,c.animationValues?a.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:a.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const g in Nf){if(u[g]===void 0)continue;const{correct:_,applyTo:p,isCSSVariable:m}=Nf[g],x=h==="none"?u[g]:_(u[g],c);if(p){const M=p.length;for(let y=0;y<M;y++)a[p[y]]=x}else m?this.options.visualElement.renderState.vars[g]=x:a[g]=x}this.options.layoutId&&(a.pointerEvents=c===this?Kl(o?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>a.currentAnimation?.stop()),this.root.nodes.forEach(gm),this.root.sharedNodes.clear()}}}function Ab(i){i.updateLayout()}function wb(i){const e=i.resumeFrom?.snapshot||i.snapshot;if(i.isLead()&&i.layout&&e&&i.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:n}=i.layout,{animationType:r}=i.options,s=e.source!==i.layout.source;if(r==="size")Xi(u=>{const h=s?e.measuredBox[u]:e.layoutBox[u],f=Vn(h);h.min=t[u].min,h.max=h.min+f});else if(r==="x"||r==="y"){const u=r==="x"?"y":"x";If(s?e.measuredBox[u]:e.layoutBox[u],t[u])}else J0(r,e.layoutBox,t)&&Xi(u=>{const h=s?e.measuredBox[u]:e.layoutBox[u],f=Vn(t[u]);h.max=h.min+f,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[u].max=i.relativeTarget[u].min+f)});const a=pa();po(a,t,e.layoutBox);const o=pa();s?po(o,i.applyTransform(n,!0),e.measuredBox):po(o,t,e.layoutBox);const l=!j0(a);let c=!1;if(!i.resumeFrom){const u=i.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:h,layout:f}=u;if(h&&f){const d=i.options.layoutAnchor||void 0,g=sn();yc(g,e.layoutBox,h.layoutBox,d);const _=sn();yc(_,t,f.layoutBox,d),Y0(g,_)||(c=!0),u.options.layoutRoot&&(i.relativeTarget=_,i.relativeTargetOrigin=g,i.relativeParent=u)}}}i.notifyListeners("didUpdate",{layout:t,snapshot:e,delta:o,layoutDelta:a,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(i.isLead()){const{onExitComplete:t}=i.options;t&&t()}i.options.transition=void 0}function Cb(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function Rb(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function Pb(i){i.clearSnapshot()}function gm(i){i.clearMeasurements()}function Db(i){i.isLayoutDirty=!0,i.updateLayout()}function _m(i){i.isLayoutDirty=!1}function Lb(i){i.isAnimationBlocked&&i.layout&&!i.isLayoutDirty&&(i.snapshot=i.layout,i.isLayoutDirty=!0)}function Nb(i){const{visualElement:e}=i.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),i.resetTransform()}function xm(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function Ib(i){i.resolveTargetDelta()}function Ub(i){i.calcProjection()}function Fb(i){i.resetSkewAndRotation()}function Ob(i){i.removeLeadSnapshot()}function vm(i,e,t){i.translate=Dt(e.translate,0,t),i.scale=Dt(e.scale,1,t),i.origin=e.origin,i.originPoint=e.originPoint}function ym(i,e,t,n){i.min=Dt(e.min,t.min,n),i.max=Dt(e.max,t.max,n)}function Bb(i,e,t,n){ym(i.x,e.x,t.x,n),ym(i.y,e.y,t.y,n)}function kb(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const Vb={duration:.45,ease:[.4,0,.1,1]},Sm=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),Mm=Sm("applewebkit/")&&!Sm("chrome/")?Math.round:Ei;function Tm(i){i.min=Mm(i.min),i.max=Mm(i.max)}function zb(i){Tm(i.x),Tm(i.y)}function J0(i,e,t){return i==="position"||i==="preserve-aspect"&&!lb(fm(e),fm(t),.2)}function Gb(i){return i!==i.root&&i.scroll?.wasRoot}const Hb=Z0({attachResizeListener:(i,e)=>Do(i,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),hu={current:void 0},Q0=Z0({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!hu.current){const i=new Hb({});i.mount(window),i.setOptions({layoutScroll:!0}),hu.current=i}return hu.current},resetTransform:(i,e)=>{i.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),Rd=me.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function bm(i,e){if(typeof i=="function")return i(e);i!=null&&(i.current=e)}function Wb(...i){return e=>{let t=!1;const n=i.map(r=>{const s=bm(r,e);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let r=0;r<n.length;r++){const s=n[r];typeof s=="function"?s():bm(i[r],null)}}}}function Xb(...i){return me.useCallback(Wb(...i),i)}class jb extends me.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(Wl(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const n=t.offsetParent,r=Wl(n)&&n.offsetWidth||0,s=Wl(n)&&n.offsetHeight||0,a=getComputedStyle(t),o=this.props.sizeRef.current;o.height=parseFloat(a.height),o.width=parseFloat(a.width),o.top=t.offsetTop,o.left=t.offsetLeft,o.right=r-o.width-o.left,o.bottom=s-o.height-o.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Yb({children:i,isPresent:e,anchorX:t,anchorY:n,root:r,pop:s}){const a=me.useId(),o=me.useRef(null),l=me.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=me.useContext(Rd),u=i.props?.ref??i?.ref,h=Xb(o,u);return me.useInsertionEffect(()=>{const{width:f,height:d,top:g,left:_,right:p,bottom:m}=l.current;if(e||s===!1||!o.current||!f||!d)return;const x=t==="left"?`left: ${_}`:`right: ${p}`,M=n==="bottom"?`bottom: ${m}`:`top: ${g}`;o.current.dataset.motionPopId=a;const y=document.createElement("style");c&&(y.nonce=c);const A=r??document.head;return A.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${d}px !important;
            ${x}px !important;
            ${M}px !important;
          }
        `),()=>{o.current?.removeAttribute("data-motion-pop-id"),A.contains(y)&&A.removeChild(y)}},[e]),L.jsx(jb,{isPresent:e,childRef:o,sizeRef:l,pop:s,children:s===!1?i:me.cloneElement(i,{ref:h})})}const qb=({children:i,initial:e,isPresent:t,onExitComplete:n,custom:r,presenceAffectsLayout:s,mode:a,anchorX:o,anchorY:l,root:c})=>{const u=rd($b),h=me.useId();let f=!0,d=me.useMemo(()=>(f=!1,{id:h,initial:e,isPresent:t,custom:r,onExitComplete:g=>{u.set(g,!0);for(const _ of u.values())if(!_)return;n&&n()},register:g=>(u.set(g,!1),()=>u.delete(g))}),[t,u,n]);return s&&f&&(d={...d}),me.useMemo(()=>{u.forEach((g,_)=>u.set(_,!1))},[t]),me.useEffect(()=>{!t&&!u.size&&n&&n()},[t]),i=L.jsx(Yb,{pop:a==="popLayout",isPresent:t,anchorX:o,anchorY:l,root:c,children:i}),L.jsx(Gc.Provider,{value:d,children:i})};function $b(){return new Map}function ex(i=!0){const e=me.useContext(Gc);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,s=me.useId();me.useEffect(()=>{if(i)return r(s)},[i]);const a=me.useCallback(()=>i&&n&&n(s),[s,n,i]);return!t&&n?[!1,a]:[!0]}const tl=i=>i.key||"";function Em(i){const e=[];return me.Children.forEach(i,t=>{me.isValidElement(t)&&e.push(t)}),e}const Am=({children:i,custom:e,initial:t=!0,onExitComplete:n,presenceAffectsLayout:r=!0,mode:s="sync",propagate:a=!1,anchorX:o="left",anchorY:l="top",root:c})=>{const[u,h]=ex(a),f=me.useMemo(()=>Em(i),[i]),d=a&&!u?[]:f.map(tl),g=me.useRef(!0),_=me.useRef(f),p=rd(()=>new Map),m=me.useRef(new Set),[x,M]=me.useState(f),[y,A]=me.useState(f);w_(()=>{g.current=!1,_.current=f;for(let v=0;v<y.length;v++){const T=tl(y[v]);d.includes(T)?(p.delete(T),m.current.delete(T)):p.get(T)!==!0&&p.set(T,!1)}},[y,d.length,d.join("-")]);const b=[];if(f!==x){let v=[...f];for(let T=0;T<y.length;T++){const C=y[T],P=tl(C);d.includes(P)||(v.splice(T,0,C),b.push(C))}return s==="wait"&&b.length&&(v=b),A(Em(v)),M(f),null}const{forceRender:w}=me.useContext(id);return L.jsx(L.Fragment,{children:y.map(v=>{const T=tl(v),C=a&&!u?!1:f===y||d.includes(T),P=()=>{if(m.current.has(T))return;if(p.has(T))m.current.add(T),p.set(T,!0);else return;let N=!0;p.forEach(G=>{G||(N=!1)}),N&&(w?.(),A(_.current),a&&h?.(),n&&n())};return L.jsx(qb,{isPresent:C,initial:!g.current||t?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:C?void 0:P,anchorX:o,anchorY:l,children:v},T)})})},tx=me.createContext({strict:!1}),wm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Cm=!1;function Kb(){if(Cm)return;const i={};for(const e in wm)i[e]={isEnabled:t=>wm[e].some(n=>!!t[n])};P0(i),Cm=!0}function nx(){return Kb(),IT()}function Zb(i){const e=nx();for(const t in i)e[t]={...e[t],...i[t]};P0(e)}const Jb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Sc(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||Jb.has(i)}let ix=i=>!Sc(i);function Qb(i){typeof i=="function"&&(ix=e=>e.startsWith("on")?!Sc(e):i(e))}try{Qb(require("@emotion/is-prop-valid").default)}catch{}function eE(i,e,t){const n={};for(const r in i)r==="values"&&typeof i.values=="object"||_n(i[r])||(ix(r)||t===!0&&Sc(r)||!e&&!Sc(r)||i.draggable&&r.startsWith("onDrag"))&&(n[r]=i[r]);return n}const jc=me.createContext({});function tE(i,e){if(Xc(i)){const{initial:t,animate:n}=i;return{initial:t===!1||Po(t)?t:void 0,animate:Po(n)?n:void 0}}return i.inherit!==!1?e:{}}function nE(i){const{initial:e,animate:t}=tE(i,me.useContext(jc));return me.useMemo(()=>({initial:e,animate:t}),[Rm(e),Rm(t)])}function Rm(i){return Array.isArray(i)?i.join(" "):i}const Pd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function rx(i,e,t){for(const n in e)!_n(e[n])&&!O0(n,t)&&(i[n]=e[n])}function iE({transformTemplate:i},e){return me.useMemo(()=>{const t=Pd();return wd(t,e,i),Object.assign({},t.vars,t.style)},[e])}function rE(i,e){const t=i.style||{},n={};return rx(n,t,i),Object.assign(n,iE(i,e)),n}function sE(i,e){const t={},n=rE(i,e);return i.drag&&i.dragListener!==!1&&(t.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(t.tabIndex=0),t.style=n,t}const sx=()=>({...Pd(),attrs:{}});function aE(i,e,t,n){const r=me.useMemo(()=>{const s=sx();return B0(s,e,V0(n),i.transformTemplate,i.style),{...s.attrs,style:{...s.style}}},[e]);if(i.style){const s={};rx(s,i.style,i),r.style={...s,...r.style}}return r}const oE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Dd(i){return typeof i!="string"||i.includes("-")?!1:!!(oE.indexOf(i)>-1||/[A-Z]/u.test(i))}function lE(i,e,t,{latestValues:n},r,s=!1,a){const l=(a??Dd(i)?aE:sE)(e,n,r,i),c=eE(e,typeof i=="string",s),u=i!==me.Fragment?{...c,...l,ref:t}:{},{children:h}=e,f=me.useMemo(()=>_n(h)?h.get():h,[h]);return me.createElement(i,{...u,children:f})}function cE({scrapeMotionValuesFromProps:i,createRenderState:e},t,n,r){return{latestValues:uE(t,n,r,i),renderState:e()}}function uE(i,e,t,n){const r={},s=n(i,{});for(const f in s)r[f]=Kl(s[f]);let{initial:a,animate:o}=i;const l=Xc(i),c=C0(i);e&&c&&!l&&i.inherit!==!1&&(a===void 0&&(a=e.initial),o===void 0&&(o=e.animate));let u=t?t.initial===!1:!1;u=u||a===!1;const h=u?o:a;if(h&&typeof h!="boolean"&&!Wc(h)){const f=Array.isArray(h)?h:[h];for(let d=0;d<f.length;d++){const g=vd(i,f[d]);if(g){const{transitionEnd:_,transition:p,...m}=g;for(const x in m){let M=m[x];if(Array.isArray(M)){const y=u?M.length-1:0;M=M[y]}M!==null&&(r[x]=M)}for(const x in _)r[x]=_[x]}}}return r}const ax=i=>(e,t)=>{const n=me.useContext(jc),r=me.useContext(Gc),s=()=>cE(i,e,n,r);return t?s():rd(s)},fE=ax({scrapeMotionValuesFromProps:Cd,createRenderState:Pd}),hE=ax({scrapeMotionValuesFromProps:z0,createRenderState:sx}),dE=Symbol.for("motionComponentSymbol");function pE(i,e,t){const n=me.useRef(t);me.useInsertionEffect(()=>{n.current=t});const r=me.useRef(null);return me.useCallback(s=>{s&&i.onMount?.(s);const a=n.current;if(typeof a=="function")if(s){const o=a(s);typeof o=="function"&&(r.current=o)}else r.current?(r.current(),r.current=null):a(s);else a&&(a.current=s);e&&(s?e.mount(s):e.unmount())},[e])}const ox=me.createContext({});function ca(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function mE(i,e,t,n,r,s){const{visualElement:a}=me.useContext(jc),o=me.useContext(tx),l=me.useContext(Gc),c=me.useContext(Rd),u=c.reducedMotion,h=c.skipAnimations,f=me.useRef(null),d=me.useRef(!1);n=n||o.renderer,!f.current&&n&&(f.current=n(i,{visualState:e,parent:a,props:t,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:h,isSVG:s}),d.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const g=f.current,_=me.useContext(ox);g&&!g.projection&&r&&(g.type==="html"||g.type==="svg")&&gE(f.current,t,r,_);const p=me.useRef(!1);me.useInsertionEffect(()=>{g&&p.current&&g.update(t,l)});const m=t[m0],x=me.useRef(!!m&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(m)&&window.MotionHasOptimisedAnimation?.(m));return w_(()=>{d.current=!0,g&&(p.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),x.current&&g.animationState&&g.animationState.animateChanges())}),me.useEffect(()=>{g&&(!x.current&&g.animationState&&g.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(m)}),x.current=!1),g.enteringChildren=void 0)}),g}function gE(i,e,t,n){const{layoutId:r,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:h}=e;i.projection=new t(i.latestValues,e["data-framer-portal-id"]?void 0:lx(i.parent)),i.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!a||o&&ca(o),visualElement:i,animationType:typeof s=="string"?s:"both",initialPromotionConfig:n,crossfade:h,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function lx(i){if(i)return i.options.allowProjection!==!1?i.projection:lx(i.parent)}function du(i,{forwardMotionProps:e=!1,type:t}={},n,r){n&&Zb(n);const s=t?t==="svg":Dd(i),a=s?hE:fE;function o(c,u){let h;const f={...me.useContext(Rd),...c,layoutId:_E(c)},{isStatic:d}=f,g=nE(c),_=a(c,d);if(!d&&typeof window<"u"){xE();const p=vE(f);h=p.MeasureLayout,g.visualElement=mE(i,_,f,r,p.ProjectionNode,s)}return L.jsxs(jc.Provider,{value:g,children:[h&&g.visualElement?L.jsx(h,{visualElement:g.visualElement,...f}):null,lE(i,c,pE(_,g.visualElement,u),_,d,e,s)]})}o.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const l=me.forwardRef(o);return l[dE]=i,l}function _E({layoutId:i}){const e=me.useContext(id).id;return e&&i!==void 0?e+"-"+i:i}function xE(i,e){me.useContext(tx).strict}function vE(i){const e=nx(),{drag:t,layout:n}=e;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t?.isEnabled(i)||n?.isEnabled(i)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function yE(i,e){if(typeof Proxy>"u")return du;const t=new Map,n=(s,a)=>du(s,a,i,e),r=(s,a)=>n(s,a);return new Proxy(r,{get:(s,a)=>a==="create"?n:(t.has(a)||t.set(a,du(a,void 0,i,e)),t.get(a))})}const SE=(i,e)=>e.isSVG??Dd(i)?new ZT(e):new XT(e,{allowProjection:i!==me.Fragment});class ME extends is{constructor(e){super(e),e.animationState||(e.animationState=nb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Wc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let TE=0;class bE extends is{constructor(){super(...arguments),this.id=TE++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){const{initial:s,custom:a}=this.node.getProps();if(typeof s=="string"){const o=As(this.node,s,a);if(o){const{transition:l,transitionEnd:c,...u}=o;for(const h in u)this.node.getValue(h)?.jump(u[h])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const EE={animation:{Feature:ME},exit:{Feature:bE}};function Yo(i){return{point:{x:i.pageX,y:i.pageY}}}const AE=i=>e=>Td(e)&&i(e,Yo(e));function mo(i,e,t,n){return Do(i,e,AE(t),n)}const cx=({current:i})=>i?i.ownerDocument.defaultView:null,Pm=(i,e)=>Math.abs(i-e);function wE(i,e){const t=Pm(i.x,e.x),n=Pm(i.y,e.y);return Math.sqrt(t**2+n**2)}const Dm=new Set(["auto","scroll"]);class ux{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=d=>{this.handleScroll(d.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=nl(this.lastRawMoveEventInfo,this.transformPagePoint));const d=pu(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,_=wE(d.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!_)return;const{point:p}=d,{timestamp:m}=gn;this.history.push({...p,timestamp:m});const{onStart:x,onMove:M}=this.handlers;g||(x&&x(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),M&&M(this.lastMoveEvent,d)},this.handlePointerMove=(d,g)=>{this.lastMoveEvent=d,this.lastRawMoveEventInfo=g,this.lastMoveEventInfo=nl(g,this.transformPagePoint),wt.update(this.updatePoint,!0)},this.handlePointerUp=(d,g)=>{this.end();const{onEnd:_,onSessionEnd:p,resumeAnimation:m}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=pu(d.type==="pointercancel"?this.lastMoveEventInfo:nl(g,this.transformPagePoint),this.history);this.startEvent&&_&&_(d,x),p&&p(d,x)},!Td(e))return;this.dragSnapToOrigin=s,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;const l=Yo(e),c=nl(l,this.transformPagePoint),{point:u}=c,{timestamp:h}=gn;this.history=[{...u,timestamp:h}];const{onSessionStart:f}=t;f&&f(e,pu(c,this.history)),this.removeListeners=Wo(mo(this.contextWindow,"pointermove",this.handlePointerMove),mo(this.contextWindow,"pointerup",this.handlePointerUp),mo(this.contextWindow,"pointercancel",this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){const n=getComputedStyle(t);(Dm.has(n.overflowX)||Dm.has(n.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-t.x,y:r.y-t.y};s.x===0&&s.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),wt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Zr(this.updatePoint)}}function nl(i,e){return e?{point:e(i.point)}:i}function Lm(i,e){return{x:i.x-e.x,y:i.y-e.y}}function pu({point:i},e){return{point:i,delta:Lm(i,fx(e)),offset:Lm(i,CE(e)),velocity:RE(e,.1)}}function CE(i){return i[0]}function fx(i){return i[i.length-1]}function RE(i,e){if(i.length<2)return{x:0,y:0};let t=i.length-1,n=null;const r=fx(i);for(;t>=0&&(n=i[t],!(r.timestamp-n.timestamp>ci(e)));)t--;if(!n)return{x:0,y:0};n===i[0]&&i.length>2&&r.timestamp-n.timestamp>ci(e)*2&&(n=i[1]);const s=Mi(r.timestamp-n.timestamp);if(s===0)return{x:0,y:0};const a={x:(r.x-n.x)/s,y:(r.y-n.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function PE(i,{min:e,max:t},n){return e!==void 0&&i<e?i=n?Dt(e,i,n.min):Math.max(i,e):t!==void 0&&i>t&&(i=n?Dt(t,i,n.max):Math.min(i,t)),i}function Nm(i,e,t){return{min:e!==void 0?i.min+e:void 0,max:t!==void 0?i.max+t-(i.max-i.min):void 0}}function DE(i,{top:e,left:t,bottom:n,right:r}){return{x:Nm(i.x,t,r),y:Nm(i.y,e,n)}}function Im(i,e){let t=e.min-i.min,n=e.max-i.max;return e.max-e.min<i.max-i.min&&([t,n]=[n,t]),{min:t,max:n}}function LE(i,e){return{x:Im(i.x,e.x),y:Im(i.y,e.y)}}function NE(i,e){let t=.5;const n=Vn(i),r=Vn(e);return r>n?t=Co(e.min,e.max-n,i.min):n>r&&(t=Co(i.min,i.max-r,e.min)),sr(0,1,t)}function IE(i,e){const t={};return e.min!==void 0&&(t.min=e.min-i.min),e.max!==void 0&&(t.max=e.max-i.min),t}const Uf=.35;function UE(i=Uf){return i===!1?i=0:i===!0&&(i=Uf),{x:Um(i,"left","right"),y:Um(i,"top","bottom")}}function Um(i,e,t){return{min:Fm(i,e),max:Fm(i,t)}}function Fm(i,e){return typeof i=="number"?i:i[e]||0}const FE=new WeakMap;class OE{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=sn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=h=>{t&&this.snapToCursor(Yo(h).point),this.stopAnimation()},a=(h,f)=>{const{drag:d,dragPropagation:g,onDragStart:_}=this.getProps();if(d&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=uT(d),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xi(m=>{let x=this.getAxisMotionValue(m).get()||0;if(tr.test(x)){const{projection:M}=this.visualElement;if(M&&M.layout){const y=M.layout.layoutBox[m];y&&(x=Vn(y)*(parseFloat(x)/100))}}this.originPoint[m]=x}),_&&wt.update(()=>_(h,f),!1,!0),Af(this.visualElement,"transform");const{animationState:p}=this.visualElement;p&&p.setActive("whileDrag",!0)},o=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f;const{dragPropagation:d,dragDirectionLock:g,onDirectionLock:_,onDrag:p}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:m}=f;if(g&&this.currentDirection===null){this.currentDirection=kE(m),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),p&&wt.update(()=>p(h,f),!1,!0)},l=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f,this.stop(h,f),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new ux(e,{onSessionStart:s,onStart:a,onMove:o,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:n,contextWindow:cx(this.visualElement),element:this.visualElement.current})}stop(e,t){const n=e||this.latestPointerEvent,r=t||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!n)return;const{velocity:a}=r;this.startAnimation(a);const{onDragEnd:o}=this.getProps();o&&wt.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!il(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=PE(a,this.constraints[e],this.elastic[e])),s.set(a)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&ca(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&n?this.constraints=DE(n.layoutBox,e):this.constraints=!1,this.elastic=UE(t),r!==this.constraints&&!ca(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Xi(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=IE(n.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!ca(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=kT(n,r.root,this.visualElement.getTransformPagePoint());let a=LE(r.layout.layoutBox,s);if(t){const o=t(FT(a));this.hasMutatedConstraints=!!o,o&&(a=L0(o))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=Xi(u=>{if(!il(u,t,this.currentDirection))return;let h=l&&l[u]||{};(a===!0||a===u)&&(h={min:0,max:0});const f=r?200:1e6,d=r?40:1e7,g={type:"inertia",velocity:n?e[u]:0,bounceStiffness:f,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return Af(this.visualElement,e),n.start(xd(e,n,0,t,this.visualElement,!1))}stopAnimation(){Xi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Xi(t=>{const{drag:n}=this.getProps();if(!il(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(t);if(r&&r.layout){const{min:a,max:o}=r.layout.layoutBox[t],l=s.get()||0;s.set(e[t]-Dt(a,o,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!ca(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Xi(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();r[a]=NE({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Xi(a=>{if(!il(a,e,null))return;const o=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];o.set(Dt(l,c,r[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;FE.set(this.visualElement,this);const e=this.visualElement.current,t=mo(e,"pointerdown",c=>{const{drag:u,dragListener:h=!0}=this.getProps(),f=c.target,d=f!==e&&gT(f);u&&h&&!d&&this.start(c)});let n;const r=()=>{const{dragConstraints:c}=this.getProps();ca(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),n||(n=BE(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,a=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),wt.read(r);const o=Do(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",(({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Xi(h=>{const f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=c[h].translate,f.set(f.get()+c[h].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),l&&l(),n&&n()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:a=Uf,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function Om(i){let e=!0;return()=>{if(e){e=!1;return}i()}}function BE(i,e,t){const n=Hp(i,Om(t)),r=Hp(e,Om(t));return()=>{n(),r()}}function il(i,e,t){return(e===!0||e===i)&&(t===null||t===i)}function kE(i,e=10){let t=null;return Math.abs(i.y)>e?t="y":Math.abs(i.x)>e&&(t="x"),t}class VE extends is{constructor(e){super(e),this.removeGroupControls=Ei,this.removeListeners=Ei,this.controls=new OE(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ei}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const mu=i=>(e,t)=>{i&&wt.update(()=>i(e,t),!1,!0)};class zE extends is{constructor(){super(...arguments),this.removePointerDownListener=Ei}onPointerDown(e){this.session=new ux(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:cx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:mu(e),onStart:mu(t),onMove:mu(n),onEnd:(s,a)=>{delete this.session,r&&wt.postRender(()=>r(s,a))}}}mount(){this.removePointerDownListener=mo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let gu=!1;class GE extends me.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:s}=e;s&&(t.group&&t.group.add(s),n&&n.register&&r&&n.register(s),gu&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Zl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:s}=this.props,{projection:a}=n;return a&&(a.isPresent=s,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),gu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==s?a.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?a.promote():a.relegate()||wt.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Md.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;gu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function hx(i){const[e,t]=ex(),n=me.useContext(id);return L.jsx(GE,{...i,layoutGroup:n,switchLayoutGroup:me.useContext(ox),isPresent:e,safeToRemove:t})}const HE={pan:{Feature:zE},drag:{Feature:VE,ProjectionNode:Q0,MeasureLayout:hx}};function Bm(i,e,t){const{props:n}=i;i.animationState&&n.whileHover&&i.animationState.setActive("whileHover",t==="Start");const r="onHover"+t,s=n[r];s&&wt.postRender(()=>s(e,Yo(e)))}class WE extends is{mount(){const{current:e}=this.node;e&&(this.unmount=hT(e,(t,n)=>(Bm(this.node,n,"Start"),r=>Bm(this.node,r,"End"))))}unmount(){}}class XE extends is{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Wo(Do(this.node.current,"focus",()=>this.onFocus()),Do(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function km(i,e,t){const{props:n}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&n.whileTap&&i.animationState.setActive("whileTap",t==="Start");const r="onTap"+(t==="End"?"":t),s=n[r];s&&wt.postRender(()=>s(e,Yo(e)))}class jE extends is{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=xT(e,(r,s)=>(km(this.node,s,"Start"),(a,{success:o})=>km(this.node,a,o?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}}const Ff=new WeakMap,_u=new WeakMap,YE=i=>{const e=Ff.get(i.target);e&&e(i)},qE=i=>{i.forEach(YE)};function $E({root:i,...e}){const t=i||document;_u.has(t)||_u.set(t,{});const n=_u.get(t),r=JSON.stringify(e);return n[r]||(n[r]=new IntersectionObserver(qE,{root:i,...e})),n[r]}function KE(i,e,t){const n=$E(e);return Ff.set(i,t),n.observe(i),()=>{Ff.delete(i),n.unobserve(i)}}const ZE={some:0,all:1};class JE extends is{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:s}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r=="number"?r:ZE[r]},o=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),f=c?u:h;f&&f(l)};this.stopObserver=KE(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(QE(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function QE({viewport:i={}},{viewport:e={}}={}){return t=>i[t]!==e[t]}const e1={inView:{Feature:JE},tap:{Feature:jE},focus:{Feature:XE},hover:{Feature:WE}},t1={layout:{ProjectionNode:Q0,MeasureLayout:hx}},n1={...EE,...e1,...HE,...t1},Fi=yE(n1,SE);function Of({href:i,onClick:e,children:t,className:n="",strength:r=.35}){const s=me.useRef(null),a=c=>{const u=s.current;if(!u)return;const h=u.getBoundingClientRect(),f=c.clientX-h.left-h.width/2,d=c.clientY-h.top-h.height/2;u.style.transform=`translate(${f*r}px, ${d*r}px)`},o=()=>{const c=s.current;c&&(c.style.transform="translate(0,0)")},l={className:`inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-out ${n}`,onMouseMove:a,onMouseLeave:o};return i?L.jsx("a",{ref:s,href:i,...l,children:t}):L.jsx("button",{ref:s,onClick:e,...l,children:t})}const Vm=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Team",href:"#team"},{label:"Gallery",href:"#gallery"},{label:"Services",href:"#services",children:["Tax Planning","GST Services","Audit & Assurance","Company Registration","Business Consulting","Compliance Services"]},{label:"Query",href:"#contact"},{label:"Career",href:"#career"},{label:"Contact",href:"#contact"}];function i1(){const[i,e]=me.useState(!1),[t,n]=me.useState(!1),[r,s]=me.useState(!1);return me.useEffect(()=>{const a=()=>e(window.scrollY>24);return a(),window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),L.jsxs("header",{className:`sticky top-0 z-40 transition-all duration-500 ${i?"glass-strong shadow-soft backdrop-saturate-150":"bg-transparent"}`,children:[L.jsxs("div",{className:"container mx-auto px-6 h-20 flex items-center justify-between gap-6",children:[L.jsxs("a",{href:"#home",className:"flex items-center gap-3 shrink-0 group",children:[L.jsxs("div",{className:"relative",children:[L.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-30 blur-md transition-opacity"}),L.jsx("img",{src:"https://api.digitechai.in/uploads/logo.png",alt:"ABC & Associates",className:"relative h-10 w-auto"})]}),L.jsxs("span",{className:"hidden sm:block font-bold text-base tracking-tight",children:["ABC ",L.jsx("span",{className:"text-gradient",children:"& Associates"})]})]}),L.jsx("nav",{className:"hidden lg:flex items-center gap-7 text-sm font-medium",children:Vm.map(a=>a.children?L.jsxs("div",{className:"relative",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[L.jsxs("button",{className:"nav-link flex items-center gap-1",children:[a.label," ",L.jsx(Ny,{className:`h-3.5 w-3.5 transition-transform ${r?"rotate-180":""}`})]}),L.jsx(Am,{children:r&&L.jsx(Fi.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.25,ease:"easeOut"},className:"absolute left-0 top-full pt-3 w-72",children:L.jsx("div",{className:"glass-strong rounded-2xl shadow-elevated p-2 border border-white/40",children:a.children.map((o,l)=>L.jsxs(Fi.a,{href:"#services",initial:{opacity:0,x:-8},animate:{opacity:1,x:0},transition:{delay:l*.04},className:"flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-foreground hover:bg-gradient-primary hover:text-primary-foreground transition-all group",children:[L.jsx("span",{children:o}),L.jsx(hf,{className:"h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"})]},o))})})})]},a.label):L.jsx("a",{href:a.href,className:"nav-link",children:a.label},a.label))}),L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsxs(Of,{href:"#contact",className:"hidden md:inline-flex btn-premium text-sm",children:["Get a Quote",L.jsx(hf,{className:"h-4 w-4"})]}),L.jsx("button",{className:"lg:hidden p-2 rounded-md hover:bg-secondary",onClick:()=>n(a=>!a),"aria-label":"Menu",children:t?L.jsx(iS,{className:"h-5 w-5"}):L.jsx(Wy,{className:"h-5 w-5"})})]})]}),L.jsx(Am,{children:t&&L.jsx(Fi.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},className:"lg:hidden overflow-hidden glass-strong border-t border-border/60",children:L.jsxs("div",{className:"container mx-auto px-6 py-4 flex flex-col gap-1",children:[Vm.map(a=>L.jsx("a",{href:a.href,onClick:()=>n(!1),className:"py-2.5 text-sm font-medium border-b border-border/40 last:border-0",children:a.label},a.label)),L.jsx("a",{href:"#contact",onClick:()=>n(!1),className:"mt-3 text-center btn-premium",children:"Get a Quote"})]})})})]})}function mr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function dx(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Lo={duration:.5,overwrite:!1,delay:0},Ld,yn,It,Ti=1e8,At=1/Ti,Bf=Math.PI*2,r1=Bf/4,s1=0,px=Math.sqrt,a1=Math.cos,o1=Math.sin,mn=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},br=function(e){return typeof e=="number"},Nd=function(e){return typeof e>"u"},ar=function(e){return typeof e=="object"},Wn=function(e){return e!==!1},Id=function(){return typeof window<"u"},rl=function(e){return zt(e)||mn(e)},mx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,l1=/random\([^)]+\)/g,c1=/,\s*/g,zm=/(?:-?\.?\d|\.)+/gi,gx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_x=/[+-]=-?[.\d]+/,u1=/[^,'"\[\]\s]+/gi,f1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,ji,kf,Ud,fi={},Mc={},xx,vx=function(e){return(Mc=Ra(e,fi))&&Kn},Fd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},No=function(e,t){return!t&&console.warn(e)},yx=function(e,t){return e&&(fi[e]=t)&&Mc&&(Mc[e]=t)||fi},Io=function(){return 0},h1={suppressEvents:!0,isStart:!0,kill:!1},Jl={suppressEvents:!0,kill:!1},d1={suppressEvents:!0},Od={},Yr=[],Vf={},Sx,ii={},vu={},Gm=30,Ql=[],Bd="",kd=function(e){var t=e[0],n,r;if(ar(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ql.length;r--&&!Ql[r].targetTest(t););n=Ql[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Hx(e[r],n)))||e.splice(r,1);return e},ws=function(e){return e._gsap||kd(bi(e))[0]._gsap},Mx=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():Nd(n)&&e.getAttribute&&e.getAttribute(t)||n},Xn=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},xa=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},p1=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Tc=function(){var e=Yr.length,t=Yr.slice(0),n,r;for(Vf={},Yr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Vd=function(e){return!!(e._initted||e._startAt||e.add)},Tx=function(e,t,n,r){Yr.length&&!yn&&Tc(),e.render(t,n,!!(yn&&t<0&&Vd(e))),Yr.length&&!yn&&Tc()},bx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(u1).length<2?t:mn(e)?e.trim():e},Ex=function(e){return e},hi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},m1=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Ra=function(e,t){for(var n in t)e[n]=t[n];return e},Hm=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ar(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},bc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},go=function(e){var t=e.parent||Ot,n=e.keyframes?m1(Pn(e.keyframes)):hi;if(Wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},g1=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Ax=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Yc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Jr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},_1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},zf=function(e,t,n,r){return e._startAt&&(yn?e._startAt.revert(Jl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},x1=function i(e){return!e||e._ts&&i(e.parent)},Wm=function(e){return e._repeat?Pa(e._tTime,e=e.duration()+e._rDelay)*e:0},Pa=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},Ec=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},qc=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},$c=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),qc(e),n._dirty||Cs(n,e)),e},wx=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ec(e.rawTime(),t),(!t._dur||qo(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),Cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},Ki=function(e,t,n,r){return t.parent&&Jr(t),t._start=Ft((br(n)?n:n||e!==Ot?gi(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ax(e,t,"_first","_last",e._sort?"_start":0),Gf(t)||(e._recent=t),r||wx(e,t),e._ts<0&&$c(e,e._tTime),e},Cx=function(e,t){return(fi.ScrollTrigger||Fd("scrollTrigger",t))&&fi.ScrollTrigger.create(t,e)},Rx=function(e,t,n,r,s){if(Gd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Sx!==si.frame)return Yr.push(e),e._lazy=[s,r],1},v1=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Gf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},y1=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&v1(e)&&!(!e._initted&&Gf(e))||(e._ts<0||e._dp._ts<0)&&!Gf(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=qo(0,e._tDur,t),u=Pa(l,o),e._yoyo&&u&1&&(a=1-a),u!==Pa(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||yn||r||e._zTime===At||!t&&e._zTime){if(!e._initted&&Rx(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&zf(e,t,n,!0),e._onUpdate&&!n&&oi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&oi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Jr(e,1),!n&&!yn&&(oi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},S1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Da=function(e,t,n,r){var s=e._repeat,a=Ft(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ft(a*(s+1)+e._rDelay*s):a,o>0&&!r&&$c(e,e._tTime=e._tDur*o),e.parent&&qc(e),n||Cs(e.parent,e),e},Xm=function(e){return e instanceof Hn?Cs(e):Da(e,e._dur)},M1={_start:0,endTime:Io,totalDuration:Io},gi=function i(e,t,n){var r=e.labels,s=e._recent||M1,a=e.duration()>=Ti?s.endTime(!1):e._dur,o,l,c;return mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Pn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},_o=function(e,t,n){var r=br(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Wn(l.vars.inherit)&&l.parent;a.immediateRender=Wn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new en(t[0],a,t[s+1])},rs=function(e,t){return e||e===0?t(e):t},qo=function(e,t,n){return n<e?e:n>t?t:n},wn=function(e,t){return!mn(e)||!(t=f1.exec(e))?"":t[1]},T1=function(e,t,n){return rs(n,function(r){return qo(e,t,r)})},Hf=[].slice,Px=function(e,t){return e&&ar(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ar(e[0]))&&!e.nodeType&&e!==ji},b1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return mn(r)&&!t||Px(r,1)?(s=n).push.apply(s,bi(r)):n.push(r)})||n},bi=function(e,t,n){return It&&!t&&It.selector?It.selector(e):mn(e)&&!n&&(kf||!La())?Hf.call((t||Ud).querySelectorAll(e),0):Pn(e)?b1(e,n):Px(e)?Hf.call(e,0):e?[e]:[]},Wf=function(e){return e=bi(e)[0]||No("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return bi(t,n.querySelectorAll?n:n===e?No("Invalid scope")||Ud.createElement("div"):e)}},Dx=function(e){return e.sort(function(){return .5-Math.random()})},Lx=function(e){if(zt(e))return e;var t=ar(e)?e:{each:e},n=Rs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return mn(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(f,d,g){var _=(g||t).length,p=a[_],m,x,M,y,A,b,w,v,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,Ti])[1],!T){for(w=-Ti;w<(w=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(p=a[_]=[],m=l?Math.min(T,_)*u-.5:r%T,x=T===Ti?0:l?_*h/T-.5:r/T|0,w=0,v=Ti,b=0;b<_;b++)M=b%T-m,y=x-(b/T|0),p[b]=A=c?Math.abs(c==="y"?y:M):px(M*M+y*y),A>w&&(w=A),A<v&&(v=A);r==="random"&&Dx(p),p.max=w-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=wn(t.amount||t.each)||0,n=n&&_<0?O1(n):n}return _=(p[f]-p.min)/p.max||0,Ft(p.b+(n?n(_):_)*p.v)+p.u}},Xf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Ft(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(br(n)?0:wn(n))}},Nx=function(e,t){var n=Pn(e),r,s;return!n&&ar(e)&&(r=n=e.radius||Ti,e.values?(e=bi(e.values),(s=!br(e[0]))&&(r*=r)):e=Xf(e.increment)),rs(t,n?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ti,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:a,s||u===a||br(a)?u:u+wn(a)}:Xf(e))},Ix=function(e,t,n,r){return rs(Pn(e)?!t:n===!0?!!(n=0):!r,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},E1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},A1=function(e,t){return function(n){return e(parseFloat(n))+(t||wn(n))}},w1=function(e,t,n){return Fx(e,t,0,1,n)},Ux=function(e,t,n){return rs(n,function(r){return e[~~t(r)]})},C1=function i(e,t,n){var r=t-e;return Pn(e)?Ux(e,i(0,e.length),t):rs(n,function(s){return(r+(s-e)%r)%r+e})},R1=function i(e,t,n){var r=t-e,s=r*2;return Pn(e)?Ux(e,i(0,e.length-1),t):rs(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Uo=function(e){return e.replace(l1,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(c1);return Ix(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Fx=function(e,t,n,r,s){var a=t-e,o=r-n;return rs(s,function(l){return n+((l-e)/a*o||0)})},P1=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=mn(e),o={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else r||(e=Ra(Pn(e)?[]:{},e));if(!u){for(l in t)zd.call(o,e,l,"get",t[l]);s=function(g){return Xd(g,o)||(a?e.p:e)}}}return rs(n,s)},jm=function(e,t,n){var r=e.labels,s=Ti,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},oi=function(e,t,n){var r=e.vars,s=r[t],a=It,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Yr.length&&Tc(),o&&(It=o),u=l?s.apply(c,l):s.call(c),It=a,u},no=function(e){return Jr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&oi(e,"onInterrupt"),e},ga,Ox=[],Bx=function(e){if(e)if(e=!e.name&&e.default||e,Id()||e.headless){var t=e.name,n=zt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Io,render:Xd,add:zd,kill:Y1,modifier:j1,rawVars:0},a={targetTest:0,get:0,getSetter:Wd,aliases:{},register:0};if(La(),e!==r){if(ii[t])return;hi(r,hi(bc(e,s),a)),Ra(r.prototype,Ra(s,bc(e,a))),ii[r.prop=t]=r,e.targetTest&&(Ql.push(r),Od[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}yx(t,r),e.register&&e.register(Kn,r,jn)}else Ox.push(e)},Et=255,io={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},yu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},kx=function(e,t,n){var r=e?br(e)?[e>>16,e>>8&Et,e&Et]:0:io.black,s,a,o,l,c,u,h,f,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),io[e])r=io[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Et,r&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(zm),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=yu(l+1/3,s,a),r[1]=yu(l,s,a),r[2]=yu(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(gx),n&&r.length<4&&(r[3]=1),r}else r=e.match(zm)||io.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Et,a=r[1]/Et,o=r[2]/Et,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Vx=function(e){var t=[],n=[],r=-1;return e.split(qr).forEach(function(s){var a=s.match(ma)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Ym=function(e,t,n){var r="",s=(e+r).match(qr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=kx(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Vx(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(qr,"1").split(ma),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(qr),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},qr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in io)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),D1=/hsl[a]?\(/,zx=function(e){var t=e.join(" "),n;if(qr.lastIndex=0,qr.test(t))return n=D1.test(t),e[1]=Ym(e[1],n),e[0]=Ym(e[0],n,Vx(e[1])),!0},Fo,si=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,g=function _(p){var m=i()-r,x=p===!0,M,y,A,b;if((m>e||m<0)&&(n+=m-t),r+=m,A=r-n,M=A-a,(M>0||x)&&(b=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,a+=M+(M>=s?4:s-M),y=1),x||(l=c(_)),y)for(d=0;d<o.length;d++)o[d](A,f,b,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){xx&&(!kf&&Id()&&(ji=kf=window,Ud=ji.document||{},fi.gsap=Kn,(ji.gsapVersions||(ji.gsapVersions=[])).push(Kn.version),vx(Mc||ji.GreenSockGlobals||!ji.gsap&&ji||{}),Ox.forEach(Bx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Fo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Fo=0,c=Io},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,x){var M=m?function(y,A,b,w){p(y,A,b,w),h.remove(M)}:p;return h.remove(p),o[x?"unshift":"push"](M),La(),M},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h})(),La=function(){return!Fo&&si.wake()},ht={},L1=/^[\d.\-M][\d.\-,\s]/,N1=/["']/g,I1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(N1,"").trim():+c,r=l.substr(o+1).trim();return t},U1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},F1=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[I1(t[1])]:U1(e).split(",").map(bx)):ht._CE&&L1.test(e)?ht._CE("",e):n},O1=function(e){return function(t){return 1-e(1-t)}},Rs=function(e,t){return e&&(zt(e)?e:ht[e]||F1(e))||t},Vs=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Xn(e,function(o){ht[o]=fi[o]=s,ht[a=o.toLowerCase()]=n;for(var l in s)ht[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[o+"."+l]=s[l]}),s},Gx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Su=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Bf*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*o1((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Gx(o);return s=Bf/s,l.config=function(c,u){return i(e,c,u)},l},Mu=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Gx(n);return r.config=function(s){return i(e,s)},r};Xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Vs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Vs("Elastic",Su("in"),Su("out"),Su());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Vs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Vs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Vs("Circ",function(i){return-(px(1-i*i)-1)});Vs("Sine",function(i){return i===1?1:-a1(i*r1)+1});Vs("Back",Mu("in"),Mu("out"),Mu());ht.SteppedEase=ht.steps=fi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-At;return function(o){return((r*qo(0,a,o)|0)+s)*n}}};Lo.ease=ht["quad.out"];Xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Bd+=i+","+i+"Params,"});var Hx=function(e,t){this.id=s1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Mx,this.set=t?t.getSetter:Wd},Oo=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Da(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),Fo||si.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Da(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(La(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($c(this,n),!s._dp||s.parent||wx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Tx(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Wm(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Wm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Pa(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ec(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(qo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),qc(this),_1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(La(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ft(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ki(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ec(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=d1);var r=yn;return yn=n,Vd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Xm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Xm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(gi(this,n),Wn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Wn(r)),this._dur||(this._zTime=-At),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-At)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=zt(n)?n:Ex,l=function(){var u=r.then;r.then=null,s&&s(),zt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){no(this)},i})();hi(Oo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Hn=(function(i){dx(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Wn(n.sortChildren),Ot&&Ki(n.parent||Ot,mr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Cx(mr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return _o(0,arguments,this),this},t.from=function(r,s,a){return _o(1,arguments,this),this},t.fromTo=function(r,s,a,o){return _o(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,go(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new en(r,s,gi(this,a),1),this},t.call=function(r,s,a){return Ki(this,en.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new en(r,a,gi(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,go(a).immediateRender=Wn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,go(o).immediateRender=Wn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ft(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,g,_,p,m,x,M,y,A,b,w;if(this!==Ot&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),f=u,y=this._start,M=this._ts,m=!M,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(f=Ft(u%p),u===l?(_=this._repeat,f=c):(A=Ft(u/p),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=Pa(this._tTime,p),!o&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),b&&_&1&&(f=c-f,w=1),_!==A&&!this._lock){var v=b&&A&1,T=v===(b&&_&1);if(_<A&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(w?0:Ft(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&oi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,A=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=S1(this,Ft(o),Ft(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!A&&(oi(this,"onStart"),this._tTime!==u))return this;if(f>=o&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){x=0,g&&(u+=this._zTime=-At);break}}d=g}else{d=this._last;for(var C=r<0?r:f;d;){if(g=d._prev,(d._act||C<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(C-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(C-d._start)*d._ts,s,a||yn&&Vd(d)),f!==this._time||!this._ts&&!m){x=0,g&&(u+=this._zTime=C?-At:At);break}}d=g}}if(x&&!s&&(this.pause(),x.render(f>=o?0:-At)._zTime=f>=o?1:-1,this._ts))return this._start=y,qc(this),this.render(r,s,a);this._onUpdate&&!s&&oi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Jr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(oi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(br(s)||(s=gi(this,s,r)),!(r instanceof Oo)){if(Pn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(mn(r))return this.addLabel(r,s);if(zt(r))r=en.delayedCall(0,r);else return this}return this!==r?Ki(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ti);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof en?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return mn(r)?this.removeLabel(r):zt(r)?this.killTweensOf(r):(r.parent===this&&Yc(this,r),r===this._recent&&(this._recent=this._last),Cs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(si.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=gi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=en.delayedCall(0,s||Io,a);return o.data="isPause",this._hasPause=1,Ki(this,o,gi(this,r))},t.removePause=function(r){var s=this._first;for(r=gi(this,r);s;)s._start===r&&s.data==="isPause"&&Jr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)zr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=bi(r),l=this._first,c=br(s),u;l;)l instanceof en?p1(l._targets,o)&&(c?(!zr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=gi(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=en.to(a,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||At,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Da(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,hi({startAt:{time:gi(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),jm(this,gi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),jm(this,gi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Ft(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Cs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Cs(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Ti,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ki(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Ft(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Da(a,a===Ot&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Ot._ts&&(Tx(Ot,Ec(r,Ot)),Sx=si.frame),si.frame>=Gm){Gm+=ui.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&ui.autoSleep&&si._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||si.sleep()}}},e})(Oo);hi(Hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var B1=function(e,t,n,r,s,a,o){var l=new jn(this._pt,e,t,0,1,$x,null,s),c=0,u=0,h,f,d,g,_,p,m,x;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=Uo(r)),a&&(x=[n,r],a(x,e,t),n=x[0],r=x[1]),f=n.match(xu)||[];h=xu.exec(r);)g=h[0],_=r.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?xa(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=xu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(_x.test(r)||m)&&(l.e=0),this._pt=l,l},zd=function(e,t,n,r,s,a,o,l,c,u){zt(r)&&(r=r(s||0,e,a));var h=e[t],f=n!=="get"?n:zt(h)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=zt(h)?c?H1:Yx:Hd,g;if(mn(r)&&(~r.indexOf("random(")&&(r=Uo(r)),r.charAt(1)==="="&&(g=xa(f,r)+(wn(f)||0),(g||g===0)&&(r=g))),!u||f!==r||jf)return!isNaN(f*r)&&r!==""?(g=new jn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?X1:qx,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Fd(t,r),B1.call(this,e,t,f,r,d,l||ui.stringFilter,c))},k1=function(e,t,n,r,s){if(zt(e)&&(e=xo(e,s,t,n,r)),!ar(e)||e.style&&e.nodeType||Pn(e)||mx(e))return mn(e)?xo(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=xo(e[o],s,t,n,r);return a},Wx=function(e,t,n,r,s,a){var o,l,c,u;if(ii[e]&&(o=new ii[e]).init(s,o.rawVars?t[e]:k1(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new jn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ga))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},zr,jf,Gd=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:p,M=e._overwrite==="auto"&&!Ld,y=e.timeline,A=r.easeReverse||h,b,w,v,T,C,P,N,G,V,I,F,O,q;if(y&&(!f||!s)&&(s="none"),e._ease=Rs(s,Lo.ease),e._rEase=A&&(Rs(A)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||f&&!r.stagger){if(G=p[0]?ws(p[0]).harness:0,O=G&&r[G.prop],b=bc(r,Od),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?Jl:h1),_._lazy=0),a){if(Jr(e._startAt=en.set(p,hi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Wn(l),startAt:null,delay:0,onUpdate:c&&function(){return oi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!o&&!d)&&e._startAt.revert(Jl),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),v=hi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Wn(l),immediateRender:o,stagger:0,parent:m},b),O&&(v[G.prop]=O),Jr(e._startAt=en.set(p,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(Jl):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Wn(l)||l&&!g,w=0;w<p.length;w++){if(C=p[w],N=C._gsap||kd(p)[w]._gsap,e._ptLookup[w]=I={},Vf[N.id]&&Yr.length&&Tc(),F=x===p?w:x.indexOf(C),G&&(V=new G).init(C,O||b,e,F,x)!==!1&&(e._pt=T=new jn(e._pt,C,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(K){I[K]=T}),V.priority&&(P=1)),!G||O)for(v in b)ii[v]&&(V=Wx(v,b,e,F,C,x))?V.priority&&(P=1):I[v]=T=zd.call(e,C,v,"get",b[v],F,x,0,r.stringFilter);e._op&&e._op[w]&&e.kill(C,e._op[w]),M&&e._pt&&(zr=e,Ot.killTweensOf(C,I,e.globalTime(t)),q=!e.parent,zr=0),e._pt&&l&&(Vf[N.id]=1)}P&&Kx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,f&&t<=0&&y.render(Ti,!0,!0)},V1=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return jf=1,e.vars[t]="+=0",Gd(e,o),jf=0,l?No(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=jt(n)+wn(h.e)),h.b&&(h.b=u.s+wn(h.b))},z1=function(e,t){var n=e[0]?ws(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=Ra({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},G1=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Pn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},xo=function(e,t,n,r,s){return zt(e)?e.call(t,n,r,s):mn(e)&&~e.indexOf("random(")?Uo(e):e},Xx=Bd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",jx={};Xn(Xx+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return jx[i]=1});var en=(function(i){dx(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:go(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=r.parent||Ot,x=(Pn(n)||mx(n)?br(n[0]):"length"in r)?[n]:bi(n),M,y,A,b,w,v,T,C;if(o._targets=x.length?kd(x):No("GSAP target "+n+" not found. https://gsap.com",!ui.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||rl(c)||rl(u)){r=o.vars;var P=r.easeReverse||r.yoyoEase;if(M=o.timeline=new Hn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:x}),M.kill(),M.parent=M._dp=mr(o),M._start=0,f||rl(c)||rl(u)){if(b=x.length,T=f&&Lx(f),ar(f))for(w in f)~Xx.indexOf(w)&&(C||(C={}),C[w]=f[w]);for(y=0;y<b;y++)A=bc(r,jx),A.stagger=0,P&&(A.easeReverse=P),C&&Ra(A,C),v=x[y],A.duration=+xo(c,mr(o),y,v,x),A.delay=(+xo(u,mr(o),y,v,x)||0)-o._delay,!f&&b===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),M.to(v,A,T?T(y,v,x):0),M._ease=ht.none;M.duration()?c=u=0:o.timeline=0}else if(g){go(hi(M.vars.defaults,{ease:"none"})),M._ease=Rs(g.ease||r.ease||"none");var N=0,G,V,I;if(Pn(g))g.forEach(function(F){return M.to(x,F,">")}),M.duration();else{A={};for(w in g)w==="ease"||w==="easeEach"||G1(w,g[w],A,g.easeEach);for(w in A)for(G=A[w].sort(function(F,O){return F.t-O.t}),N=0,y=0;y<G.length;y++)V=G[y],I={ease:V.e,duration:(V.t-(y?G[y-1].t:0))/100*c},I[w]=V.v,M.to(x,I,N),N+=I.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return d===!0&&!Ld&&(zr=mr(o),Ot.killTweensOf(x),zr=0),Ki(m,mr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!g&&o._start===Ft(m._time)&&Wn(h)&&x1(mr(o))&&m.data!=="nested")&&(o._tTime=-At,o.render(Math.max(0,-u)||0)),p&&Cx(mr(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-At&&!u?l:r<At?0:r,f,d,g,_,p,m,x,M;if(!c)y1(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(f=Ft(h%_),h===l?(g=this._repeat,f=c):(p=Ft(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(f=c-f),p=Pa(this._tTime,_),f===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Ft(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Rx(this,u?r:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var y=f<o;if(y!==this._inv){var A=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(y?-1:1)/A:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!p&&(oi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;M&&M.render(r<0?r:M._dur*M._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&zf(this,r,s,a),oi(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&oi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&zf(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Jr(this,1),!s&&!(u&&!o)&&(h||o||m)&&(oi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Fo||si.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Gd(this,c),u=this._ease(c/this._dur),V1(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):($c(this,0),this.parent||Ax(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?no(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,zr&&zr.vars.overwrite!==!0)._first||no(this),this.parent&&a!==this.timeline.totalDuration()&&Da(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?bi(r):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!s||s==="all")&&g1(o,l))return s==="all"&&(this._pt=0),no(this);for(h=this._op=this._op||[],s!=="all"&&(mn(s)&&(_={},Xn(s,function(x){return _[x]=1}),s=_),s=z1(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(h[m]=s,g=f,d={}):(d=h[m]=h[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Yc(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&no(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return _o(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return _o(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Ot.killTweensOf(r,s,a)},e})(Oo);hi(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xn("staggerTo,staggerFrom,staggerFromTo",function(i){en[i]=function(){var e=new Hn,t=Hf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Hd=function(e,t,n){return e[t]=n},Yx=function(e,t,n){return e[t](n)},H1=function(e,t,n,r){return e[t](r.fp,n)},W1=function(e,t,n){return e.setAttribute(t,n)},Wd=function(e,t){return zt(e[t])?Yx:Nd(e[t])&&e.setAttribute?W1:Hd},qx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},X1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$x=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Xd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},j1=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},Y1=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Yc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},q1=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Kx=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},jn=(function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||qx,this.d=l||this,this.set=c||Hd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=q1,this.m=n,this.mt=s,this.tween=r},i})();Xn(Bd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Od[i]=1});fi.TweenMax=fi.TweenLite=en;fi.TimelineLite=fi.TimelineMax=Hn;Ot=new Hn({sortChildren:!1,defaults:Lo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ui.stringFilter=zx;var Ps=[],ec={},$1=[],qm=0,K1=0,Tu=function(e){return(ec[e]||$1).map(function(t){return t()})},Yf=function(){var e=Date.now(),t=[];e-qm>2&&(Tu("matchMediaInit"),Ps.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=ji.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Tu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),qm=e,Tu("matchMedia"))},Zx=(function(){function i(t,n){this.selector=n&&Wf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=K1++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){zt(n)&&(s=r,r=n,n=zt);var a=this,o=function(){var c=It,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Wf(s)),It=a,h=r.apply(a,arguments),zt(h)&&a._r.push(h),It=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===zt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=It;It=null,n(this),It=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof en&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof en)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Ps.length;a--;)Ps[a].id===this.id&&Ps.splice(a,1)},e.revert=function(n){this.kill(n||{})},i})(),Z1=(function(){function i(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){ar(n)||(n={matches:n});var a=new Zx(0,s||this.scope),o=a.conditions={},l,c,u;It&&!a.selector&&(a.selector=It.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=ji.matchMedia(n[c]),l&&(Ps.indexOf(a)<0&&Ps.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Yf):l.addEventListener("change",Yf)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Ac={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Bx(r)})},timeline:function(e){return new Hn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,r){mn(e)&&(e=bi(e)[0]);var s=ws(e||{}).get,a=n?Ex:bx;return n==="native"&&(n=""),e&&(t?a((ii[t]&&ii[t].get||s)(e,t,n,r)):function(o,l,c){return a((ii[o]&&ii[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=bi(e),e.length>1){var r=e.map(function(u){return Kn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=ii[t],o=ws(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;ga._pt=0,h.init(e,n?u+n:u,ga,0,[e]),h.render(1,h),ga._pt&&Xd(1,ga)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=Kn.to(e,hi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Rs(e.ease,Lo.ease)),Hm(Lo,e||{})},config:function(e){return Hm(ui,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ii[o]&&!fi[o]&&No(t+" effect requires "+o+" plugin.")}),vu[t]=function(o,l,c){return n(bi(o),hi(l||{},s),c)},a&&(Hn.prototype[t]=function(o,l,c){return this.add(vu[t](o,ar(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=Rs(t)},parseEase:function(e,t){return arguments.length?Rs(e,t):ht},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Hn(e),r,s;for(n.smoothChildTiming=Wn(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof en&&r.vars.onComplete===r._targets[0]))&&Ki(n,r,r._start-r._delay),r=s;return Ki(Ot,n,0),n},context:function(e,t){return e?new Zx(e,t):It},matchMedia:function(e){return new Z1(e)},matchMediaRefresh:function(){return Ps.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Yf()},addEventListener:function(e,t){var n=ec[e]||(ec[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ec[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:C1,wrapYoyo:R1,distribute:Lx,random:Ix,snap:Nx,normalize:w1,getUnit:wn,clamp:T1,splitColor:kx,toArray:bi,selector:Wf,mapRange:Fx,pipe:E1,unitize:A1,interpolate:P1,shuffle:Dx},install:vx,effects:vu,ticker:si,updateRoot:Hn.updateRoot,plugins:ii,globalTimeline:Ot,core:{PropTween:jn,globals:yx,Tween:en,Timeline:Hn,Animation:Oo,getCache:ws,_removeLinkedListItem:Yc,reverting:function(){return yn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return Ld=e}}};Xn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ac[i]=en[i]});si.add(Hn.updateRoot);ga=Ac.to({},{duration:0});var J1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Q1=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=J1(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},bu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(mn(s)&&(l={},Xn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Q1(o,s)}}}},Kn=Ac.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)yn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},bu("roundProps",Xf),bu("modifiers"),bu("snap",Nx))||Ac;en.version=Hn.version=Kn.version="3.15.0";xx=1;Id()&&La();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;var $m,Gr,va,jd,Ss,Km,Yd,eA=function(){return typeof window<"u"},Er={},ds=180/Math.PI,ya=Math.PI/180,Xs=Math.atan2,Zm=1e8,qd=/([A-Z])/g,tA=/(left|right|width|margin|padding|x)/i,nA=/[\s,\(]\S/,Zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},iA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},aA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Jx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Qx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},oA=function(e,t,n){return e.style[t]=n},lA=function(e,t,n){return e.style.setProperty(t,n)},cA=function(e,t,n){return e._gsap[t]=n},uA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},fA=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},hA=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Bt="transform",Yn=Bt+"Origin",dA=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Er&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Zi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=gr(r,o)}):this.tfm[e]=a.x?a[e]:gr(r,e),e===Yn&&(this.tfm.zOrigin=a.zOrigin);else return Zi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Bt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Yn,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},ev=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pA=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(qd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Yd(),(!s||!s.isStart)&&!n[Bt]&&(ev(n),r.zOrigin&&n[Yn]&&(n[Yn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},tv=function(e,t){var n={target:e,props:[],revert:pA,save:dA};return e._gsap||Kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},nv,$f=function(e,t){var n=Gr.createElementNS?Gr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gr.createElement(e);return n&&n.style?n:Gr.createElement(e)},li=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(qd,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Na(t)||t,1)||""},Jm="O,Moz,ms,Ms,Webkit".split(","),Na=function(e,t,n){var r=t||Ss,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Jm[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Jm[a]:"")+e},Kf=function(){eA()&&window.document&&($m=window,Gr=$m.document,va=Gr.documentElement,Ss=$f("div")||{style:{}},$f("div"),Bt=Na(Bt),Yn=Bt+"Origin",Ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",nv=!!Na("perspective"),Yd=Kn.core.reverting,jd=1)},Qm=function(e){var t=e.ownerSVGElement,n=$f("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),va.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),va.removeChild(n),s},eg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},iv=function(e){var t,n;try{t=e.getBBox()}catch{t=Qm(e),n=1}return t&&(t.width||t.height)||n||(t=Qm(e)),t&&!t.width&&!t.x&&!t.y?{x:+eg(e,["x","cx","x1"])||0,y:+eg(e,["y","cy","y1"])||0,width:0,height:0}:t},rv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&iv(e))},Qr=function(e,t){if(t){var n=e.style,r;t in Er&&t!==Yn&&(t=Bt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(qd,"-$1").toLowerCase())):n.removeAttribute(t)}},Hr=function(e,t,n,r,s,a){var o=new jn(e._pt,t,n,0,1,a?Qx:Jx);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},tg={deg:1,rad:1,turn:1},mA={grid:1,flex:1},es=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ss.style,l=tA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",g,_,p,m;if(r===a||!s||tg[r]||tg[a])return s;if(a!=="px"&&!f&&(s=i(e,t,n,"px")),m=e.getCTM&&rv(e),(d||a==="%")&&(Er[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],jt(d?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Gr||!_.appendChild)&&(_=Gr.body),p=_._gsap,p&&d&&p.width&&l&&p.time===si.time&&!p.uncache)return jt(s/p.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+r,g=e[u],x?e.style[t]=x:Qr(e,t)}else(d||a==="%")&&!mA[li(_,"display")]&&(o.position=li(e,"position")),_===e&&(o.position="static"),_.appendChild(Ss),g=Ss[u],_.removeChild(Ss),o.position="absolute";return l&&d&&(p=ws(_),p.time=si.time,p.width=_[u]),jt(f?g*s/h:g&&s?h/g*s:0)},gr=function(e,t,n,r){var s;return jd||Kf(),t in Zi&&t!=="transform"&&(t=Zi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Er[t]&&t!=="transform"?(s=ko(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Cc(li(e,Yn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=wc[t]&&wc[t](e,t,n)||li(e,t)||Mx(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?es(e,t,s,n)+n:s},gA=function(e,t,n,r){if(!n||n==="none"){var s=Na(t,e,1),a=s&&li(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=li(e,"borderTopColor"))}var o=new jn(this._pt,e.style,t,0,1,$x),l=0,c=0,u,h,f,d,g,_,p,m,x,M,y,A;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=li(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=li(e,t)||r,_?e.style[t]=_:Qr(e,t)),u=[n,r],zx(u),n=u[0],r=u[1],f=n.match(ma)||[],A=r.match(ma)||[],A.length){for(;h=ma.exec(r);)p=h[0],x=r.substring(l,h.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),p.charAt(1)==="="&&(p=xa(d,p)+y),m=parseFloat(p),M=p.substr((m+"").length),l=ma.lastIndex-M.length,M||(M=M||ui.units[t]||y,l===r.length&&(r+=M,o.e+=M)),y!==M&&(d=es(e,t,_,M)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?Qx:Jx;return _x.test(r)&&(o.e=0),this._pt=o,o},ng={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_A=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=ng[n]||n,t[1]=ng[r]||r,t.join(" ")},xA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Er[o]&&(l=1,o=o==="transformOrigin"?Yn:Bt),Qr(n,o);l&&(Qr(n,Bt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ko(n,1),a.uncache=1,ev(r)))}},wc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new jn(e._pt,t,n,0,0,xA);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Bo=[1,0,0,1,0,0],sv={},av=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ig=function(e){var t=li(e,Bt);return av(t)?Bo:t.substr(7).match(gx).map(jt)},$d=function(e,t){var n=e._gsap||ws(e),r=e.style,s=ig(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Bo:s):(s===Bo&&!e.offsetParent&&e!==va&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,va.appendChild(e)),s=ig(e),l?r.display=l:Qr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):va.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Zf=function(e,t,n,r,s,a){var o=e._gsap,l=s||$d(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],x=l[5],M=t.split(" "),y=parseFloat(M[0])||0,A=parseFloat(M[1])||0,b,w,v,T;n?l!==Bo&&(w=d*p-g*_)&&(v=y*(p/w)+A*(-_/w)+(_*x-p*m)/w,T=y*(-g/w)+A*(d/w)-(d*x-g*m)/w,y=v,A=T):(b=iv(e),y=b.x+(~M[0].indexOf("%")?y/100*b.width:y),A=b.y+(~(M[1]||M[0]).indexOf("%")?A/100*b.height:A)),r||r!==!1&&o.smooth?(m=y-c,x=A-u,o.xOffset=h+(m*d+x*_)-m,o.yOffset=f+(m*g+x*p)-x):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=A,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Yn]="0px 0px",a&&(Hr(a,o,"xOrigin",c,y),Hr(a,o,"yOrigin",u,A),Hr(a,o,"xOffset",h,o.xOffset),Hr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},ko=function(e,t){var n=e._gsap||new Hx(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=li(e,Yn)||"0",u,h,f,d,g,_,p,m,x,M,y,A,b,w,v,T,C,P,N,G,V,I,F,O,q,K,D,le,Te,Ye,Ve,Ie;return u=h=f=_=p=m=x=M=y=0,d=g=1,n.svg=!!(e.getCTM&&rv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),r.scale=r.rotate=r.translate="none"),w=$d(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Zf(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,b=n.yOrigin||0,w!==Bo&&(P=w[0],N=w[1],G=w[2],V=w[3],u=I=w[4],h=F=w[5],w.length===6?(d=Math.sqrt(P*P+N*N),g=Math.sqrt(V*V+G*G),_=P||N?Xs(N,P)*ds:0,x=G||V?Xs(G,V)*ds+_:0,x&&(g*=Math.abs(Math.cos(x*ya))),n.svg&&(u-=A-(A*P+b*G),h-=b-(A*N+b*V))):(Ie=w[6],Ye=w[7],D=w[8],le=w[9],Te=w[10],Ve=w[11],u=w[12],h=w[13],f=w[14],v=Xs(Ie,Te),p=v*ds,v&&(T=Math.cos(-v),C=Math.sin(-v),O=I*T+D*C,q=F*T+le*C,K=Ie*T+Te*C,D=I*-C+D*T,le=F*-C+le*T,Te=Ie*-C+Te*T,Ve=Ye*-C+Ve*T,I=O,F=q,Ie=K),v=Xs(-G,Te),m=v*ds,v&&(T=Math.cos(-v),C=Math.sin(-v),O=P*T-D*C,q=N*T-le*C,K=G*T-Te*C,Ve=V*C+Ve*T,P=O,N=q,G=K),v=Xs(N,P),_=v*ds,v&&(T=Math.cos(v),C=Math.sin(v),O=P*T+N*C,q=I*T+F*C,N=N*T-P*C,F=F*T-I*C,P=O,I=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=jt(Math.sqrt(P*P+N*N+G*G)),g=jt(Math.sqrt(F*F+Ie*Ie)),v=Xs(I,F),x=Math.abs(v)>2e-4?v*ds:0,y=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!av(li(e,Bt)),O&&e.setAttribute("transform",O))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=jt(d),n.scaleY=jt(g),n.rotation=jt(_)+o,n.rotationX=jt(p)+o,n.rotationY=jt(m)+o,n.skewX=x+o,n.skewY=M+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Yn]=Cc(c)),n.xOffset=n.yOffset=0,n.force3D=ui.force3D,n.renderTransform=n.svg?yA:nv?ov:vA,n.uncache=0,n},Cc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Eu=function(e,t,n){var r=wn(t);return jt(parseFloat(t)+parseFloat(es(e,"x",n+"px",r)))+r},vA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ov(e,t)},as="0deg",Xa="0px",os=") ",ov=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,M=n.zOrigin,y="",A=m==="auto"&&e&&e!==1||m===!0;if(M&&(h!==as||u!==as)){var b=parseFloat(u)*ya,w=Math.sin(b),v=Math.cos(b),T;b=parseFloat(h)*ya,T=Math.cos(b),a=Eu(x,a,w*T*-M),o=Eu(x,o,-Math.sin(b)*-M),l=Eu(x,l,v*T*-M+M)}p!==Xa&&(y+="perspective("+p+os),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(A||a!==Xa||o!==Xa||l!==Xa)&&(y+=l!==Xa||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+os),c!==as&&(y+="rotate("+c+os),u!==as&&(y+="rotateY("+u+os),h!==as&&(y+="rotateX("+h+os),(f!==as||d!==as)&&(y+="skew("+f+", "+d+os),(g!==1||_!==1)&&(y+="scale("+g+", "+_+os),x.style[Bt]=y||"translate(0, 0)"},yA=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,M=parseFloat(a),y=parseFloat(o),A,b,w,v,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ya,c*=ya,A=Math.cos(l)*h,b=Math.sin(l)*h,w=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=ya,T=Math.tan(c-u),T=Math.sqrt(1+T*T),w*=T,v*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),A*=T,b*=T)),A=jt(A),b=jt(b),w=jt(w),v=jt(v)):(A=h,v=f,b=w=0),(M&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(M=es(d,"x",a,"px"),y=es(d,"y",o,"px")),(g||_||p||m)&&(M=jt(M+g-(g*A+_*w)+p),y=jt(y+_-(g*b+_*v)+m)),(r||s)&&(T=d.getBBox(),M=jt(M+r/100*T.width),y=jt(y+s/100*T.height)),T="matrix("+A+","+b+","+w+","+v+","+M+","+y+")",d.setAttribute("transform",T),x&&(d.style[Bt]=T)},SA=function(e,t,n,r,s){var a=360,o=mn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ds:1),c=l-r,u=r+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Zm)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Zm)%a-~~(c/a)*a)),e._pt=f=new jn(e._pt,t,n,r,c,iA),f.e=u,f.u="deg",e._props.push(n),f},rg=function(e,t){for(var n in t)e[n]=t[n];return e},MA=function(e,t,n){var r=rg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Bt]=t,o=ko(n,1),Qr(n,Bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Bt],a[Bt]=t,o=ko(n,1),a[Bt]=c);for(l in Er)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=wn(c),g=wn(u),h=d!==g?es(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new jn(e._pt,o,l,h,f-h,qf),e._pt.u=g||0,e._props.push(l));rg(o,r)};Xn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});wc[e>1?"border"+i:i]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return gr(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var lv={name:"css",register:Kf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,x,M,y,A,b,w,v,T;jd||Kf(),this.styles=this.styles||tv(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ii[_]&&Wx(_,t,n,r,e,s)))){if(d=typeof u,g=wc[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Uo(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",qr.lastIndex=0,qr.test(c)||(p=wn(c),m=wn(u),m?p!==m&&(c=es(e,_,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],mn(c)&&~c.indexOf("random(")&&(c=Uo(c)),wn(c+"")||c==="auto"||(c+=ui.units[_]||wn(gr(e,_))||""),(c+"").charAt(1)==="="&&(c=gr(e,_))):c=gr(e,_),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in Zi&&(_==="autoAlpha"&&(f===1&&gr(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,o.visibility),Hr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Zi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Er,M){if(this.styles.save(_),T=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=li(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=u,u=li(e,"perspective"),C?e.style.perspective=C:Qr(e,"perspective")}h=parseFloat(u)}if(y||(A=e._gsap,A.renderTransform&&!t.parseTransform||ko(e,t.parseTransform),b=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new jn(this._pt,o,Bt,0,1,A.renderTransform,A,0,-1),y.dep=1),_==="scale")this._pt=new jn(this._pt,A,"scaleY",A.scaleY,(x?xa(A.scaleY,x+h):h)-A.scaleY||0,qf),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(Yn,0,o[Yn]),u=_A(u),A.svg?Zf(e,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Hr(this,A,"zOrigin",A.zOrigin,m),Hr(this,o,_,Cc(c),Cc(u)));continue}else if(_==="svgOrigin"){Zf(e,u,1,b,0,this);continue}else if(_ in sv){SA(this,A,_,f,x?xa(f,x+u):u);continue}else if(_==="smoothOrigin"){Hr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){MA(this,u,e);continue}}else _ in o||(_=Na(_)||_);if(M||(h||h===0)&&(f||f===0)&&!nA.test(u)&&_ in o)p=(c+"").substr((f+"").length),h||(h=0),m=wn(u)||(_ in ui.units?ui.units[_]:p),p!==m&&(f=es(e,_,c,m)),this._pt=new jn(this._pt,M?A:o,_,f,(x?xa(f,x+h):h)-f,!M&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?aA:qf),this._pt.u=m||0,M&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=sA):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=rA);else if(_ in o)gA.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,r,s);else if(_!=="parseTransform"){Fd(_,u);continue}M||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),a.push(_)}}w&&Kx(this)},render:function(e,t){if(t.tween._time||!Yd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gr,aliases:Zi,getSetter:function(e,t,n){var r=Zi[t];return r&&r.indexOf(",")<0&&(t=r),t in Er&&t!==Yn&&(e._gsap.x||gr(e,"x"))?n&&Km===n?t==="scale"?uA:cA:(Km=n||{})&&(t==="scale"?fA:hA):e.style&&!Nd(e.style[t])?oA:~t.indexOf("-")?lA:Wd(e,t)},core:{_removeProperty:Qr,_getMatrix:$d}};Kn.utils.checkPrefix=Na;Kn.core.getStyleSaver=tv;(function(i,e,t,n){var r=Xn(i+","+e+","+t,function(s){Er[s]=1});Xn(e,function(s){ui.units[s]="deg",sv[s]=1}),Zi[r[13]]=i+","+e,Xn(n,function(s){var a=s.split(":");Zi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ui.units[i]="px"});Kn.registerPlugin(lv);var ki=Kn.registerPlugin(lv)||Kn;ki.core.Tween;const Kd="184",TA=0,sg=1,bA=2,tc=1,EA=2,ro=3,ts=0,qn=1,_r=2,Sr=0,Sa=1,Rc=2,ag=3,og=4,AA=5,_s=100,wA=101,CA=102,RA=103,PA=104,DA=200,LA=201,NA=202,IA=203,Jf=204,Qf=205,UA=206,FA=207,OA=208,BA=209,kA=210,VA=211,zA=212,GA=213,HA=214,eh=0,th=1,nh=2,Ia=3,ih=4,rh=5,sh=6,ah=7,cv=0,WA=1,XA=2,nr=0,uv=1,fv=2,hv=3,dv=4,pv=5,mv=6,gv=7,_v=300,Is=301,Ua=302,Au=303,wu=304,Kc=306,oh=1e3,vr=1001,lh=1002,xn=1003,jA=1004,sl=1005,Rn=1006,Cu=1007,Ms=1008,Si=1009,xv=1010,vv=1011,Vo=1012,Zd=1013,or=1014,Ji=1015,Ar=1016,Jd=1017,Qd=1018,zo=1020,yv=35902,Sv=35899,Mv=1021,Tv=1022,Oi=1023,wr=1026,Ts=1027,bv=1028,ep=1029,Us=1030,tp=1031,np=1033,nc=33776,ic=33777,rc=33778,sc=33779,ch=35840,uh=35841,fh=35842,hh=35843,dh=36196,ph=37492,mh=37496,gh=37488,_h=37489,Pc=37490,xh=37491,vh=37808,yh=37809,Sh=37810,Mh=37811,Th=37812,bh=37813,Eh=37814,Ah=37815,wh=37816,Ch=37817,Rh=37818,Ph=37819,Dh=37820,Lh=37821,Nh=36492,Ih=36494,Uh=36495,Fh=36283,Oh=36284,Dc=36285,Bh=36286,YA=3200,lg=0,qA=1,kr="",_i="srgb",Lc="srgb-linear",Nc="linear",xt="srgb",js=7680,cg=519,$A=512,KA=513,ZA=514,ip=515,JA=516,QA=517,rp=518,ew=519,ug=35044,fg="300 es",Qi=2e3,Ic=2001;function tw(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Uc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nw(){const i=Uc("canvas");return i.style.display="block",i}const hg={};function dg(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ev(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=Ev(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function pt(...i){i=Ev(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function kh(...i){const e=i.join(" ");e in hg||(hg[e]=!0,We(...i))}function iw(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const rw={[eh]:th,[nh]:sh,[ih]:ah,[Ia]:rh,[th]:eh,[sh]:nh,[ah]:ih,[rh]:Ia};class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ru=Math.PI/180,Vh=180/Math.PI;function $o(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function sw(i,e){return(i%e+e)%e}function Pu(i,e,t){return(1-t)*i+t*e}function ja(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gp=class gp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gp.prototype.isVector2=!0;let St=gp;class Ga{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(h!==_||l!==f||c!==d||u!==g){let p=l*f+c*d+u*g+h*_;p<0&&(f=-f,d=-d,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const x=Math.acos(p),M=Math.sin(x);m=Math.sin(m*x)/M,o=Math.sin(o*x)/M,l=l*m+f*o,c=c*m+d*o,u=u*m+g*o,h=h*m+_*o}else{l=l*m+f*o,c=c*m+d*o,u=u*m+g*o,h=h*m+_*o;const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _p=class _p{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_p.prototype.isVector3=!0;let X=_p;const Du=new X,pg=new Ga,xp=class xp{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=r[0],p=r[3],m=r[6],x=r[1],M=r[4],y=r[7],A=r[2],b=r[5],w=r[8];return s[0]=a*_+o*x+l*A,s[3]=a*p+o*M+l*b,s[6]=a*m+o*y+l*w,s[1]=c*_+u*x+h*A,s[4]=c*p+u*M+h*b,s[7]=c*m+u*y+h*w,s[2]=f*_+d*x+g*A,s[5]=f*p+d*M+g*b,s[8]=f*m+d*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lu.makeScale(e,t)),this}rotate(e){return this.premultiply(Lu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xp.prototype.isMatrix3=!0;let $e=xp;const Lu=new $e,mg=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gg=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aw(){const i={enabled:!0,workingColorSpace:Lc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(r.r=Mr(r.r),r.g=Mr(r.g),r.b=Mr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(r.r=Ma(r.r),r.g=Ma(r.g),r.b=Ma(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===kr?Nc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return kh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return kh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lc]:{primaries:e,whitePoint:n,transfer:Nc,toXYZ:mg,fromXYZ:gg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:mg,fromXYZ:gg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),i}const ut=aw();function Mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ma(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ys;class ow{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ys===void 0&&(Ys=Uc("canvas")),Ys.width=e.width,Ys.height=e.height;const r=Ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mr(t[n]/255)*255):t[n]=Mr(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lw=0;class sp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lw++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Nu(r[a].image)):s.push(Nu(r[a]))}else s=Nu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Nu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ow.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let cw=0;const Iu=new X;class Dn extends zs{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,n=vr,r=vr,s=Rn,a=Ms,o=Oi,l=Si,c=Dn.DEFAULT_ANISOTROPY,u=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=$o(),this.name="",this.source=new sp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oh:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oh:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=_v;Dn.DEFAULT_ANISOTROPY=1;const vp=class vp{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(d+1)/2,A=(m+1)/2,b=(u+f)/4,w=(h+_)/4,v=(g+p)/4;return M>y&&M>A?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=b/n,s=w/n):y>A?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=b/r,s=v/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=w/s,r=v/s),this.set(n,r,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vp.prototype.isVector4=!0;let Yt=vp;class uw extends zs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Dn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new sp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends uw{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Av extends Dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fw extends Dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vc=class Vc{constructor(e,t,n,r,s,a,o,l,c,u,h,f,d,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,f,d,g,_,p)}set(e,t,n,r,s,a,o,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vc().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/qs.setFromMatrixColumn(e,0).length(),s=1/qs.setFromMatrixColumn(e,1).length(),a=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hw,e,dw)}lookAt(e,t,n){const r=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Dr.crossVectors(n,Qn),Dr.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Dr.crossVectors(n,Qn)),Dr.normalize(),al.crossVectors(Qn,Dr),r[0]=Dr.x,r[4]=al.x,r[8]=Qn.x,r[1]=Dr.y,r[5]=al.y,r[9]=Qn.y,r[2]=Dr.z,r[6]=al.z,r[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],M=n[7],y=n[11],A=n[15],b=r[0],w=r[4],v=r[8],T=r[12],C=r[1],P=r[5],N=r[9],G=r[13],V=r[2],I=r[6],F=r[10],O=r[14],q=r[3],K=r[7],D=r[11],le=r[15];return s[0]=a*b+o*C+l*V+c*q,s[4]=a*w+o*P+l*I+c*K,s[8]=a*v+o*N+l*F+c*D,s[12]=a*T+o*G+l*O+c*le,s[1]=u*b+h*C+f*V+d*q,s[5]=u*w+h*P+f*I+d*K,s[9]=u*v+h*N+f*F+d*D,s[13]=u*T+h*G+f*O+d*le,s[2]=g*b+_*C+p*V+m*q,s[6]=g*w+_*P+p*I+m*K,s[10]=g*v+_*N+p*F+m*D,s[14]=g*T+_*G+p*O+m*le,s[3]=x*b+M*C+y*V+A*q,s[7]=x*w+M*P+y*I+A*K,s[11]=x*v+M*N+y*F+A*D,s[15]=x*T+M*G+y*O+A*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15],x=l*d-c*f,M=o*d-c*h,y=o*f-l*h,A=a*d-c*u,b=a*f-l*u,w=a*h-o*u;return t*(_*x-p*M+m*y)-n*(g*x-p*A+m*b)+r*(g*M-_*A+m*w)-s*(g*y-_*b+p*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=t*o-n*a,M=t*l-r*a,y=t*c-s*a,A=n*l-r*o,b=n*c-s*o,w=r*c-s*l,v=u*_-h*g,T=u*p-f*g,C=u*m-d*g,P=h*p-f*_,N=h*m-d*_,G=f*m-d*p,V=x*G-M*N+y*P+A*C-b*T+w*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/V;return e[0]=(o*G-l*N+c*P)*I,e[1]=(r*N-n*G-s*P)*I,e[2]=(_*w-p*b+m*A)*I,e[3]=(f*b-h*w-d*A)*I,e[4]=(l*C-a*G-c*T)*I,e[5]=(t*G-r*C+s*T)*I,e[6]=(p*y-g*w-m*M)*I,e[7]=(u*w-f*y+d*M)*I,e[8]=(a*N-o*C+c*v)*I,e[9]=(n*C-t*N-s*v)*I,e[10]=(g*b-_*y+m*x)*I,e[11]=(h*y-u*b-d*x)*I,e[12]=(o*T-a*P-l*v)*I,e[13]=(t*P-n*T+r*v)*I,e[14]=(_*M-g*A-p*x)*I,e[15]=(u*A-h*M+f*x)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,_=a*u,p=a*h,m=o*h,x=l*c,M=l*u,y=l*h,A=n.x,b=n.y,w=n.z;return r[0]=(1-(_+m))*A,r[1]=(d+y)*A,r[2]=(g-M)*A,r[3]=0,r[4]=(d-y)*b,r[5]=(1-(f+m))*b,r[6]=(p+x)*b,r[7]=0,r[8]=(g+M)*w,r[9]=(p-x)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=qs.set(r[0],r[1],r[2]).length();const o=qs.set(r[4],r[5],r[6]).length(),l=qs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Pi.copy(this);const c=1/a,u=1/o,h=1/l;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=u,Pi.elements[5]*=u,Pi.elements[6]*=u,Pi.elements[8]*=h,Pi.elements[9]*=h,Pi.elements[10]*=h,t.setFromRotationMatrix(Pi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=Qi,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Qi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ic)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Qi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),d=-(n+r)/(n-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Qi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ic)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Vc.prototype.isMatrix4=!0;let tn=Vc;const qs=new X,Pi=new tn,hw=new X(0,0,0),dw=new X(1,1,1),Dr=new X,al=new X,Qn=new X,_g=new tn,xg=new Ga;class Fs{constructor(e=0,t=0,n=0,r=Fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _g.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_g,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xg.setFromEuler(this),this.setFromQuaternion(xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fs.DEFAULT_ORDER="XYZ";class wv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pw=0;const vg=new X,$s=new Ga,ur=new tn,ol=new X,Ya=new X,mw=new X,gw=new Ga,yg=new X(1,0,0),Sg=new X(0,1,0),Mg=new X(0,0,1),Tg={type:"added"},_w={type:"removed"},Ks={type:"childadded",child:null},Uu={type:"childremoved",child:null};class $n extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new X,t=new Fs,n=new Ga,r=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tn},normalMatrix:{value:new $e}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(yg,e)}rotateY(e){return this.rotateOnAxis(Sg,e)}rotateZ(e){return this.rotateOnAxis(Mg,e)}translateOnAxis(e,t){return vg.copy(e).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yg,e)}translateY(e){return this.translateOnAxis(Sg,e)}translateZ(e){return this.translateOnAxis(Mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ol.copy(e):ol.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(Ya,ol,this.up):ur.lookAt(ol,Ya,this.up),this.quaternion.setFromRotationMatrix(ur),r&&(ur.extractRotation(r.matrixWorld),$s.setFromRotationMatrix(ur),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tg),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_w),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tg),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,e,mw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,gw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}$n.DEFAULT_UP=new X(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ll extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xw={type:"move"};class Fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ll;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Ou(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class vt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=sw(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ou(a,s,e+1/3),this.g=Ou(a,s,e),this.b=Ou(a,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=_i){function n(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const n=Cv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return ut.workingToColorSpace(bn.copy(this),e),Math.round(ft(bn.r*255,0,255))*65536+Math.round(ft(bn.g*255,0,255))*256+Math.round(ft(bn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(bn.copy(this),t);const n=bn.r,r=bn.g,s=bn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=_i){ut.workingToColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,r=bn.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(cl);const n=Pu(Lr.h,cl.h,t),r=Pu(Lr.s,cl.s,t),s=Pu(Lr.l,cl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new vt;vt.NAMES=Cv;class vw extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fs,this.environmentIntensity=1,this.environmentRotation=new Fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Di=new X,fr=new X,Bu=new X,hr=new X,Zs=new X,Js=new X,bg=new X,ku=new X,Vu=new X,zu=new X,Gu=new Yt,Hu=new Yt,Wu=new Yt;class Ui{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Di.subVectors(e,t),r.cross(Di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Di.subVectors(r,t),fr.subVectors(n,t),Bu.subVectors(e,t);const a=Di.dot(Di),o=Di.dot(fr),l=Di.dot(Bu),c=fr.dot(fr),u=fr.dot(Bu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,hr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hr.x),l.addScaledVector(a,hr.y),l.addScaledVector(o,hr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Gu.setScalar(0),Hu.setScalar(0),Wu.setScalar(0),Gu.fromBufferAttribute(e,t),Hu.fromBufferAttribute(e,n),Wu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gu,s.x),a.addScaledVector(Hu,s.y),a.addScaledVector(Wu,s.z),a}static isFrontFacing(e,t,n,r){return Di.subVectors(n,t),fr.subVectors(e,t),Di.cross(fr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Di.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ui.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Zs.subVectors(r,n),Js.subVectors(s,n),ku.subVectors(e,n);const l=Zs.dot(ku),c=Js.dot(ku);if(l<=0&&c<=0)return t.copy(n);Vu.subVectors(e,r);const u=Zs.dot(Vu),h=Js.dot(Vu);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Zs,a);zu.subVectors(e,s);const d=Zs.dot(zu),g=Js.dot(zu);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Js,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return bg.subVectors(s,r),o=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(bg,o);const m=1/(p+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(Zs,a).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ko{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Li):Li.fromBufferAttribute(s,a),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ul.copy(n.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),fl.subVectors(this.max,qa),Qs.subVectors(e.a,qa),ea.subVectors(e.b,qa),ta.subVectors(e.c,qa),Nr.subVectors(ea,Qs),Ir.subVectors(ta,ea),ls.subVectors(Qs,ta);let t=[0,-Nr.z,Nr.y,0,-Ir.z,Ir.y,0,-ls.z,ls.y,Nr.z,0,-Nr.x,Ir.z,0,-Ir.x,ls.z,0,-ls.x,-Nr.y,Nr.x,0,-Ir.y,Ir.x,0,-ls.y,ls.x,0];return!Xu(t,Qs,ea,ta,fl)||(t=[1,0,0,0,1,0,0,0,1],!Xu(t,Qs,ea,ta,fl))?!1:(hl.crossVectors(Nr,Ir),t=[hl.x,hl.y,hl.z],Xu(t,Qs,ea,ta,fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dr=[new X,new X,new X,new X,new X,new X,new X,new X],Li=new X,ul=new Ko,Qs=new X,ea=new X,ta=new X,Nr=new X,Ir=new X,ls=new X,qa=new X,fl=new X,hl=new X,cs=new X;function Xu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){cs.fromArray(i,s);const o=r.x*Math.abs(cs.x)+r.y*Math.abs(cs.y)+r.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),u=n.dot(cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zt=new X,dl=new St;let yw=0;class Vi extends zs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ug,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dl.fromBufferAttribute(this,t),dl.applyMatrix3(e),this.setXY(t,dl.x,dl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ja(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),n=zn(n,this.array),r=zn(r,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ug&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Rv extends Vi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pv extends Vi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ai extends Vi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Sw=new Ko,$a=new X,ju=new X;class Zc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sw.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$a.subVectors(e,this.center);const t=$a.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($a,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($a.copy(e.center).add(ju)),this.expandByPoint($a.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Mw=0;const mi=new tn,Yu=new $n,na=new X,ei=new Ko,Ka=new Ko,hn=new X;class Ci extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tw(e)?Pv:Rv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ai(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ka.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(ei.min,Ka.min),ei.expandByPoint(hn),hn.addVectors(ei.max,Ka.max),ei.expandByPoint(hn)):(ei.expandByPoint(Ka.min),ei.expandByPoint(Ka.max))}ei.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)hn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(hn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)hn.fromBufferAttribute(o,c),l&&(na.fromBufferAttribute(e,c),hn.add(na)),r=Math.max(r,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new X,l[v]=new X;const c=new X,u=new X,h=new X,f=new St,d=new St,g=new St,_=new X,p=new X;function m(v,T,C){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,C),f.fromBufferAttribute(s,v),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),o[v].add(_),o[T].add(_),o[C].add(_),l[v].add(p),l[T].add(p),l[C].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,T=x.length;v<T;++v){const C=x[v],P=C.start,N=C.count;for(let G=P,V=P+N;G<V;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const M=new X,y=new X,A=new X,b=new X;function w(v){A.fromBufferAttribute(r,v),b.copy(A);const T=o[v];M.copy(T),M.sub(A.multiplyScalar(A.dot(T))).normalize(),y.crossVectors(b,T);const P=y.dot(l[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,P)}for(let v=0,T=x.length;v<T;++v){const C=x[v],P=C.start,N=C.count;for(let G=P,V=P+N;G<V;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,h=new X;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new Vi(f,u,h)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ci,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Tw=0;class Zo extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Sa,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jf,this.blendDst=Qf,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sa&&(n.blending=this.blending),this.side!==ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jf&&(n.blendSrc=this.blendSrc),this.blendDst!==Qf&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ia&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pr=new X,qu=new X,pl=new X,Ur=new X,$u=new X,ml=new X,Ku=new X;class Dv{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,t),pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qu.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(qu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(pl),o=Ur.dot(this.direction),l=-Ur.dot(pl),c=Ur.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qu).addScaledVector(pl,f),d}intersectSphere(e,t){pr.subVectors(e.center,this.origin);const n=pr.dot(this.direction),r=pr.dot(pr)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,t,n,r,s){$u.subVectors(t,e),ml.subVectors(n,e),Ku.crossVectors($u,ml);let a=this.direction.dot(Ku),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ur.subVectors(this.origin,e);const l=o*this.direction.dot(ml.crossVectors(Ur,ml));if(l<0)return null;const c=o*this.direction.dot($u.cross(Ur));if(c<0||l+c>a)return null;const u=-o*Ur.dot(Ku);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ap extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Eg=new tn,us=new Dv,gl=new Zc,Ag=new X,_l=new X,xl=new X,vl=new X,Zu=new X,yl=new X,wg=new X,Sl=new X;class zi extends $n{constructor(e=new Ci,t=new ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){yl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Zu.fromBufferAttribute(h,e),a?yl.addScaledVector(Zu,u):yl.addScaledVector(Zu.sub(t),u))}t.add(yl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(s),us.copy(e.ray).recast(e.near),!(gl.containsPoint(us.origin)===!1&&(us.intersectSphere(gl,Ag)===null||us.origin.distanceToSquared(Ag)>(e.far-e.near)**2))&&(Eg.copy(s).invert(),us.copy(e.ray).applyMatrix4(Eg),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],x=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,A=M;y<A;y+=3){const b=o.getX(y),w=o.getX(y+1),v=o.getX(y+2);r=Ml(this,m,e,n,c,u,h,b,w,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=o.getX(p),M=o.getX(p+1),y=o.getX(p+2);r=Ml(this,a,e,n,c,u,h,x,M,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],x=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,A=M;y<A;y+=3){const b=y,w=y+1,v=y+2;r=Ml(this,m,e,n,c,u,h,b,w,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const x=p,M=p+1,y=p+2;r=Ml(this,a,e,n,c,u,h,x,M,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function bw(i,e,t,n,r,s,a,o){let l;if(e.side===qn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===ts,o),l===null)return null;Sl.copy(o),Sl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sl);return c<t.near||c>t.far?null:{distance:c,point:Sl.clone(),object:i}}function Ml(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,_l),i.getVertexPosition(l,xl),i.getVertexPosition(c,vl);const u=bw(i,e,t,n,_l,xl,vl,wg);if(u){const h=new X;Ui.getBarycoord(wg,_l,xl,vl,h),r&&(u.uv=Ui.getInterpolatedAttribute(r,o,l,c,h,new St)),s&&(u.uv1=Ui.getInterpolatedAttribute(s,o,l,c,h,new St)),a&&(u.normal=Ui.getInterpolatedAttribute(a,o,l,c,h,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new X,materialIndex:0};Ui.getNormal(_l,xl,vl,f.normal),u.face=f,u.barycoord=h}return u}class Ew extends Dn{constructor(e=null,t=1,n=1,r,s,a,o,l,c=xn,u=xn,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ju=new X,Aw=new X,ww=new $e;class ps{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ju.subVectors(n,t).cross(Aw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Ju),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ww.getNormalMatrix(e),r=this.coplanarPoint(Ju).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Zc,Cw=new St(.5,.5),Tl=new X;class Lv{constructor(e=new ps,t=new ps,n=new ps,r=new ps,s=new ps,a=new ps){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qi,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],p=s[10],m=s[11],x=s[12],M=s[13],y=s[14],A=s[15];if(r[0].setComponents(c-a,d-u,m-g,A-x).normalize(),r[1].setComponents(c+a,d+u,m+g,A+x).normalize(),r[2].setComponents(c+o,d+h,m+_,A+M).normalize(),r[3].setComponents(c-o,d-h,m-_,A-M).normalize(),n)r[4].setComponents(l,f,p,y).normalize(),r[5].setComponents(c-l,d-f,m-p,A-y).normalize();else if(r[4].setComponents(c-l,d-f,m-p,A-y).normalize(),t===Qi)r[5].setComponents(c+l,d+f,m+p,A+y).normalize();else if(t===Ic)r[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);const t=Cw.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Tl.x=r.normal.x>0?e.max.x:e.min.x,Tl.y=r.normal.y>0?e.max.y:e.min.y,Tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nv extends Zo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cg=new tn,zh=new Dv,bl=new Zc,El=new X;class Rw extends $n{constructor(e=new Ci,t=new Nv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bl.copy(n.boundingSphere),bl.applyMatrix4(r),bl.radius+=s,e.ray.intersectsSphere(bl)===!1)return;Cg.copy(r).invert(),zh.copy(e.ray).applyMatrix4(Cg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);El.fromBufferAttribute(h,p),Rg(El,p,l,r,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)El.fromBufferAttribute(h,g),Rg(El,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rg(i,e,t,n,r,s,a){const o=zh.distanceSqToPoint(i);if(o<t){const l=new X;zh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Iv extends Dn{constructor(e=[],t=Is,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pw extends Dn{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fa extends Dn{constructor(e,t,n=or,r,s,a,o=xn,l=xn,c,u=wr,h=1){if(u!==wr&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dw extends Fa{constructor(e,t=or,n=Is,r,s,a=xn,o=xn,l,c=wr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Uv extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jo extends Ci{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ai(c,3)),this.setAttribute("normal",new Ai(u,3)),this.setAttribute("uv",new Ai(h,2));function g(_,p,m,x,M,y,A,b,w,v,T){const C=y/w,P=A/v,N=y/2,G=A/2,V=b/2,I=w+1,F=v+1;let O=0,q=0;const K=new X;for(let D=0;D<F;D++){const le=D*P-G;for(let Te=0;Te<I;Te++){const Ye=Te*C-N;K[_]=Ye*x,K[p]=le*M,K[m]=V,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[m]=b>0?1:-1,u.push(K.x,K.y,K.z),h.push(Te/w),h.push(1-D/v),O+=1}}for(let D=0;D<v;D++)for(let le=0;le<w;le++){const Te=f+le+I*D,Ye=f+le+I*(D+1),Ve=f+(le+1)+I*(D+1),Ie=f+(le+1)+I*D;l.push(Te,Ye,Ie),l.push(Ye,Ve,Ie),q+=6}o.addGroup(d,q,T),d+=q,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jc extends Ci{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const x=m*f-a;for(let M=0;M<c;M++){const y=M*h-s;g.push(y,-x,0),_.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const M=x+c*m,y=x+c*(m+1),A=x+1+c*(m+1),b=x+1+c*m;d.push(M,y,b),d.push(y,A,b)}this.setIndex(d),this.setAttribute("position",new Ai(g,3)),this.setAttribute("normal",new Ai(_,3)),this.setAttribute("uv",new Ai(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.width,e.height,e.widthSegments,e.heightSegments)}}class op extends Ci{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new X,f=new X,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const x=[],M=m/n;let y=0;m===0&&a===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const b=A/t;h.x=-e*Math.cos(r+b*s)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(r+b*s)*Math.sin(a+M*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(b+y,1-M),x.push(c++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const M=u[m][x+1],y=u[m][x],A=u[m+1][x],b=u[m+1][x+1];(m!==0||a>0)&&d.push(M,y,b),(m!==n-1||l<Math.PI)&&d.push(y,A,b)}this.setIndex(d),this.setAttribute("position",new Ai(g,3)),this.setAttribute("normal",new Ai(_,3)),this.setAttribute("uv",new Ai(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new op(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Oa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Pg(r))r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Pg(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function In(i){const e={};for(let t=0;t<i.length;t++){const n=Oa(i[t]);for(const r in n)e[r]=n[r]}return e}function Pg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lw(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Nw={clone:Oa,merge:In};var Iw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iw,this.fragmentShader=Uw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oa(e.uniforms),this.uniformsGroups=Lw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fw extends lr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ow extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bw extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Al=new X,wl=new Ga,Hi=new X;class Ov extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Al,wl,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,wl,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Al,wl,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,wl,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new X,Dg=new St,Lg=new St;class xi extends Ov{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(Ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,t){return this.getViewBounds(e,Dg,Lg),t.subVectors(Lg,Dg)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ru*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Bv extends Ov{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ia=-90,ra=1;class kw extends $n{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xi(ia,ra,e,t);r.layers=this.layers,this.add(r);const s=new xi(ia,ra,e,t);s.layers=this.layers,this.add(s);const a=new xi(ia,ra,e,t);a.layers=this.layers,this.add(a);const o=new xi(ia,ra,e,t);o.layers=this.layers,this.add(o);const l=new xi(ia,ra,e,t);l.layers=this.layers,this.add(l);const c=new xi(ia,ra,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Qi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ic)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vw extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,We("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const yp=class yp{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};yp.prototype.isMatrix2=!0;let Ng=yp;function Ig(i,e,t,n){const r=Gw(n);switch(t){case Mv:return i*e;case bv:return i*e/r.components*r.byteLength;case ep:return i*e/r.components*r.byteLength;case Us:return i*e*2/r.components*r.byteLength;case tp:return i*e*2/r.components*r.byteLength;case Tv:return i*e*3/r.components*r.byteLength;case Oi:return i*e*4/r.components*r.byteLength;case np:return i*e*4/r.components*r.byteLength;case nc:case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rc:case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uh:case hh:return Math.max(i,16)*Math.max(e,8)/4;case ch:case fh:return Math.max(i,8)*Math.max(e,8)/2;case dh:case ph:case gh:case _h:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mh:case Pc:case xh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Nh:case Ih:case Uh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fh:case Oh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dc:case Bh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gw(i){switch(i){case Si:case xv:return{byteLength:1,components:1};case Vo:case vv:case Ar:return{byteLength:2,components:1};case Jd:case Qd:return{byteLength:2,components:4};case or:case Zd:case Ji:return{byteLength:4,components:1};case yv:case Sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);function kv(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Hw(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ww=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$w=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_C=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yC="gl_FragColor = linearToOutputTexel( gl_FragColor );",SC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,TC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,EC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,FC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jC=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,YC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$C=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_R=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ER=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$R=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_P=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Ww,alphahash_pars_fragment:Xw,alphamap_fragment:jw,alphamap_pars_fragment:Yw,alphatest_fragment:qw,alphatest_pars_fragment:$w,aomap_fragment:Kw,aomap_pars_fragment:Zw,batching_pars_vertex:Jw,batching_vertex:Qw,begin_vertex:eC,beginnormal_vertex:tC,bsdfs:nC,iridescence_fragment:iC,bumpmap_pars_fragment:rC,clipping_planes_fragment:sC,clipping_planes_pars_fragment:aC,clipping_planes_pars_vertex:oC,clipping_planes_vertex:lC,color_fragment:cC,color_pars_fragment:uC,color_pars_vertex:fC,color_vertex:hC,common:dC,cube_uv_reflection_fragment:pC,defaultnormal_vertex:mC,displacementmap_pars_vertex:gC,displacementmap_vertex:_C,emissivemap_fragment:xC,emissivemap_pars_fragment:vC,colorspace_fragment:yC,colorspace_pars_fragment:SC,envmap_fragment:MC,envmap_common_pars_fragment:TC,envmap_pars_fragment:bC,envmap_pars_vertex:EC,envmap_physical_pars_fragment:FC,envmap_vertex:AC,fog_vertex:wC,fog_pars_vertex:CC,fog_fragment:RC,fog_pars_fragment:PC,gradientmap_pars_fragment:DC,lightmap_pars_fragment:LC,lights_lambert_fragment:NC,lights_lambert_pars_fragment:IC,lights_pars_begin:UC,lights_toon_fragment:OC,lights_toon_pars_fragment:BC,lights_phong_fragment:kC,lights_phong_pars_fragment:VC,lights_physical_fragment:zC,lights_physical_pars_fragment:GC,lights_fragment_begin:HC,lights_fragment_maps:WC,lights_fragment_end:XC,lightprobes_pars_fragment:jC,logdepthbuf_fragment:YC,logdepthbuf_pars_fragment:qC,logdepthbuf_pars_vertex:$C,logdepthbuf_vertex:KC,map_fragment:ZC,map_pars_fragment:JC,map_particle_fragment:QC,map_particle_pars_fragment:eR,metalnessmap_fragment:tR,metalnessmap_pars_fragment:nR,morphinstance_vertex:iR,morphcolor_vertex:rR,morphnormal_vertex:sR,morphtarget_pars_vertex:aR,morphtarget_vertex:oR,normal_fragment_begin:lR,normal_fragment_maps:cR,normal_pars_fragment:uR,normal_pars_vertex:fR,normal_vertex:hR,normalmap_pars_fragment:dR,clearcoat_normal_fragment_begin:pR,clearcoat_normal_fragment_maps:mR,clearcoat_pars_fragment:gR,iridescence_pars_fragment:_R,opaque_fragment:xR,packing:vR,premultiplied_alpha_fragment:yR,project_vertex:SR,dithering_fragment:MR,dithering_pars_fragment:TR,roughnessmap_fragment:bR,roughnessmap_pars_fragment:ER,shadowmap_pars_fragment:AR,shadowmap_pars_vertex:wR,shadowmap_vertex:CR,shadowmask_pars_fragment:RR,skinbase_vertex:PR,skinning_pars_vertex:DR,skinning_vertex:LR,skinnormal_vertex:NR,specularmap_fragment:IR,specularmap_pars_fragment:UR,tonemapping_fragment:FR,tonemapping_pars_fragment:OR,transmission_fragment:BR,transmission_pars_fragment:kR,uv_pars_fragment:VR,uv_pars_vertex:zR,uv_vertex:GR,worldpos_vertex:HR,background_vert:WR,background_frag:XR,backgroundCube_vert:jR,backgroundCube_frag:YR,cube_vert:qR,cube_frag:$R,depth_vert:KR,depth_frag:ZR,distance_vert:JR,distance_frag:QR,equirect_vert:eP,equirect_frag:tP,linedashed_vert:nP,linedashed_frag:iP,meshbasic_vert:rP,meshbasic_frag:sP,meshlambert_vert:aP,meshlambert_frag:oP,meshmatcap_vert:lP,meshmatcap_frag:cP,meshnormal_vert:uP,meshnormal_frag:fP,meshphong_vert:hP,meshphong_frag:dP,meshphysical_vert:pP,meshphysical_frag:mP,meshtoon_vert:gP,meshtoon_frag:_P,points_vert:xP,points_frag:vP,shadow_vert:yP,shadow_frag:SP,sprite_vert:MP,sprite_frag:TP},Me={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},$i={basic:{uniforms:In([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:In([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:In([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:In([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:In([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new vt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:In([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:In([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:In([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:In([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:In([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:In([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:In([Me.common,Me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:In([Me.lights,Me.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};$i.physical={uniforms:In([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Cl={r:0,b:0,g:0},bP=new tn,Vv=new $e;Vv.set(-1,0,0,0,1,0,0,0,1);function EP(i,e,t,n,r,s){const a=new vt(0);let o=r===!0?0:1,l,c,u=null,h=0,f=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const y=x.backgroundBlurriness>0;M=e.get(M,y)}return M}function g(x){let M=!1;const y=d(x);y===null?p(a,o):y&&y.isColor&&(p(y,1),M=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,M){const y=d(M);y&&(y.isCubeTexture||y.mapping===Kc)?(c===void 0&&(c=new zi(new Jo(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Oa($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bP.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vv),c.material.toneMapped=ut.getTransfer(y.colorSpace)!==xt,(u!==y||h!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new zi(new Jc(2,2),new lr({name:"BackgroundMaterial",uniforms:Oa($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ut.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,M){x.getRGB(Cl,Fv(i)),t.buffers.color.setClear(Cl.r,Cl.g,Cl.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:g,addToRenderList:_,dispose:m}}function AP(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(P,N,G,V,I){let F=!1;const O=h(P,V,G,N);s!==O&&(s=O,c(s.object)),F=d(P,V,G,I),F&&g(P,V,G,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,y(P,N,G,V),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function h(P,N,G,V){const I=V.wireframe===!0;let F=n[N.id];F===void 0&&(F={},n[N.id]=F);const O=P.isInstancedMesh===!0?P.id:0;let q=F[O];q===void 0&&(q={},F[O]=q);let K=q[G.id];K===void 0&&(K={},q[G.id]=K);let D=K[I];return D===void 0&&(D=f(l()),K[I]=D),D}function f(P){const N=[],G=[],V=[];for(let I=0;I<t;I++)N[I]=0,G[I]=0,V[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:V,object:P,attributes:{},index:null}}function d(P,N,G,V){const I=s.attributes,F=N.attributes;let O=0;const q=G.getAttributes();for(const K in q)if(q[K].location>=0){const le=I[K];let Te=F[K];if(Te===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Te=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Te=P.instanceColor)),le===void 0||le.attribute!==Te||Te&&le.data!==Te.data)return!0;O++}return s.attributesNum!==O||s.index!==V}function g(P,N,G,V){const I={},F=N.attributes;let O=0;const q=G.getAttributes();for(const K in q)if(q[K].location>=0){let le=F[K];le===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(le=P.instanceColor));const Te={};Te.attribute=le,le&&le.data&&(Te.data=le.data),I[K]=Te,O++}s.attributes=I,s.attributesNum=O,s.index=V}function _(){const P=s.newAttributes;for(let N=0,G=P.length;N<G;N++)P[N]=0}function p(P){m(P,0)}function m(P,N){const G=s.newAttributes,V=s.enabledAttributes,I=s.attributeDivisors;G[P]=1,V[P]===0&&(i.enableVertexAttribArray(P),V[P]=1),I[P]!==N&&(i.vertexAttribDivisor(P,N),I[P]=N)}function x(){const P=s.newAttributes,N=s.enabledAttributes;for(let G=0,V=N.length;G<V;G++)N[G]!==P[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function M(P,N,G,V,I,F,O){O===!0?i.vertexAttribIPointer(P,N,G,I,F):i.vertexAttribPointer(P,N,G,V,I,F)}function y(P,N,G,V){_();const I=V.attributes,F=G.getAttributes(),O=N.defaultAttributeValues;for(const q in F){const K=F[q];if(K.location>=0){let D=I[q];if(D===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(D=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(D=P.instanceColor)),D!==void 0){const le=D.normalized,Te=D.itemSize,Ye=e.get(D);if(Ye===void 0)continue;const Ve=Ye.buffer,Ie=Ye.type,Q=Ye.bytesPerElement,ce=Ie===i.INT||Ie===i.UNSIGNED_INT||D.gpuType===Zd;if(D.isInterleavedBufferAttribute){const ae=D.data,Ce=ae.stride,ke=D.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<K.locationSize;Pe++)m(K.location+Pe,ae.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<K.locationSize;Pe++)p(K.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Pe=0;Pe<K.locationSize;Pe++)M(K.location+Pe,Te/K.locationSize,Ie,le,Ce*Q,(ke+Te/K.locationSize*Pe)*Q,ce)}else{if(D.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)m(K.location+ae,D.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ae=0;ae<K.locationSize;ae++)p(K.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ae=0;ae<K.locationSize;ae++)M(K.location+ae,Te/K.locationSize,Ie,le,Te*Q,Te/K.locationSize*ae*Q,ce)}}else if(O!==void 0){const le=O[q];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(K.location,le);break;case 3:i.vertexAttrib3fv(K.location,le);break;case 4:i.vertexAttrib4fv(K.location,le);break;default:i.vertexAttrib1fv(K.location,le)}}}}x()}function A(){T();for(const P in n){const N=n[P];for(const G in N){const V=N[G];for(const I in V){const F=V[I];for(const O in F)u(F[O].object),delete F[O];delete V[I]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;const N=n[P.id];for(const G in N){const V=N[G];for(const I in V){const F=V[I];for(const O in F)u(F[O].object),delete F[O];delete V[I]}}delete n[P.id]}function w(P){for(const N in n){const G=n[N];for(const V in G){const I=G[V];if(I[P.id]===void 0)continue;const F=I[P.id];for(const O in F)u(F[O].object),delete F[O];delete I[P.id]}}}function v(P){for(const N in n){const G=n[N],V=P.isInstancedMesh===!0?P.id:0,I=G[V];if(I!==void 0){for(const F in I){const O=I[F];for(const q in O)u(O[q].object),delete O[q];delete I[F]}delete G[V],Object.keys(G).length===0&&delete n[N]}}}function T(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function wP(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function CP(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Oi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const v=w===Ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Si&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ji&&!v)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,maxSamples:A,samples:b}}function RP(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new ps,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,M=x*4;let y=m.clippingState||null;l.value=y,y=u(g,f,M,d);for(let A=0;A!==M;++A)y[A]=t[A];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,y=d;M!==_;++M,y+=4)a.copy(h[M]).applyMatrix4(x,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const Wr=4,Ug=[.125,.215,.35,.446,.526,.582],xs=20,PP=256,Za=new Bv,Fg=new vt;let Qu=null,ef=0,tf=0,nf=!1;const DP=new X;class Og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=DP}=s;Qu=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu,ef,tf),this._renderer.xr.enabled=nf,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget(),ef=this._renderer.getActiveCubeFace(),tf=this._renderer.getActiveMipmapLevel(),nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ar,format:Oi,colorSpace:Lc,depthBuffer:!1},r=Bg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bg(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LP(s)),this._blurMaterial=IP(s,e,t),this._ggxMaterial=NP(s,e,t)}return r}_compileMaterial(e){const t=new zi(new Ci,e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,n,r,s){const l=new xi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Fg),h.toneMapping=nr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zi(new Jo,new ap({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,m=!0):(p.color.copy(Fg),m=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const A=this._cubeSize;sa(r,y*A,M>2?A:0,A,A),h.setRenderTarget(r),m&&h.render(_,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Is||e.mapping===Ua;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Wr?n-g+Wr:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,sa(s,p,m,3*_,2*_),r.setRenderTarget(s),r.render(o,Za),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,sa(e,p,m,3*_,2*_),r.setRenderTarget(e),r.render(o,Za)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&pt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*xs-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):xs;p>xs&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xs}`);const m=[];let x=0;for(let w=0;w<xs;++w){const v=w/_,T=Math.exp(-v*v/2);m.push(T),w===0?x+=T:w<p&&(x+=2*T)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const y=this._sizeLods[r],A=3*y*(r>M-Wr?r-M+Wr:0),b=4*(this._cubeSize-y);sa(t,A,b,3*y,2*y),l.setRenderTarget(t),l.render(h,Za)}}function LP(i){const e=[],t=[],n=[];let r=i;const s=i-Wr+1+Ug.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Wr?l=Ug[a-i+Wr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*d),M=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,v=b>2?0:-1,T=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];x.set(T,_*g*b),M.set(f,p*g*b);const C=[b,b,b,b,b,b];y.set(C,m*g*b)}const A=new Ci;A.setAttribute("position",new Vi(x,_)),A.setAttribute("uv",new Vi(M,p)),A.setAttribute("faceIndex",new Vi(y,m)),n.push(new zi(A,null)),r>Wr&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Bg(i,e,t){const n=new ir(i,e,t);return n.texture.mapping=Kc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function NP(i,e,t){return new lr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function IP(i,e,t){const n=new Float32Array(xs),r=new X(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function kg(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Vg(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class zv extends ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Iv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jo(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:Oa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:Sr});s.uniforms.tEquirect.value=t;const a=new zi(r,s),o=t.minFilter;return t.minFilter===Ms&&(t.minFilter=Rn),new kw(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function UP(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Au||d===wu)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new zv(g.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,g=d===Au||d===wu,_=d===Is||d===Ua;if(g||_){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Og(i)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return g&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new Og(i)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,d){return d===Au?f.mapping=Is:d===wu&&(f.mapping=Ua),f}function l(f){let d=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&d++;return d===g}function c(f){const d=f.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function FP(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&kh("WebGLRenderer: "+n+" extension not supported."),r}}}function OP(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(g===void 0)return;if(d!==null){const x=d.array;_=d.version;for(let M=0,y=x.length;M<y;M+=3){const A=x[M+0],b=x[M+1],w=x[M+2];f.push(A,b,b,w,w,A)}}else{const x=g.array;_=g.version;for(let M=0,y=x.length/3-1;M<y;M+=3){const A=M+0,b=M+1,w=M+2;f.push(A,b,b,w,w,A)}}const p=new(g.count>=65535?Pv:Rv)(f,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function BP(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*a),t.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*a,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];t.update(_,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function kP(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:pt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function VP(i,e,t){const n=new WeakMap,r=new Yt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let T=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let y=o.attributes.position.count*M,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*A*4*h),w=new Av(b,y,A,h);w.type=Ji,w.needsUpdate=!0;const v=M*4;for(let C=0;C<h;C++){const P=p[C],N=m[C],G=x[C],V=y*A*4*C;for(let I=0;I<P.count;I++){const F=I*v;d===!0&&(r.fromBufferAttribute(P,I),b[V+F+0]=r.x,b[V+F+1]=r.y,b[V+F+2]=r.z,b[V+F+3]=0),g===!0&&(r.fromBufferAttribute(N,I),b[V+F+4]=r.x,b[V+F+5]=r.y,b[V+F+6]=r.z,b[V+F+7]=0),_===!0&&(r.fromBufferAttribute(G,I),b[V+F+8]=r.x,b[V+F+9]=r.y,b[V+F+10]=r.z,b[V+F+11]=G.itemSize===4?r.w:1)}}f={count:h,texture:w,size:new St(y,A)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function zP(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const GP={[uv]:"LINEAR_TONE_MAPPING",[fv]:"REINHARD_TONE_MAPPING",[hv]:"CINEON_TONE_MAPPING",[dv]:"ACES_FILMIC_TONE_MAPPING",[mv]:"AGX_TONE_MAPPING",[gv]:"NEUTRAL_TONE_MAPPING",[pv]:"CUSTOM_TONE_MAPPING"};function HP(i,e,t,n,r){const s=new ir(e,t,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new Fa(e,t):void 0}),a=new ir(e,t,{type:Ar,depthBuffer:!1,stencilBuffer:!1}),o=new Ci;o.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ai([0,2,0,0,2,0],2));const l=new Fw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new zi(o,l),u=new Bv(-1,1,1,-1,0,1);let h=null,f=null,d=!1,g,_=null,p=[],m=!1;this.setSize=function(x,M){s.setSize(x,M),a.setSize(x,M);for(let y=0;y<p.length;y++){const A=p[y];A.setSize&&A.setSize(x,M)}},this.setEffects=function(x){p=x,m=p.length>0&&p[0].isRenderPass===!0;const M=s.width,y=s.height;for(let A=0;A<p.length;A++){const b=p[A];b.setSize&&b.setSize(M,y)}},this.begin=function(x,M){if(d||x.toneMapping===nr&&p.length===0)return!1;if(_=M,M!==null){const y=M.width,A=M.height;(s.width!==y||s.height!==A)&&this.setSize(y,A)}return m===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=nr,!0},this.hasRenderPass=function(){return m},this.end=function(x,M){x.toneMapping=g,d=!0;let y=s,A=a;for(let b=0;b<p.length;b++){const w=p[b];if(w.enabled!==!1&&(w.render(x,A,y,M),w.needsSwap!==!1)){const v=y;y=A,A=v}}if(h!==x.outputColorSpace||f!==x.toneMapping){h=x.outputColorSpace,f=x.toneMapping,l.defines={},ut.getTransfer(h)===xt&&(l.defines.SRGB_TRANSFER="");const b=GP[f];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(_),x.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Gv=new Dn,Gh=new Fa(1,1),Hv=new Av,Wv=new fw,Xv=new Iv,zg=[],Gg=[],Hg=new Float32Array(16),Wg=new Float32Array(9),Xg=new Float32Array(4);function Ha(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=zg[r];if(s===void 0&&(s=new Float32Array(r),zg[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function eu(i,e){let t=Gg[e];t===void 0&&(t=new Int32Array(e),Gg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function WP(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function XP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function jP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function YP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function qP(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Xg.set(n),i.uniformMatrix2fv(this.addr,!1,Xg),ln(t,n)}}function $P(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Wg.set(n),i.uniformMatrix3fv(this.addr,!1,Wg),ln(t,n)}}function KP(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Hg.set(n),i.uniformMatrix4fv(this.addr,!1,Hg),ln(t,n)}}function ZP(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function JP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function QP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function eD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function tD(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function iD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function rD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function sD(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Gh.compareFunction=t.isReversedDepthBuffer()?rp:ip,s=Gh):s=Gv,t.setTexture2D(e||s,r)}function aD(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wv,r)}function oD(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xv,r)}function lD(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hv,r)}function cD(i){switch(i){case 5126:return WP;case 35664:return XP;case 35665:return jP;case 35666:return YP;case 35674:return qP;case 35675:return $P;case 35676:return KP;case 5124:case 35670:return ZP;case 35667:case 35671:return JP;case 35668:case 35672:return QP;case 35669:case 35673:return eD;case 5125:return tD;case 36294:return nD;case 36295:return iD;case 36296:return rD;case 35678:case 36198:case 36298:case 36306:case 35682:return sD;case 35679:case 36299:case 36307:return aD;case 35680:case 36300:case 36308:case 36293:return oD;case 36289:case 36303:case 36311:case 36292:return lD}}function uD(i,e){i.uniform1fv(this.addr,e)}function fD(i,e){const t=Ha(e,this.size,2);i.uniform2fv(this.addr,t)}function hD(i,e){const t=Ha(e,this.size,3);i.uniform3fv(this.addr,t)}function dD(i,e){const t=Ha(e,this.size,4);i.uniform4fv(this.addr,t)}function pD(i,e){const t=Ha(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mD(i,e){const t=Ha(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gD(i,e){const t=Ha(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _D(i,e){i.uniform1iv(this.addr,e)}function xD(i,e){i.uniform2iv(this.addr,e)}function vD(i,e){i.uniform3iv(this.addr,e)}function yD(i,e){i.uniform4iv(this.addr,e)}function SD(i,e){i.uniform1uiv(this.addr,e)}function MD(i,e){i.uniform2uiv(this.addr,e)}function TD(i,e){i.uniform3uiv(this.addr,e)}function bD(i,e){i.uniform4uiv(this.addr,e)}function ED(i,e,t){const n=this.cache,r=e.length,s=eu(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Gh:a=Gv;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function AD(i,e,t){const n=this.cache,r=e.length,s=eu(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wv,s[a])}function wD(i,e,t){const n=this.cache,r=e.length,s=eu(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Xv,s[a])}function CD(i,e,t){const n=this.cache,r=e.length,s=eu(t,r);on(n,s)||(i.uniform1iv(this.addr,s),ln(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Hv,s[a])}function RD(i){switch(i){case 5126:return uD;case 35664:return fD;case 35665:return hD;case 35666:return dD;case 35674:return pD;case 35675:return mD;case 35676:return gD;case 5124:case 35670:return _D;case 35667:case 35671:return xD;case 35668:case 35672:return vD;case 35669:case 35673:return yD;case 5125:return SD;case 36294:return MD;case 36295:return TD;case 36296:return bD;case 35678:case 36198:case 36298:case 36306:case 35682:return ED;case 35679:case 36299:case 36307:return AD;case 35680:case 36300:case 36308:case 36293:return wD;case 36289:case 36303:case 36311:case 36292:return CD}}class PD{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cD(t.type)}}class DD{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RD(t.type)}}class LD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const rf=/(\w+)(\])?(\[|\.)?/g;function jg(i,e){i.seq.push(e),i.map[e.id]=e}function ND(i,e,t){const n=i.name,r=n.length;for(rf.lastIndex=0;;){const s=rf.exec(n),a=rf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){jg(t,c===void 0?new PD(o,i,e):new DD(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new LD(o),jg(t,h)),t=h}}}class ac{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ND(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Yg(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ID=37297;let UD=0;function FD(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const qg=new $e;function OD(i){ut._getMatrix(qg,ut.workingColorSpace,i);const e=`mat3( ${qg.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case Nc:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $g(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+FD(i.getShaderSource(e),o)}else return s}function BD(i,e){const t=OD(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const kD={[uv]:"Linear",[fv]:"Reinhard",[hv]:"Cineon",[dv]:"ACESFilmic",[mv]:"AgX",[gv]:"Neutral",[pv]:"Custom"};function VD(i,e){const t=kD[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rl=new X;function zD(){ut.getLuminanceCoefficients(Rl);const i=Rl.x.toFixed(4),e=Rl.y.toFixed(4),t=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GD(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function HD(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function WD(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function so(i){return i!==""}function Kg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(i){return i.replace(XD,YD)}const jD=new Map;function YD(i,e){let t=et[e];if(t===void 0){const n=jD.get(e);if(n!==void 0)t=et[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hh(t)}const qD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jg(i){return i.replace(qD,$D)}function $D(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const KD={[tc]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function ZD(i){return KD[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JD={[Is]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE",[Kc]:"ENVMAP_TYPE_CUBE_UV"};function QD(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":JD[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const e2={[Ua]:"ENVMAP_MODE_REFRACTION"};function t2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":e2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const n2={[cv]:"ENVMAP_BLENDING_MULTIPLY",[WA]:"ENVMAP_BLENDING_MIX",[XA]:"ENVMAP_BLENDING_ADD"};function i2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":n2[i.combine]||"ENVMAP_BLENDING_NONE"}function r2(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function s2(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ZD(t),c=QD(t),u=t2(t),h=i2(t),f=r2(t),d=GD(t),g=HD(s),_=r.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),m.length>0&&(m+=`
`)):(p=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),m=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?et.tonemapping_pars_fragment:"",t.toneMapping!==nr?VD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,BD("linearToOutputTexel",t.outputColorSpace),zD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),a=Hh(a),a=Kg(a,t),a=Zg(a,t),o=Hh(o),o=Kg(o,t),o=Zg(o,t),a=Jg(a),o=Jg(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=x+p+a,y=x+m+o,A=Yg(r,r.VERTEX_SHADER,M),b=Yg(r,r.FRAGMENT_SHADER,y);r.attachShader(_,A),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(A)||"",V=r.getShaderInfoLog(b)||"",I=N.trim(),F=G.trim(),O=V.trim();let q=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,b);else{const D=$g(r,A,"vertex"),le=$g(r,b,"fragment");pt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+D+`
`+le)}else I!==""?We("WebGLProgram: Program Info Log:",I):(F===""||O==="")&&(K=!1);K&&(P.diagnostics={runnable:q,programLog:I,vertexShader:{log:F,prefix:p},fragmentShader:{log:O,prefix:m}})}r.deleteShader(A),r.deleteShader(b),v=new ac(r,_),T=WD(r,_)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(_,ID)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UD++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let a2=0;class o2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new l2(e),t.set(e,n)),n}}class l2{constructor(e){this.id=a2++,this.code=e,this.usedTimes=0}}function c2(i){return i===Us||i===Pc||i===Dc}function u2(i,e,t,n,r,s){const a=new wv,o=new o2,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,C,P,N,G){const V=P.fog,I=N.geometry,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,q=e.get(v.envMap||F,O),K=q&&q.mapping===Kc?q.image.height:null,D=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const le=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Te=le!==void 0?le.length:0;let Ye=0;I.morphAttributes.position!==void 0&&(Ye=1),I.morphAttributes.normal!==void 0&&(Ye=2),I.morphAttributes.color!==void 0&&(Ye=3);let Ve,Ie,Q,ce;if(D){const he=$i[D];Ve=he.vertexShader,Ie=he.fragmentShader}else Ve=v.vertexShader,Ie=v.fragmentShader,o.update(v),Q=o.getVertexShaderID(v),ce=o.getFragmentShaderID(v);const ae=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),ke=N.isInstancedMesh===!0,Pe=N.isBatchedMesh===!0,tt=!!v.map,Ae=!!v.matcap,Ge=!!q,Qe=!!v.aoMap,ze=!!v.lightMap,j=!!v.bumpMap,lt=!!v.normalMap,Ut=!!v.displacementMap,B=!!v.emissiveMap,Ke=!!v.metalnessMap,je=!!v.roughnessMap,ct=v.anisotropy>0,ge=v.clearcoat>0,Je=v.dispersion>0,R=v.iridescence>0,S=v.sheen>0,z=v.transmission>0,Z=ct&&!!v.anisotropyMap,te=ge&&!!v.clearcoatMap,de=ge&&!!v.clearcoatNormalMap,ie=ge&&!!v.clearcoatRoughnessMap,$=R&&!!v.iridescenceMap,ee=R&&!!v.iridescenceThicknessMap,xe=S&&!!v.sheenColorMap,Ee=S&&!!v.sheenRoughnessMap,pe=!!v.specularMap,ue=!!v.specularColorMap,_e=!!v.specularIntensityMap,He=z&&!!v.transmissionMap,qe=z&&!!v.thicknessMap,U=!!v.gradientMap,oe=!!v.alphaMap,J=v.alphaTest>0,ye=!!v.alphaHash,fe=!!v.extensions;let ne=nr;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ne=i.toneMapping);const se={shaderID:D,shaderType:v.type,shaderName:v.name,vertexShader:Ve,fragmentShader:Ie,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&N._colorsTexture!==null,instancing:ke,instancingColor:ke&&N.instanceColor!==null,instancingMorph:ke&&N.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:Ae,envMap:Ge,envMapMode:Ge&&q.mapping,envMapCubeUVHeight:K,aoMap:Qe,lightMap:ze,bumpMap:j,normalMap:lt,displacementMap:Ut,emissiveMap:B,normalMapObjectSpace:lt&&v.normalMapType===qA,normalMapTangentSpace:lt&&v.normalMapType===lg,packedNormalMap:lt&&v.normalMapType===lg&&c2(v.normalMap.format),metalnessMap:Ke,roughnessMap:je,anisotropy:ct,anisotropyMap:Z,clearcoat:ge,clearcoatMap:te,clearcoatNormalMap:de,clearcoatRoughnessMap:ie,dispersion:Je,iridescence:R,iridescenceMap:$,iridescenceThicknessMap:ee,sheen:S,sheenColorMap:xe,sheenRoughnessMap:Ee,specularMap:pe,specularColorMap:ue,specularIntensityMap:_e,transmission:z,transmissionMap:He,thicknessMap:qe,gradientMap:U,opaque:v.transparent===!1&&v.blending===Sa&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:J,alphaHash:ye,combine:v.combine,mapUv:tt&&g(v.map.channel),aoMapUv:Qe&&g(v.aoMap.channel),lightMapUv:ze&&g(v.lightMap.channel),bumpMapUv:j&&g(v.bumpMap.channel),normalMapUv:lt&&g(v.normalMap.channel),displacementMapUv:Ut&&g(v.displacementMap.channel),emissiveMapUv:B&&g(v.emissiveMap.channel),metalnessMapUv:Ke&&g(v.metalnessMap.channel),roughnessMapUv:je&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:te&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(v.sheenRoughnessMap.channel),specularMapUv:pe&&g(v.specularMap.channel),specularColorMapUv:ue&&g(v.specularColorMap.channel),specularIntensityMapUv:_e&&g(v.specularIntensityMap.channel),transmissionMapUv:He&&g(v.transmissionMap.channel),thicknessMapUv:qe&&g(v.thicknessMap.channel),alphaMapUv:oe&&g(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(lt||ct),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(tt||oe),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ce,skinning:N.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ye,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:B&&v.emissiveMap.isVideoTexture===!0&&ut.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_r,flipSided:v.side===qn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:fe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&v.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)T.push(C),T.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(T,v),x(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function x(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function M(v){const T=d[v.type];let C;if(T){const P=$i[T];C=Nw.clone(P.uniforms)}else C=v.uniforms;return C}function y(v,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new s2(i,T,v,r),c.push(C),u.set(T,C)),C}function A(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:w}}function f2(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function h2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function e_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function t_(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,_,p,m){let x=i[e];return x===void 0?(x={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},i[e]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=g,x.materialVariant=a(f),x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=p,x.group=m),e++,x}function l(f,d,g,_,p,m){const x=o(f,d,g,_,p,m);g.transmission>0?n.push(x):g.transparent===!0?r.push(x):t.push(x)}function c(f,d,g,_,p,m){const x=o(f,d,g,_,p,m);g.transmission>0?n.unshift(x):g.transparent===!0?r.unshift(x):t.unshift(x)}function u(f,d){t.length>1&&t.sort(f||h2),n.length>1&&n.sort(d||e_),r.length>1&&r.sort(d||e_)}function h(){for(let f=e,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function d2(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new t_,i.set(n,[a])):r>=s.length?(a=new t_,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function p2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new vt};break;case"SpotLight":t={position:new X,direction:new X,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function m2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let g2=0;function _2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function x2(i){const e=new p2,t=m2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const r=new X,s=new tn,a=new tn;function o(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,x=0,M=0,y=0,A=0,b=0,w=0;c.sort(_2);for(let T=0,C=c.length;T<C;T++){const P=c[T],N=P.color,G=P.intensity,V=P.distance;let I=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Us?I=P.shadow.map.texture:I=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=N.r*G,h+=N.g*G,f+=N.b*G;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],G);w++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,q=t.get(P);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=I,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=F,d++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(N).multiplyScalar(G),F.distance=V,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[_]=F;const O=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,O.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[_]=O.matrix,P.castShadow){const q=t.get(P);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=I,y++}_++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(N).multiplyScalar(G),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=F,p++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const O=P.shadow,q=t.get(P);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,q.shadowCameraNear=O.camera.near,q.shadowCameraFar=O.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=F,g++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(G),F.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[m]=F,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==d||v.pointLength!==g||v.spotLength!==_||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==x||v.numPointShadows!==M||v.numSpotShadows!==y||v.numSpotMaps!==A||v.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,v.directionalLength=d,v.pointLength=g,v.spotLength=_,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=x,v.numPointShadows=M,v.numSpotShadows=y,v.numSpotMaps=A,v.numLightProbes=w,n.version=g2++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const M=c[m];if(M.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),h++}else if(M.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function n_(i){const e=new x2(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function v2(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new n_(i),e.set(r,[o])):s>=a.length?(o=new n_(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,M2=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],T2=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],i_=new tn,Ja=new X,sf=new X;function b2(i,e,t){let n=new Lv;const r=new St,s=new St,a=new Yt,o=new Ow,l=new Bw,c={},u=t.maxTextureSize,h={[ts]:qn,[qn]:ts,[_r]:_r},f=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:y2,fragmentShader:S2}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ci;g.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zi(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let m=this.type;this.render=function(b,w,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===EA&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tc);const T=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Sr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const G=m!==this.type;G&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(I=>I.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,I=b.length;V<I;V++){const F=b[V],O=F.shadow;if(O===void 0){We("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const q=O.getFrameExtents();r.multiply(q),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,O.mapSize.y=s.y));const K=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=K,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ro){if(F.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ir(r.x,r.y,{format:Us,type:Ar,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new Fa(r.x,r.y,Ji),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=wr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=xn,O.map.depthTexture.magFilter=xn}else F.isPointLight?(O.map=new zv(r.x),O.map.depthTexture=new Dw(r.x,or)):(O.map=new ir(r.x,r.y),O.map.depthTexture=new Fa(r.x,r.y,or)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=wr,this.type===tc?(O.map.depthTexture.compareFunction=K?rp:ip,O.map.depthTexture.minFilter=Rn,O.map.depthTexture.magFilter=Rn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=xn,O.map.depthTexture.magFilter=xn);O.camera.updateProjectionMatrix()}const D=O.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<D;le++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,le),i.clear();else{le===0&&(i.setRenderTarget(O.map),i.clear());const Te=O.getViewport(le);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),N.viewport(a)}if(F.isPointLight){const Te=O.camera,Ye=O.matrix,Ve=F.distance||Te.far;Ve!==Te.far&&(Te.far=Ve,Te.updateProjectionMatrix()),Ja.setFromMatrixPosition(F.matrixWorld),Te.position.copy(Ja),sf.copy(Te.position),sf.add(M2[le]),Te.up.copy(T2[le]),Te.lookAt(sf),Te.updateMatrixWorld(),Ye.makeTranslation(-Ja.x,-Ja.y,-Ja.z),i_.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),O._frustum.setFromProjectionMatrix(i_,Te.coordinateSystem,Te.reversedDepth)}else O.updateMatrices(F);n=O.getFrustum(),y(w,v,O.camera,F,this.type)}O.isPointLightShadow!==!0&&this.type===ro&&x(O,v),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,C,P)};function x(b,w){const v=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ir(r.x,r.y,{format:Us,type:Ar})),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,v,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,v,d,_,null)}function M(b,w,v,T){let C=null;const P=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)C=P;else if(C=v.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=C.uuid,G=w.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let I=V[G];I===void 0&&(I=C.clone(),V[G]=I,w.addEventListener("dispose",A)),C=I}if(C.visible=w.visible,C.wireframe=w.wireframe,T===ro?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:h[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=i.properties.get(C);N.light=v}return C}function y(b,w,v,T,C){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===ro)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const G=e.update(b),V=b.material;if(Array.isArray(V)){const I=G.groups;for(let F=0,O=I.length;F<O;F++){const q=I[F],K=V[q.materialIndex];if(K&&K.visible){const D=M(b,K,T,C);b.onBeforeShadow(i,b,w,v,G,D,q),i.renderBufferDirect(v,null,G,D,b,q),b.onAfterShadow(i,b,w,v,G,D,q)}}}else if(V.visible){const I=M(b,V,T,C);b.onBeforeShadow(i,b,w,v,G,I,null),i.renderBufferDirect(v,null,G,I,b,null),b.onAfterShadow(i,b,w,v,G,I,null)}}const N=b.children;for(let G=0,V=N.length;G<V;G++)y(N[G],w,v,T,C)}function A(b){b.target.removeEventListener("dispose",A);for(const v in c){const T=c[v],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function E2(i,e){function t(){let U=!1;const oe=new Yt;let J=null;const ye=new Yt(0,0,0,0);return{setMask:function(fe){J!==fe&&!U&&(i.colorMask(fe,fe,fe,fe),J=fe)},setLocked:function(fe){U=fe},setClear:function(fe,ne,se,he,Oe){Oe===!0&&(fe*=he,ne*=he,se*=he),oe.set(fe,ne,se,he),ye.equals(oe)===!1&&(i.clearColor(fe,ne,se,he),ye.copy(oe))},reset:function(){U=!1,J=null,ye.set(-1,0,0,0)}}}function n(){let U=!1,oe=!1,J=null,ye=null,fe=null;return{setReversed:function(ne){if(oe!==ne){const se=e.get("EXT_clip_control");ne?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),oe=ne;const he=fe;fe=null,this.setClear(he)}},getReversed:function(){return oe},setTest:function(ne){ne?ae(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(ne){J!==ne&&!U&&(i.depthMask(ne),J=ne)},setFunc:function(ne){if(oe&&(ne=rw[ne]),ye!==ne){switch(ne){case eh:i.depthFunc(i.NEVER);break;case th:i.depthFunc(i.ALWAYS);break;case nh:i.depthFunc(i.LESS);break;case Ia:i.depthFunc(i.LEQUAL);break;case ih:i.depthFunc(i.EQUAL);break;case rh:i.depthFunc(i.GEQUAL);break;case sh:i.depthFunc(i.GREATER);break;case ah:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=ne}},setLocked:function(ne){U=ne},setClear:function(ne){fe!==ne&&(fe=ne,oe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){U=!1,J=null,ye=null,fe=null,oe=!1}}}function r(){let U=!1,oe=null,J=null,ye=null,fe=null,ne=null,se=null,he=null,Oe=null;return{setTest:function(re){U||(re?ae(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(re){oe!==re&&!U&&(i.stencilMask(re),oe=re)},setFunc:function(re,Be,Le){(J!==re||ye!==Be||fe!==Le)&&(i.stencilFunc(re,Be,Le),J=re,ye=Be,fe=Le)},setOp:function(re,Be,Le){(ne!==re||se!==Be||he!==Le)&&(i.stencilOp(re,Be,Le),ne=re,se=Be,he=Le)},setLocked:function(re){U=re},setClear:function(re){Oe!==re&&(i.clearStencil(re),Oe=re)},reset:function(){U=!1,oe=null,J=null,ye=null,fe=null,ne=null,se=null,he=null,Oe=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f={},d=new WeakMap,g=[],_=null,p=!1,m=null,x=null,M=null,y=null,A=null,b=null,w=null,v=new vt(0,0,0),T=0,C=!1,P=null,N=null,G=null,V=null,I=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,q=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),O=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),O=q>=2);let D=null,le={};const Te=i.getParameter(i.SCISSOR_BOX),Ye=i.getParameter(i.VIEWPORT),Ve=new Yt().fromArray(Te),Ie=new Yt().fromArray(Ye);function Q(U,oe,J,ye){const fe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(U,ne),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<J;se++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(oe+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ne}const ce={};ce[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Ia),j(!1),lt(sg),ae(i.CULL_FACE),Qe(Sr);function ae(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Ce(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function ke(U,oe){return f[U]!==oe?(i.bindFramebuffer(U,oe),f[U]=oe,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=oe),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Pe(U,oe){let J=g,ye=!1;if(U){J=d.get(oe),J===void 0&&(J=[],d.set(oe,J));const fe=U.textures;if(J.length!==fe.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,se=fe.length;ne<se;ne++)J[ne]=i.COLOR_ATTACHMENT0+ne;J.length=fe.length,ye=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ye=!0);ye&&i.drawBuffers(J)}function tt(U){return _!==U?(i.useProgram(U),_=U,!0):!1}const Ae={[_s]:i.FUNC_ADD,[wA]:i.FUNC_SUBTRACT,[CA]:i.FUNC_REVERSE_SUBTRACT};Ae[RA]=i.MIN,Ae[PA]=i.MAX;const Ge={[DA]:i.ZERO,[LA]:i.ONE,[NA]:i.SRC_COLOR,[Jf]:i.SRC_ALPHA,[kA]:i.SRC_ALPHA_SATURATE,[OA]:i.DST_COLOR,[UA]:i.DST_ALPHA,[IA]:i.ONE_MINUS_SRC_COLOR,[Qf]:i.ONE_MINUS_SRC_ALPHA,[BA]:i.ONE_MINUS_DST_COLOR,[FA]:i.ONE_MINUS_DST_ALPHA,[VA]:i.CONSTANT_COLOR,[zA]:i.ONE_MINUS_CONSTANT_COLOR,[GA]:i.CONSTANT_ALPHA,[HA]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(U,oe,J,ye,fe,ne,se,he,Oe,re){if(U===Sr){p===!0&&(Ce(i.BLEND),p=!1);return}if(p===!1&&(ae(i.BLEND),p=!0),U!==AA){if(U!==m||re!==C){if((x!==_s||A!==_s)&&(i.blendEquation(i.FUNC_ADD),x=_s,A=_s),re)switch(U){case Sa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rc:i.blendFunc(i.ONE,i.ONE);break;case ag:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case og:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",U);break}else switch(U){case Sa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ag:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case og:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",U);break}M=null,y=null,b=null,w=null,v.set(0,0,0),T=0,m=U,C=re}return}fe=fe||oe,ne=ne||J,se=se||ye,(oe!==x||fe!==A)&&(i.blendEquationSeparate(Ae[oe],Ae[fe]),x=oe,A=fe),(J!==M||ye!==y||ne!==b||se!==w)&&(i.blendFuncSeparate(Ge[J],Ge[ye],Ge[ne],Ge[se]),M=J,y=ye,b=ne,w=se),(he.equals(v)===!1||Oe!==T)&&(i.blendColor(he.r,he.g,he.b,Oe),v.copy(he),T=Oe),m=U,C=!1}function ze(U,oe){U.side===_r?Ce(i.CULL_FACE):ae(i.CULL_FACE);let J=U.side===qn;oe&&(J=!J),j(J),U.blending===Sa&&U.transparent===!1?Qe(Sr):Qe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ye=U.stencilWrite;o.setTest(ye),ye&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),B(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(U){P!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),P=U)}function lt(U){U!==TA?(ae(i.CULL_FACE),U!==N&&(U===sg?i.cullFace(i.BACK):U===bA?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),N=U}function Ut(U){U!==G&&(O&&i.lineWidth(U),G=U)}function B(U,oe,J){U?(ae(i.POLYGON_OFFSET_FILL),(V!==oe||I!==J)&&(V=oe,I=J,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,J))):Ce(i.POLYGON_OFFSET_FILL)}function Ke(U){U?ae(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function je(U){U===void 0&&(U=i.TEXTURE0+F-1),D!==U&&(i.activeTexture(U),D=U)}function ct(U,oe,J){J===void 0&&(D===null?J=i.TEXTURE0+F-1:J=D);let ye=le[J];ye===void 0&&(ye={type:void 0,texture:void 0},le[J]=ye),(ye.type!==U||ye.texture!==oe)&&(D!==J&&(i.activeTexture(J),D=J),i.bindTexture(U,oe||ce[U]),ye.type=U,ye.texture=oe)}function ge(){const U=le[D];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(U){pt("WebGLState:",U)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(U){pt("WebGLState:",U)}}function S(){try{i.texSubImage2D(...arguments)}catch(U){pt("WebGLState:",U)}}function z(){try{i.texSubImage3D(...arguments)}catch(U){pt("WebGLState:",U)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(U){pt("WebGLState:",U)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(U){pt("WebGLState:",U)}}function de(){try{i.texStorage2D(...arguments)}catch(U){pt("WebGLState:",U)}}function ie(){try{i.texStorage3D(...arguments)}catch(U){pt("WebGLState:",U)}}function $(){try{i.texImage2D(...arguments)}catch(U){pt("WebGLState:",U)}}function ee(){try{i.texImage3D(...arguments)}catch(U){pt("WebGLState:",U)}}function xe(U){return h[U]!==void 0?h[U]:i.getParameter(U)}function Ee(U,oe){h[U]!==oe&&(i.pixelStorei(U,oe),h[U]=oe)}function pe(U){Ve.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ve.copy(U))}function ue(U){Ie.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ie.copy(U))}function _e(U,oe){let J=c.get(oe);J===void 0&&(J=new WeakMap,c.set(oe,J));let ye=J.get(U);ye===void 0&&(ye=i.getUniformBlockIndex(oe,U.name),J.set(U,ye))}function He(U,oe){const ye=c.get(oe).get(U);l.get(oe)!==ye&&(i.uniformBlockBinding(oe,ye,U.__bindingPointIndex),l.set(oe,ye))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},D=null,le={},f={},d=new WeakMap,g=[],_=null,p=!1,m=null,x=null,M=null,y=null,A=null,b=null,w=null,v=new vt(0,0,0),T=0,C=!1,P=null,N=null,G=null,V=null,I=null,Ve.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Ce,bindFramebuffer:ke,drawBuffers:Pe,useProgram:tt,setBlending:Qe,setMaterial:ze,setFlipSided:j,setCullFace:lt,setLineWidth:Ut,setPolygonOffset:B,setScissorTest:Ke,activeTexture:je,bindTexture:ct,unbindTexture:ge,compressedTexImage2D:Je,compressedTexImage3D:R,texImage2D:$,texImage3D:ee,pixelStorei:Ee,getParameter:xe,updateUBOMapping:_e,uniformBlockBinding:He,texStorage2D:de,texStorage3D:ie,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:pe,viewport:ue,reset:qe}}function A2(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,u=new WeakMap,h=new Set;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return g?new OffscreenCanvas(R,S):Uc("canvas")}function p(R,S,z){let Z=1;const te=Je(R);if((te.width>z||te.height>z)&&(Z=z/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const de=Math.floor(Z*te.width),ie=Math.floor(Z*te.height);f===void 0&&(f=_(de,ie));const $=S?_(de,ie):f;return $.width=de,$.height=ie,$.getContext("2d").drawImage(R,0,0,de,ie),We("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+de+"x"+ie+")."),$}else return"data"in R&&We("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps}function x(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,S,z,Z,te,de=!1){if(R!==null){if(i[R]!==void 0)return i[R];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie;Z&&(ie=e.get("EXT_texture_norm16"),ie||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8),z===i.UNSIGNED_SHORT&&ie&&($=ie.R16_EXT),z===i.SHORT&&ie&&($=ie.R16_SNORM_EXT)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),S===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8),z===i.UNSIGNED_SHORT&&ie&&($=ie.RG16_EXT),z===i.SHORT&&ie&&($=ie.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),S===i.RGB&&(z===i.UNSIGNED_SHORT&&ie&&($=ie.RGB16_EXT),z===i.SHORT&&ie&&($=ie.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){const ee=de?Nc:ut.getTransfer(te);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=ee===xt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ie&&($=ie.RGBA16_EXT),z===i.SHORT&&ie&&($=ie.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function A(R,S){let z;return R?S===null||S===or||S===zo?z=i.DEPTH24_STENCIL8:S===Ji?z=i.DEPTH32F_STENCIL8:S===Vo&&(z=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===or||S===zo?z=i.DEPTH_COMPONENT24:S===Ji?z=i.DEPTH_COMPONENT32F:S===Vo&&(z=i.DEPTH_COMPONENT16),z}function b(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==xn&&R.minFilter!==Rn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){const S=R.target;S.removeEventListener("dispose",w),T(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&h.delete(S)}function v(R){const S=R.target;S.removeEventListener("dispose",v),P(S)}function T(R){const S=n.get(R);if(S.__webglInit===void 0)return;const z=R.source,Z=d.get(z);if(Z){const te=Z[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(R),Object.keys(Z).length===0&&d.delete(z)}n.remove(R)}function C(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const z=R.source,Z=d.get(z);delete Z[S.__cacheKey],a.memory.textures--}function P(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let te=0;te<S.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(S.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let Z=0,te=z.length;Z<te;Z++){const de=n.get(z[Z]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(z[Z])}n.remove(R)}let N=0;function G(){N=0}function V(){return N}function I(R){N=R}function F(){const R=N;return R>=r.maxTextures&&We("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function O(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function q(R,S){const z=n.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const Z=R.image;if(Z===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(z,R,S);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function K(R,S){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Ce(z,R,S);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function D(R,S){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Ce(z,R,S);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function le(R,S){const z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){ke(z,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const Te={[oh]:i.REPEAT,[vr]:i.CLAMP_TO_EDGE,[lh]:i.MIRRORED_REPEAT},Ye={[xn]:i.NEAREST,[jA]:i.NEAREST_MIPMAP_NEAREST,[sl]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Cu]:i.LINEAR_MIPMAP_NEAREST,[Ms]:i.LINEAR_MIPMAP_LINEAR},Ve={[$A]:i.NEVER,[ew]:i.ALWAYS,[KA]:i.LESS,[ip]:i.LEQUAL,[ZA]:i.EQUAL,[rp]:i.GEQUAL,[JA]:i.GREATER,[QA]:i.NOTEQUAL};function Ie(R,S){if(S.type===Ji&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Rn||S.magFilter===Cu||S.magFilter===sl||S.magFilter===Ms||S.minFilter===Rn||S.minFilter===Cu||S.minFilter===sl||S.minFilter===Ms)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Te[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Te[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Te[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ye[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ye[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==sl&&S.minFilter!==Ms||S.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Q(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));const Z=S.source;let te=d.get(Z);te===void 0&&(te={},d.set(Z,te));const de=O(S);if(de!==R.__cacheKey){te[de]===void 0&&(te[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),te[de].usedTimes++;const ie=te[R.__cacheKey];ie!==void 0&&(te[R.__cacheKey].usedTimes--,ie.usedTimes===0&&C(S)),R.__cacheKey=de,R.__webglTexture=te[de].texture}return z}function ce(R,S,z){return Math.floor(Math.floor(R/z)/S)}function ae(R,S,z,Z){const de=R.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,z,Z,S.data);else{de.sort((Ee,pe)=>Ee.start-pe.start);let ie=0;for(let Ee=1;Ee<de.length;Ee++){const pe=de[ie],ue=de[Ee],_e=pe.start+pe.count,He=ce(ue.start,S.width,4),qe=ce(pe.start,S.width,4);ue.start<=_e+1&&He===qe&&ce(ue.start+ue.count-1,S.width,4)===He?pe.count=Math.max(pe.count,ue.start+ue.count-pe.start):(++ie,de[ie]=ue)}de.length=ie+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Ee=0,pe=de.length;Ee<pe;Ee++){const ue=de[Ee],_e=Math.floor(ue.start/4),He=Math.ceil(ue.count/4),qe=_e%S.width,U=Math.floor(_e/S.width),oe=He,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,qe,U,oe,J,z,Z,S.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function Ce(R,S,z){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const te=Q(R,S),de=S.source;t.bindTexture(Z,R.__webglTexture,i.TEXTURE0+z);const ie=n.get(de);if(de.version!==ie.__version||te===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const J=ut.getPrimaries(ut.workingColorSpace),ye=S.colorSpace===kr?null:ut.getPrimaries(S.colorSpace),fe=S.colorSpace===kr||J===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ee=p(S.image,!1,r.maxTextureSize);ee=ge(S,ee);const xe=s.convert(S.format,S.colorSpace),Ee=s.convert(S.type);let pe=y(S.internalFormat,xe,Ee,S.normalized,S.colorSpace,S.isVideoTexture);Ie(Z,S);let ue;const _e=S.mipmaps,He=S.isVideoTexture!==!0,qe=ie.__version===void 0||te===!0,U=de.dataReady,oe=b(S,ee);if(S.isDepthTexture)pe=A(S.format===Ts,S.type),qe&&(He?t.texStorage2D(i.TEXTURE_2D,1,pe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,pe,ee.width,ee.height,0,xe,Ee,null));else if(S.isDataTexture)if(_e.length>0){He&&qe&&t.texStorage2D(i.TEXTURE_2D,oe,pe,_e[0].width,_e[0].height);for(let J=0,ye=_e.length;J<ye;J++)ue=_e[J],He?U&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ue.width,ue.height,xe,Ee,ue.data):t.texImage2D(i.TEXTURE_2D,J,pe,ue.width,ue.height,0,xe,Ee,ue.data);S.generateMipmaps=!1}else He?(qe&&t.texStorage2D(i.TEXTURE_2D,oe,pe,ee.width,ee.height),U&&ae(S,ee,xe,Ee)):t.texImage2D(i.TEXTURE_2D,0,pe,ee.width,ee.height,0,xe,Ee,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,pe,_e[0].width,_e[0].height,ee.depth);for(let J=0,ye=_e.length;J<ye;J++)if(ue=_e[J],S.format!==Oi)if(xe!==null)if(He){if(U)if(S.layerUpdates.size>0){const fe=Ig(ue.width,ue.height,S.format,S.type);for(const ne of S.layerUpdates){const se=ue.data.subarray(ne*fe/ue.data.BYTES_PER_ELEMENT,(ne+1)*fe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ne,ue.width,ue.height,1,xe,se)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,ee.depth,xe,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,pe,ue.width,ue.height,ee.depth,0,ue.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,ee.depth,xe,Ee,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,pe,ue.width,ue.height,ee.depth,0,xe,Ee,ue.data)}else{He&&qe&&t.texStorage2D(i.TEXTURE_2D,oe,pe,_e[0].width,_e[0].height);for(let J=0,ye=_e.length;J<ye;J++)ue=_e[J],S.format!==Oi?xe!==null?He?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ue.width,ue.height,xe,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,J,pe,ue.width,ue.height,0,ue.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?U&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ue.width,ue.height,xe,Ee,ue.data):t.texImage2D(i.TEXTURE_2D,J,pe,ue.width,ue.height,0,xe,Ee,ue.data)}else if(S.isDataArrayTexture)if(He){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,pe,ee.width,ee.height,ee.depth),U)if(S.layerUpdates.size>0){const J=Ig(ee.width,ee.height,S.format,S.type);for(const ye of S.layerUpdates){const fe=ee.data.subarray(ye*J/ee.data.BYTES_PER_ELEMENT,(ye+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,ee.width,ee.height,1,xe,Ee,fe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,xe,Ee,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,ee.width,ee.height,ee.depth,0,xe,Ee,ee.data);else if(S.isData3DTexture)He?(qe&&t.texStorage3D(i.TEXTURE_3D,oe,pe,ee.width,ee.height,ee.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,xe,Ee,ee.data)):t.texImage3D(i.TEXTURE_3D,0,pe,ee.width,ee.height,ee.depth,0,xe,Ee,ee.data);else if(S.isFramebufferTexture){if(qe)if(He)t.texStorage2D(i.TEXTURE_2D,oe,pe,ee.width,ee.height);else{let J=ee.width,ye=ee.height;for(let fe=0;fe<oe;fe++)t.texImage2D(i.TEXTURE_2D,fe,pe,J,ye,0,xe,Ee,null),J>>=1,ye>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),h.add(S),J.onpaint=he=>{const Oe=he.changedElements;for(const re of h)Oe.includes(re.image)&&(re.needsUpdate=!0)},J.requestPaint();return}const ye=0,fe=i.RGBA,ne=i.RGBA,se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,ye,fe,ne,se,ee),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_e.length>0){if(He&&qe){const J=Je(_e[0]);t.texStorage2D(i.TEXTURE_2D,oe,pe,J.width,J.height)}for(let J=0,ye=_e.length;J<ye;J++)ue=_e[J],He?U&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,xe,Ee,ue):t.texImage2D(i.TEXTURE_2D,J,pe,xe,Ee,ue);S.generateMipmaps=!1}else if(He){if(qe){const J=Je(ee);t.texStorage2D(i.TEXTURE_2D,oe,pe,J.width,J.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ee,ee)}else t.texImage2D(i.TEXTURE_2D,0,pe,xe,Ee,ee);m(S)&&x(Z),ie.__version=de.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ke(R,S,z){if(S.image.length!==6)return;const Z=Q(R,S),te=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const de=n.get(te);if(te.version!==de.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);const ie=ut.getPrimaries(ut.workingColorSpace),$=S.colorSpace===kr?null:ut.getPrimaries(S.colorSpace),ee=S.colorSpace===kr||ie===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let ne=0;ne<6;ne++)!xe&&!Ee?pe[ne]=p(S.image[ne],!0,r.maxCubemapSize):pe[ne]=Ee?S.image[ne].image:S.image[ne],pe[ne]=ge(S,pe[ne]);const ue=pe[0],_e=s.convert(S.format,S.colorSpace),He=s.convert(S.type),qe=y(S.internalFormat,_e,He,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,oe=de.__version===void 0||Z===!0,J=te.dataReady;let ye=b(S,ue);Ie(i.TEXTURE_CUBE_MAP,S);let fe;if(xe){U&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,qe,ue.width,ue.height);for(let ne=0;ne<6;ne++){fe=pe[ne].mipmaps;for(let se=0;se<fe.length;se++){const he=fe[se];S.format!==Oi?_e!==null?U?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,0,0,he.width,he.height,_e,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,qe,he.width,he.height,0,he.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,0,0,he.width,he.height,_e,He,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,qe,he.width,he.height,0,_e,He,he.data)}}}else{if(fe=S.mipmaps,U&&oe){fe.length>0&&ye++;const ne=Je(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ee){U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,pe[ne].width,pe[ne].height,_e,He,pe[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,pe[ne].width,pe[ne].height,0,_e,He,pe[ne].data);for(let se=0;se<fe.length;se++){const Oe=fe[se].image[ne].image;U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,0,0,Oe.width,Oe.height,_e,He,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,qe,Oe.width,Oe.height,0,_e,He,Oe.data)}}else{U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,_e,He,pe[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,_e,He,pe[ne]);for(let se=0;se<fe.length;se++){const he=fe[se];U?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,0,0,_e,He,he.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,qe,_e,He,he.image[ne])}}}m(S)&&x(i.TEXTURE_CUBE_MAP),de.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Pe(R,S,z,Z,te,de){const ie=s.convert(z.format,z.colorSpace),$=s.convert(z.type),ee=y(z.internalFormat,ie,$,z.normalized,z.colorSpace),xe=n.get(S),Ee=n.get(z);if(Ee.__renderTarget=S,!xe.__hasExternalTextures){const pe=Math.max(1,S.width>>de),ue=Math.max(1,S.height>>de);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,de,ee,pe,ue,S.depth,0,ie,$,null):t.texImage2D(te,de,ee,pe,ue,0,ie,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),je(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,te,Ee.__webglTexture,0,Ke(S)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,te,Ee.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(R,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const Z=S.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,de=A(S.stencilBuffer,te),ie=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;je(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(S),de,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(S),de,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,de,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,R)}else{const Z=S.textures;for(let te=0;te<Z.length;te++){const de=Z[te],ie=s.convert(de.format,de.colorSpace),$=s.convert(de.type),ee=y(de.internalFormat,ie,$,de.normalized,de.colorSpace);je(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(S),ee,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(S),ee,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ee,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(R,S,z){const Z=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(S.depthTexture);if(te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,S.depthTexture);const xe=s.convert(S.depthTexture.format),Ee=s.convert(S.depthTexture.type);let pe;S.depthTexture.format===wr?pe=i.DEPTH_COMPONENT24:S.depthTexture.format===Ts&&(pe=i.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,pe,S.width,S.height,0,xe,Ee,null)}}else q(S.depthTexture,0);const de=te.__webglTexture,ie=Ke(S),$=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ee=S.depthTexture.format===Ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===wr)je(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,de,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,de,0);else if(S.depthTexture.format===Ts)je(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,de,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,de,0);else throw new Error("Unknown depthTexture format")}function Ge(R){const S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let Z=0;Z<6;Z++)Ae(S.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?Ae(S.__webglFramebuffer[0],R,0):Ae(S.__webglFramebuffer,R,0)}else if(z){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),tt(S.__webglDepthbuffer[Z],R,!1);else{const te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,de)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),tt(S.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(R,S,z){const Z=n.get(R);S!==void 0&&Pe(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ge(R)}function ze(R){const S=R.texture,z=n.get(R),Z=n.get(S);R.addEventListener("dispose",v);const te=R.textures,de=R.isWebGLCubeRenderTarget===!0,ie=te.length>1;if(ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,a.memory.textures++),de){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let ee=0;ee<S.mipmaps.length;ee++)z.__webglFramebuffer[$][ee]=i.createFramebuffer()}else z.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)z.__webglFramebuffer[$]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ie)for(let $=0,ee=te.length;$<ee;$++){const xe=n.get(te[$]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&je(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<te.length;$++){const ee=te[$];z.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[$]);const xe=s.convert(ee.format,ee.colorSpace),Ee=s.convert(ee.type),pe=y(ee.internalFormat,xe,Ee,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),ue=Ke(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,pe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,z.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)Pe(z.__webglFramebuffer[$][ee],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ee);else Pe(z.__webglFramebuffer[$],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(S)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let $=0,ee=te.length;$<ee;$++){const xe=te[$],Ee=n.get(xe);let pe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ee.__webglTexture),Ie(pe,xe),Pe(z.__webglFramebuffer,R,xe,i.COLOR_ATTACHMENT0+$,pe,0),m(xe)&&x(pe)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,Z.__webglTexture),Ie($,S),S.mipmaps&&S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)Pe(z.__webglFramebuffer[ee],R,S,i.COLOR_ATTACHMENT0,$,ee);else Pe(z.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,$,0);m(S)&&x($),t.unbindTexture()}R.depthBuffer&&Ge(R)}function j(R){const S=R.textures;for(let z=0,Z=S.length;z<Z;z++){const te=S[z];if(m(te)){const de=M(R),ie=n.get(te).__webglTexture;t.bindTexture(de,ie),x(de),t.unbindTexture()}}}const lt=[],Ut=[];function B(R){if(R.samples>0){if(je(R)===!1){const S=R.textures,z=R.width,Z=R.height;let te=i.COLOR_BUFFER_BIT;const de=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(R),$=S.length>1;if($)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);const ee=R.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);const Ee=n.get(S[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,te,i.NEAREST),l===!0&&(lt.length=0,Ut.length=0,lt.push(i.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(lt.push(de),Ut.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);const Ee=n.get(S[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ke(R){return Math.min(r.maxSamples,R.samples)}function je(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function ge(R,S){const z=R.colorSpace,Z=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Lc&&z!==kr&&(ut.getTransfer(z)===xt?(Z!==Oi||te!==Si)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",z)),S}function Je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=G,this.getTextureUnits=V,this.setTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=D,this.setTextureCube=le,this.rebindTextures=Qe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function w2(i,e){function t(n,r=kr){let s;const a=ut.getTransfer(r);if(n===Si)return i.UNSIGNED_BYTE;if(n===Jd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yv)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sv)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xv)return i.BYTE;if(n===vv)return i.SHORT;if(n===Vo)return i.UNSIGNED_SHORT;if(n===Zd)return i.INT;if(n===or)return i.UNSIGNED_INT;if(n===Ji)return i.FLOAT;if(n===Ar)return i.HALF_FLOAT;if(n===Mv)return i.ALPHA;if(n===Tv)return i.RGB;if(n===Oi)return i.RGBA;if(n===wr)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===bv)return i.RED;if(n===ep)return i.RED_INTEGER;if(n===Us)return i.RG;if(n===tp)return i.RG_INTEGER;if(n===np)return i.RGBA_INTEGER;if(n===nc||n===ic||n===rc||n===sc)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===nc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===nc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ic)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ch||n===uh||n===fh||n===hh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dh||n===ph||n===mh||n===gh||n===_h||n===Pc||n===xh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===dh||n===ph)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===gh)return s.COMPRESSED_R11_EAC;if(n===_h)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Pc)return s.COMPRESSED_RG11_EAC;if(n===xh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vh||n===yh||n===Sh||n===Mh||n===Th||n===bh||n===Eh||n===Ah||n===wh||n===Ch||n===Rh||n===Ph||n===Dh||n===Lh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Th)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ah)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ch)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ph)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lh)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nh||n===Ih||n===Uh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Nh)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ih)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fh||n===Oh||n===Dc||n===Bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Fh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const C2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Uv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new lr({vertexShader:C2,fragmentShader:R2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zi(new Jc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D2 extends zs{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",p=new P2,m={},x=t.getContextAttributes();let M=null,y=null;const A=[],b=[],w=new St;let v=null;const T=new xi;T.viewport=new Yt;const C=new xi;C.viewport=new Yt;const P=[T,C],N=new Vw;let G=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=A[Q];return ce===void 0&&(ce=new Fu,A[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=A[Q];return ce===void 0&&(ce=new Fu,A[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=A[Q];return ce===void 0&&(ce=new Fu,A[Q]=ce),ce.getHandSpace()};function I(Q){const ce=b.indexOf(Q.inputSource);if(ce===-1)return;const ae=A[ce];ae!==void 0&&(ae.update(Q.inputSource,Q.frame,c||a),ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function F(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",O);for(let Q=0;Q<A.length;Q++){const ce=b[Q];ce!==null&&(b[Q]=null,A[Q].disconnect(ce))}G=null,V=null,p.reset();for(const Q in m)delete m[Q];e.setRenderTarget(M),d=null,f=null,h=null,r=null,y=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",F),r.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ce=null,ke=null;x.depth&&(ke=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=x.stencil?Ts:wr,Ce=x.stencil?zo:or);const Pe={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new ir(f.textureWidth,f.textureHeight,{format:Oi,type:Si,depthTexture:new Fa(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ir(d.framebufferWidth,d.framebufferHeight,{format:Oi,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(Q){for(let ce=0;ce<Q.removed.length;ce++){const ae=Q.removed[ce],Ce=b.indexOf(ae);Ce>=0&&(b[Ce]=null,A[Ce].disconnect(ae))}for(let ce=0;ce<Q.added.length;ce++){const ae=Q.added[ce];let Ce=b.indexOf(ae);if(Ce===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=b.length){b.push(ae),Ce=Pe;break}else if(b[Pe]===null){b[Pe]=ae,Ce=Pe;break}if(Ce===-1)break}const ke=A[Ce];ke&&ke.connect(ae)}}const q=new X,K=new X;function D(Q,ce,ae){q.setFromMatrixPosition(ce.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const Ce=q.distanceTo(K),ke=ce.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,tt=ke[14]/(ke[10]-1),Ae=ke[14]/(ke[10]+1),Ge=(ke[9]+1)/ke[5],Qe=(ke[9]-1)/ke[5],ze=(ke[8]-1)/ke[0],j=(Pe[8]+1)/Pe[0],lt=tt*ze,Ut=tt*j,B=Ce/(-ze+j),Ke=B*-ze;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ke),Q.translateZ(B),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ke[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const je=tt+B,ct=Ae+B,ge=lt-Ke,Je=Ut+(Ce-Ke),R=Ge*Ae/ct*je,S=Qe*Ae/ct*je;Q.projectionMatrix.makePerspective(ge,Je,R,S,je,ct),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ce=Q.near,ae=Q.far;p.texture!==null&&(p.depthNear>0&&(ce=p.depthNear),p.depthFar>0&&(ae=p.depthFar)),N.near=C.near=T.near=ce,N.far=C.far=T.far=ae,(G!==N.near||V!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),G=N.near,V=N.far),N.layers.mask=Q.layers.mask|6,T.layers.mask=N.layers.mask&-5,C.layers.mask=N.layers.mask&-3;const Ce=Q.parent,ke=N.cameras;le(N,Ce);for(let Pe=0;Pe<ke.length;Pe++)le(ke[Pe],Ce);ke.length===2?D(N,T,C):N.projectionMatrix.copy(T.projectionMatrix),Te(Q,N,Ce)};function Te(Q,ce,ae){ae===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Vh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(Q){return m[Q]};let Ye=null;function Ve(Q,ce){if(u=ce.getViewerPose(c||a),g=ce,u!==null){const ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ce=!1;ae.length!==N.cameras.length&&(N.cameras.length=0,Ce=!0);for(let Ae=0;Ae<ae.length;Ae++){const Ge=ae[Ae];let Qe=null;if(d!==null)Qe=d.getViewport(Ge);else{const j=h.getViewSubImage(f,Ge);Qe=j.viewport,Ae===0&&(e.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(y))}let ze=P[Ae];ze===void 0&&(ze=new xi,ze.layers.enable(Ae),ze.viewport=new Yt,P[Ae]=ze),ze.matrix.fromArray(Ge.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ge.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ae===0&&(N.matrix.copy(ze.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ce===!0&&N.cameras.push(ze)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Ae=h.getDepthInformation(ae[0]);Ae&&Ae.isValid&&Ae.texture&&p.init(Ae,r.renderState)}if(ke&&ke.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Ae=0;Ae<ae.length;Ae++){const Ge=ae[Ae].camera;if(Ge){let Qe=m[Ge];Qe||(Qe=new Uv,m[Ge]=Qe);const ze=h.getCameraImage(Ge);Qe.sourceTexture=ze}}}}for(let ae=0;ae<A.length;ae++){const Ce=b[ae],ke=A[ae];Ce!==null&&ke!==void 0&&ke.update(Ce,ce,c||a)}Ye&&Ye(Q,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}const Ie=new kv;Ie.setAnimationLoop(Ve),this.setAnimationLoop=function(Q){Ye=Q},this.dispose=function(){}}}const L2=new tn,jv=new $e;jv.set(-1,0,0,0,1,0,0,0,1);function N2(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Fv(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,x,M,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),M=x.envMap,y=x.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(L2.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(jv),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function I2(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const y=M.program;n.uniformBlockBinding(x,y)}function c(x,M){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",p));const A=M.program;n.updateUBOMapping(x,A);const b=e.render.frame;s[x.id]!==b&&(f(x),s[x.id]=b)}function u(x){const M=h();x.__bindingPointIndex=M;const y=i.createBuffer(),A=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=r[x.id],y=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,w=y.length;b<w;b++){const v=Array.isArray(y[b])?y[b]:[y[b]];for(let T=0,C=v.length;T<C;T++){const P=v[T];if(d(P,b,T,A)===!0){const N=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let I=0;I<G.length;I++){const F=G[I],O=_(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,N+V,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):ArrayBuffer.isView(F)?P.__data.set(new F.constructor(F.buffer,F.byteOffset,P.__data.length)):(F.toArray(P.__data,V),V+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,M,y,A){const b=x.value,w=M+"_"+y;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:ArrayBuffer.isView(b)?A[w]=b.slice():A[w]=b.clone(),!0;{const v=A[w];if(typeof b=="number"||typeof b=="boolean"){if(v!==b)return A[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(v.equals(b)===!1)return v.copy(b),!0}}return!1}function g(x){const M=x.uniforms;let y=0;const A=16;for(let w=0,v=M.length;w<v;w++){const T=Array.isArray(M[w])?M[w]:[M[w]];for(let C=0,P=T.length;C<P;C++){const N=T[C],G=Array.isArray(N.value)?N.value:[N.value];for(let V=0,I=G.length;V<I;V++){const F=G[V],O=_(F),q=y%A,K=q%O.boundary,D=q+K;y+=K,D!==0&&A-D<O.storage&&(y+=A-D),N.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=O.storage}}}const b=y%A;return b>0&&(y+=A-b),x.__size=y,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):We("WebGLRenderer: Unsupported uniform value type.",x),M}function p(x){const M=x.target;M.removeEventListener("dispose",p);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}const U2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function F2(){return Wi===null&&(Wi=new Ew(U2,16,16,Us,Ar),Wi.name="DFG_LUT",Wi.minFilter=Rn,Wi.magFilter=Rn,Wi.wrapS=vr,Wi.wrapT=vr,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class O2{constructor(e={}){const{canvas:t=nw(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Si}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=d,p=new Set([np,tp,ep]),m=new Set([Si,or,Vo,zo,Jd,Qd]),x=new Uint32Array(4),M=new Int32Array(4),y=new X;let A=null,b=null;const w=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,N=null;this._outputColorSpace=_i;let G=0,V=0,I=null,F=-1,O=null;const q=new Yt,K=new Yt;let D=null;const le=new vt(0);let Te=0,Ye=t.width,Ve=t.height,Ie=1,Q=null,ce=null;const ae=new Yt(0,0,Ye,Ve),Ce=new Yt(0,0,Ye,Ve);let ke=!1;const Pe=new Lv;let tt=!1,Ae=!1;const Ge=new tn,Qe=new X,ze=new Yt,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Ut(){return I===null?Ie:1}let B=n;function Ke(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kd}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",he,!1),B===null){const k="webgl2";if(B=Ke(k,E),B===null)throw Ke(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw pt("WebGLRenderer: "+E.message),E}let je,ct,ge,Je,R,S,z,Z,te,de,ie,$,ee,xe,Ee,pe,ue,_e,He,qe,U,oe,J;function ye(){je=new FP(B),je.init(),U=new w2(B,je),ct=new CP(B,je,e,U),ge=new E2(B,je),ct.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),Je=new kP(B),R=new f2,S=new A2(B,je,ge,R,ct,U,Je),z=new UP(C),Z=new Hw(B),oe=new AP(B,Z),te=new OP(B,Z,Je,oe),de=new zP(B,te,Z,oe,Je),_e=new VP(B,ct,S),Ee=new RP(R),ie=new u2(C,z,je,ct,oe,Ee),$=new N2(C,R),ee=new d2,xe=new v2(je),ue=new EP(C,z,ge,de,g,l),pe=new b2(C,de,ct),J=new I2(B,Je,ct,ge),He=new wP(B,je,Je),qe=new BP(B,je,Je),Je.programs=ie.programs,C.capabilities=ct,C.extensions=je,C.properties=R,C.renderLists=ee,C.shadowMap=pe,C.state=ge,C.info=Je}ye(),_!==Si&&(T=new HP(_,t.width,t.height,r,s));const fe=new D2(C,B);this.xr=fe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(E){E!==void 0&&(Ie=E,this.setSize(Ye,Ve,!1))},this.getSize=function(E){return E.set(Ye,Ve)},this.setSize=function(E,k,Y=!0){if(fe.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=E,Ve=k,t.width=Math.floor(E*Ie),t.height=Math.floor(k*Ie),Y===!0&&(t.style.width=E+"px",t.style.height=k+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Ye*Ie,Ve*Ie).floor()},this.setDrawingBufferSize=function(E,k,Y){Ye=E,Ve=k,Ie=Y,t.width=Math.floor(E*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(_===Si){pt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){We("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(q)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,k,Y,H){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,k,Y,H),ge.viewport(q.copy(ae).multiplyScalar(Ie).round())},this.getScissor=function(E){return E.copy(Ce)},this.setScissor=function(E,k,Y,H){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,k,Y,H),ge.scissor(K.copy(Ce).multiplyScalar(Ie).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(E){ge.setScissorTest(ke=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){ce=E},this.getClearColor=function(E){return E.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,Y=!0){let H=0;if(E){let W=!1;if(I!==null){const ve=I.texture.format;W=p.has(ve)}if(W){const ve=I.texture.type,Se=m.has(ve),be=ue.getClearColor(),Ne=ue.getClearAlpha(),Ue=be.r,Ze=be.g,nt=be.b;Se?(x[0]=Ue,x[1]=Ze,x[2]=nt,x[3]=Ne,B.clearBufferuiv(B.COLOR,0,x)):(M[0]=Ue,M[1]=Ze,M[2]=nt,M[3]=Ne,B.clearBufferiv(B.COLOR,0,M))}else H|=B.COLOR_BUFFER_BIT}k&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ue.dispose(),ee.dispose(),xe.dispose(),R.dispose(),z.dispose(),de.dispose(),oe.dispose(),J.dispose(),ie.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",rt),fe.removeEventListener("sessionend",Lt),Nt.stop()};function ne(E){E.preventDefault(),dg("WebGLRenderer: Context Lost."),P=!0}function se(){dg("WebGLRenderer: Context Restored."),P=!1;const E=Je.autoReset,k=pe.enabled,Y=pe.autoUpdate,H=pe.needsUpdate,W=pe.type;ye(),Je.autoReset=E,pe.enabled=k,pe.autoUpdate=Y,pe.needsUpdate=H,pe.type=W}function he(E){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Oe(E){const k=E.target;k.removeEventListener("dispose",Oe),re(k)}function re(E){Be(E),R.remove(E)}function Be(E){const k=R.get(E).programs;k!==void 0&&(k.forEach(function(Y){ie.releaseProgram(Y)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,Y,H,W,ve){k===null&&(k=j);const Se=W.isMesh&&W.matrixWorld.determinant()<0,be=un(E,k,Y,H,W);ge.setMaterial(H,Se);let Ne=Y.index,Ue=1;if(H.wireframe===!0){if(Ne=te.getWireframeAttribute(Y),Ne===void 0)return;Ue=2}const Ze=Y.drawRange,nt=Y.attributes.position;let Fe=Ze.start*Ue,yt=(Ze.start+Ze.count)*Ue;ve!==null&&(Fe=Math.max(Fe,ve.start*Ue),yt=Math.min(yt,(ve.start+ve.count)*Ue)),Ne!==null?(Fe=Math.max(Fe,0),yt=Math.min(yt,Ne.count)):nt!=null&&(Fe=Math.max(Fe,0),yt=Math.min(yt,nt.count));const Wt=yt-Fe;if(Wt<0||Wt===1/0)return;oe.setup(W,H,be,Y,Ne);let kt,Tt=He;if(Ne!==null&&(kt=Z.get(Ne),Tt=qe,Tt.setIndex(kt)),W.isMesh)H.wireframe===!0?(ge.setLineWidth(H.wireframeLinewidth*Ut()),Tt.setMode(B.LINES)):Tt.setMode(B.TRIANGLES);else if(W.isLine){let Mn=H.linewidth;Mn===void 0&&(Mn=1),ge.setLineWidth(Mn*Ut()),W.isLineSegments?Tt.setMode(B.LINES):W.isLineLoop?Tt.setMode(B.LINE_LOOP):Tt.setMode(B.LINE_STRIP)}else W.isPoints?Tt.setMode(B.POINTS):W.isSprite&&Tt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(je.get("WEBGL_multi_draw"))Tt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Mn=W._multiDrawStarts,we=W._multiDrawCounts,Jn=W._multiDrawCount,dt=Ne?Z.get(Ne).bytesPerElement:1,pi=R.get(H).currentProgram.getUniforms();for(let Gi=0;Gi<Jn;Gi++)pi.setValue(B,"_gl_DrawID",Gi),Tt.render(Mn[Gi]/dt,we[Gi])}else if(W.isInstancedMesh)Tt.renderInstances(Fe,Wt,W.count);else if(Y.isInstancedBufferGeometry){const Mn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,we=Math.min(Y.instanceCount,Mn);Tt.renderInstances(Fe,Wt,we)}else Tt.render(Fe,Wt)};function Le(E,k,Y){E.transparent===!0&&E.side===_r&&E.forceSinglePass===!1?(E.side=qn,E.needsUpdate=!0,cn(E,k,Y),E.side=ts,E.needsUpdate=!0,cn(E,k,Y),E.side=_r):cn(E,k,Y)}this.compile=function(E,k,Y=null){Y===null&&(Y=E),b=xe.get(Y),b.init(k),v.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights();const H=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ve=W.material;if(ve)if(Array.isArray(ve))for(let Se=0;Se<ve.length;Se++){const be=ve[Se];Le(be,Y,W),H.add(be)}else Le(ve,Y,W),H.add(ve)}),b=v.pop(),H},this.compileAsync=function(E,k,Y=null){const H=this.compile(E,k,Y);return new Promise(W=>{function ve(){if(H.forEach(function(Se){R.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){W(E);return}setTimeout(ve,10)}je.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Xe=null;function $t(E){Xe&&Xe(E)}function rt(){Nt.stop()}function Lt(){Nt.start()}const Nt=new kv;Nt.setAnimationLoop($t),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(E){Xe=E,fe.setAnimationLoop(E),E===null?Nt.stop():Nt.start()},fe.addEventListener("sessionstart",rt),fe.addEventListener("sessionend",Lt),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(E,k);const Y=fe.enabled===!0&&fe.isPresenting===!0,H=T!==null&&(I===null||Y)&&T.begin(C,I);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(k),k=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,k,I),b=xe.get(E,v.length),b.init(k),b.state.textureUnits=S.getTextureUnits(),v.push(b),Ge.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Pe.setFromProjectionMatrix(Ge,Qi,k.reversedDepth),Ae=this.localClippingEnabled,tt=Ee.init(this.clippingPlanes,Ae),A=ee.get(E,w.length),A.init(),w.push(A),fe.enabled===!0&&fe.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&Ct(Se,k,-1/0,C.sortObjects)}Ct(E,k,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(Q,ce),lt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,lt&&ue.addToRenderList(A,E),this.info.render.frame++,tt===!0&&Ee.beginShadows();const W=b.state.shadowsArray;if(pe.render(W,E,k),tt===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&T.hasRenderPass())===!1){const Se=A.opaque,be=A.transmissive;if(b.setupLights(),k.isArrayCamera){const Ne=k.cameras;if(be.length>0)for(let Ue=0,Ze=Ne.length;Ue<Ze;Ue++){const nt=Ne[Ue];mt(Se,be,E,nt)}lt&&ue.render(E);for(let Ue=0,Ze=Ne.length;Ue<Ze;Ue++){const nt=Ne[Ue];Mt(A,E,nt,nt.viewport)}}else be.length>0&&mt(Se,be,E,k),lt&&ue.render(E),Mt(A,E,k)}I!==null&&V===0&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),H&&T.end(C),E.isScene===!0&&E.onAfterRender(C,E,k),oe.resetDefaultState(),F=-1,O=null,v.pop(),v.length>0?(b=v[v.length-1],S.setTextureUnits(b.state.textureUnits),tt===!0&&Ee.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,N!==null&&N.renderEnd()};function Ct(E,k,Y,H){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pe.intersectsSprite(E)){H&&ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ge);const Se=de.update(E),be=E.material;be.visible&&A.push(E,Se,be,Y,ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pe.intersectsObject(E))){const Se=de.update(E),be=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ze.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ze.copy(Se.boundingSphere.center)),ze.applyMatrix4(E.matrixWorld).applyMatrix4(Ge)),Array.isArray(be)){const Ne=Se.groups;for(let Ue=0,Ze=Ne.length;Ue<Ze;Ue++){const nt=Ne[Ue],Fe=be[nt.materialIndex];Fe&&Fe.visible&&A.push(E,Se,Fe,Y,ze.z,nt)}}else be.visible&&A.push(E,Se,be,Y,ze.z,null)}}const ve=E.children;for(let Se=0,be=ve.length;Se<be;Se++)Ct(ve[Se],k,Y,H)}function Mt(E,k,Y,H){const{opaque:W,transmissive:ve,transparent:Se}=E;b.setupLightsView(Y),tt===!0&&Ee.setGlobalState(C.clippingPlanes,Y),H&&ge.viewport(q.copy(H)),W.length>0&&Sn(W,k,Y),ve.length>0&&Sn(ve,k,Y),Se.length>0&&Sn(Se,k,Y),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function mt(E,k,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Fe=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new ir(1,1,{generateMipmaps:!0,type:Fe?Ar:Si,minFilter:Ms,samples:Math.max(4,ct.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const ve=b.state.transmissionRenderTarget[H.id],Se=H.viewport||q;ve.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);const be=C.getRenderTarget(),Ne=C.getActiveCubeFace(),Ue=C.getActiveMipmapLevel();C.setRenderTarget(ve),C.getClearColor(le),Te=C.getClearAlpha(),Te<1&&C.setClearColor(16777215,.5),C.clear(),lt&&ue.render(Y);const Ze=C.toneMapping;C.toneMapping=nr;const nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),tt===!0&&Ee.setGlobalState(C.clippingPlanes,H),Sn(E,Y,H),S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve),je.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let yt=0,Wt=k.length;yt<Wt;yt++){const kt=k[yt],{object:Tt,geometry:Mn,material:we,group:Jn}=kt;if(we.side===_r&&Tt.layers.test(H.layers)){const dt=we.side;we.side=qn,we.needsUpdate=!0,Rt(Tt,Y,H,Mn,we,Jn),we.side=dt,we.needsUpdate=!0,Fe=!0}}Fe===!0&&(S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve))}C.setRenderTarget(be,Ne,Ue),C.setClearColor(le,Te),nt!==void 0&&(H.viewport=nt),C.toneMapping=Ze}function Sn(E,k,Y){const H=k.isScene===!0?k.overrideMaterial:null;for(let W=0,ve=E.length;W<ve;W++){const Se=E[W],{object:be,geometry:Ne,group:Ue}=Se;let Ze=Se.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),be.layers.test(Y.layers)&&Rt(be,k,Y,Ne,Ze,Ue)}}function Rt(E,k,Y,H,W,ve){E.onBeforeRender(C,k,Y,H,W,ve),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(C,k,Y,H,E,ve),W.transparent===!0&&W.side===_r&&W.forceSinglePass===!1?(W.side=qn,W.needsUpdate=!0,C.renderBufferDirect(Y,k,H,W,E,ve),W.side=ts,W.needsUpdate=!0,C.renderBufferDirect(Y,k,H,W,E,ve),W.side=_r):C.renderBufferDirect(Y,k,H,W,E,ve),E.onAfterRender(C,k,Y,H,W,ve)}function cn(E,k,Y){k.isScene!==!0&&(k=j);const H=R.get(E),W=b.state.lights,ve=b.state.shadowsArray,Se=W.state.version,be=ie.getParameters(E,W.state,ve,k,Y,b.state.lightProbeGridArray),Ne=ie.getProgramCacheKey(be);let Ue=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,H.fog=k.fog;const Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=z.get(E.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",Oe),Ue=new Map,H.programs=Ue);let nt=Ue.get(Ne);if(nt!==void 0){if(H.currentProgram===nt&&H.lightsStateVersion===Se)return Kt(E,be),nt}else be.uniforms=ie.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,Y,be),E.onBeforeCompile(be,C),nt=ie.acquireProgram(be,Ne),Ue.set(Ne,nt),H.uniforms=be.uniforms;const Fe=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=Ee.uniform),Kt(E,be),H.needsLights=Gs(E),H.lightsStateVersion=Se,H.needsLights&&(Fe.ambientLightColor.value=W.state.ambient,Fe.lightProbe.value=W.state.probe,Fe.directionalLights.value=W.state.directional,Fe.directionalLightShadows.value=W.state.directionalShadow,Fe.spotLights.value=W.state.spot,Fe.spotLightShadows.value=W.state.spotShadow,Fe.rectAreaLights.value=W.state.rectArea,Fe.ltc_1.value=W.state.rectAreaLTC1,Fe.ltc_2.value=W.state.rectAreaLTC2,Fe.pointLights.value=W.state.point,Fe.pointLightShadows.value=W.state.pointShadow,Fe.hemisphereLights.value=W.state.hemi,Fe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Fe.spotLightMatrix.value=W.state.spotLightMatrix,Fe.spotLightMap.value=W.state.spotLightMap,Fe.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=nt,H.uniformsList=null,nt}function Zn(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=ac.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Kt(E,k){const Y=R.get(E);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function nn(E,k){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(k.matrixWorld);for(let Y=0,H=E.length;Y<H;Y++){const W=E[Y];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function un(E,k,Y,H,W){k.isScene!==!0&&(k=j),S.resetTextureUnits();const ve=k.fog,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?k.environment:null,be=I===null?C.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ut.workingColorSpace,Ne=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ue=z.get(H.envMap||Se,Ne),Ze=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,nt=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!Y.morphAttributes.position,yt=!!Y.morphAttributes.normal,Wt=!!Y.morphAttributes.color;let kt=nr;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(kt=C.toneMapping);const Tt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mn=Tt!==void 0?Tt.length:0,we=R.get(H),Jn=b.state.lights;if(tt===!0&&(Ae===!0||E!==O)){const Pt=E===O&&H.id===F;Ee.setState(H,E,Pt)}let dt=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Jn.state.version||we.outputColorSpace!==be||W.isBatchedMesh&&we.batching===!1||!W.isBatchedMesh&&we.batching===!0||W.isBatchedMesh&&we.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&we.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&we.instancing===!1||!W.isInstancedMesh&&we.instancing===!0||W.isSkinnedMesh&&we.skinning===!1||!W.isSkinnedMesh&&we.skinning===!0||W.isInstancedMesh&&we.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&we.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&we.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&we.instancingMorph===!1&&W.morphTexture!==null||we.envMap!==Ue||H.fog===!0&&we.fog!==ve||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Ee.numPlanes||we.numIntersection!==Ee.numIntersection)||we.vertexAlphas!==Ze||we.vertexTangents!==nt||we.morphTargets!==Fe||we.morphNormals!==yt||we.morphColors!==Wt||we.toneMapping!==kt||we.morphTargetsCount!==Mn||!!we.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,we.__version=H.version);let pi=we.currentProgram;dt===!0&&(pi=cn(H,k,W),N&&H.isNodeMaterial&&N.onUpdateProgram(H,pi,we));let Gi=!1,Cr=!1,Hs=!1;const bt=pi.getUniforms(),Xt=we.uniforms;if(ge.useProgram(pi.program)&&(Gi=!0,Cr=!0,Hs=!0),H.id!==F&&(F=H.id,Cr=!0),we.needsLights){const Pt=nn(b.state.lightProbeGridArray,W);we.lightProbeGrid!==Pt&&(we.lightProbeGrid=Pt,Cr=!0)}if(Gi||O!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),bt.setValue(B,"projectionMatrix",E.projectionMatrix),bt.setValue(B,"viewMatrix",E.matrixWorldInverse);const Pr=bt.map.cameraPosition;Pr!==void 0&&Pr.setValue(B,Qe.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&bt.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&bt.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,Cr=!0,Hs=!0)}if(we.needsLights&&(Jn.state.directionalShadowMap.length>0&&bt.setValue(B,"directionalShadowMap",Jn.state.directionalShadowMap,S),Jn.state.spotShadowMap.length>0&&bt.setValue(B,"spotShadowMap",Jn.state.spotShadowMap,S),Jn.state.pointShadowMap.length>0&&bt.setValue(B,"pointShadowMap",Jn.state.pointShadowMap,S)),W.isSkinnedMesh){bt.setOptional(B,W,"bindMatrix"),bt.setOptional(B,W,"bindMatrixInverse");const Pt=W.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),bt.setValue(B,"boneTexture",Pt.boneTexture,S))}W.isBatchedMesh&&(bt.setOptional(B,W,"batchingTexture"),bt.setValue(B,"batchingTexture",W._matricesTexture,S),bt.setOptional(B,W,"batchingIdTexture"),bt.setValue(B,"batchingIdTexture",W._indirectTexture,S),bt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&bt.setValue(B,"batchingColorTexture",W._colorsTexture,S));const Rr=Y.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&_e.update(W,Y,pi),(Cr||we.receiveShadow!==W.receiveShadow)&&(we.receiveShadow=W.receiveShadow,bt.setValue(B,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&k.environment!==null&&(Xt.envMapIntensity.value=k.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=F2()),Cr){if(bt.setValue(B,"toneMappingExposure",C.toneMappingExposure),we.needsLights&&cr(Xt,Hs),ve&&H.fog===!0&&$.refreshFogUniforms(Xt,ve),$.refreshMaterialUniforms(Xt,H,Ie,Ve,b.state.transmissionRenderTarget[E.id]),we.needsLights&&we.lightProbeGrid){const Pt=we.lightProbeGrid;Xt.probesSH.value=Pt.texture,Xt.probesMin.value.copy(Pt.boundingBox.min),Xt.probesMax.value.copy(Pt.boundingBox.max),Xt.probesResolution.value.copy(Pt.resolution)}ac.upload(B,Zn(we),Xt,S)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ac.upload(B,Zn(we),Xt,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&bt.setValue(B,"center",W.center),bt.setValue(B,"modelViewMatrix",W.modelViewMatrix),bt.setValue(B,"normalMatrix",W.normalMatrix),bt.setValue(B,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){const Pt=H.uniformsGroups;for(let Pr=0,Ws=Pt.length;Pr<Ws;Pr++){const Sp=Pt[Pr];J.update(Sp,pi),J.bind(Sp,pi)}}return pi}function cr(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Gs(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,k,Y){const H=R.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),R.get(E.texture).__webglTexture=k,R.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const Y=R.get(E);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const fn=B.createFramebuffer();this.setRenderTarget=function(E,k=0,Y=0){I=E,G=k,V=Y;let H=null,W=!1,ve=!1;if(E){const be=R.get(E);if(be.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(B.FRAMEBUFFER,be.__webglFramebuffer),q.copy(E.viewport),K.copy(E.scissor),D=E.scissorTest,ge.viewport(q),ge.scissor(K),ge.setScissorTest(D),F=-1;return}else if(be.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(be.__hasExternalTextures)S.rebindTextures(E,R.get(E.texture).__webglTexture,R.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ze=E.depthTexture;if(be.__boundDepthTexture!==Ze){if(Ze!==null&&R.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ve=!0);const Ue=R.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?H=Ue[k][Y]:H=Ue[k],W=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?H=R.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[Y]:H=Ue,q.copy(E.viewport),K.copy(E.scissor),D=E.scissorTest}else q.copy(ae).multiplyScalar(Ie).floor(),K.copy(Ce).multiplyScalar(Ie).floor(),D=ke;if(Y!==0&&(H=fn),ge.bindFramebuffer(B.FRAMEBUFFER,H)&&ge.drawBuffers(E,H),ge.viewport(q),ge.scissor(K),ge.setScissorTest(D),W){const be=R.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,Y)}else if(ve){const be=k;for(let Ne=0;Ne<E.textures.length;Ne++){const Ue=R.get(E.textures[Ne]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ne,Ue.__webglTexture,Y,be)}}else if(E!==null&&Y!==0){const be=R.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,be.__webglTexture,Y)}F=-1},this.readRenderTargetPixels=function(E,k,Y,H,W,ve,Se,be=0){if(!(E&&E.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){ge.bindFramebuffer(B.FRAMEBUFFER,Ne);try{const Ue=E.textures[be],Ze=Ue.format,nt=Ue.type;if(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be),!ct.textureFormatReadable(Ze)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(nt)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-H&&Y>=0&&Y<=E.height-W&&B.readPixels(k,Y,H,W,U.convert(Ze),U.convert(nt),ve)}finally{const Ue=I!==null?R.get(I).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,k,Y,H,W,ve,Se,be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne)if(k>=0&&k<=E.width-H&&Y>=0&&Y<=E.height-W){ge.bindFramebuffer(B.FRAMEBUFFER,Ne);const Ue=E.textures[be],Ze=Ue.format,nt=Ue.type;if(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be),!ct.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Fe),B.bufferData(B.PIXEL_PACK_BUFFER,ve.byteLength,B.STREAM_READ),B.readPixels(k,Y,H,W,U.convert(Ze),U.convert(nt),0);const yt=I!==null?R.get(I).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,yt);const Wt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await iw(B,Wt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Fe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ve),B.deleteBuffer(Fe),B.deleteSync(Wt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,Y=0){const H=Math.pow(2,-Y),W=Math.floor(E.image.width*H),ve=Math.floor(E.image.height*H),Se=k!==null?k.x:0,be=k!==null?k.y:0;S.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Se,be,W,ve),ge.unbindTexture()};const Ht=B.createFramebuffer(),di=B.createFramebuffer();this.copyTextureToTexture=function(E,k,Y=null,H=null,W=0,ve=0){let Se,be,Ne,Ue,Ze,nt,Fe,yt,Wt;const kt=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(Y!==null)Se=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,Ne=Y.isBox3?Y.max.z-Y.min.z:1,Ue=Y.min.x,Ze=Y.min.y,nt=Y.isBox3?Y.min.z:0;else{const Xt=Math.pow(2,-W);Se=Math.floor(kt.width*Xt),be=Math.floor(kt.height*Xt),E.isDataArrayTexture?Ne=kt.depth:E.isData3DTexture?Ne=Math.floor(kt.depth*Xt):Ne=1,Ue=0,Ze=0,nt=0}H!==null?(Fe=H.x,yt=H.y,Wt=H.z):(Fe=0,yt=0,Wt=0);const Tt=U.convert(k.format),Mn=U.convert(k.type);let we;k.isData3DTexture?(S.setTexture3D(k,0),we=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(S.setTexture2DArray(k,0),we=B.TEXTURE_2D_ARRAY):(S.setTexture2D(k,0),we=B.TEXTURE_2D),ge.activeTexture(B.TEXTURE0),ge.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),ge.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),ge.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const Jn=ge.getParameter(B.UNPACK_ROW_LENGTH),dt=ge.getParameter(B.UNPACK_IMAGE_HEIGHT),pi=ge.getParameter(B.UNPACK_SKIP_PIXELS),Gi=ge.getParameter(B.UNPACK_SKIP_ROWS),Cr=ge.getParameter(B.UNPACK_SKIP_IMAGES);ge.pixelStorei(B.UNPACK_ROW_LENGTH,kt.width),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kt.height),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,Ue),ge.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,nt);const Hs=E.isDataArrayTexture||E.isData3DTexture,bt=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const Xt=R.get(E),Rr=R.get(k),Pt=R.get(Xt.__renderTarget),Pr=R.get(Rr.__renderTarget);ge.bindFramebuffer(B.READ_FRAMEBUFFER,Pt.__webglFramebuffer),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let Ws=0;Ws<Ne;Ws++)Hs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,R.get(E).__webglTexture,W,nt+Ws),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,R.get(k).__webglTexture,ve,Wt+Ws)),B.blitFramebuffer(Ue,Ze,Se,be,Fe,yt,Se,be,B.DEPTH_BUFFER_BIT,B.NEAREST);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||R.has(E)){const Xt=R.get(E),Rr=R.get(k);ge.bindFramebuffer(B.READ_FRAMEBUFFER,Ht),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,di);for(let Pt=0;Pt<Ne;Pt++)Hs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.__webglTexture,W,nt+Pt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xt.__webglTexture,W),bt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rr.__webglTexture,ve,Wt+Pt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rr.__webglTexture,ve),W!==0?B.blitFramebuffer(Ue,Ze,Se,be,Fe,yt,Se,be,B.COLOR_BUFFER_BIT,B.NEAREST):bt?B.copyTexSubImage3D(we,ve,Fe,yt,Wt+Pt,Ue,Ze,Se,be):B.copyTexSubImage2D(we,ve,Fe,yt,Ue,Ze,Se,be);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else bt?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(we,ve,Fe,yt,Wt,Se,be,Ne,Tt,Mn,kt.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(we,ve,Fe,yt,Wt,Se,be,Ne,Tt,kt.data):B.texSubImage3D(we,ve,Fe,yt,Wt,Se,be,Ne,Tt,Mn,kt):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ve,Fe,yt,Se,be,Tt,Mn,kt.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ve,Fe,yt,kt.width,kt.height,Tt,kt.data):B.texSubImage2D(B.TEXTURE_2D,ve,Fe,yt,Se,be,Tt,Mn,kt);ge.pixelStorei(B.UNPACK_ROW_LENGTH,Jn),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,pi),ge.pixelStorei(B.UNPACK_SKIP_ROWS,Gi),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,Cr),ve===0&&k.generateMipmaps&&B.generateMipmap(we),ge.unbindTexture()},this.initRenderTarget=function(E){R.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){G=0,V=0,I=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}function B2({className:i=""}){const e=me.useRef(null);return me.useEffect(()=>{const t=e.current;if(!t)return;const n=t.clientWidth,r=t.clientHeight,s=new vw,a=new xi(70,n/r,.1,1e3);a.position.z=60;const o=new O2({alpha:!0,antialias:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),o.setSize(n,r),o.setClearColor(0,0),t.appendChild(o.domElement);const l=220,c=new Ci,u=new Float32Array(l*3),h=new Float32Array(l);for(let I=0;I<l;I++)u[I*3+0]=(Math.random()-.5)*120,u[I*3+1]=(Math.random()-.5)*80,u[I*3+2]=(Math.random()-.5)*60,h[I]=.3+Math.random()*.7;c.setAttribute("position",new Vi(u,3));const f=document.createElement("canvas");f.width=f.height=64;const d=f.getContext("2d"),g=d.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,"rgba(56,189,248,1)"),g.addColorStop(.4,"rgba(37,99,235,0.6)"),g.addColorStop(1,"rgba(29,78,216,0)"),d.fillStyle=g,d.fillRect(0,0,64,64);const _=new Pw(f),p=new Nv({size:1.6,map:_,transparent:!0,depthWrite:!1,blending:Rc,opacity:.85}),m=new Rw(c,p);s.add(m);const x=new op(14,32,32),M=new ap({color:3718648,transparent:!0,opacity:.08,blending:Rc}),y=new zi(x,M);y.position.set(-25,10,-10),s.add(y);const A=new zi(x,M.clone());A.scale.setScalar(1.3),A.position.set(28,-15,-5),s.add(A);let b=0,w=0;const v=I=>{const F=t.getBoundingClientRect();b=((I.clientX-F.left)/F.width-.5)*2,w=((I.clientY-F.top)/F.height-.5)*2};window.addEventListener("mousemove",v);let T=0,C=!0;const P=new IntersectionObserver(([I])=>{C=I.isIntersecting},{threshold:.05});P.observe(t);const N=new zw,G=()=>{if(T=requestAnimationFrame(G),!C)return;const I=N.getElapsedTime(),F=c.attributes.position;for(let O=0;O<l;O++){const q=O*3+1;F.array[q]+=Math.sin(I*h[O]+O)*.012}F.needsUpdate=!0,m.rotation.y=I*.04+b*.15,m.rotation.x=w*.1,y.position.x=-25+Math.sin(I*.3)*5,y.position.y=10+Math.cos(I*.25)*4,A.position.x=28+Math.cos(I*.2)*6,A.position.y=-15+Math.sin(I*.35)*5,o.render(s,a)};G();const V=()=>{const I=t.clientWidth,F=t.clientHeight;a.aspect=I/F,a.updateProjectionMatrix(),o.setSize(I,F)};return window.addEventListener("resize",V),()=>{cancelAnimationFrame(T),window.removeEventListener("mousemove",v),window.removeEventListener("resize",V),P.disconnect(),c.dispose(),p.dispose(),_.dispose(),x.dispose(),M.dispose(),o.dispose(),o.domElement.parentNode===t&&t.removeChild(o.domElement)}},[]),L.jsx("div",{ref:e,className:`absolute inset-0 ${i}`,"aria-hidden":!0})}const k2=["Professional","Chartered","Accountant","Services"];function V2(){const i=me.useRef(null);return me.useEffect(()=>{const e=ki.context(()=>{ki.from("[data-word] > span",{yPercent:110,opacity:0,duration:1,ease:"power4.out",stagger:.08}),ki.from("[data-hero-fade]",{y:30,opacity:0,duration:.9,delay:.4,ease:"power3.out",stagger:.12})},i);return()=>e.revert()},[]),L.jsxs("section",{id:"home",ref:i,className:"relative overflow-hidden bg-gradient-hero",children:[L.jsx(B2,{className:"opacity-70"}),L.jsx("div",{className:"pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob"}),L.jsx("div",{className:"pointer-events-none absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent-cyan/30 blur-3xl animate-blob",style:{animationDelay:"3s"}}),L.jsx("div",{className:"pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary-deep/15 blur-3xl animate-blob",style:{animationDelay:"6s"}}),L.jsxs("div",{className:"container mx-auto px-6 pt-20 pb-28 lg:pt-28 lg:pb-36 grid lg:grid-cols-2 gap-12 items-center relative z-10",children:[L.jsxs("div",{children:[L.jsxs("span",{"data-hero-fade":!0,className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-semibold text-primary pulse-ring",children:[L.jsx(Jy,{className:"h-3.5 w-3.5"})," Trusted Chartered Accountants since 2008"]}),L.jsx("h1",{className:"mt-6 text-4xl sm:text-5xl lg:text-[4.25rem] font-bold leading-[1.02]",children:k2.map((e,t)=>L.jsx("span",{"data-word":!0,className:"word align-bottom mr-3",children:L.jsx("span",{className:t===1||t===2?"text-gradient":"",children:e})},t))}),L.jsx("p",{"data-hero-fade":!0,className:"mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed",children:"Strategic tax planning, compliance, and audit expertise for businesses and individuals. We turn complex financial regulations into clear, actionable strategies that protect and grow your wealth."}),L.jsxs("div",{"data-hero-fade":!0,className:"mt-9 flex flex-wrap gap-4",children:[L.jsxs(Of,{href:"#contact",className:"btn-premium group",children:["Get Consultation",L.jsx(hf,{className:"h-4 w-4 transition-transform group-hover:translate-x-1"})]}),L.jsx(Of,{href:"#services",className:"btn-ghost-glass",children:"Our Services"})]}),L.jsx("div",{"data-hero-fade":!0,className:"mt-12 grid grid-cols-3 gap-4 max-w-md",children:[{v:"15+",l:"Years"},{v:"1.2K+",l:"Clients"},{v:"100%",l:"Compliance"}].map(e=>L.jsxs("div",{className:"glass rounded-2xl p-4 text-center shadow-card",children:[L.jsx("div",{className:"text-2xl font-bold text-gradient",children:e.v}),L.jsx("div",{className:"text-xs text-muted-foreground mt-1",children:e.l})]},e.l))})]}),L.jsxs(Fi.div,{"data-hero-fade":!0,className:"relative",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:1,ease:"easeOut",delay:.5},children:[L.jsxs(Fi.div,{animate:{y:[0,-14,0]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},className:"relative rounded-[2rem] overflow-hidden shadow-elevated ring-1 ring-white/40",children:[L.jsx("img",{src:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",alt:"Chartered accountant analyzing financial reports",loading:"eager",className:"w-full h-[520px] object-cover"}),L.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-primary-deep/50 via-transparent to-accent-cyan/20"})]}),L.jsx("div",{className:"absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-primary opacity-25 blur-3xl"}),L.jsxs(Fi.div,{className:"absolute -left-6 top-10 glass-strong rounded-2xl p-4 shadow-glow flex items-center gap-3 animate-float-slow",initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{delay:1},children:[L.jsx("div",{className:"h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground",children:L.jsx(A_,{className:"h-5 w-5"})}),L.jsxs("div",{children:[L.jsx("div",{className:"text-sm font-semibold",children:"100% Compliant"}),L.jsx("div",{className:"text-xs text-muted-foreground",children:"ICAI Certified"})]})]}),L.jsxs(Fi.div,{className:"absolute -right-4 bottom-10 glass-strong rounded-2xl p-4 shadow-cyan-glow flex items-center gap-3 animate-float-slow",style:{animationDelay:"1.5s"},initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{delay:1.2},children:[L.jsx("div",{className:"h-10 w-10 rounded-xl bg-gradient-deep grid place-items-center text-primary-foreground",children:L.jsx(eS,{className:"h-5 w-5"})}),L.jsxs("div",{children:[L.jsx("div",{className:"text-sm font-semibold",children:"+38% Avg Savings"}),L.jsx("div",{className:"text-xs text-muted-foreground",children:"via Tax Planning"})]})]})]})]}),L.jsx("div",{className:"pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background z-10"})]})}function z2(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function G2(i,e,t){return e&&z2(i.prototype,e),i}var vn,oc,ai,Xr,jr,Ta,Yv,ms,ba,qv,yr,Ni,$v,Kv=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},Zv=1,_a=[],at=[],rr=[],vo=Date.now,Wh=function(e,t){return t},H2=function(){var e=ba.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,at),r.push.apply(r,rr),at=n,rr=r,Wh=function(a,o){return t[a](o)}},$r=function(e,t){return~rr.indexOf(e)&&rr[rr.indexOf(e)+1][t]},yo=function(e){return!!~qv.indexOf(e)},Nn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Ln=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Pl="scrollLeft",Dl="scrollTop",Xh=function(){return yr&&yr.isPressed||at.cache++},Fc=function(e,t){var n=function r(s){if(s||s===0){Zv&&(ai.history.scrollRestoration="manual");var a=yr&&yr.isPressed;s=r.v=Math.round(s)||(yr&&yr.iOS?1:0),e(s),r.cacheID=at.cache,a&&Wh("ss",s)}else(t||at.cache!==r.cacheID||Wh("ref"))&&(r.cacheID=at.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Bn={s:Pl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Fc(function(i){return arguments.length?ai.scrollTo(i,an.sc()):ai.pageXOffset||Xr[Pl]||jr[Pl]||Ta[Pl]||0})},an={s:Dl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:Fc(function(i){return arguments.length?ai.scrollTo(Bn.sc(),i):ai.pageYOffset||Xr[Dl]||jr[Dl]||Ta[Dl]||0})},Gn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},W2=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ns=function(e,t){var n=t.s,r=t.sc;yo(e)&&(e=Xr.scrollingElement||jr);var s=at.indexOf(e),a=r===an.sc?1:2;!~s&&(s=at.push(e)-1),at[s+a]||Nn(e,"scroll",Xh);var o=at[s+a],l=o||(at[s+a]=Fc($r(e,n),!0)||(yo(e)?r:Fc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},jh=function(e,t,n){var r=e,s=e,a=vo(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=vo();_||p-a>l?(s=r,r=g,o=a,a=p):n?r+=g:r=s+(g-s)/(p-o)*(a-o)},h=function(){s=r=n?0:r,o=a=0},f=function(g){var _=o,p=s,m=vo();return(g||g===0)&&g!==r&&u(g),a===o||m-o>c?0:(r+(n?p:-p))/((n?m:a)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Qa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},r_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Jv=function(){ba=vn.core.globals().ScrollTrigger,ba&&ba.core&&H2()},Qv=function(e){return vn=e||Kv(),!oc&&vn&&typeof document<"u"&&document.body&&(ai=window,Xr=document,jr=Xr.documentElement,Ta=Xr.body,qv=[ai,Xr,jr,Ta],vn.utils.clamp,$v=vn.core.context||function(){},ms="onpointerenter"in Ta?"pointer":"mouse",Yv=qt.isTouch=ai.matchMedia&&ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ni=qt.eventTypes=("ontouchstart"in jr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in jr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Zv=0},500),oc=1),ba||Jv(),oc};Bn.op=an;at.cache=0;var qt=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){oc||Qv(vn)||console.warn("Please gsap.registerPlugin(Observer)"),ba||Jv();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,x=n.onDrag,M=n.onPress,y=n.onRelease,A=n.onRight,b=n.onLeft,w=n.onUp,v=n.onDown,T=n.onChangeX,C=n.onChangeY,P=n.onChange,N=n.onToggleX,G=n.onToggleY,V=n.onHover,I=n.onHoverEnd,F=n.onMove,O=n.ignoreCheck,q=n.isNormalizer,K=n.onGestureStart,D=n.onGestureEnd,le=n.onWheel,Te=n.onEnable,Ye=n.onDisable,Ve=n.onClick,Ie=n.scrollSpeed,Q=n.capture,ce=n.allowClicks,ae=n.lockAxis,Ce=n.onLockAxis;this.target=o=Gn(o)||jr,this.vars=n,d&&(d=vn.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,Ie=Ie||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ai.getComputedStyle(Ta).lineHeight)||22);var ke,Pe,tt,Ae,Ge,Qe,ze,j=this,lt=0,Ut=0,B=n.passive||!u&&n.passive!==!1,Ke=ns(o,Bn),je=ns(o,an),ct=Ke(),ge=je(),Je=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ni[0]==="pointerdown",R=yo(o),S=o.ownerDocument||Xr,z=[0,0,0],Z=[0,0,0],te=0,de=function(){return te=vo()},ie=function(he,Oe){return(j.event=he)&&d&&W2(he.target,d)||Oe&&Je&&he.pointerType!=="touch"||O&&O(he,Oe)},$=function(){j._vx.reset(),j._vy.reset(),Pe.pause(),h&&h(j)},ee=function(){var he=j.deltaX=r_(z),Oe=j.deltaY=r_(Z),re=Math.abs(he)>=r,Be=Math.abs(Oe)>=r;P&&(re||Be)&&P(j,he,Oe,z,Z),re&&(A&&j.deltaX>0&&A(j),b&&j.deltaX<0&&b(j),T&&T(j),N&&j.deltaX<0!=lt<0&&N(j),lt=j.deltaX,z[0]=z[1]=z[2]=0),Be&&(v&&j.deltaY>0&&v(j),w&&j.deltaY<0&&w(j),C&&C(j),G&&j.deltaY<0!=Ut<0&&G(j),Ut=j.deltaY,Z[0]=Z[1]=Z[2]=0),(Ae||tt)&&(F&&F(j),tt&&(p&&tt===1&&p(j),x&&x(j),tt=0),Ae=!1),Qe&&!(Qe=!1)&&Ce&&Ce(j),Ge&&(le(j),Ge=!1),ke=0},xe=function(he,Oe,re){z[re]+=he,Z[re]+=Oe,j._vx.update(he),j._vy.update(Oe),c?ke||(ke=requestAnimationFrame(ee)):ee()},Ee=function(he,Oe){ae&&!ze&&(j.axis=ze=Math.abs(he)>Math.abs(Oe)?"x":"y",Qe=!0),ze!=="y"&&(z[2]+=he,j._vx.update(he,!0)),ze!=="x"&&(Z[2]+=Oe,j._vy.update(Oe,!0)),c?ke||(ke=requestAnimationFrame(ee)):ee()},pe=function(he){if(!ie(he,1)){he=Qa(he,u);var Oe=he.clientX,re=he.clientY,Be=Oe-j.x,Le=re-j.y,Xe=j.isDragging;j.x=Oe,j.y=re,(Xe||(Be||Le)&&(Math.abs(j.startX-Oe)>=s||Math.abs(j.startY-re)>=s))&&(tt||(tt=Xe?2:1),Xe||(j.isDragging=!0),Ee(Be,Le))}},ue=j.onPress=function(se){ie(se,1)||se&&se.button||(j.axis=ze=null,Pe.pause(),j.isPressed=!0,se=Qa(se),lt=Ut=0,j.startX=j.x=se.clientX,j.startY=j.y=se.clientY,j._vx.reset(),j._vy.reset(),Nn(q?o:S,Ni[1],pe,B,!0),j.deltaX=j.deltaY=0,M&&M(j))},_e=j.onRelease=function(se){if(!ie(se,1)){Ln(q?o:S,Ni[1],pe,!0);var he=!isNaN(j.y-j.startY),Oe=j.isDragging,re=Oe&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),Be=Qa(se);!re&&he&&(j._vx.reset(),j._vy.reset(),u&&ce&&vn.delayedCall(.08,function(){if(vo()-te>300&&!se.defaultPrevented){if(se.target.click)se.target.click();else if(S.createEvent){var Le=S.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,ai,1,Be.screenX,Be.screenY,Be.clientX,Be.clientY,!1,!1,!1,!1,0,null),se.target.dispatchEvent(Le)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,h&&Oe&&!q&&Pe.restart(!0),tt&&ee(),m&&Oe&&m(j),y&&y(j,re)}},He=function(he){return he.touches&&he.touches.length>1&&(j.isGesturing=!0)&&K(he,j.isDragging)},qe=function(){return(j.isGesturing=!1)||D(j)},U=function(he){if(!ie(he)){var Oe=Ke(),re=je();xe((Oe-ct)*Ie,(re-ge)*Ie,1),ct=Oe,ge=re,h&&Pe.restart(!0)}},oe=function(he){if(!ie(he)){he=Qa(he,u),le&&(Ge=!0);var Oe=(he.deltaMode===1?l:he.deltaMode===2?ai.innerHeight:1)*g;xe(he.deltaX*Oe,he.deltaY*Oe,0),h&&!q&&Pe.restart(!0)}},J=function(he){if(!ie(he)){var Oe=he.clientX,re=he.clientY,Be=Oe-j.x,Le=re-j.y;j.x=Oe,j.y=re,Ae=!0,h&&Pe.restart(!0),(Be||Le)&&Ee(Be,Le)}},ye=function(he){j.event=he,V(j)},fe=function(he){j.event=he,I(j)},ne=function(he){return ie(he)||Qa(he,u)&&Ve(j)};Pe=j._dc=vn.delayedCall(f||.25,$).pause(),j.deltaX=j.deltaY=0,j._vx=jh(0,50,!0),j._vy=jh(0,50,!0),j.scrollX=Ke,j.scrollY=je,j.isDragging=j.isGesturing=j.isPressed=!1,$v(this),j.enable=function(se){return j.isEnabled||(Nn(R?S:o,"scroll",Xh),a.indexOf("scroll")>=0&&Nn(R?S:o,"scroll",U,B,Q),a.indexOf("wheel")>=0&&Nn(o,"wheel",oe,B,Q),(a.indexOf("touch")>=0&&Yv||a.indexOf("pointer")>=0)&&(Nn(o,Ni[0],ue,B,Q),Nn(S,Ni[2],_e),Nn(S,Ni[3],_e),ce&&Nn(o,"click",de,!0,!0),Ve&&Nn(o,"click",ne),K&&Nn(S,"gesturestart",He),D&&Nn(S,"gestureend",qe),V&&Nn(o,ms+"enter",ye),I&&Nn(o,ms+"leave",fe),F&&Nn(o,ms+"move",J)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=Ae=tt=!1,j._vx.reset(),j._vy.reset(),ct=Ke(),ge=je(),se&&se.type&&ue(se),Te&&Te(j)),j},j.disable=function(){j.isEnabled&&(_a.filter(function(se){return se!==j&&yo(se.target)}).length||Ln(R?S:o,"scroll",Xh),j.isPressed&&(j._vx.reset(),j._vy.reset(),Ln(q?o:S,Ni[1],pe,!0)),Ln(R?S:o,"scroll",U,Q),Ln(o,"wheel",oe,Q),Ln(o,Ni[0],ue,Q),Ln(S,Ni[2],_e),Ln(S,Ni[3],_e),Ln(o,"click",de,!0),Ln(o,"click",ne),Ln(S,"gesturestart",He),Ln(S,"gestureend",qe),Ln(o,ms+"enter",ye),Ln(o,ms+"leave",fe),Ln(o,ms+"move",J),j.isEnabled=j.isPressed=j.isDragging=!1,Ye&&Ye(j))},j.kill=j.revert=function(){j.disable();var se=_a.indexOf(j);se>=0&&_a.splice(se,1),yr===j&&(yr=0)},_a.push(j),q&&yo(o)&&(yr=j),j.enable(_)},G2(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();qt.version="3.15.0";qt.create=function(i){return new qt(i)};qt.register=Qv;qt.getAll=function(){return _a.slice()};qt.getById=function(i){return _a.filter(function(e){return e.vars.id===i})[0]};Kv()&&vn.registerPlugin(qt);var Re,ua,st,_t,ri,gt,lp,Oc,Go,So,ao,Ll,En,tu,Yh,Fn,s_,a_,fa,ey,af,ty,Un,qh,ny,iy,Br,$h,cp,Ea,up,Mo,Kh,of,Nl=1,An=Date.now,lf=An(),wi=0,oo=0,o_=function(e,t,n){var r=ni(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},l_=function(e,t){return t&&(!ni(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},X2=function i(){return oo&&requestAnimationFrame(i)},c_=function(){return tu=1},u_=function(){return tu=0},Yi=function(e){return e},lo=function(e){return Math.round(e*1e5)/1e5||0},ry=function(){return typeof window<"u"},sy=function(){return Re||ry()&&(Re=window.gsap)&&Re.registerPlugin&&Re},Os=function(e){return!!~lp.indexOf(e)},ay=function(e){return(e==="Height"?up:st["inner"+e])||ri["client"+e]||gt["client"+e]},oy=function(e){return $r(e,"getBoundingClientRect")||(Os(e)?function(){return hc.width=st.innerWidth,hc.height=up,hc}:function(){return xr(e)})},j2=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=$r(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?ay(s):e["client"+s])||0}},Y2=function(e,t){return!t||~rr.indexOf(e)?oy(e):function(){return hc}},er=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=$r(e,n))?a()-oy(e)()[s]:Os(e)?(ri[n]||gt[n])-ay(r):e[n]-e["offset"+r])},Il=function(e,t){for(var n=0;n<fa.length;n+=3)(!t||~t.indexOf(fa[n+1]))&&e(fa[n],fa[n+1],fa[n+2])},ni=function(e){return typeof e=="string"},Cn=function(e){return typeof e=="function"},co=function(e){return typeof e=="number"},gs=function(e){return typeof e=="object"},eo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},aa=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},oa=Math.abs,ly="left",cy="top",fp="right",hp="bottom",Ds="width",Ls="height",To="Right",bo="Left",Eo="Top",Ao="Bottom",Jt="padding",vi="margin",Ba="Width",dp="Height",rn="px",yi=function(e){return st.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},q2=function(e){var t=yi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},f_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xr=function(e,t){var n=t&&yi(e)[Yh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Bc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},uy=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},$2=function(e){return function(t){return Re.utils.snap(uy(e),t)}},pp=function(e){var t=Re.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},K2=function(e){return function(t,n){return pp(uy(e))(t,n.direction)}},Ul=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},pn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},dn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Fl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},h_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ol={toggleActions:"play",anticipatePin:0},kc={top:0,left:0,center:.5,bottom:1,right:1},lc=function(e,t){if(ni(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in kc?kc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Bl=function(e,t,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=_t.createElement("div"),_=Os(n)||$r(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?gt:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,M=x?c:u,y="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(r===an?fp:hp)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+r.op.d2],cc(g,0,r,x),g},cc=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+Ba]=1,s["border"+o+Ba]=0,s[n.p]=t+"px",Re.set(e,s)},it=[],Zh={},Ho,d_=function(){return An()-wi>34&&(Ho||(Ho=requestAnimationFrame(Tr)))},la=function(){(!Un||!Un.isPressed||Un.startX>gt.clientWidth)&&(at.cache++,Un?Ho||(Ho=requestAnimationFrame(Tr)):Tr(),wi||ks("scrollStart"),wi=An())},cf=function(){iy=st.innerWidth,ny=st.innerHeight},uo=function(e){at.cache++,(e===!0||!En&&!ty&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!qh||iy!==st.innerWidth||Math.abs(st.innerHeight-ny)>st.innerHeight*.25))&&Oc.restart(!0)},Bs={},Z2=[],fy=function i(){return dn(ot,"scrollEnd",i)||bs(!0)},ks=function(e){return Bs[e]&&Bs[e].map(function(t){return t()})||Z2},ti=[],hy=function(e){for(var t=0;t<ti.length;t+=5)(!e||ti[t+4]&&ti[t+4].query===e)&&(ti[t].style.cssText=ti[t+1],ti[t].getBBox&&ti[t].setAttribute("transform",ti[t+2]||""),ti[t+3].uncache=1)},dy=function(){return at.forEach(function(e){return Cn(e)&&++e.cacheID&&(e.rec=e())})},mp=function(e,t){var n;for(Fn=0;Fn<it.length;Fn++)n=it[Fn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Mo=!0,t&&hy(t),t||ks("revert")},py=function(e,t){at.cache++,(t||!On)&&at.forEach(function(n){return Cn(n)&&n.cacheID++&&(n.rec=0)}),ni(e)&&(st.history.scrollRestoration=cp=e)},On,Ns=0,p_,J2=function(){if(p_!==Ns){var e=p_=Ns;requestAnimationFrame(function(){return e===Ns&&bs(!0)})}},my=function(){gt.appendChild(Ea),up=!Un&&Ea.offsetHeight||st.innerHeight,gt.removeChild(Ea)},m_=function(e){return Go(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},bs=function(e,t){if(ri=_t.documentElement,gt=_t.body,lp=[st,_t,ri,gt],wi&&!e&&!Mo){pn(ot,"scrollEnd",fy);return}my(),On=ot.isRefreshing=!0,Mo||dy();var n=ks("refreshInit");ey&&ot.sort(),t||mp(),at.forEach(function(r){Cn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),it.slice(0).forEach(function(r){return r.refresh()}),Mo=!1,it.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Kh=1,m_(!0),it.forEach(function(r){var s=er(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),m_(!1),Kh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),at.forEach(function(r){Cn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),py(cp,1),Oc.pause(),Ns++,On=2,Tr(2),it.forEach(function(r){return Cn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),On=ot.isRefreshing=!1,ks("refresh")},Jh=0,uc=1,wo,Tr=function(e){if(e===2||!On&&!Mo){ot.isUpdating=!0,wo&&wo.update(0);var t=it.length,n=An(),r=n-lf>=50,s=t&&it[0].scroll();if(uc=Jh>s?-1:1,On||(Jh=s),r&&(wi&&!tu&&n-wi>200&&(wi=0,ks("scrollEnd")),ao=lf,lf=n),uc<0){for(Fn=t;Fn-- >0;)it[Fn]&&it[Fn].update(0,r);uc=1}else for(Fn=0;Fn<t;Fn++)it[Fn]&&it[Fn].update(0,r);ot.isUpdating=!1}Ho=0},Qh=[ly,cy,hp,fp,vi+Ao,vi+To,vi+Eo,vi+bo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],fc=Qh.concat([Ds,Ls,"boxSizing","max"+Ba,"max"+dp,"position",vi,Jt,Jt+Eo,Jt+To,Jt+Ao,Jt+bo]),Q2=function(e,t,n){Aa(n);var r=e._gsap;if(r.spacerIsNative)Aa(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},uf=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Qh.length,a=t.style,o=e.style,l;s--;)l=Qh[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[hp]=o[fp]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ds]=Bc(e,Bn)+rn,a[Ls]=Bc(e,an)+rn,a[Jt]=o[vi]=o[cy]=o[ly]="0",Aa(r),o[Ds]=o["max"+Ba]=n[Ds],o[Ls]=o["max"+dp]=n[Ls],o[Jt]=n[Jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},e3=/([A-Z])/g,Aa=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(e3,"-$1").toLowerCase())}},kl=function(e){for(var t=fc.length,n=e.style,r=[],s=0;s<t;s++)r.push(fc[s],n[fc[s]]);return r.t=e,r},t3=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},hc={left:0,top:0},g_=function(e,t,n,r,s,a,o,l,c,u,h,f,d,g){Cn(e)&&(e=e(l)),ni(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?lc("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,x;if(d&&d.seek(0),isNaN(e)||(e=+e),co(e))d&&(e=Re.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&cc(o,n,r,!0);else{Cn(t)&&(t=t(l));var M=(e||"0").split(" "),y,A,b,w;x=Gn(t,l)||gt,y=xr(x)||{},(!y||!y.left&&!y.top)&&yi(x).display==="none"&&(w=x.style.display,x.style.display="block",y=xr(x),w?x.style.display=w:x.style.removeProperty("display")),A=lc(M[0],y[r.d]),b=lc(M[1]||"0",n),e=y[r.p]-c[r.p]-u+A+s-b,o&&cc(o,b,r,n-b<20||o._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var v=e+n,T=a._isStart;p="scroll"+r.d2,cc(a,v,r,T&&v>20||!T&&(h?Math.max(gt[p],ri[p]):a.parentNode[p])<=v+1),h&&(c=xr(o),h&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+rn))}return d&&x&&(p=xr(x),d.seek(f),m=xr(x),d._caScrollDist=p[r.p]-m[r.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},n3=/(webkit|moz|length|cssText|inset)/i,__=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===gt){e._stOrig=s.cssText,o=yi(e);for(a in o)!+a&&!n3.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},gy=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},Vl=function(e,t,n){var r={};r[t.p]="+="+n,Re.set(e,r)},x_=function(e,t){var n=ns(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,g={};c=c||n();var _=gy(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[r]=o,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){at.cache++,a.tween&&Tr()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Re.to(e,l),f};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},pn(e,"wheel",n.wheelHandler),ot.isTouch&&pn(e,"touchmove",n.wheelHandler),s},ot=(function(){function i(t,n){ua||i.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),$h(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!oo){this.update=this.refresh=this.kill=Yi;return}n=f_(ni(n)||co(n)||n.nodeType?{trigger:n}:n,Ol);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,M=s.once,y=s.snap,A=s.pinReparent,b=s.pinSpacer,w=s.containerAnimation,v=s.fastScrollEnd,T=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Bn:an,P=!h&&h!==0,N=Gn(n.scroller||st),G=Re.core.getCache(N),V=Os(N),I=("pinType"in n?n.pinType:$r(N,"pinType")||V&&"fixed")==="fixed",F=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=P&&n.toggleActions.split(" "),q="markers"in n?n.markers:Ol.markers,K=V?0:parseFloat(yi(N)["border"+C.p2+Ba])||0,D=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Te=j2(N,V,C),Ye=Y2(N,V),Ve=0,Ie=0,Q=0,ce=ns(N,C),ae,Ce,ke,Pe,tt,Ae,Ge,Qe,ze,j,lt,Ut,B,Ke,je,ct,ge,Je,R,S,z,Z,te,de,ie,$,ee,xe,Ee,pe,ue,_e,He,qe,U,oe,J,ye,fe;if(D._startClamp=D._endClamp=!1,D._dir=C,p*=45,D.scroller=N,D.scroll=w?w.time.bind(w):ce,Pe=ce(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(ey=1,n.refreshPriority===-9999&&(wo=D)),G.tweenScroll=G.tweenScroll||{top:x_(N,an),left:x_(N,Bn)},D.tweenTo=ae=G.tweenScroll[C.p],D.scrubDuration=function(re){He=co(re)&&re,He?_e?_e.duration(re):_e=Re.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:He,paused:!0,onComplete:function(){return m&&m(D)}}):(_e&&_e.progress(1).kill(),_e=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(h),pe=0,l||(l=r.vars.id)),y&&((!gs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in gt.style&&Re.set(V?[gt,ri]:N,{scrollBehavior:"auto"}),at.forEach(function(re){return Cn(re)&&re.target===(V?_t.scrollingElement||ri:N)&&(re.smooth=!1)}),ke=Cn(y.snapTo)?y.snapTo:y.snapTo==="labels"?$2(r):y.snapTo==="labelsDirectional"?K2(r):y.directional!==!1?function(re,Be){return pp(y.snapTo)(re,An()-Ie<500?0:Be.direction)}:Re.utils.snap(y.snapTo),qe=y.duration||{min:.1,max:2},qe=gs(qe)?So(qe.min,qe.max):So(qe,qe),U=Re.delayedCall(y.delay||He/2||.1,function(){var re=ce(),Be=An()-Ie<500,Le=ae.tween;if((Be||Math.abs(D.getVelocity())<10)&&!Le&&!tu&&Ve!==re){var Xe=(re-Ae)/Ke,$t=r&&!P?r.totalProgress():Xe,rt=Be?0:($t-ue)/(An()-ao)*1e3||0,Lt=Re.utils.clamp(-Xe,1-Xe,oa(rt/2)*rt/.185),Nt=Xe+(y.inertia===!1?0:Lt),Ct,Mt,mt=y,Sn=mt.onStart,Rt=mt.onInterrupt,cn=mt.onComplete;if(Ct=ke(Nt,D),co(Ct)||(Ct=Nt),Mt=Math.max(0,Math.round(Ae+Ct*Ke)),re<=Ge&&re>=Ae&&Mt!==re){if(Le&&!Le._initted&&Le.data<=oa(Mt-re))return;y.inertia===!1&&(Lt=Ct-Xe),ae(Mt,{duration:qe(oa(Math.max(oa(Nt-$t),oa(Ct-$t))*.185/rt/.05||0)),ease:y.ease||"power3",data:oa(Mt-re),onInterrupt:function(){return U.restart(!0)&&Rt&&aa(D,Rt)},onComplete:function(){D.update(),Ve=ce(),r&&!P&&(_e?_e.resetTo("totalProgress",Ct,r._tTime/r._tDur):r.progress(Ct)),pe=ue=r&&!P?r.totalProgress():D.progress,x&&x(D),cn&&aa(D,cn)}},re,Lt*Ke,Mt-re-Lt*Ke),Sn&&aa(D,Sn,ae.tween)}}else D.isActive&&Ve!==re&&U.restart(!0)}).pause()),l&&(Zh[l]=D),f=D.trigger=Gn(f||d!==!0&&d),fe=f&&f._gsap&&f._gsap.stRevert,fe&&(fe=fe(D)),d=d===!0?f:Gn(d),ni(o)&&(o={targets:f,className:o}),d&&(g===!1||g===vi||(g=!g&&d.parentNode&&d.parentNode.style&&yi(d.parentNode).display==="flex"?!1:Jt),D.pin=d,Ce=Re.core.getCache(d),Ce.spacer?je=Ce.pinState:(b&&(b=Gn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Ce.spacerIsNative=!!b,b&&(Ce.spacerState=kl(b))),Ce.spacer=Je=b||_t.createElement("div"),Je.classList.add("pin-spacer"),l&&Je.classList.add("pin-spacer-"+l),Ce.pinState=je=kl(d)),n.force3D!==!1&&Re.set(d,{force3D:!0}),D.spacer=Je=Ce.spacer,Ee=yi(d),de=Ee[g+C.os2],S=Re.getProperty(d),z=Re.quickSetter(d,C.a,rn),uf(d,Je,Ee),ge=kl(d)),q){Ut=gs(q)?f_(q,h_):h_,j=Bl("scroller-start",l,N,C,Ut,0),lt=Bl("scroller-end",l,N,C,Ut,0,j),R=j["offset"+C.op.d2];var ne=Gn($r(N,"content")||N);Qe=this.markerStart=Bl("start",l,ne,C,Ut,R,0,w),ze=this.markerEnd=Bl("end",l,ne,C,Ut,R,0,w),w&&(ye=Re.quickSetter([Qe,ze],C.a,rn)),!I&&!(rr.length&&$r(N,"fixedMarkers")===!0)&&(q2(V?gt:N),Re.set([j,lt],{force3D:!0}),$=Re.quickSetter(j,C.a,rn),xe=Re.quickSetter(lt,C.a,rn))}if(w){var se=w.vars.onUpdate,he=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){D.update(0,0,1),se&&se.apply(w,he||[])})}if(D.previous=function(){return it[it.indexOf(D)-1]},D.next=function(){return it[it.indexOf(D)+1]},D.revert=function(re,Be){if(!Be)return D.kill(!0);var Le=re!==!1||!D.enabled,Xe=En;Le!==D.isReverted&&(Le&&(oe=Math.max(ce(),D.scroll.rec||0),Q=D.progress,J=r&&r.progress()),Qe&&[Qe,ze,j,lt].forEach(function($t){return $t.style.display=Le?"none":"block"}),Le&&(En=D,D.update(Le)),d&&(!A||!D.isActive)&&(Le?Q2(d,Je,je):uf(d,Je,yi(d),ie)),Le||D.update(Le),En=Xe,D.isReverted=Le)},D.refresh=function(re,Be,Le,Xe){if(!((En||!D.enabled)&&!Be)){if(d&&re&&wi){pn(i,"scrollEnd",fy);return}!On&&le&&le(D),En=D,ae.tween&&!Le&&(ae.tween.kill(),ae.tween=0),_e&&_e.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Se){return Se.vars.immediateRender&&Se.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var $t=Te(),rt=Ye(),Lt=w?w.duration():er(N,C),Nt=Ke<=.01||!Ke,Ct=0,Mt=Xe||0,mt=gs(Le)?Le.end:n.end,Sn=n.endTrigger||f,Rt=gs(Le)?Le.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),cn=D.pinnedContainer=n.pinnedContainer&&Gn(n.pinnedContainer,D),Zn=f&&Math.max(0,it.indexOf(D))||0,Kt=Zn,nn,un,cr,Gs,fn,Ht,di,E,k,Y,H,W,ve;for(q&&gs(Le)&&(W=Re.getProperty(j,C.p),ve=Re.getProperty(lt,C.p));Kt-- >0;)Ht=it[Kt],Ht.end||Ht.refresh(0,1)||(En=D),di=Ht.pin,di&&(di===f||di===d||di===cn)&&!Ht.isReverted&&(Y||(Y=[]),Y.unshift(Ht),Ht.revert(!0,!0)),Ht!==it[Kt]&&(Zn--,Kt--);for(Cn(Rt)&&(Rt=Rt(D)),Rt=o_(Rt,"start",D),Ae=g_(Rt,f,$t,C,ce(),Qe,j,D,rt,K,I,Lt,w,D._startClamp&&"_startClamp")||(d?-.001:0),Cn(mt)&&(mt=mt(D)),ni(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(ni(Rt)?Rt.split(" ")[0]:"")+mt:(Ct=lc(mt.substr(2),$t),mt=ni(Rt)?Rt:(w?Re.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Ae):Ae)+Ct,Sn=f)),mt=o_(mt,"end",D),Ge=Math.max(Ae,g_(mt||(Sn?"100% 0":Lt),Sn,$t,C,ce()+Ct,ze,lt,D,rt,K,I,Lt,w,D._endClamp&&"_endClamp"))||-.001,Ct=0,Kt=Zn;Kt--;)Ht=it[Kt]||{},di=Ht.pin,di&&Ht.start-Ht._pinPush<=Ae&&!w&&Ht.end>0&&(nn=Ht.end-(D._startClamp?Math.max(0,Ht.start):Ht.start),(di===f&&Ht.start-Ht._pinPush<Ae||di===cn)&&isNaN(Rt)&&(Ct+=nn*(1-Ht.progress)),di===d&&(Mt+=nn));if(Ae+=Ct,Ge+=Ct,D._startClamp&&(D._startClamp+=Ct),D._endClamp&&!On&&(D._endClamp=Ge||-.001,Ge=Math.min(Ge,er(N,C))),Ke=Ge-Ae||(Ae-=.01)&&.001,Nt&&(Q=Re.utils.clamp(0,1,Re.utils.normalize(Ae,Ge,oe))),D._pinPush=Mt,Qe&&Ct&&(nn={},nn[C.a]="+="+Ct,cn&&(nn[C.p]="-="+ce()),Re.set([Qe,ze],nn)),d&&!(Kh&&D.end>=er(N,C)))nn=yi(d),Gs=C===an,cr=ce(),Z=parseFloat(S(C.a))+Mt,!Lt&&Ge>1&&(H=(V?_t.scrollingElement||ri:N).style,H={style:H,value:H["overflow"+C.a.toUpperCase()]},V&&yi(gt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(H.style["overflow"+C.a.toUpperCase()]="scroll")),uf(d,Je,nn),ge=kl(d),un=xr(d,!0),E=I&&ns(N,Gs?Bn:an)(),g?(ie=[g+C.os2,Ke+Mt+rn],ie.t=Je,Kt=g===Jt?Bc(d,C)+Ke+Mt:0,Kt&&(ie.push(C.d,Kt+rn),Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=Kt+rn)),Aa(ie),cn&&it.forEach(function(Se){Se.pin===cn&&Se.vars.pinSpacing!==!1&&(Se._subPinOffset=!0)}),I&&ce(oe)):(Kt=Bc(d,C),Kt&&Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=Kt+rn)),I&&(fn={top:un.top+(Gs?cr-Ae:E)+rn,left:un.left+(Gs?E:cr-Ae)+rn,boxSizing:"border-box",position:"fixed"},fn[Ds]=fn["max"+Ba]=Math.ceil(un.width)+rn,fn[Ls]=fn["max"+dp]=Math.ceil(un.height)+rn,fn[vi]=fn[vi+Eo]=fn[vi+To]=fn[vi+Ao]=fn[vi+bo]="0",fn[Jt]=nn[Jt],fn[Jt+Eo]=nn[Jt+Eo],fn[Jt+To]=nn[Jt+To],fn[Jt+Ao]=nn[Jt+Ao],fn[Jt+bo]=nn[Jt+bo],ct=t3(je,fn,A),On&&ce(0)),r?(k=r._initted,af(1),r.render(r.duration(),!0,!0),te=S(C.a)-Z+Ke+Mt,ee=Math.abs(Ke-te)>1,I&&ee&&ct.splice(ct.length-2,2),r.render(0,!0,!0),k||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),af(0)):te=Ke,H&&(H.value?H.style["overflow"+C.a.toUpperCase()]=H.value:H.style.removeProperty("overflow-"+C.a));else if(f&&ce()&&!w)for(un=f.parentNode;un&&un!==gt;)un._pinOffset&&(Ae-=un._pinOffset,Ge-=un._pinOffset),un=un.parentNode;Y&&Y.forEach(function(Se){return Se.revert(!1,!0)}),D.start=Ae,D.end=Ge,Pe=tt=On?oe:ce(),!w&&!On&&(Pe<oe&&ce(oe),D.scroll.rec=0),D.revert(!1,!0),Ie=An(),U&&(Ve=-1,U.restart(!0)),En=0,r&&P&&(r._initted||J)&&r.progress()!==J&&r.progress(J||0,!0).render(r.time(),!0,!0),(Nt||Q!==D.progress||w||_||r&&!r._initted)&&(r&&!P&&(r._initted||Q||r.vars.immediateRender!==!1)&&r.totalProgress(w&&Ae<-.001&&!Q?Re.utils.normalize(Ae,Ge,0):Q,!0),D.progress=Nt||(Pe-Ae)/Ke===Q?0:Q),d&&g&&(Je._pinOffset=Math.round(D.progress*te)),_e&&_e.invalidate(),isNaN(W)||(W-=Re.getProperty(j,C.p),ve-=Re.getProperty(lt,C.p),Vl(j,C,W),Vl(Qe,C,W-(Xe||0)),Vl(lt,C,ve),Vl(ze,C,ve-(Xe||0))),Nt&&!On&&D.update(),u&&!On&&!B&&(B=!0,u(D),B=!1)}},D.getVelocity=function(){return(ce()-tt)/(An()-ao)*1e3||0},D.endAnimation=function(){eo(D.callbackAnimation),r&&(_e?_e.progress(1):r.paused()?P||eo(r,D.direction<0,1):eo(r,r.reversed()))},D.labelToScroll=function(re){return r&&r.labels&&(Ae||D.refresh()||Ae)+r.labels[re]/r.duration()*Ke||0},D.getTrailing=function(re){var Be=it.indexOf(D),Le=D.direction>0?it.slice(0,Be).reverse():it.slice(Be+1);return(ni(re)?Le.filter(function(Xe){return Xe.vars.preventOverlaps===re}):Le).filter(function(Xe){return D.direction>0?Xe.end<=Ae:Xe.start>=Ge})},D.update=function(re,Be,Le){if(!(w&&!Le&&!re)){var Xe=On===!0?oe:D.scroll(),$t=re?0:(Xe-Ae)/Ke,rt=$t<0?0:$t>1?1:$t||0,Lt=D.progress,Nt,Ct,Mt,mt,Sn,Rt,cn,Zn;if(Be&&(tt=Pe,Pe=w?ce():Xe,y&&(ue=pe,pe=r&&!P?r.totalProgress():rt)),p&&d&&!En&&!Nl&&wi&&(!rt&&Ae<Xe+(Xe-tt)/(An()-ao)*p?rt=1e-4:rt===1&&Ge>Xe+(Xe-tt)/(An()-ao)*p&&(rt=.9999)),rt!==Lt&&D.enabled){if(Nt=D.isActive=!!rt&&rt<1,Ct=!!Lt&&Lt<1,Rt=Nt!==Ct,Sn=Rt||!!rt!=!!Lt,D.direction=rt>Lt?1:-1,D.progress=rt,Sn&&!En&&(Mt=rt&&!Lt?0:rt===1?1:Lt===1?2:3,P&&(mt=!Rt&&O[Mt+1]!=="none"&&O[Mt+1]||O[Mt],Zn=r&&(mt==="complete"||mt==="reset"||mt in r))),T&&(Rt||Zn)&&(Zn||h||!r)&&(Cn(T)?T(D):D.getTrailing(T).forEach(function(cr){return cr.endAnimation()})),P||(_e&&!En&&!Nl?(_e._dp._time-_e._start!==_e._time&&_e.render(_e._dp._time-_e._start),_e.resetTo?_e.resetTo("totalProgress",rt,r._tTime/r._tDur):(_e.vars.totalProgress=rt,_e.invalidate().restart())):r&&r.totalProgress(rt,!!(En&&(Ie||re)))),d){if(re&&g&&(Je.style[g+C.os2]=de),!I)z(lo(Z+te*rt));else if(Sn){if(cn=!re&&rt>Lt&&Ge+1>Xe&&Xe+1>=er(N,C),A)if(!re&&(Nt||cn)){var Kt=xr(d,!0),nn=Xe-Ae;__(d,gt,Kt.top+(C===an?nn:0)+rn,Kt.left+(C===an?0:nn)+rn)}else __(d,Je);Aa(Nt||cn?ct:ge),ee&&rt<1&&Nt||z(Z+(rt===1&&!cn?te:0))}}y&&!ae.tween&&!En&&!Nl&&U.restart(!0),o&&(Rt||M&&rt&&(rt<1||!of))&&Go(o.targets).forEach(function(cr){return cr.classList[Nt||M?"add":"remove"](o.className)}),a&&!P&&!re&&a(D),Sn&&!En?(P&&(Zn&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),a&&a(D)),(Rt||!of)&&(c&&Rt&&aa(D,c),F[Mt]&&aa(D,F[Mt]),M&&(rt===1?D.kill(!1,1):F[Mt]=0),Rt||(Mt=rt===1?1:3,F[Mt]&&aa(D,F[Mt]))),v&&!Nt&&Math.abs(D.getVelocity())>(co(v)?v:2500)&&(eo(D.callbackAnimation),_e?_e.progress(1):eo(r,mt==="reverse"?1:!rt,1))):P&&a&&!En&&a(D)}if(xe){var un=w?Xe/w.duration()*(w._caScrollDist||0):Xe;$(un+(j._isFlipped?1:0)),xe(un)}ye&&ye(-Xe/w.duration()*(w._caScrollDist||0))}},D.enable=function(re,Be){D.enabled||(D.enabled=!0,pn(N,"resize",uo),V||pn(N,"scroll",la),le&&pn(i,"refreshInit",le),re!==!1&&(D.progress=Q=0,Pe=tt=Ve=ce()),Be!==!1&&D.refresh())},D.getTween=function(re){return re&&ae?ae.tween:_e},D.setPositions=function(re,Be,Le,Xe){if(w){var $t=w.scrollTrigger,rt=w.duration(),Lt=$t.end-$t.start;re=$t.start+Lt*re/rt,Be=$t.start+Lt*Be/rt}D.refresh(!1,!1,{start:l_(re,Le&&!!D._startClamp),end:l_(Be,Le&&!!D._endClamp)},Xe),D.update()},D.adjustPinSpacing=function(re){if(ie&&re){var Be=ie.indexOf(C.d)+1;ie[Be]=parseFloat(ie[Be])+re+rn,ie[1]=parseFloat(ie[1])+re+rn,Aa(ie)}},D.disable=function(re,Be){if(re!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Be||_e&&_e.pause(),oe=0,Ce&&(Ce.uncache=1),le&&dn(i,"refreshInit",le),U&&(U.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!V)){for(var Le=it.length;Le--;)if(it[Le].scroller===N&&it[Le]!==D)return;dn(N,"resize",uo),V||dn(N,"scroll",la)}},D.kill=function(re,Be){D.disable(re,Be),_e&&!Be&&_e.kill(),l&&delete Zh[l];var Le=it.indexOf(D);Le>=0&&it.splice(Le,1),Le===Fn&&uc>0&&Fn--,Le=0,it.forEach(function(Xe){return Xe.scroller===D.scroller&&(Le=1)}),Le||On||(D.scroll.rec=0),r&&(r.scrollTrigger=null,re&&r.revert({kill:!1}),Be||r.kill()),Qe&&[Qe,ze,j,lt].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),wo===D&&(wo=0),d&&(Ce&&(Ce.uncache=1),Le=0,it.forEach(function(Xe){return Xe.pin===d&&Le++}),Le||(Ce.spacer=0)),n.onKill&&n.onKill(D)},it.push(D),D.enable(!1,!1),fe&&fe(D),r&&r.add&&!Ke){var Oe=D.update;D.update=function(){D.update=Oe,at.cache++,Ae||Ge||D.refresh()},Re.delayedCall(.01,D.update),Ke=.01,Ae=Ge=0}else D.refresh();d&&J2()},i.register=function(n){return ua||(Re=n||sy(),ry()&&window.document&&i.enable(),ua=oo),ua},i.defaults=function(n){if(n)for(var r in n)Ol[r]=n[r];return Ol},i.disable=function(n,r){oo=0,it.forEach(function(a){return a[r?"kill":"disable"](n)}),dn(st,"wheel",la),dn(_t,"scroll",la),clearInterval(Ll),dn(_t,"touchcancel",Yi),dn(gt,"touchstart",Yi),Ul(dn,_t,"pointerdown,touchstart,mousedown",c_),Ul(dn,_t,"pointerup,touchend,mouseup",u_),Oc.kill(),Il(dn);for(var s=0;s<at.length;s+=3)Fl(dn,at[s],at[s+1]),Fl(dn,at[s],at[s+2])},i.enable=function(){if(st=window,_t=document,ri=_t.documentElement,gt=_t.body,Re){if(Go=Re.utils.toArray,So=Re.utils.clamp,$h=Re.core.context||Yi,af=Re.core.suppressOverwrites||Yi,cp=st.history.scrollRestoration||"auto",Jh=st.pageYOffset||0,Re.core.globals("ScrollTrigger",i),gt){oo=1,Ea=document.createElement("div"),Ea.style.height="100vh",Ea.style.position="absolute",my(),X2(),qt.register(Re),i.isTouch=qt.isTouch,Br=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),qh=qt.isTouch===1,pn(st,"wheel",la),lp=[st,_t,ri,gt],Re.matchMedia?(i.matchMedia=function(u){var h=Re.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Re.addEventListener("matchMediaInit",function(){dy(),mp()}),Re.addEventListener("matchMediaRevert",function(){return hy()}),Re.addEventListener("matchMedia",function(){bs(0,1),ks("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return cf(),cf})):console.warn("Requires GSAP 3.11.0 or later"),cf(),pn(_t,"scroll",la);var n=gt.hasAttribute("style"),r=gt.style,s=r.borderTopStyle,a=Re.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=xr(gt),an.m=Math.round(o.top+an.sc())||0,Bn.m=Math.round(o.left+Bn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),Ll=setInterval(d_,250),Re.delayedCall(.5,function(){return Nl=0}),pn(_t,"touchcancel",Yi),pn(gt,"touchstart",Yi),Ul(pn,_t,"pointerdown,touchstart,mousedown",c_),Ul(pn,_t,"pointerup,touchend,mouseup",u_),Yh=Re.utils.checkPrefix("transform"),fc.push(Yh),ua=An(),Oc=Re.delayedCall(.2,bs).pause(),fa=[_t,"visibilitychange",function(){var u=st.innerWidth,h=st.innerHeight;_t.hidden?(s_=u,a_=h):(s_!==u||a_!==h)&&uo()},_t,"DOMContentLoaded",bs,st,"load",bs,st,"resize",uo],Il(pn),it.forEach(function(u){return u.enable(0,1)}),l=0;l<at.length;l+=3)Fl(dn,at[l],at[l+1]),Fl(dn,at[l],at[l+2])}else if(_t){var c=function u(){i.enable(),_t.removeEventListener("DOMContentLoaded",u)};_t.addEventListener("DOMContentLoaded",c)}}},i.config=function(n){"limitCallbacks"in n&&(of=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Ll)||(Ll=r)&&setInterval(d_,r),"ignoreMobileResize"in n&&(qh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Il(dn)||Il(pn,n.autoRefreshEvents||"none"),ty=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Gn(n),a=at.indexOf(s),o=Os(s);~a&&at.splice(a,o?6:2),r&&(o?rr.unshift(st,r,gt,r,ri,r):rr.unshift(s,r))},i.clearMatchMedia=function(n){it.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(ni(n)?Gn(n):n).getBoundingClientRect(),o=a[s?Ds:Ls]*r||0;return s?a.right-o>0&&a.left+o<st.innerWidth:a.bottom-o>0&&a.top+o<st.innerHeight},i.positionInViewport=function(n,r,s){ni(n)&&(n=Gn(n));var a=n.getBoundingClientRect(),o=a[s?Ds:Ls],l=r==null?o/2:r in kc?kc[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/st.innerWidth:(a.top+l)/st.innerHeight},i.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Bs.killAll||[];Bs={},r.forEach(function(s){return s()})}},i})();ot.version="3.15.0";ot.saveStyles=function(i){return i?Go(i).forEach(function(e){if(e&&e.style){var t=ti.indexOf(e);t>=0&&ti.splice(t,5),ti.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),$h())}}):ti};ot.revert=function(i,e){return mp(!i,e)};ot.create=function(i,e){return new ot(i,e)};ot.refresh=function(i){return i?uo(!0):(ua||ot.register())&&bs(!0)};ot.update=function(i){return++at.cache&&Tr(i===!0?2:0)};ot.clearScrollMemory=py;ot.maxScroll=function(i,e){return er(i,e?Bn:an)};ot.getScrollFunc=function(i,e){return ns(Gn(i),e?Bn:an)};ot.getById=function(i){return Zh[i]};ot.getAll=function(){return it.filter(function(i){return i.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!wi};ot.snapDirectional=pp;ot.addEventListener=function(i,e){var t=Bs[i]||(Bs[i]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(i,e){var t=Bs[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ot.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=Re.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Cn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Cn(s)&&(s=s(),pn(ot,"refresh",function(){return s=e.batchMax()})),Go(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(ot.create(c))}),t};var v_=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},ff=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===ri&&i(gt,t)},zl={auto:1,scroll:1},i3=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Re.core.getCache(s),o=An(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(zl[(l=yi(s)).overflowY]||zl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Os(s)&&(zl[(l=yi(s)).overflowY]||zl[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},_y=function(e,t,n,r){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&i3,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&pn(_t,qt.eventTypes[0],S_,!1,!0)},onDisable:function(){return dn(_t,qt.eventTypes[0],S_,!0)}})},r3=/(input|label|select|textarea)/i,y_,S_=function(e){var t=r3.test(e.target.tagName);(t||y_)&&(e._gsapAllow=!0,y_=t)},s3=function(e){gs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Gn(e.target)||ri,u=Re.core.globals().ScrollSmoother,h=u&&u.get(),f=Br&&(e.content&&Gn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=ns(c,an),g=ns(c,Bn),_=1,p=(qt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,m=0,x=Cn(r)?function(){return r(o)}:function(){return r||2.8},M,y,A=_y(c,e.type,!0,s),b=function(){return y=!1},w=Yi,v=Yi,T=function(){l=er(c,an),v=So(Br?1:0,l),n&&(w=So(0,er(c,Bn))),M=Ns},C=function(){f._gsap.y=lo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(y){requestAnimationFrame(b);var q=lo(o.deltaY/2),K=v(d.v-q);if(f&&K!==d.v+d.offset){d.offset=K-d.v;var D=lo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=at.cache,Tr()}return!0}d.offset&&C(),y=!0},N,G,V,I,F=function(){T(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&Re.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return Br&&O.type==="touchmove"&&P()||_>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){y=!1;var O=_;_=lo((st.visualViewport&&st.visualViewport.scale||1)/p),N.pause(),O!==_&&ff(c,_>1.01?!0:n?!1:"x"),G=g(),V=d(),T(),M=Ns},e.onRelease=e.onGestureStart=function(O,q){if(d.offset&&C(),!q)I.restart(!0);else{at.cache++;var K=x(),D,le;n&&(D=g(),le=D+K*.05*-O.velocityX/.227,K*=v_(g,D,le,er(c,Bn)),N.vars.scrollX=w(le)),D=d(),le=D+K*.05*-O.velocityY/.227,K*=v_(d,D,le,er(c,an)),N.vars.scrollY=v(le),N.invalidate().duration(K).play(.01),(Br&&N.vars.scrollY>=l||D>=l-1)&&Re.to({},{onUpdate:F,duration:K})}a&&a(O)},e.onWheel=function(){N._ts&&N.pause(),An()-m>1e3&&(M=0,m=An())},e.onChange=function(O,q,K,D,le){if(Ns!==M&&T(),q&&n&&g(w(D[2]===q?G+(O.startX-O.x):g()+q-D[1])),K){d.offset&&C();var Te=le[2]===K,Ye=Te?V+O.startY-O.y:d()+K-le[1],Ve=v(Ye);Te&&Ye!==Ve&&(V+=Ve-Ye),d(Ve)}(K||q)&&Tr()},e.onEnable=function(){ff(c,n?!1:"x"),ot.addEventListener("refresh",F),pn(st,"resize",F),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){ff(c,!0),dn(st,"resize",F),ot.removeEventListener("refresh",F),A.kill()},e.lockAxis=e.lockAxis!==!1,o=new qt(e),o.iOS=Br,Br&&!d()&&d(1),Br&&Re.ticker.add(Yi),I=o._dc,N=Re.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:gy(d,d(),function(){return N.pause()})},onUpdate:Tr,onComplete:I.vars.onComplete}),o};ot.sort=function(i){if(Cn(i))return it.sort(i);var e=st.pageYOffset||0;return ot.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),it.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ot.observe=function(i){return new qt(i)};ot.normalizeScroll=function(i){if(typeof i>"u")return Un;if(i===!0&&Un)return Un.enable();if(i===!1){Un&&Un.kill(),Un=i;return}var e=i instanceof qt?i:s3(i);return Un&&Un.target===e.target&&Un.kill(),Os(e.target)&&(Un=e),e};ot.core={_getVelocityProp:jh,_inputObserver:_y,_scrollers:at,_proxies:rr,bridge:{ss:function(){wi||ks("scrollStart"),wi=An()},ref:function(){return En}}};sy()&&Re.registerPlugin(ot);ki.registerPlugin(ot);const a3=[{value:15,suffix:"+",label:"Years of Experience"},{value:1200,suffix:"+",label:"Clients Served"},{value:850,suffix:"+",label:"Projects Completed"},{value:24,suffix:"",label:"Team Members"}];function o3(){const i=me.useRef(null);return me.useEffect(()=>{const e=ki.context(()=>{ki.utils.toArray("[data-counter]").forEach(t=>{const n=Number(t.dataset.counter),r={v:0};ki.to(r,{v:n,duration:2,ease:"power2.out",scrollTrigger:{trigger:t,start:"top 85%"},onUpdate:()=>{t.textContent=Math.floor(r.v).toLocaleString()}})})},i);return()=>e.revert()},[]),L.jsx("section",{id:"about",ref:i,className:"py-24 lg:py-32 relative",children:L.jsxs("div",{className:"container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center",children:[L.jsxs("div",{className:"relative",children:[L.jsx("div",{className:"absolute -inset-6 bg-gradient-primary opacity-10 rounded-3xl blur-2xl"}),L.jsx("img",{src:"https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=900&q=80",alt:"Team of chartered accountants discussing strategy",loading:"lazy",className:"relative rounded-3xl shadow-card w-full object-cover h-[500px]"})]}),L.jsxs("div",{children:[L.jsx("span",{className:"text-xs font-bold tracking-[0.2em] text-primary uppercase",children:"About Us"}),L.jsxs("h2",{className:"mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",children:["Building financial confidence with ",L.jsx("span",{className:"text-gradient",children:"precision & trust"})]}),L.jsx("p",{className:"mt-6 text-muted-foreground leading-relaxed",children:"ABC & Associates is a full-service Chartered Accountancy firm delivering tailored advisory across taxation, audit, compliance, and corporate finance. Our partner-led approach ensures every engagement gets senior expertise and uncompromising quality."}),L.jsx("ul",{className:"mt-6 space-y-3",children:["ICAI-registered partners with 15+ years of experience","Integrated tax, audit, and advisory under one roof","Proactive compliance with personalised attention"].map(e=>L.jsxs("li",{className:"flex items-start gap-3 text-sm",children:[L.jsx(T_,{className:"h-5 w-5 text-primary shrink-0 mt-0.5"}),L.jsx("span",{children:e})]},e))}),L.jsx("div",{className:"mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4",children:a3.map(e=>L.jsxs("div",{className:"glass rounded-2xl p-5 text-center shadow-card",children:[L.jsxs("div",{className:"text-3xl font-bold text-gradient",children:[L.jsx("span",{"data-counter":e.value,children:"0"}),e.suffix]}),L.jsx("div",{className:"mt-1 text-xs text-muted-foreground leading-tight",children:e.label})]},e.label))})]})]})})}function l3({children:i,className:e="",max:t=8}){const n=me.useRef(null),r=a=>{const o=n.current;if(!o)return;const l=o.getBoundingClientRect(),c=(a.clientX-l.left)/l.width,u=(a.clientY-l.top)/l.height,h=(u-.5)*-2*t,f=(c-.5)*2*t;o.style.transform=`perspective(900px) rotateX(${h}deg) rotateY(${f}deg) translateY(-6px)`,o.style.setProperty("--mx",`${c*100}%`),o.style.setProperty("--my",`${u*100}%`)},s=()=>{const a=n.current;a&&(a.style.transform="perspective(900px) rotateX(0) rotateY(0) translateY(0)")};return L.jsx("div",{ref:n,onMouseMove:r,onMouseLeave:s,className:`tilt-card ${e}`,style:{"--mx":"50%","--my":"50%"},children:i})}const c3=[{icon:Dy,title:"Tax Planning",desc:"Strategic personal & corporate tax structuring to legally minimise liability."},{icon:Yy,title:"GST Services",desc:"End-to-end GST registration, filing, reconciliation and advisory."},{icon:Fy,title:"Audit & Assurance",desc:"Statutory, internal and management audits with actionable insights."},{icon:Ry,title:"Company Registration",desc:"Pvt Ltd, LLP, OPC and partnership setup with full compliance."},{icon:wy,title:"Business Consulting",desc:"CFO advisory, financial modelling and growth strategy."},{icon:A_,title:"Compliance Services",desc:"ROC, MCA, TDS and labour-law compliance handled end-to-end."}];function u3(){return L.jsxs("section",{id:"services",className:"py-24 lg:py-32 relative overflow-hidden",children:[L.jsx("div",{className:"pointer-events-none absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl"}),L.jsx("div",{className:"pointer-events-none absolute bottom-0 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent-cyan/10 blur-3xl"}),L.jsxs("div",{className:"container mx-auto px-6 relative",children:[L.jsxs(Fi.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center max-w-2xl mx-auto",children:[L.jsx("span",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold tracking-[0.2em] text-primary uppercase",children:"Our Services"}),L.jsxs("h2",{className:"mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold",children:["Comprehensive ",L.jsx("span",{className:"text-gradient",children:"financial expertise"})]}),L.jsx("p",{className:"mt-4 text-muted-foreground",children:"From day-to-day compliance to high-stakes advisory — one trusted partner for every financial need."})]}),L.jsx("div",{className:"mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:c3.map((i,e)=>L.jsx(Fi.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{delay:e*.08,duration:.6,ease:"easeOut"},children:L.jsx(l3,{className:"group relative h-full",children:L.jsxs("div",{className:"gradient-border relative h-full glass-strong rounded-3xl p-7 shadow-card overflow-hidden transition-shadow duration-500 hover:shadow-glow",children:[L.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",style:{background:"radial-gradient(400px circle at var(--mx) var(--my), oklch(0.82 0.14 230 / 0.18), transparent 50%)"}}),L.jsxs("div",{className:"relative",children:[L.jsxs("div",{className:"relative h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-soft group-hover:shadow-glow group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500",children:[L.jsx(i.icon,{className:"h-7 w-7"}),L.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-60 blur-lg -z-10 transition-opacity"})]}),L.jsx("h3",{className:"mt-5 text-lg font-bold",children:i.title}),L.jsx("p",{className:"mt-2 text-sm text-muted-foreground leading-relaxed",children:i.desc}),L.jsxs("div",{className:"mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary",children:["Learn more",L.jsx(Ey,{className:"h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"})]})]})]})})},i.title))})]})]})}ki.registerPlugin(ot);const f3=[{t:"Expert Chartered Accountants",d:"Senior partners on every engagement — no hand-offs to juniors."},{t:"Transparent Pricing",d:"Clear fixed-fee proposals upfront. Zero hidden charges, ever."},{t:"Fast Compliance",d:"On-time filings with proactive deadline tracking."},{t:"Trusted by Businesses",d:"1,200+ companies trust us with their financial future."},{t:"Dedicated Support",d:"A named relationship manager you can reach anytime."}];function h3(){const i=me.useRef(null);return me.useEffect(()=>{const e=ki.context(()=>{ki.from("[data-why-item]",{x:-40,opacity:0,duration:.7,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:i.current,start:"top 70%"}})},i);return()=>e.revert()},[]),L.jsx("section",{ref:i,className:"py-24 lg:py-32",children:L.jsxs("div",{className:"container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center",children:[L.jsxs("div",{children:[L.jsx("span",{className:"text-xs font-bold tracking-[0.2em] text-primary uppercase",children:"Why Choose Us"}),L.jsxs("h2",{className:"mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",children:["A partner who is ",L.jsx("span",{className:"text-gradient",children:"truly invested"})," in your growth"]}),L.jsx("p",{className:"mt-5 text-muted-foreground",children:"We combine deep technical expertise with a client-first culture so you get the right answer — fast, clear, and on time."}),L.jsx("ul",{className:"mt-8 space-y-5",children:f3.map(e=>L.jsxs("li",{"data-why-item":!0,className:"flex gap-4",children:[L.jsx("div",{className:"h-10 w-10 shrink-0 rounded-xl bg-primary/10 grid place-items-center text-primary",children:L.jsx(T_,{className:"h-5 w-5"})}),L.jsxs("div",{children:[L.jsx("div",{className:"font-semibold",children:e.t}),L.jsx("div",{className:"text-sm text-muted-foreground mt-0.5",children:e.d})]})]},e.t))})]}),L.jsxs("div",{className:"relative",children:[L.jsx("div",{className:"absolute -inset-8 bg-gradient-primary opacity-15 rounded-[2rem] blur-3xl"}),L.jsx("img",{src:"https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",alt:"Business professional reviewing analytics",loading:"lazy",className:"relative rounded-3xl shadow-glow w-full object-cover h-[520px]"})]})]})})}const d3=[{name:"Rajesh Sharma, FCA",role:"Managing Partner",img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"},{name:"Priya Verma, ACA",role:"Tax & Advisory Head",img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"},{name:"Aman Khanna, CA",role:"Audit Partner",img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80"},{name:"Neha Gupta, CA",role:"GST & Compliance Lead",img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"}];function p3(){return L.jsxs("section",{id:"team",className:"py-24 lg:py-32 relative overflow-hidden",children:[L.jsx("div",{className:"pointer-events-none absolute top-20 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"}),L.jsxs("div",{className:"container mx-auto px-6 relative",children:[L.jsxs(Fi.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center max-w-2xl mx-auto",children:[L.jsx("span",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold tracking-[0.2em] text-primary uppercase",children:"Our Team"}),L.jsxs("h2",{className:"mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold",children:["Meet the ",L.jsx("span",{className:"text-gradient",children:"experts"})," behind your numbers"]})]}),L.jsx("div",{className:"mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:d3.map((i,e)=>L.jsxs(Fi.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:e*.1,duration:.6},className:"group relative rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2",children:[L.jsx("div",{className:"absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-primary blur"}),L.jsxs("div",{className:"aspect-[4/5] overflow-hidden relative",children:[L.jsx("img",{src:i.img,alt:i.name,loading:"lazy",className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out"}),L.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-90"}),L.jsx("div",{className:"absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500",children:[ed,nd,zc].map((t,n)=>L.jsx("a",{href:"#","aria-label":"social",className:"h-9 w-9 grid place-items-center rounded-full glass-strong text-primary hover:bg-gradient-primary hover:text-primary-foreground transition-all",style:{transitionDelay:`${n*60}ms`},children:L.jsx(t,{className:"h-4 w-4"})},n))})]}),L.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-5 text-white",children:[L.jsx("div",{className:"font-bold text-base",children:i.name}),L.jsx("div",{className:"text-xs text-white/80 mt-0.5",children:i.role}),L.jsx("div",{className:"mt-3 h-0.5 w-10 bg-gradient-primary rounded-full group-hover:w-20 transition-all duration-500"})]})]},i.name))})]})]})}function Gl({id:i,label:e,type:t="text",value:n,onChange:r,as:s}){const a=s==="textarea"?"textarea":"input";return L.jsxs("div",{className:"relative",children:[L.jsx(a,{id:i,type:t,rows:s==="textarea"?4:void 0,value:n,onChange:o=>r(o.target.value),placeholder:" ",className:"peer w-full bg-transparent border border-border rounded-xl px-4 pt-5 pb-2 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"}),L.jsx("label",{htmlFor:i,className:`absolute left-4 top-1.5 text-[11px] font-medium text-muted-foreground transition-all
                   peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                   peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-primary`,children:e})]})}function m3(){const[i,e]=me.useState({name:"",email:"",phone:"",message:""}),[t,n]=me.useState(!1),[r,s]=me.useState(!1),a=o=>{o.preventDefault(),n(!0),setTimeout(()=>{n(!1),s(!0),e({name:"",email:"",phone:"",message:""}),setTimeout(()=>s(!1),3e3)},1200)};return L.jsxs("section",{id:"contact",className:"py-24 lg:py-32 relative overflow-hidden",children:[L.jsx("div",{className:"pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-accent-cyan/20 blur-3xl"}),L.jsx("div",{className:"pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl"}),L.jsxs("div",{className:"container mx-auto px-6 grid lg:grid-cols-2 gap-12",children:[L.jsxs("div",{children:[L.jsx("span",{className:"text-xs font-bold tracking-[0.2em] text-primary uppercase",children:"Get in Touch"}),L.jsxs("h2",{className:"mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",children:["Let's talk about your ",L.jsx("span",{className:"text-gradient",children:"financial goals"})]}),L.jsx("p",{className:"mt-5 text-muted-foreground max-w-md",children:"Send us a query and one of our partners will respond within one business day."}),L.jsx("div",{className:"mt-10 space-y-5",children:[{icon:E_,t:"Office Address",d:"501, Corporate Tower, MG Road, Mumbai 400001"},{icon:td,t:"Phone",d:"+91 XXXXX XXXXX"},{icon:zc,t:"Email",d:"contact@abcassociates.com"}].map(o=>L.jsxs("div",{className:"flex gap-4 items-start",children:[L.jsx("div",{className:"h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center shrink-0 shadow-soft",children:L.jsx(o.icon,{className:"h-5 w-5"})}),L.jsxs("div",{children:[L.jsx("div",{className:"text-sm font-semibold",children:o.t}),L.jsx("div",{className:"text-sm text-muted-foreground",children:o.d})]})]},o.t))})]}),L.jsxs("form",{onSubmit:a,className:"glass rounded-3xl p-8 shadow-card space-y-5",children:[L.jsx(Gl,{id:"name",label:"Your Name",value:i.name,onChange:o=>e({...i,name:o})}),L.jsxs("div",{className:"grid sm:grid-cols-2 gap-5",children:[L.jsx(Gl,{id:"email",label:"Email Address",type:"email",value:i.email,onChange:o=>e({...i,email:o})}),L.jsx(Gl,{id:"phone",label:"Phone Number",value:i.phone,onChange:o=>e({...i,phone:o})})]}),L.jsx(Gl,{id:"message",label:"Your Message",as:"textarea",value:i.message,onChange:o=>e({...i,message:o})}),L.jsxs("button",{type:"submit",disabled:t,className:"relative w-full inline-flex items-center justify-center gap-2 btn-premium disabled:opacity-70 overflow-hidden",children:[t?L.jsx(Vy,{className:"h-4 w-4 animate-spin"}):L.jsx($y,{className:"h-4 w-4"}),t?"Sending...":r?"Message Sent ✓":"Send Message"]})]})]})]})}function g3(){return L.jsxs("footer",{className:"bg-[oklch(0.18_0.04_260)] text-white/80",children:[L.jsxs("div",{className:"container mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10",children:[L.jsxs("div",{children:[L.jsx("img",{src:"https://api.digitechai.in/uploads/footerlogo.png",alt:"ABC & Associates",className:"h-12 w-auto mb-5"}),L.jsx("p",{className:"text-sm leading-relaxed text-white/60",children:"Trusted Chartered Accountants delivering tax, audit, and advisory excellence to ambitious businesses and individuals across India."}),L.jsx("div",{className:"mt-5 flex gap-3",children:[ed,b_,nd].map((i,e)=>L.jsx("a",{href:"#",className:"h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-gradient-primary transition-all hover:-translate-y-0.5",children:L.jsx(i,{className:"h-4 w-4"})},e))})]}),L.jsxs("div",{children:[L.jsx("h4",{className:"text-white font-bold mb-5",children:"Quick Links"}),L.jsx("ul",{className:"space-y-3 text-sm",children:["Home","About","Team","Gallery","Career","Contact"].map(i=>L.jsx("li",{children:L.jsx("a",{href:`#${i.toLowerCase()}`,className:"hover:text-accent-cyan transition-colors",children:i})},i))})]}),L.jsxs("div",{children:[L.jsx("h4",{className:"text-white font-bold mb-5",children:"Services"}),L.jsx("ul",{className:"space-y-3 text-sm",children:["Tax Planning","GST Services","Audit & Assurance","Company Registration","Business Consulting","Compliance"].map(i=>L.jsx("li",{children:L.jsx("a",{href:"#services",className:"hover:text-accent-cyan transition-colors",children:i})},i))})]}),L.jsxs("div",{children:[L.jsx("h4",{className:"text-white font-bold mb-5",children:"Contact"}),L.jsxs("ul",{className:"space-y-3 text-sm text-white/70",children:[L.jsxs("li",{className:"flex gap-3",children:[L.jsx(E_,{className:"h-4 w-4 text-accent-cyan shrink-0 mt-0.5"})," 501, Corporate Tower, MG Road, Mumbai 400001"]}),L.jsxs("li",{className:"flex gap-3",children:[L.jsx(td,{className:"h-4 w-4 text-accent-cyan shrink-0 mt-0.5"})," +91 XXXXX XXXXX"]}),L.jsxs("li",{className:"flex gap-3",children:[L.jsx(zc,{className:"h-4 w-4 text-accent-cyan shrink-0 mt-0.5"})," contact@abcassociates.com"]})]})]})]}),L.jsx("div",{className:"border-t border-white/10",children:L.jsxs("div",{className:"container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50",children:[L.jsxs("div",{children:["© ",new Date().getFullYear()," ABC & Associates. All rights reserved."]}),L.jsxs("div",{className:"flex gap-5",children:[L.jsx("a",{href:"#",className:"hover:text-white",children:"Privacy"}),L.jsx("a",{href:"#",className:"hover:text-white",children:"Terms"})]})]})})]})}function v3(){return L.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[L.jsx(rS,{}),L.jsx(i1,{}),L.jsxs("main",{children:[L.jsx(V2,{}),L.jsx(o3,{}),L.jsx(u3,{}),L.jsx(h3,{}),L.jsx(p3,{}),L.jsx(m3,{})]}),L.jsx(g3,{})]})}export{v3 as component};
