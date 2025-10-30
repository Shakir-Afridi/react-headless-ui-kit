import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-bBOc3of9.js";import"./preload-helper-PPVm8Dsz.js";const j=u.createContext(null);function o({children:n,checked:t,defaultChecked:r=!1,onChange:s,disabled:a=!1}){const[c,h]=u.useState(r),p=u.useRef(null),m=t!==void 0,g=m?t:c,k=d=>{m||h(d),s?.(d)};return e.jsx(j.Provider,{value:{checked:g,setChecked:k,disabled:a,buttonRef:p},children:n})}o.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function C(){const n=u.useContext(j);if(!n)throw new Error("Switch subcomponents must be used inside <Switch>");const{checked:t,setChecked:r,disabled:s,buttonRef:a}=n;return{checked:t,setChecked:r,disabled:s,buttonRef:a}}function i({children:n,style:t,...r}){const{checked:s,setChecked:a,disabled:c,buttonRef:h}=C(),p=()=>{c||a(!s)},m=d=>{(d.key===" "||d.key==="Enter")&&(d.preventDefault(),p())},g={width:"44px",height:"24px",borderRadius:"12px",border:"none",background:s?"#10b981":"#d1d5db",position:"relative",cursor:c?"not-allowed":"pointer",transition:"background 0.2s ease",opacity:c?.5:1,...t},k={position:"absolute",width:"20px",height:"20px",borderRadius:"50%",background:"white",top:"2px",left:s?"22px":"2px",transition:"left 0.2s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.2)"};return e.jsx("button",{...r,ref:h,type:"button",role:"switch","aria-checked":s,disabled:c,onClick:p,onKeyDown:m,style:g,"data-slot":"switch-button","data-checked":s,"data-disabled":c,children:n||e.jsx("span",{style:k})})}i.__docgenInfo={description:"",methods:[],displayName:"SwitchButton"};function l({children:n,style:t,...r}){const{buttonRef:s,disabled:a}=C(),c=()=>{s.current?.click()},h={cursor:a?"not-allowed":"pointer",userSelect:"none",opacity:a?.5:1,...t};return e.jsx("label",{...r,onClick:c,style:h,"data-slot":"switch-label",children:n})}l.__docgenInfo={description:"",methods:[],displayName:"SwitchLabel"};const I={title:"Components/Switch",component:o,parameters:{layout:"centered"}},x={render:()=>e.jsx(o,{children:e.jsx(i,{})})},f={render:()=>e.jsx(o,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(i,{}),e.jsx(l,{children:"Enable notifications"})]})})},b={render:()=>{const n=()=>{const{checked:t}=C();return e.jsx("span",{style:{position:"absolute",width:"26px",height:"26px",borderRadius:"50%",background:"white",top:"2px",left:t?"32px":"2px",transition:"left 0.2s ease"}})};return e.jsx(o,{defaultChecked:!0,children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(i,{style:{width:"60px",height:"30px",borderRadius:"15px",background:"#3b82f6"},children:e.jsx(n,{})}),e.jsx(l,{style:{fontSize:"14px",fontWeight:500},children:"Custom styled switch"})]})})}},w={render:()=>{const n=()=>{const[t,r]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{checked:t,onChange:r,children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(i,{}),e.jsx(l,{children:"Controlled switch"})]})}),e.jsxs("p",{style:{marginTop:"1rem"},children:["State: ",t?"ON":"OFF"]})]})};return e.jsx(n,{})}},S={render:()=>e.jsx(o,{disabled:!0,children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(i,{}),e.jsx(l,{children:"Disabled switch"})]})})},y={render:()=>e.jsx(o,{defaultChecked:!0,children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(i,{}),e.jsx(l,{children:"Default checked"})]})})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Switch>
            <SwitchButton />
        </Switch>
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Switch>
            <div style={{
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }}>
                <SwitchButton />
                <SwitchLabel>Enable notifications</SwitchLabel>
            </div>
        </Switch>
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const CustomThumb = () => {
      const {
        checked
      } = useSwitch();
      return <span style={{
        position: "absolute",
        width: "26px",
        height: "26px",
        borderRadius: "50%",
        background: "white",
        top: "2px",
        left: checked ? "32px" : "2px",
        transition: "left 0.2s ease"
      }} />;
    };
    return <Switch defaultChecked>
                <div style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
      }}>
                    <SwitchButton style={{
          width: "60px",
          height: "30px",
          borderRadius: "15px",
          background: "#3b82f6"
        }}>
                        <CustomThumb />
                    </SwitchButton>
                    <SwitchLabel style={{
          fontSize: "14px",
          fontWeight: 500
        }}>
                        Custom styled switch
                    </SwitchLabel>
                </div>
            </Switch>;
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ControlledExample = () => {
      const [checked, setChecked] = useState(false);
      return <div>
                    <Switch checked={checked} onChange={setChecked}>
                        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
                            <SwitchButton />
                            <SwitchLabel>Controlled switch</SwitchLabel>
                        </div>
                    </Switch>
                    <p style={{
          marginTop: "1rem"
        }}>
                        State: {checked ? "ON" : "OFF"}
                    </p>
                </div>;
    };
    return <ControlledExample />;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Switch disabled>
            <div style={{
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }}>
                <SwitchButton />
                <SwitchLabel>Disabled switch</SwitchLabel>
            </div>
        </Switch>
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Switch defaultChecked>
            <div style={{
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }}>
                <SwitchButton />
                <SwitchLabel>Default checked</SwitchLabel>
            </div>
        </Switch>
}`,...y.parameters?.docs?.source}}};const R=["Default","WithLabel","CustomStyled","Controlled","Disabled","DefaultChecked"];export{w as Controlled,b as CustomStyled,x as Default,y as DefaultChecked,S as Disabled,f as WithLabel,R as __namedExportsOrder,I as default};
