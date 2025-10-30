import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-bBOc3of9.js";import"./preload-helper-PPVm8Dsz.js";const O=u.createContext(null);function x({children:o,value:a,onChange:s,multiple:n=!1}){const[r,t]=u.useState(!1),[p,i]=u.useState(n?[]:""),c=u.useRef(null),l=u.useRef(null),m=a!==void 0,b=m?a:p,R=d=>{m||i(d),s?.(d)};return u.useEffect(()=>{if(!r)return;const d=y=>{l.current&&!l.current.contains(y.target)&&c.current&&!c.current.contains(y.target)&&t(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[r]),u.useEffect(()=>{if(!r)return;const d=y=>{y.key==="Escape"&&t(!1)};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[r]),e.jsx(O.Provider,{value:{open:r,setOpen:t,value:b,setValue:R,inputRef:c,optionsRef:l,multiple:n},children:o})}x.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function S(){const o=u.useContext(O);if(!o)throw new Error("ComboBox subcomponents must be used inside <ComboBox>");const{open:a,setOpen:s,value:n,setValue:r,inputRef:t,optionsRef:p,multiple:i}=o;return{open:a,setOpen:s,value:n,setValue:r,inputRef:t,optionsRef:p,multiple:i}}function g({type:o="text",placeholder:a,...s}){const{open:n,setOpen:r,value:t,setValue:p,inputRef:i,multiple:c}=S(),l=b=>{if(o==="select"&&c){const R=b.target,d=Array.from(R.selectedOptions).map(y=>y.value);p(d)}else p(b.target.value)},m=()=>{o!=="select"&&r(!0)};return o==="textarea"?e.jsx("textarea",{...s,ref:i,value:Array.isArray(t)?t.join(", "):t,onChange:l,onFocus:m,placeholder:a,"aria-haspopup":"listbox","aria-expanded":n,"data-slot":"combobox-input"}):o==="select"?e.jsx("select",{...s,ref:i,value:t,onChange:l,multiple:c,"aria-haspopup":"listbox","data-slot":"combobox-input",children:s.children}):e.jsx("input",{...s,ref:i,type:o,value:Array.isArray(t)?t.join(", "):t,onChange:l,onFocus:m,placeholder:a,"aria-haspopup":"listbox","aria-expanded":n,"data-slot":"combobox-input"})}g.__docgenInfo={description:"",methods:[],displayName:"ComboBoxInput",props:{type:{required:!1,tsType:{name:"union",raw:`| "text"
| "textarea"
| "date"
| "select"
| "email"
| "number"
| "password"`,elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"textarea"'},{name:"literal",value:'"date"'},{name:"literal",value:'"select"'},{name:"literal",value:'"email"'},{name:"literal",value:'"number"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""}}};function I({children:o,...a}){const{open:s,optionsRef:n,inputRef:r}=S();return s?e.jsx("div",{...a,style:{...a.style,position:"absolute"},ref:n,role:"listbox","aria-labelledby":r.current?.id,tabIndex:-1,"data-slot":"combobox-options",children:o}):null}I.__docgenInfo={description:"",methods:[],displayName:"ComboBoxOptions"};function h({value:o,children:a,...s}){const{value:n,setValue:r,setOpen:t,multiple:p}=S(),i=p?Array.isArray(n)&&n.includes(o):n===o,c=()=>{if(p){const l=Array.isArray(n)?n:[],m=i?l.filter(b=>b!==o):[...l,o];r(m)}else r(o),t(!1)};return e.jsx("div",{...s,role:"option","aria-selected":i,onClick:c,"data-slot":"combobox-option","data-selected":i,children:a})}h.__docgenInfo={description:"",methods:[],displayName:"ComboBoxOption",props:{value:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _={title:"Components/ComboBox",component:x,parameters:{layout:"centered"}},f={padding:"0.5rem 1rem",cursor:"pointer",borderBottom:"1px solid #eee"},v={render:()=>e.jsx(x,{children:e.jsx(g,{type:"text",placeholder:"Search countries...",style:{padding:"0.5rem",border:"1px solid #ccc",borderRadius:4,width:"200px"}})})},C={render:()=>e.jsx(x,{children:e.jsx(g,{type:"textarea",placeholder:"Enter your message...",style:{padding:"0.5rem",border:"1px solid #ccc",borderRadius:4,width:"300px",minHeight:"100px",resize:"vertical"}})})},B={render:()=>e.jsx(x,{children:e.jsx(g,{type:"date",style:{padding:"0.5rem",border:"1px solid #ccc",borderRadius:4,width:"200px"}})})},w={render:()=>e.jsx(x,{children:e.jsxs(g,{type:"select",style:{padding:"0.5rem",border:"1px solid #ccc",borderRadius:4,width:"200px"},children:[e.jsx("option",{value:"",children:"Select a fruit..."}),e.jsx("option",{value:"apple",children:"Apple"}),e.jsx("option",{value:"banana",children:"Banana"}),e.jsx("option",{value:"orange",children:"Orange"}),e.jsx("option",{value:"grape",children:"Grape"})]})})},j={render:()=>e.jsxs(x,{multiple:!0,children:[e.jsx(g,{type:"text",placeholder:"Select colors...",style:{padding:"0.5rem",border:"1px solid #ccc",borderRadius:4,width:"200px"}}),e.jsxs(I,{style:{marginTop:"4px",background:"white",border:"1px solid #ddd",borderRadius:4,boxShadow:"0 2px 6px rgba(0,0,0,0.15)"},children:[e.jsx(h,{value:"red",style:f,children:"🔴 Red"}),e.jsx(h,{value:"blue",style:f,children:"🔵 Blue"}),e.jsx(h,{value:"green",style:f,children:"🟢 Green"}),e.jsx(h,{value:"yellow",style:f,children:"🟡 Yellow"})]})]})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ComboBox>
            <ComboBoxInput type="text" placeholder="Search countries..." style={{
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: 4,
      width: "200px"
    }} />
        </ComboBox>
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <ComboBox>
            <ComboBoxInput type="textarea" placeholder="Enter your message..." style={{
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: 4,
      width: "300px",
      minHeight: "100px",
      resize: "vertical"
    }} />
        </ComboBox>
}`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <ComboBox>
            <ComboBoxInput type="date" style={{
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: 4,
      width: "200px"
    }} />
        </ComboBox>
}`,...B.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ComboBox>
            <ComboBoxInput type="select" style={{
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: 4,
      width: "200px"
    }}>
                <option value="">Select a fruit...</option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
                <option value="grape">Grape</option>
            </ComboBoxInput>
        </ComboBox>
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ComboBox multiple>
            <ComboBoxInput type="text" placeholder="Select colors..." style={{
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: 4,
      width: "200px"
    }} />
            <ComboBoxOptions style={{
      marginTop: "4px",
      background: "white",
      border: "1px solid #ddd",
      borderRadius: 4,
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
    }}>
                <ComboBoxOption value="red" style={optionStyle}>
                    🔴 Red
                </ComboBoxOption>
                <ComboBoxOption value="blue" style={optionStyle}>
                    🔵 Blue
                </ComboBoxOption>
                <ComboBoxOption value="green" style={optionStyle}>
                    🟢 Green
                </ComboBoxOption>
                <ComboBoxOption value="yellow" style={optionStyle}>
                    🟡 Yellow
                </ComboBoxOption>
            </ComboBoxOptions>
        </ComboBox>
}`,...j.parameters?.docs?.source}}};const k=["TextInput","TextArea","DateInput","Select","MultiSelectWithOptions"];export{B as DateInput,j as MultiSelectWithOptions,w as Select,C as TextArea,v as TextInput,k as __namedExportsOrder,_ as default};
