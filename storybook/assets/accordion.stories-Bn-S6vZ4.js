import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-bBOc3of9.js";import"./preload-helper-PPVm8Dsz.js";const C=o.createContext(null);function y({children:t,multiple:c=!1,defaultOpenItems:s=[]}){const[v,l]=o.useState(s),u=n=>{l(a=>{const p=a.includes(n);return c?p?a.filter(j=>j!==n):[...a,n]:p?[]:[n]})};return e.jsx(C.Provider,{value:{openItems:v,toggleItem:u,multiple:c},children:e.jsx("div",{"data-slot":"accordion",children:t})})}y.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"Allow multiple items open at once?",defaultValue:{value:"false",computed:!1}},defaultOpenItems:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};function r({children:t,value:c,style:s}){return e.jsx("div",{"data-slot":"accordion-item","data-value":c,style:{...s,width:"100%"},children:t})}r.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};function H(){const t=o.useContext(C);if(!t)throw new Error("Accordion subcomponents must be used inside <Accordion>");return t}function i({children:t,value:c,...s}){const{openItems:v,toggleItem:l}=H(),u=o.useId(),n=o.useId(),a=v.includes(c);return e.jsx("h3",{"data-slot":"accordion-header",...s,style:{...s.style,margin:0},children:e.jsx("div",{id:u,"aria-expanded":a,"aria-controls":n,onClick:()=>l(c),"data-slot":"accordion-trigger",children:t})})}i.__docgenInfo={description:"",methods:[],displayName:"AccordionHeader",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"string"},description:""}}};function d({children:t,value:c,style:s}){const{openItems:v}=H(),l=v.includes(c),u=o.useId(),n=o.useRef(null),[a,p]=o.useState("0px"),[j,g]=o.useState(l),[P,w]=o.useState(l?1:0);return o.useEffect(()=>{l?(g(!0),setTimeout(()=>{n.current&&(p(n.current.scrollHeight+"px"),w(1))},10)):(n.current&&p(n.current.scrollHeight+"px"),w(0),setTimeout(()=>{p("0px")},10),setTimeout(()=>g(!1),300))},[l,t]),j?e.jsx("div",{ref:n,style:{...s,width:"100%",height:a,opacity:P,overflow:"hidden",transition:"height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s"},id:u,role:"region","aria-labelledby":u,"data-slot":"accordion-panel",children:t}):null}d.__docgenInfo={description:"",methods:[],displayName:"AccordionPanel",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const R={title:"Components/Accordion",component:y,parameters:{layout:"centered"}},S={width:"100%",textAlign:"left",padding:"0.75rem 1rem",background:"#f9fafb",border:"1px solid #e5e7eb",cursor:"pointer",fontWeight:500},I={width:"100%",textAlign:"left",padding:"0.75rem 1rem",background:"#f9fafb",border:"1px solid #e5e7eb",cursor:"pointer",fontWeight:500},h={padding:"1rem",border:"1px solid #e5e7eb",borderTop:"none",background:"white",width:"100%",marginBottom:"0.2rem"},m={width:"100%"},x={render:()=>e.jsx("div",{style:{width:400},children:e.jsxs(y,{children:[e.jsxs(r,{style:m,children:[e.jsx(i,{value:"one",children:e.jsx("div",{style:S,children:"Section 1"})}),e.jsx(d,{value:"one",children:e.jsx("div",{style:h,children:e.jsx("p",{children:"Content for section 1"})})})]}),e.jsxs(r,{style:m,children:[e.jsx(i,{value:"two",children:e.jsx("div",{style:S,children:"Section 2"})}),e.jsx(d,{value:"two",children:e.jsx("div",{style:h,children:e.jsx("p",{children:"Content for section 2"})})})]}),e.jsxs(r,{style:m,children:[e.jsx(i,{value:"three",children:e.jsx("div",{style:S,children:"Section 3"})}),e.jsx(d,{value:"three",children:e.jsx("div",{style:h,children:e.jsx("p",{children:"Content for section 3"})})})]})]})})},A={render:()=>e.jsx("div",{style:{width:400},children:e.jsxs(y,{multiple:!0,defaultOpenItems:["one"],children:[e.jsxs(r,{style:m,children:[e.jsx(i,{value:"one",children:e.jsx("div",{style:I,children:"Section 1"})}),e.jsx(d,{value:"one",children:e.jsx("div",{style:h,children:e.jsx("p",{children:"Content for section 1"})})})]}),e.jsxs(r,{style:m,children:[e.jsx(i,{value:"two",children:e.jsx("div",{style:I,children:"Section 2"})}),e.jsx(d,{value:"two",children:e.jsx("div",{style:h,children:e.jsx("p",{children:"Content for section 2"})})})]}),e.jsxs(r,{style:m,children:[e.jsx(i,{value:"three",children:e.jsx("div",{style:I,children:" Section 3"})}),e.jsx(d,{value:"three",children:e.jsx("div",{style:h,children:e.jsx("p",{children:"Content for section 3"})})})]})]})})},f={render:()=>e.jsx("div",{style:{width:400},children:e.jsxs(y,{children:[e.jsxs(r,{children:[e.jsx(i,{value:"one",children:e.jsx("div",{children:"Section 1"})}),e.jsx(d,{value:"one",children:e.jsx("div",{children:e.jsx("p",{children:"Content for section 1"})})})]}),e.jsxs(r,{children:[e.jsx(i,{value:"two",children:e.jsx("div",{children:"Section 2"})}),e.jsx(d,{value:"two",children:e.jsx("div",{children:e.jsx("p",{children:"Content for section 2"})})})]}),e.jsxs(r,{children:[e.jsx(i,{value:"three",children:e.jsx("div",{children:"Section 3"})}),e.jsx(d,{value:"three",children:e.jsx("div",{children:e.jsx("p",{children:"Content for section 3"})})})]})]})})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400
  }}>
            <Accordion>
                <AccordionItem style={itemStyle}>
                    <AccordionHeader value="one">
                        <div style={headerStyle}>Section 1</div>
                    </AccordionHeader>
                    <AccordionPanel value="one">
                        <div style={panelStyle}>
                            <p>Content for section 1</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem style={itemStyle}>
                    <AccordionHeader value="two">
                        <div style={headerStyle}>Section 2</div>
                    </AccordionHeader>
                    <AccordionPanel value="two">
                        <div style={panelStyle}>
                            <p>Content for section 2</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem style={itemStyle}>
                    <AccordionHeader value="three">
                        <div style={headerStyle}>Section 3</div>
                    </AccordionHeader>
                    <AccordionPanel value="three">
                        <div style={panelStyle}>
                            <p>Content for section 3</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
}`,...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400
  }}>
            <Accordion multiple defaultOpenItems={["one"]}>
                <AccordionItem style={itemStyle}>
                    <AccordionHeader value="one">
                        <div style={multiHeaderStyle}>Section 1</div>
                    </AccordionHeader>
                    <AccordionPanel value="one">
                        <div style={panelStyle}>
                            <p>Content for section 1</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem style={itemStyle}>
                    <AccordionHeader value="two">
                        <div style={multiHeaderStyle}>Section 2</div>
                    </AccordionHeader>
                    <AccordionPanel value="two">
                        <div style={panelStyle}>
                            <p>Content for section 2</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem style={itemStyle}>
                    <AccordionHeader value="three">
                        <div style={multiHeaderStyle}> Section 3</div>
                    </AccordionHeader>
                    <AccordionPanel value="three">
                        <div style={panelStyle}>
                            <p>Content for section 3</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
}`,...A.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400
  }}>
            <Accordion>
                <AccordionItem>
                    <AccordionHeader value="one">
                        <div>Section 1</div>
                    </AccordionHeader>
                    <AccordionPanel value="one">
                        <div>
                            <p>Content for section 1</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader value="two">
                        <div>Section 2</div>
                    </AccordionHeader>
                    <AccordionPanel value="two">
                        <div>
                            <p>Content for section 2</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader value="three">
                        <div>Section 3</div>
                    </AccordionHeader>
                    <AccordionPanel value="three">
                        <div>
                            <p>Content for section 3</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
}`,...f.parameters?.docs?.source}}};const _=["CustomStyledSingle","CustomStyledMultiple","Default"];export{A as CustomStyledMultiple,x as CustomStyledSingle,f as Default,_ as __namedExportsOrder,R as default};
