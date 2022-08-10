import React from "react";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function Header() {
  return (
    <header>
      <h1>
        <SportsEsportsIcon sx={{ fontSize: 45 }} className="gameIc"/>
          Obscure Gaming
      </h1>
    </header>
  );
}

export default Header;
