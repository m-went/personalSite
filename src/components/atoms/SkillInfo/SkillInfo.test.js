import { screen, render, fireEvent } from '@testing-library/react';
import SkillInfo from './SkillInfo';
import icon from '../../../assets/icons/js-icon.svg';

const mockData = { skillName: 'Javascript', icon: icon, bgColor: 'yellow' };
describe('skillInfo tests', () => {
  test('render component', () => {
    render(<SkillInfo skillName={mockData.skillName} bgColor={mockData.bgColor} icon={mockData.icon} />);
    const skillInfo = screen.getByTestId('skillInfo');
    const name = screen.getByText('Javascript');
    expect(skillInfo).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  test('change bg color on hover', () => {
    render(<SkillInfo skillName={mockData.skillName} bgColor={mockData.bgColor} icon={mockData.icon} />);
    const skillInfo = screen.getByTestId('skillInfo');
    expect(skillInfo).toBeInTheDocument();
    fireEvent.mouseOver(skillInfo);
    expect(skillInfo).toHaveStyle('background-color: yellow');
  });
});
