const ulElement = document.querySelectorAll('li a');
const ulActiveElement = document.querySelector('li a.active');
const line = document.querySelector('.line');
const infoSlide = document.querySelector('.box-text');
const slider = document.querySelector('.slider');
const btnSlide = document.querySelector('.btn-slide');

const bookStore = {
    listBooks: [
        {
            name: '',
            image: '',
            description: '',
            price: ''
        }
    ],

    listBanners : [
        {
            image: './asset/img/doramon3.jpg',
            title: 'Full Bộ Truyện Doramon',
            description: 'Nội dung series kể về cuộc đời bất hạnh của cậu bé Nobita và chú mèo máy Doraemon từ tương lai đến để giúp cuộc sống của cậu bé trở nên tốt hơn.'
        },
        {
            image: './asset/img/sach2.jpg',
            title: 'Truyện Cổ Tích Việt Nam',
            description: 'Văn học Việt Nam Truyện cổ tích Việt Nam là những truyện cổ tích được người Việt truyền miệng trong dân gian để kể lại những câu chuyện tưởng tượng xoay quanh một số nhân vật và sự kiện khác nhau.'
        },
        {
            image: './asset/img/tgdq1.jpg',
            title: 'Thanh Gươm Diệt Quỷ - Kimetsu No Yaiba',
            description: 'Bộ Sách Thanh Gươm Diệt Quỷ - Kimetsu No Yaiba (Trọn Bộ 23 Tập) Vào thời Taisho, có một cậu bé bán than với tấm lòng nhân hậu tên Tanjiro. Những ngày yên bình đã chẳng còn khi Quỷ đến tàn sát cả gia đình cậu, chỉ duy nhất người em gái Nezuko còn sống sót nhưng lại bị biến thành Quỷ.'
        },
    ],

    currentIndex : 0,
    marginLeftSlide : 0,

    render : function (){
        const html = this.listBanners.map(banner => {
            return `<div class="slide">
            <img src="${banner.image}">
            </div>`
        });
        slider.innerHTML = html.join('');
        const lengthBanner = this.listBanners.length;
        let btn = '<div class="btn active"></div>';
        for (let i = 1 ; i < lengthBanner ; i++){
            btn += '<div class="btn"></div>'
        }
        btnSlide.innerHTML = btn;
        const infos = this.listBanners.map(banner => {
            return {
                title : banner.title,
                description :  banner.description
            };
        });
        let info = `<div class="info active">
                <div class="title">${infos[0].title}</div>
                <div class="description">${infos[0].description}</div>
                </div>`;
        for (let i = 1 ; i < lengthBanner ; i++) {
            info += `<div class="info">
                <div class="title">${infos[i].title}</div>
                <div class="description">${infos[i].description}</div>
                </div>`;
        }
        infoSlide.innerHTML = info;
    },

    loadSlide : function(){
        const _This = this;
        const slides = document.querySelectorAll('.slide');
        const btnSlide = document.querySelectorAll('.btn-slide .btn');
        const info = document.querySelectorAll('.info');

        btnSlide.forEach((btn , index) => {
            btn.onclick = function() {               
                info[_This.currentIndex].classList.remove('active')
                _This.currentIndex = index;
                slides[0].style.marginLeft = _This.marginLeftSlide + '%';
                if (_This.marginLeftSlide == 0){
                    _This.marginLeftSlide = 20;
                }
                _This.marginLeftSlide = 20 * index;
                document.querySelector('.btn.active').classList.remove('active');
                btnSlide[_This.currentIndex].classList.add('active');
                slides[0].style.marginLeft = -_This.marginLeftSlide + '%';
                info[_This.currentIndex].classList.add('active');
            }
        })
        setInterval(() => {
            info[_This.currentIndex].classList.remove('active')
            _This.currentIndex++;
            if ( _This.currentIndex > slides.length - 1) {
                _This.currentIndex = 0;
            }
            document.querySelector('.btn.active').classList.remove('active');
            btnSlide[_This.currentIndex].classList.add('active');
            slides[0].style.marginLeft = _This.marginLeftSlide + '%';
            _This.marginLeftSlide += 20;
            if (_This.marginLeftSlide > ((_This.listBanners.length-1)*20)) {
                _This.marginLeftSlide = 0;
            }
            slides[0].style.marginLeft = -_This.marginLeftSlide + '%';
            info[_This.currentIndex].classList.add('active');
        }, 5000)
    },

    lineUl : function (index) {
        line.style.width = ulElement[index].offsetWidth + 'px';
        line.style.left = ulElement[index].offsetLeft + 'px';
    },

    lineUl1 : function () {
        line.style.width = ulActiveElement.offsetWidth + 6 + 'px';
        line.style.left = (ulActiveElement.offsetLeft - 26) + 'px';
    },


    handleEvents : function() {
        const _This = this;
        //Xử lý line khi active vô navigation
        ulElement.forEach((li , index) => {
            li.onclick = function(e) {
                document.querySelector('li a.active').classList.remove('active');
                li.classList.add('active');
                _This.lineUl(index);
            };
        });

    },

    start : function(){
        this.lineUl1();

        this.render();

        this.loadSlide();

        this.handleEvents();
    }
}

bookStore.start();
