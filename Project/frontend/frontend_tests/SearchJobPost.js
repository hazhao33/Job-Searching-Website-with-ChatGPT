const axios = require('axios');

const searchJobPost = async (search, page) => {
    try {
        const options = {
            method: "GET",
            url: `https://jsearch.p.rapidapi.com/search`,
            headers: {
                "X-RapidAPI-Key": '6745784414msh2584b4f8a420d41p15078djsn628ab64c50c9',
                "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
            },
            params: {
                query: search,
                page: page.toString(),
            },
        };
        const response = await axios.request(options);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
};

module.exports = searchJobPost;
