document.addEventListener('DOMContentLoaded', function(){
    const butao = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')
    

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicao = window.scrollY;

        if(posicao < alturaHero){
           ocultarElementodoHeader();
            
        }else{
            exibeElementodoHeader();
        }
        
        
    })

    // atraçoes
    for (let i = 0; i < butao.length; i++){
        butao[i].addEventListener('click', function(botton){
            const abaAlvo = botton.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodas();
            aba.classList.add('shows__list--is--active')
            removeBotao();
            botton.target.classList.add('shows__tabs__button--is--active')
           

            
        })
    }
    // faq
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta )
    }
})

function ocultarElementodoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementodoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento){
    const classe = 'fag__questao__item--is--open'
    console.log(elemento);
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
    
}

function removeBotao(){
    const butao = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < butao.length; i++){
        butao[i].classList.remove('shows__tabs__button--is--active')
    }

}


function escondeTodas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for( let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is--active')
    }
}