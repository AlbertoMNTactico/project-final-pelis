import { useState } from 'react';
import { supabase } from './lib/supabase';
function App() {
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

export default App;
