import "./home.css"
import FondoMinecraft from "../assets/FondoMinecraft.png"
import creatorImg from "../assets/react.svg"
function Home() {
  return (
    <main className="home-container">
      <div className="content-wrapper">
        <div className="title-container">
          <h1 className="futuristic-title">GameTracker</h1>
          <button
            className="cyber-button"
            onClick={() => document.getElementById('cards')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explora Juegos
          </button>
        </div>

        <section id="cards" className="card">
          <div className="card-left">
            <img src={FondoMinecraft} alt="Card estatica Minecraft" />
            <div className="bid-info">
              <p>Minecraft</p>
              <h3>1.29.2 version</h3>
              <button>Show Now</button>
            </div>
          </div>

          <div className="card-right">
            <p className="date">Oct 25, 2025, 02:01 PM</p>
            <h2>top10 Mejores Juegos 2025</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, a illum enim minima nisi aspernatur dolorum hic quidem consequuntur voluptas modi corrupti possimus atque molestias maiores laboriosam blanditiis debitis pariatur.   
            </p>
            <div className="creator">
              <img src={creatorImg} alt="Creator" />
              <span>Evgeniy Korsak</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
