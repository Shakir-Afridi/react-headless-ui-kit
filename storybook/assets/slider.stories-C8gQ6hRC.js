import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-bBOc3of9.js";import"./preload-helper-PPVm8Dsz.js";const V=c.createContext(null);function f({children:i,defaultValue:u=50,min:n=0,max:t=100,step:a=1,onChange:l}){const[d,p]=c.useState(u),m=c.useRef(null),w=c.useRef(null),[R,j]=c.useState(!1),S=c.useCallback(o=>{if(!m.current)return;const r=m.current.getBoundingClientRect(),s=Math.max(0,Math.min(1,(o-r.left)/r.width)),E=n+s*(t-n),D=Math.round(E/a)*a,T=Math.max(n,Math.min(t,D));p(T),l?.(T)},[n,t,a,l]);return c.useEffect(()=>{if(!R)return;const o=s=>{S(s.clientX)},r=()=>{j(!1)};return document.addEventListener("mousemove",o),document.addEventListener("mouseup",r),()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r)}},[R,S]),c.useEffect(()=>{const o=r=>{if(document.activeElement!==w.current)return;let s=d;r.key==="ArrowRight"||r.key==="ArrowUp"?(r.preventDefault(),s=Math.min(t,d+a)):r.key==="ArrowLeft"||r.key==="ArrowDown"?(r.preventDefault(),s=Math.max(n,d-a)):r.key==="Home"?(r.preventDefault(),s=n):r.key==="End"&&(r.preventDefault(),s=t),s!==d&&(p(s),l?.(s))};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[d,n,t,a,l]),e.jsx(V.Provider,{value:{value:d,setValue:p,min:n,max:t,step:a,trackRef:m,thumbRef:w},children:e.jsx("div",{onMouseDown:o=>{const r=o.target;m.current&&(m.current===r||m.current.contains(r))&&(S(o.clientX),j(!0))},children:i})})}f.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}}};function k(){const i=c.useContext(V);if(!i)throw new Error("Slider subcomponents must be used inside <Slider>");const{value:u,setValue:n,min:t,max:a,step:l,trackRef:d,thumbRef:p}=i;return{value:u,setValue:n,min:t,max:a,step:l,trackRef:d,thumbRef:p}}function b({children:i,style:u,...n}){const{trackRef:t}=k(),a={position:"relative",height:"8px",background:"#e5e7eb",borderRadius:"4px",cursor:"pointer"};return e.jsx("div",{...n,ref:t,"data-slot":"slider-track",style:{...a,...u},children:i})}b.__docgenInfo={description:"",methods:[],displayName:"SliderTrack"};function v({style:i,...u}){const{value:n,min:t,max:a,thumbRef:l}=k(),p={position:"absolute",left:`${(n-t)/(a-t)*100}%`,transform:"translateX(-50%)",width:"20px",height:"20px",background:"white",border:"2px solid #3b82f6",borderRadius:"50%",cursor:"grab",marginTop:"-10px"};return e.jsx("div",{...u,ref:l,role:"slider","aria-valuenow":n,"aria-valuemin":t,"aria-valuemax":a,tabIndex:0,"data-slot":"slider-thumb",style:{...p,...i}})}v.__docgenInfo={description:"",methods:[],displayName:"SliderThumb"};function y({style:i,...u}){const{value:n,min:t,max:a}=k(),d={position:"absolute",width:`${(n-t)/(a-t)*100}%`,height:"100%",background:"#3b82f6",borderRadius:"4px"};return e.jsx("div",{...u,"data-slot":"slider-range",style:{...d,...i}})}y.__docgenInfo={description:"",methods:[],displayName:"SliderRange"};const q={title:"Components/Slider",component:f,parameters:{layout:"centered"}},h={render:()=>e.jsx("div",{style:{width:"300px",padding:"2rem"},children:e.jsx(f,{defaultValue:50,min:0,max:100,step:5,children:e.jsxs(b,{children:[e.jsx(y,{}),e.jsx(v,{})]})})})},x={render:()=>e.jsx("div",{style:{width:"300px",padding:"2rem"},children:e.jsx(f,{defaultValue:30,min:0,max:100,step:1,children:e.jsxs(b,{style:{background:"#f3f4f6",height:"12px"},children:[e.jsx(y,{style:{background:"linear-gradient(to right, #8b5cf6, #ec4899)"}}),e.jsx(v,{style:{width:"24px",height:"24px",border:"3px solid #8b5cf6",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}})]})})})},g={render:()=>e.jsx("div",{style:{width:"300px",padding:"2rem"},children:e.jsx(f,{defaultValue:25,min:0,max:100,step:25,children:e.jsxs(b,{style:{height:"8px",background:"#e5e7eb",borderRadius:"4px",cursor:"pointer"},children:[e.jsx(y,{style:{height:"100%",background:"#10b981",borderRadius:"4px"}}),e.jsx(v,{style:{width:"20px",height:"20px",background:"white",border:"2px solid #10b981",borderRadius:"50%",cursor:"grab",top:"50%",marginTop:"-10px"}})]})})})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "300px",
    padding: "2rem"
  }}>
            <Slider defaultValue={50} min={0} max={100} step={5}>
                <SliderTrack>
                    <SliderRange />
                    <SliderThumb />
                </SliderTrack>
            </Slider>
        </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "300px",
    padding: "2rem"
  }}>
            <Slider defaultValue={30} min={0} max={100} step={1}>
                <SliderTrack style={{
        background: "#f3f4f6",
        height: "12px"
      }}>
                    <SliderRange style={{
          background: "linear-gradient(to right, #8b5cf6, #ec4899)"
        }} />
                    <SliderThumb style={{
          width: "24px",
          height: "24px",
          border: "3px solid #8b5cf6",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
        }} />
                </SliderTrack>
            </Slider>
        </div>
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "300px",
    padding: "2rem"
  }}>
            <Slider defaultValue={25} min={0} max={100} step={25}>
                <SliderTrack style={{
        height: "8px",
        background: "#e5e7eb",
        borderRadius: "4px",
        cursor: "pointer"
      }}>
                    <SliderRange style={{
          height: "100%",
          background: "#10b981",
          borderRadius: "4px"
        }} />
                    <SliderThumb style={{
          width: "20px",
          height: "20px",
          background: "white",
          border: "2px solid #10b981",
          borderRadius: "50%",
          cursor: "grab",
          top: "50%",
          marginTop: "-10px"
        }} />
                </SliderTrack>
            </Slider>
        </div>
}`,...g.parameters?.docs?.source}}};const C=["Default","CustomStyled","WithSteps"];export{x as CustomStyled,h as Default,g as WithSteps,C as __namedExportsOrder,q as default};
