"use client"

import WeBreakTheSystemSection from "./components/WeBreakTheSystemSection";
import PopularFlightsSection from "./components/PopularFlightsSection";
import ChipFlightsSection from "./components/ChipFlightsSection";
import BlogSection from "./components/BlogSection";
import AdvantagesSection from "./components/AdvantagesSection";
import PopularFlightDirectionsSection from "./components/PopularFlightDirectionsSection";
import SearchFlightsSection from "./components/SearchFlightsSection";

export default function Home() {
  return (
    <>
      <SearchFlightsSection />
      <AdvantagesSection />
      <PopularFlightDirectionsSection />
      <WeBreakTheSystemSection />
      <PopularFlightsSection />
      <ChipFlightsSection />
      <BlogSection />
    </>
  );
}

