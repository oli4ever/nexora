import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
  className = "",
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full overflow-hidden">
      {/* Video element */}
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 z-[1] ${className}`}></div>

      {/* Content layer */}
      <div className="relative z-10 flex size-full flex-col justify-between p-5">
        <div>
          <h1 className="bento-title special-font text-teal-300 drop-shadow-lg">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-64 text-sm md:text-base font-robert-regular text-teal-50">
              {description}
            </p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full border border-teal-300/30 bg-teal-300/10 px-5 py-2 text-xs uppercase text-teal-300 backdrop-blur-sm transition-all duration-300 hover:bg-teal-300/20 hover:text-teal-200"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(77, 182, 172, 0.4), rgba(0, 0, 0, 0.1))`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-gradient-to-t from-slate-900/10 to-slate-900/90 pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-teal-300 tracking-wider drop-shadow-[0_0_8px_rgba(77,182,172,0.4)]">
          ENTER THE METAGAME FRAMEWORK
        </p>
        <p className="max-w-md font-circular-web text-lg text-teal-100/90 mt-4 leading-relaxed">
          Where gaming ecosystems merge into a seamless overlay, transforming
          how you play, compete, and connect across digital worlds.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          className="bg-gradient-to-t from-slate-900/0 to-slate-900/90"
          src="videos/feature-1.mp4"
          title={
            <>
              radia<b>n</b>t
            </>
          }
          description="Transform your gaming activities across platforms into a unified, rewarding metagame experience with cross-platform progression and achievements."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            className="bg-gradient-to-t from-slate-900/0 to-slate-900/90"
            src="videos/feature-2.mp4"
            title={
              <>
                zig<b>m</b>a
              </>
            }
            description="A premium NFT collection blending anime aesthetics with gaming culture, offering exclusive access and evolving digital assets."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            className="bg-gradient-to-t from-slate-900/0 to-slate-900/90"
            src="videos/feature-3.mp4"
            title={
              <>
                n<b>e</b>xus
              </>
            }
            description="The ultimate social hub where communities thrive through gamified interactions and shared virtual experiences."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            className="bg-gradient-to-t from-slate-900/0 to-slate-900/90"
            src="videos/feature-4.mp4"
            title={
              <>
                az<b>u</b>l
              </>
            }
            description="Your intelligent gaming companion that enhances playthroughs with smart assistance and personalized recommendations."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
