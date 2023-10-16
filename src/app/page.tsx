"use client"
import styles from './page.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home(): JSX.Element {
  const images = useRef<HTMLInputElement>(null);
  const imgs = ["galaxy1.avif", "galaxy2.jpg", "galaxy3.jpeg", "galaxy4.jpeg", "galaxy5.jpeg", "galaxy6.jpg", "galaxy7.avif","galaxy8.jpeg","galaxy9.avif"];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.wrapper}`,
        pin: true,
        scrub: 6,
        start: "top top",
        end:"bottom bottom"
      }
    });

    tl.to(`.${styles.img}`, { scale: 1 }, 0);
    tl.to(`.${styles.items}`, { rotate: 0 }, 0);
    tl.to(`.${styles.overlay}`, { height: "100%"}, .2);
    tl.to(`.${styles.h1}`, { scale: 1 }, 0.6);
    tl.to(`.${styles.items}`, { scale: .8, opacity: .2 }, 0.6);
    tl.to(`.${styles.h1}`, { x:100 }, 2);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={images} className={styles.items}>
        {imgs.map((img, i) => (
          <div className={styles.item} key={i}>
            <img className={styles.img} src={img} />
          </div>
        ))}
      </div>
      <div className={styles.overlay}>
        <h1 className={styles.h1}>AWESOME</h1>
      </div>
    </div>
  );
}
