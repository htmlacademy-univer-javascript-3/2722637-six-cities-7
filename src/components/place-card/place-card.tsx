import { Link } from 'react-router-dom';

import type { Offer } from '../../types/offer';

type PlaceCardProps = {
  offer: Offer;
  variant?: 'cities' | 'favorites' | 'near-places';
  onHover?: (id: string | null) => void;
};

function PlaceCard({
  offer,
  variant = 'cities',
  onHover,
}: PlaceCardProps) {
  const imageWidth = variant === 'favorites' ? 150 : 260;
  const imageHeight = variant === 'favorites' ? 110 : 200;

  return (
    <article
      className={`${variant}__card place-card`}
      onMouseEnter={() => onHover?.(offer.id)}
      onMouseLeave={() => onHover?.(null)}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${variant}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={imageWidth}
            height={imageHeight}
            alt={offer.title}
          />
        </Link>
      </div>

      <div className={`${variant === 'favorites' ? 'favorites__card-info ' : ''}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;{offer.price}
            </b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>

          <button
            className={`place-card__bookmark-button${offer.isFavorite ? ' place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(offer.rating * 20)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>

        <p className="place-card__type">
          {offer.type}
        </p>
      </div>
    </article>
  );
}

export { PlaceCard };
