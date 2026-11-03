import os as SHUWAN_OS_os
import sys as SHUWAN_OS_sys


def XATS2PY_os_read_text(path):
    with open(path, "r", encoding="utf-8") as file:
        return file.read()


def XATS2PY_os_write_text(path, contents):
    with open(path, "w", encoding="utf-8") as file:
        file.write(contents)


def XATS2PY_os_append_text(path, contents):
    with open(path, "a", encoding="utf-8") as file:
        file.write(contents)


def XATS2PY_os_file_exists(path):
    return SHUWAN_OS_os.path.isfile(path)


def XATS2PY_os_remove_file(path):
    SHUWAN_OS_os.remove(path)


def XATS2PY_os_path_join(parent, child):
    return SHUWAN_OS_os.path.join(parent, child)


def XATS2PY_os_path_basename(path):
    return SHUWAN_OS_os.path.basename(path)


def XATS2PY_os_path_dirname(path):
    return SHUWAN_OS_os.path.dirname(path)


def XATS2PY_os_path_extname(path):
    return SHUWAN_OS_os.path.splitext(path)[1]


def XATS2PY_os_path_is_absolute(path):
    return SHUWAN_OS_os.path.isabs(path)


def XATS2PY_os_env_get(name, fallback):
    return SHUWAN_OS_os.environ.get(name, fallback)


def XATS2PY_os_env_set(name, value):
    SHUWAN_OS_os.environ[name] = value


def XATS2PY_os_cwd():
    return SHUWAN_OS_os.getcwd()


def XATS2PY_os_chdir(path):
    SHUWAN_OS_os.chdir(path)


def XATS2PY_os_platform():
    return SHUWAN_OS_sys.platform


def XATS2PY_os_pid():
    return SHUWAN_OS_os.getpid()
