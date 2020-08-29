# @jood/v-modal

Vue modal 기능 UI

*** 

![TRAVIS](https://travis-ci.org/molgga/jood-v-modal.svg?branch=master)
![NPM version](https://img.shields.io/npm/v/@jood/v-modal.svg)
![NPM license](https://img.shields.io/npm/l/@jood/v-modal)
![NPM download](https://img.shields.io/npm/dt/@jood/v-modal)
![NPM bundle size](https://img.shields.io/bundlephobia/min/@jood/v-modal)

*** 

- [Demo](https://molgga.github.io/jood-v-modal).
- [Demo(source)](https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/example).
- [Github](https://github.com/molgga/jood-v-modal).
- [NPM](https://www.npmjs.com/package/@jood/v-modal).
- [Doc](https://molgga.github.io/jood-v-modal/documents).

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
import { Subscription } from 'rxjs';
import { provideJdModalService, useJdModalService, JdModalProvider, JdModalRef } from "@jood/v-modal";
import SampleModalView from "@/components/modal/SampleModalView.vue";
export default defineComponent({
  components: {
    JdModalProvider
  },
  setup() {
    provideJdModalService(); // provide service
    const modalService = useJdModalService(); // use(inject) service
    const modalResultListener = new Subscription();
    const onOpen = () => {
      const modalRef = modalService.open({
        component: SampleModalView,
        data: { 
          passModalData1: 1,
          passModalData2: { foo: 'bar' },
        }
      });
      const observeResult = modalRef.observeClosed(result => {
        console.log(result);
      });
      modalResultListener.add(observeResult);
    };
    onUnmounted(() => {
      modalResultListener.unscribe();
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
  <div class="sample-modal-view">
    hello <button @click="onClose">close</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useJdModalRef, useJdModalService } from "@jood/v-modal";
export default defineComponent({
  setup() {
    const modalService = useJdModalService(); // use(inject) JdModalService 
    const modalRef = useJdModalRef(); // use(inject) JdModalRef
    console.log(modalRef);
    const onClose = () =>{
      modalRef.close({ passResult: 1 }); // modal close & pass result
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
***

## JdModalService

- open()
  - component[default=undefined]: modal component
  - data[default=null]: pass data to component(inject useJdModalRef) 
  - openStrategy[default=ModalOpenStrategy.NORMAL]: modal stack direction
    - NORMAL: center | center
    - TOP_STACK: center | top
    - BOTTOM_STACK: center | bottom
    - LEFT_STACK: left | center
    - RIGHT_STACK: right | center
  - duration[default=240]: modal open|close transition speed
  - overlayClose[default=false]: overlay click close
  - floatingMode[default=true]: nested modal stack motion
  - disableShadow[default=false]: disable entryComponent css box-shadow
  - entryComponent[default=JdModalEntry(component)]: modal item wrapping component
    - @see: useJdModalEntrySetup()
  - panelStyle[default=undefined]: entryComponent panel css style

- closeAll(), closeById(modalId: number), closeByRef(modalRef: JdModalRef)
  - close modal

- observeModalState(): (rxjs)Observable
  - changed modalService state (ex: opened modals.length)

- setUseLocationHash()
  - use location hash change(history stack)
  - modal open = history push
  - modal close = history pop 
  - (history.back = modal close)

[...source](https://github.com/molgga/jood-v-modal/blob/master/packages/lib/src/modules/modal/JdModalService.ts).

```typescript
setup() {
  const modalService = useJdModalService();
  modalService.open({
    component: MyModalItem,
    data: {},
    openStrategy: ModalOpenStrategy.BOTTOM_STACK,
    duration: 120,
    overlayClose: true,
    entryComponent: MyCustomModalItemWapper,
    floatingMode: true,
    disableShadow: false,
    panelStyle: { backgroundColor:'#ff0000' },
  });
  return {};
}
```

*** 

## JdModalRef

- id: modal unique id
- close(result?:any): modal close & pass result
- observeOpener(): changed modal open state
- observeClosed(): changed modal close state

[...source](https://github.com/molgga/jood-v-modal/blob/master/packages/lib/src/modules/modal/JdModalRef.ts).

```typescript
// ContainerView
setup() {
  const modalResultListener = new Subscription();
  const onOpen = () => {
    const modalRef = modalService.open({
      component: MyModalView,
      data: { passModalData: 'any pass' }
    });
    const observeResult = modalRef.observeClosed().subscribe(result => {
      console.log(result);
    });
    modalResultListener.add(observeResult);
  };
  onUnmounted(() => {
    modalResultListener.unscribe();
  });
  return {};
}
```

```typescript
// MyModalView
setup() {
  const modalRef = useJdModalRef();
  const passData = modalRef.data;
  const onClose = () => {
    modalRef.close('any result');
  }
  return {};
}
```

*** 
## provide & inject

- provideJdModalService(): provide JdModalService
- useJdModalService(): inject JdModalService
- useJdModalRef(): inject JdModalRef

[...source](https://github.com/molgga/jood-v-modal/blob/master/packages/lib/src/modules/modal/index.ts).

```typescript
// App.vue
setup() {
  provideJdModalService();
  return {};
}

// SomeContainer.vue
setup() {
  const modalService = useJdModalService();
  const onOpen = () => {
    modalService.open({ 
      component: SomeModal,
      data: { pass1: 1, pass2: 'foo' }
    })
  }
  return {};
}

// SomeModal.vue
setup() {
  const modalService = useJdModalService();
  const modalRef = useJdModalRef();
  return {};
}

// SomeModalChild.vue
setup() {
  const modalService = useJdModalService();
  const modalRef = useJdModalRef();
  return {};
}
```

***

## Customizing

 advance customizing modal

- useJdModalProviderSetup(): (ex: JdModalProvider.vue)
  - mounted(): require call onMounted|onBeforeMount
  - unmounted(): require call onUnmounted|onBforeUnmount
  - modals: opened JdModalRef
  - classes: conainer DOM class set (has, none, visible ...)

- useJdModalEntrySetup(): (ex: JdModalEntry.vue)
  - refModalContainer: require modal DOM container
  - mounted(): require call onMounted|onBeforeMount
  - unmounted(): require call onUnmounted|onBforeUnmount
  - classes: conainer DOM class set (animate, direction ...)
  - styles: container DOM style set (animate ...)

[...source: component](https://github.com/molgga/jood-v-modal/tree/master/packages/lib/src/components/modal). \
[...source: hook](https://github.com/molgga/jood-v-modal/tree/master/packages/lib/src/composables/hook).

```typescript
// ex) MyModalEntry.vue
<template>
  <div class="my-modal-entry" :class="classes">
    <component :is="modalRef.component"></component>
  </div>
</template>
setup(props) {
  const {
    mounted, unmounted, onOverlayClick, refModalContainer, classes, styles
  } = useJdModalEntrySetup({ modalRef: props.modalRef });
  onMounted(() => {
    mounted();
  });
  onUnmounted(() => {
    unmounted();
  });
  return {};
}
<style lang="scss" scoped>
.my-modal-entry { 
  background-color:#ff0000; 
  transition: opacity 200ms;
  opacity:0;
  &.is-opening { opacty:1 } // modal open start
  &.is-closing { opacity:0; } // modal close start
  &.shadow { box-shadow: 0 10px 10px rgba(0,0,0,0.2); } // disableShadow: false
  &.ops-normal {} // ModalOpenStrategy.NORMAL
  &.ops-leftstack {} // ModalOpenStrategy.LEFT_STACK
  &.ops-rightstack {} // ModalOpenStrategy.RIGHT_STACK
  &.ops-topstack {} // ModalOpenStrategy.TOP_STACK
  &.ops-bottomstack {} // ModalOpenStrategy.BOTTOM_STACK
}
</style>
```

***

### See

- [Demo](https://molgga.github.io/jood-v-modal).
- [Demo(source)](https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/example).
- [Github](https://github.com/molgga/jood-v-modal).
- [NPM](https://www.npmjs.com/package/@jood/v-modal).
- [Doc](https://molgga.github.io/jood-v-modal/documents).