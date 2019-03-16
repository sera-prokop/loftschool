export function headerScroll() {
  let header = document.querySelector('.header'),
    headerHeight = header.offsetHeight;
  window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > headerHeight){
      header.classList.add('show_bg')
    }else{
      header.classList.remove('show_bg')
    }
  }

}
