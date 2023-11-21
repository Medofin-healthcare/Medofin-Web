let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'ACI FREE (regular)',
        image: 'ACI_FREE_REGULAR-removebg-preview.png',
        price: 8
    },
    {
        id: 2,
        name: 'ACIGINE GEL MINT(170ml)',
        image: 'acigine_gel_mint_170_ml-removebg-preview.png',
        price: 64.4
    },
    {
        id: 3,
        name: 'AZICIP 250',
        image: 'azicip-250-tablet-removebg-preview.png',
        price: 63
    },
    {
        id: 4,
        name: 'CIPMOX CV',
        image: 'cipmox-cv-625-10-s-removebg-preview.png',
        price: 123000
    },
    {
        id: 5,
        name: 'AZIMAX 200 DRY SYP(15ml)',
        image: 'azimax-200--removebg-preview.png',
        price: 37.78
    },
    {
        id: 6,
        name: 'CETCIP-L',
        image: 'cetcip-l-removebg-preview.png',
        price: 59.04
    },
    {
        id: 7,
        name: 'CHESTON COLD',
        image: 'cheston-cold-tablet-0-removebg-preview.png',
        price: 37.4
    },
    {
        id: 8,
        name: 'CIPDAPLA-M 10/1000 TABS',
        image: 'cipdapla-m-removebg-preview.png',
        price: 95.6
    },
    {
        id: 9,
        name: 'DOXOCIP',
        image: 'doxocip-removebg-preview.png',
        price: 320000
    },
    {
        id: 10,
        name: 'OKACET-L',
        image: 'okacet-removebg-preview.png',
        price: 50.16
    },
    {
        id: 11,
        name: 'TARIFLOX OZ',
        image: 'TARIFLOX_OZ-removebg-preview.png',
        price: 93.2
    },
    {
        id: 12,
        name: 'VOGLICIP 0.2',
        image: 'voglicip-removebg-preview.png',
        price: 49.5
    }
];
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">₹${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>₹${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = `₹${totalPrice.toLocaleString()}`;
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}