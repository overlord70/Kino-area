import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL

export const getData = async(path) => {
    try{
        const res = await axios.get(baseURL + path)
        if(res.status === 200 || res.status === 201) {
            return res.data
        } 
    }  catch (e) {
        alert(e.massege)
        return e
    }
 }

export const postData = async (path, body) => {
    try {
        const res = await axios.post(baseURL + path, body)

        return res
    } catch(e) {
        alert(e.message , 'error')
    }
}

export const  patch = async(path, body) => {
    try{
        const res = await axios.patch(baseURL + path, body)
        if(res.status === 200 || res.status === 201) {
            return res.data
        } 
    } catch(e){
        alert(e.massege)
        return e
    }
 }

export  const deleteData = async (path) => {
    try{
        const res = await axios.post(baseURL + path)
        if(res.status === 200 || res.status === 201) {
            return res.data
        } 
    } catch(e){
        alert(e.massege)
        return e
    }
 }
 export const getSymbols = async () => {
    const symbols = JSON.parse(localStorage.getItem('symbols'))

    if(symbols) {
        return symbols
    }

    try {
        const res = await axios.get('https://api.apilayer.com/fixer/symbols', {
            headers: {
                apikey: import.meta.env.VITE_API_KEY
            }
        })

        if(res.status === 200 || res.status === 201) {
            localStorage.setItem('symbols', JSON.stringify(res.data.symbols))
            return res.data.symbols
        }

    } catch(e) {
        alert(e.message, 'error')
    }
}