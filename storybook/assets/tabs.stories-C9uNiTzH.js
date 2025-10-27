import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-lSegMLyX.js";import"./preload-helper-PPVm8Dsz.js";const x=d.createContext(null);function h({children:e,defaultIndex:a=0}){const[i,t]=d.useState(a),r=d.useRef([]),s=d.useRef([]);function l(o){return r.current.includes(o)||r.current.push(o),r.current.indexOf(o)}function b(o){return s.current.includes(o)||s.current.push(o),s.current.indexOf(o)}return n.jsx(x.Provider,{value:{selectedIndex:i,setSelectedIndex:t,tabRefs:r.current,panelRefs:s.current,registerTab:l,registerPanel:b},children:e})}h.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},defaultIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};function y({children:e,...a}){return n.jsx("div",{role:"tablist",...a,"data-slot":"tabs-list",children:e})}y.__docgenInfo={description:"",methods:[],displayName:"TabsList"};function T(){const e=d.useContext(x);if(!e)throw new Error("useTabs must be used within <Tabs />");return e}function g({index:e,children:a,...i}){const t=d.useRef(null),{selectedIndex:r,setSelectedIndex:s,tabRefs:l,registerTab:b}=T();d.useEffect(()=>{t.current&&b(t)},[]);function o(m){if(l.length){if(m.key==="ArrowRight"){const c=(e+1)%l.length;l[c]?.current?.focus(),s(c)}else if(m.key==="ArrowLeft"){const c=(e-1+l.length)%l.length;l[c]?.current?.focus(),s(c)}}}return n.jsx("button",{...i,ref:t,role:"tab","aria-selected":r===e,"aria-controls":`tab-panel-${e}`,id:`tab-${e}`,tabIndex:r===e?0:-1,onClick:()=>s(e),onKeyDown:o,"data-slot":"tab",children:a})}g.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{index:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function f({index:e,children:a,...i}){const t=d.useRef(null),{selectedIndex:r,registerPanel:s}=T();return d.useEffect(()=>{s(t)},[]),r!==e?null:n.jsx("div",{...i,ref:t,role:"tabpanel",id:`tab-panel-${e}`,"aria-labelledby":`tab-${e}`,tabIndex:0,"data-slot":"tabs-panel",children:a})}f.__docgenInfo={description:"",methods:[],displayName:"TabsPanel",props:{index:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const I={title:"Components/Tabs",component:h,parameters:{layout:"centered"}};function R(){const e={padding:"0.5rem 1.5rem",border:"none",borderBottom:"2px solid transparent",background:"none",cursor:"pointer",fontWeight:500,fontSize:"1rem",transition:"color 0.2s, border-color 0.2s",color:"#555"},a={...e,color:"#007bff",borderBottom:"2px solid #007bff",background:"#f5faff"},{selectedIndex:i}=T();return n.jsx(y,{style:{display:"flex",gap:"0.5rem",marginBottom:"1.5rem",borderBottom:"1px solid #eee",background:"#fff",borderRadius:"6px 6px 0 0",boxShadow:"0 1px 4px rgba(0,0,0,0.04)",width:"fit-content"},children:[0,1,2].map(t=>n.jsx(g,{index:t,style:i===t?a:e,onMouseOver:r=>r.currentTarget.style.color="#0056b3",onMouseOut:r=>r.currentTarget.style.color=i===t?"#007bff":"#555",children:["Tab One","Tab Two","Tab Three"][t]},t))})}const p={width:"400px",background:"#f0f4fa",height:"100px"},u={render:()=>n.jsxs(h,{defaultIndex:0,children:[n.jsx(R,{}),n.jsx(f,{index:0,style:p,children:n.jsxs("div",{style:{padding:"1rem",background:"#f5faff",borderRadius:6},children:[n.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#007bff"},children:"Tab One"}),n.jsx("p",{children:"This is the content for Tab One. You can put anything here."})]})}),n.jsx(f,{index:1,style:p,children:n.jsxs("div",{style:{padding:"1rem",background:"#f5faff",borderRadius:6},children:[n.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#007bff"},children:"Tab Two"}),n.jsx("p",{children:"This is the content for Tab Two. Try switching tabs!"})]})}),n.jsx(f,{index:2,style:p,children:n.jsxs("div",{style:{padding:"1rem",background:"#f5faff",borderRadius:6},children:[n.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#007bff"},children:"Tab Three"}),n.jsx("p",{children:"This is the content for Tab Three. Tabs are fully customizable."})]})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const P=["Default"];export{u as Default,P as __namedExportsOrder,I as default};
