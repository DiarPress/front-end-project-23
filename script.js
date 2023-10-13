const psb = document.getElementById("previousSlide") 
const nsb = document.getElementById("nextSlide") 
const chv = document.querySelector(".presentation .chapter:first-child") 
const pos = document.querySelector(".titles .position")
const gradText = document.getElementById('gradientText')
var cs = 0;

nsb.addEventListener("click", (e) => {
  if (cs < chv.childElementCount - 1) ++cs;
  pos.innerHTML = cs + 1;
  chv.style.transform = "translateX("+ (-100 * cs) + "vw)";
})

psb.addEventListener("click", (e) => {
  if (cs != 0) --cs;
  pos.innerHTML = cs + 1;
  chv.style.transform = "translateX("+ (-100 * cs) + "vw)";
})

nsb.addEventListener('mouseenter', (e) => {
  nsb.classList.add('enlarged');
});

nsb.addEventListener('mouseleave', (e) => {
  nsb.classList.remove('enlarged');;
});

psb.addEventListener('mouseenter', (e) => {
  psb.classList.add('enlarged');
});

psb.addEventListener('mouseleave', (e) => {
  psb.classList.remove('enlarged');;
});

gradText.addEventListener('mouseenter', (e) => {
  gradText.classList.add('gradient');
});

gradText.addEventListener('mouseleave', (e) => {
  gradText.classList.remove('gradient');;
});


gradText.addEventListener('mouseover', function () {
    gradText.style.transition = 'color 0.5s, filter 1s';
    gradText.style.color = 'transparent';
    gradText.style.filter = 'blur(5px)'; 
});

gradText.addEventListener('mouseout', function () {
    gradText.style.transition = 'color 0.5s, filter 1s';
    gradText.style.color = 'initial'; 
    gradText.style.filter = 'blur(0)'; 
});
