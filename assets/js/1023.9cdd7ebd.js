"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[1023],{1023:(e,t,l)=>{l.d(t,{iA:()=>T});var n=l(74345),a=l.n(n),o=l(67294),r=l(48915),i=l(55861);var s=l(17008),c=l(13396),d=l(43187);function b(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function m(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?b(Object(l),!0).forEach((function(t){p(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function u(e){switch(e.buttonSize){case"xSmall":return{width:"26px",height:"26px"};case"small":return{width:"35px",height:"35px"};case"medium":return{width:"40px",height:"40px"};case"large":return{width:"50px",height:"50px"};case"xLarge":return{width:"60px",height:"60px"};default:return{}}}function C(e){const t=(0,i.gh)().palette;return!0===e.circle?{border:"3px solid "+t.skeColor.interactive}:{border:"3px solid "+t.skeColor.transparent}}function g(e){const t=(0,i.gh)().palette;return{color:t.skeColor.blue,background:t.skeColor.lightBlue}}function h(e){switch(e.buttonSize){case"xSmall":return{fontsize:s.TS.smallPlus};case"small":return{fontSize:s.TS.mediumPlus};case"medium":return{fontSize:s.TS.largePlus};case"large":return{fontSize:s.TS.xxLarge};case"xLarge":return{fontSize:s.TS.superLarge};default:return{fontSize:s.TS.icon}}}const w=function(e){const t=(0,i.gh)().palette,l=e.circle?-8:-4,n=e.disabled;return(0,d.y)([(0,s.GL)({palette:t},l,"relative","50px"),{displayName:`ske-icon${e.buttonSize}-button`,selectors:{"&.ms-Button--icon":m(m({width:"40px",height:"40px",borderRadius:"50%",padding:0,background:"none",color:t.skeColor.blue},u(e)),C(e)),"&.ms-Button--icon i":m({},h(e)),"&.ms-Button--icon:hover":m({transition:"background-color 0.2s"},g()),"&:focus&:after":{},"&.ms-Button--icon:active":{transition:"0.15s",transform:n?"none":"translateY(2px)"},"&.ms-Button--icon:disabled":m(m({},C(e)),{},{color:t.skeColor.lightGrey,borderColor:t.skeColor.lightGrey,cursor:"not-allowed"}),"&.ms-Button--icon:disabled i":{color:t.skeColor.lightGrey}}}])};function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},f.apply(this,arguments)}function x(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}const E=e=>{const{icon:t,className:l}=e,n=x(e,["icon","className"]);return o.createElement(c.h,f({},n,{className:a()(w(e),l),iconProps:{iconName:t}}))};E.defaultProps={alt:" ",circle:!1,disabled:void 0,icon:void 0,onClick:void 0,title:void 0};var R=l(9142),y=l(55549),A=l(62696);const S=e=>{const{rowIndex:t,customClassNames:l,data:n,editableRows:c,editableContent:d,columns:b,editModeActive:m,expandableContent:p,expandableModeActive:u,expandableRows:C,expandIconPlacement:g,tableHasScroll:h,isEditableRowOpen:w=!1,isExpandableRowOpen:f=!1,onCloseRow:x,onEditRow:S,onExpandRow:v,openExpandableRowIndex:N,tableId:k,openEditableOnRowClick:O,showRowSeparators:T,compactTable:I}=e,$=!n.hideEdit&&c,z=n.hideEdit&&c,B=!n.hideSeparator&&T,H=b.length+($||C||z?1:0),j=o.useRef(null),P=o.createRef(),[F,M]=o.useState(N);(0,o.useEffect)((()=>{void 0!==N&&M(N)}),[N]),(0,o.useEffect)((()=>{if(F===t&&P.current){P.current.children[0].focus()}}),[P,F,t]);const W=((e,t)=>{const{compactTable:l}=e,n=(0,i.gh)().palette;return(0,r.Z)({tableRow:{borderBox:"box-sizing",verticalAlign:"middle",selectors:{"&.tableRowIsClickable":{selectors:{":hover":{backgroundColor:n.skeColor.lightBlue}}},"&.tableRowEditableAndOpen":{display:"table-row"},"&.tableRowEditableAndClosed":{display:"none"},"&.tableRowHasSeparator":{borderBottom:`1px solid ${n.skeColor.lightGrey}`}}},expandableContent:{width:t?t-5+"px":"",padding:l?`${R.uv}`:`${R.Ar} 0`,boxSizing:"border-box",position:"relative",zIndex:99},tableCell:{fontWeight:y.f$,padding:0,verticalAlign:"middle",selectors:{"&.tableCellAlignedRight":{justifyContent:"flex-end",textAlign:"right"},"&.tableCellAlignedCenter":{justifyContent:"center",textAlign:"center"},"&.tableCellIsSum":{textAlign:"end",padding:R.zc},"&.tableCellForExpandCollapseButton":{maxWidth:R.nv,selectors:{[`@media (min-width: ${A.EJ})`]:{maxWidth:"3.125rem"}}},"&.tableCellIsEditableRowClosed":{borderBottom:"none"},"&.tableCellAboveExpandedArea":{borderBottom:"none",verticalAlign:"top"},"&.tableCellHiddenOnMobile":{display:"none",selectors:{[`@media (min-width: ${A.EJ})`]:{display:"table-cell"}}},"&.tableCellHasSeparator":{borderBottom:`1px solid ${n.skeColor.lightGrey}`}}},cellContent:{display:"block",width:"100%",verticalAlign:"middle",boxSizing:"border-box",fontSize:l?y.If:"inherit",padding:`${R.Ar} ${R.zc}`,textAlign:"inherit",selectors:{"&.cellContentSmall":{padding:`${R.Qi} ${R.zc}`},"&.cellContentClickable":{paddingTop:R.Ar,paddingBottom:R.Ar,cursor:"pointer"},"&.cellContentLarge":{padding:l?`${R.uv} ${R.uv}`:`${R.zc} ${R.zc}`},"&.cellContentChildRow":{padding:`0 ${R.zc} ${R.zc} ${R.zc}`},"&.cellContentAlignedRight":{textAlign:"right"},"&.cellContentAlignedCenter":{textAlign:"center"},"&.cellContentAboveExpandedArea":{alignItems:"start"},"&.cellContentHideEdit":{minHeight:R.Qk}}},expandButton:{},expandButtonIsActive:{},editButton:{width:"100%",height:"100%",margin:0,padding:0,border:"none",background:"transparent",boxSizing:"border-box",fontSize:"inherit",textAlign:"inherit"},emptyTd:{borderBottom:`2px solid ${n.skeColor.blackAlt}`}})})(e,j?.current?.offsetWidth),D=n.children?n.children.length:0,L=o.createElement("span",{className:a()(W.cellContent,l?.cellContent,n.customClassNames?.cellContent,{cellContentSmall:!T||I})},o.createElement(E,{title:(0,s.t)("tablerow.editable.title"),type:"button",icon:"Edit",className:W.editButton,buttonSize:I?"xSmall":"default",onClick:()=>S(t),disabled:m||u,"aria-describedby":k.concat(t.toString(),"_0")})),_=`${k}-${t}-expanded`,U=()=>{if(p)return o.createElement("div",{id:_,className:a()(W.expandableContent,l?.expandableContent,n?.customClassNames?.expandableContent)},p(n,x,t))},G=e=>o.createElement("td",{"data-testid":"table-cell-expandable",ref:P,className:a()(W.tableCell,l?.tableCell,n.customClassNames?.tableCell,"tableCellForExpandCollapseButton")},o.createElement(E,{id:`${k}-${t}-expand-button`,title:(0,s.t)("tablerow.expandable.title"),className:a()(W.expandButton,{[W.expandButtonIsActive]:f}),icon:e.isOpen?"ChevronUp":"ChevronDown",onClick:()=>{e.isOpen?x():v(t)},buttonSize:I?"xSmall":"large",type:"button","aria-expanded":e.isOpen,"aria-describedby":k.concat(t.toString(),"_0"),"aria-controls":e.isOpen?_:void 0,disabled:m}),e.isOpen&&e.shouldRenderCellContent&&U()),Q=$||C?o.createElement(o.Fragment,null,$&&o.createElement("td",{className:a()(W.tableCell,l?.tableCell,n.customClassNames?.tableCell,{tableCellHasSeparator:B&&!f}),rowSpan:D+1},L),C&&o.createElement(G,{isOpen:f,shouldRenderCellContent:"before"===g})):null,J=(e,t,r,i,s)=>O&&d&&$?o.createElement("button",{"data-testid":"openEditableOnRowClick-button",className:W.editButton,onClick:()=>S(t),tabIndex:-1},o.createElement("span",{className:a()(W.cellContent,l?.cellContent,n.customClassNames?.cellContent,"cellContentClickable",{cellContentAboveExpandedArea:s,cellContentAlignedRight:"right"===r,cellContentAlignedCenter:"center"===r,cellContentLarge:B&&!i,cellContentChildRow:i,cellContentHideEdit:!$&&c})},Z(e,t))):o.createElement("div",{className:a()(W.cellContent,l?.cellContent,n.customClassNames?.cellContent,{cellContentAboveExpandedArea:s,cellContentAlignedRight:"right"===r,cellContentAlignedCenter:"center"===r,cellContentLarge:B&&!i,cellContentChildRow:i,cellContentHideEdit:!$&&c})},Z(e,t)),Z=(e,t)=>b[t].formatFunction?b[t].formatFunction(e):e,K=(t,r,i,s,c=!1)=>r.map(((r,d)=>d>0?o.createElement("td",{key:k.concat(i.toString(),"_",d.toString()),className:a()(W.tableCell,l?.tableCell,n.customClassNames?.tableCell,{tableCellAboveExpandedArea:s,tableCellAlignedRight:"right"===r.alignment,tableCellAlignedCenter:"center"===r.alignment,tableCellIsEditableRowClosed:$&&!e.isEditableRowOpen,tableCellHiddenOnMobile:r.hideOnMobile,tableCellHasSeparator:B&&!f&&!n.children})},J(t[r.fieldName],d,r.alignment,c,s)):c?null:o.createElement("th",{key:k.concat(i.toString(),"_",d.toString()),id:k.concat(i.toString(),"_",d.toString()),className:a()(W.tableCell,l?.tableCell,n.customClassNames?.tableCell,{tableCellAboveExpandedArea:s,tableCellAlignedRight:"right"===r.alignment,tableCellAlignedCenter:"center"===r.alignment,tableCellIsEditableRowClosed:$&&!e.isEditableRowOpen,tableCellHiddenOnMobile:r.hideOnMobile,tableCellHasSeparator:B&&!f}),scope:"row",rowSpan:D+1},J(t[r.fieldName],d,r.alignment,c,s))));if(w)return o.createElement("tr",{key:t,className:a()(W.tableRow,l?.tableRow,n.customClassNames?.tableRow,w?"tableRowEditableAndOpen":"tableRowEditableAndClosed","tableRowHasSeparator")},o.createElement("td",{key:t,"data-testid":"editable-content",className:a()(W.tableCell,l?.tableCell,n.customClassNames?.tableCell),colSpan:H},d&&d(n,x,t)));const X=h||"before"===g;return o.createElement(o.Fragment,null,C?f?o.createElement(o.Fragment,null,o.createElement("tr",{key:t,ref:j,className:a()(W.tableRow,l?.tableRow,n.customClassNames?.tableRow,{tableRowHasSeparator:B&&("before"===g||"after"===g&&!f)})},"before"===g&&o.createElement(G,{isOpen:!0,shouldRenderCellContent:!0}),K(n,b,t,!0),"before"!==g&&o.createElement(G,{isOpen:!0,shouldRenderCellContent:!1})),"before"!==g&&o.createElement("tr",{key:t+"expanded",className:a()(W.tableRow,l?.tableRow,n.customClassNames?.tableRow,{tableRowHasSeparator:B})},o.createElement("td",{colSpan:H},U()))):o.createElement("tr",{key:t,ref:j,className:a()(W.tableRow,l?.tableRow,n.customClassNames?.tableRow,{tableRowIsClickable:O,tableRowHasSeparator:B&&!f&&!n.children})},(h||"before"===g)&&Q,K(n,b,t,!1),!h&&"before"!==g&&Q):o.createElement(o.Fragment,null,o.createElement("tr",{key:t,className:a()(W.tableRow,l?.tableRow,n.customClassNames?.tableRow,{tableRowIsClickable:O,tableRowHasSeparator:B&&!f&&!n.children})},X&&Q,K(n,b,t,!1,!1),!X&&Q,z&&o.createElement("td",null)),!w&&!!n.children&&D>0&&n.children.map(((e,r)=>o.createElement("tr",{key:t+"child"+r,className:a()(W.tableRow,l?.tableRow,n.customClassNames?.tableRow,{tableRowHasSeparator:B&&r===n.children.length-1})},X&&o.createElement("td",null),K(e,b,r,!1,!0),!X&&o.createElement("td",null),z&&o.createElement("td",null))))))},v=e=>{const{compactTable:t,numberOfColumns:l,sum:n,editableRows:i,expandableRows:s,expandIconPlacement:c}=e,d=(e=>(0,r.Z)({sumRow:{verticalAlign:"middle"},sumCell:{fontSize:e?y.If:"inherit",textAlign:"end",verticalAlign:"inherit",padding:e?`${R.uv} ${R.uv}`:`${R.zc} ${R.zc}`,selectors:{"&.sumCellIsText":{fontWeight:y.QC},"&.sumCellIsSum":{fontWeight:y.f$}}}}))(t),b=0!==l?l-n.colspan-1:0,m=Array.from(Array(b>0?b:0).keys());let p=0;return o.createElement("tr",{className:d.sumRow},o.createElement("th",{colSpan:n.colspan,scope:"row",className:a()(d.sumCell,"sumCellIsText")},n.text),o.createElement("td",{className:a()(d.sumCell,"sumCellIsSum")},n.total),i&&o.createElement("td",null),s&&"after"===c&&o.createElement("td",null),!!m.length&&m.map((()=>o.createElement("td",{key:p++,className:d.sumCell}))))};var N=l(95329);const k=e=>{const{columns:t,sort:l,setSort:n}=e,c=(e=>{const{compactTable:t}=e,l=(0,i.gh)().palette;return(0,r.Z)({tabellThead:{display:"table-header-group"},tabellTheadCell:{borderBottom:`2px solid ${l.skeColor.blackAlt}`,padding:t?R.uv:R.zc,fontSize:t?y.If:"inherit",verticalAlign:"bottom",fontWeight:y.QC,position:"relative",selectors:{i:{color:`${l.skeColor.blue}`,position:"absolute",paddingLeft:R.Qi,cursor:"pointer",selectors:{":hover":{color:`${l.skeColor.darkBlue}`},'& [data-icon-name="ArrowUpDown"]':{selectors:{[`@media (min-width: ${A.cv})`]:{opacity:0},"& .noAutoHide":{opacity:1},":hover":{opacity:1}}}}},":focus":{color:`${l.skeColor.blue}`,outline:"0"}}},tabellTheadCellIsSortable:{cursor:"pointer",paddingRight:`${R.nv} !important`,selectors:{':hover [data-icon-name="ArrowUpDown"]':{opacity:1},':focus [data-icon-name="ArrowUpDown"]':{opacity:1}}},tabellTheadCellAlignedRight:{justifyContent:"flex-end",textAlign:"right"},tabellTheadCellAlignedCenter:{justifyContent:"center",textAlign:"center"},tabellTheadCellIsEmpty:{borderBottom:`2px solid ${l.skeColor.blackAlt}`},tabellTheadCellHiddenOnMobile:{display:"none",selectors:{[`@media (min-width: ${A.EJ})`]:{display:"table-cell"}}}})})(e),d=e=>n({ascending:l.columnFieldName!==e||!l.ascending,columnFieldName:e}),b=t&&t.map((e=>{if(!e.name)return o.createElement("td",{key:e.fieldName,className:c.tabellTheadCellIsEmpty});if(e.srOnly)return o.createElement("th",{key:e.fieldName,className:c.tabellTheadCellIsEmpty},o.createElement("span",{className:"sr-only"},e.name));if(e.sortable){const t=l.columnFieldName===e.fieldName,n=((e,t)=>e?t?"ArrowDown":"ArrowUp":"ArrowUpDown")(t,l.ascending),r=((e,t,l,n,a)=>{let o=t;return"string"==typeof e&&(o=l?n?e.concat(" ",a("table.sorted_ascending")):e.concat(" ",a("table.sorted_descending")):e.concat(" ",a("table.sortable"))),o})(e.name,e.fieldName,t,l.ascending,s.t);return o.createElement("th",{key:e.fieldName,className:a()(c.tabellTheadCell,c.tabellTheadCellIsSortable,{[c.tabellTheadCellAlignedRight]:"right"===e.alignment,[c.tabellTheadCellAlignedCenter]:"center"===e.alignment,[c.tabellTheadCellHiddenOnMobile]:e.hideOnMobile}),tabIndex:0,scope:"col","aria-label":r,onClick:()=>d(e.fieldName),onKeyDown:t=>((e,t)=>"Enter"===e.key?d(t):null)(t,e.fieldName)},e.name,o.createElement(N.J,{iconName:n,className:e.autohideSorting?void 0:"noAutoHide"}))}return o.createElement("th",{key:e.fieldName,className:a()(c.tabellTheadCell,{[c.tabellTheadCellAlignedRight]:"right"===e.alignment,[c.tabellTheadCellAlignedCenter]:"center"===e.alignment,[c.tabellTheadCellHiddenOnMobile]:e.hideOnMobile}),scope:"col"},e.name)}));return o.createElement(o.Fragment,null,b)},O=(e,t,l)=>{l(!!(t&&e&&t>e))},T=e=>{const{id:t,customClassNames:l,editableRows:n,expandableRows:c,expandIconPlacement:d,children:b,columns:m,openEditableOnRowClick:p,showRowSeparators:u=!0,compactTable:C=!1,caption:g=null,hideCaption:h,openEditableRowIndex:w,setOpenEditableRowIndex:f,openExpandableRowIndex:x,setOpenExpandableRowIndex:E,sum:R}=e,y=(0,s.Ox)(),A=t||"table-"+y,N=o.useRef(null),T=o.useRef(null),[I,$]=(0,o.useState)(!1),[z,B]=(0,o.useState)(w),[H,j]=(0,o.useState)(),[P,F]=(0,o.useState)({ascending:!1,columnFieldName:""}),M=(e=>{const{fullWidth:t}=e,l=(0,i.gh)().palette;return(0,r.Z)({SkeTable:{overflowX:"auto"},tabell:{display:"table",width:t?"100%":void 0,borderCollapse:"collapse",textAlign:"left",height:"1px"},tabellCaption:{textAlign:"left"},tabellThead:{display:"table-header-group"},tabellTheadRow:{verticalAlign:"middle"},emptyTd:{borderBottom:`2px solid ${l.skeColor.blackAlt}`}})})(e);(0,o.useEffect)((()=>{f&&f(z)}),[z,f]),(0,o.useEffect)((()=>{B(w)}),[w]),(0,o.useEffect)((()=>{E&&E(H)}),[H,E]),(0,o.useEffect)((()=>{j(x)}),[x]);const W=()=>{const e=T.current&&T.current.clientWidth,t=N.current&&N.current.clientWidth;O(t,e,(e=>$(e)))},D=()=>{B(void 0),j(void 0)};o.useEffect((()=>{const e=T.current&&T.current.clientWidth,t=N.current&&N.current.clientWidth;O(t,e,$),window.addEventListener("resize",W)}),[]);const L=o.createElement(o.Fragment,null,n&&o.createElement("td",{className:M.emptyTd}),c&&o.createElement("td",{className:M.emptyTd}));return o.createElement("div",{ref:N,id:t,className:a()(M.SkeTable,l?.wrapper)},o.createElement("table",{className:a()(M.tabell,l?.table)},g&&o.createElement("caption",{className:a()(M.tabellCaption,l?.caption),style:h?(0,s.mU)():void 0},g),o.createElement("thead",{className:a()(M.tabellThead,l?.tabellThead)},o.createElement("tr",{className:a()(M.tabellTheadRow,l?.tabellTheadRow)},(I||"before"===d)&&L,o.createElement(k,{compactTable:C,columns:m,sort:P,setSort:e=>F(e)}),!I&&"before"!==d&&L)),o.createElement("tbody",null,(e=>{const t=P.columnFieldName;if(t){const l=[...e],n=!P.ascending,a=m&&m.filter((e=>e.fieldName===t))[0].sortingFunction;return a?l.sort(((e,l)=>a(e[t],l[t]))):l.sort((function(e,l){return e[t]<l[t]?-1:1})),n&&l.reverse(),l}return e})(e.data).map(((t,l)=>o.createElement(S,{data:t,key:l,rowIndex:l,columns:m,editableContent:e.editableContent,editableRows:e.editableRows,editModeActive:void 0!==z,expandableContent:e.expandableContent,expandableModeActive:void 0!==H,expandableRows:e.expandableRows,expandIconPlacement:e.expandIconPlacement,tableHasScroll:I,isEditableRowOpen:z===l,isExpandableRowOpen:H===l,openEditableOnRowClick:p,onEditRow:()=>(e=>{B(e)})(l),onExpandRow:()=>(e=>{j(e)})(l),onCloseRow:D,openExpandableRowIndex:H,tableId:A,showRowSeparators:u,compactTable:C,sum:R}))),R&&o.createElement(v,{compactTable:C,numberOfColumns:e.columns?.length??0,editableRows:n,expandableRows:c,expandIconPlacement:d,sum:R}))),b)}}}]);