/// <reference types="astro/client" />

declare module "@pagefind/default-ui" {
  export class PagefindUI {
    constructor(opts: any);
    triggerSearch(term: string): void;
  }
}
