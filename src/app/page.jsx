import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Empowering the Future of Young Professionals
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At Mind-Merge, we specialize in creating innovative digital
            solutions that drive growth and success for our clients. Our team of
            experts is dedicated to delivering excellence in every project.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        Mind-Merge transformed our business with their exceptional digital
        solutions. Their expertise and dedication are unmatched.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
