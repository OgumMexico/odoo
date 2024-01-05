/** @odoo-module **/

import {PageControllerMixin, PageRendererMixin} from "./page_views_mixin";
import {PageSearchModel} from "./page_search_model";
import {registry} from '@web/core/registry';
import {kanbanView} from "@web/views/kanban/kanban_view";
import {CheckboxItem} from "@web/core/dropdown/checkbox_item";

export class PageKanbanController extends PageControllerMixin(kanbanView.Controller) {
    static template = "website.PageKanbanView";
    static components = {
        ...kanbanView.Controller.components,
        CheckboxItem,
    };
    /**
     * @override
     */
    async createRecord() {
        return this.createWebsiteContent();
    }
}

// TODO master: remove `PageRendererMixin` extend, props override and template
export class PageKanbanRenderer extends PageRendererMixin(kanbanView.Renderer) {
    static props = [...kanbanView.Renderer.props, "activeWebsite"];
    static template = "website.PageKanbanRenderer";
}

export const PageKanbanView = {
    ...kanbanView,
    Renderer: PageKanbanRenderer,
    Controller: PageKanbanController,
    SearchModel: PageSearchModel,
};

registry.category("views").add("website_pages_kanban", PageKanbanView);
