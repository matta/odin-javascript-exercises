# Stolen from https://github.com/uniphil/nix-for-devs#nodejs
#
# See also https://discourse.nixos.org/t/how-to-install-nvm-node-version-manager-in-nixos/20644/6
# and https://nixos.wiki/wiki/Node.js#Example_nix_shell_for_Node.js_development
with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "node";
    buildInputs = [
        nodejs
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
    '';
}