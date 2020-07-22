# @jood/v-modal

Vue modal 기능 UI

***

## Get started

### npm install

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
    <jd-modal-provider /> <!-- nowrapping -->
    <div>
      <button @click="onOpen">onOpen</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "@vue/composition-api";
import { provideJdModalService, useJdModalService, JdModalProvider } from "@jood/v-modal";
import SampleModalView from "@/components/modal/SampleModalView.vue";
export default defineComponent({
  components: {
    JdModalProvider
  },
  setup() {
    provideJdModalService(); // provide service
    const modalService = useJdModalService(); // use(inject) service
    const onOpen = () => {
      modalService.open({
        overlayClose: true,
        component: SampleModalView
      });
    };
    onUnmounted(() => {
      modalService.closeAll();
    });
    return {
      onOpen
    };
  }
});
</script>
```

### SampleModalView.vue
```html
<template>
  <div class="sample-modal-view">hello</div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { use0JdModalRef, useJdModalService } from "@jood/v-modal";
export default defineComponent({
  setup() {
    // const modalService = useJdModalService(); // use(inject) modal service 
    const modalRef = useJdModalRef(); // use(inject) modal ref class
    console.log(modalRef);
    return {};
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

***

### See

- [Example(web)](https://molgga.github.io/jood-v-modal).
- [Example(source)](https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/example).
- [Github](https://github.com/molgga/jood-v-modal).
- [NPM](https://www.npmjs.com/package/@jood/v-modal).
- [Doc](https://molgga.github.io/jood-v-modal/documents).