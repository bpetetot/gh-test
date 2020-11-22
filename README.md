# GitHub Actions tests

Some tests about GitHub actions.
All action workflows are located in `.github/workflows` folder.

**Actions tested:**

`ci.yml`

- Checkout the repository ([action used](https://github.com/actions/checkout))
- Set up node ([action used](https://github.com/actions/setup-node))
- Cache dependencies ([action used](https://github.com/actions/cache))
- Add a thanks message in the PR comment ([action used](https://github.com/marocchino/sticky-pull-request-comment))
- Execute linter and annotate PR if fails ([action used](https://github.com/marketplace/actions/lint-action))
- Execute tests, annotate PR if fails and comment a coverage report ([action used](https://github.com/marketplace/actions/jest-annotations-coverage))


`automerge.yml`

- Automatically squash merge PR when "🚀 Ready to merge label" is set ([action used](https://github.com/pascalgn/automerge-action))


`release.yml`

- Checkout the repository ([action used](https://github.com/actions/checkout))
- Create a release when a tag is pushed ([action used](https://github.com/actions/create-release))