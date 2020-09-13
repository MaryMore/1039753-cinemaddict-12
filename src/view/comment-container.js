export const createCommentContainer = (card) => {
  const {
    comments
  } = card;

  const commentsCount = comments.length;
  return (
    `<div class="form-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsCount}</span></h3>

        </section>
      </div>`
  );
};