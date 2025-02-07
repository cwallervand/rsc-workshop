
type AddTodoFormProps = {
  className?: string;
};

export const AddTodoForm = ({ className }: AddTodoFormProps) => {
  return (
    <form className={className}>
      <p><b>Implementer skjemaet i denne komponenten</b></p>
    </form>
  );
};
