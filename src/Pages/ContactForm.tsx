import React, { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormData {
  fullName: string;
  email: string;
  address: string;
  phone: string;
  subject: string;
  showroom: string;
  message: string;
}

interface ContactFormErrors {
  fullName?: string;
  email?: string;
  address?: string;
  phone?: string;
  subject?: string;
  showroom?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    subject: "",
    showroom: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "This is a required field.";
    if (!formData.email.trim()) newErrors.email = "This is a required field.";
    if (!formData.address.trim())
      newErrors.address = "This is a required field.";
    if (!formData.phone.trim()) newErrors.phone = "This is a required field.";
    if (!formData.subject.trim())
      newErrors.subject = "This is a required field.";
    if (!formData.showroom.trim())
      newErrors.showroom = "This is a required field.";
    if (!formData.message.trim())
      newErrors.message = "This is a required field.";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        address: "",
        phone: "",
        subject: "",
        showroom: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-8">
      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.765768943094!2d85.31234711503794!3d27.71517263278296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18523a70fcbf%3A0xccfd41ba080cb240!2sYamaha%20Tripureshwor!5e0!3m2!1sen!2snp!4v1700000000000"
        width="100%"
        height="300"
        className="border-0"
        loading="lazy"
        title="Map"
      ></iframe>

      <div className="w-full max-w-5xl bg-gray-300 p-8 mt-6 rounded shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column - Contact Info */}
          <div className="px-4 py-4 gap-5">
            <p className="font-semibold text-lg gap-5 underline mb-2">CONTACT US</p>
            <p className="text-sm gap-2  mb-1 mt-1">MAW Rides Pvt. Ltd.</p>
            <p className="text-sm gap-2  mb-3 mt-2">Tripureshwor, Kathmandu</p>
            <p className="text-sm gap-2  mb-3 mt-3">
              ✓ Toll Free (NTC): <br /> <p className="px-3">1660011044</p>
            </p>
            <p className="text-sm gap-2  mb-3 mt-3">
              ✓ Toll Free (NCELL): <br /> <p className="px-3">9801570044</p>
            </p>
            <p className="text-sm gap-2  mb-1 mt-1">
              ✓ Want to join info Yamaha Dealer?
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="col-span-1 md:col-span-1">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Full Name */}
              <div className="flex flex-col">
                <label htmlFor="fullName" className="font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`border p-2 rounded ${
                    errors.fullName ? "border-red-500" : "border-gray-400"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`border p-2 rounded ${
                    errors.email ? "border-red-500" : "border-gray-400"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <label htmlFor="address" className="font-semibold">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className={`border p-2 rounded ${
                    errors.address ? "border-red-500" : "border-gray-400"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-semibold">
                  Phone *
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className={`border p-2 rounded ${
                    errors.phone ? "border-red-500" : "border-gray-400"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label htmlFor="subject" className="font-semibold">
                  Subject *
                </label>
                <select
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`border p-2 rounded ${
                    errors.subject ? "border-red-500" : "border-gray-400"
                  }`}
                >
                  <option value="">Select Subject</option>
                  <option value="Become a Dealer">Become a Dealer</option>
                  <option value="Complaints Register">
                    Complaints Register
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-sm">{errors.subject}</p>
                )}
              </div>

              {/* Your Message */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="message" className="font-semibold">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your Message"
                  className={`border p-2 rounded ${
                    errors.message ? "border-red-500" : "border-gray-400"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              {/* Showroom - full width */}
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="showroom" className="font-semibold">
                  Nearest Yamaha Showroom *
                </label>
                <select
                  name="showroom"
                  id="showroom"
                  value={formData.showroom}
                  onChange={handleChange}
                  className={`border p-2 rounded ${
                    errors.showroom ? "border-red-500" : "border-gray-400"
                  }`}
                >
                  <option value="">Select Showroom</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                  <option value="Showroom 1">Showroom 1</option>
                  <option value="Showroom 2">Showroom 2</option>
                  <option value="Showroom 3">Showroom 3</option>
                </select>
                {errors.showroom && (
                  <p className="text-red-500 text-sm">{errors.showroom}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-blue-500 w-full"
                >
                  Submit
                </button>
                {Object.keys(errors).length > 0 && (
                  <p className="text-red-500 mt-2 text-sm">
                    Please correct errors before submitting this form.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
