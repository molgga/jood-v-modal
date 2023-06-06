# Vue3 modal UI 😎

Vue 기반 프로젝트의 모달 UI 기능을 제공합니다.

- Vue3 를 지원합니다. / Vue2 는 지원하지 않습니다.
- 모달의 상태 관찰과 데이터 전달은 rxjs 를 사용합니다.

## 목표

프론트엔드를 하다보면 대부분의 프로젝트에서 모달 기능을 사용합니다. 그만큼 모달 기능을 제공하는 좋은 라이브러리들이 아주 많지만, 디자인/기획/개발에 필요한 요구사항을 모두 만족하는 라이브러리를 찾거나 커스텀 하는건 쉽지 않았습니다.

`@jood/v-modal` 역시 모든 요구사항을 만족하긴 어렵겠지만, 모달을 사용하면서 겪었던 어려움과 필요한 기능을 해결하기 위해 아래 목표를 두고 제작
되었습니다.

- 모달의 기본 디자인을 변경할 수 있어야 한다.
- 모달이 열리거나 닫히는 애니메이션(스타일) 정의가 가능해야 한다.
- 변경하려는 기본 디자인과 애니메이션을 전체 또는, 일부 모달에만 적용이 가능해야 한다.
- 모달로 열리는 컴포넌트와 그 하위 컴포넌트에 데이터 전달이 가능해야 한다.
- 열려진 모달에서 전달한 결과를 원한다면 어디에서든 전달 받을 수 있어야 한다.
- 모달이 열리거나 닫히는 상태를 원한다면 어디에서든 관찰 가능해야 한다.