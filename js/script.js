// mobile nav

function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const openIcon = document.getElementById('openIcon');
    const closeIcon = document.getElementById('closeIcon');

    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');

    // Toggle icon visibility
    if (sideMenu.classList.contains('active')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
    } else {
        openIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
    }
}

// partners mobile
document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.mobile-partners', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 15,
        navigation: {
            nextEl: '.mobile-partners-next',
            prevEl: '.mobile-partners-prev',
        },
    });
});

// faq mobile
document.addEventListener("DOMContentLoaded", function() {
    const faqSwiper = new Swiper('.faq-swiper', {
      slidesPerView: 1,
      loop:true,
      navigation: {
        nextEl: '.mobile-faq-next',
        prevEl: '.mobile-faq-prev',
      },
      spaceBetween: 10,
    });
  });


// services mobile
document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.mobile-services', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 15,
        centeredSlides: true, // Center the active slide
        navigation: {
            nextEl: '.mobile-services-next',
            prevEl: '.mobile-services-prev',
        },
        on: {
            slideChangeTransitionEnd: function () {
                updateSlideScale(this);
            }
        }
    });

    function updateSlideScale(swiper) {
        swiper.slides.forEach((slide, index) => {
            if (index === swiper.activeIndex) {
                slide.style.transform = 'scale(1.2)'; // Larger size for the center slide
            } else {
                slide.style.transform = 'scale(0.9)'; // Smaller size for the side slides
            }
        });
    }

    // Initial scale update for the active slide
    updateSlideScale(swiper);
});

document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.mobile-recruitment', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 15,
        navigation: {
            nextEl: '.mobile-recruitment-next',
            prevEl: '.mobile-recruitment-prev',
        },
    });
});
  
  function switchTab(location) {
    const damamTab = document.querySelector('.map-header .damam');
    const riyadhTab = document.querySelector('.map-header .riyadh');
    const mapIframe = document.getElementById('map-iframe');
    
    if (location === 'damam') {
        damamTab.classList.add('active');
        damamTab.classList.remove('inactive');
        riyadhTab.classList.remove('active');
        riyadhTab.classList.add('inactive');
        damamTab.style.backgroundColor = '#309f88';
        damamTab.style.color = '#ffffff';
        riyadhTab.style.backgroundColor = '#ebebeb';
        riyadhTab.style.color = '#214190';
        mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d893.4357803993886!2d50.104890123797894!3d26.399485472607157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb1fdc754c87%3A0x80d7109b1e48c6cb!2z2LTYsdmD2Kkg2KzYr9mI2Ykg2YTZhNin2LPYqtmC2K_Yp9mF!5e0!3m2!1sen!2seg!4v1730295712278!5m2!1sen!2seg"; // Dammam location
    } else if (location === 'riyadh') {
        riyadhTab.classList.add('active');
        riyadhTab.classList.remove('inactive');
        damamTab.classList.remove('active');
        damamTab.classList.add('inactive');
        riyadhTab.style.backgroundColor = '#309f88';
        riyadhTab.style.color = '#ffffff';
        damamTab.style.backgroundColor = '#ebebeb';
        damamTab.style.color = '#214190';
        mapIframe.src = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3629.432222756813!2d46.64827507536073!3d24.539721578140057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDMyJzIzLjAiTiA0NsKwMzknMDMuMSJF!5e0!3m2!1sen!2seg!4v1731370113008!5m2!1sen!2seg"; // Riyadh location
    }
}

document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.banner-sliders', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const serviceSelect = document.getElementById("service");
    const countrySelect = document.getElementById("country");
    const experienceSelect = document.getElementById("experience");
    const religionSelect = document.getElementById("religion");
    const genderSelect = document.getElementById("gender");
    const cardContainers = document.querySelectorAll(".card-item");
  
    if (serviceSelect && countrySelect && experienceSelect && religionSelect && genderSelect && cardContainers.length) {
      function filterCards() {
        const selectedService = serviceSelect.value;
        const selectedCountry = countrySelect.value;
        const selectedExperience = experienceSelect.value;
        const selectedReligion = religionSelect.value;
        const selectedGender = genderSelect.value;
  
        cardContainers.forEach(container => {
          const card = container.querySelector(".recruitment-card");
  
          if (card) {
            const cardService = card.getAttribute("data-service");
            const cardCountry = card.getAttribute("data-country");
            const cardExperience = card.getAttribute("data-experience");
            const cardReligion = card.getAttribute("data-religion");
            const cardGender = card.getAttribute("data-gender");
  
            const matchesService = !selectedService || selectedService === cardService;
            const matchesCountry = !selectedCountry || selectedCountry === cardCountry;
            const matchesExperience = !selectedExperience || selectedExperience === cardExperience;
            const matchesReligion = !selectedReligion || selectedReligion === cardReligion;
            const matchesGender = !selectedGender || selectedGender === cardGender;
  
            if (matchesService && matchesCountry && matchesExperience && matchesReligion && matchesGender) {
              container.classList.remove("hidden");
            } else {
              container.classList.add("hidden");
            }
          }
        });
  
        AOS.refresh();
      }
  
      serviceSelect.addEventListener("change", filterCards);
      countrySelect.addEventListener("change", filterCards);
      experienceSelect.addEventListener("change", filterCards);
      religionSelect.addEventListener("change", filterCards);
      genderSelect.addEventListener("change", filterCards);
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
      once: true
    });
  });
  