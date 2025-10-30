import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-bBOc3of9.js";import"./preload-helper-PPVm8Dsz.js";const h=i.createContext(null);function x({children:s}){const[o,n]=i.useState(!1),[c,d]=i.useState(-1),r=i.useRef(null),u=i.useRef(null);return i.useEffect(()=>{if(!o)return;const m=t=>{u.current&&!u.current.contains(t.target)&&r.current&&!r.current.contains(t.target)&&n(!1)};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[o]),i.useEffect(()=>{if(!o)return;const m=t=>{t.key==="Escape"&&(n(!1),r.current?.focus())};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[o]),e.jsx(h.Provider,{value:{open:o,setOpen:n,buttonRef:r,itemsRef:u,activeIndex:c,setActiveIndex:d},children:s})}x.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function y(){const s=i.useContext(h);if(!s)throw new Error("useMenu must be used within a Menu component");return s}function b({children:s,...o}){const{open:n,setOpen:c,buttonRef:d}=y();return e.jsx("button",{...o,ref:d,"aria-haspopup":"menu","aria-expanded":n,onClick:()=>c(!n),"data-slot":"menu-button",children:s})}b.__docgenInfo={description:"",methods:[],displayName:"MenuButton"};function M({children:s,...o}){const{open:n,itemsRef:c,buttonRef:d,activeIndex:r,setActiveIndex:u,setOpen:m}=y();return i.useEffect(()=>{if(!n||!c.current)return;const t=Array.from(c.current.querySelectorAll('[role="menuitem"]')),I=l=>{if(l.key==="ArrowDown"){l.preventDefault();const p=r<t.length-1?r+1:0;u(p),t[p]?.focus()}else if(l.key==="ArrowUp"){l.preventDefault();const p=r>0?r-1:t.length-1;u(p),t[p]?.focus()}else l.key==="Home"?(l.preventDefault(),u(0),t[0]?.focus()):l.key==="End"&&(l.preventDefault(),u(t.length-1),t[t.length-1]?.focus())};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[n,r,c,u]),n?e.jsx("div",{...o,style:{...o.style,position:"absolute"},ref:c,role:"menu","aria-labelledby":d.current?.id,tabIndex:-1,"data-slot":"menu-items",children:s}):null}M.__docgenInfo={description:"",methods:[],displayName:"MenuItems"};function a({children:s,onClick:o,...n}){const{setOpen:c}=y(),d=r=>{o?.(r),c(!1)};return e.jsx("button",{...n,role:"menuitem",tabIndex:-1,onClick:d,"data-slot":"menu-item",style:{display:"block",...n.style},children:s})}a.__docgenInfo={description:"",methods:[],displayName:"MenuItem"};const j={title:"Components/Menu",component:x,parameters:{layout:"centered"}},k={display:"block",width:"100%",padding:"0.5rem 1rem",border:"none",background:"transparent",textAlign:"left",cursor:"pointer"},f={render:()=>e.jsxs(x,{children:[e.jsx(b,{id:"menu-button",style:{padding:"0.5rem 1rem",border:"1px solid #ccc",borderRadius:4,background:"#f9f9f9",cursor:"pointer"},children:"Options ▼"}),e.jsxs(M,{style:{marginTop:"4px",background:"white",border:"1px solid #ddd",borderRadius:4,boxShadow:"0 2px 6px rgba(0,0,0,0.15)",minWidth:"150px"},children:[e.jsx(a,{style:k,onClick:()=>console.log("Profile clicked"),children:"Profile"}),e.jsx(a,{style:k,onClick:()=>console.log("Settings clicked"),children:"Settings"}),e.jsx(a,{style:{...k,borderTop:"1px solid #eee",color:"#dc2626"},onClick:()=>console.log("Logout clicked"),children:"Logout"})]})]})},g={render:()=>e.jsxs(x,{children:[e.jsx(b,{id:"menu-button",children:"Options"}),e.jsxs(M,{children:[e.jsx(a,{onClick:()=>console.log("Profile clicked"),children:"Profile"}),e.jsx(a,{onClick:()=>console.log("Settings clicked"),children:"Settings"}),e.jsx(a,{onClick:()=>console.log("Logout clicked"),children:"Logout"})]})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Menu>
            <MenuButton id="menu-button" style={{
      padding: "0.5rem 1rem",
      border: "1px solid #ccc",
      borderRadius: 4,
      background: "#f9f9f9",
      cursor: "pointer"
    }}>
                Options ▼
            </MenuButton>
            <MenuItems style={{
      marginTop: "4px",
      background: "white",
      border: "1px solid #ddd",
      borderRadius: 4,
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      minWidth: "150px"
    }}>
                <MenuItem style={menuItemStyle} onClick={() => console.log("Profile clicked")}>
                    Profile
                </MenuItem>
                <MenuItem style={menuItemStyle} onClick={() => console.log("Settings clicked")}>
                    Settings
                </MenuItem>
                <MenuItem style={{
        ...menuItemStyle,
        borderTop: "1px solid #eee",
        color: "#dc2626"
      }} onClick={() => console.log("Logout clicked")}>
                    Logout
                </MenuItem>
            </MenuItems>
        </Menu>
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Menu>
            <MenuButton id="menu-button">Options</MenuButton>
            <MenuItems>
                <MenuItem onClick={() => console.log("Profile clicked")}>
                    Profile
                </MenuItem>
                <MenuItem onClick={() => console.log("Settings clicked")}>
                    Settings
                </MenuItem>
                <MenuItem onClick={() => console.log("Logout clicked")}>
                    Logout
                </MenuItem>
            </MenuItems>
        </Menu>
}`,...g.parameters?.docs?.source}}};const w=["CustomStyled","Default"];export{f as CustomStyled,g as Default,w as __namedExportsOrder,j as default};
