/**
 * ============================================================================
 *  LA VERSIÓN EN ESPAÑOL DEL SITIO.
 * ============================================================================
 *
 *  Ramon — this is the Spanish twin of site.js. It has exactly the same shape,
 *  so anything you change there has a matching line here. If you add a section
 *  to one file, add it to the other or the Spanish page will fall back to the
 *  English wording.
 *
 *  Names of people, bands, records, venues and instruments are left as they
 *  are. They are proper nouns, not text to be translated.
 * ============================================================================
 */

import {
  identity,
  music as musicEn,
  gallery as galleryEn,
  video as videoEn,
  forSale as forSaleEn,
  bassGear as bassGearEn,
  shop as shopEn,
} from './site';

export const site = {
  artist: 'Ramon Goose',
  band: 'Ramon Goose & The Compadres',
  tagline: 'Guitarra Eléctrica Cubana',
  description:
    'Ramon Goose es un guitarrista inglés que trabaja en la música cubana. Guitarra eléctrica cubana, son y blues, grabado en los Estudios EGREM de Santiago de Cuba.',
  url: 'https://ramongoose.co.uk',
  email: {
    general: 'james.wpdesign@gmail.com',
    booking: 'james.wpdesign@gmail.com',
    press: 'james.wpdesign@gmail.com',
  },
  social: [
    { label: 'The Guitar Show', href: 'https://youtube.com/@TheGuitarShow' },
    { label: 'Ramon Goose en YouTube', href: 'https://www.youtube.com/@RamonGoose' },
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Spotify', href: 'https://open.spotify.com/' },
    { label: 'Bandcamp', href: 'https://bandcamp.com/' },
  ],
};

export { identity };
export function sameAs() {
  return [identity.wikipedia, identity.wikidata, ...identity.profiles.map((p) => p.href)].filter(
    Boolean
  );
}

/* -------------------------------------------------------------------------- */

export const home = {
  heroName: 'Ramón Goose & The Compadres',
  heroKicker: 'Santiago de Cuba · Londres',
  heroTitle: 'I Left My Blues In Cuba',
  heroSubtitle:
    'Ramon Goose es un guitarrista inglés que trabaja en la música cubana. Llevó el blues a Santiago de Cuba, encontró a The Compadres y volvió con un disco.',
  heroCtaPrimary: { label: 'Escuchar el disco', href: '/music' },
  heroCtaSecondary: { label: 'Las sesiones en Cuba', href: '/cuba' },

  bandBlurbHeading: 'The Compadres',
  bandBlurb: [
    'The Compadres son dos bandas con un mismo nombre, una a cada lado del Atlántico, tocando son, guajira y bolero con una guitarra eléctrica de blues donde normalmente iría el tres.',
    'En Inglaterra es un trío. Kieffer Santander toca la percusión: peruano, radicado aquí, uno de los principales intérpretes de percusión afroperuana y criolla en Europa, y la razón por la que la banda se mueve como se mueve, con cajón, congas, bongó y la quijada, la mandíbula de un burro que se toca haciendo sonar los dientes. Joe Goose toca el bajo y es mi hermano gemelo idéntico, lo cual es un atajo que ahorra unos treinta años de ensayo.',
    'En Santiago de Cuba es un quinteto, y ésa es la banda del disco: Joaquín Solórzano en las congas, con quien empezó todo en 2023, Rudy Ramon en el tres, Calderín en el contrabajo y Ernesto en el bongó. Grabamos el disco en EGREM, el estudio estatal que puso en cinta buena parte de lo que el mundo entiende por música cubana.',
    'Ninguna de las dos mitades es un tributo. El blues se fue a Cuba, encontró allí la música que ya existía, y volvió sonando así.',
  ],

  bandPhotos: [
    {
      src: 'compadres-england-trio.jpg',
      caption: 'The Compadres en Inglaterra',
      detail: 'Kieffer Santander, Ramon Goose y Joe “Ricardo” Goose. Día Internacional del Jazz, Londres.',
      width: 1800,
      height: 1355,
    },
    {
      src: 'compadres-santiago.jpg',
      caption: 'The Compadres en Cuba',
      detail: 'En una azotea sobre Santiago de Cuba',
      width: 1800,
      height: 1013,
    },
  ],

  cards: [
    {
      title: 'La música',
      body: 'El disco nuevo, las sesiones con Almenares y veinte años de catálogo.',
      href: '/music',
    },
    {
      title: 'Trabajar en Cuba',
      body: 'EGREM Santiago, los músicos, y cómo un disco de blues acabó siendo cubano.',
      href: '/cuba',
    },
    {
      title: 'El equipo',
      body: 'La Guyatone, los amplificadores, y lo que de verdad hizo el sonido del disco.',
      href: '/gear',
    },
    {
      title: 'Goose Effects',
      body: 'Tres pedales propios, hechos desde cero. Ahora en fabricación.',
      href: '/goose-pedal',
    },
    {
      title: 'En directo',
      body: 'Dónde toca la banda, y cómo contratarla.',
      href: '/tour',
    },
    {
      title: 'Galería',
      body: 'Fotografías de Santiago, La Habana y la carretera.',
      href: '/gallery',
    },
    {
      title: 'The Guitar Show',
      body: 'Historia de la guitarra, bien contada. Cincuenta y siete mil suscriptores.',
      href: '/video',
    },
  ],
};

/* -------------------------------------------------------------------------- */

export const music = {
  heading: 'La música',
  intro:
    'Un disco nuevo hecho en Santiago de Cuba, una colaboración todavía sin terminar, y veinte años de discos detrás de ambos.',

  featured: {
    ...musicEn.featured,
    artist: 'Ramon Goose & The Compadres',
    label: 'ZOHO Records, Nueva York',
    releaseLine: 'Publicado en 2026 por ZOHO Records. Fecha exacta por anunciar.',
    status: 'En 2026',
    recordedAt: 'Estudios EGREM, Santiago de Cuba',
    blurb: [
      'Nueve temas grabados en Santiago de Cuba con una banda cubana. Seis canciones traídas del blues y tres escritas en la isla.',
      'Abre y cierra con Peter Green: Black Magic Woman al principio y I Loved Another Woman al final, con Rick Vito, que tocó esas canciones en Fleetwood Mac. En medio hay son, guajira y guitarra del Delta en la misma sala, que es de lo que va el disco.',
    ],
    linksPending: 'Todavía no está en las plataformas. Saldrá cuando ZOHO Records lo publique.',
    personnel: [
      { name: 'Ramon Goose', role: 'Guitarra eléctrica, tres, voz' },
      { name: 'Joaquín Solórzano', role: 'Congas' },
      { name: 'Rudy Ramon Daquín', role: 'Tres' },
      { name: 'Calderín', role: 'Contrabajo' },
      { name: 'Ernesto', role: 'Bongó' },
      { name: 'Mustafa', role: 'Piano' },
      { name: 'Nancy Maura', role: 'Voz en Porque y Si Pudiera Expresarte (1935–2025)' },
      { name: 'Alejandro Almenares', role: 'Guitarra y voz' },
      { name: 'Damian Busqueta Mineto', role: 'Trombón' },
      { name: 'Benilde Aysmel Guzmán Mariño', role: 'Trompeta' },
      { name: 'Rick Vito', role: 'Guitarra solista en I Loved Another Woman' },
    ],
  },

  upcoming: [
    {
      title: 'Las sesiones con Alejandro Almenares',
      status: 'En proceso',
      blurb: [
        'Un disco con Alejandro Almenares, el guitarrista veterano de Santiago de Cuba y el último de los trovadores de su generación que sigue grabando.',
        'Rick Vito toca en él. Los metales todavía se están grabando en Cuba. Éste no está terminado, y no se va a apurar.',
      ],
    },
  ],

  catalogueHeading: 'Catálogo anterior',
  listenLabel: 'Escuchar en Spotify',
  buyLabel: 'Comprar el CD en Amazon',
  shopLabel: 'Comprar el CD',
  catalogue: [
    { title: 'Long Road To Tiznit', year: '2017', label: 'World Music Network', role: 'Blues y África occidental' },
    { title: 'The West African Blues Project', year: '2015', label: 'ARC Music', role: 'Con Modou Touré' },
    { title: 'Blues & Spirituals', year: '2014', label: 'Acoustic Music Records', role: 'Disco en solitario' },
    { title: 'Uptown Blues', year: '2011', label: 'Blues Boulevard', role: 'Disco en solitario' },
    { title: 'Mansana Blues', year: '2010', label: 'Dixiefrog', role: 'Con Diabel Cissokho, kora y slide' },
    { title: 'Snow On The Tracks', year: '2008', label: 'Dixiefrog / 21st Century Blues', role: 'NuBlues' },
    { title: 'Drew, Mississippi', year: '2006', label: 'Black and Tan Records', role: 'Boo Boo Davis: producción, composición y guitarra' },
    { title: 'Dreams Of A Blues Man', year: '2004', label: 'Dixiefrog / 21st Century Blues', role: 'NuBlues' },
  ].map((rec) => {
    // Los enlaces viven en site.js. Aquí sólo se recogen, para que no haya dos
    // listas de URLs que mantener sincronizadas.
    const en = musicEn.catalogue.find((r) => r.title === rec.title);
    // La entrada inglesa primero, la española encima: así los enlaces nuevos
    // que se añadan en site.js aparecen aquí solos, sin tener que nombrarlos
    // uno a uno, y el texto traducido sigue mandando.
    return en ? { ...en, ...rec } : rec;
  }),
};

/* -------------------------------------------------------------------------- */

export const tour = {
  heading: 'En directo',
  intro: 'Dos formaciones, para que la banda funcione en cualquiera de los dos tamaños. Un trío aquí, un quinteto en Cuba.',
  upcoming: [
    {
      date: '2026-11-07',
      venue: 'The Antwerp Arms',
      city: 'Tottenham, Londres',
      country: 'Reino Unido',
      lineup: 'Trío',
      tickets: '',
      note: 'Entrada libre.',
    },
    {
      date: '',
      venue: 'Casa de la Trova',
      city: 'Santiago de Cuba',
      country: 'Cuba',
      lineup: 'Quinteto',
      tickets: '',
      note: 'Presentación del disco, en enero. Se grabará en audio y vídeo para un futuro disco en directo. Fecha por anunciar.',
    },
    {
      date: '',
      venue: 'Concierto de presentación del disco',
      city: 'Londres',
      country: 'Reino Unido',
      lineup: 'Trío',
      tickets: '',
      note: 'Sala y fecha por anunciar.',
    },
  ],
  pastHeading: 'Anteriormente',
  past: [
    {
      date: '2026-08-08',
      venue: 'Tangled Blues Festival',
      city: 'Radford Mill Farm, cerca de Bath',
      country: 'Reino Unido',
      lineup: 'Trío',
      note: 'Cabeza de cartel.',
    },
    {
      date: '2026-06-13',
      venue: 'Crouch End Festival',
      city: 'Hornsey Town Hall, Londres',
      country: 'Reino Unido',
      lineup: 'Trío',
      note: 'Cabeza de cartel en el escenario principal, para Haringey Hot Nights.',
    },
    {
      date: '2025-04-30',
      venue: 'Bolívar Hall',
      city: 'Londres',
      country: 'Reino Unido',
      lineup: 'Cuarteto',
      note: 'Día Internacional del Jazz, con la Embajada de Cuba, en homenaje a Harry Belafonte.',
    },
  ],
  bookingHeading: 'Contratación',
  bookingBody:
    'Festivales, clubes, centros culturales y eventos privados. Trío en Inglaterra, quinteto en Santiago de Cuba. Contesto mi propio correo y puedo enviar rider técnico, plano de escenario y fotos de prensa el mismo día.',
};

/* -------------------------------------------------------------------------- */

export const band = {
  heading: 'The Compadres',
  standfirst:
    'Dos formaciones, una banda. Una en Inglaterra y otra en Santiago de Cuba, para que la música funcione tanto si el concierto es en Hackney como en La Habana.',
  groups: [
    {
      id: 'england',
      name: 'The Compadres — Inglaterra',
      photo: 'compadres-england-trio.jpg',
      photoCaption: 'The Compadres en la Embajada de Cuba en Londres. De izquierda a derecha: Kieffer Santander, Ramon Goose y Joe “Ricardo” Goose.',
      blurb:
        'La formación que toca aquí: festivales, clubes y cualquier cosa de este lado del agua. Repertorio cubano con un percusionista peruano dentro, lo que lleva el ritmo a un sitio al que ninguna de las dos tradiciones habría llegado sola.',
      members: [
        {
          name: 'Ramon Goose',
          role: 'Guitarra eléctrica, voz',
          photo: 'ramon-goose.jpg',
          bio: 'Guitarrista inglés, nacido en Colchester en 1975. Veintitantos años de discos de blues a la espalda y ahora dedicado casi por completo a la música cubana.',
        },
        {
          name: 'Kieffer Santander',
          role: 'Director musical, percusión, voz',
          photo: 'kieffer-santander.jpg',
          bio: [
            'Director musical de los Compadres de Londres. Percusionista, compositor, profesor y director de banda, nacido en Perú y radicado en el Reino Unido, y uno de los principales intérpretes de percusión afroperuana y criolla que trabajan en Europa, una tradición que ha dedicado su carrera a mantener viva muy lejos de casa.',
            'Eso es lo que hace que esta banda suene como suena. El cajón y la quijada, la mandíbula de un burro que se toca haciendo sonar los dientes en su hueco, son instrumentos afroperuanos, no cubanos. Ponerlos debajo del son y la guajira lleva el ritmo a un sitio al que ninguna de las dos tradiciones habría llegado por su cuenta.',
            'Se crió en Lima, donde estudió en la Escuela de Bellas Artes antes de licenciarse en administración de empresas en la Universidad Ricardo Palma. Tras mudarse al Reino Unido siguió formándose en Queen’s Way College y afinó su lectura y su percusión latina en el Studio Tom Allien Centre de Stratford.',
          ],
        },
        {
          name: 'Joe “Ricardo” Goose',
          role: 'Bajo',
          photo: 'joe-goose.jpg',
          bio: [
            'Mi hermano gemelo idéntico, al bajo. Treinta años escuchando los mismos discos y tocando en las mismas salas, lo cual resulta ser un atajo que ningún ensayo sustituye: el bajo y la guitarra se mueven juntos sin que ninguno de los dos tenga que levantar la vista.',
            'Ha tocado con Pee Wee Ellis y ha girado con Eric Bibb, y pasó siete años en la escena del jazz de París. Ahí fue donde aprendió el tumbao, la figura de bajo cubana sobre la que se asienta toda la banda. A la mayoría de los bajistas que llegan a esta música hay que enseñársela. Él ya la traía.',
          ],
        },
      ],
    },
    {
      id: 'cuba',
      name: 'The Compadres — Santiago de Cuba',
      photo: 'compadres-santiago.jpg',
      photoCaption: 'La formación de Santiago, en una azotea sobre la ciudad',
      blurb:
        'La formación cubana, y la banda del disco. Son músicos santiagueros que trabajan en las tradiciones del son y la trova que inventó la ciudad.',
      members: [
        {
          name: 'Ramon Goose',
          role: 'Guitarra eléctrica, voz',
          photo: 'ramon-goose.jpg',
          bio: 'La constante en las dos bandas.',
        },
        {
          name: 'Joaquín Solórzano',
          role: 'Congas',
          photo: 'joaquin-solorzano.jpg',
          bio: 'Con él empezó la banda, en Santiago en 2023. Tocó más de veinte años en la banda de Compay Segundo, que es la línea más directa que queda hacia la música que hizo famosa el Buena Vista Social Club.',
        },
        { name: 'Calderín', role: 'Contrabajo', photo: 'calderin.jpg', bio: '' },
        { name: 'Ernesto', role: 'Bongó', photo: 'ernesto.jpg', bio: '' },
        {
          name: 'Rudy Ramon Daquín',
          role: 'Tres',
          photo: 'rudy-ramon.jpg',
          bio: 'Tresero santiaguero, e integrante de Los Jubilados del Caribe, el grupo veterano de la ciudad cuya versión de Siboney cuenta con la participación del multiinstrumentista y silbador El Silbador.',
        },
        { name: 'Mustafa', role: 'Piano', photo: 'mustafa.jpg', bio: '' },
      ],
    },
  ],
  guestsKicker: 'Colaboradores e invitados en el disco',
  guestsHeading: 'Invitados en el disco',
  guests: [
    {
      name: 'Rick Vito',
      role: 'Maestro. Guitarrista, antes en Fleetwood Mac',
      photo: '/images/band/rick-vito.jpg',
      bio: 'Un maestro, y uno de los grandes del slide americano. Toca la guitarra solista en I Loved Another Woman, una canción de Peter Green que conoce por dentro: ocupó el puesto de Green en Fleetwood Mac entre 1987 y 1991 y tocó en Behind the Mask. Suyo es el slide de Like A Rock, de Bob Seger. Antes y después, las sesiones son profundas: Bonnie Raitt, Jackson Browne, John Mayall, John Fogerty, Roy Orbison, Little Richard, Leon Russell, Boz Scaggs, Roger McGuinn. Empezó con Delaney and Bonnie y abrió para Muddy Waters en 1969, y está nominado al Grammy por su trabajo al frente de la Mick Fleetwood Blues Band. También toca en el nuevo disco de Alejandro Almenares.',
    },
    {
      name: 'Nancy Maura',
      role: 'Bolerista de Santiago de Cuba',
      photo: '/images/gallery/a24.jpg',
      bio: 'Una de las grandes boleristas de Santiago de Cuba, y una de las últimas defensoras del género en la ciudad. Nacida Justina María Balbuena Céspedes en 1935, cantaba desde los nueve años y nunca se fue de Santiago, porque era santiaguera y ahí se acababa la discusión. Canta en Porque y en Si Pudiera Expresarte. Murió en abril de 2025, a los noventa años, lo que convierte estas grabaciones en de las últimas que hizo.',
    },
    {
      name: 'Damian Busqueta Mineto y Benilde Aysmel Guzmán Mariño',
      role: 'Los metales: trombón y trompeta',
      photo: '/images/band/horn-section.jpg',
      bio: 'Damian Busqueta Mineto al trombón, productor ganador de dos premios Grammy, y Benilde Aysmel Guzmán Mariño a la trompeta. Los dos se grabaron en Santiago después de la base rítmica, que es la razón por la que el disco tardó lo que tardó. Los metales son lo que separa a una banda de son de un septeto, y son lo último que se pone.',
    },
    {
      name: 'Alejandro Almenares',
      role: 'Trovador de Santiago de Cuba',
      photo: '/images/gallery/a15.jpg',
      bio: 'Nacido en Santiago de Cuba en 1937 y, según casi todos, el último trovador de la época dorada de la trova que sigue tocando. Su padre ayudó a fundar la Casa de la Trova, donde Alejandro todavía toca junto a Eliades Ochoa. Ha pasado por el Cuarteto Patria, el Septeto Típico Oriental y el Cuarteto Oriente, ha escrito varios cientos de canciones, y no grabó un disco a su nombre hasta los setenta y seis años. Estamos haciendo uno juntos.',
    },
  ],
};

/* -------------------------------------------------------------------------- */

export const cuba = {
  heading: 'Trabajar en Cuba',
  standfirst:
    'Santiago de Cuba no es La Habana. Hace más calor, es más antigua, está más cerca de Haití y de Jamaica que de Florida, y es de donde salió el son. También es donde se hizo este disco.',
  sections: [
    {
      title: 'EGREM, Santiago',
      image: '/images/gallery/a09.jpg',
      imageCaption: 'En la mesa de EGREM, Santiago de Cuba',
      body: [
        'EGREM es el estudio del Estado, y la sala de Santiago ha grabado buena parte de lo que el resto del mundo entiende por música cubana. Mesa analógica, techos altos, y todos tocando a la vez en el mismo espacio porque así está construida la sala.',
        'Hacía mucho calor y entraba y salía gente todo el día. Fue una de las mejores experiencias que he tenido: un estudio en funcionamiento, lleno de ruido, con toda esa historia dentro. Allí grabó Compay Segundo. Allí grabó Eliades Ochoa. Y todos los que vinieron antes que ellos.',
      ],
    },
    {
      title: 'The Compadres',
      image: '/images/gallery/g01.jpg',
      imageCaption: 'The Compadres en Santiago',
      body: [
        'The Compadres se formó en 2023 con el músico cubano Joaquín Solórzano. La banda toca son, guajira y bolero con una guitarra eléctrica en el centro, que no es lo habitual en ninguna de las dos tradiciones.',
        'Cada uno de los músicos cubanos tiene una carrera larga en el son de Santiago, y todos han tocado con los mejores que hubo. Están entre los últimos músicos vivos de esa tradición, y no son una recreación de ella: son lo que queda de la cosa misma.',
        'Hay dos formaciones, una aquí y otra en Santiago, y están detalladas en la página de la banda.',
      ],
    },
    {
      title: 'Alejandro Almenares',
      image: '/images/gallery/a15.jpg',
      imageCaption: 'Tocando con Alejandro Almenares',
      body: [
        'Alejandro Almenares es uno de los últimos grandes intérpretes del son y la trova, con un catálogo extenso de composiciones propias y un linaje que entra directamente en la música que hizo famosa el Buena Vista Social Club.',
        'Cuando decidí que quería tocar guitarra cubana de verdad, fui a su casa y tomé clases con él. Todo lo que toco ahora en el instrumento viene de esas clases. Estamos grabando juntos.',
      ],
      link: { label: 'Vernos tocando juntos', href: '/video' },
    },
  ],
  facts: [
    { label: 'Grabado en', value: 'Estudios EGREM, Santiago de Cuba' },
    { label: 'Temas', value: 'Nueve: seis versiones y tres originales' },
    { label: 'Invitado', value: 'Rick Vito, antes en Fleetwood Mac' },
    { label: 'Voz', value: 'Nancy Maura' },
  ],
};

/* -------------------------------------------------------------------------- */

export const gear = {
  tabs: {
    guitar: 'El equipo de Ramon',
    bass: 'El equipo de Joe',
    aria: 'Secciones de equipo',
  },
  photosKicker: 'El taller',
  photosHeading: 'En imágenes',
  heading: 'El equipo',
  intro:
    'Lo que toco de verdad, y lo que de verdad se grabó en el disco. Sin patrocinios ni fingimientos: si está aquí es porque lo uso.',
  groups: [
    {
      group: 'Guitarras',
      items: [
        {
          name: 'Guyatone LG-180T',
          detail: 'La guitarra principal',
          body: 'La que hace casi todo el trabajo. Una offset japonesa de los años sesenta con pastillas finas y nerviosas que se sitúan en la mezcla en un lugar distinto a cualquier guitarra americana, que es exactamente por lo que el repertorio cubano funciona a través de ella.',
          image: '/images/gear/guyatone-180t.jpg',
        },
        {
          name: 'Guyatone LG-200T',
          detail: 'La guitarra de la portada',
          body: 'Comprada en Japón y más pesada de lo que le corresponde. Las pastillas suenan metálicas de una manera que le va bien al repertorio cubano: hace unas cuantas canciones por noche, por el sonido y por la estampa. Ésta es la guitarra de la portada del disco.',
          image: '/images/gallery/17.jpg',
        },
        {
          name: 'Siewa Powersonic',
          detail: 'La guitarra de Ali Farka Touré',
          body: 'El modelo que tocaba Ali Farka Touré. Pasé años metido en música de África occidental antes de Cuba, y ésta es la guitarra que está en el centro de todo aquello: un instrumento barato y de fabricación rara que un músico enorme convirtió en un sonido que nadie ha conseguido copiar desde entonces.',
          image: '/images/gallery/08.jpg',
        },
        {
          name: 'Fernandes P-Project AI-N',
          detail: 'Guitarra eléctrica de cuerda de nylon',
          body: 'Una eléctrica de nylon del custom shop japonés, el modelo de firma de Dominic Miller y la guitarra por la que se le conoció durante sus años con Sting en los noventa, incluido Ten Summoner’s Tales. La uso mucho con The Compadres en el repertorio folclórico de son, donde el nylon hace algo que el acero no puede.',
          image: '/images/gear/p-project.jpg',
        },
        {
          name: 'Coodercaster',
          detail: 'Pastillas gold foil y Valco originales',
          body: 'Montada como la de Ry Cooder: una gold foil en el mástil y una pastilla Valco de lap steel en el puente, las dos originales y no reediciones. Esas dos pastillas son el sonido de Mambo Sinuendo, que es el disco que hizo pensable una guitarra eléctrica en la música cubana. Tener las mismas piezas no es lo mismo que tocar como él, pero te pone en la sala correcta.',
          image: '/images/gallery/05.jpg',
        },
        {
          name: 'ESP Navigator',
          detail: 'Las guitarras estilo Gibson',
          image: '/images/gallery/01.jpg',
          body: 'Navigator es la línea japonesa de ESP, y construyen las formas de Gibson mejor que casi nadie: una Explorer, una Firebird, una SG, una Les Paul y una semicaja estilo 335, además de la N-ST azul. Para un concierto de The Compadres me llevo una de las Guyatone y una de éstas, que cubre todo el terreno entre una pastilla fina y metálica y una humbucker gorda sin tener que cargar con media casa.',
        },
        {
          name: 'Daniels Guitars Les Paul',
          detail: 'Construida por Darren Horton',
          image: '/images/gallery/15.jpg',
          body: 'Una réplica de Les Paul construida por Darren Horton en Daniels Guitars, y tan buena como una del 59 de verdad: he tocado suficientes de las dos como para decirlo en serio. En la foto hay una de 1958 auténtica, de Bob Wootten, con la mía detrás, que es más o menos la prueba más justa a la que se puede someter una réplica. Una de las guitarras en las que más me apoyo con The Compadres.',
        },
        {
          name: 'Fender D’Aquisto Deluxe',
          detail: 'Masterbuilt por Stephen Stern',
          body: 'Una archtop masterbuilt del Custom Shop de Fender, hecha por Stephen Stern, que después dirigió el custom shop de Gretsch y ya está retirado. Masterbuilt significa que una sola persona construyó la guitarra entera en lugar de una línea de montaje, y en una archtop eso es la diferencia entre un instrumento y un mueble.',
          image: '/images/gallery/16.jpg',
        },
        {
          name: 'Tres',
          detail: 'Acústico y eléctrico',
          body: 'Toco el tres tanto acústico como eléctrico. El eléctrico me lo hizo a medida Chapter Guitars, y empezó siendo una guitarra: inspirada en la Siewa Powersonic que tocaba Ali Farka Touré, y construida sobre todo con maderas africanas. Después se convirtió en tres. Así que el instrumento con el que toco el repertorio cubano es, por debajo, una guitarra de África occidental, lo cual es una casualidad o es toda la historia según cómo se mire. El tres está en el centro del son, y es la razón por la que la guitarra se coloca donde se coloca en esta banda.',
          image: '/images/gear/tres.jpg',
        },
      ],
    },
    {
      group: 'Amplificación',
      items: [
        {
          name: 'El equipo',
          detail: 'Dos amplificadores, seco y con efectos',
          body: 'Dos amplificadores sonando a la vez, uno limpio y seco y otro con los efectos, repartidos con el WAU Goosemaster. Es más peso que cargar, pero dos amplificadores hacen algo que uno solo no puede: el sonido se ensancha y empieza a moverse por su cuenta, que es justo lo que pide el repertorio cubano.',
        },
        {
          name: 'Bell & Howell Filmosound',
          detail: 'Modificado por Bill Krinard, de Two-Rock',
          image: '/images/gallery/11.jpg',
          body: 'Un amplificador de proyector de cine de los años cincuenta, convertido para guitarra por Bill Krinard, el hombre detrás de Two-Rock y el principal responsable de que estos amplificadores de proyector sean algo que los guitarristas persiguen. Se construyeron para llenar un salón de actos con una banda sonora, no para tocarlos, y tienen unos medios que ningún amplificador de guitarra de la época se diseñó para dar.',
        },
        {
          name: 'Réplica de Marshall JTM45',
          detail: 'Construido por WAU Engineering, un año de conciertos',
          image: '/images/gear/jtm45.jpg',
          body: 'Montado por WAU Engineering, la misma gente que hace el Goosemaster, con piezas Radiospares originales de los años sesenta en lugar de reproducciones. Es un amplificador que funciona y que lleva un año saliendo a tocar, no un proyecto en un rincón. Construido como debe ser, lo que significó buscar transformadores de salida y de red originales Radiospares De Luxe de los años sesenta en lugar de conformarse con reproducciones. Ese par de transformadores es buena parte de por qué un JTM45 suena como un JTM45, y es justo la pieza en la que todo el mundo ahorra.',
        },
        {
          name: 'Un segundo JTM45',
          detail: 'En construcción',
          image: '/images/gear/radiospares-transformer.jpg',
          body: 'Otro montándose ahora, otra vez con transformadores Radiospares originales. Encontrar un par de originales que casen es todo el trabajo; el resto de un JTM45 es un fin de semana.',
        },
        {
          name: 'Pantallas Lazy J',
          detail: 'Dos de 1x12, con Celestion',
          body: 'Un par de Lazy J de un altavoz de doce pulgadas cada una, con Celestion dentro. Dos pantallas pequeñas en lugar de una grande, que es lo que hace que el lado seco y el lado con efectos queden uno a cada lado y no encima el uno del otro.',
        },
        {
          name: 'WAU Goosemaster',
          detail: 'Divisor de señal',
          image: '/images/gallery/12.jpg',
          body: 'No es un amplificador sino un divisor, construido por WAU como clon del Green Man, la caja que usaba Ry Cooder para atacar más de un amplificador a la vez. Es lo que alimenta los dos amplificadores. Cooder y Manuel Galbán son buena parte de la razón por la que una guitarra eléctrica en la música cubana es siquiera una idea, así que usar su divisor para hacerlo no es casualidad.',
          href: '',
        },
      ],
    },
    {
      group: 'Efectos',
      items: [
        {
          name: 'Victoria Reverberato',
          detail: 'Esencial para el sonido',
          body: 'Una unidad de reverb y vibrato a válvulas, cableada a mano: la reverb sobre el esquema del Fender 6G15, y el vibrato tomado de un Concert brownface del 63, que es un vibrato armónico real con cambio de tono y no un trémolo de volumen. Ahí está la diferencia. Un trémolo pulsa; éste dobla, y es lo que hace que la guitarra brille contra el tres. Esencial para el sonido de The Compadres.',
          image: '/images/gallery/02.jpg',
        },
        {
          name: 'Goose Germanium Fuzz',
          detail: 'Mío',
          body: 'De germanio y no de silicio, que es de lo que se trata: se limpia al bajar el volumen de la guitarra en lugar de simplemente sonar más bajo, así que un solo pedal cubre mucho terreno sin tener que tocarlo entre canciones.',
        },
        {
          name: 'Goose Effects Crossfire',
          detail: 'Mío',
          body: 'Básicamente un TS-10 con modificaciones mías, de Keeley y de Landgraff, hecho para encajar delante del Filmosound mejor que el original. El Texas Flood no es una cosa suelta: éste y el fuzz vinieron antes.',
          href: '/goose-pedal',
        },
        {
          name: 'Los delays',
          detail: 'Crucial Audio y Blackbox',
          body: 'Un Crucial Audio Echo Nugget y un Blackbox Quicksilver. Dos delays en lugar de uno porque el lado con efectos del equipo es el que los lleva, y hacen trabajos distintos: uno para el slap y otro para las repeticiones largas dentro de las que se asienta el repertorio cubano.',
          image: '/images/gallery/09.jpg',
        },
        {
          name: 'Texas Flood',
          detail: 'Treinta construidos a mano, y pronto en fabricación',
          body: 'Un overdrive muy modificado, hecho para los tonos de Stevie Ray Vaughan con una Stratocaster. He construido unos treinta, cableados a mano sobre placas de turrets, y ya pasan a fabricación en condiciones. Rick Vito toca uno. Hay una página sobre él y sobre los otros dos.',
          href: '/goose-pedal',
        },
        {
          name: 'Goose Effects Gooseboost',
          detail: 'Mío',
          body: 'Un mando, y el mando es el volumen. Es el booster que uso para el slide y para las Guyatone, donde el trabajo es empujar la entrada del amplificador y nada más.',
          href: '/goose-pedal',
        },
      ],
    },
    {
      group: 'Cuerdas, púas y lo demás',
      items: [
        {
          name: 'Cuerdas',
          detail: 'Del 11 al 49',
          body: 'Onces en las eléctricas. Más gruesas de lo que usa la mayoría, y la razón por la que el repertorio cubano mantiene la afinación: una cuerda fina se va de tono en cuanto aprietas, y esta música no lo perdona.',
        },
        {
          name: 'Púas',
          detail: 'Jazz III, las pequeñas',
          body: 'La Jazz III pequeña. Sobresale muy poco de los dedos, que es lo que quieres cuando la mano derecha está haciendo el trabajo de un tres.',
        },
        {
          name: 'Slides',
          detail: 'Diamond Bottlenecks',
          body: 'Diamond Bottlenecks, hechos en Inglaterra. De cristal, y con el peso justo: los años de slide antes de Cuba no se han ido a ninguna parte.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */

export const pedal = {
  name: 'Goose Effects',
  kicker: 'Pedales',
  heading: 'Goose Effects',
  standfirst: 'Tres pedales propios: el Texas Flood, el Crossfire y el Gooseboost.',
  body: [
    'Los tres empezaron como series muy limitadas hechas a mano, cableadas una a una sobre placas de turrets. Ahora se están rehaciendo para poder fabricarlos en cantidades de verdad y que lleguen a más gente.',
    'Todos llevan diodos y transistores Toshiba originales. Eso no cambia con la nueva serie.',
    'Ese trabajo está en marcha, así que ninguno de los tres está a la venta todavía. Pronto habrá noticias.',
  ],

  status: 'En fabricación',
  parts: 'Diodos y transistores Toshiba originales',
  domainLabel: 'En la red',

  pedalsKicker: 'Lo que viene',
  pedalsHeading: 'Los tres pedales',
  playersLabel: 'Lo tocan',

  pedals: [
    {
      name: 'Texas Flood',
      detail: 'Overdrive',
      body:
        'Un overdrive muy modificado, hecho para los tonos de Stevie Ray Vaughan con una Stratocaster. Las pastillas de bobina simple siempre piden un poco de ayuda antes de llegar al amplificador, y éste se la da sin cambiar el sonido de la guitarra. Se hicieron unos treinta a mano antes de la nueva serie.',
      players: 'Rick Vito',
      image: 'texas-flood.jpg',
    },
    {
      name: 'Crossfire',
      detail: 'Overdrive, basado en el TS-10',
      body:
        'Un TS-10 en el fondo, con las modificaciones de Keeley y de Landgraff y alguna mía encima. Hecho para encajar delante del Filmosound mejor que el original. El esqueleto se reconoce. El sonido no.',
      players: '',
      image: 'crossfire.jpg',
    },
    {
      name: 'Gooseboost',
      detail: 'Booster limpio, un solo mando',
      body:
        'Un mando, y el mando es el volumen. En una caja de cebra, para que no haya confusión en un escenario oscuro. Lo uso con la Coodercaster, con las Guyatone y con un ngoni: instrumentos de pastillas de salida baja que necesitan una señal más fuerte para sonar al nivel de una guitarra con humbuckers. Hace eso y nada más.',
      players: '',
      image: '',
    },
  ],

  price: '',
  buyHref: '',
  notifyCopy:
    'Ninguno de los tres está a la venta mientras se rehacen para fabricación. Escríbeme y te aviso cuando estén listos.',
};

/* -------------------------------------------------------------------------- */

export const shop = {
  heading: 'Tienda',
  intro: 'Discos, una camiseta y los pedales. Todo se envía desde el Reino Unido.',
  items: [
    { name: 'I Left My Blues In Cuba', variant: 'CD', price: '£12', href: '', note: 'Firmado si lo pides.' },
    { name: 'I Left My Blues In Cuba', variant: 'Vinilo', price: '£28', href: '', note: 'En preparación. Habrá prensaje.' },
    {
      name: 'Camiseta The Compadres',
      variant: 'Negra, de la S a la XXL',
      price: '£25',
      href: '',
      image: 'tshirt-compadres-black.jpg',
      note: 'Algodón negro, estampado blanco, congas en lugar de la guitarra.',
    },
    {
      name: 'Camiseta The Compadres',
      variant: 'Natural, de la S a la XXL',
      price: '£25',
      href: '',
      image: 'tshirt-compadres.jpg',
      note: 'Algodón natural, estampada con la Guyatone y las palmeras.',
    },
    { name: 'Goose Effects', variant: 'Pedales', price: '', href: '/goose-pedal', note: 'Texas Flood, Crossfire y Gooseboost. En fabricación. Apúntate a la lista.' },
  ].map((rec, i) => ({
    // Las fotos viven en site.js: aquí se recogen por posición para no tener
    // que añadir cada imagen dos veces. Las dos listas van en el mismo orden.
    ...shopEn.items[i],
    ...rec,
  })),
};

/* -------------------------------------------------------------------------- */

export const video = {
  heading: 'Vídeo',
  intro: 'La banda, el catálogo anterior, y el canal de historia de la guitarra. Todo está en YouTube.',
  channels: [
    {
      name: 'Ramon Goose',
      handle: '@RamonGoose',
      href: 'https://www.youtube.com/@RamonGoose',
      body: 'Mi propio canal. The Compadres, el repertorio cubano, y todo lo anterior.',
      cta: 'Suscribirse',
    },
    {
      name: 'The Guitar Show',
      handle: '@TheGuitarShow',
      href: 'https://youtube.com/@TheGuitarShow',
      body: 'Documentales largos sobre las guitarras, los amplificadores y los efectos de los músicos que definieron la guitarra eléctrica: Clapton, Hendrix, Peter Green, Page, Gary Moore, Rory Gallagher y los demás. Narrados y hechos por mí. Unos 57.000 suscriptores y 500 vídeos.',
      cta: 'Suscribirse',
    },
  ],
  groups: [
    {
      title: 'The Compadres',
      kicker: 'La banda',
      items: [
        { id: 'tT7OeHMAESg', title: 'Alto Boniato' },
        { id: 'QXDiARNrddM', title: 'Los Rumberos, en directo en Londres' },
        { id: 'uVi783Bd7CQ', title: 'Crouch End Festival: Ali Farka Touré se encuentra con el Buena Vista' },
        { id: 'PE7XhnOdAb8', title: 'La Movedora, guitarra de cumbia' },
      ],
    },
    {
      title: 'En Cuba',
      kicker: 'Santiago',
      items: [
        { id: 'fPHPfym4jB0', title: 'Black Magic Woman de Peter Green, grabada en Cuba' },
        { id: 'qML77DFw6is', title: 'Tocando Black Magic Woman en Cuba' },
        { id: 'CygeLUElt1Y', title: 'Rick Vito y Alejandro Almenares: Échale Salsita' },
        { id: 'VlCJ7FkIIDw', title: 'Bolero cubano con Nancy Maura' },
        { id: 'm3LgcY-gOms', title: 'Trova con Alejandro Almenares' },
        { id: 'HEeGp-I6c0c', title: 'Leyenda de la música de Santiago de Cuba: documental' },
      ],
    },
    {
      title: 'El equipo',
      kicker: 'Lo que hizo el sonido',
      items: [{ id: 'YMCKz5TC_fg', title: 'Repaso del equipo, desde Cuba' }],
    },
  ],
};

/* -------------------------------------------------------------------------- */

export const bio = {
  heading: 'Biografía',
  short:
    'Ramon Goose es un guitarrista inglés que trabaja en la música cubana. Nacido en Colchester en 1975, ha pasado treinta años sacando la guitarra eléctrica del blues: por África occidental con el West African Blues Project, y ahora por Santiago de Cuba con The Compadres, cuyo disco I Left My Blues In Cuba se grabó en los Estudios EGREM.',
  longHeading: 'A dónde se fue el blues',
  long: [
    'Ramon Goose es guitarrista, cantante y productor inglés, nacido en Colchester en 1975 y tocando profesionalmente desde los años noventa. Ha pasado esa carrera llevando la guitarra eléctrica fuera del blues y hacia todo lo que el blues tocó: hip-hop y guitarra del Delta con NuBlues, Misisipi vía Malí con el West African Blues Project, y ahora el son y la guajira del oriente cubano.',
    'Desde 2023 ese trabajo ha sido con The Compadres, una banda cubana. El disco nuevo se grabó en EGREM, en Santiago de Cuba, el estudio que está en el centro de la historia grabada de la isla, y se nota. Un segundo disco, con el guitarrista trovador santiaguero Alejandro Almenares, sigue en proceso.',
    'La guitarra eléctrica cubana es un campo pequeño con una historia larga y muy pocos músicos que lleguen a ella desde el blues. Ése es el terreno sobre el que se apoya este trabajo.',
  ],
  press: [
    { label: 'Con base en', value: 'Londres y La Habana' },
    { label: 'Disco actual', value: 'I Left My Blues In Cuba' },
    { label: 'Sello', value: 'ZOHO Records, Nueva York' },
    { label: 'Formaciones', value: 'Trío en Inglaterra, quinteto en Santiago de Cuba' },
  ],
  downloads: [
    { label: 'Foto de prensa en alta resolución', href: '' },
    { label: 'Dossier (PDF)', href: '' },
  ],
};

/* -------------------------------------------------------------------------- */

/** The photographs are the same files; only the captions change. */
export const gallery = {
  heading: 'Galería',
  intro: 'Guitarras, amplificadores, el taller y la carretera.',
  photos: galleryEn.photos,
};

/* -------------------------------------------------------------------------- */

export const contact = {
  heading: 'Contacto',
  intro: 'Directo, y contesto mi propio correo.',
  routes: [
    {
      title: 'Contratación de conciertos',
      body: 'Festivales, clubes y eventos privados, en formato de trío o de banda completa.',
      email: 'james.wpdesign@gmail.com',
    },
    {
      title: 'Prensa y radio',
      body: 'Entrevistas, copias para reseña y fotografías en alta resolución.',
      email: 'james.wpdesign@gmail.com',
    },
    {
      title: 'Todo lo demás',
      body: 'Sesiones, producción, clases, o los pedales.',
      email: 'james.wpdesign@gmail.com',
    },
  ],
};

/* -------------------------------------------------------------------------- */

export const nav = [
  { label: 'Música', href: '/music' },
  { label: 'En directo', href: '/tour' },
  { label: 'La banda', href: '/band' },
  { label: 'Cuba', href: '/cuba' },
  { label: 'Equipo', href: '/gear' },
  { label: 'Goose Effects', href: '/goose-pedal' },
  { label: 'Galería', href: '/gallery' },
  { label: 'Vídeo', href: '/video' },
  { label: 'Tienda', href: '/shop' },
  { label: 'Biografía', href: '/bio' },
  { label: 'Contacto', href: '/contact' },
];

/* -------------------------------------------------------------------------- */

export const forSale = {
  heading: 'Copias firmadas, directas de mí',
  intro:
    'Tengo cajas de estos dos discos. Doce libras cada uno, con el envío incluido, y los firmo antes de mandarlos.',
  price: '£12',
  priceNote: 'con el envío incluido',

  paypal: forSaleEn.paypal,
  badge: 'CD firmado',
  paypalLabel: 'Pagar £12 con PayPal',

  items: [
    {
      ...forSaleEn.items[0],
      label: 'Riverboat Records / World Music Network',
      shopNote: 'Blues y ritmos saharianos, grabado entre Londres y Marrakech. Firmado.',
      blurb:
        'Grabado entre Londres y Marrakech: mi banda de un lado, músicos bereberes del otro. Justin Adams toca la guitarra y Najma Akhtar canta en urdu. Ritmos saharianos por debajo del blues antiguo, Skip James y John Lee Hooker y R. L. Burnside, y varias canciones sobre gente que cruza fronteras: refugiados, contrabandistas, el riesgo y la libertad que hay en ello. Tiznit es un pueblo del sur de Marruecos.',
    },
    {
      ...forSaleEn.items[1],
      label: 'Acoustic Music Records',
      shopNote: 'Acústico en solitario, doce temas de púa y slide. Firmado.',
      blurb:
        'Un disco acústico en solitario para el sello alemán Acoustic Music: doce temas, unos tradicionales y otros míos. Police Dog Blues está ahí por Blind Blake, junto a I Want Jesus To Walk With Me, Take Me Out The City y Going Home. Púa y slide, un hombre y una guitarra, sin banda detrás de la que esconderse.',
    },
  ],
};

/* -------------------------------------------------------------------------- */

export const bassGear = {
  ...bassGearEn,
  heading: 'El equipo de Joe',
  intro:
    'Joe Goose toca el bajo en los Compadres ingleses y lleva el canal Bass Guitar Show. Esto es lo que usa, sacado de sus propios vídeos.',
  channelLabel: 'The Bass Guitar Show',
  channelBlurb:
    'Joe lleva el Bass Guitar Show, donde enseña y da consejos a bajistas que empiezan y a los de nivel intermedio. Los vídeos de los que salen estos clips están todos allí.',
  watchLabel: 'Ver en YouTube',
  groups: [
    {
      group: 'Los bajos',
      items: [
        {
          ...bassGearEn.groups[0].items[0],
          spec: 'Cuatro cuerdas · cuerpo de fresno · su bajo principal',
          note: 'El marrón, y el que hace casi todo el trabajo. Un cuatro cuerdas de la primera serie de TRB, con el cuerpo de fresno gastado hasta la madera de tantos años tocándolo. Las pastillas no son las de fábrica.',
        },
        {
          ...bassGearEn.groups[0].items[1],
          spec: 'Cuatro cuerdas · hecho en Japón · fresno · diapasón de palisandro',
          note: 'El segundo TRB, el de repuesto: el mismo modelo, sin trastes. Fabricado en Japón, cuerpo de fresno, mástil de palisandro. Joe llama a los dos sus Mark One.',
        },
        {
          ...bassGearEn.groups[0].items[2],
          spec: 'Sin pala · mástil pasante de grafito · años ochenta',
          note: 'Un bajo inglés sin pala de los años ochenta, construido sobre un mástil de grafito que recorre el instrumento entero, con alas de madera veteada a los lados. Status es ese sonido que mucha gente identifica con los ochenta sin saber el nombre.',
        },
        {
          ...bassGearEn.groups[0].items[3],
          spec: 'Azul perla · hecho a mano en Birmingham',
          note: 'El bajo de Mark King: el modelo que John Diggins construyó para Level 42, que es la razón por la que casi todo el mundo reconoce esa forma. El de Joe es azul perla.',
        },
      ],
    },
    {
      group: 'El equipo',
      items: [
        {
          ...bassGearEn.groups[1].items[0],
          spec: 'Apilados, con la cabeza encima',
          note: 'Barefaced fabrica pantallas muy ligeras en Brighton, algo que importa más de lo que parece cuando hay que subir el equipo por las escaleras de un pub de Londres. Joe usa dos, una sobre otra, con una pedalera delante.',
        },
      ],
    },
  ],
};
