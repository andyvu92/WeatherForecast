import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { getDataByID } from '../lib/api/Weather'

// components
import Date from '../elements/Date'
import WeatherDayBox from './WeatherDayBox'
import DegreeSwitch from '../elements/DegreeSwitch'
import PreLoader from './PreLoader'
import LocationInput from './LocationInput'

// styles
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Wrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    animation: ${fadeIn} .5s ease-in;
`;

const BoxHeader = styled.div`
    position: relative;
    padding-right: 100px;
`;

const GeneralInfo = styled.div`
  
`;

const SettingsWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

const CityName = styled.h1`
    margin-bottom: 0;
`;

const BoxBody = styled.div`
    display: flex;
    margin-top: 2rem;
    flex-wrap: wrap;
`;

const WeatherBox = props => {
    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState(null)
    const [isCelsius, toggleCelsius] = useState(true)

    const getDataHandler = (id) => {
        getDataByID(id).then(res => setData(res))
    }

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 10000)
    }, [])

    return (
        <Wrapper>
            { loaded ? (
                data ? (
                    <React.Fragment>
                        <BoxHeader>
                            <GeneralInfo>
                                <CityName>{data.title}</CityName>
                                <Date date={data.consolidated_weather[0].applicable_date} />
                            </GeneralInfo>

                            <SettingsWrapper>
                                <DegreeSwitch isCelsius={isCelsius} toggleCelsius={toggleCelsius} />
                            </SettingsWrapper>
                        </BoxHeader>

                        <BoxBody>
                            { data.consolidated_weather.map((weather, index) => 
                                <WeatherDayBox key={weather.id} {...weather} today={index === 0} isCelsius={isCelsius} /> 
                            ) }
                        </BoxBody>
                    </React.Fragment>
                ) : (
                    <LocationInput getDataHandler={getDataHandler} />
                )
            ) : (
                <PreLoader />
            ) }
        </Wrapper>
    )
}

export default WeatherBox
