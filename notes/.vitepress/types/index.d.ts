// nav -----------------------------------------------------------------------

export type NavItem = NavItemComponent | NavItemWithLink | NavItemWithChildren;

export interface NavItemComponent {
  component: string;
  props?: Record<string, any>;
}

export interface NavItemWithLink {
  text: string;
  link: string;
  items?: never;

  /**
   * `activeMatch` is expected to be a regex string. We can't use actual
   * RegExp object here because it isn't serializable
   */
  activeMatch?: string;
  rel?: string;
  target?: string;
  noIcon?: boolean;
}

export interface NavItemChildren {
  text?: string;
  items: NavItemWithLink[];
}

export interface NavItemWithChildren {
  text?: string;
  items: (NavItemComponent | NavItemChildren | NavItemWithLink)[];

  /**
   * `activeMatch` is expected to be a regex string. We can't use actual
   * RegExp object here because it isn't serializable
   */
  activeMatch?: string;
}
