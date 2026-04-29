import { useState } from "react";

// Sous-composant pour le bouton (pour simuler un design system)
// Problème : on est obligé de lui passer "loading" en prop
function SubmitButton({ loading }) {
  return (
      <button type="submit" disabled={loading}>
        {loading ? "Calcul en cours..." : "S'inscrire à la newsletter"}
      </button>
  );
}

function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ loading: false, error: null, data: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, data: null });

    try {
      // Simulation API
      await new Promise((res) => setTimeout(res, 1500));

      if (email.includes("error")) throw new Error("Email déjà utilisé !");

      setStatus({
        loading: false,
        error: null,
        data: `Bienvenue, ${firstName} ! Vérifiez vos emails.`
      });
      setFirstName("");
      setEmail("");
    } catch (err) {
      setStatus({ loading: false, error: err.message, data: null });
    }
  };

  return (
      <div className="container">
        <h1>Newsletter (Complex Legacy)</h1>
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Prénom"
              required
          />
          <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
          />

          {/* On doit passer le state manuellement ici */}
          <SubmitButton loading={status.loading} />
        </form>

        {status.error && <p style={{ color: "red" }}>{status.error}</p>}
        {status.data && <p style={{ color: "green" }}>{status.data}</p>}
      </div>
  );
}

export default App;