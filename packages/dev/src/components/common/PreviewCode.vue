<template>
  <div class="preview-code">
    <template v-if="viewState.hasHead">
      <div class="code-head">
        <h3 class="tit">{{ viewState.title }}</h3>
        <div class="desc">{{ viewState.description }}</div>
      </div>
    </template>
    <vue-code-highlight class="panel-viewer" :language="viewState.language">
      <slot>{{ viewState.code }}</slot>
    </vue-code-highlight>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
// @ts-ignore
import { component as VueCodeHighlight } from 'vue-code-highlight';

export default defineComponent({
  components: {
    VueCodeHighlight
  },
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
    const viewState = computed(() => {
      const { title, description, lang = '', code = '' } = props;
      const hasHead = title || description;
      return {
        hasHead,
        title,
        description,
        language: lang,
        code: code.trim()
      };
    });
    return {
      viewState
    };
  }
});
</script>

<style lang="scss" scoped>
.preview-code {
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
    ::v-deep > pre {
      display: block;
      box-shadow: none;
      border-radius: 5px;
    }
    ::v-deep > pre > code {
      display: block;
      padding: 7px 10px;
      font-weight: normal;
      line-height: 1.7;
    }
  }
}
</style>
