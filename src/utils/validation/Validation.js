
const ValidationService = {
    regexValidateNumber: /^[0-9\-()+.\s]{10,50}$/,
    email: (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    validateNumber: (number) => {
        var re = new RegExp(ValidationService.regexValidateNumber);
        return re.test(number);
    },
    validatePostcode: (postcode) => {
        const postcodes = postcode.replace(/\s/g, "");
        var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
        return regex.test(postcodes);
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