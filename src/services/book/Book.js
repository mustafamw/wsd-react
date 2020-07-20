import { Config } from '../../config/config';

const BookService = {
    book: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${Config.API}/book/`, {
                method: 'POST',
                body: data,
            })
            .then(response => { 
                return response.json();
            })
            .then(responseData => {
                resolve(responseData);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
}

export default BookService;