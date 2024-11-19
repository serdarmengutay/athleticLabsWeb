import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./ClubStyle.css";
import axios from "axios";

const Club = () => {
  const { id } = useParams();
  const [clubData, setClubData] = useState([]);

  const getClubData =async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/club/${id}`);
      console.log(response.data);
      setClubData(response.data)
    } catch (error) {
      console.error(error);
    }
  } 

  useEffect(() => {
    getClubData();
  }, [])
  

  return (
    <div className="club-container">
      <div className="club-header">
        <img src={clubData.logo} alt="Club Logo" className="club-logo" />
        <h1 className="club-name">{clubData.name}</h1>
      </div>
      <div className="players-grid">
        {clubData.athletes?.map((player, index) => (
          <div key={index} className="player-card">
            <h2 className="player-name">{player.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Club;
