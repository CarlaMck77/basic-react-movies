import React from 'react';

//styles for
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        <Image src={image} alt='move-thumb' />
    </div>
);

export default Thumb;