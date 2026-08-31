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
    { label: 'Ramon Goose on YouTube', href: 'https://www.youtube.com/@RamonGoose' },
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
    'Ramon Goose is an English guitarist working in Cuban music. He took the blues to Santiago de Cuba, found The Compadres, and came back with a record.',
  heroCtaPrimary: { label: 'Hear the record', href: '/music' },
  heroCtaSecondary: { label: 'The Cuba sessions', href: '/cuba' },

  // The band blurb on the front page. TODO: Ramon to correct or replace.
  bandBlurbHeading: 'The Compadres',
  bandBlurb: [
    'The Compadres are two bands with one name, either side of the Atlantic, playing son, guajira and bolero with an electric blues guitar where the tres would normally sit.',
    'In England it is a trio. Kieffer Santander plays percussion — Peruvian, based here, one of the leading players of Afro-Peruvian and Criollo rhythm in Europe, and the reason the band moves the way it does: cajón, congas, bongó and the quijada, a donkey’s jawbone played by rattling the teeth. Joe Goose plays bass, and is my identical twin brother, which is a shortcut through about thirty years of rehearsal.',
    'In Santiago de Cuba it is a five-piece, and that is the band on the record: Joaquín Solórzano on congas, who the band began with in 2023, Rudy Ramon on tres, Calderín on double bass and Ernesto on bongó. We cut the album at EGREM, the state studio that put most of what the world calls Cuban music onto tape.',
    'Neither half is a tribute act. The blues went to Cuba, found the music already there, and came back sounding like this.',
  ],

  // The two line-ups, side by side on the front page. Both files already live
  // in public/images/band/ and are used on the band page too.
  bandPhotos: [
    {
      src: 'compadres-england-trio.jpg',
      caption: 'The Compadres in England',
      detail: 'Kieffer Santander, Ramon Goose and Joe “Ricardo” Goose. International Jazz Day, London.',
      width: 1800,
      height: 1355,
    },
    {
      src: 'compadres-santiago.jpg',
      caption: 'The Compadres in Cuba',
      detail: 'On a rooftop above Santiago de Cuba',
      width: 1800,
      height: 1013,
    },
  ],

  // The tiles under the band blurb. Reorder them by moving the blocks around.
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
      title: 'Texas Flood',
      body: 'A pedal of my own, built from the ground up. Coming soon.',
      href: '/goose-pedal',
    },
    {
      title: 'Live',
      body: 'Where the band is playing, and how to book it.',
      href: '/tour',
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
    // TODO: confirm with ZOHO before this goes live.
    label: 'ZOHO Records, New York',
    // TODO: the exact date, once ZOHO confirm it. The year is settled.
    releaseLine: 'Released 2026 on ZOHO Records — exact date to be announced.',
    status: 'Out in 2026',
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
      { n: 4, title: "I'm A Real Man", credit: 'John Hiatt' },
      { n: 5, title: 'Alto Boniato', credit: 'Original' },
      { n: 6, title: 'Death Letter Blues', credit: 'Son House' },
      { n: 7, title: 'Havana Town', credit: 'Original' },
      { n: 8, title: 'Si Pudiera Expresarte', credit: 'Original · feat. Nancy Maura' },
      { n: 9, title: 'I Loved Another Woman', credit: 'Peter Green · feat. Rick Vito' },
    ],
    personnel: [
      { name: 'Ramon Goose', role: 'Electric guitar, tres, vocals' },
      { name: 'Joaquín Solórzano', role: 'Congas' },
      { name: 'Rudy Ramon Daquín', role: 'Tres' },
      { name: 'Calderín', role: 'Double bass' },
      { name: 'Ernesto', role: 'Bongó' },
      { name: 'Mustafa', role: 'Piano' },
      { name: 'Nancy Maura', role: 'Vocals on Porque and Si Pudiera Expresarte (1935–2025)' },
      { name: 'Alejandro Almenares', role: 'Guitar and vocals' },
      { name: 'Damian Busqueta Mineto', role: 'Trombone' },
      { name: 'Benilde Aysmel Guzmán Mariño', role: 'Trumpet' },
      { name: 'Rick Vito', role: 'Guitar on I Loved Another Woman' },
    ],
    // Shown in place of the streaming buttons until the links exist.
    linksPending:
      'Not streaming yet. The album goes up when ZOHO Records release it.',

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
    { title: 'Long Road To Tiznit', year: '2017', label: 'World Music Network', role: 'Blues and West African crossover' },
    { title: 'The West African Blues Project', year: '2015', label: 'ARC Music', role: 'With Modou Touré' },
    { title: 'Blues & Spirituals', year: '2014', label: 'Acoustic Music Records', role: 'Solo album' },
    { title: 'Uptown Blues', year: '2011', label: 'Blues Boulevard', role: 'Solo album' },
    { title: 'Mansana Blues', year: '2010', label: 'Dixiefrog', role: 'With Diabel Cissokho, kora and slide guitar' },
    { title: 'Snow On The Tracks', year: '2008', label: 'Dixiefrog / 21st Century Blues', role: 'NuBlues' },
    { title: 'Drew, Mississippi', year: '2006', label: 'Black and Tan Records', role: 'Boo Boo Davis — produced, co-written, guitar' },
    { title: 'Dreams Of A Blues Man', year: '2004', label: 'Dixiefrog / 21st Century Blues', role: 'NuBlues' },
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
      image: '/images/gallery/a09.jpg',
      imageCaption: 'At the desk, EGREM, Santiago de Cuba',
      body: [
        'EGREM is the state studio, and the Santiago room has recorded a large part of what the rest of the world thinks of as Cuban music. Analogue desk, high ceilings, everyone playing together in one space because that is how the room is built.',
        'It was very hot, and there were people coming in and out all day. It was one of the best experiences I have had: a working studio, full of noise, with that much history in it. Compay Segundo recorded there. Eliades Ochoa recorded there. So did everyone before them.',
      ],
    },
    {
      title: 'The Compadres',
      image: '/images/gallery/g01.jpg',
      imageCaption: 'The Compadres in Santiago',
      body: [
        'The Compadres came together in 2023 with the Cuban musician Joaquín Solórzano. The band plays son, guajira and bolero with an electric guitar in the middle of it, which is not the usual arrangement in either tradition.',
        'Every one of the Cuban players has a long career behind him in the son of Santiago, and every one of them has played with the best there was. They are among the last living musicians of that tradition, and they are not a revival of it — they are what is left of the thing itself.',
        'There are two line-ups now, one here and one in Santiago, and they are set out properly on the band page.',
      ],
    },
    {
      title: 'Alejandro Almenares',
      image: '/images/gallery/a15.jpg',
      imageCaption: 'Playing with Alejandro Almenares',
      body: [
        'Alejandro Almenares is one of the last great performers of son and trova, with a long catalogue of his own compositions behind him, and a lineage that runs directly into the music the Buena Vista Social Club made famous.',
        'When I decided I wanted to play Cuban guitar properly, I went to his house and had lessons from him. Everything I play on the instrument now is informed by those lessons. We are recording together.',
      ],
      // The lesson at his house, on the video page.
      link: { label: 'Watch us playing together', href: '/video' },
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
/*  TOUR DATES                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Live dates.
 *
 * Each date needs, at minimum, a `date` and a `venue`. Write the date as
 * YYYY-MM-DD — that is what search engines read, and the page turns it into
 * something human ("Fri 12 Jun 2026") on its own.
 *
 *   date     '2026-06-12'
 *   venue    'The 100 Club'
 *   city     'London'
 *   country  'United Kingdom'
 *   lineup   'Trio' or 'Quintet' — which Compadres are playing
 *   tickets  a ticket URL, or '' for none yet
 *   note     anything else worth saying, or leave it out
 *
 * Move a date into `past` once it has happened. An empty `upcoming` list makes
 * the page say there is nothing booked yet and point people at your email,
 * which is better than showing an empty space.
 */
export const tour = {
  heading: 'Live',
  intro:
    'Two line-ups, so the band works at either size. A trio here, a quintet in Cuba.',

  upcoming: [
    {
      // TODO: confirm the year. The album is a 2026 release, so a January show
      // is presumably January 2027 — I have left the date blank rather than
      // guess, which also keeps it out of the event markup until it is real.
      date: '',
      venue: 'Album release show',
      city: 'Santiago de Cuba',
      country: 'Cuba',
      lineup: 'Quintet',
      tickets: '',
      note: 'January. Venue and date to be announced.',
    },
    {
      date: '',
      venue: 'Album release show',
      city: 'London',
      country: 'United Kingdom',
      lineup: 'Trio',
      tickets: '',
      note: 'Venue and date to be announced.',
    },
  ],

  pastHeading: 'Previously',
  past: [
    {
      // Confirmed from the invoice, and it sits inside the festival's
      // 7-9 August run at Radford Mill Farm.
      date: '2026-08-08',
      venue: 'Tangled Blues Festival',
      city: 'Radford Mill Farm, near Bath',
      country: 'United Kingdom',
      lineup: 'Trio',
      note: 'Headline slot.',
    },
    {
      date: '2026-06-13',
      venue: 'Crouch End Festival',
      city: 'Hornsey Town Hall, London',
      country: 'United Kingdom',
      lineup: 'Trio',
      note: 'Headline slot on the Big Stage, for Haringey Hot Nights.',
    },
    {
      // Confirmed on the Cuban Embassy's own site. Billed as the Ramon Goose
      // Quartet, and held at Bolívar Hall — the Embassy hosted it rather than
      // staging it at the Embassy itself.
      date: '2025-04-30',
      venue: 'Bolívar Hall',
      city: 'London',
      country: 'United Kingdom',
      lineup: 'Quartet',
      note: 'International Jazz Day, hosted by the Embassy of Cuba, honouring Harry Belafonte.',
    },
  ],

  bookingHeading: 'Booking',
  bookingBody:
    'Festivals, clubs, arts centres and private events. Trio in England, quintet in Santiago de Cuba. I answer my own email and I can send a tech spec, stage plan and press photographs the same day.',
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
    'Two line-ups, one band. One in England, one in Santiago de Cuba — so the music works whether the gig is in Hackney or Havana.',

  groups: [
    {
      id: 'england',
      name: 'The Compadres — England',
      photo: 'compadres-england-trio.jpg',
      photoCaption: 'The Compadres at the Cuban Embassy in London. Left to right: Kieffer Santander, Ramon Goose and Joe “Ricardo” Goose.',
      blurb:
        'The line-up that plays here: festivals, clubs and anything on this side of the water. Cuban repertoire with a Peruvian percussionist in it, which sends the rhythm somewhere neither tradition would have gone on its own.',
      members: [
        {
          name: 'Ramon Goose',
          role: 'Electric guitar, vocals',
          photo: 'ramon-goose.jpg',
          bio: 'English guitarist, born in Colchester in 1975. Twenty-odd years of blues records behind him and now working almost entirely in Cuban music.',
        },
        {
          name: 'Kieffer Santander',
          role: 'Musical director, percussion, vocals',
          photo: 'kieffer-santander.jpg',
          bio: [
            'Musical director of the London Compadres. Percussionist, composer, teacher and bandleader, born in Peru and based in the United Kingdom, and one of the leading players of Afro-Peruvian and Criollo percussion working in Europe, a tradition he has spent his career keeping alive a long way from home.',
            'That is what makes this band sound the way it does. The cajón and the quijada — the jawbone of a donkey, played by rattling the teeth in the socket — are Afro-Peruvian instruments, not Cuban ones. Putting them underneath son and guajira sends the rhythm somewhere neither tradition would have reached by itself.',
            'Raised in Lima, where he trained at the Escuela de Bellas Artes before taking a degree in business administration at the Universidad Ricardo Palma. After moving to the UK he carried on at Queen’s Way College and sharpened his reading and Latin percussion at the Studio Tom Allien Centre in Stratford.',
          ],
        },
        {
          name: 'Joe \u201CRicardo\u201D Goose',
          role: 'Bass',
          photo: 'joe-goose.jpg',
          bio: [
            'My identical twin brother, on bass. Thirty years of listening to the same records and playing in the same rooms, which turns out to be a shortcut no amount of rehearsal replaces: the bass and the guitar move together without either of us having to look up.',
            'He has played with Pee Wee Ellis and toured with Eric Bibb, and spent seven years on the Paris jazz scene. That is where he learned the tumbao, the Cuban bass figure the whole band sits on. Most bass players coming to this music have to be taught it. He already had it.',
          ],
        },
      ],
    },
    {
      id: 'cuba',
      name: 'The Compadres — Santiago de Cuba',
      photo: 'compadres-santiago.jpg',
      photoCaption: 'The Santiago line-up, on a rooftop above the city',
      blurb:
        'The Cuban line-up, and the band on the record. These are Santiago players working in the son and trova traditions the city invented.',
      // TODO: names, instruments and a line each. The rooftop photograph shows
      // five players — guitar, tres, congas, double bass and bongó — so there
      // are four to name alongside Ramon.
      members: [
        {
          name: 'Ramon Goose',
          role: 'Electric guitar, vocals',
          photo: 'ramon-goose.jpg',
          bio: 'The constant in both bands.',
        },
        {
          name: 'Joaquín Solórzano',
          role: 'Congas',
          photo: 'joaquin-solorzano.jpg',
          bio: 'The band started with him, in Santiago in 2023. He played in Compay Segundo’s band for over twenty years, which is about as direct a line back to the music the Buena Vista Social Club made famous as anyone still playing can claim.',
        },
        {
          name: 'Calderín',
          // TODO: his full name, for the credits and the press.
          role: 'Double bass',
          photo: 'calderin.jpg',
          bio: '',
        },
        {
          name: 'Ernesto',
          // TODO: his surname, for the credits and the press.
          role: 'Bongó',
          photo: 'ernesto.jpg',
          bio: '',
        },
        {
          name: 'Rudy Ramon Daquín',
          role: 'Tres',
          photo: 'rudy-ramon.jpg',
          bio: 'Santiago tresero, and a member of Los Jubilados del Caribe, the veteran group from the city whose reading of Siboney features the multi-instrumentalist and whistler known as El Silbador.',
        },
        {
          name: 'Mustafa',
          // TODO: his surname, for the credits and the press.
          role: 'Piano',
          photo: 'mustafa.jpg',
          bio: '',
        },
      ],
    },
  ],

  // Named guests who are not in either standing line-up.
  guestsKicker: 'Collaborators and guests on the album',
  guestsHeading: 'Guests on the record',
  guests: [
    {
      name: 'Rick Vito',
      role: 'Guitarist, formerly of Fleetwood Mac',
      photo: '/images/band/rick-vito.jpg',
      bio: 'Played with Fleetwood Mac, and plays the second guitar on I Loved Another Woman — a song he knows from the inside.',
    },
    {
      name: 'Nancy Maura',
      role: 'Bolerista of Santiago de Cuba',
      photo: '/images/gallery/a24.jpg',
      // She died on 7 April 2025, aged 90 (born Justina María Balbuena
      // Céspedes, 1 February 1935). Confirmed by UNEAC and the Cuban press.
      bio: 'One of the great bolero singers of Santiago de Cuba, and one of the last defenders of the form in the city. Born Justina María Balbuena Céspedes in 1935, she sang from the age of nine and never left Santiago, because she was a santiaguera and that was the end of it. She sings on Porque and Si Pudiera Expresarte. She died in April 2025, aged ninety, which makes these among the last things she recorded.',
    },
    {
      name: 'Damian Busqueta Mineto',
      role: 'Trombone',
      bio: 'A twice Grammy-winning producer, and the trombone on the record. The horns were tracked in Santiago after the rhythm section, which is why the album took as long as it did to finish.',
    },
    {
      name: 'Benilde Aysmel Guzmán Mariño',
      role: 'Trumpet',
      bio: 'The trumpet on the record, cut in Santiago alongside the trombone. Horns are what separate a son band from a son septet, and they are the last thing to go on.',
    },
    {
      name: 'Alejandro Almenares',
      role: 'Trovador of Santiago de Cuba',
      photo: '/images/gallery/a15.jpg',
      bio: 'Born in Santiago de Cuba in 1937 and, by most accounts, the last troubadour of the golden age of trova still playing. His father helped found the Casa de la Trova, where Alejandro still plays alongside Eliades Ochoa. He has been through Cuarteto Patria, Septeto Típico Oriental and Cuarteto Oriente, has written several hundred songs, and did not make a solo record under his own name until he was seventy-six. We are making one together.',
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  GEAR                                                                      */
/* -------------------------------------------------------------------------- */

export const gear = {
  photosKicker: 'The workshop',
  photosHeading: 'In pictures',
  heading: 'The Gear',
  intro:
    'What I actually play, and what actually went down on the record. No endorsements, no pretending — if it is on here it is because I use it.',

  groups: [
    {
      group: 'Guitars',
      items: [
        {
          name: 'Guyatone LG-180T',
          detail: 'The main guitar',
          body:
            'The one that does most of the work. A 1960s Japanese offset with thin, wiry pickups that sit in a different place in a mix to anything American, which is exactly why the Cuban material works through it.',
          image: '/images/gear/guyatone-180t.jpg',
        },
        {
          name: 'Guyatone LG-200T',
          detail: 'The album cover guitar',
          body:
            'Bought out of Japan and heavier than it has any right to be. The pickups are twangy in a way that suits the Cuban material, so it does a few songs a night, for the sound and for the look of the thing. This is the guitar on the album cover.',
          image: '/images/gallery/17.jpg',
        },
        {
          name: 'Siewa Powersonic',
          detail: 'The Ali Farka Touré guitar',
          body:
            'The model Ali Farka Touré played. I spent years on West African music before Cuba, and this is the guitar at the centre of it — a cheap, oddly-made thing that a great player turned into a sound nobody has managed to copy since. It is on the wall for good reason.',
          image: '/images/gallery/08.jpg',
        },
        {
          name: 'Fernandes P-Project AI-N',
          detail: 'Nylon-string electric',
          body:
            'A Japanese custom-shop nylon-string electric, built as Dominic Miller’s signature model and the guitar he became known for through his years with Sting in the nineties, including Ten Summoner’s Tales. I use it a lot with The Compadres on the folkloric son material, where nylon does something steel cannot.',
          image: '/images/gear/p-project.jpg',
        },
        {
          name: 'ESP Navigator',
          detail: 'The Gibson-style guitars',
          body:
            'Navigator is ESP’s Japanese line, and they build Gibson shapes better than most: an Explorer, a Firebird, an SG, a Les Paul and a 335-style semi. For a Compadres gig I take one of the Guyatones and one of these, which covers everything between a thin twangy pickup and a fat humbucker without carrying half the house.',
        },
        {
          name: 'Daniels Guitars Les Paul',
          detail: 'Built by Darren Horton',
          body:
            'A Les Paul replica built by Darren Horton at Daniels Guitars, and as good as a real ’59 — I have played enough of both to say that and mean it. One of the guitars I lean on most with The Compadres.',
        },
        {
          name: 'Tres',
          detail: 'Acoustic and electric',
          body:
            'I play both the acoustic tres and the electric. The electric one was custom made for me by Chapter Guitars. The tres is the instrument at the centre of son, and the reason the guitar has to sit where it sits in this band.',
          image: '/images/gear/tres.jpg',
        },
      ],
    },
    {
      group: 'Amplifiers',
      items: [
        {
          name: 'The rig',
          detail: 'Two amps, wet and dry',
          body:
            'Two amplifiers running at once, one clean and dry and one carrying the effects, split with the WAU Goosemaster. It is more to carry, but two amps do something one cannot: the sound widens and starts to move on its own, which is exactly what the Cuban material wants under it.',
        },
        {
          name: 'Bell & Howell Filmosound',
          detail: 'Modified by Bill Krinard of Two-Rock',
          body:
            'A 1950s cinema projector amplifier, converted for guitar by Bill Krinard — the man behind Two-Rock, and the person most responsible for these projector amps becoming a thing players chase at all. They were built to fill a school hall with a soundtrack, not to be played, and they have a midrange no guitar amp of the period was designed to make. It is the reason the electric guitar sits where it does against the tres.',
        },
        {
          name: 'Marshall JTM45 replica',
          detail: 'Original Radiospares transformers, gigged for a year',
          body:
            'A working replica, and it has been out on gigs for the past year rather than sitting in a corner as a project. Built the way it should be, which meant hunting original 1960s Radiospares De Luxe output and mains transformers rather than settling for reproductions. That pair of transformers is most of why a JTM45 sounds like a JTM45, and it is the part everybody economises on.',
        },
        {
          name: 'A second JTM45',
          detail: 'In build',
          body:
            'Another one going together now, again on original Radiospares transformers. Finding a matched pair of originals is the whole job; the rest of a JTM45 is a weekend.',
        },
        {
          name: 'Lazy J cabinets',
          detail: 'Two 1x12s, Celestion loaded',
          body:
            'A pair of Lazy J one-by-twelves with Celestion twelves in them. Two small cabinets rather than one big one, which is what makes the wet and dry sides sit either side of you instead of on top of each other.',
        },
        {
          name: 'WAU Goosemaster',
          detail: 'Amp splitter',
          body:
            'Not an amplifier but a splitter, built by WAU as a clone of the Green Man, the box Ry Cooder used to drive more than one amp at once. It is what feeds the two amps. Cooder and Manuel Galbán are a large part of why an electric guitar in Cuban music is even an idea, so using his splitter to do it is not an accident.',
          href: '',
        },
      ],
    },
    {
      group: 'Effects',
      items: [
        {
          name: 'Texas Flood',
          detail: 'My own — coming soon',
          body:
            'A tremolo built from the ground up, modelled on the one I could never get to behave the way I wanted. There is a page about it.',
          href: '/goose-pedal',
        },
        {
          name: 'The GigRig',
          detail: 'Pedalboard and switching',
          body:
            'The board is a GigRig system. With two amps running wet and dry you need something that can send the right thing to the right side without a tap-dance between songs, and this does that.',
        },
      ],
    },
    {
      group: 'Strings, picks and the rest',
      items: [
        {
          name: 'Strings',
          detail: 'Elevens, 11–49',
          body:
            'Elevens on the electrics. Heavier than most people use, and the reason the Cuban material holds its note the way it does: a light string goes sharp the moment you lean on it, and none of this music forgives that.',
        },
        {
          name: 'Picks',
          detail: 'Jazz III, the small ones',
          body:
            'The small Jazz III. Very little of it sticks out past your fingers, which is what you want when the right hand is doing the work of a tres.',
        },
        {
          name: 'Slides',
          detail: 'Diamond Bottlenecks',
          body:
            'Diamond Bottlenecks, made in England. Glass, and the weight is right — the years of slide playing before Cuba have not gone anywhere.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  GOOSE TREM                                                                */
/* -------------------------------------------------------------------------- */

export const pedal = {
  name: 'Texas Flood',
  kicker: 'In development',
  heading: 'Texas Flood',
  standfirst: 'A pedal of my own, built because nothing I could buy did what I wanted.',

  body: [
    'A boost, built to get more out of a Strat. Single coils always want a bit of help before they hit the front of an amp, and most pedals sold to do that job change the sound while they are at it. This one gets out of the way.',
    'I run it as a set-and-forget, on all the time. It works with hotter guitars too, but the Strat is what it was built around.',
    'Three controls, no menus, no switching: gain, tone, volume. A bespoke build, made in small numbers.',
  ],

  features: [
    {
      title: 'Gain',
      body: 'How hard it pushes the front of the amp. Most of the useful range sits low.',
    },
    {
      title: 'Tone',
      body: 'Takes the edge off single coils, or leaves it there.',
    },
    {
      title: 'Volume',
      body: 'Output level, so you can set it once and leave it on.',
    },
  ],

  // TODO: the price, if you want it shown here.
  // Enquiries come straight to Ramon rather than going out to the builder.
  price: '',
  buyHref: '',
  notifyCopy:
    'Built in limited numbers. Email me to order one or to ask when the next batch is ready.',
};

/* -------------------------------------------------------------------------- */
/*  SHOP                                                                      */
/* -------------------------------------------------------------------------- */

export const shop = {
  heading: 'Shop',
  intro: 'Records, a shirt, and the pedal. Everything posts from the UK.',

  // TODO: real products, prices and links. Leave "href" empty and the item shows
  // as coming soon rather than as a dead button.
  items: [
    {
      name: 'I Left My Blues In Cuba',
      variant: 'CD',
      price: '£12',
      href: '',
      note: 'Signed on request.',
    },
    {
      name: 'I Left My Blues In Cuba',
      variant: 'Vinyl',
      price: '£28',
      href: '',
      note: 'In development. A pressing is coming.',
    },
    {
      name: 'The Compadres T-shirt',
      variant: 'Black, S to XXL',
      price: '£25',
      href: '',
      image: 'tshirt-compadres-black.jpg',
      note: 'Black cotton, white print, congas in place of the guitar.',
    },
    {
      name: 'The Compadres T-shirt',
      variant: 'Natural, S to XXL',
      // £25 sits above the £15 mark where a shirt starts reading as cheap, and
      // leaves roughly a 60% margin on a decent blank plus printing. Change it
      // here if you want to run £22 at gigs and £25 online.
      price: '£25',
      href: '',
      image: 'tshirt-compadres.jpg',
      note: 'Natural cotton, printed with the Guyatone and the palms.',
    },
    {
      name: 'Texas Flood',
      variant: 'Pedal',
      price: '',
      href: '/goose-pedal',
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
    'The band, the back catalogue, and the guitar history channel. All of it lives on YouTube.',

  channels: [
    {
      name: 'Ramon Goose',
      handle: '@RamonGoose',
      href: 'https://www.youtube.com/@RamonGoose',
      body: 'My own channel. The Compadres, the Cuban material, and everything before it.',
      cta: 'Subscribe',
    },
    {
      name: 'The Guitar Show',
      handle: '@TheGuitarShow',
      href: 'https://youtube.com/@TheGuitarShow',
      body:
        'Long-form documentaries on the guitars, amplifiers and effects of the players who defined the electric guitar: Clapton, Hendrix, Peter Green, Page, Gary Moore, Rory Gallagher and the rest. Narrated and made by me. Around 57,000 subscribers and 500 films.',
      cta: 'Subscribe',
    },
  ],

  /**
   * To add a video: find it on YouTube, copy the part of the address after
   * "v=", and add a line below. For youtube.com/watch?v=l4nzFHgAxPw the id is
   * l4nzFHgAxPw. Every id here was checked against YouTube on 2026-08-30.
   */
  groups: [
    {
      title: 'The Compadres',
      kicker: 'The band',
      items: [
        { id: 'tT7OeHMAESg', title: 'Alto Boniato' },
        { id: 'QXDiARNrddM', title: 'Los Rumberos, live in London' },
        { id: 'uVi783Bd7CQ', title: 'Crouch End Festival: Ali Farka Touré meets Buena Vista' },
        { id: 'PE7XhnOdAb8', title: 'La Movedora, cumbia guitar' },
      ],
    },
    {
      title: 'In Cuba',
      kicker: 'Santiago',
      items: [
        { id: 'fPHPfym4jB0', title: "Peter Green's Black Magic Woman, recorded in Cuba" },
        { id: 'qML77DFw6is', title: 'Performing Black Magic Woman in Cuba' },
        { id: 'CygeLUElt1Y', title: 'Rick Vito and Alejandro Almenares: Échale Salsita' },
        { id: 'VlCJ7FkIIDw', title: 'Cuban bolero with Nancy Maura' },
        { id: 'm3LgcY-gOms', title: 'Trova with Alejandro Almenares' },
        { id: 'HEeGp-I6c0c', title: 'Leyenda de la música de Santiago de Cuba: documentary' },
      ],
    },
    {
      title: 'The gear',
      kicker: 'What made the sound',
      items: [{ id: 'YMCKz5TC_fg', title: 'Rig rundown, from Cuba' }],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  BIOGRAPHY                                                                 */
/* -------------------------------------------------------------------------- */

export const bio = {
  heading: 'Biography',

  // TODO: this is the placeholder. Replace it with the biography we write for
  // ZOHO Records — the same text should serve the label, the press and this page.
  short:
    'Ramon Goose is an English guitarist working in Cuban music. Born in Colchester in 1975, he has spent thirty years taking the electric guitar out of the blues — through West Africa with the West African Blues Project, and now through Santiago de Cuba with The Compadres, whose album I Left My Blues In Cuba was recorded at EGREM Studios.',

  longHeading: 'Where the blues went',
  long: [
    'Ramon Goose is an English guitarist, singer and producer, born in Colchester in 1975 and playing professionally since the 1990s. He has spent that career carrying the electric guitar out of the blues and into whatever the blues touched: hip-hop and Delta guitar with NuBlues, Mississippi by way of Mali with the West African Blues Project, and now the son and guajira of eastern Cuba.',
    'Since 2023 that work has been with The Compadres, a Cuban band. The new album was cut at EGREM in Santiago de Cuba, the studio at the centre of the island\u2019s recorded history, and it sounds like it. A second record, with the Santiago trova guitarist Alejandro Almenares, is still being made.',
    'Cuban electric guitar is a small field with a long history and very few players coming to it from the blues. That is the ground this work stands on.',
  ],

  // Facts a journalist will want without having to ask.
  press: [
    { label: 'Based', value: 'London and Havana' },
    { label: 'Current release', value: 'I Left My Blues In Cuba' },
    { label: 'Label', value: 'ZOHO Records, New York' },
    { label: 'Live formats', value: 'Trio in England, quintet in Santiago de Cuba' },
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
    // The band, in Cuba. These lead because they are what the site is about.
    { src: 'a23.jpg', tag: 'cuba', caption: 'The Compadres on a rooftop in Santiago de Cuba' },
    { src: 'g01.jpg', tag: 'cuba', caption: 'The Compadres in Santiago' },
    { src: 'g02.jpg', tag: 'cuba', caption: 'The Compadres, Cuba' },
    { src: 'g03.jpg', tag: 'cuba', caption: 'Ernesto and Calderín' },
    { src: 'g04.jpg', tag: 'cuba', caption: 'Backstage in Santiago' },
    { src: 'a24.jpg', tag: 'cuba', caption: 'With Nancy Maura at Estudios Siboney' },
    { src: 'a14.jpg', tag: 'cuba', caption: 'With Alejandro Almenares, Santiago de Cuba' },
    { src: 'a15.jpg', tag: 'cuba', caption: 'Playing with Alejandro Almenares' },
    { src: 'a16.jpg', tag: 'cuba', caption: 'The Compadres' },
    { src: 'a17.jpg', tag: 'cuba', caption: 'The Compadres' },
    { src: 'a18.jpg', tag: 'cuba', caption: 'The Compadres' },
    { src: 'a19.jpg', tag: 'cuba', caption: 'The Compadres' },
    { src: 'a11.jpg', tag: 'cuba', caption: 'The Compadres' },

    // The studios: EGREM and Siboney.
    { src: 'a07.jpg', tag: 'cuba', caption: 'Estudio 18, EGREM, with the Guyatone' },
    { src: 'a09.jpg', tag: 'cuba', caption: 'At the desk, EGREM' },
    { src: 'a06.jpg', tag: 'cuba', caption: 'In the control room with the engineer' },
    { src: 'a05.jpg', tag: 'cuba', caption: 'The Studer A80 and a reel of BASF tape' },
    { src: 'a03.jpg', tag: 'cuba', caption: 'Tracking guitar' },
    { src: 'a02.jpg', tag: 'cuba', caption: 'The control room' },
    { src: 'a04.jpg', tag: 'cuba', caption: 'The live room at Estudios Siboney' },
    { src: 'a10.jpg', tag: 'portrait', caption: 'TODO: caption' },

    // Live and gear.
    { src: 'a13.jpg', tag: 'portrait', caption: 'Kieffer Santander' },
    { src: 'a12.jpg', tag: 'gear', caption: 'Marshall head' },
    { src: 'a01.jpg', tag: 'gear', caption: 'TODO: is this one the Goosemaster too, or a different amp?' },
    { src: 'a20.jpg', tag: 'sleeve', caption: 'TODO: what is this artwork for?' },

    // From the old site.
    { src: 'c04.jpg', tag: 'cuba', caption: 'The album cover shot, Santiago de Cuba' },
    { src: 'c01.jpg', tag: 'cuba', caption: 'In the control room at Estudios Siboney, Santiago de Cuba' },
    { src: 'c02.jpg', tag: 'cuba', caption: 'Between takes' },
    { src: 'c03.jpg', tag: 'cuba', caption: 'The Compadres' },
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
    { src: '08.jpg', tag: 'gear', caption: 'Siewa Powersonic, the guitar Ali Farka Touré played' },
    { src: '09.jpg', tag: 'gear', caption: 'Pedalboard' },
    { src: '10.jpg', tag: 'gear', caption: 'Mystic Blues head' },
    { src: '11.jpg', tag: 'gear', caption: 'Celestion speaker and amplifier chassis' },
    { src: '12.jpg', tag: 'gear', caption: 'The WAU Goosemaster' },
    { src: '13.jpg', tag: 'gear', caption: 'Guitar and amplifiers in the studio' },
    { src: '14.jpg', tag: 'gear', caption: 'Cogmeister, controls' },
    { src: '15.jpg', tag: 'gear', caption: 'Two Les Pauls' },
    { src: '16.jpg', tag: 'gear', caption: 'Blonde archtop' },
    { src: '17.jpg', tag: 'gear', caption: 'The Guyatone LG-200T' },
    { src: '18.jpg', tag: 'sleeve', caption: 'Long Road To Tiznit, 2017' },
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
  { label: 'Live', href: '/tour' },
  { label: 'The Band', href: '/band' },
  { label: 'Cuba', href: '/cuba' },
  { label: 'Gear', href: '/gear' },
  { label: 'Texas Flood Pedal', href: '/goose-pedal' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Video', href: '/video' },
  { label: 'Shop', href: '/shop' },
  { label: 'Biography', href: '/bio' },
  { label: 'Contact', href: '/contact' },
];
