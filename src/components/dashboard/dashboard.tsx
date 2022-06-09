import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { dashboard } from "../../services/dashboard";
import "./dashboard.css";

type Response = {
  _id: string;
  thumbnail_url: string;
  techs: string[];
  company: string;
  price: number;
};

const Dashboard = () => {
  const [spots, setSpots] = useState<Response[]>([]);

  useEffect(() => {
    loadSpots();
  }, []);

  const loadSpots = async () => {
    const user_id = localStorage.getItem("user");

    if (user_id) {
      const response = await dashboard.spotList(user_id);
      setSpots(response.data);
    }
  };

  return (
    <>
      <ul className="spot-list">
      {spots.map((spot) => (
        <li key={spot._id}>
          <header style={{backgroundImage: `url(${spot.thumbnail_url})`}}></header>
          <h2>{spot.company}</h2>
          <p>Techs: {spot.techs.map((tech, index) => {
            if (index === spot.techs.length - 1) {
              return `${tech}.`
            }
            return `${tech},`
          })}</p>
          <p>{spot.price}</p>
        </li>
      ))}
      </ul>
      <Link to='/new'>
        <button className="btn">Cadastrar novo Spot</button>
      </Link>
    </>
  );
};

export default Dashboard;
