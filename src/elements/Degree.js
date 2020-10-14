import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

// styles
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const CLabel = styled.span`
    animation: ${fadeIn} .5s ease-in;
`;
const FLabel = styled.span`
    animation: ${fadeIn} .5s ease-in;
`;

const Degree = props => {
    const {
        degree,
        isCelsius
    } = props

    const fahrenheit = (degree*1.8000) + 32.00;

    return (
        isCelsius ? (
            <CLabel>{parseInt(degree)}°C</CLabel>
        ) : (
            <FLabel>{parseInt(fahrenheit)}°F</FLabel>
        )
    )
}

Degree.propTypes = {
    degree: PropTypes.number
}

export default Degree
