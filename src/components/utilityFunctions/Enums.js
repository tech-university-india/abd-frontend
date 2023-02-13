const STATUS = {
  completed: 'COMPLETED',
  pending: 'PENDING',
  none: 'NONE',
  draft: 'DRAFT',
  published: 'PUBLISHED',
};
const TYPE = {
  action_item: 'action_item',
  key_decision: 'key_decision',
  agenda_item: 'agenda_item',
};
const HEADINGS = {
  'Action Items': 'action_item',
  'Agenda Items': 'agenda_item',
  'Key Decisions': 'key_decision',
};
module.exports = {
  STATUS,
  TYPE,
  HEADINGS
};