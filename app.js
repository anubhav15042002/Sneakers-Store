const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products =[
{
    id:1,
    title:"AIR FORCE",
    price:119,
    desc:"With their distinctive silhouette and durable construction, Air Force shoes continue to elevate both style and performance on and off the court.",
    colors: [
        {
            code:"black",
            img:"./img/air.png",
        },
        {
            code:"darkblue",
            img:"./img/air2.png",
        },
    ],
},
{
    id:2,
    title:"AIR JORDAN",
    price:149,
    desc:"Air Jordan shoes, renowned for their legendary heritage and innovative designs, have redefined the sneaker culture, becoming a symbol of athleticism and style worldwide.",
    colors:[
        {
            code:"lightgray",
            img:"./img/jordan.png",
        },
        {
            code:"green",
            img:"./img/jordan2.png",
        },
    ],
},
{
    id:3,
    title:"BLAZER",
    price:109,
    desc:"Blazer shoes, celebrated for their retro-inspired design and versatility, have carved a niche in both streetwear and casual fashion scenes.",
    colors:[
        {
            code:"lightgray",
            img:"./img/blazer.png",
        },
        {
            code:"green",
            img:"./img/blazer2.png",
        },
    ],
},
{
    id:4,
    title:"CRATER",
    price:129,
    desc:"With a unique aesthetic inspired by nature, Crater shoes merge style with sustainability, offering a forward-thinking option for environmentally conscious individuals.",
    colors:[
        {
            code:"black",
            img:"./img/crater.png",
        },
        {
            code:"lightgray",
            img:"./img/crater2.png",
        },
    ],
},
{
    id:5,
    title:"HIPPIE",
    price:99,
    desc:"Embracing unconventional materials and vibrant colors, Hippie shoes encapsulate the ethos of peace, love, and self-expression, making them a beloved choice for those with an eclectic sense of style.",
    colors:[
        {
            code:"gray",
            img:"./img/hippie.png",
        },
        {
            code:"black",
            img:"./img/hippie2.png",
        },
    ],
},
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");

menuItems.forEach((item,index) => {
    item.addEventListener("click", ()=> {
        // change the current slide
       wrapper.style.transform = `translateX(${-100 * index}vw)`;

       // change the choosen product
       choosenProduct = products[index];

       // change texts of currentProduct
       currentProductTitle.textContent = choosenProduct.title;
       currentProductPrice.textContent = "$" + choosenProduct.price;
       currentProductImg.src = choosenProduct.colors[0].img;
       currentProductDesc.textContent = choosenProduct.desc;

       //assigning new colors
       currentProductColors.forEach((color,index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
    });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor = "white";
             size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
        
    });
});

const ProductButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

ProductButton.addEventListener("click",()=>{
    payment.style.display="flex";
});

close.addEventListener("click",()=>{
    payment.style.display="none";
});

