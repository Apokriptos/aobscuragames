/* All meeting copy and media live here. Paths are relative to index.html.
   Drop files into media/<game-id>/ and replace empty src values below.
   File video: { type: 'file', src: 'media/hollow-graves/hero.mp4', poster: '...', captions: '...vtt' }
   Embedded video: { type: 'embed', src: 'https://www.youtube-nocookie.com/embed/VIDEO_ID', poster: '...' }
   Use a player/embed URL, not a regular watch/share page. Embeds load only after a click.
   Empty src means an intentional placeholder. Broken files also fall back gracefully.
   Up to four images are supported. Do not add games: this EVA edition has exactly three. */
window.PORTFOLIO = {
  identity: {
    name: 'Santiago Pérez Losanovscky',
    descriptor: 'Game & Systems Designer',
    email: 'santiagolovsky@gmail.com',
    linkedin: 'https://www.linkedin.com/in/santiago-perez-losanovscky-a91877172',
    instagram: '',
    website: ''
  },
  games: [
    {
      id: 'hollow-graves', title: 'HOLLOW GRAVES',
      subtitle: 'Systemic sci-fi / investigation horror.',
      description: 'Systemic sci-fi / investigation horror.',
      engine: 'Unreal Engine', genre: 'Investigation horror', status: '',
      video: { type: 'file', src: '', poster: '', captions: '', label: 'Gameplay video' },
      images: [
        { src: '', alt: 'Hollow Graves — representative image 01', caption: '' },
        { src: '', alt: 'Hollow Graves — representative image 02', caption: '' },
        { src: '', alt: 'Hollow Graves — representative image 03', caption: '' }
      ]
    },
    {
      id: 'reditus-umbrae', title: 'REDITUS UMBRAE',
      subtitle: 'Dark action. Combat, animation and technical implementation.',
      description: 'A dark action prototype focused on combat, animation and technical implementation.',
      engine: '', genre: 'Dark action', status: 'Prototype',
      video: { type: 'file', src: '', poster: '', captions: '', label: 'Gameplay video' },
      images: [
        { src: '', alt: 'Reditus Umbrae — representative image 01', caption: '' },
        { src: '', alt: 'Reditus Umbrae — representative image 02', caption: '' },
        { src: '', alt: 'Reditus Umbrae — representative image 03', caption: '' }
      ]
    },
    {
      id: 'dreadwoods', title: 'DREADWOODS',
      subtitle: 'Dark folkloric survival horror.',
      description: 'Dark folkloric survival horror.',
      engine: '', genre: 'Survival horror', status: '',
      video: { type: 'file', src: '', poster: '', captions: '', label: 'Gameplay video' },
      images: [
        { src: '', alt: 'Dreadwoods — representative image 01', caption: '' },
        { src: '', alt: 'Dreadwoods — representative image 02', caption: '' },
        { src: '', alt: 'Dreadwoods — representative image 03', caption: '' }
      ]
    }
  ]
};
