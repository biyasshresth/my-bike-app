import React from "react";

export default function LegalNoticesYamaha() {
  return (
    <div className="min-h-screen bg-gray-950 py-10">
      <div className="max-w-5xl mx-auto p-10 bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 tracking-wide">
          LEGAL NOTICES
        </h1>

        {/* Main content */}
        <div className="text-gray-200 space-y-6 text-sm leading-relaxed">
          <p className="text-sm underline">
            <strong>© Yamaha Sportmotorcycle GmbH. All rights reserved.</strong>
          </p>

          <p>
            Any and all visible and non-visible components of this website,
            especially videos, animations, images, text, sound, and graphics, as
            well as their arrangement, are protected under the provisions of
            intellectual property law, in particular by copyright. The content
            of Yamaha websites is not permitted to be used, changed, duplicated,
            handed out, disseminated or made available to third parties for
            commercial purposes. Some Yamaha websites also contain content which
            is subject to the intellectual property rights of third parties. All
            trademarks on Yamaha websites are, unless otherwise expressly
            specified, protected by trademark, which particularly applies to
            Yamaha labels, emblems, company logos or nameplates.
          </p>

          <p>
            The intellectual property contained in Yamaha websites, such as in
            particular copyrights and trademark rights, patents and designs, is
            protected, in which context it is expressly pointed out that through
            these websites no licenses for the utilization of these rights are
            granted by Yamaha or third parties.
          </p>

          <p>
            Despite the fact that Yamaha websites are created with utmost care,
            Yamaha cannot guarantee that the information contained herein is
            correct and complete. Yamaha shall assume no responsibility for
            damage arising from the use of Yamaha websites, unless this resulted
            from at least gross negligence on the part of Yamaha.
          </p>

          <p>
            Yamaha uses cookies to improve our website. If you would like more
            information, please refer to our privacy policy.
          </p>
        </div>

        {/* The two small footer-style texts */}
        <div className="mt-10 text-white text-sm space-y-10">
          <p className="opacity-70 leading-relaxed text-center">
            The stated discount is exclusively available at participating,
            authorized Yamaha dealers. All information is non-binding. Printing,
            layout, and typographical errors as well as other mistakes are
            reserved. Information may be changed at any time without prior
            notice.
          </p>

          <p className="opacity-70 leading-relaxed text-center">
            The illustrated vehicles may vary in selected details from the
            production models and some illustrations feature optional equipment
            available at additional cost. All information concerning the scope
            of supply, appearance, services, dimensions and weight is
            non-binding and specified with the provision that errors, for
            instance in printing, setting and/or typing, may occur; such
            information is subject to change without notice. Please note that
            model specifications may vary from country to country. In the case
            of coated surfaces, there may be color differences due to the usual
            process fluctuations. The consumption values stated refer to the
            roadworthy series condition of the vehicles at the time of factory
            delivery.
          </p>
        </div>
      </div>
      {/* Little description section  */}
      <hr className="border-t border-white/50 my-1 " />
      <div className="max-w-screen  mx-auto lg:py-10 px-16 lg:px-72 text-center text-sm bg-gray-950 text-white/70 space-y-10 leading-relaxed mb-6">
        <h2 className="text-3xl font-bold">Note</h2>
        <p>
          The stated discount is exclusively available at participating,
          authorized Mt-15 dealers. All information is non-binding. Printing,
          layout, and typographical errors as well as other mistakes are
          reserved. Information may be changed at any time without prior notice.
          The illustrated vehicles may vary in selected details from the
          production models and some illustrations feature optional equipment
          available at additional cost.
        </p>
        <p>
          The illustrated vehicles may vary in selected details from the
          production models and some illustrations feature optional equipment
          available at additional cost. All information concerning the scope of
          supply, appearance, services, dimensions and weights is non-binding
          and specified with the proviso that errors, for instance in printing,
          setting and/or typing, may occur; such information is subject to
          change without notice. Please note that model specifications may vary
          from country to country. In the case of coated surfaces, there may be
          color differences due to the usual process fluctuations. The
          consumption values stated refer to the roadworthy series condition of
          the vehicles at the time of factory delivery. The illustrated vehicles
          may vary in selected details from the production models and some
          illustrations feature optional equipment available at additional cost.
        </p>
      </div>
    </div>
  );
}
