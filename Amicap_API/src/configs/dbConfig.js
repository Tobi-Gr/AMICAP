import 'dotenv/config'

const DBConfig =
{
    host : process.env.DB_HOST ?? '',
    database : process.env.DB_DATABASE ?? '',
    user : process.env.DB_USER ?? '',
    port : process.env.DB_PORT ?? 6543,
    password : process.env.DB_PASSWORD ?? ''
}

export default DBConfig;