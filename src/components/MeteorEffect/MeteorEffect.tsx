import { Box } from '@chakra-ui/react';

const COLOR_MAP = ['#64748b', '#ffffff', '#00ffff', '#ff00ff'];

const MeteorsEffect = ({ number = 20 }: { number?: number }) => {
  const meteors = new Array(number).fill(true);
  return (
    <Box className="absolute top-0 left-0 w-full h-full" overflowX={'hidden'}>
      <style>{`
        @keyframes meteor {
            0% {
                transform: rotate(215deg) translateX(0px);
                opacity: 1;
                }
            70% {
                opacity: 1;
                }
            100% {
                transform: rotate(215deg) translateX(-1000px);
                opacity: 0;
            }
        }`}</style>
      {meteors.map((_el, idx) => (
        <span
          key={'meteor' + idx}
          className={
            'animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-blue-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]' +
            " before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#716d7f] before:to-transparent"
          }
          style={{
            backgroundColor: COLOR_MAP[idx % 4],
            animation: 'meteor 5s linear infinite',
            top: 0,
            left: Math.floor(Math.random() * 100) + '%',
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
          }}
        ></span>
      ))}
    </Box>
  );
};

export default MeteorsEffect;
