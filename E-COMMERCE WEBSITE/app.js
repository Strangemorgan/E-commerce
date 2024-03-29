const wrapper = document.querySelector(".slidderwrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
    id: 1,
    title: "AIR FORCE",
    price: 119,
    colors: [
        {
        code: "white",
        img:"./New folder/af.jpg",
    },
    {
    code: "darkblue",
        img:"./New folder/Nike-Air.jpg",

    },
    ],

 },
 {
    id: 2,
    title: "JORDAN",
    price: 109,
    colors: [
        {
        code: "gray",
        img:"./New folder/Jordan.jpg",
    },
    {
    code: "green",
        img:"./New folder/Jordan1.jpg",

    },
    ],

 },
{
    id: 3,
    title: "BLAZA",
    price: 117,
    colors: [
        {
        code: "brown",
        img:"./New folder/ZoomBlazerMidPremium.jpg",
    },
    {
    code: "smokewhite",
        img:"./New folder/Blazer11.png",

    },
    ],

 },
{
    id: 4,
    title: "CRATER",
    price: 100,
    colors: [
        {
        code: "gray",
        img:"./New folder/Crater.jpg",
    },
    {
    code: "skyblue",
        img:"./New folder/Blaser.png",

    },
    ],

 },

    {
        id: 5,
        title: "HIPPIE",
        price: 99,
        colors: [
            {
                code: "lightblue",
                img: "./New folder/Yippie.jpg",
            },
            {
                code: "pink",
                img: "./New folder/space-hippie-04.png",

            },
        ],
    },

];
    
let choosenproduct = products[0]

const currentproductImg=document.querySelector(".productimg")
const currentproductTitle=document.querySelector(".productTitle")
const currentproductprice=document.querySelector(".productPrice")
const currentproductcolors=document.querySelectorAll(".color")
const currentproductsizes=document.querySelectorAll(".size")

    
menuItems.forEach((item,index)=>{
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenproduct = products[index]
        
        currentproductTitle.textContent = choosenproduct.title;
        currentproductprice.textContent = "$" + choosenproduct.price;
        currentproductImg.src = choosenproduct.colors[0].img;

        currentproductcolors.forEach((color, index) => {
            color.style.backgroundColor = choosenproduct.colors[index].code;
        });
    });
})
currentproductcolors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentproductImg.src = choosenproduct.colors[index].img;
    });
});
currentproductsizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentproductsizes.forEach((size) => {
            
            size.style.backgroundColor = "white";
            size.style.color = "black ";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const PRODUCTBUTTON = document.querySelector(".PRODUCTBUTTON");
const payment = document.querySelector(".paYment");
const close = document.querySelector(".close");

PRODUCTBUTTON.addEventListener("click", () => {
    payment.style.display = "flex"

})
close.addEventListener("click", () => {
    payment.style.display = "none"
})
