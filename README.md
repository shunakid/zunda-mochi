# Next.js と ChatGPT、VOICEVOX を使用した音声チャットアプリ

## 概要

複数のキャラクターが使用できますので、キャラクターを選択できるようにしています。
キャラクターを選択すると自己紹介の音声が流れます。
ChatGPT に質問した回答を、選択したキャラクターが読み上げます。
チャットの履歴を参照できるようにもしています。
ずんだもんを選択した時のみイラストが表示され、GSAP を使用してアニメーションをしています。

## セットアップ

clone してきたら package.json に明示されているすべてのパッケージをインストールします。

```sh
npm i
```

VOICEVOX のエンジンは Docker を使用して起動します。
Docker をインストールされていない方はインストールしてください。

Docker を起動しておいてください。

```sh
docker-compose up
```

下記のように表示されたら、VOICEVOX エンジンが起動しています。

```
voicevox_engine_1 | INFO: Application startup complete.
voicevox_engine_1 | INFO: Uvicorn running on http://0.0.0.0:50021 (Press CTRL+C to quit)
```
