import pool from '~/server/db'

export default defineEventHandler(async (event) => {
  try {
    const connection = await pool.getConnection()
    const [rows] = await connection.query('SELECT * FROM user')
    connection.release()
    // console.log('select', rows)
    return { rows }
  } catch (error) {
    return { error }
  }
})
