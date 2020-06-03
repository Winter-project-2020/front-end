import React from 'react';
import oc from 'open-color';
import styled from 'styled-components';


const LabelContainer = styled.div`
    font-size: 1rem;
    color: ${oc.gray[7]};
    margin-bottom: 0.2rem;
    
    border: none;
    outline: none;
    line-height: 2rem;
    
    padding-left: 1rem;
    padding-right: 2rem;
`;

const Label = ({children}) => (
    <LabelContainer>{children}</LabelContainer>
);

export default Label;