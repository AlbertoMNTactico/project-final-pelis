# Supabase Auth example

## Getting started

This is a basic example of how to use Supabase Auth in React, using the `supabase-js` library and creating an AuthProvider.

## Auth provider

The AuthProvider is a React Context Provider that wraps your app and provides the `user`, `session` and `signOut` to objects to all components.

```jsx
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useContext, createContext } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext({});
// custom hook to use context
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session.user);
    });
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log(event, session);
        setSession(session);
        setUser(session ? session.user : null);
      }
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = () => supabase.auth.signOut();

  const value = {
    session,
    user,
    signOut,
    // add more custom methods or properties here
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
```

## Login and Register

The login page is a simple form that uses the `signIn` and `signUp` methods from `supabase.auth`.

```jsx
import { useState } from 'react';
import { supabase } from '../lib/supabase';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log(data, error);
  };

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data, error);
  };

  return (
    <div>
      <h1>Register/Login</h1>
      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={createUser}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
```

## Protected route component

The `ProtectedRoute` component is a simple wrapper that checks if the user is logged in or not and show the component or a message accordingly.

```jsx
import { useEffect, useState } from 'react';
import { useAuth } from '../providers/AuthProvider';

function ProtectedRoute({ children }) {
  const { session } = useAuth();
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if (session) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [session]);
  return <div>{isSignedIn ? children : <h1>Not signed in</h1>}</div>;
}

export default ProtectedRoute;
```
