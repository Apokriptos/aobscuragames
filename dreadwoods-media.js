'use strict';
(() => {
  const game = window.PORTFOLIO?.games?.find(item => item.id === 'dreadwoods');
  if (!game) return;

  // Public Drive images need Google's direct image-delivery host when embedded
  // from GitHub Pages. The regular Drive /uc route can return a viewer/403.
  const driveImage = id => `https://lh3.googleusercontent.com/d/${id}`;

  const witch = driveImage('1JXV2LTFu9RRzxJKriEDn1CmwnGsH9nz_');
  const beast = driveImage('1Lry793vaEB870l4ydgbns-Iw70NoQ_K_');
  const barbol = driveImage('1F6-KgtG-nQst5fn0qf_wVSdboGPnpgV3');
  const masks = driveImage('1wp1ffb7LSALs_aRmURCnXk8gkm1KOIEU');

  // MAIN video preview = Witch.
  game.video = {
    ...game.video,
    poster: witch
  };

  // PLAY preview = Beast.
  game.play = game.play || {};
  game.play.build = {
    ...(game.play.build || {}),
    poster: beast
  };

  // Final six-image gallery: four new concepts + the two requested legacy shots.
  game.images = [
    {src: witch, alt: 'Dreadwoods — the Witch in the forest', caption: ''},
    {src: beast, alt: 'Dreadwoods — the Beast emerging from the dark', caption: ''},
    {src: barbol, alt: 'Dreadwoods — dialogue with Barbol', caption: ''},
    {src: masks, alt: 'Dreadwoods — supernatural masks among twisted roots', caption: ''},
    {src: 'media/dreadwoods/ScreenShot00007.png', alt: 'Dreadwoods — boat in the woods', caption: ''},
    {src: 'media/dreadwoods/ScreenShot00011.png', alt: 'Dreadwoods — entrance to the crypt', caption: ''}
  ];
})();
