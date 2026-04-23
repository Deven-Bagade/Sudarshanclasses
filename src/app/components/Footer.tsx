import { MapPin, Phone, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg mb-4">Sudarshan Classes</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building strong foundations for academic success. Coaching for SSC, CBSE, JEE, CET, NEET, Diploma and Engineering Students.
            </p>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg mb-4">Address</h3>
            <div className="flex gap-3 text-gray-400 text-sm">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>
                2nd Floor, Ganesh Krupa Building,<br />
                Opposite Mahavir Shopping Centre,<br />
                Agra Road, Above R.D. Jewellers,<br />
                Kalyan West, Maharashtra
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5" />
                <div>
                  <p>9372167337</p>
                  <p>8898138232</p>
                  <p>9867708423</p>
                  <p>8369183165</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours Section */}
          <div>
            <h3 className="text-lg mb-4">Business Hours</h3>
            <div className="flex gap-3 text-gray-400 text-sm">
              <Clock className="w-5 h-5 flex-shrink-0" />
              <div>
                <p>Monday to Sunday</p>
                <p>8:00 AM - 9:00 PM</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Sudarshan Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
