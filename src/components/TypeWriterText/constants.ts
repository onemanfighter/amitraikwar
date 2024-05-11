import { Speed, SpeedValues } from './type';

const TransformToSpeed: Record<Speed, SpeedValues> = {
  [Speed.slow]: 99,
  [Speed.medium]: 50,
  [Speed.fast]: 10,
};

export { TransformToSpeed };
