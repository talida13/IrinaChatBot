import React, { useEffect, useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { useAuth } from "../context/AuthContext";
import "./MyRequests.css";
import AppHeader from "../components/AppHeader";

// ─── tipuri ───────────────────────────────────────────────
interface BuddyRequest {
  request_id: string;
  created_at: string;
  student_name: string;
  student_email: string;
  romanian_level: string;
  format: string;
  availability: string;
  topic: string;
  status: "open" | "accepted";
  accepted_by?: number;
  accepted_at?: string;
  volunteer_name?: string;
  volunteer_email?: string;
}

// ─── CONFIG ───────────────────────────────────────────────
const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

// ─── helper ───────────────────────────────────────────────
function formatDate(iso: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function levelColor(level: string) {
  const l = level?.toLowerCase();
  if (l === "basic") return "level-basic";
  if (l === "intermediate") return "level-intermediate";
  if (l === "advanced") return "level-advanced";
  return "level-basic";
}

const MyRequests: React.FC = () => {
  const { user } = useAuth();
  const userEmail = user?.email || "";
  const [requests, setRequests] = useState<BuddyRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userEmail) return;

    setLoading(true);
    fetch(
      `${APPS_SCRIPT_URL}?action=get_requests&email=${encodeURIComponent(
        userEmail
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setRequests(data.requests);
        } else {
          setError("Could not load requests.");
        }
      })
      .catch(() => setError("Network error. Please try again."))
      .finally(() => setLoading(false));
  }, [userEmail]);

  return (
    <IonPage>
      <IonContent className="mr-content" fullscreen scrollY={true}>
        <AppHeader />

        {/* ── Hero ── */}
        <div className="mr-hero">
          <div className="hero-greeting">My Activity</div>
          <h2 className="mr-hero-title">
            My <span>Buddy</span> Requests
          </h2>
          <p className="mr-hero-sub">
            Track your conversation buddy sessions and see who you've been
            matched with.
          </p>
        </div>

        {/* ── Body ── */}
        <div className="mr-body">
          {loading && (
            <div className="mr-loading">
              <div className="mr-spinner" />
              <p>Loading your requests…</p>
            </div>
          )}

          {error && !loading && (
            <div className="mr-error">
              <div className="mr-error-icon">⚠️</div>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && requests.length === 0 && (
            <div className="mr-empty">
              <div className="mr-empty-icon">🤝</div>
              <h3>No requests yet</h3>
              <p>
                Start a conversation with our assistant to find your Romanian
                buddy!
              </p>
              <a href="/chat" className="mr-cta">
                Chat with Assistant
              </a>
            </div>
          )}

          {!loading && !error && requests.length > 0 && (
            <>
              <div className="section-label">
                {requests.length} REQUEST{requests.length > 1 ? "S" : ""}
              </div>

              <div className="mr-list">
                {requests.map((req) => (
                  <div key={req.request_id} className="mr-card">
                    {/* Status badge */}
                    <div className="mr-card-top">
                      <span
                        className={`mr-status ${
                          req.status === "accepted"
                            ? "status-accepted"
                            : "status-open"
                        }`}
                      >
                        {req.status === "accepted" ? "✓ Matched" : "⏳ Open"}
                      </span>
                      <span className="mr-date">
                        {formatDate(req.created_at)}
                      </span>
                    </div>

                    {/* Info grid */}
                    <div className="mr-info-grid">
                      <div className="mr-info-item">
                        <span className="mr-info-label">Level</span>
                        <span
                          className={`mr-level-badge ${levelColor(
                            req.romanian_level
                          )}`}
                        >
                          {req.romanian_level}
                        </span>
                      </div>
                      <div className="mr-info-item">
                        <span className="mr-info-label">Format</span>
                        <span className="mr-info-value">{req.format}</span>
                      </div>
                      <div className="mr-info-item">
                        <span className="mr-info-label">Availability</span>
                        <span className="mr-info-value">
                          {req.availability}
                        </span>
                      </div>
                      <div className="mr-info-item">
                        <span className="mr-info-label">Topic</span>
                        <span className="mr-info-value">{req.topic}</span>
                      </div>
                    </div>

                    {/* Volunteer match */}
                    {req.status === "accepted" && req.volunteer_name && (
                      <div className="mr-volunteer">
                        <div className="mr-volunteer-avatar">
                          {req.volunteer_name.charAt(0).toUpperCase()}
                        </div>
                        <div className="mr-volunteer-info">
                          <div className="mr-volunteer-label">
                            Your buddy
                          </div>
                          <div className="mr-volunteer-name">
                            {req.volunteer_name}
                          </div>
                          <a
                            href={`mailto:${req.volunteer_email}`}
                            className="mr-volunteer-email"
                          >
                            {req.volunteer_email}
                          </a>
                        </div>
                        <div className="mr-volunteer-icon">🎉</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyRequests;
