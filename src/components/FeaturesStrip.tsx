import React from 'react';
import { Truck, ShieldCheck, MessageCircleHeart, CreditCard } from 'lucide-react';

export const FeaturesStrip: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Delivery Across the US!',
      description: 'Free delivery for all orders above $100',
      color: 'bg-rose-100 text-[#F76B5D]'
    },
    {
      icon: ShieldCheck,
      title: '100% Satisfaction Guarantee!',
      description: 'Providing help in case of dissatisfaction',
      color: 'bg-amber-100 text-[#F6B86E]'
    },
    {
      icon: MessageCircleHeart,
      title: 'Top-Notch Support',
      description: "Chat with us if you've any questions",
      color: 'bg-emerald-100 text-[#2C6B4B]'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'We use safest payment technologies',
      color: 'bg-sky-100 text-sky-600'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-100/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {features.map((feat, idx) => {
          const IconComponent = feat.icon;
          return (
            <div key={idx} className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-[#F8FAF5] transition-colors group">
              <div className={`w-14 h-14 rounded-2xl ${feat.color} flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#16352D] group-hover:text-[#F76B5D] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-900/60 mt-1">
                  {feat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
