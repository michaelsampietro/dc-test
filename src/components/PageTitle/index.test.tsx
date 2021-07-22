import { render, screen } from "@testing-library/react"
import PageTitle from ".";


describe('GroupData', () => {
  test('renders correctly', () => {
    render(<PageTitle title='Title' />);
    expect(screen.getByText('Title')).toBeInTheDocument();
  })
})