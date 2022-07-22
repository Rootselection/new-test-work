// window.addEventListener('scroll', function(
// ) {
//   let headerOne = document.childNodes('header__content-inner')
//   // let header = document.getElementsByClassName('header__content-inner');
//   header.classList.toggle('sticky', window.scrollY > 0);
// })

const hideNav = () => {
  const hiddenNavClassName = "nav--hidden";
  const fixedNavClassName = "nav--fixed";
  const headerHeight = 36;
  const navHeight = 42;
  let initialYvalue = window.scrollY;
  let body = document.querySelector('body');

  let isItHidden = true;
  let isItFixed = true;

  window.addEventListener('scroll', (ev) => {
    const scrollY = window.scrollY;
    if (scrollY > headerHeight) {
      body.classList.add(fixedNavClassName);
    }
    if (scrollY > headerHeight) {
      makeItFixed();

      if (scrollY > headerHeight + navHeight && scrollY > initialYvalue) {
        hide();
      } else {
        show();
      }
    } else {
      makeItNotFixed();
    }

    initialYvalue = scrollY;
  });

  function hide() {
    if (!isItHidden) {
      body.classList.add(hiddenNavClassName);
      isItHidden = true;
    }
  }

  function show() {
    if (isItHidden) {
      body.classList.remove(hiddenNavClassName);
      isItHidden = false;
    }
  }

  function makeItFixed() {
    if (!isItFixed) {
      body.classList.add(fixedNavClassName);
      isItFixed = true;
    }
  }

  function makeItNotFixed() {
    if (isItFixed) {
      body.classList.remove(fixedNavClassName);
      isItFixed = false;
    }
  }
}
hideNav();

document.getElementById('menuBtn').onclick = function () {
  document.getElementById('menu__body').classList.add('active');
  document.getElementById('menu__inner').classList.add('active');
  document.getElementById('menu__mask').classList.add('active');
  document.body.classList.add('overflow-hidden');
}
document.getElementById('menu__close').onclick = function () {
  document.getElementById('menu__body').classList.remove('active');
  document.getElementById('menu__inner').classList.remove('active');
  document.getElementById('menu__mask').classList.remove('active');
  document.body.classList.remove('overflow-hidden');
}
document.getElementById('menu__mask').onclick = function () {
  document.getElementById('menu__body').classList.remove('active');
  document.getElementById('menu__inner').classList.remove('active');
  document.getElementById('menu__mask').classList.remove('active');
  document.body.classList.remove('overflow-hidden');
}
document.getElementsByName('menu__link').onclick = function () {
  document.getElementById('menu__body').classList.remove('active') ;
  document.getElementById('menu__inner').classList.remove('active');
  document.getElementById('menu__mask').classList.remove('active');
  document.body.classList.remove('overflow-hidden');
}


const parent = document.getElementById('menu__list');
parent.onclick = function (event) {
  document.getElementById('menu__body').classList.remove('active');
  document.getElementById('menu__inner').classList.remove('active');
};

function prevUpdate(event) {
  // здесь отрисовка канвы

  // здесь ajax запрос
  event.preventDefault();
}


