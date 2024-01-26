let iconCart=document.querySelector('.icon-cart');
let closeBtn= document.querySelector('.cart-tab .close');
let body = document.querySelector('body');
let listProductHTML=document.querySelector('.listProduct')
let listProducts=[];
let listcartHTML=document.querySelector('.listCart')
let cart=[];
let addbtn=document.querySelector('.addCart');
let iconcartspan=document.querySelector(".icon-cart span")
iconCart.addEventListener('click',()=>{
    body.classList.toggle('activecart');
})
closeBtn.addEventListener('click',()=>{
    body.classList.toggle('activecart');


})
const addDatatohtml=()=>{
    listProductHTML.innerHTML='';
    if (listProducts.length>0){
        listProducts.forEach(product=>{
            let newproduct=document.createElement("div");
            newproduct.classList.add("item");
            newproduct.dataset.id=product.id;
            newproduct.innerHTML=`
            <img src="${product.image}" alt="error">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">
                    Add to Wishlist
                </button>
            `;
            listProductHTML.appendChild(newproduct);
        })
    }
}



const initApp =()=>{
    fetch('product.json')
    .then(response=>response.json())
    .then(data=> {
        listProducts=data;
        addDatatohtml();
    })
}

const addcartHtml = () => {
    listcartHTML.innerHTML = '';
    let totquan=0;
    if (cart.length > 0) {
        cart.forEach(item => {
            totquan+=item.quantity;
            let newcart = document.createElement("div");
            newcart.classList.add('item');
            let productInfo = listProducts.find(product => product.id == item.productid);

            newcart.innerHTML = `
                <div class="image">
                    <img src="${productInfo.image}" alt="error" width="50%">
                </div>
                <div class="name">
                    ${productInfo.name}
                </div>
                <div class="totalPrice">
                    $${productInfo.price*item.quantity}
                </div>
                <div class="quantity">
                    <span class="minus">&lt;</span>
                    <span>${item.quantity}</span>
                    <span class="plus">&gt;</span>
                </div>
            `;
            listcartHTML.appendChild(newcart);
        });
    }
    iconcartspan.innerText=totquan;
};

const addCart =(product_id)=>{
    let posincart=cart.findIndex((value)=>value.productid==product_id)
    if(cart.length<=0){
        cart=[{
            productid:product_id,
            quantity:1
        }]
    }
    else if(posincart<0){
        cart.push({
            productid:product_id,
            quantity:1
        })
    }
    else{
        cart[posincart].quantity=cart[posincart].quantity +1;
    }
    addcartHtml();
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('addCart')) {
        let productid=event.target.parentElement.dataset.id;
        addCart(productid);
        
        
    }
});
const changequant = (prodid, type) => {
    let positem = cart.findIndex( value => value.productid == prodid);
    if (positem >= 0) {
        switch (type) {
            case 'plus':
                cart[positem].quantity += 1;
                break;
            default:
                let valueChange = cart[positem].quantity - 1;
                if (valueChange > 0) {
                    cart[positem].quantity = valueChange;
                } else {
                    cart.splice(positem, 1);
                }
        }
    }
    alert("1");
    addcartHtml();
}

listcartHTML.addEventListener("click",(event)=>{
    let posclick=event.target;
    if(posclick.classList.contains("minus")||posclick.classList.contains("plus")){
        let product_id=posclick.parentElement.parentElement.dataset.id;
        let type='minus';
        if(posclick.classList.contains("plus")){
            type='plus';
        }
        changequant(product_id,type);
    }
})

initApp();