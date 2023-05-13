const showSection = () => {
  const hash = window.location.hash.substring(1);
  const sections = document.querySelectorAll('.page');
  const links = document.querySelectorAll('.navigation__link, .page-nav__link');

  for (const section of sections) {
    section.style.display = section.id === hash ? 'block' : 'none';
  }

  for (const link of links) {
    const linkUrl = link.getAttribute('href');
    const hashIndex = linkUrl.indexOf('#');
    const linkHash = hashIndex !== -1 ? linkUrl.substring(hashIndex + 1) : '';

    
  }
}

export const pageControlInit = () => {
  window.addEventListener('load', showSection);
  window.addEventListener('hashchange', showSection);
}