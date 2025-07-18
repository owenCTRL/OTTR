import Hero from "../../sections/Hero"
import Offerings from "../../sections/Offerings"
import Contact from "../../sections/Contact"

function LandingPage() {
  return (
    <>
      <div className="h-full w-full">
        <Hero />
        <Offerings />
        <Contact />
      </div>
    </>
  )
}

export default LandingPage