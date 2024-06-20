import { db } from "../index";
import { NewDuel } from "../tables/duel"

export async function createDuel (duel: NewDuel) {
    return await db.insertInto('duel')
      .values(duel)
      .returningAll()
      .executeTakeFirstOrThrow()
}

export async function selectDuelById (duelId: number) {
    return await db.selectFrom('duel')
      .where('id', '=', duelId)
      .selectAll()
      .executeTakeFirst()
}