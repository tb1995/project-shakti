import Image from 'next/image';
import styles from './page.module.css';
import Hero from './sections/homepage/Hero';
import Mission from './sections/homepage/Mission';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Mission />
    </div>
  );
}
