import {
  ColumnType,
    Generated,
    Insertable,
    Selectable,
  } from 'kysely'

export interface UserTable {
  id: Generated<number>
  username: string,
  password: string
}

export type SelectUser = Selectable<UserTable>
export type NewUser = Insertable<UserTable>