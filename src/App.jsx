import ProfileCard from "./ProfileCard";
import AlexImage from "./img/alexa.png";
import SiriImage from "./img/siri.png";
import CortanaImage from "./img/cortana.png";

export default function App() {
  return (
    <div>
      <ProfileCard aiName="Alexa" twitterHandle="@alexa99" image={AlexImage} />
      <ProfileCard aiName="Siri" twitterHandle="@siri01" image={SiriImage} />
      <ProfileCard
        aiName="Cortana"
        twitterHandle="@cortana32"
        image={CortanaImage}
      />
    </div>
  );
}
