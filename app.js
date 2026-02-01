/* Lexify — Legal Advice Platform
   App.js — Signup flow, modals, interactivity */

// State
let currentCategory = 'all';
let isLoggedIn = false;

// DOM Elements
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');
const askModal = document.getElementById('askModal');
const questionModal = document.getElementById('questionModal');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Sign Up triggers
document.getElementById('signupBtn')?.addEventListener('click', () => openModal('signupModal'));
document.getElementById('heroSignUp')?.addEventListener('click', () => openModal('signupModal'));
document.getElementById('benefitsSignUp')?.addEventListener('click', () => openModal('signupModal'));
document.getElementById('questionsSignUp')?.addEventListener('click', () => openModal('signupModal'));
document.getElementById('finalSignUp')?.addEventListener('click', () => openModal('signupModal'));
document.getElementById('floatingSignUp')?.addEventListener('click', () => openModal('signupModal'));

// Login
document.getElementById('loginBtn')?.addEventListener('click', () => openModal('loginModal'));

// Switch auth modals
document.getElementById('switchToLogin')?.addEventListener('click', () => {
  closeModal('signupModal');
  openModal('loginModal');
});
document.getElementById('switchToSignup')?.addEventListener('click', () => {
  closeModal('loginModal');
  openModal('signupModal');
});

// Ask question
document.getElementById('askQuestionBtn')?.addEventListener('click', () => openModal('askModal'));

// Modal close buttons
document.getElementById('signupModalClose')?.addEventListener('click', () => closeModal('signupModal'));
document.getElementById('loginModalClose')?.addEventListener('click', () => closeModal('loginModal'));
document.getElementById('askModalClose')?.addEventListener('click', () => closeModal('askModal'));
document.getElementById('questionModalClose')?.addEventListener('click', () => closeModal('questionModal'));

// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', () => {
    overlay.closest('.modal')?.classList.remove('active');
  });
});

// Modal helpers
function openModal(id) {
  document.getElementById(id)?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('active');
  document.body.style.overflow = '';
}

// Forms
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  isLoggedIn = true;
  closeModal('signupModal');
  showToast('Welcome! Your account has been created.');
  updateHeaderForLoggedIn();
});

document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  isLoggedIn = true;
  closeModal('loginModal');
  showToast('Welcome back! You\'re logged in.');
  updateHeaderForLoggedIn();
});

document.getElementById('askForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  closeModal('askModal');
  showToast('Your question has been submitted! You\'ll get an answer within 24 hours.');
});

function updateHeaderForLoggedIn() {
  const actions = document.querySelector('.header-actions');
  if (actions) {
    actions.innerHTML = '<span class="user-badge">✓ Logged in</span>';
  }
}

// Toast
function showToast(message) {
  if (toastMessage) toastMessage.textContent = message;
  toast?.classList.add('show');
  setTimeout(() => toast?.classList.remove('show'), 3500);
}

// Header scroll
window.addEventListener('scroll', () => {
  document.querySelector('.header')?.classList.toggle('scrolled', window.scrollY > 50);
});

// Render categories
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid || typeof categories === 'undefined') return;

  grid.innerHTML = categories
    .filter(c => c.id !== 'all')
    .map(c => `
      <a href="#questions" class="category-card ${currentCategory === c.id ? 'active' : ''}" data-category="${c.id}">
        <span class="category-icon">${c.icon}</span>
        <span class="category-name">${c.name}</span>
      </a>
    `)
    .join('');

  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      currentCategory = card.dataset.category;
      renderCategories();
      renderQuestions();
      document.getElementById('questions')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Render filter chips
function renderFilterChips() {
  const container = document.getElementById('filterChips');
  if (!container || typeof categories === 'undefined') return;

  container.innerHTML = categories.map(c => `
    <button class="filter-chip ${currentCategory === c.id ? 'active' : ''}" data-category="${c.id}">
      ${c.icon} ${c.name}
    </button>
  `).join('');

  container.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      currentCategory = chip.dataset.category;
      renderFilterChips();
      renderCategories();
      renderQuestions();
    });
  });
}

// Render questions
function renderQuestions() {
  const grid = document.getElementById('questionsGrid');
  if (!grid || typeof questions === 'undefined') return;

  const filtered = currentCategory === 'all'
    ? questions
    : questions.filter(q => q.category === currentCategory);

  grid.innerHTML = filtered.map(q => {
    const lawyer = lawyers?.find(l => l.id === q.lawyerId) || { name: 'Expert Lawyer', avatar: 'EL' };
    const catName = categories?.find(c => c.id === q.category)?.name || q.category;
    return `
      <a href="#" class="question-card" data-id="${q.id}">
        <div class="question-meta">
          <span class="question-category">${catName}</span>
          <span class="question-date">${q.date}</span>
          <span class="question-responses">${q.responses} Response(s)</span>
        </div>
        <h3 class="question-title">${escapeHtml(q.title)}</h3>
        <p class="question-excerpt">${escapeHtml(q.excerpt)}</p>
        <div class="question-footer">
          <div class="lawyer-badge">
            <div class="lawyer-avatar">${lawyer.avatar}</div>
            <span class="lawyer-name">${lawyer.name}</span>
          </div>
          <span class="read-more">Read answer →</span>
        </div>
      </a>
    `;
  }).join('');

  grid.querySelectorAll('.question-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(card.dataset.id, 10);
      openQuestionDetail(id);
    });
  });
}

function openQuestionDetail(id) {
  const q = questions?.find(q => q.id === id);
  if (!q) return;

  const lawyer = lawyers?.find(l => l.id === q.lawyerId) || { name: 'Expert Lawyer', avatar: 'EL' };
  const catName = categories?.find(c => c.id === q.category)?.name || q.category;

  const detailEl = document.getElementById('questionDetail');
  if (!detailEl) return;

  detailEl.innerHTML = `
    <div class="question-meta">
      <span class="question-category">${catName}</span>
      <span class="question-date">${q.date}</span>
      <span class="question-responses">${q.responses} Response(s)</span>
    </div>
    <h3 class="question-title">${escapeHtml(q.title)}</h3>
    <p class="question-full">${escapeHtml(q.fullQuestion || q.excerpt)}</p>
    <div class="answer-block">
      <div class="answer-label">Expert Answer</div>
      <p class="answer-text">${escapeHtml(q.answer)}</p>
      <div class="lawyer-badge" style="margin-top:1rem">
        <div class="lawyer-avatar">${lawyer.avatar}</div>
        <span class="lawyer-name">Answered by ${lawyer.name}</span>
      </div>
    </div>
  `;
  openModal('questionModal');
}

// Populate ask form category
function populateAskCategory() {
  const select = document.getElementById('askCategory');
  if (!select || typeof categories === 'undefined') return;

  const opts = categories.filter(c => c.id !== 'all');
  select.innerHTML = '<option value="">Select category</option>' +
    opts.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
}

// FAQ accordion
function initFaq() {
  const faqList = document.getElementById('faqList');
  if (!faqList || typeof faqs === 'undefined') return;

  faqList.innerHTML = faqs.map((item, i) => `
    <div class="faq-item ${i === 0 ? 'open' : ''}">
      <button class="faq-question">
        <span>${escapeHtml(item.q)}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${escapeHtml(item.a)}</div>
      </div>
    </div>
  `).join('');

  faqList.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      faqList.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Mobile menu
document.getElementById('menuToggle')?.addEventListener('click', () => {
  document.querySelector('.nav')?.classList.toggle('open');
  document.querySelector('.header-actions')?.classList.toggle('open');
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderFilterChips();
  renderQuestions();
  populateAskCategory();
  initFaq();
});
