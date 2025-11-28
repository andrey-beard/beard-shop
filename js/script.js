const products = [
  {
    id: 1,
    title: "Лосьон Капиксил M 5%, 100 мл",
    description:
      "Капиксил M - это Kirkland Signature Minoxidil! Выгодная цена за качественный продукт.",
    price: "1200 руб.",
    priceNote: "от 3 флаконов по 1100 руб.",
    image: "images/minoxidil-kirkland-5-100ml.jpg",
  },
  {
    id: 2,
    title: "Лосьон Kirkland Signature Minoxidil 5%, 60 мл",
    description:
      "Лосьон для наружного применения, используемый для лечения выпадения волос (алопеции) и стимулирования их роста, в том числе для роста бороды.",
    price: "950 руб.",
    priceNote: "от 3 флаконов по 850 руб.",
    image: "images/minoxidil-kirkland-5-60ml.jpg",
  },
  {
    id: 3,
    title: "Таблетки PIP Minox, 5 мг",
    description:
      "Тайский концентрат для стимуляции роста волос, бороды и бровей, который содержит активное вещество миноксидил в концентрации 5%. 100 таблеток.",
    price: "2300 руб.",
    priceNote: "от 2 упаковок по 2100 руб.",
    image: "images/minoxidil-tabletki-5mg.jpg",
  },
  {
    id: 4,
    title: "Крем Minabeard 6%, 50 гр.",
    description: "Крем для стимуляции роста бороды. Не сущит кожу.",
    price: "3000 руб.",
    priceNote: "",
    image: "images/minoxidil-cream-6.jpg",
  },
  {
    id: 5,
    title: "Лосьон iiSolutions 15%, 60 мл.",
    description:
      "Лосьон для роста волос и бороды на основе 15% раствора миноксидила с добавлением азелаиновой кислоты",
    price: "2600 руб.",
    priceNote: "",
    image: "images/minoxidil-15-azelain.jpg",
  },
  {
    id: 6,
    title: "Пена Регейн 5%, 60 мл.",
    description:
      "Пена для наружного применения, предназначенная для лечения начальных и умеренных стадий андрогенетической алопеции у мужчин.",
    price: "2100 руб.",
    priceNote: "",
    image: "images/minoxidil-foam-5.jpg",
  },
  {
    id: 7,
    title: "Дермароллер Титан, 1 мм",
    description:
      "Предназначен для стимуляции процессов регенерации кожи, выработки коллагена и эластина, а также для улучшения проникновения косметических средств в глубокие слои кожи.",
    price: "450 руб.",
    priceNote: "",
    image: "images/roller-titan-1mm.jpg",
  },
  {
    id: 8,
    title: "Лосьон Rexagain 10%, 100 мл.",
    description:
      "Турецкое средство на основе миноксидила с добавлением других активных компонентов, таких как финастерид, для комплексного действия.",
    price: "1700 руб.",
    priceNote: "",
    image: "images/minoxidil-finasterid.jpg",
  },
  {
    id: 9,
    title: "Лосьон Rugen, 50 мл.",
    description: "Препарат для местного применения, предназначенный для лечения облысения по мужскому типу c действующим веществом RU58841",
    price: "7500 руб.",
    priceNote: "",
    image: "images/rugen-lotion.jpg",
  },
];

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  createProductCards();
});

function createProductCards() {
  const grid = document.getElementById("productsGrid");

  products.forEach((product) => {
    const col = document.createElement("div");
    // 3 карточки в строку на больших экранах, 2 на средних, 1 на маленьких
    col.className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4";

    col.innerHTML = `
            <div class="card product-card h-100">
                <div class="card-body p-4 d-flex flex-column">
                    <div class="text-center mb-3">
                        <img src="${
                          product.image
                        }" class="product-image rounded" alt="${product.title}" 
                             style="width: 100%; max-height: 180px; object-fit: contain;"
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPsSwem9icmF6ZW5pZSDigJMgemFncnV6a2E8L3RleHQ+PC9zdmc+'>
                    </div>
                    <h5 class="card-title fw-bold mb-3">${product.title}</h5>
                    <p class="card-text text-muted flex-grow-1 mb-3">${
                      product.description.split(".")[0]
                    }.</p>
                    <div class="mt-auto">
                        <div class="fw-bold text-danger fs-5 mb-2">${
                          product.price
                        }</div>
                        ${
                          product.priceNote
                            ? `<small class="text-muted">${product.priceNote}</small>`
                            : ""
                        }
                    </div>
                </div>
            </div>
        `;

    // Добавляем обработчик клика на всю карточку
    col.querySelector(".card").addEventListener("click", function () {
      openProductModal(product.id);
    });

    grid.appendChild(col);
  });
}

function openProductModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalImage").alt = product.title;
  document.getElementById("modalDescription").textContent = product.description;

  let priceHTML = product.price;
  if (product.priceNote) {
    priceHTML += `<br><small class="text-muted">${product.priceNote}</small>`;
  }
  document.getElementById("modalPrice").innerHTML = priceHTML;

  const modal = new bootstrap.Modal(document.getElementById("productModal"));
  modal.show();
}


