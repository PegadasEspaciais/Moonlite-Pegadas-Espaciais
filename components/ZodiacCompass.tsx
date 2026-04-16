'use client';

import dynamic from 'next/dynamic';

const ZodiacCompassClient = dynamic(
  () => import('./ZodiacCompassClient'),
  { ssr: false }
);

export default function ZodiacCompass(props: any) {
  return <ZodiacCompassClient {...props} />;
}