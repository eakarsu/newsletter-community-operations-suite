export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AINewsletterCommunityOperationsAssistant', ownership: 'Projects source capabilities and workflows', coverage: ['Projects', 'Assets', 'Calendar'] },
  { name: 'AINewsletterCommunityOperationsOperations', ownership: 'Assets source capabilities and workflows', coverage: ['Scripts', 'Approvals', 'Rights'] },
  { name: 'AINewsletterCommunityOperationsAnalytics', ownership: 'Calendar source capabilities and workflows', coverage: ['Publishing', 'Campaigns', 'Exceptions'] },
  { name: 'AINewsletterCommunityOperationsWorkflow', ownership: 'Scripts source capabilities and workflows', coverage: ['Performance', 'Analytics', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Projects', value: '84', note: 'Active' },
  { label: 'Assets', value: '61', note: 'Open' },
  { label: 'Calendar', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Projects operating view', 'Assets operating view', 'Calendar operating view', 'Scripts operating view', 'Approvals operating view', 'Rights operating view', 'Publishing operating view', 'Campaigns operating view'];
export const workflowHighlights = ['Projects workflow with records, approvals, audit, and reporting', 'Assets workflow with records, approvals, audit, and reporting', 'Calendar workflow with records, approvals, audit, and reporting', 'Scripts workflow with records, approvals, audit, and reporting', 'Approvals workflow with records, approvals, audit, and reporting'];
