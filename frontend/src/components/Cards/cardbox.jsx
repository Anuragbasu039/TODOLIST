import React from 'react';
import { Card } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Pen, Trash2 } from 'lucide-react';

const Cardbox = () => {

    
    return (
        <div className='px-20 py-20 flex gap-10'>
            {/* Card 1 */}
            <Card className='bg-slate-200 w-[350px] h-64 py-5 px-5 flex flex-col justify-start'>
                <div className='bg-purple-400 rounded-full text-purple-900 w-24 px-5 py-1'>Business</div>
                <div className='flex justify-end items-center gap-5 mt-2'>
                    <Checkbox />
                    <Pen />
                    <Trash2 />
                </div>
                <div>
                    <h1 className='font-bold text-lg'>Finish the task on the board</h1>
                    <p className='text-sm text-gray-600'>Remember to finish task on the board. After finishing give for evaluation Matt.</p>
                </div>
                <p className='text-sm text-right text-gray-500 mt-20'>22.01.2023</p>
            </Card>

            {/* Card 2 */}
            <Card className='bg-slate-200 w-[350px] h-64 py-5 px-5 flex flex-col justify-start'>
                <div className='bg-green-400 rounded-full text-green-900 w-24 px-5 py-1'>Home</div>
                <div className='flex justify-end items-center gap-5 mt-2'>
                    <Checkbox />
                    <span>
                    <Pen />
                    </span>
                    <span>
                    <Trash2 />
                    </span>
                </div>
                <div>
                    <h1 className='font-bold text-lg'>Buy a new tea cup</h1>
                    <p className='text-sm text-gray-600'>Remember to buy a new tea cup.</p>
                </div>
                <p className='text-sm text-right text-gray-500 mt-20'>21.01.2023</p>
            </Card>

            {/* Card 3 */}
            <Card className='bg-slate-200 w-[350px] h-64 py-5 px-5 flex flex-col justify-start'>
                <div className='bg-amber-400 rounded-full text-amber-900 w-24 px-5 py-1'>Personal</div>
                <div className='flex justify-end items-center gap-5 mt-2'>
                    <Checkbox />
                    <Pen />
                    <Trash2 />
                </div>
                <div>
                    <h1 className='font-bold text-lg'>Hang out with Marry</h1>
                    <p className='text-sm text-gray-600'>Hang out with Marry, friday at 7 pm in Blue Wolf Café.</p>
                </div>
                <p className='text-sm text-right text-gray-500 mt-20'>20.01.2023</p>
            </Card>
        </div>
    );
}

export default Cardbox;
