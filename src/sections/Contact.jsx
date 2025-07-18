import ProfileCard from "../components/Components/ProfileCard/ProfileCard";

function Contact() {
  return (
    <div className="flex justify-center mb-24">
        <ProfileCard
        name="Otto"
        title=""
        handle="OTTRCo"
        status="Online"
        contactText="Contact"
        avatarUrl="/assets/person.png"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log('Contact clicked')}
        />
    </div>
  );
}

export default Contact;