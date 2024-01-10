document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  // Lặp qua tất cả các hình ảnh và thêm sự kiện click
  const images = document.querySelectorAll(".tour-item__image-inner__image");
  images.forEach(function (image) {
    image.addEventListener("click", function () {
      const imageUrl = image.getAttribute("data-large-image");
      showLightbox(imageUrl);
    });
  });

  // Hàm hiển thị cửa sổ đèn
  function showLightbox(imageUrl) {
    lightboxImage.src = imageUrl;
    lightbox.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Ngăn cuộn trang khi cửa sổ đèn mở

    // Thêm sự kiện click vào cửa sổ đèn để đóng nó
    lightbox.addEventListener("click", closeLightbox);
  }

  // Hàm đóng cửa sổ đèn
  function closeLightbox() {
    lightbox.classList.add("hidden");
    document.body.style.overflow = "auto"; // Cho phép cuộn trang khi cửa sổ đèn đóng
    lightbox.removeEventListener("click", closeLightbox);
  }
});