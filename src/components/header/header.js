
  let header = document.querySelector('.header'),
    headerHeight = header.offsetHeight;
  window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > headerHeight){
      header.classList.add('show_bg')
    }else{
      header.classList.remove('show_bg')
    }
  };

  var body = document.body,
    overlay = document.querySelector('.mobile-menu'),
    overlayBtts = document.querySelectorAll('.burger');

  [].forEach.call(overlayBtts, function(btt) {

    btt.addEventListener('click', function() {

      const overlayOpen = this.classList.contains('open');

      if(overlayOpen){
        btt.classList.remove('open');
        btt.style.marginRight = '';
        body.classList.remove('noscroll', overlayOpen);
      }else{
        btt.classList.add('open');
        body.classList.add('noscroll', overlayOpen);
        btt.style.marginRight = `${getScrollbarWidth()}px`;
      }

    }, false);

  });


  function getScrollbarWidth() {
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar";

    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;

    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    const inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }
