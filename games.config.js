/* Edit copy, themes, logos and media here. Paths are relative to index.html.
   Empty media src = labeled placeholder. File video: {type:'file',src:'media/hollow-graves/hero.mp4',poster:'...',captions:'...vtt'}
   Embed video: {type:'embed',src:'https://www.youtube-nocookie.com/embed/VIDEO_ID',poster:'...'}
   Use embed/player URLs. Six gallery images by default. Decorative reference crops are NOT gameplay evidence. */
window.PORTFOLIO = {
  identity: {
    name:'Aobscura', descriptor:'EVA B2B · Games',
    logo:'assets/aobscura-logo-transparent.png', logoAlt:'Aobscura Games',
    email:'santiagolovsky@gmail.com', linkedin:'https://www.linkedin.com/in/santiago-p%C3%A9rez-losanovscky-a91877172',
    instagram:'', website:'' // Optional external portfolio/studio URL; hidden when empty.
  },
  themes: {
    hollow: {
      accent:'#08696e', sidebarAccent:'#77d6d8', pageBackground:'#e7eceb', sidebarBackground:'#071216',
      ink:'#152124', muted:'#53656a', line:'#a6b4b5', mediaBackground:'#17262b',
      headingFont:"'Cormorant Garamond', Georgia, serif", bodyFont:"'DM Sans', Arial, sans-serif", pitchFont:"'Libre Baskerville', Georgia, serif",
      decorativeTexture:'assets/themes/paper.svg?v=20261007d', decorativeMotif:'assets/themes/hollow-diagram.svg?v=20261007d',
      paperArtwork:'assets/themes/hollow-background-dark.webp', bindingArtwork:'assets/themes/hollow-binding.jpg', outerArtwork:'assets/themes/hollow-outer.jpg', edgeArtwork:'assets/themes/hollow-edges.svg', sidebarArtwork:'assets/themes/hollow-sidebar-restored.jpg', borderStyle:'solid'
    },
    reditus: {
      accent:'#932a26', sidebarAccent:'#c94a3c', pageBackground:'#eee3ce', sidebarBackground:'#180e0c',
      ink:'#241b17', muted:'#716457', line:'#b7a88b', mediaBackground:'#2b211d',
      headingFont:"'Cinzel', Georgia, serif", bodyFont:"'DM Sans', Arial, sans-serif", pitchFont:"'Libre Baskerville', Georgia, serif",
      decorativeTexture:'assets/themes/parchment.svg', decorativeMotif:'assets/themes/reditus-diagram.svg?v=20261007d',
      paperArtwork:'assets/themes/RU_BG_v3_x4.png', bindingArtwork:'assets/themes/reditus-binding.jpg', outerArtwork:'assets/themes/reditus-outer.jpg', edgeArtwork:'assets/themes/reditus-edges.svg', sidebarArtwork:'assets/themes/reditus-sidebar-refined.jpg', borderStyle:'solid'
    },
    dreadwoods: {
      accent:'#89342e', sidebarAccent:'#bb4c40', pageBackground:'#ebe2d2', sidebarBackground:'#14140f',
      ink:'#26221b', muted:'#716959', line:'#b5ac94', mediaBackground:'#252923',
      headingFont:"'Cormorant Garamond', Georgia, serif", bodyFont:"'DM Sans', Arial, sans-serif", pitchFont:"'Libre Baskerville', Georgia, serif",
      decorativeTexture:'assets/themes/parchment.svg', decorativeMotif:'assets/themes/dreadwoods-branches.svg?v=20261007d',
      paperArtwork:'assets/themes/DW_BG_v5.png', bindingArtwork:'assets/themes/dreadwoods-binding.jpg', outerArtwork:'assets/themes/dreadwoods-outer.jpg', edgeArtwork:'assets/themes/dreadwoods-edges.svg', sidebarArtwork:'assets/themes/dreadwoods-sidebar-clean.webp', borderStyle:'solid'
    }
  },
  games:[
    {
      id:'hollow-graves',theme:'hollow',title:'HOLLOW GRAVES',subtitle:'Sci-fi investigation ghost horror.',genre:'Sci-Fi Horror',status:'',
      logo:'assets/themes/hollow-logo.png',logoAlt:'Hollow Graves astral skull emblem',
      descriptionPrimary:'Take the role of a Thaumaturge aboard the space station Belerofonte III — face tormented spirits and visitors of dark realities as you uncover the truth before all is lost.',
      descriptionSecondary:'Make your way through the station as reality collapses into madness, facing an ever-evolving supernatural ecosystem determined to break you.',
      play: {
        premise: ["The specialized space station Belerofonte III has fallen silent. Only a fragmented S.O.S. broadcast was received. A novice thaumaturge named Cástor is sent to investigate, under suspicion of supernatural causes.","Yet Belerofonte III has always been hermetic, and its silence hides many secrets. Cástor must combine technological and esoteric knowledge to make his way through the isolated station, piecing together the tragedy that befell it: the fate of its crew, the rise of a mysterious blood-soaked cult, and the terrible implications of the ghostly manifestations taking root at the heart of it all. It is a race against time. Secret after secret, horror after horror, he must uncover the truth before this new, hollow reality drowns the station in darkness."],
        build: {status:'Build information pending', note:'Download access will be added here.', platform:'', architecture:'', updated:'', version:'', poster:'', url:'', provider:''}
      },
      documents: {
        pitch: {title:'Pitch Deck', label:'PITCH DECK', src:'media/hollow-graves/docs/pitch-deck.pdf', description:'A concise overview of Hollow Graves. Explore the vision, key features, world, and pillars.'},
        development: {title:'Development Plan', label:'DEVELOPMENT PLAN', src:'media/hollow-graves/docs/development-plan.pdf', description:'Development scope, production strategy, milestones and project needs.'},
        roadmap: {title:'Road Map', label:'ROAD MAP', src:'media/hollow-graves/docs/roadmap.pdf', description:'Development milestones and progression toward the next production stage.'}
      },
      video:{type:'file',src:'media/hollow-graves/HollowGravesShort.mp4',poster:'media/hollow-graves/MainPic.png',captions:'',label:'Play gameplay reel'},
      images:[
        {src:'media/hollow-graves/ScreenShot00000.png',alt:'Hollow Graves — gameplay screenshot 1',caption:''},
        {src:'media/hollow-graves/ScreenShot00001.png',alt:'Hollow Graves — gameplay screenshot 2',caption:''},
        {src:'media/hollow-graves/ScreenShot00002.png',alt:'Hollow Graves — gameplay screenshot 3',caption:''},
        {src:'media/hollow-graves/ScreenShot00003.png',alt:'Hollow Graves — gameplay screenshot 4',caption:''},
        {src:'media/hollow-graves/ScreenShot00005.png',alt:'Hollow Graves — gameplay screenshot 5',caption:''},
        {src:'media/hollow-graves/ScreenShot00006.png',alt:'Hollow Graves — gameplay screenshot 6',caption:''}
      ]
    },
    {
      id:'reditus-umbrae',theme:'reditus',title:'REDITUS UMBRAE',subtitle:'DARK FANTASY ROGUELITE',genre:'Action RPG',status:'',
      logo:'assets/themes/reditus-logo.png',logoAlt:'Reditus Umbrae flaming sword emblem',
      descriptionPrimary:'A dark fantasy roguelite focused on visceral combat, physics-based mechanics, and relentless action.',
      descriptionSecondary:'Cut your way through a nightmarish realm of eternal torment, find the architect of your cursed punishment, and pay for your sins.',
      play: {
        premise: ["Pain. Suffering. Sorrow. Torment. Blinded by duty, a nameless knight brought bloodshed and misery to a remote, foreign land, all in the name of faith. But the sins he committed seeped into the murky earth, and a curse was cast upon him.","Every time he wakes, it begins anew. The nightmare, all over again. He watches helplessly as the town burns, as the people wail, as everything crumbles. When darkness comes for his soul, he is cast once more into a shadowy land—a mockery of life, built from endless torment. Over and over he repeats the bloodshed, the horror, the agony; over and over he must fight his way toward the accursed witch who trapped him here."],
        build: {status:'Build information pending', note:'Download access will be added here.', platform:'', architecture:'', updated:'', version:'', poster:'', url:'', provider:''}
      },
      documents: {
        pitch: {title:'Pitch Deck', label:'PITCH DECK', src:'media/reditus-umbrae/Reditus Umbrae — Pitch Deck.pdf', description:'A concise overview of Reditus Umbrae. Explore the vision, key features, world, and pillars.'},
        development: {title:'Development Plan', label:'DEVELOPMENT PLAN', src:'media/reditus-umbrae/Reditus Umbrae — Development Plan.pdf', description:'Development scope, production strategy, milestones and project needs.'},
        roadmap: {title:'Road Map', label:'ROAD MAP', src:'media/reditus-umbrae/Reditus Umbrae — Roadmap 2026-2027.pdf', description:'Development milestones and progression toward the next production stage.'}
      },
      video:{type:'file',src:'media/reditus-umbrae/REDITUSSHORT.mp4',poster:'media/reditus-umbrae/ScreenShot00001.png',captions:'',label:'Play gameplay reel'},
      images:[
        {src:'media/reditus-umbrae/ScreenShot00001.png',alt:'Reditus Umbrae — gameplay screenshot 1',caption:''},
        {src:'media/reditus-umbrae/ScreenShot00002.png',alt:'Reditus Umbrae — gameplay screenshot 2',caption:''},
        {src:'media/reditus-umbrae/ScreenShot00003.png',alt:'Reditus Umbrae — gameplay screenshot 3',caption:''},
        {src:'media/reditus-umbrae/ScreenShot00004.png',alt:'Reditus Umbrae — gameplay screenshot 4',caption:''},
        {src:'media/reditus-umbrae/ScreenShot00005.png',alt:'Reditus Umbrae — gameplay screenshot 5',caption:''},
        {src:'media/reditus-umbrae/ScreenShot00006.png',alt:'Reditus Umbrae — gameplay screenshot 6',caption:''}
      ]
    },
    {
      id:'dreadwoods',theme:'dreadwoods',title:'DREADWOODS',subtitle:'Narrative-driven dark folkloric adventure.',genre:'Survival Horror',status:'',
      logo:'assets/themes/dreadwoods-logo.png',logoAlt:'Dreadwoods wolf and thorn emblem',
      descriptionPrimary:'Lost in a mysterious forest, you are hunted by a dark and terrible Beast. It is your fate to never see it out, yet, perhaps fate can be changed.',
      descriptionSecondary:'Explore the woods while dealing with its trickeries. Meet and gain the favor of its inhabitants. Find the Witch of the Dread.',
      play: {
        premise: ["Amidst barbed vines and obscure blossoms, a dark, twisted shape lurks. Wide, hollow white eyes. Razor-sharp teeth. The terror of the Dreadwoods, its name spoken only as a horrid whisper: the Beast.","Perhaps by bad luck, perhaps by destiny, you wandered too far from the dirt path through the woods. You could swear the exit should be close, yet every step only takes you deeper. And as night begins to fall, a dreadful realisation settles in: you have been fated. The Beast hunts you tonight, and you will not live to see the light of day. Unless, that is, you receive the aid of a most mysterious individual..."],
        build: {status:'Build information pending', note:'Download access will be added here.', platform:'', architecture:'', updated:'', version:'', poster:'', url:'', provider:''}
      },
      documents: {
        pitch: {title:'Pitch Deck', label:'PITCH DECK', src:'media/dreadwoods/Dreadwoods — Pitch Deck.pdf', description:'A concise overview of Dreadwoods. Explore the vision, key features, world, and pillars.'},
        development: {title:'Development Plan', label:'DEVELOPMENT PLAN', src:'media/dreadwoods/Dreadwoods — Development Plan.pdf', description:'Development scope, production strategy, milestones and project needs.'},
        roadmap: {title:'Road Map', label:'ROAD MAP', src:'media/dreadwoods/Dreadwoods — Roadmap.pdf', description:'Development milestones and progression toward the next production stage.'}
      },
      video:{type:'file',src:'media/dreadwoods/Dreadwoodseva.mp4',poster:'media/dreadwoods/Captura de pantalla 2026-10-11 221729.png',captions:'',label:'Play gameplay reel'},
      images:[
        {src:'media/dreadwoods/ScreenShot00000.png',alt:'Dreadwoods — gameplay screenshot 1',caption:''},
        {src:'media/dreadwoods/ScreenShot00001.png',alt:'Dreadwoods — gameplay screenshot 2',caption:''},
        {src:'media/dreadwoods/ScreenShot00003.png',alt:'Dreadwoods — gameplay screenshot 3',caption:''},
        {src:'media/dreadwoods/ScreenShot00004.png',alt:'Dreadwoods — gameplay screenshot 4',caption:''},
        {src:'media/dreadwoods/ScreenShot00007.png',alt:'Dreadwoods — gameplay screenshot 5',caption:''},
        {src:'media/dreadwoods/ScreenShot00011.png',alt:'Dreadwoods — gameplay screenshot 6',caption:''}
      ]
    }
  ]
};
