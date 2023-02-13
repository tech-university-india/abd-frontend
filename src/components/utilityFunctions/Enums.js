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
const PLACEHOLDER = {
  'ACTION_ITEM': 'Example: PO is to get the marketing approvals for the Payment screen text content by Monday so that we are prepared for our next sprint.',
  'KEY_DECISION': 'Example: The client suggested to use Stripe for payment integration as they already have corporate subscription.',
  'AGENDA_ITEM': 'Example: Which cloud platform are we choosing to host our app? Our Client team wants to know by this week.'
}
module.exports = {
  STATUS,
  TYPE,
  HEADINGS,
  PLACEHOLDER
};