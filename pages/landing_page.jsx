import styles from '../styles/landing_page.module.css'
import Login from "../components/login/Login"

export default function Home() {
  return (
    <>
      <div className={styles.header}>Placeholder header</div>
      <main>
        <div className={styles.hero_cont}>
          <div className={styles.hero_half}>Protect phriends and phamily phrom phishing by phishing them yourselph.</div>
          <div className={styles.hero_half}><Login /></div>
        </div>
        <div className={styles.love_cont}>
          <div className={styles.love_text}>If you really love someone, phish them.</div>
        </div>
        <div className={styles.graphic_cont}></div>
        <div className={styles.feature_wrap}>
          <div className={styles.feature_cont}>
            <div className={styles.feature}><h3>Send Bait</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
            <div className={styles.feature}><h3>Catch fish</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
            <div className={styles.feature}><h3>Track results</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
            <div className={styles.feature}><h3>Educate Mom</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
          </div>
          <button className={styles.learn_more}>Learn More</button>
        </div>
        <div className={styles.big_cont}>
          <div className={styles.big_text}>
            <p>Over 18 million fish are caught every year.</p>
            <br />
            <p>In 2021 over $327 million dollars were lost to online phishing scams.</p>
            <br />
            <p>On average, victims lose $20,000 dollars.</p>
          </div>
        </div>
        <div className={styles.about_cont}>Phished Co. is a non-profit organization with a charitable purpose to educate through structured teaching and learning.
          <button>Learn More</button>
        </div>
      </main>
    </>
  )
}
