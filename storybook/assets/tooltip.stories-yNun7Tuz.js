import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-bBOc3of9.js";import"./preload-helper-PPVm8Dsz.js";const x=n.createContext(null);function d({children:o,delay:t=200,tabIndex:r=0}){const[i,a]=n.useState(!1),y=n.useRef(null),b=n.useRef(null),s=n.useRef(null);n.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]),n.useEffect(()=>{if(!i)return;const l=j=>{j.key==="Escape"&&a(!1)};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[i]);const T=()=>{s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{a(!0)},t)},g=()=>{s.current&&clearTimeout(s.current),a(!1)},v=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),T())};return e.jsx(x.Provider,{value:{open:i,setOpen:a,triggerRef:y,contentRef:b},children:e.jsx("div",{tabIndex:r,onMouseEnter:T,onMouseLeave:g,onFocus:T,onBlur:g,onKeyDown:v,style:{display:"inline-block",position:"relative"},children:o})})}d.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},tabIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};function h(){const o=n.useContext(x);if(!o)throw new Error("Tooltip subcomponents must be used inside <Tooltip>");const{open:t,setOpen:r,triggerRef:i,contentRef:a}=o;return{open:t,setOpen:r,triggerRef:i,contentRef:a}}function m({children:o,...t}){const{triggerRef:r}=h();return e.jsx("span",{...t,ref:r,"aria-describedby":"tooltip-content","data-slot":"tooltip-trigger",children:o})}m.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};function f({children:o,...t}){const{open:r,contentRef:i}=h();return r?e.jsx("div",{...t,style:{background:"#282c2f",color:"white",padding:"8px",borderRadius:"4px",width:"max-content",marginTop:"4px",...t.style,position:"absolute"},ref:i,role:"tooltip",id:"tooltip-content","data-slot":"tooltip-content",children:o}):null}f.__docgenInfo={description:"",methods:[],displayName:"TooltipContent"};const C={title:"Components/Tooltip",component:d,parameters:{layout:"centered"}},c={render:()=>e.jsxs(d,{children:[e.jsx(m,{children:e.jsx("button",{children:"Hover me"})}),e.jsx(f,{children:"This is a tooltip"})]})},p={render:()=>e.jsxs(d,{delay:300,children:[e.jsx(m,{children:e.jsx("span",{style:{textDecoration:"underline",textDecorationStyle:"dotted",cursor:"help"},children:"Hover for info"})}),e.jsx(f,{style:{top:"calc(100% + 8px)",left:"50%",transform:"translateX(-50%)",background:"#1e40af",color:"white",padding:"0.5rem 1rem",borderRadius:8,fontSize:"0.875rem",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",maxWidth:"200px"},children:"This tooltip has custom styling and a longer delay"})]})},u={render:()=>e.jsx("div",{style:{marginTop:"100px"},children:e.jsxs(d,{children:[e.jsx(m,{children:e.jsx("button",{style:{padding:"0.5rem 1rem",border:"1px solid #ccc",borderRadius:4,background:"#f9f9f9",cursor:"pointer"},children:"Hover me"})}),e.jsx(f,{style:{bottom:"calc(100% + 8px)",left:"50%",transform:"translateX(-50%)",background:"#333",color:"white",padding:"0.5rem 0.75rem",borderRadius:4,fontSize:"0.875rem",whiteSpace:"nowrap"},children:"Tooltip on top"})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>
            <TooltipTrigger>
                <button>Hover me</button>
            </TooltipTrigger>
            <TooltipContent>This is a tooltip</TooltipContent>
        </Tooltip>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip delay={300}>
            <TooltipTrigger>
                <span style={{
        textDecoration: "underline",
        textDecorationStyle: "dotted",
        cursor: "help"
      }}>
                    Hover for info
                </span>
            </TooltipTrigger>
            <TooltipContent style={{
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#1e40af",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: 8,
      fontSize: "0.875rem",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      maxWidth: "200px"
    }}>
                This tooltip has custom styling and a longer delay
            </TooltipContent>
        </Tooltip>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    marginTop: "100px"
  }}>
            <Tooltip>
                <TooltipTrigger>
                    <button style={{
          padding: "0.5rem 1rem",
          border: "1px solid #ccc",
          borderRadius: 4,
          background: "#f9f9f9",
          cursor: "pointer"
        }}>
                        Hover me
                    </button>
                </TooltipTrigger>
                <TooltipContent style={{
        bottom: "calc(100% + 8px)",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#333",
        color: "white",
        padding: "0.5rem 0.75rem",
        borderRadius: 4,
        fontSize: "0.875rem",
        whiteSpace: "nowrap"
      }}>
                    Tooltip on top
                </TooltipContent>
            </Tooltip>
        </div>
}`,...u.parameters?.docs?.source}}};const k=["Default","CustomStyled","TopPosition"];export{p as CustomStyled,c as Default,u as TopPosition,k as __namedExportsOrder,C as default};
