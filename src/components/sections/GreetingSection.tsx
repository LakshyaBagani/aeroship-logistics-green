import { Handshake, Calendar, MapPin, Globe, Truck, Plane, Ship } from "lucide-react";
import greetingImage from "@/assets/greeting.png";

export default function GreetingSection() {
  return (
    <section className="relative py-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #fefefe 0%, #f8faf9 25%, #f1f5f3 50%, #f8faf9 75%, #fefefe 100%)'
    }}>
      {/* Soft background pattern */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(134, 162, 139, 0.12) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(107, 142, 115, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px'
        }}></div>
      </div>
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/15 backdrop-blur-[0.5px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and welcome */}
          <div className="space-y-8">
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200" style={{
                boxShadow: '0 20px 40px rgba(134, 162, 139, 0.1), 0 8px 16px rgba(0, 0, 0, 0.05)'
              }}>
                <img
                  src={greetingImage}
                  alt="Aeroship Logistics"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="mt-6 flex items-center gap-3">
                  <Handshake className="w-8 h-8" style={{ color: '#6b8e6b' }} />
                  <div>
                    <h2 className="text-2xl font-bold" style={{ color: '#2d3748' }}>
                      Welcome to Aeroship Logistics
                    </h2>
                    <p className="text-sm" style={{ color: '#6b8e6b' }}>
                      Your trusted logistics partner since 2011
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6" style={{ color: '#6b8e6b' }} />
                <span className="text-lg font-semibold" style={{ color: '#6b8e6b' }}>
                  Established in 2011
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: '#2d3748' }}>
                International Freight Forwarding Company
              </h3>
              
              <p className="text-lg leading-relaxed" style={{ color: '#4a5568' }}>
                Aeroship Logistics Pvt Ltd is an International Freight Forwarding Company 
                Established in 2011, Delhi based have presence in Gujrat & Bangalore
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                Taking into consideration the demand of customers, cargo people offers all type of 
                transportation services of shipments by rail, road and air. Consignments are picked 
                up from the desired locations mentioned by the customer and are delivered at the 
                destination of their choice.
              </p>
              
              <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                An excellent network of global associates promises safe and timely delivery of the 
                cargo to the client. The company also provides a comprehensive range of value-added 
                distribution services for export and import of shipments (LCL/FCL) by air or ocean.
              </p>
            </div>

            {/* Service highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 hover:border-green-300 transition-all duration-300" style={{
                boxShadow: '0 4px 12px rgba(134, 162, 139, 0.08)'
              }}>
                <div className="flex items-center gap-3 mb-2">
                  <Plane className="w-5 h-5" style={{ color: '#6b8e6b' }} />
                  <span className="font-semibold text-sm" style={{ color: '#2d3748' }}>Air Freight</span>
                </div>
                <p className="text-xs" style={{ color: '#4a5568' }}>Fast and reliable air cargo services</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 hover:border-green-300 transition-all duration-300" style={{
                boxShadow: '0 4px 12px rgba(134, 162, 139, 0.08)'
              }}>
                <div className="flex items-center gap-3 mb-2">
                  <Ship className="w-5 h-5" style={{ color: '#6b8e6b' }} />
                  <span className="font-semibold text-sm" style={{ color: '#2d3748' }}>Ocean Freight</span>
                </div>
                <p className="text-xs" style={{ color: '#4a5568' }}>Cost-effective sea transportation</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 hover:border-green-300 transition-all duration-300" style={{
                boxShadow: '0 4px 12px rgba(134, 162, 139, 0.08)'
              }}>
                <div className="flex items-center gap-3 mb-2">
                  <Truck className="w-5 h-5" style={{ color: '#6b8e6b' }} />
                  <span className="font-semibold text-sm" style={{ color: '#2d3748' }}>Road & Rail</span>
                </div>
                <p className="text-xs" style={{ color: '#4a5568' }}>Domestic and cross-border transport</p>
              </div>
            </div>

            {/* Global presence */}
            <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200">
              <Globe className="w-5 h-5" style={{ color: '#6b8e6b' }} />
              <div>
                <p className="text-sm font-medium" style={{ color: '#2d3748' }}>Global Network</p>
                <p className="text-xs" style={{ color: '#4a5568' }}>
                  Delhi • Gujarat • Bangalore • International Partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}