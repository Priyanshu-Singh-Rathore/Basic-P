const button = document.getElementById('search-button');
const input = document.getElementById('city-input');

const cityname = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const cityTime = document.getElementById('city-time');


async function getData(cityname) {
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=689f8b11ee1043c0a69122859262908&q=${cityname}&aqi=yes`
    );

    return await response.json();
}


button.addEventListener('click', async () => {

    const cityName = input.value;

    const result = await getData(cityName);

    cityname.innerText =
        `${result.location.name}, ${result.location.country}`;

    temperature.innerText =
        `Temperature: ${result.current.temp_c}°C`;

    cityTime.innerText =
        `Time: ${result.location.localtime}`;
});
