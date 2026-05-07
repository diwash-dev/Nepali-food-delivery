const FOODS = [
  {
    id: 1,
    name: "Buff Momo",
    category: "nepali",
    desc: "Steamed buff dumplings served with spicy tomato achar.",
    price: "Rs. 180",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1687068283776-fd69669beab8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Samosa",
    category: "nepali",
    desc: "Crispy fried pastries filled with spiced potatoes and peas.",
    price: "Rs. 120",
    rating: 4.6,
    img: "https://plus.unsplash.com/premium_photo-1695297516710-854716c51121?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Newari Khaja",
    category: "nepali",
    desc: "Traditional Newari platter of bara, chatamari, achaar and gundruk.",
    price: "Rs. 360",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1694923450868-b432a8ee52aa?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Dal Bhat Tarkari",
    category: "nepali",
    desc: "Complete Nepali meal with dal, bhat, tarkari, achar and papad.",
    price: "Rs. 250",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1565556250026-9ba22083e3e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Chicken Sekuwa",
    category: "nepali",
    desc: "Charcoal-grilled chicken marinated in traditional Nepali spices.",
    price: "Rs. 340",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1671393002836-487b4cc61a9c?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Thakali Set",
    category: "nepali",
    desc: "Hearty Thakali thali with ghee, achar, dal and seasonal veggies.",
    price: "Rs. 420",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1568713852801-44dd04bbff05?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Gundruk Ko Jhol",
    category: "nepali",
    desc: "Sour and spicy vegetable soup made from fermented leafy greens.",
    price: "Rs. 140",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1593252719532-53f183016149?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Chatamari",
    category: "nepali",
    desc: "Rice pancake topped with minced meat, egg, and fresh herbs.",
    price: "Rs. 220",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
  },
];

const RESTAURANTS = [
  {
    name: "Kathmandu Momo House",
    cuisine: "Nepali · Tibetan",
    time: "25–30 min",
    rating: 4.9,
    status: "open",
    discount: "20% OFF",
    img: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Newa Bhanchha Ghar",
    cuisine: "Newari · Traditional",
    time: "35–45 min",
    rating: 4.8,
    status: "open",
    discount: "15% OFF",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Himalayan Sekuwa",
    cuisine: "Thakali · Grill",
    time: "30–40 min",
    rating: 4.7,
    status: "open",
    discount: "10% OFF",
    img: "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Thakali Kitchen",
    cuisine: "Thakali · Dal Bhat",
    time: "30–35 min",
    rating: 5.0,
    status: "open",
    discount: "25% OFF",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Nepali Spice Hub",
    cuisine: "Fusion · Nepali",
    time: "40–50 min",
    rating: 4.6,
    status: "closed",
    discount: null,
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bhatti Grill & Bar",
    cuisine: "Grill · Drinks",
    time: "20-30 min",
    rating: 4.7,
    status: "open",
    discount: "30% OFF",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TESTIMONIALS = [
  {
    name: "Sita Sharma",
    stars: 5,
    comment:
      "Ordered momo at 11 PM and it arrived in 28 minutes — absolutely hot and delicious! NepBhoj is a lifesaver.",
    img: "https://i.pravatar.cc/60?img=5",
  },
  {
    name: "Bikash Thapa",
    stars: 5,
    comment:
      "The Thakali set tasted exactly like my grandma's cooking. The app is smooth and delivery was right on time.",
    img: "https://i.pravatar.cc/60?img=11",
  },
  {
    name: "Priya Maharjan",
    stars: 5,
    comment:
      "Best Newari Khaja delivery in Kathmandu! The food was packed perfectly and the portion was very generous.",
    img: "https://i.pravatar.cc/60?img=9",
  },
  {
    name: "Rohan Adhikari",
    stars: 4,
    comment:
      "Great selection of restaurants. Used the 40% off coupon on my first order — saved a good amount. Will order again!",
    img: "https://i.pravatar.cc/60?img=3",
  },
  {
    name: "Anisha Gurung",
    stars: 5,
    comment:
      "Smooth experience from start to finish. Live tracking is a cool feature. Sekuwa was perfectly charcoal-grilled!",
    img: "https://i.pravatar.cc/60?img=47",
  },
];

/* ─── LOADER ──────────────────────────────────────────── */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    // Show floating notification after 3s
    setTimeout(showNotification, 3000);
  }, 2000);
});

/* ─── SCROLL PROGRESS ─────────────────────────────────── */
window.addEventListener("scroll", () => {
  const el = document.getElementById("scroll-progress");
  const pct =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  el.style.width = pct + "%";
});

/* ─── STICKY NAVBAR ───────────────────────────────────── */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
  document
    .getElementById("back-to-top")
    .classList.toggle("visible", window.scrollY > 400);
});

/* ─── HAMBURGER MENU ──────────────────────────────────── */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close on nav link click (mobile)
navLinks.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

/* ─── ACTIVE NAV LINKS ────────────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinkEls.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`,
    );
  });
});

/* ─── SEARCH TOGGLE ───────────────────────────────────── */
document.getElementById("search-toggle").addEventListener("click", () => {
  const navSearch = document.getElementById("nav-search");
  navSearch.classList.toggle("open");
  if (navSearch.classList.contains("open")) {
    navSearch.querySelector("input").focus();
  }
});

const searchInput = document.querySelector("#nav-search input");
const searchButton = document.querySelector("#nav-search button");

function filterFoodByQuery() {
  const query = searchInput.value.trim().toLowerCase();
  const filteredFoods = query
    ? FOODS.filter(
        (food) =>
          food.name.toLowerCase().includes(query) ||
          food.desc.toLowerCase().includes(query) ||
          food.category.toLowerCase().includes(query),
      )
    : FOODS;

  renderFoodCards(filteredFoods);
}

searchInput.addEventListener("input", filterFoodByQuery);
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  filterFoodByQuery();
});


document.getElementById("back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function renderFoodCards(data) {
  const grid = document.getElementById("food-grid");
  grid.innerHTML = data
    .map(
      (food) => `
    <div class="food-card" data-cat="${food.category}">
      <div class="food-card-img">
        <img src="${food.img}" alt="${food.name}" loading="lazy" />
        <button class="heart-btn" aria-label="Favourite">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="food-card-body">
        <h3><a href="#contact">${food.name}</a></h3>
        <p>${food.desc}</p>
        <div class="food-card-footer">
          <div>
            <div class="food-price">${food.price}</div>
            <div class="food-rating">
              <i class="fas fa-star"></i> ${food.rating}
            </div>
          </div>
          <button class="add-cart-btn" data-name="${food.name}" data-price="${food.price}">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  attachFoodCardEvents();
}

function attachFoodCardEvents() {
  // Heart toggle
  document.querySelectorAll(".heart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("active");
    });
  });

  // Add to cart
  document.querySelectorAll(".add-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.name);
    });
  });
}

renderFoodCards(FOODS);

document.querySelectorAll(".filter-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.dataset.filter;
    const filtered =
      filter === "all" ? FOODS : FOODS.filter((f) => f.category === filter);
    renderFoodCards(filtered);
  });
});

let cartCount = 0;

function addToCart(name) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;

  // Show toast
  const toast = document.getElementById("cart-toast");
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 2200);

  // Button pulse animation
  const badge = document.getElementById("cart-count");
  badge.style.transform = "scale(1.5)";
  setTimeout(() => (badge.style.transform = ""), 300);
}


function renderRestaurants() {
  const grid = document.getElementById("restaurant-grid");
  grid.innerHTML = RESTAURANTS.map(
    (r) => `
    <div class="rest-card">
      <div class="rest-img">
        <img src="${r.img}" alt="${r.name}" loading="lazy" />
        ${r.discount ? `<span class="rest-badge">${r.discount}</span>` : ""}
        <span class="rest-status ${r.status}">${r.status === "open" ? "🟢 Open" : "🔴 Closed"}</span>
      </div>
      <div class="rest-body">
        <h3>${r.name}</h3>
        <p class="rest-cuisine">${r.cuisine}</p>
        <div class="rest-meta">
          <span><i class="fas fa-clock"></i> ${r.time}</span>
          <span><i class="fas fa-star" style="color:#facc15"></i> ${r.rating}</span>
        </div>
      </div>
    </div>
  `,
  ).join("");
}
renderRestaurants();

function buildTestimonials() {
  const track = document.getElementById("testimonials-track");
  track.innerHTML = TESTIMONIALS.map(
    (t) => `
    <div class="testimonial-card">
      <div class="testi-quote"><i class="fas fa-quote-left"></i></div>
      <p class="testi-text">${t.comment}</p>
      <div class="testi-header">
        <img src="${t.img}" alt="${t.name}" loading="lazy" />
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-stars">${"★".repeat(t.stars)}${"☆".repeat(5 - t.stars)}</div>
        </div>
      </div>
    </div>
  `,
  ).join("");

  // Dots
  const dotsEl = document.getElementById("slider-dots");
  dotsEl.innerHTML = TESTIMONIALS.map(
    (_, i) =>
      `<div class="dot ${i === 0 ? "active" : ""}" data-idx="${i}"></div>`,
  ).join("");
  dotsEl.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", () => goToSlide(+dot.dataset.idx));
  });
}
buildTestimonials();

let currentSlide = 0;
let autoSlideInterval;

function goToSlide(idx) {
  const track = document.getElementById("testimonials-track");
  const cardWidth = track.querySelector(".testimonial-card").offsetWidth + 24; // 24 = margin
  const maxSlide = Math.max(
    0,
    TESTIMONIALS.length -
      Math.floor(track.parentElement.offsetWidth / cardWidth),
  );
  currentSlide = Math.min(idx, maxSlide);
  track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  document
    .querySelectorAll(".dot")
    .forEach((d, i) => d.classList.toggle("active", i === currentSlide));
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    const nextIdx = (currentSlide + 1) % TESTIMONIALS.length;
    goToSlide(nextIdx);
  }, 4500);
}

startAutoSlide();

// Pause on hover
document
  .getElementById("testimonial-slider")
  .addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
document
  .getElementById("testimonial-slider")
  .addEventListener("mouseleave", startAutoSlide);


function startCountdown() {
  const deadline = new Date();
  deadline.setHours(
    deadline.getHours() + 11,
    deadline.getMinutes() + 42,
    deadline.getSeconds() + 7,
  );

  function tick() {
    const now = new Date();
    const diff = Math.max(deadline - now, 0);
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    const pad = (n) => String(n).padStart(2, "0");
    document.getElementById("cd-h").textContent = pad(h);
    document.getElementById("cd-m").textContent = pad(m);
    document.getElementById("cd-s").textContent = pad(s);

    if (diff > 0) setTimeout(tick, 1000);
  }
  tick();
}
startCountdown();

/* ─── COPY COUPON ─────────────────────────────────────── */
document.getElementById("copy-coupon").addEventListener("click", () => {
  const code = document.getElementById("coupon-code").textContent;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.getElementById("copy-coupon");
    btn.innerHTML = 'Copied! <i class="fas fa-check"></i>';
    setTimeout(
      () => (btn.innerHTML = 'Copy Code <i class="fas fa-copy"></i>'),
      2000,
    );
  });
});

/* ─── ANIMATED COUNTERS ───────────────────────────────── */
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent =
      Math.floor(current).toLocaleString() + (target > 999 ? "+" : "");
  }, 16);
}

/* ─── SCROLL REVEAL ───────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal-section")
  .forEach((el) => revealObserver.observe(el));

/* ─── COUNTER OBSERVER ────────────────────────────────── */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".counter").forEach(animateCounter);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);

const statsSection = document.getElementById("stats");
if (statsSection) {
  counterObserver.observe(statsSection);
  if (statsSection.getBoundingClientRect().top < window.innerHeight) {
    statsSection.querySelectorAll(".counter").forEach(animateCounter);
    counterObserver.unobserve(statsSection);
  }
}

/* ─── CONTACT FORM ────────────────────────────────────── */
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector("button[type='submit']");
  btn.innerHTML = 'Sent! <i class="fas fa-check"></i>';
  btn.style.background = "linear-gradient(135deg,#4ade80,#22d3ee)";
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    btn.style.background = "";
    e.target.reset();
  }, 3000);
});

/* ─── FLOATING NOTIFICATION ───────────────────────────── */
function showNotification() {
  const notif = document.getElementById("float-notif");
  notif.classList.remove("hidden");
  setTimeout(() => notif.classList.add("hidden"), 5000);
}
document.getElementById("close-notif").addEventListener("click", () => {
  document.getElementById("float-notif").classList.add("hidden");
});

/* ─── PARTICLE CANVAS ─────────────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");
  let W,
    H,
    particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const COLORS = [
    "rgba(255,107,0,0.6)",
    "rgba(250,204,21,0.5)",
    "rgba(255,140,56,0.4)",
  ];

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 2.5 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = Math.random() * 0.6 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ─── MOUSE GLOW ──────────────────────────────────────── */
document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".glow-1");
  if (!glow) return;
  const x = (e.clientX / window.innerWidth) * 30;
  const y = (e.clientY / window.innerHeight) * 30;
  glow.style.transform = `translate(${x}px, ${y}px)`;
});

/* ─── SMOOTH SCROLL for all anchor links ─────────────── */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ─── LAZY IMAGE LOADING via IntersectionObserver ────── */
if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        imgObserver.unobserve(img);
      }
    });
  });
  document
    .querySelectorAll("img[data-src]")
    .forEach((img) => imgObserver.observe(img));
}
