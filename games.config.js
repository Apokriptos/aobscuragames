/* Edit copy, themes, logos and media here. Paths are relative to index.html.
   Empty media src = labeled placeholder. File video: {type:'file',src:'media/hollow-graves/hero.mp4',poster:'...',captions:'...vtt'}
   Embed video: {type:'embed',src:'https://www.youtube-nocookie.com/embed/VIDEO_ID',poster:'...'}
   Use embed/player URLs. Six gallery images by default. Decorative reference crops are NOT gameplay evidence. */
window.PORTFOLIO = {
  identity: {
    name:'Aobscura', descriptor:'EVA B2B · Current games',
    logo:'assets/aobscura-logo-transparent.png', logoAlt:'Aobscura Games',
    email:'santiagolovsky@gmail.com', linkedin:'https://www.linkedin.com/in/santiago-perez-losanovscky-a91877172',
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
      paperArtwork:'assets/themes/RU_BG_v2.png', bindingArtwork:'assets/themes/reditus-binding.jpg', outerArtwork:'assets/themes/reditus-outer.jpg', edgeArtwork:'assets/themes/reditus-edges.svg', sidebarArtwork:'assets/themes/reditus-sidebar-refined.jpg', borderStyle:'solid'
    },
    dreadwoods: {
      accent:'#89342e', sidebarAccent:'#bb4c40', pageBackground:'#ebe2d2', sidebarBackground:'#14140f',
      ink:'#26221b', muted:'#716959', line:'#b5ac94', mediaBackground:'#252923',
      headingFont:"'Cormorant Garamond', Georgia, serif", bodyFont:"'DM Sans', Arial, sans-serif", pitchFont:"'Libre Baskerville', Georgia, serif",
      decorativeTexture:'assets/themes/parchment.svg', decorativeMotif:'assets/themes/dreadwoods-branches.svg?v=20261007d',
      paperArtwork:'assets/themes/DW_BG_v2.png', bindingArtwork:'assets/themes/dreadwoods-binding.jpg', outerArtwork:'assets/themes/dreadwoods-outer.jpg', edgeArtwork:'assets/themes/dreadwoods-edges.svg', sidebarArtwork:'assets/themes/dreadwoods-sidebar-clean.webp', borderStyle:'solid'
    }
  },
  games:[
    {
      id:'hollow-graves',theme:'hollow',title:'HOLLOW GRAVES',subtitle:'Systemic sci-fi investigation horror.',genre:'Sci-Fi Horror',status:'',
      logo:'assets/themes/hollow-logo.png',logoAlt:'Hollow Graves astral skull emblem',
      descriptionPrimary:'An investigation-horror experience across haunted systems, where forgotten worlds echo with an ancient astral corruption.',
      descriptionSecondary:'Uncover remnants of lost civilizations, descend into ritual spaces and confront entities beyond reality. Science, faith and the void intertwine.',
      documents: {
        pitch: {title:'Pitch Deck', label:'PITCH DECK', src:'media/hollow-graves/docs/pitch-deck.pdf', description:'A concise overview of Hollow Graves. Explore the vision, key features, world, and pillars.'},
        development: {title:'Development Plan', label:'DEVELOPMENT PLAN', src:'media/hollow-graves/docs/development-plan.pdf', description:'Development scope, production strategy, milestones and project needs.'},
        roadmap: {title:'Road Map', label:'ROAD MAP', src:'media/hollow-graves/docs/roadmap.pdf', description:'Development milestones and progression toward the next production stage.'}
      },
      video:{type:'file',src:'media/hollow-graves/HollowGravesShort.mp4',poster:'',captions:'',label:'Play gameplay reel'},
      images:Array.from({length:6},(_,i)=>({src:'',alt:`Hollow Graves — image ${i+1}`,caption:''}))
    },
    {
      id:'reditus-umbrae',theme:'reditus',title:'REDITUS UMBRAE',subtitle:'DARK FANTASY ROGUELITE',genre:'Action RPG',status:'',
      logo:'assets/themes/reditus-logo.png',logoAlt:'Reditus Umbrae flaming sword emblem',
      descriptionPrimary:'A dark fantasy roguelite focused on visceral combat, physic-based mechanics, and relentless action.',
      descriptionSecondary:'Cut your way through a nightmarish realm of eternal torment, find the architect of your cursed punishment, and pay for your sins.',
      documents: {
        pitch: {title:'Pitch Deck', label:'PITCH DECK', src:'media/reditus-umbrae/docs/pitch-deck.pdf', description:'A concise overview of Reditus Umbrae. Explore the vision, key features, world, and pillars.'},
        development: {title:'Development Plan', label:'DEVELOPMENT PLAN', src:'media/reditus-umbrae/docs/development-plan.pdf', description:'Development scope, production strategy, milestones and project needs.'},
        roadmap: {title:'Road Map', label:'ROAD MAP', src:'media/reditus-umbrae/docs/roadmap.pdf', description:'Development milestones and progression toward the next production stage.'}
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
      id:'dreadwoods',theme:'dreadwoods',title:'DREADWOODS',subtitle:'Dark folkloric survival horror.',genre:'Survival Horror',status:'',
      logo:'assets/themes/dreadwoods-logo.png',logoAlt:'Dreadwoods wolf and thorn emblem',
      descriptionPrimary:'Venture into a forgotten forest where ancient beliefs linger and something hunts between the trees. Scavenge, survive and uncover the truth behind a hidden celebration.',
      descriptionSecondary:'A dark folkloric survival horror rooted in local myths and traditions, blending atmospheric exploration with tense encounters.',
      documents: {
        pitch: {title:'Pitch Deck', label:'PITCH DECK', src:'media/dreadwoods/docs/pitch-deck.pdf', description:'A concise overview of Dreadwoods. Explore the vision, key features, world, and pillars.'},
        development: {title:'Development Plan', label:'DEVELOPMENT PLAN', src:'media/dreadwoods/docs/development-plan.pdf', description:'Development scope, production strategy, milestones and project needs.'},
        roadmap: {title:'Road Map', label:'ROAD MAP', src:'media/dreadwoods/docs/roadmap.pdf', description:'Development milestones and progression toward the next production stage.'}
      },
      video:{type:'file',src:'',poster:'',captions:'',label:'Gameplay video'},
      images:Array.from({length:6},(_,i)=>({src:'',alt:`Dreadwoods — image ${i+1}`,caption:''}))
    }
  ]
};
