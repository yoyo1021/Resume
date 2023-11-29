
$(function() {
  console.log('Hello Bootstrap5');
});


//navbar收合
$('.nav-link').on('click',function() {
  $('.navbar-collapse').collapse('hide');
  });


//滾動視差
  AOS.init( {
    // Global settings:
    disable:'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });

//js作品集
let jsData=[
  {
    'id':0,
    'imgUrl':'./assets/images/tour.jpg',
    'title':'旅遊網站新增頁面',
    'link':'https://yoyo1021.github.io/tour-js/',
    'description':{ des1:'DOM',
                    des2:'AJAX',
                  },
    'aos':"fade-down-right"
  },
  {
    'id':1,
    'imgUrl':'./assets/images/woworoom.jpg',
    'title':'WOWOROOM',
    'link':'https://yoyo1021.github.io/wowoRoom/',
    'description':{ des1:'GET',
                    des2:'POST',
                    des3:'PUT',
                    des4:'DELETE',
                  },
    'aos':"fade-down"
  },
  {
    'id':2,
    'imgUrl':'./assets/images/woworoom-backend.jpg',
    'title':'WOWOROOM-BackEnd',
    'link':'https://yoyo1021.github.io/wowoRoom/backEnd',
    'description':{ 
                    des1:'訂單紀錄',
                    des2:'C3.js',
                  },
    'aos':"fade-down-left"
  },
]

let ReactData=[
  {
    'id':0,
    'imgUrl':'./assets/images/reactTodo.jpg',
    'title':'Todo',
    'link':'https://yoyo1021.github.io/vite-HW4/',
    'description':{ des1:'註冊、登入',
                    des2:'新增、刪除 Todo',
                  },
  },
  {
    'id':1,
    'imgUrl':'./assets/images/searchSomething.jpg',
    'title':'SearchSomething',
    'link':'https://yoyo1021.github.io/SearchSomething/',
    'description':{ des1:'搜尋',
                    des2:'串接搜尋api'
                  },
  },
  {
    'id':2,
    'imgUrl':'./assets/images/order.jpg',
    'title':'Order',
    'link':'https://yoyo1021.github.io/Order/',
    'description':{ des1:'訂單系統',
                  },
  },
]


const jsPortList = document.querySelector('.js-portfolio');
const reactPortList = document.querySelector('.react-portfolio');

function renderData(){
  let content='';
  jsData.forEach(item=>{
  content+=`<li class="col">
              <div class="card h-100">
                <div class="Portfolio-pic border-0">
                  <img src="${item.imgUrl}" alt="${item.title}" class="img-fluid">
                  <div class="img-cover d-none d-lg-flex">
                    <a href="${item.link}" class="fs-2 text-white" target="_blank">more</a>
                  </div>
                </div>
                <div class="">
                  <h3 class="p-3 text-center border-bottom  fs-3 fw-bold">${item.title}</h3>
                  <ul class="p-2 fs-5">
                    <li class="red-dot"><p class="ms-3">${item.description.des1}</p></li>
                    <li class="red-dot"><p class="ms-3">${item.description.des2}</p></li>
                    <li class="red-dot"><p class="ms-3">${item.description.des3}</p></li>
                    <li class="red-dot"><p class="ms-3">${item.description.des4}</p></li>
                  </ul>
                  <div class="d-flex mt-auto d-lg-none">
                    <a href="${item.link}" class="btn btn-primary w-100">進入網站</a>
                  </div>
                </div>
              </div>
            </li>`
  });

  jsPortList.innerHTML=content;

  let reactContent = '';
  ReactData.forEach((item)=>{
    reactContent+=`
    <li class="col">
      <div class="card h-100">
        <div class="Portfolio-pic border-0">
          <img src="${item.imgUrl}" alt="${item.title}" class="img-fluid">
          <div class="img-cover d-none d-lg-flex">
            <a href="${item.link}" class="fs-2 text-white" target="_blank">more</a>
          </div>
        </div>
        <div class="">
          <h3 class="p-3 text-center border-bottom  fs-3 fw-bold">${item.title}</h3>
          <ul class="p-2 fs-5">
            <li class="red-dot"><p class="ms-3">${item.description.des1}</p></li>
            <li class="red-dot"><p class="ms-3">${item.description.des2}</p></li>
            <li class="red-dot"><p class="ms-3">${item.description.des3}</p></li>
            <li class="red-dot"><p class="ms-3">${item.description.des4}</p></li>
          </ul>
          <div class="d-flex mt-auto d-lg-none">
            <a href="${item.link}" class="btn btn-primary w-100">進入網站</a>
          </div>
        </div>
      </div>
    </li>
    `
  });

  reactPortList.innerHTML = reactContent;

//把作品描述為 undefined 隱藏
const desList = document.querySelectorAll('.red-dot')
  desList.forEach(i=>{
    if(i.innerText=='undefined'){
      i.hidden=true;
    }
  })

}
renderData()