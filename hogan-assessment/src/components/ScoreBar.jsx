export default function ScoreBar({ score, color }) {
  const band = score <= 34 ? 'low' : score <= 65 ? 'mid' : 'high';
  const bandLabel = band === 'low' ? 'Low' : band === 'mid' ? 'Mid' : 'High';

  return (
    <div className="score-bar-wrapper">
      <div className="score-bar-track">
        <div
          className="score-bar-fill"
          style={{ width: `${score}%`, backgroundColor: color }}
        />
        <div className="score-bar-marker" style={{ left: `${score}%` }}>
          <span className="score-value">{score}</span>
        </div>
      </div>
      <span className={`score-band-label band-${band}`}>{bandLabel}</span>
    </div>
  );
}
