/* ScrollMagic Controller */
let controller = new ScrollMagic.Controller();

/* BUY NOW STRIPS */
const buyNow = document.querySelectorAll(".buy-now");

buyNow.forEach((strip) => {
  const scrollContainer = strip.querySelector(".scroll-container"),
    starImgs = strip.querySelectorAll(".scroll-container img");

  let tl = gsap.timeline();

  if (strip.classList.contains("scroll-left")) {
    /* Move left with scroll */
    tl.add("start")
      .fromTo(scrollContainer, { x: 250 }, { x: -50 }, "start")
      .fromTo(starImgs, { rotateZ: 719 }, { rotateZ: 33 }, "start");
  } else {
    /* Move right with scroll */
    tl.add("start")
      .fromTo(scrollContainer, { x: -50 }, { x: 250 }, "start")
      .fromTo(starImgs, { rotateZ: 33 }, { rotateZ: 719 }, "start");
  }

  new ScrollMagic.Scene({
    triggerElement: scrollContainer,
    triggerHook: "onEnter",
    duration: "100%",
  })
    .setTween(tl)
    .addTo(controller);
});

/* INFO SECTIONS: INNER SCROLL */
const infoSection = document.querySelectorAll(".info-section");

infoSection.forEach((section) => {
  const scrollContainer = section.querySelector(".inner-scroll");

  let tl = gsap.timeline();
  tl.fromTo(scrollContainer, { y: "36vw" }, { y: "-24vw" });

  new ScrollMagic.Scene({
    triggerElement: section,
    triggerHook: "onEnter",
    duration: "200%",
  })
    .setTween(tl)
    .addIndicators()
    .addTo(controller);
});
