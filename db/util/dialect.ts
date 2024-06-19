import { Pool } from 'pg'
import { PostgresDialect } from 'kysely'
import dotenv from 'dotenv';

dotenv.config();

export const dialect = new PostgresDialect({
  pool: new Pool({
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT as string),
    max: parseInt(process.env.DB_POOL_MAX as string),
  })
});