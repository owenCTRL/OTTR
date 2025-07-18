import Aurora from "../components/Backgrounds/Aurora";
import Orb from "../components/Backgrounds/Orb";
import ShinyText from "../components/Animations/ShinyText";
import AnimatedContent from "../components/Animations/AnimatedContent";
import ChatBox from "../components/ChatBox";

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
          delay={3}
        >
          <div className="mb-8 text-xs bg-black/50 px-4 py-1 rounded-full backdrop-blur-[40px] border border-white/20">
            Built to win
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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
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
          delay={1.2}
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
          delay={0.2}
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
          delay={3.3}
        >
          <div className="flex gap-3 flex-wrap justify-center mt-8 mb-10">
            {["ElevenLabs", "Fireworks", "Arize", "Decagon"].map((company) => (
              <button
                key={company}
                className="px-4 py-1 border border-white/20 bg-white/5 text-sm rounded-md hover:bg-white/10 transition"
              >
                {company}
              </button>
            ))}
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
          delay={3.6}
        >
          <div className="text-xs uppercase tracking-wide text-white/50 mb-2">
            Used by top companies
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
          delay={3.9}
        >
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
            {["HubSpot", "VAPI", "Google", "Fireworks AI", "Parallel"].map((logo) => (
              <span
                key={logo}
                className="text-sm sm:text-base font-medium text-white/70"
              >
                {logo}
              </span>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </>
  );
}

export default Hero;
