import { Dispatch, SetStateAction } from "react";

// キャラクター選択の型定義
export type CharacterSelectProps = {
  setCharacter: Dispatch<SetStateAction<CharacterType>>;
  playAudio: (text: string, speaker: string) => Promise<void>;
};

// キャラクターの型定義
export type CharacterType = {
  value: string;
  label: string;
  word: string;
};

// メッセージの型定義
export type MessageType = {
  text: string;
  type: string;
};
