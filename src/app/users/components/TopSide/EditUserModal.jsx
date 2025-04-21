import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../../../../redux/reducers/userReducer';
import { ageOptions } from '.';

function EditUserModal({ isOpen, setIsOpen, selectedUser }) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ name: '', age: '', email: '' });

    useEffect(() => {
        if (selectedUser) {
            setFormData({
                id: selectedUser.id,
                name: selectedUser.name,
                age: selectedUser.age,
                email: selectedUser.email
            });
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.age || !formData.email || formData.age === "0") {
            alert("Iltimos, barcha maydonlarni to‘ldiring.");
            return;
        }

        const confirmEdit = window.confirm("Foydalanuvchini tahrirlashni tasdiqlaysizmi?");
        if (!confirmEdit) return;

        dispatch(editUser(formData));
        setIsOpen(false);
    };

    return isOpen ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/60 flex justify-center items-center z-50">
            <div className="bg-white min-w-[400px] p-8 rounded shadow-lg border border-teal-600">
                <h3 className="text-xl font-bold text-center mb-4 text-teal-700">Foydalanuvchini tahrirlash</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-teal-700">
                    <input
                        className="px-2 h-[35px] border border-teal-400 rounded text-teal-700 placeholder:text-teal-400 bg-white"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ism"
                    />
                    <select
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="px-2 h-[35px] border border-teal-400 rounded text-teal-700 bg-white"
                    >
                        <option value="0" className="text-gray-400">Yosh tanlang</option>
                        {ageOptions}
                    </select>
                    <input
                        className="px-2 h-[35px] border border-teal-400 rounded text-teal-700 placeholder:text-teal-400 bg-white"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <div className="flex justify-end gap-2 mt-2">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-1 bg-gray-200 text-teal-700 border border-teal-400 rounded hover:bg-gray-300"
                        >
                            Bekor
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-1 bg-teal-600 text-white rounded hover:bg-teal-700 disabled:opacity-50"
                            disabled={!formData.name || !formData.age || !formData.email || formData.age === "0"}
                        >
                            Saqlash
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ) : null;
}

export default EditUserModal;
