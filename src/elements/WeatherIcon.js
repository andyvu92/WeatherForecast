import React from 'react'
import PropTypes from 'prop-types'

const WeatherIcon = props => {
    const {
        name
    } = props

    const iconUrl = `https://www.metaweather.com/static/img/weather/${name}.svg`

    return (
        <img src={iconUrl} alt={name} />
    )
}

WeatherIcon.propTypes = {
    name: PropTypes.string
}

export default WeatherIcon
