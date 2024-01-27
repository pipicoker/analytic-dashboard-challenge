import 'intersection-observer'

import {  render, screen, } from '@testing-library/react';
import { Provider } from 'react-redux';

import TopPlatform from '../components/TopPlatform';


describe('LastOrders', () => {
    test('renders component correctly', () => {
        render(
                 <TopPlatform />
        )
       expect(screen.getByRole('heading', {level: 3})).toBeInTheDocument()
       expect(screen.getByRole('button')).toBeInTheDocument()


        
    })


})