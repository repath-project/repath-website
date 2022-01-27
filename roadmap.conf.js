'use strict'

module.exports = {
  // Name of the organization or project this roadmap is generated for
  organization: 'RePath',

  // Include open and closed milestones where due date is after milestonesStartDate
  milestonesStartDate: '2020-01-01T00:00:00Z', // ISO formatted timestamp

  // Include open and closed milestones where due date is before milestonesEndDate
  milestonesEndDate: '2021-11-01T00:00:00Z', // ISO formatted timestamp

  // Github repository to open open a Pull Request with the generated roadmap
  targetRepo: "sprocketc/repath-studio-insiders",

  // List of projects that this roadmap covers
  projects: [
    {
      name: "RePath Studio",
      repos: [
        "sprocketc/repath-studio",
      ],
    },
  ]
}