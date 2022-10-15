<script setup>
import GeneralUsageExample from './components/GeneralUsageExample.vue'
</script>

# 일반적인 사용법

> 💊 예제를 보기 좋게 하기 위해 버튼과 같은 UI 는 `element-plus` 가 사용 되었습니다.

아래는 아주 간단한 모달을 여는 예제 입니다.

<GeneralUsageExample />

### GeneralUsageExample.vue

`useJdModalService` 를 통해 서비스(`JdModalService`)를 사용할 수 있습니다.

<<< @/pages/guide/components/GeneralUsageExample.vue{14}

### GeneralUsageModal.vue

`useJdModalRef` 를 통해 모달 참조자(`JdModalRef`)를 사용할 수 있습니다.

> `JdModalRef` 는 `JdModalService` 를 통해 열린 모달 인스턴스로 모달에 전달된 data 와 option 정보 등을 보관하고 close 와 같이 모달이 할 수있
> 는 기능을 관리하는 객체입니다.

- 모달 컴포넌트에는 props 로 무언가를 전달하지 않습니다.
- 모달 컴포넌트에서 사용해야 할 모든 정보와 기능은 `JdModalRef` 를 꺼내서 사용하면 됩니다.
- JdModalRef 는 모달을 관리하는 JdModalProvder 를 통해 `provide` 되는 객체이기 때문에, 모달 컴포넌트 하위에서는 어디든 `useJdModalRef` 로 객 체를 꺼내서(`inject`) 사용할 수 있습니다.

<<< @/pages/guide/components/GeneralUsageModal.vue
