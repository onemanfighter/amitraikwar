const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
}: {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}) => {
  const animationDuration = `${speed}s`;

  return (
    <>
      <style>
        {`@keyframes shine {
            0% {
                background-position: 100%;
                }
            100% {
                background-position: -100%;
                }
            }`}
      </style>
      <div
        className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
          animation: 'shine 5s linear infinite',
        }}
      >
        {text}
      </div>
    </>
  );
};

export default ShinyText;
