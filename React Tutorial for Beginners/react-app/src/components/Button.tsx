interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};
