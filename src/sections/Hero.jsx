import Aurora from "../components/Backgrounds/Aurora";
import Orb from "../components/Backgrounds/Orb";
import ShinyText from "../components/Animations/ShinyText";
import AnimatedContent from "../components/Animations/AnimatedContent";
import ChatBox from "../components/ChatBox";
import { FaCircle } from "react-icons/fa";

function Hero() {
  return (
    <>
      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 text-white">

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1.1}
          threshold={0.2}
          delay={1.8}
        >
          <div className="mb-8 text-xs font-extrabold text-white/50 bg-black/50 px-4 py-1 rounded-full backdrop-blur-[40px] border border-white/20 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Online
          </div>
        </AnimatedContent>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1.1}
          threshold={0.2}
          delay={0.2}
        >
          <h1 className="text-6xl font-extrabold mb-4">
            Winning is easy.
          </h1>
        </AnimatedContent>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1.1}
          threshold={0.2}
          delay={1.0}
        >
          <ShinyText
            text="You just have to take the first step."
            disabled={false}
            speed={10}
            className="mb-8 text-lg"
          />
        </AnimatedContent>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1.1}
          threshold={0.2}
          delay={0.4}
        >
          <ChatBox />
        </AnimatedContent>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1.1}
          threshold={0.2}
          delay={2.4}
        >
          <div className="flex gap-3 flex-wrap justify-center mt-8 mb-10 text-white/50">
            {["PyTorch", "Fireworks", "Arize", "Decagon"].map((company) => (
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
    </>
  );
}

export default Hero;
