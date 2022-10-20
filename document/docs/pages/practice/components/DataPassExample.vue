<template>
  <div class="data-pass-example">
    <div class="pass-box">
      <div class="aside">
        <dl class="dl">
          <dt class="dt">sendText</dt>
          <dd class="dd">
            <el-input v-model="state.sendText" />
          </dd>
        </dl>
        <dl class="dl">
          <dt class="dt">resultText</dt>
          <dd class="dd">
            <el-input :value="state.resultText" readonly disabled />
          </dd>
        </dl>
      </div>
      <div class="bside">
        <el-button type="primary" @click="onOpen">onOpen</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { Subscription } from 'rxjs';
import { useJdModalService } from '@jood/v-modal';
import DataPassModal from './DataPassModal.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    modalService.setUseHistoryStrategy(false); // @TODO - vitepress 가 history.state 가 변경될때 page 를 load 해서 컴포넌트가 unmount 된다.

    const state = reactive({
      sendText: 'hello',
      resultText: ''
    });
    let resultListener: Subscription = null;

    const onOpen = () => {
      disposeResultListener();
      const modalRef = modalService.open<{ resultText: string }, { sendText: string }>({
        data: { sendText: state.sendText },
        component: DataPassModal,
        overlayClose: true
      });
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

<style lang="scss" scoped>
.data-pass-example {
  .pass-box {
    display: flex;
    align-items: flex-end;
    .aside {
      flex: 1;
      display: flex;
    }
    .bside {
      margin-left: 10px;
    }
    .dl {
      display: block;
      margin: 0 0 0 5px;
      &:first-child {
        margin-left: 0;
      }
    }
    .dt {
      margin: 0;
      font-size: 0.8rem;
    }
    .dd {
      margin-top: 2px;
      margin: 0;
    }
  }
}
</style>
