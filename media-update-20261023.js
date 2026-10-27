'use strict';
(() => {
  const games = window.PORTFOLIO?.games;
  if (!Array.isArray(games)) return;

  const hollow = games.find(game => game.id === 'hollow-graves');
  const reditus = games.find(game => game.id === 'reditus-umbrae');
  const dreadwoods = games.find(game => game.id === 'dreadwoods');

  if (hollow?.video) {
    hollow.video.src = 'media/hollow-graves/Hollowgravesshowcasenew.mp4';
  }

  if (reditus?.video) {
    reditus.video.src = 'media/reditus-umbrae/Reditusumbraeshowcasenew.mp4';
  }

  if (dreadwoods) {
    dreadwoods.video = {
      ...(dreadwoods.video || {}),
      type: 'file',
      src: 'media/dreadwoods/Dreadwoods - Video - Final.mp4',
      poster: 'media/dreadwoods/DW_SS20.png',
      captions: '',
      label: 'Play gameplay reel'
    };

    dreadwoods.play = dreadwoods.play || {};
    dreadwoods.play.build = {
      ...(dreadwoods.play.build || {}),
      status: 'Playable build available',
      note: '',
      poster: 'media/dreadwoods/DW_SS5.png',
      url: 'https://drive.google.com/file/d/1yjH6Oi-ztkgb1dWLLasjnNVkFZPQVwDr/view?usp=sharing',
      provider: 'Google Drive'
    };

    dreadwoods.images = [
      {src:'media/dreadwoods/DW_SS11.png',alt:'Dreadwoods — gameplay screenshot 1',caption:''},
      {src:'media/dreadwoods/DW_SS2.png',alt:'Dreadwoods — gameplay screenshot 2',caption:''},
      {src:'media/dreadwoods/DW_SS9.png',alt:'Dreadwoods — gameplay screenshot 3',caption:''},
      {src:'media/dreadwoods/DW_SS24.png',alt:'Dreadwoods — gameplay screenshot 4',caption:''},
      {src:'media/dreadwoods/ScreenShot00007.png',alt:'Dreadwoods — gameplay screenshot 5',caption:''},
      {src:'media/dreadwoods/ScreenShot00000.png',alt:'Dreadwoods — gameplay screenshot 6',caption:''}
    ];
  }
})();
