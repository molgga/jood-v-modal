<script setup>
import Example from './use-pull-down-close/Example.vue';
</script>

# useJdModalPullDownClose

`useJdModalPullDownClose` 은 `터치(touch)` 환경에서 모달의 패널을 아래로 당겨서 닫는 기능을
간단하게 구현할 수 있도록 제공되는 기능입니다. openStrategy `StackBottom` 과 사용하면 좋습니다.

<Example />

::: code-group
<<< @/v2/example/use-pull-down-close/Example.vue [Example.vue]
<<< @/v2/example/use-pull-down-close/OpenModal.vue{3,22,43} [Modal.vue]
:::