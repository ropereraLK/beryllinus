Button Component Reverse Engineering Specification
1. Purpose

The Button component is a reusable UI primitive responsible for rendering interactive controls for user actions and navigation while providing consistent styling, accessibility, analytics integration, loading behavior, and extensibility.

2. Rendering Modes

The component supports two rendering strategies.

2.1 Native Button

Render

<button>

when

href == undefined
2.2 Anchor Mode

Render

<a>

when

href != undefined

The component automatically switches rendering mode.

3. Visual Variants

Must support

normal
primary
icon
inline-icon
flashbar-icon
breadcrumb-group
menu-trigger
modal-dismiss
inline-icon-pointer-target

Each variant controls styling and behavior.

4. Icon Support

Must support

Left aligned icon

Right aligned icon

SVG icon

URL icon

Named icon

Icon size

Icon CSS class

Badge on icon

Icon alternative text

5. Text Content

Support

children

Behavior

Display text

or

Icon-only button

depending on variant.

6. Loading State

Support

loading

Behavior

Disable interaction

Show loading icon

Announce loading text

Track loading metrics

Prevent click execution

Support

loadingText

for screen readers.

7. Disabled State

Support

disabled

Behavior

Prevent interaction

Prevent navigation

Disable click

Update accessibility

8. Disabled Reason

Support

disabledReason

Behavior

Hover tooltip

Focus tooltip

Mouse enter

Mouse leave

Keyboard focus

Keyboard blur

Tooltip dismissal

9. Focusability

Support

__focusable

Meaning

Disabled button may still receive keyboard focus.

10. Wrapping

Support

wrapText

Behavior

Allow wrapping

Disable wrapping

11. Width

Support

fullWidth

Behavior

Expand button to parent width.

12. Compact Mode

Support

compact

Render reduced spacing.

13. Link Features

Support

href

Support

target

Support

download

Support

rel

Support

external

Automatically

target="_blank"

if external.

Automatically

noopener noreferrer

when needed.

14. URL Validation

Validate URL before rendering.

Reject unsafe URLs.

15. Form Support

Support

submit

Support

button

Behavior

formAction

controls button type.

16. Accessibility

Support

aria-label

Support

aria-describedby

Support

aria-expanded

Support

aria-haspopup

Support

aria-controls

Support

aria-disabled

Support

title
17. Accessibility Behaviors

Screen reader loading announcement.

Hidden description.

Tooltip accessibility.

Disabled accessibility.

Keyboard navigation.

18. Analytics

Support

Action tracking

Label tracking

Metadata tracking

Component tracking

Performance tracking

External link tracking

Funnel tracking

19. Performance

Support

Performance marks.

Collect

loading

disabled

button text
20. Event Callbacks

Support

onClick

Support

onFollow

Behavior

Fire separately.

21. Click Behaviour

When clicked

Check

Loading?

↓

Prevent.

Check

Disabled?

↓

Prevent.

If anchor

Fire

onFollow

Fire

onClick

Notify context.

Fire analytics.

22. Keyboard Support

Tab order

Focus

Blur

Accessible disabled state

23. Mouse Support

Hover

Leave

Click

Tooltip display

24. Ref Support

Support forwarded refs.

Allow parent

focus()

measure()

scrollIntoView()

etc.

25. Native Attribute Passthrough

Allow arbitrary native

Button attributes.

Allow arbitrary native

Anchor attributes.

26. CSS Behaviour

Dynamic CSS classes.

Examples

Disabled

Compact

Full Width

Variant

Anchor

No Text

No Wrap
27. Internal Content

Component builds content consisting of

Left Icon

↓

Label

↓

External Icon

↓

Right Icon

28. External Link Indicator

When

external == true

Automatically render external-link icon.

29. Tooltip System

Display tooltip

Only

when

Disabled

AND

Disabled reason exists.

30. State Management

Internal State

Tooltip Visible

Everything else derived from props.

31. Derived State

Compute

isAnchor

isDisabledWithReason

isNotInteractive

hasAriaDisabled

shouldHaveContent

instead of storing.

32. Ref Usage

Store DOM reference.

Use for

Tooltip

Analytics

Performance

Focus

33. Context Integration

Consume Button Context.

Notify context on click.

34. Internationalization

Support

Localized strings.

Example

External icon label.

35. Unique ID

Generate unique id.

Used for

Accessibility

Analytics

36. Styling API

Support

Inline style object.

Convert to internal CSS variables.

37. Conditional Rendering

Render conditionally

Tooltip

Loading Announcement

External Icon

Label

Left Icon

Right Icon
38. Lifecycle Behaviour

When loading becomes true

Increment loading counter.

When component unmounts

Decrement loading counter.

39. Component Composition

Internally composed from

LeftIcon

RightIcon

Tooltip

Icon

LiveRegion

NativeAttributes Wrapper
40. Defensive Programming

Warn when

Right aligned icon

+

External icon


are combined.

41. Security

Prevent unsafe links.

Safe default

noopener noreferrer
42. Styling Decisions

Dynamic classes generated based on

Variant

Disabled

Loading

Wrap

Compact

Anchor

Width

43. Public API Summary
Props
Category	Features
Content	children
Icons	iconName, iconUrl, iconSvg, iconAlt, iconAlign, iconSize, badge
State	loading, loadingText, disabled, disabledReason
Links	href, external, target, rel, download
Layout	fullWidth, wrapText, compact
Forms	formAction
Accessibility	aria-label, aria-describedby, aria-controls, aria-haspopup, aria-expanded, title
Styling	style, className
Events	onClick, onFollow
Native	nativeButtonAttributes, nativeAnchorAttributes
Advanced	forwarded ref, focusable, analytics injection
Features not present in this source

The following are not supported by this implementation and therefore should not be included if your goal is to reproduce this component faithfully:

Button groups
Split buttons
Dropdown menus
Toggle/pressed (aria-pressed) state
Loading progress percentage
Ripple effects
Long-press handling
Double-click handling
Keyboard shortcuts
Confirmation dialogs
Permission/role-based visibility
Built-in debounce or throttling
Icon animation APIs
Async promise handling (await onClick())

These features may exist elsewhere in the library, but they are not implemented in this specific component.


Stage 1
──────────────
Basic Button
(~40 lines)

↓

Stage 2
──────────────
Variants
(~70 lines)

↓

Stage 3
──────────────
Icons
(~120 lines)

↓

Stage 4
──────────────
Loading
(~160 lines)

↓

Stage 5
──────────────
Anchor Support
(~220 lines)

↓

Stage 6
──────────────
Accessibility
(~280 lines)

↓

Stage 7
──────────────
Tooltip
(~330 lines)

↓

Stage 8
──────────────
Analytics
(~380 lines)