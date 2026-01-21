"use client";
import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import { IconLoader2 } from "@tabler/icons-react";

export default function EmailForm() {
  const formValue = useRef<HTMLFormElement>(null)
  const [ isLoading, setIsLoading ] = useState(false)

  async function handleSubmit(e : React.FormEvent) {
    e.preventDefault();

    if (!formValue.current) return;
    try {
      setIsLoading(true)
      await emailjs.sendForm("service_spye0xf", "template_ld3vc4b", formValue.current, "ywQDNAwbJser9A0SQ")

      formValue.current.reset()
    } catch (error) {
      toast.error("Gagal Mengirim Email : " + error)
    } finally {
      toast.success("Pesan berhasil mengirim pesan")
      setIsLoading(false)
    }
  }

  return (
    <div className="shadow-input mx-auto w-full rounded-xl bg-white p-6 md:p-10 dark:bg-black font-poppins">
      <form ref={formValue} className=" space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <LabelInputContainer>
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" name="user_name" placeholder="Tyler Durden" type="text" required />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="user_email"
              placeholder="projectmayhem@fc.com"
              type="email"
              required
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label htmlFor="message">Your Message</Label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Write your message here..."
            className="w-full rounded-md border border-neutral-300 bg-transparent p-3 text-sm shadow-sm outline-none transition focus:border-black dark:border-neutral-700 dark:focus:border-white"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative flex h-11 w-full justify-center items-center rounded-md bg-gradient-to-br from-black to-neutral-700 font-medium text-white dark:from-zinc-900 dark:to-zinc-800 pointer-events-auto"
          type="submit"
        >
          {isLoading ? <IconLoader2/> : "Send Message"}
          <BottomGradient />
        </button>
      </form>

    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      {children}
    </div>
  );
};
