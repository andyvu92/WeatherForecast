import React from 'react'
import { getLocation } from '../lib/global/Helpers'
import styled from 'styled-components'

// styles
const Wrapper = styled.div`
    
`;

const CityName = styled.h1`
  
`;

const WeatherBox = props => {
    getLocation()
        .then(res => console.log(res))
        .catch(err => console.log(err))

    return (
        <Wrapper>
            <CityName>Sydney</CityName>
        </Wrapper>
    )
}

export default WeatherBox
