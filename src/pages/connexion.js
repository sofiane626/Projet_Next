import { useState } from "react";
import { useRouter } from "next/router";

export default function Connexion() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );

    if (user) {
      // Mettre à jour l'état d'authentification
      localStorage.setItem("isAuthenticated", true);
      // Rediriger vers la page d'accueil
      router.push("/");
    } else {
      setError("Email ou mot de passe incorrect");g
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    // Vérifier que les champs email et password ne sont pas vides
    if (
      registerEmail.trim() === "" ||
      registerPassword.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("Email et mot de passe obligatoires");
      return;
    }

    // Vérifier que les mots de passe correspondent
    if (registerPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    // Ajouter l'utilisateur au tableau de données (ici un simple tableau)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email: registerEmail, password: registerPassword });
    localStorage.setItem("users", JSON.stringify(users));

    // Mettre à jour l'état d'authentification
    localStorage.setItem("isAuthenticated", true);
    // Rediriger vers la page d'accueil
    router.push("/");
  };

  return (
    <div className="super-box">
      <div className="login-box">
        <p>Login</p>
        <form onSubmit={handleLoginSubmit}>
          <div className="user-box">
            <input
              required
              name="email"
              type="text"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              required
              name="password"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          {error && <p className={"eroor"}>{error}</p>}
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Connexion
          </button>
        </form>
      </div>
      <div className="login-box test5">
        <p>Inscription</p>
        <form onSubmit={handleRegisterSubmit}>
          <div className="user-box">
            <input
              required
              name="email"
              type="text"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              required
              name="password"
              type="password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              required
              name="password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label>Confirm-Password</label>
          </div>
          {error && <p className={"eroor"}>{error}</p>}
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Inscription
          </button>
        </form>
      </div>
    </div>
  );
}
