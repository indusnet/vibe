// Narrative interpretations for each scale at Low / Mid / High score bands
// Score bands: Low = 0–34, Mid = 35–65, High = 66–100

export const interpretations = {
  // ═══════════════════════════════ HPI ═══════════════════════════════
  hpi: {
    adjustment: {
      label: 'Adjustment',
      description: 'Reflects emotional stability, self-confidence, and composure under pressure.',
      low: {
        summary: 'Lower Adjustment',
        narrative: `Individuals with lower Adjustment scores tend to experience heightened emotional reactivity and may struggle to maintain composure under stress. They are often self-critical and can be prone to worry, anxiety, or self-doubt—particularly in high-stakes situations. While this sensitivity can make them empathetic and perceptive, it may also lead to rumination and difficulty recovering from setbacks. In leadership roles, this profile can sometimes undermine decisiveness and create uncertainty in those around them. Development efforts should focus on stress management, cognitive reframing, and building psychological resilience.`,
      },
      mid: {
        summary: 'Moderate Adjustment',
        narrative: `A moderate Adjustment score reflects a balanced emotional profile. This individual experiences stress and worry at manageable levels and is generally able to recover from setbacks without prolonged disruption. They are neither overly reactive nor disengaged from emotional signals, making them relatively well-suited to environments with occasional ambiguity or pressure. With appropriate support and structure, they tend to perform consistently. Occasional coaching around stress triggers may be beneficial.`,
      },
      high: {
        summary: 'Higher Adjustment',
        narrative: `Individuals with high Adjustment scores are emotionally stable, composed, and self-confident. They rarely dwell on failures and project a sense of calm that can be highly reassuring to those around them. Under pressure, they tend to make clear-headed decisions and maintain perspective. In leadership, this quality inspires trust and stability. A potential watchpoint is that very high scorers may appear indifferent to risk or feedback—they may underestimate genuine threats or dismiss the concerns of more sensitive team members.`,
      },
    },

    ambition: {
      label: 'Ambition',
      description: 'Reflects drive, competitiveness, initiative, and desire for leadership.',
      low: {
        summary: 'Lower Ambition',
        narrative: `Lower Ambition scores indicate an individual who is content to work without strong upward aspirations. They are unlikely to seek out leadership roles or aggressively compete with peers, and may prefer stability over advancement. This can be an asset in roles requiring steady, reliable execution without territorial behaviour. However, in high-performance or growth-oriented environments, they may be perceived as lacking initiative or drive. Motivation strategies should focus on intrinsic rewards, mastery, and contribution rather than status or advancement.`,
      },
      mid: {
        summary: 'Moderate Ambition',
        narrative: `A moderate Ambition score reflects a healthy and realistic drive. This individual sets meaningful goals and works towards them without becoming overly competitive or self-promoting. They are willing to lead when asked and can be relied upon to take initiative on important tasks. In team settings, they tend to balance their own goals with collective outcomes. They represent a versatile profile—capable of moving up when opportunity arises, but also effective as a strong individual contributor.`,
      },
      high: {
        summary: 'Higher Ambition',
        narrative: `High Ambition individuals are goal-oriented, competitive, and highly motivated to lead and advance. They set stretch targets, take ownership of results, and are often the driving force behind team performance. They thrive in merit-based environments and respond well to achievement-linked incentives. A key consideration is that very high scorers may become impatient with slower colleagues, be perceived as overly competitive, or struggle to share credit. Coaching should address collaborative leadership and the importance of developing others.`,
      },
    },

    sociability: {
      label: 'Sociability',
      description: 'Reflects extraversion, social confidence, and enjoyment of interaction.',
      low: {
        summary: 'Lower Sociability',
        narrative: `Lower Sociability scores indicate an introverted orientation. This individual tends to prefer working independently or in small groups and may find high-volume social interaction draining. They are likely to be thoughtful, reflective, and measured in their communication—qualities that are valuable in analytical or technical roles. In leadership or client-facing contexts, they may need extra effort or structure to build networks and relationships. Team integration strategies and structured networking opportunities can help them engage more effectively.`,
      },
      mid: {
        summary: 'Moderate Sociability',
        narrative: `A moderate Sociability score reflects an ambiverted profile—comfortable in social situations but not overly dependent on them. This person can function well in both collaborative and independent settings, adapting their social energy to the demands of the role. They tend to build genuine but selective relationships and are effective in most workplace environments. They may occasionally need encouragement to expand their networks beyond their immediate circle.`,
      },
      high: {
        summary: 'Higher Sociability',
        narrative: `High Sociability individuals are energised by social interaction. They build relationships quickly, enjoy group dynamics, and often excel in roles that require networking, persuasion, or team engagement. They are natural communicators who make others feel at ease. However, very high scorers may be perceived as superficial, distractible, or as prioritising social engagement over task completion. In structured environments, ensuring they remain focused on deliverables alongside relationship-building is important.`,
      },
    },

    interpersonal_sensitivity: {
      label: 'Interpersonal Sensitivity',
      description: "Reflects tact, empathy, perceptiveness, and concern for others' feelings.",
      low: {
        summary: 'Lower Interpersonal Sensitivity',
        narrative: `Lower Interpersonal Sensitivity scores suggest an individual who may be direct to the point of bluntness. They tend to prioritise task and logic over interpersonal harmony, and may not always notice or respond to emotional undercurrents in a group. While this can make them decisive and efficient, it may also lead to unintentional friction with colleagues or stakeholders who value relational attunement. Coaching around communication style, active listening, and emotional recognition can significantly improve their effectiveness with others.`,
      },
      mid: {
        summary: 'Moderate Interpersonal Sensitivity',
        narrative: `A moderate score on Interpersonal Sensitivity indicates a balanced approach to people and task. This individual is generally aware of others' feelings and adjusts their communication style accordingly, without being overly accommodating or conflict-averse. They are able to maintain relationships while still delivering honest feedback when needed. This profile tends to perform well in people-facing and collaborative roles.`,
      },
      high: {
        summary: 'Higher Interpersonal Sensitivity',
        narrative: `High Interpersonal Sensitivity individuals are highly attuned to the emotional states of those around them. They are tactful, empathetic, and skilled at managing interpersonal dynamics. They tend to be popular with colleagues and effective at conflict resolution and team cohesion. A development area is that very high scorers may avoid difficult conversations to preserve harmony, struggle with delivering critical feedback, or be perceived as overly accommodating. Building confidence in assertive communication is a useful development focus.`,
      },
    },

    prudence: {
      label: 'Prudence',
      description: 'Reflects conscientiousness, self-discipline, organisation, and rule-following.',
      low: {
        summary: 'Lower Prudence',
        narrative: `Lower Prudence scores reflect a more flexible and spontaneous approach to work. This individual may resist rigid structure and prefer to adapt as situations evolve. While this can be an asset in creative or rapidly changing environments, it may manifest as disorganisation, missed deadlines, or failure to follow protocols in more structured settings. Development efforts should focus on building planning habits, accountability systems, and a greater appreciation for procedural compliance.`,
      },
      mid: {
        summary: 'Moderate Prudence',
        narrative: `A moderate Prudence score reflects a balanced approach to structure and flexibility. This individual is generally organised and follows rules when they see them as important, but is also capable of adapting when circumstances require it. They are neither rigidly procedural nor chaotically spontaneous, making them effective across a range of work environments. They may benefit from clear expectations and accountability structures to perform at their best.`,
      },
      high: {
        summary: 'Higher Prudence',
        narrative: `High Prudence individuals are highly conscientious, organised, and reliable. They follow rules carefully, plan meticulously, and hold themselves and others to high standards of accuracy. This profile is strongly correlated with performance in roles requiring precision, compliance, or project management. A key development consideration is that very high scorers can be inflexible, overly focused on process over outcomes, and may struggle to tolerate ambiguity or adapt when plans need to change rapidly.`,
      },
    },

    inquisitive: {
      label: 'Inquisitive',
      description: 'Reflects imagination, curiosity, creativity, and openness to new ideas.',
      low: {
        summary: 'Lower Inquisitive',
        narrative: `Lower Inquisitive scores indicate a more practically minded individual who prefers concrete, established approaches over theoretical exploration. They are less likely to be distracted by abstract ideas and tend to focus on proven methods. This can be a strength in roles requiring reliable execution. However, in innovation-driven environments, this profile may struggle to generate novel solutions or adapt to rapid change. Exposure to design thinking and structured creative problem-solving can help expand their repertoire.`,
      },
      mid: {
        summary: 'Moderate Inquisitive',
        narrative: `A moderate Inquisitive score reflects a balanced thinker—curious enough to explore new ideas but grounded enough to apply them practically. This individual can engage with creative challenges while also delivering concrete outputs. They tend to adapt well to environments that blend innovation with execution, making them effective contributors in most knowledge work contexts.`,
      },
      high: {
        summary: 'Higher Inquisitive',
        narrative: `High Inquisitive individuals are intellectually curious, creative, and drawn to exploring complex ideas. They are often innovative thinkers who generate fresh perspectives and thrive in ambiguous or fast-changing environments. Their imagination is a significant asset in strategy, research, or design roles. A potential development area is ensuring follow-through—very high scorers can become so absorbed in generating ideas that execution suffers. Pairing them with strong implementers or building project discipline can maximise their creative potential.`,
      },
    },

    learning_approach: {
      label: 'Learning Approach',
      description: 'Reflects the value placed on education, expertise, and continuous development.',
      low: {
        summary: 'Lower Learning Approach',
        narrative: `Lower Learning Approach scores suggest an individual who values practical experience over formal education and is unlikely to actively seek out learning opportunities. They may prefer doing over studying, and may resist development initiatives perceived as theoretical or academic. Connecting learning to immediate, tangible on-the-job application is likely to be the most effective development approach for this individual.`,
      },
      mid: {
        summary: 'Moderate Learning Approach',
        narrative: `A moderate Learning Approach score reflects a pragmatic interest in development. This individual values learning when it is relevant and applicable, and will engage with training or education when they can see clear utility. They are neither passionately academic nor resistant to development, and tend to respond well to blended learning approaches that combine theory with immediate practice.`,
      },
      high: {
        summary: 'Higher Learning Approach',
        narrative: `High Learning Approach individuals are committed to continuous development. They actively seek out new knowledge, pursue expertise, and stay current with trends in their field. This drive is a significant asset in complex, knowledge-intensive roles. A consideration is that very high scorers may over-rely on credentials and formal knowledge at the expense of experience-based wisdom, or may be perceived as overly academic in fast-paced operational environments.`,
      },
    },
  },

  // ═══════════════════════════════ HDS ═══════════════════════════════
  hds: {
    excitable: {
      label: 'Excitable',
      description: 'Tendency toward emotional volatility and enthusiasm that fades quickly under pressure.',
      low: {
        summary: 'Low Excitable Risk',
        narrative: `This individual shows low risk on the Excitable scale. They tend to maintain stable enthusiasm over time, are not easily frustrated, and generally manage disappointment without visible emotional disruption. This is a low-risk profile on this dimension.`,
      },
      mid: {
        summary: 'Moderate Excitable Risk',
        narrative: `A moderate score on Excitable suggests some tendency toward mood variability or inconsistent enthusiasm, particularly under pressure or when expectations are not met. While this derailer is unlikely to cause serious problems under normal conditions, it may surface during high-stress periods as emotional volatility, pessimism, or difficulty sustaining motivation on longer-term initiatives.`,
      },
      high: {
        summary: 'Elevated Excitable Risk',
        narrative: `A high Excitable score is a significant derailer risk. Under pressure, this individual may become visibly frustrated, moody, or hard to please. Initial enthusiasm for new projects often fades, and reactions to disappointment can be disproportionate. Colleagues and direct reports may find their unpredictability unsettling. Coaching should focus on emotional regulation, managing expectations, and developing consistent and predictable leadership behaviour, particularly during adversity.`,
      },
    },

    skeptical: {
      label: 'Skeptical',
      description: "Tendency toward cynicism, suspicion, and distrust of others' motives.",
      low: {
        summary: 'Low Skeptical Risk',
        narrative: `Low Skeptical individuals tend to assume positive intent and are generally trusting. While this is a strength in collaborative environments, very low scorers should ensure they maintain appropriate healthy scrutiny in high-stakes situations.`,
      },
      mid: {
        summary: 'Moderate Skeptical Risk',
        narrative: `Moderate Skeptical scores suggest a degree of healthy vigilance that can be an asset—this person asks probing questions and does not take things at face value. However, under stress this can tip into overt cynicism, questioning of motives, or resistance to leadership decisions. Awareness of this pattern and active trust-building practices are useful development areas.`,
      },
      high: {
        summary: 'Elevated Skeptical Risk',
        narrative: `A high Skeptical score is a prominent derailer. This individual is likely to be perceived as cynical, argumentative, or distrustful—particularly of leadership and organisational change. They may undermine team morale by voicing doubt about the motives behind decisions, or become oppositional under pressure. Building authentic relationships, developing conflict resolution skills, and learning to separate productive scrutiny from chronic cynicism are key development priorities.`,
      },
    },

    cautious: {
      label: 'Cautious',
      description: 'Tendency to avoid risk, resist change, and become indecisive under pressure.',
      low: {
        summary: 'Low Cautious Risk',
        narrative: `Low Cautious individuals are comfortable with risk and tend to be decisive. In fast-moving environments this is a strength; the main risk is acting without sufficient consideration of downside scenarios.`,
      },
      mid: {
        summary: 'Moderate Cautious Risk',
        narrative: `Moderate Cautious scores reflect some tendency to hesitate when uncertain, particularly before committing to high-stakes decisions. This individual may slow down during periods of change or ambiguity. While their carefulness can prevent costly errors, it may also hold back timely action. Building decision-making confidence and scenario planning skills is a useful development focus.`,
      },
      high: {
        summary: 'Elevated Cautious Risk',
        narrative: `A high Cautious score represents a significant derailer risk in dynamic or leadership contexts. Under pressure, this person may become paralysed by indecision, avoid committing to positions, or resist change to the point of obstruction. They may be overly concerned with potential failure or embarrassment, leading to missed opportunities. Coaching should emphasise structured risk assessment, building tolerance for uncertainty, and developing confidence in making and owning decisions.`,
      },
    },

    reserved: {
      label: 'Reserved',
      description: 'Tendency toward emotional distance, detachment, and indifference to team dynamics.',
      low: {
        summary: 'Low Reserved Risk',
        narrative: `Low Reserved individuals are relationally engaged and attentive to interpersonal dynamics. They are unlikely to be perceived as cold or indifferent and tend to invest in team relationships naturally.`,
      },
      mid: {
        summary: 'Moderate Reserved Risk',
        narrative: `Moderate Reserved scores suggest some tendency to withdraw from social interaction, especially under pressure. This person may occasionally be perceived as aloof or hard to read, and may miss interpersonal cues that signal team tension. Actively investing in relationship management—particularly during stressful periods—is a useful development focus.`,
      },
      high: {
        summary: 'Elevated Reserved Risk',
        narrative: `A high Reserved score is a key derailer in people leadership roles. This individual may appear emotionally detached, uninterested in others, or difficult to approach. Under stress, they may withdraw further, reducing communication and visibility at exactly the moments when their team needs reassurance and direction. Coaching should focus on building deliberate relational practices, increasing visibility, and developing empathy-based leadership behaviours.`,
      },
    },

    leisurely: {
      label: 'Leisurely',
      description: 'Tendency toward passive resistance, procrastination, and hidden resentment.',
      low: {
        summary: 'Low Leisurely Risk',
        narrative: `Low Leisurely individuals are cooperative and willing to accommodate others' needs and timelines. They are unlikely to engage in passive resistance or covert obstruction.`,
      },
      mid: {
        summary: 'Moderate Leisurely Risk',
        narrative: `Moderate Leisurely scores suggest a degree of independence that can occasionally tip into passive resistance when this person feels unappreciated or overruled. They may procrastinate on tasks they find unrewarding or slow their pace when they disagree with the direction. Open communication channels and recognition of contributions can help mitigate this risk.`,
      },
      high: {
        summary: 'Elevated Leisurely Risk',
        narrative: `A high Leisurely score is a significant derailer—particularly in team and organisational contexts. This individual may subtly resist requests they disagree with, drag their feet on deliverables, or express resentment through indirect means. They may feel chronically undervalued and respond by doing the minimum required. Coaching should focus on direct communication of frustration, assertiveness, and developing healthy mechanisms for expressing disagreement.`,
      },
    },

    bold: {
      label: 'Bold',
      description: 'Tendency toward arrogance, entitlement, and overestimation of own abilities.',
      low: {
        summary: 'Low Bold Risk',
        narrative: `Low Bold individuals tend to be appropriately humble and open to feedback. The risk at the low end is underconfidence—they may undersell their capabilities or defer excessively in situations that call for decisive self-assertion.`,
      },
      mid: {
        summary: 'Moderate Bold Risk',
        narrative: `Moderate Bold scores reflect healthy self-confidence that occasionally tips into overestimation of abilities or resistance to critical feedback. Under pressure, this person may find it difficult to acknowledge mistakes or may over-rely on their own judgment. Structured 360-degree feedback processes and coaching on receptiveness are beneficial at this level.`,
      },
      high: {
        summary: 'Elevated Bold Risk',
        narrative: `A high Bold score is one of the most consequential leadership derailers. This individual tends to have an inflated view of their abilities, a strong sense of entitlement, and a high resistance to feedback. They may fail to acknowledge mistakes, take undue credit, and alienate high-performing team members who feel their contributions are not recognised. The development priority is building genuine intellectual humility, developing the capacity to receive and integrate critical feedback, and reframing confidence as a tool for others' growth rather than self-promotion.`,
      },
    },

    mischievous: {
      label: 'Mischievous',
      description: 'Tendency toward risk-taking, boundary-testing, and impulsive decision-making.',
      low: {
        summary: 'Low Mischievous Risk',
        narrative: `Low Mischievous individuals are rule-abiding and risk-conscious. They are unlikely to push limits or make impulsive decisions. The risk at the low end is excessive caution that prevents necessary bold action.`,
      },
      mid: {
        summary: 'Moderate Mischievous Risk',
        narrative: `Moderate Mischievous scores suggest a degree of risk appetite and boundary-testing that can manifest as creativity and entrepreneurial thinking in supportive environments. Under pressure, however, this can tip into poor judgment, impulsive decisions, or charm-based manipulation. Governance structures, ethical frameworks, and accountability partnerships are useful safeguards.`,
      },
      high: {
        summary: 'Elevated Mischievous Risk',
        narrative: `A high Mischievous score is a serious derailer in governance-sensitive or high-trust environments. This individual may test limits, take unacceptable risks, and use charm to manage consequences rather than changing behaviour. They may act impulsively, disregard the impact on others, and be skilled at avoiding accountability. Strong structural safeguards, clear boundaries with consequences, and close performance monitoring are essential in any leadership role for this profile.`,
      },
    },

    colorful: {
      label: 'Colorful',
      description: 'Tendency toward attention-seeking, impulsivity, and loss of focus under pressure.',
      low: {
        summary: 'Low Colorful Risk',
        narrative: `Low Colorful individuals are understated and prefer to let their work speak for itself. They are unlikely to seek the spotlight or create dramatic scenes, but may need to develop greater executive presence and communication confidence in high-visibility roles.`,
      },
      mid: {
        summary: 'Moderate Colorful Risk',
        narrative: `Moderate Colorful scores reflect expressive communication and a desire for engagement that is generally positive but can occasionally tip into attention-seeking or distractibility. Managing the desire for stimulation and maintaining focus on priorities is a useful development theme for this profile.`,
      },
      high: {
        summary: 'Elevated Colorful Risk',
        narrative: `A high Colorful score is a derailer in roles requiring sustained focus, consistent follow-through, and measured leadership. This individual may dominate discussions, create drama to stay relevant, and lose interest in projects once the novelty fades. Under pressure, they may prioritise visibility over substance. Coaching should focus on building follow-through disciplines, learning to share the stage, and developing a consistent track record of delivery over time.`,
      },
    },

    imaginative: {
      label: 'Imaginative',
      description: 'Tendency toward eccentric thinking that others find hard to follow or apply.',
      low: {
        summary: 'Low Imaginative Risk',
        narrative: `Low Imaginative individuals think in practical, conventional terms. This is a strength for execution-focused roles but may limit creative contribution in environments that require novel thinking or strategic innovation.`,
      },
      mid: {
        summary: 'Moderate Imaginative Risk',
        narrative: `Moderate Imaginative scores reflect creative thinking that is generally grounded enough to be understood and applied. Under pressure, unconventional thinking may occasionally become difficult for others to follow, but this is unlikely to be a serious derailer. Practising communication clarity for complex ideas is a useful development area.`,
      },
      high: {
        summary: 'Elevated Imaginative Risk',
        narrative: `A high Imaginative score can be a significant derailer in operational or collaborative roles. This individual may communicate in ways that others find hard to follow, make connections that seem disconnected from reality, or pursue idiosyncratic strategies that others cannot support. Their thinking may be genuinely innovative, but its value is lost if it cannot be translated into shared understanding and action. Coaching should focus on communication precision, collaborative ideation, and grounding creative thinking in tangible outcomes.`,
      },
    },

    diligent: {
      label: 'Diligent',
      description: 'Tendency toward perfectionism, micromanagement, and difficulty delegating.',
      low: {
        summary: 'Low Diligent Risk',
        narrative: `Low Diligent individuals are relaxed about standards and comfortable delegating. They may need to develop greater attention to quality and detail in roles where precision is critical.`,
      },
      mid: {
        summary: 'Moderate Diligent Risk',
        narrative: `Moderate Diligent scores reflect healthy quality standards that can occasionally tip into perfectionism or difficulty trusting others with important work. Under pressure, this individual may spend disproportionate time on detail, slow delivery, or create friction with those who do not share their standards. Developing delegation confidence and "good enough" judgment are useful development areas.`,
      },
      high: {
        summary: 'Elevated Diligent Risk',
        narrative: `A high Diligent score is a significant derailer in leadership roles. This individual sets standards that few can meet, struggles to delegate meaningfully, and can micromanage in ways that undermine team morale and autonomy. Their perfectionism may slow organisational pace to a significant degree. Coaching should focus on building trust in others, distinguishing where high standards genuinely add value from where they create unnecessary friction, and developing a more enabling leadership style.`,
      },
    },

    dutiful: {
      label: 'Dutiful',
      description: 'Tendency toward over-compliance, difficulty disagreeing with authority, and lack of independent judgment.',
      low: {
        summary: 'Low Dutiful Risk',
        narrative: `Low Dutiful individuals are comfortable disagreeing with authority and acting independently. While this is a strength for roles requiring initiative, very low scorers may occasionally be perceived as difficult or insubordinate.`,
      },
      mid: {
        summary: 'Moderate Dutiful Risk',
        narrative: `Moderate Dutiful scores reflect a reasonable balance between supporting authority and maintaining independent judgment. Under significant stress or in highly hierarchical environments, this individual may become more deferential than optimal. Building confidence in assertive upward communication is a useful development theme.`,
      },
      high: {
        summary: 'Elevated Dutiful Risk',
        narrative: `A high Dutiful score is a derailer in roles that require independent judgment, innovation, or upward challenge. This individual may be reluctant to disagree with their manager even when they should, fail to raise important concerns to avoid conflict, and avoid making decisions without explicit approval. In leadership roles, this can create an overly compliant culture. Coaching should focus on developing voice, building confidence in upward challenge, and distinguishing between appropriate deference and harmful compliance.`,
      },
    },
  },

  // ═══════════════════════════════ MVPI ═══════════════════════════════
  mvpi: {
    recognition: {
      label: 'Recognition',
      description: 'Motivated by visibility, reputation, and public acknowledgement of achievement.',
      low: {
        summary: 'Low Recognition Drive',
        narrative: `This individual is not strongly motivated by public recognition. They are comfortable working without external validation and are unlikely to seek the spotlight. They may be an excellent fit for behind-the-scenes or technically-focused roles where quiet competence is the norm.`,
      },
      mid: {
        summary: 'Moderate Recognition Drive',
        narrative: `A moderate Recognition score reflects a balanced desire for acknowledgement—this person appreciates being recognised for good work but is not defined by it. They will respond positively to public appreciation but will not be demotivated by its absence. Standard recognition practices—peer acknowledgement, performance reviews, and visible milestones—are sufficient to sustain engagement.`,
      },
      high: {
        summary: 'High Recognition Drive',
        narrative: `High Recognition scorers are strongly motivated by visibility and reputation. They want their contributions to be seen and will perform at their best in environments where achievements are publicly celebrated. They are likely to be energised by client-facing roles, thought leadership, and any context where their expertise is visible to a broad audience. Neglect of public recognition is a significant retention and engagement risk for this individual.`,
      },
    },

    power: {
      label: 'Power',
      description: 'Motivated by authority, control, and influence over people and resources.',
      low: {
        summary: 'Low Power Drive',
        narrative: `This individual is not strongly motivated by authority or control. They are comfortable in roles without positional power and are unlikely to compete aggressively for promotions or territory. This is well suited to collaborative, servant-leadership environments. Development focus should ensure they feel influential through expertise and contribution even without formal authority.`,
      },
      mid: {
        summary: 'Moderate Power Drive',
        narrative: `A moderate Power score reflects a healthy desire to have influence without being dominated by the need for control. This individual appreciates having responsibility and decision-making authority but can function well without it. They tend to be effective leaders who balance authority with collaboration.`,
      },
      high: {
        summary: 'High Power Drive',
        narrative: `High Power scorers are energised by authority and control. They will seek out positions of influence and perform best when given real decision-making responsibility and organisational standing. Environments that constrain their autonomy or undermine their authority will be deeply demotivating. They are drawn to large organisations, senior roles, and any context where they can have meaningful impact on strategic direction. Ensuring clear ownership and decision rights is critical for this profile.`,
      },
    },

    hedonism: {
      label: 'Hedonism',
      description: 'Motivated by fun, pleasure, variety, and enjoyment in the work environment.',
      low: {
        summary: 'Low Hedonism Drive',
        narrative: `This individual is not strongly motivated by pleasure or enjoyment per se. They are disciplined, often willing to endure discomfort in pursuit of meaningful goals, and not reliant on a "fun" workplace culture. They may thrive in demanding environments where rigor is expected and outcomes matter.`,
      },
      mid: {
        summary: 'Moderate Hedonism Drive',
        narrative: `A moderate Hedonism score reflects someone who appreciates enjoyment in work but can sustain effort through less stimulating phases. A generally positive culture with occasional variety and celebration is sufficient to keep this individual engaged. They balance discipline and fun in a workable way.`,
      },
      high: {
        summary: 'High Hedonism Drive',
        narrative: `High Hedonism scorers need to enjoy their work to perform at their best. They thrive in vibrant, energetic, and socially rich cultures where variety and fun are embedded in the working experience. Dull, repetitive, or overly bureaucratic environments will drain their motivation rapidly. They are a strong fit for roles in entertainment, hospitality, startups, or any culture that explicitly values enjoyment alongside performance.`,
      },
    },

    altruistic: {
      label: 'Altruistic',
      description: 'Motivated by helping others and making a positive contribution to society.',
      low: {
        summary: 'Low Altruistic Drive',
        narrative: `This individual is primarily self-focused in their motivational orientation. They are not strongly moved by a desire to help others or contribute to social good, and may be more suited to competitive, commercially focused environments than those driven by prosocial mission.`,
      },
      mid: {
        summary: 'Moderate Altruistic Drive',
        narrative: `A moderate Altruistic score reflects care for others balanced with attention to personal and organisational goals. This individual appreciates when their work contributes to something larger but does not require a purely mission-driven environment to remain engaged. They tend to be effective in organisations where commercial and social objectives are aligned.`,
      },
      high: {
        summary: 'High Altruistic Drive',
        narrative: `High Altruistic scorers are deeply motivated by helping others and contributing to social good. They are a natural fit for roles in healthcare, education, non-profit, social enterprise, or any organisation with a clear and genuine prosocial mission. In purely commercial environments without visible social impact, their engagement is at significant risk. Leaders who demonstrate genuine care for employee wellbeing and community impact will resonate most with this individual.`,
      },
    },

    affiliation: {
      label: 'Affiliation',
      description: 'Motivated by social connection, belonging, and team-based environments.',
      low: {
        summary: 'Low Affiliation Drive',
        narrative: `This individual is not primarily motivated by social belonging. They are comfortable working independently and may prefer roles that do not require constant interpersonal engagement. They will thrive in solo contributor or technical specialist roles where individual contribution is valued above team cohesion.`,
      },
      mid: {
        summary: 'Moderate Affiliation Drive',
        narrative: `A moderate Affiliation score reflects a balanced orientation—this person values team connection without being dependent on it. They function well in both team and independent contexts, making them versatile across different work structures.`,
      },
      high: {
        summary: 'High Affiliation Drive',
        narrative: `High Affiliation scorers are strongly motivated by belonging and social connection. They need to feel genuinely part of a team or community to perform at their best, and will struggle in isolated or highly fragmented work environments. They are a strong cultural fit for collaborative, socially rich workplaces with strong team identity. Remote or independent work settings may undermine their motivation significantly unless strong virtual community structures are in place.`,
      },
    },

    tradition: {
      label: 'Tradition',
      description: 'Motivated by adherence to traditional values, customs, and moral standards.',
      low: {
        summary: 'Low Tradition Drive',
        narrative: `This individual is not strongly motivated by tradition or conventional moral frameworks. They are open to progressive ideas and comfortable questioning established norms. They tend to be a strong fit for innovative, progressive, or rapidly changing organisations.`,
      },
      mid: {
        summary: 'Moderate Tradition Drive',
        narrative: `A moderate Tradition score reflects respect for established values and norms balanced with openness to change. This individual appreciates cultural and moral consistency without being bound by it, and can navigate both traditional and progressive organisational cultures effectively.`,
      },
      high: {
        summary: 'High Tradition Drive',
        narrative: `High Tradition scorers are motivated by adherence to established values, cultural norms, and moral frameworks—often with a religious or community dimension. They are a strong fit for organisations with a clear values base, long institutional heritage, or conservative cultural identity. In rapidly changing, progressive, or value-diverse environments, they may experience significant discomfort. Culture fit assessment is particularly important for this individual.`,
      },
    },

    security: {
      label: 'Security',
      description: 'Motivated by predictability, stability, clear structure, and order.',
      low: {
        summary: 'Low Security Drive',
        narrative: `This individual is not strongly motivated by stability or structure. They are comfortable with ambiguity and change, and may actively enjoy dynamic or unpredictable environments. They are a strong fit for startups, transformation roles, or contexts where rapid adaptation is required.`,
      },
      mid: {
        summary: 'Moderate Security Drive',
        narrative: `A moderate Security score reflects a preference for reasonable predictability without rigidity. This individual appreciates clear processes and stable environments but can adapt when needed. Most mid-sized organisations with stable but evolving structures will suit this profile.`,
      },
      high: {
        summary: 'High Security Drive',
        narrative: `High Security scorers need structure, predictability, and stability to perform at their best. They are strongly motivated by clear rules, reliable processes, and job security. Environments characterised by constant change, ambiguity, or disruption will be chronically stressful for this individual. They are an excellent fit for highly regulated industries, established institutions, or roles with well-defined scope and expectations.`,
      },
    },

    commerce: {
      label: 'Commerce',
      description: 'Motivated by financial success, business growth, and commercial outcomes.',
      low: {
        summary: 'Low Commerce Drive',
        narrative: `This individual is not primarily driven by financial or commercial outcomes. They may be more focused on relational, creative, or social motivators. In commercially focused roles, they may need explicit connection of their work to business outcomes to remain engaged.`,
      },
      mid: {
        summary: 'Moderate Commerce Drive',
        narrative: `A moderate Commerce score reflects a balanced attitude toward financial and business outcomes—important but not overriding. This individual responds to commercially framed objectives but also values non-financial motivators. They are generally effective in business settings without being exclusively profit-driven.`,
      },
      high: {
        summary: 'High Commerce Drive',
        narrative: `High Commerce scorers are strongly motivated by financial outcomes and business success. They track commercial metrics closely, think about return on investment in most decisions, and are energised by profit, growth, and market performance. They are a natural fit for sales, business development, trading, investment, or entrepreneurial environments. In mission-driven or public sector roles without clear commercial metrics, their motivation may diminish significantly.`,
      },
    },

    aesthetics: {
      label: 'Aesthetics',
      description: 'Motivated by beauty, design, quality, and creative expression.',
      low: {
        summary: 'Low Aesthetics Drive',
        narrative: `This individual is not strongly motivated by design or aesthetic quality. They are functional in orientation and tend to value utility over form. They are well suited to technical, analytical, or operational roles where aesthetic considerations are secondary to performance.`,
      },
      mid: {
        summary: 'Moderate Aesthetics Drive',
        narrative: `A moderate Aesthetics score reflects appreciation for quality and design without it being a central motivator. This individual will notice and appreciate well-designed environments and outputs but will not be significantly demotivated by aesthetic shortcomings. They tend to produce clean, adequate work product without being strongly driven to achieve elegance.`,
      },
      high: {
        summary: 'High Aesthetics Drive',
        narrative: `High Aesthetics scorers are deeply motivated by beauty, quality, and design. They are likely to pay close attention to the visual and experiential quality of their work, their environment, and the products they produce. They are a natural fit for creative, design, brand, UX, architecture, or editorial roles. In operational environments with little aesthetic dimension, their intrinsic motivation may be suppressed. Providing opportunities to contribute to quality and design—even informally—can significantly enhance their engagement.`,
      },
    },

    science: {
      label: 'Science',
      description: 'Motivated by data, research, technology, and evidence-based problem-solving.',
      low: {
        summary: 'Low Science Drive',
        narrative: `This individual is not strongly motivated by data or analytical problem-solving. They tend to rely on intuition, experience, and interpersonal insight rather than technical or empirical methods. They may be most effective in relationship-driven, creative, or leadership roles where human judgment is the primary currency.`,
      },
      mid: {
        summary: 'Moderate Science Drive',
        narrative: `A moderate Science score reflects pragmatic use of data and technology—this person appreciates evidence and can work effectively with analytical tools, but does not need technical depth to feel motivated. They tend to be effective bridgers between technical and non-technical stakeholders.`,
      },
      high: {
        summary: 'High Science Drive',
        narrative: `High Science scorers are intrinsically motivated by data, research, and technical problem-solving. They prefer evidence over intuition, excel in analytical environments, and are drawn to technology-intensive or research-based roles. They are a natural fit for engineering, data science, research, finance, or any field where rigorous analysis is central. In roles heavy on interpersonal politics or subjective judgment with little analytical grounding, their engagement is likely to suffer.`,
      },
    },
  },
};

export function getScoreBand(score) {
  if (score <= 34) return 'low';
  if (score <= 65) return 'mid';
  return 'high';
}

export function getInterpretation(instrument, scale, score) {
  const band = getScoreBand(score);
  const instrumentKey = instrument.toLowerCase();
  return interpretations[instrumentKey]?.[scale]?.[band] ?? null;
}
