import { SectionWrapper } from "@/hoc";
import { execs } from "@/constants";
import { useState, useEffect, memo, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ExecSkeleton = memo(() => (
  <div className="flex flex-col gap-4 p-5 max-w-sm justify-center items-center rounded-2xl bg-primary/5 backdrop-blur-sm shadow-xl">
    <Skeleton className="h-60 w-60 rounded-2xl bg-ring/20" />
    <div className="flex flex-col items-center gap-1 w-full">
      <Skeleton className="h-6 w-40 bg-ring/20" />
      <Skeleton className="h-5 w-32 mt-1 bg-ring/20" />
    </div>
    <div className="flex flex-row gap-4 mt-1">
      <Skeleton className="h-6 w-6 rounded-full bg-ring/20" />
      <Skeleton className="h-6 w-6 rounded-full bg-ring/20" />
      <Skeleton className="h-6 w-6 rounded-full bg-ring/20" />
    </div>
  </div>
));

const Exec = memo(({ name, title, image, socials, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div className="flex flex-col gap-4 p-5 max-w-sm justify-center items-center rounded-2xl bg-primary/5 backdrop-blur-sm shadow-xl">
      <div className="overflow-hidden rounded-2xl h-60 w-60 relative">
        {!imageLoaded && <Skeleton className="absolute inset-0 h-full w-full rounded-2xl bg-ring/20" />}
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ minHeight: "240px", transition: "opacity 0.3s ease-in-out" }}
          loading={isVisible ? "eager" : "lazy"}
          onLoad={handleImageLoad}
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-lg text-primary/70">{title}</p>
      </div>
      <div className="flex flex-row gap-4">
        {socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
            <social.icon className="text-ring hover:text-ring/70" />
          </a>
        ))}
      </div>
    </div>
  );
});

const Team = () => {
  const [loading, setLoading] = useState(true);
  const [visibleExecs, setVisibleExecs] = useState([]);

  useEffect(() => {
    // Set a minimum display time for the skeleton (5 seconds)
    const minimumLoadingTime = 5000; // 5 seconds
    const startTime = Date.now();
    
    // Initial attempt to load the first few images
    const initialExecsToLoad = Math.min(4, execs.length);
    setVisibleExecs(execs.slice(0, initialExecsToLoad).map(exec => exec.image));
    
    // Setup intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const execIndex = parseInt(entry.target.dataset.index, 10);
            setVisibleExecs(prev => {
              if (execs[execIndex] && !prev.includes(execs[execIndex].image)) {
                return [...prev, execs[execIndex].image];
              }
              return prev;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '200px' } // Start loading when within 200px of viewport
    );
    
    // Observe exec card containers after initial load
    const observeExecElements = () => {
      const execElements = document.querySelectorAll('.exec-card-container');
      execElements.forEach(el => observer.observe(el));
    };
    
    // Use a faster initial loading approach for visible content
    const preloadTopImages = async () => {
      try {
        // Preload just the first visible row (or fewer if there aren't enough)
        const topExecs = execs.slice(0, initialExecsToLoad);
        
        const imagePromises = topExecs.map(exec =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = exec.image;
            img.onload = resolve;
            img.onerror = reject;
            // Add a timeout to prevent hanging indefinitely
            setTimeout(resolve, 3000);
          })
        );
        
        // Wait for top images or timeout
        await Promise.all(imagePromises);
        
        // Calculate time elapsed
        const timeElapsed = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadingTime - timeElapsed);
        
        // Ensure skeletons show for at least minimumLoadingTime
        setTimeout(() => {
          setLoading(false);
          // Start observing exec elements after skeletons are removed
          setTimeout(observeExecElements, 100);
        }, remainingTime);
      } catch (error) {
        console.error("Error preloading images:", error);
        
        // Still ensure minimum display time for skeletons
        const timeElapsed = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadingTime - timeElapsed);
        
        setTimeout(() => {
          setLoading(false);
          // Start observing exec elements after skeletons are removed
          setTimeout(observeExecElements, 100);
        }, remainingTime);
      }
    };
    
    preloadTopImages();
    
    return () => {
      // Clean up observer on unmount
      observer.disconnect();
    };
  }, []);

  return (
    <section className="flex flex-col gap-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 bg-clip-text">Our Team</h1>
        <p className="leading-relaxed text-lg max-w-5xl">
          Meet the Executive Committee of The Wits Consulting Club for the year 2024/25.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {loading ? (
          // Show skeletons when loading (for minimum 5 seconds)
          execs.map((_, index) => <ExecSkeleton key={`skeleton-${index}`} />)
        ) : (  
          // Show actual exec cards
          execs.map((exec, index) => (
            <div className="exec-card-container" key={`exec-container-${index}`} data-index={index}>
              <Exec 
                key={`exec-${index}`} 
                {...exec} 
                isVisible={visibleExecs.includes(exec.image)}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SectionWrapper(Team, "team");