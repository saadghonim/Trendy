// varibles
const nav_bar = document.querySelector("nav");
const close_nav = document.querySelector(".btn_close_nav");
const barsIcon = document.querySelector(".btn_bars");
const body_ = document.querySelector("body");
const btn_search_mob = document.querySelector(".btn_search-mobile");
const search_mob = document.querySelector(".search_mob");
const btn_close_search = document.querySelector(".btn_close_search");

// // open navbar
barsIcon.addEventListener("click", function () {
  nav_bar.classList.add("open_nav");
  body_.classList.add("over_");
});
// // close navbar
close_nav.addEventListener("click", function () {
  nav_bar.classList.remove("open_nav");
  body_.classList.remove("over_");
});

// open searsh
btn_search_mob.addEventListener("click", function () {
  search_mob.classList.add("open_search");
  body_.classList.add("over_");
});

// // close searsh
btn_close_search.addEventListener("click", function () {
  search_mob.classList.remove("open_search");
  body_.classList.remove("over_");
});

// swiper js new
var swiper = new Swiper(".new_ .mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  loopFillGroupWithBlank: true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navigation: {
    nextEl: ".new_ .swiper-button-next",
    prevEl: ".new_ .swiper-button-prev",
  },
  pagination: {
    el: ".new_ .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
});

// swiper js most_section
var swiper = new Swiper(".most_section .mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  loopFillGroupWithBlank: true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navigation: {
    nextEl: ".most_section .swiper-button-next",
    prevEl: ".most_section .swiper-button-prev",
  },
  pagination: {
    el: ".most_section .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
});

// swiper js testimonials
var swiper = new Swiper(".testimonials .mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  loopFillGroupWithBlank: true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navigation: {
    nextEl: ".testimonials .swiper-button-next",
    prevEl: ".testimonials .swiper-button-prev",
  },
  pagination: {
    el: ".testimonials .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 2,
    },
  },
});

// ~~~~~~~~~~~~~~preload~~~~~~~~~~~~~~
document.onreadystatechange = function (e) {
  if (document.readyState == "interactive") {
    var all = document.getElementsByTagName("*");
    for (var i = 0, max = all.length; i < max; i++) {
      set_ele(all[i]);
    }
  }
};
function check_element(ele) {
  var all = document.getElementsByTagName("*");
  var totalele = all.length;
  var per_inc = 100 / all.length;

  if ($(ele).on()) {
    var prog_width =
      per_inc + Number(document.getElementById("progress_width").value);
    document.getElementById("progress_width").value = prog_width;
    $("#bar1").animate({ width: prog_width + "%" }, 3, function () {
      if (parseInt(document.getElementById("bar1").style.width) == 100) {
        $(".progress_preload").remove();
      }
    });
  } else {
    set_ele(ele);
  }
}
function set_ele(set_element) {
  check_element(set_element);
}
// ~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~back_top
$(window).scroll(function () {
  if ($(window).scrollTop() > 150) {
    $(".back_top").fadeIn("500");
  } else {
    $(".back_top").fadeOut("500");
  }
});
$(".back_top").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "500");
});

// //~~~~~~~~~ fixed header
if ($(window).width() > 768) {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
      $("nav").addClass("fixed_");
    } else {
      $("nav").removeClass("fixed_");
    }
  });
  var fixedBar = document.querySelector("nav"),
    prevScrollpos = $(window).scrollTop();
  (window.onscroll = function () {
    var o = $(window).scrollTop();
    prevScrollpos < o && prevScrollpos > 0
      ? fixedBar.classList.add("fixsedt")
      : fixedBar.classList.remove("fixsedt"),
      (prevScrollpos = o);
  }),
    document.documentElement.style.setProperty("--animate-duration", ".5s");
  // ~~~~~~~~~~~~~~~
} else {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
      $("header").addClass("fixed_");
    } else {
      $("header").removeClass("fixed_");
    }
  });
  var fixedBar = document.querySelector("header"),
    prevScrollpos = $(window).scrollTop();
  (window.onscroll = function () {
    var o = $(window).scrollTop();
    prevScrollpos < o && prevScrollpos > 0
      ? fixedBar.classList.add("fixsedt")
      : fixedBar.classList.remove("fixsedt"),
      (prevScrollpos = o);
  }),
    document.documentElement.style.setProperty("--animate-duration", ".5s");
}
