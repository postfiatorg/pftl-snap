# CI/CD Pipeline Documentation

This document describes the Continuous Integration and Continuous Deployment pipeline for the PFTL Snap.

## CI Triggers
The CI pipeline is triggered on:
- **Push**: Commits pushed to `main` and `dev` branches.
- **Pull Request**: Opened against `main` or `dev`.
- **Manual**: Can be triggered manually from the GitHub Actions tab.

## Automated Checks (GitHub Actions)
The following checks are performed automatically:

1.  **Build**:
    - verification of the build process using `mm-snap build`.
    - Validates the `snap.manifest.json` automatically during the build.
    - Fails if the build encounters any errors.

2.  **Lint**:
    - **ESLint**: Checks for code style issues.
    - **Strict Rules**:
        - `no-console`: Prevents `console.log` usage.
        - `no-warning-comments`: Prevents `TODO` or `FIXME` comments in the code.
    - **Prettier**: Checks for formatting consistency.

3.  **Tests**:
    - Runs unit tests using `jest`.
    - Ensures core logic works as expected.

4.  **Security**:
    - **Snapper**: Scans the Snap for security vulnerabilities using [Snapper](https://github.com/sayfer-io/Snapper).
    - *Note: The PFTL snap has also been audited by Sayfer.*

## Manual Verification Steps (Required before Release)
Some aspects of the MetaMask Snap ecosystem cannot be fully automated and require manual verification.

### 1. Snap Install Tester
Before tagging a release, you **must** verify the Snap using the [Snap Install Tester](https://montoya.github.io/snap-install-tester/) in MetaMask Flask.

**Checklist:**
- [ ] Install the Snap using the npm package ID (or local bundle).
- [ ] Verify the version is identified correctly.
- [ ] Verify the unique icon is displayed.
- [ ] Verify the name and description appear correctly in the Settings menu.
- [ ] Perform a basic functional test (e.g., connect, sign transaction).

### 2. Permissions Review
- [ ] Manually review `snap.manifest.json` to ensure no unused permissions are requested.

## Deployment (CD)
- **Dev Branch**: Automatically deployed to internal test environments (if applicable).
- **Main Branch**:
    - Merges to `main` are restricted by branch protection rules (require PR + Approval).
    - **Releases**: Create a Git tag (e.g., `v1.0.0`) to trigger a formal release.
    - **NPM Publish**: (Optional) Can be configured to publish to npm on tag creation.

## Local Development
To run checks locally before pushing:

```bash
# Run Lint (will fail on console.log or TODOs)
yarn lint

# Run Tests
yarn test

# Build and Validate Manifest
yarn build
```

