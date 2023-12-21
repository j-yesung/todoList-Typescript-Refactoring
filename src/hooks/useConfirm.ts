import Swal from 'sweetalert2';
import { useTodosMutation } from './useTodosMutation';

export const useConfirm = (id: string) => {
  const { deleteTodos } = useTodosMutation();

  const checkAddTodo = () => Swal.fire('등록을 완료했습니다.', '', 'success');

  const checkDeleteTodo = () => {
    Swal.fire({
      title: '정말 삭제하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#48088A',
      confirmButtonText: '예',
      cancelButtonText: '아니오',
    }).then(result => {
      if (result.value) {
        deleteTodos(id);
        Swal.fire('삭제를 완료했습니다.', '', 'success');
      }
    });
  };

  return { checkAddTodo, checkDeleteTodo };
};
