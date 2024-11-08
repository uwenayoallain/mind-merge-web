import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const ContactDetails = () => {
  return (
    <FadeIn>
      <div className="grid">
        <div>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Our Locations
          </h2>
          <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
          <Border className="mt-16 pt-16">
            <h2 className="font-display text-base font-semibold text-neutral-950">
              Email us
            </h2>
            <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
              {[
                ["Contact", "contact@mind-merge.com"],
              ].map(([label, email]) => (
                <div key={email}>
                  <dt className="font-semibold text-neutral-950">{label}</dt>
                  <dd>
                    <Link
                      href={`mailto:${email}`}
                      className="text-neutral-600 hover:text-neutral-950"
                    >
                      {email}
                    </Link>
                  </dd>
                </div>
              ))}
            </dl>
          </Border>
        </div>
        <div>
          <Border className="mt-16 pt-16">
            <h2 className="font-display text-base font-semibold text-neutral-950">
              Follow us
            </h2>
            <SocialMedia className="mt-6" />
          </Border>
        </div>
      </div>
    </FadeIn>
  );
};

export default ContactDetails;
