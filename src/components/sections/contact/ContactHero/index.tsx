import ContactForm from '@/components/forms/ContactForm';

export default function ContactHero() {
  return (
    <section className="animate-in fade-in py-20 duration-500">
      <div className="container mx-auto max-w-3xl">
        <div className="animate-in slide-in-from-bottom-20 mb-10 duration-700">
          <h1 className="text-center text-3xl font-bold md:text-4xl">
            Our Sponsors
          </h1>
          <p className="text-muted-foreground text-center text-xl">
            Submit a message to our team
          </p>
        </div>

        <div className="animate-in fade-in duration-1000">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
