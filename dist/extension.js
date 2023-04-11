// src/indicator.ts
var _ = imports.misc.extensionUtils.gettext;
var GObject = imports.gi.GObject;
var Main = imports.ui.main;
var PanelMenu = imports.ui.panelMenu;
var PopupMenu = imports.ui.popupMenu.PopupMenu;
var PopupMenuItem = imports.ui.popupMenu.PopupMenuItem;
var St = imports.gi.St;
var TIndicator = class extends PanelMenu.Button {
  constructor() {
    super(0, _("My Shiny Indicator"));
  }
  _init() {
    super._init(0, _("My Shiny Indicator"));
    this.add_child(
      new St.Icon({
        icon_name: "face-smile-symbolic",
        style_class: "system-status-icon"
      })
    );
    let item = new PopupMenuItem(_("Show Notification"));
    item.connect("activate", () => {
      Main.notify(_("Hello World! :)"));
    });
    this.menu.addMenuItem(item);
  }
};
var Indicator = GObject.registerClass(TIndicator);
var indicator_default = Indicator;

// src/extension.ts
var ExtensionUtils = imports.misc.extensionUtils;
var Main2 = imports.ui.main;
var GETTEXT_DOMAIN = "my-indicator-extension";
var Extension = class {
  _uuid;
  _indicator = null;
  constructor(uuid) {
    this._uuid = uuid;
    ExtensionUtils.initTranslations(GETTEXT_DOMAIN);
  }
  enable() {
    this._indicator = new indicator_default();
    Main2.panel.addToStatusArea(this._uuid, this._indicator);
  }
  disable() {
    this._indicator?.destroy();
    this._indicator = null;
  }
};
var extension_default = Extension;

// src/exports/extension.ts
function init(meta) {
  return new extension_default(meta.uuid);
}
