import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const SLIDE_INTERVAL = 3000; // 3 seconds per slide

export default function PhoneCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, SLIDE_INTERVAL);

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex-[0_0_100%] min-w-0">
            <img
              src={`/phone-mockup-${num > 1 ? num : ''}.png`}
              alt={`AI Liberator App Interface ${num}`}
              className="max-w-[300px] w-full mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
