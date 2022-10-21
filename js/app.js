let btn = document.querySelectorAll('.accordian-btn');
let burgerBtn = document.querySelectorAll('.burger-btn')
//goes through a loop to put an Eventlistener on each accordion which toggles the class open
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', (e) => {
        let grandparent = btn[i].parentElement.parentElement;
        grandparent.classList.toggle('open')
    });
}

for(let i = 0; i < burgerBtn.length; i++){
    console.log(i)
    burgerBtn[i].addEventListener('click', (e) =>{
        let nav = document.querySelector('.nav')
        nav.classList.toggle('open')
    })
}