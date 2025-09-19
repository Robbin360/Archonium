'use client';
import { useState, FormEvent } from 'react';
import '@/styles/globals.css';

export default function DossierPage(){
  const [status, setStatus] = useState<string | null>(null);
  async function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = {
      company: form.get('company'),
      email: form.get('email'),
      role: form.get('role'),
      message: form.get('message')
    };
    const res = await fetch('/api/submit', { method:'POST', body: JSON.stringify(body), headers:{'Content-Type':'application/json'} });
    if(res.ok) setStatus('Thank you — we will respond within 7 business days.');
    else setStatus('Submission failed.');
  }
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-xl w-full">
        <h1 className="text-4xl font-grotesk">Request Private Access</h1>
        <p className="mt-4 text-gray-300">Submit your company details. We review selectively and reply within 7 business days.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input name="company" required placeholder="Company name" className="w-full p-3 bg-transparent border border-gray-700 rounded" />
          <input name="email" type="email" required placeholder="Email" className="w-full p-3 bg-transparent border border-gray-700 rounded" />
          <input name="role" placeholder="Your role (optional)" className="w-full p-3 bg-transparent border border-gray-700 rounded" />
          <textarea name="message" placeholder="Short description (optional)" className="w-full p-3 bg-transparent border border-gray-700 rounded" rows={4} />
          <div className="flex gap-3">
            <button type="submit" className="px-5 py-3 rounded-2xl bg-archBlue text-black">Request Access</button>
            <a href="/manifest.pdf" className="px-5 py-3 rounded-2xl border border-archBlue">Download Manifest</a>
          </div>
        </form>
        {status && <p className="mt-4 text-sm">{status}</p>}
      </section>
    </main>
  );
}
