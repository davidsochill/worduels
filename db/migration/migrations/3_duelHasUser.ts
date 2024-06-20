import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('duelHasUser')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('duelId', 'integer', (col) => (
      col
        .references('duel.id')
        .onDelete('cascade')
    ))
    .addColumn('userId', 'integer', (col) => (
      col
        .references('user.id')
        .onDelete('cascade')
    ))
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('duelHasUser').execute()
}