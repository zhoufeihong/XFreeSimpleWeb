(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e773090"],{"333d":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},a=[];n("a9e3");Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,n){var i=o(),a=e-i,l=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=l;var o=Math.easeInOutQuad(c,i,a,t);s(o),c<t?r(e):n&&"function"===typeof n&&n()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},u=c,d=(n("87c1"),n("2877")),m=Object(d["a"])(u,i,a,!1,null,"001cdde0",null);t["a"]=m.exports},3528:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"h",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return p}));n("99af");var i=n("b775"),a=n("f54c");function r(e){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/role"),method:"get",params:e})}function s(e){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/role/all"),method:"get"})}function o(e){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/role"),method:"post",data:e})}function l(e,t){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/role/").concat(e),method:"put",data:t})}function c(e){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/role/").concat(e),method:"delete"})}function u(e,t){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/role/").concat(e,"/status"),method:"put",data:t})}function d(e){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/role/").concat(e,"/uiPermissionIds"),method:"get"})}function m(e,t){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/role/").concat(e,"/grant"),method:"put",data:t})}function p(e){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/role/").concat(e,"/users"),method:"get"})}},4979:function(e,t,n){},"4abf":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showSearch?n("el-input",{attrs:{placeholder:e.$t("commonUse.输入关键字进行过滤")},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}):e._e(),n("el-tree",{ref:"tree",attrs:{data:e.treeData,"show-checkbox":"","default-expand-all":"","check-on-click-node":"","expand-on-click-node":!1,"check-strictly":"","node-key":"value","highlight-current":"",props:e.defaultProps,"filter-node-method":e.filterNode},on:{check:e.handleChange,"current-change":e.currentChange}})],1)},a=[],r=(n("4de4"),n("d3b7"),n("4e82"),n("159b"),n("b0c0"),n("99af"),n("fe04")),s={name:"UiPermissionTree",props:{value:{required:!0,type:Array},showSearch:{required:!1,default:!0,type:Boolean}},data:function(){return{list:[],filterText:"",treeData:[],defaultProps:{children:"children",label:"label"}}},watch:{filterText:function(e){this.$refs.tree.filter(e)},value:function(e){this.$refs.tree.setCheckedKeys(e)}},created:function(){this.listPermissionResource()},methods:{filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},listPermissionResource:function(){var e=this;Object(r["d"])().then((function(t){e.list=t.data.items,e.treeData=e.handleListPermissionResource(e.list),e.value&&e.$refs.tree.setCheckedKeys(e.value)}))},handleListPermissionResource:function(e){var t={isRoot:!0,value:"",children:[]};e.sort((function(e,t){return e.sortOrder-t.sortOrder}));var n=function t(n){e.forEach((function(e){if(e.enabled&&(n.isRoot&&0===e.uiMenuType||e.parentId===n.value)){var i={value:e.id,label:e.name,isRoot:!1};t(i,e.id),n.children||(n.children=[]),n.children.push(i)}}))};return n(t),t.children},handleChange:function(e){var t=this.$refs.tree.getCheckedKeys();t&&t instanceof Array&&t.length>0?this.$emit("input",t):this.$emit("input",[])},currentChange:function(e,t){var n=!t.checked,i=this.$refs.tree.getCheckedKeys();if(e.children&&n){var a=[];this.getChildrenIds(e,a),this.$refs.tree.setCheckedKeys(i.concat(a))}else if(e.children&&!n){var r=[];this.getChildrenIds(e,r);var s=i.filter((function(e){return-1===r.indexOf(e)}));this.$refs.tree.setCheckedKeys(s)}},getChildrenIds:function(e,t){var n=this;e.children&&e.children.forEach((function(e){t.push(e.value),n.getChildrenIds(e,t)}))}}},o=s,l=n("2877"),c=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=c.exports},"55f4":function(e,t,n){},6724:function(e,t,n){"use strict";n("8d41");var i="@@wavesContext";function a(e,t){function n(n){var i=Object.assign({},t.value),a=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),r=a.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var s=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",r.appendChild(o)),a.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(n.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(n.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=a.color,o.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=n:e[i]={removeHandle:n},n}var r={bind:function(e,t){e.addEventListener("click",a(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",a(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},s=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(s)),r.install=s;t["a"]=r},"6f77":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.$t("user.用户列表"),visible:e.currentDialogVisible,width:"80%"},on:{"update:visible":function(t){e.currentDialogVisible=t}}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.userList,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:e.$t("table.id"),prop:"id",type:"index",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),n("el-table-column",{attrs:{label:e.$t("user.账号"),"min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.loginName))])]}}])}),n("el-table-column",{attrs:{label:e.$t("user.姓名"),"min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.nickname))])]}}])}),n("el-table-column",{attrs:{label:e.$t("commonUse.工号"),"min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.employeeIDNumber))])]}}])}),n("el-table-column",{attrs:{label:e.$t("user.性别"),"min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("el-tag",[e._v(" "+e._s(e._f("sexFilter")(i.sex))+" ")])]}}])}),n("el-table-column",{attrs:{label:e.$t("user.部门"),"min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.departName))])]}}])}),n("el-table-column",{attrs:{label:e.$t("user.职务"),"min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.postName))])]}}])}),n("el-table-column",{attrs:{label:e.$t("table.status"),"min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("el-switch",{attrs:{"active-value":1,"inactive-value":2,disabled:""},model:{value:i.status,callback:function(t){e.$set(i,"status",t)},expression:"row.status"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("table.creationTime"),"min-width":"150",align:"center",sortable:"custom",prop:"creationTime"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(e._f("parseTime")(i.creationTime,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1)],1)},a=[],r=n("d454"),s={name:"UserListDialog",filters:{sexFilter:function(e){return r["a"].getNameById(r["a"].sexType,e)}},props:{dialogVisible:{type:Boolean,default:!1},userList:{type:Array,default:function(){return[]}}},computed:{currentDialogVisible:{get:function(){return this.dialogVisible},set:function(e){this.$emit("update:dialogVisible",e)}}}},o=s,l=n("2877"),c=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=c.exports},"70eb":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.saveLoading,expression:"saveLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"app-container",attrs:{"element-loading-spinner":"el-icon-loading","element-loading-text":e.$t("operation.processing")}},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("commonUse.编码")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter.apply(null,arguments)}},model:{value:e.listQuery.code,callback:function(t){e.$set(e.listQuery,"code",t)},expression:"listQuery.code"}}),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("commonUse.名称")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter.apply(null,arguments)}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" "+e._s(e.$t("table.search"))+" ")]),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"system:role:create",expression:"'system:role:create'"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{id:"btn-add",type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(" "+e._s(e.$t("table.add"))+" ")]),n("el-button",{staticClass:"filter-item",attrs:{icon:"el-icon-question",type:"primary"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.guide.apply(null,arguments)}}},[e._v(" "+e._s(e.$t("driverGuid.操作指南"))+" ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[n("el-table-column",{attrs:{label:e.$t("table.id"),prop:"id",type:"index",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s((e.listQuery.pageIndex-1)*e.listQuery.pageSize+t.$index+1)+" ")]}}])}),n("el-table-column",{attrs:{label:e.$t("role.角色编码"),"min-width":"150",align:"center",sortable:"custom",prop:"code"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.code))])]}}])}),n("el-table-column",{attrs:{label:e.$t("role.角色名称"),"min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.name))])]}}])}),n("el-table-column",{attrs:{label:e.$t("role.描述"),"min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.memo))])]}}])}),n("el-table-column",{attrs:{label:e.$t("table.status"),"min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("el-switch",{attrs:{"active-value":1,"inactive-value":2},on:{change:function(t){return e.changeStatus(i)}},model:{value:i.status,callback:function(t){e.$set(i,"status",t)},expression:"row.status"}})]}}])}),n("el-table-column",{attrs:{label:e.$t("table.creationTime"),"min-width":"150",align:"center",sortable:"custom",prop:"creationTime"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(e._f("parseTime")(i.creationTime,"{y}-{m}-{d} {h}:{i}")))])]}}])}),n("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center","min-width":"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row,a=t.$index;return[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"system:role:update",expression:"'system:role:update'"}],attrs:{type:"primary"},on:{click:function(t){return e.handleUpdate(i)}}},[e._v(" "+e._s(e.$t("table.edit"))+" ")]),"deleted"!=i.status?n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"system:role:delete",expression:"'system:role:delete'"}],attrs:{type:"danger"},on:{click:function(t){return e.handleDelete(i,a)}}},[e._v(" "+e._s(e.$t("table.delete"))+" ")]):e._e(),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"system:role:update",expression:"'system:role:update'"}],attrs:{id:"btn-permission",type:"primary"},on:{click:function(t){e.rowId=i.id,e.grantDialogFormVisible=!0}}},[e._v(" "+e._s(e.$t("role.授权"))+" ")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.showUsers(i)}}},[e._v(" "+e._s(e.$t("role.用户列表"))+" ")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.pageIndex,limit:e.listQuery.pageSize},on:{"update:page":function(t){return e.$set(e.listQuery,"pageIndex",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageSize",t)},pagination:e.getList}}),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"right","label-width":"120px"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.$t("commonUse.编码"),prop:"code"}},[n("el-input",{attrs:{placeholder:e.$t("commonUse.不输入自动生成"),readonly:"create"!=e.dialogStatus},model:{value:e.temp.code,callback:function(t){e.$set(e.temp,"code","string"===typeof t?t.trim():t)},expression:"temp.code"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.$t("commonUse.名称"),prop:"name"}},[n("el-input",{attrs:{placeholder:e.$t("role.请输入名称")},model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name","string"===typeof t?t.trim():t)},expression:"temp.name"}})],1)],1)],1),n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:e.$t("role.访问类型")}},[n("el-select",{model:{value:e.temp.roleAccessType,callback:function(t){e.$set(e.temp,"roleAccessType",t)},expression:"temp.roleAccessType"}},e._l(e.$dict.RoleAccessType,(function(t){return n("el-option",{key:t.id,attrs:{label:e.$dict.getNameById(e.$dict.RoleAccessType,t.id),value:t.id}})})),1)],1)],1),n("el-col",{attrs:{span:8}},[3===e.temp.roleAccessType?n("el-form-item",{attrs:{label:e.$t("role.权限编码")}},[n("el-input",{attrs:{placeholder:e.$t("role.请输入权限编码")},model:{value:e.temp.accessValue,callback:function(t){e.$set(e.temp,"accessValue","string"===typeof t?t.trim():t)},expression:"temp.accessValue"}})],1):e._e()],1),n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:e.$t("role.描述")}},[n("el-input",{attrs:{type:"textarea",rows:4,placeholder:e.$t("role.请输入描述")},model:{value:e.temp.memo,callback:function(t){e.$set(e.temp,"memo","string"===typeof t?t.trim():t)},expression:"temp.memo"}})],1)],1)],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" "+e._s(e.$t("table.cancel"))+" ")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v(" "+e._s(e.$t("table.confirm"))+" ")])],1)],1),n("grant-role-permission",{attrs:{"row-id":e.rowId,"dialog-form-visible":e.grantDialogFormVisible},on:{"update:dialogFormVisible":function(t){e.grantDialogFormVisible=t},"update:dialog-form-visible":function(t){e.grantDialogFormVisible=t}}}),n("user-list-dialog",{attrs:{"dialog-visible":e.userDialogVisible,"user-list":e.userList},on:{"update:dialogVisible":function(t){e.userDialogVisible=t},"update:dialog-visible":function(t){e.userDialogVisible=t}}})],1)},a=[],r=(n("d3b7"),n("c740"),n("a434"),n("c24c")),s=n.n(r),o=(n("01d7"),[{element:"#btn-add",popover:{title:"Adding roles",description:"Add role information and grant corresponding permissions to roles. After a user is assigned a role, the user is assigned the rights of the role.",position:"bottom"}},{element:"#btn-permission",popover:{title:"Assign rights to roles",description:"Permission tree Node Operation Description <br> Click the arrow to expand/shrink the tree. <br> Click the check box to select/deselect the current node. <br> Click the node content to select/deselect the current node and all its child nodes",position:"left"}}]),l=o,c=[{element:"#btn-add",popover:{title:"添加角色",description:"添加角色信息，给角色授予相应权限。给用户分配角色，用户即被赋予角色的权限。",position:"bottom"}},{element:"#btn-permission",popover:{title:"给角色分配权限",description:"权限树节点操作功能介绍<br>点击箭头: 展开/收缩树<br>点击复选框: 勾选/不勾选当前节点<br>点击节点内容: 勾选/不勾选当前节点及全部子节点",position:"left"}}],u=c,d=n("3528"),m=n("6724"),p=n("333d"),f=n("d454"),h=n("89e2"),g=n("6f77"),b=n("9923"),v={name:"Role",components:{Pagination:p["a"],GrantRolePermission:h["default"],UserListDialog:g["default"]},directives:{waves:m["a"]},filters:{sexFilter:function(e){return f["a"].getNameById(f["a"].sexType,e)}},data:function(){return{saveLoading:!1,userDialogVisible:!1,userList:[],grantDialogFormVisible:!1,rowId:"",tableKey:0,list:[],total:0,listLoading:!0,listQuery:{pageIndex:1,pageSize:20,code:"",name:"",sorting:""},temp:{id:"",code:null,name:null,memo:null,status:1,roleAccessType:1,accessValue:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:this.$t("table.edit"),create:this.$t("table.add")},rules:{name:[{required:!0,message:this.$t("role.名称必填"),trigger:"change"}]},downloadLoading:!1}},created:function(){this.getList()},mounted:function(){this.driver=new s.a({doneBtnText:this.$t("driverGuid.完成"),closeBtnText:this.$t("driverGuid.关闭"),stageBackground:"#fff",nextBtnText:this.$t("driverGuid.下一步"),prevBtnText:this.$t("driverGuid.上一步")})},methods:{guide:function(){var e=Object(b["b"])();"en"===e?this.driver.defineSteps(l):this.driver.defineSteps(u),this.driver.start()},getList:function(){var e=this;this.listLoading=!0,Object(d["d"])(this.listQuery).then((function(t){e.list=t.data.data,e.total=t.data.total,setTimeout((function(){e.listLoading=!1}),200)}))},handleFilter:function(){this.getList()},sortChange:function(e){var t=e.prop,n=e.order;t&&this.sortByProp(t,n)},sortByProp:function(e,t){this.listQuery.sorting="ascending"===t?"".concat(e," asc"):t?"".concat(e," desc"):"",this.handleFilter()},resetTemp:function(){this.temp={id:"",code:null,name:null,memo:null,status:1,roleAccessType:1,accessValue:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(e.saveLoading=!0,Object(d["a"])(e.temp).then((function(){e.list.unshift(e.temp),e.dialogFormVisible=!1,e.$notify({title:e.$t("operation.result.successTitle"),message:e.$t("operation.result.addSuccessTitle"),type:"success",duration:2e3}),e.getList()})).finally((function(){e.saveLoading=!1})))}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var n=Object.assign({},e.temp);e.saveLoading=!0,Object(d["h"])(n.id,n).then((function(){var t=e.list.findIndex((function(t){return t.id===e.temp.id}));e.list.splice(t,1,e.temp),e.dialogFormVisible=!1,e.$notify({title:e.$t("operation.result.successTitle"),message:e.$t("operation.result.editSuccessTitle"),type:"success",duration:2e3}),e.getList()})).finally((function(){e.saveLoading=!1}))}}))},changeStatus:function(e){var t=this;this.saveLoading=!0,Object(d["i"])(e.id,{status:e.status}).then((function(){t.$notify({title:t.$t("operation.result.successTitle"),message:t.$t("operation.result.updateStatusSuccessTitle"),type:"success",duration:2e3})})).finally((function(){t.saveLoading=!1}))},handleDelete:function(e,t){var n=this,i=this;this.$confirm(this.$t("operation.confirmDeleteMessage"),this.$t("operation.confirmDeleteTitle"),{confirmButtonText:this.$t("operation.confirmButtonText"),cancelButtonText:this.$t("operation.cancelButtonText"),type:"warning"}).then((function(){n.saveLoading=!0,Object(d["b"])(e.id).then((function(){var t=i.list.findIndex((function(t){return t.id===e.id}));i.list.splice(t,1),i.dialogFormVisible=!1,i.$notify({title:n.$t("operation.result.successTitle"),message:n.$t("operation.result.deleteSuccessTitle"),type:"success",duration:2e3})})).finally((function(){n.saveLoading=!1}))}))},handleDownload:function(){this.downloadLoading=!0,this.downloadLoading=!1},showUsers:function(e){var t=this;this.userDialogVisible=!0,Object(d["f"])(e.id).then((function(e){t.userList=e.data}))}}},y=v,w=n("2877"),$=Object(w["a"])(y,i,a,!1,null,null,null);t["default"]=$.exports},"87c1":function(e,t,n){"use strict";n("9caa")},"89e2":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-drawer",{attrs:{title:e.$t("role.权限管理"),visible:e.currentDialogFormVisible,size:"39%"},on:{"update:visible":function(t){e.currentDialogFormVisible=t}}},[n("div",{staticClass:"drawer_content"},[n("div",{staticClass:"form_contet"},[n("ui-permission-tree",{model:{value:e.selectdPermissions,callback:function(t){e.selectdPermissions=t},expression:"selectdPermissions"}})],1),n("div",{staticClass:"drawer_footer"},[n("el-button",{on:{click:function(t){e.currentDialogFormVisible=!1}}},[e._v(" "+e._s(e.$t("commonUse.取消"))+" ")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updateData()}}},[e._v(" "+e._s(e.$t("commonUse.保存"))+" ")])],1)])])],1)},a=[],r=n("3528"),s=n("4abf"),o={name:"GrantRolePermission",components:{UiPermissionTree:s["default"]},props:{rowId:{type:String,default:""},dialogFormVisible:{type:Boolean,default:!1}},data:function(){return{selectdPermissions:[]}},computed:{currentDialogFormVisible:{get:function(){return this.dialogFormVisible},set:function(e){this.$emit("update:dialogFormVisible",e)}}},watch:{rowId:function(e){var t=this;Object(r["e"])(e).then((function(e){t.selectdPermissions=e.data}))}},created:function(){},methods:{updateData:function(){var e=this;this.selectdPermissions||(this.selectdPermissions=[]),Object(r["g"])(this.rowId,this.selectdPermissions).then((function(){e.$notify({title:"成功",message:"保存成功",type:"success",duration:2e3})}))},success:function(){this.$emit("success",this.temp)}}},l=o,c=(n("db65"),n("f53d"),n("2877")),u=Object(c["a"])(l,i,a,!1,null,"77c4a053",null);t["default"]=u.exports},"8d41":function(e,t,n){},"9caa":function(e,t,n){},db65:function(e,t,n){"use strict";n("4979")},f53d:function(e,t,n){"use strict";n("55f4")},fe04:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"j",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"h",(function(){return p})),n.d(t,"i",(function(){return f}));n("99af");var i=n("b775"),a=n("f54c");function r(e){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/uiPermission"),method:"post",data:e})}function s(e,t){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/uiPermission/").concat(e),method:"put",data:t})}function o(e){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/uiPermission/").concat(e),method:"delete"})}function l(e){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/uiPermission/query"),method:"get",params:{parentId:e}})}function c(){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/uiPermission/getAll"),method:"get"})}function u(){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/uiPermission/getAllBackgroundApi"),method:"get"})}function d(e){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/uiPermission/").concat(e,"/permissionCodes"),method:"get"})}function m(e,t){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/uiPermission/").concat(e,"/permissionCodes"),method:"put",data:t})}function p(){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/uiPermission/refreshBackgroundApi"),method:"put"})}function f(){return Object(i["a"])({url:"".concat(a["a"],"api/systemManagement/uiPermission/removeAllMemoryCache"),method:"put"})}}}]);