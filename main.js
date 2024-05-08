let products = document.querySelectorAll(".product");
let btns = document.querySelectorAll('[data-tab]');

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        if(btn.dataset.tab === "all"){
            products.forEach(product => {
                product.classList.remove("hidden");
            });
        }
        else {
            let category = this.dataset.tab;
            products.forEach(product => {
                if (product.dataset.category === category) {
                    product.classList.remove("hidden");
                }
                else {
                    product.classList.add("hidden");
                }
                
            })
        }
        
    })
})