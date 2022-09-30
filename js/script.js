/* ScrollMagic Controller */
let controller = new ScrollMagic.Controller();

/* BUY NOW + WTF STRIPS */
const scrollContainers = document.querySelectorAll(".scroll-container");

scrollContainers.forEach((scrollContainer) => {
  const starImgs = scrollContainer.querySelectorAll(".star");

  // scroll direction
  const left = scrollContainer.classList.contains("left"),
    right = scrollContainer.classList.contains("right"),
    top = scrollContainer.classList.contains("top"),
    bottom = scrollContainer.classList.contains("bottom");

  // gsap timeline
  let tl = gsap.timeline();

  if (left || top || bottom) {
    // top and bottom scrollContainers are basically rotated lefts
    tl.add("start")
      .fromTo(scrollContainer, { x: 250 }, { x: -50 }, "start")
      .fromTo(starImgs, { rotateZ: 719 }, { rotateZ: 33 }, "start");
  } else if (right) {
    tl.add("start")
      .fromTo(scrollContainer, { x: -50 }, { x: 250 }, "start")
      .fromTo(starImgs, { rotateZ: 33 }, { rotateZ: 719 }, "start");
  }

  // scrollmagic scene
  if (left || right) {
    new ScrollMagic.Scene({
      triggerElement: scrollContainer,
      triggerHook: "onEnter",
      duration: "100%",
    })
      .setTween(tl)
      .addTo(controller);
  } else if (top || bottom) {
    // Here, onEnter happens very early because their 'width' is vertical
    // so triggerElement has to be the section and not the strip
    new ScrollMagic.Scene({
      triggerElement: scrollContainer.parentElement.parentElement.parentElement,
      triggerHook: "onEnter",
      duration: "200%",
    })
      .setTween(tl)
      .addIndicators()
      .addTo(controller);
  }
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
    .addTo(controller);
});
