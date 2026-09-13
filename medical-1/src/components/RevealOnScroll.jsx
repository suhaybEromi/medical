import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transform transition-all duration-700 ease-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
