import { questions } from './questions';

// Score each scale from raw responses
// responses: { [questionId]: 1–5 }
// Returns: { [scaleId]: percentileScore (0–100) }
export function computeScores(responses) {
  const scaleTotals = {};
  const scaleCounts = {};

  questions.forEach(({ id, scale, reverse }) => {
    const raw = responses[id];
    if (raw == null) return;
    const value = reverse ? 6 - raw : raw;
    scaleTotals[scale] = (scaleTotals[scale] ?? 0) + value;
    scaleCounts[scale] = (scaleCounts[scale] ?? 0) + 1;
  });

  const scores = {};
  for (const scale of Object.keys(scaleTotals)) {
    const avg = scaleTotals[scale] / scaleCounts[scale]; // 1–5
    scores[scale] = Math.round(((avg - 1) / 4) * 100); // 0–100
  }
  return scores;
}

export function getScaleScore(scores, scaleId) {
  return scores[scaleId] ?? 0;
}
