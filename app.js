const wrapper = document.querySelector(".sliderWrapper");
const menuitems = document.querySelectorAll(".menubottom");
const products = [
    {
        id: 1,
        title: "AIR FORCE",
        price: 119,
        colors: [
            {
                code: "black",
                img: "img/air.png",
            },
            {
                code: "darkblue",
                img: "img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "AIR JORDAN",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "img/jordan.png",
            },
            {
                code: "green",
                img: "img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "BLAZER",
        price: 139,
        colors: [
            {
                code: "lightgray",
                img: "img/blazer.png",
            },
            {
                code: "green",
                img: "img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "CRATER",
        price: 129,
        colors: [
            {
                code: "black",
                img: "img/crater.png",
            },
            {
                code: "lightgray",
                img: "img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "HIPPIE",
        price: 109,
        colors: [
            {
                code: "gray",
                img: "img/hippie.png",
            },
            {
                code: "black",
                img: "img/hippie2.png",
            },
        ],
    },
];

let chosenProduct = products[0];
const chosenProductTitle = document.querySelector(".producttitle");
const chosenProductImg = document.querySelector(".productimg");
const chosenProductprice = document.querySelector(".productprice");
const chosenProductColors = document.querySelectorAll(".color");
const chosenProductSizes = document.querySelectorAll(".size");

menuitems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        // change the chosen product
        chosenProduct = products[index]
        //change the contents of current product
        chosenProductTitle.textContent = chosenProduct.title;
        chosenProductprice.textContent = "$" + chosenProduct.price;
        chosenProductImg.src = chosenProduct.colors[0].img;
        //assigning new colors
        chosenProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
            // change colors
            color.addEventListener("click", () => {
                chosenProductImg.src = chosenProduct.colors[index].img;
            });
        });
    });
});
chosenProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
        chosenProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});
const productButton = document.querySelector(".buyproduct");
const payment = document.querySelector(".payment");
const Close = document.querySelector(".close");
productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});
Close.addEventListener("click", () => {
    payment.style.display = "none";
});
