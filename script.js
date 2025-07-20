// Language toggle function
function toggleLanguage() {
  const enContent = document.querySelector('.content[lang="en"]');
  const ptContent = document.querySelector('.content[lang="pt-BR"]');
  const toggleBtn = document.querySelector('.language-toggle');
  
  if (window.getComputedStyle(enContent).display !== 'none') {
    // Switch to Portuguese
    enContent.style.display = 'none';
    ptContent.style.display = 'block';
    toggleBtn.textContent = 'EN';
    document.documentElement.lang = 'pt-BR';
    document.documentElement.style.setProperty('--link-color', 'var(--link-color-pt)');
    document.documentElement.style.setProperty('--link-hover', 'var(--link-hover-pt)');
    
    // Save preference to localStorage
    localStorage.setItem('language', 'pt-BR');
  } else {
    // Switch to English
    enContent.style.display = 'block';
    ptContent.style.display = 'none';
    toggleBtn.textContent = 'PT-BR';
    document.documentElement.lang = 'en';
    document.documentElement.style.setProperty('--link-color', 'var(--link-color-en)');
    document.documentElement.style.setProperty('--link-hover', 'var(--link-hover-en)');
    
    // Save preference to localStorage
    localStorage.setItem('language', 'en');
  }
}

// Add event listener to language toggle button
document.getElementById('langToggle').addEventListener('click', toggleLanguage);

// Check for stored language preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedLanguage = localStorage.getItem('language');
  
  if (storedLanguage === 'pt-BR') {
    // Force toggle to Portuguese if that was the stored preference
    const enContent = document.querySelector('.content[lang="en"]');
    if (window.getComputedStyle(enContent).display !== 'none') {
      toggleLanguage();
    }
  }
  
  // Add smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});