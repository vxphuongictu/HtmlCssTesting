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

document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentsList = document.getElementById("comments-list");

    // Load comments from localStorage when page loads
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    renderComments(savedComments);

    // Event listener for submitting the comment form
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            const comment = {
                id: Date.now(),
                text: commentText,
                timestamp: new Date().toLocaleString()
            };
            savedComments.push(comment);
            localStorage.setItem("comments", JSON.stringify(savedComments));
            renderComments(savedComments);
            commentInput.value = ""; // Clear input after submitting
        }
    });

    // Function to render comments in the UI
    function renderComments(comments) {
        commentsList.innerHTML = "";
        comments.forEach((comment) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${comment.timestamp}</strong>: ${comment.text}`;
            commentsList.appendChild(li);
        });
    }
});
