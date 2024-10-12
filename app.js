const deals = [
    {
      "id": 1,
      "category": "electronics",
      "title": "50% Off on Headphones",
      "price": "$49.99",
      "description": "High-quality wireless headphones at half price.",
      "image": "https://via.placeholder.com/100",
      "link": "https://example.com/deal/headphones"
    },
    {
      "id": 2,
      "category": "fashion",
      "title": "Buy 1 Get 1 Free on T-Shirts",
      "price": "$19.99",
      "description": "Grab two trendy t-shirts for the price of one.",
      "image": "https://via.placeholder.com/100",
      "link": "https://example.com/deal/t-shirts"
    },
    {
      "id": 3,
      "category": "electronics",
      "title": "30% Off on Sneakers",
      "price": "$69.99",
      "description": "Stylish and comfortable sneakers at a great discount.",
      "image": "https://via.placeholder.com/100",
      "link": "https://example.com/deal/sneakers"
    }
  ];

  // Load deals into the page
  const loadDeals = (category = 'all') => {
    const container = document.getElementById('deals-container');
    container.innerHTML = ''; // Clear existing deals

    deals
      .filter(deal => category === 'all' || deal.category === category)
      .forEach(deal => {
        const dealElement = document.createElement('div');
        dealElement.className = 'deal';

        dealElement.innerHTML = `
          <img src="${deal.image}" alt="Deal Image" class="deal-image">
          <div class="deal-content">
            <a href="deal.html?id=${deal.id}" class="deal-title">${deal.title}</a>
            <p class="deal-price">${deal.price}</p>
            <p class="deal-description">${deal.description}</p>
            <button class="quick-view-btn" onclick="event.stopPropagation(); openModal(${deal.id})">Quick View</button>
          </div>
        `;
        
        container.appendChild(dealElement);
      });
  };

  // Open modal with deal details
  const openModal = (dealId) => {
    const deal = deals.find(d => d.id === dealId);
    if (!deal) return;

    document.getElementById('modal-title').innerText = deal.title;
    document.getElementById('modal-price').innerText = deal.price;
    document.getElementById('modal-description').innerText = deal.description;
    document.getElementById('modal-image').src = deal.image;
    document.getElementById('deal-link').href = deal.link;  // Set the custom link
    document.getElementById('deal-modal').style.display = 'flex';
  };

  // Close modal
  const closeModal = () => {
    document.getElementById('deal-modal').style.display = 'none';
  };

  // Select tab and filter deals
  const selectTab = (category) => {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab[onclick="selectTab('${category}')"]`).classList.add('active');
    loadDeals(category);
  };

  // Initial load of deals
  window.onload = () => loadDeals();
