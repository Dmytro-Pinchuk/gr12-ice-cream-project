!function(){new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:120,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".image-slider",{simulateTouch:!0,touchRatio:2,grabCurser:!0,loop:!0,loopedSlides:1,keyboard:{enabled:!0,onlyInViewport:!0},slideToClickedSlide:!0,effect:"fade",fadeEffect:{crossFade:!0}});!function(){for(var e,o={openModalBtn1:document.querySelectorAll(".btn-buy"),openModalBtn3:document.querySelectorAll(".contacts__button--franchise"),openModalBtn4:document.querySelectorAll(".about__btn"),openModalBtn5:document.querySelectorAll(".contacts__button--location"),closeModalBtn:document.querySelectorAll(".modal-window__close-btn"),modal:document.querySelector("#modal-backdrop")},n=0;n<o.openModalBtn1.length;n++)console.log(o.openModalBtn1.length),o.openModalBtn1[n].value="buy_now_form",o.openModalBtn1[n].addEventListener("click",c);for(var l=0;l<o.openModalBtn5.length;l++)console.log(o.openModalBtn5.length),o.openModalBtn3[l].value="franchise_modal",o.openModalBtn3[l].addEventListener("click",c);for(var t=0;t<o.openModalBtn5.length;t++)console.log(o.openModalBtn5.length),o.openModalBtn4[t].value="read_more_modal",o.openModalBtn4[t].addEventListener("click",c);for(var a=0;a<o.openModalBtn5.length;a++)console.log(o.openModalBtn5.length),o.openModalBtn5[a].value="our_location_modal",o.openModalBtn5[a].addEventListener("click",c);console.log(o.closeModalBtn.length);for(var d=0;d<o.closeModalBtn.length;d++)o.closeModalBtn[d].addEventListener("click",c);function c(){console.log(this.value),o.modal.classList.toggle("modal-is-hidden"),document.querySelector("#"+this.value).classList.toggle("modal-is-hidden")}!function(){var o=44.68385702802469,n=-101.01402164348723,l=new google.maps.LatLng(o,n),t=new google.maps.LatLng(41.70357780196271,-87.77974050194243),a=new google.maps.LatLng(33.887836864780496,-118.39764973093762),d={zoom:1,center:l,mapTypeId:google.maps.MapTypeId.HYBRID};e=new google.maps.Map(document.getElementById("map"),d),new google.maps.LatLng(o,n),new google.maps.Marker({position:t,map:e,title:"Cafe Chicago"}),e.setCenter(t,20),new google.maps.Marker({position:a,map:e,title:"Foodtruck Los Angeles"}),e.setCenter(a,20);var c=new google.maps.LatLng(40.67289720983488,-73.9547340019655);new google.maps.Marker({position:c,map:e,title:"Cafe New York"}),e.setCenter(c,20)}()}()}();
//# sourceMappingURL=index.7852f642.js.map
