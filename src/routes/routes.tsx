import Homepage from "./Homepage/Homepage";
import Artifcats from "./Artifacts/Artifcats";
import Weapons from "./Weapons/Weapons";
import CharacterDevItems from "./CharacterDevItems/CharacterDevItems";
import Food from "./Food/Food";
import Furnishings from "./Furnishings/Furnishings";
import Gadgets from "./Gadets/Gadgets";
import Materials from "./Materials/Materials";
import PreciousItems from "./PreciousItems/PreciousItems";
import Quests from "./Quests/Quests";
import ErrorPage from "./ErrorPage/ErrorPage";

export const routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/weapons",
    element: <Weapons />,
  },
  {
    path: "/artifacts",
    element: <Artifcats />,
  },
  {
    path: "/devitems",
    element: <CharacterDevItems />,
  },
  {
    path: "/food",
    element: <Food />,
  },
  {
    path: "/materials",
    element: <Materials />,
  },
  {
    path: "/gadgets",
    element: <Gadgets />,
  },
  {
    path: "/quests",
    element: <Quests />,
  },
  {
    path: "/precious",
    element: <PreciousItems />,
  },
  {
    path: "/furnishings",
    element: <Furnishings />,
  },
];
