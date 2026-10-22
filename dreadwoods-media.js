'use strict';
(() => {
  const game = window.PORTFOLIO?.games?.find(item => item.id === 'dreadwoods');
  if (!game) return;

  const driveImage = id => `https://drive.google.com/uc?export=view&id=${id}`;

  const witch = driveImage('1JXV2LTFu9RRzxJKriEDn1CmwnGsH9nz_');
  const beast = driveImage('1Lry793vaEB870l4ydgbns-Iw70NoQ_K_');
  const barbol = driveImage('1F6-KgtG-nQst5fn0qf_wVSdboGPnpgV3');
  const masks = driveImage('1wp1ffb7LSALs_aRmURCnXk8gkm1KOIEU');

  game.video = {
    ...game.video,
    poster: witch
  };

  game.play = game.play || {};
  game.play.build = {
    ...(game.play.build || {}),
    poster: beast
  };

  game.images = [
    {src: witch, alt: 'Dreadwoods — the Witch in the forest', caption: ''},
    {src: beast, alt: 'Dreadwoods — the Beast emerging from the dark', caption: ''},
    {src: barbol, alt: 'Dreadwoods — dialogue with Barbol', caption: ''},
    {src: masks, alt: 'Dreadwoods — supernatural masks among twisted roots', caption: ''},
    {src: 'media/dreadwoods/ScreenShot00007.png', alt: 'Dreadwoods — environment screenshot', caption: ''},
    {src: 'media/dreadwoods/ScreenShot00011.png', alt: 'Dreadwoods — environment screenshot', caption: ''}
  ];
})();
