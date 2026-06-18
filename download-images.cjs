const fs = require('fs');
const https = require('https');
const path = require('path');

const images = {
  'hero-studio.jpg': 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=1920',
  'course-photography.jpg': 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
  'course-cinematography.jpg': 'https://images.unsplash.com/photo-1589834164101-705a109a96ea?auto=format&fit=crop&q=80&w=800',
  'course-lighting.jpg': 'https://images.unsplash.com/photo-1502570081830-18451842828b?auto=format&fit=crop&q=80&w=800',
  'course-editing.jpg': 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
  'student-portrait.jpg': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
  'student-event.jpg': 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800',
  'student-product.jpg': 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800',
  'student-landscape.jpg': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
  'student-bts.jpg': 'https://images.unsplash.com/photo-1517409257604-031fbc94baf6?auto=format&fit=crop&q=80&w=800',
  'rohan-berde.jpg': 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=800',
  'abhay-tiwari.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
};

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

Object.entries(images).forEach(([filename, url]) => {
  const filePath = path.join(dir, filename);
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      https.get(res.headers.location, (res2) => {
        const writeStream = fs.createWriteStream(filePath);
        res2.pipe(writeStream);
      });
    } else {
      const writeStream = fs.createWriteStream(filePath);
      res.pipe(writeStream);
    }
  });
});
console.log('Downloading images...');
