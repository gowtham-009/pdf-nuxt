/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[5],{565:function(xa,ta,h){h.r(ta);var ra=h(0);xa=h(56);var na=h(206),oa=h(480),ia=h(262),ka=window;h=function(){function ha(y,ba){this.v6=function(r){r=r.split(".");return r[r.length-1].match(/(jpg|jpeg|png|gif)$/i)};ba=ba||{};this.url=y;this.filename=ba.filename||y;this.Hg=ba.customHeaders;this.WHa=!!ba.useDownloader;this.withCredentials=!!ba.withCredentials}ha.prototype.yL=function(y){this.Hg=y};ha.prototype.getCustomHeaders=function(){return this.Hg};
ha.prototype.getFileData=function(y){var ba=this,r=this,n=new XMLHttpRequest,f=0===this.url.indexOf("blob:")?"blob":"arraybuffer";n.open("GET",this.url,!0);n.withCredentials=this.withCredentials;n.responseType=f;this.Hg&&Object.keys(this.Hg).forEach(function(a){n.setRequestHeader(a,ba.Hg[a])});var b=/^https?:/i.test(this.url);n.addEventListener("load",function(a){return Object(ra.b)(this,void 0,void 0,function(){var e,w,ca,z,aa,x;return Object(ra.d)(this,function(fa){switch(fa.label){case 0:if(200!==
this.status&&(b||0!==this.status))return[3,10];r.trigger(ha.Events.DOCUMENT_LOADING_PROGRESS,[a.loaded,a.loaded]);if("blob"!==this.responseType)return[3,4];e=this.response;return r.v6(r.filename)?[4,Object(ia.b)(e)]:[3,2];case 1:return w=fa.ba(),r.fileSize=w.byteLength,y(new Uint8Array(w)),[3,3];case 2:ca=new FileReader,ca.onload=function(ea){ea=new Uint8Array(ea.target.result);r.fileSize=ea.length;y(ea)},ca.readAsArrayBuffer(e),fa.label=3;case 3:return[3,9];case 4:fa.Gd.push([4,8,,9]);z=new Uint8Array(this.response);
if(!r.v6(r.filename))return[3,6];e=new Blob([z.buffer]);return[4,Object(ia.b)(e)];case 5:return w=fa.ba(),r.fileSize=w.byteLength,y(new Uint8Array(w)),[3,7];case 6:r.fileSize=z.length,y(z),fa.label=7;case 7:return[3,9];case 8:return fa.ba(),r.trigger(ha.Events.ERROR,["pdfLoad","Out of memory"]),[3,9];case 9:return[3,11];case 10:aa=a.currentTarget,x=Object(na.b)(aa),r.trigger(ha.Events.ERROR,["pdfLoad",this.status+" "+aa.statusText,x]),fa.label=11;case 11:return r.UE=null,[2]}})})},!1);n.onprogress=
function(a){r.trigger(ha.Events.DOCUMENT_LOADING_PROGRESS,[a.loaded,0<a.total?a.total:0])};n.addEventListener("error",function(){r.trigger(ha.Events.ERROR,["pdfLoad","Network failure"]);r.UE=null},!1);n.send();this.UE=n};ha.prototype.getFile=function(){var y=this;return new Promise(function(ba){ka.da.isJSWorker&&ba(y.url);if(y.WHa){var r=Object(ra.a)({url:y.url},y.Hg?{customHeaders:y.Hg}:{});ba(r)}ba(null)})};ha.prototype.abort=function(){this.UE&&(this.UE.abort(),this.UE=null)};ha.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress",
ERROR:"error"};return ha}();Object(xa.a)(h);Object(oa.a)(h);Object(oa.b)(h);ta["default"]=h}}]);}).call(this || window)
