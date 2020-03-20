module.exports = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/recipes.sqlite3'
  },
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foriegn_keys=ON', done)
    }
  }
};
