<template>
  <div class="page-view">
    <div class="panel">
      <preview-code v-bind="Codes.install" />

      <panel-devider />

      <preview-code v-bind="Codes.main" />

      <panel-devider :half="true" />

      <div class="panel-desc">
        <p class="pg">
          패키지의 css 를 적용해야 합니다. css 를 적용할 수 있는 곳이라면 import 하는 위치는
          어디라도 상관 없습니다.
        </p>
      </div>

      <panel-devider />

      <preview-code v-bind="Codes.app" />

      <panel-devider :half="true" />

      <div class="panel-desc">
        <ul class="panel-list">
          <li>
            <em>provideJdModalService</em>는 <em>JdModalService</em>를 공급(provide)합니다. setup한
            하위 부터는 <em>useJdModalService</em>로 서비스를 주입(inject)하여 사용할 수 있습니다.
          </li>
          <li>
            <em>JdModalProvider</em> 컴포넌트를 추가해 줘야 합니다. 해당 컴포넌트는 모달이 열리는
            위치와 UI 를 관리하고 모달로 열리는 컴포넌트에 <em>JdModalRef</em>를 공급해 줍니다.
            <br /><em>useModalRef</em>로 <em>Ref</em>(Vue의 Ref와는 관련 없음)를 사용할 수 있고,
            <em>Ref</em>를 통해 데이터를 전달하거나, 컴포넌트간의 커뮤니케이션을 할 수 있습니다.
          </li>
        </ul>
      </div>

      <panel-devider />

      <preview-code v-bind="Codes.someContainer" />

      <panel-devider :half="true" />

      <div class="panel-desc">
        <p class="pg">
          Container 컴포넌트와 Modal 컴포넌트 간의 커뮤니케이션은 RxJS 의 Observable 을 사용합니다.
        </p>
        <ul class="panel-list">
          <li>
            <a href="https://rxjs-dev.firebaseapp.com/guide/observable" target="_blank">
              RxJS Observable
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/angular-in-depth/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0"
              target="_blank"
            >
              The Best Way To Unsubscribe RxJS Observables In The Angular Applications!
            </a>
          </li>
        </ul>

        <p class="pg">
          컴포넌트간의 커뮤니케이션 외에도 상태 확인을 위해 몇가지 observable 을 제공합니다.
        </p>
        <ul class="panel-list">
          <li>
            JdModalService <em>observeModalState</em>: 열려있는 모달의 수 등 서비스 상태 변경을
            감지할 수 있습니다.
          </li>
          <li>
            JdModalRef <em>observeClosed</em>: 모달 컴포넌트가 닫힐 때를 감지하고 모달 컴포넌트에서
            전달하는 결과를 받을 수 있습니다.
          </li>
          <li>
            JdModalRef <em>observeOpener</em>: 모달 컴포넌트가 열리거나 닫히는 상태를 감지할 수
            있습니다.
          </li>
        </ul>
      </div>

      <panel-devider />

      <preview-code v-bind="Codes.someModal" />

      <panel-devider :half="true" />

      <div class="panel-desc">
        <p class="pg">
          모달로 열리는 컴포넌트 및 하위 컴포넌트는 <em>JdModalRef</em>이 공급(provide) 되어 있고,
          <em>useJdModalRef</em>로 주입(inject)하여 사용할 수 있습니다.
          <br />
          <em>Ref</em>에 접근할 수 있는 모든 곳에서 모달로 전달된 데이터에 접근하거나, 모달을 닫으며
          결과를 전달할 수도 있습니다.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PreviewCode from '@/components/common/PreviewCode.vue';
import PanelDevider from '@/components/common/PanelDevider.vue';
import Codes from '@/codes/getting-started';

export default defineComponent({
  components: {
    PreviewCode,
    PanelDevider
  },
  setup() {
    return {
      Codes
    };
  }
});
</script>

<style lang="scss" scoped>
.page-view {
  > .panel {
    width: 100%;
  }
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
}
</style>
