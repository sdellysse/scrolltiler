// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/components/keyring.js



    import type Gcr from '../../Gcr-4.js';

declare class KeyringPrompter extends Gcr.SystemPrompter {
    constructor();
    _init(): void

    enable(): void
    disable(): void
}

export declare const Component: typeof KeyringPrompter