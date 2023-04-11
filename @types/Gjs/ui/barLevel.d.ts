// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/barLevel.js




    import type St from '../St-1.0.js';
    import type Atk from '../Atk-1.0.js';

export namespace BarLevel {
    export interface ConstructorProperties extends St.DrawingArea.ConstructorProperties {
        style_class?: string | null;
        accessible_role?: Atk.Role;
    }
}

export class BarLevel extends St.DrawingArea {
    protected _maxValue: number;
    protected _value: number;
    protected _overdriveStart: number;
    protected _barLevelWidth: number;

    public value: number;
    public maximumValue: number;
    public overdriveStart: number;

    constructor(params?: BarLevel.ConstructorProperties);
    public _init(params?: BarLevel.ConstructorProperties): void;

    public vfunc_repaint(): void;

    protected _getCurrentValue(): number;
    protected _getOverdriveStart(): number;
    protected _getMinimumValue(): number;
    protected _getMaximumValue(): number;
    protected _setCurrentValue(_actor: any, value: number): void;
    protected _valueChanged(): void;
}