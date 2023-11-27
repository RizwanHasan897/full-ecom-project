import React from "react";


function Header() {
    return (
        <div className="user-div">
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

                    </div>
                </div>
            </header>

        </div>
    );
}

export default Header