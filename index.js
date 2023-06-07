window.onscroll = function () { myFunciton() }
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunciton() {
    if (window.pageYOffset >= sticky + 100) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

}

// toggle
var button_menu = document.getElementById("menu");
var sidebar = document.getElementById("navbar");
var status_sidebar = false;
button_menu.addEventListener("click", function () {
    if (status_sidebar == true) {
        sidebar.style.transform = "translateX(-100%)";
        status_sidebar = false;

    }
    else {
        sidebar.style.transform = "translateX(0%)";
        status_sidebar = true;


    }
})



var typed = new Typed(".frontend", {
    strings: ["FRONTEND DEVELOPER", "WORDPRESS DEVELOPER"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
})





// Lấy nút cuộn lên đầu trang
var btn = document.getElementById("button");

// Lắng nghe sự kiện scroll trên cửa sổ
window.addEventListener('scroll', function() {
  'use strict';

  // Kiểm tra vị trí cuộn, nếu lớn hơn 1200 thì hiển thị nút, ngược lại ẩn nút
  if (window.scrollY > 1200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Xử lý sự kiện khi nút được nhấp vào
btn.onclick = function() {
  'use strict';

  // Lấy thời gian bắt đầu cuộn
  var startTime = performance.now();

  // Lấy vị trí cuộn hiện tại
  var startY = window.scrollY;

  // Tổng thời gian cuộn (milliseconds)
  var duration = 500;

  // Hàm để thực hiện cuộn
  function scrollUp(currentTime) {
    'use strict';

    // Tính toán thời gian đã trôi qua
    var elapsedTime = currentTime - startTime;

    // Tính toán vị trí cuộn mới
    var scrollTo = Math.easeInOutQuad(elapsedTime, startY, -startY, duration);

    // Cuộn cửa sổ đến vị trí mới
    window.scrollTo(0, scrollTo);

    // Nếu thời gian cuộn chưa đạt đến tổng thời gian, tiếp tục cuộn
    if (elapsedTime < duration) {
      requestAnimationFrame(scrollUp);
    }
  }

  // Hàm để tạo hiệu ứng cuộn mượt mà
  Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  // Gọi hàm cuộn lên đầu trang
  requestAnimationFrame(scrollUp);
};



 // Chờ 3 giây sau khi trang web được tải
 setTimeout(function() {
  // Ẩn phần tử có id là "loading"
  document.getElementById("loading").style.display = "none";
  // Hiển thị nội dung của trang web
  document.getElementById("show-main").style.display = "block";
}, 1200);