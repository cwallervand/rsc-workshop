import { type FC } from "react";

type CheckBadgeProps = {
  done: boolean;
  className?: string;
};

export const CheckBadge: FC<CheckBadgeProps> = ({ className, done }) => done ? (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`text-current ${className}`}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
) : null;
