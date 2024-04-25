import React, { useState } from 'react';
import './Login.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleClick = () => {
        setLoading(true);
        signInWithPopup(auth, provider)
            .then((data) => {
                localStorage.setItem('email', data.user.email);
                setRedirect(true);
            })
            .catch((error) => {
                setError('Error signing in: ' + error.message);
                setLoading(false);
            });
    };

    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://images.macrumors.com/t/yMzXnVD8B6-wG1MbXenp_JIh8sQ=/1600x0/article-new/2020/10/newgmaillogo.0.jpg"
                    alt=""
                />
                <button onClick={handleClick} disabled={loading}>
                    {loading ? 'Signing In...' : 'Sign In with Google'}
                </button>
                {error && <p className="login__error">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
