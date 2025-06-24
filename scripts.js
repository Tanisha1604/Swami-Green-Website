// Service data
const services = [
  {
    title: "Land Procurement",
    features: [
      "Identifying and acquiring suitable land for solar project development",
      "Complete legal due diligence",
      "Land feasibility studies",
      "Title verification and documentation"
    ],
    description: "We provide end-to-end land procurement services ensuring you get the perfect site for your solar project with all legal clearances and optimal conditions for maximum energy generation."
  },
  {
    title: "Government Projects",
    features: [
      "Specialized in executing solar projects under various government schemes",
      "Expertise in handling tenders and compliance",
      "Policy navigation and advisory",
      "Documentation and reporting"
    ],
    description: "Our team has extensive experience working with government bodies and executing projects under various state and central government solar initiatives with 100% compliance."
  },
  {
    title: "EPC & I&C Services",
    features: [
      "Complete turnkey solutions for solar power plants",
      "Engineering, Procurement, Construction services",
      "Installation & Commissioning",
      "Quality assurance and performance guarantees"
    ],
    description: "From design to commissioning, we handle every aspect of your solar project with precision, ensuring optimal performance and timely completion."
  },
  {
    title: "Open Access",
    features: [
      "Facilitating solar solutions for industries",
      "Clean energy at competitive rates",
      "End-to-end documentation support",
      "Cross-state open access solutions"
    ],
    description: "We simplify the complex open access process, helping industries transition to solar power with significant cost savings and hassle-free compliance."
  },
  {
    title: "Finance",
    features: [
      "Strategic investment in solar projects",
      "Ensures sustainable financial returns",
      "Financial modeling and planning",
      "Investor matchmaking"
    ],
    description: "Our financial solutions help make your solar projects viable with optimal capital structures, attractive ROI models, and access to green financing options."
  },
  {
    title: "Asset Management",
    features: [
      "Managing solar project performance",
      "Long-term value creation",
      "Regular maintenance and optimization",
      "Performance monitoring and reporting"
    ],
    description: "Maximize your solar asset's performance and lifespan with our comprehensive management services that include everything from O&M to financial optimization."
  },
  {
    title: "Transmission Line",
    features: [
      "Development of efficient transmission infrastructure",
      "Reliable energy transmission solutions",
      "Grid connectivity services",
      "Substation design and implementation"
    ],
    description: "We provide complete transmission solutions to ensure your solar energy reaches its destination efficiently and reliably with minimal losses."
  }
];

// Initialize modal
const serviceModal = new bootstrap.Modal(document.getElementById('serviceModal'));

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('serviceCarousel');
  const carouselInner = carousel.querySelector('.carousel-inner');
  const indicators = carousel.querySelector('.carousel-indicators');

  // Clear existing content
  carouselInner.innerHTML = '';
  indicators.innerHTML = '';

  // Create carousel items
  services.forEach((service, index) => {
    const imagePath = `images/service-${index + 1}.jpg`;
    
    // Add indicator
    indicators.innerHTML += `
      <button type="button" 
              data-bs-target="#serviceCarousel" 
              data-bs-slide-to="${index}"
              ${index === 0 ? 'class="active"' : ''}
              aria-label="${service.title}">
      </button>
    `;

    // Add carousel item
    carouselInner.innerHTML += `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <div class="row g-0">
          <div class="col-md-6 carousel-image-container">
            <img src="${imagePath}" 
                 alt="${service.title}"
                 class="img-fluid h-100 object-fit-cover"
                 onerror="this.onerror=null;this.src='images/solar-bg.jpg'">
          </div>
          <div class="col-md-6 bg-light p-4 p-lg-5">
            <div class="h-100 d-flex flex-column justify-content-center">
              <h3 class="text-success mb-4">${service.title}</h3>
              <ul class="service-features">
                ${service.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
              <div class="mt-4">
                <button onclick="openModal(${index})" class="btn btn-success">
                  Learn More <i class="fas fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // Initialize carousel
  new bootstrap.Carousel(carousel, {
    interval: 5000,
    wrap: true,
    pause: 'hover'
  });
});

// Open modal with service details
function openModal(index) {
  const service = services[index];
  document.getElementById('modalTitle').textContent = service.title;
  document.getElementById('modalContent').innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <img src="images/service-${index + 1}.jpg" 
             alt="${service.title}" 
             class="img-fluid rounded mb-4"
             onerror="this.src='images/solar-bg.jpg'">
      </div>
      <div class="col-md-6">
        <h4 class="text-success mb-3">Service Details</h4>
        <p class="mb-4">${service.description}</p>
        <h5 class="text-success mb-3">Key Features</h5>
        <ul class="service-features">
          ${service.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
  serviceModal.show();
}

// --- FACTS/COUNTER SECTION ---
(function() {
  let animated = false;
  function animateCounters() {
    if (animated) return;
    const counters = document.querySelectorAll('.fact-number');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = +counter.innerText.replace(/,/g, '');
      const increment = Math.ceil(target / 120);
      function updateCount() {
        if (count < target) {
          count = Math.min(count + increment, target);
          counter.innerText = count.toLocaleString();
          setTimeout(updateCount, 18);
        } else {
          counter.innerText = target.toLocaleString();
        }
      }
      updateCount();
    });
    animated = true;
  }
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function checkScroll() {
    const factsSection = document.querySelector('.facts-section');
    if (factsSection && isInViewport(factsSection) && !factsSection.classList.contains('animated')) {
      animateCounters();
      factsSection.classList.add('animated');
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  });
})();

document.addEventListener('DOMContentLoaded', function() {
  // Animation for the leadership section
  const messageCards = document.querySelectorAll('.message-card');
  
  function checkScroll() {
      messageCards.forEach((card, index) => {
          const cardPosition = card.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if (cardPosition < screenPosition) {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
          }
      });
  }
  
  // Initialize cards with hidden state
  messageCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Check on load and scroll
  window.addEventListener('load', checkScroll);
  window.addEventListener('scroll', checkScroll);
  
  // Add hover effect for touch devices
  function handleTouchHover() {
      if ('ontouchstart' in window) {
          messageCards.forEach(card => {
              card.addEventListener('touchstart', function() {
                  this.classList.add('hover-effect');
              });
              
              card.addEventListener('touchend', function() {
                  this.classList.remove('hover-effect');
              });
          });
      }
  }
  
  handleTouchHover();
});