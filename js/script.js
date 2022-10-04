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
      .addTo(controller);
  }
});

/* INFO SECTIONS: INNER SCROLL */
const infoSection = document.querySelectorAll(".info-section.lg");

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

/* BOTTLE ANIMATION */
const bottleContainer = document.querySelector(".bottle-container"),
  bottle = bottleContainer.querySelector(".bottle");

let bottleTl = gsap.timeline();
bottleTl
  .to(bottle, 1200, { x: "61vw", rotateZ: 18 })
  .to(bottle, 1900, { x: "-61vw", rotateZ: -18 })
  .to(bottle, 2100, { x: "61vw", rotateZ: 18 })
  .to(bottle, 1100, { x: "0", rotateZ: 0 })
  .to(bottle, 300, { x: "-10vw", rotateZ: -9 })
  .to(bottle, 300, { x: "0", rotateZ: 0 })
  .to(bottle, 320, { x: "0", rotateZ: 0 });

new ScrollMagic.Scene({
  triggerElement: document,
  triggerHook: "onEnter",
  duration: 7220,
})
  .setTween(bottleTl)
  .addTo(controller);

/* CLICK ME CURSOR */
const cursorContainer = document.querySelectorAll(
    ".click-me .animation-container"
  ),
  starImgs = document.querySelectorAll(".click-me .star-3");

// Text rotation
let cursorTl = gsap.timeline({ repeat: -1 });
cursorTl
  .add("start")
  .to(
    cursorContainer,
    1.5,
    {
      x: -45,
      ease: Linear.easeNone,
    },
    "start"
  )
  .to(starImgs, 1.5, { rotateZ: 360, ease: Linear.easeNone }, "start");
