interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="cursor-pointer rounded-lg bg-purple-700 px-5 py-2 text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
