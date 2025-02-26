 // Lấy dữ liệu thành viên từ localStorage
  const membersData = JSON.parse(localStorage.getItem("selectedMembers"));
  
  // Hàm để hiển thị thông tin chi tiết của thành viên
  function displayMembersDetails(data) {
    if (data) {
      const profileDetail = document.getElementById("profile-detail");
  
      // Tạo tiêu đề
      const title = document.createElement("h1");
      title.textContent = data.name;
  
      // Tạo hình ảnh chính
      const mainImg = document.createElement("img");
      mainImg.src = data.image;
      mainImg.alt = data.name;
  
      // Tạo mô tả
      const description = document.createElement("p");
      description.textContent = data.description;
      
      // Thêm các phần tử vào container
      profileDetail.appendChild(title);
      profileDetail.appendChild(mainImg);
      profileDetail.appendChild(description);
    } else {
      // Nếu không có thông tin, hiển thị thông báo lỗi
      const profileDetail = document.getElementById("profile-detail");
      profileDetail.innerHTML = "<p>Không tìm thấy thông tin thành viên.</p>";
    }
  }
  function addBackButtonEvent() {
    const backButton = document.getElementById("back-button");
    backButton.addEventListener("click", () => {
      window.location.href = "index.html"; // Chuyển về trang chủ
    });
  }
  
  // Gọi hàm hiển thị chi tiết thành viên
  displayMembersDetails(membersData);
  addBackButtonEvent();

  // form đặt tour
  const bookButton = document.getElementById("book-button");
  const modal = document.getElementById("book-tour-modal");
  const closeModal = document.getElementById("close-modal");

  // Mở form đặt tour khi nhấn nút "Đặt tour"
  bookButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Đóng form đặt tour khi nhấn nút đóng (x)
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Đóng form đặt tour khi click bên ngoài modal
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  document.getElementById("tour-location").addEventListener("change", function() {
    var region = this.value;
    var locationSelect = document.getElementById("tour-destination");
    var locationLabel = document.getElementById("location-label");
    var locationContainer = document.getElementById("location-label-container");
  
    // Clear the current options in the select
    locationSelect.innerHTML = "";
  
    // Show the location select and label
    locationContainer.style.display = "block";
  
    // Set label based on selected region
    if (region === "mien-nam") {
      locationLabel.textContent = "Chọn địa điểm (Miền Nam)";
      var locations = [
        "TP.Hồ Chí Minh", "Tây Ninh", "Bình Dương", "Bình Phước", "Đồng Nai",
        "Tp Cần Thơ", "Kiên Giang", "Vũng Tàu", "Châu Đốc", "Phú Quốc"
      ];
    } else if (region === "mien-trung") {
      locationLabel.textContent = "Chọn địa điểm (Miền Trung)";
      var locations = [
        "Đà Nẵng", "Hội An", "Phong Nha Kẻ Bàng", "Đảo Lý Sơn", "Thánh Địa Mỹ Sơn",
        "Ghềnh Đá Đĩa", "Nha Trang", "Đà Lạt", "Huế", "Buôn Mê Thuột"
      ];
    } else if (region === "mien-bac") {
      locationLabel.textContent = "Chọn địa điểm (Miền Bắc)";
      var locations = [
        "Hà Nội", "Sapa", "Vịnh Hạ Long", "Đảo Cát Bà", "Đảo Cô Tô", "Thác Bản Giốc",
        "Ba Vì", "Núi Yến Tử", "Tràng An", "Hà Giang"
      ];
    }
  
    // Add the options for the selected region
    locations.forEach(function(location) {
      var option = document.createElement("option");
      option.value = location;
      option.textContent = location;
      locationSelect.appendChild(option);
    });
  });
   // Xử lý form đặt tour (ví dụ đơn giản)
  document.getElementById("book-tour-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Ngừng hành động mặc định của form

    const tourName = document.getElementById("tour-name").value;
    const tourDate = document.getElementById("tour-date").value;
    const tourLocation = document.getElementById("tour-location").value;
    const tourNumber = document.getElementById("tour-number").value;
    const tourDestination = document.getElementById("tour-destination").value;
    
    alert(`Bạn đã đặt tour "${tourName}" vào ngày ${tourDate} tại ${tourLocation} ${tourDestination} với ${tourNumber} người tham gia.`);
    
    // Đóng form sau khi submit
    modal.style.display = "none";
  });