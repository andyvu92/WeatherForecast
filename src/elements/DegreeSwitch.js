import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// styles
const Wrapper = styled.div`
    position: relative;
`;

const StyledInput = styled.input`
    position: absolute;
    left: -300vw;
    visibility: hidden;
`;

const StyledLabel = styled.label`
    width: 80px;
    height: 40px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    border-radius: 40px;
    position: relative;

    &:before{
        content: attr(data-label);
        position: absolute;
        left: ${props => props.$isCelsius ? '4px' : '42px'};
        width: 30px;
        height: 30px;
        border: 1px solid rgba(0,0,0,0.2);
        background-color: ${props => props.$isCelsius ? '#f44336' : '#2196f3'};
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1;
        transition: all .5s ease-in;
    }
`;

const DegreeSwitch = props => {
    const {
        toggleCelsius,
        isCelsius
    } = props
    
    return (
        <Wrapper>
			<StyledInput type="checkbox" />
            <StyledLabel 
                $isCelsius={isCelsius} 
                data-label={isCelsius ? '°C' : '°F'} 
                onClick={() => toggleCelsius(!isCelsius)} 
            />
		</Wrapper>
    )
}

DegreeSwitch.propTypes = {
    toggleCelsius: PropTypes.func,
    isCelsius: PropTypes.bool
}

export default DegreeSwitch
