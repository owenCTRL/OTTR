import ProfileCard from "../components/Components/ProfileCard/ProfileCard";
import { useEffect, useState } from "react";

function Contact() {
  const [enableTilt, setEnableTilt] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setEnableTilt(window.innerWidth >= 768); // or any breakpoint you prefer
    };

    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="flex justify-center mb-24">
        <ProfileCard
          name="Owen"
          title=""
          handle="0xOwen"
          status="Online"
          contactText="Contact"
          avatarUrl="/assets/person.png"
          showUserInfo={true}
          enableTilt={enableTilt}
          onContactClick={() => window.open("https://x.com/ottrCo", "_blank")}
        />
    </div>
  );
}

export default Contact;