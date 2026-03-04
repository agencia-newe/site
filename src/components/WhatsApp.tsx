'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function WhatsApp() {
  return (
    <div className="fixed bottom-5 right-4 z-40 rounded-full bg-white shadow-lg lg:bottom-6 lg:right-6 lg:hover:scale-120 transition-all duration-300 max-w-10 lg:max-w-none">
      <Link title='WhatsApp' href="https://wa.me/5511974474102" target='_blank' className=''>
        <Image
          src="/images/whatsapp.svg"
          alt="WhatsApp"
          width={48}
          height={48}
        />
      </Link>
    </div>
  );
}
