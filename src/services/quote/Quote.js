import { Config } from '../../config/config';

const QuoteService = {
    quote: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${Config.API}/quote/`, {
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

export default QuoteService;