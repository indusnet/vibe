import { useState } from 'react';
import { computeScores } from '../data/scoring';
import { getInterpretation, getScoreBand } from '../data/interpretations';
import { HPI_SCALES, HDS_SCALES, MVPI_SCALES } from '../data/questions';
import ScoreBar from './ScoreBar';

export default function Report({ responses, onRestart }) {
  const scores = computeScores(responses);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="report-screen">
      <div className="report-header">
        <div className="report-logo">H</div>
        <h1>Your Hogan Assessment Report</h1>
        <p className="report-subtitle">
          Full narrative report across all three instruments
        </p>
      </div>

      <div className="report-tabs">
        {['overview', 'hpi', 'hds', 'mvpi', 'narrative'].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'overview' && '📊 Overview'}
            {tab === 'hpi' && '☀️ HPI'}
            {tab === 'hds' && '⚡ HDS'}
            {tab === 'mvpi' && '🎯 MVPI'}
            {tab === 'narrative' && '📄 Full Report'}
          </button>
        ))}
      </div>

      <div className="report-content">
        {activeTab === 'overview' && <OverviewTab scores={scores} />}
        {activeTab === 'hpi' && <ScaleTab scales={HPI_SCALES} scores={scores} instrument="HPI" title="Hogan Personality Inventory — Bright Side" description="These seven scales describe how you present at your best — your day-to-day personality when performing effectively." />}
        {activeTab === 'hds' && <ScaleTab scales={HDS_SCALES} scores={scores} instrument="HDS" title="Hogan Development Survey — Dark Side" description="These eleven scales describe potential derailers — behaviours that may emerge under pressure, stress, or when you let your guard down." />}
        {activeTab === 'mvpi' && <ScaleTab scales={MVPI_SCALES} scores={scores} instrument="MVPI" title="Motives, Values, Preferences Inventory" description="These ten scales reveal your core values and motivators — the environments and cultures in which you will thrive." />}
        {activeTab === 'narrative' && <NarrativeTab scores={scores} />}
      </div>

      <div className="report-footer">
        <button className="btn-secondary" onClick={onRestart}>
          Restart Assessment
        </button>
        <button className="btn-primary" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
}

// ── OVERVIEW TAB ──
function OverviewTab({ scores }) {
  const allScales = [
    ...HPI_SCALES.map((s) => ({ ...s, instrument: 'HPI', type: 'hpi' })),
    ...HDS_SCALES.map((s) => ({ ...s, instrument: 'HDS', type: 'hds' })),
    ...MVPI_SCALES.map((s) => ({ ...s, instrument: 'MVPI', type: 'mvpi' })),
  ];

  const flaggedDerailers = HDS_SCALES.filter((s) => (scores[s.id] ?? 0) >= 66);

  return (
    <div className="overview-tab">
      <div className="summary-cards">
        <SummaryCard
          icon="☀️"
          label="HPI — Bright Side"
          scales={HPI_SCALES}
          scores={scores}
          color="#4A90D9"
        />
        <SummaryCard
          icon="⚡"
          label="HDS — Dark Side"
          scales={HDS_SCALES}
          scores={scores}
          color="#FF6B6B"
        />
        <SummaryCard
          icon="🎯"
          label="MVPI — Values"
          scales={MVPI_SCALES}
          scores={scores}
          color="#50C878"
        />
      </div>

      {flaggedDerailers.length > 0 && (
        <div className="derailer-alert">
          <h3>⚠️ Elevated Derailer Risk</h3>
          <p>
            The following HDS scales scored in the high-risk band and warrant
            developmental attention:
          </p>
          <ul>
            {flaggedDerailers.map((s) => (
              <li key={s.id}>
                <strong>{s.label}</strong> — {scores[s.id]}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="overview-chart">
        <h3>All Scales at a Glance</h3>
        {allScales.map((s) => (
          <div key={s.id} className="overview-row">
            <div className="overview-row-label">
              <span className="overview-inst">{s.instrument}</span>
              <span>{s.label}</span>
            </div>
            <ScoreBar score={scores[s.id] ?? 0} color={s.color} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SummaryCard({ icon, label, scales, scores, color }) {
  const avg = Math.round(
    scales.reduce((sum, s) => sum + (scores[s.id] ?? 0), 0) / scales.length
  );
  const band = getScoreBand(avg);

  return (
    <div className="summary-card">
      <div className="summary-icon">{icon}</div>
      <div className="summary-label">{label}</div>
      <div className="summary-avg" style={{ color }}>
        {avg}
      </div>
      <div className={`summary-band band-${band}`}>
        {band === 'low' ? 'Low' : band === 'mid' ? 'Mid' : 'High'}
      </div>
      <div className="summary-breakdown">
        {scales.map((s) => (
          <div key={s.id} className="summary-mini-bar" title={`${s.label}: ${scores[s.id] ?? 0}`}>
            <div
              className="summary-mini-fill"
              style={{ height: `${scores[s.id] ?? 0}%`, backgroundColor: s.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── SCALE TAB ──
function ScaleTab({ scales, scores, instrument, title, description }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="scale-tab">
      <h2>{title}</h2>
      <p className="scale-tab-description">{description}</p>

      {scales.map((scale) => {
        const score = scores[scale.id] ?? 0;
        const interp = getInterpretation(instrument, scale.id, score);
        const isOpen = expanded === scale.id;

        return (
          <div
            key={scale.id}
            className={`scale-card ${isOpen ? 'open' : ''}`}
            style={{ borderLeftColor: scale.color }}
          >
            <div className="scale-card-header" onClick={() => setExpanded(isOpen ? null : scale.id)}>
              <div className="scale-card-title">
                <h3>{scale.label}</h3>
                <p className="scale-desc">{interp?.description || ''}</p>
              </div>
              <div className="scale-card-right">
                <ScoreBar score={score} color={scale.color} />
                <span className="expand-icon">{isOpen ? '▲' : '▼'}</span>
              </div>
            </div>

            {isOpen && interp && (
              <div className="scale-card-body">
                <div className="interp-summary" style={{ borderColor: scale.color }}>
                  <strong>{interp.summary}</strong>
                </div>
                <p className="interp-narrative">{interp.narrative}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── NARRATIVE TAB ──
function NarrativeTab({ scores }) {
  const sections = [
    { instrument: 'HPI', scales: HPI_SCALES, title: 'Part One: Day-to-Day Personality (HPI)', intro: 'The Hogan Personality Inventory describes how this individual presents themselves on a daily basis — their characteristic style of engaging with work, people, and challenges when performing effectively.' },
    { instrument: 'HDS', scales: HDS_SCALES, title: 'Part Two: Derailer Risks Under Pressure (HDS)', intro: 'The Hogan Development Survey identifies behaviours that may emerge under pressure, stress, or when self-awareness decreases. These represent potential blind spots and career derailers that warrant proactive development.' },
    { instrument: 'MVPI', scales: MVPI_SCALES, title: 'Part Three: Core Values and Motivators (MVPI)', intro: 'The Motives, Values, Preferences Inventory reveals what this individual fundamentally wants from a career and working environment — the factors that will sustain long-term motivation and engagement.' },
  ];

  return (
    <div className="narrative-tab">
      <div className="narrative-intro">
        <h2>Narrative Assessment Report</h2>
        <p>
          This report integrates scores across all three Hogan instruments into a
          cohesive narrative profile. Each section provides interpretive commentary
          calibrated to the individual's score profile.
        </p>
        <p className="narrative-disclaimer">
          <em>
            This assessment is for developmental purposes. Results should be
            interpreted by a qualified HR professional or occupational psychologist
            in context with other relevant information.
          </em>
        </p>
      </div>

      {sections.map(({ instrument, scales, title, intro }) => (
        <div key={instrument} className="narrative-section">
          <h2 className="narrative-section-title">{title}</h2>
          <p className="narrative-section-intro">{intro}</p>

          {scales.map((scale) => {
            const score = scores[scale.id] ?? 0;
            const interp = getInterpretation(instrument, scale.id, score);
            if (!interp) return null;

            return (
              <div key={scale.id} className="narrative-scale-block">
                <div className="narrative-scale-header" style={{ borderBottomColor: scale.color }}>
                  <h3>
                    {scale.label}
                    <span className="narrative-score" style={{ color: scale.color }}>
                      {score}
                    </span>
                  </h3>
                  <span className={`narrative-band band-${getScoreBand(score)}`}>
                    {interp.summary}
                  </span>
                </div>
                <p className="narrative-text">{interp.narrative}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
