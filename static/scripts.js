  // Fungsi untuk mengecek apakah elemen masuk ke dalam viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Fungsi untuk menampilkan animasi saat elemen masuk viewport
  function showElementOnScroll() {
    var animatedText = document.querySelectorAll('.animate-text');
    animatedText.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  }

  // Menjalankan fungsi saat halaman di-scroll
  window.addEventListener('scroll', showElementOnScroll);
  window.addEventListener('load', showElementOnScroll); // Untuk menampilkan elemen yang masuk viewport saat halaman dimuat

// Tangkap elemen gambar profil dan nama navbar
const profileImage = document.querySelector('.profile-image-navbar');
const navbarBrand = document.querySelector('.navbar-brand');

let lastScrollTop = 0;

// Tambahkan event listener untuk event scroll
window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll ke bawah
    profileImage.style.display = 'block';
    navbarBrand.style.display = 'block';
  } else {
    // Scroll ke atas
    profileImage.style.display = 'none';
    navbarBrand.style.display = 'block';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

