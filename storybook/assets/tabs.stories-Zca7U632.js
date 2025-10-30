import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-CIfmgYGu.js";import"./preload-helper-PPVm8Dsz.js";const j=i.createContext(null);function T({children:n,defaultIndex:a=0}){const[d,t]=i.useState(a),r=i.useRef([]),s=i.useRef([]);function c(o){return r.current.includes(o)||r.current.push(o),r.current.indexOf(o)}function u(o){return s.current.includes(o)||s.current.push(o),s.current.indexOf(o)}return e.jsx(j.Provider,{value:{selectedIndex:d,setSelectedIndex:t,tabRefs:r.current,panelRefs:s.current,registerTab:c,registerPanel:u},children:n})}T.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},defaultIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};function x({children:n,...a}){return e.jsx("div",{role:"tablist",...a,"data-slot":"tabs-list",children:n})}x.__docgenInfo={description:"",methods:[],displayName:"TabsList"};function m(){const n=i.useContext(j);if(!n)throw new Error("useTabs must be used within <Tabs />");return n}function y({index:n,children:a,...d}){const t=i.useRef(null),{selectedIndex:r,setSelectedIndex:s,tabRefs:c,registerTab:u}=m();i.useEffect(()=>{t.current&&u(t)},[u]);function o(g){if(c.length){if(g.key==="ArrowRight"){const b=(n+1)%c.length;c[b]?.current?.focus(),s(b)}else if(g.key==="ArrowLeft"){const b=(n-1+c.length)%c.length;c[b]?.current?.focus(),s(b)}}}return e.jsx("button",{...d,ref:t,role:"tab","aria-selected":r===n,"aria-controls":`tab-panel-${n}`,id:`tab-${n}`,tabIndex:r===n?0:-1,onClick:()=>s(n),onKeyDown:o,"data-slot":"tab",children:a})}y.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{index:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function l({index:n,children:a,...d}){const t=i.useRef(null),{selectedIndex:r,registerPanel:s}=m();return i.useEffect(()=>{s(t)},[s]),r!==n?null:e.jsx("div",{...d,ref:t,role:"tabpanel",id:`tab-panel-${n}`,"aria-labelledby":`tab-${n}`,tabIndex:0,"data-slot":"tabs-panel",children:a})}l.__docgenInfo={description:"",methods:[],displayName:"TabsPanel",props:{index:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S={title:"Components/Tabs",component:T,parameters:{layout:"centered"}};function R(){const n={padding:"0.5rem 1.5rem",border:"none",borderBottom:"2px solid transparent",background:"none",cursor:"pointer",fontWeight:500,fontSize:"1rem",transition:"color 0.2s, border-color 0.2s",color:"#555"},a={...n,color:"#007bff",borderBottom:"2px solid #007bff",background:"#f5faff"},{selectedIndex:d}=m();return e.jsx(x,{style:{display:"flex",gap:"0.5rem",marginBottom:"1.5rem",borderBottom:"1px solid #eee",background:"#fff",borderRadius:"6px 6px 0 0",boxShadow:"0 1px 4px rgba(0,0,0,0.04)",width:"fit-content"},children:[0,1,2].map(t=>e.jsx(y,{index:t,style:d===t?a:n,onMouseOver:r=>r.currentTarget.style.color="#0056b3",onMouseOut:r=>r.currentTarget.style.color=d===t?"#007bff":"#555",children:["Tab One","Tab Two","Tab Three"][t]},t))})}const p={width:"400px",background:"#f0f4fa",height:"100px"},f={render:()=>e.jsxs(T,{defaultIndex:0,children:[e.jsx(R,{}),e.jsx(l,{index:0,style:p,children:e.jsxs("div",{style:{padding:"1rem",background:"#f5faff",borderRadius:6},children:[e.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#007bff"},children:"Tab One"}),e.jsx("p",{children:"This is the content for Tab One. You can put anything here."})]})}),e.jsx(l,{index:1,style:p,children:e.jsxs("div",{style:{padding:"1rem",background:"#f5faff",borderRadius:6},children:[e.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#007bff"},children:"Tab Two"}),e.jsx("p",{children:"This is the content for Tab Two. Try switching tabs!"})]})}),e.jsx(l,{index:2,style:p,children:e.jsxs("div",{style:{padding:"1rem",background:"#f5faff",borderRadius:6},children:[e.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#007bff"},children:"Tab Three"}),e.jsx("p",{children:"This is the content for Tab Three. Tabs are fully customizable."})]})})]})};function v(){return e.jsx(x,{children:[0,1,2].map(n=>e.jsx(y,{index:n,children:["Tab One","Tab Two","Tab Three"][n]},n))})}const h={render:()=>e.jsxs(T,{defaultIndex:0,children:[e.jsx(v,{}),e.jsx(l,{index:0,children:e.jsxs("div",{children:[e.jsx("h3",{children:"Tab One"}),e.jsx("p",{children:"This is the content for Tab One. You can put anything here."})]})}),e.jsx(l,{index:1,children:e.jsxs("div",{children:[e.jsx("h3",{children:"Tab Two"}),e.jsx("p",{children:"This is the content for Tab Two. Try switching tabs!"})]})}),e.jsx(l,{index:2,children:e.jsxs("div",{children:[e.jsx("h3",{children:"Tab Three"}),e.jsx("p",{children:"This is the content for Tab Three. Tabs are fully customizable."})]})})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultIndex={0}>
            <StyledTabs />
            <TabsPanel index={0} style={tabPanelStyle}>
                <div style={{
        padding: "1rem",
        background: "#f5faff",
        borderRadius: 6
      }}>
                    <h3 style={{
          margin: "0 0 0.5rem 0",
          color: "#007bff"
        }}>
                        Tab One
                    </h3>
                    <p>
                        This is the content for Tab One. You can put anything
                        here.
                    </p>
                </div>
            </TabsPanel>
            <TabsPanel index={1} style={tabPanelStyle}>
                <div style={{
        padding: "1rem",
        background: "#f5faff",
        borderRadius: 6
      }}>
                    <h3 style={{
          margin: "0 0 0.5rem 0",
          color: "#007bff"
        }}>
                        Tab Two
                    </h3>
                    <p>This is the content for Tab Two. Try switching tabs!</p>
                </div>
            </TabsPanel>
            <TabsPanel index={2} style={tabPanelStyle}>
                <div style={{
        padding: "1rem",
        background: "#f5faff",
        borderRadius: 6
      }}>
                    <h3 style={{
          margin: "0 0 0.5rem 0",
          color: "#007bff"
        }}>
                        Tab Three
                    </h3>
                    <p>
                        This is the content for Tab Three. Tabs are fully
                        customizable.
                    </p>
                </div>
            </TabsPanel>
        </Tabs>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultIndex={0}>
            <DefaultTabs />
            <TabsPanel index={0}>
                <div>
                    <h3>Tab One</h3>
                    <p>
                        This is the content for Tab One. You can put anything
                        here.
                    </p>
                </div>
            </TabsPanel>
            <TabsPanel index={1}>
                <div>
                    <h3>Tab Two</h3>
                    <p>This is the content for Tab Two. Try switching tabs!</p>
                </div>
            </TabsPanel>
            <TabsPanel index={2}>
                <div>
                    <h3>Tab Three</h3>
                    <p>
                        This is the content for Tab Three. Tabs are fully
                        customizable.
                    </p>
                </div>
            </TabsPanel>
        </Tabs>
}`,...h.parameters?.docs?.source}}};const O=["CustomStyled","Default"];export{f as CustomStyled,h as Default,O as __namedExportsOrder,S as default};
