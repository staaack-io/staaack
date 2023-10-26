import axios from 'axios';

const sendEmail = async (email: String, subject: String, message: String) => {
    return axios({
        method: 'post',
        url: '/api/send-mail',
        data: {
            email: email,
            subject: subject,
            message: message,
        },
    });
};

export default sendEmail;