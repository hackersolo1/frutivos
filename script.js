document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const grapeBtn = document.querySelector('.grape');
    const orangeBtn = document.querySelector('.orange');
    const passionFruitBtn = document.querySelector('.passionFruit');
    const flavorName = document.querySelector('.infoContainer h2');
    const flavorDesc = document.querySelector('.infoContainer p');
    const flavorLink = document.querySelector('.infoContainer a');
    const flavorImg = document.querySelector('.right .product-container');
    const flavorImgImg = document.querySelector('.product-container img')
    const modelbtn = document.querySelector('.img');
    const model = document.querySelector('.model');

    body.style.background = '#8b5cf6';

    grapeBtn.addEventListener('click', () => {
        grapeBtn.style.border = '3px solid #ad90f0';
        orangeBtn.style.border = '3px solid #664100';
        passionFruitBtn.style.border = '3px solid #5f2902';


        flavorName.textContent = 'Suco de uva';
        flavorDesc.textContent = 'Rico em antioxidantes naturais, nosso suco de uva é feito com uvas selecionadas. Sabor marcante e refrescante para seu dia.';
        flavorLink.href = '';


        body.style.animation = 'grapeBackgroundAnim 0.3s ease-in-out forwards';
        flavorName.style.animation = 'grapeColorAnim 0.3s ease-in-out forwards';


        flavorImg.style.animation = 'switchImageStart 0.4s ease-in-out forwards';
        setTimeout(() => {
            flavorImg.style.animation = 'switchImageEnd 0.4s ease-in-out forwards'
        }, 700);


        flavorLink.style.border = '4px solid #2f009e';
        flavorLink.style.background = '#2f009e';
    });

    orangeBtn.addEventListener('click', () => {
        grapeBtn.style.border = '3px solid #2f009e';
        orangeBtn.style.border = '3px solid #ffa200';
        passionFruitBtn.style.border = '3px solid #5f2902';


        flavorName.textContent = 'Suco de laranja';
        flavorDesc.textContent = 'Vitamina C pura! Feito com laranjas frescas e suculentas. Energia natural para começar bem o seu dia.';
        flavorLink.href = '';


        body.style.animation = 'orangeBackgroundAnim 0.3s ease-in-out forwards';
        flavorName.style.animation = 'orangeColorAnim 0.3s ease-in-out forwards';


        flavorImg.style.animation = 'switchImageStart 0.4s ease-in-out forwards';
        setTimeout(() => {
            flavorImg.style.animation = 'switchImageEnd 0.4s ease-in-out forwards'
        }, 700);


        flavorLink.style.border = '4px solid #664100';
        flavorLink.style.background = '#664100';
    });

    passionFruitBtn.addEventListener('click', () => {
        grapeBtn.style.border = '3px solid #2f009e';
        orangeBtn.style.border = '3px solid #664100';
        passionFruitBtn.style.border = '3px solid #ff6a00';


        flavorName.textContent = 'Suco de maracujá';
        flavorDesc.textContent = 'Naturalmente calmante e delicioso, feito com maracujás frescos. Perfeito para relaxar e se refrescar a qualquer momento.';
        flavorLink.href = '';


        body.style.animation = 'passionFruitBackgroundAnim 0.3s ease-in-out forwards';
        flavorName.style.animation = 'passionFruitColorAnim 0.3s ease-in-out forwards';


        flavorImg.style.animation = 'switchImageStart 0.4s ease-in-out forwards';
        setTimeout(() => {
            flavorImg.style.animation = 'switchImageEnd 0.4s ease-in-out forwards'
        }, 700);


        flavorLink.style.border = '4px solid #5f2902';
        flavorLink.style.background = '#5f2902';
    });

    modelbtn.addEventListener('click', () => {
        if (modelbtn.id == 'img') {
            flavorImgImg.style.display = 'none';
            model.style.display = 'flex';
            modelbtn.textContent = '2D';
            modelbtn.id = 'threeD';

        } else {
            flavorImgImg.style.display = 'flex';
            model.style.display = 'none';
            modelbtn.textContent = '3D';
            modelbtn.id = 'img';
        }
    })

})