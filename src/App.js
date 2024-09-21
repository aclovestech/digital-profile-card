import "./App.css";
import ExternalLinks from "./ExternalLinks";
import Info from "./Info";

function App() {
  return (
    <>
      <main className="profile-card">
        <div className="profile-card__picture">
          <img
            src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Brian"
            alt="avatar"
          />
        </div>
        <Info />
        <ExternalLinks />
      </main>
    </>
  );
}

export default App;
