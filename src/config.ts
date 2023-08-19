import config from 'config'

export const APPCONFIG ={
    PORT : config.get('PORT')
}

export const DBCONFIG ={
    DB_USER: config.get('DB_USER'),
    DB_PASS: config.get('DB_PASS'),
    DB_NAME: config.get('DB_NAME')
}

