// Get deal ID from URL
const urlParams = new URLSearchParams(window.location.search);
const dealId = parseInt(urlParams.get('id'));

// Load deal data from deals.json and display it
const loadDeal = async () => {
  try {
    const response = await fetch('deals.json');
    const deals = await response.json();
    const deal = deals.find(d => d.id === dealId);
    
    const container = document.getElementById('deal-container');
    
    if (deal) {
      container.innerHTML = `
        <h1 class="deal-title">${deal.title}</h1>
        <img src="${deal.image}" alt="Deal Image" class="deal-image">
        <p class="deal-price">${deal.price}</p>
        <p class="deal-description">${deal.description}</p>
        <a href="${deal.link}" target="_blank" class="deal-button">Go to Deal →</a>
      `;

      // Set OG meta tags
      document.getElementById('og-title').content = deal.title;
      document.getElementById('og-description').content = deal.description;
      document.getElementById('og-image').content = deal.image;
      document.getElementById('og-url').content = window.location.href;

      // Update the document title
      document.title = deal.title;
      
    } else {
      container.innerHTML = `<p>Sorry, deal not found!</p>`;
    }
  } catch (error) {
    console.error('Error loading deals:', error);
    document.getElementById('deal-container').innerHTML = `<p>Error loading deal information.</p>`;
  }
};

// Initialize the page with deal content
window.onload = loadDeal;
