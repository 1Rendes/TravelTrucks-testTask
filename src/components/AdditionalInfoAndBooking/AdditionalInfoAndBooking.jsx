import { useState } from "react";
import AdditionalNavigation from "../AdditionalNavigation/AdditionalNavigation";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import BookingForm from "../BookingForm/BookingForm";
import css from "./AdditionalInfoAndBooking.module.css";

const AdditionalInfoAndBooking = () => {
  const [choosenTab, setChoosenTab] = useState("features");
  const handleSwitchTab = (tab) => {
    setChoosenTab(tab);
  };
  return (
    <div>
      <AdditionalNavigation
        handleSwitchTab={handleSwitchTab}
        choosenTab={choosenTab}
      />
      <div className={css.groupFeaturesAndBooking}>
        {choosenTab === "features" ? <Features /> : <Reviews />}
        <BookingForm />
      </div>
    </div>
  );
};

export default AdditionalInfoAndBooking;
