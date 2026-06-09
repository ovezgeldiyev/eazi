// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var menuClose = document.getElementById("menuClose");

var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
if (menuClose) {
  menuClose.onclick = function () {
    menu.classList.remove("active");
    body.classList.remove("active");
    menuBtn.classList.remove("active");
  };
}

window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
const accountBtn = document.getElementById("accountBtn");
const accountMenu = document.getElementById("accountMenu");
const accountClose = document.getElementById("accountClose");

accountBtn.addEventListener("click", () => {
  accountMenu.classList.toggle("active");
  accountBtn.classList.toggle("active");
});

accountClose.addEventListener("click", () => {
  accountMenu.classList.remove("active");
  accountBtn.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (accountMenu.classList.contains("active") && e.target === accountMenu) {
    accountMenu.classList.remove("active");
    accountBtn.classList.remove("active");
  }
});
// account end

// menu end
// drop start
const dropBtns = document.querySelectorAll(".dropBtn");

dropBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const dropId = btn.getAttribute("data-drop");
    const dropMenu = document.querySelector(dropId);

    btn.classList.toggle("active");
    dropMenu.classList.toggle("active");
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropBtn") && !e.target.closest(".dropEvent")) {
    document
      .querySelectorAll(".dropBtn.active")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".dropEvent.active")
      .forEach((drop) => drop.classList.remove("active"));
  }
});
// drop end

// tab start
const tabSec = document.getElementById("tabSec");

if (tabSec) {
  const tabBtn = document.querySelectorAll(".tabBtn");
  const tabEvent = document.querySelectorAll(".tabEvent");
  tabBtn.forEach((btn) => {
    onTabClick(tabBtn, tabEvent, btn);
  });

  function onTabClick(tabBtns, tabItems, item) {
    item.addEventListener("click", function () {
      const parent = item.parentElement;
      const tabId = item.getAttribute("data-tab");
      const currentTab = document.querySelector(tabId);

      const isActive = parent.classList.contains("active");

      if (isActive) return;

      tabBtns.forEach((btn) => btn.parentElement.classList.remove("active"));
      tabItems.forEach((tab) => tab.classList.remove("active"));

      parent.classList.add("active");
      currentTab.classList.add("active");
    });
  }

  if (!document.querySelector(".tabBtn.active, .tabBtn.parentElement.active")) {
    const firstParent = tabBtn[0].parentElement;
    const firstTabId = tabBtn[0].getAttribute("data-tab");
    const firstTab = document.querySelector(firstTabId);
    firstParent.classList.add("active");
    firstTab.classList.add("active");
  }
}

// tab end
// faq start
const faqBtn = document.querySelectorAll(".faqBtn");
const faqEvent = document.querySelectorAll(".faqEvent");
faqBtn.forEach((e) => {
  onFaqClick(faqBtn, faqEvent, e);
});
function onFaqClick(faqBtns, faqItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let faqId = currentBtn.getAttribute("data-faq");
    let currentTab = document.querySelector(faqId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".faqEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      faqBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      faqItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end
// showMore start
const showMoreWrapper = document.getElementById("showMoreWrapper");
if (showMoreWrapper) {
  const showMoreBtns = document.querySelectorAll(".showMoreBtn");
  showMoreBtns.forEach((showMoreBtn) => {
    showMoreBtn.onclick = () => {
      const parentElement =
        showMoreBtn.parentNode.parentNode.querySelector(".showMore");
      parentElement.classList.toggle("active");
      showMoreBtn.classList.toggle("active");
      if (showMoreBtn.classList.contains("active")) {
        showMoreBtn.innerHTML = "Show less";
      } else {
        showMoreBtn.innerHTML = "Show all";
      }
    };
  });
}
// showMore end

// sliders
$(function () {
  $(".clients__inner-slider").slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".reviews__inner-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".recentsMain__inner-slider").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".sale__inner-slider").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".workContent__slider").slick({
    infinite: false,
    arrows: false,
    dots: false,
    variableWidth: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(".workStep").on("click", function () {
  $(".workStep").removeClass("active");
  $(this).addClass("active").prevAll(".workStep").addClass("active");
});

$(function () {
  $(".testimonial__inner-slider").slick({
    infinite: true,
    variableWidth: true,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".testimonial__inner-swiper").slick({
    infinite: true,
    variableWidth: true,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    rtl: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
const breadcrumbs = document.getElementById("breadcrumbs");
if (breadcrumbs) {
  const breadcrumbLinks = document.querySelectorAll(".breadcrumbsLink");
  const breadcrumbSections = Array.from(breadcrumbLinks).map((link) => {
    const id = link.getAttribute("href").replace("#", "");
    return document.getElementById(id);
  });

  function updateBreadcrumbState() {
    let index = breadcrumbSections.length;

    while (
      --index &&
      window.scrollY + 150 < breadcrumbSections[index].offsetTop
    ) {}

    breadcrumbLinks.forEach((link) => link.classList.remove("active"));
    if (breadcrumbLinks[index]) breadcrumbLinks[index].classList.add("active");
  }

  breadcrumbLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      breadcrumbLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      const id = this.getAttribute("href");
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });

  window.addEventListener("scroll", updateBreadcrumbState);
}

const uploadBtn = document.getElementById("uploadBtn");
if (uploadBtn) {
  const uploadInput = document.getElementById("profileUpload");
  const imageContainer = document.querySelector(".profileMain__image");

  uploadBtn.addEventListener("click", function () {
    uploadInput.click();
  });

  uploadInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageContainer.innerHTML = "";
        const img = document.createElement("img");
        img.src = e.target.result;
        img.alt = "Profile picture";
        img.classList.add("profileMain__photo");
        imageContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });
}

const myAgentsBtn = document.getElementById("myAgentsBtn");

if (myAgentsBtn) {
  const myAgents = document.getElementById("myAgents");

  myAgentsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    myAgents.classList.toggle("active");
  });

  myAgents.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    if (myAgents.classList.contains("active")) {
      myAgents.classList.remove("active");
    }
  });
}

const statsMain = document.getElementById("statsMain");
if (statsMain) {
  const tabs = document.querySelectorAll(".statsMain__tabs a");
  const select = document.querySelector(".statsMain__select select");
  const anchors = document.querySelectorAll(".statsAnchor");

  const sectionMap = {
    "Listing Views": "listing",
    "Buyer Enquiry History": "buyer",
    "Offers History": "offer",
    "Viewings Conducted": "view",
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const id = tab.getAttribute("href").substring(1);
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  if (select) {
    select.addEventListener("change", (e) => {
      const selectedText = e.target.value;
      const targetId = sectionMap[selectedText];
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const TOP_OFFSET = 0;

  function updateActiveTab() {
    let currentId = anchors[0]?.id || null;

    anchors.forEach((anchor) => {
      const rect = anchor.getBoundingClientRect();
      if (rect.top - TOP_OFFSET <= 0) {
        currentId = anchor.id;
      }
    });

    if (!currentId) return;

    tabs.forEach((tab) => {
      const hrefId = tab.getAttribute("href").substring(1);
      tab.classList.toggle("active", hrefId === currentId);
    });
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveTab();
        ticking = false;
      });
      ticking = true;
    }
  });
  updateActiveTab();
}
