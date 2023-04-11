/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Clutter-11
 */

/// <reference path="Gjs.d.ts" />
import type * as Gjs from './Gjs.js';
// WARN: Dependency not found: 'cairo-1.0'
// WARN: Dependency not found: 'Json-1.0'
// WARN: Dependency not found: 'GObject-2.0'
// WARN: Dependency not found: 'GL-1.0'
/// <reference path="CoglPango-11.d.ts" />
import type CoglPango from './CoglPango-11.js';
/// <reference path="PangoCairo-1.0.d.ts" />
import type PangoCairo from './PangoCairo-1.0.js';
/// <reference path="Pango-1.0.d.ts" />
import type Pango from './Pango-1.0.js';
/// <reference path="HarfBuzz-0.0.d.ts" />
import type HarfBuzz from './HarfBuzz-0.0.js';
// WARN: Dependency not found: 'freetype2-2.0'
// WARN: Dependency not found: 'Gio-2.0'
/// <reference path="Cogl-11.d.ts" />
import type Cogl from './Cogl-11.js';
// WARN: Dependency not found: 'Graphene-1.0'
/// <reference path="Atk-1.0.d.ts" />
import type Atk from './Atk-1.0.js';

declare namespace Clutter {

/**
 * Controls how a #ClutterActor should align itself inside the extra space
 * assigned to it during the allocation.
 * 
 * Alignment only matters if the allocated space given to an actor is
 * bigger than its natural size; for example, when the #ClutterActor:x-expand
 * or the #ClutterActor:y-expand properties of #ClutterActor are set to %TRUE.
 */
enum ActorAlign {
    /**
     * Stretch to cover the whole allocated space
     */
    FILL,
    /**
     * Snap to left or top side, leaving space
     *   to the right or bottom. For horizontal layouts, in right-to-left
     *   locales this should be reversed.
     */
    START,
    /**
     * Center the actor inside the allocation
     */
    CENTER,
    /**
     * Snap to right or bottom side, leaving space
     *   to the left or top. For horizontal layouts, in right-to-left locales
     *   this should be reversed.
     */
    END,
}
/**
 * Specifies the axis on which #ClutterAlignConstraint should maintain
 * the alignment.
 */
enum AlignAxis {
    /**
     * Maintain the alignment on the X axis
     */
    X_AXIS,
    /**
     * Maintain the alignment on the Y axis
     */
    Y_AXIS,
    /**
     * Maintain the alignment on both the X and Y axis
     */
    BOTH,
}
/**
 * The animation modes used by [iface`Animatable]`.
 * 
 * This enumeration can be expanded in later versions of Clutter.
 * 
 * <figure id="easing-modes">
 *   <title>Easing modes provided by Clutter</title>
 *   <graphic fileref="easing-modes.png" format="PNG"/>
 * </figure>
 * 
 * Every global alpha function registered using clutter_alpha_register_func()
 * or clutter_alpha_register_closure() will have a logical id greater than
 * %CLUTTER_ANIMATION_LAST.
 */
enum AnimationMode {
    /**
     * custom progress function
     */
    CUSTOM_MODE,
    /**
     * linear tweening
     */
    LINEAR,
    /**
     * quadratic tweening
     */
    EASE_IN_QUAD,
    /**
     * quadratic tweening, inverse of
     *    %CLUTTER_EASE_IN_QUAD
     */
    EASE_OUT_QUAD,
    /**
     * quadratic tweening, combininig
     *    %CLUTTER_EASE_IN_QUAD and %CLUTTER_EASE_OUT_QUAD
     */
    EASE_IN_OUT_QUAD,
    /**
     * cubic tweening
     */
    EASE_IN_CUBIC,
    /**
     * cubic tweening, inverse of
     *    %CLUTTER_EASE_IN_CUBIC
     */
    EASE_OUT_CUBIC,
    /**
     * cubic tweening, combining
     *    %CLUTTER_EASE_IN_CUBIC and %CLUTTER_EASE_OUT_CUBIC
     */
    EASE_IN_OUT_CUBIC,
    /**
     * quartic tweening
     */
    EASE_IN_QUART,
    /**
     * quartic tweening, inverse of
     *    %CLUTTER_EASE_IN_QUART
     */
    EASE_OUT_QUART,
    /**
     * quartic tweening, combining
     *    %CLUTTER_EASE_IN_QUART and %CLUTTER_EASE_OUT_QUART
     */
    EASE_IN_OUT_QUART,
    /**
     * quintic tweening
     */
    EASE_IN_QUINT,
    /**
     * quintic tweening, inverse of
     *    %CLUTTER_EASE_IN_QUINT
     */
    EASE_OUT_QUINT,
    /**
     * fifth power tweening, combining
     *    %CLUTTER_EASE_IN_QUINT and %CLUTTER_EASE_OUT_QUINT
     */
    EASE_IN_OUT_QUINT,
    /**
     * sinusoidal tweening
     */
    EASE_IN_SINE,
    /**
     * sinusoidal tweening, inverse of
     *    %CLUTTER_EASE_IN_SINE
     */
    EASE_OUT_SINE,
    /**
     * sine wave tweening, combining
     *    %CLUTTER_EASE_IN_SINE and %CLUTTER_EASE_OUT_SINE
     */
    EASE_IN_OUT_SINE,
    /**
     * exponential tweening
     */
    EASE_IN_EXPO,
    /**
     * exponential tweening, inverse of
     *    %CLUTTER_EASE_IN_EXPO
     */
    EASE_OUT_EXPO,
    /**
     * exponential tweening, combining
     *    %CLUTTER_EASE_IN_EXPO and %CLUTTER_EASE_OUT_EXPO
     */
    EASE_IN_OUT_EXPO,
    /**
     * circular tweening
     */
    EASE_IN_CIRC,
    /**
     * circular tweening, inverse of
     *    %CLUTTER_EASE_IN_CIRC
     */
    EASE_OUT_CIRC,
    /**
     * circular tweening, combining
     *    %CLUTTER_EASE_IN_CIRC and %CLUTTER_EASE_OUT_CIRC
     */
    EASE_IN_OUT_CIRC,
    /**
     * elastic tweening, with offshoot on start
     */
    EASE_IN_ELASTIC,
    /**
     * elastic tweening, with offshoot on end
     */
    EASE_OUT_ELASTIC,
    /**
     * elastic tweening with offshoot on both ends
     */
    EASE_IN_OUT_ELASTIC,
    /**
     * overshooting cubic tweening, with
     *   backtracking on start
     */
    EASE_IN_BACK,
    /**
     * overshooting cubic tweening, with
     *   backtracking on end
     */
    EASE_OUT_BACK,
    /**
     * overshooting cubic tweening, with
     *   backtracking on both ends
     */
    EASE_IN_OUT_BACK,
    /**
     * exponentially decaying parabolic (bounce)
     *   tweening, with bounce on start
     */
    EASE_IN_BOUNCE,
    /**
     * exponentially decaying parabolic (bounce)
     *   tweening, with bounce on end
     */
    EASE_OUT_BOUNCE,
    /**
     * exponentially decaying parabolic (bounce)
     *   tweening, with bounce on both ends
     */
    EASE_IN_OUT_BOUNCE,
    /**
     * parametrized step function; see clutter_timeline_set_step_progress()
     *   for further details. (Since 1.12)
     */
    STEPS,
    /**
     * equivalent to %CLUTTER_STEPS with a number of steps
     *   equal to 1, and a step mode of %CLUTTER_STEP_MODE_START. (Since 1.12)
     */
    STEP_START,
    /**
     * equivalent to %CLUTTER_STEPS with a number of steps
     *   equal to 1, and a step mode of %CLUTTER_STEP_MODE_END. (Since 1.12)
     */
    STEP_END,
    /**
     * cubic bezier between (0, 0) and (1, 1) with two
     *   control points; see clutter_timeline_set_cubic_bezier_progress(). (Since 1.12)
     */
    CUBIC_BEZIER,
    /**
     * equivalent to %CLUTTER_CUBIC_BEZIER with control points
     *   in (0.25, 0.1) and (0.25, 1.0). (Since 1.12)
     */
    EASE,
    /**
     * equivalent to %CLUTTER_CUBIC_BEZIER with control points
     *   in (0.42, 0) and (1.0, 1.0). (Since 1.12)
     */
    EASE_IN,
    /**
     * equivalent to %CLUTTER_CUBIC_BEZIER with control points
     *   in (0, 0) and (0.58, 1.0). (Since 1.12)
     */
    EASE_OUT,
    /**
     * equivalent to %CLUTTER_CUBIC_BEZIER with control points
     *   in (0.42, 0) and (0.58, 1.0). (Since 1.12)
     */
    EASE_IN_OUT,
    /**
     * last animation mode, used as a guard for
     *   registered global alpha functions
     */
    ANIMATION_LAST,
}
/**
 * The alignment policies available on each axis for #ClutterBinLayout
 */
enum BinAlignment {
    /**
     * Fixed position alignment; the
     *   #ClutterBinLayout will honour the fixed position provided
     *   by the actors themselves when allocating them
     */
    FIXED,
    /**
     * Fill the allocation size
     */
    FILL,
    /**
     * Position the actors at the top
     *   or left side of the container, depending on the axis
     */
    START,
    /**
     * Position the actors at the bottom
     *   or right side of the container, depending on the axis
     */
    END,
    /**
     * Position the actors at the
     *   center of the container, depending on the axis
     */
    CENTER,
}
/**
 * Specifies which property should be used in a binding
 */
enum BindCoordinate {
    /**
     * Bind the X coordinate
     */
    X,
    /**
     * Bind the Y coordinate
     */
    Y,
    /**
     * Bind the width
     */
    WIDTH,
    /**
     * Bind the height
     */
    HEIGHT,
    /**
     * Equivalent to to %CLUTTER_BIND_X and
     *   %CLUTTER_BIND_Y (added in Clutter 1.6)
     */
    POSITION,
    /**
     * Equivalent to %CLUTTER_BIND_WIDTH and
     *   %CLUTTER_BIND_HEIGHT (added in Clutter 1.6)
     */
    SIZE,
    /**
     * Equivalent to %CLUTTER_BIND_POSITION and
     *   %CLUTTER_BIND_SIZE (added in Clutter 1.10)
     */
    ALL,
}
/**
 * The alignment policies available on each axis of the #ClutterBoxLayout
 */
enum BoxAlignment {
    /**
     * Align the child to the top or to
     *   to the left, depending on the used axis
     */
    START,
    /**
     * Align the child to the bottom or to
     *   the right, depending on the used axis
     */
    END,
    /**
     * Align the child to the center
     */
    CENTER,
}
enum ButtonState {
    RELEASED,
    PRESSED,
}
/**
 * Colorspace informations.
 */
enum Colorspace {
    /**
     * Unknown colorspace
     */
    UNKNOWN,
    /**
     * Default sRGB colorspace
     */
    SRGB,
    /**
     * BT2020 colorspace
     */
    BT2020,
}
/**
 * Controls the alignment of the #ClutterContent inside a #ClutterActor.
 */
enum ContentGravity {
    /**
     * Align the content to the top left corner
     */
    TOP_LEFT,
    /**
     * Align the content to the top edge
     */
    TOP,
    /**
     * Align the content to the top right corner
     */
    TOP_RIGHT,
    /**
     * Align the content to the left edge
     */
    LEFT,
    /**
     * Align the content to the center
     */
    CENTER,
    /**
     * Align the content to the right edge
     */
    RIGHT,
    /**
     * Align the content to the bottom left corner
     */
    BOTTOM_LEFT,
    /**
     * Align the content to the bottom edge
     */
    BOTTOM,
    /**
     * Align the content to the bottom right corner
     */
    BOTTOM_RIGHT,
    /**
     * Resize the content to fill the allocation
     */
    RESIZE_FILL,
    /**
     * Resize the content to remain within the
     *   allocation, while maintaining the aspect ratio
     */
    RESIZE_ASPECT,
}
/**
 * The axis of the constraint that should be applied on the
 * dragging action
 */
enum DragAxis {
    /**
     * No constraint
     */
    AXIS_NONE,
    /**
     * Set a constraint on the X axis
     */
    X_AXIS,
    /**
     * Set a constraint on the Y axis
     */
    Y_AXIS,
}
enum EventPhase {
    CAPTURE,
    BUBBLE,
}
/**
 * Types of events.
 */
enum EventType {
    /**
     * Empty event
     */
    NOTHING,
    /**
     * Key press event
     */
    KEY_PRESS,
    /**
     * Key release event
     */
    KEY_RELEASE,
    /**
     * Pointer motion event
     */
    MOTION,
    /**
     * Actor enter event
     */
    ENTER,
    /**
     * Actor leave event
     */
    LEAVE,
    /**
     * Pointer button press event
     */
    BUTTON_PRESS,
    /**
     * Pointer button release event
     */
    BUTTON_RELEASE,
    /**
     * Pointer scroll event
     */
    SCROLL,
    /**
     * A new touch event sequence has started;
     *   event added in 1.10
     */
    TOUCH_BEGIN,
    /**
     * A touch event sequence has been updated;
     *   event added in 1.10
     */
    TOUCH_UPDATE,
    /**
     * A touch event sequence has finished;
     *   event added in 1.10
     */
    TOUCH_END,
    /**
     * A touch event sequence has been canceled;
     *   event added in 1.10
     */
    TOUCH_CANCEL,
    /**
     * A pinch gesture event, the current state is
     *   determined by its phase field; event added in 1.24
     */
    TOUCHPAD_PINCH,
    /**
     * A swipe gesture event, the current state is
     *   determined by its phase field; event added in 1.24
     */
    TOUCHPAD_SWIPE,
    /**
     * A hold gesture event, the current state is
     *   determined by its phase field. A hold gesture starts when the user places a
     *   finger on the touchpad and ends when all fingers are lifted. It is
     *   cancelled when the finger(s) move past a certain threshold.
     *   Event added in 40.4
     */
    TOUCHPAD_HOLD,
    /**
     * A tool entered in proximity to a tablet;
     *   event added in 1.28
     */
    PROXIMITY_IN,
    /**
     * A tool left from the proximity area of a tablet;
     *   event added in 1.28
     */
    PROXIMITY_OUT,
    PAD_BUTTON_PRESS,
    PAD_BUTTON_RELEASE,
    PAD_STRIP,
    PAD_RING,
    DEVICE_ADDED,
    DEVICE_REMOVED,
    IM_COMMIT,
    IM_DELETE,
    IM_PREEDIT,
    /**
     * Marks the end of the #ClutterEventType enumeration;
     *   added in 1.10
     */
    EVENT_LAST,
}
/**
 * The direction of the arrangement of the children inside
 * a #ClutterFlowLayout
 */
enum FlowOrientation {
    /**
     * Arrange the children of the flow layout
     *   horizontally first
     */
    HORIZONTAL,
    /**
     * Arrange the children of the flow layout
     *   vertically first
     */
    VERTICAL,
}
enum FrameResult {
    PENDING_PRESENTED,
    IDLE,
}
/**
 * Enum passed to the [method`GestureAction`.set_threshold_trigger_edge]
 * function.
 */
enum GestureTriggerEdge {
    /**
     * Tell #ClutterGestureAction that
     * the gesture must begin immediately and there's no drag limit that
     * will cause its cancellation;
     */
    NONE,
    /**
     * Tell #ClutterGestureAction that
     * it needs to wait until the drag threshold has been exceeded before
     * considering that the gesture has begun;
     */
    AFTER,
    /**
     * Tell #ClutterGestureAction that
     * the gesture must begin immediately and that it must be cancelled
     * once the drag exceed the configured threshold.
     */
    BEFORE,
}
/**
 * Gravity of the scaling operations.
 * 
 * When a gravity different than %CLUTTER_GRAVITY_NONE is used,
 * an actor is scaled keeping the position of the specified portion
 * at the same coordinates.
 */
enum Gravity {
    /**
     * Do not apply any gravity
     */
    NONE,
    /**
     * Scale from topmost downwards
     */
    NORTH,
    /**
     * Scale from the top right corner
     */
    NORTH_EAST,
    /**
     * Scale from the right side
     */
    EAST,
    /**
     * Scale from the bottom right corner
     */
    SOUTH_EAST,
    /**
     * Scale from the bottom upwards
     */
    SOUTH,
    /**
     * Scale from the bottom left corner
     */
    SOUTH_WEST,
    /**
     * Scale from the left side
     */
    WEST,
    /**
     * Scale from the top left corner
     */
    NORTH_WEST,
    /**
     * Scale from the center.
     */
    CENTER,
}
/**
 * Grid position modes.
 */
enum GridPosition {
    /**
     * left position
     */
    LEFT,
    /**
     * right position
     */
    RIGHT,
    /**
     * top position
     */
    TOP,
    /**
     * bottom position
     */
    BOTTOM,
}
/**
 * The type of axes Clutter recognizes on a #ClutterInputDevice
 */
enum InputAxis {
    /**
     * Unused axis
     */
    IGNORE,
    /**
     * The position on the X axis
     */
    X,
    /**
     * The position of the Y axis
     */
    Y,
    /**
     * The pressure information
     */
    PRESSURE,
    /**
     * The tilt on the X axis
     */
    XTILT,
    /**
     * The tile on the Y axis
     */
    YTILT,
    /**
     * A wheel
     */
    WHEEL,
    /**
     * Distance (Since 1.12)
     */
    DISTANCE,
    /**
     * Rotation along the z-axis (Since 1.28)
     */
    ROTATION,
    /**
     * A slider (Since 1.28)
     */
    SLIDER,
    /**
     * Last value of the enumeration; this value is
     *   useful when iterating over the enumeration values (Since 1.12)
     */
    LAST,
}
enum InputContentPurpose {
    NORMAL,
    ALPHA,
    DIGITS,
    NUMBER,
    PHONE,
    URL,
    EMAIL,
    NAME,
    PASSWORD,
    DATE,
    TIME,
    DATETIME,
    TERMINAL,
}
enum InputDevicePadFeature {
    BUTTON,
    RING,
    STRIP,
}
enum InputDevicePadSource {
    UNKNOWN,
    FINGER,
}
/**
 * Defines the type of tool that a #ClutterInputDeviceTool represents.8
 */
enum InputDeviceToolType {
    /**
     * No tool
     */
    NONE,
    /**
     * The tool is a pen
     */
    PEN,
    /**
     * The tool is an eraser
     */
    ERASER,
    /**
     * The tool is a brush
     */
    BRUSH,
    /**
     * The tool is a pencil
     */
    PENCIL,
    /**
     * The tool is an airbrush
     */
    AIRBRUSH,
    /**
     * The tool is a mouse
     */
    MOUSE,
    /**
     * The tool is a lens
     */
    LENS,
}
/**
 * The types of input devices available.
 * 
 * The #ClutterInputDeviceType enumeration can be extended at later
 * date; not every platform supports every input device type.
 */
enum InputDeviceType {
    /**
     * A pointer device
     */
    POINTER_DEVICE,
    /**
     * A keyboard device
     */
    KEYBOARD_DEVICE,
    /**
     * A generic extension device
     */
    EXTENSION_DEVICE,
    /**
     * A joystick device
     */
    JOYSTICK_DEVICE,
    /**
     * A tablet device
     */
    TABLET_DEVICE,
    /**
     * A touchpad device
     */
    TOUCHPAD_DEVICE,
    /**
     * A touch screen device
     */
    TOUCHSCREEN_DEVICE,
    /**
     * A pen device
     */
    PEN_DEVICE,
    /**
     * An eraser device
     */
    ERASER_DEVICE,
    /**
     * A cursor device
     */
    CURSOR_DEVICE,
    /**
     * A tablet pad
     */
    PAD_DEVICE,
    /**
     * The number of device types
     */
    N_DEVICE_TYPES,
}
/**
 * The mode for input devices available.
 */
enum InputMode {
    /**
     * A logical, virtual device
     */
    LOGICAL,
    /**
     * A physical device, attached to
     *   a logical device
     */
    PHYSICAL,
    /**
     * A physical device, not attached
     *   to a logical device
     */
    FLOATING,
}
enum InputPanelState {
    OFF,
    ON,
    TOGGLE,
}
/**
 * The mode of interpolation between key frames
 */
enum Interpolation {
    /**
     * linear interpolation
     */
    LINEAR,
    /**
     * cubic interpolation
     */
    CUBIC,
}
enum KeyState {
    RELEASED,
    PRESSED,
}
/**
 * The states for the #ClutterClickAction::long-press signal.
 */
enum LongPressState {
    /**
     * Queries the action whether it supports
     *   long presses
     */
    QUERY,
    /**
     * Activates the action on a long press
     */
    ACTIVATE,
    /**
     * The long press was cancelled
     */
    CANCEL,
}
/**
 * Represents the orientation of actors or layout managers.
 */
enum Orientation {
    /**
     * An horizontal orientation
     */
    HORIZONTAL,
    /**
     * A vertical orientation
     */
    VERTICAL,
}
/**
 * The axis of the constraint that should be applied on the
 * panning action
 */
enum PanAxis {
    /**
     * No constraint
     */
    AXIS_NONE,
    /**
     * Set a constraint on the X axis
     */
    X_AXIS,
    /**
     * Set a constraint on the Y axis
     */
    Y_AXIS,
    /**
     * Constrain panning automatically based on initial
     *   movement (available since 1.24)
     */
    AXIS_AUTO,
}
/**
 * Types of nodes in a #ClutterPath.
 */
enum PathNodeType {
    /**
     * jump to the given position
     */
    MOVE_TO,
    /**
     * create a line from the last node to the
     *   given position
     */
    LINE_TO,
    /**
     * bezier curve using the last position and
     *   three control points.
     */
    CURVE_TO,
    /**
     * create a line from the last node to the last
     *   %CLUTTER_PATH_MOVE_TO node.
     */
    CLOSE,
    /**
     * same as %CLUTTER_PATH_MOVE_TO but with
     *   coordinates relative to the last node.
     */
    REL_MOVE_TO,
    /**
     * same as %CLUTTER_PATH_LINE_TO but with
     *   coordinates relative to the last node.
     */
    REL_LINE_TO,
    /**
     * same as %CLUTTER_PATH_CURVE_TO but with
     *   coordinates relative to the last node.
     */
    REL_CURVE_TO,
}
/**
 * Controls the paint cycle of the scene graph when in pick mode
 */
enum PickMode {
    /**
     * Do not paint any actor
     */
    NONE,
    /**
     * Paint only the reactive actors
     */
    REACTIVE,
    /**
     * Paint all actors
     */
    ALL,
}
/**
 * Dwell click types.
 */
enum PointerA11yDwellClickType {
    /**
     * Internal use only
     */
    NONE,
    PRIMARY,
    SECONDARY,
    MIDDLE,
    DOUBLE,
    DRAG,
}
/**
 * Dwell gesture directions.
 */
enum PointerA11yDwellDirection {
    NONE,
    LEFT,
    RIGHT,
    UP,
    DOWN,
}
/**
 * Dwell mode.
 */
enum PointerA11yDwellMode {
    WINDOW,
    GESTURE,
}
/**
 * Pointer accessibility timeout type.
 */
enum PointerA11yTimeoutType {
    SECONDARY_CLICK,
    DWELL,
    GESTURE,
}
enum PreeditResetMode {
    CLEAR,
    COMMIT,
}
/**
 * Specifies the type of requests for a #ClutterActor.
 */
enum RequestMode {
    /**
     * Height for width requests
     */
    HEIGHT_FOR_WIDTH,
    /**
     * Width for height requests
     */
    WIDTH_FOR_HEIGHT,
    /**
     * Use the preferred size of the
     *   #ClutterContent, if it has any (available since 1.22)
     */
    CONTENT_SIZE,
}
/**
 * Axis of a rotation.
 */
enum RotateAxis {
    /**
     * Rotate around the X axis
     */
    X_AXIS,
    /**
     * Rotate around the Y axis
     */
    Y_AXIS,
    /**
     * Rotate around the Z axis
     */
    Z_AXIS,
}
/**
 * Direction of a rotation.
 */
enum RotateDirection {
    /**
     * Clockwise rotation
     */
    CW,
    /**
     * Counter-clockwise rotation
     */
    CCW,
}
/**
 * The scaling filters to be used with the [property`Actor:`minification-filter]
 * and [property`Actor:`magnification-filter] properties.
 */
enum ScalingFilter {
    /**
     * Linear interpolation filter
     */
    LINEAR,
    /**
     * Nearest neighbor interpolation filter
     */
    NEAREST,
    /**
     * Trilinear minification filter, with
     *   mipmap generation; this filter linearly interpolates on every axis,
     *   as well as between mipmap levels.
     */
    TRILINEAR,
}
/**
 * #ClutterScript error enumeration.
 */
enum ScriptError {
    /**
     * Type function not found
     *   or invalid
     */
    TYPE_FUNCTION,
    /**
     * Property not found or invalid
     */
    PROPERTY,
    /**
     * Invalid value
     */
    VALUE,
}
/**
 * Direction of a pointer scroll event.
 * 
 * The %CLUTTER_SCROLL_SMOOTH value implies that the #ClutterScrollEvent
 * has precise scrolling delta information.
 */
enum ScrollDirection {
    /**
     * Scroll up
     */
    UP,
    /**
     * Scroll down
     */
    DOWN,
    /**
     * Scroll left
     */
    LEFT,
    /**
     * Scroll right
     */
    RIGHT,
    /**
     * Precise scrolling delta (available in 1.10)
     */
    SMOOTH,
}
/**
 * The scroll source determines the source of the scroll event.
 * 
 * Keep in mind that the source device #ClutterInputDeviceType is not enough
 * to infer the scroll source.6
 */
enum ScrollSource {
    /**
     * Source of scroll events is unknown.
     */
    UNKNOWN,
    /**
     * The scroll event is originated by a mouse wheel.
     */
    WHEEL,
    /**
     * The scroll event is originated by one or more
     *   fingers on the device (eg. touchpads).
     */
    FINGER,
    /**
     * The scroll event is originated by the
     *   motion of some device (eg. a scroll button is set).
     */
    CONTINUOUS,
}
/**
 * The type of GLSL shader program
 */
enum ShaderType {
    /**
     * a vertex shader
     */
    VERTEX_SHADER,
    /**
     * a fragment shader
     */
    FRAGMENT_SHADER,
}
/**
 * The edge to snap
 */
enum SnapEdge {
    /**
     * the top edge
     */
    TOP,
    /**
     * the right edge
     */
    RIGHT,
    /**
     * the bottom edge
     */
    BOTTOM,
    /**
     * the left edge
     */
    LEFT,
}
/**
 * Named colors, for accessing global colors defined by Clutter
 */
enum StaticColor {
    /**
     * White color (ffffffff)
     */
    WHITE,
    /**
     * Black color (000000ff)
     */
    BLACK,
    /**
     * Red color (ff0000ff)
     */
    RED,
    /**
     * Dark red color (800000ff)
     */
    DARK_RED,
    /**
     * Green color (00ff00ff)
     */
    GREEN,
    /**
     * Dark green color (008000ff)
     */
    DARK_GREEN,
    /**
     * Blue color (0000ffff)
     */
    BLUE,
    /**
     * Dark blue color (000080ff)
     */
    DARK_BLUE,
    /**
     * Cyan color (00ffffff)
     */
    CYAN,
    /**
     * Dark cyan color (008080ff)
     */
    DARK_CYAN,
    /**
     * Magenta color (ff00ffff)
     */
    MAGENTA,
    /**
     * Dark magenta color (800080ff)
     */
    DARK_MAGENTA,
    /**
     * Yellow color (ffff00ff)
     */
    YELLOW,
    /**
     * Dark yellow color (808000ff)
     */
    DARK_YELLOW,
    /**
     * Gray color (a0a0a4ff)
     */
    GRAY,
    /**
     * Dark Gray color (808080ff)
     */
    DARK_GRAY,
    /**
     * Light gray color (c0c0c0ff)
     */
    LIGHT_GRAY,
    /**
     * Butter color (edd400ff)
     */
    BUTTER,
    /**
     * Light butter color (fce94fff)
     */
    BUTTER_LIGHT,
    /**
     * Dark butter color (c4a000ff)
     */
    BUTTER_DARK,
    /**
     * Orange color (f57900ff)
     */
    ORANGE,
    /**
     * Light orange color (fcaf3fff)
     */
    ORANGE_LIGHT,
    /**
     * Dark orange color (ce5c00ff)
     */
    ORANGE_DARK,
    /**
     * Chocolate color (c17d11ff)
     */
    CHOCOLATE,
    /**
     * Light chocolate color (e9b96eff)
     */
    CHOCOLATE_LIGHT,
    /**
     * Dark chocolate color (8f5902ff)
     */
    CHOCOLATE_DARK,
    /**
     * Chameleon color (73d216ff)
     */
    CHAMELEON,
    /**
     * Light chameleon color (8ae234ff)
     */
    CHAMELEON_LIGHT,
    /**
     * Dark chameleon color (4e9a06ff)
     */
    CHAMELEON_DARK,
    /**
     * Sky color (3465a4ff)
     */
    SKY_BLUE,
    /**
     * Light sky color (729fcfff)
     */
    SKY_BLUE_LIGHT,
    /**
     * Dark sky color (204a87ff)
     */
    SKY_BLUE_DARK,
    /**
     * Plum color (75507bff)
     */
    PLUM,
    /**
     * Light plum color (ad7fa8ff)
     */
    PLUM_LIGHT,
    /**
     * Dark plum color (5c3566ff)
     */
    PLUM_DARK,
    /**
     * Scarlet red color (cc0000ff)
     */
    SCARLET_RED,
    /**
     * Light scarlet red color (ef2929ff)
     */
    SCARLET_RED_LIGHT,
    /**
     * Dark scarlet red color (a40000ff)
     */
    SCARLET_RED_DARK,
    /**
     * Aluminium, first variant (eeeeecff)
     */
    ALUMINIUM_1,
    /**
     * Aluminium, second variant (d3d7cfff)
     */
    ALUMINIUM_2,
    /**
     * Aluminium, third variant (babdb6ff)
     */
    ALUMINIUM_3,
    /**
     * Aluminium, fourth variant (888a85ff)
     */
    ALUMINIUM_4,
    /**
     * Aluminium, fifth variant (555753ff)
     */
    ALUMINIUM_5,
    /**
     * Aluminium, sixth variant (2e3436ff)
     */
    ALUMINIUM_6,
    /**
     * Transparent color (00000000)
     */
    TRANSPARENT,
}
/**
 * Change the value transition of a step function.
 * 
 * See clutter_timeline_set_step_progress().
 */
enum StepMode {
    /**
     * The change in the value of a
     *   %CLUTTER_STEP progress mode should occur at the start of
     *   the transition
     */
    START,
    /**
     * The change in the value of a
     *   %CLUTTER_STEP progress mode should occur at the end of
     *   the transition
     */
    END,
}
/**
 * The text direction to be used by [class`Actor]`s
 */
enum TextDirection {
    /**
     * Use the default setting, as returned
     *   by clutter_get_default_text_direction()
     */
    DEFAULT,
    /**
     * Use left-to-right text direction
     */
    LTR,
    /**
     * Use right-to-left text direction
     */
    RTL,
}
/**
 * Enumaration controlling the texture quality.
 */
enum TextureQuality {
    /**
     * fastest rendering will use nearest neighbour
     *   interpolation when rendering. good setting.
     */
    LOW,
    /**
     * higher quality rendering without using
     *   extra resources.
     */
    MEDIUM,
    /**
     * render the texture with the best quality
     *   available using extra memory.
     */
    HIGH,
}
/**
 * The direction of a #ClutterTimeline
 */
enum TimelineDirection {
    /**
     * forward direction for a timeline
     */
    FORWARD,
    /**
     * backward direction for a timeline
     */
    BACKWARD,
}
/**
 * The phase of a touchpad gesture event.
 * 
 * All gestures are guaranteed to begin with an event of type
 * %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN, followed by a number
 * of %CLUTTER_TOUCHPAD_GESTURE_PHASE_UPDATE (possibly 0).
 * 
 * A finished gesture may have 2 possible outcomes, an event with phase
 * %CLUTTER_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
 * considered successful, this should be used as the hint to perform any
 * permanent changes.
 * 
 * Cancelled gestures may be so for a variety of reasons, due to hardware,
 * or due to the gesture recognition layers hinting the gesture did not
 * finish resolutely (eg. a 3rd finger being added during a pinch gesture).
 * In these cases, the last event with report the phase
 * %CLUTTER_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
 * to undo any visible/permanent changes that were done throughout the
 * progress of the gesture.
 * 
 * See also #ClutterTouchpadPinchEvent and #ClutterTouchpadPinchEvent.4
 */
enum TouchpadGesturePhase {
    /**
     * The gesture has begun.
     */
    BEGIN,
    /**
     * The gesture has been updated.
     */
    UPDATE,
    /**
     * The gesture was finished, changes
     *   should be permanently applied.
     */
    END,
    /**
     * The gesture was cancelled, all
     *   changes should be undone.
     */
    CANCEL,
}
/**
 * The type of unit in which a value is expressed
 * 
 * This enumeration might be expanded at later date
 */
enum UnitType {
    /**
     * Unit expressed in pixels (with subpixel precision)
     */
    PIXEL,
    /**
     * Unit expressed in em
     */
    EM,
    /**
     * Unit expressed in millimeters
     */
    MM,
    /**
     * Unit expressed in points
     */
    POINT,
    /**
     * Unit expressed in centimeters
     */
    CM,
}
/**
 * Flags used to signal the state of an actor.
 * @bitfield 
 */
enum ActorFlags {
    /**
     * the actor will be painted (is visible, and inside
     *   a toplevel, and all parents visible)
     */
    MAPPED,
    /**
     * the resources associated to the actor have been
     *   allocated
     */
    REALIZED,
    /**
     * the actor 'reacts' to mouse events emitting event
     *   signals
     */
    REACTIVE,
    /**
     * the actor has been shown by the application program
     */
    VISIBLE,
    /**
     * the actor provides an explicit layout management
     *   policy for its children; this flag will prevent Clutter from automatic
     *   queueing of relayout and will defer all layouting to the actor itself
     */
    NO_LAYOUT,
}
/**
 * Content repeat modes.
 * @bitfield 
 */
enum ContentRepeat {
    /**
     * No repeat
     */
    NONE,
    /**
     * Repeat the content on the X axis
     */
    X_AXIS,
    /**
     * Repeat the content on the Y axis
     */
    Y_AXIS,
    /**
     * Repeat the content on both axis
     */
    BOTH,
}
enum DebugFlag {
    MISC,
    ACTOR,
    TEXTURE,
    EVENT,
    PAINT,
    PANGO,
    BACKEND,
    SCHEDULER,
    SCRIPT,
    SHADER,
    MULTISTAGE,
    ANIMATION,
    LAYOUT,
    PICK,
    EVENTLOOP,
    CLIPPING,
    OOB_TRANSFORMS,
    FRAME_TIMINGS,
    DETAILED_TRACE,
}
enum DrawDebugFlag {
    DISABLE_SWAP_EVENTS,
    DISABLE_CLIPPED_REDRAWS,
    REDRAWS,
    PAINT_VOLUMES,
    DISABLE_CULLING,
    DISABLE_OFFSCREEN_REDIRECT,
    CONTINUOUS_REDRAW,
    PAINT_DEFORM_TILES,
    PAINT_DAMAGE_REGION,
    DISABLE_DYNAMIC_MAX_RENDER_TIME,
    PAINT_MAX_RENDER_TIME,
}
/**
 * Flags passed to the ‘paint’ or ‘pick’ method of #ClutterEffect.
 * @bitfield 
 */
enum EffectPaintFlags {
    /**
     * The actor or one of its children
     *   has queued a redraw before this paint. This implies that the effect
     *   should call clutter_actor_continue_paint() to chain to the next
     *   effect and can not cache any results from a previous paint.
     */
    ACTOR_DIRTY,
    /**
     * The effect should not be used
     *   on this frame, but it will be asked to paint the actor still.
     */
    BYPASS_EFFECT,
}
/**
 * Flags for the #ClutterEvent
 * @bitfield 
 */
enum EventFlags {
    /**
     * No flag set
     */
    NONE,
    /**
     * Synthetic event
     */
    FLAG_SYNTHETIC,
    FLAG_INPUT_METHOD,
    /**
     * Auto-repeated event
     */
    FLAG_REPEATED,
    FLAG_RELATIVE_MOTION,
    FLAG_GRAB_NOTIFY,
}
enum FrameInfoFlag {
    NONE,
    HW_CLOCK,
    ZERO_COPY,
    VSYNC,
}
enum GrabState {
    NONE,
    POINTER,
    KEYBOARD,
    ALL,
}
enum InputAxisFlags {
    NONE,
    X,
    Y,
    PRESSURE,
    XTILT,
    YTILT,
    WHEEL,
    DISTANCE,
    ROTATION,
    SLIDER,
}
enum InputCapabilities {
    NONE,
    POINTER,
    KEYBOARD,
    TOUCHPAD,
    TOUCH,
    TABLET_TOOL,
    TABLET_PAD,
}
enum InputContentHintFlags {
    COMPLETION,
    SPELLCHECK,
    AUTO_CAPITALIZATION,
    LOWERCASE,
    UPPERCASE,
    TITLECASE,
    HIDDEN_TEXT,
    SENSITIVE_DATA,
    LATIN,
    MULTILINE,
}
/**
 * Masks applied to a #ClutterEvent by modifiers.
 * 
 * Note that Clutter may add internal values to events which include
 * reserved values such as %CLUTTER_MODIFIER_RESERVED_13_MASK.  Your code
 * should preserve and ignore them.  You can use %CLUTTER_MODIFIER_MASK to
 * remove all reserved values.
 * @bitfield 
 */
enum ModifierType {
    /**
     * Mask applied by the Shift key
     */
    SHIFT_MASK,
    /**
     * Mask applied by the Caps Lock key
     */
    LOCK_MASK,
    /**
     * Mask applied by the Control key
     */
    CONTROL_MASK,
    /**
     * Mask applied by the first Mod key
     */
    MOD1_MASK,
    /**
     * Mask applied by the second Mod key
     */
    MOD2_MASK,
    /**
     * Mask applied by the third Mod key
     */
    MOD3_MASK,
    /**
     * Mask applied by the fourth Mod key
     */
    MOD4_MASK,
    /**
     * Mask applied by the fifth Mod key
     */
    MOD5_MASK,
    /**
     * Mask applied by the first pointer button
     */
    BUTTON1_MASK,
    /**
     * Mask applied by the second pointer button
     */
    BUTTON2_MASK,
    /**
     * Mask applied by the third pointer button
     */
    BUTTON3_MASK,
    /**
     * Mask applied by the fourth pointer button
     */
    BUTTON4_MASK,
    /**
     * Mask applied by the fifth pointer button
     */
    BUTTON5_MASK,
    MODIFIER_RESERVED_13_MASK,
    MODIFIER_RESERVED_14_MASK,
    MODIFIER_RESERVED_15_MASK,
    MODIFIER_RESERVED_16_MASK,
    MODIFIER_RESERVED_17_MASK,
    MODIFIER_RESERVED_18_MASK,
    MODIFIER_RESERVED_19_MASK,
    MODIFIER_RESERVED_20_MASK,
    MODIFIER_RESERVED_21_MASK,
    MODIFIER_RESERVED_22_MASK,
    MODIFIER_RESERVED_23_MASK,
    MODIFIER_RESERVED_24_MASK,
    MODIFIER_RESERVED_25_MASK,
    /**
     * Mask applied by the Super key
     */
    SUPER_MASK,
    /**
     * Mask applied by the Hyper key
     */
    HYPER_MASK,
    /**
     * Mask applied by the Meta key
     */
    META_MASK,
    MODIFIER_RESERVED_29_MASK,
    /**
     * Mask applied during release
     */
    RELEASE_MASK,
    /**
     * A mask covering all modifier types
     */
    MODIFIER_MASK,
}
/**
 * Possible flags to pass to clutter_actor_set_offscreen_redirect().
 * @bitfield 
 */
enum OffscreenRedirect {
    /**
     * Only redirect
     *   the actor if it is semi-transparent and its has_overlaps()
     *   virtual returns %TRUE.
     */
    AUTOMATIC_FOR_OPACITY,
    /**
     * Always redirect the actor to an
     *   offscreen buffer even if it is fully opaque.
     */
    ALWAYS,
    /**
     * Only redirect the actor if it is the
     *   most efficient thing to do based on its recent repaint behaviour. That
     *   means when its contents are changing less frequently than it's being used
     *   on stage.
     */
    ON_IDLE,
}
enum PaintFlag {
    NONE,
    NO_CURSORS,
    FORCE_CURSORS,
    CLEAR,
}
enum PickDebugFlag {
    PICKING,
}
/**
 * Pointer accessibility features applied to a ClutterInputDevice pointer.
 * @bitfield 
 */
enum PointerA11yFlags {
    SECONDARY_CLICK_ENABLED,
    DWELL_ENABLED,
}
/**
 * Flags to pass to clutter_threads_add_repaint_func_full().
 * @bitfield 
 */
enum RepaintFlags {
    /**
     * Run the repaint function prior to
     *   painting the stages
     */
    PRE_PAINT,
    /**
     * Run the repaint function after
     *   painting the stages
     */
    POST_PAINT,
}
/**
 * Flags used to notify the axes that were stopped in a #ClutterScrollEvent.
 * 
 * These can be used to trigger post-scroll effects like kinetic scrolling.6
 * @bitfield 
 */
enum ScrollFinishFlags {
    /**
     * no axis was stopped.
     */
    NONE,
    /**
     * The horizontal axis stopped.
     */
    HORIZONTAL,
    /**
     * The vertical axis stopped.
     */
    VERTICAL,
}
/**
 * Scroll modes.
 * @bitfield 
 */
enum ScrollMode {
    /**
     * Ignore scrolling
     */
    NONE,
    /**
     * Scroll only horizontally
     */
    HORIZONTALLY,
    /**
     * Scroll only vertically
     */
    VERTICALLY,
    /**
     * Scroll in both directions
     */
    BOTH,
}
/**
 * The main direction of the swipe gesture
 * @bitfield 
 */
enum SwipeDirection {
    /**
     * Upwards swipe gesture
     */
    UP,
    /**
     * Downwards swipe gesture
     */
    DOWN,
    /**
     * Leftwards swipe gesture
     */
    LEFT,
    /**
     * Rightwards swipe gesture
     */
    RIGHT,
}
/**
 * Flags for clutter_texture_set_from_rgb_data().
 * @bitfield 
 */
enum TextureFlags {
    /**
     * No flags
     */
    NONE,
    /**
     * Unused flag
     */
    RGB_FLAG_BGR,
    /**
     * Unused flag
     */
    RGB_FLAG_PREMULT,
    /**
     * Unused flag
     */
    YUV_FLAG_YUV2,
}
enum VirtualDeviceType {
    NONE,
    KEYBOARD,
    POINTER,
    TOUCHSCREEN,
}
/**
 * The middle button of a pointer device.
 */
const BUTTON_MIDDLE: number
/**
 * The primary button of a pointer device.
 * 
 * This is typically the left mouse button in a right-handed
 * mouse configuration.
 */
const BUTTON_PRIMARY: number
/**
 * The secondary button of a pointer device.
 * 
 * This is typically the right mouse button in a right-handed
 * mouse configuration.
 */
const BUTTON_SECONDARY: number
/**
 * Cogl (internal GL abstraction utility library) backend. Can be "gl" or
 * "gles" currently
 */
const COGL: string | null
const COORDINATE_EPSILON: number
/**
 * Default value for "now".
 */
const CURRENT_TIME: number
/**
 * Continues the propagation of an event; this macro should be
 * used in event-related signals.
 */
const EVENT_PROPAGATE: boolean
/**
 * Stops the propagation of an event; this macro should be used
 * in event-related signals.
 */
const EVENT_STOP: boolean
/**
 * GL Windowing system used
 */
const FLAVOUR: string | null
const KEY_0: number
const KEY_1: number
const KEY_2: number
const KEY_3: number
const KEY_3270_AltCursor: number
const KEY_3270_Attn: number
const KEY_3270_BackTab: number
const KEY_3270_ChangeScreen: number
const KEY_3270_Copy: number
const KEY_3270_CursorBlink: number
const KEY_3270_CursorSelect: number
const KEY_3270_DeleteWord: number
const KEY_3270_Duplicate: number
const KEY_3270_Enter: number
const KEY_3270_EraseEOF: number
const KEY_3270_EraseInput: number
const KEY_3270_ExSelect: number
const KEY_3270_FieldMark: number
const KEY_3270_Ident: number
const KEY_3270_Jump: number
const KEY_3270_KeyClick: number
const KEY_3270_Left2: number
const KEY_3270_PA1: number
const KEY_3270_PA2: number
const KEY_3270_PA3: number
const KEY_3270_Play: number
const KEY_3270_PrintScreen: number
const KEY_3270_Quit: number
const KEY_3270_Record: number
const KEY_3270_Reset: number
const KEY_3270_Right2: number
const KEY_3270_Rule: number
const KEY_3270_Setup: number
const KEY_3270_Test: number
const KEY_4: number
const KEY_5: number
const KEY_6: number
const KEY_7: number
const KEY_8: number
const KEY_9: number
const KEY_A: number
const KEY_AE: number
const KEY_Aacute: number
const KEY_Abelowdot: number
const KEY_Abreve: number
const KEY_Abreveacute: number
const KEY_Abrevebelowdot: number
const KEY_Abrevegrave: number
const KEY_Abrevehook: number
const KEY_Abrevetilde: number
const KEY_AccessX_Enable: number
const KEY_AccessX_Feedback_Enable: number
const KEY_Acircumflex: number
const KEY_Acircumflexacute: number
const KEY_Acircumflexbelowdot: number
const KEY_Acircumflexgrave: number
const KEY_Acircumflexhook: number
const KEY_Acircumflextilde: number
const KEY_AddFavorite: number
const KEY_Adiaeresis: number
const KEY_Agrave: number
const KEY_Ahook: number
const KEY_Alt_L: number
const KEY_Alt_R: number
const KEY_Amacron: number
const KEY_Aogonek: number
const KEY_ApplicationLeft: number
const KEY_ApplicationRight: number
const KEY_Arabic_0: number
const KEY_Arabic_1: number
const KEY_Arabic_2: number
const KEY_Arabic_3: number
const KEY_Arabic_4: number
const KEY_Arabic_5: number
const KEY_Arabic_6: number
const KEY_Arabic_7: number
const KEY_Arabic_8: number
const KEY_Arabic_9: number
const KEY_Arabic_ain: number
const KEY_Arabic_alef: number
const KEY_Arabic_alefmaksura: number
const KEY_Arabic_beh: number
const KEY_Arabic_comma: number
const KEY_Arabic_dad: number
const KEY_Arabic_dal: number
const KEY_Arabic_damma: number
const KEY_Arabic_dammatan: number
const KEY_Arabic_ddal: number
const KEY_Arabic_farsi_yeh: number
const KEY_Arabic_fatha: number
const KEY_Arabic_fathatan: number
const KEY_Arabic_feh: number
const KEY_Arabic_fullstop: number
const KEY_Arabic_gaf: number
const KEY_Arabic_ghain: number
const KEY_Arabic_ha: number
const KEY_Arabic_hah: number
const KEY_Arabic_hamza: number
const KEY_Arabic_hamza_above: number
const KEY_Arabic_hamza_below: number
const KEY_Arabic_hamzaonalef: number
const KEY_Arabic_hamzaonwaw: number
const KEY_Arabic_hamzaonyeh: number
const KEY_Arabic_hamzaunderalef: number
const KEY_Arabic_heh: number
const KEY_Arabic_heh_doachashmee: number
const KEY_Arabic_heh_goal: number
const KEY_Arabic_jeem: number
const KEY_Arabic_jeh: number
const KEY_Arabic_kaf: number
const KEY_Arabic_kasra: number
const KEY_Arabic_kasratan: number
const KEY_Arabic_keheh: number
const KEY_Arabic_khah: number
const KEY_Arabic_lam: number
const KEY_Arabic_madda_above: number
const KEY_Arabic_maddaonalef: number
const KEY_Arabic_meem: number
const KEY_Arabic_noon: number
const KEY_Arabic_noon_ghunna: number
const KEY_Arabic_peh: number
const KEY_Arabic_percent: number
const KEY_Arabic_qaf: number
const KEY_Arabic_question_mark: number
const KEY_Arabic_ra: number
const KEY_Arabic_rreh: number
const KEY_Arabic_sad: number
const KEY_Arabic_seen: number
const KEY_Arabic_semicolon: number
const KEY_Arabic_shadda: number
const KEY_Arabic_sheen: number
const KEY_Arabic_sukun: number
const KEY_Arabic_superscript_alef: number
const KEY_Arabic_switch: number
const KEY_Arabic_tah: number
const KEY_Arabic_tatweel: number
const KEY_Arabic_tcheh: number
const KEY_Arabic_teh: number
const KEY_Arabic_tehmarbuta: number
const KEY_Arabic_thal: number
const KEY_Arabic_theh: number
const KEY_Arabic_tteh: number
const KEY_Arabic_veh: number
const KEY_Arabic_waw: number
const KEY_Arabic_yeh: number
const KEY_Arabic_yeh_baree: number
const KEY_Arabic_zah: number
const KEY_Arabic_zain: number
const KEY_Aring: number
const KEY_Armenian_AT: number
const KEY_Armenian_AYB: number
const KEY_Armenian_BEN: number
const KEY_Armenian_CHA: number
const KEY_Armenian_DA: number
const KEY_Armenian_DZA: number
const KEY_Armenian_E: number
const KEY_Armenian_FE: number
const KEY_Armenian_GHAT: number
const KEY_Armenian_GIM: number
const KEY_Armenian_HI: number
const KEY_Armenian_HO: number
const KEY_Armenian_INI: number
const KEY_Armenian_JE: number
const KEY_Armenian_KE: number
const KEY_Armenian_KEN: number
const KEY_Armenian_KHE: number
const KEY_Armenian_LYUN: number
const KEY_Armenian_MEN: number
const KEY_Armenian_NU: number
const KEY_Armenian_O: number
const KEY_Armenian_PE: number
const KEY_Armenian_PYUR: number
const KEY_Armenian_RA: number
const KEY_Armenian_RE: number
const KEY_Armenian_SE: number
const KEY_Armenian_SHA: number
const KEY_Armenian_TCHE: number
const KEY_Armenian_TO: number
const KEY_Armenian_TSA: number
const KEY_Armenian_TSO: number
const KEY_Armenian_TYUN: number
const KEY_Armenian_VEV: number
const KEY_Armenian_VO: number
const KEY_Armenian_VYUN: number
const KEY_Armenian_YECH: number
const KEY_Armenian_ZA: number
const KEY_Armenian_ZHE: number
const KEY_Armenian_accent: number
const KEY_Armenian_amanak: number
const KEY_Armenian_apostrophe: number
const KEY_Armenian_at: number
const KEY_Armenian_ayb: number
const KEY_Armenian_ben: number
const KEY_Armenian_but: number
const KEY_Armenian_cha: number
const KEY_Armenian_da: number
const KEY_Armenian_dza: number
const KEY_Armenian_e: number
const KEY_Armenian_exclam: number
const KEY_Armenian_fe: number
const KEY_Armenian_full_stop: number
const KEY_Armenian_ghat: number
const KEY_Armenian_gim: number
const KEY_Armenian_hi: number
const KEY_Armenian_ho: number
const KEY_Armenian_hyphen: number
const KEY_Armenian_ini: number
const KEY_Armenian_je: number
const KEY_Armenian_ke: number
const KEY_Armenian_ken: number
const KEY_Armenian_khe: number
const KEY_Armenian_ligature_ew: number
const KEY_Armenian_lyun: number
const KEY_Armenian_men: number
const KEY_Armenian_nu: number
const KEY_Armenian_o: number
const KEY_Armenian_paruyk: number
const KEY_Armenian_pe: number
const KEY_Armenian_pyur: number
const KEY_Armenian_question: number
const KEY_Armenian_ra: number
const KEY_Armenian_re: number
const KEY_Armenian_se: number
const KEY_Armenian_separation_mark: number
const KEY_Armenian_sha: number
const KEY_Armenian_shesht: number
const KEY_Armenian_tche: number
const KEY_Armenian_to: number
const KEY_Armenian_tsa: number
const KEY_Armenian_tso: number
const KEY_Armenian_tyun: number
const KEY_Armenian_verjaket: number
const KEY_Armenian_vev: number
const KEY_Armenian_vo: number
const KEY_Armenian_vyun: number
const KEY_Armenian_yech: number
const KEY_Armenian_yentamna: number
const KEY_Armenian_za: number
const KEY_Armenian_zhe: number
const KEY_Atilde: number
const KEY_AudibleBell_Enable: number
const KEY_AudioCycleTrack: number
const KEY_AudioForward: number
const KEY_AudioLowerVolume: number
const KEY_AudioMedia: number
const KEY_AudioMicMute: number
const KEY_AudioMute: number
const KEY_AudioNext: number
const KEY_AudioPause: number
const KEY_AudioPlay: number
const KEY_AudioPrev: number
const KEY_AudioRaiseVolume: number
const KEY_AudioRandomPlay: number
const KEY_AudioRecord: number
const KEY_AudioRepeat: number
const KEY_AudioRewind: number
const KEY_AudioStop: number
const KEY_Away: number
const KEY_B: number
const KEY_Babovedot: number
const KEY_Back: number
const KEY_BackForward: number
const KEY_BackSpace: number
const KEY_Battery: number
const KEY_Begin: number
const KEY_Blue: number
const KEY_Bluetooth: number
const KEY_Book: number
const KEY_BounceKeys_Enable: number
const KEY_Break: number
const KEY_BrightnessAdjust: number
const KEY_Byelorussian_SHORTU: number
const KEY_Byelorussian_shortu: number
const KEY_C: number
const KEY_CD: number
const KEY_CH: number
const KEY_C_H: number
const KEY_C_h: number
const KEY_Cabovedot: number
const KEY_Cacute: number
const KEY_Calculator: number
const KEY_Calendar: number
const KEY_Cancel: number
const KEY_Caps_Lock: number
const KEY_Ccaron: number
const KEY_Ccedilla: number
const KEY_Ccircumflex: number
const KEY_Ch: number
const KEY_Clear: number
const KEY_ClearGrab: number
const KEY_Close: number
const KEY_Codeinput: number
const KEY_ColonSign: number
const KEY_Community: number
const KEY_ContrastAdjust: number
const KEY_Control_L: number
const KEY_Control_R: number
const KEY_Copy: number
const KEY_CruzeiroSign: number
const KEY_Cut: number
const KEY_CycleAngle: number
const KEY_Cyrillic_A: number
const KEY_Cyrillic_BE: number
const KEY_Cyrillic_CHE: number
const KEY_Cyrillic_CHE_descender: number
const KEY_Cyrillic_CHE_vertstroke: number
const KEY_Cyrillic_DE: number
const KEY_Cyrillic_DZHE: number
const KEY_Cyrillic_E: number
const KEY_Cyrillic_EF: number
const KEY_Cyrillic_EL: number
const KEY_Cyrillic_EM: number
const KEY_Cyrillic_EN: number
const KEY_Cyrillic_EN_descender: number
const KEY_Cyrillic_ER: number
const KEY_Cyrillic_ES: number
const KEY_Cyrillic_GHE: number
const KEY_Cyrillic_GHE_bar: number
const KEY_Cyrillic_HA: number
const KEY_Cyrillic_HARDSIGN: number
const KEY_Cyrillic_HA_descender: number
const KEY_Cyrillic_I: number
const KEY_Cyrillic_IE: number
const KEY_Cyrillic_IO: number
const KEY_Cyrillic_I_macron: number
const KEY_Cyrillic_JE: number
const KEY_Cyrillic_KA: number
const KEY_Cyrillic_KA_descender: number
const KEY_Cyrillic_KA_vertstroke: number
const KEY_Cyrillic_LJE: number
const KEY_Cyrillic_NJE: number
const KEY_Cyrillic_O: number
const KEY_Cyrillic_O_bar: number
const KEY_Cyrillic_PE: number
const KEY_Cyrillic_SCHWA: number
const KEY_Cyrillic_SHA: number
const KEY_Cyrillic_SHCHA: number
const KEY_Cyrillic_SHHA: number
const KEY_Cyrillic_SHORTI: number
const KEY_Cyrillic_SOFTSIGN: number
const KEY_Cyrillic_TE: number
const KEY_Cyrillic_TSE: number
const KEY_Cyrillic_U: number
const KEY_Cyrillic_U_macron: number
const KEY_Cyrillic_U_straight: number
const KEY_Cyrillic_U_straight_bar: number
const KEY_Cyrillic_VE: number
const KEY_Cyrillic_YA: number
const KEY_Cyrillic_YERU: number
const KEY_Cyrillic_YU: number
const KEY_Cyrillic_ZE: number
const KEY_Cyrillic_ZHE: number
const KEY_Cyrillic_ZHE_descender: number
const KEY_Cyrillic_a: number
const KEY_Cyrillic_be: number
const KEY_Cyrillic_che: number
const KEY_Cyrillic_che_descender: number
const KEY_Cyrillic_che_vertstroke: number
const KEY_Cyrillic_de: number
const KEY_Cyrillic_dzhe: number
const KEY_Cyrillic_e: number
const KEY_Cyrillic_ef: number
const KEY_Cyrillic_el: number
const KEY_Cyrillic_em: number
const KEY_Cyrillic_en: number
const KEY_Cyrillic_en_descender: number
const KEY_Cyrillic_er: number
const KEY_Cyrillic_es: number
const KEY_Cyrillic_ghe: number
const KEY_Cyrillic_ghe_bar: number
const KEY_Cyrillic_ha: number
const KEY_Cyrillic_ha_descender: number
const KEY_Cyrillic_hardsign: number
const KEY_Cyrillic_i: number
const KEY_Cyrillic_i_macron: number
const KEY_Cyrillic_ie: number
const KEY_Cyrillic_io: number
const KEY_Cyrillic_je: number
const KEY_Cyrillic_ka: number
const KEY_Cyrillic_ka_descender: number
const KEY_Cyrillic_ka_vertstroke: number
const KEY_Cyrillic_lje: number
const KEY_Cyrillic_nje: number
const KEY_Cyrillic_o: number
const KEY_Cyrillic_o_bar: number
const KEY_Cyrillic_pe: number
const KEY_Cyrillic_schwa: number
const KEY_Cyrillic_sha: number
const KEY_Cyrillic_shcha: number
const KEY_Cyrillic_shha: number
const KEY_Cyrillic_shorti: number
const KEY_Cyrillic_softsign: number
const KEY_Cyrillic_te: number
const KEY_Cyrillic_tse: number
const KEY_Cyrillic_u: number
const KEY_Cyrillic_u_macron: number
const KEY_Cyrillic_u_straight: number
const KEY_Cyrillic_u_straight_bar: number
const KEY_Cyrillic_ve: number
const KEY_Cyrillic_ya: number
const KEY_Cyrillic_yeru: number
const KEY_Cyrillic_yu: number
const KEY_Cyrillic_ze: number
const KEY_Cyrillic_zhe: number
const KEY_Cyrillic_zhe_descender: number
const KEY_D: number
const KEY_DOS: number
const KEY_Dabovedot: number
const KEY_Dcaron: number
const KEY_Delete: number
const KEY_Display: number
const KEY_Documents: number
const KEY_DongSign: number
const KEY_Down: number
const KEY_Dstroke: number
const KEY_E: number
const KEY_ENG: number
const KEY_ETH: number
const KEY_EZH: number
const KEY_Eabovedot: number
const KEY_Eacute: number
const KEY_Ebelowdot: number
const KEY_Ecaron: number
const KEY_Ecircumflex: number
const KEY_Ecircumflexacute: number
const KEY_Ecircumflexbelowdot: number
const KEY_Ecircumflexgrave: number
const KEY_Ecircumflexhook: number
const KEY_Ecircumflextilde: number
const KEY_EcuSign: number
const KEY_Ediaeresis: number
const KEY_Egrave: number
const KEY_Ehook: number
const KEY_Eisu_Shift: number
const KEY_Eisu_toggle: number
const KEY_Eject: number
const KEY_Emacron: number
const KEY_End: number
const KEY_Eogonek: number
const KEY_Escape: number
const KEY_Eth: number
const KEY_Etilde: number
const KEY_EuroSign: number
const KEY_Excel: number
const KEY_Execute: number
const KEY_Explorer: number
const KEY_F: number
const KEY_F1: number
const KEY_F10: number
const KEY_F11: number
const KEY_F12: number
const KEY_F13: number
const KEY_F14: number
const KEY_F15: number
const KEY_F16: number
const KEY_F17: number
const KEY_F18: number
const KEY_F19: number
const KEY_F2: number
const KEY_F20: number
const KEY_F21: number
const KEY_F22: number
const KEY_F23: number
const KEY_F24: number
const KEY_F25: number
const KEY_F26: number
const KEY_F27: number
const KEY_F28: number
const KEY_F29: number
const KEY_F3: number
const KEY_F30: number
const KEY_F31: number
const KEY_F32: number
const KEY_F33: number
const KEY_F34: number
const KEY_F35: number
const KEY_F4: number
const KEY_F5: number
const KEY_F6: number
const KEY_F7: number
const KEY_F8: number
const KEY_F9: number
const KEY_FFrancSign: number
const KEY_Fabovedot: number
const KEY_Farsi_0: number
const KEY_Farsi_1: number
const KEY_Farsi_2: number
const KEY_Farsi_3: number
const KEY_Farsi_4: number
const KEY_Farsi_5: number
const KEY_Farsi_6: number
const KEY_Farsi_7: number
const KEY_Farsi_8: number
const KEY_Farsi_9: number
const KEY_Farsi_yeh: number
const KEY_Favorites: number
const KEY_Finance: number
const KEY_Find: number
const KEY_First_Virtual_Screen: number
const KEY_Forward: number
const KEY_FrameBack: number
const KEY_FrameForward: number
const KEY_G: number
const KEY_Gabovedot: number
const KEY_Game: number
const KEY_Gbreve: number
const KEY_Gcaron: number
const KEY_Gcedilla: number
const KEY_Gcircumflex: number
const KEY_Georgian_an: number
const KEY_Georgian_ban: number
const KEY_Georgian_can: number
const KEY_Georgian_char: number
const KEY_Georgian_chin: number
const KEY_Georgian_cil: number
const KEY_Georgian_don: number
const KEY_Georgian_en: number
const KEY_Georgian_fi: number
const KEY_Georgian_gan: number
const KEY_Georgian_ghan: number
const KEY_Georgian_hae: number
const KEY_Georgian_har: number
const KEY_Georgian_he: number
const KEY_Georgian_hie: number
const KEY_Georgian_hoe: number
const KEY_Georgian_in: number
const KEY_Georgian_jhan: number
const KEY_Georgian_jil: number
const KEY_Georgian_kan: number
const KEY_Georgian_khar: number
const KEY_Georgian_las: number
const KEY_Georgian_man: number
const KEY_Georgian_nar: number
const KEY_Georgian_on: number
const KEY_Georgian_par: number
const KEY_Georgian_phar: number
const KEY_Georgian_qar: number
const KEY_Georgian_rae: number
const KEY_Georgian_san: number
const KEY_Georgian_shin: number
const KEY_Georgian_tan: number
const KEY_Georgian_tar: number
const KEY_Georgian_un: number
const KEY_Georgian_vin: number
const KEY_Georgian_we: number
const KEY_Georgian_xan: number
const KEY_Georgian_zen: number
const KEY_Georgian_zhar: number
const KEY_Go: number
const KEY_Greek_ALPHA: number
const KEY_Greek_ALPHAaccent: number
const KEY_Greek_BETA: number
const KEY_Greek_CHI: number
const KEY_Greek_DELTA: number
const KEY_Greek_EPSILON: number
const KEY_Greek_EPSILONaccent: number
const KEY_Greek_ETA: number
const KEY_Greek_ETAaccent: number
const KEY_Greek_GAMMA: number
const KEY_Greek_IOTA: number
const KEY_Greek_IOTAaccent: number
const KEY_Greek_IOTAdiaeresis: number
const KEY_Greek_IOTAdieresis: number
const KEY_Greek_KAPPA: number
const KEY_Greek_LAMBDA: number
const KEY_Greek_LAMDA: number
const KEY_Greek_MU: number
const KEY_Greek_NU: number
const KEY_Greek_OMEGA: number
const KEY_Greek_OMEGAaccent: number
const KEY_Greek_OMICRON: number
const KEY_Greek_OMICRONaccent: number
const KEY_Greek_PHI: number
const KEY_Greek_PI: number
const KEY_Greek_PSI: number
const KEY_Greek_RHO: number
const KEY_Greek_SIGMA: number
const KEY_Greek_TAU: number
const KEY_Greek_THETA: number
const KEY_Greek_UPSILON: number
const KEY_Greek_UPSILONaccent: number
const KEY_Greek_UPSILONdieresis: number
const KEY_Greek_XI: number
const KEY_Greek_ZETA: number
const KEY_Greek_accentdieresis: number
const KEY_Greek_alpha: number
const KEY_Greek_alphaaccent: number
const KEY_Greek_beta: number
const KEY_Greek_chi: number
const KEY_Greek_delta: number
const KEY_Greek_epsilon: number
const KEY_Greek_epsilonaccent: number
const KEY_Greek_eta: number
const KEY_Greek_etaaccent: number
const KEY_Greek_finalsmallsigma: number
const KEY_Greek_gamma: number
const KEY_Greek_horizbar: number
const KEY_Greek_iota: number
const KEY_Greek_iotaaccent: number
const KEY_Greek_iotaaccentdieresis: number
const KEY_Greek_iotadieresis: number
const KEY_Greek_kappa: number
const KEY_Greek_lambda: number
const KEY_Greek_lamda: number
const KEY_Greek_mu: number
const KEY_Greek_nu: number
const KEY_Greek_omega: number
const KEY_Greek_omegaaccent: number
const KEY_Greek_omicron: number
const KEY_Greek_omicronaccent: number
const KEY_Greek_phi: number
const KEY_Greek_pi: number
const KEY_Greek_psi: number
const KEY_Greek_rho: number
const KEY_Greek_sigma: number
const KEY_Greek_switch: number
const KEY_Greek_tau: number
const KEY_Greek_theta: number
const KEY_Greek_upsilon: number
const KEY_Greek_upsilonaccent: number
const KEY_Greek_upsilonaccentdieresis: number
const KEY_Greek_upsilondieresis: number
const KEY_Greek_xi: number
const KEY_Greek_zeta: number
const KEY_Green: number
const KEY_H: number
const KEY_Hangul: number
const KEY_Hangul_A: number
const KEY_Hangul_AE: number
const KEY_Hangul_AraeA: number
const KEY_Hangul_AraeAE: number
const KEY_Hangul_Banja: number
const KEY_Hangul_Cieuc: number
const KEY_Hangul_Codeinput: number
const KEY_Hangul_Dikeud: number
const KEY_Hangul_E: number
const KEY_Hangul_EO: number
const KEY_Hangul_EU: number
const KEY_Hangul_End: number
const KEY_Hangul_Hanja: number
const KEY_Hangul_Hieuh: number
const KEY_Hangul_I: number
const KEY_Hangul_Ieung: number
const KEY_Hangul_J_Cieuc: number
const KEY_Hangul_J_Dikeud: number
const KEY_Hangul_J_Hieuh: number
const KEY_Hangul_J_Ieung: number
const KEY_Hangul_J_Jieuj: number
const KEY_Hangul_J_Khieuq: number
const KEY_Hangul_J_Kiyeog: number
const KEY_Hangul_J_KiyeogSios: number
const KEY_Hangul_J_KkogjiDalrinIeung: number
const KEY_Hangul_J_Mieum: number
const KEY_Hangul_J_Nieun: number
const KEY_Hangul_J_NieunHieuh: number
const KEY_Hangul_J_NieunJieuj: number
const KEY_Hangul_J_PanSios: number
const KEY_Hangul_J_Phieuf: number
const KEY_Hangul_J_Pieub: number
const KEY_Hangul_J_PieubSios: number
const KEY_Hangul_J_Rieul: number
const KEY_Hangul_J_RieulHieuh: number
const KEY_Hangul_J_RieulKiyeog: number
const KEY_Hangul_J_RieulMieum: number
const KEY_Hangul_J_RieulPhieuf: number
const KEY_Hangul_J_RieulPieub: number
const KEY_Hangul_J_RieulSios: number
const KEY_Hangul_J_RieulTieut: number
const KEY_Hangul_J_Sios: number
const KEY_Hangul_J_SsangKiyeog: number
const KEY_Hangul_J_SsangSios: number
const KEY_Hangul_J_Tieut: number
const KEY_Hangul_J_YeorinHieuh: number
const KEY_Hangul_Jamo: number
const KEY_Hangul_Jeonja: number
const KEY_Hangul_Jieuj: number
const KEY_Hangul_Khieuq: number
const KEY_Hangul_Kiyeog: number
const KEY_Hangul_KiyeogSios: number
const KEY_Hangul_KkogjiDalrinIeung: number
const KEY_Hangul_Mieum: number
const KEY_Hangul_MultipleCandidate: number
const KEY_Hangul_Nieun: number
const KEY_Hangul_NieunHieuh: number
const KEY_Hangul_NieunJieuj: number
const KEY_Hangul_O: number
const KEY_Hangul_OE: number
const KEY_Hangul_PanSios: number
const KEY_Hangul_Phieuf: number
const KEY_Hangul_Pieub: number
const KEY_Hangul_PieubSios: number
const KEY_Hangul_PostHanja: number
const KEY_Hangul_PreHanja: number
const KEY_Hangul_PreviousCandidate: number
const KEY_Hangul_Rieul: number
const KEY_Hangul_RieulHieuh: number
const KEY_Hangul_RieulKiyeog: number
const KEY_Hangul_RieulMieum: number
const KEY_Hangul_RieulPhieuf: number
const KEY_Hangul_RieulPieub: number
const KEY_Hangul_RieulSios: number
const KEY_Hangul_RieulTieut: number
const KEY_Hangul_RieulYeorinHieuh: number
const KEY_Hangul_Romaja: number
const KEY_Hangul_SingleCandidate: number
const KEY_Hangul_Sios: number
const KEY_Hangul_Special: number
const KEY_Hangul_SsangDikeud: number
const KEY_Hangul_SsangJieuj: number
const KEY_Hangul_SsangKiyeog: number
const KEY_Hangul_SsangPieub: number
const KEY_Hangul_SsangSios: number
const KEY_Hangul_Start: number
const KEY_Hangul_SunkyeongeumMieum: number
const KEY_Hangul_SunkyeongeumPhieuf: number
const KEY_Hangul_SunkyeongeumPieub: number
const KEY_Hangul_Tieut: number
const KEY_Hangul_U: number
const KEY_Hangul_WA: number
const KEY_Hangul_WAE: number
const KEY_Hangul_WE: number
const KEY_Hangul_WEO: number
const KEY_Hangul_WI: number
const KEY_Hangul_YA: number
const KEY_Hangul_YAE: number
const KEY_Hangul_YE: number
const KEY_Hangul_YEO: number
const KEY_Hangul_YI: number
const KEY_Hangul_YO: number
const KEY_Hangul_YU: number
const KEY_Hangul_YeorinHieuh: number
const KEY_Hangul_switch: number
const KEY_Hankaku: number
const KEY_Hcircumflex: number
const KEY_Hebrew_switch: number
const KEY_Help: number
const KEY_Henkan: number
const KEY_Henkan_Mode: number
const KEY_Hibernate: number
const KEY_Hiragana: number
const KEY_Hiragana_Katakana: number
const KEY_History: number
const KEY_Home: number
const KEY_HomePage: number
const KEY_HotLinks: number
const KEY_Hstroke: number
const KEY_Hyper_L: number
const KEY_Hyper_R: number
const KEY_I: number
const KEY_ISO_Center_Object: number
const KEY_ISO_Continuous_Underline: number
const KEY_ISO_Discontinuous_Underline: number
const KEY_ISO_Emphasize: number
const KEY_ISO_Enter: number
const KEY_ISO_Fast_Cursor_Down: number
const KEY_ISO_Fast_Cursor_Left: number
const KEY_ISO_Fast_Cursor_Right: number
const KEY_ISO_Fast_Cursor_Up: number
const KEY_ISO_First_Group: number
const KEY_ISO_First_Group_Lock: number
const KEY_ISO_Group_Latch: number
const KEY_ISO_Group_Lock: number
const KEY_ISO_Group_Shift: number
const KEY_ISO_Last_Group: number
const KEY_ISO_Last_Group_Lock: number
const KEY_ISO_Left_Tab: number
const KEY_ISO_Level2_Latch: number
const KEY_ISO_Level3_Latch: number
const KEY_ISO_Level3_Lock: number
const KEY_ISO_Level3_Shift: number
const KEY_ISO_Level5_Latch: number
const KEY_ISO_Level5_Lock: number
const KEY_ISO_Level5_Shift: number
const KEY_ISO_Lock: number
const KEY_ISO_Move_Line_Down: number
const KEY_ISO_Move_Line_Up: number
const KEY_ISO_Next_Group: number
const KEY_ISO_Next_Group_Lock: number
const KEY_ISO_Partial_Line_Down: number
const KEY_ISO_Partial_Line_Up: number
const KEY_ISO_Partial_Space_Left: number
const KEY_ISO_Partial_Space_Right: number
const KEY_ISO_Prev_Group: number
const KEY_ISO_Prev_Group_Lock: number
const KEY_ISO_Release_Both_Margins: number
const KEY_ISO_Release_Margin_Left: number
const KEY_ISO_Release_Margin_Right: number
const KEY_ISO_Set_Margin_Left: number
const KEY_ISO_Set_Margin_Right: number
const KEY_Iabovedot: number
const KEY_Iacute: number
const KEY_Ibelowdot: number
const KEY_Ibreve: number
const KEY_Icircumflex: number
const KEY_Idiaeresis: number
const KEY_Igrave: number
const KEY_Ihook: number
const KEY_Imacron: number
const KEY_Insert: number
const KEY_Iogonek: number
const KEY_Itilde: number
const KEY_J: number
const KEY_Jcircumflex: number
const KEY_K: number
const KEY_KP_0: number
const KEY_KP_1: number
const KEY_KP_2: number
const KEY_KP_3: number
const KEY_KP_4: number
const KEY_KP_5: number
const KEY_KP_6: number
const KEY_KP_7: number
const KEY_KP_8: number
const KEY_KP_9: number
const KEY_KP_Add: number
const KEY_KP_Begin: number
const KEY_KP_Decimal: number
const KEY_KP_Delete: number
const KEY_KP_Divide: number
const KEY_KP_Down: number
const KEY_KP_End: number
const KEY_KP_Enter: number
const KEY_KP_Equal: number
const KEY_KP_F1: number
const KEY_KP_F2: number
const KEY_KP_F3: number
const KEY_KP_F4: number
const KEY_KP_Home: number
const KEY_KP_Insert: number
const KEY_KP_Left: number
const KEY_KP_Multiply: number
const KEY_KP_Next: number
const KEY_KP_Page_Down: number
const KEY_KP_Page_Up: number
const KEY_KP_Prior: number
const KEY_KP_Right: number
const KEY_KP_Separator: number
const KEY_KP_Space: number
const KEY_KP_Subtract: number
const KEY_KP_Tab: number
const KEY_KP_Up: number
const KEY_Kana_Lock: number
const KEY_Kana_Shift: number
const KEY_Kanji: number
const KEY_Kanji_Bangou: number
const KEY_Katakana: number
const KEY_KbdBrightnessDown: number
const KEY_KbdBrightnessUp: number
const KEY_KbdLightOnOff: number
const KEY_Kcedilla: number
const KEY_Korean_Won: number
const KEY_L: number
const KEY_L1: number
const KEY_L10: number
const KEY_L2: number
const KEY_L3: number
const KEY_L4: number
const KEY_L5: number
const KEY_L6: number
const KEY_L7: number
const KEY_L8: number
const KEY_L9: number
const KEY_Lacute: number
const KEY_Last_Virtual_Screen: number
const KEY_Launch0: number
const KEY_Launch1: number
const KEY_Launch2: number
const KEY_Launch3: number
const KEY_Launch4: number
const KEY_Launch5: number
const KEY_Launch6: number
const KEY_Launch7: number
const KEY_Launch8: number
const KEY_Launch9: number
const KEY_LaunchA: number
const KEY_LaunchB: number
const KEY_LaunchC: number
const KEY_LaunchD: number
const KEY_LaunchE: number
const KEY_LaunchF: number
const KEY_Lbelowdot: number
const KEY_Lcaron: number
const KEY_Lcedilla: number
const KEY_Left: number
const KEY_LightBulb: number
const KEY_Linefeed: number
const KEY_LiraSign: number
const KEY_LogGrabInfo: number
const KEY_LogOff: number
const KEY_LogWindowTree: number
const KEY_Lstroke: number
const KEY_M: number
const KEY_Mabovedot: number
const KEY_Macedonia_DSE: number
const KEY_Macedonia_GJE: number
const KEY_Macedonia_KJE: number
const KEY_Macedonia_dse: number
const KEY_Macedonia_gje: number
const KEY_Macedonia_kje: number
const KEY_Mae_Koho: number
const KEY_Mail: number
const KEY_MailForward: number
const KEY_Market: number
const KEY_Massyo: number
const KEY_Meeting: number
const KEY_Memo: number
const KEY_Menu: number
const KEY_MenuKB: number
const KEY_MenuPB: number
const KEY_Messenger: number
const KEY_Meta_L: number
const KEY_Meta_R: number
const KEY_MillSign: number
const KEY_ModeLock: number
const KEY_Mode_switch: number
const KEY_MonBrightnessDown: number
const KEY_MonBrightnessUp: number
const KEY_MouseKeys_Accel_Enable: number
const KEY_MouseKeys_Enable: number
const KEY_Muhenkan: number
const KEY_Multi_key: number
const KEY_MultipleCandidate: number
const KEY_Music: number
const KEY_MyComputer: number
const KEY_MySites: number
const KEY_N: number
const KEY_Nacute: number
const KEY_NairaSign: number
const KEY_Ncaron: number
const KEY_Ncedilla: number
const KEY_New: number
const KEY_NewSheqelSign: number
const KEY_News: number
const KEY_Next: number
const KEY_Next_VMode: number
const KEY_Next_Virtual_Screen: number
const KEY_Ntilde: number
const KEY_Num_Lock: number
const KEY_O: number
const KEY_OE: number
const KEY_Oacute: number
const KEY_Obarred: number
const KEY_Obelowdot: number
const KEY_Ocaron: number
const KEY_Ocircumflex: number
const KEY_Ocircumflexacute: number
const KEY_Ocircumflexbelowdot: number
const KEY_Ocircumflexgrave: number
const KEY_Ocircumflexhook: number
const KEY_Ocircumflextilde: number
const KEY_Odiaeresis: number
const KEY_Odoubleacute: number
const KEY_OfficeHome: number
const KEY_Ograve: number
const KEY_Ohook: number
const KEY_Ohorn: number
const KEY_Ohornacute: number
const KEY_Ohornbelowdot: number
const KEY_Ohorngrave: number
const KEY_Ohornhook: number
const KEY_Ohorntilde: number
const KEY_Omacron: number
const KEY_Ooblique: number
const KEY_Open: number
const KEY_OpenURL: number
const KEY_Option: number
const KEY_Oslash: number
const KEY_Otilde: number
const KEY_Overlay1_Enable: number
const KEY_Overlay2_Enable: number
const KEY_P: number
const KEY_Pabovedot: number
const KEY_Page_Down: number
const KEY_Page_Up: number
const KEY_Paste: number
const KEY_Pause: number
const KEY_PesetaSign: number
const KEY_Phone: number
const KEY_Pictures: number
const KEY_Pointer_Accelerate: number
const KEY_Pointer_Button1: number
const KEY_Pointer_Button2: number
const KEY_Pointer_Button3: number
const KEY_Pointer_Button4: number
const KEY_Pointer_Button5: number
const KEY_Pointer_Button_Dflt: number
const KEY_Pointer_DblClick1: number
const KEY_Pointer_DblClick2: number
const KEY_Pointer_DblClick3: number
const KEY_Pointer_DblClick4: number
const KEY_Pointer_DblClick5: number
const KEY_Pointer_DblClick_Dflt: number
const KEY_Pointer_DfltBtnNext: number
const KEY_Pointer_DfltBtnPrev: number
const KEY_Pointer_Down: number
const KEY_Pointer_DownLeft: number
const KEY_Pointer_DownRight: number
const KEY_Pointer_Drag1: number
const KEY_Pointer_Drag2: number
const KEY_Pointer_Drag3: number
const KEY_Pointer_Drag4: number
const KEY_Pointer_Drag5: number
const KEY_Pointer_Drag_Dflt: number
const KEY_Pointer_EnableKeys: number
const KEY_Pointer_Left: number
const KEY_Pointer_Right: number
const KEY_Pointer_Up: number
const KEY_Pointer_UpLeft: number
const KEY_Pointer_UpRight: number
const KEY_PowerDown: number
const KEY_PowerOff: number
const KEY_Prev_VMode: number
const KEY_Prev_Virtual_Screen: number
const KEY_PreviousCandidate: number
const KEY_Print: number
const KEY_Prior: number
const KEY_Q: number
const KEY_R: number
const KEY_R1: number
const KEY_R10: number
const KEY_R11: number
const KEY_R12: number
const KEY_R13: number
const KEY_R14: number
const KEY_R15: number
const KEY_R2: number
const KEY_R3: number
const KEY_R4: number
const KEY_R5: number
const KEY_R6: number
const KEY_R7: number
const KEY_R8: number
const KEY_R9: number
const KEY_Racute: number
const KEY_Rcaron: number
const KEY_Rcedilla: number
const KEY_Red: number
const KEY_Redo: number
const KEY_Refresh: number
const KEY_Reload: number
const KEY_RepeatKeys_Enable: number
const KEY_Reply: number
const KEY_Return: number
const KEY_Right: number
const KEY_RockerDown: number
const KEY_RockerEnter: number
const KEY_RockerUp: number
const KEY_Romaji: number
const KEY_RotateWindows: number
const KEY_RotationKB: number
const KEY_RotationPB: number
const KEY_RupeeSign: number
const KEY_S: number
const KEY_SCHWA: number
const KEY_Sabovedot: number
const KEY_Sacute: number
const KEY_Save: number
const KEY_Scaron: number
const KEY_Scedilla: number
const KEY_Scircumflex: number
const KEY_ScreenSaver: number
const KEY_ScrollClick: number
const KEY_ScrollDown: number
const KEY_ScrollUp: number
const KEY_Scroll_Lock: number
const KEY_Search: number
const KEY_Select: number
const KEY_SelectButton: number
const KEY_Send: number
const KEY_Serbian_DJE: number
const KEY_Serbian_DZE: number
const KEY_Serbian_JE: number
const KEY_Serbian_LJE: number
const KEY_Serbian_NJE: number
const KEY_Serbian_TSHE: number
const KEY_Serbian_dje: number
const KEY_Serbian_dze: number
const KEY_Serbian_je: number
const KEY_Serbian_lje: number
const KEY_Serbian_nje: number
const KEY_Serbian_tshe: number
const KEY_Shift_L: number
const KEY_Shift_Lock: number
const KEY_Shift_R: number
const KEY_Shop: number
const KEY_SingleCandidate: number
const KEY_Sinh_a: number
const KEY_Sinh_aa: number
const KEY_Sinh_aa2: number
const KEY_Sinh_ae: number
const KEY_Sinh_ae2: number
const KEY_Sinh_aee: number
const KEY_Sinh_aee2: number
const KEY_Sinh_ai: number
const KEY_Sinh_ai2: number
const KEY_Sinh_al: number
const KEY_Sinh_au: number
const KEY_Sinh_au2: number
const KEY_Sinh_ba: number
const KEY_Sinh_bha: number
const KEY_Sinh_ca: number
const KEY_Sinh_cha: number
const KEY_Sinh_dda: number
const KEY_Sinh_ddha: number
const KEY_Sinh_dha: number
const KEY_Sinh_dhha: number
const KEY_Sinh_e: number
const KEY_Sinh_e2: number
const KEY_Sinh_ee: number
const KEY_Sinh_ee2: number
const KEY_Sinh_fa: number
const KEY_Sinh_ga: number
const KEY_Sinh_gha: number
const KEY_Sinh_h2: number
const KEY_Sinh_ha: number
const KEY_Sinh_i: number
const KEY_Sinh_i2: number
const KEY_Sinh_ii: number
const KEY_Sinh_ii2: number
const KEY_Sinh_ja: number
const KEY_Sinh_jha: number
const KEY_Sinh_jnya: number
const KEY_Sinh_ka: number
const KEY_Sinh_kha: number
const KEY_Sinh_kunddaliya: number
const KEY_Sinh_la: number
const KEY_Sinh_lla: number
const KEY_Sinh_lu: number
const KEY_Sinh_lu2: number
const KEY_Sinh_luu: number
const KEY_Sinh_luu2: number
const KEY_Sinh_ma: number
const KEY_Sinh_mba: number
const KEY_Sinh_na: number
const KEY_Sinh_ndda: number
const KEY_Sinh_ndha: number
const KEY_Sinh_ng: number
const KEY_Sinh_ng2: number
const KEY_Sinh_nga: number
const KEY_Sinh_nja: number
const KEY_Sinh_nna: number
const KEY_Sinh_nya: number
const KEY_Sinh_o: number
const KEY_Sinh_o2: number
const KEY_Sinh_oo: number
const KEY_Sinh_oo2: number
const KEY_Sinh_pa: number
const KEY_Sinh_pha: number
const KEY_Sinh_ra: number
const KEY_Sinh_ri: number
const KEY_Sinh_rii: number
const KEY_Sinh_ru2: number
const KEY_Sinh_ruu2: number
const KEY_Sinh_sa: number
const KEY_Sinh_sha: number
const KEY_Sinh_ssha: number
const KEY_Sinh_tha: number
const KEY_Sinh_thha: number
const KEY_Sinh_tta: number
const KEY_Sinh_ttha: number
const KEY_Sinh_u: number
const KEY_Sinh_u2: number
const KEY_Sinh_uu: number
const KEY_Sinh_uu2: number
const KEY_Sinh_va: number
const KEY_Sinh_ya: number
const KEY_Sleep: number
const KEY_SlowKeys_Enable: number
const KEY_Spell: number
const KEY_SplitScreen: number
const KEY_Standby: number
const KEY_Start: number
const KEY_StickyKeys_Enable: number
const KEY_Stop: number
const KEY_Subtitle: number
const KEY_Super_L: number
const KEY_Super_R: number
const KEY_Support: number
const KEY_Suspend: number
const KEY_Switch_VT_1: number
const KEY_Switch_VT_10: number
const KEY_Switch_VT_11: number
const KEY_Switch_VT_12: number
const KEY_Switch_VT_2: number
const KEY_Switch_VT_3: number
const KEY_Switch_VT_4: number
const KEY_Switch_VT_5: number
const KEY_Switch_VT_6: number
const KEY_Switch_VT_7: number
const KEY_Switch_VT_8: number
const KEY_Switch_VT_9: number
const KEY_Sys_Req: number
const KEY_T: number
const KEY_THORN: number
const KEY_Tab: number
const KEY_Tabovedot: number
const KEY_TaskPane: number
const KEY_Tcaron: number
const KEY_Tcedilla: number
const KEY_Terminal: number
const KEY_Terminate_Server: number
const KEY_Thai_baht: number
const KEY_Thai_bobaimai: number
const KEY_Thai_chochan: number
const KEY_Thai_chochang: number
const KEY_Thai_choching: number
const KEY_Thai_chochoe: number
const KEY_Thai_dochada: number
const KEY_Thai_dodek: number
const KEY_Thai_fofa: number
const KEY_Thai_fofan: number
const KEY_Thai_hohip: number
const KEY_Thai_honokhuk: number
const KEY_Thai_khokhai: number
const KEY_Thai_khokhon: number
const KEY_Thai_khokhuat: number
const KEY_Thai_khokhwai: number
const KEY_Thai_khorakhang: number
const KEY_Thai_kokai: number
const KEY_Thai_lakkhangyao: number
const KEY_Thai_lekchet: number
const KEY_Thai_lekha: number
const KEY_Thai_lekhok: number
const KEY_Thai_lekkao: number
const KEY_Thai_leknung: number
const KEY_Thai_lekpaet: number
const KEY_Thai_leksam: number
const KEY_Thai_leksi: number
const KEY_Thai_leksong: number
const KEY_Thai_leksun: number
const KEY_Thai_lochula: number
const KEY_Thai_loling: number
const KEY_Thai_lu: number
const KEY_Thai_maichattawa: number
const KEY_Thai_maiek: number
const KEY_Thai_maihanakat: number
const KEY_Thai_maihanakat_maitho: number
const KEY_Thai_maitaikhu: number
const KEY_Thai_maitho: number
const KEY_Thai_maitri: number
const KEY_Thai_maiyamok: number
const KEY_Thai_moma: number
const KEY_Thai_ngongu: number
const KEY_Thai_nikhahit: number
const KEY_Thai_nonen: number
const KEY_Thai_nonu: number
const KEY_Thai_oang: number
const KEY_Thai_paiyannoi: number
const KEY_Thai_phinthu: number
const KEY_Thai_phophan: number
const KEY_Thai_phophung: number
const KEY_Thai_phosamphao: number
const KEY_Thai_popla: number
const KEY_Thai_rorua: number
const KEY_Thai_ru: number
const KEY_Thai_saraa: number
const KEY_Thai_saraaa: number
const KEY_Thai_saraae: number
const KEY_Thai_saraaimaimalai: number
const KEY_Thai_saraaimaimuan: number
const KEY_Thai_saraam: number
const KEY_Thai_sarae: number
const KEY_Thai_sarai: number
const KEY_Thai_saraii: number
const KEY_Thai_sarao: number
const KEY_Thai_sarau: number
const KEY_Thai_saraue: number
const KEY_Thai_sarauee: number
const KEY_Thai_sarauu: number
const KEY_Thai_sorusi: number
const KEY_Thai_sosala: number
const KEY_Thai_soso: number
const KEY_Thai_sosua: number
const KEY_Thai_thanthakhat: number
const KEY_Thai_thonangmontho: number
const KEY_Thai_thophuthao: number
const KEY_Thai_thothahan: number
const KEY_Thai_thothan: number
const KEY_Thai_thothong: number
const KEY_Thai_thothung: number
const KEY_Thai_topatak: number
const KEY_Thai_totao: number
const KEY_Thai_wowaen: number
const KEY_Thai_yoyak: number
const KEY_Thai_yoying: number
const KEY_Thorn: number
const KEY_Time: number
const KEY_ToDoList: number
const KEY_Tools: number
const KEY_TopMenu: number
const KEY_TouchpadOff: number
const KEY_TouchpadOn: number
const KEY_TouchpadToggle: number
const KEY_Touroku: number
const KEY_Travel: number
const KEY_Tslash: number
const KEY_U: number
const KEY_UWB: number
const KEY_Uacute: number
const KEY_Ubelowdot: number
const KEY_Ubreve: number
const KEY_Ucircumflex: number
const KEY_Udiaeresis: number
const KEY_Udoubleacute: number
const KEY_Ugrave: number
const KEY_Uhook: number
const KEY_Uhorn: number
const KEY_Uhornacute: number
const KEY_Uhornbelowdot: number
const KEY_Uhorngrave: number
const KEY_Uhornhook: number
const KEY_Uhorntilde: number
const KEY_Ukrainian_GHE_WITH_UPTURN: number
const KEY_Ukrainian_I: number
const KEY_Ukrainian_IE: number
const KEY_Ukrainian_YI: number
const KEY_Ukrainian_ghe_with_upturn: number
const KEY_Ukrainian_i: number
const KEY_Ukrainian_ie: number
const KEY_Ukrainian_yi: number
const KEY_Ukranian_I: number
const KEY_Ukranian_JE: number
const KEY_Ukranian_YI: number
const KEY_Ukranian_i: number
const KEY_Ukranian_je: number
const KEY_Ukranian_yi: number
const KEY_Umacron: number
const KEY_Undo: number
const KEY_Ungrab: number
const KEY_Uogonek: number
const KEY_Up: number
const KEY_Uring: number
const KEY_User1KB: number
const KEY_User2KB: number
const KEY_UserPB: number
const KEY_Utilde: number
const KEY_V: number
const KEY_VendorHome: number
const KEY_Video: number
const KEY_View: number
const KEY_VoidSymbol: number
const KEY_W: number
const KEY_WLAN: number
const KEY_WWW: number
const KEY_Wacute: number
const KEY_WakeUp: number
const KEY_Wcircumflex: number
const KEY_Wdiaeresis: number
const KEY_WebCam: number
const KEY_Wgrave: number
const KEY_WheelButton: number
const KEY_WindowClear: number
const KEY_WonSign: number
const KEY_Word: number
const KEY_X: number
const KEY_Xabovedot: number
const KEY_Xfer: number
const KEY_Y: number
const KEY_Yacute: number
const KEY_Ybelowdot: number
const KEY_Ycircumflex: number
const KEY_Ydiaeresis: number
const KEY_Yellow: number
const KEY_Ygrave: number
const KEY_Yhook: number
const KEY_Ytilde: number
const KEY_Z: number
const KEY_Zabovedot: number
const KEY_Zacute: number
const KEY_Zcaron: number
const KEY_Zen_Koho: number
const KEY_Zenkaku: number
const KEY_Zenkaku_Hankaku: number
const KEY_ZoomIn: number
const KEY_ZoomOut: number
const KEY_Zstroke: number
const KEY_a: number
const KEY_aacute: number
const KEY_abelowdot: number
const KEY_abovedot: number
const KEY_abreve: number
const KEY_abreveacute: number
const KEY_abrevebelowdot: number
const KEY_abrevegrave: number
const KEY_abrevehook: number
const KEY_abrevetilde: number
const KEY_acircumflex: number
const KEY_acircumflexacute: number
const KEY_acircumflexbelowdot: number
const KEY_acircumflexgrave: number
const KEY_acircumflexhook: number
const KEY_acircumflextilde: number
const KEY_acute: number
const KEY_adiaeresis: number
const KEY_ae: number
const KEY_agrave: number
const KEY_ahook: number
const KEY_amacron: number
const KEY_ampersand: number
const KEY_aogonek: number
const KEY_apostrophe: number
const KEY_approxeq: number
const KEY_approximate: number
const KEY_aring: number
const KEY_asciicircum: number
const KEY_asciitilde: number
const KEY_asterisk: number
const KEY_at: number
const KEY_atilde: number
const KEY_b: number
const KEY_babovedot: number
const KEY_backslash: number
const KEY_ballotcross: number
const KEY_bar: number
const KEY_because: number
const KEY_blank: number
const KEY_botintegral: number
const KEY_botleftparens: number
const KEY_botleftsqbracket: number
const KEY_botleftsummation: number
const KEY_botrightparens: number
const KEY_botrightsqbracket: number
const KEY_botrightsummation: number
const KEY_bott: number
const KEY_botvertsummationconnector: number
const KEY_braceleft: number
const KEY_braceright: number
const KEY_bracketleft: number
const KEY_bracketright: number
const KEY_braille_blank: number
const KEY_braille_dot_1: number
const KEY_braille_dot_10: number
const KEY_braille_dot_2: number
const KEY_braille_dot_3: number
const KEY_braille_dot_4: number
const KEY_braille_dot_5: number
const KEY_braille_dot_6: number
const KEY_braille_dot_7: number
const KEY_braille_dot_8: number
const KEY_braille_dot_9: number
const KEY_braille_dots_1: number
const KEY_braille_dots_12: number
const KEY_braille_dots_123: number
const KEY_braille_dots_1234: number
const KEY_braille_dots_12345: number
const KEY_braille_dots_123456: number
const KEY_braille_dots_1234567: number
const KEY_braille_dots_12345678: number
const KEY_braille_dots_1234568: number
const KEY_braille_dots_123457: number
const KEY_braille_dots_1234578: number
const KEY_braille_dots_123458: number
const KEY_braille_dots_12346: number
const KEY_braille_dots_123467: number
const KEY_braille_dots_1234678: number
const KEY_braille_dots_123468: number
const KEY_braille_dots_12347: number
const KEY_braille_dots_123478: number
const KEY_braille_dots_12348: number
const KEY_braille_dots_1235: number
const KEY_braille_dots_12356: number
const KEY_braille_dots_123567: number
const KEY_braille_dots_1235678: number
const KEY_braille_dots_123568: number
const KEY_braille_dots_12357: number
const KEY_braille_dots_123578: number
const KEY_braille_dots_12358: number
const KEY_braille_dots_1236: number
const KEY_braille_dots_12367: number
const KEY_braille_dots_123678: number
const KEY_braille_dots_12368: number
const KEY_braille_dots_1237: number
const KEY_braille_dots_12378: number
const KEY_braille_dots_1238: number
const KEY_braille_dots_124: number
const KEY_braille_dots_1245: number
const KEY_braille_dots_12456: number
const KEY_braille_dots_124567: number
const KEY_braille_dots_1245678: number
const KEY_braille_dots_124568: number
const KEY_braille_dots_12457: number
const KEY_braille_dots_124578: number
const KEY_braille_dots_12458: number
const KEY_braille_dots_1246: number
const KEY_braille_dots_12467: number
const KEY_braille_dots_124678: number
const KEY_braille_dots_12468: number
const KEY_braille_dots_1247: number
const KEY_braille_dots_12478: number
const KEY_braille_dots_1248: number
const KEY_braille_dots_125: number
const KEY_braille_dots_1256: number
const KEY_braille_dots_12567: number
const KEY_braille_dots_125678: number
const KEY_braille_dots_12568: number
const KEY_braille_dots_1257: number
const KEY_braille_dots_12578: number
const KEY_braille_dots_1258: number
const KEY_braille_dots_126: number
const KEY_braille_dots_1267: number
const KEY_braille_dots_12678: number
const KEY_braille_dots_1268: number
const KEY_braille_dots_127: number
const KEY_braille_dots_1278: number
const KEY_braille_dots_128: number
const KEY_braille_dots_13: number
const KEY_braille_dots_134: number
const KEY_braille_dots_1345: number
const KEY_braille_dots_13456: number
const KEY_braille_dots_134567: number
const KEY_braille_dots_1345678: number
const KEY_braille_dots_134568: number
const KEY_braille_dots_13457: number
const KEY_braille_dots_134578: number
const KEY_braille_dots_13458: number
const KEY_braille_dots_1346: number
const KEY_braille_dots_13467: number
const KEY_braille_dots_134678: number
const KEY_braille_dots_13468: number
const KEY_braille_dots_1347: number
const KEY_braille_dots_13478: number
const KEY_braille_dots_1348: number
const KEY_braille_dots_135: number
const KEY_braille_dots_1356: number
const KEY_braille_dots_13567: number
const KEY_braille_dots_135678: number
const KEY_braille_dots_13568: number
const KEY_braille_dots_1357: number
const KEY_braille_dots_13578: number
const KEY_braille_dots_1358: number
const KEY_braille_dots_136: number
const KEY_braille_dots_1367: number
const KEY_braille_dots_13678: number
const KEY_braille_dots_1368: number
const KEY_braille_dots_137: number
const KEY_braille_dots_1378: number
const KEY_braille_dots_138: number
const KEY_braille_dots_14: number
const KEY_braille_dots_145: number
const KEY_braille_dots_1456: number
const KEY_braille_dots_14567: number
const KEY_braille_dots_145678: number
const KEY_braille_dots_14568: number
const KEY_braille_dots_1457: number
const KEY_braille_dots_14578: number
const KEY_braille_dots_1458: number
const KEY_braille_dots_146: number
const KEY_braille_dots_1467: number
const KEY_braille_dots_14678: number
const KEY_braille_dots_1468: number
const KEY_braille_dots_147: number
const KEY_braille_dots_1478: number
const KEY_braille_dots_148: number
const KEY_braille_dots_15: number
const KEY_braille_dots_156: number
const KEY_braille_dots_1567: number
const KEY_braille_dots_15678: number
const KEY_braille_dots_1568: number
const KEY_braille_dots_157: number
const KEY_braille_dots_1578: number
const KEY_braille_dots_158: number
const KEY_braille_dots_16: number
const KEY_braille_dots_167: number
const KEY_braille_dots_1678: number
const KEY_braille_dots_168: number
const KEY_braille_dots_17: number
const KEY_braille_dots_178: number
const KEY_braille_dots_18: number
const KEY_braille_dots_2: number
const KEY_braille_dots_23: number
const KEY_braille_dots_234: number
const KEY_braille_dots_2345: number
const KEY_braille_dots_23456: number
const KEY_braille_dots_234567: number
const KEY_braille_dots_2345678: number
const KEY_braille_dots_234568: number
const KEY_braille_dots_23457: number
const KEY_braille_dots_234578: number
const KEY_braille_dots_23458: number
const KEY_braille_dots_2346: number
const KEY_braille_dots_23467: number
const KEY_braille_dots_234678: number
const KEY_braille_dots_23468: number
const KEY_braille_dots_2347: number
const KEY_braille_dots_23478: number
const KEY_braille_dots_2348: number
const KEY_braille_dots_235: number
const KEY_braille_dots_2356: number
const KEY_braille_dots_23567: number
const KEY_braille_dots_235678: number
const KEY_braille_dots_23568: number
const KEY_braille_dots_2357: number
const KEY_braille_dots_23578: number
const KEY_braille_dots_2358: number
const KEY_braille_dots_236: number
const KEY_braille_dots_2367: number
const KEY_braille_dots_23678: number
const KEY_braille_dots_2368: number
const KEY_braille_dots_237: number
const KEY_braille_dots_2378: number
const KEY_braille_dots_238: number
const KEY_braille_dots_24: number
const KEY_braille_dots_245: number
const KEY_braille_dots_2456: number
const KEY_braille_dots_24567: number
const KEY_braille_dots_245678: number
const KEY_braille_dots_24568: number
const KEY_braille_dots_2457: number
const KEY_braille_dots_24578: number
const KEY_braille_dots_2458: number
const KEY_braille_dots_246: number
const KEY_braille_dots_2467: number
const KEY_braille_dots_24678: number
const KEY_braille_dots_2468: number
const KEY_braille_dots_247: number
const KEY_braille_dots_2478: number
const KEY_braille_dots_248: number
const KEY_braille_dots_25: number
const KEY_braille_dots_256: number
const KEY_braille_dots_2567: number
const KEY_braille_dots_25678: number
const KEY_braille_dots_2568: number
const KEY_braille_dots_257: number
const KEY_braille_dots_2578: number
const KEY_braille_dots_258: number
const KEY_braille_dots_26: number
const KEY_braille_dots_267: number
const KEY_braille_dots_2678: number
const KEY_braille_dots_268: number
const KEY_braille_dots_27: number
const KEY_braille_dots_278: number
const KEY_braille_dots_28: number
const KEY_braille_dots_3: number
const KEY_braille_dots_34: number
const KEY_braille_dots_345: number
const KEY_braille_dots_3456: number
const KEY_braille_dots_34567: number
const KEY_braille_dots_345678: number
const KEY_braille_dots_34568: number
const KEY_braille_dots_3457: number
const KEY_braille_dots_34578: number
const KEY_braille_dots_3458: number
const KEY_braille_dots_346: number
const KEY_braille_dots_3467: number
const KEY_braille_dots_34678: number
const KEY_braille_dots_3468: number
const KEY_braille_dots_347: number
const KEY_braille_dots_3478: number
const KEY_braille_dots_348: number
const KEY_braille_dots_35: number
const KEY_braille_dots_356: number
const KEY_braille_dots_3567: number
const KEY_braille_dots_35678: number
const KEY_braille_dots_3568: number
const KEY_braille_dots_357: number
const KEY_braille_dots_3578: number
const KEY_braille_dots_358: number
const KEY_braille_dots_36: number
const KEY_braille_dots_367: number
const KEY_braille_dots_3678: number
const KEY_braille_dots_368: number
const KEY_braille_dots_37: number
const KEY_braille_dots_378: number
const KEY_braille_dots_38: number
const KEY_braille_dots_4: number
const KEY_braille_dots_45: number
const KEY_braille_dots_456: number
const KEY_braille_dots_4567: number
const KEY_braille_dots_45678: number
const KEY_braille_dots_4568: number
const KEY_braille_dots_457: number
const KEY_braille_dots_4578: number
const KEY_braille_dots_458: number
const KEY_braille_dots_46: number
const KEY_braille_dots_467: number
const KEY_braille_dots_4678: number
const KEY_braille_dots_468: number
const KEY_braille_dots_47: number
const KEY_braille_dots_478: number
const KEY_braille_dots_48: number
const KEY_braille_dots_5: number
const KEY_braille_dots_56: number
const KEY_braille_dots_567: number
const KEY_braille_dots_5678: number
const KEY_braille_dots_568: number
const KEY_braille_dots_57: number
const KEY_braille_dots_578: number
const KEY_braille_dots_58: number
const KEY_braille_dots_6: number
const KEY_braille_dots_67: number
const KEY_braille_dots_678: number
const KEY_braille_dots_68: number
const KEY_braille_dots_7: number
const KEY_braille_dots_78: number
const KEY_braille_dots_8: number
const KEY_breve: number
const KEY_brokenbar: number
const KEY_c: number
const KEY_c_h: number
const KEY_cabovedot: number
const KEY_cacute: number
const KEY_careof: number
const KEY_caret: number
const KEY_caron: number
const KEY_ccaron: number
const KEY_ccedilla: number
const KEY_ccircumflex: number
const KEY_cedilla: number
const KEY_cent: number
const KEY_ch: number
const KEY_checkerboard: number
const KEY_checkmark: number
const KEY_circle: number
const KEY_club: number
const KEY_colon: number
const KEY_comma: number
const KEY_containsas: number
const KEY_copyright: number
const KEY_cr: number
const KEY_crossinglines: number
const KEY_cuberoot: number
const KEY_currency: number
const KEY_cursor: number
const KEY_d: number
const KEY_dabovedot: number
const KEY_dagger: number
const KEY_dcaron: number
const KEY_dead_A: number
const KEY_dead_E: number
const KEY_dead_I: number
const KEY_dead_O: number
const KEY_dead_U: number
const KEY_dead_a: number
const KEY_dead_abovecomma: number
const KEY_dead_abovedot: number
const KEY_dead_abovereversedcomma: number
const KEY_dead_abovering: number
const KEY_dead_aboveverticalline: number
const KEY_dead_acute: number
const KEY_dead_belowbreve: number
const KEY_dead_belowcircumflex: number
const KEY_dead_belowcomma: number
const KEY_dead_belowdiaeresis: number
const KEY_dead_belowdot: number
const KEY_dead_belowmacron: number
const KEY_dead_belowring: number
const KEY_dead_belowtilde: number
const KEY_dead_belowverticalline: number
const KEY_dead_breve: number
const KEY_dead_capital_schwa: number
const KEY_dead_caron: number
const KEY_dead_cedilla: number
const KEY_dead_circumflex: number
const KEY_dead_currency: number
const KEY_dead_dasia: number
const KEY_dead_diaeresis: number
const KEY_dead_doubleacute: number
const KEY_dead_doublegrave: number
const KEY_dead_e: number
const KEY_dead_grave: number
const KEY_dead_greek: number
const KEY_dead_hook: number
const KEY_dead_horn: number
const KEY_dead_i: number
const KEY_dead_invertedbreve: number
const KEY_dead_iota: number
const KEY_dead_longsolidusoverlay: number
const KEY_dead_lowline: number
const KEY_dead_macron: number
const KEY_dead_o: number
const KEY_dead_ogonek: number
const KEY_dead_perispomeni: number
const KEY_dead_psili: number
const KEY_dead_semivoiced_sound: number
const KEY_dead_small_schwa: number
const KEY_dead_stroke: number
const KEY_dead_tilde: number
const KEY_dead_u: number
const KEY_dead_voiced_sound: number
const KEY_decimalpoint: number
const KEY_degree: number
const KEY_diaeresis: number
const KEY_diamond: number
const KEY_digitspace: number
const KEY_dintegral: number
const KEY_division: number
const KEY_dollar: number
const KEY_doubbaselinedot: number
const KEY_doubleacute: number
const KEY_doubledagger: number
const KEY_doublelowquotemark: number
const KEY_downarrow: number
const KEY_downcaret: number
const KEY_downshoe: number
const KEY_downstile: number
const KEY_downtack: number
const KEY_dstroke: number
const KEY_e: number
const KEY_eabovedot: number
const KEY_eacute: number
const KEY_ebelowdot: number
const KEY_ecaron: number
const KEY_ecircumflex: number
const KEY_ecircumflexacute: number
const KEY_ecircumflexbelowdot: number
const KEY_ecircumflexgrave: number
const KEY_ecircumflexhook: number
const KEY_ecircumflextilde: number
const KEY_ediaeresis: number
const KEY_egrave: number
const KEY_ehook: number
const KEY_eightsubscript: number
const KEY_eightsuperior: number
const KEY_elementof: number
const KEY_ellipsis: number
const KEY_em3space: number
const KEY_em4space: number
const KEY_emacron: number
const KEY_emdash: number
const KEY_emfilledcircle: number
const KEY_emfilledrect: number
const KEY_emopencircle: number
const KEY_emopenrectangle: number
const KEY_emptyset: number
const KEY_emspace: number
const KEY_endash: number
const KEY_enfilledcircbullet: number
const KEY_enfilledsqbullet: number
const KEY_eng: number
const KEY_enopencircbullet: number
const KEY_enopensquarebullet: number
const KEY_enspace: number
const KEY_eogonek: number
const KEY_equal: number
const KEY_eth: number
const KEY_etilde: number
const KEY_exclam: number
const KEY_exclamdown: number
const KEY_ezh: number
const KEY_f: number
const KEY_fabovedot: number
const KEY_femalesymbol: number
const KEY_ff: number
const KEY_figdash: number
const KEY_filledlefttribullet: number
const KEY_filledrectbullet: number
const KEY_filledrighttribullet: number
const KEY_filledtribulletdown: number
const KEY_filledtribulletup: number
const KEY_fiveeighths: number
const KEY_fivesixths: number
const KEY_fivesubscript: number
const KEY_fivesuperior: number
const KEY_fourfifths: number
const KEY_foursubscript: number
const KEY_foursuperior: number
const KEY_fourthroot: number
const KEY_function: number
const KEY_g: number
const KEY_gabovedot: number
const KEY_gbreve: number
const KEY_gcaron: number
const KEY_gcedilla: number
const KEY_gcircumflex: number
const KEY_grave: number
const KEY_greater: number
const KEY_greaterthanequal: number
const KEY_guillemotleft: number
const KEY_guillemotright: number
const KEY_h: number
const KEY_hairspace: number
const KEY_hcircumflex: number
const KEY_heart: number
const KEY_hebrew_aleph: number
const KEY_hebrew_ayin: number
const KEY_hebrew_bet: number
const KEY_hebrew_beth: number
const KEY_hebrew_chet: number
const KEY_hebrew_dalet: number
const KEY_hebrew_daleth: number
const KEY_hebrew_doublelowline: number
const KEY_hebrew_finalkaph: number
const KEY_hebrew_finalmem: number
const KEY_hebrew_finalnun: number
const KEY_hebrew_finalpe: number
const KEY_hebrew_finalzade: number
const KEY_hebrew_finalzadi: number
const KEY_hebrew_gimel: number
const KEY_hebrew_gimmel: number
const KEY_hebrew_he: number
const KEY_hebrew_het: number
const KEY_hebrew_kaph: number
const KEY_hebrew_kuf: number
const KEY_hebrew_lamed: number
const KEY_hebrew_mem: number
const KEY_hebrew_nun: number
const KEY_hebrew_pe: number
const KEY_hebrew_qoph: number
const KEY_hebrew_resh: number
const KEY_hebrew_samech: number
const KEY_hebrew_samekh: number
const KEY_hebrew_shin: number
const KEY_hebrew_taf: number
const KEY_hebrew_taw: number
const KEY_hebrew_tet: number
const KEY_hebrew_teth: number
const KEY_hebrew_waw: number
const KEY_hebrew_yod: number
const KEY_hebrew_zade: number
const KEY_hebrew_zadi: number
const KEY_hebrew_zain: number
const KEY_hebrew_zayin: number
const KEY_hexagram: number
const KEY_horizconnector: number
const KEY_horizlinescan1: number
const KEY_horizlinescan3: number
const KEY_horizlinescan5: number
const KEY_horizlinescan7: number
const KEY_horizlinescan9: number
const KEY_hstroke: number
const KEY_ht: number
const KEY_hyphen: number
const KEY_i: number
const KEY_iTouch: number
const KEY_iacute: number
const KEY_ibelowdot: number
const KEY_ibreve: number
const KEY_icircumflex: number
const KEY_identical: number
const KEY_idiaeresis: number
const KEY_idotless: number
const KEY_ifonlyif: number
const KEY_igrave: number
const KEY_ihook: number
const KEY_imacron: number
const KEY_implies: number
const KEY_includedin: number
const KEY_includes: number
const KEY_infinity: number
const KEY_integral: number
const KEY_intersection: number
const KEY_iogonek: number
const KEY_itilde: number
const KEY_j: number
const KEY_jcircumflex: number
const KEY_jot: number
const KEY_k: number
const KEY_kana_A: number
const KEY_kana_CHI: number
const KEY_kana_E: number
const KEY_kana_FU: number
const KEY_kana_HA: number
const KEY_kana_HE: number
const KEY_kana_HI: number
const KEY_kana_HO: number
const KEY_kana_HU: number
const KEY_kana_I: number
const KEY_kana_KA: number
const KEY_kana_KE: number
const KEY_kana_KI: number
const KEY_kana_KO: number
const KEY_kana_KU: number
const KEY_kana_MA: number
const KEY_kana_ME: number
const KEY_kana_MI: number
const KEY_kana_MO: number
const KEY_kana_MU: number
const KEY_kana_N: number
const KEY_kana_NA: number
const KEY_kana_NE: number
const KEY_kana_NI: number
const KEY_kana_NO: number
const KEY_kana_NU: number
const KEY_kana_O: number
const KEY_kana_RA: number
const KEY_kana_RE: number
const KEY_kana_RI: number
const KEY_kana_RO: number
const KEY_kana_RU: number
const KEY_kana_SA: number
const KEY_kana_SE: number
const KEY_kana_SHI: number
const KEY_kana_SO: number
const KEY_kana_SU: number
const KEY_kana_TA: number
const KEY_kana_TE: number
const KEY_kana_TI: number
const KEY_kana_TO: number
const KEY_kana_TSU: number
const KEY_kana_TU: number
const KEY_kana_U: number
const KEY_kana_WA: number
const KEY_kana_WO: number
const KEY_kana_YA: number
const KEY_kana_YO: number
const KEY_kana_YU: number
const KEY_kana_a: number
const KEY_kana_closingbracket: number
const KEY_kana_comma: number
const KEY_kana_conjunctive: number
const KEY_kana_e: number
const KEY_kana_fullstop: number
const KEY_kana_i: number
const KEY_kana_middledot: number
const KEY_kana_o: number
const KEY_kana_openingbracket: number
const KEY_kana_switch: number
const KEY_kana_tsu: number
const KEY_kana_tu: number
const KEY_kana_u: number
const KEY_kana_ya: number
const KEY_kana_yo: number
const KEY_kana_yu: number
const KEY_kappa: number
const KEY_kcedilla: number
const KEY_kra: number
const KEY_l: number
const KEY_lacute: number
const KEY_latincross: number
const KEY_lbelowdot: number
const KEY_lcaron: number
const KEY_lcedilla: number
const KEY_leftanglebracket: number
const KEY_leftarrow: number
const KEY_leftcaret: number
const KEY_leftdoublequotemark: number
const KEY_leftmiddlecurlybrace: number
const KEY_leftopentriangle: number
const KEY_leftpointer: number
const KEY_leftradical: number
const KEY_leftshoe: number
const KEY_leftsinglequotemark: number
const KEY_leftt: number
const KEY_lefttack: number
const KEY_less: number
const KEY_lessthanequal: number
const KEY_lf: number
const KEY_logicaland: number
const KEY_logicalor: number
const KEY_lowleftcorner: number
const KEY_lowrightcorner: number
const KEY_lstroke: number
const KEY_m: number
const KEY_mabovedot: number
const KEY_macron: number
const KEY_malesymbol: number
const KEY_maltesecross: number
const KEY_marker: number
const KEY_masculine: number
const KEY_minus: number
const KEY_minutes: number
const KEY_mu: number
const KEY_multiply: number
const KEY_musicalflat: number
const KEY_musicalsharp: number
const KEY_n: number
const KEY_nabla: number
const KEY_nacute: number
const KEY_ncaron: number
const KEY_ncedilla: number
const KEY_ninesubscript: number
const KEY_ninesuperior: number
const KEY_nl: number
const KEY_nobreakspace: number
const KEY_notapproxeq: number
const KEY_notelementof: number
const KEY_notequal: number
const KEY_notidentical: number
const KEY_notsign: number
const KEY_ntilde: number
const KEY_numbersign: number
const KEY_numerosign: number
const KEY_o: number
const KEY_oacute: number
const KEY_obarred: number
const KEY_obelowdot: number
const KEY_ocaron: number
const KEY_ocircumflex: number
const KEY_ocircumflexacute: number
const KEY_ocircumflexbelowdot: number
const KEY_ocircumflexgrave: number
const KEY_ocircumflexhook: number
const KEY_ocircumflextilde: number
const KEY_odiaeresis: number
const KEY_odoubleacute: number
const KEY_oe: number
const KEY_ogonek: number
const KEY_ograve: number
const KEY_ohook: number
const KEY_ohorn: number
const KEY_ohornacute: number
const KEY_ohornbelowdot: number
const KEY_ohorngrave: number
const KEY_ohornhook: number
const KEY_ohorntilde: number
const KEY_omacron: number
const KEY_oneeighth: number
const KEY_onefifth: number
const KEY_onehalf: number
const KEY_onequarter: number
const KEY_onesixth: number
const KEY_onesubscript: number
const KEY_onesuperior: number
const KEY_onethird: number
const KEY_ooblique: number
const KEY_openrectbullet: number
const KEY_openstar: number
const KEY_opentribulletdown: number
const KEY_opentribulletup: number
const KEY_ordfeminine: number
const KEY_oslash: number
const KEY_otilde: number
const KEY_overbar: number
const KEY_overline: number
const KEY_p: number
const KEY_pabovedot: number
const KEY_paragraph: number
const KEY_parenleft: number
const KEY_parenright: number
const KEY_partdifferential: number
const KEY_partialderivative: number
const KEY_percent: number
const KEY_period: number
const KEY_periodcentered: number
const KEY_permille: number
const KEY_phonographcopyright: number
const KEY_plus: number
const KEY_plusminus: number
const KEY_prescription: number
const KEY_prolongedsound: number
const KEY_punctspace: number
const KEY_q: number
const KEY_quad: number
const KEY_question: number
const KEY_questiondown: number
const KEY_quotedbl: number
const KEY_quoteleft: number
const KEY_quoteright: number
const KEY_r: number
const KEY_racute: number
const KEY_radical: number
const KEY_rcaron: number
const KEY_rcedilla: number
const KEY_registered: number
const KEY_rightanglebracket: number
const KEY_rightarrow: number
const KEY_rightcaret: number
const KEY_rightdoublequotemark: number
const KEY_rightmiddlecurlybrace: number
const KEY_rightmiddlesummation: number
const KEY_rightopentriangle: number
const KEY_rightpointer: number
const KEY_rightshoe: number
const KEY_rightsinglequotemark: number
const KEY_rightt: number
const KEY_righttack: number
const KEY_s: number
const KEY_sabovedot: number
const KEY_sacute: number
const KEY_scaron: number
const KEY_scedilla: number
const KEY_schwa: number
const KEY_scircumflex: number
const KEY_script_switch: number
const KEY_seconds: number
const KEY_section: number
const KEY_semicolon: number
const KEY_semivoicedsound: number
const KEY_seveneighths: number
const KEY_sevensubscript: number
const KEY_sevensuperior: number
const KEY_signaturemark: number
const KEY_signifblank: number
const KEY_similarequal: number
const KEY_singlelowquotemark: number
const KEY_sixsubscript: number
const KEY_sixsuperior: number
const KEY_slash: number
const KEY_soliddiamond: number
const KEY_space: number
const KEY_squareroot: number
const KEY_ssharp: number
const KEY_sterling: number
const KEY_stricteq: number
const KEY_t: number
const KEY_tabovedot: number
const KEY_tcaron: number
const KEY_tcedilla: number
const KEY_telephone: number
const KEY_telephonerecorder: number
const KEY_therefore: number
const KEY_thinspace: number
const KEY_thorn: number
const KEY_threeeighths: number
const KEY_threefifths: number
const KEY_threequarters: number
const KEY_threesubscript: number
const KEY_threesuperior: number
const KEY_tintegral: number
const KEY_topintegral: number
const KEY_topleftparens: number
const KEY_topleftradical: number
const KEY_topleftsqbracket: number
const KEY_topleftsummation: number
const KEY_toprightparens: number
const KEY_toprightsqbracket: number
const KEY_toprightsummation: number
const KEY_topt: number
const KEY_topvertsummationconnector: number
const KEY_trademark: number
const KEY_trademarkincircle: number
const KEY_tslash: number
const KEY_twofifths: number
const KEY_twosubscript: number
const KEY_twosuperior: number
const KEY_twothirds: number
const KEY_u: number
const KEY_uacute: number
const KEY_ubelowdot: number
const KEY_ubreve: number
const KEY_ucircumflex: number
const KEY_udiaeresis: number
const KEY_udoubleacute: number
const KEY_ugrave: number
const KEY_uhook: number
const KEY_uhorn: number
const KEY_uhornacute: number
const KEY_uhornbelowdot: number
const KEY_uhorngrave: number
const KEY_uhornhook: number
const KEY_uhorntilde: number
const KEY_umacron: number
const KEY_underbar: number
const KEY_underscore: number
const KEY_union: number
const KEY_uogonek: number
const KEY_uparrow: number
const KEY_upcaret: number
const KEY_upleftcorner: number
const KEY_uprightcorner: number
const KEY_upshoe: number
const KEY_upstile: number
const KEY_uptack: number
const KEY_uring: number
const KEY_utilde: number
const KEY_v: number
const KEY_variation: number
const KEY_vertbar: number
const KEY_vertconnector: number
const KEY_voicedsound: number
const KEY_vt: number
const KEY_w: number
const KEY_wacute: number
const KEY_wcircumflex: number
const KEY_wdiaeresis: number
const KEY_wgrave: number
const KEY_x: number
const KEY_xabovedot: number
const KEY_y: number
const KEY_yacute: number
const KEY_ybelowdot: number
const KEY_ycircumflex: number
const KEY_ydiaeresis: number
const KEY_yen: number
const KEY_ygrave: number
const KEY_yhook: number
const KEY_ytilde: number
const KEY_z: number
const KEY_zabovedot: number
const KEY_zacute: number
const KEY_zcaron: number
const KEY_zerosubscript: number
const KEY_zerosuperior: number
const KEY_zstroke: number
/**
 * Set to 1 if Clutter was built without FPU (i.e fixed math), 0 otherwise
 */
const NO_FPU: number
const PATH_RELATIVE: number
/**
 * Priority of the redraws. This is chosen to be lower than the GTK+
 * redraw and resize priorities, because in application with both
 * GTK+ and Clutter it's more likely that the Clutter part will be
 * continually animating (and thus able to starve GTK+) than
 * vice-versa.
 */
const PRIORITY_REDRAW: number
/**
 * The default GObject type for the Clutter stage.
 */
const STAGE_TYPE: string | null
const VIRTUAL_INPUT_DEVICE_MAX_TOUCH_SLOTS: number
/**
 * Allocates a new [struct`ActorBox]`.
 * @returns the newly allocated #ClutterActorBox.   Use [method@ActorBox.free] to free its resources
 */
function actor_box_alloc(): ActorBox
/**
 * Utility function to clear a Cairo context.
 * @param cr a Cairo context
 */
function cairo_clear(cr: any): void
/**
 * Utility function for setting the source color of `cr` using
 * a #ClutterColor. This function is the equivalent of:
 * 
 * ```c
 *   cairo_set_source_rgba (cr,
 *                          color->red / 255.0,
 *                          color->green / 255.0,
 *                          color->blue / 255.0,
 *                          color->alpha / 255.0);
 * ```
 * @param cr a Cairo context
 * @param color a #ClutterColor
 */
function cairo_set_source_color(cr: any, color: Color): void
/**
 * Converts a color expressed in HLS (hue, luminance and saturation)
 * values into a #ClutterColor.
 * @param hue hue value, in the 0 .. 360 range
 * @param luminance luminance value, in the 0 .. 1 range
 * @param saturation saturation value, in the 0 .. 1 range
 */
function color_from_hls(hue: number, luminance: number, saturation: number): /* color */ Color
/**
 * Converts `pixel` from the packed representation of a four 8 bit channel
 * color to a #ClutterColor.
 * @param pixel a 32 bit packed integer containing a color
 */
function color_from_pixel(pixel: number): /* color */ Color
/**
 * Parses a string definition of a color, filling the #ClutterColor.red,
 * #ClutterColor.green, #ClutterColor.blue and #ClutterColor.alpha fields
 * of `color`.
 * 
 * The `color` is not allocated.
 * 
 * The format of `str` can be either one of:
 * 
 *   - a standard name (as taken from the X11 rgb.txt file)
 *   - an hexadecimal value in the form: `#rgb`, `#rrggbb`, `#rgba`, or `#rrggbbaa`
 *   - a RGB color in the form: `rgb(r, g, b)`
 *   - a RGB color in the form: `rgba(r, g, b, a)`
 *   - a HSL color in the form: `hsl(h, s, l)`
 *    -a HSL color in the form: `hsla(h, s, l, a)`
 * 
 * where 'r', 'g', 'b' and 'a' are (respectively) the red, green, blue color
 * intensities and the opacity. The 'h', 's' and 'l' are (respectively) the
 * hue, saturation and luminance values.
 * 
 * In the rgb() and rgba() formats, the 'r', 'g', and 'b' values are either
 * integers between 0 and 255, or percentage values in the range between 0%
 * and 100%; the percentages require the '%' character. The 'a' value, if
 * specified, can only be a floating point value between 0.0 and 1.0.
 * 
 * In the hls() and hlsa() formats, the 'h' value (hue) is an angle between
 * 0 and 360.0 degrees; the 'l' and 's' values (luminance and saturation) are
 * percentage values in the range between 0% and 100%. The 'a' value, if specified,
 * can only be a floating point value between 0.0 and 1.0.
 * 
 * Whitespace inside the definitions is ignored; no leading whitespace
 * is allowed.
 * 
 * If the alpha component is not specified then it is assumed to be set to
 * be fully opaque.
 * @param str a string specifying a color
 * @returns %TRUE if parsing succeeded, and %FALSE otherwise
 */
function color_from_string(str: string | null): [ /* returnType */ boolean, /* color */ Color ]
/**
 * Retrieves a static color for the given `color` name
 * 
 * Static colors are created by Clutter and are guaranteed to always be
 * available and valid
 * @param color the named global color
 * @returns a pointer to a static color; the returned pointer   is owned by Clutter and it should never be modified or freed
 */
function color_get_static(color: StaticColor): Color
/**
 * Looks up the #GParamSpec for a child property of `klass`.
 * @param klass a #GObjectClass implementing the #ClutterContainer interface.
 * @param property_name a property name.
 * @returns The #GParamSpec for the property or %NULL   if no such property exist.
 */
function container_class_find_child_property(klass: any, property_name: string | null): any
/**
 * Returns an array of #GParamSpec for all child properties.
 * @param klass a #GObjectClass implementing the #ClutterContainer interface.
 * @returns an array   of `GParamSpec`s which should be freed after use.
 */
function container_class_list_child_properties(klass: any): any[]
function debug_set_max_render_time_constant(max_render_time_constant_us: number): void
/**
 * Disable loading the accessibility support. It has the same effect
 * as setting the environment variable
 * CLUTTER_DISABLE_ACCESSIBILITY. For the same reason, this method
 * should be called before clutter_init().
 */
function disable_accessibility(): void
/**
 * Processes an event.
 * 
 * The `event` must be a valid #ClutterEvent and have a #ClutterStage
 * associated to it.
 * 
 * This function is only useful when embedding Clutter inside another
 * toolkit, and it should never be called by applications.
 * @param event a #ClutterEvent.
 */
function do_event(event: Event): void
/**
 * Adds a function which will be called for all events that Clutter
 * processes. The function will be called before any signals are
 * emitted for the event and it will take precedence over any grabs.
 * @param stage The #ClutterStage to capture events for
 * @param func The callback function which will be passed all events.
 * @returns an identifier for the event filter, to be used   with clutter_event_remove_filter().
 */
function event_add_filter(stage: Stage | null, func: EventFilterFunc): number
/**
 * Pops an event off the event queue. Applications should not need to call
 * this.
 * @returns A #ClutterEvent or NULL if queue empty
 */
function event_get(): Event
/**
 * Removes an event filter that was previously added with
 * clutter_event_add_filter().
 * @param id The ID of the event filter, as returned from clutter_event_add_filter()
 */
function event_remove_filter(id: number): void
/**
 * Checks if events are pending in the event queue.
 * @returns TRUE if there are pending events, FALSE otherwise.
 */
function events_pending(): boolean
/**
 * Returns whether Clutter has accessibility support enabled.  As
 * least, a value of TRUE means that there are a proper AtkUtil
 * implementation available
 * @returns %TRUE if Clutter has accessibility support enabled
 */
function get_accessibility_enabled(): boolean
/**
 * If an event is currently being processed, return that event.
 * This function is intended to be used to access event state
 * that might not be exposed by higher-level widgets.  For
 * example, to get the key modifier state from a Button 'clicked'
 * event.
 * @returns The current ClutterEvent, or %NULL if none
 */
function get_current_event(): Event
/**
 * Retrieves the timestamp of the last event, if there is an
 * event or if the event has a timestamp.
 * @returns the event timestamp, or %CLUTTER_CURRENT_TIME
 */
function get_current_event_time(): number
function get_debug_flags(debug_flags: DebugFlag, draw_flags: DrawDebugFlag, pick_flags: PickDebugFlag): void
/**
 * Retrieves the default #ClutterBackend used by Clutter. The
 * #ClutterBackend holds backend-specific configuration options.
 * @returns the default backend. You should   not ref or unref the returned object. Applications should rarely   need to use this.
 */
function get_default_backend(): Backend
/**
 * Retrieves the default direction for the text. The text direction is
 * determined by the locale and/or by the `CLUTTER_TEXT_DIRECTION`
 * environment variable.
 * 
 * The default text direction can be overridden on a per-actor basis by using
 * [method`Actor`.set_text_direction].
 * @returns the default text direction
 */
function get_default_text_direction(): TextDirection
/**
 * Retrieves the #PangoFontMap instance used by Clutter.
 * You can use the global font map object with the COGL
 * Pango API.
 * @returns the #PangoFontMap instance. The returned   value is owned by Clutter and it should never be unreferenced.
 */
function get_font_map(): Pango.FontMap
/**
 * Retrieves the Clutter script id, if any.
 * @param gobject a #GObject
 * @returns the script id, or %NULL if @object was not defined inside   a UI definition file. The returned string is owned by the object and   should never be modified or freed.
 */
function get_script_id(gobject: any): string | null
/**
 * Converts `keyval` from a Clutter key symbol to the corresponding
 * ISO10646 (Unicode) character.
 * @param keyval a key symbol
 * @returns a Unicode character, or 0 if there  is no corresponding   character.
 */
function keysym_to_unicode(keyval: number): number
function script_error_quark(): any
/**
 * Adds a function to be called whenever there are no higher priority
 * events pending. If the function returns %FALSE it is automatically
 * removed from the list of event sources and will not be called again.
 * 
 * This function can be considered a thread-safe variant of g_idle_add_full():
 * it will call `function` while holding the Clutter lock. It is logically
 * equivalent to the following implementation:
 * 
 * ```c
 * static gboolean
 * idle_safe_callback (gpointer data)
 * {
 *    SafeClosure *closure = data;
 *    gboolean res = FALSE;
 * 
 *    // the callback does not need to acquire the Clutter
 *     / lock itself, as it is held by the this proxy handler
 *     //
 *    res = closure->callback (closure->data);
 * 
 *    return res;
 * }
 * static gulong
 * add_safe_idle (GSourceFunc callback,
 *                gpointer    data)
 * {
 *   SafeClosure *closure = g_new0 (SafeClosure, 1);
 * 
 *   closure->callback = callback;
 *   closure->data = data;
 * 
 *   return g_idle_add_full (G_PRIORITY_DEFAULT_IDLE,
 *                           idle_safe_callback,
 *                           closure,
 *                           g_free)
 * }
 * ```
 * 
 * This function should be used by threaded applications to make sure
 * that `func` is emitted under the Clutter threads lock and invoked
 * from the same thread that started the Clutter main loop. For instance,
 * it can be used to update the UI using the results from a worker
 * thread:
 * 
 * ```c
 * static gboolean
 * update_ui (gpointer data)
 * {
 *   SomeClosure *closure = data;
 * 
 *   // it is safe to call Clutter API from this function because
 *    / it is invoked from the same thread that started the main
 *    / loop and under the Clutter thread lock
 *    //
 *   clutter_label_set_text (CLUTTER_LABEL (closure->label),
 *                           closure->text);
 * 
 *   g_object_unref (closure->label);
 *   g_free (closure);
 * 
 *   return FALSE;
 * }
 * 
 *   // within another thread //
 *   closure = g_new0 (SomeClosure, 1);
 *   // always take a reference on GObject instances //
 *   closure->label = g_object_ref (my_application->label);
 *   closure->text = g_strdup (processed_text_to_update_the_label);
 * 
 *   clutter_threads_add_idle_full (G_PRIORITY_HIGH_IDLE,
 *                                  update_ui,
 *                                  closure,
 *                                  NULL);
 * ```
 * @param priority the priority of the timeout source. Typically this will be in the    range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE
 * @param func function to call
 * @returns the ID (greater than 0) of the event source.
 */
function threads_add_idle(priority: number, func: any): number
/**
 * Adds a function to be called whenever Clutter is processing a new
 * frame.
 * 
 * If the function returns %FALSE it is automatically removed from the
 * list of repaint functions and will not be called again.
 * 
 * This function is guaranteed to be called from within the same thread
 * that called clutter_main(), and while the Clutter lock is being held;
 * the function will be called within the main loop, so it is imperative
 * that it does not block, otherwise the frame time budget may be lost.
 * 
 * A repaint function is useful to ensure that an update of the scenegraph
 * is performed before the scenegraph is repainted. By default, a repaint
 * function added using this function will be invoked prior to the frame
 * being processed.
 * 
 * Adding a repaint function does not automatically ensure that a new
 * frame will be queued.
 * 
 * When the repaint function is removed (either because it returned %FALSE
 * or because clutter_threads_remove_repaint_func() has been called) the
 * `notify` function will be called, if any is set.
 * 
 * See also: clutter_threads_add_repaint_func_full()
 * @param func the function to be called within the paint cycle
 * @returns the ID (greater than 0) of the repaint function. You   can use the returned integer to remove the repaint function by   calling clutter_threads_remove_repaint_func().
 */
function threads_add_repaint_func(func: any): number
/**
 * Adds a function to be called whenever Clutter is processing a new
 * frame.
 * 
 * If the function returns %FALSE it is automatically removed from the
 * list of repaint functions and will not be called again.
 * 
 * This function is guaranteed to be called from within the same thread
 * that called clutter_main(), and while the Clutter lock is being held;
 * the function will be called within the main loop, so it is imperative
 * that it does not block, otherwise the frame time budget may be lost.
 * 
 * A repaint function is useful to ensure that an update of the scenegraph
 * is performed before the scenegraph is repainted. The `flags` passed to this
 * function will determine the section of the frame processing that will
 * result in `func` being called.
 * 
 * Adding a repaint function does not automatically ensure that a new
 * frame will be queued.
 * 
 * When the repaint function is removed (either because it returned %FALSE
 * or because clutter_threads_remove_repaint_func() has been called) the
 * `notify` function will be called, if any is set.
 * @param flags flags for the repaint function
 * @param func the function to be called within the paint cycle
 * @returns the ID (greater than 0) of the repaint function. You   can use the returned integer to remove the repaint function by   calling clutter_threads_remove_repaint_func().
 */
function threads_add_repaint_func_full(flags: RepaintFlags, func: any): number
/**
 * Sets a function to be called at regular intervals holding the Clutter
 * threads lock, with the given priority. The function is called repeatedly
 * until it returns %FALSE, at which point the timeout is automatically
 * removed and the function will not be called again. The `notify` function
 * is called when the timeout is removed.
 * 
 * The first call to the function will be at the end of the first `interval`.
 * 
 * It is important to note that, due to how the Clutter main loop is
 * implemented, the timing will not be accurate and it will not try to
 * "keep up" with the interval.
 * 
 * See also clutter_threads_add_idle_full().
 * @param priority the priority of the timeout source. Typically this will be in the            range between #G_PRIORITY_DEFAULT and #G_PRIORITY_HIGH.
 * @param interval the time between calls to the function, in milliseconds
 * @param func function to call
 * @returns the ID (greater than 0) of the event source.
 */
function threads_add_timeout(priority: number, interval: number, func: any): number
/**
 * Removes the repaint function with `handle_id` as its id
 * @param handle_id an unsigned integer greater than zero
 */
function threads_remove_repaint_func(handle_id: number): void
/**
 * Convert from a ISO10646 character to a key symbol.
 * @param wc a ISO10646 encoded character
 * @returns the corresponding Clutter key symbol, if one exists.   or, if there is no corresponding symbol, wc | 0x01000000
 */
function unicode_to_keysym(wc: number): number
/**
 * Stores a value in centimeters inside `units`
 * @param cm centimeters
 */
function units_from_cm(cm: number): /* units */ Units
/**
 * Stores a value in em inside `units,` using the default font
 * name
 * @param em em
 */
function units_from_em(em: number): /* units */ Units
/**
 * Stores a value in em inside `units` using `font_name`
 * @param font_name the font name and size
 * @param em em
 */
function units_from_em_for_font(font_name: string | null, em: number): /* units */ Units
/**
 * Stores a value in millimiters inside `units`
 * @param mm millimeters
 */
function units_from_mm(mm: number): /* units */ Units
/**
 * Stores a value in pixels inside `units`
 * @param px pixels
 */
function units_from_pixels(px: number): /* units */ Units
/**
 * Stores a value in typographic points inside `units`
 * @param pt typographic points
 */
function units_from_pt(pt: number): /* units */ Units
/**
 * Parses a value and updates `units` with it
 * 
 * A #ClutterUnits expressed in string should match:
 * 
 * ```
 *   units: wsp* unit-value wsp* unit-name? wsp*
 *   unit-value: number
 *   unit-name: 'px' | 'pt' | 'mm' | 'em' | 'cm'
 *   number: digit+
 *           | digit* sep digit+
 *   sep: '.' | ','
 *   digit: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
 *   wsp: (#0x20 | #0x9 | #0xA | #0xB | #0xC | #0xD)+
 * ```
 * 
 * For instance, these are valid strings:
 * 
 * ```
 *   10 px
 *   5.1 em
 *   24 pt
 *   12.6 mm
 *   .3 cm
 * ```
 * 
 * While these are not:
 * 
 * ```
 *   42 cats
 *   omg!1!ponies
 * ```
 * 
 * If no unit is specified, pixels are assumed.
 * @param str the string to convert
 * @returns %TRUE if the string was successfully parsed,   and %FALSE otherwise
 */
function units_from_string(str: string | null): [ /* returnType */ boolean, /* units */ Units ]
/**
 * Retrieves a pointer to the #ClutterPaintNode contained inside
 * the passed #GValue, and if not %NULL it will increase the
 * reference count.
 * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
 * @returns a pointer   to the #ClutterPaintNode, with its reference count increased,   or %NULL
 */
function value_dup_paint_node(value: any): PaintNode
/**
 * Gets the #ClutterColor contained in `value`.
 * @param value a #GValue initialized to #CLUTTER_TYPE_COLOR
 * @returns the color inside the passed #GValue
 */
function value_get_color(value: any): Color
/**
 * Retrieves a pointer to the #ClutterPaintNode contained inside
 * the passed #GValue.
 * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
 * @returns a pointer to   a #ClutterPaintNode, or %NULL
 */
function value_get_paint_node(value: any): PaintNode
/**
 * Retrieves the list of floating point values stored inside
 * the passed [struct`GObject`.Value]. `value` must have been initialized with
 * %CLUTTER_TYPE_SHADER_FLOAT.
 * @param value a #GValue
 * @returns the pointer to a list of   floating point values.  The returned value is owned by the   #GValue and should never be modified or freed.
 */
function value_get_shader_float(value: any): number[]
/**
 * Retrieves the list of integer values stored inside the passed
 * [struct`GObject`.Value]. `value` must have been initialized with
 * %CLUTTER_TYPE_SHADER_INT.
 * @param value a #GValue
 * @returns the pointer to a list of   integer values.  The returned value is owned by the #GValue and   should never be modified or freed.
 */
function value_get_shader_int(value: any): number[]
/**
 * Retrieves a matrix of floating point values stored inside
 * the passed [struct`GObject`.Value]. `value` must have been initialized with
 * %CLUTTER_TYPE_SHADER_MATRIX.
 * @param value a #GValue
 * @returns the pointer to a matrix   of floating point values. The returned value is owned by the #GValue and   should never be modified or freed.
 */
function value_get_shader_matrix(value: any): number[]
/**
 * Gets the #ClutterUnits contained in `value`.
 * @param value a #GValue initialized to %CLUTTER_TYPE_UNITS
 * @returns the units inside the passed [struct@GObject.Value]
 */
function value_get_units(value: any): Units
/**
 * Sets `value` to `color`.
 * @param value a #GValue initialized to #CLUTTER_TYPE_COLOR
 * @param color the color to set
 */
function value_set_color(value: any, color: Color): void
/**
 * Sets the contents of a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE.
 * 
 * This function increased the reference count of `node;` if you do not wish
 * to increase the reference count, use clutter_value_take_paint_node()
 * instead. The reference count will be released by g_value_unset().
 * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
 * @param node a #ClutterPaintNode, or %NULL
 */
function value_set_paint_node(value: any, node: PaintNode | null): void
/**
 * Sets `floats` as the contents of `value`. The passed [struct`GObject`.Value]
 * must have been initialized using %CLUTTER_TYPE_SHADER_FLOAT.
 * @param value a #GValue
 * @param floats an array of floating point values
 */
function value_set_shader_float(value: any, floats: number[]): void
/**
 * Sets `ints` as the contents of `value`. The passed [struct`GObject`.Value]
 * must have been initialized using %CLUTTER_TYPE_SHADER_INT.
 * @param value a #GValue
 * @param ints an array of integer values
 */
function value_set_shader_int(value: any, ints: number[]): void
/**
 * Sets `matrix` as the contents of `value`. The passed [struct`GObject`.Value]
 * must have been initialized using %CLUTTER_TYPE_SHADER_MATRIX.
 * @param value a #GValue
 * @param matrix a matrix of floating point values
 */
function value_set_shader_matrix(value: any, matrix: number[]): void
/**
 * Sets `value` to `units`
 * @param value a #GValue initialized to %CLUTTER_TYPE_UNITS
 * @param units the units to set
 */
function value_set_units(value: any, units: Units): void
/**
 * Sets the contents of a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE.
 * 
 * Unlike clutter_value_set_paint_node(), this function will not take a
 * reference on the passed `node:` instead, it will take ownership of the
 * current reference count.
 * @param value a #GValue, initialized with %CLUTTER_TYPE_PAINT_NODE
 * @param node a #ClutterPaintNode, or %NULL
 */
function value_take_paint_node(value: any, node: PaintNode | null): void
/**
 * Creates a #ClutterActor using the `item` in the model.
 * 
 * The usual way to implement this function is to create a #ClutterActor
 * instance and then bind the #GObject properties to the actor properties
 * of interest, using g_object_bind_property(). This way, when the `item`
 * in the #GListModel changes, the #ClutterActor changes as well.
 * @callback 
 * @param item the item in the model
 * @returns The newly created child #ClutterActor4
 */
interface ActorCreateChildFunc {
    (item: any): Actor
}
/**
 * The prototype for the callback function registered with
 * clutter_binding_pool_install_action() and invoked by
 * clutter_binding_pool_activate().
 * @callback 
 * @param gobject a #GObject
 * @param action_name the name of the action
 * @param key_val the key symbol
 * @param modifiers bitmask of the modifier flags
 * @returns the function should return %TRUE if the key   binding has been handled, and return %FALSE otherwise
 */
interface BindingActionFunc {
    (gobject: any, action_name: string | null, key_val: number, modifiers: ModifierType): boolean
}
/**
 * Generic callback
 * @callback 
 * @param actor a #ClutterActor
 */
interface Callback {
    (actor: Actor): void
}
/**
 * A function pointer type used by event filters that are added with
 * clutter_event_add_filter().
 * @callback 
 * @param event the event that is going to be emitted
 * @param event_actor the current device actor of the events device
 * @returns %CLUTTER_EVENT_STOP to indicate that the event   has been handled or %CLUTTER_EVENT_PROPAGATE otherwise.   Returning %CLUTTER_EVENT_STOP skips any further filter   functions and prevents the signal emission for the event.
 */
interface EventFilterFunc {
    (event: Event, event_actor: Actor): boolean
}
/**
 * This function is passed to [method`Path`.foreach] and will be
 * called for each node contained in the path.
 * @callback 
 * @param node the node
 */
interface PathCallback {
    (node: PathNode): void
}
/**
 * Prototype of the progress function used to compute the value
 * between the two ends `a` and `b` of an interval depending on
 * the value of `progress`.
 * 
 * The #GValue in `retval` is already initialized with the same
 * type as `a` and `b`.
 * 
 * This function will be called by #ClutterInterval if the
 * type of the values of the interval was registered using
 * clutter_interval_register_progress_func().
 * @callback 
 * @param a the initial value of an interval
 * @param b the final value of an interval
 * @param progress the progress factor, between 0 and 1
 * @param retval the value used to store the progress
 * @returns %TRUE if the function successfully computed   the value and stored it inside @retval
 */
interface ProgressFunc {
    (a: any, b: any, progress: number, retval: any): boolean
}
/**
 * This is the signature of a function used to connect signals.  It is used
 * by the clutter_script_connect_signals_full() function.  It is mainly
 * intended for interpreted language bindings, but could be useful where the
 * programmer wants more control over the signal connection process.
 * @callback 
 * @param script a #ClutterScript
 * @param object the object to connect
 * @param signal_name the name of the signal
 * @param handler_name the name of the signal handler
 * @param connect_object the object to connect the signal to, or %NULL
 * @param flags signal connection flags
 */
interface ScriptConnectFunc {
    (script: Script, object: any, signal_name: string | null, handler_name: string | null, connect_object: any, flags: any): void
}
/**
 * A function for defining a custom progress.
 * @callback 
 * @param timeline a #ClutterTimeline
 * @param elapsed the elapsed time, in milliseconds
 * @param total the total duration of the timeline, in milliseconds,
 * @returns the progress, as a floating point value between -1.0 and 2.0.
 */
interface TimelineProgressFunc {
    (timeline: Timeline, elapsed: number, total: number): number
}
interface Animatable {

    // Owm methods of Clutter-11.Clutter.Animatable

    /**
     * Finds the [class`GObject`.ParamSpec] for `property_name`
     * @param property_name the name of the animatable property to find
     * @returns The #GParamSpec for the given property   or %NULL
     */
    find_property(property_name: string | null): any
    /**
     * Get animated actor.
     * @returns a #ClutterActor
     */
    get_actor(): Actor
    /**
     * Retrieves the current state of `property_name` and sets `value` with it
     * @param property_name the name of the animatable property to retrieve
     * @param value a #GValue initialized to the type of the property to retrieve
     */
    get_initial_state(property_name: string | null, value: any): void
    /**
     * Asks a #ClutterAnimatable implementation to interpolate a
     * a named property between the initial and final values of
     * a #ClutterInterval, using `progress` as the interpolation
     * value, and store the result inside `value`.
     * 
     * This function should be used for every property animation
     * involving `ClutterAnimatable`s.
     * 
     * This function replaces clutter_animatable_animate_property().
     * @param property_name the name of the property to interpolate
     * @param interval a #ClutterInterval with the animation range
     * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
     * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
     */
    interpolate_value(property_name: string | null, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Sets the current state of `property_name` to `value`
     * @param property_name the name of the animatable property to set
     * @param value the value of the animatable property to set
     */
    set_final_state(property_name: string | null, value: any): void

    // Own virtual methods of Clutter-11.Clutter.Animatable

    /**
     * Finds the [class`GObject`.ParamSpec] for `property_name`
     * @virtual 
     * @param property_name the name of the animatable property to find
     * @returns The #GParamSpec for the given property   or %NULL
     */
    vfunc_find_property(property_name: string | null): any
    /**
     * Get animated actor.
     * @virtual 
     * @returns a #ClutterActor
     */
    vfunc_get_actor(): Actor
    /**
     * Retrieves the current state of `property_name` and sets `value` with it
     * @virtual 
     * @param property_name the name of the animatable property to retrieve
     * @param value a #GValue initialized to the type of the property to retrieve
     */
    vfunc_get_initial_state(property_name: string | null, value: any): void
    /**
     * Asks a #ClutterAnimatable implementation to interpolate a
     * a named property between the initial and final values of
     * a #ClutterInterval, using `progress` as the interpolation
     * value, and store the result inside `value`.
     * 
     * This function should be used for every property animation
     * involving `ClutterAnimatable`s.
     * 
     * This function replaces clutter_animatable_animate_property().
     * @virtual 
     * @param property_name the name of the property to interpolate
     * @param interval a #ClutterInterval with the animation range
     * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
     * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
     */
    vfunc_interpolate_value(property_name: string | null, interval: Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Sets the current state of `property_name` to `value`
     * @virtual 
     * @param property_name the name of the animatable property to set
     * @param value the value of the animatable property to set
     */
    vfunc_set_final_state(property_name: string | null, value: any): void
}

/**
 * Interface for animatable classes
 * 
 * #ClutterAnimatable is an interface that allows a [class`GObject`.Object] class
 * to control how an actor will animate a property.
 * 
 * Each #ClutterAnimatable should implement the
 * [vfunc`Animatable`.interpolate_value] virtual function of the
 * interface to compute the animation state between two values of an interval
 * depending on a progress factor, expressed as a floating point value.
 * @interface 
 */
class Animatable {

    // Own properties of Clutter-11.Clutter.Animatable

    static name: string
}

module Container {

    // Signal callback interfaces

    /**
     * Signal callback interface for `actor-added`
     */
    interface ActorAddedSignalCallback {
        ($obj: Container, actor: Actor): void
    }

    /**
     * Signal callback interface for `actor-removed`
     */
    interface ActorRemovedSignalCallback {
        ($obj: Container, actor: Actor): void
    }

    /**
     * Signal callback interface for `child-notify`
     */
    interface ChildNotifySignalCallback {
        ($obj: Container, actor: Actor, pspec: any): void
    }

}

interface Container {

    // Owm methods of Clutter-11.Clutter.Container

    /**
     * Adds a #ClutterActor to `container`. This function will emit the
     * "actor-added" signal. The actor should be parented to
     * `container`. You cannot add a #ClutterActor to more than one
     * #ClutterContainer.
     * 
     * This function will call #ClutterContainerIface.add(), which is a
     * deprecated virtual function. The default implementation will
     * call clutter_actor_add_child().
     * @param actor the first #ClutterActor to add
     */
    add_actor(actor: Actor): void
    /**
     * Gets a container specific property of a child of `container,` In general,
     * a copy is made of the property contents and the caller is responsible for
     * freeing the memory by calling g_value_unset().
     * 
     * Note that clutter_container_child_set_property() is really intended for
     * language bindings, clutter_container_child_set() is much more convenient
     * for C programming.
     * @param child a #ClutterActor that is a child of `container`.
     * @param property the name of the property to set.
     * @param value the value.
     */
    child_get_property(child: Actor, property: string | null, value: any): void
    /**
     * Calls the #ClutterContainerIface.child_notify() virtual function
     * of #ClutterContainer. The default implementation will emit the
     * #ClutterContainer::child-notify signal.
     * @param child a #ClutterActor
     * @param pspec a #GParamSpec
     */
    child_notify(child: Actor, pspec: any): void
    /**
     * Sets a container-specific property on a child of `container`.
     * @param child a #ClutterActor that is a child of `container`.
     * @param property the name of the property to set.
     * @param value the value.
     */
    child_set_property(child: Actor, property: string | null, value: any): void
    /**
     * Creates the #ClutterChildMeta wrapping `actor` inside the
     * `container,` if the #ClutterContainerIface::child_meta_type
     * class member is not set to %G_TYPE_INVALID.
     * 
     * This function is only useful when adding a #ClutterActor to
     * a #ClutterContainer implementation outside of the
     * #ClutterContainer::add() virtual function implementation.
     * 
     * Applications should not call this function.
     * @param actor a #ClutterActor
     */
    create_child_meta(actor: Actor): void
    /**
     * Destroys the #ClutterChildMeta wrapping `actor` inside the
     * `container,` if any.
     * 
     * This function is only useful when removing a #ClutterActor to
     * a #ClutterContainer implementation outside of the
     * #ClutterContainer::add() virtual function implementation.
     * 
     * Applications should not call this function.
     * @param actor a #ClutterActor
     */
    destroy_child_meta(actor: Actor): void
    /**
     * Finds a child actor of a container by its name. Search recurses
     * into any child container.
     * @param child_name the name of the requested child.
     * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
     */
    find_child_by_name(child_name: string | null): Actor
    /**
     * Retrieves the #ClutterChildMeta which contains the data about the
     * `container` specific state for `actor`.
     * @param actor a #ClutterActor that is a child of `container`.
     * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide `ClutterChildMeta`s
     */
    get_child_meta(actor: Actor): ChildMeta
    /**
     * Removes `actor` from `container`. The actor should be unparented, so
     * if you want to keep it around you must hold a reference to it
     * yourself, using g_object_ref(). When the actor has been removed,
     * the "actor-removed" signal is emitted by `container`.
     * 
     * This function will call #ClutterContainerIface.remove(), which is a
     * deprecated virtual function. The default implementation will call
     * clutter_actor_remove_child().
     * @param actor a #ClutterActor
     */
    remove_actor(actor: Actor): void

    // Own virtual methods of Clutter-11.Clutter.Container

    vfunc_actor_added(actor: Actor): void
    vfunc_actor_removed(actor: Actor): void
    /**
     * Adds a #ClutterActor to `container`. This function will emit the
     * "actor-added" signal. The actor should be parented to
     * `container`. You cannot add a #ClutterActor to more than one
     * #ClutterContainer.
     * 
     * This function will call #ClutterContainerIface.add(), which is a
     * deprecated virtual function. The default implementation will
     * call clutter_actor_add_child().
     * @virtual 
     * @param actor the first #ClutterActor to add
     */
    vfunc_add(actor: Actor): void
    /**
     * Calls the #ClutterContainerIface.child_notify() virtual function
     * of #ClutterContainer. The default implementation will emit the
     * #ClutterContainer::child-notify signal.
     * @virtual 
     * @param child a #ClutterActor
     * @param pspec a #GParamSpec
     */
    vfunc_child_notify(child: Actor, pspec: any): void
    /**
     * Creates the #ClutterChildMeta wrapping `actor` inside the
     * `container,` if the #ClutterContainerIface::child_meta_type
     * class member is not set to %G_TYPE_INVALID.
     * 
     * This function is only useful when adding a #ClutterActor to
     * a #ClutterContainer implementation outside of the
     * #ClutterContainer::add() virtual function implementation.
     * 
     * Applications should not call this function.
     * @virtual 
     * @param actor a #ClutterActor
     */
    vfunc_create_child_meta(actor: Actor): void
    /**
     * Destroys the #ClutterChildMeta wrapping `actor` inside the
     * `container,` if any.
     * 
     * This function is only useful when removing a #ClutterActor to
     * a #ClutterContainer implementation outside of the
     * #ClutterContainer::add() virtual function implementation.
     * 
     * Applications should not call this function.
     * @virtual 
     * @param actor a #ClutterActor
     */
    vfunc_destroy_child_meta(actor: Actor): void
    /**
     * Retrieves the #ClutterChildMeta which contains the data about the
     * `container` specific state for `actor`.
     * @virtual 
     * @param actor a #ClutterActor that is a child of `container`.
     * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide `ClutterChildMeta`s
     */
    vfunc_get_child_meta(actor: Actor): ChildMeta
    /**
     * Removes `actor` from `container`. The actor should be unparented, so
     * if you want to keep it around you must hold a reference to it
     * yourself, using g_object_ref(). When the actor has been removed,
     * the "actor-removed" signal is emitted by `container`.
     * 
     * This function will call #ClutterContainerIface.remove(), which is a
     * deprecated virtual function. The default implementation will call
     * clutter_actor_remove_child().
     * @virtual 
     * @param actor a #ClutterActor
     */
    vfunc_remove(actor: Actor): void

    // Own signals of Clutter-11.Clutter.Container

    connect(sigName: "actor-added", callback: Container.ActorAddedSignalCallback): number
    connect_after(sigName: "actor-added", callback: Container.ActorAddedSignalCallback): number
    emit(sigName: "actor-added", actor: Actor, ...args: any[]): void
    connect(sigName: "actor-removed", callback: Container.ActorRemovedSignalCallback): number
    connect_after(sigName: "actor-removed", callback: Container.ActorRemovedSignalCallback): number
    emit(sigName: "actor-removed", actor: Actor, ...args: any[]): void
    connect(sigName: "child-notify", callback: Container.ChildNotifySignalCallback): number
    connect_after(sigName: "child-notify", callback: Container.ChildNotifySignalCallback): number
    emit(sigName: "child-notify", actor: Actor, pspec: any, ...args: any[]): void
}

/**
 * An interface for container actors
 * 
 * #ClutterContainer is an interface implemented by [class`Actor]`, and
 * it provides some common API for notifying when a child actor is added
 * or removed, as well as the infrastructure for accessing child properties
 * through [class`ChildMeta]`.
 * @interface 
 */
class Container {

    // Own properties of Clutter-11.Clutter.Container

    static name: string

    // Constructors of Clutter-11.Clutter.Container

    /**
     * Looks up the #GParamSpec for a child property of `klass`.
     * @param klass a #GObjectClass implementing the #ClutterContainer interface.
     * @param property_name a property name.
     * @returns The #GParamSpec for the property or %NULL   if no such property exist.
     */
    static class_find_child_property(klass: any, property_name: string | null): any
    /**
     * Returns an array of #GParamSpec for all child properties.
     * @param klass a #GObjectClass implementing the #ClutterContainer interface.
     * @returns an array   of `GParamSpec`s which should be freed after use.
     */
    static class_list_child_properties(klass: any): any[]
}

module Content {

    // Signal callback interfaces

    /**
     * Signal callback interface for `attached`
     */
    interface AttachedSignalCallback {
        ($obj: Content, actor: Actor): void
    }

    /**
     * Signal callback interface for `detached`
     */
    interface DetachedSignalCallback {
        ($obj: Content, actor: Actor): void
    }

}

interface Content {

    // Owm methods of Clutter-11.Clutter.Content

    /**
     * Retrieves the natural size of the `content,` if any.
     * 
     * The natural size of a #ClutterContent is defined as the size the content
     * would have regardless of the allocation of the actor that is painting it,
     * for instance the size of an image data.
     * @returns %TRUE if the content has a preferred size, and %FALSE   otherwise
     */
    get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Invalidates a #ClutterContent.
     * 
     * This function should be called by #ClutterContent implementations when
     * they change the way a the content should be painted regardless of the
     * actor state.
     */
    invalidate(): void
    /**
     * Signals that `content'`s size changed. Attached actors with request mode
     * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
     * 
     * Attached actors with other request modes are not redrawn. To redraw them
     * too, use clutter_content_invalidate().
     */
    invalidate_size(): void

    // Own virtual methods of Clutter-11.Clutter.Content

    vfunc_attached(actor: Actor): void
    vfunc_detached(actor: Actor): void
    /**
     * Retrieves the natural size of the `content,` if any.
     * 
     * The natural size of a #ClutterContent is defined as the size the content
     * would have regardless of the allocation of the actor that is painting it,
     * for instance the size of an image data.
     * @virtual 
     * @returns %TRUE if the content has a preferred size, and %FALSE   otherwise
     */
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Invalidates a #ClutterContent.
     * 
     * This function should be called by #ClutterContent implementations when
     * they change the way a the content should be painted regardless of the
     * actor state.
     * @virtual 
     */
    vfunc_invalidate(): void
    /**
     * Signals that `content'`s size changed. Attached actors with request mode
     * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
     * 
     * Attached actors with other request modes are not redrawn. To redraw them
     * too, use clutter_content_invalidate().
     * @virtual 
     */
    vfunc_invalidate_size(): void
    vfunc_paint_content(actor: Actor, node: PaintNode, paint_context: PaintContext): void

    // Own signals of Clutter-11.Clutter.Content

    connect(sigName: "attached", callback: Content.AttachedSignalCallback): number
    connect_after(sigName: "attached", callback: Content.AttachedSignalCallback): number
    emit(sigName: "attached", actor: Actor, ...args: any[]): void
    connect(sigName: "detached", callback: Content.DetachedSignalCallback): number
    connect_after(sigName: "detached", callback: Content.DetachedSignalCallback): number
    emit(sigName: "detached", actor: Actor, ...args: any[]): void
}

/**
 * Delegate for painting the content of an actor
 * 
 * #ClutterContent is an interface to implement types responsible for
 * painting the content of a [class`Actor]`.
 * 
 * Multiple actors can use the same #ClutterContent instance, in order
 * to share the resources associated with painting the same content..
 * @interface 
 */
class Content {

    // Own properties of Clutter-11.Clutter.Content

    static name: string
}

interface Scriptable {

    // Owm methods of Clutter-11.Clutter.Scriptable

    /**
     * Retrieves the id of `scriptable` set using [method`Clutter`.Scriptable.set_id].
     * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
     */
    get_id(): string | null
    /**
     * Parses the passed JSON node. The implementation must set the type
     * of the passed [struct`GObject`.Value] pointer using g_value_init().
     * @param script the #ClutterScript creating the scriptable instance
     * @param value the generic value to be set
     * @param name the name of the node
     * @param node the JSON node to be parsed
     * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
     */
    parse_custom_node(script: Script, value: any, name: string | null, node: any): boolean
    /**
     * Overrides the common properties setting. The underlying virtual
     * function should be used when implementing custom properties.
     * @param script the #ClutterScript creating the scriptable instance
     * @param name the name of the property
     * @param value the value of the property
     */
    set_custom_property(script: Script, name: string | null, value: any): void
    /**
     * Sets `id_` as the unique Clutter script it for this instance of
     * #ClutterScriptableIface.
     * 
     * This name can be used by user interface designer applications to
     * define a unique name for an object constructable using the UI
     * definition language parsed by [class`Script]`.
     * @param id_ the #ClutterScript id of the object
     */
    set_id(id_: string | null): void

    // Own virtual methods of Clutter-11.Clutter.Scriptable

    /**
     * Retrieves the id of `scriptable` set using [method`Clutter`.Scriptable.set_id].
     * @virtual 
     * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
     */
    vfunc_get_id(): string | null
    /**
     * Parses the passed JSON node. The implementation must set the type
     * of the passed [struct`GObject`.Value] pointer using g_value_init().
     * @virtual 
     * @param script the #ClutterScript creating the scriptable instance
     * @param value the generic value to be set
     * @param name the name of the node
     * @param node the JSON node to be parsed
     * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
     */
    vfunc_parse_custom_node(script: Script, value: any, name: string | null, node: any): boolean
    /**
     * Overrides the common properties setting. The underlying virtual
     * function should be used when implementing custom properties.
     * @virtual 
     * @param script the #ClutterScript creating the scriptable instance
     * @param name the name of the property
     * @param value the value of the property
     */
    vfunc_set_custom_property(script: Script, name: string | null, value: any): void
    /**
     * Sets `id_` as the unique Clutter script it for this instance of
     * #ClutterScriptableIface.
     * 
     * This name can be used by user interface designer applications to
     * define a unique name for an object constructable using the UI
     * definition language parsed by [class`Script]`.
     * @virtual 
     * @param id_ the #ClutterScript id of the object
     */
    vfunc_set_id(id_: string | null): void
}

/**
 * Override the UI definition parsing
 * 
 * The #ClutterScriptable interface exposes the UI definition parsing
 * process to external classes. By implementing this interface, a class can
 * override the UI definition parsing and transform complex data types into
 * [class`GObject`.Object] properties, or allow custom properties.
 * @interface 
 */
class Scriptable {

    // Own properties of Clutter-11.Clutter.Scriptable

    static name: string
}

interface Action {

    // Own fields of Clutter-11.Clutter.Action

    parent_instance: ActorMeta & any

    // Owm methods of Clutter-11.Clutter.Action

    get_phase(): EventPhase

    // Own virtual methods of Clutter-11.Clutter.Action

    vfunc_handle_event(event: Event): boolean
}

/**
 * Abstract class for event-related logic
 * 
 * #ClutterAction is an abstract base class for event-related actions that
 * modify the user interaction of a [class`Actor]`, just like
 * [class`Constraint]` is an abstract class for modifiers of an actor's
 * position or size.
 * 
 * Implementations of #ClutterAction are associated to an actor and can
 * provide behavioral changes when dealing with user input - for instance
 * drag and drop capabilities, or scrolling, or panning - by using the
 * various event-related signals provided by [class`Actor]` itself.
 * @class 
 */
class Action extends ActorMeta {

    // Own properties of Clutter-11.Clutter.Action

    static name: string
}

module Actor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `button-press-event`
     */
    interface ButtonPressEventSignalCallback {
        ($obj: Actor, event: ButtonEvent): boolean
    }

    /**
     * Signal callback interface for `button-release-event`
     */
    interface ButtonReleaseEventSignalCallback {
        ($obj: Actor, event: ButtonEvent): boolean
    }

    /**
     * Signal callback interface for `captured-event`
     */
    interface CapturedEventSignalCallback {
        ($obj: Actor, event: Event): boolean
    }

    /**
     * Signal callback interface for `destroy`
     */
    interface DestroySignalCallback {
        ($obj: Actor): void
    }

    /**
     * Signal callback interface for `enter-event`
     */
    interface EnterEventSignalCallback {
        ($obj: Actor, event: CrossingEvent): boolean
    }

    /**
     * Signal callback interface for `event`
     */
    interface EventSignalCallback {
        ($obj: Actor, event: Event): boolean
    }

    /**
     * Signal callback interface for `hide`
     */
    interface HideSignalCallback {
        ($obj: Actor): void
    }

    /**
     * Signal callback interface for `key-focus-in`
     */
    interface KeyFocusInSignalCallback {
        ($obj: Actor): void
    }

    /**
     * Signal callback interface for `key-focus-out`
     */
    interface KeyFocusOutSignalCallback {
        ($obj: Actor): void
    }

    /**
     * Signal callback interface for `key-press-event`
     */
    interface KeyPressEventSignalCallback {
        ($obj: Actor, event: KeyEvent): boolean
    }

    /**
     * Signal callback interface for `key-release-event`
     */
    interface KeyReleaseEventSignalCallback {
        ($obj: Actor, event: KeyEvent): boolean
    }

    /**
     * Signal callback interface for `leave-event`
     */
    interface LeaveEventSignalCallback {
        ($obj: Actor, event: CrossingEvent): boolean
    }

    /**
     * Signal callback interface for `motion-event`
     */
    interface MotionEventSignalCallback {
        ($obj: Actor, event: MotionEvent): boolean
    }

    /**
     * Signal callback interface for `parent-set`
     */
    interface ParentSetSignalCallback {
        ($obj: Actor, old_parent: Actor | null): void
    }

    /**
     * Signal callback interface for `pick`
     */
    interface PickSignalCallback {
        ($obj: Actor, pick_context: PickContext): void
    }

    /**
     * Signal callback interface for `queue-relayout`
     */
    interface QueueRelayoutSignalCallback {
        ($obj: Actor): void
    }

    /**
     * Signal callback interface for `realize`
     */
    interface RealizeSignalCallback {
        ($obj: Actor): void
    }

    /**
     * Signal callback interface for `resource-scale-changed`
     */
    interface ResourceScaleChangedSignalCallback {
        ($obj: Actor): void
    }

    /**
     * Signal callback interface for `scroll-event`
     */
    interface ScrollEventSignalCallback {
        ($obj: Actor, event: ScrollEvent): boolean
    }

    /**
     * Signal callback interface for `show`
     */
    interface ShowSignalCallback {
        ($obj: Actor): void
    }

    /**
     * Signal callback interface for `stage-views-changed`
     */
    interface StageViewsChangedSignalCallback {
        ($obj: Actor): void
    }

    /**
     * Signal callback interface for `touch-event`
     */
    interface TouchEventSignalCallback {
        ($obj: Actor, event: Event): boolean
    }

    /**
     * Signal callback interface for `transition-stopped`
     */
    interface TransitionStoppedSignalCallback {
        ($obj: Actor, name: string | null, is_finished: boolean): void
    }

    /**
     * Signal callback interface for `transitions-completed`
     */
    interface TransitionsCompletedSignalCallback {
        ($obj: Actor): void
    }

    /**
     * Signal callback interface for `unrealize`
     */
    interface UnrealizeSignalCallback {
        ($obj: Actor): void
    }

}

interface Actor extends Atk.ImplementorIface, Animatable, Container, Scriptable {

    // Own properties of Clutter-11.Clutter.Actor

    /**
     * Adds a #ClutterAction to the actor
     */
    actions: Action
    /**
     * The allocation for the actor, in pixels
     * 
     * This is property is read-only, but you might monitor it to know when an
     * actor moves or resizes
     */
    readonly allocation: ActorBox
    /**
     * Paints a solid fill of the actor's allocation using the specified
     * color.
     * 
     * The #ClutterActor:background-color property is animatable.
     */
    background_color: Color
    /**
     * Whether the #ClutterActor:background-color property has been set.
     */
    readonly background_color_set: boolean
    /**
     * Applies a transformation matrix on each child of an actor.
     * 
     * Setting this property with a #graphene_matrix_t will set the
     * #ClutterActor:child-transform-set property to %TRUE as a side effect;
     * setting this property with %NULL will set the
     * #ClutterActor:child-transform-set property to %FALSE.
     * 
     * The #ClutterActor:child-transform property is animatable.
     */
    child_transform: any
    /**
     * Whether the #ClutterActor:child-transform property is set.
     */
    readonly child_transform_set: boolean
    /**
     * The visible region of the actor, in actor-relative coordinates,
     * expressed as a #graphene_rect_t.
     * 
     * Setting this property to %NULL will unset the existing clip.
     * 
     * Setting this property will change the #ClutterActor:has-clip
     * property as a side effect.
     */
    clip_rect: any
    /**
     * Whether the clip region should track the allocated area
     * of the actor.
     * 
     * This property is ignored if a clip area has been explicitly
     * set using clutter_actor_set_clip().
     */
    clip_to_allocation: boolean
    /**
     * The #ClutterColorState contains the properties like colorspace for each
     * actors.
     */
    color_state: ColorState
    /**
     * Adds a #ClutterConstraint to the actor
     */
    constraints: Constraint
    /**
     * The #ClutterContent implementation that controls the content
     * of the actor.
     */
    content: Content
    /**
     * The bounding box for the #ClutterContent used by the actor.
     * 
     * The value of this property is controlled by the #ClutterActor:allocation
     * and #ClutterActor:content-gravity properties of #ClutterActor.
     * 
     * The bounding box for the content is guaranteed to never exceed the
     * allocation's of the actor.
     */
    readonly content_box: ActorBox
    /**
     * The alignment that should be honoured by the #ClutterContent
     * set with the #ClutterActor:content property.
     * 
     * Changing the value of this property will change the bounding box of
     * the content; you can use the #ClutterActor:content-box property to
     * get the position and size of the content within the actor's
     * allocation.
     * 
     * This property is meaningful only for #ClutterContent implementations
     * that have a preferred size, and if the preferred size is smaller than
     * the actor's allocation.
     * 
     * The #ClutterActor:content-gravity property is animatable.
     */
    content_gravity: ContentGravity
    /**
     * The repeat policy for the actor's #ClutterActor:content.
     */
    content_repeat: ContentRepeat
    /**
     * Adds #ClutterEffect to the list of effects be applied on a #ClutterActor
     */
    effect: Effect
    /**
     * The actor's first child.
     */
    readonly first_child: Actor
    /**
     * This flag controls whether the #ClutterActor:fixed-x and
     * #ClutterActor:fixed-y properties are used
     */
    fixed_position_set: boolean
    /**
     * The fixed X position of the actor in pixels.
     * 
     * Writing this property sets #ClutterActor:fixed-position-set
     * property as well, as a side effect
     */
    fixed_x: number
    /**
     * The fixed Y position of the actor in pixels.
     * 
     * Writing this property sets the #ClutterActor:fixed-position-set
     * property as well, as a side effect
     */
    fixed_y: number
    /**
     * Whether the actor has the #ClutterActor:clip property set or not
     */
    readonly has_clip: boolean
    /**
     * Whether the actor contains the pointer of a #ClutterInputDevice
     * or not.
     */
    readonly has_pointer: boolean
    /**
     * Height of the actor (in pixels).  If written, forces the minimum and
     * natural size request of the actor to the given height. If read, returns
     * the allocated height if available, otherwise the height request.
     * 
     * The #ClutterActor:height property is animatable.
     */
    height: number
    /**
     * The actor's last child.
     */
    readonly last_child: Actor
    /**
     * A delegate object for controlling the layout of the children of
     * an actor.
     */
    layout_manager: LayoutManager
    magnification_filter: ScalingFilter
    /**
     * Whether the actor is mapped (will be painted when the stage
     * to which it belongs is mapped)
     */
    readonly mapped: boolean
    /**
     * The margin (in pixels) from the bottom of the actor.
     * 
     * This property adds a margin to the actor's preferred size; the margin
     * will be automatically taken into account when allocating the actor.
     * 
     * The #ClutterActor:margin-bottom property is animatable.
     */
    margin_bottom: number
    /**
     * The margin (in pixels) from the left of the actor.
     * 
     * This property adds a margin to the actor's preferred size; the margin
     * will be automatically taken into account when allocating the actor.
     * 
     * The #ClutterActor:margin-left property is animatable.
     */
    margin_left: number
    /**
     * The margin (in pixels) from the right of the actor.
     * 
     * This property adds a margin to the actor's preferred size; the margin
     * will be automatically taken into account when allocating the actor.
     * 
     * The #ClutterActor:margin-right property is animatable.
     */
    margin_right: number
    /**
     * The margin (in pixels) from the top of the actor.
     * 
     * This property adds a margin to the actor's preferred size; the margin
     * will be automatically taken into account when allocating the actor.
     * 
     * The #ClutterActor:margin-top property is animatable.
     */
    margin_top: number
    /**
     * A forced minimum height request for the actor, in pixels
     * 
     * Writing this property sets the #ClutterActor:min-height-set property
     * as well, as a side effect. This property overrides the usual height
     * request of the actor.
     */
    min_height: number
    /**
     * This flag controls whether the #ClutterActor:min-height property
     * is used
     */
    min_height_set: boolean
    /**
     * A forced minimum width request for the actor, in pixels
     * 
     * Writing this property sets the #ClutterActor:min-width-set property
     * as well, as a side effect.
     * 
     * This property overrides the usual width request of the actor.
     */
    min_width: number
    /**
     * This flag controls whether the #ClutterActor:min-width property
     * is used
     */
    min_width_set: boolean
    minification_filter: ScalingFilter
    /**
     * The name of the actor
     */
    name: string | null
    /**
     * A forced natural height request for the actor, in pixels
     * 
     * Writing this property sets the #ClutterActor:natural-height-set
     * property as well, as a side effect. This property overrides the
     * usual height request of the actor
     */
    natural_height: number
    /**
     * This flag controls whether the #ClutterActor:natural-height property
     * is used
     */
    natural_height_set: boolean
    /**
     * A forced natural width request for the actor, in pixels
     * 
     * Writing this property sets the #ClutterActor:natural-width-set
     * property as well, as a side effect. This property overrides the
     * usual width request of the actor
     */
    natural_width: number
    /**
     * This flag controls whether the #ClutterActor:natural-width property
     * is used
     */
    natural_width_set: boolean
    /**
     * Determines the conditions in which the actor will be redirected
     * to an offscreen framebuffer while being painted. For example this
     * can be used to cache an actor in a framebuffer or for improved
     * handling of transparent actors. See
     * clutter_actor_set_offscreen_redirect() for details.
     */
    offscreen_redirect: OffscreenRedirect
    /**
     * Opacity of an actor, between 0 (fully transparent) and
     * 255 (fully opaque)
     * 
     * The #ClutterActor:opacity property is animatable.
     */
    opacity: number
    /**
     * The point around which the scaling and rotation transformations occur.
     * 
     * The pivot point is expressed in normalized coordinates space, with (0, 0)
     * being the top left corner of the actor and (1, 1) the bottom right corner
     * of the actor.
     * 
     * The default pivot point is located at (0, 0).
     * 
     * The #ClutterActor:pivot-point property is animatable.
     */
    pivot_point: any
    /**
     * The Z component of the #ClutterActor:pivot-point, expressed as a value
     * along the Z axis.
     * 
     * The #ClutterActor:pivot-point-z property is animatable.
     */
    pivot_point_z: number
    /**
     * The position of the origin of the actor.
     * 
     * This property is a shorthand for setting and getting the
     * #ClutterActor:x and #ClutterActor:y properties at the same
     * time.
     * 
     * The #ClutterActor:position property is animatable.
     */
    position: any
    /**
     * Whether the actor is reactive to events or not
     * 
     * Only reactive actors will emit event-related signals
     */
    reactive: boolean
    /**
     * Whether the actor has been realized
     */
    readonly realized: boolean
    /**
     * Request mode for the #ClutterActor. The request mode determines the
     * type of geometry management used by the actor, either height for width
     * (the default) or width for height.
     * 
     * For actors implementing height for width, the parent container should get
     * the preferred width first, and then the preferred height for that width.
     * 
     * For actors implementing width for height, the parent container should get
     * the preferred height first, and then the preferred width for that height.
     * 
     * For instance:
     * 
     * ```c
     *   ClutterRequestMode mode;
     *   gfloat natural_width, min_width;
     *   gfloat natural_height, min_height;
     * 
     *   mode = clutter_actor_get_request_mode (child);
     *   if (mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
     *     {
     *       clutter_actor_get_preferred_width (child, -1,
     *                                          &min_width,
     *                                          &natural_width);
     *       clutter_actor_get_preferred_height (child, natural_width,
     *                                           &min_height,
     *                                           &natural_height);
     *     }
     *   else if (mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
     *     {
     *       clutter_actor_get_preferred_height (child, -1,
     *                                           &min_height,
     *                                           &natural_height);
     *       clutter_actor_get_preferred_width (child, natural_height,
     *                                          &min_width,
     *                                          &natural_width);
     *     }
     *   else if (mode == CLUTTER_REQUEST_CONTENT_SIZE)
     *     {
     *       ClutterContent *content = clutter_actor_get_content (child);
     * 
     *       min_width, min_height = 0;
     *       natural_width = natural_height = 0;
     * 
     *       if (content != NULL)
     *         clutter_content_get_preferred_size (content, &natural_width, &natural_height);
     *     }
     * ```
     * 
     * will retrieve the minimum and natural width and height depending on the
     * preferred request mode of the #ClutterActor "child".
     * 
     * The clutter_actor_get_preferred_size() function will implement this
     * check for you.
     */
    request_mode: RequestMode
    /**
     * The rotation angle on the X axis.
     * 
     * The #ClutterActor:rotation-angle-x property is animatable.
     */
    rotation_angle_x: number
    /**
     * The rotation angle on the Y axis
     * 
     * The #ClutterActor:rotation-angle-y property is animatable.
     */
    rotation_angle_y: number
    /**
     * The rotation angle on the Z axis
     * 
     * The #ClutterActor:rotation-angle-z property is animatable.
     */
    rotation_angle_z: number
    /**
     * The horizontal scale of the actor.
     * 
     * The #ClutterActor:scale-x property is animatable.
     */
    scale_x: number
    /**
     * The vertical scale of the actor.
     * 
     * The #ClutterActor:scale-y property is animatable.
     */
    scale_y: number
    /**
     * The scale factor of the actor along the Z axis.
     * 
     * The #ClutterActor:scale-y property is animatable.
     */
    scale_z: number
    /**
     * If %TRUE, the actor is automatically shown when parented.
     * 
     * Calling clutter_actor_hide() on an actor which has not been
     * parented will set this property to %FALSE as a side effect.
     */
    show_on_set_parent: boolean
    /**
     * The size of the actor.
     * 
     * This property is a shorthand for setting and getting the
     * #ClutterActor:width and #ClutterActor:height at the same time.
     * 
     * The #ClutterActor:size property is animatable.
     */
    size: any
    /**
     * The direction of the text inside a #ClutterActor.
     */
    text_direction: TextDirection
    /**
     * Overrides the transformations of a #ClutterActor with a custom
     * matrix.
     * 
     * The matrix specified by the #ClutterActor:transform property is
     * applied to the actor and its children relative to the actor's
     * #ClutterActor:allocation and #ClutterActor:pivot-point.
     * 
     * Application code should rarely need to use this function directly.
     * 
     * Setting this property with a #graphene_matrix_t will set the
     * #ClutterActor:transform-set property to %TRUE as a side effect;
     * setting this property with %NULL will set the
     * #ClutterActor:transform-set property to %FALSE.
     * 
     * The #ClutterActor:transform property is animatable.
     */
    transform: any
    /**
     * Whether the #ClutterActor:transform property is set.
     */
    readonly transform_set: boolean
    /**
     * An additional translation applied along the X axis, relative
     * to the actor's #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:translation-x property is animatable.
     */
    translation_x: number
    /**
     * An additional translation applied along the Y axis, relative
     * to the actor's #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:translation-y property is animatable.
     */
    translation_y: number
    /**
     * An additional translation applied along the Z axis, relative
     * to the actor's #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:translation-z property is animatable.
     */
    translation_z: number
    /**
     * Whether the actor is set to be visible or not
     * 
     * See also #ClutterActor:mapped
     */
    visible: boolean
    /**
     * Width of the actor (in pixels). If written, forces the minimum and
     * natural size request of the actor to the given width. If read, returns
     * the allocated width if available, otherwise the width request.
     * 
     * The #ClutterActor:width property is animatable.
     */
    width: number
    /**
     * X coordinate of the actor in pixels. If written, forces a fixed
     * position for the actor. If read, returns the fixed position if any,
     * otherwise the allocation if available, otherwise 0.
     * 
     * The #ClutterActor:x property is animatable.
     */
    x: number
    /**
     * The alignment of an actor on the X axis, if the actor has been given
     * extra space for its allocation. See also the #ClutterActor:x-expand
     * property.
     */
    x_align: ActorAlign
    /**
     * Whether a layout manager should assign more space to the actor on
     * the X axis.
     */
    x_expand: boolean
    /**
     * Y coordinate of the actor in pixels. If written, forces a fixed
     * position for the actor.  If read, returns the fixed position if
     * any, otherwise the allocation if available, otherwise 0.
     * 
     * The #ClutterActor:y property is animatable.
     */
    y: number
    /**
     * The alignment of an actor on the Y axis, if the actor has been given
     * extra space for its allocation.
     */
    y_align: ActorAlign
    /**
     * Whether a layout manager should assign more space to the actor on
     * the Y axis.
     */
    y_expand: boolean
    /**
     * The actor's position on the Z axis, relative to the parent's
     * transformations.
     * 
     * Positive values will bring the actor's position nearer to the user,
     * whereas negative values will bring the actor's position farther from
     * the user.
     * 
     * The #ClutterActor:z-position does not affect the paint or allocation
     * order.
     * 
     * The #ClutterActor:z-position property is animatable.
     */
    z_position: number

    // Own fields of Clutter-11.Clutter.Actor

    flags: number

    // Owm methods of Clutter-11.Clutter.Actor

    /**
     * Adds `action` to the list of actions applied to `self`
     * 
     * A #ClutterAction can only belong to one actor at a time
     * 
     * The #ClutterActor will hold a reference on `action` until either
     * clutter_actor_remove_action() or clutter_actor_clear_actions()
     * is called
     * @param action a #ClutterAction
     */
    add_action(action: Action): void
    add_action_full(name: string | null, phase: EventPhase, action: Action): void
    /**
     * A convenience function for setting the name of a #ClutterAction
     * while adding it to the list of actions applied to `self`
     * 
     * This function is the logical equivalent of:
     * 
     * ```c
     *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (action), name);
     *   clutter_actor_add_action (self, action);
     * ```
     * @param name the name to set on the action
     * @param action a #ClutterAction
     */
    add_action_with_name(name: string | null, action: Action): void
    /**
     * Adds `child` to the children of `self`.
     * 
     * This function will acquire a reference on `child` that will only
     * be released when calling clutter_actor_remove_child().
     * 
     * This function will take into consideration the #ClutterActor:depth
     * of `child,` and will keep the list of children sorted.
     * 
     * This function will emit the #ClutterContainer::actor-added signal
     * on `self`.
     * @param child a #ClutterActor
     */
    add_child(child: Actor): void
    /**
     * Adds `constraint` to the list`of `ClutterConstraint`s applied
     * to `self`
     * 
     * The #ClutterActor will hold a reference on the `constraint` until
     * either clutter_actor_remove_constraint() or
     * clutter_actor_clear_constraints() is called.
     * @param constraint a #ClutterConstraint
     */
    add_constraint(constraint: Constraint): void
    /**
     * A convenience function for setting the name of a #ClutterConstraint
     * while adding it to the list of constraints applied to `self`
     * 
     * This function is the logical equivalent of:
     * 
     * ```c
     *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (constraint), name);
     *   clutter_actor_add_constraint (self, constraint);
     * ```
     * @param name the name to set on the constraint
     * @param constraint a #ClutterConstraint
     */
    add_constraint_with_name(name: string | null, constraint: Constraint): void
    /**
     * Adds `effect` to the list of `ClutterEffect`s applied to `self`
     * 
     * The #ClutterActor will hold a reference on the `effect` until either
     * clutter_actor_remove_effect() or clutter_actor_clear_effects() is
     * called.
     * @param effect a #ClutterEffect
     */
    add_effect(effect: Effect): void
    /**
     * A convenience function for setting the name of a #ClutterEffect
     * while adding it to the list of effectss applied to `self`
     * 
     * This function is the logical equivalent of:
     * 
     * ```c
     *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (effect), name);
     *   clutter_actor_add_effect (self, effect);
     * ```
     * @param name the name to set on the effect
     * @param effect a #ClutterEffect
     */
    add_effect_with_name(name: string | null, effect: Effect): void
    /**
     * Adds a `transition` to the #ClutterActor's list of animations.
     * 
     * The `name` string is a per-actor unique identifier of the `transition:` only
     * one #ClutterTransition can be associated to the specified `name`.
     * 
     * The `transition` will be started once added.
     * 
     * This function will take a reference on the `transition`.
     * 
     * This function is usually called implicitly when modifying an animatable
     * property.
     * @param name the name of the transition to add
     * @param transition the #ClutterTransition to add
     */
    add_transition(name: string | null, transition: Transition): void
    /**
     * Assigns the size of a #ClutterActor from the given `box`.
     * 
     * This function should only be called on the children of an actor when
     * overriding the #ClutterActorClass.allocate() virtual function.
     * 
     * This function will adjust the stored allocation to take into account
     * the alignment flags set in the #ClutterActor:x-align and
     * #ClutterActor:y-align properties, as well as the margin values set in
     * the #ClutterActor:margin-top, #ClutterActor:margin-right,
     * #ClutterActor:margin-bottom, and #ClutterActor:margin-left properties.
     * 
     * This function will respect the easing state of the #ClutterActor and
     * interpolate between the current allocation and the new one if the
     * easing state duration is a positive value.
     * 
     * Actors can know from their allocation box whether they have moved
     * with respect to their parent actor. The `flags` parameter describes
     * additional information about the allocation, for instance whether
     * the parent has moved with respect to the stage, for example because
     * a grandparent's origin has moved.
     * @param box new allocation of the actor, in parent-relative coordinates
     */
    allocate(box: ActorBox): void
    /**
     * Allocates `self` by taking into consideration the available allocation
     * area; an alignment factor on either axis; and whether the actor should
     * fill the allocation on either axis.
     * 
     * The `box` should contain the available allocation width and height;
     * if the x1 and y1 members of #ClutterActorBox are not set to 0, the
     * allocation will be offset by their value.
     * 
     * This function takes into consideration the geometry request specified by
     * the #ClutterActor:request-mode property, and the text direction.
     * 
     * This function is useful for fluid layout managers using legacy alignment
     * flags. Newly written layout managers should use the #ClutterActor:x-align
     * and #ClutterActor:y-align properties, instead, and just call
     * clutter_actor_allocate() inside their #ClutterActorClass.allocate()
     * implementation.
     * @param box a #ClutterActorBox, containing the available width and height
     * @param x_align the horizontal alignment, between 0 and 1
     * @param y_align the vertical alignment, between 0 and 1
     * @param x_fill whether the actor should fill horizontally
     * @param y_fill whether the actor should fill vertically
     */
    allocate_align_fill(box: ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void
    /**
     * Allocates `self` taking into account the #ClutterActor's
     * preferred size, but limiting it to the maximum available width
     * and height provided.
     * 
     * This function will do the right thing when dealing with the
     * actor's request mode.
     * 
     * The implementation of this function is equivalent to:
     * 
     * ```c
     *   if (request_mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
     *     {
     *       clutter_actor_get_preferred_width (self, available_height,
     *                                          &min_width,
     *                                          &natural_width);
     *       width = CLAMP (natural_width, min_width, available_width);
     * 
     *       clutter_actor_get_preferred_height (self, width,
     *                                           &min_height,
     *                                           &natural_height);
     *       height = CLAMP (natural_height, min_height, available_height);
     *     }
     *   else if (request_mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
     *     {
     *       clutter_actor_get_preferred_height (self, available_width,
     *                                           &min_height,
     *                                           &natural_height);
     *       height = CLAMP (natural_height, min_height, available_height);
     * 
     *       clutter_actor_get_preferred_width (self, height,
     *                                          &min_width,
     *                                          &natural_width);
     *       width = CLAMP (natural_width, min_width, available_width);
     *     }
     *   else if (request_mode == CLUTTER_REQUEST_CONTENT_SIZE)
     *     {
     *       clutter_content_get_preferred_size (content, &natural_width, &natural_height);
     * 
     *       width = CLAMP (natural_width, 0, available_width);
     *       height = CLAMP (natural_height, 0, available_height);
     *     }
     * 
     *   box.x1 = x; box.y1 = y;
     *   box.x2 = box.x1 + available_width;
     *   box.y2 = box.y1 + available_height;
     *   clutter_actor_allocate (self, &box);
     * ```
     * 
     * This function can be used by fluid layout managers to allocate
     * an actor's preferred size without making it bigger than the area
     * available for the container.
     * @param x the actor's X coordinate
     * @param y the actor's Y coordinate
     * @param available_width the maximum available width, or -1 to use the   actor's natural width
     * @param available_height the maximum available height, or -1 to use the   actor's natural height
     */
    allocate_available_size(x: number, y: number, available_width: number, available_height: number): void
    /**
     * Allocates the natural size of `self`.
     * 
     * This function is a utility call for #ClutterActor implementations
     * that allocates the actor's preferred natural size. It can be used
     * by fixed layout managers (like #ClutterGroup or so called
     * 'composite actors') inside the ClutterActor::allocate
     * implementation to give each child exactly how much space it
     * requires, regardless of the size of the parent.
     * 
     * This function is not meant to be used by applications. It is also
     * not meant to be used outside the implementation of the
     * #ClutterActorClass.allocate virtual function.
     * @param x the actor's X coordinate
     * @param y the actor's Y coordinate
     */
    allocate_preferred_size(x: number, y: number): void
    /**
     * Transforms `point` in coordinates relative to the actor into
     * ancestor-relative coordinates using the relevant transform
     * stack (i.e. scale, rotation, etc).
     * 
     * If `ancestor` is %NULL the ancestor will be the #ClutterStage. In
     * this case, the coordinates returned will be the coordinates on
     * the stage before the projection is applied. This is different from
     * the behaviour of clutter_actor_apply_transform_to_point().
     * @param ancestor A #ClutterActor ancestor, or %NULL to use the   default #ClutterStage
     * @param point A point as #graphene_point3d_t
     */
    apply_relative_transform_to_point(ancestor: Actor | null, point: any): /* vertex */ any
    /**
     * Transforms `point` in coordinates relative to the actor
     * into screen-relative coordinates with the current actor
     * transformation (i.e. scale, rotation, etc)
     * @param point A point as #graphene_point3d_t
     */
    apply_transform_to_point(point: any): /* vertex */ any
    /**
     * Binds a #GListModel to a #ClutterActor.
     * 
     * If the #ClutterActor was already bound to a #GListModel, the previous
     * binding is destroyed.
     * 
     * The existing children of #ClutterActor are destroyed when setting a
     * model, and new children are created and added, representing the contents
     * of the `model`. The #ClutterActor is updated whenever the `model` changes.
     * If `model` is %NULL, the #ClutterActor is left empty.
     * 
     * When a #ClutterActor is bound to a model, adding and removing children
     * directly is undefined behaviour.4
     * @param model a #GListModel
     * @param create_child_func a function that creates #ClutterActor instances   from the contents of the `model`
     */
    bind_model(model: any | null, create_child_func: ActorCreateChildFunc): void
    /**
     * Clears the list of actions applied to `self`
     */
    clear_actions(): void
    /**
     * Clears the list of constraints applied to `self`
     */
    clear_constraints(): void
    /**
     * Clears the list of effects applied to `self`
     */
    clear_effects(): void
    /**
     * Determines if `descendant` is contained inside `self` (either as an
     * immediate child, or as a deeper descendant). If `self` and
     * `descendant` point to the same actor then it will also return %TRUE.
     * @param descendant A #ClutterActor, possibly contained in `self`
     * @returns whether @descendent is contained within @self
     */
    contains(descendant: Actor): boolean
    /**
     * Run the next stage of the paint sequence. This function should only
     * be called within the implementation of the ‘run’ virtual of a
     * #ClutterEffect. It will cause the run method of the next effect to
     * be applied, or it will paint the actual actor if the current effect
     * is the last effect in the chain.
     * @param paint_context 
     */
    continue_paint(paint_context: PaintContext): void
    /**
     * Run the next stage of the pick sequence. This function should only
     * be called within the implementation of the ‘pick’ virtual of a
     * #ClutterEffect. It will cause the run method of the next effect to
     * be applied, or it will pick the actual actor if the current effect
     * is the last effect in the chain.
     * @param pick_context 
     */
    continue_pick(pick_context: PickContext): void
    /**
     * Creates a #PangoContext for the given actor. The #PangoContext
     * is already configured using the appropriate font map, resolution
     * and font options.
     * 
     * See also clutter_actor_get_pango_context().
     * @returns the newly created #PangoContext.   Use g_object_unref() on the returned value to deallocate its   resources
     */
    create_pango_context(): Pango.Context
    /**
     * Creates a new #PangoLayout from the same #PangoContext used
     * by the #ClutterActor. The #PangoLayout is already configured
     * with the font map, resolution and font options, and the
     * given `text`.
     * 
     * If you want to keep around a #PangoLayout created by this
     * function you will have to connect to the #ClutterBackend::font-changed
     * and #ClutterBackend::resolution-changed signals, and call
     * pango_layout_context_changed() in response to them.
     * @param text the text to set on the #PangoLayout, or %NULL
     * @returns the newly created #PangoLayout.   Use g_object_unref() when done
     */
    create_pango_layout(text: string | null): Pango.Layout
    /**
     * Destroys an actor.  When an actor is destroyed, it will break any
     * references it holds to other objects.  If the actor is inside a
     * container, the actor will be removed.
     * 
     * When you destroy a container, its children will be destroyed as well.
     */
    destroy(): void
    /**
     * Destroys all children of `self`.
     * 
     * This function releases the reference added by inserting a child
     * actor in the list of children of `self,` and ensures that the
     * #ClutterActor::destroy signal is emitted on each child of the
     * actor.
     * 
     * By default, #ClutterActor will emit the #ClutterActor::destroy signal
     * when its reference count drops to 0; the default handler of the
     * #ClutterActor::destroy signal will destroy all the children of an
     * actor. This function ensures that all children are destroyed, instead
     * of just removed from `self,` unlike clutter_actor_remove_all_children()
     * which will merely release the reference and remove each child.
     * 
     * Unless you acquired an additional reference on each child of `self`
     * prior to calling clutter_actor_remove_all_children() and want to reuse
     * the actors, you should use clutter_actor_destroy_all_children() in
     * order to make sure that children are destroyed and signal handlers
     * are disconnected even in cases where circular references prevent this
     * from automatically happening through reference counting alone.
     */
    destroy_all_children(): void
    /**
     * This function is used to emit an event on the main stage.
     * You should rarely need to use this function, except for
     * synthetising events.
     * @param event a #ClutterEvent
     * @param capture %TRUE if event in in capture phase, %FALSE otherwise.
     * @returns the return value from the signal emission: %TRUE   if the actor handled the event, or %FALSE if the event was   not handled
     */
    event(event: Event, capture: boolean): boolean
    /**
     * Calculates the transformed screen coordinates of the four corners of
     * the actor; the returned vertices relate to the #ClutterActorBox
     * coordinates  as follows:
     * 
     *  - v[0] contains (x1, y1)
     *  - v[1] contains (x2, y1)
     *  - v[2] contains (x1, y2)
     *  - v[3] contains (x2, y2)
     */
    get_abs_allocation_vertices(): /* verts */ any[]
    /**
     * Returns the accessible object that describes the actor to an
     * assistive technology.
     * 
     * If no class-specific #AtkObject implementation is available for the
     * actor instance in question, it will inherit an #AtkObject
     * implementation from the first ancestor class for which such an
     * implementation is defined.
     * 
     * The documentation of the <ulink
     * url="http://developer.gnome.org/doc/API/2.0/atk/index.html">ATK</ulink>
     * library contains more information about accessible objects and
     * their uses.
     * @returns the #AtkObject associated with @actor
     */
    get_accessible(): Atk.Object
    /**
     * Retrieves the #ClutterAction with the given name in the list
     * of actions applied to `self`
     * @param name the name of the action to retrieve
     * @returns a #ClutterAction for the given   name, or %NULL. The returned #ClutterAction is owned by the   actor and it should not be unreferenced directly
     */
    get_action(name: string | null): Action | null
    /**
     * Retrieves the list of actions applied to `self`
     * @returns a copy   of the list of `ClutterAction`s. The contents of the list are   owned by the #ClutterActor. Use g_list_free() to free the resources   allocated by the returned #GList
     */
    get_actions(): Action[]
    /**
     * Gets the layout box an actor has been assigned. The allocation can
     * only be assumed valid inside a paint() method; anywhere else, it
     * may be out-of-date.
     * 
     * An allocation does not incorporate the actor's scale or translation;
     * those transformations do not affect layout, only rendering.
     * 
     * Do not call any of the clutter_actor_get_allocation_*() family
     * of functions inside the implementation of the get_preferred_width()
     * or get_preferred_height() virtual functions.
     */
    get_allocation_box(): /* box */ ActorBox
    /**
     * Retrieves the color set using clutter_actor_set_background_color().
     */
    get_background_color(): /* color */ Color
    /**
     * Retrieves the actor at the given `index_` inside the list of
     * children of `self`.
     * @param index_ the position in the list of children
     * @returns a pointer to a #ClutterActor,   or %NULL
     */
    get_child_at_index(index_: number): Actor | null
    /**
     * Retrieves the child transformation matrix set using
     * clutter_actor_set_child_transform(); if none is currently set,
     * the `transform` matrix will be initialized to the identity matrix.
     */
    get_child_transform(): /* transform */ any
    /**
     * Retrieves the list of children of `self`.
     * @returns A newly   allocated #GList of `ClutterActor`s. Use g_list_free() when   done.
     */
    get_children(): Actor[]
    /**
     * Gets the clip area for `self,` if any is set.
     */
    get_clip(): [ /* xoff */ number, /* yoff */ number, /* width */ number, /* height */ number ]
    /**
     * Retrieves the value set using clutter_actor_set_clip_to_allocation()
     * @returns %TRUE if the #ClutterActor is clipped to its allocation
     */
    get_clip_to_allocation(): boolean
    /**
     * Retrieves the color_state of a [class`Actor]` set by
     * [method`Actor`.set_color_state].
     * @returns a pointer to the #ClutterColorState instance, or %NULL
     */
    get_color_state(): ColorState
    /**
     * Retrieves the #ClutterConstraint with the given name in the list
     * of constraints applied to `self`
     * @param name the name of the constraint to retrieve
     * @returns a #ClutterConstraint for the given   name, or %NULL. The returned #ClutterConstraint is owned by the   actor and it should not be unreferenced directly
     */
    get_constraint(name: string | null): Constraint | null
    /**
     * Retrieves the list of constraints applied to `self`
     * @returns a copy   of the list of `ClutterConstraint`s. The contents of the list are   owned by the #ClutterActor. Use g_list_free() to free the resources   allocated by the returned #GList
     */
    get_constraints(): Constraint[]
    /**
     * Retrieves the contents of `self`.
     * @returns a pointer to the #ClutterContent   instance, or %NULL if none was set
     */
    get_content(): Content | null
    /**
     * Retrieves the bounding box for the #ClutterContent of `self`.
     * 
     * The bounding box is relative to the actor's allocation.
     * 
     * If no #ClutterContent is set for `self,` or if `self` has not been
     * allocated yet, then the result is undefined.
     * 
     * The content box is guaranteed to be, at most, as big as the allocation
     * of the #ClutterActor.
     * 
     * If the #ClutterContent used by the actor has a preferred size, then
     * it is possible to modify the content box by using the
     * #ClutterActor:content-gravity property.
     */
    get_content_box(): /* box */ ActorBox
    /**
     * Retrieves the content gravity as set using
     * clutter_actor_set_content_gravity().
     * @returns the content gravity
     */
    get_content_gravity(): ContentGravity
    /**
     * Retrieves the repeat policy for a #ClutterActor set by
     * clutter_actor_set_content_repeat().
     * @returns the content repeat policy
     */
    get_content_repeat(): ContentRepeat
    /**
     * Retrieves the values set using clutter_actor_set_content_scaling_filters().
     */
    get_content_scaling_filters(): [ /* min_filter */ ScalingFilter, /* mag_filter */ ScalingFilter ]
    /**
     * Retrieves the default paint volume for `self`.
     * 
     * This function provides the same #ClutterPaintVolume that would be
     * computed by the default implementation inside #ClutterActor of the
     * #ClutterActorClass.get_paint_volume() virtual function.
     * 
     * This function should only be used by #ClutterActor subclasses that
     * cannot chain up to the parent implementation when computing their
     * paint volume.
     * @returns a pointer to the default   #ClutterPaintVolume, relative to the #ClutterActor, or %NULL if   the actor could not compute a valid paint volume. The returned value   is not guaranteed to be stable across multiple frames, so if you   want to retain it, you will need to copy it using   clutter_paint_volume_copy().
     */
    get_default_paint_volume(): PaintVolume | null
    /**
     * Retrieves the delay that should be applied when tweening animatable
     * properties.
     * @returns a delay, in milliseconds
     */
    get_easing_delay(): number
    /**
     * Retrieves the duration of the tweening for animatable
     * properties of `self` for the current easing state.
     * @returns the duration of the tweening, in milliseconds
     */
    get_easing_duration(): number
    /**
     * Retrieves the easing mode for the tweening of animatable properties
     * of `self` for the current easing state.
     * @returns an easing mode
     */
    get_easing_mode(): AnimationMode
    /**
     * Retrieves the #ClutterEffect with the given name in the list
     * of effects applied to `self`
     * @param name the name of the effect to retrieve
     * @returns a #ClutterEffect for the given   name, or %NULL. The returned #ClutterEffect is owned by the   actor and it should not be unreferenced directly
     */
    get_effect(name: string | null): Effect | null
    /**
     * Retrieves the `ClutterEffect`s applied on `self,` if any
     * @returns a list   of `ClutterEffect`s, or %NULL. The elements of the returned   list are owned by Clutter and they should not be freed. You should   free the returned list using g_list_free() when done
     */
    get_effects(): Effect[]
    /**
     * Retrieves the first child of `self`.
     * 
     * The returned pointer is only valid until the scene graph changes; it
     * is not safe to modify the list of children of `self` while iterating
     * it.
     * @returns a pointer to a #ClutterActor,   or %NULL
     */
    get_first_child(): Actor | null
    /**
     * This function gets the fixed position of the actor, if set. If there
     * is no fixed position set, this function returns %FALSE and doesn't set
     * the x and y coordinates.
     * @returns %TRUE if the fixed position is set, %FALSE if it isn't
     */
    get_fixed_position(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Checks whether an actor has a fixed position set (and will thus be
     * unaffected by any layout manager).
     * @returns %TRUE if the fixed position is set on the actor
     */
    get_fixed_position_set(): boolean
    /**
     * Retrieves the flags set on `self`
     * @returns a bitwise or of #ClutterActorFlags or 0
     */
    get_flags(): ActorFlags
    /**
     * Retrieves the height of a #ClutterActor.
     * 
     * If the actor has a valid allocation, this function will return the
     * height of the allocated area given to the actor.
     * 
     * If the actor does not have a valid allocation, this function will
     * return the actor's natural height, that is the preferred height of
     * the actor.
     * 
     * If you care whether you get the preferred height or the height that
     * has been assigned to the actor, you should probably call a different
     * function like clutter_actor_get_allocation_box() to retrieve the
     * allocated size or clutter_actor_get_preferred_height() to retrieve the
     * preferred height.
     * 
     * If an actor has a fixed height, for instance a height that has been
     * assigned using clutter_actor_set_height(), the height returned will
     * be the same value.
     * @returns the height of the actor, in pixels
     */
    get_height(): number
    /**
     * Retrieves the last child of `self`.
     * 
     * The returned pointer is only valid until the scene graph changes; it
     * is not safe to modify the list of children of `self` while iterating
     * it.
     * @returns a pointer to a #ClutterActor,   or %NULL
     */
    get_last_child(): Actor | null
    /**
     * Retrieves the #ClutterLayoutManager used by `self`.
     * @returns a pointer to the   #ClutterLayoutManager, or %NULL
     */
    get_layout_manager(): LayoutManager | null
    /**
     * Retrieves all the components of the margin of a #ClutterActor.
     */
    get_margin(): /* margin */ Margin
    /**
     * Retrieves the bottom margin of a #ClutterActor.
     * @returns the bottom margin
     */
    get_margin_bottom(): number
    /**
     * Retrieves the left margin of a #ClutterActor.
     * @returns the left margin
     */
    get_margin_left(): number
    /**
     * Retrieves the right margin of a #ClutterActor.
     * @returns the right margin
     */
    get_margin_right(): number
    /**
     * Retrieves the top margin of a #ClutterActor.
     * @returns the top margin
     */
    get_margin_top(): number
    /**
     * Retrieves the number of children of `self`.
     * @returns the number of children of an actor
     */
    get_n_children(): number
    /**
     * Retrieves the name of `self`.
     * @returns the name of the actor, or %NULL. The returned   string is owned by the actor and should not be modified or freed.
     */
    get_name(): string | null
    /**
     * Retrieves the sibling of `self` that comes after it in the list
     * of children of `self'`s parent.
     * 
     * The returned pointer is only valid until the scene graph changes; it
     * is not safe to modify the list of children of `self` while iterating
     * it.
     * @returns a pointer to a #ClutterActor,   or %NULL
     */
    get_next_sibling(): Actor | null
    /**
     * Retrieves whether to redirect the actor to an offscreen buffer, as
     * set by clutter_actor_set_offscreen_redirect().
     * @returns the value of the offscreen-redirect property of the actor
     */
    get_offscreen_redirect(): OffscreenRedirect
    /**
     * Retrieves the opacity value of an actor, as set by
     * clutter_actor_set_opacity().
     * 
     * For retrieving the absolute opacity of the actor inside a paint
     * virtual function, see clutter_actor_get_paint_opacity().
     * @returns the opacity of the actor
     */
    get_opacity(): number
    /**
     * See clutter_actor_set_opacity_override()
     * @returns the override value for the actor's opacity, or -1 if no override   is set.2
     */
    get_opacity_override(): number
    /**
     * Retrieves the paint volume of the passed #ClutterActor, and
     * transforms it into a 2D bounding box in stage coordinates.
     * 
     * This function is useful to determine the on screen area occupied by
     * the actor. The box is only an approximation and may often be
     * considerably larger due to the optimizations used to calculate the
     * box. The box is never smaller though, so it can reliably be used
     * for culling.
     * 
     * There are times when a 2D paint box can't be determined, e.g.
     * because the actor isn't yet parented under a stage or because
     * the actor is unable to determine a paint volume.
     * @returns %TRUE if a 2D paint box could be determined, else %FALSE.
     */
    get_paint_box(): [ /* returnType */ boolean, /* box */ ActorBox ]
    /**
     * Retrieves the absolute opacity of the actor, as it appears on the stage.
     * 
     * This function traverses the hierarchy chain and composites the opacity of
     * the actor with that of its parents.
     * 
     * This function is intended for subclasses to use in the paint virtual
     * function, to paint themselves with the correct opacity.
     * @returns The actor opacity value.
     */
    get_paint_opacity(): number
    /**
     * Retrieves the 'paint' visibility of an actor recursively checking for non
     * visible parents.
     * 
     * This is by definition the same as %CLUTTER_ACTOR_IS_MAPPED.
     * @returns %TRUE if the actor is visible and will be painted.
     */
    get_paint_visibility(): boolean
    /**
     * Retrieves the paint volume of the passed #ClutterActor, or %NULL
     * when a paint volume can't be determined.
     * 
     * The paint volume is defined as the 3D space occupied by an actor
     * when being painted.
     * 
     * This function will call the #ClutterActorClass.get_paint_volume()
     * virtual function of the #ClutterActor class. Sub-classes of #ClutterActor
     * should not usually care about overriding the default implementation,
     * unless they are, for instance: painting outside their allocation, or
     * actors with a depth factor (not in terms of #ClutterActor:depth but real
     * 3D depth).
     * 
     * Note: 2D actors overriding #ClutterActorClass.get_paint_volume()
     * should ensure that their volume has a depth of 0. (This will be true
     * as long as you don't call clutter_paint_volume_set_depth().)
     * @returns a pointer to a #ClutterPaintVolume,   or %NULL if no volume could be determined. The returned pointer   is not guaranteed to be valid across multiple frames; if you want   to keep it, you will need to copy it using clutter_paint_volume_copy().
     */
    get_paint_volume(): PaintVolume | null
    /**
     * Retrieves the #PangoContext for `self`. The actor's #PangoContext
     * is already configured using the appropriate font map, resolution
     * and font options.
     * 
     * Unlike clutter_actor_create_pango_context(), this context is owend
     * by the #ClutterActor and it will be updated each time the options
     * stored by the #ClutterBackend change.
     * 
     * You can use the returned #PangoContext to create a #PangoLayout
     * and render text using cogl_pango_show_layout() to reuse the
     * glyphs cache also used by Clutter.
     * @returns the #PangoContext for a #ClutterActor.   The returned #PangoContext is owned by the actor and should not be   unreferenced by the application code
     */
    get_pango_context(): Pango.Context
    /**
     * Retrieves the parent of `self`.
     * @returns The #ClutterActor parent, or %NULL  if no parent is set
     */
    get_parent(): Actor | null
    /**
     * Retrieves the coordinates of the #ClutterActor:pivot-point.
     */
    get_pivot_point(): [ /* pivot_x */ number, /* pivot_y */ number ]
    /**
     * Retrieves the Z component of the #ClutterActor:pivot-point.
     */
    get_pivot_point_z(): number
    /**
     * This function tries to "do what you mean" and tell you where the
     * actor is, prior to any transformations. Retrieves the fixed
     * position of an actor in pixels, if one has been set; otherwise, if
     * the allocation is valid, returns the actor's allocated position;
     * otherwise, returns 0,0.
     * 
     * The returned position is in pixels.
     */
    get_position(): [ /* x */ number, /* y */ number ]
    /**
     * Computes the requested minimum and natural heights for an actor,
     * or if they are already computed, returns the cached values.
     * 
     * An actor may not get its request - depending on the layout
     * manager that's in effect.
     * 
     * A request should not incorporate the actor's scale or translation;
     * those transformations do not affect layout, only rendering.
     * @param for_width available width to assume in computing desired height,   or a negative value to indicate that no width is defined
     */
    get_preferred_height(for_width: number): [ /* min_height_p */ number, /* natural_height_p */ number ]
    /**
     * Computes the preferred minimum and natural size of an actor, taking into
     * account the actor's geometry management (either height-for-width
     * or width-for-height).
     * 
     * The width and height used to compute the preferred height and preferred
     * width are the actor's natural ones.
     * 
     * If you need to control the height for the preferred width, or the width for
     * the preferred height, you should use clutter_actor_get_preferred_width()
     * and clutter_actor_get_preferred_height(), and check the actor's preferred
     * geometry management using the #ClutterActor:request-mode property.
     */
    get_preferred_size(): [ /* min_width_p */ number, /* min_height_p */ number, /* natural_width_p */ number, /* natural_height_p */ number ]
    /**
     * Computes the requested minimum and natural widths for an actor,
     * optionally depending on the specified height, or if they are
     * already computed, returns the cached values.
     * 
     * An actor may not get its request - depending on the layout
     * manager that's in effect.
     * 
     * A request should not incorporate the actor's scaleor translation;
     * those transformations do not affect layout, only rendering.
     * @param for_height available height when computing the preferred width,   or a negative value to indicate that no height is defined
     */
    get_preferred_width(for_height: number): [ /* min_width_p */ number, /* natural_width_p */ number ]
    /**
     * Retrieves the sibling of `self` that comes before it in the list
     * of children of `self'`s parent.
     * 
     * The returned pointer is only valid until the scene graph changes; it
     * is not safe to modify the list of children of `self` while iterating
     * it.
     * @returns a pointer to a #ClutterActor,   or %NULL
     */
    get_previous_sibling(): Actor | null
    /**
     * Checks whether `actor` is marked as reactive.
     * @returns %TRUE if the actor is reactive
     */
    get_reactive(): boolean
    /**
     * Retrieves the geometry request mode of `self`
     * @returns the request mode for the actor
     */
    get_request_mode(): RequestMode
    /**
     * Retrieves the resource scale for this actor.
     * 
     * The resource scale refers to the scale the actor should use for its resources.
     * For example if an actor draws a a picture of size 100 x 100 in the stage
     * coordinate space, it should use a texture of twice the size (i.e. 200 x 200)
     * if the resource scale is 2.
     * 
     * The resource scale is determined by calculating the highest #ClutterStageView
     * scale the actor will get painted on.
     * 
     * Note that the scale returned by this function is only guaranteed to be
     * correct when queried during the paint cycle, in all other cases this
     * function will only return a best guess. If your implementation really
     * needs to get a resource scale outside of the paint cycle, make sure to
     * subscribe to the "resource-scale-changed" signal to get notified about
     * the new, correct resource scale before painting.
     * 
     * Also avoid getting the resource scale for actors that are not attached
     * to a stage. There's no sane way for Clutter to guess which #ClutterStageView
     * the actor is going to be painted on, so you'll probably end up receiving
     * the "resource-scale-changed" signal and having to rebuild your resources.
     * 
     * The best guess this function may return is usually just the last resource
     * scale the actor got painted with. If this resource scale couldn't be found
     * because the actor was never painted so far or Clutter was unable to
     * determine its position and size, this function will return the resource
     * scale of a parent.
     * @returns The resource scale the actor should use for its textures
     */
    get_resource_scale(): number
    /**
     * Retrieves the angle of rotation set by clutter_actor_set_rotation_angle().
     * @param axis the axis of the rotation
     * @returns the angle of rotation, in degrees
     */
    get_rotation_angle(axis: RotateAxis): number
    /**
     * Retrieves an actors scale factors.
     */
    get_scale(): [ /* scale_x */ number, /* scale_y */ number ]
    /**
     * Retrieves the scaling factor along the Z axis, as set using
     * clutter_actor_set_scale_z().
     * @returns the scaling factor along the Z axis
     */
    get_scale_z(): number
    /**
     * This function tries to "do what you mean" and return
     * the size an actor will have. If the actor has a valid
     * allocation, the allocation will be returned; otherwise,
     * the actors natural size request will be returned.
     * 
     * If you care whether you get the request vs. the allocation, you
     * should probably call a different function like
     * clutter_actor_get_allocation_box() or
     * clutter_actor_get_preferred_width().
     */
    get_size(): [ /* width */ number, /* height */ number ]
    /**
     * Retrieves the #ClutterStage where `actor` is contained.
     * @returns the stage   containing the actor, or %NULL
     */
    get_stage(): Stage
    /**
     * Retrieves the value set using clutter_actor_set_text_direction()
     * 
     * If no text direction has been previously set, the default text
     * direction, as returned by clutter_get_default_text_direction(), will
     * be returned instead
     * @returns the #ClutterTextDirection for the actor
     */
    get_text_direction(): TextDirection
    /**
     * Retrieves the current transformation matrix of a #ClutterActor.
     */
    get_transform(): /* transform */ any
    /**
     * Gets the transformed bounding rect of an actor, in pixels relative to the stage.
     */
    get_transformed_extents(): /* rect */ any
    /**
     * Retrieves the 3D paint volume of an actor like
     * clutter_actor_get_paint_volume() does (Please refer to the
     * documentation of clutter_actor_get_paint_volume() for more
     * details.) and it additionally transforms the paint volume into the
     * coordinate space of `relative_to_ancestor`. (Or the stage if %NULL
     * is passed for `relative_to_ancestor)`
     * 
     * This can be used by containers that base their paint volume on
     * the volume of their children. Such containers can query the
     * transformed paint volume of all of its children and union them
     * together using clutter_paint_volume_union().
     * @param relative_to_ancestor A #ClutterActor that is an ancestor of `self`    (or %NULL for the stage)
     * @returns a pointer to a #ClutterPaintVolume,   or %NULL if no volume could be determined. The returned pointer is   not guaranteed to be valid across multiple frames; if you wish to   keep it, you will have to copy it using clutter_paint_volume_copy().
     */
    get_transformed_paint_volume(relative_to_ancestor: Actor): PaintVolume | null
    /**
     * Gets the absolute position of an actor, in pixels relative to the stage.
     */
    get_transformed_position(): [ /* x */ number, /* y */ number ]
    /**
     * Gets the absolute size of an actor in pixels, taking into account the
     * scaling factors.
     * 
     * If the actor has a valid allocation, the allocated size will be used.
     * If the actor has not a valid allocation then the preferred size will
     * be transformed and returned.
     * 
     * If you want the transformed allocation, see
     * clutter_actor_get_abs_allocation_vertices() instead.
     * 
     * When the actor (or one of its ancestors) is rotated around the
     * X or Y axis, it no longer appears as on the stage as a rectangle, but
     * as a generic quadrangle; in that case this function returns the size
     * of the smallest rectangle that encapsulates the entire quad. Please
     * note that in this case no assumptions can be made about the relative
     * position of this envelope to the absolute position of the actor, as
     * returned by clutter_actor_get_transformed_position(); if you need this
     * information, you need to use clutter_actor_get_abs_allocation_vertices()
     * to get the coords of the actual quadrangle.
     */
    get_transformed_size(): [ /* width */ number, /* height */ number ]
    /**
     * Retrieves the #ClutterTransition of a #ClutterActor by using the
     * transition `name`.
     * 
     * Transitions created for animatable properties use the name of the
     * property itself, for instance the code below:
     * 
     * ```c
     *   clutter_actor_set_easing_duration (actor, 1000);
     *   clutter_actor_set_rotation_angle (actor, CLUTTER_Y_AXIS, 360.0);
     * 
     *   transition = clutter_actor_get_transition (actor, "rotation-angle-y");
     *   g_signal_connect (transition, "stopped",
     *                     G_CALLBACK (on_transition_stopped),
     *                     actor);
     * ```
     * 
     * will call the `on_transition_stopped` callback when the transition
     * is finished.
     * 
     * If you just want to get notifications of the completion of a transition,
     * you should use the #ClutterActor::transition-stopped signal, using the
     * transition name as the signal detail.
     * @param name the name of the transition
     * @returns a #ClutterTransition, or %NULL if   none was found to match the passed name; the returned instance is owned   by Clutter and it should not be freed
     */
    get_transition(name: string | null): Transition | null
    /**
     * Retrieves the translation set using clutter_actor_set_translation().
     */
    get_translation(): [ /* translate_x */ number, /* translate_y */ number, /* translate_z */ number ]
    /**
     * Retrieves the width of a #ClutterActor.
     * 
     * If the actor has a valid allocation, this function will return the
     * width of the allocated area given to the actor.
     * 
     * If the actor does not have a valid allocation, this function will
     * return the actor's natural width, that is the preferred width of
     * the actor.
     * 
     * If you care whether you get the preferred width or the width that
     * has been assigned to the actor, you should probably call a different
     * function like clutter_actor_get_allocation_box() to retrieve the
     * allocated size or clutter_actor_get_preferred_width() to retrieve the
     * preferred width.
     * 
     * If an actor has a fixed width, for instance a width that has been
     * assigned using clutter_actor_set_width(), the width returned will
     * be the same value.
     * @returns the width of the actor, in pixels
     */
    get_width(): number
    /**
     * Retrieves the X coordinate of a #ClutterActor.
     * 
     * This function tries to "do what you mean", by returning the
     * correct value depending on the actor's state.
     * 
     * If the actor has a valid allocation, this function will return
     * the X coordinate of the origin of the allocation box.
     * 
     * If the actor has any fixed coordinate set using clutter_actor_set_x(),
     * clutter_actor_set_position(), this function will return that coordinate.
     * 
     * If both the allocation and a fixed position are missing, this function
     * will return 0.
     * @returns the X coordinate, in pixels, ignoring any   transformation (i.e. scaling, rotation)
     */
    get_x(): number
    /**
     * Retrieves the horizontal alignment policy set using
     * clutter_actor_set_x_align().
     * @returns the horizontal alignment policy.
     */
    get_x_align(): ActorAlign
    /**
     * Retrieves the value set with clutter_actor_set_x_expand().
     * 
     * See also: clutter_actor_needs_expand()
     * @returns %TRUE if the actor has been set to expand
     */
    get_x_expand(): boolean
    /**
     * Retrieves the Y coordinate of a #ClutterActor.
     * 
     * This function tries to "do what you mean", by returning the
     * correct value depending on the actor's state.
     * 
     * If the actor has a valid allocation, this function will return
     * the Y coordinate of the origin of the allocation box.
     * 
     * If the actor has any fixed coordinate set using clutter_actor_set_y(),
     * clutter_actor_set_position(), this function will return that coordinate.
     * 
     * If both the allocation and a fixed position are missing, this function
     * will return 0.
     * @returns the Y coordinate, in pixels, ignoring any   transformation (i.e. scaling, rotation)
     */
    get_y(): number
    /**
     * Retrieves the vertical alignment policy set using
     * clutter_actor_set_y_align().
     * @returns the vertical alignment policy.
     */
    get_y_align(): ActorAlign
    /**
     * Retrieves the value set with clutter_actor_set_y_expand().
     * 
     * See also: clutter_actor_needs_expand()
     * @returns %TRUE if the actor has been set to expand
     */
    get_y_expand(): boolean
    /**
     * Retrieves the actor's position on the Z axis.
     * @returns the position on the Z axis.
     */
    get_z_position(): number
    /**
     * Sets the key focus of the #ClutterStage including `self`
     * to this #ClutterActor.
     */
    grab_key_focus(): void
    has_accessible(): boolean
    /**
     * Returns whether the actor has any actions applied.
     * @returns %TRUE if the actor has any actions,   %FALSE otherwise
     */
    has_actions(): boolean
    /**
     * Checks if the actor has an up-to-date allocation assigned to
     * it. This means that the actor should have an allocation: it's
     * visible and has a parent. It also means that there is no
     * outstanding relayout request in progress for the actor or its
     * children (There might be other outstanding layout requests in
     * progress that will cause the actor to get a new allocation
     * when the stage is laid out, however).
     * 
     * If this function returns %FALSE, then the actor will normally
     * be allocated before it is next drawn on the screen.
     * @returns %TRUE if the actor has an up-to-date allocation
     */
    has_allocation(): boolean
    /**
     * Returns whether the actor has any constraints applied.
     * @returns %TRUE if the actor has any constraints,   %FALSE otherwise
     */
    has_constraints(): boolean
    has_damage(): boolean
    /**
     * Returns whether the actor has any effects applied.
     * @returns %TRUE if the actor has any effects,   %FALSE otherwise
     */
    has_effects(): boolean
    /**
     * Checks whether `self` is the #ClutterActor that has key focus
     * @returns %TRUE if the actor has key focus, and %FALSE otherwise
     */
    has_key_focus(): boolean
    /**
     * Returns whether a #ClutterActor or any parent actors have mapped clones
     * that are clone-painting `self`.
     * @returns %TRUE if the actor has mapped clones, %FALSE otherwise
     */
    has_mapped_clones(): boolean
    /**
     * Asks the actor's implementation whether it may contain overlapping
     * primitives.
     * 
     * For example; Clutter may use this to determine whether the painting
     * should be redirected to an offscreen buffer to correctly implement
     * the opacity property.
     * 
     * Custom actors can override the default response by implementing the
     * #ClutterActorClass.has_overlaps() virtual function. See
     * clutter_actor_set_offscreen_redirect() for more information.
     * @returns %TRUE if the actor may have overlapping primitives, and   %FALSE otherwise
     */
    has_overlaps(): boolean
    /**
     * Flags an actor to be hidden. A hidden actor will not be
     * rendered on the stage.
     * 
     * Actors are visible by default.
     * 
     * If this function is called on an actor without a parent, the
     * #ClutterActor:show-on-set-parent property will be set to %FALSE
     * as a side-effect.
     */
    hide(): void
    /**
     * Increases the culling inhibitor counter. Inhibiting culling
     * forces the actor to be painted even when outside the visible
     * bounds of the stage view.
     * 
     * This is usually necessary when an actor is being painted on
     * another paint context.
     * 
     * Pair with clutter_actor_uninhibit_culling() when the actor doesn't
     * need to be painted anymore.
     */
    inhibit_culling(): void
    /**
     * Inserts `child` into the list of children of `self,` above another
     * child of `self` or, if `sibling` is %NULL, above all the children
     * of `self`.
     * 
     * This function will acquire a reference on `child` that will only
     * be released when calling clutter_actor_remove_child().
     * 
     * This function will not take into consideration the #ClutterActor:depth
     * of `child`.
     * 
     * This function will emit the #ClutterContainer::actor-added signal
     * on `self`.
     * @param child a #ClutterActor
     * @param sibling a child of `self,` or %NULL
     */
    insert_child_above(child: Actor, sibling: Actor | null): void
    /**
     * Inserts `child` into the list of children of `self,` using the
     * given `index_`. If `index_` is greater than the number of children
     * in `self,` or is less than 0, then the new child is added at the end.
     * 
     * This function will acquire a reference on `child` that will only
     * be released when calling clutter_actor_remove_child().
     * 
     * This function will not take into consideration the #ClutterActor:depth
     * of `child`.
     * 
     * This function will emit the #ClutterContainer::actor-added signal
     * on `self`.
     * @param child a #ClutterActor
     * @param index_ the index
     */
    insert_child_at_index(child: Actor, index_: number): void
    /**
     * Inserts `child` into the list of children of `self,` below another
     * child of `self` or, if `sibling` is %NULL, below all the children
     * of `self`.
     * 
     * This function will acquire a reference on `child` that will only
     * be released when calling clutter_actor_remove_child().
     * 
     * This function will not take into consideration the #ClutterActor:depth
     * of `child`.
     * 
     * This function will emit the #ClutterContainer::actor-added signal
     * on `self`.
     * @param child a #ClutterActor
     * @param sibling a child of `self,` or %NULL
     */
    insert_child_below(child: Actor, sibling: Actor | null): void
    /**
     * Invalidates the cached paint volume of `self`. This is needed for
     * implementations overriding the #ClutterActorClass.get_paint_volume()
     * virtual function and has to be called every time the paint volume
     * returned by that function would change.
     */
    invalidate_paint_volume(): void
    /**
     * Invalidate the cached transformation matrix of `self`.
     * This is needed for implementations overriding the apply_transform()
     * vfunc and has to be called if the matrix returned by apply_transform()
     * would change.
     */
    invalidate_transform(): void
    is_effectively_on_stage_view(view: StageView): boolean
    /**
     * Checks whether `self` is being currently painted by a #ClutterClone
     * 
     * This function is useful only inside implementations of the
     * #ClutterActorClass.paint() virtual function.
     * 
     * This function should not be used by applications
     * @returns %TRUE if the #ClutterActor is currently being painted   by a #ClutterClone, and %FALSE otherwise
     */
    is_in_clone_paint(): boolean
    /**
     * Checks whether a #ClutterActor has been set as mapped.
     * 
     * See also %CLUTTER_ACTOR_IS_MAPPED and #ClutterActor:mapped
     * @returns %TRUE if the actor is mapped4
     */
    is_mapped(): boolean
    /**
     * Checks whether a #ClutterActor is realized.
     * 
     * See also %CLUTTER_ACTOR_IS_REALIZED and #ClutterActor:realized.
     * @returns %TRUE if the actor is realized4
     */
    is_realized(): boolean
    /**
     * Checks whether any rotation is applied to the actor.
     * @returns %TRUE if the actor is rotated.
     */
    is_rotated(): boolean
    /**
     * Checks whether the actor is scaled in either dimension.
     * @returns %TRUE if the actor is scaled.
     */
    is_scaled(): boolean
    /**
     * Checks whether an actor is marked as visible.
     * 
     * See also %CLUTTER_ACTOR_IS_VISIBLE and #ClutterActor:visible.
     * @returns %TRUE if the actor visible4
     */
    is_visible(): boolean
    /**
     * Sets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly maps
     * and realizes its children if they are visible. Does nothing if the
     * actor is not visible.
     * 
     * Calling this function is strongly discouraged: the default
     * implementation of #ClutterActorClass.map() will map all the children
     * of an actor when mapping its parent.
     * 
     * When overriding map, it is mandatory to chain up to the parent
     * implementation.
     */
    map(): void
    /**
     * Moves an actor by the specified distance relative to its current
     * position in pixels.
     * 
     * This function modifies the fixed position of an actor and thus removes
     * it from any layout management. Another way to move an actor is with an
     * additional translation, using clutter_actor_set_translation().
     * @param dx Distance to move Actor on X axis.
     * @param dy Distance to move Actor on Y axis.
     */
    move_by(dx: number, dy: number): void
    /**
     * Checks whether an actor, or any of its children, is set to expand
     * horizontally or vertically.
     * 
     * This function should only be called by layout managers that can
     * assign extra space to their children.
     * 
     * If you want to know whether the actor was explicitly set to expand,
     * use clutter_actor_get_x_expand() or clutter_actor_get_y_expand().
     * @param orientation the direction of expansion
     * @returns %TRUE if the actor should expand
     */
    needs_expand(orientation: Orientation): boolean
    /**
     * Renders the actor to display.
     * 
     * This function should not be called directly by applications.
     * Call clutter_actor_queue_redraw() to queue paints, instead.
     * 
     * This function is context-aware, and will either cause a
     * regular paint or a pick paint.
     * 
     * This function will call the #ClutterActorClass.paint() virtual
     * function.
     * 
     * This function does not paint the actor if the actor is set to 0,
     * unless it is performing a pick paint.
     * @param paint_context 
     */
    paint(paint_context: PaintContext): void
    /**
     * Retrieves the list of `ClutterStageView`s the actor is being
     * painted on.
     * 
     * If this function is called during the paint cycle, the list is guaranteed
     * to be up-to-date, if called outside the paint cycle, the list will
     * contain the views the actor was painted on last.
     * 
     * The list returned by this function is not updated when the actors
     * visibility changes: If an actor gets hidden and is not being painted
     * anymore, this function will return the list of views the actor was
     * painted on last.
     * 
     * If an actor is not attached to a stage (realized), this function will
     * always return an empty list.
     * @returns The list of   `ClutterStageView`s the actor is being painted on. The list and   its contents are owned by the #ClutterActor and the list may not be   freed or modified.
     */
    peek_stage_views(): StageView[]
    /**
     * Asks `actor` to perform a pick.
     * @param pick_context 
     */
    pick(pick_context: PickContext): void
    /**
     * Logs (does a virtual paint of) a rectangle for picking. Note that `box` is
     * in the actor's own local coordinates, so is usually {0,0,width,height}
     * to include the whole actor. That is unless the actor has a shaped input
     * region in which case you may wish to log the (multiple) smaller rectangles
     * that make up the input region.
     * @param pick_context The #ClutterPickContext
     * @param box A rectangle in the actor's own local coordinates.
     */
    pick_box(pick_context: PickContext, box: ActorBox): void
    /**
     * Queues up a redraw of an actor and any children. The redraw occurs
     * once the main loop becomes idle (after the current batch of events
     * has been processed, roughly).
     * 
     * Applications rarely need to call this, as redraws are handled
     * automatically by modification functions.
     * 
     * This function will not do anything if `self` is not visible, or
     * if the actor is inside an invisible part of the scenegraph.
     * 
     * Also be aware that painting is a NOP for actors with an opacity of
     * 0
     * 
     * When you are implementing a custom actor you must queue a redraw
     * whenever some private state changes that will affect painting or
     * picking of your actor.
     */
    queue_redraw(): void
    /**
     * Queues a redraw on `self` limited to a specific, actor-relative
     * rectangular area.
     * 
     * If `clip` is %NULL this function is equivalent to
     * clutter_actor_queue_redraw().
     * @param clip a rectangular clip region, or %NULL
     */
    queue_redraw_with_clip(clip: any | null): void
    /**
     * Indicates that the actor's size request or other layout-affecting
     * properties may have changed. This function is used inside #ClutterActor
     * subclass implementations, not by applications directly.
     * 
     * Queueing a new layout automatically queues a redraw as well.
     */
    queue_relayout(): void
    /**
     * Realization informs the actor that it is attached to a stage. It
     * can use this to allocate resources if it wanted to delay allocation
     * until it would be rendered. However it is perfectly acceptable for
     * an actor to create resources before being realized because Clutter
     * only ever has a single rendering context so that actor is free to
     * be moved from one stage to another.
     * 
     * This function does nothing if the actor is already realized.
     * 
     * Because a realized actor must have realized parent actors, calling
     * clutter_actor_realize() will also realize all parents of the actor.
     * 
     * This function does not realize child actors, except in the special
     * case that realizing the stage, when the stage is visible, will
     * suddenly map (and thus realize) the children of the stage.
     */
    realize(): void
    /**
     * Removes `action` from the list of actions applied to `self`
     * 
     * The reference held by `self` on the #ClutterAction will be released
     * @param action a #ClutterAction
     */
    remove_action(action: Action): void
    /**
     * Removes the #ClutterAction with the given name from the list
     * of actions applied to `self`
     * @param name the name of the action to remove
     */
    remove_action_by_name(name: string | null): void
    /**
     * Removes all children of `self`.
     * 
     * This function releases the reference added by inserting a child actor
     * in the list of children of `self`.
     * 
     * If the reference count of a child drops to zero, the child will be
     * destroyed. If you want to ensure the destruction of all the children
     * of `self,` use clutter_actor_destroy_all_children().
     */
    remove_all_children(): void
    /**
     * Removes all transitions associated to `self`.
     */
    remove_all_transitions(): void
    /**
     * Removes `child` from the children of `self`.
     * 
     * This function will release the reference added by
     * clutter_actor_add_child(), so if you want to keep using `child`
     * you will have to acquire a referenced on it before calling this
     * function.
     * 
     * This function will emit the #ClutterContainer::actor-removed
     * signal on `self`.
     * @param child a #ClutterActor
     */
    remove_child(child: Actor): void
    /**
     * Removes clip area from `self`.
     */
    remove_clip(): void
    /**
     * Removes `constraint` from the list of constraints applied to `self`
     * 
     * The reference held by `self` on the #ClutterConstraint will be released
     * @param constraint a #ClutterConstraint
     */
    remove_constraint(constraint: Constraint): void
    /**
     * Removes the #ClutterConstraint with the given name from the list
     * of constraints applied to `self`
     * @param name the name of the constraint to remove
     */
    remove_constraint_by_name(name: string | null): void
    /**
     * Removes `effect` from the list of effects applied to `self`
     * 
     * The reference held by `self` on the #ClutterEffect will be released
     * @param effect a #ClutterEffect
     */
    remove_effect(effect: Effect): void
    /**
     * Removes the #ClutterEffect with the given name from the list
     * of effects applied to `self`
     * @param name the name of the effect to remove
     */
    remove_effect_by_name(name: string | null): void
    /**
     * Removes the transition stored inside a #ClutterActor using `name`
     * identifier.
     * 
     * If the transition is currently in progress, it will be stopped.
     * 
     * This function releases the reference acquired when the transition
     * was added to the #ClutterActor.
     * @param name the name of the transition to remove
     */
    remove_transition(name: string | null): void
    /**
     * Replaces `old_child` with `new_child` in the list of children of `self`.
     * @param old_child the child of `self` to replace
     * @param new_child the #ClutterActor to replace `old_child`
     */
    replace_child(old_child: Actor, new_child: Actor): void
    /**
     * Restores the easing state as it was prior to a call to
     * clutter_actor_save_easing_state().
     */
    restore_easing_state(): void
    /**
     * Saves the current easing state for animatable properties, and creates
     * a new state with the default values for easing mode and duration.
     * 
     * New transitions created after calling this function will inherit the
     * duration, easing mode, and delay of the new easing state; this also
     * applies to transitions modified in flight.
     */
    save_easing_state(): void
    /**
     * Stores the allocation of `self` as defined by `box`.
     * 
     * This function can only be called from within the implementation of
     * the #ClutterActorClass.allocate() virtual function.
     * 
     * The allocation `box` should have been adjusted to take into account
     * constraints, alignment, and margin properties.
     * 
     * This function should only be used by subclasses of #ClutterActor
     * that wish to store their allocation but cannot chain up to the
     * parent's implementation; the default implementation of the
     * #ClutterActorClass.allocate() virtual function will call this
     * function.
     * @param box a #ClutterActorBox
     */
    set_allocation(box: ActorBox): void
    /**
     * Sets the background color of a #ClutterActor.
     * 
     * The background color will be used to cover the whole allocation of the
     * actor. The default background color of an actor is transparent.
     * 
     * To check whether an actor has a background color, you can use the
     * #ClutterActor:background-color-set actor property.
     * 
     * The #ClutterActor:background-color property is animatable.
     * @param color a #ClutterColor, or %NULL to unset a previously  set color
     */
    set_background_color(color: Color | null): void
    /**
     * Sets `child` to be above `sibling` in the list of children of `self`.
     * 
     * If `sibling` is %NULL, `child` will be the new last child of `self`.
     * 
     * This function is logically equivalent to removing `child` and using
     * clutter_actor_insert_child_above(), but it will not emit signals
     * or change state on `child`.
     * @param child a #ClutterActor child of `self`
     * @param sibling a #ClutterActor child of `self,` or %NULL
     */
    set_child_above_sibling(child: Actor, sibling: Actor | null): void
    /**
     * Changes the index of `child` in the list of children of `self`.
     * 
     * This function is logically equivalent to removing `child` and
     * calling clutter_actor_insert_child_at_index(), but it will not
     * emit signals or change state on `child`.
     * @param child a #ClutterActor child of `self`
     * @param index_ the new index for `child`
     */
    set_child_at_index(child: Actor, index_: number): void
    /**
     * Sets `child` to be below `sibling` in the list of children of `self`.
     * 
     * If `sibling` is %NULL, `child` will be the new first child of `self`.
     * 
     * This function is logically equivalent to removing `self` and using
     * clutter_actor_insert_child_below(), but it will not emit signals
     * or change state on `child`.
     * @param child a #ClutterActor child of `self`
     * @param sibling a #ClutterActor child of `self,` or %NULL
     */
    set_child_below_sibling(child: Actor, sibling: Actor | null): void
    /**
     * Sets the transformation matrix to be applied to all the children
     * of `self` prior to their own transformations. The default child
     * transformation is the identity matrix.
     * 
     * If `transform` is %NULL, the child transform will be unset.
     * 
     * The #ClutterActor:child-transform property is animatable.
     * @param transform a #graphene_matrix_t, or %NULL
     */
    set_child_transform(transform: any | null): void
    /**
     * Sets clip area for `self`. The clip area is always computed from the
     * upper left corner of the actor.
     * @param xoff X offset of the clip rectangle
     * @param yoff Y offset of the clip rectangle
     * @param width Width of the clip rectangle
     * @param height Height of the clip rectangle
     */
    set_clip(xoff: number, yoff: number, width: number, height: number): void
    /**
     * Sets whether `self` should be clipped to the same size as its
     * allocation
     * @param clip_set %TRUE to apply a clip tracking the allocation
     */
    set_clip_to_allocation(clip_set: boolean): void
    /**
     * Attaches color state properties to [class`Actor]`
     * default color state representing sRGB.
     * @param color_state a #ClutterColorState, or defaults to sRGB if %NULL
     */
    set_color_state(color_state: ColorState): void
    /**
     * Sets the contents of a #ClutterActor.
     * @param content a #ClutterContent, or %NULL
     */
    set_content(content: Content | null): void
    /**
     * Sets the gravity of the #ClutterContent used by `self`.
     * 
     * See the description of the #ClutterActor:content-gravity property for
     * more information.
     * 
     * The #ClutterActor:content-gravity property is animatable.
     * @param gravity the #ClutterContentGravity
     */
    set_content_gravity(gravity: ContentGravity): void
    /**
     * Sets the policy for repeating the #ClutterActor:content of a
     * #ClutterActor. The behaviour is deferred to the #ClutterContent
     * implementation.
     * @param repeat the repeat policy
     */
    set_content_repeat(repeat: ContentRepeat): void
    /**
     * Sets the minification and magnification filter to be applied when
     * scaling the #ClutterActor:content of a #ClutterActor.
     * 
     * The #ClutterActor:minification-filter will be used when reducing
     * the size of the content; the #ClutterActor:magnification-filter
     * will be used when increasing the size of the content.
     * @param min_filter the minification filter for the content
     * @param mag_filter the magnification filter for the content
     */
    set_content_scaling_filters(min_filter: ScalingFilter, mag_filter: ScalingFilter): void
    /**
     * Sets the delay that should be applied before tweening animatable
     * properties.
     * @param msecs the delay before the start of the tweening, in milliseconds
     */
    set_easing_delay(msecs: number): void
    /**
     * Sets the duration of the tweening for animatable properties
     * of `self` for the current easing state.
     * @param msecs the duration of the easing, or %NULL
     */
    set_easing_duration(msecs: number): void
    /**
     * Sets the easing mode for the tweening of animatable properties
     * of `self`.
     * @param mode an easing mode, excluding %CLUTTER_CUSTOM_MODE
     */
    set_easing_mode(mode: AnimationMode): void
    /**
     * Sets whether an actor has a fixed position set (and will thus be
     * unaffected by any layout manager).
     * @param is_set whether to use fixed position
     */
    set_fixed_position_set(is_set: boolean): void
    /**
     * Sets `flags` on `self`
     * 
     * This function will emit notifications for the changed properties
     * @param flags the flags to set
     */
    set_flags(flags: ActorFlags): void
    /**
     * Forces a height on an actor, causing the actor's preferred width
     * and height (if any) to be ignored.
     * 
     * If `height` is -1 the actor will use its preferred height instead of
     * overriding it, i.e. you can "unset" the height with -1.
     * 
     * This function sets both the minimum and natural size of the actor.
     * @param height Requested new height for the actor, in pixels, or -1
     */
    set_height(height: number): void
    /**
     * Sets the #ClutterLayoutManager delegate object that will be used to
     * lay out the children of `self`.
     * 
     * The #ClutterActor will take a reference on the passed `manager` which
     * will be released either when the layout manager is removed, or when
     * the actor is destroyed.
     * @param manager a #ClutterLayoutManager, or %NULL to unset it
     */
    set_layout_manager(manager: LayoutManager | null): void
    /**
     * Sets all the components of the margin of a #ClutterActor.
     * @param margin a #ClutterMargin
     */
    set_margin(margin: Margin): void
    /**
     * Sets the margin from the bottom of a #ClutterActor.
     * 
     * The #ClutterActor:margin-bottom property is animatable.
     * @param margin the bottom margin
     */
    set_margin_bottom(margin: number): void
    /**
     * Sets the margin from the left of a #ClutterActor.
     * 
     * The #ClutterActor:margin-left property is animatable.
     * @param margin the left margin
     */
    set_margin_left(margin: number): void
    /**
     * Sets the margin from the right of a #ClutterActor.
     * 
     * The #ClutterActor:margin-right property is animatable.
     * @param margin the right margin
     */
    set_margin_right(margin: number): void
    /**
     * Sets the margin from the top of a #ClutterActor.
     * 
     * The #ClutterActor:margin-top property is animatable.
     * @param margin the top margin
     */
    set_margin_top(margin: number): void
    /**
     * Sets the given name to `self`. The name can be used to identify
     * a #ClutterActor.
     * @param name Textual tag to apply to actor
     */
    set_name(name: string | null): void
    /**
     * Defines the circumstances where the actor should be redirected into
     * an offscreen image. The offscreen image is used to flatten the
     * actor into a single image while painting for two main reasons.
     * Firstly, when the actor is painted a second time without any of its
     * contents changing it can simply repaint the cached image without
     * descending further down the actor hierarchy. Secondly, it will make
     * the opacity look correct even if there are overlapping primitives
     * in the actor.
     * 
     * Caching the actor could in some cases be a performance win and in
     * some cases be a performance lose so it is important to determine
     * which value is right for an actor before modifying this value. For
     * example, there is never any reason to flatten an actor that is just
     * a single texture (such as a #ClutterTexture) because it is
     * effectively already cached in an image so the offscreen would be
     * redundant. Also if the actor contains primitives that are far apart
     * with a large transparent area in the middle (such as a large
     * CluterGroup with a small actor in the top left and a small actor in
     * the bottom right) then the cached image will contain the entire
     * image of the large area and the paint will waste time blending all
     * of the transparent pixels in the middle.
     * 
     * The default method of implementing opacity on a container simply
     * forwards on the opacity to all of the children. If the children are
     * overlapping then it will appear as if they are two separate glassy
     * objects and there will be a break in the color where they
     * overlap. By redirecting to an offscreen buffer it will be as if the
     * two opaque objects are combined into one and then made transparent
     * which is usually what is expected.
     * 
     * The image below demonstrates the difference between redirecting and
     * not. The image shows two Clutter groups, each containing a red and
     * a green rectangle which overlap. The opacity on the group is set to
     * 128 (which is 50%). When the offscreen redirect is not used, the
     * red rectangle can be seen through the blue rectangle as if the two
     * rectangles were separately transparent. When the redirect is used
     * the group as a whole is transparent instead so the red rectangle is
     * not visible where they overlap.
     * 
     * <figure id="offscreen-redirect">
     *   <title>Sample of using an offscreen redirect for transparency</title>
     *   <graphic fileref="offscreen-redirect.png" format="PNG"/>
     * </figure>
     * 
     * The default value for this property is 0, so we effectively will
     * never redirect an actor offscreen by default. This means that there
     * are times that transparent actors may look glassy as described
     * above. The reason this is the default is because there is a
     * performance trade off between quality and performance here. In many
     * cases the default form of glassy opacity looks good enough, but if
     * it's not you will need to set the
     * %CLUTTER_OFFSCREEN_REDIRECT_AUTOMATIC_FOR_OPACITY flag to enable
     * redirection for opacity.
     * 
     * Custom actors that don't contain any overlapping primitives are
     * recommended to override the has_overlaps() virtual to return %FALSE
     * for maximum efficiency.
     * @param redirect New offscreen redirect flags for the actor.
     */
    set_offscreen_redirect(redirect: OffscreenRedirect): void
    /**
     * Sets the actor's opacity, with zero being completely transparent and
     * 255 (0xff) being fully opaque.
     * 
     * The #ClutterActor:opacity property is animatable.
     * @param opacity New opacity value for the actor.
     */
    set_opacity(opacity: number): void
    /**
     * Allows overriding the calculated paint opacity (as returned by
     * clutter_actor_get_paint_opacity()). This is used internally by
     * ClutterClone and ClutterOffscreenEffect, and should be used by
     * actors that need to mimic those.
     * 
     * In almost all cases this should not used by applications.
     * @param opacity the override opacity value, or -1 to reset
     */
    set_opacity_override(opacity: number): void
    /**
     * Sets the position of the #ClutterActor:pivot-point around which the
     * scaling and rotation transformations occur.
     * 
     * The pivot point's coordinates are in normalized space, with the (0, 0)
     * point being the top left corner of the actor, and the (1, 1) point being
     * the bottom right corner.
     * @param pivot_x the normalized X coordinate of the pivot point
     * @param pivot_y the normalized Y coordinate of the pivot point
     */
    set_pivot_point(pivot_x: number, pivot_y: number): void
    /**
     * Sets the component on the Z axis of the #ClutterActor:pivot-point around
     * which the scaling and rotation transformations occur.
     * 
     * The `pivot_z` value is expressed as a distance along the Z axis.
     * @param pivot_z the Z coordinate of the actor's pivot point
     */
    set_pivot_point_z(pivot_z: number): void
    /**
     * Sets the actor's fixed position in pixels relative to any parent
     * actor.
     * 
     * If a layout manager is in use, this position will override the
     * layout manager and force a fixed position.
     * @param x New left position of actor in pixels.
     * @param y New top position of actor in pixels.
     */
    set_position(x: number, y: number): void
    /**
     * Sets `actor` as reactive. Reactive actors will receive events.
     * @param reactive whether the actor should be reactive to events
     */
    set_reactive(reactive: boolean): void
    /**
     * Sets the geometry request mode of `self`.
     * 
     * The `mode` determines the order for invoking
     * clutter_actor_get_preferred_width() and
     * clutter_actor_get_preferred_height()
     * @param mode the request mode
     */
    set_request_mode(mode: RequestMode): void
    /**
     * Sets the `angle` of rotation of a #ClutterActor on the given `axis`.
     * 
     * This function is a convenience for setting the rotation properties
     * #ClutterActor:rotation-angle-x, #ClutterActor:rotation-angle-y,
     * and #ClutterActor:rotation-angle-z.
     * 
     * The center of rotation is established by the #ClutterActor:pivot-point
     * property.
     * @param axis the axis to set the angle one
     * @param angle the angle of rotation, in degrees
     */
    set_rotation_angle(axis: RotateAxis, angle: number): void
    /**
     * Scales an actor with the given factors.
     * 
     * The scale transformation is relative the the #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:scale-x and #ClutterActor:scale-y properties are
     * animatable.
     * @param scale_x double factor to scale actor by horizontally.
     * @param scale_y double factor to scale actor by vertically.
     */
    set_scale(scale_x: number, scale_y: number): void
    /**
     * Scales an actor on the Z axis by the given `scale_z` factor.
     * 
     * The scale transformation is relative the the #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:scale-z property is animatable.
     * @param scale_z the scaling factor along the Z axis
     */
    set_scale_z(scale_z: number): void
    /**
     * Sets the actor's size request in pixels. This overrides any
     * "normal" size request the actor would have. For example
     * a text actor might normally request the size of the text;
     * this function would force a specific size instead.
     * 
     * If `width` and/or `height` are -1 the actor will use its
     * "normal" size request instead of overriding it, i.e.
     * you can "unset" the size with -1.
     * 
     * This function sets or unsets both the minimum and natural size.
     * @param width New width of actor in pixels, or -1
     * @param height New height of actor in pixels, or -1
     */
    set_size(width: number, height: number): void
    /**
     * Sets the #ClutterTextDirection for an actor
     * 
     * The passed text direction must not be %CLUTTER_TEXT_DIRECTION_DEFAULT
     * 
     * If `self` implements #ClutterContainer then this function will recurse
     * inside all the children of `self` (including the internal ones).
     * 
     * Composite actors not implementing #ClutterContainer, or actors requiring
     * special handling when the text direction changes, should connect to
     * the #GObject::notify signal for the #ClutterActor:text-direction property
     * @param text_dir the text direction for `self`
     */
    set_text_direction(text_dir: TextDirection): void
    /**
     * Overrides the transformations of a #ClutterActor with a custom
     * matrix, which will be applied relative to the origin of the
     * actor's allocation and to the actor's pivot point.
     * 
     * The #ClutterActor:transform property is animatable.
     * @param transform a #graphene_matrix_t, or %NULL to   unset a custom transformation
     */
    set_transform(transform: any | null): void
    /**
     * Sets an additional translation transformation on a #ClutterActor,
     * relative to the #ClutterActor:pivot-point.
     * @param translate_x the translation along the X axis
     * @param translate_y the translation along the Y axis
     * @param translate_z the translation along the Z axis
     */
    set_translation(translate_x: number, translate_y: number, translate_z: number): void
    /**
     * Forces a width on an actor, causing the actor's preferred width
     * and height (if any) to be ignored.
     * 
     * If `width` is -1 the actor will use its preferred width request
     * instead of overriding it, i.e. you can "unset" the width with -1.
     * 
     * This function sets both the minimum and natural size of the actor.
     * @param width Requested new width for the actor, in pixels, or -1
     */
    set_width(width: number): void
    /**
     * Sets the actor's X coordinate, relative to its parent, in pixels.
     * 
     * Overrides any layout manager and forces a fixed position for
     * the actor.
     * 
     * The #ClutterActor:x property is animatable.
     * @param x the actor's position on the X axis
     */
    set_x(x: number): void
    /**
     * Sets the horizontal alignment policy of a #ClutterActor, in case the
     * actor received extra horizontal space.
     * 
     * See also the #ClutterActor:x-align property.
     * @param x_align the horizontal alignment policy
     */
    set_x_align(x_align: ActorAlign): void
    /**
     * Sets whether a #ClutterActor should expand horizontally; this means
     * that layout manager should allocate extra space for the actor, if
     * possible.
     * 
     * Setting an actor to expand will also make all its parent expand, so
     * that it's possible to build an actor tree and only set this flag on
     * its leaves and not on every single actor.
     * @param expand whether the actor should expand horizontally
     */
    set_x_expand(expand: boolean): void
    /**
     * Sets the actor's Y coordinate, relative to its parent, in pixels.#
     * 
     * Overrides any layout manager and forces a fixed position for
     * the actor.
     * 
     * The #ClutterActor:y property is animatable.
     * @param y the actor's position on the Y axis
     */
    set_y(y: number): void
    /**
     * Sets the vertical alignment policy of a #ClutterActor, in case the
     * actor received extra vertical space.
     * 
     * See also the #ClutterActor:y-align property.
     * @param y_align the vertical alignment policy
     */
    set_y_align(y_align: ActorAlign): void
    /**
     * Sets whether a #ClutterActor should expand horizontally; this means
     * that layout manager should allocate extra space for the actor, if
     * possible.
     * 
     * Setting an actor to expand will also make all its parent expand, so
     * that it's possible to build an actor tree and only set this flag on
     * its leaves and not on every single actor.
     * @param expand whether the actor should expand vertically
     */
    set_y_expand(expand: boolean): void
    /**
     * Sets the actor's position on the Z axis.
     * 
     * See #ClutterActor:z-position.
     * @param z_position the position on the Z axis
     */
    set_z_position(z_position: number): void
    /**
     * Should be called inside the implementation of the
     * #ClutterActor::pick virtual function in order to check whether
     * the actor should be picked or not.
     * 
     * This function should never be called directly by applications.
     * @param pick_context a #ClutterPickContext
     * @returns %TRUE if the actor should be picked, %FALSE otherwise
     */
    should_pick(pick_context: PickContext): boolean
    /**
     * Flags an actor to be displayed. An actor that isn't shown will not
     * be rendered on the stage.
     * 
     * Actors are visible by default.
     * 
     * If this function is called on an actor without a parent, the
     * #ClutterActor:show-on-set-parent will be set to %TRUE as a side
     * effect.
     */
    show(): void
    /**
     * This function translates screen coordinates (`x,` `y)` to
     * coordinates relative to the actor. For example, it can be used to translate
     * screen events from global screen coordinates into actor-local coordinates.
     * 
     * The conversion can fail, notably if the transform stack results in the
     * actor being projected on the screen as a mere line.
     * 
     * The conversion should not be expected to be pixel-perfect due to the
     * nature of the operation. In general the error grows when the skewing
     * of the actor rectangle on screen increases.
     * 
     * This function can be computationally intensive.
     * 
     * This function only works when the allocation is up-to-date, i.e. inside of
     * the #ClutterActorClass.paint() implementation
     * @param x x screen coordinate of the point to unproject
     * @param y y screen coordinate of the point to unproject
     * @returns %TRUE if conversion was successful.
     */
    transform_stage_point(x: number, y: number): [ /* returnType */ boolean, /* x_out */ number | null, /* y_out */ number | null ]
    /**
     * Decreases the culling inhibitor counter. See clutter_actor_inhibit_culling()
     * for when inhibit culling is necessary.
     * 
     * Calling this function without a matching call to
     * clutter_actor_inhibit_culling() is a programming error.
     */
    uninhibit_culling(): void
    /**
     * Unsets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly
     * unmaps its children if they were mapped.
     * 
     * Calling this function is not encouraged: the default #ClutterActor
     * implementation of #ClutterActorClass.unmap() will also unmap any
     * eventual children by default when their parent is unmapped.
     * 
     * When overriding #ClutterActorClass.unmap(), it is mandatory to
     * chain up to the parent implementation.
     * 
     * It is important to note that the implementation of the
     * #ClutterActorClass.unmap() virtual function may be called after
     * the #ClutterActorClass.destroy() or the #GObjectClass.dispose()
     * implementation, but it is guaranteed to be called before the
     * #GObjectClass.finalize() implementation.
     */
    unmap(): void
    /**
     * Unrealization informs the actor that it may be being destroyed or
     * moved to another stage. The actor may want to destroy any
     * underlying graphics resources at this point. However it is
     * perfectly acceptable for it to retain the resources until the actor
     * is destroyed because Clutter only ever uses a single rendering
     * context and all of the graphics resources are valid on any stage.
     * 
     * Because mapped actors must be realized, actors may not be
     * unrealized if they are mapped. This function hides the actor to be
     * sure it isn't mapped, an application-visible side effect that you
     * may not be expecting.
     * 
     * This function should not be called by application code.
     * 
     * This function should not really be in the public API, because
     * there isn't a good reason to call it. ClutterActor will already
     * unrealize things for you when it's important to do so.
     * 
     * If you were using clutter_actor_unrealize() in a dispose
     * implementation, then don't, just chain up to ClutterActor's
     * dispose.
     * 
     * If you were using clutter_actor_unrealize() to implement
     * unrealizing children of your container, then don't, ClutterActor
     * will already take care of that.
     */
    unrealize(): void
    /**
     * Unsets `flags` on `self`
     * 
     * This function will emit notifications for the changed properties
     * @param flags the flags to unset
     */
    unset_flags(flags: ActorFlags): void

    // Own virtual methods of Clutter-11.Clutter.Actor

    /**
     * Assigns the size of a #ClutterActor from the given `box`.
     * 
     * This function should only be called on the children of an actor when
     * overriding the #ClutterActorClass.allocate() virtual function.
     * 
     * This function will adjust the stored allocation to take into account
     * the alignment flags set in the #ClutterActor:x-align and
     * #ClutterActor:y-align properties, as well as the margin values set in
     * the #ClutterActor:margin-top, #ClutterActor:margin-right,
     * #ClutterActor:margin-bottom, and #ClutterActor:margin-left properties.
     * 
     * This function will respect the easing state of the #ClutterActor and
     * interpolate between the current allocation and the new one if the
     * easing state duration is a positive value.
     * 
     * Actors can know from their allocation box whether they have moved
     * with respect to their parent actor. The `flags` parameter describes
     * additional information about the allocation, for instance whether
     * the parent has moved with respect to the stage, for example because
     * a grandparent's origin has moved.
     * @virtual 
     * @param box new allocation of the actor, in parent-relative coordinates
     */
    vfunc_allocate(box: ActorBox): void
    vfunc_apply_transform(matrix: any): void
    vfunc_button_press_event(event: ButtonEvent): boolean
    vfunc_button_release_event(event: ButtonEvent): boolean
    vfunc_calculate_resource_scale(phase: number): number
    vfunc_captured_event(event: Event): boolean
    /**
     * Destroys an actor.  When an actor is destroyed, it will break any
     * references it holds to other objects.  If the actor is inside a
     * container, the actor will be removed.
     * 
     * When you destroy a container, its children will be destroyed as well.
     * @virtual 
     */
    vfunc_destroy(): void
    vfunc_enter_event(event: CrossingEvent): boolean
    vfunc_event(event: Event): boolean
    /**
     * Returns the accessible object that describes the actor to an
     * assistive technology.
     * 
     * If no class-specific #AtkObject implementation is available for the
     * actor instance in question, it will inherit an #AtkObject
     * implementation from the first ancestor class for which such an
     * implementation is defined.
     * 
     * The documentation of the <ulink
     * url="http://developer.gnome.org/doc/API/2.0/atk/index.html">ATK</ulink>
     * library contains more information about accessible objects and
     * their uses.
     * @virtual 
     * @returns the #AtkObject associated with @actor
     */
    vfunc_get_accessible(): Atk.Object
    vfunc_get_paint_volume(volume: PaintVolume): boolean
    /**
     * Computes the requested minimum and natural heights for an actor,
     * or if they are already computed, returns the cached values.
     * 
     * An actor may not get its request - depending on the layout
     * manager that's in effect.
     * 
     * A request should not incorporate the actor's scale or translation;
     * those transformations do not affect layout, only rendering.
     * @virtual 
     * @param for_width available width to assume in computing desired height,   or a negative value to indicate that no width is defined
     */
    vfunc_get_preferred_height(for_width: number): [ /* min_height_p */ number, /* natural_height_p */ number ]
    /**
     * Computes the requested minimum and natural widths for an actor,
     * optionally depending on the specified height, or if they are
     * already computed, returns the cached values.
     * 
     * An actor may not get its request - depending on the layout
     * manager that's in effect.
     * 
     * A request should not incorporate the actor's scaleor translation;
     * those transformations do not affect layout, only rendering.
     * @virtual 
     * @param for_height available height when computing the preferred width,   or a negative value to indicate that no height is defined
     */
    vfunc_get_preferred_width(for_height: number): [ /* min_width_p */ number, /* natural_width_p */ number ]
    vfunc_has_accessible(): boolean
    /**
     * Asks the actor's implementation whether it may contain overlapping
     * primitives.
     * 
     * For example; Clutter may use this to determine whether the painting
     * should be redirected to an offscreen buffer to correctly implement
     * the opacity property.
     * 
     * Custom actors can override the default response by implementing the
     * #ClutterActorClass.has_overlaps() virtual function. See
     * clutter_actor_set_offscreen_redirect() for more information.
     * @virtual 
     * @returns %TRUE if the actor may have overlapping primitives, and   %FALSE otherwise
     */
    vfunc_has_overlaps(): boolean
    /**
     * Flags an actor to be hidden. A hidden actor will not be
     * rendered on the stage.
     * 
     * Actors are visible by default.
     * 
     * If this function is called on an actor without a parent, the
     * #ClutterActor:show-on-set-parent property will be set to %FALSE
     * as a side-effect.
     * @virtual 
     */
    vfunc_hide(): void
    vfunc_hide_all(): void
    vfunc_key_focus_in(): void
    vfunc_key_focus_out(): void
    vfunc_key_press_event(event: KeyEvent): boolean
    vfunc_key_release_event(event: KeyEvent): boolean
    vfunc_leave_event(event: CrossingEvent): boolean
    /**
     * Sets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly maps
     * and realizes its children if they are visible. Does nothing if the
     * actor is not visible.
     * 
     * Calling this function is strongly discouraged: the default
     * implementation of #ClutterActorClass.map() will map all the children
     * of an actor when mapping its parent.
     * 
     * When overriding map, it is mandatory to chain up to the parent
     * implementation.
     * @virtual 
     */
    vfunc_map(): void
    vfunc_motion_event(event: MotionEvent): boolean
    /**
     * Renders the actor to display.
     * 
     * This function should not be called directly by applications.
     * Call clutter_actor_queue_redraw() to queue paints, instead.
     * 
     * This function is context-aware, and will either cause a
     * regular paint or a pick paint.
     * 
     * This function will call the #ClutterActorClass.paint() virtual
     * function.
     * 
     * This function does not paint the actor if the actor is set to 0,
     * unless it is performing a pick paint.
     * @virtual 
     * @param paint_context 
     */
    vfunc_paint(paint_context: PaintContext): void
    vfunc_paint_node(root: PaintNode): void
    vfunc_parent_set(old_parent: Actor): void
    /**
     * Asks `actor` to perform a pick.
     * @virtual 
     * @param pick_context 
     */
    vfunc_pick(pick_context: PickContext): void
    /**
     * Indicates that the actor's size request or other layout-affecting
     * properties may have changed. This function is used inside #ClutterActor
     * subclass implementations, not by applications directly.
     * 
     * Queueing a new layout automatically queues a redraw as well.
     * @virtual 
     */
    vfunc_queue_relayout(): void
    /**
     * Realization informs the actor that it is attached to a stage. It
     * can use this to allocate resources if it wanted to delay allocation
     * until it would be rendered. However it is perfectly acceptable for
     * an actor to create resources before being realized because Clutter
     * only ever has a single rendering context so that actor is free to
     * be moved from one stage to another.
     * 
     * This function does nothing if the actor is already realized.
     * 
     * Because a realized actor must have realized parent actors, calling
     * clutter_actor_realize() will also realize all parents of the actor.
     * 
     * This function does not realize child actors, except in the special
     * case that realizing the stage, when the stage is visible, will
     * suddenly map (and thus realize) the children of the stage.
     * @virtual 
     */
    vfunc_realize(): void
    vfunc_resource_scale_changed(): void
    vfunc_scroll_event(event: ScrollEvent): boolean
    /**
     * Flags an actor to be displayed. An actor that isn't shown will not
     * be rendered on the stage.
     * 
     * Actors are visible by default.
     * 
     * If this function is called on an actor without a parent, the
     * #ClutterActor:show-on-set-parent will be set to %TRUE as a side
     * effect.
     * @virtual 
     */
    vfunc_show(): void
    vfunc_touch_event(event: TouchEvent): boolean
    /**
     * Unsets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly
     * unmaps its children if they were mapped.
     * 
     * Calling this function is not encouraged: the default #ClutterActor
     * implementation of #ClutterActorClass.unmap() will also unmap any
     * eventual children by default when their parent is unmapped.
     * 
     * When overriding #ClutterActorClass.unmap(), it is mandatory to
     * chain up to the parent implementation.
     * 
     * It is important to note that the implementation of the
     * #ClutterActorClass.unmap() virtual function may be called after
     * the #ClutterActorClass.destroy() or the #GObjectClass.dispose()
     * implementation, but it is guaranteed to be called before the
     * #GObjectClass.finalize() implementation.
     * @virtual 
     */
    vfunc_unmap(): void
    /**
     * Unrealization informs the actor that it may be being destroyed or
     * moved to another stage. The actor may want to destroy any
     * underlying graphics resources at this point. However it is
     * perfectly acceptable for it to retain the resources until the actor
     * is destroyed because Clutter only ever uses a single rendering
     * context and all of the graphics resources are valid on any stage.
     * 
     * Because mapped actors must be realized, actors may not be
     * unrealized if they are mapped. This function hides the actor to be
     * sure it isn't mapped, an application-visible side effect that you
     * may not be expecting.
     * 
     * This function should not be called by application code.
     * 
     * This function should not really be in the public API, because
     * there isn't a good reason to call it. ClutterActor will already
     * unrealize things for you when it's important to do so.
     * 
     * If you were using clutter_actor_unrealize() in a dispose
     * implementation, then don't, just chain up to ClutterActor's
     * dispose.
     * 
     * If you were using clutter_actor_unrealize() to implement
     * unrealizing children of your container, then don't, ClutterActor
     * will already take care of that.
     * @virtual 
     */
    vfunc_unrealize(): void

    // Own signals of Clutter-11.Clutter.Actor

    connect(sigName: "button-press-event", callback: Actor.ButtonPressEventSignalCallback): number
    connect_after(sigName: "button-press-event", callback: Actor.ButtonPressEventSignalCallback): number
    emit(sigName: "button-press-event", event: ButtonEvent, ...args: any[]): void
    connect(sigName: "button-release-event", callback: Actor.ButtonReleaseEventSignalCallback): number
    connect_after(sigName: "button-release-event", callback: Actor.ButtonReleaseEventSignalCallback): number
    emit(sigName: "button-release-event", event: ButtonEvent, ...args: any[]): void
    connect(sigName: "captured-event", callback: Actor.CapturedEventSignalCallback): number
    connect_after(sigName: "captured-event", callback: Actor.CapturedEventSignalCallback): number
    emit(sigName: "captured-event", event: Event, ...args: any[]): void
    connect(sigName: "destroy", callback: Actor.DestroySignalCallback): number
    connect_after(sigName: "destroy", callback: Actor.DestroySignalCallback): number
    emit(sigName: "destroy", ...args: any[]): void
    connect(sigName: "enter-event", callback: Actor.EnterEventSignalCallback): number
    connect_after(sigName: "enter-event", callback: Actor.EnterEventSignalCallback): number
    emit(sigName: "enter-event", event: CrossingEvent, ...args: any[]): void
    connect(sigName: "event", callback: Actor.EventSignalCallback): number
    connect_after(sigName: "event", callback: Actor.EventSignalCallback): number
    emit(sigName: "event", event: Event, ...args: any[]): void
    connect(sigName: "hide", callback: Actor.HideSignalCallback): number
    connect_after(sigName: "hide", callback: Actor.HideSignalCallback): number
    emit(sigName: "hide", ...args: any[]): void
    connect(sigName: "key-focus-in", callback: Actor.KeyFocusInSignalCallback): number
    connect_after(sigName: "key-focus-in", callback: Actor.KeyFocusInSignalCallback): number
    emit(sigName: "key-focus-in", ...args: any[]): void
    connect(sigName: "key-focus-out", callback: Actor.KeyFocusOutSignalCallback): number
    connect_after(sigName: "key-focus-out", callback: Actor.KeyFocusOutSignalCallback): number
    emit(sigName: "key-focus-out", ...args: any[]): void
    connect(sigName: "key-press-event", callback: Actor.KeyPressEventSignalCallback): number
    connect_after(sigName: "key-press-event", callback: Actor.KeyPressEventSignalCallback): number
    emit(sigName: "key-press-event", event: KeyEvent, ...args: any[]): void
    connect(sigName: "key-release-event", callback: Actor.KeyReleaseEventSignalCallback): number
    connect_after(sigName: "key-release-event", callback: Actor.KeyReleaseEventSignalCallback): number
    emit(sigName: "key-release-event", event: KeyEvent, ...args: any[]): void
    connect(sigName: "leave-event", callback: Actor.LeaveEventSignalCallback): number
    connect_after(sigName: "leave-event", callback: Actor.LeaveEventSignalCallback): number
    emit(sigName: "leave-event", event: CrossingEvent, ...args: any[]): void
    connect(sigName: "motion-event", callback: Actor.MotionEventSignalCallback): number
    connect_after(sigName: "motion-event", callback: Actor.MotionEventSignalCallback): number
    emit(sigName: "motion-event", event: MotionEvent, ...args: any[]): void
    connect(sigName: "parent-set", callback: Actor.ParentSetSignalCallback): number
    connect_after(sigName: "parent-set", callback: Actor.ParentSetSignalCallback): number
    emit(sigName: "parent-set", old_parent: Actor | null, ...args: any[]): void
    connect(sigName: "pick", callback: Actor.PickSignalCallback): number
    connect_after(sigName: "pick", callback: Actor.PickSignalCallback): number
    emit(sigName: "pick", pick_context: PickContext, ...args: any[]): void
    connect(sigName: "queue-relayout", callback: Actor.QueueRelayoutSignalCallback): number
    connect_after(sigName: "queue-relayout", callback: Actor.QueueRelayoutSignalCallback): number
    emit(sigName: "queue-relayout", ...args: any[]): void
    connect(sigName: "realize", callback: Actor.RealizeSignalCallback): number
    connect_after(sigName: "realize", callback: Actor.RealizeSignalCallback): number
    emit(sigName: "realize", ...args: any[]): void
    connect(sigName: "resource-scale-changed", callback: Actor.ResourceScaleChangedSignalCallback): number
    connect_after(sigName: "resource-scale-changed", callback: Actor.ResourceScaleChangedSignalCallback): number
    emit(sigName: "resource-scale-changed", ...args: any[]): void
    connect(sigName: "scroll-event", callback: Actor.ScrollEventSignalCallback): number
    connect_after(sigName: "scroll-event", callback: Actor.ScrollEventSignalCallback): number
    emit(sigName: "scroll-event", event: ScrollEvent, ...args: any[]): void
    connect(sigName: "show", callback: Actor.ShowSignalCallback): number
    connect_after(sigName: "show", callback: Actor.ShowSignalCallback): number
    emit(sigName: "show", ...args: any[]): void
    connect(sigName: "stage-views-changed", callback: Actor.StageViewsChangedSignalCallback): number
    connect_after(sigName: "stage-views-changed", callback: Actor.StageViewsChangedSignalCallback): number
    emit(sigName: "stage-views-changed", ...args: any[]): void
    connect(sigName: "touch-event", callback: Actor.TouchEventSignalCallback): number
    connect_after(sigName: "touch-event", callback: Actor.TouchEventSignalCallback): number
    emit(sigName: "touch-event", event: Event, ...args: any[]): void
    connect(sigName: "transition-stopped", callback: Actor.TransitionStoppedSignalCallback): number
    connect_after(sigName: "transition-stopped", callback: Actor.TransitionStoppedSignalCallback): number
    emit(sigName: "transition-stopped", name: string | null, is_finished: boolean, ...args: any[]): void
    connect(sigName: "transitions-completed", callback: Actor.TransitionsCompletedSignalCallback): number
    connect_after(sigName: "transitions-completed", callback: Actor.TransitionsCompletedSignalCallback): number
    emit(sigName: "transitions-completed", ...args: any[]): void
    connect(sigName: "unrealize", callback: Actor.UnrealizeSignalCallback): number
    connect_after(sigName: "unrealize", callback: Actor.UnrealizeSignalCallback): number
    emit(sigName: "unrealize", ...args: any[]): void
}

/**
 * The basic element of the scene graph
 * 
 * The ClutterActor class is the basic element of the scene graph in Clutter,
 * and it encapsulates the position, size, and transformations of a node in
 * the graph.
 * 
 * ## Actor transformations
 * 
 * Each actor can be transformed using methods like [method`Actor`.set_scale]
 * or [method`Actor`.set_rotation_angle]. The order in which the transformations are
 * applied is decided by Clutter and it is the following:
 * 
 *  1. translation by the origin of the [property`Actor:`allocation] property
 *  2. translation by the actor's [property`Actor:`z-position] property
 *  3. translation by the actor's [property`Actor:`pivot-point] property
 *  4. scaling by the [property`Actor:`scale-x] and [property`Actor:`scale-y] factors
 *  5. rotation around the [property`Actor:`rotation-angle-x]
 *  6. rotation around the [property`Actor:`rotation-angle-y]
 *  7. rotation around the [property`Actor:`rotation-angle-z]
 *  8. negative translation by the actor's [property`Actor:`pivot-point]
 * 
 * ## Modifying an actor's geometry
 * 
 * Each actor has a bounding box, called [property`Actor:`allocation]
 * which is either set by its parent or explicitly through the
 * [method`Actor`.set_position] and [method`Actor`.set_size] methods.
 * Each actor also has an implicit preferred size.
 * 
 * An actor’s preferred size can be defined by any subclass by
 * overriding the [vfunc`Actor`.get_preferred_width] and the
 * [vfunc`Actor`.get_preferred_height] virtual functions, or it can
 * be explicitly set by using [method`Actor`.set_width] and
 * [method`Actor`.set_height].
 * 
 * An actor’s position can be set explicitly by using
 * [method`Actor`.set_x] and [method`Actor`.set_y]; the coordinates are
 * relative to the origin of the actor’s parent.
 * 
 * ## Managing actor children
 * 
 * Each actor can have multiple children, by calling
 * clutter_actor_add_child() to add a new child actor, and
 * clutter_actor_remove_child() to remove an existing child. #ClutterActor
 * will hold a reference on each child actor, which will be released when
 * the child is removed from its parent, or destroyed using
 * clutter_actor_destroy().
 * 
 * ```c
 *  ClutterActor *actor = clutter_actor_new ();
 * 
 *  // set the bounding box of the actor
 *  clutter_actor_set_position (actor, 0, 0);
 *  clutter_actor_set_size (actor, 480, 640);
 * 
 *  // set the background color of the actor
 *  clutter_actor_set_background_color (actor, CLUTTER_COLOR_Orange);
 * 
 *  // set the bounding box of the child, relative to the parent
 *  ClutterActor *child = clutter_actor_new ();
 *  clutter_actor_set_position (child, 20, 20);
 *  clutter_actor_set_size (child, 80, 240);
 * 
 *  // set the background color of the child
 *  clutter_actor_set_background_color (child, CLUTTER_COLOR_Blue);
 * 
 *  // add the child to the actor
 *  clutter_actor_add_child (actor, child);
 * ```
 * 
 * Children can be inserted at a given index, or above and below
 * another child actor. The order of insertion determines the order of the
 * children when iterating over them. Iterating over children is performed
 * by using clutter_actor_get_first_child(), clutter_actor_get_previous_sibling(),
 * clutter_actor_get_next_sibling(), and clutter_actor_get_last_child(). It is
 * also possible to retrieve a list of children by using
 * clutter_actor_get_children(), as well as retrieving a specific child at a
 * given index by using clutter_actor_get_child_at_index().
 * 
 * If you need to track additions of children to a #ClutterActor, use
 * the #ClutterContainer::actor-added signal; similarly, to track removals
 * of children from a ClutterActor, use the #ClutterContainer::actor-removed
 * signal.
 * 
 * See [basic-actor.c](https://git.gnome.org/browse/clutter/tree/examples/basic-actor.c?h=clutter-1.18).
 * 
 * ## Painting an actor
 * 
 * There are three ways to paint an actor:
 * 
 *  - set a delegate #ClutterContent as the value for the #ClutterActor:content property of the actor
 *  - subclass #ClutterActor and override the #ClutterActorClass.paint_node() virtual function
 *  - subclass #ClutterActor and override the #ClutterActorClass.paint() virtual function.
 * 
 * A #ClutterContent is a delegate object that takes over the painting
 * operations of one, or more actors. The #ClutterContent painting will
 * be performed on top of the #ClutterActor:background-color of the actor,
 * and before calling the actor's own implementation of the
 * #ClutterActorClass.paint_node() virtual function.
 * 
 * ```c
 * ClutterActor *actor = clutter_actor_new ();
 * 
 * // set the bounding box
 * clutter_actor_set_position (actor, 50, 50);
 * clutter_actor_set_size (actor, 100, 100);
 * 
 * // set the content; the image_content variable is set elsewhere
 * clutter_actor_set_content (actor, image_content);
 * ```
 * 
 * The #ClutterActorClass.paint_node() virtual function is invoked whenever
 * an actor needs to be painted. The implementation of the virtual function
 * must only paint the contents of the actor itself, and not the contents of
 * its children, if the actor has any.
 * 
 * The #ClutterPaintNode passed to the virtual function is the local root of
 * the render tree; any node added to it will be rendered at the correct
 * position, as defined by the actor's #ClutterActor:allocation.
 * 
 * ```c
 * static void
 * my_actor_paint_node (ClutterActor     *actor,
 *                      ClutterPaintNode *root)
 * {
 *   ClutterPaintNode *node;
 *   ClutterActorBox box;
 * 
 *   // where the content of the actor should be painted
 *   clutter_actor_get_allocation_box (actor, &box);
 * 
 *   // the cogl_texture variable is set elsewhere
 *   node = clutter_texture_node_new (cogl_texture, CLUTTER_COLOR_White,
 *                                    CLUTTER_SCALING_FILTER_TRILINEAR,
 *                                    CLUTTER_SCALING_FILTER_LINEAR);
 * 
 *   // paint the content of the node using the allocation
 *   clutter_paint_node_add_rectangle (node, &box);
 * 
 *   // add the node, and transfer ownership
 *   clutter_paint_node_add_child (root, node);
 *   clutter_paint_node_unref (node);
 * }
 * ```
 * 
 * The #ClutterActorClass.paint() virtual function function gives total
 * control to the paint sequence of the actor itself, including the
 * children of the actor, if any. It is strongly discouraged to override
 * the #ClutterActorClass.paint() virtual function and it will be removed
 * when the Clutter API changes.
 * 
 * ## Handling events on an actor
 * 
 * A #ClutterActor can receive and handle input device events, for
 * instance pointer events and key events, as long as its
 * #ClutterActor:reactive property is set to %TRUE.
 * 
 * Once an actor has been determined to be the source of an event,
 * Clutter will traverse the scene graph from the top-level actor towards the
 * event source, emitting the #ClutterActor::captured-event signal on each
 * ancestor until it reaches the source; this phase is also called
 * the "capture" phase. If the event propagation was not stopped, the graph
 * is walked backwards, from the source actor to the top-level, and the
 * #ClutterActor::event signal is emitted, alongside eventual event-specific
 * signals like #ClutterActor::button-press-event or #ClutterActor::motion-event;
 * this phase is also called the "bubble" phase.
 * 
 * At any point of the signal emission, signal handlers can stop the propagation
 * through the scene graph by returning %CLUTTER_EVENT_STOP; otherwise, they can
 * continue the propagation by returning %CLUTTER_EVENT_PROPAGATE.
 * 
 * ## Animation
 * 
 * Animation is a core concept of modern user interfaces; Clutter provides a
 * complete and powerful animation framework that automatically tweens the
 * actor's state without requiring direct, frame by frame manipulation from
 * your application code. You have two models at your disposal:
 * 
 *  - an implicit animation model
 *  - an explicit animation model
 * 
 * The implicit animation model of Clutter assumes that all the
 * changes in an actor state should be gradual and asynchronous; Clutter
 * will automatically transition an actor's property change between the
 * current state and the desired one without manual intervention, if the
 * property is defined to be animatable in its documentation.
 * 
 * By default, in the 1.0 API series, the transition happens with a duration
 * of zero milliseconds, and the implicit animation is an opt in feature to
 * retain backwards compatibility.
 * 
 * Implicit animations depend on the current easing state; in order to use
 * the default easing state for an actor you should call the
 * clutter_actor_save_easing_state() function:
 * 
 * ```c
 * // assume that the actor is currently positioned at (100, 100)
 * 
 * // store the current easing state and reset the new easing state to
 * // its default values
 * clutter_actor_save_easing_state (actor);
 * 
 * // change the actor's position
 * clutter_actor_set_position (actor, 500, 500);
 * 
 * // restore the previously saved easing state
 * clutter_actor_restore_easing_state (actor);
 * ```
 * 
 * The example above will trigger an implicit animation of the
 * actor between its current position to a new position.
 * 
 * Implicit animations use a default duration of 250 milliseconds,
 * and a default easing mode of %CLUTTER_EASE_OUT_CUBIC, unless you call
 * clutter_actor_set_easing_mode() and clutter_actor_set_easing_duration()
 * after changing the easing state of the actor.
 * 
 * It is possible to animate multiple properties of an actor
 * at the same time, and you can animate multiple actors at the same
 * time as well, for instance:
 * 
 * ```c
 * clutter_actor_save_easing_state (actor);
 * 
 * // animate the actor's opacity and depth
 * clutter_actor_set_opacity (actor, 0);
 * clutter_actor_set_z_position (actor, -100);
 * 
 * clutter_actor_restore_easing_state (actor);
 * 
 * clutter_actor_save_easing_state (another_actor);
 * 
 * // animate another actor's opacity
 * clutter_actor_set_opacity (another_actor, 255);
 * clutter_actor_set_z_position (another_actor, 100);
 * 
 * clutter_actor_restore_easing_state (another_actor);
 * ```
 * 
 * Changing the easing state will affect all the following property
 * transitions, but will not affect existing transitions.
 * 
 * It is important to note that if you modify the state on an
 * animatable property while a transition is in flight, the transition's
 * final value will be updated, as well as its duration and progress
 * mode by using the current easing state; for instance, in the following
 * example:
 * 
 * ```c
 * clutter_actor_save_easing_state (actor);
 * clutter_actor_set_easing_duration (actor, 1000);
 * clutter_actor_set_x (actor, 200);
 * clutter_actor_restore_easing_state (actor);
 * 
 * clutter_actor_save_easing_state (actor);
 * clutter_actor_set_easing_duration (actor, 500);
 * clutter_actor_set_x (actor, 100);
 * clutter_actor_restore_easing_state (actor);
 * ```
 * 
 * the first call to clutter_actor_set_x() will begin a transition
 * of the #ClutterActor:x property from the current value to the value of
 * 200 over a duration of one second; the second call to clutter_actor_set_x()
 * will change the transition's final value to 100 and the duration to 500
 * milliseconds.
 * 
 * It is possible to receive a notification of the completion of an
 * implicit transition by using the #ClutterActor::transition-stopped
 * signal, decorated with the name of the property. In case you want to
 * know when all the currently in flight transitions are complete, use
 * the #ClutterActor::transitions-completed signal instead.
 * 
 * It is possible to retrieve the #ClutterTransition used by the
 * animatable properties by using clutter_actor_get_transition() and using
 * the property name as the transition name.
 * 
 * The explicit animation model supported by Clutter requires that
 * you create a #ClutterTransition object, and optionally set the initial
 * and final values. The transition will not start unless you add it to the
 * #ClutterActor.
 * 
 * ```c
 * ClutterTransition *transition;
 * 
 * transition = clutter_property_transition_new_for_actor (actor, "opacity");
 * clutter_timeline_set_duration (CLUTTER_TIMELINE (transition), 3000);
 * clutter_timeline_set_repeat_count (CLUTTER_TIMELINE (transition), 2);
 * clutter_timeline_set_auto_reverse (CLUTTER_TIMELINE (transition), TRUE);
 * clutter_transition_set_from (transition, G_TYPE_UINT, 255);
 * clutter_transition_set_to (transition, G_TYPE_UINT, 0);
 * 
 * clutter_actor_add_transition (actor, "animate-opacity", transition);
 * ```
 * 
 * The example above will animate the #ClutterActor:opacity property
 * of an actor between fully opaque and fully transparent, and back, over
 * a span of 3 seconds. The animation does not begin until it is added to
 * the actor.
 * 
 * The explicit animation API applies to all #GObject properties,
 * as well as the custom properties defined through the #ClutterAnimatable
 * interface, regardless of whether they are defined as implicitly
 * animatable or not.
 * 
 * The explicit animation API should also be used when using custom
 * animatable properties for #ClutterAction, #ClutterConstraint, and
 * #ClutterEffect instances associated to an actor; see the section on
 * custom animatable properties below for an example.
 * 
 * Finally, explicit animations are useful for creating animations
 * that run continuously, for instance:
 * 
 * ```c
 * // this animation will pulse the actor's opacity continuously
 * ClutterTransition *transition;
 * ClutterInterval *interval;
 * 
 * transition = clutter_property_transition_new_for_actor (actor, "opacity");
 * 
 * // we want to animate the opacity between 0 and 255
 * clutter_transition_set_from (transition, G_TYPE_UINT, 0);
 * clutter_transition_set_to (transition, G_TYPE_UINT, 255);
 * 
 * // over a one second duration, running an infinite amount of times
 * clutter_timeline_set_duration (CLUTTER_TIMELINE (transition), 1000);
 * clutter_timeline_set_repeat_count (CLUTTER_TIMELINE (transition), -1);
 * 
 * // we want to fade in and out, so we need to auto-reverse the transition
 * clutter_timeline_set_auto_reverse (CLUTTER_TIMELINE (transition), TRUE);
 * 
 * // and we want to use an easing function that eases both in and out
 * clutter_timeline_set_progress_mode (CLUTTER_TIMELINE (transition),
 *                                     CLUTTER_EASE_IN_OUT_CUBIC);
 * 
 * // add the transition to the desired actor to start it
 * clutter_actor_add_transition (actor, "opacityAnimation", transition);
 * ```
 * 
 * ## Implementing an actor
 * 
 * Careful consideration should be given when deciding to implement
 * a #ClutterActor sub-class. It is generally recommended to implement a
 * sub-class of #ClutterActor only for actors that should be used as leaf
 * nodes of a scene graph.
 * 
 * By overriding the #ClutterActorClass.get_preferred_width() and
 * #ClutterActorClass.get_preferred_height() virtual functions it is
 * possible to change or provide the preferred size of an actor; similarly,
 * by overriding the #ClutterActorClass.allocate() virtual function it is
 * possible to control the layout of the children of an actor. Make sure to
 * always chain up to the parent implementation of the
 * #ClutterActorClass.allocate() virtual function.
 * 
 * In general, it is strongly encouraged to use delegation and composition
 * instead of direct subclassing.
 * 
 * ## ClutterActor custom properties for ClutterScript
 * 
 * #ClutterActor defines a custom "rotation" property which allows a short-hand
 * description of the rotations to be applied to an actor.
 * 
 * The syntax of the "rotation" property is the following:
 * 
 * ```
 * "rotation" : [ { "<axis>" : [ <angle>, [ <center-point> ] ] } ]
 * ```
 * 
 * where:
 * 
 *  - axis is the name of an enumeration value of type #ClutterRotateAxis
 *  - angle is a floating point value representing the rotation angle on the given axis in degrees
 *  - center-point is an optional array, and if present it must contain the center of rotation as described by two coordinates:
 *    - Y and Z for "x-axis"
 *    - X and Z for "y-axis"
 *    - X and Y for "z-axis".
 * 
 * #ClutterActor also defines a scriptable "margin" property which follows the CSS "margin" shorthand.
 * 
 * ```
 *   // 4 values
 *   "margin" : [ top, right, bottom, left ]
 *   // 3 values
 *   "margin" : [ top, left/right, bottom ]
 *   // 2 values
 *   "margin" : [ top/bottom, left/right ]
 *   // 1 value
 *   "margin" : [ top/right/bottom/left ]
 * ```
 * 
 * #ClutterActor will also parse every positional and dimensional
 * property defined as a string through clutter_units_from_string(); you
 * should read the documentation for the #ClutterUnits parser format for
 * the valid units and syntax.
 * 
 * ## Custom animatable properties
 * 
 * #ClutterActor allows accessing properties of #ClutterAction,
 * #ClutterEffect, and #ClutterConstraint instances associated to an actor
 * instance for animation purposes, as well as its #ClutterLayoutManager.
 * 
 * In order to access a specific #ClutterAction or a #ClutterConstraint
 * property it is necessary to set the #ClutterActorMeta:name property on the
 * given action or constraint.
 * 
 * The property can be accessed using the following syntax:
 * 
 * ```
 *   `<`section>.<meta-name>.<property-name>
 * ```
 * 
 *  - the initial ```` is mandatory
 *  - the `section` fragment can be one between "actions", "constraints", "content",
 *    and "effects"
 *  - the `meta-name` fragment is the name of the action, effect, or constraint, as
 *    specified by the #ClutterActorMeta:name property of #ClutterActorMeta
 *  - the `property-name` fragment is the name of the action, effect, or constraint
 *    property to be animated.
 * 
 * The example below animates a #ClutterBindConstraint applied to an actor
 * using an explicit transition. The `rect` actor has a binding constraint
 * on the `origin` actor, and in its initial state is overlapping the actor
 * to which is bound to.
 * 
 * As the actor has only one #ClutterLayoutManager, the syntax for accessing its
 * properties is simpler:
 * 
 * ```
 *   `layout`.<property-name>
 * ```
 * 
 * ```c
 * constraint = clutter_bind_constraint_new (origin, CLUTTER_BIND_X, 0.0);
 * clutter_actor_meta_set_name (CLUTTER_ACTOR_META (constraint), "bind-x");
 * clutter_actor_add_constraint (rect, constraint);
 * 
 * constraint = clutter_bind_constraint_new (origin, CLUTTER_BIND_Y, 0.0);
 * clutter_actor_meta_set_name (CLUTTER_ACTOR_META (constraint), "bind-y");
 * clutter_actor_add_constraint (rect, constraint);
 * 
 * clutter_actor_set_reactive (origin, TRUE);
 * 
 * g_signal_connect (origin, "button-press-event",
 *                   G_CALLBACK (on_button_press),
 *                   rect);
 * ```
 * 
 * On button press, the rectangle "slides" from behind the actor to
 * which is bound to, using the #ClutterBindConstraint:offset property to
 * achieve the effect:
 * 
 * ```c
 * gboolean
 * on_button_press (ClutterActor *origin,
 *                  ClutterEvent *event,
 *                  ClutterActor *rect)
 * {
 *   ClutterTransition *transition;
 * 
 *   // the offset that we want to apply; this will make the actor
 *   // slide in from behind the origin and rest at the right of
 *   // the origin, plus a padding value
 *   float new_offset = clutter_actor_get_width (origin) + h_padding;
 * 
 *   // the property we wish to animate; the "`constraints"` section
 *   // tells Clutter to check inside the constraints associated
 *   // with the actor; the "bind-x" section is the name of the
 *   // constraint; and the "offset" is the name of the property
 *   // on the constraint
 *   const char *prop = "`constraints`.bind-x.offset";
 * 
 *   // create a new transition for the given property
 *   transition = clutter_property_transition_new_for_actor (rect, prop);
 * 
 *   // set the easing mode and duration
 *   clutter_timeline_set_progress_mode (CLUTTER_TIMELINE (transition),
 *                                       CLUTTER_EASE_OUT_CUBIC);
 *   clutter_timeline_set_duration (CLUTTER_TIMELINE (transition), 500);
 * 
 *   // create the interval with the initial and final values
 *   clutter_transition_set_from (transition, G_TYPE_FLOAT, 0.f);
 *   clutter_transition_set_to (transition, G_TYPE_FLOAT, new_offset);
 * 
 *   // add the transition to the actor; this causes the animation
 *   // to start. the name "offsetAnimation" can be used to retrieve
 *   // the transition later
 *   clutter_actor_add_transition (rect, "offsetAnimation", transition);
 * 
 *   // we handled the event
 *   return CLUTTER_EVENT_STOP;
 * }
 * ```
 * @class 
 */
class Actor {

    // Own properties of Clutter-11.Clutter.Actor

    static name: string

    // Constructors of Clutter-11.Clutter.Actor

    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     * @returns the newly created #ClutterActor
     */
    constructor() 
    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     * @returns the newly created #ClutterActor
     */
    static new(): Actor
}

interface ActorMeta {

    // Own properties of Clutter-11.Clutter.ActorMeta

    /**
     * The #ClutterActor attached to the #ClutterActorMeta instance
     */
    readonly actor: Actor
    /**
     * Whether or not the #ClutterActorMeta is enabled
     */
    enabled: boolean
    /**
     * The unique name to access the #ClutterActorMeta
     */
    name: string | null

    // Own fields of Clutter-11.Clutter.ActorMeta

    parent_instance: any

    // Owm methods of Clutter-11.Clutter.ActorMeta

    /**
     * Retrieves a pointer to the [class`Actor]` that owns `meta`
     * @returns a pointer to a #ClutterActor or %NULL
     */
    get_actor(): Actor
    /**
     * Retrieves whether `meta` is enabled
     * @returns %TRUE if the #ClutterActorMeta instance is enabled
     */
    get_enabled(): boolean
    /**
     * Retrieves the name set using [method`ActorMeta`.set_name]
     * @returns the name of the #ClutterActorMeta   instance, or %NULL if none was set. The returned string is owned   by the #ClutterActorMeta instance and it should not be modified   or freed
     */
    get_name(): string | null
    /**
     * Sets whether `meta` should be enabled or not
     * @param is_enabled whether `meta` is enabled
     */
    set_enabled(is_enabled: boolean): void
    /**
     * Sets the name of `meta`
     * 
     * The name can be used to identify the #ClutterActorMeta instance
     * @param name the name of `meta`
     */
    set_name(name: string | null): void

    // Own virtual methods of Clutter-11.Clutter.ActorMeta

    /**
     * Virtual function, called when `meta` is attached or detached
     * from a #ClutterActor.
     * @virtual 
     * @param actor the actor attached to `meta,` or %NULL
     */
    vfunc_set_actor(actor: Actor | null): void
    /**
     * Sets whether `meta` should be enabled or not
     * @virtual 
     * @param is_enabled whether `meta` is enabled
     */
    vfunc_set_enabled(is_enabled: boolean): void
}

/**
 * Base class of actor modifiers
 * 
 * #ClutterActorMeta is an abstract class providing a common API for
 * modifiers of [class`Actor]` behaviour, appearance or layout.
 * 
 * A #ClutterActorMeta can only be owned by a single [class`Actor]` at
 * any time.
 * 
 * Every sub-class of #ClutterActorMeta should check if the
 * [property`ActorMeta:`enabled] property is set to %TRUE before applying
 * any kind of modification.
 * @class 
 */
class ActorMeta {

    // Own properties of Clutter-11.Clutter.ActorMeta

    static name: string
}

interface ActorNode {
}

class ActorNode extends PaintNode {

    // Own properties of Clutter-11.Clutter.ActorNode

    static name: string

    // Constructors of Clutter-11.Clutter.ActorNode

    constructor(actor: Actor, opacity: number) 
    static new(actor: Actor, opacity: number): ActorNode
}

interface AlignConstraint {

    // Own properties of Clutter-11.Clutter.AlignConstraint

    /**
     * The axis to be used to compute the alignment
     */
    align_axis: AlignAxis
    /**
     * The alignment factor, as a normalized value between 0.0 and 1.0
     * 
     * The factor depends on the #ClutterAlignConstraint:align-axis property:
     * with an align-axis value of %CLUTTER_ALIGN_X_AXIS, 0.0 means left and
     * 1.0 means right; with a value of %CLUTTER_ALIGN_Y_AXIS, 0.0 means top
     * and 1.0 means bottom.
     */
    factor: number
    /**
     * The pivot point used by the constraint. The pivot point is the
     * point in the constraint actor around which the aligning is applied,
     * with (0, 0) being the top left corner of the actor and (1, 1) the
     * bottom right corner of the actor.
     * 
     * For example, setting the pivot point to (0.5, 0.5) and using a factor
     * of 1 for both axes will align the actors horizontal and vertical
     * center point with the bottom right corner of the source actor.
     * 
     * By default, the pivot point is set to (-1, -1), which means it's not
     * used and the constrained actor will be aligned to always stay inside
     * the source actor.
     */
    pivot_point: any
    /**
     * The #ClutterActor used as the source for the alignment.
     * 
     * The #ClutterActor must not be a child or a grandchild of the actor
     * using the constraint.
     */
    source: Actor

    // Owm methods of Clutter-11.Clutter.AlignConstraint

    /**
     * Retrieves the value set using clutter_align_constraint_set_align_axis()
     * @returns the alignment axis
     */
    get_align_axis(): AlignAxis
    /**
     * Retrieves the factor set using clutter_align_constraint_set_factor()
     * @returns the alignment factor
     */
    get_factor(): number
    /**
     * Gets the pivot point used by the constraint set with
     * clutter_align_constraint_set_pivot_point(). If no custom pivot
     * point is set, -1 is set.
     */
    get_pivot_point(): /* pivot_point */ any
    /**
     * Retrieves the source of the alignment
     * @returns the #ClutterActor used as the source   of the alignment
     */
    get_source(): Actor
    /**
     * Sets the axis to which the alignment refers to
     * @param axis the axis to which the alignment refers to
     */
    set_align_axis(axis: AlignAxis): void
    /**
     * Sets the alignment factor of the constraint
     * 
     * The factor depends on the #ClutterAlignConstraint:align-axis property
     * and it is a value between 0.0 (meaning left, when
     * #ClutterAlignConstraint:align-axis is set to %CLUTTER_ALIGN_X_AXIS; or
     * meaning top, when #ClutterAlignConstraint:align-axis is set to
     * %CLUTTER_ALIGN_Y_AXIS) and 1.0 (meaning right, when
     * #ClutterAlignConstraint:align-axis is set to %CLUTTER_ALIGN_X_AXIS; or
     * meaning bottom, when #ClutterAlignConstraint:align-axis is set to
     * %CLUTTER_ALIGN_Y_AXIS). A value of 0.5 aligns in the middle in either
     * cases
     * @param factor the alignment factor, between 0.0 and 1.0
     */
    set_factor(factor: number): void
    /**
     * Sets the pivot point used by the constraint, the pivot point is the
     * point in the constraint actor around which the aligning is applied,
     * with (0, 0) being the top left corner of the actor and (1, 1) the
     * bottom right corner of the actor.
     * 
     * If -1 is used, the pivot point is unset and the constrained actor
     * will be aligned to always stay inside the source actor.
     * @param pivot_point A #GraphenePoint
     */
    set_pivot_point(pivot_point: any): void
    /**
     * Sets the source of the alignment constraint
     * @param source a #ClutterActor, or %NULL to unset the source
     */
    set_source(source: Actor | null): void
}

/**
 * A constraint aligning the position of an actor
 * 
 * #ClutterAlignConstraint is a [class`Constraint]` that aligns the position
 * of the [class`Actor]` to which it is applied to the size of another
 * [class`Actor]` using an alignment factor
 * @class 
 */
class AlignConstraint extends Constraint {

    // Own properties of Clutter-11.Clutter.AlignConstraint

    static name: string

    // Constructors of Clutter-11.Clutter.AlignConstraint

    /**
     * Creates a new constraint, aligning a #ClutterActor's position with
     * regards of the size of the actor to `source,` with the given
     * alignment `factor`
     * @constructor 
     * @param source the #ClutterActor to use as the source of the   alignment, or %NULL
     * @param axis the axis to be used to compute the alignment
     * @param factor the alignment factor, between 0.0 and 1.0
     * @returns the newly created #ClutterAlignConstraint
     */
    constructor(source: Actor | null, axis: AlignAxis, factor: number) 
    /**
     * Creates a new constraint, aligning a #ClutterActor's position with
     * regards of the size of the actor to `source,` with the given
     * alignment `factor`
     * @constructor 
     * @param source the #ClutterActor to use as the source of the   alignment, or %NULL
     * @param axis the axis to be used to compute the alignment
     * @param factor the alignment factor, between 0.0 and 1.0
     * @returns the newly created #ClutterAlignConstraint
     */
    static new(source: Actor | null, axis: AlignAxis, factor: number): AlignConstraint
}

module Backend {

    // Signal callback interfaces

    /**
     * Signal callback interface for `font-changed`
     */
    interface FontChangedSignalCallback {
        ($obj: Backend): void
    }

    /**
     * Signal callback interface for `resolution-changed`
     */
    interface ResolutionChangedSignalCallback {
        ($obj: Backend): void
    }

    /**
     * Signal callback interface for `settings-changed`
     */
    interface SettingsChangedSignalCallback {
        ($obj: Backend): void
    }

}

interface Backend {

    // Owm methods of Clutter-11.Clutter.Backend

    /**
     * Retrieves the #CoglContext associated with the given clutter
     * `backend`. A #CoglContext is required when using some of the
     * experimental 2.0 Cogl API.
     * 
     * Since CoglContext is itself experimental API this API should
     * be considered experimental too.
     * 
     * This API is not yet supported on OSX because OSX still
     * uses the stub Cogl winsys and the Clutter backend doesn't
     * explicitly create a CoglContext.
     * @returns The #CoglContext associated with @backend.
     */
    get_cogl_context(): Cogl.Context
    /**
     * Returns the default seat
     * @returns the default seat
     */
    get_default_seat(): Seat
    /**
     * Retrieves the font options for `backend`.
     * @returns the font options of the #ClutterBackend.   The returned #cairo_font_options_t is owned by the backend and should   not be modified or freed
     */
    get_font_options(): any
    /**
     * Returns the input method used by Clutter
     * @returns the input method
     */
    get_input_method(): InputMethod
    /**
     * Gets the resolution for font handling on the screen.
     * 
     * The resolution is a scale factor between points specified in a
     * #PangoFontDescription and cairo units. The default value is 96.0,
     * meaning that a 10 point font will be 13 units
     * high (10 * 96. / 72. = 13.3).
     * 
     * Clutter will set the resolution using the current backend when
     * initializing; the resolution is also stored in the
     * #ClutterSettings:font-dpi property.
     * @returns the current resolution, or -1 if no resolution   has been set.
     */
    get_resolution(): number
    /**
     * Sets the new font options for `backend`. The #ClutterBackend will
     * copy the #cairo_font_options_t.
     * 
     * If `options` is %NULL, the first following call to
     * clutter_backend_get_font_options() will return the default font
     * options for `backend`.
     * 
     * This function is intended for actors creating a Pango layout
     * using the PangoCairo API.
     * @param options Cairo font options for the backend, or %NULL
     */
    set_font_options(options: any): void
    /**
     * Sets the input method to be used by Clutter
     * @param method the input method
     */
    set_input_method(method: InputMethod): void

    // Own signals of Clutter-11.Clutter.Backend

    connect(sigName: "font-changed", callback: Backend.FontChangedSignalCallback): number
    connect_after(sigName: "font-changed", callback: Backend.FontChangedSignalCallback): number
    emit(sigName: "font-changed", ...args: any[]): void
    connect(sigName: "resolution-changed", callback: Backend.ResolutionChangedSignalCallback): number
    connect_after(sigName: "resolution-changed", callback: Backend.ResolutionChangedSignalCallback): number
    emit(sigName: "resolution-changed", ...args: any[]): void
    connect(sigName: "settings-changed", callback: Backend.SettingsChangedSignalCallback): number
    connect_after(sigName: "settings-changed", callback: Backend.SettingsChangedSignalCallback): number
    emit(sigName: "settings-changed", ...args: any[]): void
}

/**
 * Backend abstraction
 * 
 * Clutter can be compiled against different backends. Each backend
 * has to implement a set of functions, in order to be used by Clutter.
 * 
 * #ClutterBackend is the base class abstracting the various implementation;
 * it provides a basic API to query the backend for generic information
 * and settings.
 * @class 
 */
class Backend {

    // Own properties of Clutter-11.Clutter.Backend

    static name: string
}

interface BinLayout {

    // Own properties of Clutter-11.Clutter.BinLayout

    /**
     * The default horizontal alignment policy for actors managed
     * by the #ClutterBinLayout
     */
    x_align: BinAlignment
    /**
     * The default vertical alignment policy for actors managed
     * by the #ClutterBinLayout
     */
    y_align: BinAlignment
}

/**
 * A simple layout manager
 * 
 * #ClutterBinLayout is a layout manager which implements the following
 * policy:
 * 
 *   - the preferred size is the maximum preferred size
 *   between all the children of the container using the
 *   layout;
 *   - each child is allocated in "layers", on on top
 *   of the other;
 *   - for each layer there are horizontal and vertical
 *   alignment policies.
 * 
 * The [bin-layout example](https://git.gnome.org/browse/clutter/tree/examples/bin-layout.c?h=clutter-1.18)
 * shows how to pack actors inside a #ClutterBinLayout.
 * @class 
 */
class BinLayout extends LayoutManager {

    // Own properties of Clutter-11.Clutter.BinLayout

    static name: string

    // Constructors of Clutter-11.Clutter.BinLayout

    /**
     * Creates a new #ClutterBinLayout layout manager
     * @constructor 
     * @param x_align the default alignment policy to be used on the   horizontal axis
     * @param y_align the default alignment policy to be used on the   vertical axis
     * @returns the newly created layout manager
     */
    constructor(x_align: BinAlignment, y_align: BinAlignment) 
    /**
     * Creates a new #ClutterBinLayout layout manager
     * @constructor 
     * @param x_align the default alignment policy to be used on the   horizontal axis
     * @param y_align the default alignment policy to be used on the   vertical axis
     * @returns the newly created layout manager
     */
    static new(x_align: BinAlignment, y_align: BinAlignment): BinLayout
}

interface BindConstraint {

    // Own properties of Clutter-11.Clutter.BindConstraint

    /**
     * The coordinate to be bound
     */
    coordinate: BindCoordinate
    /**
     * The offset, in pixels, to be applied to the binding
     */
    offset: number
    /**
     * The #ClutterActor used as the source for the binding.
     * 
     * The #ClutterActor must not be contained inside the actor associated
     * to the constraint.
     */
    source: Actor

    // Owm methods of Clutter-11.Clutter.BindConstraint

    /**
     * Retrieves the bound coordinate of the constraint
     * @returns the bound coordinate
     */
    get_coordinate(): BindCoordinate
    /**
     * Retrieves the offset set using clutter_bind_constraint_set_offset()
     * @returns the offset, in pixels
     */
    get_offset(): number
    /**
     * Retrieves the #ClutterActor set using clutter_bind_constraint_set_source()
     * @returns a pointer to the source actor
     */
    get_source(): Actor
    /**
     * Sets the coordinate to bind in the constraint
     * @param coordinate the coordinate to bind
     */
    set_coordinate(coordinate: BindCoordinate): void
    /**
     * Sets the offset to be applied to the constraint
     * @param offset the offset to apply, in pixels
     */
    set_offset(offset: number): void
    /**
     * Sets the source #ClutterActor for the constraint
     * @param source a #ClutterActor, or %NULL to unset the source
     */
    set_source(source: Actor | null): void
}

/**
 * A constraint binding the position or size of an actor
 * 
 * #ClutterBindConstraint is a [class`Constraint]` that binds the
 * position or the size of the [class`Actor]` to which it is applied
 * to the the position or the size of another [class`Actor]`, or
 * "source".
 * 
 * An offset can be applied to the constraint, to avoid overlapping. The offset
 * can also be animated. For instance, the following code will set up three
 * actors to be bound to the same origin:
 * 
 * ```c
 * // source
 * rect[0] = clutter_actor_new ();
 * clutter_actor_set_background_color (rect[0], &red_color);
 * clutter_actor_set_position (rect[0], x_pos, y_pos);
 * clutter_actor_set_size (rect[0], 100, 100);
 * 
 * // second rectangle
 * rect[1] = clutter_actor_new ();
 * clutter_actor_set_background_color (rect[1], &green_color);
 * clutter_actor_set_size (rect[1], 100, 100);
 * clutter_actor_set_opacity (rect[1], 0);
 * 
 * constraint = clutter_bind_constraint_new (rect[0], CLUTTER_BIND_X, 0.0);
 * clutter_actor_add_constraint_with_name (rect[1], "green-x", constraint);
 * constraint = clutter_bind_constraint_new (rect[0], CLUTTER_BIND_Y, 0.0);
 * clutter_actor_add_constraint_with_name (rect[1], "green-y", constraint);
 * 
 * // third rectangle
 * rect[2] = clutter_actor_new ();
 * clutter_actor_set_background_color (rect[2], &blue_color);
 * clutter_actor_set_size (rect[2], 100, 100);
 * clutter_actor_set_opacity (rect[2], 0);
 * 
 * constraint = clutter_bind_constraint_new (rect[0], CLUTTER_BIND_X, 0.0);
 * clutter_actor_add_constraint_with_name (rect[2], "blue-x", constraint);
 * constraint = clutter_bind_constraint_new (rect[0], CLUTTER_BIND_Y, 0.0);
 * clutter_actor_add_constraint_with_name (rect[2], "blue-y", constraint);
 * ```
 * 
 * The following code animates the second and third rectangles to "expand"
 * them horizontally from underneath the first rectangle:
 * 
 * ```c
 * clutter_actor_animate (rect[1], CLUTTER_EASE_OUT_CUBIC, 250,
 *                        "`constraints`.green-x.offset", 100.0,
 *                        "opacity", 255,
 *                        NULL);
 * clutter_actor_animate (rect[2], CLUTTER_EASE_OUT_CUBIC, 250,
 *                        "`constraints`.blue-x.offset", 200.0,
 *                        "opacity", 255,
 *                        NULL);
 * ```
 * @class 
 */
class BindConstraint extends Constraint {

    // Own properties of Clutter-11.Clutter.BindConstraint

    static name: string

    // Constructors of Clutter-11.Clutter.BindConstraint

    /**
     * Creates a new constraint, binding a #ClutterActor's position to
     * the given `coordinate` of the position of `source`
     * @constructor 
     * @param source the #ClutterActor to use as the source of   the binding, or %NULL
     * @param coordinate the coordinate to bind
     * @param offset the offset to apply to the binding, in pixels
     * @returns the newly created #ClutterBindConstraint
     */
    constructor(source: Actor | null, coordinate: BindCoordinate, offset: number) 
    /**
     * Creates a new constraint, binding a #ClutterActor's position to
     * the given `coordinate` of the position of `source`
     * @constructor 
     * @param source the #ClutterActor to use as the source of   the binding, or %NULL
     * @param coordinate the coordinate to bind
     * @param offset the offset to apply to the binding, in pixels
     * @returns the newly created #ClutterBindConstraint
     */
    static new(source: Actor | null, coordinate: BindCoordinate, offset: number): BindConstraint
}

interface BindingPool {

    // Own properties of Clutter-11.Clutter.BindingPool

    /**
     * The unique name of the #ClutterBindingPool.
     */
    readonly name: string | null

    // Owm methods of Clutter-11.Clutter.BindingPool

    /**
     * Activates the callback associated to the action that is
     * bound to the `key_val` and `modifiers` pair.
     * 
     * The callback has the following signature:
     * 
     * ```
     *   void (* callback) (GObject             *gobject,
     *                      const gchar         *action_name,
     *                      guint                key_val,
     *                      ClutterModifierType  modifiers,
     *                      gpointer             user_data);
     * ```
     * 
     * Where the #GObject instance is `gobject` and the user data
     * is the one passed when installing the action with
     * clutter_binding_pool_install_action().
     * 
     * If the action bound to the `key_val,` `modifiers` pair has been
     * blocked using clutter_binding_pool_block_action(), the callback
     * will not be invoked, and this function will return %FALSE.
     * @param key_val the key symbol
     * @param modifiers bitmask for the modifiers
     * @param gobject a #GObject
     * @returns %TRUE if an action was found and was activated
     */
    activate(key_val: number, modifiers: ModifierType, gobject: any): boolean
    /**
     * Blocks all the actions with name `action_name` inside `pool`.
     * @param action_name an action name
     */
    block_action(action_name: string | null): void
    /**
     * Retrieves the name of the action matching the given key symbol
     * and modifiers bitmask.
     * @param key_val a key symbol
     * @param modifiers a bitmask for the modifiers
     * @returns the name of the action, if found, or %NULL. The   returned string is owned by the binding pool and should never   be modified or freed
     */
    find_action(key_val: number, modifiers: ModifierType): string | null
    /**
     * Installs a new action inside a #ClutterBindingPool. The action
     * is bound to `key_val` and `modifiers`.
     * 
     * The same action name can be used for multiple `key_val,` `modifiers`
     * pairs.
     * 
     * When an action has been activated using clutter_binding_pool_activate()
     * the passed `callback` will be invoked (with `data)`.
     * 
     * Actions can be blocked with clutter_binding_pool_block_action()
     * and then unblocked using clutter_binding_pool_unblock_action().
     * @param action_name the name of the action
     * @param key_val key symbol
     * @param modifiers bitmask of modifiers
     * @param callback function to be called   when the action is activated
     */
    install_action(action_name: string | null, key_val: number, modifiers: ModifierType, callback: BindingActionFunc): void
    /**
     * A #GClosure variant of clutter_binding_pool_install_action().
     * 
     * Installs a new action inside a #ClutterBindingPool. The action
     * is bound to `key_val` and `modifiers`.
     * 
     * The same action name can be used for multiple `key_val,` `modifiers`
     * pairs.
     * 
     * When an action has been activated using clutter_binding_pool_activate()
     * the passed `closure` will be invoked.
     * 
     * Actions can be blocked with clutter_binding_pool_block_action()
     * and then unblocked using clutter_binding_pool_unblock_action().
     * @param action_name the name of the action
     * @param key_val key symbol
     * @param modifiers bitmask of modifiers
     * @param closure a #GClosure
     */
    install_closure(action_name: string | null, key_val: number, modifiers: ModifierType, closure: GObject.TClosure): void
    /**
     * Allows overriding the action for `key_val` and `modifiers` inside a
     * #ClutterBindingPool. See clutter_binding_pool_install_action().
     * 
     * When an action has been activated using clutter_binding_pool_activate()
     * the passed `callback` will be invoked (with `data)`.
     * 
     * Actions can be blocked with clutter_binding_pool_block_action()
     * and then unblocked using clutter_binding_pool_unblock_action().
     * @param key_val key symbol
     * @param modifiers bitmask of modifiers
     * @param callback function to be called when the action is activated
     */
    override_action(key_val: number, modifiers: ModifierType, callback: any): void
    /**
     * A #GClosure variant of clutter_binding_pool_override_action().
     * 
     * Allows overriding the action for `key_val` and `modifiers` inside a
     * #ClutterBindingPool. See clutter_binding_pool_install_closure().
     * 
     * When an action has been activated using clutter_binding_pool_activate()
     * the passed `callback` will be invoked (with `data)`.
     * 
     * Actions can be blocked with clutter_binding_pool_block_action()
     * and then unblocked using clutter_binding_pool_unblock_action().
     * @param key_val key symbol
     * @param modifiers bitmask of modifiers
     * @param closure a #GClosure
     */
    override_closure(key_val: number, modifiers: ModifierType, closure: GObject.TClosure): void
    /**
     * Removes the action matching the given `key_val,` `modifiers` pair,
     * if any exists.
     * @param key_val a key symbol
     * @param modifiers a bitmask for the modifiers
     */
    remove_action(key_val: number, modifiers: ModifierType): void
    /**
     * Unblockes all the actions with name `action_name` inside `pool`.
     * 
     * Unblocking an action does not cause the callback bound to it to
     * be invoked in case clutter_binding_pool_activate() was called on
     * an action previously blocked with clutter_binding_pool_block_action().
     * @param action_name an action name
     */
    unblock_action(action_name: string | null): void
}

/**
 * Pool for key bindings
 * 
 * #ClutterBindingPool is a data structure holding a set of key bindings.
 * Each key binding associates a key symbol (eventually with modifiers)
 * to an action. A callback function is associated to each action.
 * 
 * For a given key symbol and modifier mask combination there can be only one
 * action; for each action there can be only one callback. There can be
 * multiple actions with the same name, and the same callback can be used
 * to handle multiple key bindings.
 * 
 * Actors requiring key bindings should create a new #ClutterBindingPool
 * inside their class initialization function and then install actions
 * like this:
 * 
 * ```c
 * static void
 * foo_class_init (FooClass *klass)
 * {
 *   ClutterBindingPool *binding_pool;
 * 
 *   binding_pool = clutter_binding_pool_get_for_class (klass);
 * 
 *   clutter_binding_pool_install_action (binding_pool, "move-up",
 *                                        CLUTTER_Up, 0,
 *                                        G_CALLBACK (foo_action_move_up),
 *                                        NULL, NULL);
 *   clutter_binding_pool_install_action (binding_pool, "move-up",
 *                                        CLUTTER_KP_Up, 0,
 *                                        G_CALLBACK (foo_action_move_up),
 *                                        NULL, NULL);
 * }
 * ```
 * 
 * The callback has a signature of:
 * 
 * ```c
 *    gboolean (* callback) (GObject             *instance,
 *                           const gchar         *action_name,
 *                           guint                key_val,
 *                           ClutterModifierType  modifiers,
 *                           gpointer             user_data);
 * ```
 * 
 * The actor should then override the [signal`Actor:`:key-press-event] and
 * use [method`BindingPool`.activate] to match a [struct`KeyEvent]` structure
 * to one of the actions:
 * 
 * ```c
 *   ClutterBindingPool *pool;
 * 
 *   // retrieve the binding pool for the type of the actor
 *   pool = clutter_binding_pool_find (G_OBJECT_TYPE_NAME (actor));
 * 
 *   // activate any callback matching the key symbol and modifiers
 *   // mask of the key event. the returned value can be directly
 *   // used to signal that the actor has handled the event.
 *   return clutter_binding_pool_activate (pool,
 *                                         key_event->keyval,
 *                                         key_event->modifier_state,
 *                                         G_OBJECT (actor));
 * ```
 * 
 * The [method`BindingPool`.activate] function will return %FALSE if
 * no action for the given key binding was found, if the action was
 * blocked (using [method`BindingPool`.block_action]) or if the
 * key binding handler returned %FALSE.
 * @class 
 */
class BindingPool {

    // Own properties of Clutter-11.Clutter.BindingPool

    static name: string

    // Constructors of Clutter-11.Clutter.BindingPool

    /**
     * Creates a new #ClutterBindingPool that can be used to store
     * key bindings for an actor. The `name` must be a unique identifier
     * for the binding pool, so that clutter_binding_pool_find() will
     * be able to return the correct binding pool.
     * @constructor 
     * @param name the name of the binding pool
     * @returns the newly created binding pool with the given   name. Use g_object_unref() when done.
     */
    constructor(name: string | null) 
    /**
     * Creates a new #ClutterBindingPool that can be used to store
     * key bindings for an actor. The `name` must be a unique identifier
     * for the binding pool, so that clutter_binding_pool_find() will
     * be able to return the correct binding pool.
     * @constructor 
     * @param name the name of the binding pool
     * @returns the newly created binding pool with the given   name. Use g_object_unref() when done.
     */
    static new(name: string | null): BindingPool
    /**
     * Finds the #ClutterBindingPool with `name`.
     * @param name the name of the binding pool to find
     * @returns a pointer to the #ClutterBindingPool, or %NULL
     */
    static find(name: string | null): BindingPool
    /**
     * Retrieves the #ClutterBindingPool for the given #GObject class
     * and, eventually, creates it. This function is a wrapper around
     * clutter_binding_pool_new() and uses the class type name as the
     * unique name for the binding pool.
     * 
     * Calling this function multiple times will return the same
     * #ClutterBindingPool.
     * 
     * A binding pool for a class can also be retrieved using
     * clutter_binding_pool_find() with the class type name:
     * 
     * ```
     *   pool = clutter_binding_pool_find (G_OBJECT_TYPE_NAME (instance));
     * ```
     * @param klass a #GObjectClass pointer
     * @returns the binding pool for the given class.   The returned #ClutterBindingPool is owned by Clutter and should not   be freed directly
     */
    static get_for_class(klass: any | null): BindingPool
}

interface BlitNode {

    // Owm methods of Clutter-11.Clutter.BlitNode

    /**
     * Adds a new blit rectangle to the stack of rectangles. All the
     * constraints of [func`Cogl`.blit_framebuffer] apply here.
     * @param src_x Source x position
     * @param src_y Source y position
     * @param dst_x Destination x position
     * @param dst_y Destination y position
     * @param width Width of region to copy
     * @param height Height of region to copy
     */
    add_blit_rectangle(src_x: number, src_y: number, dst_x: number, dst_y: number, width: number, height: number): void
}

class BlitNode extends PaintNode {

    // Own properties of Clutter-11.Clutter.BlitNode

    static name: string

    // Constructors of Clutter-11.Clutter.BlitNode

    /**
     * Creates a new #ClutterBlitNode that blits `src` into the current
     * draw framebuffer.
     * 
     * You must only add rectangles using [method`BlitNode`.add_blit_rectangle].
     * @constructor 
     * @param src the source #CoglFramebuffer
     * @returns the newly created #ClutterBlitNode.   Use clutter_paint_node_unref() when done.
     */
    constructor(src: Cogl.Framebuffer) 
    /**
     * Creates a new #ClutterBlitNode that blits `src` into the current
     * draw framebuffer.
     * 
     * You must only add rectangles using [method`BlitNode`.add_blit_rectangle].
     * @constructor 
     * @param src the source #CoglFramebuffer
     * @returns the newly created #ClutterBlitNode.   Use clutter_paint_node_unref() when done.
     */
    static new(src: Cogl.Framebuffer): BlitNode
}

interface BlurEffect {
}

/**
 * A blur effect
 * 
 * #ClutterBlurEffect is a sub-class of #ClutterEffect that allows blurring a
 * actor and its contents.
 * @class 
 */
class BlurEffect extends OffscreenEffect {

    // Own properties of Clutter-11.Clutter.BlurEffect

    static name: string

    // Constructors of Clutter-11.Clutter.BlurEffect

    /**
     * Creates a new #ClutterBlurEffect to be used with
     * clutter_actor_add_effect()
     * @constructor 
     * @returns the newly created #ClutterBlurEffect or %NULL
     */
    constructor() 
    /**
     * Creates a new #ClutterBlurEffect to be used with
     * clutter_actor_add_effect()
     * @constructor 
     * @returns the newly created #ClutterBlurEffect or %NULL
     */
    static new(): BlurEffect
}

interface BlurNode {
}

class BlurNode extends LayerNode {

    // Own properties of Clutter-11.Clutter.BlurNode

    static name: string

    // Constructors of Clutter-11.Clutter.BlurNode

    /**
     * `width` width of the blur layer
     * Creates a new #ClutterBlurNode.
     * 
     * Children of this node will be painted inside a separate framebuffer,
     * which will be blurred and painted on the current draw framebuffer.
     * @constructor 
     * @param width 
     * @param height height of the blur layer
     * @param sigma sigma value of the blur
     * @returns the newly created #ClutterBlurNode.   Use clutter_paint_node_unref() when done.
     */
    constructor(width: number, height: number, sigma: number) 
    /**
     * `width` width of the blur layer
     * Creates a new #ClutterBlurNode.
     * 
     * Children of this node will be painted inside a separate framebuffer,
     * which will be blurred and painted on the current draw framebuffer.
     * @constructor 
     * @param width 
     * @param height height of the blur layer
     * @param sigma sigma value of the blur
     * @returns the newly created #ClutterBlurNode.   Use clutter_paint_node_unref() when done.
     */
    static new(width: number, height: number, sigma: number): BlurNode

    // Overloads of new

    static new(projection: any, viewport: any, width: number, height: number, opacity: number): LayerNode
}

interface BoxLayout {

    // Own properties of Clutter-11.Clutter.BoxLayout

    /**
     * Whether the #ClutterBoxLayout should arrange its children
     * homogeneously, i.e. all children get the same size
     */
    homogeneous: boolean
    /**
     * The orientation of the #ClutterBoxLayout, either horizontal
     * or vertical
     */
    orientation: Orientation
    pack_start: boolean
    /**
     * The spacing between children of the #ClutterBoxLayout, in pixels
     */
    spacing: number

    // Owm methods of Clutter-11.Clutter.BoxLayout

    /**
     * Retrieves if the children sizes are allocated homogeneously.
     * @returns %TRUE if the #ClutterBoxLayout is arranging its children   homogeneously, and %FALSE otherwise
     */
    get_homogeneous(): boolean
    /**
     * Retrieves the orientation of the `layout`.
     * @returns the orientation of the layout
     */
    get_orientation(): Orientation
    get_pack_start(): boolean
    /**
     * Retrieves the spacing set using clutter_box_layout_set_spacing()
     * @returns the spacing between children of the #ClutterBoxLayout
     */
    get_spacing(): number
    /**
     * Sets whether the size of `layout` children should be
     * homogeneous
     * @param homogeneous %TRUE if the layout should be homogeneous
     */
    set_homogeneous(homogeneous: boolean): void
    /**
     * Sets the orientation of the #ClutterBoxLayout layout manager.
     * @param orientation the orientation of the #ClutterBoxLayout
     */
    set_orientation(orientation: Orientation): void
    set_pack_start(pack_start: boolean): void
    /**
     * Sets the spacing between children of `layout`
     * @param spacing the spacing between children of the layout, in pixels
     */
    set_spacing(spacing: number): void
}

/**
 * A layout manager arranging children on a single line
 * 
 * The #ClutterBoxLayout is a #ClutterLayoutManager implementing the
 * following layout policy:
 * 
 *  - all children are arranged on a single line
 *  - the axis used is controlled by the #ClutterBoxLayout:orientation property
 *  - each child will be allocated to its natural size or, if #ClutterActor:x-expand or
 *  #ClutterActor:y-expand are set, the available size
 *  - honours the #ClutterActor's #ClutterActor:x-align and #ClutterActor:y-align properties
 *  to fill the available size
 *  - if the #ClutterBoxLayout:homogeneous boolean property is set, then all widgets will
 *  get the same size, ignoring expand settings and the preferred sizes
 * 
 * It is possible to control the spacing between children of a
 * #ClutterBoxLayout by using clutter_box_layout_set_spacing().
 * @class 
 */
class BoxLayout extends LayoutManager {

    // Own properties of Clutter-11.Clutter.BoxLayout

    static name: string

    // Constructors of Clutter-11.Clutter.BoxLayout

    /**
     * Creates a new #ClutterBoxLayout layout manager
     * @constructor 
     * @returns the newly created #ClutterBoxLayout
     */
    constructor() 
    /**
     * Creates a new #ClutterBoxLayout layout manager
     * @constructor 
     * @returns the newly created #ClutterBoxLayout
     */
    static new(): BoxLayout
}

interface BrightnessContrastEffect {

    // Own properties of Clutter-11.Clutter.BrightnessContrastEffect

    /**
     * The brightness change to apply to the effect.
     * 
     * This property uses a #ClutterColor to represent the changes to each
     * color channel. The range is [ 0, 255 ], with 127 as the value used
     * to indicate no change; values smaller than 127 indicate a decrease
     * in brightness, and values larger than 127 indicate an increase in
     * brightness.
     */
    brightness: Color
    /**
     * The contrast change to apply to the effect.
     * 
     * This property uses a #ClutterColor to represent the changes to each
     * color channel. The range is [ 0, 255 ], with 127 as the value used
     * to indicate no change; values smaller than 127 indicate a decrease
     * in contrast, and values larger than 127 indicate an increase in
     * contrast.
     */
    contrast: Color

    // Owm methods of Clutter-11.Clutter.BrightnessContrastEffect

    /**
     * Retrieves the change in brightness used by `effect`.
     */
    get_brightness(): [ /* red */ number, /* green */ number, /* blue */ number ]
    /**
     * Retrieves the contrast value used by `effect`.
     */
    get_contrast(): [ /* red */ number, /* green */ number, /* blue */ number ]
    /**
     * The range of `brightness` is [-1.0, 1.0], where 0.0 designates no change;
     * a value below 0.0 indicates a decrease in brightness; and a value
     * above 0.0 indicates an increase of brightness.
     * @param brightness the brightness change for all three components (r, g, b)
     */
    set_brightness(brightness: number): void
    /**
     * The range for each component is [-1.0, 1.0] where 0.0 designates no change,
     * values below 0.0 mean a decrease in brightness, and values above indicate
     * an increase.
     * @param red red component of the change in brightness
     * @param green green component of the change in brightness
     * @param blue blue component of the change in brightness
     */
    set_brightness_full(red: number, green: number, blue: number): void
    /**
     * The range for `contrast` is [-1.0, 1.0], where 0.0 designates no change;
     * a value below 0.0 indicates a decrease in contrast; and a value above
     * 0.0 indicates an increase.
     * @param contrast contrast change for all three channels
     */
    set_contrast(contrast: number): void
    /**
     * The range for each component is [-1.0, 1.0] where 0.0 designates no change,
     * values below 0.0 mean a decrease in contrast, and values above indicate
     * an increase.
     * @param red red component of the change in contrast
     * @param green green component of the change in contrast
     * @param blue blue component of the change in contrast
     */
    set_contrast_full(red: number, green: number, blue: number): void
}

/**
 * Increase/decrease brightness and/or contrast of actor.
 * 
 * #ClutterBrightnessContrastEffect is a sub-class of #ClutterEffect that
 * changes the overall brightness of a #ClutterActor.
 * @class 
 */
class BrightnessContrastEffect extends OffscreenEffect {

    // Own properties of Clutter-11.Clutter.BrightnessContrastEffect

    static name: string

    // Constructors of Clutter-11.Clutter.BrightnessContrastEffect

    /**
     * Creates a new #ClutterBrightnessContrastEffect to be used with
     * clutter_actor_add_effect()
     * @constructor 
     * @returns the newly created   #ClutterBrightnessContrastEffect or %NULL.  Use g_object_unref() when   done.
     */
    constructor() 
    /**
     * Creates a new #ClutterBrightnessContrastEffect to be used with
     * clutter_actor_add_effect()
     * @constructor 
     * @returns the newly created   #ClutterBrightnessContrastEffect or %NULL.  Use g_object_unref() when   done.
     */
    static new(): BrightnessContrastEffect
}

module Canvas {

    // Signal callback interfaces

    /**
     * Signal callback interface for `draw`
     */
    interface DrawSignalCallback {
        ($obj: Canvas, cr: any, width: number, height: number): boolean
    }

}

interface Canvas extends Content {

    // Own properties of Clutter-11.Clutter.Canvas

    /**
     * The height of the canvas.
     */
    height: number
    /**
     * The height of the canvas.
     */
    scale_factor: number
    /**
     * The width of the canvas.
     */
    width: number

    // Owm methods of Clutter-11.Clutter.Canvas

    /**
     * Gets the scale factor of the `canvas`.
     * @returns the current @canvas scale factor or -1 if invalid
     */
    get_scale_factor(): number
    /**
     * Sets the scaling factor of the `canvas,` and invalidates the content.
     * 
     * This function will cause the `canvas` to be invalidated only
     * if the scale factor of the canvas surface has changed.
     * @param scale the integer scaling factor of the canvas
     */
    set_scale_factor(scale: number): void
    /**
     * Sets the size of the `canvas,` and invalidates the content.
     * 
     * This function will cause the `canvas` to be invalidated only
     * if the size of the canvas surface has changed.
     * 
     * If you want to invalidate the contents of the `canvas` when setting
     * the size, you can use the return value of the function to conditionally
     * call clutter_content_invalidate():
     * 
     * ```c
     *   if (!clutter_canvas_set_size (canvas, width, height))
     *     clutter_content_invalidate (CLUTTER_CONTENT (canvas));
     * ```
     * @param width the width of the canvas, in pixels
     * @param height the height of the canvas, in pixels
     * @returns this function returns %TRUE if the size change   caused a content invalidation, and %FALSE otherwise
     */
    set_size(width: number, height: number): boolean

    // Own virtual methods of Clutter-11.Clutter.Canvas

    vfunc_draw(cr: any, width: number, height: number): boolean

    // Own signals of Clutter-11.Clutter.Canvas

    connect(sigName: "draw", callback: Canvas.DrawSignalCallback): number
    connect_after(sigName: "draw", callback: Canvas.DrawSignalCallback): number
    emit(sigName: "draw", cr: any, width: number, height: number, ...args: any[]): void
}

/**
 * Content for 2D painting
 * 
 * The #ClutterCanvas class is a #ClutterContent implementation that allows
 * drawing using the Cairo API on a 2D surface.
 * 
 * In order to draw on a #ClutterCanvas, you should connect a handler to the
 * #ClutterCanvas::draw signal; the signal will receive a #cairo_t context
 * that can be used to draw. #ClutterCanvas will emit the #ClutterCanvas::draw
 * signal when invalidated using clutter_content_invalidate().
 * 
 * See [canvas.c](https://git.gnome.org/browse/clutter/tree/examples/canvas.c?h=clutter-1.18)
 * for an example of how to use #ClutterCanvas..
 * @class 
 */
class Canvas {

    // Own properties of Clutter-11.Clutter.Canvas

    static name: string

    // Constructors of Clutter-11.Clutter.Canvas

    /**
     * Creates a new instance of #ClutterCanvas.
     * 
     * You should call clutter_canvas_set_size() to set the size of the canvas.
     * 
     * You should call clutter_content_invalidate() every time you wish to
     * draw the contents of the canvas.
     * @returns The newly allocated instance of   #ClutterCanvas. Use g_object_unref() when done.
     */
    static new(): Content
}

interface ChildMeta {

    // Own fields of Clutter-11.Clutter.ChildMeta

    container: Container
    actor: Actor

    // Owm methods of Clutter-11.Clutter.ChildMeta

    /**
     * Retrieves the actor wrapped by `data`
     * @returns a #ClutterActor
     */
    get_actor(): Actor
    /**
     * Retrieves the container using `data`
     * @returns a #ClutterContainer
     */
    get_container(): Container
}

/**
 * Base interface for container specific state for child actors.
 * 
 * A child data is meant to be used when you need to keep track
 * of information about each individual child added to a container.
 * 
 * In order to use it you should create your own subclass of
 * #ClutterChildMeta and set the #ClutterContainerIface child_meta_type
 * interface member to your subclass type, like:
 * 
 * ```c
 * static void
 * my_container_iface_init (ClutterContainerIface *iface)
 * {
 *   // set the rest of the #ClutterContainer vtable
 * 
 *   container_iface->child_meta_type  = MY_TYPE_CHILD_META;
 * }
 * ```
 * 
 * This will automatically create a #ClutterChildMeta of type
 * `MY_TYPE_CHILD_META` for every actor that is added to the container.
 * 
 * The child data for an actor can be retrieved using the
 * clutter_container_get_child_meta() function.
 * 
 * The properties of the data and your subclass can be manipulated with
 * clutter_container_child_set() and clutter_container_child_get() which
 * act like g_object_set() and g_object_get().
 * 
 * You can provide hooks for your own storage as well as control the
 * instantiation by overriding the #ClutterContainerIface virtual functions
 * #ClutterContainerIface.create_child_meta(), #ClutterContainerIface.destroy_child_meta(),
 * and #ClutterContainerIface.get_child_meta().
 * @class 
 */
class ChildMeta {

    // Own properties of Clutter-11.Clutter.ChildMeta

    static name: string
}

module ClickAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `clicked`
     */
    interface ClickedSignalCallback {
        ($obj: ClickAction, actor: Actor): void
    }

    /**
     * Signal callback interface for `long-press`
     */
    interface LongPressSignalCallback {
        ($obj: ClickAction, actor: Actor, state: LongPressState): boolean
    }

}

interface ClickAction {

    // Own properties of Clutter-11.Clutter.ClickAction

    /**
     * Whether the clickable actor has the pointer grabbed
     */
    readonly held: boolean
    /**
     * The minimum duration of a press for it to be recognized as a long
     * press gesture, in milliseconds.
     * 
     * A value of -1 will make the #ClutterClickAction use the value of
     * the [property`Settings:`long-press-duration] property.
     */
    long_press_duration: number
    /**
     * The maximum allowed distance that can be covered (on both axes) before
     * a long press gesture is cancelled, in pixels.
     * 
     * A value of -1 will make the #ClutterClickAction use the value of
     * the [property`Settings:`dnd-drag-threshold] property.
     */
    long_press_threshold: number
    /**
     * Whether the clickable actor should be in "pressed" state
     */
    readonly pressed: boolean

    // Own fields of Clutter-11.Clutter.ClickAction

    parent_instance: Action & ActorMeta & any & any

    // Owm methods of Clutter-11.Clutter.ClickAction

    /**
     * Retrieves the button that was pressed.
     * @returns the button value
     */
    get_button(): number
    /**
     * Retrieves the screen coordinates of the button press.
     */
    get_coords(): [ /* press_x */ number, /* press_y */ number ]
    /**
     * Retrieves the modifier state of the click action.
     * @returns the modifier state parameter, or 0
     */
    get_state(): ModifierType
    /**
     * Emulates a release of the pointer button, which ungrabs the pointer
     * and unsets the [property`ClickAction:`pressed] state.
     * 
     * This function will also cancel the long press gesture if one was
     * initiated.
     * 
     * This function is useful to break a grab, for instance after a certain
     * amount of time has passed.
     */
    release(): void

    // Own virtual methods of Clutter-11.Clutter.ClickAction

    vfunc_clicked(actor: Actor): void
    vfunc_long_press(actor: Actor, state: LongPressState): boolean

    // Own signals of Clutter-11.Clutter.ClickAction

    connect(sigName: "clicked", callback: ClickAction.ClickedSignalCallback): number
    connect_after(sigName: "clicked", callback: ClickAction.ClickedSignalCallback): number
    emit(sigName: "clicked", actor: Actor, ...args: any[]): void
    connect(sigName: "long-press", callback: ClickAction.LongPressSignalCallback): number
    connect_after(sigName: "long-press", callback: ClickAction.LongPressSignalCallback): number
    emit(sigName: "long-press", actor: Actor, state: LongPressState, ...args: any[]): void
}

/**
 * Action for clickable actors
 * 
 * #ClutterClickAction is a sub-class of [class`Action]` that implements
 * the logic for clickable actors, by using the low level events of
 * [class`Actor]`, such as [signal`Actor:`:button-press-event] and
 * [signal`Actor:`:button-release-event], to synthesize the high level
 * [signal`ClickAction:`:clicked] signal.
 * 
 * To use #ClutterClickAction you just need to apply it to a [class`Actor]`
 * using [method`Actor`.add_action] and connect to the
 * [signal`ClickAction:`:clicked] signal:
 * 
 * ```c
 *   ClutterAction *action = clutter_click_action_new ();
 * 
 *   clutter_actor_add_action (actor, action);
 * 
 *   g_signal_connect (action, "clicked", G_CALLBACK (on_clicked), NULL);
 * ```
 * 
 * #ClutterClickAction also supports long press gestures: a long press is
 * activated if the pointer remains pressed within a certain threshold (as
 * defined by the [property`ClickAction:`long-press-threshold] property) for a
 * minimum amount of time (as the defined by the
 * [property`ClickAction:`long-press-duration] property).
 * The [signal`ClickAction:`:long-press] signal is emitted multiple times,
 * using different [enum`LongPressState]` values; to handle long presses
 * you should connect to the [signal`ClickAction:`:long-press] signal and
 * handle the different states:
 * 
 * ```c
 *   static gboolean
 *   on_long_press (ClutterClickAction    *action,
 *                  ClutterActor          *actor,
 *                  ClutterLongPressState  state)
 *   {
 *     switch (state)
 *       {
 *       case CLUTTER_LONG_PRESS_QUERY:
 *         // return TRUE if the actor should support long press
 *         // gestures, and FALSE otherwise; this state will be
 *         // emitted on button presses
 *         return TRUE;
 * 
 *       case CLUTTER_LONG_PRESS_ACTIVATE:
 *         // this state is emitted if the minimum duration has
 *         // been reached without the gesture being cancelled.
 *         // the return value is not used
 *         return TRUE;
 * 
 *       case CLUTTER_LONG_PRESS_CANCEL:
 *         // this state is emitted if the long press was cancelled;
 *         // for instance, the pointer went outside the actor or the
 *         // allowed threshold, or the button was released before
 *         // the minimum duration was reached. the return value is
 *         // not used
 *         return FALSE;
 *       }
 *   }
 * ```
 * @class 
 */
class ClickAction extends Action {

    // Own properties of Clutter-11.Clutter.ClickAction

    static name: string

    // Constructors of Clutter-11.Clutter.ClickAction

    /**
     * Creates a new #ClutterClickAction instance
     * @constructor 
     * @returns the newly created #ClutterClickAction
     */
    constructor() 
    /**
     * Creates a new #ClutterClickAction instance
     * @constructor 
     * @returns the newly created #ClutterClickAction
     */
    static new(): ClickAction
}

interface ClipNode {
}

class ClipNode extends PaintNode {

    // Own properties of Clutter-11.Clutter.ClipNode

    static name: string

    // Constructors of Clutter-11.Clutter.ClipNode

    /**
     * Creates a new #ClutterPaintNode that will clip its child
     * nodes to the 2D regions added to it.
     * @constructor 
     * @returns the newly created #ClutterPaintNode.   Use clutter_paint_node_unref() when done.
     */
    constructor() 
    /**
     * Creates a new #ClutterPaintNode that will clip its child
     * nodes to the 2D regions added to it.
     * @constructor 
     * @returns the newly created #ClutterPaintNode.   Use clutter_paint_node_unref() when done.
     */
    static new(): ClipNode
}

interface Clone extends Atk.ImplementorIface, Animatable, Container, Scriptable {

    // Own properties of Clutter-11.Clutter.Clone

    /**
     * This property specifies the source actor being cloned.
     */
    source: Actor

    // Owm methods of Clutter-11.Clutter.Clone

    /**
     * Retrieves the source #ClutterActor being cloned by `self`.
     * @returns the actor source for the clone
     */
    get_source(): Actor
    /**
     * Sets `source` as the source actor to be cloned by `self`.
     * @param source a #ClutterActor, or %NULL
     */
    set_source(source: Actor | null): void
}

/**
 * An actor that displays a clone of a source actor
 * 
 * #ClutterClone is a #ClutterActor which draws with the paint
 * function of another actor, scaled to fit its own allocation.
 * 
 * #ClutterClone can be used to efficiently clone any other actor.
 * 
 * Unlike clutter_texture_new_from_actor(), #ClutterClone does not require
 * the presence of support for FBOs in the underlying GL or GLES
 * implementation.
 * @class 
 */
class Clone extends Actor {

    // Own properties of Clutter-11.Clutter.Clone

    static name: string

    // Constructors of Clutter-11.Clutter.Clone

    /**
     * Creates a new #ClutterActor which clones `source/`
     * @constructor 
     * @param source a #ClutterActor, or %NULL
     * @returns the newly created #ClutterClone
     */
    constructor(source: Actor) 
    /**
     * Creates a new #ClutterActor which clones `source/`
     * @constructor 
     * @param source a #ClutterActor, or %NULL
     * @returns the newly created #ClutterClone
     */
    static new(source: Actor): Clone

    // Overloads of new

    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     * @returns the newly created #ClutterActor
     */
    static new(): Actor
}

interface ColorNode {
}

class ColorNode extends PipelineNode {

    // Own properties of Clutter-11.Clutter.ColorNode

    static name: string

    // Constructors of Clutter-11.Clutter.ColorNode

    /**
     * Creates a new #ClutterPaintNode that will paint a solid color
     * fill using `color`.
     * @constructor 
     * @param color the color to paint, or %NULL
     * @returns the newly created #ClutterPaintNode. Use   clutter_paint_node_unref() when done
     */
    constructor(color: Color | null) 
    /**
     * Creates a new #ClutterPaintNode that will paint a solid color
     * fill using `color`.
     * @constructor 
     * @param color the color to paint, or %NULL
     * @returns the newly created #ClutterPaintNode. Use   clutter_paint_node_unref() when done
     */
    static new(color: Color | null): ColorNode

    // Overloads of new

    /**
     * Creates a new #ClutterPaintNode that will use the `pipeline` to
     * paint its contents.
     * 
     * This function will acquire a reference on the passed `pipeline,`
     * so it is safe to call cogl_object_unref() when it returns.
     * @constructor 
     * @param pipeline a Cogl pipeline state object, or %NULL
     * @returns the newly created #ClutterPaintNode.   Use clutter_paint_node_unref() when done.
     */
    static new(pipeline: Cogl.Pipeline | null): PipelineNode
}

interface ColorState {

    // Own properties of Clutter-11.Clutter.ColorState

    /**
     * Colorspace information of the each color state,
     * defaults to sRGB colorspace
     */
    readonly colorspace: Colorspace

    // Owm methods of Clutter-11.Clutter.ColorState

    get_colorspace(): Colorspace
}

/**
 * Color state of each ClutterActor
 * 
 * The #ClutterColorState class contains the colorspace of each color
 * states (e.g. sRGB colorspace).
 * 
 * Each [class`Actor]` would own such an object.
 * 
 * A single #ClutterColorState object can be shared by multiple [class`Actor]`
 * or maybe a separate color state for each [class`Actor]` (depending on whether
 * #ClutterColorState would be statefull or stateless).
 * 
 * #ClutterColorState, if not set during construction, it will default to sRGB
 * color state
 * 
 * The #ClutterColorState would have API to get the colorspace, whether the
 * actor content is in pq or not, and things like that
 * @class 
 */
class ColorState {

    // Own properties of Clutter-11.Clutter.ColorState

    static name: string

    // Constructors of Clutter-11.Clutter.ColorState

    /**
     * Create a new ClutterColorState object.
     * @constructor 
     * @param colorspace 
     * @returns A new ClutterColorState object.
     */
    constructor(colorspace: Colorspace) 
    /**
     * Create a new ClutterColorState object.
     * @constructor 
     * @param colorspace 
     * @returns A new ClutterColorState object.
     */
    static new(colorspace: Colorspace): ColorState
}

interface ColorizeEffect {

    // Own properties of Clutter-11.Clutter.ColorizeEffect

    /**
     * The tint to apply to the actor
     */
    tint: Color

    // Owm methods of Clutter-11.Clutter.ColorizeEffect

    /**
     * Retrieves the tint used by `effect`
     */
    get_tint(): /* tint */ Color
    /**
     * Sets the tint to be used when colorizing
     * @param tint the color to be used
     */
    set_tint(tint: Color): void
}

/**
 * A colorization effect
 * 
 * #ClutterColorizeEffect is a sub-class of #ClutterEffect that
 * colorizes an actor with the given tint.
 * @class 
 */
class ColorizeEffect extends OffscreenEffect {

    // Own properties of Clutter-11.Clutter.ColorizeEffect

    static name: string

    // Constructors of Clutter-11.Clutter.ColorizeEffect

    /**
     * Creates a new #ClutterColorizeEffect to be used with
     * clutter_actor_add_effect()
     * @constructor 
     * @param tint the color to be used
     * @returns the newly created #ClutterColorizeEffect or %NULL
     */
    constructor(tint: Color) 
    /**
     * Creates a new #ClutterColorizeEffect to be used with
     * clutter_actor_add_effect()
     * @constructor 
     * @param tint the color to be used
     * @returns the newly created #ClutterColorizeEffect or %NULL
     */
    static new(tint: Color): ColorizeEffect
}

interface Constraint {

    // Owm methods of Clutter-11.Clutter.Constraint

    /**
     * Asks the `constraint` to update the size request of a #ClutterActor.
     * @param actor a #ClutterActor
     * @param direction a #ClutterOrientation
     * @param for_size the size in the opposite direction
     * @param minimum_size the minimum size to modify
     * @param natural_size the natural size to modify
     */
    update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): [ /* minimum_size */ number, /* natural_size */ number ]

    // Own virtual methods of Clutter-11.Clutter.Constraint

    vfunc_update_allocation(actor: Actor, allocation: ActorBox): void
    /**
     * Asks the `constraint` to update the size request of a #ClutterActor.
     * @virtual 
     * @param actor a #ClutterActor
     * @param direction a #ClutterOrientation
     * @param for_size the size in the opposite direction
     * @param minimum_size the minimum size to modify
     * @param natural_size the natural size to modify
     */
    vfunc_update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): [ /* minimum_size */ number, /* natural_size */ number ]
}

/**
 * Abstract class for constraints on position or size
 * 
 * #ClutterConstraint is a base abstract class for modifiers of a #ClutterActor
 * position or size.
 * 
 * A #ClutterConstraint sub-class should contain the logic for modifying
 * the position or size of the #ClutterActor to which it is applied, by
 * updating the actor's allocation. Each #ClutterConstraint can change the
 * allocation of the actor to which they are applied by overriding the
 * #ClutterConstraintClass.update_allocation() virtual function.
 * 
 * ## Using Constraints
 * 
 * Constraints can be used with fixed layout managers, like
 * #ClutterFixedLayout, or with actors implicitly using a fixed layout
 * manager, like #ClutterGroup and #ClutterStage.
 * 
 * Constraints provide a way to build user interfaces by using
 * relations between #ClutterActors, without explicit fixed
 * positioning and sizing, similarly to how fluid layout managers like
 * #ClutterBoxLayout lay out their children.
 * 
 * Constraints are attached to a #ClutterActor, and are available
 * for inspection using clutter_actor_get_constraints().
 * 
 * Clutter provides different implementation of the #ClutterConstraint
 * abstract class, for instance:
 * 
 *  - #ClutterAlignConstraint, a constraint that can be used to align
 *  an actor to another one on either the horizontal or the vertical
 *  axis, using a normalized value between 0 and 1.
 *  - #ClutterBindConstraint, a constraint binds the X, Y, width or height
 *  of an actor to the corresponding position or size of a source actor,
 *  with or without an offset.
 *  - #ClutterSnapConstraint, a constraint that "snaps" together the edges
 *  of two #ClutterActors; if an actor uses two constraints on both its
 *  horizontal or vertical edges then it can also expand to fit the empty
 *  space.
 * 
 * The [constraints example](https://git.gnome.org/browse/clutter/tree/examples/constraints.c?h=clutter-1.18)
 * uses various types of #ClutterConstraints to lay out three actors on a
 * resizable stage. Only the central actor has an explicit size, and no
 * actor has an explicit position.
 * 
 *  - The #ClutterActor with #ClutterActor:name `layerA` is explicitly
 *  sized to 100 pixels by 25 pixels, and it's added to the #ClutterStage
 *  - two #ClutterAlignConstraints are used to anchor `layerA` to the
 *  center of the stage, by using 0.5 as the alignment #ClutterAlignConstraint:factor on
 *  both the X and Y axis
 *  - the #ClutterActor with #ClutterActor:name `layerB` is added to the
 *  #ClutterStage with no explicit size
 *  - the #ClutterActor:x and #ClutterActor:width of `layerB` are bound
 *  to the same properties of `layerA` using two #ClutterBindConstraint
 *  objects, thus keeping `layerB` aligned to `layerA`
 *  - the top edge of `layerB` is snapped together with the bottom edge
 *  of `layerA`; the bottom edge of `layerB` is also snapped together with
 *  the bottom edge of the #ClutterStage; an offset is  given to the two
 *  #ClutterSnapConstraintss to allow for some padding; since `layerB` is
 *  snapped between two different #ClutterActors, its height is stretched
 *  to match the gap
 *  - the #ClutterActor with #ClutterActor:name `layerC` mirrors `layerB`,
 *  snapping the top edge of the #ClutterStage to the top edge of `layerC`
 *  and the top edge of `layerA` to the bottom edge of `layerC`
 * 
 * You can try resizing interactively the #ClutterStage and verify
 * that the three #ClutterActors maintain the same position and
 * size relative to each other, and to the #ClutterStage.
 * 
 * It is important to note that Clutter does not avoid loops or
 * competing constraints; if two or more #ClutterConstraints
 * are operating on the same positional or dimensional attributes of an
 * actor, or if the constraints on two different actors depend on each
 * other, then the behavior is undefined.
 * 
 * ## Implementing a ClutterConstraint
 * 
 * Creating a sub-class of #ClutterConstraint requires the
 * implementation of the #ClutterConstraintClass.update_allocation()
 * virtual function.
 * 
 * The `update_allocation()` virtual function is called during the
 * allocation sequence of a #ClutterActor, and allows any #ClutterConstraint
 * attached to that actor to modify the allocation before it is passed to
 * the actor's #ClutterActorClass.allocate() implementation.
 * 
 * The #ClutterActorBox passed to the `update_allocation()` implementation
 * contains the original allocation of the #ClutterActor, plus the eventual
 * modifications applied by the other #ClutterConstraints, in the same order
 * the constraints have been applied to the actor.
 * 
 * It is not necessary for a #ClutterConstraint sub-class to chain
 * up to the parent's implementation.
 * 
 * If a #ClutterConstraint is parametrized - i.e. if it contains
 * properties that affect the way the constraint is implemented - it should
 * call clutter_actor_queue_relayout() on the actor to which it is attached
 * to whenever any parameter is changed. The actor to which it is attached
 * can be recovered at any point using clutter_actor_meta_get_actor().
 * @class 
 */
class Constraint extends ActorMeta {

    // Own properties of Clutter-11.Clutter.Constraint

    static name: string
}

interface DeformEffect {

    // Own properties of Clutter-11.Clutter.DeformEffect

    /**
     * The number of horizontal tiles. The bigger the number, the
     * smaller the tiles
     */
    x_tiles: number
    /**
     * The number of vertical tiles. The bigger the number, the
     * smaller the tiles
     */
    y_tiles: number

    // Owm methods of Clutter-11.Clutter.DeformEffect

    /**
     * Retrieves the handle to the back face material used by `effect`
     * @returns a handle for the material, or %NULL.   The returned material is owned by the #ClutterDeformEffect and it   should not be freed directly
     */
    get_back_material(): Cogl.Handle
    /**
     * Retrieves the number of horizontal and vertical tiles used to sub-divide
     * the actor's geometry during the effect
     */
    get_n_tiles(): [ /* x_tiles */ number, /* y_tiles */ number ]
    /**
     * Invalidates the `effect`'s vertices and, if it is associated
     * to an actor, it will queue a redraw
     */
    invalidate(): void
    /**
     * Sets the material that should be used when drawing the back face
     * of the actor during a deformation
     * 
     * The #ClutterDeformEffect will take a reference on the material's
     * handle
     * @param material a handle to a Cogl material
     */
    set_back_material(material: Cogl.Handle | null): void
    /**
     * Sets the number of horizontal and vertical tiles to be used
     * when applying the effect
     * 
     * More tiles allow a finer grained deformation at the expenses
     * of computation
     * @param x_tiles number of horizontal tiles
     * @param y_tiles number of vertical tiles
     */
    set_n_tiles(x_tiles: number, y_tiles: number): void

    // Own virtual methods of Clutter-11.Clutter.DeformEffect

    vfunc_deform_vertex(width: number, height: number, vertex: Cogl.TextureVertex): void
}

/**
 * A base class for effects deforming the geometry of an actor
 * 
 * #ClutterDeformEffect is an abstract class providing all the plumbing
 * for creating effects that result in the deformation of an actor's
 * geometry.
 * 
 * #ClutterDeformEffect uses offscreen buffers to render the contents of
 * a #ClutterActor and then the Cogl vertex buffers API to submit the
 * geometry to the GPU.
 * 
 * ## Implementing ClutterDeformEffect
 * 
 * Sub-classes of #ClutterDeformEffect should override the
 * #ClutterDeformEffectClass.deform_vertex() virtual function; this function
 * is called on every vertex that needs to be deformed by the effect.
 * Each passed vertex is an in-out parameter that initially contains the
 * position of the vertex and should be modified according to a specific
 * deformation algorithm.
 * @class 
 */
class DeformEffect extends OffscreenEffect {

    // Own properties of Clutter-11.Clutter.DeformEffect

    static name: string
}

interface DesaturateEffect {

    // Own properties of Clutter-11.Clutter.DesaturateEffect

    /**
     * The desaturation factor, between 0.0 (no desaturation) and 1.0 (full
     * desaturation).
     */
    factor: number

    // Owm methods of Clutter-11.Clutter.DesaturateEffect

    /**
     * Retrieves the desaturation factor of `effect`
     * @returns the desaturation factor
     */
    get_factor(): number
    /**
     * Sets the desaturation factor for `effect,` with 0.0 being "do not desaturate"
     * and 1.0 being "fully desaturate"
     * @param factor the desaturation factor, between 0.0 and 1.0
     */
    set_factor(factor: number): void
}

/**
 * A desaturation effect
 * 
 * #ClutterDesaturateEffect is a sub-class of #ClutterEffect that
 * desaturates the color of an actor and its contents. The strength
 * of the desaturation effect is controllable and animatable through
 * the #ClutterDesaturateEffect:factor property.
 * @class 
 */
class DesaturateEffect extends OffscreenEffect {

    // Own properties of Clutter-11.Clutter.DesaturateEffect

    static name: string

    // Constructors of Clutter-11.Clutter.DesaturateEffect

    /**
     * Creates a new #ClutterDesaturateEffect to be used with
     * clutter_actor_add_effect()
     * @constructor 
     * @param factor the desaturation factor, between 0.0 and 1.0
     * @returns the newly created #ClutterDesaturateEffect or %NULL
     */
    constructor(factor: number) 
    /**
     * Creates a new #ClutterDesaturateEffect to be used with
     * clutter_actor_add_effect()
     * @constructor 
     * @param factor the desaturation factor, between 0.0 and 1.0
     * @returns the newly created #ClutterDesaturateEffect or %NULL
     */
    static new(factor: number): DesaturateEffect
}

interface Effect {

    // Owm methods of Clutter-11.Clutter.Effect

    /**
     * Queues a repaint of the effect. The effect can detect when the ‘paint’
     * method is called as a result of this function because it will not
     * have the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY flag set. In that case the
     * effect is free to assume that the actor has not changed its
     * appearance since the last time it was painted so it doesn't need to
     * call clutter_actor_continue_paint() if it can draw a cached
     * image. This is mostly intended for effects that are using a
     * %CoglOffscreen to redirect the actor (such as
     * %ClutterOffscreenEffect). In that case the effect can save a bit of
     * rendering time by painting the cached texture without causing the
     * entire actor to be painted.
     * 
     * This function can be used by effects that have their own animatable
     * parameters. For example, an effect which adds a varying degree of a
     * red tint to an actor by redirecting it through a CoglOffscreen
     * might have a property to specify the level of tint. When this value
     * changes, the underlying actor doesn't need to be redrawn so the
     * effect can call clutter_effect_queue_repaint() to make sure the
     * effect is repainted.
     * 
     * Note however that modifying the position of the parent of an actor
     * may change the appearance of the actor because its transformation
     * matrix would change. In this case a redraw wouldn't be queued on
     * the actor itself so the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY would still
     * not be set. The effect can detect this case by keeping track of the
     * last modelview matrix that was used to render the actor and
     * verifying that it remains the same in the next paint.
     * 
     * Any other effects that are layered on top of the passed in effect
     * will still be passed the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY flag. If
     * anything queues a redraw on the actor without specifying an effect
     * or with an effect that is lower in the chain of effects than this
     * one then that will override this call. In that case this effect
     * will instead be called with the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY
     * flag set.
     */
    queue_repaint(): void

    // Own virtual methods of Clutter-11.Clutter.Effect

    vfunc_modify_paint_volume(volume: PaintVolume): boolean
    vfunc_paint(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_paint_node(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void
    vfunc_pick(pick_context: PickContext): void
    vfunc_post_paint(node: PaintNode, paint_context: PaintContext): void
    vfunc_pre_paint(node: PaintNode, paint_context: PaintContext): boolean
}

/**
 * Base class for actor effects
 * 
 * The #ClutterEffect class provides a default type and API for creating
 * effects for generic actors.
 * 
 * Effects are a #ClutterActorMeta sub-class that modify the way an actor
 * is painted in a way that is not part of the actor's implementation.
 * 
 * Effects should be the preferred way to affect the paint sequence of an
 * actor without sub-classing the actor itself and overriding the
 * #ClutterActorClass.paint()_ virtual function.
 * 
 * ## Implementing a ClutterEffect
 * 
 * Creating a sub-class of #ClutterEffect requires overriding the
 * #ClutterEffectClass.paint() method. The implementation of the function should look
 * something like this:
 * 
 * ```c
 * void effect_paint (ClutterEffect *effect, ClutterEffectPaintFlags flags)
 * {
 *   // Set up initialisation of the paint such as binding a
 *   // CoglOffscreen or other operations
 * 
 *   // Chain to the next item in the paint sequence. This will either call
 *   // ‘paint’ on the next effect or just paint the actor if this is
 *   // the last effect.
 *   ClutterActor *actor =
 *     clutter_actor_meta_get_actor (CLUTTER_ACTOR_META (effect));
 * 
 *   clutter_actor_continue_paint (actor);
 * 
 *   // perform any cleanup of state, such as popping the CoglOffscreen
 * }
 * ```
 * 
 * The effect can optionally avoid calling clutter_actor_continue_paint() to skip any
 * further stages of the paint sequence. This is useful for example if the effect
 * contains a cached image of the actor. In that case it can optimise painting by
 * avoiding the actor paint and instead painting the cached image.
 * 
 * The %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY flag is useful in this case. Clutter will set
 * this flag when a redraw has been queued on the actor since it was last painted. The
 * effect can use this information to decide if the cached image is still valid.
 * 
 * ## A simple ClutterEffect implementation
 * 
 * The example below creates two rectangles: one will be painted "behind" the actor,
 * while another will be painted "on top" of the actor.
 * 
 * The #ClutterActorMetaClass.set_actor() implementation will create the two materials
 * used for the two different rectangles; the #ClutterEffectClass.paint() implementation
 * will paint the first material using cogl_rectangle(), before continuing and then it
 * will paint paint the second material after.
 * 
 * ```c
 *  typedef struct {
 *    ClutterEffect parent_instance;
 * 
 *    CoglHandle rect_1;
 *    CoglHandle rect_2;
 *  } MyEffect;
 * 
 *  typedef struct _ClutterEffectClass MyEffectClass;
 * 
 *  G_DEFINE_TYPE (MyEffect, my_effect, CLUTTER_TYPE_EFFECT);
 * 
 *  static void
 *  my_effect_set_actor (ClutterActorMeta *meta,
 *                       ClutterActor     *actor)
 *  {
 *    MyEffect *self = MY_EFFECT (meta);
 * 
 *    // Clear the previous state //
 *    if (self->rect_1)
 *      {
 *        cogl_object_unref (self->rect_1);
 *        self->rect_1 = NULL;
 *      }
 * 
 *    if (self->rect_2)
 *      {
 *        cogl_object_unref (self->rect_2);
 *        self->rect_2 = NULL;
 *      }
 * 
 *    // Maintain a pointer to the actor
 *    self->actor = actor;
 * 
 *    // If we've been detached by the actor then we should just bail out here
 *    if (self->actor == NULL)
 *      return;
 * 
 *    // Create a red material
 *    self->rect_1 = cogl_material_new ();
 *    cogl_material_set_color4f (self->rect_1, 1.0, 0.0, 0.0, 1.0);
 * 
 *    // Create a green material
 *    self->rect_2 = cogl_material_new ();
 *    cogl_material_set_color4f (self->rect_2, 0.0, 1.0, 0.0, 1.0);
 *  }
 * 
 *  static gboolean
 *  my_effect_paint (ClutterEffect *effect)
 *  {
 *    MyEffect *self = MY_EFFECT (effect);
 *    gfloat width, height;
 * 
 *    clutter_actor_get_size (self->actor, &width, &height);
 * 
 *    // Paint the first rectangle in the upper left quadrant
 *    cogl_set_source (self->rect_1);
 *    cogl_rectangle (0, 0, width / 2, height / 2);
 * 
 *    // Continue to the rest of the paint sequence
 *    clutter_actor_continue_paint (self->actor);
 * 
 *    // Paint the second rectangle in the lower right quadrant
 *    cogl_set_source (self->rect_2);
 *    cogl_rectangle (width / 2, height / 2, width, height);
 *  }
 * 
 *  static void
 *  my_effect_class_init (MyEffectClass *klass)
 *  {
 *    ClutterActorMetaClas *meta_class = CLUTTER_ACTOR_META_CLASS (klass);
 * 
 *    meta_class->set_actor = my_effect_set_actor;
 * 
 *    klass->paint = my_effect_paint;
 *  }
 * ```
 * @class 
 */
class Effect extends ActorMeta {

    // Own properties of Clutter-11.Clutter.Effect

    static name: string
}

interface FixedLayout {
}

/**
 * A fixed layout manager
 * 
 * #ClutterFixedLayout is a layout manager implementing the same
 * layout policies as #ClutterGroup.
 * @class 
 */
class FixedLayout extends LayoutManager {

    // Own properties of Clutter-11.Clutter.FixedLayout

    static name: string

    // Constructors of Clutter-11.Clutter.FixedLayout

    /**
     * Creates a new #ClutterFixedLayout
     * @constructor 
     * @returns the newly created #ClutterFixedLayout
     */
    constructor() 
    /**
     * Creates a new #ClutterFixedLayout
     * @constructor 
     * @returns the newly created #ClutterFixedLayout
     */
    static new(): FixedLayout
}

interface FlowLayout {

    // Own properties of Clutter-11.Clutter.FlowLayout

    /**
     * The spacing between columns, in pixels; the value of this
     * property is honoured by horizontal non-overflowing layouts
     * and by vertical overflowing layouts
     */
    column_spacing: number
    /**
     * Whether each child inside the #ClutterFlowLayout should receive
     * the same allocation
     */
    homogeneous: boolean
    /**
     * Maximum width for each column in the layout, in pixels. If
     * set to -1 the width will be the maximum child width
     */
    max_column_width: number
    /**
     * Maximum height for each row in the layout, in pixels. If
     * set to -1 the width will be the maximum child height
     */
    max_row_height: number
    /**
     * Minimum width for each column in the layout, in pixels
     */
    min_column_width: number
    /**
     * Minimum height for each row in the layout, in pixels
     */
    min_row_height: number
    /**
     * The orientation of the #ClutterFlowLayout. The children
     * of the layout will be laid out following the orientation.
     * 
     * This property also controls the overflowing directions
     */
    orientation: FlowOrientation
    /**
     * The spacing between rows, in pixels; the value of this
     * property is honoured by vertical non-overflowing layouts and
     * by horizontal overflowing layouts
     */
    row_spacing: number
    /**
     * Whether the #ClutterFlowLayout should arrange its children
     * on a grid
     */
    snap_to_grid: boolean

    // Owm methods of Clutter-11.Clutter.FlowLayout

    /**
     * Retrieves the spacing between columns
     * @returns the spacing between columns of the #ClutterFlowLayout,   in pixels
     */
    get_column_spacing(): number
    /**
     * Retrieves the minimum and maximum column widths
     */
    get_column_width(): [ /* min_width */ number, /* max_width */ number ]
    /**
     * Retrieves whether the `layout` is homogeneous
     * @returns %TRUE if the #ClutterFlowLayout is homogeneous
     */
    get_homogeneous(): boolean
    /**
     * Retrieves the orientation of the `layout`
     * @returns the orientation of the #ClutterFlowLayout
     */
    get_orientation(): FlowOrientation
    /**
     * Retrieves the minimum and maximum row heights
     */
    get_row_height(): [ /* min_height */ number, /* max_height */ number ]
    /**
     * Retrieves the spacing between rows
     * @returns the spacing between rows of the #ClutterFlowLayout,   in pixels
     */
    get_row_spacing(): number
    /**
     * Retrieves the value of #ClutterFlowLayout:snap-to-grid property
     * @returns %TRUE if the @layout is placing its children on a grid
     */
    get_snap_to_grid(): boolean
    /**
     * Sets the space between columns, in pixels
     * @param spacing the space between columns
     */
    set_column_spacing(spacing: number): void
    /**
     * Sets the minimum and maximum widths that a column can have
     * @param min_width minimum width of a column
     * @param max_width maximum width of a column
     */
    set_column_width(min_width: number, max_width: number): void
    /**
     * Sets whether the `layout` should allocate the same space for
     * each child
     * @param homogeneous whether the layout should be homogeneous or not
     */
    set_homogeneous(homogeneous: boolean): void
    /**
     * Sets the orientation of the flow layout
     * 
     * The orientation controls the direction used to allocate
     * the children: either horizontally or vertically. The
     * orientation also controls the direction of the overflowing
     * @param orientation the orientation of the layout
     */
    set_orientation(orientation: FlowOrientation): void
    /**
     * Sets the minimum and maximum heights that a row can have
     * @param min_height the minimum height of a row
     * @param max_height the maximum height of a row
     */
    set_row_height(min_height: number, max_height: number): void
    /**
     * Sets the spacing between rows, in pixels
     * @param spacing the space between rows
     */
    set_row_spacing(spacing: number): void
    /**
     * Whether the `layout` should place its children on a grid.
     * @param snap_to_grid %TRUE if `layout` should place its children on a grid
     */
    set_snap_to_grid(snap_to_grid: boolean): void
}

/**
 * A reflowing layout manager
 * 
 * #ClutterFlowLayout is a layout manager which implements the following
 * policy:
 * 
 *   - the preferred natural size depends on the value
 *   of the #ClutterFlowLayout:orientation property; the layout will try
 *   to maintain all its children on a single row or
 *   column;
 *   - if either the width or the height allocated are
 *   smaller than the preferred ones, the layout will wrap; in this case,
 *   the preferred height or width, respectively, will take into account
 *   the amount of columns and rows;
 *   - each line (either column or row) in reflowing will
 *   have the size of the biggest cell on that line; if the
 *   #ClutterFlowLayout:homogeneous property is set to %FALSE the actor
 *   will be allocated within that area, and if set to %TRUE instead the
 *   actor will be given exactly that area;
 *   - the size of the columns or rows can be controlled
 *   for both minimum and maximum; the spacing can also be controlled
 *   in both columns and rows.
 * 
 * The [flow-layout example](https://git.gnome.org/browse/clutter/tree/examples/flow-layout.c?h=clutter-1.18)
 * shows how to use the #ClutterFlowLayout.
 * @class 
 */
class FlowLayout extends LayoutManager {

    // Own properties of Clutter-11.Clutter.FlowLayout

    static name: string

    // Constructors of Clutter-11.Clutter.FlowLayout

    /**
     * Creates a new #ClutterFlowLayout with the given `orientation`
     * @constructor 
     * @param orientation the orientation of the flow layout
     * @returns the newly created #ClutterFlowLayout
     */
    constructor(orientation: FlowOrientation) 
    /**
     * Creates a new #ClutterFlowLayout with the given `orientation`
     * @constructor 
     * @param orientation the orientation of the flow layout
     * @returns the newly created #ClutterFlowLayout
     */
    static new(orientation: FlowOrientation): FlowLayout
}

module FrameClock {

    // Signal callback interfaces

    /**
     * Signal callback interface for `destroy`
     */
    interface DestroySignalCallback {
        ($obj: FrameClock): void
    }

}

interface FrameClock {

    // Owm methods of Clutter-11.Clutter.FrameClock

    add_timeline(timeline: Timeline): void
    destroy(): void
    get_max_render_time_debug_info(): any
    get_refresh_rate(): number
    inhibit(): void
    notify_ready(): void
    record_flip_time(flip_time_us: number): void
    remove_timeline(timeline: Timeline): void
    schedule_update(): void
    schedule_update_now(): void
    uninhibit(): void

    // Own signals of Clutter-11.Clutter.FrameClock

    connect(sigName: "destroy", callback: FrameClock.DestroySignalCallback): number
    connect_after(sigName: "destroy", callback: FrameClock.DestroySignalCallback): number
    emit(sigName: "destroy", ...args: any[]): void
}

class FrameClock {

    // Own properties of Clutter-11.Clutter.FrameClock

    static name: string
}

module GestureAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `gesture-begin`
     */
    interface GestureBeginSignalCallback {
        ($obj: GestureAction, actor: Actor): boolean
    }

    /**
     * Signal callback interface for `gesture-cancel`
     */
    interface GestureCancelSignalCallback {
        ($obj: GestureAction, actor: Actor): void
    }

    /**
     * Signal callback interface for `gesture-end`
     */
    interface GestureEndSignalCallback {
        ($obj: GestureAction, actor: Actor): void
    }

    /**
     * Signal callback interface for `gesture-progress`
     */
    interface GestureProgressSignalCallback {
        ($obj: GestureAction, actor: Actor): boolean
    }

}

interface GestureAction {

    // Own properties of Clutter-11.Clutter.GestureAction

    /**
     * Number of touch points to trigger a gesture action.
     */
    n_touch_points: number
    /**
     * The horizontal trigger distance to be used by the action to either
     * emit the [signal`GestureAction:`:gesture-begin] signal or to emit
     * the [signal`GestureAction:`:gesture-cancel] signal.
     * 
     * A negative value will be interpreted as the default drag threshold.
     */
    readonly threshold_trigger_distance_x: number
    /**
     * The vertical trigger distance to be used by the action to either
     * emit the [signal`GestureAction:`:gesture-begin] signal or to emit
     * the [signal`GestureAction:`:gesture-cancel] signal.
     * 
     * A negative value will be interpreted as the default drag threshold.
     */
    readonly threshold_trigger_distance_y: number
    /**
     * The trigger edge to be used by the action to either emit the
     * [signal`GestureAction:`:gesture-begin] signal or to emit the
     * [signal`GestureAction:`:gesture-cancel] signal.
     */
    readonly threshold_trigger_edge: GestureTriggerEdge

    // Own fields of Clutter-11.Clutter.GestureAction

    parent_instance: Action & ActorMeta & any & any

    // Owm methods of Clutter-11.Clutter.GestureAction

    /**
     * Cancel a #ClutterGestureAction before it begins
     */
    cancel(): void
    /**
     * Retrieves the #ClutterInputDevice of a touch point.
     * @param point the touch point index, with 0 being the first touch   point received by the action
     * @returns the #ClutterInputDevice of a touch point.
     */
    get_device(point: number): InputDevice
    /**
     * Retrieves a reference to the last #ClutterEvent for a touch point. Call
     * [method`Event`.copy] if you need to store the reference somewhere.
     * @param point index of a point currently active
     * @returns the last #ClutterEvent for a touch point.
     */
    get_last_event(point: number): Event
    /**
     * Retrieves the coordinates, in stage space, of the latest motion
     * event during the dragging.
     * @param point the touch point index, with 0 being the first touch   point received by the action
     */
    get_motion_coords(point: number): [ /* motion_x */ number, /* motion_y */ number ]
    /**
     * Retrieves the incremental delta since the last motion event
     * during the dragging.
     * @param point the touch point index, with 0 being the first touch   point received by the action
     * @returns the distance since last motion event
     */
    get_motion_delta(point: number): [ /* returnType */ number, /* delta_x */ number, /* delta_y */ number ]
    /**
     * Retrieves the number of points currently active.
     * @returns the number of points currently active.
     */
    get_n_current_points(): number
    /**
     * Retrieves the number of requested points to trigger the gesture.
     * @returns the number of points to trigger the gesture.
     */
    get_n_touch_points(): number
    /**
     * Retrieves the coordinates, in stage space, of the press event
     * that started the dragging for a specific touch point.
     * @param point the touch point index, with 0 being the first touch   point received by the action
     */
    get_press_coords(point: number): [ /* press_x */ number, /* press_y */ number ]
    /**
     * Retrieves the coordinates, in stage space, where the touch point was
     * last released.
     * @param point the touch point index, with 0 being the first touch   point received by the action
     */
    get_release_coords(point: number): [ /* release_x */ number, /* release_y */ number ]
    /**
     * Retrieves the #ClutterEventSequence of a touch point.
     * @param point index of a point currently active
     * @returns the #ClutterEventSequence of a touch point.
     */
    get_sequence(point: number): EventSequence
    /**
     * Retrieves the threshold trigger distance of the gesture `action,`
     * as set using [method`GestureAction`.set_threshold_trigger_distance].
     */
    get_threshold_trigger_distance(): [ /* x */ number, /* y */ number ]
    /**
     * Retrieves the edge trigger of the gesture `action,` as set using
     * [method`GestureAction`.set_threshold_trigger_edge].
     * @returns the edge trigger0
     */
    get_threshold_trigger_edge(): GestureTriggerEdge
    /**
     * Retrieves the edge trigger of the gesture `action,` as set using
     * [method`GestureAction`.set_threshold_trigger_edge].
     * @returns the edge trigger
     */
    get_threshold_trigger_egde(): GestureTriggerEdge
    /**
     * Retrieves the velocity, in stage pixels per millisecond, of the
     * latest motion event during the dragging.
     * @param point the touch point index, with 0 being the first touch   point received by the action
     */
    get_velocity(point: number): [ /* returnType */ number, /* velocity_x */ number, /* velocity_y */ number ]
    /**
     * Sets the number of points needed to trigger the gesture.
     * @param nb_points a number of points
     */
    set_n_touch_points(nb_points: number): void
    /**
     * Sets the threshold trigger distance for the gesture drag threshold, if any.
     * 
     * This function should only be called by sub-classes of
     * #ClutterGestureAction during their construction phase.
     * @param x the distance on the horizontal axis
     * @param y the distance on the vertical axis
     */
    set_threshold_trigger_distance(x: number, y: number): void
    /**
     * Sets the edge trigger for the gesture drag threshold, if any.
     * 
     * This function should only be called by sub-classes of
     * #ClutterGestureAction during their construction phase.
     * @param edge the %ClutterGestureTriggerEdge
     */
    set_threshold_trigger_edge(edge: GestureTriggerEdge): void

    // Own virtual methods of Clutter-11.Clutter.GestureAction

    vfunc_gesture_begin(actor: Actor): boolean
    vfunc_gesture_cancel(actor: Actor): void
    vfunc_gesture_end(actor: Actor): void
    vfunc_gesture_prepare(actor: Actor): boolean
    vfunc_gesture_progress(actor: Actor): boolean

    // Own signals of Clutter-11.Clutter.GestureAction

    connect(sigName: "gesture-begin", callback: GestureAction.GestureBeginSignalCallback): number
    connect_after(sigName: "gesture-begin", callback: GestureAction.GestureBeginSignalCallback): number
    emit(sigName: "gesture-begin", actor: Actor, ...args: any[]): void
    connect(sigName: "gesture-cancel", callback: GestureAction.GestureCancelSignalCallback): number
    connect_after(sigName: "gesture-cancel", callback: GestureAction.GestureCancelSignalCallback): number
    emit(sigName: "gesture-cancel", actor: Actor, ...args: any[]): void
    connect(sigName: "gesture-end", callback: GestureAction.GestureEndSignalCallback): number
    connect_after(sigName: "gesture-end", callback: GestureAction.GestureEndSignalCallback): number
    emit(sigName: "gesture-end", actor: Actor, ...args: any[]): void
    connect(sigName: "gesture-progress", callback: GestureAction.GestureProgressSignalCallback): number
    connect_after(sigName: "gesture-progress", callback: GestureAction.GestureProgressSignalCallback): number
    emit(sigName: "gesture-progress", actor: Actor, ...args: any[]): void
}

/**
 * Action for gesture gestures
 * 
 * #ClutterGestureAction is a sub-class of [class`Action]` that implements
 * the logic for recognizing gesture gestures. It listens for low level events
 * such as [struct`ButtonEvent]` and [struct`MotionEvent]` on the stage to raise
 * the [signal`GestureAction:`:gesture-begin], [signal`GestureAction:`:gesture-progress],
 * and [signal`GestureAction:`:gesture-end] signals.
 * 
 * To use #ClutterGestureAction you just need to apply it to a [class`Actor]`
 * using [method`Actor`.add_action] and connect to the signals:
 * 
 * ```c
 *   ClutterAction *action = clutter_gesture_action_new ();
 * 
 *   clutter_actor_add_action (actor, action);
 * 
 *   g_signal_connect (action, "gesture-begin", G_CALLBACK (on_gesture_begin), NULL);
 *   g_signal_connect (action, "gesture-progress", G_CALLBACK (on_gesture_progress), NULL);
 *   g_signal_connect (action, "gesture-end", G_CALLBACK (on_gesture_end), NULL);
 * ```
 * 
 * ## Creating Gesture actions
 * 
 * A #ClutterGestureAction provides four separate states that can be
 * used to recognize or ignore gestures when writing a new action class:
 * 
 *  - Prepare -> Cancel
 *  - Prepare -> Begin -> Cancel
 *  - Prepare -> Begin -> End
 *  - Prepare -> Begin -> Progress -> Cancel
 *  - Prepare -> Begin -> Progress -> End
 * 
 * Each #ClutterGestureAction starts in the "prepare" state, and calls
 * the [vfunc`GestureAction`.gesture_prepare] virtual function; this
 * state can be used to reset the internal state of a #ClutterGestureAction
 * subclass, but it can also immediately cancel a gesture without going
 * through the rest of the states.
 * 
 * The "begin" state follows the "prepare" state, and calls the
 * [vfunc`GestureAction`.gesture_begin] virtual function. This state
 * signals the start of a gesture recognizing process. From the "begin" state
 * the gesture recognition process can successfully end, by going to the
 * "end" state; it can continue in the "progress" state, in case of a
 * continuous gesture; or it can be terminated, by moving to the "cancel"
 * state.
 * 
 * In case of continuous gestures, the #ClutterGestureAction will use
 * the "progress" state, calling the [vfunc`GestureAction`.gesture_progress]
 * virtual function; the "progress" state will continue until the end of the
 * gesture, in which case the "end" state will be reached, or until the
 * gesture is cancelled, in which case the "cancel" gesture will be used
 * instead.
 * @class 
 */
class GestureAction extends Action {

    // Own properties of Clutter-11.Clutter.GestureAction

    static name: string

    // Constructors of Clutter-11.Clutter.GestureAction

    /**
     * Creates a new #ClutterGestureAction instance.
     * @constructor 
     * @returns the newly created #ClutterGestureAction
     */
    constructor() 
    /**
     * Creates a new #ClutterGestureAction instance.
     * @constructor 
     * @returns the newly created #ClutterGestureAction
     */
    static new(): GestureAction
}

interface GridLayout {

    // Own properties of Clutter-11.Clutter.GridLayout

    /**
     * Whether all columns of the layout should have the same width
     */
    column_homogeneous: boolean
    /**
     * The amount of space in pixels between two consecutive columns
     */
    column_spacing: number
    /**
     * The orientation of the layout, either horizontal or vertical
     */
    orientation: Orientation
    /**
     * Whether all rows of the layout should have the same height
     */
    row_homogeneous: boolean
    /**
     * The amount of space in pixels between two consecutive rows
     */
    row_spacing: number

    // Owm methods of Clutter-11.Clutter.GridLayout

    /**
     * Adds a widget to the grid.
     * 
     * The position of `child` is determined by `left` and `top`. The
     * number of 'cells' that `child` will occupy is determined by
     * `width` and `height`.
     * @param child the #ClutterActor to add
     * @param left the column number to attach the left side of `child` to
     * @param top the row number to attach the top side of `child` to
     * @param width the number of columns that `child` will span
     * @param height the number of rows that `child` will span
     */
    attach(child: Actor, left: number, top: number, width: number, height: number): void
    /**
     * Adds a actor to the grid.
     * 
     * The actor is placed next to `sibling,` on the side determined by
     * `side`. When `sibling` is %NULL, the actor is placed in row (for
     * left or right placement) or column 0 (for top or bottom placement),
     * at the end indicated by `side`.
     * 
     * Attaching widgets labeled [1], [2], [3] with `sibling` == %NULL and
     * `side` == %CLUTTER_GRID_POSITION_LEFT yields a layout of [3][2][1].
     * @param child the actor to add
     * @param sibling the child of `layout` that `child` will be placed     next to, or %NULL to place `child` at the beginning or end
     * @param side the side of `sibling` that `child` is positioned next to
     * @param width the number of columns that `child` will span
     * @param height the number of rows that `child` will span
     */
    attach_next_to(child: Actor, sibling: Actor | null, side: GridPosition, width: number, height: number): void
    /**
     * Gets the child of `layout` whose area covers the grid
     * cell whose upper left corner is at `left,` `top`.
     * @param left the left edge of the cell
     * @param top the top edge of the cell
     * @returns the child at the given position, or %NULL
     */
    get_child_at(left: number, top: number): Actor
    /**
     * Returns whether all columns of `layout` have the same width.
     * @returns whether all columns of @layout have the same width.
     */
    get_column_homogeneous(): boolean
    /**
     * Retrieves the spacing set using clutter_grid_layout_set_column_spacing()
     * @returns the spacing between coluns of @layout
     */
    get_column_spacing(): number
    /**
     * Retrieves the orientation of the `layout`.
     * @returns the orientation of the layout
     */
    get_orientation(): Orientation
    /**
     * Returns whether all rows of `layout` have the same height.
     * @returns whether all rows of @layout have the same height.
     */
    get_row_homogeneous(): boolean
    /**
     * Retrieves the spacing set using clutter_grid_layout_set_row_spacing()
     * @returns the spacing between rows of @layout
     */
    get_row_spacing(): number
    /**
     * Inserts a column at the specified position.
     * 
     * Children which are attached at or to the right of this position
     * are moved one column to the right. Children which span across this
     * position are grown to span the new column.
     * @param position the position to insert the column at
     */
    insert_column(position: number): void
    /**
     * Inserts a row or column at the specified position.
     * 
     * The new row or column is placed next to `sibling,` on the side
     * determined by `side`. If `side` is %CLUTTER_GRID_POSITION_LEFT or
     * %CLUTTER_GRID_POSITION_BOTTOM, a row is inserted. If `side` is
     * %CLUTTER_GRID_POSITION_LEFT of %CLUTTER_GRID_POSITION_RIGHT,
     * a column is inserted.
     * @param sibling the child of `layout` that the new row or column will be     placed next to
     * @param side the side of `sibling` that `child` is positioned next to
     */
    insert_next_to(sibling: Actor, side: GridPosition): void
    /**
     * Inserts a row at the specified position.
     * 
     * Children which are attached at or below this position
     * are moved one row down. Children which span across this
     * position are grown to span the new row.
     * @param position the position to insert the row at
     */
    insert_row(position: number): void
    /**
     * Sets whether all columns of `layout` will have the same width.
     * @param homogeneous %TRUE to make columns homogeneous
     */
    set_column_homogeneous(homogeneous: boolean): void
    /**
     * Sets the spacing between columns of `layout`
     * @param spacing the spacing between columns of the layout, in pixels
     */
    set_column_spacing(spacing: number): void
    /**
     * Sets the orientation of the `layout`.
     * 
     * #ClutterGridLayout uses the orientation as a hint when adding
     * children to the #ClutterActor using it as a layout manager via
     * clutter_actor_add_child(); changing this value will not have
     * any effect on children that are already part of the layout.
     * @param orientation the orientation of the #ClutterGridLayout
     */
    set_orientation(orientation: Orientation): void
    /**
     * Sets whether all rows of `layout` will have the same height.
     * @param homogeneous %TRUE to make rows homogeneous
     */
    set_row_homogeneous(homogeneous: boolean): void
    /**
     * Sets the spacing between rows of `layout`
     * @param spacing the spacing between rows of the layout, in pixels
     */
    set_row_spacing(spacing: number): void
}

/**
 * A layout manager for a grid of actors
 * 
 * #ClutterGridLayout is a layout manager which arranges its child widgets in
 * rows and columns. It is a very similar to #ClutterBoxLayout, but it
 * consistently uses #ClutterActor's alignment and expansion flags instead of
 * custom child properties.
 * 
 * Children are added using clutter_grid_layout_attach(). They can span
 * multiple rows or columns. It is also possible to add a child next to an
 * existing child, using clutter_grid_layout_attach_next_to(). The behaviour of
 * #ClutterGridLayout when several children occupy the same grid cell is undefined.
 * 
 * #ClutterGridLayout can be used like a #ClutterBoxLayout by just using
 * clutter_actor_add_child(), which will place children next to each other in
 * the direction determined by the #ClutterGridLayout:orientation property.
 * @class 
 */
class GridLayout extends LayoutManager {

    // Own properties of Clutter-11.Clutter.GridLayout

    static name: string

    // Constructors of Clutter-11.Clutter.GridLayout

    /**
     * Creates a new #ClutterGridLayout
     * @constructor 
     * @returns the new #ClutterGridLayout
     */
    constructor() 
    /**
     * Creates a new #ClutterGridLayout
     * @constructor 
     * @returns the new #ClutterGridLayout
     */
    static new(): GridLayout
}

interface Image extends Content {

    // Own fields of Clutter-11.Clutter.Image

    parent_instance: any

    // Owm methods of Clutter-11.Clutter.Image

    /**
     * Retrieves a pointer to the Cogl texture used by `image`.
     * 
     * If you change the contents of the returned Cogl texture you will need
     * to manually invalidate the `image` with clutter_content_invalidate()
     * in order to update the actors using `image` as their content.
     * @returns a pointer to the Cogl texture, or %NULL
     */
    get_texture(): Cogl.Texture
    /**
     * Sets the image data to be display by `image,` using `rect` to indicate
     * the position and size of the image data to be set.
     * 
     * If the `image` does not have any image data set when this function is
     * called, a new texture will be created with the size of the width and
     * height of the rectangle, i.e. calling this function on a newly created
     * #ClutterImage will be the equivalent of calling clutter_image_set_data().
     * 
     * If the image data was successfully loaded, the `image` will be invalidated.
     * 
     * In case of error, the `error` value will be set, and this function will
     * return %FALSE.
     * 
     * The image data is copied in texture memory.
     * @param data the image data, as an array of bytes
     * @param pixel_format the Cogl pixel format of the image data
     * @param rect a rectangle indicating the area that should be set
     * @param row_stride the length of each row inside `data`
     * @returns %TRUE if the image data was successfully loaded,   and %FALSE otherwise.
     */
    set_area(data: Uint8Array, pixel_format: Cogl.PixelFormat, rect: any, row_stride: number): boolean
    /**
     * Sets the image data stored inside a #GBytes to be displayed by `image`.
     * 
     * If the image data was successfully loaded, the `image` will be invalidated.
     * 
     * In case of error, the `error` value will be set, and this function will
     * return %FALSE.
     * 
     * The image data contained inside the #GBytes is copied in texture memory,
     * and no additional reference is acquired on the `data`.
     * @param data the image data, as a #GBytes
     * @param pixel_format the Cogl pixel format of the image data
     * @param width the width of the image data
     * @param height the height of the image data
     * @param row_stride the length of each row inside `data`
     * @returns %TRUE if the image data was successfully loaded,   and %FALSE otherwise.
     */
    set_bytes(data: any, pixel_format: Cogl.PixelFormat, width: number, height: number, row_stride: number): boolean
    /**
     * Sets the image data to be displayed by `image`.
     * 
     * If the image data was successfully loaded, the `image` will be invalidated.
     * 
     * In case of error, the `error` value will be set, and this function will
     * return %FALSE.
     * 
     * The image data is copied in texture memory.
     * 
     * The image data is expected to be a linear array of RGBA or RGB pixel data;
     * how to retrieve that data is left to platform specific image loaders. For
     * instance, if you use the GdkPixbuf library:
     * 
     * ```c
     *   ClutterContent *image = clutter_image_new ();
     * 
     *   GdkPixbuf *pixbuf = gdk_pixbuf_new_from_file (filename, NULL);
     * 
     *   clutter_image_set_data (CLUTTER_IMAGE (image),
     *                           gdk_pixbuf_get_pixels (pixbuf),
     *                           gdk_pixbuf_get_has_alpha (pixbuf)
     *                             ? COGL_PIXEL_FORMAT_RGBA_8888
     *                             : COGL_PIXEL_FORMAT_RGB_888,
     *                           gdk_pixbuf_get_width (pixbuf),
     *                           gdk_pixbuf_get_height (pixbuf),
     *                           gdk_pixbuf_get_rowstride (pixbuf),
     *                           &error);
     * 
     *   g_object_unref (pixbuf);
     * ```
     * @param data the image data, as an array of bytes
     * @param pixel_format the Cogl pixel format of the image data
     * @param width the width of the image data
     * @param height the height of the image data
     * @param row_stride the length of each row inside `data`
     * @returns %TRUE if the image data was successfully loaded,   and %FALSE otherwise.
     */
    set_data(data: Uint8Array, pixel_format: Cogl.PixelFormat, width: number, height: number, row_stride: number): boolean
}

/**
 * Image data content
 * 
 * #ClutterImage is a #ClutterContent implementation that displays
 * image data inside a [class`Actor]`.
 * 
 * See [image.c](https://git.gnome.org/browse/clutter/tree/examples/image-content.c?h=clutter-1.18)
 * for an example of how to use #ClutterImage..
 * @class 
 */
class Image {

    // Own properties of Clutter-11.Clutter.Image

    static name: string

    // Constructors of Clutter-11.Clutter.Image

    /**
     * Creates a new #ClutterImage instance.
     * @returns the newly created #ClutterImage instance.   Use g_object_unref() when done.
     */
    static new(): Content
}

interface InputDevice {

    // Own properties of Clutter-11.Clutter.InputDevice

    /**
     * The #ClutterBackend that created the device.
     */
    readonly backend: Backend
    /**
     * The capabilities of the device
     */
    readonly capabilities: InputCapabilities
    readonly device_mode: InputMode
    readonly device_node: string | null
    /**
     * The type of the device
     */
    readonly device_type: InputDeviceType
    /**
     * Whether the device has an on screen cursor following its movement.
     */
    readonly has_cursor: boolean
    readonly n_buttons: number
    readonly n_mode_groups: number
    readonly n_rings: number
    readonly n_strips: number
    /**
     * The name of the device
     */
    readonly name: string | null
    /**
     * Product ID of this device.2
     */
    readonly product_id: string | null
    /**
     * The #ClutterSeat instance which owns the device
     */
    readonly seat: Seat
    /**
     * Vendor ID of this device.2
     */
    readonly vendor_id: string | null

    // Owm methods of Clutter-11.Clutter.InputDevice

    /**
     * Retrieves the capabilities of `device`
     * @returns the capabilities of the device
     */
    get_capabilities(): InputCapabilities
    /**
     * Retrieves the #ClutterInputMode of `device`.
     * @returns the device mode
     */
    get_device_mode(): InputMode
    /**
     * Retrieves the name of the `device`
     * @returns the name of the device, or %NULL. The returned string   is owned by the #ClutterInputDevice and should never be modified   or freed
     */
    get_device_name(): string | null
    get_device_node(): string | null
    /**
     * Retrieves the type of `device`
     * @returns the type of the device
     */
    get_device_type(): InputDeviceType
    get_group_n_modes(group: number): number
    /**
     * Retrieves whether `device` has a pointer that follows the
     * device motion.
     * @returns %TRUE if the device has a cursor
     */
    get_has_cursor(): boolean
    get_mode_switch_button_group(button: number): number
    get_n_buttons(): number
    get_n_mode_groups(): number
    get_n_rings(): number
    get_n_strips(): number
    get_pad_feature_group(feature: InputDevicePadFeature, n_feature: number): number
    /**
     * Gets the product ID of this device.
     * @returns the product ID2
     */
    get_product_id(): string | null
    /**
     * Returns the seat the device belongs to
     * @returns the device seat
     */
    get_seat(): Seat
    /**
     * Gets the vendor ID of this device.
     * @returns the vendor ID2
     */
    get_vendor_id(): string | null
    is_grouped(other_device: InputDevice): boolean
    is_mode_switch_button(group: number, button: number): boolean

    // Own virtual methods of Clutter-11.Clutter.InputDevice

    vfunc_get_group_n_modes(group: number): number
    vfunc_get_pad_feature_group(feature: InputDevicePadFeature, n_feature: number): number
    vfunc_is_grouped(other_device: InputDevice): boolean
    vfunc_is_mode_switch_button(group: number, button: number): boolean
}

/**
 * An input device managed by Clutter
 * 
 * #ClutterInputDevice represents an input device known to Clutter.
 * 
 * The #ClutterInputDevice class holds the state of the device, but
 * its contents are usually defined by the Clutter backend in use.
 * @class 
 */
class InputDevice {

    // Own properties of Clutter-11.Clutter.InputDevice

    static name: string
}

interface InputDeviceTool {

    // Own properties of Clutter-11.Clutter.InputDeviceTool

    readonly axes: InputAxisFlags
    readonly id: number
    readonly serial: number
    readonly type: InputDeviceToolType

    // Own fields of Clutter-11.Clutter.InputDeviceTool

    parent_instance: any

    // Owm methods of Clutter-11.Clutter.InputDeviceTool

    get_axes(): InputAxisFlags
    /**
     * Gets the ID of this tool, this value can be used to identify a
     * physical tool (eg. a tablet pen) across program executions.
     * @returns The tool ID for this tool
     */
    get_id(): number
    /**
     * Gets the serial of this tool, this value can be used to identify a
     * physical tool (eg. a tablet pen) across program executions.
     * @returns The serial ID for this tool8
     */
    get_serial(): number
    /**
     * Gets the tool type of this tool.
     * @returns The tool type of this tool8
     */
    get_tool_type(): InputDeviceToolType
}

class InputDeviceTool {

    // Own properties of Clutter-11.Clutter.InputDeviceTool

    static name: string
}

interface InputFocus {

    // Own fields of Clutter-11.Clutter.InputFocus

    parent_instance: any

    // Owm methods of Clutter-11.Clutter.InputFocus

    filter_event(event: Event): boolean
    is_focused(): boolean
    reset(): void
    set_can_show_preedit(can_show_preedit: boolean): void
    set_content_hints(hint: InputContentHintFlags): void
    set_content_purpose(purpose: InputContentPurpose): void
    set_cursor_location(rect: any): void
    set_input_panel_state(state: InputPanelState): void
    set_surrounding(text: string | null, cursor: number, anchor: number): void

    // Own virtual methods of Clutter-11.Clutter.InputFocus

    vfunc_commit_text(text: string | null): void
    vfunc_delete_surrounding(offset: number, len: number): void
    vfunc_focus_in(input_method: InputMethod): void
    vfunc_focus_out(): void
    vfunc_request_surrounding(): void
    vfunc_set_preedit_text(preedit: string | null, cursor: number, anchor: number): void
}

class InputFocus {

    // Own properties of Clutter-11.Clutter.InputFocus

    static name: string
}

module InputMethod {

    // Signal callback interfaces

    /**
     * Signal callback interface for `commit`
     */
    interface CommitSignalCallback {
        ($obj: InputMethod, object: string | null): void
    }

    /**
     * Signal callback interface for `cursor-location-changed`
     */
    interface CursorLocationChangedSignalCallback {
        ($obj: InputMethod, object: any): void
    }

    /**
     * Signal callback interface for `delete-surrounding`
     */
    interface DeleteSurroundingSignalCallback {
        ($obj: InputMethod, object: number, p0: number): void
    }

    /**
     * Signal callback interface for `input-panel-state`
     */
    interface InputPanelStateSignalCallback {
        ($obj: InputMethod, object: InputPanelState): void
    }

    /**
     * Signal callback interface for `request-surrounding`
     */
    interface RequestSurroundingSignalCallback {
        ($obj: InputMethod): void
    }

}

interface InputMethod {

    // Own properties of Clutter-11.Clutter.InputMethod

    can_show_preedit: boolean
    content_hints: InputContentHintFlags
    content_purpose: InputContentPurpose

    // Own fields of Clutter-11.Clutter.InputMethod

    parent_instance: any

    // Owm methods of Clutter-11.Clutter.InputMethod

    commit(text: string | null): void
    delete_surrounding(offset: number, len: number): void
    focus_in(focus: InputFocus): void
    focus_out(): void
    forward_key(keyval: number, keycode: number, state: number, time_: number, press: boolean): void
    notify_key_event(event: Event, filtered: boolean): void
    request_surrounding(): void
    set_input_panel_state(state: InputPanelState): void
    /**
     * Sets the preedit text on the current input focus.
     * @param preedit the preedit text, or %NULL
     * @param cursor the cursor
     * @param anchor 
     * @param mode 
     */
    set_preedit_text(preedit: string | null, cursor: number, anchor: number, mode: PreeditResetMode): void

    // Own virtual methods of Clutter-11.Clutter.InputMethod

    vfunc_filter_key_event(key: Event): boolean
    vfunc_focus_in(actor: InputFocus): void
    vfunc_focus_out(): void
    vfunc_reset(): void
    vfunc_set_cursor_location(rect: any): void
    vfunc_set_surrounding(text: string | null, cursor: number, anchor: number): void
    vfunc_update_content_hints(hint: InputContentHintFlags): void
    vfunc_update_content_purpose(purpose: InputContentPurpose): void

    // Own signals of Clutter-11.Clutter.InputMethod

    connect(sigName: "commit", callback: InputMethod.CommitSignalCallback): number
    connect_after(sigName: "commit", callback: InputMethod.CommitSignalCallback): number
    emit(sigName: "commit", object: string | null, ...args: any[]): void
    connect(sigName: "cursor-location-changed", callback: InputMethod.CursorLocationChangedSignalCallback): number
    connect_after(sigName: "cursor-location-changed", callback: InputMethod.CursorLocationChangedSignalCallback): number
    emit(sigName: "cursor-location-changed", object: any, ...args: any[]): void
    connect(sigName: "delete-surrounding", callback: InputMethod.DeleteSurroundingSignalCallback): number
    connect_after(sigName: "delete-surrounding", callback: InputMethod.DeleteSurroundingSignalCallback): number
    emit(sigName: "delete-surrounding", object: number, p0: number, ...args: any[]): void
    connect(sigName: "input-panel-state", callback: InputMethod.InputPanelStateSignalCallback): number
    connect_after(sigName: "input-panel-state", callback: InputMethod.InputPanelStateSignalCallback): number
    emit(sigName: "input-panel-state", object: InputPanelState, ...args: any[]): void
    connect(sigName: "request-surrounding", callback: InputMethod.RequestSurroundingSignalCallback): number
    connect_after(sigName: "request-surrounding", callback: InputMethod.RequestSurroundingSignalCallback): number
    emit(sigName: "request-surrounding", ...args: any[]): void
}

class InputMethod {

    // Own properties of Clutter-11.Clutter.InputMethod

    static name: string
}

interface Interval extends Scriptable {

    // Own properties of Clutter-11.Clutter.Interval

    /**
     * The final value of the interval.
     */
    final: any
    /**
     * The initial value of the interval.
     */
    initial: any
    /**
     * The type of the values in the interval.
     */
    readonly value_type: GObject.GType

    // Owm methods of Clutter-11.Clutter.Interval

    /**
     * Creates a copy of `interval`.
     * @returns the newly created #ClutterInterval
     */
    clone(): Interval
    /**
     * Computes the value between the `interval` boundaries given the
     * progress `factor`
     * 
     * Unlike clutter_interval_compute_value(), this function will
     * return a const pointer to the computed value
     * 
     * You should use this function if you immediately pass the computed
     * value to another function that makes a copy of it, like
     * g_object_set_property()
     * @param factor the progress factor, between 0 and 1
     * @returns a pointer to the computed value,   or %NULL if the computation was not successful
     */
    compute(factor: number): any
    /**
     * Computes the value between the `interval` boundaries given the
     * progress `factor` and copies it into `value`.
     * @param factor the progress factor, between 0 and 1
     * @returns %TRUE if the operation was successful
     */
    compute_value(factor: number): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Retrieves the final value of `interval` and copies
     * it into `value`.
     * 
     * The passed #GValue must be initialized to the value held by
     * the #ClutterInterval.
     */
    get_final_value(): /* value */ any
    /**
     * Retrieves the initial value of `interval` and copies
     * it into `value`.
     * 
     * The passed #GValue must be initialized to the value held by
     * the #ClutterInterval.
     */
    get_initial_value(): /* value */ any
    /**
     * Retrieves the #GType of the values inside `interval`.
     * @returns the type of the value, or G_TYPE_INVALID
     */
    get_value_type(): GObject.GType
    /**
     * Checks if the `interval` has a valid initial and final values.
     * @returns %TRUE if the #ClutterInterval has an initial and   final values, and %FALSE otherwise
     */
    is_valid(): boolean
    /**
     * Gets the pointer to the final value of `interval`
     * @returns the final value of the interval.   The value is owned by the #ClutterInterval and it should not be   modified or freed
     */
    peek_final_value(): any
    /**
     * Gets the pointer to the initial value of `interval`
     * @returns the initial value of the interval.   The value is owned by the #ClutterInterval and it should not be   modified or freed
     */
    peek_initial_value(): any
    /**
     * Sets the final value of `interval` to `value`. The value is
     * copied inside the #ClutterInterval.
     * @param value a #GValue
     */
    set_final(value: any): void
    /**
     * Sets the initial value of `interval` to `value`. The value is copied
     * inside the #ClutterInterval.
     * @param value a #GValue
     */
    set_initial(value: any): void
    /**
     * Validates the initial and final values of `interval` against
     * a #GParamSpec.
     * @param pspec a #GParamSpec
     * @returns %TRUE if the #ClutterInterval is valid, %FALSE otherwise
     */
    validate(pspec: any): boolean

    // Own virtual methods of Clutter-11.Clutter.Interval

    /**
     * Computes the value between the `interval` boundaries given the
     * progress `factor` and copies it into `value`.
     * @virtual 
     * @param factor the progress factor, between 0 and 1
     * @returns %TRUE if the operation was successful
     */
    vfunc_compute_value(factor: number): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Validates the initial and final values of `interval` against
     * a #GParamSpec.
     * @virtual 
     * @param pspec a #GParamSpec
     * @returns %TRUE if the #ClutterInterval is valid, %FALSE otherwise
     */
    vfunc_validate(pspec: any): boolean
}

/**
 * An object holding an interval of two values
 * 
 * #ClutterInterval is a simple object that can hold two values
 * defining an interval. #ClutterInterval can hold any value that
 * can be enclosed inside a #GValue.
 * 
 * Once a #ClutterInterval for a specific #GType has been instantiated
 * the #ClutterInterval:value-type property cannot be changed anymore.
 * 
 * #ClutterInterval starts with a floating reference; this means that
 * any object taking a reference on a #ClutterInterval instance should
 * also take ownership of the interval by using g_object_ref_sink().
 * 
 * #ClutterInterval can be subclassed to override the validation
 * and value computation.
 * @class 
 */
class Interval {

    // Own properties of Clutter-11.Clutter.Interval

    static name: string

    // Constructors of Clutter-11.Clutter.Interval

    /**
     * Creates a new #ClutterInterval of type `gtype,` between `initial`
     * and `final`.
     * 
     * This function is useful for language bindings.
     * @constructor 
     * @param gtype the type of the values in the interval
     * @param initial a #GValue holding the initial value of the interval
     * @param final a #GValue holding the final value of the interval
     * @returns the newly created #ClutterInterval
     */
    static new_with_values(gtype: GObject.GType, initial: any | null, final: any | null): Interval
}

interface KeyframeTransition extends Scriptable {

    // Owm methods of Clutter-11.Clutter.KeyframeTransition

    /**
     * Removes all key frames from `transition`.
     */
    clear(): void
    /**
     * Retrieves the details of the key frame at `index_` inside `transition`.
     * 
     * The `transition` must already have key frames set, and `index_` must be
     * smaller than the number of key frames.
     * @param index_ the index of the key frame
     */
    get_key_frame(index_: number): [ /* key */ number, /* mode */ AnimationMode, /* value */ any ]
    /**
     * Retrieves the number of key frames inside `transition`.
     * @returns the number of key frames
     */
    get_n_key_frames(): number
    /**
     * Sets the details of the key frame at `index_` inside `transition`.
     * 
     * The `transition` must already have a key frame at `index_,` and `index_`
     * must be smaller than the number of key frames inside `transition`.
     * @param index_ the index of the key frame
     * @param key the key of the key frame
     * @param mode the easing mode of the key frame
     * @param value a #GValue containing the value of the key frame
     */
    set_key_frame(index_: number, key: number, mode: AnimationMode, value: any): void
    /**
     * Sets the keys for each key frame inside `transition`.
     * 
     * If `transition` does not hold any key frame, `n_key_frames` key frames
     * will be created; if `transition` already has key frames, `key_frames` must
     * have at least as many elements as the number of key frames.
     * @param key_frames an array of keys between 0.0   and 1.0, one for each key frame
     */
    set_key_frames(key_frames: number[]): void
    /**
     * Sets the easing modes for each key frame inside `transition`.
     * 
     * If `transition` does not hold any key frame, `n_modes` key frames will
     * be created; if `transition` already has key frames, `modes` must have
     * at least as many elements as the number of key frames.
     * @param modes an array of easing modes, one for   each key frame
     */
    set_modes(modes: AnimationMode[]): void
    /**
     * Sets the values for each key frame inside `transition`.
     * 
     * If `transition` does not hold any key frame, `n_values` key frames will
     * be created; if `transition` already has key frames, `values` must have
     * at least as many elements as the number of key frames.
     * @param values an array of values, one for each   key frame
     */
    set_values(values: any[]): void
}

/**
 * Keyframe property transition
 * 
 * #ClutterKeyframeTransition allows animating a property by defining
 * "key frames": values at a normalized position on the transition
 * duration.
 * 
 * The #ClutterKeyframeTransition interpolates the value of the property
 * to which it's bound across these key values.
 * 
 * Setting up a #ClutterKeyframeTransition means providing the times,
 * values, and easing modes between these key frames, for instance:
 * 
 * ```c
 *   ClutterTransition *keyframe;
 * 
 *   keyframe = clutter_keyframe_transition_new ("opacity");
 *   clutter_transition_set_from (keyframe, G_TYPE_UINT, 255);
 *   clutter_transition_set_to (keyframe, G_TYPE_UINT, 0);
 *   clutter_keyframe_transition_set (CLUTTER_KEYFRAME_TRANSITION (keyframe),
 *                                    G_TYPE_UINT,
 *                                    1, /&ast; number of key frames &ast;/
 *                                    0.5, 128, CLUTTER_EASE_IN_OUT_CUBIC);
 * ```
 * 
 * The example above sets up a keyframe transition for the #ClutterActor:opacity
 * property of a #ClutterActor; the transition starts and sets the value of the
 * property to fully transparent; between the start of the transition and its mid
 * point, it will animate the property to half opacity, using an easy in/easy out
 * progress. Once the transition reaches the mid point, it will linearly fade the
 * actor out until it reaches the end of the transition.
 * 
 * The #ClutterKeyframeTransition will add an implicit key frame between the last
 * and the 1.0 value, to interpolate to the final value of the transition's
 * interval..
 * @class 
 */
class KeyframeTransition extends PropertyTransition {

    // Own properties of Clutter-11.Clutter.KeyframeTransition

    static name: string

    // Constructors of Clutter-11.Clutter.KeyframeTransition

    /**
     * Creates a new #ClutterKeyframeTransition for `property_name`.
     * @constructor 
     * @param property_name the property to animate
     * @returns the newly allocated   #ClutterKeyframeTransition instance. Use g_object_unref() when   done to free its resources.
     */
    constructor(property_name: string | null) 
    /**
     * Creates a new #ClutterKeyframeTransition for `property_name`.
     * @constructor 
     * @param property_name the property to animate
     * @returns the newly allocated   #ClutterKeyframeTransition instance. Use g_object_unref() when   done to free its resources.
     */
    static new(property_name: string | null): KeyframeTransition

    // Overloads of new

    /**
     * Creates a new #ClutterPropertyTransition.
     * @constructor 
     * @param property_name a property of `animatable,` or %NULL
     * @returns the newly created #ClutterPropertyTransition.   Use g_object_unref() when done
     */
    static new(property_name: string | null): PropertyTransition
    /**
     * Creates a new #ClutterTimeline with a duration of `duration_ms` milli seconds.
     * @constructor 
     * @param duration_ms Duration of the timeline in milliseconds
     * @returns the newly created #ClutterTimeline instance. Use   [method@GObject.Object.unref] when done using it
     */
    static new(duration_ms: number): Timeline

    // Conflicting static methods

    static new_for_actor(...args: any[]): any
}

module Keymap {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        ($obj: Keymap): void
    }

}

interface Keymap {

    // Own properties of Clutter-11.Clutter.Keymap

    readonly caps_lock_state: boolean
    readonly num_lock_state: boolean

    // Own fields of Clutter-11.Clutter.Keymap

    parent_instance: any

    // Owm methods of Clutter-11.Clutter.Keymap

    get_caps_lock_state(): boolean
    get_direction(): Pango.Direction
    get_num_lock_state(): boolean

    // Own virtual methods of Clutter-11.Clutter.Keymap

    vfunc_get_direction(): Pango.Direction

    // Own signals of Clutter-11.Clutter.Keymap

    connect(sigName: "state-changed", callback: Keymap.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: Keymap.StateChangedSignalCallback): number
    emit(sigName: "state-changed", ...args: any[]): void
}

class Keymap {

    // Own properties of Clutter-11.Clutter.Keymap

    static name: string
}

interface LayerNode {
}

class LayerNode extends PaintNode {

    // Own properties of Clutter-11.Clutter.LayerNode

    static name: string

    // Constructors of Clutter-11.Clutter.LayerNode

    constructor(projection: any, viewport: any, width: number, height: number, opacity: number) 
    static new(projection: any, viewport: any, width: number, height: number, opacity: number): LayerNode
    /**
     * Creates a new #ClutterLayerNode that will redirect drawing at
     * `framebuffer`. It will then use `pipeline` to paint the stored
     * operations.
     * 
     * When using this constructor, the caller is reponsible for setting
     * up `framebuffer,` including its modelview and projection matrices,
     * and the viewport, and the `pipeline` as well.
     * @constructor 
     * @param framebuffer a #CoglFramebuffer
     * @param pipeline a #CoglPipeline
     * @returns the newly created #ClutterLayerNode.   Use clutter_paint_node_unref() when done.
     */
    static new_to_framebuffer(framebuffer: Cogl.Framebuffer, pipeline: Cogl.Pipeline): LayerNode
}

module LayoutManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `layout-changed`
     */
    interface LayoutChangedSignalCallback {
        ($obj: LayoutManager): void
    }

}

interface LayoutManager {

    // Owm methods of Clutter-11.Clutter.LayoutManager

    /**
     * Allocates the children of `container` given an area
     * 
     * See also clutter_actor_allocate()
     * @param container the #ClutterContainer using `manager`
     * @param allocation the #ClutterActorBox containing the allocated area   of `container`
     */
    allocate(container: Container, allocation: ActorBox): void
    /**
     * Gets a property on the #ClutterLayoutMeta created by `manager` and
     * attached to a child of `container`
     * 
     * The #GValue must already be initialized to the type of the property
     * and has to be unset with g_value_unset() after extracting the real
     * value out of it
     * @param container a #ClutterContainer using `manager`
     * @param actor a #ClutterActor child of `container`
     * @param property_name the name of the property to get
     * @param value a #GValue with the value of the property to get
     */
    child_get_property(container: Container, actor: Actor, property_name: string | null, value: any): void
    /**
     * Sets a property on the #ClutterLayoutMeta created by `manager` and
     * attached to a child of `container`
     * @param container a #ClutterContainer using `manager`
     * @param actor a #ClutterActor child of `container`
     * @param property_name the name of the property to set
     * @param value a #GValue with the value of the property to set
     */
    child_set_property(container: Container, actor: Actor, property_name: string | null, value: any): void
    /**
     * Retrieves the #GParamSpec for the layout property `name` inside
     * the #ClutterLayoutMeta sub-class used by `manager`
     * @param name the name of the property
     * @returns a #GParamSpec describing the property,   or %NULL if no property with that name exists. The returned   #GParamSpec is owned by the layout manager and should not be   modified or freed
     */
    find_child_property(name: string | null): any
    /**
     * Retrieves the #ClutterLayoutMeta that the layout `manager` associated
     * to the `actor` child of `container,` eventually by creating one if the
     * #ClutterLayoutManager supports layout properties
     * @param container a #ClutterContainer using `manager`
     * @param actor a #ClutterActor child of `container`
     * @returns a #ClutterLayoutMeta, or %NULL if the   #ClutterLayoutManager does not have layout properties. The returned   layout meta instance is owned by the #ClutterLayoutManager and it   should not be unreferenced
     */
    get_child_meta(container: Container, actor: Actor): LayoutMeta
    /**
     * Computes the minimum and natural heights of the `container` according
     * to `manager`.
     * 
     * See also clutter_actor_get_preferred_height()
     * @param container the #ClutterContainer using `manager`
     * @param for_width the width for which the height should be computed, or -1
     */
    get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number, /* nat_height_p */ number ]
    /**
     * Computes the minimum and natural widths of the `container` according
     * to `manager`.
     * 
     * See also clutter_actor_get_preferred_width()
     * @param container the #ClutterContainer using `manager`
     * @param for_height the height for which the width should be computed, or -1
     */
    get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number, /* nat_width_p */ number ]
    /**
     * Emits the #ClutterLayoutManager::layout-changed signal on `manager`
     * 
     * This function should only be called by implementations of the
     * #ClutterLayoutManager class
     */
    layout_changed(): void
    /**
     * Retrieves all the `GParamSpec`s for the layout properties
     * stored inside the #ClutterLayoutMeta sub-class used by `manager`
     * @returns the newly-allocated,   %NULL-terminated array of `GParamSpec`s. Use g_free() to free the   resources allocated for the array
     */
    list_child_properties(): any[]
    /**
     * If the #ClutterLayoutManager sub-class allows it, allow
     * adding a weak reference of the `container` using `manager`
     * from within the layout manager
     * 
     * The layout manager should not increase the reference
     * count of the `container`
     * @param container a #ClutterContainer using `manager`
     */
    set_container(container: Container | null): void

    // Own virtual methods of Clutter-11.Clutter.LayoutManager

    /**
     * Allocates the children of `container` given an area
     * 
     * See also clutter_actor_allocate()
     * @virtual 
     * @param container the #ClutterContainer using `manager`
     * @param allocation the #ClutterActorBox containing the allocated area   of `container`
     */
    vfunc_allocate(container: Container, allocation: ActorBox): void
    vfunc_get_child_meta_type(): GObject.GType
    /**
     * Computes the minimum and natural heights of the `container` according
     * to `manager`.
     * 
     * See also clutter_actor_get_preferred_height()
     * @virtual 
     * @param container the #ClutterContainer using `manager`
     * @param for_width the width for which the height should be computed, or -1
     */
    vfunc_get_preferred_height(container: Container, for_width: number): [ /* min_height_p */ number, /* nat_height_p */ number ]
    /**
     * Computes the minimum and natural widths of the `container` according
     * to `manager`.
     * 
     * See also clutter_actor_get_preferred_width()
     * @virtual 
     * @param container the #ClutterContainer using `manager`
     * @param for_height the height for which the width should be computed, or -1
     */
    vfunc_get_preferred_width(container: Container, for_height: number): [ /* min_width_p */ number, /* nat_width_p */ number ]
    /**
     * Emits the #ClutterLayoutManager::layout-changed signal on `manager`
     * 
     * This function should only be called by implementations of the
     * #ClutterLayoutManager class
     * @virtual 
     */
    vfunc_layout_changed(): void
    /**
     * If the #ClutterLayoutManager sub-class allows it, allow
     * adding a weak reference of the `container` using `manager`
     * from within the layout manager
     * 
     * The layout manager should not increase the reference
     * count of the `container`
     * @virtual 
     * @param container a #ClutterContainer using `manager`
     */
    vfunc_set_container(container: Container | null): void

    // Own signals of Clutter-11.Clutter.LayoutManager

    connect(sigName: "layout-changed", callback: LayoutManager.LayoutChangedSignalCallback): number
    connect_after(sigName: "layout-changed", callback: LayoutManager.LayoutChangedSignalCallback): number
    emit(sigName: "layout-changed", ...args: any[]): void
}

/**
 * Layout managers base class
 * 
 * #ClutterLayoutManager is a base abstract class for layout managers. A
 * layout manager implements the layouting policy for a composite or a
 * container actor: it controls the preferred size of the actor to which
 * it has been paired, and it controls the allocation of its children.
 * 
 * Any composite or container #ClutterActor subclass can delegate the
 * layouting of its children to a #ClutterLayoutManager.
 * 
 * Clutter provides some simple #ClutterLayoutManager sub-classes, like
 * #ClutterFlowLayout and #ClutterBinLayout.
 * 
 * ## Implementing a ClutterLayoutManager
 * The implementation of a layout manager does not differ from  the
 * implementation of the size requisition and allocation bits of
 * #ClutterActor, so you should read the relative documentation
 * for subclassing #ClutterActor.
 * 
 * The layout manager implementation can hold a back pointer to the
 * #ClutterContainer by implementing the #ClutterLayoutManagerClass.set_container()
 * virtual function. The layout manager should not hold a real reference (i.e.
 * call g_object_ref()) on the container actor, to avoid reference cycles.
 * 
 * If a layout manager has properties affecting the layout policies then it should
 * emit the #ClutterLayoutManager::layout-changed signal on itself by using the
 * clutter_layout_manager_layout_changed() function whenever one of these properties
 * changes.
 * 
 * ## Layout Properties
 * 
 * If a layout manager has layout properties, that is properties that
 * should exist only as the result of the presence of a specific (layout
 * manager, container actor, child actor) combination, and it wishes to store
 * those properties inside a #ClutterLayoutMeta, then it should override the
 * #ClutterLayoutManagerClass.get_child_meta_type() virtual function to return
 * the #GType of the #ClutterLayoutMeta sub-class used to store the layout
 * properties; optionally, the #ClutterLayoutManager sub-class might also
 * override the #ClutterLayoutManagerClass.create_child_meta() virtual function
 * to control how the #ClutterLayoutMeta instance is created, otherwise the
 * default implementation will be equivalent to:
 * 
 * ```c
 *  ClutterLayoutManagerClass *klass;
 *  GType meta_type;
 * 
 *  klass = CLUTTER_LAYOUT_MANAGER_GET_CLASS (manager);
 *  meta_type = klass->get_child_meta_type (manager);
 * 
 *  return g_object_new (meta_type,
 *                       "manager", manager,
 *                       "container", container,
 *                       "actor", actor,
 *                       NULL);
 * ```
 * 
 * Where `manager` is the  #ClutterLayoutManager, `container` is the
 * #ClutterContainer using the #ClutterLayoutManager, and `actor` is
 * the #ClutterActor child of the #ClutterContainer.
 * 
 * ## Using ClutterLayoutManager with ClutterScript
 * 
 * #ClutterLayoutManager instances can be created in the same way
 * as other objects in #ClutterScript; properties can be set using the
 * common syntax.
 * 
 * Layout properties can be set on children of a container with
 * a #ClutterLayoutManager using the `layout::` modifier on the property
 * name, for instance:
 * 
 * ```json
 * {
 *   "type" : "ClutterActor",
 *   "layout-manager" : { "type" : "ClutterGridLayout" },
 *   "children" : [
 *     {
 *       "type" : "ClutterText",
 *       "text" : "Some text",
 * 
 *       "layout::row" : 0,
 *       "layout::column" : 0,
 *       "layout::x-align" : "left",
 *       "layout::y-align" : "center",
 *       "layout::x-expand" : true,
 *       "layout::y-expand" : true
 *     },
 *     {
 *       "type" : "ClutterText",
 *       "text" : "Some more text",
 * 
 *       "layout::row" : 0,
 *       "layout::column" : 1,
 *       "layout::x-align" : "right",
 *       "layout::y-align" : "center",
 *       "layout::x-expand" : true,
 *       "layout::y-expand" : true
 *     }
 *   ]
 * }
 * ```
 * @class 
 */
class LayoutManager {

    // Own properties of Clutter-11.Clutter.LayoutManager

    static name: string
}

interface LayoutMeta {

    // Own fields of Clutter-11.Clutter.LayoutMeta

    manager: LayoutManager

    // Owm methods of Clutter-11.Clutter.LayoutMeta

    /**
     * Retrieves the actor wrapped by `data`
     * @returns a #ClutterLayoutManager
     */
    get_manager(): LayoutManager
}

/**
 * Wrapper for actors inside a layout manager
 * 
 * #ClutterLayoutMeta is a wrapper object created by [class`LayoutManager]`
 * implementations in order to store child-specific data and properties.
 * 
 * A #ClutterLayoutMeta wraps a [class`Actor]` inside a [iface`Container]`
 * using a [class`LayoutManager]`.
 * @class 
 */
class LayoutMeta extends ChildMeta {

    // Own properties of Clutter-11.Clutter.LayoutMeta

    static name: string
}

interface OffscreenEffect {

    // Owm methods of Clutter-11.Clutter.OffscreenEffect

    /**
     * Calls the [vfunc`OffscreenEffect`.create_texture] virtual function of the `effect`
     * @param width the minimum width of the target texture
     * @param height the minimum height of the target texture
     * @returns a handle to a Cogl texture, or   %NULL. The returned handle has its reference   count increased.
     */
    create_texture(width: number, height: number): Cogl.Handle
    /**
     * Retrieves the pipeline used as a render target for the offscreen
     * buffer created by `effect`
     * 
     * You should only use the returned [class`Cogl`.Pipeline] when painting. The
     * returned pipeline might change between different frames.
     * @returns a #CoglPipeline. The   pipeline is owned by Clutter and it should not be modified   or freed
     */
    get_pipeline(): Cogl.Pipeline | null
    /**
     * Retrieves the size of the offscreen buffer used by `effect` to
     * paint the actor to which it has been applied.
     * 
     * This function should only be called by #ClutterOffscreenEffect
     * implementations, from within the [vfunc`OffscreenEffect`.paint_target]
     * virtual function.
     * @returns %TRUE if the offscreen buffer has a valid size,   and %FALSE otherwise
     */
    get_target_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Retrieves the texture used as a render target for the offscreen
     * buffer created by `effect`
     * 
     * You should only use the returned texture when painting. The texture
     * may change after [vfunc`Effect`.pre_paint] is called so the effect
     * implementation should update any references to the texture after
     * chaining-up to the parent's pre_paint implementation. This can be
     * used instead of [method`OffscreenEffect`.get_texture] when the
     * effect subclass wants to paint using its own material.
     * @returns a #CoglHandle or %NULL. The   returned texture is owned by Clutter and it should not be   modified or freed
     */
    get_texture(): Cogl.Handle
    /**
     * Calls the [vfunc`OffscreenEffect`.paint_target] virtual function of the `effect`
     * @param node a #ClutterPaintNode
     * @param paint_context a #ClutterPaintContext
     */
    paint_target(node: PaintNode, paint_context: PaintContext): void

    // Own virtual methods of Clutter-11.Clutter.OffscreenEffect

    /**
     * Calls the [vfunc`OffscreenEffect`.create_texture] virtual function of the `effect`
     * @virtual 
     * @param width the minimum width of the target texture
     * @param height the minimum height of the target texture
     * @returns a handle to a Cogl texture, or   %NULL. The returned handle has its reference   count increased.
     */
    vfunc_create_texture(width: number, height: number): Cogl.Handle
    /**
     * Calls the [vfunc`OffscreenEffect`.paint_target] virtual function of the `effect`
     * @virtual 
     * @param node a #ClutterPaintNode
     * @param paint_context a #ClutterPaintContext
     */
    vfunc_paint_target(node: PaintNode, paint_context: PaintContext): void
}

/**
 * Base class for effects using offscreen buffers
 * 
 * #ClutterOffscreenEffect is an abstract class that can be used by
 * [class`Effect]` sub-classes requiring access to an offscreen buffer.
 * 
 * Some effects, like the fragment shader based effects, can only use GL
 * textures, and in order to apply those effects to any kind of actor they
 * require that all drawing operations are applied to an offscreen framebuffer
 * that gets redirected to a texture.
 * 
 * #ClutterOffscreenEffect provides all the heavy-lifting for creating the
 * offscreen framebuffer, the redirection and the final paint of the texture on
 * the desired stage.
 * 
 * 
 * ## Implementing a ClutterOffscreenEffect
 * 
 * Creating a sub-class of #ClutterOffscreenEffect requires, in case
 * of overriding the [class`Effect]` virtual functions, to chain up to the
 * #ClutterOffscreenEffect's implementation.
 * 
 * On top of the [class`Effect]`'s virtual functions,
 * #ClutterOffscreenEffect also provides a [vfunc`OffscreenEffect`.paint_target]
 * function, which encapsulates the effective painting of the texture that
 * contains the result of the offscreen redirection.
 * 
 * The size of the target material is defined to be as big as the
 * transformed size of the [class`Actor]` using the offscreen effect.
 * Sub-classes of #ClutterOffscreenEffect can change the texture creation
 * code to provide bigger textures by overriding the
 * [vfunc`OffscreenEffect`.create_texture] virtual function; no chain up
 * to the #ClutterOffscreenEffect implementation is required in this
 * case.
 * 
 * ## Paint nodes
 * 
 * #ClutterOffscreenEffect generates the following paint node tree:
 * 
 * ```
 * Effect
 *  ├─────────┐
 * Layer   Pipeline
 *  │
 * Actor
 * ```
 * 
 * When the actor contents are cached, the generated paint node tree
 * looks like this:
 * 
 * ```
 * Effect
 *  │
 * Pipeline
 * ```
 * 
 * In both cases, the "Pipeline" node is created with the return value
 * of [vfunc`OffscreenEffect`.create_pipeline].
 * @class 
 */
class OffscreenEffect extends Effect {

    // Own properties of Clutter-11.Clutter.OffscreenEffect

    static name: string
}

interface PageTurnEffect {

    // Own properties of Clutter-11.Clutter.PageTurnEffect

    /**
     * The angle of the page rotation, in degrees, between 0.0 and 360.0
     */
    angle: number
    /**
     * The period of the page turn, between 0.0 (no curling) and
     * 1.0 (fully curled)
     */
    period: number
    /**
     * The radius of the page curl, in pixels
     */
    radius: number

    // Owm methods of Clutter-11.Clutter.PageTurnEffect

    /**
     * Retrieves the value set using [method`PageTurnEffect`.get_angle]
     * @returns the angle of the page curling
     */
    get_angle(): number
    /**
     * Retrieves the value set using [method`PageTurnEffect`.get_period]
     * @returns the period of the page curling
     */
    get_period(): number
    /**
     * Retrieves the value set using [method`PageTurnEffect`.set_radius]
     * @returns the radius of the page curling
     */
    get_radius(): number
    /**
     * Sets the angle of the page curling, in degrees
     * @param angle the angle of the page curl, in degrees
     */
    set_angle(angle: number): void
    /**
     * Sets the period of the page curling, between 0.0 (no curling)
     * and 1.0 (fully curled)
     * @param period the period of the page curl, between 0.0 and 1.0
     */
    set_period(period: number): void
    /**
     * Sets the radius of the page curling
     * @param radius the radius of the page curling, in pixels
     */
    set_radius(radius: number): void
}

/**
 * A page turning effect
 * 
 * A simple page turning effect
 * @class 
 */
class PageTurnEffect extends DeformEffect {

    // Own properties of Clutter-11.Clutter.PageTurnEffect

    static name: string

    // Constructors of Clutter-11.Clutter.PageTurnEffect

    /**
     * Creates a new #ClutterPageTurnEffect instance with the given parameters
     * @constructor 
     * @param period the period of the page curl, between 0.0 and 1.0
     * @param angle the angle of the page curl, between 0.0 and 360.0
     * @param radius the radius of the page curl, in pixels
     * @returns the newly created #ClutterPageTurnEffect
     */
    constructor(period: number, angle: number, radius: number) 
    /**
     * Creates a new #ClutterPageTurnEffect instance with the given parameters
     * @constructor 
     * @param period the period of the page curl, between 0.0 and 1.0
     * @param angle the angle of the page curl, between 0.0 and 360.0
     * @param radius the radius of the page curl, in pixels
     * @returns the newly created #ClutterPageTurnEffect
     */
    static new(period: number, angle: number, radius: number): PageTurnEffect
}

interface PaintNode {

    // Owm methods of Clutter-11.Clutter.PaintNode

    /**
     * Adds `child` to the list of children of `node`.
     * 
     * This function will acquire a reference on `child`.
     * @param child the child #ClutterPaintNode to add
     */
    add_child(child: PaintNode): void
    /**
     * Adds a rectangle region to the `node,` with multitexture coordinates.
     * @param rect a #ClutterActorBox
     * @param text_coords array of multitexture values
     * @param text_coords_len number of items of `text_coords`
     */
    add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void
    /**
     * Adds a rectangle region to the `node,` as described by the
     * passed `rect`.
     * @param rect a #ClutterActorBox
     */
    add_rectangle(rect: ActorBox): void
    /**
     * Adds a series of rectangles to `node`.
     * 
     * As a general rule for better performance its recommended to use this API
     * instead of calling clutter_paint_node_add_rectangle() separately for
     * multiple rectangles if all of the rectangles will be drawn together.
     * 
     * See cogl_framebuffer_draw_rectangles().
     * @param coords array of   coordinates containing groups of 4 float values: [x_1, y_1, x_2, y_2] that   are interpreted as two position coordinates; one for the top left of the   rectangle (x1, y1), and one for the bottom right of the rectangle   (x2, y2).
     */
    add_rectangles(coords: number[]): void
    /**
     * Adds a rectangle region to the `node,` with texture coordinates.
     * @param rect a #ClutterActorBox
     * @param x_1 the left X coordinate of the texture
     * @param y_1 the top Y coordinate of the texture
     * @param x_2 the right X coordinate of the texture
     * @param y_2 the bottom Y coordinate of the texture
     */
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void
    /**
     * Adds a series of rectangles to `node`.
     * 
     * The given texture coordinates should always be normalized such that
     * (0, 0) corresponds to the top left and (1, 1) corresponds to the
     * bottom right. To map an entire texture across the rectangle pass
     * in s_1=0, t_1=0, s_2=1, t_2=1.
     * 
     * See cogl_framebuffer_draw_textured_rectangles().
     * @param coords array containing   groups of 8 float values: [x_1, y_1, x_2, y_2, s_1, t_1, s_2, t_2]   that have the same meaning as the arguments for   cogl_framebuffer_draw_textured_rectangle().
     */
    add_texture_rectangles(coords: number[]): void
    /**
     * Retrieves the #CoglFramebuffer that `node` will draw
     * into. If `node` doesn't specify a custom framebuffer,
     * the first ancestor with a custom framebuffer will be
     * used.
     * @returns a #CoglFramebuffer or %NULL if no custom one is set.
     */
    get_framebuffer(): Cogl.Framebuffer
    /**
     * Paints the `node` using the class implementation, traversing
     * its children, if any.
     * @param paint_context 
     */
    paint(paint_context: PaintContext): void
    /**
     * Acquires a reference on `node`.
     * @returns the #ClutterPaintNode
     */
    ref(): PaintNode
    /**
     * Sets a user-readable `name` for `node`.
     * 
     * The `name` will be used for debugging purposes.
     * 
     * The `node` will intern `name` using g_intern_string(). If you have access to a
     * static string, use clutter_paint_node_set_static_name() instead.
     * @param name a string annotating the `node`
     */
    set_name(name: string | null): void
    /**
     * Releases a reference on `node`.
     */
    unref(): void
}

/**
 * Paint objects
 * 
 * #ClutterPaintNode is an element in the render graph.
 * 
 * The render graph contains all the elements that need to be painted by
 * Clutter when submitting a frame to the graphics system.
 * 
 * The render graph is distinct from the scene graph: the scene graph is
 * composed by actors, which can be visible or invisible; the scene graph
 * elements also respond to events. The render graph, instead, is only
 * composed by nodes that will be painted.
 * 
 * Each #ClutterActor can submit multiple `ClutterPaintNode`s to
 * the render graph.
 * @class 
 */
class PaintNode {

    // Own properties of Clutter-11.Clutter.PaintNode

    static name: string
}

module PanAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `pan`
     */
    interface PanSignalCallback {
        ($obj: PanAction, actor: Actor, is_interpolated: boolean): boolean
    }

    /**
     * Signal callback interface for `pan-stopped`
     */
    interface PanStoppedSignalCallback {
        ($obj: PanAction, actor: Actor): void
    }

}

interface PanAction {

    // Own properties of Clutter-11.Clutter.PanAction

    /**
     * The initial acceleration factor
     * 
     * The kinetic momentum measured at the time of releasing the pointer will
     * be multiplied by the factor specified by this property before being used
     * to generate interpolated ::pan events.
     */
    acceleration_factor: number
    /**
     * The rate at which the interpolated panning will decelerate in
     * 
     * #ClutterPanAction will emit interpolated ::pan events with decreasing
     * scroll deltas, using the rate specified by this property.
     */
    deceleration: number
    /**
     * Whether interpolated events emission is enabled.
     */
    interpolate: boolean
    /**
     * Constraints the panning action to the specified axis
     */
    pan_axis: PanAxis

    // Conflicting properties

    parent_instance: Action & ActorMeta & any

    // Owm methods of Clutter-11.Clutter.PanAction

    /**
     * Retrieves the initial acceleration factor for interpolated ::pan events.
     * @returns The initial acceleration factor for interpolated events.
     */
    get_acceleration_factor(): number
    /**
     * Retrieves the delta, in stage space, dependent on the current state
     * of the #ClutterPanAction, and respecting the constraint specified by the
     * [property`PanAction:`pan-axis] property.
     * @param point the touch point index, with 0 being the first touch   point received by the action
     * @returns the distance since last motion event4
     */
    get_constrained_motion_delta(point: number): [ /* returnType */ number, /* delta_x */ number, /* delta_y */ number ]
    /**
     * Retrieves the deceleration rate of interpolated ::pan events.
     * @returns The deceleration rate of the interpolated events.
     */
    get_deceleration(): number
    /**
     * Checks if the action should emit ::pan events even after releasing
     * the pointer during a panning gesture, to emulate some kind of
     * kinetic inertia.
     * @returns %TRUE if interpolated events emission is active.
     */
    get_interpolate(): boolean
    /**
     * Retrieves the coordinates, in stage space, of the latest interpolated
     * event, analogous to [method`GestureAction`.get_motion_coords].
     */
    get_interpolated_coords(): [ /* interpolated_x */ number, /* interpolated_y */ number ]
    /**
     * Retrieves the delta, in stage space, since the latest interpolated
     * event, analogous to [method`GestureAction`.get_motion_delta].
     * @returns the distance since the latest interpolated event
     */
    get_interpolated_delta(): [ /* returnType */ number, /* delta_x */ number, /* delta_y */ number ]
    /**
     * Retrieves the coordinates, in stage space, dependent on the current state
     * of the #ClutterPanAction. If it is inactive, both fields will be
     * set to 0. If it is panning by user action, the values will be equivalent
     * to those returned by [method`GestureAction`.get_motion_coords].
     * If it is interpolating with some form of kinetic scrolling, the values
     * will be equivalent to those returned by
     * [method`PanAction`.get_interpolated_coords]. This is a convenience
     * method designed to be used in replacement "pan" signal handlers.
     * @param point the touch point index, with 0 being the first touch   point received by the action
     */
    get_motion_coords(point: number): [ /* motion_x */ number, /* motion_y */ number ]
    /**
     * Retrieves the delta, in stage space, dependent on the current state
     * of the #ClutterPanAction. If it is inactive, both fields will be
     * set to 0. If it is panning by user action, the values will be equivalent
     * to those returned by [method`GestureAction`.get_motion_delta].
     * If it is interpolating with some form of kinetic scrolling, the values
     * will be equivalent to those returned by
     * [method`PanAction`.get_interpolated_delta]. This is a convenience
     * method designed to be used in replacement "pan" signal handlers.
     * @param point the touch point index, with 0 being the first touch   point received by the action
     */
    get_motion_delta(point: number): [ /* returnType */ number, /* delta_x */ number, /* delta_y */ number ]
    /**
     * Retrieves the axis constraint set by [method`PanAction`.set_pan_axis]
     * @returns the axis constraint
     */
    get_pan_axis(): PanAxis
    /**
     * Factor applied to the momentum velocity at the time of releasing the
     * pointer when generating interpolated ::pan events.
     * @param factor The acceleration factor
     */
    set_acceleration_factor(factor: number): void
    /**
     * Sets the deceleration rate of the interpolated ::pan events generated
     * after a pan gesture. This is approximately the value that the momentum
     * at the time of releasing the pointer is divided by every 60th of a second.
     * @param rate The deceleration rate
     */
    set_deceleration(rate: number): void
    /**
     * Sets whether the action should emit interpolated ::pan events
     * after the drag has ended, to emulate the gesture kinetic inertia.
     * @param should_interpolate whether to enable interpolated pan events
     */
    set_interpolate(should_interpolate: boolean): void
    /**
     * Restricts the panning action to a specific axis
     * @param axis the axis to constraint the panning to
     */
    set_pan_axis(axis: PanAxis): void

    // Own virtual methods of Clutter-11.Clutter.PanAction

    vfunc_pan_stopped(actor: Actor): void

    // Own signals of Clutter-11.Clutter.PanAction

    connect(sigName: "pan", callback: PanAction.PanSignalCallback): number
    connect_after(sigName: "pan", callback: PanAction.PanSignalCallback): number
    emit(sigName: "pan", actor: Actor, is_interpolated: boolean, ...args: any[]): void
    connect(sigName: "pan-stopped", callback: PanAction.PanStoppedSignalCallback): number
    connect_after(sigName: "pan-stopped", callback: PanAction.PanStoppedSignalCallback): number
    emit(sigName: "pan-stopped", actor: Actor, ...args: any[]): void
}

/**
 * Action for pan gestures
 * 
 * #ClutterPanAction is a sub-class of [class`GestureAction]` that implements
 * the logic for recognizing pan gestures.
 * 
 * The simplest usage of #ClutterPanAction consists in adding it to
 * a [class`Actor]` with a child and setting it as reactive; for instance,
 * the following code:
 * 
 * ```c
 *   clutter_actor_add_action (actor, clutter_pan_action_new ());
 *   clutter_actor_set_reactive (actor, TRUE);
 * ```
 * 
 * will automatically result in the actor children to be moved
 * when dragging.
 * @class 
 */
class PanAction extends GestureAction {

    // Own properties of Clutter-11.Clutter.PanAction

    static name: string

    // Constructors of Clutter-11.Clutter.PanAction

    /**
     * Creates a new #ClutterPanAction instance
     * @constructor 
     * @returns the newly created #ClutterPanAction
     */
    constructor() 
    /**
     * Creates a new #ClutterPanAction instance
     * @constructor 
     * @returns the newly created #ClutterPanAction
     */
    static new(): PanAction
}

interface ParamSpecColor {

    // Own fields of Clutter-11.Clutter.ParamSpecColor

    /**
     * default color value
     * @field 
     */
    default_value: Color
}

/**
 * A #GParamSpec subclass for defining properties holding
 * a #ClutterColor.
 * @class 
 */
class ParamSpecColor {

    // Own properties of Clutter-11.Clutter.ParamSpecColor

    static name: string
}

interface ParamSpecUnit {
}

class ParamSpecUnit {

    // Own properties of Clutter-11.Clutter.ParamSpecUnit

    static name: string
}

interface Path {

    // Own properties of Clutter-11.Clutter.Path

    description: string | null
    readonly length: number

    // Owm methods of Clutter-11.Clutter.Path

    /**
     * Add the nodes of the Cairo path to the end of `path`.
     * @param cpath a Cairo path
     */
    add_cairo_path(cpath: any): void
    /**
     * Adds a %CLUTTER_PATH_CLOSE type node to the path. This creates a
     * straight line from the last node to the last %CLUTTER_PATH_MOVE_TO
     * type node.
     */
    add_close(): void
    /**
     * Adds a %CLUTTER_PATH_CURVE_TO type node to the path. This causes
     * the actor to follow a bezier from the last node to (`x_3`, `y_3`) using
     * (`x_1`, `y_1`) and (`x_2`,`y_2`) as control points.
     * @param x_1 the x coordinate of the first control point
     * @param y_1 the y coordinate of the first control point
     * @param x_2 the x coordinate of the second control point
     * @param y_2 the y coordinate of the second control point
     * @param x_3 the x coordinate of the third control point
     * @param y_3 the y coordinate of the third control point
     */
    add_curve_to(x_1: number, y_1: number, x_2: number, y_2: number, x_3: number, y_3: number): void
    /**
     * Adds a %CLUTTER_PATH_LINE_TO type node to the path. This causes the
     * actor to move to the new coordinates in a straight line.
     * @param x the x coordinate
     * @param y the y coordinate
     */
    add_line_to(x: number, y: number): void
    /**
     * Adds a %CLUTTER_PATH_MOVE_TO type node to the path. This is usually
     * used as the first node in a path. It can also be used in the middle
     * of the path to cause the actor to jump to the new coordinate.
     * @param x the x coordinate
     * @param y the y coordinate
     */
    add_move_to(x: number, y: number): void
    /**
     * Adds `node` to the end of the path.
     * @param node a #ClutterPathNode
     */
    add_node(node: PathNode): void
    /**
     * Same as [method`Path`.add_curve_to] except the coordinates are
     * relative to the previous node.
     * @param x_1 the x coordinate of the first control point
     * @param y_1 the y coordinate of the first control point
     * @param x_2 the x coordinate of the second control point
     * @param y_2 the y coordinate of the second control point
     * @param x_3 the x coordinate of the third control point
     * @param y_3 the y coordinate of the third control point
     */
    add_rel_curve_to(x_1: number, y_1: number, x_2: number, y_2: number, x_3: number, y_3: number): void
    /**
     * Same as [method`Path`.add_line_to] except the coordinates are
     * relative to the previous node.
     * @param x the x coordinate
     * @param y the y coordinate
     */
    add_rel_line_to(x: number, y: number): void
    /**
     * Same as [method`Path`.add_move_to] except the coordinates are
     * relative to the previous node.
     * @param x the x coordinate
     * @param y the y coordinate
     */
    add_rel_move_to(x: number, y: number): void
    /**
     * Adds new nodes to the end of the path as described in `str`. The
     * format is a subset of the SVG path format. Each node is represented
     * by a letter and is followed by zero, one or three pairs of
     * coordinates. The coordinates can be separated by spaces or a
     * comma. The types are:
     * 
     *  - `M`: Adds a %CLUTTER_PATH_MOVE_TO node. Takes one pair of coordinates.
     *  - `L`: Adds a %CLUTTER_PATH_LINE_TO node. Takes one pair of coordinates.
     *  - `C`: Adds a %CLUTTER_PATH_CURVE_TO node. Takes three pairs of coordinates.
     *  - `z`: Adds a %CLUTTER_PATH_CLOSE node. No coordinates are needed.
     * 
     * The M, L and C commands can also be specified in lower case which
     * means the coordinates are relative to the previous node.
     * 
     * For example, to move an actor in a 100 by 100 pixel square centered
     * on the point 300,300 you could use the following path:
     * 
     * ```
     *   M 250,350 l 0 -100 L 350,250 l 0 100 z
     * ```
     * 
     * If the path description isn't valid %FALSE will be returned and no
     * nodes will be added.
     * @param str a string describing the new nodes
     * @returns %TRUE is the path description was valid or %FALSE otherwise.
     */
    add_string(str: string | null): boolean
    /**
     * Removes all nodes from the path.
     */
    clear(): void
    /**
     * Calls a function for each node of the path.
     * @param callback the function to call with each node
     */
    foreach(callback: PathCallback): void
    /**
     * Returns a newly allocated string describing the path in the same
     * format as used by [method`Path`.add_string].
     * @returns a string description of the path. Free with g_free().
     */
    get_description(): string | null
    /**
     * Retrieves an approximation of the total length of the path.
     * @returns the length of the path.
     */
    get_length(): number
    /**
     * Retrieves the number of nodes in the path.
     * @returns the number of nodes.
     */
    get_n_nodes(): number
    /**
     * Retrieves the node of the path indexed by `index`.
     * @param index_ the node number to retrieve
     */
    get_node(index_: number): /* node */ PathNode
    /**
     * Returns a #GSList of [struct`PathNode]`s.
     * 
     * The list should be freed with g_slist_free(). The nodes are owned
     * by the path and should not be freed. Altering the path may cause
     * the nodes in the list to become invalid so you should copy them
     * if you want to keep the list.
     * @returns a   list of nodes in the path.
     */
    get_nodes(): PathNode[]
    /**
     * The value in `progress` represents a position along the path where
     * 0.0 is the beginning and 1.0 is the end of the path. An
     * interpolated position is then stored in `position`.
     * @param progress a position along the path as a fraction of its length
     * @returns index of the node used to calculate the position.
     */
    get_position(progress: number): [ /* returnType */ number, /* position */ Knot ]
    /**
     * Inserts `node` into the path before the node at the given offset. If
     * `index_` is negative it will append the node to the end of the path.
     * @param index_ offset of where to insert the node
     * @param node the node to insert
     */
    insert_node(index_: number, node: PathNode): void
    /**
     * Removes the node at the given offset from the path.
     * @param index_ index of the node to remove
     */
    remove_node(index_: number): void
    /**
     * Replaces the node at offset `index_` with `node`.
     * @param index_ index to the existing node
     * @param node the replacement node
     */
    replace_node(index_: number, node: PathNode): void
    /**
     * Replaces all of the nodes in the path with nodes described by
     * `str`. See [method`Path`.add_string] for details of the format.
     * 
     * If the string is invalid then %FALSE is returned and the path is
     * unaltered.
     * @param str a string describing the path
     * @returns %TRUE is the path was valid, %FALSE otherwise.
     */
    set_description(str: string | null): boolean
    /**
     * Add the nodes of the ClutterPath to the path in the Cairo context.
     * @param cr a Cairo context
     */
    to_cairo_path(cr: any): void
}

/**
 * An object describing a path with straight lines and bezier curves.
 * 
 * A #ClutterPath contains a description of a path consisting of
 * straight lines and bezier curves.
 * 
 * The path consists of a series of nodes. Each node is one of the
 * following four types:
 * 
 *  - %CLUTTER_PATH_MOVE_TO, changes the position of the path to the
 *  given pair of coordinates. This is usually used as the first node
 *  of a path to mark the start position. If it is used in the middle
 *  of a path then the path will be disjoint and the actor will appear
 *  to jump to the new position when animated.
 *  - %CLUTTER_PATH_LINE_TO, creates a straight line from the previous
 *  point to the given point.
 *  - %CLUTTER_PATH_CURVE_TO, creates a bezier curve. The end of the
 *  last node is used as the first control point and the three
 *  subsequent coordinates given in the node as used as the other three.
 *  - %CLUTTER_PATH_CLOSE, creates a straight line from the last node to
 *  the last %CLUTTER_PATH_MOVE_TO node. This can be used to close a
 *  path so that it will appear as a loop when animated.
 * 
 * The first three types have the corresponding relative versions
 * %CLUTTER_PATH_REL_MOVE_TO, %CLUTTER_PATH_REL_LINE_TO and
 * %CLUTTER_PATH_REL_CURVE_TO. These are exactly the same except the
 * coordinates are given relative to the previous node instead of as
 * direct screen positions.
 * 
 * You can build a path using the node adding functions such as
 * [method`Path`.add_line_to]. Alternatively the path can be described
 * in a string using a subset of the SVG path syntax. See
 * [method`Path`.add_string] for details.
 * @class 
 */
class Path {

    // Own properties of Clutter-11.Clutter.Path

    static name: string

    // Constructors of Clutter-11.Clutter.Path

    /**
     * Creates a new #ClutterPath instance with no nodes.
     * @constructor 
     * @returns the newly created #ClutterPath
     */
    constructor() 
    /**
     * Creates a new #ClutterPath instance with no nodes.
     * @constructor 
     * @returns the newly created #ClutterPath
     */
    static new(): Path
    /**
     * Creates a new #ClutterPath instance with the nodes described in
     * `desc`. See [method`Path`.add_string] for details of the format of
     * the string.
     * @constructor 
     * @param desc a string describing the path
     * @returns the newly created #ClutterPath
     */
    static new_with_description(desc: string | null): Path
}

module PathConstraint {

    // Signal callback interfaces

    /**
     * Signal callback interface for `node-reached`
     */
    interface NodeReachedSignalCallback {
        ($obj: PathConstraint, actor: Actor, index: number): void
    }

}

interface PathConstraint {

    // Own properties of Clutter-11.Clutter.PathConstraint

    /**
     * The offset along the #ClutterPathConstraint:path, between -1.0 and 2.0.
     */
    offset: number
    /**
     * The #ClutterPath used to constrain the position of an actor.
     */
    path: Path

    // Owm methods of Clutter-11.Clutter.PathConstraint

    /**
     * Retrieves the offset along the [class`Path]` used by `constraint`.
     * @returns the offset
     */
    get_offset(): number
    /**
     * Retrieves a pointer to the #ClutterPath used by `constraint`.
     * @returns the #ClutterPath used by the   #ClutterPathConstraint, or %NULL. The returned #ClutterPath is owned   by the constraint and it should not be unreferenced
     */
    get_path(): Path
    /**
     * Sets the offset along the #ClutterPath used by `constraint`.
     * @param offset the offset along the path
     */
    set_offset(offset: number): void
    /**
     * Sets the `path` to be followed by the #ClutterPathConstraint.
     * 
     * The `constraint` will take ownership of the #ClutterPath passed to this
     * function.
     * @param path a #ClutterPath
     */
    set_path(path: Path | null): void

    // Own signals of Clutter-11.Clutter.PathConstraint

    connect(sigName: "node-reached", callback: PathConstraint.NodeReachedSignalCallback): number
    connect_after(sigName: "node-reached", callback: PathConstraint.NodeReachedSignalCallback): number
    emit(sigName: "node-reached", actor: Actor, index: number, ...args: any[]): void
}

/**
 * A constraint that follows a path
 * 
 * #ClutterPathConstraint is a simple constraint that modifies the allocation
 * of the [class`Actor]` to which it has been applied using a [class`Path]`.
 * 
 * By setting the [property`PathConstraint:`offset] property it is possible to
 * control how far along the path the [class`Actor]` should be..
 * @class 
 */
class PathConstraint extends Constraint {

    // Own properties of Clutter-11.Clutter.PathConstraint

    static name: string

    // Constructors of Clutter-11.Clutter.PathConstraint

    /**
     * Creates a new #ClutterPathConstraint with the given `path` and `offset`
     * @constructor 
     * @param path a #ClutterPath, or %NULL
     * @param offset the offset along the #ClutterPath
     * @returns the newly created #ClutterPathConstraint
     */
    constructor(path: Path | null, offset: number) 
    /**
     * Creates a new #ClutterPathConstraint with the given `path` and `offset`
     * @constructor 
     * @param path a #ClutterPath, or %NULL
     * @param offset the offset along the #ClutterPath
     * @returns the newly created #ClutterPathConstraint
     */
    static new(path: Path | null, offset: number): PathConstraint
}

interface PipelineNode {
}

class PipelineNode extends PaintNode {

    // Own properties of Clutter-11.Clutter.PipelineNode

    static name: string

    // Constructors of Clutter-11.Clutter.PipelineNode

    /**
     * Creates a new #ClutterPaintNode that will use the `pipeline` to
     * paint its contents.
     * 
     * This function will acquire a reference on the passed `pipeline,`
     * so it is safe to call cogl_object_unref() when it returns.
     * @constructor 
     * @param pipeline a Cogl pipeline state object, or %NULL
     * @returns the newly created #ClutterPaintNode.   Use clutter_paint_node_unref() when done.
     */
    constructor(pipeline: Cogl.Pipeline | null) 
    /**
     * Creates a new #ClutterPaintNode that will use the `pipeline` to
     * paint its contents.
     * 
     * This function will acquire a reference on the passed `pipeline,`
     * so it is safe to call cogl_object_unref() when it returns.
     * @constructor 
     * @param pipeline a Cogl pipeline state object, or %NULL
     * @returns the newly created #ClutterPaintNode.   Use clutter_paint_node_unref() when done.
     */
    static new(pipeline: Cogl.Pipeline | null): PipelineNode
}

interface PropertyTransition extends Scriptable {

    // Own properties of Clutter-11.Clutter.PropertyTransition

    /**
     * The name of the property of a [iface`Animatable]` to animate.
     */
    property_name: string | null

    // Owm methods of Clutter-11.Clutter.PropertyTransition

    /**
     * Retrieves the value of the [property`PropertyTransition:`property-name]
     * property.
     * @returns the name of the property being animated, or %NULL if   none is set. The returned string is owned by the @transition and   it should not be freed.
     */
    get_property_name(): string | null
    /**
     * Sets the [property`PropertyTransition:`property-name] property of `transition`.
     * @param property_name a property name
     */
    set_property_name(property_name: string | null): void
}

/**
 * Property transitions
 * 
 * #ClutterPropertyTransition is a specialized [class`Transition]` that
 * can be used to tween a property of a [iface`Animatable]` instance.
 * @class 
 */
class PropertyTransition extends Transition {

    // Own properties of Clutter-11.Clutter.PropertyTransition

    static name: string

    // Constructors of Clutter-11.Clutter.PropertyTransition

    /**
     * Creates a new #ClutterPropertyTransition.
     * @constructor 
     * @param property_name a property of `animatable,` or %NULL
     * @returns the newly created #ClutterPropertyTransition.   Use g_object_unref() when done
     */
    constructor(property_name: string | null) 
    /**
     * Creates a new #ClutterPropertyTransition.
     * @constructor 
     * @param property_name a property of `animatable,` or %NULL
     * @returns the newly created #ClutterPropertyTransition.   Use g_object_unref() when done
     */
    static new(property_name: string | null): PropertyTransition

    // Overloads of new

    /**
     * Creates a new #ClutterTimeline with a duration of `duration_ms` milli seconds.
     * @constructor 
     * @param duration_ms Duration of the timeline in milliseconds
     * @returns the newly created #ClutterTimeline instance. Use   [method@GObject.Object.unref] when done using it
     */
    static new(duration_ms: number): Timeline
    /**
     * Creates a new #ClutterPropertyTransition.
     * @constructor 
     * @param actor a #ClutterActor
     * @param property_name a property of `animatable,` or %NULL
     * @returns the newly created #ClutterPropertyTransition.   Use g_object_unref() when done
     */
    static new_for_actor(actor: Actor, property_name: string | null): PropertyTransition

    // Overloads of new_for_actor

    /**
     * Creates a new #ClutterTimeline with a duration of `duration` milli seconds.
     * @constructor 
     * @param actor The #ClutterActor the timeline is associated with
     * @param duration_ms Duration of the timeline in milliseconds
     * @returns the newly created #ClutterTimeline instance. Use   [method@GObject.Object.unref] when done using it
     */
    static new_for_actor(actor: Actor, duration_ms: number): Timeline
}

interface RootNode {
}

class RootNode extends PaintNode {

    // Own properties of Clutter-11.Clutter.RootNode

    static name: string

    // Constructors of Clutter-11.Clutter.RootNode

    constructor(framebuffer: Cogl.Framebuffer, clear_color: Color, clear_flags: Cogl.BufferBit) 
    static new(framebuffer: Cogl.Framebuffer, clear_color: Color, clear_flags: Cogl.BufferBit): RootNode
}

module RotateAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `rotate`
     */
    interface RotateSignalCallback {
        ($obj: RotateAction, actor: Actor, angle: number): boolean
    }

}

interface RotateAction {

    // Conflicting properties

    parent_instance: Action & ActorMeta & any

    // Own signals of Clutter-11.Clutter.RotateAction

    connect(sigName: "rotate", callback: RotateAction.RotateSignalCallback): number
    connect_after(sigName: "rotate", callback: RotateAction.RotateSignalCallback): number
    emit(sigName: "rotate", actor: Actor, angle: number, ...args: any[]): void
}

/**
 * Action to rotate an actor
 * 
 * #ClutterRotateAction is a sub-class of [class`GestureAction]` that implements
 * the logic for recognizing rotate gestures using two touch points.
 * @class 
 */
class RotateAction extends GestureAction {

    // Own properties of Clutter-11.Clutter.RotateAction

    static name: string

    // Constructors of Clutter-11.Clutter.RotateAction

    /**
     * Creates a new #ClutterRotateAction instance
     * @constructor 
     * @returns the newly created #ClutterRotateAction
     */
    constructor() 
    /**
     * Creates a new #ClutterRotateAction instance
     * @constructor 
     * @returns the newly created #ClutterRotateAction
     */
    static new(): RotateAction
}

interface Script {

    // Own properties of Clutter-11.Clutter.Script

    /**
     * The path of the currently parsed file. If [property`Script:`filename-set]
     * is %FALSE then the value of this property is undefined.
     */
    readonly filename: string | null
    /**
     * Whether the [property`Script:`filename] property is set. If this property
     * is %TRUE then the currently parsed data comes from a file, and the
     * file name is stored inside the [property`Script:`filename] property.
     */
    readonly filename_set: boolean
    /**
     * The translation domain, used to localize strings marked as translatable
     * inside a UI definition.
     * 
     * If [property`Script:`translation-domain] is set to %NULL, #ClutterScript
     * will use gettext(), otherwise g_dgettext() will be used.
     */
    translation_domain: string | null

    // Owm methods of Clutter-11.Clutter.Script

    /**
     * Adds `paths` to the list of search paths held by `script`.
     * 
     * The search paths are used by [method`Script`.lookup_filename], which
     * can be used to define search paths for the textures source file name
     * or other custom, file-based properties.
     * @param paths an array of strings containing   different search paths
     */
    add_search_paths(paths: string[]): void
    /**
     * Connects all the signals defined into a UI definition file to their
     * handlers.
     * 
     * This method invokes [method`Script`.connect_signals_full] internally
     * and uses  #GModule's introspective features (by opening the current
     * module's scope) to look at the application's symbol table.
     * 
     * Note that this function will not work if #GModule is not supported by
     * the platform Clutter is running on.
     * @param user_data data to be passed to the signal handlers, or %NULL
     */
    connect_signals(user_data: any | null): void
    /**
     * Connects all the signals defined into a UI definition file to their
     * handlers.
     * 
     * This function allows to control how the signal handlers are
     * going to be connected to their respective signals. It is meant
     * primarily for language bindings to allow resolving the function
     * names using the native API, but it can also be used on platforms
     * that do not support GModule.
     * 
     * Applications should use [method`Script`.connect_signals].
     * @param func signal connection function
     */
    connect_signals_full(func: ScriptConnectFunc): void
    /**
     * Ensure that every object defined inside `script` is correctly
     * constructed. You should rarely need to use this function.
     */
    ensure_objects(): void
    /**
     * Retrieves the object bound to `name`. This function does not increment
     * the reference count of the returned object.
     * @param name the name of the object to retrieve
     * @returns the named object, or %NULL if no object   with the given name was available
     */
    get_object(name: string | null): any
    /**
     * Retrieves the translation domain set using
     * [method`Script`.set_translation_domain].
     * @returns the translation domain, if any is set,   or %NULL
     */
    get_translation_domain(): string | null
    /**
     * Looks up a type by name, using the virtual function that
     * #ClutterScript has for that purpose. This function should
     * rarely be used.
     * @param type_name name of the type to look up
     * @returns the type for the requested type name, or   %G_TYPE_INVALID if not corresponding type was found.
     */
    get_type_from_name(type_name: string | null): GObject.GType
    /**
     * Retrieves all the objects created by `script`.
     * 
     * Note: this function does not increment the reference count of the
     * objects it returns.
     * @returns a list   of `GObject`s, or %NULL. The objects are owned by the   #ClutterScript instance. Use g_list_free() on the returned list when   done.
     */
    list_objects(): any[]
    /**
     * Loads the definitions from `data` into `script` and merges with
     * the currently loaded ones, if any.
     * @param data a buffer containing the definitions
     * @param length the length of the buffer, or -1 if `data` is a NUL-terminated   buffer
     * @returns on error, zero is returned and @error is set   accordingly. On success, the merge id for the UI definitions is   returned. You can use the merge id with [method@Script.unmerge_objects].
     */
    load_from_data(data: string | null, length: number): number
    /**
     * Loads the definitions from `filename` into `script` and merges with
     * the currently loaded ones, if any.
     * @param filename the full path to the definition file
     * @returns on error, zero is returned and @error is set   accordingly. On success, the merge id for the UI definitions is   returned. You can use the merge id with [method@Script.unmerge_objects].
     */
    load_from_file(filename: string | null): number
    /**
     * Loads the definitions from a resource file into `script` and merges with
     * the currently loaded ones, if any.
     * @param resource_path the resource path of the file to parse
     * @returns on error, zero is returned and @error is set   accordingly. On success, the merge id for the UI definitions is   returned. You can use the merge id with [method@Script.unmerge_objects].
     */
    load_from_resource(resource_path: string | null): number
    /**
     * Looks up `filename` inside the search paths of `script`. If `filename`
     * is found, its full path will be returned .
     * @param filename the name of the file to lookup
     * @returns the full path of @filename or %NULL if no path was   found.
     */
    lookup_filename(filename: string | null): string | null
    /**
     * Sets the translation domain for `script`.
     * @param domain the translation domain, or %NULL
     */
    set_translation_domain(domain: string | null): void
    /**
     * Unmerges the objects identified by `merge_id`.
     * @param merge_id merge id returned when loading a UI definition
     */
    unmerge_objects(merge_id: number): void

    // Own virtual methods of Clutter-11.Clutter.Script

    /**
     * Looks up a type by name, using the virtual function that
     * #ClutterScript has for that purpose. This function should
     * rarely be used.
     * @virtual 
     * @param type_name name of the type to look up
     * @returns the type for the requested type name, or   %G_TYPE_INVALID if not corresponding type was found.
     */
    vfunc_get_type_from_name(type_name: string | null): GObject.GType
}

/**
 * Loads a scene from UI definition data
 * 
 * #ClutterScript is an object used for loading and building parts or a
 * complete scenegraph from external definition data in forms of string
 * buffers or files.
 * 
 * The UI definition format is JSON, the JavaScript Object Notation as
 * described by RFC 4627. #ClutterScript can load a JSON data stream,
 * parse it and build all the objects defined into it. Each object must
 * have an "id" and a "type" properties defining the name to be used
 * to retrieve it from #ClutterScript with clutter_script_get_object(),
 * and the class type to be instantiated. Every other attribute will
 * be mapped to the class properties.
 * 
 * A #ClutterScript holds a reference on every object it creates from
 * the definition data, except for the stage. Every non-actor object
 * will be finalized when the #ClutterScript instance holding it will
 * be finalized, so they need to be referenced using g_object_ref() in
 * order for them to survive.
 * 
 * A simple object might be defined as:
 * 
 * ```json
 * {
 *   "id"     : "red-button",
 *   "type"   : "ClutterActor",
 *   "width"  : 100,
 *   "height" : 100,
 *   "background-color" : "&num;ff0000ff"
 * }
 * ```
 * 
 * This will produce a red [class`Actor]`, 100x100 pixels wide, and
 * with a ClutterScript id of "red-button"; it can be retrieved by calling:
 * 
 * ```c
 * ClutterActor *red_button;
 * 
 * red_button = CLUTTER_ACTOR (clutter_script_get_object (script, "red-button"));
 * ```
 * 
 * and then manipulated with the Clutter API. For every object created
 * using ClutterScript it is possible to check the id by calling
 * [method`Scriptable`.get_id].
 * 
 * Packing can be represented using the "children" member, and passing an
 * array of objects or ids of objects already defined (but not packed: the
 * packing rules of Clutter still apply, and an actor cannot be packed
 * in multiple containers without unparenting it in between).
 * 
 * Signal handlers can be defined inside a Clutter UI definition file and
 * then autoconnected to their respective signals using the
 * [method`Script`.connect_signals] function:
 * 
 * ```json
 *   ...
 *   "signals" : [
 *     { "name" : "button-press-event", "handler" : "on_button_press" },
 *     {
 *       "name" : "foo-signal",
 *       "handler" : "after_foo",
 *       "after" : true
 *     },
 *   ],
 *   ...
 * ```
 * 
 * Signal handler definitions must have a "name" and a "handler" members;
 * they can also have the "after" and "swapped" boolean members (for the
 * signal connection flags %G_CONNECT_AFTER and %G_CONNECT_SWAPPED
 * respectively) and the "object" string member for calling
 * g_signal_connect_object() instead of g_signal_connect().
 * 
 * Clutter reserves the following names, so classes defining properties
 * through the usual GObject registration process should avoid using these
 * names to avoid collisions:
 * 
 * ```
 *   "id"         := the unique name of a ClutterScript object
 *   "type"       := the class literal name, also used to infer the type
 *                   function
 *   "type_func"  := the GType function name, for non-standard classes
 *   "children"   := an array of names or objects to add as children
 *   "signals"    := an array of signal definitions to connect to an object
 *   "is-default" := a boolean flag used when defining the #ClutterStage;
 *                   if set to "true" the default stage will be used instead
 *                   of creating a new #ClutterStage instance
 * ```
 * @class 
 */
class Script {

    // Own properties of Clutter-11.Clutter.Script

    static name: string

    // Constructors of Clutter-11.Clutter.Script

    /**
     * Creates a new #ClutterScript instance. #ClutterScript can be used to load
     * objects definitions for scenegraph elements, like actors, or behavioural
     * elements, like timelines. The definitions must be encoded using the
     * JavaScript Object Notation (JSON) language.
     * @constructor 
     * @returns the newly created #ClutterScript instance. Use   g_object_unref() when done.
     */
    constructor() 
    /**
     * Creates a new #ClutterScript instance. #ClutterScript can be used to load
     * objects definitions for scenegraph elements, like actors, or behavioural
     * elements, like timelines. The definitions must be encoded using the
     * JavaScript Object Notation (JSON) language.
     * @constructor 
     * @returns the newly created #ClutterScript instance. Use   g_object_unref() when done.
     */
    static new(): Script
}

interface ScrollActor extends Atk.ImplementorIface, Animatable, Container, Scriptable {

    // Own properties of Clutter-11.Clutter.ScrollActor

    /**
     * The scrolling direction.
     */
    scroll_mode: ScrollMode

    // Owm methods of Clutter-11.Clutter.ScrollActor

    /**
     * Retrieves the [property`ScrollActor:`scroll-mode] property
     * @returns the scrolling mode
     */
    get_scroll_mode(): ScrollMode
    /**
     * Scrolls the contents of `actor` so that `point` is the new origin
     * of the visible area.
     * 
     * The coordinates of `point` must be relative to the `actor`.
     * 
     * This function will use the currently set easing state of the `actor`
     * to transition from the current scroll origin to the new one.
     * @param point a #graphene_point_t
     */
    scroll_to_point(point: any): void
    /**
     * Scrolls `actor` so that `rect` is in the visible portion.
     * @param rect a #ClutterRect
     */
    scroll_to_rect(rect: any): void
    /**
     * Sets the [property`ScrollActor:`scroll-mode] property.
     * @param mode a #ClutterScrollMode
     */
    set_scroll_mode(mode: ScrollMode): void
}

/**
 * An actor for displaying a portion of its children
 * 
 * #ClutterScrollActor is an actor that can be used to display a portion
 * of the contents of its children.
 * 
 * The extent of the area of a #ClutterScrollActor is defined by the size
 * of its children; the visible region of the children of a #ClutterScrollActor
 * is set by using [method`ScrollActor`.scroll_to_point] or by using
 * [method`ScrollActor`.scroll_to_rect] to define a point or a rectangle
 * acting as the origin, respectively.
 * 
 * #ClutterScrollActor does not provide pointer or keyboard event handling,
 * nor does it provide visible scroll handles.
 * 
 * See [scroll-actor.c](https://git.gnome.org/browse/clutter/tree/examples/scroll-actor.c?h=clutter-1.18)
 * for an example of how to use #ClutterScrollActor..
 * @class 
 */
class ScrollActor extends Actor {

    // Own properties of Clutter-11.Clutter.ScrollActor

    static name: string

    // Constructors of Clutter-11.Clutter.ScrollActor

    /**
     * Creates a new #ClutterScrollActor.
     * @constructor 
     * @returns The newly created #ClutterScrollActor   instance.
     */
    constructor() 
    /**
     * Creates a new #ClutterScrollActor.
     * @constructor 
     * @returns The newly created #ClutterScrollActor   instance.
     */
    static new(): ScrollActor
}

module Seat {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-added`
     */
    interface DeviceAddedSignalCallback {
        ($obj: Seat, object: InputDevice): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    interface DeviceRemovedSignalCallback {
        ($obj: Seat, object: InputDevice): void
    }

    /**
     * Signal callback interface for `is-unfocus-inhibited-changed`
     */
    interface IsUnfocusInhibitedChangedSignalCallback {
        ($obj: Seat): void
    }

    /**
     * Signal callback interface for `kbd-a11y-flags-changed`
     */
    interface KbdA11yFlagsChangedSignalCallback {
        ($obj: Seat, settings_flags: number, changed_mask: number): void
    }

    /**
     * Signal callback interface for `kbd-a11y-mods-state-changed`
     */
    interface KbdA11yModsStateChangedSignalCallback {
        ($obj: Seat, latched_mask: number, locked_mask: number): void
    }

    /**
     * Signal callback interface for `ptr-a11y-dwell-click-type-changed`
     */
    interface PtrA11yDwellClickTypeChangedSignalCallback {
        ($obj: Seat, click_type: PointerA11yDwellClickType): void
    }

    /**
     * Signal callback interface for `ptr-a11y-timeout-started`
     */
    interface PtrA11yTimeoutStartedSignalCallback {
        ($obj: Seat, device: InputDevice, timeout_type: PointerA11yTimeoutType, delay: number): void
    }

    /**
     * Signal callback interface for `ptr-a11y-timeout-stopped`
     */
    interface PtrA11yTimeoutStoppedSignalCallback {
        ($obj: Seat, device: InputDevice, timeout_type: PointerA11yTimeoutType, clicked: boolean): void
    }

}

interface Seat {

    // Own properties of Clutter-11.Clutter.Seat

    /**
     * The current touch-mode of the #ClutterSeat, it is set to %TRUE if the
     * requirements documented in [method`Seat`.get_touch_mode] are fulfilled.
     */
    readonly touch_mode: boolean

    // Own fields of Clutter-11.Clutter.Seat

    parent_instance: any

    // Owm methods of Clutter-11.Clutter.Seat

    bell_notify(): void
    /**
     * Creates a virtual input device.
     * @param device_type the type of the virtual device
     * @returns a newly created virtual device
     */
    create_virtual_device(device_type: InputDeviceType): VirtualInputDevice
    ensure_a11y_state(): void
    /**
     * Returns the logical keyboard
     * @returns the logical keyboard
     */
    get_keyboard(): InputDevice
    /**
     * Returns the seat keymap
     * @returns the seat keymap
     */
    get_keymap(): Keymap
    /**
     * Returns the logical pointer
     * @returns the logical pointer
     */
    get_pointer(): InputDevice
    /**
     * Gets the current pointer accessibility settings
     * @param settings a pointer to a #ClutterPointerA11ySettings
     */
    get_pointer_a11y_settings(settings: PointerA11ySettings): void
    /**
     * Gets the current touch-mode state of the #ClutterSeat `seat`.
     * The [property`Seat:`touch-mode] property is set to %TRUE if the following
     * requirements are fulfilled:
     * 
     *  - A touchscreen is available
     *  - A tablet mode switch, if present, is enabled
     * @returns %TRUE if the device is a tablet that doesn't have an external   keyboard attached, %FALSE otherwise.
     */
    get_touch_mode(): boolean
    handle_event_post(event: Event): boolean
    /**
     * Inhibits unsetting of the pointer focus-surface for the #ClutterSeat `seat,`
     * this allows to keep using the pointer even when it's hidden.
     * 
     * This property is refcounted, so [method`Seat`.uninhibit_unfocus] must be
     * called the exact same number of times as [method`Seat`.inhibit_unfocus]
     * was called before.
     */
    inhibit_unfocus(): void
    /**
     * Gets whether unsetting of the pointer focus-surface is inhibited
     * for the #ClutterSeat `seat`.
     * @returns %TRUE if unsetting is inhibited, %FALSE otherwise
     */
    is_unfocus_inhibited(): boolean
    /**
     * Returns the list of HW devices
     * @returns A list   of #ClutterInputDevice. The elements of the returned list are owned by   Clutter and may not be freed, the returned list should be freed using   g_list_free() when done.
     */
    list_devices(): InputDevice[]
    query_state(device: InputDevice, sequence: EventSequence, coords: any, modifiers: ModifierType): boolean
    /**
     * Sets the dwell click type
     * @param click_type type of click as #ClutterPointerA11yDwellClickType
     */
    set_pointer_a11y_dwell_click_type(click_type: PointerA11yDwellClickType): void
    /**
     * Sets the pointer accessibility settings
     * @param settings a pointer to a #ClutterPointerA11ySettings
     */
    set_pointer_a11y_settings(settings: PointerA11ySettings): void
    /**
     * Disables the inhibiting of unsetting of the pointer focus-surface
     * previously enabled by calling [method`Seat`.inhibit_unfocus].
     * 
     * This property is refcounted, so [method`Seat`.uninhibit_unfocus] must be
     * called the exact same number of times as [method`Seat`.inhibit_unfocus]
     * was called before.
     */
    uninhibit_unfocus(): void
    warp_pointer(x: number, y: number): void

    // Own virtual methods of Clutter-11.Clutter.Seat

    vfunc_bell_notify(): void
    /**
     * Creates a virtual input device.
     * @virtual 
     * @param device_type the type of the virtual device
     * @returns a newly created virtual device
     */
    vfunc_create_virtual_device(device_type: InputDeviceType): VirtualInputDevice
    /**
     * Returns the logical keyboard
     * @virtual 
     * @returns the logical keyboard
     */
    vfunc_get_keyboard(): InputDevice
    /**
     * Returns the seat keymap
     * @virtual 
     * @returns the seat keymap
     */
    vfunc_get_keymap(): Keymap
    /**
     * Returns the logical pointer
     * @virtual 
     * @returns the logical pointer
     */
    vfunc_get_pointer(): InputDevice
    vfunc_grab(time: number): GrabState
    vfunc_handle_event_post(event: Event): boolean
    vfunc_query_state(device: InputDevice, sequence: EventSequence, coords: any, modifiers: ModifierType): boolean
    vfunc_ungrab(time: number): void
    vfunc_warp_pointer(x: number, y: number): void

    // Own signals of Clutter-11.Clutter.Seat

    connect(sigName: "device-added", callback: Seat.DeviceAddedSignalCallback): number
    connect_after(sigName: "device-added", callback: Seat.DeviceAddedSignalCallback): number
    emit(sigName: "device-added", object: InputDevice, ...args: any[]): void
    connect(sigName: "device-removed", callback: Seat.DeviceRemovedSignalCallback): number
    connect_after(sigName: "device-removed", callback: Seat.DeviceRemovedSignalCallback): number
    emit(sigName: "device-removed", object: InputDevice, ...args: any[]): void
    connect(sigName: "is-unfocus-inhibited-changed", callback: Seat.IsUnfocusInhibitedChangedSignalCallback): number
    connect_after(sigName: "is-unfocus-inhibited-changed", callback: Seat.IsUnfocusInhibitedChangedSignalCallback): number
    emit(sigName: "is-unfocus-inhibited-changed", ...args: any[]): void
    connect(sigName: "kbd-a11y-flags-changed", callback: Seat.KbdA11yFlagsChangedSignalCallback): number
    connect_after(sigName: "kbd-a11y-flags-changed", callback: Seat.KbdA11yFlagsChangedSignalCallback): number
    emit(sigName: "kbd-a11y-flags-changed", settings_flags: number, changed_mask: number, ...args: any[]): void
    connect(sigName: "kbd-a11y-mods-state-changed", callback: Seat.KbdA11yModsStateChangedSignalCallback): number
    connect_after(sigName: "kbd-a11y-mods-state-changed", callback: Seat.KbdA11yModsStateChangedSignalCallback): number
    emit(sigName: "kbd-a11y-mods-state-changed", latched_mask: number, locked_mask: number, ...args: any[]): void
    connect(sigName: "ptr-a11y-dwell-click-type-changed", callback: Seat.PtrA11yDwellClickTypeChangedSignalCallback): number
    connect_after(sigName: "ptr-a11y-dwell-click-type-changed", callback: Seat.PtrA11yDwellClickTypeChangedSignalCallback): number
    emit(sigName: "ptr-a11y-dwell-click-type-changed", click_type: PointerA11yDwellClickType, ...args: any[]): void
    connect(sigName: "ptr-a11y-timeout-started", callback: Seat.PtrA11yTimeoutStartedSignalCallback): number
    connect_after(sigName: "ptr-a11y-timeout-started", callback: Seat.PtrA11yTimeoutStartedSignalCallback): number
    emit(sigName: "ptr-a11y-timeout-started", device: InputDevice, timeout_type: PointerA11yTimeoutType, delay: number, ...args: any[]): void
    connect(sigName: "ptr-a11y-timeout-stopped", callback: Seat.PtrA11yTimeoutStoppedSignalCallback): number
    connect_after(sigName: "ptr-a11y-timeout-stopped", callback: Seat.PtrA11yTimeoutStoppedSignalCallback): number
    emit(sigName: "ptr-a11y-timeout-stopped", device: InputDevice, timeout_type: PointerA11yTimeoutType, clicked: boolean, ...args: any[]): void
}

class Seat {

    // Own properties of Clutter-11.Clutter.Seat

    static name: string
}

interface Settings {

    // Own properties of Clutter-11.Clutter.Settings

    /**
     * A back pointer to the [class`Backend]`
     */
    readonly backend: Backend
    /**
     * The default distance that the cursor of a pointer device
     * should travel before a drag operation should start.
     */
    dnd_drag_threshold: number
    /**
     * The maximum distance, in pixels, between button-press events that
     * determines whether or not to increase the click count by 1.
     */
    double_click_distance: number
    /**
     * The time, in milliseconds, that should elapse between button-press
     * events in order to increase the click count by 1.
     */
    double_click_time: number
    /**
     * Whether or not to use antialiasing when rendering text; a value
     * of 1 enables it unconditionally; a value of 0 disables it
     * unconditionally; and -1 will use the system's default.
     */
    font_antialias: number
    /**
     * The DPI used when rendering text, as a value of 1024 * dots/inch.
     * 
     * If set to -1, the system's default will be used instead
     */
    font_dpi: number
    /**
     * The style of the hinting used when rendering text. Valid values
     * are:
     * 
     *   - hintnone
     *   - hintslight
     *   - hintmedium
     *   - hintfull
     */
    font_hint_style: string | null
    /**
     * Whether or not to use hinting when rendering text; a value of 1
     * unconditionally enables it; a value of 0 unconditionally disables
     * it; and a value of -1 will use the system's default.
     */
    font_hinting: number
    /**
     * The default font name that should be used by text actors, as
     * a string that can be passed to [func`Pango`.FontDescription.from_string].
     */
    font_name: string | null
    /**
     * The type of sub-pixel antialiasing used when rendering text. Valid
     * values are:
     * 
     *   - none
     *   - rgb
     *   - bgr
     *   - vrgb
     *   - vbgr
     */
    font_subpixel_order: string | null
    fontconfig_timestamp: number
    /**
     * Sets the minimum duration for a press to be recognized as a long press
     * gesture. The duration is expressed in milliseconds.
     * 
     * See also [property`ClickAction:`long-press-duration].
     */
    long_press_duration: number
    password_hint_time: number
    unscaled_font_dpi: number
}

/**
 * Settings configuration
 * 
 * Clutter depends on some settings to perform operations like detecting
 * multiple button press events, or font options to render text.
 * 
 * Usually, Clutter will strive to use the platform's settings in order
 * to be as much integrated as possible. It is, however, possible to
 * change these settings on a per-application basis, by using the
 * #ClutterSettings singleton object and setting its properties. It is
 * also possible, for toolkit developers, to retrieve the settings from
 * the #ClutterSettings properties when implementing new UI elements,
 * for instance the default font name.
 * @class 
 */
class Settings {

    // Own properties of Clutter-11.Clutter.Settings

    static name: string

    // Constructors of Clutter-11.Clutter.Settings

    /**
     * Retrieves the singleton instance of #ClutterSettings
     * @returns the instance of #ClutterSettings. The   returned object is owned by Clutter and it should not be unreferenced   directly
     */
    static get_default(): Settings
}

interface ShaderEffect {

    // Own properties of Clutter-11.Clutter.ShaderEffect

    /**
     * The type of shader that is used by the effect. This property
     * should be set by the constructor of #ClutterShaderEffect
     * sub-classes.
     */
    readonly shader_type: ShaderType

    // Owm methods of Clutter-11.Clutter.ShaderEffect

    /**
     * Retrieves a pointer to the program's handle
     * @returns a pointer to the program's handle,   or %NULL
     */
    get_program(): Cogl.Handle
    /**
     * Retrieves a pointer to the shader's handle
     * @returns a pointer to the shader's handle,   or %NULL
     */
    get_shader(): Cogl.Handle
    /**
     * Sets the source of the GLSL shader used by `effect`
     * 
     * This function should only be called by implementations of
     * the #ClutterShaderEffect class, and not by application code.
     * 
     * This function can only be called once; subsequent calls will
     * yield no result.
     * @param source the source of a GLSL shader
     * @returns %TRUE if the source was set
     */
    set_shader_source(source: string | null): boolean
    /**
     * Sets `value` as the payload for the uniform `name` inside the shader
     * effect
     * 
     * The #GType of the `value` must be one of: %G_TYPE_INT, for a single
     * integer value; %G_TYPE_FLOAT, for a single floating point value;
     * %CLUTTER_TYPE_SHADER_INT, for an array of integer values;
     * %CLUTTER_TYPE_SHADER_FLOAT, for an array of floating point values;
     * and %CLUTTER_TYPE_SHADER_MATRIX, for a matrix of floating point
     * values. It also accepts %G_TYPE_DOUBLE for compatibility with other
     * languages than C.
     * @param name the name of the uniform to set
     * @param value a #GValue with the value of the uniform to set
     */
    set_uniform_value(name: string | null, value: any): void

    // Own virtual methods of Clutter-11.Clutter.ShaderEffect

    vfunc_get_static_shader_source(): string | null
}

/**
 * Base class for shader effects
 * 
 * #ClutterShaderEffect is a class that implements all the plumbing for
 * creating [class`Effect]`s using GLSL shaders.
 * 
 * #ClutterShaderEffect creates an offscreen buffer and then applies the
 * GLSL shader (after checking whether the compilation and linking were
 * successful) to the buffer before painting it on screen.
 * 
 * 
 * ## Implementing a ClutterShaderEffect
 * 
 * Creating a sub-class of #ClutterShaderEffect requires the
 * overriding of the [vfunc`OffscreenEffect`.paint_target] virtual
 * function from the [class`OffscreenEffect]` class. It is also convenient
 * to implement the [vfunc`ShaderEffect`.get_static_shader_source]
 * virtual function in case you are planning to create more than one
 * instance of the effect.
 * 
 * The [vfunc`ShaderEffect`.get_static_shader_source]
 * function should return a copy of the shader source to use. This
 * function is only called once per subclass of #ClutterShaderEffect
 * regardless of how many instances of the effect are created. The
 * source for the shader is typically stored in a static const
 * string which is returned from this function via
 * g_strdup().
 * 
 * The [vfunc`OffscreenEffect`.paint_target] should set the
 * shader's uniforms if any. This is done by calling
 * [method`ShaderEffect`.set_uniform_value] or
 * [method`ShaderEffect`.set_uniform]. The sub-class should then
 * chain up to the #ClutterShaderEffect implementation.
 * 
 * ## Setting uniforms on a ClutterShaderEffect
 * 
 * The example below shows a typical implementation of the
 * [vfunc`ShaderEffect`.get_static_shader_source] and
 * [vfunc`OffscreenEffect`.paint_target] virtual functions
 * for a #ClutterShaderEffect subclass.
 * 
 * ```c
 *  static gchar *
 *  my_effect_get_static_shader_source (ClutterShaderEffect *effect)
 *  {
 *    // shader_source is set elsewhere
 *    return g_strdup (shader_source);
 *  }
 * 
 *  static gboolean
 *  my_effect_paint_target (ClutterOffscreenEffect *effect)
 *  {
 *    MyEffect *self = MY_EFFECT (effect);
 *    ClutterShaderEffect *shader = CLUTTER_SHADER_EFFECT (effect);
 *    ClutterEffectClass *parent_class;
 *    gfloat component_r, component_g, component_b;
 * 
 *    // the "tex" uniform is declared in the shader as:
 *    //
 *    //   uniform int tex;
 *    //
 *    // and it is passed a constant value of 0
 *    clutter_shader_effect_set_uniform (shader, "tex", G_TYPE_INT, 1, 0);
 * 
 *    // the "component" uniform is declared in the shader as:
 *    //
 *    //   uniform vec3 component;
 *    //
 *    // and it's defined to contain the normalized components
 *    // of a #ClutterColor
 *    component_r = self->color.red   / 255.0f;
 *    component_g = self->color.green / 255.0f;
 *    component_b = self->color.blue  / 255.0f;
 *    clutter_shader_effect_set_uniform (shader, "component",
 *                                       G_TYPE_FLOAT, 3,
 *                                       component_r,
 *                                       component_g,
 *                                       component_b);
 * 
 *    // chain up to the parent's implementation
 *    parent_class = CLUTTER_OFFSCREEN_EFFECT_CLASS (my_effect_parent_class);
 *    return parent_class->paint_target (effect);
 *  }
 * ```
 * @class 
 */
class ShaderEffect extends OffscreenEffect {

    // Own properties of Clutter-11.Clutter.ShaderEffect

    static name: string

    // Constructors of Clutter-11.Clutter.ShaderEffect

    /**
     * Creates a new #ClutterShaderEffect, to be applied to an actor using
     * [method`Actor`.add_effect].
     * 
     * The effect will be empty until [method`ShaderEffect`.set_shader_source]
     * is called.
     * @constructor 
     * @param shader_type the type of the shader, either %CLUTTER_FRAGMENT_SHADER,   or %CLUTTER_VERTEX_SHADER
     * @returns the newly created #ClutterShaderEffect.   Use g_object_unref() when done.
     */
    constructor(shader_type: ShaderType) 
    /**
     * Creates a new #ClutterShaderEffect, to be applied to an actor using
     * [method`Actor`.add_effect].
     * 
     * The effect will be empty until [method`ShaderEffect`.set_shader_source]
     * is called.
     * @constructor 
     * @param shader_type the type of the shader, either %CLUTTER_FRAGMENT_SHADER,   or %CLUTTER_VERTEX_SHADER
     * @returns the newly created #ClutterShaderEffect.   Use g_object_unref() when done.
     */
    static new(shader_type: ShaderType): ShaderEffect
}

interface ShaderFloat {
}

class ShaderFloat {

    // Own properties of Clutter-11.Clutter.ShaderFloat

    static name: string
}

interface ShaderInt {
}

class ShaderInt {

    // Own properties of Clutter-11.Clutter.ShaderInt

    static name: string
}

interface ShaderMatrix {
}

class ShaderMatrix {

    // Own properties of Clutter-11.Clutter.ShaderMatrix

    static name: string
}

interface SnapConstraint {

    // Own properties of Clutter-11.Clutter.SnapConstraint

    /**
     * The edge of the [class`Actor]` that should be snapped
     */
    from_edge: SnapEdge
    /**
     * The offset, in pixels, between [property`SnapConstraint:`from-edge]
     * and [property`SnapConstraint:`to-edge]
     */
    offset: number
    /**
     * The [class`Actor]` used as the source for the constraint
     */
    source: Actor
    /**
     * The edge of the [property`SnapConstraint:`source] that should be snapped
     */
    to_edge: SnapEdge

    // Owm methods of Clutter-11.Clutter.SnapConstraint

    /**
     * Retrieves the edges used by the `constraint`
     */
    get_edges(): [ /* from_edge */ SnapEdge, /* to_edge */ SnapEdge ]
    /**
     * Retrieves the offset set using [method`SnapConstraint`.set_offset]
     * @returns the offset, in pixels
     */
    get_offset(): number
    /**
     * Retrieves the [class`Actor]` set using [method`SnapConstraint`.set_source]
     * @returns a pointer to the source actor
     */
    get_source(): Actor
    /**
     * Sets the edges to be used by the `constraint`
     * 
     * The `from_edge` is the edge on the [class`Actor]` to which `constraint`
     * has been added. The `to_edge` is the edge of the [class`Actor]` inside
     * the [property`SnapConstraint:`source] property.
     * @param from_edge the edge on the actor
     * @param to_edge the edge on the source
     */
    set_edges(from_edge: SnapEdge, to_edge: SnapEdge): void
    /**
     * Sets the offset to be applied to the constraint
     * @param offset the offset to apply, in pixels
     */
    set_offset(offset: number): void
    /**
     * Sets the source [class`Actor]` for the constraint
     * @param source a #ClutterActor, or %NULL to unset the source
     */
    set_source(source: Actor | null): void
}

/**
 * A constraint snapping two actors together
 * 
 * #ClutterSnapConstraint is a constraint the snaps the edges of two
 * actors together, expanding the actor's allocation if necessary.
 * 
 * An offset can be applied to the constraint, to provide spacing.
 * @class 
 */
class SnapConstraint extends Constraint {

    // Own properties of Clutter-11.Clutter.SnapConstraint

    static name: string

    // Constructors of Clutter-11.Clutter.SnapConstraint

    /**
     * Creates a new #ClutterSnapConstraint that will snap a [class`Actor]`
     * to the `edge` of `source,` with the given `offset`.
     * @constructor 
     * @param source the #ClutterActor to use as the source of   the constraint, or %NULL
     * @param from_edge the edge of the actor to use in the constraint
     * @param to_edge the edge of `source` to use in the constraint
     * @param offset the offset to apply to the constraint, in pixels
     * @returns the newly created #ClutterSnapConstraint
     */
    constructor(source: Actor | null, from_edge: SnapEdge, to_edge: SnapEdge, offset: number) 
    /**
     * Creates a new #ClutterSnapConstraint that will snap a [class`Actor]`
     * to the `edge` of `source,` with the given `offset`.
     * @constructor 
     * @param source the #ClutterActor to use as the source of   the constraint, or %NULL
     * @param from_edge the edge of the actor to use in the constraint
     * @param to_edge the edge of `source` to use in the constraint
     * @param offset the offset to apply to the constraint, in pixels
     * @returns the newly created #ClutterSnapConstraint
     */
    static new(source: Actor | null, from_edge: SnapEdge, to_edge: SnapEdge, offset: number): SnapConstraint
}

module Stage {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    interface ActivateSignalCallback {
        ($obj: Stage): void
    }

    /**
     * Signal callback interface for `after-paint`
     */
    interface AfterPaintSignalCallback {
        ($obj: Stage, view: StageView): void
    }

    /**
     * Signal callback interface for `after-update`
     */
    interface AfterUpdateSignalCallback {
        ($obj: Stage, view: StageView): void
    }

    /**
     * Signal callback interface for `before-paint`
     */
    interface BeforePaintSignalCallback {
        ($obj: Stage, view: StageView): void
    }

    /**
     * Signal callback interface for `before-update`
     */
    interface BeforeUpdateSignalCallback {
        ($obj: Stage, view: StageView): void
    }

    /**
     * Signal callback interface for `deactivate`
     */
    interface DeactivateSignalCallback {
        ($obj: Stage): void
    }


    /**
     * Signal callback interface for `paint-view`
     */
    interface PaintViewSignalCallback {
        ($obj: Stage, view: StageView, redraw_clip: any): void
    }

    /**
     * Signal callback interface for `prepare-frame`
     */
    interface PrepareFrameSignalCallback {
        ($obj: Stage, view: StageView): void
    }


}

interface Stage extends Atk.ImplementorIface, Animatable, Container, Scriptable {

    // Own properties of Clutter-11.Clutter.Stage

    /**
     * The [class`Clutter`.Actor] that will receive key events from the underlying
     * windowing system.
     * 
     * If %NULL, the #ClutterStage will receive the events.
     */
    key_focus: Actor
    /**
     * The parameters used for the perspective projection from 3D
     * coordinates to 2D
     */
    readonly perspective: Perspective
    /**
     * The stage's title - usually displayed in stage windows title decorations.
     */
    title: string | null

    // Owm methods of Clutter-11.Clutter.Stage

    capture_view_into(view: StageView, rect: any, data: number, stride: number): void
    clear_stage_views(): void
    /**
     * Ensures that the GL viewport is updated with the current
     * stage window size.
     * 
     * This function will queue a redraw of `stage`.
     * 
     * This function should not be called by applications; it is used
     * when embedding a #ClutterStage into a toolkit with another
     * windowing system, like GTK+.
     */
    ensure_viewport(): void
    /**
     * Checks the scene at the coordinates `x` and `y` and returns a pointer
     * to the [class`Clutter`.Actor] at those coordinates. The result is the actor which
     * would be at the specified location on the next redraw, and is not
     * necessarily that which was there on the previous redraw. This allows the
     * function to perform chronologically correctly after any queued changes to
     * the scene, and even if nothing has been drawn.
     * 
     * By using `pick_mode` it is possible to control which actors will be
     * painted and thus available.
     * @param pick_mode how the scene graph should be painted
     * @param x X coordinate to check
     * @param y Y coordinate to check
     * @returns the actor at the specified coordinates,   if any
     */
    get_actor_at_pos(pick_mode: PickMode, x: number, y: number): Actor
    /**
     * Get the size of the framebuffer one must pass to
     * [method`Stage`.paint_to_buffer] or [method`Stage`.paint_to_framebuffer]
     * would be used with the same `rect`.
     * @param rect a #cairo_rectangle_int_t
     * @returns %TRUE if the size has been retrieved, %FALSE otherwise.
     */
    get_capture_final_size(rect: any): [ /* returnType */ boolean, /* out_width */ number, /* out_height */ number, /* out_scale */ number ]
    /**
     * Retrieves the [class`Clutter`.Actor] underneath the pointer or touch point
     * of `device` and `sequence`.
     * @param device a #ClutterInputDevice
     * @param sequence an optional #ClutterEventSequence
     * @returns a pointer to the #ClutterActor or %NULL
     */
    get_device_actor(device: InputDevice, sequence: EventSequence | null): Actor | null
    /**
     * Retrieves the current focus actor for an event. This is
     * the key focus for key events and other events directed
     * to the key focus, or the actor directly under the
     * coordinates of a device or touch sequence.
     * 
     * The actor is looked up at the time of calling this function,
     * and may differ from the actor that the stage originally
     * delivered the event to.
     * @param event an event received on the stage
     * @returns a pointer to the #ClutterActor or %NULL
     */
    get_event_actor(event: Event): Actor | null
    get_frame_counter(): number
    /**
     * Gets the actor that currently holds a grab.
     * @returns The grabbing actor
     */
    get_grab_actor(): Actor | null
    /**
     * Retrieves the actor that is currently under key focus.
     * @returns the actor with key focus, or the stage
     */
    get_key_focus(): Actor
    /**
     * Retrieves the stage perspective.
     */
    get_perspective(): /* perspective */ Perspective
    /**
     * Gets the stage title.
     * @returns pointer to the title string for the stage. The returned string is owned by the actor and should not be modified or freed.
     */
    get_title(): string | null
    /**
     * Grabs input onto a certain actor. Events will be propagated as
     * usual inside its hierarchy.
     * @param actor The actor grabbing input
     * @returns an opaque #ClutterGrab handle, drop   with [method@Grab.dismiss]
     */
    grab(actor: Actor): Grab
    /**
     * Take a snapshot of the stage to a provided buffer.
     * @param rect a #cairo_rectangle_int_t
     * @param scale the scale
     * @param data a pointer to the data
     * @param stride stride of the image surface
     * @param format the pixel format
     * @param paint_flags the #ClutterPaintFlag
     * @returns %TRUE is the buffer has been paint successfully, %FALSE otherwise.
     */
    paint_to_buffer(rect: any, scale: number, data: Uint8Array, stride: number, format: Cogl.PixelFormat, paint_flags: PaintFlag): boolean
    /**
     * Take a snapshot of the stage to a #ClutterContent.
     * @param rect a #cairo_rectangle_int_t
     * @param scale the scale
     * @param paint_flags the #ClutterPaintFlag
     * @returns the #ClutterContent or %NULL on error.
     */
    paint_to_content(rect: any, scale: number, paint_flags: PaintFlag): Content
    paint_to_framebuffer(framebuffer: Cogl.Framebuffer, rect: any, scale: number, paint_flags: PaintFlag): void
    /**
     * Makes a screenshot of the stage in RGBA 8bit data, returns a
     * linear buffer with `width` * 4 as rowstride.
     * 
     * The alpha data contained in the returned buffer is driver-dependent,
     * and not guaranteed to hold any sensible value.
     * @param x x coordinate of the first pixel that is read from stage
     * @param y y coordinate of the first pixel that is read from stage
     * @param width Width dimension of pixels to be read, or -1 for the   entire stage width
     * @param height Height dimension of pixels to be read, or -1 for the   entire stage height
     * @returns a pointer to newly allocated memory with the buffer   or %NULL if the read failed. Use g_free() on the returned data   to release the resources it has allocated.
     */
    read_pixels(x: number, y: number, width: number, height: number): Uint8Array
    repick_device(device: InputDevice): void
    /**
     * Schedules a redraw of the #ClutterStage at the next optimal timestamp.
     */
    schedule_update(): void
    /**
     * Sets the key focus on `actor`. An actor with key focus will receive
     * all the key events. If `actor` is %NULL, the stage will receive
     * focus.
     * @param actor the actor to set key focus to, or %NULL
     */
    set_key_focus(actor: Actor | null): void
    set_minimum_size(width: number, height: number): void
    /**
     * Sets the stage title.
     * @param title A utf8 string for the stage windows title.
     */
    set_title(title: string | null): void
    update_device(device: InputDevice, sequence: EventSequence, point: any, time: number, new_actor: Actor, region: any, emit_crossing: boolean): void

    // Own virtual methods of Clutter-11.Clutter.Stage

    vfunc_activate(): void
    vfunc_before_paint(view: StageView): void
    vfunc_deactivate(): void
    vfunc_paint_view(view: StageView, redraw_clip: any): void

    // Own signals of Clutter-11.Clutter.Stage

    connect(sigName: "activate", callback: Stage.ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: Stage.ActivateSignalCallback): number
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "after-paint", callback: Stage.AfterPaintSignalCallback): number
    connect_after(sigName: "after-paint", callback: Stage.AfterPaintSignalCallback): number
    emit(sigName: "after-paint", view: StageView, ...args: any[]): void
    connect(sigName: "after-update", callback: Stage.AfterUpdateSignalCallback): number
    connect_after(sigName: "after-update", callback: Stage.AfterUpdateSignalCallback): number
    emit(sigName: "after-update", view: StageView, ...args: any[]): void
    connect(sigName: "before-paint", callback: Stage.BeforePaintSignalCallback): number
    connect_after(sigName: "before-paint", callback: Stage.BeforePaintSignalCallback): number
    emit(sigName: "before-paint", view: StageView, ...args: any[]): void
    connect(sigName: "before-update", callback: Stage.BeforeUpdateSignalCallback): number
    connect_after(sigName: "before-update", callback: Stage.BeforeUpdateSignalCallback): number
    emit(sigName: "before-update", view: StageView, ...args: any[]): void
    connect(sigName: "deactivate", callback: Stage.DeactivateSignalCallback): number
    connect_after(sigName: "deactivate", callback: Stage.DeactivateSignalCallback): number
    emit(sigName: "deactivate", ...args: any[]): void
    connect(sigName: "gl-video-memory-purged", callback: (...args: any[]) => void): number
    connect_after(sigName: "gl-video-memory-purged", callback: (...args: any[]) => void): number
    emit(sigName: "gl-video-memory-purged", ...args: any[]): void
    connect(sigName: "paint-view", callback: Stage.PaintViewSignalCallback): number
    connect_after(sigName: "paint-view", callback: Stage.PaintViewSignalCallback): number
    emit(sigName: "paint-view", view: StageView, redraw_clip: any, ...args: any[]): void
    connect(sigName: "prepare-frame", callback: Stage.PrepareFrameSignalCallback): number
    connect_after(sigName: "prepare-frame", callback: Stage.PrepareFrameSignalCallback): number
    emit(sigName: "prepare-frame", view: StageView, ...args: any[]): void
    connect(sigName: "presented", callback: (...args: any[]) => void): number
    connect_after(sigName: "presented", callback: (...args: any[]) => void): number
    emit(sigName: "presented", view: StageView, frame_info: any | null, ...args: any[]): void
}

/**
 * Top level visual element to which actors are placed.
 * 
 * #ClutterStage is a top level 'window' on which child actors are placed
 * and manipulated.
 * 
 * #ClutterStage is a proxy actor, wrapping the backend-specific implementation
 * (a #StageWindow) of the windowing system. It is possible to subclass
 * #ClutterStage, as long as every overridden virtual function chains up to the
 * parent class corresponding function.
 * @class 
 */
class Stage extends Actor {

    // Own properties of Clutter-11.Clutter.Stage

    static name: string
}

module StageManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `stage-added`
     */
    interface StageAddedSignalCallback {
        ($obj: StageManager, stage: Stage): void
    }

    /**
     * Signal callback interface for `stage-removed`
     */
    interface StageRemovedSignalCallback {
        ($obj: StageManager, stage: Stage): void
    }

}

interface StageManager {

    // Own properties of Clutter-11.Clutter.StageManager

    /**
     * The default stage used by Clutter.
     */
    readonly default_stage: Stage

    // Owm methods of Clutter-11.Clutter.StageManager

    /**
     * Returns the default #ClutterStage.
     * @returns the default stage. The returned object   is owned by Clutter and you should never reference or unreference it
     */
    get_default_stage(): Stage
    /**
     * Lists all currently used stages.
     * @returns a newly   allocated list of #ClutterStage objects. Use g_slist_free() to   deallocate it when done.
     */
    list_stages(): Stage[]
    /**
     * Lists all currently used stages.
     * @returns a pointer   to the internal list of #ClutterStage objects. The returned list   is owned by the #ClutterStageManager and should never be modified   or freed
     */
    peek_stages(): Stage[]

    // Own virtual methods of Clutter-11.Clutter.StageManager

    vfunc_stage_added(stage: Stage): void
    vfunc_stage_removed(stage: Stage): void

    // Own signals of Clutter-11.Clutter.StageManager

    connect(sigName: "stage-added", callback: StageManager.StageAddedSignalCallback): number
    connect_after(sigName: "stage-added", callback: StageManager.StageAddedSignalCallback): number
    emit(sigName: "stage-added", stage: Stage, ...args: any[]): void
    connect(sigName: "stage-removed", callback: StageManager.StageRemovedSignalCallback): number
    connect_after(sigName: "stage-removed", callback: StageManager.StageRemovedSignalCallback): number
    emit(sigName: "stage-removed", stage: Stage, ...args: any[]): void
}

/**
 * Maintains the list of stages
 * 
 * #ClutterStageManager is a singleton object, owned by Clutter, which
 * maintains the list of currently active stages
 * 
 * Every newly-created [class`Stage]` will cause the emission of the
 * [signal`StageManager:`:stage-added] signal; once a [class`Stage]` has
 * been destroyed, the [signal`StageManager:`:stage-removed] signal will
 * be emitted
 * @class 
 */
class StageManager {

    // Own properties of Clutter-11.Clutter.StageManager

    static name: string

    // Constructors of Clutter-11.Clutter.StageManager

    /**
     * Returns the default #ClutterStageManager.
     * @returns the default stage manager instance. The returned   object is owned by Clutter and you should not reference or unreference it.
     */
    static get_default(): StageManager
}

interface StageView {

    // Own properties of Clutter-11.Clutter.StageView

    framebuffer: Cogl.Framebuffer
    layout: any
    readonly name: string | null
    readonly offscreen: Cogl.Offscreen
    refresh_rate: number
    scale: number
    readonly stage: Stage
    readonly use_shadowfb: boolean
    readonly vblank_duration_us: number

    // Own fields of Clutter-11.Clutter.StageView

    parent_instance: any

    // Owm methods of Clutter-11.Clutter.StageView

    assign_next_scanout(scanout: Cogl.Scanout): void
    destroy(): void
    /**
     * Retrieves the framebuffer of `view` to draw to.
     * @returns a #CoglFramebuffer
     */
    get_framebuffer(): Cogl.Framebuffer
    get_layout(rect: any): void
    get_offscreen_transformation_matrix(matrix: any): void
    /**
     * Retrieves the onscreen framebuffer of `view` if available.
     * @returns a #CoglFramebuffer
     */
    get_onscreen(): Cogl.Framebuffer
    get_refresh_rate(): number
    get_scale(): number
    has_shadowfb(): boolean
    invalidate_offscreen_blit_pipeline(): void

    // Own virtual methods of Clutter-11.Clutter.StageView

    vfunc_get_offscreen_transformation_matrix(matrix: any): void
    vfunc_setup_offscreen_blit_pipeline(pipeline: Cogl.Pipeline): void
    vfunc_transform_rect_to_onscreen(src_rect: any, dst_width: number, dst_height: number, dst_rect: any): void
}

class StageView {

    // Own properties of Clutter-11.Clutter.StageView

    static name: string
}

module SwipeAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `swept`
     */
    interface SweptSignalCallback {
        ($obj: SwipeAction, actor: Actor, direction: SwipeDirection): void
    }

    /**
     * Signal callback interface for `swipe`
     */
    interface SwipeSignalCallback {
        ($obj: SwipeAction, actor: Actor, direction: SwipeDirection): boolean
    }

}

interface SwipeAction {

    // Conflicting properties

    parent_instance: Action & ActorMeta & any

    // Own virtual methods of Clutter-11.Clutter.SwipeAction

    vfunc_swept(actor: Actor, direction: SwipeDirection): void

    // Own signals of Clutter-11.Clutter.SwipeAction

    connect(sigName: "swept", callback: SwipeAction.SweptSignalCallback): number
    connect_after(sigName: "swept", callback: SwipeAction.SweptSignalCallback): number
    emit(sigName: "swept", actor: Actor, direction: SwipeDirection, ...args: any[]): void
    connect(sigName: "swipe", callback: SwipeAction.SwipeSignalCallback): number
    connect_after(sigName: "swipe", callback: SwipeAction.SwipeSignalCallback): number
    emit(sigName: "swipe", actor: Actor, direction: SwipeDirection, ...args: any[]): void
}

/**
 * Action for swipe gestures
 * 
 * #ClutterSwipeAction is a sub-class of [class`GestureAction]` that implements
 * the logic for recognizing swipe gestures.
 * @class 
 */
class SwipeAction extends GestureAction {

    // Own properties of Clutter-11.Clutter.SwipeAction

    static name: string

    // Constructors of Clutter-11.Clutter.SwipeAction

    /**
     * Creates a new #ClutterSwipeAction instance
     * @constructor 
     * @returns the newly created #ClutterSwipeAction
     */
    constructor() 
    /**
     * Creates a new #ClutterSwipeAction instance
     * @constructor 
     * @returns the newly created #ClutterSwipeAction
     */
    static new(): SwipeAction
}

module TapAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `tap`
     */
    interface TapSignalCallback {
        ($obj: TapAction, actor: Actor): void
    }

}

interface TapAction {

    // Conflicting properties

    parent_instance: Action & ActorMeta & any

    // Own virtual methods of Clutter-11.Clutter.TapAction

    vfunc_tap(actor: Actor): boolean

    // Own signals of Clutter-11.Clutter.TapAction

    connect(sigName: "tap", callback: TapAction.TapSignalCallback): number
    connect_after(sigName: "tap", callback: TapAction.TapSignalCallback): number
    emit(sigName: "tap", actor: Actor, ...args: any[]): void
}

/**
 * Action for tap gestures
 * 
 * #ClutterTapAction is a sub-class of [class`GestureAction]` that implements
 * the logic for recognizing mouse clicks and touch tap gestures.
 * 
 * The simplest usage of #ClutterTapAction consists in adding it to
 * a [class`Actor]`, setting it as reactive and connecting a
 * callback for the [signal`TapAction:`:tap] signal, along the lines of the
 * following code:
 * 
 * ```c
 *   clutter_actor_add_action (actor, clutter_tap_action_new ());
 *   clutter_actor_set_reactive (actor, TRUE);
 *   g_signal_connect (action, "tap", G_CALLBACK (on_tap_callback), NULL);
 * ```
 * @class 
 */
class TapAction extends GestureAction {

    // Own properties of Clutter-11.Clutter.TapAction

    static name: string

    // Constructors of Clutter-11.Clutter.TapAction

    /**
     * Creates a new #ClutterTapAction instance
     * @constructor 
     * @returns the newly created #ClutterTapAction
     */
    constructor() 
    /**
     * Creates a new #ClutterTapAction instance
     * @constructor 
     * @returns the newly created #ClutterTapAction
     */
    static new(): TapAction
}

module Text {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    interface ActivateSignalCallback {
        ($obj: Text): void
    }

    /**
     * Signal callback interface for `cursor-changed`
     */
    interface CursorChangedSignalCallback {
        ($obj: Text): void
    }

    /**
     * Signal callback interface for `cursor-event`
     */
    interface CursorEventSignalCallback {
        ($obj: Text, rect: any): void
    }

    /**
     * Signal callback interface for `delete-text`
     */
    interface DeleteTextSignalCallback {
        ($obj: Text, start_pos: number, end_pos: number): void
    }

    /**
     * Signal callback interface for `insert-text`
     */
    interface InsertTextSignalCallback {
        ($obj: Text, new_text: string | null, new_text_length: number, position: any | null): void
    }

    /**
     * Signal callback interface for `text-changed`
     */
    interface TextChangedSignalCallback {
        ($obj: Text): void
    }

}

interface Text extends Atk.ImplementorIface, Animatable, Container, Scriptable {

    // Own properties of Clutter-11.Clutter.Text

    /**
     * Toggles whether return invokes the activate signal or not.
     */
    activatable: boolean
    /**
     * A list of `PangoStyleAttribute`s to be applied to the
     * contents of the #ClutterText actor.
     */
    attributes: Pango.AttrList
    /**
     * The buffer which stores the text for this #ClutterText.
     * 
     * If set to %NULL, a default buffer will be created.
     */
    buffer: TextBuffer
    /**
     * The color used to render the text.
     */
    color: Color
    /**
     * The color of the cursor.
     */
    cursor_color: Color
    /**
     * Will be set to %TRUE if [property`Text:`cursor-color] has been set.
     */
    readonly cursor_color_set: boolean
    /**
     * The current input cursor position. -1 is taken to be the end of the text
     */
    cursor_position: number
    /**
     * The size of the cursor, in pixels. If set to -1 the size used will
     * be the default cursor size of 2 pixels.
     */
    cursor_size: number
    /**
     * Whether the input cursor is visible or not.
     * 
     * The cursor will only be visible if this property and either
     * the [property`Text:`editable] or the [property`Text:`selectable] properties
     * are set to %TRUE.
     */
    cursor_visible: boolean
    /**
     * Whether key events delivered to the actor causes editing.
     */
    editable: boolean
    /**
     * The preferred place to ellipsize the contents of the #ClutterText actor
     */
    ellipsize: Pango.EllipsizeMode
    /**
     * The [struct`Pango`.FontDescription] that should be used by the #ClutterText
     * 
     * If you have a string describing the font then you should look at
     * [property`Text:`font-name] instead
     */
    font_description: Pango.FontDescription
    /**
     * The font to be used by the #ClutterText, as a string
     * that can be parsed by [func`Pango`.FontDescription.from_string].
     * 
     * If set to %NULL, the default system font will be used instead.
     */
    font_name: string | null
    input_hints: InputContentHintFlags
    input_purpose: InputContentPurpose
    /**
     * Whether the contents of the #ClutterText should be justified
     * on both margins.
     */
    justify: boolean
    /**
     * The preferred alignment for the text. This property controls
     * the alignment of multi-line paragraphs.
     */
    line_alignment: Pango.Alignment
    /**
     * Whether to wrap the lines of [property`Text:`text] if the contents
     * exceed the available allocation. The wrapping strategy is
     * controlled by the [property`Text:`line-wrap-mode] property.
     */
    line_wrap: boolean
    /**
     * If [property`Text:`line-wrap] is set to %TRUE, this property will
     * control how the text is wrapped.
     */
    line_wrap_mode: Pango.WrapMode
    /**
     * The maximum length of the contents of the #ClutterText actor.
     */
    max_length: number
    /**
     * If non-zero, the character that should be used in place of
     * the actual text in a password text actor.
     */
    password_char: number
    /**
     * The current input cursor position. -1 is taken to be the end of the text
     */
    position: any
    /**
     * Whether it is possible to select text, either using the pointer
     * or the keyboard.
     * 
     * This property depends on the [property`Actor:`reactive] property being
     * set to %TRUE.
     */
    selectable: boolean
    /**
     * The color of selected text.
     */
    selected_text_color: Color
    /**
     * Will be set to %TRUE if [property`Text:`selected-text-color] has been set.
     */
    readonly selected_text_color_set: boolean
    /**
     * The current input cursor position. -1 is taken to be the end of the text
     */
    selection_bound: number
    /**
     * The color of the selection.
     */
    selection_color: Color
    /**
     * Will be set to %TRUE if [property`Text:`selection-color] has been set.
     */
    readonly selection_color_set: boolean
    /**
     * Whether the #ClutterText actor should be in single line mode
     * or not. A single line #ClutterText actor will only contain a
     * single line of text, scrolling it in case its length is bigger
     * than the allocated size.
     * 
     * Setting this property will also set the [property`Text:`activatable]
     * property as a side-effect.
     * 
     * The [property`Text:`single-line-mode] property is used only if the
     * [property`Text:`editable] property is set to %TRUE.
     */
    single_line_mode: boolean
    /**
     * The text to render inside the actor.
     */
    text: string | null
    /**
     * Whether the text includes Pango markup.
     * 
     * For more information about the Pango markup format, see
     * [method`Pango`.Layout.set_markup] in the Pango documentation.
     * 
     * It is not possible to round-trip this property between
     * %TRUE and %FALSE. Once a string with markup has been set on
     * a #ClutterText actor with [property`Text:`use-markup] set to %TRUE, the markup
     * is stripped from the string.
     */
    use_markup: boolean

    // Owm methods of Clutter-11.Clutter.Text

    /**
     * Emits the [signal`Text:`:activate] signal, if `self` has been set
     * as activatable using [method`Text`.set_activatable].
     * 
     * This function can be used to emit the [signal`Text:`:activate] signal inside
     * a [signal`Actor:`:captured-event] or [signal`Actor:`:key-press-event]
     * signal handlers before the default signal handler for the
     * #ClutterText is invoked.
     * @returns %TRUE if the [signal@Text::activate] signal has been emitted,   and %FALSE otherwise
     */
    activate(): boolean
    /**
     * Retrieves the position of the character at the given coordinates.
     * @param x the X coordinate, relative to the actor
     * @param y the Y coordinate, relative to the actor
     * @returns the position of the character
     */
    coords_to_position(x: number, y: number): number
    /**
     * Deletes `n_chars` inside a #ClutterText actor, starting from the
     * current cursor position.
     * 
     * Somewhat awkwardly, the cursor position is decremented by the same
     * number of characters you've deleted.
     * @param n_chars the number of characters to delete
     */
    delete_chars(n_chars: number): void
    /**
     * Deletes the currently selected text
     * 
     * This function is only useful in subclasses of #ClutterText
     * @returns %TRUE if text was deleted or if the text actor   is empty, and %FALSE otherwise
     */
    delete_selection(): boolean
    /**
     * Deletes the text inside a #ClutterText actor between `start_pos`
     * and `end_pos`.
     * 
     * The starting and ending positions are expressed in characters,
     * not in bytes.
     * @param start_pos starting position
     * @param end_pos ending position
     */
    delete_text(start_pos: number, end_pos: number): void
    /**
     * Retrieves whether a #ClutterText is activatable or not.
     * @returns %TRUE if the actor is activatable
     */
    get_activatable(): boolean
    /**
     * Gets the attribute list that was set on the #ClutterText actor
     * [method`Text`.set_attributes], if any.
     * @returns the attribute list, or %NULL if none was set. The  returned value is owned by the #ClutterText and should not be unreferenced.
     */
    get_attributes(): Pango.AttrList
    /**
     * Get the #ClutterTextBuffer object which holds the text for
     * this widget.
     * @returns A #GtkEntryBuffer object.
     */
    get_buffer(): TextBuffer
    /**
     * Retrieves the contents of the #ClutterText actor between
     * `start_pos` and `end_pos,` but not including `end_pos`.
     * 
     * The positions are specified in characters, not in bytes.
     * @param start_pos start of text, in characters
     * @param end_pos end of text, in characters
     * @returns a newly allocated string with the contents of   the text actor between the specified positions. Use [func@GLib.free]   to free the resources when done
     */
    get_chars(start_pos: number, end_pos: number): string | null
    /**
     * Retrieves the text color as set by [method`Text`.set_color].
     */
    get_color(): /* color */ Color
    /**
     * Retrieves the color of the cursor of a #ClutterText actor.
     */
    get_cursor_color(): /* color */ Color
    /**
     * Retrieves the cursor position.
     * @returns the cursor position, in characters
     */
    get_cursor_position(): number
    /**
     * Retrieves the rectangle that contains the cursor.
     * 
     * The coordinates of the rectangle's origin are in actor-relative
     * coordinates.
     */
    get_cursor_rect(): /* rect */ any
    /**
     * Retrieves the size of the cursor of a #ClutterText actor.
     * @returns the size of the cursor, in pixels
     */
    get_cursor_size(): number
    /**
     * Retrieves whether the cursor of a #ClutterText actor is visible.
     * @returns %TRUE if the cursor is visible
     */
    get_cursor_visible(): boolean
    /**
     * Retrieves whether a #ClutterText is editable or not.
     * @returns %TRUE if the actor is editable
     */
    get_editable(): boolean
    /**
     * Returns the ellipsizing position of a #ClutterText actor, as
     * set by [method`Text`.set_ellipsize].
     * @returns #PangoEllipsizeMode
     */
    get_ellipsize(): Pango.EllipsizeMode
    /**
     * Retrieves the [struct`Pango`.FontDescription] used by `self`
     * @returns a #PangoFontDescription. The returned value is owned   by the #ClutterText actor and it should not be modified or freed
     */
    get_font_description(): Pango.FontDescription
    /**
     * Retrieves the font name as set by [method`Text`.set_font_name].
     * @returns a string containing the font name. The returned   string is owned by the #ClutterText actor and should not be   modified or freed
     */
    get_font_name(): string | null
    get_input_hints(): InputContentHintFlags
    get_input_purpose(): InputContentPurpose
    /**
     * Retrieves whether the #ClutterText actor should justify its contents
     * on both margins.
     * @returns %TRUE if the text should be justified
     */
    get_justify(): boolean
    /**
     * Retrieves the current #PangoLayout used by a #ClutterText actor.
     * @returns a #PangoLayout. The returned object is owned by   the #ClutterText actor and should not be modified or freed
     */
    get_layout(): Pango.Layout
    /**
     * Obtains the coordinates where the #ClutterText will draw the [class`Pango`.Layout]
     * representing the text.
     */
    get_layout_offsets(): [ /* x */ number, /* y */ number ]
    /**
     * Retrieves the alignment of a #ClutterText, as set by
     * [method`Text`.set_line_alignment].
     * @returns a [enum@Pango.Alignment]
     */
    get_line_alignment(): Pango.Alignment
    /**
     * Retrieves the value set using [method`Text`.set_line_wrap].
     * @returns %TRUE if the #ClutterText actor should wrap   its contents
     */
    get_line_wrap(): boolean
    /**
     * Retrieves the line wrap mode used by the #ClutterText actor.
     * 
     * See [method`Text`.set_line_wrap_mode].
     * @returns the wrap mode used by the #ClutterText
     */
    get_line_wrap_mode(): Pango.WrapMode
    /**
     * Gets the maximum length of text that can be set into a text actor.
     * 
     * See [method`Text`.set_max_length].
     * @returns the maximum number of characters.
     */
    get_max_length(): number
    /**
     * Retrieves the character to use in place of the actual text
     * as set by [method`Text`.set_password_char].
     * @returns a Unicode character or 0 if the password   character is not set
     */
    get_password_char(): string
    /**
     * Retrieves whether a #ClutterText is selectable or not.
     * @returns %TRUE if the actor is selectable
     */
    get_selectable(): boolean
    /**
     * Retrieves the color of selected text of a #ClutterText actor.
     */
    get_selected_text_color(): /* color */ Color
    /**
     * Retrieves the currently selected text.
     * @returns a newly allocated string containing the currently   selected text, or %NULL. Use [func@GLib.free] to free the returned   string.
     */
    get_selection(): string | null
    /**
     * Retrieves the other end of the selection of a #ClutterText actor,
     * in characters from the current cursor position.
     * @returns the position of the other end of the selection
     */
    get_selection_bound(): number
    /**
     * Retrieves the color of the selection of a #ClutterText actor.
     */
    get_selection_color(): /* color */ Color
    /**
     * Retrieves whether the #ClutterText actor is in single line mode.
     * @returns %TRUE if the #ClutterText actor is in single line mode
     */
    get_single_line_mode(): boolean
    /**
     * Retrieves a pointer to the current contents of a #ClutterText
     * actor.
     * 
     * If you need a copy of the contents for manipulating, either
     * use [func`GLib`.strdup] on the returned string, or use:
     * 
     * ```c
     *    copy = clutter_text_get_chars (text, 0, -1);
     * ```
     * 
     * Which will return a newly allocated string.
     * 
     * If the #ClutterText actor is empty, this function will return
     * an empty string, and not %NULL.
     * @returns the contents of the actor. The returned   string is owned by the #ClutterText actor and should never be modified   or freed
     */
    get_text(): string | null
    /**
     * Retrieves whether the contents of the #ClutterText actor should be
     * parsed for the Pango text markup.
     * @returns %TRUE if the contents will be parsed for markup
     */
    get_use_markup(): boolean
    has_preedit(): boolean
    /**
     * Inserts `text` into a [class`Actor]` at the given position.
     * 
     * If `position` is a negative number, the text will be appended
     * at the end of the current contents of the #ClutterText.
     * 
     * The position is expressed in characters, not in bytes.
     * @param text the text to be inserted
     * @param position the position of the insertion, or -1
     */
    insert_text(text: string | null, position: number): void
    /**
     * Inserts `wc` at the current cursor position of a
     * #ClutterText actor.
     * @param wc a Unicode character
     */
    insert_unichar(wc: string): void
    /**
     * Retrieves the coordinates of the given `position`.
     * @param position position in characters
     * @returns %TRUE if the conversion was successful
     */
    position_to_coords(position: number): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* line_height */ number ]
    /**
     * Sets whether a #ClutterText actor should be activatable.
     * 
     * An activatable #ClutterText actor will emit the [signal`Text:`:activate]
     * signal whenever the 'Enter' (or 'Return') key is pressed; if it is not
     * activatable, a new line will be appended to the current content.
     * 
     * An activatable #ClutterText must also be set as editable using
     * [method`Text`.set_editable].
     * @param activatable whether the #ClutterText actor should be activatable
     */
    set_activatable(activatable: boolean): void
    /**
     * Sets the attributes list that are going to be applied to the
     * #ClutterText contents.
     * 
     * The #ClutterText actor will take a reference on the [struct`Pango`.AttrList]
     * passed to this function.
     * @param attrs a #PangoAttrList or %NULL to unset the attributes
     */
    set_attributes(attrs: Pango.AttrList | null): void
    /**
     * Set the [class`TextBuffer]` object which holds the text for
     * this widget.
     * @param buffer a #ClutterTextBuffer
     */
    set_buffer(buffer: TextBuffer): void
    /**
     * Sets the color of the contents of a #ClutterText actor.
     * 
     * The overall opacity of the #ClutterText actor will be the
     * result of the alpha value of `color` and the composited
     * opacity of the actor itself on the scenegraph, as returned
     * by [method`Actor`.get_paint_opacity].
     * @param color a #ClutterColor
     */
    set_color(color: Color): void
    /**
     * Sets the color of the cursor of a #ClutterText actor.
     * 
     * If `color` is %NULL, the cursor color will be the same as the
     * text color.
     * @param color the color of the cursor, or %NULL to unset it
     */
    set_cursor_color(color: Color | null): void
    /**
     * Sets the cursor of a #ClutterText actor at `position`.
     * 
     * The position is expressed in characters, not in bytes.
     * @param position the new cursor position, in characters
     */
    set_cursor_position(position: number): void
    /**
     * Sets the size of the cursor of a #ClutterText. The cursor
     * will only be visible if the [property`Text:`cursor-visible] property
     * is set to %TRUE.
     * @param size the size of the cursor, in pixels, or -1 to use the   default value
     */
    set_cursor_size(size: number): void
    /**
     * Sets whether the cursor of a #ClutterText actor should be
     * visible or not.
     * 
     * The color of the cursor will be the same as the text color
     * unless [method`Text`.set_cursor_color] has been called.
     * 
     * The size of the cursor can be set using [method`Text`.set_cursor_size].
     * 
     * The position of the cursor can be changed programmatically using
     * [method`Text`.set_cursor_position].
     * @param cursor_visible whether the cursor should be visible
     */
    set_cursor_visible(cursor_visible: boolean): void
    /**
     * Sets whether the #ClutterText actor should be editable.
     * 
     * An editable #ClutterText with key focus set using
     * [method`Actor`.grab_key_focus] or [method`Stage`.set_key_focus]
     * will receive key events and will update its contents accordingly.
     * @param editable whether the #ClutterText should be editable
     */
    set_editable(editable: boolean): void
    /**
     * Sets the mode used to ellipsize (add an ellipsis: "...") to the
     * text if there is not enough space to render the entire contents
     * of a #ClutterText actor
     * @param mode a #PangoEllipsizeMode
     */
    set_ellipsize(mode: Pango.EllipsizeMode): void
    /**
     * Sets `font_desc` as the font description for a #ClutterText
     * 
     * The #PangoFontDescription is copied by the #ClutterText actor
     * so you can safely call [method`Pango`.FontDescription.free] on it after
     * calling this function.
     * @param font_desc a #PangoFontDescription
     */
    set_font_description(font_desc: Pango.FontDescription): void
    /**
     * Sets the font used by a #ClutterText. The `font_name` string
     * must either be %NULL, which means that the font name from the
     * default [class`Backend]` will be used; or be something that can
     * be parsed by the [func`Pango`.FontDescription.from_string] function,
     * like:
     * 
     * ```c
     *   // Set the font to the system's Sans, 10 points
     *   clutter_text_set_font_name (text, "Sans 10");
     * 
     *   // Set the font to the system's Serif, 16 pixels
     *   clutter_text_set_font_name (text, "Serif 16px");
     * 
     *   // Set the font to Helvetica, 10 points
     *   clutter_text_set_font_name (text, "Helvetica 10");
     * ```
     * @param font_name a font name, or %NULL to set the default font name
     */
    set_font_name(font_name: string | null): void
    set_input_hints(hints: InputContentHintFlags): void
    set_input_purpose(purpose: InputContentPurpose): void
    /**
     * Sets whether the text of the #ClutterText actor should be justified
     * on both margins. This setting is ignored if Clutter is compiled
     * against Pango &lt; 1.18.
     * @param justify whether the text should be justified
     */
    set_justify(justify: boolean): void
    /**
     * Sets the way that the lines of a wrapped label are aligned with
     * respect to each other. This does not affect the overall alignment
     * of the label within its allocated or specified width.
     * 
     * To align a #ClutterText actor you should add it to a container
     * that supports alignment, or use the anchor point.
     * @param alignment A #PangoAlignment
     */
    set_line_alignment(alignment: Pango.Alignment): void
    /**
     * Sets whether the contents of a #ClutterText actor should wrap,
     * if they don't fit the size assigned to the actor.
     * @param line_wrap whether the contents should wrap
     */
    set_line_wrap(line_wrap: boolean): void
    /**
     * If line wrapping is enabled (see [method`Text`.set_line_wrap]) this
     * function controls how the line wrapping is performed. The default is
     * %PANGO_WRAP_WORD which means wrap on word boundaries.
     * @param wrap_mode the line wrapping mode
     */
    set_line_wrap_mode(wrap_mode: Pango.WrapMode): void
    /**
     * Sets `markup` as the contents of a #ClutterText.
     * 
     * This is a convenience function for setting a string containing
     * Pango markup, and it is logically equivalent to:
     * 
     * ```c
     *   /&ast; the order is important &ast;/
     *   clutter_text_set_text (CLUTTER_TEXT (actor), markup);
     *   clutter_text_set_use_markup (CLUTTER_TEXT (actor), TRUE);
     * ```
     * @param markup a string containing Pango markup.   Passing %NULL is the same as passing "" (the empty string)
     */
    set_markup(markup: string | null): void
    /**
     * Sets the maximum allowed length of the contents of the actor. If the
     * current contents are longer than the given length, then they will be
     * truncated to fit.
     * @param max the maximum number of characters allowed in the text actor; 0   to disable or -1 to set the length of the current string
     */
    set_max_length(max: number): void
    /**
     * Sets the character to use in place of the actual text in a
     * password text actor.
     * 
     * If `wc` is 0 the text will be displayed as it is entered in the
     * #ClutterText actor.
     * @param wc a Unicode character, or 0 to unset the password character
     */
    set_password_char(wc: string): void
    /**
     * Sets, or unsets, the pre-edit string. This function is useful
     * for input methods to display a string (with eventual specific
     * Pango attributes) before it is entered inside the #ClutterText
     * buffer.
     * 
     * The preedit string and attributes are ignored if the #ClutterText
     * actor is not editable.
     * 
     * This function should not be used by applications
     * @param preedit_str the pre-edit string, or %NULL to unset it
     * @param preedit_attrs the pre-edit string attributes
     * @param cursor_pos the cursor position for the pre-edit string
     */
    set_preedit_string(preedit_str: string | null, preedit_attrs: Pango.AttrList | null, cursor_pos: number): void
    /**
     * Sets whether a #ClutterText actor should be selectable.
     * 
     * A selectable #ClutterText will allow selecting its contents using
     * the pointer or the keyboard.
     * @param selectable whether the #ClutterText actor should be selectable
     */
    set_selectable(selectable: boolean): void
    /**
     * Sets the selected text color of a #ClutterText actor.
     * 
     * If `color` is %NULL, the selected text color will be the same as the
     * selection color, which then falls back to cursor, and then text color.
     * @param color the selected text color, or %NULL to unset it
     */
    set_selected_text_color(color: Color | null): void
    /**
     * Selects the region of text between `start_pos` and `end_pos`.
     * 
     * This function changes the position of the cursor to match
     * `start_pos` and the selection bound to match `end_pos`.
     * @param start_pos start of the selection, in characters
     * @param end_pos end of the selection, in characters
     */
    set_selection(start_pos: number, end_pos: number): void
    /**
     * Sets the other end of the selection, starting from the current
     * cursor position.
     * 
     * If `selection_bound` is -1, the selection unset.
     * @param selection_bound the position of the end of the selection, in characters
     */
    set_selection_bound(selection_bound: number): void
    /**
     * Sets the color of the selection of a #ClutterText actor.
     * 
     * If `color` is %NULL, the selection color will be the same as the
     * cursor color, or if no cursor color is set either then it will be
     * the same as the text color.
     * @param color the color of the selection, or %NULL to unset it
     */
    set_selection_color(color: Color | null): void
    /**
     * Sets whether a #ClutterText actor should be in single line mode
     * or not. Only editable `ClutterText`s can be in single line
     * mode.
     * 
     * A text actor in single line mode will not wrap text and will clip
     * the visible area to the predefined size. The contents of the
     * text actor will scroll to display the end of the text if its length
     * is bigger than the allocated width.
     * 
     * When setting the single line mode the [property`Text:`activatable]
     * property is also set as a side effect. Instead of entering a new
     * line character, the text actor will emit the [signal`Text:`:activate]
     * signal.
     * @param single_line whether to enable single line mode
     */
    set_single_line_mode(single_line: boolean): void
    /**
     * Sets the contents of a #ClutterText actor.
     * 
     * If the [property`Text:`use-markup] property was set to %TRUE it
     * will be reset to %FALSE as a side effect. If you want to
     * maintain the [property`Text:`use-markup] you should use the
     * [method`Text`.set_markup] function instead
     * @param text the text to set. Passing %NULL is the same   as passing "" (the empty string)
     */
    set_text(text: string | null): void
    /**
     * Sets whether the contents of the #ClutterText actor contains markup
     * in [Pango's text markup language](https://docs.gtk.org/Pango/pango_markup.html#pango-markup).
     * 
     * Setting [property`Text:`use-markup] on an editable #ClutterText will
     * not have any effect except hiding the markup.
     * 
     * See also [property`Text:`use-markup].
     * @param setting %TRUE if the text should be parsed for markup.
     */
    set_use_markup(setting: boolean): void

    // Own virtual methods of Clutter-11.Clutter.Text

    vfunc_activate(): void
    vfunc_cursor_changed(): void
    vfunc_cursor_event(rect: any): void
    vfunc_text_changed(): void

    // Own signals of Clutter-11.Clutter.Text

    connect(sigName: "activate", callback: Text.ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: Text.ActivateSignalCallback): number
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "cursor-changed", callback: Text.CursorChangedSignalCallback): number
    connect_after(sigName: "cursor-changed", callback: Text.CursorChangedSignalCallback): number
    emit(sigName: "cursor-changed", ...args: any[]): void
    connect(sigName: "cursor-event", callback: Text.CursorEventSignalCallback): number
    connect_after(sigName: "cursor-event", callback: Text.CursorEventSignalCallback): number
    emit(sigName: "cursor-event", rect: any, ...args: any[]): void
    connect(sigName: "delete-text", callback: Text.DeleteTextSignalCallback): number
    connect_after(sigName: "delete-text", callback: Text.DeleteTextSignalCallback): number
    emit(sigName: "delete-text", start_pos: number, end_pos: number, ...args: any[]): void
    connect(sigName: "insert-text", callback: Text.InsertTextSignalCallback): number
    connect_after(sigName: "insert-text", callback: Text.InsertTextSignalCallback): number
    emit(sigName: "insert-text", new_text: string | null, new_text_length: number, position: any | null, ...args: any[]): void
    connect(sigName: "text-changed", callback: Text.TextChangedSignalCallback): number
    connect_after(sigName: "text-changed", callback: Text.TextChangedSignalCallback): number
    emit(sigName: "text-changed", ...args: any[]): void
}

/**
 * An actor for displaying and editing text
 * 
 * #ClutterText is an actor that displays custom text using Pango
 * as the text rendering engine.
 * 
 * #ClutterText also allows inline editing of the text if the
 * actor is set editable using [method`Text`.set_editable].
 * 
 * Selection using keyboard or pointers can be enabled using
 * [method`Text`.set_selectable].
 * @class 
 */
class Text extends Actor {

    // Own properties of Clutter-11.Clutter.Text

    static name: string

    // Constructors of Clutter-11.Clutter.Text

    /**
     * Creates a new #ClutterText actor. This actor can be used to
     * display and edit text.
     * @constructor 
     * @returns the newly created #ClutterText actor
     */
    constructor() 
    /**
     * Creates a new #ClutterText actor. This actor can be used to
     * display and edit text.
     * @constructor 
     * @returns the newly created #ClutterText actor
     */
    static new(): Text
    /**
     * Creates a new #ClutterText actor, using `font_name` as the font
     * description; `text` will be used to set the contents of the actor;
     * and `color` will be used as the color to render `text`.
     * 
     * This function is equivalent to calling [ctor`Text`.new],
     * [method`Text`.set_font_name], [method`Text`.set_text] and
     * [method`Text`.set_color].
     * @constructor 
     * @param font_name a string with a font description
     * @param text the contents of the actor
     * @param color the color to be used to render `text`
     * @returns the newly created #ClutterText actor
     */
    static new_full(font_name: string | null, text: string | null, color: Color): Text
    /**
     * Creates a new entry with the specified text buffer.
     * @constructor 
     * @param buffer The buffer to use for the new #ClutterText.
     * @returns a new #ClutterText
     */
    static new_with_buffer(buffer: TextBuffer): Text
    /**
     * Creates a new #ClutterText actor, using `font_name` as the font
     * description; `text` will be used to set the contents of the actor.
     * 
     * This function is equivalent to calling [ctor`Text`.new],
     * [method`Text`.set_font_name], and [method`Text`.set_text].
     * @constructor 
     * @param font_name a string with a font description
     * @param text the contents of the actor
     * @returns the newly created #ClutterText actor
     */
    static new_with_text(font_name: string | null, text: string | null): Text
}

module TextBuffer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `deleted-text`
     */
    interface DeletedTextSignalCallback {
        ($obj: TextBuffer, position: number, n_chars: number): void
    }

    /**
     * Signal callback interface for `inserted-text`
     */
    interface InsertedTextSignalCallback {
        ($obj: TextBuffer, position: number, chars: string | null, n_chars: number): void
    }

}

interface TextBuffer {

    // Own properties of Clutter-11.Clutter.TextBuffer

    /**
     * The length (in characters) of the text in buffer.
     */
    readonly length: number
    /**
     * The maximum length (in characters) of the text in the buffer.
     */
    max_length: number
    /**
     * The contents of the buffer.
     */
    readonly text: string | null

    // Owm methods of Clutter-11.Clutter.TextBuffer

    /**
     * Deletes a sequence of characters from the buffer. `n_chars` characters are
     * deleted starting at `position`. If `n_chars` is negative, then all characters
     * until the end of the text are deleted.
     * 
     * If `position` or `n_chars` are out of bounds, then they are coerced to sane
     * values.
     * 
     * Note that the positions are specified in characters, not bytes.
     * @param position position at which to delete text
     * @param n_chars number of characters to delete
     * @returns The number of characters deleted.
     */
    delete_text(position: number, n_chars: number): number
    /**
     * Emits the [signal`TextBuffer:`:deleted-text] signal on `buffer`.
     * 
     * Used when subclassing #ClutterTextBuffer
     * @param position position at which text was deleted
     * @param n_chars number of characters deleted
     */
    emit_deleted_text(position: number, n_chars: number): void
    /**
     * Emits the [signal`TextBuffer:`:inserted-text] signal on `buffer`.
     * 
     * Used when subclassing #ClutterTextBuffer
     * @param position position at which text was inserted
     * @param chars text that was inserted
     * @param n_chars number of characters inserted
     */
    emit_inserted_text(position: number, chars: string | null, n_chars: number): void
    /**
     * Retrieves the length in bytes of the buffer.
     * See [method`TextBuffer`.get_length].
     * @returns The byte length of the buffer.
     */
    get_bytes(): number
    /**
     * Retrieves the length in characters of the buffer.
     * @returns The number of characters in the buffer.
     */
    get_length(): number
    /**
     * Retrieves the maximum allowed length of the text in
     * `buffer`. See [method`TextBuffer`.set_max_length].
     * @returns the maximum allowed number of characters               in #ClutterTextBuffer, or 0 if there is no maximum.
     */
    get_max_length(): number
    /**
     * Retrieves the contents of the buffer.
     * 
     * The memory pointer returned by this call will not change
     * unless this object emits a signal, or is finalized.
     * @returns a pointer to the contents of the widget as a      string. This string points to internally allocated      storage in the buffer and must not be freed, modified or      stored.
     */
    get_text(): string | null
    /**
     * Inserts `n_chars` characters of `chars` into the contents of the
     * buffer, at position `position`.
     * 
     * If `n_chars` is negative, then characters from chars will be inserted
     * until a null-terminator is found. If `position` or `n_chars` are out of
     * bounds, or the maximum buffer text length is exceeded, then they are
     * coerced to sane values.
     * 
     * Note that the position and length are in characters, not in bytes.
     * @param position the position at which to insert text.
     * @param chars the text to insert into the buffer.
     * @param n_chars the length of the text in characters, or -1
     * @returns The number of characters actually inserted.
     */
    insert_text(position: number, chars: string | null, n_chars: number): number
    /**
     * Sets the maximum allowed length of the contents of the buffer.
     * 
     * If the current contents are longer than the given length,
     * then they will be truncated to fit.
     * @param max_length the maximum length of the entry buffer, or 0 for no maximum.   (other than the maximum length of entries.) The value passed in will   be clamped to the range [ 0, %CLUTTER_TEXT_BUFFER_MAX_SIZE ].
     */
    set_max_length(max_length: number): void
    /**
     * Sets the text in the buffer.
     * 
     * This is roughly equivalent to calling [method`TextBuffer`.delete_text]
     * and [method`TextBuffer`.insert_text].
     * 
     * Note that `n_chars` is in characters, not in bytes.
     * @param chars the new text
     * @param n_chars the number of characters in `text,` or -1
     */
    set_text(chars: string | null, n_chars: number): void

    // Own virtual methods of Clutter-11.Clutter.TextBuffer

    /**
     * Deletes a sequence of characters from the buffer. `n_chars` characters are
     * deleted starting at `position`. If `n_chars` is negative, then all characters
     * until the end of the text are deleted.
     * 
     * If `position` or `n_chars` are out of bounds, then they are coerced to sane
     * values.
     * 
     * Note that the positions are specified in characters, not bytes.
     * @virtual 
     * @param position position at which to delete text
     * @param n_chars number of characters to delete
     * @returns The number of characters deleted.
     */
    vfunc_delete_text(position: number, n_chars: number): number
    vfunc_deleted_text(position: number, n_chars: number): void
    /**
     * Retrieves the length in characters of the buffer.
     * @virtual 
     * @returns The number of characters in the buffer.
     */
    vfunc_get_length(): number
    vfunc_get_text(n_bytes: number): string | null
    /**
     * Inserts `n_chars` characters of `chars` into the contents of the
     * buffer, at position `position`.
     * 
     * If `n_chars` is negative, then characters from chars will be inserted
     * until a null-terminator is found. If `position` or `n_chars` are out of
     * bounds, or the maximum buffer text length is exceeded, then they are
     * coerced to sane values.
     * 
     * Note that the position and length are in characters, not in bytes.
     * @virtual 
     * @param position the position at which to insert text.
     * @param chars the text to insert into the buffer.
     * @param n_chars the length of the text in characters, or -1
     * @returns The number of characters actually inserted.
     */
    vfunc_insert_text(position: number, chars: string | null, n_chars: number): number
    vfunc_inserted_text(position: number, chars: string | null, n_chars: number): void

    // Own signals of Clutter-11.Clutter.TextBuffer

    connect(sigName: "deleted-text", callback: TextBuffer.DeletedTextSignalCallback): number
    connect_after(sigName: "deleted-text", callback: TextBuffer.DeletedTextSignalCallback): number
    emit(sigName: "deleted-text", position: number, n_chars: number, ...args: any[]): void
    connect(sigName: "inserted-text", callback: TextBuffer.InsertedTextSignalCallback): number
    connect_after(sigName: "inserted-text", callback: TextBuffer.InsertedTextSignalCallback): number
    emit(sigName: "inserted-text", position: number, chars: string | null, n_chars: number, ...args: any[]): void
}

/**
 * Text buffer for [class`Text]`
 * 
 * The #ClutterTextBuffer class contains the actual text displayed in a
 * [class`Text]` widget.
 * 
 * A single #ClutterTextBuffer object can be shared by multiple [class`Text]`
 * widgets which will then share the same text content, but not the cursor
 * position, visibility attributes, icon etc.
 * 
 * #ClutterTextBuffer may be derived from. Such a derived class might allow
 * text to be stored in an alternate location, such as non-pageable memory,
 * useful in the case of important passwords. Or a derived class could
 * integrate with an application's concept of undo/redo.
 * @class 
 */
class TextBuffer {

    // Own properties of Clutter-11.Clutter.TextBuffer

    static name: string

    // Constructors of Clutter-11.Clutter.TextBuffer

    /**
     * Create a new ClutterTextBuffer object.
     * @constructor 
     * @returns A new ClutterTextBuffer object.
     */
    constructor() 
    /**
     * Create a new ClutterTextBuffer object.
     * @constructor 
     * @returns A new ClutterTextBuffer object.
     */
    static new(): TextBuffer
    /**
     * Create a new ClutterTextBuffer object with some text.
     * @constructor 
     * @param text initial buffer text
     * @param text_len initial buffer text length, or -1 for null-terminated.
     * @returns A new ClutterTextBuffer object.
     */
    static new_with_text(text: string | null, text_len: number): TextBuffer
}

interface TextNode {
}

class TextNode extends PaintNode {

    // Own properties of Clutter-11.Clutter.TextNode

    static name: string

    // Constructors of Clutter-11.Clutter.TextNode

    /**
     * Creates a new #ClutterPaintNode that will paint a #PangoLayout
     * with the given color.
     * 
     * This function takes a reference on the passed `layout,` so it
     * is safe to call g_object_unref() after it returns.
     * @constructor 
     * @param layout a #PangoLayout, or %NULL
     * @param color the color used to paint the layout,   or %NULL
     * @returns the newly created #ClutterPaintNode.   Use clutter_paint_node_unref() when done
     */
    constructor(layout: Pango.Layout | null, color: Color | null) 
    /**
     * Creates a new #ClutterPaintNode that will paint a #PangoLayout
     * with the given color.
     * 
     * This function takes a reference on the passed `layout,` so it
     * is safe to call g_object_unref() after it returns.
     * @constructor 
     * @param layout a #PangoLayout, or %NULL
     * @param color the color used to paint the layout,   or %NULL
     * @returns the newly created #ClutterPaintNode.   Use clutter_paint_node_unref() when done
     */
    static new(layout: Pango.Layout | null, color: Color | null): TextNode
}

interface TextureContent extends Content {

    // Owm methods of Clutter-11.Clutter.TextureContent

    /**
     * Retrieves a pointer to the [iface`Cogl`.Texture] used by `texture_content`.
     * 
     * If you change the contents of the returned [iface`Cogl`.Texture] you will need
     * to manually invalidate the `texture_content` with [method`Content`.invalidate]
     * in order to update the actors using `texture_content` as their content.
     * @returns a pointer to the [iface@Cogl.Texture]
     */
    get_texture(): Cogl.Texture
}

class TextureContent {

    // Own properties of Clutter-11.Clutter.TextureContent

    static name: string

    // Constructors of Clutter-11.Clutter.TextureContent

    /**
     * Creates a new [class`TextureContent]` instance for `texture,` taking an
     * internal reference to `texture`.
     * 
     * If you change the contents of the [iface`Cogl`.Texture] you will need
     * to manually invalidate the `texture_content` with [method`Content`.invalidate]
     * in order to update the actors using `texture_content` as their content.
     * @param texture a #CoglTexture
     * @param clip A clipping rectangle
     * @returns the newly created #ClutterTextureContent instance.   Use [method@GObject.Object.unref] when done.
     */
    static new_from_texture(texture: Cogl.Texture, clip: any | null): Content
}

interface TextureNode {
}

class TextureNode extends PipelineNode {

    // Own properties of Clutter-11.Clutter.TextureNode

    static name: string

    // Constructors of Clutter-11.Clutter.TextureNode

    /**
     * Creates a new #ClutterPaintNode that will paint the passed `texture`.
     * 
     * This function will take a reference on `texture,` so it is safe to
     * call cogl_object_unref() on `texture` when it returns.
     * 
     * The `color` must not be pre-multiplied with its #ClutterColor.alpha
     * channel value; if `color` is %NULL, a fully opaque white color will
     * be used for blending.
     * @constructor 
     * @param texture a #CoglTexture
     * @param color a #ClutterColor used for blending, or %NULL
     * @param min_filter the minification filter for the texture
     * @param mag_filter the magnification filter for the texture
     * @returns the newly created #ClutterPaintNode.   Use clutter_paint_node_unref() when done
     */
    constructor(texture: Cogl.Texture, color: Color | null, min_filter: ScalingFilter, mag_filter: ScalingFilter) 
    /**
     * Creates a new #ClutterPaintNode that will paint the passed `texture`.
     * 
     * This function will take a reference on `texture,` so it is safe to
     * call cogl_object_unref() on `texture` when it returns.
     * 
     * The `color` must not be pre-multiplied with its #ClutterColor.alpha
     * channel value; if `color` is %NULL, a fully opaque white color will
     * be used for blending.
     * @constructor 
     * @param texture a #CoglTexture
     * @param color a #ClutterColor used for blending, or %NULL
     * @param min_filter the minification filter for the texture
     * @param mag_filter the magnification filter for the texture
     * @returns the newly created #ClutterPaintNode.   Use clutter_paint_node_unref() when done
     */
    static new(texture: Cogl.Texture, color: Color | null, min_filter: ScalingFilter, mag_filter: ScalingFilter): TextureNode

    // Overloads of new

    /**
     * Creates a new #ClutterPaintNode that will use the `pipeline` to
     * paint its contents.
     * 
     * This function will acquire a reference on the passed `pipeline,`
     * so it is safe to call cogl_object_unref() when it returns.
     * @constructor 
     * @param pipeline a Cogl pipeline state object, or %NULL
     * @returns the newly created #ClutterPaintNode.   Use clutter_paint_node_unref() when done.
     */
    static new(pipeline: Cogl.Pipeline | null): PipelineNode
}

module Timeline {

    // Signal callback interfaces

    /**
     * Signal callback interface for `completed`
     */
    interface CompletedSignalCallback {
        ($obj: Timeline): void
    }

    /**
     * Signal callback interface for `marker-reached`
     */
    interface MarkerReachedSignalCallback {
        ($obj: Timeline, marker_name: string | null, msecs: number): void
    }

    /**
     * Signal callback interface for `new-frame`
     */
    interface NewFrameSignalCallback {
        ($obj: Timeline, msecs: number): void
    }

    /**
     * Signal callback interface for `paused`
     */
    interface PausedSignalCallback {
        ($obj: Timeline): void
    }

    /**
     * Signal callback interface for `started`
     */
    interface StartedSignalCallback {
        ($obj: Timeline): void
    }

    /**
     * Signal callback interface for `stopped`
     */
    interface StoppedSignalCallback {
        ($obj: Timeline, is_finished: boolean): void
    }

}

interface Timeline extends Scriptable {

    // Own properties of Clutter-11.Clutter.Timeline

    actor: Actor
    /**
     * If the direction of the timeline should be automatically reversed
     * when reaching the end.
     */
    auto_reverse: boolean
    /**
     * A delay, in milliseconds, that should be observed by the
     * timeline before actually starting.
     */
    delay: number
    /**
     * The direction of the timeline, either %CLUTTER_TIMELINE_FORWARD or
     * %CLUTTER_TIMELINE_BACKWARD.
     */
    direction: TimelineDirection
    /**
     * Duration of the timeline in milliseconds, depending on the
     * [property`Timeline:`frame-clock] value.
     */
    duration: number
    /**
     * The frame clock driving the timeline.
     */
    frame_clock: FrameClock
    /**
     * Controls the way a #ClutterTimeline computes the normalized progress.
     */
    progress_mode: AnimationMode
    /**
     * Defines how many times the timeline should repeat.
     * 
     * If the repeat count is 0, the timeline does not repeat.
     * 
     * If the repeat count is set to -1, the timeline will repeat until it is
     * stopped.
     */
    repeat_count: number

    // Owm methods of Clutter-11.Clutter.Timeline

    /**
     * Adds a named marker that will be hit when the timeline has reached
     * the specified `progress`.
     * 
     * Markers are unique string identifiers for a given position on the
     * timeline. Once `timeline` reaches the given `progress` of its duration,
     * if will emit a [signal`Timeline:`:marker-reached] signal for each marker
     * attached to that particular point.
     * 
     * A marker can be removed with [method`Timeline`.remove_marker]. The
     * timeline can be advanced to a marker using
     * [method`Timeline`.advance_to_marker].
     * 
     * See also: [method`Timeline`.add_marker_at_time]
     * @param marker_name the unique name for this marker
     * @param progress the normalized value of the position of the martke
     */
    add_marker(marker_name: string | null, progress: number): void
    /**
     * Adds a named marker that will be hit when the timeline has been
     * running for `msecs` milliseconds.
     * 
     * Markers are unique string identifiers for a given position on the
     * timeline. Once `timeline` reaches the given `msecs,` it will emit
     * a [signal`Timeline:`:marker-reached] signal for each marker attached to that position.
     * 
     * A marker can be removed with [method`Timeline`.remove_marker]. The
     * timeline can be advanced to a marker using
     * [method`Timeline`.advance_to_marker].
     * 
     * See also: [method`Timeline`.add_marker]
     * @param marker_name the unique name for this marker
     * @param msecs position of the marker in milliseconds
     */
    add_marker_at_time(marker_name: string | null, msecs: number): void
    /**
     * Advance timeline to the requested point. The point is given as a
     * time in milliseconds since the timeline started.
     * 
     * The `timeline` will not emit the [signal`Timeline:`:new-frame]
     * signal for the given time. The first [signal`Timeline:`:new-frame] signal
     * after the call to [method`Timeline`.advance] will be emit the skipped markers.
     * @param msecs Time to advance to
     */
    advance(msecs: number): void
    /**
     * Advances `timeline` to the time of the given `marker_name`.
     * 
     * Like [method`Timeline`.advance], this function will not
     * emit the [signal`Timeline:`:new-frame] for the time where `marker_name`
     * is set, nor it will emit [signal`Timeline:`:marker-reached] for
     * `marker_name`.
     * @param marker_name the name of the marker
     */
    advance_to_marker(marker_name: string | null): void
    /**
     * Get the actor the timeline is associated with.
     * @returns the associated #ClutterActor
     */
    get_actor(): Actor
    /**
     * Retrieves the value set by [method`Timeline`.set_auto_reverse].
     * @returns %TRUE if the timeline should automatically reverse, and   %FALSE otherwise
     */
    get_auto_reverse(): boolean
    /**
     * Retrieves the control points for the cubic bezier progress mode.
     * @returns %TRUE if the @timeline is using a cubic bezier progress   more, and %FALSE otherwise
     */
    get_cubic_bezier_progress(): [ /* returnType */ boolean, /* c_1 */ any, /* c_2 */ any ]
    /**
     * Retrieves the current repeat for a timeline.
     * 
     * Repeats start at 0.
     * @returns the current repeat
     */
    get_current_repeat(): number
    /**
     * Retrieves the delay set using [method`Timeline`.set_delay].
     * @returns the delay in milliseconds.
     */
    get_delay(): number
    /**
     * Retrieves the amount of time elapsed since the last
     * [signal`Timeline:`:new-frame] signal.
     * 
     * This function is only useful inside handlers for the ::new-frame
     * signal, and its behaviour is undefined if the timeline is not
     * playing.
     * @returns the amount of time in milliseconds elapsed since the last frame
     */
    get_delta(): number
    /**
     * Retrieves the direction of the timeline set with
     * [method`Timeline`.set_direction].
     * @returns the direction of the timeline
     */
    get_direction(): TimelineDirection
    /**
     * Retrieves the duration of a #ClutterTimeline in milliseconds.
     * See [method`Timeline`.set_duration].
     * @returns the duration of the timeline, in milliseconds.
     */
    get_duration(): number
    /**
     * Retrieves the full duration of the `timeline,` taking into account the
     * current value of the [property`Timeline:`repeat-count] property.
     * 
     * If the [property`Timeline:`repeat-count] property is set to -1, this function
     * will return %G_MAXINT64.
     * 
     * The returned value is to be considered a hint, and it's only valid
     * as long as the `timeline` hasn't been changed.
     * @returns the full duration of the #ClutterTimeline
     */
    get_duration_hint(): number
    /**
     * Request the current time position of the timeline.
     * @returns current elapsed time in milliseconds.
     */
    get_elapsed_time(): number
    /**
     * The position of the timeline in a normalized [-1, 2] interval.
     * 
     * The return value of this function is determined by the progress
     * mode set using [method`Timeline`.set_progress_mode], or by the
     * progress function set using [method`Timeline`.set_progress_func].
     * @returns the normalized current position in the timeline.
     */
    get_progress(): number
    /**
     * Retrieves the progress mode set using [method`Timeline`.set_progress_mode]
     * or [method`Timeline`.set_progress_func].
     * @returns a #ClutterAnimationMode
     */
    get_progress_mode(): AnimationMode
    /**
     * Retrieves the number set using [method`Timeline`.set_repeat_count].
     * @returns the number of repeats
     */
    get_repeat_count(): number
    /**
     * Retrieves the parameters of the step progress mode used by `timeline`.
     * @returns %TRUE if the @timeline is using a step progress   mode, and %FALSE otherwise
     */
    get_step_progress(): [ /* returnType */ boolean, /* n_steps */ number, /* step_mode */ StepMode ]
    /**
     * Checks whether `timeline` has a marker set with the given name.
     * @param marker_name the name of the marker
     * @returns %TRUE if the marker was found
     */
    has_marker(marker_name: string | null): boolean
    /**
     * Queries state of a #ClutterTimeline.
     * @returns %TRUE if timeline is currently playing
     */
    is_playing(): boolean
    /**
     * Retrieves the list of markers at time `msecs`. If `msecs` is a
     * negative integer, all the markers attached to `timeline` will be
     * returned.
     * @param msecs the time to check, or -1
     * @returns    a newly allocated, %NULL terminated string array containing the names   of the markers. Use [func@GLib.strfreev] when done.
     */
    list_markers(msecs: number): string[]
    /**
     * Pauses the #ClutterTimeline on current frame
     */
    pause(): void
    /**
     * Removes `marker_name,` if found, from `timeline`.
     * @param marker_name the name of the marker to remove
     */
    remove_marker(marker_name: string | null): void
    /**
     * Rewinds #ClutterTimeline to the first frame if its direction is
     * %CLUTTER_TIMELINE_FORWARD and the last frame if it is
     * %CLUTTER_TIMELINE_BACKWARD.
     */
    rewind(): void
    /**
     * Set the actor the timeline is associated with.
     * @param actor a #ClutterActor
     */
    set_actor(actor: Actor | null): void
    /**
     * Sets whether `timeline` should reverse the direction after the
     * emission of the [signal`Timeline:`:completed] signal.
     * 
     * Setting the [property`Timeline:`auto-reverse] property to %TRUE is the
     * equivalent of connecting a callback to the [signal`Timeline:`:completed]
     * signal and changing the direction of the timeline from that callback;
     * for instance, this code:
     * 
     * ```c
     * static void
     * reverse_timeline (ClutterTimeline *timeline)
     * {
     *   ClutterTimelineDirection dir = clutter_timeline_get_direction (timeline);
     * 
     *   if (dir == CLUTTER_TIMELINE_FORWARD)
     *     dir = CLUTTER_TIMELINE_BACKWARD;
     *   else
     *     dir = CLUTTER_TIMELINE_FORWARD;
     * 
     *   clutter_timeline_set_direction (timeline, dir);
     * }
     * ...
     *   timeline = clutter_timeline_new (1000);
     *   clutter_timeline_set_repeat_count (timeline, -1);
     *   g_signal_connect (timeline, "completed",
     *                     G_CALLBACK (reverse_timeline),
     *                     NULL);
     * ```
     * 
     * can be effectively replaced by:
     * 
     * ```c
     *   timeline = clutter_timeline_new (1000);
     *   clutter_timeline_set_repeat_count (timeline, -1);
     *   clutter_timeline_set_auto_reverse (timeline);
     * ```
     * @param reverse %TRUE if the `timeline` should reverse the direction
     */
    set_auto_reverse(reverse: boolean): void
    /**
     * Sets the [property`Timeline:`progress-mode] of `timeline`
     * to %CLUTTER_CUBIC_BEZIER, and sets the two control
     * points for the cubic bezier.
     * 
     * The cubic bezier curve is between (0, 0) and (1, 1). The X coordinate
     * of the two control points must be in the [ 0, 1 ] range, while the
     * Y coordinate of the two control points can exceed this range.
     * @param c_1 the first control point for the cubic bezier
     * @param c_2 the second control point for the cubic bezier
     */
    set_cubic_bezier_progress(c_1: any, c_2: any): void
    /**
     * Sets the delay, in milliseconds, before `timeline` should start.
     * @param msecs delay in milliseconds
     */
    set_delay(msecs: number): void
    /**
     * Sets the direction of `timeline,` either %CLUTTER_TIMELINE_FORWARD or
     * %CLUTTER_TIMELINE_BACKWARD.
     * @param direction the direction of the timeline
     */
    set_direction(direction: TimelineDirection): void
    /**
     * Sets the duration of the timeline, in milliseconds. The speed
     * of the timeline depends on the [property`Timeline:`frame-clock] setting.
     * @param msecs duration of the timeline in milliseconds
     */
    set_duration(msecs: number): void
    set_frame_clock(frame_clock: FrameClock): void
    /**
     * Sets a custom progress function for `timeline`. The progress function will
     * be called by [method`Timeline`.get_progress] and will be used to compute
     * the progress value based on the elapsed time and the total duration of the
     * timeline.
     * 
     * If `func` is not %NULL, the [property`Timeline:`progress-mode] property will
     * be set to %CLUTTER_CUSTOM_MODE.
     * 
     * If `func` is %NULL, any previously set progress function will be unset, and
     * the [property`Timeline:`progress-mode] property will be set to %CLUTTER_LINEAR.
     * @param func a progress function, or %NULL
     */
    set_progress_func(func: TimelineProgressFunc | null): void
    /**
     * Sets the progress function using a value from the [enum`AnimationMode]`
     * enumeration. The `mode` cannot be %CLUTTER_CUSTOM_MODE or bigger than
     * %CLUTTER_ANIMATION_LAST.
     * @param mode the progress mode, as a #ClutterAnimationMode
     */
    set_progress_mode(mode: AnimationMode): void
    /**
     * Sets the number of times the `timeline` should repeat.
     * 
     * If `count` is 0, the timeline never repeats.
     * 
     * If `count` is -1, the timeline will always repeat until
     * it's stopped.
     * @param count the number of times the timeline should repeat
     */
    set_repeat_count(count: number): void
    /**
     * Sets the [property`Timeline:`progress-mode] of the `timeline` to %CLUTTER_STEPS
     * and provides the parameters of the step function.
     * @param n_steps the number of steps
     * @param step_mode whether the change should happen at the start   or at the end of the step
     */
    set_step_progress(n_steps: number, step_mode: StepMode): void
    /**
     * Advance timeline by the requested time in milliseconds
     * @param msecs Amount of time to skip
     */
    skip(msecs: number): void
    /**
     * Starts the #ClutterTimeline playing.
     */
    start(): void
    /**
     * Stops the #ClutterTimeline and moves to frame 0
     */
    stop(): void

    // Own virtual methods of Clutter-11.Clutter.Timeline

    vfunc_completed(): void
    vfunc_marker_reached(marker_name: string | null, msecs: number): void
    vfunc_new_frame(msecs: number): void
    vfunc_paused(): void
    vfunc_started(): void
    vfunc_stopped(is_finished: boolean): void

    // Own signals of Clutter-11.Clutter.Timeline

    connect(sigName: "completed", callback: Timeline.CompletedSignalCallback): number
    connect_after(sigName: "completed", callback: Timeline.CompletedSignalCallback): number
    emit(sigName: "completed", ...args: any[]): void
    connect(sigName: "marker-reached", callback: Timeline.MarkerReachedSignalCallback): number
    connect_after(sigName: "marker-reached", callback: Timeline.MarkerReachedSignalCallback): number
    emit(sigName: "marker-reached", marker_name: string | null, msecs: number, ...args: any[]): void
    connect(sigName: "new-frame", callback: Timeline.NewFrameSignalCallback): number
    connect_after(sigName: "new-frame", callback: Timeline.NewFrameSignalCallback): number
    emit(sigName: "new-frame", msecs: number, ...args: any[]): void
    connect(sigName: "paused", callback: Timeline.PausedSignalCallback): number
    connect_after(sigName: "paused", callback: Timeline.PausedSignalCallback): number
    emit(sigName: "paused", ...args: any[]): void
    connect(sigName: "started", callback: Timeline.StartedSignalCallback): number
    connect_after(sigName: "started", callback: Timeline.StartedSignalCallback): number
    emit(sigName: "started", ...args: any[]): void
    connect(sigName: "stopped", callback: Timeline.StoppedSignalCallback): number
    connect_after(sigName: "stopped", callback: Timeline.StoppedSignalCallback): number
    emit(sigName: "stopped", is_finished: boolean, ...args: any[]): void
}

/**
 * A class for time-based events
 * 
 * #ClutterTimeline is a base class for managing time-based event that cause
 * Clutter to redraw a stage, such as animations.
 * 
 * Each #ClutterTimeline instance has a duration: once a timeline has been
 * started, using [method`Timeline`.start], it will emit a signal that can
 * be used to update the state of the actors.
 * 
 * It is important to note that #ClutterTimeline is not a generic API for
 * calling closures after an interval; each Timeline is tied into a frame
 * clock used to drive the frame cycle. If you need to schedule a closure
 * after an interval, see [func`threads_add_timeout]` instead.
 * 
 * Users of #ClutterTimeline should connect to the [signal`Timeline:`:new-frame]
 * signal, which is emitted each time a timeline is advanced during the maste
 * clock iteration. The [signal`Timeline:`:new-frame] signal provides the time
 * elapsed since the beginning of the timeline, in milliseconds. A normalized
 * progress value can be obtained by calling [method`Timeline`.get_progress].
 * By using [method`Timeline`.get_delta] it is possible to obtain the wallclock
 * time elapsed since the last emission of the [signal`Timeline:`:new-frame]
 * signal.
 * 
 * Initial state can be set up by using the [signal`Timeline:`:started] signal,
 * while final state can be set up by using the [signal`Timeline:`:stopped]
 * signal. The #ClutterTimeline guarantees the emission of at least a single
 * [signal`Timeline:`:new-frame] signal, as well as the emission of the
 * [signal`Timeline:`:completed] signal every time the #ClutterTimeline reaches
 * its [property`Timeline:`duration].
 * 
 * It is possible to connect to specific points in the timeline progress by
 * adding markers using [method`Timeline`.add_marker_at_time] and connecting
 * to the [signal`Timeline:`:marker-reached] signal.
 * 
 * Timelines can be made to loop once they reach the end of their duration, by
 * using clutter_timeline_set_repeat_count(); a looping timeline will still
 * emit the [signal`Timeline:`:completed] signal once it reaches the end of its
 * duration at each repeat. If you want to be notified of the end of the last
 * repeat, use the [signal`Timeline:`:stopped] signal.
 * 
 * Timelines have a [property`Timeline:`direction]: the default direction is
 * %CLUTTER_TIMELINE_FORWARD, and goes from 0 to the duration; it is possible
 * to change the direction to %CLUTTER_TIMELINE_BACKWARD, and have the timeline
 * go from the duration to 0. The direction can be automatically reversed
 * when reaching completion by using the [property`Timeline:`auto-reverse] property.
 * 
 * Timelines are used in the Clutter animation framework by classes like
 * [class`Transition]`.
 * 
 * ## Defining Timelines in ClutterScript
 * 
 * A #ClutterTimeline can be described in [class`Script]` like any
 * other object. Additionally, it is possible to define markers directly
 * inside the JSON definition by using the `markers` JSON object member,
 * such as:
 * 
 * ```json
 * {
 *   "type" : "ClutterTimeline",
 *   "duration" : 1000,
 *   "markers" : [
 *     { "name" : "quarter", "time" : 250 },
 *     { "name" : "half-time", "time" : 500 },
 *     { "name" : "three-quarters", "time" : 750 }
 *   ]
 * }
 * ```
 * @class 
 */
class Timeline {

    // Own properties of Clutter-11.Clutter.Timeline

    static name: string

    // Constructors of Clutter-11.Clutter.Timeline

    /**
     * Creates a new #ClutterTimeline with a duration of `duration_ms` milli seconds.
     * @constructor 
     * @param duration_ms Duration of the timeline in milliseconds
     * @returns the newly created #ClutterTimeline instance. Use   [method@GObject.Object.unref] when done using it
     */
    constructor(duration_ms: number) 
    /**
     * Creates a new #ClutterTimeline with a duration of `duration_ms` milli seconds.
     * @constructor 
     * @param duration_ms Duration of the timeline in milliseconds
     * @returns the newly created #ClutterTimeline instance. Use   [method@GObject.Object.unref] when done using it
     */
    static new(duration_ms: number): Timeline
    /**
     * Creates a new #ClutterTimeline with a duration of `duration` milli seconds.
     * @constructor 
     * @param actor The #ClutterActor the timeline is associated with
     * @param duration_ms Duration of the timeline in milliseconds
     * @returns the newly created #ClutterTimeline instance. Use   [method@GObject.Object.unref] when done using it
     */
    static new_for_actor(actor: Actor, duration_ms: number): Timeline
    /**
     * Creates a new #ClutterTimeline with a duration of `duration_ms` milli seconds.
     * @constructor 
     * @param frame_clock The #ClutterFrameClock the timeline is driven by
     * @param duration_ms Duration of the timeline in milliseconds
     * @returns the newly created #ClutterTimeline instance. Use   [method@GObject.Object.unref] when done using it
     */
    static new_for_frame_clock(frame_clock: FrameClock, duration_ms: number): Timeline
}

interface TransformNode {
}

class TransformNode extends PaintNode {

    // Own properties of Clutter-11.Clutter.TransformNode

    static name: string

    // Constructors of Clutter-11.Clutter.TransformNode

    constructor(projection: any) 
    static new(projection: any): TransformNode
}

interface Transition extends Scriptable {

    // Own properties of Clutter-11.Clutter.Transition

    /**
     * The [iface`Animatable]` instance currently being animated.
     */
    animatable: Animatable
    /**
     * The [class`Interval]` used to describe the initial and final states
     * of the transition.
     */
    interval: Interval
    /**
     * Whether the #ClutterTransition should be automatically detached
     * from the [property`Transition:`animatable] instance whenever the
     * [signal`Timeline:`:stopped] signal is emitted.
     * 
     * The [property`Transition:`remove-on-complete] property takes into
     * account the value of the [property`Timeline:`repeat-count] property,
     * and it only detaches the transition if the transition is not
     * repeating.
     */
    remove_on_complete: boolean

    // Owm methods of Clutter-11.Clutter.Transition

    /**
     * Retrieves the [iface`Animatable]` set using [method`Transition`.set_animatable].
     * @returns a [iface@Animatable], or %NULL; the returned   animatable is owned by the #ClutterTransition, and it should not be freed   directly.
     */
    get_animatable(): Animatable
    /**
     * Retrieves the interval set using [method`Transition`.set_interval]
     * @returns a [class@Interval], or %NULL; the returned   interval is owned by the #ClutterTransition and it should not be freed   directly
     */
    get_interval(): Interval
    /**
     * Retrieves the value of the [property`Transition:`remove-on-complete] property.
     * @returns %TRUE if the @transition should be detached when complete,   and %FALSE otherwise
     */
    get_remove_on_complete(): boolean
    /**
     * Sets the [property`Transition:`animatable] property.
     * 
     * The `transition` will acquire a reference to the `animatable` instance,
     * and will call the [vfunc`Transition`.attached] virtual function.
     * 
     * If an existing [iface`Animatable]` is attached to `transition,` the
     * reference will be released, and the [vfunc`Transition`.detached]
     * virtual function will be called.
     * @param animatable a #ClutterAnimatable, or %NULL
     */
    set_animatable(animatable: Animatable | null): void
    /**
     * Sets the initial value of the transition.
     * 
     * This is a convenience function that will either create the
     * [class`Interval]` used by `transition,` or will update it if
     * the [property`Transition:`interval] is already set.
     * 
     * This function will copy the contents of `value,` so it is
     * safe to call [method`GObject`.Value.unset] after it returns.
     * 
     * If `transition` already has a [property`Transition:`interval] set,
     * then `value` must hold the same type, or a transformable type,
     * as the interval's [property`Interval:`value-type] property.
     * 
     * This function is meant to be used by language bindings.
     * @param value a #GValue with the initial value of the transition
     */
    set_from(value: any): void
    /**
     * Sets the [property`Transition:`interval] property using `interval`.
     * 
     * The `transition` will acquire a reference on the `interval,` sinking
     * the floating flag on it if necessary.
     * @param interval a #ClutterInterval, or %NULL
     */
    set_interval(interval: Interval | null): void
    /**
     * Sets whether `transition` should be detached from the [iface`Animatable]`
     * set using [method`Transition`.set_animatable] when the
     * [signal`Timeline:`:completed] signal is emitted.
     * @param remove_complete whether to detach `transition` when complete
     */
    set_remove_on_complete(remove_complete: boolean): void
    /**
     * Sets the final value of the transition.
     * 
     * This is a convenience function that will either create the
     * #ClutterInterval used by `transition,` or will update it if
     * the [property`Transition:`interval] is already set.
     * 
     * This function will copy the contents of `value,` so it is
     * safe to call [method`GObject`.Value.unset] after it returns.
     * 
     * If `transition` already has a [property`Transition:`interval] set,
     * then `value` must hold the same type, or a transformable type,
     * as the interval's [property`Interval:`value-type] property.
     * 
     * This function is meant to be used by language bindings.
     * @param value a #GValue with the final value of the transition
     */
    set_to(value: any): void

    // Own virtual methods of Clutter-11.Clutter.Transition

    vfunc_attached(animatable: Animatable): void
    vfunc_compute_value(animatable: Animatable, interval: Interval, progress: number): void
    vfunc_detached(animatable: Animatable): void
}

/**
 * Transition between two values
 * 
 * #ClutterTransition is an abstract subclass of [class`Timeline]` that
 * computes the interpolation between two values, stored by a [class`Interval]`.
 * @class 
 */
class Transition extends Timeline {

    // Own properties of Clutter-11.Clutter.Transition

    static name: string
}

interface TransitionGroup extends Scriptable {

    // Owm methods of Clutter-11.Clutter.TransitionGroup

    /**
     * Adds `transition` to `group`.
     * 
     * This function acquires a reference on `transition` that will be released
     * when calling [method`TransitionGroup`.remove_transition].
     * @param transition a #ClutterTransition
     */
    add_transition(transition: Transition): void
    /**
     * Removes all transitions from `group`.
     * 
     * This function releases the reference acquired when calling
     * [method`TransitionGroup`.add_transition].
     */
    remove_all(): void
    /**
     * Removes `transition` from `group`.
     * 
     * This function releases the reference acquired on `transition` when
     * calling [method`TransitionGroup`.add_transition].
     * @param transition a #ClutterTransition
     */
    remove_transition(transition: Transition): void
}

/**
 * Group transitions together
 * 
 * The #ClutterTransitionGroup allows running multiple [class`Transition]`
 * instances concurrently.
 * 
 * The transitions inside a group will run within the boundaries of the
 * group; for instance, if a transition has a duration of 10 seconds, and
 * the group that contains it has a duration of 5 seconds, only the first
 * 5 seconds of the transition will be played.
 * @class 
 */
class TransitionGroup extends Transition {

    // Own properties of Clutter-11.Clutter.TransitionGroup

    static name: string

    // Constructors of Clutter-11.Clutter.TransitionGroup

    /**
     * Creates a new #ClutterTransitionGroup instance.
     * @constructor 
     * @returns the newly created #ClutterTransitionGroup. Use   [method@GObject.Object.unref] when done to deallocate the resources it   uses
     */
    constructor() 
    /**
     * Creates a new #ClutterTransitionGroup instance.
     * @constructor 
     * @returns the newly created #ClutterTransitionGroup. Use   [method@GObject.Object.unref] when done to deallocate the resources it   uses
     */
    static new(): TransitionGroup

    // Overloads of new

    /**
     * Creates a new #ClutterTimeline with a duration of `duration_ms` milli seconds.
     * @constructor 
     * @param duration_ms Duration of the timeline in milliseconds
     * @returns the newly created #ClutterTimeline instance. Use   [method@GObject.Object.unref] when done using it
     */
    static new(duration_ms: number): Timeline
}

interface VirtualInputDevice {

    // Own properties of Clutter-11.Clutter.VirtualInputDevice

    readonly device_type: InputDeviceType
    readonly seat: Seat

    // Own fields of Clutter-11.Clutter.VirtualInputDevice

    parent_instance: any

    // Owm methods of Clutter-11.Clutter.VirtualInputDevice

    get_device_type(): number
    get_seat(): Seat
    notify_absolute_motion(time_us: number, x: number, y: number): void
    notify_button(time_us: number, button: number, button_state: ButtonState): void
    notify_discrete_scroll(time_us: number, direction: ScrollDirection, scroll_source: ScrollSource): void
    notify_key(time_us: number, key: number, key_state: KeyState): void
    notify_keyval(time_us: number, keyval: number, key_state: KeyState): void
    notify_relative_motion(time_us: number, dx: number, dy: number): void
    notify_scroll_continuous(time_us: number, dx: number, dy: number, scroll_source: ScrollSource, finish_flags: ScrollFinishFlags): void
    notify_touch_down(time_us: number, slot: number, x: number, y: number): void
    notify_touch_motion(time_us: number, slot: number, x: number, y: number): void
    notify_touch_up(time_us: number, slot: number): void

    // Own virtual methods of Clutter-11.Clutter.VirtualInputDevice

    vfunc_notify_absolute_motion(time_us: number, x: number, y: number): void
    vfunc_notify_button(time_us: number, button: number, button_state: ButtonState): void
    vfunc_notify_discrete_scroll(time_us: number, direction: ScrollDirection, scroll_source: ScrollSource): void
    vfunc_notify_key(time_us: number, key: number, key_state: KeyState): void
    vfunc_notify_keyval(time_us: number, keyval: number, key_state: KeyState): void
    vfunc_notify_relative_motion(time_us: number, dx: number, dy: number): void
    vfunc_notify_scroll_continuous(time_us: number, dx: number, dy: number, scroll_source: ScrollSource, finish_flags: ScrollFinishFlags): void
    vfunc_notify_touch_down(time_us: number, slot: number, x: number, y: number): void
    vfunc_notify_touch_motion(time_us: number, slot: number, x: number, y: number): void
    vfunc_notify_touch_up(time_us: number, slot: number): void
}

class VirtualInputDevice {

    // Own properties of Clutter-11.Clutter.VirtualInputDevice

    static name: string
}

module ZoomAction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `zoom`
     */
    interface ZoomSignalCallback {
        ($obj: ZoomAction, actor: Actor, focal_point: any, factor: number): boolean
    }

}

interface ZoomAction {

    // Conflicting properties

    parent_instance: Action & ActorMeta & any

    // Owm methods of Clutter-11.Clutter.ZoomAction

    /**
     * Retrieves the focal point of the current zoom
     */
    get_focal_point(): /* point */ any
    /**
     * Retrieves the focal point relative to the actor's coordinates of
     * the current zoom
     */
    get_transformed_focal_point(): /* point */ any

    // Own signals of Clutter-11.Clutter.ZoomAction

    connect(sigName: "zoom", callback: ZoomAction.ZoomSignalCallback): number
    connect_after(sigName: "zoom", callback: ZoomAction.ZoomSignalCallback): number
    emit(sigName: "zoom", actor: Actor, focal_point: any, factor: number, ...args: any[]): void
}

/**
 * Action enabling zooming on actors
 * 
 * #ClutterZoomAction is a sub-class of [class`GestureAction]` that
 * implements all the necessary logic for zooming actors using a "pinch"
 * gesture between two touch points.
 * 
 * The simplest usage of [class`ZoomAction]` consists in adding it to
 * a [class`Actor]` and setting it as reactive; for instance, the following
 * code:
 * 
 * ```c
 *   clutter_actor_add_action (actor, clutter_zoom_action_new ());
 *   clutter_actor_set_reactive (actor, TRUE);
 * ```
 * 
 * will automatically result in the actor to be scale according to the
 * distance between two touch points.
 * @class 
 */
class ZoomAction extends GestureAction {

    // Own properties of Clutter-11.Clutter.ZoomAction

    static name: string

    // Constructors of Clutter-11.Clutter.ZoomAction

    /**
     * Creates a new #ClutterZoomAction instance
     * @constructor 
     * @returns the newly created #ClutterZoomAction
     */
    constructor() 
    /**
     * Creates a new #ClutterZoomAction instance
     * @constructor 
     * @returns the newly created #ClutterZoomAction
     */
    static new(): ZoomAction
}

interface ActionClass {

    // Own fields of Clutter-11.Clutter.ActionClass

    handle_event: (action: Action, event: Event) => boolean
}

/**
 * The ClutterActionClass structure contains only private data
 * @record 
 */
abstract class ActionClass {

    // Own properties of Clutter-11.Clutter.ActionClass

    static name: string
}

interface ActorBox {

    // Own fields of Clutter-11.Clutter.ActorBox

    /**
     * X coordinate of the top left corner
     * @field 
     */
    x1: number
    /**
     * Y coordinate of the top left corner
     * @field 
     */
    y1: number
    /**
     * X coordinate of the bottom right corner
     * @field 
     */
    x2: number
    /**
     * Y coordinate of the bottom right corner
     * @field 
     */
    y2: number

    // Owm methods of Clutter-11.Clutter.ActorBox

    /**
     * Clamps the components of `box` to the nearest integer
     */
    clamp_to_pixel(): void
    /**
     * Checks whether a point with `x,` `y` coordinates is contained
     * within `box`
     * @param x X coordinate of the point
     * @param y Y coordinate of the point
     * @returns %TRUE if the point is contained by the #ClutterActorBox
     */
    contains(x: number, y: number): boolean
    /**
     * Copies `box`
     * @returns a newly allocated copy of #ClutterActorBox. Use   [method@ActorBox.free] to free the allocated resources
     */
    copy(): ActorBox
    /**
     * Checks `box_a` and `box_b` for equality
     * @param box_b a #ClutterActorBox
     * @returns %TRUE if the passed #ClutterActorBox are equal
     */
    equal(box_b: ActorBox): boolean
    /**
     * Frees a #ClutterActorBox allocated using [ctor`ActorBox`.new]
     * or [method`ActorBox`.copy].
     */
    free(): void
    /**
     * Calculates the bounding box represented by the four vertices; for details
     * of the vertex array see [method`Actor`.get_abs_allocation_vertices].
     * @param verts array of four #graphene_point3d_t
     */
    from_vertices(verts: any[]): void
    /**
     * Retrieves the area of `box`
     * @returns the area of a #ClutterActorBox, in pixels
     */
    get_area(): number
    /**
     * Retrieves the height of the `box`
     * @returns the height of the box
     */
    get_height(): number
    /**
     * Retrieves the origin of `box`
     */
    get_origin(): [ /* x */ number, /* y */ number ]
    /**
     * Retrieves the size of `box`
     */
    get_size(): [ /* width */ number, /* height */ number ]
    /**
     * Retrieves the width of the `box`
     * @returns the width of the box
     */
    get_width(): number
    /**
     * Retrieves the X coordinate of the origin of `box`
     * @returns the X coordinate of the origin
     */
    get_x(): number
    /**
     * Retrieves the Y coordinate of the origin of `box`
     * @returns the Y coordinate of the origin
     */
    get_y(): number
    /**
     * Initializes `box` with the given coordinates.
     * @param x_1 X coordinate of the top left point
     * @param y_1 Y coordinate of the top left point
     * @param x_2 X coordinate of the bottom right point
     * @param y_2 Y coordinate of the bottom right point
     * @returns the initialized #ClutterActorBox
     */
    init(x_1: number, y_1: number, x_2: number, y_2: number): ActorBox
    /**
     * Initializes `box` with the given origin and size.
     * @param x X coordinate of the origin
     * @param y Y coordinate of the origin
     * @param width width of the box
     * @param height height of the box
     */
    init_rect(x: number, y: number, width: number, height: number): void
    /**
     * Interpolates between `initial` and `final` `ClutterActorBox`es
     * using `progress`
     * @param final the final #ClutterActorBox
     * @param progress the interpolation progress
     */
    interpolate(final: ActorBox, progress: number): /* result */ ActorBox
    /**
     * Checks if `box` has been initialized, a #ClutterActorBox is uninitialized
     * if it has a size of -1 at an origin of 0, 0.
     * @returns %TRUE if the box is uninitialized, %FALSE if it isn't
     */
    is_initialized(): boolean
    /**
     * Rescale the `box` by provided `scale` factor.
     * @param scale scale factor for resizing this box
     */
    scale(scale: number): void
    /**
     * Changes the origin of `box,` maintaining the size of the #ClutterActorBox.
     * @param x the X coordinate of the new origin
     * @param y the Y coordinate of the new origin
     */
    set_origin(x: number, y: number): void
    /**
     * Sets the size of `box,` maintaining the origin of the #ClutterActorBox.
     * @param width the new width
     * @param height the new height
     */
    set_size(width: number, height: number): void
    /**
     * Unions the two boxes `a` and `b` and stores the result in `result`.
     * @param b the second #ClutterActorBox
     */
    union(b: ActorBox): /* result */ ActorBox
}

/**
 * Bounding box of an actor.
 * 
 * The coordinates of the top left and right bottom corners
 * of an actor. The coordinates of the two points are expressed in
 * pixels with sub-pixel precision
 * @record 
 */
class ActorBox {

    // Own properties of Clutter-11.Clutter.ActorBox

    static name: string

    // Constructors of Clutter-11.Clutter.ActorBox

    /**
     * Allocates a new [struct`ActorBox]` using the passed coordinates
     * for the top left and bottom right points.
     * 
     * This function is the logical equivalent of:
     * 
     * ```c
     *   clutter_actor_box_init (clutter_actor_box_alloc (),
     *                           x_1, y_1,
     *                           x_2, y_2);
     * ```
     * @constructor 
     * @param x_1 X coordinate of the top left point
     * @param y_1 Y coordinate of the top left point
     * @param x_2 X coordinate of the bottom right point
     * @param y_2 Y coordinate of the bottom right point
     * @returns the newly allocated #ClutterActorBox.   Use [method@ActorBox.free] to free the resources
     */
    constructor(x_1: number, y_1: number, x_2: number, y_2: number) 
    /**
     * Allocates a new [struct`ActorBox]` using the passed coordinates
     * for the top left and bottom right points.
     * 
     * This function is the logical equivalent of:
     * 
     * ```c
     *   clutter_actor_box_init (clutter_actor_box_alloc (),
     *                           x_1, y_1,
     *                           x_2, y_2);
     * ```
     * @constructor 
     * @param x_1 X coordinate of the top left point
     * @param y_1 Y coordinate of the top left point
     * @param x_2 X coordinate of the bottom right point
     * @param y_2 Y coordinate of the bottom right point
     * @returns the newly allocated #ClutterActorBox.   Use [method@ActorBox.free] to free the resources
     */
    static new(x_1: number, y_1: number, x_2: number, y_2: number): ActorBox
    /**
     * Allocates a new [struct`ActorBox]`.
     * @returns the newly allocated #ClutterActorBox.   Use [method@ActorBox.free] to free its resources
     */
    static alloc(): ActorBox
}

interface ActorClass {

    // Own fields of Clutter-11.Clutter.ActorClass

    show: (self: Actor) => void
    hide: (self: Actor) => void
    hide_all: (self: Actor) => void
    realize: (self: Actor) => void
    unrealize: (self: Actor) => void
    map: (self: Actor) => void
    unmap: (self: Actor) => void
    paint: (self: Actor, paint_context: PaintContext) => void
    parent_set: (actor: Actor, old_parent: Actor) => void
    destroy: (self: Actor) => void
    pick: (actor: Actor, pick_context: PickContext) => void
    get_preferred_width: (self: Actor, for_height: number) => [ /* min_width_p */ number, /* natural_width_p */ number ]
    get_preferred_height: (self: Actor, for_width: number) => [ /* min_height_p */ number, /* natural_height_p */ number ]
    allocate: (self: Actor, box: ActorBox) => void
    apply_transform: (actor: Actor, matrix: any) => void
    event: (actor: Actor, event: Event) => boolean
    button_press_event: (actor: Actor, event: ButtonEvent) => boolean
    button_release_event: (actor: Actor, event: ButtonEvent) => boolean
    scroll_event: (actor: Actor, event: ScrollEvent) => boolean
    key_press_event: (actor: Actor, event: KeyEvent) => boolean
    key_release_event: (actor: Actor, event: KeyEvent) => boolean
    motion_event: (actor: Actor, event: MotionEvent) => boolean
    enter_event: (actor: Actor, event: CrossingEvent) => boolean
    leave_event: (actor: Actor, event: CrossingEvent) => boolean
    captured_event: (actor: Actor, event: Event) => boolean
    key_focus_in: (actor: Actor) => void
    key_focus_out: (actor: Actor) => void
    queue_relayout: (self: Actor) => void
    get_accessible: (self: Actor) => Atk.Object
    get_paint_volume: (actor: Actor, volume: PaintVolume) => boolean
    has_overlaps: (self: Actor) => boolean
    paint_node: (self: Actor, root: PaintNode) => void
    touch_event: (self: Actor, event: TouchEvent) => boolean
    has_accessible: (self: Actor) => boolean
    resource_scale_changed: (self: Actor) => void
    calculate_resource_scale: (self: Actor, phase: number) => number
}

/**
 * Base class for actors.
 * @record 
 */
abstract class ActorClass {

    // Own properties of Clutter-11.Clutter.ActorClass

    static name: string
}

interface ActorIter {

    // Owm methods of Clutter-11.Clutter.ActorIter

    /**
     * Safely destroys the #ClutterActor currently pointer to by the iterator
     * from its parent.
     * 
     * This function can only be called after clutter_actor_iter_next() or
     * clutter_actor_iter_prev() returned %TRUE, and cannot be called more
     * than once for the same actor.
     * 
     * This function will call clutter_actor_destroy() internally.
     */
    destroy(): void
    /**
     * Initializes a #ClutterActorIter, which can then be used to iterate
     * efficiently over a section of the scene graph, and associates it
     * with `root`.
     * 
     * Modifying the scene graph section that contains `root` will invalidate
     * the iterator.
     * 
     * ```c
     *   ClutterActorIter iter;
     *   ClutterActor *child;
     * 
     *   clutter_actor_iter_init (&iter, container);
     *   while (clutter_actor_iter_next (&iter, &child))
     *     {
     *       // do something with child
     *     }
     * ```
     * @param root a #ClutterActor
     */
    init(root: Actor): void
    /**
     * Checks whether a #ClutterActorIter is still valid.
     * 
     * An iterator is considered valid if it has been initialized, and
     * if the #ClutterActor that it refers to hasn't been modified after
     * the initialization.
     * @returns %TRUE if the iterator is valid, and %FALSE otherwise
     */
    is_valid(): boolean
    /**
     * Advances the `iter` and retrieves the next child of the root #ClutterActor
     * that was used to initialize the #ClutterActorIterator.
     * 
     * If the iterator can advance, this function returns %TRUE and sets the
     * `child` argument.
     * 
     * If the iterator cannot advance, this function returns %FALSE, and
     * the contents of `child` are undefined.
     * @returns %TRUE if the iterator could advance, and %FALSE otherwise.
     */
    next(): [ /* returnType */ boolean, /* child */ Actor | null ]
    /**
     * Advances the `iter` and retrieves the previous child of the root
     * #ClutterActor that was used to initialize the #ClutterActorIterator.
     * 
     * If the iterator can advance, this function returns %TRUE and sets the
     * `child` argument.
     * 
     * If the iterator cannot advance, this function returns %FALSE, and
     * the contents of `child` are undefined.
     * @returns %TRUE if the iterator could advance, and %FALSE otherwise.
     */
    prev(): [ /* returnType */ boolean, /* child */ Actor | null ]
    /**
     * Safely removes the #ClutterActor currently pointer to by the iterator
     * from its parent.
     * 
     * This function can only be called after clutter_actor_iter_next() or
     * clutter_actor_iter_prev() returned %TRUE, and cannot be called more
     * than once for the same actor.
     * 
     * This function will call clutter_actor_remove_child() internally.
     */
    remove(): void
}

/**
 * An iterator structure that allows to efficiently iterate over a
 * section of the scene graph.
 * 
 * The contents of the #ClutterActorIter structure
 * are private and should only be accessed using the provided API.
 * @record 
 */
class ActorIter {

    // Own properties of Clutter-11.Clutter.ActorIter

    static name: string
}

interface ActorMetaClass {

    // Own fields of Clutter-11.Clutter.ActorMetaClass

    set_actor: (meta: ActorMeta, actor: Actor | null) => void
    set_enabled: (meta: ActorMeta, is_enabled: boolean) => void
}

/**
 * The #ClutterActorMetaClass structure contains
 * only private data
 * @record 
 */
abstract class ActorMetaClass {

    // Own properties of Clutter-11.Clutter.ActorMetaClass

    static name: string
}

interface ActorMetaPrivate {
}

class ActorMetaPrivate {

    // Own properties of Clutter-11.Clutter.ActorMetaPrivate

    static name: string
}

interface ActorNodeClass {
}

abstract class ActorNodeClass {

    // Own properties of Clutter-11.Clutter.ActorNodeClass

    static name: string
}

interface ActorPrivate {
}

class ActorPrivate {

    // Own properties of Clutter-11.Clutter.ActorPrivate

    static name: string
}

interface AlignConstraintClass {
}

abstract class AlignConstraintClass {

    // Own properties of Clutter-11.Clutter.AlignConstraintClass

    static name: string
}

interface AnimatableInterface {

    // Own fields of Clutter-11.Clutter.AnimatableInterface

    find_property: (animatable: Animatable, property_name: string | null) => any
    get_initial_state: (animatable: Animatable, property_name: string | null, value: any) => void
    set_final_state: (animatable: Animatable, property_name: string | null, value: any) => void
    interpolate_value: (animatable: Animatable, property_name: string | null, interval: Interval, progress: number) => [ /* returnType */ boolean, /* value */ any ]
    get_actor: (animatable: Animatable) => Actor
}

abstract class AnimatableInterface {

    // Own properties of Clutter-11.Clutter.AnimatableInterface

    static name: string
}

interface AnyEvent {

    // Own fields of Clutter-11.Clutter.AnyEvent

    /**
     * event type
     * @field 
     */
    type: EventType
    /**
     * event time
     * @field 
     */
    time: number
    /**
     * event flags
     * @field 
     */
    flags: EventFlags
    stage: Stage
}

/**
 * Common members for a #ClutterEvent
 * @record 
 */
class AnyEvent {

    // Own properties of Clutter-11.Clutter.AnyEvent

    static name: string
}

interface BackendClass {
}

abstract class BackendClass {

    // Own properties of Clutter-11.Clutter.BackendClass

    static name: string
}

interface BinLayoutClass {
}

/**
 * The #ClutterBinLayoutClass structure contains only private
 * data and should be accessed using the provided API
 * @record 
 */
abstract class BinLayoutClass {

    // Own properties of Clutter-11.Clutter.BinLayoutClass

    static name: string
}

interface BinLayoutPrivate {
}

class BinLayoutPrivate {

    // Own properties of Clutter-11.Clutter.BinLayoutPrivate

    static name: string
}

interface BindConstraintClass {
}

abstract class BindConstraintClass {

    // Own properties of Clutter-11.Clutter.BindConstraintClass

    static name: string
}

interface BindingPoolClass {
}

abstract class BindingPoolClass {

    // Own properties of Clutter-11.Clutter.BindingPoolClass

    static name: string
}

interface BlitNodeClass {
}

abstract class BlitNodeClass {

    // Own properties of Clutter-11.Clutter.BlitNodeClass

    static name: string
}

interface BlurEffectClass {
}

abstract class BlurEffectClass {

    // Own properties of Clutter-11.Clutter.BlurEffectClass

    static name: string
}

interface BlurNodeClass {
}

abstract class BlurNodeClass {

    // Own properties of Clutter-11.Clutter.BlurNodeClass

    static name: string
}

interface BoxLayoutClass {
}

/**
 * The #ClutterBoxLayoutClass structure contains only private
 * data and should be accessed using the provided API
 * @record 
 */
abstract class BoxLayoutClass {

    // Own properties of Clutter-11.Clutter.BoxLayoutClass

    static name: string
}

interface BoxLayoutPrivate {
}

class BoxLayoutPrivate {

    // Own properties of Clutter-11.Clutter.BoxLayoutPrivate

    static name: string
}

interface BrightnessContrastEffectClass {
}

abstract class BrightnessContrastEffectClass {

    // Own properties of Clutter-11.Clutter.BrightnessContrastEffectClass

    static name: string
}

interface ButtonEvent {

    // Own fields of Clutter-11.Clutter.ButtonEvent

    /**
     * event type
     * @field 
     */
    type: EventType
    /**
     * event time
     * @field 
     */
    time: number
    /**
     * event flags
     * @field 
     */
    flags: EventFlags
    /**
     * event source stage
     * @field 
     */
    stage: Stage
    /**
     * event X coordinate, relative to the stage
     * @field 
     */
    x: number
    /**
     * event Y coordinate, relative to the stage
     * @field 
     */
    y: number
    /**
     * button modifiers
     * @field 
     */
    modifier_state: ModifierType
    /**
     * event button
     * @field 
     */
    button: number
    /**
     * reserved for future use
     * @field 
     */
    axes: number
    /**
     * the device that originated the event. If you want the physical
     * device the event originated from, use clutter_event_get_source_device()
     * @field 
     */
    device: InputDevice
    evdev_code: number
}

/**
 * Button event.
 * 
 * The event coordinates are relative to the stage that received the
 * event, and can be transformed into actor-relative coordinates by
 * using clutter_actor_transform_stage_point().
 * @record 
 */
class ButtonEvent {

    // Own properties of Clutter-11.Clutter.ButtonEvent

    static name: string
}

interface CanvasClass {

    // Own fields of Clutter-11.Clutter.CanvasClass

    draw: (canvas: Canvas, cr: any, width: number, height: number) => boolean
}

/**
 * The #ClutterCanvasClass structure contains
 * private data.
 * @record 
 */
abstract class CanvasClass {

    // Own properties of Clutter-11.Clutter.CanvasClass

    static name: string
}

interface CanvasPrivate {
}

class CanvasPrivate {

    // Own properties of Clutter-11.Clutter.CanvasPrivate

    static name: string
}

interface Capture {

    // Own fields of Clutter-11.Clutter.Capture

    image: any
    rect: any
}

class Capture {

    // Own properties of Clutter-11.Clutter.Capture

    static name: string
}

interface ChildMetaClass {
}

/**
 * The #ClutterChildMetaClass contains only private data
 * @record 
 */
abstract class ChildMetaClass {

    // Own properties of Clutter-11.Clutter.ChildMetaClass

    static name: string
}

interface ClickActionClass {

    // Own fields of Clutter-11.Clutter.ClickActionClass

    clicked: (action: ClickAction, actor: Actor) => void
    long_press: (action: ClickAction, actor: Actor, state: LongPressState) => boolean
}

/**
 * The #ClutterClickActionClass structure
 * contains only private data
 * @record 
 */
abstract class ClickActionClass {

    // Own properties of Clutter-11.Clutter.ClickActionClass

    static name: string
}

interface ClickActionPrivate {
}

class ClickActionPrivate {

    // Own properties of Clutter-11.Clutter.ClickActionPrivate

    static name: string
}

interface ClipNodeClass {
}

/**
 * The `ClutterClipNodeClass` structure is an opaque
 * type whose members cannot be directly accessed.
 * @record 
 */
abstract class ClipNodeClass {

    // Own properties of Clutter-11.Clutter.ClipNodeClass

    static name: string
}

interface CloneClass {
}

/**
 * The #ClutterCloneClass structure contains only private data
 * @record 
 */
abstract class CloneClass {

    // Own properties of Clutter-11.Clutter.CloneClass

    static name: string
}

interface ClonePrivate {
}

class ClonePrivate {

    // Own properties of Clutter-11.Clutter.ClonePrivate

    static name: string
}

interface Color {

    // Own fields of Clutter-11.Clutter.Color

    /**
     * red component, between 0 and 255
     * @field 
     */
    red: number
    /**
     * green component, between 0 and 255
     * @field 
     */
    green: number
    /**
     * blue component, between 0 and 255
     * @field 
     */
    blue: number
    /**
     * alpha component, between 0 and 255
     * @field 
     */
    alpha: number

    // Owm methods of Clutter-11.Clutter.Color

    /**
     * Adds `a` to `b` and saves the resulting color inside `result`.
     * 
     * The alpha channel of `result` is set as as the maximum value
     * between the alpha channels of `a` and `b`.
     * @param b a #ClutterColor
     */
    add(b: Color): /* result */ Color
    /**
     * Makes a copy of the color structure.  The result must be
     * freed using clutter_color_free().
     * @returns an allocated copy of @color.
     */
    copy(): Color
    /**
     * Darkens `color` by a fixed amount, and saves the changed color
     * in `result`.
     */
    darken(): /* result */ Color
    /**
     * Compares two `ClutterColor`s and checks if they are the same.
     * 
     * This function can be passed to g_hash_table_new() as the `key_equal_func`
     * parameter, when using `ClutterColor`s as keys in a #GHashTable.
     * @param v2 a #ClutterColor
     * @returns %TRUE if the two colors are the same.
     */
    equal(v2: Color): boolean
    /**
     * Frees a color structure created with clutter_color_copy().
     */
    free(): void
    /**
     * Converts a #ClutterColor to a hash value.
     * 
     * This function can be passed to g_hash_table_new() as the `hash_func`
     * parameter, when using `ClutterColor`s as keys in a #GHashTable.
     * @returns a hash value corresponding to the color
     */
    hash(): number
    /**
     * Initializes `color` with the given values.
     * @param red red component of the color, between 0 and 255
     * @param green green component of the color, between 0 and 255
     * @param blue blue component of the color, between 0 and 255
     * @param alpha alpha component of the color, between 0 and 255
     * @returns the initialized #ClutterColor
     */
    init(red: number, green: number, blue: number, alpha: number): Color
    /**
     * Interpolates between `initial` and `final` `ClutterColor`s
     * using `progress`
     * @param final the final #ClutterColor
     * @param progress the interpolation progress
     */
    interpolate(final: Color, progress: number): /* result */ Color
    /**
     * Lightens `color` by a fixed amount, and saves the changed color
     * in `result`.
     */
    lighten(): /* result */ Color
    /**
     * Shades `color` by `factor` and saves the modified color into `result`.
     * @param factor the shade factor to apply
     */
    shade(factor: number): /* result */ Color
    /**
     * Subtracts `b` from `a` and saves the resulting color inside `result`.
     * 
     * This function assumes that the components of `a` are greater than the
     * components of `b;` the result is, otherwise, undefined.
     * 
     * The alpha channel of `result` is set as the minimum value
     * between the alpha channels of `a` and `b`.
     * @param b a #ClutterColor
     */
    subtract(b: Color): /* result */ Color
    /**
     * Converts `color` to the HLS format.
     * 
     * The `hue` value is in the 0 .. 360 range. The `luminance` and
     * `saturation` values are in the 0 .. 1 range.
     */
    to_hls(): [ /* hue */ number, /* luminance */ number, /* saturation */ number ]
    /**
     * Converts `color` into a packed 32 bit integer, containing
     * all the four 8 bit channels used by #ClutterColor.
     * @returns a packed color
     */
    to_pixel(): number
    /**
     * Returns a textual specification of `color` in the hexadecimal form
     * <literal>&num;rrggbbaa</literal>, where <literal>r</literal>,
     * <literal>g</literal>, <literal>b</literal> and <literal>a</literal> are
     * hexadecimal digits representing the red, green, blue and alpha components
     * respectively.
     * @returns a newly-allocated text string
     */
    to_string(): string | null
}

/**
 * A simple type for representing colors.
 * 
 * A #ClutterColor is expressed as a 4-tuple of values ranging from
 * zero to 255, one for each color channel plus one for the alpha.
 * 
 * The alpha channel is fully opaque at 255 and fully transparent at 0.
 * @record 
 */
class Color {

    // Own properties of Clutter-11.Clutter.Color

    static name: string

    // Constructors of Clutter-11.Clutter.Color

    /**
     * Allocates a new, transparent black #ClutterColor.
     * @constructor 
     * @returns the newly allocated #ClutterColor; use   clutter_color_free() to free its resources
     */
    static alloc(): Color
    /**
     * Creates a new #ClutterColor with the given values.
     * 
     * This function is the equivalent of:
     * 
     * ```c
     *   clutter_color_init (clutter_color_alloc (), red, green, blue, alpha);
     * ```
     * @constructor 
     * @param red red component of the color, between 0 and 255
     * @param green green component of the color, between 0 and 255
     * @param blue blue component of the color, between 0 and 255
     * @param alpha alpha component of the color, between 0 and 255
     * @returns the newly allocated color.   Use clutter_color_free() when done
     */
    constructor(red: number, green: number, blue: number, alpha: number) 
    /**
     * Creates a new #ClutterColor with the given values.
     * 
     * This function is the equivalent of:
     * 
     * ```c
     *   clutter_color_init (clutter_color_alloc (), red, green, blue, alpha);
     * ```
     * @constructor 
     * @param red red component of the color, between 0 and 255
     * @param green green component of the color, between 0 and 255
     * @param blue blue component of the color, between 0 and 255
     * @param alpha alpha component of the color, between 0 and 255
     * @returns the newly allocated color.   Use clutter_color_free() when done
     */
    static new(red: number, green: number, blue: number, alpha: number): Color
    /**
     * Converts a color expressed in HLS (hue, luminance and saturation)
     * values into a #ClutterColor.
     * @param hue hue value, in the 0 .. 360 range
     * @param luminance luminance value, in the 0 .. 1 range
     * @param saturation saturation value, in the 0 .. 1 range
     */
    static from_hls(hue: number, luminance: number, saturation: number): /* color */ Color
    /**
     * Converts `pixel` from the packed representation of a four 8 bit channel
     * color to a #ClutterColor.
     * @param pixel a 32 bit packed integer containing a color
     */
    static from_pixel(pixel: number): /* color */ Color
    /**
     * Parses a string definition of a color, filling the #ClutterColor.red,
     * #ClutterColor.green, #ClutterColor.blue and #ClutterColor.alpha fields
     * of `color`.
     * 
     * The `color` is not allocated.
     * 
     * The format of `str` can be either one of:
     * 
     *   - a standard name (as taken from the X11 rgb.txt file)
     *   - an hexadecimal value in the form: `#rgb`, `#rrggbb`, `#rgba`, or `#rrggbbaa`
     *   - a RGB color in the form: `rgb(r, g, b)`
     *   - a RGB color in the form: `rgba(r, g, b, a)`
     *   - a HSL color in the form: `hsl(h, s, l)`
     *    -a HSL color in the form: `hsla(h, s, l, a)`
     * 
     * where 'r', 'g', 'b' and 'a' are (respectively) the red, green, blue color
     * intensities and the opacity. The 'h', 's' and 'l' are (respectively) the
     * hue, saturation and luminance values.
     * 
     * In the rgb() and rgba() formats, the 'r', 'g', and 'b' values are either
     * integers between 0 and 255, or percentage values in the range between 0%
     * and 100%; the percentages require the '%' character. The 'a' value, if
     * specified, can only be a floating point value between 0.0 and 1.0.
     * 
     * In the hls() and hlsa() formats, the 'h' value (hue) is an angle between
     * 0 and 360.0 degrees; the 'l' and 's' values (luminance and saturation) are
     * percentage values in the range between 0% and 100%. The 'a' value, if specified,
     * can only be a floating point value between 0.0 and 1.0.
     * 
     * Whitespace inside the definitions is ignored; no leading whitespace
     * is allowed.
     * 
     * If the alpha component is not specified then it is assumed to be set to
     * be fully opaque.
     * @param str a string specifying a color
     * @returns %TRUE if parsing succeeded, and %FALSE otherwise
     */
    static from_string(str: string | null): [ /* returnType */ boolean, /* color */ Color ]
    /**
     * Retrieves a static color for the given `color` name
     * 
     * Static colors are created by Clutter and are guaranteed to always be
     * available and valid
     * @param color the named global color
     * @returns a pointer to a static color; the returned pointer   is owned by Clutter and it should never be modified or freed
     */
    static get_static(color: StaticColor): Color
}

interface ColorNodeClass {
}

/**
 * The `ClutterColorNodeClass` structure is an
 * opaque type whose members cannot be directly accessed.
 * @record 
 */
abstract class ColorNodeClass {

    // Own properties of Clutter-11.Clutter.ColorNodeClass

    static name: string
}

interface ColorStateClass {

    // Own fields of Clutter-11.Clutter.ColorStateClass

    parent_class: any
}

abstract class ColorStateClass {

    // Own properties of Clutter-11.Clutter.ColorStateClass

    static name: string
}

interface ColorizeEffectClass {
}

abstract class ColorizeEffectClass {

    // Own properties of Clutter-11.Clutter.ColorizeEffectClass

    static name: string
}

interface ConstraintClass {

    // Own fields of Clutter-11.Clutter.ConstraintClass

    update_allocation: (constraint: Constraint, actor: Actor, allocation: ActorBox) => void
    update_preferred_size: (constraint: Constraint, actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number) => [ /* minimum_size */ number, /* natural_size */ number ]
}

/**
 * The #ClutterConstraintClass structure contains
 * only private data
 * @record 
 */
abstract class ConstraintClass {

    // Own properties of Clutter-11.Clutter.ConstraintClass

    static name: string
}

interface ContainerIface {

    // Own fields of Clutter-11.Clutter.ContainerIface

    add: (container: Container, actor: Actor) => void
    remove: (container: Container, actor: Actor) => void
    /**
     * The GType used for storing auxiliary information about
     *   each of the containers children.
     * @field 
     */
    child_meta_type: GObject.GType
    create_child_meta: (container: Container, actor: Actor) => void
    destroy_child_meta: (container: Container, actor: Actor) => void
    get_child_meta: (container: Container, actor: Actor) => ChildMeta
    actor_added: (container: Container, actor: Actor) => void
    actor_removed: (container: Container, actor: Actor) => void
    child_notify: (container: Container, child: Actor, pspec: any) => void
}

/**
 * Base interface for container actors. The `add` and `remove`
 * virtual functions must be provided by any implementation; the other
 * virtual functions are optional.
 * @record 
 */
abstract class ContainerIface {

    // Own properties of Clutter-11.Clutter.ContainerIface

    static name: string
}

interface ContentInterface {

    // Own fields of Clutter-11.Clutter.ContentInterface

    get_preferred_size: (content: Content) => [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    paint_content: (content: Content, actor: Actor, node: PaintNode, paint_context: PaintContext) => void
    attached: (content: Content, actor: Actor) => void
    detached: (content: Content, actor: Actor) => void
    invalidate: (content: Content) => void
    invalidate_size: (content: Content) => void
}

/**
 * The #ClutterContentInterface structure contains only
 * private data.
 * @record 
 */
abstract class ContentInterface {

    // Own properties of Clutter-11.Clutter.ContentInterface

    static name: string
}

interface Context {

    // Owm methods of Clutter-11.Clutter.Context

    get_backend(): Backend
}

class Context {

    // Own properties of Clutter-11.Clutter.Context

    static name: string
}

interface CrossingEvent {

    // Own fields of Clutter-11.Clutter.CrossingEvent

    /**
     * event type
     * @field 
     */
    type: EventType
    /**
     * event time
     * @field 
     */
    time: number
    /**
     * event flags
     * @field 
     */
    flags: EventFlags
    /**
     * event source stage
     * @field 
     */
    stage: Stage
    /**
     * event X coordinate
     * @field 
     */
    x: number
    /**
     * event Y coordinate
     * @field 
     */
    y: number
    /**
     * the device that originated the event. If you want the physical
     * device the event originated from, use clutter_event_get_source_device()
     * @field 
     */
    device: InputDevice
    sequence: EventSequence
    /**
     * event source actor
     * @field 
     */
    source: Actor
    /**
     * actor related to the crossing
     * @field 
     */
    related: Actor
}

/**
 * Event for the movement of the pointer across different actors
 * @record 
 */
class CrossingEvent {

    // Own properties of Clutter-11.Clutter.CrossingEvent

    static name: string
}

interface DeformEffectClass {

    // Own fields of Clutter-11.Clutter.DeformEffectClass

    deform_vertex: (effect: DeformEffect, width: number, height: number, vertex: Cogl.TextureVertex) => void
}

/**
 * The #ClutterDeformEffectClass structure contains
 * only private data
 * @record 
 */
abstract class DeformEffectClass {

    // Own properties of Clutter-11.Clutter.DeformEffectClass

    static name: string
}

interface DeformEffectPrivate {
}

class DeformEffectPrivate {

    // Own properties of Clutter-11.Clutter.DeformEffectPrivate

    static name: string
}

interface DesaturateEffectClass {
}

abstract class DesaturateEffectClass {

    // Own properties of Clutter-11.Clutter.DesaturateEffectClass

    static name: string
}

interface DeviceEvent {

    // Own fields of Clutter-11.Clutter.DeviceEvent

    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    device: InputDevice
}

class DeviceEvent {

    // Own properties of Clutter-11.Clutter.DeviceEvent

    static name: string
}

interface EffectClass {

    // Own fields of Clutter-11.Clutter.EffectClass

    pre_paint: (effect: Effect, node: PaintNode, paint_context: PaintContext) => boolean
    post_paint: (effect: Effect, node: PaintNode, paint_context: PaintContext) => void
    modify_paint_volume: (effect: Effect, volume: PaintVolume) => boolean
    paint: (effect: Effect, node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags) => void
    paint_node: (effect: Effect, node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags) => void
    pick: (effect: Effect, pick_context: PickContext) => void
}

/**
 * The #ClutterEffectClass structure contains only private data
 * @record 
 */
abstract class EffectClass {

    // Own properties of Clutter-11.Clutter.EffectClass

    static name: string
}

interface EventSequence {

    // Owm methods of Clutter-11.Clutter.EventSequence

    get_slot(): number
}

/**
 * The #ClutterEventSequence structure is an opaque
 * type used to denote the event sequence of a touch event.
 * @record 
 */
class EventSequence {

    // Own properties of Clutter-11.Clutter.EventSequence

    static name: string
}

interface FixedLayoutClass {
}

/**
 * The #ClutterFixedLayoutClass structure contains only private data
 * and it should be accessed using the provided API
 * @record 
 */
abstract class FixedLayoutClass {

    // Own properties of Clutter-11.Clutter.FixedLayoutClass

    static name: string
}

interface FlowLayoutClass {
}

/**
 * The #ClutterFlowLayoutClass structure contains only private data
 * and should be accessed using the provided API
 * @record 
 */
abstract class FlowLayoutClass {

    // Own properties of Clutter-11.Clutter.FlowLayoutClass

    static name: string
}

interface FlowLayoutPrivate {
}

class FlowLayoutPrivate {

    // Own properties of Clutter-11.Clutter.FlowLayoutPrivate

    static name: string
}

interface Frame {

    // Owm methods of Clutter-11.Clutter.Frame

    has_result(): boolean
    set_result(result: FrameResult): void
}

class Frame {

    // Own properties of Clutter-11.Clutter.Frame

    static name: string
}

interface FrameClockClass {

    // Own fields of Clutter-11.Clutter.FrameClockClass

    parent_class: any
}

abstract class FrameClockClass {

    // Own properties of Clutter-11.Clutter.FrameClockClass

    static name: string
}

interface FrameInfo {

    // Own fields of Clutter-11.Clutter.FrameInfo

    frame_counter: number
    presentation_time: number
    refresh_rate: number
    flags: FrameInfoFlag
    sequence: number
    gpu_rendering_duration_ns: number
    cpu_time_before_buffer_swap_us: number
}

class FrameInfo {

    // Own properties of Clutter-11.Clutter.FrameInfo

    static name: string
}

interface FrameListenerIface {

    // Own fields of Clutter-11.Clutter.FrameListenerIface

    before_frame: (frame_clock: FrameClock, frame_count: number) => void
    frame: (frame_clock: FrameClock, frame_count: number) => FrameResult
}

class FrameListenerIface {

    // Own properties of Clutter-11.Clutter.FrameListenerIface

    static name: string
}

interface GestureActionClass {

    // Own fields of Clutter-11.Clutter.GestureActionClass

    gesture_begin: (action: GestureAction, actor: Actor) => boolean
    gesture_progress: (action: GestureAction, actor: Actor) => boolean
    gesture_end: (action: GestureAction, actor: Actor) => void
    gesture_cancel: (action: GestureAction, actor: Actor) => void
    gesture_prepare: (action: GestureAction, actor: Actor) => boolean
}

/**
 * The #ClutterGestureClass structure contains only
 * private data.
 * @record 
 */
abstract class GestureActionClass {

    // Own properties of Clutter-11.Clutter.GestureActionClass

    static name: string
}

interface GestureActionPrivate {
}

class GestureActionPrivate {

    // Own properties of Clutter-11.Clutter.GestureActionPrivate

    static name: string
}

interface Grab {

    // Owm methods of Clutter-11.Clutter.Grab

    /**
     * Removes a grab. If this grab is effective, crossing events
     * will be generated to indicate the change in event redirection.
     */
    dismiss(): void
    /**
     * Returns the windowing-level state of the
     * grab, the devices that are guaranteed to be
     * grabbed.
     * @returns The state of the grab.
     */
    get_seat_state(): GrabState
    ref(): Grab
    unref(): void
}

class Grab {

    // Own properties of Clutter-11.Clutter.Grab

    static name: string
}

interface GridLayoutClass {
}

/**
 * The #ClutterGridLayoutClass structure contains only private
 * data and should be accessed using the provided API
 * @record 
 */
abstract class GridLayoutClass {

    // Own properties of Clutter-11.Clutter.GridLayoutClass

    static name: string
}

interface GridLayoutPrivate {
}

class GridLayoutPrivate {

    // Own properties of Clutter-11.Clutter.GridLayoutPrivate

    static name: string
}

interface IMEvent {

    // Own fields of Clutter-11.Clutter.IMEvent

    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    text: string | null
    offset: number
    anchor: number
    len: number
    mode: PreeditResetMode
}

class IMEvent {

    // Own properties of Clutter-11.Clutter.IMEvent

    static name: string
}

interface ImageClass {
}

/**
 * The #ClutterImageClass structure contains
 * private data.
 * @record 
 */
abstract class ImageClass {

    // Own properties of Clutter-11.Clutter.ImageClass

    static name: string
}

interface InputDeviceClass {

    // Own fields of Clutter-11.Clutter.InputDeviceClass

    parent_class: any
    is_mode_switch_button: (device: InputDevice, group: number, button: number) => boolean
    get_group_n_modes: (device: InputDevice, group: number) => number
    is_grouped: (device: InputDevice, other_device: InputDevice) => boolean
    get_pad_feature_group: (device: InputDevice, feature: InputDevicePadFeature, n_feature: number) => number
}

abstract class InputDeviceClass {

    // Own properties of Clutter-11.Clutter.InputDeviceClass

    static name: string
}

interface InputDeviceToolClass {

    // Own fields of Clutter-11.Clutter.InputDeviceToolClass

    parent_class: any
}

abstract class InputDeviceToolClass {

    // Own properties of Clutter-11.Clutter.InputDeviceToolClass

    static name: string
}

interface InputFocusClass {

    // Own fields of Clutter-11.Clutter.InputFocusClass

    parent_class: any
    iface: any
    focus_in: (focus: InputFocus, input_method: InputMethod) => void
    focus_out: (focus: InputFocus) => void
    request_surrounding: (focus: InputFocus) => void
    delete_surrounding: (focus: InputFocus, offset: number, len: number) => void
    commit_text: (focus: InputFocus, text: string | null) => void
    set_preedit_text: (focus: InputFocus, preedit: string | null, cursor: number, anchor: number) => void
}

abstract class InputFocusClass {

    // Own properties of Clutter-11.Clutter.InputFocusClass

    static name: string
}

interface InputMethodClass {

    // Own fields of Clutter-11.Clutter.InputMethodClass

    parent_class: any
    focus_in: (im: InputMethod, actor: InputFocus) => void
    focus_out: (im: InputMethod) => void
    reset: (im: InputMethod) => void
    set_cursor_location: (im: InputMethod, rect: any) => void
    set_surrounding: (im: InputMethod, text: string | null, cursor: number, anchor: number) => void
    update_content_hints: (im: InputMethod, hint: InputContentHintFlags) => void
    update_content_purpose: (im: InputMethod, purpose: InputContentPurpose) => void
    filter_key_event: (im: InputMethod, key: Event) => boolean
}

abstract class InputMethodClass {

    // Own properties of Clutter-11.Clutter.InputMethodClass

    static name: string
}

interface IntervalClass {

    // Own fields of Clutter-11.Clutter.IntervalClass

    validate: (interval: Interval, pspec: any) => boolean
    compute_value: (interval: Interval, factor: number) => [ /* returnType */ boolean, /* value */ any ]
}

/**
 * The #ClutterIntervalClass contains only private data.
 * @record 
 */
abstract class IntervalClass {

    // Own properties of Clutter-11.Clutter.IntervalClass

    static name: string
}

interface IntervalPrivate {
}

class IntervalPrivate {

    // Own properties of Clutter-11.Clutter.IntervalPrivate

    static name: string
}

interface KeyEvent {

    // Own fields of Clutter-11.Clutter.KeyEvent

    /**
     * event type
     * @field 
     */
    type: EventType
    /**
     * event time
     * @field 
     */
    time: number
    /**
     * event flags
     * @field 
     */
    flags: EventFlags
    /**
     * event source stage
     * @field 
     */
    stage: Stage
    /**
     * key modifiers
     * @field 
     */
    modifier_state: ModifierType
    /**
     * raw key value
     * @field 
     */
    keyval: number
    /**
     * raw hardware key value
     * @field 
     */
    hardware_keycode: number
    /**
     * Unicode representation
     * @field 
     */
    unicode_value: string
    evdev_code: number
    /**
     * the device that originated the event. If you want the physical
     * device the event originated from, use clutter_event_get_source_device()
     * @field 
     */
    device: InputDevice
}

/**
 * Key event
 * @record 
 */
class KeyEvent {

    // Own properties of Clutter-11.Clutter.KeyEvent

    static name: string
}

interface KeyframeTransitionClass {
}

/**
 * The `ClutterKeyframeTransitionClass` structure contains only
 * private data.
 * @record 
 */
abstract class KeyframeTransitionClass {

    // Own properties of Clutter-11.Clutter.KeyframeTransitionClass

    static name: string
}

interface KeyframeTransitionPrivate {
}

class KeyframeTransitionPrivate {

    // Own properties of Clutter-11.Clutter.KeyframeTransitionPrivate

    static name: string
}

interface KeymapClass {

    // Own fields of Clutter-11.Clutter.KeymapClass

    parent_class: any
    get_direction: (keymap: Keymap) => Pango.Direction
}

abstract class KeymapClass {

    // Own properties of Clutter-11.Clutter.KeymapClass

    static name: string
}

interface Knot {

    // Own fields of Clutter-11.Clutter.Knot

    /**
     * X coordinate of the knot
     * @field 
     */
    x: number
    /**
     * Y coordinate of the knot
     * @field 
     */
    y: number

    // Owm methods of Clutter-11.Clutter.Knot

    /**
     * Makes an allocated copy of a knot.
     * @returns the copied knot.
     */
    copy(): Knot
    /**
     * Compares to knot and checks if the point to the same location.
     * @param knot_b Second knot
     * @returns %TRUE if the knots point to the same location.
     */
    equal(knot_b: Knot): boolean
    /**
     * Frees the memory of an allocated knot.
     */
    free(): void
}

/**
 * Point in a path behaviour.
 * @record 
 */
class Knot {

    // Own properties of Clutter-11.Clutter.Knot

    static name: string
}

interface LayerNodeClass {
}

abstract class LayerNodeClass {

    // Own properties of Clutter-11.Clutter.LayerNodeClass

    static name: string
}

interface LayoutManagerClass {

    // Own fields of Clutter-11.Clutter.LayoutManagerClass

    get_preferred_width: (manager: LayoutManager, container: Container, for_height: number) => [ /* min_width_p */ number, /* nat_width_p */ number ]
    get_preferred_height: (manager: LayoutManager, container: Container, for_width: number) => [ /* min_height_p */ number, /* nat_height_p */ number ]
    allocate: (manager: LayoutManager, container: Container, allocation: ActorBox) => void
    set_container: (manager: LayoutManager, container: Container | null) => void
    get_child_meta_type: (manager: LayoutManager) => GObject.GType
    layout_changed: (manager: LayoutManager) => void
}

/**
 * The #ClutterLayoutManagerClass structure contains only private
 * data and should be accessed using the provided API
 * @record 
 */
abstract class LayoutManagerClass {

    // Own properties of Clutter-11.Clutter.LayoutManagerClass

    static name: string
}

interface LayoutMetaClass {
}

/**
 * The #ClutterLayoutMetaClass contains only private data and
 * should never be accessed directly
 * @record 
 */
abstract class LayoutMetaClass {

    // Own properties of Clutter-11.Clutter.LayoutMetaClass

    static name: string
}

interface Margin {

    // Own fields of Clutter-11.Clutter.Margin

    /**
     * the margin from the left
     * @field 
     */
    left: number
    /**
     * the margin from the right
     * @field 
     */
    right: number
    /**
     * the margin from the top
     * @field 
     */
    top: number
    /**
     * the margin from the bottom
     * @field 
     */
    bottom: number

    // Owm methods of Clutter-11.Clutter.Margin

    /**
     * Creates a new #ClutterMargin and copies the contents of `margin_` into
     * the newly created structure.
     * @returns a copy of the #ClutterMargin.
     */
    copy(): Margin
    /**
     * Frees the resources allocated by clutter_margin_new() and
     * clutter_margin_copy().
     */
    free(): void
}

/**
 * A representation of the components of a margin.
 * @record 
 */
class Margin {

    // Own properties of Clutter-11.Clutter.Margin

    static name: string

    // Constructors of Clutter-11.Clutter.Margin

    /**
     * Creates a new #ClutterMargin.
     * @constructor 
     * @returns a newly allocated #ClutterMargin. Use   clutter_margin_free() to free the resources associated with it when   done.
     */
    constructor() 
    /**
     * Creates a new #ClutterMargin.
     * @constructor 
     * @returns a newly allocated #ClutterMargin. Use   clutter_margin_free() to free the resources associated with it when   done.
     */
    static new(): Margin
}

interface MotionEvent {

    // Own fields of Clutter-11.Clutter.MotionEvent

    /**
     * event type
     * @field 
     */
    type: EventType
    /**
     * event time
     * @field 
     */
    time: number
    /**
     * event flags
     * @field 
     */
    flags: EventFlags
    /**
     * event source stage
     * @field 
     */
    stage: Stage
    /**
     * event X coordinate
     * @field 
     */
    x: number
    /**
     * event Y coordinate
     * @field 
     */
    y: number
    /**
     * button modifiers
     * @field 
     */
    modifier_state: ModifierType
    /**
     * reserved for future use
     * @field 
     */
    axes: number
    /**
     * the device that originated the event. If you want the physical
     * device the event originated from, use clutter_event_get_source_device()
     * @field 
     */
    device: InputDevice
    time_us: number
    dx: number
    dy: number
    dx_unaccel: number
    dy_unaccel: number
}

/**
 * Event for the pointer motion
 * @record 
 */
class MotionEvent {

    // Own properties of Clutter-11.Clutter.MotionEvent

    static name: string
}

interface OffscreenEffectClass {

    // Own fields of Clutter-11.Clutter.OffscreenEffectClass

    create_texture: (effect: OffscreenEffect, width: number, height: number) => Cogl.Handle
    paint_target: (effect: OffscreenEffect, node: PaintNode, paint_context: PaintContext) => void
}

/**
 * The #ClutterOffscreenEffectClass structure contains only private data
 * @record 
 */
abstract class OffscreenEffectClass {

    // Own properties of Clutter-11.Clutter.OffscreenEffectClass

    static name: string
}

interface OffscreenEffectPrivate {
}

class OffscreenEffectPrivate {

    // Own properties of Clutter-11.Clutter.OffscreenEffectPrivate

    static name: string
}

interface PadButtonEvent {

    // Own fields of Clutter-11.Clutter.PadButtonEvent

    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    button: number
    group: number
    device: InputDevice
    mode: number
}

class PadButtonEvent {

    // Own properties of Clutter-11.Clutter.PadButtonEvent

    static name: string
}

interface PadRingEvent {

    // Own fields of Clutter-11.Clutter.PadRingEvent

    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    device: InputDevice
    ring_source: InputDevicePadSource
    ring_number: number
    group: number
    angle: number
    mode: number
}

class PadRingEvent {

    // Own properties of Clutter-11.Clutter.PadRingEvent

    static name: string
}

interface PadStripEvent {

    // Own fields of Clutter-11.Clutter.PadStripEvent

    type: EventType
    time: number
    flags: EventFlags
    stage: Stage
    device: InputDevice
    strip_source: InputDevicePadSource
    strip_number: number
    group: number
    value: number
    mode: number
}

class PadStripEvent {

    // Own properties of Clutter-11.Clutter.PadStripEvent

    static name: string
}

interface PageTurnEffectClass {
}

abstract class PageTurnEffectClass {

    // Own properties of Clutter-11.Clutter.PageTurnEffectClass

    static name: string
}

interface PaintContext {

    // Owm methods of Clutter-11.Clutter.PaintContext

    destroy(): void
    get_framebuffer(): Cogl.Framebuffer
    get_redraw_clip(): any
    pop_framebuffer(): void
    push_framebuffer(framebuffer: Cogl.Framebuffer): void
    ref(): PaintContext
    unref(): void
}

class PaintContext {

    // Own properties of Clutter-11.Clutter.PaintContext

    static name: string
}

interface PaintNodeClass {
}

/**
 * The `ClutterPaintNodeClass` structure contains only private data.
 * @record 
 */
abstract class PaintNodeClass {

    // Own properties of Clutter-11.Clutter.PaintNodeClass

    static name: string
}

interface PaintNodePrivate {
}

class PaintNodePrivate {

    // Own properties of Clutter-11.Clutter.PaintNodePrivate

    static name: string
}

interface PaintVolume {

    // Owm methods of Clutter-11.Clutter.PaintVolume

    /**
     * Copies `pv` into a new #ClutterPaintVolume
     * @returns a newly allocated copy of a #ClutterPaintVolume
     */
    copy(): PaintVolume
    /**
     * Frees the resources allocated by `pv`
     */
    free(): void
    /**
     * Retrieves the depth of the volume's, axis aligned, bounding box.
     * 
     * In other words; this takes into account what actor's coordinate
     * space `pv` belongs too and conceptually fits an axis aligned box
     * around the volume. It returns the size of that bounding box as
     * measured along the z-axis.
     * 
     * If, for example, [method`Actor`.get_transformed_paint_volume]
     * is used to transform a 2D child actor that is 100px wide, 100px
     * high and 0px deep into container coordinates then the depth might
     * not simply be 0px if the child actor has a 3D rotation applied to
     * it.
     * 
     * Remember: if [method`Actor`.get_transformed_paint_volume] is
     * used then the transformed volume will be defined relative to the
     * container actor and in container coordinates a 2D child actor
     * can have a 3D bounding volume.
     * 
     * There are no accuracy guarantees for the reported depth,
     * except that it must always be greater than, or equal to, the actor's
     * depth. This is because actors may report simple, loose fitting paint
     * volumes for efficiency.
     * @returns the depth, in units of @pv's local coordinate system.
     */
    get_depth(): number
    /**
     * Retrieves the height of the volume's, axis aligned, bounding box.
     * 
     * In other words; this takes into account what actor's coordinate
     * space `pv` belongs too and conceptually fits an axis aligned box
     * around the volume. It returns the size of that bounding box as
     * measured along the y-axis.
     * 
     * If, for example, [method`Actor`.get_transformed_paint_volume]
     * is used to transform a 2D child actor that is 100px wide, 100px
     * high and 0px deep into container coordinates then the height might
     * not simply be 100px if the child actor has a 3D rotation applied to
     * it.
     * 
     * Remember: if [method`Actor`.get_transformed_paint_volume] is
     * used then a transformed child volume will be defined relative to the
     * ancestor container actor and so a 2D child actor
     * can have a 3D bounding volume.
     * 
     * There are no accuracy guarantees for the reported height,
     * except that it must always be greater than, or equal to, the actor's
     * height. This is because actors may report simple, loose fitting paint
     * volumes for efficiency.
     * @returns the height, in units of @pv's local coordinate system.
     */
    get_height(): number
    /**
     * Retrieves the origin of the #ClutterPaintVolume.
     */
    get_origin(): /* vertex */ any
    /**
     * Retrieves the width of the volume's, axis aligned, bounding box.
     * 
     * In other words; this takes into account what actor's coordinate
     * space `pv` belongs too and conceptually fits an axis aligned box
     * around the volume. It returns the size of that bounding box as
     * measured along the x-axis.
     * 
     * If, for example, [method`Actor`.get_transformed_paint_volume]
     * is used to transform a 2D child actor that is 100px wide, 100px
     * high and 0px deep into container coordinates then the width might
     * not simply be 100px if the child actor has a 3D rotation applied to
     * it.
     * 
     * Remember: if [method`Actor`.get_transformed_paint_volume] is
     * used then a transformed child volume will be defined relative to the
     * ancestor container actor and so a 2D child actor can have a 3D
     * bounding volume.
     * 
     * There are no accuracy guarantees for the reported width,
     * except that it must always be greater than, or equal to, the
     * actor's width. This is because actors may report simple, loose
     * fitting paint volumes for efficiency.
     * @returns the width, in units of @pv's local coordinate system.
     */
    get_width(): number
    /**
     * Sets the depth of the paint volume. The depth is measured along
     * the z axis in the actor coordinates that `pv` is associated with.
     * @param depth the depth of the paint volume, in pixels
     */
    set_depth(depth: number): void
    /**
     * Sets the #ClutterPaintVolume from the allocation of `actor`.
     * 
     * This function should be used when overriding the
     * [vfunc`Actor`.get_paint_volume] by [class`Actor]` sub-classes
     * that do not paint outside their allocation.
     * 
     * A typical example is:
     * 
     * ```c
     * static gboolean
     * my_actor_get_paint_volume (ClutterActor       *self,
     *                            ClutterPaintVolume *volume)
     * {
     *   return clutter_paint_volume_set_from_allocation (volume, self);
     * }
     * ```
     * @param actor a #ClutterActor
     * @returns %TRUE if the paint volume was successfully set, and %FALSE   otherwise
     */
    set_from_allocation(actor: Actor): boolean
    /**
     * Sets the height of the paint volume. The height is measured along
     * the y axis in the actor coordinates that `pv` is associated with.
     * @param height the height of the paint volume, in pixels
     */
    set_height(height: number): void
    /**
     * Sets the origin of the paint volume.
     * 
     * The origin is defined as the X, Y and Z coordinates of the top-left
     * corner of an actor's paint volume, in actor coordinates.
     * 
     * The default is origin is assumed at: (0, 0, 0)
     * @param origin a #graphene_point3d_t
     */
    set_origin(origin: any): void
    /**
     * Sets the width of the paint volume. The width is measured along
     * the x axis in the actor coordinates that `pv` is associated with.
     * @param width the width of the paint volume, in pixels
     */
    set_width(width: number): void
    /**
     * Updates the geometry of `pv` to encompass `pv` and `another_pv`.
     * 
     * There are no guarantees about how precisely the two volumes
     * will be unioned.
     * @param another_pv A second #ClutterPaintVolume to union with `pv`
     */
    union(another_pv: PaintVolume): void
    /**
     * Unions the 2D region represented by `box` to a #ClutterPaintVolume.
     * 
     * This function is similar to [method`PaintVolume`.union], but it is
     * specific for 2D regions.
     * @param box a #ClutterActorBox to union to `pv`
     */
    union_box(box: ActorBox): void
}

/**
 * A #ClutterPaintVolume represents a bounding volume whose internal
 * representation isn't defined but can be set and queried in terms
 * of an axis aligned bounding box.
 * 
 * A #ClutterPaintVolume for a [class`Actor]`
 * is defined to be relative from the current actor modelview matrix.
 * 
 * Other internal representation and methods for describing the
 * bounding volume may be added in the future.
 * @record 
 */
class PaintVolume {

    // Own properties of Clutter-11.Clutter.PaintVolume

    static name: string
}

interface PanActionClass {

    // Own fields of Clutter-11.Clutter.PanActionClass

    pan_stopped: (action: PanAction, actor: Actor) => void
}

/**
 * The #ClutterPanActionClass structure contains
 * only private data.
 * @record 
 */
abstract class PanActionClass {

    // Own properties of Clutter-11.Clutter.PanActionClass

    static name: string
}

interface PanActionPrivate {
}

class PanActionPrivate {

    // Own properties of Clutter-11.Clutter.PanActionPrivate

    static name: string
}

interface ParamSpecUnits {

    // Own fields of Clutter-11.Clutter.ParamSpecUnits

    /**
     * default type
     * @field 
     */
    default_type: UnitType
    /**
     * default value
     * @field 
     */
    default_value: number
    /**
     * lower boundary
     * @field 
     */
    minimum: number
    /**
     * higher boundary
     * @field 
     */
    maximum: number
}

/**
 * #GParamSpec subclass for unit based properties.
 * @record 
 */
class ParamSpecUnits {

    // Own properties of Clutter-11.Clutter.ParamSpecUnits

    static name: string
}

interface PathClass {
}

/**
 * The #ClutterPathClass struct contains only private data.
 * @record 
 */
abstract class PathClass {

    // Own properties of Clutter-11.Clutter.PathClass

    static name: string
}

interface PathConstraintClass {
}

abstract class PathConstraintClass {

    // Own properties of Clutter-11.Clutter.PathConstraintClass

    static name: string
}

interface PathNode {

    // Own fields of Clutter-11.Clutter.PathNode

    /**
     * the node's type
     * @field 
     */
    type: PathNodeType
    /**
     * the coordinates of the node
     * @field 
     */
    points: Knot[]

    // Owm methods of Clutter-11.Clutter.PathNode

    /**
     * Makes an allocated copy of a node.
     * @returns the copied node.
     */
    copy(): PathNode
    /**
     * Compares two nodes and checks if they are the same type with the
     * same coordinates.
     * @param node_b Second node
     * @returns %TRUE if the nodes are the same.
     */
    equal(node_b: PathNode): boolean
    /**
     * Frees the memory of an allocated node.
     */
    free(): void
}

/**
 * Represents a single node of a #ClutterPath.
 * 
 * Some of the coordinates in `points` may be unused for some node
 * types. %CLUTTER_PATH_MOVE_TO and %CLUTTER_PATH_LINE_TO use only one
 * pair of coordinates, %CLUTTER_PATH_CURVE_TO uses all three and
 * %CLUTTER_PATH_CLOSE uses none.
 * @record 
 */
class PathNode {

    // Own properties of Clutter-11.Clutter.PathNode

    static name: string
}

interface PathPrivate {
}

class PathPrivate {

    // Own properties of Clutter-11.Clutter.PathPrivate

    static name: string
}

interface Perspective {

    // Own fields of Clutter-11.Clutter.Perspective

    /**
     * the field of view angle, in degrees, in the y direction
     * @field 
     */
    fovy: number
    /**
     * the aspect ratio that determines the field of view in the x
     *   direction. The aspect ratio is the ratio of x (width) to y (height)
     * @field 
     */
    aspect: number
    /**
     * the distance from the viewer to the near clipping
     *   plane (always positive)
     * @field 
     */
    z_near: number
    /**
     * the distance from the viewer to the far clipping
     *   plane (always positive)
     * @field 
     */
    z_far: number
}

/**
 * Stage perspective definition.
 * @record 
 */
class Perspective {

    // Own properties of Clutter-11.Clutter.Perspective

    static name: string
}

interface PickContext {

    // Owm methods of Clutter-11.Clutter.PickContext

    destroy(): void
    /**
     * Retrieves the current transform of the pick stack.
     */
    get_transform(): /* out_matrix */ any
    /**
     * Logs an overlapping actor into the pick stack.
     * @param actor a #ClutterActor
     */
    log_overlap(actor: Actor): void
    /**
     * Logs a pick rectangle into the pick stack.
     * @param box a #ClutterActorBox
     * @param actor a #ClutterActor
     */
    log_pick(box: ActorBox, actor: Actor): void
    /**
     * Pops the current clip rectangle from the clip stack. It is a programming
     * error to call this without a corresponding [method`PickContext`.push_clip]
     * call first.
     */
    pop_clip(): void
    /**
     * Pops the current transform from the clip stack. It is a programming error
     * to call this without a corresponding [method`PickContext`.push_transform]
     * call first.
     */
    pop_transform(): void
    /**
     * Pushes a clip rectangle defined by `box` into the pick stack. Pop with
     * [method`PickContext`.pop_clip] when done.
     * @param box a #ClutterActorBox
     */
    push_clip(box: ActorBox): void
    /**
     * Pushes `transform` into the pick stack. Pop with
     * [method`PickContext`.pop_transform] when done.
     * @param transform a #graphene_matrix_t
     */
    push_transform(transform: any): void
    ref(): PickContext
    unref(): void
}

class PickContext {

    // Own properties of Clutter-11.Clutter.PickContext

    static name: string
}

interface PipelineNodeClass {
}

/**
 * The `ClutterPipelineNodeClass` structure is an opaque
 * type whose members cannot be directly accessed.
 * @record 
 */
abstract class PipelineNodeClass {

    // Own properties of Clutter-11.Clutter.PipelineNodeClass

    static name: string
}

interface PointerA11ySettings {

    // Own fields of Clutter-11.Clutter.PointerA11ySettings

    controls: PointerA11yFlags
    dwell_click_type: PointerA11yDwellClickType
    dwell_mode: PointerA11yDwellMode
    dwell_gesture_single: PointerA11yDwellDirection
    dwell_gesture_double: PointerA11yDwellDirection
    dwell_gesture_drag: PointerA11yDwellDirection
    dwell_gesture_secondary: PointerA11yDwellDirection
    secondary_click_delay: number
    dwell_delay: number
    dwell_threshold: number
}

/**
 * The #ClutterPointerA11ySettings structure contains pointer accessibility
 * settings
 * @record 
 */
class PointerA11ySettings {

    // Own properties of Clutter-11.Clutter.PointerA11ySettings

    static name: string
}

interface PropertyTransitionClass {
}

/**
 * The #ClutterPropertyTransitionClass structure
 * contains private data.
 * @record 
 */
abstract class PropertyTransitionClass {

    // Own properties of Clutter-11.Clutter.PropertyTransitionClass

    static name: string
}

interface PropertyTransitionPrivate {
}

class PropertyTransitionPrivate {

    // Own properties of Clutter-11.Clutter.PropertyTransitionPrivate

    static name: string
}

interface ProximityEvent {

    // Own fields of Clutter-11.Clutter.ProximityEvent

    /**
     * event type
     * @field 
     */
    type: EventType
    /**
     * event time
     * @field 
     */
    time: number
    /**
     * event flags
     * @field 
     */
    flags: EventFlags
    /**
     * event source stage
     * @field 
     */
    stage: Stage
    /**
     * the device that originated the event. If you want the physical
     * device the event originated from, use clutter_event_get_source_device()
     * @field 
     */
    device: InputDevice
}

/**
 * Event for tool proximity in tablet devices8
 * @record 
 */
class ProximityEvent {

    // Own properties of Clutter-11.Clutter.ProximityEvent

    static name: string
}

interface RootNodeClass {
}

abstract class RootNodeClass {

    // Own properties of Clutter-11.Clutter.RootNodeClass

    static name: string
}

interface RotateActionClass {
}

/**
 * The #ClutterRotateActionClass structure contains
 * only private data.
 * @record 
 */
abstract class RotateActionClass {

    // Own properties of Clutter-11.Clutter.RotateActionClass

    static name: string
}

interface RotateActionPrivate {
}

class RotateActionPrivate {

    // Own properties of Clutter-11.Clutter.RotateActionPrivate

    static name: string
}

interface ScriptClass {

    // Own fields of Clutter-11.Clutter.ScriptClass

    get_type_from_name: (script: Script, type_name: string | null) => GObject.GType
}

/**
 * The #ClutterScriptClass structure contains only private data
 * @record 
 */
abstract class ScriptClass {

    // Own properties of Clutter-11.Clutter.ScriptClass

    static name: string
}

interface ScriptPrivate {
}

class ScriptPrivate {

    // Own properties of Clutter-11.Clutter.ScriptPrivate

    static name: string
}

interface ScriptableIface {

    // Own fields of Clutter-11.Clutter.ScriptableIface

    set_id: (scriptable: Scriptable, id_: string | null) => void
    get_id: (scriptable: Scriptable) => string | null
    parse_custom_node: (scriptable: Scriptable, script: Script, value: any, name: string | null, node: any) => boolean
    set_custom_property: (scriptable: Scriptable, script: Script, name: string | null, value: any) => void
}

/**
 * Interface for implementing "scriptable" objects. An object implementing
 * this interface can override the parsing and properties setting sequence
 * when loading a UI definition data with #ClutterScript
 * @record 
 */
abstract class ScriptableIface {

    // Own properties of Clutter-11.Clutter.ScriptableIface

    static name: string
}

interface ScrollActorClass {
}

/**
 * The #ClutterScrollActor structure contains only
 * private data.
 * @record 
 */
abstract class ScrollActorClass {

    // Own properties of Clutter-11.Clutter.ScrollActorClass

    static name: string
}

interface ScrollActorPrivate {
}

class ScrollActorPrivate {

    // Own properties of Clutter-11.Clutter.ScrollActorPrivate

    static name: string
}

interface ScrollEvent {

    // Own fields of Clutter-11.Clutter.ScrollEvent

    /**
     * event type
     * @field 
     */
    type: EventType
    /**
     * event time
     * @field 
     */
    time: number
    /**
     * event flags
     * @field 
     */
    flags: EventFlags
    /**
     * event source stage
     * @field 
     */
    stage: Stage
    /**
     * event X coordinate
     * @field 
     */
    x: number
    /**
     * event Y coordinate
     * @field 
     */
    y: number
    /**
     * direction of the scrolling
     * @field 
     */
    direction: ScrollDirection
    /**
     * button modifiers
     * @field 
     */
    modifier_state: ModifierType
    /**
     * reserved for future use
     * @field 
     */
    axes: number
    /**
     * the device that originated the event. If you want the physical
     * device the event originated from, use clutter_event_get_source_device()
     * @field 
     */
    device: InputDevice
    /**
     * the source of scroll events. This field is available since 1.26
     * @field 
     */
    scroll_source: ScrollSource
    /**
     * the axes that were stopped in this event. This field is available since 1.26
     * @field 
     */
    finish_flags: ScrollFinishFlags
}

/**
 * Scroll wheel (or similar device) event
 * @record 
 */
class ScrollEvent {

    // Own properties of Clutter-11.Clutter.ScrollEvent

    static name: string
}

interface SeatClass {

    // Own fields of Clutter-11.Clutter.SeatClass

    parent_class: any
    get_pointer: (seat: Seat) => InputDevice
    get_keyboard: (seat: Seat) => InputDevice
    bell_notify: (seat: Seat) => void
    get_keymap: (seat: Seat) => Keymap
    handle_event_post: (seat: Seat, event: Event) => boolean
    warp_pointer: (seat: Seat, x: number, y: number) => void
    query_state: (seat: Seat, device: InputDevice, sequence: EventSequence, coords: any, modifiers: ModifierType) => boolean
    grab: (seat: Seat, time: number) => GrabState
    ungrab: (seat: Seat, time: number) => void
    create_virtual_device: (seat: Seat, device_type: InputDeviceType) => VirtualInputDevice
    get_supported_virtual_device_types: (seat: Seat) => VirtualDeviceType
}

abstract class SeatClass {

    // Own properties of Clutter-11.Clutter.SeatClass

    static name: string
}

interface SettingsClass {
}

abstract class SettingsClass {

    // Own properties of Clutter-11.Clutter.SettingsClass

    static name: string
}

interface Shader {
}

class Shader {

    // Own properties of Clutter-11.Clutter.Shader

    static name: string
}

interface ShaderEffectClass {

    // Own fields of Clutter-11.Clutter.ShaderEffectClass

    get_static_shader_source: (effect: ShaderEffect) => string | null
}

/**
 * The #ClutterShaderEffectClass structure contains
 * only private data
 * @record 
 */
abstract class ShaderEffectClass {

    // Own properties of Clutter-11.Clutter.ShaderEffectClass

    static name: string
}

interface ShaderEffectPrivate {
}

class ShaderEffectPrivate {

    // Own properties of Clutter-11.Clutter.ShaderEffectPrivate

    static name: string
}

interface SnapConstraintClass {
}

abstract class SnapConstraintClass {

    // Own properties of Clutter-11.Clutter.SnapConstraintClass

    static name: string
}

interface StageClass {

    // Own fields of Clutter-11.Clutter.StageClass

    activate: (stage: Stage) => void
    deactivate: (stage: Stage) => void
    before_paint: (stage: Stage, view: StageView) => void
    paint_view: (stage: Stage, view: StageView, redraw_clip: any) => void
}

/**
 * The #ClutterStageClass structure contains only private data
 * @record 
 */
abstract class StageClass {

    // Own properties of Clutter-11.Clutter.StageClass

    static name: string
}

interface StageManagerClass {

    // Own fields of Clutter-11.Clutter.StageManagerClass

    stage_added: (stage_manager: StageManager, stage: Stage) => void
    stage_removed: (stage_manager: StageManager, stage: Stage) => void
}

/**
 * The #ClutterStageManagerClass structure contains only private data
 * and should be accessed using the provided API
 * @record 
 */
abstract class StageManagerClass {

    // Own properties of Clutter-11.Clutter.StageManagerClass

    static name: string
}

interface StagePrivate {
}

class StagePrivate {

    // Own properties of Clutter-11.Clutter.StagePrivate

    static name: string
}

interface StageViewClass {

    // Own fields of Clutter-11.Clutter.StageViewClass

    parent_class: any
    setup_offscreen_blit_pipeline: (view: StageView, pipeline: Cogl.Pipeline) => void
    get_offscreen_transformation_matrix: (view: StageView, matrix: any) => void
    transform_rect_to_onscreen: (view: StageView, src_rect: any, dst_width: number, dst_height: number, dst_rect: any) => void
}

abstract class StageViewClass {

    // Own properties of Clutter-11.Clutter.StageViewClass

    static name: string
}

interface SwipeActionClass {

    // Own fields of Clutter-11.Clutter.SwipeActionClass

    swept: (action: SwipeAction, actor: Actor, direction: SwipeDirection) => void
}

/**
 * The #ClutterSwipeActionClass structure contains
 * only private data.
 * @record 
 */
abstract class SwipeActionClass {

    // Own properties of Clutter-11.Clutter.SwipeActionClass

    static name: string
}

interface SwipeActionPrivate {
}

class SwipeActionPrivate {

    // Own properties of Clutter-11.Clutter.SwipeActionPrivate

    static name: string
}

interface TapActionClass {

    // Own fields of Clutter-11.Clutter.TapActionClass

    tap: (action: TapAction, actor: Actor) => boolean
}

/**
 * The #ClutterTapActionClass structure contains
 * only private data.
 * @record 
 */
abstract class TapActionClass {

    // Own properties of Clutter-11.Clutter.TapActionClass

    static name: string
}

interface TapActionPrivate {
}

class TapActionPrivate {

    // Own properties of Clutter-11.Clutter.TapActionPrivate

    static name: string
}

interface TextBufferClass {

    // Own fields of Clutter-11.Clutter.TextBufferClass

    inserted_text: (buffer: TextBuffer, position: number, chars: string | null, n_chars: number) => void
    deleted_text: (buffer: TextBuffer, position: number, n_chars: number) => void
    get_text: (buffer: TextBuffer, n_bytes: number) => string | null
    get_length: (buffer: TextBuffer) => number
    insert_text: (buffer: TextBuffer, position: number, chars: string | null, n_chars: number) => number
    delete_text: (buffer: TextBuffer, position: number, n_chars: number) => number
}

/**
 * The #ClutterTextBufferClass structure contains
 * only private data.
 * @record 
 */
abstract class TextBufferClass {

    // Own properties of Clutter-11.Clutter.TextBufferClass

    static name: string
}

interface TextBufferPrivate {
}

class TextBufferPrivate {

    // Own properties of Clutter-11.Clutter.TextBufferPrivate

    static name: string
}

interface TextClass {

    // Own fields of Clutter-11.Clutter.TextClass

    text_changed: (self: Text) => void
    activate: (self: Text) => void
    cursor_event: (self: Text, rect: any) => void
    cursor_changed: (self: Text) => void
}

/**
 * The #ClutterTextClass struct contains only private data.
 * @record 
 */
abstract class TextClass {

    // Own properties of Clutter-11.Clutter.TextClass

    static name: string
}

interface TextNodeClass {
}

/**
 * The `ClutterTextNodeClass` structure is an opaque
 * type whose contents cannot be directly accessed.
 * @record 
 */
abstract class TextNodeClass {

    // Own properties of Clutter-11.Clutter.TextNodeClass

    static name: string
}

interface TextPrivate {
}

class TextPrivate {

    // Own properties of Clutter-11.Clutter.TextPrivate

    static name: string
}

interface TextureContentClass {

    // Own fields of Clutter-11.Clutter.TextureContentClass

    parent_class: any
}

abstract class TextureContentClass {

    // Own properties of Clutter-11.Clutter.TextureContentClass

    static name: string
}

interface TextureNodeClass {
}

/**
 * The `ClutterTextureNodeClass` structure is an
 * opaque type whose members cannot be directly accessed.
 * @record 
 */
abstract class TextureNodeClass {

    // Own properties of Clutter-11.Clutter.TextureNodeClass

    static name: string
}

interface TimelineClass {

    // Own fields of Clutter-11.Clutter.TimelineClass

    started: (timeline: Timeline) => void
    completed: (timeline: Timeline) => void
    paused: (timeline: Timeline) => void
    new_frame: (timeline: Timeline, msecs: number) => void
    marker_reached: (timeline: Timeline, marker_name: string | null, msecs: number) => void
    stopped: (timeline: Timeline, is_finished: boolean) => void
}

/**
 * The #ClutterTimelineClass structure contains only private data
 * @record 
 */
abstract class TimelineClass {

    // Own properties of Clutter-11.Clutter.TimelineClass

    static name: string
}

interface TimelinePrivate {
}

class TimelinePrivate {

    // Own properties of Clutter-11.Clutter.TimelinePrivate

    static name: string
}

interface TouchEvent {

    // Own fields of Clutter-11.Clutter.TouchEvent

    /**
     * event type
     * @field 
     */
    type: EventType
    /**
     * event time
     * @field 
     */
    time: number
    /**
     * event flags
     * @field 
     */
    flags: EventFlags
    /**
     * event source stage
     * @field 
     */
    stage: Stage
    /**
     * the X coordinate of the pointer, relative to the stage
     * @field 
     */
    x: number
    /**
     * the Y coordinate of the pointer, relative to the stage
     * @field 
     */
    y: number
    /**
     * the event sequence that this event belongs to
     * @field 
     */
    sequence: EventSequence
    /**
     * a bit-mask representing the state
     *   of modifier keys (e.g. Control, Shift, and Alt) and the pointer
     *   buttons. See #ClutterModifierType
     * @field 
     */
    modifier_state: ModifierType
    /**
     * reserved
     * @field 
     */
    axes: number
    /**
     * the device that originated the event. If you want the physical
     * device the event originated from, use clutter_event_get_source_device()
     * @field 
     */
    device: InputDevice
}

/**
 * Used for touch events.
 * 
 * The `type` field will be one of %CLUTTER_TOUCH_BEGIN, %CLUTTER_TOUCH_END,
 * %CLUTTER_TOUCH_UPDATE, or %CLUTTER_TOUCH_CANCEL.
 * 
 * Touch events are grouped into sequences; each touch sequence will begin
 * with a %CLUTTER_TOUCH_BEGIN event, progress with %CLUTTER_TOUCH_UPDATE
 * events, and end either with a %CLUTTER_TOUCH_END event or with a
 * %CLUTTER_TOUCH_CANCEL event.
 * 
 * With multi-touch capable devices there can be multiple event sequence
 * running at the same time.
 * @record 
 */
class TouchEvent {

    // Own properties of Clutter-11.Clutter.TouchEvent

    static name: string
}

interface TouchpadHoldEvent {

    // Own fields of Clutter-11.Clutter.TouchpadHoldEvent

    /**
     * event type
     * @field 
     */
    type: EventType
    /**
     * event time
     * @field 
     */
    time: number
    /**
     * event flags
     * @field 
     */
    flags: EventFlags
    /**
     * event source stage
     * @field 
     */
    stage: Stage
    /**
     * the current phase of the gesture
     * @field 
     */
    phase: TouchpadGesturePhase
    /**
     * the number of fingers triggering the swipe
     * @field 
     */
    n_fingers: number
    /**
     * the X coordinate of the pointer, relative to the stage
     * @field 
     */
    x: number
    /**
     * the Y coordinate of the pointer, relative to the stage
     * @field 
     */
    y: number
}

/**
 * Used for touchpad hold gesture events.
 * 
 * The current state of the gesture will be determined by the `phase` field.
 * 
 * A hold gesture starts when the user places one or many fingers on the
 * touchpad and ends when all fingers are lifted. It is cancelled when the
 * finger(s) move past a certain threshold.
 * Unlike swipe and pinch, `phase` can only be
 * CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN, CLUTTER_TOUCHPAD_GESTURE_PHASE_END and
 * CLUTTER_TOUCHPAD_GESTURE_PHASE_CANCEL.
 * @record 
 */
class TouchpadHoldEvent {

    // Own properties of Clutter-11.Clutter.TouchpadHoldEvent

    static name: string
}

interface TouchpadPinchEvent {

    // Own fields of Clutter-11.Clutter.TouchpadPinchEvent

    /**
     * event type
     * @field 
     */
    type: EventType
    /**
     * event time
     * @field 
     */
    time: number
    /**
     * event flags
     * @field 
     */
    flags: EventFlags
    /**
     * event source stage
     * @field 
     */
    stage: Stage
    /**
     * the current phase of the gesture
     * @field 
     */
    phase: TouchpadGesturePhase
    /**
     * the X coordinate of the pointer, relative to the stage
     * @field 
     */
    x: number
    /**
     * the Y coordinate of the pointer, relative to the stage
     * @field 
     */
    y: number
    /**
     * movement delta of the pinch focal point in the X axis
     * @field 
     */
    dx: number
    /**
     * movement delta of the pinch focal point in the Y axis
     * @field 
     */
    dy: number
    /**
     * unaccelerated movement delta of the pinch focal
     *   point in the X axis
     * @field 
     */
    dx_unaccel: number
    /**
     * unaccelerated movement delta of the pinch focal
     *   point in the Y axis
     * @field 
     */
    dy_unaccel: number
    /**
     * angle delta in degrees, clockwise rotations are
     *   represented by positive deltas
     * @field 
     */
    angle_delta: number
    /**
     * the current scale
     * @field 
     */
    scale: number
    n_fingers: number
}

/**
 * Used for touchpad pinch gesture events.
 * 
 * The current state of the gesture will be determined by the `phase` field.
 * 
 * Each event with phase %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN
 * will report a `scale` of 1.0, all later phases in the gesture
 * report the current scale relative to the initial 1.0 value
 * (eg. 0.5 being half the size, 2.0 twice as big).4
 * @record 
 */
class TouchpadPinchEvent {

    // Own properties of Clutter-11.Clutter.TouchpadPinchEvent

    static name: string
}

interface TouchpadSwipeEvent {

    // Own fields of Clutter-11.Clutter.TouchpadSwipeEvent

    /**
     * event type
     * @field 
     */
    type: EventType
    /**
     * event time
     * @field 
     */
    time: number
    /**
     * event flags
     * @field 
     */
    flags: EventFlags
    /**
     * event source stage
     * @field 
     */
    stage: Stage
    /**
     * the current phase of the gesture
     * @field 
     */
    phase: TouchpadGesturePhase
    /**
     * the number of fingers triggering the swipe
     * @field 
     */
    n_fingers: number
    /**
     * the X coordinate of the pointer, relative to the stage
     * @field 
     */
    x: number
    /**
     * the Y coordinate of the pointer, relative to the stage
     * @field 
     */
    y: number
    /**
     * movement delta of the swipe center point in the X axis
     * @field 
     */
    dx: number
    /**
     * movement delta of the swipe center point in the Y axis
     * @field 
     */
    dy: number
    /**
     * unaccelerated movement delta of the swipe center
     *   point in the X axis
     * @field 
     */
    dx_unaccel: number
    /**
     * unaccelerated movement delta of the swipe center
     *   point in the Y axis
     * @field 
     */
    dy_unaccel: number
}

/**
 * Used for touchpad swipe gesture events.
 * 
 * The current state of the gesture will be determined by the `phase` field.4
 * @record 
 */
class TouchpadSwipeEvent {

    // Own properties of Clutter-11.Clutter.TouchpadSwipeEvent

    static name: string
}

interface TransformNodeClass {
}

abstract class TransformNodeClass {

    // Own properties of Clutter-11.Clutter.TransformNodeClass

    static name: string
}

interface TransitionClass {

    // Own fields of Clutter-11.Clutter.TransitionClass

    attached: (transition: Transition, animatable: Animatable) => void
    detached: (transition: Transition, animatable: Animatable) => void
    compute_value: (transition: Transition, animatable: Animatable, interval: Interval, progress: number) => void
}

/**
 * The #ClutterTransitionClass structure contains
 * private data.
 * @record 
 */
abstract class TransitionClass {

    // Own properties of Clutter-11.Clutter.TransitionClass

    static name: string
}

interface TransitionGroupClass {
}

/**
 * The #ClutterTransitionGroupClass structure
 * contains only private data.
 * @record 
 */
abstract class TransitionGroupClass {

    // Own properties of Clutter-11.Clutter.TransitionGroupClass

    static name: string
}

interface TransitionGroupPrivate {
}

class TransitionGroupPrivate {

    // Own properties of Clutter-11.Clutter.TransitionGroupPrivate

    static name: string
}

interface TransitionPrivate {
}

class TransitionPrivate {

    // Own properties of Clutter-11.Clutter.TransitionPrivate

    static name: string
}

interface Units {

    // Owm methods of Clutter-11.Clutter.Units

    /**
     * Copies `units`
     * @returns the newly created copy of a   #ClutterUnits structure. Use [method@Units.free] to free   the allocated resources
     */
    copy(): Units
    /**
     * Frees the resources allocated by `units`
     * 
     * You should only call this function on a #ClutterUnits
     * created using [method`Units`.copy]
     */
    free(): void
    /**
     * Retrieves the unit type of the value stored inside `units`
     * @returns a unit type
     */
    get_unit_type(): UnitType
    /**
     * Retrieves the value stored inside `units`
     * @returns the value stored inside a #ClutterUnits
     */
    get_unit_value(): number
    /**
     * Converts a value in #ClutterUnits to pixels
     * @returns the value in pixels
     */
    to_pixels(): number
    /**
     * Converts `units` into a string
     * 
     * See [func`Units`.from_string] for the units syntax and for
     * examples of output
     * 
     * Fractional values are truncated to the second decimal
     * position for em, mm and cm, and to the first decimal position for
     * typographic points. Pixels are integers.
     * @returns a newly allocated string containing the encoded   #ClutterUnits value. Use [func@GLib.free] to free the string
     */
    to_string(): string | null
}

/**
 * A logical distance unit
 * 
 * #ClutterUnits is a structure holding a logical distance value along with
 * its type, expressed as a value of the [enum`UnitType]` enumeration. It is
 * possible to use #ClutterUnits to store a position or a size in units
 * different than pixels, and convert them whenever needed (for instance
 * inside the [vfunc`Actor`.allocate] virtual function, or inside the
 * [vfunc`Actor`.get_preferred_width] and [vfunc`Actor`.get_preferred_height]
 * virtual functions.
 * 
 * In order to register a #ClutterUnits property, the [class`ParamSpecUnit]`
 * [class`GObject`.ParamSpec] sub-class should be used:
 * 
 * ```c
 *   GParamSpec *pspec;
 * 
 *   pspec = clutter_param_spec_units ("active-width",
 *                                     "Width",
 *                                     "Width of the active area, in millimeters",
 *                                     CLUTTER_UNIT_MM,
 *                                     0.0, 12.0,
 *                                     12.0,
 *                                     G_PARAM_READWRITE);
 *   g_object_class_install_property (gobject_class, PROP_WIDTH, pspec);
 * ```
 * 
 * A [struct`GObject`.Value] holding units can be manipulated using [func`value_set_units]`
 * and [func`value_get_units]`. [struct`GObject`.Value]s containing a #ClutterUnits
 * value can also be transformed to [struct`GObject`.Value]s initialized with
 * %G_TYPE_INT, %G_TYPE_FLOAT and %G_TYPE_STRING through implicit conversion
 * and using [method`GObject`.Value.transform].
 * @record 
 */
class Units {

    // Own properties of Clutter-11.Clutter.Units

    static name: string

    // Constructors of Clutter-11.Clutter.Units

    /**
     * Stores a value in centimeters inside `units`
     * @param cm centimeters
     */
    static from_cm(cm: number): /* units */ Units
    /**
     * Stores a value in em inside `units,` using the default font
     * name
     * @param em em
     */
    static from_em(em: number): /* units */ Units
    /**
     * Stores a value in em inside `units` using `font_name`
     * @param font_name the font name and size
     * @param em em
     */
    static from_em_for_font(font_name: string | null, em: number): /* units */ Units
    /**
     * Stores a value in millimiters inside `units`
     * @param mm millimeters
     */
    static from_mm(mm: number): /* units */ Units
    /**
     * Stores a value in pixels inside `units`
     * @param px pixels
     */
    static from_pixels(px: number): /* units */ Units
    /**
     * Stores a value in typographic points inside `units`
     * @param pt typographic points
     */
    static from_pt(pt: number): /* units */ Units
    /**
     * Parses a value and updates `units` with it
     * 
     * A #ClutterUnits expressed in string should match:
     * 
     * ```
     *   units: wsp* unit-value wsp* unit-name? wsp*
     *   unit-value: number
     *   unit-name: 'px' | 'pt' | 'mm' | 'em' | 'cm'
     *   number: digit+
     *           | digit* sep digit+
     *   sep: '.' | ','
     *   digit: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
     *   wsp: (#0x20 | #0x9 | #0xA | #0xB | #0xC | #0xD)+
     * ```
     * 
     * For instance, these are valid strings:
     * 
     * ```
     *   10 px
     *   5.1 em
     *   24 pt
     *   12.6 mm
     *   .3 cm
     * ```
     * 
     * While these are not:
     * 
     * ```
     *   42 cats
     *   omg!1!ponies
     * ```
     * 
     * If no unit is specified, pixels are assumed.
     * @param str the string to convert
     * @returns %TRUE if the string was successfully parsed,   and %FALSE otherwise
     */
    static from_string(str: string | null): [ /* returnType */ boolean, /* units */ Units ]
}

interface VirtualInputDeviceClass {

    // Own fields of Clutter-11.Clutter.VirtualInputDeviceClass

    parent_class: any
    notify_relative_motion: (virtual_device: VirtualInputDevice, time_us: number, dx: number, dy: number) => void
    notify_absolute_motion: (virtual_device: VirtualInputDevice, time_us: number, x: number, y: number) => void
    notify_button: (virtual_device: VirtualInputDevice, time_us: number, button: number, button_state: ButtonState) => void
    notify_key: (virtual_device: VirtualInputDevice, time_us: number, key: number, key_state: KeyState) => void
    notify_keyval: (virtual_device: VirtualInputDevice, time_us: number, keyval: number, key_state: KeyState) => void
    notify_discrete_scroll: (virtual_device: VirtualInputDevice, time_us: number, direction: ScrollDirection, scroll_source: ScrollSource) => void
    notify_scroll_continuous: (virtual_device: VirtualInputDevice, time_us: number, dx: number, dy: number, scroll_source: ScrollSource, finish_flags: ScrollFinishFlags) => void
    notify_touch_down: (virtual_device: VirtualInputDevice, time_us: number, slot: number, x: number, y: number) => void
    notify_touch_motion: (virtual_device: VirtualInputDevice, time_us: number, slot: number, x: number, y: number) => void
    notify_touch_up: (virtual_device: VirtualInputDevice, time_us: number, slot: number) => void
}

abstract class VirtualInputDeviceClass {

    // Own properties of Clutter-11.Clutter.VirtualInputDeviceClass

    static name: string
}

interface ZoomActionClass {
}

/**
 * The #ClutterZoomActionClass structure contains
 * only private data
 * @record 
 */
abstract class ZoomActionClass {

    // Own properties of Clutter-11.Clutter.ZoomActionClass

    static name: string
}

interface ZoomActionPrivate {
}

class ZoomActionPrivate {

    // Own properties of Clutter-11.Clutter.ZoomActionPrivate

    static name: string
}

interface Event {

    // Owm methods of Clutter-11.Clutter.Event

    /**
     * Copies `event`.
     * @returns A newly allocated #ClutterEvent
     */
    copy(): Event
    /**
     * Frees all resources used by `event`.
     */
    free(): void
    /**
     * Retrieves the angle relative from `source` to `target`.
     * 
     * The direction of the angle is from the position X axis towards
     * the positive Y axis.
     * @param target a #ClutterEvent
     * @returns the angle between two #ClutterEvent
     */
    get_angle(target: Event): number
    /**
     * Retrieves the array of axes values attached to the event.
     * @returns an array of axis values
     */
    get_axes(): [ /* returnType */ number, /* n_axes */ number ]
    /**
     * Retrieves the button number of `event`
     * @returns the button number
     */
    get_button(): number
    /**
     * Retrieves the coordinates of `event` and puts them into `x` and `y`.
     */
    get_coords(): [ /* x */ number, /* y */ number ]
    /**
     * Retrieves the #ClutterInputDevice for the event.
     * If you want the physical device the event originated from, use
     * clutter_event_get_source_device().
     * 
     * The #ClutterInputDevice structure is completely opaque and should
     * be cast to the platform-specific implementation.
     * @returns the #ClutterInputDevice or %NULL. The   returned device is owned by the #ClutterEvent and it should not   be unreferenced
     */
    get_device(): InputDevice
    /**
     * Returns the device tool that originated this event
     * @returns The tool of this event8
     */
    get_device_tool(): InputDeviceTool
    /**
     * Retrieves the type of the device for `event`
     * @returns the #ClutterInputDeviceType for the device, if   any is set
     */
    get_device_type(): InputDeviceType
    /**
     * Retrieves the distance between two events, a `source` and a `target`.
     * @param target a #ClutterEvent
     * @returns the distance between two #ClutterEvent
     */
    get_distance(target: Event): number
    get_event_code(): number
    /**
     * Retrieves the #ClutterEventSequence of `event`.
     * @returns the event sequence, or %NULL
     */
    get_event_sequence(): EventSequence
    /**
     * Retrieves the #ClutterEventFlags of `event`
     * @returns the event flags
     */
    get_flags(): EventFlags
    /**
     * Returns the gesture motion deltas relative to the current pointer
     * position.4
     */
    get_gesture_motion_delta(): [ /* dx */ number, /* dy */ number ]
    /**
     * Returns the unaccelerated gesture motion deltas relative to the current
     * pointer position. Unlike clutter_event_get_gesture_motion_delta(),
     * pointer acceleration is ignored.
     */
    get_gesture_motion_delta_unaccelerated(): [ /* dx */ number, /* dy */ number ]
    /**
     * Returns the phase of the event, See #ClutterTouchpadGesturePhase.
     * @returns the phase of the gesture event.
     */
    get_gesture_phase(): TouchpadGesturePhase
    /**
     * Returns the angle delta reported by this specific event.
     * @returns The angle delta relative to the previous event.4
     */
    get_gesture_pinch_angle_delta(): number
    /**
     * Returns the current scale as reported by `event,` 1.0 being the original
     * distance at the time the corresponding event with phase
     * %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN is received.
     * is received.
     * @returns the current pinch gesture scale4
     */
    get_gesture_pinch_scale(): number
    /**
     * Retrieves the keycode of the key that caused `event`
     * @returns The keycode representing the key
     */
    get_key_code(): number
    /**
     * Retrieves the key symbol of `event`
     * @returns the key symbol representing the key
     */
    get_key_symbol(): number
    /**
     * Retrieves the unicode value for the key that caused `keyev`.
     * @returns The unicode value representing the key
     */
    get_key_unicode(): string
    get_mode_group(): number
    /**
     * Returns the details of a pad event.
     * @returns #TRUE if event details could be obtained
     */
    get_pad_event_details(): [ /* returnType */ boolean, /* number */ number, /* mode */ number, /* value */ number ]
    /**
     * Retrieves the event coordinates as a #graphene_point_t.
     * @param position a #graphene_point_t
     */
    get_position(position: any): void
    /**
     * Retrieves the related actor of a crossing event.
     * @returns the related #ClutterActor, or %NULL
     */
    get_related(): Actor
    get_relative_motion(dx: number, dy: number, dx_unaccel: number, dy_unaccel: number): boolean
    /**
     * Retrieves the precise scrolling information of `event`.
     * 
     * The `event` has to have a #ClutterScrollEvent.direction value
     * of %CLUTTER_SCROLL_SMOOTH.
     */
    get_scroll_delta(): [ /* dx */ number, /* dy */ number ]
    /**
     * Retrieves the direction of the scrolling of `event`
     * @returns the scrolling direction
     */
    get_scroll_direction(): ScrollDirection
    /**
     * Returns the #ClutterScrollFinishFlags of an scroll event. Those
     * can be used to determine whether post-scroll effects like kinetic
     * scrolling should be applied.
     * @returns The scroll finish flags6
     */
    get_scroll_finish_flags(): ScrollFinishFlags
    /**
     * Returns the #ClutterScrollSource that applies to an scroll event.
     * @returns The source of scroll events6
     */
    get_scroll_source(): ScrollSource
    /**
     * Retrieves the source #ClutterActor the event originated from, or
     * NULL if the event has no source.
     * @returns a #ClutterActor
     */
    get_source(): Actor
    /**
     * Retrieves the hardware device that originated the event.
     * 
     * If you need the virtual device, use clutter_event_get_device().
     * 
     * If no hardware device originated this event, this function will
     * return the same device as clutter_event_get_device().
     * @returns a pointer to a #ClutterInputDevice   or %NULL
     */
    get_source_device(): InputDevice
    /**
     * Retrieves the source #ClutterStage the event originated for, or
     * %NULL if the event has no stage.
     * @returns a #ClutterStage
     */
    get_stage(): Stage
    /**
     * Retrieves the modifier state of the event. In case the window system
     * supports reporting latched and locked modifiers, this function returns
     * the effective state.
     * @returns the modifier state parameter, or 0
     */
    get_state(): ModifierType
    /**
     * Retrieves the decomposition of the keyboard state into button, base,
     * latched, locked and effective. This can be used to transmit to other
     * applications, for example when implementing a wayland compositor.
     */
    get_state_full(): [ /* button_state */ ModifierType, /* base_state */ ModifierType, /* latched_state */ ModifierType, /* locked_state */ ModifierType, /* effective_state */ ModifierType ]
    /**
     * Retrieves the time of the event.
     * @returns the time of the event, or %CLUTTER_CURRENT_TIME
     */
    get_time(): number
    get_time_us(): number
    /**
     * Returns the number of fingers that is triggering the touchpad gesture.
     * @returns the number of fingers in the gesture.4
     */
    get_touchpad_gesture_finger_count(): number
    /**
     * Checks whether `event` has the Control modifier mask set.
     * @returns %TRUE if the event has the Control modifier mask set
     */
    has_control_modifier(): boolean
    /**
     * Checks whether `event` has the Shift modifier mask set.
     * @returns %TRUE if the event has the Shift modifier mask set
     */
    has_shift_modifier(): boolean
    /**
     * Checks whether a pointer `event` has been generated by the windowing
     * system. The returned value can be used to distinguish between events
     * synthesized by the windowing system itself (as opposed by Clutter).
     * @returns %TRUE if the event is pointer emulated
     */
    is_pointer_emulated(): boolean
    /**
     * Puts a copy of the event on the back of the event queue. The event will
     * have the %CLUTTER_EVENT_FLAG_SYNTHETIC flag set. If the source is set
     * event signals will be emitted for this source and capture/bubbling for
     * its ancestors. If the source is not set it will be generated by picking
     * or use the actor that currently has keyboard focus
     */
    put(): void
    /**
     * Sets the button number of `event`
     * @param button the button number
     */
    set_button(button: number): void
    /**
     * Sets the coordinates of the `event`.
     * @param x the X coordinate of the event
     * @param y the Y coordinate of the event
     */
    set_coords(x: number, y: number): void
    /**
     * Sets the device for `event`.
     * @param device a #ClutterInputDevice, or %NULL
     */
    set_device(device: InputDevice | null): void
    /**
     * Sets the tool in use for this event8
     * @param tool a #ClutterInputDeviceTool
     */
    set_device_tool(tool: InputDeviceTool | null): void
    /**
     * Sets the #ClutterEventFlags of `event`
     * @param flags a binary OR of #ClutterEventFlags values
     */
    set_flags(flags: EventFlags): void
    /**
     * Sets the keycode of the `event`.
     * @param key_code the keycode representing the key
     */
    set_key_code(key_code: number): void
    /**
     * Sets the key symbol of `event`.
     * @param key_sym the key symbol representing the key
     */
    set_key_symbol(key_sym: number): void
    /**
     * Sets the Unicode value of `event`.
     * @param key_unicode the Unicode value representing the key
     */
    set_key_unicode(key_unicode: string): void
    /**
     * Sets the related actor of a crossing event
     * @param actor a #ClutterActor or %NULL
     */
    set_related(actor: Actor | null): void
    /**
     * Sets the precise scrolling information of `event`.
     * @param dx delta on the horizontal axis
     * @param dy delta on the vertical axis
     */
    set_scroll_delta(dx: number, dy: number): void
    /**
     * Sets the direction of the scrolling of `event`
     * @param direction the scrolling direction
     */
    set_scroll_direction(direction: ScrollDirection): void
    /**
     * Sets the source #ClutterActor of `event`.
     * @param actor a #ClutterActor, or %NULL
     */
    set_source(actor: Actor | null): void
    /**
     * Sets the source #ClutterInputDevice for `event`.
     * 
     * The #ClutterEvent must have been created using clutter_event_new().
     * @param device a #ClutterInputDevice
     */
    set_source_device(device: InputDevice | null): void
    /**
     * Sets the source #ClutterStage of the event.
     * @param stage a #ClutterStage, or %NULL
     */
    set_stage(stage: Stage | null): void
    /**
     * Sets the modifier state of the event.
     * @param state the modifier state to set
     */
    set_state(state: ModifierType): void
    /**
     * Sets the time of the event.
     * @param time_ the time of the event
     */
    set_time(time_: number): void
    /**
     * Retrieves the type of the event.
     * @returns a #ClutterEventType
     */
    type(): EventType
}

/**
 * User and window system events
 * 
 * The events usually come from the windowing backend, but can also
 * be synthesized by Clutter itself or by the application code.
 * @union 
 */
class Event {

    // Own properties of Clutter-11.Clutter.Event

    static name: string

    // Constructors of Clutter-11.Clutter.Event

    /**
     * Creates a new #ClutterEvent of the specified type.
     * @constructor 
     * @param type The type of event.
     * @returns A newly allocated #ClutterEvent.
     */
    constructor(type: EventType) 
    /**
     * Creates a new #ClutterEvent of the specified type.
     * @constructor 
     * @param type The type of event.
     * @returns A newly allocated #ClutterEvent.
     */
    static new(type: EventType): Event
    /**
     * Adds a function which will be called for all events that Clutter
     * processes. The function will be called before any signals are
     * emitted for the event and it will take precedence over any grabs.
     * @param stage The #ClutterStage to capture events for
     * @param func The callback function which will be passed all events.
     * @returns an identifier for the event filter, to be used   with clutter_event_remove_filter().
     */
    static add_filter(stage: Stage | null, func: EventFilterFunc): number
    /**
     * Pops an event off the event queue. Applications should not need to call
     * this.
     * @returns A #ClutterEvent or NULL if queue empty
     */
    static get(): Event
    /**
     * Removes an event filter that was previously added with
     * clutter_event_add_filter().
     * @param id The ID of the event filter, as returned from clutter_event_add_filter()
     */
    static remove_filter(id: number): void
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
export default Clutter;