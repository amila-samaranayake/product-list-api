const {
    SERVER_PORT,
    APP_TOKEN,
    APP_VERSION
} = process.env;

export const PORT = SERVER_PORT || 3010;
export const APPLICATION_TOKEN = APP_TOKEN;
export const APPLICATION_VERSION = APP_VERSION || "0.3.0";
export const DUMMYURL = "https://dummyjson.com/";