import { isMobileAndTablet } from './isMobileAndTablet';

/*
 * Add parallax effect to element
 *
 * @param {Object} DOM element
 * @param {Integer} Animation speed, default: 30
 */
export function setParallax(elem, speed = 30) {
  const top = (window.pageYOffset - elem.offsetTop) / speed;
  const _elem = elem;
  isMobileAndTablet
    ? _elem.style.backgroundPosition = `0px ${top}px`
    : null;
}
