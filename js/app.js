let btn = document.querySelectorAll('.accordian-btn');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', (e) => {
        let grandparent = btn[i].parentElement.parentElement;
        // console.log(grandparent);
        grandparent.classList.toggle('open')
    });
}