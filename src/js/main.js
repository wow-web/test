const   toggleMnuBtn = document.querySelector('.top-line__mnu-btn'),
        toggleAcordBtns = document.querySelectorAll('.info__item'),
        anchors = document.querySelectorAll('a[href*="#"]'),
        openFormBtns = document.querySelectorAll('.open-form'),
        form = document.querySelector('.form');

toggleMnuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('body').classList.toggle('open-menu');
});

toggleAcordBtns.forEach(function(item, i, arr) {
    item.addEventListener('click', function() {
        item.classList.toggle('open');
    })
});

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

for (let button of openFormBtns) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        form.classList.add('open');
        form.querySelector('.form__close').addEventListener('click', function(evt) {
            evt.preventDefault();
            form.classList.remove('open');
        })
    });
}
