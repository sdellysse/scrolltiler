/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * CoglPango-11
 */

/// <reference path="Gjs.d.ts" />
import type * as Gjs from './Gjs.js';
/// <reference path="PangoCairo-1.0.d.ts" />
import type PangoCairo from './PangoCairo-1.0.js';
// WARN: Dependency not found: 'cairo-1.0'
/// <reference path="Pango-1.0.d.ts" />
import type Pango from './Pango-1.0.js';
/// <reference path="HarfBuzz-0.0.d.ts" />
import type HarfBuzz from './HarfBuzz-0.0.js';
// WARN: Dependency not found: 'freetype2-2.0'
// WARN: Dependency not found: 'GObject-2.0'
// WARN: Dependency not found: 'Gio-2.0'
/// <reference path="Cogl-11.d.ts" />
import type Cogl from './Cogl-11.js';
// WARN: Dependency not found: 'Graphene-1.0'
// WARN: Dependency not found: 'GL-1.0'

declare namespace CoglPango {

/**
 * This updates any internal glyph cache textures as necessary to be
 * able to render the given `layout`.
 * 
 * This api should be used to avoid mid-scene modifications of
 * glyph-cache textures which can lead to undefined rendering results.
 * @param layout A #PangoLayout
 */
function ensure_glyph_cache_for_layout(layout: Pango.Layout): void
/**
 * Clears the glyph cache for `font_map`.
 * @param font_map a #CoglPangoFontMap
 */
function font_map_clear_glyph_cache(font_map: FontMap): void
/**
 * Create a #PangoContext for the given `font_map`.
 * @param font_map a #CoglPangoFontMap
 * @returns the newly created context: free with g_object_unref().
 */
function font_map_create_context(font_map: FontMap): Pango.Context
/**
 * Retrieves the #CoglPangoRenderer for the passed `font_map`.
 * @param font_map a #CoglPangoFontMap
 * @returns a #PangoRenderer
 */
function font_map_get_renderer(font_map: FontMap): Pango.Renderer
/**
 * Retrieves whether the #CoglPangoRenderer used by `font_map` will use
 * mipmapping when rendering the glyphs.
 * @param font_map a #CoglPangoFontMap
 * @returns %TRUE if mipmapping is used, %FALSE otherwise.
 */
function font_map_get_use_mipmapping(font_map: FontMap): boolean
/**
 * Creates a new font map.
 * @returns the newly created #PangoFontMap
 */
function font_map_new(): Pango.FontMap
/**
 * Sets the resolution for the `font_map`. This is a scale factor
 * between points specified in a #PangoFontDescription and Cogl units.
 * The default value is %96, meaning that a 10 point font will be 13
 * units high. (10 * 96. / 72. = 13.3).
 * @param font_map a #CoglPangoFontMap
 * @param dpi The resolution in "dots per inch". (Physical inches aren't       actually involved; the terminology is conventional.)
 */
function font_map_set_resolution(font_map: FontMap, dpi: number): void
/**
 * Sets whether the renderer for the passed font map should use
 * mipmapping when rendering a #PangoLayout.
 * @param font_map a #CoglPangoFontMap
 * @param value %TRUE to enable the use of mipmapping
 */
function font_map_set_use_mipmapping(font_map: FontMap, value: boolean): void
interface Renderer {

    // Own properties of CoglPango-11.CoglPango.Renderer

    readonly context: any
}

class Renderer extends Pango.Renderer {

    // Own properties of CoglPango-11.CoglPango.Renderer

    static name: string
}

interface RendererClass {
}

abstract class RendererClass {

    // Own properties of CoglPango-11.CoglPango.RendererClass

    static name: string
}

    type FontMap = PangoCairo.FontMap
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
export default CoglPango;