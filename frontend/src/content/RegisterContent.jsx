import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/Login/InputField.jsx";
import Button from "../components/Login/Button.jsx";
import FormFooter from "../components/Login/FormFooter.jsx";
import "../styles/login/register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("❌ Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      // ⚠️ Validar formato JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("El servidor no devolvió JSON (¿backend apagado?)");
      }

      const data = await response.json();

      if (!response.ok) {
        alert(`❌ ${data.msg || "Error en el registro"}`);
        return;
      }

      alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
      navigate("/login");
    } catch (err) {
      console.error("❌ Error al registrar:", err);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <div className="pagina-especial">
      <div className="wrapper">
        <form onSubmit={handleRegister}>
          <h1>Registro</h1>

          <InputField
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputField
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <InputField
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button type="submit" text="Crear cuenta" />

          <FormFooter
            text="¿Ya tienes una cuenta?"
            linkText="Inicia sesión"
            linkTo="/login"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
