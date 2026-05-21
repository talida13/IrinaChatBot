import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { home, chatbubble, help, logOut } from "ionicons/icons";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/variables.css";
import "./App.css";

setupIonicReact();

const AppContent: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <IonReactRouter>
      {!isAuthenticated ? (
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
      ) : (
        <IonTabs>
          <IonRouterOutlet>
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/chat" component={Chat} />
            <PrivateRoute path="/faq" component={FAQ} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" className="app-tab-bar">
            <IonTabButton tab="home" href="/home" className="tab-btn">
              <IonIcon aria-hidden="true" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="chat" href="/chat" className="tab-btn">
              <IonIcon aria-hidden="true" icon={chatbubble} />
              <IonLabel>Assistant</IonLabel>
            </IonTabButton>
            <IonTabButton tab="faq" href="/faq" className="tab-btn">
              <IonIcon aria-hidden="true" icon={help} />
              <IonLabel>FAQ</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="logout"
              onClick={logout}
              className="tab-btn logout-btn"
            >
              <IonIcon aria-hidden="true" icon={logOut} />
              <IonLabel>Logout</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      )}
    </IonReactRouter>
  );
};

const App: React.FC = () => {
  const GOOGLE_CLIENT_ID =
    import.meta.env.VITE_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID";
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <IonApp>
          <AppContent />
        </IonApp>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
