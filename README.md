# Nyanko-API

にゃんこ大戦争の日本語API

---

## ⚠️ Replit上で会話したい時は

コードには書かず、右上の吹き出しボタンから `Threads` 機能で会話すること。

---

## 味方キャラjsonファイル

| key | value |
| - | - |
| `name` | 名前 |
| `description` | 説明文 |
| `image` | 画像(現状はGame8より) |
| `health` | 体力 |
| `attack` | 攻撃力 |
| `dps` | DPS |
| `range` | 攻撃範囲(詳細は以下参照) |
| `kb` | ノックバック数 |
| `speed` | 移動速度 |
| `reach` | 射程 |
| `cost` | コスト |
| `frequency` | 攻撃頻度 |
| `animation` | アニメーション時間(攻撃発生) |
| `again` | 再生産時間 |
| `ability` | 特性(詳細は以下参照) |
| `attribute` | 属性(詳細は以下参照) |

### 攻撃範囲について

| number | value |
| - | - |
| 1 | 単体 |
| 2 | 範囲 |
| 3 | 遠方 |
| 4 | 遠方範囲 |