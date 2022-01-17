import thumbnailTindog from "../public/images/works/tindog.png";
import thumbnailDiceeGame from "../public/images/works/dicee-game.png";
import thumbnailSimonGame from "../public/images/works/simon-game1.png";
import thumbnailNoteKeeper from "../public/images/works/note-keeper3.png";
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
    liveDemo: "https://tuanvu-calendar.vercel.app/",
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
    liveDemo: "https://simple-keeper-app.netlify.app/",
    source: "https://github.com/vuquangtuan123/simple-keeper-app",
    builtWith: [
      { name: "ReactJS", destination: "https://reactjs.org" },
      { name: "Material UI", destination: "https://mui.com/" },
    ],
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
