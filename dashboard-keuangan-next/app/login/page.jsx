'use client'
import { supabase } from '../../lib/supabase'

export default function Login() {
    async function handleLogin(e) {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        await supabase.auth.signInWithPassword({ email, password })
        window.location.href = '/dashboard'
    }

    return (
        <div className="flex h-screen items-center justify-center bg-slate-100">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow w-80">
                <h2 className="text-xl font-bold mb-2">Login</h2>
                <input name="email" className="input" placeholder="Email" />
                <input name="password" type="password" className="input mt-2" placeholder="Password" />
                <button className="btn-primary mt-4 w-full">Login</button>
            </form>
        </div>
    )
}