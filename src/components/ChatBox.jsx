import { useState, useRef, useEffect } from "react";
import RotatingText from "./Animations/RotatingText";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatBox() {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);

  // Collapse on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-xl mx-auto transition-all duration-500 ease-in-out ${
        expanded ? "h-[28rem]" : "h-fit"
      }`}
    >
      <div className="bg-black/40 backdrop-blur-[40px] border border-white/20 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full">
        {/* Chat Messages */}
        <div
          className={`flex-1 px-4 pt-4 overflow-y-auto text-white text-sm space-y-2 transition-all duration-500 ${
            expanded ? "opacity-100" : "opacity-100 text-white"
          }`}
        >
          {expanded ? (
            <>
              <div className="bg-white/10 p-3 text-left rounded-lg w-fit max-w-[80%]">
                Welcome! What are your goals?
              </div>
              <div className="bg-white/10 p-3 text-left rounded-lg w-fit max-w-[80%]">
                We're here to help you build, balance, and optimize your plan.
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-2 bg-white/10 p-2 rounded-md w-fit mb-4">
              <span className="text-white text-sm">We'll help you</span>
              <RotatingText
                texts={[            
                  "grow your business.",
                  "land your dream job.",
                  "build your project.",
                  "make any plan a winner."
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
          )}
        </div>

        {/* Input */}
        <div className="flex items-center space-x-2 border-t border-white/10 px-4 py-3">
            <textarea
                rows={1}
                className="flex-1 resize-none overflow-hidden bg-transparent text-white placeholder-white/60 focus:outline-none"
                placeholder="Explain your goals..."
                onFocus={() => setExpanded(true)}
                onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
                }}
            />
            <button>
                <FaPaperPlane className="text-white opacity-70 hover:opacity-100 transition transform hover:scale-105 cursor-pointer" />
            </button>
        </div>
      </div>
    </div>
  );
}
