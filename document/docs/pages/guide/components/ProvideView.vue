<template>
  <div>
    <div class="view-tb">
      <div class="tit">JdModalProvider.vue</div>
      <div class="desc">
        <ul class="desc-list">
          <li>이 컴포넌트는 서비스의 상태를 관찰하며 모달의 렌더링을 담당합니다.</li>
        </ul>
      </div>
      <div class="box">
        <div class="view-tb">
          <div class="tit">JdModalEntry.vue</div>
          <div class="desc">
            <ul class="desc-list">
              <li>이 컴포넌트는 모달의 애니메이션과 overlayClose 처리 등 기본 구현이 포함됩니다.</li>
              <li>가장 중요한 JdModalRef 의 주입(provide)을 담당합니다.</li>
            </ul>
          </div>
          <div class="box">
            <div class="view-tb em">
              <div class="tit">ExampleModal.vue</div>
              <div class="desc">
                <ul class="desc-list">
                  <li>서비스를 통해 열린 모달 컴포넌트 입니다.</li>
                  <li>이 컴포넌트 부터는 useJdModalRef 를 통해 JdModalRef 를 사용할 수 있습니다.</li>
                </ul>
              </div>
              <div class="box">
                <div class="view-tb">
                  <div class="tit">... SomeYourComponent.vue ...</div>
                  <div class="desc">
                    <ul class="desc-list">
                      <li>useJdModalRef 를 통해 JdModalRef 를 사용할 수 있습니다.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.view-tb {
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.01);
  &.em {
    background-color: rgba(40, 155, 255, 0.04);
  }
  .tit {
    font-size: 0.9rem;
    font-weight: bold;
  }
  .desc {
    margin-top: 8px;
    font-size: 0.85rem;
  }
  .desc-list {
    margin: 3px 0;
    li {
      margin: 3px 0;
    }
  }
  .box {
    margin-top: 12px;
  }
}
:root.dark {
  .view-tb {
    border: 1px dashed rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
