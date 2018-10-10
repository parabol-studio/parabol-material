# Material

The material repo contains shared, exported components to be used in all conichi frontend applications. A sandbox version is provided at [https://material.conichi.com](https://material.conichi.com)

## Development

This project is configured for automated deployed using [CircleCI](https://circleci.com/gh/conichiGMBH). The deployment setup will automatically detect commits being added to the remote master branch and trigger deployment to the [conichi-material sandbox Docker container](https://material.conichi.com)


## Publishing

To publish the module to the npm registry, make sure you have updated the version number in `package.json` and run `npm run packagr` to begin publishing. Once the module has been published, update the frontend applications using `npm install conichi-material`.
