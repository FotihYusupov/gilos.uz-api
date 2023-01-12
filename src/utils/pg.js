import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
    connectionString: 'postgres://pyozqwbz:aDD8ilnEFSySVfMHkWFHeI8pzhKwiWgb@snuffleupagus.db.elephantsql.com/pyozqwbz'
})

export const fetchData = async(SQL, ...params) => {
    const client = await pool.connect()
    try{
        const { rows } = await client.query(SQL, params.length ? params : null)
        return rows
    } finally{
        client.release()
    }
}

export const fetch = async(SQL, ...params) => {
    const client = await pool.connect()
    try{
        const { rows: [row] } = await client.query(SQL, params.length ? params : null)
        return row
    } finally{
        client.release()
    }
}