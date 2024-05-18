// Skills

export type SkillData = {
  title: string;
  description: string;
  icon: string;
  chips: string[];
  projects: NavData[];
  blogs: NavData[];
};

export type NavData = {
  title: string;
  path: string;
};
