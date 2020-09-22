<template>
  <div class="demo-layout" :class="classes">
    <div class="ly-header" :style="headStyle">
      <div class="aside">
        <i class="menu-toggle material-icons" @click="onMenuToggle">
          <template v-if="layoutState.asideOpen">menu</template>
          <template v-else>menu_open</template>
        </i>
        <h1 class="tit">{{ title }}</h1>
      </div>
      <div class="spacer"></div>
      <div class="bside">
        <i
          v-if="outGithub"
          class="out-link material-icons"
          @click="onOutlink('goGithub')"
          title="Github"
        >code</i>
        <i
          v-if="outNpm"
          class="out-link material-icons"
          @click="onOutlink('goNpm')"
          title="NPM package"
        >move_to_inbox</i>
        <i
          v-if="outDoc"
          class="out-link material-icons"
          @click="onOutlink('goDoc')"
          title="Documentaion"
        >library_books</i>
      </div>
    </div>
    <div class="ly-aside" :style="asideStyle">
      <slot name="menu"></slot>
    </div>
    <div class="ly-body" :style="bodyStyle">
      <div class="ly-content">
        <slot></slot>
      </div>
    </div>
    <div class="ly-overlay" @click="onMenuToggle"></div>
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineComponent } from 'vue';
export default defineComponent({
  name: 'DemoLayout',
  props: {
    title: {
      type: String,
      default: 'foo'
    },
    sizeTop: {
      type: Number,
      default: 60
    },
    sizeAside: {
      type: Number,
      default: 240
    },
    outGithub: {
      type: Boolean,
      default: true
    },
    outNpm: {
      type: Boolean,
      default: true
    },
    outDoc: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const { emit } = context;
    const isWide = () => 960 <= window.innerWidth;
    const layoutState = reactive({
      asideOpen: isWide(),
      top: props.sizeTop,
      left: props.sizeAside,
      right: 0,
      bottom: 0
    });
    const padState = computed(() => {
      const { asideOpen, top: sizeTop, left: sizeLeft } = layoutState;
      const top = `${sizeTop}px`;
      const left = asideOpen && isWide() ? `${sizeLeft}px` : 0;
      return {
        top,
        left,
        right: 0,
        bottom: 0
      };
    });
    const headStyle = computed(() => {
      const { top } = padState.value;
      return {
        height: top
      };
    });
    const asideStyle = computed(() => {
      const { sizeAside } = props;
      const { asideOpen } = layoutState;
      const { top, left } = padState.value;
      const transX = asideOpen ? 0 : -sizeAside;
      return {
        top: top,
        width: `${sizeAside}px`,
        transform: `translateX(${transX}px)`
      };
    });
    const bodyStyle = computed(() => {
      const { top, right, bottom, left } = padState.value;
      return {
        padding: `${top} ${right} ${bottom} ${left}`
      };
    });
    const classes = computed(() => {
      const { asideOpen } = layoutState;
      return {
        'need-overlay': asideOpen && !isWide()
      };
    });

    const asideOpen = () => {
      layoutState.asideOpen = true;
    };
    const asideClose = () => {
      layoutState.asideOpen = false;
    };
    const asideToggle = () => {
      if (layoutState.asideOpen) {
        asideClose();
      } else {
        asideOpen();
      }
    };

    const onMenuToggle = () => {
      asideToggle();
    };

    const onOutlink = (emitName: string) => {
      emit(emitName);
    };

    return {
      layoutState,
      classes,
      headStyle,
      asideStyle,
      bodyStyle,
      onMenuToggle,
      onOutlink
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .ly-header {
    position: fixed;
    top: 0;
    left: 0;
    padding: 5px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    color: #ffffff;
    box-sizing: border-box;
    background-color: #2a9e64;
    z-index: 50;
    .aside {
      display: flex;
      flex-direction: row;
      align-items: center;
      .tit {
        margin-left: 10px;
        font-size: 20px;
        color: #ffffff;
      }
      .menu-toggle {
        display: block;
        width: 24px;
        height: 24px;
        font-size: 24px;
        line-height: 24px;
        cursor: pointer;
      }
    }
    .spacer {
      flex: 1;
    }
    .bside {
      display: flex;
      flex-direction: row;
      align-items: center;
      .out-link {
        display: block;
        margin: 0 10px;
        width: 24px;
        height: 24px;
        font-size: 24px;
        line-height: 24px;
        cursor: pointer;
      }
    }
  }
  .ly-aside {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    word-break: break-all;
    overflow-y: auto;
    box-sizing: border-box;
    border-right: 1px solid #e3e3e3;
    background-color: #ffffff;
    transition: transform 200ms;
    z-index: 10;
  }
  .ly-body {
    display: flex;
    padding: 20px 0 20px 200px;
    box-sizing: border-box;
    transition: padding 200ms;
  }
  .ly-content {
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
  }

  .ly-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &.need-overlay {
    .ly-overlay {
      display: block;
    }
  }
}
</style>
