import 'intersection-observer'

import {  render, screen, } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../redux/store';
import Header from '../containers/Header';

describe('LastOrders', () => {
    test('renders component correctly', () => {

        render(
            <Provider store={store}>
                <Header/>

            </Provider>
            
        )

        expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
        
    })


})