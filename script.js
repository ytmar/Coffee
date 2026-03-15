$(function(){
  const sections = [
    { selector: '.menu-title', bg: 'url("img/menu.jpg")' },
    { selector: '.about-title', bg: 'url("img/about.jpg")' },
    { selector: '.location-title', bg: 'url("img/location.jpg")' }
  ];

  function handleScroll() {
    if (window.innerWidth <= 768) {
      document.documentElement.style.setProperty('--bg', 'none');
      return;
    }

    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    let set = false;

    if (scrollTop === 0) {
      document.documentElement.style.setProperty('--bg', 'none');
      return;
    }

    for (const sec of sections) {
      const $el = $(sec.selector);
      const top = $el.offset().top;
      const height = $el.outerHeight();

      if (scrollTop + windowHeight > top && scrollTop < top + height) {
        document.documentElement.style.setProperty('--bg', sec.bg);
        set = true;
        break;
      }
    }

    if (!set) {
      document.documentElement.style.setProperty('--bg', 'none');
    }
  }

  $(window).on('scroll resize', handleScroll);
  $(window).trigger('scroll');
});

