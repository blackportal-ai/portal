import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export default function DeltaIcon({ className }: Props) {
  return (
    <svg
      className={cn(className)}
      width="554"
      height="538"
      viewBox="0 0 554 538"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-[#1a1a1a] dark:fill-white"
        d="M0 538C0 523.349 0 515.134 0 500.483L241.142 0H313.754L554 500.483V538H92.3333C56.2749 538 36.0584 538 0 538ZM277 390.932L460.77 477.222C460.77 477.222 369.088 278.031 311.065 150.07C307.212 141.573 301.204 128.31 301.204 128.31L299.411 124.277L297.618 120.243L294.5 112.5L291 104L289.25 99.75L287.5 95.5L277 69.7824V390.932Z"
      />
    </svg>
  );
}
