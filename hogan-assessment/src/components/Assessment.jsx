import { useState, useEffect } from 'react';
import { questions } from '../data/questions';

const LABELS = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];
const INSTRUMENT_LABELS = { HPI: 'Bright Side (HPI)', HDS: 'Dark Side (HDS)', MVPI: 'Values (MVPI)' };
const INSTRUMENT_ORDER = ['HPI', 'HDS', 'MVPI'];

// Group questions by instrument
const byInstrument = INSTRUMENT_ORDER.reduce((acc, inst) => {
  acc[inst] = questions.filter((q) => q.instrument === inst);
  return acc;
}, {});

const BATCH = 5; // questions per page within an instrument

export default function Assessment({ onComplete }) {
  const [responses, setResponses] = useState({});
  const [instrumentIdx, setInstrumentIdx] = useState(0);
  const [pageIdx, setPageIdx] = useState(0);

  const instrument = INSTRUMENT_ORDER[instrumentIdx];
  const instrQuestions = byInstrument[instrument];
  const totalPages = Math.ceil(instrQuestions.length / BATCH);
  const pageQuestions = instrQuestions.slice(pageIdx * BATCH, pageIdx * BATCH + BATCH);

  const answeredOnPage = pageQuestions.filter((q) => responses[q.id] != null).length;
  const pageComplete = answeredOnPage === pageQuestions.length;

  const totalAnswered = Object.keys(responses).length;
  const totalQuestions = questions.length;
  const progress = Math.round((totalAnswered / totalQuestions) * 100);

  function handleAnswer(qId, value) {
    setResponses((prev) => ({ ...prev, [qId]: value }));
  }

  function handleNext() {
    if (pageIdx < totalPages - 1) {
      setPageIdx(pageIdx + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (instrumentIdx < INSTRUMENT_ORDER.length - 1) {
      setInstrumentIdx(instrumentIdx + 1);
      setPageIdx(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onComplete(responses);
    }
  }

  function handleBack() {
    if (pageIdx > 0) {
      setPageIdx(pageIdx - 1);
    } else if (instrumentIdx > 0) {
      const prevInst = INSTRUMENT_ORDER[instrumentIdx - 1];
      const prevTotal = Math.ceil(byInstrument[prevInst].length / BATCH);
      setInstrumentIdx(instrumentIdx - 1);
      setPageIdx(prevTotal - 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const isFirst = instrumentIdx === 0 && pageIdx === 0;
  const isLast =
    instrumentIdx === INSTRUMENT_ORDER.length - 1 && pageIdx === totalPages - 1;

  const globalPage =
    INSTRUMENT_ORDER.slice(0, instrumentIdx).reduce(
      (sum, inst) => sum + Math.ceil(byInstrument[inst].length / BATCH),
      0
    ) + pageIdx + 1;
  const globalTotalPages = INSTRUMENT_ORDER.reduce(
    (sum, inst) => sum + Math.ceil(byInstrument[inst].length / BATCH),
    0
  );

  return (
    <div className="assessment-screen">
      {/* Progress bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="assessment-header">
        <div className="instrument-badge" data-instrument={instrument}>
          {instrument === 'HPI' ? '☀️' : instrument === 'HDS' ? '⚡' : '🎯'}{' '}
          {INSTRUMENT_LABELS[instrument]}
        </div>
        <div className="page-counter">
          Page {globalPage} of {globalTotalPages}
        </div>
      </div>

      <div className="questions-container">
        {pageQuestions.map((q, idx) => (
          <QuestionCard
            key={q.id}
            question={q}
            value={responses[q.id]}
            index={pageIdx * BATCH + idx + 1}
            total={instrQuestions.length}
            onChange={(v) => handleAnswer(q.id, v)}
          />
        ))}
      </div>

      <div className="nav-buttons">
        {!isFirst && (
          <button className="btn-secondary" onClick={handleBack}>
            ← Back
          </button>
        )}
        <button
          className="btn-primary"
          onClick={handleNext}
          disabled={!pageComplete}
          title={!pageComplete ? 'Please answer all questions on this page' : ''}
        >
          {isLast ? 'View My Report →' : 'Next →'}
        </button>
      </div>

      {!pageComplete && (
        <p className="page-warning">
          Please answer all {pageQuestions.length} questions to continue.
        </p>
      )}
    </div>
  );
}

function QuestionCard({ question, value, index, total, onChange }) {
  return (
    <div className={`question-card ${value != null ? 'answered' : ''}`}>
      <p className="question-number">Q{index}</p>
      <p className="question-text">{question.text}</p>
      <div className="likert-scale">
        {[1, 2, 3, 4, 5].map((v) => (
          <button
            key={v}
            className={`likert-btn ${value === v ? 'selected' : ''}`}
            onClick={() => onChange(v)}
            title={LABELS[v - 1]}
          >
            <span className="likert-dot" />
            <span className="likert-label">{LABELS[v - 1]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
