import React, { useEffect, useState } from 'react';
import { ageOptions } from '.';
import { useDispatch } from 'react-redux';
import { addUser, editUser } from '../../../../redux/reducers/userReducer';

function FormModal({ isOpen = false, setIsOpen, selectedUser }) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ name: '', age: '', email: '' });

    useEffect(() => {
        if (selectedUser) {
            setFormData({
                id: selectedUser.id,
                name: selectedUser.name,
                age: selectedUser.age,
                email: selectedUser.email,
            });
        } else {
            setFormData({ name: '', age: '', email: '' });
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = formData.name && formData.email && formData.age !== "0";

        if (!isValid) {
            alert("Iltimos, barcha maydonlarni to‘ldiring!");
            return;
        }

        if (selectedUser) {
            dispatch(editUser(formData));
        } else {
            dispatch(addUser({ ...formData, id: Date.now() }));
        }

        setIsOpen(false);
    };

    const isDisabled = !formData.name || !formData.email || formData.age === "0";

    return isOpen ? (
        <div
            className='fixed top-0 left-0 right-0 bottom-0 bg-black/60 flex justify-center items-center z-50'
            onClick={(e) => e.target.id === 'overlay' && setIsOpen(false)}
            id='overlay'
        >
            <div className='bg-teal-900 min-w-[400px] p-8 rounded shadow-lg border border-teal-600'>
                <h3 className='text-xl font-bold text-center mb-4 text-white'>
                    {selectedUser ? 'Foydalanuvchini tahrirlash' : 'Yangi foydalanuvchi'}
                </h3>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <input
                        className='px-2 h-[35px] border border-teal-400 rounded bg-transparent text-white placeholder:text-teal-300'
                        type="text"
                        name='name'
                        placeholder='Ism sharif'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <select
                        className='px-2 h-[35px] border border-teal-400 rounded bg-transparent text-white'
                        name='age'
                        value={formData.age}
                        onChange={handleChange}
                    >
                        <option value='0' className='text-gray-400'>Yoshni tanlang</option>
                        {ageOptions}
                    </select>
                    <input
                        className='px-2 h-[35px] border border-teal-400 rounded bg-transparent text-white placeholder:text-teal-300'
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className="flex justify-end gap-2 pt-2">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
                        >
                            Bekor
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-1 bg-teal-600 text-white rounded hover:bg-teal-700 disabled:opacity-50"
                            disabled={isDisabled}
                        >
                            {selectedUser ? "Saqlash" : "Qo'shish"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ) : null;
}

export default FormModal;
