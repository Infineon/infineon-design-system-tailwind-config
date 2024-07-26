**Tailwind CSS Custom Config File for DDS Projects**
===========================

This repository distributes a custom Tailwind CSS config file based on the DDS design tokens that you can use in your projects together with the DDS components. Visit the [DEMO](https://infineon.github.io/infineon-design-system-tailwind-config/) to check out the available styles.

**Getting Started**
---------------

To use this config file in your project, follow these steps:

1. **Install Tailwind CSS**: Make sure you have Tailwind CSS installed in your project by running `npm install tailwindcss` or `yarn add tailwindcss`. More info in the [Tailwind documentation](https://tailwindcss.com/docs/installation).
2. **Copy the config file**: Copy the `tailwind.config.js` file from this repository into the root of your project and replace the original config if necessary.
3. **Finish the configuration**: Once you have the tailwind.config.js file in place, you need to finalize your setup to make full use of Tailwind CSS. This involves importing Tailwind CSS into your project, extending the config with required plugins and integrating Tailwind to your build process. For more info see the section below and check the Tailwind documentation.
4. **Start using Tailwind**:  You can now use Tailwind CSS in your project. Make sure to import the CSS file in your HTML file or using the @apply directive in your CSS files.

**Config File Overview**
---------------------

The `tailwind.config.js` file in this repository defines a custom set of configurations for Tailwind CSS. The config is based on the DDS design tokens. Here's an overview of what's included:

* **Screens**: The config file defines six screen sizes: `xs`, `sm`, `md`, `lg`, `xl`, and `2xl`.
* **Colors**: The config file defines our custom color palette with a range of colors and shades.
* **Box Shadow**: The config file defines custom box shadow utilities.
* **Border Radius**: The config file defines custom border radius utilities.
* **Font Family**: The config file defines our font family, `Source Sans 3`.
* **Font Size**: The config file defines our range of font sizes, from `display-01` to `body-06`.

**Customizing the Config File**
-----------------------------

You can customize the config file to fit your project's needs by adding additional custom configurations or plugins. For more information on how to customize the config file, see the [Tailwind CSS documentation](https://tailwindcss.com/docs/configuration). We do not recommend to alter the already included values as they are already aligned with the DDS and our UI design language.

**License**
-------

This config file is licensed under the MIT License. See the [LICENSE file](LICENSE) for more information.

**Contributing**
------------

If you'd like to contribute to this repository, please open contact the DDS team.
