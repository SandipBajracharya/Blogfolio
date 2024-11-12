type ButtonProps = {
  text: string;
  isPrimary?: boolean;
  type?: 'submit' | 'button';
  onClick?: () => void;
};

export default function Button({ text, isPrimary = false, type = 'button', onClick }: ButtonProps) {
  const triggerClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={`${isPrimary ? 'bg-dark-grey text-dark-grey border-[1.5px] bg-transparent dark:text-fade-grey dark:border-primary' : 'bg-accent text-white'} px-4 py-2 rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none `}
      onClick={triggerClick}
    >
      {text}
    </button>
  );
}
