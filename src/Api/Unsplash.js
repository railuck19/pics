import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID uHx7ghY5_LNPmlklVj_9g9pMilkFA6b-uHiN2w08yKA'
    }
})