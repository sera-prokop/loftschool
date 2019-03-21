
const paralax = document.querySelector('.paralax');
const layers = paralax.children;




function mooveLayers(wScroll) {
  Array.from(layers).forEach(layer =>{

    const speed = layer.dataset.speed;
    const posLayer = wScroll * speed / 10;


    // layer.style.transform = `translate3d(0, -${posLayer}%, 0)`;
    layer.style.transform = `translateY(-${posLayer}%)`;

  });
}

window.addEventListener('scroll', evt => {
  const wScroll = window.pageYOffset;
  mooveLayers(wScroll);
});

