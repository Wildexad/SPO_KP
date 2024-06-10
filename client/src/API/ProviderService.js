import axios from "axios";

// Класс со статичными методами для подгрузки данных поставщиков
export default class ProviderService {
    static async GetAll() {
        const response = await axios.get('http://localhost:8000/api/providers/list');
        return response.data;
    }

    static async GetById(id) {
        const response = await axios.get('http://localhost:8000/api/providers/' + id);
        return response.data;
    }

    static async Create(name, address, email) {
        const response = await axios.post('http://localhost:8000/api/providers/',
            {name: name, address: address, email: email}
        );
        return response.data;
    }

    static async Update(id, name, address, email) {
        const response = await axios.post('http://localhost:8000/api/providers/',
            {id: id, name: name, address: address, email: email}
        );
        return response.data;
    }

    static async Delete(id) {
        const response = await axios.post('http://localhost:8000/api/providers/',
            {id: id}
        );
        return response.data;
    }
}
