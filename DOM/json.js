function getProducts() {
    var productList = [{ "id": 1, "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 549, "discountPercentage": 12.96, "rating": 4.69, "stock": 94, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"] }, { "id": 2, "title": "iPhone X", "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...", "price": 899, "discountPercentage": 17.94, "rating": 4.44, "stock": 34, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/2/1.jpg", "https://i.dummyjson.com/data/products/2/2.jpg", "https://i.dummyjson.com/data/products/2/3.jpg", "https://i.dummyjson.com/data/products/2/thumbnail.jpg"] }, { "id": 3, "title": "Samsung Universe 9", "description": "Samsung's new variant which goes beyond Galaxy to the Universe", "price": 1249, "discountPercentage": 15.46, "rating": 4.09, "stock": 36, "brand": "Samsung", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/3/1.jpg"] }, { "id": 4, "title": "OPPOF19", "description": "OPPO F19 is officially announced on April 2021.", "price": 280, "discountPercentage": 17.91, "rating": 4.3, "stock": 123, "brand": "OPPO", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/4/1.jpg", "https://i.dummyjson.com/data/products/4/2.jpg", "https://i.dummyjson.com/data/products/4/3.jpg", "https://i.dummyjson.com/data/products/4/4.jpg", "https://i.dummyjson.com/data/products/4/thumbnail.jpg"] }, { "id": 5, "title": "Huawei P30", "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.", "price": 499, "discountPercentage": 10.58, "rating": 4.09, "stock": 32, "brand": "Huawei", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/5/1.jpg", "https://i.dummyjson.com/data/products/5/2.jpg", "https://i.dummyjson.com/data/products/5/3.jpg"] }, { "id": 6, "title": "MacBook Pro", "description": "MacBook Pro 2021 with mini-LED display may launch between September, November", "price": 1749, "discountPercentage": 11.02, "rating": 4.57, "stock": 83, "brand": "Apple", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png", "images": ["https://i.dummyjson.com/data/products/6/1.png", "https://i.dummyjson.com/data/products/6/2.jpg", "https://i.dummyjson.com/data/products/6/3.png", "https://i.dummyjson.com/data/products/6/4.jpg"] }, { "id": 7, "title": "Samsung Galaxy Book", "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", "price": 1499, "discountPercentage": 4.15, "rating": 4.25, "stock": 50, "brand": "Samsung", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/7/1.jpg", "https://i.dummyjson.com/data/products/7/2.jpg", "https://i.dummyjson.com/data/products/7/3.jpg", "https://i.dummyjson.com/data/products/7/thumbnail.jpg"] }, { "id": 8, "title": "Microsoft Surface Laptop 4", "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.", "price": 1499, "discountPercentage": 10.23, "rating": 4.43, "stock": 68, "brand": "Microsoft Surface", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/8/1.jpg", "https://i.dummyjson.com/data/products/8/2.jpg", "https://i.dummyjson.com/data/products/8/3.jpg", "https://i.dummyjson.com/data/products/8/4.jpg", "https://i.dummyjson.com/data/products/8/thumbnail.jpg"] }, { "id": 9, "title": "Infinix INBOOK", "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty", "price": 1099, "discountPercentage": 11.83, "rating": 4.54, "stock": 96, "brand": "Infinix", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/9/1.jpg", "https://i.dummyjson.com/data/products/9/2.png", "https://i.dummyjson.com/data/products/9/3.png", "https://i.dummyjson.com/data/products/9/4.jpg", "https://i.dummyjson.com/data/products/9/thumbnail.jpg"] }, { "id": 10, "title": "HP Pavilion 15-DK1056WM", "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10", "price": 1099, "discountPercentage": 6.18, "rating": 4.43, "stock": 89, "brand": "HP Pavilion", "category": "laptops", "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg", "images": ["https://i.dummyjson.com/data/products/10/1.jpg", "https://i.dummyjson.com/data/products/10/2.jpg", "https://i.dummyjson.com/data/products/10/3.jpg", "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"] }, { "id": 11, "title": "perfume Oil", "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil", "price": 13, "discountPercentage": 8.4, "rating": 4.26, "stock": 65, "brand": "Impression of Acqua Di Gio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/11/1.jpg", "https://i.dummyjson.com/data/products/11/2.jpg", "https://i.dummyjson.com/data/products/11/3.jpg", "https://i.dummyjson.com/data/products/11/thumbnail.jpg"] }, { "id": 12, "title": "Brown Perfume", "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml", "price": 40, "discountPercentage": 15.66, "rating": 4, "stock": 52, "brand": "Royal_Mirage", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/12/1.jpg", "https://i.dummyjson.com/data/products/12/2.jpg", "https://i.dummyjson.com/data/products/12/3.png", "https://i.dummyjson.com/data/products/12/4.jpg", "https://i.dummyjson.com/data/products/12/thumbnail.jpg"] }, { "id": 13, "title": "Fog Scent Xpressio Perfume", "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men", "price": 13, "discountPercentage": 8.14, "rating": 4.59, "stock": 61, "brand": "Fog Scent Xpressio", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/13/1.jpg", "https://i.dummyjson.com/data/products/13/2.png", "https://i.dummyjson.com/data/products/13/3.jpg", "https://i.dummyjson.com/data/products/13/4.jpg", "https://i.dummyjson.com/data/products/13/thumbnail.webp"] }, { "id": 14, "title": "Non-Alcoholic Concentrated Perfume Oil", "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil", "price": 120, "discountPercentage": 15.6, "rating": 4.21, "stock": 114, "brand": "Al Munakh", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/14/1.jpg", "https://i.dummyjson.com/data/products/14/2.jpg", "https://i.dummyjson.com/data/products/14/3.jpg", "https://i.dummyjson.com/data/products/14/thumbnail.jpg"] }, { "id": 15, "title": "Eau De Perfume Spray", "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality", "price": 30, "discountPercentage": 10.99, "rating": 4.7, "stock": 105, "brand": "Lord - Al-Rehab", "category": "fragrances", "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/15/1.jpg", "https://i.dummyjson.com/data/products/15/2.jpg", "https://i.dummyjson.com/data/products/15/3.jpg", "https://i.dummyjson.com/data/products/15/4.jpg", "https://i.dummyjson.com/data/products/15/thumbnail.jpg"] }, { "id": 16, "title": "Hyaluronic Acid Serum", "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid", "price": 19, "discountPercentage": 13.31, "rating": 4.83, "stock": 110, "brand": "L'Oreal Paris", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/16/1.png", "https://i.dummyjson.com/data/products/16/2.webp", "https://i.dummyjson.com/data/products/16/3.jpg", "https://i.dummyjson.com/data/products/16/4.jpg", "https://i.dummyjson.com/data/products/16/thumbnail.jpg"] }, { "id": 17, "title": "Tree Oil 30ml", "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,", "price": 12, "discountPercentage": 4.09, "rating": 4.52, "stock": 78, "brand": "Hemani Tea", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/17/1.jpg", "https://i.dummyjson.com/data/products/17/2.jpg", "https://i.dummyjson.com/data/products/17/3.jpg", "https://i.dummyjson.com/data/products/17/thumbnail.jpg"] }, { "id": 18, "title": "Oil Free Moisturizer 100ml", "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.", "price": 40, "discountPercentage": 13.1, "rating": 4.56, "stock": 88, "brand": "Dermive", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/18/1.jpg", "https://i.dummyjson.com/data/products/18/2.jpg", "https://i.dummyjson.com/data/products/18/3.jpg", "https://i.dummyjson.com/data/products/18/4.jpg", "https://i.dummyjson.com/data/products/18/thumbnail.jpg"] }, { "id": 19, "title": "Skin Beauty Serum.", "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m", "price": 46, "discountPercentage": 10.68, "rating": 4.42, "stock": 54, "brand": "ROREC White Rice", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/19/1.jpg", "https://i.dummyjson.com/data/products/19/2.jpg", "https://i.dummyjson.com/data/products/19/3.png", "https://i.dummyjson.com/data/products/19/thumbnail.jpg"] }, { "id": 20, "title": "Freckle Treatment Cream- 15gm", "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.", "price": 70, "discountPercentage": 16.99, "rating": 4.06, "stock": 140, "brand": "Fair & Clear", "category": "skincare", "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/20/1.jpg", "https://i.dummyjson.com/data/products/20/2.jpg", "https://i.dummyjson.com/data/products/20/3.jpg", "https://i.dummyjson.com/data/products/20/4.jpg", "https://i.dummyjson.com/data/products/20/thumbnail.jpg"] }, { "id": 21, "title": "- Daal Masoor 500 grams", "description": "Fine quality Branded Product Keep in a cool and dry place", "price": 20, "discountPercentage": 4.81, "rating": 4.44, "stock": 133, "brand": "Saaf & Khaas", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png", "images": ["https://i.dummyjson.com/data/products/21/1.png", "https://i.dummyjson.com/data/products/21/2.jpg", "https://i.dummyjson.com/data/products/21/3.jpg"] }, { "id": 22, "title": "Elbow Macaroni - 400 gm", "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm", "price": 14, "discountPercentage": 15.58, "rating": 4.57, "stock": 146, "brand": "Bake Parlor Big", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/22/1.jpg", "https://i.dummyjson.com/data/products/22/2.jpg", "https://i.dummyjson.com/data/products/22/3.jpg"] }, { "id": 23, "title": "Orange Essence Food Flavou", "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item", "price": 14, "discountPercentage": 8.04, "rating": 4.85, "stock": 26, "brand": "Baking Food Items", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/23/1.jpg", "https://i.dummyjson.com/data/products/23/2.jpg", "https://i.dummyjson.com/data/products/23/3.jpg", "https://i.dummyjson.com/data/products/23/4.jpg", "https://i.dummyjson.com/data/products/23/thumbnail.jpg"] }, { "id": 24, "title": "cereals muesli fruit nuts", "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji", "price": 46, "discountPercentage": 16.8, "rating": 4.94, "stock": 113, "brand": "fauji", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/24/1.jpg", "https://i.dummyjson.com/data/products/24/2.jpg", "https://i.dummyjson.com/data/products/24/3.jpg", "https://i.dummyjson.com/data/products/24/4.jpg", "https://i.dummyjson.com/data/products/24/thumbnail.jpg"] }, { "id": 25, "title": "Gulab Powder 50 Gram", "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds", "price": 70, "discountPercentage": 13.58, "rating": 4.87, "stock": 47, "brand": "Dry Rose", "category": "groceries", "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/25/1.png", "https://i.dummyjson.com/data/products/25/2.jpg", "https://i.dummyjson.com/data/products/25/3.png", "https://i.dummyjson.com/data/products/25/4.jpg", "https://i.dummyjson.com/data/products/25/thumbnail.jpg"] }, { "id": 26, "title": "Plant Hanger For Home", "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf", "price": 41, "discountPercentage": 17.86, "rating": 4.08, "stock": 131, "brand": "Boho Decor", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/26/1.jpg", "https://i.dummyjson.com/data/products/26/2.jpg", "https://i.dummyjson.com/data/products/26/3.jpg", "https://i.dummyjson.com/data/products/26/4.jpg", "https://i.dummyjson.com/data/products/26/5.jpg", "https://i.dummyjson.com/data/products/26/thumbnail.jpg"] }, { "id": 27, "title": "Flying Wooden Bird", "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm", "price": 51, "discountPercentage": 15.58, "rating": 4.41, "stock": 17, "brand": "Flying Wooden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/27/1.jpg", "https://i.dummyjson.com/data/products/27/2.jpg", "https://i.dummyjson.com/data/products/27/3.jpg", "https://i.dummyjson.com/data/products/27/4.jpg", "https://i.dummyjson.com/data/products/27/thumbnail.webp"] }, { "id": 28, "title": "3D Embellishment Art Lamp", "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)", "price": 20, "discountPercentage": 16.49, "rating": 4.82, "stock": 54, "brand": "LED Lights", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/28/1.jpg", "https://i.dummyjson.com/data/products/28/2.jpg", "https://i.dummyjson.com/data/products/28/3.png", "https://i.dummyjson.com/data/products/28/4.jpg", "https://i.dummyjson.com/data/products/28/thumbnail.jpg"] }, { "id": 29, "title": "Handcraft Chinese style", "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate", "price": 60, "discountPercentage": 15.34, "rating": 4.44, "stock": 7, "brand": "luxury palace", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp", "images": ["https://i.dummyjson.com/data/products/29/1.jpg", "https://i.dummyjson.com/data/products/29/2.jpg", "https://i.dummyjson.com/data/products/29/3.webp", "https://i.dummyjson.com/data/products/29/4.webp", "https://i.dummyjson.com/data/products/29/thumbnail.webp"] }, { "id": 30, "title": "Key Holder", "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality", "price": 30, "discountPercentage": 2.92, "rating": 4.92, "stock": 54, "brand": "Golden", "category": "home-decoration", "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg", "images": ["https://i.dummyjson.com/data/products/30/1.jpg", "https://i.dummyjson.com/data/products/30/2.jpg", "https://i.dummyjson.com/data/products/30/3.jpg", "https://i.dummyjson.com/data/products/30/thumbnail.jpg"] }];
    return productList;
}
function getDataFromStorage() {
    var data = localStorage.getItem("productList");
    data = JSON.parse(data);
    return data;
}
function CreateHeader() {
    var mainDiv = document.querySelector("#mainDiv");

    var header = document.createElement("header");
    header.setAttribute("id", "header");
    header.setAttribute("style", "width:100%; height:80px;background-color:black; position: sticky; top:0;");
    header.setAttribute("class", " d-flex justify-content-between");

    var logoDiv = document.createElement("div");
    logoDiv.setAttribute("class", "d-flex justify-content-center align-items-center");
    logoDiv.setAttribute("style", "width:20%;height:70px;");

    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", "images.png");
    imgElement.setAttribute("style", "width:80%; height:60px;filter:invert(1);");
    logoDiv.appendChild(imgElement);

    var searchDiv = document.createElement("div");
    searchDiv.setAttribute("style", "width:50%; height:70px;");
    searchDiv.setAttribute("class", "d-flex justify-content-center align-items-center");

    var searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("class", "p-3")
    searchInput.setAttribute("placeholder", "Search product");
    searchInput.setAttribute("id", "searchkeyword");
    searchInput.addEventListener("keyup", () => {
        searchproduct();
    })
    searchInput.setAttribute("style", "width:70%;height:40px; outline: none; border-radius: 25px; border: none");
    searchDiv.appendChild(searchInput);

    var menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menuDiv");
    menuDiv.setAttribute("style", "width:20%; height:70px;");
    menuDiv.setAttribute("class", "d-flex justify-content-around align-items-center");

    var isloggedIn = sessionStorage.getItem("isloggedIn");

    if (isloggedIn) {
        var viewCart = document.createElement("span");
        viewCart.innerHTML = "ViewCart";
        viewCart.setAttribute("style", "color:white; cursor:pointer");


        // View Cart Functionality--------------
        // var mainDiv = document.querySelector("#mainDiv");
        viewCart.addEventListener("click", () => {

            viewcartfun();

        })
        var signOutOptions = document.createElement("span");
        signOutOptions.innerText = "Sign Out";
        signOutOptions.setAttribute("style", "color:white; cursor:pointer");

        signOutOptions.addEventListener("click", () => {
            SignOut(menuDiv, mainDiv);

        })
        menuDiv.appendChild(viewCart);
        menuDiv.appendChild(signOutOptions);
        header.appendChild(logoDiv);
        header.appendChild(searchDiv);
        header.appendChild(menuDiv);
        mainDiv.appendChild(header);


    } else {
        var signInOptions = document.createElement("span");
        signInOptions.innerText = "Sign in";
        signInOptions.setAttribute("style", "color:white; cursor:pointer");
        signInOptions.addEventListener("click", () => {

            SignIn(mainDiv);
        })

        var signUpOptions = document.createElement("span");
        signUpOptions.innerText = "Sign up";
        signUpOptions.setAttribute("style", "color:white; cursor:pointer");

        signUpOptions.addEventListener("click", () => {
            SignUp(mainDiv);
        })
        menuDiv.appendChild(signInOptions);
        menuDiv.appendChild(signUpOptions);
        header.appendChild(logoDiv);
        header.appendChild(searchDiv);
        header.appendChild(menuDiv);
        mainDiv.appendChild(header);
    }

}

function SignIn(mainDiv) {
    mainDiv.innerHTML = "";
    var loginpage = document.createElement("div");
    loginpage.setAttribute("style", "box-shadow:10px 10px 10px grey; padding:20px; width:30%; height: auto;  position:absolute; top:50%; left:50%; transform: translate(-50%,-50%); background-color: skyblue;");
    // loginpage.setAttribute("background-color: purple;")
    var email = document.createElement("input");
    var password = document.createElement("input");
    email.setAttribute("id", "email");
    password.setAttribute("id", "password")
    email.setAttribute("class", "form-control");
    password.setAttribute("class", "form-control mt-3");
    email.placeholder = "Enter email";

    password.placeholder = "password";

    var signInbutton = document.createElement("button");
    signInbutton.addEventListener("click", () => {
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;
        verification(email, password);

    })
    signInbutton.setAttribute("class", "mt-3 btn btn-success");
    signInbutton.innerHTML = "Sign In";

    var message = document.createElement("span");
    message.setAttribute("style", "color: red; margin: 30px; padding: 20px; cursor: pointer");
    message.innerHTML = "Create New Account";
    message.addEventListener("click", () => {
        SignUp(mainDiv);
    })

    loginpage.appendChild(email);
    loginpage.appendChild(password);
    loginpage.appendChild(signInbutton);
    loginpage.appendChild(message);
    mainDiv.appendChild(loginpage);
}


function SignUp(mainDiv) {
    var product = getProducts();
    mainDiv.innerHTML = "";
    var loginpage = document.createElement("div");
    loginpage.setAttribute("style", "box-shadow:10px 10px 10px grey; padding:20px; width:30%; height: auto;  position:absolute; top:50%; left:50%; transform: translate(-50%,-50%)");
    // loginpage.setAttribute("class", "container-fluid");
    mainDiv.setAttribute("style", "width: 100%; height: 100vh;");
    // mainDiv.setAttribute("class", "container-fluid d-flex align-items center justify-content center");

    var email = document.createElement("input");
    var password = document.createElement("input");
    email.setAttribute("class", "form-control");
    password.setAttribute("class", "form-control mt-3");
    email.setAttribute("id", "email");
    password.setAttribute("id", "password");
    email.placeholder = "Enter email";

    password.placeholder = "password";

    var signUpbutton = document.createElement("button");
    signUpbutton.setAttribute("class", "mt-3 btn btn-success")
    signUpbutton.innerHTML = "Sign Up";

    signUpbutton.addEventListener("click", () => {
        var email = document.querySelector("#email").value;
        var password = document.querySelector("#password").value;
        if (email == "" && password == "") {
            window.alert("Please enter email & password");
        }
        else {

            if (isUserExist(email, password))
                window.alert("User Already Exist..");
            else {
                var user = { email: email, password: password };
                var userList = JSON.parse(localStorage.getItem("userList"));
                userList.push(user);
                localStorage.setItem("userList", JSON.stringify(userList));
                window.alert("User Registered Successfully");
                mainDiv.innerHTML = "";
                CreateHeader();
                createCart(product);

            }
        }

    })

    var message = document.createElement("span");
    message.setAttribute("style", "color: red; margin: 30px; padding: 20px; cursor: pointer;");
    message.innerHTML = "Already have account";
    message.addEventListener("click", () => {
        SignIn(mainDiv);
    })

    loginpage.appendChild(email);
    loginpage.appendChild(password);
    loginpage.appendChild(signUpbutton);
    loginpage.appendChild(message);
    mainDiv.appendChild(loginpage);
}


function createCart(data) {
    var mainDiv = document.querySelector("#mainDiv");

    var cartContainer = document.createElement("div");
    cartContainer.setAttribute("class", "container-fluid mt-5 p-2 d-flex flex-wrap justify-content-around");
    cartContainer.setAttribute("style", " row-gap:10px; width:100%");
    cartContainer.setAttribute("id", "cart-container");
    let index = 0;
    for (let product of data) {
        index++;
        let cartDiv = document.createElement("div");
        cartDiv.setAttribute("style", "width:30%; height:500px; background-color: white; box-shadow : 4px 4px 7px 4px grey");
        cartDiv.setAttribute("class", " d-flex flex-column justify-content-center align-center");
        let productImg = document.createElement("img");
        productImg.setAttribute("src", product.thumbnail);
        productImg.setAttribute("style", "width:100%; height:300px;");
        cartDiv.appendChild(productImg);

        let title = document.createElement("h3");
        title.setAttribute("class", "text-center")
        title.innerHTML = product.title;
        cartDiv.appendChild(title);

        let price = document.createElement("p");
        price.setAttribute("class", "text-center text-success");
        price.innerHTML = "Price : " + product.price + " Rs.";
        cartDiv.appendChild(price);

        let addToCart = document.createElement("button");
        addToCart.setAttribute("class", "text-center ");
        addToCart.setAttribute("style", "width: 80%; height: 40px; background-color: gold; border: none; margin: auto")
        addToCart.id = "addtocart"+index;
        addToCart.innerHTML = "Add to Cart";
        addToCart.addEventListener("mouseover",()=>{
            addToCart.style.backgroundColor = "crimson";
            addToCart.style.color = "white";
        });
        addToCart.addEventListener("mouseout",()=>{
            addToCart.style.backgroundColor = "gold";
            addToCart.style.color = "black";
        });

        addToCart.addEventListener("click", () => {
            var isloggedIn = sessionStorage.getItem("isloggedIn");
            if (isloggedIn)
                saveProductInToCart(product);
            else
                window.alert("Sign in first");
        })

        cartDiv.appendChild(addToCart);

        cartContainer.appendChild(cartDiv);
    }
    mainDiv.appendChild(cartContainer);
}

function isUserExist(email, password) {
    console.log(email + "  " + password);
    var userList = localStorage.getItem("userList");
    userList = JSON.parse(userList);

    var user = userList.find((user) => { return user.email == email });

    console.log(user);
    return !!user;
}

function verification(email, password) {
    var userList = localStorage.getItem("userList");
    userList = JSON.parse(userList);

    var user = userList.find((user) => { return user.email == email && user.password == password });
    if (user) {
        var product = getProducts();
        window.alert("Sign in success...");

        var mainDiv = document.querySelector("#mainDiv");
        mainDiv.innerHTML = "";

        sessionStorage.setItem("isloggedIn", "true");
        sessionStorage.setItem("currentuser", email);
        CreateHeader();
        createCart(product);
    }
    else
        window.alert("Sign in Failed...");
}

function SignOut(menuDiv, mainDiv) {
    sessionStorage.clear();
    mainDiv.innerHTML = "";
    CreateHeader();
    createCart(getProducts());
    window.alert("Signout successfully");

}

function saveProductInToCart(product) {
    var currentUser = sessionStorage.getItem("currentuser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    let currentUserCartItems = cartList.find((obj) => { return obj.email == currentUser });
    window.alert(currentUser);
    if (currentUserCartItems) {
        var currentUserItemList = currentUserCartItems.cartItems;
        var productObj = currentUserItemList.find((obj) => { return obj.id == product.id });
        console.log(productObj);
        if (productObj)
            window.alert("Product is already added into cart");
        else {
            var index = cartList.findIndex((obj) => { return obj.email == currentUser });
            product.qty = 1;
            currentUserCartItems.cartItems.push(product);
            cartList.splice(index, 1);
            cartList.push(currentUserCartItems);
            localStorage.setItem("cartList", JSON.stringify(cartList));
            window.alert("Product added successfully...");
        }
    }
    else {
        var obj = { email: currentUser, cartItems: [] };
        product.qty = 1;
        obj.cartItems.push(product);
        cartList.push(obj);
        localStorage.setItem("cartList", JSON.stringify(cartList));
        window.alert("Prduct successfully added");
    }
}

function getBillAmount() {
    var currentUser = sessionStorage.getItem("currentuser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));

    var currentUserCartList = cartList.find((obj) => { return obj.email == currentUser });
    var cartItems = currentUserCartList.cartItems;
    var totalBill = 0;
    for (var product of cartItems) {
        totalBill = totalBill + (product.price * 1) * (product.qty * 1);
    }
    return totalBill;
}

function updateQty(productId, index) {
    var qty = document.querySelector("#qtychange" + index).value;
    var total = document.querySelector("#total" + index);

    var currentUser = sessionStorage.getItem("currentuser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var currentUserCartItems = cartList.find((obj) => { return obj.email == currentUser });
    var cartItems = currentUserCartItems.cartItems;

    var productIndex = cartItems.findIndex((obj) => { return obj.id == productId });
    var product = cartItems[productIndex];
    product.qty = qty;

    // cartItems.splice(productIndex,1);
    cartItems.splice(productIndex, 1, product);
    // window.alert(product.qty);

    currentUserCartItems.cartItems = cartItems;

    var currentUserCartListIndex = cartList.findIndex((obj) => { return obj.email == currentUser });
    // cartList.splice(currentUserCartListIndex,1);
    cartList.splice(currentUserCartListIndex, 1, currentUserCartItems);
    localStorage.setItem("cartList", JSON.stringify(cartList));


    total.innerHTML = "" + ((product.price * 1) * qty);
    // window.alert(total);

    var totalBillLabel = document.querySelector("#totalBillLabel");
    totalBillLabel.innerHTML = "<p>Total Bill : " + getBillAmount() + "</p>";

}

function searchproduct() {
    var keywords = document.querySelector("#searchkeyword").value;
    var productList = JSON.parse(localStorage.getItem("productList"));
    var filterData = productList.filter((product) => { return product.title.toUpperCase().includes(keywords.toUpperCase()) });

    document.querySelector("#cart-container").remove();
    if (filterData.length == 0)
        createCart(productList);
    else
        createCart(filterData);
}

function viewcartfun() {
    var header = document.querySelector("#header");
    header.setAttribute("style", "position: absolute; width: 100%; top:0; left: 0;")
    var menuDiv = document.querySelector("#menuDiv");
    menuDiv.innerHTML = "";

    var home = document.createElement("span");
    home.innerHTML = "Home";
    home.setAttribute("style", "color:white; cursor:pointer");
    home.addEventListener("click", () => {
        mainDiv.innerHTML = "";
        CreateHeader();
        createCart(getProducts());
    })


    var signout = document.createElement("span");
    signout.innerText = "Sign Out";
    signout.setAttribute("style", "color:white; cursor:pointer");

    signout.addEventListener("click", () => {
        SignOut(menuDiv, mainDiv);

    })

    menuDiv.appendChild(home);
    menuDiv.appendChild(signout);

    header.appendChild(menuDiv);
    mainDiv.appendChild(header);

    var container = document.querySelector("#cart-container");
    container.innerHTML = "";
    var currentUser = sessionStorage.getItem("currentuser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));

    var currentUsercartList = cartList.find((obj) => { return obj.email == currentUser });
    var cardItems = currentUsercartList.cartItems;

    var viewCartContainer = document.createElement("div");
    // viewCartContainer.setAttribute("class","container row");
    // viewCartContainer.setAttribute("class", "")
    // viewCartContainer.setAttribute("style", "border: 10px solid red; width: 100%; height: 100vh;")

    var row = document.createElement("div");
    row.setAttribute("class", "row mt-5");

    var left = document.createElement("div");
    left.setAttribute("class", "col-md-7 p-5");
    // left.setAttribute("style", "width:70%; height: 100%; border:1px solid blue; ")

    var table = document.createElement("table");
    // table.setAttribute("style","overflow-y:scroll; height: 300px");
    // table.setAttribute("style", "width:100%; border: 1px solid black; text-center;");
    table.setAttribute("class", "table text-center");
    var tr = document.createElement("tr");
    // tr.setAttribute("style", "border: 1px solid black");
    var th1 = document.createElement("th");
    th1.innerHTML = "S.no";
    var th2 = document.createElement("th");
    th2.innerHTML = "Product Image";
    var th3 = document.createElement("th");
    th3.innerHTML = "Name";
    var th4 = document.createElement("th");
    th4.innerHTML = "Price";
    var th5 = document.createElement("th");
    th5.innerHTML = "Qty."
    var th6 = document.createElement("th");
    th6.innerHTML = "Total";
    var th7 = document.createElement("th");
    th7.innerHTML = "Delete"

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);
    tr.appendChild(th7)
    table.appendChild(tr);

    for (let index in cardItems) {
        let tr = document.createElement("tr");
        // tr.setAttribute("style", "border: 1px solid black");
        let Sno = document.createElement("td");
        Sno.innerHTML = ""+((index*1)+1);
        let td = document.createElement("td");
        let productimg = document.createElement("img");
        productimg.setAttribute("style","width: 100px; height: 100px");
        productimg.setAttribute("src",cardItems[index].thumbnail);
        td.appendChild(productimg);

        let name = document.createElement("td");
        name.innerHTML = cardItems[index].title;
        let price = document.createElement("td");
        price.innerHTML = cardItems[index].price;
        let qty = document.createElement("td");
        qty.innerHTML = "<input onchange='updateQty(" + cardItems[index].id + "," + index + ")' style='width:50px' id='qtyChange" + index + "' type='number' min='1' value='"+getQuantity(index)+"'/>";
        let total = document.createElement("td");
        total.setAttribute("id", "total" + index);
        total.innerHTML = cardItems[index].price;
        let deleteicon = document.createElement("td");
        let icon = document.createElement("i");
        icon.setAttribute("class","fa-solid fa-trash fa-lg");
        deleteicon.appendChild(icon);

        tr.appendChild(Sno);
        tr.appendChild(td);
        tr.appendChild(name);
        tr.appendChild(price);
        tr.appendChild(qty);
        tr.appendChild(total);
        tr.appendChild(deleteicon);

        table.appendChild(tr);

    }

    left.appendChild(table);
    row.appendChild(left);

    var right = document.createElement("div");
    right.setAttribute("class", "col-md-3 ");
    // right.setAttribute("style", "width:30%; height: 100%; border:1px solid black; text-align: center;")

    var orderdetail = document.createElement("div");
    orderdetail.setAttribute("class", "container border ml-5 mt-5 p-3");
    orderdetail.setAttribute("style", "box-shadow: 4px 4px 7px 4px black");

    var title = document.createElement("h1");
    title.innerHTML = "Order Detail";

    var totalitems = document.createElement("p");
    totalitems.innerHTML = "Total items : " + cardItems.length;

    var totalbill = document.createElement("p");
    totalbill.setAttribute("id", "totalBillLabel")
    totalbill.innerHTML = "Total Bill : " + getBillAmount();

    var checkoutButton = document.createElement("button");
    checkoutButton.innerHTML = "Checkout";
    checkoutButton.setAttribute("style", "background-color : gold; border: none; width: 150px; height: 40px; font-weight: bold");
    checkoutButton.addEventListener("click", () => {
        left.innerHTML = "";
        var payment = document.createElement("div");
        payment.setAttribute("class", "container d-flex flex-column text-center p-3 border");
        payment.setAttribute("style", "box-shadow: 4px 4px 7px 4px gray")
        // payment.setAttribute("style","width : 80%; height: 80%")

        var heading = document.createElement("h1");
        heading.setAttribute("class", "mb-4");
        heading.innerHTML = "For Payment";

        var name = document.createElement("input");
        name.setAttribute("id","name");
        name.setAttribute("type", "name");
        name.placeholder = "Enter Name";
        name.setAttribute("class", " ml-5 p-3");
        name.setAttribute("style", "width: 80%; height: 40px; outline: none;")
        var nameerror = document.createElement("small");
        nameerror.setAttribute("class","mb-5 text-danger")
        nameerror.setAttribute("id","firstname");
        name.addEventListener("keyup",()=>{
            validationfname();
        })

        var email = document.createElement("input");
        email.setAttribute("type", "email");
        email.setAttribute("id","email");
        email.setAttribute("class", " ml-5 p-3");
        email.setAttribute("style", "width: 80%; height: 40px; outline: none;");
        email.placeholder = "Email address";
        var emailerror = document.createElement("small");
        emailerror.setAttribute("id","emailerror");
        emailerror.setAttribute("class","mb-5 text-danger");
        email.addEventListener("keyup",()=>{
            validationemail();
        })
        
        var phone = document.createElement("input");
        // phone.setAttribute("type", "number");
        phone.setAttribute("id","phone");
        phone.setAttribute("class", "ml-5 p-3")
        phone.setAttribute("style", "width: 80%; height: 40px; outline: none;");
        phone.placeholder = "Phone number";
        var phoneerror = document.createElement("small");
        phoneerror.setAttribute("class","mb-5 text-danger");
        phoneerror.setAttribute("id","phoneerror");
        phone.addEventListener("keyup",()=>{
            validationphone();
        })

        // var amount = document.createElement("input");
        // amount.setAttribute("class", "ml-5 mb-4 p-3");
        // amount.setAttribute("style", "width: 80%; height: 40px; outline: none;");
        // amount.placeholder = "Enter amount";
        // amount.setAttribute("value",""+getBillAmount());
        let div = document.createElement("div");
        let labelforPrice = document.createElement("label");
        labelforPrice.setAttribute("style","display:inline;font-size:25px;font-weight:900;")
        labelforPrice.innerHTML = "Total Bill :- "
        var amount = document.createElement("input");
        amount.setAttribute("class", "ml-5 mb-4 p-3 disabled");
        // amount.id = "totalAmount";
        amount.disabled = "true";
        amount.setAttribute("style", "width: 20%; height: 40px; outline: none;display-inline");
        amount.placeholder = "Enter amount";
        amount.setAttribute("value",""+getBillAmount());



        var buttons = document.createElement("div");
        var proceedTopay = document.createElement("button");
        proceedTopay.setAttribute("class", "mb-3");
        proceedTopay.innerHTML = "Proceed To Pay";
        proceedTopay.setAttribute("style", "width: 150px; height: 40px");
        proceedTopay.addEventListener("click",()=>{
           return validation();
        })


        var back = document.createElement("button");
        back.innerHTML = "Back";
        back.setAttribute("class", "ml-5 mb-3");
        back.setAttribute("style", "width: 150px; height: 40px");

        back.addEventListener("click", () => {
            viewCartContainer.innerHTML = "";
            viewcartfun(); 
        })

        buttons.appendChild(proceedTopay);
        buttons.appendChild(back);

        payment.appendChild(heading);
        payment.appendChild(name);
        payment.appendChild(nameerror);
        payment.appendChild(email);
        payment.appendChild(emailerror);
        payment.appendChild(phone);
        payment.appendChild(phoneerror);
        payment.appendChild(div);
        div.appendChild(labelforPrice);
        div.appendChild(amount);
        payment.appendChild(buttons);
        left.appendChild(payment);
    })


    orderdetail.appendChild(title);
    orderdetail.appendChild(totalitems);
    orderdetail.appendChild(totalbill);
    orderdetail.appendChild(checkoutButton);

    right.appendChild(orderdetail);

    row.appendChild(right);

    viewCartContainer.appendChild(row);
    mainDiv.appendChild(viewCartContainer);
}

function getQuantity(index){
    var currentUser = sessionStorage.getItem("currentuser");
    var cartList = JSON.parse(localStorage.getItem("cartList"));

    var currentusercartList = cartList.find((obj)=>{return obj.email == currentUser});

    var qty = currentusercartList.cartItems[index].qty;
    
    return qty;
}

function validationfname() {
    var status = true;
    var fname = document.getElementById("name").value;
    var fnameerror = document.getElementById("firstname");
    if (fname.length == 0) {
        status = false;
        fnameerror.innerHTML = "name is required";
    } else if (!isNaN(fname)) {
        status = false;
        fnameerror.innerHTML = "name must be character";
    } else {
        status = true;
        fnameerror.innerHTML = "";
    }
    return status;
}

function validationemail() {
    var status = true;
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailerror");
    if (email.length == 0) {
        status = false;
        emailError.innerHTML = "Email id is required";
    }
    else {
        let atTheRateIndex = email.indexOf("@");
        if (atTheRateIndex == -1) {
            status = false;
            emailError.innerHTML = "Invalid email (@ not present)";
            return status;
        }
        let lastIndexOfAtTheRate = email.lastIndexOf("@");
        if (atTheRateIndex != lastIndexOfAtTheRate) {
            status = false;
            emailError.innerHTML = "Invalid email ( 2 @ present)";
            return status;
        }

        let stringAfterAtTheRate = email.substring(atTheRateIndex);
        let dotIndex = stringAfterAtTheRate.lastIndexOf(".");
        if (dotIndex == -1) {
            status = false;
            emailError.innerHTML = "Invalid email ( . not present)";
            return status;
        }

        let domainString = stringAfterAtTheRate.substring(dotIndex);
        if (!(domainString == ".in" || domainString == ".com")) {
            status = false;
            emailError.innerHTML = "Invalid email ( .in or .com not present)";
            return status;
        }

        if (email.charAt(0) == '@') {
            status = false;
            emailError.innerHTML = "Invalid email ( starting with @)";
            return status;
        }

        emailError.innerHTML = "";
    }
    return status;
}

function validationphone() {
    var phoneobj = document.getElementById("phone").value;
    var phonerror = document.getElementById("phoneerror");
    status = true;
    if (isNaN(phoneobj)) {
        status = false;
        phonerror.innerHTML = "Only number allow";
    } else if (phoneobj.length != 10) {
        status = false;
        phonerror.innerHTML = "number must be 10 digit";
    } else {
        status = true;
        phonerror.innerHTML = "";
    }
    return status;
}

function validation() {
    var fnamestatus = validationfname();
    var emailstatus = validationemail();
    var phonestatus = validationphone();
    if (fnamestatus &&  emailstatus && phonestatus){
        document.querySelector("#mainDiv").innerHTML = "";
        window.alert("Payment Successfully");
        CreateHeader();
        createCart(getProducts());
        return true;
    }
    return false;
}