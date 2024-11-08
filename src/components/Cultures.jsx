import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";
import clsx from "clsx";

const Cultures = ({ className }) => {
  return (
    <div
      className={clsx(
        "mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32",
        className,
      )}
    >
      <SectionIntro
        eyebrow="Our Values"
        title="Our core values are what drive us everyday."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Creativity" invert>
            We encourage out-of-the-box thinking by making sure no one knows
            where the box is located :)
          </GridListItem>
          <GridListItem title="Innovation" invert>
            Every idea is a good idea until someone suggests something remotely
            practical.
          </GridListItem>
          <GridListItem title="Teamwork" invert>
            We prioritize collaboration, ensuring every project benefits from
            diverse perspectives and shared goals.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
