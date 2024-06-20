import { UserTable } from './user'
import { DuelTable } from './duel'
import { DuelHasUserTable } from './duelHasUser'

export interface Tables {
    user: UserTable
    duel: DuelTable
    duelHasUser: DuelHasUserTable
};