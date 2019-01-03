/**
 * @file   mofron-comp-DropDownMenu/index.js
 * @brief  dropdown menu component
 * @author simpart
 */
const mf = require('mofron');
const DropDown = require('mofron-comp-dropdown');
const Menu     = require('mofron-comp-menu');

mf.comp.DDMenu = class extends DropDown {
    
    /**
     * initialize component
     * 
     * @param p1 (Component) index component
     * @param p1 (object) option
     * @param p2 (Component) menu item
     */
    constructor (po, p2) {
        try {
            super();
            this.name('DDMenu');
            this.prmMap(['index', 'item']);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @npte private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.child(this.menu());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * menu component setter/getter
     */
    menu (prm) {
        try { return this.innerComp('menu', prm, Menu); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * menu item setter/getter
     */
    item (prm) {
        try { return this.menu().item(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.DDMenu;
/* end of file */
