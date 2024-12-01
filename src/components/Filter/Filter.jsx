import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import css from "./Filter.module.css";
import { fetchLocations } from "../../redux/filters/operations.js";
import {
  equipmentIcons,
  equipmentLabels,
  vehicleTypeIcons,
  vehicleTypeLabels,
} from "../../constants/filter.jsx";
import sprite from "../../assets/sprite.svg";

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
        console.error("Error loading locations:", error);
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
    <div className={css.filterContainer}>
      <div className={css.loc}>
        <label className={css.locTitle}>Location</label>
        <input
          type="text"
          value={location}
          onChange={handleLocationInputChange}
          placeholder="City"
          className={css.locInput}
          onClick={handleInputClick}
          // onFocus={handleInputClick}
          onBlur={() => setTimeout(() => setSuggestionsVisible(false), 500)}
        />
        <svg
          className={`${css.map} ${location ? css.activeMap : ""}`}
          width="20"
          height="20"
        >
          <use href={`${sprite}#icon-map`} />
        </svg>
        {isSuggestionsVisible && filteredLocations.length > 0 && (
          <ul className={css.suggestionsList}>
            {filteredLocations.map(loc => (
              <li
                key={loc}
                onClick={() => handleSuggestionClick(loc)}
                className={css.suggestionItem}
              >
                {loc}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={css.filters}>
        <h4 className={css.filtersTitle}>Filters</h4>
        <div className={css.filterBlock}>
          <label>Vehicle equipment</label>
          <div className={css.filterLine}></div>
          <div className={css.filterButtons}>
            {Object.keys(equipmentLabels).map(key => (
              <button
                key={key}
                className={`${css.filterButton} ${
                  equipment[key] ? css.active : ""
                }`}
                onClick={() => handleEquipmentChange(key)}
              >
                <span className={css.icon}>{equipmentIcons[key]}</span>
                <span className={css.label}>{equipmentLabels[key]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={css.filterBlock}>
          <label>Vehicle Type</label>
          <div className={css.filterLine}></div>
          <div className={css.filterButtons}>
            {Object.keys(vehicleTypeIcons).map(key => (
              <button
                key={key}
                className={`${css.filterButton} ${
                  vehicleType === key ? css.active : ""
                }`}
                onClick={() => handleVehicleTypeChange(key)}
              >
                {vehicleTypeIcons[key]}
                <span>{vehicleTypeLabels[key]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={css.searchButtons}>
        <button className={css.searchButton} onClick={handleApplyFilters}>
          Search
        </button>
        <button className={css.resetButton} onClick={handleResetFilters}>
          Reset filters
        </button>
      </div>
    </div>
  );
}

Filter.propTypes = {
  onApplyFilters: PropTypes.func.isRequired,
};
