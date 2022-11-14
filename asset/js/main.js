$(function(){

    //메인슬라이드
    fetch("./asset/data/banner.json")
    .then((response) => response.json())
    .then((json) => {
  // alert(json);
        const mainBanner = json.mainBanner;
    
        let html = '';
        mainBanner.forEach(banner => {
    
            html += `<li class="swiper-slide">
                        <a href="${banner.link}">
                            <div class="img-box">
                                <figure>
                                    <img src=${banner.imgSrc} alt="로맨스웹툰">
                                    <figcaption class="blind">${banner.caption}</figcaption>
                                </figure>
                            </div>
                        </a>
                    </li>`;
    
        });
        // console.log(html);
        const list = document.querySelector('.sc-visual .swiper-wrapper');
    
        list.innerHTML = html; //변수
  
  
        var mainSlide = new Swiper(".main-slide", {
          slidesPerView: '1.2',
          spaceBetween: 5,
          centeredSlides: true,
          loop: true,
          slidesPerView: 'auto',
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
          },
          // scrollbar: {
          //   el: ".swiper-scrollbar",
          //   dragSize: 300,스크롤바 크기
          // },
        });
    })


    //기다리면무료웹툰
    fetch("./asset/data/product.json")
    .then((response) => response.json())
    
    .then((json) => {
      // alert(json);
            const freeToon = json.freeToon;
        
            let html = '';
            freeToon.forEach(freeToon => {
        
                html += `<li class="product-item">
                <a href="">
                    <div class="img-box">
                        <div class="badge">
                              <img src="${freeToon.timeIcon}" alt="기다리면 무료">
                              <img src="${freeToon.millionIcon}" alt="밀리언페이지" class="mp-icon">
                        </div>
                        <img src="${freeToon.imgSrc} " alt="여제화원">
                    </div>
                    <div class="txt-wrap">
                        <div class="title-box">
                            <img src="${freeToon.newIcon}" alt="">
                            <em class="title"> ${freeToon.title}</em>
                        </div>
                        
                        <div class="view-info">
                            <img src="${freeToon.readIcon}" alt="사람 아이콘">
                            <span class="view-people">${freeToon.viewPeople}</span>
                            <span class="view-writer">${freeToon.viewWriter}</span>
                        </div>
                    </div>
                </a>
            </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-free-toon .product-list');
        
            list.innerHTML = html; //변수
        })
















    //mid슬라이드
    fetch("./asset/data/banner.json")
    .then((response) => response.json())
    .then((json) => {
      const midBanner = json.midBanner;

      let html = '';
      midBanner.forEach(banner2 => {

        html += `<li class="swiper-slide">
                    <a href="">
                        <div class="img-box">
                            <figure>
                                <img src="${banner2.imgSrc}" alt="이벤트,1000캐시 즉시 지급">
                                <figcaption class="blind">
                                    ${banner2.caption}
                                </figcaption>
                            </figure>
                        </div>
                    </a>
                </li>`
      });
      const list = document.querySelector('.event-area .swiper-wrapper');
    
        list.innerHTML = html; //변수



      var midSlide = new Swiper(".mid-slide", {
        slidesPerView: '1.2',
        spaceBetween: 5,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
      });
    })



    //last슬라이드

    fetch("./asset/data/banner.json")
    .then((response) => response.json())
    .then((json) => {
      const lastBanner = json.lastBanner;

      let html = '';
      lastBanner.forEach(banner3 => {

        html += `<li class="swiper-slide">
                    <a href="">
                        <div class="img-box">
                            <figure>
                                <img src="${banner3.imgSrc}" alt="이벤트 캐시">
                                <figcaption class="blind">
                                ${banner3.caption}
                                </figcaption>
                            </figure>
                        </div>
                    </a>
                </li>`
      });
      const list = document.querySelector('.sc-event .swiper-wrapper');
    
      list.innerHTML = html; //변수



      var lastSlide = new Swiper(".sc-event .swiper", {
        spaceBetween: 10,
        freeMode: true,
        slidesPerView: 'auto',
      });
    })
      





});