'use client';

import { useEffect } from 'react';

import 'aos/dist/aos.css';

export default function AosInit() {
  useEffect(() => {
    import('aos').then((AOS) =>
      AOS.init({
        once: false,
        easing: 'ease-in-out',
      })
    );
  }, []);

  return null;
}
