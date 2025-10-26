import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-IWvqQ_Im.js";import"./preload-helper-PPVm8Dsz.js";const j=p.createContext(null);function x({children:n,multiple:t=!1,defaultOpenItems:o=[]}){const[u,m]=p.useState(o),c=s=>{m(h=>{const A=h.includes(s);return t?A?h.filter(S=>S!==s):[...h,s]:A?[]:[s]})};return e.jsx(j.Provider,{value:{openItems:u,toggleItem:c,multiple:t},children:e.jsx("div",{"data-slot":"accordion",children:n})})}x.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"Allow multiple items open at once?",defaultValue:{value:"false",computed:!1}},defaultOpenItems:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};function r({children:n,value:t,style:o}){return e.jsx("div",{"data-slot":"accordion-item","data-value":t,style:{...o,width:"100%"},children:n})}r.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};function f(){const n=p.useContext(j);if(!n)throw new Error("Accordion subcomponents must be used inside <Accordion>");return n}function i({children:n,value:t,...o}){const{openItems:u,toggleItem:m}=f(),c=p.useId(),s=p.useId(),h=u.includes(t);return e.jsx("h3",{"data-slot":"accordion-header",...o,style:{...o.style,paddingTop:"0 !important",paddingBottom:"0 !important",margin:0},children:e.jsx("div",{id:c,"aria-expanded":h,"aria-controls":s,onClick:()=>m(t),"data-slot":"accordion-trigger",children:n})})}i.__docgenInfo={description:"",methods:[],displayName:"AccordionHeader",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"string"},description:""}}};function d({children:n,value:t,style:o}){const{openItems:u}=f(),m=u.includes(t),c=p.useId();return m?e.jsx("div",{style:{...o,width:"100%"},id:c,role:"region","aria-labelledby":c,"data-slot":"accordion-panel",children:n}):null}d.__docgenInfo={description:"",methods:[],displayName:"AccordionPanel",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const P={title:"Components/Accordion",component:x,parameters:{layout:"centered"}},l={width:"100%",textAlign:"left",padding:"0.75rem 1rem",background:"#f9fafb",border:"1px solid #e5e7eb",cursor:"pointer",fontWeight:500},a={padding:"1rem",border:"1px solid #e5e7eb",borderTop:"none",background:"white",width:"100%",marginBottom:"0.2rem"},I={width:"100%"},v={render:()=>e.jsx("div",{style:{width:400},children:e.jsxs(x,{children:[e.jsxs(r,{style:I,children:[e.jsx(i,{value:"one",children:e.jsx("div",{style:l,children:"Section 1"})}),e.jsx(d,{value:"one",children:e.jsx("div",{style:a,children:e.jsx("p",{children:"Content for section 1"})})})]}),e.jsxs(r,{children:[e.jsx(i,{value:"two",children:e.jsx("div",{style:l,children:"Section 2"})}),e.jsx(d,{value:"two",children:e.jsx("div",{style:a,children:e.jsx("p",{children:"Content for section 2"})})})]}),e.jsxs(r,{value:"three",children:[e.jsx(i,{value:"three",children:e.jsx("div",{style:l,children:"Section 3"})}),e.jsx(d,{value:"three",children:e.jsx("div",{style:a,children:e.jsx("p",{children:"Content for section 3"})})})]})]})})},y={render:()=>e.jsx("div",{style:{width:400},children:e.jsxs(x,{multiple:!0,defaultOpenItems:["one"],children:[e.jsxs(r,{value:"one",children:[e.jsx(i,{value:"one",children:e.jsx("span",{style:l,children:"Section 1"})}),e.jsx(d,{value:"one",children:e.jsx("div",{style:a,children:e.jsx("p",{children:"Content for section 1"})})})]}),e.jsxs(r,{value:"two",children:[e.jsx(i,{value:"two",children:e.jsx("span",{style:l,children:"Section 2"})}),e.jsx(d,{value:"two",children:e.jsx("div",{style:a,children:e.jsx("p",{children:"Content for section 2"})})})]}),e.jsxs(r,{value:"three",children:[e.jsx(i,{value:"three",children:e.jsx("span",{style:l,children:"Section 3"})}),e.jsx(d,{value:"three",children:e.jsx("div",{style:a,children:e.jsx("p",{children:"Content for section 3"})})})]})]})})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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

                <AccordionItem>
                    <AccordionHeader value="two">
                        <div style={headerStyle}>Section 2</div>
                    </AccordionHeader>
                    <AccordionPanel value="two">
                        <div style={panelStyle}>
                            <p>Content for section 2</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="three">
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400
  }}>
            <Accordion multiple defaultOpenItems={["one"]}>
                <AccordionItem value="one">
                    <AccordionHeader value="one">
                        <span style={headerStyle}>Section 1</span>
                    </AccordionHeader>
                    <AccordionPanel value="one">
                        <div style={panelStyle}>
                            <p>Content for section 1</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="two">
                    <AccordionHeader value="two">
                        <span style={headerStyle}>Section 2</span>
                    </AccordionHeader>
                    <AccordionPanel value="two">
                        <div style={panelStyle}>
                            <p>Content for section 2</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="three">
                    <AccordionHeader value="three">
                        <span style={headerStyle}>Section 3</span>
                    </AccordionHeader>
                    <AccordionPanel value="three">
                        <div style={panelStyle}>
                            <p>Content for section 3</p>
                        </div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
}`,...y.parameters?.docs?.source}}};const b=["SingleOpen","MultipleOpen"];export{y as MultipleOpen,v as SingleOpen,b as __namedExportsOrder,P as default};
