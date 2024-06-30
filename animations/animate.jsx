import { useEffect } from "react";
import { gsap } from "gsap";

export const useSlideUp = (ref) => {
  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        y: 150,
        opacity: 0,
        duration:1.5,
          delay: 0.01,
          ease: "power1.inOut",
      });
    }
  }, [ref]);
};

export const useVisible = (ref) => {
    useEffect(() => {
        gsap.from(ref.current, {
            opacity: 0,
            scale:0,
            duration:1.6,
            delay: 1,
            ease: "power1.inOut",
        })
    }, [ref]);
}

export const useLettersAnimation = (ref) => {
  useEffect(() => {
    if (ref.current) {
      const letters = ref.current.querySelectorAll("span");
      gsap.fromTo(letters,{opacity:0,y:50},{opacity:1,y:0,duration:0.5,stagger:0.03,ease:"power3.out"})
    }
  },[ref])
}