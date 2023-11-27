import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Header />
            <h1>Customer Home Page</h1>

            {/* Link to navigate to the Admin UI */}
            <Link to="/admin">Open Admin UI</Link>
        </div>
    );
}

export default Home;
