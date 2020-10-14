import React from 'react'
import PropTypes from 'prop-types'

const Degree = props => {
    const {
        degree
    } = props

    return (
        <span>{parseInt(degree)}°C</span>
    )
}

Degree.propTypes = {
    degree: PropTypes.number
}

export default Degree
