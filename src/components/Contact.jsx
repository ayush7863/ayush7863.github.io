import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contact } from '../data/portfolio';
import { Icon, Section, toneText } from './ui';

// Set in .env (see .env.example) — sends the contact form straight to your
// inbox via EmailJS with no backend. Falls back to demo mode if unset.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const emailjsConfigured = EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

const EMPTY = { name: '', email: '', role: contact.roleOptions[0], message: '' };

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="mt-0.5 flex items-center gap-1.5 font-code text-[12px] text-emerald-400 transition-colors hover:text-emerald-300"
    >
      {value}
      <Icon name={copied ? 'check' : 'content_copy'} className="text-[13px]" />
      <span aria-live="polite">{copied ? 'Copied' : ''}</span>
    </button>
  );
}

function Field({ label, id, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-code text-[12px] text-slate-300">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  'w-full rounded-md border border-slate-800 bg-slate-950 px-3.5 py-2 font-body text-[14px] text-white placeholder-slate-600 transition-colors focus:border-cyan-400 focus:outline-none';

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [state, setState] = useState('idle'); // idle | sending | sent | error

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setState('sending');

    if (emailjsConfigured) {
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            role: form.role,
            message: form.message,
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
        setState('sent');
        setForm(EMPTY);
      } catch {
        setState('error');
      }
      return;
    }

    // No form backend configured, so confirm locally without sending anywhere.
    if (!contact.endpoint) {
      setTimeout(() => {
        setState('sent');
        setForm(EMPTY);
      }, 500);
      return;
    }

    try {
      const res = await fetch(contact.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(res.statusText);
      setState('sent');
      setForm(EMPTY);
    } catch {
      setState('error');
    }
  }

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div>
            <div className="font-code text-[12px] font-semibold tracking-wider text-emerald-400">
              06 // GET IN TOUCH
            </div>
            <h2 className="mt-1 font-headline text-3xl font-bold tracking-tight text-white">
              Let's build together.
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-slate-400">{contact.intro}</p>

          <ul className="space-y-3">
            {contact.channels.map((c) => (
              <li
                key={c.title}
                className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/60 p-4"
              >
                <span className={toneText[c.tone]}>
                  <Icon name={c.icon} className="text-xl" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-white">{c.title}</span>
                  {c.detail && <span className="block text-[12px] text-slate-400">{c.detail}</span>}
                  {c.copyable && <CopyButton value={c.copyable} />}
                  {c.link && (
                    <a
                      href={c.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-0.5 inline-flex items-center gap-1 font-code text-[12px] text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      {c.link.text}
                      <Icon name="arrow_forward" className="text-[13px]" />
                    </a>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 lg:col-span-7 lg:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Your name" id="name">
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Sarah Connor"
                  className={inputClass}
                />
              </Field>
              <Field label="Work email" id="email">
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="sarah@company.com"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Role scope" id="role">
              <select id="role" value={form.role} onChange={update('role')} className={inputClass}>
                {contact.roleOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Message" id="message">
              <textarea
                id="message"
                rows={4}
                required
                value={form.message}
                onChange={update('message')}
                placeholder="Tell me about your stack and the problem you're solving."
                className={inputClass}
              />
            </Field>

            <button
              type="submit"
              disabled={state === 'sending'}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-500 py-2.5 font-code text-[13px] font-semibold text-slate-950 transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Icon name="send" className="text-[16px]" />
              {state === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            <p aria-live="polite" className="font-code text-[12px]">
              {state === 'sent' && (
                <span className="block rounded border border-emerald-500/20 bg-emerald-950/40 p-3 text-center text-emerald-400">
                  Message sent. You'll get a reply within 24 hours.
                </span>
              )}
              {state === 'error' && (
                <span className="block rounded border border-red-500/20 bg-red-950/40 p-3 text-center text-red-300">
                  The message didn't send. Email {contact.channels.find((c) => c.copyable)?.copyable}{' '}
                  directly and it'll get through.
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
