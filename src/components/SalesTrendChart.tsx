import {useRef, useEffect, useState} from 'react'
import { useSelector,  } from 'react-redux';
import { selectTheme } from '../redux/theme.Slice';
import {useAnimation, motion, useInView} from 'framer-motion'

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

   const options = {
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

  const GradientColor = (context: any) => {
    const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "#34CAA5"); 
    gradient.addColorStop(1, "rgba(52, 202, 165, 0.00)");
    return gradient;
  };

const SalesTrendChart = () => {
    const theme = useSelector(selectTheme)
    const [sortbyBtn, setSortbyBtn] = useState('Monthly')
    const [openDropDown, setOpenDropDown] = useState(false)
    const [labels, setLabels] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
    const [range, setRange] = useState([60000, 32000, 10000, 38000, 59000, 20040, 19500, 52000, 47000, 17000, 17200, 13240])
    let data = {
      labels,
          datasets: [ {
            label: 'dataset',
            borderRadius: 20,
            data: range,
            barThickness: 30,
            backgroundColor: 'rgba(52, 202, 165, 0.10)',
            hoverBackgroundColor: GradientColor
          }
            
          ],
    }

    // adjust bar thickness for mobile screen
    if (window.innerWidth < 768) {
      data.datasets[0].barThickness = 18; 
    }

    const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
      if(inView) {
          controls.start('visible')
      }
      else{
          controls.start('hidden')
      }
  }, [controls, inView])
 
  return (
    <motion.div 
    ref={ref}
    animate={controls}
    variants={{
      hidden: {opacity: 0,  y: 75,},
      visible: {opacity: 1,  y: 0,},
    }}
    transition={{duration: 1, }}
    className='md:h-[374px] mx-4 md:mx-5 lg:mr-0 mt-5 px-5 py-4 bg-[#FFF] dark:bg-[#0D0D0D] border border-[#EDF2F7] dark:border-[#1A1A1A] rounded-[14px] font-PJS'>

        {/* this section contains the heading for the chart */}
        <div className='flex justify-between items-center'>
            <h3 className='md:text-lg font-semibold text-[#26282C] dark:text-[#D3D5D9]'>Sales Trend</h3>

            <div className='flex items-center gap-3 text-sm font-medium text-[#3A3F51]'>
                Sort by: 
                <div className='flex items-center border border-[#E1DFDF] dark:border-[#2D2A2A] bg-[#FFF] dark:bg-[#0D0D0D] px-3 md:px-4 py-1.5 rounded-[20px] gap-[8px] md:gap-[10px] text-xs '
                onClick={() => {setOpenDropDown(!openDropDown)}}>
                    {sortbyBtn}
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

        <div className={openDropDown ? 'flex justify-end ' : 'hidden'}>
          <div className='bg-[#FFF] dark:bg-[#0D0D0D] border border-[#E1DFDF] dark:border-[#2D2A2A]  absolute mt-2 w-[96px] py-2 flex flex-col px-2 items-center space-y-4 divide-y divide-[#E1DFDF] dark:divide-[#2D2A2A]  text-[#3A3F51] text-sm rounded-lg'>
            <p 
            onClick={() => {
              setOpenDropDown(false)
              setSortbyBtn('Weekly')
              setLabels(['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
              setRange([5000, 20000, 7000, 15000, 10000, 19000, 30000])
              }} className='cursor-pointer'>
              Weekly</p>
            <p onClick={() => {
              setOpenDropDown(false)
              setSortbyBtn('Yearly')
              setLabels(['2018','2019', '2020', '2021', '2022', '2023', '2024'])
              setRange([500000, 200000, 350000, 450000, 250000, 400000, 200000])
              }} className='cursor-pointer pt-2'>
              Yearly</p>
            <p onClick={() => {
              setOpenDropDown(false)
              setSortbyBtn('Montly')
              setLabels(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
              setRange([60000, 32000, 10000, 38000, 59000, 20040, 19500, 52000, 47000, 17000, 17200, 13240])

              }} className='cursor-pointer pt-2'>
                Monthly</p>
          </div> 
        </div>

        {/* this section is the chart itself */}
        <div className='h-full'>
          <Bar
            id='chart'
            data-testid="chart"
            options={options}
            data={data}
            width={window.innerWidth < 768 ? 300 : window.innerWidth < 1024 ? 696 : 696}
            height={window.innerWidth < 768 ? 200 : window.innerWidth < 1024 ? 250 : 288}
            className='mt-4'
          />
        
      </div>
        
    </motion.div>
  )
}

export default SalesTrendChart