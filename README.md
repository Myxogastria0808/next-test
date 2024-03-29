# Next.js のテスト環境構築

## チートシート

[https://qiita.com/tasty_uni/items/76c6197d7b8ac6e784eb](https://qiita.com/tasty_uni/items/76c6197d7b8ac6e784eb)

## 参考サイト

[https://qiita.com/masakiwakabayashi/items/204ed2b32254bbc9a5c1](https://qiita.com/masakiwakabayashi/items/204ed2b32254bbc9a5c1)

[https://zenn.dev/jinku/articles/f7e1279798b879](https://zenn.dev/jinku/articles/f7e1279798b879)

[https://qiita.com/yusei53/items/a8e397e856cc96e7c329](https://qiita.com/yusei53/items/a8e397e856cc96e7c329)

[https://nextjs.org/docs/app/building-your-application/testing/jest](https://nextjs.org/docs/app/building-your-application/testing/jest)

```batch
npx create-next-app --ts
yarn
wsl rm -rf package-lock.json
yarn add jest jest-environment-jsdom
yarn add @testing-library/user-event @testing-library/react @testing-library/jest-dom
yarn add ts-jest @types/jest typescript@latest ts-node@latest
npm init jest@latest
```

### `npm init jest@latest`

```text
√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... yes
√ Choose the test environment that will be used for testing » jsdom (browser-like)
√ Do you want Jest to add coverage reports? ... no
√ Which provider should be used to instrument code for coverage? » v8
√ Automatically clear mock calls, instances, contexts and results before every test? ... no

✏️  Modified C:\Users\admin\Documents\work-space\javascript\Next\next-test\package.json

📝  Configuration file created at C:\Users\admin\Documents\work-space\javascript\Next\next-test\jest.config.ts
```

## `jest.config.ts`

```typescript
import type { Config } from "jest";
import nextJest from "next/jest.js";

//* nextJest({})
//Next.jsのためのJest設定を生成する関数
const createJestConfig = nextJest({
  // JestがNext.jsの設定を読み込むためのディレクトリを指定
  dir: "./",
});

//Jestのカスタム設定オブジェクト
const customJestConfig: Config = {
  coverageProvider: "v8",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
```

## `package.json`

```json
{
  "scripts": {
    "test": "jest --verbose",
    "test:watch": "jest --watch --verbose"
  }
}
```

## ディレクトリ構造

※`__test__`ディレクトリにテストのプログラムを書いたファイルを入れる

```batch
src
 └─app
    │  favicon.ico
    │  globals.css
    │  layout.tsx
    │  page.module.css
    │  page.tsx
    │
    └─__test__
        page.test.tsx
```
