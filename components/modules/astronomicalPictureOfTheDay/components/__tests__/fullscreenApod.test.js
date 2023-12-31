import React from "react";
import FullscreenApod from "../fullscreenApod";
import { screen, render } from "@testing-library/react";

const selectedApod = {
  copyright: "\nMehmet Ergün\n",
  date: "2023-11-19",
  explanation:
    "That's no sunspot. It's the International Space Station (ISS) caught passing in front of the Sun. Sunspots, individually, have a dark central umbra, a lighter surrounding penumbra, and no Dragon capsules attached.  By contrast, the ISS is a complex and multi-spired mechanism, one of the largest and most complicated spacecraft ever created by humanity.  Also, sunspots circle the Sun, whereas the ISS orbits the Earth.  Transiting the Sun is not very unusual for the ISS, which orbits the Earth about every 90 minutes, but getting one's location, timing and equipment just right for a great image is rare.  The featured picture combined three images all taken in 2021 from the same location and at nearly the same time. One image -- overexposed -- captured the faint prominences seen across the top of the Sun, a second image -- underexposed -- captured the complex texture of the Sun's chromosphere, while the third image -- the hardest to get -- captured the space station as it shot across the Sun in a fraction of a second.  Close inspection of the space station's silhouette even reveals a docked Dragon Crew capsule.   Follow APOD on Instagram in: Arabic, English, Persian, Portuguese, and Taiwanese",
  hdurl: "https://apod.nasa.gov/apod/image/2311/IssSun_Ergun_1752.jpg",
  id: "de6c142d-fa10-4440-9601-8b4bf2ef0a91",
  media_type: "image",
  service_version: "v1",
  title: "Space Station, Solar Prominences, Sun",
  url: "https://apod.nasa.gov/apod/image/2311/IssSun_Ergun_960.jpg",
};

describe("APOD Full screen Testsing", () => {
  it("should render full Image", () => {
    // Arrange
    render(<FullscreenApod apodState={selectedApod} />);
    // Act
    const imgElem = screen.getByRole("img", {
      name: "Space Station, Solar Prominences, Sun",
    });
    // Assert
    expect(imgElem).toBeInTheDocument();
  });
  it("should render description", () => {
    render(<FullscreenApod apodState={selectedApod} />);
    const descElem = screen.getByText(/That's no sunspot./, { exact: false });
    expect(descElem).toBeInTheDocument();
  });
});
