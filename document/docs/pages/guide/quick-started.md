# 시작하기

## 설치하기

> @jood/v-modal 은 `vue` >= v3.x 이상을 지원합니다.

npm 또는 yarn 으로 설치할 수 있습니다.

```bash
$ yarn add @jood/v-modal
```

```bash
$ npm install @jood/v-modal
```

### CDN

```html
<script src="https://unpkg.com/@jood/v-modal"></script>
<link rel="stylesheet" href="https://unpkg.com/@jood/v-modal/dist/v-modal.css" />
```

---

## 세팅하기

> @jood/v-modal 을 사용하기 위해 몇가지 기본적인 세팅이 필요합니다.

### main.ts

- 기본 스타일을 위한 CSS 파일을 import 합니다.

<<< @/pages/guide/codes/main.ts{3}

### App.vue

- `provideJdModalService` 로 JdModalService 를 주입해 줍니다.
- `JdModalProvider` 컴포넌트를 적절한 위치에 배치해 합니다.

<<< @/pages/guide/codes/App.vue{4,10,17}

기본적인 세팅이 끝났습니다. 이제 `@jood/v-modal` 을 사용할 수 있습니다. 😎
