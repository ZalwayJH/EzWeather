# EzWeather

weather-app is a very simple current weather by city website using Nextjs and the OpenWeatherMap API. I set out on this project in an attempt to see whether i could create completely original, easy to understand 3D weather images using Blender and then integrate them into the website. Created using npx create-next-app@latest.

![Preview](/weather-app/src/images/EzWeather.JPG?raw=true)

:eye_speech_bubble: Here is a link to the site:

[EzWeather](https://www.youtube.com/watch?v=FPEjf9Da7dk)

## You can find OpenWeatherMap.org here

[OpenWeatherMap.org](https://openweathermap.org/api)

## About

I set out on this project in hopes of learning more about Nextjs and to deepen my knowledge of Blender. I also wished to combine both of those skill sets to create something very simple, accessible and easy to quickly find out the current weather status of any city in the world.
The app is divided into 4 main parts, the search bar, the location information and refresh button, the 3D weather image and the weather information cards.
The user can use the search bar to type in the name of any city, once they press press enter or click the search icon the name of the city is sent to the OpenWeatherMap API and it returns all of the currently available information about the weather at that location right now. This information includes the temperature, the "feels like" temperature, humidity and the wind speed, as well as a weather code for their own built in weather icons. I use that code to reference which of my own weather icons to use instead.

### My 3D weather images

![Broken-Clouds](/weather-app/public/MyWeatherIcons/brokenClouds.png?raw=true)
![Few-Clouds](/weather-app/public/MyWeatherIcons/fewClouds.png?raw=true)
![Thunderstorm](/weather-app/public/MyWeatherIcons/thunderStorm.png?raw=true)
![Snow](/weather-app/public/MyWeatherIcons/snow.png?raw=true)
![Rain](/weather-app/public/MyWeatherIcons/rain.png?raw=true)
![Clear-Sky](/weather-app/public/MyWeatherIcons/clearSky.png?raw=true)
![Scattered-Clouds](/weather-app/public/MyWeatherIcons/scatteredClouds.png?raw=true)
![Clear-Sky-Night](/weather-app/public/MyWeatherIcons/clearSkyNight.png?raw=true)
![Few-Clouds-Night](/weather-app/public/MyWeatherIcons/fewCloudsNight.png?raw=true)
![Rain-Night](/weather-app/public/MyWeatherIcons/rainNight.png?raw=true)
![Snow-night](/weather-app/public/MyWeatherIcons/snowNight.png?raw=true)

#### Features

- Simple modern web design
- Search for locations by city name
- Refresh button for easy updating
- Very simple, readable icons and information.

#### Technologies

- [Nextjs](https://nextjs.org/)
- [Blender](https://www.blender.org/)
- [React](https://react.dev/)

### Installation

Firstly, make sure you have Node.js installed.

Clone this repository on your local machine

```

git clone https://github.com/ZalwayJH/Colour-Palette.git
```

Navigate into the repository

```

cd weather-app
```

Install dependencies

```

npm install
```

```

npm run dev
```

Built with Node Version:
v18.7.0

Next Version:
v13.2.3

React Version:
v18.2.0

Blender Version:
v3.4
