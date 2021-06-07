<template>
  <div>
    <demo-panel title="OpenStrategy">
      <demo-button @click="onOpen">open</demo-button>
      <br />
      <br />
      <a
        href="https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-open-strategy"
        target="_blank"
        >demo code</a
      >
    </demo-panel>

    <demo-panel-devider />

    <demo-panel title="Default OpenStrategy">
      <div class="panel-desc">
        <p class="pg">
          기본적인 openStrategy 를 몇가지 제공합니다. OpenStrategy interface 를 구현하면 style 을
          재정의 할 수 있습니다.
          <br />OpenStrategy 를 직접 만들고 사용하는 방법은 아래 CustomOpenStrategy 코드를 참고해
          보세요.
        </p>
      </div>
      <demo-preview-code v-bind="Codes.DefaultOpenStrategy" />
    </demo-panel>

    <demo-panel-devider />

    <demo-panel title="Custom OpenStrategy">
      <div class="panel-desc">
        <p class="pg">
          openStrategy 를 직접 만들고, 재정의 할 수 있습니다. 아래 코드는 예제에서 사용된
          OpenStrategy 와 해당 interface 에 대해 간략하게 설명합니다.
        </p>
      </div>

      <demo-preview-code v-bind="Codes.CustomOpenStrategyVue" />
      <demo-panel-devider />
      <demo-preview-code v-bind="Codes.CustomOpenStrategy" />
      <div class="panel-desc">
        <p class="pg">
          OpenStrategy interface 를 구현하세요. <br />OpenStrategy 의 base(), opening(), closing()
          는 CSS properties 를 반환하며, <br />modal(entry wrapper), pivot(entry content container),
          overlay(entry overlay) 는 각각의 DOM 스타일 입니다. <br />각각의 method 와 값이 무엇을
          의미하는지 이해하면 재정의 하는건 어렵지 않습니다.
        </p>
        <ul class="panel-list">
          <li>base: 모달의 열리기 전 기본 스타일 입니다.</li>
          <li>opening: 모달이 열리기 시작할 때의 스타일 입니다.</li>
          <li>
            floatingOpening: floatingMode 옵션을 true 로 지정했을 때 스타일 입니다. 모달이 중첩되어
            열릴때 모달의 역순으로 스타일이 정의 됩니다. (opening 과 같습니다.)
          </li>
          <li>opened: 모달이 완전히 열린 후 스타일 입니다.</li>
          <li>closing: 모달이 닫히기 시작할 때의 스타일 입니다.</li>
          <li>
            shadow: 모달의 그림자 스타일 입니다. shadow 는 disableShadow 옵션에 영향이 있는 관계로
            base 에서 정의하지 않고 별도로 정의합니다.
          </li>
        </ul>
      </div>
    </demo-panel>

    <demo-panel-devider />
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import { CustomOpenStrategy } from './CustomOpenStrategy';
import Codes from '../../../codes/open-strategy';
import SampleNestedModal1 from './SampleNestedModal1.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();

    const onOpen = () => {
      modalService.open({
        component: SampleNestedModal1,
        openStrategy: new CustomOpenStrategy(),
        disableShadow: false,
        floatingMode: true,
        overlayClose: true
      });
    };

    onUnmounted(() => {
      modalService.closeAll();
    });

    return {
      Codes,
      onOpen
    };
  }
});
</script>

<style lang="scss" scoped>
.panel-desc {
  padding: 0 15px;
  line-height: 1.7;
  .pg {
    margin: 10px 0 0 0;
    &:first-child {
      margin-top: 0;
    }
  }
  em {
    color: #2a9e64;
    font-style: normal;
  }
}
.panel-list {
  margin: 20px 10px;
  li {
    padding-top: 7px;
    list-style: square inside;
    &:first-child {
      padding-top: 0;
    }
  }
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
