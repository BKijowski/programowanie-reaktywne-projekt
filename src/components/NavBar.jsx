import React, {Fragment} from "react";
import '../Styles/NavBarStyle.css'
import {HiSearch} from "react-icons/hi";
import {GiFilmProjector} from "react-icons/gi";


function NavBar() {
    return (
        <Fragment>
            <nav className="">
                <div className='nav-options'>
                    <GiFilmProjector id='logo'></GiFilmProjector>
                    <h1>KoxFilmy</h1>
                    <span>Filmy</span>
                    <span>Seriale</span>
                </div>
                <input type="text" placeholder="wyszukaj"/>
                <HiSearch fontSize={21} color="black" id='search'/>
                <button>
                    Login
                </button>
            </nav>
        </Fragment>
    )
}
export default NavBar