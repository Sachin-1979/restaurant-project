const iconTop = document.querySelector('.scroll-icon');



window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        iconTop.classList.add('xyz');
    }
    else {
        iconTop.classList.remove('xyz');
    }
});

const btn = document.querySelector('.btn');
const msg = document.querySelector('#msg');

console.log(btn);
console.log(msg);
btn.addEventListener('click', (e) => {
    e.preventDefault();
    msg.innerHTML = "You have clicked send message button";
})



// const mouseOver = document.querySelector('#banner-section');

// function mouseOver() {
//     mouseOver.classList.add('.banner-container');