import { useAuth } from '../providers/AuthProvider';

function NavBar() {
  const { signOut } = useAuth();
  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default NavBar;
