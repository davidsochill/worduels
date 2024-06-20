import {
    Generated,
    Insertable,
    Selectable,
} from 'kysely'

export interface DuelTable {
    id: Generated<number>
    ownerUserId: number,
}

export type SelectDuel = Selectable<DuelTable>
export type NewDuel = Insertable<DuelTable>