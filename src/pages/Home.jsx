import { useState, Navigate } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to home</h1>
      <button onClick={() => navigate('/reviews')}>Reviews</button>

    </div>
  );
}

export default Home;
