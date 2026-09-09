/**
 * Vincent - Portfolio Main JavaScript
 * Handles navigation, project filtering, modal lightbox, and contact interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initProjectsGallery();
  initModal();
  initContactForm();
  initBackToTop();
  updateCopyrightYear();
});

/* ==========================================================================
   1. NAVIGATION & SCROLL
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');

  // Header background on scroll
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking on any nav link
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section spy using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px'
    });

    sections.forEach(section => observer.observe(section));
  }
}

/* ==========================================================================
   2. PROJECTS GALLERY & FILTERING
   ========================================================================== */
function initProjectsGallery() {
  const projectsGrid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!projectsGrid || !window.projectsData) return;

  // Update category counts
  const allCount = projectsData.length;
  const interiorCount = projectsData.filter(p => p.category === 'interior').length;
  const exteriorCount = projectsData.filter(p => p.category === 'exterior').length;
  const landscapeCount = projectsData.filter(p => p.category === 'landscape').length;

  const countAllEl = document.getElementById('countAll');
  const countIntEl = document.getElementById('countInterior');
  const countExtEl = document.getElementById('countExterior');
  const countLandEl = document.getElementById('countLandscape');

  if (countAllEl) countAllEl.textContent = allCount;
  if (countIntEl) countIntEl.textContent = interiorCount;
  if (countExtEl) countExtEl.textContent = exteriorCount;
  if (countLandEl) countLandEl.textContent = landscapeCount;

  // Render cards
  function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filtered.forEach((project, idx) => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${project.title}`);

      card.innerHTML = `
        <div class="project-thumb-wrap">
          <span class="project-category-tag">${project.categoryLabel || project.category}</span>
          <img 
            src="${project.image}" 
            alt="${project.title} - Architectural 3D Rendering" 
            class="project-thumb"
            loading="lazy"
            onerror="this.onerror=null; this.src='${project.fallbackImage}'"
          >
          <div class="project-thumb-overlay"></div>
          <div class="project-quick-view-badge">
            <span>Explore Project</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
        <div class="project-card-body">
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-subtitle">${project.subtitle}</p>
          <div class="project-card-footer">
            <span class="project-tools-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
              </svg>
              ${project.tools}
            </span>
            <svg class="project-card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </div>
        </div>
      `;

      // Click & Keyboard support
      card.addEventListener('click', () => openProjectModal(project.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectModal(project.id);
        }
      });

      projectsGrid.appendChild(card);
    });
  }

  // Initial render
  renderProjects('all');

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

/* ==========================================================================
   3. MODAL LIGHTBOX
   ========================================================================== */
function initModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const backdrop = document.getElementById('modalBackdrop');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  window.openProjectModal = function(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    // Populate data
    document.getElementById('modalCategory').textContent = (project.categoryLabel || project.category).toUpperCase();
    document.getElementById('modalLocation').textContent = project.location ? `// ${project.location}` : '';
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalSubtitle').textContent = project.subtitle;
    document.getElementById('modalYear').textContent = project.year || '2025';
    document.getElementById('modalArea').textContent = project.area || 'Residential Scope';
    document.getElementById('modalChallenge').textContent = project.challenge || project.summary;
    document.getElementById('modalSolution').textContent = project.solution || 'Modeled accurately in SketchUp and atmospheric post-production completed in Photoshop.';
    document.getElementById('modalToolsText').textContent = project.tools;

    // Software tags
    const softwareContainer = document.getElementById('modalSoftwareTags');
    if (softwareContainer) {
      softwareContainer.innerHTML = '';
      const list = project.software || ['SketchUp Pro', 'Adobe Photoshop CC'];
      list.forEach(item => {
        const span = document.createElement('span');
        span.className = 'modal-software-tag';
        span.textContent = item;
        softwareContainer.appendChild(span);
      });
    }

    // Gallery & main image
    const mainImg = document.getElementById('modalMainImg');
    const thumbsContainer = document.getElementById('modalGalleryThumbs');
    const gallery = project.gallery && project.gallery.length > 0 
      ? project.gallery 
      : [project.image || project.fallbackImage];

    mainImg.src = gallery[0];
    mainImg.onerror = () => { mainImg.src = project.fallbackImage; };

    if (thumbsContainer) {
      thumbsContainer.innerHTML = '';
      gallery.forEach((imgUrl, i) => {
        const thumbBtn = document.createElement('button');
        thumbBtn.className = `gallery-thumb-btn ${i === 0 ? 'active' : ''}`;
        thumbBtn.setAttribute('aria-label', `View angle ${i + 1}`);
        thumbBtn.innerHTML = `
          <img 
            src="${imgUrl}" 
            alt="Angle ${i + 1}"
            onerror="this.onerror=null; this.src='${project.fallbackImage}'"
          >
        `;
        thumbBtn.addEventListener('click', () => {
          document.querySelectorAll('.gallery-thumb-btn').forEach(b => b.classList.remove('active'));
          thumbBtn.classList.add('active');
          mainImg.style.opacity = '0.5';
          setTimeout(() => {
            mainImg.src = imgUrl;
            mainImg.style.opacity = '1';
          }, 120);
        });
        thumbsContainer.appendChild(thumbBtn);
      });
    }

    // Show modal & prevent background scroll
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
}

/* ==========================================================================
   4. CONTACT FORM & FEEDBACK TOAST
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastMsg = document.getElementById('toastMsg');
  const submitBtn = document.getElementById('submitBtn');

  if (!form) return;

  function showToast(title, msg, duration = 4000) {
    if (!toast) return;
    toastTitle.textContent = title;
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const typeInput = document.getElementById('projectType');
    const messageInput = document.getElementById('userMessage');

    // Simple validation
    if (!nameInput.value.trim()) {
      nameInput.focus();
      showToast('Name Required', 'Please provide your name so Vincent knows who to reply to.');
      return;
    }

    if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
      emailInput.focus();
      showToast('Valid Email Required', 'Please enter a valid email address.');
      return;
    }

    if (!typeInput.value) {
      typeInput.focus();
      showToast('Category Required', 'Please select the type of design service requested.');
      return;
    }

    if (!messageInput.value.trim()) {
      messageInput.focus();
      showToast('Details Required', 'Please share a brief overview of your project requirements.');
      return;
    }

    // Simulate sending state
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span>Dispatching Brief...</span>
      <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="animation: spin 1s linear infinite">
        <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="12"/>
      </svg>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHTML;
      form.reset();
      showToast(
        'Inquiry Sent Successfully', 
        `Thank you ${nameInput.value.trim()}, Vincent has received your request and will respond within 24 hours.`
      );
    }, 900);
  });
}

/* ==========================================================================
   5. UTILITIES: BACK TO TOP & YEAR
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function updateCopyrightYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
