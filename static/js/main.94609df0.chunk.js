(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(2),s=a(4),r=a(3),c=a(5),o=a(0),l=a.n(o),m=a(28),p=(a(21),a(12)),u=a(13),d=a(14),g=a(16),f=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement(m.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Portfolio")),l.a.createElement(p.default,null),l.a.createElement(u.default,null),l.a.createElement(d.default,null),l.a.createElement(g.default,null))}}]),t}(o.Component);t.default=f},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(6),r=a.n(s),c=(a(19),a(7));r.a.render(i.a.createElement(c.default,null),document.getElementById("root"))},,,,function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(2),s=a(4),r=a(3),c=a(5),o=a(0),l=a.n(o),m=(a(22),a(29)),p=a.n(m),u=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("p",null,"Hello, I'm Alexander.  I'm a developer"),l.a.createElement(p.a,{params:{particles:{number:{value:100},size:{value:7}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"}}}}})))}}]),t}(o.Component);t.default=u},function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(2),s=a(4),r=a(3),c=a(5),o=a(0),l=a.n(o),m=(a(23),a(18)),p=a.n(m),u=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"about"},l.a.createElement("h1",null,"About"),l.a.createElement("div",{className:"picWithText"},l.a.createElement("div",{className:"profilePic"},l.a.createElement("img",{src:p.a,alt:"pic should be here"})),l.a.createElement("div",{className:"textDiv"},l.a.createElement("p",{class:"lead"},"Software engineering student.",l.a.createElement("br",null),"Mostly focused on Web-Development.",l.a.createElement("br",null)," Playing with embedded system from time to time."))),l.a.createElement("div",{className:"skillset"},l.a.createElement("p",null,"Front End: HTML/CSS/Javascript(React)"),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"skills front"},"80%")),l.a.createElement("p",null,"Back End: Node.js / ASP.NET"),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"skills back"},"60%")),l.a.createElement("p",null,"Robot Process Automation"),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"skills rpa"},"60%")),l.a.createElement("p",null,"Embedded Systems"),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"skills embedded"},"60%")),l.a.createElement("p",null,"DevOps"),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"skills devops"},"40%"))))}}]),t}(o.Component);t.default=u},function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(2),s=a(4),r=a(3),c=a(5),o=a(0),l=a.n(o),m=a(15),p=a(30),u=a.n(p),d=(a(58),a(59),a(25),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=m.projects.map(function(e,t){return l.a.createElement("div",{className:"projectBox",key:t},l.a.createElement("a",{href:e.projectUrl},l.a.createElement("img",{className:"projectImage",src:a(60)("".concat(e.imageUrl)),alt:"product",width:"50",height:"50"})),l.a.createElement("p",{className:"title"}," ",e.title),l.a.createElement("p",{className:"description"}," ",e.description),l.a.createElement("p",{className:"status"}," Status: ",e.status))});return l.a.createElement("div",{className:"projectList"},l.a.createElement("h1",null,"Projects"),l.a.createElement(u.a,{slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,arrows:!0,dots:!0},e))}}]),t}(o.Component));t.default=d},function(e){e.exports={projects:[{title:"Basic Unity Boat Game",imageUrl:"./images/boat_game_asp.png",description:"Small game made for one of the courses",status:"Done",projectUrl:"https://gitlab.com/meincrab/unityProject"},{title:"Basic Unity Survival 3D game",imageUrl:"./images/survival_asp.png",description:"Small game made for one of the courses",status:"Done",projectUrl:"https://gitlab.com/meincrab/unityProject"},{title:"Student Schedule App",imageUrl:"./images/scheduler.png",description:"Timetable where student can track his own schedule, courses",status:"Done",projectUrl:"https://gitlab.com/meincrab/webHarkka"},{title:"olioSolitaire",imageUrl:"./images/solitaire_asp.png",description:"Implementation of Solitaire game using OOP and WPF",status:"Done",projectUrl:"https://gitlab.com/meincrab/olioSolitaire"},{title:"Notemap",imageUrl:"./images/notemap_asp.png",description:"Scheduler + map tracking",status:"Done",projectUrl:"https://gitlab.com/meincrab/Notemap"},{title:"Android Image Parser",imageUrl:"./images/imageParser_asp.png",description:"You give it a link, it gives you all pictures from page to download",status:"Done",projectUrl:"https://gitlab.com/meincrab/AndroidProject"},{title:"Single Effect Demo for Assembly",imageUrl:"./images/demo_asp.png",description:"Led Strip + arduino + some code = lots of fun",status:"Done",projectUrl:""},{title:"React 2048",imageUrl:"./images/2048_src.PNG",description:"Led Strip + arduino + some code = lots of fun",status:"WIP",projectUrl:""},{title:"NodeDictionary",imageUrl:"./images/eagle.jpg",description:"Led Strip + arduino + some code = lots of fun",status:"WIP",projectUrl:""},{title:"ElBucatinoCafe",imageUrl:"./images/ristorante.PNG",description:"Led Strip + arduino + some code = lots of fun",status:"WIP",projectUrl:"https://gitlab.com/meincrab/cafe_sites"},{title:"Prezelz shop",imageUrl:"./images/pretzels.PNG",description:"Led Strip + arduino + some code = lots of fun",status:"WIP",projectUrl:"https://gitlab.com/meincrab/cafe_sites"}]}},function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(2),s=a(4),r=a(3),c=a(5),o=a(0),l=a.n(o),m=(a(27),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("h1",null,"Contact Info"),l.a.createElement("div",{className:"contactInfo"},l.a.createElement("a",{href:"https://www.linkedin.com/in/andreev-alexander/"},l.a.createElement("h3",null,"Linkedin")),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/meincrab/"},l.a.createElement("h3",null,"GitLab")),l.a.createElement("br",null),l.a.createElement("a",{href:"https://drive.google.com/file/d/13nso6K5BT3ykeRWanOYPJjJkJAA71yR0/view?usp=sharing"},l.a.createElement("h3",null,"CV"))))}}]),t}(o.Component));t.default=m},,function(e,t,a){e.exports=a.p+"static/media/pictureMe.76b03527.jpeg"},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(6),r=a.n(s),c=a(7);it("renders without crashing",function(){var e=document.createElement("div");r.a.render(i.a.createElement(c.default,null),e),r.a.unmountComponentAtNode(e)})},function(e,t,a){},,,,function(e,t,a){e.exports=a(8)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){var n={".":8,"./":8,"./About":13,"./About.css":23,"./About.js":13,"./App":7,"./App.css":21,"./App.js":7,"./App.test":26,"./App.test.js":26,"./Footer":16,"./Footer.css":27,"./Footer.js":16,"./Header":12,"./Header.css":22,"./Header.js":12,"./ProjectView":14,"./ProjectView.css":25,"./ProjectView.js":14,"./images/2048_src.PNG":61,"./images/Image_loader.PNG":62,"./images/NoteMap3.PNG":63,"./images/boat_game.png":64,"./images/boat_game_asp.png":65,"./images/demo_asp.png":66,"./images/demo_img.png":67,"./images/eagle.jpg":68,"./images/favicon.ico":69,"./images/imageParser_asp.png":70,"./images/noteMap.PNG":71,"./images/noteMap2.PNG":72,"./images/noteMap4.PNG":73,"./images/notemap_asp.png":74,"./images/olio_solitaire.PNG":75,"./images/pictureMe.jpeg":18,"./images/pretzels.PNG":76,"./images/ristorante.PNG":77,"./images/scheduler.png":78,"./images/solitaire_asp.png":79,"./images/survival_asp.png":80,"./images/survival_shooter.PNG":81,"./index":8,"./index.css":19,"./index.js":8,"./projects":15,"./projects.json":15,"./smalldeer.svg":82};function i(e){var t=s(e);return a(t)}function s(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=60},function(e,t,a){e.exports=a.p+"static/media/2048_src.f079d7c3.PNG"},function(e,t,a){e.exports=a.p+"static/media/Image_loader.09d6d604.PNG"},function(e,t,a){e.exports=a.p+"static/media/NoteMap3.c8b65374.PNG"},function(e,t,a){e.exports=a.p+"static/media/boat_game.38915776.png"},function(e,t,a){e.exports=a.p+"static/media/boat_game_asp.76faf2d9.png"},function(e,t,a){e.exports=a.p+"static/media/demo_asp.dea7a556.png"},function(e,t,a){e.exports=a.p+"static/media/demo_img.502ccf90.png"},function(e,t,a){e.exports=a.p+"static/media/eagle.54db2d70.jpg"},function(e,t,a){e.exports=a.p+"static/media/favicon.071c57c9.ico"},function(e,t,a){e.exports=a.p+"static/media/imageParser_asp.cf2b67cd.png"},function(e,t,a){e.exports=a.p+"static/media/noteMap.33a8a516.PNG"},function(e,t,a){e.exports=a.p+"static/media/noteMap2.e87c868d.PNG"},function(e,t,a){e.exports=a.p+"static/media/noteMap4.986998b6.PNG"},function(e,t,a){e.exports=a.p+"static/media/notemap_asp.e63d263e.png"},function(e,t,a){e.exports=a.p+"static/media/olio_solitaire.33570baa.PNG"},function(e,t,a){e.exports=a.p+"static/media/pretzels.c9040bae.PNG"},function(e,t,a){e.exports=a.p+"static/media/ristorante.9d3cb6b9.PNG"},function(e,t,a){e.exports=a.p+"static/media/scheduler.08e0318e.png"},function(e,t,a){e.exports=a.p+"static/media/solitaire_asp.0c39a12a.png"},function(e,t,a){e.exports=a.p+"static/media/survival_asp.bcf45a07.png"},function(e,t,a){e.exports=a.p+"static/media/survival_shooter.ab029e43.PNG"},function(e,t,a){e.exports=a.p+"static/media/smalldeer.31e7b124.svg"}],[[31,1,2]]]);
//# sourceMappingURL=main.94609df0.chunk.js.map