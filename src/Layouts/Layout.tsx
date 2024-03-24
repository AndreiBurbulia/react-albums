import React from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutProps } from '../Types/Types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        navigate('/');
    };

    const showBackButton = location.pathname !== '/';

    return (
        <div>
            {showBackButton && (
                <button type="button" onClick={handleClick} style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 999 }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</button>
            )}
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
