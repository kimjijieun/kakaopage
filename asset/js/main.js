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

    const ic_free = `<img src="./asset/images/icon/badge_time.png" alt="기다리면 무료">`;
    const ic_new = `<img src="./asset/images/icon/icon_new.svg" alt="">`;
    const ic_milli = `<img src="./asset/images/icon/badge_right_million.png" alt="밀리언페이지" class="mp-icon">`;
    const ic_up = `<img src="./asset/images/icon/icon_up.svg" alt="업데이트">`;
    const ic_star = `<img src="./asset/images/icon/badge-thumbnail-star.svg" alt="별점" class="icon-star">`;


    //기다리면무료웹툰
    fetch("./asset/data/product.json")
    .then((response) => response.json())
    
    
    .then((json) => {
        // alert(json);
        const freeToon = json.freeToon;

        
            let html = '';
            freeToon.forEach(freeToon => {

                freeEl = (freeToon.waitFree)?ic_free:'';
                newEl = (freeToon.new)?ic_new:'';
                milliEl = (freeToon.view > 20)?ic_milli:'';
                upEl = (freeToon.up)?ic_up:'';

                html +=`<li class="product-item">
                    <a href="${freeToon.link}">
                        <div class="img-box">
                            <div class="badge">
                                ${freeEl}
                                ${milliEl}
                            </div>
                            <img src="${freeToon.imgSrc} " alt="여제화원">
                        </div>
                        <div class="txt-wrap">
                            <div class="title-box">
                                ${newEl}
                                ${upEl}
                                <em class="title"> ${freeToon.title}</em>
                            </div>
                            
                            <div class="view-info">
                                <img src="${freeToon.read}" alt="사람 아이콘">
                                <span class="view-people">${freeToon.view}만명</span>
                                <span class="view-writer">${freeToon.Writer}</span>
                            </div>
                        </div>
                    </a>
                </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-free-toon .product-list');

            list.innerHTML = html; //변수
        })


    //기다리면 무료 소설
    fetch("./asset/data/product.json")
    .then((response) => response.json())


    .then((json) => {
        // alert(json);
        const freeNovel = json.freeNovel;

        let html = '';
        freeNovel.forEach(freeNovel => {

                freeEl = (freeNovel.waitFree)?ic_free:'';
                newEl = (freeNovel.new)?ic_new:'';
            
                html +=`<li class="product-item">
                            <a href="${freeNovel.link}">
                                <div class="img-box">
                                    <div class="badge">
                                        ${freeEl}
                                    </div>
                                    <img src="${freeNovel.imgSrc}" alt="${freeNovel.title}">
                                    
                                </div>
                                <div class="txt-wrap">
                                    <div class="title-box">
                                        ${newEl}
                                        <em class="title">${freeNovel.title}</em>
                                    </div>
                                    
                                    <div class="view-info">
                                        <img src="${freeNovel.read}" alt="사람 아이콘">
                                        <span class="view-people">${freeNovel.view}만명</span>
                                        <span class="view-writer">${freeNovel.Writer}</span>
                                    </div>
                                </div>
                            </a>
                        </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-free-novel .product-list');

            list.innerHTML = html; //변수
        })




//인기 웹툰

    fetch("./asset/data/product.json")
    .then((response) => response.json())
    .then((json) => {

            const publicToon = json.publicToon;
        
            let html = '';
            publicToon.forEach(publicToon => {
        
                upEl = (publicToon.up)?ic_up:'';

                html += `<li class="product-item">
                          <a href="${publicToon.link}">
                              <div class="img-box">
                                  <div class="badge">
                                      <img src="${publicToon.toon}" alt="웹툰">
                                  </div>
                                  <img src="${publicToon.imgSrc}" alt="${publicToon.title}">
                              </div>
                              <div class="txt-wrap">
                                  <div class="title-box">
                                      ${upEl}
                                      <em class="title">${publicToon.title}</em>
                                  </div>
                                  
                                  <div class="view-info">
                                      <img src="${publicToon.read}" alt="사람 아이콘">
                                      <span class="view-people">${publicToon.view}만명</span>
                                      <span class="view-writer">${publicToon.Writer}</span>
                                  </div>
                              </div>
                          </a>
                      </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-public-toon .product-list');

        
            list.innerHTML = html; //변수
        })


//인기 웹소설

    fetch("./asset/data/product.json")
    .then((response) => response.json())
    .then((json) => {

            const publicNovel = json.publicNovel;
        
            let html = '';
            publicNovel.forEach(publicNovel => {

                upEl = (publicNovel.up)?ic_up:'';

                html += `<li class="product-item">
                          <a href="${publicNovel.link}">
                              <div class="img-box">
                                  <div class="badge">
                                      <img src="${publicNovel.novel}" alt="웹소설">
                                  </div>
                                  <img src="${publicNovel.imgSrc}" alt="${publicNovel.title}">
                              </div>
                              <div class="txt-wrap">
                                  <div class="title-box">
                                        ${upEl}
                                      <em class="title">${publicNovel.title}</em>
                                  </div>
                                  
                                  <div class="view-info">
                                      <img src="${publicNovel.read}" alt="사람 아이콘">
                                      <span class="view-people">${publicNovel.view}만명</span>
                                      <span class="view-writer">${publicNovel.Writer}</span>
                                  </div>
                              </div>
                          </a>
                      </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-public-novel .product-list');

        
            list.innerHTML = html; //변수
        })




    //월요일~완결
    $('.arrayDay-item').click(function(e){
        e.preventDefault();

        val = $(this).data('name');

        fetch("./asset/data/product.json")
        .then((response) => response.json())
        .then((json) => {

                const data = json.dayItems;
                const result = data.filter(function (a) {return a.sort == val});
            
                let html = '';
                result.forEach(dayEl => {
            //원래 data를 불렀다면 이제는 result를 불러줘야함
                    starEl = (dayEl.star)?ic_star:'';
                    upEl = (dayEl.up)?ic_up:'';

                    html += `<li class="product-item">
                                <a href="">
                                    <div class="img-box">
                                        <div class="badge">
                                            ${starEl}
                                            <p class="img-rank">${dayEl.rank}</p>
                                            <img src="${dayEl.awaitFree}" alt="" class="icon-wait">
                                        </div>
                                        <img src="${dayEl.imgSrc}" alt="도굴왕">
                                    </div>
                                    <div class="txt-wrap">
                                        <div class="title-box">
                                            <em class="title">${dayEl.title}</em>
                                        </div>
                                        <div class="view-info">
                                            ${upEl}
                                            <img src="${dayEl.read}" alt="사람 아이콘">
                                            <span class="view-people">${dayEl.view}만명</span>
                                        </div>
                                    </div>
                                </a>
                            </li>`;
            
                });
                // console.log(html);
                const list = document.querySelector('.sc-array .day-wrap .product-list');

            
                list.innerHTML = html; //변수
            })

        // $(this).addClass('active').siblings().removeClass('active');
    });

    $('.arrayDay-item:nth-child(1)').trigger('click');

        // a = $('.arrayDay-item').ep(0);
// console.log(a);




    // 요일별 클릭

    $('.sc-array .arrayDay-item').click(function(e){
        e.preventDefault();
        // day = $(this).attr('name'); /*name 속성의 값 */ 
        $(this).addClass('active').siblings().removeClass('active');

        $('.dayMore-box').addClass('active').siblings().removeClass('active');
        // $(day).addClass('active').siblings().removeClass('active'); 
        /* 나를 제외한 클래스 없애기 */
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
    });



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