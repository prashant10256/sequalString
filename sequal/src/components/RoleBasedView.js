import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
    const token = useSelector(state => state.user.token);
    const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;

    if (userRole === 'Role A') {
        return <UploadDocument />;
    } else if (userRole === 'Role B') {
        return <ApproveDocument />;
    } else {
        return <div>Access Denied</div>;
    }
}

function UploadDocument() {
    return <div>Upload Document View</div>;
}

function ApproveDocument() {
    return <div>Approve Document View</div>;
}

export default Dashboard;
