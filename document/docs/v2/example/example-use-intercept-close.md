<script setup>
import Example from './use-intercept-close/Example.vue';
</script>

# useJdModalInterceptClose

`useJdModalInterceptClose` 은 modalRef 닫기(결과 전달)을 감지하기 위해 매번 반복될 수 있는 
observer 구독 부분을 간단하게 콜백을 받을 수 있도록 제공하는 기능입니다.

<Example />

::: code-group
<<< @/v2/example/use-intercept-close/Example.vue{19,26,30} [Example.vue]
<<< @/v2/example/use-intercept-close/OpenModal.vue{22,26} [Modal.vue]
:::