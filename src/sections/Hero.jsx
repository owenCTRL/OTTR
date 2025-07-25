import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Aurora from "../components/Backgrounds/Aurora";
import Orb from "../components/Backgrounds/Orb";
import ShinyText from "../components/Animations/ShinyText";
import AnimatedContent from "../components/Animations/AnimatedContent";
import ChatBox from "../components/ChatBox";

function Hero() {
  const [chatExpanded, setChatExpanded] = useState(false);
  const heroContentRef = useRef(null);
  const lowerContentRef = useRef(null);
  const onlineIndicatorRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const brandButtonsRef = useRef(null);

  useEffect(() => {
    gsap.to(".hero-container", {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.1,
    });
  }, []);
  
  // Handle chat expand/collapse animations
  useEffect(() => {
    if (chatExpanded) {
      // Hide hero content when chat expands
      const elementsToHide = [
        onlineIndicatorRef.current,
        titleRef.current,
        subtitleRef.current,
        brandButtonsRef.current
      ].filter(Boolean);

      elementsToHide.forEach((element, index) => {
        gsap.to(element, {
          opacity: 0,
          y: index < 3 ? -50 : 50, // Move up for top elements, down for bottom
          duration: 0.6,
          ease: "power3.out",
          delay: index * 0.1,
        });
      });

      gsap.set(heroContentRef.current, { pointerEvents: "none" });
      gsap.set(lowerContentRef.current, { pointerEvents: "none" });
    } else {
      // Show hero content when chat collapses
      const elementsToShow = [
        onlineIndicatorRef.current,
        titleRef.current,
        subtitleRef.current,
        brandButtonsRef.current
      ].filter(Boolean);

      elementsToShow.forEach((element, index) => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.6 + (index * 0.1),
          ease: "power3.out",
        });
      });

      gsap.set(heroContentRef.current, { pointerEvents: "auto" });
      gsap.set(lowerContentRef.current, { pointerEvents: "auto" });
    }
  }, [chatExpanded]);

  return (
    <>
      {/* Hero Content */}
      <div className="hero-container relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 text-white opacity-0">
        <div ref={heroContentRef}>
          {/* Online Indicator - Always rendered, controlled by AnimatedContent and GSAP */}
          <AnimatedContent delay={2.7}>
            <div 
              ref={onlineIndicatorRef}
              className="w-fit mx-auto mb-8 text-xs font-medium text-white/50 bg-black/50 px-4 py-1 rounded-full backdrop-blur-[40px] border border-white/20 flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Online
            </div>
          </AnimatedContent>

          {/* Title - Always rendered */}
          <AnimatedContent delay={0.4}>
            <h1 ref={titleRef} className="text-6xl font-extrabold mb-4">
              Winning is easy.
            </h1>
          </AnimatedContent>

          {/* Subtitle - Always rendered */}
          <AnimatedContent delay={1.4}>
            <div ref={subtitleRef}>
              <ShinyText
                text="You just have to take the first step."
                disabled={false}
                speed={10}
                className="mb-8 text-lg font-medium"
              />
            </div>
          </AnimatedContent>
        </div>

        {/* ChatBox - Always rendered */}
        <AnimatedContent delay={0.6}>
          <ChatBox
            onExpand={() => setChatExpanded(true)}
            onCollapse={() => setChatExpanded(false)}
          />
        </AnimatedContent>

        <div ref={lowerContentRef}>
          {/* Brand buttons - Always rendered */}
          <AnimatedContent delay={3.1}>
            <div 
              ref={brandButtonsRef}
              className="flex gap-3 flex-wrap font-medium justify-center mt-8 mb-10 text-white/50"
            >
              {["ottrMap™", "actionAI™", "winStack™"].map((company) => (
                <button
                  key={company}
                  className="px-4 py-1 border border-white/20 bg-white/5 text-sm rounded-md hover:bg-white/10 transition"
                >
                  {company}
                </button>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </div>
    </>
  );
}

export default Hero;