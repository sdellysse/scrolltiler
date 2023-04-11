/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */
const _ = imports.misc.extensionUtils.gettext;
const GObject = imports.gi.GObject;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu.PopupMenu;
const PopupMenuItem = imports.ui.popupMenu.PopupMenuItem;
const St = imports.gi.St;

class TIndicator extends PanelMenu.Button {
  constructor() {
    super(0.0, _("My Shiny Indicator"));
  }

  _init() {
    super._init(0.0, _("My Shiny Indicator"));

    this.add_child(
      new St.Icon({
        icon_name: "face-smile-symbolic",
        style_class: "system-status-icon",
      })
    );

    let item = new PopupMenuItem(_("Show Notification"));
    item.connect("activate", () => {
      Main.notify(_("Hello World! :)"));
    });

    (this.menu as InstanceType<typeof PopupMenu>).addMenuItem(item);
  }
}

const Indicator = GObject.registerClass(TIndicator);
export default Indicator;
