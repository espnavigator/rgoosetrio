import { bio, identity, music, sameAs, site, tour } from '@/content/site';

/**
 * Schema.org structured data.
 *
 * This is the invisible block of machine-readable facts Google reads to work out
 * that the Ramon Goose on this site is the same Ramon Goose on Wikipedia, on
 * Wikidata and on the streaming services — one person with one body of work,
 * rather than several people who happen to share a name. The "sameAs" list is
 * what does that job, so it is worth keeping it filled in and accurate.
 */
export default function JsonLd() {
  const person = {
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.artist,
    alternateName: 'Ramón Goose',
    url: site.url,
    description: site.description,
    jobTitle: identity.jobTitle,
    nationality: identity.nationality,
    birthPlace: identity.birthPlace,
    knowsAbout: identity.genres,
    sameAs: sameAs(),
  };

  const band = {
    '@type': 'MusicGroup',
    '@id': `${site.url}/#band`,
    name: site.band,
    url: site.url,
    genre: identity.genres,
    member: { '@id': `${site.url}/#person` },
    foundingDate: '2023',
    album: {
      '@type': 'MusicAlbum',
      name: music.featured.title,
      byArtist: { '@id': `${site.url}/#band` },
      recordLabel: 'ZOHO Records',
      numTracks: music.featured.tracks.length,
      image: `${site.url}/images/i-left-my-blues-in-cuba.jpg`,
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: `${site.artist} — ${site.tagline}`,
    description: bio.short,
    inLanguage: 'en-GB',
    publisher: { '@id': `${site.url}/#person` },
  };

  // Upcoming gigs, so Google can show them as events. Only dates that are
  // actually filled in are described — a half-written placeholder would be
  // published to search engines as a real booking, which it is not.
  const events = tour.upcoming
    .filter((g) => g.date && g.venue && !g.venue.trimStart().toUpperCase().startsWith('TODO'))
    .map((g) => ({
      '@type': 'MusicEvent',
      name: `${site.band} at ${g.venue}`,
      startDate: g.date,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      performer: { '@id': `${site.url}/#band` },
      location: {
        '@type': 'Place',
        name: g.venue,
        address: {
          '@type': 'PostalAddress',
          addressLocality: g.city || undefined,
          addressCountry: g.country || undefined,
        },
      },
      ...(g.tickets ? { offers: { '@type': 'Offer', url: g.tickets } } : {}),
    }));

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [person, band, website, ...events],
  };

  return (
    <script
      type="application/ld+json"
      // The content is our own static object, not anything a visitor can supply.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
