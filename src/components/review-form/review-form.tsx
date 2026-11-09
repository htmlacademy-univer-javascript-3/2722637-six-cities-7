import { useState } from 'react';

const ratingOptions = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
];

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const isSubmitDisabled =
    rating === 0 ||
    review.trim().length < 50 ||
    review.length > 300;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {ratingOptions.map((option) => {
          const inputId = `rating-${option.value}`;

          return (
            <div key={option.value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={option.value}
                id={inputId}
                type="radio"
                checked={rating === option.value}
                onChange={(event) => {
                  setRating(Number(event.target.value));
                }}
              />

              <label
                htmlFor={inputId}
                className="reviews__rating-label form__rating-label"
                title={option.title}
              >
                <svg
                  className="form__star-image"
                  width="37"
                  height="33"
                >
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </div>
          );
        })}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(event) => {
          setReview(event.target.value);
        }}
        minLength={50}
        maxLength={300}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">
            rating
          </span>{' '}
          and describe your stay with at least{' '}
          <b className="reviews__text-amount">
            50 characters
          </b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };
