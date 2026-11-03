const SHUWAN_OS_fs = require("node:fs");
const SHUWAN_OS_path = require("node:path");

function XATS2JS_NODE_os_read_text(path) {
  return SHUWAN_OS_fs.readFileSync(path, "utf8");
}

function XATS2JS_NODE_os_write_text(path, contents) {
  SHUWAN_OS_fs.writeFileSync(path, contents, "utf8");
}

function XATS2JS_NODE_os_append_text(path, contents) {
  SHUWAN_OS_fs.appendFileSync(path, contents, "utf8");
}

function XATS2JS_NODE_os_file_exists(path) {
  return SHUWAN_OS_fs.existsSync(path) && SHUWAN_OS_fs.statSync(path).isFile();
}

function XATS2JS_NODE_os_remove_file(path) {
  SHUWAN_OS_fs.unlinkSync(path);
}

function XATS2JS_NODE_os_path_join(parent, child) {
  return SHUWAN_OS_path.join(parent, child);
}

function XATS2JS_NODE_os_path_basename(path) {
  return SHUWAN_OS_path.basename(path);
}

function XATS2JS_NODE_os_path_dirname(path) {
  return SHUWAN_OS_path.dirname(path);
}

function XATS2JS_NODE_os_path_extname(path) {
  return SHUWAN_OS_path.extname(path);
}

function XATS2JS_NODE_os_path_is_absolute(path) {
  return SHUWAN_OS_path.isAbsolute(path);
}

function XATS2JS_NODE_os_env_get(name, fallback) {
  const value = process.env[name];
  return value === undefined ? fallback : value;
}

function XATS2JS_NODE_os_env_set(name, value) {
  process.env[name] = value;
}

function XATS2JS_NODE_os_cwd() {
  return process.cwd();
}

function XATS2JS_NODE_os_chdir(path) {
  process.chdir(path);
}

function XATS2JS_NODE_os_platform() {
  return process.platform;
}

function XATS2JS_NODE_os_pid() {
  return process.pid;
}
