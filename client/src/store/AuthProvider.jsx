
import { useEffect, useState } from "react";
import { AuthContext } from "./auth";
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState('');
    const [services, setServices] = useState("")

    const storeTokenInLs = (serverToken) => {
        localStorage.setItem('token', serverToken);
        setToken(serverToken);
    };


    const logoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    const userAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:7000/api/auth/user', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log('userdata', data.userData);
                setUser(data.userData);
            } else {
                console.log('User authentication failed:', response.status);
                // Perform actions for unauthorized access or other failure
            }
        } catch (error) {
            console.log('User authentication error:', error);
        }
    };

    const getServices = async () => {
        try {
            const response = await fetch('http://localhost:7000/api/data/service', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            } else {
                console.log('Failed to fetch services:', response.status);
                // Handle failure to fetch services
            }
        } catch (error) {
            console.log('Error fetching services:', error);
        }
    };

    useEffect(() => {
        if (token) {
            getServices();
            userAuthentication();
        }
    }, [token]);

    const isLoggedIn = !!token;

    return (
        <AuthContext.Provider value={{ storeTokenInLs, logoutUser, isLoggedIn, user, services }}>
            {children}
        </AuthContext.Provider>
    );
};
