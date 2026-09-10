# Aisai Marching Band BLOWING 公式Webサイト

[![Netlify Status](https://api.netlify.com/api/v1/badges/975ee2c7-8495-4e02-95b8-73f49c94598c/deploy-status)](https://app.netlify.com/projects/aisaimb/deploys)

<div align="center">
  <img src="https://github.com/user-attachments/assets/e885afd3-ce61-4dee-b7e0-f41e3a8035fe" alt="公式Webサイト トップページのスクリーンショット" width="30%">
  <p>
    Aisai Marching Band BLOWINGは、愛西市を拠点に音楽が楽しめるマーチングバンドです。<br>
    地域に愛されるバンドをめざして、小学5年生から社会人まで楽しく活動しています。
  </p>
</div>

## サイト概要

<http://aisaimb.netlify.app/>

Aisai Marching Band BLOWINGの公式Webサイトです。\
Astroフレームワークを用いて構築されており、バンドの活動紹介、ニュース、イベント情報、入団案内などを掲載しています。

| スマホ画面 | PC・タブレット画面 |
| - | - |
| <img width="1082" height="2402" alt="aisaimb.netlify.appのスクリーンショット(Pixel 7)" src="https://github.com/user-attachments/assets/19fc7305-80c6-4e8e-ad90-54f7e1028d77" /> | <img width="2048" height="1536" alt="aisaimb.netlify.appのスクリーンショット(iPad Mini)" src="https://github.com/user-attachments/assets/6f777a19-3115-405e-9418-cd8329fad2e8" /> |

## 主なディレクトリ構成

```text
/
├── src/
│   ├── assets/         # ウェブサイトで使用する画像
│   ├── components/     # Astroコンポーネント群
│   ├── layouts/        # レイアウト用コンポーネント
│   ├── news/           # ニュース記事（Markdown形式）
│   └── pages/          # 各ページ（Astro形式）
└── package.json
```

## 開発・ビルド方法

1. 依存パッケージのインストール

```bash
npm install
```

2. 開発サーバー起動

```bash
npm run dev
```

<http://localhost:4321>で確認できます。

3. 本番ビルド

```bash
npm run build
```

`./dist/`にビルドしたサイトが追加されます。

## 使用技術

| 種類 | 内容 |
| - | - |
| フロントエンド | Astro, TypeScript, Markdown, Bootstrap Icons |
| バックエンド | なし |
| データベース | なし |
| コード管理 |  Git, GitHub |
| デプロイ | Netlify |
| その他 | Visual Studio Code |

## ライセンス

articles, photos, logo: &copy; 2025 Aisai Marching Band BLOWING\
software: MIT License

## Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

### 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
