!function(){new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:120,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".image-slider",{simulateTouch:!0,touchRatio:2,grabCurser:!0,loop:!0,loopedSlides:1,keyboard:{enabled:!0,onlyInViewport:!0},slideToClickedSlide:!0,effect:"fade",fadeEffect:{crossFade:!0}});!function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuList:document.querySelector(".mob-nav__list")};function o(){e.menu.classList.toggle("is-hidden")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.menuList.addEventListener("click",o)}(),function(){for(var e,o={openModalBtn1:document.querySelectorAll(".mob-menu__btn"),openModalBtn2:document.querySelectorAll(".products__btn"),openModalBtn3:document.querySelectorAll(".contacts__button--franchise"),openModalBtn4:document.querySelectorAll(".about__btn"),openModalBtn5:document.querySelectorAll(".contacts__button--location"),closeModalBtn:document.querySelectorAll(".modal-window__close-btn"),modal:document.querySelector("#modal-backdrop")},n=0;n<o.openModalBtn1.length;n++)console.log(o.openModalBtn1.length),o.openModalBtn1[n].value="buy_now_form",o.openModalBtn1[n].addEventListener("click",r);for(var t=0;t<o.openModalBtn2.length;t++)o.openModalBtn2[t].value="modal_ingredients",o.openModalBtn2[t].addEventListener("click",r);for(var l=0;l<o.openModalBtn3.length;l++)o.openModalBtn3[l].value="franchise_modal",o.openModalBtn3[l].addEventListener("click",r);for(var a=0;a<o.openModalBtn4.length;a++)o.openModalBtn4[a].value="read_more_modal",o.openModalBtn4[a].addEventListener("click",r);for(var d=0;d<o.openModalBtn5.length;d++)o.openModalBtn5[d].value="our_location_modal",o.openModalBtn5[d].addEventListener("click",r);for(var c=0;c<o.closeModalBtn.length;c++)o.closeModalBtn[c].addEventListener("click",r);function r(){o.modal.classList.toggle("modal-is-hidden"),document.querySelector("#"+this.value).classList.toggle("modal-is-hidden")}!function(){var o=44.68385702802469,n=-101.01402164348723,t=new google.maps.LatLng(o,n),l=new google.maps.LatLng(41.70357780196271,-87.77974050194243),a=new google.maps.LatLng(33.887836864780496,-118.39764973093762),d={zoom:1,center:t,mapTypeId:google.maps.MapTypeId.HYBRID};e=new google.maps.Map(document.getElementById("map"),d),new google.maps.LatLng(o,n),new google.maps.Marker({position:l,map:e,title:"Cafe Chicago"}),e.setCenter(l,20),new google.maps.Marker({position:a,map:e,title:"Foodtruck Los Angeles"}),e.setCenter(a,20);var c=new google.maps.LatLng(40.67289720983488,-73.9547340019655);new google.maps.Marker({position:c,map:e,title:"Cafe New York"}),e.setCenter(c,20)}()}()}();
//# sourceMappingURL=index.cba13bad.js.map
