const API_URL = '/api/location/';

// fetch api
export async function fetchAPI(query) {
    const res = await fetch(`${API_URL}${query}`)

    const json = await res.json()

    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    // return error message if fail to fetch API
    return json.errors ? json.errors : json
}

// get ID by city name
export const searchLocationByName = async (name) => {
    const query = `search/?query=${name}`

    const data = await fetchAPI(query)

    console.log(data)

    return data
} 

// get ID by lat long
export const searchLocationByLatLng = async (lat, lng) => {
    const query = `search/?lattlong=${lat},${lng}`

    const data = await fetchAPI(query)

    return data
} 

// get data by city name
export const getDataByID = async (woeid) => {
    const data = await fetchAPI(woeid)

    return data
} 
