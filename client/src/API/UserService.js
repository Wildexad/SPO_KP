import axios from "axios";

// Класс со статичными методами для подгрузки данных пользователей
export default class UserService {
    static async GetAll() {
        const response = await axios.get('http://localhost:8000/api/users/list');
        return response.data;
    }

    static async GetById() {
        const response = await axios.get(`http://localgost:8000/api/users/info`);
        return response.data;
    }

    static async Register(login, password, email) {
        const response = await axios.post('http://localhost:8000/api/users/register',
            {login: login, password: password, email: email});
        return response;
    }

    static async Login(login, password) {
        const response = await axios.post('http://localhost:8000/api/users/login',
            {login: login, password: password});
        return response.data;
    }

    static async Logout(token) {
        const response = await axios.get('http://localhost:8000/api/users/logout',
            {headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }

    static async RefreshToken(uuid) {
        const response = await axios.post('http://localhost:8000/api/users/refresh-token',
            {uuid: uuid});
        console.log(response.data);
        return response.data;
    }
}
