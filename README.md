<!-- README about the project -->
# RN News

This project is a simple news app built with React Native that uses the UI kit [Tamagui](https://tamagui.dev/) for the style, and get the articles from [NewAPI](newsapi.org).

It allows you to discover fresh articles from France, or search for any topic to discover pertinent articles.

This app uses:
- React Navigation version `6.x.x`
- Redux, reduxjs/toolkit, redux-persist
- Tamagui version `1.76.x`
- Expo SDK version `49.x.x`
- Eslint version `8.x.x`
- Typescript version `5.x.x`

## Installation

### Prerequisites:

- Node.js and npm installed on your system. You can download them from [nodejs.org](nodejs.org).
- Watchman (for Linux or macOS users).

### Step 1: Install dependencies
Run the following command to install the packages:

```bash
npm install
```

### Step 2: Start the Development Server
To start the development server for your project, run the following command:

```bash
npx expo
```
This command will start the Expo development server. From there, you can run your app on a simulator/emulator or a physical device using the Expo Go app.

### Step 4: Set Up a Simulator/Emulator or Physical Device

If you have a physical device, install the "Expo Go" app from your device's app store and scan the QR code displayed in your browser to run your app.

If you want to use a simulator or emulator, follow the Expo documentation to set up the development environment for iOS (Xcode for macOS) or Android (Android Studio for Windows/macOS/Linux).

# API Documentation
The API is built with Express. It is located in the `api/` folder.

## Installation

### Prerequisites:

- Node.js and npm installed on your system. You can download them from [nodejs.org](nodejs.org).

### Step 1: Install dependencies
Run the following command from the `api/` folder to install the packages:

```bash
npm install
```

### Step 2: Start the API
To start your API, run the following command:
```bash
node index.js
```

### Step 3: Testing the API

The server will be running at http://localhost:4000

## Deploying to the Vercel server

Simply push your changes on the main branch to deploy your changes.
The Vercel server is running at https://rn-news-pablogiraud-carrier-epitecheus-projects.vercel.app

## Endpoints

|Endpoint|Method|Request Body|Success Response|Failure Response|
|--------|------|------------|----------------|----------------|
|`/login`|`POST`|`{ username: string, password: string }`|Status: `200` - `{ message: string }`|Status: `401` - `{ message: string }`|

# Status of the project

To do:
- [ ] Fix `onScrollToTopPress` (the scroll doesn't to the very top of the list)
- [ ] Add a loading state to the Login button
- [ ] Implement a real API
- [ ] Add categories to the Home page to discover articles by category
- [ ] Ability to save an article or a search in the favorites
- [ ] Ability to create an alert when a new article is released on a search from the favorites
- [ ] Ability to sort and filter the results of a search
- [ ] Enhance design
