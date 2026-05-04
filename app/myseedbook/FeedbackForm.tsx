"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function FeedbackForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          category: formData.get("category"),
          message: formData.get("message"),
        }),
      });

      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-[#7FB77E]/30 bg-[#7FB77E]/8 px-8 py-14 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7FB77E]/20 text-3xl">✓</div>
        <h3 className="font-serif text-2xl text-[#12385C]">Thank you for your feedback!</h3>
        <p className="max-w-sm text-[#12385C]/70">
          Your message has been received. We read every submission and appreciate you taking the time.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-2 text-sm text-[#5FA8A8] underline-offset-2 hover:underline"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="msb-name" className="text-xs uppercase tracking-[0.2em] text-[#12385C]/60">
            Name
          </label>
          <input
            id="msb-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-2xl border border-[#12385C]/15 bg-white px-4 py-3 text-sm text-[#12385C] placeholder-[#12385C]/30 outline-none transition focus:border-[#5FA8A8] focus:ring-2 focus:ring-[#5FA8A8]/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="msb-email" className="text-xs uppercase tracking-[0.2em] text-[#12385C]/60">
            Email
          </label>
          <input
            id="msb-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="rounded-2xl border border-[#12385C]/15 bg-white px-4 py-3 text-sm text-[#12385C] placeholder-[#12385C]/30 outline-none transition focus:border-[#5FA8A8] focus:ring-2 focus:ring-[#5FA8A8]/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="msb-category" className="text-xs uppercase tracking-[0.2em] text-[#12385C]/60">
          Feedback type
        </label>
        <select
          id="msb-category"
          name="category"
          required
          defaultValue=""
          className="rounded-2xl border border-[#12385C]/15 bg-white px-4 py-3 text-sm text-[#12385C] outline-none transition focus:border-[#5FA8A8] focus:ring-2 focus:ring-[#5FA8A8]/20"
        >
          <option value="" disabled>Select a category</option>
          <option value="bug">Bug Report</option>
          <option value="feature">Feature Request</option>
          <option value="general">General Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="msb-message" className="text-xs uppercase tracking-[0.2em] text-[#12385C]/60">
          Message
        </label>
        <textarea
          id="msb-message"
          name="message"
          required
          rows={5}
          placeholder="Share your thoughts, report a bug, or suggest a feature…"
          className="rounded-2xl border border-[#12385C]/15 bg-white px-4 py-3 text-sm text-[#12385C] placeholder-[#12385C]/30 outline-none transition focus:border-[#5FA8A8] focus:ring-2 focus:ring-[#5FA8A8]/20 resize-none"
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:hello@chandraskinner.com" className="underline">
            hello@chandraskinner.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#12385C] px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#12385C]/15 transition hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "submitting" ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            Sending…
          </>
        ) : (
          "Send Feedback"
        )}
      </button>
    </form>
  );
}
