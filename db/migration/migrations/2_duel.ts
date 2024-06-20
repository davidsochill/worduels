import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('duel')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('ownerUserId', 'integer', (col) => (
      col
        .references('user.id')
        .onDelete('cascade')
    ))
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('duel').execute()
}