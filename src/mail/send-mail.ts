import axios from 'axios';

const sendEmail = async (email: String, name: String, message: String) => {
    return axios({
        method: 'post',
        url: '/api/send-mail',
        data: {
            name: name,
            email: email,
            message: message,
        },
    });
};

export default sendEmail;