parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cHJE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={"":["<em>","</em>"],_:["<strong>","</strong>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function r(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function n(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a){var c,o,l,s,g,p=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^```(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:\!\[([^\]]*?)\]\(([^\)]+?)\))|(\[)|(\](?:\(([^\)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(\-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,3})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*])/gm,u=[],i="",m=0,d={};function f(r){var n=e[r.replace(/\*/g,"_")[1]||""],t=u[u.length-1]==r;return n?n[1]?(u[t?"pop":"push"](r),n[0|t]):n[0]:r}function h(){for(var e="";u.length;)e+=f(u[u.length-1]);return e}for(a=a.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(e,r,n){return d[r.toLowerCase()]=n,""}).replace(/^\n+|\n+$/g,"");l=p.exec(a);)o=a.substring(m,l.index),m=p.lastIndex,c=l[0],o.match(/[^\\](\\\\)*\\$/)||(l[3]||l[4]?c='<pre class="code '+(l[4]?"poetry":l[2].toLowerCase())+'">'+r(n(l[3]||l[4]).replace(/^\n+|\n+$/g,""))+"</pre>":l[6]?((g=l[6]).match(/\./)&&(l[5]=l[5].replace(/^\d+/gm,"")),s=t(r(l[5].replace(/^\s*[>*+.-]/gm,""))),">"===g?g="blockquote":(g=g.match(/\./)?"ol":"ul",s=s.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),c="<"+g+">"+s+"</"+g+">"):l[8]?c='<img src="'+n(l[8])+'" alt="'+n(l[7])+'">':l[10]?(i=i.replace("<a>",'<a href="'+n(l[11]||d[o.toLowerCase()])+'">'),c=h()+"</a>"):l[9]?c="<a>":l[12]||l[14]?c="<"+(g="h"+(l[14]?l[14].length:"="===l[13][0]?1:2))+">"+t(l[12]||l[15])+"</"+g+">":l[16]?c="<code>"+n(l[16])+"</code>":(l[17]||l[1])&&(c=f(l[17]||"--"))),i+=o,i+=c;return(i+a.substring(m)+h()).trim()}var a=t;exports.default=a;
},{}],"eJ+/":[function(require,module,exports) {
module.exports="/awesome-mix-vol1.2adf4156.png";
},{}],"OD+P":[function(require,module,exports) {
module.exports="/awesome-mix-vol2.016eadf3.png";
},{}],"Bn8t":[function(require,module,exports) {
module.exports="/battery-api.eca38a4f.png";
},{}],"6uKx":[function(require,module,exports) {
module.exports="/cheese-codevember.a6c1aa2c.png";
},{}],"P7Q3":[function(require,module,exports) {
module.exports="/codepen-codevember.8d84b93f.png";
},{}],"IjjR":[function(require,module,exports) {
module.exports="/css-grid-cards.9323cccd.png";
},{}],"aaJU":[function(require,module,exports) {
module.exports="/death-star-256x256.d4dab5ff.png";
},{}],"S9OG":[function(require,module,exports) {
module.exports="/emoji-fight.689391ca.png";
},{}],"JcVp":[function(require,module,exports) {
module.exports="/galaxy-codevember.b0052daa.png";
},{}],"Inhf":[function(require,module,exports) {
module.exports="/dragon-ball-z.f26f406e.png";
},{}],"IdWP":[function(require,module,exports) {
module.exports="/gameboy.950f0722.png";
},{}],"YIb+":[function(require,module,exports) {
module.exports="/html5-periodic-table.7b8d297d.png";
},{}],"1Eai":[function(require,module,exports) {
module.exports="/gorillas.d88eef81.png";
},{}],"0kxv":[function(require,module,exports) {
module.exports="/infinity-codevember.4153ee34.png";
},{}],"n02/":[function(require,module,exports) {
module.exports="/knight-rider-kitt-jsday.c963d9b6.png";
},{}],"1gu4":[function(require,module,exports) {
module.exports="/javagotchi.088c5732.png";
},{}],"G/38":[function(require,module,exports) {
module.exports="/monkey-island.fd048ee3.png";
},{}],"wZsA":[function(require,module,exports) {
module.exports="/microsoft-defrag.74b72cb1.png";
},{}],"eK5F":[function(require,module,exports) {
module.exports="/mario-bros-jsday.651b02a2.png";
},{}],"zu45":[function(require,module,exports) {
module.exports="/mountain-codevember.b80846bd.png";
},{}],"RsZs":[function(require,module,exports) {
module.exports="/scandisk.224f289c.png";
},{}],"TGNz":[function(require,module,exports) {
module.exports="/rock-codevember.4d23ee12.png";
},{}],"+Q3F":[function(require,module,exports) {
module.exports="/star-wars-vhs-jsday.36ac8960.png";
},{}],"LMX1":[function(require,module,exports) {
module.exports="/regex-people.a2e8900a.png";
},{}],"5PSW":[function(require,module,exports) {
module.exports="/pink-floyd-jsday.59851e6d.png";
},{}],"hc6R":[function(require,module,exports) {
module.exports="/stargate.c068fdad.png";
},{}],"v8y5":[function(require,module,exports) {
module.exports="/sky-codevember.460591ba.png";
},{}],"PRwG":[function(require,module,exports) {
module.exports="/super-mario-kart-codevember.3ffbda02.png";
},{}],"y9Ia":[function(require,module,exports) {
module.exports="/tree-folder.e52c6c62.png";
},{}],"BPQc":[function(require,module,exports) {
module.exports="/tron-codevember.e2100de1.png";
},{}],"UeHW":[function(require,module,exports) {
module.exports="/wheatley - copia.6f8a7a8b.png";
},{}],"UULh":[function(require,module,exports) {
module.exports="/turret-song-portal-codevember.86ca39f6.png";
},{}],"maB8":[function(require,module,exports) {
module.exports="/wheatley.1801bd8b.png";
},{}],"HBCd":[function(require,module,exports) {
module.exports={"awesome-mix-vol1":require("./awesome-mix-vol1.png"),"awesome-mix-vol2":require("./awesome-mix-vol2.png"),"battery-api":require("./battery-api.png"),"cheese-codevember":require("./cheese-codevember.png"),"codepen-codevember":require("./codepen-codevember.png"),"css-grid-cards":require("./css-grid-cards.png"),"death-star-256x256":require("./death-star-256x256.png"),"emoji-fight":require("./emoji-fight.png"),"galaxy-codevember":require("./galaxy-codevember.png"),"dragon-ball-z":require("./dragon-ball-z.png"),gameboy:require("./gameboy.png"),"html5-periodic-table":require("./html5-periodic-table.png"),gorillas:require("./gorillas.png"),"infinity-codevember":require("./infinity-codevember.png"),"knight-rider-kitt-jsday":require("./knight-rider-kitt-jsday.png"),javagotchi:require("./javagotchi.png"),"monkey-island":require("./monkey-island.png"),"microsoft-defrag":require("./microsoft-defrag.png"),"mario-bros-jsday":require("./mario-bros-jsday.png"),"mountain-codevember":require("./mountain-codevember.png"),scandisk:require("./scandisk.png"),"rock-codevember":require("./rock-codevember.png"),"star-wars-vhs-jsday":require("./star-wars-vhs-jsday.png"),"regex-people":require("./regex-people.png"),"pink-floyd-jsday":require("./pink-floyd-jsday.png"),stargate:require("./stargate.png"),"sky-codevember":require("./sky-codevember.png"),"super-mario-kart-codevember":require("./super-mario-kart-codevember.png"),"tree-folder":require("./tree-folder.png"),"tron-codevember":require("./tron-codevember.png"),"wheatley - copia":require("./wheatley - copia.png"),"turret-song-portal-codevember":require("./turret-song-portal-codevember.png"),wheatley:require("./wheatley.png")};
},{"./awesome-mix-vol1.png":"eJ+/","./awesome-mix-vol2.png":"OD+P","./battery-api.png":"Bn8t","./cheese-codevember.png":"6uKx","./codepen-codevember.png":"P7Q3","./css-grid-cards.png":"IjjR","./death-star-256x256.png":"aaJU","./emoji-fight.png":"S9OG","./galaxy-codevember.png":"JcVp","./dragon-ball-z.png":"Inhf","./gameboy.png":"IdWP","./html5-periodic-table.png":"YIb+","./gorillas.png":"1Eai","./infinity-codevember.png":"0kxv","./knight-rider-kitt-jsday.png":"n02/","./javagotchi.png":"1gu4","./monkey-island.png":"G/38","./microsoft-defrag.png":"wZsA","./mario-bros-jsday.png":"eK5F","./mountain-codevember.png":"zu45","./scandisk.png":"RsZs","./rock-codevember.png":"TGNz","./star-wars-vhs-jsday.png":"+Q3F","./regex-people.png":"LMX1","./pink-floyd-jsday.png":"5PSW","./stargate.png":"hc6R","./sky-codevember.png":"v8y5","./super-mario-kart-codevember.png":"PRwG","./tree-folder.png":"y9Ia","./tron-codevember.png":"BPQc","./wheatley - copia.png":"UeHW","./turret-song-portal-codevember.png":"UULh","./wheatley.png":"maB8"}],"QTDy":[function(require,module,exports) {
module.exports=[{title:"Monkey Island animation",description:"*Guybrush ThreepWood* walking from *Monkey Island* game scene. Uses `CSS animations`, `steps()` and `HTML5 audio`.",image:"monkey-island.png",links:[{Codepen:"https://codepen.io/manz/pen/wBZvoE"},{Tutorial:"https://www.emezeta.com/articulos/animar-personajes-con-animaciones-css"}]},{title:"Awesome Mix Vol.1 Cassette",description:'Hooked on a Feeling? Audio Cassette *"Awesome Mix Vol. 1"* with only CSS (without images) from *Guardians of the Galaxy* movie.',image:"awesome-mix-vol1.png",links:[{Codelapse:"https://twitter.com/Manz/status/701110430593392641"},{Codepen:"https://codepen.io/manz/pen/VeJwOr"}]},{title:"HTML5 Periodic Table",description:"A *HTML5 elements periodic table* group by type (metadata, text tags, multimedia, forms, etc...) and link to more info (spanish). Created with `VueJS`.",image:"html5-periodic-table.png",links:[{Codepen:"https://codepen.io/manz/full/maVXvv"},{Twitter:"https://twitter.com/Manz/status/1096374406983626752"}]},{title:"Stargate",description:"*Stargate Simulator* with HTML/CSS/JS, `SVG` and `HTML5 Audio`. Press some *chevrons* and fail call (timeout: 20sec) and press *9 chevrons* and call to other galaxy!",image:"stargate.png",links:[{Codepen:"https://codepen.io/manz/full/zoREJL"},{Twitter:"https://twitter.com/Manz/status/857227020111155200"}]},{title:"Battery API",description:"A visual *battery* with current percent from used device. Design with only CSS. Uses `CSS Custom Properties`, `CSS animations`, `Font Awesome` and `Javascript Battery API`.",image:"battery-api.png",links:[{Codepen:"https://codepen.io/manz/pen/wbWqvx"}]},{title:"Dragon Ball Z",description:"Small interactive *Goku* demo from *Dragon Ball Z* for control keyboard events. Uses `HTML5 audio`, `keyboard events`, `CSS sprites` & `classList`. This example run better in `canvas` Javascript. Only demo purposes.",image:"dragon-ball-z.png",links:[{Codepen:"https://codepen.io/manz/pen/RpNyER"}]},{title:"Galaxy",description:"A *pixel* Death Star surfing into a far, far `canvas` star space away. Uses `HTML5 audio`, `canvas` and a pixel image created with `Piskel`.",image:"galaxy-codevember.png",links:[{Codepen:"https://codepen.io/manz/pen/KypYmz"},{Twitter:"https://twitter.com/Manz/status/925829802975776769"}]},{title:"Rock",description:"A *pixel* rock playing music. Uses `CSS animations` and `Howler`. Images created with `Piskel`. *Du Hast!!*",image:"rock-codevember.png",links:[{Codepen:"https://codepen.io/manz/pen/LOzVrM"},{Twitter:"https://twitter.com/Manz/status/930895667593084928"},{Codevember:"https://github.com/ManzDev/codevember2017"}]},{title:"Mountain",description:"*Day* and *Night* on same mountain without Javascript. Uses `CSS animation` and `HTML5 audio`.",image:"mountain-codevember.png",links:[{Codepen:"https://codepen.io/manz/pen/MOBVod"},{Twitter:"https://twitter.com/Manz/status/934879395923349505"},{Codevember:"https://github.com/ManzDev/codevember2017"}]},{title:"Tree (Folder)",description:"A *tree* (folder) dancing on screen with melodic music. Uses `HTML5 audio` and `Javascript`. Try point and click folders!",image:"tree-folder.png",links:[{Codepen:"https://codepen.io/manz/pen/bYEvoL"},{Twitter:"https://twitter.com/Manz/status/926490177396240385"},{Codevember:"https://github.com/ManzDev/codevember2017"}]},{title:"Tron",description:"A *Tron* movie `canvas` for cycle bike animation. Uses `Howler`, `CSS perspective` over Javascript `canvas`.",image:"tron-codevember.png",links:[{Codepen:"https://codepen.io/manz/pen/NwjPJd"},{Twitter:"https://twitter.com/Manz/status/929494229990232065"},{Codevember:"https://github.com/ManzDev/codevember2017"}]},{title:"Cheese",description:"A delicious piece of *cheese* with mice around. Uses `HTML5 audio`, `CSS animations` and `Javascript` for mouses and ending.",image:"cheese-codevember.png",links:[{Codepen:"https://codepen.io/manz/pen/jawjgo"},{Twitter:"https://twitter.com/Manz/status/930511944175538176"},{Codevember:"https://github.com/ManzDev/codevember2017"}]},{title:"A Codepen in a Codepen",description:"A *Codepen* guy dancing with *Toby Fox's Undertale* music. Look mom! Without Javascript!",image:"codepen-codevember.png",links:[{Codepen:"https://codepen.io/manz/pen/jxGEmw"},{Twitter:"https://twitter.com/Manz/status/993831030359580672"},{Tutorial:"https://www.emezeta.com/articulos/tutorial-css-como-crear-un-objeto-que-baile"},{Codevember:"https://github.com/ManzDev/codevember2017"}]},{title:"Sky... Moon?",description:"When the night comes... Moon appears? A mysterious demo that use `media queries` for *1:1* scene, `Howler` and `SVG`.",image:"sky-codevember.png",links:[{Codepen:"https://codepen.io/manz/pen/qQNdNv"},{Twitter:"https://twitter.com/Manz/status/1060860535565152256"},{Codevember:"https://github.com/ManzDev/codevember2017"}]},{title:"Knight Rider (Kitt)",description:"*Hi, Michael. Press Pursuit to activate!* A **Knight Rider** panel demo, with talk simulation. Uses `CSS Grid` and `Howler`.",image:"knight-rider-kitt-jsday.png",links:[{Codepen:"https://codepen.io/manz/pen/wQgRYE"},{Twitter:"https://twitter.com/Manz/status/1062433291071115268"}]},{title:"Emoji Fight",description:"Emoji fight on boxing ring. Uses `Unicode emojis`, `CSS Animations` and `Howler` for audio.",image:"emoji-fight.png",links:[{Codepen:"https://codepen.io/manz/pen/vWRZGa"},{Twitter:"https://twitter.com/Manz/status/933067890202480641"},{Codevember:"https://github.com/ManzDev/codevember2017"}]},{title:"Super Mario Bros Cartridge",description:"A *Super Mario Bros.* NES cartridge. Created with images, and layout composited with only CSS, using `transform`, `flexbox` and `position`.",image:"mario-bros-jsday.png",links:[{Codepen:"https://codepen.io/manz/pen/RqKvMq"},{Twitter:"https://twitter.com/Manz/status/1062441256968691714"}]},{title:"Pink Floyd",description:"*Time* from *Pink Floyd*. Design created with only CSS and `SVG` for triangle. Uses `Howler` from music and `PostCSS` for some plugins.",image:"pink-floyd-jsday.png",links:[{Codepen:"https://codepen.io/manz/pen/GwrYLb"},{Twitter:"https://twitter.com/Manz/status/1062419011223384064"}]},{title:"Opera turret song (Portal 2 Game)",description:"A ending scene from *Portal 2 Game* known as *Opera Turret Song*. Uses `SVG` for turrets, `HTML5 audio` and `CSS animations`.",image:"turret-song-portal-codevember.png",links:[{Codepen:"https://codepen.io/manz/pen/MOXWZy"},{Twitter:"https://twitter.com/Manz/status/978395358278557697"},{Codevember:"https://github.com/ManzDev/codevember2017"}]},{title:"Super Mario Kart",description:"A ending demo for *Codevember 2017*. A ending race from *Super Mario Kart* game from *Super Nintendo*. Includes three best demos created on Codevember.",image:"super-mario-kart-codevember.png",links:[{Codepen:"https://codepen.io/manz/pen/KyBWvV"},{Twitter:"https://twitter.com/Manz/status/936367152852013056"},{Codevember:"https://github.com/ManzDev/codevember2017"}]},{title:"Regex People",description:"Simple game for learning *regular expressions* as HTML `pattern` validation. Select people dancing with a *RegExp*!",image:"regex-people.png",links:[{Game:"https://manzdev.github.io/regex-people/"}]},{title:"Infinity",description:"A Guru Josh demo with `SVG`, `CSS filters` and `CSS animation`. Uses `Howler` for audio.",image:"infinity-codevember.png",links:[{Codepen:"https://codepen.io/manz/pen/oQbWWj"},{Twitter:"https://twitter.com/Manz/status/1060249263425359873"}]},{title:"Star Wars VHS",description:"A *VHS* cassette simulator with *Star Wars* movie. Uses `Howler`, `canvas` and `CSS animations`.",image:"star-wars-vhs-jsday.png",links:[{Codepen:"https://codepen.io/manz/pen/XypOdj"},{Twitter:"https://twitter.com/Manz/status/1062645956988923906"}]},{title:"Javagotchi",description:"A small & simple *Javascript Tamagotchi*. Design created with only CSS (without images), except JS baby. Uses `flexbox`, `shadows` and `CSS animations`.",image:"javagotchi.png",links:[{Demo:"https://manzdev.github.io/javagotchi/"}]},{title:"CSS Grid Cards",description:"A deck of cards design with only CSS. Uses `flexbox`, `CSS Grid` and `position` techniques. Optional Javascript for move cards with mouse wheel.",image:"css-grid-cards.png",links:[{Codepen:"https://codepen.io/manz/pen/dKWBPo"},{Twitter:"https://twitter.com/Manz/status/1020039541464403971"},{SpeakerDeck:"https://speakerdeck.com/manz/css-grid-cards"}]},{title:"Nintendo GameBoy",description:"A *Nintendo GameBoy* console created with only CSS.<br>Can you turn on GameBoy? Uses `HTML5 audio`, `CSS animations`, `Flexbox` and `CSS Grid`.",image:"gameboy.png",links:[{Codepen:"https://codepen.io/manz/pen/XQYoKd"},{Twitter:"https://twitter.com/Manz/status/1120050634596728833"}]},{title:"Microsoft ScanDisk",description:"A old-school *Microsoft ScanDisk* simulation for check your hard disk. Uses `Grid CSS` and ES6 Javascript for *surface scan*.",image:"scandisk.png",links:[{Codepen:"https://codepen.io/manz/pen/KLPEby"},{Twitter:"https://twitter.com/Manz/status/1124749875315380224"}]},{title:"Microsoft Defrag",description:"A old-school *Microsoft Defrag* (Norton Speed Disk) simulation for speed your hard disk. Uses `Flex`, `CSS Grid` and ES6 Javascript for *surface scan*.",image:"microsoft-defrag.png",links:[{Codepen:"https://codepen.io/manz/pen/MdErww"},{Twitter:"https://twitter.com/Manz/status/1130789484726038529"}]},{title:"Microsoft GORILLAS.BAS",description:"Visual demo of GORILLAS.BAS, a game from Microsoft QBASIC from MSDOS written by IBM. No uses images neither `<canvas>`. Uses `WebComponents`, `Flex`, `CSS Animations` and `Howler`. Caution: This demo isn't a playable game. Only is a challenge demo for fun purposes.",image:"gorillas.png",links:[{Codepen:"https://codepen.io/manz/pen/RmEQgv"},{Twitter:"https://twitter.com/Manz/status/1134939107178819585"}]},{title:"Wheatley (Portal 2)",description:"Visual demo of Wheatley (Portal 2 game, from Valve). No uses images! No `<canvas>`. Uses `Flex`, `Custom Properties`, `Howler` and `Javascript` for movements logic. Use english or spanish voices lines according browser language.",image:"wheatley.png",links:[{Codepen:"https://codepen.io/manz/pen/QXQyvb"},{Twitter:"https://twitter.com/Manz/status/1145268788247629824"}]},{title:"Awesome Mix Vol.2 Cassette Tape",description:'Hooked on a Feeling? Audio Cassette *"Awesome Mix Vol. 2"* with only CSS (without images) from *Guardians of the Galaxy 2* movie. Perfect example for advanced uses for `gradients`.',image:"awesome-mix-vol2.png",links:[{Codepen:"https://codepen.io/manz/pen/rXzydL"},{Twitter:"https://twitter.com/Manz/status/1157430923803144192"}]}];
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=a(require("snarkdown")),t=a(require("./assets/*.png")),n=a(require("./assets/demos.json"));function a(e){return e&&e.__esModule?e:{default:e}}n.default.forEach(function(n){var a=document.createElement("section"),d=document.createElement("div");d.className="info";var r=document.createElement("h2");r.textContent=n.title;var c=document.createElement("p");c.innerHTML=(0,e.default)(n.description);var l=document.createElement("p");l.className="links",n.links.forEach(function(e){var t=document.createElement("a");t.href=Object.values(e)[0],t.textContent=Object.keys(e)[0],l.appendChild(t)}),d.appendChild(r),d.appendChild(c),d.appendChild(l);var i=document.createElement("div");i.className="preview";var s=document.createElement("img");s.src=t.default[n.image.replace(".png","")],s.alt=n.title,i.appendChild(s),a.appendChild(d),a.appendChild(i),document.body.appendChild(a)});
},{"snarkdown":"cHJE","./assets/*.png":"HBCd","./assets/demos.json":"QTDy"}]},{},["Focm"], "global")
//# sourceMappingURL=/src.def57419.js.map