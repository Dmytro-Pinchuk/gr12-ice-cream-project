!function(){new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:120,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".image-slider",{simulateTouch:!0,touchRatio:2,grabCurser:!0,loop:!0,loopedSlides:1,keyboard:{enabled:!0,onlyInViewport:!0},slideToClickedSlide:!0,effect:"fade",fadeEffect:{crossFade:!0}});!function(){for(var e={openMenuBtn:document.querySelectorAll(".js-open-menu"),secondOpenMenu:document.querySelector(".menu__second-btn"),firstOpenMenu:document.querySelector(".menu__first-btn"),navMenu:document.querySelector(".memu__navigtion"),menu:document.querySelector(".menu__container"),body:document.querySelector("body"),menuList:document.querySelector(".mob-menu-nav"),menuSVG:document.querySelectorAll(".menu__svg")},o=0;o<e.openMenuBtn.length;o++)e.openMenuBtn[o].addEventListener("click",n);function n(){e.menu.classList.toggle("mobile-menu-open"),console.log("menuSVG lenth"+e.menuSVG.length);for(var o=0;o<e.menuSVG.length;o++)e.menuSVG[o].classList.toggle("is-none");e.body.classList.toggle("no-scroll"),e.navMenu.classList.toggle("is-open"),e.secondOpenMenu.classList.toggle("is-open"),e.firstOpenMenu.classList.toggle("is-open")}}(),function(){for(var e,o={openModalBtn1:document.querySelectorAll(".btn-buy"),openModalBtn3:document.querySelectorAll(".contacts__button--franchise"),openModalBtn4:document.querySelectorAll(".about__btn"),openModalBtn5:document.querySelectorAll(".contacts__button--location"),closeModalBtn:document.querySelectorAll(".modal-window__close-btn"),modal:document.querySelector("#modal-backdrop")},n=0;n<o.openModalBtn1.length;n++)console.log(o.openModalBtn1.length),o.openModalBtn1[n].value="buy_now_form",o.openModalBtn1[n].addEventListener("click",s);for(var t=0;t<o.openModalBtn5.length;t++)console.log(o.openModalBtn5.length),o.openModalBtn3[t].value="franchise_modal",o.openModalBtn3[t].addEventListener("click",s);for(var l=0;l<o.openModalBtn5.length;l++)console.log(o.openModalBtn5.length),o.openModalBtn4[l].value="read_more_modal",o.openModalBtn4[l].addEventListener("click",s);for(var a=0;a<o.openModalBtn5.length;a++)console.log(o.openModalBtn5.length),o.openModalBtn5[a].value="our_location_modal",o.openModalBtn5[a].addEventListener("click",s);console.log(o.closeModalBtn.length);for(var c=0;c<o.closeModalBtn.length;c++)o.closeModalBtn[c].addEventListener("click",s);function s(){console.log(this.value),o.modal.classList.toggle("modal-is-hidden"),document.querySelector("#"+this.value).classList.toggle("modal-is-hidden")}!function(){var o=44.68385702802469,n=-101.01402164348723,t=new google.maps.LatLng(o,n),l=new google.maps.LatLng(41.70357780196271,-87.77974050194243),a=new google.maps.LatLng(33.887836864780496,-118.39764973093762),c={zoom:1,center:t,mapTypeId:google.maps.MapTypeId.HYBRID};e=new google.maps.Map(document.getElementById("map"),c),new google.maps.LatLng(o,n),new google.maps.Marker({position:l,map:e,title:"Cafe Chicago"}),e.setCenter(l,20),new google.maps.Marker({position:a,map:e,title:"Foodtruck Los Angeles"}),e.setCenter(a,20);var s=new google.maps.LatLng(40.67289720983488,-73.9547340019655);new google.maps.Marker({position:s,map:e,title:"Cafe New York"}),e.setCenter(s,20)}()}()}();
//# sourceMappingURL=index.3eae80ba.js.map
