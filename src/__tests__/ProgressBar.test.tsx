import { render, screen } from '@testing-library/react';
import ProgressBar from '../components/ProgressBar';
import { progressBarData } from '../assets/data/progressbar';

describe('ProgressBar', () => {
    test('renders ProgressBar component correctly', () => {
      render(<ProgressBar />);
  
      progressBarData.forEach((data, index) => {
        // Check if platform text is present
        const platformText = screen.getByText(data.platform);
        expect(platformText).toBeInTheDocument();
  
        // Check if progress bar is present and has the correct width and background color
        const progressBar = screen.getByTestId(`progress-bar-${index}`);
        expect(progressBar).toBeInTheDocument();
        expect(progressBar).toHaveStyle({ width: `${data.progress}%`, background: data.color });

  
        // Check if amount and percentage text is present
        const amountText = screen.getByText(`$${data.amount}`);
        const percentageText = screen.getByText(`+${data.percentage}%`);
  
        expect(amountText).toBeInTheDocument();
        expect(percentageText).toBeInTheDocument();
      });
    });
  });