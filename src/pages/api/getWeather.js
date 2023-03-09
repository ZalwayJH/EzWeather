// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getWeatherData(city) {
  if (city !== "") {
    const apiKey = "1d1baaaea6eba7433b319aa78ccd9806";
    const req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await req.json();
    return data;
  }
}
