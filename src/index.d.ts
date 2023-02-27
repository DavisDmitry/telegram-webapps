export declare namespace TelegramWebApps {
  /**
   * To connect your Web App to the Telegram client, place the script telegram-web-app.js
   * in the `<head>` tag before any other scripts, using this code:
   * ```
   * <script src="https://telegram.org/js/telegram-web-app.js"></script>
   * ```
   * Once the script is connected, a `window.Telegram.WebApp` object will become available
   * with the following fields
   */
  interface WebApp {
    /**
     * 	A string with raw data transferred to the Web App, convenient for validating data.
     *
     *  **WARNING:** Validate data from this field before using it on the bot's server.
     */
    readonly initData: string
    /**
     * An object with input data transferred to the Web App.
     *
     * **WARNING:** Data from this field should not be trusted. You should only use data
     * from initData on the bot's server and only after it has been validated.
     */
    readonly initDataUnsafe: WebAppInitData
    /**
     * The version of the Bot API available in the user's Telegram app.
     */
    readonly version: string
    /**
     * 	The name of the platform of the user's Telegram app.
     */
    readonly platform: string
    /**
     * The color scheme currently used in the Telegram app.
     *
     * Also available as the CSS variable `var(--tg-color-scheme)`.
     */
    readonly colorScheme: ColorScheme
    /**
     * 	An object containing the current theme settings used in the Telegram app.
     */
    readonly themeParams: ThemeParams
    /**
     * *True*, if the Web App is expanded to the maximum available height. *False*, if the
     * Web App occupies part of the screen and can be expanded to the full height using
     * the **expand()** method.
     */
    readonly isExpanded: string
    /**
     * The current height of the visible area of the Web App. Also available in CSS as
     * the variable `var(--tg-viewport-height)`.
     *
     * The application can display just the top part of the Web App, with its lower part
     * remaining outside the screen area. From this position, the user can “pull” the Web
     * App to its maximum height, while the bot can do the same by calling the
     * **expand()** method. As the position of the Web App changes, the current height
     * value of the visible area will be updated in real time.
     *
     * Please note that the refresh rate of this value is not sufficient to smoothly
     * follow the lower border of the window. It should not be used to pin interface
     * elements to the bottom of the visible area. It's more appropriate to use the value
     * of the `viewportStableHeight` field for this purpose.
     */
    readonly viewportHeight: number
    /**
     * The height of the visible area of the Web App in its last stable state. Also
     * available in CSS as a variable `var(--tg-viewport-stable-height)`.
     *
     * The application can display just the top part of the Web App, with its lower part
     * remaining outside the screen area. From this position, the user can “pull” the Web
     * App to its maximum height, while the bot can do the same by calling the
     * **expand()** method. Unlike the value of `viewportHeight`, the value of
     * `viewportStableHeight` does not change as the position of the Web App changes with
     * user gestures or during animations. The value of `viewportStableHeight` will be
     * updated after all gestures and animations are completed and the Web App reaches its
     * final size.
     *
     * *Note the event `viewportChanged` with the passed parameter `isStateStable=true`,
     * which will allow you to track when the stable state of the height of the visible
     * area changes.*
     */
    readonly viewportStableHeight: number
    /**
     * Current header color in the `#RRGGBB` format.
     */
    readonly headerColor: string
    /**
     * Current background color in the `#RRGGBB` format.
     */
    readonly backgroundColor: string
    /**
     * *True*, if the confirmation dialog is enabled while the user is trying to close the
     * Web App. *False*, if the confirmation dialog is disabled.
     */
    readonly isClosingConfirmationEnabled: boolean
    /**
     * An object for controlling the back button which can be displayed in the header of
     * the Web App in the Telegram interface.
     */
    readonly BackButton: BackButton
    /**
     * An object for controlling the main button, which is displayed at the bottom of the
     * Web App in the Telegram interface.
     */
    readonly MainButton: MainButton
    /**
     * An object for controlling haptic feedback.
     */
    readonly HapticFeedback: HapticFeedback
    /**
     * Returns true if the user's app supports a version of the Bot API that is equal to
     * or higher than the version passed as the parameter.
     */
    isVersionAtLeast(version: string): boolean
    /**
     * `Bot API 6.1+` A method that sets the app header color. You can only pass
     * *Telegram.WebApp.themeParams.bg_color* or
     * *Telegram.WebApp.themeParams.secondary_bg_color* as a color or you can use keywords
     * *bg_color*, *secondary_bg_color* instead.
     */
    setHeaderColor(color: string): void
    /**
     * `Bot API 6.1+` A method that sets the app background color in the `#RRGGBB` format
     * or you can use keywords *bg_color*, *secondary_bg_color* instead.
     */
    setBackgroundColor(color: string): void
    /**
     * `Bot API 6.2+` A method that enables a confirmation dialog while the user is trying
     * to close the Web App.
     */
    enableClosingConfirmation(): void
    /**
     * `Bot API 6.2+` A method that disables the confirmation dialog while the user is
     * trying to close the Web App.
     */
    disableClosingConfirmation(): void
    /**
     * A method that sets the app event handler.
     *
     * Event occurs whenever theme settings are changed in the user's Telegram app (including
     * switching to night mode).
     *
     * *eventHandler* receives no parameters, new theme settings and color scheme can be
     * received via *this.themeParams* and *this.colorScheme* respectively.
     */
    onEvent(
      eventType: 'themeChanged',
      eventHandler: (this: { themeParams: ThemeParams; colorScheme: ColorScheme }) => void
    ): void
    /**
     * A method that sets the app event handler.
     *
     * Event occurs when the visible section of the Web App is changed.
     *
     * *eventHandler* receives an object with the single field *isStateStable*. If
     * *isStateStable* is true, the resizing of the Web App is finished. If it is false,
     * the resizing is ongoing (the user is expanding or collapsing the Web App or an
     * animated object is playing). The current value of the visible section’s height is
     * available in *this.viewportHeight*.
     */
    onEvent(eventType: 'viewportChanged', eventHandler: ViewportChangedEventHandler): void
    /**
     * A method that sets the app event handler.
     *
     * Event occurs when the main button is pressed.
     */
    onEvent(eventType: 'mainButtonClicked', eventHandler: () => void): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.1+` Event occurrs when the back button is pressed.
     */
    onEvent(eventType: 'backButtonClicked', eventHandler: () => void): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.1+` Event occurrs when the Settings item in context menu is pressed.
     */
    onEvent(eventType: 'settingsButtonClicked', eventHandler: () => void): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.1+` Event occurrs when the opened invoice is closed.
     *
     * *eventHandler* receives an object with the two fields: *url* – invoice link
     * provided and *status* – one of the invoice statuses:
     * - **paid** – invoice was paid successfully,
     * - **cancelled** – user closed this invoice without paying,
     * - **failed** – user tried to pay, but the payment was failed,
     * - **pending** – the payment is still processing. The bot will receive a service
     * message about a successful payment when the payment is successfully paid.
     */
    onEvent(eventType: 'invoiceClosed', eventHandler: InvoiceClosedEventHandler): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.2+` Event occurrs when the opened popup is closed.
     *
     * *eventHandler* receives an object with the single field *button_id* – the value of
     * the field *id* of the pressed button. If no buttons were pressed, the field
     * *button_id* will be *null*.
     */
    onEvent(eventType: 'popupClosed', eventHandler: PopupClosedEventHandler): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.4+` Event occurs when the QR code scanner catches a code with text data.
     *
     * *eventHandler* receives an object with the single field *data* containing text data
     * from the QR code.
     */
    onEvent(eventType: 'qrTextReceived', eventHandler: QrTextReceivedEventHandler): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.4+` Event occurrs when the `readTextFromClipboard` method is called.
     *
     * *eventHandler* receives an object with the single field *data* containing text data
     * from the clipboard. If the clipboard contains non-text data, the field *data* will
     * be an empty string. If the Web App has no access to the clipboard, the field *data*
     * will be *null*.
     */
    onEvent(
      eventType: 'clipboardTextReceived',
      eventHandler: ClipboardTextReceivedEventHandler
    ): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(
      eventType:
        | 'themeChanged'
        | 'mainButtonClicked'
        | 'backButtonClicked'
        | 'settingsButtonClicked',
      eventHandler: () => void
    ): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(
      eventType: 'viewportChanged',
      eventHandler: ViewportChangedEventHandler
    ): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(eventType: 'invoiceClosed', eventHandler: InvoiceClosedEventHandler): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(eventType: 'popupClosed', eventHandler: PopupClosedEventHandler): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(eventType: 'qrTextReceived', eventHandler: QrTextReceivedEventHandler): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(
      eventType: 'clipboardTextReceived',
      eventHandler: ClipboardTextReceivedEventHandler
    ): void
    /**
     * A method used to send data to the bot. When this method is called, a service
     * message is sent to the bot containing the data *data* of the length up to 4096
     * bytes, and the Web App is closed. See the field *web_app_data* in the class
     * Message.
     *
     * *This method is only available for Web Apps launched via a Keyboard button.*
     */
    sendData(data: string): void
    /**
     * A method that opens a link in an external browser. The Web App will *not* be
     * closed.
     *
     * `Bot API 6.4+` If the optional *options* parameter is passed with the field
     * *try_instant_view=true*, the link will be opened in Instant View mode if possible.
     *
     * *Note that this method can be called only in response to user interaction with the
     * Web App interface (e.g. a click inside the Web App or on the main button)*
     */
    openLink(url: string, options?: { try_instant_view: boolean }): void
    /**
     * A method that opens a telegram link inside Telegram app. The Web App *will* be
     * closed.
     */
    openTelegramLink(url: string): void
    /**
     * `Bot API 6.1+` A method that opens an invoice using the link *url*. The Web App
     * will receive the event *invoiceClosed* when the invoice is closed. If an optional
     * *callback* parameter was passed, the *callback* function will be called and the
     * invoice status will be passed as the first argument.
     */
    openInvoice(url: string, callback?: InvoiceClosedEventHandler): void
    /**
     * `Bot API 6.2+` A method that shows a native popup described by the *params*
     * argument of the type PopupParams. The Web App will receive the event *popupClosed*
     * when the popup is closed. If an optional *callback* parameter was passed, the
     * *callback* function will be called and the field *id* of the pressed button will be
     * passed as the first argument.
     */
    showPopup(params: PopupParams, callback?: PopupClosedEventHandler): void
    /**
     * `Bot API 6.2+` A method that shows *message* in a simple alert with a 'Close'
     * button. If an optional *callback* parameter was passed, the *callback* function
     * will be called when the popup is closed.
     */
    showAlert(message: string, callback?: () => void): void
    /**
     * `Bot API 6.2+` A method that shows *message* in a simple confirmation window with
     * 'OK' and 'Cancel' buttons. If an optional *callback* parameter was passed, the
     * *callback* function will be called when the popup is closed and the first argument
     * will be a boolean indicating whether the user pressed the 'OK' button.
     */
    showConfirm(message: string, callback?: (okPressed: boolean) => void): void
    /**
     * `Bot API 6.4+` A method that shows a native popup for scanning a QR code described
     * by the *params* argument of the type ScanQrPopupParams. The Web App will receive
     * the event *qrTextReceived* every time the scanner catches a code with text data. If
     * an optional *callback* parameter was passed, the *callback* function will be called
     * and the text from the QR code will be passed as the first argument. Returning
     * *true* inside this callback function causes the popup to be closed.
     */
    showScanQrPopup(params: ScanQrPopupParams, callback?: (data: string) => boolean): void
    /**
     * `Bot API 6.4+` A method that closes the native popup for scanning a QR code opened
     * with the *showScanQrPopup* method. Run it if you received valid data in the event
     * *qrTextReceived*.
     */
    closeScanQrPopup(): void
    /**
     * `Bot API 6.4+` A method that requests text from the clipboard. The Web App will
     * receive the event *clipboardTextReceived*. If an optional *callback* parameter was
     * passed, the *callback* function will be called and the text from the clipboard will
     * be passed as the first argument.
     *
     * *Note: this method can be called only for Web Apps launched from the attachment
     * menu and only in response to a user interaction with the Web App interface (e.g. a
     * click inside the Web App or on the main button).*
     */
    readTextFromClipboard(callback?: (text: string) => void): void
    /**
     * A method that informs the Telegram app that the Web App is ready to be displayed.
     *
     * It is recommended to call this method as early as possible, as soon as all
     * essential interface elements are loaded. Once this method is called, the loading
     * placeholder is hidden and the Web App is shown.
     *
     * If the method is not called, the placeholder will be hidden only when the page is
     * fully loaded.
     */
    ready(): boolean
    /**
     * A method that expands the Web App to the maximum available height. To find out if
     * the Web App is expanded to the maximum height, refer to the value of the
     * *Telegram.WebApp.isExpanded* parameter
     */
    expand(): void
    /**
     * A method that closes the Web App.
     */
    close(): void
  }

  /**
   * Web Apps can adjust the appearance of the interface to match the Telegram user's app
   * in real time. This object contains the user's current theme settings
   */
  interface ThemeParams {
    /**
     * Background color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-bg-color)`.
     */
    bg_color?: string
    /**
     * Main text color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-text-color)`.
     */
    text_color: string
    /**
     * Hint text color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-hint-color)`.
     */
    hint_color?: string
    /**
     * Link color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-link-color)`.
     */
    link_color?: string
    /**
     * Button color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-button-color)`.
     */
    button_color?: string
    /**
     * Button text color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-button-text-color)`.
     */
    button_text_color?: string
    /**
     * `Bot API 6.1+` Secondary background color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-secondary-bg-color)`.
     */
    secondary_bg_color?: string
  }

  /**
   * This object describes the native popup.
   */
  interface PopupParams {
    /**
     * The text to be displayed in the popup title, 0-64 characters.
     */
    title?: string
    /**
     * The message to be displayed in the body of the popup, 1-256 characters.
     */
    message: string
    /**
     * List of buttons to be displayed in the popup, 1-3 buttons. Set to
     * *[{“type”:“close”}]* by default.
     */
    buttons: PopupButton[]
  }

  /**
   * This object describes the native popup for scanning QR codes.
   */
  interface ScanQrPopupParams {
    /**
     * The text to be displayed under the 'Scan QR' heading, 0-64 characters.
     */
    text?: string
  }

  /**
   * This object describes the native popup button.
   */
  interface PopupButton {
    /**
     * Identifier of the button, 0-64 characters. Set to empty string by
     * default.
     *
     * If the button is pressed, its *id* is returned in the callback and the
     * *popupClosed* event.
     */
    id?: string
    /**
     * Type of the button. Set to *default* by default.
     *
     * Can be one of these values:
     * - *default*, a button with the default style,
     * - *ok*, a button with the localized text “OK”,
     * - *close*, a button with the localized text “Close”,
     * - *cancel*, a button with the localized text “Cancel”,
     * - *destructive*, a button with a style that indicates a destructive action (e.g.
     * “Remove”, “Delete”, etc.).
     */
    type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive'
    /**
     * The text to be displayed on the button, 0-64 characters. Required if
     * *type* is *default* or *destructive*. Irrelevant for other types.
     */
    text?: string
  }

  /**
   * This object controls the back button, which can be displayed in the header of the Web
   * App in the Telegram interface.
   */
  interface BackButton {
    /**
     * Shows whether the button is visible. Set to *false* by default.
     */
    isVisibile: boolean
    /**
     * `Bot API 6.1+` A method that sets the button press event handler. An alias for
     * `Telegram.WebApp.onEvent('backButtonClicked', callback)`
     */
    onClick(callback: () => void): BackButton
    /**
     * `Bot API 6.1+` A method that removes the button press event handler. An alias for
     * `Telegram.WebApp.offEvent('backButtonClicked', callback)`
     */
    offClick(callback: () => void): BackButton
    /**
     * `Bot API 6.1+` A method to make the button active and visible.
     */
    show(): BackButton
    /**
     * `Bot API 6.1+` A method to hide the button.
     */
    hide(): BackButton
  }

  /**
   * This object controls the main button, which is displayed at the bottom of the Web App
   * in the Telegram interface.
   */
  interface MainButton {
    /**
     * Current button text. Set to *CONTINUE* by default.
     */
    text: string
    /**
     * Current button color. Set to *themeParams.button_color* by default.
     */
    color: string
    /**
     * Current button text color. Set to *themeParams.button_text_color* by default.
     */
    textColor: string
    /**
     * Shows whether the button is visible. Set to *false* by default.
     */
    isVisible: boolean
    /**
     * 	Shows whether the button is active. Set to *true* by default.
     */
    isActive: boolean
    /**
     * Shows whether the button is displaying a loading indicator.
     */
    readonly isProgressVisible: boolean
    /**
     * A method to set the button text.
     */
    setText(text: string): MainButton
    /**
     * A method that sets the button press event handler. An alias for
     * `Telegram.WebApp.onEvent('mainButtonClicked', callback)`
     */
    onClick(callback: () => void): MainButton
    /**
     * A method that removes the button press event handler. An alias for
     * `Telegram.WebApp.offEvent('mainButtonClicked', callback)`
     */
    offClick(callback: () => void): MainButton
    /**
     * A method to make the button visible.
     *
     * *Note that opening the Web App from the attachment menu hides the main button until
     * the user interacts with the Web App interface.*
     */
    show(): MainButton
    /**
     * A method to hide the button.
     */
    hide(): MainButton
    /**
     * A method to enable the button.
     */
    enable(): MainButton
    /**
     * A method to disable the button.
     */
    disable(): MainButton
    /**
     * A method to show a loading indicator on the button.
     *
     * It is recommended to display loading progress if the action tied to the button may
     * take a long time. By default, the button is disabled while the action is in
     * progress. If the parameter `leaveActive=true` is passed, the button remains
     * enabled.
     */
    showProgress(leaveActive?: boolean): MainButton
    /**
     * A method to hide the loading indicator.
     */
    hideProgress(): MainButton
    /**
     * A method to set the button parameters. The params parameter is an object containing
     * one or several fields that need to be changed:
     *
     * **text** - button text;
     *
     * **color** - button color;
     *
     * **text_color** - button text color;
     *
     * **is_active** - enable the button;
     *
     * **is_visible** - show the button.
     */
    setParams(params: {
      text?: string
      color?: string
      text_color?: string
      is_active?: boolean
      is_visible?: boolean
    }): MainButton
  }

  /**
   * This object controls haptic feedback.
   */
  interface HapticFeedback {
    /**
     * `Bot API 6.1+` A method tells that an impact occurred. The Telegram app may play
     * the appropriate haptics based on style value passed. Style can be one of these
     * values:
     * - *light*, indicates a collision between small or lightweight UI objects,
     * - *medium*, indicates a collision between medium-sized or medium-weight UI objects,
     * - *heavy*, indicates a collision between large or heavyweight UI objects,
     * - *rigid*, indicates a collision between hard or inflexible UI objects,
     * - *soft*, indicates a collision between soft or flexible UI objects.
     */
    impactOccured(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'): HapticFeedback
    /**
     * `Bot API 6.1+` A method tells that a task or action has succeeded, failed, or
     * produced a warning. The Telegram app may play the appropriate haptics based on type
     * value passed. Type can be one of these values:
     * - *error*, indicates that a task or action has failed,
     * - *success*, indicates that a task or action has completed successfully,
     * - *warning*, indicates that a task or action produced a warning.
     */
    notificationOccured(type: 'error' | 'success' | 'warning'): HapticFeedback
    /**
     * `Bot API 6.1+` A method tells that the user has changed a selection. The Telegram
     * app may play the appropriate haptics.
     *
     * *Do not use this feedback when the user makes or confirms a selection; use it only
     * when the selection changes.*
     */
    selectionChanged(): HapticFeedback
  }

  /**
   * This object contains data that is transferred to the Web App when it is opened. It is
   * empty if the Web App was launched from a keyboard button.
   */
  interface WebAppInitData {
    /**
     * A unique identifier for the Web App session, required for sending messages via the
     * answerWebAppQuery method.
     */
    readonly query_id?: string
    /**
     * An object containing data about the current user.
     */
    readonly user?: WebAppUser
    /**
     * An object containing data about the chat partner of the current user in the chat
     * where the bot was launched via the attachment menu. Returned only for private chats
     * and only for Web Apps launched via the attachment menu.
     */
    readonly receiver?: WebAppUser
    /**
     * An object containing data about the chat where the bot was launched via the
     * attachment menu. Returned for supergroups, channels and group chats – only for Web
     * Apps launched via the attachment menu.
     */
    readonly chat?: WebAppChat
    /**
     * The value of the *startattach* parameter, passed via link. Only returned for Web
     * Apps when launched from the attachment menu via link.
     *
     * The value of the `start_param` parameter will also be passed in the GET-parameter
     * `tgWebAppStartParam`, so the Web App can load the correct interface right away.
     */
    readonly start_param?: string
    /**
     * Time in seconds, after which a message can be sent via the answerWebAppQuery
     * method.
     */
    readonly can_send_after?: number
    /**
     * Unix time when the form was opened.
     */
    readonly auth_date: number
    /**
     * A hash of all passed parameters, which the bot server can use to check their
     * validity.
     */
    readonly hash: string
  }

  /**
   * This object contains the data of the Web App user.
   */
  interface WebAppUser {
    /**
     * A unique identifier for the user or bot. This number may have more than 32
     * significant bits and some programming languages may have difficulty/silent defects
     * in interpreting it. It has at most 52 significant bits, so a 64-bit integer or a
     * double-precision float type is safe for storing this identifier.
     */
    readonly id: number
    /**
     * *True*, if this user is a bot. Returns in the receiver field only.
     */
    readonly is_bot?: boolean
    /**
     * First name of the user or bot.
     */
    readonly first_name: string
    /**
     * Last name of the user or bot.
     */
    readonly last_name?: string
    /**
     * Username of the user or bot.
     */
    readonly username?: string
    /**
     * IETF language tag of the user's language. Returns in user field only.
     */
    readonly language_code?: string
    /**
     * *True*, if this user is a Telegram Premium user
     */
    readonly is_premium?: boolean
    /**
     * URL of the user’s profile photo. The photo can be in .jpeg or .svg formats. Only
     * returned for Web Apps launched from the attachment menu.
     */
    readonly photo_url?: string
  }

  /**
   * This object represents a chat.
   */
  interface WebAppChat {
    /**
     * Unique identifier for this chat. This number may have more than 32 significant bits
     * and some programming languages may have difficulty/silent defects in interpreting
     * it. But it has at most 52 significant bits, so a signed 64-bit integer or
     * double-precision float type are safe for storing this identifier.
     */
    readonly id: number
    /**
     * Type of chat
     */
    readonly type: 'group' | 'supergroup' | 'channel'
    /**
     * Title of the chat
     */
    readonly title: string
    /**
     * Username of the chat
     */
    readonly username?: string
    /**
     * URL of the chat’s photo. The photo can be in .jpeg or .svg formats. Only returned
     * for Web Apps launched from the attachment menu.
     */
    readonly photo_url?: string
  }

  type ColorScheme = 'light' | 'dark'
  type ViewportChangedEventHandler = (
    this: { viewportHeight: number },
    params: { isStateStable: boolean }
  ) => void
  type InvoiceClosedEventHandler = (params: {
    url: string
    status: 'paid' | 'cancelled' | 'failed' | 'pending'
  }) => void
  type PopupClosedEventHandler = (params: { button_id: string | null }) => void
  type QrTextReceivedEventHandler = (params: { data: string }) => void
  type ClipboardTextReceivedEventHandler = (params: { data: string | null }) => void
}

declare global {
  const Telegram: { WebApp: TelegramWebApps.WebApp }
}
