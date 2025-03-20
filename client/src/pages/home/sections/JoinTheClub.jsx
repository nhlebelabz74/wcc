import { memo, useState, useEffect } from "react";
import { SectionWrapper } from "@/hoc";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

import bainHoodie3 from "@/assets/images/bainHoodie3.webp";
import bainHoodie1 from "@/assets/images/bainHoodie1.webp";

const JoinTheClubSkeleton = memo(() => (
  <section className="relative flex flex-col md:flex-row gap-5 w-full py-16 px-8 md:px-16 rounded-2xl overflow-hidden h-full">
    <div className="absolute inset-0 backdrop-blur-md bg-gray-900/50"></div>

    <div className="relative z-10 flex flex-col md:flex-row gap-5 w-full">
      <div className="flex-1">
        <Skeleton className="w-full h-64 md:h-80 rounded-2xl" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <Skeleton className="h-10 w-48 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-6" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  </section>
));

const JoinTheClub = memo(() => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preload images in parallel
    const preloadImages = async () => {
      try {
        // Create an array of promises for image loading
        const imagePromises = [
          new Promise((resolve) => {
            const img = new Image();
            img.src = bainHoodie3;
            img.onload = resolve;
          }),
          new Promise((resolve) => {
            const img = new Image();
            img.src = bainHoodie1;
            img.onload = resolve;
          })
        ];
        
        // Wait for all images to load
        await Promise.all(imagePromises);
        
        // Set loading to false and show content with a small delay
        setLoading(false);
        setTimeout(() => setShowContent(true), 100);
      } catch (error) {
        // Fallback if images fail to load
        console.error("Failed to load images:", error);
        setLoading(false);
        setShowContent(true);
      }
    };
    
    preloadImages();
  }, []);

  if (loading) {
    return <JoinTheClubSkeleton />;
  }

  return (
    <section className="relative flex flex-col md:flex-row gap-5 w-full py-16 px-8 md:px-16 rounded-2xl overflow-hidden h-full">
      <div
        className={`absolute inset-0 backdrop-blur-md transition-opacity duration-500 ease-in-out ${
          showContent ? "opacity-80" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${bainHoodie1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(100%) brightness(0.7) blur(6px)",
        }}
      ></div>

      <div
        className={`relative z-10 flex flex-col md:flex-row gap-5 w-full transition-opacity duration-500 ease-in-out ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex-1">
          <img
            src={bainHoodie3}
            alt="Bain Hoodie"
            className="w-full h-64 md:h-80 object-cover rounded-2xl"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-relaxed">
            Join The Club
          </h2>
          <p className="mb-6 text-white leading-relaxed">
            Becoming a member of The Wits Consulting Club is a unique opportunity to develop your skills, network with industry professionals, and gain access to exclusive resources.
            Click the button below to see how you can join us!
          </p>
          <Button
            className="self-start cursor-pointer"
            onClick={() => navigate("/join-the-club")}
          >
            Join The Club
          </Button>
        </div>
      </div>
    </section>
  );
});

export default SectionWrapper(JoinTheClub, "become-a-member");