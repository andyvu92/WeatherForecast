import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getLocation } from '../lib/global/Helpers';
import { getDataByID } from '../lib/api/Weather'

// components
import Date from '../elements/Date'
import WeatherDayBox from './WeatherDayBox'

// styles
const Wrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
`;

const BoxHeader = styled.div`
  
`;

const CityName = styled.h1`
  
`;

const BoxBody = styled.div`
    display: flex;
    margin-top: 2rem;
`;

const WeatherBox = props => {
    // getLocation()
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))

    const [data, setData] = useState(null)

    useEffect(() => {
        getDataByID(44418).then(res => setData(res))
    }, [])

    return (
        <Wrapper>
            { data ? (
                <React.Fragment>
                    <BoxHeader>
                        <CityName>{data.title}</CityName>
                        <Date date={data.consolidated_weather[0].applicable_date} />
                    </BoxHeader>

                    <BoxBody>
                        { data.consolidated_weather.map((weather, index) => 
                            <WeatherDayBox key={weather.id} today={index === 0} {...weather} /> 
                        ) }
                    </BoxBody>
                </React.Fragment>
            ) : (
                <h1>Loading...</h1>
            ) }
        </Wrapper>
    )
}

export default WeatherBox
