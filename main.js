/* TOGGLE MOBILE MENU */
function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("active");
}

    // HERO SLIDER
    let heroIndex = 0;
    const heroSlider = document.getElementById('hero-slider');
    const heroTotal = heroSlider.children.length;

    function moveHeroSlide(dir) {
      heroIndex += dir;
      if(heroIndex < 0) heroIndex = heroTotal -1;
      if(heroIndex >= heroTotal) heroIndex = 0;
      heroSlider.style.transform = `translateX(-${heroIndex * 100}%)`;
    }

    // TESTIMONIAL SLIDER
    let testimonialIndex = 0;
    const testimonialSlides = document.getElementById('testimonial-slides');
    const testimonialTotal = testimonialSlides.children.length;

    function goToTestimonialSlide(index) {
      testimonialIndex = index;
      testimonialSlides.style.transform = `translateX(-${testimonialIndex * 100}%)`;
      document.querySelectorAll('.dot').forEach((dot,i)=>{
        dot.classList.toggle('active', i===index);
      });
    }

    setInterval(()=>{
      testimonialIndex = (testimonialIndex + 1) % testimonialTotal;
      goToTestimonialSlide(testimonialIndex);
    }, 5000);
  









    const data = {
    ride: {
        title: "Ride",
        description: "Bykea offers rides on motorbikes, rickshaws, and cars at the lowest fares in Karachi, Lahore and Islamabad. No matter what your destination is, a Bykea is always there for you. Let’s get moving.",
        image: "./assets/03-Bykea-Lower-Banner-SJ-Ride-e15839371395834.png"
    },
    delivery: {
        title: "Delivery",
        description: "We offer blazing fast parcel delivery services which include cash collection on delivery. With our cash on delivery service, you can save your bank account details with Bykea reaping the benefits of paperless invoices and instant transfers to your bank account upon delivery. A Bykea can deliver up to 20 deliveries, so you don’t have to worry about hiring and managing a rider. The best part? The contents are insured so you can have peace of mind when utilizing our delivery services!",
        image: "./assets/index-delivery-img.png"
    },
    shops: {
        title: "Shops",
        description: "You select, we do the rest. Use Shops to explore and discover all retailers, physical or e-tailers, in the cities we operate in. Order from any retailer, and our trusted partner network will get the items delivered to your doorstep in no time. A whole world of shopping is just a tap away!",
        image: "./assets/index-shop-img.png"
    }
};

const tabs = document.querySelectorAll(".tab");
const title = document.getElementById("title");
const description = document.getElementById("description");
const heroImage = document.getElementById("heroImage");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active class
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const type = tab.dataset.type;
        title.textContent = data[type].title;
        description.textContent = data[type].description;
        heroImage.src = data[type].image;
        heroImage.alt = data[type].title;
    });
});