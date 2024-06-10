import axios from "axios";

// Класс со статичными методами для подгрузки данных админов
export default class AdminService {
    static async GetAll() {
        const response = await axios.get('http://localhost:8000/api/admins/list');
        return response.data;
    }

    static async GetById() {
        const response = await axios.get(`http://localgost:8000/api/admins/info`);
        return response.data;
    }

    static async Login(login, password) {
        const response = await axios.post('http://localhost:8000/api/admins/login',
            {login: login, password: password});
        return response.data;
    }

    static async Logout(token) {
        const response = await axios.get('http://localhost:8000/api/admins/logout',
            {headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }

    static async RefreshToken(uuid) {
        const response = await axios.post('http://localhost:8000/api/admins/refresh-token',
            {uuid: uuid});
        console.log(response.data);
        return response.data;
    }
}
