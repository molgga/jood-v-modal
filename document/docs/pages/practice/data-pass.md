<script setup>
import DataPassExample from './components/DataPassExample.vue';
</script>

# 모달과 데이터 주고 받기

<DataPassExample />

:::tip
예제의 sendText 는 모달로 전달되는 데이터, resultText 는 모달에서 전달하는 데이터 입니다.
:::

## 모달을 여는 컴포넌트 코드

```vue
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { Subscription } from 'rxjs';
import { useJdModalService } from '@jood/v-modal';
import DataPassModal from './DataPassModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    let resultListener: Subscription | null = null;

    const state = reactive({
      sendText: 'hello',
      resultText: ''
    });

    const onOpen = () => {
      disposeResultListener();
      /**
       * 모달 컴포넌트를 열며, 데이터를 전달 합니다.
       */
      const modalRef = modalService.open<{ resultText: string }, { sendText: string }>({
        data: { sendText: state.sendText },
        component: DataPassModal,
        overlayClose: true
      });

      /**
       * 모달 컴포넌트로 부터 결과를 전달받기 위해 구독합니다. (구독은 rxjs 를 사용합니다)
       */
      resultListener = modalRef.observeClosed().subscribe((result) => {
        const resultText = result?.resultText || '';
        console.log('resultText:', resultText);
        state.resultText = resultText;
      });
    };

    const disposeResultListener = () => {
      if (resultListener) {
        resultListener.unsubscribe();
        resultListener = null;
      }
    };

    return {
      state,
      onOpen
    };
  }
});
</script>
```


---

## 데이터 전달

데이터를 전달하기 위해 아래와 같이 전달 합니다.

```ts
const modalRef = modalService.open<{ resultText: string }, { sendText: string }>({
  data: { sendText: state.sendText }, // [!code hl]
  component: DataPassModal,
  overlayClose: true
});
```

### interface

데이터를 주고 받는 인터페이스 정의는 아래와 같습니다.

```ts
modalService.open<Result, Data>({ ... })
```
- Result: 열리는 모달 컴포넌트로 부터 전달 받게 되는 결과 타입 입니다.
- Data: 열려는 모달 컴포넌트로 전달하려는 데이터 타입 입니다.

---

- 전달 받을 결과가 없다면 아래와 같이 선언할 수 있습니다.
  ```ts
  modalService.open<void, { param1: number }>({ ... })
  ```
- 주고 받을 데이터가 없다면 선언하지 않아도 됩니다.
  ```ts
  modalService.open({ ... })
  ```

---

## 결과 받기(구독)

결과를 전달받기 위한 코드는 아래와 같습니다.

```ts
// 모달을 엽니다.
const modalRef = modalService.open<{ resultText: string }, { sendText: string }>({ ... });

// 모달의 결과를 받기위해 구독합니다.
modalRef.observeClosed().subscribe((result) => { // [!code hl]
  const resultText = result?.resultText || '';
  console.log('resultText:', resultText);
  state.resultText = resultText;
});
```

모달이 열릴 때 반환되는 `JdModalRef` 객체는 각 모달에서 이루어지는 기능과 상태 처리를 위한 객체 입니다.
위의 예시 코드와 같이 modalRef 는 모달을 통해 데이터를 전달하거나 결과를 구독할 수 있는 기능이 제공되고, 모달을 닫거나 모달의 상태 정보를 접근해 사용할 수도 있습니다.

모달을 닫고, 결과를 전달하는 처리는 아래 모달 컴포넌트 코드쪽에서 살펴보세요.

## 모달 컴포넌트 코드

```vue
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useJdModalRef } from '@jood/v-modal';

export default defineComponent({
  setup() {
    const modalRef = useJdModalRef<{ resultText: string }, { sendText: string }>(); // [!code hl]
    const state = reactive({
      text: modalRef.data?.sendText || ''
    });
    const onClose = () => {
      modalRef.close({ resultText: `result! ${state.text || ''}` }); // [!code hl]
    };
    return {
      state,
      onClose
    };
  }
});
</script>
```

`JdModalRef` 는 `JdModalService` 로 open 될 때 주입(provide)되고, `useJdModalRef` 로 꺼내서(inject) 사용할 수 있습니다.

이 얘기는 모달 컴포넌트 하위 계층이라면 어디서든 `JdModalRef` 를 꺼내어 사용할 수 있음을 뜻합니다.

이러한 방식은 몇가지 장점이 있습니다. 보통 모달 컴포넌트를 만들고 모달의 헤더 부분에 닫기(X) 버튼만으로 모달을 닫는게 아닙니다. 어떤 컴포넌트에서는 상단 헤더를 사용하고, 어떤 컴포넌트에서는 `Save` 버튼 클릭시 닫기 처리를 해야하는 경우 등 아주 많은 케이스가 있고, 다양하게 디자인된 컴포넌트를 조합하게 되는 경우가 많습니다.
modalRef 를 통해 어디서든 모달을 닫거나 결과를 전달할 수 있기 때문에 유연하게 사용 가능합니다.

---

## 예제 컴포넌트

- <a target="_blank" href="https://github.com/molgga/jood-v-modal/blob/main/document/docs/pages/practice/components/DataPassExample.vue">DataPassExample.vue</a>
- <a target="_blank" href="https://github.com/molgga/jood-v-modal/blob/main/document/docs/pages/practice/components/DataPassModal.vue">DataPassModal.vue</a>

