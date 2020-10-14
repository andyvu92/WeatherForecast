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