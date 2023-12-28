<script setup>
import ExamplePage from './components/ExamplePage.vue';
import ProvideView from './components/ProvideView.vue';
</script>

# 간단한 사용법 및 구성

::: warning 📣 NOTE
예제를 보기 좋게 하기 위해 버튼과 같은 UI 는 `element-plus` 가 사용되었습니다.
:::


아래는 아주 간단한 모달을 여는 예제 입니다.

<ExamplePage />

## 예제

- `useJdModalService` 를 통해 서비스(`JdModalService`)를 사용할 수 있습니다.
- `useJdModalRef` 를 통해 모달 참조자(`JdModalRef`)를 사용할 수 있습니다.

::: tip 📣 useJdModalRef

열린 모달 컴포넌트와 그 하위 계층에서는 `useJdModalRef` 를 사용하여 `JdModalRef` 인스턴스를 사용할 수 있습니다. 
`JdModalRef` 는 모달 인스턴스로 전달된 모든 정보(`data`)를 관리하며, 
모달을 닫는(`close`) 등 모달이 해야할 일을 관리하는 객체입니다.

:::

::: code-group

<<< @/v2/guide/components/ExamplePage.vue{11,15} [ExamplePage.vue]

<<< @/v2/guide/components/ExampleModal.vue{11,14} [ExampleModal.vue]

:::


## JdModalService

모달을 열고, 전체 모달을 관리하는 핵심 서비스 입니다.

::: code-group
```ts [Page.vue]
import SomeModal from './SomeModal.vue';

const modalService = useJdModalService();
const onOpen = () => {
  modalService.open({
    component: SomeModal,
    data: { foo: 'bar' },
    overlayClose: true
  });
};
```
:::

## JdModalRef

하나의 모달을 관리하는 핵심 객체 입니다.

::: code-group
```ts [SomeModal.vue]
const modalRef = useJdModalRef();
// console.log(modalRef.data); // { foo: 'bar' }
const onClose = () => {
  modalRef.close(); // 모달을 열었던 곳으로 결과를 전달 할 수도 있습니다.
};
```
:::

## 계층 구조

위의 `ExampleModal.vue` 는 아래와 같은 구조로 열리게 되며, 해당 컴포넌트를 포함한 하위 컴포넌트에서는 `useJdModalRef` 를 사용할 수 있게 됩니다.
(`useJdModalService` 역시 사용 가능합니다. 😀)

<ProvideView />
