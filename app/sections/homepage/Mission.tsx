'use client';
import React from 'react';
import styles from './mission.module.scss';
import LeftRightContainer from '@/app/components/LeftRightContainer';

const Mission = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2 className="colorPrimary">Our Mission</h2>
      </div>
      <div className="miniSections">
        <LeftRightContainer
          src="/empower.webp"
          alt="Empower Artisans"
          title="Empower Artisans Through Global Connections"
          description='Project Shakti is a social enterprise dedicated to connecting international markets with the stories, talents, and crafts of local communities. Named after "Shakti," meaning "power," it empowers artisans by creating sustainable economic opportunities while honouring their traditions. By introducing handcrafted products to global audiences, it bridges cultural gaps and fosters appreciation for local craftsmanship.'
          imageFirst={true}
        />

        <LeftRightContainer
          src="/sustain-legacies.webp"
          alt="Beautiful Handcrafted Cards"
          title="Sustain Legacies Through Craft and Care"
          description={`Beyond simply selling products, Project Shakti combines traditional craftsmanship with a commitment to sustainability, reducing waste, and highlighting artisans' creativity. It offers skills development, logistical support, and growth opportunities, ensuring that artisans can thrive in new markets while preserving the heritage of their crafts.`}
          imageFirst={false}
        />

        <LeftRightContainer
          src="/global-partnerships.webp"
          alt="Culture and Heritage"
          title="Global Partnerships for Social Impact"
          description={`Through collaborations with under-resourced communities, such as its partnership with Manav Sadhna in India, Project Shakti supports initiatives like upcycling waste into marketable goods. These efforts empower women and children by providing sustainable income and educational opportunities. With a vision to expand globally, Project Shakti connects diverse stories and crafts with audiences valuing sustainability and social change.`}
          imageFirst={true}
        />
      </div>
      {/* <div className={styles.miniSection1}></div>
      <div className={styles.miniSection2}></div>
      <div className={styles.miniSection3}></div> */}
    </section>
  );
};

export default Mission;
