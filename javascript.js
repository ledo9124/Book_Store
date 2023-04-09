const navElement = document.querySelector('.nav');
const ulElement = document.querySelectorAll('li a');
const ulActiveElement = document.querySelector('li a.active');
const line = document.querySelector('.line');
const infoSlide = document.querySelector('.box-text');
const slider = document.querySelector('.slider');
const btnSlide = document.querySelector('.btn-slide');
const productsElement = document.querySelector('.box-product');
const overlay = document.querySelector('.overlay');
const listCart = document.querySelector('.list-cart');
const iClose = document.querySelector('.i-close');
const navCart = document.querySelector('.cart-bar');
const listItemCart = document.querySelector('.list-item-cart');
const countProduct = document.querySelector('.count-product');
const totalElement = document.querySelector('.total-cart .total');


const bookStore = {
    
    listBooks: [
        book1 = [
            {
                id : 1,
                idName : 1,
                name: 'Nobita-Vũ trụ phiêu lưu kí',
                image: './asset/img/doramon1.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 2,
                idName : 1,
                name: 'Nobita và chuyến tàu tốc hành ngân hà',
                image: './asset/img/doramon2.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 3,
                idName : 1,
                name: 'Năm 2112 - Doramon ra đời',
                image: './asset/img/doramon3.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 4,
                idName : 1,
                name: 'Nobita và truyền thuyết vua mặt trời',
                image: './asset/img/doramon4.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 5,
                idName : 1,
                name: 'Chú khủng long của Nobita',
                image: './asset/img/doramon5.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 6,
                idName : 1,
                name: 'Nobita và hành tinh muông thú',
                image: './asset/img/doramon6.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 7,
                idName : 1,
                name: 'Đội quân Doramon',
                image: './asset/img/doramon7.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 8,
                idName : 1,
                name: 'Bí mật mê cung Bliki',
                image: './asset/img/doramon8.jpg',
                price: 99,
                quantity : 1
            },
        ],

        book2 = [
            {
                id : 9,
                idName : 2,
                name: 'Sọ Dừa',
                image: './asset/img/sach1.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 10,
                idName : 2,
                name: 'Thánh Gióng',
                image: './asset/img/sach2.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 11,
                idName : 2,
                name: 'Cây Khế',
                image: './asset/img/sach3.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 12,
                idName : 2,
                name: 'Chú Bé Thông Minh',
                image: './asset/img/sach4.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 13,
                idName : 2,
                name: 'Lạc Long Quân và Âu Cơ',
                image: './asset/img/sach5.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 14,
                idName : 2,
                name: 'Tấm Cám',
                image: './asset/img/sach6.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 15,
                idName : 2,
                name: 'Mỵ Châu Trọng Thuỷ',
                image: './asset/img/sach7.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 16,
                idName : 2,
                name: 'Thạch Sanh',
                image: './asset/img/sach8.jpg',
                price: 99,
                quantity : 1
            },
        ],

        book3 = [
            {
                id : 17,
                idName : 3,
                name: 'Tàn Khốc tập 1',
                image: './asset/img/tgdq1.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 18,
                idName : 3,
                name: 'Ngươi là... tập 2',
                image: './asset/img/tgdq2.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 19,
                idName : 3,
                name: 'Khích lệ bản thân tập 3',
                image: './asset/img/tgdq3.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 20,
                idName : 3,
                name: 'Lưỡi gươm mạnh mẽ tập 4',
                image: './asset/img/tgdq4.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 21,
                idName : 3,
                name: 'Xuống địa ngục tập 5',
                image: './asset/img/tgdq5.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 22,
                idName : 3,
                name: 'Phán xét của các trụ cột tập 6',
                image: './asset/img/tgdq6.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 23,
                idName : 3,
                name: 'Giao chiến nơi chật hẹp tập 7',
                image: './asset/img/tgdq7.jpg',
                price: 99,
                quantity : 1
            },
            {
                id : 24,
                idName : 3,
                name: 'Sức mạnh của Thượng Huyền tập 8',
                image: './asset/img/tgdq8.jpg',
                price: 99,
                quantity : 1
            }
        ],
    ],

    idName: [
        {
            id: 1,
            name : 'Full Bộ Truyện Doramon'
        },
        {
            id: 2,
            name : 'Truyện Cổ Tích Việt Nam'
        },
        {
            id: 3,
            name : 'Thanh Gươm Diệt Quỷ - Kimetsu No Yaiba'
        },
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
        //Render Banner
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

        //render products
        let htmlPoxProduct = '';
        this.listBooks.forEach(book => {      
            let htmlBook = book.map(sach => {
                return `
                <div class="item id${sach.idName}" id-key="${sach.id}">
                <img src="${sach.image}">
                <div class="title-item">${sach.name}</div>
                <div class="price">${sach.price}K</div>
                <div class="btn-add">Add to cart</div>
                </div>
                `;
            });
            let checkName = this.idName.find(name => {
                return name.id == book[0].idName;
            });
            let htmlProducts = `
                <div class="title-product">${checkName.name}</div>
                <div class="products">
                    <div class="list-item">
                        ${htmlBook.join('\n')}
                    </div>    
                    <div class="btn-products">
                        <div class="pver"><i class="fa-solid fa-arrow-left"></i></div>
                        <div class="next"><i class="fa-solid fa-arrow-right"></i></div>
                    </div>
                </div>`;
                htmlPoxProduct += htmlProducts;
        });
        productsElement.innerHTML = htmlPoxProduct;

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
            _This.marginLeftSlide += 20;
            if (_This.marginLeftSlide > ((_This.listBanners.length-1)*20)) {
                _This.marginLeftSlide = 0;
            }
            slides[0].style.marginLeft = -_This.marginLeftSlide + '%';
            info[_This.currentIndex].classList.add('active');
        }, 5000)
    },

    lineUl : function () {
        line.style.width = ulActiveElement.offsetWidth + 6 + 'px';
        line.style.left = (ulActiveElement.offsetLeft - 29) + 'px';
    },

    listItemInCart : [] ,

    countItemInCart : function() {
        let countItemInCart = bookStore.listItemInCart.length;
        if (countItemInCart == 0) {
            listItemCart.innerHTML = `<h4>Giỏ hàng trống!!</h4>`;
        };
        countProduct.innerHTML = countItemInCart;
    },

    addToCart : function(id) {
        overlay.classList.remove('hidenCart');
        listCart.classList.remove('hidenCart');
        if (id === undefined) {
            return;
        }
        bookStore.listItemInCart.push(id);
        let htmlListItemCart = '';
        bookStore.listBooks.forEach(books => {
            books.forEach(book => {
                bookStore.listItemInCart.forEach(value =>{
                    if(book.id == value) {
                        htmlListItemCart += `
                        <div class="item-cart" id-book="${book.id}">
                            <img src="${book.image}">
                            <div class="info-cart">
                                <div class="title">${book.name}</div>
                                <div class="price" price="${book.price}">${book.price}K</div>
                                <input type="number" value="${book.quantity}" min="1" data-quantity="${book.quantity}">
                            </div>
                            <div class="i-delete"><i class="fa-regular fa-circle-xmark"></i></div>
                        </div>`;
                    };
                });
            });
        });
        
        listItemCart.innerHTML = htmlListItemCart;
        
        bookStore.countItemInCart();

        //Xử lý xoá item in cart
        bookStore.delItemInCart();

        //Xử lý total cart
        bookStore.subTotal();
    },

    delItemInCart : function() {
        let iDelete = document.querySelectorAll('.i-delete');
        iDelete.forEach(item => {
            item.onclick = function() {
                let itemParent = item.parentNode;
                itemParent.style.display = 'none';
                bookStore.listItemInCart = bookStore.listItemInCart.filter(item => {
                    return item !== itemParent.getAttribute('id-book');
                });

                bookStore.countItemInCart();
                
                bookStore.subTotal();
            };
        });
    },

    subTotal : function() {
        let listItem = document.querySelectorAll('.item-cart');
        let subTotal = 0
        let items = [];

        bookStore.listBooks.forEach(books => {
            bookStore.listItemInCart.forEach(value => {
                books.forEach(book => {
                    if(book.id == value) {
                        items.push(book);
                    };
                });
            });
        });

        items.forEach(item => {
            let quantity;
            listItem.forEach(itemCart => {
                if (itemCart.getAttribute('id-book') == item.id) {
                    quantity = parseInt(itemCart.querySelector('input').getAttribute('data-quantity'));
                    if (quantity !== item.quantity && quantity !== undefined) {
                        item.quantity = quantity;
                    }
                };
            });
            subTotal += item.price * quantity;
        });

        totalElement.innerHTML = subTotal + 'K';

        let inputQuantity = document.querySelectorAll('.item-cart input');

        inputQuantity.forEach(input => {
            input.onchange = function(e) {
                e.target.dataset.quantity = parseInt(e.target.value);
                
                bookStore.subTotal();
            }
        });

    },

    handleEvents : function() {
        const _This = this;

        //Xử lý khi nav khi trượt màn hình xuống
        document.onscroll = function(){
            if(window.scrollY > 250){
                navElement.classList.add('toFixed');
            }else {
                navElement.classList.remove('toFixed');
            };
        };

        //Xử lý line khi active vô navigation
        ulElement.forEach((li , index) => {
            li.onclick = function(e) {
                document.querySelector('li a.active').classList.remove('active');
                li.classList.add('active');
                line.style.width = ulElement[index].offsetWidth + 'px';
                line.style.left = ulElement[index].offsetLeft + 'px';
            };
        });

        //Xử lý tiến và lùi products
        const btnPvers = document.querySelectorAll('.pver');
        const btnNexts = document.querySelectorAll('.next');
        const listProducts = document.querySelectorAll('.products .list-item');

        btnPvers.forEach((btn , index) => {
            btn.onclick = function () {
                let listItems = document.querySelectorAll(`.item.id${index + 1}`);
                listProducts[index].prepend(listItems[listItems.length - 1]); 
            };
        });
        
        
        btnNexts.forEach((btn , index) => {
            btn.onclick = function () {
                let listItems = document.querySelectorAll(`.item.id${index + 1}`);
                listProducts[index].appendChild(listItems[0]);
            };
        });

        //Xử lý khi bấm vô add cart
        const btnAdd = document.querySelectorAll('.btn-add');
        
        btnAdd.forEach(btn => {
            btn.onclick = function(){
                let item = btn.parentNode;
                _This.addToCart(item.getAttribute('id-key'));
            };
        });

        //Xử lý khi bấm vô nav cart
        navCart.onclick = function() {
            _This.addToCart();
        };

        //Xử lý thoát nav cart
        overlay.onclick = function() {
            overlay.classList.add('hidenCart');
            listCart.classList.add('hidenCart');
        };
        iClose.onclick = function() {
            overlay.classList.add('hidenCart');
            listCart.classList.add('hidenCart');
        };



    },

    start : function(){
        this.lineUl();

        this.render();

        this.loadSlide();

        this.handleEvents();
    }
}

bookStore.start();
