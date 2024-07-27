document.addEventListener("DOMContentLoaded", function () {
  const jobItem = document.getElementById("job-item");
  const acItem = document.getElementById("active_nav");
  const buyItem = document.getElementById("buy-item");

  jobItem.addEventListener("click", function () {
    window.location.href = "work.html";
  });
  buyItem.addEventListener("click", function () {
    window.location.href = "buy.html";
  });
  acItem.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
// login - signup
// Get the modal
var loginModal = document.getElementById("loginModal");
var signupModal = document.getElementById("signupModal");

// Get the button that opens the modal
var loginBtn = document.getElementById("loginBtn");
var signupBtn = document.getElementById("signupBtn");

// Get the <span> element that closes the modal
var closeLoginModal = document.getElementById("closeLoginModal");
var closeSignupModal = document.getElementById("closeSignupModal");

// When the user clicks the button, open the modal
loginBtn.onclick = function () {
  loginModal.style.display = "block";
};
signupBtn.onclick = function () {
  signupModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeLoginModal.onclick = function () {
  loginModal.style.display = "none";
};
closeSignupModal.onclick = function () {
  signupModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
};

// search
// Show the popup when the input field is focused
document.getElementById("searchInput").addEventListener("focus", function () {
  document.getElementById("searchPopup").classList.add("active");
});

// Hide the popup when clicking outside the search container
document.addEventListener("click", function (event) {
  var searchContainer = document.getElementById("searchContainer");
  if (!searchContainer.contains(event.target)) {
    document.getElementById("searchPopup").classList.remove("active");
  }
});

// select
document.getElementById("selectBox").addEventListener("click", function () {
  var selectPopup = document.getElementById("selectPopup");
  selectPopup.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  var selectContainer = document.getElementById("selectContainer");
  if (!selectContainer.contains(event.target)) {
    document.getElementById("selectPopup").classList.remove("active");
  }
});

document.querySelectorAll(".select-option").forEach(function (option) {
  option.addEventListener("click", function () {
    document.getElementById("selectValue").innerText = this.innerText;
    document.getElementById("selectPopup").classList.remove("active");
  });
});
// sex
document.getElementById("selectBox1").addEventListener("click", function () {
  var selectPopup = document.getElementById("selectPopup1");
  selectPopup.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  var selectContainer = document.getElementById("selectContainer1");
  if (!selectContainer.contains(event.target)) {
    document.getElementById("selectPopup1").classList.remove("active");
  }
});

document.querySelectorAll(".select-option1").forEach(function (option) {
  option.addEventListener("click", function () {
    document.getElementById("selectValue1").innerText = this.innerText;
    document.getElementById("selectPopup1").classList.remove("active");
  });
});

// fill_plus
document.addEventListener("DOMContentLoaded", function () {
  const openPopupButton = document.getElementById("openPopup");
  const popup = document.getElementById("popup");
  const closePopupButton = document.getElementById("closePopup");
  const selectedTagsContainer = document.getElementById("selectedTags");

  if (openPopupButton) {
    openPopupButton.addEventListener("click", function () {
      popup.style.display = "flex";
    });
  }

  if (closePopupButton) {
    closePopupButton.addEventListener("click", function () {
      popup.style.display = "none";
    });
  }

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });

  const addTagButtons = document.querySelectorAll(".add-tag");
  addTagButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tagText = this.textContent.trim(); // Lấy nội dung của nút
      if (!this.classList.contains("disabled")) {
        const tagElement = document.createElement("button");
        tagElement.textContent = tagText;
        tagElement.className = "selected-tag";
        const computedStyle = window.getComputedStyle(this);
        tagElement.style.background = computedStyle.background;
        // Tạo icon xóa cho thẻ
        const removeIcon = document.createElement("span");
        removeIcon.textContent = "×";
        removeIcon.style.cursor = "pointer";
        removeIcon.style.marginLeft = "10px";
        removeIcon.style.fontSize = "18px";
        removeIcon.addEventListener("click", function () {
          tagElement.remove();
          button.classList.remove("disabled");
        });

        tagElement.appendChild(removeIcon);
        selectedTagsContainer.appendChild(tagElement);
        // Vô hiệu hóa nút đã chọn
        this.classList.add("disabled");
      }
    });
  });
});

// trend-card
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".card button");

  buttons.forEach((button) => {
    const text = button.textContent.trim();
    switch (text) {
      case "Việc làm":
        button.style.background = "linear-gradient(135deg, #6dd5ed, #2193b0)";
        break;
      case "Tìm việc":
        button.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
        break;
      case "Mẹo hay":
        button.style.background = "linear-gradient(135deg, #a8e063, #56ab2f)";
        break;
      case "Hỏi đáp":
        button.style.background = "linear-gradient(135deg, #fcb045, #fd1d1d)";
        break;
      case "Tiktoker":
        button.style.background = "linear-gradient(135deg, #00c6ff, #0072ff)";
        break;
      case "Tin tức":
        button.style.background = "linear-gradient(135deg, #00b09b, #96c93d)";
        break;
      case "Pháp luật":
        button.style.background = "linear-gradient(135deg, #006400, #9acd32)";
        break;
      case "Du học":
        button.style.background = "linear-gradient(135deg, #a2c2e6, #2e3192)";
        break;
      case "Học Tiếng Hàn":
        button.style.background = "linear-gradient(135deg, #ff7e5f, #feb47b)";
        break;
      case "Topik":
        button.style.background = "linear-gradient(135deg, #00d2d3, #028a0f)";
        break;
      case "Busan":
        button.style.background = "linear-gradient(135deg, #f02930, #ffffff)";
        break;
      case "Ulsan":
        button.style.background = "linear-gradient(135deg, #a5eb9d, #8a5b6b)";
        break;
      case "Daegu":
        button.style.background = "linear-gradient(135deg, #15ff00, #fad0c4)";
        break;
      case "Seoul":
        button.style.background = "linear-gradient(135deg, #ebea9d, #0d7ee7)";
        break;
      case "Mua":
        button.style.background = "linear-gradient(135deg, #6dd5ed, #2193b0)";
        break;
      case "Bán":
        button.style.background = "linear-gradient(135deg, #9afcff, #ffe9e3)";
        break;
      default:
        button.style.background = ""; // Đặt màu nền mặc định nếu cần
        break;
    }
  });
});

// des
document.addEventListener("DOMContentLoaded", function () {
  const des = document.getElementById("des");

  des.addEventListener("click", function () {
    window.location.href = "des.html";
  });
});

// confirm
document.addEventListener("DOMContentLoaded", function () {
  const conf = document.getElementById("conf");

  conf.addEventListener("click", function () {
    window.location.href = "confirm.html";
  });
});

