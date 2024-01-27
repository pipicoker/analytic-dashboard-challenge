import 'intersection-observer'

import {  render, screen, } from '@testing-library/react';
import CompareToPrevMonth from '../components/CompareToPrevMonth';

describe('CompareToPreviousMonth', () => {
    test('renders component correctly', () => {

        
        render(
            <CompareToPrevMonth />
        )

        expect(screen.getByText(/total order/i)).toBeInTheDocument()
        expect(screen.getByText(/total refund/i)).toBeInTheDocument()
        expect(screen.getByText(/average sale/i)).toBeInTheDocument()
        expect(screen.getByText(/total income/i)).toBeInTheDocument()

        expect(screen.getAllByText(/previous month/i)).toHaveLength(4)

    })


})