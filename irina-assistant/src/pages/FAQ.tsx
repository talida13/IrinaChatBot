import { IonContent, IonPage } from "@ionic/react";
import { useState } from "react";
import "./FAQ.css";
import AppHeader from "../components/AppHeader";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [currentCategory, setCurrentCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const faqs: FAQItem[] = [
    {
      id: "1",
      category: "admissions",
      question:
        "What are the admission requirements for international students?",
      answer:
        "You need a recognized high school diploma (bachelor's) or bachelor's degree (master's), proof of language proficiency (B2 Romanian or B2 English depending on the program), a valid passport, and a medical certificate. All documents must be legalized and translated into Romanian by an authorized translator.",
    },
    {
      id: "2",
      category: "admissions",
      question: "Is the admission process done online?",
      answer:
        "Yes! UAIC accepts online applications at international.uaic.ro. Upload your scanned documents, fill in the application form, and pay the €100 registration fee. The committee reviews your file within 3–4 weeks and notifies you by email.",
    },
    {
      id: "3",
      category: "admissions",
      question: "When are the application deadlines?",
      answer:
        "For the autumn semester: main deadline June 30, late round until August 15. For the spring semester: applications close November 30. Erasmus students follow separate mobility windows set by their home institution.",
    },
    {
      id: "4",
      category: "admissions",
      question: "What documents do I need for the application?",
      answer:
        "You will need: certified diploma and transcript, birth certificate, passport copy, 2 passport photos, medical certificate, proof of language proficiency, proof of tuition fee payment, and the completed application form. All documents must be in Romanian or accompanied by a certified translation.",
    },
    {
      id: "5",
      category: "visa",
      question: "What type of visa do I need to study in Romania?",
      answer:
        "You'll need a Schengen Type D visa (long-stay student visa). You must have: valid passport, acceptance letter from UAIC, proof of financial means (€500/month), proof of accommodation, and travel health insurance. Apply at your nearest Romanian embassy.",
    },
    {
      id: "6",
      category: "visa",
      question: "How do I get a residence permit once I arrive?",
      answer:
        "Within 30 days of arrival, register with the local immigration office (SIRO) in Iași. Bring: passport, visa, accommodation proof, and proof of enrollment at UAIC. The residence permit process is free and typically completes in 1-2 weeks.",
    },
    {
      id: "7",
      category: "visa",
      question: "Can UAIC provide a support letter for my visa application?",
      answer:
        "Yes! Once accepted, we provide an official acceptance letter (invitation letter) for your visa application. This is sent electronically and confirms your enrollment, program duration, and tuition coverage.",
    },
    {
      id: "8",
      category: "housing",
      question: "Is student housing available?",
      answer:
        "Yes! UAIC operates 12 modern dormitories across Iași with single and double rooms. First-year students are prioritized. Housing costs €60-150/month. Apply through our online portal after admission confirmation.",
    },
    {
      id: "9",
      category: "housing",
      question: "What amenities are in the dorms?",
      answer:
        "Dormitories include: furnished rooms, shared kitchens, laundry facilities, study areas, free Wi-Fi, 24/7 security, and community spaces. Some dorms have gyms and sports facilities.",
    },
    {
      id: "10",
      category: "academic",
      question: "What languages are the programs taught in?",
      answer:
        "Most programs are taught in English (100+ bachelor and master degrees). Some specialized programs and all Romanian-language programs are available for those with Romanian language skills (B2 level or higher).",
    },
  ];

  const categories = [
    { value: "all", label: "All" },
    { value: "admissions", label: "Admissions" },
    { value: "visa", label: "Visa & Stay" },
    { value: "housing", label: "Housing" },
    { value: "academic", label: "Academic" },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      currentCategory === "all" || faq.category === currentCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <IonPage>
      <IonContent className="faq-content" fullscreen scrollY={true}>
        <AppHeader />
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything international students ask about UAIC</p>


          <div className="faq-search">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="faq-body">

          <div className="faq-categories">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`cat-chip ${currentCategory === cat.value ? "active" : ""}`}
                onClick={() => setCurrentCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>


          <div className="faq-list">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item ${openItems.has(faq.id) ? "open" : ""}`}
                >
                  <div className="faq-q" onClick={() => toggleItem(faq.id)}>
                    <div className="faq-q-text">{faq.question}</div>
                    <div className="faq-chevron">
                      <svg viewBox="0 0 24 24" fill="none">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  {openItems.has(faq.id) && (
                    <div className="faq-a">
                      <div className="faq-a-inner">
                        <div className="faq-tag">{faq.category}</div>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  color: "var(--muted)",
                }}
              >
                <p>No questions found. Try a different search or category.</p>
              </div>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FAQ;
