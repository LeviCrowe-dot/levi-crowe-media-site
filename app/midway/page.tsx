import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Midway | Levi Crowe Media",
  description: "Enter Levi Crowe's Southern Gothic world of canvas, rust, found family, and old things waiting beyond the lights.",
};

export default function MidwayPage() {
  return <main className="midway-page">
    <nav className="nav world-nav" aria-label="Midway navigation">
      <a className="wordmark" href="/"><span>LCM</span><strong>Levi Crowe Media</strong></a>
      <div className="nav-links"><a href="/">Headquarters</a><a href="/midway" aria-current="page">The Midway</a><a href="/books">Books</a><a href="/#follow">Watch</a><a href="/about">About</a></div>
      <a className="shop-link" href="https://levi-crowe-jus-shop.fourthwall.com/" target="_blank" rel="noreferrer">Midway Store</a>
    </nav>
    <header className="midway-hero">
      <div className="midway-sign"><img src="/midway-entrance.png" alt="The weathered entrance to the Midway at night" /></div>
      <div className="midway-hero-copy"><p className="eyebrow"><span /> A Levi Crowe world</p><h1>When the lights come on,<br />something else <em>wakes up.</em></h1><p>An old traveling carnival crosses the South carrying games, canvas, secrets, and the sort of people the rest of the world never made room for.</p><a className="primary-action" href="/books">Begin with the books</a></div>
    </header>
    <section className="midway-lore">
      <div className="lore-number">01</div><article><p className="eyebrow"><span /> The road</p><h2>It still travels.</h2><p>The Midway raises its tents in small towns where the pavement gives out and the tree line feels too close. By morning, it can be gone—leaving tire marks, trampled grass, and stories nobody agrees on.</p></article>
      <div className="lore-number">02</div><article><p className="eyebrow"><span /> The people</p><h2>All freakers welcome.</h2><p>The Midway is home to the discarded, the odd, the dangerous, and the misunderstood. They argue. They keep secrets. But when something comes through the dark, they close ranks.</p></article>
      <div className="lore-number">03</div><article><p className="eyebrow"><span /> Winter quarters</p><h2>Most carnivals go south.<br />This one goes home.</h2><p>Deep in the Appalachian mountains sits a private stretch of land filled with workshops, bunkhouses, weathered wagons, and rides sleeping beneath tarps. The Midway returns there every winter. Outsiders rarely do.</p></article>
    </section>
    <section className="midway-voices"><p className="eyebrow"><span /> From inside the tents</p><blockquote>“You don’t join the Midway.<br /><em>The Midway decides you belong.</em>”</blockquote><div className="voice-pair"><article><small>THE OWNER</small><h3>Levi Crowe</h3><p>Old, observant, stubborn, and carrying more history than he has any intention of explaining.</p></article><article><small>THE FOREMAN</small><h3>Amos Boudreaux</h3><p>The voice from the road. Dry as old tobacco and usually one bad decision away from saying exactly what he thinks.</p></article></div></section>
    <section className="world-cta"><p>THE GATES ARE OPEN</p><h2>Come strange.<br /><em>Stay strange.</em></h2><div><a className="primary-action" href="/books">Read the books</a><a className="quiet-action" href="https://levi-crowe-jus-shop.fourthwall.com/" target="_blank" rel="noreferrer">Visit the Midway store ↗</a></div></section>
    <footer><a className="wordmark" href="/"><span>LCM</span><strong>Levi Crowe Media</strong></a><p>ALL FREAKERS WELCOME.</p><p>© 2026 Levi Crowe Media</p></footer>
  </main>;
}
