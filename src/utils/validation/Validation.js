
const ValidationService = {
    email: (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    string: (value, min, max) => {
        let valid;
        if(value === undefined || value === null || value === ''){
            valid = false;
        }else if(value.length < min || value.length  > max){
            valid = false;
        }else{
            valid = true;
        }
        return valid;
    }
}

export default ValidationService;