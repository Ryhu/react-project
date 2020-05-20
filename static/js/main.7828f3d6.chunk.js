(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{26:function(e,t,n){e.exports=n(39)},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(12),o=n.n(i),c=n(14),u=n(4),s=n(3);var l=n(9),p={Apple:{name:"Apple",type:"consumable",image:"apple",flavor:"a ripe, juicy apple",effectDescription:"heals 5 HP, 5 Hunger",HPUp:5,HungerUp:5,gold:1},Potion:{name:"Potion",type:"consumable",image:"potion",flavor:"a potion made of red herbs",effectDescription:"heals 50 HP",HPUp:50,gold:10},Bread:{name:"Bread",type:"consumable",image:"bread",flavor:"made of bread.",effectDescription:"heals 10 HP, 20 Hunger",HPUp:10,HungerUp:20,gold:3},Rock:{name:"Rock",type:"crafting",image:"rock",flavor:"kinda hard.",gold:1}};var d,m=n(16),f={ItemApple1:{title:"An Apple",image:"apple",text:"You come across an apple on the ground!",buttons:[{name:"Take",effects:[["GetItem","Apple"],["EndEvent"]]},{name:"Discard",effects:[["EndEvent"]]}]},ItemPotion1:{title:"A Potion",image:"Potion",text:"You come across an Potion on the ground!",buttons:[{name:"Take",effects:[["GetItem","Potion"],["EndEvent"]]},{name:"Discard",effects:[["EndEvent"]]}]},ItemBread1:{title:"A Bread",image:"Bread",text:"You come across a loaf of bread on the ground!",buttons:[{name:"Take",effects:[["GetItem","Bread"],["EndEvent"]]},{name:"Discard",effects:[["EndEvent"]]}]},ExitForest:{title:"An Exit!",image:"Exit",text:"The forest clears up, revealing an opening in the trees and a weathered road leading out of the forest.",buttons:[{name:"Continue",effects:[["LeaveDungeon"]]}]},EventTrapPitfall1_1:{title:"ITS A TRAP!",image:"kobold",text:"As you take a step forward, you get this eerie feeling before your foot touches the ground. Do you throw yourself sideways (uses 5 energy) at the last moment, or continue the step?",buttons:[{name:"Dodge",effects:[["ContinueEvent","EventTrapPitfall1_2"]]},{name:"Step forward",effects:[["ContinueEvent","EventTrapPitfall1_3"]]}]},EventTrapPitfall1_2:{title:"ITS A TRAP!",image:"kobold",text:"Using 5 points of stamina, you throw yourself sideways. After picking yourself up, you poke at the ground you would have stepped with a stick. The earth gives way and reveals a massive hole, at least 5 feet deep. Good thing you avoided that!",buttons:[{name:"Continue",effects:[["DecreaseHunger",5],["EndEvent"]]}]},EventTrapPitfall1_3:{title:"ITS A TRAP!",image:"kobold",text:"Ignoring your instincts, you step forward anyway. What kind of idiot would take such a drastic measure for a stupid suspicion, anyway? As you step forward, the ground opens up, revealing a massive pitfall trap. After you hit the bottom, taking 10 damage, you wonder who would make such a thing in the middle of a place like this.",buttons:[{name:"Continue",effects:[["DecreaseHP",10],["EndEvent"]]}]}},v=(d={ItemApple1:{name:"Apple",image:"apple",flavor:"a ripe, juicy apple",event:f.ItemApple1},ItemPotion1:{name:"Potion",image:"potion",flavor:"a Potion on the ground",event:f.ItemPotion1},ItemBread1:{name:"Bread",image:"bread",flavor:"a Bread on the ground",event:f.ItemBread1},EventTrapPitfall1_1:{name:"Suspicious grass",image:"kobold",flavor:"somethings not quite right here...",event:f.EventTrapPitfall1_1}},Object(m.a)(d,"EventTrapPitfall1_1",{name:"Suspicious grass",image:"kobold",flavor:"somethings not quite right here...",event:f.EventTrapPitfall1_1}),Object(m.a)(d,"ExitForest",{name:"An Exit",image:"exit",flavor:"A way out!",event:f.ExitForest}),d);var h=Object(c.b)({inventory:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{activeIndex:null,backpack:[p.Apple,p.Potion,p.Bread,p.Rock,null,null,null,null,null,p.Apple,p.Potion,p.Bread,p.Rock,null,null,null,null,null]},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_ACTIVE_ITEM":return{activeIndex:n.inventoryIndex,backpack:Object(l.a)(t.backpack)};case"REMOVE_ACTIVE_ITEM":return{activeIndex:null,backpack:Object(l.a)(t.backpack)};case"DELETE_ITEM":return(e=Object(l.a)(t.backpack))[n.index-1]=null,Object(s.a)(Object(s.a)({},t),{},{backpack:e});case"GET_ITEM":return(e=Object(l.a)(t.backpack))[e.indexOf(null)]=p[n.itemIndex],Object(s.a)(Object(s.a)({},t),{},{backpack:e});case"SWAP_ITEMS":var r=(e=Object(l.a)(t.backpack))[n.inventoryIndex1];return e[n.inventoryIndex1]=e[n.inventoryIndex2],e[n.inventoryIndex2]=r,Object(s.a)(Object(s.a)({},t),{},{backpack:e});default:return t}},fields:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{event:null,activeField:null,leftField:[],centerField:[],rightField:[]},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"TRIGGER_EVENT":return Object(s.a)(Object(s.a)({},n),{},{event:r.event,activeField:r.fieldIndex});case"CONTINUE_EVENT":return Object(s.a)(Object(s.a)({},n),{},{event:f[r.eventIndex]});case"END_EVENT":return console.log(n),(t={leftField:Object(l.a)(n.leftField),centerField:Object(l.a)(n.centerField),rightField:Object(l.a)(n.rightField)})[n.activeField]=t[n.activeField].slice(1),Object(s.a)(Object(s.a)({},n),{},{leftField:t.leftField,centerField:t.centerField,rightField:t.rightField,activeField:null,event:null});case"RANDOMIZED_SETUP":t={},e=[];var a=["leftField","centerField","rightField"];return a.forEach((function(n){for(var a=0;a<r.amount;a++)e.push(v[Object.keys(v)[Math.floor(Math.random()*Object.keys(v).length)]]);t[n]=Object(l.a)(e),e=[]})),t[a[Math.floor(Math.random()*a.length)]].push(v.ExitForest),Object(s.a)(Object(s.a)({},n),{},{leftField:Object(l.a)(t.leftField),centerField:Object(l.a)(t.centerField),rightField:Object(l.a)(t.rightField)});default:return n}},status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{HP:50,HPMax:200,Hunger:10,HungerMax:100,Coins:10},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREASE_HP":return Object(s.a)(Object(s.a)({},e),{},{HP:e.HP+t.amount>e.HPMax?e.HPMax:e.HP+t.amount});case"DECREASE_HP":return Object(s.a)(Object(s.a)({},e),{},{HP:e.HP-t.amount});case"INCREASE_HUNGER":return Object(s.a)(Object(s.a)({},e),{},{Hunger:e.Hunger+t.amount>e.HungerMax?e.HungerMax:e.Hunger+t.amount});case"DECREASE_HUNGER":return e.Hunger-t.amount>0?Object(s.a)(Object(s.a)({},e),{},{Hunger:e.Hunger-t.amount}):Object(s.a)(Object(s.a)({},e),{},{HP:e.HP+e.Hunger-t.amount,Hunger:0});default:return e}},system:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dragItem:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DRAG_START":return Object(s.a)(Object(s.a)({},e),{},{dragItem:t.item});case"DRAG_END":return Object(s.a)(Object(s.a)({},e),{},{dragItem:null});default:return e}},town:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{yorne:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DRAG_START":return Object(s.a)(Object(s.a)({},e),{},{dragItem:t.item});case"DRAG_END":return Object(s.a)(Object(s.a)({},e),{},{dragItem:null});default:return e}}}),b=(n(36),n(5)),g=n(6),E=n(8),y=n(7),x=(n(37),n(1)),O=n(2);function I(){var e=Object(x.a)(["\n  height: 100px;\n  width: 100px;\n  border: 1px solid grey;\n  padding: 10px;\n"]);return I=function(){return e},e}function k(){var e=Object(x.a)(["\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-image: url('./card_back.png');\n  width: 240px;\n  height: 300px;\n  padding: 10px;\n"]);return k=function(){return e},e}function j(){var e=Object(x.a)(["\n  background-color: red;\n  width: 240px;\n  height: 300px;\n  padding: 10px;\n  border-radius: 1rem;\n"]);return j=function(){return e},e}function w(){var e=Object(x.a)(["\n  background-color: red;\n"]);return w=function(){return e},e}var H=function(e){Object(E.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).getItem=function(){e.props.GetItem(e.props.card.itemIndex),e.props.DeleteField(e.props.fieldIndex)},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this;return this.props.card?a.a.createElement(P,{onClick:function(){e.props.TriggerEvent(e.props.card.event,e.props.fieldIndex)}},a.a.createElement("p",null,this.props.card.name),a.a.createElement("p",null,this.props.card.type),a.a.createElement(A,{src:"./"+this.props.card.image+".png"}),a.a.createElement("p",null,this.props.card.flavor),"item"===this.props.card.type?a.a.createElement(T,{onClick:this.getItem},"Pick Up"):null):a.a.createElement(D,null)}}]),n}(r.Component),T=O.a.button(w()),P=O.a.div(j()),D=O.a.div(k()),A=O.a.img(I()),_=Object(u.b)((function(e){return{status:e.status}}),(function(e){return{DeleteField:function(t){return e({type:"DELETE_FIELD",fieldIndex:t})},GetItem:function(t){return e({type:"GET_ITEM",itemIndex:t})},TriggerEvent:function(t,n){return e({type:"TRIGGER_EVENT",event:t,fieldIndex:n})}}}))(H);function C(){var e=Object(x.a)(["\nwidth: 60%;\n  display: flex;\n  div{\n    margin: 5px;\n  }\n"]);return C=function(){return e},e}var R=function(e){Object(E.a)(n,e);var t=Object(y.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return a.a.createElement(F,{className:"Display"},a.a.createElement(_,{card:this.props.fields.leftField[0],fieldIndex:"leftField"}),a.a.createElement(_,{card:this.props.fields.centerField[0],fieldIndex:"centerField"}),a.a.createElement(_,{card:this.props.fields.rightField[0],fieldIndex:"rightField"}))}}]),n}(r.Component),F=O.a.div(C()),S=Object(u.b)((function(e){return{fields:e.fields}}))(R);function N(){var e=Object(x.a)(["\n  max-height: 120px;\n  max-width: 120px;\n  border: 1px solid grey;\n  padding: 10px;\n"]);return N=function(){return e},e}function M(){var e=Object(x.a)(["\n  font-size: 1.2rem;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 1rem;\n"]);return M=function(){return e},e}function U(){var e=Object(x.a)(["\n  font-size: 1.2rem;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 1rem;\n"]);return U=function(){return e},e}function G(){var e=Object(x.a)(["\n  text-align: right;\n  margin-top: 2px;\n  margin-right: 7px;\n  padding-left: 3px;\n  padding-bottom: 3px;\n  cursor: pointer;\n"]);return G=function(){return e},e}function z(){var e=Object(x.a)(["\n  height: 1.1rem;\n  width: 1.1rem;\n  padding-left: .1rem;\n  padding-right: .3rem;\n"]);return z=function(){return e},e}function B(){var e=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n"]);return B=function(){return e},e}function V(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]);return V=function(){return e},e}function L(){var e=Object(x.a)(["\n      top: -16rem;\n      left: -23rem;;\n      position: relative;\n      width: 18rem;\n      height: 25rem;\n      background: ",";\n      border: 1px solid #ccc;\n      box-shadow: \n        -2rem 2rem 2rem rgba(black, 0.2);\n      filter: blur(0);\n      border-radius: 10px;\n      border: 5px solid blue;\n      z-index: 10;\n    "]);return L=function(){return e},e}var X=function(e){Object(E.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onClose=function(t){e.props.onClose&&e.props.onClose(t)},e.useItem=function(t){e.onClose(),e.props.item.HPUp&&e.props.IncreaseHP(e.props.item.HPUp),e.props.item.HungerUp&&e.props.IncreaseHunger(e.props.item.HungerUp),e.props.DeleteItem(e.props.inventoryIndex)},e.discardItem=function(t){e.onClose(),e.props.DeleteItem(e.props.inventoryIndex)},e}return Object(g.a)(n,[{key:"render",value:function(){var e=O.a.div(L(),this.props.item?W[this.props.item.type]:"white");return a.a.createElement(e,{id:"modal"},this.props.item&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Z,{onClick:this.onClose},"Close"),a.a.createElement("h2",null,this.props.item.name),a.a.createElement(Q,{src:"./"+this.props.item.image+".png"}),a.a.createElement(q,null,this.props.item.HPUp&&a.a.createElement(Y,null,this.props.item.HPUp,a.a.createElement(J,{src:"./heart.png"})),this.props.item.HungerUp&&a.a.createElement(Y,null,this.props.item.HungerUp,a.a.createElement(J,{src:"./apple.png"})),this.props.item.gold&&a.a.createElement(Y,null,this.props.item.gold,a.a.createElement(J,{src:"./coins.png"}))),a.a.createElement("p",null,this.props.item.flavor),"consumable"===this.props.item.type&&a.a.createElement(K,{onClick:this.useItem},"Use"),a.a.createElement($,{onClick:this.discardItem},"Discard")))}}]),n}(a.a.Component),W={consumable:"#ccffcc",crafting:"#ffefcc"},q=O.a.div(V()),Y=O.a.span(B()),J=O.a.img(z()),Z=O.a.p(G()),K=O.a.button(U()),$=O.a.button(M()),Q=O.a.img(N()),ee=Object(u.b)((function(e){return{status:e.status}}),(function(e){return{IncreaseHP:function(t){return e({type:"INCREASE_HP",amount:t})},IncreaseHunger:function(t){return e({type:"INCREASE_HUNGER",amount:t})},DeleteItem:function(t){return e({type:"DELETE_ITEM",index:t})}}}))(X),te=n(41);function ne(){var e=Object(x.a)(["\nposition: relative;\n  width: 1px;\n  height: 1px;\n  &.fade-enter {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n\n  &.fade-enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: opacity 300ms, transform 300ms;\n  }\n\n  &.fade-exit {\n    opacity: 1;\n    transform: scale(0.9);\n    transition: opacity 300ms, transform 300ms;\n  }\n\n  &.fade-exit-active {\n    opacity: 0;\n    transition: opacity 300ms, transform 300ms;\n  }\n  z-index: 4;\n"]);return ne=function(){return e},e}function re(){var e=Object(x.a)(["\nheight: 3.5rem;\nwidth: 3.5rem;\npadding: .25rem;\nposition: relative;\n  &.fade-enter {\n    top: -40px;\n    opacity: 0;\n    transform: scale(0.9);\n  }\n\n  &.fade-enter-active {\n    opacity: 1;\n    top: 0px;\n    transform: translateX(0);\n    transition: opacity 300ms, transform 300ms, top 300ms;\n  }\n\n  &.hidden{\n    visibility: hidden;\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(x.a)(["\n  height: 4rem;\n  width: 4rem;\n  display: flex;\n  border: 2px solid grey;\n"]);return ae=function(){return e},e}var ie=function(e){Object(E.a)(n,e);var t=Object(y.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).startDrag=function(t){e.props.DragStart({inventoryIndex:e.props.inventoryIndex,item:e.props.item}),e.props.RemoveActiveItem()},e.dragOver=function(e){e.preventDefault()},e.dropped=function(t){t.preventDefault(),e.props.system.dragItem&&(e.props.SwapItems(e.props.inventoryIndex-1,e.props.system.dragItem.inventoryIndex-1),e.props.DragEnd())},e.showModal=function(t){e.props.item&&(e.setState({show:!e.state.show}),e.props.inventory.activeIndex===e.props.inventoryIndex?e.props.SetActiveItem(null):e.props.SetActiveItem(e.props.inventoryIndex))},e.state={show:!1},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(oe,{onDrop:this.dropped,onDragOver:this.dragOver,onClick:function(t){e.showModal(t)}},a.a.createElement(te.a,{in:!!this.props.item,classNames:"fade",timeout:300,unmountOnExit:!0},a.a.createElement(ce,{draggable:!0,onDragStart:this.startDrag,onDragEnd:this.props.DragEnd,className:this.props.item?"":"hidden",src:this.props.item?"./"+this.props.item.image+".png":null})),a.a.createElement(te.a,{in:this.props.inventory.activeIndex===this.props.inventoryIndex,classNames:"fade",timeout:300,unmountOnExit:!0},a.a.createElement(ue,null,a.a.createElement(ee,{show:this.state.show,item:this.props.item,onClose:this.showModal,inventoryIndex:this.props.inventoryIndex}))))}}]),n}(r.Component),oe=O.a.div(ae()),ce=O.a.img(re()),ue=O.a.div(ne()),se=Object(u.b)((function(e){return{inventory:e.inventory,system:e.system}}),(function(e){return{SetActiveItem:function(t){return e({type:"SET_ACTIVE_ITEM",inventoryIndex:t})},SwapItems:function(t,n){return e({type:"SWAP_ITEMS",inventoryIndex1:t,inventoryIndex2:n})},DragStart:function(t){return e({type:"DRAG_START",item:t})},DragEnd:function(){return e({type:"DRAG_END"})},RemoveActiveItem:function(){return e({type:"REMOVE_ACTIVE_ITEM"})}}}))(ie);function le(){var e=Object(x.a)(["\n  float: right;\n"]);return le=function(){return e},e}function pe(){var e=Object(x.a)(["\n  max-width: 16rem;\n  display: flex;\n  flex-direction: column;\n  div{\n    margin: 5px;\n  }\n"]);return pe=function(){return e},e}function de(){var e=Object(x.a)(["\n  display: flex;\n  div{\n    margin: 5px;\n  }\n"]);return de=function(){return e},e}function me(){var e=Object(x.a)(["\n  position: absolute;\n  opacity: 0.5;\n  height: 16rem;\n  max-width: 16rem;\n  z-index: -1\n"]);return me=function(){return e},e}var fe=function(e){Object(E.a)(n,e);var t=Object(y.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return a.a.createElement(ge,null,a.a.createElement(be,null,a.a.createElement(ve,{src:"./backpack.png"}),a.a.createElement(he,null,a.a.createElement(se,{item:this.props.inventory.backpack[0],inventoryIndex:"1"}),a.a.createElement(se,{item:this.props.inventory.backpack[1],inventoryIndex:"2"}),a.a.createElement(se,{item:this.props.inventory.backpack[2],inventoryIndex:"3"})),a.a.createElement(he,null,a.a.createElement(se,{item:this.props.inventory.backpack[3],inventoryIndex:"4"}),a.a.createElement(se,{item:this.props.inventory.backpack[4],inventoryIndex:"5"}),a.a.createElement(se,{item:this.props.inventory.backpack[5],inventoryIndex:"6"})),a.a.createElement(he,null,a.a.createElement(se,{item:this.props.inventory.backpack[6],inventoryIndex:"7"}),a.a.createElement(se,{item:this.props.inventory.backpack[7],inventoryIndex:"8"}),a.a.createElement(se,{item:this.props.inventory.backpack[8],inventoryIndex:"9"}))),a.a.createElement(be,null,a.a.createElement(ve,{src:"./backpack.png"}),a.a.createElement(he,null,a.a.createElement(se,{item:this.props.inventory.backpack[9],inventoryIndex:"10"}),a.a.createElement(se,{item:this.props.inventory.backpack[10],inventoryIndex:"11"}),a.a.createElement(se,{item:this.props.inventory.backpack[11],inventoryIndex:"12"})),a.a.createElement(he,null,a.a.createElement(se,{item:this.props.inventory.backpack[12],inventoryIndex:"13"}),a.a.createElement(se,{item:this.props.inventory.backpack[13],inventoryIndex:"14"}),a.a.createElement(se,{item:this.props.inventory.backpack[14],inventoryIndex:"15"})),a.a.createElement(he,null,a.a.createElement(se,{item:this.props.inventory.backpack[15],inventoryIndex:"16"}),a.a.createElement(se,{item:this.props.inventory.backpack[16],inventoryIndex:"17"}),a.a.createElement(se,{item:this.props.inventory.backpack[17],inventoryIndex:"18"}))))}}]),n}(r.Component),ve=O.a.img(me()),he=O.a.div(de()),be=O.a.div(pe()),ge=O.a.div(le()),Ee=Object(u.b)((function(e){return{inventory:e.inventory}}))(fe);function ye(){var e=Object(x.a)([" \n  -webkit-text-fill-color: white; \n  -webkit-text-stroke-width: .9px;\n  -webkit-text-stroke-color: black;\n  margin-top: 0;\n  z-index: 3;\n  position: relative;\n  width: 100%;\n  text-align: center;\n"]);return ye=function(){return e},e}function xe(){var e=Object(x.a)(["\n  background-color: black;\n  margin: 20px;\n  width: 400px;\n  height: 50px;\n  border-radius: 10px;\n  border: 2px solid black;\n  font-size: 2rem;\n  position: relative;\n  z-index: 1\n"]);return xe=function(){return e},e}function Oe(){var e=Object(x.a)([" \n  -webkit-text-fill-color: white; \n  -webkit-text-stroke-width: .9px;\n  -webkit-text-stroke-color: black;\n  margin-top: 0;\n  z-index: 3;\n  position: relative;\n  width: 100%;\n  text-align: center;\n"]);return Oe=function(){return e},e}function Ie(){var e=Object(x.a)(["\n  background-color: black;\n  margin: 20px;\n  width: 400px;\n  height: 50px;\n  border-radius: 10px;\n  border: 2px solid black;\n  font-size: 2rem;\n  position: relative;\n  z-index: 1\n"]);return Ie=function(){return e},e}function ke(){var e=Object(x.a)(["\n  background-color: #ccffff;\n  border-radius: 15px;\n  border: 6px solid grey;\n  width: 30rem;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ke=function(){return e},e}function je(){var e=Object(x.a)(["\n  width: 1.5rem;\n  height: 1.5rem;\n  display: inline-block;\n"]);return je=function(){return e},e}function we(){var e=Object(x.a)(["\n  padding-right: .2rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n"]);return we=function(){return e},e}function He(){var e=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  height: 2rem;\n"]);return He=function(){return e},e}function Te(){var e=Object(x.a)(["\n      background-color: orange;\n      width: ","%;\n      height: 50px;\n      position: absolute;\n      border-radius: 7px;\n      z-index: 2;\n    "]);return Te=function(){return e},e}function Pe(){var e=Object(x.a)(["\n      background-color: red;\n      width: ","%;\n      height: 50px;\n      position: absolute;\n      border-radius: 7px;\n      z-index: 2;\n    "]);return Pe=function(){return e},e}var De=function(e){Object(E.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).dragOver=function(e){e.preventDefault()},e.dropped=function(t){t.preventDefault(),e.props.system.dragItem&&"consumable"===e.props.system.dragItem.item.type&&(e.props.system.dragItem.item.HPUp&&e.props.IncreaseHP(e.props.system.dragItem.item.HPUp),e.props.system.dragItem.item.HungerUp&&e.props.IncreaseHunger(e.props.system.dragItem.item.HungerUp),e.props.DeleteItem(e.props.system.dragItem.inventoryIndex))},e}return Object(g.a)(n,[{key:"render",value:function(){var e=O.a.div(Pe(),Math.floor(parseFloat(this.props.status.HP)/this.props.status.HPMax*100)),t=O.a.div(Te(),Math.floor(parseFloat(this.props.status.Hunger)/this.props.status.HungerMax*100));return a.a.createElement(Re,{onDragOver:this.dragOver,onDrop:this.dropped},a.a.createElement(Fe,null,a.a.createElement(e,null),a.a.createElement(Se,null,this.props.status.HP+"/"+this.props.status.HPMax)),a.a.createElement(Ne,null,a.a.createElement(t,null),a.a.createElement(Me,null,this.props.status.Hunger+"/"+this.props.status.HungerMax)),a.a.createElement(Ae,null,a.a.createElement(_e,null,this.props.status.Coins),a.a.createElement(Ce,{src:"./coins.png"})))}}]),n}(r.Component),Ae=O.a.div(He()),_e=O.a.p(we()),Ce=O.a.img(je()),Re=O.a.div(ke()),Fe=O.a.div(Ie()),Se=O.a.p(Oe()),Ne=O.a.div(xe()),Me=O.a.p(ye()),Ue=Object(u.b)((function(e){return{status:e.status,system:e.system}}),(function(e){return{IncreaseHP:function(t){return e({type:"INCREASE_HP",amount:t})},IncreaseHunger:function(t){return e({type:"INCREASE_HUNGER",amount:t})},DeleteItem:function(t){return e({type:"DELETE_ITEM",index:t})}}}))(De);function Ge(){var e=Object(x.a)(["\n  max-height: 120px;\n  max-width: 120px;\n  border: 1px solid grey;\n  padding: 10px;\n"]);return Ge=function(){return e},e}function ze(){var e=Object(x.a)(["\n  font-size: 1.2rem;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 1rem;\n"]);return ze=function(){return e},e}function Be(){var e=Object(x.a)(["\n  height: 30rem;\n  width: 60rem;\n  background-color: green;\n  width: 60%;\n  font-size: 2rem;\n"]);return Be=function(){return e},e}function Ve(){var e=Object(x.a)(["\n  display: block;\n"]);return Ve=function(){return e},e}var Le=function(e){Object(E.a)(n,e);var t=Object(y.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"buttonEffect",value:function(e){var t=this;e.effects.forEach((function(e){var n;(n=t.props)[e[0]].apply(n,Object(l.a)(e.slice(1)))}))}},{key:"render",value:function(){var e=this,t=this.props.fields.event;return a.a.createElement(We,{id:"modal"},null!=t&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,t.title),a.a.createElement(Xe,null,t.text),t.buttons.map((function(t){return a.a.createElement(qe,{onClick:function(){return e.buttonEffect(t)}},t.name)}))))}}]),n}(a.a.Component),Xe=O.a.p(Ve()),We=O.a.div(Be()),qe=O.a.button(ze()),Ye=(O.a.img(Ge()),Object(u.b)((function(e){return{status:e.status,fields:e.fields}}),(function(e){return{IncreaseHP:function(t){return e({type:"INCREASE_HP",amount:t})},IncreaseHunger:function(t){return e({type:"INCREASE_HUNGER",amount:t})},DecreaseHP:function(t){return e({type:"DECREASE_HP",amount:t})},DecreaseHunger:function(t){return e({type:"DECREASE_HUNGER",amount:t})},GetItem:function(t){return e({type:"GET_ITEM",itemIndex:t})},EndEvent:function(){return e({type:"END_EVENT"})},ContinueEvent:function(t){return e({type:"CONTINUE_EVENT",eventIndex:t})}}}))(Le));function Je(){var e=Object(x.a)(["\n  width: 30%;\n  display: absolute;\n  float: right;\n"]);return Je=function(){return e},e}function Ze(){var e=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n   -khtml-user-select: none; /* Konqueror HTML */\n     -moz-user-select: none; /* Old versions of Firefox */\n      -ms-user-select: none; /* Internet Explorer/Edge */\n          user-select: none; /* Non-prefixed version, currently\n                                supported by Chrome, Edge, Opera and Firefox */\n"]);return Ze=function(){return e},e}var Ke=function(e){Object(E.a)(n,e);var t=Object(y.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.RandomizedSetup(5)}},{key:"render",value:function(){return console.log(this.props),a.a.createElement($e,null,null!==this.props.fields.event?a.a.createElement(Ye,null):a.a.createElement(S,null),a.a.createElement(Qe,{className:"invstatus"},a.a.createElement(Ue,null),a.a.createElement(Ee,null)))}}]),n}(r.Component),$e=O.a.div(Ze()),Qe=O.a.div(Je()),et=Object(u.b)((function(e){return{fields:e.fields}}),(function(e){return{RandomizedSetup:function(t){return e({type:"RANDOMIZED_SETUP",amount:t})}}}))(Ke),tt=function(e){Object(E.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).handleOnClick=function(t){e.props.increaseCount()},e}return Object(g.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(et,null))}}]),n}(r.Component),nt=Object(u.b)((function(e){return{status:e.status}}),(function(e){return{increaseCount:function(){return e({type:"INCREASE_COUNT"})}}}))(tt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var rt=Object(c.c)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(a.a.createElement(u.a,{store:rt},a.a.createElement(nt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.7828f3d6.chunk.js.map