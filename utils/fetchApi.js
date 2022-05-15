import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com' 

export const fetchApi = async(url) => {
    const {data} = await axios.get(url, {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'd4c575c6c4mshdcecd66f46f9465p125240jsn7228640ed1ec'
        }
    })

    return data
}