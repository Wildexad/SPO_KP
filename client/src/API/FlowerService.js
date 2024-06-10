import axios from "axios";

// Класс со статичными методами для подгрузки данных цветов
export default class FlowerService {
    static async GetAll(token) {
        const response = await axios.get('http://localhost:8000/api/flowers/list',
            {headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }

    static async GetById(id, token) {
        const response = await axios.get('http://localhost:8000/api/flowers/' + id,
            {headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }

    static async Create(name, view, country, season, variety, price, provider_id, vendor_id) {
        const response = await axios.post('http://localhost:8000/api/flowers/',
            {name: name, view: view, country: country, season: season, variety: variety, price: price, provider_id: provider_id, vendor_id: vendor_id}
        );
        return response.data;
    }

    static async Update(id, name, view, country, season, variety, price, provider_id, vendor_id) {
        const response = await axios.post('http://localhost:8000/api/flowers/',
            {id: id, name: name, view: view, country: country, season: season, variety: variety, price: price, provider_id: provider_id, vendor_id: vendor_id}
        );
        return response.data;
    }

    static async Delete(id) {
        const response = await axios.post('http://localhost:8000/api/flowers/',
            {id: id}
        );
        return response.data;
    }
}
