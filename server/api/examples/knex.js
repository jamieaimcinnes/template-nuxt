import knex from 'knex'

export default defineEventHandler(async event => {
  try {
    /* you have to use a const to reassign knex here */
    const db = knex({
      client: 'mysql2',
      connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: 'hectare_coredev'
      }
    })

    const data = await db('users').limit(10)

    return {
      status: 'success',
      data
    }
  } catch (e) {
    return {
      status: 'error',
      message: e.message,
      data: []
    }
  }
})
