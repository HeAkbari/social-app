//https://www.bilyachat.com/blog/angular-2-build-version

const path = require("path");
var replace = require("replace-in-file");

// var packageVersion = package.version;
// var releaseDate = new Date()
//   .toLocaleDateString("en-CA", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   })
//   .replaceAll("-", "");
var packageVersion = "1.0.0";
var BuildProcessVersion = process.argv[2];
const project_dir = process.env.PROJECT;

var options_prod = {
  files: path.resolve(
    "projects",
    project_dir,
    "src/environments/environment.prod.ts"
  ),
  allowEmptyPaths: false,
};
var options_staging = {
  files: path.resolve(
    "projects",
    project_dir,
    "src/environments/environment.staging.ts"
  ),
  allowEmptyPaths: false,
};

var options_develop = {
  files: path.resolve(
    "projects",
    project_dir,
    "src/environments/environment.ts"
  ),
  allowEmptyPaths: false,
};

if (BuildProcessVersion) {
  options_prod.type = "build";
  options_prod.from = /build: '(.*)'/g;
  options_prod.to = `build: '${BuildProcessVersion}'`;

  options_staging.type = "build";
  options_staging.from = /build: '(.*)'/g;
  options_staging.to = `build: '${BuildProcessVersion}'`;

  options_staging.from = /build: '(.*)'/g;
  options_staging.to = `build: '${BuildProcessVersion}'`;

  options_develop.type = "build";
  options_develop.from = /build: '(.*)'/g;
  options_develop.to = `build: '${BuildProcessVersion}'`;

  updateEnv(options_prod);
  updateEnv(options_staging);
  updateEnv(options_develop);
}

options_prod.type = "version";
options_prod.from = /version: '(.*)'/g;
options_prod.to = `version: '${packageVersion}'`;

options_staging.type = "version";
options_staging.from = /version: '(.*)'/g;
options_staging.to = `version: '${packageVersion}'`;

options_develop.type = "version";
options_develop.from = /version: '(.*)'/g;
options_develop.to = `version: '${packageVersion}'`;

updateEnv(options_prod);
updateEnv(options_staging);
updateEnv(options_develop);

// options_staging.type = "release";
// options_staging.from = /release: '(.*)'/g;
// options_staging.to = `release: '${releaseDate}'`;
// updateEnv(options_staging);

function updateEnv(options) {
  try {
    let changedFiles = replace.sync(options);
    if (changedFiles == 0) {
      throw (
        "Please make sure that file '" + options.files + "' has \"version: ''\""
      );
    }
    console.log(`${options.type} set: ${packageVersion}`);
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}
