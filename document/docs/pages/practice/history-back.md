<script setup>
import HistoryBackExample from './components/HistoryBackExample.vue';
</script>

# 모달의 뒤로가기 처리

::: warning
history 뒤로가기 기능은 **history pushState** 또는 **location hash** 를 사용하여 이력을 남깁니다.
location 의 변경에 민감할 수 있는 기능이 있다면 사용시 주의 해야합니다.

history 뒤로가기와 모달을 닫기 기능의 연결은 완벽하지 않습니다. history 에 garbage 가 쌓일 수 있습니다. 
앞으로 가기시 모달이 다시 노출되는 기능은 제공하기 어렵고, 앞으로도 제공할 계획이 없습니다.
:::


## useHistoryStrategy

history 의 뒤로가기 기능 사용 여부를 결정 합니다. history.back 시 모달이 닫힙니다.

보통은 초기 provide 하는 단계에서 한번 설정 하겠지만, 필요에 따라 기능을 끄거나 켤 수 있습니다.

```ts
modalService.setUseHistoryStrategy(true);
```

:::tip
기본값은 **true** 입니다.
:::

## HistoryStrategy

history 의 뒤로가기 기능 사용 여부를 결정 합니다.

보통은 초기 provide 하는 단계에서 한번 설정 하겠지만, 필요에 따라 기능을 끄거나 켤 수 있습니다.

:::tip
기본값은 **HistoryStateStrategy** 를 사용합니다.
:::

### HistoryStateStrategy

history.state 를 사용합니다. 모달이 열려있는 경우 history.state 를 출력해 보면 아래와 같은 정보가 출력 됩니다.

```ts
modalService.setHistoryStrategy(new HistoryStateStrategy());
// ... model open ...
console.log(history.state); // { jdModal: {serviceId: 0, before: null, current: 1669078091817} }
```

### HistoryHashStrategy

location.hash 를 사용합니다. 모달이 열릴 때 location.hash 에 이력을 남깁니다. URL 에 hash 정보가 붙습니다. 

```ts
modalService.setHistoryStrategy(new HistoryHashStrategy());
// ... model open ...
console.log(location.href); // ...#jd-modal=1669078091818
```

***

아래 예제를 통해 모달을 열고 history.back 기능을 사용해 보세요.

<HistoryBackExample />