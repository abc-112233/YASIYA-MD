const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~sEAEzQwa#PPNd0yNKWDRIovyB1yg3w_f9xwYkqSJ1XAeyE228XB0'
};
