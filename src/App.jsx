import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import supabase from '../supabaseClient';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // **** PLEASE STUDY WHAT THIS CODE DO!!!! - 16/7/2025
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Routes>
      <Route
        path="/"
        element={session ? <Dashboard /> : <Navigate to="/signin" />}
      />
      <Route
        path="/signin"
        element={!session ? <SignUp /> : <Navigate to="/" />}
      />
      {/* Catch-all: redirect unknown routes to home */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
