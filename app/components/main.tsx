"use client";

import { useRef, useState } from "react";
import { CharacterType } from "./types";
import { Characters } from "./config";
import CharacterSelect from "./character-select";

// メインコンポーネント
const Main = () => {
  const [character, setCharacter] = useState<CharacterType>(Characters[0]);

  // 音声再生
  const playAudio = async (text: string, speaker: string) => {};

  return (
    <div>
      {/* キャラクター選択 */}
      <CharacterSelect setCharacter={setCharacter} playAudio={playAudio} />
    </div>
  );
};

export default Main;
