# Todo List

> **TodoList 컴포넌트 분리 `components`**

- TodoInput (**입력 박스**)
- TodoList (**목록**)
- TodoItem (**목록 아이템**)

> **인터셉터 `api`**

- axios 통신 전 별도의 예외 처리가 필요하면 `axios.ts` 인스턴스에 로직을 추가하시면 됩니다.

> **커스텀 훅 `hooks`**

- useAxios (**json-server 데이터 통신**)
- useInput (**form 입력**)
- useTodos (**useAxios 호출하는 곳 - CRUD 로직**)
  - queryKey의 경우, enum으로 관리하였으나, 만약 추가될 시 따로 디렉토리를 추가하여 보관해야 합니다.
- useConfirm (**CRUD 관련 UX 정의**)

> **타입 분기처리 `types`**

- commonType (**전역으로 쓰이는 interface 또는 type**)
