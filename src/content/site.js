/**
 * ============================================================================
 *  EVERY WORD ON THE SITE LIVES IN THIS FILE.
 * ============================================================================
 *
 *  Ramon — to change any text, edit it here. You do not need to touch anything
 *  in src/app or src/components. Keep the quote marks and the commas where they
 *  are and it will be fine.
 *
 *  Anything marked  TODO:  is a placeholder waiting on you. Search this file for
 *  "TODO" to find every one of them in a single pass.
 * ============================================================================
 */

export const site = {
  artist: 'Ramon Goose',
  band: 'Ramon Goose & The Compadres',
  // Shown in the browser tab and by Google. Kept deliberately keyword-bearing.
  tagline: 'Cuban Electric Guitar',
  description:
    'Ramon Goose is an English guitarist working in Cuban music. Cuban electric guitar, son cubano and blues, recorded at EGREM Studios in Santiago de Cuba.',

  // The one canonical address. Everything else redirects here — see README.md.
  url: 'https://ramongoose.co.uk',

  email: {
    // TODO: confirm which addresses you want public. A single contact address is
    // fine — just point all three at the same one.
    general: 'ramongoosemusic@gmail.com',
    booking: 'ramongoosemusic@gmail.com',
    press: 'ramongoosemusic@gmail.com',
  },

  social: [
    { label: 'The Guitar Show', href: 'https://youtube.com/@TheGuitarShow' },
    // TODO: your own artist channel handle — replace the URL below.
    { label: 'Ramon Goose on YouTube', href: 'https://youtube.com/@ramongoose' },
    // TODO: add or remove as you like. Delete a line to drop it from the site.
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Spotify', href: 'https://open.spotify.com/' },
    { label: 'Bandcamp', href: 'https://bandcamp.com/' },
  ],
};

/* -------------------------------------------------------------------------- */
/*  SEARCH ENGINE IDENTITY                                                    */
/* -------------------------------------------------------------------------- */

/**
 * This block feeds the Schema.org Person markup in the page source. It is how
 * you tell Google that the Ramon Goose on this site, the one on Wikipedia, and
 * the one on Spotify are all the same person rather than three different people.
 *
 * IMPORTANT: an empty or wrong link here is worse than no link at all, so any
 * entry left as an empty string is dropped automatically before it reaches the
 * page. Fill them in as you get them — you do not have to do them all at once.
 */
export const identity = {
  // Verified 2026-08-30 — both point at the right Ramon Goose, and the Wikidata
  // item already names ramongoose.co.uk as the official site.
  wikipedia: 'https://en.wikipedia.org/wiki/Ramon_Goose',
  wikidata: 'https://www.wikidata.org/wiki/Q3418522',

  jobTitle: 'Guitarist',
  birthPlace: 'Colchester, Essex, England',
  nationality: 'English',
  instruments: ['Electric guitar', 'Tres', "N'goni", 'Slide guitar'],
  genres: ['Cuban music', 'Son cubano', 'Blues', 'Latin rock'],

  // TODO: paste your real profile URLs in. Each one you add strengthens the
  // link between your name and your music in Google's index.
  profiles: [
    { label: 'Spotify', href: '' },
    { label: 'Apple Music', href: '' },
    { label: 'YouTube', href: 'https://youtube.com/@TheGuitarShow' },
    { label: 'Facebook', href: '' },
    { label: 'X', href: '' },
    { label: 'SoundCloud', href: '' },
    { label: 'Bandcamp', href: '' },
  ],
};

/** Every URL that identifies Ramon, with the blanks stripped out. */
export function sameAs() {
  return [identity.wikipedia, identity.wikidata, ...identity.profiles.map((p) => p.href)].filter(
    Boolean
  );
}

/* -------------------------------------------------------------------------- */
/*  LANDING PAGE                                                              */
/* -------------------------------------------------------------------------- */

export const home = {
  // The heading is split in two: the name reads first for search engines, the
  // album title dominates visually. Both sit inside the page's single <h1>.
  // Spelled with the acute, exactly as it is on the album sleeve.
  heroName: 'Ramón Goose & The Compadres',
  heroKicker: 'Santiago de Cuba · London',
  heroTitle: 'I Left My Blues In Cuba',

  // This is the first sentence of real text on the site. Google reads it, and
  // it states plainly who he is and what he does.
  heroSubtitle:
    'Ramon Goose is an English guitarist working in Cuban music — electric guitar and tres between son cubano and the blues.',
  heroCtaPrimary: { label: 'Hear the record', href: '/music' },
  heroCtaSecondary: { label: 'The Cuba sessions', href: '/cuba' },

  introHeading: 'Where the blues went',
  intro: [
    'Ramon Goose is an English guitarist, singer and producer, born in Colchester in 1975 and playing professionally since the 1990s. He has spent that career carrying the electric guitar out of the blues and into whatever the blues touched — hip-hop and Delta guitar with NuBlues, Mississippi by way of Mali with the West African Blues Project, and now the son and guajira of eastern Cuba.',
    'Since 2023 that work has been with The Compadres, a Cuban band. The new album was cut at EGREM in Santiago de Cuba, the studio at the centre of the island’s recorded history, and it sounds like it. A second record, with the Santiago trova guitarist Alejandro Almenares, is still being made.',
    'Cuban electric guitar is a small field with a long history and very few players coming to it from the blues. That is the ground this work stands on.',
  ],

  // The tiles under the intro. Reorder them by moving the blocks around.
  cards: [
    {
      title: 'The Music',
      body: 'The new album, the Almenares sessions and twenty years of back catalogue.',
      href: '/music',
    },
    {
      title: 'Working In Cuba',
      body: 'EGREM Santiago, the players, and how a blues record ended up a Cuban one.',
      href: '/cuba',
    },
    {
      title: 'The Gear',
      body: 'The Guyatone, the amps, and what actually made the sound on the record.',
      href: '/gear',
    },
    {
      title: 'Goose Trem',
      body: 'A tremolo of my own, built from the ground up. Coming soon.',
      href: '/goose-trem',
    },
    {
      title: 'Gallery',
      body: 'Photographs from Santiago, Havana and the road.',
      href: '/gallery',
    },
    {
      title: 'The Guitar Show',
      body: 'Guitar history, told properly. Fifty-seven thousand subscribers and counting.',
      href: '/video',
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  MUSIC                                                                     */
/* -------------------------------------------------------------------------- */

export const music = {
  heading: 'The Music',
  intro:
    'A new record made in Santiago de Cuba, a collaboration still being finished, and twenty years of releases behind both.',

  // ---- THE NEW ALBUM ------------------------------------------------------
  featured: {
    title: 'I Left My Blues In Cuba',
    artist: 'Ramon Goose & The Compadres',
    // TODO: confirm with Zozo before this goes live.
    label: 'Zozo Records, New York',
    releaseLine: 'TODO: release date to be confirmed with Zozo Records',
    status: 'Coming soon',
    cover: '/images/i-left-my-blues-in-cuba.jpg',
    recordedAt: 'EGREM Studios, Santiago de Cuba',
    blurb: [
      'Nine tracks cut in Santiago de Cuba with a Cuban band. Six songs carried in from the blues and three written on the island.',
      'It opens and closes with Peter Green — Black Magic Woman at the front, I Loved Another Woman at the back with Rick Vito, who played those songs in Fleetwood Mac, sitting in. In between it is son, guajira and Delta guitar in the same room, which is the whole point of the record.',
    ],
    // Track order taken from the final mixes. Composer credits are the writers,
    // not the artists Ramon learned them from.
    tracks: [
      { n: 1, title: 'Black Magic Woman', credit: 'Peter Green' },
      { n: 2, title: 'Porque', credit: 'Original · feat. Nancy Maura' },
      // CHECK: is this the Otis Rush song? Delete the credit if not.
      { n: 3, title: 'All Your Love', credit: 'Otis Rush' },
      { n: 4, title: "I'm A Real Man", credit: 'TODO: writer credit' },
      { n: 5, title: 'Alto Boniato', credit: 'Original' },
      { n: 6, title: 'Death Letter Blues', credit: 'Son House' },
      { n: 7, title: 'Havana Town', credit: 'Original' },
      { n: 8, title: 'Si Pudiera Expresarte', credit: 'Original · feat. Nancy Maura' },
      { n: 9, title: 'I Loved Another Woman', credit: 'Peter Green · feat. Rick Vito' },
    ],
    personnel: [
      { name: 'Ramon Goose', role: 'Electric guitar, vocals' },
      { name: 'Joe Goose', role: 'Bass' },
      { name: 'Kieffer Santander', role: 'Percussion' },
      { name: 'Rick Vito', role: 'Guitar on I Loved Another Woman' },
      { name: 'Nancy Maura', role: 'Vocals on Porque and Si Pudiera Expresarte' },
      // CHECK: is Kieffer the player with the Compay Segundo / Eliades Ochoa
      // credit? If so it belongs in the press copy — it is a real lineage claim
      // and worth stating plainly rather than leaving buried.
    ],
    // TODO: paste the streaming links in when the record is up. Any line left
    // as an empty string ('') is hidden automatically, so you can fill these in
    // one at a time as they go live.
    links: [
      { label: 'Spotify', href: '' },
      { label: 'Apple Music', href: '' },
      { label: 'Bandcamp', href: '' },
      { label: 'YouTube', href: '' },
    ],
  },

  // ---- IN PROGRESS --------------------------------------------------------
  upcoming: [
    {
      title: 'The Alejandro Almenares Sessions',
      // TODO: final title once you and Alejandro settle on one.
      status: 'In progress',
      blurb: [
        'A record made with Alejandro Almenares, the veteran guitarist from Santiago de Cuba and the last of the trova musicians of his generation still recording.',
        'Horns are still being tracked in Cuba. This one is not finished, and it is not being rushed.',
      ],
    },
  ],

  // ---- BACK CATALOGUE -----------------------------------------------------
  catalogueHeading: 'Back catalogue',
  catalogueNote:
    'A selection, newest first. TODO: check the years marked below and add anything missing.',
  catalogue: [
    {
      title: 'Long Road To Tiznit',
      year: '2017',
      label: 'TODO: label',
      role: 'Blues and West African crossover',
    },
    {
      title: 'Blues & Spirituals',
      year: '2014',
      label: 'Acoustic Music Records',
      role: 'Solo album',
    },
    {
      title: 'Uptown Blues',
      year: '2011',
      label: 'TODO: label',
      role: 'Solo album',
    },
    {
      title: 'Drew, Mississippi',
      year: 'TODO: year',
      label: 'Black and Tan Records',
      role: 'Boo Boo Davis — produced, co-written, guitar',
    },
    {
      title: 'Snow On The Tracks',
      year: 'TODO: year',
      label: 'Dixiefrog / 21st Century Blues',
      role: 'NuBlues',
    },
    {
      title: 'Dreams Of A Blues Man',
      year: '2004',
      label: 'Dixiefrog / 21st Century Blues',
      role: 'NuBlues',
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  CUBA                                                                      */
/* -------------------------------------------------------------------------- */

export const cuba = {
  heading: 'Working In Cuba',
  standfirst:
    'Santiago de Cuba is not Havana. It is hotter, older, closer to Haiti and Jamaica than to Florida, and it is where son came from. It is also where this record was made.',

  sections: [
    {
      title: 'EGREM, Santiago',
      body: [
        'EGREM is the state studio, and the Santiago room has recorded a large part of what the rest of the world thinks of as Cuban music. Analogue desk, high ceilings, everyone playing together in one space because that is how the room is built.',
        'TODO: write two or three sentences here about actually being in that room — what it sounded like, what the days were like, who was in and out. This is the part press will quote, so it is worth doing in your own words.',
      ],
    },
    {
      title: 'The Compadres',
      body: [
        // CHECK: the 2023 date and Joaquín Solórzano come from the public
        // record — correct them if they are wrong.
        'The Compadres came together in 2023 with the Cuban musician Joaquín Solórzano. The band plays son, guajira and bolero with an electric guitar in the middle of it, which is not the usual arrangement in either tradition.',
        'Joe Goose plays bass and Kieffer Santander plays percussion.',
        'TODO: anyone else in the line-up, and what they played on before. Cuban players carry deep credits and they are worth listing by name.',
      ],
    },
    {
      title: 'Alejandro Almenares',
      body: [
        'Alejandro Almenares is a guitarist from Santiago in the trova tradition, with a lineage that runs directly into the music the Buena Vista Social Club made famous. We are recording together.',
        'TODO: how you met him, and what the sessions have been like.',
      ],
    },
  ],

  // Short pull-out facts down the side.
  facts: [
    { label: 'Recorded at', value: 'EGREM Studios, Santiago de Cuba' },
    { label: 'Tracks', value: 'Nine — six covers, three originals' },
    { label: 'Guest', value: 'Rick Vito, formerly of Fleetwood Mac' },
    { label: 'Voice', value: 'Nancy Maura' },
  ],
};

/* -------------------------------------------------------------------------- */
/*  THE BAND — TWO LINE-UPS                                                   */
/* -------------------------------------------------------------------------- */

/**
 * There are two Compadres: the Santiago de Cuba line-up and the England
 * line-up. Same band, same book of tunes, different players either side of the
 * Atlantic. This page exists so nobody has to guess which one they are booking
 * or which one is on the record.
 *
 * To add a member: copy one of the blocks below and fill it in. "photo" is a
 * file name in public/images/band/ — leave it as an empty string ('') and a
 * plain initial is drawn instead, so a missing photo never breaks the page.
 */
export const band = {
  heading: 'The Compadres',
  standfirst:
    'Two line-ups, one band. One in Santiago de Cuba, one in England — so the music works whether the gig is in Havana or Hackney.',

  groups: [
    {
      id: 'cuba',
      name: 'The Compadres — Santiago de Cuba',
      blurb:
        'The Cuban line-up, and the band on the record. These are Santiago players working in the son and trova traditions the city invented.',
      // TODO: names, instruments and a line each. The rooftop photograph shows
      // five players — guitar, tres, congas, double bass and bongó — so there
      // are four to name alongside Ramon.
      members: [
        {
          name: 'Ramon Goose',
          role: 'Electric guitar, vocals',
          photo: '',
          bio: 'English guitarist, born in Colchester in 1975. Twenty-odd years of blues records behind him and now working almost entirely in Cuban music.',
        },
        { name: 'TODO: name', role: 'Tres / guitar', photo: '', bio: 'TODO' },
        { name: 'TODO: name', role: 'Congas', photo: '', bio: 'TODO' },
        { name: 'TODO: name', role: 'Double bass', photo: '', bio: 'TODO' },
        { name: 'TODO: name', role: 'Bongó', photo: '', bio: 'TODO' },
      ],
    },
    {
      id: 'england',
      name: 'The Compadres — England',
      blurb:
        'The touring line-up in the UK, for festivals, clubs and anything on this side of the water.',
      members: [
        {
          name: 'Ramon Goose',
          role: 'Electric guitar, vocals',
          photo: '',
          bio: 'As above — the constant in both bands.',
        },
        {
          name: 'Joe Goose',
          role: 'Bass',
          photo: '',
          bio: 'TODO: a couple of lines on Joe.',
        },
        {
          name: 'Kieffer Santander',
          role: 'Percussion',
          photo: '',
          // CHECK: is Kieffer the player with the Compay Segundo / Eliades
          // Ochoa credit? If so, say it here — it is a real lineage claim.
          bio: 'TODO: a couple of lines on Kieffer — congas, bongó, cajón and campana.',
        },
      ],
    },
  ],

  // Named guests who are not in either standing line-up.
  guestsHeading: 'Guests on the record',
  guests: [
    {
      name: 'Rick Vito',
      role: 'Guitar',
      bio: 'Played with Fleetwood Mac, and plays the second guitar on I Loved Another Woman — a song he knows from the inside.',
    },
    {
      name: 'Nancy Maura',
      role: 'Vocals',
      bio: 'Cuban singer. Two songs on the album, both in Spanish.',
    },
    {
      name: 'Alejandro Almenares',
      role: 'Guitar',
      bio: 'Trova guitarist from Santiago, and the other record — the one still being made.',
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  GEAR                                                                      */
/* -------------------------------------------------------------------------- */

export const gear = {
  heading: 'The Gear',
  intro:
    'What I actually play, and what actually went down on the record. No endorsements, no pretending — if it is on here it is because I use it.',

  groups: [
    {
      group: 'Guitars',
      items: [
        {
          name: 'Guyatone LG-180',
          detail: '1960s Japanese offset',
          body:
            'Bought out of Japan and heavier than it has any right to be. The pickups are thin and twangy in a way that suits the Cuban material — it does a few songs a night, for the sound and for the look of the thing. It is the guitar on the album cover.',
        },
        {
          name: 'TODO: your main guitar',
          detail: 'TODO: year and model',
          body: 'TODO: a couple of lines on why this is the workhorse.',
        },
        {
          name: 'TODO: acoustic / nylon',
          detail: 'TODO',
          body: 'TODO',
        },
      ],
    },
    {
      group: 'Amplifiers',
      items: [
        {
          name: 'Marshall JTM45',
          detail: 'Currently being built',
          body:
            'Being put together properly, which means hunting original 1960s Radiospares De Luxe output and mains transformers rather than settling for reproductions. TODO: update this once it is finished and gigged.',
        },
        {
          name: 'TODO: the amp you actually gig',
          detail: 'TODO',
          body: 'TODO',
        },
      ],
    },
    {
      group: 'Effects',
      items: [
        {
          name: 'Goose Trem',
          detail: 'My own — coming soon',
          body:
            'A tremolo built from the ground up, modelled on the one I could never get to behave the way I wanted. There is a page about it.',
          href: '/goose-trem',
        },
        {
          name: 'TODO: the rest of the board',
          detail: 'TODO',
          body: 'TODO: overdrive, reverb, whatever else is on there.',
        },
      ],
    },
    {
      group: 'Strings, picks and the rest',
      items: [
        {
          name: 'TODO: strings',
          detail: 'TODO: gauge',
          body: 'TODO',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  GOOSE TREM                                                                */
/* -------------------------------------------------------------------------- */

export const pedal = {
  // TODO: confirm the name you are going with, and whether this is the hardware
  // pedal, the plugin, or both. The page reads fine either way as written.
  name: 'Goose Trem',
  kicker: 'In development',
  heading: 'Goose Trem',
  standfirst:
    'A tremolo built the way I wanted one to sound, because nothing I could buy did it.',

  body: [
    'Every guitar player has one effect they are fussy about. Mine is tremolo — the sound running through half the records I love, and the reason half the Cuban material on the new album breathes the way it does.',
    'Goose Trem is modelled on the circuit I have used for years, with the parts of it I always wished were different put right.',
    'TODO: two or three sentences on what makes it yours — the sweep, the depth range, the way it behaves at slow speeds, whatever the actual reason is that you are building it.',
  ],

  features: [
    // TODO: replace these with the real specification.
    { title: 'TODO: control one', body: 'TODO: what it does.' },
    { title: 'TODO: control two', body: 'TODO: what it does.' },
    { title: 'TODO: control three', body: 'TODO: what it does.' },
  ],

  // TODO: swap for a real price and a real buy link when you are ready to sell.
  // Until then the page collects interest by email, which is the right move —
  // you want a list of people waiting before the first batch is finished.
  price: '',
  buyHref: '',
  notifyCopy:
    'Not finished yet. Send me an email and I will tell you when the first batch is ready.',
};

/* -------------------------------------------------------------------------- */
/*  SHOP                                                                      */
/* -------------------------------------------------------------------------- */

export const shop = {
  heading: 'Shop',
  intro: 'TODO: a line about shipping, or where you post from.',

  // TODO: real products, prices and links. Leave "href" empty and the item shows
  // as coming soon rather than as a dead button.
  items: [
    {
      name: 'I Left My Blues In Cuba',
      variant: 'CD',
      price: 'TODO',
      href: '',
      note: 'Signed on request.',
    },
    {
      name: 'I Left My Blues In Cuba',
      variant: 'Vinyl',
      price: 'TODO',
      href: '',
      note: 'TODO: confirm there is a vinyl pressing.',
    },
    {
      name: 'Compadres T-shirt',
      variant: 'TODO: sizes',
      price: 'TODO',
      href: '',
      note: 'TODO',
    },
    {
      name: 'Goose Trem',
      variant: 'Tremolo',
      price: '',
      href: '/goose-trem',
      note: 'In development — join the list.',
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  VIDEO                                                                     */
/* -------------------------------------------------------------------------- */

export const video = {
  heading: 'Video',
  intro:
    'Two channels. One is about the history of the instrument, the other is about my own playing.',

  channels: [
    {
      name: 'The Guitar Show',
      handle: '@TheGuitarShow',
      href: 'https://youtube.com/@TheGuitarShow',
      body:
        'Long-form documentaries on the guitars, amplifiers and effects of the players who defined the electric guitar — Clapton, Hendrix, Peter Green, Page, Gary Moore, Rory Gallagher and the rest. Narrated and made by me. Around 57,000 subscribers and 500 films.',
      cta: 'Subscribe',
    },
    {
      name: 'Ramon Goose',
      // TODO: correct handle and URL for your artist channel.
      handle: 'TODO: @handle',
      href: 'https://youtube.com/@ramongoose',
      body: 'Sessions, live footage and the Cuban material.',
      cta: 'Watch',
    },
  ],

  // TODO: paste YouTube video IDs here to embed them. The ID is the part of the
  // URL after "v=" — for youtube.com/watch?v=dQw4w9WgXcQ the ID is dQw4w9WgXcQ.
  // An empty list simply hides this section.
  featured: [],
};

/* -------------------------------------------------------------------------- */
/*  BIOGRAPHY                                                                 */
/* -------------------------------------------------------------------------- */

export const bio = {
  heading: 'Biography',

  // TODO: this is the placeholder. Replace it with the biography we write for
  // Zozo Records — the same text should serve the label, the press and this page.
  short:
    'Ramon Goose is an English guitarist working in Cuban music. Born in Colchester in 1975, he has spent thirty years taking the electric guitar out of the blues — through West Africa with the West African Blues Project, and now through Santiago de Cuba with The Compadres, whose album I Left My Blues In Cuba was recorded at EGREM Studios.',

  long: [
    'TODO: the full biography goes here, as a list of paragraphs. Each paragraph sits inside its own quote marks, separated by a comma — the same as this one. This is the text we are writing for Zozo Records, and the same words should serve the label, the press and this page.',
    'The arc worth telling: NuBlues, then the West African Blues Project, then The Compadres. Thirty years of taking the blues somewhere else and coming back with a record.',
  ],

  // Facts a journalist will want without having to ask.
  press: [
    { label: 'Based', value: 'TODO: London / UK' },
    { label: 'Current release', value: 'I Left My Blues In Cuba' },
    { label: 'Label', value: 'Zozo Records, New York' },
    { label: 'Live formats', value: 'TODO: e.g. trio, quintet, solo' },
  ],

  // TODO: put a downloadable press photo and one-sheet in the public/press
  // folder and point these at them. Leave empty to hide the buttons.
  downloads: [
    { label: 'Press photo (high resolution)', href: '' },
    { label: 'One-sheet (PDF)', href: '' },
  ],
};

/* -------------------------------------------------------------------------- */
/*  GALLERY                                                                   */
/* -------------------------------------------------------------------------- */

export const gallery = {
  heading: 'Gallery',
  intro: 'Guitars, amplifiers, the workshop and the road.',

  /**
   * To add a photo: drop the file into  public/images/gallery/  and add a line
   * below with its file name and a caption. The caption shows under the picture
   * and is also what Google reads, so describe what is actually in the shot.
   *
   * "tag" decides where it appears:
   *   'gear'     — also shown on the Gear page
   *   'portrait' — people
   *   'cuba'     — the Cuba page (none yet — these are coming in September)
   *
   * These 21 came off the old site. Captions are my best reading of each photo
   * — correct any that are wrong, they are the bit search engines actually use.
   */
  photos: [
    // Cuba and live — these lead, because they are what the site is about.
    { src: 'c04.jpg', tag: 'cuba', caption: 'The album cover shot, Santiago de Cuba' },
    { src: 'c01.jpg', tag: 'cuba', caption: 'In the control room at Estudios Siboney, Santiago de Cuba' },
    { src: 'c02.jpg', tag: 'cuba', caption: 'Between takes' },
    { src: 'c03.jpg', tag: 'cuba', caption: 'TODO: who is in this photograph? — the Santiago sessions' },
    { src: 'c06.jpg', tag: 'live', caption: 'Live with The Compadres' },
    { src: 'c05.jpg', tag: 'gear', caption: 'Picks' },

    // Guitars, amplifiers and the workshop.
    { src: '01.jpg', tag: 'gear', caption: 'Guitars at home' },
    { src: '02.jpg', tag: 'gear', caption: 'Amplifier chassis with the valves in' },
    { src: '03.jpg', tag: 'gear', caption: 'Flame-top Les Paul' },
    { src: '04.jpg', tag: 'gear', caption: 'A pair of semi-hollows' },
    { src: '05.jpg', tag: 'gear', caption: 'Guitars under the lights' },
    { src: '06.jpg', tag: 'gear', caption: 'Vintage amplifiers, stacked' },
    { src: '07.jpg', tag: 'portrait', caption: 'TODO: caption — in the workshop with a Les Paul' },
    { src: '08.jpg', tag: 'gear', caption: 'Red offset, neck and pickups' },
    { src: '09.jpg', tag: 'gear', caption: 'Pedalboard' },
    { src: '10.jpg', tag: 'gear', caption: 'Mystic Blues head' },
    { src: '11.jpg', tag: 'gear', caption: 'Celestion speaker and amplifier chassis' },
    { src: '12.jpg', tag: 'gear', caption: 'Amp head on the bench' },
    { src: '13.jpg', tag: 'gear', caption: 'Guitar and amplifiers in the studio' },
    { src: '14.jpg', tag: 'gear', caption: 'Cogmeister, controls' },
    { src: '15.jpg', tag: 'gear', caption: 'Two Les Pauls' },
    { src: '16.jpg', tag: 'gear', caption: 'Blonde archtop' },
    { src: '17.jpg', tag: 'gear', caption: 'The Guyatone LG-180' },
    { src: '18.jpg', tag: 'sleeve', caption: 'Long Road To Tiznit, 2017' },
    { src: '19.jpg', tag: 'portrait', caption: 'TODO: who is this? — at the drums' },
    { src: '20.jpg', tag: 'portrait', caption: 'TODO: who is this? — with the Ludwig kit' },
    { src: '21.jpg', tag: 'portrait', caption: 'TODO: caption — live, UK Blues' },
  ],
};

/* -------------------------------------------------------------------------- */
/*  CONTACT                                                                   */
/* -------------------------------------------------------------------------- */

export const contact = {
  heading: 'Contact',
  intro: 'Direct, and I answer my own email.',

  routes: [
    {
      title: 'Live bookings',
      body: 'Festivals, clubs and private events, in trio or full-band format.',
      email: 'ramongoosemusic@gmail.com',
    },
    {
      title: 'Press and radio',
      body: 'Interviews, review copies and high-resolution photographs.',
      email: 'ramongoosemusic@gmail.com',
    },
    {
      title: 'Everything else',
      body: 'Sessions, production, teaching, or the pedal.',
      email: 'ramongoosemusic@gmail.com',
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  NAVIGATION                                                                */
/* -------------------------------------------------------------------------- */

// Reorder or remove lines to change the menu. Removing a line here does not
// delete the page, it just takes it out of the menu.
export const nav = [
  { label: 'Music', href: '/music' },
  { label: 'The Band', href: '/band' },
  { label: 'Cuba', href: '/cuba' },
  { label: 'Gear', href: '/gear' },
  { label: 'Goose Trem', href: '/goose-trem' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Video', href: '/video' },
  { label: 'Shop', href: '/shop' },
  { label: 'Biography', href: '/bio' },
  { label: 'Contact', href: '/contact' },
];
