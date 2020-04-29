import React from 'react';
import { CustomButtonContainer } from './custom.styles';


const CustomButton = ({children, ...otherProps}) => {
    return (
        <CustomButtonContainer {...otherProps}>
            {children}
        </CustomButtonContainer>
    );
};

export default CustomButton;