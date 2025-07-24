import Hero from "../../sections/Hero"
import Offerings from "../../sections/Offerings"
import Contact from "../../sections/Contact"
import AnimatedContent from "../../components/Animations/AnimatedContent"
import Aurora from "../../components/Backgrounds/Aurora"

function LandingPage() {
  return (
    <>
      {/* Background Silk */}
      <div className="fixed w-full h-full z-0">
        <Aurora
          colorStops={["#0e68f3", "#11356c", "#0fb0f3"]}
          blend={1}
          amplitude={1}
          speed={0.5}
        />
      </div>
      <Hero />
      <Offerings />
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={3}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity={true}
        scale={1}
        threshold={0.2}
        delay={0}
      >
        <Contact />
      </AnimatedContent>
    </>
  )
}

export default LandingPage