import styles from './page.module.css';
import Hero from './sections/homepage/Hero';
import Mission from './sections/homepage/Mission';
import MiniBanner from './sections/homepage/MiniBanner';
import JoinUs from './sections/homepage/JoinUs';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Mission />
      <MiniBanner />
      <JoinUs />
    </div>
  );
}
