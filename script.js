/* ============================================
   SALT & STEAM — recipe data
   ============================================ */
const ICONS = {
  citrus: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="4"/><g stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="32" y1="10" x2="32" y2="54"/><line x1="13" y1="19" x2="51" y2="45"/><line x1="13" y1="45" x2="51" y2="19"/></g><circle cx="32" cy="32" r="4" fill="none" stroke="currentColor" stroke-width="3"/></svg>`,
  noodle: `<svg viewBox="0 0 64 64"><path d="M14 50c-4-16 4-32 18-36 11-3 21 4 19 13-2 8-12 10-16 3-3-6 2-12 9-11" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
  chili: `<svg viewBox="0 0 64 64"><path d="M23 14c2 5-3 9-1 15" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M21 16c-11 6-15 23-7 35 7 9 21 9 27-3 6-12-1-29-13-33-2-1-5-1-7 1Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>`,
  apple: `<svg viewBox="0 0 64 64"><path d="M12 40c0-16 9-28 20-28s20 12 20 28c0 10-9 14-20 14s-20-4-20-14Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="M32 12c0-4 3-6 6-7" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="26" cy="34" r="2.4" fill="currentColor" stroke="none"/><circle cx="38" cy="34" r="2.4" fill="currentColor" stroke="none"/></svg>`,
  potato: `<svg viewBox="0 0 64 64"><path d="M14 34c-2-10 6-20 18-20 10 0 16 6 20 14 4 9-2 20-16 22-13 2-20-6-22-16Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><circle cx="26" cy="30" r="1.8" fill="currentColor" stroke="none"/><circle cx="36" cy="36" r="1.8" fill="currentColor" stroke="none"/><circle cx="30" cy="40" r="1.8" fill="currentColor" stroke="none"/></svg>`,
  scallion: `<svg viewBox="0 0 64 64"><path d="M26 54c-2-14-4-28 0-42" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M38 54c2-14 4-28 0-42" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M24 16c2-4 14-4 16 0" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="32" cy="54" rx="8" ry="4" fill="none" stroke="currentColor" stroke-width="3"/></svg>`,
  pumpkin: `<svg viewBox="0 0 64 64"><path d="M32 18c-12 0-20 9-20 20s8 18 20 18 20-8 20-18-8-20-20-20Z" fill="none" stroke="currentColor" stroke-width="4"/><path d="M22 22c0 14 0 26 0 32M42 22c0 14 0 26 0 32" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M32 18c0-5 2-7 5-9" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
  tomato: `<svg viewBox="0 0 64 64"><circle cx="32" cy="36" r="20" fill="none" stroke="currentColor" stroke-width="4"/><path d="M32 16c-3-3-8-4-11-1M32 16c3-3 8-4 11-1M32 16v6" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "breakfast", label: "Breakfast" },
  { id: "mains", label: "Mains" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "baking", label: "Baking" },
  { id: "quick", label: "Quick" },
];

const RECIPES = [
  {
    id: "charred-corn-lime-salad",
    title: "Charred Corn & Lime Salad",
    tags: ["quick", "vegetarian"],
    time: "15 min",
    servings: "Serves 4",
    icon: "citrus",
    accent: "herb",
    pick: true,
    blurb:
      "Corn blistered hard in a dry skillet until it smells like a campfire, then tossed with lime, chile, and a fistful of cilantro.",
    ingredients: [
      "4 ears corn, kernels cut off (or 3 cups frozen, thawed)",
      "2 tbsp neutral oil",
      "1 jalapeño, finely diced",
      "1 small red onion, finely diced",
      "Juice of 2 limes",
      "1/3 cup crumbled feta or queso fresco",
      "1/2 cup cilantro, chopped",
      "1/2 tsp chili powder",
      "Salt, to taste",
    ],
    steps: [
      "Heat the oil in a dry, heavy skillet over high heat until it's almost smoking.",
      "Add the corn in a single layer and let it sit, untouched, for 3-4 minutes until deeply charred in spots.",
      "Toss and char for another 2-3 minutes, then tip into a wide bowl.",
      "Stir in the jalapeño, red onion, lime juice, and a generous pinch of salt while the corn is still warm.",
      "Fold in the feta and cilantro just before serving, finished with chili powder.",
    ],
  },
  {
    id: "brown-butter-miso-pasta",
    title: "Brown Butter Miso Pasta",
    tags: ["mains", "vegetarian"],
    time: "25 min",
    servings: "Serves 2",
    icon: "noodle",
    accent: "mustard",
    pick: false,
    blurb:
      "Butter pushed past golden into nutty and brown, loosened with miso and pasta water into a sauce that tastes far more complicated than it is.",
    ingredients: [
      "200g spaghetti or linguine",
      "4 tbsp unsalted butter",
      "2 tbsp white miso",
      "2 garlic cloves, grated",
      "1/2 cup reserved pasta water",
      "1/4 cup grated parmesan",
      "2 spring onions, sliced",
      "Black pepper, plenty",
    ],
    steps: [
      "Cook the pasta in well-salted water until just shy of al dente. Reserve the pasta water before draining.",
      "Melt the butter in a wide pan over medium heat, swirling often, until it turns deep amber and smells nutty, about 4 minutes.",
      "Lower the heat, add the garlic, and cook for 30 seconds.",
      "Whisk in the miso and a splash of pasta water until smooth.",
      "Add the pasta and toss, adding more pasta water until the sauce clings and turns glossy.",
      "Finish with parmesan, spring onions, and a heavy hand with the pepper.",
    ],
  },
  {
    id: "sheet-pan-harissa-chicken",
    title: "Sheet-Pan Harissa Chicken",
    tags: ["mains"],
    time: "40 min",
    servings: "Serves 4",
    icon: "chili",
    accent: "tomato",
    pick: false,
    blurb:
      "Chicken thighs rubbed hard with harissa and honey, roasted on one tray with whatever vegetables are closest to the front of the fridge.",
    ingredients: [
      "8 bone-in chicken thighs",
      "3 tbsp harissa paste",
      "1 tbsp honey",
      "2 tbsp olive oil",
      "1 red onion, sliced into wedges",
      "2 bell peppers, sliced",
      "1 lemon, half sliced, half juiced",
      "Salt, to taste",
    ],
    steps: [
      "Heat the oven to 220°C (425°F).",
      "Whisk the harissa, honey, olive oil, lemon juice, and a good pinch of salt together.",
      "Toss the chicken thighs in two-thirds of the mixture, reserving the rest.",
      "Scatter the onion and peppers across a sheet pan, nestle the chicken on top, and tuck the lemon slices in the gaps.",
      "Roast for 30-35 minutes, brushing with the reserved harissa mix halfway through, until the skin is deeply caramelized.",
    ],
  },
  {
    id: "cardamom-apple-galette",
    title: "Cardamom Apple Galette",
    tags: ["baking"],
    time: "1 hr 10 min",
    servings: "Serves 8",
    icon: "apple",
    accent: "mustard",
    pick: true,
    blurb:
      "A free-form tart that forgives every imperfect fold, filled with apples warmed through with cardamom instead of the usual cinnamon.",
    ingredients: [
      "1 disc all-butter pie dough, chilled",
      "4 firm apples, thinly sliced",
      "1/3 cup brown sugar",
      "1 tsp ground cardamom",
      "1 tbsp lemon juice",
      "2 tbsp flour",
      "1 egg, beaten, for brushing",
      "2 tbsp coarse sugar, for the crust",
    ],
    steps: [
      "Heat the oven to 200°C (400°F) and roll the chilled dough into a rough circle on parchment.",
      "Toss the apples with brown sugar, cardamom, lemon juice, and flour.",
      "Pile the apples in the center of the dough, leaving a wide border.",
      "Fold the edges over the fruit in loose, overlapping pleats.",
      "Brush the crust with egg and scatter with coarse sugar.",
      "Bake for 40-45 minutes until the crust is deep gold and the apples are bubbling.",
    ],
  },
  {
    id: "crispy-smashed-potatoes",
    title: "Crispy Smashed Potatoes with Herb Yogurt",
    tags: ["mains", "vegetarian", "quick"],
    time: "35 min",
    servings: "Serves 4",
    icon: "potato",
    accent: "herb",
    pick: false,
    blurb:
      "Boiled until tender, smashed flat, and roasted hot enough that the edges go properly craggy, served over a cool herb-loaded yogurt.",
    ingredients: [
      "700g baby potatoes",
      "3 tbsp olive oil",
      "1 cup plain yogurt",
      "1 garlic clove, grated",
      "1/2 cup mixed soft herbs (dill, mint, parsley), chopped",
      "1/2 tsp smoked paprika",
      "Salt and pepper, to taste",
    ],
    steps: [
      "Boil the potatoes in salted water until a knife slides in easily, about 15 minutes.",
      "Heat the oven to 220°C (425°F). Spread the potatoes on a tray and smash each one flat with the bottom of a glass.",
      "Drizzle with olive oil, season well, and roast for 20-25 minutes until deeply golden and crisp.",
      "Stir the garlic and herbs into the yogurt with a pinch of salt.",
      "Spread the herb yogurt on a plate and pile the hot potatoes on top, finished with smoked paprika.",
    ],
  },
  {
    id: "ginger-scallion-noodles",
    title: "Ginger-Scallion Noodles",
    tags: ["quick", "vegetarian"],
    time: "15 min",
    servings: "Serves 2",
    icon: "scallion",
    accent: "herb",
    pick: true,
    blurb:
      "A bundle of scallions and ginger, just barely cooked by hot oil poured straight over the top, tossed through noodles for dinner in one bowl.",
    ingredients: [
      "200g fresh wheat or rice noodles",
      "1 bunch scallions, finely sliced",
      "3 tbsp fresh ginger, finely minced",
      "4 tbsp neutral oil",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tsp sugar",
    ],
    steps: [
      "Cook the noodles according to the package, then drain well.",
      "Pile the scallions and ginger into a heatproof bowl.",
      "Heat the oil in a small pan until it shimmers and just barely smokes.",
      "Pour the hot oil over the scallions and ginger — it should sizzle loudly.",
      "Stir in the soy sauce, rice vinegar, and sugar.",
      "Toss the noodles through the scallion-ginger oil and serve right away.",
    ],
  },
  {
    id: "spiced-pumpkin-breakfast-bowl",
    title: "Spiced Pumpkin Breakfast Bowl",
    tags: ["breakfast", "vegetarian", "quick"],
    time: "10 min",
    servings: "Serves 1",
    icon: "pumpkin",
    accent: "mustard",
    pick: false,
    blurb:
      "Pumpkin puree warmed with cardamom and ginger, spooned over thick yogurt with toasted seeds for the ten minutes before you have to leave the house.",
    ingredients: [
      "1/2 cup pumpkin puree",
      "3/4 cup thick yogurt",
      "1/2 tsp ground ginger",
      "1/4 tsp ground cardamom",
      "1 tbsp maple syrup",
      "2 tbsp toasted pumpkin seeds",
      "A pinch of flaky salt",
    ],
    steps: [
      "Warm the pumpkin puree in a small pan with the ginger, cardamom, and maple syrup for 2-3 minutes.",
      "Spoon the yogurt into a bowl and swirl the warm pumpkin through it.",
      "Scatter over the toasted pumpkin seeds and a pinch of flaky salt.",
    ],
  },
  {
    id: "slow-roast-tomato-soup",
    title: "Slow Roast Tomato & Garlic Soup",
    tags: ["mains", "vegetarian"],
    time: "50 min",
    servings: "Serves 4",
    icon: "tomato",
    accent: "tomato",
    pick: false,
    blurb:
      "A whole tray of tomatoes and garlic roasted until they collapse, blitzed into a soup that tastes like the last of summer in a bowl.",
    ingredients: [
      "1.2kg ripe tomatoes, halved",
      "1 whole head garlic, cloves separated and unpeeled",
      "1 onion, quartered",
      "4 tbsp olive oil",
      "2 cups vegetable stock",
      "1 tbsp tomato paste",
      "A few basil leaves, torn",
      "Salt and pepper, to taste",
    ],
    steps: [
      "Heat the oven to 200°C (400°F). Toss the tomatoes, garlic, and onion with olive oil, salt, and pepper on a tray.",
      "Roast for 35-40 minutes until the tomatoes have collapsed and caught a little color at the edges.",
      "Squeeze the soft garlic from its skins into a blender with the tomatoes, onion, and any tray juices.",
      "Add the stock and tomato paste and blend until smooth.",
      "Warm through in a pot, adjust the seasoning, and finish with torn basil.",
    ],
  },
];

/* ============================================
   State
   ============================================ */
const state = {
  category: "all",
  query: "",
  savedOnly: false,
  saved: new Set(),
};

/* ============================================
   Render helpers
   ============================================ */
function metaRow(recipe) {
  return `<div class="card-meta"><span>⏱ ${recipe.time}</span><span>🍽 ${recipe.servings}</span></div>`;
}

function tagPills(recipe) {
  return `<div class="card-tags">${recipe.tags
    .map((t) => `<span class="tag-pill">${t}</span>`)
    .join("")}</div>`;
}

function heartSVG() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 20.5s-7.5-4.6-10-9.4C0.3 7.7 2.1 4 5.8 4c2 0 3.6 1 4.5 2.6L12 8.6l1.7-2C14.6 5 16.2 4 18.2 4c3.7 0 5.5 3.7 3.8 7.1-2.5 4.8-10 9.4-10 9.4Z" stroke="currentColor" stroke-width="1.8"/></svg>`;
}

function renderChips() {
  const row = document.getElementById("chipRow");
  row.innerHTML = CATEGORIES.map(
    (c) =>
      `<button class="chip${c.id === state.category ? " is-active" : ""}" data-cat="${c.id}" aria-pressed="${c.id === state.category}">${c.label}</button>`,
  ).join("");
  row.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.cat;
      renderChips();
      renderGrid();
    });
  });
}

function matchesFilters(recipe) {
  const inCategory =
    state.category === "all" || recipe.tags.includes(state.category);
  const inQuery =
    state.query.trim() === "" ||
    recipe.title.toLowerCase().includes(state.query.toLowerCase()) ||
    recipe.blurb.toLowerCase().includes(state.query.toLowerCase());
  const inSaved = !state.savedOnly || state.saved.has(recipe.id);
  return inCategory && inQuery && inSaved;
}

function cardMarkup(recipe) {
  const isSaved = state.saved.has(recipe.id);
  return `
    <article class="recipe-card" data-accent="${recipe.accent}" data-id="${recipe.id}">
      <div class="card-top">
        <span class="card-icon">${ICONS[recipe.icon]}</span>
      </div>
      <div class="card-body">
        ${tagPills(recipe)}
        <h3>${recipe.title}</h3>
        <p class="card-blurb">${recipe.blurb}</p>
        ${metaRow(recipe)}
        <div class="card-footer">
          <button class="view-link" data-open="${recipe.id}" type="button">View recipe &rarr;</button>
          <button class="heart-btn${isSaved ? " is-saved" : ""}" data-heart="${recipe.id}" type="button" aria-pressed="${isSaved}" aria-label="Save ${recipe.title}">
            ${heartSVG()}
          </button>
        </div>
      </div>
    </article>`;
}

function renderGrid() {
  const grid = document.getElementById("recipeGrid");
  const empty = document.getElementById("emptyState");
  const visible = RECIPES.filter(matchesFilters);

  grid.innerHTML = visible.map(cardMarkup).join("");
  empty.hidden = visible.length > 0;

  grid
    .querySelectorAll("[data-open]")
    .forEach((btn) =>
      btn.addEventListener("click", () => openModal(btn.dataset.open)),
    );
  grid
    .querySelectorAll("[data-heart]")
    .forEach((btn) =>
      btn.addEventListener("click", () => toggleSaved(btn.dataset.heart)),
    );
}

function renderPicks() {
  const track = document.getElementById("picksTrack");
  const picks = RECIPES.filter((r) => r.pick);
  track.innerHTML = picks
    .map(
      (r) => `
      <div class="stack-card" data-id="${r.id}">
        <span class="pin" aria-hidden="true"></span>
        <span class="card-icon">${ICONS[r.icon]}</span>
        <h3>${r.title}</h3>
        ${metaRow(r)}
        <div class="card-footer" style="border-top:none; margin-top:14px; justify-content:center;">
          <button class="view-link" data-open="${r.id}" type="button">View recipe &rarr;</button>
        </div>
      </div>`,
    )
    .join("");
  track
    .querySelectorAll("[data-open]")
    .forEach((btn) =>
      btn.addEventListener("click", () => openModal(btn.dataset.open)),
    );
}

function toggleSaved(id) {
  if (state.saved.has(id)) {
    state.saved.delete(id);
  } else {
    state.saved.add(id);
  }
  updateSavedUI();
  renderGrid();
}

function updateSavedUI() {
  document.getElementById("savedCount").textContent =
    `Saved (${state.saved.size})`;
  document
    .getElementById("savedToggle")
    .classList.toggle("is-active", state.savedOnly);
}

/* ============================================
   Modal
   ============================================ */
function openModal(id) {
  const recipe = RECIPES.find((r) => r.id === id);
  if (!recipe) return;
  const content = document.getElementById("modalContent");
  const isSaved = state.saved.has(recipe.id);

  content.innerHTML = `
    ${tagPills(recipe)}
    <h2 id="modalTitle">${recipe.title}</h2>
    ${metaRow(recipe)}
    <p class="modal-blurb">${recipe.blurb}</p>
    <p class="modal-section-title">Ingredients</p>
    <ul>${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>
    <p class="modal-section-title">Method</p>
    <ol>${recipe.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
    <button class="btn btn-primary" id="modalHeart" type="button" style="margin-top:10px; gap:8px;" aria-pressed="${isSaved}">
      ${heartSVG()} ${isSaved ? "Saved" : "Save this recipe"}
    </button>
  `;

  document.getElementById("modalHeart").addEventListener("click", () => {
    toggleSaved(recipe.id);
    openModal(recipe.id);
  });

  const backdrop = document.getElementById("modalBackdrop");
  backdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal() {
  document.getElementById("modalBackdrop").classList.remove("is-open");
  document.body.style.overflow = "";
}

/* ============================================
   Init / events
   ============================================ */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderChips();
  renderGrid();
  renderPicks();
  updateSavedUI();

  // search
  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.query = e.target.value;
    renderGrid();
  });

  // saved-only toggle
  document.getElementById("savedToggle").addEventListener("click", () => {
    state.savedOnly = !state.savedOnly;
    updateSavedUI();
    renderGrid();
  });

  // modal close
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "modalBackdrop") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // mobile nav
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  mainNav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }),
  );

  // sticky header shadow on scroll
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
  });

  // picks carousel arrows
  const track = document.getElementById("picksTrack");
  document.getElementById("picksPrev").addEventListener("click", () => {
    track.scrollBy({ left: -320, behavior: "smooth" });
  });
  document.getElementById("picksNext").addEventListener("click", () => {
    track.scrollBy({ left: 320, behavior: "smooth" });
  });

  // newsletter form
  const form = document.getElementById("subscribeForm");
  const note = document.getElementById("subscribeNote");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("subscribeEmail");
    const value = input.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!isValid) {
      note.textContent =
        "That doesn't look like a real email — give it another go.";
      return;
    }
    note.textContent = `You're in. Tuesday's recipe is headed to ${value}.`;
    form.reset();
  });
});
