# Surfforecast App 🌊

##### An app that queries a weather API to provide a better weather forecast for surfing on your favorite beaches.

###### An API mande with

<p>
  <img src="https://cdn.svgporn.com/logos/typescript-icon.svg" alt="typescript" width="30" height="30"/>
  <img src="https://img.icons8.com/color/452/mongodb.png" alt="mongodb" width="35" height="35"/>
  <img src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="nodejs" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/docker-icon.svg" alt="docker" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/eslint.svg" alt="eslint" width="30" height="30"/>
  <img src="https://cdn.svgporn.com/logos/jest.svg" height="30" alt="jest">
  <img src="https://cdn.svgporn.com/logos/heroku-icon.svg" height="30" alt="heroku">
  <img src="https://stormglass.io/wp-content/uploads/2019/05/Stormglass-Circle-1400.svg" height="30" alt="storm-glass">
  <img src="https://cdn.svgporn.com/logos/react.svg" height="30" alt="react">
</p>

## About this project 📚

This is an API made with Node.js, Typescript and Mongodb, witch the users can register your favorite beaches, and get a forecast for each beach in certain times. In addition, based in the forecasts, will be calculated a rating, to choose the best beach to surf.

## Building 🔧

You'll need [Node.js](https://nodejs.org), [Mongodb](https://www.mongodb.com/) and i recommend that you have installed the [Yarn](https://yarnpkg.com/getting-started/install). After, you can run the scripts below...

#### Project structure ⚙

- _**.github**_ ❯ github workflows setup files
- _**src**_ ❯ main application code (layers)
  - _**config**_ ❯ specifics configuration files
  - _**@types**_ ❯ custom types definition files
  - _**domain**_ ❯ application models and usecases
  - _**implementation**_ ❯ application internal usecases implementations
  - _**infra**_ ❯ external libs implementations
  - _**presentation**_ ❯ layer witch communicates the application with external environment
  - _**main**_ ❯ components composition layer
- _**tests**_ ❯ functional tests code
- _**.**_ ❯ general configuration files

###### Database | Docker 🐳

If you don't have [mongodb server](https://www.mongodb.com/) installed locally, you can run the database with [docker](https://www.docker.com/). With the command below, a [mongo image](https://hub.docker.com/_/mongo) will be pulled, and mongodb will be started at port _27017_ into your _localhost_, in a container called _surfforecast-mongo_.

```docker
docker run -d -p 27017:27017 --rm --name surfforecast-mongo mongo
```

And you can run the app completely using docker-compose, will be created 2 services (api and mongo), and a network called surfforecast

```docker-compose
docker-compose up
```

###### Cloning Repository

```cloning
git clone https://github.com/gabriellopes00/surfforecast.git
cd surfforecast
yarn install || npm install
```

###### Running API (development environment)

```development
yarn dev || npm run dev
```

###### Generating Build and running build

```build
yarn build && yarn start || npm run build && npm run start
```

###### Tests (jest) 🧪

- _**Coverage**_ ❯ `yarn test:ci`
- _**Watch**_ ❯ `yarn test:watch`
- _**Unit**(.spec)_ ❯ `yarn test:unit`
- _**Clear Cache**_ ❯ `yarn test:cache`

###### Lint and Style (eslint | prettier) 🎭🖋

- _**Lint**(fix)_ ❯ `yarn lint:fix`
- _**Style**(fix)_ ❯ `yarn style:fix`

###### Statistics of the types of commits 📊📈

Following the standard of the [Conventional Commits](https://www.conventionalcommits.org/).

- _**feature** commits(amount)_ ❯ `git shortlog -s --grep feat`
- _**test** commits(amount)_ ❯ `git shortlog -s --grep test`
- _**refactor** commits(amount)_ ❯ `git shortlog -s --grep refactor`
- _**chore** commits(amount)_ ❯ `git shortlog -s --grep chore`
- _**docs** commits(amount)_ ❯ `git shortlog -s --grep docs`
- _**build** commits(amount)_ ❯ `git shortlog -s --grep build`
- _**fix** commits(amount)_ ❯ `git shortlog -s --grep fix`

## Contact 📱

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/gabriellopes00)](https://github.com/gabriellopes00)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-lopes-6625631b0/)](https://www.linkedin.com/in/gabriel-lopes-6625631b0/)
[![Twitter Badge](https://img.shields.io/badge/-Twitter-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/_gabrielllopes_)](https://twitter.com/_gabrielllopes_)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-D14836?&style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabrielluislopes00@gmail.com)](mailto:gabrielluislopes00@gmail.com)
[![Facebook Badge](https://img.shields.io/badge/facebook-%231877F2.svg?&style=flat-square&logo=facebook&logoColor=white)](https://www.facebook.com/profile.php?id=100034920821684)
[![Instagram Badge](https://img.shields.io/badge/instagram-%23E4405F.svg?&style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/_.gabriellopes/?hl=pt-br)
[![StackOverflow Badge](https://img.shields.io/badge/stack%20overflow-FE7A16?logo=stack-overflow&logoColor=white&style=flat-square)](https://stackoverflow.com/users/14099025/gabriel-lopes?tab=profile)
