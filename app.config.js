import 'dotenv/config';

export default {
  expo: {
    name: "mobile_movie_app",
    slug: "movie-infoapp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/splash-icon.png",
    scheme: "mobilemovieapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,

    ios: {
      supportsTablet: true,
    },

    android: {
      package: "com.rishu.mobilemovieapp",
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/splash-icon.png",
        backgroundImage: "./assets/images/splash-icon.png",
        monochromeImage: "./assets/images/splash-icon.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
    },

    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/splash-icon.png",
    },

    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#000000",
          },
        },
      ],
      "expo-web-browser",
    ],

    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },

    extra: {
      tmdbToken: process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN,
      appwriteEndpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
      appwriteProjectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
      appwriteDatabaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
      appwriteCollectionId: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID,

      eas: {
        projectId: "76904c4d-a392-448a-b60d-be62bde142fe",
      }
    },

    runtimeVersion: {
      policy: "appVersion",
    },

    updates: {
      url: "https://u.expo.dev/76904c4d-a392-448a-b60d-be62bde142fe"
    }
  }
};
