# ReMato（リマト）ランディングページ

Astro 製の静的サイト。`mocks/mock.png` を設計図として実装。

## 開発・ビルド

```sh
npm install
npm run dev        # http://localhost:4321
npm run check      # 型チェック（astro check）
npm run build      # dist/ に静的出力（公開URLは https://lp.remato.ivelico.com）
npm run preview    # ビルド結果の確認
```

公開URLは `astro.config.mjs` の `site`（`https://lp.remato.ivelico.com`）。
別ドメインへ出す場合は `SITE_URL=https://別ドメイン npm run build` で上書きする。
canonical・og:url・og:image はこの値から生成される。

## 公開前に差し替えるもの

| 項目 | 場所 | 現状 |
| --- | --- | --- |
| CTA「今すぐ試す」の遷移先 | `src/content/site.ts` の `links.signup` | 仮URL `#` |
| ヘッダー「ログイン」の遷移先 | `src/content/site.ts` の `links.login` | 仮URL `#` |
| ロゴ | `src/assets/brand/logo.png` | アプリ画面から切り出した 145×53px。高解像度環境ではやや甘いので、正式な SVG ロゴに差し替え推奨 |
| favicon / apple-touch-icon | `public/` | 同上のロゴマークから作成（apple-touch-icon は拡大のため粗い） |

## フォント

Noto Sans JP（SIL OFL 1.1、`font-src/`）から、ページで使う文字だけを含む woff2（400 / 700）を
`scripts/subset-fonts.mjs` で生成し `public/fonts/` に出力する。`npm run dev` / `npm run build` の前に自動実行されるため、
`src/` 内のコピーを変更すれば新しい文字も自動で含まれる（かな・ASCII・和文約物は常に含む）。

## 構成

- `src/content/site.ts` … ページ内のコピー・デモデータをすべて集約（文言修正はここだけ）
- `src/lib/aggregate.ts` … 材料合算ロジック（ビルド時の描画とヒーローのデモで共用）
- `src/components/` … セクション単位のコンポーネント
- `src/content/legal/` … 利用規約・プライバシーポリシーの原文（md）。`/terms/` `/privacy/` で表示。
  法的文書のため一字一句そのまま表示する（`astro.config.mjs` で smartypants を無効化）
- `src/assets/photos/` … 写真（ComfyUI で新規生成、下記）
- `src/assets/app/` … 実アプリ画面（`assets/app/` の外枠をトリミングしたもの）

ヒーローの「つくるもの」は実際にチェックでき、「買うもの」が合算結果に更新される。
JavaScript が無効でも初期状態（すきやき＋白菜スープ）は表示される。

## 写真アセットの出自

すべて ComfyUI（z_image_turbo, t2i）でモックを参照して新規生成。モックからのクロップや i2i は使用していない。

共通スタイル接尾辞：

```
soft natural window daylight, bright airy high-key exposure, neutral warm white balance, gently muted natural colors, light oak wood and white ceramic tones, 50mm lens, shallow depth of field, soft diffused shadows, calm Japanese home interior, editorial lifestyle photograph, photorealistic
```

| ファイル | サイズ | プロンプト（接尾辞を除く） |
| --- | --- | --- |
| `hero-kitchen.png` | 1440×848 | Wide background photograph of a bright Japanese home kitchen counter seen from the front at counter height. The center of the frame from left 15 percent to right 75 percent is a large calm empty area of plain soft white wall above a clear light oak countertop, evenly lit and uncluttered, reserved for overlay text. The right quarter of the frame is filled with large tall close objects: a tall white ceramic utensil crock holding long wooden spatulas and wooden spoons that reach up to the upper third, a round wooden bowl overflowing with fresh green lettuce, red tomatoes and a cucumber partly cut off by the right edge, a folded white and grey striped linen kitchen towel in the lower right corner, green leafy branches of a potted plant hanging in from the top right corner. The left edge of the frame: large softly blurred green houseplant leaves on a white wooden shelf. The countertop edge runs horizontally at three quarters of the frame height. |
| `problem-ingredients.png` | 1216×752 | High angle photograph looking down at a light oak dining table from above at forty five degrees, tightly framed on the table surface. On the left side: a whole fresh napa cabbage, a bunch of green leaf lettuce, two orange carrots and a cluster of brown shimeji mushrooms on a white rectangular tray. In the front center: a clear plastic supermarket tray of thinly sliced marbled raw beef for sukiyaki. On the right side: two hands and forearms in the sleeves of a beige knit sweater, the right hand holding a black pen and writing in an open notebook with plain blank cream pages, the left hand resting flat on the page. The table surface fills the whole background with a softly blurred edge of a white kitchen at the very top. |
| `people-dinner.png` | 1216×752 | Photograph of a Japanese home dinner table set for a family meal, viewed at a low diagonal angle. In the center: a large dark ceramic bowl of nikujaga, simmered beef with potatoes and carrots. Around it: two white rice bowls filled with steamed white rice, a black lacquer bowl of miso soup with tofu and green onion, a small bowl of fresh green salad, a small plate of pickles, wooden chopsticks resting on a bamboo place mat. Light oak wooden table and wooden dining chairs, a green potted plant and a small glass vase softly blurred near a window in the background. |

`public/og.png`（1200×630）は、ヒーロー写真・ロゴ・HTML テキストをブラウザでレンダリングして作成（画像生成ではない）。
