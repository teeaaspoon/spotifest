# SpotiFest

Heading to a music festival and want to get hype for your must-see acts? Use SpotiFest to dynamically generate Spotify playlists for your favourite artists and genres from any music festival from around the world.

# Screenshots

!["Home"]
()

!["Profile"]
()

!["Admin"]
()

!["Landing"]
()

!["iOs"]
()

## Rails API Dependencies
- rails 5.1.6
- ruby 2.3.5
- jwt
- rack-cors
- dotenv
- rspotify
- pry
- pg

## React Dependencies
- @reach/router: ^1.1.1
- axios: ^0.18.0
- chart.js: ^2.7.2
- fuse.js: ^3.2.1
- geolib: ^2.0.24
- i: ^0.3.6
- jwt-decode: ^2.2.0
- node-sass-chokidar": ^1.3.3
- npm-run-all: ^4.1.3
- react: ^16.4.1
- react-autocomplete: ^1.8.1
- react-chartjs-2: ^2.7.4
- react-cookies: ^0.1.0
- react-dom: ^16.4.
- react-redux: ^5.0.7
- react-scripts: 1.1.4
- react-scroll: ^1.7.10
- react-select: ^2.0.0
- react-simple-maps: ^0.12.1
- redux: ^4.0.0
- redux-thunk: ^2.3.0

## React Native Dependencies
- axios: ^0.18.0
- expo: ^29.0.0
- react: 16.4.1
- react-native: 0.56.0
- react-navigation: ^2.11.2
- react-redux: ^5.0.7
- redux: ^4.0.0
- redux-thunk: ^2.3.0

## Getting Started

#### Install Dependencies
-  `bundle install`
-  `rails db:migrate`
-  `cd client`
-  `npm install`
-  `cd ..`
-  `cd spotifestmobile`
-  `npm install`



#### Configure Spotify API
- To set up the app's connection to Spotify, sign up for a free Spotify account  at <https://www.spotify.com>
- Once you are logged in, create an app on this page <https://developer.spotify.com/dashboard/applications>
- Update the project's .env file with the following credentials from your app:
    - `CLIENT_ID`
    - `CLIENT_SECRET`
- On the Spotify app page, click the Edit Settings button, and add the following Redirect URIs:
- http://localhost:3001/auth/spotify/callback
- http://localhost:3001/auth/spotify
- http://localhost:3001
- spotifest://spotify





### Create admin user to populate the DB
- Manually set the admin boolean to true either through a seed.rb, binding.pry, or directly through psql
- On admin page, enter the festival information, add artists to the database, and connect those artists to the festivals they are part of


#### Mobile Configuration
- Make sure you have the latest version of XCode installed to load React Native


#### Run Rails API
- From the project folder
- `rails s -p 3001`


#### Run React Server
- From the project folder
- `cd client`
- `npm start`
- Run in browser at <http://localhost:3000/>

#### Run React Native App Server
- From the project folder
- `cd spotifestmobile`
- `react-native start app`


#### Run the React Native Build
- From the project folder
- `cd spotifestmobile`
- `react-native run ios`
- Simulator will open automatically


#### Notes
- React Native app only builds on iOs, does not work on macOs Mojave Beta

## Developers
- https://github.com/bardia95
- https://github.com/teeaaspoon
- https://github.com/emilyhdong
