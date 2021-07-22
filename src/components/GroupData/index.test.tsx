import { render, screen } from "@testing-library/react"
import GroupData from "."


describe('GroupData', () => {
  test('renders correctly with title and data', () => {
    render(<GroupData dataTitle='Title' data='Data' />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Data')).toBeInTheDocument();
  })

  test('renders correctly without data provided', () => {
    render(<GroupData dataTitle='Title' />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
  })
})