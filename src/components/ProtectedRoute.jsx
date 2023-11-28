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
