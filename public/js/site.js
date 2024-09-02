class Site{
    #quest_item = 0;
    #quest_area = 0;
    constructor() {}

    homeSlideQuest = () => {
        $('.home-quest__slide--previous').click(() => {
            if(this.#quest_area === 0){
                this.#quest_area = 1;
            } else{
                this.#quest_area = this.#quest_area - 1;
            }
            if(this.#quest_item === 0){
                this.#quest_item = 100;
            } else{
                this.#quest_item = this.#quest_item - 100;
            }
            console.log(this.#quest_item)
            console.log(this.#quest_area)
            $('.home-quest__list').css('transform', `translateX(-${this.#quest_item}%)`)
            for (let i = 0; i < document.getElementsByClassName('home-quest__slide--stt').length; i++) {
                document.getElementsByClassName('home-quest__slide--stt')[i].style = '';
            }
            document.getElementsByClassName('home-quest__slide--stt')[this.#quest_area].style = 'background-color: #564A87;';
        })

        $('.home-quest__slide--next').click(() => {
            if(this.#quest_area === 1){
                this.#quest_area = 0;
            } else{
                this.#quest_area = this.#quest_area + 1;
            }
            if(this.#quest_item === 100){
                this.#quest_item = 0;
            } else{
                this.#quest_item = this.#quest_item + 100;
            }
            console.log(this.#quest_item)
            console.log(this.#quest_area)
            $('.home-quest__list').css('transform', `translateX(-${this.#quest_item}%)`)
            for (let i = 0; i < document.getElementsByClassName('home-quest__slide--stt').length; i++) {
                document.getElementsByClassName('home-quest__slide--stt')[i].style = '';
            }
            document.getElementsByClassName('home-quest__slide--stt')[this.#quest_area].style = 'background-color: #564A87;';
        })
        this.updateHomeQuestUI();
    }

    updateHomeQuestUI = () => {
        $('.home-quest__list').css('transform', `translateX(${this.#quest_item})`)
        for (let i = 0; i < document.getElementsByClassName('home-quest__slide--stt').length; i++) {
            document.getElementsByClassName('home-quest__slide--stt')[i].style = '';
        }
        document.getElementsByClassName('home-quest__slide--stt')[this.#quest_area].style = 'background-color: #564A87;';
    }

    checkPathName = () => {
        for (let i = 0; i < document.getElementsByClassName('navbar-right__item').length; i++) {
            document.getElementsByClassName('navbar-right__item')[i].classList.remove('active-link-itz')
        }
        let path_name = window.location.pathname;
        if (path_name === '/' || path_name === '/home' || path_name === '/index.php'){
            $('.navbar-right__item-home').addClass('active-link-itz')
        } else if(path_name === '/info'){
            $('.navbar-right__item-about').addClass('active-link-itz')
        } else if(path_name === '/activity'){
            $('.navbar-right__item-activity').addClass('active-link-itz')
        } else if(path_name === '/achievement'){
            $('.navbar-right__item-award').addClass('active-link-itz')
        } else if(path_name === '/recruitment'){
            $('.navbar-right__item-recruit').addClass('active-link-itz')
        }
    }

    onClickResponsiveNavbar = () => {
        $('.navbar-right__icon-item-bar').click(() => {
            $('.navbar-right__icon-item-bar').addClass('d-none');
            $('.navbar-right__icon-item-xmark').removeClass('d-none');
            $('.navbar-right__responsive').removeClass('d-none')
            // $('.navbar-right__responsive').css('transform', 'translateY(-50%) translateX(0%)')
        })

        $('.navbar-right__icon-item-xmark').click(() => {
            $('.navbar-right__icon-item-bar').removeClass('d-none');
            $('.navbar-right__icon-item-xmark').addClass('d-none');
            $('.navbar-right__responsive').addClass('d-none')
            // $('.navbar-right__responsive').css('transform', 'translateY(-50%) translateX(100%)')
        })
    }

    onClickNavbarItem = () => {
        $('.navbar-right__responsive-item').click(function () {
            window.location.href = $(this).data('href');
        })
    }

    scrollToTop = () => {
        let scrollTopBtn = $(".scroll-top__btn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.addClass('d-block');
            scrollTopBtn.removeClass('d-none');
        } else {
            scrollTopBtn.addClass('d-none');
            scrollTopBtn.removeClass('d-block');
        }
        scrollTopBtn.click(() => {
            document.body.scrollTop = 0; // Safari
            document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, and Opera
        })
    }
}

export default new Site;