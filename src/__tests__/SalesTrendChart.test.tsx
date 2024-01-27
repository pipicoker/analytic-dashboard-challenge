import 'intersection-observer'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SalesTrendChart from '../components/SalesTrendChart';

describe('SalesTrendChart', () => {
  test('renders SalesTrendChart component correctly', () => {
    render(
      <Provider store={store}>
        <SalesTrendChart />
      </Provider>
    );

    // Check if the Sales Trend heading is present
    expect(screen.getByText(/Sales Trend/i)).toBeInTheDocument();

    
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(screen.getByText(/Weekly/i)).toBeInTheDocument();

    
    expect(screen.getByTestId('chart')).toBeInTheDocument();
  });
});
