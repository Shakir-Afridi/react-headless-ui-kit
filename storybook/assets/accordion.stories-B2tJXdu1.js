import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-B_mrXmmg.js";import"./preload-helper-PPVm8Dsz.js";const S=p.createContext(null);function x({children:n,multiple:t=!1,defaultOpenItems:o=[]}){const[u,m]=p.useState(o),c=s=>{m(y=>{const j=y.includes(s);return t?j?y.filter(g=>g!==s):[...y,s]:j?[]:[s]})};return e.jsx(S.Provider,{value:{openItems:u,toggleItem:c,multiple:t},children:e.jsx("div",{"data-slot":"accordion",children:n})})}x.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"Allow multiple items open at once?",defaultValue:{value:"false",computed:!1}},defaultOpenItems:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};function r({children:n,value:t,style:o}){return e.jsx("div",{"data-slot":"accordion-item","data-value":t,style:{...o,width:"100%"},children:n})}r.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};function I(){const n=p.useContext(S);if(!n)throw new Error("Accordion subcomponents must be used inside <Accordion>");return n}function i({children:n,value:t,...o}){const{openItems:u,toggleItem:m}=I(),c=p.useId(),s=p.useId(),y=u.includes(t);return e.jsx("h3",{"data-slot":"accordion-header",...o,style:{...o.style,margin:0},children:e.jsx("div",{id:c,"aria-expanded":y,"aria-controls":s,onClick:()=>m(t),"data-slot":"accordion-trigger",children:n})})}i.__docgenInfo={description:"",methods:[],displayName:"AccordionHeader",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"string"},description:""}}};function d({children:n,value:t,style:o}){const{openItems:u}=I(),m=u.includes(t),c=p.useId();return m?e.jsx("div",{style:{...o,width:"100%"},id:c,role:"region","aria-labelledby":c,"data-slot":"accordion-panel",children:n}):null}d.__docgenInfo={description:"",methods:[],displayName:"AccordionPanel",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const b={title:"Components/Accordion",component:x,parameters:{layout:"centered"}},A={width:"100%",textAlign:"left",padding:"0.75rem 1rem",background:"#f9fafb",border:"1px solid #e5e7eb",cursor:"pointer",fontWeight:500},f={width:"100%",textAlign:"left",padding:"0.75rem 1rem",background:"#f9fafb",border:"1px solid #e5e7eb",cursor:"pointer",fontWeight:500},l={padding:"1rem",border:"1px solid #e5e7eb",borderTop:"none",background:"white",width:"100%",marginBottom:"0.2rem"},a={width:"100%"},h={render:()=>e.jsx("div",{style:{width:400},children:e.jsxs(x,{children:[e.jsxs(r,{style:a,children:[e.jsx(i,{value:"one",children:e.jsx("div",{style:A,children:"Section 1"})}),e.jsx(d,{value:"one",children:e.jsx("div",{style:l,children:e.jsx("p",{children:"Content for section 1"})})})]}),e.jsxs(r,{style:a,children:[e.jsx(i,{value:"two",children:e.jsx("div",{style:A,children:"Section 2"})}),e.jsx(d,{value:"two",children:e.jsx("div",{style:l,children:e.jsx("p",{children:"Content for section 2"})})})]}),e.jsxs(r,{style:a,children:[e.jsx(i,{value:"three",children:e.jsx("div",{style:A,children:"Section 3"})}),e.jsx(d,{value:"three",children:e.jsx("div",{style:l,children:e.jsx("p",{children:"Content for section 3"})})})]})]})})},v={render:()=>e.jsx("div",{style:{width:400},children:e.jsxs(x,{multiple:!0,defaultOpenItems:["one"],children:[e.jsxs(r,{style:a,children:[e.jsx(i,{value:"one",children:e.jsx("div",{style:f,children:"Section 1"})}),e.jsx(d,{value:"one",children:e.jsx("div",{style:l,children:e.jsx("p",{children:"Content for section 1"})})})]}),e.jsxs(r,{style:a,children:[e.jsx(i,{value:"two",children:e.jsx("div",{style:f,children:"Section 2"})}),e.jsx(d,{value:"two",children:e.jsx("div",{style:l,children:e.jsx("p",{children:"Content for section 2"})})})]}),e.jsxs(r,{style:a,children:[e.jsx(i,{value:"three",children:e.jsx("div",{style:f,children:" Section 3"})}),e.jsx(d,{value:"three",children:e.jsx("div",{style:l,children:e.jsx("p",{children:"Content for section 3"})})})]})]})})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const H=["SingleOpen","MultipleOpen"];export{v as MultipleOpen,h as SingleOpen,H as __namedExportsOrder,b as default};
