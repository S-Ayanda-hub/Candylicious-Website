/* ---------- 1. Product database (dynamic content) ---------- */
const PRODUCTS = {
    "toblerone": {
        name: "Toblerone Milk Chocolate 20g",
        price: 29,
        category: "Chocolates",
        image: "img/toble-20g.webp",
        thumbs: ["img/MON301_130x.webp", "img/MON301-3_130x.webp"],
        description: "Get ready for the iconic, triangular Swiss milk chocolate bar that has delighted taste buds around the world since 1908."
    },
    "mms-honey-roasted-nut": {
        name: "M&M's Honey Roasted Nut 49g",
        price: 59,
        category: "Chocolates",
        image: "img/mms-honey-roasted-nut.webp",
        thumbs: [],
        description: "Roasted peanuts covered in milk chocolate, a savoury-sweet twist on the classic M&M's."
    },
    "reeses-big-cup-marshmallow": {
        name: "Reese's Big Cup with Marshmallow 39g",
        price: 69,
        category: "Chocolates",
        image: "img/reeses-big-cup-marshmallow.webp",
        thumbs: [],
        description: "A giant peanut butter cup filled with a soft marshmallow layer."
    },
    "hersheys-choco-tubes-almond": {
        name: "Hershey's Choco Tubes Almond 21g",
        price: 15,
        category: "Chocolates",
        image: "img/hersheys-choco-tubes-almond.webp",
        thumbs: [],
        description: "Crispy chocolate tubes filled with almond pieces."
    },
    "boom-dubai-chocolate-bar": {
        name: "It's a BOOM Dubai Chocolate Bar 45g",
        price: 45,
        category: "Chocolates",
        image: "img/boom-dubai-chocolate-bar.webp",
        thumbs: [],
        description: "The viral Dubai chocolate bar, filled with pistachio kadayif."
    },
    "jelly-belly": {
        name: "Jelly Belly Assorted",
        price: 99,
        category: "Sweets",
        image: "img/jelly-belly-20-assorted.webp",
        thumbs: [],
        description: "A colourful selection of authentic Jelly Belly jelly beans."
    },
    "nerds-gummy-clusters-juiced": {
        name: "NERDS Gummy Clusters Juiced 127g",
        price: 119,
        category: "Sweets",
        image: "img/nerds-gummy-clusters-juiced.webp",
        thumbs: [],
        description: "Crunchy nerds wrapped around a juicy gummy centre."
    },
    "nerds-gummy-clusters-very-berry": {
        name: "NERDS Gummy Clusters Very Berry 85g",
        price: 89,
        category: "Sweets",
        image: "img/nerds-gummy-clusters-very-berry.webp",
        thumbs: [],
        description: "Very berry flavoured gummy clusters from the viral NERDS range."
    },
    "mike-and-ike-sour-blue-raspberry": {
        name: "Mike and Ike Sour Blue Raspberry 22g",
        price: 15,
        category: "Sweets",
        image: "img/mike-and-ike-sour-blue-raspberry.webp",
        thumbs: [],
        description: "Sour blue raspberry chewy candies in a handy box."
    },
    "sour-jacks-watermelon": {
        name: "SOUR JACKS Watermelon 142g",
        price: 99,
        category: "Sweets",
        image: "img/sour-jacks-watermelon.webp",
        thumbs: [],
        description: "Watermelon flavoured sour chewy sweets."
    },
    "pandy-winegums": {
        name: "Pandy Winegums 50g",
        price: 59,
        category: "Sweets",
        image: "img/pandy-winegums.webp",
        thumbs: [],
        description: "Classic South African winegums."
    },
    "laffy-taffy-strawberry": {
        name: "Laffy Taffy Stretchy & Tangy Strawberry 42g",
        price: 49,
        category: "Sweets",
        image: "img/laffy-taffy-strawberry.webp",
        thumbs: [],
        description: "Stretchy, tangy strawberry taffy with a joke on every wrapper."
    },
    "enchilokas-watermelon": {
        name: "Enchilokas Watermelon (Chilli Gummies) 150g",
        price: 79,
        category: "Sweets",
        image: "img/enchilokas-watermelon.webp",
        thumbs: [],
        description: "Watermelon gummies coated in tamarind and chilli, straight from Mexico."
    },
    "rice-krispies-treat-original": {
        name: "Rice Krispies Treat Original 37g",
        price: 45,
        category: "Sweets",
        image: "img/rice-krispies-treat-original.webp",
        thumbs: [],
        description: "The classic crispy marshmallow rice treat."
    },
    "slime-lickers": {
        name: "Toxic Waste Slime Lickers 2.0",
        price: 69,
        category: "Novelties",
        image: "img/slime-lickers.webp",
        thumbs: [],
        description: "The famous rolling sour liquid candy, in green or pink."
    },
    "jojo-giant-funday-dog": {
        name: "JOJO Giant Funday Dog 90g",
        price: 69,
        category: "Novelties",
        image: "img/jojo-giant-funday-dog.webp",
        thumbs: [],
        description: "A giant candy dog, a fun novelty for kids."
    },
    "hubba-bubba-max-blue-raspberry": {
        name: "Hubba Bubba Max Sour Blue Raspberry",
        price: 45,
        category: "Novelties",
        image: "img/hubba-bubba-max-blue-raspberry.webp",
        thumbs: [],
        description: "Sour blue raspberry bubble gum."
    },
    "jojo-hammer-candy-gum-watermelon": {
        name: "JOJO Hammer Candy Gum Watermelon 40g",
        price: 8,
        category: "Novelties",
        image: "img/jojo-hammer-candy-gum-watermelon.webp",
        thumbs: [],
        description: "Watermelon candy gum in a hammer-shaped container."
    },
    "kids-mania-sweet-soaker": {
        name: "Kids Mania Sweet Soaker",
        price: 55,
        category: "Novelties",
        image: "img/kids-mania-sweet-soaker.webp",
        thumbs: [],
        description: "A candy spray bottle for a sweet sour blast."
    },
    "odd-sox-oreo": {
        name: "ODD Sox Oreo Cookies",
        price: 299,
        category: "Merchandise",
        image: "img/odd-sox-mens-crew-oreo-cookies-.webp",
        thumbs: [],
        description: "Crew socks with an Oreo cookies design."
    },
    "odd-boxers-airheads": {
        name: "ODD Boxers Airheads Flavors",
        price: 399,
        category: "Merchandise",
        image: "img/odd-boxers-airheads.webp",
        thumbs: [],
        description: "Boxers printed with Airheads candy flavours."
    },
    "coca-cola-travel-bag-red": {
        name: "Coca-Cola Travel Bag (Red)",
        price: 699,
        category: "Merchandise",
        image: "img/coca-cola-travel-bag-red.webp",
        thumbs: [],
        description: "A licensed Coca-Cola travel bag."
    },
    "toxic-waste-giant-money-bank": {
        name: "Toxic Waste Giant Money Bank 168g",
        price: 399,
        category: "Merchandise",
        image: "img/toxic-waste-giant-money-bank.webp",
        thumbs: [],
        description: "A giant money bank filled with Toxic Waste candies."
    }
};

/* ---------- 2. Shopping cart (localStorage) ---------- */
const Cart = {
    read() {
        try { return JSON.parse(localStorage.getItem("candyCart")) || []; }
        catch { return []; }
    },
    write(items) {
        localStorage.setItem("candyCart", JSON.stringify(items));
        Cart.updateBadge();
    },
    add(id, qty) {
        const items = Cart.read();
        const existing = items.find(i => i.id === id);
        if (existing) { existing.qty += qty; } else { items.push({ id, qty }); }
        Cart.write(items);
        const product = PRODUCTS[id];
        Cart.toast(`${product ? product.name : "Item"} added to cart`);
    },
    count() {
        return Cart.read().reduce((sum, i) => sum + i.qty, 0);
    },
    total() {
        return Cart.read().reduce((sum, i) => {
            const p = PRODUCTS[i.id];
            return sum + (p ? p.price * i.qty : 0);
        }, 0);
    },
    updateBadge() {
        const badge = document.querySelector(".cart-count");
        if (badge) { badge.textContent = Cart.count(); }
    },
    toast(message) {
        const toast = document.createElement("div");
        toast.className = "cart-toast";
        toast.setAttribute("role", "status");
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3200);
    }
};

/* ---------- 3. Dynamic product detail page ---------- */
function renderProductPage() {
    const info = document.querySelector(".product-information");
    if (!info) return;

    const params = new URLSearchParams(window.location.search);
    const key = params.get("product") || "toblerone";
    const product = PRODUCTS[key] || PRODUCTS.toblerone;

    document.title = `Candylicious | ${product.name}`;
    info.querySelector("h2").textContent = product.name;
    info.querySelector(".price").textContent = `R${product.price}`;
    const desc = info.querySelector(".description");
    if (desc) { desc.textContent = product.description; }

    const gallery = document.querySelector(".product-gallery");
    if (gallery) {
        const main = gallery.querySelector("img");
        main.src = product.image;
        main.alt = product.name;
        const thumbs = gallery.querySelector(".thumbnail-row");
        if (thumbs) {
            thumbs.innerHTML = "";
            (product.thumbs || []).forEach(t => {
                const img = document.createElement("img");
                img.src = t;
                img.alt = `${product.name} thumbnail`;
                thumbs.appendChild(img);
            });
        }
    }

    const hero = document.querySelector(".hero h1");
    if (hero) { hero.textContent = product.name; }
    const heroP = document.querySelector(".hero p");
    if (heroP) { heroP.textContent = `${product.category} | R${product.price}`; }

    const addBtn = info.querySelector(".add-to-cart-btn");
    if (addBtn) {
        addBtn.addEventListener("click", () => {
            const qtyInput = document.getElementById("quantity");
            const qty = Math.max(1, parseInt(qtyInput ? qtyInput.value : "1", 10) || 1);
            Cart.add(key, qty);
        });
    }
}

/* ---------- 4. Shop filters, sorting and results counter ---------- */
function initShop() {
    const cards = Array.from(document.querySelectorAll(".product-card[data-category]"));
    const checkboxes = Array.from(document.querySelectorAll('.filters input[name="category"], .filters input[name="price"]'));
    const sortSelect = document.getElementById("sort");
    const counter = document.getElementById("results-count");
    const clearBtn = document.getElementById("clear-filters");
    if (!cards.length || !checkboxes.length) return;

    const priceMatch = (price, value) => {
        if (value === "0-50") return price < 50;
        if (value === "50-100") return price >= 50 && price <= 100;
        if (value === "100+") return price > 100;
        return false;
    };

    function applyFilters() {
        const cats = Array.from(document.querySelectorAll('.filters input[name="category"]:checked')).map(c => c.value);
        const prices = Array.from(document.querySelectorAll('.filters input[name="price"]:checked')).map(c => c.value);

        let visible = 0;
        cards.forEach(card => {
            const cat = card.dataset.category;
            const price = Number(card.dataset.price);
            const catOK = cats.length === 0 || cats.includes(cat);
            const priceOK = prices.length === 0 || prices.some(v => priceMatch(price, v));
            const show = catOK && priceOK;
            card.style.display = show ? "" : "none";
            if (show) { visible++; }
        });

        document.querySelectorAll(".category-section").forEach(section => {
            const visibleCards = section.querySelectorAll('.product-card:not([style*="display: none"])');
            section.style.display = visibleCards.length ? "" : "none";
        });

        if (counter) { counter.textContent = `Showing ${visible} of ${cards.length} products`; }
    }

    function applySort() {
        if (!sortSelect) return;
        const mode = sortSelect.value;
        document.querySelectorAll(".category-section").forEach(section => {
            const grid = section.querySelector(".product-grid");
            if (!grid) return;
            const cardsInGrid = Array.from(grid.querySelectorAll(".product-card"));
            if (mode === "low" || mode === "high") {
                cardsInGrid.sort((a, b) =>
                    mode === "low" ? Number(a.dataset.price) - Number(b.dataset.price)
                        : Number(b.dataset.price) - Number(a.dataset.price)
                );
                cardsInGrid.forEach(card => grid.appendChild(card));
            }
        });
    }

    checkboxes.forEach(cb => cb.addEventListener("change", applyFilters));
    if (sortSelect) { sortSelect.addEventListener("change", applySort); }
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            checkboxes.forEach(cb => (cb.checked = false));
            applyFilters();
        });
    }
    applyFilters();
}

/* ---------- 5. Form validation with ARIA error messages ---------- */
function validateField(field, errorEl, checks) {
    const value = field.value.trim();
    let message = "";

    for (const check of checks) {
        const [type, param, text] = check;
        let failed = false;
        if (type === "required") { failed = value === ""; }
        else if (type === "email") { failed = value !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value); }
        else if (type === "minlength") { failed = value.length < param; }
        else if (type === "pattern") { failed = value !== "" && !new RegExp(param).test(value); }
        if (failed) { message = text; break; }
    }

    if (message) {
        errorEl.textContent = message;
        field.setAttribute("aria-invalid", "true");
        return false;
    }
    errorEl.textContent = "";
    field.setAttribute("aria-invalid", "false");
    return true;
}

function initForm(formId, successId, fieldRules) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", event => {
        event.preventDefault();
        let allValid = true;
        let firstInvalid = null;

        fieldRules.forEach(({ fieldId, errorId, checks }) => {
            const field = document.getElementById(fieldId);
            const errorEl = document.getElementById(errorId);
            if (!field || !errorEl) return;
            const ok = validateField(field, errorEl, checks);
            if (!ok && !firstInvalid) { firstInvalid = field; }
            allValid = allValid && ok;
        });

        const successEl = document.getElementById(successId);
        if (allValid) {
            successEl.textContent = "Thank you! Your form has been submitted successfully.";
            form.reset();
        } else {
            successEl.textContent = "";
            if (firstInvalid) { firstInvalid.focus(); }
        }
    });

    Object.keys(fieldRules).forEach(key => {
        const rule = fieldRules[key];
        const field = document.getElementById(rule.fieldId);
        const errorEl = document.getElementById(rule.errorId);
        if (field && errorEl) {
            field.addEventListener("blur", () => validateField(field, errorEl, rule.checks));
            field.addEventListener("input", () => {
                if (field.getAttribute("aria-invalid") === "true") {
                    validateField(field, errorEl, rule.checks);
                }
            });
        }
    });
}

/* ---------- 6. Newsletter feedback ---------- */
function initNewsletter() {
    const form = document.querySelector(".newsletter-form");
    if (!form) return;
    form.addEventListener("submit", e => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (!input || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim())) {
            Cart.toast("Please enter a valid email address");
            return;
        }
        Cart.toast(`Thank you! ${input.value.trim()} has been added to the mailing list.`);
        form.reset();
    });
}

/* ---------- 7. Cart badge in header ---------- */
function initCartBadge() {
    const header = document.querySelector(".header-inner");
    if (!header || document.querySelector(".cart-link")) return;
    const link = document.createElement("a");
    link.className = "cart-link";
    link.href = "#";
    link.innerHTML = `Cart <span class="cart-count">${Cart.count()}</span>`;
    link.setAttribute("aria-label", `Shopping cart, ${Cart.count()} items`);
    link.addEventListener("click", e => {
        e.preventDefault();
        const items = Cart.read();
        if (!items.length) { Cart.toast("Your cart is empty"); return; }
        const lines = items.map(i => `${(PRODUCTS[i.id] || {}).name || i.id} x${i.qty}`).join(", ");
        Cart.toast(`Cart: ${lines} | Total: R${Cart.total()}`);
    });
    header.appendChild(link);
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
    renderProductPage();
    initShop();
    initNewsletter();
    initCartBadge();
    Cart.updateBadge();

    initForm("enquiry-form", "enq-success", [
        { fieldId: "enq-name", errorId: "err-name", checks: [["required", null, "Please enter your full name."], ["minlength", 2, "Name must be at least 2 characters."]] },
        { fieldId: "enq-email", errorId: "err-email", checks: [["required", null, "Please enter your email address."], ["email", null, "Please enter a valid email address."]] },
        { fieldId: "enq-phone", errorId: "err-phone", checks: [["required", null, "Please enter your contact number."], ["pattern", "^[0-9+ ()-]{9,15}$", "Please enter a valid contact number."]] },
        { fieldId: "enq-type", errorId: "err-type", checks: [["required", null, "Please choose an enquiry type."]] },
        { fieldId: "enq-message", errorId: "err-message", checks: [["required", null, "Please enter your message."], ["minlength", 20, "Message must be at least 20 characters."]] }
    ]);

    initForm("contact-form", "ct-success", [
        { fieldId: "ct-name", errorId: "err-ct-name", checks: [["required", null, "Please enter your name."], ["minlength", 2, "Name must be at least 2 characters."]] },
        { fieldId: "ct-email", errorId: "err-ct-email", checks: [["required", null, "Please enter your email address."], ["email", null, "Please enter a valid email address."]] },
        { fieldId: "ct-subject", errorId: "err-ct-subject", checks: [["required", null, "Please enter a subject."]] },
        { fieldId: "ct-message", errorId: "err-ct-message", checks: [["required", null, "Please enter your message."], ["minlength", 20, "Message must be at least 20 characters."]] }
    ]);

    initForm("support-form", "support-success", [
        { fieldId: "support-email", errorId: "err-support-email", checks: [["required", null, "Please enter your email address."], ["email", null, "Please enter a valid email address."]] },
        { fieldId: "issue", errorId: "err-issue", checks: [["required", null, "Please describe your issue."], ["minlength", 20, "Please describe the issue in at least 20 characters."]] }
    ]);
});
