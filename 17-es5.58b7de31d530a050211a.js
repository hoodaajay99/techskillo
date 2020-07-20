function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"ct+p":function(t,e,o){"use strict";o.r(e),o.d(e,"HomePageModule",(function(){return M}));var i,n,a,s=o("ofXK"),r=o("3Pt+"),l=o("TEn/"),c=o("tyNb"),d=(o("mrSG"),o("fXoL")),h=["ins"],b=new d.q("AdsenseConfig"),g=((i=function(){function t(e,o){_classCallCheck(this,t),this.config=e,this.platform=o,this.adRegion="page-"+Math.floor(1e4*Math.random())+1}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this.config;function e(e,o){return t&&void 0!==e?e:o}this.adClient=e(this.adClient,t.adClient),this.adSlot=e(this.adSlot,t.adSlot),this.adFormat=e(this.adFormat,t.adFormat||"auto"),this.display=e(this.display,t.display||"block"),this.width=e(this.width,t.width),this.height=e(this.height,t.height),this.layout=e(this.layout,t.layout),this.layoutKey=e(this.layoutKey,t.layoutKey),this.pageLevelAds=e(this.pageLevelAds,t.pageLevelAds),this.adtest=e(this.adtest,t.adtest),this.fullWidthResponsive=e(this.fullWidthResponsive,t.fullWidthResponsive)}},{key:"ngOnDestroy",value:function(){var t=this.ins.nativeElement.querySelector("iframe");t&&t.contentWindow&&(t.src="about:blank",t.remove())}},{key:"ngAfterViewInit",value:function(){Object(s.l)(this.platform)&&this.push()}},{key:"push",value:function(){var t={};if(this.pageLevelAds&&(t.google_ad_client=this.adClient,t.enable_page_level_ads=!0),window)try{(window.adsbygoogle=window.adsbygoogle||[]).push(t)}catch(e){}}}]),t}()).\u0275fac=function(t){return new(t||i)(d.Kb(b),d.Kb(d.B))},i.\u0275cmp=d.Eb({type:i,selectors:[["ng2-adsense"],["ng-adsense"]],viewQuery:function(t,e){var o;1&t&&d.ec(h,!0,d.l),2&t&&d.bc(o=d.Vb())&&(e.ins=o.first)},inputs:{adRegion:"adRegion",adClient:"adClient",adSlot:"adSlot",adFormat:"adFormat",display:"display",width:"width",height:"height",layout:"layout",layoutKey:"layoutKey",pageLevelAds:"pageLevelAds",adtest:"adtest",fullWidthResponsive:"fullWidthResponsive",className:"className"},decls:2,vars:17,consts:[["ins",""]],template:function(t,e){1&t&&d.Lb(0,"ins",null,0),2&t&&(d.Bb("adsbygoogle ",e.className,""),d.fc("display",e.display)("width",e.width,"px")("height",e.height,"px"),d.Ab("data-ad-client",e.adClient)("data-ad-slot",e.adSlot)("data-ad-format",e.adFormat)("data-ad-region",e.adRegion)("data-layout",e.layout)("data-adtest",e.adtest)("data-layout-key",e.layoutKey)("data-full-width-responsive",e.fullWidthResponsive))},encapsulation:2,changeDetection:0}),i),u=((a=n=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"forRoot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:n,providers:[{provide:b,useValue:t}]}}}]),t}()).\u0275mod=d.Ib({type:a}),a.\u0275inj=d.Hb({factory:function(t){return new(t||a)},imports:[[s.b]]}),a),p=o("hzf6");function m(t,e){if(1&t&&(d.Nb(0,"ion-col",23),d.Nb(1,"ion-card",24),d.Nb(2,"div",25),d.Nb(3,"ion-avatar",26),d.Lb(4,"img",27),d.Mb(),d.Nb(5,"ion-card-header",28),d.Nb(6,"ion-card-title"),d.hc(7),d.Mb(),d.Mb(),d.Nb(8,"ion-card-content",29),d.hc(9),d.Mb(),d.Nb(10,"ion-button",30),d.Lb(11,"ion-icon",13),d.hc(12),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&t){var o=e.$implicit;d.zb(4),d.Zb("src",o.imgsrc,d.cc),d.zb(3),d.ic(" ",o.title," "),d.zb(2),d.ic(" ",o.shortDesc," "),d.zb(3),d.ic(" ",o.buttonText," ")}}var f,y,v=((f=function t(e){_classCallCheck(this,t),this.platform=e,this.cardsList=[{imgsrc:"assets/imgs/card-online.png",title:"Online Courses",shortDesc:"Library of online courses, comes with open source content",link:"https://cprog.techskillo.com",buttonText:"Try Now"},{imgsrc:"assets/imgs/card-video.png",title:"Video Courses",shortDesc:"Learn from library of engaging video build with audio video tools",link:"https://cprog.techskillo.com",buttonText:"Try Now"},{imgsrc:"assets/imgs/card-boot.png",title:"Offline Bootcamps",shortDesc:"Learn from our open source course content, practice at your own pace ",link:"https://ldd.techskillo.com",buttonText:"Try Now"},{imgsrc:"assets/imgs/card-code.png",title:"Coding Challenges",shortDesc:"Test your skills with out state of the art Coding Challenges",link:"https://ldd.techskillo.com",buttonText:"Try Now"}]}).\u0275fac=function(t){return new(t||f)(d.Kb(l.A))},f.\u0275cmp=d.Eb({type:f,selectors:[["app-home"]],decls:43,vars:6,consts:[["color","primary"],["slot","start"],[1,"font-large-bold"],["slot","primary"],[3,"adClient","adSlot","display","width","height"],[1,"home-section-1"],[1,"ion-margin"],["size","12","size-md","6","size-lg","6","size-xl","6",1,"home-section-1-1"],[1,"vertical-center"],[1,"home-section-1-line1"],[1,"home-section-1-line2"],[1,"home-section-1-line3"],["size","large","fill","outline","color","light",1,"ion-margin-top"],["slot","end","name","arrow-round-forward"],[1,"home-section-1-1"],["src","assets/imgs/img-main-page.png","alt","Tech Skillo",1,"image1"],[1,"home-about"],[1,"home-about-line1-div"],[1,"home-about-line1-span"],[1,"home-about-line2"],[1,"home-about-line3"],[1,"home-cards"],["size","12","size-md","6","size-lg","6","size-xl","3",4,"ngFor","ngForOf"],["size","12","size-md","6","size-lg","6","size-xl","3"],["color","light"],["align","center",1,"ion-margin"],[1,"home-card-avatar"],[3,"src"],[1,"home-card-header"],[1,"home-card-content"],["shape","round","fill","outline","size","large"]],template:function(t,e){1&t&&(d.Nb(0,"ion-header"),d.Nb(1,"ion-toolbar",0),d.Nb(2,"ion-buttons",1),d.Lb(3,"ion-menu-button"),d.Mb(),d.Nb(4,"ion-title"),d.Nb(5,"span",2),d.hc(6," Tech Skillo "),d.Mb(),d.Mb(),d.Nb(7,"ion-buttons",3),d.Nb(8,"ion-button"),d.hc(9," About "),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(10,"ion-content"),d.Lb(11,"ng-adsense",4),d.Nb(12,"div",5),d.Nb(13,"ion-grid"),d.Nb(14,"ion-row",6),d.Nb(15,"ion-col",7),d.Nb(16,"div",8),d.Nb(17,"div",9),d.hc(18,"Tech Skillo"),d.Mb(),d.Nb(19,"div",10),d.hc(20,"Home to Learn Programming!"),d.Mb(),d.Nb(21,"div",11),d.hc(22," Tech Skillo is a platform to learn programming with high quality tutorials, courses and videos. "),d.Mb(),d.Nb(23,"ion-button",12),d.Lb(24,"ion-icon",13),d.hc(25," Visit Courses "),d.Mb(),d.Mb(),d.Mb(),d.Nb(26,"ion-col",14),d.Nb(27,"div",8),d.Nb(28,"div",6),d.Lb(29,"img",15),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(30,"div",16),d.Nb(31,"div",17),d.Nb(32,"span",18),d.hc(33," ABOUT TECHSKILLO "),d.Mb(),d.Mb(),d.Nb(34,"div",19),d.hc(35," A place to learn latest programming with high quality tutorials, courses and videos. "),d.Mb(),d.Nb(36,"div",20),d.hc(37," Courses are designed in a way that they are easy to follow, latest in market, provide you support for questions and can earn you a certificate. "),d.Mb(),d.Mb(),d.Nb(38,"div",21),d.Nb(39,"ion-grid"),d.Nb(40,"ion-row"),d.gc(41,m,13,4,"ion-col",22),d.Mb(),d.Mb(),d.Mb(),d.Lb(42,"app-my-footer"),d.Mb()),2&t&&(d.zb(11),d.Yb("adClient","ca-pub-1626897974362122")("adSlot",4913979477)("display","inline-block")("width",320)("height",108),d.zb(30),d.Yb("ngForOf",e.cardsList))},directives:[l.l,l.x,l.d,l.r,l.w,l.c,l.j,g,l.k,l.u,l.i,l.m,s.h,p.a,l.e,l.b,l.g,l.h,l.f],styles:[".home-section-1[_ngcontent-%COMP%]{background:linear-gradient(120deg,var(--ion-color-primary) 50%,var(--ion-color-secondary) 0)}.home-section-1[_ngcontent-%COMP%], .home-section-1-1[_ngcontent-%COMP%]{min-height:460px}.home-section-1-line1[_ngcontent-%COMP%]{font-size:30px;font-weight:900}.home-section-1-line2[_ngcontent-%COMP%]{margin:15px 0 0;font-size:25px;font-weight:700}.home-section-1-line3[_ngcontent-%COMP%]{margin:15px 0;font-size:18px;font-weight:500}.vertical-center[_ngcontent-%COMP%]{margin:0;position:absolute;top:50%;transform:translateY(-50%);color:#fff}.image1[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover}.home-about[_ngcontent-%COMP%]{text-align:center;margin:8%}.home-about-line1-div[_ngcontent-%COMP%]{margin:5%}.home-about-line1-span[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(to bottom right,var(--ion-color-secondary),var(--ion-color-primary));font-size:20px;font-weight:900;padding:10px;border:3px solid var(--ion-color-secondary);border-radius:20px}.home-about-line2[_ngcontent-%COMP%]{margin:5% 10%;font-size:22px;font-weight:600}.home-about-line3[_ngcontent-%COMP%]{margin:5% 10%;font-size:20px;font-weight:500}.home-cards[_ngcontent-%COMP%]{background:linear-gradient(to bottom right,var(--ion-color-secondary),var(--ion-color-primary));margin:20px 0;padding:20px 0}.home-card-avatar[_ngcontent-%COMP%]{height:100px;width:100px;border:8px solid var(--ion-color-secondary)}.home-card-header[_ngcontent-%COMP%]{height:80px}.home-card-content[_ngcontent-%COMP%]{min-height:100px}"]}),f),w=o("j1ZV"),M=((y=function t(){_classCallCheck(this,t)}).\u0275mod=d.Ib({type:y}),y.\u0275inj=d.Hb({factory:function(t){return new(t||y)},imports:[[s.b,r.a,l.y,w.a,u.forRoot({adClient:"ca-pub-1626897974362122",adSlot:4913979477}),c.i.forChild([{path:"",component:v}])]]}),y)}}]);