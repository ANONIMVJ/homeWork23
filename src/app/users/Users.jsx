import React, { useState } from 'react';
import Main from './components/Main';
import TopSide from './components/TopSide';
import EditUserModal from './components/TopSide/EditUserModal';

function Users(props) {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsEditModalOpen(true);
    };

    return (
        <div className='max-w-[900px] mx-auto py-16 px-4'>
            <TopSide 
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
            />
            <Main setSelectedUser={setSelectedUser} onEdit={handleEdit} />
            <EditUserModal
                isOpen={isEditModalOpen}
                setIsOpen={setIsEditModalOpen}
                selectedUser={selectedUser}
            />
        </div>
    );
}

export default Users;