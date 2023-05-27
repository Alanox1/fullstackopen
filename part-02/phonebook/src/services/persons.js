import axios from "axios"

const getAll = () => {
    return axios.get("http://localhost:3001/persons")
            .then(response => response.data)
}

const create = (url,newPerson) => {
    return axios.post(url,newPerson)
            .then(response => response.data)
}

const deletePerson = (url) => {
    return axios.delete(url)
            .then(response => response.data)
}

const update = (url,changedNumber) => {
    return axios.put(url, changedNumber).then(response => response.data)
}
export default {
    getAll,
    create,
    deletePerson,
    update
}