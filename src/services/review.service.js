import { responseFromReview } from "../dtos/review.dto.js";
import { addReview, getReview } from "../repositories/review.repository.js";

export const reviewAdd = async (data) => {
  const addReviewId = await addReview({
    user_id: data.user_id,
    store_id: data.store_id,
    body: data.body,
    score: data.score,
  });

  const review = await getReview(addReviewId);

  return responseFromReview({ review });
};
