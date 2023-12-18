declare interface Todo {
  id: string;
  title: string;
  content: string;
  date: Date;
  isDone: boolean;
}

declare interface Button {
  color: {
    success: '#0abd00';
    primary: '#e31c5f';
    warning: '#ff4444';
  };
  onClick: () => void | Promise<void>;
}
