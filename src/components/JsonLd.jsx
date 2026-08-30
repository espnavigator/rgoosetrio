import { bio, identity, music, sameAs, site } from '@/content/site';

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
      recordLabel: 'Zozo Records',
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

  const graph = { '@context': 'https://schema.org', '@graph': [person, band, website] };

  return (
    <script
      type="application/ld+json"
      // The content is our own static object, not anything a visitor can supply.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
