// Hogan Assessment Question Bank
// Each question: { id, text, scale, instrument, reverse }
// instrument: 'HPI' | 'HDS' | 'MVPI'
// reverse: true means high agreement = low scale score

export const HPI_SCALES = [
  { id: 'adjustment', label: 'Adjustment', color: '#4A90D9' },
  { id: 'ambition', label: 'Ambition', color: '#7B68EE' },
  { id: 'sociability', label: 'Sociability', color: '#50C878' },
  { id: 'interpersonal_sensitivity', label: 'Interpersonal Sensitivity', color: '#FFB347' },
  { id: 'prudence', label: 'Prudence', color: '#FF6B6B' },
  { id: 'inquisitive', label: 'Inquisitive', color: '#40E0D0' },
  { id: 'learning_approach', label: 'Learning Approach', color: '#DDA0DD' },
];

export const HDS_SCALES = [
  { id: 'excitable', label: 'Excitable', color: '#FF6B6B' },
  { id: 'skeptical', label: 'Skeptical', color: '#FFA07A' },
  { id: 'cautious', label: 'Cautious', color: '#FFD700' },
  { id: 'reserved', label: 'Reserved', color: '#90EE90' },
  { id: 'leisurely', label: 'Leisurely', color: '#87CEEB' },
  { id: 'bold', label: 'Bold', color: '#9370DB' },
  { id: 'mischievous', label: 'Mischievous', color: '#FF69B4' },
  { id: 'colorful', label: 'Colorful', color: '#FFA500' },
  { id: 'imaginative', label: 'Imaginative', color: '#20B2AA' },
  { id: 'diligent', label: 'Diligent', color: '#6495ED' },
  { id: 'dutiful', label: 'Dutiful', color: '#BC8F8F' },
];

export const MVPI_SCALES = [
  { id: 'recognition', label: 'Recognition', color: '#FFD700' },
  { id: 'power', label: 'Power', color: '#DC143C' },
  { id: 'hedonism', label: 'Hedonism', color: '#FF6B6B' },
  { id: 'altruistic', label: 'Altruistic', color: '#50C878' },
  { id: 'affiliation', label: 'Affiliation', color: '#87CEEB' },
  { id: 'tradition', label: 'Tradition', color: '#DEB887' },
  { id: 'security', label: 'Security', color: '#708090' },
  { id: 'commerce', label: 'Commerce', color: '#4A90D9' },
  { id: 'aesthetics', label: 'Aesthetics', color: '#DA70D6' },
  { id: 'science', label: 'Science', color: '#40E0D0' },
];

export const questions = [
  // ── HPI: ADJUSTMENT ──
  { id: 1, text: 'I rarely feel anxious or worried about things.', scale: 'adjustment', instrument: 'HPI', reverse: false },
  { id: 2, text: 'I tend to feel calm even under pressure.', scale: 'adjustment', instrument: 'HPI', reverse: false },
  { id: 3, text: 'I often worry about things that might go wrong.', scale: 'adjustment', instrument: 'HPI', reverse: true },
  { id: 4, text: 'I bounce back quickly from setbacks.', scale: 'adjustment', instrument: 'HPI', reverse: false },
  { id: 5, text: 'I am generally satisfied with myself.', scale: 'adjustment', instrument: 'HPI', reverse: false },

  // ── HPI: AMBITION ──
  { id: 6, text: 'I set high goals for myself and work hard to achieve them.', scale: 'ambition', instrument: 'HPI', reverse: false },
  { id: 7, text: 'I enjoy taking on leadership roles.', scale: 'ambition', instrument: 'HPI', reverse: false },
  { id: 8, text: 'Winning is very important to me.', scale: 'ambition', instrument: 'HPI', reverse: false },
  { id: 9, text: 'I tend to be satisfied with average performance.', scale: 'ambition', instrument: 'HPI', reverse: true },
  { id: 10, text: 'I am driven to be the best at what I do.', scale: 'ambition', instrument: 'HPI', reverse: false },

  // ── HPI: SOCIABILITY ──
  { id: 11, text: 'I enjoy large social gatherings and parties.', scale: 'sociability', instrument: 'HPI', reverse: false },
  { id: 12, text: 'I find it easy to strike up conversations with strangers.', scale: 'sociability', instrument: 'HPI', reverse: false },
  { id: 13, text: 'I prefer quiet evenings at home over going out.', scale: 'sociability', instrument: 'HPI', reverse: true },
  { id: 14, text: 'I tend to be the life of the party.', scale: 'sociability', instrument: 'HPI', reverse: false },
  { id: 15, text: 'Social interaction energises me.', scale: 'sociability', instrument: 'HPI', reverse: false },

  // ── HPI: INTERPERSONAL SENSITIVITY ──
  { id: 16, text: 'I am sensitive to the feelings of others.', scale: 'interpersonal_sensitivity', instrument: 'HPI', reverse: false },
  { id: 17, text: 'I try hard to avoid conflict with others.', scale: 'interpersonal_sensitivity', instrument: 'HPI', reverse: false },
  { id: 18, text: 'I often say things without considering how they might affect others.', scale: 'interpersonal_sensitivity', instrument: 'HPI', reverse: true },
  { id: 19, text: 'I pay close attention to what people are feeling.', scale: 'interpersonal_sensitivity', instrument: 'HPI', reverse: false },
  { id: 20, text: 'I am good at reading social situations.', scale: 'interpersonal_sensitivity', instrument: 'HPI', reverse: false },

  // ── HPI: PRUDENCE ──
  { id: 21, text: 'I am very organised and keep track of details carefully.', scale: 'prudence', instrument: 'HPI', reverse: false },
  { id: 22, text: 'I follow rules and procedures closely.', scale: 'prudence', instrument: 'HPI', reverse: false },
  { id: 23, text: 'I sometimes act impulsively without thinking things through.', scale: 'prudence', instrument: 'HPI', reverse: true },
  { id: 24, text: 'I plan ahead rather than leaving things to chance.', scale: 'prudence', instrument: 'HPI', reverse: false },
  { id: 25, text: 'I am reliable and dependable.', scale: 'prudence', instrument: 'HPI', reverse: false },

  // ── HPI: INQUISITIVE ──
  { id: 26, text: 'I enjoy exploring new ideas and theories.', scale: 'inquisitive', instrument: 'HPI', reverse: false },
  { id: 27, text: 'I have a vivid imagination.', scale: 'inquisitive', instrument: 'HPI', reverse: false },
  { id: 28, text: 'I prefer practical tasks to abstract thinking.', scale: 'inquisitive', instrument: 'HPI', reverse: true },
  { id: 29, text: 'I am curious about how things work.', scale: 'inquisitive', instrument: 'HPI', reverse: false },
  { id: 30, text: 'I enjoy creative problem solving.', scale: 'inquisitive', instrument: 'HPI', reverse: false },

  // ── HPI: LEARNING APPROACH ──
  { id: 31, text: 'I enjoy reading and learning new things.', scale: 'learning_approach', instrument: 'HPI', reverse: false },
  { id: 32, text: 'I keep up with the latest developments in my field.', scale: 'learning_approach', instrument: 'HPI', reverse: false },
  { id: 33, text: 'I prefer doing things the way they have always been done.', scale: 'learning_approach', instrument: 'HPI', reverse: true },
  { id: 34, text: 'I seek out training and development opportunities.', scale: 'learning_approach', instrument: 'HPI', reverse: false },
  { id: 35, text: 'I value education and expertise highly.', scale: 'learning_approach', instrument: 'HPI', reverse: false },

  // ── HDS: EXCITABLE ──
  { id: 36, text: 'My enthusiasm for new projects tends to fade quickly.', scale: 'excitable', instrument: 'HDS', reverse: false },
  { id: 37, text: 'I can be hard to please when things do not go as expected.', scale: 'excitable', instrument: 'HDS', reverse: false },
  { id: 38, text: 'My moods can change rapidly.', scale: 'excitable', instrument: 'HDS', reverse: false },
  { id: 39, text: 'I find it easy to stay positive even when disappointed.', scale: 'excitable', instrument: 'HDS', reverse: true },
  { id: 40, text: 'I can be quite emotional when things do not go as planned.', scale: 'excitable', instrument: 'HDS', reverse: false },

  // ── HDS: SKEPTICAL ──
  { id: 41, text: 'I tend to question the motives of people around me.', scale: 'skeptical', instrument: 'HDS', reverse: false },
  { id: 42, text: 'I find it hard to trust people I do not know well.', scale: 'skeptical', instrument: 'HDS', reverse: false },
  { id: 43, text: 'I assume positive intent from my colleagues.', scale: 'skeptical', instrument: 'HDS', reverse: true },
  { id: 44, text: 'I can be cynical about organisational decisions.', scale: 'skeptical', instrument: 'HDS', reverse: false },
  { id: 45, text: 'I am alert to the possibility that I might be taken advantage of.', scale: 'skeptical', instrument: 'HDS', reverse: false },

  // ── HDS: CAUTIOUS ──
  { id: 46, text: 'I worry about making mistakes that will embarrass me.', scale: 'cautious', instrument: 'HDS', reverse: false },
  { id: 47, text: 'I prefer to avoid situations where I might fail publicly.', scale: 'cautious', instrument: 'HDS', reverse: false },
  { id: 48, text: 'I am comfortable taking risks when necessary.', scale: 'cautious', instrument: 'HDS', reverse: true },
  { id: 49, text: 'I am reluctant to commit until I am very sure of the outcome.', scale: 'cautious', instrument: 'HDS', reverse: false },
  { id: 50, text: 'I can be indecisive when facing uncertain situations.', scale: 'cautious', instrument: 'HDS', reverse: false },

  // ── HDS: RESERVED ──
  { id: 51, text: 'I prefer working alone to working in teams.', scale: 'reserved', instrument: 'HDS', reverse: false },
  { id: 52, text: 'People sometimes describe me as aloof or distant.', scale: 'reserved', instrument: 'HDS', reverse: false },
  { id: 53, text: 'I genuinely enjoy collaborating with others on tasks.', scale: 'reserved', instrument: 'HDS', reverse: true },
  { id: 54, text: 'I do not always notice when others are upset or concerned.', scale: 'reserved', instrument: 'HDS', reverse: false },
  { id: 55, text: 'I find small talk draining.', scale: 'reserved', instrument: 'HDS', reverse: false },

  // ── HDS: LEISURELY ──
  { id: 56, text: 'I work at my own pace and resist being rushed.', scale: 'leisurely', instrument: 'HDS', reverse: false },
  { id: 57, text: 'I can be passive-aggressive when I disagree with decisions.', scale: 'leisurely', instrument: 'HDS', reverse: false },
  { id: 58, text: 'I actively cooperate even when I disagree with the direction.', scale: 'leisurely', instrument: 'HDS', reverse: true },
  { id: 59, text: 'I sometimes feel that others do not appreciate my contributions.', scale: 'leisurely', instrument: 'HDS', reverse: false },
  { id: 60, text: 'I tend to procrastinate on tasks I find unpleasant.', scale: 'leisurely', instrument: 'HDS', reverse: false },

  // ── HDS: BOLD ──
  { id: 61, text: 'I rarely doubt my own abilities.', scale: 'bold', instrument: 'HDS', reverse: false },
  { id: 62, text: 'I believe I deserve special recognition for my contributions.', scale: 'bold', instrument: 'HDS', reverse: false },
  { id: 63, text: 'I readily acknowledge my own mistakes.', scale: 'bold', instrument: 'HDS', reverse: true },
  { id: 64, text: 'I tend to overestimate my own capabilities.', scale: 'bold', instrument: 'HDS', reverse: false },
  { id: 65, text: 'I expect others to defer to my judgment.', scale: 'bold', instrument: 'HDS', reverse: false },

  // ── HDS: MISCHIEVOUS ──
  { id: 66, text: 'I enjoy testing limits and bending rules.', scale: 'mischievous', instrument: 'HDS', reverse: false },
  { id: 67, text: 'I take risks even when the odds are against me.', scale: 'mischievous', instrument: 'HDS', reverse: false },
  { id: 68, text: 'I always play by the rules.', scale: 'mischievous', instrument: 'HDS', reverse: true },
  { id: 69, text: 'I can be manipulative to get what I want.', scale: 'mischievous', instrument: 'HDS', reverse: false },
  { id: 70, text: 'I sometimes act impulsively for the thrill of it.', scale: 'mischievous', instrument: 'HDS', reverse: false },

  // ── HDS: COLORFUL ──
  { id: 71, text: 'I enjoy being the centre of attention.', scale: 'colorful', instrument: 'HDS', reverse: false },
  { id: 72, text: 'I tend to dramatise situations to make them more interesting.', scale: 'colorful', instrument: 'HDS', reverse: false },
  { id: 73, text: 'I can be flamboyant and expressive in public.', scale: 'colorful', instrument: 'HDS', reverse: false },
  { id: 74, text: 'I prefer to stay in the background rather than seek the spotlight.', scale: 'colorful', instrument: 'HDS', reverse: true },
  { id: 75, text: 'I can lose focus when something more interesting comes along.', scale: 'colorful', instrument: 'HDS', reverse: false },

  // ── HDS: IMAGINATIVE ──
  { id: 76, text: 'I have unusual and unconventional ideas.', scale: 'imaginative', instrument: 'HDS', reverse: false },
  { id: 77, text: 'People sometimes find my thinking hard to follow.', scale: 'imaginative', instrument: 'HDS', reverse: false },
  { id: 78, text: 'I think in very practical, concrete terms.', scale: 'imaginative', instrument: 'HDS', reverse: true },
  { id: 79, text: 'I often see connections that others miss.', scale: 'imaginative', instrument: 'HDS', reverse: false },
  { id: 80, text: 'My ideas can sometimes seem eccentric or out there.', scale: 'imaginative', instrument: 'HDS', reverse: false },

  // ── HDS: DILIGENT ──
  { id: 81, text: 'I set very high standards and am critical when they are not met.', scale: 'diligent', instrument: 'HDS', reverse: false },
  { id: 82, text: 'I find it hard to delegate because others rarely meet my standards.', scale: 'diligent', instrument: 'HDS', reverse: false },
  { id: 83, text: 'I accept "good enough" when perfection is not necessary.', scale: 'diligent', instrument: 'HDS', reverse: true },
  { id: 84, text: 'I can be a perfectionist to the point of slowing work down.', scale: 'diligent', instrument: 'HDS', reverse: false },
  { id: 85, text: 'I micromanage because I want things done correctly.', scale: 'diligent', instrument: 'HDS', reverse: false },

  // ── HDS: DUTIFUL ──
  { id: 86, text: 'I find it difficult to disagree with my manager.', scale: 'dutiful', instrument: 'HDS', reverse: false },
  { id: 87, text: 'I prioritise maintaining harmony over expressing my honest opinion.', scale: 'dutiful', instrument: 'HDS', reverse: false },
  { id: 88, text: 'I speak up when I disagree with my superiors.', scale: 'dutiful', instrument: 'HDS', reverse: true },
  { id: 89, text: 'I am reluctant to make decisions without approval from above.', scale: 'dutiful', instrument: 'HDS', reverse: false },
  { id: 90, text: 'I go out of my way to avoid upsetting people in authority.', scale: 'dutiful', instrument: 'HDS', reverse: false },

  // ── MVPI: RECOGNITION ──
  { id: 91, text: 'I want to be well-known and publicly appreciated for my work.', scale: 'recognition', instrument: 'MVPI', reverse: false },
  { id: 92, text: 'Public praise and awards are very motivating to me.', scale: 'recognition', instrument: 'MVPI', reverse: false },
  { id: 93, text: 'I prefer to work anonymously behind the scenes.', scale: 'recognition', instrument: 'MVPI', reverse: true },
  { id: 94, text: 'I care deeply about my reputation and public image.', scale: 'recognition', instrument: 'MVPI', reverse: false },

  // ── MVPI: POWER ──
  { id: 95, text: 'I am motivated by having authority over others.', scale: 'power', instrument: 'MVPI', reverse: false },
  { id: 96, text: 'I enjoy making decisions that affect many people.', scale: 'power', instrument: 'MVPI', reverse: false },
  { id: 97, text: 'Having control over resources is important to me.', scale: 'power', instrument: 'MVPI', reverse: false },
  { id: 98, text: 'I prefer situations where I follow rather than lead.', scale: 'power', instrument: 'MVPI', reverse: true },

  // ── MVPI: HEDONISM ──
  { id: 99, text: 'I believe work should be fun and enjoyable.', scale: 'hedonism', instrument: 'MVPI', reverse: false },
  { id: 100, text: 'I prioritise enjoying life over strict discipline.', scale: 'hedonism', instrument: 'MVPI', reverse: false },
  { id: 101, text: 'I am motivated by pleasure and positive experiences.', scale: 'hedonism', instrument: 'MVPI', reverse: false },
  { id: 102, text: 'I am willing to sacrifice enjoyment for achievement.', scale: 'hedonism', instrument: 'MVPI', reverse: true },

  // ── MVPI: ALTRUISTIC ──
  { id: 103, text: 'Helping others is one of my core motivations.', scale: 'altruistic', instrument: 'MVPI', reverse: false },
  { id: 104, text: 'I want my work to have a positive impact on society.', scale: 'altruistic', instrument: 'MVPI', reverse: false },
  { id: 105, text: 'I give generously to those in need.', scale: 'altruistic', instrument: 'MVPI', reverse: false },
  { id: 106, text: 'I focus mainly on personal rather than community goals.', scale: 'altruistic', instrument: 'MVPI', reverse: true },

  // ── MVPI: AFFILIATION ──
  { id: 107, text: 'Being part of a social group is very important to me.', scale: 'affiliation', instrument: 'MVPI', reverse: false },
  { id: 108, text: 'I am motivated by belonging and connection with others.', scale: 'affiliation', instrument: 'MVPI', reverse: false },
  { id: 109, text: 'I prefer working in teams to working alone.', scale: 'affiliation', instrument: 'MVPI', reverse: false },
  { id: 110, text: 'I am comfortable being a social outsider.', scale: 'affiliation', instrument: 'MVPI', reverse: true },

  // ── MVPI: TRADITION ──
  { id: 111, text: 'Traditional values and moral standards guide my life.', scale: 'tradition', instrument: 'MVPI', reverse: false },
  { id: 112, text: 'I respect established customs and institutions.', scale: 'tradition', instrument: 'MVPI', reverse: false },
  { id: 113, text: 'I think religious or cultural traditions are important.', scale: 'tradition', instrument: 'MVPI', reverse: false },
  { id: 114, text: 'I am sceptical of traditional norms and prefer progressive values.', scale: 'tradition', instrument: 'MVPI', reverse: true },

  // ── MVPI: SECURITY ──
  { id: 115, text: 'Predictability and stability are important to me in a workplace.', scale: 'security', instrument: 'MVPI', reverse: false },
  { id: 116, text: 'I prefer clear rules and structured environments.', scale: 'security', instrument: 'MVPI', reverse: false },
  { id: 117, text: 'I am comfortable in ambiguous and unstructured environments.', scale: 'security', instrument: 'MVPI', reverse: true },
  { id: 118, text: 'Job security matters more to me than high pay.', scale: 'security', instrument: 'MVPI', reverse: false },

  // ── MVPI: COMMERCE ──
  { id: 119, text: 'Financial success is a key motivation for me.', scale: 'commerce', instrument: 'MVPI', reverse: false },
  { id: 120, text: 'I enjoy reading about business and financial news.', scale: 'commerce', instrument: 'MVPI', reverse: false },
  { id: 121, text: 'I think about return on investment in most decisions.', scale: 'commerce', instrument: 'MVPI', reverse: false },
  { id: 122, text: 'Money matters far less to me than doing meaningful work.', scale: 'commerce', instrument: 'MVPI', reverse: true },

  // ── MVPI: AESTHETICS ──
  { id: 123, text: 'I care deeply about design, beauty, and elegance.', scale: 'aesthetics', instrument: 'MVPI', reverse: false },
  { id: 124, text: 'The quality and appearance of my work environment matters to me.', scale: 'aesthetics', instrument: 'MVPI', reverse: false },
  { id: 125, text: 'I appreciate art, music, and creative expression.', scale: 'aesthetics', instrument: 'MVPI', reverse: false },
  { id: 126, text: 'I do not care much about how things look as long as they work.', scale: 'aesthetics', instrument: 'MVPI', reverse: true },

  // ── MVPI: SCIENCE ──
  { id: 127, text: 'I am motivated by data, research, and evidence-based thinking.', scale: 'science', instrument: 'MVPI', reverse: false },
  { id: 128, text: 'I enjoy solving technical or analytical problems.', scale: 'science', instrument: 'MVPI', reverse: false },
  { id: 129, text: 'I prefer working with technology and data over people.', scale: 'science', instrument: 'MVPI', reverse: false },
  { id: 130, text: 'I prefer intuition over data when making decisions.', scale: 'science', instrument: 'MVPI', reverse: true },
];
