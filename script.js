const recipes = [
  {
    title: "Panqueques Caseros",
    image: "https://images.unsplash.com/photo-1584270354949-1f6f9f3c3c10",
    ingredients: [
      "1 taza de harina",
      "1 huevo",
      "1 taza de leche",
      "1 cucharada de mantequilla derretida",
      "Pizca de sal"
    ],
    steps: [
      "Mezclar la harina con la leche y el huevo.",
      "Agregar la mantequilla derretida y la sal.",
      "Calentar una sartén y cocinar por ambos lados.",
      "Servir con miel o frutas."
    ]
  },
  {
    title: "Ensalada César",
    image: "https://images.unsplash.com/photo-1604908177076-34f3f79b4f9c",
    ingredients: [
      "Lechuga romana",
      "Pollo a la plancha",
      "Crutones",
      "Queso parmesano",
      "Aderezo César"
    ],
    steps: [
      "Cortar la lechuga y el pollo.",
      "Mezclar en un bol grande.",
      "Agregar crutones y parmesano.",
      "Rociar con aderezo y servir."
    ]
  },
  {
    title: "Spaghetti a la Boloñesa",
    image: "https://images.unsplash.com/photo-1603133872878-684f05f3f63d",
    ingredients: [
      "200g de spaghetti",
      "250g de carne molida",
      "1 taza de salsa de tomate",
      "1 cebolla",
      "Aceite de oliva, sal y pimienta"
    ],
    steps: [
      "Cocer la pasta.",
      "Freír la carne con cebolla.",
      "Agregar la salsa de tomate.",
      "Servir sobre los spaghetti cocidos."
    ]
  }
];

const listContainer = document.getElementById("recipe-list");
const detailContainer = document.getElementById("recipe-detail");
const searchInput = document.getElementById("search");
const backBtn = document.getElementById("back-btn");

const titleEl = document.getElementById("recipe-title");
const imageEl = document.getElementById("recipe-image");
const ingredientsEl = document.getElementById("recipe-ingredients");
const stepsEl = document.getElementById("recipe-steps");

function renderList(recipesToShow) {
  listContainer.innerHTML = "";
  recipesToShow.forEach((r, index) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${r.image}" alt="${r.title}">
      <h3>${r.title}</h3>
    `;
    card.addEventListener("click", () => showDetail(index));
    listContainer.appendChild(card);
  });
}

function showDetail(index) {
  const recipe = recipes[index];
  titleEl.textContent = recipe.title;
  imageEl.src = recipe.image;

  ingredientsEl.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join("");
  stepsEl.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join("");

  listContainer.classList.add("hidden");
  detailContainer.classList.remove("hidden");
  detailContainer.classList.add("show");
}

backBtn.addEventListener("click", () => {
  listContainer.classList.remove("hidden");
  detailContainer.classList.add("hidden");
});

searchInput.addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = recipes.filter(r => r.title.toLowerCase().includes(query));
  renderList(filtered);
});

renderList(recipes);
