// request location access and return location data
export const getLocation = () => {
    return new Promise((resolve, reject) => {
        const geolocation = navigator.geolocation;
        
        if (!geolocation) {
            // if the current device is not support geolocation
            reject(new Error('Not Supported'))
        }
    
        geolocation.getCurrentPosition((position) => {
            // get geolocation success, pass lat and long to get address
            resolve(position)
        }, () => {
            // if the user doesn't allow the use of geolocation
            reject (new Error('Permission denied'))
        })
    })
}

// get day of the week
const getWeekDay = (date) => {
    //Create an array containing each day, starting with Sunday.
    const weekdays = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ]
    //Use the getDay() method to get the day.
    const day = date.getDay();
    
    //Return the element that corresponds to that index.
    return weekdays[day];
}

export const formatDate = (rawDate, dateOnly = false) => {
    const dataArr = rawDate.split('-').reverse()

    const monthsArr = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    
    // get basics
    const date = dataArr[0];
    const month = monthsArr[Number(dataArr[1]) - 1];
    const year = dataArr[2];

    // format date
    const theDate = new Date(`${month} ${date}, ${year}`)
    const weekDay = getWeekDay( theDate );

    return dateOnly ? weekDay : `${weekDay} ${month} ${date}, ${year}`
}