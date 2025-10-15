import React from 'react'
import photo from '../assets/as';
const CardItem = (props) => {

    console.log(props);
    return (
        <div className="card">
            <img src={props.photo} alt={props.name} className="profile-img" />
            <h1>{props.name}</h1>
            <p className="role">{props.jobTitle}</p>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, corporis.
            </p>
            <div className="buttons">
                <a href="https://www.linkedin.com/in/asish-kumar-bera-5b4b59221/" target="_blank" rel="noreferrer">
                    <button className="btn">LinkedIn</button>
                </a>
                <a href="https://github.com/asish-kumar-bera" target="_blank" rel="noreferrer">
                    <button className="btn">GitHub</button>
                </a>
                <a href="https://twitter.com/asishkumarbera" target="_blank" rel="noreferrer">
                    <button className="btn">Twitter</button>
                </a>
            </div>
        </div>
    )
}

export default CardItem