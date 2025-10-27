import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-lSegMLyX.js";import"./preload-helper-PPVm8Dsz.js";const u=i.createContext(null);function c({children:s}){const[e,r]=i.useState(!1),n=i.useRef(null),t=i.useRef(null);return i.useEffect(()=>{if(!e)return;const d=l=>{t.current&&!t.current.contains(l.target)&&n.current&&!n.current.contains(l.target)&&r(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[e]),i.useEffect(()=>{if(!e)return;const d=l=>{l.key==="Escape"&&r(!1)};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e]),o.jsx(u.Provider,{value:{open:e,setOpen:r,triggerRef:n,panelRef:t},children:s})}c.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function g(){const s=i.useContext(u);if(!s)throw new Error("Popover subcomponents must be used inside <Popover>");const{open:e,setOpen:r,triggerRef:n,panelRef:t}=s;return{open:e,setOpen:r,triggerRef:n,panelRef:t}}function f({children:s,...e}){const{open:r,setOpen:n,triggerRef:t}=g();return o.jsx("button",{...e,ref:t,"aria-haspopup":"dialog","aria-expanded":r,onClick:()=>n(!r),"data-slot":"popover-trigger",children:s})}f.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};function m({children:s,...e}){const{open:r,panelRef:n,triggerRef:t}=g();return r?o.jsx("div",{...e,style:{...e.style,position:"absolute"},ref:n,role:"dialog","aria-modal":"false","aria-labelledby":t.current?.id,tabIndex:-1,"data-slot":"popover-panel",children:s}):null}m.__docgenInfo={description:"",methods:[],displayName:"PopoverPanel"};const P={title:"Components/Popover",component:c,parameters:{layout:"centered"}},p={padding:"0.25rem 0",borderBottom:"1px solid #eee"},a={render:()=>o.jsxs(c,{children:[o.jsx(f,{id:"popover-trigger",style:{padding:"0.5rem 1rem",border:"1px solid #ccc",borderRadius:4,background:"#f9f9f9",cursor:"pointer"},children:"Open Popover"}),o.jsx(m,{style:{marginTop:"1px",background:"white",border:"1px solid #ddd",borderRadius:4,padding:"0.5rem",boxShadow:"0 2px 6px rgba(0,0,0,0.15)",width:"150px"},children:o.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0},children:[o.jsx("li",{style:p,children:"Profile"}),o.jsx("li",{style:p,children:"Settings"}),o.jsx("li",{style:p,children:"Logout"})]})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,P as default};
