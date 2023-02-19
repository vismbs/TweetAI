import ProfileCard from "./ProfileCard";
import AlexImage from "./img/alexa.png";
import SiriImage from "./img/siri.png";
import CortanaImage from "./img/cortana.png";
import "bulma/css/bulma.css";

export default function App() {
  return (
    <div>
      <section className="hero is-primary">
        <p className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </p>
      </section>
      <div class="container">
        <section class="section">
          <div class="columns">
            <div className="column is-4">
              <ProfileCard
                aiName="Alexa"
                twitterHandle="@alexa99"
                image={AlexImage}
                desc="Created by Amazon helps you buy things and stuff"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                aiName="Siri"
                twitterHandle="@siri01"
                image={SiriImage}
                desc="Created by Apple. Complete BS"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                aiName="Cortana"
                twitterHandle="@cortana32"
                image={CortanaImage}
                desc="Created by Microsoft. Complete BS"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
