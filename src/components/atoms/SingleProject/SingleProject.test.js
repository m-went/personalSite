import { screen, render } from '@testing-library/react';
import SingleProject from './SingleProject';

const mockData = { name: 'Test project', url: 'someAddress', description: 'Project description' };
test('renders component', () => {
  render(<SingleProject name={mockData.name} url={mockData.url} description={mockData.description} />);
  const projectName = screen.getByText('Test project');
  const projectDescription = screen.getByText('Project description');
  const projectImg = screen.getByRole('img');
  expect(projectName).toBeInTheDocument();
  expect(projectDescription).toBeInTheDocument();
  expect(projectImg).toBeInTheDocument();
});
