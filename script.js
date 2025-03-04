//Bùi Ngoch Ninh
// Danh sách các địa điểm du lịch
const locations = [
  {
    "id": "tp_ho_chi_minh",
    "name": "TP. Hồ Chí Minh",
    "area": "TP. Hồ Chí Minh",
    "image": "images/tp_ho_chi_minh_1.jpg",
    "descriptions": [
      {
        "title": "Lịch sử",
        "content": `
          <p><b>TP. Hồ Chí Minh - Thành phố năng động:</b> TP. Hồ Chí Minh, hay còn gọi là Sài Gòn, là trung tâm kinh tế, văn hóa, và chính trị lớn nhất của Việt Nam. Thành phố nổi bật với sự phát triển mạnh mẽ và nhịp sống sôi động.</p>
        `
      },
      {
        "title": "Cảnh quan thiên nhiên",
        "content": `
          <p><b>Vườn quốc gia Cần Giờ:</b> Là khu bảo tồn thiên nhiên gần TP. Hồ Chí Minh, Vườn quốc gia Cần Giờ nổi bật với hệ sinh thái rừng ngập mặn và các loài động vật hoang dã.</p>
  
          <p><b>Sông Sài Gòn:</b> Sông Sài Gòn uốn lượn qua thành phố, tạo nên một bức tranh thiên nhiên đẹp mắt giữa sự phát triển đô thị tấp nập.</p>
        `
      },
      {
        "title": "Văn hóa",
        "content": `
          <p><b>Văn hóa đô thị:</b> TP. Hồ Chí Minh là nơi giao thoa của nhiều nền văn hóa, với các lễ hội đa dạng, và là trung tâm văn hóa lớn của cả nước.</p>
        `
      },
      {
        "title": "Ẩm thực",
        "content": `
          <p><b>Phở Sài Gòn:</b> Phở ở TP. Hồ Chí Minh có hương vị khác biệt, nước dùng thanh, nhiều gia vị và thường ăn kèm với thịt bò hoặc thịt gà.</p>
  
          <p><b>Bánh mì Sài Gòn:</b> Đây là món ăn nổi tiếng với phần nhân đầy đặn, gồm thịt, rau, và các loại gia vị độc đáo, thường được ăn vào buổi sáng.</p>
        `
      }
    ]
  },   
  {
    "id": "tay_ninh",
    "name": "Tây Ninh",
    "area": "Tây Ninh",
    "image": "images/tay_ninh_1.jpg",
    "descriptions": [
      {
        "title": "Lịch sử",
        "content": `
          <p><b>Tây Ninh - Vùng đất tín ngưỡng:</b> Tây Ninh nổi tiếng với đạo Cao Đài, một tôn giáo đặc biệt chỉ có tại Việt Nam. Thành phố này là nơi có trung tâm hành hương lớn của đạo Cao Đài.</p>
        `
      },
      {
        "title": "Cảnh quan thiên nhiên",
        "content": `
          <p><b>Chùa Bà Đen:</b> Chùa Bà Đen là một điểm du lịch tâm linh nổi tiếng, nằm trên đỉnh núi Bà Đen, mang lại cho du khách khung cảnh thiên nhiên tuyệt đẹp và không khí yên bình.</p>
  
          <p><b>Vườn quốc gia Lò Gò - Xa Mát:</b> Nơi này có hệ sinh thái đa dạng, thích hợp cho các chuyến tham quan sinh thái và cắm trại.</p>
        `
      },
      {
        "title": "Văn hóa",
        "content": `
          <p><b>Cao Đài:</b> Tây Ninh là nơi khởi nguồn của đạo Cao Đài, nơi có Đền Thánh Tây Ninh - một công trình kiến trúc hoành tráng và là trung tâm của đạo Cao Đài tại Việt Nam.</p>
        `
      },
      {
        "title": "Ẩm thực",
        "content": `
          <p><b>Bánh tráng phơi sương:</b> Bánh tráng phơi sương là món đặc sản của Tây Ninh, thường được ăn kèm với thịt luộc, rau sống và nước mắm.</p>
  
          <p><b>Gà ta Tây Ninh:</b> Gà được nuôi thả tự do, thịt săn chắc và có hương vị đặc trưng, chế biến thành nhiều món như gà luộc, gà nướng.</p>
        `
      }
    ]
  },
  {
    "id": "binh_duong",
    "name": "Bình Dương",
    "area": "Bình Dương",
    "image": "images/binh_duong_1.jpg",
    "descriptions": [
      {
        "title": "Lịch sử",
        "content": `
          <p><b>Bình Dương - Vùng đất công nghiệp:</b> Bình Dương là một tỉnh công nghiệp lớn của miền Nam, nổi bật với các khu công nghiệp phát triển mạnh mẽ và là nơi đóng góp lớn vào nền kinh tế Việt Nam.</p>
        `
      },
      {
        "title": "Cảnh quan thiên nhiên",
        "content": `
          <p><b>Làng tre Phú An:</b> Làng tre Phú An là một điểm tham quan sinh thái, nổi bật với những cánh đồng tre xanh mát, nơi du khách có thể tìm hiểu về các sản phẩm từ tre.</p>
  
          <p><b>Hồ Dầu Tiếng:</b> Hồ Dầu Tiếng là hồ nước nhân tạo lớn nhất ở miền Nam, với phong cảnh yên bình và là nơi lý tưởng để cắm trại và dã ngoại.</p>
        `
      },
      {
        "title": "Văn hóa",
        "content": `
          <p><b>Văn hóa dân tộc Kinh và các dân tộc thiểu số:</b> Bình Dương là nơi sinh sống của nhiều cộng đồng dân tộc với phong tục, lễ hội đặc sắc, như lễ hội Ok Om Bok của người Khmer.</p>
        `
      },
      {
        "title": "Ẩm thực",
        "content": `
          <p><b>Bánh bèo Bình Dương:</b> Bánh bèo ở Bình Dương có hương vị đặc biệt, được làm từ bột gạo và ăn kèm với tôm, thịt, và nước mắm thơm ngon.</p>
  
          <p><b>Cơm tấm:</b> Món cơm tấm với thịt nướng, bì và chả trứng là món ăn phổ biến tại Bình Dương, được chế biến với hương vị đậm đà và hấp dẫn.</p>
        `
      }
    ]
  },  
  {
    "id": "binh_phuoc",
    "name": "Bình Phước",
    "area": "Bình Phước",
    "image": "images/binh_phuoc_1.jpg",
    "descriptions": [
      {
        "title": "Lịch sử",
        "content": `
          <p><b>Bình Phước - Vùng đất giàu nông sản:</b> Bình Phước nổi bật với nền nông nghiệp phát triển, đặc biệt là trồng cao su và hồ tiêu. Đây cũng là nơi có nhiều di tích lịch sử từ thời kháng chiến.</p>
        `
      },
      {
        "title": "Cảnh quan thiên nhiên",
        "content": `
          <p><b>Thác Đạ Mí:</b> Thác Đạ Mí là một trong những thác đẹp của Bình Phước, với cảnh quan thiên nhiên tuyệt đẹp và không khí trong lành.</p>
  
          <p><b>Cao su Bình Phước:</b> Bình Phước nổi tiếng với các đồn điền cao su rộng lớn, nơi du khách có thể tham quan và tìm hiểu về quy trình sản xuất mủ cao su.</p>
        `
      },
      {
        "title": "Văn hóa",
        "content": `
          <p><b>Văn hóa dân tộc Stieng:</b> Người Stieng là một trong những dân tộc thiểu số ở Bình Phước, với những phong tục và lễ hội đặc trưng, như lễ hội mừng lúa mới.</p>
        `
      },
      {
        "title": "Ẩm thực",
        "content": `
          <p><b>Hạt tiêu Bình Phước:</b> Hạt tiêu Bình Phước nổi tiếng vì chất lượng vượt trội, được sử dụng trong nhiều món ăn để tạo hương vị đặc trưng.</p>
  
          <p><b>Cơm gà Bình Phước:</b> Món cơm gà ở Bình Phước có hương vị đậm đà, gà được chế biến với gia vị đặc biệt, tạo nên món ăn hấp dẫn.</p>
        `
      }
    ]
  },  
  {
    "id": "dong_nai",
    "name": "Đồng Nai",
    "area": "Đồng Nai",
    "image": "images/dong_nai_1.jpg",
    "descriptions": [
      {
        "title": "Lịch sử",
        "content": `
          <p><b>Đồng Nai - Vùng đất công nghiệp:</b> Đồng Nai là một trong những tỉnh phát triển mạnh mẽ về công nghiệp tại miền Nam Việt Nam. Ngoài việc nổi bật với các khu công nghiệp, Đồng Nai còn là nơi có nhiều di tích lịch sử, như các di tích thời kỳ chiến tranh.</p>
        `
      },
      {
        "title": "Cảnh quan thiên nhiên",
        "content": `
          <p><b>Vườn quốc gia Cát Tiên:</b> Vườn quốc gia Cát Tiên là nơi bảo tồn hệ sinh thái rừng nhiệt đới, với các loài động vật hoang dã và cảnh quan thiên nhiên hùng vĩ, là một điểm đến lý tưởng cho du khách yêu thích thiên nhiên.</p>
  
          <p><b>Hồ Trị An:</b> Hồ Trị An là một hồ nước nhân tạo lớn, bao quanh bởi những khu rừng xanh mướt, là nơi du khách có thể cắm trại và thư giãn.</p>
        `
      },
      {
        "title": "Văn hóa",
        "content": `
          <p><b>Văn hóa các dân tộc:</b> Đồng Nai là nơi sinh sống của nhiều dân tộc thiểu số, như người Châu Ro, với những phong tục tập quán và lễ hội đặc sắc. Các lễ hội như lễ hội đua ghe và lễ hội cúng bái rất phổ biến tại đây.</p>
        `
      },
      {
        "title": "Ẩm thực",
        "content": `
          <p><b>Canh chua cá lóc:</b> Đây là một món ăn phổ biến ở Đồng Nai, với cá lóc nấu canh chua cùng các loại rau và gia vị đặc trưng, mang lại hương vị đậm đà và dễ chịu.</p>
  
          <p><b>Bánh canh Long Khánh:</b> Bánh canh ở Long Khánh là món ăn dân dã, với nước lèo thơm ngon và sợi bánh canh mềm, ăn kèm với thịt heo hoặc chả cá.</p>
        `
      }
    ]
  },  
  {
    "id": "tp_can_tho",
    "name": "TP. Cần Thơ",
    "area": "TP. Cần Thơ",
    "image": "images/tp_can_tho_1.jpg",
    "descriptions": [
      {
        "title": "Lịch sử",
        "content": `
          <p><b>Cần Thơ - Trung tâm miền Tây:</b> TP. Cần Thơ là trung tâm kinh tế, chính trị và văn hóa của vùng đồng bằng sông Cửu Long, với nền văn hóa đa dạng và lịch sử lâu đời. Thành phố này còn nổi bật với các đặc sản và khu chợ nổi nổi tiếng.</p>
        `
      },
      {
        "title": "Cảnh quan thiên nhiên",
        "content": `
          <p><b>Chợ nổi Cái Răng:</b> Đây là chợ nổi lớn nhất tại TP. Cần Thơ, nơi buôn bán các sản phẩm nông sản tươi sống, là điểm du lịch nổi bật của thành phố.</p>
  
          <p><b>Cồn Sơn:</b> Cồn Sơn là một hòn đảo nhỏ trong sông Hậu, với những vườn trái cây tươi tốt và không khí yên bình, là nơi lý tưởng để trải nghiệm cuộc sống của người dân miền Tây.</p>
        `
      },
      {
        "title": "Văn hóa",
        "content": `
          <p><b>Văn hóa miền Tây:</b> TP. Cần Thơ là trung tâm văn hóa miền Tây Nam Bộ, nơi còn lưu giữ nhiều phong tục, lễ hội đặc trưng như lễ hội đua ghe, hội xuân.</p>
        `
      },
      {
        "title": "Ẩm thực",
        "content": `
          <p><b>Hủ tiếu Cần Thơ:</b> Đây là món ăn đặc trưng của Cần Thơ, với sợi hủ tiếu dai, nước lèo thanh ngọt, thường được ăn kèm với thịt, hải sản hoặc lòng heo.</p>
  
          <p><b>Chả cá lã vọng:</b> Món chả cá lã vọng có nguồn gốc từ miền Tây, cá được chiên vàng và ăn kèm với bún, rau sống và nước mắm chua ngọt đặc trưng.</p>
        `
      }
    ]
  },  
  {
    "id": "kien_giang",
    "name": "Kiên Giang",
    "area": "Kiên Giang",
    "image": "images/kien_giang_1.jpg",
    "descriptions": [
      {
        "title": "Lịch sử",
        "content": `
          <p><b>Kiên Giang - Vùng đất du lịch biển đảo:</b> Kiên Giang nổi bật với những bãi biển đẹp và các đảo, đặc biệt là Phú Quốc. Nơi đây cũng có nền văn hóa phong phú với các di tích lịch sử lâu đời.</p>
        `
      },
      {
        "title": "Cảnh quan thiên nhiên",
        "content": `
          <p><b>Phú Quốc:</b> Đảo Phú Quốc là một trong những điểm du lịch nổi tiếng nhất tại Kiên Giang, với bãi biển cát trắng, nước biển trong xanh và các khu nghỉ dưỡng cao cấp.</p>
  
          <p><b>Vườn quốc gia U Minh Thượng:</b> Đây là khu rừng ngập mặn, bảo tồn nhiều loài động thực vật quý hiếm. Vườn quốc gia là điểm đến lý tưởng cho những ai yêu thích thiên nhiên hoang dã.</p>
        `
      },
      {
        "title": "Văn hóa",
        "content": `
          <p><b>Công giáo và các dân tộc thiểu số:</b> Kiên Giang là nơi sinh sống của nhiều dân tộc, trong đó có cộng đồng người Hoa, người Khmer, và người Kinh. Mỗi nhóm đều có những lễ hội, phong tục riêng biệt.</p>
        `
      },
      {
        "title": "Ẩm thực",
        "content": `
          <p><b>Cá còi Kiên Giang:</b> Món cá còi nổi tiếng với vị ngon đặc biệt, được chế biến theo nhiều cách khác nhau như nướng, kho, hoặc nấu canh.</p>
  
          <p><b>Gỏi cá trích:</b> Gỏi cá trích là món ăn đặc sản của Kiên Giang, với cá trích tươi sống, ăn kèm với rau sống và nước mắm chua ngọt.</p>
        `
      }
    ]
  },  
  {
    "id": "vung_tau",
    "name": "Vũng Tàu",
    "area": "Bà Rịa - Vũng Tàu",
    "image": "images/vung_tau_1.jpg",
    "descriptions": [
      {
        "title": "Lịch sử",
        "content": `
          <p><b>Tên gọi Vũng Tàu:</b> Vũng Tàu là thành phố ven biển thuộc tỉnh Bà Rịa - Vũng Tàu, nằm ở phía Nam Việt Nam. Với vị trí địa lý thuận lợi, Vũng Tàu đã phát triển mạnh mẽ cả về kinh tế, du lịch và văn hóa.</p>
  
          <p><b>Vị trí chiến lược:</b> Vũng Tàu nằm gần cửa biển, là một trong những cảng biển quan trọng của Việt Nam. Thành phố này còn là nơi tập trung các cơ sở kinh tế lớn như các nhà máy, kho bãi dầu khí, đóng góp quan trọng vào nền kinh tế quốc gia.</p>
  
          <p><b>Vũng Tàu xưa và nay:</b> Vũng Tàu từng là khu nghỉ dưỡng của giới thượng lưu, và nay trở thành một trong những điểm du lịch nổi tiếng của miền Nam, với bãi biển dài, khu nghỉ dưỡng sang trọng và các di tích văn hóa.</p>
        `
      },
      {
        "title": "Cảnh quan thiên nhiên",
        "content": `
          <p><b>Bãi biển Vũng Tàu:</b> Vũng Tàu nổi tiếng với các bãi biển đẹp như Bãi Trước, Bãi Sau, và Bãi Dâu. Cả ba bãi biển đều có làn nước trong xanh, cát trắng mịn, là điểm đến lý tưởng cho du khách yêu thích biển cả.</p>
  
          <p><b>Ngọn núi Tao Phùng:</b> Ngọn núi này nằm giữa thành phố Vũng Tàu, là nơi lý tưởng để du khách ngắm toàn cảnh thành phố và biển cả từ trên cao. Từ đỉnh núi, bạn có thể chiêm ngưỡng cảnh đẹp của Vũng Tàu cùng những bãi biển tuyệt đẹp.</p>
  
          <p><b>Vũng Tàu và các hòn đảo:</b> Ngoài bãi biển, Vũng Tàu còn nổi tiếng với các đảo nhỏ như Hòn Bà, Hòn Ngọc và Hòn Gai, nơi du khách có thể tham quan, tắm biển và tận hưởng không gian yên bình.</p>
        `
      },
      {
        "title": "Văn hóa",
        "content": `
          <p><b>Văn hóa lễ hội:</b> Vũng Tàu nổi bật với các lễ hội văn hóa truyền thống như lễ hội Nghinh Ông, lễ hội chùa Bà, và lễ hội đua thuyền. Những lễ hội này không chỉ mang giá trị văn hóa mà còn là dịp để người dân và du khách giao lưu, thưởng thức những nét đặc trưng của vùng đất biển này.</p>
  
          <p><b>Ẩm thực Vũng Tàu:</b> Vũng Tàu nổi tiếng với những món ăn hải sản tươi ngon như gỏi cá, tôm hùm, sò điệp, cua biển... Món bánh khọt cũng rất nổi tiếng ở Vũng Tàu, được làm từ bột gạo và tôm, cá, ăn kèm với rau sống và nước mắm.</p>
        `
      },
      {
        "title": "Ẩm thực",
        "content": `
          <p><b>Bánh khọt:</b> Bánh khọt Vũng Tàu là món ăn đặc sản nổi tiếng với lớp vỏ giòn tan và nhân tôm, thịt, ăn kèm với rau sống và nước mắm chua ngọt.</p>
  
          <p><b>Cơm hải sản:</b> Vũng Tàu nổi tiếng với các món cơm hải sản tươi ngon, được chế biến từ các loại hải sản như tôm, cua, mực, cá. Đây là món ăn không thể bỏ qua khi đến thành phố này.</p>
  
          <p><b>Gỏi cá:</b> Gỏi cá Vũng Tàu là món ăn đặc trưng, với cá tươi được trộn với gia vị, rau sống và nước mắm. Đây là món ăn được ưa chuộng tại các nhà hàng ven biển.</p>
        `
      }
    ]
  }
  ,
  {
    "id": "chau_doc",
    "name": "Châu Đốc",
    "area": "An Giang",
    "image": "images/chau_doc_1.jpg",
    "descriptions": [
      {
        "title": "Lịch sử",
        "content": `
          <p><b>Tên gọi Châu Đốc:</b> Châu Đốc là một thành phố nằm ở phía Tây Nam Việt Nam, thuộc tỉnh An Giang. Thành phố này có vai trò quan trọng trong việc phát triển kinh tế, văn hóa và du lịch của vùng Đồng Bằng Sông Cửu Long.</p>
  
          <p><b>Châu Đốc và các cộng đồng dân tộc:</b> Châu Đốc là nơi sinh sống của nhiều dân tộc thiểu số như người Chăm, Khmer, Hoa và các dân tộc khác, tạo nên một bức tranh đa văn hóa phong phú và độc đáo.</p>
        `
      },
      {
        "title": "Cảnh quan thiên nhiên",
        "content": `
          <p><b>Chùa Bà Chúa Xứ:</b> Đây là một trong những điểm du lịch tâm linh nổi tiếng tại Châu Đốc. Chùa Bà Chúa Xứ không chỉ là nơi thờ cúng, mà còn là điểm tham quan, với cảnh quan thiên nhiên xung quanh rất đẹp.</p>
  
          <p><b>Rừng tràm Trà Sư:</b> Đây là một khu rừng ngập mặn, là nơi lý tưởng để du khách tham quan, khám phá hệ sinh thái phong phú của vùng đất ngập nước. Rừng tràm Trà Sư được bao phủ bởi thảm thực vật xanh mướt, là nơi sinh sống của nhiều loài động vật quý hiếm.</p>
        `
      },
      {
        "title": "Văn hóa",
        "content": `
          <p><b>Văn hóa Châu Đốc:</b> Châu Đốc nổi bật với nền văn hóa đa dạng, hòa quyện giữa các dân tộc Chăm, Khmer và Kinh. Những ngôi đền, chùa và các lễ hội truyền thống của các cộng đồng dân tộc tại Châu Đốc đã tạo nên một điểm nhấn văn hóa độc đáo cho thành phố này.</p>
        `
      },
      {
        "title": "Ẩm thực",
        "content": `
          <p><b>Bánh xèo Châu Đốc:</b> Bánh xèo tại Châu Đốc nổi bật với hương vị đặc biệt, vỏ bánh giòn, nhân tôm, thịt và giá đỗ, ăn kèm với rau sống và nước mắm chua ngọt.</p>
  
          <p><b>Cá linh nấu bông điên điển:</b> Đây là món ăn đặc sản của vùng Đồng Bằng Sông Cửu Long, trong đó cá linh được nấu với bông điên điển, tạo ra một hương vị thanh mát, ngon miệng.</p>
        `
      }
    ]
  }
  ,
  {
    "id": "phu_quoc",
    "name": "Phú Quốc",
    "area": "Kiên Giang",
    "image": "images/phu_quoc_1.jpg",
    "descriptions": [
      {
        "title": "Lịch sử",
        "content": `
          <p><b>Tên gọi Phú Quốc:</b> Phú Quốc là hòn đảo lớn nhất của Việt Nam, nằm ở phía Tây Nam, thuộc tỉnh Kiên Giang. Được mệnh danh là "Đảo Ngọc", Phú Quốc nổi tiếng với vẻ đẹp thiên nhiên hoang sơ và hệ sinh thái biển phong phú.</p>
  
          <p><b>Lịch sử Phú Quốc:</b> Phú Quốc không chỉ nổi tiếng với thiên nhiên tuyệt đẹp mà còn có giá trị lịch sử, khi đảo này từng là căn cứ quân sự quan trọng trong các cuộc chiến tranh.</p>
        `
      },
      {
        "title": "Cảnh quan thiên nhiên",
        "content": `
          <p><b>Bãi Sao:</b> Bãi Sao nổi tiếng với bãi cát trắng mịn và làn nước trong xanh. Đây là bãi biển đẹp nhất của Phú Quốc, là nơi lý tưởng để tắm biển và thư giãn.</p>
  
          <p><b>Vườn quốc gia Phú Quốc:</b> Với diện tích lên tới 31.000 ha, vườn quốc gia Phú Quốc có hệ động thực vật phong phú và đa dạng. Đây là nơi lý tưởng cho những ai yêu thích khám phá thiên nhiên và trekking.</p>
  
          <p><b>Hòn Thơm:</b> Hòn Thơm là một hòn đảo nằm gần Phú Quốc, nổi tiếng với cảnh quan thiên nhiên hoang sơ và các hoạt động thể thao dưới nước như lặn biển, ngắm san hô.</p>
        `
      },
      {
        "title": "Văn hóa",
        "content": `
          <p><b>Cá cơm Phú Quốc:</b> Phú Quốc nổi tiếng với món cá cơm, đặc biệt là cá cơm khô, một món ăn truyền thống được nhiều du khách yêu thích.</p>
  
          <p><b>Văn hóa làng chài:</b> Làng chài Phú Quốc vẫn giữ được nét truyền thống, du khách có thể tham quan, tìm hiểu về đời sống của ngư dân địa phương và tham gia vào các hoạt động đánh bắt thủy hải sản.</p>
        `
      },
      {
        "title": "Ẩm thực",
        "content": `
          <p><b>Cá ngựa Phú Quốc:</b> Đây là món ăn đặc trưng của Phú Quốc, được chế biến từ cá ngựa tươi ngon, có hương vị đặc biệt.</p>
  
          <p><b>Gỏi cá trích:</b> Gỏi cá trích là món ăn đặc sản của Phú Quốc, cá trích được trộn với rau sống và nước mắm, mang đến hương vị tươi ngon, đặc trưng của vùng biển.</p>
        `
      }
    ]
  }
];
  const locationsT = [
    {
      "id": "da_nang",
      "name": "Đà Nẵng",
      "area": "Đà Nẵng",
      "image": "images/da_nang_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Đà Nẵng - Thành phố đáng sống:</b> Đà Nẵng là thành phố lớn nhất miền Trung, nổi bật với sự phát triển mạnh mẽ về kinh tế, văn hóa và du lịch. Đây cũng là nơi có bãi biển đẹp và nhiều công trình hiện đại, là một trong những thành phố đáng sống nhất Việt Nam.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Bán đảo Sơn Trà:</b> Bán đảo Sơn Trà nổi bật với cảnh quan thiên nhiên tuyệt đẹp, với những bãi biển xanh mướt và hệ sinh thái đa dạng, là một điểm đến lý tưởng cho các hoạt động du lịch sinh thái.</p>
    
            <p><b>Ngũ Hành Sơn:</b> Ngũ Hành Sơn là một cụm núi nổi tiếng với những hang động, chùa chiền và là nơi du khách có thể chiêm ngưỡng những cảnh đẹp thiên nhiên hùng vĩ.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa Hội An:</b> Đà Nẵng và Hội An có sự giao thoa văn hóa giữa các thời kỳ, đặc biệt là văn hóa Chăm, mang đậm dấu ấn lịch sử của nền văn minh Chăm-pa xưa.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Mì Quảng:</b> Mì Quảng là món ăn đặc trưng của Đà Nẵng, với sợi mì dẻo, nước lèo thơm ngon và topping đa dạng từ tôm, thịt gà, đến thịt heo.</p>
    
            <p><b>Bánh xèo Đà Nẵng:</b> Đây là món bánh xèo giòn, ăn kèm với rau sống và nước mắm chua ngọt, mang đến hương vị rất đặc trưng của miền Trung.</p>
          `
        }
      ]
    },
    {
      "id": "hoi_an",
      "name": "Hội An",
      "area": "Quảng Nam",
      "image": "images/hoi_an_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Hội An - Phố cổ di sản thế giới:</b> Hội An là một thành phố cổ, nổi tiếng với khu phố cổ được UNESCO công nhận là Di sản văn hóa thế giới. Hội An đã từng là một cảng thương mại lớn của Việt Nam trong các thế kỷ 15-19.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Biển Cửa Đại:</b> Biển Cửa Đại là bãi biển nổi tiếng với cát trắng mịn và nước biển trong xanh, là điểm du lịch lý tưởng để thư giãn và tắm biển.</p>
    
            <p><b>Rừng dừa Bảy Mẫu:</b> Rừng dừa Bảy Mẫu là một điểm đến nổi bật, với những cánh rừng dừa bạt ngàn, nơi du khách có thể tham gia tour chèo thuyền và trải nghiệm cảnh quan hoang sơ.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Hội An - Lễ hội ánh sáng:</b> Mỗi tối, khi đêm xuống, phố cổ Hội An trở nên rực rỡ dưới ánh đèn lồng, tạo nên một không gian huyền bí và lãng mạn.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Cao lầu:</b> Món Cao lầu là đặc sản của Hội An, với sợi mì dày, nước dùng ngọt thanh và topping gồm thịt heo, rau sống và bánh tráng.</p>
    
            <p><b>Bánh mì Hội An:</b> Hội An nổi tiếng với bánh mì, với vỏ bánh giòn, nhân bên trong gồm thịt, rau, và các loại gia vị đặc trưng, tạo nên hương vị độc đáo.</p>
          `
        }
      ]
    },
    {
      "id": "phong_nha_ke_bang",
      "name": "Phong Nha Kẻ Bàng",
      "area": "Quảng Bình",
      "image": "images/phong_nha_ke_bang_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Phong Nha Kẻ Bàng - Di sản thiên nhiên thế giới:</b> Phong Nha Kẻ Bàng là khu vực di sản thiên nhiên nổi tiếng của Việt Nam, được UNESCO công nhận. Đây là nơi có những hang động tuyệt vời, bao gồm hang Sơn Đoòng, hang động lớn nhất thế giới.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Hang Sơn Đoòng:</b> Hang Sơn Đoòng là hang động lớn nhất thế giới, với những cấu trúc đá vôi khổng lồ, những thác nước trong hang và hệ sinh thái phong phú.</p>
    
            <p><b>Phong Nha Cave:</b> Phong Nha Cave là một trong những hang động nổi tiếng nhất, với hệ thống thạch nhũ tuyệt đẹp và những con suối trong vắt.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa vùng đất Quảng Bình:</b> Quảng Bình có nền văn hóa lâu đời với các di tích lịch sử và văn hóa phong phú, như đền thờ Đại tướng Võ Nguyên Giáp và các lễ hội truyền thống của các dân tộc tại đây.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Bánh bột lọc:</b> Bánh bột lọc Quảng Bình là món ăn đặc sản, với vỏ bánh dai và nhân tôm thịt, được cuốn trong lá chuối và hấp chín.</p>
    
            <p><b>Cháo canh Quảng Bình:</b> Đây là món ăn dân dã của Quảng Bình, với nước dùng ngọt thanh và sợi cháo mềm, ăn kèm với các loại hải sản tươi sống.</p>
          `
        }
      ]
    },      
    {
      "id": "dao_ly_son",
      "name": "Đảo Lý Sơn",
      "area": "Quảng Ngãi",
      "image": "images/dao_ly_son_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Đảo Lý Sơn - Đảo tỏi:</b> Đảo Lý Sơn là một trong những hòn đảo nổi tiếng của Việt Nam, nổi bật với sản phẩm tỏi Lý Sơn và cảnh quan thiên nhiên hùng vĩ. Đây là nơi sinh sống của ngư dân và có lịch sử lâu dài.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Vịnh An Hải:</b> Vịnh An Hải là một trong những vịnh đẹp của đảo Lý Sơn, với bãi biển cát trắng và nước biển trong xanh.</p>
    
            <p><b>Chùa Hang:</b> Chùa Hang là một trong những địa điểm linh thiêng trên đảo, nằm trong hang đá tự nhiên, với không gian thanh tịnh.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Phong tục tết của người Lý Sơn:</b> Người dân Lý Sơn tổ chức nhiều lễ hội truyền thống, trong đó có lễ hội Khao lề thế lính Hoàng Sa, để tưởng nhớ những người lính bảo vệ biển đảo.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Tỏi Lý Sơn:</b> Tỏi Lý Sơn nổi tiếng với vị cay nồng, được dùng làm gia vị cho nhiều món ăn và là đặc sản của đảo.</p>
    
            <p><b>Cua huỳnh đế:</b> Cua huỳnh đế là món ăn hải sản nổi tiếng tại Lý Sơn, với thịt cua ngọt và dai, thường được chế biến thành các món hấp hoặc nướng.</p>
          `
        }
      ]
    },  
    {
      "id": "thanh_dia_my_son",
      "name": "Thánh địa Mỹ Sơn",
      "area": "Quảng Nam",
      "image": "images/thanh_dia_my_son_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Thánh địa Mỹ Sơn - Di sản văn hóa thế giới:</b> Thánh địa Mỹ Sơn là một quần thể đền đài của nền văn hóa Chăm cổ, nằm trong một thung lũng của dãy núi Quảng Nam. Đây là một trong những di tích quan trọng, được UNESCO công nhận là di sản văn hóa thế giới.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Thánh địa Mỹ Sơn:</b> Nằm giữa cảnh quan thiên nhiên tuyệt đẹp với những ngọn núi xanh mướt, các đền đài cổ kính của Mỹ Sơn hòa mình vào khung cảnh thiên nhiên hùng vĩ, tạo nên một bức tranh hoàn hảo về sự kết hợp giữa văn hóa và thiên nhiên.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa Chăm:</b> Thánh địa Mỹ Sơn là trung tâm văn hóa của người Chăm cổ, với các đền thờ thánh thần, các công trình kiến trúc đặc sắc và những tôn giáo cổ xưa.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Hội An Cao Lầu:</b> Cao lầu là món ăn đặc sản của Hội An, nhưng nó cũng rất nổi tiếng tại khu vực gần Mỹ Sơn với những sợi mì dày, nước lèo thanh ngọt và thịt xá xíu đặc trưng.</p>
          `
        }
      ]
    },     
    {
      "id": "ghenh_da_dia",
      "name": "Ghềnh Đá Đĩa",
      "area": "Phú Yên",
      "image": "images/ghenh_da_dia_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Ghềnh Đá Đĩa - Kỳ quan thiên nhiên:</b> Ghềnh Đá Đĩa là một di tích thiên nhiên nổi tiếng của Phú Yên, được biết đến với những phiến đá hình chóp giống như các đĩa xếp chồng lên nhau, tạo nên cảnh quan độc đáo và kỳ thú.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Ghềnh Đá Đĩa:</b> Ghềnh Đá Đĩa là một điểm đến tuyệt vời để tham quan và chụp hình, với những bãi biển hoang sơ và đá núi lửa xếp chồng lên nhau tạo thành những hình thù độc đáo.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa biển Phú Yên:</b> Ghềnh Đá Đĩa nằm trong khu vực có nhiều văn hóa biển đặc sắc, bao gồm các phong tục tập quán của ngư dân nơi đây.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Cơm gà Phú Yên:</b> Đây là món ăn nổi tiếng, với gà luộc, cơm nấu với nước dùng gà ngọt thanh, được ăn kèm với rau sống và gia vị đặc trưng.</p>
    
            <p><b>Bánh hỏi lòng heo:</b> Một món ăn đặc sản của Phú Yên, với bánh hỏi mỏng, ăn kèm với lòng heo và nước mắm thơm ngon.</p>
          `
        }
      ]
    },          
    {
      "id": "nha_trang",
      "name": "Nha Trang",
      "area": "Khánh Hòa",
      "image": "images/nha_trang_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Tên gọi Nha Trang:</b> Nha Trang là một thành phố biển nổi tiếng của tỉnh Khánh Hòa, tên gọi “Nha Trang” bắt nguồn từ từ “Nha” có nghĩa là nước, còn “Trang” là một từ cổ có nghĩa là nơi sống của người dân. Thành phố này đã phát triển mạnh mẽ từ thời kỳ xa xưa, được biết đến là một trung tâm thương mại quan trọng của khu vực.</p>
    
            <p><b>Sự phát triển lịch sử:</b> Trong suốt lịch sử, Nha Trang là nơi sinh sống của nhiều cộng đồng dân tộc, bao gồm người Chăm và các dân tộc khác. Vào thế kỷ 17 và 18, Nha Trang trở thành một trong những trung tâm giao thương lớn nhất, đặc biệt là với các thương nhân từ Trung Quốc và phương Tây.</p>
    
            <p><b>Thời kỳ Chăm Pa:</b> Trong thời kỳ Chăm Pa, Nha Trang là trung tâm văn hóa và tôn giáo, với các công trình kiến trúc nổi tiếng như Tháp Bà Ponagar, là nơi thờ các thần linh của người Chăm.</p>
    
            <p><b>Nha Trang hiện nay:</b> Sau nhiều thăng trầm của lịch sử, Nha Trang hiện nay đã trở thành một trong những điểm du lịch nổi tiếng không chỉ trong nước mà còn trên thế giới, nổi bật với bờ biển dài đẹp và các khu nghỉ dưỡng sang trọng.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Bãi biển Nha Trang:</b> Nha Trang nổi tiếng với bãi biển dài, cát trắng mịn màng và nước biển trong xanh. Bãi biển Nha Trang là nơi lý tưởng để du khách tắm biển, tham gia các môn thể thao dưới nước và thưởng thức không khí trong lành.</p>
    
            <p><b>Vịnh Nha Trang:</b> Một trong những vịnh đẹp nhất Việt Nam, Vịnh Nha Trang có làn nước xanh ngắt và những hòn đảo xung quanh, như <b>Hòn Mun</b>, <b>Hòn Tằm</b>, và <b>Hòn Một</b>. Các hoạt động như lặn biển, snorkeling, và tham quan các đảo là điểm nhấn thu hút du khách.</p>
    
            <p><b>Tháp Bà Ponagar:</b> Một công trình kiến trúc cổ của người Chăm, Tháp Bà Ponagar nằm trên đồi, nhìn xuống toàn cảnh thành phố và biển Nha Trang. Đây là một di tích lịch sử và văn hóa quan trọng, nơi du khách có thể tìm hiểu về nền văn minh Chăm.</p>
    
            <p><b>Suối khoáng nóng Tháp Bà:</b> Nơi đây nổi tiếng với các bể tắm nước khoáng nóng, giúp thư giãn và điều trị các bệnh về da. Đây là một điểm đến phổ biến của du khách tìm kiếm sự thư giãn và chăm sóc sức khỏe.</p>
    
            <p><b>Đảo Hòn Mun:</b> Là một trong những điểm đến nổi tiếng với làn nước trong vắt, nơi đây là khu vực bảo tồn biển với hệ sinh thái đa dạng, thu hút những ai yêu thích khám phá dưới nước.</p>
    
            <p><b>Khí hậu nhiệt đới:</b> Nha Trang có khí hậu nhiệt đới, nắng quanh năm và nhiệt độ trung bình từ 26°C đến 28°C, là lý tưởng cho các hoạt động ngoài trời, đặc biệt vào mùa hè.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa Chăm:</b> Nha Trang là nơi lưu giữ nhiều dấu ấn văn hóa của người Chăm, đặc biệt là các công trình kiến trúc cổ như Tháp Bà Ponagar. Người Chăm cũng có các lễ hội truyền thống như lễ hội Kate, thường được tổ chức vào tháng 7 âm lịch.</p>
    
            <p><b>Lễ hội Nha Trang:</b> Lễ hội Nha Trang được tổ chức hàng năm vào tháng 6, với các hoạt động văn hóa đặc sắc như diễu hành, lễ hội âm nhạc, và các trò chơi dân gian.</p>
    
            <p><b>Trang phục truyền thống:</b> Người Chăm tại Nha Trang vẫn giữ gìn được những trang phục truyền thống, đặc biệt là những bộ đồ làm từ vải dệt tay, màu sắc sặc sỡ, thể hiện bản sắc văn hóa riêng biệt của họ.</p>
    
            <p><b>Lễ hội Nghinh Ông:</b> Lễ hội Nghinh Ông là một trong những lễ hội quan trọng của ngư dân Nha Trang, được tổ chức vào tháng Giêng âm lịch để tạ ơn thần biển và cầu mong cho một năm mùa màng bội thu, biển lặng sóng êm.</p>
    
            <p><b>Ẩm thực Nha Trang:</b> Nha Trang nổi bật với các món ăn hải sản tươi ngon, như <b>bánh căn</b>, <b>bánh xèo</b>, <b>nem nướng Nha Trang</b>. Ngoài ra, Nha Trang còn nổi tiếng với <b>gỏi cá</b> (salad cá sống) và các món ăn đặc trưng của vùng biển.</p>
    
            <p><b>Cư dân Nha Trang:</b> Người Nha Trang được biết đến với tính cách hiếu khách, thân thiện và mến khách. Du khách đến Nha Trang sẽ cảm nhận được sự nhiệt tình và cởi mở của người dân nơi đây.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Bánh Căn:</b> Một món ăn nổi tiếng của Nha Trang, bánh căn được làm từ bột gạo, nướng trên lửa than, ăn kèm với các loại nhân như tôm, thịt, trứng và các loại gia vị.</p>
    
            <p><b>Bánh Xèo:</b> Bánh xèo Nha Trang có lớp vỏ giòn tan, nhân thịt heo, tôm, giá đỗ và ăn kèm với rau sống và nước mắm chua ngọt.</p>
    
            <p><b>Nem Nướng Nha Trang:</b> Đây là món ăn đặc sản của Nha Trang, gồm nem chua và nem nướng được cuốn trong bánh tráng, ăn kèm với rau sống và nước mắm pha chế đặc biệt.</p>
    
            <p><b>Gỏi Cá:</b> Một món ăn độc đáo của Nha Trang, gỏi cá tươi sống, được trộn cùng rau thơm và gia vị, tạo nên một món ăn mang đậm hương vị biển.</p>
    
            <p><b>Hải sản Nha Trang:</b> Hải sản ở Nha Trang luôn tươi ngon, bao gồm các loại như tôm hùm, cua, mực, ốc, sò điệp... Đặc biệt, các nhà hàng ven biển sẽ mang đến trải nghiệm ăn uống tuyệt vời với các món hải sản chế biến theo phong cách Nha Trang.</p>
    
            <p><b>Bánh Đập:</b> Một món ăn truyền thống, bánh đập là loại bánh gạo giòn, được ăn kèm với nước chấm thơm ngon, là món ăn vặt phổ biến ở Nha Trang.</p>
    
            <p><b>Rượu Nho:</b> Nha Trang nổi tiếng với rượu nho, được làm từ nho Khánh Hòa, là một loại thức uống đặc sản không thể bỏ qua khi đến đây.</p>
          `
        }
      ]
    },
    {
      "id": "da_lat",
      "name": "Đà Lạt",
      "area": "Lâm Đồng",
      "image": "images/da_lat_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Tên gọi Đà Lạt:</b> Đà Lạt, còn được gọi là “Thành phố ngàn hoa”, là một thành phố nằm ở vùng cao nguyên của tỉnh Lâm Đồng, miền Trung Việt Nam. Đà Lạt có tên gọi bắt nguồn từ từ "Đạ Lạt" trong tiếng của người Churu, có nghĩa là “suối lớn”.</p>
    
            <p><b>Khám phá Đà Lạt:</b> Thành phố Đà Lạt được phát hiện và khai thác vào cuối thế kỷ 19, khi người Pháp tìm thấy nơi đây như một khu nghỉ dưỡng mát mẻ. Với khí hậu ôn hòa, mát mẻ quanh năm, Đà Lạt trở thành điểm đến lý tưởng cho người Pháp thời đó.</p>
    
            <p><b>Sự phát triển và hiện đại hóa:</b> Sau khi đất nước được thống nhất, Đà Lạt trở thành một trong những điểm du lịch quan trọng của Việt Nam. Nơi đây không chỉ thu hút du khách trong nước mà còn là địa điểm hấp dẫn với khách du lịch quốc tế.</p>
    
            <p><b>Vị trí địa lý:</b> Nằm ở độ cao 1.500m so với mực nước biển, Đà Lạt có khí hậu mát mẻ quanh năm, là điểm đến lý tưởng để tránh cái nóng oi ả của các vùng thấp khác của Việt Nam.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Hồ Xuân Hương:</b> Hồ Xuân Hương là một trong những biểu tượng của Đà Lạt, nơi du khách có thể thưởng thức không gian thơ mộng, lãng mạn. Hồ nằm ngay trung tâm thành phố và là nơi tuyệt vời để tản bộ hoặc thưởng thức cà phê bên bờ hồ.</p>
    
            <p><b>Thác Datanla:</b> Thác Datanla nổi tiếng với vẻ đẹp hoang sơ và là một trong những thác nước lớn ở Đà Lạt. Du khách có thể tham gia các hoạt động như leo núi, trượt thác, và khám phá hệ sinh thái phong phú quanh thác.</p>
    
            <p><b>Vườn hoa Đà Lạt:</b> Đà Lạt nổi tiếng với những vườn hoa xinh đẹp, đặc biệt là vào mùa xuân, khi các loài hoa như hoa hồng, hoa cẩm tú cầu, hoa lavender... đua nhau nở rộ. Các khu vườn hoa như <b>Vườn hoa thành phố</b>, <b>Thung lũng Tình Yêu</b> hay <b>Vườn hoa Đà Lạt</b> là những điểm đến không thể bỏ qua.</p>
    
            <p><b>Đồi Mộng Mơ:</b> Đồi Mộng Mơ là nơi lý tưởng để ngắm nhìn toàn cảnh thành phố Đà Lạt từ trên cao. Đến đây, du khách có thể thưởng thức không gian tươi mát và tận hưởng những khoảnh khắc yên bình, thư giãn.</p>
    
            <p><b>Đồi chè Cầu Đất:</b> Nằm cách trung tâm thành phố khoảng 20km, đồi chè Cầu Đất là một địa điểm lý tưởng cho những ai yêu thích sự yên tĩnh và muốn tìm hiểu về nghề trồng chè tại Đà Lạt. Những đồi chè xanh mướt trải dài tạo ra một khung cảnh tuyệt đẹp.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa Tây Nguyên:</b> Đà Lạt là nơi sinh sống của các dân tộc thiểu số Tây Nguyên như người K'ho, Churu, Ma, và Lạch. Những nét văn hóa truyền thống của họ được bảo tồn và phát huy trong các lễ hội, trang phục và tập quán.</p>
    
            <p><b>Lễ hội hoa Đà Lạt:</b> Lễ hội hoa Đà Lạt được tổ chức mỗi năm vào dịp Tết Nguyên Đán hoặc vào tháng 12, là dịp để những người yêu hoa khắp nơi về Đà Lạt tham gia các hoạt động như diễu hành hoa, triển lãm hoa, và thưởng thức các loài hoa đặc trưng của thành phố.</p>
    
            <p><b>Lễ hội cồng chiêng:</b> Đà Lạt cũng là nơi tổ chức nhiều lễ hội truyền thống của các dân tộc Tây Nguyên, trong đó có lễ hội cồng chiêng, nơi du khách có thể thưởng thức âm thanh huyền bí của những bộ cồng chiêng truyền thống của người dân bản địa.</p>
    
            <p><b>Ẩm thực Đà Lạt:</b> Đà Lạt không chỉ nổi tiếng về cảnh đẹp mà còn là nơi có nhiều món ăn đặc sản hấp dẫn. Du khách có thể thưởng thức các món ăn như <b>lẩu bò</b>, <b>mì Quảng</b>, <b>bánh căn</b>, <b>chè bà Ba</b>, và đặc biệt là các loại trái cây tươi như dâu tây, táo, và mận Đà Lạt.</p>
    
            <p><b>Chợ Đà Lạt:</b> Chợ Đà Lạt là một trong những điểm tham quan nổi tiếng, nơi bày bán các sản phẩm đặc sản của Đà Lạt như trái cây, rau củ, đồ thủ công mỹ nghệ và đặc sản từ các dân tộc bản địa.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Lẩu bò Đà Lạt:</b> Lẩu bò là một món ăn phổ biến ở Đà Lạt, với nước dùng thơm ngon, đậm đà từ xương bò, ăn kèm với rau sống và các loại gia vị đặc trưng của vùng cao nguyên.</p>
    
            <p><b>Bánh Căn:</b> Một món ăn vặt đặc sản của Đà Lạt, bánh căn được làm từ bột gạo, chiên giòn và ăn kèm với các loại nhân như trứng, tôm, thịt.</p>
    
            <p><b>Chè Bà Ba:</b> Món chè đặc trưng của Đà Lạt, chè Bà Ba có vị ngọt thanh, được nấu từ các nguyên liệu như đậu xanh, bột báng, dừa, và nước cốt dừa.</p>
    
            <p><b>Trái cây Đà Lạt:</b> Đà Lạt nổi tiếng với các loại trái cây tươi ngon, như dâu tây, mận, táo, và cam. Những loại trái cây này không chỉ tươi ngon mà còn có hương vị đặc biệt, được trồng ở các vườn trái cây trên cao nguyên.</p>
    
            <p><b>Bánh mì xíu mại:</b> Đây là món ăn sáng phổ biến ở Đà Lạt, bánh mì được ăn kèm với xíu mại (chả viên), rau sống và nước sốt đặc biệt, tạo nên hương vị thơm ngon và đầy đủ chất dinh dưỡng.</p>
    
            <p><b>Cà phê Đà Lạt:</b> Đà Lạt cũng nổi tiếng với các quán cà phê đẹp, nơi du khách có thể thưởng thức cà phê nguyên chất từ những hạt cà phê nổi tiếng của Đà Lạt, được chế biến tại chỗ.</p>
          `
        }
      ]
    },
    {
      "id": "hue",
      "name": "Huế",
      "area": "Thừa Thiên Huế",
      "image": "images/hue_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Tên gọi Huế:</b> Huế là thủ đô cũ của Việt Nam dưới triều đại nhà Nguyễn, từ năm 1802 đến 1945. Thành phố này mang đậm dấu ấn lịch sử và văn hóa của một triều đại hoàng gia, với các công trình kiến trúc cổ kính và nền văn hóa phong phú.</p>
    
            <p><b>Thủ đô của triều đại nhà Nguyễn:</b> Huế trở thành thủ đô của Việt Nam dưới triều đại nhà Nguyễn và là nơi các vị vua trị vì. Với hệ thống cung điện, đền đài, và các công trình kiến trúc hoàng gia, Huế giữ vai trò quan trọng trong lịch sử và văn hóa Việt Nam.</p>
    
            <p><b>Sự phát triển qua các thời kỳ:</b> Mặc dù đã trải qua những thăng trầm trong lịch sử, Huế vẫn giữ được nhiều giá trị truyền thống. Sau khi đất nước thống nhất, Huế trở thành một điểm du lịch nổi tiếng, thu hút khách tham quan trong và ngoài nước.</p>
    
            <p><b>Vị trí địa lý:</b> Huế nằm ở miền Trung Việt Nam, bên bờ sông Hương, và được bao quanh bởi những ngọn núi xanh tươi. Thành phố này có khí hậu nhiệt đới gió mùa, với mùa hè nóng ẩm và mùa đông mát mẻ, dễ chịu.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Sông Hương:</b> Sông Hương là một trong những biểu tượng của Huế. Dòng sông chảy uốn lượn qua thành phố, với phong cảnh thơ mộng và những cây cầu cổ kính. Du khách có thể tham gia chuyến du thuyền trên sông Hương để chiêm ngưỡng vẻ đẹp của Huế từ góc nhìn đặc biệt.</p>
    
            <p><b>Vịnh Lăng Cô:</b> Cách thành phố Huế khoảng 30km, Vịnh Lăng Cô nổi bật với bãi biển dài, cát trắng mịn màng và làn nước trong xanh. Đây là điểm đến lý tưởng cho những ai muốn thư giãn và tận hưởng không gian yên tĩnh.</p>
    
            <p><b>Đồi Thiên An:</b> Đồi Thiên An nằm cách trung tâm thành phố khoảng 10km, là nơi lý tưởng để ngắm nhìn toàn cảnh thành phố Huế. Từ đỉnh đồi, du khách có thể phóng tầm mắt ra xa, thấy được những ngọn núi bao quanh và dòng sông Hương êm đềm.</p>
    
            <p><b>Phong Nha-Kẻ Bàng:</b> Mặc dù nằm xa thành phố Huế, nhưng công viên quốc gia Phong Nha-Kẻ Bàng là một trong những địa điểm nổi bật ở khu vực này, nổi tiếng với các hệ thống hang động kỳ vĩ và thiên nhiên hoang sơ.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Di sản văn hóa UNESCO:</b> Huế được UNESCO công nhận là Di sản Văn hóa Thế giới nhờ vào các công trình kiến trúc cổ kính như <b>Hoàng Thành Huế</b>, <b>lăng tẩm các vua Nguyễn</b>, và các đền đài lớn của triều đại nhà Nguyễn.</p>
    
            <p><b>Trang phục áo dài:</b> Huế là nơi áo dài truyền thống của Việt Nam được phát triển mạnh mẽ, đặc biệt là trong các dịp lễ hội và sự kiện trọng đại. Thành phố cũng nổi tiếng với những chiếc áo dài tinh xảo, màu sắc nhẹ nhàng, thanh thoát.</p>
    
            <p><b>Lễ hội Huế:</b> Lễ hội Huế là sự kiện văn hóa lớn của thành phố, diễn ra hàng năm với nhiều hoạt động như diễu hành, ca múa nhạc truyền thống, và các trò chơi dân gian. Lễ hội này không chỉ là dịp để tôn vinh văn hóa Huế mà còn là nơi giao lưu giữa các nền văn hóa khác nhau.</p>
    
            <p><b>Ẩm thực Huế:</b> Huế nổi tiếng với những món ăn đặc trưng như <b>bánh bèo</b>, <b>bánh nậm</b>, <b>bánh cuốn</b>, và <b>bánh khoái</b>, đặc biệt là các món ăn cung đình, mang đậm hương vị tinh tế và cầu kỳ.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Bánh bèo:</b> Bánh bèo Huế là một món ăn đặc sản được làm từ bột gạo, có hình tròn, mỏng, ăn kèm với tôm, mỡ hành, và nước mắm chua ngọt. Đây là món ăn không thể thiếu khi đến Huế.</p>
    
            <p><b>Bánh nậm:</b> Bánh nậm là loại bánh gói lá, làm từ bột gạo, nhân tôm và thịt. Bánh được hấp lên và ăn kèm với nước mắm pha chua ngọt, tạo nên hương vị đậm đà.</p>
    
            <p><b>Bánh khoái:</b> Bánh khoái là món bánh chiên giòn, bên trong có nhân tôm, thịt, và giá, được ăn kèm với rau sống và nước mắm chấm đặc biệt. Đây là món ăn phổ biến trong các bữa tiệc hoặc dịp lễ hội tại Huế.</p>
    
            <p><b>Chè Huế:</b> Chè Huế có nhiều loại khác nhau, từ chè đậu xanh, chè bột báng, đến chè hạt sen. Các loại chè này thường có vị ngọt thanh, dễ ăn và rất phù hợp cho những ai yêu thích đồ ngọt.</p>
    
            <p><b>Nem lụi:</b> Nem lụi Huế có hương vị đặc trưng, được làm từ thịt heo xay, ướp gia vị, sau đó xiên vào que tre và nướng trên than. Nem lụi ăn kèm với bánh tráng, rau sống và nước mắm pha chua ngọt, là món ăn phổ biến trong ẩm thực Huế.</p>
          `
        }
      ]
    },
    {
      id: "buon_me_thuot",
      name: "Buôn Mê Thuột",
      area: "Đắk Lắk",
      image: "images/buon_me_thuot_1.jpg",
      descriptions: [
        {
          title: "Lịch sử",
          content: `Buôn Ma Thuột, nằm ở tỉnh Đắk Lắk, Tây Nguyên, có một lịch sử đặc biệt và là trung tâm văn hóa, chính trị quan trọng của vùng. Dưới đây là một số điểm nổi bật về lịch sử của Buôn Ma Thuột:
  
          <p><b>Tên gọi Buôn Ma Thuột:</b> Buôn Ma Thuột được đặt tên theo tên gọi truyền thống của cộng đồng dân tộc Ê Đê. "Buôn" có nghĩa là làng, còn "Ma Thuột" là tên của một dòng suối, mang đặc trưng văn hóa của người dân nơi đây. Buôn Ma Thuột là thủ phủ của tỉnh Đắk Lắk và cũng là một trong những thành phố lớn nhất của Tây Nguyên.</p>
          
          <p><b>Sự phát triển lịch sử:</b> Vùng đất Buôn Ma Thuột đã có lịch sử lâu dài với sự sinh sống của nhiều dân tộc bản địa như Ê Đê, M'nông, Ba Na, và các dân tộc khác. Lịch sử của Buôn Ma Thuột gắn liền với sự phát triển của các cộng đồng dân tộc thiểu số trong khu vực Tây Nguyên. Buôn Ma Thuột không chỉ là nơi sinh sống của người dân địa phương mà còn là một trung tâm giao lưu văn hóa, thương mại.</p>
  
          <p><b>Thời kỳ chiến tranh:</b> Trong giai đoạn chiến tranh Việt Nam, Buôn Ma Thuột trở thành một điểm chiến lược quan trọng. Vào ngày 10 tháng 3 năm 1975, trong chiến dịch Tây Nguyên, Quân đội Nhân dân Việt Nam đã thực hiện cuộc tấn công vào Buôn Ma Thuột, dẫn đến sự sụp đổ của các lực lượng quân đội miền Nam Việt Nam tại khu vực Tây Nguyên. Chiến thắng này là một bước ngoặt quan trọng trong chiến dịch Hồ Chí Minh, đưa đến sự giải phóng hoàn toàn miền Nam và thống nhất đất nước.</p>
  
          <p><b>Thành phố phát triển:</b> Sau chiến tranh, Buôn Ma Thuột dần phát triển và trở thành một trong những thành phố quan trọng của khu vực Tây Nguyên, với nền kinh tế chủ yếu dựa vào nông nghiệp, đặc biệt là cà phê, một trong những sản phẩm xuất khẩu chủ lực của Việt Nam. Ngoài ra, Buôn Ma Thuột cũng nổi bật với các nền văn hóa phong phú của các dân tộc thiểu số.</p>
  
          <p><b>Văn hóa Tây Nguyên:</b> Buôn Ma Thuột là nơi bảo tồn nhiều giá trị văn hóa đặc trưng của các dân tộc Tây Nguyên. Những lễ hội truyền thống, điệu múa cồng chiêng, và những phong tục tập quán của người Ê Đê, M’nông, Ba Na đã góp phần làm phong phú thêm lịch sử văn hóa của Buôn Ma Thuột. Thành phố này cũng nổi bật với các buôn làng truyền thống và các nghề thủ công như dệt thổ cẩm, chế tác đồ gỗ và sản xuất nông sản.</p>
  
          <p><b>Buôn Ma Thuột hiện nay:</b> Buôn Ma Thuột hiện nay không chỉ là một điểm du lịch hấp dẫn mà còn là nơi giữ gìn và phát huy các giá trị văn hóa độc đáo của khu vực Tây Nguyên.</p>`
        },
        {
          title: "Cảnh quan thiên nhiên",
          content: `
          <b>Rừng Tây Nguyên và Thác nước:</b> Buôn Ma Thuột nằm trong khu vực Tây Nguyên, nổi tiếng với những khu rừng nguyên sinh bao la, là nơi sinh sống của nhiều loại động thực vật quý hiếm. Các khu rừng này tạo nên một cảnh quan thiên nhiên đặc sắc với những đồi núi hùng vĩ, bạt ngàn cây cối xanh tươi. Ngoài ra, khu vực xung quanh Buôn Ma Thuột còn có rất nhiều thác nước đẹp như:
          <ul>
            <li><b>Thác Dray Nur:</b> Đây là một trong những thác nước nổi tiếng nhất của Tây Nguyên, với nước đổ xuống từ độ cao 30m, tạo nên một cảnh tượng hùng vĩ và ấn tượng.</li>
            <li><b>Thác Dray Sap:</b> Thác này cách Buôn Ma Thuột khoảng 30 km, là một thác lớn với nước chảy mạnh mẽ, tạo ra một không gian đầy ma mị và ấn tượng.</li>
            <li><b>Thác Gia Long:</b> Nằm gần hồ Lak, thác Gia Long cũng là một điểm đến hấp dẫn cho du khách yêu thích thiên nhiên.</li>
          </ul>

          <p><b>Hồ Lak:</b> Hồ Lak là một trong những hồ lớn và đẹp nhất ở Tây Nguyên, cách Buôn Ma Thuột khoảng 50 km về phía Nam. Hồ Lak nổi tiếng với vẻ đẹp yên bình, mặt nước phẳng lặng như gương, phản chiếu cảnh vật xung quanh. Du khách có thể tham gia các hoạt động như đi thuyền trên hồ, khám phá văn hóa của các buôn làng dân tộc Ê Đê bên hồ, hoặc leo núi để ngắm toàn cảnh hồ.</p>

          <p><b>Vườn Quốc Gia Yok Đôn:</b> Vườn quốc gia Yok Đôn nằm cách Buôn Ma Thuột khoảng 40 km về phía Tây Nam. Đây là một trong những khu bảo tồn thiên nhiên lớn nhất ở Việt Nam, nổi bật với hệ sinh thái rừng khô nhiệt đới, là nơi cư trú của nhiều loài động vật hoang dã như voi, hổ, gấu, và nhiều loài chim quý hiếm. Với không gian rừng rậm và khí hậu trong lành, Yok Đôn là điểm đến lý tưởng cho những ai yêu thích khám phá thiên nhiên hoang dã.</p>

          <p><b>Cà phê và những đồn điền cà phê:</b> Buôn Ma Thuột còn nổi tiếng với các đồn điền cà phê bạt ngàn, với những vườn cà phê xanh mướt, kéo dài tít tắp ra xa. Cảnh quan này là đặc trưng nổi bật của vùng đất Tây Nguyên, nơi đây cũng là nơi sản xuất cà phê lớn nhất Việt Nam. Du khách có thể tham quan các vườn cà phê, tìm hiểu quy trình trồng và chế biến cà phê, đồng thời thưởng thức cà phê trực tiếp từ những người nông dân nơi đây.</p>

          <p><b>Đồng cỏ và đồi núi:</b> Khi đến Buôn Ma Thuột, du khách còn được chiêm ngưỡng những đồi cỏ xanh mướt, trải dài tít tắp. Những đồi núi phủ xanh sắc màu của cây cối, hoa lá và sự đa dạng của động thực vật đã tạo nên một bức tranh thiên nhiên vô cùng tươi đẹp và hùng vĩ. Các buôn làng truyền thống của dân tộc Ê Đê cũng nằm ẩn mình trong các đồi núi này, tạo nên sự hòa quyện giữa con người và thiên nhiên.</p>

          <p><b>Khí hậu mát mẻ:</b> Khí hậu của Buôn Ma Thuột khá dễ chịu, mát mẻ quanh năm với nhiệt độ trung bình từ 20 đến 25°C. Chính điều này đã tạo nên một cảnh quan thiên nhiên rất dễ chịu và lý tưởng cho các hoạt động tham quan, khám phá, đặc biệt là vào mùa khô khi các cảnh quan thiên nhiên của Buôn Ma Thuột trở nên sống động hơn bao giờ hết.
        `
    
        },
        {
          title: "Văn hóa",
          content: `
          <b>Văn hóa Tây Nguyên và các dân tộc thiểu số:</b> Buôn Ma Thuột là trung tâm văn hóa đặc sắc của khu vực Tây Nguyên, nơi sinh sống của nhiều dân tộc thiểu số như Ê Đê, M'nông, Ba Na, và các dân tộc khác. Những phong tục, tập quán, lễ hội và nhạc cụ truyền thống của các dân tộc này đã góp phần làm phong phú thêm nền văn hóa của Buôn Ma Thuột.</p>
          
          <p><b>Lễ hội cồng chiêng:</b> Cồng chiêng là một phần không thể thiếu trong đời sống văn hóa của người dân Tây Nguyên. Mỗi dân tộc ở Buôn Ma Thuột đều có những bộ cồng chiêng riêng, được dùng trong các lễ hội, nghi lễ tôn thờ thần linh, hoặc chúc mừng những sự kiện trọng đại trong đời sống cộng đồng. Lễ hội cồng chiêng là sự hòa quyện của âm nhạc, múa và những nghi thức tôn vinh truyền thống, mang lại không khí vui tươi và sự gắn kết trong cộng đồng.</p>

          <p><b>Trang phục truyền thống:</b> Người dân Tây Nguyên, đặc biệt là dân tộc Ê Đê, M'nông, Ba Na, vẫn giữ gìn được những trang phục truyền thống. Những bộ đồ thổ cẩm, được dệt thủ công từ sợi bông, nhuộm màu tự nhiên, mang đậm dấu ấn văn hóa của các dân tộc thiểu số. Trang phục truyền thống không chỉ đẹp mắt mà còn chứa đựng những giá trị văn hóa, mang ý nghĩa về sự đoàn kết, sự tôn kính và sự yêu thương của cộng đồng.</p>

          <p><b>Những buôn làng truyền thống:</b> Các buôn làng Ê Đê là một phần không thể thiếu trong văn hóa Buôn Ma Thuột. Những ngôi nhà sàn, những khuôn viên rợp bóng cây và những vườn cà phê nối dài là những đặc trưng dễ nhận thấy của các buôn làng nơi đây. Người dân trong các buôn làng sinh sống theo hình thức cộng đồng, cùng nhau làm nông nghiệp, chăn nuôi và giữ gìn những nét văn hóa riêng biệt của dân tộc mình.</p>

          <p><b>Ẩm thực truyền thống:</b> Văn hóa ẩm thực của Buôn Ma Thuột cũng phản ánh sự đa dạng và độc đáo của các dân tộc thiểu số tại đây. Các món ăn đặc trưng của Tây Nguyên như cơm lam, gà nướng, canh lá lốt, và đặc biệt là các món ăn chế biến từ thịt rừng như thịt nai, thịt heo rừng, đều là những món ăn ngon, hấp dẫn mà du khách không thể bỏ qua.</p>

          <p><b>Người dân Buôn Ma Thuột:</b> Người dân Buôn Ma Thuột được biết đến là những người hiếu khách và chân thành. Họ luôn sẵn lòng chia sẻ về đời sống văn hóa của mình, cũng như những câu chuyện thú vị về các lễ hội, truyền thống và đời sống của người dân Tây Nguyên.
        `
        },
        {
          title: "Ẩm thực",
          content: `
          <b>Ẩm thực Tây Nguyên và Buôn Ma Thuột:</b> Buôn Ma Thuột nổi tiếng với ẩm thực đặc trưng của khu vực Tây Nguyên, nơi có sự hòa quyện giữa các món ăn dân dã và các món ăn phong phú từ các nguyên liệu đặc sản địa phương.</p>

          <p><b>Cơm lam:</b> Cơm lam là món ăn nổi tiếng và đặc trưng của Tây Nguyên. Cơm được nấu trong ống tre, tạo ra một hương vị thơm ngon, đặc biệt. Cơm lam thường được ăn kèm với thịt nướng, rau sống hoặc cá suối.</p>

          <p><b>Gà nướng Buôn Ma Thuột:</b> Gà nướng là món ăn không thể thiếu trong các bữa tiệc của người dân Buôn Ma Thuột. Gà được tẩm ướp gia vị và nướng trên lửa than, mang đến hương vị thơm ngon, đậm đà. Đây là món ăn được yêu thích trong các buổi tụ tập gia đình hoặc lễ hội.</p>

          <p><b>Canh lá lốt:</b> Đây là một món ăn giản dị nhưng rất đặc trưng của vùng Tây Nguyên. Canh lá lốt thường được nấu với các loại thịt như thịt gà hoặc thịt lợn, tạo nên một món ăn thơm ngon, bổ dưỡng.</p>

          <p><b>Cà phê Buôn Ma Thuột:</b> Buôn Ma Thuột là thủ phủ cà phê của Việt Nam, và cà phê nơi đây được biết đến với hương vị đặc biệt, đậm đà. Cà phê được chế biến theo nhiều cách khác nhau, từ cà phê phin truyền thống đến các món cà phê sữa đá nổi tiếng. Du khách đến Buôn Ma Thuột không thể bỏ qua việc thưởng thức một ly cà phê tại các quán cà phê địa phương.</p>

          <p><b>Thịt rừng:</b> Buôn Ma Thuột và khu vực Tây Nguyên còn nổi tiếng với các món ăn từ thịt rừng như thịt nai, thịt heo rừng, hay các loài động vật hoang dã khác. Những món ăn này không chỉ có hương vị đặc biệt mà còn phản ánh sự gắn bó của người dân với thiên nhiên và sự phong phú của nguồn tài nguyên tự nhiên trong khu vực.</p>

          <p><b>Rượu cần:</b> Rượu cần là thức uống truyền thống của các dân tộc Tây Nguyên, đặc biệt là người Ê Đê. Rượu được nấu từ gạo nếp hoặc ngô, lên men tự nhiên và được uống trong các buổi lễ hội hoặc tụ họp cộng đồng. Rượu cần có hương vị nồng, dễ gây say, và thường được uống trong những chiếc vò hoặc bầu, được chuyền tay nhau trong các buổi tiệc.</p>

          <p><b>Đặc sản vùng cao:</b> Ngoài những món ăn chính, Buôn Ma Thuột còn nổi tiếng với các món ăn nhẹ như bánh mì nướng, bánh pía, hoặc các loại trái cây nhiệt đới như sầu riêng, măng cụt, bơ...
        `
        }
      ]
    }
  ];
  
  const locationsB = [
    {
      "id": "ha_noi",
      "name": "Hà Nội",
      "area": "Hà Nội",
      "image": "images/ha_noi_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Hà Nội - Thủ đô ngàn năm văn hiến:</b> Hà Nội là thủ đô của Việt Nam, với lịch sử hơn 1000 năm, là trung tâm chính trị, văn hóa, giáo dục, và du lịch của đất nước. Thành phố này còn nổi tiếng với các di tích lịch sử như Văn Miếu, Chùa Một Cột, Hoàng Thành Thăng Long.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Hồ Hoàn Kiếm:</b> Hồ Hoàn Kiếm là trung tâm của Hà Nội, nổi tiếng với cầu Thê Húc, đền Ngọc Sơn. Đây là nơi không thể thiếu khi tham quan thủ đô.</p>
    
            <p><b>Công viên Bách Thảo:</b> Công viên Bách Thảo là khu vực lý tưởng để thư giãn, với không gian xanh mát và đa dạng các loài cây cối.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa Hà Nội:</b> Hà Nội mang đậm dấu ấn của văn hóa truyền thống với các lễ hội đặc sắc như lễ hội Chùa Hương, lễ hội đền Ngọc Sơn. Hà Nội cũng là nơi hội tụ của các loại hình nghệ thuật như múa rối nước, ca trù.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Phở Hà Nội:</b> Phở là món ăn nổi tiếng của Hà Nội, với hương vị thanh đạm của nước dùng, thịt bò hoặc gà, và các loại gia vị.</p>
    
            <p><b>Bánh cuốn:</b> Bánh cuốn Hà Nội là món ăn sáng phổ biến, với bánh mềm mịn, nhân thịt và ăn kèm với nước mắm chua ngọt.</p>
          `
        }
      ]
    },
    {
      "id": "sapa",
      "name": "Sapa",
      "area": "Lào Cai",
      "image": "images/sapa_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Sapa - Nơi gặp gỡ các nền văn hóa:</b> Sapa nằm ở phía Tây Bắc của Việt Nam, nổi tiếng với vẻ đẹp hùng vĩ của núi rừng, các bản làng dân tộc thiểu số, và khí hậu mát mẻ quanh năm.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Núi Fansipan:</b> Fansipan, được mệnh danh là "Nóc nhà Đông Dương", là ngọn núi cao nhất trong khu vực Đông Nam Á với độ cao 3.143m. Đây là địa điểm lý tưởng cho những ai yêu thích trekking.</p>
    
            <p><b>Thung lũng Mường Hoa:</b> Thung lũng Mường Hoa nổi bật với những ruộng bậc thang xanh mướt và các bản làng dân tộc H'Mông, Dao, Tày.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa dân tộc:</b> Sapa là nơi sinh sống của nhiều dân tộc thiểu số như H'Mông, Dao, Tày. Văn hóa của họ thể hiện rõ nét qua các trang phục truyền thống, các lễ hội, và các nghề thủ công.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Thắng cố Sapa:</b> Thắng cố là món ăn đặc trưng của người H'Mông, được làm từ thịt ngựa hoặc thịt bò, nấu với gia vị đặc trưng của dân tộc.</p>
    
            <p><b>Gà nướng Sapa:</b> Gà nướng Sapa có thịt thơm, chắc, được tẩm ướp gia vị đặc biệt, nướng trên bếp than hồng, mang đến hương vị độc đáo.</p>
          `
        }
      ]
    },  
    {
      "id": "vinh_ha_long",
      "name": "Vịnh Hạ Long",
      "area": "Quảng Ninh",
      "image": "images/vinh_ha_long_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Vịnh Hạ Long - Di sản thiên nhiên thế giới:</b> Vịnh Hạ Long nằm ở phía Bắc Việt Nam, nổi tiếng với những dãy núi đá vôi kỳ vĩ và là một trong những kỳ quan thiên nhiên của thế giới. Vịnh Hạ Long đã được UNESCO công nhận là Di sản Thiên nhiên Thế giới vào năm 1994.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Đảo Ti Tốp:</b> Đảo Ti Tốp nổi tiếng với bãi biển hoang sơ và phong cảnh hữu tình. Du khách có thể leo lên đỉnh đảo để ngắm toàn cảnh vịnh Hạ Long.</p>
    
            <p><b>Hang Sửng Sốt:</b> Hang Sửng Sốt là một trong những hang động đẹp nhất trong Vịnh Hạ Long, với những nhũ đá kỳ ảo và những khối đá vôi khổng lồ.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa Hạ Long:</b> Văn hóa của người dân Vịnh Hạ Long được thể hiện qua các hoạt động đánh bắt hải sản truyền thống và các nghề thủ công như làm lồng bè, đan thuyền, và nuôi trồng thủy sản.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Hào nướng mỡ hành:</b> Hào nướng mỡ hành là món ăn đặc sản của Hạ Long, với hương vị tươi ngon của hào được nướng trên than hồng và ăn kèm với mỡ hành thơm lừng.</p>
    
            <p><b>Cá song:</b> Cá song là món ăn nổi tiếng ở Hạ Long, được chế biến thành nhiều món như cá song nướng, cá song hấp, với thịt ngọt, chắc.</p>
          `
        }
      ]
    },
    {
      "id": "dao_cat_ba",
      "name": "Đảo Cát Bà",
      "area": "Hải Phòng",
      "image": "images/dao_cat_ba_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Đảo Cát Bà:</b> Đảo Cát Bà nằm ở phía Nam của Vịnh Hạ Long, nổi tiếng với cảnh quan thiên nhiên hoang sơ và bãi biển đẹp. Đây là một trong những điểm đến hấp dẫn của miền Bắc Việt Nam.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Vườn quốc gia Cát Bà:</b> Vườn quốc gia Cát Bà là nơi bảo tồn đa dạng sinh học với nhiều loài động thực vật quý hiếm. Đây là điểm đến lý tưởng cho những ai yêu thích khám phá thiên nhiên.</p>
    
            <p><b>Bãi Cát Cò:</b> Bãi Cát Cò là bãi biển đẹp nhất của đảo Cát Bà, với cát trắng mịn và làn nước trong xanh, thích hợp cho các hoạt động tắm biển và thể thao nước.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa biển đảo:</b> Người dân Cát Bà chủ yếu sống bằng nghề đánh bắt hải sản. Văn hóa biển đảo của họ được thể hiện qua các lễ hội và hoạt động sinh hoạt cộng đồng.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Chả cá Cát Bà:</b> Chả cá Cát Bà là món ăn nổi tiếng được làm từ cá tươi, chế biến thành các món chiên, nướng hoặc hấp, có hương vị đặc biệt của vùng biển này.</p>
    
            <p><b>Sò Lông:</b> Sò Lông là đặc sản nổi tiếng ở Cát Bà, được chế biến thành các món nướng hoặc hấp, mang lại hương vị tươi ngon, đậm đà.</p>
          `
        }
      ]
    },    
    {
      "id": "dao_co_to",
      "name": "Đảo Cô Tô",
      "area": "Quảng Ninh",
      "image": "images/dao_co_to_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Đảo Cô Tô:</b> Đảo Cô Tô là một hòn đảo thuộc tỉnh Quảng Ninh, nổi bật với vẻ đẹp hoang sơ và những bãi biển sạch sẽ, là điểm đến lý tưởng cho những ai yêu thích thiên nhiên và sự yên tĩnh.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Bãi biển Cô Tô:</b> Cô Tô có những bãi biển đẹp như Bãi Vàn Chảy, Bãi Soi, với làn nước trong vắt và bãi cát trắng mịn, là nơi lý tưởng để tắm biển và tham gia các hoạt động thể thao nước.</p>
    
            <p><b>Đền Cô Tô:</b> Đền Cô Tô là một di tích lịch sử văn hóa nổi tiếng, là nơi thờ các vị thần bảo vệ biển đảo.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa Cô Tô:</b> Văn hóa của người dân Cô Tô chủ yếu gắn liền với nghề đánh bắt hải sản, những nét đặc trưng của đảo đều thể hiện trong các lễ hội và truyền thống sinh hoạt của người dân.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Cá thu nướng:</b> Cá thu nướng là món ăn đặc sản của đảo Cô Tô, với hương vị tươi ngon, thịt cá mềm và ngọt, thường được ăn kèm với cơm hoặc bún.</p>
    
            <p><b>Sò huyết:</b> Sò huyết ở Cô Tô có hương vị đặc biệt, được chế biến thành các món nướng, hấp hoặc xào tỏi, rất ngon và bổ dưỡng.</p>
          `
        }
      ]
    },
    {
      "id": "thac_ban_gioc",
      "name": "Thác Bản Giốc",
      "area": "Cao Bằng",
      "image": "images/thac_ban_gioc_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Thác Bản Giốc:</b> Thác Bản Giốc là thác nước lớn nhất và đẹp nhất Việt Nam, nằm trên dòng sông Quây Sơn ở Cao Bằng, với cảnh quan hoang sơ và tuyệt đẹp. Thác Bản Giốc là một trong những thác nước nổi tiếng nhất Đông Nam Á.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Thác nước hùng vĩ:</b> Thác Bản Giốc có ba tầng, với dòng nước trắng xóa đổ xuống từ độ cao khoảng 30m. Đây là một trong những thác nước lớn nhất và đẹp nhất Việt Nam, được bao quanh bởi cảnh quan thiên nhiên hoang sơ và tươi đẹp.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa vùng cao:</b> Dân cư quanh thác chủ yếu là các dân tộc Tày, H'mông, Nùng, mỗi dân tộc có những phong tục, tập quán và bản sắc văn hóa đặc trưng.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Gà nướng Bản Giốc:</b> Gà nướng Bản Giốc là món ăn đặc sản của Cao Bằng, gà được nướng trên bếp than hồng, có thịt thơm, mềm, ăn kèm với cơm nếp.</p>
    
            <p><b>Rượu ngô Cao Bằng:</b> Rượu ngô Cao Bằng là đặc sản của vùng cao, có vị ngọt thanh, thường được dùng trong các dịp lễ hội và tiệc tùng.</p>
          `
        }
      ]
    },
    {
      "id": "ba_vi",
      "name": "Ba Vì",
      "area": "Hà Nội",
      "image": "images/ba_vi_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Ba Vì - Núi non hùng vĩ:</b> Ba Vì là một khu du lịch nổi tiếng của Hà Nội, nằm cách trung tâm thành phố khoảng 60km về phía Tây. Ba Vì nổi bật với khí hậu mát mẻ, thảm thực vật phong phú và các di tích lịch sử.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Núi Ba Vì:</b> Núi Ba Vì cao 1.296m, nổi tiếng với các đỉnh núi cao, thảm rừng nguyên sinh và không khí trong lành. Đây là nơi lý tưởng để trekking và tham quan.</p>
    
            <p><b>Vườn quốc gia Ba Vì:</b> Vườn quốc gia Ba Vì là một trong những khu bảo tồn thiên nhiên quan trọng, nơi sinh sống của nhiều loài động thực vật quý hiếm.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa Ba Vì:</b> Ba Vì gắn liền với những câu chuyện lịch sử và văn hóa của người dân vùng núi. Ngoài ra, Ba Vì còn là nơi lưu giữ các công trình lịch sử như đền thờ Ba Vì.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Gà đồi Ba Vì:</b> Gà đồi Ba Vì nổi tiếng với thịt chắc và ngọt, được chế biến thành nhiều món ngon như gà nướng, gà luộc, gà xào sả ớt.</p>
    
            <p><b>Măng rừng Ba Vì:</b> Măng rừng Ba Vì là đặc sản, được chế biến thành các món ăn ngon như măng xào, măng luộc hoặc măng nhồi thịt.</p>
          `
        }
      ]
    },
    {
      "id": "yentu",
      "name": "Núi Yên Tử",
      "area": "Quảng Ninh",
      "image": "images/yentu_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Núi Yên Tử:</b> Núi Yên Tử là một trong những ngọn núi linh thiêng của Việt Nam, nổi tiếng với chùa Yên Tử, nơi được coi là cái nôi của Phật giáo Trúc Lâm Việt Nam.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Chùa Yên Tử:</b> Chùa Yên Tử nằm trên đỉnh núi, với không gian thanh tịnh, là nơi hành hương của rất nhiều Phật tử. Du khách có thể leo bộ hoặc đi cáp treo để lên đỉnh núi.</p>
    
            <p><b>Cảnh sắc Yên Tử:</b> Đỉnh núi Yên Tử có không khí trong lành và cảnh sắc tuyệt đẹp, bao quanh bởi rừng xanh mướt và làn sương mờ ảo vào buổi sáng sớm.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Phật giáo Trúc Lâm:</b> Yên Tử là nơi khởi nguồn của Thiền phái Trúc Lâm, một dòng thiền có ảnh hưởng sâu rộng trong lịch sử Phật giáo Việt Nam.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Cơm lam Yên Tử:</b> Cơm lam Yên Tử được làm từ gạo nếp, nấu trong ống tre, mang đậm hương vị núi rừng.</p>
    
            <p><b>Gà đồi Yên Tử:</b> Gà đồi Yên Tử nổi tiếng với thịt săn chắc và hương vị thơm ngon, được chế biến thành nhiều món ngon như gà hấp, gà xào sả ớt.</p>
          `
        }
      ]
    },
    {
      "id": "trang_an",
      "name": "Tràng An",
      "area": "Ninh Bình",
      "image": "images/trang_an_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Tràng An - Di sản thiên nhiên thế giới:</b> Tràng An là quần thể danh thắng nổi tiếng của Việt Nam, được UNESCO công nhận là Di sản Thiên nhiên Thế giới. Nơi đây nổi bật với những cảnh quan đá vôi hùng vĩ và hệ thống hang động đẹp mắt.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Vẻ đẹp Tràng An:</b> Tràng An nổi tiếng với cảnh quan đặc sắc, có những dòng sông uốn lượn giữa những ngọn núi đá vôi kỳ vĩ, và các hang động như Hang Sinh, Hang Ba Bể.</p>
    
            <p><b>Chèo thuyền tham quan:</b> Du khách có thể đi thuyền để tham quan các hang động, hòn đảo trong khu vực Tràng An, chiêm ngưỡng vẻ đẹp thiên nhiên hùng vĩ.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa Tràng An:</b> Tràng An là vùng đất chứa đựng nhiều giá trị văn hóa cổ xưa, với các di tích chùa, đền thờ, và các di tích lịch sử từ thời Trần.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Cơm cháy Ninh Bình:</b> Cơm cháy là món đặc sản của Ninh Bình, với cơm giòn rụm ăn kèm với thịt gà, thịt dê, hoặc canh măng, tạo nên hương vị độc đáo.</p>
    
            <p><b>Dê núi Ninh Bình:</b> Dê núi là món ăn nổi tiếng của vùng Tràng An, thịt dê mềm, ngọt, được chế biến thành nhiều món như dê tái chanh, dê xào sả ớt.</p>
          `
        }
      ]
    },               
    {
      "id": "ha_giang",
      "name": "Hà Giang",
      "area": "Hà Giang",
      "image": "images/ha_giang_1.jpg",
      "descriptions": [
        {
          "title": "Lịch sử",
          "content": `
            <p><b>Hà Giang - Vùng đất biên cương:</b> Hà Giang là tỉnh miền núi ở cực Bắc của Việt Nam, nổi bật với cảnh sắc thiên nhiên hùng vĩ và nền văn hóa đa dạng của các dân tộc thiểu số.</p>
          `
        },
        {
          "title": "Cảnh quan thiên nhiên",
          "content": `
            <p><b>Cao nguyên đá Đồng Văn:</b> Cao nguyên đá Đồng Văn là một khu vực độc đáo, nổi tiếng với những dãy núi đá vôi hùng vĩ và những thung lũng xanh mướt. Đây là một trong những điểm đến nổi bật của Hà Giang.</p>
    
            <p><b>Đèo Mã Pí Lèng:</b> Đèo Mã Pí Lèng là một trong những con đèo hiểm trở nhất Việt Nam, với cảnh sắc thiên nhiên tuyệt đẹp và những vách đá dựng đứng.</p>
          `
        },
        {
          "title": "Văn hóa",
          "content": `
            <p><b>Văn hóa dân tộc thiểu số:</b> Hà Giang là nơi sinh sống của nhiều dân tộc thiểu số như H'Mông, Tày, Nùng. Mỗi dân tộc đều có phong tục, trang phục và lễ hội đặc trưng.</p>
          `
        },
        {
          "title": "Ẩm thực",
          "content": `
            <p><b>Thắng cố Hà Giang:</b> Thắng cố là món ăn đặc trưng của người H'Mông, được chế biến từ thịt bò hoặc thịt ngựa, nấu với gia vị đặc trưng.</p>
    
            <p><b>Cháo ấu tẩu:</b> Cháo ấu tẩu là món ăn đặc sản ở Hà Giang, được nấu từ cây ấu tẩu, có tác dụng bổ dưỡng và rất tốt cho sức khỏe.</p>
          `
        }
      ]
    }
    ,
    
  ];
  // Lấy phần tử container
  const cardContainer = document.getElementById("card-container");
  const cardContainerT = document.getElementById("card-container_trung");
  const cardContainerB = document.getElementById("card-container_bac");
  
  // Hàm tạo thẻ card cho các khu vực
  const createCards = (locations, container) => {
  locations.forEach(location => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => {
      // Lưu thông tin địa điểm vào LocalStorage để truyền dữ liệu sang trang chi tiết
      localStorage.setItem("selectedLocation", JSON.stringify(location));
      window.location.href = "detail.html";
    };
    // hiển thị hình ảnh bên in
    const img = document.createElement("img");
    img.src = location.image;
    img.alt = location.name;

    const title = document.createElement("h2");
    title.textContent = location.name;

    const area = document.createElement("p");
    area.textContent = `Tỉnh: ${location.area}`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(area);
    container.appendChild(card);
  });
};

// Tạo các thẻ địa điểm cho mỗi khu vực
  createCards(locations, cardContainer); // Miền Nam
  createCards(locationsT, cardContainerT); // Miền Trung
  createCards(locationsB, cardContainerB); // Miền Bắc


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


  
  const members = [
    {
      id: "le_thanh_tuan",
      name: "Lê Thanh Tuấn",
      region: "Miền Nam",
      description: "Lê Thanh Tuấn là chuyên gia về khu vực miền nam, với 27 năm sinh sống và làm việc tại miền nam, Tuấn sẽ dẫn bạn đi tham quan những khu vực đẹp nhất bạn chọn",
      image: "./images/le_thanh_tuan.jpg"
    },
    {
      id: "tran_xuan_vinh",
      name: "Trần Xuân Vinh",
      region: "Miền Trung",
      description: "Trần Xuân Vinh có kinh nghiệm  về khu vực miền trung, với 28 năm sinh sống và làm việc tại miền Trung, Vinh sẽ dẫn bạn đi tham quan những khu vực đẹp nhất bạn chọn",
      image: "./images/tran_xuan_vinh.jpg"
    },
    {
      id: "bui_ngoc_ninh",
      name: "Bùi Ngọc Ninh",
      region: "Miền Bắc",
      description: "Bùi Ngọc Ninh chuyên môn về khu vực miền bắc, với 26 năm sinh sống và làm việc tại miền bắc, Ninh sẽ dẫn bạn đi tham quan những khu vực đẹp nhất bạn chọn",
      image: "./images/bui_ngoc_ninh.jpg"
    }
  ];
  function saveSelectedMember(memberId) {
    const selectedMember = members.find(member => member.id === memberId);
    
    // Lưu thông tin vào localStorage
    localStorage.setItem("selectedMembers", JSON.stringify(selectedMember));
    
    // Chuyển hướng đến trang chi tiết
    window.location.href = "about.html"; // Đảm bảo tên tệp chính xác
  }
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
