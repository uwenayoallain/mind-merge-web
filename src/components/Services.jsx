import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Our Expertise in Digital Solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At Mind-Merge, we offer a range of services designed to help you navigate the digital landscape and achieve your business goals.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web Development">
              We create responsive, user-friendly websites that are tailored to your business needs and goals.
            </ListItem>
            <ListItem title="Application Development">
              Our team develops custom applications that enhance your business processes and improve user engagement.
            </ListItem>
            <ListItem title="E-commerce Solutions">
              We provide comprehensive e-commerce solutions that help you build and grow your online store.
            </ListItem>
            <ListItem title="Content Management Systems">
              We offer custom CMS solutions that allow you to easily manage and update your website content.
            </ListItem>
            <ListItem title="Digital Marketing">
              Our digital marketing services are designed to increase your online presence and drive traffic to your website.
            </ListItem>
            <ListItem title="SEO Optimization">
              We optimize your website to improve its search engine ranking and visibility.
            </ListItem>
            <ListItem title="UI/UX Design">
              Our design team creates intuitive and engaging user interfaces that enhance the user experience.
            </ListItem>
            <ListItem title="Cloud Services">
              We offer cloud solutions that provide scalability, flexibility, and security for your business.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
