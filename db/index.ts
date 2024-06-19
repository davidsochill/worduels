import { Tables } from './tables/index.js'
import { Kysely } from 'kysely'
import { dialect } from './util/dialect'

export const db = new Kysely<Tables>({
  dialect,
});