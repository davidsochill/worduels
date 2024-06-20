import {
    Generated,
    Insertable,
    Selectable,
} from 'kysely'

export interface DuelHasUserTable {
    id: Generated<number>
    duelId: number,
    userId: number,
}

export type SelectDuelHasUser = Selectable<DuelHasUserTable>
export type NewDuelHasUser = Insertable<DuelHasUserTable>