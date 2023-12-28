# JdModalService

## 📚 Method

#### init(config)

인스턴스를 초기화 합니다. 지정된 `config` 를 통한 기본 세팅과 모달 관리를 위한 옵저버 등을 등록합니다.

 - `defaultEntryComponent`: 모달이 사용할 Entry 컴포넌트를 지정합니다. 
  미지정시 기본 Entry 컴포넌트인 JdModalEntry.vue 를 사용합니다.

::: tip Entry 컴포넌트

모달을 감싸며 모달의 기능, 모션 처리를 담당하는 컴포넌트입니다. 
[💡 계층-구조](../guide/usage.md#계층-구조)

:::

***

#### open(modalData)

모달을 엽니다.

- `modalData`
  - `data`: 모달에 전달하는 데이터
  - `component`: 모달로 열려고 하는 컴포넌트
  - `duration`: 열기, 닫기 애니메이션 시간
  - `overlayClose`: 오버레이 영역 클릭시 닫기 처리 여부
  - `floatingMode`: 중첩 열기시 애니메이트 처리 여부
  - `disableShadow`: 그림자 처리 여부
  - `openStrategy`: 오픈 방식 전략
  - `entryComponent`: 모달을 감싸는(모달 기능 주입, 모션 처리 등을 하는) 컴포넌트
  - `panelStyle`: 모달 패널 css 스타일

::: code-group

```ts [모달을 여는곳]
const modalService = useJdModalService();
const openModal = () => {
  modalService.open({
    data: { hello: 10000, foo: 'bar' },
    component: MySomeModalComponent,
    duration: 320,
    overlayClose: true,
    dropShadow: false
  });
}
```

```ts [MySomeModalComponent.vue]
const modalRef = useJdModalRef();
console.log(modalRef.data); // { hello: 10000, foo: 'bar' }

const closeModal = () => {
  modalRef.close({ closeResultValue: 1 });
}
```

:::

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

:::

***

#### closeByRef(modalRef)

지정된 modalRef 로 서비스를 통해 모달을 닫습니다.

***

#### closeById(modalId)

지정된 modalId 로 서비스를 통해 모달을 닫습니다.

***

#### close(modalId)

`deprecated` closeById 와 같습니다.

***

#### closeAll(closingAnimation)

해당 서비스를 통해 열린 모달을 모두 닫습니다. `closingAnimation` 를 `false` 로 지정시 모달 닫기 애니메이션을 하지 않고 바로 닫습니다.

***

#### setDefaultEntryComponent(component)

모달이 사용할 EntryComponent.vue 를 지정합니다.

***

#### resetDefaultEntryComponent()

Entry 컴포넌트를 기본으로 제공되는 JdModalEntry.vue 를 사용하게 되돌립니다.

***

#### setUseBlockBodyScroll(bool)

모달의 갯수에 따라 body 의 style(overflow) 속성을 변경하여 scroll 을 막습니다.

***

#### setUseHistoryStrategy(bool)

히스토리 모드 사용 여부를 결정합니다. 

***

#### setHistoryStrategy(HistoryStrategy)

히스토리(뒤로가기) 사용 방식을 지정합니다.

- `HistoryStateStrategy`: history.state 를 사용합니다.
- `HistoryHashStrategy`: location.hash 를 사용합니다.

```ts
// 이제 모달이 열린 후 뒤로가기 하면 모달이 닫힙니다.
modalService.setHistoryStrategy(new HistoryStateStrategy());
modalService.setUseHistoryStrategy(true);
```

***

#### setDefaultOpenStrategy(OpenStrategy)

모달 기본 오픈 전략을 지정합니다.

```ts
// 이제 모달은 우측에서 열립니다.
modalService.setDefaultOpenStrategy(new StackRight());

// 이렇게 하면 특정 모달을 열 때만 전략을 지정할 수 있습니다.
modalService.open({
  component: MyModalComponent,
  openStrategy: new StackLeft() // 좌측에서 열립니다.
});
```

오픈 전략은 몇가지가 기본으로 제공됩니다.

- `StackNormal`: 화면 중앙에서 열립니다. 기본값 입니다.
- `StackTop`: 위에서 열립니다.
- `StackBottom`: 아래에서 열립니다.
- `StackLeft`: 좌측에서 열립니다.
- `StackRight`: 우측에서 열립니다.

::: tip OpenStrategy

오픈 전략은 직접 구현도 가능합니다. (링크: 준비중)

:::

***

#### observeModalState()

모달이 열리거나 닫히는 등 모달 서비스의 상태가 변경 되는것을 감지할 수 있습니다.
예를 들면 열려있는 모달이 없거나, 열려있는 모달이 1개라도 있는지 알 수 있습니다.

```ts
modalService.observeModalState().subscribe((modalState) => {
  // modalState.modals.length
});
```

#### getState()

현재 모달의 상태를 알 수 있습니다. 

***

#### getModalRef(modalId)

지정된 modalId 로 열려있는 JdModalRef 를 반환합니다.

***

#### hasModalRefNext(modalId)

지정된 modalId 의 다음 순번 JdModalRef 가 있는지 확인합니다.

***

#### isModalRefTop

지정된 modalId 가 가장 상위 모달인지 여부를 확인합니다. 

***

#### swapOrder(fromIndex, toIndex)

fromIndex 위치의 모달을 toIndex 위치의 모달과 위치를 바꿉니다.

***

#### swapOrderTopByRef(modalRef)

지정된 modalRef 모달과 맨 앞의 모달의 위치를 바꿉니다.

***

#### swapOrderTopById(modalId)

지정된 modalId 모달의 위치를 맨 앞으로 옮깁니다.

***

#### pushOrder(modalRef)

지정된 modalRef 모달을 맨 앞으로 옮깁니다. 다른 모달의 순서를 뒤로 밀어냅니다.

***

#### pushOrderById

지정된 modalId 모달을 맨 앞으로 옮깁니다. 다른 모달의 순서를 뒤로 밀어냅니다.

***

## 📚  Getter

#### id

해당 서비스 인스턴스의 고유 id 를 반환합니다.

***

#### modals

보유하고 있는(열려있는) `JdModalRef[]` 를 반환합니다.

***

#### hasModal

보유하고 있는(열려있는) 모달이 있는 여부를 반환합니다.

***

#### usedBlockBodyScroll

모달이 열린 경우 body scroll block 을 하는지 여부를 반환합니다.

`@see`: `setUseBlockBodyScroll`

***

#### usedHistoryStrategy

히스토리 모드를 사용하고 있는지 여부를 반환합니다.

`@see`: `setUseHistoryStrategy`

***

#### historyStrategy

지정 되어있는 히스토리 전략을 반환합니다.

`@see`: `setHistoryStrategy`

***

#### destroy()

서비스를 파기합니다. 보통은 서비스를 파기할 일이 없습니다.

***