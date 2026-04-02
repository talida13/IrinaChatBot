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
import { home, chatbubble, help } from "ionicons/icons";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import FAQ from "./pages/FAQ";


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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
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
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
