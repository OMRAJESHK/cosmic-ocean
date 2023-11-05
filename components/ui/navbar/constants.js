import { pageRoutes } from "@/routes/routes";

export const cosmicNavbars = [
  { id: 0, path: pageRoutes.home, label: "Home", isActive: true },
  {
    id: 1,
    path: pageRoutes.apod,
    label: "Astronomical Picture of the Day",
    isActive: false,
  },
  {
    id: 2,
    path: pageRoutes.neos,
    label: "Near Earth Objects",
    isActive: false,
  },
  {
    id: 3,
    path: pageRoutes.marsexpo,
    label: "Mars exploration",
    isActive: false,
  },
];
