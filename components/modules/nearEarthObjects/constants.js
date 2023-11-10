import { formatDecimal } from "@/utils/commons";
import amor from "assets/images/neo/amor-class.png";
import apollo from "assets/images/neo/apollo-class.png";
import aten from "assets/images/neo/aten-class.png";
import atira from "assets/images/neo/atira-class.png";

export const neoHeading = {
  title: "Near-Earth Objects (NEOs)",
  description: `Are a group of celestial objects that have orbits that bring them into
  proximity with Earth. NEOs can be classified into three main
  categories: asteroids, comets, and meteoroids. These objects are of
  particular interest to scientists and astronomers because of their
  potential to impact Earth and the valuable insights they can provide
  about the early solar system.`,
};

export const neoTableColumns = [
  { id: 0, key: "name", name: "Name" },
  { id: 1, key: "estimated_diameter", name: "Estimated Diameter" },
  { id: 2, key: "perihelion_distance", name: "Perihelion Distance" },
  { id: 3, key: "aphelion_distance", name: "Aphelion Distance" },
  { id: 4, key: "is_potentially_hazardous_asteroid", name: "Is Hazardious" },
  { id: 5, key: "orbit_class", name: "Oribital Class" },
];

export const closeApproachesColumns = [
  { id: 1, key: "close_approach_date_full", name: "Close Approach Date" },
  { id: 2, key: "velocity", name: "Relative Velocity" },
  { id: 3, key: "near_miss_distance", name: "Miss Distance" },
];

export const orbitClasses = [
  {
    id: 0,
    title: "Atira or Interior-Earth Objects (IEOs)",
    subTitle: "ATI",
    range: "Less than 1 Astronomical Unit",
    description: `These NEOs have orbits that entirely lie within Earth's
    orbit. In other words, they stay closer to the Sun than
    Earth. The semi-major axis of their orbits is less than 1
    astronomical unit (AU), and they never venture beyond
    Earth's orbit.`,
    url: atira,
  },
  {
    id: 1,
    title: "Amor Asteroids",
    subTitle: "AMO",
    range: "Between 1.017 and 1.3 Astronomical Unit",
    description: `Amor asteroids have orbits that approach but do not cross
    Earth 's orbit. Their orbits typically have a perihelion
    distance (closest approach to the Sun). They come close to
    Earth 's orbit without intersecting it.`,
    url: amor,
  },
  {
    id: 2,
    title: "Apollo Asteroids",
    subTitle: "APO",
    range: "Greater than 1 Astronomical Unit",
    description: `Apollo asteroids have orbits that cross Earth 's orbit.
    Their eccentric orbits bring them near Earth. They have a
    wide range of perihelion distances.`,
    url: apollo,
  },
  {
    id: 3,
    title: "Aten Asteroids",
    subTitle: "ATE",
    range: "Less than 1 Astronomical Unit",
    description: `Aten asteroids are similar to Apollo asteroids. They spend
    more time within Earth  's orbit. They often have orbits
    that bring them within Earth  's vicinity.`,
    url: aten,
  },
];

export const neoDetailsDesc = [
  {
    id: 0,
    title: "Orbital Period (in days)",
    value: "orbital_period",
  },
  {
    id: 1,
    title: "Perihelion Distance",
    value: "perihelion_distance",
  },
  {
    id: 2,
    title: "Aphelion Distance",
    value: "aphelion_distance",
  },
  {
    id: 3,
    title: "Is Potentially Hazardious",
    value: "is_potentially_hazardous_asteroid",
  },
  {
    id: 4,
    title: "Estimated Diameter",
    value: "estimated_diameter",
  },
  {
    id: 5,
    title: "First Observed",
    value: "first_observation_date",
  },
  {
    id: 6,
    title: "Last Observed",
    value: "last_observation_date",
  },
];

export const getCloseApproaches = (selectedRow = {}) => {
  const updatedApproaches = { past: [], future: [] };
  if (Object.keys(selectedRow).length > 0) {
    const currentYear = new Date().getFullYear();
    const closeApproachData = selectedRow?.close_approach_data || [];

    const LIMIT = 5;
    let pastCount = 0;
    let futureCount = 0;

    for (const item of closeApproachData) {
      let row = {};
      if (pastCount < LIMIT || futureCount < LIMIT) {
        const itemDate = new Date(item.close_approach_date).getFullYear();
        row = item;
        row.velocity = `${formatDecimal(
          item?.relative_velocity?.kilometers_per_second,
        )} km/s`;
        row.near_miss_distance = `${formatDecimal(
          item?.miss_distance?.astronomical,
          3,
        )} AU`;
        if (itemDate < currentYear) {
          if (pastCount < LIMIT) {
            updatedApproaches.past = [...updatedApproaches.past, row];
            pastCount++;
          }
        } else {
          if (futureCount < LIMIT) {
            updatedApproaches.future = [...updatedApproaches.future, row];
            futureCount++;
          }
        }
      } else {
        break;
      }
    }
    return updatedApproaches;
  }
  return updatedApproaches;
};
