import { SVGProps } from 'react';

export function ChakraUI(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <linearGradient
          id="deviconChakraui0"
          x1="64"
          x2="64"
          y1="0"
          y2="128"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#7acbd4"></stop>
          <stop offset="1" stopColor="#29c6b7"></stop>
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="64" fill="url(#deviconChakraui0)"></circle>
      <path
        fill="#fff"
        d="M93.56 57.89a.913.913 0 0 0-.67-1.54H64.87c-1.71 0-1.43-.92-.82-2.04c.61-1.13 16.11-29.4 16.11-29.4c.07-.15.11-.3.11-.47a1.082 1.082 0 0 0-1.84-.77S34.5 67.45 34.5 67.45c-.19.18-.3.42-.3.7c0 .53.43.96.96.96h29.97c1.88 0 1.21 1.08.75 1.71s-23.15 32-23.15 32a1.129 1.129 0 0 0 .9 1.81c.31 0 .59-.12.79-.32s49.13-46.38 49.13-46.38l.01-.01l.02-.02Z"
      ></path>
    </svg>
  );
}
