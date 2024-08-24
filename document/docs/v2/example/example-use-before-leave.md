<script setup>
import Example from './use-before-leave/Example.vue';
</script>

# useJdModalBeforeLeave

모달 내에서 beforeunload, popstate 를 제어하기 위한 훅을 제공합니다.

- 페이지에서 완전히 나가려 할 때는 beforeunload 이벤트가 동작합니다.
- popstate 가 일어날 때는 window.confirm 이 동작합니다.
- 커스텀 디자인UI 를 위한 기능은 제공하지 않습니다. (기능 보류)

<Example />

::: code-group
<<< @/v2/example/use-before-leave/Example.vue [Example.vue]
<<< @/v2/example/use-before-leave/OpenModal.vue{3,22,43} [Modal.vue]
:::