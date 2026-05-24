import { IonContent, IonPage } from "@ionic/react";
import irinaLogo from "../assets/irina-logo.svg";
import "./Home.css";
import AppHeader from "../components/AppHeader";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="home-content" fullscreen scrollY={true}>
        <AppHeader />
        <div className="home-hero">
          <div className="hero-greeting">Welcome to Iași, Romania</div>
          <h2 className="hero-title">
            Your journey at <span>UAIC</span> starts here 🚀
          </h2>
          <p className="hero-sub">
            Everything you need as an international student — in one friendly
            place.
          </p>
          <div className="hero-chips">
            <div className="hero-chip">Erasmus+</div>
            <div className="hero-chip">Degree Programs</div>
            <div className="hero-chip">Exchange</div>
          </div>
        </div>


        <div className="home-body">

          <div className="section-label">QUICK ACCESS</div>
          <div className="quick-actions">
            <a className="qa-card" href="/chat" style={{ textDecorationLine: "none" }}>
              <div className="qa-icon blue">💬</div>
              <div className="qa-title">Chat with Assistant</div>
              <div className="qa-sub">
                Ask about admissions, visas & campus life
              </div>
            </a>
            <a className="qa-card" href="/my-requests" style={{ textDecorationLine: "none" }}>
              <div className="qa-icon green">🤝</div>
              <div className="qa-title">My Buddy Requests</div>
              <div className="qa-sub">Track your matches and sessions</div>
            </a>
            <a className="qa-card" href="/faq" style={{ textDecorationLine: "none" }}>
              <div className="qa-icon gold">❓</div>
              <div className="qa-title">Browse FAQ</div>
              <div className="qa-sub">Instant answers to common questions</div>
            </a>
            <div className="qa-card">
              <div className="qa-icon green">🗺️</div>
              <div className="qa-title">Campus Map</div>
              <div className="qa-sub">Navigate all 15 faculties in Iași</div>
            </div>
            <div className="qa-card">
              <div className="qa-icon purple">📅</div>
              <div className="qa-title">Academic Calendar</div>
              <div className="qa-sub">Key dates, semesters & exams</div>
            </div>
          </div>


          <div className="section-label">USEFUL INFORMATION</div>
          <div className="info-banner">
            <div className="info-banner-icon">📍</div>
            <div>
              <h3>Location & Transport</h3>
              <p>
                Iași is in northeast Romania, easily accessible by train, bus,
                or flight from major European cities.
              </p>
            </div>
          </div>
          <div className="info-banner">
            <div className="info-banner-icon">🏠</div>
            <div>
              <h3>Student Housing</h3>
              <p>
                UAIC provides affordable accommodation in modern dormitories
                across the city with excellent facilities.
              </p>
            </div>
          </div>
          <div className="info-banner">
            <div className="info-banner-icon">🎓</div>
            <div>
              <h3>Academic Programs</h3>
              <p>
                Choose from 100+ bachelor and master programs taught in English
                across all faculties.
              </p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
