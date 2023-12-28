<script setup>
import EntryExample from './entry-component/EntryExample.vue';
</script>

# EntryComponent

entryComponent 는 모달의 스타일링과 관리를 위해 모달 컴포넌트를 감싸는 컴포넌트 입니다.

`@jood/v-modal` 은 기본적으로 흰 배경에 라운드가 적용되어 있는 Entry 컴포넌트가 있고, 
디자인 스타일링 위해 배경과 라운드를 제거한 `JdModalEntryEmpty.vue` 를 별도로 제공합니다.

`useJdModalEntrySetup` composables 를 노출하기 때문에 Entry 컴포넌트를 직접 만들고 적용할 수도 있습니다.
Entry 컴포넌트는 필수로 해줘야 하는 일들이 있기 때문에 자체 구성하기 쉽지 않겠지만, 자체 구성할 일이 있다면 아래 예제 코드를 참고하세요.

::: warning 모달 스타일링을 위해서는 OpenStrategy 가 더 나은 방법입니다.
Entry 컴포넌트는 아주 기본적인 스타일링만을 다루고 관리하기 위한 용도입니다. \
`OpenStrategy` 를 사용하면 제공되는 `JdModalEntryEmpty.vue` 와 동일하게 스타일링이 가능하기도 하고 더 세부적인 스타일링과 애니메이션까지 제어할 수 있습니다. (아래 예제는 OpenStrategy 로 동일하게 만들 수 있습니다)
\
\
Entry 컴포넌트를 변경하는 건 모달의 계층 구조나 기본 이벤트 제어를 변경해야 할 때 유용합니다.
:::

<EntryExample />

::: code-group

<<< @/v2/example/entry-component/EntryExample.vue{28,37} [Page.vue]

<<< @/v2/example/entry-component/EntryCustom1.vue [EntryCustom1.vue]

:::


## defaultEntryComponent

전체를 기본으로 JdModalEntryEmpty.vue 로 적용하는 예시 입니다. 

::: code-group
```ts{8} [App.vue]
import { provideJdModalService, JdModalEntryEmpty } from '@jood/v-modal';
const modalService = provideJdModalService();

onBeforeMount(() => {
  modalService.setUseHistoryStrategy(false);
  modalService.setUseBlockBodyScroll(true);
  modalService.init({
    defaultEntryComponent: JdModalEntryEmpty
  });
});
```
:::


특정 페이지에서만 JdModalEntryEmpty.vue 로 적용하는 예시 입니다. 

::: code-group
```ts{5,9} [Page.vue]
import { useJdModalService, JdModalEntryEmpty } from '@jood/v-modal';
const modalService = useJdModalService();

onBeforeMount(() => {
  modalService.setDefaltEntryComponent(JdModalEntryEmpty);
});

onBeforeUnmount(() => {
  modalService.resetDefaultEntryComponent();
})
```
:::