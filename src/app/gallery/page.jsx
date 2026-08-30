import PageHeader from '@/components/PageHeader';
import { Txt } from '@/components/Txt';
import { asset } from '@/lib/asset';
import { gallery } from '@/content/site';

export const metadata = {
  title: 'Gallery',
  description: 'Photographs from Santiago de Cuba, Havana and the road.',
  alternates: { canonical: '/gallery/' },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader kicker="Photographs" title={gallery.heading} lead={gallery.intro} />

      <section className="section">
        <div className="container">
          {gallery.photos.length === 0 ? (
            <div className="empty-note">
              <p>
                The photographs go here. Drop the image files into{' '}
                <code>public/images/gallery/</code>, then list each file name and its
                caption in <code>src/content/site.js</code> under{' '}
                <code>gallery.photos</code>. The grid builds itself from that list.
              </p>
            </div>
          ) : (
            <div className="gallery-grid">
              {gallery.photos.map((photo) => (
                <figure key={photo.src} className="gallery-figure">
                  <img
                    src={asset(`/images/gallery/${photo.src}`)}
                    alt={photo.caption || ''}
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  {photo.caption && (
                    <figcaption>
                      <Txt>{photo.caption}</Txt>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
