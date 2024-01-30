<template>
  <div class="action-header">
    <div class="panel-bar">
      <slot>
        <h2 class="title">{{ title }}</h2>
      </slot>
    </div>
    <div class="panel-action">
      <div class="aside">
        <slot name="aside"></slot>
      </div>
      <div class="spacer"></div>
      <div class="bside">
        <slot name="bside-left"></slot>
        <slot name="bside">
          <button class="action-icon" v-bind="gtmCloseActionAttr" @click="onClose">
            <svg class="icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.0605 18L27.2805 9.77999C27.5735 9.48699 27.5735 9.01299 27.2805 8.71999C26.9875 8.42699 26.5125 8.42699 26.2195 8.71999L17.9995 16.939L9.78051 8.71999C9.48751 8.42699 9.01251 8.42699 8.71951 8.71999C8.42651 9.01299 8.42651 9.48699 8.71951 9.77999L16.9395 18L8.71951 26.22C8.42651 26.513 8.42651 26.987 8.71951 27.28C8.86651 27.427 9.05851 27.5 9.24951 27.5C9.44151 27.5 9.63351 27.427 9.78051 27.28L17.9995 19.061L26.2195 27.28C26.3665 27.427 26.5585 27.5 26.7495 27.5C26.9415 27.5 27.1335 27.427 27.2805 27.28C27.5735 26.987 27.5735 26.513 27.2805 26.22L19.0605 18Z"
                fill="#222222"
              />
            </svg>
            <span class="label">닫기</span>
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useJdModalRef } from '@jood/v-modal';

defineProps({
  title: {
    type: String,
    default: '',
  },
  gtmCloseActionAttr: {
    type: Object,
    default: () => ({}),
  },
});

const modalRef = useJdModalRef();
const onClose = () => {
  modalRef.close();
};
</script>

<style lang="scss" scoped>
.action-header {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 22px;
  min-height: 53px;
  border-bottom: solid 1px #f0f0f0;
  box-sizing: border-box;

  .panel-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    padding-bottom: 1px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    .title {
      font-size: 18px;
      font-weight: 400;
      letter-spacing: -0.2px;
      color: #282828;
    }
  }

  .panel-action {
    position: relative;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    .spacer {
      flex: 1;
    }
    .aside {
      display: flex;
      align-items: center;
      margin-left: -10px;
      > .action {
        margin-left: 5px;
      }
      > .action-icon {
        margin-left: 10px;
      }
    }
    .bside {
      display: flex;
      align-items: center;
      margin-right: -10px;
    }
  }
  .action {
    display: block;
    padding: 8px 6px;
    overflow: hidden;
    font-size: 16px;
    line-height: 16px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
  .action-icon {
    display: flex;
    overflow: hidden;
    text-indent: -9999px;
    font-size: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    .icon {
      display: block;
      width: 32px;
      height: 32px;
      object-fit: contain;
    }
  }
}
</style>
