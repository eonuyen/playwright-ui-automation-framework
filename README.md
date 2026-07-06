# Playwright UI Test Automation Framework

A UI test automation project developed with TypeScript and Playwright Test.

This sample project automates an end-to-end career and job listing flow on the Insider One website. It demonstrates browser automation, UI assertions, job filtering validation, reporting, screenshots, tracing, and Playwright test configuration.

## Test Scenario

The automated test flow covers the following steps:

1. Open the Insider One website.
2. Verify that the home page is displayed successfully.
3. Navigate to the Careers page.
4. Open the available roles section.
5. Select **Quality Assurance** from the teams list.
6. Verify that Quality Assurance jobs are displayed.
7. Validate that the job department is **Quality Assurance**.
8. Validate that the job location contains **Istanbul, Turkey**.
9. Click the **Apply** button.
10. Verify redirection to the Lever application page.

## Technology Stack

- TypeScript
- Playwright Test 1.61
- Node.js
- npm
- Chromium
- Visual Studio Code

## Key Features

- End-to-end browser automation
- Playwright locator and assertion support
- Chromium browser execution
- Headed browser execution by default
- Fully parallel test execution
- HTML test reporting
- Automatic screenshot capture
- Trace collection on the first retry
- CI-aware retry and worker configuration
- Git-ignored test artifacts and environment files

## Project Structure

```text
playwright-ui-automation-framework/
├── tests/
├── playwright.config.ts
├── package.json
├── package-lock.json
└── .gitignore
```

- `tests/`: Contains the Playwright test scenarios.
- `playwright.config.ts`: Contains browser, timeout, reporting, screenshot, trace, retry, and parallel execution settings.
- `package.json`: Contains the project metadata and dependencies.
- `package-lock.json`: Locks the installed dependency versions.
- `.gitignore`: Excludes generated reports, test results, environment files, authentication data, and local IDE files.

## Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- Git

Verify the installations:

```bash
node --version
npm --version
git --version
```

## Clone the Repository

```bash
git clone https://github.com/eonuyen/playwright-ui-automation-framework.git
cd playwright-ui-automation-framework
```

## Install Dependencies

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

## Running the Tests

Run the complete test suite:

```bash
npx playwright test
```

Run the tests using the configured Chromium project:

```bash
npx playwright test --project=chromium
```

Run tests in Playwright UI mode:

```bash
npx playwright test --ui
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

## Test Configuration

The current Playwright configuration includes:

```text
Test directory: tests/
Browser: Chromium
Headless mode: Disabled
Parallel execution: Enabled
Test timeout: 9 seconds
Local retries: 0
CI retries: 2
CI workers: 1
Screenshot: Enabled
Trace: On first retry
Reporter: HTML
```

The browser is currently displayed while the tests are running because headed execution is enabled in the configuration.

## Test Reports

An HTML report is generated after test execution.

Open the latest report manually with:

```bash
npx playwright show-report
```

Generated reports are stored under:

```text
playwright-report/
```

Test execution artifacts are stored under:

```text
test-results/
```

These generated folders are excluded from Git version control.

## Screenshots and Traces

Screenshots are currently captured during test execution.

Trace information is collected when a test is retried for the first time. Traces can be inspected using the Playwright Trace Viewer.

```bash
npx playwright show-trace path/to/trace.zip
```

## CI-Aware Configuration

The project already contains configuration behavior for CI environments:

- Tests fail if `test.only` is committed accidentally.
- Failed tests are retried twice.
- Tests run with a single worker.

A GitHub Actions workflow has not yet been added to the repository.

## Planned Improvements

- Enable Firefox and WebKit test projects- (That is on demand configuration. That can be activated by uncommenting parts in playwright.config.ts )
- Add GitHub Actions CI integration
- Add environment-based URL configuration
- Add npm scripts for common test commands
- Refine screenshot capture to run only on test failure (That is on demand configuration. That can be activated by updating in playwright.config.ts )
- Expand negative and edge-case test coverage
- Improve reusable test data management
  
