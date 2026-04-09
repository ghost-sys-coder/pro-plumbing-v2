import React from 'react'
import { ExternalLink, MapPin } from 'lucide-react'
import { ContactMap } from '@/components/ui/contact-map'

const MapSection = () => {
  return (
    <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Find Us</h2>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                1200 Industrial Parkway, Suite 400 · Metropolis Central, MC 90210
              </p>
            </div>
            <a
              href="https://www.openstreetmap.org/?mlat=41.8781&mlon=-87.6298#map=15/41.8781/-87.6298"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline shrink-0"
            >
              Open in Maps
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Map container — update lat/lng in ContactMap to match the real address */}
          <div className="h-80 md:h-105 rounded-2xl overflow-hidden ghost-border">
            <ContactMap
              lat={41.8781}
              lng={-87.6298}
              zoom={15}
              markerLabel="PlumbMaster HQ"
            />
          </div>
        </div>
      </section>
  )
}

export default MapSection