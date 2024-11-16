import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonial = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        
        <blockquote className="text-2xl font-medium text-gray-900 mb-8">
          "The project{' '}
          <a 
            href="https://melonisx.pro/Gh9dwvJY?fbclid=%7Bfbclid%7D&utm_campaign=%7B%7Bcampaign.name%7D%7D&utm_source=%7B%7Bsite_source_name%7D%7D&utm_placement=%7B%7Bplacement%7D%7D&campaign_id=%7B%7Bcampaign.id%7D%7D&adset_id=%7B%7Badset.id%7D%7D&ad_id=%7B%7Bad.id%7D%7D&adset_name=%7B%7Badset.name%7D%7D&ad_name=%7B%7Bad.name%7D%7D" 
            className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-2 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            CoinLem
          </a>{' '}
          helped me understand the cryptocurrency market and achieve financial independence. Thanks to the unique support and platform, I was able to make my dream of owning a BMW a reality and I am confident in my future."
        </blockquote>
        
        <div className="flex items-center justify-center gap-4">
          <img
            src="https://sun9-58.userapi.com/impg/rsQh-B3ZjPaxIUJorHxaWueQWO3gimCVufPpVw/7v4Ei8npqyM.jpg?size=1024x1024&quality=96&sign=ec43b8a80ea7604da2c261962f62d43a&type=album"
            alt="Mark Smith"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-left">
            <div className="font-bold text-gray-900">Mark Smith</div>
            <div className="text-gray-600">25 years old, Ottawa</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
