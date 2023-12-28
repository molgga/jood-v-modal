# 시작하기

## 설치하기

@jood/v-modal 은 `vue` >= v3.x 이상을 지원합니다.

::: code-group

```sh [yarn]
$ yarn add @jood/v-modal
```

```sh [npm]
$ npm install @jood/v-modal
```

```html [CDN]
<script src="https://unpkg.com/@jood/v-modal"></script>
<link rel="stylesheet" href="https://unpkg.com/@jood/v-modal/dist/v-modal.css" />
```

:::


## 세팅하기

@jood/v-modal 을 사용하기 위해 몇가지 기본적인 세팅이 필요합니다.

- 기본 스타일을 위한 CSS 파일을 import 합니다.
- `provideJdModalService` 로 JdModalService 를 주입해 줍니다.
- `JdModalProvider` 컴포넌트를 추가합니다.

### Vue 3

::: code-group

<<< @/v2/guide/codes/main.ts{1} [main.ts]

<<< @/v2/guide/codes/App.vue{4,12} [App.vue]

:::


### Nuxt 3

::: code-group

<<< @/v2/guide/codes/nuxt/nuxt.config.ts{2} [nuxt.config.ts]

<<< @/v2/guide/codes/nuxt/app.vue{5,10,12} [app.vue]

:::


