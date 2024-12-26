import { atom } from 'recoil';

export const countAtom = atom({
  default: 0,
  key: "counter"
});