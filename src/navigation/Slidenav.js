import React from 'react';
import "./Slidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Sidenav() {
  return (
    <div className="sidenav">
      <img className= "sidenav__logo" img src="https://www.pngkey.com/png/detail/2-27715_instagram-png-logo-instagram-word-logo-png.png" alt="Instagram"/>
    <div className="sidenav__buttons">
      <button className="sidenav__button">
        <HomeIcon/>
        <span>Página Inicial</span>
      </button>

      <button className="sidenav__button">
        <SearchIcon/>
        <span>Pesquisar</span>
      </button>

      <button className="sidenav__button">
        <ExploreIcon/>
        <span>Explorar</span>
      </button>

      <button className="sidenav__button">
        <ExploreIcon/>
        <span>Reels</span>
      </button>

      <button className="sidenav__button">
        <ChatIcon/>
        <span>Mensagens</span>
      </button>

      <button className="sidenav__button">
        <FavoriteBorderIcon/>
        <span>Notificações</span>
      </button>

      <button className="sidenav__button">
        <AddCircleOutlineIcon/>
        <span>Para criar</span>
      </button>

      <button className="sidenav__button">
        <AccountCircleIcon/>
        <span>Perfil</span>
      </button>

    </div>
    <div className="sidenav__more">
      <button className="sidenav__button">
        <MenuIcon/>
        <span>Mais</span>
      </button>
    </div>
  </div>
  )
}

export default Sidenav