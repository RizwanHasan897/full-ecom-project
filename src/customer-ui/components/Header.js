import React from "react";
import { Link } from 'react-router-dom';


function Header() {
    return (

        <header class="user-header">
            <div class="user-header-container">
                <div className="user-header-container-left">
                    <h1>E-comms</h1>
                    <div className="user-header-form">
                        <input
                            type="text"
                            placeholder="Search products..."
                        />
                        <button type="submit">Search</button>
                    </div>
                </div>
                <div className="user-header-container-right">
                    <button>Sign in</button>
                    <button>Watch List</button>
                    <button>Cart</button>
                    <button>
                        <Link className="login" to="/admin" target="_blank">Admin UI</Link>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header 