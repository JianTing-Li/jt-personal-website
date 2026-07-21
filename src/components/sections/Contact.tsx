"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: { name: string; email: string; message: string }) {
  const errors: FieldErrors = {};
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) errors.email = "Please enter your email address.";
  else if (!emailRe.test(data.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!data.message.trim()) errors.message = "Please enter a message.";
  else if (data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const lastSubmitTime = useRef(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    if (
      lastSubmitTime.current > 0 &&
      Date.now() - lastSubmitTime.current < 30000
    ) {
      return;
    }

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      _gotcha: (form.elements.namedItem("_gotcha") as HTMLInputElement).value,
    };

    if (data._gotcha) return;

    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus("submitting");
    setFieldErrors({});
    lastSubmitTime.current = Date.now();

    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        name: data.name,
        email: data.email,
        message: data.message,
        "_gotcha": data._gotcha,
      });
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
        statusRef.current?.focus();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBorder = (error?: string) =>
    error ? "border-error" : "border-border-strong";

  return (
    <Section id="contact" tone="surface">
      <Container maxWidth={1000}>
        <Reveal>
          <SectionHeading eyebrow="06 — CONTACT" title="Let's talk" />

          <div className="mt-11 grid grid-cols-1 gap-14 md:grid-cols-[1.1fr_1fr]">
            <div>
              <div ref={statusRef} tabIndex={-1} aria-live="polite" aria-atomic="true">
                {status === "success" && (
                  <div
                    role="alert"
                    className="rounded-btn border border-accent/35 bg-accent/10 px-[18px] py-4 text-[15px] leading-relaxed text-accent"
                  >
                    Thanks for reaching out. Your message has been sent, and
                    I&apos;ll get back to you soon.
                  </div>
                )}
              </div>
              {status === "error" && (
                <div
                  role="alert"
                  className="mb-[18px] rounded-btn border border-error/35 bg-error/10 px-[18px] py-4 text-[15px] leading-relaxed text-error-text"
                >
                  Something went wrong while sending your message. Please try
                  again or connect with me on LinkedIn.
                </div>
              )}
              {status !== "success" && (
                <form
                  ref={formRef}
                  name="contact"
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-[18px]"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="hidden"
                  />
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-[13.5px] font-semibold text-text-secondary"
                    >
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className={`w-full rounded-btn border ${inputBorder(fieldErrors.name)} bg-bg px-[14px] py-[13px] text-[15px] text-text-primary outline-none transition-colors focus:border-accent/60`}
                    />
                    {fieldErrors.name && (
                      <p role="alert" className="mt-1.5 text-[13px] text-error-text">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-[13.5px] font-semibold text-text-secondary"
                    >
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      required
                      className={`w-full rounded-btn border ${inputBorder(fieldErrors.email)} bg-bg px-[14px] py-[13px] text-[15px] text-text-primary outline-none transition-colors focus:border-accent/60`}
                    />
                    {fieldErrors.email && (
                      <p role="alert" className="mt-1.5 text-[13px] text-error-text">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-[13.5px] font-semibold text-text-secondary"
                    >
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="What's on your mind?"
                      required
                      className={`w-full resize-y rounded-btn border ${inputBorder(fieldErrors.message)} bg-bg px-[14px] py-[13px] text-[15px] text-text-primary outline-none transition-colors focus:border-accent/60`}
                    />
                    {fieldErrors.message && (
                      <p role="alert" className="mt-1.5 text-[13px] text-error-text">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className={`rounded-btn bg-accent px-[26px] py-[13px] text-[15px] font-semibold text-bg transition-transform duration-150 ${
                        status === "submitting"
                          ? "cursor-not-allowed opacity-60"
                          : "cursor-pointer hover:-translate-y-0.5"
                      }`}
                    >
                      {status === "submitting" ? "Sending…" : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-base leading-relaxed text-text-secondary">
                Open to conversations about mobile engineering, AI product
                development, and opportunities to build thoughtful, useful
                products.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn (opens in new tab)"
                  className="flex items-center gap-3 rounded-btn border border-border bg-surface-raised px-[18px] py-[14px] text-[15px] font-medium text-text-primary transition-colors hover:border-accent/40"
                >
                  <LinkedInIcon className="h-5 w-5" />
                  Connect on LinkedIn ↗
                </a>
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View my GitHub (opens in new tab)"
                  className="flex items-center gap-3 rounded-btn border border-border bg-surface-raised px-[18px] py-[14px] text-[15px] font-medium text-text-primary transition-colors hover:border-accent/40"
                >
                  <GitHubIcon className="h-5 w-5" />
                  View my GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
