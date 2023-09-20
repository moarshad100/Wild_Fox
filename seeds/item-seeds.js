const { Item } = require('../models');

const itemData = [
  {
    category: 'Game',
    name: 'Hollow Knight',
    info: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.',
    year: 2017,
    url: 'https://www.giantbomb.com/a/uploads/original/24/240391/3355540-co1rgi.png',
  },
  {
    category: 'Game',
    name: 'NeverSong',
    info: 'Help little Peet hack-and-slash his way through a beautifully haunting coma. A hand-drawn action-adventure through a dreamy world filled with fleshy monsters, insane grown-ups, and sad children looking for their mommies.',
    year: 2019,
    url: 'https://www.giantbomb.com/a/uploads/original/10/103881/3188864-3188595-neversong-artwork-key-art%20%281%29.jpg',
  },
  {
    category: 'Game',
    name: 'GTA-5',
    info: 'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.',
    year: 2013,
    url: 'https://www.giantbomb.com/a/uploads/original/0/1992/3368076-0574460249-GTAV-product-master-01-en-3mar22.jpg',
  },
  {
    category: 'Game',
    name: 'Elden Ring',
    info: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    year: 2022,
    url: 'https://www.giantbomb.com/a/uploads/scale_medium/0/1992/3365871-1050660724-phvVT.png',
  },
  {
    category: 'Game',
    name: "Marvel's Spider-Man",
    info: 'In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains with epic takedowns.',
    year: 2018,
    url: 'https://www.giantbomb.com/a/uploads/scale_medium/0/3699/3037524-marvel%27s%20spider-man.jpg',
  },
  {
    category: 'Movie',
    name: 'The Godfather',
    info: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal",
    year: 1972,
    url: 'https://w0.peakpx.com/wallpaper/508/93/HD-wallpaper-the-godfather.jpg',
  },
  {
    category: 'Movie',
    name: 'The Shawshank Redemption',
    info: "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 year",
    year: 1994,
    url: 'https://w0.peakpx.com/wallpaper/193/151/HD-wallpaper-shawshank-morgan-man-the-shawshank-redemption.jpg',
  },
  {
    category: 'Movie',
    name: 'Pulp Fiction',
    info: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    year: 1994,
    url: 'https://w0.peakpx.com/wallpaper/747/157/HD-wallpaper-pulp-fiction-red-black-hair.jpg',
  },
  {
    category: 'Movie',
    name: '2001: A Space Odyssey',
    info: 'After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins: a spacecraft manned by two men and the supercomputer HAL 9000.',
    year: 1968,
    url: 'https://w0.peakpx.com/wallpaper/344/84/HD-wallpaper-2001-a-space-odyssey.jpg',
  },
  {
    category: 'Movie',
    name: 'Citizen Kane',
    info: "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud.'",
    year: 1941,
    url: 'https://w0.peakpx.com/wallpaper/99/9/HD-wallpaper-movie-citizen-kane.jpg',
  },
  {
    category: 'TV',
    name: '24 S1',
    info: ' 24 is a serial drama starring Kiefer Sutherland as central character Jack Bauer, an agent with the Counter Terrorist Unit (CTU), whose mandate is to protect the United States from terrorist plots. The episodes take place over the course of one hour, depicting events as they happen, in real time.',
    year: 2001,
    url: 'https://w0.peakpx.com/wallpaper/667/187/HD-wallpaper-24-official-1-fox-jack-bauer-taxi-twenty-four-tv-24.jpg',
  },
  {
    category: 'TV',
    name: 'The Friends S1',
    info: 'Comedy series about a tight-knit group of friends living in Manhattan. It also covers their interactions with their families, their lovers, and various colleagues over a period of several years. The series opens with runaway bride Rachel Green, who has just abandoned her fiance Barry Farber at the altar',
    year: 1994,
    url: 'https://w0.peakpx.com/wallpaper/410/199/HD-wallpaper-friends-friends-tv-show.jpg',
  },
  {
    category: 'TV',
    name: 'Walking Dead S1',
    info: 'The series features a large ensemble cast as survivors of a zombie apocalypse trying to stay alive under near-constant threat of attacks from zombies chiefly known as "walkers" by the other characters.',
    year: 2010,
    url: "https://w0.peakpx.com/wallpaper/560/576/HD-wallpaper-the-walking-dead-walking-dead.jpg",
  },

  {
    category: 'TV',
    name: 'Breaking Bad S1',
    info: 'Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a struggling, frustrated high school chemistry teacher who transforms into a ruthless kingpin in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.',
    year: 2008,
    url: 'https://w0.peakpx.com/wallpaper/252/484/HD-wallpaper-breaking-bad-bad-breaking-walter.jpg',
  },
  {
    category: 'TV',
    name: 'Game of Thrones S1',
    info: ' Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.',
    year: 2011,
    url: 'https://w0.peakpx.com/wallpaper/953/946/HD-wallpaper-game-of-thrones-black-game-got-thrones.jpg',
  },
  {
    category: 'Game',
    name: 'Red Dead Redemption 2',
    info: "The third game in Rockstar's Wild West-themed series is a prequel to the events of Red Dead Redemption, returning to the open-world action of its predecessor.",
    year: 2019,
    url: 'https://www.giantbomb.com/a/uploads/scale_super/5/56742/3058747-5239356422-528b4.jpg',
  },
  {
    category: 'Movie',
    name: 'Harry Potter and the prisoner of azkaban',
    info: "The film follows Harry's third year at Hogwarts and his quest to uncover the truth about his past, including the connection recently-escaped Azkaban prisoner Sirius Black has to Harry and his deceased parents.",
    year: 2004,
    url: 'https://w0.peakpx.com/wallpaper/748/210/HD-wallpaper-harry-potter-harry-potter-3-magic-the-prisoner-of-azkaban.jpg',
  },
  {
    category: 'TV',
    name: 'Stranger Things S4',
    info: "Darker and denser than its predecessors, Stranger Things' fourth chapter sets the stage for the show's final season in typically bingeworthy fashion",
    year: 2022,
    url: 'https://w0.peakpx.com/wallpaper/808/740/HD-wallpaper-stranger-things-season-4.jpg',
  },
  {
    category: 'Game',
    name: 'Fallout 4',
    info: 'The Fallout series continues in a post-apocalyptic Boston, Massachusetts.',
    year: 2015,
    url: 'https://www.giantbomb.com/a/uploads/original/8/82063/2795700-2356006370-64616.jpg',
  },
  {
    category: 'Movie',
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    info: 'The film tells the story of young hobbit Frodo Baggins who, accompanied by eight companions, embarks on a journey to destroy the One Ring',
    year: 2001,
    url: 'https://w0.peakpx.com/wallpaper/937/205/HD-wallpaper-lotr-mines-fellowship-frodo-gandalf-legolas-lord-of-the-rings-ring-rings-the-lord-of-the-rings-the-lotr.jpg',
  },
  {
    category: 'TV',
    name: 'The Office S1',
    info: 'Season 1 of The Office began airing on March 24, 2005, on NBC. It was based on the BBC series created by Ricky Gervais and Stephen Merchant of the same name',
    year: 2005,
    url: 'https://w0.peakpx.com/wallpaper/736/631/HD-wallpaper-tv-show-the-office-us-the-office.jpg',
  },
  {
    category: 'Game',
    name: 'Cyberpunk 2077',
    info: 'An open-world action role-playing game by CD Projekt RED based on the pen and paper RPG Cyberpunk 2020.',
    year: 2020,
    url: 'https://www.giantbomb.com/a/uploads/original/0/1992/3364934-2785547186-heade.jpg',
  },
  {
    category: 'Movie',
    name: 'The Batman',
    info: 'The Batman is a 2022 American superhero film based on the DC Comics character Batman',
    year: 2022,
    url: 'https://w0.peakpx.com/wallpaper/516/268/HD-wallpaper-batman-2022.jpg',
  },
  {
    category: 'TV',
    name: 'True Detective S1',
    info: 'In 2012, Louisiana State Police Detectives Rust Cohle and Martin Hart are brought in to revisit a homicide case they worked in 1995.',
    year: 2014,
    url: 'https://w0.peakpx.com/wallpaper/124/460/HD-wallpaper-true-detective-show-tv.jpg',
  },
  {
    category: 'Game',
    name: 'Project Zomboid',
    info: 'Isometric zombie survival, where death is inevitable and all you can hope for is to have a bullet left for your own head.',
    year: 2013,
    url: 'https://www.giantbomb.com/a/uploads/original/16/165036/3253895-pz.jpg',
  },
  {
    category: 'Movie',
    name: 'Fifty Shades of Grey',
    info: "Adaptation of E.L. James' best-selling erotic novel",
    year: 2015,
    url: 'https://w0.peakpx.com/wallpaper/980/765/HD-wallpaper-fifty-shades-of-grey.jpg',
  },
  {
    category: 'TV',
    name: 'Band of Brothers',
    info: 'Drawn from interviews with survivors of Easy Company, as well as their journals and letters, Band of Brothers chronicles the experiences of these men from paratrooper training in Georgia through the end of the war.',
    year: 2001,
    url: 'https://w0.peakpx.com/wallpaper/515/268/HD-wallpaper-band-of-brothers-band-band-o-brothers-brothers-of.jpg',
  },
  {
    category: 'Game',
    name: 'Rust',
    info: "From the makers of Garry's Mod, Rust is a multiplayer survival game with combat elements.",
    year: 2018,
    url: 'https://www.giantbomb.com/a/uploads/original/5/56742/2998286-header.jpg',
  },
  {
    category: 'Movie',
    name: 'The Lion King',
    info: 'The Lion King follows the epic, African adventure of a young lion called Simba as he struggles to accept the responsibilities of adulthood and his destined role as king of the jungle.',
    year: 1994,
    url: 'https://w0.peakpx.com/wallpaper/820/501/HD-wallpaper-lion-king-1994-the-lion-king-lion-movies-disney-simba-deviantart.jpg',
  },
  {
    category: 'TV',
    name: 'The Wire',
    info: 'The series expands its  focus into the media - specifically the role of newspapers in big-city bureaucracy - as it follows a newspaper staff struggling to maintain integrity and meet deadlines in the face of budget cuts and staff reductions.',
    year: 2002,
    url: 'https://w0.peakpx.com/wallpaper/733/707/HD-wallpaper-tv-show-the-wire.jpg',
  },
  {
    category: 'TV',
    name: 'Squid Game',
    info: 'The series revolves around a secret contest where 456 players, all of whom are in deep financial hardship, risk their lives to play a series of deadly games',
    year: '2021',
    url: 'https://w0.peakpx.com/wallpaper/668/371/HD-wallpaper-squid-games-squid-games.jpg',
  },

  {
    category: 'Movie',
    name: 'The Matrix',
    info: 'Depicts a dystopian future in which humanity is unknowingly trapped inside the Matrix, a simulated reality that intelligent machines have created to distract humans',
    year: '1999',
    url: 'https://w0.peakpx.com/wallpaper/668/945/HD-wallpaper-the-matrix-1999-movie-1999-film-the-matrix-actors.jpg',
  },
  {
    category: 'Game',
    name: 'Super Mario Bros',
    info: 'The game is based on a series of side-scrolling levels, each filled with enemies ranging from mushroomlike Goombas to evil turtles known as Koopa Troopas.',
    year: '1985',
    url: 'https://www.giantbomb.com/a/uploads/scale_super/9/93770/2362268-nes_supermariobros_eu.jpg',
  },
  {
    category: 'TV',
    name: 'Chernobyl',
    info: 'Chernobyl is a historical drama television miniseries that revolves around the Chernobyl disaster of 1986 and the cleanup efforts that followed',
    year: '2019',
    url: 'https://w0.peakpx.com/wallpaper/292/681/HD-wallpaper-chernobyl-1986-abej-beograd.jpg',
  },
  {
    category: 'Movie',
    name: 'Mad Max: Fury Road',
    info: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and a drifter named Max.',
    year: '2015',
    url: 'https://w0.peakpx.com/wallpaper/104/277/HD-wallpaper-mad-max-fury-road-movie-mad-max-fury-road-movies.jpg',
  },
  {
    category: 'Game',
    name: 'Sonic the hedgehog',
    info: 'Sonic is an anthropomorphic blue hedgehog who can run at supersonic speeds and curl into a ball to attack enemies.',
    year: '1991',
    url: 'https://www.giantbomb.com/a/uploads/original/0/3693/609697-ss_08.27.2008_08.57.11pm.jpg',
  },

];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;