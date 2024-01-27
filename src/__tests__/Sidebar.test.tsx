import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Sidebar from '../components/Sidebar';

describe('Sidebar', () => {
    test('renders Sidebar component correctly', () => {
        render(
            <Provider store={store}>
                <Sidebar />
            </Provider>
        )
    // Check if the icons in the light theme are present
    expect(screen.getByTestId('light-icon-0')).toBeInTheDocument();
    expect(screen.getByTestId('light-icon-2')).toBeInTheDocument();
 

    // Switch to dark theme and check if the icons in the dark theme are present
    fireEvent.click(screen.getByTestId('theme-switch-1'));
    expect(screen.getByTestId('dark-icon-1')).toBeInTheDocument();
    expect(screen.getByTestId('dark-icon-3')).toBeInTheDocument();
    

    // Check if the theme switch buttons are clickable and switch themes correctly
    fireEvent.click(screen.getByTestId('theme-switch-0'));
    expect(screen.getByTestId('light-icon-0')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('theme-switch-1'));
    expect(screen.getByTestId('dark-icon-1')).toBeInTheDocument();


    })
})