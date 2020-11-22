# GitHub Actions tests

Some tests about GitHub actions.
All action workflows are located in `.github/workflows` folder.

**Actions tested:**

`ci.yml`

- Execute linter and annotate PR if fails ([action used](https://github.com/marketplace/actions/lint-action))
- Execute tests, annotate PR if fails and comment a coverage report ([action used](https://github.com/marketplace/actions/jest-annotations-coverage))