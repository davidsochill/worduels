import { db } from "../index";
import { SelectUser, NewUser } from "../tables/user"

export async function createUser (user: NewUser) {
    return await db.insertInto('user')
      .values(user)
      .returningAll()
      .executeTakeFirstOrThrow()
}

export async function selectUserByUsername (username: string) {
  return await db.selectFrom('user')
    .where('username', '=', username)
    .selectAll()
    .executeTakeFirst()
}