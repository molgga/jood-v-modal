<script setup>
import OpenStrategyExample from './open-strategy/OpenStrategyExample.vue';
import CustomStrategyExample from './open-strategy/CustomStrategyExample.vue';
</script>

# OpenStrategy

`OpenStrategy` 란 모달의 열리고 닫힐 때의 스타일(css) 처리를 합니다. 아래 예제에서 보듯이 많이 사용할 법한 몇가지 스타일은 기본적으로 제공하고 있습니다.

<OpenStrategyExample />

```ts
import { StackNormal, StackTop, StackBottom, StackLeft, StackRight } from '@jood/v-modal';

modalService.open({
  component: OpenModal,
  openStrategy: new StackBottom()
  // ...
});
```

## 직접 만들기

OpenStrategy 인터페이스를 구현하면 스타일링과 애니메이션 처리를 얼마든지 확장할 수 있습니다.


<CustomStrategyExample />

```ts
const modalService = useJdModalService();
const onOpen = () => {
  modalService.open({
    component: OpenModal,
    openStrategy: new SlideUpStrategy()
  });
}
```

아래 준비된 몇가지 예제 코드를 참고하세요.

::: code-group

<<< @/v2/example/open-strategy/SlideUpStrategy.ts [SlideUpStrategy.ts]
<<< @/v2/example/open-strategy/SlideLeftStrategy.ts [SlideLeftStrategy.ts]
<<< @/v2/example/open-strategy/FullContentStrategy.ts [FullContentStrategy.ts]
<<< @/v2/example/open-strategy/NoneTransitionStrategy.ts [NoneTransitionStrategy.ts]
<<< @/v2/example/open-strategy/EmptyEntryStrategy.ts [EmptyEntryStrategy.ts]

:::


## defaultOpenStrategy

모달을 열 때마다 `openStrategy` 옵션을 지정해서 모달 마다 개별적인 적용이 가능하고, 기본 OpenStrategy 를 지정할 수도  있습니다.

```ts
modalService.setDefaultOpenStrategy(new SlideUpStrategy());
```

```ts
const modalService = useJdModalService();
const onOpen = () => {
  modalService.open({
    component: OpenModal,
    // openStrategy 를 지정하지 않아도 SlideUpStrategy 으로 열립니다.
  });
}
```