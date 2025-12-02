import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import css from "./Filter.module.scss";
import { fetchLocations } from "../../redux/filters/operations.js";
import {
  equipmentIcons,
  equipmentLabels,
  vehicleTypeIcons,
  vehicleTypeLabels,
} from "../../constants/filter.jsx";
import sprite from "../../assets/sprite.svg";
import { toast } from "react-toastify";
import Button from "../../common/Button/Button.jsx";

export default function Filter({ onApplyFilters }) {
  const [location, setLocation] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [isSuggestionsVisible, setSuggestionsVisible] = useState(false);
  const [vehicleType, setVehicleType] = useState("");
  const [equipment, setEquipment] = useState({
    AC: false,
    transmission: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    water: false,
  });

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const locations = await fetchLocations();
        setLocationSuggestions(locations);
        setFilteredLocations(locations);
      } catch (error) {
        toast.error(
          `Failed to load locations. ${
            error.response?.data?.message || "Please try again later."
          }`
        );
      }
    };
    loadLocations();
  }, []);

  const handleLocationInputChange = e => {
    const inputValue = e.target.value;
    setLocation(inputValue);
    setFilteredLocations(
      locationSuggestions.filter(loc =>
        loc.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  const handleSuggestionClick = loc => {
    setLocation(loc);
    setSuggestionsVisible(false);
  };

  const handleInputClick = () => {
    setFilteredLocations(locationSuggestions);
    setSuggestionsVisible(true);
  };

  const handleVehicleTypeChange = type => {
    setVehicleType(prev => (prev === type ? "" : type));
  };

  const handleEquipmentChange = key => {
    setEquipment(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleApplyFilters = () => {
    const originalLocation = location
      ? location
          .split(",")
          .map(part => part.trim())
          .reverse()
          .join(", ")
      : undefined;

    const filters = {
      location: originalLocation,
      vehicleType,
      transmission: equipment.transmission ? "automatic" : undefined,
      equipment: Object.keys(equipment).filter(
        key => equipment[key] && key !== "transmission"
      ),
    };

    onApplyFilters(filters);
  };

  const handleResetFilters = () => {
    setLocation("");
    setVehicleType("");
    setEquipment({
      AC: false,
      transmission: false,
      kitchen: false,
      TV: false,
      bathroom: false,
      water: false,
    });
    onApplyFilters({
      location: "",
      vehicleType: "",
      transmission: "",
      equipment: [],
    });
  };

  return (
    <div className={css.filter}>
      <div className={css.loc}>
        <label className={css.filter__title}>Location</label>
        <input
          type="text"
          value={location}
          onChange={handleLocationInputChange}
          placeholder="City"
          className={css.loc__input}
          onClick={handleInputClick}
          // onFocus={handleInputClick}
          onBlur={() => setTimeout(() => setSuggestionsVisible(false), 500)}
        />
        <svg
          className={`${css.loc__map} ${location ? css.loc__activeMap : ""}`}
          width="20"
          height="20"
        >
          <use href={`${sprite}#icon-map`} />
        </svg>
        {isSuggestionsVisible && filteredLocations.length > 0 && (
          <ul className={css.loc__suggestions}>
            {filteredLocations.map(loc => (
              <li
                key={loc}
                onClick={() => handleSuggestionClick(loc)}
                className={css.loc__suggestions_item}
              >
                {loc}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={css.filters}>
        <h4 className={css.filter__title}>Filters</h4>
        <div>
          <h3>Vehicle equipment</h3>
          <div className={css.filterLine}></div>
          <div className={css.filters__icons}>
            {Object.keys(equipmentLabels).map(key => (
              <Button
                key={key}
                className={`${css.filters__icon} ${
                  equipment[key] ? css.active : ""
                }`}
                onClick={() => handleEquipmentChange(key)}
              >
                <span>{equipmentIcons[key]}</span>
                <span>{equipmentLabels[key]}</span>
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3>Vehicle Type</h3>
          <div className={css.filterLine}></div>
          <div className={css.filters__icons}>
            {Object.keys(vehicleTypeIcons).map(key => (
              <Button
                key={key}
                className={`${css.filters__icon} ${
                  vehicleType === key ? css.active : ""
                }`}
                onClick={() => handleVehicleTypeChange(key)}
              >
                {vehicleTypeIcons[key]}
                <span>{vehicleTypeLabels[key]}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className={css.filters__buttons}>
        <Button
          className={css.filters__buttons_search}
          onClick={handleApplyFilters}
        >
          Search
        </Button>
        <Button
          className={css.filters__buttons_reset}
          onClick={handleResetFilters}
        >
          Reset filters
        </Button>
      </div>
    </div>
  );
}

Filter.propTypes = {
  onApplyFilters: PropTypes.func.isRequired,
};
