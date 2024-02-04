const userRegisterValidator = {
    'user_name': {
        isLength: {
            options: {
                max: 255
            },
            errorMessage : "Username Max Length is 255"
        },
        notEmpty: {
            errorMessage: "Username cannot be Empty"
        },
    },
    'email_id': {
        isEmail: {
            errorMessage : "Invalid Email Id",
        },
        notEmpty: {
            errorMessage: "EmailId cannot be Empty",
        }
    },
    'mobile_no': {
        isLength: {
            options: {
                min: 10
            }
        },
        isMobilePhone: {
            errorMessage: "Invalid Phone Number"
        }
    },
    'user_type': {
        isIn: {
            options: [['Individual', 'Aggregator', 'Recycler', 'Enterprise']]
        }
    }
    
};

module.exports = userRegisterValidator;