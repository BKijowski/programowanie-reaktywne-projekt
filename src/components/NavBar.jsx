import React, {Fragment} from "react";
import '../Styles/NavBarStyle.css'
import {HiSearch} from "react-icons/hi";
import {GiFilmProjector} from "react-icons/gi";
import {Link} from "react-router-dom";


function NavBar() {
    return (
        <Fragment>
            <nav className="">
                <div className='nav-options'>
                    <GiFilmProjector id='logo'></GiFilmProjector>
                    <Link to="/"><h1>KoxFilmy</h1></Link>
                    <span>Filmy</span>
                    <span>Seriale</span>
                </div>
                <input className="input" type="text" placeholder="wyszukaj"/>
                <HiSearch fontSize={21} color="black" id='search'/>
                <Link to="/signin"><button>
                    Sign in
                </button></Link>
                <Link to="/signup"><button>
                    Sign up
                </button></Link>
            </nav>
        </Fragment>
    )
}
export default NavBar