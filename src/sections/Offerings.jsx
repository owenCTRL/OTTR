import SpotlightCard from "../components/Components/SpotlightCard";
import MagicBento from "../components/Components/MagicBento";
import { HiSparkles, HiMiniFingerPrint, HiMiniEye } from "react-icons/hi2";

function Offerings() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4 py-16 text-white">
      {/* Card Group */}
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full">
        <SpotlightCard
          className="w-80 p-6 rounded-2xl bg-black/10 backdrop-blur-[40px] border border-white/10 shadow-md hover:shadow-xl transition-all duration-300"
          spotlightColor="rgba(255, 255, 255, 0.25)"
        >
          <div className="flex flex-col space-y-4">
            <HiSparkles className="text-4xl text-white/80" />
            <h2 className="text-xl font-semibold text-white">Boost Your Experience</h2>
            <p className="text-sm text-white/60">
              Get exclusive benefits, features & 24/7 support as a permanent club member.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="w-80 p-6 rounded-2xl bg-black/10 backdrop-blur-[40px] border border-white/10 shadow-md hover:shadow-xl transition-all duration-300"
          spotlightColor="rgba(255, 255, 255, 0.25)"
        >
          <div className="flex flex-col space-y-4">
            <HiMiniFingerPrint className="text-4xl text-white/80" />
            <h2 className="text-xl font-semibold text-white">Private & Secure</h2>
            <p className="text-sm text-white/60">
              Cutting-edge encryption protects your identity and data across all actions.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="w-80 p-6 rounded-2xl bg-black/10 backdrop-blur-[40px] border border-white/10 shadow-md hover:shadow-xl transition-all duration-300"
          spotlightColor="rgba(255, 255, 255, 0.25)"
        >
          <div className="flex flex-col space-y-4">
            <HiMiniEye className="text-4xl text-white/80" />
            <h2 className="text-xl font-semibold text-white">Clear Visual Insights</h2>
            <p className="text-sm text-white/60">
              Understand your metrics at a glance with our elegant dashboard views.
            </p>
          </div>
        </SpotlightCard>
      </div>

      {/* Visual Element Below */}
      <div className="mt-20 w-full flex justify-center">
        <MagicBento
          textAutoHide={true}
          disableAnimations={false}
          enableStars={true}
          enableSpotlight={false}
          enableBorderGlow={false}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={100}
          particleCount={24}
          glowColor="255, 255, 255"
        />
      </div>
    </div>
  );
}

export default Offerings;
