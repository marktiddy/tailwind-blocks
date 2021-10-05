/**
 * BLOCK: intro-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, Editable, MediaUpload } = wp.editor;
const { Button } = wp.components;
import { pluginPrefix } from "../vars";
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

registerBlockType(`${pluginPrefix}/intro-block`, {
  title: __("Introductory Block"), // Block title.
  icon: "sticky", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: `${pluginPrefix}-blocks`,
  keywords: [__("Introductory Block"), __("Intro Block")],
  attributes: {
    title: {
      type: "string",
      selector: ".intro-title",
    },
    content: {
      type: "array", //Ideal for RichText
      source: "children", //Means we have some kind of content
      selector: ".intro-body", //The class expected on the content container
    },
    buttonText: {
      type: "string",
      selector: ".button-text",
    },
    imgURL: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: "img",
    },
    imgID: {
      type: "number",
    },
    imgAlt: {
      type: "string",
      source: "attribute",
      attribute: "alt",
      selector: "img",
    },
  },

  edit: (props) => {
    const {
      attributes: { title, content, imgID, imgURL, imgAlt, buttonText },
      className,
      setAttributes,
      isSelected,
    } = props;

    const onSelectImage = (img) => {
      setAttributes({
        imgID: img.id,
        imgURL: img.url,
        imgAlt: img.alt,
      });
    };
    const onRemoveImage = () => {
      setAttributes({
        imgID: null,
        imgURL: null,
        imgAlt: null,
      });
    };
    return (
      <section
        className={`${className} text-gray-600 px-8 md:px-16 py-12 md:py-24`}
      >
        <div class="grid-cols-1 grid md:grid-cols-2 text-left">
          <div class="flex justify-center items-center">
            {!imgID ? (
              <MediaUpload
                onSelect={onSelectImage}
                type="image"
                value={imgID}
                render={({ open }) => (
                  <Button className={"button button-large"} onClick={open}>
                    {__(" Upload Image", `${pluginPrefix}-blocks`)}
                  </Button>
                )}
              ></MediaUpload>
            ) : (
              <>
                <img
                  class="object-cover object-center rounded-full h-72 w-72 border-4 border-secondary"
                  alt={imgAlt}
                  src={imgURL}
                />
                {isSelected && (
                  <Button className="remove-image" onClick={onRemoveImage}>
                    <i class="fa fa-times text-white bg-red-500 h-4 w-4 flex justify-center items-center rounded-full"></i>
                  </Button>
                )}
              </>
            )}
          </div>
          <div class="flex justify-center items-center md:items-start flex-col mt-8 md:mt-0">
            <RichText
              tagName="h2" //This is whats replaced in the editor
              placeholder={__("Your Title", `${pluginPrefix}-blocks`)}
              onChange={(title) => setAttributes({ title })}
              value={title}
              className={`text-center md:text-left mb-4 font-sans text-5xl font-normal`}
            />
            <RichText
              tagName="div" //This is whats replaced in the editor
              multiline="p" //Each line is a paragraph
              placeholder={__(
                "Add your content here",
                `${pluginPrefix}-blocks`
              )}
              onChange={(content) => setAttributes({ content })}
              value={content}
              className={`entry-content text-center md:text-left`}
            />
            <RichText
              tagName="a"
              multiline={false}
              allowedFormats={[]}
              placeholder={__("Button Text", `${pluginPrefix}-blocks`)}
              onChange={(buttonText) => setAttributes({ buttonText })}
              value={buttonText}
              className={`btn btn-small mt-8 text-white`}
            />
          </div>
        </div>
      </section>
    );
  },

  save: (props) => {
    const {
      attributes: { title, content, imgURL, imgAlt, buttonText },
    } = props;
    return (
      <section class={`text-gray-600 px-8 md:px-16 py-12 md:py-24`}>
        <div class="container grid-cols-1 grid md:grid-cols-2">
          <div class="flex justify-center items-center">
            <img
              class="object-cover object-center rounded-full h-72 w-72 border-4 border-secondary"
              alt={imgAlt}
              src={imgURL}
            />
          </div>
          <div class="flex justify-center items-center md:items-start flex-col mt-8 md:mt-0">
            <h2 class="text-center md:text-left mb-4 intro-title text-5xl font-sans">
              {title}
            </h2>
            <div class="entry-content text-center md:text-left intro-body">
              {content}
            </div>
            <a href="" class="btn btn-small mt-8 button-text">
              {buttonText}
            </a>
          </div>
        </div>
      </section>
    );
  },
});
