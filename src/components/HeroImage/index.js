import React from 'react';

//styles
import { Wrapper, Content, Text } from './HeroImage.styles';


const HeroImage = ({ image, title, text, ...rest}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;