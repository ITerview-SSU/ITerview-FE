import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const {persistAtom} = recoilPersist({
    key: "recoil-persist-atom",
    storage: localStorage,
});

export const userState = atom({
    key: "userState",
    default: null,
    effects_UNSTABLE: [persistAtom],
})