# weather-app

weather-app is a very simple current weather by city website using Nextjs and the OpenWeatherMap API. I set out on this project in an attempt to see whether i could create completely original, easy to understand 3D weather images using Blender and then integrate them into the website. Created using npx create-next-app@latest.

:eye_speech_bubble: Here is a link to the site:

[weather-app](https://www.youtube.com/watch?v=FPEjf9Da7dk)

## You can find OpenWeatherMap.org here

[OpenWeatherMap.org](https://openweathermap.org/api)

## About

I set out on this project in hopes of learning more about Nextjs and to deepen my knowledge of Blender. I also wished to combine both of those skill sets to create something very simple, accessible and easy to quickly find out the current weather status of any city in the world.
The app is divided into 4 main parts, the search bar, the location information and refresh button, the 3D weather image and the weather information cards.
The user can use the search bar to type in the name of any city, once they press press enter or click the search icon the name of the city is sent to the OpenWeatherMap API and it returns all of the currently available information about the weather at that location right now. This information includes the temperature, the "feels like" temperature, humidity and the wind speed, as well as a code for the weather their own built in weather icons. I use that code to reference which of my own weather icons to use instead.

In the future I would like to improve this by creating animated weather images instead of static ones, however i would most likely require a more powerful computer to improve the the render time of each image.

#### Features

- Simple modern web design
- Search for locations by city name
- Refresh button for easy updating
- Very simple and readable icons and information.

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
