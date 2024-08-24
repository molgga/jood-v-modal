<script setup>
import Example from './use-focus-trap/Example.vue';
</script>

# useJdModalFocusTrap

- 기본으로 포커스 트랩은(focus trap) 사용되며 옵션은 `usedFocusTrap` 입니다.
- `usedFocusTrap`을 `false`로 하고 모달 내에서 `useJdModalFocusTrap`을 사용할 수도 있습니다.
- 포커스 트랩 사용 여부와 관계없이 기본적으로 모달이 열릴때(모달로 포커스) 닫힐 때(모달을 열때) 포커스로 이동이 되도록 되어 있습니다.

<Example />

::: code-group
<<< @/v2/example/use-focus-trap/Example.vue{32} [Example.vue]
<<< @/v2/example/use-focus-trap/OpenModal.vue [Modal.vue]
:::