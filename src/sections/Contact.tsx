import EmailForm from "@/components/EmailForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-inter-black text-4xl mb-2 text-center">
          Get in Touch
        </h1>
        <p className="mt-1 text-sm text-center text-neutral-600 dark:text-neutral-400">
          Have a project, collaboration, or just want to say hello? Feel free to reach out.
        </p>

        <EmailForm />
      </div>
    </section>
  );
}
