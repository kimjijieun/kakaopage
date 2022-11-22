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
    
    // if(jQuery.isEmptyObject(json_object)) {}
    // if(true === jQuery.isEmptyObject(json_object)) {}
	


    .then((json) => {
      // alert(json);
            const freeToon = json.freeToon;
        
            let html = '';
            freeToon.forEach(freeToon => {
        
                html += `<li class="product-item">
                <a href="${freeToon.link}">
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
                            <img src=".${freeToon.upIcon}" alt="업데이트">
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


            // function isEmptyObj(obj)  {
            //   // 객체 타입체크
            //   if(obj.constructor !== Object)  {
            //     return false;
            //   }
            //   return true;
            // }
        
            list.innerHTML = html; //변수
        })



//인기 웹툰

    fetch("./asset/data/product.json")
    .then((response) => response.json())
    .then((json) => {

            const publicToon = json.publicToon;
        
            let html = '';
            publicToon.forEach(publicToon => {
        
                html += `<li class="product-item">
                          <a href="${freeNovel.link}">
                              <div class="img-box">
                                  <div class="badge">
                                      <img src="${publicToon.webtoonIcon}" alt="웹툰">
                                  </div>
                                  <img src="${publicToon.imgSrc}" alt="회귀한 영애는 디저트 가게를 연다">
                              </div>
                              <div class="txt-wrap">
                                  <div class="title-box">
                                      <img src="${publicToon.updateIcon}" alt="업데이트">
                                      <em class="title">${publicToon.title}</em>
                                  </div>
                                  
                                  <div class="view-info">
                                      <img src="${publicToon.readIcon}" alt="사람 아이콘">
                                      <span class="view-people">${publicToon.viewPeople}</span>
                                      <span class="view-writer">${publicToon.viewWriter}</span>
                                  </div>
                              </div>
                          </a>
                      </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-public-toon .product-list');

        
            list.innerHTML = html; //변수
        })




    //월요일
    fetch("./asset/data/product.json")
    .then((response) => response.json())
    .then((json) => {

            const webMonday = json.webMonday;
        
            let html = '';
            webMonday.forEach(webMonday => {
        
                html += `<li class="product-item">
                            <a href="">
                                <div class="img-box">
                                    <div class="badge">
                                        <img src="${webMonday.starIcon}" alt="별점" class="icon-star">
                                        <p class="img-rank">${webMonday.rankNumber}</p>
                                        <img src="${webMonday.waitIcon}" alt="" class="icon-wait">
                                    </div>
                                    <img src="${webMonday.imgSrc}" alt="도굴왕">
                                </div>
                                <div class="txt-wrap">
                                    <div class="title-box">
                                        <em class="title">${webMonday.title}</em>
                                    </div>
                                    <div class="view-info">
                                        <img src="${webMonday.updateIcon}" alt="업데이트" class="icon-up">
                                        <img src="${webMonday.readIcon}" alt="사람 아이콘">
                                        <span class="view-people">${webMonday.viewPeople}</span>
                                    </div>
                                </div>
                            </a>
                        </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-array .day-wrap.mon .product-list');

        
            list.innerHTML = html; //변수
        })

    //화요일
    fetch("./asset/data/product.json")
    .then((response) => response.json())
    .then((json) => {

            const webTuesday = json.webTuesday;
        
            let html = '';
            webTuesday.forEach(webTuesday => {
        
                html += `<li class="product-item">
                            <a href="">
                                <div class="img-box">
                                    <div class="badge">
                                        <img src="${webTuesday.starIcon}" alt="별점" class="icon-star">
                                        <p class="img-rank">${webTuesday.rankNumber}</p>
                                        <img src="${webTuesday.waitIcon}" alt="" class="icon-wait">
                                    </div>
                                    <img src="${webTuesday.imgSrc}" alt="도굴왕">
                                </div>
                                <div class="txt-wrap">
                                    <div class="title-box">
                                        <em class="title">${webTuesday.title}</em>
                                    </div>
                                    <div class="view-info">
                                        <img src="${webTuesday.updateIcon}" alt="업데이트" class="icon-up">
                                        <img src="${webTuesday.readIcon}" alt="사람 아이콘">
                                        <span class="view-people">${webTuesday.viewPeople}</span>
                                    </div>
                                </div>
                            </a>
                        </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-array .day-wrap.tue .product-list');

        
            list.innerHTML = html; //변수
        })

    //수요일
    fetch("./asset/data/product.json")
    .then((response) => response.json())
    .then((json) => {

            const webWednesday = json.webWednesday;
        
            let html = '';
            webWednesday.forEach(webWednesday => {
        
                html += `<li class="product-item">
                            <a href="">
                                <div class="img-box">
                                    <div class="badge">
                                        <img src="${webWednesday.starIcon}" alt="별점" class="icon-star">
                                        <p class="img-rank">${webWednesday.rankNumber}</p>
                                        <img src="${webWednesday.waitIcon}" alt="" class="icon-wait">
                                    </div>
                                    <img src="${webWednesday.imgSrc}" alt="도굴왕">
                                </div>
                                <div class="txt-wrap">
                                    <div class="title-box">
                                        <em class="title">${webWednesday.title}</em>
                                    </div>
                                    <div class="view-info">
                                        <img src="${webWednesday.updateIcon}" alt="업데이트" class="icon-up">
                                        <img src="${webWednesday.readIcon}" alt="사람 아이콘">
                                        <span class="view-people">${webWednesday.viewPeople}</span>
                                    </div>
                                </div>
                            </a>
                        </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-array .day-wrap.wed .product-list');

        
            list.innerHTML = html; //변수
        })

    //목요일
    fetch("./asset/data/product.json")
    .then((response) => response.json())
    .then((json) => {

            const webThursday = json.webThursday;
        
            let html = '';
            webThursday.forEach(webThursday => {
        
                html += `<li class="product-item">
                            <a href="">
                                <div class="img-box">
                                    <div class="badge">
                                        <img src="${webThursday.starIcon}" alt="별점" class="icon-star">
                                        <p class="img-rank">${webThursday.rankNumber}</p>
                                        <img src="${webThursday.waitIcon}" alt="" class="icon-wait">
                                    </div>
                                    <img src="${webThursday.imgSrc}" alt="도굴왕">
                                </div>
                                <div class="txt-wrap">
                                    <div class="title-box">
                                        <em class="title">${webThursday.title}</em>
                                    </div>
                                    <div class="view-info">
                                        <img src="${webThursday.updateIcon}" alt="업데이트" class="icon-up">
                                        <img src="${webThursday.readIcon}" alt="사람 아이콘">
                                        <span class="view-people">${webThursday.viewPeople}</span>
                                    </div>
                                </div>
                            </a>
                        </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-array .day-wrap.thu .product-list');

        
            list.innerHTML = html; //변수
        })

    //금요일
    fetch("./asset/data/product.json")
    .then((response) => response.json())
    .then((json) => {

            const webFriday = json.webFriday;
        
            let html = '';
            webFriday.forEach(webFriday => {
        
                html += `<li class="product-item">
                            <a href="">
                                <div class="img-box">
                                    <div class="badge">
                                        <img src="${webFriday.starIcon}" alt="별점" class="icon-star">
                                        <p class="img-rank">${webFriday.rankNumber}</p>
                                        <img src="${webFriday.waitIcon}" alt="" class="icon-wait">
                                    </div>
                                    <img src="${webFriday.imgSrc}" alt="도굴왕">
                                </div>
                                <div class="txt-wrap">
                                    <div class="title-box">
                                        <em class="title">${webFriday.title}</em>
                                    </div>
                                    <div class="view-info">
                                        <img src="${webFriday.updateIcon}" alt="업데이트" class="icon-up">
                                        <img src="${webFriday.readIcon}" alt="사람 아이콘">
                                        <span class="view-people">${webFriday.viewPeople}</span>
                                    </div>
                                </div>
                            </a>
                        </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-array .day-wrap.fri .product-list');

        
            list.innerHTML = html; //변수
        })

    //토요일
    fetch("./asset/data/product.json")
    .then((response) => response.json())
    .then((json) => {

            const webSaturday = json.webSaturday;
        
            let html = '';
            webSaturday.forEach(webSaturday => {
        
                html += `<li class="product-item">
                            <a href="">
                                <div class="img-box">
                                    <div class="badge">
                                        <img src="${webSaturday.starIcon}" alt="별점" class="icon-star">
                                        <p class="img-rank">${webSaturday.rankNumber}</p>
                                        <img src="${webSaturday.waitIcon}" alt="" class="icon-wait">
                                    </div>
                                    <img src="${webSaturday.imgSrc}" alt="도굴왕">
                                </div>
                                <div class="txt-wrap">
                                    <div class="title-box">
                                        <em class="title">${webSaturday.title}</em>
                                    </div>
                                    <div class="view-info">
                                        <img src="${webSaturday.updateIcon}" alt="업데이트" class="icon-up">
                                        <img src="${webSaturday.readIcon}" alt="사람 아이콘">
                                        <span class="view-people">${webSaturday.viewPeople}</span>
                                    </div>
                                </div>
                            </a>
                        </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-array .day-wrap.sat .product-list');

        
            list.innerHTML = html; //변수
        })

    //일요일
    fetch("./asset/data/product.json")
    .then((response) => response.json())
    .then((json) => {

            const webSunday = json.webSunday;
        
            let html = '';
            webSunday.forEach(webSunday => {
        
                html += `<li class="product-item">
                            <a href="">
                                <div class="img-box">
                                    <div class="badge">
                                        <img src="${webSunday.starIcon}" alt="별점" class="icon-star">
                                        <p class="img-rank">${webSunday.rankNumber}</p>
                                        <img src="${webSunday.waitIcon}" alt="" class="icon-wait">
                                    </div>
                                    <img src="${webSunday.imgSrc}" alt="도굴왕">
                                </div>
                                <div class="txt-wrap">
                                    <div class="title-box">
                                        <em class="title">${webSunday.title}</em>
                                    </div>
                                    <div class="view-info">
                                        <img src="${webSunday.updateIcon}" alt="업데이트" class="icon-up">
                                        <img src="${webSunday.readIcon}" alt="사람 아이콘">
                                        <span class="view-people">${webSunday.viewPeople}</span>
                                    </div>
                                </div>
                            </a>
                        </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-array .day-wrap.sun .product-list');

        
            list.innerHTML = html; //변수
        })

    //완결
    fetch("./asset/data/product.json")
    .then((response) => response.json())
    .then((json) => {

            const webEnding = json.webEnding;
        
            let html = '';
            webEnding.forEach(webEnding => {
        
                html += `<li class="product-item">
                            <a href="">
                                <div class="img-box">
                                    <div class="badge">
                                        <img src="${webEnding.starIcon}" alt="별점" class="icon-star">
                                        <p class="img-rank">${webEnding.rankNumber}</p>
                                        <img src="${webEnding.waitIcon}" alt="" class="icon-wait">
                                    </div>
                                    <img src="${webEnding.imgSrc}" alt="도굴왕">
                                </div>
                                <div class="txt-wrap">
                                    <div class="title-box">
                                        <em class="title">${webEnding.title}</em>
                                    </div>
                                    <div class="view-info">
                                        <img src="${webEnding.updateIcon}" alt="업데이트" class="icon-up">
                                        <img src="${webEnding.readIcon}" alt="사람 아이콘">
                                        <span class="view-people">${webEnding.viewPeople}</span>
                                    </div>
                                </div>
                            </a>
                        </li>`;
        
            });
            // console.log(html);
            const list = document.querySelector('.sc-array .day-wrap.end .product-list');

        
            list.innerHTML = html; //변수
        })



        


    // 요일별 클릭

    $('.sc-array .arrayDay-item').click(function(e){
        e.preventDefault();
        day = $(this).attr('name'); /*name 속성의 값 */ 
        $(this).addClass('active').siblings().removeClass('active');

        $(day).addClass('active').siblings().removeClass('active'); 
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