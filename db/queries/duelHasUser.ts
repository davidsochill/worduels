import { db } from "../index";
import { NewDuelHasUser } from "../tables/duelHasUser"

export async function createDuelHasUser (duelHasUser: NewDuelHasUser) {
    return await db.insertInto('duelHasUser')
      .values(duelHasUser)
      .returningAll()
      .executeTakeFirstOrThrow()
}

export async function selectDuelHasUserByRelation (duelId: number, userId: number) {
    return await db.selectFrom('duelHasUser')
        .where('duelId', '=', duelId)
        .where('userId', '=', userId)
        .selectAll()
        .executeTakeFirst()
}