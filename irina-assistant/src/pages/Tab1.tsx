import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { Webchat } from "@botpress/webchat";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <div style={{ height: "100%", minHeight: "80vh", padding: "16px" }}>
          <Webchat
            clientId={import.meta.env.VITE_BOTPRESS_CLIENT_ID}
            style={{
              width: "100%",
              height: "75vh",
              display: "flex",
            }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
