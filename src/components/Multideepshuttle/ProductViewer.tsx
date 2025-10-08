// components/ProductViewer.tsx
'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ProductFeature {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video' | '3d';
  media: {
    large: string;
    medium?: string;
    small?: string;
  };
  color?: string;
}

interface ProductViewerProps {
  features: ProductFeature[];
  initialFeature?: string;
}

export default function ProductViewer({ features, initialFeature }: ProductViewerProps) {
  // initial
  const firstId = initialFeature || features[0]?.id || null;
const [activeFeature, setActiveFeature] = useState<string | null>(null);
const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

useEffect(() => {
  if (features && features.length > 0 && !activeFeature) {
    const firstId = initialFeature || features[0].id;
    setActiveFeature(firstId);
    setExpandedFeature(firstId);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [features]);

  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth <= 992 : false);
  const [prevFeature, setPrevFeature] = useState<string | null>(null);

  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  const mediaContainerRef = useRef<HTMLDivElement | null>(null);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);

  // Keep activeFeature only set to first if there's truly no activeFeature
  useEffect(() => {
  if (!features || features.length === 0) return;
  const exists = features.some(f => f.id === activeFeature);
  if (!exists && !activeFeature) {
    setActiveFeature(features[0].id);
    setExpandedFeature(features[0].id);
  }
}, [features]);


  // detect mobile <= 992px
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // when activeFeature changes on mobile, center it
  useEffect(() => {
    if (isMobile && tabsContainerRef.current && activeFeature) {
      const activeTab = tabsContainerRef.current.querySelector(
        `.mobile-tab[data-id="${activeFeature}"]`
      ) as HTMLElement | null;
      if (activeTab && tabsContainerRef.current) {
        const container = tabsContainerRef.current;
        const containerRect = container.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        const delta = (tabRect.left + tabRect.right) / 2 - (containerRect.left + containerRect.right) / 2;
        container.scrollBy({ left: delta, behavior: 'smooth' });
      }
    }
  }, [activeFeature, isMobile]);

  // video ref setter
  const setVideoRef = useCallback((featureId: string) => (el: HTMLVideoElement | null) => {
    if (el) videoRefs.current.set(featureId, el);
    else videoRefs.current.delete(featureId);
  }, []);

  // handle feature click (keeps state stable)
  const handleFeatureClick = async (featureId: string) => {
    if (featureId === activeFeature) return;
    setPrevFeature(activeFeature);
    // allow exit animation
    await new Promise(resolve => setTimeout(resolve, 50));
    setActiveFeature(featureId);
    setExpandedFeature(featureId);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPrevFeature(null);
    }, 420);
  };

  // keyboard / desktop navigation arrows for the main viewer (unchanged)
  const navigateFeatures = async (direction: 'prev' | 'next') => {
    if (!activeFeature) return;
    const currentIndex = features.findIndex(f => f.id === activeFeature);
    if (currentIndex === -1) return;
    // let newIndex;
    // if (direction === 'next') newIndex = (currentIndex + 1) % features.length;
    // else newIndex = (currentIndex - 1 + features.length) % features.length;
    const newIndex =
  direction === 'next'
    ? (currentIndex + 1) % features.length
    : (currentIndex - 1 + features.length) % features.length;

    const newId = features[newIndex].id;
    setPrevFeature(activeFeature);
    await new Promise(resolve => setTimeout(resolve, 50));
    setActiveFeature(newId);
    setExpandedFeature(newId);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPrevFeature(null);
    }, 420);
  };

  const handleVideoLoad = (featureId: string) => {
    const video = videoRefs.current.get(featureId);
    if (video) {
      video.play().catch(() => { /* ignore autoplay errors */ });
    }
  };

  // Pause other videos when active changes
  useEffect(() => {
    features.forEach(feature => {
      const video = videoRefs.current.get(feature.id);
      if (video && feature.id !== activeFeature) {
        try {
          video.pause();
          video.currentTime = 0;
        } catch (e) { /* ignore */ }
      }
    });
  }, [activeFeature, features]);

  // ---------- Mobile Tab Slider logic (drag + paddles + center + update active) ----------
  const scrollToTabCenter = (featureId: string) => {
    const container = tabsContainerRef.current;
    if (!container) return;
    const tab = container.querySelector(`.mobile-tab[data-id="${featureId}"]`) as HTMLElement | null;
    if (!tab) return;
    const containerRect = container.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const delta = (tabRect.left + tabRect.right) / 2 - (containerRect.left + containerRect.right) / 2;
    container.scrollBy({ left: delta, behavior: 'smooth' });
  };

  // drag-to-scroll (mobile + desktop horizontal)
    // drag-to-scroll (mobile + desktop horizontal)
  useEffect(() => {
    const el = tabsContainerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const onDown = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      startX = e instanceof TouchEvent ? e.touches[0].pageX : e.pageX;
      startScroll = el.scrollLeft;
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      const x = e instanceof TouchEvent ? e.touches[0].pageX : e.pageX;
      el.scrollLeft = startScroll - (x - startX);
    };

    const onUp = () => {
      isDown = false;
    };

    el.addEventListener('mousedown', onDown);
    el.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    el.addEventListener('touchstart', onDown, { passive: true });
    el.addEventListener('touchmove', onMove, { passive: true });
    el.addEventListener('touchend', onUp);

    return () => {
      el.removeEventListener('mousedown', onDown);
      el.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      el.removeEventListener('touchstart', onDown);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend', onUp);
    };
  }, []);


  // Mobile paddles: set next/prev active and center it (doesn't wrap automatically unless you want to)
  const mobileArrow = async (direction: 'prev' | 'next') => {
    if (!activeFeature) return;
    const currentIndex = features.findIndex(f => f.id === activeFeature);
    if (currentIndex === -1) return;
    const newIndex = direction === 'next' ? Math.min(currentIndex + 1, features.length - 1) : Math.max(currentIndex - 1, 0);
    const newFeature = features[newIndex];
    await handleFeatureClick(newFeature.id);
    // small delay to ensure DOM update, then center
    setTimeout(() => scrollToTabCenter(newFeature.id), 80);
  };

  // helper for animation classes on the media item (mobile: slide/zoom)
  const getMediaItemClasses = (id: string) => {
    const base = 'absolute inset-0 flex  max-[992px]:items-end  items-center justify-center transition-transform duration-600 ease-[cubic-bezier(.23,1,.32,1)]';
    if (activeFeature === id) {
      // active - center and scale
      return `${base} translate-x-0 opacity-100 z-20 transform scale-100`;
    }
    if (prevFeature === id) {
      // exiting - left and fade
      return `${base} -translate-x-10 opacity-0 z-10 transform scale-95`;
    }
    // hidden
    return `${base} translate-x-full opacity-0 z-0 transform scale-95`;
  };

  const activeFeatureData = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section
      className="product-viewer-component relative rounded-[45px] bg-white overflow-hidden select-none"
      aria-label="Product feature viewer"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* SEO meta (kept as in original) */}
      <meta itemProp="name" content="Craftsman" />
      <meta itemProp="description" content="Explore the features of Craftsman" />

      {/* Main viewer */}
      <div className="viewer-container relative w-full max-[580px]:h-[450px] max-[992px]:h-[600px] h-[800px]">
        <div
          ref={mediaContainerRef}
          className="media-container absolute inset-0 flex items-center justify-center max-[992px]:!top-[80px]"
          role="region"
          aria-label="Product media display"
        >
          {/* loader */}
          {isLoading && (
            <div className="loader absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 border-2 border-[rgba(35,35,35,0.3)] border-t-[rgb(35,35,35)] rounded-full animate-spin" />
            </div>
          )}

          {/* stacked media items */}
          {features.map((feature) => {
            const isActive = activeFeature === feature.id;
            return (
              <div
                key={feature.id}
                role="tabpanel"
                aria-hidden={!isActive}
                aria-label={feature.title}
                className={getMediaItemClasses(feature.id)}
                style={{ paddingRight: isActive ? '5%' : undefined }} // keep desktop layout
              >
                {feature.type === 'video' ? (
                  <video
                    ref={setVideoRef(feature.id)}
                    className={`product-video max-[992px]:w-[70%] w-[50%] object-contain rounded-md transition-transform duration-500 ${isActive ? 'scale-100' : 'scale-95'}`}
                    muted
                    loop
                    playsInline
                    onLoadedData={() => handleVideoLoad(feature.id)}
                    preload="metadata"
                    aria-label={`Video demonstrating ${feature.title}`}
                  >
                    <source src={feature.media.large} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className={`product-image-wrapper max-[580px]:w-[90%] max-[992px]:w-[70%] w-[50%] transition-transform duration-500 max-[992px]:mx-auto mr-[0] ml-auto ${isActive ? 'scale-100' : 'scale-95'}`}>
                    <Image
                      src={feature.media.large}
                      alt={feature.description}
                      width={800}
                      height={800}
                      className="product-image object-contain rounded-md"
                      priority={feature.id === features[0].id}
                      sizes="(max-width:480px) 80vw, (max-width:992px) 70vw, 50vw"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Tab Slider (only when mobile) */}
        {isMobile && (
          <div className="mobile-tab-slider absolute max-[992px]:top-[0%] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 w-full max-w-[100%]">
            {/* tabs wrapper */}
            <div className="mobile-tabs-wrapper relative w-full flex items-center">
              {/* left arrow */}
              <button
                aria-label="Scroll left"
                onClick={() => mobileArrow('prev')}
                className="mobile-scroll-button left absolute left-0 top-1/2 -translate-y-1/2 bg-[#cce7ed] max-[992px]:h-[65px] w-9 h-9 flex items-center justify-center z-20 hover:scale-105 transition"
              >
                <svg viewBox="0 0 36 36" className="max-[992px]:h-[30px] max-[992px]:w-[30px] w-4 h-4 stroke-[#232323]" fill="none">
                  <path d="M20 25L14.5 19.5L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* tabs container */}
              <div
                ref={tabsContainerRef}
                className="mobile-tabs-container flex gap-[15px] overflow-x-auto scrollbar-hide snap-x snap-mandatory py-[5px]  sm:py-3 px-10 border-b border-gray-300"
              >
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    data-id={feature.id}
                    onClick={() => { handleFeatureClick(feature.id); scrollToTabCenter(feature.id); }}
                    className={`mobile-tab flex-shrink-0 whitespace-nowrap snap-center px-[15px] py-[6px] transition-transform duration-500 font-medium ${activeFeature === feature.id ? 'bg-[#fff] text-[#0087a7] scale-105 ' : 'bg-white text-[#232323] border border-transparent'}`}
                  >
                    {/* hide svg on mobile as requested */}
                    <span className="mobile-tab-label inline-flex items-center gap-3">
                      {/* we hide plus icon on <=992px: use isMobile state to avoid rendering */}
                      {!isMobile && (
                        <svg width="18" height="18" viewBox="0 0 24 24" className="shrink-0 " aria-hidden>
                          <circle cx="12" cy="12" r="11.3" stroke="currentColor" fill="none" strokeWidth="1.5" />
                          <g transform="translate(7 7)" fill="currentColor">
                            <path d="m9 4h-3v-3c0-0.553-0.447-1-1-1s-1 0.447-1 1v3h-3c-0.553 0-1 0.447-1 1s0.447 1 1 1h3v3c0 0.553 0.447 1 1 1s1-0.447 1-1v-3h3c0.553 0 1-0.447 1-1s-0.447-1-1-1" />
                          </g>
                        </svg>
                      )}
                      <span className="text-sm leading-5">{feature.title}</span>
                    </span>
                  </button>
                ))}
              </div>

              {/* right arrow */}
              <button
                aria-label="Scroll right"
                onClick={() => mobileArrow('next')}
                className="mobile-scroll-button right absolute right-0 top-1/2 -translate-y-1/2 bg-[#cce7ed] max-[580px]:h-[50px] max-[992px]:h-[65px]  w-9 h-9  flex items-center justify-center z-20 hover:scale-105 transition"
              >
                <svg viewBox="0 0 36 36" className="max-[992px]:h-[30px] max-[992px]:w-[30px] w-4 h-4 stroke-[#232323]" fill="none">
                  <path d="M16 25L21.5 19.5L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* mobile feature panel with requested styles */}
            <div className="mobile-feature-panel mt-3 w-full max-[992px]:max-w-[100%]  max-w-[80%] bg-white/95 rounded-lg p-10 pt-10 flex flex-col items-center">
              <div className="mobile-feature-media w-full flex items-center justify-center">
                {/* on mobile we've already shown main image/video in media area; but keep this panel's image hidden to match your requested CSS */}
                {/* user wanted .mobile-feature-media img {display: none;} - so we don't render duplicate image here */}
              </div>

              <h3 className="mobile-feature-title text-[20px] leading-7 font-medium -tracking-[0.02em] mb-3 text-[#232323] text-center">
                {activeFeatureData.title}
              </h3>
              <p className="mobile-feature-desc text-sm text-center text-[#232323]/90 line-clamp-3">
                {activeFeatureData.description}
              </p>
            </div>
          </div>
        )}

        {/* Desktop controls (unchanged behavior) */}
        {!isMobile && (
          <div className="controls-container absolute left-[50px] top-1/2 -translate-y-1/2 z-20">
            <div className="control-group flex flex-col gap-2 min-w-[600px] max-h-[600px] h-[600px] pr-[320px]" role="tablist" aria-label="Product features">
              {features.map((feature, index) => (
                <ControlItem
                  key={feature.id}
                  feature={feature}
                  isActive={activeFeature === feature.id}
                  isExpanded={expandedFeature === feature.id}
                  onClick={() => handleFeatureClick(feature.id)}
                  index={index}
                />
              ))}
            </div>

            {/* navigation arrows */}
            <div className="paddlenav-container absolute top-[35%] left-[-45px] flex flex-col gap-3">
              <button
                className="paddlenav-button bg-[#cce7ed] hover:bg-[rgba(0,135,167,0.3)] w-11 h-11 rounded-full flex items-center justify-center transition"
                onClick={() => navigateFeatures('prev')}
                aria-label="Previous feature"
              >
                <svg className="paddlenav-icon w-5 h-5" viewBox="0 0 36 36">
                  <path d="m20 25c-.3838 0-.7676-.1465-1.0605-.4395l-5.5-5.5c-.5859-.5854-.5859-1.5356 0-2.1211l5.5-5.5c.5859-.5859 1.5352-.5859 2.1211 0 .5859.5854.5859 1.5356 0 2.1211l-4.4395 4.4395 4.4395 4.4395c.5859.5854.5859 1.5356 0 2.1211-.293.293-.6768.4395-1.0605.4395z" />
                </svg>
              </button>
              <button
                className="paddlenav-button bg-[#cce7ed] hover:bg-[rgba(0,135,167,0.3)] w-11 h-11 rounded-full flex items-center justify-center transition"
                onClick={() => navigateFeatures('next')}
                aria-label="Next feature"
              >
                <svg className="paddlenav-icon w-5 h-5" viewBox="0 0 36 36">
                  <path d="m22.5597 16.9375-5.5076-5.5c-.5854-.5854-1.5323-.5825-2.1157.0039-.5835.5869-.5815 1.5366.0039 2.1211l4.4438 4.4375-4.4438 4.4375c-.5854.5845-.5874 1.5342-.0039 2.1211.2922.2944.676.4414 1.0598.4414.3818 0 .7637-.1455 1.0559-.4375l5.5076-5.5c.2815-.2812.4403-.6636.4403-1.0625s-.1588-.7812-.4403-1.0625z" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Close button (hidden on mobile as requested) */}
        <button
          className="close-button hidden max-[992px]:hidden absolute top-[30px] right-[30px] bg-[rgba(0,135,167,0.2)] w-11 h-11 rounded-full flex items-center justify-center z-30 hover:scale-105 transition"
          onClick={() => setExpandedFeature(null)}
          aria-label="Close feature details"
        >
          <svg className="close-icon w-5 h-5 fill-[#232323]" viewBox="0 0 36 36">
            <path d="m20.1211 18 3.4395-3.4395c.5859-.5854.5859-1.5356 0-2.1211-.5859-.5859-1.5352-.5859-2.1211 0l-3.4395 3.4395-3.4395-3.4395c-.5859-.5859-1.5352-.5859-2.1211 0-.5859.5854-.5859 1.5356 0 2.1211l3.4395 3.4395-3.4395 3.4395c-.5859.5854-.5859 1.5356 0 2.1211.293.293.6768.4395 1.0605.4395s.7676-.1465 1.0605-.4395l3.4395-3.4395 3.4395 3.4395c.293.293.6768.4395 1.0605.4395s.7676-.1465 1.0605-.4395c.5859-.5854.5859-1.5356 0-2.1211l-3.4395-3.4395z" />
          </svg>
        </button>
      </div>
    </section>
  );
}

/* ---------- ControlItem (desktop) ---------- */
function ControlItem({
  feature,
  isActive,
  isExpanded,
  onClick,
  index
}: {
  feature: ProductFeature;
  isActive: boolean;
  isExpanded: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <div className={`control-item relative mb-2 min-w-[200px] transition-all ${isActive ? 'active' : ''} ${isExpanded ? 'expanded' : ''}`} role="tab" aria-selected={isActive} aria-controls={`panel-${feature.id}`}>
      <div className={`control-item-bg absolute inset-0 rounded-lg transition-opacity ${isActive || isExpanded ? 'opacity-100 bg-[rgba(0,135,167,0.2)]' : 'opacity-0 bg-[rgba(255,255,255,0.1)]'}`} />
      <button
        onClick={onClick}
        aria-expanded={isExpanded}
        aria-label={`${feature.title} - ${isExpanded ? 'Collapse' : 'Expand'} details`}
        className="control-item-open relative z-10 w-full text-left bg-transparent border-none p-0 cursor-pointer rounded-lg flex items-center gap-3"
      >
        <span className="control-item-label z-20 flex items-center gap-3 text-[16px] font-medium px-4 py-3">
          {/* plus icon */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
            <circle cx="12" cy="12" r="11.3" stroke="currentColor" fill="none" strokeWidth="1.5" />
            <g transform="translate(7 7)" fill="currentColor">
              <path d="m9 4h-3v-3c0-0.553-0.447-1-1-1s-1 0.447-1 1v3h-3c-0.553 0-1 0.447-1 1s0.447 1 1 1h3v3c0 0.553 0.447 1 1 1s1-0.447 1-1v-3h3c0.553 0 1-0.447 1-1s-0.447-1-1-1" />
            </g>
          </svg>
          <span>{feature.title}</span>
        </span>
      </button>

      {isExpanded && (
        <div id={`panel-${feature.id}`} role="region" aria-label={`${feature.title} details`} className="control-item-content absolute left-full top-0 ml-3 min-w-[300px] bg-[rgba(181,205,211,0.3)] backdrop-blur-md rounded-lg p-4 z-40">
          <div className="control-item-content-inner text-[#232323] text-sm">
            <p className="m-0 leading-6"><strong className="block mb-1 text-base">{feature.title}.</strong>{feature.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
