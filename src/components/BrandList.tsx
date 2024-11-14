import React from 'react';
import { useStore } from '../store/useStore';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import type { SocialPlatform } from '../types';

const platformIcons = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  pinterest: Twitter // Using Twitter icon as placeholder for Pinterest
};

export function BrandList() {
  const { brands, selectedBrand, setSelectedBrand } = useStore();

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Managed Brands</h2>
        <div className="space-y-4">
          {brands.map((brand) => {
            const isSelected = selectedBrand === brand.id;
            return (
              <div
                key={brand.id}
                className={`p-4 rounded-lg border transition-colors cursor-pointer ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedBrand(brand.id)}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      {brand.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      {brand.platforms.map((platform) => {
                        const Icon = platformIcons[platform.name];
                        return (
                          <div
                            key={platform.id}
                            className="flex items-center text-gray-500 text-xs"
                          >
                            <Icon className="w-4 h-4 mr-1" />
                            {platform.followers.toLocaleString()}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}