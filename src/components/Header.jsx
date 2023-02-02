import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";
import { FiLogIn } from "react-icons/fi";
import {GiFilmProjector} from "react-icons/gi";
import "../Styles/Header.css";

function Header({setSearch}) {
  const isNotLogged = isExpired(localStorage.getItem('token'))
  const name = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).name;
  const userId = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).userId;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    axios.delete(`https://at.usermd.net/api/user/logout/${userId}`, {
      userId: userId
    })
      .then((response) => {
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log("Błąd");
    });
  }

  const searchInput = (value) => {
    setSearch(value);
    navigate("/");
  }
  return (
    <>
      <header className="header">
        <div className="right">
          <GiFilmProjector id='logo'></GiFilmProjector>
          <Link className="test" to="/"><h1>KoxFilmy</h1></Link>
          <div className="header__search">
            <form>
              <input onChange={e=>searchInput(e.target.value)}
                type="text"
                placeholder="wyszukaj"
              />
            </form>
          </div>
        </div>
        <div className="header__login">

          {name===""?
          <div>

                <Link to="/signin"><button>Log In</button></Link>
                <Link to="/signup"><button>Sign Up</button></Link>
                </div>

                :
                <div>
                <p>{name}</p><Link to="/add"><button>Add Film</button></Link>
                <button onClick={logout}>Logout</button>
                </div>
        }
          
        </div>
      </header>
    </>
  );
}

export default Header;