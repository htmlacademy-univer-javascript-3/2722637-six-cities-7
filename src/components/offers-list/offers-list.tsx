import { useState } from 'react';

import { PlaceCard } from '../place-card/place-card';
import type { Offer } from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
};

function OffersList({ offers }: OffersListProps) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <div
      className="cities__places-list places__list tabs__content"
      data-active-offer-id={activeOfferId ?? undefined}
    >
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onHover={setActiveOfferId}
        />
      ))}
    </div>
  );
}

export { OffersList };
