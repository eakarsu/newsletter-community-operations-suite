# Newsletter Community Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AINewsletterCommunityOperationsAssistant`
- `AINewsletterCommunityOperationsOperations`
- `AINewsletterCommunityOperationsAnalytics`
- `AINewsletterCommunityOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/newsletter-community-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5810`

Seeded users:
- `admin@newsletter-community-operations.local / admin123`
- `manager@newsletter-community-operations.local / manager123`
- `analyst@newsletter-community-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/newsletter-community-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5810 npm run smoke
```
