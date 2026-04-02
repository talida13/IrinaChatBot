import { IonContent, IonPage } from "@ionic/react";
import { useState, useRef, useEffect } from "react";
import { send } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import "./Chat.css";
import { Webchat } from "@botpress/webchat";

interface Message {
  id: string;
  text: string;
  user: boolean;
  timestamp: Date;
}

const Chat: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="chat-content" fullscreen scrollY={false}>
        <Webchat clientId={import.meta.env.VITE_BOTPRESS_CLIENT_ID} />
      </IonContent>
    </IonPage>
  );
};

export default Chat;
