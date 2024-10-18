import { create } from "zustand";

const useNewWord = create((set) => ({
  word: "",

  setWord: (wordNew) => {
    if (!wordNew.trim()) return; // avoid setting an empty string

    set(() => ({
      word: wordNew,
    }));
  },
}));

export default useNewWord;
