'use client';

import { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [message, setMessage] = useState('');

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setMessage('');

    let result;
    if (mode === 'signup') {
      result = await supabase.auth.signUp({ email, password });
    } else {
      result = await supabase.auth.signInWithPassword({ email, password });
    }

    if (result.error) {
      setMessage(result.error.message);
    } else {
      setMessage('Success! Check your inbox or continue.');
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleAuth} className="bg-white shadow-md rounded p-6 w-full max-w-md space-y-4">
        <h1 className="text-xl font-bold text-center">
          {mode === 'login' ? 'Login' : 'Sign Up'}
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
        >
          {mode === 'login' ? 'Login' : 'Sign Up'}
        </button>

        {message && <p className="text-center text-sm text-red-500">{message}</p>}

        <p className="text-center text-sm text-gray-500">
          {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="ml-2 underline text-teal-600"
          >
            {mode === 'login' ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </form>
    </main>
  );
}
