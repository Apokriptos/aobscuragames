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
      paperArtwork:'assets/themes/hollow-paper.jpg', bindingArtwork:'assets/themes/hollow-binding.jpg', outerArtwork:'assets/themes/hollow-outer.jpg', edgeArtwork:'assets/themes/hollow-edges.svg', sidebarArtwork:'assets/themes/hollow-sidebar-restored.jpg', borderStyle:'solid'
    },
    reditus: {
      accent:'#932a26', sidebarAccent:'#c94a3c', pageBackground:'#eee3ce', sidebarBackground:'#180e0c',
      ink:'#241b17', muted:'#716457', line:'#b7a88b', mediaBackground:'#2b211d',
      headingFont:"'Cinzel', Georgia, serif", bodyFont:"'DM Sans', Arial, sans-serif", pitchFont:"'Libre Baskerville', Georgia, serif",
      decorativeTexture:'assets/themes/parchment.svg', decorativeMotif:'assets/themes/reditus-diagram.svg?v=20261007d',
      paperArtwork:'assets/themes/reditus-paper.jpg', bindingArtwork:'assets/themes/reditus-binding.jpg', outerArtwork:'assets/themes/reditus-outer.jpg', edgeArtwork:'assets/themes/reditus-edges.svg', sidebarArtwork:'assets/themes/reditus-sidebar-refined.jpg', borderStyle:'solid'
    },
    dreadwoods: {
      accent:'#89342e', sidebarAccent:'#bb4c40', pageBackground:'#ebe2d2', sidebarBackground:'#14140f',
      ink:'#26221b', muted:'#716959', line:'#b5ac94', mediaBackground:'#252923',
      headingFont:"'Cormorant Garamond', Georgia, serif", bodyFont:"'DM Sans', Arial, sans-serif", pitchFont:"'Libre Baskerville', Georgia, serif",
      decorativeTexture:'assets/themes/parchment.svg', decorativeMotif:'assets/themes/dreadwoods-branches.svg?v=20261007d',
      paperArtwork:'assets/themes/dreadwoods-paper-v2.jpg', bindingArtwork:'assets/themes/dreadwoods-binding.jpg', outerArtwork:'assets/themes/dreadwoods-outer.jpg', edgeArtwork:'assets/themes/dreadwoods-edges.svg', sidebarArtwork:'assets/themes/dreadwoods-sidebar.jpg', borderStyle:'solid'
    }
  },
  games:[
    {
      id:'hollow-graves',theme:'hollow',title:'HOLLOW GRAVES',subtitle:'Systemic sci-fi investigation horror.',genre:'Sci-Fi Horror',status:'',
      logo:'assets/themes/hollow-symbol-centered.jpg',logoAlt:'Hollow Graves astral symbol — reference crop',
      descriptionPrimary:'An investigation-horror experience across haunted systems, where forgotten worlds echo with an ancient astral corruption.',
      descriptionSecondary:'Uncover remnants of lost civilizations, descend into ritual spaces and confront entities beyond reality. Science, faith and the void intertwine.',
      video:{type:'file',src:'',poster:'',captions:'',label:'Gameplay video'},
      images:Array.from({length:6},(_,i)=>({src:'',alt:`Hollow Graves — image ${i+1}`,caption:''}))
    },
    {
      id:'reditus-umbrae',theme:'reditus',title:'REDITUS UMBRAE',subtitle:'Dark action combat prototype.',genre:'Action RPG',status:'',
      logo:'assets/themes/reditus-symbol.jpg',logoAlt:'Reditus Umbrae ritual sword symbol — reference crop',
      descriptionPrimary:'A dark action prototype set in an infernal realm, focused on visceral combat, technical animation and oppressive atmosphere.',
      descriptionSecondary:'Explore a world inspired by medieval mythology and the Dantean journey, where penitence and violence intertwine.',
      video:{type:'file',src:'',poster:'',captions:'',label:'Gameplay video'},
      images:Array.from({length:6},(_,i)=>({src:'',alt:`Reditus Umbrae — image ${i+1}`,caption:''}))
    },
    {
      id:'dreadwoods',theme:'dreadwoods',title:'DREADWOODS',subtitle:'Dark folkloric survival horror.',genre:'Survival Horror',status:'',
      logo:'assets/themes/dreadwoods-symbol.jpg',logoAlt:'Dreadwoods antler and moon symbol — reference crop',
      descriptionPrimary:'Venture into a forgotten forest where ancient beliefs linger and something hunts between the trees. Scavenge, survive and uncover the truth behind a hidden celebration.',
      descriptionSecondary:'A dark folkloric survival horror rooted in local myths and traditions, blending atmospheric exploration with tense encounters.',
      video:{type:'file',src:'',poster:'',captions:'',label:'Gameplay video'},
      images:Array.from({length:6},(_,i)=>({src:'',alt:`Dreadwoods — image ${i+1}`,caption:''}))
    }
  ]
};
