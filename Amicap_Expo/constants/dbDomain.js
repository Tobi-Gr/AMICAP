import 'dotenv/config'

const DBDomain =
{
    domain : process.env.DB_DOMAIN ?? '',
}

export default DBDomain;