const pg = require('pg')

const db = new pg.Pool({
  // connectionString: "postgresql://postgres:1@localhost:5432/postgres?sslmode=disable"
  connectionString: 'postgresql://postgres.dezdxroprgqwtvwujbrt:yM8XJgPjDVNtAbot@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres?sslmode=disable'
})

db.on('connect', () => {
  console.log('DB Connected')
})

module.exports = db
