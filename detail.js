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
