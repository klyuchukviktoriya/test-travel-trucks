import sprite from "../assets/sprite.svg";

export const equipmentLabels = {
  AC: "AC",
  transmission: "Automatic",
  kitchen: "Kitchen",
  TV: "TV",
  bathroom: "Bathroom",
  water: "Water",
};

export const equipmentIcons = {
  AC: (
    <svg width="32" height="32">
      <use href={`${sprite}#icon-ac`} />
    </svg>
  ),
  transmission: (
    <svg width="32" height="32">
      <use href={`${sprite}#icon-automatic`} />
    </svg>
  ),
  TV: (
    <svg width="32" height="32">
      <use href={`${sprite}#icon-tv`} />
    </svg>
  ),
  bathroom: (
    <svg width="32" height="32">
      <use href={`${sprite}#icon-bathroom`} />
    </svg>
  ),
  kitchen: (
    <svg width="32" height="32">
      <use href={`${sprite}#icon-kitchen`} />
    </svg>
  ),
  water: (
    <svg width="32" height="32" fill="transparent" stroke="#101828">
      <use href={`${sprite}#icon-water`} />
    </svg>
  ),
};

export const vehicleTypeIcons = {
  panelTruck: (
    <svg width="32" height="32">
      <use href={`${sprite}#icon-van`} />
    </svg>
  ),
  fullyIntegrated: (
    <svg width="32" height="32">
      <use href={`${sprite}#icon-fully`} />
    </svg>
  ),
  alcove: (
    <svg width="32" height="32">
      <use href={`${sprite}#icon-alcove`} />
    </svg>
  ),
};

export const vehicleTypeLabels = {
  panelTruck: "Van",
  fullyIntegrated: "Fully Integrated",
  alcove: "Alcove",
};
