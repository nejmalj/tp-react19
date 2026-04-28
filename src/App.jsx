import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // La douleur n°1 de React 18
    setIsPending(true);

    // Simulation d'appel API
    await new Promise((res) => setTimeout(res, 1000));

    setMessage(`Inscription réussie pour : ${email}`);
    setIsPending(false);
    setEmail("");
  };

  return (
      <div className="container">
        <h1>Newsletter (Legacy Mode)</h1>
        <form onSubmit={handleSubmit}>
          <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              required
          />
          <button type="submit" disabled={isPending}>
            {isPending ? "Chargement..." : "S'abonner"}
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
  );
}

export default App;