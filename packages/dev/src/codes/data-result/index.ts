export default {
  ToModal: {
    title: '',
    description: '',
    lang: 'typescript',
    code: `import { Subscription } from 'rxjs';
import { defineComponent, reactive, onUnmounted } from 'vue';
import { useJdModalService } from '@jood/v-modal';
import SampleModal1, { SampleModalData, SampleModalResult } from './SampleModal1.vue';

export default defineComponent({
  setup() {
    const modalService = useJdModalService();
    const listener = new Subscription();
    const state = reactive({
      passText: 'foo',
      resultText: ''
    });

    const onOpen = () => {
      const modalRef = modalService.open<SampleModalResult, SampleModalData>({
        data: { passText: state.passText },
        component: SampleModal1
      });
      const observeResult = modalRef.observeClosed().subscribe(result => {
        const { resultText = '' } = result || {};
        state.resultText = resultText;
        console.log('close result:', resultText);
      });
    };

    onUnmounted(() => {
      listener.unsubscribe();
      modalService.closeAll();
    });

    return {
      state,
      onOpen
    };
  }
});`
  },
  FromModal: {
    title: '',
    description: '',
    lang: 'typescript',
    code: `import { defineComponent, reactive } from 'vue';
import { useJdModalRef } from '@jood/v-modal';

export interface SampleModalData {
  passText?: string;
}
export interface SampleModalResult {
  resultText?: string;
}
export default defineComponent({
  setup() {
    const modalRef = useJdModalRef<SampleModalResult, SampleModalData>();
    const modalData = modalRef.data || {};
    const anyResult = reactive({
      text: 'hello ' + modalData.passText || ''
    });
    const onCancel = () => {
      modalRef.close();
    };
    const onClose = () => {
      modalRef.close({
        resultText: anyResult.text
      });
    };
    return {
      anyResult,
      onCancel,
      onClose
    };
  }
});`
  }
};
