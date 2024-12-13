import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export default function DeltaLogo({ className }: Props) {
  return (
    <svg
      className={cn(className)}
      width="596"
      height="644"
      viewBox="0 0 596 644"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-[#1a1a1a] dark:fill-white"
        d="M595.6 644H0.400002V615.2L248.4 40.8L342.8 -5.34058e-05L595.6 610.4V644ZM272.4 102.4L57.2 603.2H479.6L272.4 102.4Z"
      />
    </svg>
  );
}
