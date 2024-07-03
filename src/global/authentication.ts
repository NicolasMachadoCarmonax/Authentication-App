import { atom } from 'recoil'

export const authenticationEmailAtom = atom<string>({
    key: 'authenticationEmailAtom',
    default: ""
});