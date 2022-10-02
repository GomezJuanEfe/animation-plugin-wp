let scrollBackBtn = document.createElement('div');
scrollBackBtn.innerHTML = '&uarr;';
scrollBackBtn.className = 'scroll-back-btn';

document.querySelector('body').append(scrollBackBtn);
scrollBackBtn.addEventListener('click', ()=> goTop());
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBackBtn.style.display = 'block';
  } else {
    scrollBackBtn.style.display = 'none';
  }
}

function goTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}