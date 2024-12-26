{ pkgs }: {
  deps = [
    pkgs.gdb
    pkgs.postgresql
    pkgs.replitPackages.prybar-python310
    pkgs.replitPackages.stderred
  ];
}