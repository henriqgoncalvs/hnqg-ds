import { Slot } from '@radix-ui/react-slot';
export interface ButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ asChild = false, children }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className="py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white">
      {children}
    </Comp>
  );
}
