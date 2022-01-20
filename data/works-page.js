import thumbnailTindog from "../public/images/works/tindog.png";
import thumbnailDiceeGame from "../public/images/works/dicee-game.png";
import thumbnailSimonGame from "../public/images/works/simon-game1.png";
import thumbnailEmojipedia from "../public/images/works/emojipedia1.png";
import thumbnailNoteKeeper from "../public/images/works/note-keeper3.png";
import thumbnailWeatherApp from "../public/images/works/weather-app1.png";
import thumbnailSortingVisualizerDemo from "../public/images/works/sorting-visualizer-demo1.png";
import thumbnailTeslaClone from "../public/images/works/tesla-clone1.png";
import thumbnailDisneyPlusClone from "../public/images/works/disney-plus-clone1.png";
import thumbnailSpotifyClone from "../public/images/works/spotify-clone1.png";
import thumbnailGoogleCalendar from "../public/images/works/google-calendar-clone1.png";
import thumbnailSortingVisualizer from "../public/images/works/sorting-visualizer1.png";
import thumbnailTypingSpeed from "../public/images/works/typing-speed2.png";
import thumbnailYouShare from "../public/images/works/youshare1.png";

const WorksPageData = [
  {
    id: "typing-speed",
    thumbnail: thumbnailTypingSpeed,
    title: "Typing Speed App",
    description: "Typing Speed App",
    createdYear: 2022,
    images: [
      "/images/works/typing-speed1.png",
      "/images/works/typing-speed2.png",
      "/images/works/typing-speed3.png",
      "/images/works/typing-speed4.png",
      "/images/works/typing-speed5.png",
    ],
    liveDemo: "https://vuquangtuan123.github.io/typing-speed/",
    source: "https://github.com/vuquangtuan123/typing-speed",
    builtWith: ["ReactJS", "Chakra UI", "Framer Motion"],
    builtWith: [
      { name: "ReactJS", destination: "https://reactjs.org" },
      { name: "Chakra UI", destination: "https://chakra-ui.com" },
    ],
  },
  {
    id: "you-share",
    thumbnail: thumbnailYouShare,
    title: "You Share App",
    description: "Youshare Social Media App",
    createdYear: 2022,
    images: [
      "/images/works/youshare1.png",
      "/images/works/youshare2.png",
      "/images/works/youshare3.png",
      "/images/works/youshare4.png",
      "/images/works/youshare5.png",
      "/images/works/youshare6.png",
      "/images/works/youshare7.png",
    ],
    liveDemo: "https://youshare.netlify.app/",
    source: "https://github.com/vuquangtuan123/typing-speed",
    builtWith: [
      { name: "ReactJS", destination: "https://reactjs.org" },
      { name: "TailwindCSS", destination: "https://tailwindcss.com" },
      { name: "Sanity", destination: "https://www.sanity.io" },
    ],
  },
  {
    id: "sorting-visualizer",
    thumbnail: thumbnailSortingVisualizer,
    title: "Sorting Visualizer",
    description: "Sorting Visualizer App",
    createdYear: 2021,
    images: [
      "/images/works/sorting-visualizer1.png",
      "/images/works/sorting-visualizer2.gif",
      "/images/works/sorting-visualizer3.gif",
    ],
    liveDemo: "https://vuquangtuan123.github.io/sorting-visualizers",
    source: "https://github.com/vuquangtuan123/sorting-visualizer",
    builtWith: [
      { name: "ReactJS", destination: "https://reactjs.org" },
      { name: "TailwindCSS", destination: "https://tailwindcss.com" },
      {
        name: "React Transition Group",
        destination: "https://reactcommunity.org/react-transition-group",
      },
    ],
  },
  {
    id: "google-calendar-clone",
    thumbnail: thumbnailGoogleCalendar,
    title: "Google Calendar Clone",
    description: "Google Calendar Clone",
    createdYear: 2021,
    images: [
      "/images/works/google-calendar-clone1.png",
      "/images/works/google-calendar-clone2.png",
      "/images/works/google-calendar-clone3.png",
    ],
    liveDemo: "https://tuanvu-calendar.vercel.app",
    source: "https://github.com/vuquangtuan123/google-calendar-clone",
    builtWith: [
      { name: "ReactJS", destination: "https://reactjs.org" },
      { name: "TailwindCSS", destination: "https://tailwindcss.com" },
      {
        name: "Framer Motion",
        destination: "https://www.framer.com/motion",
      },
    ],
  },
  {
    id: "spotify-clone",
    thumbnail: thumbnailSpotifyClone,
    title: "Spotify Clone",
    description: "Spotify Clone",
    createdYear: 2021,
    images: [
      "/images/works/spotify-clone1.png",
      "/images/works/spotify-clone2.png",
      "/images/works/spotify-clone3.png",
    ],
    liveDemo: "https://tuanvu-spotify.vercel.app",
    source: "https://github.com/vuquangtuan123/spotify-clone",
    builtWith: [
      { name: "ReactJS", destination: "https://reactjs.org" },
      { name: "NextJS", destination: "https://nextjs.org" },
      { name: "TailwindCSS", destination: "https://tailwindcss.com" },
    ],
  },
  {
    id: "disney-plus-clone",
    thumbnail: thumbnailDisneyPlusClone,
    title: "Disney Plus Clone",
    description: "Disney Plus Clone",
    createdYear: 2021,
    images: [
      "/images/works/disney-plus-clone1.png",
      "/images/works/disney-plus-clone2.png",
      "/images/works/disney-plus-clone3.png",
      "/images/works/disney-plus-clone4.png",
    ],
    liveDemo: "https://tuanvu-disneyplus-clone.vercel.app/",
    source: "https://github.com/vuquangtuan123/disney-plus-clone",
    builtWith: [{ name: "ReactJS", destination: "https://reactjs.org" }],
  },
  {
    id: "tesla-clone",
    thumbnail: thumbnailTeslaClone,
    title: "Tesla Clone",
    description: "Tesla Clone",
    createdYear: 2021,
    images: [
      "/images/works/tesla-clone1.png",
      "/images/works/tesla-clone2.png",
      "/images/works/tesla-clone3.png",
    ],
    liveDemo: "https://tuanvu-testla-clone.netlify.app",
    source: "https://github.com/vuquangtuan123/tesla-clone",
    builtWith: [{ name: "ReactJS", destination: "https://reactjs.org" }],
  },
  {
    id: "sorting-visualzier-demo",
    thumbnail: thumbnailSortingVisualizerDemo,
    title: "Sorting Visualizer Demo",
    description: "A demo for Sorting Visualizer App",
    createdYear: 2021,
    images: [
      "/images/works/sorting-visualizer-demo1.png",
      "/images/works/sorting-visualizer-demo2.png",
      "/images/works/sorting-visualizer-demo3.png",
    ],
    liveDemo: "https://tuanvu-sorting-visualizer.netlify.app",
    builtWith: [
      { name: "ReactJS", destination: "https://reactjs.org" },
      { name: "TailwindCSS", destination: "https://tailwindcss.com" },
    ],
  },
  {
    id: "weather-app",
    thumbnail: thumbnailWeatherApp,
    title: "Weather App",
    description: "A simple Weather App",
    createdYear: 2021,
    images: [
      "/images/works/weather-app1.png",
      "/images/works/weather-app2.png",
      "/images/works/weather-app3.png",
    ],
    liveDemo: "https://vuquangtuan123.github.io/weather-app-fetch",
    source: "https://github.com/vuquangtuan123/weather-app-fetch",
    builtWith: [{ name: "ReactJS", destination: "https://reactjs.org" }],
  },
  {
    id: "note-keeper",
    thumbnail: thumbnailNoteKeeper,
    title: "Note Keeper",
    description: "A simple Note Keeper App",
    createdYear: 2021,
    images: [
      "/images/works/note-keeper1.png",
      "/images/works/note-keeper2.png",
      "/images/works/note-keeper3.png",
    ],
    liveDemo: "https://simple-keeper-app.netlify.app",
    source: "https://github.com/vuquangtuan123/simple-keeper-app",
    builtWith: [
      { name: "ReactJS", destination: "https://reactjs.org" },
      { name: "Material UI", destination: "https://mui.com/" },
    ],
  },
  {
    id: "emojipedia",
    thumbnail: thumbnailEmojipedia,
    title: "Emojipedia",
    description: "Emojipedia",
    createdYear: 2021,
    images: ["/images/works/emojipedia1.png"],
    liveDemo: "https://tuanvu-emojipedia.netlify.app",
    source: "https://github.com/vuquangtuan123/emojipedia",
    builtWith: [{ name: "ReactJS", destination: "https://reactjs.org" }],
  },
  {
    id: "simon-game",
    thumbnail: thumbnailSimonGame,
    title: "Simon Game",
    description: "A simple Simon Game",
    createdYear: 2021,
    images: ["/images/works/simon-game1.png", "/images/works/simon-game2.png"],
    liveDemo: "https://vuquangtuan123.github.io/simon-game/",
    source: "https://github.com/vuquangtuan123/simon-game",
    builtWith: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
  },
  {
    id: "dicee-game",
    thumbnail: thumbnailDiceeGame,
    title: "Dicee Game",
    description: "A simple Dicee Game",
    createdYear: 2021,
    images: ["/images/works/dicee-game.png"],
    builtWith: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
  },
  {
    id: "tindog",
    thumbnail: thumbnailTindog,
    title: "Tindog",
    description: "A simple Landing Page",
    createdYear: 2021,
    images: ["/images/works/tindog.png"],
    builtWith: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
  },
];

export default WorksPageData;
