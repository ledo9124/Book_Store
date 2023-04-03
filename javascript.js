const ulElement = document.querySelectorAll('li a');
const ulActiveElement = document.querySelector('li a.active');
const line = document.querySelector('.line');


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
        ''
    ],

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
        this.handleEvents();
    }
}

bookStore.start();
