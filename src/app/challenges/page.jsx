import ChallengesList from "@/components/ChallengeList";
import PageIntro from "@/components/PageIntro";
const BlogPage = () => {
  const challenges = [
    {
      index: 0,
      title: "Challenge 1: Elevator Pitch",
      description:
        "In Challenge One, we each created a quick elevator pitch sharing our name, country, interests, a fun fact, and what we bring to the team. Together, we also defined our collective goals for the E-lab experience, helping us connect and align as a team from the start.",
      videoUrl: "https://www.youtube.com/embed/ofXsJERHlno?si=U8LF4vmHDn2hEg1h",
    },
    {
      index: 1,
      title: "Challenge 2: Discover Africa",
      description:
        "we dived into the rich history and traditions of the Zulu culture in South Africa. We learnt about the challenges faced by the Zulu people today and addressed common misconceptions surrounding their warrior culture and traditional practices.",
      videoUrl: "https://www.youtube.com/embed/c0M38HOjcLE?si=JIkzMlm48IV8Xt-h",
    },
    {
      index: 2,
      title: "Challenge 3: Help Lab",
      description:
        " we visited sector head offices to understand the process of paying medical insurance for selected families in-need. We successfully covered the insurance costs for two families near our school, and we felt proud about making a positive impact in our community. Creating meaningful change is a core value of E-lab, and this challenge helped us put that value into action.",
      videoUrl: "https://www.youtube.com/embed/_tg7BdB7OVg?si=xPvI26Yspm6GAwtr",
    },
    {
      index: 3,
      title: "Challenge 4: Hunt for Tressure",
      description:
        "We interviewed a company called Inkomoko, which helps entrepreneurs and startups in Africa.we learned about Inkomoko's work and how we can learn from them and apply it to our own project.",
      videoUrl: "https://www.youtube.com/embed/hOX7eH7ubEg?si=CfJxWcI-ITo9-Z8P",
    },
    {
      index: 4,
      title: "Challenge 5: Mission Voyage",
      description:
        "In this challenge, we competed for $10,000 grant, and we developed a compelling proposal and application to secure the funding for our project. The video briefly introduces us and describes the situation we're tackling, our mission and problem statement, a research analysis, our project idea, its impact, and why we deserve the grant.",
      videoUrl: "https://www.youtube.com/embed/Crl4Nykyd1o?si=aQwBqeL4WoIwAdBb",
    },
    {
      index: 5,
      title: "Challenge 6: Our Digital Print",
      description:
        "In the final challenge, We made a website that highlights our E-Lab experience, featuring a clear mission statement and an articulate problem statement alongside our proposed solutions, creating the foundation for our digital print",
      imageUrl: "/mindmerge.PNG",
    },
  ];
  return (
    <>
      <PageIntro eyebrow="E-lab Challenges" title="Our innovative thinking.">
        <p>
          We took on six challenges as a Think Tank group, giving us a taste of{" "}
          <strong>real-world</strong> situations, a bit of complexity, and
          plenty of chances to think outside the box.
        </p>
      </PageIntro>
      <ChallengesList challenges={challenges} />
    </>
  );
};

export default BlogPage;
