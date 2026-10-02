const fs = require('fs');

const generateGallery = () => {
    let images = [];
    let id = 1;

    // Splitsvilla Costumes
    for(let i = 1; i <= 24; i++) {
        images.push({
            id: 'g' + (id++),
            src: '/images/splits-costume-' + i + '.png',
            alt: 'Splitsvilla X6 Outfit ' + i,
            category: 'splitsvilla',
            caption: 'Splitsvilla X6 Outfit ' + i,
            source: '@akankshachoudhary_official',
            sourceUrl: 'https://www.instagram.com/akankshachoudhary_official/'
        });
    }

    // Pageants
    const pageantImgs = [
        { src: '/images/miss-rajasthan-crown.png', alt: 'Miss Rajasthan Crown' },
        { src: '/images/miss-universe-gown.png', alt: 'Miss Universe Evening Gown' },
        { src: '/images/miss-universe-national-costume.png', alt: 'Miss Universe National Costume' },
        { src: '/images/pageant-crown.png', alt: 'Pageant Crown' },
        { src: '/images/pageant-stage.png', alt: 'Pageant Stage' }
    ];
    pageantImgs.forEach(img => {
        images.push({
            id: 'g' + (id++),
            src: img.src,
            alt: img.alt,
            category: 'pageant',
            caption: img.alt,
            source: '@akankshachoudhary_official',
            sourceUrl: 'https://www.instagram.com/akankshachoudhary_official/'
        });
    });

    // Lock Upp
    const lockUppImgs = [
        { src: '/images/lock-upp-entry.png', alt: 'Lock Upp Entry' },
        { src: '/images/lock-upp-fan-favourite.png', alt: 'Lock Upp Fan Favourite' }
    ];
    lockUppImgs.forEach(img => {
        images.push({
            id: 'g' + (id++),
            src: img.src,
            alt: img.alt,
            category: 'lockupp',
            caption: img.alt,
            source: '@akankshachoudhary_official',
            sourceUrl: 'https://www.instagram.com/akankshachoudhary_official/'
        });
    });

    // Modeling
    const modelingImgs = [
        { src: '/images/modeling-ethnic.png', alt: 'Ethnic Modeling' },
        { src: '/images/modeling-runway.png', alt: 'Runway Modeling' }
    ];
    modelingImgs.forEach(img => {
        images.push({
            id: 'g' + (id++),
            src: img.src,
            alt: img.alt,
            category: 'modeling',
            caption: img.alt,
            source: '@akankshachoudhary_official',
            sourceUrl: 'https://www.instagram.com/akankshachoudhary_official/'
        });
    });

    // Music
    const musicImgs = [
        { src: '/images/eyes.png', alt: 'EYES Music Video' },
        { src: '/images/dooriyan.png', alt: 'Dooriyan Music Video' },
        { src: '/images/nazar-lagi.png', alt: 'Nazar Lagi Music Video' },
        { src: '/images/aankhon-mein-teri.png', alt: 'Aankhon Mein Teri Music Video' },
        { src: '/images/naa-pushde.png', alt: 'Naa Pushde Music Video' }
    ];
    musicImgs.forEach(img => {
        images.push({
            id: 'g' + (id++),
            src: img.src,
            alt: img.alt,
            category: 'music',
            caption: img.alt,
            source: '@akankshachoudhary_official',
            sourceUrl: 'https://www.instagram.com/akankshachoudhary_official/'
        });
    });

    let dataFile = fs.readFileSync('src/lib/data.ts', 'utf8');
    const regex = /export const GALLERY_IMAGES: GalleryImage\[\] = \[[\s\S]*?\];/;
    const replacement = 'export const GALLERY_IMAGES: GalleryImage[] = ' + JSON.stringify(images, null, 2) + ';';
    
    // Remove quotes around object keys to keep it somewhat clean, though not strictly required in ts
    let newFile = dataFile.replace(regex, replacement);
    fs.writeFileSync('src/lib/data.ts', newFile, 'utf8');
}

generateGallery();
