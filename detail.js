//Bùi Ngọc Ninh
const locationData = JSON.parse(localStorage.getItem("selectedLocation"));

// Hàm hiển thị thông tin chi tiết của địa điểm
function displayLocationDetails(data) {
  if (data) {
    const detailContainer = document.getElementById("detail-container");

    // Tạo tiêu đề
    const title = document.createElement("h1");
    title.textContent = data.name;

    // Tạo hình ảnh chính
    const mainImg = document.createElement("img");
    mainImg.src = data.image;
    mainImg.alt = data.name;

    // Thêm các phần tử vào container
    detailContainer.appendChild(title);
    detailContainer.appendChild(mainImg);

    // Hiển thị mô tả chi tiết (dành cho từng phần mô tả như Lịch sử, Cảnh quan, ...)
    data.descriptions.forEach(description => {
      const descriptionTitle = document.createElement("h2");
      descriptionTitle.textContent = description.title; // Tiêu đề mô tả (ví dụ: "Lịch sử")
      
      const descriptionContent = document.createElement("div");
      descriptionContent.innerHTML = description.content; // Nội dung mô tả (ví dụ: thông tin lịch sử)
      
      // Thêm vào container
      detailContainer.appendChild(descriptionTitle);
      detailContainer.appendChild(descriptionContent);
    });

    // Hiển thị thêm ảnh từ thư mục `images`
    const galleryTitle = document.createElement("h2");
    galleryTitle.textContent = "Thư viện hình ảnh";
    detailContainer.appendChild(galleryTitle);
    
    const galleryContainer = document.createElement("div");
    galleryContainer.classList.add("image-gallery");

    
    // Giả sử các ảnh bổ sung có tên dạng: "ten_dia_diem_1.jpg", "ten_dia_diem_2.jpg", "ten_dia_diem_3.jpg"
     for (let i = 1; i <= 6; i++) { // Hiển thị 6 ảnh bổ sung
      const additionalImg = document.createElement("img");
       additionalImg.src = `images/${data.id.toLowerCase().replace(/ /g, "")}_${i}.jpg`;
      additionalImg.alt = `${data.id} ${i}`;
      galleryContainer.appendChild(additionalImg);
    }

    detailContainer.appendChild(galleryContainer);
   } else {
     // Hiển thị thông báo nếu không tìm thấy dữ liệu
    document.body.innerHTML = "<p>Không tìm thấy thông tin địa điểm.</p>";
   }
}

// Thêm sự kiện cho nút quay lại
function addBackButtonEvent() {
  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Chuyển về trang chủ
  });
}

// Khởi chạy hiển thị chi tiết địa điểm
displayLocationDetails(locationData);
addBackButtonEvent();
const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  loginNowBtn = document.querySelector("#login-now-btn"),
  signupNowBtn = document.querySelector("#signup-now-btn"),
  welcomeMessage = document.querySelector("#welcome-message"),
  dropdownIcon = document.querySelector("#dropdown-icon"), // Icon mũi tên
  dropdownMenu = document.querySelector("#dropdown-menu"),
  accountSettingsBtn = document.querySelector("#account-settings-btn"),
  logoutBtn = document.querySelector("#logout-btn"),
  signupUsernameInput = document.querySelector("#signup-username"),
  signupEmailInput = document.querySelector("#signup-email"),
  signupPasswordInput = document.querySelector("#signup-password"),
  signupConfirmPasswordInput = document.querySelector("#signup-confirm-password"),
  loginEmailInput = document.querySelector("#login-email"),
  loginPasswordInput = document.querySelector("#login-password");

// Hiển thị form đăng nhập/signup khi nhấn vào nút "Login"
formOpenBtn.addEventListener("click", () => {
  home.classList.add("show");
  formContainer.classList.add("active");
});

// Đóng form khi nhấn nút "X"
formCloseBtn.addEventListener("click", () => {
  home.classList.remove("show");
  formContainer.classList.remove("active");
});

// Xử lý hiện/ẩn mật khẩu khi nhấn vào biểu tượng mắt
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

// Khi người dùng nhấn "Signup" sẽ hiển thị form đăng ký
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

// Khi người dùng nhấn "Login" sẽ không tắt form mà chỉ chuyển qua lại form
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Không đóng form khi nhấn Login
  formContainer.classList.remove("active");
  document.querySelector(".login_form").classList.add("active"); // Hiển thị form đăng nhập
});

// Khi người dùng nhấn nút "Signup Now" trong form đăng ký
signupNowBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Lấy thông tin từ form đăng ký
  const username = signupUsernameInput.value.trim();
  const email = signupEmailInput.value.trim();
  const password = signupPasswordInput.value.trim();
  const confirmPassword = signupConfirmPasswordInput.value.trim();

  // Kiểm tra nếu mật khẩu và xác nhận mật khẩu khớp
  if (password !== confirmPassword) {
    alert("Mật khẩu xác nhận không khớp!");
    return;
  }

  // Lưu thông tin vào localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // Chuyển qua form đăng nhập sau khi đăng ký thành công
  formContainer.classList.remove("active");
  document.querySelector(".login_form").classList.add("active"); // Hiển thị form đăng nhập
});

// Khi người dùng nhấn nút "Login Now" trong form đăng nhập
loginNowBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Ngừng gửi form

  const enteredEmail = loginEmailInput.value.trim();
  const enteredPassword = loginPasswordInput.value.trim();

  const storedUsername = localStorage.getItem("username");
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
    // Đăng nhập thành công, hiển thị tên tài khoản
    welcomeMessage.textContent = `Chào ${storedUsername}!`;
    welcomeMessage.style.display = 'inline-block'; // Hiển thị dòng chào

    // Hiển thị icon mũi tên trỏ xuống và ẩn nút login
    formOpenBtn.style.display = 'none'; // Ẩn nút login
    dropdownIcon.style.display = 'inline-block'; // Hiển thị icon mũi tên trỏ xuống
    dropdownMenu.style.display = "none"; // Ẩn dropdown mặc định

    // Đóng form sau khi đăng nhập thành công
    formContainer.classList.remove("active"); // Ẩn form
    home.classList.remove("show"); // Ẩn phần home
  } else {
    alert("Tên tài khoản hoặc mật khẩu không chính xác!");
  }
});


// Xử lý khi người dùng chọn "Cài đặt tài khoản"
accountSettingsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Chuyển đến trang cài đặt tài khoản hoặc mở form cài đặt tài khoản
  alert("Chuyển đến trang cài đặt tài khoản...");
});

// Xử lý khi người dùng chọn "Đăng xuất"
logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Xóa thông tin đăng nhập và đăng xuất
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("password");

  // Ẩn dòng chào và trở về trạng thái ban đầu
  welcomeMessage.style.display = 'none';
  formOpenBtn.style.display = 'inline-block'; // Hiển thị lại nút login
  dropdownIcon.style.display = 'none'; // Ẩn icon mũi tên
  dropdownMenu.style.display = 'none'; // Ẩn dropdown
});

// Hiển thị dropdown khi nhấn vào icon
dropdownIcon.addEventListener("click", () => {
  // Toggle dropdown menu khi nhấn vào icon
  dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
});
// Lấy nút "Lên đầu trang"
let backToTopButton = document.getElementById("back-to-top");

// Khi cuộn trang, kiểm tra nếu cuộn xuống dưới 200px thì hiển thị nút
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block"; // Hiển thị nút
  } else {
    backToTopButton.style.display = "none"; // Ẩn nút khi cuộn lên
  }
};

// Khi nhấn vào nút "Lên đầu trang", cuộn về đầu trang
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Cuộn mượt mà
  });
});