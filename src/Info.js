export default function Info() {
  return (
    <div className="profile-card__info">
      <h1 className="profile-card__info__name">Allain Carl Mojado</h1>
      <h2 className="profile-card__info__position">Web Developer</h2>
      <h3 className="profile-card__info__website">aclovestech.com</h3>

      <div className="profile-card__info__buttons">
        <button
          className="profile-card__info__buttons__button"
          id="email_button"
        >
          <i class="fa-regular fa-envelope"></i>
          Mail
        </button>
        <a href="https://linkedin.com">
          <button
            className="profile-card__info__buttons__button"
            id="linkedin_button"
          >
            <i class="fa-brands fa-linkedin"></i>
            LinkedIn
          </button>
        </a>
      </div>

      <div className="profile-card__info__secondary-info">
        <h2 className="profile-card__info__secondary-info__about">About</h2>
        <p>
          I am a frontend developer with a particular interest in creating
          intuitive and user-friendly interfaces. I aim to make complex systems
          approachable and easy to navigate, even for those without a technical
          background. I am constantly seeking new knowledge to further improve
          my skills.
        </p>
        <h2 className="profile-card__info__secondary-info__interests">
          Interests
        </h2>
        <ul className="profile-card__info__secondary-info__interests__list">
          <li>Music - Alternative, Pop, RnB, K-pop</li>
          <li>Video Games - Minecraft, Apex Legends, LoL</li>
          <li>Movies - Whiplash, Past Lives, Beautiful Boy</li>
          <li>Shows - Breaking Bad, Better Call Saul, Barry</li>
          <li>Anime - Attack on Titan, Dragon Ball, Your Name.</li>
        </ul>
      </div>
    </div>
  );
}
