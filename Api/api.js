import axios from 'axios'

async function table (name, email){
    const form = new FormData()
    form.append("name", name)
    form.append("email", email)


  
        const res = await axios.post(`http://192.168.1.10:8000/api/login`, form)
        if (res.status === 200) {
            return true
        } else {
            return false
        }
}

export default table;