import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books | Levi Crowe Media",
  description: "Southern Gothic novellas from Levi Crowe's Midway universe.",
};

export default function BooksPage() {
  return <main className="books-page">
    <nav className="nav world-nav" aria-label="Books navigation">
      <a className="wordmark" href="/"><span>LCM</span><strong>Levi Crowe Media</strong></a>
      <div className="nav-links"><a href="/">Headquarters</a><a href="/midway">The Midway</a><a href="/books" aria-current="page">Books</a><a href="/#follow">Watch</a><a href="/about">About</a></div>
      <a className="shop-link" href="https://levi-crowe-jus-shop.fourthwall.com/" target="_blank" rel="noreferrer">Shop</a>
    </nav>
    <header className="books-hero"><p className="eyebrow"><span /> Stories from beyond the lights</p><h1>The Midway<br /><em>Library.</em></h1><p>Standalone Southern Gothic novellas set inside one traveling carnival world. Start anywhere. Just don’t expect the road to let you leave unchanged.</p></header>
    <section className="book-feature">
      <div className="book-object"><img className="published-book-cover" src="/midway-ten-past-midnight-cover.png" alt="The Midway: Ten Past Midnight, Book One, written by Levi Crowe" /></div>
      <article><p className="eyebrow"><span /> Book One · Now available</p><h2>Ten Past<br />Midnight</h2><p className="book-deck">Some people find hope. Others feed on it.</p><p>The first gate into the Midway is open. Meet the carnival, the people who call it home, and the old presence moving behind the canvas. Available in Kindle and paperback editions.</p><div className="book-actions"><a className="primary-action" href="https://www.amazon.com/s?k=The+Midway+Ten+Past+Midnight+Levi+Crowe" target="_blank" rel="noreferrer">Find it on Amazon ↗</a><a className="quiet-action" href="/midway">Explore the world</a></div></article>
    </section>
    <section className="series-road"><p className="eyebrow"><span /> The road ahead</p><h2>One world.<br /><em>Different monsters.</em></h2><div className="road-line"><article className="released"><span>01</span><h3>Ten Past Midnight</h3><p>Published</p></article><article><span>02</span><h3>Book Two</h3><p>Now being written</p></article><article><span>03</span><h3>The road continues</h3><p>More Midway stories will follow</p></article></div></section>
    <section className="collection-note"><p>The books are short enough to finish over a long evening—but the world is built to keep growing. Each story stands alone. Together, they reveal what the Midway has been carrying down those back roads.</p></section>
    <footer><a className="wordmark" href="/"><span>LCM</span><strong>Levi Crowe Media</strong></a><p>THERE’S ALWAYS ANOTHER ROAD.</p><p>© 2026 Levi Crowe Media</p></footer>
  </main>;
}
