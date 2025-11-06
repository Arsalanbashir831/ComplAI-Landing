module.exports = {
  ci: {
    collect: {
      startServerCommand: 'pnpm run start',
      url: ['https://compl-ai.co.uk'],
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
