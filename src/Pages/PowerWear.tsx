import YamahaStyle from "../assets/YamahaStyle.png";

export default function PowerWear() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex justify-center  py-1 px-4">
        <div className="max-w-4xl w-full">
          {/* IMAGE SECTION */}
          <div className="w-[1100px] flex justify-center ml-12 mb-8">
            <img
              src={YamahaStyle}
              alt="Yamaha MT-15 Riding Jacket Offer"
              className="w-[1280px] rounded-lg shadow-lg mr-64"
            />
          </div>
          <div className=" flex justify-start ">
            <a
              href="https://yamaha-motor.com/shop/gear?srsltid=AfmBOopbBNmrK32gtbhqbq-TXDxkZtZfLwRSfWHypZhRoqsdyEPr8ag2"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition inline-block"
            >
              Buy Now
            </a>
          </div>
          {/* HEADING 1 */}
          <div className="lg:gap-10 mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Yamaha Nepal Launches Exclusive Riding Jacket Offer for MT-15
              Version 2 Buyers Nationwide
            </h2>

            {/* BULLETS FOR FEATURES */}
            <ul className="list-disc list-inside text-gray-300 mb-6 leading-7">
              <li>
                High-quality Premium Riding Jacket developed in collaboration
                with Kivor.
              </li>
              <li>
                Available for all MT-15 V2 buyers, whether via full-cash payment
                or flexible financing.
              </li>
              <li>
                Jacket offers premium finishing, durability, and safety for
                riders.
              </li>
              <li>Exclusive campaign for Grey and Blue color variants only.</li>
              <li>
                Reflects Yamaha Nepal’s commitment to enhancing the rider
                experience on and off the road.
              </li>
              <li>
                Added value for loyal customers, as highlighted by Mr. Deepak
                Karnajit, Executive Director & CEO of MAW Rides.
              </li>
            </ul>

            {/* HEADING 2 */}
            <h2 className="text-2xl font-bold mb-4">
              Gear Up in Style: Exclusive Premium Riding Jacket Offer for MT-15
              Version 2 Buyers
            </h2>
            <ul className="list-disc list-inside text-gray-300 mb-6 leading-7">
              <li>
                <strong> Eligibility:</strong> Only MT-15 V2 buyers of Grey and
                Blue variants can avail of this jacket offer.
              </li>
              <li>
                This restriction is likely to focus the campaign on popular
                models/colors and manage inventory efficiently.
              </li>
              <li>
                Yamaha Nepal emphasizes its commitment to customer satisfaction,
                not just by selling bikes but also by enhancing the overall
                ownership and riding experience.
              </li>
              <li>Exclusive campaign for Grey and Blue color variants only.</li>
              <li>
                Reflects Yamaha Nepal’s commitment to enhancing the rider
                experience on and off the road.
              </li>
              <li>
                The quote from the CEO highlights that this is a value-added
                initiative, reinforcing that Yamaha cares about loyal customers
                and wants to reward them with a practical, high-quality gift.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
