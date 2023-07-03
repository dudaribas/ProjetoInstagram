import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Sugestões para você</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Real Madrid</span>
              <span className="relation">Seguir de volta</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Renato Russo</span>
              <span className="relation">Desde 2010</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Rosani Bertolani</span>
              <span className="relation">Nova no Instagram</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Régina Cazé</span>
              <span className="relation">Seguir de volta</span>
            </div>
          </div>
          <button className="follow__button">Seguir</button>
        </div>
      </div>
    </div>
    
  );
}

export default Suggestions;