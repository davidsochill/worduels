import {
    Generated,
    Insertable,
    Selectable,
  } from 'kysely'

export interface UserTable {
  id: Generated<number>
  username: string
  password: string
}

export type Person = Selectable<UserTable>
export type NewPerson = Insertable<UserTable>