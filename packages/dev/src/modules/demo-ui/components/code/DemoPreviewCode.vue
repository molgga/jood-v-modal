<template>
  <div class="demo-preview-code">
    <template v-if="viewState.hasHead">
      <div class="code-head">
        <h3 class="tit">{{ viewState.title }}</h3>
        <div class="desc">{{ viewState.description }}</div>
      </div>
    </template>
    <div ref="refContainer" class="panel-viewer">
      <pre :class="viewState.language"><code><slot>{{ viewState.code }}</slot></code></pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, shallowRef, onMounted } from 'vue';
// @ts-ignore
import Prismjs from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';

export default defineComponent({
  name: 'DemoPreviewCode',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    lang: {
      type: String,
      default: 'typescript'
    },
    code: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const refContainer = shallowRef(null);
    const viewState = computed(() => {
      const { title, description, lang = '', code = '' } = props;
      const hasHead = title || description;
      return {
        hasHead,
        title,
        description,
        language: `language-${lang}`,
        code: code.trim()
      };
    });
    onMounted(() => {
      // Prismjs.highlightElement(refContainer.value);
      Prismjs.highlightAllUnder(refContainer.value);
    });
    return {
      refContainer,
      viewState
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-preview-code {
  .panel-head {
    .tit {
      font-size: 18px;
      font-weight: 600;
      color: #222222;
    }
    .desc {
      margin-top: 5px;
      color: #666666;
    }
  }
  .panel-viewer {
    ::v-deep(pre) {
      display: block;
      box-shadow: none;
      border-radius: 5px;
    }
    ::v-deep(pre > code) {
      display: block;
      padding: 7px 10px;
      font-weight: normal;
      line-height: 1.7;
    }
  }
}
</style>
