import weaponImg from "./assets/images/inventory_icon_weapon.webp";
import artifactImg from "./assets/images/inventory_icons_artifacts.webp";
import characterDevImg from "./assets/images/inventory_icon_character_development_items.webp";
import foodImg from "./assets/images/inventory_icon_food.webp";
import materialImg from "./assets/images/inventory_icon_materials.webp";
import gadgetImg from "./assets/images/inventory_icon_gadgets.webp";
import questImg from "./assets/images/inventory_icon_quest.webp";
import preciousImg from "./assets/images/inventory_icon_precious_items.webp";
import furnshingImg from "./assets/images/inventory_icon_furnishings.webp";

export const links = [
  {
    name: "Weapons",
    route: "weapons",
    img: weaponImg,
    id: 1,
  },
  {
    name: "Artifacts",
    route: "artifacts",
    img: artifactImg,
    id: 2,
  },
  {
    name: "Character Development Items",
    route: "devitems",
    img: characterDevImg,
    id: 3,
  },
  {
    name: "Food",
    route: "food",
    img: foodImg,
    id: 4,
  },
  {
    name: "Materials",
    route: "materials",
    img: materialImg,
    id: 5,
  },
  {
    name: "Gadgets",
    route: "gadgets",
    img: gadgetImg,
    id: 6,
  },
  {
    name: "Quests",
    route: "quests",
    img: questImg,
    id: 7,
  },
  {
    name: "Precious Items",
    route: "precious",
    img: preciousImg,
    id: 8,
  },
  {
    name: "Furnishings",
    route: "furnishings",
    img: furnshingImg,
    id: 9,
  },
];

// export const linkElement = links.map((link) => {
//   return (
//     <li key={link}>
//       <Link to={link.toLowerCase()}>{link}</Link>
//     </li>
//   );
// });
