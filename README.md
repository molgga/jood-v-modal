# @jood/v-modal

이 패키지는 모달, 컨펌, 액션시트와 같은 동적인 컴포넌트 UI 구성과 \
이런 구성에서 일반적으로 필요한 컴포넌트간의 데이터 통신, 프로그래미틱한 제어의 기반을 제공하는것을 목표로 합니다.

Vue + composition-api + rxjs 를 활용한 Vue 전용 패키지 입니다. \
Angular material 의 DialogRef 에서 영감을 받았습니다.

> __[Demo](https://molgga.github.io/jood-v-modal)__
| __[Demo source code](https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/example)__
| __[Documentation](https://molgga.github.io/jood-v-modal/documents)__
| __[Github](https://github.com/molgga/jood-v-modal)__
| __[NPM](https://www.npmjs.com/package/@jood/v-modal)__
\
\
![Vue](https://img.shields.io/static/v1.svg?label=&style=flat-square&logoColor=white&color=4fc08d&logo=vue.js&message=Vue)
![Typescript](https://img.shields.io/static/v1.svg?label=&style=flat-square&logoColor=white&color=3178c6&logo=typescript&message=Typescript)
![TRAVIS](https://travis-ci.org/molgga/jood-v-modal.svg?branch=master)
![NPM version](https://img.shields.io/npm/v/@jood/v-modal.svg)
![NPM license](https://img.shields.io/npm/l/@jood/v-modal)
![NPM download](https://img.shields.io/npm/dt/@jood/v-modal)
![NPM bundle size](https://img.shields.io/bundlephobia/min/@jood/v-modal)

<table style="table-layout: fixed; overflow-wrap: break-word;">
  <tbody>
    <tr>
      <td>
        <img src="https://user-images.githubusercontent.com/2731262/90951042-02b50f80-e492-11ea-9290-d0b3ac1ce10e.gif" alt="@jood/v-modal demo 1" style="max-width: 100%;" />
      </td>
      <td>
        <img src="https://user-images.githubusercontent.com/2731262/90951211-bec30a00-e493-11ea-88c2-31f3222abad0.gif" alt="@jood/v-modal demo 2" style="max-width: 100%;" />
      </td>
      <td>
        <img src="https://user-images.githubusercontent.com/2731262/90951214-c2569100-e493-11ea-8503-ea700f5c48fb.gif" alt="@jood/v-modal demo 3" style="max-width: 100%;" />
      </td>
    </tr>
  </tbody>
</table>

***

## 시작하기

```javascript
$ npm install @jood/v-modal
```

### main.ts

```javascript
import '@jood/v-modal/dist/v-modal.css';
```

### App.vue

```html
<template>
  <div>
    <jd-modal-provider /> <!-- 모달 서비스 상태와 열리는 모달에게 JdModaRef 를 주입해 주는 등의 관리를 합니다. -->
    <div>
      <button @click="onOpen">onOpen</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, onUnmounted } from "@vue/composition-api";
import { provideJdModalService, useJdModalService, JdModalProvider, JdModalRef } from "@jood/v-modal";
import SomeModal from "./SomeModal.vue";

export default defineComponent({
  components: {
    JdModalProvider
  },
  setup() {
    provideJdModalService(); // 모달 서비스 공급 - 이제 하위 컴포넌트 모든 곳에서 서비스에 접근이 가능합니다.
    const modalService = useJdModalService(); // 모달 서비스 주입 및 사용
    const modalResultListener = new Subscription();
    const onOpen = () => {
      const modalRef = modalService.open({
        component: SomeModal, // 모달로 열려는 컴포넌트
        data: { // 모달로 전달할 데이터
          // 값을 변형하지 않으므로 reactive, ref 와 같은 반응형 데이터를 전달하면 반응성은 그대로 유지 됩니다.
          passModalData1: 1,
          passModalData2: { foo: 'bar' },
        }
      }); // JdModalRef 가 반환됩니다.

      // SomeModal -> App 으로 결과를 전달 받을 수 있습니다.
      const observeResult = modalRef.observeClosed(result => {
        // 꼭 모달을 연 곳에서만 결과를 받을 수 있는게 아닙니다. 
        // 해당 modalRef 를 알고 있는 모든 곳에서 결과를 받을 수 있습니다.
        console.log(result);
      });
      modalResultListener.add(observeResult);

      // modalRef.close(); // 직접 닫을 수 있습니다.
      // modalService.closeById(modalRef.id); // 이렇게도 닫을 수 있습니다.
    };
    onUnmounted(() => {
      modalResultListener.unscribe();
      modalService.closeAll(); // 열려있는 모든 모달을 닫을 수 있습니다.
    });
    return {
      onOpen
    };
  }
});
</script>
```

### SomeModal.vue
```html
<template>
  <div class="sample-modal-view">
    hello <button @click="onClose">close</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useJdModalRef, useJdModalService } from "@jood/v-modal";

export default defineComponent({
  setup() {
    const modalService = useJdModalService(); // 여기서도 모달 서비스를 사용할 수 있습니다.
    const modalRef = useJdModalRef(); // 모달로 열리면서 주입된 JdModalRef 입니다. 하위 컴포넌트 모든곳에서 주입 받을 수 있습니다.
    console.log(modalRef); // 모달을 통해 전달된 데이터에 접근하거나, 모달을 직접 닫거나 결과를 전달 할 수 있습니다.
    const onClose = () =>{
      modalRef.close({ passResult: 1 }); // 결과를 전달 할 수 있습니다.
    }
    return { 
      onClose 
    };
  }
});
</script>
<style lang="scss" scoped>
.sample-modal-view {
  padding: 20px;
  min-width: 420px;
  min-height: 320px;
  box-sizing: border-box;
}
</style>
```
