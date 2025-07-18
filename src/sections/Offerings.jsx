import SpotlightCard from "../components/Components/SpotlightCard";
import MagicBento from "../components/Components/MagicBento";
import AnimatedContent from "../components/Animations/AnimatedContent";
import {
  HiSparkles,
  HiMiniFingerPrint,
  HiMiniEye,
  HiMiniChartBar,
  HiMiniCpuChip,
  HiMiniUserGroup,
  HiMiniShieldCheck,
  HiMiniArrowsPointingOut,
  HiMiniCog6Tooth,
  HiMiniGlobeAlt,
  HiMiniLockClosed,
} from "react-icons/hi2";

function Offerings() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4 py-16 text-white space-y-20">
      {/* Card Group 1 (Top 3 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={3}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1.1}
          threshold={0.2}
          delay={0}
        > 
          <SpotlightCard
            className="w-full p-6 rounded-2xl bg-black/10 backdrop-blur-[40px] border border-white/10 shadow-md hover:shadow-xl transition-all duration-300"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <div className="flex flex-col space-y-4">
              <HiSparkles className="text-4xl text-white" />
              <h2 className="text-xl font-semibold text-white">Boost Your Experience</h2>
              <p className="text-sm text-white/60">
                Get exclusive benefits, features & 24/7 support as a permanent club member.
              </p>
            </div>
          </SpotlightCard>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={3}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <SpotlightCard
            className="w-full p-6 rounded-2xl bg-black/10 backdrop-blur-[40px] border border-white/10 shadow-md hover:shadow-xl transition-all duration-300"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <div className="flex flex-col space-y-4">
              <HiMiniFingerPrint className="text-4xl text-white" />
              <h2 className="text-xl font-semibold text-white">Private & Secure</h2>
              <p className="text-sm text-white/60">
                Cutting-edge encryption protects your identity and data across all actions.
              </p>
            </div>
          </SpotlightCard>
        </AnimatedContent>

        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={3}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1.1}
          threshold={0.2}
          delay={0.6}
        >
          <SpotlightCard
            className="w-full p-6 rounded-2xl bg-black/10 backdrop-blur-[40px] border border-white/10 shadow-md hover:shadow-xl transition-all duration-300"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <div className="flex flex-col space-y-4">
              <HiMiniEye className="text-4xl text-white" />
              <h2 className="text-xl font-semibold text-white">Clear Visual Insights</h2>
              <p className="text-sm text-white/60">
                Understand your metrics at a glance with our elegant dashboard views.
              </p>
            </div>
          </SpotlightCard>
        </AnimatedContent>
      </div>

      {/* Visual Element Below */}
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={3}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity={true}
        scale={1.1}
        threshold={0.2}
        delay={1.2}
      >
        <div className="w-full flex justify-center">
          <MagicBento
            textAutoHide={true}
            disableAnimations={false}
            enableStars={true}
            enableSpotlight={false}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={true}
            spotlightRadius={50}
            particleCount={24}
            glowColor="255, 255, 255"
          />
        </div>
      </AnimatedContent>
    </div>
  );
}

export default Offerings;