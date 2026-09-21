import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Levi Crowe | Levi Crowe Media",
  description: "Meet the storyteller, author, and creator behind Levi Crowe Media.",
  openGraph: {
    title: "About Levi Crowe",
    description: "The storyteller, author, and creator behind Levi Crowe Media.",
    images: [{ url: "/levi-crowe-hero.png", alt: "The industrial world of Levi Crowe Media" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Levi Crowe",
    description: "The storyteller, author, and creator behind Levi Crowe Media.",
    images: ["/levi-crowe-hero.png"],
  },
};

export default function AboutLevi() {
  return <main className="about-page">
    <nav className="nav about-nav" aria-label="About page navigation">
      <a className="wordmark" href="/"><span>LCM</span><strong>Levi Crowe Media</strong></a>
        <div className="nav-links"><a href="/">Headquarters</a><a href="/midway">The Midway</a><a href="/books">Books</a><a href="/#follow">Watch</a><a href="/about" aria-current="page">About</a></div>
      <a className="shop-link" href="https://levi-crowe-jus-shop.fourthwall.com/" target="_blank" rel="noreferrer">Shop</a>
    </nav>

    <header className="about-hero">
      <div className="about-hero-copy">
        <p className="eyebrow"><span /> The man behind the stories</p>
        <h1>I&apos;m just a good ol&apos; boy<br />from the <em>foothills.</em></h1>
        <p className="about-deck">Right in the middle of God&apos;s country in South Carolina. Dirt-floor raised and cornbread-fed. I write books, tell stories, make music, and build the worlds I can&apos;t leave alone.</p>
      </div>
      <aside className="identity-plate">
        <span className="plate-number">CREATOR // 001</span>
        <div className="crowe-mark">LC</div>
        <h2>Levi Crowe</h2>
        <p>Storyteller · Author · Creator</p>
        <i />
        <small>SOUTH CAROLINA // INDEPENDENT MEDIA</small>
      </aside>
    </header>

    <section className="about-story">
      <div className="about-index"><span>01</span><p>Who I am</p></div>
      <article>
        <p className="lead">My name is Levi Crowe. At least, that&apos;s the name I use when I step behind the microphone.</p>
        <p>I&apos;m a storyteller from the foothills of South Carolina. I&apos;ve always been drawn to the things people carry with them—the old folklore, the true events, the forgotten places, and the strange stories that never quite let you go.</p>
        <p>I build Levi Crowe Media one story and one world at a time. Sometimes that becomes a narrated tale. Sometimes it becomes a book, a song, or a whole carnival waiting beyond the tree line.</p>
      </article>
    </section>

    <section className="about-story dark-band">
      <div className="about-index"><span>02</span><p>Why the name</p></div>
      <article>
        <p className="lead">Levi Crowe started as a way to keep part of my private life private. But it became more than that.</p>
        <p>The name matched the atmosphere of the stories I wanted to tell. Over time, it started to feel like another side of me—not a character and not a mask, but the part of me that steps forward when the microphone comes on.</p>
        <p>The man behind it is real. The curiosity is real. And every question you hear me ask is one I&apos;ve probably already argued with myself about.</p>
      </article>
    </section>

    <section className="about-story">
      <div className="about-index"><span>03</span><p>Why I tell stories</p></div>
      <article>
        <p className="lead">A good story can take you somewhere you&apos;ve never been and still leave you feeling like you remember the road.</p>
        <p>That&apos;s what I&apos;m after. Not one narrow kind of story, and not one label. True stories. Folklore. Forgotten history. Original fiction. Music. Whatever form gives the story the life it needs.</p>
        <p>The work changes, but the reason stays the same. I want to make something that pulls you through the door and gives you a reason to come back.</p>
        <p className="pull-line">The story comes first. Everything else is built around it.</p>
        <p>Levi Crowe Media is the name over the door. The worlds inside it will keep growing.</p>
      </article>
    </section>

    <section className="about-creed">
      <p className="eyebrow"><span /> The door stays open</p>
      <blockquote>There&apos;s always<br /><em>another story.</em></blockquote>
      <p>Come on back now, you hear?</p>
      <a className="primary-action" href="/">Explore Levi Crowe Media</a>
    </section>

    <footer><a className="wordmark" href="/"><span>LCM</span><strong>Levi Crowe Media</strong></a><p>COME ON BACK NOW, YOU HEAR?</p><p>© 2026 Levi Crowe Media</p></footer>
  </main>;
}
