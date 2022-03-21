import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from 'rxjs'

export default class ScrollService {
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    scrollToContact = () => {
        let contactMeScreen = document.getElementById("Contact Me")
        if (!contactMeScreen) return;
        contactMeScreen.scrollIntoView({ behavior: "smooth" })
    }

    scrollToHome = () => {
        let homeScreen = document.getElementById("Home")
        if (!homeScreen) return;
        homeScreen.scrollIntoView({ behavior: "smooth" })
    }

    isEleInView = (ele, type) => {
        let rec = ele.getBoundingClientRect();
        let eleTop = rec.top;
        let eleBot = rec.bottom;

        let partiallyVisible = eleTop < window.innerHeight && eleBot >= 0;
        let completelyVisible = eleTop >= 0 && eleBot <= window.innerHeight;

        switch (type) {
            case "partial":
                return partiallyVisible

            case "complete":
                return completelyVisible
            default:
                return false;
        }

    }
    checkCurrentScreenUnderViewport = (event) => {
        if (!event || Object.keys(event).length < 1) return;

        for (let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);
            if (!screenFromDOM) continue;

            let fullyVisible = this.isEleInView(screenFromDOM, "complete");
            let partiallyVisible = this.isEleInView(screenFromDOM, "partial")

            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }

                if (fullyVisible) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name
                    });
                    break;
                }
            }
        }
    }
}