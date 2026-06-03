import Image from 'next/image'
import ProgressBar from '@/components/ProgressBar'
import SideNav from '@/components/SideNav'
import Carousel from '@/components/Carousel'
import TweaksPanel from '@/components/TweaksPanel'
import ScrollReveal from '@/components/ScrollReveal'

const CAROUSEL_SLIDES = [
  { type: 'image' as const, src: '/brand/photos/archive/build-2011-mural.jpg', alt: 'Sanding the scoop cabinets' },
  { type: 'image' as const, src: '/brand/photos/archive/drivers.jpg', alt: 'The 18-inch drivers laid out before assembly' },
  { type: 'image' as const, src: '/brand/photos/archive/cabinets-progress.jpg', alt: 'Speaker cabinets under construction' },
  { type: 'image' as const, src: '/brand/photos/archive/horns.jpg', alt: 'Curved mid-range horn cabinets' },
  { type: 'image' as const, src: '/brand/photos/archive/assembling.jpg', alt: 'Wiring the speaker stack' },
  { type: 'image' as const, src: '/brand/photos/archive/stack-finished.jpg', alt: 'The finished Sound Liberation Front system' },
  { type: 'video' as const, src: '/brand/videos/lot-block-party.mp4', poster: '/brand/photos/archive/lot-night.jpg' },
]

export default function Home() {
  return (
    <>
      <ProgressBar />
      <SideNav />
      <TweaksPanel />
      <ScrollReveal />

      {/* Hero */}
      <header className="hero">
        <Image
          className="hero-bg"
          src="/brand/photos/venue-frontage.jpg"
          alt="Downtone frontage at dusk, 301 Grand Street"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="hero-scrim" />
        <div className="wrap hero-mid">
          <p className="hero-kicker">Vision · Operating Principles · Institutional Thesis</p>
          <h1>Ethos &amp;<br />Operating<br />Principles</h1>
          <p className="hero-sub">Why the room exists, how it works, and how we keep it — ten years from now.</p>
        </div>
        <div className="wrap hero-foot">
          <div className="hero-addr">301 Grand Street · Lower East Side · New York</div>
          <div className="hero-scroll">Scroll ↓</div>
        </div>
      </header>

      <main>
        {/* Lineage carousel */}
        <Carousel
          eyebrow="Since 2011"
          title="Bringing sound to the people, room by room."
          slides={CAROUSEL_SLIDES}
        />

        {/* 00 · The Bet */}
        <section className="section" id="bet" data-section="">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="sec-num">00</div>
              <p className="sec-eyebrow">The Wager</p>
              <h2 className="sec-title">The Bet</h2>
            </div>
            <div className="col">
              <p className="reveal">Communal sound culture is hard to sustain at scale. The sound system tradition Downtone comes from treats sound as something shared—intentional, physical, and built around gathering rather than status. That ethos rarely survives growth. It either hardens into audiophile exclusivity, where the gear becomes the point and the room becomes a showroom, or it gets diluted into ordinary hospitality that treats music as background. The communal part is usually the first thing lost.</p>
              <p className="reveal">The common assumption is that this tradeoff is unavoidable: stay small and keep the integrity, or grow and lose it.</p>
            </div>
            <p className="pull reveal">We do not think that is true.</p>
            <div className="col">
              <p className="reveal">Downtone is built to prove that the communal ethos of sound system culture can become the foundation of a durable hospitality business. Not preserved as nostalgia or style, but expressed through everyday use, repeat behavior, and a room that remains full and meaningful on an ordinary Tuesday. <strong>Integrity and durability are not opposites if the room is built for both from the start.</strong></p>

              <h3 className="subhead reveal">Why Now</h3>
              <p className="reveal">This project builds on the extensive lineage established through <em>Dub-Stuy</em> and <em>Sound Liberation Front</em> since 2008. Over nearly two decades, that work has cultivated deep relationships, operational experience, and undeniable cultural credibility rooted in music, hospitality, and community.</p>
              <p className="reveal">At the same time, listening culture has increasingly drifted toward exclusivity and technical fetishism, while hospitality has drifted toward sameness and transaction. We have built temporary versions of this experience many times; we have simply never had a permanent home for it. 301 Grand Street is the first moment where the location, timing, community, and foundation perfectly align.</p>

              <h3 className="subhead reveal">Stewardship &amp; The Team</h3>
              <p className="reveal">A room can have DIY aesthetics. Few have DIY structure. The difference is <strong>authorship</strong>.</p>
              <p className="reveal">Downtone is not a founder's room operated by hired staff. It is built to be authored by the people who shape it—which is why the core team holds a real stake in it, not just a role. The ethos is not carried by the sound system or the design; it is carried by the people responsible for the room and how they choose to steward it over time. The institution matters more than any individual. The core team isn't merely executing a vision; we are building an institution designed to mean something ten years from now.</p>
            </div>
          </div>
        </section>

        <div className="band reveal">
          <Image src="/brand/photos/venue-banner.jpg" alt="Downtone interior, warm low-key light" fill style={{ objectFit: 'cover' }} />
          <div className="scrim" />
          <div className="band-cap">
            <p className="k">301 Grand Street</p>
            <p className="q">The first permanent home for a room we have built many times before.</p>
          </div>
        </div>

        {/* 01 · What Is Downtone */}
        <section className="section" id="what" data-section="">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="sec-num">01</div>
              <p className="sec-eyebrow">Definition</p>
              <h2 className="sec-title">What Is Downtone?</h2>
            </div>
            <div className="col">
              <p className="lead reveal">Downtone is a sound-led hospitality space in Chinatown / Lower East Side that combines coffee, cocktails, food, and intentional listening into a single day-to-night experience.</p>
              <p className="reveal">By day, it operates as a specialty café and neighborhood gathering space. By night, it shifts into a seated cocktail and listening environment where music plays a more intentional role in shaping atmosphere.</p>
              <p className="reveal">Downtone sits somewhere between a specialty café, cocktail bar, and listening room, but it is not trying to perfectly fit any one category. At its core, it is built around the belief that sound meaningfully shapes how people feel, gather, and connect. Rather than treating music as decoration, Downtone treats sound as a vital component of hospitality.</p>
            </div>

            <div className="isnot wide-block reveal">
              <div className="c yes">
                <h4>What Downtone is</h4>
                <ul>
                  <li><b>Sound-led</b><span>Music shapes atmosphere &amp; tone</span></li>
                  <li><b>Hospitality-first</b><span>Warmth comes before scene</span></li>
                  <li><b>Beverage-led</b><span>Coffee &amp; cocktails drive the engine</span></li>
                  <li><b>Listening-forward</b><span>Intentional but relaxed</span></li>
                  <li><b>Community-oriented</b><span>Built for repeat behavior</span></li>
                  <li><b>Operationally disciplined</b><span>Simplicity over sprawl</span></li>
                </ul>
              </div>
              <div className="c no">
                <h4>What Downtone is not</h4>
                <ul>
                  <li>A nightclub</li>
                  <li>A hi-fi showroom</li>
                  <li>A luxury listening salon</li>
                  <li>A members club</li>
                  <li>A restaurant-first concept</li>
                  <li>An over-programmed cultural venue</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 02 · Daily Rhythm */}
        <section className="section" id="rhythm" data-section="">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="sec-num">02</div>
              <p className="sec-eyebrow">Environmental Calibration</p>
              <h2 className="sec-title">Daily Rhythm &amp; Environmental Calibration</h2>
            </div>
            <div className="col">
              <p className="lead reveal">The room evolves naturally throughout the day, transitioning through environmental states via precise operational levers rather than theatrical shifts. Coffee, beverage, food, listening, and hospitality remain different expressions of the exact same room.</p>
            </div>

            <div className="phases wide-block reveal">
              <div className="phase">
                <div className="pn">Morning <em>Routine</em></div>
                <p>Bright, daylight-dominated, and calm. Built around neighborhood rituals, quick transactions, and focused, individual utility. Sound is spacious and low-decibel (ambient, sparse dub, acoustic fields).</p>
              </div>
              <div className="phase">
                <div className="pn">Afternoon <em>The Softening</em></div>
                <p>The transition from transactional speed to longer dwell times. Staff raise the acoustic floor with mid-tempo grooves and tactile instrumentals, subtly softening the physical environment to prioritize face-to-face social interaction over corporate video calls.</p>
              </div>
              <div className="phase">
                <div className="pn">Evening <em>The Pivot</em></div>
                <p>Executed systematically at sunset. Coffee operations clear away, lighting drops to warm architectural accents, and the sound system claims the room's energy at an engaging, physical volume that still leaves effortless space for intimate conversation.</p>
              </div>
              <div className="phase">
                <div className="pn">Late Evening <em>The Immersion</em></div>
                <p>Minimal, atmospheric lighting and deep, long-form listening choices (full album sides, continuous dub sets). Capacity and volume are strictly managed to preserve collective attention and acoustic comfort.</p>
              </div>
            </div>

            <div className="matrix-wrap reveal">
              <table className="matrix">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Morning <span className="ph">Routine</span></th>
                    <th>Afternoon <span className="ph">Transition</span></th>
                    <th>Evening <span className="ph">Social Center</span></th>
                    <th>Late Evening <span className="ph">Immersive</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Primary Guests</td><td>Regulars &amp; remote work</td><td>Explorers &amp; locals</td><td>Groups &amp; after-work</td><td>Enthusiasts &amp; community</td></tr>
                  <tr><td>Sound</td><td>Unobtrusive, warm</td><td>Rhythmic, present</td><td>Engaging, intentional</td><td>Deep listening, dynamic</td></tr>
                  <tr><td>Lighting</td><td>Natural, bright</td><td>Softening daylight</td><td>Intimate, warm</td><td>Dark, atmospheric</td></tr>
                  <tr><td>Social Energy</td><td>Individual activity</td><td>Overlapping focus</td><td>Active conversation</td><td>Collective attention</td></tr>
                  <tr><td>Hospitality Goal</td><td>Consistency, ease</td><td>Dwell time, comfort</td><td>Hosting, generosity</td><td>Stewardship, atmosphere</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="band reveal">
          <Image src="/brand/photos/coffee-cup.jpg" alt="Espresso pulling into a Downtone cup" fill style={{ objectFit: 'cover' }} />
          <div className="scrim" />
          <div className="band-cap">
            <p className="k">Morning — Routine</p>
            <p className="q">A daily ritual regulars can trust. Not a rotation to keep up with.</p>
          </div>
        </div>

        {/* 03 · Founding Thesis */}
        <section className="section" id="thesis" data-section="">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="sec-num">03</div>
              <p className="sec-eyebrow">Cultural Cause</p>
              <h2 className="sec-title">Founding Thesis &amp; Cultural Cause</h2>
            </div>
            <div className="col">
              <p className="reveal">Downtone exists because many modern hospitality spaces feel transactional, interchangeable, or optimized for novelty rather than repeat behavior. Beautiful spaces can feel emotionally cold. High-concept venues often prioritize aesthetics or exclusivity over comfort, atmosphere, and the feeling of wanting to stay. Something crucial gets lost: <strong>the desire to return.</strong></p>
              <p className="reveal">We believe people rarely remember every detail of what they consumed, but they always remember how a room felt. Cultural meaning cannot be manufactured—it is earned through consistency, hospitality, and repeat behavior over time.</p>

              <h3 className="subhead reveal">The Communal Medium</h3>
              <p className="reveal">Sound has historically been a communal medium. For generations, people gathered around radios, dancehalls, sound systems, record stores, clubs, concerts, and living rooms. Listening was fundamentally social—an act of shared presence.</p>
              <p className="reveal">Today, much of modern listening has become completely individualized, siloed through headphones, isolated algorithms, and personal devices. Downtone does not exist because listening bars are a trend, or because sound systems are aesthetically pleasing. It exists to reclaim and build a contemporary space for communal listening. Communal listening is culturally valuable, humanly necessary, and increasingly rare.</p>

              <h3 className="subhead reveal">Institutional Horizon</h3>
              <p className="reveal">Downtone is not built to maximize short-term attention, manufacture hype, or optimize for transactional volume. We are building a room that steadily becomes more valuable to its community through repeated, everyday use.</p>
              <p className="reveal">We believe cultural institutions are formed through consistency rather than novelty. Through rituals rather than spectacles. Through stewardship rather than temporary ownership. Accordingly, our success is not measured by an opening weekend spike, superficial press coverage, or social media visibility. Success is measured strictly by whether people still choose to gather, talk, and listen in this room ten years from now.</p>
            </div>

            <div className="ambition reveal">
              <p className="lbl">Our Ambition</p>
              <p className="q">Build a room people genuinely want to spend time in and still care about ten years from now.</p>
            </div>
          </div>
        </section>

        {/* 04 · Operating Principles */}
        <section className="section" id="principles" data-section="">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="sec-num">04</div>
              <p className="sec-eyebrow">Principles &amp; Guardrails</p>
              <h2 className="sec-title">Operating Principles &amp; Guardrails</h2>
            </div>
            <div className="col">
              <p className="lead reveal">These principles and guardrails form our framework for evaluating tradeoffs, maintaining consistency, and protecting what makes the room distinct over time.</p>
            </div>

            <h3 className="subhead reveal">Principles</h3>
            <div className="principles reveal">
              <div className="principle">
                <h4>Hospitality First</h4>
                <p>We are a hospitality business first—before the sound system, aesthetics, or cultural credibility. The room should never feel intimidating or overly precious.</p>
                <p className="vals">We value: Warmth over coolness · Hosting over servicing · Comfort before exclusivity · Consistency over novelty.</p>
              </div>
              <div className="principle">
                <h4>Sound Shapes Feeling</h4>
                <p>Sound is not decoration. The goal is not technical perfection or spectacle, but a room that feels better because sound is treated intentionally.</p>
                <p className="vals">We value: Emotional tone over technical flexing · Listening without rigidity · Sound that supports gathering.</p>
              </div>
              <div className="principle">
                <h4>Ritual Over Throughput</h4>
                <p>We do not optimize purely for covers or short-term spikes. The health of the room is measured by whether people choose to return. A healthy Tuesday matters more than a packed one-off event.</p>
                <p className="vals">We value: Repeat behavior over novelty · Neighborhood rhythm · Dwell time · Long-term trust.</p>
              </div>
              <div className="principle">
                <h4>Restraint Creates Depth</h4>
                <p>Complexity weakens hospitality. Too many menu items or competing ideas dilute execution. We create richness through atmosphere and curation rather than excess.</p>
                <p className="vals">We value: Curation over abundance · Focus over sprawl · Operational simplicity.</p>
              </div>
            </div>

            <h3 className="subhead reveal">Guardrails</h3>
            <div className="guards reveal">
              <div className="guard">
                <div className="tn">Neighborhood <em>↔</em> Destination</div>
                <div className="rp">
                  <p className="risk"><span className="k">Risk</span>Becoming a place people admire or associate only with special events, rather than everyday life.</p>
                  <p><span className="k">Position</span>Downtone must function as both neighborhood ritual and destination experience. The room must feel valuable on an ordinary day.</p>
                </div>
              </div>
              <div className="guard">
                <div className="tn">Warmth <em>↔</em> Preciousness</div>
                <div className="rp">
                  <p className="risk"><span className="k">Risk</span>The room becomes emotionally cold, overly curated, or subtly intimidating.</p>
                  <p><span className="k">Position</span>Hospitality comes before coolness. People must feel comfortable before they feel impressed.</p>
                </div>
              </div>
              <div className="guard">
                <div className="tn">Programming <em>↔</em> Everyday Gravity</div>
                <div className="rp">
                  <p className="risk"><span className="k">Risk</span>Programming becomes the product, and the room loses energy when nothing special is booked.</p>
                  <p><span className="k">Position</span>Programming should deepen the room, not carry it. The room itself must work.</p>
                </div>
              </div>
              <div className="guard">
                <div className="tn">Sound <em>↔</em> Technical Fetishism</div>
                <div className="rp">
                  <p className="risk"><span className="k">Risk</span>Sound becomes status, gear obsession, or optimized purely for audiophile validation.</p>
                  <p><span className="k">Position</span>Sound should deepen gathering, not dominate or isolate it.</p>
                </div>
              </div>
              <div className="guard">
                <div className="tn">Founder Vision <em>↔</em> Institutional Durability</div>
                <div className="rp">
                  <p className="risk"><span className="k">Risk</span>The room only works when the founder is present.</p>
                  <p><span className="k">Position</span>Culture must become legible, repeatable, and institutionalized.</p>
                </div>
              </div>
              <div className="guard">
                <div className="tn">Ambition <em>↔</em> Execution</div>
                <div className="rp">
                  <p className="risk"><span className="k">Risk</span>Too many ideas arrive too early (more food, more programming, more complexity).</p>
                  <p><span className="k">Position</span>Growth must follow operational strength. Do fewer things exceptionally well.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 · Core Programmatic Topologies */}
        <section className="section" id="programs" data-section="">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="sec-num">05</div>
              <p className="sec-eyebrow">The Engines</p>
              <h2 className="sec-title">Core Programmatic Topologies</h2>
            </div>
            <div className="col">
              <p className="lead reveal">Hospitality at Downtone is a single, coherent ecosystem. Rather than executing rigid operational guidelines, each program is governed by a clear, unyielding structural boundary.</p>
            </div>

            <div className="engine reveal">
              <h3>The Coffee Engine</h3>
              <ul>
                <li><span className="et">The Daytime Anchor</span><p>Functions as the primary vehicle for building immediate daytime trust and neighborhood routine.</p></li>
                <li><span className="et">Service Style</span><p>Driven by unpretentious counter service built for ease, recognition, and zero pretension.</p></li>
                <li><span className="et">Sourcing Architecture</span><p>Relies on long-term roasting relationships and consistency. We explicitly reject hyper-frequent, elite menu rotations that foster gatekeeping, favoring a daily ritual regulars can trust.</p></li>
              </ul>
            </div>

            <div className="engine reveal">
              <h3>The Beverage Engine</h3>
              <ul>
                <li><span className="et">The Cocktail Thesis</span><p>Focused entirely on balance, drinkability, and human connection rather than mixological spectacle, utilizing high-precision classic templates.</p></li>
                <li><span className="et">The Fluid Pillars</span><p>Spans a curated, intentional tea program alongside standard bar operations to seamlessly bridge day-to-night states.</p></li>
                <li><span className="et">The Low / Non-Alcoholic Charter</span><p>Teas and non-alcoholic drinks receive identical attention, premium ice/glassware, and presentation weight to ensure inclusive hospitality across all dayparts.</p></li>
              </ul>
            </div>

            <div className="engine reveal">
              <h3>The Food Program</h3>
              <ul>
                <li><span className="et">The Supportive Role</span><p>Operates purely as a friction-reducer to support beverage profiles and extend neighborhood dwell times.</p></li>
                <li><span className="et">The Kitchen Guardrail</span><p>Governed by a strict "No Open Flame" guardrail—utilizing a zero-hood, small-footprint assembly layout. There are no gas lines or multi-cook lines.</p></li>
                <li><span className="et">Culinary Topology</span><p>High-quality, operationally disciplined room-temperature fare (conservas, artisan breads, boards) ensures zero execution lag and light overhead.</p></li>
              </ul>
            </div>

            <div className="engine two reveal">
              <h3>Floor Service Architecture</h3>
              <ul>
                <li><span className="et">The Emotional Tone</span><p>Prioritizes natural generosity over performance or rigid hospitality rules.</p></li>
                <li><span className="et">Adaptive Presence</span><p>Service is highly contextual—knowing when to engage warmly to deconstruct a vinyl record, tea origin, or beverage profile, and when to step back entirely to let the physical atmosphere carry the conversation.</p></li>
              </ul>
            </div>
          </div>
        </section>

        <div className="band reveal">
          <Image src="/brand/photos/session-01.jpg" alt="A listening session at Downtone" fill style={{ objectFit: 'cover' }} />
          <div className="scrim" />
          <div className="band-cap">
            <p className="k">Communal listening</p>
            <p className="q">Luxury listening culture individualizes sound. Downtone communalizes it.</p>
          </div>
        </div>

        {/* 06 · The Room & Business Logic */}
        <section className="section" id="room" data-section="">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="sec-num">06</div>
              <p className="sec-eyebrow">Space &amp; Business Logic</p>
              <h2 className="sec-title">The Room &amp; Business Logic</h2>
            </div>

            <h3 className="subhead reveal">Spatial Architecture &amp; Design Ethos</h3>
            <p className="pull reveal">Luxury listening culture individualizes sound. Downtone communalizes it.</p>
            <div className="col">
              <p className="reveal">The room must feel deeply rooted rather than curated for display. We explicitly favor tactile materials that age gracefully, hardware systems that honestly reveal their mechanical construction, and an architectural space that invites participation over passive admiration. Sound is never presented as a luxury trophy object; it is offered purely as a shared experience.</p>
            </div>

            <div className="phases wide-block reveal">
              <div className="phase">
                <div className="pn">Ground Floor <em>The Heart</em></div>
                <p>Functions as a neighborhood café by day and an intentional cocktail/listening environment by night. The transition is gradual, executed through shifts in light, sound, and energy rather than theatrical transformation. It comfortably accommodates a ten-minute visit or a three-hour stay.</p>
              </div>
              <div className="phase">
                <div className="pn">Basement <em>The Depth</em></div>
                <p>Complements the ground floor by creating space for deeper listening, private experiences, cultural programming, and experimentation. The Basement expands what Downtone can be while maintaining the exact same dedication to acoustic intimacy, comfortable seating, and controlled capacity as the ground floor—intentionally avoiding the high-volume volatility, density, and crowd dynamics of a traditional nightlife venue. It adds conceptual depth without placing pressure on the main room to constantly perform.</p>
              </div>
              <div className="phase">
                <div className="pn">Sound Architecture</div>
                <p>Sound is treated as part of the architecture. We reject nightclub volume and technical spectacle. The system is visible enough to communicate intention, but integrated enough to support conversation, pacing, and atmosphere. Good sound reinforces a shared, communal experience rather than isolating individuals.</p>
              </div>
            </div>

            <div className="col">
              <h3 className="subhead reveal">Business Logic</h3>
              <p className="reveal">Downtone is designed around repeat behavior and high-quality dwell time. The financial model benefits from continuous activity across the dayparts: morning coffee, afternoon social use, evening cocktails, and late-night cultural experiences.</p>
              <p className="reveal">Rather than relying on nightlife volatility or high-volume turnover, the business relies on longer stays, neighborhood familiarity, beverage-led economics, and repeat visitation. The basement expands our opportunities without fundamentally altering the operating model.</p>
              <p className="reveal"><strong>The ambition is not maximum throughput; it is a durable hospitality institution built through consistency.</strong></p>
            </div>
          </div>
        </section>

        {/* 07 · Legacy & Lineage */}
        <section className="section" id="lineage" data-section="">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="sec-num">07</div>
              <p className="sec-eyebrow">Where This Sits</p>
              <h2 className="sec-title">Legacy &amp; Lineage</h2>
            </div>
            <div className="col">
              <p className="reveal">Downtone is part of a longer, historic lineage of communal sound culture. From Jamaican sound systems to historic neighborhood cafés, underground listening rooms, community record shops, social clubs, and radical gathering spaces, these environments have always provided far more than mere entertainment. They create deep belonging.</p>
              <p className="reveal">Our role is not simply to manage and operate a commercial venue. Our role is to steward a physical room where human beings can consistently gather, listen, learn, and connect.</p>
            </div>
            <p className="pull reveal">If we succeed, Downtone integrates into the permanent cultural fabric of New York — not because it is exclusive, rare, or extraordinary, but because it becomes profoundly useful, familiar, and loved.</p>
          </div>
        </section>

        {/* Colophon */}
        <footer className="colophon">
          <div className="wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/Downtone-logo-white.svg" alt="Downtone" className="colophon-mark" />
            <p className="colophon-line">Good sound. Culture. Community.</p>
            <div className="colophon-meta">
              Sound Liberation Front · 301 Grand Street · Lower East Side, New York<br />
              Foundation Document · Core Team · Confidential · 2026
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
