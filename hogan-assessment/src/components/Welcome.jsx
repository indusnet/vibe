export default function Welcome({ onStart }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-card">
        <div className="welcome-logo">H</div>
        <h1>Hogan Personality Assessment</h1>
        <p className="welcome-subtitle">
          A comprehensive psychometric assessment covering three core dimensions
          of personality and motivation.
        </p>

        <div className="instrument-grid">
          <div className="instrument-card hpi">
            <div className="instrument-icon">☀️</div>
            <h3>HPI — Bright Side</h3>
            <p>7 scales measuring everyday personality and how you show up at your best</p>
          </div>
          <div className="instrument-card hds">
            <div className="instrument-icon">⚡</div>
            <h3>HDS — Dark Side</h3>
            <p>11 scales identifying derailment risks under pressure or stress</p>
          </div>
          <div className="instrument-card mvpi">
            <div className="instrument-icon">🎯</div>
            <h3>MVPI — Values</h3>
            <p>10 scales revealing core motivators and culture fit drivers</p>
          </div>
        </div>

        <div className="welcome-info">
          <div className="info-item">
            <span className="info-icon">📋</span>
            <span>130 statements — rate your agreement on a 5-point scale</span>
          </div>
          <div className="info-item">
            <span className="info-icon">⏱️</span>
            <span>Approximately 15–20 minutes to complete</span>
          </div>
          <div className="info-item">
            <span className="info-icon">📊</span>
            <span>Full narrative report generated on completion</span>
          </div>
        </div>

        <p className="welcome-instruction">
          There are no right or wrong answers. Respond based on how you typically
          think, feel, and behave — not how you think you should respond.
        </p>

        <button className="btn-primary btn-large" onClick={onStart}>
          Begin Assessment
        </button>
      </div>
    </div>
  );
}
