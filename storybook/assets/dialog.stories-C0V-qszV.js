import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-DCsTv-qJ.js";import{r as v}from"./index-BTYqcJqP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Tmh7Lm4G.js";const c=i.createContext(null);function u(){const e=i.useContext(c);if(!e)throw new Error("Dialog subcomponents must be used inside <Dialog>");return e}function m({open:e,onClose:o,children:t,container:r}){const s=i.useId(),d=i.useId(),g=i.useRef(null);if(i.useLayoutEffect(()=>{e&&(g.current=document.activeElement)},[e]),i.useEffect(()=>{if(!e)return;const h=document.body.style.overflow;document.body.style.overflow="hidden";const p=f=>{f.key==="Escape"&&(f.stopPropagation(),o())};return document.addEventListener("keydown",p,!0),()=>{document.body.style.overflow=h,document.removeEventListener("keydown",p,!0),g.current?.focus?.()}},[e,o]),!e)return null;const y=()=>{console.log("Dialog opened")},C=r??document.body;return v.createPortal(n.jsx(c.Provider,{value:{onClose:o,titleId:s,descriptionId:d,open:e,onOpen:y},children:t}),C)}function b({children:e,...o}){const{titleId:t}=u();return n.jsx("h2",{...o,id:t,"data-slot":"dialog-title",children:e})}b.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};function x({children:e,...o}){const{onClose:t}=u();return n.jsx("div",{...o,onMouseDown:r=>{r.target===r.currentTarget&&t()},"data-slot":"dialog-overlay",children:e})}x.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};function l({children:e,...o}){const{titleId:t,descriptionId:r}=u(),s=i.useRef(null);return i.useEffect(()=>{s.current?.focus()},[]),n.jsx("div",{...o,ref:s,role:"dialog","aria-modal":"true","aria-labelledby":t,"aria-describedby":r,tabIndex:-1,"data-slot":"dialog-content",children:e})}l.__docgenInfo={description:"",methods:[],displayName:"DialogContent"};function D({children:e,...o}){return n.jsx("div",{...o,"data-slot":"dialog-actions",children:e})}D.__docgenInfo={description:"",methods:[],displayName:"DialogActions"};function k(){const e=i.useContext(c);if(!e)throw new Error("useDialog must be used within a <Dialog>");const{open:o,onClose:t,onOpen:r,titleId:s,descriptionId:d}=e;return{open:o,onClose:t,onOpen:r,titleId:s,descriptionId:d}}const R={title:"Components/Dialog",component:m,parameters:{layout:"centered"}},a={render:()=>{const[e,o]=i.useState(!1);function t(){const{onClose:r}=k();return n.jsx(x,{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"grid",placeItems:"center"},children:n.jsxs(l,{style:{background:"white",padding:"1rem",borderRadius:8,maxWidth:400,width:"100%"},children:[n.jsx(b,{children:"Hook-powered Dialog"}),n.jsxs(l,{children:["This dialog uses ",n.jsx("code",{children:"useDialog()"})," to access context values."]}),n.jsxs(D,{style:{marginTop:16,display:"flex",gap:8},children:[n.jsx("button",{style:{padding:"0.5rem 1rem",border:"1px solid #ccc",borderRadius:4,background:"#f0f0f0",cursor:"pointer"},onClick:()=>{alert("Confirmed!"),r()},children:"Confirm"}),n.jsx("button",{style:{padding:"0.5rem 1rem",border:"1px solid #ccc",borderRadius:4,background:"#f9f9f9",cursor:"pointer"},onClick:r,children:"Close"})]})]})})}return n.jsxs("div",{children:[n.jsx("button",{style:{padding:"0.5rem 1rem",border:"1px solid #ccc",borderRadius:4,background:"#f9f9f9",cursor:"pointer"},onClick:()=>o(!0),children:"Open dialog"}),n.jsx(m,{open:e,onClose:()=>o(!1),children:n.jsx(t,{})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const T=["Basic"];export{a as Basic,T as __namedExportsOrder,R as default};
