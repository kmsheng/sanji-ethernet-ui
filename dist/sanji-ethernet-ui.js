!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular"),require("sanji-core-ui")):"function"==typeof define&&define.amd?define(["angular","sanji-core-ui"],t):"object"==typeof exports?exports.sjEthernet=t(require("angular"),require("sanji-core-ui")):e.sjEthernet=t(e.angular,e["sanji-core-ui"])}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(6),u=r(a),s=n(35),l=r(s),c=n(32),f=r(c),d=n(26),E=r(d),p=n(27),_=r(p),h=n(38),m=r(h),T=o["default"].module("sanji.ethernet",[u["default"],l["default"],f["default"]]);T.config(E["default"]),T.service("ethernetService",_["default"]),T.component("sanjiEthernetWindow",m["default"]),t["default"]=T=T.name,e.exports=t["default"]},function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(11),o=r(i);t["default"]=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o["default"])(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},function(e,t,n){e.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var r=n(14),i=n(19),o=n(21),a=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){e.exports={"default":n(12),__esModule:!0}},function(e,t,n){n(22);var r=n(7).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(4);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){var r=n(13);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var r=n(4),i=n(9).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t,n){var r=n(9),i=n(7),o=n(15),a=n(18),u="prototype",s=function(e,t,n){var l,c,f,d=e&s.F,E=e&s.G,p=e&s.S,_=e&s.P,h=e&s.B,m=e&s.W,T=E?i:i[t]||(i[t]={}),v=T[u],b=E?r:p?r[t]:(r[t]||{})[u];E&&(n=t);for(l in n)c=!d&&b&&void 0!==b[l],c&&l in T||(f=c?b[l]:n[l],T[l]=E&&"function"!=typeof b[l]?n[l]:h&&c?o(f,r):m&&b[l]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[u]=e[u],t}(f):_&&"function"==typeof f?o(Function.call,f):f,_&&((T.virtual||(T.virtual={}))[l]=f,e&s.R&&v&&!v[l]&&a(v,l,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t,n){var r=n(10),i=n(20);e.exports=n(3)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){e.exports=!n(3)&&!n(8)(function(){return 7!=Object.defineProperty(n(16)("div"),"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(4);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(17);r(r.S+r.F*!n(3),"Object",{defineProperty:n(10).f})},function(e,t){e.exports={get:{url:"/network/ethernets",type:"collection",titlePrefix:"eth"},put:{url:"/network/ethernets/:id",type:"model"},fields:[{key:"enableDhcp",type:"radio",templateOptions:{required:!0,options:[{label:"ETHERNET_FORM_LABEL_DHCP",value:1},{label:"ETHERNET_FORM_LABEL_STATIC",value:0}]}},{key:"ip",type:"input",optionsTypes:"ip",templateOptions:{label:"ETHERNET_FORM_LABEL_IP",required:!0},hideExpression:"!!model.enableDhcp"},{key:"netmask",type:"input",optionsTypes:"ip",templateOptions:{label:"ETHERNET_FORM_LABEL_NETMASK",required:!0,pattern:"^(254|252|248|240|224|192|128)\\.0\\.0\\.0|255\\.(254|252|248|240|224|192|128|0)\\.0\\.0|255\\.255\\.(254|252|248|240|224|192|128|0)\\.0|255\\.255\\.255\\.(254|252|248|240|224|192|128|0)",patternValidationMessage:"ETHERNET_NETMASK_ERROR_MSG"},hideExpression:"!!model.enableDhcp"},{key:"gateway",type:"input",optionsTypes:"ip",templateOptions:{label:"ETHERNET_FORM_LABEL_GATEWAY",required:!0},hideExpression:"!!model.enableDhcp"},{key:"dns[0]",type:"input",optionsTypes:"ip",templateOptions:{label:"ETHERNET_FORM_LABEL_DNS1",required:!0},hideExpression:"!!model.enableDhcp"},{key:"dns[1]",type:"input",optionsTypes:"ip",templateOptions:{label:"ETHERNET_FORM_LABEL_DNS2",required:!0},hideExpression:"!!model.enableDhcp"}]}},function(e,t){e.exports={ETHERNET_WINDOW_NAME:"Ethernet",ETHERNET_WINDOW_INFO:"Information",ETHERNET_WINDOW_SETTING:"Settings",ETHERNET_FORM_LABEL_DHCP:"DHCP",ETHERNET_FORM_LABEL_STATIC:"Static IP",ETHERNET_FORM_LABEL_IP:"IP",ETHERNET_FORM_LABEL_NETMASK:"Netmask",ETHERNET_FORM_LABEL_GATEWAY:"Gateway",ETHERNET_FORM_LABEL_DNS1:"DNS 1",ETHERNET_FORM_LABEL_DNS2:"DNS 2",ETHERNET_FORM_SAVE:"Save",ETHERNET_FORM_SAVE_SUCCESS:"Update data successfully.",ETHERNET_INFO_TYPE:"Type",ETHERNET_INFO_IP:"IP",ETHERNET_INFO_NETMASK:"Netmask",ETHERNET_INFO_GATEWAY:"Gateway",ETHERNET_INFO_DNS:"DNS",ETHERNET_NETMASK_ERROR_MSG:"Invalid netmask format"}},function(e,t){e.exports={ETHERNET_WINDOW_NAME:"乙太網路",ETHERNET_WINDOW_INFO:"資訊",ETHERNET_WINDOW_SETTING:"設定",ETHERNET_FORM_LABEL_DHCP:"DHCP",ETHERNET_FORM_LABEL_STATIC:"固定 IP",ETHERNET_FORM_LABEL_IP:"IP",ETHERNET_FORM_LABEL_NETMASK:"網路遮罩",ETHERNET_FORM_LABEL_GATEWAY:"閘道器",ETHERNET_FORM_LABEL_DNS1:"DNS 1",ETHERNET_FORM_LABEL_DNS2:"DNS 2",ETHERNET_FORM_SAVE:"儲存",ETHERNET_FORM_SAVE_SUCCESS:"更新資料成功",ETHERNET_INFO_TYPE:"類型",ETHERNET_INFO_IP:"網路位址",ETHERNET_INFO_NETMASK:"網路遮罩",ETHERNET_INFO_GATEWAY:"閘道器",ETHERNET_INFO_DNS:"網域伺服器",ETHERNET_NETMASK_ERROR_MSG:"網路遮罩格式錯誤"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$translateProvider",function(e){"ngInject";e.translations("en",n(24)),e.translations("zh-tw",n(25))}],e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i),a=n(2),u=r(a),s=["$q","rest","exception","_","pathToRegexp","$filter","logger"],l=n(23),c=function(){function e(){for(var t=this,n=arguments.length,r=Array(n),i=0;n>i;i++)r[i]=arguments[i];switch((0,o["default"])(this,e),e.$inject.forEach(function(e,n){return t[e]=r[n]}),l.get.type){case"collection":this.data=[];break;case"model":this.data={};break;default:this.data=[]}}return(0,u["default"])(e,[{key:"_transform",value:function(e){switch(l.get.type){case"collection":return this._.map(e,function(e,t){return{title:(l.get.titlePrefix||"tab")+t,content:e,formOptions:{},fields:l.fields}});case"model":return{content:e,formOptions:{},fields:l.fields};default:return this._.map(e,function(e,t){return{title:(l.get.titlePrefix||"tab")+t,content:e,formOptions:{},fields:l.fields}})}}},{key:"get",value:function(){var e=this,t=this.pathToRegexp.compile(l.get.url);return this.rest.get(t(),void 0).then(function(t){e.data=e._transform(t.data)})["catch"](function(t){return e.exception.catcher("[EthernetService] Get data error.")(t),e.$q.reject()})}},{key:"update",value:function(e){var t=this,n=this.pathToRegexp.compile(l.put.url),r=void 0!==e.content.id?n({id:e.content.id}):n();return this.rest.put(r,e.content,e.formOptions.files,void 0).then(function(e){return t.logger.success(t.$filter("translate")("ETHERNET_FORM_SAVE_SUCCESS"),e.data),e.data})["catch"](function(e){return t.exception.catcher("[EthernetService] Update data error.")(e),t.$q.reject()})}}]),e}();c.$inject=s,t["default"]=c,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={template:'<sanji-ethernet-form data="vm.data" on-submit="vm.onSave(data)"></sanji-ethernet-form>',controller:"EthernetInfoContainerController",controllerAs:"vm"};t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i),a=n(2),u=r(a),s=["$scope","sanjiWindowService","ethernetService"],l="sanji-ethernet-ui",c=function(){function e(){for(var t=this,n=arguments.length,r=Array(n),i=0;n>i;i++)r[i]=arguments[i];(0,o["default"])(this,e),e.$inject.forEach(function(e,n){return t[e]=r[n]}),this.sanjiWindowMgr=this.sanjiWindowService.get(l),this.data=this.ethernetService.data,this.$scope.$on("sj:window:refresh",this.onRefresh.bind(this))}return(0,u["default"])(e,[{key:"onRefresh",value:function(e,t){var n=this;t.id===l&&(this.sanjiWindowMgr.promise=this.ethernetService.get().then(function(){n.data=n.ethernetService.data}))}},{key:"onSave",value:function(e){this.sanjiWindowMgr.promise=this.ethernetService.update(e)}}]),e}();c.$inject=s,t["default"]=c,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={bindings:{tabs:"<data",submitCallback:"&onSubmit"},templateUrl:"sanji-ethernet-form.tpl.html",controller:"EthernetFormController",controllerAs:"vm"};t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i),a=n(2),u=r(a),s=[],l=function(){function e(){for(var t=this,n=arguments.length,r=Array(n),i=0;n>i;i++)r[i]=arguments[i];(0,o["default"])(this,e),e.$inject.forEach(function(e,n){return t[e]=r[n]})}return(0,u["default"])(e,[{key:"save",value:function(e){this.submitCallback({data:e})}}]),e}();l.$inject=s,t["default"]=l,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(6),u=r(a);n(39);var s=n(29),l=r(s),c=n(31),f=r(c),d=n(28),E=r(d),p=n(30),_=r(p),h=o["default"].module("sanji.ethernet.form",[u["default"]]);h.controller("EthernetFormContainerController",l["default"]),h.controller("EthernetFormController",f["default"]),h.component("sanjiEthernetFormContainer",E["default"]),h.component("sanjiEthernetForm",_["default"]),t["default"]=h=h.name,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={template:'<sanji-ethernet-info data="vm.data"></sanji-ethernet-info>',controller:"EthernetInfoContainerController",controllerAs:"vm"};t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i),a=n(2),u=r(a),s=["$scope","sanjiWindowService","ethernetService"],l="sanji-ethernet-ui",c=function(){function e(){for(var t=this,n=arguments.length,r=Array(n),i=0;n>i;i++)r[i]=arguments[i];(0,o["default"])(this,e),e.$inject.forEach(function(e,n){return t[e]=r[n]}),this.sanjiWindowMgr=this.sanjiWindowService.get(l),this.data=this.ethernetService.data,this.$scope.$on("sj:window:refresh",this.onRefresh.bind(this))}return(0,u["default"])(e,[{key:"$onInit",value:function(){var e=this;this.sanjiWindowMgr.promise=this.ethernetService.get().then(function(){e.data=e.ethernetService.data})}},{key:"onRefresh",value:function(e,t){t.id===l&&this.$onInit()}},{key:"onSave",value:function(e){this.sanjiWindowMgr.promise=this.ethernetService.update(e)}}]),e}();c.$inject=s,t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(6),u=r(a);n(40);var s=n(34),l=r(s),c=n(37),f=r(c),d=n(33),E=r(d),p=n(36),_=r(p),h=o["default"].module("sanji.ethernet.info",[u["default"]]);h.controller("EthernetInfoContainerController",l["default"]),h.controller("EthernetInfoController",f["default"]),h.component("sanjiEthernetInfoContainer",E["default"]),h.component("sanjiEthernetInfo",_["default"]),t["default"]=h=h.name,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={bindings:{tabs:"<data"},templateUrl:"sanji-ethernet-info.tpl.html",controller:"EthernetInfoController",controllerAs:"vm"};t["default"]=n,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=r(i),a=n(2),u=r(a),s=[],l=function(){function e(){for(var t=this,n=arguments.length,r=Array(n),i=0;n>i;i++)r[i]=arguments[i];(0,o["default"])(this,e),e.$inject.forEach(function(e,n){return t[e]=r[n]})}return(0,u["default"])(e,[{key:"save",value:function(e){this.submitCallback({data:e})}}]),e}();l.$inject=s,t["default"]=l,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={template:'<sanji-window window-id="sanji-ethernet-ui"\n              window-name="{{\'ETHERNET_WINDOW_NAME\' | translate}}" show-loading-btn>\n              <sanji-window-state default-state\n                state-name="sanji-info"\n                link-name="{{\'ETHERNET_WINDOW_INFO\' | translate}}"\n                icon="info">\n                <sanji-ethernet-info-container></sanji-ethernet-info-container>\n              </sanji-window-state>\n              <sanji-window-state\n                state-name="sanji-form"\n                link-name="{{\'ETHERNET_WINDOW_SETTING\' | translate}}"\n                icon="settings">\n                <sanji-ethernet-form-container></sanji-ethernet-form-container>\n              </sanji-window-state>\n            </sanji-window>'};t["default"]=n,e.exports=t["default"]},function(e,t){var n,r=window.angular;try{n=r.module(["ng"])}catch(i){n=r.module("ng",[])}var o='<md-tabs md-dynamic-height md-border-bottom>\n    <md-tab ng-repeat="tab in vm.tabs track by $index" label="{{::tab.title}}">\n      <form ng-submit="vm.save(tab)" role="form" layout="column" layout-padding novalidate>\n        <formly-form model="tab.content"\n        options="tab.formOptions" fields="tab.fields" form="tab.form">\n          <div layout layout-align="end center">\n            <md-button type="submit" class="md-raised md-primary"\n            aria-label="sumit"\n            ng-disabled="tab.form.$invalid">\n              <sapn translate="ETHERNET_FORM_SAVE"></span>\n            </md-button>\n          </div>\n        </formly-form>\n      </form>\n    </md-tab>\n  </md-tabs>';n.run(["$templateCache",function(e){e.put("sanji-ethernet-form.tpl.html",o)}]),e.exports=o},function(e,t){var n,r=window.angular;try{n=r.module(["ng"])}catch(i){n=r.module("ng",[])}var o='<md-tabs md-dynamic-height md-border-bottom>\n    <md-tab ng-repeat="tab in vm.tabs track by $index" label="{{::tab.title}}">\n      <md-list>\n        <md-list-item>\n          <p class="md-body-2" translate="ETHERNET_INFO_TYPE"></p>\n          <span ng-bind="tab.content.wan ? \'WAN\' : \'LAN\'"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="ETHERNET_INFO_IP"></p>\n          <span ng-bind="tab.content.ip"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="ETHERNET_INFO_NETMASK"></p>\n          <span ng-bind="tab.content.netmask"></span>\n        </md-list-item>\n        <md-list-item>\n          <p class="md-body-2" translate="ETHERNET_INFO_GATEWAY"></p>\n          <span ng-bind="tab.content.gateway || \'\'"></span>\n        </md-list-item>\n        <md-list-item ng-repeat="dns in tab.content.dns track by $index">\n          <p class="md-body-2">{{\'ETHERNET_INFO_DNS\' | translate}} {{$index + 1}}</p>\n          <span ng-bind="dns || \'\'"></span>\n        </md-list-item>\n      </md-list>\n    </md-tab>\n  </md-tabs>';n.run(["$templateCache",function(e){e.put("sanji-ethernet-info.tpl.html",o)}]),e.exports=o}])});
//# sourceMappingURL=sanji-ethernet-ui.js.map