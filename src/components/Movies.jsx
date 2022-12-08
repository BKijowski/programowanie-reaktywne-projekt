import React, {Fragment} from "react";
import '../Styles/Movies.css'
function Movies() {
    return (
        <Fragment>
        <div className='container'>
            <div className='slot'>Film1</div>
            <div className='slot'>Film2</div>
            <div className='slot'>Film3</div>
            <div className='slot'>Film4</div>
            <div className='slot'>Film5</div>
            <div className='slot'>Film6</div>
        </div>
            <div className='container'>
                <div className='slot'>Film7</div>
                <div className='slot'>Film8</div>
                <div className='slot'>Film9</div>
                <div className='slot'>Film10</div>
                <div className='slot'>Film11</div>
                <div className='slot'>Film12</div>
            </div>
        </Fragment>
    )
}
export default Movies