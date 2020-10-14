import React from 'react'
import PropTypes from 'prop-types'

import { formatDate } from '../lib/global/Helpers'

const Date = props => {
    const {
        date,
        weekDayOnly
    } = props

    const formattedDate = formatDate(date, weekDayOnly)

    return <time dateTime={formattedDate}>{formattedDate}</time>
}

Date.propTypes = {
    date: PropTypes.string,
    weekDayOnly: PropTypes.bool
}

export default Date
