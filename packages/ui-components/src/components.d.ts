/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppCard {
        "index": number;
    }
    interface AppHome {
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppCardElement extends Components.AppCard, HTMLStencilElement {
    }
    var HTMLAppCardElement: {
        prototype: HTMLAppCardElement;
        new (): HTMLAppCardElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-card": HTMLAppCardElement;
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppCard {
        "index": number;
    }
    interface AppHome {
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-card": AppCard;
        "app-home": AppHome;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-card": LocalJSX.AppCard & JSXBase.HTMLAttributes<HTMLAppCardElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
