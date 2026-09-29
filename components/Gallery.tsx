"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { galleryPhotos, type Photo } from "@/lib/content";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const photo: Photo | null = active === null ? null : galleryPhotos[active];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [active]);

  function showPrevious() {
    setActive((current) => {
      if (current === null) return current;
      return (current - 1 + galleryPhotos.length) % galleryPhotos.length;
    });
  }

  function showNext() {
    setActive((current) => {
      if (current === null) return current;
      return (current + 1) % galleryPhotos.length;
    });
  }

  return (
    <section id="galeria" className="scroll-mt-20 bg-ink pb-20 text-paper sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <h2 className="max-w-xl font-display text-3xl leading-tight font-medium text-balance sm:text-4xl">
          Outros trabalhos realizados
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/70 sm:text-base">
          Carros prontos para a entrega e trabalhos de funilaria, pintura, polimento
          e restauração, fotografados na própria oficina.
        </p>

        <ul className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryPhotos.map((item, index) => (
            <li key={item.src} className="mb-4 break-inside-avoid">
              <button
                type="button"
                className="block w-full overflow-hidden bg-panel text-left"
                onClick={() => setActive(index)}
                aria-label={`Ampliar foto: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt=""
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition duration-500 hover:opacity-90"
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-12 border-t border-paper/10 pt-8">
          <p className="font-display text-3xl font-medium sm:text-4xl">
            Seu carro precisa de reparo?
          </p>
          <WhatsAppButton className="mt-6">Solicitar orçamento</WhatsAppButton>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="w-[min(100%-1.5rem,960px)] border-0 bg-ink p-3 text-paper backdrop:bg-ink/80"
        onClose={() => setActive(null)}
      >
        {photo ? (
          <div>
            <div className="flex items-center justify-between gap-3 px-1 pb-3">
              <p id={titleId} className="text-sm leading-snug text-paper/80">
                {photo.alt}
              </p>
              <button
                type="button"
                className="min-h-11 shrink-0 px-3 text-sm"
                onClick={() => setActive(null)}
              >
                Fechar
              </button>
            </div>
            <div
              className="mx-auto"
              style={{
                width: `min(100%, calc(70svh * ${photo.width} / ${photo.height}))`,
                aspectRatio: `${photo.width} / ${photo.height}`,
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="mt-3 flex justify-between">
              <button type="button" className="min-h-11 px-3 text-sm" onClick={showPrevious}>
                Anterior
              </button>
              <button type="button" className="min-h-11 px-3 text-sm" onClick={showNext}>
                Próxima
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
