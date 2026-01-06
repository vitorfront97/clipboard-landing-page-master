interface ButtonProps {
  children: React.ReactNode;
  color: string;
}

export default function Button({ children, color }: ButtonProps) {
  return (
    <a
      href="#"
      className={`px-8 py-3 rounded-full bg-${color} text-white shadow-lg transition-opacity hover:opacity-90`}
    >
      {children}
    </a>
  );
}
