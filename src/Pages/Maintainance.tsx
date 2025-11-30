import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
const Maintainance: React.FC = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/service-booking");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full bg-gray-900 flex justify-center py-6 px-4">
      <div className="mx-auto max-w-4xl w-full bg-gray-900 p-4 shadow-md">
        {/* Image Section */}
        <div className="w-full flex flex-col items-center">
          <img
            src="/src/assets/MaintainanceMt.png"
            alt="Motorcycle Maintenance"
            className="w-[1200px] object-cover"
          />
        </div>
        <div>
          {/* Book Now Button */}
          <button
            type="button"
            onClick={handleBookNow}
            className="mt-4 px-6 py-2 flex justify-start bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </div>

        {/* Body Text */}
        <div className="mt-6 text-justify text-[15px] leading-relaxed text-gray-200">
          <p className="mb-4">
            Just like how you rely on your motorcycle or scooter to commute your
            way across Nepal’s busy roads and tough terrains, you need to keep
            it in prime condition through regular servicing. Knowing the right
            time to service your motorcycle or scooter at home saves you both
            time and money and prevents unexpected breakdowns. We lead you
            through determining key indicators and servicing intervals according
            to your load condition and riding behavior in this detailed guide.
            Monitoring them closely keeps your two-wheeler at its best operating
            level while extending its lifespan.
          </p>

          <h2 className="text-xl font-bold mb-3">
            Referring to your motorcycle service manual:
          </h2>

          <p className="mb-4">
            Having your motorcycle servicing schedule at your command cannot be
            a lost to its performance and longevity. All models also have
            predefined servicing routines like oil change, chain adjustment, and
            brake service depending on how its engine and components have been
            engineered and produced.
          </p>

          <p className="mb-4">
            Especially in Nepalese roads where compound road condition,
            humidity, and dust are a daily occurrence, strict compliance with
            such schedules gives your vehicle a respite from excessive wear.
            This can be found in your owner’s manual and having this knowledge
            means having a definite idea when to intervene before minor issues
            turn into major, costly repairs.
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Manufacture’s Instructions and Their Importance</strong>
            </li>
          </ul>

          <p className="mb-4">
            Manufacturers develop service schedules according to massive tests
            and calculations specifying when parts or fluids are to be replaced
            to boost performance and safety. Following them ensures you stay
            inside the boundaries of peak efficiency and remain within
            regulations. For Nepalese motorcyclists, understanding this is
            extremely crucial as the environment takes a harder toll on the
            vehicle than usual.
          </p>
        </div>

        {/* Second Image */}
        <div className="w-full mt-6">
          <img
            src="/src/assets/MaintainancePic.png"
            alt="Motorcycle Maintenance"
            className="w-full object-cover"
          />
        </div>

        {/* Warranty Section */}
        <div className="mt-8 text-gray-200">
          <h2 className="text-xl font-bold mb-3">Warranty policy:</h2>
          <p className="mb-4">
            This warranty coverage on the Motorcycle shall be valid only if the
            customer avails all Free and Paid Services from Authorized YAMAHA
            dealer as per Recommended Service Schedule and only genuine Spare
            parts must be used. The customer shall ensure that each service is
            availed within 100 days from the date of previous service or as per
            recommended service schedule whichever is earlier. India Yamaha
            Motor Pvt. Ltd. (hereinafter referred to as YAMAHA) thank you for
            having purchased this YAMAHA motorcycle. In the unlikely event of
            your YAMAHA motorcycle requiring warranty service. So, please
            contact the nearest authorized dealer. We advise that you read this
            handbook carefully before you get in touch with our Authorized
            Dealer to avoid any inconvenience. YAMAHA will replace or repair at
            its Authorized Dealership free of charge, those parts which may be
            found on examination to have manufacturing defect, within 2 years
            from the date of sale of Motorcycle or first 30,000 kilometers of
            its operation, whichever occurs first, to the purchaser. YAMAHA
            warrants the products to be free from manufacturing defects for a
            period of two years from the date of sale of the Motorcycle or first
            30,000 kilometers of its operation, whichever occurs first. If
            during this period of warranty the Motorcycle proves to be defective
            due to material or workmanship,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintainance;
