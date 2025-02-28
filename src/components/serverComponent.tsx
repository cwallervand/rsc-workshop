import { componentTypeClass } from "~/components/utils/componentTypeUtils";

type ServerComponentProps = {
  message?: string;
  children?: React.ReactNode;
}

export const ServerComponent = (
  { message = "Hello ServerComponent!", children }: ServerComponentProps
) => {
  console.log(`### ServerComponent: ${message} ###`);
  return (
    <div className={componentTypeClass}>
      <p>{message}</p >
      {children}
    </div >
  );
}; 
