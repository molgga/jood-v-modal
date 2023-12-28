<script setup>
import OpenExample from './open/OpenExample.vue';
</script>

# 모달 열기

JdModalService 를 통해 컴포넌트를 열 수 있습니다. `useJdModalService` 를 통해 서비스를 사용할 수 있습니다.

::: code-group

```ts [Page.vue]
import { useJdModalService } from '@jood/v-modal';
import MyModal from './MyModal.vue';

const modalService = useJdModalService();
const onOpen = () => {
  modalService.open({
    component: MyModal
  });
};
```

:::

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