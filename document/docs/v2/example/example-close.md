<script setup>
import CloseExample from './close/CloseExample.vue';
</script>

# 모달 닫기

JdModalRef 를 통해 컴포넌트를 닫을 수 있습니다. `useJdModalRef` 를 통해 modalRef 를 사용할 수 있습니다.

- `@jood/v-modal` 은 `rxjs` 를 사용하여 이벤트를 구독하고 전파합니다.

<CloseExample />

::: code-group


```ts{18,20} [Page.vue]
import { ref } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import { Subscription } from 'rxjs';
import OpenModal from './OpenModal.vue';

const modalListener = new Subscription();
const modalService = useJdModalService();

const modalCount = ref(0);

const onOpen = () => {
  const modalRef = modalService.open<{ count: number }, { count: number }>({
    component: OpenModal,
    data: {
      count: modalCount.value,
    },
  });
  const observer = modalRef.observeClosed().subscribe((result) => {
    modalListener.remove(observer);
    modalCount.value = result?.count || 0;
  });
  modalListener.add(observer);
};

onUnmounted(() => {
  modalListener.unsubscribe();
});
```

```ts{9,13} [MyModal.vue]
import { useJdModalRef } from '@jood/v-modal';
import { ref } from 'vue';

const modalRef = useJdModalRef<{ count: number }, { count: number }>();
const startCount = modalRef.data?.count || 0;
const modalCount = ref(startCount);

const onCancel = () => {
  modalRef.close({ count: startCount });
};

const onClose = () => {
  modalRef.close({ count: modalCount.value });
};
```
:::

::: tip JdModalRef
모달이 열릴 때 반환되는 JdModalRef 객체는 각 모달에서 이루어지는 기능과 상태 처리를 위한 객체 입니다. 예시 코드와 같이 modalRef 는 모달을 통해 데이터를 전달하거나 결과를 구독할 수 있는 기능이 제공되고, 모달을 닫거나 모달의 상태 정보를 접근해 사용할 수도 있습니다.
:::

::: warning 서비스를 통해서도 닫을 수 있습니다.
대부분의 경우 모달 컴포넌트에서 모달을 닫기 때문에 JdModalRef 를 이용해 닫는게 일반적이지만, 간혹 서비스를 통해 모달을 닫아줘야 할 때가 있습니다. [closeById, closeByRef](../api/jd-modal-service.html#closebyref-modalref)
:::

***

아래와 같이 Generic 을 지정하여 분리된 컴포넌트, 컴포저블 코드에서 코드를 관리할 수 있습니다.

::: code-group

```ts [my-modal.types.ts]
export interface MyModalData {
  hello?: number;
  foo?: string;
}

export interface MyModalResult {
  closeResultValue?: number;
}
```

```ts [모달을 여는곳]
const modalService = useJdModalService();
const openModal = () => {
  const modalRef = modalService.open<MyModalResult, MyModalData>({
    data: { hello: 10000, foo: 'bar' }, // MyModalData 로 전달해야할 데이터의 코드 힌트를 얻을 수 있습니다.
    component: MySomeModalComponent,
    duration: 320,
    overlayClose: true,
    dropShadow: false
  });

  modalRef.observeClosed().subscribe((result) => {
    console.log(result?.closeResultValue); // MyModalResult 로 모달에서 넘어오는 데이터의 코드 힌트를 얻을 수 있습니다.
    // result 는 모달이 의도치 않게 닫힐 수 있으므로 undefined 일 수 있습니다.
  });
}
```

```ts [MySomeModalComponent.vue]
const modalRef = useJdModalRef<MyModalResult, MyModalData>();
console.log(modalRef.data?.hello); // MyModalData 로 전달받은 데이터의 코드 힌트를 얻을 수 있습니다.

const closeModal = () => {
  modalRef.close({ closeResultValue: 1 }); // MyModalResult 로 모달에서 넘겨야하는 데이터의 코드 힌트를 얻을 수 있습니다.
}
```


***