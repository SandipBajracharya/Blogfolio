type ButtonProps = {
  text: string;
  isPrimary?: boolean;
};

export default function Button({ text, isPrimary = false }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${isPrimary ? 'bg-dark-grey text-dark-grey border-[1.5px] bg-transparent dark:text-fade-grey dark:border-primary' : 'bg-accent text-white'} px-4 py-2 rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none `}
    >
      {text}
    </button>
  );
}
