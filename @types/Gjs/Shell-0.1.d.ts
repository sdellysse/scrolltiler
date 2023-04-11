/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Shell-0.1
 */

/// <reference path="Gjs.d.ts" />
import type * as Gjs from './Gjs.js';
/// <reference path="St-1.0.d.ts" />
import type St from './St-1.0.js';
/// <reference path="Meta-11.d.ts" />
import type Meta from './Meta-11.js';
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
/// <reference path="Cally-11.d.ts" />
import type Cally from './Cally-11.js';
// WARN: Dependency not found: 'PolkitAgent-1.0'
// WARN: Dependency not found: 'NM-1.0'
/// <reference path="Gvc-1.0.d.ts" />
import type Gvc from './Gvc-1.0.js';
// WARN: Dependency not found: 'Gcr-4'

declare namespace Shell {

enum AppLaunchGpu {
    APP_PREF,
    DISCRETE,
    DEFAULT,
}
enum AppState {
    STOPPED,
    STARTING,
    RUNNING,
}
/**
 * The mode of blurring of the effect.
 */
enum BlurMode {
    /**
     * blur the actor contents, and its children
     */
    ACTOR,
    /**
     * blur what's beneath the actor
     */
    BACKGROUND,
}
enum NetworkAgentResponse {
    CONFIRMED,
    USER_CANCELED,
    INTERNAL_ERROR,
}
/**
 * Temporary hack to work around Cogl not exporting CoglSnippetHook in
 * the 1.0 API. Don't use.
 */
enum SnippetHook {
    VERTEX,
    VERTEX_TRANSFORM,
    FRAGMENT,
    TEXTURE_COORD_TRANSFORM,
    LAYER_FRAGMENT,
    TEXTURE_LOOKUP,
}
/**
 * Controls in which GNOME Shell states an action (like keybindings and gestures)
 * should be handled.
 * @bitfield 
 */
enum ActionMode {
    /**
     * block action
     */
    NONE,
    /**
     * allow action when in window mode,
     *     e.g. when the focus is in an application window
     */
    NORMAL,
    /**
     * allow action while the overview
     *     is active
     */
    OVERVIEW,
    /**
     * allow action when the screen
     *     is locked, e.g. when the screen shield is shown
     */
    LOCK_SCREEN,
    /**
     * allow action in the unlock
     *     dialog
     */
    UNLOCK_SCREEN,
    /**
     * allow action in the login screen
     */
    LOGIN_SCREEN,
    /**
     * allow action when a system modal
     *     dialog (e.g. authentication or session dialogs) is open
     */
    SYSTEM_MODAL,
    /**
     * allow action in looking glass
     */
    LOOKING_GLASS,
    /**
     * allow action while a shell menu is open
     */
    POPUP,
    /**
     * always allow action
     */
    ALL,
}
const KEYRING_SK_TAG: string | null
const KEYRING_SN_TAG: string | null
const KEYRING_UUID_TAG: string | null
/**
 * Synchronously load the contents of a file as a NUL terminated
 * string, validating it as UTF-8.  Embedded NUL characters count as
 * invalid content.
 * @param path UTF-8 encoded filename path
 * @returns File contents
 */
function get_file_contents_utf8_sync(path: string | null): string | null
/**
 * Walk over all open file descriptors. Check them for the FD_CLOEXEC flag.
 * If this flag is not set, log the offending file descriptor number.
 * 
 * It is important that gnome-shell's file descriptors are all marked CLOEXEC,
 * so that the shell's open file descriptors are not passed to child processes
 * that we launch.
 */
function util_check_cloexec_fds(): void
function util_composite_capture_images(captures: Clutter.Capture, n_captures: number, x: number, y: number, target_width: number, target_height: number, target_scale: number): any
/**
 * Workaround for non-introspectability of gdk_pixbuf_from_data().
 * @param data 
 * @param colorspace 
 * @param has_alpha 
 * @param bits_per_sample 
 * @param width 
 * @param height 
 * @param rowstride 
 */
function util_create_pixbuf_from_data(data: Uint8Array, colorspace: GdkPixbuf.Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number): GdkPixbuf.Pixbuf
/**
 * Attempts to translate the folder `name` using translations provided
 * by .directory files.
 * @param name the untranslated folder name
 * @returns a translated string or %NULL
 */
function util_get_translated_folder_name(name: string | null): string | null
/**
 * A wrapper around getuid() so that it can be used from JavaScript. This
 * function will always succeed.
 * @returns the real user ID of the calling process
 */
function util_get_uid(): number
/**
 * Gets the first week day for the current locale, expressed as a
 * number in the range 0..6, representing week days from Sunday to
 * Saturday.
 * @returns A number representing the first week day for the current          locale
 */
function util_get_week_start(): number
/**
 * If the corresponding X11 display provides the passed extension, return %TRUE,
 * otherwise %FALSE. If there is no X11 display, %FALSE is passed.
 * @param display A #MetaDisplay
 * @param extension An X11 extension
 */
function util_has_x11_display_extension(display: Meta.Display, extension: string | null): boolean
/**
 * A wrapper around g_regex_escape_string() that takes its argument as
 * \0-terminated string rather than a byte-array that confuses gjs.
 * @param str a UTF-8 string to escape
 * @returns @str with all regex-special characters escaped
 */
function util_regex_escape(str: string | null): string | null
function util_sd_notify(): void
/**
 * If `hidden` is %TRUE, hide `actor` from pick even with a mode of
 * %CLUTTER_PICK_ALL; if `hidden` is %FALSE, unhide `actor`.
 * @param actor A #ClutterActor
 * @param hidden Whether `actor` should be hidden from pick
 */
function util_set_hidden_from_pick(actor: Clutter.Actor, hidden: boolean): void
function util_start_systemd_unit(unit: string | null, mode: string | null, cancellable: any | null, callback: any | null): void
function util_start_systemd_unit_finish(res: any): boolean
function util_stop_systemd_unit(unit: string | null, mode: string | null, cancellable: any | null, callback: any | null): void
function util_stop_systemd_unit_finish(res: any): boolean
function util_systemd_unit_exists(unit: string | null, cancellable: any | null, callback: any | null): void
function util_systemd_unit_exists_finish(res: any): boolean
function util_touch_file_async(file: any, callback: any | null): void
function util_touch_file_finish(file: any, res: any): boolean
/**
 * Translate `str` according to the locale defined by LC_TIME; unlike
 * dcgettext(), the translations is still taken from the LC_MESSAGES
 * catalogue and not the LC_TIME one.
 * @param str String to translate
 * @returns the translated string
 */
function util_translate_time_string(str: string | null): string | null
/**
 * Implements libc standard WIFEXITED, that cannot be used JS
 * code.
 * @param status the status returned by wait() or waitpid()
 * @returns TRUE if the process exited normally, FALSE otherwise
 */
function util_wifexited(status: number): [ /* returnType */ boolean, /* exit */ number ]
/**
 * Write a string to a GOutputStream as UTF-8. This is a workaround
 * for not having binary buffers in GJS.
 * @param stream a #GOutputStream
 * @param str a UTF-8 string to write to `stream`
 * @returns %TRUE if write succeeded
 */
function write_string_to_stream(stream: any, str: string | null): boolean
interface LeisureFunction {
    (data: any | null): void
}
interface PerfReplayFunction {
    (time: number, name: string | null, signature: string | null, arg: any): void
}
interface PerfStatisticsCallback {
    (perf_log: PerfLog, data: any | null): void
}
module App {

    // Signal callback interfaces

    /**
     * Signal callback interface for `windows-changed`
     */
    interface WindowsChangedSignalCallback {
        ($obj: App): void
    }

}

interface App {

    // Own properties of Shell-0.1.Shell.App

    /**
     * The #GDBusActionGroup associated with this ShellApp, if any. See the
     * documentation of #GApplication and #GActionGroup for details.
     */
    readonly action_group: any
    /**
     * The #GDesktopAppInfo associated with this ShellApp, if any.
     */
    readonly app_info: any
    /**
     * Whether the application has marked itself as busy.
     */
    readonly busy: boolean
    /**
     * The #GIcon representing this ShellApp
     */
    readonly icon: any
    /**
     * The id of this application (a desktop filename, or a special string
     * like window:0xabcd1234)
     */
    readonly id: string | null
    /**
     * The high-level state of the application, effectively whether it's
     * running or not, or transitioning between those states.
     */
    readonly state: AppState

    // Owm methods of Shell-0.1.Shell.App

    /**
     * Like shell_app_activate_full(), but using the default workspace and
     * event timestamp.
     */
    activate(): void
    /**
     * Perform an appropriate default action for operating on this application,
     * dependent on its current state.  For example, if the application is not
     * currently running, launch it.  If it is running, activate the most
     * recently used NORMAL window (or if that window has a transient, the most
     * recently used transient for that window).
     * @param workspace launch on this workspace, or -1 for default. Ignored if   activating an existing window
     * @param timestamp Event timestamp
     */
    activate_full(workspace: number, timestamp: number): void
    /**
     * Bring all windows for the given app to the foreground,
     * but ensure that `window` is on top.  If `window` is %NULL,
     * the window with the most recent user time for the app
     * will be used.
     * 
     * This function has no effect if `app` is not currently running.
     * @param window Window to be focused
     * @param timestamp Event timestamp
     */
    activate_window(window: Meta.Window | null, timestamp: number): void
    /**
     * Returns %TRUE if the app supports opening a new window through
     * shell_app_open_new_window() (ie, if calling that function will
     * result in actually opening a new window and not something else,
     * like presenting the most recently active one)
     */
    can_open_new_window(): boolean
    /**
     * Compare one #ShellApp instance to another, in the following way:
     *   - Running applications sort before not-running applications.
     *   - If one of them has non-minimized windows and the other does not,
     *     the one with visible windows is first.
     *   - Finally, the application which the user interacted with most recently
     *     compares earlier.
     * @param other A #ShellApp
     */
    compare(other: App): number
    /**
     * Order two applications by name.
     * @param other The other app
     * @returns -1, 0, or 1; suitable for use as a comparison function for e.g. g_slist_sort()
     */
    compare_by_name(other: App): number
    /**
     * Look up the icon for this application, and create a #ClutterActor
     * for it at the given size.
     * @param size 
     * @returns A floating #ClutterActor
     */
    create_icon_texture(size: number): Clutter.Actor
    get_app_info(): any
    get_busy(): boolean
    get_description(): string | null
    /**
     * Look up the icon for this application
     * @returns A #GIcon
     */
    get_icon(): any
    get_id(): string | null
    get_n_windows(): number
    get_name(): string | null
    get_pids(): number[]
    get_state(): AppState
    /**
     * Get the windows which are associated with this application. The
     * returned list will be sorted first by whether they're on the
     * active workspace, then by whether they're visible, and finally
     * by the time the user last interacted with them.
     * @returns List of windows
     */
    get_windows(): Meta.Window[]
    is_on_workspace(workspace: Meta.Workspace): boolean
    /**
     * A window backed application is one which represents just an open
     * window, i.e. there's no .desktop file association, so we don't know
     * how to launch it again.
     */
    is_window_backed(): boolean
    launch(timestamp: number, workspace: number, gpu_pref: AppLaunchGpu): boolean
    launch_action(action_name: string | null, timestamp: number, workspace: number): void
    /**
     * Request that the application create a new window.
     * @param workspace open on this workspace, or -1 for default
     */
    open_new_window(workspace: number): void
    /**
     * Initiate an asynchronous request to quit this application.
     * The application may interact with the user, and the user
     * might cancel the quit request from the application UI.
     * 
     * This operation may not be supported for all applications.
     * @returns %TRUE if a quit request is supported for this application
     */
    request_quit(): boolean
    update_app_actions(window: Meta.Window): void
    update_window_actions(window: Meta.Window): void

    // Own signals of Shell-0.1.Shell.App

    connect(sigName: "windows-changed", callback: App.WindowsChangedSignalCallback): number
    connect_after(sigName: "windows-changed", callback: App.WindowsChangedSignalCallback): number
    emit(sigName: "windows-changed", ...args: any[]): void
}

class App {

    // Own properties of Shell-0.1.Shell.App

    static name: string
}

module AppSystem {

    // Signal callback interfaces

    /**
     * Signal callback interface for `app-state-changed`
     */
    interface AppStateChangedSignalCallback {
        ($obj: AppSystem, object: App): void
    }

    /**
     * Signal callback interface for `installed-changed`
     */
    interface InstalledChangedSignalCallback {
        ($obj: AppSystem): void
    }

}

interface AppSystem {

    // Owm methods of Shell-0.1.Shell.AppSystem

    /**
     * Returns all installed apps, as a list of #GAppInfo
     * @returns a list of #GAppInfo   describing all known applications. This memory is owned by the   #ShellAppSystem and should not be freed.
     */
    get_installed(): any[]
    /**
     * Returns the set of applications which currently have at least one
     * open window.  The returned list will be sorted by shell_app_compare().
     * @returns Active applications
     */
    get_running(): App[]
    /**
     * Find a #ShellApp corresponding to an id.
     * @param id 
     * @returns The #ShellApp for id, or %NULL if none
     */
    lookup_app(id: string | null): App
    /**
     * Find a valid application whose .desktop file, without the extension
     * and properly canonicalized, matches `wmclass`.
     * @param wmclass A WM_CLASS value
     * @returns A #ShellApp for @wmclass
     */
    lookup_desktop_wmclass(wmclass: string | null): App
    /**
     * Find a valid application corresponding to a given
     * heuristically determined application identifier
     * string, or %NULL if none.
     * @param id Probable application identifier
     * @returns A #ShellApp for @name
     */
    lookup_heuristic_basename(id: string | null): App
    /**
     * Find a valid application whose .desktop file contains a
     * StartupWMClass entry matching `wmclass`.
     * @param wmclass A WM_CLASS value
     * @returns A #ShellApp for @wmclass
     */
    lookup_startup_wmclass(wmclass: string | null): App

    // Own signals of Shell-0.1.Shell.AppSystem

    connect(sigName: "app-state-changed", callback: AppSystem.AppStateChangedSignalCallback): number
    connect_after(sigName: "app-state-changed", callback: AppSystem.AppStateChangedSignalCallback): number
    emit(sigName: "app-state-changed", object: App, ...args: any[]): void
    connect(sigName: "installed-changed", callback: AppSystem.InstalledChangedSignalCallback): number
    connect_after(sigName: "installed-changed", callback: AppSystem.InstalledChangedSignalCallback): number
    emit(sigName: "installed-changed", ...args: any[]): void
}

class AppSystem {

    // Own properties of Shell-0.1.Shell.AppSystem

    static name: string

    // Constructors of Shell-0.1.Shell.AppSystem

    static get_default(): AppSystem
    /**
     * Wrapper around g_desktop_app_info_search() that replaces results that
     * don't validate as UTF-8 with the empty string.
     * @param search_string the search string to use
     * @returns a   list of strvs.  Free each item with g_strfreev() and free the outer   list with g_free().
     */
    static search(search_string: string | null): any[]
}

interface AppUsage {

    // Owm methods of Shell-0.1.Shell.AppUsage

    /**
     * Compare `id_a` and `id_b` based on frequency of use.
     * @param id_a ID of first app
     * @param id_b ID of second app
     * @returns -1 if @id_a ranks higher than @id_b, 1 if @id_b ranks higher          than @id_a, and 0 if both rank equally.
     */
    compare(id_a: string | null, id_b: string | null): number
    get_most_used(): App[]
}

class AppUsage {

    // Own properties of Shell-0.1.Shell.AppUsage

    static name: string

    // Constructors of Shell-0.1.Shell.AppUsage

    static get_default(): AppUsage
}

interface BlurEffect {

    // Own properties of Shell-0.1.Shell.BlurEffect

    brightness: number
    mode: BlurMode
    sigma: number

    // Owm methods of Shell-0.1.Shell.BlurEffect

    get_brightness(): number
    get_mode(): BlurMode
    get_sigma(): number
    set_brightness(brightness: number): void
    set_mode(mode: BlurMode): void
    set_sigma(sigma: number): void
}

class BlurEffect extends Clutter.Effect {

    // Own properties of Shell-0.1.Shell.BlurEffect

    static name: string

    // Constructors of Shell-0.1.Shell.BlurEffect

    constructor() 
    static new(): BlurEffect
}

interface EmbeddedWindow extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Shell-0.1.Shell.EmbeddedWindow

    parent_instance: Gtk.Window & any

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
}

class EmbeddedWindow extends Gtk.Window {

    // Own properties of Shell-0.1.Shell.EmbeddedWindow

    static name: string

    // Constructors of Shell-0.1.Shell.EmbeddedWindow

    constructor() 
    static new(): EmbeddedWindow

    // Overloads of new

    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
}

interface GLSLEffect {

    // Own fields of Shell-0.1.Shell.GLSLEffect

    parent_instance: Clutter.OffscreenEffect & any

    // Owm methods of Shell-0.1.Shell.GLSLEffect

    /**
     * Adds a GLSL snippet to the pipeline used for drawing the effect texture.
     * See #CoglSnippet for details.
     * 
     * This is only valid inside the a call to the build_pipeline() virtual
     * function.
     * @param hook where to insert the code
     * @param declarations GLSL declarations
     * @param code GLSL code
     * @param is_replace whether Cogl code should be replaced by the custom shader
     */
    add_glsl_snippet(hook: SnippetHook, declarations: string | null, code: string | null, is_replace: boolean): void
    get_uniform_location(name: string | null): number
    set_uniform_float(uniform: number, n_components: number, value: number[]): void
    set_uniform_matrix(uniform: number, transpose: boolean, dimensions: number, value: number[]): void

    // Own virtual methods of Shell-0.1.Shell.GLSLEffect

    vfunc_build_pipeline(): void
}

class GLSLEffect extends Clutter.OffscreenEffect {

    // Own properties of Shell-0.1.Shell.GLSLEffect

    static name: string
}

module Global {

    // Signal callback interfaces

    /**
     * Signal callback interface for `locate-pointer`
     */
    interface LocatePointerSignalCallback {
        ($obj: Global): void
    }

    /**
     * Signal callback interface for `notify-error`
     */
    interface NotifyErrorSignalCallback {
        ($obj: Global, object: string | null, p0: string | null): void
    }

}

interface Global {

    // Own properties of Shell-0.1.Shell.Global

    readonly backend: Meta.Backend
    readonly context: Meta.Context
    readonly datadir: string | null
    readonly display: Meta.Display
    readonly focus_manager: St.FocusManager
    frame_finish_timestamp: boolean
    frame_timestamps: boolean
    readonly imagedir: string | null
    readonly screen_height: number
    readonly screen_width: number
    readonly session_mode: string | null
    readonly settings: any
    readonly stage: Clutter.Actor
    readonly switcheroo_control: any
    readonly top_window_group: Clutter.Actor
    readonly userdatadir: string | null
    readonly window_group: Clutter.Actor
    readonly window_manager: WM
    readonly workspace_manager: Meta.WorkspaceManager

    // Owm methods of Shell-0.1.Shell.Global

    /**
     * Marks that we are currently doing work. This is used to to track
     * whether we are busy for the purposes of shell_global_run_at_leisure().
     * A count is kept and shell_global_end_work() must be called exactly
     * as many times as shell_global_begin_work().
     */
    begin_work(): void
    /**
     * Create a #GAppLaunchContext set up with the correct timestamp, and
     * targeted to activate on the current workspace.
     * @param timestamp the timestamp for the launch (or 0 for current time)
     * @param workspace a workspace index, or -1 to indicate the current one
     * @returns A new #GAppLaunchContext
     */
    create_app_launch_context(timestamp: number, workspace: number): any
    /**
     * Marks the end of work that we started with shell_global_begin_work().
     * If no other work is ongoing and functions have been added with
     * shell_global_run_at_leisure(), they will be run at the next
     * opportunity.
     */
    end_work(): void
    get_current_time(): number
    get_display(): Meta.Display
    /**
     * The shell maintains "persistent" state which will persist after
     * logout or reboot.
     * @param property_type Expected data type
     * @param property_name Name of the property
     * @returns The value of a serialized property, or %NULL if none stored
     */
    get_persistent_state(property_type: string | null, property_name: string | null): any
    /**
     * Gets the pointer coordinates and current modifier key state.
     */
    get_pointer(): [ /* x */ number, /* y */ number, /* mods */ Clutter.ModifierType ]
    /**
     * The shell maintains "runtime" state which does not persist across
     * logout or reboot.
     * @param property_type Expected data type
     * @param property_name Name of the property
     * @returns The value of a serialized property, or %NULL if none stored
     */
    get_runtime_state(property_type: string | null, property_name: string | null): any
    get_session_mode(): string | null
    /**
     * Get the global GSettings instance.
     * @returns The GSettings object
     */
    get_settings(): any
    get_stage(): Clutter.Stage
    /**
     * Get the global #GDBusProxy instance for the switcheroo-control
     * daemon.
     * @returns the #GDBusProxy for the daemon,   or %NULL on error.
     */
    get_switcheroo_control(): any
    /**
     * Gets the list of #MetaWindowActor for the plugin's screen
     * @returns the list of windows
     */
    get_window_actors(): Meta.WindowActor[]
    get_workspace_manager(): Meta.WorkspaceManager
    /**
     * Show a system error notification.  Use this function
     * when a user-initiated action results in a non-fatal problem
     * from causes that may not be under system control.  For
     * example, an application crash.
     * @param msg Error message
     * @param details Error details
     */
    notify_error(msg: string | null, details: string | null): void
    /**
     * Restart the current process.  Only intended for development purposes.
     */
    reexec_self(): void
    /**
     * Schedules a function to be called the next time the shell is idle.
     * Idle means here no animations, no redrawing, and no ongoing background
     * work. Since there is currently no way to hook into the Clutter master
     * clock and know when is running, the implementation here is somewhat
     * approximation. Animations may be detected as terminating early if they
     * can be drawn fast enough so that the event loop goes idle between frames.
     * 
     * The intent of this function is for performance measurement runs
     * where a number of actions should be run serially and each action is
     * timed individually. Using this function for other purposes will
     * interfere with the ability to use it for performance measurement so
     * should be avoided.
     * @param func function to call at leisure
     */
    run_at_leisure(func: LeisureFunction): void
    /**
     * Change the value of serialized persistent state.
     * @param property_name Name of the property
     * @param variant A #GVariant, or %NULL to unset
     */
    set_persistent_state(property_name: string | null, variant: any | null): void
    /**
     * Change the value of serialized runtime state.
     * @param property_name Name of the property
     * @param variant A #GVariant, or %NULL to unset
     */
    set_runtime_state(property_name: string | null, variant: any | null): void
    /**
     * Sets the area of the stage that is responsive to mouse clicks when
     * we don't have a modal or grab.
     * @param rectangles a list of #MetaRectangle describing the input region.
     */
    set_stage_input_region(rectangles: Meta.Rectangle[]): void

    // Own signals of Shell-0.1.Shell.Global

    connect(sigName: "locate-pointer", callback: Global.LocatePointerSignalCallback): number
    connect_after(sigName: "locate-pointer", callback: Global.LocatePointerSignalCallback): number
    emit(sigName: "locate-pointer", ...args: any[]): void
    connect(sigName: "notify-error", callback: Global.NotifyErrorSignalCallback): number
    connect_after(sigName: "notify-error", callback: Global.NotifyErrorSignalCallback): number
    emit(sigName: "notify-error", object: string | null, p0: string | null, ...args: any[]): void
}

class Global {

    // Own properties of Shell-0.1.Shell.Global

    static name: string

    // Constructors of Shell-0.1.Shell.Global

    /**
     * Gets the singleton global object that represents the desktop.
     * @returns the singleton global object
     */
    static get(): Global
}

interface GtkEmbed extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Shell-0.1.Shell.GtkEmbed

    readonly window: EmbeddedWindow

    // Own fields of Shell-0.1.Shell.GtkEmbed

    parent_instance: Clutter.Clone
}

class GtkEmbed extends Clutter.Clone {

    // Own properties of Shell-0.1.Shell.GtkEmbed

    static name: string

    // Constructors of Shell-0.1.Shell.GtkEmbed

    constructor(window: EmbeddedWindow) 
    static new(window: EmbeddedWindow): GtkEmbed

    // Overloads of new

    /**
     * Creates a new #ClutterActor which clones `source/`
     * @constructor 
     * @param source a #ClutterActor, or %NULL
     * @returns the newly created #ClutterClone
     */
    static new(source: Clutter.Actor): Clutter.Clone
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

interface InvertLightnessEffect {
}

class InvertLightnessEffect extends Clutter.OffscreenEffect {

    // Own properties of Shell-0.1.Shell.InvertLightnessEffect

    static name: string

    // Constructors of Shell-0.1.Shell.InvertLightnessEffect

    /**
     * Creates a new #ShellInvertLightnessEffect to be used with
     * clutter_actor_add_effect()
     * @constructor 
     * @returns the newly created #ShellInvertLightnessEffect or %NULL.  Use g_object_unref() when done.
     */
    constructor() 
    /**
     * Creates a new #ShellInvertLightnessEffect to be used with
     * clutter_actor_add_effect()
     * @constructor 
     * @returns the newly created #ShellInvertLightnessEffect or %NULL.  Use g_object_unref() when done.
     */
    static new(): InvertLightnessEffect
}

module KeyringPrompt {

    // Signal callback interfaces

    /**
     * Signal callback interface for `show-confirm`
     */
    interface ShowConfirmSignalCallback {
        ($obj: KeyringPrompt): void
    }

    /**
     * Signal callback interface for `show-password`
     */
    interface ShowPasswordSignalCallback {
        ($obj: KeyringPrompt): void
    }

}

interface KeyringPrompt {

    // Own properties of Shell-0.1.Shell.KeyringPrompt

    /**
     * Whether the choice check box is visible or not.
     */
    readonly choice_visible: boolean
    /**
     * Text field for confirmation password
     */
    confirm_actor: Clutter.Text
    /**
     * Whether the password confirm entry is visible or not.
     */
    readonly confirm_visible: boolean
    /**
     * Text field for password
     */
    password_actor: Clutter.Text
    /**
     * Whether the password entry is visible or not.
     */
    readonly password_visible: boolean
    /**
     * Whether the warning label is visible or not.
     */
    readonly warning_visible: boolean

    // Owm methods of Shell-0.1.Shell.KeyringPrompt

    /**
     * Called by implementation when the prompt is cancelled.
     */
    cancel(): void
    /**
     * Called by the implementation when the prompt completes. There are various
     * checks done. %TRUE is returned if the prompt actually should complete.
     * @returns whether the prompt completed
     */
    complete(): boolean
    /**
     * Get the prompt password text actor
     * @returns the password actor
     */
    get_confirm_actor(): Clutter.Text | null
    /**
     * Get the prompt password text actor
     * @returns the password actor
     */
    get_password_actor(): Clutter.Text | null
    /**
     * Set the prompt password confirmation text actor
     * @param confirm_actor the confirm password actor
     */
    set_confirm_actor(confirm_actor: Clutter.Text | null): void
    /**
     * Set the prompt password text actor
     * @param password_actor the password actor
     */
    set_password_actor(password_actor: Clutter.Text | null): void

    // Own signals of Shell-0.1.Shell.KeyringPrompt

    connect(sigName: "show-confirm", callback: KeyringPrompt.ShowConfirmSignalCallback): number
    connect_after(sigName: "show-confirm", callback: KeyringPrompt.ShowConfirmSignalCallback): number
    emit(sigName: "show-confirm", ...args: any[]): void
    connect(sigName: "show-password", callback: KeyringPrompt.ShowPasswordSignalCallback): number
    connect_after(sigName: "show-password", callback: KeyringPrompt.ShowPasswordSignalCallback): number
    emit(sigName: "show-password", ...args: any[]): void
}

class KeyringPrompt {

    // Own properties of Shell-0.1.Shell.KeyringPrompt

    static name: string

    // Constructors of Shell-0.1.Shell.KeyringPrompt

    /**
     * Create new internal prompt base
     * @constructor 
     * @returns new internal prompt
     */
    constructor() 
    /**
     * Create new internal prompt base
     * @constructor 
     * @returns new internal prompt
     */
    static new(): KeyringPrompt
}

module MountOperation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `show-processes-2`
     */
    interface ShowProcesses2SignalCallback {
        ($obj: MountOperation): void
    }

}

interface MountOperation {

    // Owm methods of Shell-0.1.Shell.MountOperation

    get_show_processes_choices(): string[]
    get_show_processes_message(): string | null
    get_show_processes_pids(): any[]

    // Own signals of Shell-0.1.Shell.MountOperation

    connect(sigName: "show-processes-2", callback: MountOperation.ShowProcesses2SignalCallback): number
    connect_after(sigName: "show-processes-2", callback: MountOperation.ShowProcesses2SignalCallback): number
    emit(sigName: "show-processes-2", ...args: any[]): void
}

class MountOperation {

    // Own properties of Shell-0.1.Shell.MountOperation

    static name: string

    // Constructors of Shell-0.1.Shell.MountOperation

    constructor() 
    static new(): MountOperation
}

module NetworkAgent {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancel-request`
     */
    interface CancelRequestSignalCallback {
        ($obj: NetworkAgent, object: string | null): void
    }

    /**
     * Signal callback interface for `new-request`
     */
    interface NewRequestSignalCallback {
        ($obj: NetworkAgent, object: string | null, p0: any, p1: string | null, p2: string[], p3: number): void
    }

}

interface NetworkAgent {

    // Owm methods of Shell-0.1.Shell.NetworkAgent

    add_vpn_secret(request_id: string | null, setting_key: string | null, setting_value: string | null): void
    respond(request_id: string | null, response: NetworkAgentResponse): void
    search_vpn_plugin(service: string | null, callback: any | null): void
    search_vpn_plugin_finish(result: any): any | null
    set_password(request_id: string | null, setting_key: string | null, setting_value: string | null): void

    // Own signals of Shell-0.1.Shell.NetworkAgent

    connect(sigName: "cancel-request", callback: NetworkAgent.CancelRequestSignalCallback): number
    connect_after(sigName: "cancel-request", callback: NetworkAgent.CancelRequestSignalCallback): number
    emit(sigName: "cancel-request", object: string | null, ...args: any[]): void
    connect(sigName: "new-request", callback: NetworkAgent.NewRequestSignalCallback): number
    connect_after(sigName: "new-request", callback: NetworkAgent.NewRequestSignalCallback): number
    emit(sigName: "new-request", object: string | null, p0: any, p1: string | null, p2: string[], p3: number, ...args: any[]): void
}

class NetworkAgent {

    // Own properties of Shell-0.1.Shell.NetworkAgent

    static name: string
}

interface PerfLog {

    // Owm methods of Shell-0.1.Shell.PerfLog

    /**
     * Adds a function that will be called before statistics are recorded.
     * The function would typically compute one or more statistics values
     * and call a function such as shell_perf_log_update_statistic_i()
     * to update the value that will be recorded.
     * @param callback function to call before recording statistics
     */
    add_statistics_callback(callback: PerfStatisticsCallback): void
    /**
     * Calls all the update functions added with
     * shell_perf_log_add_statistics_callback() and then records events
     * for all statistics, followed by a perf.statisticsCollected event.
     */
    collect_statistics(): void
    /**
     * Defines a performance event for later recording.
     * @param name name of the event. This should of the form   '<namespace>.<specific eventf'>, for example   'clutter.stagePaintDone'.
     * @param description human readable description of the event.
     * @param signature signature defining the arguments that event takes.   This is a string of type characters, using the same characters   as D-Bus or GVariant. Only a very limited number of signatures   are supported: , '', 's', 'i', and 'x'. This mean respectively:   no arguments, one string, one 32-bit integer, and one 64-bit   integer.
     */
    define_event(name: string | null, description: string | null, signature: string | null): void
    /**
     * Defines a statistic. A statistic is a numeric value that is stored
     * by the performance log and recorded periodically or when
     * shell_perf_log_collect_statistics() is called explicitly.
     * 
     * Code that defines a statistic should update it by calling
     * the update function for the particular data type of the statistic,
     * such as shell_perf_log_update_statistic_i(). This can be done
     * at any time, but would normally done inside a function registered
     * with shell_perf_log_add_statistics_callback(). These functions
     * are called immediately before statistics are recorded.
     * @param name name of the statistic and of the corresponding event.  This should follow the same guidelines as for shell_perf_log_define_event()
     * @param description human readable description of the statistic.
     * @param signature The type of the data stored for statistic. Must  currently be 'i' or 'x'.
     */
    define_statistic(name: string | null, description: string | null, signature: string | null): void
    /**
     * Dump the definition of currently defined events and statistics, formatted
     * as JSON, to the specified output stream. The JSON output is an array,
     * with each element being a dictionary of the form:
     * 
     * { name: <name of event>,
     *   description: <description of string,
     *   statistic: true } (only for statistics)
     * @param out output stream into which to write the event definitions
     * @returns %TRUE if the dump succeeded. %FALSE if an IO error occurred
     */
    dump_events(out: any): boolean
    /**
     * Writes the performance event log, formatted as JSON, to the specified
     * output stream. For performance reasons, the output stream passed
     * in should generally be a buffered (or memory) output stream, since
     * it will be written to in small pieces. The JSON output is an array
     * with the elements of the array also being arrays, of the form
     * '[' <time>, <event name> [, <event_arg>... ] ']'.
     * @param out output stream into which to write the event log
     * @returns %TRUE if the dump succeeded. %FALSE if an IO error occurred
     */
    dump_log(out: any): boolean
    /**
     * Records a performance event with no arguments.
     * @param name name of the event
     */
    event(name: string | null): void
    /**
     * Records a performance event with one 32-bit integer argument.
     * @param name name of the event
     * @param arg the argument
     */
    event_i(name: string | null, arg: number): void
    /**
     * Records a performance event with one string argument.
     * @param name name of the event
     * @param arg the argument
     */
    event_s(name: string | null, arg: string | null): void
    /**
     * Records a performance event with one 64-bit integer argument.
     * @param name name of the event
     * @param arg the argument
     */
    event_x(name: string | null, arg: number): void
    /**
     * Replays the log by calling the given function for each event
     * in the log.
     * @param replay_function function to call for each event in the log
     */
    replay(replay_function: PerfReplayFunction): void
    /**
     * Sets whether events are currently being recorded.
     * @param enabled whether to record events
     */
    set_enabled(enabled: boolean): void
    /**
     * Updates the current value of an 32-bit integer statistic.
     * @param name name of the statistic
     * @param value new value for the statistic
     */
    update_statistic_i(name: string | null, value: number): void
    /**
     * Updates the current value of an 64-bit integer statistic.
     * @param name name of the statistic
     * @param value new value for the statistic
     */
    update_statistic_x(name: string | null, value: number): void
}

class PerfLog {

    // Own properties of Shell-0.1.Shell.PerfLog

    static name: string

    // Constructors of Shell-0.1.Shell.PerfLog

    /**
     * Gets the global singleton performance log. This is initially disabled
     * and must be explicitly enabled with shell_perf_log_set_enabled().
     * @returns the global singleton performance log
     */
    static get_default(): PerfLog
}

module PolkitAuthenticationAgent {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancel`
     */
    interface CancelSignalCallback {
        ($obj: PolkitAuthenticationAgent): void
    }

    /**
     * Signal callback interface for `initiate`
     */
    interface InitiateSignalCallback {
        ($obj: PolkitAuthenticationAgent, object: string | null, p0: string | null, p1: string | null, p2: string | null, p3: string[]): void
    }

}

interface PolkitAuthenticationAgent {

    // Owm methods of Shell-0.1.Shell.PolkitAuthenticationAgent

    complete(dismissed: boolean): void
    register(): void
    unregister(): void

    // Own signals of Shell-0.1.Shell.PolkitAuthenticationAgent

    connect(sigName: "cancel", callback: PolkitAuthenticationAgent.CancelSignalCallback): number
    connect_after(sigName: "cancel", callback: PolkitAuthenticationAgent.CancelSignalCallback): number
    emit(sigName: "cancel", ...args: any[]): void
    connect(sigName: "initiate", callback: PolkitAuthenticationAgent.InitiateSignalCallback): number
    connect_after(sigName: "initiate", callback: PolkitAuthenticationAgent.InitiateSignalCallback): number
    emit(sigName: "initiate", object: string | null, p0: string | null, p1: string | null, p2: string | null, p3: string[], ...args: any[]): void
}

class PolkitAuthenticationAgent {

    // Own properties of Shell-0.1.Shell.PolkitAuthenticationAgent

    static name: string

    // Constructors of Shell-0.1.Shell.PolkitAuthenticationAgent

    constructor() 
    static new(): PolkitAuthenticationAgent
}

module Screenshot {

    // Signal callback interfaces

    /**
     * Signal callback interface for `screenshot-taken`
     */
    interface ScreenshotTakenSignalCallback {
        ($obj: Screenshot, object: Meta.Rectangle): void
    }

}

interface Screenshot {

    // Owm methods of Shell-0.1.Shell.Screenshot

    /**
     * Picks the pixel at `x,` `y` and returns its color as #ClutterColor.
     * @param x The X coordinate to pick
     * @param y The Y coordinate to pick
     * @param callback function to call returning success or failure of the async grabbing
     */
    pick_color(x: number, y: number, callback: any | null): void
    /**
     * Finish the asynchronous operation started by shell_screenshot_pick_color()
     * and obtain its result.
     * @param result the #GAsyncResult that was provided to the callback
     * @returns whether the operation was successful
     */
    pick_color_finish(result: any): [ /* returnType */ boolean, /* color */ Clutter.Color ]
    /**
     * Takes a screenshot of the whole screen
     * in `stream` as png image.
     * @param include_cursor Whether to include the cursor or not
     * @param stream The stream for the screenshot
     * @param callback function to call returning success or failure of the async grabbing
     */
    screenshot(include_cursor: boolean, stream: any, callback: any | null): void
    /**
     * Takes a screenshot of the passed in area and saves it
     * in `stream` as png image.
     * @param x The X coordinate of the area
     * @param y The Y coordinate of the area
     * @param width The width of the area
     * @param height The height of the area
     * @param stream The stream for the screenshot
     * @param callback function to call returning success or failure of the async grabbing
     */
    screenshot_area(x: number, y: number, width: number, height: number, stream: any, callback: any | null): void
    /**
     * Finish the asynchronous operation started by shell_screenshot_screenshot_area()
     * and obtain its result.
     * @param result the #GAsyncResult that was provided to the callback
     * @returns whether the operation was successful
     */
    screenshot_area_finish(result: any): [ /* returnType */ boolean, /* area */ any ]
    /**
     * Finish the asynchronous operation started by shell_screenshot_screenshot()
     * and obtain its result.
     * @param result the #GAsyncResult that was provided to the callback
     * @returns whether the operation was successful
     */
    screenshot_finish(result: any): [ /* returnType */ boolean, /* area */ any ]
    /**
     * Takes a screenshot of the whole screen as #ClutterContent.
     * @param callback function to call returning success or failure of the async grabbing
     */
    screenshot_stage_to_content(callback: any | null): void
    /**
     * Finish the asynchronous operation started by
     * shell_screenshot_screenshot_stage_to_content() and obtain its result.
     * @param result the #GAsyncResult that was provided to the callback
     * @returns the #ClutterContent, or NULL
     */
    screenshot_stage_to_content_finish(result: any): [ /* returnType */ Clutter.Content, /* scale */ number, /* cursor_content */ Clutter.Content, /* cursor_point */ any, /* cursor_scale */ number ]
    /**
     * Takes a screenshot of the focused window (optionally omitting the frame)
     * in `stream` as png image.
     * @param include_frame Whether to include the frame or not
     * @param include_cursor Whether to include the cursor or not
     * @param stream The stream for the screenshot
     * @param callback function to call returning success or failure of the async grabbing
     */
    screenshot_window(include_frame: boolean, include_cursor: boolean, stream: any, callback: any | null): void
    /**
     * Finish the asynchronous operation started by shell_screenshot_screenshot_window()
     * and obtain its result.
     * @param result the #GAsyncResult that was provided to the callback
     * @returns whether the operation was successful
     */
    screenshot_window_finish(result: any): [ /* returnType */ boolean, /* area */ any ]

    // Own signals of Shell-0.1.Shell.Screenshot

    connect(sigName: "screenshot-taken", callback: Screenshot.ScreenshotTakenSignalCallback): number
    connect_after(sigName: "screenshot-taken", callback: Screenshot.ScreenshotTakenSignalCallback): number
    emit(sigName: "screenshot-taken", object: Meta.Rectangle, ...args: any[]): void
}

class Screenshot {

    // Own properties of Shell-0.1.Shell.Screenshot

    static name: string

    // Constructors of Shell-0.1.Shell.Screenshot

    constructor() 
    static new(): Screenshot
    /**
     * Composite a rectangle defined by x, y, width, height from the texture to a
     * pixbuf and write it as a PNG image into the stream.
     * @param texture the source texture
     * @param x x coordinate of the rectangle
     * @param y y coordinate of the rectangle
     * @param width width of the rectangle, or -1 to use the full texture
     * @param height height of the rectangle, or -1 to use the full texture
     * @param scale scale of the source texture
     * @param cursor the cursor texture
     * @param cursor_x x coordinate to put the cursor texture at, relative to the full source texture
     * @param cursor_y y coordinate to put the cursor texture at, relative to the full source texture
     * @param cursor_scale scale of the cursor texture
     * @param stream the stream to write the PNG image into
     * @param callback function to call returning success or failure
     */
    static composite_to_stream(texture: Cogl.Texture, x: number, y: number, width: number, height: number, scale: number, cursor: Cogl.Texture | null, cursor_x: number, cursor_y: number, cursor_scale: number, stream: any, callback: any | null): void
    /**
     * Finish the asynchronous operation started by
     * shell_screenshot_composite_to_stream () and obtain its result.
     * @param result the #GAsyncResult that was provided to the callback
     * @returns a GdkPixbuf with the final image if the operation was successful, or NULL on error.
     */
    static composite_to_stream_finish(result: any): GdkPixbuf.Pixbuf | null
}

interface SecureTextBuffer {
}

class SecureTextBuffer extends Clutter.TextBuffer {

    // Own properties of Shell-0.1.Shell.SecureTextBuffer

    static name: string

    // Constructors of Shell-0.1.Shell.SecureTextBuffer

    constructor() 
    static new(): SecureTextBuffer
}

interface SquareBin extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Conflicting properties

    parent_instance: St.Widget & Clutter.Actor & Clutter.Actor
}

class SquareBin extends St.Bin {

    // Own properties of Shell-0.1.Shell.SquareBin

    static name: string

    // Conflicting static methods

    static new(...args: any[]): any
}

interface Stack extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
}

class Stack extends St.Widget {

    // Own properties of Shell-0.1.Shell.Stack

    static name: string
}

interface TrayIcon extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Shell-0.1.Shell.TrayIcon

    readonly pid: number
    readonly title: string | null
    readonly wm_class: string | null

    // Owm methods of Shell-0.1.Shell.TrayIcon

    /**
     * Fakes a press and release on `icon`. `event` must be a
     * %CLUTTER_BUTTON_RELEASE, %CLUTTER_KEY_PRESS or %CLUTTER_KEY_RELEASE event.
     * Its relevant details will be passed on to the icon, but its
     * coordinates will be ignored; the click is
     * always made on the center of `icon`.
     * @param event the #ClutterEvent triggering the fake click
     */
    click(event: Clutter.Event): void
}

class TrayIcon extends GtkEmbed {

    // Own properties of Shell-0.1.Shell.TrayIcon

    static name: string

    // Constructors of Shell-0.1.Shell.TrayIcon

    constructor(window: EmbeddedWindow) 
    static new(window: EmbeddedWindow): TrayIcon

    // Overloads of new

    static new(window: EmbeddedWindow): GtkEmbed
    /**
     * Creates a new #ClutterActor which clones `source/`
     * @constructor 
     * @param source a #ClutterActor, or %NULL
     * @returns the newly created #ClutterClone
     */
    static new(source: Clutter.Actor): Clutter.Clone
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

module TrayManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `tray-icon-added`
     */
    interface TrayIconAddedSignalCallback {
        ($obj: TrayManager, object: Clutter.Actor): void
    }

    /**
     * Signal callback interface for `tray-icon-removed`
     */
    interface TrayIconRemovedSignalCallback {
        ($obj: TrayManager, object: Clutter.Actor): void
    }

}

interface TrayManager {

    // Own properties of Shell-0.1.Shell.TrayManager

    readonly bg_color: Clutter.Color

    // Owm methods of Shell-0.1.Shell.TrayManager

    manage_screen(theme_widget: St.Widget): void
    unmanage_screen(): void

    // Own signals of Shell-0.1.Shell.TrayManager

    connect(sigName: "tray-icon-added", callback: TrayManager.TrayIconAddedSignalCallback): number
    connect_after(sigName: "tray-icon-added", callback: TrayManager.TrayIconAddedSignalCallback): number
    emit(sigName: "tray-icon-added", object: Clutter.Actor, ...args: any[]): void
    connect(sigName: "tray-icon-removed", callback: TrayManager.TrayIconRemovedSignalCallback): number
    connect_after(sigName: "tray-icon-removed", callback: TrayManager.TrayIconRemovedSignalCallback): number
    emit(sigName: "tray-icon-removed", object: Clutter.Actor, ...args: any[]): void
}

class TrayManager {

    // Own properties of Shell-0.1.Shell.TrayManager

    static name: string

    // Constructors of Shell-0.1.Shell.TrayManager

    constructor() 
    static new(): TrayManager
}

module WM {

    // Signal callback interfaces

    /**
     * Signal callback interface for `confirm-display-change`
     */
    interface ConfirmDisplayChangeSignalCallback {
        ($obj: WM): void
    }

    /**
     * Signal callback interface for `create-close-dialog`
     */
    interface CreateCloseDialogSignalCallback {
        ($obj: WM, window: Meta.Window): Meta.CloseDialog
    }

    /**
     * Signal callback interface for `create-inhibit-shortcuts-dialog`
     */
    interface CreateInhibitShortcutsDialogSignalCallback {
        ($obj: WM, window: Meta.Window): Meta.InhibitShortcutsDialog
    }

    /**
     * Signal callback interface for `destroy`
     */
    interface DestroySignalCallback {
        ($obj: WM, object: Meta.WindowActor): void
    }

    /**
     * Signal callback interface for `filter-keybinding`
     */
    interface FilterKeybindingSignalCallback {
        ($obj: WM, object: Meta.KeyBinding): boolean
    }

    /**
     * Signal callback interface for `hide-tile-preview`
     */
    interface HideTilePreviewSignalCallback {
        ($obj: WM): void
    }

    /**
     * Signal callback interface for `kill-switch-workspace`
     */
    interface KillSwitchWorkspaceSignalCallback {
        ($obj: WM): void
    }

    /**
     * Signal callback interface for `kill-window-effects`
     */
    interface KillWindowEffectsSignalCallback {
        ($obj: WM, object: Meta.WindowActor): void
    }

    /**
     * Signal callback interface for `map`
     */
    interface MapSignalCallback {
        ($obj: WM, object: Meta.WindowActor): void
    }

    /**
     * Signal callback interface for `minimize`
     */
    interface MinimizeSignalCallback {
        ($obj: WM, object: Meta.WindowActor): void
    }

    /**
     * Signal callback interface for `show-tile-preview`
     */
    interface ShowTilePreviewSignalCallback {
        ($obj: WM, object: Meta.Window, p0: Meta.Rectangle, p1: number): void
    }

    /**
     * Signal callback interface for `show-window-menu`
     */
    interface ShowWindowMenuSignalCallback {
        ($obj: WM, object: Meta.Window, p0: number, p1: Meta.Rectangle): void
    }

    /**
     * Signal callback interface for `size-change`
     */
    interface SizeChangeSignalCallback {
        ($obj: WM, object: Meta.WindowActor, p0: Meta.SizeChange, p1: Meta.Rectangle, p2: Meta.Rectangle): void
    }

    /**
     * Signal callback interface for `size-changed`
     */
    interface SizeChangedSignalCallback {
        ($obj: WM, object: Meta.WindowActor): void
    }

    /**
     * Signal callback interface for `switch-workspace`
     */
    interface SwitchWorkspaceSignalCallback {
        ($obj: WM, object: number, p0: number, p1: number): void
    }

    /**
     * Signal callback interface for `unminimize`
     */
    interface UnminimizeSignalCallback {
        ($obj: WM, object: Meta.WindowActor): void
    }

}

interface WM {

    // Owm methods of Shell-0.1.Shell.WM

    /**
     * The plugin must call this after the user responded to the confirmation dialog.
     * @param ok if the new configuration was OK
     */
    complete_display_change(ok: boolean): void
    /**
     * The plugin must call this when it has completed a window destroy effect.
     * @param actor the MetaWindowActor actor
     */
    completed_destroy(actor: Meta.WindowActor): void
    /**
     * The plugin must call this when it has completed a window map effect.
     * @param actor the MetaWindowActor actor
     */
    completed_map(actor: Meta.WindowActor): void
    /**
     * The plugin must call this when it has completed a window minimize effect.
     * @param actor the MetaWindowActor actor
     */
    completed_minimize(actor: Meta.WindowActor): void
    completed_size_change(actor: Meta.WindowActor): void
    /**
     * The plugin must call this when it has finished switching the
     * workspace.
     */
    completed_switch_workspace(): void
    /**
     * The plugin must call this when it has completed a window unminimize effect.
     * @param actor the MetaWindowActor actor
     */
    completed_unminimize(actor: Meta.WindowActor): void

    // Own signals of Shell-0.1.Shell.WM

    connect(sigName: "confirm-display-change", callback: WM.ConfirmDisplayChangeSignalCallback): number
    connect_after(sigName: "confirm-display-change", callback: WM.ConfirmDisplayChangeSignalCallback): number
    emit(sigName: "confirm-display-change", ...args: any[]): void
    connect(sigName: "create-close-dialog", callback: WM.CreateCloseDialogSignalCallback): number
    connect_after(sigName: "create-close-dialog", callback: WM.CreateCloseDialogSignalCallback): number
    emit(sigName: "create-close-dialog", window: Meta.Window, ...args: any[]): void
    connect(sigName: "create-inhibit-shortcuts-dialog", callback: WM.CreateInhibitShortcutsDialogSignalCallback): number
    connect_after(sigName: "create-inhibit-shortcuts-dialog", callback: WM.CreateInhibitShortcutsDialogSignalCallback): number
    emit(sigName: "create-inhibit-shortcuts-dialog", window: Meta.Window, ...args: any[]): void
    connect(sigName: "destroy", callback: WM.DestroySignalCallback): number
    connect_after(sigName: "destroy", callback: WM.DestroySignalCallback): number
    emit(sigName: "destroy", object: Meta.WindowActor, ...args: any[]): void
    connect(sigName: "filter-keybinding", callback: WM.FilterKeybindingSignalCallback): number
    connect_after(sigName: "filter-keybinding", callback: WM.FilterKeybindingSignalCallback): number
    emit(sigName: "filter-keybinding", object: Meta.KeyBinding, ...args: any[]): void
    connect(sigName: "hide-tile-preview", callback: WM.HideTilePreviewSignalCallback): number
    connect_after(sigName: "hide-tile-preview", callback: WM.HideTilePreviewSignalCallback): number
    emit(sigName: "hide-tile-preview", ...args: any[]): void
    connect(sigName: "kill-switch-workspace", callback: WM.KillSwitchWorkspaceSignalCallback): number
    connect_after(sigName: "kill-switch-workspace", callback: WM.KillSwitchWorkspaceSignalCallback): number
    emit(sigName: "kill-switch-workspace", ...args: any[]): void
    connect(sigName: "kill-window-effects", callback: WM.KillWindowEffectsSignalCallback): number
    connect_after(sigName: "kill-window-effects", callback: WM.KillWindowEffectsSignalCallback): number
    emit(sigName: "kill-window-effects", object: Meta.WindowActor, ...args: any[]): void
    connect(sigName: "map", callback: WM.MapSignalCallback): number
    connect_after(sigName: "map", callback: WM.MapSignalCallback): number
    emit(sigName: "map", object: Meta.WindowActor, ...args: any[]): void
    connect(sigName: "minimize", callback: WM.MinimizeSignalCallback): number
    connect_after(sigName: "minimize", callback: WM.MinimizeSignalCallback): number
    emit(sigName: "minimize", object: Meta.WindowActor, ...args: any[]): void
    connect(sigName: "show-tile-preview", callback: WM.ShowTilePreviewSignalCallback): number
    connect_after(sigName: "show-tile-preview", callback: WM.ShowTilePreviewSignalCallback): number
    emit(sigName: "show-tile-preview", object: Meta.Window, p0: Meta.Rectangle, p1: number, ...args: any[]): void
    connect(sigName: "show-window-menu", callback: WM.ShowWindowMenuSignalCallback): number
    connect_after(sigName: "show-window-menu", callback: WM.ShowWindowMenuSignalCallback): number
    emit(sigName: "show-window-menu", object: Meta.Window, p0: number, p1: Meta.Rectangle, ...args: any[]): void
    connect(sigName: "size-change", callback: WM.SizeChangeSignalCallback): number
    connect_after(sigName: "size-change", callback: WM.SizeChangeSignalCallback): number
    emit(sigName: "size-change", object: Meta.WindowActor, p0: Meta.SizeChange, p1: Meta.Rectangle, p2: Meta.Rectangle, ...args: any[]): void
    connect(sigName: "size-changed", callback: WM.SizeChangedSignalCallback): number
    connect_after(sigName: "size-changed", callback: WM.SizeChangedSignalCallback): number
    emit(sigName: "size-changed", object: Meta.WindowActor, ...args: any[]): void
    connect(sigName: "switch-workspace", callback: WM.SwitchWorkspaceSignalCallback): number
    connect_after(sigName: "switch-workspace", callback: WM.SwitchWorkspaceSignalCallback): number
    emit(sigName: "switch-workspace", object: number, p0: number, p1: number, ...args: any[]): void
    connect(sigName: "unminimize", callback: WM.UnminimizeSignalCallback): number
    connect_after(sigName: "unminimize", callback: WM.UnminimizeSignalCallback): number
    emit(sigName: "unminimize", object: Meta.WindowActor, ...args: any[]): void
}

class WM {

    // Own properties of Shell-0.1.Shell.WM

    static name: string

    // Constructors of Shell-0.1.Shell.WM

    /**
     * Creates a new window management interface by hooking into `plugin`.
     * @constructor 
     * @param plugin the #MetaPlugin
     * @returns the new window-management interface
     */
    constructor(plugin: Meta.Plugin) 
    /**
     * Creates a new window management interface by hooking into `plugin`.
     * @constructor 
     * @param plugin the #MetaPlugin
     * @returns the new window-management interface
     */
    static new(plugin: Meta.Plugin): WM
}

interface WindowPreview extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Shell-0.1.Shell.WindowPreview

    window_container: Clutter.Actor
}

class WindowPreview extends St.Widget {

    // Own properties of Shell-0.1.Shell.WindowPreview

    static name: string
}

interface WindowPreviewLayout {

    // Own properties of Shell-0.1.Shell.WindowPreviewLayout

    readonly bounding_box: Clutter.ActorBox

    // Owm methods of Shell-0.1.Shell.WindowPreviewLayout

    /**
     * Creates a ClutterActor drawing the texture of `window` and adds it
     * to the container. If `window` is already part of the preview, this
     * function will do nothing.
     * @param window the #MetaWindow
     * @returns The newly created actor drawing @window
     */
    add_window(window: Meta.Window): Clutter.Actor | null
    /**
     * Gets an array of all MetaWindows that were added to the layout
     * using shell_window_preview_layout_add_window(), ordered by the
     * insertion order.
     * @returns The list of windows
     */
    get_windows(): Meta.Window[]
    /**
     * Removes a MetaWindow `window` from the preview which has been added
     * previously using shell_window_preview_layout_add_window().
     * If `window` is not part of preview, this function will do nothing.
     * @param window the #MetaWindow
     */
    remove_window(window: Meta.Window): void
}

class WindowPreviewLayout extends Clutter.LayoutManager {

    // Own properties of Shell-0.1.Shell.WindowPreviewLayout

    static name: string
}

module WindowTracker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `startup-sequence-changed`
     */
    interface StartupSequenceChangedSignalCallback {
        ($obj: WindowTracker, object: Meta.StartupSequence): void
    }

    /**
     * Signal callback interface for `tracked-windows-changed`
     */
    interface TrackedWindowsChangedSignalCallback {
        ($obj: WindowTracker): void
    }

}

interface WindowTracker {

    // Own properties of Shell-0.1.Shell.WindowTracker

    readonly focus_app: App

    // Owm methods of Shell-0.1.Shell.WindowTracker

    /**
     * Look up the application corresponding to a process.
     * @param pid A Unix process identifier
     * @returns A #ShellApp, or %NULL if none
     */
    get_app_from_pid(pid: number): App
    get_startup_sequences(): Meta.StartupSequence[]
    get_window_app(metawin: Meta.Window): App

    // Own signals of Shell-0.1.Shell.WindowTracker

    connect(sigName: "startup-sequence-changed", callback: WindowTracker.StartupSequenceChangedSignalCallback): number
    connect_after(sigName: "startup-sequence-changed", callback: WindowTracker.StartupSequenceChangedSignalCallback): number
    emit(sigName: "startup-sequence-changed", object: Meta.StartupSequence, ...args: any[]): void
    connect(sigName: "tracked-windows-changed", callback: WindowTracker.TrackedWindowsChangedSignalCallback): number
    connect_after(sigName: "tracked-windows-changed", callback: WindowTracker.TrackedWindowsChangedSignalCallback): number
    emit(sigName: "tracked-windows-changed", ...args: any[]): void
}

class WindowTracker {

    // Own properties of Shell-0.1.Shell.WindowTracker

    static name: string

    // Constructors of Shell-0.1.Shell.WindowTracker

    static get_default(): WindowTracker
}

interface WorkspaceBackground extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Shell-0.1.Shell.WorkspaceBackground

    readonly monitor_index: number
    state_adjustment_value: number
}

class WorkspaceBackground extends St.Widget {

    // Own properties of Shell-0.1.Shell.WorkspaceBackground

    static name: string
}

interface AppClass {

    // Own fields of Shell-0.1.Shell.AppClass

    parent_class: any
}

abstract class AppClass {

    // Own properties of Shell-0.1.Shell.AppClass

    static name: string
}

interface AppSystemClass {

    // Own fields of Shell-0.1.Shell.AppSystemClass

    parent_class: any
}

abstract class AppSystemClass {

    // Own properties of Shell-0.1.Shell.AppSystemClass

    static name: string
}

interface AppUsageClass {

    // Own fields of Shell-0.1.Shell.AppUsageClass

    parent_class: any
}

abstract class AppUsageClass {

    // Own properties of Shell-0.1.Shell.AppUsageClass

    static name: string
}

interface BlurEffectClass {

    // Own fields of Shell-0.1.Shell.BlurEffectClass

    parent_class: Clutter.EffectClass
}

abstract class BlurEffectClass {

    // Own properties of Shell-0.1.Shell.BlurEffectClass

    static name: string
}

interface EmbeddedWindowClass {

    // Own fields of Shell-0.1.Shell.EmbeddedWindowClass

    parent_class: Gtk.WindowClass
}

abstract class EmbeddedWindowClass {

    // Own properties of Shell-0.1.Shell.EmbeddedWindowClass

    static name: string
}

interface GLSLEffectClass {

    // Own fields of Shell-0.1.Shell.GLSLEffectClass

    parent_class: Clutter.OffscreenEffectClass
    base_pipeline: Cogl.Pipeline
    build_pipeline: (effect: GLSLEffect) => void
}

abstract class GLSLEffectClass {

    // Own properties of Shell-0.1.Shell.GLSLEffectClass

    static name: string
}

interface GlobalClass {

    // Own fields of Shell-0.1.Shell.GlobalClass

    parent_class: any
}

abstract class GlobalClass {

    // Own properties of Shell-0.1.Shell.GlobalClass

    static name: string
}

interface GtkEmbedClass {

    // Own fields of Shell-0.1.Shell.GtkEmbedClass

    parent_class: Clutter.CloneClass
}

abstract class GtkEmbedClass {

    // Own properties of Shell-0.1.Shell.GtkEmbedClass

    static name: string
}

interface InvertLightnessEffectClass {
}

abstract class InvertLightnessEffectClass {

    // Own properties of Shell-0.1.Shell.InvertLightnessEffectClass

    static name: string
}

interface KeyringPromptClass {

    // Own fields of Shell-0.1.Shell.KeyringPromptClass

    parent_class: any
}

abstract class KeyringPromptClass {

    // Own properties of Shell-0.1.Shell.KeyringPromptClass

    static name: string
}

interface MemoryInfo {

    // Own fields of Shell-0.1.Shell.MemoryInfo

    glibc_uordblks: number
    js_bytes: number
    gjs_boxed: number
    gjs_gobject: number
    gjs_function: number
    gjs_closure: number
    last_gc_seconds_ago: number
}

class MemoryInfo {

    // Own properties of Shell-0.1.Shell.MemoryInfo

    static name: string
}

interface MountOperationClass {

    // Own fields of Shell-0.1.Shell.MountOperationClass

    parent_class: any
}

abstract class MountOperationClass {

    // Own properties of Shell-0.1.Shell.MountOperationClass

    static name: string
}

interface NetworkAgentClass {
}

abstract class NetworkAgentClass {

    // Own properties of Shell-0.1.Shell.NetworkAgentClass

    static name: string
}

interface NetworkAgentPrivate {
}

class NetworkAgentPrivate {

    // Own properties of Shell-0.1.Shell.NetworkAgentPrivate

    static name: string
}

interface PerfLogClass {

    // Own fields of Shell-0.1.Shell.PerfLogClass

    parent_class: any
}

abstract class PerfLogClass {

    // Own properties of Shell-0.1.Shell.PerfLogClass

    static name: string
}

interface PolkitAuthenticationAgentClass {

    // Own fields of Shell-0.1.Shell.PolkitAuthenticationAgentClass

    parent_class: any
}

abstract class PolkitAuthenticationAgentClass {

    // Own properties of Shell-0.1.Shell.PolkitAuthenticationAgentClass

    static name: string
}

interface ScreenshotClass {

    // Own fields of Shell-0.1.Shell.ScreenshotClass

    parent_class: any
}

abstract class ScreenshotClass {

    // Own properties of Shell-0.1.Shell.ScreenshotClass

    static name: string
}

interface SecureTextBufferClass {

    // Own fields of Shell-0.1.Shell.SecureTextBufferClass

    parent_class: Clutter.TextBufferClass
}

abstract class SecureTextBufferClass {

    // Own properties of Shell-0.1.Shell.SecureTextBufferClass

    static name: string
}

interface SquareBinClass {

    // Own fields of Shell-0.1.Shell.SquareBinClass

    parent_class: St.BinClass
}

abstract class SquareBinClass {

    // Own properties of Shell-0.1.Shell.SquareBinClass

    static name: string
}

interface StackClass {

    // Own fields of Shell-0.1.Shell.StackClass

    parent_class: St.WidgetClass
}

abstract class StackClass {

    // Own properties of Shell-0.1.Shell.StackClass

    static name: string
}

interface TrayIconClass {

    // Own fields of Shell-0.1.Shell.TrayIconClass

    parent_class: GtkEmbedClass
}

abstract class TrayIconClass {

    // Own properties of Shell-0.1.Shell.TrayIconClass

    static name: string
}

interface TrayManagerClass {

    // Own fields of Shell-0.1.Shell.TrayManagerClass

    parent_class: any
}

abstract class TrayManagerClass {

    // Own properties of Shell-0.1.Shell.TrayManagerClass

    static name: string
}

interface WMClass {

    // Own fields of Shell-0.1.Shell.WMClass

    parent_class: any
}

abstract class WMClass {

    // Own properties of Shell-0.1.Shell.WMClass

    static name: string
}

interface WindowPreviewClass {

    // Own fields of Shell-0.1.Shell.WindowPreviewClass

    parent_class: St.WidgetClass
}

abstract class WindowPreviewClass {

    // Own properties of Shell-0.1.Shell.WindowPreviewClass

    static name: string
}

interface WindowPreviewLayoutClass {

    // Own fields of Shell-0.1.Shell.WindowPreviewLayoutClass

    parent_class: Clutter.LayoutManagerClass
}

abstract class WindowPreviewLayoutClass {

    // Own properties of Shell-0.1.Shell.WindowPreviewLayoutClass

    static name: string
}

interface WindowPreviewLayoutPrivate {
}

class WindowPreviewLayoutPrivate {

    // Own properties of Shell-0.1.Shell.WindowPreviewLayoutPrivate

    static name: string
}

interface WindowTrackerClass {

    // Own fields of Shell-0.1.Shell.WindowTrackerClass

    parent_class: any
}

abstract class WindowTrackerClass {

    // Own properties of Shell-0.1.Shell.WindowTrackerClass

    static name: string
}

interface WorkspaceBackgroundClass {

    // Own fields of Shell-0.1.Shell.WorkspaceBackgroundClass

    parent_class: St.WidgetClass
}

abstract class WorkspaceBackgroundClass {

    // Own properties of Shell-0.1.Shell.WorkspaceBackgroundClass

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
export default Shell;