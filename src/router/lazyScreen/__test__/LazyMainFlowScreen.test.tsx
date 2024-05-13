import { render, screen } from '@testing-library/react';
import {
  LazyAboutScreen,
  LazyBlogsScreen,
  LazyContactScreen,
  LazyExperienceScreen,
  LazyHomeScreen,
  LazyProjectsScreen,
  LazyResumeScreen,
  LazySkillsScreen,
} from '../LazyMainFlowScreen';

describe('LazyMainFlowScreen', () => {
  it('should render lazy home screen', async () => {
    const { container } = render(<LazyHomeScreen />);

    expect(container).toMatchSnapshot();
  });

  it('should render lazy about screen', async () => {
    const { container } = render(<LazyAboutScreen />);

    expect(container).toMatchSnapshot();
  });

  it('should render lazy projects screen', async () => {
    const { container } = render(<LazyProjectsScreen />);

    expect(container).toMatchSnapshot();
  });

  it('should render lazy blogs screen', async () => {
    const { container } = render(<LazyBlogsScreen />);

    expect(container).toMatchSnapshot();
  });

  it('should render lazy experience screen', async () => {
    const { container } = render(<LazyExperienceScreen />);

    expect(container).toMatchSnapshot();
  });

  it('should render lazy resume screen', async () => {
    const { container } = render(<LazyResumeScreen />);

    expect(container).toMatchSnapshot();
  });

  it('should render lazy skills screen', async () => {
    const { container } = render(<LazySkillsScreen />);

    expect(container).toMatchSnapshot();
  });

  it('should render lazy contact screen', async () => {
    const { container } = render(<LazyContactScreen />);

    expect(container).toMatchSnapshot();
  });
});
