import Button from "@/components/Button";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import FadeIn from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import Testimonials from "@/components/Testimonials";
import quote from "@/images/quote.svg";
export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Mind-Merge: Bridging Talent with Opportunity
          </h1>
          <p className="mt-6 text-xl text-neutral-600">Empowering young professionals with the skills and opportunities needed to thrive in an integrated regional economy, fostering innovation, entrepreneurship, and cross-border collaboration.</p>
          <Button href="#about" className="my-3 py-4 px-6">Learn more about us</Button>
        </FadeIn>
      </Container>
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Leila janah", logo: quote }}
      >
        Talent is equally distributed, but opportunity is not. By connecting talent to opportunity, we help create the leaders of tomorrow
      </Testimonials>
      <PageIntro
        eyebrow="About Mind-Merge"
        title="Our Mission, and Solution"
        id="about"
        centered
      >
        <div className="text-base max-w-3xl text-justify space-y-6">
          <p className="">
            <span className="text-xs text-blue-600 font-semibold">The Problem</span> <br />
            Rwanda faces a significant youth unemployment challenge, with a national rate of 12% and youth unemployment over 16.8% as of early 2024. Despite strong economic growth, many young professionals struggle to find jobs that match their skills, leading to underemployment. Limited regional integration further restricts access to broader markets. Strengthening regional connections could foster cross-border collaborations, driving innovation, entrepreneurship, and employment opportunities for Rwanda's workforce.
          </p>

          <p>
            <span className="text-xs text-blue-600 font-semibold">Our Mission</span> <br />
            To empower young professionals with the skills and
            opportunities needed to thrive in an integrated regional
            economy, fostering innovation, entrepreneurship, and
            cross-border collaboration.
          </p>
          <p>
            <span className="text-xs text-blue-600 font-semibold">Our Solution</span> <br />
            An online platform designed to address youth
            unemployment and skills mismatch by leveraging A.I. for
            skill match-making and promoting networking across
            borders.
          </p>
        </div>
        <div>

        </div>
      </PageIntro>
      <Cultures className="mx-4" />
    </main>
  );
}
