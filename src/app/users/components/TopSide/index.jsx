import React, { useEffect, useState } from 'react';
import { agesOpt } from './data';
import FormModal from './FormModal';

export const ageOptions = agesOpt.map(age => (
    <option key={age.value} value={age.value}>
        {age.label}
    </option>
));

function TopSide(props) {
    const { selectedUser, setSelectedUser } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!isModalOpen) setSelectedUser(null);
    }, [isModalOpen]);

    return (
        <div className='mb-6 bg-white text-teal-700 p-4 rounded shadow'>
            <FormModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
            <h1 className='text-3xl font-bold text-center text-teal-700'>Users</h1>
            <div className='flex justify-between mt-4'>
                <div className='flex gap-2'>
                    <input
                        className='px-2 h-[30px] border border-teal-500 rounded text-teal-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400'
                        type='text'
                        placeholder='Search'
                        name='search'
                    />
                    <select
                        className='px-2 h-[30px] border border-teal-500 rounded text-teal-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400'
                        name='age'
                    >
                        <option value='0'>-</option>
                        {ageOptions}
                    </select>
                    <select
                        className='px-2 h-[30px] border border-teal-500 rounded text-teal-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400'
                        name='sort'
                    >
                        <option value='all'>all</option>
                        <option value='asc'>asc</option>
                        <option value='desc'>desc</option>
                    </select>
                </div>
                <div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className='px-3 h-[30px] border border-teal-600 rounded text-white bg-teal-600 hover:bg-teal-700'
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TopSide;
