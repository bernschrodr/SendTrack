(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(t,e,n){t.exports=n.p+"static/media/image-from-rawpixel-id-558785-jpeg.be7bc74e.jpg"},,,function(t,e,n){t.exports=n.p+"static/media/image-from-rawpixel-id-558806-jpeg.c8726bd6.jpg"},function(t,e,n){t.exports=n.p+"static/media/search-solid.f542b8a3.svg"},function(t,e,n){t.exports=n.p+"static/media/youtube-icon.98390dab.svg"},function(t,e,n){t.exports=n.p+"static/media/spotify-icon.e3366f54.svg"},function(t,e,n){t.exports=n.p+"static/media/youtube-music-icon.dda65f8d.svg"},function(t,e,n){t.exports=n(26)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),a=n(9),o=n.n(a),s=(n(21),n(2)),l=n(3),c=n(6),u=n(4),p=n(1),f=n(5),d=(n(22),n(7)),v=n.n(d),h=n(10),m=n.n(h),b=(n(23),n(11)),g=n.n(b),y={youtubeMusic:"music.youtube",youtube:"youtube",spotify:"spotify",appleMusic:"music.apple",deezer:"deezer"};function k(t){var e,n=function(t){var e=-1,n="";for(var i in y){var r=V(t,y[i]);if(-1!==r){e=r,n=y[i];break}}var a=t.substring(e);return a=function(t){var e=t.indexOf("/");return t.substring(e+1)}(a),console.log("Service Name: "+n),{service:n,cutUrl:a}}(t);if(n.service===y.youtube||n.service===y.youtubeMusic){var i,r,a=S(function(t){var e=t.cutUrl,n={};if(-1===e.indexOf("watch?"))return n.type="album",n;n.type="track",E(e);for(var i=E(e).split("&"),r=0;r<i.length;r++){var a=i[r].indexOf("="),o=i[r].substring(0,a),s=i[r].substring(a+1,i[r].length);n[o]=s}return console.log(n),n}(n),"track");if("isAlbum"in a)return{notValid:"this is playlist. Now we cant work with them",artist:"",track:"this is playlist. Now we cant work with them",url:"",service:n.service};if("notValid"in a)return{notValid:"Not found:(",artist:"",track:"Not found:(",url:"",service:n.service};console.log(a);var o,s=a.items[0].snippet.title.indexOf("-");return-1!==a.items[0].snippet.title.indexOf("-")?(i=a.items[0].snippet.title.substring(0,s),r=a.items[0].snippet.title.substring(s,a.items[0].snippet.title.length)):(i=a.items[0].snippet.channelTitle,r=a.items[0].snippet.title),r=O(r),i=O(i),r=x(r),i=x(i),"youtube"===n.service?o="https://www.youtube.com/watch?v="+a.items[0].id:"youtubeMusic"===n.service&&(o="https://www.music.youtube.com/watch?v="+a.items[0].id),e=U(i,r,o,n.service),console.log(e),-1!==(s=e.artist.indexOf(" - Topic"))&&(e.artist=e.artist.substring(0,s)),e}if(n.service===y.spotify){var l=N(function(t){var e=t.cutUrl,n={},i=e.split("/");return n[i[0]]=i[1],console.log(n),n}(n),"track");return console.log(l),"album"===l.type?{artist:"",track:"this is album",url:""}:"notValid"in l?{artist:"",track:"error:"+l.notValid,url:""}:(r=l.name,t=l.external_urls.spotify,i=l.artists[0].name,r=O(r),i=O(i),r=x(r),e=U(i=x(i),r,t,n.service))}return{notValid:"Not Found:(",artist:"Not Found:(",track:"",url:""}}function w(t){var e;return-1!==t.indexOf(".")&&(e=t.indexOf("."),-1!==(e=t.indexOf("/",e)))}function O(t){var e,n=t;return-1!==t.indexOf("(")&&-1!==t.indexOf(")")&&(e=t.indexOf("("),n=t.substring(0,e)+t.substring(t.indexOf(")")+1,t.length)),-1!==t.indexOf("[")&&-1!==t.indexOf("]")&&(e=t.indexOf("["),n=t.substring(0,e)+t.substring(t.indexOf("]")+1,t.length)),n}function x(t){var e,n=t;return-1!==t.indexOf(/feat/i)&&(e=t.indexOf(/feat/i),n=t.substring(0,e)),n}function S(t,e){var n=t.type;delete t.type;var i=new XMLHttpRequest,r="https://www.googleapis.com/youtube/v3/",a={notValid:""};if("album"===n)return r+="playlistItems?",{isAlbum:""};switch(e){case"track":r+="videos?";break;case"search":r+="search?";break;default:return console.log("not valid request type"),a}for(var o in r+="part=snippet",t)switch(o){case"v":r+="&id="+t[o];break;case"q":r+="&q="+t[o]+"&maxResults=25&type=video&videoCategoryId=10";break;case"list":case"feature":break;default:return console.log("bad argument = Not Found"),a}r+="&key=AIzaSyBEYdv5D-1VmQHgb5d3jR2qn2mo_mvlr9g",i.open("GET",r,!1),i.send();var s={notValid:""};return 200!==i.status?alert(i.status+": "+i.statusText):0!==JSON.parse(i.responseText).pageInfo.totalResults?s=JSON.parse(i.responseText):s.notValid="Not Found",console.log(s),s}function N(t,e){var n=function(){var t=function(t){var e=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0}("spotifyKey");return t||function(){var t,e=new XMLHttpRequest;if(e.open("GET","/token",!1),e.send(),200!==e.status)alert(e.status+": "+e.statusText+"Can't get spotify token from sendtrack server");else{var n=JSON.parse(e.responseText);t=n.token,C("spotifyKey",n.token,{expires:(n.expires-Date.now())/1e3})}return console.log(t),t}()}(),i={notValid:""},r=i,a="https://api.spotify.com/v1/";if("artists"in t)return r.notValid="artist",r;switch(e){case"track":a+="tracks/"+t.track;break;case"search":a+="search?q="+t.q+"&type=track&limit=10";break;default:return i}console.log(a);var o=new XMLHttpRequest;return o.open("GET",a,!1),o.setRequestHeader("Accept","application/json"),o.setRequestHeader("Content-Type","application/json"),o.setRequestHeader("Authorization","Bearer "+n),o.send(),200!==o.status?(alert(o.status+": "+o.statusText),r[i]=o.statusText):0!==JSON.parse(o.responseText).total&&(r=JSON.parse(o.responseText)),console.log(o.responseText),r}function E(t){var e=t.indexOf("watch?");return t.substring(e+"watch?".length)}function T(t){var e={spotify:"Not Found",youtube:"Not Found",youtubeMusic:"Not Found"};if(t.hasOwnProperty("notValid"))return console.log(t.notValid),e;function n(t,e,n,i){return{artist:t,track:e,url:n,albumArt:i}}if(t.initialService!==y.spotify){var i={q:t.artist+" "+t.track};console.log(t);var r=N(i,"search");if(console.log(r),!r.hasOwnProperty("type")&&"album"!==r.type&&!r.hasOwnProperty("notValid")){var a=function(t,e){var n=e.artist,i=e.track,r={notValid:"Not Found2"},a=!0,o=!1,s=void 0;try{for(var l,c=t.tracks.items[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var u=l.value,p=!1;if("track"===u.type){if(console.log(u.name),!j(i,u.name)&&!j(u.name,i))continue;var f=!0,d=!1,v=void 0;try{for(var h,m=u.artists[Symbol.iterator]();!(f=(h=m.next()).done);f=!0){var b=h.value;if(j(n,b.name)&&j(b.name,n)){p=!0;break}p=!1}}catch(g){d=!0,v=g}finally{try{f||null==m.return||m.return()}finally{if(d)throw v}}if(r=u,p)return r}}}catch(g){o=!0,s=g}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return r}(r,t);if(!a.hasOwnProperty("notValid")){for(var o="",s=0;s<a.artists.length;s++)s!==a.artists.length-1?o+=a.artists[s].name+", ":o+=a.artists[s].name;e.spotify=n(o,a.name,a.external_urls.spotify,a.album.images[0].url)}}}if(t.initialService!==y.youtubeMusic||"youtube"!==t.initialService){var l={q:t.artist+" "+t.track};console.log(l.q),console.log("Initial Service: "+t.initialService);var c=S(l,"search");if(!c.hasOwnProperty("notValid")){var u=function(t,e){var n=e.artist,i=e.track,r={notValid:"Not Found2"},a=!1,o=!0,s=!1,l=void 0;try{for(var c,u=t.items[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var p=c.value;if(-1!==p.snippet.channelTitle.indexOf("- Topic")){var f=p.snippet.channelTitle.substring(0,p.snippet.channelTitle.indexOf(" - Topic"));if(!j(i,p.snippet.title)&&!j(p.snippet.title,i))continue;if(!j(n,f)&&!j(f,n))continue;r=p,a=!0;break}}}catch(y){s=!0,l=y}finally{try{o||null==u.return||u.return()}finally{if(s)throw l}}if(!a){var d=!0,v=!1,h=void 0;try{for(var m,b=t.items[Symbol.iterator]();!(d=(m=b.next()).done);d=!0){var g=m.value;if(j(n+" "+i,g.snippet.title)||j(g.snippet.title,n+" "+i)){r=g;break}}}catch(y){v=!0,h=y}finally{try{d||null==b.return||b.return()}finally{if(v)throw h}}}return r}(c,t);u.hasOwnProperty("notValid")||(-1===u.snippet.channelTitle.indexOf("- Topic")?(t.initialService!==y.youtubeMusic&&(e.youtubeMusic=n("",u.snippet.title,"https://music.youtube.com/watch?v="+u.id.videoId,u.snippet.thumbnails.high.url)),t.initialService!==y.youtube&&(e.youtube=n("",u.snippet.title,"https://youtube.com/watch?v="+u.id.videoId,u.snippet.thumbnails.high.url))):(t.initialService!==y.youtubeMusic&&(e.youtubeMusic=n(u.snippet.channelTitle.substring(0,u.snippet.channelTitle.indexOf("- Topic")),u.snippet.title,"https://music.youtube.com/watch?v="+u.id.videoId,u.snippet.thumbnails.high.url)),t.initialService!==y.youtube&&(e.youtube=n(u.snippet.channelTitle.substring(0,u.snippet.channelTitle.indexOf("- Topic")),u.snippet.title,"https://youtube.com/watch?v="+u.id.videoId,u.snippet.thumbnails.high.url))))}}return console.log(e),e}function j(t,e){var n=new RegExp("[\\s-\\]\\[\\)\\(\\/\\.&]","i"),i=t.split(n),r=e.split(n);i=i.filter(function(t){return""!==t}),r=r.filter(function(t){return""!==t}),console.log(i),console.log(r);var a=!0,o=!1,s=void 0;try{for(var l,c=i[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var u=l.value,p=!1,f=!0,d=!1,v=void 0;try{for(var h,m=r[Symbol.iterator]();!(f=(h=m.next()).done);f=!0){var b=h.value,g=new RegExp(b,"i");if(-1!==u.search(g)){p=!0,console.log("Found");break}p=!1}}catch(y){d=!0,v=y}finally{try{f||null==m.return||m.return()}finally{if(d)throw v}}if(!p)return console.log("not equal"),!1}}catch(y){o=!0,s=y}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return console.log("equal"),!0}function U(){return{artist:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",track:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",url:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",initialService:arguments.length>3&&void 0!==arguments[3]?arguments[3]:""}}function V(t,e){var n=t.indexOf(e);return-1!==n&&(n+=e.length),n}function C(t,e,n){var i=(n=n||{}).expires;if("number"==typeof i&&i){var r=new Date;r.setTime(r.getTime()+1e3*i),i=n.expires=r}i&&i.toUTCString&&(n.expires=i.toUTCString());var a=t+"="+(e=encodeURIComponent(e));for(var o in n){a+="; "+o;var s=n[o];!0!==s&&(a+="="+s)}document.cookie=a}var I=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={placeholder:"Enter: Url / artist - name",content:"",isUrl:!1},n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"handleInputChange",value:function(t){var e=t.target.value;this.setState(function(){return{content:e,isUrl:w(e)}}),console.log("changed")}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=this.state.content;this.state.isUrl||this.setState(function(){return{content:"",isUrl:!1}}),this.props.onSubmit(e,this.state.isUrl),this.setState(function(){return{content:"",isUrl:!1}}),console.log("submit")}},{key:"render",value:function(){return r.a.createElement("div",{className:"input-form container"},r.a.createElement("form",{className:"input-form__text-form"},r.a.createElement("input",{value:this.state.content,placeholder:this.state.placeholder,onChange:this.handleInputChange,onSubmit:this.handleSubmit}),r.a.createElement("button",{onClick:this.handleSubmit},r.a.createElement("img",{src:g.a,alt:""}))))}}]),e}(i.Component),_=(n(24),function(t){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"link container"},r.a.createElement("a",{href:this.props.url,className:"link__element container",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:this.props.albumArt,className:"link__album-art",alt:""}),r.a.createElement("div",{className:"link__artist-track container"},r.a.createElement("div",{className:"link__track-name"},this.props.track),r.a.createElement("div",{className:"link__artist-name"},this.props.artist)),r.a.createElement("img",{src:this.props.service,className:"link__service-name",alt:""})))}}]),e}(i.Component)),q=(n(25),n(12)),A=n.n(q),M=n(13),R=n.n(M),F=n(14),L=n.n(F),P=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).getInfo=n.getInfo.bind(Object(p.a)(n)),n.getLinks=n.getLinks.bind(Object(p.a)(n)),n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"getInfo",value:function(){return r.a.createElement("div",{className:"links-block__input-object"},this.props.artist,r.a.createElement("br",null),this.props.track,r.a.createElement("br",null),this.props.url,r.a.createElement("br",null))}},{key:"getLinks",value:function(){var t,e=[];for(var n in this.props.arrayOfUrls)if("Not Found"!==this.props.arrayOfUrls[n]){var i=this.props.arrayOfUrls[n];switch(n){case"spotify":i.service=R.a;break;case"youtube":i.service=A.a;break;case"youtubeMusic":i.service=L.a}e.push((t=i,r.a.createElement(_,{service:t.service,artist:t.artist,track:t.track,url:t.url,albumArt:t.albumArt})))}return console.log(e),e}},{key:"render",value:function(){return r.a.createElement("div",{className:"links-block container"},r.a.createElement(this.getInfo,null),r.a.createElement(this.getLinks,null))}}]),e}(i.Component),H=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).initialState={artist:"",track:"",url:"",background:v.a,arrayOfUrls:{spotify:"Not Found",youtube:"Not Found",youtubeMusic:"Not Found"}},n.state=n.initialState,n.getLink=n.getLink.bind(Object(p.a)(n)),n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"getLink",value:function(t,e){var n,i=v.a,r=T(n=e?k(t):function(t){if(""===t)return{notValid:"empty string"};var e;-1!==t.indexOf("-")&&(e=t.split("-")),-1!==t.indexOf("\u2013")&&(e=t.split("\u2013")),console.log(e);var n={notValid:"not valid input"};return(e=e.filter(function(t){return""!==t})).length>1&&(n=U(e[0].trim(),e[1].trim())),n}(t));"Not Found"!==r.spotify?i=r.spotify.albumArt:"Not Found"!==r.youtubeMusic&&(i=r.youtubeMusic.albumArt),this.setState(function(){return{artist:n.artist,track:n.track,url:n.url,arrayOfUrls:r,background:i}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("img",{className:"crystall",src:m.a,alt:""}),r.a.createElement("img",{className:"bg",src:this.state.background,alt:""}),r.a.createElement(I,{onSubmit:this.getLink}),r.a.createElement(P,{arrayOfUrls:this.state.arrayOfUrls,artist:this.state.artist,track:this.state.track,url:this.state.url}),r.a.createElement("div",{id:"result"}))}}]),e}(i.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}o.a.render(r.a.createElement(H,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/SendTrack",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/SendTrack","/service-worker.js");J?(function(t,e){fetch(t).then(function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):W(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):W(e,t)})}}()}],[[15,1,2]]]);
//# sourceMappingURL=main.01be67af.chunk.js.map