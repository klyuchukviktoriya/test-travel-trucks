import sprite from "../assets/sprite.svg";

export const equipmentLabels = {
  AC: "AC",
  transmission: "Automatic",
  kitchen: "Kitchen",
  TV: "TV",
  bathroom: "Bathroom",
  water: "Water",
};

export const equipmentLabelsTruck = {
  AC: "AC",
  transmission: "Automatic",
  kitchen: "Kitchen",
  TV: "TV",
  radio: "Radio",
  gas: "Gas",
  bathroom: "Bathroom",
  water: "Water",
  engine: "Petrol",
  refrigerator: "Refrigerator",
  microwave: "Microwave",
};

export const equipmentIcons = {
  AC: (
    <svg>
      <use href={`${sprite}#icon-ac`} />
    </svg>
  ),
  transmission: (
    <svg>
      <use href={`${sprite}#icon-automatic`} />
    </svg>
  ),
  TV: (
    <svg>
      <use href={`${sprite}#icon-tv`} />
    </svg>
  ),
  bathroom: (
    <svg>
      <use href={`${sprite}#icon-bathroom`} />
    </svg>
  ),
  kitchen: (
    <svg>
      <use href={`${sprite}#icon-kitchen`} />
    </svg>
  ),
  water: (
    <svg fill="transparent" stroke="#121212">
      <use href={`${sprite}#icon-water`} />
    </svg>
  ),
};

export const equipmentIconsTruck = {
  AC: (
    <svg>
      <use href={`${sprite}#icon-ac`} />
    </svg>
  ),
  transmission: (
    <svg>
      <use href={`${sprite}#icon-automatic`} />
    </svg>
  ),
  TV: (
    <svg>
      <use href={`${sprite}#icon-tv`} />
    </svg>
  ),
  bathroom: (
    <svg>
      <use href={`${sprite}#icon-bathroom`} />
    </svg>
  ),
  gas: (
    <svg fill="transparent" stroke="#121212">
      <use href={`${sprite}#icon-gas`} />
    </svg>
  ),
  kitchen: (
    <svg>
      <use href={`${sprite}#icon-kitchen`} />
    </svg>
  ),
  water: (
    <svg fill="transparent" stroke="#121212">
      <use href={`${sprite}#icon-water`} />
    </svg>
  ),
  engine: (
    <svg fill="#121212" stroke="transparent">
      <use href={`${sprite}#icon-petrol`} />
    </svg>
  ),
  radio: (
    <svg fill="#121212" stroke="transparent">
      <use href={`${sprite}#icon-radio`} />
    </svg>
  ),
  refrigerator: (
    <svg fill="#121212" stroke="transparent">
      <use href={`${sprite}#icon-refrigerator`} />
    </svg>
  ),
  microwave: (
    <svg fill="transparent" stroke="#121212">
      <use href={`${sprite}#icon-microwave`} />
    </svg>
  ),
};

export const vehicleTypeIcons = {
  panelTruck: (
    <svg>
      <use href={`${sprite}#icon-van`} />
    </svg>
  ),
  fullyIntegrated: (
    <svg>
      <use href={`${sprite}#icon-fully`} />
    </svg>
  ),
  alcove: (
    <svg>
      <use href={`${sprite}#icon-alcove`} />
    </svg>
  ),
};

export const vehicleTypeLabels = {
  panelTruck: "Van",
  fullyIntegrated: "Fully Integrated",
  alcove: "Alcove",
};
