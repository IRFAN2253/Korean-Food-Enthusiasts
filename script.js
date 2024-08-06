document.addEventListener("DOMContentLoaded", function() {
    console.log("Web Penjualan ready!");

    const products = [
        {
            name: "SAMYANG",
            description: "Samyang adalah merek mi instan yang berasal dari Korea Selatan. Mi instan ini terkenal karena rasanya yang pedas dan bumbu khusus yang membuatnya menjadi salah satu mie instan yang populer di seluruh dunia. Mi Samyang memiliki berbagai varian rasa, seperti pedas original, pedas carbonara, pedas mala, dan varian rasa lainnya.",
            price: "Rp 22.500",
            image: "https://daebak.fi/cdn/shop/products/buldak-original-4.jpg?v=1679393834&width=1445",
            id: "product1"
        },
        {
            name: "TTEOKBOKKI",
            description: "Tteokbokki adalah hidangan Korea yang terbuat dari kue beras yang dimasak dalam bumbu gochujang yang pedas dan manis. Tteokbokki biasanya disajikan dengan irisan telur rebus, potongan keju, dan beberapa sayuran. Tteokbokki berasal dari masakan istana Dinasti Joseon yang disebut gungjung tteokbokki.",
            price: "Rp 15.000",
            image: "https://mukbangshow.ae/wp-content/uploads/2023/11/tteokbokki__food_photography_soft_cinematic_lights__3792483c-acc2-4b9d-9218-45dfe36a40d9.png.webp",
            id: "product2"
        },
        {
            name: "RABOKKI",
            description: "Rabokki adalah kombinasi mie ramen dan dukboki (tteokbokki). Rabokki biasanya dibeli dari pedagang kaki lima atau pojangmacha (restoran tenda kecil di atas roda, atau warung pinggir jalan). Rabokki memiliki ciri khas tampilan warna yang kemerahan karena memiliki rasa yang cukup pedas. Di dalamnya terdapat campuran bubuk cabai dan gochujang atau pasta cabai khas Korea.",
            price: "Rp 30.000",
            image: "https://i.pinimg.com/originals/b8/78/cf/b878cf0bdc4d740791f41c0fc5ec4938.jpg",
            id: "product3"
        },
        {
            name: "JAJANGMYEON",
            description: "Jajangmyeon (atau jjajangmyeon) adalah jenis masakan Korea yaitu mi saus pasta kacang kedelai hitam. Jajangmyeon dipengaruhi kuliner Tionghoa, dan orang Tiongkok biasa menyebutnya Zhajiangmian (炸醬麵). Jajang artinya saus goreng, dan myeon artinya mi.",
            price: "Rp 28.000",
            image: "https://nomadette.com/wp-content/uploads/2022/03/Chicken-Jajangmyeon-mix.jpg",
            id: "product4"
        },
        {
            name: "BOKKEUMBAP",
            description: "Bokkeum-bap (bahasa Korea: 볶음밥), atau nasi goreng, adalah hidangan khas Korea yang dibuat dengan menumis nasi matang (bap) bersama bahan-bahan lain menggunakan minyak. Nama bahan utama selain nasi biasanya ditempatkan di bagian depan nama hidangan, seperti pada kimchi-bokkeum-bap (nasi goreng kimchi).",
            price: "Rp 25.000",
            image: "https://img.freepik.com/premium-photo/bokkeumbap-koreanstyle-fried-rice-cooked-with-various-ingredients-like-vegetables-rice-dish_921026-31870.jpg",
            id: "product5"
        },
        {
            name: "BULGOGI",
            description: "Bulgogi (bahasa Korea: 불 api, dan 고기 daging) adalah olahan daging asal Korea. Daging yang digunakan antara lain daging sirloin atau bagian daging sapi pilihan. Bumbu bulgogi adalah campuran kecap asin dan gula ditambah rempah lain bergantung pada resep dan daerah di Korea. Sebelum dimakan, daun selada digunakan untuk membungkus bulgogi bersama kimchi, bawang putih, atau bumbu penyedap lain.",
            price: "Rp 42.500",
            image: "https://realfood.tesco.com/media/images/1400x919TescoRecipeGaps4359BeefBulgogi-2465d798-711d-40d5-9386-47ca560b7973-0-1400x919.jpg",
            id: "product6"
        },
        {
            name: "JAPCHAE",
            description: "Japchae adalah makanan Korea berupa sohun (dang myeon) yang dicampur dengan berbagai jenis sayuran dan daging sapi. Makanan ini termasuk salah satu banchan, dan dimakan sebagai lauk, terutama dalam pesta dan kesempatan khusus. Sayuran yang digunakan biasanya sayuran yang sedang musim. Japchae ditulis dengan dua aksara hanja, jap (hangul:잡, hanja:雜, dicampur dan diaduk) dan chae (hangul:채, hanja:菜, sayuran).",
            price: "Rp 24.500",
            image: "https://sixhungryfeet.com/wp-content/uploads/2023/01/Vegan-Japchae-8.jpg",
            id: "product7"
        },
        {
            name: "BUNGEOPPANG",
            description: "Bungeo-ppang (붕어빵; 'ikan mas') adalah kue serupa wafel dengan bentuk ikan mas yang populer di Korea. Bungeo-ppang terasa manis legit karena diisi pasta kacang merah. Beberapa penjaja menawarkan bungeo-ppang yang diisi dengan krim custard, yang mana disebut “chou-cream bungeoppang”. Bungeo-ppang dibuat dengan cara dipanggang menggunakan alat yang mirip dengan cetakan besi untuk wafel, tetapi cetakan tersebut berbentuk ikan mas. Bungeo-ppang banyak dijajakan sebagai makanan kaki lima, terutama saat musim dingin.",
            price: "Rp 12.000",
            image: "https://assets.kompasiana.com/items/album/2023/01/21/81c1ff41d947f4ead7889fbea9ed6665-63cb28624addee72d26a8f92.jpg?t=o&v=770",
            id: "product8"
        },
        {
            name: "BANANA MILK",
            description: "Banana milk adalah minuman susu rasa pisang yang pertama kali diperkenalkan oleh perusahaan Korea Selatan, Binggrae, pada tahun 1974. Minuman ini mengandung sekitar 85% susu, air murni, gula, konsentrat sari pisang, karoten, serta perasa buatan pisang dan vanili. Banana milk sangat populer di Korea Selatan dan sering muncul dalam drama Korea.",
            price: "Rp 10.000",
            image: "https://i.pinimg.com/564x/f5/54/4e/f5544eda001a03448d9df3199e33e030.jpg",
            id: "product9"
        }
    ];

    const productsContainer = document.getElementById('products');
    const productDetailsContainer = document.getElementById('productDetails');
    const productsLink = document.getElementById('productsLink');
    const contactLink = document.getElementById('contactLink');
    const aboutLink = document.getElementById('aboutLink');
    const productCheckboxesContainer = document.getElementById('productCheckboxes');
    const purchaseLink = document.getElementById('purchaseLink');
    const purchaseFormOverlay = document.getElementById('purchaseFormOverlay');
    const closeFormButton = document.getElementById('closeForm');
    const purchaseForm = document.getElementById('purchaseForm');
    const contactUsContainer = document.getElementById('contactUs');
    const aboutUsContainer = document.getElementById('aboutUs');
    const homeLink = document.getElementById('homeLink');
    const welcomeMessage = document.getElementById("welcomeMessage");
    const invoiceDetails = document.getElementById('invoiceDetails');
    const invoiceModal = document.getElementById('invoiceModal');

    welcomeMessage.style.display = "block";

    function showWelcomeMessage() {
        welcomeMessage.style.display = "block";
        productDetailsContainer.style.display = "none";
        productsContainer.style.display = "none";
        contactUsContainer.style.display = "none";
        aboutUsContainer.style.display = "none";
    }

    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        showWelcomeMessage();
    });

    let productsAdded = false;

    function displayProducts() {
        if (!productsAdded) {
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product';

                productElement.innerHTML = `
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}" id="${product.id}">
                `;

                productElement.addEventListener('click', () => showProductDetails(product));
                productsContainer.appendChild(productElement);
            });
            productsAdded = true;
        }
    }

    function showProductDetails(product) {
        welcomeMessage.style.display = "none";
        productDetailsContainer.style.display = "block";
        productDetailsContainer.innerHTML = `
            <h2>Detail Produk</h2>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p> 
            <h4 class="product-price">Harga : ${product.price}</h4>
            <img src="${product.image}" alt="${product.name}" style="width: 50%; height: auto;">
        `;
        productDetailsContainer.style.display = 'block';
    }

    function displayProductCheckboxes() {
        productCheckboxesContainer.innerHTML = '';

        products.forEach((product, index) => {
            const checkboxElement = document.createElement('div');
            checkboxElement.className = 'product-checkbox';

            checkboxElement.innerHTML = `
                <input type="checkbox" id="product${index}" name="products" value="${product.name}">
                <label for="product${index}">${product.name} - ${product.price}</label>
                <input type="text" id="quantity${index}" name="quantity${index}" placeholder="Jumlah" size="1">
            `;

            productCheckboxesContainer.appendChild(checkboxElement);
        });
    }

    function formatCurrency(value) {
        return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace('Rp ', '').replace(',', '.');
    }
    
    function calculateTotalPrice(selectedProducts) {
        return selectedProducts.reduce((total, product) => {
            const price = parseInt(product.price.replace(/Rp\s|[\.,]/g, ''));
            return total + (price * product.quantity);
        }, 0);
    }
    
    function generateInvoice(selectedProducts, totalPrice, formData) {
        let invoiceContent = `
            <p><strong>Nama :</strong> ${formData.get('name')}</p>
            <p><strong>Alamat Pengiriman :</strong> ${formData.get('address')}</p>
            <p><strong>Metode Pembayaran :</strong> ${formData.get('paymentMethod')}</p>
            <h3>Detail Pembelian :</h3>
            <table border="1" style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th class="bagian">Produk</th>
                        <th class="bagian">Jumlah</th>
                        <th class="bagian">Harga Satuan</th>
                        <th class="bagian">Total</th>
                    </tr>
                </thead>
                <tbody>`;
    
        selectedProducts.forEach(product => {
            const price = parseInt(product.price.replace(/Rp\s|[\.,]/g, ''));
            const total = price * product.quantity;
            invoiceContent += `
                <tr>
                    <td class="struk">${product.name}</td>
                    <td class="struk">${product.quantity} Porsi</td>
                    <td class="struk">${formatCurrency(price)}</td>
                    <td class="struk">${formatCurrency(total)}</td>
                </tr>`;
        });
    
        invoiceContent += `
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3" class="total"><strong>Total Harga</strong></td>
                        <td class="total">${formatCurrency(totalPrice)}</td>
                    </tr>
                </tfoot>
            </table>`;
    
        invoiceDetails.innerHTML = invoiceContent;
    
        invoiceModal.style.display = 'block';
    
        const closeButton = document.querySelector('#invoiceModal .close');
        closeButton.onclick = function() {
            invoiceModal.style.display = 'none';
            setTimeout(() => {
                alert('Semoga Anda puas dengan pelayanan kami.\nJangan lupa datang kembali ;)');
            }, 100); 
        }
    
        window.onclick = function(event) {
            if (event.target === invoiceModal) {
                invoiceModal.style.display = 'none';
                setTimeout(() => {
                    alert('Semoga Anda puas dengan pelayanan kami.\nJangan lupa datang kembali ;)');
                }, 100); 
            }
        }
    }

    purchaseFormOverlay.style.display = 'none';

    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(purchaseForm);
        const selectedProducts = [];

        products.forEach((product, index) => {
            const quantity = parseInt(formData.get(`quantity${index}`));
            if (quantity > 0) {
                selectedProducts.push({
                    name: product.name,
                    price: product.price,
                    quantity: quantity
                });
            }
        });

        const totalPrice = calculateTotalPrice(selectedProducts);

        const paymentMethod = formData.get('paymentMethod');
        alert(`Terima Kasih ${formData.get('name')}! Pembelian Anda telah diterima.\n${selectedProducts.map(p => `${p.name} : ${p.quantity} Porsi`).join('\n')}\nTotal Harga : ${formatCurrency(totalPrice)}\nAlamat Pengiriman : ${formData.get('address')}\nMetode Pembayaran : ${paymentMethod}`);
        generateInvoice(selectedProducts, totalPrice, formData);
        purchaseFormOverlay.style.display = 'none';
    }

    purchaseLink.addEventListener('click', function(event) {
        event.preventDefault();
        displayProductCheckboxes();
        purchaseFormOverlay.style.display = 'block';
    });

    closeFormButton.addEventListener('click', function() {
        purchaseFormOverlay.style.display = 'none';
    });

    purchaseForm.addEventListener('submit', handleFormSubmit);

    productsContainer.style.display = 'none';
    contactUsContainer.style.display = 'none';
    aboutUsContainer.style.display = 'none';
    purchaseFormOverlay.style.display = 'none';

    productsLink.addEventListener('click', function(event) {
        event.preventDefault();
        productsContainer.style.display = 'block';
        welcomeMessage.style.display = 'block';
        contactUsContainer.style.display = 'none';
        aboutUsContainer.style.display = 'none';
        displayProducts();
        productDetailsContainer.style.display = 'none';
        purchaseFormOverlay.style.display = 'none';
        window.scrollTo(0, document.body.scrollHeight);
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        contactUsContainer.style.display = 'block';
        aboutUsContainer.style.display = 'none';
        welcomeMessage.style.display = 'none';
        productsContainer.style.display = 'none';
        productDetailsContainer.style.display = 'none';
        purchaseFormOverlay.style.display = 'none';
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        welcomeMessage.style.display = 'block';
        productsContainer.style.display = 'none';
        contactUsContainer.style.display = 'none';
        aboutUsContainer.style.display = 'none';
        productDetailsContainer.style.display = 'none';
        purchaseFormOverlay.style.display = 'none';
    });

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutUsContainer.style.display = 'block';
        contactUsContainer.style.display = 'none';
        welcomeMessage.style.display = 'none';
        productsContainer.style.display = 'none';
        productDetailsContainer.style.display = 'none';
        purchaseFormOverlay.style.display = 'none';
    });
});
