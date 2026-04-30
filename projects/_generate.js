#!/usr/bin/env node
const { buildPage, p, lede, h2, h3, divider, body, figure, modulesList, notice } = require('./_build.js');

/* ============================================================
   1a. GENIUS LOCI — TEXT-ONLY VERSION
   Used while project visuals are not yet publicly available.
   Same content backbone, but no images/videos and no module figures.
   ============================================================ */
buildPage({
  slug: 'genius-loci-text',
  title: 'Genius Loci',
  chapter: 'MUSEUM',
  head: {
    meta: 'Collaborative · Museum · Accessibility',
    title: 'Genius Loci',
    tagline: 'Digital and accessible museum experience for the Campania Regional Museums Directorate.',
  },
  sections: [
    body(
      lede('Genius Loci is an ongoing cultural accessibility project developed for 28 museums and cultural heritage sites managed by the Campania Regional Museums Directorate in Italy, in collaboration with Icecubes.') +
      p('The project focuses on improving cognitive, cultural and sensory accessibility across a diverse network of museums, archaeological sites, historical buildings, monumental spaces and parks.') +
      p('Rather than applying a single digital format to every location, Genius Loci builds a flexible system that adapts to the specific identity of each site. Digital tools, physical supports and narrative strategies are combined to make each place easier to access, understand and experience.') +
      p('The project works as a hybrid ecosystem, integrating several types of visitor touchpoints:')
    ),

    modulesList([
      {
        title: 'Mobile Web Experience',
        body: 'QR-code based mobile pages designed to provide multilingual content, audio guides, audio support, smart maps and object-related information through a clear and accessible interface.',
      },
      {
        title: 'Digital Twin &amp; Smart Map',
        body: 'Interactive virtual environments that allow visitors to explore museum spaces remotely or during the visit, connecting rooms, objects and points of interest with digital content.',
      },
      {
        title: 'XR Experience',
        body: 'Web-based extended reality experiences designed to add new layers of interpretation to selected objects, spaces and narratives.',
      },
      {
        title: 'Tactile &amp; Sensory Supports',
        body: 'Physical and tactile materials developed to support sensory accessibility and offer alternative ways of approaching museum content.',
      },
      {
        title: 'Gamification &amp; Extra Experiences',
        body: 'Playful formats such as treasure hunts, object-based activities and simple digital games designed to engage younger visitors and families.',
      },
    ]),

    body(
      p('The project also integrates AI-assisted workflows as part of the digital production process, supporting the development of visual and immersive content.')
    ),

    notice(
      'Project Status',
      'As the project is still in development, visual materials are currently not publicly available.'
    ),
  ],
  credits: [
    { key: 'Year', val: '2024 — ongoing' },
    { key: 'Role', val: [
      'Immersive Experience Designer',
      'UX Designer',
      'Digital Heritage &amp; AI Workflow Specialist',
    ]},
    { key: 'Skills', val: [
      'UX/UI Design',
      'Immersive Experience Design',
      'Digital Heritage',
      'WebAR / XR Design',
      '3D Modelling',
      '3D Printing',
      'Tactile Accessibility',
      'AI-assisted Workflow',
      'Museum Storytelling',
      'Gamification',
    ]},
  ],
  prev: null,
  next: { title: 'Museum Illustrations for Villa Pignatelli', href: 'villa-pignatelli.html' },
});

/* ============================================================
   1. GENIUS LOCI — FULL VERSION (with images)
   ============================================================ */
buildPage({
  slug: 'genius-loci',
  title: 'Genius Loci',
  chapter: 'MUSEUM',
  head: {
    meta: 'Collaborative · Museum · Accessibility',
    title: 'Genius Loci',
    tagline: 'Digital and accessible museum experience for the Campania Regional Museums Directorate.',
  },
  sections: [
    body(
      lede('Genius Loci is an ongoing cultural accessibility project developed for 28 museums and cultural heritage sites managed by the Campania Regional Museums Directorate in Italy, in collaboration with Icecubes.') +
      p('The project focuses on improving cognitive, cultural and sensory accessibility across a diverse network of museums, archaeological sites, historical buildings, monumental spaces and parks.') +
      p('Rather than applying a single digital format to every location, Genius Loci builds a flexible system that adapts to the specific identity of each site. Digital tools, physical supports and narrative strategies are combined to make each place easier to access, understand and experience.') +
      p('The project works as a hybrid ecosystem, integrating mobile-first web interfaces, QR-code based content, multilingual texts, audio guides, digital twins, XR experiences, tactile supports, AI-assisted workflows and small interactive games. Each element is designed to transform the museum visit into a clearer, more inclusive and more engaging journey.')
    ),
    divider(),

    body(h2('Mobile Web Experience')),
    figure({ layout: 'row', cols: 2, ratio: '9-16', scale: 50, items: [
      {file: 'screenshotMobileApp1.png'},
      {file: 'screenshotMobileApp2.png'},
    ]}),
    body(
      p('A mobile-first interface accessible through QR codes placed on welcome panels, room panels, object labels and display cases. The web pages provide multilingual content, audio guides, smart maps, object-related information and audio support for blind and visually impaired visitors.') +
      p('The interface is designed for accessibility and readability: large text, clear information hierarchy, high-contrast layouts, simple navigation and generous touch areas. This makes the content easier to use for older visitors, people with low vision, users with colour-perception difficulties and visitors who need a more direct and intuitive reading experience.')
    ),

    body(h2('Digital Twin & Smart Map')),
    figure({ layout: 'vstack', size: 'large', items: [
      {file: 'screenshotDigitalTwin1.jpg'},
      {file: 'screenshotDigitalTwin2.jpg'},
    ]}),
    body(
      p('The digital twin allows visitors to explore museum spaces remotely or during the physical visit. It functions as an interactive spatial catalogue, where rooms, objects and points of interest are connected to multimedia content, audio, images, XR links and further reading.') +
      p('The experience can be organised through different levels of exploration, such as essential routes, complete routes, in-depth materials and child-oriented content. This allows visitors to choose a path based on their time, interests and accessibility needs.')
    ),

    body(h2('XR Experience')),
    figure({ layout: 'row', cols: 2, ratio: '9-16', scale: 50, items: [
      {file: 'screenshotXRExperience1.png'},
      {file: 'screenshotXRExperience2.png'},
    ]}),
    body(
      p('Selected objects and spaces can be expanded through web-based XR experiences, allowing visitors to access additional layers of storytelling through augmented, virtual or mixed reality. These experiences create a bridge between the physical exhibition and digital interpretation.')
    ),

    body(h2('Tactile & Sensory Supports')),
    figure({ layout: 'row', cols: 2, ratio: '4-3', items: [
      {file: 'photo3DPrinted1.jpg'},
      {file: 'photo3DPrinted2.jpg'},
    ]}),
    body(
      p('Physical supports, tactile elements and 3D-printed objects are developed to improve sensory accessibility and offer alternative ways of experiencing museum content. These materials translate visual, spatial and natural information into forms that can also be explored through touch.') +
      p('In some sites, tactile supports are designed around the specific character of the place. For example, a historical-archaeological route can be enriched with botanical elements such as tactile leaves, creating a more layered and inclusive way to discover the site.')
    ),

    body(h2('Gamification & Extra Experiences')),
    figure({ layout: 'row', cols: 2, ratio: '9-16', scale: 50, items: [
      {file: 'gameMobile1.png'},
      {file: 'gameMobile2.png'},
    ]}),
    body(
      p('Some museum experiences include playful formats designed for younger visitors and families. For Villa Floridiana, a treasure-hunt path uses ceramic-shaped panels placed in the park to invite visitors to discover the museum through QR codes, object stories, images and audio content.') +
      p('The goal is to guide visitors from the park towards the museum, revealing the cultural value of a place that many people may not immediately recognise. Completing the path unlocks a digital memory-style game, extending the experience through a simple and playful interaction.')
    ),
    body(p('<em>As the project is currently ongoing, only selected visual materials and public-facing outputs are presented.</em>')),
  ],
  credits: [
    { key: 'Year', val: '2024 — ongoing' },
    { key: 'Role', val: [
      'Immersive Experience Designer',
      'UX Designer',
      'Digital Heritage & AI Workflow Specialist',
    ]},
    { key: 'Skills', val: [
      'UX/UI Design',
      'Immersive Experience Design',
      'Digital Heritage',
      'WebAR / XR Design',
      '3D Modelling',
      '3D Printing',
      'Tactile Accessibility',
      'AI-assisted Workflow',
      'Museum Storytelling',
      'Gamification',
    ]},
  ],
  prev: null,
  next: { title: 'Museum Illustrations for Villa Pignatelli', href: 'villa-pignatelli.html' },
});

/* ============================================================
   2. VILLA PIGNATELLI ILLUSTRATIONS — 4 per row
   ============================================================ */
buildPage({
  slug: 'villa-pignatelli',
  title: 'Museum Illustrations for Villa Pignatelli',
  chapter: 'ILLUSTRATION',
  head: {
    meta: 'Collaborative · Illustration · Tactile',
    title: 'Museum Illustrations<br/>for Villa Pignatelli',
    tagline: 'Illustrations for the tactile panels of the Museo delle Carrozze in Naples.',
  },
  sections: [
    body(
      lede('A series of digital line illustrations created for the Museo delle Carrozze at Villa Pignatelli, as part of the broader Genius Loci accessibility project developed in collaboration with Icecubes.') +
      p('The drawings were developed for twelve tactile panels with Braille, dedicated to the museum&rsquo;s carriage collection. Based on the illustrations, tactile lines and Braille elements were later produced and printed as part of the final panels.') +
      p('The style is based on fine line work, soft details and a slightly romantic atmosphere, so that the images could work both as a visual support for the tactile panels and as illustrations in their own right.')
    ),
    figure({ layout: 'row', cols: 4, ratio: '3-4', items: [
      {file:'photo1.jpg'},  {file:'illustration1.jpg'},
      {file:'photo2.jpg'},  {file:'illustration2.jpg'},
    ]}),
    figure({ layout: 'row', cols: 4, ratio: '3-4', items: [
      {file:'photo3.jpg'},  {file:'illustration3.jpg'},
      {file:'photo4.jpg'},  {file:'illustration4.jpg'},
    ]}),
    figure({ layout: 'row', cols: 4, ratio: '3-4', items: [
      {file:'photo5.jpg'},  {file:'illustration5.jpg'},
      {file:'photo6.jpg'},  {file:'illustration6.jpg'},
    ]}),
    figure({ layout: 'row', cols: 4, ratio: '3-4', items: [
      {file:'photo7.jpg'},  {file:'illustration7.jpg'},
      {file:'photo8.jpg'},  {file:'illustration8.jpg'},
    ]}),
    figure({ layout: 'row', cols: 4, ratio: '3-4', items: [
      {file:'photo9.jpg'},  {file:'illustration9.jpg'},
      {file:'photo10.jpg'}, {file:'illustration10.jpg'},
    ]}),
  ],
  credits: [
    { key: 'Year',  val: '2025' },
    { key: 'Role',  val: ['Digital Illustrator'] },
    { key: 'Tools', val: ['Procreate'] },
  ],
  prev: { title: 'Genius Loci', href: 'genius-loci-text.html' },
  next: { title: 'Metaversity', href: 'metaversity.html' },
});

/* ============================================================
   3. METAVERSITY
   ============================================================ */
buildPage({
  slug: 'metaversity',
  title: 'Metaversity',
  chapter: 'VIRTUAL REALITY',
  head: {
    meta: 'Collaborative · VR · Extended Learning',
    title: 'Metaversity',
    tagline: 'A multi-user immersive learning platform for the future of university education.',
  },
  sections: [
    figure({ layout: 'full', ratio: '16-9', items: [{file: 'metaversity.mp4', poster: 'metaversity1.jpg'}] }),
    body(
      lede('Metaversity is an immersive learning project developed for Università Cattolica del Sacro Cuore, in collaboration with Icecubes. The project explores how virtual and extended reality can support new ways of teaching and learning, especially when physical classrooms are not enough to represent complex spaces, abstract concepts or collaborative scenarios.') +
      p('The platform is part of a broader research and development process around immersive education. Through workshops and MetaLabs, teachers and students can test learning experiences in virtual environments, exploring both the possibilities and the limits of immersive technologies.') +
      p('Rather than using technology as a spectacle, Metaversity focuses on the needs of students and teachers: clear learning goals, accessible interaction, shared presence and environments that support the course content. The project also reflects on the emerging role of the Immersive Learning Designer, a figure able to translate educational objectives into immersive experiences.')
    ),
    figure({ layout: 'row', cols: 3, ratio: '16-9', tight: true, items: [
      {file:'metaversity1.jpg'}, {file:'metaversity2.jpg'}, {file:'metaversity3.jpg'},
    ]}),
    figure({ layout: 'row', cols: 3, ratio: '16-9', tight: true, items: [
      {file:'metaversity4.jpg'}, {file:'metaversity5.jpg'}, {file:'metaversity6.jpg'},
    ]}),
    figure({ layout: 'row', cols: 3, ratio: '16-9', tight: true, items: [
      {file:'metaversity7.jpg'}, {file:'metaversity8.jpg'}, {file:'metaversity9.jpg'},
    ]}),
  ],
  credits: [
    { key: 'Year', val: '2024 — 2025' },
    { key: 'Role', val: [
      'Immersive Experience Designer',
      '3D Scene Designer',
      'UX Designer',
      'Unity Developer',
    ]},
    { key: 'Tools', val: ['Unity', 'Blender', 'Spatial', 'C#', 'Git'] },
  ],
  prev: { title: 'Museum Illustrations for Villa Pignatelli', href: 'villa-pignatelli.html' },
  next: { title: 'Redmoon Traum', href: 'redmoon-traum.html' },
});

/* ============================================================
   4. REDMOON TRAUM
   ============================================================ */
buildPage({
  slug: 'redmoon-traum',
  title: 'Redmoon Traum',
  chapter: 'VIRTUAL REALITY',
  head: {
    meta: 'Personal · VR · Surrealism',
    title: 'Redmoon Traum',
    tagline: 'A virtual journey where reality and dream merge, inspired by psychoanalysis and surrealist art.',
  },
  sections: [
    body(
      lede('Redmoon Traum is a virtual journey that transcends the boundary between reality and imagination, bringing together psychoanalysis, surrealist art and new technologies.') +
      p('Inspired by the reflections of psychoanalyst Carl Gustav Jung and the dreamlike visions of surrealist artist Max Ernst, the project explores the infinite landscape of the human unconscious. It offers an immersive experience that invites the user to travel through the psyche, moving among symbols, archetypes and surreal narratives.') +
      p('A virtual universe where reality and dream merge, the rational meets the irrational, and introspection becomes an adventure.') +
      p('The experience is divided into four main chapters, connected through portals. Each chapter is designed to guide the player through a specific stage in the exploration of the unconscious.')
    ),
    figure({ layout: 'row', cols: 4, ratio: '1-1', scale: 75, items: [
      {file:'photoChapter1.jpg'}, {file:'photoChapter2.jpg'},
      {file:'photoChapter3.jpg'}, {file:'photoChapter4.jpg'},
    ]}),
    body(h2('Chapter 1 — Descent into the Unconscious') +
      p('Under the twilight veil of a mysterious forest, the first chapter of Redmoon Traum invites players to begin their exploration of the unconscious. The forest becomes a powerful metaphor for entering the unknown parts of the self.')
    ),
    figure({ layout: 'row', cols: 4, ratio: '3-4', items: [
      {file:'Chapter1_1.jpg'}, {file:'Chapter1_2.jpg'},
      {file:'Chapter1_3.jpg'}, {file:'Chapter1_4.jpg'},
    ]}),
    body(p('Here, where ethereal light blends with shadow, players collect fragments of a mirror along the path. Each fragment reflects light and slowly disperses the mist, revealing the way towards an underground labyrinth, a symbolic descent into the hidden depths of the mind.')),

    body(h2('Chapter 2 — The Labyrinth of Shadows') +
      p('In the Labyrinth of Shadows, the journey becomes more intimate and obscure. Players move through a fractured landscape of floating platforms and unstable spaces, symbolic of fears, repressed memories and the hidden parts each person carries within.') +
      p('The labyrinth does not only challenge the player; it also reveals. With each uncertain step, the path changes, reflecting the inner struggle of recognising and accepting the darker aspects of the self. Overcoming the labyrinth means finding a staircase made of fragments of reality, a possible way out towards acceptance, growth and the next stage of the inner journey.')
    ),
    figure({ layout: 'row', cols: 4, ratio: '3-4', items: [
      {file:'Chapter2_1.jpg'}, {file:'Chapter2_2.jpg'},
      {file:'Chapter2_3.jpg'}, {file:'Chapter2_4.jpg'},
    ]}),

    body(h2('Chapter 3 — The Garden of Archetypes') +
      p('In the Garden of Archetypes, the environment turns into a magical place of psychic discovery. Players explore a surreal garden inhabited by creatures that embody Jungian archetypes, universal symbols connected to deeply shared human experiences.') +
      p('By collecting symbols scattered across the ground, players weave a personal path that connects them to the depths of the collective unconscious. The garden is not only visually enchanting; it also invites an inner exploration, where the encounter with archetypes leads towards a deeper understanding and integration of the self.')
    ),
    figure({ layout: 'row', cols: 2, ratio: '3-4', scale: 50, items: [
      {file:'Chapter3_1.jpg'}, {file:'Chapter3_2.jpg'},
    ]}),

    body(h2('Chapter 4 — Embracing the Self') +
      p('In the final chapter of Redmoon Traum, the player reaches the culmination of the journey of self-discovery. Crossing a suspended bridge, they arrive at a luminous mandala placed at the centre of a mysterious lake.') +
      p('This sphere of light represents both the inner universe of the soul and the journey completed through the unconscious. The moment marks the peak of the individuation process: the integration of different parts of the self and the achievement of inner harmony. The return to the beginning becomes a symbol of rebirth and a new start, enriched by a deeper understanding of oneself and the world.')
    ),
    figure({ layout: 'row', cols: 2, ratio: '16-9', items: [
      {file:'Chapter4_1.jpg'}, {file:'Chapter4_2.jpg'},
    ]}),
  ],
  credits: [
    { key: 'Year', val: '2023' },
    { key: 'Role', val: [
      'Immersive Experience Designer',
      '3D Scene Designer',
      'Unity Developer',
    ]},
    { key: 'Tools', val: ['Unity', 'Blender', 'C#'] },
  ],
  prev: { title: 'Metaversity', href: 'metaversity.html' },
  next: { title: 'Wasteland',   href: 'wasteland.html' },
});

/* ============================================================
   5. WASTELAND
   ============================================================ */
buildPage({
  slug: 'wasteland',
  title: 'Wasteland',
  chapter: 'VIRTUAL REALITY',
  head: {
    meta: 'Collaborative · VR · Dystopia',
    title: 'Wasteland',
    tagline: 'A dystopian journey through the ruins of Wonderland.',
  },
  sections: [
    body(`<p class="center-italic">Wasteland is what remains of Wonderland.</p>`),
    figure({ layout: 'row', cols: 2, ratio: '16-9', tight: true, items: [
      {file:'wasteland1.jpg'}, {file:'wasteland2.jpg'},
    ]}),
    figure({ layout: 'row', cols: 2, ratio: '16-9', tight: true, items: [
      {file:'wasteland3.jpg'}, {file:'wasteland4.jpg'},
    ]}),
    body(
      p('Carroll&rsquo;s world ended with a dark warning — &ldquo;The future will be black&rdquo; — and in this project, that future has come true. A new Alice is called to return to this contaminated land, where time has stopped and only ruins remain. In this static and desolate world, Wonderland collapses into the eco-monster of Movie Park, a vast shopping centre turned into a landfill.') +
      p('Wasteland is both an escape from reality and a way of returning to it with greater awareness. Its world mirrors our own: a place shaped by uncontrolled growth, waste and collapse. The explorer can either surrender to this alien space or follow the traces of the White Rabbit through the wreckage.') +
      p('The project acts as a warning. In a world at risk of collapse, it is the human animal that disappears, while the rest of nature recalibrates and survives. If humanity fails to reconnect with its own mutable nature, it is destined for extinction — and for the ruins it leaves behind.')
    ),
    figure({ layout: 'jigsaw', items: [
      {file:'wastelandpubblication1.jpg'},  // left, spans both rows
      {file:'wastelandpubblication2.jpg'},  // top middle
      {file:'wastelandpubblication3.jpg'},  // right, spans both rows
      {file:'wastelandpubblication4.jpg'},  // bottom middle left
      {file:'wastelandpubblication5.jpg'},  // bottom middle right
    ]}),
    body(`<h2 class="center">Wasteland in Augmented Reality</h2>`),
    figure({ layout: 'row', cols: 3, ratio: '3-4', items: [
      {file:'wastelandAR1.jpg'}, {file:'wastelandAR2.jpg'}, {file:'wastelandAR3.jpg'},
    ]}),
  ],
  credits: [
    { key: 'Year', val: '2023' },
    { key: 'Role', val: [
      '3D Environment Designer',
      'Interaction Designer',
      'UX Designer',
    ]},
    { key: 'Tools', val: ['Unreal Engine', 'Unity', 'Blender', 'C#', 'WebAR'] },
  ],
  prev: { title: 'Redmoon Traum',  href: 'redmoon-traum.html' },
  next: { title: 'Virtual Worlds', href: 'virtual-worlds.html' },
});

/* ============================================================
   6. VIRTUAL WORLDS
   ============================================================ */
buildPage({
  slug: 'virtual-worlds',
  title: 'Virtual Worlds',
  chapter: 'VIRTUAL REALITY',
  head: {
    meta: 'Collaborative · Virtual Spaces',
    title: 'Virtual Worlds',
    tagline: 'A selection of virtual spaces created for art, workshops and live performance.',
  },
  sections: [
    body(lede('This section brings together a series of professional projects developed across virtual galleries, Web 3.0 environments and metaverse-based performances. Each project explores a different use of virtual space, from exhibiting artworks to hosting workshops and supporting live digital performance.')),

    body(h2('<strong>Momoverso</strong>') + p('A virtual art gallery dedicated to the work of Momò Calascibetta.')),
    figure({ layout: 'row', cols: 2, ratio: '16-9', items: [
      {file:'momoverso1.jpg'}, {file:'momoverso2.jpg'},
    ]}),
    body(p('Momoverso is a virtual exhibition space dedicated to the work of artist Momò Calascibetta, developed in collaboration with Icecubes. The project presents the artist&rsquo;s visual universe inside a navigable digital gallery.') +
         p('<em>Role: 3D Environment Designer · Virtual Gallery Developer</em>')),

    body(h2('<strong>FSB PEAK</strong>') + p('An interactive Web 3.0 environment for FSB Group workshops.')),
    figure({ layout: 'row', cols: 2, ratio: '16-9', items: [
      {file:'fsb1.jpg'}, {file:'fsb2.jpg'},
    ]}),
    body(p('FSB PEAK is an interactive metaverse environment developed for the workshops of FSB Group, in collaboration with Red Eye. The space was designed as a digital setting for shared activities, presentations and workshop-based interaction.') +
         p('<em>Role: 3D Environment Designer · Interactive Space Developer</em>')),

    body(h2('<strong>Humanverse</strong>') + p('A metaverse live performance project by Martin Romeo.')),
    figure({ layout: 'row', cols: 3, ratio: '16-9', items: [
      {file:'Humanverse1.jpg'}, {file:'Humanverse2.jpg'}, {file:'Humanverse3.jpg'},
    ]}),
    body(p('Humanverse is a live performance project in the metaverse by artist Martin Romeo, exploring the relationship between performance, virtual presence and digital space.') +
         p('<em>Role: 3D Artist</em>')),
  ],
  credits: [
    { key: 'Years', val: '2023 — 2024' },
    { key: 'Role',  val: [
      '3D Environment Designer',
      'Virtual Gallery Developer',
      'Interactive Space Developer',
      '3D Artist',
    ]},
    { key: 'Tools', val: ['Blender', 'Unity', 'C#', 'Spatial'] },
  ],
  prev: { title: 'Wasteland',         href: 'wasteland.html' },
  next: { title: 'Augmented Murals',  href: 'augmented-murals.html' },
});

/* ============================================================
   7. AUGMENTED MURALS — all media at 75%
   ============================================================ */
buildPage({
  slug: 'augmented-murals',
  title: 'Augmented Murals',
  chapter: 'AUGMENTED REALITY',
  head: {
    meta: 'Collaborative · AR · Urban Art',
    title: 'Augmented Murals',
    tagline: 'Image-tracking AR works created in collaboration with Bepart for the Museo di Arte Urbana Aumentata.',
  },
  sections: [
    body(
      lede('A collection of augmented reality works created in collaboration with Bepart for the Museo di Arte Urbana Aumentata. MAUA is an open-air museum where urban murals are expanded through augmented reality and experienced through the viewer&rsquo;s smartphone.') +
      p('Using image tracking, each mural becomes the visual trigger for a digital animation. The physical wall remains the starting point, while 3D elements, movement, sound and symbolic narratives open a second layer of interpretation on top of the painted surface.') +
      p('My works explore transformation, memory, inner landscapes and regeneration, turning urban artworks into small immersive scenes suspended between the real city and a digital imaginary.')
    ),

    body(h2('Tredicesima Luna')),
    body(p('<em>A horn, thirteen signs, and a threshold opening onto the hidden landscape of the unconscious. — Mural by Lisa Gelli.</em>')),
    figure({ layout: 'row', cols: 2, ratio: '3-4', scale: 75, items: [
      {file:'luna.jpg'}, {file:'luna.mp4', poster:'luna.jpg'},
    ]}),
    body(
      p('Tredicesima Luna is inspired by the figure of the Janara and by the symbolic power of the moon, its phases and its cycles. When the thirteenth moon appears, time seems to fracture. A horn marked by thirteen signs emerges like an ancient calendar, a compass that does not measure space, but the mystery of the unconscious.') +
      p('In augmented reality, the wall opens into a visionary passage between reality and dream. Familiar objects appear distorted and suspended in an impossible landscape, as if fragments of memory had taken form. The Janara becomes the guardian of the threshold, inviting the viewer to look inward and cross the hidden space of dreams.')
    ),

    body(h2('OutOfStars.exe')),
    body(p('<em>A small cosmic traveller loses its light, until the stars gather to restart its heart. — Mural by Massimo Sirelli.</em>')),
    figure({ layout: 'row', cols: 2, ratio: '3-4', scale: 75, items: [
      {file:'OutOfStars.jpg'}, {file:'OutOfStars.mp4', poster:'OutOfStars.jpg'},
    ]}),
    body(
      p('Based on Massimo Sirelli&rsquo;s friendly robot with a pink heart, OutOfStars.exe transforms the mural into a cosmic journey. The robot walks lightly across its planet, until a sudden storm of lightning strikes and extinguishes its inner light.') +
      p('In the silence that follows, small spacecraft arrive to help. They collect energy from the stars and pour it back into the robot&rsquo;s heart, bringing it back to life. The animation turns the mural&rsquo;s playful and inclusive character into a story of care, repair and renewed movement.')
    ),

    body(h2('Pink Desire')),
    body(p('<em>Falling leaves are absorbed and transformed into a pearl, in an intimate journey through loss and rebirth. — Mural by Lisa Gelli.</em>')),
    figure({ layout: 'row', cols: 2, ratio: '3-4', scale: 75, items: [
      {file:'pink.jpg'}, {file:'pink.mp4', poster:'pink.jpg'},
    ]}),
    body(
      p('Pink Desire expands Lisa Gelli&rsquo;s mural into a fragile and intimate AR scene. Leaves fall like offerings, absorbed and transformed into a pearl. The atmosphere shifts, colours fade into grey and darker tones, while metallic sounds and a music-box melody create a suspended mood between nostalgia and unease.') +
      p('The AR work reflects on the ephemeral and transient nature of reality. Through 3D animation, the shutter becomes an imaginary threshold, opening a spatial illusion inside the surface of the mural and turning it into a living passage.')
    ),

    body(h2('Systema Munditotius')),
    body(p('<em>A star descends into the inner universe. The signs emerge, and the machine assembles itself. — Mural by Nicola Alessandrini.</em>')),
    figure({ layout: 'row', cols: 2, ratio: '3-4', scale: 75, items: [
      {file:'systema.jpg'}, {file:'systema.mp4', poster:'systema.jpg'},
    ]}),
    body(
      p('Systema Munditotius expands Nicola Alessandrini&rsquo;s mural into a symbolic mechanism of transformation. From a stone chest engraved with birds and reptiles, a vision opens: a man slowly frees himself from a prisoner&rsquo;s uniform.') +
      p('From the ground, a cosmic machine rises and takes shape, built from elements of the universe and activated by a celestial spark. Its movement follows the orbits of the Sun, the Earth and the planets, completing a cycle before dissolving back into the floor. When everything becomes still, the man remains — no longer a prisoner, but part of a larger universal harmony.')
    ),

    body(h2('Derganoak')),
    body(p('<em>A solitary figure finds comfort in a magical acorn, surrounded by leaves and the warmth of the Dergano community. — Mural by Lisa Gelli.</em>')),
    figure({ layout: 'row', cols: 2, ratio: '3-4', scale: 75, items: [
      {file:'derganoak.jpg'}, {file:'derganoak.mp4', poster:'derganoak.jpg'},
    ]}),
    body(p('Derganoak transforms the mural into a symbolic scene of belonging and regeneration. A solitary figure encounters a magical acorn, while vibrant leaves begin to bloom around it. The animation reflects on comfort, growth and community, turning the mural into a gentle image of protection and renewal.')),
  ],
  credits: [
    { key: 'Year', val: '2024 — 2025' },
    { key: 'Role', val: [
      'Digital Artist',
      '3D Artist',
      '3D Animator',
    ]},
    { key: 'Tools', val: ['Unity', 'Blender', 'Vuforia'] },
  ],
  prev: { title: 'Virtual Worlds', href: 'virtual-worlds.html' },
  next: { title: 'Ecfrasi',         href: 'ecfrasi.html' },
});

/* ============================================================
   8. ECFRASI — all images at 1920x539 (very wide letterbox)
   ============================================================ */
buildPage({
  slug: 'ecfrasi',
  title: 'Ecfrasi',
  chapter: 'INSTALLATION',
  head: {
    meta: 'Personal · Video · Cinema',
    title: 'Ecfrasi',
    tagline: 'A video installation on sound, poetic language and image in Jean-Luc Godard\u2019s cinema.',
  },
  sections: [
    figure({ layout: 'single', items: [{file:'ecfrasi0.jpg'}] }),
    figure({ layout: 'single', items: [{file:'ecfrasi1.jpg'}] }),
    figure({ layout: 'single', items: [{file:'ecfrasi2.jpg'}] }),
    body(
      lede('Ecfrasi is a video installation dedicated to the use of sound and poetic language in the films of Jean-Luc Godard.') +
      p('The installation pays tribute to the relationship between image and language, seeking a possible synthesis through poetry and free sound. The audio track is composed from three poems quoted in <em>Alphaville</em>, <em>Le Mépris</em> and <em>Pierrot le Fou</em>. Between one poetic fragment and another, musical phrases, noises and onomatopoeic sounds appear as interferences, sampled from other films of Godard&rsquo;s early production, especially <em>Two or Three Things I Know About Her</em> and <em>A Woman Is a Woman</em>.') +
      p('The visual part is built through montage, creating a work of ekphrasis starting from the spoken words. This flow is interrupted by more graphic sequences, using fonts, written elements and textual fragments taken from Godard&rsquo;s films.')
    ),
    figure({ layout: 'single', items: [{file:'ecfrasi3.jpg'}] }),
    figure({ layout: 'single', items: [{file:'ecfrasi4.jpg'}] }),
    figure({ layout: 'row', cols: 2, ratio: '3-4', items: [
      {file:'ecfrasiInstallation1.jpg'}, {file:'ecfrasiInstallation2.jpg'},
    ]}),
  ],
  credits: [
    { key: 'Year',  val: '2023' },
    { key: 'Role',  val: ['Video Editor'] },
    { key: 'Tools', val: ['Adobe Premiere Pro'] },
  ],
  prev: { title: 'Augmented Murals', href: 'augmented-murals.html' },
  next: { title: 'Febbre a 41°',     href: 'febbre-41.html' },
});

/* ============================================================
   9. FEBBRE A 41°
   ============================================================ */
buildPage({
  slug: 'febbre-41',
  title: 'Febbre a 41°',
  chapter: 'SHORT FILM',
  head: {
    meta: 'Personal · Short Film · Found Footage',
    title: 'Febbre a 41°',
    tagline: 'A found-footage short film reflecting on the condition of women through archival images and Sylvia Plath\u2019s poetry.',
  },
  sections: [
    figure({ layout: 'portrait', ratio: '3-4', scale: 75, items: [{file:'poster.jpg'}] }),
    body(
      lede('Febbre a 41° is a short film created with archival materials from AAMOD and the Internet Archive. Inspired by Sylvia Plath&rsquo;s poem <em>Fever 103°</em>, the film uses the poet&rsquo;s words as a starting point to reflect on the condition of women.') +
      p('The images are drawn mainly from the AAMOD archive and portray the feminist movements and social struggles of the 1970s. Through montage, the film connects poetic language with historical footage, creating a dialogue between personal fever, collective resistance and female experience.') +
      p('The short film was presented at the <em>UnArchive Found Footage Festival</em> and at <em>PLAI</em>, the exhibition-playground of NABA (Nuova Accademia di Belle Arti, Milan).')
    ),
    figure({ layout: 'row', cols: 3, ratio: '4-3', tight: true, items: [
      {file:'febbre1.jpg'}, {file:'febbre2.jpg'}, {file:'febbre3.jpg'},
    ]}),
    figure({ layout: 'row', cols: 3, ratio: '4-3', tight: true, items: [
      {file:'febbre4.jpg'}, {file:'febbre5.jpg'}, {file:'febbre6.jpg'},
    ]}),
    figure({ layout: 'row', cols: 2, ratio: '4-3', tight: true, items: [
      {file:'cinema1.jpg'}, {file:'cinema2.jpg'},
    ]}),
  ],
  credits: [
    { key: 'Year',  val: '2023' },
    { key: 'Role',  val: ['Video Editor'] },
    { key: 'Tools', val: ['Adobe Premiere Pro'] },
  ],
  prev: { title: 'Ecfrasi',         href: 'ecfrasi.html' },
  next: { title: 'La Dama Ovale',   href: 'la-dama-ovale.html' },
});

/* ============================================================
   10. LA DAMA OVALE
   ============================================================ */
buildPage({
  slug: 'la-dama-ovale',
  title: 'La Dama Ovale',
  chapter: '2D GAME',
  head: {
    meta: 'Personal · 2D Platformer · Surrealism',
    title: 'La Dama Ovale',
    tagline: 'A 2D platformer journey through the surreal world of Leonora Carrington.',
  },
  sections: [
    figure({ layout: 'full', items: [{file:'dama1.png'}] }),
    body(
      lede('La Dama Ovale is a 2D platformer game inspired by Leonora Carrington&rsquo;s short story <em>The Oval Lady</em>, included in the book <em>The Debutante</em>.') +
      p('The player follows the Oval Lady on a journey to save her horse friend Tartar, who has been imprisoned by a spell cast by her authoritarian father. The game reimagines the original story through an exploratory path inspired by some of Carrington&rsquo;s most evocative paintings.') +
      p('To escape the tragic ending of the original tale, the Oval Lady must collect stars along the way, enter a magical room and retrieve the Rose, an enchanted object that allows her to free Tartar and rise towards the celestial vault, finally gaining her freedom.')
    ),
    figure({ layout: 'full', items: [{file:'dama2.png'}] }),
  ],
  credits: [
    { key: 'Year',  val: '2022' },
    { key: 'Role',  val: ['Visual Designer', 'UX Designer', 'Game Developer'] },
    { key: 'Tools', val: ['Unity', 'Adobe Photoshop'] },
  ],
  prev: { title: 'Febbre a 41°', href: 'febbre-41.html' },
  next: null,
});

console.log('All detail pages generated.');
