(this.webpackJsonpnetflixclone=this.webpackJsonpnetflixclone||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/play.34df3111.svg"},function(e,t,a){e.exports=a.p+"static/media/plus.d3bbc6b1.svg"},function(e,t,a){e.exports=a.p+"static/media/heart.e316d44d.svg"},,function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),s=a(2),o=a.n(s),l=a(3),u=a(4),m=(a(23),"c92d933775007acb6822af260d3d457e"),d=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/discover/tv/?with_network=213&language=pt-BR&api_key=".concat(m));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",items:e.t0},e.next=6,d("/trending/all/week?language=pt-BR&api_key=".concat(m));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",items:e.t2},e.next=10,d("/movie/top_rated?&language=pt-BR&api_key=".concat(m));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em Alta",items:e.t4},e.next=14,d("/discover/movie?with_genres=28&language=pt-BR&api_key=".concat(m));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,d("/discover/movie?with_genres=35&language=pt-BR&api_key=".concat(m));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,d("/discover/movie?with_genres=27&language=pt-BR&api_key=".concat(m));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,d("/discover/movie?with_genres=10749&language=pt-BR&api_key=".concat(m));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,d("/discover/movie?with_genres=99&language=pt-BR&api_key=".concat(m));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rios",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!t){e.next=15;break}e.t0=a,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,d("/movie/".concat(t,"?language=pt-BR&api_key=").concat(m));case 7:return n=e.sent,e.abrupt("break",15);case 9:return e.next=11,d("/tv/".concat(t,"?language=pt-BR&api_key=").concat(m));case 11:return n=e.sent,e.abrupt("break",15);case 13:return n=null,e.abrupt("break",15);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},p=(a(24),a(10)),f=a.n(p),v=a(12),h=a.n(v),b=function(e){var t=e.title,a=e.items,i=Object(n.useState)(0),c=Object(u.a)(i,2),s=c[0],o=c[1];return r.a.createElement("div",{className:"movieRow"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"movieRow--left",onClick:function(){var e=s+Math.round(window.innerWidth/2);e>0&&(e=0),o(e)}},r.a.createElement(f.a,{style:{fontSize:50}})),r.a.createElement("div",{className:"movieRow--right",onClick:function(){var e=s-Math.round(window.innerWidth/2),t=150*a.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),o(e)}},r.a.createElement(h.a,{style:{fontSize:50}})),r.a.createElement("div",{className:"movieRow--listarea"},r.a.createElement("div",{className:"movieRow--list",style:{marginLeft:s,width:150*a.results.length}},a.results.length>0&&a.results.map((function(e,t){return r.a.createElement("div",{key:t,className:"movieRow--item"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title,key:t}))})))))},E=(a(30),a(13)),w=a.n(E),k=a(14),_=a.n(k),x=function(e){var t=e.item;console.log(t);var a=new Date(t.first_air_date),n=[];for(var i in t.genres)n.push(t.genres[i].name);var c=t.overview;return c.length>200&&(c=c.substring(0,200)+"..."),r.a.createElement("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")}},r.a.createElement("div",{className:"featured--vertical"},r.a.createElement("div",{className:"featured--horizontal"},r.a.createElement("div",{className:"featured--name"},t.original_name),r.a.createElement("div",{className:"featured--info"},r.a.createElement("div",{className:"featured--points"},t.vote_average," pontos"),r.a.createElement("div",{className:"featured--year"},a.getFullYear()),r.a.createElement("div",{className:"featured--seasons"},t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":"")),r.a.createElement("div",{className:"featured--description"},c),r.a.createElement("div",{className:"featured--buttons"},r.a.createElement("a",{href:"/watch/".concat(t.id),className:"featured--watchbutton"},r.a.createElement("img",{src:w.a,alt:"Play"})," Assistir"),r.a.createElement("a",{href:"/watch/".concat(t.id),className:"featured--mylistbutton"},r.a.createElement("img",{src:_.a,alt:"adicionar"})," Minha Listas")),r.a.createElement("div",{className:"featured--genres"},r.a.createElement("strong",null,"G\xeaneros:")," ",n.join(", ")))))},N=(a(31),function(e){var t=e.black;return r.a.createElement("header",{className:t?"black":""},r.a.createElement("div",{className:"header--logo"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png",alt:"Netflix"}))),r.a.createElement("div",{className:"header--user"},r.a.createElement("img",{src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:"Perfil"})))}),y=a(15),R=a.n(y),j=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(null),s=Object(u.a)(c,2),m=s[0],d=s[1],p=Object(n.useState)(!1),f=Object(u.a)(p,2),v=f[0],h=f[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getHomeList();case 2:return t=e.sent,i(t),a=t.filter((function(e){return"originals"===e.slug})),n=Math.floor(Math.random()*(a[0].items.results.length-1)),r=a[0].items.results[n],e.next=9,g.getMovieInfo(r.id,"tv");case 9:c=e.sent,d(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=function(){window.scrollY>10?h(!0):h(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),r.a.createElement("div",{className:"page"},r.a.createElement(N,{black:v}),m&&r.a.createElement(x,{item:m}),r.a.createElement("section",{className:"lists"},a.map((function(e,t){return r.a.createElement(b,{key:t,title:e.title,items:e.items})}))),r.a.createElement("footer",null,"Feito com ",r.a.createElement("span",{role:"img","aria-label":"cora\xe7\xe3o"},r.a.createElement("img",{src:R.a,alt:"coracao"}))," pelo Rodrigo junior",r.a.createElement("br",null),"Direitos de imagem para Netflix",r.a.createElement("br",null),"Dados pegos do site Themoviedb.org"),a.length<=0&&r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:"https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif",alt:"Carregando"})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.4a2a6a49.chunk.js.map