import 'intersection-observer'

import {  render, screen, } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../redux/store';
import LastOrders from '../components/LastOrders';

describe('LastOrders', () => {
    test('renders component correctly', () => {

        
        render(
            <Provider store={store}>
                 <LastOrders />
            </Provider>
           
        )

        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByText(/last orders/i)).toBeInTheDocument()
    })


})