import React, { useEffect, useState } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import "./metal-essay.css";


const albumImages = [
  "/albums/5fdp.png",
  "/albums/A7x.png",
  "/albums/Aephanemer.png",
  "/albums/Aethernan.png",
  "/albums/AetherRealm.png",
  "/albums/After-Forever.png",
  "/albums/Agalloch.png",
  "/albums/Alestorm.png",
  "/albums/AlienWeaponry.png",
  "/albums/Allamedah.png",
  "/albums/Alcest.png",
  "/albums/Altesia.png",
  "/albums/AmonAmarth.png",
  "/albums/Amorphis.png",
  "/albums/AnAbstractIllusion.png",
  "/albums/AncientBards.png",
  "/albums/ancientSettlers.png",
  "/albums/Antrisch.png",
  "/albums/ApocalypseConspiracy.png",
  "/albums/Apocalyptica.png",
  "/albums/Apotheus.png",
  "/albums/Arkona.png",
  "/albums/Arkona2.png",
  "/albums/At-The-Gates.png",
  "/albums/Atavistia.png",
  "/albums/Avantasia.png",
  "/albums/Avatar.png",
  "/albums/Avkrvst.png",
  "/albums/Baltum.png",
  "/albums/BattleBeast.png",
  "/albums/Batushka.png",
  "/albums/BCI.png",
  "/albums/be'lakor.png",
  "/albums/be'lakor2.png",
  "/albums/BeyondCreation.png",
  "/albums/BFMV.png",
  "/albums/BlindGuardian.png",
  "/albums/bmth.png",
  "/albums/BTBAM.png",
  "/albums/Burzum.png",
  "/albums/CaboDano.png",
  "/albums/Caligula'sHorse.png",
  "/albums/BreakingBenjamin.png",
  "/albums/BrothersOfMetal.png",
  "/albums/Brymir.png",
  "/albums/BTBAM.png",
  "/albums/ChaosDivine.png",
  "/albums/Countless-Skies.png",
  "/albums/Crossfaith.png",
  "/albums/Cruadalach.png",
  "/albums/CultOfFire.png",
  "/albums/Dadaroma.png",
  "/albums/Dalriada.png",
  "/albums/DarkTranquility.png",
  "/albums/DarkTranquility2.png",
  "/albums/DeathAngel.png",
  "/albums/DEG.png",
  "/albums/DEG2.png",
  "/albums/Delain.png",
  "/albums/Destroy-destroy-destroy.png",
  "/albums/DiabloSwingOrchestra.png",
  "/albums/DimmuBorgir.png",
  "/albums/Draconian.png",
  "/albums/DragonForce.png",
  "/albums/DreamTheater.png",
  "/albums/Duskmourn.png",
  "/albums/Eluveitie.png",
  "/albums/Eluveitie2.png",
  "/albums/Ensiferum.png",
  "/albums/Epica.png",
  "/albums/Epica2.png",
  "/albums/EscapeTheFate.png",
  "/albums/eternalStorm.png",
  "/albums/FallenAtDawn.png",
  "/albums/feuerchwanz.png",
  "/albums/Finntroll.png",
  "/albums/FleshGodApocalypse.png",
  "/albums/Fractal-Gates.png",
  "/albums/FrozenCrown.png",
  "/albums/Gaerea.png",
  "/albums/Galneryus.png",
  "/albums/Gaupa.png",
  "/albums/godiva.png",
  "/albums/Gojira.png",
  "/albums/Grai.png",
  "/albums/grima.png",
  "/albums/grima2.png",
  "/albums/Haken.png",
  "/albums/hammerhedd.png",
  "/albums/Harakiri.png",
  "/albums/Heidevolk.png",
  "/albums/HillsHaveEyes.png",
  "/albums/Horus.png",
  "/albums/HumanityLastBreath.png",
  "/albums/Hypno5e.png",
  "/albums/Igorr.png",
  "/albums/Ihsahn.png",
  "/albums/ImperialTriumphant.png",
  "/albums/Inanna.png",
  "/albums/InMourning.png",
  "/albums/Insomnium.png",
  "/albums/iotunn.png",
  "/albums/iotunn2.png",
  "/albums/IronMaiden.png",
  "/public/albums/Jinjer.png",
  "/albums/Kalmah.png",
  "/albums/Kamelot.png",
  "/albums/kanonenfieber.png",
  "/albums/Kataklysm.png",
  "/albums/Killswitch-Engage.png",
  "/albums/Killus.png",
  "/albums/Korpiklaani.png",
  "/albums/Kvelertak.png",
  "/albums/LambOfGod.png",
  "/albums/Leprous.png",
  "/albums/Lorenguard.png",
  "/albums/LunasCall.png",
  "/albums/MachineHead.png",
  "/albums/MajesticVanguard.png",
  "/albums/MajestyOfRevival.png",
  "/albums/Masterplan.png",
  "/albums/Mastodon.png",
  "/albums/Mayan.png",
  "/albums/Meshuggah.png",
  "/albums/mgla.png",
  "/albums/MissLava.png",
  "/albums/Moonshade.png",
  "/albums/Moonspell.png",
  "/albums/MorsPrincipiumEst.png",
  "/albums/MTAT.png",
  "/albums/Myrath.png",
  "/albums/myrukur.png",
  "/albums/NailedToObscurity.png",
  "/albums/NeOb.png",
  "/albums/neob2.png",
  "/albums/Nevermore.png",
  "/albums/nightmare.png",
  "/albums/Nightwish.png",
  "/albums/ningenIsu.png",
  "/albums/NothingsCarvedinStone.png",
  "/albums/Oceans-of-Slumber.png",
  "/albums/OceansAteAlaska.png",
  "/albums/Opeth.png",
  "/albums/Opeth2.png",
  "/albums/OrbitCulture.png",
  "/albums/OrdenOgan.png",
  "/albums/orphanedLand.png",
  "/albums/Pantera.png",
  "/albums/Persefone.png",
  "/albums/Powerwolf.png",
  "/albums/Queensryche.png",
  "/albums/Rhapsody.png",
  "/albums/RhapsodyOfFire.png",
  "/albums/Rishloo.png",
  "/albums/Riverside.png",
  "/albums/Sabaton.png",
  "/albums/Septicflesh.png",
  "/albums/SeventhAvenue.png",
  "/albums/Shylmagogar.png",
  "/albums/Sigh.png",
  "/albums/SleepToken.png",
  "/albums/Slipknot.png",
  "/albums/Soad.png",
  "/albums/Soen.png",
  "/albums/Soilwork.png",
  "/albums/sowilo.png",
  "/albums/StoneSour.png",
  "/albums/SubwayToSally.png",
  "/albums/Suidarka.png",
  "/albums/Svartsot.png",
  "/albums/swallow.png",
  "/albums/Sylosis.png",
  "/albums/sylvaine.png",
  "/albums/SymphonyX.png",
  "/albums/TesseracT.png",
  "/albums/Textures.png",
  "/albums/TheVoynichCode.png",
  "/albums/threeDaysgrace.png",
  "/albums/tool.png",
  "/albums/Triosphere.png",
  "/albums/Trivium.png",
  "/albums/Tryptykon.png",
  "/albums/Tyr.png",
  "/albums/Verikalpa.png",
  "/albums/Viza.png",
  "/albums/vola.png",
  "/albums/Vulkan.png",
  "/albums/Wardruna.png",
  "/albums/Whispered.png",
  "/albums/WhiteChapel.png",
  "/albums/wilderun.png",
  "/albums/WindRose.png",
  "/albums/Wintersun.png",
  "/albums/WordsOfFarewell.png",
  "/albums/yoko.png",

];

// function getRandomStartPosition() {
//   const side = Math.floor(Math.random() * 4);
//   switch (side) {
//     case 0: return { top: `${Math.random() * 100}%`, left: `-10%` };         // left
//     case 1: return { top: `${Math.random() * 100}%`, left: `110%` };        // right
//     case 2: return { top: `-10%`, left: `${Math.random() * 100}%` };        // top
//     case 3: return { top: `110%`, left: `${Math.random() * 100}%` };        // bottom
//     default:
//       return { top: `50%`, left: `50%` };
//   }


// }

function getSweepPath() {
  const side = Math.floor(Math.random() * 4);
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let start, end;

  switch (side) {
    case 0: // left → right
      start = { top: `${Math.random() * vh}px`, left: `-200px` };
      end = { top: `${Math.random() * vh}px`, left: `${vw + 200}px` };
      break;
    case 1: // right → left
      start = { top: `${Math.random() * vh}px`, left: `${vw + 200}px` };
      end = { top: `${Math.random() * vh}px`, left: `-200px` };
      break;
    case 2: // top → bottom
      start = { top: `-200px`, left: `${Math.random() * vw}px` };
      end = { top: `${vh + 200}px`, left: `${Math.random() * vw}px` };
      break;
    case 3: // bottom → top
      start = { top: `${vh + 200}px`, left: `${Math.random() * vw}px` };
      end = { top: `-200px`, left: `${Math.random() * vw}px` };
      break;
    default:
      start = end = { top: `50%`, left: `50%` };
  }

  return {
    startCSS: start,
    x: `${parseFloat(end.left) - parseFloat(start.left)}px`,
    y: `${parseFloat(end.top) - parseFloat(start.top)}px`,
  };
}

// function getRandomPositionPair() {
//   const vw = window.innerWidth;
//   const vh = window.innerHeight;

//   const start = {
//     top: Math.random() * vh,
//     left: Math.random() * vw
//   };
//   const end = {
//     top: Math.random() * vh,
//     left: Math.random() * vw
//   };

//   return {
//     startCSS: { top: `${start.top}px`, left: `${start.left}px` },
//     x: `${end.left - start.left}px`,
//     y: `${end.top - start.top}px`
//   };
// }
// function getRandomEndPosition() {
//   return {
//     top: `${Math.random() * 100}%`,
//     left: `${Math.random() * 100}%`
//   };
// }
function getRandomTilt() {
  const tilt = Math.random() * 8 - 4; // -4 to +4 degrees
  return `${tilt}deg`;
}
function getRandomSize() {
  return "200px";
}
function getRandomDuration() {
  const min = 12;
  const max = 20;
  return `${Math.random() * (max - min) + min}s`;
}
function getRandomDelay() {
  return `${Math.random() * 30}s`;
}
function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

let shuffledAlbums = shuffle(albumImages);
let currentIndex = 0;
function AlbumBackground() {
  const [floatingAlbums, setFloatingAlbums] = useState([]);

  useEffect(() => {
    const visibleCount = 10;
    let index = 0;

    function spawnAlbum() {
      const src = shuffledAlbums[currentIndex];
      currentIndex = (currentIndex + 1) % shuffledAlbums.length;
      // Reshuffle if we've looped through everything
      if (currentIndex === 0) {
        shuffledAlbums = shuffle(albumImages);
      }

      const pos = getSweepPath();
      const duration = getRandomDuration();
      const delay = getRandomDelay();
      const newAlbum = {
        id: Date.now() + Math.random(),
        src,
        pos, // contains startCSS, x, y

        size: getRandomSize(),
        duration: duration,
        delay: delay,
        tilt: getRandomTilt(),
      };

      setFloatingAlbums((prev) => {
        const next = [...prev, newAlbum];
        // Keep only the last 10
        return next.length > 10 ? next.slice(next.length - 10) : next;
      });

      const totalLifetime = parseFloat(duration) * 1000 + parseFloat(delay) * 1000;
      setTimeout(() => {
        setFloatingAlbums((prev) => prev.filter((a) => a.id !== newAlbum.id));
      }, totalLifetime);

      index++;
    }

    const interval = setInterval(spawnAlbum, 7000); // spawn every 7s
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="album-background">
      {floatingAlbums.map((album) => (
        <img
          key={album.id}
          src={album.src}
          className="floating-album"
          style={{
            top: album.pos.startCSS.top,
            left: album.pos.startCSS.left,
            width: album.size,
            animation: `drift ${album.duration} linear`,
            animationDelay: album.delay,
            "--tilt": album.tilt,
            transform: `rotate(${album.tilt})`,
            '--x': album.pos.x,
            '--y': album.pos.y
          }}
          alt=""
        />
      ))}
    </div>
  );
}

function MetalEssay() {
  return (
    <>
      <AlbumBackground />
      <main className="metal-container">
        <h1 className="title">Are You Me(n)tal Enough?</h1>
        <h2 className="subtitle">A Lifelong Journey Through Sound, Self, and Steel</h2>
        <p className="byline">By: <span>Ricardo Português</span></p>
        <section className="">
          <h3 className=""><span className="phase">Introduction:</span> The Soundtrack of Becoming</h3>
          <p>
            Music has always been more than entertainment to me — it's been a mirror, a map, a mentor. What began as casual listening to mainstream rock slowly evolved into something far more profound: a life spent discovering metal, one layer at a time. This isn’t a story of fandom. It’s a chronicle of transformation — from resistance to acceptance, from confusion to communion. And it all started with a band I never thought I’d like (And it always does).
          </p>
          <blockquote className="">
            "You don’t just hear metal. You become it."
          </blockquote>
        </section>

        <section className="">
          <h3 className=""><span className="phase">Phase One:</span> Entry Through the Gateway</h3>
          <p>
            My first steps into metal weren’t dramatic. They were familiar: <b>Bullet for My Valentine, Breaking Benjamin, Three Days Grace, More Than a Thousand</b> — examples of many bands with hooks, melody, and emotional accessibility. They were the bridges. Then came <b>Avenged Sevenfold</b>, the true turning point. Their earlier albums, infused with metalcore, death metal, and progressive tendencies, awakened something deeper. Complexity. Storytelling. Layers.  </p>

          From that point, it was no longer enough to just listen — <blockquote>"I wanted to feel, understand, and explore."</blockquote>


        </section>

        <section className="">
          <h3 className=""><span className="phase">Phase Two:</span> The Symphony and the Spectacle</h3>
          <p>

            Next came the symphonic wave — <b>Nightwish, Epica, After Forever</b> — which expanded my sense of scale. Metal could be cinematic. Operatic. Emotional. I also dipped into visual kei with bands like <b>The Gazette</b> and <b>Dadaroma</b>, unlocking a theatrical and experimental side of metal I hadn’t known existed.

            Around this time, I started to test my boundaries.</p>
          <p> I gave <b>Slipknot and System of a Down</b> another chance — bands I’d previously dismissed. But now, their chaos had meaning.</p>  <blockquote>I was starting to develop what I now call "the ear" — the capacity to appreciate intensity as beauty.</blockquote>


        </section>

        <section className="">
          <h3 className=""><span className="phase">Phase Three:</span> The Progressive Awakening</h3>
          <p>

            Then came <b>Opeth</b>. At first, I avoided their harsh vocals as much as possible, clinging to their mid-era cleaner material. But soon, I discovered the heart of progressive metal: <b>Dream Theater, Tool, Pain of Salvation</b>. I wasn’t just listening anymore — I was experiencing. These bands were sonic novels, and I was all in. </p>

          <p> And somewhere in this sonic maze, I circled back to bands like <b>Moonspell</b>. Ones I had shelved years earlier, now blossoming under my matured perception. I realized this wasn’t about taste. It was about readiness, and maturity.</p>

          <blockquote>“It’s not about taste —  it’s about readiness.”</blockquote>


        </section>

        <section className="">
          <h3 className=""><span className="phase">Phase Four:</span> The Power Surge and the Folk Awakening</h3>
          <p>

            In between my exploration of <b>prog</b> and <b>melodeath</b>, a new force emerged: <b>Power Metal</b>. I attended a live <b>Sabaton</b> show, and that experience changed everything. Suddenly, power metal clicked. On Spotify, it might lack dynamics or technicality — but live, it explodes with adrenaline and unity.

            That show taught me something: </p>

          <blockquote>"Metal isn't always about complexity — it's about states."</blockquote>

          I could lose myself in a chaotic and melancholic <b>Dir En Grey</b> performance, silent and absorbed for two straight hours, or I could be shouting with the crowd, holding my new sweaty best friends, while literally rowing in a mosh pit as if we’re crashing down against the waves in the Discovery Age - during a power metal set. This realization opened new doors: <strong>folk metal, folk-prog, and viking metal — bands like Verikalpa, Korpiklaani, Eluveitie, Dalriada, Ensiferum.</strong>
          <p>Shortly after, I found myself drawn to <b>djent</b>, and eventually into <b>math-rock</b>, both natural progressions from my love of progressive complexity.</p>

        </section>

        <section className="">
          <h3 className=""><span className="phase">Phase Five:</span> Into Death, Through Melody</h3>
          <p>

            Next stop: <b>death metal</b> — more specifically, <b>melodic death metal</b>. Bands like <strong>Amon Amarth</strong> and <strong>Kataklysm</strong> were gateways, but it was <b>Be’lakor</b> that stole my soul. Their blend of melody and progressive depth felt like a culmination of everything I had loved before in music. Their lyrics are pure literature — unmatched in tone, imagery, and structure. The storytelling is incredible, immersive, and emotional, like reading ancient epics through modern sonic craft.</p>

          This phase exploded into dozens of bands and over a hundred discographies — <b>Kalmah, Dark Tranquillity, In Mourning, Wintersun</b>, and many more. <p>I had finally arrived in the heart of the genre. And I thought to myself:</p>
          <blockquote>  "This is it, I don’t think I can go any deeper than this."</blockquote>


        </section>

        <section className="">
          <h3 className=""><span className="phase">Phase Six:</span> Beyond the Veil — Avant-Garde and the Abyss</h3>
          <p>
            With <b>Diablo Swing Orchestra</b>, the last barrier fell. Metal could be chaotic, theatrical, absurd — and still profound. I plunged into <b>Ne Obliviscaris</b>(extreme prog death), <b>Dir En Grey</b> (avant-gard prog death – at core), and started appreciating avant-garde, technical, and experimental forms that once seemed alien to me.
          </p>
          <p>But there was still one wall left: <strong className="bm">BLACK METAL.</strong></p>
          <p>I tried for years... I really did! <strong>Dimmu Borgir, Darkthrone, Burzum, Belphegor, Emperor</strong> — but nothing clicked. Not until I discovered <em>blackened death metal</em> through <b>Kanonenfieber</b>. That was the key. From there, the gates opened: </p>
          <p><strong>  Grima, Gaerea, Arkona (late), Mgla, Imperial Triumphant, Sylvaine</strong>, and even fake and real <strong>Batushka-Patriarkh </strong> made sense.</p>


          <p>
            I realized what I hadn’t seen before: the power of <strong>black metal</strong> lies not only in its abrasiveness and agression, it was not just nihilistic darkness or elitism. It's not just about anti-christ movements and Satan adoration.  There is something in its atmospheric, emotional, and even ritualistic qualities. It can be mystical, spiritual, transcendent and deeply enveloping — like a cold, timeless wind howling through forgotten temples.
          </p>

          <p>
            I learned something crucial:
          </p>
          <blockquote>“it’s not about liking a genre — it’s about finding your way into it.”</blockquote>
        </section>

        <section className="">
          <h3 className=""><span className="phase">Phase Seven:</span> The Industrial Revelation</h3>
          <p>
            Ironically, one of my more recent breakthroughs came via a small live show. First through the band <b>Yokovich</b>, and later with <b>Killus</b> — two smaller acts that showed me the true soul of metal doesn't dwell on the grand, polished stages built for the casual, consumer-friendly crowd. It lives in the intimate venues, where musicians pour every part of themselves into the performance, becoming one with the sound. The genre: <b>industrial metal</b>, which I had never truly connected with before. But standing there, feeling the pulse of machines and menace, I finally understood — </p>

          <blockquote> this wasn’t about complexity or reflection. It was about raw, cold, pulsing energy.</blockquote> <p>A new facet of the metal multiverse had revealed itself to me.</p>

        </section>

        <section className="">
          <h3 className=""><span className="phase">Phase Eight:</span> The Present Chapter</h3>
          <p>

            Right now, I'm still journeying — still discovering. This month alone, I’ve found myself immersed in a handful of incredibly diverse and genre-bending acts:
          </p><ul>
            <li className="phase-eight-li"> <b className="phase-eight-bands">Grima</b> — Atmospheric Black Metal/Ritualistic Black Metal that envelopes you in nature and solitude.</li>
            <li className="phase-eight-li"> <b className="phase-eight-bands">Sleep Token</b> — A fusion of Post-Djent / Ambient Progressive Metal laced with Alternative R&B, pop, and post-rock. Ethereal, heavy, and uniquely emotive.</li>
            <li className="phase-eight-li"> <b className="phase-eight-bands">Iotunn</b> — Progressive Melodic Death Metal with strong elements of Post-Black Metal, cosmic atmosphere, and light technicality — all carried by a vocalist who sounds like a power metal herald.</li>
            <li className="phase-eight-li"> <b className="phase-eight-bands">Myrkur</b> — A stunning blend of Black and Nordic Folk, weaving traditional Scandinavian instruments and ghostly melodies into her sound.</li>
          </ul>
          <p>  And that’s just this month. Who knows — maybe next month I’ll be diving into the great The <b>Dave Brubeck Quartet</b>  or <b>Fela Kuti</b>. That’s the fun of it: metal taught me how to listen — and now, I can listen to anything with open ears and an inquisitive mind.</p>


        </section>

        <section className="">
          <h3 className=""><span className="phase">Conclusion:</span> There Is No End</h3>
          <p>
            This journey has taken almost two decades. From <b>pop</b> and mainstream <b>rock</b> CDs to exploring post-black, folk-black, symphonic death, oriental metal, doom, and beyond beyond beyond. Metal has become not just a genre, but a <b>landscape</b> — one that demands growth, patience, and open ears.
          </p>
          <p>
            What makes metal so eternal is that every subgenre brings its own emotional vocabulary:
          </p>
          <ul>
          </ul>
          <li>Some make you feel introspective and reflective.</li>
          <li>Others pull you into trance-like immersion.</li>
          <li>Some blast you with rage, while others uplift with beauty or euphoria.</li>
          <p><i>Some people don’t listen to metal because they say they “don’t like it.” But I believe it’s often because they haven’t yet learned how to listen to it. I always tell my friends: </i></p>
          <blockquote>you have to develop the ear. You don’t just hear metal. You become it.</blockquote>

          <p>And then there are those who listen to metal, but never go beyond the surface. They find a comfort zone — maybe a few favorite bands or one subgenre — and stay there. And while there’s nothing wrong with loving what speaks to you, I can’t help but feel they’re missing out on the vastness that metal offers. The depth. The diversity. The transformation. <b>Because metal isn't just a sound — it's a spectrum.</b> And staying in one corner of it is like staring at a single star in a night sky full of galaxies, just because the others are currently blinding. What they may not realize is that the blinding becomes beauty — once you’ve matured enough to see it. </p>
          <p className="evolution">Metal doesn’t just ask for your attention; it asks for your evolution.</p>
        </section>

        <section className="final">
          <h3 className="">You’re still here?</h3>
          <p>
            And still, I’ve only told part of the story. There are entire subgenres I haven’t even touched — waves upon waves of evolving sound, and new branches growing every year like veins through stone. That’s the wonder of metal: it doesn’t stand still. While other genres lean on their past, <b>metal is always in motion</b> — transforming, mutating, shedding its skin to become something new. Of all musical forms, it is the one that has aged with the most grace — not by staying the same, but by daring to change. It reinvents itself more fiercely than jazz, more freely than rock, more fearlessly than pop. It doesn’t just survive time — it devours it, and becomes it.
          </p>
          <blockquote className="final-quote">"There’s no destination. Only the next sound, the next click, the next layer."</blockquote>
        </section>

        <h2 className="Final-h2"> Are You Me(n)tal Enough?</h2>
      </main >
    </>
  );
}
export default MetalEssay;
