import { Config } from '../../config/config';

const ContactUsService = {
    contactus: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${Config.API}/contactus/`, {
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

export default ContactUsService;