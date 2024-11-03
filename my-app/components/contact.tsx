import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6">
      <h2 className="text-4xl font-bold mb-4 text-center">Contact</h2>
      <p className="text-center text-lg text-gray-600 mb-8">
        Get in touch! I&apos;d love to hear from you.
      </p>
      
      <div className="flex flex-col items-start space-y-6 text-center">
        <div className="flex items-center space-x-3 text-xl">
          <FaEnvelope className="" />
          <span>smonftwi1@gmail.com</span>
        </div>
        
        <div className="flex items-center space-x-3 text-xl">
          <FaPhoneAlt className="" />
          <span>+971508663790</span>
        </div>
        
        <div className="flex items-center space-x-3 text-xl">
          <FaMapMarkerAlt className="" />
          <span>Dubai, UAE</span>
        </div>
      </div>
    </section>
  );
}
