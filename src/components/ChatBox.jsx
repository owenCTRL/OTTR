import { useState, useRef, useEffect } from "react";
import RotatingText from "./Animations/RotatingText";
import { Send } from "lucide-react";
import { gsap } from "gsap";
import "./ChatBot.css";

export default function ChatBox({ onExpand, onCollapse }) {
  const [expanded, setExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome! What are your goals?", sender: "bot" },
    {
      id: 2,
      text: "We're here to help you build, balance, and optimize your plan.",
      sender: "bot",
    },
  ]);

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const rotatingTextRef = useRef(null);

  const toggleExpand = () => {
    if (!expanded && !isAnimating) {
      setExpanded(true);
      onExpand?.();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        if (expanded && !isAnimating) {
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
  }, [expanded, isAnimating, onCollapse]);

  useEffect(() => {
    gsap.set(containerRef.current, { width: 400, height: "auto" });
    gsap.set(messagesContainerRef.current, {
      display: "none",
      opacity: 0,
      y: 20,
    });
    gsap.set(rotatingTextRef.current, {
      display: "flex",
      opacity: 1,
      y: 0,
      scale: 1,
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    setIsAnimating(true);

    const container = containerRef.current;
    const rotatingText = rotatingTextRef.current;
    const messagesContainer = messagesContainerRef.current;

    gsap.killTweensOf([container, rotatingText, messagesContainer]);

    const tl = gsap.timeline({ onComplete: () => setIsAnimating(false) });

    if (expanded) {
      tl.to(
        container,
        {
          height: 448,
          width: 512,
          duration: 0.7,
          ease: "power3.inOut",
        },
        0
      );

      tl.to(
        rotatingText,
        {
          opacity: 0,
          y: -20,
          scale: 0.95,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            rotatingText.style.display = "none";
          },
        },
        0
      );

      tl.set(messagesContainer, { display: "block", overflowY: "auto" }, 0.3);
      tl.to(
        messagesContainer,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        0.3
      );
    } else {
      tl.to(
        messagesContainer,
        {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.in",
        },
        0
      );

      tl.set(messagesContainer, { display: "none" }, 0.5);

      tl.set(
        rotatingText,
        { display: "flex", opacity: 0, y: 10, scale: 0.95 },
        0.5
      );

      tl.add(() => {
        const prevHeight = container.style.height;
        container.style.height = "auto";
        const autoHeight = container.getBoundingClientRect().height;
        container.style.height = prevHeight;
        gsap.to(container, {
          height: autoHeight,
          duration: 0.6,
          ease: "power3.inOut",
        });
      }, 0.5);

      tl.to(
        container,
        {
          width: 400,
          duration: 0.7,
          ease: "power3.inOut",
        },
        0.3
      );

      tl.to(
        rotatingText,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        0.5
      );
    }
  }, [expanded]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Thanks for sharing! We'll build a tailored plan shortly.",
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  return (
    <div
      onClick={toggleExpand}
      ref={containerRef}
      className="mx-auto cursor-pointer"
    >
      <div className="bg-black/40 backdrop-blur-[40px] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full hover:bg-black/45 hover:shadow-3xl">
        <div
          ref={contentRef}
          className="content-container flex-1 px-4 py-4 text-white text-sm relative"
        >
          <div
            ref={messagesContainerRef}
            className="messages-container flex flex-col overflow-y-auto max-h-64 scroll-smooth px-1"
          >
            <div className="flex-1 py-1">
              {messages.map((msg, index) => (
                <div
                  key={msg.id}
                  className={`flex w-full ${
                    msg.sender === "bot" ? "justify-start" : "justify-end"
                  } ${index !== messages.length - 1 ? "mb-2" : ""}`}
                >
                  <div
                    className={`p-4 rounded-xl max-w-[80%] backdrop-blur-sm shadow-lg ${
                      msg.sender === "bot"
                        ? "bg-white/10 text-white/90"
                        : "bg-blue-500/50 text-blue-100"
                    } text-left`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={rotatingTextRef}
            className="flex items-center space-x-3 bg-white/10 p-3 rounded-xl w-fit backdrop-blur-sm shadow-lg"
          >
            <div className="flex items-center space-x-2">
              <span className="text-white/90 text-sm font-medium">
                We'll help you
              </span>
            </div>
            <RotatingText
              texts={["grow your business.", "land your dream job.", "build your project.", "make any plan a winner.",]}
              mainClassName="p-2 bg-[#0e66f1] text-white rounded-lg min-w-[140px] text-center"
              staggerFrom={"first"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
            />
          </div>
        </div>

        <div className="input-container flex items-center space-x-3 border-t border-white/10 px-4 py-4 bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-sm">
          <textarea
            rows={1}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 resize-none overflow-hidden bg-transparent text-white placeholder-white/60 focus:outline-none text-sm leading-relaxed"
            placeholder="Explain your goals..."
            onFocus={() => {
              if (!expanded && !isAnimating) {
                setExpanded(true);
                onExpand?.();
              }
            }}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${Math.min(
                e.target.scrollHeight,
                120
              )}px`;
            }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSendMessage();
            }}
            className="p-2 active:scale-95"
          >
            <Send className="text-white opacity-60" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
