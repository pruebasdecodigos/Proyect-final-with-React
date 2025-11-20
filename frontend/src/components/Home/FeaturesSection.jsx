import "../../styles/pages-styles/HomeStyles/HomeSections.css";
import "../../styles/pages-styles/HomeStyles/HomeFeatures.css";


export default function FeaturesSection() {

  return (
    <div className="HomeSections">
      <section className="HomeSections__features">
        
        <h2 className="HomeSections__title">
          Todo lo que necesitas para gestionar tu{" "}
          <span className="HomeSections__highlight">Mundo Gamer</span>
        </h2>

        <p className="HomeSections__subtitle--features">
          Desde seguir tu progreso hasta descubrir nuevas aventuras, GexStudio
          ofrece todas las herramientas que necesitas para la mejor experiencia de juego.
        </p>

        <div className="HomeSections__cardsGrid">

          {/* CARD 1 */}
          <div className="HomeSections__cardFeature">
            <div className="HomeSections__titleWithIcon">
            <div className="HomeSections__iconBox blue">🎮</div>
            <h3>Gestión de Juegos Fácil</h3>
            </div>
            <p>
              Añade juegos a tu biblioteca al instante. Organiza por plataforma, género o
              estado. Mantén el control de lo que estás jugando, has completado o quieres
              jugar a continuación.
            </p>
            <a className="HomeSections__learnMore">Learn More →</a>
          </div>

          {/* CARD 2 */}
          <div className="HomeSections__cardFeature">
            <div className="HomeSections__titleWithIcon">
            <div className="HomeSections__iconBox green">📊</div>
            <h3>Seguimiento de Progreso</h3>
            </div>
            
            <p>
              Monitorea tus horas de juego, tasas de finalización y logros. Establece
              objetivos y observa cómo tus estadísticas de juego crecen con el tiempo.
            </p>
            <a className="HomeSections__learnMore">Learn More →</a>
          </div>

          {/* CARD 3 */}
          <div className="HomeSections__cardFeature">
            <div className="HomeSections__titleWithIcon">
              <div className="HomeSections__iconBox orange">⭐</div>
              <h3>Reseñas y Calificaciones</h3>
            </div>
            
            <p>
              Califica tus juegos y escribe reseñas detalladas. Comparte tus opiniones con
              la comunidad y ayuda a otros a descubrir grandes títulos.
            </p>
            <a className="HomeSections__learnMore">Learn More →</a>
          </div>

          {/* CARD 4 */}
          <div className="HomeSections__cardFeature">
            <div className="HomeSections__titleWithIcon">
              <div className="HomeSections__iconBox pink">💬</div>
              <h3>Conexión con la Comunidad</h3>
            </div>
            <p>
              Conéctate con otros gamers, comparte tu biblioteca, descubre juegos populares
              y participa en discusiones sobre tus títulos favoritos.
            </p>
            <div className="Learn More"></div>
            <a className="HomeSections__learnMore">Learn More →</a>
          </div>

        </div>

      </section>
    </div>
  );
}
