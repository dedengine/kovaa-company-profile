'use client';

import Image from 'next/image';
import { PiArrowUp } from 'react-icons/pi';
import { useI18n } from '@/lib/i18n-provider';
import { contact } from '@/data/contact';

const LINKS = [
    { id: 'tentang', key: 'nav.tentang' },
    { id: 'layanan', key: 'nav.layanan' },
    { id: 'keunggulan', key: 'nav.keunggulan' },
    { id: 'produk', key: 'nav.produk' },
    { id: 'proses', key: 'nav.proses' },
    { id: 'kontak', key: 'nav.kontak' },
] as const;

export function Footer() {
    const { t } = useI18n();

    function scrollTop() {
        const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    }

    return (
        <footer className="bg-kovaa-navy text-white/70">
            <div className="mx-auto grid max-w-page gap-8 px-4 py-10 md:grid-cols-3">
                <div>
                    <Image src="/assets/kovaa-logo-footer.png" alt="Logo KOVAA" width={160} height={44} className="rounded-lg bg-white" />
                    <p className="mt-2 max-w-40 text-sm">{t('footer.tagline')}</p>
                </div>

                <nav aria-label={t('footer.quickLinks')}>
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">{t('footer.quickLinks')}</h3>
                    <ul className="mt-3 space-y-1.5">
                        {LINKS.map((l) => (
                            <li key={l.id}>
                                <a
                                    href={`#${l.id}`}
                                    className="cursor-pointer text-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                    {t(l.key)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">{t('contact.footerTitle')}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm">
                        <li>{contact.address}</li>
                        <li>
                            <a
                                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                                className="cursor-pointer hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                {contact.phone}
                            </a>
                        </li>
                        <li>
                            <a
                                href={`mailto:${contact.email}`}
                                className="cursor-pointer hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                {contact.email}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 px-4 py-4">
                <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-3 sm:flex-row">
                    <p className="text-center text-xs text-white/50">
                        Copyright © 2026 {contact.company} {t('footer.rights')}
                    </p>
                    <button
                        type="button"
                        onClick={scrollTop}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        <PiArrowUp size={14} aria-hidden="true" />
                        {t('nav.backToTop')}
                    </button>
                </div>
            </div>
        </footer>
    );
}
