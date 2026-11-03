(* Shared OS interface for the Node.js and Python runtimes. *)

#extern
fun
os_read_text(path: strn): strn

#extern
fun
os_write_text(path: strn, contents: strn): void

#extern
fun
os_append_text(path: strn, contents: strn): void

#extern
fun
os_file_exists(path: strn): bool

#extern
fun
os_remove_file(path: strn): void

#extern
fun
os_path_join(parent: strn, child: strn): strn

#extern
fun
os_path_basename(path: strn): strn

#extern
fun
os_path_dirname(path: strn): strn

#extern
fun
os_path_extname(path: strn): strn

#extern
fun
os_path_is_absolute(path: strn): bool

#extern
fun
os_env_get(name: strn, fallback: strn): strn

#extern
fun
os_env_set(name: strn, value: strn): void

#extern
fun
os_cwd(): strn

#extern
fun
os_chdir(path: strn): void

#extern
fun
os_platform(): strn

#extern
fun
os_pid(): sint
