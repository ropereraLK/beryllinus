import type { BaseComponentProps } from "../BaseComponent/BaseComponent.type";

export interface BaseButtonProps {
  /**
   * Renders the button as disabled and prevents clicks.
   */
  disabled?: boolean;
  /**
   * Provides a reason why the button is disabled (only when `disabled` is `true`).
   * If provided, the button becomes focusable.
   * Applicable for all button variants, except link.
   */
  disabledReason?: string;
  /**
   * Renders the button as being in a loading state. It takes precedence over the `disabled` if both are set to `true`.
   * It prevents users from clicking the button, but it can still be focused.
   */
  loading?: boolean;
  /**
   * Specifies the text that screen reader announces when the button is in a loading state.
   */
  loadingText?: string;
  /**
   * Displays an icon next to the text. You can use the `iconAlign` property to position the icon.
   */
}

export type ButtonVariant = "primary" | "normal";

export interface ButtonProps extends BaseComponentProps, BaseButtonProps {
  /**
   * Sets the button width to be 100% of the parent container width. Button content is centered.
   */
  fullWidth?: boolean;

  varient?: ButtonVariant;
}
