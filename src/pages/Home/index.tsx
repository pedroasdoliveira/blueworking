import { ChangeEvent, SyntheticEvent, useState } from "react";
import { user } from "../../services/user";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await user.auth(email);

    const { _id } = response.data;

    localStorage.setItem('user', _id)
    navigate('/dashboard')
  };

  return (
    <>
      <p>
        Cadestre espaço para <strong>devs</strong> e encontre{" "}
        <strong> grande </strong> profissionais
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          placeholder="Informe o seu e-mail"
          onChange={(e) => setEmail(e.target.value) }
          required
          autoComplete="off"
        />

        <button className="btn" type="submit">
          Entrar
        </button>
        <p>{email}</p>
      </form>
    </>
  );
};

export default Home;
