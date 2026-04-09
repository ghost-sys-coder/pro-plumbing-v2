"use client";

import dynamic from "next/dynamic";

// Leaflet cannot be SSR-rendered — load only on the client
const LeafletMap = dynamic(() => import("./leaflet-map"), { ssr: false });

interface ContactMapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
  markerLabel?: string;
}

export function ContactMap({
  lat = 41.8781,
  lng = -87.6298,
  zoom = 15,
  markerLabel = "PlumbMaster HQ",
}: ContactMapProps) {
  return <LeafletMap lat={lat} lng={lng} zoom={zoom} markerLabel={markerLabel} />;
}
