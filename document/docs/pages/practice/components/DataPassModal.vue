<template>
  <div class="data-pass-modal">
    <div class="pass-box">
      <div class="puts">
        <dl class="dl">
          <dt class="dt">sendText</dt>
          <dd class="dd">
            <el-input :value="state.sendText" readonly disabled />
          </dd>
        </dl>
        <dl class="dl">
          <dt class="dt">resultText</dt>
          <dd class="dd">
            <el-input v-model="state.resultText" />
          </dd>
        </dl>
      </div>
      <div class="actions">
        <el-button class="action" type="danger" @click="onClose">close</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useJdModalRef } from '@jood/v-modal';

export default defineComponent({
  setup() {
    const modalRef = useJdModalRef<{ resultText: string }, { sendText: string }>();
    const sendText = modalRef.data?.sendText || '';
    const state = reactive({
      sendText: sendText,
      resultText: 'send result!'
    });

    const onClose = () => {
      modalRef.close({
        resultText: state.resultText
      });
    };

    return {
      state,
      onClose
    };
  }
});
</script>

<style lang="scss" scoped>
.data-pass-modal {
  padding: 20px;
  width: 90vw;
  max-width: 320px;
  box-sizing: border-box;
  .pass-box {
    display: flex;
    flex-direction: column;
    .actions {
      display: flex;
      margin-top: 10px;
      .action {
        flex: 1;
      }
    }
    .dl {
      display: block;
      margin: 5px 0 0 0;
      &:first-child {
        margin-top: 0;
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
