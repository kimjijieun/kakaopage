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
          scrollbar: {
            el: ".swiper-scrollbar",
          },
        });
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