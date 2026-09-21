import ThemePlayer from "./ThemePlayer";

export default function Home() {
  return <main>
    <section className="entry" id="top">
      <div className="storm" aria-hidden="true" />
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top"><span>LCM</span><strong>Levi Crowe Media</strong></a>
        <div className="nav-links"><a href="#worlds">The World</a><a href="/midway">The Midway</a><a href="/books">Books</a><a href="#follow">Watch</a><a href="/about">About</a></div>
        <a className="shop-link" href="https://levi-crowe-jus-shop.fourthwall.com/" target="_blank" rel="noreferrer">Shop</a>
      </nav>
      <div className="hero-copy">
        <p className="eyebrow"><span /> The doors are open</p>
        <h1>Every story<br />leaves <em>something behind.</em></h1>
        <p className="intro">Original fiction, narrated stories, books, music, and strange worlds—created under one name.</p>
        <div className="hero-actions"><a className="primary-action" href="#worlds">Enter the world</a><ThemePlayer /></div>
      </div>
      <aside className="transmission-card" id="latest">
        <div className="live-row"><span className="pulse" /> Latest from LCM</div>
        <p className="card-kicker">Now in production</p><h2>The next story is taking shape.</h2>
        <p>The newest release from Levi Crowe Media will take over this featured panel.</p><i />
        <small>STORIES // BOOKS // MUSIC // ORIGINAL WORLDS</small>
      </aside>
    </section>

    <section className="worlds" id="worlds">
      <header className="worlds-heading">
        <p className="eyebrow"><span /> One name. Several worlds.</p>
        <h2>This is more than<br />a place to <em>watch videos.</em></h2>
        <p>Levi Crowe Media is the front gate. Beyond it are the stories, the traveling Midway, the books, the music, and the things made for the people who keep coming back.</p>
      </header>
      <div className="world-gates">
        <a className="world-gate midway-gate" href="/midway"><span>WORLD 01</span><div><p>Southern Gothic fiction</p><h3>The Midway</h3><small>An old carnival. A found family. Things in the dark that should have stayed there.</small></div><b>Step through →</b></a>
        <a className="world-gate books-gate" href="/books"><span>WORLD 02</span><div><p>From the desk of Levi Crowe</p><h3>The Books</h3><small>Standalone Southern Gothic novellas from the road beyond the carnival lights.</small></div><b>Open the library →</b></a>
        <div className="world-gate social-gate" id="follow"><span>WORLD 04</span><div><p>Stories where you already watch</p><h3>Follow &amp; Support Levi Crowe</h3><small>New stories, strange accounts, folklore, and a place to step behind the canvas.</small></div><div className="platform-links"><a href="https://www.facebook.com/share/188jzJfJYo/" target="_blank" rel="noreferrer">Facebook ↗</a><a href="https://www.tiktok.com/@levicrowemedia" target="_blank" rel="noreferrer">TikTok ↗</a><a href="https://www.youtube.com/@LeviCroweMedia" target="_blank" rel="noreferrer">YouTube ↗</a><a href="https://patreon.com/LeviCroweMedia" target="_blank" rel="noreferrer">Patreon ↗</a></div></div>
      </div>
    </section>

    <section className="midway-callout">
      <div className="midway-marquee" aria-hidden="true"><span>THE MIDWAY</span></div>
      <div className="midway-callout-copy"><p className="eyebrow"><span /> Beyond the canvas</p><h2>Most carnivals go south for winter.<br /><em>This one goes home.</em></h2><p>Deep in the Appalachian mountains, the Midway keeps a place no map will admit exists. The rides sleep. The wagons rust. And the people who live there know better than to ask what moves beyond the tree line.</p><a className="primary-action" href="/midway">Enter the Midway</a></div>
    </section>

    <section className="manifesto" id="about"><p className="eyebrow"><span /> Behind the company</p><blockquote>Stories worth telling.<br /><em>Worlds worth entering.</em></blockquote><p>Levi Crowe Media is an independent home for narrated stories, original fiction, books, music, and the worlds built around them.</p><a className="about-link" href="/about">Meet Levi Crowe <span>↗</span></a></section>
    <footer id="shop">
      <a className="wordmark" href="#top"><span>LCM</span><strong>Levi Crowe Media</strong></a>
      <div className="social-links" aria-label="Levi Crowe Media links">
        <a href="https://www.facebook.com/share/188jzJfJYo/" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.tiktok.com/@levicrowemedia" target="_blank" rel="noreferrer">TikTok</a>
        <a href="https://www.youtube.com/@LeviCroweMedia" target="_blank" rel="noreferrer">YouTube</a>
        <a href="https://patreon.com/LeviCroweMedia" target="_blank" rel="noreferrer">Patreon</a>
        <a href="https://levi-crowe-jus-shop.fourthwall.com/" target="_blank" rel="noreferrer">Shop</a>
      </div>
      <p>© 2026 Levi Crowe Media</p>
    </footer>
  </main>;
}
