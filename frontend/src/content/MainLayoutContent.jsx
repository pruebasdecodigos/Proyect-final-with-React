import "../styles/pages-styles/MainLayoutContent.css";
import FondoMainLayout from "../assets/FondoLanding.png";

export default function MainLayoutContent() {
  return (
    <div className="MainLayoutContent">
      <div className="hero-LayoutContent">
        <h1 className="Title-hero">Welcome to GexStudio</h1>
        <p className="Text-info">
          Your ultimate gaming companion. Manage your personal video game
          library, discover new titles, share reviews, and connect with fellow
          gamers in one powerful platform.
        </p>
        <div className="button-container">
          <button className="button-General">Explore Your Library</button>
          <button className="button-hero">Watch Demo</button>
        </div>
      </div>

      <div className="Sections">

        <section className="Features">
          <h1 className="h1">Powerful Features for <span className="Title-hero">Every Gamer</span></h1>

            <div className="AddGames">
              <h2 className="Title-cards">Add Games Easily</h2>
              <p className="p-card">Quickly add games to your personal library with our intutive search and import system.
                Track your gaming collection effortlessly.
              </p>
              <button className="button-LearnMore">Learn More</button>
            </div>

            <div className="Reviews">
              <h2 className="Title-cards">Reviews & Stats</h2>
              <p className="p-card">Write detailed reviews, rate your games, and track your gaming statistics.
                Share your thoughts with the gaming community.
              </p>
              <button className="button-LearnMore">Learn More</button>
            </div>

            <div className="Discover">
              <h2 className="Title-cards">Discover New Titles</h2>
              <p className="p-card">Explore trending games, get personalized recommendations, and discover hidden
                gems based on your gaming preferences.
              </p>
              <button className="button-LearnMore">Learn More</button>
            </div>

            <div className="Comunnity">
              <h2 className="Title-cards">Connect with People</h2>
              <p className="p-card">Join vibrant community of gamers, share your gaming experiences, and
                connect with players who share your interests.
              </p>
              <button className="button-LearnMore">Learn More</button>
            </div>

        </section> 

        <section className="GameLibrary">
          <h1 className="h1">Your Personal <span className="Title-hero">Game Library</span></h1>
          <p>Organize your entire gaming collection in one place. Track your progress, rate your
            experiences, and never lose track of what to play next. Your online game library adapts
            to your gaming style.
          </p>

          <div className="GameContainer">
            {/*Pendiente agregar el codigo aca....*/}
          </div>

          <p><strong>Ready to Build Your Ultimate Gaming Collection?</strong></p>
          <h3 className="h3">Join thousands of gamers who trust GexStudio to manage their video game tracker and
            discover their next favorite title.
          </h3>

          <button className="Button-General">Sing Up Free</button>
          <button className="Button-LogIn">Log In</button>

        </section>

        <section className="Community">
          <h1 className="h1">Join the Ultimate <span className="Title-hero">Game Community</span></h1>
          <p>Connect with passionate gamers worldwide, share your experiences, and discover your next
            favorite game through our vibrant gaming community.
          </p>

            <div class="icon-container">

              <div class="icon">
                <div class="circle"></div>
                <h2>50,000+</h2>
                <h3>Active Gamers</h3>
              </div>

              <div class="icon">
                <div class="circle"></div>
                <h2>100,000+</h2>
                <h3>Games Tracked</h3>
              </div>

              <div class="icon">
                <div class="circle"></div>
                <h2>500,000+</h2>
                <h3>Reviews Written</h3>
              </div>

              <div class="icon">
                <div class="circle"></div>
                <h2>25,000+</h2>
                <h3>Gaming Groups</h3>
              </div>
            </div>

            <h1 className="SubTitle-container">What Our Communtity Says</h1>

            <div className="Resenas-cards">
              {/*Agregar las reseñas*/}
            </div>

            <div className="Mini-info">

              <h2><strong>Connect & Share</strong></h2>

              <h3 className="Info-community">Gaming Group</h3>
              <p>Join specialized groups for your favorite genres and games</p>

              <h3 className="Info-community">Achivement Sharing</h3>
              <p>Show off your gaming accomplishments and milestones</p>

              <h3 className="Info-community">Game Recommendations</h3>
              <p>Get personalized suggetions from fellow gamers</p>

            </div>

            <div className="Img-MiniInfo">
              {/*imagen*/}
            </div>

            <button className="Button-General">Joing Our Community</button>

        </section>

      </div>

    </div>
  );
}
