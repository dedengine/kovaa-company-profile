'use client'

import { PiClock, PiEnvelope, PiPhone } from 'react-icons/pi'
import { contact } from '@/data/contact'

export function Topbar() {
  return (
    <div className="hidden bg-kovaa-navy text-white/70 lg:block">
      <div className="mx-auto flex max-w-page items-center justify-between px-4 py-2 text-xs">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <PiPhone size={13} aria-hidden="true" />
            {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-1.5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <PiEnvelope size={13} aria-hidden="true" />
            {contact.email}
          </a>
          <span className="flex items-center gap-1.5">
            <PiClock size={13} aria-hidden="true" />
            {contact.hours}
          </span>
        </div>
        <span className="font-heading font-semibold tracking-wide text-white/50">
          CREATE • BUILD • DELIVER
        </span>
      </div>
    </div>
  )
}
