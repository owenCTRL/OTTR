import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import RotatingText from "./Animations/RotatingText";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatBox({ onExpand, onCollapse }) {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const message1Ref = useRef(null);
  const message2Ref = useRef(null);
  const rotatingTextRef = useRef(null);

  // Toggle expand state
  const toggleExpand = () => {
    if (!expanded) {
      setExpanded(true);
      onExpand?.();
    }
  };

  // Collapse on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        if (expanded) {
          setExpanded(false);
          onCollapse?.();
        }
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded, onCollapse]);

  // GSAP animation for expand/collapse and messages
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      if (expanded) {
        // Expand animation
        gsap.set(containerRef.current, { width: "fit-content" });
        gsap.to(containerRef.current, {
          height: "28rem",
          width: "100%",
          duration: 1,
          ease: "power3.inOut",
        });
        
        // Hide rotating text and show messages
        if (rotatingTextRef.current) {
          gsap.to(rotatingTextRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power3.out",
          });
        }

        if (messagesContainerRef.current) {
          gsap.set(messagesContainerRef.current, { display: "block" });
          gsap.to(messagesContainerRef.current, {
            opacity: 1,
            duration: 0.5,
            delay: 0.3,
            ease: "power3.out",
          });
        }

        // Animate messages with GSAP directly
        if (message1Ref.current && message2Ref.current) {
          gsap.set([message1Ref.current, message2Ref.current], {
            y: 50,
            opacity: 0,
          });

          gsap.to(message1Ref.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.5,
            ease: "power3.out",
          });

          gsap.to(message2Ref.current, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.9,
            ease: "power3.out",
          });
        }
      } else {
        // Collapse animation
        gsap.to(containerRef.current, {
          height: "auto",
          width: "fit-content",
          duration: 1,
          ease: "power3.inOut",
        });

        // Hide messages and show rotating text
        if (messagesContainerRef.current) {
          gsap.to(messagesContainerRef.current, {
            opacity: 0,
            duration: 0.4,
            ease: "power3.out",
            onComplete: () => {
              gsap.set(messagesContainerRef.current, { display: "none" });
            }
          });
        }

        if (rotatingTextRef.current) {
          gsap.to(rotatingTextRef.current, {
            opacity: 1,
            duration: 0.8,
            delay: 0.8,
            ease: "power3.out",
          });
        }
      }
    }
  }, [expanded]);

  return (
    <div
      onClick={toggleExpand}
      ref={containerRef}
      className="w-fit min-w-[400px] max-w-full sm:max-w-lg px-4 sm:px-4 mx-auto cursor-pointer"
    >
      <div className="bg-black/40 backdrop-blur-[40px] border border-white/20 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full">
        {/* Chat Messages */}
        <div
          ref={contentRef}
          className="flex-1 px-4 pt-4 text-white text-sm relative"
        >
          {/* Always render messages, control visibility with GSAP */}
          <div 
            ref={messagesContainerRef}
            className="space-y-4 opacity-0"
            style={{ display: "none" }}
          >
            <div 
              ref={message1Ref}
              className="bg-white/10 p-3 text-left rounded-lg w-fit max-w-[80%]"
            >
              Welcome! What are your goals?
            </div>
            
            <div 
              ref={message2Ref}
              className="bg-white/10 p-3 text-left rounded-lg w-fit max-w-[80%]"
            >
              We're here to help you build, balance, and optimize your plan.
            </div>
          </div>

          {/* Rotating text - always rendered */}
          <div 
            ref={rotatingTextRef}
            className="flex items-center space-x-2 bg-white/10 p-2 rounded-xl w-fit mb-4"
            style={{ opacity: 1 }}
          >
            <span className="text-white text-sm">We'll help you</span>
            <RotatingText
              texts={[
                "grow your business.",
                "land your dream job.",
                "build your project.",
                "make any plan a winner.",
              ]}
              mainClassName="p-2 bg-[#0e66f1] text-white overflow-hidden justify-center rounded-lg"
              staggerFrom="first"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
          </div>
        </div>

        {/* Input */}
        <div className="flex items-center space-x-2 border-t border-white/10 px-4 py-3">
          <textarea
            rows={1}
            className="flex-1 resize-none overflow-hidden bg-transparent text-white placeholder-white/60 focus:outline-none"
            placeholder="Explain your goals..."
            onFocus={() => {
              if (!expanded) {
                setExpanded(true);
                onExpand?.();
              }
            }}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={(e) => e.stopPropagation()}>
            <FaPaperPlane className="text-white opacity-70 hover:opacity-100 transition transform hover:scale-105 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}