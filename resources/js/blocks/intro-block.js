/**
 * BLOCK: intro-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.editor;
import { prefix } from "../vars";
/**
 * Register a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType(`${prefix}/intro-block`, {
  title: __("Introductory Block"), // Block title.
  icon: "sticky", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__("Introductory Block"), __("Intro Block")],
  attributes: {
    message: {
      type: "array", //Ideal for RichText
      source: "children", //Means we have some kind of content
      selector: ".message-body",
    },
  },

  edit: (props) => {
    const {
      attributes: { message },
      className,
      setAttributes,
    } = props;

    const onChangeMessage = (message) => {
      setAttributes({ message });
    };

    return (
      <div className={className}>
        <h2>{__("Call to Actions", `${prefix}-blocks`)}</h2>
        <RichText
          tagName="div" //This is whats replaced in the editor
          multiline="p" //Each line is a paragraph
          placeholder={__("Add your custom message", `${prefix}-blocks`)}
          onChange={onChangeMessage}
          value={message}
        />
      </div>
    );
  },

  save: (props) => {
    const {
      attributes: { message },
    } = props;
    return (
      <div>
        <h2>{__("Call to Actions", `${prefix}-blocks`)}</h2>
        <div class="message-body">{message}</div>
      </div>
    );
  },
});
