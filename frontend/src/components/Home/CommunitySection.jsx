  import "../../styles/pages-styles/HomeStyles/HomeSections.css";
  import "../../styles/pages-styles/HomeStyles/HomeCommunity.css";

  export default function CommunitySection() {
    return (
      <div className="HomeSections HomeSections--community">
        <section className="HomeSections__community">
          <h1 className="HomeSections__title">
            Join the Ultimate{" "}
            <span className="HomeSections__highlight">Game Community</span>
          </h1>
          <p>
            Connect with passionate gamers worldwide, share your experiences,
            and discover your next favorite game through our vibrant gaming
            community.
          </p>

          <div className="HomeSections__iconContainer">
            <div className="HomeSections__icon">
              <div className="HomeSections__circle"></div>
              <h2>50,000+</h2>
              <h3>Active Gamers</h3>
            </div>

            <div className="HomeSections__icon">
              <div className="HomeSections__circle"></div>
              <h2>100,000+</h2>
              <h3>Games Tracked</h3>
            </div>

            <div className="HomeSections__icon">
              <div className="HomeSections__circle"></div>
              <h2>500,000+</h2>
              <h3>Reviews Written</h3>
            </div>

            <div className="HomeSections__icon">
              <div className="HomeSections__circle"></div>
              <h2>25,000+</h2>
              <h3>Gaming Groups</h3>
            </div>
          </div>

          <h1 className="HomeSections__subtitle">What Our Community Says</h1>

          <div className="Resenas-cards">{/* Reseñas */}</div>

          <div className="HomeSections__miniInfo">
            <h2><strong>Connect & Share</strong></h2>

            <h3 className="HomeSections__infoTitle">Gaming Group</h3>
            <p>Join specialized groups for your favorite genres and games.</p>

            <h3 className="HomeSections__infoTitle">Achievement Sharing</h3>
            <p>Show off your gaming accomplishments and milestones.</p>

            <h3 className="HomeSections__infoTitle">Game Recommendations</h3>
            <p>Get personalized suggestions from fellow gamers.</p>
          </div>

          <button className="HomeSections__button--primary">
            Join Our Community
          </button>
        </section>
      </div>
    );
  }
