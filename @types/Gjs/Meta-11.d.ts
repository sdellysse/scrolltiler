/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Meta-11
 */

/// <reference path="Gjs.d.ts" />
import type * as Gjs from './Gjs.js';
// WARN: Dependency not found: 'xlib-2.0'
// WARN: Dependency not found: 'xfixes-4.0'
/// <reference path="Gtk-3.0.d.ts" />
import type Gtk from './Gtk-3.0.js';
/// <reference path="Gdk-3.0.d.ts" />
import type Gdk from './Gdk-3.0.js';
// WARN: Dependency not found: 'cairo-1.0'
/// <reference path="Pango-1.0.d.ts" />
import type Pango from './Pango-1.0.js';
/// <reference path="HarfBuzz-0.0.d.ts" />
import type HarfBuzz from './HarfBuzz-0.0.js';
// WARN: Dependency not found: 'freetype2-2.0'
// WARN: Dependency not found: 'GObject-2.0'
// WARN: Dependency not found: 'Gio-2.0'
/// <reference path="GdkPixbuf-2.0.d.ts" />
import type GdkPixbuf from './GdkPixbuf-2.0.js';
// WARN: Dependency not found: 'GModule-2.0'
/// <reference path="Atk-1.0.d.ts" />
import type Atk from './Atk-1.0.js';
// WARN: Dependency not found: 'GDesktopEnums-3.0'
/// <reference path="CoglPango-11.d.ts" />
import type CoglPango from './CoglPango-11.js';
/// <reference path="PangoCairo-1.0.d.ts" />
import type PangoCairo from './PangoCairo-1.0.js';
/// <reference path="Cogl-11.d.ts" />
import type Cogl from './Cogl-11.js';
// WARN: Dependency not found: 'Graphene-1.0'
// WARN: Dependency not found: 'GL-1.0'
/// <reference path="Clutter-11.d.ts" />
import type Clutter from './Clutter-11.js';
// WARN: Dependency not found: 'Json-1.0'

declare namespace Meta {

/**
 * Function a window button can have.  Note, you can't add stuff here
 * without extending the theme format to draw a new function and
 * breaking all existing themes.
 */
enum ButtonFunction {
    /**
     * Menu
     */
    MENU,
    /**
     * Minimize
     */
    MINIMIZE,
    /**
     * Maximize
     */
    MAXIMIZE,
    /**
     * Close
     */
    CLOSE,
    /**
     * Marks the end of the #MetaButtonFunction enumeration
     */
    LAST,
}
enum CloseDialogResponse {
    WAIT,
    FORCE_CLOSE,
}
/**
 * Indicates the appropriate effect to show the user for
 * meta_compositor_show_window() and meta_compositor_hide_window()
 */
enum CompEffect {
    /**
     * The window is newly created
     *   (also used for a window that was previously on a different
     *   workspace and is changed to become visible on the active
     *   workspace.)
     */
    CREATE,
    /**
     * The window should be shown
     *   as unminimizing from its icon geometry.
     */
    UNMINIMIZE,
    /**
     * The window is being destroyed
     */
    DESTROY,
    /**
     * The window should be shown
     *   as minimizing to its icon geometry.
     */
    MINIMIZE,
    /**
     * No effect, the window should be
     *   shown or hidden immediately.
     */
    NONE,
}
enum CompositorType {
    WAYLAND,
    X11,
}
enum Cursor {
    NONE,
    /**
     * Default cursor
     */
    DEFAULT,
    /**
     * Resize northern edge cursor
     */
    NORTH_RESIZE,
    /**
     * Resize southern edge cursor
     */
    SOUTH_RESIZE,
    /**
     * Resize western edge cursor
     */
    WEST_RESIZE,
    /**
     * Resize eastern edge cursor
     */
    EAST_RESIZE,
    /**
     * Resize south-eastern corner cursor
     */
    SE_RESIZE,
    /**
     * Resize south-western corner cursor
     */
    SW_RESIZE,
    /**
     * Resize north-eastern corner cursor
     */
    NE_RESIZE,
    /**
     * Resize north-western corner cursor
     */
    NW_RESIZE,
    /**
     * Move or resize cursor
     */
    MOVE_OR_RESIZE_WINDOW,
    /**
     * Busy cursor
     */
    BUSY,
    /**
     * DND in drag cursor
     */
    DND_IN_DRAG,
    /**
     * DND move cursor
     */
    DND_MOVE,
    /**
     * DND copy cursor
     */
    DND_COPY,
    /**
     * DND unsupported target
     */
    DND_UNSUPPORTED_TARGET,
    /**
     * pointing hand
     */
    POINTING_HAND,
    /**
     * crosshair (action forbidden)
     */
    CROSSHAIR,
    /**
     * I-beam (text input)
     */
    IBEAM,
    /**
     * Invisible cursor
     */
    BLANK,
    LAST,
}
enum DisplayCorner {
    /**
     * top-left corner
     */
    TOPLEFT,
    /**
     * top-right corner
     */
    TOPRIGHT,
    /**
     * bottom-left corner
     */
    BOTTOMLEFT,
    /**
     * bottom-right corner
     */
    BOTTOMRIGHT,
}
enum DisplayDirection {
    /**
     * up
     */
    UP,
    /**
     * down
     */
    DOWN,
    /**
     * left
     */
    LEFT,
    /**
     * right
     */
    RIGHT,
}
enum EdgeType {
    /**
     * Whether the edge belongs to a window
     */
    WINDOW,
    /**
     * Whether the edge belongs to a monitor
     */
    MONITOR,
    /**
     * Whether the edge belongs to a screen
     */
    SCREEN,
}
enum ExitCode {
    /**
     * Success
     */
    SUCCESS,
    /**
     * Error
     */
    ERROR,
}
enum FrameType {
    /**
     * Normal frame
     */
    NORMAL,
    /**
     * Dialog frame
     */
    DIALOG,
    /**
     * Modal dialog frame
     */
    MODAL_DIALOG,
    /**
     * Utility frame
     */
    UTILITY,
    /**
     * Menu frame
     */
    MENU,
    /**
     * Border frame
     */
    BORDER,
    /**
     * Attached frame
     */
    ATTACHED,
    /**
     * Marks the end of the #MetaFrameType enumeration
     */
    LAST,
}
enum GrabOp {
    /**
     * None
     */
    NONE,
    WINDOW_BASE,
    WAYLAND_POPUP,
    FRAME_BUTTON,
    /**
     * Moving with pointer
     */
    MOVING,
    /**
     * Resizing NW with pointer
     */
    RESIZING_NW,
    /**
     * Resizing N with pointer
     */
    RESIZING_N,
    /**
     * Resizing NE with pointer
     */
    RESIZING_NE,
    /**
     * Resizing E with pointer
     */
    RESIZING_E,
    /**
     * Resizing SW with pointer
     */
    RESIZING_SW,
    /**
     * Resizing S with pointer
     */
    RESIZING_S,
    /**
     * Resizing SE with pointer
     */
    RESIZING_SE,
    /**
     * Resizing W with pointer
     */
    RESIZING_W,
    /**
     * Moving with keyboard
     */
    KEYBOARD_MOVING,
    /**
     * Resizing with keyboard
     */
    KEYBOARD_RESIZING_UNKNOWN,
    /**
     * Resizing NS with keyboard
     */
    KEYBOARD_RESIZING_NW,
    /**
     * Resizing N with keyboard
     */
    KEYBOARD_RESIZING_N,
    /**
     * Resizing NE with keyboard
     */
    KEYBOARD_RESIZING_NE,
    /**
     * Resizing E with keyboard
     */
    KEYBOARD_RESIZING_E,
    /**
     * Resizing SW with keyboard
     */
    KEYBOARD_RESIZING_SW,
    /**
     * Resizing S with keyboard
     */
    KEYBOARD_RESIZING_S,
    /**
     * Resizing SE with keyboard
     */
    KEYBOARD_RESIZING_SE,
    /**
     * Resizing W with keyboard
     */
    KEYBOARD_RESIZING_W,
}
enum Gravity {
    NONE,
    NORTH_WEST,
    NORTH,
    NORTH_EAST,
    WEST,
    CENTER,
    EAST,
    SOUTH_WEST,
    SOUTH,
    SOUTH_EAST,
    STATIC,
}
enum InhibitShortcutsDialogResponse {
    ALLOW,
    DENY,
}
enum KeyBindingAction {
    /**
     * FILLME
     */
    NONE,
    /**
     * FILLME
     */
    WORKSPACE_1,
    /**
     * FILLME
     */
    WORKSPACE_2,
    /**
     * FILLME
     */
    WORKSPACE_3,
    /**
     * FILLME
     */
    WORKSPACE_4,
    /**
     * FILLME
     */
    WORKSPACE_5,
    /**
     * FILLME
     */
    WORKSPACE_6,
    /**
     * FILLME
     */
    WORKSPACE_7,
    /**
     * FILLME
     */
    WORKSPACE_8,
    /**
     * FILLME
     */
    WORKSPACE_9,
    /**
     * FILLME
     */
    WORKSPACE_10,
    /**
     * FILLME
     */
    WORKSPACE_11,
    /**
     * FILLME
     */
    WORKSPACE_12,
    /**
     * FILLME
     */
    WORKSPACE_LEFT,
    /**
     * FILLME
     */
    WORKSPACE_RIGHT,
    /**
     * FILLME
     */
    WORKSPACE_UP,
    /**
     * FILLME
     */
    WORKSPACE_DOWN,
    /**
     * FILLME
     */
    WORKSPACE_LAST,
    /**
     * FILLME
     */
    SWITCH_APPLICATIONS,
    /**
     * FILLME
     */
    SWITCH_APPLICATIONS_BACKWARD,
    /**
     * FILLME
     */
    SWITCH_GROUP,
    /**
     * FILLME
     */
    SWITCH_GROUP_BACKWARD,
    /**
     * FILLME
     */
    SWITCH_WINDOWS,
    /**
     * FILLME
     */
    SWITCH_WINDOWS_BACKWARD,
    /**
     * FILLME
     */
    SWITCH_PANELS,
    /**
     * FILLME
     */
    SWITCH_PANELS_BACKWARD,
    /**
     * FILLME
     */
    CYCLE_GROUP,
    /**
     * FILLME
     */
    CYCLE_GROUP_BACKWARD,
    /**
     * FILLME
     */
    CYCLE_WINDOWS,
    /**
     * FILLME
     */
    CYCLE_WINDOWS_BACKWARD,
    /**
     * FILLME
     */
    CYCLE_PANELS,
    /**
     * FILLME
     */
    CYCLE_PANELS_BACKWARD,
    /**
     * FILLME
     */
    SHOW_DESKTOP,
    /**
     * FILLME
     */
    PANEL_RUN_DIALOG,
    /**
     * FILLME
     */
    TOGGLE_RECORDING,
    /**
     * FILLME
     */
    SET_SPEW_MARK,
    /**
     * FILLME
     */
    ACTIVATE_WINDOW_MENU,
    /**
     * FILLME
     */
    TOGGLE_FULLSCREEN,
    /**
     * FILLME
     */
    TOGGLE_MAXIMIZED,
    /**
     * FILLME
     */
    TOGGLE_TILED_LEFT,
    /**
     * FILLME
     */
    TOGGLE_TILED_RIGHT,
    /**
     * FILLME
     */
    TOGGLE_ABOVE,
    /**
     * FILLME
     */
    MAXIMIZE,
    /**
     * FILLME
     */
    UNMAXIMIZE,
    /**
     * FILLME
     */
    TOGGLE_SHADED,
    /**
     * FILLME
     */
    MINIMIZE,
    /**
     * FILLME
     */
    CLOSE,
    /**
     * FILLME
     */
    BEGIN_MOVE,
    /**
     * FILLME
     */
    BEGIN_RESIZE,
    /**
     * FILLME
     */
    TOGGLE_ON_ALL_WORKSPACES,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_1,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_2,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_3,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_4,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_5,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_6,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_7,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_8,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_9,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_10,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_11,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_12,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_LEFT,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_RIGHT,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_UP,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_DOWN,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_LAST,
    /**
     * FILLME
     */
    MOVE_TO_MONITOR_LEFT,
    /**
     * FILLME
     */
    MOVE_TO_MONITOR_RIGHT,
    /**
     * FILLME
     */
    MOVE_TO_MONITOR_UP,
    /**
     * FILLME
     */
    MOVE_TO_MONITOR_DOWN,
    /**
     * FILLME
     */
    RAISE_OR_LOWER,
    /**
     * FILLME
     */
    RAISE,
    /**
     * FILLME
     */
    LOWER,
    /**
     * FILLME
     */
    MAXIMIZE_VERTICALLY,
    /**
     * FILLME
     */
    MAXIMIZE_HORIZONTALLY,
    /**
     * FILLME
     */
    MOVE_TO_CORNER_NW,
    /**
     * FILLME
     */
    MOVE_TO_CORNER_NE,
    /**
     * FILLME
     */
    MOVE_TO_CORNER_SW,
    /**
     * FILLME
     */
    MOVE_TO_CORNER_SE,
    /**
     * FILLME
     */
    MOVE_TO_SIDE_N,
    /**
     * FILLME
     */
    MOVE_TO_SIDE_S,
    /**
     * FILLME
     */
    MOVE_TO_SIDE_E,
    /**
     * FILLME
     */
    MOVE_TO_SIDE_W,
    /**
     * FILLME
     */
    MOVE_TO_CENTER,
    /**
     * FILLME
     */
    OVERLAY_KEY,
    /**
     * FILLME
     */
    LOCATE_POINTER_KEY,
    ISO_NEXT_GROUP,
    /**
     * FILLME
     */
    ALWAYS_ON_TOP,
    SWITCH_MONITOR,
    ROTATE_MONITOR,
    /**
     * FILLME
     */
    LAST,
}
enum LaterType {
    /**
     * call in a resize processing phase that is done
     *   before GTK+ repainting (including window borders) is done.
     */
    RESIZE,
    /**
     * used by Mutter to compute which windows should be mapped
     */
    CALC_SHOWING,
    /**
     * used by Mutter to see if there's a fullscreen window
     */
    CHECK_FULLSCREEN,
    /**
     * used by Mutter to send it's idea of the stacking order to the server
     */
    SYNC_STACK,
    /**
     * call before the stage is redrawn
     */
    BEFORE_REDRAW,
    /**
     * call at a very low priority (can be blocked
     *    by running animations or redrawing applications)
     */
    IDLE,
}
enum LocaleDirection {
    LTR,
    RTL,
}
enum MonitorSwitchConfigType {
    ALL_MIRROR,
    ALL_LINEAR,
    EXTERNAL,
    BUILTIN,
    UNKNOWN,
}
enum MotionDirection {
    /**
     * Upwards motion
     */
    UP,
    /**
     * Downwards motion
     */
    DOWN,
    /**
     * Motion to the left
     */
    LEFT,
    /**
     * Motion to the right
     */
    RIGHT,
    /**
     * Motion up and to the left
     */
    UP_LEFT,
    /**
     * Motion up and to the right
     */
    UP_RIGHT,
    /**
     * Motion down and to the left
     */
    DOWN_LEFT,
    /**
     * Motion down and to the right
     */
    DOWN_RIGHT,
}
enum PadActionType {
    BUTTON,
    RING,
    STRIP,
}
enum Preference {
    /**
     * mouse button modifiers
     */
    MOUSE_BUTTON_MODS,
    /**
     * focus mode
     */
    FOCUS_MODE,
    /**
     * focus new windows
     */
    FOCUS_NEW_WINDOWS,
    /**
     * attach modal dialogs
     */
    ATTACH_MODAL_DIALOGS,
    /**
     * raise on click
     */
    RAISE_ON_CLICK,
    /**
     * action double click titlebar
     */
    ACTION_DOUBLE_CLICK_TITLEBAR,
    /**
     * action middle click titlebar
     */
    ACTION_MIDDLE_CLICK_TITLEBAR,
    /**
     * action right click titlebar
     */
    ACTION_RIGHT_CLICK_TITLEBAR,
    /**
     * auto-raise
     */
    AUTO_RAISE,
    /**
     * auto-raise delay
     */
    AUTO_RAISE_DELAY,
    /**
     * focus change on pointer rest
     */
    FOCUS_CHANGE_ON_POINTER_REST,
    /**
     * title-bar font
     */
    TITLEBAR_FONT,
    /**
     * number of workspaces
     */
    NUM_WORKSPACES,
    /**
     * dynamic workspaces
     */
    DYNAMIC_WORKSPACES,
    /**
     * keybindings
     */
    KEYBINDINGS,
    /**
     * disable workarounds
     */
    DISABLE_WORKAROUNDS,
    /**
     * button layout
     */
    BUTTON_LAYOUT,
    /**
     * workspace names
     */
    WORKSPACE_NAMES,
    /**
     * visual bell
     */
    VISUAL_BELL,
    /**
     * audible bell
     */
    AUDIBLE_BELL,
    /**
     * visual bell type
     */
    VISUAL_BELL_TYPE,
    /**
     * GNOME accessibility
     */
    GNOME_ACCESSIBILITY,
    /**
     * GNOME animations
     */
    GNOME_ANIMATIONS,
    /**
     * cursor theme
     */
    CURSOR_THEME,
    /**
     * cursor size
     */
    CURSOR_SIZE,
    /**
     * resize with right button
     */
    RESIZE_WITH_RIGHT_BUTTON,
    /**
     * edge tiling
     */
    EDGE_TILING,
    /**
     * force fullscreen
     */
    FORCE_FULLSCREEN,
    /**
     * workspaces only on primary
     */
    WORKSPACES_ONLY_ON_PRIMARY,
    /**
     * draggable border width
     */
    DRAGGABLE_BORDER_WIDTH,
    /**
     * auto-maximize
     */
    AUTO_MAXIMIZE,
    /**
     * center new windows
     */
    CENTER_NEW_WINDOWS,
    /**
     * drag threshold
     */
    DRAG_THRESHOLD,
    /**
     * show pointer location
     */
    LOCATE_POINTER,
    CHECK_ALIVE_TIMEOUT,
}
enum SelectionType {
    SELECTION_PRIMARY,
    SELECTION_CLIPBOARD,
    SELECTION_DND,
    N_SELECTION_TYPES,
}
enum ShadowMode {
    AUTO,
    FORCED_OFF,
    FORCED_ON,
}
enum Side {
    /**
     * Left side
     */
    LEFT,
    /**
     * Right side
     */
    RIGHT,
    /**
     * Top side
     */
    TOP,
    /**
     * Bottom side
     */
    BOTTOM,
}
enum SizeChange {
    MAXIMIZE,
    UNMAXIMIZE,
    FULLSCREEN,
    UNFULLSCREEN,
    MONITOR_MOVE,
}
/**
 * Layers a window can be in.
 * These MUST be in the order of stacking.
 */
enum StackLayer {
    /**
     * Desktop layer
     */
    DESKTOP,
    /**
     * Bottom layer
     */
    BOTTOM,
    /**
     * Normal layer
     */
    NORMAL,
    /**
     * Top layer
     */
    TOP,
    /**
     * Dock layer
     */
    DOCK,
    /**
     * Override-redirect layer
     */
    OVERRIDE_REDIRECT,
    /**
     * Marks the end of the #MetaStackLayer enumeration
     */
    LAST,
}
enum TabList {
    /**
     * Normal windows
     */
    NORMAL,
    /**
     * Dock windows
     */
    DOCKS,
    /**
     * Groups
     */
    GROUP,
    /**
     * All windows
     */
    NORMAL_ALL,
}
enum TabShowType {
    /**
     * Show icon (Alt-Tab mode)
     */
    ICON,
    /**
     * Show instantly (Alt-Esc mode)
     */
    INSTANTLY,
}
enum WindowClientType {
    /**
     * A Wayland based window
     */
    WAYLAND,
    /**
     * An X11 based window
     */
    X11,
}
/**
 * Menu the compositor should display for a given window
 */
enum WindowMenuType {
    /**
     * the window manager menu
     */
    WM,
    /**
     * the (fallback) app menu
     */
    APP,
}
enum WindowType {
    /**
     * Normal
     */
    NORMAL,
    /**
     * Desktop
     */
    DESKTOP,
    /**
     * Dock
     */
    DOCK,
    /**
     * Dialog
     */
    DIALOG,
    /**
     * Modal dialog
     */
    MODAL_DIALOG,
    /**
     * Toolbar
     */
    TOOLBAR,
    /**
     * Menu
     */
    MENU,
    /**
     * Utility
     */
    UTILITY,
    /**
     * Splashcreen
     */
    SPLASHSCREEN,
    /**
     * Dropdown menu
     */
    DROPDOWN_MENU,
    /**
     * Popup menu
     */
    POPUP_MENU,
    /**
     * Tooltip
     */
    TOOLTIP,
    /**
     * Notification
     */
    NOTIFICATION,
    /**
     * Combobox
     */
    COMBO,
    /**
     * Drag and drop
     */
    DND,
    /**
     * Other override-redirect window type
     */
    OVERRIDE_OTHER,
}
enum BackendCapabilities {
    NONE,
    BARRIERS,
}
enum BarrierDirection {
    /**
     * Positive direction in the X axis
     */
    POSITIVE_X,
    /**
     * Positive direction in the Y axis
     */
    POSITIVE_Y,
    /**
     * Negative direction in the X axis
     */
    NEGATIVE_X,
    /**
     * Negative direction in the Y axis
     */
    NEGATIVE_Y,
}
enum DebugPaintFlag {
    /**
     * default
     */
    NONE,
    /**
     * paint opaque regions
     */
    OPAQUE_REGION,
}
enum DebugTopic {
    /**
     * verbose logging
     */
    VERBOSE,
    /**
     * focus
     */
    FOCUS,
    /**
     * workarea
     */
    WORKAREA,
    /**
     * stack
     */
    STACK,
    /**
     * session management
     */
    SM,
    /**
     * events
     */
    EVENTS,
    /**
     * window state
     */
    WINDOW_STATE,
    /**
     * window operations
     */
    WINDOW_OPS,
    /**
     * geometry
     */
    GEOMETRY,
    /**
     * window placement
     */
    PLACEMENT,
    /**
     * ping
     */
    PING,
    /**
     * keybindings
     */
    KEYBINDINGS,
    /**
     * sync
     */
    SYNC,
    /**
     * startup
     */
    STARTUP,
    /**
     * preferences
     */
    PREFS,
    /**
     * groups
     */
    GROUPS,
    /**
     * resizing
     */
    RESIZING,
    /**
     * shapes
     */
    SHAPES,
    /**
     * edge resistance
     */
    EDGE_RESISTANCE,
    DBUS,
    INPUT,
    /**
     * Wayland
     */
    WAYLAND,
    /**
     * kernel mode setting
     */
    KMS,
    /**
     * screencasting
     */
    SCREEN_CAST,
    /**
     * remote desktop
     */
    REMOTE_DESKTOP,
    /**
     * backend
     */
    BACKEND,
    /**
     * native backend rendering
     */
    RENDER,
    /**
     * color management
     */
    COLOR,
}
enum Direction {
    /**
     * Left
     */
    LEFT,
    /**
     * Right
     */
    RIGHT,
    /**
     * Top
     */
    TOP,
    /**
     * Bottom
     */
    BOTTOM,
    /**
     * Up
     */
    UP,
    /**
     * Down
     */
    DOWN,
    /**
     * Horizontal
     */
    HORIZONTAL,
    /**
     * Vertical
     */
    VERTICAL,
}
enum FrameFlags {
    /**
     * frame allows delete
     */
    ALLOWS_DELETE,
    /**
     * frame allows menu
     */
    ALLOWS_MENU,
    /**
     * frame allows minimize
     */
    ALLOWS_MINIMIZE,
    /**
     * frame allows maximize
     */
    ALLOWS_MAXIMIZE,
    /**
     * frame allows vertical resize
     */
    ALLOWS_VERTICAL_RESIZE,
    /**
     * frame allows horizontal resize
     */
    ALLOWS_HORIZONTAL_RESIZE,
    /**
     * frame has focus
     */
    HAS_FOCUS,
    /**
     * frame is shaded
     */
    SHADED,
    /**
     * frame is stuck
     */
    STUCK,
    /**
     * frame is maximized
     */
    MAXIMIZED,
    /**
     * frame allows shade
     */
    ALLOWS_SHADE,
    /**
     * frame allows move
     */
    ALLOWS_MOVE,
    /**
     * frame allows fullscreen
     */
    FULLSCREEN,
    /**
     * frame is above
     */
    ABOVE,
    /**
     * frame is tiled to the left
     */
    TILED_LEFT,
    /**
     * frame is tiled to the right
     */
    TILED_RIGHT,
}
enum KeyBindingFlags {
    /**
     * none
     */
    NONE,
    /**
     * per-window
     */
    PER_WINDOW,
    /**
     * built-in
     */
    BUILTIN,
    /**
     * is reversed
     */
    IS_REVERSED,
    /**
     * always active
     */
    NON_MASKABLE,
    IGNORE_AUTOREPEAT,
    /**
     * not grabbed automatically
     */
    NO_AUTO_GRAB,
}
/**
 * Keyboard accessibility features.
 * @bitfield 
 */
enum KeyboardA11yFlags {
    KEYBOARD_ENABLED,
    TIMEOUT_ENABLED,
    MOUSE_KEYS_ENABLED,
    SLOW_KEYS_ENABLED,
    SLOW_KEYS_BEEP_PRESS,
    SLOW_KEYS_BEEP_ACCEPT,
    SLOW_KEYS_BEEP_REJECT,
    BOUNCE_KEYS_ENABLED,
    BOUNCE_KEYS_BEEP_REJECT,
    TOGGLE_KEYS_ENABLED,
    STICKY_KEYS_ENABLED,
    STICKY_KEYS_TWO_KEY_OFF,
    STICKY_KEYS_BEEP,
    FEATURE_STATE_CHANGE_BEEP,
}
enum MaximizeFlags {
    /**
     * Horizontal
     */
    HORIZONTAL,
    /**
     * Vertical
     */
    VERTICAL,
    /**
     * Both
     */
    BOTH,
}
enum VirtualModifier {
    /**
     * Shift mask
     */
    SHIFT_MASK,
    /**
     * Control mask
     */
    CONTROL_MASK,
    /**
     * Alt mask
     */
    ALT_MASK,
    /**
     * Meta mask
     */
    META_MASK,
    /**
     * Super mask
     */
    SUPER_MASK,
    /**
     * Hyper mask
     */
    HYPER_MASK,
    /**
     * Mod2 mask
     */
    MOD2_MASK,
    /**
     * Mod3 mask
     */
    MOD3_MASK,
    /**
     * Mod4 mask
     */
    MOD4_MASK,
    /**
     * Mod5 mask
     */
    MOD5_MASK,
}
const CURRENT_TIME: number
const DEFAULT_ICON_NAME: string | null
const ICON_HEIGHT: number
const ICON_WIDTH: number
const MINI_ICON_HEIGHT: number
const MINI_ICON_WIDTH: number
const PRIORITY_BEFORE_REDRAW: number
const PRIORITY_PREFS_NOTIFY: number
const PRIORITY_REDRAW: number
const PRIORITY_RESIZE: number
const VIRTUAL_CORE_KEYBOARD_ID: number
const VIRTUAL_CORE_POINTER_ID: number
function add_clutter_debug_flags(debug_flags: Clutter.DebugFlag, draw_flags: Clutter.DrawDebugFlag, pick_flags: Clutter.PickDebugFlag): void
function add_debug_paint_flag(flag: DebugPaintFlag): void
/**
 * Ensure log messages for the given topic `topic`
 * will be printed.
 * @param topic Topic for which logging will be started
 */
function add_verbose_topic(topic: DebugTopic): void
function clutter_init(): void
/**
 * Create a context.
 * @param name Human readable name of display server or window manager
 * @returns A new context instance.
 */
function create_context(name: string | null): Context
/**
 * Disables unredirection, can be useful in situations where having
 * unredirected windows is undesirable like when recording a video.
 * @param display a #MetaDisplay
 */
function disable_unredirect_for_display(display: Display): void
/**
 * Enables unredirection which reduces the overhead for apps like games.
 * @param display a #MetaDisplay
 */
function enable_unredirect_for_display(display: Display): void
function exit(code: ExitCode): void
function external_binding_name_for_action(keybinding_action: number): string | null
function focus_stage_window(display: Display, timestamp: number): void
/**
 * Converts a frame type enum value to the name string that would
 * appear in the theme definition file.
 * @param type a #MetaFrameType
 * @returns the string value
 */
function frame_type_to_string(type: FrameType): string | null
function g_utf8_strndup(src: string | null, n: number): string | null
/**
 * Accessor for the singleton MetaBackend.
 * @returns The only #MetaBackend there is.
 */
function get_backend(): Backend
function get_clutter_debug_flags(): [ /* debug_flags */ Clutter.DebugFlag, /* draw_flags */ Clutter.DrawDebugFlag, /* pick_flags */ Clutter.PickDebugFlag ]
function get_debug_paint_flags(): DebugPaintFlag
function get_feedback_group_for_display(display: Display): Clutter.Actor
function get_locale_direction(): LocaleDirection
function get_stage_for_display(display: Display): Clutter.Actor
function get_top_window_group_for_display(display: Display): Clutter.Actor
function get_window_actors(display: Display): Clutter.Actor[]
function get_window_group_for_display(display: Display): Clutter.Actor
function gravity_to_string(gravity: Gravity): string | null
/**
 * Returns %TRUE if this instance of Mutter comes from Mutter
 * restarting itself (for example to enable/disable stereo.)
 * See meta_restart(). If this is the case, any startup visuals
 * or animations should be suppressed.
 */
function is_restart(): boolean
function is_topic_enabled(topic: DebugTopic): boolean
function is_verbose(): boolean
function is_wayland_compositor(): boolean
/**
 * Allows users to register a custom handler for a
 * builtin key binding.
 * @param name The name of the keybinding to set
 * @param handler The new handler function
 * @returns %TRUE if the binding known as @name was found, %FALSE otherwise.
 */
function keybindings_set_custom_handler(name: string | null, handler: KeyHandlerFunc | null): boolean
/**
 * Sets up a callback  to be called at some later time. `when` determines the
 * particular later occasion at which it is called. This is much like g_idle_add(),
 * except that the functions interact properly with clutter event handling.
 * If a "later" function is added from a clutter event handler, and is supposed
 * to be run before the stage is redrawn, it will be run before that redraw
 * of the stage, not the next one.
 * @param when enumeration value determining the phase at which to run the callback
 * @param func callback to run later
 * @returns an integer ID (guaranteed to be non-zero) that can be used  to cancel the callback and prevent it from being run.
 */
function later_add(when: LaterType, func: any): number
/**
 * Removes a callback added with meta_later_add()
 * @param later_id the integer ID returned from meta_later_add()
 */
function later_remove(later_id: number): void
function pop_no_msg_prefix(): void
function preference_to_string(pref: Preference): string | null
function prefs_bell_is_audible(): boolean
function prefs_change_workspace_name(i: number, name: string | null): void
function prefs_get_action_double_click_titlebar(): any
function prefs_get_action_middle_click_titlebar(): any
function prefs_get_action_right_click_titlebar(): any
function prefs_get_attach_modal_dialogs(): boolean
function prefs_get_auto_maximize(): boolean
function prefs_get_auto_raise(): boolean
function prefs_get_auto_raise_delay(): number
function prefs_get_button_layout(): /* button_layout */ ButtonLayout
function prefs_get_center_new_windows(): boolean
function prefs_get_check_alive_timeout(): number
function prefs_get_compositing_manager(): boolean
function prefs_get_cursor_size(): number
function prefs_get_cursor_theme(): string | null
function prefs_get_disable_workarounds(): boolean
function prefs_get_drag_threshold(): number
function prefs_get_draggable_border_width(): number
function prefs_get_dynamic_workspaces(): boolean
function prefs_get_edge_tiling(): boolean
function prefs_get_focus_change_on_pointer_rest(): boolean
function prefs_get_focus_mode(): any
function prefs_get_focus_new_windows(): any
function prefs_get_force_fullscreen(): boolean
function prefs_get_gnome_accessibility(): boolean
function prefs_get_gnome_animations(): boolean
function prefs_get_keybinding_action(name: string | null): KeyBindingAction
function prefs_get_mouse_button_menu(): number
function prefs_get_mouse_button_mods(): VirtualModifier
function prefs_get_mouse_button_resize(): number
function prefs_get_num_workspaces(): number
function prefs_get_raise_on_click(): boolean
function prefs_get_show_fallback_app_menu(): boolean
function prefs_get_titlebar_font(): Pango.FontDescription
function prefs_get_visual_bell(): boolean
function prefs_get_visual_bell_type(): any
function prefs_get_workspace_name(i: number): string | null
function prefs_get_workspaces_only_on_primary(): boolean
function prefs_set_force_fullscreen(whether: boolean): void
function prefs_set_num_workspaces(n_workspaces: number): void
function prefs_set_show_fallback_app_menu(whether: boolean): void
function push_no_msg_prefix(): void
function rect(x: number, y: number, width: number, height: number): Rectangle
function remove_clutter_debug_flags(debug_flags: Clutter.DebugFlag, draw_flags: Clutter.DrawDebugFlag, pick_flags: Clutter.PickDebugFlag): void
function remove_debug_paint_flag(flag: DebugPaintFlag): void
/**
 * Stop printing log messages for the given topic `topic`.  Note
 * that this method does not stack with meta_add_verbose_topic();
 * i.e. if two calls to meta_add_verbose_topic() for the same
 * topic are made, one call to meta_remove_verbose_topic() will
 * remove it.
 * @param topic Topic for which logging will be stopped
 */
function remove_verbose_topic(topic: DebugTopic): void
/**
 * Starts the process of restarting the compositor. Note that Mutter's
 * involvement here is to make the restart visually smooth for the
 * user - it cannot itself safely reexec a program that embeds libmuttter.
 * So in order for this to work, the compositor must handle two
 * signals -  MetaDisplay::show-restart-message, to display the
 * message passed here on the Clutter stage, and ::restart to actually
 * reexec the compositor.
 * @param message message to display to the user, or %NULL
 * @param context a #MetaContext
 */
function restart(message: string | null, context: Context): void
function topic_to_string(topic: DebugTopic): string | null
function unsigned_long_equal(v1: any | null, v2: any | null): number
function unsigned_long_hash(v: any | null): number
function x11_error_trap_pop(x11_display: X11Display): void
function x11_error_trap_pop_with_return(x11_display: X11Display): number
function x11_error_trap_push(x11_display: X11Display): void
function x11_init_gdk_display(): boolean
interface IdleMonitorWatchFunc {
    (monitor: IdleMonitor, watch_id: number): void
}
interface KeyHandlerFunc {
    (display: Display, window: Window, event: any | null, binding: KeyBinding): void
}
interface PrefsChangedFunc {
    (pref: Preference): void
}
interface WindowForeachFunc {
    (window: Window): boolean
}
module CloseDialog {

    // Signal callback interfaces

    /**
     * Signal callback interface for `response`
     */
    interface ResponseSignalCallback {
        ($obj: CloseDialog, object: CloseDialogResponse): void
    }

}

interface CloseDialog {

    // Own properties of Meta-11.Meta.CloseDialog

    readonly window: Window

    // Owm methods of Meta-11.Meta.CloseDialog

    /**
     * Call whenever `dialog` should receive keyboard focus,
     * usually when the window would.
     */
    focus(): void
    /**
     * Hides the close dialog.
     */
    hide(): void
    /**
     * Returns whether `dialog` is currently visible.
     * @returns #TRUE if @dialog is visible.
     */
    is_visible(): boolean
    /**
     * Responds and closes the dialog. To be called by #MetaCloseDialog
     * implementations.
     * @param response a #MetaCloseDialogResponse
     */
    response(response: CloseDialogResponse): void
    /**
     * Shows the close dialog.
     */
    show(): void

    // Own virtual methods of Meta-11.Meta.CloseDialog

    /**
     * Call whenever `dialog` should receive keyboard focus,
     * usually when the window would.
     * @virtual 
     */
    vfunc_focus(): void
    /**
     * Hides the close dialog.
     * @virtual 
     */
    vfunc_hide(): void
    /**
     * Shows the close dialog.
     * @virtual 
     */
    vfunc_show(): void

    // Own signals of Meta-11.Meta.CloseDialog

    connect(sigName: "response", callback: CloseDialog.ResponseSignalCallback): number
    connect_after(sigName: "response", callback: CloseDialog.ResponseSignalCallback): number
    emit(sigName: "response", object: CloseDialogResponse, ...args: any[]): void
}

class CloseDialog {

    // Own properties of Meta-11.Meta.CloseDialog

    static name: string
}

module InhibitShortcutsDialog {

    // Signal callback interfaces

    /**
     * Signal callback interface for `response`
     */
    interface ResponseSignalCallback {
        ($obj: InhibitShortcutsDialog, object: InhibitShortcutsDialogResponse): void
    }

}

interface InhibitShortcutsDialog {

    // Own properties of Meta-11.Meta.InhibitShortcutsDialog

    readonly window: Window

    // Owm methods of Meta-11.Meta.InhibitShortcutsDialog

    /**
     * Hides the inhibit shortcuts dialog.
     */
    hide(): void
    /**
     * Responds and closes the dialog. To be called by #MetaInhibitShortcutsDialog
     * implementations.
     * @param response a #MetaInhibitShortcutsDialogResponse
     */
    response(response: InhibitShortcutsDialogResponse): void
    /**
     * Shows the inhibit shortcuts dialog.
     */
    show(): void

    // Own virtual methods of Meta-11.Meta.InhibitShortcutsDialog

    /**
     * Hides the inhibit shortcuts dialog.
     * @virtual 
     */
    vfunc_hide(): void
    /**
     * Shows the inhibit shortcuts dialog.
     * @virtual 
     */
    vfunc_show(): void

    // Own signals of Meta-11.Meta.InhibitShortcutsDialog

    connect(sigName: "response", callback: InhibitShortcutsDialog.ResponseSignalCallback): number
    connect_after(sigName: "response", callback: InhibitShortcutsDialog.ResponseSignalCallback): number
    emit(sigName: "response", object: InhibitShortcutsDialogResponse, ...args: any[]): void
}

class InhibitShortcutsDialog {

    // Own properties of Meta-11.Meta.InhibitShortcutsDialog

    static name: string
}

module Backend {

    // Signal callback interfaces


    /**
     * Signal callback interface for `keymap-changed`
     */
    interface KeymapChangedSignalCallback {
        ($obj: Backend): void
    }

    /**
     * Signal callback interface for `keymap-layout-group-changed`
     */
    interface KeymapLayoutGroupChangedSignalCallback {
        ($obj: Backend, object: number): void
    }

    /**
     * Signal callback interface for `last-device-changed`
     */
    interface LastDeviceChangedSignalCallback {
        ($obj: Backend, object: Clutter.InputDevice): void
    }

    /**
     * Signal callback interface for `lid-is-closed-changed`
     */
    interface LidIsClosedChangedSignalCallback {
        ($obj: Backend, object: boolean): void
    }

    /**
     * Signal callback interface for `prepare-shutdown`
     */
    interface PrepareShutdownSignalCallback {
        ($obj: Backend): void
    }

}

interface Backend {

    // Own properties of Meta-11.Meta.Backend

    readonly capabilities: BackendCapabilities
    readonly context: Context

    // Own fields of Meta-11.Meta.Backend

    parent_instance: any

    // Owm methods of Meta-11.Meta.Backend

    get_capabilities(): BackendCapabilities
    get_context(): Context
    get_core_idle_monitor(): IdleMonitor
    /**
     * Gets the global #MetaDnd that's managed by this backend.
     * @returns the #MetaDnd
     */
    get_dnd(): Dnd
    get_monitor_manager(): MonitorManager
    get_remote_access_controller(): RemoteAccessController
    /**
     * Gets the global #ClutterStage that's managed by this backend.
     * @returns the #ClutterStage
     */
    get_stage(): Clutter.Actor
    is_headless(): boolean
    is_rendering_hardware_accelerated(): boolean
    lock_layout_group(idx: number): void
    set_keymap(layouts: string | null, variants: string | null, options: string | null): void

    // Own signals of Meta-11.Meta.Backend

    connect(sigName: "gpu-added", callback: (...args: any[]) => void): number
    connect_after(sigName: "gpu-added", callback: (...args: any[]) => void): number
    emit(sigName: "gpu-added", gpu: any, ...args: any[]): void
    connect(sigName: "keymap-changed", callback: Backend.KeymapChangedSignalCallback): number
    connect_after(sigName: "keymap-changed", callback: Backend.KeymapChangedSignalCallback): number
    emit(sigName: "keymap-changed", ...args: any[]): void
    connect(sigName: "keymap-layout-group-changed", callback: Backend.KeymapLayoutGroupChangedSignalCallback): number
    connect_after(sigName: "keymap-layout-group-changed", callback: Backend.KeymapLayoutGroupChangedSignalCallback): number
    emit(sigName: "keymap-layout-group-changed", object: number, ...args: any[]): void
    connect(sigName: "last-device-changed", callback: Backend.LastDeviceChangedSignalCallback): number
    connect_after(sigName: "last-device-changed", callback: Backend.LastDeviceChangedSignalCallback): number
    emit(sigName: "last-device-changed", object: Clutter.InputDevice, ...args: any[]): void
    connect(sigName: "lid-is-closed-changed", callback: Backend.LidIsClosedChangedSignalCallback): number
    connect_after(sigName: "lid-is-closed-changed", callback: Backend.LidIsClosedChangedSignalCallback): number
    emit(sigName: "lid-is-closed-changed", object: boolean, ...args: any[]): void
    connect(sigName: "prepare-shutdown", callback: Backend.PrepareShutdownSignalCallback): number
    connect_after(sigName: "prepare-shutdown", callback: Backend.PrepareShutdownSignalCallback): number
    emit(sigName: "prepare-shutdown", ...args: any[]): void
}

class Backend {

    // Own properties of Meta-11.Meta.Backend

    static name: string
}

module Background {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: Background): void
    }

}

interface Background {

    // Own properties of Meta-11.Meta.Background

    readonly meta_display: Display

    // Owm methods of Meta-11.Meta.Background

    set_blend(file1: any, file2: any, blend_factor: number, style: any): void
    set_color(color: Clutter.Color): void
    /**
     * Set the background to `file`
     * @param file a #GFile representing the background file
     * @param style the background style to apply
     */
    set_file(file: any | null, style: any): void
    set_gradient(shading_direction: any, color: Clutter.Color, second_color: Clutter.Color): void

    // Own signals of Meta-11.Meta.Background

    connect(sigName: "changed", callback: Background.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Background.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
}

/**
 * This class handles tracking and painting the root window background.
 * By integrating with #MetaWindowGroup we can avoid painting parts of
 * the background that are obscured by other windows.
 * @class 
 */
class Background {

    // Own properties of Meta-11.Meta.Background

    static name: string

    // Constructors of Meta-11.Meta.Background

    constructor(display: Display) 
    static new(display: Display): Background
    static refresh_all(): void
}

interface BackgroundActor extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Meta-11.Meta.BackgroundActor

    readonly meta_display: Display
    readonly monitor: number
}

/**
 * This class handles tracking and painting the root window background.
 * By integrating with #MetaWindowGroup we can avoid painting parts of
 * the background that are obscured by other windows.
 * @class 
 */
class BackgroundActor extends Clutter.Actor {

    // Own properties of Meta-11.Meta.BackgroundActor

    static name: string

    // Constructors of Meta-11.Meta.BackgroundActor

    /**
     * Creates a new actor to draw the background for the given monitor.
     * @constructor 
     * @param display 
     * @param monitor Index of the monitor for which to draw the background
     * @returns the newly created background actor
     */
    constructor(display: Display, monitor: number) 
    /**
     * Creates a new actor to draw the background for the given monitor.
     * @constructor 
     * @param display 
     * @param monitor Index of the monitor for which to draw the background
     * @returns the newly created background actor
     */
    static new(display: Display, monitor: number): BackgroundActor

    // Overloads of new

    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     * @returns the newly created #ClutterActor
     */
    static new(): Clutter.Actor
}

interface BackgroundContent extends Clutter.Content {

    // Own properties of Meta-11.Meta.BackgroundContent

    background: Background
    brightness: number
    gradient: boolean
    gradient_height: number
    gradient_max_darkness: number
    readonly meta_display: Display
    readonly monitor: number
    rounded_clip_radius: number
    vignette: boolean
    vignette_sharpness: number

    // Owm methods of Meta-11.Meta.BackgroundContent

    set_background(background: Background): void
    set_gradient(enabled: boolean, height: number, tone_start: number): void
    /**
     * Sets the bounding clip rectangle of the #MetaBackgroundContent that's used
     * when a rounded clip set via meta_background_content_set_rounded_clip_radius()
     * is in effect, set it to  %NULL to use no bounding clip, rounding the edges
     * of the full texture.
     * @param bounds The new bounding clip rectangle, or %NULL
     */
    set_rounded_clip_bounds(bounds: any | null): void
    set_rounded_clip_radius(radius: number): void
    set_vignette(enabled: boolean, brightness: number, sharpness: number): void
}

/**
 * This class handles tracking and painting the root window background.
 * By integrating with #MetaWindowGroup we can avoid painting parts of
 * the background that are obscured by other windows.
 * @class 
 */
class BackgroundContent {

    // Own properties of Meta-11.Meta.BackgroundContent

    static name: string

    // Constructors of Meta-11.Meta.BackgroundContent

    /**
     * Creates a new actor to draw the background for the given monitor.
     * @param display 
     * @param monitor Index of the monitor for which to draw the background
     * @returns the newly created background actor
     */
    static new(display: Display, monitor: number): Clutter.Content
}

interface BackgroundGroup extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own fields of Meta-11.Meta.BackgroundGroup

    parent_instance: Clutter.Actor
}

class BackgroundGroup extends Clutter.Actor {

    // Own properties of Meta-11.Meta.BackgroundGroup

    static name: string

    // Constructors of Meta-11.Meta.BackgroundGroup

    constructor() 
    static new(): BackgroundGroup
}

module BackgroundImage {

    // Signal callback interfaces

    /**
     * Signal callback interface for `loaded`
     */
    interface LoadedSignalCallback {
        ($obj: BackgroundImage): void
    }

}

interface BackgroundImage {

    // Owm methods of Meta-11.Meta.BackgroundImage

    /**
     * This function is a convenience function for checking for success,
     * without having to call meta_background_image_get_texture() and
     * handle the return of a Cogl type.
     * @returns %TRUE if loading completed successfully, otherwise %FALSE
     */
    get_success(): boolean
    get_texture(): Cogl.Texture
    is_loaded(): boolean

    // Own signals of Meta-11.Meta.BackgroundImage

    connect(sigName: "loaded", callback: BackgroundImage.LoadedSignalCallback): number
    connect_after(sigName: "loaded", callback: BackgroundImage.LoadedSignalCallback): number
    emit(sigName: "loaded", ...args: any[]): void
}

/**
 * #MetaBackgroundImage is an object that represents a loaded or loading background image.
 * @class 
 */
class BackgroundImage {

    // Own properties of Meta-11.Meta.BackgroundImage

    static name: string
}

interface BackgroundImageCache {

    // Owm methods of Meta-11.Meta.BackgroundImageCache

    /**
     * Loads an image to use as a background, or returns a reference to an
     * image that is already in the process of loading or loaded. In either
     * case, what is returned is a #MetaBackgroundImage which can be dereferenced
     * to get a #CoglTexture. If meta_background_image_is_loaded() returns %TRUE,
     * the background is loaded, otherwise the MetaBackgroundImage::loaded
     * signal will be emitted exactly once. The 'loaded' state means that the
     * loading process finished, whether it succeeded or failed.
     * @param file #GFile to load
     * @returns a #MetaBackgroundImage to dereference to get the loaded texture
     */
    load(file: any): BackgroundImage
    /**
     * Remove an entry from the cache; this would be used if monitoring
     * showed that the file changed.
     * @param file file to remove from the cache
     */
    purge(file: any): void
}

/**
 * #MetaBackgroundImageCache caches loading of textures for backgrounds; there's actually
 * nothing background specific about it, other than it is tuned to work well for
 * large images as typically are used for backgrounds.
 * @class 
 */
class BackgroundImageCache {

    // Own properties of Meta-11.Meta.BackgroundImageCache

    static name: string

    // Constructors of Meta-11.Meta.BackgroundImageCache

    static get_default(): BackgroundImageCache
}

module Barrier {

    // Signal callback interfaces

    /**
     * Signal callback interface for `hit`
     */
    interface HitSignalCallback {
        ($obj: Barrier, event: BarrierEvent): void
    }

    /**
     * Signal callback interface for `left`
     */
    interface LeftSignalCallback {
        ($obj: Barrier, event: BarrierEvent): void
    }

}

interface Barrier {

    // Own properties of Meta-11.Meta.Barrier

    readonly backend: Backend
    readonly directions: BarrierDirection
    readonly display: Display
    readonly x1: number
    readonly x2: number
    readonly y1: number
    readonly y2: number

    // Own fields of Meta-11.Meta.Barrier

    parent_instance: any

    // Owm methods of Meta-11.Meta.Barrier

    destroy(): void
    is_active(): boolean
    /**
     * In XI2.3, pointer barriers provide a feature where they can
     * be temporarily released so that the pointer goes through
     * them. Pass a #MetaBarrierEvent to release the barrier for
     * this event sequence.
     * @param event The event to release the pointer for
     */
    release(event: BarrierEvent): void

    // Own signals of Meta-11.Meta.Barrier

    connect(sigName: "hit", callback: Barrier.HitSignalCallback): number
    connect_after(sigName: "hit", callback: Barrier.HitSignalCallback): number
    emit(sigName: "hit", event: BarrierEvent, ...args: any[]): void
    connect(sigName: "left", callback: Barrier.LeftSignalCallback): number
    connect_after(sigName: "left", callback: Barrier.LeftSignalCallback): number
    emit(sigName: "left", event: BarrierEvent, ...args: any[]): void
}

class Barrier {

    // Own properties of Meta-11.Meta.Barrier

    static name: string

    // Constructors of Meta-11.Meta.Barrier

    constructor(backend: Backend, x1: number, y1: number, x2: number, y2: number, directions: BarrierDirection) 
    static new(backend: Backend, x1: number, y1: number, x2: number, y2: number, directions: BarrierDirection): Barrier
}

interface Compositor {

    // Own properties of Meta-11.Meta.Compositor

    readonly backend: Backend
    readonly display: Display

    // Own fields of Meta-11.Meta.Compositor

    parent_instance: any

    // Owm methods of Meta-11.Meta.Compositor

    add_window(window: Window): void
    destroy(): void
    filter_keybinding(binding: KeyBinding): boolean
    flash_display(display: Display): void
    get_laters(): Laters
    hide_tile_preview(): void
    hide_window(window: Window, effect: CompEffect): void
    manage(): void
    queue_frame_drawn(window: Window, no_delay_frame: boolean): void
    remove_window(window: Window): void
    show_tile_preview(window: Window, tile_rect: Rectangle, tile_monitor_number: number): void
    show_window(window: Window, effect: CompEffect): void
    show_window_menu(window: Window, menu: WindowMenuType, x: number, y: number): void
    show_window_menu_for_rect(window: Window, menu: WindowMenuType, rect: Rectangle): void
    size_change_window(window: Window, which_change: SizeChange, old_frame_rect: Rectangle, old_buffer_rect: Rectangle): void
    switch_workspace(from: Workspace, to: Workspace, direction: MotionDirection): void
    sync_stack(stack: any[]): void
    sync_updates_frozen(window: Window): void
    sync_window_geometry(window: Window, did_placement: boolean): void
    unmanage(): void
    window_opacity_changed(window: Window): void
    window_shape_changed(window: Window): void
}

class Compositor {

    // Own properties of Meta-11.Meta.Compositor

    static name: string
}

module Context {

    // Signal callback interfaces

    /**
     * Signal callback interface for `prepare-shutdown`
     */
    interface PrepareShutdownSignalCallback {
        ($obj: Context): void
    }

    /**
     * Signal callback interface for `started`
     */
    interface StartedSignalCallback {
        ($obj: Context): void
    }

}

interface Context {

    // Own properties of Meta-11.Meta.Context

    readonly name: string | null
    unsafe_mode: boolean

    // Own fields of Meta-11.Meta.Context

    parent_instance: any

    // Owm methods of Meta-11.Meta.Context

    /**
     * See g_option_context_add_main_entries() for more details.
     * @param entries a %NULL-terminated array of #GOptionEntrys
     * @param translation_domain a translation domain to use, or %NULL
     */
    add_option_entries(entries: any[], translation_domain: string | null): void
    /**
     * See g_option_context_add_group() for more details.
     * @param group the group to add
     */
    add_option_group(group: any): void
    configure(argv: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
    destroy(): void
    get_backend(): Backend
    get_compositor_type(): CompositorType
    get_display(): Display
    is_replacing(): boolean
    notify_ready(): void
    /**
     * Raises the RLIMIT_NOFILE limit value to the hard limit.
     */
    raise_rlimit_nofile(): boolean
    /**
     * Restores the RLIMIT_NOFILE limits from when the #MetaContext was created.
     */
    restore_rlimit_nofile(): boolean
    run_main_loop(): boolean
    set_gnome_wm_keybindings(wm_keybindings: string | null): void
    set_plugin_gtype(plugin_gtype: GObject.GType): void
    set_plugin_name(plugin_name: string | null): void
    setup(): boolean
    start(): boolean
    terminate(): void
    terminate_with_error(error: any): void

    // Own signals of Meta-11.Meta.Context

    connect(sigName: "prepare-shutdown", callback: Context.PrepareShutdownSignalCallback): number
    connect_after(sigName: "prepare-shutdown", callback: Context.PrepareShutdownSignalCallback): number
    emit(sigName: "prepare-shutdown", ...args: any[]): void
    connect(sigName: "started", callback: Context.StartedSignalCallback): number
    connect_after(sigName: "started", callback: Context.StartedSignalCallback): number
    emit(sigName: "started", ...args: any[]): void
}

class Context {

    // Own properties of Meta-11.Meta.Context

    static name: string
}

module CursorTracker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cursor-changed`
     */
    interface CursorChangedSignalCallback {
        ($obj: CursorTracker): void
    }

    /**
     * Signal callback interface for `position-invalidated`
     */
    interface PositionInvalidatedSignalCallback {
        ($obj: CursorTracker): void
    }

    /**
     * Signal callback interface for `visibility-changed`
     */
    interface VisibilityChangedSignalCallback {
        ($obj: CursorTracker): void
    }

}

interface CursorTracker {

    // Own properties of Meta-11.Meta.CursorTracker

    readonly backend: Backend

    // Own fields of Meta-11.Meta.CursorTracker

    parent_instance: any

    // Owm methods of Meta-11.Meta.CursorTracker

    get_hot(): [ /* x */ number, /* y */ number ]
    /**
     * Get the current pointer position and state.
     */
    get_pointer(): [ /* coords */ any, /* mods */ Clutter.ModifierType ]
    get_pointer_visible(): boolean
    get_scale(): number
    get_sprite(): Cogl.Texture
    set_pointer_visible(visible: boolean): void

    // Own signals of Meta-11.Meta.CursorTracker

    connect(sigName: "cursor-changed", callback: CursorTracker.CursorChangedSignalCallback): number
    connect_after(sigName: "cursor-changed", callback: CursorTracker.CursorChangedSignalCallback): number
    emit(sigName: "cursor-changed", ...args: any[]): void
    connect(sigName: "position-invalidated", callback: CursorTracker.PositionInvalidatedSignalCallback): number
    connect_after(sigName: "position-invalidated", callback: CursorTracker.PositionInvalidatedSignalCallback): number
    emit(sigName: "position-invalidated", ...args: any[]): void
    connect(sigName: "visibility-changed", callback: CursorTracker.VisibilityChangedSignalCallback): number
    connect_after(sigName: "visibility-changed", callback: CursorTracker.VisibilityChangedSignalCallback): number
    emit(sigName: "visibility-changed", ...args: any[]): void
}

class CursorTracker {

    // Own properties of Meta-11.Meta.CursorTracker

    static name: string

    // Constructors of Meta-11.Meta.CursorTracker

    /**
     * Retrieves the cursor tracker object for `display`.
     * @param display the #MetaDisplay
     */
    static get_for_display(display: Display): CursorTracker
}

module Display {

    // Signal callback interfaces

    /**
     * Signal callback interface for `accelerator-activated`
     */
    interface AcceleratorActivatedSignalCallback {
        ($obj: Display, object: number, p0: Clutter.InputDevice, p1: number): void
    }

    /**
     * Signal callback interface for `closing`
     */
    interface ClosingSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `cursor-updated`
     */
    interface CursorUpdatedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `gl-video-memory-purged`
     */
    interface GlVideoMemoryPurgedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `grab-op-begin`
     */
    interface GrabOpBeginSignalCallback {
        ($obj: Display, object: Window, p0: GrabOp): void
    }

    /**
     * Signal callback interface for `grab-op-end`
     */
    interface GrabOpEndSignalCallback {
        ($obj: Display, object: Window, p0: GrabOp): void
    }

    /**
     * Signal callback interface for `in-fullscreen-changed`
     */
    interface InFullscreenChangedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `init-xserver`
     */
    interface InitXserverSignalCallback {
        ($obj: Display, object: any): boolean
    }

    /**
     * Signal callback interface for `modifiers-accelerator-activated`
     */
    interface ModifiersAcceleratorActivatedSignalCallback {
        ($obj: Display): boolean
    }

    /**
     * Signal callback interface for `overlay-key`
     */
    interface OverlayKeySignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `pad-mode-switch`
     */
    interface PadModeSwitchSignalCallback {
        ($obj: Display, object: Clutter.InputDevice, p0: number, p1: number): void
    }

    /**
     * Signal callback interface for `restacked`
     */
    interface RestackedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `restart`
     */
    interface RestartSignalCallback {
        ($obj: Display): boolean
    }

    /**
     * Signal callback interface for `show-osd`
     */
    interface ShowOsdSignalCallback {
        ($obj: Display, object: number, p0: string | null, p1: string | null): void
    }

    /**
     * Signal callback interface for `show-pad-osd`
     */
    interface ShowPadOsdSignalCallback {
        ($obj: Display, pad: Clutter.InputDevice, settings: any, layout_path: string | null, edition_mode: boolean, monitor_idx: number): Clutter.Actor | null
    }

    /**
     * Signal callback interface for `show-resize-popup`
     */
    interface ShowResizePopupSignalCallback {
        ($obj: Display, object: boolean, p0: Rectangle, p1: number, p2: number): boolean
    }

    /**
     * Signal callback interface for `show-restart-message`
     */
    interface ShowRestartMessageSignalCallback {
        ($obj: Display, message: string | null): boolean
    }

    /**
     * Signal callback interface for `showing-desktop-changed`
     */
    interface ShowingDesktopChangedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `window-created`
     */
    interface WindowCreatedSignalCallback {
        ($obj: Display, object: Window): void
    }

    /**
     * Signal callback interface for `window-demands-attention`
     */
    interface WindowDemandsAttentionSignalCallback {
        ($obj: Display, object: Window): void
    }

    /**
     * Signal callback interface for `window-entered-monitor`
     */
    interface WindowEnteredMonitorSignalCallback {
        ($obj: Display, object: number, p0: Window): void
    }

    /**
     * Signal callback interface for `window-left-monitor`
     */
    interface WindowLeftMonitorSignalCallback {
        ($obj: Display, object: number, p0: Window): void
    }

    /**
     * Signal callback interface for `window-marked-urgent`
     */
    interface WindowMarkedUrgentSignalCallback {
        ($obj: Display, object: Window): void
    }

    /**
     * Signal callback interface for `window-visibility-updated`
     */
    interface WindowVisibilityUpdatedSignalCallback {
        ($obj: Display, object: any | null, p0: any | null, p1: any | null): void
    }

    /**
     * Signal callback interface for `workareas-changed`
     */
    interface WorkareasChangedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `x11-display-closing`
     */
    interface X11DisplayClosingSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `x11-display-opened`
     */
    interface X11DisplayOpenedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `x11-display-setup`
     */
    interface X11DisplaySetupSignalCallback {
        ($obj: Display): void
    }

}

interface Display {

    // Own properties of Meta-11.Meta.Display

    readonly compositor_modifiers: Clutter.ModifierType
    readonly focus_window: Window

    // Owm methods of Meta-11.Meta.Display

    /**
     * Save the specified serial and ignore crossing events with that
     * serial for the purpose of focus-follows-mouse. This can be used
     * for certain changes to the window hierarchy that we don't want
     * to change the focus window, even if they cause the pointer to
     * end up in a new window.
     * @param serial the serial to ignore
     */
    add_ignored_crossing_serial(serial: number): void
    /**
     * Add a keybinding at runtime. The key `name` in `schema` needs to be of
     * type %G_VARIANT_TYPE_STRING_ARRAY, with each string describing a
     * keybinding in the form of "&lt;Control&gt;a" or "&lt;Shift&gt;&lt;Alt&gt;F1". The parser
     * is fairly liberal and allows lower or upper case, and also abbreviations
     * such as "&lt;Ctl&gt;" and "&lt;Ctrl&gt;". If the key is set to the empty list or a
     * list with a single element of either "" or "disabled", the keybinding is
     * disabled.
     * 
     * Use meta_display_remove_keybinding() to remove the binding.
     * @param name the binding's name
     * @param settings the #GSettings object where `name` is stored
     * @param flags flags to specify binding details
     * @param handler function to run when the keybinding is invoked
     * @returns the corresponding keybinding action if the keybinding was          added successfully, otherwise %META_KEYBINDING_ACTION_NONE
     */
    add_keybinding(name: string | null, settings: any, flags: KeyBindingFlags, handler: KeyHandlerFunc): number
    begin_grab_op(window: Window, op: GrabOp, pointer_already_grabbed: boolean, frame_action: boolean, button: number, modmask: number, timestamp: number, root_x: number, root_y: number): boolean
    /**
     * Sets the mouse-mode flag to %FALSE, which means that motion events are
     * no longer ignored in mouse or sloppy focus.
     * This is an internal function. It should be used only for reimplementing
     * keybindings, and only in a manner compatible with core code.
     */
    clear_mouse_mode(): void
    close(timestamp: number): void
    end_grab_op(timestamp: number): void
    focus_default_window(timestamp: number): void
    freeze_keyboard(timestamp: number): void
    get_compositor_modifiers(): Clutter.ModifierType
    get_context(): Context
    /**
     * Gets the index of the monitor that currently has the mouse pointer.
     * @returns a monitor index
     */
    get_current_monitor(): number
    get_current_time(): number
    get_current_time_roundtrip(): number
    /**
     * Get our best guess as to the "currently" focused window (that is,
     * the window that we expect will be focused at the point when the X
     * server processes our next request).
     * @returns The current focus window
     */
    get_focus_window(): Window
    /**
     * Gets the current grab operation, if any.
     * @returns the current grab operation, or %META_GRAB_OP_NONE if Mutter doesn't currently have a grab.
     */
    get_grab_op(): GrabOp
    /**
     * Get the keybinding action bound to `keycode`. Builtin keybindings
     * have a fixed associated #MetaKeyBindingAction, for bindings added
     * dynamically the function will return the keybinding action
     * meta_display_add_keybinding() returns on registration.
     * @param keycode Raw keycode
     * @param mask Event mask
     * @returns The action that should be taken for the given key, or %META_KEYBINDING_ACTION_NONE.
     */
    get_keybinding_action(keycode: number, mask: number): number
    get_last_user_time(): number
    /**
     * Stores the location and size of the indicated `monitor` in `geometry`.
     * @param monitor the monitor number
     */
    get_monitor_geometry(monitor: number): /* geometry */ Rectangle
    /**
     * Determines whether there is a fullscreen window obscuring the specified
     * monitor. If there is a fullscreen window, the desktop environment will
     * typically hide any controls that might obscure the fullscreen window.
     * 
     * You can get notification when this changes by connecting to
     * MetaDisplay::in-fullscreen-changed.
     * @param monitor the monitor number
     * @returns %TRUE if there is a fullscreen window covering the specified monitor.
     */
    get_monitor_in_fullscreen(monitor: number): boolean
    get_monitor_index_for_rect(rect: Rectangle): number
    get_monitor_neighbor_index(which_monitor: number, dir: DisplayDirection): number
    /**
     * Gets the monitor scaling value for the given `monitor`.
     * @param monitor the monitor number
     * @returns the monitor scaling value
     */
    get_monitor_scale(monitor: number): number
    /**
     * Gets the number of monitors that are joined together to form `display`.
     * @returns the number of monitors
     */
    get_n_monitors(): number
    get_pad_action_label(pad: Clutter.InputDevice, action_type: PadActionType, action_number: number): string | null
    /**
     * Gets the index of the primary monitor on this `display`.
     * @returns a monitor index
     */
    get_primary_monitor(): number
    get_selection(): Selection
    /**
     * Retrieve the size of the display.
     */
    get_size(): [ /* width */ number, /* height */ number ]
    get_sound_player(): SoundPlayer
    /**
     * Determine the active window that should be displayed for Alt-TAB.
     * @param type type of tab list
     * @param workspace origin workspace
     * @returns Current window
     */
    get_tab_current(type: TabList, workspace: Workspace): Window
    /**
     * Determine the list of windows that should be displayed for Alt-TAB
     * functionality.  The windows are returned in most recently used order.
     * If `workspace` is not %NULL, the list only contains windows that are on
     * `workspace` or have the demands-attention hint set; otherwise it contains
     * all windows.
     * @param type type of tab list
     * @param workspace origin workspace
     * @returns List of windows
     */
    get_tab_list(type: TabList, workspace: Workspace | null): Window[]
    /**
     * Determine the next window that should be displayed for Alt-TAB
     * functionality.
     * @param type type of tab list
     * @param workspace origin workspace
     * @param window starting window
     * @param backward If %TRUE, look for the previous window.
     * @returns Next window
     */
    get_tab_next(type: TabList, workspace: Workspace, window: Window | null, backward: boolean): Window
    get_workspace_manager(): WorkspaceManager
    grab_accelerator(accelerator: string | null, flags: KeyBindingFlags): number
    /**
     * Tells whether the event sequence is the used for pointer emulation
     * and single-touch interaction.
     * @param sequence a #ClutterEventSequence
     * @returns #TRUE if the sequence emulates pointer behavior
     */
    is_pointer_emulating_sequence(sequence: Clutter.EventSequence | null): boolean
    /**
     * List all windows, including override-redirect ones. The windows are
     * in no particular order.
     * @returns List of windows
     */
    list_all_windows(): Window[]
    /**
     * Remove keybinding `name;` the function will fail if `name` is not a known
     * keybinding or has not been added with meta_display_add_keybinding().
     * @param name name of the keybinding to remove
     * @returns %TRUE if the binding has been removed successfully,          otherwise %FALSE
     */
    remove_keybinding(name: string | null): boolean
    request_pad_osd(pad: Clutter.InputDevice, edition_mode: boolean): void
    set_cursor(cursor: Cursor): void
    set_input_focus(window: Window, focus_frame: boolean, timestamp: number): void
    /**
     * Sorts a set of windows according to their current stacking order. If windows
     * from multiple screens are present in the set of input windows, then all the
     * windows on screen 0 are sorted below all the windows on screen 1, and so forth.
     * Since the stacking order of override-redirect windows isn't controlled by
     * Metacity, if override-redirect windows are in the input, the result may not
     * correspond to the actual stacking order in the X server.
     * 
     * An example of using this would be to sort the list of transient dialogs for a
     * window into their current stacking order.
     * @param windows Set of windows
     * @returns Input windows sorted by stacking order, from lowest to highest
     */
    sort_windows_by_stacking(windows: Window[]): Window[]
    supports_extended_barriers(): boolean
    unfreeze_keyboard(timestamp: number): void
    ungrab_accelerator(action_id: number): boolean
    ungrab_keyboard(timestamp: number): void
    unset_input_focus(timestamp: number): void
    /**
     * Xserver time can wraparound, thus comparing two timestamps needs to take
     * this into account. If no wraparound has occurred, this is equivalent to
     *   time1 < time2
     * Otherwise, we need to account for the fact that wraparound can occur
     * and the fact that a timestamp of 0 must be special-cased since it
     * means "older than anything else".
     * 
     * Note that this is NOT an equivalent for time1 <= time2; if that's what
     * you need then you'll need to swap the order of the arguments and negate
     * the result.
     * @param time1 An event timestamp
     * @param time2 An event timestamp
     */
    xserver_time_is_before(time1: number, time2: number): boolean

    // Own signals of Meta-11.Meta.Display

    connect(sigName: "accelerator-activated", callback: Display.AcceleratorActivatedSignalCallback): number
    connect_after(sigName: "accelerator-activated", callback: Display.AcceleratorActivatedSignalCallback): number
    emit(sigName: "accelerator-activated", object: number, p0: Clutter.InputDevice, p1: number, ...args: any[]): void
    connect(sigName: "closing", callback: Display.ClosingSignalCallback): number
    connect_after(sigName: "closing", callback: Display.ClosingSignalCallback): number
    emit(sigName: "closing", ...args: any[]): void
    connect(sigName: "cursor-updated", callback: Display.CursorUpdatedSignalCallback): number
    connect_after(sigName: "cursor-updated", callback: Display.CursorUpdatedSignalCallback): number
    emit(sigName: "cursor-updated", ...args: any[]): void
    connect(sigName: "gl-video-memory-purged", callback: Display.GlVideoMemoryPurgedSignalCallback): number
    connect_after(sigName: "gl-video-memory-purged", callback: Display.GlVideoMemoryPurgedSignalCallback): number
    emit(sigName: "gl-video-memory-purged", ...args: any[]): void
    connect(sigName: "grab-op-begin", callback: Display.GrabOpBeginSignalCallback): number
    connect_after(sigName: "grab-op-begin", callback: Display.GrabOpBeginSignalCallback): number
    emit(sigName: "grab-op-begin", object: Window, p0: GrabOp, ...args: any[]): void
    connect(sigName: "grab-op-end", callback: Display.GrabOpEndSignalCallback): number
    connect_after(sigName: "grab-op-end", callback: Display.GrabOpEndSignalCallback): number
    emit(sigName: "grab-op-end", object: Window, p0: GrabOp, ...args: any[]): void
    connect(sigName: "in-fullscreen-changed", callback: Display.InFullscreenChangedSignalCallback): number
    connect_after(sigName: "in-fullscreen-changed", callback: Display.InFullscreenChangedSignalCallback): number
    emit(sigName: "in-fullscreen-changed", ...args: any[]): void
    connect(sigName: "init-xserver", callback: Display.InitXserverSignalCallback): number
    connect_after(sigName: "init-xserver", callback: Display.InitXserverSignalCallback): number
    emit(sigName: "init-xserver", object: any, ...args: any[]): void
    connect(sigName: "modifiers-accelerator-activated", callback: Display.ModifiersAcceleratorActivatedSignalCallback): number
    connect_after(sigName: "modifiers-accelerator-activated", callback: Display.ModifiersAcceleratorActivatedSignalCallback): number
    emit(sigName: "modifiers-accelerator-activated", ...args: any[]): void
    connect(sigName: "overlay-key", callback: Display.OverlayKeySignalCallback): number
    connect_after(sigName: "overlay-key", callback: Display.OverlayKeySignalCallback): number
    emit(sigName: "overlay-key", ...args: any[]): void
    connect(sigName: "pad-mode-switch", callback: Display.PadModeSwitchSignalCallback): number
    connect_after(sigName: "pad-mode-switch", callback: Display.PadModeSwitchSignalCallback): number
    emit(sigName: "pad-mode-switch", object: Clutter.InputDevice, p0: number, p1: number, ...args: any[]): void
    connect(sigName: "restacked", callback: Display.RestackedSignalCallback): number
    connect_after(sigName: "restacked", callback: Display.RestackedSignalCallback): number
    emit(sigName: "restacked", ...args: any[]): void
    connect(sigName: "restart", callback: Display.RestartSignalCallback): number
    connect_after(sigName: "restart", callback: Display.RestartSignalCallback): number
    emit(sigName: "restart", ...args: any[]): void
    connect(sigName: "show-osd", callback: Display.ShowOsdSignalCallback): number
    connect_after(sigName: "show-osd", callback: Display.ShowOsdSignalCallback): number
    emit(sigName: "show-osd", object: number, p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "show-pad-osd", callback: Display.ShowPadOsdSignalCallback): number
    connect_after(sigName: "show-pad-osd", callback: Display.ShowPadOsdSignalCallback): number
    emit(sigName: "show-pad-osd", pad: Clutter.InputDevice, settings: any, layout_path: string | null, edition_mode: boolean, monitor_idx: number, ...args: any[]): void
    connect(sigName: "show-resize-popup", callback: Display.ShowResizePopupSignalCallback): number
    connect_after(sigName: "show-resize-popup", callback: Display.ShowResizePopupSignalCallback): number
    emit(sigName: "show-resize-popup", object: boolean, p0: Rectangle, p1: number, p2: number, ...args: any[]): void
    connect(sigName: "show-restart-message", callback: Display.ShowRestartMessageSignalCallback): number
    connect_after(sigName: "show-restart-message", callback: Display.ShowRestartMessageSignalCallback): number
    emit(sigName: "show-restart-message", message: string | null, ...args: any[]): void
    connect(sigName: "showing-desktop-changed", callback: Display.ShowingDesktopChangedSignalCallback): number
    connect_after(sigName: "showing-desktop-changed", callback: Display.ShowingDesktopChangedSignalCallback): number
    emit(sigName: "showing-desktop-changed", ...args: any[]): void
    connect(sigName: "window-created", callback: Display.WindowCreatedSignalCallback): number
    connect_after(sigName: "window-created", callback: Display.WindowCreatedSignalCallback): number
    emit(sigName: "window-created", object: Window, ...args: any[]): void
    connect(sigName: "window-demands-attention", callback: Display.WindowDemandsAttentionSignalCallback): number
    connect_after(sigName: "window-demands-attention", callback: Display.WindowDemandsAttentionSignalCallback): number
    emit(sigName: "window-demands-attention", object: Window, ...args: any[]): void
    connect(sigName: "window-entered-monitor", callback: Display.WindowEnteredMonitorSignalCallback): number
    connect_after(sigName: "window-entered-monitor", callback: Display.WindowEnteredMonitorSignalCallback): number
    emit(sigName: "window-entered-monitor", object: number, p0: Window, ...args: any[]): void
    connect(sigName: "window-left-monitor", callback: Display.WindowLeftMonitorSignalCallback): number
    connect_after(sigName: "window-left-monitor", callback: Display.WindowLeftMonitorSignalCallback): number
    emit(sigName: "window-left-monitor", object: number, p0: Window, ...args: any[]): void
    connect(sigName: "window-marked-urgent", callback: Display.WindowMarkedUrgentSignalCallback): number
    connect_after(sigName: "window-marked-urgent", callback: Display.WindowMarkedUrgentSignalCallback): number
    emit(sigName: "window-marked-urgent", object: Window, ...args: any[]): void
    connect(sigName: "window-visibility-updated", callback: Display.WindowVisibilityUpdatedSignalCallback): number
    connect_after(sigName: "window-visibility-updated", callback: Display.WindowVisibilityUpdatedSignalCallback): number
    emit(sigName: "window-visibility-updated", object: any | null, p0: any | null, p1: any | null, ...args: any[]): void
    connect(sigName: "workareas-changed", callback: Display.WorkareasChangedSignalCallback): number
    connect_after(sigName: "workareas-changed", callback: Display.WorkareasChangedSignalCallback): number
    emit(sigName: "workareas-changed", ...args: any[]): void
    connect(sigName: "x11-display-closing", callback: Display.X11DisplayClosingSignalCallback): number
    connect_after(sigName: "x11-display-closing", callback: Display.X11DisplayClosingSignalCallback): number
    emit(sigName: "x11-display-closing", ...args: any[]): void
    connect(sigName: "x11-display-opened", callback: Display.X11DisplayOpenedSignalCallback): number
    connect_after(sigName: "x11-display-opened", callback: Display.X11DisplayOpenedSignalCallback): number
    emit(sigName: "x11-display-opened", ...args: any[]): void
    connect(sigName: "x11-display-setup", callback: Display.X11DisplaySetupSignalCallback): number
    connect_after(sigName: "x11-display-setup", callback: Display.X11DisplaySetupSignalCallback): number
    emit(sigName: "x11-display-setup", ...args: any[]): void
}

class Display {

    // Own properties of Meta-11.Meta.Display

    static name: string
}

module Dnd {

    // Signal callback interfaces

    /**
     * Signal callback interface for `dnd-enter`
     */
    interface DndEnterSignalCallback {
        ($obj: Dnd): void
    }

    /**
     * Signal callback interface for `dnd-leave`
     */
    interface DndLeaveSignalCallback {
        ($obj: Dnd): void
    }

    /**
     * Signal callback interface for `dnd-position-change`
     */
    interface DndPositionChangeSignalCallback {
        ($obj: Dnd, object: number, p0: number): void
    }

}

interface Dnd {

    // Own signals of Meta-11.Meta.Dnd

    connect(sigName: "dnd-enter", callback: Dnd.DndEnterSignalCallback): number
    connect_after(sigName: "dnd-enter", callback: Dnd.DndEnterSignalCallback): number
    emit(sigName: "dnd-enter", ...args: any[]): void
    connect(sigName: "dnd-leave", callback: Dnd.DndLeaveSignalCallback): number
    connect_after(sigName: "dnd-leave", callback: Dnd.DndLeaveSignalCallback): number
    emit(sigName: "dnd-leave", ...args: any[]): void
    connect(sigName: "dnd-position-change", callback: Dnd.DndPositionChangeSignalCallback): number
    connect_after(sigName: "dnd-position-change", callback: Dnd.DndPositionChangeSignalCallback): number
    emit(sigName: "dnd-position-change", object: number, p0: number, ...args: any[]): void
}

class Dnd {

    // Own properties of Meta-11.Meta.Dnd

    static name: string
}

interface IdleMonitor {

    // Own properties of Meta-11.Meta.IdleMonitor

    /**
     * The device to listen to idletime on.
     */
    readonly device: Clutter.InputDevice

    // Owm methods of Meta-11.Meta.IdleMonitor

    add_idle_watch(interval_msec: number, callback: IdleMonitorWatchFunc | null): number
    add_user_active_watch(callback: IdleMonitorWatchFunc | null): number
    get_idletime(): number
    /**
     * Removes an idle time watcher, previously added by
     * meta_idle_monitor_add_idle_watch() or
     * meta_idle_monitor_add_user_active_watch().
     * @param id A watch ID
     */
    remove_watch(id: number): void
}

class IdleMonitor {

    // Own properties of Meta-11.Meta.IdleMonitor

    static name: string
}

interface LaunchContext {

    // Own properties of Meta-11.Meta.LaunchContext

    readonly display: Display
    timestamp: number
    workspace: Workspace

    // Owm methods of Meta-11.Meta.LaunchContext

    set_timestamp(timestamp: number): void
    set_workspace(workspace: Workspace): void
}

class LaunchContext {

    // Own properties of Meta-11.Meta.LaunchContext

    static name: string
}

module MonitorManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `confirm-display-change`
     */
    interface ConfirmDisplayChangeSignalCallback {
        ($obj: MonitorManager): void
    }


    /**
     * Signal callback interface for `monitors-changed`
     */
    interface MonitorsChangedSignalCallback {
        ($obj: MonitorManager): void
    }

    /**
     * Signal callback interface for `monitors-changed-internal`
     */
    interface MonitorsChangedInternalSignalCallback {
        ($obj: MonitorManager): void
    }

    /**
     * Signal callback interface for `power-save-mode-changed`
     */
    interface PowerSaveModeChangedSignalCallback {
        ($obj: MonitorManager): void
    }

}

interface MonitorManager {

    // Own properties of Meta-11.Meta.MonitorManager

    readonly backend: Backend
    readonly has_builtin_panel: boolean
    readonly night_light_supported: boolean
    readonly panel_orientation_managed: boolean

    // Owm methods of Meta-11.Meta.MonitorManager

    can_switch_config(): boolean
    /**
     * Returns whether the built-in display (i.e. a laptop panel) is turned on.
     */
    get_is_builtin_display_on(): boolean
    get_monitor_for_connector(connector: string | null): number
    get_panel_orientation_managed(): boolean
    get_switch_config(): MonitorSwitchConfigType
    switch_config(config_type: MonitorSwitchConfigType): void

    // Own signals of Meta-11.Meta.MonitorManager

    connect(sigName: "confirm-display-change", callback: MonitorManager.ConfirmDisplayChangeSignalCallback): number
    connect_after(sigName: "confirm-display-change", callback: MonitorManager.ConfirmDisplayChangeSignalCallback): number
    emit(sigName: "confirm-display-change", ...args: any[]): void
    connect(sigName: "monitor-privacy-screen-changed", callback: (...args: any[]) => void): number
    connect_after(sigName: "monitor-privacy-screen-changed", callback: (...args: any[]) => void): number
    emit(sigName: "monitor-privacy-screen-changed", logical_monitor: any, enabled: boolean, ...args: any[]): void
    connect(sigName: "monitors-changed", callback: MonitorManager.MonitorsChangedSignalCallback): number
    connect_after(sigName: "monitors-changed", callback: MonitorManager.MonitorsChangedSignalCallback): number
    emit(sigName: "monitors-changed", ...args: any[]): void
    connect(sigName: "monitors-changed-internal", callback: MonitorManager.MonitorsChangedInternalSignalCallback): number
    connect_after(sigName: "monitors-changed-internal", callback: MonitorManager.MonitorsChangedInternalSignalCallback): number
    emit(sigName: "monitors-changed-internal", ...args: any[]): void
    connect(sigName: "power-save-mode-changed", callback: MonitorManager.PowerSaveModeChangedSignalCallback): number
    connect_after(sigName: "power-save-mode-changed", callback: MonitorManager.PowerSaveModeChangedSignalCallback): number
    emit(sigName: "power-save-mode-changed", ...args: any[]): void
}

class MonitorManager {

    // Own properties of Meta-11.Meta.MonitorManager

    static name: string

    // Constructors of Meta-11.Meta.MonitorManager

    /**
     * Accessor for the singleton MetaMonitorManager.
     * @returns The only #MetaMonitorManager there is.
     */
    static get(): MonitorManager
    static get_display_configuration_timeout(): number
}

interface Plugin {

    // Own fields of Meta-11.Meta.Plugin

    parent_instance: any

    // Owm methods of Meta-11.Meta.Plugin

    complete_display_change(ok: boolean): void
    destroy_completed(actor: WindowActor): void
    /**
     * Gets the #MetaDisplay corresponding to a plugin.
     * @returns the #MetaDisplay for the plugin
     */
    get_display(): Display
    get_info(): PluginInfo
    map_completed(actor: WindowActor): void
    minimize_completed(actor: WindowActor): void
    size_change_completed(actor: WindowActor): void
    switch_workspace_completed(): void
    unminimize_completed(actor: WindowActor): void

    // Own virtual methods of Meta-11.Meta.Plugin

    vfunc_confirm_display_change(): void
    /**
     * Virtual function called when the window represented by `actor` is destroyed.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    vfunc_destroy(actor: WindowActor): void
    vfunc_hide_tile_preview(): void
    /**
     * Virtual function called when handling each keybinding.
     * @virtual 
     * @param binding a #MetaKeyBinding
     * @returns %TRUE if the plugin handled the keybinding.
     */
    vfunc_keybinding_filter(binding: KeyBinding): boolean
    /**
     * Virtual function called when the workspace-switching effect needs to be
     * killed prematurely.
     * @virtual 
     */
    vfunc_kill_switch_workspace(): void
    /**
     * Virtual function called when the effects on `actor` need to be killed
     * prematurely; the plugin must call the completed() callback as if the effect
     * terminated naturally.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    vfunc_kill_window_effects(actor: WindowActor): void
    /**
     * Virtual function called when the user triggered the "locate-pointer"
     * mechanism.
     * The common way to implement this function is to show some animation
     * on screen to draw user attention on the pointer location.
     * @virtual 
     */
    vfunc_locate_pointer(): void
    /**
     * Virtual function called when the window represented by `actor` is mapped.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    vfunc_map(actor: WindowActor): void
    /**
     * Virtual function called when the window represented by `actor` is minimized.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    vfunc_minimize(actor: WindowActor): void
    /**
     * Virtual function that returns information about the #MetaPlugin.
     * @virtual 
     * @returns a #MetaPluginInfo.
     */
    vfunc_plugin_info(): PluginInfo
    vfunc_show_tile_preview(window: Window, tile_rect: Rectangle, tile_monitor_number: number): void
    vfunc_show_window_menu(window: Window, menu: WindowMenuType, x: number, y: number): void
    vfunc_show_window_menu_for_rect(window: Window, menu: WindowMenuType, rect: Rectangle): void
    vfunc_size_change(actor: WindowActor, which_change: SizeChange, old_frame_rect: Rectangle, old_buffer_rect: Rectangle): void
    vfunc_size_changed(actor: WindowActor): void
    /**
     * Virtual function called when the compositor starts managing a screen
     * @virtual 
     */
    vfunc_start(): void
    /**
     * Virtual function called when the window represented by `actor` is destroyed.
     * @virtual 
     * @param from origin workspace
     * @param to destination workspace
     * @param direction a #MetaMotionDirection
     */
    vfunc_switch_workspace(from: number, to: number, direction: MotionDirection): void
    /**
     * Virtual function called when the window represented by `actor` is unminimized.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    vfunc_unminimize(actor: WindowActor): void
    /**
     * Virtual function called when handling each event.
     * @virtual 
     * @param event 
     * @returns %TRUE if the plugin handled the event type (i.e., if the return value is %FALSE, there will be no subsequent call to the manager completed() callback, and the compositor must ensure that any appropriate post-effect cleanup is carried out.
     */
    vfunc_xevent_filter(event: any): boolean
}

class Plugin {

    // Own properties of Meta-11.Meta.Plugin

    static name: string

    // Constructors of Meta-11.Meta.Plugin

    static manager_set_plugin_type(gtype: GObject.GType): void
}

module RemoteAccessController {

    // Signal callback interfaces

    /**
     * Signal callback interface for `new-handle`
     */
    interface NewHandleSignalCallback {
        ($obj: RemoteAccessController, object: RemoteAccessHandle): void
    }

}

interface RemoteAccessController {

    // Owm methods of Meta-11.Meta.RemoteAccessController

    /**
     * Inhibits remote access sessions from being created and running. Any active
     * remote access session will be terminated.
     */
    inhibit_remote_access(): void
    /**
     * Uninhibits remote access sessions from being created and running. If this was
     * the last inhibitation that was inhibited, new remote access sessions can now
     * be created.
     */
    uninhibit_remote_access(): void

    // Own signals of Meta-11.Meta.RemoteAccessController

    connect(sigName: "new-handle", callback: RemoteAccessController.NewHandleSignalCallback): number
    connect_after(sigName: "new-handle", callback: RemoteAccessController.NewHandleSignalCallback): number
    emit(sigName: "new-handle", object: RemoteAccessHandle, ...args: any[]): void
}

class RemoteAccessController {

    // Own properties of Meta-11.Meta.RemoteAccessController

    static name: string
}

module RemoteAccessHandle {

    // Signal callback interfaces

    /**
     * Signal callback interface for `stopped`
     */
    interface StoppedSignalCallback {
        ($obj: RemoteAccessHandle): void
    }

}

interface RemoteAccessHandle {

    // Own properties of Meta-11.Meta.RemoteAccessHandle

    readonly is_recording: boolean

    // Own fields of Meta-11.Meta.RemoteAccessHandle

    parent_instance: any

    // Owm methods of Meta-11.Meta.RemoteAccessHandle

    get_disable_animations(): boolean
    /**
     * Stop the associated remote access session.
     */
    stop(): void

    // Own virtual methods of Meta-11.Meta.RemoteAccessHandle

    /**
     * Stop the associated remote access session.
     * @virtual 
     */
    vfunc_stop(): void

    // Own signals of Meta-11.Meta.RemoteAccessHandle

    connect(sigName: "stopped", callback: RemoteAccessHandle.StoppedSignalCallback): number
    connect_after(sigName: "stopped", callback: RemoteAccessHandle.StoppedSignalCallback): number
    emit(sigName: "stopped", ...args: any[]): void
}

class RemoteAccessHandle {

    // Own properties of Meta-11.Meta.RemoteAccessHandle

    static name: string
}

module Selection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `owner-changed`
     */
    interface OwnerChangedSignalCallback {
        ($obj: Selection, object: number, p0: SelectionSource): void
    }

}

interface Selection {

    // Owm methods of Meta-11.Meta.Selection

    /**
     * Returns the list of supported mimetypes for the given selection type.
     * @param selection_type Selection to query
     * @returns The supported mimetypes
     */
    get_mimetypes(selection_type: SelectionType): string[]
    /**
     * Sets `owner` as the owner of the selection given by `selection_type,`
     * unsets any previous owner there was.
     * @param selection_type Selection type
     * @param owner New selection owner
     */
    set_owner(selection_type: SelectionType, owner: SelectionSource): void
    /**
     * Requests a transfer of `mimetype` on the selection given by
     * `selection_type`.
     * @param selection_type Selection type
     * @param mimetype Mimetype to transfer
     * @param size Maximum size to transfer, -1 for unlimited
     * @param output Output stream to write contents to
     * @param cancellable Cancellable
     * @param callback User callback
     */
    transfer_async(selection_type: SelectionType, mimetype: string | null, size: number, output: any, cancellable: any | null, callback: any | null): void
    /**
     * Finishes the transfer of a queried mimetype.
     * @param result The async result
     * @returns #TRUE if the transfer was successful.
     */
    transfer_finish(result: any): boolean
    /**
     * Unsets `owner` as the owner the selection given by `selection_type`. If
     * `owner` does not own the selection, nothing is done.
     * @param selection_type Selection type
     * @param owner Owner to unset
     */
    unset_owner(selection_type: SelectionType, owner: SelectionSource): void

    // Own signals of Meta-11.Meta.Selection

    connect(sigName: "owner-changed", callback: Selection.OwnerChangedSignalCallback): number
    connect_after(sigName: "owner-changed", callback: Selection.OwnerChangedSignalCallback): number
    emit(sigName: "owner-changed", object: number, p0: SelectionSource, ...args: any[]): void
}

class Selection {

    // Own properties of Meta-11.Meta.Selection

    static name: string

    // Constructors of Meta-11.Meta.Selection

    constructor(display: Display) 
    static new(display: Display): Selection
}

module SelectionSource {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    interface ActivatedSignalCallback {
        ($obj: SelectionSource): void
    }

    /**
     * Signal callback interface for `deactivated`
     */
    interface DeactivatedSignalCallback {
        ($obj: SelectionSource): void
    }

}

interface SelectionSource {

    // Own fields of Meta-11.Meta.SelectionSource

    parent_instance: any

    // Owm methods of Meta-11.Meta.SelectionSource

    /**
     * Returns the list of supported mimetypes.
     * @returns The supported mimetypes
     */
    get_mimetypes(): string[]
    /**
     * Returns #TRUE if the source is active on a selection.
     * @returns #TRUE if the source owns a selection.
     */
    is_active(): boolean
    read_async(mimetype: string | null, cancellable: any | null, callback: any | null): void
    /**
     * Finishes a read from the selection source.
     * @param result The async result
     * @returns The resulting #GInputStream
     */
    read_finish(result: any): any

    // Own virtual methods of Meta-11.Meta.SelectionSource

    vfunc_activated(): void
    vfunc_deactivated(): void
    /**
     * Returns the list of supported mimetypes.
     * @virtual 
     * @returns The supported mimetypes
     */
    vfunc_get_mimetypes(): string[]
    vfunc_read_async(mimetype: string | null, cancellable: any | null, callback: any | null): void
    /**
     * Finishes a read from the selection source.
     * @virtual 
     * @param result The async result
     * @returns The resulting #GInputStream
     */
    vfunc_read_finish(result: any): any

    // Own signals of Meta-11.Meta.SelectionSource

    connect(sigName: "activated", callback: SelectionSource.ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: SelectionSource.ActivatedSignalCallback): number
    emit(sigName: "activated", ...args: any[]): void
    connect(sigName: "deactivated", callback: SelectionSource.DeactivatedSignalCallback): number
    connect_after(sigName: "deactivated", callback: SelectionSource.DeactivatedSignalCallback): number
    emit(sigName: "deactivated", ...args: any[]): void
}

class SelectionSource {

    // Own properties of Meta-11.Meta.SelectionSource

    static name: string
}

interface SelectionSourceMemory {
}

class SelectionSourceMemory extends SelectionSource {

    // Own properties of Meta-11.Meta.SelectionSourceMemory

    static name: string

    // Constructors of Meta-11.Meta.SelectionSourceMemory

    constructor(mimetype: string | null, content: any) 
    static new(mimetype: string | null, content: any): SelectionSourceMemory
}

module ShadowFactory {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: ShadowFactory): void
    }

}

interface ShadowFactory {

    // Owm methods of Meta-11.Meta.ShadowFactory

    /**
     * Gets the shadow parameters for a particular class of shadows
     * for either the focused or unfocused state. If the class name
     * does not name an existing class, default values will be returned
     * without printing an error.
     * @param class_name name of the class of shadow to get the params for
     * @param focused whether the shadow is for a focused window
     */
    get_params(class_name: string | null, focused: boolean): /* params */ ShadowParams
    /**
     * Gets the appropriate shadow object for drawing shadows for the
     * specified window shape. The region that we are shadowing is specified
     * as a combination of a size-invariant extracted shape and the size.
     * In some cases, the same shadow object can be shared between sizes;
     * in other cases a different shadow object is used for each size.
     * @param shape the size-invariant shape of the window's region
     * @param width the actual width of the window's region
     * @param height the actual height of the window's region
     * @param class_name name of the class of window shadows
     * @param focused whether the shadow is for a focused window
     * @returns a newly referenced #MetaShadow; unref with  meta_shadow_unref()
     */
    get_shadow(shape: WindowShape, width: number, height: number, class_name: string | null, focused: boolean): Shadow
    /**
     * Updates the shadow parameters for a particular class of shadows
     * for either the focused or unfocused state. If the class name
     * does not name an existing class, a new class will be created
     * (the other focus state for that class will have default values
     * assigned to it.)
     * @param class_name name of the class of shadow to set the params for.  the default shadow classes are the names of the different  theme frame types (normal, dialog, modal_dialog, utility,  border, menu, attached) and in addition, popup-menu  and dropdown-menu.
     * @param focused whether the shadow is for a focused window
     * @param params new parameter values
     */
    set_params(class_name: string | null, focused: boolean, params: ShadowParams): void

    // Own signals of Meta-11.Meta.ShadowFactory

    connect(sigName: "changed", callback: ShadowFactory.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: ShadowFactory.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
}

/**
 * #MetaShadowFactory is used to create window shadows. It caches shadows internally
 * so that multiple shadows created for the same shape with the same radius will
 * share the same MetaShadow.
 * @class 
 */
class ShadowFactory {

    // Own properties of Meta-11.Meta.ShadowFactory

    static name: string

    // Constructors of Meta-11.Meta.ShadowFactory

    constructor() 
    static new(): ShadowFactory
    static get_default(): ShadowFactory
}

module ShapedTexture {

    // Signal callback interfaces

    /**
     * Signal callback interface for `size-changed`
     */
    interface SizeChangedSignalCallback {
        ($obj: ShapedTexture): void
    }

}

interface ShapedTexture extends Clutter.Content {

    // Owm methods of Meta-11.Meta.ShapedTexture

    /**
     * Flattens the two layers of the shaped texture into one ARGB32
     * image by alpha blending the two images, and returns the flattened
     * image.
     * @param clip A clipping rectangle, to help prevent extra processing. In the case that the clipping rectangle is partially or fully outside the bounds of the texture, the rectangle will be clipped.
     * @returns a new cairo surface to be freed with cairo_surface_destroy().
     */
    get_image(clip: any | null): any | null
    get_texture(): Cogl.Texture
    set_create_mipmaps(create_mipmaps: boolean): void
    set_mask_texture(mask_texture: Cogl.Texture): void

    // Own signals of Meta-11.Meta.ShapedTexture

    connect(sigName: "size-changed", callback: ShapedTexture.SizeChangedSignalCallback): number
    connect_after(sigName: "size-changed", callback: ShapedTexture.SizeChangedSignalCallback): number
    emit(sigName: "size-changed", ...args: any[]): void
}

class ShapedTexture {

    // Own properties of Meta-11.Meta.ShapedTexture

    static name: string
}

interface SoundPlayer {

    // Owm methods of Meta-11.Meta.SoundPlayer

    /**
     * Plays a sound from a file.
     * @param file file to play
     * @param description description of the played sound
     * @param cancellable cancellable for the request
     */
    play_from_file(file: any, description: string | null, cancellable: any | null): void
    /**
     * Plays a sound from the sound theme.
     * @param name sound theme name of the event
     * @param description description of the event
     * @param cancellable cancellable for the request
     */
    play_from_theme(name: string | null, description: string | null, cancellable: any | null): void
}

class SoundPlayer {

    // Own properties of Meta-11.Meta.SoundPlayer

    static name: string
}

module Stage {

    // Signal callback interfaces

    /**
     * Signal callback interface for `actors-painted`
     */
    interface ActorsPaintedSignalCallback {
        ($obj: Stage): void
    }

}

interface Stage extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own signals of Meta-11.Meta.Stage

    connect(sigName: "actors-painted", callback: Stage.ActorsPaintedSignalCallback): number
    connect_after(sigName: "actors-painted", callback: Stage.ActorsPaintedSignalCallback): number
    emit(sigName: "actors-painted", ...args: any[]): void
}

class Stage extends Clutter.Stage {

    // Own properties of Meta-11.Meta.Stage

    static name: string

    // Constructors of Meta-11.Meta.Stage

    static is_focused(display: Display): boolean
}

module StartupNotification {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: StartupNotification, object: StartupSequence): void
    }

}

interface StartupNotification {

    // Own properties of Meta-11.Meta.StartupNotification

    readonly display: Display

    // Owm methods of Meta-11.Meta.StartupNotification

    /**
     * Creates an app launch context.
     * @returns a launch context.
     */
    create_launcher(): LaunchContext
    /**
     * Get the list of startup sequences arrived in the startup notification object.
     * @returns a #GSList of #MetaStartupSequence in the #MetaStartupNotification.
     */
    get_sequences(): StartupSequence[]

    // Own signals of Meta-11.Meta.StartupNotification

    connect(sigName: "changed", callback: StartupNotification.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: StartupNotification.ChangedSignalCallback): number
    emit(sigName: "changed", object: StartupSequence, ...args: any[]): void
}

class StartupNotification {

    // Own properties of Meta-11.Meta.StartupNotification

    static name: string
}

module StartupSequence {

    // Signal callback interfaces

    /**
     * Signal callback interface for `complete`
     */
    interface CompleteSignalCallback {
        ($obj: StartupSequence): void
    }

    /**
     * Signal callback interface for `timeout`
     */
    interface TimeoutSignalCallback {
        ($obj: StartupSequence): void
    }

}

interface StartupSequence {

    // Own properties of Meta-11.Meta.StartupSequence

    readonly application_id: string | null
    readonly icon_name: string | null
    readonly id: string | null
    readonly name: string | null
    readonly timestamp: number
    readonly wmclass: string | null
    readonly workspace: number

    // Own fields of Meta-11.Meta.StartupSequence

    parent_instance: any

    // Owm methods of Meta-11.Meta.StartupSequence

    complete(): void
    /**
     * Get the application id of the startup sequence.
     * @returns the application id or %NULL.
     */
    get_application_id(): string | null
    get_completed(): boolean
    /**
     * Get the icon name of the startup sequence.
     * @returns the icon name or %NULL.
     */
    get_icon_name(): string | null
    get_id(): string | null
    get_name(): string | null
    get_timestamp(): number
    /**
     * Get the wmclass of the startup sequence.
     * @returns the wmclass or %NULL.
     */
    get_wmclass(): string | null
    get_workspace(): number

    // Own signals of Meta-11.Meta.StartupSequence

    connect(sigName: "complete", callback: StartupSequence.CompleteSignalCallback): number
    connect_after(sigName: "complete", callback: StartupSequence.CompleteSignalCallback): number
    emit(sigName: "complete", ...args: any[]): void
    connect(sigName: "timeout", callback: StartupSequence.TimeoutSignalCallback): number
    connect_after(sigName: "timeout", callback: StartupSequence.TimeoutSignalCallback): number
    emit(sigName: "timeout", ...args: any[]): void
}

class StartupSequence {

    // Own properties of Meta-11.Meta.StartupSequence

    static name: string
}

interface WaylandClient {

    // Owm methods of Meta-11.Meta.WaylandClient

    hide_from_window_list(window: Window): void
    owns_window(window: Window): boolean
    /**
     * Shows again this window in window lists, like taskbars, pagers...
     * @param window a MetaWindow
     */
    show_in_window_list(window: Window): void
    /**
     * Creates a #GSubprocess given a provided array of arguments, launching a new
     * process with the binary specified in the first element of argv, and with the
     * rest of elements as parameters. It also sets up a new Wayland socket and sets
     * the environment variable WAYLAND_SOCKET to make the new process to use it.
     * @param display the current MetaDisplay
     * @param argv Command line arguments
     * @returns A new #GSubprocess, or %NULL on error (and @error will be set)
     */
    spawnv(display: Display, argv: string[]): any
}

class WaylandClient {

    // Own properties of Meta-11.Meta.WaylandClient

    static name: string

    // Constructors of Meta-11.Meta.WaylandClient

    /**
     * Creates a new #MetaWaylandClient. The GSubprocesslauncher passed is
     * stored internally and will be used to launch the subprocess.
     * @constructor 
     * @param launcher a GSubprocessLauncher to use to launch the subprocess
     * @returns A #MetaWaylandClient or %NULL if %error is set. Free with g_object_unref().
     */
    constructor(launcher: any) 
    /**
     * Creates a new #MetaWaylandClient. The GSubprocesslauncher passed is
     * stored internally and will be used to launch the subprocess.
     * @constructor 
     * @param launcher a GSubprocessLauncher to use to launch the subprocess
     * @returns A #MetaWaylandClient or %NULL if %error is set. Free with g_object_unref().
     */
    static new(launcher: any): WaylandClient
}

module Window {

    // Signal callback interfaces

    /**
     * Signal callback interface for `focus`
     */
    interface FocusSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `position-changed`
     */
    interface PositionChangedSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `raised`
     */
    interface RaisedSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `shown`
     */
    interface ShownSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `size-changed`
     */
    interface SizeChangedSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `unmanaged`
     */
    interface UnmanagedSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `unmanaging`
     */
    interface UnmanagingSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `workspace-changed`
     */
    interface WorkspaceChangedSignalCallback {
        ($obj: Window): void
    }

}

interface Window {

    // Own properties of Meta-11.Meta.Window

    readonly above: boolean
    readonly appears_focused: boolean
    readonly decorated: boolean
    readonly demands_attention: boolean
    readonly fullscreen: boolean
    readonly gtk_app_menu_object_path: string | null
    readonly gtk_application_id: string | null
    readonly gtk_application_object_path: string | null
    readonly gtk_menubar_object_path: string | null
    readonly gtk_unique_bus_name: string | null
    readonly gtk_window_object_path: string | null
    readonly icon: any
    readonly is_alive: boolean
    readonly maximized_horizontally: boolean
    readonly maximized_vertically: boolean
    readonly mini_icon: any
    readonly minimized: boolean
    readonly mutter_hints: string | null
    readonly on_all_workspaces: boolean
    readonly resizeable: boolean
    readonly skip_taskbar: boolean
    readonly title: string | null
    readonly urgent: boolean
    readonly user_time: number
    readonly window_type: WindowType
    readonly wm_class: string | null

    // Owm methods of Meta-11.Meta.Window

    activate(current_time: number): void
    activate_with_workspace(current_time: number, workspace: Workspace): void
    allows_move(): boolean
    allows_resize(): boolean
    begin_grab_op(op: GrabOp, frame_action: boolean, timestamp: number): void
    can_close(): boolean
    can_maximize(): boolean
    can_minimize(): boolean
    can_shade(): boolean
    change_workspace(workspace: Workspace): void
    change_workspace_by_index(space_index: number, append: boolean): void
    check_alive(timestamp: number): void
    /**
     * Converts a desired bounds of the client window into the corresponding bounds
     * of the window frame (excluding invisible borders and client side shadows.)
     * @param client_rect client rectangle in root coordinates
     */
    client_rect_to_frame_rect(client_rect: Rectangle): /* frame_rect */ Rectangle
    compute_group(): void
    delete(timestamp: number): void
    /**
     * Follow the chain of parents of `window,` skipping transient windows,
     * and return the "root" window which has no non-transient parent.
     * @returns The root ancestor window
     */
    find_root_ancestor(): Window
    focus(timestamp: number): void
    /**
     * If `window` is transient, call `func` with the window for which it's transient,
     * repeatedly until either we find a non-transient window, or `func` returns %FALSE.
     * @param func Called for each window which is a transient parent of `window`
     */
    foreach_ancestor(func: WindowForeachFunc): void
    /**
     * Call `func` for every window which is either transient for `window,` or is
     * a transient of a window which is in turn transient for `window`.
     * The order of window enumeration is not defined.
     * 
     * Iteration will stop if `func` at any point returns %FALSE.
     * @param func Called for each window which is a transient of `window` (transitively)
     */
    foreach_transient(func: WindowForeachFunc): void
    /**
     * Converts a desired frame bounds for a window into the bounds of the client
     * window.
     * @param frame_rect desired frame bounds for the window
     */
    frame_rect_to_client_rect(frame_rect: Rectangle): /* client_rect */ Rectangle
    /**
     * Gets the rectangle that the pixmap or buffer of `window` occupies.
     * 
     * For X11 windows, this is the server-side geometry of the toplevel
     * window.
     * 
     * For Wayland windows, this is the bounding rectangle of the attached
     * buffer.
     */
    get_buffer_rect(): /* rect */ Rectangle
    /**
     * Returns name of the client machine from which this windows was created,
     * if known (obtained from the WM_CLIENT_MACHINE property).
     * @returns the machine name, or %NULL; the string is owned by the window manager and should not be freed or modified by the caller.
     */
    get_client_machine(): string | null
    /**
     * Returns the #MetaWindowClientType of the window.
     * @returns The root ancestor window
     */
    get_client_type(): WindowClientType
    /**
     * Gets the compositor's wrapper object for `window`.
     * @returns the wrapper object.
     */
    get_compositor_private(): any
    get_description(): string | null
    get_display(): Display
    /**
     * Gets a region representing the outer bounds of the window's frame.
     * @returns a #cairo_region_t  holding the outer bounds of the window, or %NULL if the window  doesn't have a frame.
     */
    get_frame_bounds(): any | null
    /**
     * Gets the rectangle that bounds `window` that is what the user thinks of
     * as the edge of the window. This doesn't include any extra reactive
     * area that we or the client adds to the window, or any area that the
     * client adds to draw a client-side shadow.
     */
    get_frame_rect(): /* rect */ Rectangle
    /**
     * Gets the type of window decorations that should be used for this window.
     * @returns the frame type
     */
    get_frame_type(): FrameType
    get_gtk_app_menu_object_path(): string | null
    get_gtk_application_id(): string | null
    get_gtk_application_object_path(): string | null
    get_gtk_menubar_object_path(): string | null
    get_gtk_theme_variant(): string | null
    get_gtk_unique_bus_name(): string | null
    get_gtk_window_object_path(): string | null
    /**
     * Gets the location of the icon corresponding to the window. The location
     * will be provided set by the task bar or other user interface element
     * displaying the icon, and is relative to the root window.
     * @returns %TRUE if the icon geometry was successfully retrieved.
     */
    get_icon_geometry(): [ /* returnType */ boolean, /* rect */ Rectangle ]
    /**
     * Returns the window id associated with window.
     * @returns The window id
     */
    get_id(): number
    get_layer(): StackLayer
    /**
     * Gets the current maximization state of the window, as combination
     * of the %META_MAXIMIZE_HORIZONTAL and %META_MAXIMIZE_VERTICAL flags;
     * @returns current maximization state
     */
    get_maximized(): MaximizeFlags
    /**
     * Gets index of the monitor that this window is on.
     * @returns The index of the monitor in the screens monitor list, or -1 if the window has been recently unmanaged and does not have a monitor.
     */
    get_monitor(): number
    /**
     * Gets the current value of the _MUTTER_HINTS property.
     * 
     * The purpose of the hints is to allow fine-tuning of the Window Manager and
     * Compositor behaviour on per-window basis, and is intended primarily for
     * hints that are plugin-specific.
     * 
     * The property is a list of colon-separated key=value pairs. The key names for
     * any plugin-specific hints must be suitably namespaced to allow for shared
     * use; 'mutter-' key prefix is reserved for internal use, and must not be used
     * by plugins.
     * @returns the _MUTTER_HINTS string, or %NULL if no hints are set.
     */
    get_mutter_hints(): string | null
    /**
     * Returns the pid of the process that created this window, if available
     * to the windowing system.
     * 
     * Note that the value returned by this is vulnerable to spoofing attacks
     * by the client.
     * @returns the pid, or 0 if not known.
     */
    get_pid(): number
    get_role(): string | null
    /**
     * Gets an unique id for a sandboxed app (currently flatpaks and snaps are
     * supported).
     * @returns the sandboxed application ID or %NULL
     */
    get_sandboxed_app_id(): string | null
    /**
     * The stable sequence number is a monotonicially increasing
     * unique integer assigned to each #MetaWindow upon creation.
     * 
     * This number can be useful for sorting windows in a stable
     * fashion.
     * @returns Internal sequence number for this window
     */
    get_stable_sequence(): number
    /**
     * Gets the startup id of the given #MetaWindow
     * @returns the startup id
     */
    get_startup_id(): string | null
    /**
     * Returns the matching tiled window on the same monitor as `window`. This is
     * the topmost tiled window in a complementary tile mode that is:
     * 
     *  - on the same monitor;
     *  - on the same workspace;
     *  - spanning the remaining monitor width;
     *  - there is no 3rd window stacked between both tiled windows that's
     *    partially visible in the common edge.
     * @returns the matching tiled window or %NULL if it doesn't exist.
     */
    get_tile_match(): Window | null
    get_title(): string | null
    /**
     * Returns the #MetaWindow for the window that is pointed to by the
     * WM_TRANSIENT_FOR hint on this window (see XGetTransientForHint()
     * or XSetTransientForHint()). Mutter keeps transient windows above their
     * parents. A typical usage of this hint is for a dialog that wants to stay
     * above its associated window.
     * @returns the window this window is transient for, or %NULL if the WM_TRANSIENT_FOR hint is unset or does not point to a toplevel window that Mutter knows about.
     */
    get_transient_for(): Window | null
    /**
     * The user time represents a timestamp for the last time the user
     * interacted with this window.  Note this property is only available
     * for non-override-redirect windows.
     * 
     * The property is set by Mutter initially upon window creation,
     * and updated thereafter on input events (key and button presses) seen by Mutter,
     * client updates to the _NET_WM_USER_TIME property (if later than the current time)
     * and when focusing the window.
     * @returns The last time the user interacted with this window.
     */
    get_user_time(): number
    get_window_type(): WindowType
    /**
     * Return the current value of the name part of WM_CLASS X property.
     * @returns the current value of the name part of WM_CLASS X property
     */
    get_wm_class(): string | null
    /**
     * Return the current value of the instance part of WM_CLASS X property.
     * @returns the current value of the instance part of WM_CLASS X property.
     */
    get_wm_class_instance(): string | null
    /**
     * Get the work area for all monitors for `window`.
     */
    get_work_area_all_monitors(): /* area */ Rectangle
    /**
     * Get the work area for the monitor `window` is currently on.
     */
    get_work_area_current_monitor(): /* area */ Rectangle
    /**
     * Get the work area for `window,` given the monitor index
     * `which_monitor`.
     * @param which_monitor a moniotr to get the work area for
     */
    get_work_area_for_monitor(which_monitor: number): /* area */ Rectangle
    /**
     * Gets the #MetaWorkspace that the window is currently displayed on.
     * If the window is on all workspaces, returns the currently active
     * workspace.
     * @returns the #MetaWorkspace for the window
     */
    get_workspace(): Workspace
    group_leader_changed(): void
    /**
     * Tests if `window` has any transients attached to it.
     * (If the "attach_modal_dialogs" option is not enabled, this will
     * always return %FALSE.)
     * @returns whether @window has attached transients
     */
    has_attached_dialogs(): boolean
    has_focus(): boolean
    is_above(): boolean
    is_always_on_all_workspaces(): boolean
    /**
     * The function determines whether `window` is an ancestor of `transient;` it does
     * so by traversing the `transient'`s ancestors until it either locates `window`
     * or reaches an ancestor that is not transient.
     * @param transient a #MetaWindow
     * @returns %TRUE if window is an ancestor of transient.
     */
    is_ancestor_of_transient(transient: Window): boolean
    /**
     * Tests if `window` should be attached to its parent window.
     * (If the "attach_modal_dialogs" option is not enabled, this will
     * always return %FALSE.)
     * @returns whether @window should be attached to its parent
     */
    is_attached_dialog(): boolean
    /**
     * Check if if the window has decorations drawn by the client.
     * (window->decorated refers only to whether we should add decorations)
     */
    is_client_decorated(): boolean
    is_fullscreen(): boolean
    is_hidden(): boolean
    is_monitor_sized(): boolean
    is_on_all_workspaces(): boolean
    is_on_primary_monitor(): boolean
    is_override_redirect(): boolean
    is_remote(): boolean
    is_screen_sized(): boolean
    is_shaded(): boolean
    /**
     * Gets whether this window should be ignored by task lists.
     * @returns %TRUE if the skip bar hint is set.
     */
    is_skip_taskbar(): boolean
    kill(): void
    located_on_workspace(workspace: Workspace): boolean
    lower(): void
    lower_with_transients(timestamp: number): void
    make_above(): void
    make_fullscreen(): void
    maximize(directions: MaximizeFlags): void
    minimize(): void
    /**
     * Moves the window to the desired location on window's assigned
     * workspace, using the northwest edge of the frame as the reference,
     * instead of the actual window's origin, but only if a frame is present.
     * Otherwise, acts identically to meta_window_move().
     * @param user_op bool to indicate whether or not this is a user operation
     * @param root_x_nw desired x pos
     * @param root_y_nw desired y pos
     */
    move_frame(user_op: boolean, root_x_nw: number, root_y_nw: number): void
    /**
     * Resizes the window so that its outer bounds (including frame)
     * fit within the given rect
     * @param user_op bool to indicate whether or not this is a user operation
     * @param root_x_nw new x
     * @param root_y_nw new y
     * @param w desired width
     * @param h desired height
     */
    move_resize_frame(user_op: boolean, root_x_nw: number, root_y_nw: number, w: number, h: number): void
    /**
     * Moves the window to the monitor with index `monitor,` keeping
     * the relative position of the window's top left corner.
     * @param monitor desired monitor index
     */
    move_to_monitor(monitor: number): void
    raise(): void
    set_compositor_private(priv: any): void
    set_demands_attention(): void
    /**
     * Sets or unsets the location of the icon corresponding to the window. If
     * set, the location should correspond to a dock, task bar or other user
     * interface element displaying the icon, and is relative to the root window.
     * @param rect rectangle with the desired geometry or %NULL.
     */
    set_icon_geometry(rect: Rectangle | null): void
    shade(timestamp: number): void
    shove_titlebar_onscreen(): void
    showing_on_its_workspace(): boolean
    shutdown_group(): void
    stick(): void
    titlebar_is_onscreen(): boolean
    unmake_above(): void
    unmake_fullscreen(): void
    unmaximize(directions: MaximizeFlags): void
    unminimize(): void
    unset_demands_attention(): void
    unshade(timestamp: number): void
    unstick(): void

    // Own signals of Meta-11.Meta.Window

    connect(sigName: "focus", callback: Window.FocusSignalCallback): number
    connect_after(sigName: "focus", callback: Window.FocusSignalCallback): number
    emit(sigName: "focus", ...args: any[]): void
    connect(sigName: "position-changed", callback: Window.PositionChangedSignalCallback): number
    connect_after(sigName: "position-changed", callback: Window.PositionChangedSignalCallback): number
    emit(sigName: "position-changed", ...args: any[]): void
    connect(sigName: "raised", callback: Window.RaisedSignalCallback): number
    connect_after(sigName: "raised", callback: Window.RaisedSignalCallback): number
    emit(sigName: "raised", ...args: any[]): void
    connect(sigName: "shown", callback: Window.ShownSignalCallback): number
    connect_after(sigName: "shown", callback: Window.ShownSignalCallback): number
    emit(sigName: "shown", ...args: any[]): void
    connect(sigName: "size-changed", callback: Window.SizeChangedSignalCallback): number
    connect_after(sigName: "size-changed", callback: Window.SizeChangedSignalCallback): number
    emit(sigName: "size-changed", ...args: any[]): void
    connect(sigName: "unmanaged", callback: Window.UnmanagedSignalCallback): number
    connect_after(sigName: "unmanaged", callback: Window.UnmanagedSignalCallback): number
    emit(sigName: "unmanaged", ...args: any[]): void
    connect(sigName: "unmanaging", callback: Window.UnmanagingSignalCallback): number
    connect_after(sigName: "unmanaging", callback: Window.UnmanagingSignalCallback): number
    emit(sigName: "unmanaging", ...args: any[]): void
    connect(sigName: "workspace-changed", callback: Window.WorkspaceChangedSignalCallback): number
    connect_after(sigName: "workspace-changed", callback: Window.WorkspaceChangedSignalCallback): number
    emit(sigName: "workspace-changed", ...args: any[]): void
}

class Window {

    // Own properties of Meta-11.Meta.Window

    static name: string
}

module WindowActor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `damaged`
     */
    interface DamagedSignalCallback {
        ($obj: WindowActor): void
    }

    /**
     * Signal callback interface for `effects-completed`
     */
    interface EffectsCompletedSignalCallback {
        ($obj: WindowActor): void
    }

    /**
     * Signal callback interface for `first-frame`
     */
    interface FirstFrameSignalCallback {
        ($obj: WindowActor): void
    }

    /**
     * Signal callback interface for `thawed`
     */
    interface ThawedSignalCallback {
        ($obj: WindowActor): void
    }

}

interface WindowActor extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Meta-11.Meta.WindowActor

    readonly meta_window: Window

    // Own fields of Meta-11.Meta.WindowActor

    parent_instance: Clutter.Actor

    // Owm methods of Meta-11.Meta.WindowActor

    /**
     * Freezes the #MetaWindowActor, which inhibits updates and geometry
     * changes of the window. This property is refcounted, so make sure
     * to call meta_window_actor_thaw() the exact same amount of times
     * as this function to allow updates again.
     */
    freeze(): void
    /**
     * Flattens the layers of `self` into one ARGB32 image by alpha blending
     * the images, and returns the flattened image.
     * @param clip A clipping rectangle, to help prevent extra processing. In the case that the clipping rectangle is partially or fully outside the bounds of the actor, the rectangle will be clipped.
     * @returns a new cairo surface to be freed with cairo_surface_destroy().
     */
    get_image(clip: any | null): any | null
    /**
     * Gets the #MetaWindow object that the the #MetaWindowActor is displaying
     * @returns the displayed #MetaWindow
     */
    get_meta_window(): Window
    /**
     * Gets the ClutterActor that is used to display the contents of the window,
     * or NULL if no texture is shown yet, because the window is not mapped.
     * @returns the #ClutterActor for the contents
     */
    get_texture(): ShapedTexture
    /**
     * Gets whether the X window that the actor was displaying has been destroyed
     * @returns %TRUE when the window is destroyed, otherwise %FALSE
     */
    is_destroyed(): boolean
    paint_to_content(clip: Rectangle | null): Clutter.Content | null
    sync_visibility(): void
    /**
     * Thaws/unfreezes the #MetaWindowActor to allow updates and geometry
     * changes after a window was frozen using meta_window_actor_freeze().
     */
    thaw(): void

    // Own signals of Meta-11.Meta.WindowActor

    connect(sigName: "damaged", callback: WindowActor.DamagedSignalCallback): number
    connect_after(sigName: "damaged", callback: WindowActor.DamagedSignalCallback): number
    emit(sigName: "damaged", ...args: any[]): void
    connect(sigName: "effects-completed", callback: WindowActor.EffectsCompletedSignalCallback): number
    connect_after(sigName: "effects-completed", callback: WindowActor.EffectsCompletedSignalCallback): number
    emit(sigName: "effects-completed", ...args: any[]): void
    connect(sigName: "first-frame", callback: WindowActor.FirstFrameSignalCallback): number
    connect_after(sigName: "first-frame", callback: WindowActor.FirstFrameSignalCallback): number
    emit(sigName: "first-frame", ...args: any[]): void
    connect(sigName: "thawed", callback: WindowActor.ThawedSignalCallback): number
    connect_after(sigName: "thawed", callback: WindowActor.ThawedSignalCallback): number
    emit(sigName: "thawed", ...args: any[]): void
}

class WindowActor extends Clutter.Actor {

    // Own properties of Meta-11.Meta.WindowActor

    static name: string
}

interface WindowGroup extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
}

class WindowGroup extends Clutter.Actor {

    // Own properties of Meta-11.Meta.WindowGroup

    static name: string
}

module Workspace {

    // Signal callback interfaces

    /**
     * Signal callback interface for `window-added`
     */
    interface WindowAddedSignalCallback {
        ($obj: Workspace, object: Window): void
    }

    /**
     * Signal callback interface for `window-removed`
     */
    interface WindowRemovedSignalCallback {
        ($obj: Workspace, object: Window): void
    }

}

interface Workspace {

    // Own properties of Meta-11.Meta.Workspace

    readonly active: boolean
    readonly n_windows: number
    readonly workspace_index: number

    // Owm methods of Meta-11.Meta.Workspace

    activate(timestamp: number): void
    /**
     * Switches to `workspace` and possibly activates the window `focus_this`.
     * 
     * The window `focus_this` is activated by calling meta_window_activate()
     * which will unminimize it and transient parents, raise it and give it
     * the focus.
     * 
     * If a window is currently being moved by the user, it will be
     * moved to `workspace`.
     * 
     * The advantage of calling this function instead of meta_workspace_activate()
     * followed by meta_window_activate() is that it happens as a unit, so
     * no other window gets focused first before `focus_this`.
     * @param focus_this the #MetaWindow to be focused, or %NULL
     * @param timestamp timestamp for `focus_this`
     */
    activate_with_focus(focus_this: Window, timestamp: number): void
    /**
     * Gets the #MetaDisplay that the workspace is part of.
     * @returns the #MetaDisplay for the workspace
     */
    get_display(): Display
    /**
     * Calculate and retrieve the workspace that is next to `workspace,`
     * according to `direction` and the current workspace layout, as set
     * by meta_screen_override_workspace_layout().
     * @param direction a #MetaMotionDirection, relative to `workspace`
     * @returns the workspace next to @workspace, or   @workspace itself if the neighbor would be outside the layout
     */
    get_neighbor(direction: MotionDirection): Workspace
    /**
     * Stores the work area in `area`.
     */
    get_work_area_all_monitors(): /* area */ Rectangle
    /**
     * Stores the work area for `which_monitor` on `workspace`
     * in `area`.
     * @param which_monitor a monitor index
     */
    get_work_area_for_monitor(which_monitor: number): /* area */ Rectangle
    index(): number
    /**
     * Gets windows contained on the workspace, including workspace->windows
     * and also sticky windows. Override-redirect windows are not included.
     * @returns the list of windows.
     */
    list_windows(): Window[]
    /**
     * Sets a list of struts that will be used in addition to the struts
     * of the windows in the workspace when computing the work area of
     * the workspace.
     * @param struts list of #MetaStrut
     */
    set_builtin_struts(struts: Strut[]): void

    // Own signals of Meta-11.Meta.Workspace

    connect(sigName: "window-added", callback: Workspace.WindowAddedSignalCallback): number
    connect_after(sigName: "window-added", callback: Workspace.WindowAddedSignalCallback): number
    emit(sigName: "window-added", object: Window, ...args: any[]): void
    connect(sigName: "window-removed", callback: Workspace.WindowRemovedSignalCallback): number
    connect_after(sigName: "window-removed", callback: Workspace.WindowRemovedSignalCallback): number
    emit(sigName: "window-removed", object: Window, ...args: any[]): void
}

class Workspace {

    // Own properties of Meta-11.Meta.Workspace

    static name: string
}

module WorkspaceManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-workspace-changed`
     */
    interface ActiveWorkspaceChangedSignalCallback {
        ($obj: WorkspaceManager): void
    }

    /**
     * Signal callback interface for `showing-desktop-changed`
     */
    interface ShowingDesktopChangedSignalCallback {
        ($obj: WorkspaceManager): void
    }

    /**
     * Signal callback interface for `workspace-added`
     */
    interface WorkspaceAddedSignalCallback {
        ($obj: WorkspaceManager, object: number): void
    }

    /**
     * Signal callback interface for `workspace-removed`
     */
    interface WorkspaceRemovedSignalCallback {
        ($obj: WorkspaceManager, object: number): void
    }

    /**
     * Signal callback interface for `workspace-switched`
     */
    interface WorkspaceSwitchedSignalCallback {
        ($obj: WorkspaceManager, object: number, p0: number, p1: MotionDirection): void
    }

    /**
     * Signal callback interface for `workspaces-reordered`
     */
    interface WorkspacesReorderedSignalCallback {
        ($obj: WorkspaceManager): void
    }

}

interface WorkspaceManager {

    // Own properties of Meta-11.Meta.WorkspaceManager

    readonly layout_columns: number
    readonly layout_rows: number
    readonly n_workspaces: number

    // Owm methods of Meta-11.Meta.WorkspaceManager

    /**
     * Append a new workspace to the workspace manager and (optionally) switch to that
     * display.
     * @param activate %TRUE if the workspace should be switched to after creation
     * @param timestamp if switching to a new workspace, timestamp to be used when   focusing a window on the new workspace. (Doesn't hurt to pass a valid   timestamp when available even if not switching workspaces.)
     * @returns the newly appended workspace.
     */
    append_new_workspace(activate: boolean, timestamp: number): Workspace
    get_active_workspace(): Workspace
    get_active_workspace_index(): number
    get_n_workspaces(): number
    /**
     * Gets the workspace object for one of a workspace manager's workspaces given the workspace
     * index. It's valid to call this function with an out-of-range index and it
     * will robustly return %NULL.
     * @param index index of one of the display's workspaces
     * @returns the workspace object with specified   index, or %NULL if the index is out of range.
     */
    get_workspace_by_index(index: number): Workspace | null
    /**
     * Explicitly set the layout of workspaces. Once this has been called, the contents of the
     * _NET_DESKTOP_LAYOUT property on the root window are completely ignored.
     * @param starting_corner the corner at which the first workspace is found
     * @param vertical_layout if %TRUE the workspaces are laid out in columns rather than rows
     * @param n_rows number of rows of workspaces, or -1 to determine the number of rows from   `n_columns` and the total number of workspaces
     * @param n_columns number of columns of workspaces, or -1 to determine the number of columns from   `n_rows` and the total number of workspaces
     */
    override_workspace_layout(starting_corner: DisplayCorner, vertical_layout: boolean, n_rows: number, n_columns: number): void
    remove_workspace(workspace: Workspace, timestamp: number): void
    /**
     * Reorder a workspace to a new index. If the workspace is currently active
     * the "active-workspace-changed" signal will be emitted.
     * If the workspace's index is the same as `new_index` or the workspace
     * will not be found in the list, this function will return.
     * 
     * Calling this function will also emit the "workspaces-reordered" signal.
     * @param workspace a #MetaWorkspace to reorder
     * @param new_index the new index of the passed workspace
     */
    reorder_workspace(workspace: Workspace, new_index: number): void

    // Own signals of Meta-11.Meta.WorkspaceManager

    connect(sigName: "active-workspace-changed", callback: WorkspaceManager.ActiveWorkspaceChangedSignalCallback): number
    connect_after(sigName: "active-workspace-changed", callback: WorkspaceManager.ActiveWorkspaceChangedSignalCallback): number
    emit(sigName: "active-workspace-changed", ...args: any[]): void
    connect(sigName: "showing-desktop-changed", callback: WorkspaceManager.ShowingDesktopChangedSignalCallback): number
    connect_after(sigName: "showing-desktop-changed", callback: WorkspaceManager.ShowingDesktopChangedSignalCallback): number
    emit(sigName: "showing-desktop-changed", ...args: any[]): void
    connect(sigName: "workspace-added", callback: WorkspaceManager.WorkspaceAddedSignalCallback): number
    connect_after(sigName: "workspace-added", callback: WorkspaceManager.WorkspaceAddedSignalCallback): number
    emit(sigName: "workspace-added", object: number, ...args: any[]): void
    connect(sigName: "workspace-removed", callback: WorkspaceManager.WorkspaceRemovedSignalCallback): number
    connect_after(sigName: "workspace-removed", callback: WorkspaceManager.WorkspaceRemovedSignalCallback): number
    emit(sigName: "workspace-removed", object: number, ...args: any[]): void
    connect(sigName: "workspace-switched", callback: WorkspaceManager.WorkspaceSwitchedSignalCallback): number
    connect_after(sigName: "workspace-switched", callback: WorkspaceManager.WorkspaceSwitchedSignalCallback): number
    emit(sigName: "workspace-switched", object: number, p0: number, p1: MotionDirection, ...args: any[]): void
    connect(sigName: "workspaces-reordered", callback: WorkspaceManager.WorkspacesReorderedSignalCallback): number
    connect_after(sigName: "workspaces-reordered", callback: WorkspaceManager.WorkspacesReorderedSignalCallback): number
    emit(sigName: "workspaces-reordered", ...args: any[]): void
}

class WorkspaceManager {

    // Own properties of Meta-11.Meta.WorkspaceManager

    static name: string
}

interface X11Display {

    // Owm methods of Meta-11.Meta.X11Display

    clear_stage_input_region(): void
    get_damage_event_base(): number
    get_screen_number(): number
    get_shape_event_base(): number
    has_shape(): boolean
    set_cm_selection(): void
    set_stage_input_region(region: any): void
    xwindow_is_a_no_focus_window(xwindow: any): boolean
}

class X11Display {

    // Own properties of Meta-11.Meta.X11Display

    static name: string
}

interface BackendClass {
}

abstract class BackendClass {

    // Own properties of Meta-11.Meta.BackendClass

    static name: string
}

interface BackgroundActorClass {

    // Own fields of Meta-11.Meta.BackgroundActorClass

    parent_class: Clutter.ActorClass
}

abstract class BackgroundActorClass {

    // Own properties of Meta-11.Meta.BackgroundActorClass

    static name: string
}

interface BackgroundClass {

    // Own fields of Meta-11.Meta.BackgroundClass

    parent_class: any
}

abstract class BackgroundClass {

    // Own properties of Meta-11.Meta.BackgroundClass

    static name: string
}

interface BackgroundContentClass {

    // Own fields of Meta-11.Meta.BackgroundContentClass

    parent_class: any
}

abstract class BackgroundContentClass {

    // Own properties of Meta-11.Meta.BackgroundContentClass

    static name: string
}

interface BackgroundGroupClass {

    // Own fields of Meta-11.Meta.BackgroundGroupClass

    parent_class: Clutter.ActorClass
}

abstract class BackgroundGroupClass {

    // Own properties of Meta-11.Meta.BackgroundGroupClass

    static name: string
}

interface BackgroundImageCacheClass {

    // Own fields of Meta-11.Meta.BackgroundImageCacheClass

    parent_class: any
}

abstract class BackgroundImageCacheClass {

    // Own properties of Meta-11.Meta.BackgroundImageCacheClass

    static name: string
}

interface BackgroundImageClass {

    // Own fields of Meta-11.Meta.BackgroundImageClass

    parent_class: any
}

abstract class BackgroundImageClass {

    // Own properties of Meta-11.Meta.BackgroundImageClass

    static name: string
}

interface BarrierClass {

    // Own fields of Meta-11.Meta.BarrierClass

    parent_class: any
}

abstract class BarrierClass {

    // Own properties of Meta-11.Meta.BarrierClass

    static name: string
}

interface BarrierEvent {

    // Own fields of Meta-11.Meta.BarrierEvent

    /**
     * A unique integer ID identifying a
     * consecutive series of motions at or along the barrier
     * @field 
     */
    event_id: number
    /**
     * Server time, in milliseconds, since the last event
     * sent for this barrier
     * @field 
     */
    dt: number
    /**
     * Server time, in milliseconds
     * @field 
     */
    time: number
    /**
     * The cursor X position in screen coordinates
     * @field 
     */
    x: number
    /**
     * The cursor Y position in screen coordinates.
     * @field 
     */
    y: number
    /**
     * If the cursor hadn't been constrained, the delta
     * of X movement past the barrier, in screen coordinates
     * @field 
     */
    dx: number
    /**
     * If the cursor hadn't been constrained, the delta
     * of X movement past the barrier, in screen coordinates
     * @field 
     */
    dy: number
    /**
     * A boolean flag, %TRUE if this event generated
     * by the pointer leaving the barrier as a result of a client
     * calling meta_barrier_release() (will be set only for
     * MetaBarrier::leave signals)
     * @field 
     */
    released: boolean
    /**
     * A boolean flag, %TRUE if the pointer was grabbed
     * at the time this event was sent
     * @field 
     */
    grabbed: boolean
}

class BarrierEvent {

    // Own properties of Meta-11.Meta.BarrierEvent

    static name: string
}

interface ButtonLayout {

    // Own fields of Meta-11.Meta.ButtonLayout

    left_buttons: ButtonFunction[]
    left_buttons_has_spacer: boolean[]
    right_buttons: ButtonFunction[]
    right_buttons_has_spacer: boolean[]
}

class ButtonLayout {

    // Own properties of Meta-11.Meta.ButtonLayout

    static name: string
}

interface CloseDialogInterface {

    // Own fields of Meta-11.Meta.CloseDialogInterface

    parent_iface: any
    show: (dialog: CloseDialog) => void
    hide: (dialog: CloseDialog) => void
    focus: (dialog: CloseDialog) => void
}

abstract class CloseDialogInterface {

    // Own properties of Meta-11.Meta.CloseDialogInterface

    static name: string
}

interface CompositorClass {
}

abstract class CompositorClass {

    // Own properties of Meta-11.Meta.CompositorClass

    static name: string
}

interface ContextClass {
}

abstract class ContextClass {

    // Own properties of Meta-11.Meta.ContextClass

    static name: string
}

interface CursorTrackerClass {
}

abstract class CursorTrackerClass {

    // Own properties of Meta-11.Meta.CursorTrackerClass

    static name: string
}

interface DisplayClass {
}

abstract class DisplayClass {

    // Own properties of Meta-11.Meta.DisplayClass

    static name: string
}

interface DndClass {

    // Own fields of Meta-11.Meta.DndClass

    parent_class: any
}

abstract class DndClass {

    // Own properties of Meta-11.Meta.DndClass

    static name: string
}

interface Edge {

    // Own fields of Meta-11.Meta.Edge

    /**
     * #MetaRectangle with the bounds of the edge
     * @field 
     */
    rect: Rectangle
    /**
     * Side
     * @field 
     */
    side_type: Side
    /**
     * To what belongs the edge
     * @field 
     */
    edge_type: EdgeType
}

class Edge {

    // Own properties of Meta-11.Meta.Edge

    static name: string
}

interface Frame {
}

class Frame {

    // Own properties of Meta-11.Meta.Frame

    static name: string
}

interface FrameBorders {

    // Own fields of Meta-11.Meta.FrameBorders

    /**
     * inner visible portion of frame border
     * @field 
     */
    visible: Gtk.Border
    /**
     * outer invisible portion of frame border
     * @field 
     */
    invisible: Gtk.Border
    /**
     * sum of the two borders above
     * @field 
     */
    total: Gtk.Border

    // Owm methods of Meta-11.Meta.FrameBorders

    clear(): void
}

class FrameBorders {

    // Own properties of Meta-11.Meta.FrameBorders

    static name: string
}

interface Group {

    // Owm methods of Meta-11.Meta.Group

    get_size(): number
    get_startup_id(): string | null
    list_windows(): Window[]
    update_layers(): void
}

class Group {

    // Own properties of Meta-11.Meta.Group

    static name: string
}

interface IdleMonitorClass {

    // Own fields of Meta-11.Meta.IdleMonitorClass

    parent_class: any
}

abstract class IdleMonitorClass {

    // Own properties of Meta-11.Meta.IdleMonitorClass

    static name: string
}

interface InhibitShortcutsDialogInterface {

    // Own fields of Meta-11.Meta.InhibitShortcutsDialogInterface

    parent_iface: any
    show: (dialog: InhibitShortcutsDialog) => void
    hide: (dialog: InhibitShortcutsDialog) => void
}

abstract class InhibitShortcutsDialogInterface {

    // Own properties of Meta-11.Meta.InhibitShortcutsDialogInterface

    static name: string
}

interface KeyBinding {

    // Owm methods of Meta-11.Meta.KeyBinding

    get_mask(): number
    get_modifiers(): VirtualModifier
    get_name(): string | null
    is_builtin(): boolean
    is_reversed(): boolean
}

class KeyBinding {

    // Own properties of Meta-11.Meta.KeyBinding

    static name: string
}

interface Laters {

    // Owm methods of Meta-11.Meta.Laters

    /**
     * Sets up a callback  to be called at some later time. `when` determines the
     * particular later occasion at which it is called. This is much like g_idle_add(),
     * except that the functions interact properly with clutter event handling.
     * If a "later" function is added from a clutter event handler, and is supposed
     * to be run before the stage is redrawn, it will be run before that redraw
     * of the stage, not the next one.
     * @param when enumeration value determining the phase at which to run the callback
     * @param func callback to run later
     * @returns an integer ID (guaranteed to be non-zero) that can be used  to cancel the callback and prevent it from being run.
     */
    add(when: LaterType, func: any): number
    /**
     * Removes a callback added with meta_later_add()
     * @param later_id the integer ID returned from meta_later_add()
     */
    remove(later_id: number): void
}

class Laters {

    // Own properties of Meta-11.Meta.Laters

    static name: string
}

interface LaunchContextClass {

    // Own fields of Meta-11.Meta.LaunchContextClass

    parent_class: any
}

abstract class LaunchContextClass {

    // Own properties of Meta-11.Meta.LaunchContextClass

    static name: string
}

interface MonitorManagerClass {
}

abstract class MonitorManagerClass {

    // Own properties of Meta-11.Meta.MonitorManagerClass

    static name: string
}

interface PluginClass {

    // Own fields of Meta-11.Meta.PluginClass

    start: (plugin: Plugin) => void
    minimize: (plugin: Plugin, actor: WindowActor) => void
    unminimize: (plugin: Plugin, actor: WindowActor) => void
    size_changed: (plugin: Plugin, actor: WindowActor) => void
    size_change: (plugin: Plugin, actor: WindowActor, which_change: SizeChange, old_frame_rect: Rectangle, old_buffer_rect: Rectangle) => void
    map: (plugin: Plugin, actor: WindowActor) => void
    destroy: (plugin: Plugin, actor: WindowActor) => void
    switch_workspace: (plugin: Plugin, from: number, to: number, direction: MotionDirection) => void
    show_tile_preview: (plugin: Plugin, window: Window, tile_rect: Rectangle, tile_monitor_number: number) => void
    hide_tile_preview: (plugin: Plugin) => void
    show_window_menu: (plugin: Plugin, window: Window, menu: WindowMenuType, x: number, y: number) => void
    show_window_menu_for_rect: (plugin: Plugin, window: Window, menu: WindowMenuType, rect: Rectangle) => void
    kill_window_effects: (plugin: Plugin, actor: WindowActor) => void
    kill_switch_workspace: (plugin: Plugin) => void
    xevent_filter: (plugin: Plugin, event: any) => boolean
    keybinding_filter: (plugin: Plugin, binding: KeyBinding) => boolean
    confirm_display_change: (plugin: Plugin) => void
    plugin_info: (plugin: Plugin) => PluginInfo
    locate_pointer: (plugin: Plugin) => void
}

abstract class PluginClass {

    // Own properties of Meta-11.Meta.PluginClass

    static name: string
}

interface PluginInfo {

    // Own fields of Meta-11.Meta.PluginInfo

    /**
     * name of the plugin
     * @field 
     */
    name: string | null
    /**
     * version of the plugin
     * @field 
     */
    version: string | null
    /**
     * author of the plugin
     * @field 
     */
    author: string | null
    /**
     * license of the plugin
     * @field 
     */
    license: string | null
    /**
     * description of the plugin
     * @field 
     */
    description: string | null
}

class PluginInfo {

    // Own properties of Meta-11.Meta.PluginInfo

    static name: string
}

interface Rectangle {

    // Own fields of Meta-11.Meta.Rectangle

    /**
     * X coordinate of the top-left corner
     * @field 
     */
    x: number
    /**
     * Y coordinate of the top-left corner
     * @field 
     */
    y: number
    /**
     * Width of the rectangle
     * @field 
     */
    width: number
    /**
     * Height of the rectangle
     * @field 
     */
    height: number

    // Owm methods of Meta-11.Meta.Rectangle

    area(): number
    contains_rect(inner_rect: Rectangle): boolean
    copy(): Rectangle
    could_fit_rect(inner_rect: Rectangle): boolean
    equal(src2: Rectangle): boolean
    free(): void
    horiz_overlap(rect2: Rectangle): boolean
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle ]
    overlap(rect2: Rectangle): boolean
    union(rect2: Rectangle): /* dest */ Rectangle
    vert_overlap(rect2: Rectangle): boolean
}

class Rectangle {

    // Own properties of Meta-11.Meta.Rectangle

    static name: string
}

interface RemoteAccessControllerClass {

    // Own fields of Meta-11.Meta.RemoteAccessControllerClass

    parent_class: any
}

abstract class RemoteAccessControllerClass {

    // Own properties of Meta-11.Meta.RemoteAccessControllerClass

    static name: string
}

interface RemoteAccessHandleClass {

    // Own fields of Meta-11.Meta.RemoteAccessHandleClass

    parent_class: any
    stop: (handle: RemoteAccessHandle) => void
}

abstract class RemoteAccessHandleClass {

    // Own properties of Meta-11.Meta.RemoteAccessHandleClass

    static name: string
}

interface SelectionClass {

    // Own fields of Meta-11.Meta.SelectionClass

    parent_class: any
}

abstract class SelectionClass {

    // Own properties of Meta-11.Meta.SelectionClass

    static name: string
}

interface SelectionSourceClass {

    // Own fields of Meta-11.Meta.SelectionSourceClass

    parent_class: any
    activated: (source: SelectionSource) => void
    deactivated: (source: SelectionSource) => void
    get_mimetypes: (source: SelectionSource) => string[]
    read_async: (source: SelectionSource, mimetype: string | null, cancellable: any | null, callback: any | null) => void
    read_finish: (source: SelectionSource, result: any) => any
}

abstract class SelectionSourceClass {

    // Own properties of Meta-11.Meta.SelectionSourceClass

    static name: string
}

interface SelectionSourceMemoryClass {

    // Own fields of Meta-11.Meta.SelectionSourceMemoryClass

    parent_class: SelectionSourceClass
}

abstract class SelectionSourceMemoryClass {

    // Own properties of Meta-11.Meta.SelectionSourceMemoryClass

    static name: string
}

interface Settings {

    // Owm methods of Meta-11.Meta.Settings

    get_font_dpi(): number
    get_ui_scaling_factor(): number
}

class Settings {

    // Own properties of Meta-11.Meta.Settings

    static name: string
}

interface Shadow {

    // Owm methods of Meta-11.Meta.Shadow

    /**
     * Computes the bounds of the pixels that will be affected by
     * meta_shadow_paint()
     * @param window_x x position of the region to paint a shadow for
     * @param window_y y position of the region to paint a shadow for
     * @param window_width actual width of the region to paint a shadow for
     * @param window_height actual height of the region to paint a shadow for
     * @param bounds 
     */
    get_bounds(window_x: number, window_y: number, window_width: number, window_height: number, bounds: any): void
    /**
     * Paints the shadow at the given position, for the specified actual
     * size of the region. (Since a #MetaShadow can be shared between
     * different sizes with the same extracted #MetaWindowShape the
     * size needs to be passed in here.)
     * @param framebuffer 
     * @param window_x x position of the region to paint a shadow for
     * @param window_y y position of the region to paint a shadow for
     * @param window_width actual width of the region to paint a shadow for
     * @param window_height actual height of the region to paint a shadow for
     * @param opacity 
     * @param clip if non-%NULL specifies the visible portion   of the shadow.
     * @param clip_strictly if %TRUE, drawing will be clipped strictly   to `clip,` otherwise, it will be only used to optimize   drawing.
     */
    paint(framebuffer: Cogl.Framebuffer, window_x: number, window_y: number, window_width: number, window_height: number, opacity: number, clip: any | null, clip_strictly: boolean): void
    ref(): Shadow
    unref(): void
}

/**
 * #MetaShadow holds a shadow texture along with information about how to
 * apply that texture to draw a window texture. (E.g., it knows how big the
 * unscaled borders are on each side of the shadow texture.)
 * @record 
 */
class Shadow {

    // Own properties of Meta-11.Meta.Shadow

    static name: string
}

interface ShadowFactoryClass {

    // Own fields of Meta-11.Meta.ShadowFactoryClass

    parent_class: any
}

abstract class ShadowFactoryClass {

    // Own properties of Meta-11.Meta.ShadowFactoryClass

    static name: string
}

interface ShadowParams {

    // Own fields of Meta-11.Meta.ShadowParams

    /**
     * the radius (gaussian standard deviation) of the shadow
     * @field 
     */
    radius: number
    /**
     * if >= 0, the shadow doesn't extend above the top
     *  of the shape, and fades out over the given number of pixels
     * @field 
     */
    top_fade: number
    /**
     * horizontal offset of the shadow with respect to the
     *  shape being shadowed, in pixels
     * @field 
     */
    x_offset: number
    /**
     * vertical offset of the shadow with respect to the
     *  shape being shadowed, in pixels
     * @field 
     */
    y_offset: number
    /**
     * opacity of the shadow, from 0 to 255
     * @field 
     */
    opacity: number
}

/**
 * The #MetaShadowParams structure holds information about how to draw
 * a particular style of shadow.
 * @record 
 */
class ShadowParams {

    // Own properties of Meta-11.Meta.ShadowParams

    static name: string
}

interface ShapedTextureClass {

    // Own fields of Meta-11.Meta.ShapedTextureClass

    parent_class: any
}

abstract class ShapedTextureClass {

    // Own properties of Meta-11.Meta.ShapedTextureClass

    static name: string
}

interface SoundPlayerClass {

    // Own fields of Meta-11.Meta.SoundPlayerClass

    parent_class: any
}

abstract class SoundPlayerClass {

    // Own properties of Meta-11.Meta.SoundPlayerClass

    static name: string
}

interface StageClass {

    // Own fields of Meta-11.Meta.StageClass

    parent_class: Clutter.StageClass
}

abstract class StageClass {

    // Own properties of Meta-11.Meta.StageClass

    static name: string
}

interface StartupNotificationClass {

    // Own fields of Meta-11.Meta.StartupNotificationClass

    parent_class: any
}

abstract class StartupNotificationClass {

    // Own properties of Meta-11.Meta.StartupNotificationClass

    static name: string
}

interface StartupSequenceClass {
}

abstract class StartupSequenceClass {

    // Own properties of Meta-11.Meta.StartupSequenceClass

    static name: string
}

interface Strut {

    // Own fields of Meta-11.Meta.Strut

    /**
     * #MetaRectangle the #MetaStrut is on
     * @field 
     */
    rect: Rectangle
    /**
     * #MetaSide the #MetaStrut is on
     * @field 
     */
    side: Side
}

class Strut {

    // Own properties of Meta-11.Meta.Strut

    static name: string
}

interface Theme {

    // Owm methods of Meta-11.Meta.Theme

    free(): void
}

class Theme {

    // Own properties of Meta-11.Meta.Theme

    static name: string
}

interface WaylandClientClass {

    // Own fields of Meta-11.Meta.WaylandClientClass

    parent_class: any
}

abstract class WaylandClientClass {

    // Own properties of Meta-11.Meta.WaylandClientClass

    static name: string
}

interface WindowActorClass {
}

abstract class WindowActorClass {

    // Own properties of Meta-11.Meta.WindowActorClass

    static name: string
}

interface WindowClass {
}

abstract class WindowClass {

    // Own properties of Meta-11.Meta.WindowClass

    static name: string
}

interface WindowGroupClass {

    // Own fields of Meta-11.Meta.WindowGroupClass

    parent_class: Clutter.ActorClass
}

abstract class WindowGroupClass {

    // Own properties of Meta-11.Meta.WindowGroupClass

    static name: string
}

interface WindowShape {

    // Owm methods of Meta-11.Meta.WindowShape

    equal(shape_b: WindowShape): boolean
    get_borders(border_top: number, border_right: number, border_bottom: number, border_left: number): void
    hash(): number
    ref(): WindowShape
    /**
     * Converts the shape to to a cairo_region_t using the given width
     * and height for the central scaled region.
     * @param center_width size of the central region horizontally
     * @param center_height size of the central region vertically
     * @returns a newly created region
     */
    to_region(center_width: number, center_height: number): any
    unref(): void
}

/**
 * #MetaWindowShape represents a 9-sliced region with borders on all sides that
 * are unscaled, and a constant central region that is scaled. For example,
 * the regions representing two windows that are rounded rectangles,
 * with the same corner radius but different sizes, have the
 * same MetaWindowShape.
 * #MetaWindowShape is designed to be used as part of a hash table key, so has
 * efficient hash and equal functions.
 * @record 
 */
class WindowShape {

    // Own properties of Meta-11.Meta.WindowShape

    static name: string

    // Constructors of Meta-11.Meta.WindowShape

    constructor(region: any) 
    static new(region: any): WindowShape
}

interface WorkspaceClass {
}

abstract class WorkspaceClass {

    // Own properties of Meta-11.Meta.WorkspaceClass

    static name: string
}

interface WorkspaceManagerClass {

    // Own fields of Meta-11.Meta.WorkspaceManagerClass

    parent_class: any
}

abstract class WorkspaceManagerClass {

    // Own properties of Meta-11.Meta.WorkspaceManagerClass

    static name: string
}

interface X11DisplayClass {

    // Own fields of Meta-11.Meta.X11DisplayClass

    parent_class: any
}

abstract class X11DisplayClass {

    // Own properties of Meta-11.Meta.X11DisplayClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}
export default Meta;