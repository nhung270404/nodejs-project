require('dotenv').config();
const axios = require('axios');

async function getWeather() {
    const API_KEY = process.env.API_KEY;
    const city = "Hanoi";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);

        console.log("Thời tiết hiện tại");
        console.log("Thành phố:", response.data.name);
        console.log("Nhiệt độ:", response.data.main.temp + "°C");
        console.log("Trạng thái:", response.data.weather[0].description);

    } catch (error) {
        console.error("Lỗi khi gọi API:", error.response?.data || error.message);
    }
}

getWeather();
