# @jood/v-modal

> **[Demo](https://molgga.github.io/jood-v-modal)** |
> **[Github](https://github.com/molgga/jood-v-modal)** 
> \
> \
> ![Vue](https://img.shields.io/static/v1.svg?label=&style=flat-square&logoColor=white&color=4fc08d&logo=vue.js&message=Vue) > ![Typescript](https://img.shields.io/static/v1.svg?label=&style=flat-square&logoColor=white&color=3178c6&logo=typescript&message=Typescript) > ![NPM license](https://img.shields.io/npm/l/@jood/v-modal) > ![NPM download](https://img.shields.io/npm/dt/@jood/v-modal) > ![NPM bundle size](https://img.shields.io/bundlephobia/min/@jood/v-modal)


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
      <td>
        <img src="
        https://github.com/user-attachments/assets/17b52180-fe54-465c-b319-9741f1bfd58e" alt="@jood/v-modal demo 4" style="max-width: 100%;" />
      </td>
      <td>
        <img src="
        https://github.com/user-attachments/assets/62c3c441-0f31-4495-889c-a9f4eadd5aba" alt="@jood/v-modal demo 5" style="max-width: 100%;" />
      </td>
    </tr>
  </tbody>
</table>

*** 

Vue3 모달을 위한 패키지 입니다. \
 \
모달의 기본 기능이라고 할 수 있는 데이터 전달과 결과 받기 뿐만이 아니라
모달의 스타일과 애니메이션을 사용자(개발자)가 확장할 수 있는 방법을 제공([OpenStrategy interface](https://molgga.github.io/jood-v-modal/v2/example/example-open-startegy.html#defaultopenstrategy), [EntryComponent](https://molgga.github.io/jood-v-modal/v2/example/example-entry-component.html)) 한다거나, 완전히 분리된 모달 관리 객체([JdModalRef](https://molgga.github.io/jood-v-modal/v2/guide/usage.html#jdmodalref))를 주입 해주는 방식을 취함으로써 사용자가 모달의 기능을 쉽게 사용하고 확장할 수 있도록 하는것을 목표로 합니다.

***

🙇‍♂️ Angular component Dialog 의 기능/개발 방식에서 많은 영감을 받고 참고하였습니다.

  - https://material.angular.io/components/dialog/overview
  - https://github.com/angular/components/tree/main/src/cdk/dialog


## 목표

- 모달은 중첩하여 열거나 닫을 수 있어야 한다. 
  - [Demo: 모달 기본 옵션과 기능](https://molgga.github.io/jood-v-modal/v2/example/example-open.html)
- 모달이 열리거나 닫히는 애니메이션(스타일)은 사용자가 확장 가능해야 한다. 
  - [Demo: OpenStrategy interface 구현하기](https://molgga.github.io/jood-v-modal/v2/example/example-open-startegy.html)
- 변경하려는 기본 디자인과 애니메이션을 전체 또는, 일부 모달에만 적용이 가능해야 한다. 
  - [Demo: EntryComponent 이해하기](https://molgga.github.io/jood-v-modal/v2/example/example-entry-component.html)
    - [Doc: 계층 구조 이해하기](https://molgga.github.io/jood-v-modal/v2/guide/usage.html#%E1%84%80%E1%85%A8%E1%84%8E%E1%85%B3%E1%86%BC-%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9)
  - [Demo: OpenStrategy](https://molgga.github.io/jood-v-modal/v2/example/example-open-startegy.html#defaultopenstrategy)
- 모달로 열리는 컴포넌트와 그 하위 컴포넌트에 데이터 전달이 가능해야 한다.
  - [Demo: 모달에서 결과 전달하기](https://molgga.github.io/jood-v-modal/v2/example/example-close.html)
  - [Demo: hooks 로 간편하게 사용하기](https://molgga.github.io/jood-v-modal/v2/example/example-use-intercept-close.html)
- 모달이 열리거나 닫히는 상태를 어디서든 관찰 가능해야 한다.
  - [Doc: 모달 서비스의 주요 상태관리](https://molgga.github.io/jood-v-modal/v2/api/jd-modal-service.html#observemodalstate)
  - [Doc: JdModalRef 를 통해 감지하기](https://molgga.github.io/jood-v-modal/v2/api/jd-modal-ref.html#observeclosed)


