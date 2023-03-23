const n = 100;

const multiplos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const colors = ['white', '#99d8c9','#66c2a4','#41ae76','#238b45','#006d2c','#00441b', 'black', 'black', 'black'];

const qde_divisores = [];

function create_elements(ref) {

    const cont = document.querySelector(ref);

    console.log(cont);

    for (let i = 0; i < n; i++) {

        const info_multiplos = multiplos
          .reduce( (ac, cur) => (i % cur == 0) ? (ac + ' ' + cur) : ac, '')
        //multiplos.forEach(mul => )

        const qde = info_multiplos.split(' ').length - 2; // por causa dos ' ' inicial e final;
        qde_divisores.push(qde);


        const new_cell = document.createElement('div');
        new_cell.dataset.value = i;
        new_cell.dataset.multiplos = ' ' + info_multiplos.trim() + ' ';
        new_cell.innerText = i;
        
        cont.appendChild(new_cell);
    }

}

function popula_seletor(ref) {

    const cont = document.querySelector(ref);

    multiplos.forEach(mul => {

        const new_option = document.createElement('option');
        new_option.value = mul;
        new_option.innerText = mul;
        cont.appendChild(new_option);

    })

}

function monitora_seletor(ref) {

    const cont = document.querySelector(ref);

    cont.addEventListener('change', e => {
        const mul = e.target.value;
        atua(mul);
    })

}

function atua(mul) {
    colore(true);
    document.querySelector('.numbers-container').dataset.selecao = mul;
}

function colore(clear = false) {

    const quads = document.querySelectorAll('[data-value]');

    quads.forEach( (quad,i) => {

        quad.style.backgroundColor = clear ? '' : colors[qde_divisores[i]];
        quad.style.color = clear ? '' : colors[10-qde_divisores[i]];

        //quad.innerText = qde_divisores[i];

    })
}

popula_seletor('#divisor');
create_elements('.numbers-container');
monitora_seletor('#divisor');

function passeia() {
    multiplos.forEach(mul => {

        setTimeout(() => {

            document.querySelector('select').value = mul;
            atua(mul);

        }, mul * 1000);


    })
}