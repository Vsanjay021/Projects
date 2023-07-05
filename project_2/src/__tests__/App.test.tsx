
import { render, fireEvent } from '@testing-library/react';
import { Tour } from '../Tour';

describe('Tour component', () => {
  const tour = {
    id: '1',
    image: 'tour-image.jpg',
    info: 'Information',
    name: 'Name',
    price: '100',
  };

  test('renders tour details correctly', () => {
    const removeTour = jest.fn();
    const { getByText, getByAltText } = render(
      <Tour {...tour} removeTour={removeTour} />
    );

    const tourName = getByText('Name');
    const tourPrice = getByText('$100');
    const tourInfo = getByText('Information...');
    const tourImage = getByAltText('Name');

    expect(tourName).toBeInTheDocument();
    expect(tourPrice).toBeInTheDocument();
    expect(tourInfo).toBeInTheDocument();
    expect(tourImage).toBeInTheDocument();
  });

  test('Shortens tour info and expands Tour info on button click', () => {
    const removeTour = jest.fn();
    const { getByText } = render(<Tour {...tour} removeTour={removeTour} />);

    const shortenedInfo = getByText('Information...');
    expect(shortenedInfo).toBeInTheDocument();

    const readMoreButton = getByText('read more');
    fireEvent.click(readMoreButton);

    const fullInfo = getByText('Information');
    expect(fullInfo).toBeInTheDocument();

    const showLessButton = getByText('show less');
    expect(showLessButton).toBeInTheDocument();

    fireEvent.click(showLessButton);

    const shortenedInfoAgain = getByText('Information...');
    expect(shortenedInfoAgain).toBeInTheDocument();
  });

  test('calls removeTour function on delete button click', () => {
    const removeTour = jest.fn();
    const { getByText } = render(<Tour {...tour} removeTour={removeTour} />);

    const deleteButton = getByText('not interested');
    fireEvent.click(deleteButton);

    expect(removeTour).toHaveBeenCalledTimes(1);
    expect(removeTour).toHaveBeenCalledWith('1');
  });
});
