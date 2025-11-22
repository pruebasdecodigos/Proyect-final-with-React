import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/Login/InputField.jsx";
import Button from "../components/Login/Button.jsx";
import FormFooter from "../components/Login/FormFooter.jsx";
import "../styles/login/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  // ✅ Recuperar email guardado si existe
  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRemember(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // ⚠️ Primero revisamos si el servidor devolvió 404 o HTML
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("El servidor no devolvió JSON (¿backend apagado?)");
      }

      const data = await response.json();

      if (!response.ok) {
        alert(`❌ ${data.msg || "Error al iniciar sesión"}`);
        return;
      }

      console.log("✅ Login exitoso:", data);

      // Guardar email si "Recuérdame" está activo
      if (remember) localStorage.setItem("savedEmail", email);
      else localStorage.removeItem("savedEmail");

      // Redirigir al home
      navigate("/main");
    } catch (err) {
      console.error("❌ Error al iniciar sesión:", err);
      alert("Error de conexión con el servidor o credenciales incorrectas");
    }
  };

  return (
    <div className="pagina-especial">
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1>Ingreso</h1>

          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Recuérdame
            </label>
          </div>

          <Button type="submit" text="Ingresar" />

          <FormFooter
            text="¿No tienes una cuenta?"
            linkText="Regístrate"
            linkTo="/register"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
