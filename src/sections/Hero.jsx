import Aurora from "../components/Backgrounds/Aurora";
import Orb from "../components/Backgrounds/Orb";
import ShinyText from "../components/Animations/ShinyText";
import Silk from "../components/Backgrounds/Silk";
import DarkVeil from "../components/Backgrounds/DarkVeil";
import Dither from "../components/Backgrounds/Dither";
import Logo from "../assets/ottr.svg";
import ChatBox from "../components/ChatBox";

function Hero() {
  return (
    <>
      {/* Background Silk */}
      <div className="fixed w-full h-full z-0">
        {/* <Silk
          speed={3}
          scale={0.85}
          color="#7b7b86ff"
          noiseIntensity={1}
          rotation={0}
        /> */}
        {/* <DarkVeil
          hueShift={30}
          noiseIntensity={0.025}
          speed={0.4}
          warpAmount={1}
          resolutionScale={1.5}
        /> */}
        <Aurora
          colorStops={["#0e68f3", "#11356c", "#0fb0f3"]}
          blend={1}
          amplitude={1}
          speed={0.5}
        />
      </div>

      {/* Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-30 w-[90%] md:w-[40%] px-6 md:px-9 py-3 bg-black/50 backdrop-blur-[40px] rounded-3xl flex items-center justify-between">
        <img src={Logo} alt="logo" className="h-8" />
        <nav className="inline-flex text-white text-sm gap-4 font-medium">
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 text-white">
        {/* Note: pt-[96px] ensures content is pushed below navbar height */}

        <div className="mb-8 text-xs bg-black/50 px-4 py-1 rounded-full backdrop-blur-[40px] border border-white/20">
          Built to win
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Winning Is Easy.
        </h1>

        <ShinyText text="There's a million dollars in every computer." disabled={false} speed={10} className="text-lg" />
        <ShinyText text="You just have to click the right buttons." disabled={false} speed={10} className="mb-8 text-lg" />

        {/* Input field */}
        <ChatBox />

        {/* Company Buttons */}
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

        {/* Trusted By Section */}
        <div className="text-xs uppercase tracking-wide text-white/50 mb-2">
          Used by top companies
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
          {["HubSpot", "VAPI", "Google", "Fireworks AI", "Parallel"].map((logo) => (
            <span key={logo} className="text-sm sm:text-base font-medium text-white/70">{logo}</span>
          ))}
        </div>

      </div>
    </>
  );
}

export default Hero;
