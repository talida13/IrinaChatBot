import React, { useEffect } from "react";
import { IonPage, IonContent, IonSpinner } from "@ionic/react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login: React.FC = () => {
  const { login, isLoading, isAuthenticated } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/home");
    }
  }, [isAuthenticated, history]);

  const handleLoginSuccess = (credentialResponse: any) => {
    if (credentialResponse.credential) {
      login(credentialResponse.credential);
      history.push("/home");
    }
  };

  const handleLoginError = () => {
    console.error("Login Failed");
  };

  if (isLoading) {
    return (
      <IonPage>
        <IonContent>
          <div className="login-spinner-page">
            <IonSpinner name="crescent" color="light" />
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonContent className="login-content">
        <div className="login-page">

          <nav className="login-nav">
            <div className="login-nav-brand">
              <div className="login-nav-badge">UAIC</div>
              <div className="login-nav-text">
                <span className="login-nav-name">UAIC International</span>
                <span className="login-nav-sub">Alexandru Ioan Cuza University · Iași</span>
              </div>
            </div>
            <span className="login-nav-pill">INT'L STUDENTS</span>
          </nav>

          <div className="login-body">
            <div className="login-split">

              <div className="login-hero">
                <p className="login-hero-eyebrow">Welcome to Iași, Romania</p>
                <h1 className="login-hero-title">
                  Your journey at{" "}
                  <span className="login-hero-accent">UAIC</span>{" "}
                  starts here 🚀
                </h1>
                <p className="login-hero-body">
                  Everything you need as an international student — from arrival
                  to graduation — guided and simplified in one place.
                </p>
                <div className="login-features">
                  <div className="login-feature">
                    <span className="login-feature-dot" />
                    Language test preparation & support
                  </div>
                  <div className="login-feature">
                    <span className="login-feature-dot" />
                    Transportation guidance across the city
                  </div>
                  <div className="login-feature">
                    <span className="login-feature-dot" />
                    Step-by-step bank account setup
                  </div>
                  <div className="login-feature">
                    <span className="login-feature-dot" />
                    Medical insurance information & assistance
                  </div>
                </div>
              </div>

              <div className="login-card">
                <div className="login-card-top">
                  <div className="login-card-icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.8"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="login-card-title">Student Sign In</p>
                    <p className="login-card-subtitle">Access your international student portal</p>
                  </div>
                </div>

                <div className="login-card-divider" />

                <p className="login-card-label">
                  Sign in with your Google account to get started.
                </p>

                <div className="login-google-wrapper">
                  <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginError}
                    theme="outline"
                    size="large"
                    text="signin_with"
                    width="304"
                  />
                </div>

                <p className="login-card-footer">
                  Your information is stored securely. Manage your privacy
                  settings anytime from your profile.
                </p>
              </div>

            </div>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
