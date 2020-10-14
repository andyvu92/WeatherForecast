import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// components
import Date from '../elements/Date'
import WeatherIcon from '../elements/WeatherIcon'
import Degree from '../elements/Degree'

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
    flex: 1;
    text-align: center;
    padding: 15px;
    animation: ${fadeIn} .5s ease-in;
    @media all and (max-width: 1024px){
        flex: auto;
        width: calc(100%/3 - 30px);
    }

    @media all and (max-width: 767.98px){
        width: calc(100%/2 - 30px);
    }
`;

const DateLabel = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
    margin: 0;
    line-height: 1.2;
`;

const ConditionName = styled.p`
    font-style: italic;
    margin-top: .5rem;
    margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
    width: 75px;
    height: 75px;
    margin: 0 auto 1rem;
    display: block;
    padding: 15px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 50%;
`;

const MinMaxDegree = styled.div`
    font-size: 0.875rem;
`;

const CurrentDegree = styled.div`
    font-size: 1.2rem;
`;


const WeatherDayBox = props => {
    const {
        applicable_date,
        max_temp,
        min_temp,
        the_temp,
        weather_state_abbr,
        weather_state_name,
        today,
        isCelsius
    } = props

    return (
        <Wrapper>
            { today ? (
                <DateLabel>Today</DateLabel>
            ) : (
                <DateLabel>
                    <Date date={applicable_date} weekDayOnly={true} />
                </DateLabel>
            ) }

            <ConditionName>
                {weather_state_name}
            </ConditionName>

            <IconWrapper>
                <WeatherIcon name={weather_state_abbr} />
            </IconWrapper>

            <CurrentDegree>
                <Degree isCelsius={isCelsius} degree={the_temp} />
            </CurrentDegree>

            <MinMaxDegree>
                <Degree isCelsius={isCelsius} degree={min_temp} /> / <Degree isCelsius={isCelsius} degree={max_temp} />
            </MinMaxDegree>
        </Wrapper>
    )
}

WeatherDayBox.propTypes = {
    applicable_date: PropTypes.string,
    max_temp: PropTypes.number,
    min_temp: PropTypes.number,
    the_temp: PropTypes.number,
    weather_state_abbr: PropTypes.string,
    weather_state_name: PropTypes.string,
    today: PropTypes.bool,
    isCelsius: PropTypes.bool
}

export default React.memo(WeatherDayBox)
