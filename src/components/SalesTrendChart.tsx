import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/theme.Slice';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip

  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
  );

  export const options = {
    responsive: true,
    
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks : {
                color: '#525252',
                font: {
                    size: 14,
                    weight: 600
                }
            }
        },
        y: {
            
            ticks : {
                color: '#525252',
                font: {
                    size: 12,
                    weight: 600

                }
            }
        }
    },

    

  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // const canvas = document.getElementById('canvas') as HTMLCanvasElement
  // const ctx = canvas.getContext("2d")
  // const gradient = ctx?.createLinearGradient(0,0,0,400) 
  // gradient?.addColorStop(0, 'rgba(52, 202, 165, 1)'); 
  // gradient?.addColorStop(1, 'rgba(52, 202, 165, 0.00)');

 const data = {
  labels,
  datasets: [ {
    label: 'dataset',
    borderRadius: 20,
    data: [60000, 32000, 10000, 8000, 9000, 2040, 12500, 37000, 19000, 4000, 17200, 13240],
    barThickness: 30,
    backgroundColor: 'rgba(52, 202, 165, 0.10)',
    hoverBackgroundColor: 'red',

  }
    
  ],
};




const SalesTrendChart = () => {
    const theme = useSelector(selectTheme)

    if (window.innerWidth < 768) {
      data.datasets[0].barThickness = 18; 
    }
 
  return (
    <div className='md:h-[374px]  ml-5 mr-5 lg:mr-0 mt-5 px-5 py-4 bg-[#FFF] dark:bg-[#0D0D0D] border border-[#EDF2F7] dark:border-[#1A1A1A] rounded-[14px] font-PJS'>

        <div className='flex justify-between items-center'>
            <h3 className='md:text-lg font-semibold text-[#26282C] dark:text-[#D3D5D9]'>Sales Trend</h3>

            <div className='flex items-center gap-3 text-sm font-medium text-[#3A3F51]'>
                Sort by: 
                <div className='flex items-center border border-[#E1DFDF] dark:border-[#2D2A2A] bg-[#FFF] dark:bg-[#0D0D0D] px-3 md:px-4 py-1.5 rounded-[20px] gap-[8px] md:gap-[10px] text-xs '>
                    Weekly
                    <div className={theme === 'light' ? 'flex' : 'hidden'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z" fill="black"/>
                      </svg>
                    </div>
                      

                    <div className={theme === 'dark' ? 'flex' : 'hidden'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z" fill="white"/>
                      </svg>
                    </div>               


                </div>

            </div>
        </div>

        <div className='h-full'>
        <Bar options={options} data={data} width={window.innerWidth < 768 ? 300 : window.innerWidth < 1024 ? 696 : 696} height={window.innerWidth < 768 ? 200 : window.innerWidth < 1024 ? 250 : 288} className='mt-4' />


        </div>
        
    </div>
  )
}

export default SalesTrendChart