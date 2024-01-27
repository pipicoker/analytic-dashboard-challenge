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
       
         // Check if the table headers are present
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Amount/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Invoice/i)).toBeInTheDocument();

    expect(screen.getAllByAltText(/user pix/i)).toHaveLength(5);

        
    })


})