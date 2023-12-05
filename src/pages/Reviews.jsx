import { useState } from 'react';
import {useNavigate} from "react-router-dom";

function Reviews() {
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setComment('');
  };

  return (
    <div>
      <h1>Welcome to Reviews</h1>
     
      <button onClick={() => navigate('/home')}>Home</button>
    </div>
  );
}

export default Reviews;
