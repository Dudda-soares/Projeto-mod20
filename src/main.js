document.addEventListener('DOMContentLoaded', function(){
    const butao = document.querySelectorAll('[data-tab-button]');
    

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
})

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