import axios from "axios";

// Класс со статичными методами для подгрузки данных продавцов
export default class VendorService {
    static async GetAll() {
        const response = await axios.get('http://localhost:8000/api/vendors/list');
        return response.data;
    }

    static async GetById(id) {
        const response = await axios.get('http://localhost:8000/api/vendors/' + id);
        return response.data;
    }

    static async Create(name, address) {
        const response = await axios.post('http://localhost:8000/api/vendors/',
            {name: name, address: address}
        );
        return response.data;
    }

    static async Update(id, name, address) {
        const response = await axios.post('http://localhost:8000/api/vendors/',
            {id: id, name: name, address: address}
        );
        return response.data;
    }

    static async Delete(id) {
        const response = await axios.post('http://localhost:8000/api/vendors/',
            {id: id}
        );
        return response.data;
    }
}
