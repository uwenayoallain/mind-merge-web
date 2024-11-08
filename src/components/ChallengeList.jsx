"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, ExternalLink } from 'lucide-react';

const ChallengeItem = ({ title, description, videoUrl, imageUrl, index, invert = false }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`group relative py-24 
        ${invert ? 'border-b border-white/10' : 'border-b border-neutral-900/10'}`}
    >
      <div className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center ${isEven ? '' : 'lg:grid-cols-[1fr,1fr]'}`}>
        <div className={`${!isEven ? 'lg:order-2' : ''}`}>
          {/* Media Container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="aspect-video w-full overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {videoUrl ? (
                <iframe
                  className="h-full w-full object-cover"
                  src={videoUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                imageUrl && (
                  <img
                    src={imageUrl}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                )
              )}
            </motion.div>
          </div>
        </div>

        <div className={`${!isEven ? 'lg:order-1' : ''}`}>
          {/* Content Container */}
          <div className={`flex flex-col ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
            <div className="relative pl-8">
              <div
                className={`absolute left-0 top-0 h-full w-px 
                  ${invert ? 'bg-white' : 'bg-neutral-950'}`}
              />

              <span
                className={`text-sm font-medium mb-2 block
                  ${invert ? 'text-white/70' : 'text-neutral-950/70'}`}
              >
                {(index + 1).toString().padStart(2, '0')}
              </span>

              <h3
                className={`mb-6 text-3xl font-light tracking-tight 
                  ${invert ? 'text-white' : 'text-neutral-950'}`}
              >
                {title}
              </h3>

              <p
                className={`mb-8 text-lg leading-relaxed 
                  ${invert ? 'text-neutral-300' : 'text-neutral-600'}`}
              >
                {description}
              </p>

              {videoUrl ? (
                <motion.a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className={`group/link mt-auto inline-flex items-center space-x-3 
                    ${invert ? 'text-white' : 'text-neutral-950'}`}
                >
                  <Play className="h-4 w-4" />
                  <span className="text-sm font-medium">Watch video</span>
                  <motion.div whileHover={{ x: 2, y: -2 }}>
                    <ExternalLink className="h-4 w-4" />
                  </motion.div>
                </motion.a>
              ) : (
                <motion.button
                  whileHover={{ x: 4 }}
                  className={`group/link mt-auto inline-flex items-center space-x-3
                    ${invert ? 'text-white' : 'text-neutral-950'}`}
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open(imageUrl, '_blank');
                    }
                  }}
                >
                  <span className="text-sm font-medium">View full image</span>
                  <motion.div whileHover={{ x: 2, y: -2 }}>
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ChallengesList = ({ challenges, invert = false }) => {
  return (
    <section
      className={`mx-auto max-w-7xl px-6 lg:px-8 
        ${invert ? 'bg-neutral-950 text-white' : 'bg-white text-neutral-950'}`}
    >
      <div>
        {challenges.map((challenge, index) => (
          <ChallengeItem
            key={index}
            index={index}
            title={challenge.title}
            description={challenge.description}
            videoUrl={challenge.videoUrl}
            imageUrl={challenge.imageUrl}
            invert={invert}
          />
        ))}
      </div>
    </section>
  );
};

export default ChallengesList;
