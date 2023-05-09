$(function(){

    ScrollTrigger.matchMedia({
        // large
        "(min-width: 768px)": function() {

            /**sc-news news-item hover 효과 */
            $('.sc-news .news-item').hover(function(){
                $(this).toggleClass('on')
            })           

        },
        // small
        "(max-width: 767px)": function() {
            
        },
        // all
        "all": function() {

            /**header select-area 열고 닫기 */
            $('.header .btn-select').click(function(){
                $('.header .select-box').toggleClass('on');
                $('.header .btn-select').toggleClass('on');
            })

            /**header nav-list 열고 닫기 */
            $('.gnb .nav').click(function(e){
                e.preventDefault();

                bgheight = $(this).siblings('.navsub-list').outerHeight();


                if ($(this).siblings('.navsub-list').length > 0) {
                    if($(this).hasClass('on')){
                        bgheight=0;
                        $('body').removeClass('hidden');
                        $('.navsub-list').removeClass('on');
                        $('.header').removeClass('on');
                        $('.gnb .nav').removeClass('on').siblings('.navsub-list').removeClass('on');
                        // $('.header').removeClass('show')
                        // $('.gnb .nav').removeClass('show');
                        // $('.gnb .logo svg').removeClass('show');
                        // $('.gnb .btn-select').removeClass('show');
                        // $('.gnb .btn-search').removeClass('show');
                        // $('.gnb .btn-linkshare').removeClass('show');
                        // $('.gnb .m-btn-menu').removeClass('show');
                    }else{
                        $('.navsub-list').removeClass('on');
                        $('.gnb .nav').removeClass('on').siblings('.navsub-list').removeClass('on');
                        $(this).addClass('on').siblings('.navsub-list').addClass('on');
                        $('.header').addClass('on');
                        $('body').addClass('hidden');
                        // $('.header').addClass('show')
                        // $('.gnb .nav').addClass('show');
                        // $('.gnb .logo svg').addClass('show');
                        // $('.gnb .btn-select').addClass('show');
                        // $('.gnb .btn-search').addClass('show');
                        // $('.gnb .btn-linkshare').addClass('show');
                        // $('.gnb .m-btn-menu').addClass('show');
                    }
                }else{
                    bgheight=0;
                    $('body').removeClass('hidden');
                    $('.navsub-list').removeClass('on');
                    $('.header').removeClass('on');
                    $('.gnb .nav').removeClass('on').siblings('.navsub-list').removeClass('on');
                    // $('.header').removeClass('show')
                    // $('.gnb .nav').removeClass('show');
                    // $('.gnb .logo svg').removeClass('show');
                    // $('.gnb .btn-select').removeClass('show');
                    // $('.gnb .btn-search').removeClass('show');
                    // $('.gnb .btn-linkshare').removeClass('show');
                    // $('.gnb .m-btn-menu').removeClass('show');
                }

                $('.bg-area').height(bgheight);



                // if ($(this).hasClass('on')) {
                //     if ($(this).siblings('.navsub-list').length > 0) {
                //         $(this).addClass('on');
                //         $(this).siblings('.navsub-list').addClass('on');
                //         $(this).parent().siblings().children().removeClass('on');
                //         $('.header').addClass('on');
                //         $('body').addClass('hidden');
                //         $('.bg-area').addClass('on');
                //         $('.bg-area').height(bgheight);
                //     // }
                //     } else{

                //         $(this).removeClass('on');
                //         $(this).siblings('.navsub-list').removeClass('on');
                //         $('.header').removeClass('on');
                //         $('body').removeClass('hidden');
                //         $('.bg-area').removeClass('on');
                //     }
                // } else {
                //     $(this).addClass('on');
                //     $(this).siblings('.navsub-list').addClass('on');
                //     $(this).parent().siblings().children().removeClass('on');
                //     $('.header').addClass('on');
                //     $('body').addClass('hidden');
                    
                // }
                
            })

            /**header search-box 열고 닫기 */
            $('.header .btn-search').click(function(){
                $('.group-search').toggleClass('on');
            })
            $('.group-search .btn-close').click(function(){
                $('.group-search').removeClass('on');
            })

            /**header sns-box 열고 닫기 */
            $('.header .btn-linkshare').click(function(){
                $('.header .sns-box').toggleClass('on');
            })

            /**header scroll 효과 */
            let lastScroll = 0;
            $(window).scroll(function(){
                curr = $(this).scrollTop();
        
                if (curr > 0) {
                    $('header').addClass('show');
                    $('.gnb .nav').addClass('show');
                    $('.gnb .logo svg').addClass('show');
                    $('.gnb .btn-select').addClass('show');
                    $('.gnb .btn-search').addClass('show');
                    $('.gnb .btn-linkshare').addClass('show');
                    $('.gnb .m-btn-menu').addClass('show');
                    
                } else {
                    $('header').removeClass('show');
                    $('.gnb .nav').removeClass('show');
                    $('.gnb .logo svg').removeClass('show');
                    $('.gnb .btn-select').removeClass('show');
                    $('.gnb .btn-search').removeClass('show');
                    $('.gnb .btn-linkshare').removeClass('show');
                    $('.gnb .m-btn-menu').removeClass('show');
                }
            })
        
            /**side-nav (group-category) 열고 닫기 */
            $('.side-nav .btn-menu').click(function(){
                $('.group-category').addClass('on')
                $('body').addClass('scrollhidden');
                // $('.side-nav .sub-list').addClass('on');
                // $('.side-nav').addClass('.hidemenu');
            })
            $('.group-category .btn-close').click(function(){
                $('.group-category').removeClass('on')
                $('body').removeClass('scrollhidden');
                // $('.side-nav .sub-list').removeClass('on');
                // $('.side-nav').removeClass('.hidemenu');
            })

            /**header (m-group-category) 열고 닫기 */
            $('.gnb .m-btn-menu').click(function(){
                $('.m-group-category').addClass('on')
                $('body').addClass('scrollhidden');
            })
            $('.m-group-category .category-area .m-btn-close').click(function(){
                $('.m-group-category').removeClass('on')
                $('body').removeClass('scrollhidden');
            })

            /**header (m-group-category) tab기능 */
            $('.m-group-category .member-tab .btn-mem').click(function(){

                mem = $(this).data('mem');
            
                $(this).addClass('active').siblings().removeClass('active');
                $(mem).addClass('active').siblings().removeClass('active');
            
            })

            /**header (m-group-category) 메뉴 열고 닫기 기능 */
            $('.m-group-category .nav').click(function(e){
                e.preventDefault();
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    $(this).siblings('.navsub-list').slideUp();
                  } else {
                    $(this).addClass('on');
                    $(this).siblings('.navsub-list').slideDown();
                    $(this).parent().siblings().children('.navsub-list').slideUp();
                  }
            })
            $('.m-group-category .navsub').click(function(e){
                e.preventDefault();
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    $(this).siblings('.sub-list').slideUp();
                  } else {
                    $(this).addClass('on');
                    $(this).siblings('.sub-list').slideDown();
                    $(this).parent().siblings().children('.sub-list').slideUp();
                  }
            })

            /**side-nav(group-category) hover시 원 생김 */
            $('.group-category .nav-item').hover(function(){
                $(this).children().toggleClass('on');
            })

            /**side-nav members 열고 닫기 */
            $('.side-nav .members').click(function(e){
                e.preventDefault();
                $(this).siblings('.members-box').addClass('on');
                $(this).parent().siblings().children().removeClass('on');
            })
            $('.side-nav .members-list .btn-close').click(function(){
                $(this).parent().removeClass('on');
            })

            /**side-nav scroll 이동 기능 */
            $('.side-nav .dot').click(function(){
                move = $(this).data('move');
            
                $(this).addClass('active').parent().siblings().children().removeClass('active');
                
                scrollmove = $(move).offset().top;

                window.scrollTo({top:scrollmove, behavior:'smooth'});

            })

            /**side-nav btn-fix 홈페이지 맨위로 올리기 기능 */
            $('.side-nav .btn-top').click(function(){
                window.scrollTo({top:0,behavior:"smooth"});
            })
            $(window).scroll(function(){
                curr = $(this).scrollTop();
                here = $('.sc-visual .control-box').offset().top;
                if (curr >= here) {
                    $('.btn-top').addClass('show');
                  } else {
                    $('.btn-top').removeClass('show');
                  }
            })

            /**sc-visual 슬라이드 */
            const visualSlide = new Swiper('.visual-slide',{
                effect:'fade',
                speed:0,
                loop:true,
                simulateTouch:false,
                loopAdditionalSlides: true,
                autoplay:{
                    delay:10000,
                    disableOnInteraction:false
                },
                navigation:{
                    prevEl:'.sc-visual .btn-prev',
                    nextEl:'.sc-visual .btn-next'
                },
                pagination:{
                    clickable:true,
                    el:'.sc-visual .swiper-pagination'
                },
                observer:true,
                observerParents:true
            })
            visualSlide.on('slideChange',function(){
                guage.restart()
            })
            total = document.querySelector('#svg path').getTotalLength();
            gsap.set('#curr',{'stroke-dasharray':total,'stroke-dashoffset':total,})
            const guage = gsap.to('#curr',10,{
                ease:'none',
                'stroke-dashoffset':0,
                paused:true,
            })
            guage.play()
        

            /**sc-visual 슬라이드 재생,멈춤 */
            $('.sc-visual .btn-pause').click(function(){
                if ($(this).hasClass('active')) {
                    visualSlide.autoplay.start();
                    guage.play()
                } else {
                    visualSlide.autoplay.stop();
                    guage.pause()
                }
                $(this).toggleClass('active');
            })

            /**sc-schedule 슬라이드 */
            const scheduleSlide = new Swiper('.schedule-slide',{
                speed:1000,
                slidesPerView:2.2,
                spaceBetween:15,
                navigation:{
                    prevEl:'.control-box .btn-prev',
                    nextEl:'.control-box .btn-next'
                },
                breakpoints:{
                    768:{
                        slidesPerView:3.3,
                        spaceBetween:30,
                    },
                    1280:{
                        slidesPerView:3,
                        spaceBetween:35,
                    },
                    1460:{
                        slidesPerView:5,
                        spaceBetween:35,
                    }
                }
            })

            /**sc-college tab기능 */
            $('.sc-college .btn-tab').click(function(){

                target = $(this).data('target');
                
                $(this).addClass('active').siblings().removeClass('active');
                $(target).addClass('active').siblings().removeClass('active');
                
              })

            /**sc-notice tab기능 */
            $('.sc-notice .btn-tab').click(function(){

                tab = $(this).data('tab');
            
                $(this).addClass('active').siblings().removeClass('active');
                $(tab).addClass('active').siblings().removeClass('active');
            
            })

            /**sc-college 슬라이드 */
            const collegeSlide = new Swiper('.college-slide',{
                speed:2000,
                centeredSlides: true,
                slidesPerView:1,
                spaceBetween:80,
                navigation:{
                    prevEl:'.control-box .btn-prev',
                    nextEl:'.control-box .btn-next'
                },
                pagination:{
                    el:'.sc-college .fraction',
                    type: 'fraction'
                },
                observer:true,
                observerParents:true,
                breakpoints:{
                    768:{
                        slidesPerView:1,
                        spaceBetween:30,
                    },
                    1280:{
                        slidesPerView:1,
                        // slidesPerView:1.5,
                        spaceBetween:60,
                    },
                    1460:{
                        slidesPerView:"auto",
                        // slidesPerView:1.5,
                        spaceBetween:60,
                    }
                }
            })

            /**sc-college img1~6 슬라이드 */
            const img1Slide = new Swiper('.img1-slide',{
                speed:800,
                effect:'fade',
                autoplay:{
                    delay:2500,
                    disableOnInteraction:false
                },
                simulateTouch:false,
                
            })
            const img2Slide = new Swiper('.img2-slide',{
                speed:800,
                effect:'fade',
                autoplay:{
                    delay:2500,
                    disableOnInteraction:false
                },
                simulateTouch:false,
            })
            const img3Slide = new Swiper('.img3-slide',{
                speed:800,
                effect:'fade',
                autoplay:{
                    delay:2500,
                    disableOnInteraction:false
                },
                simulateTouch:false,
            })
            const img4Slide = new Swiper('.img4-slide',{
                speed:800,
                effect:'fade',
                autoplay:{
                    delay:2500,
                    disableOnInteraction:false
                },
                simulateTouch:false,
            })
            const img5Slide = new Swiper('.img5-slide',{
                speed:800,
                effect:'fade',
                autoplay:{
                    delay:2500,
                    disableOnInteraction:false
                },
                simulateTouch:false,
            })
            const img6Slide = new Swiper('.img6-slide',{
                speed:800,
                effect:'fade',
                autoplay:{
                    delay:2500,
                    disableOnInteraction:false
                },
                simulateTouch:false,
            })

            /**text-slide */
            const s1 = new Swiper('.s1',{
                simulateTouch:false,
                autoplay: {
                  delay: 0,
                  disableOnInteraction: false,
                },
                speed: 20000,
                loop: true,
                loopAdditionalSlides: 1,
                slidesPerView: 'auto',
            })
            const s2 = new Swiper('.s2',{
                simulateTouch:false,
                autoplay: {
                  delay: 0,
                  disableOnInteraction: false,
                },
                speed: 20000,
                loop: true,
                loopAdditionalSlides: 1,
                slidesPerView: 'auto',
            })
            const s3 = new Swiper('.s3',{
                simulateTouch:false,
                autoplay: {
                  delay: 0,
                  disableOnInteraction: false,
                },
                speed: 20000,
                loop: true,
                loopAdditionalSlides: 1,
                slidesPerView: 'auto',
            })
            const s4 = new Swiper('.s4',{
                simulateTouch:false,
                autoplay: {
                  delay: 0,
                  disableOnInteraction: false,
                },
                speed: 20000,
                loop: true,
                loopAdditionalSlides: 1,
                slidesPerView: 'auto',
            })
            const s5 = new Swiper('.s5',{
                simulateTouch:false,
                autoplay: {
                  delay: 0,
                  disableOnInteraction: false,
                },
                speed: 20000,
                loop: true,
                loopAdditionalSlides: 1,
                slidesPerView: 'auto',
            })
            const s6 = new Swiper('.s6',{
                simulateTouch:false,
                autoplay: {
                  delay: 0,
                  disableOnInteraction: false,
                },
                speed: 20000,
                loop: true,
                loopAdditionalSlides: 1,
                slidesPerView: 'auto',
            })
            const s7 = new Swiper('.s7',{
                simulateTouch:false,
                autoplay: {
                  delay: 0,
                  disableOnInteraction: false,
                },
                speed: 20000,
                loop: true,
                loopAdditionalSlides: 1,
                slidesPerView: 'auto',
            })
            const s8 = new Swiper('.s8',{
                simulateTouch:false,
                autoplay: {
                  delay: 0,
                  disableOnInteraction: false,
                },
                speed: 20000,
                loop: true,
                loopAdditionalSlides: 1,
                slidesPerView: 'auto',
            })


            /**sc-notice 슬라이드 */
            const noticeSlide = new Swiper('.notice-slide',{
                speed:2000,
                slidesPerView:'auto',
                spaceBetween:30,
            })
            const degreeSlide = new Swiper('.degree-slide',{
                speed:2000,
                slidesPerView:'auto',
                spaceBetween:30,
            })
            const scholarshipSlide = new Swiper('.scholarship-slide',{
                speed:2000,
                slidesPerView:'auto',
                spaceBetween:30,
            })
            const empoyeeSlide = new Swiper('.empoyee-slide',{
                speed:2000,
                slidesPerView:'auto',
                spaceBetween:30,
            })

            /**sc-edu 슬라이드 */
            const eduSlide = new Swiper('.edu-slide',{
                speed:2000,
                navigation:{
                    prevEl:'.btn-prev',
                    nextEl:'.btn-next'
                },
                pagination:{
                    el:'.fraction',
                    type: "fraction",
                }
            })

            /**sc-edu img 슬라이드 */
            const m1Slide = new Swiper('.m1-slide',{
                speed:2000,
                slidesPerView:1,
                spaceBetween:30,
                pagination:{
                    el:'.swiper-pagination',
                    clickable:true,
                },
                observer:true,
                observerParents:true,
                nested: true
            })

            /**sc-edu tab기능 */
            $('.sc-edu .btn-img').hover(function(){

                img = $(this).data('img');
            
                $(this).addClass('active').siblings().removeClass('active');
                $(img).addClass('active').siblings().removeClass('active');
            })
            $('.sc-edu .btn-img').hover(function(){

                img2 = $(this).data('img2');
            
                $(this).addClass('active').siblings().removeClass('active');
                $(img2).addClass('active').siblings().removeClass('active');
            })
            $('.sc-edu .btn-img').hover(function(){

                img3 = $(this).data('img3');
            
                $(this).addClass('active').siblings().removeClass('active');
                $(img3).addClass('active').siblings().removeClass('active');
            })
            $('.sc-edu .btn-img').hover(function(){

                img4 = $(this).data('img4');
            
                $(this).addClass('active').siblings().removeClass('active');
                $(img4).addClass('active').siblings().removeClass('active');
            })
            $('.sc-edu .btn-img').hover(function(){

                img5 = $(this).data('img5');
            
                $(this).addClass('active').siblings().removeClass('active');
                $(img5).addClass('active').siblings().removeClass('active');
            })
            $('.sc-edu .btn-img').hover(function(){

                img6 = $(this).data('img6');
            
                $(this).addClass('active').siblings().removeClass('active');
                $(img6).addClass('active').siblings().removeClass('active');
            })
            $('.sc-edu .btn-img').hover(function(){

                img7 = $(this).data('img7');
            
                $(this).addClass('active').siblings().removeClass('active');
                $(img7).addClass('active').siblings().removeClass('active');
            })
            $('.sc-edu .btn-img').hover(function(){

                img8 = $(this).data('img8');
            
                $(this).addClass('active').siblings().removeClass('active');
                $(img8).addClass('active').siblings().removeClass('active');
            })

            /**sc-event 슬라이드 */
            const eventSlide = new Swiper('.event-slide',{
                speed:2000,
                loop:true,
                slidesPerView:2.2,
                spaceBetween:15,
                autoplay:{
                    delay:3000,
                    disableOnInteraction:false
                },
                breakpoints:{
                    768:{
                        slidesPerView:2.5,
                        spaceBetween:30,
                    }
                }
            })

            /**footer 관련사이트 탭 */
            $('.footer .family-site').click(function(e){
                e.preventDefault();

                $(this).toggleClass('on');
                $(this).siblings().toggleClass('on');
            })

            /**side-nav dot */
            document.querySelectorAll('[data-area]').forEach(element => {

                startNum = element.dataset.start;
                startResult = (element.dataset.start)?startNum:'0%';

                ScrollTrigger.create({
                    trigger:element,
                    start:`${startResult} 0%`,
                    end:"bottom top",
                    // markers:true,
                    toggleClass: {targets: `.dot-item:nth-child(${element.dataset.area}) .dot`, className: "active"}
                })
            });

            /**나타나기 효과 */
            $('.fadein').each(function(i,element){
                gsap.to(element,{
                    scrollTrigger:{
                        trigger:element,
                        start:"0% 100%",
                        end:"100% 100%",
                        // markers:true,
                        scrub:1
                        },
                        ease:'none',
                        y: 0,
                        opacity:1
                })

            })
            $('.fadein2').each(function(i,element){
                gsap.to(element,{
                    scrollTrigger:{
                        trigger:element,
                        start:"0% 100%",
                        end:"10% 100%",
                        // markers:true,
                        scrub:1
                        },
                        ease:'none',
                        y: 0,
                        opacity:1
                })

            })



        }
            
    }) //match





 
})


$(document).ready(function(){
    $('.news-list').isotope({
        itemSelector: '.news-item',
        masonry: {
        //   columnWidth: 100,
            gutter: '.gutter-sizer'
        }
      });
})