import React from 'react';
import { createRoot } from 'react-dom/client';
import Palette from './components/Palette';
import './style.css';

// Původní zadání - data natvrdo zadané do aplikace
// const App = () => {
//   return (
//     <div className="container">
//       <header>
//         <h1>Barevné palety</h1>
//       </header>
//       <main>
//         <div className="palette">
//           <div className="palette-scheme palette-scheme--vertical">
//             <img className="scheme-image" src="/img/mimosa-retreat.jpg" alt="Mimosa Retreat" />
//             <div className="scheme-colors">
//               <div className="scheme-color" style={{ backgroundColor: '#583e26' }} >#583e26</div>
//               <div className="scheme-color" style={{ backgroundColor: '#a78b71' }} >#a78b71</div>
//               <div className="scheme-color" style={{ backgroundColor: '#f7c815' }} >#f7c815</div>
//               <div className="scheme-color" style={{ backgroundColor: '#ec9704' }} >#ec9704</div>
//               <div className="scheme-color" style={{ backgroundColor: '#9c4a1a' }} >#9c4a1a</div>
//             </div>
//           </div>
//           <div className="palette-info">
//             <h2>Mimose Retreat</h2>
//             <p>Brown, combined with shades of yellow, is a rather unusual combination that can be called really sweet. It is both citrusy, caramel, and has a slight hint of cinnamon, which gives it a special versatility. In summer it will invigorate, make you act and move, and in winter it will warm and relax.</p>

//             <p>Photo by <a href="https://unsplash.com/photos/XkiONXX7i4o" target="_blank">Sara Cervera</a>.</p>
//           </div>
//         </div>
        
//         <div className="palette">
//           <div className="palette-scheme palette-scheme--horizontal">
//             <img className="scheme-image" src="/img/ocean-waves.jpg" alt="Ocean Waves" />
//             <div className="scheme-colors">
//               <div className="scheme-color" style={{ backgroundColor: '#012e4a' }} >#012e4a</div>
//               <div className="scheme-color" style={{ backgroundColor: '#036280' }} >#036280</div>
//               <div className="scheme-color" style={{ backgroundColor: '#378ba4' }} >#378ba4</div>
//               <div className="scheme-color" style={{ backgroundColor: '#81bece' }} >#81bece</div>
//               <div className="scheme-color" style={{ backgroundColor: '#e8ede7' }} >#e8ede7</div>
//             </div>
//           </div>
//           <div className="palette-info">
//             <h2>Ocean Waves</h2>
//             <p>Wildlife has given humanity an indescribable variety of color shades that, at first glance, cannot be combined for balance. However, the combination of dark greens canonically turns into a bright light green shade, growing into banana yellow. From the yellow tones, a sudden rich pink breaks through.</p>

//             <p>Photo by <a href="https://unsplash.com/photos/wc9avd2RaN0" target="_blank">Christoffer Engström</a>.</p>
//           </div>
//         </div>
//       </main>
//       <footer>
//         <p>Czechitas, Digitální akademie: Web</p>
//       </footer>
//     </div>
//   );
// };

const palettes = [
  {
    name: 'Mimosa Retreat',
    image: '/img/mimosa-retreat.jpg',
    attribution: {
      name: 'Sara Cervera',
      url: 'https://unsplash.com/photos/XkiONXX7i4o',
    },
    colors: ['#583e26', '#a78b71', '#f7c815', '#ec9704', '#9c4a1a'],
    direction: 'vertical',
    description: 'Brown, combined with shades of yellow, is a rather unusual combination that can be called really sweet. It is both citrusy, caramel, and has a slight hint of cinnamon, which gives it a special versatility. In summer it will invigorate, make you act and move, and in winter it will warm and relax.',
  },
  {
    name: 'Ocean Waves',
    image: '/img/ocean-waves.jpg',
    attribution: {
      name: 'Christoffer Engström',
      url: 'https://unsplash.com/photos/wc9avd2RaN0',
    },
    colors: ['#012e4a', '#036280', '#378ba4', '#81bece', '#e8ede7'],
    direction: 'horizontal',
    description: 'Wildlife has given humanity an indescribable variety of color shades that, at first glance, cannot be combined for balance. However, the combination of dark greens canonically turns into a bright light green shade, growing into banana yellow. From the yellow tones, a sudden rich pink breaks through.',
  },
  {
    name: 'Santorini',
    image: '/img/santorini.jpg',
    attribution: {
      name: 'Jonathan Gallegos',
      url: 'https://unsplash.com/photos/L2ZM1TbOO-8',
    },
    colors: ['#16354d', '#6b99c3', '#d2d2d4', '#e4e5ea', '#0c151c'],
    direction: 'vertical',
    description: 'Do not know how to combine rigor, tenderness, perseverance and determination in one male image? Then use this palette. Dark blue and black will give the image confidence, denim blue – romanticism and mystery, and gray tones – lightness and freedom. No one can resist such a decision.',
  },
  {
    name: 'Night Sky',
    image: '/img/night-sky.jpg',
    attribution: {
      name: 'kazuend',
      url: 'https://unsplash.com/photos/2KXEb_8G5vo',
    },
    colors: ['#8689ac', '#587099', '#3f5576', '#2f3148', '#101116'],
    direction: 'vertical',
    description: 'A nightly and mysterious combination of shades of blue, which includes pale blue, green-blue, midnight blue, personifies the word “mystery”. But this riddle is permeated with a cold that penetrates deep into your mind, preventing you from getting too close to understanding what this palette is fraught with and why it sinks into your head so much.',
  },
];


const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map((palette) => 
        <Palette key={palette.name} paletteData={palette} />
        )}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};


createRoot(
  document.querySelector('#app'),
).render(<App />);
