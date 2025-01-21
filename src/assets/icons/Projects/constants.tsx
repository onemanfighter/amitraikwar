import Apple from './Apple';
import Hourcoding from './Hourcoding';
import { ProjectName } from './type';

export const PROJECT_NAME_ICON_MAP: Record<ProjectName, JSX.Element> = {
  [ProjectName.Hourcoding]: <Hourcoding width={56} height={56} color="green" />,
  [ProjectName.MacOs]: <Apple width={56} height={56} color="white" />,
};
