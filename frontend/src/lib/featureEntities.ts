export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['records', 'Projects Records', 'Projects priority queue', 'Open', 'Projects exception list', 'Content Lead', '$0'],
  ['assets', 'Assets Records', 'Assets priority queue', 'Review', 'Assets exception list', 'Content Lead', '$0'],
  ['calendar', 'Calendar Records', 'Calendar priority queue', 'Action needed', 'Calendar exception list', 'Content Lead', '$0'],
  ['scripts', 'Scripts Records', 'Scripts priority queue', 'Open', 'Scripts exception list', 'Content Lead', '$0'],
  ['approvals', 'Approvals Records', 'Approvals priority queue', 'Review', 'Approvals exception list', 'Operations Lead', '$0'],
  ['rights', 'Rights Records', 'Rights priority queue', 'Action needed', 'Rights exception list', 'Operations Lead', '$0'],
  ['publishing', 'Publishing Records', 'Publishing priority queue', 'Open', 'Publishing exception list', 'Operations Lead', '$0'],
  ['campaigns', 'Campaigns Records', 'Campaigns priority queue', 'Review', 'Campaigns exception list', 'Operations Lead', '$0'],
  ['exceptions', 'Exceptions Records', 'Exceptions priority queue', 'Action needed', 'Exceptions exception list', 'Governance Lead', '$0'],
  ['performance', 'Performance Records', 'Performance priority queue', 'Open', 'Performance exception list', 'Governance Lead', '$0'],
  ['analytics', 'Analytics Records', 'Analytics priority queue', 'Review', 'Analytics exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
