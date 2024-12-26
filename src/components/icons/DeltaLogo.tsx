import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export default function DeltaLogo({ className }: Props) {
  return (
    <svg
      className={cn(className)}
      width="2760"
      height="538"
      viewBox="0 0 2760 538"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-[#1a1a1a] dark:fill-white"
        d="M0 538C0 523.349 0 515.134 0 500.483L241.142 0H313.754L554 500.483V538H92.3333C56.2749 538 36.0584 538 0 538ZM277 390.932L460.77 477.222C460.77 477.222 369.088 278.031 311.065 150.07C307.212 141.573 301.204 128.31 301.204 128.31L299.411 124.277L297.618 120.243L294.5 112.5L291 104L289.25 99.75L287.5 95.5L277 69.7824V390.932Z"
      />
      <path
        className="fill-[#1a1a1a] dark:fill-white"
        d="M789 144H998.6L1051 196.4V353.6L998.6 406H789V353.6H976.767L998.6 331.767V218.233L976.767 196.4H789V144Z"
      />
      <path
        className="fill-[#1a1a1a] dark:fill-white"
        d="M1511.92 144V196.4H1302.32V248.8H1324.15H1459.52V301.2H1302.32V323.033V353.6H1511.92V406H1249.92V301.2V275V248.8V144H1511.92Z"
      />
      <path
        className="fill-[#1a1a1a] dark:fill-white"
        d="M1710.83 144H1763.23V353.6H1920.43V406H1710.83V144Z"
      />
      <path
        className="fill-[#1a1a1a] dark:fill-white"
        d="M2067.15 144H2329.15V196.4H2224.35V406H2171.95V196.4H2067.15V144Z"
      />
      <path
        className="fill-[#1a1a1a] dark:fill-white"
        d="M2497.5 406V301.2L2654.7 144H2759.5V406H2707.1V196.4H2676.53L2549.9 323.033V406H2497.5Z"
      />
    </svg>
  );
}
