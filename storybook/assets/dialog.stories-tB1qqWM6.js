import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-CIfmgYGu.js";import{r as j}from"./index-Cr9egktX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7oCpf_x.js";const u=s.createContext(null);function g(){const e=s.useContext(u);if(!e)throw new Error("Dialog subcomponents must be used inside <Dialog>");return e}function p({open:e,onClose:o,children:r,container:t}){const i=s.useId(),c=s.useId(),b=s.useRef(null);if(s.useLayoutEffect(()=>{e&&(b.current=document.activeElement)},[e]),s.useEffect(()=>{if(!e)return;const v=document.body.style.overflow;document.body.style.overflow="hidden";const x=C=>{C.key==="Escape"&&(C.stopPropagation(),o())};return document.addEventListener("keydown",x,!0),()=>{document.body.style.overflow=v,document.removeEventListener("keydown",x,!0),b.current?.focus?.()}},[e,o]),!e)return null;const h=()=>{console.log("Dialog opened")},k=t??document.body;return j.createPortal(n.jsx(u.Provider,{value:{onClose:o,titleId:i,descriptionId:c,open:e,onOpen:h},children:r}),k)}function f({children:e,...o}){const{titleId:r}=g();return n.jsx("h2",{...o,id:r,"data-slot":"dialog-title",children:e})}f.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};function m({children:e,...o}){const{onClose:r}=g();return n.jsx("div",{...o,style:{...o.style,position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"grid",placeItems:"center"},onMouseDown:t=>{t.target===t.currentTarget&&r()},"data-slot":"dialog-overlay",children:e})}m.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};function l({children:e,...o}){const{titleId:r,descriptionId:t}=g(),i=s.useRef(null);return s.useEffect(()=>{i.current?.focus()},[]),n.jsx("div",{...o,style:{...o.style,background:o?.style?.background??"white"},ref:i,role:"dialog","aria-modal":"true","aria-labelledby":r,"aria-describedby":t,tabIndex:-1,"data-slot":"dialog-content",children:e})}l.__docgenInfo={description:"",methods:[],displayName:"DialogContent"};function D({children:e,...o}){return n.jsx("div",{...o,"data-slot":"dialog-actions",children:e})}D.__docgenInfo={description:"",methods:[],displayName:"DialogActions"};function y(){const e=s.useContext(u);if(!e)throw new Error("useDialog must be used within a <Dialog>");const{open:o,onClose:r,onOpen:t,titleId:i,descriptionId:c}=e;return{open:o,onClose:r,onOpen:t,titleId:i,descriptionId:c}}const R={title:"Components/Dialog",component:p,parameters:{layout:"centered"}},a={render:()=>{const[e,o]=s.useState(!1);function r(){const{onClose:t}=y();return n.jsx(m,{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"grid",placeItems:"center"},children:n.jsxs(l,{style:{background:"white",padding:"1rem",borderRadius:8,maxWidth:400,width:"100%"},children:[n.jsx(f,{children:"Hook-powered Dialog"}),n.jsxs(l,{children:["This dialog uses ",n.jsx("code",{children:"useDialog()"})," to access context values."]}),n.jsxs(D,{style:{marginTop:16,display:"flex",gap:8},children:[n.jsx("button",{style:{padding:"0.5rem 1rem",border:"1px solid #ccc",borderRadius:4,background:"#f0f0f0",cursor:"pointer"},onClick:()=>{alert("Confirmed!"),t()},children:"Confirm"}),n.jsx("button",{style:{padding:"0.5rem 1rem",border:"1px solid #ccc",borderRadius:4,background:"#f9f9f9",cursor:"pointer"},onClick:t,children:"Close"})]})]})})}return n.jsxs("div",{children:[n.jsx("button",{style:{padding:"0.5rem 1rem",border:"1px solid #ccc",borderRadius:4,background:"#f9f9f9",cursor:"pointer"},onClick:()=>o(!0),children:"Open dialog"}),n.jsx(p,{open:e,onClose:()=>o(!1),children:n.jsx(r,{})})]})}},d={render:()=>{const[e,o]=s.useState(!1);function r(){const{onClose:t}=y();return n.jsx(m,{children:n.jsxs(l,{children:[n.jsx(f,{children:"Hook-powered Dialog"}),n.jsxs(l,{children:["This dialog uses ",n.jsx("code",{children:"useDialog()"})," to access context values."]}),n.jsxs(D,{children:[n.jsx("button",{onClick:()=>{alert("Confirmed!"),t()},children:"Confirm"}),n.jsx("button",{onClick:t,children:"Close"})]})]})})}return n.jsxs("div",{children:[n.jsx("button",{onClick:()=>o(!0),children:"Open dialog"}),n.jsx(p,{open:e,onClose:()=>o(!1),children:n.jsx(r,{})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    function DialogInner() {
      const {
        onClose
      } = useDialog();
      return <DialogOverlay style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "grid",
        placeItems: "center"
      }}>
                    <DialogContent style={{
          background: "white",
          padding: "1rem",
          borderRadius: 8,
          maxWidth: 400,
          width: "100%"
        }}>
                        <DialogTitle>Hook-powered Dialog</DialogTitle>
                        <DialogContent>
                            This dialog uses <code>useDialog()</code> to access
                            context values.
                        </DialogContent>
                        <DialogActions style={{
            marginTop: 16,
            display: "flex",
            gap: 8
          }}>
                            <button style={{
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderRadius: 4,
              background: "#f0f0f0",
              cursor: "pointer"
            }} onClick={() => {
              alert("Confirmed!");
              onClose();
            }}>
                                Confirm
                            </button>
                            <button style={{
              padding: "0.5rem 1rem",
              border: "1px solid #ccc",
              borderRadius: 4,
              background: "#f9f9f9",
              cursor: "pointer"
            }} onClick={onClose}>
                                Close
                            </button>
                        </DialogActions>
                    </DialogContent>
                </DialogOverlay>;
    }
    return <div>
                <button style={{
        padding: "0.5rem 1rem",
        border: "1px solid #ccc",
        borderRadius: 4,
        background: "#f9f9f9",
        cursor: "pointer"
      }} onClick={() => setOpen(true)}>
                    Open dialog
                </button>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogInner />
                </Dialog>
            </div>;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    function DialogInner() {
      const {
        onClose
      } = useDialog();
      return <DialogOverlay>
                    <DialogContent>
                        <DialogTitle>Hook-powered Dialog</DialogTitle>
                        <DialogContent>
                            This dialog uses <code>useDialog()</code> to access
                            context values.
                        </DialogContent>
                        <DialogActions>
                            <button onClick={() => {
              alert("Confirmed!");
              onClose();
            }}>
                                Confirm
                            </button>
                            <button onClick={onClose}>Close</button>
                        </DialogActions>
                    </DialogContent>
                </DialogOverlay>;
    }
    return <div>
                <button onClick={() => setOpen(true)}>Open dialog</button>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogInner />
                </Dialog>
            </div>;
  }
}`,...d.parameters?.docs?.source}}};const _=["CustomStyled","Default"];export{a as CustomStyled,d as Default,_ as __namedExportsOrder,R as default};
