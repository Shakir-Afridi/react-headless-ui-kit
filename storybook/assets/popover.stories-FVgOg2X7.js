import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-bBOc3of9.js";import"./preload-helper-PPVm8Dsz.js";const f=s.createContext(null);function c({children:i}){const[r,n]=s.useState(!1),o=s.useRef(null),t=s.useRef(null);return s.useEffect(()=>{if(!r)return;const l=d=>{t.current&&!t.current.contains(d.target)&&o.current&&!o.current.contains(d.target)&&n(!1)};return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[r]),s.useEffect(()=>{if(!r)return;const l=d=>{d.key==="Escape"&&n(!1)};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[r]),e.jsx(f.Provider,{value:{open:r,setOpen:n,triggerRef:o,panelRef:t},children:i})}c.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function x(){const i=s.useContext(f);if(!i)throw new Error("Popover subcomponents must be used inside <Popover>");const{open:r,setOpen:n,triggerRef:o,panelRef:t}=i;return{open:r,setOpen:n,triggerRef:o,panelRef:t}}function g({children:i,...r}){const{open:n,setOpen:o,triggerRef:t}=x();return e.jsx("button",{...r,ref:t,"aria-haspopup":"dialog","aria-expanded":n,onClick:()=>o(!n),"data-slot":"popover-trigger",children:i})}g.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};function m({children:i,...r}){const{open:n,panelRef:o,triggerRef:t}=x();return n?e.jsx("div",{...r,style:{...r.style,position:"absolute"},ref:o,role:"dialog","aria-modal":"false","aria-labelledby":t.current?.id,tabIndex:-1,"data-slot":"popover-panel",children:i}):null}m.__docgenInfo={description:"",methods:[],displayName:"PopoverPanel"};const h={title:"Components/Popover",component:c,parameters:{layout:"centered"}},u={padding:"0.25rem 0",borderBottom:"1px solid #eee"},p={render:()=>e.jsxs(c,{children:[e.jsx(g,{id:"popover-trigger",style:{padding:"0.5rem 1rem",border:"1px solid #ccc",borderRadius:4,background:"#f9f9f9",cursor:"pointer"},children:"Open Popover"}),e.jsx(m,{style:{marginTop:"1px",background:"white",border:"1px solid #ddd",borderRadius:4,padding:"0.5rem",boxShadow:"0 2px 6px rgba(0,0,0,0.15)",width:"150px"},children:e.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0},children:[e.jsx("li",{style:u,children:"Profile"}),e.jsx("li",{style:u,children:"Settings"}),e.jsx("li",{style:u,children:"Logout"})]})})]})},a={render:()=>e.jsxs(c,{children:[e.jsx(g,{id:"popover-trigger",children:"Open Popover"}),e.jsx(m,{children:e.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0},children:[e.jsx("li",{children:"Profile"}),e.jsx("li",{children:"Settings"}),e.jsx("li",{children:"Logout"})]})})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
            <PopoverTrigger id="popover-trigger" style={{
      padding: "0.5rem 1rem",
      border: "1px solid #ccc",
      borderRadius: 4,
      background: "#f9f9f9",
      cursor: "pointer"
    }}>
                Open Popover
            </PopoverTrigger>
            <PopoverPanel style={{
      marginTop: "1px",
      background: "white",
      border: "1px solid #ddd",
      borderRadius: 4,
      padding: "0.5rem",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      width: "150px"
    }}>
                <ul style={{
        listStyle: "none",
        margin: 0,
        padding: 0
      }}>
                    <li style={liStyle}>Profile</li>
                    <li style={liStyle}>Settings</li>
                    <li style={liStyle}>Logout</li>
                </ul>
            </PopoverPanel>
        </Popover>
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
            <PopoverTrigger id="popover-trigger">Open Popover</PopoverTrigger>
            <PopoverPanel>
                <ul style={{
        listStyle: "none",
        margin: 0,
        padding: 0
      }}>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </PopoverPanel>
        </Popover>
}`,...a.parameters?.docs?.source}}};const b=["CustomStyled","Default"];export{p as CustomStyled,a as Default,b as __namedExportsOrder,h as default};
