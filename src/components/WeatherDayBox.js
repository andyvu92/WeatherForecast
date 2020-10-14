import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import Date from '../elements/Date'
import WeatherIcon from '../elements/WeatherIcon'
import Degree from '../elements/Degree'

// styles
const Wrapper = styled.div`
    flex: 1;
    text-align: center;
    padding: 15px;
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
        air_pressure,
        applicable_date,
        humidity,
        max_temp,
        min_temp,
        predictability,
        the_temp,
        visibility,
        weather_state_abbr,
        weather_state_name,
        wind_direction,
        wind_direction_compass,
        wind_speed,
        today
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
                <Degree degree={the_temp} />
            </CurrentDegree>

            <MinMaxDegree>
                <Degree degree={min_temp} /> / <Degree degree={max_temp} />
            </MinMaxDegree>
        </Wrapper>
    )
}

WeatherDayBox.propTypes = {

}

export default React.memo(WeatherDayBox)
