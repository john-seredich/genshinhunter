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
    img: weaponImg,
    id: 1,
  },
  {
    name: "Artifacts",
    img: artifactImg,
    id: 2,
  },
  {
    name: "Character Development Items",
    img: characterDevImg,
    id: 3,
  },
  {
    name: "Food",
    img: foodImg,
    id: 4,
  },
  {
    name: "Materials",
    img: materialImg,
    id: 5,
  },
  {
    name: "Gadgets",
    img: gadgetImg,
    id: 6,
  },
  {
    name: "Quests",
    img: questImg,
    id: 7,
  },
  {
    name: "Precious Items",
    img: preciousImg,
    id: 8,
  },
  {
    name: "Furnishings",
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
