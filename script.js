/**
 * ============================================================================
 * SPICE GARDEN — LUXURY MODERN INDIAN RESTAURANT
 * Production Frontend Application Script
 * Vanilla ES6+ (Zero external libraries)
 * ============================================================================
 */

'use strict';

// ----------------------------------------------------------------------------
// 1. GLOBAL CONFIGURATION & PHONE NUMBER CONSTANT
// ----------------------------------------------------------------------------
/**
 * Customizable WhatsApp Phone Number (International format without '+' or spaces)
 * E.g., "919876543210" for +91 98765 43210
 */
const WHATSAPP_PHONE = "919876543210";

// ----------------------------------------------------------------------------
// 2. CURATED MENU DATA ARCHITECTURE
// ----------------------------------------------------------------------------
const MENU_DATA = [
  // --- BIRYANIS ---
  {
    id: "biryani-1",
    title: "Awadhi Dum Gosht Biryani",
    category: "biryani",
    price: 645,
    isVeg: false,
    spiceLevel: 2,
    tag: "Chef's Signature",
    description: "Slow-cooked milk-fed mutton layered with two-year-aged Dehradun basmati, saffron, kewra water, and sealed with dough crust in a clay handi.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "biryani-2",
    title: "Subz Nizami Handi Biryani",
    category: "biryani",
    price: 465,
    isVeg: true,
    spiceLevel: 1,
    tag: "Bestseller",
    description: "Seasonal garden baby vegetables, malai paneer cubes, fresh mint leaves, caramelized shallots, and whole spices infused with royal saffron.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "biryani-3",
    title: "Chettinad Kozhi Biryani",
    category: "biryani",
    price: 545,
    isVeg: false,
    spiceLevel: 3,
    tag: "Fiery Heritage",
    description: "Aromatic seeraga samba short-grain rice cooked with country chicken, freshly crushed black peppercorns, star anise, and stone-ground Chettinad masala.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80"
  },

  // --- STARTERS & TANDOOR ---
  {
    id: "starter-1",
    title: "Galouti Kebab on Ulta Tawa Paratha",
    category: "starters",
    price: 585,
    isVeg: false,
    spiceLevel: 2,
    tag: "Royal Heritage",
    description: "Legendary melt-in-the-mouth smoked lamb patties infused with 32 royal spices, served on warm saffron-scented mini griddle bread.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "starter-2",
    title: "Peshawari Paneer Tikka",
    category: "starters",
    price: 465,
    isVeg: true,
    spiceLevel: 1,
    tag: "Bestseller",
    description: "Artisanal hand-churned cottage cheese marinated in yellow chilli, mustard oil, carom seeds, and char-grilled in a clay tandoor.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "starter-3",
    title: "Murgh Angara Tikka",
    category: "starters",
    price: 525,
    isVeg: false,
    spiceLevel: 2,
    tag: "Smoked Classic",
    description: "Boneless chicken steeped in smoked Kashmiri red chillies, hung Greek yogurt, cold-pressed mustard oil, and coriander root glaze.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "starter-4",
    title: "Dahi Ke Kebab",
    category: "starters",
    price: 425,
    isVeg: true,
    spiceLevel: 1,
    tag: "Chef Special",
    description: "Silken hung curd patties infused with green chillies, cardamom powder, and roasted gram flour, pan-crisped to golden perfection.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },

  // --- SOUTH INDIAN CURATIONS ---
  {
    id: "south-1",
    title: "Ghee Roast Masala Dosa",
    category: "south-indian",
    price: 295,
    isVeg: true,
    spiceLevel: 2,
    tag: "Bestseller",
    description: "Paper-thin, golden crisp fermented rice and lentil crepe roasted in pure A2 bilona ghee, spiced potato podi, served with 3 coconut chutneys.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "south-2",
    title: "Kundapur Prawn Ghee Roast",
    category: "south-indian",
    price: 675,
    isVeg: false,
    spiceLevel: 3,
    tag: "Coastal Gem",
    description: "Wild Arabian Sea prawns tossed in a fiery, tangy Byadgi chilli paste, whole crushed spices, and clarified butter from Mangalore.",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "south-3",
    title: "Meen Pollichathu",
    category: "south-indian",
    price: 695,
    isVeg: false,
    spiceLevel: 2,
    tag: "Kerala Classic",
    description: "Pearl spot fish fillet coated in shallot and kokum masala, wrapped in smoked banana leaf and slow-griddled with curry leaves.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
  },

  // --- ROYAL MAINS ---
  {
    id: "main-1",
    title: "Grand Old Delhi Butter Chicken",
    category: "main-course",
    price: 565,
    isVeg: false,
    spiceLevel: 1,
    tag: "All-Time Favorite",
    description: "Charcoal-tandoored chicken simmered in a velvety reduction of sun-ripened tomatoes, white churned butter, and fragrant kasoori methi.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-2",
    title: "Dal Spice Garden (36-Hour Bukhara)",
    category: "main-course",
    price: 485,
    isVeg: true,
    spiceLevel: 1,
    tag: "House Signature",
    description: "Whole black urad lentils slow-simmered over smoldering charcoal for 36 continuous hours with cream, butter, and sun-dried tomatoes.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-3",
    title: "Paneer Lababdar",
    category: "main-course",
    price: 495,
    isVeg: true,
    spiceLevel: 1,
    tag: "Bestseller",
    description: "Succulent cottage cheese cubes and grated paneer folded into a rich onion-cashew nut gravy finished with ginger juliennes.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-4",
    title: "Awadhi Nalli Nihari",
    category: "main-course",
    price: 695,
    isVeg: false,
    spiceLevel: 2,
    tag: "Heritage Stew",
    description: "Slow-braised lamb shanks stewed overnight in an aromatic Awadhi potli masala stock, topped with fresh rose petals and ginger.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
  },

  // --- ARTISANAL BEVERAGES ---
  {
    id: "bev-1",
    title: "Kesari Kesar Pista Lassi",
    category: "beverages",
    price: 225,
    isVeg: true,
    spiceLevel: 0,
    tag: "Patron Favorite",
    description: "Thick hand-churned curd infused with Kashmiri saffron strands, green cardamom powder, and garnished with roasted pistachios.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bev-2",
    title: "Smoked Tamarind Cooler",
    category: "beverages",
    price: 245,
    isVeg: true,
    spiceLevel: 1,
    tag: "House Mocktail",
    description: "Roasted cumin seeds, tangy tamarind pulp, fresh crushed mint leaves, Himalayan black salt, topped with chilled effervescent soda.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bev-3",
    title: "Royal Rose & Basil Seed Sharbat",
    category: "beverages",
    price: 195,
    isVeg: true,
    spiceLevel: 0,
    tag: "Summer Elixir",
    description: "Pure Damascus rose petal extract, soaked sabja (sweet basil) seeds, chilled coconut milk, and edible golden leaf mist.",
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=800&q=80"
  }
];

// ----------------------------------------------------------------------------
// 3. GALLERY DATA (For Lightbox Navigation)
// ----------------------------------------------------------------------------
const GALLERY_DATA = [
  {
    title: "Awadhi Dum Biryani in Clay Pot",
    tag: "Signature Creation",
    caption: "Slow-cooked under a dough seal with Kashmiri saffron, aged basmati, and royal spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Handcrafted Peshawari Paneer Tikka",
    tag: "Live Tandoor",
    caption: "Charcoal-roasted cottage cheese marinated in yellow chilli, mustard oil, and hung curd.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "The Main Royal Dining Hall",
    tag: "Ambiance",
    caption: "Hand-carved woodwork screens, plush velvet booths, and intimate warm amber chandelier glow.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Dal Spice Garden (36 Hours)",
    tag: "Heritage Slow Pot",
    caption: "Slowly simmered over smoldering charcoal embers and finished with organic cultured butter.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Artisanal Saffron Coolers",
    tag: "Beverage Program",
    caption: "Ancient botanical infusions, roasted cumin seeds, and cold-pressed tamarind essences.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Ghee Roast Dosa & Chutneys",
    tag: "South Indian Craft",
    caption: "Crispy fermented crepe roasted in pure A2 bilona cow ghee with gun-powder podi spice.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=85"
  }
];

// ----------------------------------------------------------------------------
// 4. DOM CONTENT LOADED ENTRY POINT
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileDrawer();
  initMenuRenderer();
  initGalleryLightbox();
  initReservationForm();
  initScrollSpy();
  initScrollReveal();
  initDynamicYear();
});

// ----------------------------------------------------------------------------
// 5. STICKY HEADER & ELEVATION ON SCROLL
// ----------------------------------------------------------------------------
function initStickyHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check
}

// ----------------------------------------------------------------------------
// 6. MOBILE NAVIGATION DRAWER
// ----------------------------------------------------------------------------
function initMobileDrawer() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const closeBtn = document.getElementById("drawer-close");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add("active");
    overlay.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent body scroll
  };

  const closeDrawer = () => {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // Keyboard Escape Key listener
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("active")) {
      closeDrawer();
    }
  });
}

// ----------------------------------------------------------------------------
// 7. INTERACTIVE MENU RENDERER & FILTERING
// ----------------------------------------------------------------------------
function initMenuRenderer() {
  const grid = document.getElementById("menu-grid");
  const filterTabs = document.querySelectorAll(".filter-tab");
  if (!grid || !filterTabs.length) return;

  // Helper function to render spice level peppers
  const renderSpiceLevel = (level) => {
    if (level === 0) return `<span class="spice-rating" title="Mild / Non-Spicy">🌿 Mild</span>`;
    let chilies = "";
    for (let i = 0; i < level; i++) {
      chilies += "&#127798;";
    }
    const label = level === 1 ? "Mild Spice" : level === 2 ? "Medium Spice" : "Hot & Fiery";
    return `<span class="spice-rating" title="${label}">${chilies} <span style="font-size:0.75rem">(${label})</span></span>`;
  };

  // Helper function to render dishes
  const renderDishes = (category = "all") => {
    grid.innerHTML = "";
    const filtered = category === "all" 
      ? MENU_DATA 
      : MENU_DATA.filter(item => item.category === category);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--color-text-muted);">
          <p>No dishes found in this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(dish => {
      const card = document.createElement("article");
      card.className = "menu-card";
      card.setAttribute("data-category", dish.category);

      const dietaryDotClass = dish.isVeg ? "veg-dot" : "nonveg-dot";
      const dietaryLabel = dish.isVeg ? "Vegetarian" : "Non-Vegetarian";

      // Build WhatsApp order message for micro-CTA
      const waText = encodeURIComponent(`Hello Spice Garden! I would like to order: ${dish.title} (₹${dish.price}). Please confirm availability.`);
      const waLink = `https://wa.me/${WHATSAPP_PHONE}?text=${waText}`;

      card.innerHTML = `
        <div class="card-img-wrap">
          <img 
            src="${dish.image}" 
            alt="${dish.title}" 
            class="card-img" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';"
          >
          ${dish.tag ? `<span class="card-tag">${dish.tag}</span>` : ""}
        </div>
        <div class="card-body">
          <div class="card-top-row">
            <div class="dish-title-group">
              <span class="dietary-dot ${dietaryDotClass}" title="${dietaryLabel}" aria-label="${dietaryLabel}"></span>
              <h3 class="dish-name">${dish.title}</h3>
            </div>
            <span class="dish-price">&#8377;${dish.price}</span>
          </div>
          <div class="card-meta-row">
            ${renderSpiceLevel(dish.spiceLevel)}
            <span class="category-badge">${dish.category.replace("-", " ")}</span>
          </div>
          <p class="dish-desc">${dish.description}</p>
          <div class="card-footer">
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-card-order" aria-label="Order ${dish.title} on WhatsApp">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  };

  // Initial render (All items)
  renderDishes("all");

  // Tab click listeners
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const category = tab.getAttribute("data-category");
      renderDishes(category);
    });
  });
}

// ----------------------------------------------------------------------------
// 8. ACCESSIBLE FOOD & AMBIANCE GALLERY LIGHTBOX
// ----------------------------------------------------------------------------
function initGalleryLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const backdrop = document.getElementById("lightbox-backdrop");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const imgEl = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const descEl = document.getElementById("lightbox-desc");
  const tagEl = document.getElementById("lightbox-tag");
  const counterEl = document.getElementById("lightbox-counter");
  const galleryCards = document.querySelectorAll(".gallery-card");

  if (!modal || !galleryCards.length) return;

  let currentIndex = 0;
  let lastActiveElement = null;

  const updateLightboxContent = (index) => {
    const item = GALLERY_DATA[index];
    if (!item) return;

    imgEl.src = item.image;
    imgEl.alt = item.title;
    titleEl.textContent = item.title;
    descEl.textContent = item.caption;
    tagEl.textContent = item.tag;
    counterEl.textContent = `${index + 1} of ${GALLERY_DATA.length}`;
  };

  const openLightbox = (index) => {
    currentIndex = index;
    lastActiveElement = document.activeElement;
    updateLightboxContent(currentIndex);
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  };

  const closeLightbox = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastActiveElement && typeof lastActiveElement.focus === "function") {
      lastActiveElement.focus();
    }
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % GALLERY_DATA.length;
    updateLightboxContent(currentIndex);
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length;
    updateLightboxContent(currentIndex);
  };

  // Event Listeners for Cards
  galleryCards.forEach(card => {
    const index = parseInt(card.getAttribute("data-gallery-index"), 10) || 0;

    card.addEventListener("click", () => openLightbox(index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });
  });

  // Controls listeners
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", showNext);
  if (prevBtn) prevBtn.addEventListener("click", showPrev);

  // Keyboard navigation inside lightbox
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowRight") {
      showNext();
    } else if (e.key === "ArrowLeft") {
      showPrev();
    }
  });
}

// ----------------------------------------------------------------------------
// 9. LOCATION & RESERVATION FORM VALIDATION & CUSTOM TOAST
// ----------------------------------------------------------------------------
function initReservationForm() {
  const form = document.getElementById("reservation-form");
  const dateInput = document.getElementById("res-date");
  const toast = document.getElementById("reservation-toast");
  const toastCloseBtn = document.getElementById("toast-close-btn");
  const toastDismissBtn = document.getElementById("toast-dismiss-btn");
  const toastWaBtn = document.getElementById("toast-whatsapp-btn");

  if (!form) return;

  // Set today as minimum allowable reservation date
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // Toast close helpers
  let toastTimer = null;
  const hideToast = () => {
    if (toast) toast.classList.remove("active");
    if (toastTimer) clearTimeout(toastTimer);
  };

  if (toastCloseBtn) toastCloseBtn.addEventListener("click", hideToast);
  if (toastDismissBtn) toastDismissBtn.addEventListener("click", hideToast);

  // Form Submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll(".field-error").forEach(el => el.textContent = "");
    document.querySelectorAll(".form-control").forEach(el => el.classList.remove("invalid"));

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date.value;
    const time = form.time.value;
    const guests = form.guests.value;
    const seating = form.seating.value;
    const notes = form.notes.value.trim();

    let isValid = true;

    // Validate Name
    if (!name || name.length < 2) {
      document.getElementById("error-name").textContent = "Please enter your full name (minimum 2 letters).";
      form.name.classList.add("invalid");
      isValid = false;
    }

    // Validate Phone (At least 10 digits/characters)
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone || phoneDigits.length < 10) {
      document.getElementById("error-phone").textContent = "Please provide a valid 10-digit mobile number.";
      form.phone.classList.add("invalid");
      isValid = false;
    }

    // Validate Date
    if (!date) {
      document.getElementById("error-date").textContent = "Please select a valid date.";
      form.date.classList.add("invalid");
      isValid = false;
    }

    // Validate Time Slot
    if (!time) {
      document.getElementById("error-time").textContent = "Please select a lunch or dinner service time.";
      form.time.classList.add("invalid");
      isValid = false;
    }

    if (!isValid) return;

    // Generate simulated reference ID
    const randomRef = "SG-" + Math.floor(1000 + Math.random() * 9000);

    // Format human-friendly date
    const dateObj = new Date(date + "T00:00:00");
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });

    // Populate Toast Details
    document.getElementById("toast-ref").textContent = `Ref: #${randomRef}`;
    document.getElementById("toast-guest-name").textContent = name;
    document.getElementById("toast-date").textContent = formattedDate;
    document.getElementById("toast-time").textContent = time;
    document.getElementById("toast-party").textContent = guests;
    document.getElementById("toast-seating").textContent = seating;

    // Build WhatsApp Pre-filled message
    const waBookingMsg = encodeURIComponent(
      `Hello Spice Garden Concierge! Please confirm my table reservation:\n\n` +
      `• Ref: #${randomRef}\n` +
      `• Guest Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Date: ${formattedDate}\n` +
      `• Time: ${time}\n` +
      `• Guests: ${guests}\n` +
      `• Seating: ${seating}\n` +
      `• Dietary / Special Requests: ${notes || "None"}\n\n` +
      `Looking forward to a memorable dining experience!`
    );

    if (toastWaBtn) {
      toastWaBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${waBookingMsg}`;
    }

    // Show Toast
    if (toast) {
      toast.classList.add("active");

      // Auto-hide after 12 seconds
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(hideToast, 12000);
    }

    // Reset Form
    form.reset();
    if (dateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      dateInput.value = `${yyyy}-${mm}-${dd}`;
    }
  });
}

// ----------------------------------------------------------------------------
// 10. SCROLL SPY FOR NAVIGATION HIGHLIGHTS
// ----------------------------------------------------------------------------
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

// ----------------------------------------------------------------------------
// 11. SCROLL REVEAL VIA INTERSECTION OBSERVER
// ----------------------------------------------------------------------------
function initScrollReveal() {
  const revealElements = document.querySelectorAll("[data-reveal]");
  if (!revealElements.length) return;

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute("data-delay") || 0;

        setTimeout(() => {
          el.classList.add("revealed");
        }, parseInt(delay, 10));

        obs.unobserve(el);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}

// ----------------------------------------------------------------------------
// 12. DYNAMIC COPYRIGHT YEAR
// ----------------------------------------------------------------------------
function initDynamicYear() {
  const yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
