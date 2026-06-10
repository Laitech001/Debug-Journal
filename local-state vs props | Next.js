# Lessons Learned

## React

- useState(initialValue) only uses the initial value once.
- Props and local state can become unsynchronized.
- router.refresh() doesn't automatically update local state.

## Next.js

- Client components preserve local state until remounted.

## Supabase

- Always verify database updates before assuming API failure.
