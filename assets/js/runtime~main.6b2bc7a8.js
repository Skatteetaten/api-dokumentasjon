(()=>{"use strict";var e,a,c,b,d,f={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return f[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=f,r.c=t,e=[],r.O=(a,c,b,d)=>{if(!c){var f=1/0;for(i=0;i<e.length;i++){c=e[i][0],b=e[i][1],d=e[i][2];for(var t=!0,o=0;o<c.length;o++)(!1&d||f>=d)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(t=!1,d<f&&(f=d));if(t){e.splice(i--,1);var n=b();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[c,b,d]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var f={};a=a||[null,c({}),c([]),c(c)];for(var t=2&b&&e;"object"==typeof t&&!~a.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,r.d(d,f),d},r.d=(e,a)=>{for(var c in a)r.o(a,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,c)=>(r.f[c](e,a),a)),[])),r.u=e=>"assets/js/"+({24:"b7245c87",37:"e51ca901",53:"935f2afb",84:"2d5b1a20",135:"4efb204c",202:"73b1c5fa",204:"edc92c30",237:"1dc4b893",275:"e87f2adf",310:"4a9023c7",453:"ec949c7f",472:"0905ce46",480:"815cfc05",527:"2f9506b1",543:"e17c4eb7",688:"329a55c0",689:"ba71c572",741:"51b0c88a",805:"8516556d",817:"83b2eb81",843:"d8112545",863:"b00fc8ad",866:"133b51c8",921:"0333f010",931:"938c1ceb",1019:"7d9fedf1",1025:"4c93ef67",1142:"db92bfdc",1198:"58bc178e",1199:"510a6c15",1210:"0d7a204f",1219:"986e1224",1350:"5864fd78",1433:"1ddf7178",1466:"87dea87a",1511:"d54361c7",1520:"99e2b9e5",1570:"c8567224",1611:"10eb5601",1736:"a81f78c5",1809:"1bcec8a2",1813:"55587923",1850:"ba991f5f",2065:"b076c6de",2099:"c8794836",2137:"63f58f9c",2144:"613068a4",2158:"8dd20d44",2168:"6b42b08c",2175:"f011e0c3",2200:"6725cead",2207:"535aca8d",2278:"6b3f8ab7",2337:"6ccb8bea",2369:"2f4469df",2386:"c2fc21f5",2457:"bf1618a1",2513:"f0e35b2c",2535:"814f3328",2570:"06039853",2591:"83486f87",2735:"5ee57a27",2766:"3b082a8c",2818:"498c42cf",2853:"8d5eeb39",2932:"4da5b4c3",2939:"03c45206",2965:"525f52ac",3031:"0dbc5860",3051:"067e0e1e",3065:"4f7c62b1",3089:"a6aa9e1f",3164:"19b9256c",3226:"e9a7a4ee",3251:"94348c6b",3267:"c925f08b",3297:"a330dcdb",3302:"0fab07d9",3388:"c3781022",3403:"297796d9",3425:"133af2a2",3608:"9e4087bc",3620:"10ed30f8",3644:"ddc4c46a",3690:"494d795c",3724:"9f399d2a",3751:"3720c009",3779:"86f98b56",3798:"ce34de24",3828:"1290b5dd",3836:"45bcc0ed",3915:"828844cc",4013:"01a85c17",4121:"55960ee5",4185:"6fb93bf7",4197:"23cb8949",4211:"d8687142",4245:"f2d212fb",4253:"91e000e2",4256:"30539b70",4262:"097ab251",4314:"1133b26a",4326:"50c916a7",4353:"969e6415",4427:"9b382b8e",4439:"652830f7",4480:"2d147290",4488:"333d3706",4516:"43a66ab8",4528:"a7e3d20d",4539:"e14eb954",4600:"c9d3920b",4639:"6c40a635",4690:"7c8bd772",4706:"0fa6aab0",4745:"e9d1b7ba",4827:"1fa5bcb3",4840:"dd1789b6",4846:"ef08b080",4859:"5b389cd1",4949:"ae167312",5026:"e643de68",5049:"4e19c97f",5183:"35cd7283",5215:"72a11893",5229:"eb5d193e",5314:"a3da4298",5392:"21d1c56f",5405:"676fb041",5468:"582ffe2f",5473:"12fefac5",5488:"78e3e9e6",5521:"9e611f0b",5541:"3ab638c5",5699:"90337c76",5737:"ecac8099",5792:"11556e5c",5828:"393861e8",5923:"81a27d56",5927:"2369b30c",5959:"09564c2d",6004:"5750a149",6063:"f9628d4a",6079:"cf827022",6103:"ccc49370",6112:"48f86adc",6139:"4d34a616",6210:"eaa706ff",6325:"e5259a66",6336:"63475ef1",6404:"1411313f",6431:"834d159d",6445:"b6834c2a",6463:"115c0443",6517:"daa6ca02",6636:"418daf97",6638:"14b713c8",6651:"92bc4d89",6658:"b257b581",6667:"6ff3080b",6683:"1a788661",6713:"90914fd7",6718:"328720b0",6853:"c46ea412",6861:"e2317fa3",6928:"cbb4c1d7",6962:"dd31753f",6983:"2f799d0b",7010:"c82a3a84",7045:"fff4ff61",7055:"aaeb3d5a",7097:"97942ea1",7138:"b52cc1de",7166:"f699a4f2",7265:"fee9d33b",7274:"aeb9b5ac",7306:"71d12f7b",7317:"a881de87",7320:"e894a82c",7425:"7304dfb2",7428:"8d6c8938",7439:"a241a07d",7469:"b6437249",7504:"a86b0b33",7524:"a6523144",7538:"f6a3317b",7550:"e3785e28",7597:"aac7dbd9",7599:"9c3cb6ef",7610:"7d5d7029",7633:"5e2497bd",7666:"6c5c3ed2",7687:"530d3f97",7743:"7b5ac550",7828:"6a688d7d",7918:"17896441",7949:"70d7315b",7964:"d48dfbf5",7973:"865ff8df",7984:"f17d080b",8056:"e5bd74e5",8088:"f7c4ec71",8101:"22d50692",8104:"56750773",8161:"7bf34718",8241:"5cc8b9b0",8243:"fa87a32c",8370:"4053dc61",8386:"bd84cf31",8453:"694fed3c",8471:"909e81a5",8511:"aed611d7",8610:"6875c492",8645:"cca4046f",8683:"4191805e",8702:"ab7fb454",8761:"87248750",8767:"37548e5e",8778:"690815be",8843:"7e3f9338",8847:"1d652bf4",8848:"e2e25b84",8849:"e2eb0df5",8935:"b901cc0b",8944:"82a4261b",9013:"262e31d3",9043:"5b32c430",9057:"bf6984e8",9097:"ab282d64",9099:"75a757b7",9110:"29b22651",9142:"af4e7d0a",9146:"bd22e594",9161:"27ef5b21",9248:"0007ea8e",9270:"82209398",9315:"7b0b25c2",9318:"fa29964b",9365:"0a62754e",9396:"0617fa73",9406:"52ee5a08",9432:"8586c78e",9435:"71e60ba4",9514:"1be78505",9530:"26a64a74",9531:"d27d4d62",9547:"a3814303",9552:"b6f0c853",9559:"05c29ccf",9603:"1fa3279d",9637:"72ffc875",9663:"6a765e0e",9692:"b6f5c602",9773:"f42afa8b",9782:"1d0bfbd6",9804:"e582ac7b",9853:"27e5cefa",9916:"aeece581",9924:"df203c0f",9954:"d696d01d",9982:"9db87109",9996:"bb7aefcf"}[e]||e)+"."+{24:"71760657",37:"7e444d12",53:"73dd8d8c",84:"07877049",135:"9f424022",202:"b6da49b6",204:"7bd4039f",237:"0dde216f",275:"7197a523",310:"7393defb",453:"534a2a7b",472:"005ec377",480:"cad3d1d7",527:"4c4fb8cf",543:"7ca8a361",688:"770a7bee",689:"8d3abb3a",741:"d86b294f",805:"0d9c8125",817:"63069dbc",843:"4f621e9d",863:"67125f91",866:"adbf8608",921:"ae9fcdf8",931:"df549aba",1019:"22feaac3",1023:"9cdd7ebd",1025:"9c9a893b",1142:"036f1013",1198:"4573e256",1199:"081eae2d",1210:"e20151c4",1219:"e87fd408",1350:"37b1ddfd",1433:"ba4f8506",1466:"89bcfcdc",1511:"fea2f302",1520:"7691d484",1570:"bd335a94",1611:"6ef64eec",1736:"8cc46095",1809:"5b9c2a1a",1813:"cb799a4b",1850:"7e5ab361",2065:"f1bf5088",2099:"c94471d9",2137:"8b8a7418",2144:"386e1708",2158:"ab0a651b",2168:"1dbf073c",2175:"7025f8b2",2200:"ab26700d",2207:"5395ee01",2278:"8ecbe2d2",2337:"bf5f5ccf",2369:"e640a5f7",2386:"a6f73f68",2457:"111d08bc",2513:"ee24b6da",2535:"607d314b",2570:"32125cd8",2591:"014b07c1",2735:"449390d6",2766:"81b14e3b",2818:"22f24f03",2853:"b500e985",2932:"11a451cd",2939:"df9dd92d",2965:"a291caba",3031:"b9618d34",3051:"7c3e62c0",3065:"85fca9f4",3089:"39b206f9",3164:"28faadb0",3226:"02d6670a",3251:"6b083cf4",3267:"d75be564",3297:"3788bac7",3302:"deb5b677",3388:"2746a22a",3403:"af5d4e7f",3425:"494f2991",3608:"34e9c5df",3620:"4bd36b92",3644:"94fb7c34",3690:"bf04f111",3724:"b888e415",3751:"66dd9d4e",3779:"0a44aad2",3798:"fbe86d39",3828:"4931d331",3836:"248b094b",3915:"7c9bfb3a",4013:"a99e18ef",4121:"d721bcc3",4185:"f4dea218",4197:"09ffa129",4211:"02116769",4245:"90dc32c6",4253:"2e6e067f",4256:"f4037d68",4262:"34ac5783",4314:"99bec5ab",4326:"88081022",4353:"6f34b6d0",4427:"3d581c7b",4439:"3406b332",4480:"d1c1306b",4488:"ccbf9e75",4516:"97ae0531",4528:"29558b16",4539:"32dd73c6",4600:"1e284345",4639:"4d990880",4690:"fcdcebc5",4706:"a41999a9",4745:"ab9bccf3",4827:"9a8c1118",4840:"a00fca4e",4846:"978b4ba1",4859:"b34bb8fb",4913:"d8687b95",4949:"3ca1f81a",4972:"be4cde7e",5026:"c5c9953f",5049:"ca910409",5183:"7e62f2c3",5215:"71005cd8",5229:"4dffd83a",5314:"e0e48080",5392:"2004b46d",5405:"60742192",5468:"669d0a9c",5473:"efebe39b",5488:"58f59d3d",5521:"f08e4f59",5541:"e55db892",5699:"b4ae6ca0",5737:"c05d0d9c",5792:"4897c6d4",5828:"54905441",5923:"29bbbe12",5927:"def28f59",5959:"6fca6ad9",6004:"81ad19f6",6048:"e70dc86e",6063:"2310099c",6079:"d4beb264",6103:"e0c3e8c3",6112:"e5ffcf5e",6139:"fdb76040",6210:"ceac2470",6325:"987b7db1",6336:"74d74b94",6404:"ed7fe96b",6431:"cfb34fa1",6445:"96ec27af",6463:"9f26b488",6517:"92dd0020",6636:"73f7d37f",6638:"e82a46bb",6651:"ba4d166b",6658:"9cfab18c",6667:"50a5dc3a",6683:"bb5b0cd9",6713:"1d36a962",6718:"c8abbb60",6853:"f7e241ae",6861:"56a60f3d",6928:"3fbf6c32",6962:"d0372ae3",6983:"a12ecbd2",7010:"37a17bd0",7045:"26e453f9",7055:"868e6b65",7097:"6c5dcf38",7138:"c5369a9c",7166:"3fe63d25",7265:"d07b83cf",7274:"700b5e06",7306:"65773ad1",7317:"c7a155e5",7320:"6ee1dff6",7425:"026bf679",7428:"e5375ccf",7439:"1cb389e6",7469:"d5a04c6b",7504:"ab227a2c",7524:"0aa7c08f",7538:"a2e11eac",7550:"99b8da6f",7597:"2db30b16",7599:"13583fec",7610:"56abb426",7633:"23ea2f7e",7666:"1259261a",7687:"d47ea1cd",7743:"14d17da5",7828:"7946675c",7918:"8e06c6af",7949:"6e1b9745",7964:"46501b5a",7973:"07161a90",7984:"93c82ad2",8056:"9128cb88",8088:"ad6e381a",8101:"b0380c0b",8104:"0b6371e8",8161:"3c4d84e3",8241:"eaac52c3",8243:"2337529c",8370:"a7aef6c0",8386:"6528dbc1",8453:"9578bdf6",8471:"0dfef617",8511:"01a4d30d",8610:"5dc0ee7f",8645:"85ef0c1d",8683:"4e77c8e6",8702:"7c9e4d2a",8761:"2651cdd9",8767:"c21e8f38",8778:"2d334d61",8843:"2f73e091",8847:"ffafe365",8848:"ac17ef74",8849:"62ef5549",8935:"70e9f7e2",8944:"cc0d4c35",9013:"938e6fa4",9043:"a9d70a19",9057:"91b5660b",9097:"a248baca",9099:"3d17fd81",9110:"a5b90375",9142:"dcbc648e",9146:"fcb99549",9161:"26578816",9248:"5997f1ca",9270:"ba657cc7",9315:"2f703343",9318:"a97534da",9365:"45445318",9396:"b58ca7d0",9406:"f0cfbde9",9432:"29a069e7",9435:"38f676da",9514:"f80974fc",9530:"19a96fe0",9531:"07af4a0b",9547:"eb1a684e",9552:"09af9e15",9559:"90c680a8",9603:"46b63336",9637:"9ff4497b",9663:"9c4aa8de",9692:"f231fa99",9773:"dc836cc6",9782:"557061e9",9804:"efb734c3",9853:"083cd300",9916:"7c57042a",9924:"e87d01ab",9954:"083d5d50",9982:"54428c7c",9996:"b57ffcaf"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},d="api-dokumentasjon:",r.l=(e,a,c,f)=>{if(b[e])b[e].push(a);else{var t,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+c){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",d+c),t.src=e),b[e]=[a];var l=(a,c)=>{t.onerror=t.onload=null,clearTimeout(s);var d=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),d&&d.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/api-dokumentasjon/",r.gca=function(e){return e={17896441:"7918",55587923:"1813",56750773:"8104",82209398:"9270",87248750:"8761",b7245c87:"24",e51ca901:"37","935f2afb":"53","2d5b1a20":"84","4efb204c":"135","73b1c5fa":"202",edc92c30:"204","1dc4b893":"237",e87f2adf:"275","4a9023c7":"310",ec949c7f:"453","0905ce46":"472","815cfc05":"480","2f9506b1":"527",e17c4eb7:"543","329a55c0":"688",ba71c572:"689","51b0c88a":"741","8516556d":"805","83b2eb81":"817",d8112545:"843",b00fc8ad:"863","133b51c8":"866","0333f010":"921","938c1ceb":"931","7d9fedf1":"1019","4c93ef67":"1025",db92bfdc:"1142","58bc178e":"1198","510a6c15":"1199","0d7a204f":"1210","986e1224":"1219","5864fd78":"1350","1ddf7178":"1433","87dea87a":"1466",d54361c7:"1511","99e2b9e5":"1520",c8567224:"1570","10eb5601":"1611",a81f78c5:"1736","1bcec8a2":"1809",ba991f5f:"1850",b076c6de:"2065",c8794836:"2099","63f58f9c":"2137","613068a4":"2144","8dd20d44":"2158","6b42b08c":"2168",f011e0c3:"2175","6725cead":"2200","535aca8d":"2207","6b3f8ab7":"2278","6ccb8bea":"2337","2f4469df":"2369",c2fc21f5:"2386",bf1618a1:"2457",f0e35b2c:"2513","814f3328":"2535","06039853":"2570","83486f87":"2591","5ee57a27":"2735","3b082a8c":"2766","498c42cf":"2818","8d5eeb39":"2853","4da5b4c3":"2932","03c45206":"2939","525f52ac":"2965","0dbc5860":"3031","067e0e1e":"3051","4f7c62b1":"3065",a6aa9e1f:"3089","19b9256c":"3164",e9a7a4ee:"3226","94348c6b":"3251",c925f08b:"3267",a330dcdb:"3297","0fab07d9":"3302",c3781022:"3388","297796d9":"3403","133af2a2":"3425","9e4087bc":"3608","10ed30f8":"3620",ddc4c46a:"3644","494d795c":"3690","9f399d2a":"3724","3720c009":"3751","86f98b56":"3779",ce34de24:"3798","1290b5dd":"3828","45bcc0ed":"3836","828844cc":"3915","01a85c17":"4013","55960ee5":"4121","6fb93bf7":"4185","23cb8949":"4197",d8687142:"4211",f2d212fb:"4245","91e000e2":"4253","30539b70":"4256","097ab251":"4262","1133b26a":"4314","50c916a7":"4326","969e6415":"4353","9b382b8e":"4427","652830f7":"4439","2d147290":"4480","333d3706":"4488","43a66ab8":"4516",a7e3d20d:"4528",e14eb954:"4539",c9d3920b:"4600","6c40a635":"4639","7c8bd772":"4690","0fa6aab0":"4706",e9d1b7ba:"4745","1fa5bcb3":"4827",dd1789b6:"4840",ef08b080:"4846","5b389cd1":"4859",ae167312:"4949",e643de68:"5026","4e19c97f":"5049","35cd7283":"5183","72a11893":"5215",eb5d193e:"5229",a3da4298:"5314","21d1c56f":"5392","676fb041":"5405","582ffe2f":"5468","12fefac5":"5473","78e3e9e6":"5488","9e611f0b":"5521","3ab638c5":"5541","90337c76":"5699",ecac8099:"5737","11556e5c":"5792","393861e8":"5828","81a27d56":"5923","2369b30c":"5927","09564c2d":"5959","5750a149":"6004",f9628d4a:"6063",cf827022:"6079",ccc49370:"6103","48f86adc":"6112","4d34a616":"6139",eaa706ff:"6210",e5259a66:"6325","63475ef1":"6336","1411313f":"6404","834d159d":"6431",b6834c2a:"6445","115c0443":"6463",daa6ca02:"6517","418daf97":"6636","14b713c8":"6638","92bc4d89":"6651",b257b581:"6658","6ff3080b":"6667","1a788661":"6683","90914fd7":"6713","328720b0":"6718",c46ea412:"6853",e2317fa3:"6861",cbb4c1d7:"6928",dd31753f:"6962","2f799d0b":"6983",c82a3a84:"7010",fff4ff61:"7045",aaeb3d5a:"7055","97942ea1":"7097",b52cc1de:"7138",f699a4f2:"7166",fee9d33b:"7265",aeb9b5ac:"7274","71d12f7b":"7306",a881de87:"7317",e894a82c:"7320","7304dfb2":"7425","8d6c8938":"7428",a241a07d:"7439",b6437249:"7469",a86b0b33:"7504",a6523144:"7524",f6a3317b:"7538",e3785e28:"7550",aac7dbd9:"7597","9c3cb6ef":"7599","7d5d7029":"7610","5e2497bd":"7633","6c5c3ed2":"7666","530d3f97":"7687","7b5ac550":"7743","6a688d7d":"7828","70d7315b":"7949",d48dfbf5:"7964","865ff8df":"7973",f17d080b:"7984",e5bd74e5:"8056",f7c4ec71:"8088","22d50692":"8101","7bf34718":"8161","5cc8b9b0":"8241",fa87a32c:"8243","4053dc61":"8370",bd84cf31:"8386","694fed3c":"8453","909e81a5":"8471",aed611d7:"8511","6875c492":"8610",cca4046f:"8645","4191805e":"8683",ab7fb454:"8702","37548e5e":"8767","690815be":"8778","7e3f9338":"8843","1d652bf4":"8847",e2e25b84:"8848",e2eb0df5:"8849",b901cc0b:"8935","82a4261b":"8944","262e31d3":"9013","5b32c430":"9043",bf6984e8:"9057",ab282d64:"9097","75a757b7":"9099","29b22651":"9110",af4e7d0a:"9142",bd22e594:"9146","27ef5b21":"9161","0007ea8e":"9248","7b0b25c2":"9315",fa29964b:"9318","0a62754e":"9365","0617fa73":"9396","52ee5a08":"9406","8586c78e":"9432","71e60ba4":"9435","1be78505":"9514","26a64a74":"9530",d27d4d62:"9531",a3814303:"9547",b6f0c853:"9552","05c29ccf":"9559","1fa3279d":"9603","72ffc875":"9637","6a765e0e":"9663",b6f5c602:"9692",f42afa8b:"9773","1d0bfbd6":"9782",e582ac7b:"9804","27e5cefa":"9853",aeece581:"9916",df203c0f:"9924",d696d01d:"9954","9db87109":"9982",bb7aefcf:"9996"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,c)=>{var b=r.o(e,a)?e[a]:void 0;if(0!==b)if(b)c.push(b[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((c,d)=>b=e[a]=[c,d]));c.push(b[2]=d);var f=r.p+r.u(a),t=new Error;r.l(f,(c=>{if(r.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var d=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;t.message="Loading chunk "+a+" failed.\n("+d+": "+f+")",t.name="ChunkLoadError",t.type=d,t.request=f,b[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,c)=>{var b,d,f=c[0],t=c[1],o=c[2],n=0;if(f.some((a=>0!==e[a]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(a&&a(c);n<f.length;n++)d=f[n],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(i)},c=self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();