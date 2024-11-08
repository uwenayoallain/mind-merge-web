import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About Mind-Merge" title="Empowering Connections, Inspiring Growth">
        <p>
          At Mind-Merge, we are dedicated to fostering meaningful connections and driving growth through innovative solutions and collaborative efforts.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Mind-Merge was founded with the vision of bridging gaps and creating opportunities for individuals and businesses alike. Our mission is to empower our clients by providing top-notch services that align with their goals and values.
          </p>
          <p>
            We believe in the power of collaboration and strive to build lasting relationships with our clients. Our team is committed to delivering excellence in every project, ensuring that our clients achieve their desired outcomes.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="50+" label="Dedicated Team Members" />
          <StatListItem value="100+" label="Satisfied Clients" />
          <StatListItem value="10+" label="Years of Experience" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
