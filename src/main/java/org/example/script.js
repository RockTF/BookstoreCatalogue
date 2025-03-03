document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const products = document.querySelectorAll(".product");

    searchInput.addEventListener("input", function () {
        const filter = searchInput.value.toLowerCase();
        products.forEach((product) => {
            const productName = product.getAttribute("data-name").toLowerCase();
            product.style.display = productName.includes(filter) ? "block" : "none";
        });
    });

    const productButtons = document.querySelectorAll(".product-button");
    productButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const product = button.closest(".product");
            const title = product.querySelector(".product-title").innerText;
            const price = product.querySelector(".product-price").innerText;
            alert("Product: " + title + "\nPrice: " + price);
        });
    });
});
