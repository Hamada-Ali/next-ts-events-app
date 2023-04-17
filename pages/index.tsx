import React from "react";
import { getFeaturedEvents } from "../data/data";
import EventList from "@/components/events/EventList";

const HomePage = () => {


  const featuredResults = getFeaturedEvents();

  return <EventList data={featuredResults} />;
};

export default HomePage;
