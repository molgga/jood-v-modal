# JdModalRef

## 📚 Method

JdModalRef 의 주요 method 는 `close`, `observerClosed` 입니다.

#### close(result?)

모달을 닫습니다.

```ts
const modalRef = useJdModalRef();

const closeModal = () => {
  modalRef.close);
}
```

***

#### observeClosed()

모달 닫힘 상태 옵저버. 보통 모달이 닫히는걸 알아야 하거나, 모달로 부터 결과를 전달 받으려할 때 사용합니다.

```ts
import { Subscription } from 'rxjs';

const modalService = useJdModalService();
const modalListener = new Subscription();

const openModal = () => {
  const modalRef = modalService.open({
    component: MySomeModalComponent,
  });
  const observer = modalRef.observeClosed().subscribe((result) => {
    console.log(result);
  });
  modalListener.add(observer);
}

onUnmounted(() => {
  modalListener.unsubscribe();
});
```

***

#### observeOpener()

모달 열림 상태 옵저버로 모달이 열거나 닫힐 때를 상태(열기 시작, 완전히 열림, 닫힘 시작, 완전히 닫힘) 변경을 감지할 수 있습니다. 

***

#### closed()

애니메이션, 결과 전달 등 없이 모달을 강제로 닫습니다.

***

#### 그 외

많은 메소드가 있지만, 대부분 서비스에 의해 관리되는 메소드 입니다.

## 📚 Getter

#### id

모달의 고유 id 를 반환합니다.

***

#### data

모달로 전달된 데이터를 반환합니다.

```ts
const modalRef = useJdModalRef();
console.log(modalRef.data);
```

### isClose

모달이 닫혔는지 여부를 반환합니다.

#### 그 외

`duration`, `overlayClose`, `disabledShadow` ... 같은 많은 Getter 가 있습니다.
대부분 모달을 열 때 사용된 모달의 정보를 가지고 있습니다.


