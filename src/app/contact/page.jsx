import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact Mind-Merge" title="Get in Touch with Us">
        <p>Reach out to us for any inquiries or assistance.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <ContactDetails />
      </Container>
    </>
  );
};

export default ContactPage;
