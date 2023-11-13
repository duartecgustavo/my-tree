import axios from "axios";

const api = axios.create({
  baseURL: 'https://my-three-api.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export function postTree(data) {
  return api.post('/tree', data)
    .then(response => {
      alert("Arvore plantada com sucesso!")
      return response.data; 
    })
    .catch(error => {
      throw error;
    });
}

export function getTreeCount() {
  return api.get(`/tree/${3}`)
    .then(response => {
      return response.data; 
    })
    .catch(error => {
      throw error;
    });
}