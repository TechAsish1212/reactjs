import React from 'react';

import CardItem from './CardItem';
import photo, { photo2 } from '../assets/as';


const Card = () => {
    return (
        <div className="card-container">
            <CardItem photo={photo} jobTitle="Web Developer" name="Asish Kumar Bera" />
            <CardItem photo={photo2} jobTitle="Backend Developer" name="John Doe" />
        </div>
    );
};

export default Card;
