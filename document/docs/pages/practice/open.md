<script setup>
import OpenExample from './components/OpenExample.vue';
import OpenStrategyExample from './components/OpenStrategyExample.vue';
</script>

# 모달 열기

JdModalService 를 통해 컴포넌트를 열 수 있습니다. `useJdModalService` 를 통해 서비스를 사용할 수 있습니다.

```ts
import { defineComponent } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import MyModal from './MyModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const onOpen = () => {
      modalService.open({
        component: MyModal
      });
    };
    return {
      onOpen
    };
  }
});
```

## 옵션

간편하게 적용하거나 해제하기 위한 몇가지 옵션을 제공합니다.

<OpenExample />

```ts
modalService.open({
  component: OpenModal,
  overlayClose: true,
  floatingMode: true,
  disableShadow: true,
  fullHeight: false,
  duration: 240
});
```

## OpenStrategy

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

직접 OpenStrategy 를 만들 수도 있습니다. 자세히 알고 싶다면 [OpenStarategy 란?](../open-strategy/intro.html)를 참고하세요.
