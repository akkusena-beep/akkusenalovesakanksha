"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero, SourceTag } from "@/components/ui/SharedComponents";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/lib/data";
import Link from "next/link";
import { Maximize2, X } from "lucide-react";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<any | null>(null);

  const categories = GALLERY_CATEGORIES;
  
  const filteredImages =
    activeFilter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0D0D0E] text-[#FAFAFA] pb-24">
      <PageHero 
        title="Gallery" 
        subtitle="Moments captured in time" 
      />

      <div className="max-w-7xl mx-auto px-6 mt-12">
        {/* Filter Bar */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 scrollbar-hide justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                activeFilter === cat.value 
                  ? "bg-[#D4A5A9] text-[#0D0D0E]" 
                  : "bg-[#161618] text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#1E1E22] border border-[#2A2A2E]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((image: any, index: number) => {
              // Creating a pseudo-random aspect ratio based on index for the masonry effect placeholder
              const heights = ["h-64", "h-80", "h-96", "h-[22rem]"];
              const heightClass = heights[index % heights.length];
              const bgColors = ["bg-gradient-to-br from-[#1E1E22] to-[#161618]", "bg-gradient-to-tr from-[#161618] to-[#2A2A2E]"];
              const bgClass = bgColors[index % bgColors.length];

              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index % 10 * 0.05 }}
                  className="break-inside-avoid"
                >
                  <div 
                    className={`relative rounded-xl overflow-hidden group cursor-zoom-in border border-[#2A2A2E] ${heightClass} ${bgClass}`}
                    onClick={() => setLightboxImage(image)}
                  >
                    {/* Real high-res photo */}
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <SourceTag source={image.source || "Instagram"} />
                          <Maximize2 className="w-5 h-5 text-[#FAFAFA]/70" />
                        </div>
                        <p className="text-[#FAFAFA] font-medium leading-snug mb-1">
                          {image.caption}
                        </p>
                        <div className="flex items-center justify-between mt-3 text-xs text-[#A1A1AA]">
                          
                          <span className="text-[#E8C5C8] font-semibold">View Original &rarr;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredImages.length === 0 && (
          <div className="py-24 text-center text-[#A1A1AA]">
            No images found for this category.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-[#161618] rounded-full text-[#FAFAFA] hover:bg-[#2A2A2E] transition-colors z-50"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[85vh] bg-[#161618] rounded-xl overflow-hidden border border-[#2A2A2E] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 bg-[#0D0D0E] min-h-[40vh] flex items-center justify-center relative overflow-hidden">
                <img 
                  src={lightboxImage.src} 
                  alt={lightboxImage.alt}
                  className="w-full h-full object-cover max-h-[85vh]"
                />
              </div>
              <div className="w-full md:w-80 p-6 flex flex-col border-t md:border-t-0 md:border-l border-[#2A2A2E]">
                <div className="mb-4">
                  <SourceTag source={lightboxImage.source || "Instagram"} />
                </div>
                <p className="text-[#FAFAFA] text-lg mb-4">{lightboxImage.caption}</p>
                <div className="mt-auto">
                  <p className="text-[#A1A1AA] text-sm mb-4">{lightboxImage.date}</p>
                  <a 
                    href={lightboxImage.sourceUrl || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center bg-[#2A2A2E] hover:bg-[#E8C5C8] hover:text-[#0D0D0E] text-[#FAFAFA] rounded-lg transition-colors font-medium"
                  >
                    View Original Post &rarr;
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
