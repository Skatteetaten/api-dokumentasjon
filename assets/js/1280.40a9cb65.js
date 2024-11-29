"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[1280],{43350:(e,t,l)=>{l.d(t,{XI:()=>T});var n=l(53624),a=l.n(n),o=l(96540),r=l(71797),i=l(22692);var s=l(59325),c=l(1955),d=l(67907);function b(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function m(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?b(Object(l),!0).forEach((function(t){p(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function u(e){switch(e.buttonSize){case"xSmall":return{width:"26px",height:"26px"};case"small":return{width:"35px",height:"35px"};case"medium":return{width:"40px",height:"40px"};case"large":return{width:"50px",height:"50px"};case"xLarge":return{width:"60px",height:"60px"};default:return{}}}function g(e){const t=(0,i.O4)().palette;return!0===e.circle?{border:"3px solid "+t.skeColor.interactive}:{border:"3px solid "+t.skeColor.transparent}}function C(e){const t=(0,i.O4)().palette;return{color:t.skeColor.blue,background:t.skeColor.lightBlue}}function h(e){switch(e.buttonSize){case"xSmall":return{fontsize:s.s.smallPlus};case"small":return{fontSize:s.s.mediumPlus};case"medium":return{fontSize:s.s.largePlus};case"large":return{fontSize:s.s.xxLarge};case"xLarge":return{fontSize:s.s.superLarge};default:return{fontSize:s.s.icon}}}const w=function(e){const t=(0,i.O4)().palette,l=e.circle?-8:-4,n=e.disabled;return(0,d.Z)([(0,s.gm)({palette:t},l,"relative","50px"),{displayName:`ske-icon${e.buttonSize}-button`,selectors:{"&.ms-Button--icon":m(m({width:"40px",height:"40px",borderRadius:"50%",padding:0,background:"none",color:t.skeColor.blue},u(e)),g(e)),"&.ms-Button--icon i":m({},h(e)),"&.ms-Button--icon:hover":m({transition:"background-color 0.2s"},C()),"&:focus&:after":{},"&.ms-Button--icon:active":{transition:"0.15s",transform:n?"none":"translateY(2px)"},"&.ms-Button--icon:disabled":m(m({},g(e)),{},{color:t.skeColor.lightGrey,borderColor:t.skeColor.lightGrey,cursor:"not-allowed"}),"&.ms-Button--icon:disabled i":{color:t.skeColor.lightGrey}}}])};function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},f.apply(this,arguments)}function x(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}const E=e=>{const{icon:t,className:l}=e,n=x(e,["icon","className"]);return o.createElement(c.K,f({},n,{className:a()(w(e),l),iconProps:{iconName:t}}))};E.defaultProps={alt:" ",circle:!1,disabled:void 0,icon:void 0,onClick:void 0,title:void 0};var R=l(36374),y=l(89294),A=l(19643);const N=e=>{const{rowIndex:t,customClassNames:l,data:n,editableRows:c,editableContent:d,columns:b,editModeActive:m,expandableContent:p,expandableModeActive:u,expandableRows:g,expandIconPlacement:C,tableHasScroll:h,isEditableRowOpen:w=!1,isExpandableRowOpen:f=!1,onCloseRow:x,onEditRow:N,onExpandRow:v,openExpandableRowIndex:S,tableId:k,openEditableOnRowClick:O,showRowSeparators:T,compactTable:I}=e,$=!n.hideExpand&&g,j=!n.hideEdit&&c,B=n.hideEdit&&c,H=!n.hideSeparator&&T,P=b.length+(j||g||B?1:0),z=o.useRef(null),F=o.createRef(),[M,W]=o.useState(S);(0,o.useEffect)((()=>{void 0!==S&&W(S)}),[S]),(0,o.useEffect)((()=>{if(M===t&&F.current){F.current.children[0].focus()}}),[F,M,t]);const _=((e,t)=>{const{compactTable:l}=e,n=(0,i.O4)().palette;return(0,r.l)({tableRow:{borderBox:"box-sizing",verticalAlign:"middle",selectors:{"&.tableRowIsClickable":{selectors:{":hover":{backgroundColor:n.skeColor.lightBlue}}},"&.tableRowEditableAndOpen":{display:"table-row"},"&.tableRowEditableAndClosed":{display:"none"},"&.tableRowHasSeparator":{borderBottom:`1px solid ${n.skeColor.lightGrey}`}}},expandableContent:{width:t?t-5+"px":"",padding:l?`${R.Ng}`:`${R._2} 0`,boxSizing:"border-box",position:"relative",zIndex:99},tableCell:{fontWeight:y.UA,padding:0,verticalAlign:"middle",selectors:{"&.tableCellAlignedRight":{justifyContent:"flex-end",textAlign:"right"},"&.tableCellAlignedCenter":{justifyContent:"center",textAlign:"center"},"&.tableCellIsSum":{textAlign:"end",padding:R.i},"&.tableCellForExpandCollapseButton":{maxWidth:R.HX,selectors:{[`@media (min-width: ${A.qe})`]:{maxWidth:"3.125rem"}}},"&.tableCellIsEditableRowClosed":{borderBottom:"none"},"&.tableCellAboveExpandedArea":{borderBottom:"none",verticalAlign:"top"},"&.tableCellHiddenOnMobile":{display:"none",selectors:{[`@media (min-width: ${A.qe})`]:{display:"table-cell"}}},"&.tableCellHasSeparator":{borderBottom:`1px solid ${n.skeColor.lightGrey}`}}},cellContent:{display:"block",width:"100%",verticalAlign:"middle",boxSizing:"border-box",fontSize:l?y.sS:"inherit",padding:`${R._2} ${R.i}`,textAlign:"inherit",selectors:{"&.cellContentSmall":{padding:`${R.aW} ${R.i}`},"&.cellContentClickable":{paddingTop:R._2,paddingBottom:R._2,cursor:"pointer"},"&.cellContentLarge":{padding:l?`${R.Ng} ${R.Ng}`:`${R.i} ${R.i}`},"&.cellContentChildRow":{padding:`0 ${R.i} ${R.i} ${R.i}`},"&.cellContentAlignedRight":{textAlign:"right"},"&.cellContentAlignedCenter":{textAlign:"center"},"&.cellContentAboveExpandedArea":{alignItems:"start"},"&.cellContentHideEdit":{minHeight:R.D}}},expandButton:{},expandButtonIsActive:{},editButton:{width:"100%",height:"100%",margin:0,padding:0,border:"none",background:"transparent",boxSizing:"border-box",fontSize:"inherit",textAlign:"inherit"},emptyTd:{borderBottom:`2px solid ${n.skeColor.blackAlt}`}})})(e,z?.current?.offsetWidth),D=n.children?n.children.length:0,L=o.createElement("span",{className:a()(_.cellContent,l?.cellContent,n.customClassNames?.cellContent,{cellContentSmall:!T||I})},o.createElement(E,{title:(0,s.t)("tablerow.editable.title"),type:"button",icon:"Edit",className:_.editButton,buttonSize:I?"xSmall":"default",onClick:()=>N(t),disabled:m||u,"aria-describedby":k.concat(t.toString(),"_0")})),U=`${k}-${t}-expanded`,G=()=>{if(p)return o.createElement("div",{id:U,className:a()(_.expandableContent,l?.expandableContent,n?.customClassNames?.expandableContent)},p(n,x,t))},X=e=>o.createElement("td",{"data-testid":"table-cell-expandable",ref:F,className:a()(_.tableCell,l?.tableCell,n.customClassNames?.tableCell,"tableCellForExpandCollapseButton")},o.createElement(E,{id:`${k}-${t}-expand-button`,title:(0,s.t)("tablerow.expandable.title"),className:a()(_.expandButton,{[_.expandButtonIsActive]:f}),icon:e.isOpen?"ChevronUp":"ChevronDown",onClick:()=>{e.isOpen?x():v(t)},buttonSize:I?"xSmall":"large",type:"button","aria-expanded":e.isOpen,"aria-describedby":k.concat(t.toString(),"_0"),"aria-controls":e.isOpen?U:void 0,disabled:m}),e.isOpen&&e.shouldRenderCellContent&&G()),q=j||g?o.createElement(o.Fragment,null,j&&o.createElement("td",{className:a()(_.tableCell,l?.tableCell,n.customClassNames?.tableCell,{tableCellHasSeparator:H&&!f}),rowSpan:D+1},L),$&&o.createElement(X,{isOpen:f,shouldRenderCellContent:"before"===C})):null,K=(e,t,r,i,s)=>O&&d&&j?o.createElement("button",{"data-testid":"openEditableOnRowClick-button",className:_.editButton,onClick:()=>N(t),tabIndex:-1},o.createElement("span",{className:a()(_.cellContent,l?.cellContent,n.customClassNames?.cellContent,"cellContentClickable",{cellContentAboveExpandedArea:s,cellContentAlignedRight:"right"===r,cellContentAlignedCenter:"center"===r,cellContentLarge:H&&!i,cellContentChildRow:i,cellContentHideEdit:!j&&c})},Y(e,t))):o.createElement("div",{className:a()(_.cellContent,l?.cellContent,n.customClassNames?.cellContent,{cellContentAboveExpandedArea:s,cellContentAlignedRight:"right"===r,cellContentAlignedCenter:"center"===r,cellContentLarge:H&&!i,cellContentChildRow:i,cellContentHideEdit:!j&&c})},Y(e,t)),Y=(e,t)=>b[t].formatFunction?b[t].formatFunction(e):e,Z=(t,r,i,s,c=!1)=>r.map(((r,d)=>d>0?o.createElement("td",{key:k.concat(i.toString(),"_",d.toString()),className:a()(_.tableCell,l?.tableCell,n.customClassNames?.tableCell,{tableCellAboveExpandedArea:s,tableCellAlignedRight:"right"===r.alignment,tableCellAlignedCenter:"center"===r.alignment,tableCellIsEditableRowClosed:j&&!e.isEditableRowOpen,tableCellHiddenOnMobile:r.hideOnMobile,tableCellHasSeparator:H&&!f&&!n.children})},K(t[r.fieldName],d,r.alignment,c,s)):c?null:o.createElement("th",{key:k.concat(i.toString(),"_",d.toString()),id:k.concat(i.toString(),"_",d.toString()),className:a()(_.tableCell,l?.tableCell,n.customClassNames?.tableCell,{tableCellAboveExpandedArea:s,tableCellAlignedRight:"right"===r.alignment,tableCellAlignedCenter:"center"===r.alignment,tableCellIsEditableRowClosed:j&&!e.isEditableRowOpen,tableCellHiddenOnMobile:r.hideOnMobile,tableCellHasSeparator:H&&!f}),scope:"row",rowSpan:D+1},K(t[r.fieldName],d,r.alignment,c,s))));if(w)return o.createElement("tr",{key:t,className:a()(_.tableRow,l?.tableRow,n.customClassNames?.tableRow,w?"tableRowEditableAndOpen":"tableRowEditableAndClosed","tableRowHasSeparator")},o.createElement("td",{key:t,"data-testid":"editable-content",className:a()(_.tableCell,l?.tableCell,n.customClassNames?.tableCell),colSpan:P},d&&d(n,x,t)));const J=h||"before"===C;return o.createElement(o.Fragment,null,g?f?o.createElement(o.Fragment,null,o.createElement("tr",{key:t,ref:z,className:a()(_.tableRow,l?.tableRow,n.customClassNames?.tableRow,{tableRowHasSeparator:H&&("before"===C||"after"===C&&!f)})},$&&"before"===C&&o.createElement(X,{isOpen:!0,shouldRenderCellContent:!0}),Z(n,b,t,!0),$&&"before"!==C&&o.createElement(X,{isOpen:!0,shouldRenderCellContent:!1})),"before"!==C&&o.createElement("tr",{key:t+"expanded",className:a()(_.tableRow,l?.tableRow,n.customClassNames?.tableRow,{tableRowHasSeparator:H})},o.createElement("td",{colSpan:P},G()))):o.createElement("tr",{key:t,ref:z,className:a()(_.tableRow,l?.tableRow,n.customClassNames?.tableRow,{tableRowIsClickable:O,tableRowHasSeparator:H&&!f&&!n.children})},(h||"before"===C)&&q,Z(n,b,t,!1),!h&&"before"!==C&&q):o.createElement(o.Fragment,null,o.createElement("tr",{key:t,className:a()(_.tableRow,l?.tableRow,n.customClassNames?.tableRow,{tableRowIsClickable:O,tableRowHasSeparator:H&&!f&&!n.children})},J&&q,Z(n,b,t,!1,!1),!J&&q,B&&o.createElement("td",null)),!w&&!!n.children&&D>0&&n.children.map(((e,r)=>o.createElement("tr",{key:t+"child"+r,className:a()(_.tableRow,l?.tableRow,n.customClassNames?.tableRow,{tableRowHasSeparator:H&&r===n.children.length-1})},J&&o.createElement("td",null),Z(e,b,r,!1,!0),!J&&o.createElement("td",null),B&&o.createElement("td",null))))))},v=e=>{const{compactTable:t,numberOfColumns:l,sum:n,editableRows:i,expandableRows:s,expandIconPlacement:c}=e,d=(e=>(0,r.l)({sumRow:{verticalAlign:"middle"},sumCell:{fontSize:e?y.sS:"inherit",textAlign:"end",verticalAlign:"inherit",padding:e?`${R.Ng} ${R.Ng}`:`${R.i} ${R.i}`,selectors:{"&.sumCellIsText":{fontWeight:y.xO},"&.sumCellIsSum":{fontWeight:y.UA}}}}))(t),b=0!==l?l-n.colspan-1:0,m=Array.from(Array(b>0?b:0).keys());let p=0;return o.createElement("tr",{className:d.sumRow},o.createElement("th",{colSpan:n.colspan,scope:"row",className:a()(d.sumCell,"sumCellIsText")},n.text),o.createElement("td",{className:a()(d.sumCell,"sumCellIsSum")},n.total),i&&o.createElement("td",null),s&&"after"===c&&o.createElement("td",null),!!m.length&&m.map((()=>o.createElement("td",{key:p++,className:d.sumCell}))))};var S=l(69605);const k=e=>{const{columns:t,sort:l,setSort:n}=e,c=(e=>{const{compactTable:t}=e,l=(0,i.O4)().palette;return(0,r.l)({tabellThead:{display:"table-header-group"},tabellTheadCell:{borderBottom:`2px solid ${l.skeColor.blackAlt}`,padding:t?R.Ng:R.i,fontSize:t?y.sS:"inherit",verticalAlign:"bottom",fontWeight:y.xO,position:"relative",selectors:{i:{color:`${l.skeColor.blue}`,position:"absolute",paddingLeft:R.aW,cursor:"pointer",selectors:{":hover":{color:`${l.skeColor.darkBlue}`},'& [data-icon-name="ArrowUpDown"]':{selectors:{[`@media (min-width: ${A.y})`]:{opacity:0},"& .noAutoHide":{opacity:1},":hover":{opacity:1}}}}},":focus":{color:`${l.skeColor.blue}`,outline:"0"}}},tabellTheadCellIsSortable:{cursor:"pointer",paddingRight:`${R.HX} !important`,selectors:{':hover [data-icon-name="ArrowUpDown"]':{opacity:1},':focus [data-icon-name="ArrowUpDown"]':{opacity:1}}},tabellTheadCellAlignedRight:{justifyContent:"flex-end",textAlign:"right"},tabellTheadCellAlignedCenter:{justifyContent:"center",textAlign:"center"},tabellTheadCellIsEmpty:{borderBottom:`2px solid ${l.skeColor.blackAlt}`},tabellTheadCellHiddenOnMobile:{display:"none",selectors:{[`@media (min-width: ${A.qe})`]:{display:"table-cell"}}}})})(e),d=e=>n({ascending:l.columnFieldName!==e||!l.ascending,columnFieldName:e}),b=t&&t.map((e=>{if(!e.name)return o.createElement("td",{key:e.fieldName,className:c.tabellTheadCellIsEmpty});if(e.srOnly)return o.createElement("th",{key:e.fieldName,className:c.tabellTheadCellIsEmpty},o.createElement("span",{className:"sr-only"},e.name));if(e.sortable){const t=l.columnFieldName===e.fieldName,n=((e,t)=>e?t?"ArrowDown":"ArrowUp":"ArrowUpDown")(t,l.ascending),r=((e,t,l,n,a)=>{let o=t;return"string"==typeof e&&(o=l?n?e.concat(" ",a("table.sorted_ascending")):e.concat(" ",a("table.sorted_descending")):e.concat(" ",a("table.sortable"))),o})(e.name,e.fieldName,t,l.ascending,s.t);return o.createElement("th",{key:e.fieldName,className:a()(c.tabellTheadCell,c.tabellTheadCellIsSortable,{[c.tabellTheadCellAlignedRight]:"right"===e.alignment,[c.tabellTheadCellAlignedCenter]:"center"===e.alignment,[c.tabellTheadCellHiddenOnMobile]:e.hideOnMobile}),tabIndex:0,scope:"col","aria-label":r,onClick:()=>d(e.fieldName),onKeyDown:t=>((e,t)=>"Enter"===e.key?d(t):null)(t,e.fieldName)},e.name,o.createElement(S.I,{iconName:n,className:e.autohideSorting?void 0:"noAutoHide"}))}return o.createElement("th",{key:e.fieldName,className:a()(c.tabellTheadCell,{[c.tabellTheadCellAlignedRight]:"right"===e.alignment,[c.tabellTheadCellAlignedCenter]:"center"===e.alignment,[c.tabellTheadCellHiddenOnMobile]:e.hideOnMobile}),scope:"col"},e.name)}));return o.createElement(o.Fragment,null,b)},O=(e,t,l)=>{l(!!(t&&e&&t>e))},T=e=>{const{id:t,customClassNames:l,editableRows:n,expandableRows:c,expandIconPlacement:d,children:b,columns:m,openEditableOnRowClick:p,showRowSeparators:u=!0,compactTable:g=!1,caption:C=null,hideCaption:h,openEditableRowIndex:w,setOpenEditableRowIndex:f,openExpandableRowIndex:x,setOpenExpandableRowIndex:E,sum:R}=e,y=(0,s.$C)(),A=t||"table-"+y,S=o.useRef(null),T=o.useRef(null),[I,$]=(0,o.useState)(!1),[j,B]=(0,o.useState)(w),[H,P]=(0,o.useState)(),[z,F]=(0,o.useState)({ascending:!1,columnFieldName:""}),M=(e=>{const{fullWidth:t}=e,l=(0,i.O4)().palette;return(0,r.l)({SkeTable:{overflowX:"auto"},tabell:{display:"table",width:t?"100%":void 0,borderCollapse:"collapse",textAlign:"left",height:"1px"},tabellCaption:{textAlign:"left"},tabellThead:{display:"table-header-group"},tabellTheadRow:{verticalAlign:"middle"},emptyTd:{borderBottom:`2px solid ${l.skeColor.blackAlt}`}})})(e);(0,o.useEffect)((()=>{f&&f(j)}),[j,f]),(0,o.useEffect)((()=>{B(w)}),[w]),(0,o.useEffect)((()=>{E&&E(H)}),[H,E]),(0,o.useEffect)((()=>{P(x)}),[x]);const W=()=>{const e=T.current&&T.current.clientWidth,t=S.current&&S.current.clientWidth;O(t,e,(e=>$(e)))},_=()=>{B(void 0),P(void 0)};o.useEffect((()=>{const e=T.current&&T.current.clientWidth,t=S.current&&S.current.clientWidth;O(t,e,$),window.addEventListener("resize",W)}),[]);const D=o.createElement(o.Fragment,null,n&&o.createElement("td",{className:M.emptyTd}),c&&o.createElement("td",{className:M.emptyTd}));return o.createElement("div",{ref:S,id:t,className:a()(M.SkeTable,l?.wrapper)},o.createElement("table",{className:a()(M.tabell,l?.table)},C&&o.createElement("caption",{className:a()(M.tabellCaption,l?.caption),style:h?(0,s.LL)():void 0},C),o.createElement("thead",{className:a()(M.tabellThead,l?.tabellThead)},o.createElement("tr",{className:a()(M.tabellTheadRow,l?.tabellTheadRow)},(I||"before"===d)&&D,o.createElement(k,{compactTable:g,columns:m,sort:z,setSort:e=>F(e)}),!I&&"before"!==d&&D)),o.createElement("tbody",null,(e=>{const t=z.columnFieldName;if(t){const l=[...e],n=!z.ascending,a=m&&m.filter((e=>e.fieldName===t))[0].sortingFunction;return a?l.sort(((e,l)=>a(e[t],l[t]))):l.sort((function(e,l){return e[t]<l[t]?-1:1})),n&&l.reverse(),l}return e})(e.data).map(((t,l)=>o.createElement(N,{data:t,key:l,rowIndex:l,columns:m,editableContent:e.editableContent,editableRows:e.editableRows,editModeActive:void 0!==j,expandableContent:e.expandableContent,expandableModeActive:void 0!==H,expandableRows:e.expandableRows,expandIconPlacement:e.expandIconPlacement,tableHasScroll:I,isEditableRowOpen:j===l,isExpandableRowOpen:H===l,openEditableOnRowClick:p,onEditRow:()=>(e=>{B(e)})(l),onExpandRow:()=>(e=>{P(e)})(l),onCloseRow:_,openExpandableRowIndex:H,tableId:A,showRowSeparators:u,compactTable:g,sum:R}))),R&&o.createElement(v,{compactTable:g,numberOfColumns:e.columns?.length??0,editableRows:n,expandableRows:c,expandIconPlacement:d,sum:R}))),b)}},47713:(e,t,l)=>{l.d(t,{A:()=>r});l(96540);var n=l(21312),a=l(39022),o=l(74848);function r(e){const{metadata:t}=e,{previousPage:l,nextPage:r}=t;return(0,o.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[l&&(0,o.jsx)(a.A,{permalink:l,title:(0,o.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,o.jsx)(a.A,{permalink:r,title:(0,o.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}}}]);