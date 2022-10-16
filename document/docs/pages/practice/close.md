# 모달 닫기

모달을 닫는 방법은 여러가지가 있습니다.

JdModalService (`useJdModalService`) 를 통해 모든 모달을 닫거나 특정 모달을 닫을 수 있고,
JdModalRef (`useJdModalRef`) 를 통해 모달을 닫을 수 있습니다.

💡 modalService 로 열리있는 모든 모달을 닫기

```ts
modalService.closeAll();
```

💡 modalRef 를 이용하여 특정 모달을 닫기

```ts
modalRef = modalService.open({
  component: MyModal
});
...
modalRef.close();
```

이렇게도 닫을 수 있습니다.

```ts
modalService.closeById(modalRef.id);
```

💡 열리진 모달 컴포넌트에서 닫기

```ts
// MyModal.vue
const modalRef = useJdModalRef();
const onClose = () => {
  modalRef.close();
};
```
