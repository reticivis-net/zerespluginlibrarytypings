/// <reference types="jquery"/>
/// <reference types="react"/>
/// <reference types="node"/>


import {Component, ReactElement} from "react";


/**
 * <p>Helpful utilities for dealing with colors.</p>
 */
declare namespace ColorConverterModule {
    /**
     * <p>Will get the red green and blue values of any color string.</p>
     * @param color - <p>the color to obtain the red, green and blue values of. Can be in any of these formats: #fff, #ffffff, rgb, rgba</p>
     * @returns <ul>
     * <li>array containing the red, green, and blue values</li>
     * </ul>
     */
    function getRGB(color: string): any[];

    /**
     * <p>Will get the darken the color by a certain percent</p>
     * @param color - <p>Can be in any of these formats: #fff, #ffffff, rgb, rgba</p>
     * @param percent - <p>percent to darken the color by (0-100)</p>
     * @returns <ul>
     * <li>new color in rgb format</li>
     * </ul>
     */
    function darkenColor(color: string, percent: number): string;

    /**
     * <p>Will get the lighten the color by a certain percent</p>
     * @param color - <p>Can be in any of these formats: #fff, #ffffff, rgb, rgba</p>
     * @param percent - <p>percent to lighten the color by (0-100)</p>
     * @returns <ul>
     * <li>new color in rgb format</li>
     * </ul>
     */
    function lightenColor(color: string, percent: number): string;

    /**
     * <p>Converts a color to rgba format string</p>
     * @param color - <p>Can be in any of these formats: #fff, #ffffff, rgb, rgba</p>
     * @param alpha - <p>alpha level for the new color</p>
     * @returns <ul>
     * <li>new color in rgb format</li>
     * </ul>
     */
    function rgbToAlpha(color: string, alpha: number): string;
}

/**
 * <p>Proxy for all the class packages, allows us to safely attempt
 * to retrieve nested things without error. Also wraps the class in
 * {@link DOMToolsModule.ClassName} which adds features but can still
 * be used in native function.</p>
 * <p>For a list of all available class namespaces check out {@link DiscordClassModulesModule}.</p>
 */
declare namespace DiscordClassesModule {
    const Scrollers
    const AccountDetails
    const Typing
    const UserPopout
    const PopoutRoles
    const UserModal
    const Textarea
    const Popouts
    const App
    const Titles
    const Notices
    const Backdrop
    const Modals
    const AuditLog
    const ChannelList
    const TitleWrap
    const Titlebar
    const Embeds
    const Layers
    const TooltipLayers
    const Margins
    const Dividers
    const Changelog
    const BasicInputs
    const Messages
    const Guilds
    const EmojiPicker
    const Checkbox
    const Tooltips
    const MemberList
    const ContextMenu
    const Reactions
}

/**
 * <p>A large list of known and labelled classes in discord.
 * Click the source link down below to view more info. Otherwise, if you
 * have the library installed or have a plugin using this library,
 * do <code>Object.keys(ZLibrary.DiscordClassModulesModule)</code> in console for a list of modules.</p>
 * <p>You can use this directly, however the preferred way of doing this is to use {@link DiscordClassesModule} or {@link DiscordSelectorsModule}</p>
 */
declare namespace DiscordClassModulesModule {
    const Scrollers: object
    const AccountDetails: object
    const Typing: object
    const UserPopout: object
    const PopoutRoles: object
    const UserModal: object
    const Textarea: object
    const PopoutsModule: object
    const App: object
    const Titles: object
    const Notices: object
    const Backdrop: object
    const ModalsModule: object
    const AuditLog: object
    const ChannelList: object
    const TitleWrap: object
    const Titlebar: object
    const Embeds: object
    const Layers: object
    const TooltipModuleLayers: object
    const Margins: object
    const Dividers: object
    const Changelog: object
    const BasicInputs: object
    const Messages: object
    const Guilds: object
    const EmojiPicker: object
    const Checkbox: object
    const TooltipModules: object
    const MemberList: object
    const ContextMenu: object
    const Reactions: object
}

/**
 * <p>A large list of known and useful webpack modules internal to Discord.
 * Click the source link down below to view more info. Otherwise, if you
 * have the library installed or have a plugin using this library,
 * do <code>Object.keys(ZLibrary.DiscordModulesModule)</code> in console for a list of modules.</p>
 */
declare namespace DiscordModulesModule {
    const Events
    const SortedGuildStore
    const GuildSync
    const GuildInfo
    const GuildChannelsStore
    const GuildEmojiStore
    const GuildActions
    const GuildPermissions
    const ChannelActions
    const PrivateChannelActions
    const UserInfoStore
    const UserSettingsStore
    const StreamerModeStore
    const UserSettingsUpdater
    const OnlineWatcher
    const CurrentUserIdle
    const RelationshipManager
    const MentionStore
    const UserActivityStore
    const UserNameResolver
    const UserNoteStore
    const UserNoteActions
    const EmojiInfo
    const EmojiUtils
    const EmojiStore
    const InviteStore
    const InviteResolver
    const DiscordPermissions
    const Permissions
    const ColorConverter
    const ColorShader
    const TinyColor
    const ClassResolver
    const ButtonData
    const ReactionsStore
    const MessageActions
    const MessageQueue
    const MessageParser
    const ExperimentStore
    const ExperimentsManager
    const CurrentExperiment
    const StreamStore
    const StreamPreviewStore
    const ImageResolver
    const ImageUtils
    const DNDSources
    const DNDObjects
    const ElectronModule
    const Flux
    const PathUtils
    const NotificationModule
    const RouterModule
    const AnalyticEvents
    const KeyGenerator
    const Buffers
    const DeviceStore
    const SoftwareInfo
    const i18n
    const MediaDeviceInfo
    const MediaInfo
    const MediaEngineInfo
    const VoiceInfo
    const SoundModule
    const DOMInfo
    const Moment
    const LocationManager
    const Timestamps
    const Strings
    const StringFormats
    const StringUtils
    const URLParser
    const ExtraURLs
    const SimpleMarkdown
    const LayerManager
    const UserSettingsWindow
    const ChannelSettingsWindow
    const GuildSettingsWindow
    const ModalActions
    const ModalStack
    const UserProfileModals
    const AlertModal
    const ConfirmationModal
    const ChangeNicknameModal
    const CreateChannelModal
    const PruneMembersModal
    const NotificationSettingsModal
    const PrivacySettingsModal
    const Changelog
    const PopoutStack
    const PopoutOpener
    const UserPopout
    const ContextMenuItemsGroup
    const ContextMenuItem
    const ExternalLink
    const TextElement
    const Anchor
    const Flex
    const FlexChild
    const Clickable
    const Titles
    const HeaderBar
    const TabBar
    const Tooltip
    const FormTitle
    const FormSection
    const FormNotice
    const ScrollerThin
    const ScrollerAuto
    const AdvancedScrollerThin
    const AdvancedScrollerAuto
    const AdvancedScrollerNone
    const SettingsWrapper
    const SettingsNote
    const SettingsDivider
    const ColorPicker
    const Dropdown
    const Keybind
    const RadioGroup
    const Slider
    const SwitchRow
    const Textbox
    const React
    const LocaleManager
    const ReactDOM
    const ContextMenuActions
    const SelectedChannelStore
    const AvatarDefaults
    const RelationshipStore
    const GuildStore
    const ChannelStore
    const Spinner
    const Dispatcher
    const DiscordConstants
    const MessageStore
    const UserStore
    const NavigationUtils
    const UserStatusStore
    const GuildMemberStore
    const InviteActions
    const MemberCountStore
    const SelectedGuildStore
    const UserTypingStore
    const WindowInfo
    const APIModule
    const hljs
}

/**
 * <p>Gives us a way to retrieve the internal classes as selectors without
 * needing to concatenate strings or use string templates. Wraps the
 * selector in {@link DOMToolsModule.Selector} which adds features but can
 * still be used in native function.</p>
 * <p>For a list of all available class namespaces check out {@link DiscordClassModulesModule}.</p>
 */
declare namespace DiscordSelectorsModule {
    const Scrollers
    const AccountDetails
    const Typing
    const UserPopout
    const PopoutRoles
    const UserModal
    const Textarea
    const Popouts
    const App
    const Titles
    const Notices
    const Backdrop
    const Modals
    const AuditLog
    const ChannelList
    const TitleWrap
    const Titlebar
    const Embeds
    const Layers
    const TooltipLayers
    const Margins
    const Dividers
    const Changelog
    const BasicInputs
    const Messages
    const Guilds
    const EmojiPicker
    const Checkbox
    const Tooltips
    const MemberList
    const ContextMenu
    const Reactions
}

/**
 * <p>Helpful utilities for dealing with DOM operations.</p>
 * <p>This module also extends <code>HTMLElement</code> to add a set of utility functions,
 * the same as the ones available in the module itself, but with the <code>element</code>
 * parameter bound to <code>this</code>.</p>
 */
declare namespace DOMToolsModule {

    /**
     * @property top - <p>Top offset of the target element.</p>
     * @property right - <p>Right offset of the target element.</p>
     * @property bottom - <p>Bottom offset of the target element.</p>
     * @property left - <p>Left offset of the target element.</p>
     * @property height - <p>Outer height of the target element.</p>
     * @property width - <p>Outer width of the target element.</p>
     */
    interface Offset {
    }

    /**
     * <p>Function that automatically removes added listener.</p>
     */
    type CancelListener = () => void;
    /**
     * <p>Default DOMObserver for global usage.</p>
     */
    var observer: any;
    /**
     * <p>Document/window width</p>
     */
    var screenWidth: any;
    /**
     * <p>Document/window height</p>
     */
    var screenHeight: any;

    /**
     * <p>Adds a style to the document.</p>
     * @param id - <p>identifier to use as the element id</p>
     * @param css - <p>css to add to the document</p>
     */
    function addStyle(id: string, css: string): void;

    /**
     * <p>Removes a style from the document.</p>
     * @param id - <p>original identifier used</p>
     */
    function removeStyle(id: string): void;

    /**
     * <p>Adds/requires a remote script to be loaded</p>
     * @param id - <p>identifier to use for this script</p>
     * @param url - <p>url from which to load the script</p>
     * @returns <p>promise that resolves when the script is loaded</p>
     */
    function addScript(id: string, url: string): Promise<void>;

    /**
     * <p>Removes a remote script from the document.</p>
     * @param id - <p>original identifier used</p>
     */
    function removeScript(id: string): void;

    /**
     * <p>This is my shit version of not having to use <code>$</code> from jQuery. Meaning
     * that you can pass a selector and it will automatically run {@link DOMToolsModule.query}.
     * It also means that you can pass a string of html and it will perform and return <code>parseHTML</code>.</p>
     * @param selector - <p>Selector to query or HTML to parse</p>
     * @returns <ul>
     * <li>Either the result of <code>parseHTML</code> or <code>query</code></li>
     * </ul>
     */
    function Q(selector: string): DocumentFragment | NodeList | HTMLElement;

    /**
     * <p>Essentially a shorthand for <code>document.querySelector</code>. If the <code>baseElement</code> is not provided
     * <code>document</code> is used by default.</p>
     * @param selector - <p>Selector to query</p>
     * @param [baseElement] - <p>Element to base the query from</p>
     * @returns <ul>
     * <li>The found element or null if not found</li>
     * </ul>
     */
    function query(selector: string, baseElement?: Element): Element | null;

    /**
     * <p>Essentially a shorthand for <code>document.querySelectorAll</code>. If the <code>baseElement</code> is not provided
     * <code>document</code> is used by default.</p>
     * @param selector - <p>Selector to query</p>
     * @param [baseElement] - <p>Element to base the query from</p>
     * @returns <ul>
     * <li>Array of all found elements</li>
     * </ul>
     */
    function queryAll(selector: string, baseElement?: Element): Element[];

    /**
     * <p>Parses a string of HTML and returns the results. If the second parameter is true,
     * the parsed HTML will be returned as a document fragment {@see https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment}.
     * This is extremely useful if you have a list of elements at the top level, they can then be appended all at once to another node.</p>
     * <p>If the second parameter is false, then the return value will be the list of parsed
     * nodes and there were multiple top level nodes, otherwise the single node is returned.</p>
     * @param html - <p>HTML to be parsed</p>
     * @param [fragment = false] - <p>Whether or not the return should be the raw <code>DocumentFragment</code></p>
     * @returns <ul>
     * <li>The result of HTML parsing</li>
     * </ul>
     */
    function parseHTML(html: string, fragment?: boolean): DocumentFragment | Node | HTMLElement;

    /**
     * <p>Alternate name for {@link DOMToolsModule.parseHTML}</p>
     */
    function createElement(): void;

    /**
     * <p>Takes a string of html and escapes it using the brower's own escaping mechanism.</p>
     * @param html - <p>html to be escaped</p>
     */
    function escapeHTML(html: string): void;

    /**
     * <p>Takes a string and escapes it for use as a DOM id.</p>
     * @param id - <p>string to be escaped</p>
     */
    function escapeID(id: string): void;

    /**
     * <p>Adds a list of classes from the target element.</p>
     * @param element - <p>Element to edit classes of</p>
     * @param classes - <p>Names of classes to add</p>
     * @returns <ul>
     * <li><code>element</code> to allow for chaining</li>
     * </ul>
     */
    function addClass(element: Element, ...classes: string[]): Element;

    /**
     * <p>Removes a list of classes from the target element.</p>
     * @param element - <p>Element to edit classes of</p>
     * @param classes - <p>Names of classes to remove</p>
     * @returns <ul>
     * <li><code>element</code> to allow for chaining</li>
     * </ul>
     */
    function removeClass(element: Element, ...classes: string[]): Element;

    /**
     * <p>When only one argument is present: Toggle class value;
     * i.e., if class exists then remove it and return false, if not, then add it and return true.
     * When a second argument is present:
     * If the second argument evaluates to true, add specified class value, and if it evaluates to false, remove it.</p>
     * @param element - <p>Element to edit classes of</p>
     * @param classname - <p>Name of class to toggle</p>
     * @param [indicator] - <p>Optional indicator for if the class should be toggled</p>
     * @returns <ul>
     * <li><code>element</code> to allow for chaining</li>
     * </ul>
     */
    function toggleClass(element: Element, classname: string, indicator?: boolean): Element;

    /**
     * <p>Checks if an element has a specific class</p>
     * @param element - <p>Element to edit classes of</p>
     * @param classname - <p>Name of class to check</p>
     * @returns <ul>
     * <li><code>true</code> if the element has the class, <code>false</code> otherwise.</li>
     * </ul>
     */
    function hasClass(element: Element, classname: string): boolean;

    /**
     * <p>Replaces one class with another</p>
     * @param element - <p>Element to edit classes of</p>
     * @param oldName - <p>Name of class to replace</p>
     * @param newName - <p>New name for the class</p>
     * @returns <ul>
     * <li><code>element</code> to allow for chaining</li>
     * </ul>
     */
    function replaceClass(element: Element, oldName: string, newName: string): Element;

    /**
     * <p>Appends <code>thisNode</code> to <code>thatNode</code></p>
     * @param thisNode - <p>Node to be appended to another node</p>
     * @param thatNode - <p>Node for <code>thisNode</code> to be appended to</p>
     * @returns <ul>
     * <li><code>thisNode</code> to allow for chaining</li>
     * </ul>
     */
    function appendTo(thisNode: Node, thatNode: Node): Node;

    /**
     * <p>Prepends <code>thisNode</code> to <code>thatNode</code></p>
     * @param thisNode - <p>Node to be prepended to another node</p>
     * @param thatNode - <p>Node for <code>thisNode</code> to be prepended to</p>
     * @returns <ul>
     * <li><code>thisNode</code> to allow for chaining</li>
     * </ul>
     */
    function prependTo(thisNode: Node, thatNode: Node): Node;

    /**
     * <p>Insert after a specific element, similar to jQuery's <code>thisElement.insertAfter(otherElement)</code>.</p>
     * @param thisNode - <p>The node to insert</p>
     * @param targetNode - <p>Node to insert after in the tree</p>
     * @returns <ul>
     * <li><code>thisNode</code> to allow for chaining</li>
     * </ul>
     */
    function insertAfter(thisNode: Node, targetNode: Node): Node;

    /**
     * <p>Insert after a specific element, similar to jQuery's <code>thisElement.after(newElement)</code>.</p>
     * @param thisNode - <p>The node to insert</p>
     * @param newNode - <p>Node to insert after in the tree</p>
     * @returns <ul>
     * <li><code>thisNode</code> to allow for chaining</li>
     * </ul>
     */
    function after(thisNode: Node, newNode: Node): Node;

    /**
     * <p>Gets the next sibling element that matches the selector.</p>
     * @param element - <p>Element to get the next sibling of</p>
     * @param [selector = ""] - <p>Optional selector</p>
     * @returns <ul>
     * <li>The sibling element</li>
     * </ul>
     */
    function next(element: Element, selector?: string): Element;

    /**
     * <p>Gets all subsequent siblings.</p>
     * @param element - <p>Element to get next siblings of</p>
     * @returns <ul>
     * <li>The list of siblings</li>
     * </ul>
     */
    function nextAll(element: Element): NodeList;

    /**
     * <p>Gets the subsequent siblings until an element matches the selector.</p>
     * @param element - <p>Element to get the following siblings of</p>
     * @param selector - <p>Selector to stop at</p>
     * @returns <ul>
     * <li>The list of siblings</li>
     * </ul>
     */
    function nextUntil(element: Element, selector: string): Element[];

    /**
     * <p>Gets the previous sibling element that matches the selector.</p>
     * @param element - <p>Element to get the previous sibling of</p>
     * @param [selector = ""] - <p>Optional selector</p>
     * @returns <ul>
     * <li>The sibling element</li>
     * </ul>
     */
    function previous(element: Element, selector?: string): Element;

    /**
     * <p>Gets all preceeding siblings.</p>
     * @param element - <p>Element to get preceeding siblings of</p>
     * @returns <ul>
     * <li>The list of siblings</li>
     * </ul>
     */
    function previousAll(element: Element): NodeList;

    /**
     * <p>Gets the preceeding siblings until an element matches the selector.</p>
     * @param element - <p>Element to get the preceeding siblings of</p>
     * @param selector - <p>Selector to stop at</p>
     * @returns <ul>
     * <li>The list of siblings</li>
     * </ul>
     */
    function previousUntil(element: Element, selector: string): Element[];

    /**
     * <p>Find which index in children a certain node is. Similar to jQuery's <code>$.index()</code></p>
     * @param node - <p>The node to find its index in parent</p>
     * @returns <p>Index of the node</p>
     */
    function indexInParent(node: HTMLElement): number;

    /**
     * <p>Shorthand for {@link DOMToolsModule.indexInParent}</p>
     */
    function index(): void;

    /**
     * <p>Gets the parent of the element if it matches the selector,
     * otherwise returns null.</p>
     * @param element - <p>Element to get parent of</p>
     * @param [selector = ""] - <p>Selector to match parent</p>
     * @returns <ul>
     * <li>The sibling element or null</li>
     * </ul>
     */
    function parent(element: Element, selector?: string): Element | null;

    /**
     * <p>Gets all children of Element that match the selector if provided.</p>
     * @param element - <p>Element to get all children of</p>
     * @param selector - <p>Selector to match the children to</p>
     * @returns <ul>
     * <li>The list of children</li>
     * </ul>
     */
    function findChild(element: Element, selector: string): Element[];

    /**
     * <p>Gets all children of Element that match the selector if provided.</p>
     * @param element - <p>Element to get all children of</p>
     * @param selector - <p>Selector to match the children to</p>
     * @returns <ul>
     * <li>The list of children</li>
     * </ul>
     */
    function findChildren(element: Element, selector: string): Element[];

    /**
     * <p>Gets all ancestors of Element that match the selector if provided.</p>
     * @param element - <p>Element to get all parents of</p>
     * @param [selector = ""] - <p>Selector to match the parents to</p>
     * @returns <ul>
     * <li>The list of parents</li>
     * </ul>
     */
    function parents(element: Element, selector?: string): Element[];

    /**
     * <p>Gets the ancestors until an element matches the selector.</p>
     * @param element - <p>Element to get the ancestors of</p>
     * @param selector - <p>Selector to stop at</p>
     * @returns <ul>
     * <li>The list of parents</li>
     * </ul>
     */
    function parentsUntil(element: Element, selector: string): Element[];

    /**
     * <p>Gets all siblings of the element that match the selector.</p>
     * @param element - <p>Element to get all siblings of</p>
     * @param [selector = "*"] - <p>Selector to match the siblings to</p>
     * @returns <ul>
     * <li>The list of siblings</li>
     * </ul>
     */
    function siblings(element: Element, selector?: string): Element[];

    /**
     * <p>Sets or gets css styles for a specific element. If <code>value</code> is provided
     * then it sets the style and returns the element to allow for chaining,
     * otherwise returns the style.</p>
     * @param element - <p>Element to set the CSS of</p>
     * @param attribute - <p>Attribute to get or set</p>
     * @param [value] - <p>Value to set for attribute</p>
     * @returns <ul>
     * <li>When setting a value, element is returned for chaining, otherwise the value is returned.</li>
     * </ul>
     */
    function css(element: Element, attribute: string, value?: string): Element | string;

    /**
     * <p>Sets or gets the width for a specific element. If <code>value</code> is provided
     * then it sets the width and returns the element to allow for chaining,
     * otherwise returns the width.</p>
     * @param element - <p>Element to set the CSS of</p>
     * @param [value] - <p>Width to set</p>
     * @returns <ul>
     * <li>When setting a value, element is returned for chaining, otherwise the value is returned.</li>
     * </ul>
     */
    function width(element: Element, value?: string): Element | string;

    /**
     * <p>Sets or gets the height for a specific element. If <code>value</code> is provided
     * then it sets the height and returns the element to allow for chaining,
     * otherwise returns the height.</p>
     * @param element - <p>Element to set the CSS of</p>
     * @param [value] - <p>Height to set</p>
     * @returns <ul>
     * <li>When setting a value, element is returned for chaining, otherwise the value is returned.</li>
     * </ul>
     */
    function height(element: Element, value?: string): Element | string;

    /**
     * <p>Sets the inner text of an element if given a value, otherwise returns it.</p>
     * @param element - <p>Element to set the text of</p>
     * @param [text] - <p>Content to set</p>
     * @returns <ul>
     * <li>Either the string set by this call or the current text content of the node.</li>
     * </ul>
     */
    function text(element: Element, text?: string): string;

    /**
     * <p>Returns the innerWidth of the element.</p>
     * @param element - <p>Element to retrieve inner width of</p>
     * @returns <ul>
     * <li>The inner width of the element.</li>
     * </ul>
     */
    function innerWidth(element: Element): number;

    /**
     * <p>Returns the innerHeight of the element.</p>
     * @param element - <p>Element to retrieve inner height of</p>
     * @returns <ul>
     * <li>The inner height of the element.</li>
     * </ul>
     */
    function innerHeight(element: Element): number;

    /**
     * <p>Returns the outerWidth of the element.</p>
     * @param element - <p>Element to retrieve outer width of</p>
     * @returns <ul>
     * <li>The outer width of the element.</li>
     * </ul>
     */
    function outerWidth(element: Element): number;

    /**
     * <p>Returns the outerHeight of the element.</p>
     * @param element - <p>Element to retrieve outer height of</p>
     * @returns <ul>
     * <li>The outer height of the element.</li>
     * </ul>
     */
    function outerHeight(element: Element): number;

    /**
     * <p>Gets the offset of the element in the page.</p>
     * @param element - <p>Element to get offset of</p>
     * @returns <ul>
     * <li>The offset of the element</li>
     * </ul>
     */
    function offset(element: Element): Offset;

    /**
     * <p>This is similar to jQuery's <code>on</code> function and can <em>hopefully</em> be used in the same way.</p>
     * <p>Rather than attempt to explain, I'll show some example usages.</p>
     * <p>The following will add a click listener (in the <code>myPlugin</code> namespace) to <code>element</code>.
     * <code>DOMToolsModule.on(element, &quot;click.myPlugin&quot;, () =&gt; {console.log(&quot;clicked!&quot;);});</code></p>
     * <p>The following will add a click listener (in the <code>myPlugin</code> namespace) to <code>element</code> that only fires when the target is a <code>.block</code> element.
     * <code>DOMToolsModule.on(element, &quot;click.myPlugin&quot;, &quot;.block&quot;, () =&gt; {console.log(&quot;clicked!&quot;);});</code></p>
     * <p>The following will add a click listener (without namespace) to <code>element</code>.
     * <code>DOMToolsModule.on(element, &quot;click&quot;, () =&gt; {console.log(&quot;clicked!&quot;);});</code></p>
     * <p>The following will add a click listener (without namespace) to <code>element</code> that only fires once.
     * <code>const cancel = DOMToolsModule.on(element, &quot;click&quot;, () =&gt; {console.log(&quot;fired!&quot;); cancel();});</code></p>
     * @param element - <p>Element to add listener to</p>
     * @param event - <p>Event to listen to with option namespace (e.g. &quot;event.namespace&quot;)</p>
     * @param delegate - <p>Selector to run on element to listen to</p>
     * @param [callback] - <p>Function to fire on event</p>
     * @returns <ul>
     * <li>A function that will undo the listener</li>
     * </ul>
     */
    function on(element: Element, event: string, delegate: string | Function, callback?: Function): CancelListener;

    /**
     * <p>Functionality for this method matches {@link DOMToolsModule.on} but automatically cancels itself
     * and removes the listener upon the first firing of the desired event.</p>
     * @param element - <p>Element to add listener to</p>
     * @param event - <p>Event to listen to with option namespace (e.g. &quot;event.namespace&quot;)</p>
     * @param delegate - <p>Selector to run on element to listen to</p>
     * @param [callback] - <p>Function to fire on event</p>
     * @returns <ul>
     * <li>A function that will undo the listener</li>
     * </ul>
     */
    function once(element: Element, event: string, delegate: string | Function, callback?: Function): CancelListener;

    /**
     * <p>This is similar to jQuery's <code>off</code> function and can <em>hopefully</em> be used in the same way.</p>
     * <p>Rather than attempt to explain, I'll show some example usages.</p>
     * <p>The following will remove a click listener called <code>onClick</code> (in the <code>myPlugin</code> namespace) from <code>element</code>.
     * <code>DOMToolsModule.off(element, &quot;click.myPlugin&quot;, onClick);</code></p>
     * <p>The following will remove a click listener called <code>onClick</code> (in the <code>myPlugin</code> namespace) from <code>element</code> that only fired when the target is a <code>.block</code> element.
     * <code>DOMToolsModule.off(element, &quot;click.myPlugin&quot;, &quot;.block&quot;, onClick);</code></p>
     * <p>The following will remove a click listener (without namespace) from <code>element</code>.
     * <code>DOMToolsModule.off(element, &quot;click&quot;, onClick);</code></p>
     * <p>The following will remove all listeners in namespace <code>myPlugin</code> from <code>element</code>.
     * <code>DOMToolsModule.off(element, &quot;.myPlugin&quot;);</code></p>
     * <p>The following will remove all click listeners in namespace <code>myPlugin</code> from <em>all elements</em>.
     * <code>DOMToolsModule.off(&quot;click.myPlugin&quot;);</code></p>
     * <p>The following will remove all listeners in namespace <code>myPlugin</code> from <em>all elements</em>.
     * <code>DOMToolsModule.off(&quot;.myPlugin&quot;);</code></p>
     * @param element - <p>Element to remove listener from</p>
     * @param [event] - <p>Event to listen to with option namespace (e.g. &quot;event.namespace&quot;)</p>
     * @param [delegate] - <p>Selector to run on element to listen to</p>
     * @param [callback] - <p>Function to fire on event</p>
     * @returns <ul>
     * <li>The original element to allow for chaining</li>
     * </ul>
     */
    function off(element: Element | string, event?: string, delegate?: string | Function, callback?: Function): Element;

    /**
     * <p>Adds a listener for when the node is added/removed from the document body.
     * The listener is automatically removed upon firing.</p>
     * @param node - <p>node to wait for</p>
     * @param callback - <p>function to be performed on event</p>
     * @param onMount - <p>determines if it should fire on Mount or on Unmount</p>
     */
    function onMountChange(node: HTMLElement, callback: Function, onMount?: boolean): void;

    /**
     * <p>Shorthand for {@link DOMToolsModule.onMountChange} with third parameter <code>true</code></p>
     */
    function onMount(): void;

    /**
     * <p>Shorthand for {@link DOMToolsModule.onMountChange} with third parameter <code>false</code></p>
     */
    function onUnmount(): void;

    /**
     * <p>Alias for {@link DOMToolsModule.onMount}</p>
     */
    function onAdded(): void;

    /**
     * <p>Alias for {@link DOMToolsModule.onUnmount}</p>
     */
    function onRemoved(): void;

    /**
     * <p>Helper function which combines multiple elements into one parent element</p>
     * @param elements - <p>array of elements to put into a single parent</p>
     */
    function wrap(elements: HTMLElement[]): void;

    /**
     * <p>Resolves the node to an HTMLElement. This is mainly used by library modules.</p>
     * @param node - <p>node to resolve</p>
     */
    function resolveElement(node: typeof jQuery | Element): void;

    /**
     * <p>Representation of a Class Name</p>
     * @param name - <p>name of the class to represent</p>
     */
    class ClassName {
        constructor(name: string);

        /**
         * <p>Concatenates new class names to the current one using spaces.</p>
         * @param classNames - <p>list of class names to add to this class name</p>
         * @returns <p>returns self to allow chaining</p>
         */
        add(...classNames: string[]): ClassName;

        /**
         * <p>Returns the raw class name, this is how native function get the value.</p>
         * @returns <p>raw class name.</p>
         */
        toString(): string;

        /**
         * <p>Returns the raw class name, this is how native function get the value.</p>
         * @returns <p>raw class name.</p>
         */
        valueOf(): string;

        /**
         * <p>Returns the classname represented as {@link DOMToolsModule.Selector}.</p>
         */
        selector: any;
    }

    /**
     * <p>Representation of a MutationObserver but with helpful utilitiesModule.</p>
     */
    class DOMObserver {
        /**
         * <p>Starts observing the element. This will be called when attaching a callback.
         * You don't need to call this manually.</p>
         */
        observe(): void;

        /**
         * <p>Disconnects this observer. This stops callbacks being called, but does not unbind them.
         * You probably want to use observer.unsubscribeAll instead.</p>
         */
        disconnect(): void;

        /**
         * <p>Subscribes to mutations.</p>
         * @param callback - <p>A function to call when on a mutation</p>
         * @param filter - <p>A function to call to filter mutations</p>
         * @param bind - <p>Something to bind the callback to</p>
         * @param group - <p>Whether to call the callback with an array of mutations instead of a single mutation</p>
         */
        subscribe(callback: (...params: any[]) => any, filter: (...params: any[]) => any, bind: any, group: boolean): any;

        /**
         * <p>Removes a subscription and disconnect if there are none left.</p>
         * @param subscription - <p>A subscription object returned by observer.subscribe</p>
         */
        unsubscribe(subscription: any): void;

        /**
         * <p>Subscribes to mutations that affect an element matching a selector.</p>
         * @param callback - <p>A function to call when on a mutation</p>
         * @param filter - <p>A function to call to filter mutations</p>
         * @param bind - <p>Something to bind the callback to</p>
         * @param group - <p>Whether to call the callback with an array of mutations instead of a single mutation</p>
         */
        subscribeToQuerySelector(callback: (...params: any[]) => any, filter: (...params: any[]) => any, bind: any, group: boolean): any;
    }

    /**
     * <p>Representation of a Selector</p>
     * @param classname - <p>class to create selector for</p>
     */
    class Selector {
        constructor(classname: string);

        /**
         * <p>Returns the raw selector, this is how native function get the value.</p>
         * @returns <p>raw selector.</p>
         */
        toString(): string;

        /**
         * <p>Returns the raw selector, this is how native function get the value.</p>
         * @returns <p>raw selector.</p>
         */
        valueOf(): string;

        /**
         * <p>Adds another selector as a direct child <code>&gt;</code> to this one.</p>
         * @param other - <p>Selector to add as child</p>
         * @returns <p>returns self to allow chaining</p>
         */
        child(other: string | this): this;

        /**
         * <p>Adds another selector as a adjacent sibling <code>+</code> to this one.</p>
         * @param other - <p>Selector to add as adjacent sibling</p>
         * @returns <p>returns self to allow chaining</p>
         */
        adjacent(other: string | this): this;

        /**
         * <p>Adds another selector as a general sibling <code>.</code> to this one.</p>
         * @param other - <p>Selector to add as sibling</p>
         * @returns <p>returns self to allow chaining</p>
         */
        sibling(other: string | this): this;

        /**
         * <p>Adds another selector as a descendent <code>(space)</code> to this one.</p>
         * @param other - <p>Selector to add as descendent</p>
         * @returns <p>returns self to allow chaining</p>
         */
        descend(other: string | this): this;

        /**
         * <p>Adds another selector to this one via <code>,</code>.</p>
         * @param other - <p>Selector to add</p>
         * @returns <p>returns self to allow chaining</p>
         */
        and(other: string | this): this;
    }
}

/**
 * <p>Simple logger for the lib and plugins.</p>
 */
declare namespace LoggerModule {
    /**
     * <p>List of logging types.</p>
     */
    const LogTypes: { [key: string]: string };

    /**
     * <p>Logs an error using a collapsed error group with stacktrace.</p>
     * @param module - <p>Name of the calling module.</p>
     * @param message - <p>Message or error to have logged.</p>
     * @param error - <p>Error object to log with the message.</p>
     */
    function stacktrace(module, message: string, error: Error): void;

    /**
     * <p>Logs using error formatting. For logging an actual error object consider {@link LoggerModule.stacktrace}</p>
     * @param module - <p>Name of the calling module.</p>
     * @param message - <p>Messages to have logged.</p>
     */
    function err(module, ...message: string[]): void;

    /**
     * <p>Logs a warning message.</p>
     * @param module - <p>Name of the calling module.</p>
     * @param message - <p>Messages to have logged.</p>
     */
    function warn(module, ...message: any[]): void;

    /**
     * <p>Logs an informational message.</p>
     * @param module - <p>Name of the calling module.</p>
     * @param message - <p>Messages to have logged.</p>
     */
    function info(module, ...message: any[]): void;

    /**
     * <p>Logs used for debugging purposes.</p>
     * @param module - <p>Name of the calling module.</p>
     * @param message - <p>Messages to have logged.</p>
     */
    function debug(module, ...message: any[]): void;

    /**
     * <p>Logs used for basic loggin.</p>
     * @param module - <p>Name of the calling module.</p>
     * @param message - <p>Messages to have logged.</p>
     */
    function log(module, ...message: any[]): void;

    /**
     * <p>Logs strings using different console levels and a module label.</p>
     * @param module - <p>Name of the calling module.</p>
     * @param message - <p>Messages to have logged.</p>
     * @param type - <p>Type of log to use in console.</p>
     */
    function _log(module, message: any | any[], type?: string): void;
}

/**
 * <p>PatcherModule that can patch other functions allowing you to run code before, after or
 * instead of the original function. Can also alter arguments and return values.</p>
 * <p>This is a modified version of what we have been working on in BDv2. {@link https://github.com/JsSucks/BetterDiscordApp/blob/master/client/src/modules/patcherModule.js}</p>
 */
declare namespace PatcherModule {

    /**
     * <p>Returns all the patches done by a specific caller</p>
     * @param name - <p>Name of the patch caller</p>
     */
    function getPatchesByCaller(name: string): void;

    /**
     * <p>Unpatches all patches passed, or when a string is passed unpatches all
     * patches done by that specific caller.</p>
     * @param patches - <p>Either an array of patches to unpatch or a caller name</p>
     */
    function unpatchAll(patches: any[] | string): void;

    /**
     * <p>Function with no arguments and no return value that may be called to revert changes made by {@link PatcherModule}, restoring (unpatching) original method.</p>
     */
    type unpatch = () => void;
    /**
     * <p>A callback that modifies method logic. This callback is called on each call of the original method and is provided all data about original call. Any of the data can be modified if necessary, but do so wisely.</p>
     * <p>The third argument for the callback will be <code>undefined</code> for <code>before</code> patches. <code>originalFunction</code> for <code>instead</code> patches and <code>returnValue</code> for <code>after</code> patches.</p>
     * @param thisObject - <p><code>this</code> in the context of the original function.</p>
     * @param arguments - <p>The original arguments of the original function.</p>
     * @param extraValue - <p>For <code>instead</code> patches, this is the original function from the module. For <code>after</code> patches, this is the return value of the function.</p>
     */
    type patchCallback = (thisObject: any, arguments: any[], extraValue: ((...params: any[]) => any) | any) => any;

    /**
     * <p>This method patches onto another function, allowing your code to run beforehand.
     * Using this, you are also able to modify the incoming arguments before the original method is run.</p>
     * @param caller - <p>Name of the caller of the patch function. Using this you can undo all patches with the same name using {@link PatcherModule.unpatchAll}. Use <code>&quot;&quot;</code> if you don't care.</p>
     * @param moduleToPatch - <p>Object with the function to be patched. Can also patch an object's prototype.</p>
     * @param functionName - <p>Name of the method to be patched</p>
     * @param callback - <p>Function to run before the original method</p>
     * @param options - <p>Object used to pass additional options.</p>
     * @param [options.displayName] - <p>You can provide meaningful name for class/object provided in <code>what</code> param for logging purposes. By default, this function will try to determine name automatically.</p>
     * @param [options.forcePatch = true] - <p>Set to <code>true</code> to patch even if the function doesnt exist. (Adds noop function in place).</p>
     * @returns <p>Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.</p>
     */
    function before(caller: string, moduleToPatch: any, functionName: string, callback: patchCallback, options?: {
        displayName?: string;
        forcePatch?: boolean;
    }): unpatch;

    /**
     * <p>This method patches onto another function, allowing your code to run after.
     * Using this, you are also able to modify the return value, using the return of your code instead.</p>
     * @param caller - <p>Name of the caller of the patch function. Using this you can undo all patches with the same name using {@link PatcherModule.unpatchAll}. Use <code>&quot;&quot;</code> if you don't care.</p>
     * @param moduleToPatch - <p>Object with the function to be patched. Can also patch an object's prototype.</p>
     * @param functionName - <p>Name of the method to be patched</p>
     * @param callback - <p>Function to run instead of the original method</p>
     * @param options - <p>Object used to pass additional options.</p>
     * @param [options.displayName] - <p>You can provide meaningful name for class/object provided in <code>what</code> param for logging purposes. By default, this function will try to determine name automatically.</p>
     * @param [options.forcePatch = true] - <p>Set to <code>true</code> to patch even if the function doesnt exist. (Adds noop function in place).</p>
     * @returns <p>Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.</p>
     */
    function after(caller: string, moduleToPatch: any, functionName: string, callback: patchCallback, options?: {
        displayName?: string;
        forcePatch?: boolean;
    }): unpatch;

    /**
     * <p>This method patches onto another function, allowing your code to run instead.
     * Using this, you are also able to modify the return value, using the return of your code instead.</p>
     * @param caller - <p>Name of the caller of the patch function. Using this you can undo all patches with the same name using {@link PatcherModule.unpatchAll}. Use <code>&quot;&quot;</code> if you don't care.</p>
     * @param moduleToPatch - <p>Object with the function to be patched. Can also patch an object's prototype.</p>
     * @param functionName - <p>Name of the method to be patched</p>
     * @param callback - <p>Function to run after the original method</p>
     * @param options - <p>Object used to pass additional options.</p>
     * @param [options.displayName] - <p>You can provide meaningful name for class/object provided in <code>what</code> param for logging purposes. By default, this function will try to determine name automatically.</p>
     * @param [options.forcePatch = true] - <p>Set to <code>true</code> to patch even if the function doesnt exist. (Adds noop function in place).</p>
     * @returns <p>Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.</p>
     */
    function instead(caller: string, moduleToPatch: any, functionName: string, callback: patchCallback, options?: {
        displayName?: string;
        forcePatch?: boolean;
    }): unpatch;

    /**
     * <p>This method patches onto another function, allowing your code to run before, instead or after the original function.
     * Using this you are able to modify the incoming arguments before the original function is run as well as the return
     * value before the original function actually returns.</p>
     * @param caller - <p>Name of the caller of the patch function. Using this you can undo all patches with the same name using {@link PatcherModule.unpatchAll}. Use <code>&quot;&quot;</code> if you don't care.</p>
     * @param moduleToPatch - <p>Object with the function to be patched. Can also patch an object's prototype.</p>
     * @param functionName - <p>Name of the method to be patched</p>
     * @param callback - <p>Function to run after the original method</p>
     * @param options - <p>Object used to pass additional options.</p>
     * @param [options.type = after] - <p>Determines whether to run the function <code>before</code>, <code>instead</code>, or <code>after</code> the original.</p>
     * @param [options.displayName] - <p>You can provide meaningful name for class/object provided in <code>what</code> param for logging purposes. By default, this function will try to determine name automatically.</p>
     * @param [options.forcePatch = true] - <p>Set to <code>true</code> to patch even if the function doesnt exist. (Adds noop function in place).</p>
     * @returns <p>Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.</p>
     */
    function pushChildPatch(caller: string, moduleToPatch: any, functionName: string, callback: patchCallback, options?: {
        type?: string;
        displayName?: string;
        forcePatch?: boolean;
    }): unpatch;
}

/**
 * <p>Functions that check for and update existing plugins.</p>
 */
declare namespace PluginUpdaterModule {
    /**
     * <p>Function that gets the remote version from the file contents.</p>
     * @param fileContent - <p>the content of the remote file</p>
     */
    type versioner = (fileContent: string) => string;
    /**
     * <p>Comparator that takes the current version and the remote version,
     * then compares them returning <code>true</code> if there is an update and <code>false</code> otherwise.</p>
     * @param currentVersion - <p>the current version of the plugin</p>
     * @param remoteVersion - <p>the remote version of the plugin</p>
     */
    type comparator = (currentVersion: string, remoteVersion: string) => boolean;

    /**
     * <p>Checks for updates for the specified plugin at the specified link. The final
     * parameter should link to the raw text of the plugin and will compare semantic
     * versions.</p>
     * @param pluginName - <p>name of the plugin</p>
     * @param currentVersion - <p>current version (semantic versioning only)</p>
     * @param updateURL - <p>url to check for update</p>
     * @param [versioner] - <p>versioner that finds the remote version. If not provided uses {@link PluginUpdaterModule.defaultVersioner}.</p>
     * @param [comparator] - <p>comparator that determines if there is an update. If not provided uses {@link PluginUpdaterModule.defaultComparator}.</p>
     */
    function checkForUpdate(pluginName: string, currentVersion: string, updateURL: string, versioner?: versioner, comparator?: comparator): void;

    /**
     * <p>Will check for updates and automatically show or remove the update notice
     * bar based on the internal result. Better not to call this directly and to
     * instead use {@link PluginUpdaterModule.checkForUpdate}.</p>
     * @param pluginName - <p>name of the plugin to check</p>
     * @param updateLink - <p>link to the raw text version of the plugin</p>
     */
    function processUpdateCheck(pluginName: string, updateLink: string): void;

    /**
     * <p>The default versioner used as {@link PluginUpdaterModule.versioner} for {@link PluginUpdaterModule.checkForUpdate}.
     * This works on basic semantic versioning e.g. &quot;1.0.0&quot;. You do not need to provide this as a versioner if your plugin adheres
     * to this style as this will be used as default.</p>
     */
    function defaultVersioner(currentVersion: string, content: string): void;

    /**
     * <p>The default comparator used as {@link PluginUpdaterModule.comparator} for {@link PluginUpdaterModule.checkForUpdate}.
     * This works on basic semantic versioning e.g. &quot;1.0.0&quot;. You do not need to provide this as a comparator if your plugin adheres
     * to this style as this will be used as default.</p>
     */
    function defaultComparator(currentVersion: string, content: string): void;

    /**
     * <p>Creates the update button found in the plugins page of BetterDiscord
     * settings. Returned button will already have listeners to create the tooltipModule.</p>
     * @returns <p>check for update button</p>
     */
    function createUpdateButton(): HTMLElement;

    /**
     * <p>Will download the latest version and replace the the old plugin version.
     * Will also update the button in the update bar depending on if the user
     * is using RestartNoMore plugin by square {@link https://github.com/Inve1951/BetterDiscordStuff/blob/master/plugins/restartNoMore.plugin.js}</p>
     * @param pluginName - <p>name of the plugin to download</p>
     * @param updateLink - <p>link to the raw text version of the plugin</p>
     */
    function downloadPlugin(pluginName: string, updateLink: string): void;

    /**
     * <p>Will show the update notice top bar seen in Discord. Better not to call
     * this directly and to instead use {@link PluginUpdaterModule.checkForUpdate}.</p>
     * @param pluginName - <p>name of the plugin</p>
     * @param updateLink - <p>link to the raw text version of the plugin</p>
     */
    function showUpdateNotice(pluginName: string, updateLink: string): void;

    /**
     * <p>Will remove the plugin from the update notice top bar seen in Discord.
     * Better not to call this directly and to instead use {@link PluginUpdaterModule.checkForUpdate}.</p>
     * @param pluginName - <p>name of the plugin</p>
     */
    function removeUpdateNotice(pluginName: string): void;
}

/**
 * <p>A series of useful functions for BetterDiscord plugins.</p>
 */
declare namespace PluginUtilitiesModule {
    /**
     * <p>Loads data through BetterDiscord's API.</p>
     * @param name - <p>name for the file (usually plugin name)</p>
     * @param key - <p>which key the data is saved under</p>
     * @param defaultData - <p>default data to populate the object with</p>
     * @returns <p>the combined saved and default data</p>
     */
    function loadData(name: string, key: string, defaultData: any): any;

    /**
     * <p>Saves data through BetterDiscord's API.</p>
     * @param name - <p>name for the file (usually plugin name)</p>
     * @param key - <p>which key the data should be saved under</p>
     * @param data - <p>data to save</p>
     */
    function saveData(name: string, key: string, data: any): void;

    /**
     * <p>Loads settings through BetterDiscord's API.</p>
     * @param name - <p>name for the file (usually plugin name)</p>
     * @param defaultData - <p>default data to populate the object with</p>
     * @returns <p>the combined saved and default settings</p>
     */
    function loadsettings(name: string, defaultData: any): any;

    /**
     * <p>Saves settings through BetterDiscord's API.</p>
     * @param name - <p>name for the file (usually plugin name)</p>
     * @param data - <p>settings to save</p>
     */
    function savesettings(name: string, data: any): void;

    /**
     * <p>Get the full path to the BetterDiscord folder.</p>
     * @returns <p>full path to the BetterDiscord folder</p>
     */
    function getBDFolder(): string;

    /**
     * <p>Get the full path to the plugins folder.</p>
     * @returns <p>full path to the plugins folder</p>
     */
    function getPluginsFolder(): string;

    /**
     * <p>Get the full path to the themes folder.</p>
     * @returns <p>full path to the themes folder</p>
     */
    function getThemesFolder(): string;

    /**
     * <p>Adds a callback to a set of listeners for onSwitch.</p>
     * @param callback - <p>basic callback to happen on channel switch</p>
     */
    function addOnSwitchListener(callback: Function): void;

    /**
     * <p>Removes the listener added by {@link InternalUtilitiesModule.addOnSwitchListener}.</p>
     * @param callback - <p>callback to remove from the listener list</p>
     */
    function removeOnSwitchListener(callback: Function): void;

    /**
     * <p>Adds a style to the document.</p>
     * @param id - <p>identifier to use as the element id</p>
     * @param css - <p>css to add to the document</p>
     */
    function addStyle(id: string, css: string): void;

    /**
     * <p>Removes a style from the document.</p>
     * @param id - <p>original identifier used</p>
     */
    function removeStyle(id: string): void;

    /**
     * <p>Adds/requires a remote script to be loaded</p>
     * @param id - <p>identifier to use for this script</p>
     * @param url - <p>url from which to load the script</p>
     * @returns <p>promise that resolves when the script is loaded</p>
     */
    function addScript(id: string, url: string): Promise<void>;

    /**
     * <p>Removes a remote script from the document.</p>
     * @param id - <p>original identifier used</p>
     */
    function removeScript(id: string): void;
}

/**
 * <p>Methods for obtaining and interacting with react components.</p>
 */
declare namespace ReactComponentsModule {

    /**
     * <p>Finds a component from the components array or by waiting for it to be mounted.</p>
     * @param name - <p>The component's name</p>
     * @param selector - <p>A selector to look for</p>
     */
    function getComponentByName(name: string, selector: any): Promise<Component>;

    /**
     * <p>Finds a component from the components array or by waiting for it to be mounted.</p>
     * @param name - <p>The component's name</p>
     * @param selector - <p>A selector to look for</p>
     * @param filter - <p>A function to filter components if a single element is rendered by multiple components</p>
     */
    function getComponent(name: string, selector: any, filter: (...params: any[]) => any): Promise<Component>;
}

/**
 * <p>Helpful utilitiesModule for dealing with getting react information from DOM objects.</p>
 */
declare namespace ReactToolsModule {
    /**
     * <p>Grabs the react internal instance of a specific node.</p>
     * @param node - <p>node to obtain react instance of</p>
     * @returns <p>the internal react instance</p>
     */
    function getReactInstance(node: HTMLElement | JQuery): any;

    /**
     * <p>Grabs a value from the react internal instance. Allows you to grab
     * long depth values safely without accessing no longer valid properties.</p>
     * @param node - <p>node to obtain react instance of</p>
     * @param path - <p>path to the requested value</p>
     * @returns <p>the value requested or undefined if not found.</p>
     */
    function getReactProperty(node: HTMLElement | typeof jQuery, path: string): any | undefined;

    /**
     * <p>Grabs a value from the react internal instance. Allows you to grab
     * long depth values safely without accessing no longer valid properties.</p>
     * @param node - <p>node to obtain react instance of</p>
     * @param options - <p>options for the search</p>
     * @param [options.include] - <p>list of items to include from the search</p>
     * @param [options.exclude = ["Popout", "TooltipModule", "Scroller", "BackgroundFlash"]] - <p>list of items to exclude from the search</p>
     * @param [options.filter = _=>_] - <p>filter to check the current instance with (should return a boolean)</p>
     * @returns <p>the owner instance or undefined if not found.</p>
     */
    function getOwnerInstance(node: HTMLElement | typeof jQuery, options: {
        include?: any[];
        exclude?: any[];
        filter?: Function;
    }): any | null;

    /**
     * <p>Grabs the react internal state node trees of a specific node.</p>
     * @param node - <p>node to obtain state nodes of</p>
     * @returns <p>list of found state nodes</p>
     */
    function getStateNodes(node: HTMLElement | typeof jQuery): ((...params: any[]) => void)[];

    /**
     * <p>Grabs the react internal component tree of a specific node.</p>
     * @param node - <p>node to obtain react components of</p>
     * @returns <p>list of found react components</p>
     */
    function getComponents(node: HTMLElement | typeof jQuery): ((...params: any[]) => void)[];

    /**
     * <p>Creates and renders a react element that wraps dom elements.</p>
     * @param element - <p>element or array of elements to wrap into a react element</p>
     * @returns <ul>
     * <li>rendered react element</li>
     * </ul>
     */
    function createWrappedElement(element: HTMLElement | HTMLElement[]): any;

    /**
     * <p>Creates an unrendered react component that wraps dom elements.</p>
     * @param element - <p>element or array of elements to wrap into a react component</p>
     * @returns <ul>
     * <li>unrendered react component</li>
     * </ul>
     */
    function wrapElement(element: HTMLElement | HTMLElement[]): any;
}

/**
 * <p>Random set of utilitiesModule that didn't fit elsewhere.</p>
 */
declare namespace UtilitiesModule {
    /**
     * <p>Stably sorts arrays since <code>.sort()</code> has issues.</p>
     * @param list - <p>array to sort</p>
     * @param comparator - <p>comparator to sort by</p>
     */
    function stableSort(list: any[], comparator: (...params: any[]) => any): void;

    /**
     * <p>Generates an automatically memoizing version of an object.</p>
     * @param object - <p>object to memoize</p>
     * @returns <p>the proxy to the object that memoizes properties</p>
     */
    function memoizeObject(object: Function): typeof Proxy;

    /**
     * <p>Wraps the method in a <code>try..catch</code> block.</p>
     * @param method - <p>method to wrap</p>
     * @param description - <p>description of method</p>
     * @returns <p>wrapped version of method</p>
     */
    function suppressErrors(method: Function, description: string): Function;

    /**
     * <p>This only exists because Samo relied on lodash being there... fuck lodash.</p>
     * @param anything - <p>whatever you want</p>
     */
    function isNil(anything: any): void;

    /**
     * <p>Format template strings with placeholders (<code>${placeholder}</code>) into full strings.
     * Quick example: <code>UtilitiesModule.formatString(&quot;Hello, ${user}&quot;, {user: &quot;Zerebos&quot;})</code>
     * would return &quot;Hello, Zerebos&quot;.</p>
     * @param string - <p>string to format</p>
     * @param values - <p>object literal of placeholders to replacements</p>
     * @returns <p>the properly formatted string</p>
     */
    function formatTString(string: string, values: any): string;

    /**
     * <p>Format strings with placeholders (<code>{{placeholder}}</code>) into full strings.
     * Quick example: <code>UtilitiesModule.formatString(&quot;Hello, {{user}}&quot;, {user: &quot;Zerebos&quot;})</code>
     * would return &quot;Hello, Zerebos&quot;.</p>
     * @param string - <p>string to format</p>
     * @param values - <p>object literal of placeholders to replacements</p>
     * @returns <p>the properly formatted string</p>
     */
    function formatString(string: string, values: any): string;

    /**
     * <p>Finds a value, subobject, or array from a tree that matches a specific filter. Great for patching render functions.</p>
     * @param tree - <p>React tree to look through. Can be a rendered object or an internal instance.</p>
     * @param searchFilter - <p>Filter function to check subobjects against.</p>
     */
    function findInReactTree(tree: any, searchFilter: Function): object;

    /**
     * <p>Finds a value, subobject, or array from a tree that matches a specific filter.</p>
     * @param tree - <p>Tree that should be walked</p>
     * @param searchFilter - <p>Filter to check against each object and subobject</p>
     * @param options - <p>Additional options to customize the search</p>
     * @param [options.walkable = null] - <p>Array of strings to use as keys that are allowed to be walked on. Null value indicates all keys are walkable</p>
     * @param [options.ignore = []] - <p>Array of strings to use as keys to exclude from the search, most helpful when <code>walkable = null</code>.</p>
     */
    function findInTree(tree: any, searchFilter: Function, options: {
        walkable?: string[] | null;
        ignore?: string[];
    }): object;

    /**
     * <p>Gets a nested property (if it exists) safely. Path should be something like <code>prop.prop2.prop3</code>.
     * Numbers can be used for arrays as well like <code>prop.prop2.array.0.id</code>.</p>
     * @param obj - <p>object to get nested property of</p>
     * @param path - <p>representation of the property to obtain</p>
     */
    function getNestedProp(obj: any, path: string): object;

    /**
     * <p>Builds a classname string from any number of arguments. This includes arrays and objects.
     * When given an array all values from the array are added to the list.
     * When given an object they keys are added as the classnames if the value is truthy.
     * Copyright (c) 2018 Jed Watson https://github.com/JedWatson/classnames MIT License</p>
     * @param argument - <p>anything that should be used to add classnames.</p>
     */
    function className(...argument: any[]): string;

    /**
     * <p>Safely adds to the prototype of an existing object by checking if the
     * property exists on the prototype.</p>
     * @param object - <p>Object whose prototype to extend</p>
     * @param prop - <p>Name of the prototype property to add</p>
     * @param func - <p>Function to run</p>
     */
    function addToPrototype(object: any, prop: string, func: Function): void;

    /**
     * <p>Deep extends an object with a set of other objects. Objects later in the list
     * of <code>extenders</code> have priority, that is to say if one sets a key to be a primitive,
     * it will be overwritten with the next one with the same key. If it is an object,
     * and the keys match, the object is extended. This happens recursively.</p>
     * @param extendee - <p>Object to be extended</p>
     * @param extenders - <p>Objects to extend with</p>
     * @returns <ul>
     * <li>A reference to <code>extendee</code></li>
     * </ul>
     */
    function extend<E>(extendee: E, ...extenders: any[]): E;

    /**
     * <p>Clones an object and all it's properties.</p>
     * @param value - <p>The value to clone</p>
     * @returns <p>The cloned value</p>
     */
    function deepclone(value: any): any;

    /**
     * <p>Freezes an object and all it's properties.</p>
     * @param object - <p>The object to freeze</p>
     * @param exclude - <p>A function to filter object that shouldn't be frozen</p>
     */
    function deepfreeze<O>(object: O, exclude: (...params: any[]) => any): O;

    /**
     * <p>Removes an item from an array. This differs from Array.prototype.filter as it mutates the original array instead of creating a new one.</p>
     * @param array - <p>The array to filter</p>
     * @param item - <p>The item to remove from the array</p>
     */
    function removeFromArray(array: any[], item: any): any[];

    /**
     * <p>Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds.</p>
     * <p>Adapted from the version by David Walsh (https://davidwalsh.name/javascript-debounce-function)</p>
     */
    function debounce(executor: (...params: any[]) => any, delay: number): Function;

    /**
     * <p>Loads data through BetterDiscord's API.</p>
     * @param name - <p>name for the file (usually plugin name)</p>
     * @param key - <p>which key the data is saved under</p>
     * @param defaultData - <p>default data to populate the object with</p>
     * @returns <p>the combined saved and default data</p>
     */
    function loadData(name: string, key: string, defaultData: any): any;

    /**
     * <p>Saves data through BetterDiscord's API.</p>
     * @param name - <p>name for the file (usually plugin name)</p>
     * @param key - <p>which key the data should be saved under</p>
     * @param data - <p>data to save</p>
     */
    function saveData(name: string, key: string, data: any): void;

    /**
     * <p>Loads settings through BetterDiscord's API.</p>
     * @param name - <p>name for the file (usually plugin name)</p>
     * @param defaultData - <p>default data to populate the object with</p>
     * @returns <p>the combined saved and default settings</p>
     */
    function loadSettings(name: string, defaultData: any): any;

    /**
     * <p>Saves settings through BetterDiscord's API.</p>
     * @param name - <p>name for the file (usually plugin name)</p>
     * @param data - <p>settings to save</p>
     */
    function saveSettings(name: string, data: any): void;
}

/**
 * <p>Random set of utilitiesModule that didn't fit elsewhere.</p>
 */
declare namespace WebpackModulesModule {
    /**
     * <p>Filters for use with {@link WebpackModulesModule} but may prove useful elsewhere.</p>
     */
    class Filters {
        /**
         * <p>Generates a {@link WebpackModulesModule.Filters.filter} that filters by a set of properties.</p>
         * @param props - <p>Array of property names</p>
         * @param filter - <p>Additional filter</p>
         * @returns <ul>
         * <li>A filter that checks for a set of properties</li>
         * </ul>
         */
        static byProperties(props: string[], filter: WebpackModulesModule.Filters.filter): WebpackModulesModule.Filters.filter;

        /**
         * <p>Generates a {@link WebpackModulesModule.Filters.filter} that filters by a set of properties on the object's prototype.</p>
         * @param fields - <p>Array of property names</p>
         * @param filter - <p>Additional filter</p>
         * @returns <ul>
         * <li>A filter that checks for a set of properties on the object's prototype</li>
         * </ul>
         */
        static byPrototypeFields(fields: string[], filter: WebpackModulesModule.Filters.filter): WebpackModulesModule.Filters.filter;

        /**
         * <p>Generates a {@link WebpackModulesModule.Filters.filter} that filters by a regex.</p>
         * @param search - <p>A RegExp to check on the module</p>
         * @param filter - <p>Additional filter</p>
         * @returns <ul>
         * <li>A filter that checks for a set of properties</li>
         * </ul>
         */
        static byCode(search: RegExp, filter: WebpackModulesModule.Filters.filter): WebpackModulesModule.Filters.filter;

        /**
         * <p>Generates a {@link WebpackModulesModule.Filters.filter} that filters by strings.</p>
         * @param search - <p>A RegExp to check on the module</p>
         * @returns <ul>
         * <li>A filter that checks for a set of strings</li>
         * </ul>
         */
        static byString(...search: string[]): WebpackModulesModule.Filters.filter;

        /**
         * <p>Generates a {@link WebpackModulesModule.Filters.filter} that filters by a set of properties.</p>
         * @param name - <p>Name the module should have</p>
         * @param filter - <p>Additional filter</p>
         * @returns <ul>
         * <li>A filter that checks for a set of properties</li>
         * </ul>
         */
        static byDisplayName(name: string, filter: WebpackModulesModule.Filters.filter): WebpackModulesModule.Filters.filter;

        /**
         * <p>Generates a combined {@link WebpackModulesModule.Filters.filter} from a list of filters.</p>
         * @param filters - <p>A list of filters</p>
         * @returns <ul>
         * <li>Combinatory filter of all arguments</li>
         * </ul>
         */
        static combine(...filters: WebpackModulesModule.Filters.filter[]): WebpackModulesModule.Filters.filter;
    }

    /**
     * <p>Finds a module using a filter function.</p>
     * @param filter - <p>A function to use to filter modules</p>
     * @param first - <p>Whether to return only the first matching module</p>
     */
    function getModule(filter: (...params: any[]) => any, first?: boolean): any;

    /**
     * <p>Gets the index in the webpack require cache of a specific
     * module using a filter.</p>
     * @param filter - <p>A function to use to filter modules</p>
     */
    function getIndex(filter: (...params: any[]) => any): number | null;

    /**
     * <p>Gets the index in the webpack require cache of a specific
     * module that was already found.</p>
     * @param module - <p>An already acquired module</p>
     */
    function getIndexByModule(any): number | null;

    /**
     * <p>Finds all modules matching a filter function.</p>
     * @param filter - <p>A function to use to filter modules</p>
     */
    function getModules(filter: (...params: any[]) => any): void;

    /**
     * <p>Finds a module by its name.</p>
     * @param name - <p>The name of the module</p>
     * @param fallback - <p>A function to use to filter modules if not finding a known module</p>
     */
    function getModuleByName(name: string, fallback: (...params: any[]) => any): any;

    /**
     * <p>Finds a module by its display name.</p>
     * @param name - <p>The display name of the module</p>
     */
    function getByDisplayName(name: string): any;

    /**
     * <p>Finds a module using its code.</p>
     * @param regex - <p>A regular expression to use to filter modules</p>
     * @param first - <p>Whether to return the only the first matching module</p>
     */
    function getByRegex(regex: RegExp, first?: boolean): any;

    /**
     * <p>Finds a single module using properties on its prototype.</p>
     * @param prototypes - <p>Properties to use to filter modules</p>
     */
    function getByPrototypes(...prototypes: string[]): any;

    /**
     * <p>Finds all modules with a set of properties of its prototype.</p>
     * @param prototypes - <p>Properties to use to filter modules</p>
     */
    function getAllByPrototypes(...prototypes: string[]): any;

    /**
     * <p>Finds a single module using its own properties.</p>
     * @param props - <p>Properties to use to filter modules</p>
     */
    function getByProps(...props: string[]): any;

    /**
     * <p>Finds all modules with a set of properties.</p>
     * @param props - <p>Properties to use to filter modules</p>
     */
    function getAllByProps(...props: string[]): any;

    /**
     * <p>Finds a single module using a set of strings.</p>
     * @param props - <p>Strings to use to filter modules</p>
     */
    function getByString(...props: string[]): any;

    /**
     * <p>Finds all modules with a set of strings.</p>
     * @param strings - <p>Strings to use to filter modules</p>
     */
    function getAllByString(...strings: string[]): any;

    /**
     * <p>Gets a specific module by index of the webpack require cache.
     * Best used in combination with getIndex in order to patch a
     * specific function.</p>
     * <p>Note: this gives the <strong>raw</strong> module, meaning the actual module
     * is in returnValue.exports. This is done in order to be able
     * to patch modules which export a single function directly.</p>
     * @param index - <p>Index into the webpack require cache</p>
     */
    function getByIndex(index: number): any;

    /**
     * <p>Discord's <strong>webpack_require</strong> function.</p>
     */
    var require: any;

    /**
     * <p>Returns all loaded modules.</p>
     */
    function getAllModules(): any[];

    /**
     * <p>Adds a listener for when discord loaded a chunk. Useful for subscribing to lazy loaded modules.</p>
     * @param listener - <p>Function to subscribe for chunks</p>
     * @returns <p>A cancelling function</p>
     */
    function addListener(listener: (...params: any[]) => any): (...params: any[]) => any;

    /**
     * <p>Removes a listener for when discord loaded a chunk.</p>
     */
    function removeListener(listener: (...params: any[]) => any): boolean;
}

declare namespace WebpackModulesModule {
    namespace Filters {
        /**
         * <p>Checks if a given module matches a set of parameters.</p>
         * @param module - <p>module to check</p>
         */
        type filter = (any) => boolean;
    }
}

/**
 * <p>Acts as an interface for anything that should be listenable.</p>
 */
declare class Listenable {
    /**
     * <p>Adds a listener to the current object.</p>
     * @param callback - <p>callback for when the event occurs</p>
     * @returns <ul>
     * <li>a way to cancel the listener without needing to call <code>removeListener</code></li>
     * </ul>
     */
    addListener(callback: Function): Function;

    /**
     * <p>Removes a listener from the current object.</p>
     * @param callback - <p>callback that was originally registered</p>
     */
    removeListener(callback: Function): void;

    /**
     * <p>Alerts the listeners that an event occurred. Data passed is optional</p>
     * @param [...data] - <p>Any data desired to be passed to listeners</p>
     */
    alertListeners(): void;
}

// /**
//  * <p>Representation of the screen such as width and height.</p>
//  */
// declare class Screen {
//     /**
//      * <p>Document/window width</p>
//      */
//     static width: any;
//     /**
//      * <p>Document/window height</p>
//      */
//     static height: any;
// }

/**
 * <p>A utility for building and rendering Discord's own menus.</p>
 */
declare namespace DiscordContextMenuModule {
    /**
     * <p>Fires when the item is clicked.</p>
     * @param event - <p>The event generated on click</p>
     */
    type MenuItemOnClick = (event: MouseEvent) => void;

    /**
     * <p>This is the generic context menu item component. It is very extensible and will adapt
     * it's type depending on the props.</p>
     * <p>Note: The item ID should be unique to this item across the entire menu. If no <code>id</code> is
     * provided, the system will use the <code>label</code>. Plugins should ensure there are no <code>label</code>
     * conflicts if they do not wish to provide <code>id</code>. <code>label</code> conflicts (when not using
     * unique <code>id</code>s) can cause multiple items to be hovered at once.</p>
     * @param props - <p>props to pass to the react renderer</p>
     * @param props.label - <p>label to show on the menu item</p>
     * @param [props.id] - <p>specific id used for this item</p>
     * @param [props.hint] - <p>hint to show on the right hand side (usually keyboard combo)</p>
     * @param [props.subtext] - <p>description to show underneath</p>
     * @param [props.image] - <p>link to image to show on the side</p>
     * @param [props.icon] - <p>react component to render on the side</p>
     * @param [props.render] - <p>render function for custom rendering the menu item</p>
     * @param [props.action] - <p>function to perform on click</p>
     * @param [props.onClick] - <p>function to perform on click (alias of <code>action</code>)</p>
     * @param [props.onClose] - <p>function to run when this is closed</p>
     * @param [props.danger = false] - <p>should the item show as danger (red)</p>
     * @param [props.disabled = false] - <p>should the item be disabled/unclickable</p>
     * @param [props.style] - <p>allows you to add custom styles</p>
     * @param [props.closeOnClick] - <p>allows you to prevent closing on click</p>
     */
    interface MenuItem {
    }

    /**
     * <p>This item is used for creating checkboxes in menus. Properties shown here are additional
     * to those of the main MenuItem {@link DiscordContextMenuModule.MenuItem}</p>
     * @param [props.checked = false] - <p>should the checkbox be checked</p>
     * @param [props.active = false] - <p>alias of <code>checked</code></p>
     */
    interface MenuToggleItem extends MenuItem {
    }

    /**
     * <p>This item is used for creating radio selections in menus. Properties shown here are additional
     * to those of the main MenuItem {@link DiscordContextMenuModule.MenuItem}</p>
     * <p>Note: for the <code>forceUpdate</code> option... Without this enabled, you will manually need to
     * manage the state for the functional component. If you do not the toggle will appear
     * to not update. @see {@link https://reactjs.org/docs/hooks-reference.html#usestate}</p>
     * @param [props.checked = false] - <p>should the checkbox be checked</p>
     * @param [props.active = false] - <p>alias of <code>checked</code></p>
     * @param [props.forceUpdate = true] - <p>should the menu be force-updated after click</p>
     */
    interface MenuRadioItem extends MenuItem {
    }

    /**
     * <p>This item is used for creating nested submenus. Properties shown here are additional
     * to those of the main MenuItem {@link DiscordContextMenuModule.MenuItem}</p>
     * @param [props.render] - <p>array of items to render in the submenu</p>
     * @param [props.items] - <p>alias of <code>render</code></p>
     * @param [props.children] - <p>Already rendered elements</p>
     */
    interface SubMenuItem extends MenuItem {
    }

    /**
     * <p>This item is used for adding custom controls like sliders to the context menu.
     * Properties shown here are additional to those of the main MenuItem {@link DiscordContextMenuModule.MenuItem}</p>
     * @param [props.control] - <p>control function that renders the component</p>
     */
    interface MenuControlItem extends MenuItem {
    }

    /**
     * <p>Builds a single menu item. The only prop shown here is the type, the rest should
     * match the actual component being built. View those to see what options exist
     * for each, they often have less in common than you might think. See {@link DiscordContextMenuModule.MenuItem}
     * for the majority of props commonly available. Check the documentation for the
     * rest of the components.</p>
     * @example
     * // Creates a single menu item that prints "MENU ITEM" on click
     * DiscordContextMenuModule.buildMenuItem({
     *      label: "Menu Item",
     *      action: () => {console.log("MENU ITEM");}
     * });
     * @example
     * // Creates a single toggle item that starts unchecked
     * // and print the new value on every toggle
     * DiscordContextMenuModule.buildMenuItem({
     *      type: "toggle",
     *      label: "Item Toggle",
     *      checked: false,
     *      action: (newValue) => {console.log(newValue);}
     * });
     * @param props - <p>props used to build the item</p>
     * @param [props.type = "text"] - <p>type of the item, options: text, submenu, toggle, radio, custom, separator</p>
     * @returns <p>the created component</p>
     */
    function buildMenuItem(props: {
        type?: string;
    }): any;

    /**
     * <p>Creates the all the items <strong>and groups</strong> of a context menu recursively.
     * There is no hard limit to the number of groups within groups or number
     * of items in a menu.</p>
     * @example
     * // Creates a single item group item with a toggle item
     * DiscordContextMenuModule.buildMenuChildren([{
     *      type: "group",
     *      items: [{
     *          type: "toggle",
     *          label: "Item Toggle",
     *          active: false,
     *          action: (newValue) => {console.log(newValue);}
     *      }]
     * }]);
     * @example
     * // Creates two item groups with a single toggle item each
     * DiscordContextMenuModule.buildMenuChildren([{
     *     type: "group",
     *     items: [{
     *         type: "toggle",
     *         label: "Item Toggle",
     *         active: false,
     *         action: (newValue) => {
     *             console.log(newValue);
     *         }
     *     }]
     * }, {
     *     type: "group",
     *     items: [{
     *         type: "toggle",
     *         label: "Item Toggle",
     *         active: false,
     *         action: (newValue) => {
     *             console.log(newValue);
     *         }
     *     }]
     * }]);
     * @param setup - <p>array of item props used to build items. See {@link DiscordContextMenuModule.buildMenuItem}</p>
     * @returns <p>array of the created component</p>
     */
    function buildMenuChildren(setup: object[]): object[];

    /**
     * <p>Creates the menu <em>component</em> including the wrapping <code>ContextMenu</code>.
     * Calls {@link DiscordContextMenuModule.buildMenuChildren} under the covers.
     * Used to call in combination with {@link DiscordContextMenuModule.openContextMenu}.</p>
     * @param setup - <p>array of item props used to build items. See {@link DiscordContextMenuModule.buildMenuChildren}</p>
     * @returns <p>the unique context menu component</p>
     */
    function buildMenu(setup: object[]): (...params: any[]) => any;

    /**
     * @param event - <p>The context menu event. This can be emulated, requires target, and all X, Y locations.</p>
     * @param menuComponent - <p>Component to render. This can be any react component or output of {@link DiscordContextMenuModule.buildMenu}</p>
     * @param config - <p>configuration/props for the context menu</p>
     * @param [config.position = "right"] - <p>default position for the menu, options: &quot;left&quot;, &quot;right&quot;</p>
     * @param [config.align = "top"] - <p>default alignment for the menu, options: &quot;bottom&quot;, &quot;top&quot;</p>
     * @param [config.onClose] - <p>function to run when the menu is closed</p>
     * @param [config.noBlurEvent = false] - <p>No clue</p>
     */
    function openContextMenu(event: MouseEvent, menuComponent: (...params: any[]) => any, config: {
        position?: string;
        align?: string;
        onClose?: (...params: any[]) => any;
        noBlurEvent?: boolean;
    }): void;

    /**
     * <p>Attempts to find and return a specific context menu type's module. Useful
     * when patching the render of these menus.</p>
     * @param nameOrFilter - <p>name of the context menu type</p>
     * @returns <p>the webpack module the menu was found in</p>
     */
    function getDiscordMenu(nameOrFilter: string | ((...params: any[]) => any)): Promise<object>;

    /**
     * <p>Calls <code>forceUpdate()</code> on all context menus it can find. Useful for
     * after patching a menu.</p>
     */
    function forceUpdateMenus(): void;
}

/**
 * <p>Allows an easy way to create and show modalsModule.</p>
 */
declare namespace ModalsModule {
    /**
     * <p>Sizes of modalsModule.</p>
     */
    var ModalSizes: any;

    /**
     * <p>Shows the user profile modal for a given user.</p>
     * @param userId - <p>id of the user to show profile for</p>
     */
    function showUserProfile(userId: string): void;

    /**
     * <p>Acts as a wrapper for {@link ModalsModule.showModal} where the <code>children</code> is a text element.</p>
     * @param title - <p>title of the modal</p>
     * @param content - <p>text to show inside the modal. Can be markdown.</p>
     * @param [options] - <p>see {@link ModalsModule.showModal}</p>
     */
    function showConfirmationModal(title: string, content: string, options?: any): void;

    /**
     * <p>Shows a very simple alert modal that has title, content and an okay button.</p>
     * @param title - <p>title of the modal</p>
     * @param body - <p>text to show inside the modal</p>
     */
    function showAlertModal(title: string, body: string): void;

    /**
     * <p>Shows a generic but very customizable modal.</p>
     * @param title - <p>title of the modal</p>
     * @param children - <p>a single or array of rendered react elements to act as children</p>
     * @param [options] - <p>options to modify the modal</p>
     * @param [options.danger = false] - <p>whether the main button should be red or not</p>
     * @param [options.confirmText = Okay] - <p>text for the confirmation/submit button</p>
     * @param [options.cancelText = Cancel] - <p>text for the cancel button</p>
     * @param [options.onConfirm = NOOP] - <p>callback to occur when clicking the submit button</p>
     * @param [options.onCancel = NOOP] - <p>callback to occur when clicking the cancel button</p>
     */
    function showModal(title: string, children: ReactElement | ReactElement[], options?: {
        danger?: boolean;
        confirmText?: string;
        cancelText?: string;
        onConfirm?: Function;
        onCancel?: Function;
    }): void;

    /**
     * @property title - <p>title of the changelog section</p>
     * @property [type = added] - <p>type information of the section. Options: added, improved, fixed, progress.</p>
     * @property items - <p>itemized list of items to show in that section. Can use markdown.</p>
     */
    interface Changelog {
    }

    /**
     * <p>Shows a changelog modal based on changelog data.</p>
     * @param title - <p>title of the modal</p>
     * @param version - <p>subtitle (usually version or date) of the modal</p>
     * @param changelog - <p>changelog to show inside the modal</p>
     * @param footer - <p>either an html element or text to show in the footer of the modal. Can use markdown.</p>
     */
    function showChangelogModal(title: string, version: string, changelog: Changelog, footer: string): void;
}

/**
 * <p>Allows an easy way to create and show popoutsModule.</p>
 */
declare namespace PopoutsModule {

    /**
     * <p>Shows the user popout for a user relative to a target element</p>
     * @param target - <p>Element to show the popout in relation to</p>
     * @param user - <p>Discord User object for the user to show</p>
     * @param [options] - <p>Options to modify the request</p>
     * @param [options.guild = "currentGuildId"] - <p>Id of the guild  (uses current if not specified)</p>
     * @param [options.channel = "currentChannelId"] - <p>Id of the channel (uses current if not specified)</p>
     * @param [options.position = "right"] - <p>Positioning relative to element</p>
     * @param [options.align = "top"] - <p>Positioning relative to element</p>
     */
    function showUserPopout(target: HTMLElement, user: any, options?: {
        guild?: string;
        channel?: string;
        position?: string;
        align?: string;
    }): void;

    /**
     * <p>Shows a react popout relative to a target element</p>
     * @param target - <p>Element to show the popout in relation to</p>
     * @param [options] - <p>Options to modify the request</p>
     * @param [options.position = "right"] - <p>General position relative to element</p>
     * @param [options.align = "top"] - <p>Alignment relative to element</p>
     * @param [options.animation = PopoutsModule.AnimationTypes.TRANSLATE] - <p>Animation type to use</p>
     * @param [options.autoInvert = true] - <p>Try to automatically adjust the position if it overflows the screen</p>
     * @param [options.nudgeAlignIntoViewport = true] - <p>Try to automatically adjust the alignment if it overflows the screen</p>
     * @param [options.spacing = 8] - <p>Spacing between target and popout</p>
     */
    type AnimationTypes = { [key: string]: number };

    function openPopout(target: HTMLElement, options?: {
        position?: string;
        align?: string;
        animation?: AnimationTypes;
        autoInvert?: boolean;
        nudgeAlignIntoViewport?: boolean;
        spacing?: number;
    }): void;
}

/**
 * <p>An object that makes generating settings panel 10x easier.</p>
 */
declare namespace SettingsModule {

    /**
     * <p>Setting field to extend to create new settings</p>
     * @param name - <p>name label of the setting</p>
     * @param note - <p>help/note to show underneath or above the setting</p>
     * @param onChange - <p>callback to perform on setting change</p>
     * @param settingtype - <p>actual setting to render</p>
     * @param [props] - <p>object of props to give to the setting and the settingtype</p>
     * @param [props.noteOnTop = false] - <p>determines if the note should be shown above the element or not.</p>
     */
    class SettingField {
        constructor(name: string, note: string, onChange: Function, settingtype: Component | HTMLElement, props?: {
            noteOnTop?: boolean;
        });

        /**
         * @returns <ul>
         * <li>root element for setting</li>
         * </ul>
         */
        getElement(): HTMLElement;

        /**
         * <p>Fires onchange to listeners</p>
         */
        onChange(): void;

        /**
         * <p>Fired when root node added to DOM</p>
         */
        onAdded(): void;

        /**
         * <p>Fired when root node removed from DOM</p>
         */
        onRemoved(): void;
    }

    /**
     * <p>Grouping of controls for easier management in settings panels.</p>
     * @param groupName - <p>title for the group of settings</p>
     * @param [options] - <p>additional options for the group</p>
     * @param [options.callback] - <p>callback called on settings changed</p>
     * @param [options.collapsible = true] - <p>determines if the group should be collapsible</p>
     * @param [options.shown = false] - <p>determines if the group should be expanded by default</p>
     */
    class SettingGroup {
        constructor(groupName: string, options?: {
            callback?: Function;
            collapsible?: boolean;
            shown?: boolean;
        });

        /**
         * @returns <ul>
         * <li>root node for the group.</li>
         * </ul>
         */
        getElement(): HTMLElement;

        /**
         * <p>Adds multiple nodes to this group.</p>
         * @param nodes - <p>list of nodes to add to the group container</p>
         * @returns <ul>
         * <li>returns self for chaining</li>
         * </ul>
         */
        append(...nodes: (HTMLElement | typeof jQuery | SettingField | SettingGroup)[]): SettingGroup;

        /**
         * <p>Appends this node to another</p>
         * @param node - <p>node to attach the group to.</p>
         * @returns <ul>
         * <li>returns self for chaining</li>
         * </ul>
         */
        appendTo(node: HTMLElement): SettingGroup;

        /**
         * <p>Fires onchange to listeners</p>
         */
        onChange(): void;
    }

    /**
     * <p>Creates a new settings panel</p>
     * @param onChange - <p>callback to fire when settings change</p>
     * @param nodes - <p>list of nodes to add to the panel container</p>
     */
    class SettingPanel {
        constructor(onChange: Function, ...nodes: (HTMLElement | typeof jQuery | SettingField | SettingGroup)[]);

        /**
         * <p>Creates a new settings panel</p>
         * @param onChange - <p>callback to fire when settings change</p>
         * @param nodes - <p>list of nodes to add to the panel container</p>
         * @returns <ul>
         * <li>root node for the panel.</li>
         * </ul>
         */
        static build(onChange: Function, ...nodes: (HTMLElement | typeof jQuery | SettingField | SettingGroup)[]): HTMLElement;

        /**
         * @returns <ul>
         * <li>root node for the panel.</li>
         * </ul>
         */
        getElement(): HTMLElement;

        /**
         * <p>Adds multiple nodes to this panel.</p>
         * @param nodes - <p>list of nodes to add to the panel container</p>
         * @returns <ul>
         * <li>returns self for chaining</li>
         * </ul>
         */
        append(...nodes: (HTMLElement | typeof jQuery | SettingField | SettingGroup)[]): SettingPanel;

        /**
         * <p>Fires onchange to listeners</p>
         */
        onChange(): void;
    }

    /**
     * <p>Creates a color picker using Discord's built in color picker
     * as a base. Input and output using hex strings.</p>
     * @param name - <p>name label of the setting</p>
     * @param note - <p>help/note to show underneath or above the setting</p>
     * @param value - <p>current hex color</p>
     * @param onChange - <p>callback to perform on setting change, callback receives hex string</p>
     * @param [options] - <p>object of options to give to the setting</p>
     * @param [options.disabled = false] - <p>should the setting be disabled</p>
     * @param [options.defaultColor] - <p>default color to show as large option</p>
     * @param [options.colors] - <p>preset colors to show in swatch</p>
     */
    class ColorPicker extends SettingField {
        constructor(name: string, note: string, value: string, onChange: Function, options?: {
            disabled?: boolean;
            defaultColor?: string;
            colors?: number[];
        });

        /**
         * <p>Default colors for ColorPicker</p>
         */
        static presetColors: any;

        /**
         * @returns <ul>
         * <li>root element for setting</li>
         * </ul>
         */
        getElement(): HTMLElement;

        /**
         * <p>Fires onchange to listeners</p>
         */
        onChange(): void;

        /**
         * <p>Fired when root node added to DOM</p>
         */
        onAdded(): void;

        /**
         * <p>Fired when root node removed from DOM</p>
         */
        onRemoved(): void;
    }

    /**
     * @property label - <p>label to show in the dropdown</p>
     * @property value - <p>actual value represented by label (this is passed via onChange)</p>
     */
    interface DropdownItem {
    }

    /**
     * <p>Creates a dropdown using discord's built in dropdown.</p>
     * @param name - <p>name label of the setting</p>
     * @param note - <p>help/note to show underneath or above the setting</p>
     * @param defaultValue - <p>currently selected value</p>
     * @param values - <p>array of all options available</p>
     * @param onChange - <p>callback to perform on setting change, callback item value</p>
     * @param [options] - <p>object of options to give to the setting</p>
     * @param [options.clearable = false] - <p>should be able to empty the field value</p>
     * @param [options.searchable = false] - <p>should user be able to search the dropdown</p>
     * @param [options.disabled = false] - <p>should the setting be disabled</p>
     */
    class Dropdown extends SettingField {
        constructor(name: string, note: string, defaultValue: any, values: DropdownItem[], onChange: Function, options?: {
            clearable?: boolean;
            searchable?: boolean;
            disabled?: boolean;
        });

        /**
         * @returns <ul>
         * <li>root element for setting</li>
         * </ul>
         */
        getElement(): HTMLElement;

        /**
         * <p>Fires onchange to listeners</p>
         */
        onChange(): void;

        /**
         * <p>Fired when root node added to DOM</p>
         */
        onAdded(): void;

        /**
         * <p>Fired when root node removed from DOM</p>
         */
        onRemoved(): void;
    }

    /**
     * <p>Creates a file picker using chromium's default.</p>
     * @param name - <p>name label of the setting</p>
     * @param note - <p>help/note to show underneath or above the setting</p>
     * @param onChange - <p>callback to perform on setting change, callback receives File object</p>
     * @param [options] - <p>object of options to give to the setting</p>
     * @param [options.disabled = false] - <p>should the setting be disabled</p>
     * @param [options.accept] - <p>what file types should be accepted</p>
     * @param [options.multiple = false] - <p>should multiple files be accepted</p>
     */
    class FilePicker extends SettingField {
        constructor(name: string, note: string, onChange: Function, options?: {
            disabled?: boolean;
            accept?: string[] | string;
            multiple?: boolean;
        });

        /**
         * @returns <ul>
         * <li>root element for setting</li>
         * </ul>
         */
        getElement(): HTMLElement;

        /**
         * <p>Fires onchange to listeners</p>
         */
        onChange(): void;

        /**
         * <p>Fired when root node added to DOM</p>
         */
        onAdded(): void;

        /**
         * <p>Fired when root node removed from DOM</p>
         */
        onRemoved(): void;
    }

    /**
     * <p>Creates a keybind setting using discord's built in keybind recorder.</p>
     * @param name - <p>name label of the setting</p>
     * @param note - <p>help/note to show underneath or above the setting</p>
     * @param value - <p>array of keycodes</p>
     * @param onChange - <p>callback to perform on setting change, callback receives array of keycodes</p>
     * @param [options] - <p>object of options to give to the setting</p>
     * @param [options.disabled = false] - <p>should the setting be disabled</p>
     */
    class Keybind extends SettingField {
        constructor(name: string, note: string, value: number[], onChange: Function, options?: {
            disabled?: boolean;
        });

        /**
         * @returns <ul>
         * <li>root element for setting</li>
         * </ul>
         */
        getElement(): HTMLElement;

        /**
         * <p>Fires onchange to listeners</p>
         */
        onChange(): void;

        /**
         * <p>Fired when root node added to DOM</p>
         */
        onAdded(): void;

        /**
         * <p>Fired when root node removed from DOM</p>
         */
        onRemoved(): void;
    }

    /**
     * @property name - <p>label to show in the dropdown</p>
     * @property value - <p>actual value represented by label (this is passed via onChange)</p>
     * @property desc - <p>description/help text to show below name</p>
     * @property color - <p>hex string to color the item</p>
     */
    interface RadioItem {
    }

    /**
     * <p>Creates a radio group using discord's built in radios.</p>
     * @param name - <p>name label of the setting</p>
     * @param note - <p>help/note to show underneath or above the setting</p>
     * @param defaultValue - <p>currently selected value</p>
     * @param values - <p>array of all options available</p>
     * @param onChange - <p>callback to perform on setting change, callback item value</p>
     * @param [options] - <p>object of options to give to the setting</p>
     * @param [options.disabled = false] - <p>should the setting be disabled</p>
     */
    class RadioGroup extends SettingField {
        constructor(name: string, note: string, defaultValue: any, values: RadioItem[], onChange: Function, options?: {
            disabled?: boolean;
        });

        /**
         * @returns <ul>
         * <li>root element for setting</li>
         * </ul>
         */
        getElement(): HTMLElement;

        /**
         * <p>Fires onchange to listeners</p>
         */
        onChange(): void;

        /**
         * <p>Fired when root node added to DOM</p>
         */
        onAdded(): void;

        /**
         * <p>Fired when root node removed from DOM</p>
         */
        onRemoved(): void;
    }

    /**
     * <p>Used to render the marker.</p>
     * @param value - <p>The value to render</p>
     */
    type SliderMarkerValue = (value: number) => string;
    /**
     * <p>Used to render the grabber tooltipModule.</p>
     * @param value - <p>The value to render</p>
     */
    type SliderRenderValue = (value: number) => string;

    /**
     * <p>Creates a slider/range using discord's built in slider.</p>
     * @param name - <p>name label of the setting</p>
     * @param note - <p>help/note to show underneath or above the setting</p>
     * @param min - <p>minimum value allowed</p>
     * @param max - <p>maximum value allowed</p>
     * @param value - <p>currently selected value</p>
     * @param onChange - <p>callback to fire when setting is changed, callback receives number</p>
     * @param [options] - <p>object of options to give to the setting</p>
     * @param [options.disabled = false] - <p>should the setting be disabled</p>
     * @param [options.fillStyles] - <p>object of css styles to add to active slider</p>
     * @param [options.defaultValue] - <p>value highlighted as default</p>
     * @param [options.keyboardStep] - <p>step moved when using arrow keys</p>
     * @param [options.markers] - <p>array of vertical markers to show on the slider</p>
     * @param [options.stickToMarkers] - <p>should the slider be forced to use markers</p>
     * @param [options.equidistant] - <p>should the markers be scaled to be equidistant</p>
     * @param [options.onMarkerRender] - <p>function to call to render the value in the marker</p>
     * @param [options.renderMarker] - <p>alias of <code>onMarkerRender</code></p>
     * @param [options.onValueRender] - <p>function to call to render the value in the tooltipModule</p>
     * @param [options.renderValue] - <p>alias of <code>onValueRender</code></p>
     * @param [options.units] - <p>can be used in place of <code>onValueRender</code> will use this string and render Math.round(value) + units</p>
     */
    class Slider extends SettingField {
        constructor(name: string, note: string, min: number, max: number, value: number, onChange: Function, options?: {
            disabled?: boolean;
            fillStyles?: any;
            defaultValue?: number;
            keyboardStep?: number;
            markers?: number[];
            stickToMarkers?: boolean;
            equidistant?: boolean;
            onMarkerRender?: SliderMarkerValue;
            renderMarker?: SliderMarkerValue;
            onValueRender?: SliderRenderValue;
            renderValue?: SliderRenderValue;
            units?: string;
        });

        /**
         * @returns <ul>
         * <li>root element for setting</li>
         * </ul>
         */
        getElement(): HTMLElement;

        /**
         * <p>Fires onchange to listeners</p>
         */
        onChange(): void;

        /**
         * <p>Fired when root node added to DOM</p>
         */
        onAdded(): void;

        /**
         * <p>Fired when root node removed from DOM</p>
         */
        onRemoved(): void;
    }

    /**
     * <p>Creates a switch using discord's built in switch.</p>
     * @param name - <p>name label of the setting</p>
     * @param note - <p>help/note to show underneath or above the setting</p>
     * @param isChecked - <p>should switch be checked</p>
     * @param onChange - <p>callback to perform on setting change, callback receives boolean</p>
     * @param [options] - <p>object of options to give to the setting</p>
     * @param [options.disabled = false] - <p>should the setting be disabled</p>
     */
    class Switch extends SettingField {
        constructor(name: string, note: string, isChecked: boolean, onChange: Function, options?: {
            disabled?: boolean;
        });

        /**
         * @returns <ul>
         * <li>root element for setting</li>
         * </ul>
         */
        getElement(): HTMLElement;

        /**
         * <p>Fires onchange to listeners</p>
         */
        onChange(): void;

        /**
         * <p>Fired when root node added to DOM</p>
         */
        onAdded(): void;

        /**
         * <p>Fired when root node removed from DOM</p>
         */
        onRemoved(): void;
    }

    /**
     * <p>Creates a textbox using discord's built in textbox.</p>
     * @param name - <p>name label of the setting</p>
     * @param note - <p>help/note to show underneath or above the setting</p>
     * @param value - <p>current text in box</p>
     * @param onChange - <p>callback to perform on setting change, callback receives text</p>
     * @param [options] - <p>object of options to give to the setting</p>
     * @param [options.placeholder = ""] - <p>placeholder for when textbox is empty</p>
     * @param [options.disabled = false] - <p>should the setting be disabled</p>
     */
    class Textbox extends SettingField {
        constructor(name: string, note: string, value: string, onChange: Function, options?: {
            placeholder?: string;
            disabled?: boolean;
        });

        /**
         * @returns <ul>
         * <li>root element for setting</li>
         * </ul>
         */
        getElement(): HTMLElement;

        /**
         * <p>Fires onchange to listeners</p>
         */
        onChange(): void;

        /**
         * <p>Fired when root node added to DOM</p>
         */
        onAdded(): void;

        /**
         * <p>Fired when root node removed from DOM</p>
         */
        onRemoved(): void;
    }
}

/**
 * <p>Toast maker similar to Android.</p>
 */
declare namespace ToastsModule {
    /**
     * <p>Shorthand for <code>type = &quot;success&quot;</code> for {@link ToastsModule.show}</p>
     */
    function success(): Promise<void>;

    /**
     * <p>Shorthand for <code>type = &quot;info&quot;</code> for {@link ToastsModule.show}</p>
     */
    function info(): Promise<void>;

    /**
     * <p>Shorthand for <code>type = &quot;warning&quot;</code> for {@link ToastsModule.show}</p>
     */
    function warning(): Promise<void>;

    /**
     * <p>Shorthand for <code>type = &quot;error&quot;</code> for {@link ToastsModule.show}</p>
     */
    function error(): Promise<void>;

    // /**
    //  * <p>Shorthand for <code>type = &quot;default&quot;</code> for {@link ToastsModule.show}</p>
    //  */
    // async function default(): Promise<void>;

    /**
     * <p>Shows a simple toast, similar to Android, centered over
     * the textarea if it exists, and center screen otherwise.
     * Vertically it shows towards the bottom like in Android.</p>
     * @param content - <p>The string to show in the toast.</p>
     * @param options - <p>additional options for the toast</p>
     * @param [options.type] - <p>Changes the type of the toast stylistically and semantically. {@link ToastsModule.ToastTypes}</p>
     * @param [options.icon] - <p>URL to an optional icon</p>
     * @param [options.timeout = 3000] - <p>Adjusts the time (in ms) the toast should be shown for before disappearing automatically</p>
     * @returns <ul>
     * <li>Promise that resolves when the toast is removed from the DOM</li>
     * </ul>
     */
    function show(content: string, options: {
        type?: string;
        icon?: string;
        timeout?: number;
    }): Promise<void>;

    /**
     * <p>Enumeration of accepted types.</p>
     */
    var ToastTypes: any;
}

/**
 * <p>TooltipModule that automatically show and hide themselves on mouseenter and mouseleave events.
 * Will also remove themselves if the node to watch is removed from DOM through
 * a MutationObserver.</p>
 * <p>Note this is not using Discord's internals but normal DOM manipulation and emulates
 * Discord's own tooltipModules as closely as possible.</p>
 */
declare namespace TooltipModule {
    /**
     * <p>Alias for the constructor</p>
     */
    function create(): void;

    /**
     * <p>Container where the tooltipModule will be appended.</p>
     */
    var container: any;
    /**
     * <p>Boolean representing if the tooltipModule will fit on screen above the element</p>
     */
    var canShowAbove: any;
    /**
     * <p>Boolean representing if the tooltipModule will fit on screen below the element</p>
     */
    var canShowBelow: any;
    /**
     * <p>Boolean representing if the tooltipModule will fit on screen to the left of the element</p>
     */
    var canShowLeft: any;
    /**
     * <p>Boolean representing if the tooltipModule will fit on screen to the right of the element</p>
     */
    var canShowRight: any;

    /**
     * <p>Hides the tooltipModule. Automatically called on mouseleave.</p>
     */
    function hide(): void;

    /**
     * <p>Shows the tooltipModule. Automatically called on mouseenter. Will attempt to flip if position was wrong.</p>
     */
    function show(): void;

    /**
     * <p>Use an observer in show otherwise you'll cause unclosable tooltipModules</p>
     */
    var observer: any;

    /**
     * <p>Force showing the tooltipModule above the node.</p>
     */
    function showAbove(): void;

    /**
     * <p>Force showing the tooltipModule below the node.</p>
     */
    function showBelow(): void;

    /**
     * <p>Force showing the tooltipModule to the left of the node.</p>
     */
    function showLeft(): void;

    /**
     * <p>Force showing the tooltipModule to the right of the node.</p>
     */
    function showRight(): void;
}

/**
 * <p>TooltipModule that automatically show and hide themselves on mouseenter and mouseleave events.
 * Will also remove themselves if the node to watch is removed from DOM through
 * a MutationObserver.</p>
 * <p>Note this is not using Discord's internals but normal DOM manipulation and emulates
 * Discord's own tooltipModules as closely as possible.</p>
 */
declare namespace TooltipModule {
    /**
     * <p>Alias for the constructor</p>
     */
    function create(): void;

    /**
     * <p>Container where the tooltipModule will be appended.</p>
     */
    var container: any;
    /**
     * <p>Boolean representing if the tooltipModule will fit on screen above the element</p>
     */
    var canShowAbove: any;
    /**
     * <p>Boolean representing if the tooltipModule will fit on screen below the element</p>
     */
    var canShowBelow: any;
    /**
     * <p>Boolean representing if the tooltipModule will fit on screen to the left of the element</p>
     */
    var canShowLeft: any;
    /**
     * <p>Boolean representing if the tooltipModule will fit on screen to the right of the element</p>
     */
    var canShowRight: any;

    /**
     * <p>Hides the tooltipModule. Automatically called on mouseleave.</p>
     */
    function hide(): void;

    /**
     * <p>Shows the tooltipModule. Automatically called on mouseenter. Will attempt to flip if position was wrong.</p>
     */
    function show(): void;

    /**
     * <p>Use an observer in show otherwise you'll cause unclosable tooltipModules</p>
     */
    var observer: any;

    /**
     * <p>Force showing the tooltipModule above the node.</p>
     */
    function showAbove(): void;

    /**
     * <p>Force showing the tooltipModule below the node.</p>
     */
    function showBelow(): void;

    /**
     * <p>Force showing the tooltipModule to the left of the node.</p>
     */
    function showLeft(): void;

    /**
     * <p>Force showing the tooltipModule to the right of the node.</p>
     */
    function showRight(): void;
}

declare class ZLibraryClass {
    ColorConverter: typeof ColorConverterModule
    DiscordClasses: typeof DiscordClassesModule
    DiscordClassModules: typeof DiscordClassModulesModule
    DiscordModules: typeof DiscordModulesModule
    DiscordSelectors: typeof DiscordSelectorsModule
    DOMTools: typeof DOMToolsModule
    Logger: typeof LoggerModule
    Patcher: typeof PatcherModule
    PluginUpdater: typeof PluginUpdaterModule
    PluginUtilities: typeof PluginUtilitiesModule
    ReactComponents: typeof ReactComponentsModule
    ReactTools: typeof ReactToolsModule
    Utilities: typeof UtilitiesModule
    WebpackModules: typeof WebpackModulesModule
    DiscordContextMenu: typeof DiscordContextMenuModule
    Modals: typeof ModalsModule
    Popouts: typeof PopoutsModule
    Settings: typeof SettingsModule
    Toasts: typeof ToastsModule
    Tooltip: typeof TooltipModule
}

export declare class BasePlugin {
    getName(): string;

    getDescription(): string;

    getVersion(): string;

    getAuthor(): string;

    load(): void;

    start(): void;

    stop(): void;

    isEnabled: boolean
    strings: object

    showSettingsModal(): void;

    showChangelog(footer: string): void;

    saveSettings(settings?: object): void;

    loadSettings(settings?: object): { [key: string]: any };

    buildSetting(data: { name: string, note: string, type: string, value: object, onChange: Function, id? }): SettingsModule.SettingField

    buildSettingsPanel(): SettingsModule.SettingPanel

    defaultSettings: { [key: string]: any }
    settings: { [key: string]: any }
}

declare global {
    const ZLibrary: ZLibraryClass;
}