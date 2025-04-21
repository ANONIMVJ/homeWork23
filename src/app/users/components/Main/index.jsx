import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '../../../../assets/DeleteIcon';
import EditIcon from '../../../../assets/EditIcon';
import { removeUser } from '../../../../redux/reducers/userReducer';

function Main({ onEdit }) {
    const dispatch = useDispatch();
    const usersList = useSelector(state => state.users);

    const handleDelete = (id) => {
        const confirmed = window.confirm("Foydalanuvchini o'chirmoqchimisiz?");
        if (confirmed) dispatch(removeUser(id));
    };

    return (
        <div className='flex flex-col gap-3'>
            {usersList.map(user => (
                <div
                    key={user.id}
                    className='border border-teal-600 rounded flex justify-between bg-white text-teal-700'
                >
                    <div className='p-3'>
                        <p className='font-semibold'>{user.name} | <i>{user.age}</i></p>
                        <p>{user.email}</p>
                    </div>
                    <div className='border-l border-teal-600 flex flex-col'>
                        <div
                            onClick={() => handleDelete(user.id)}
                            className='h-full flex items-center justify-center p-1 border-b border-teal-600 cursor-pointer hover:bg-red-400'
                        >
                            <DeleteIcon className="text-teal-600" />
                        </div>
                        <div
                            onClick={() => onEdit(user)}
                            className='h-full flex items-center justify-center p-1 cursor-pointer hover:bg-teal-300'
                        >
                            <EditIcon className="text-teal-600" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Main;
