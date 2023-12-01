# Bellania

## Introduction

A lingerie showcase website built using Next.js, Tailwind CSS, and Sanity CMS. This project aims to provide a dynamic and visually appealing platform for showcasing lingerie products.

## Getting Started

To get started with the Bellania project, follow the steps below:

### Clone the Project

1. Open a terminal or command prompt.
2. Change the current working directory to the location where you want to clone the project.
3. Run the following command to clone the project repository:

    ```bash
    git clone https://github.com/kunalkeshan/Bellania
    ```

### Install Dependencies

1. Make sure you have installed pnpm globally. If not, you can install it using the following command:

    ```bash
    npm install -g pnpm
    ```

2. Change the current working directory to the project root directory.
3. Run the following command to install all project dependencies:

    ```bash
    pnpm install
    ```

### Set Up Sanity CMS

1. Create a new Sanity project by following the instructions on the [Sanity website](https://www.sanity.io/docs/getting-started).
2. Obtain the Sanity project ID and dataset name.
3. Update the `.env.local` file with the following variables:

    ```dotenv
    NEXT_PUBLIC_SANITY_PROJECT_ID=<sanity_project_id>
    NEXT_PUBLIC_SANITY_DATASET=<sanity_dataset_name>
    ```

4. Import Data

    Use the Sanity CLI to import data. Suppose you have a shared `production.tar.gz` file (or contact code maintainers to get access to the latest production dataset).

    Open your terminal and navigate to your project directory.

    Run the following command, replacing ../production.tar.gz with the path to your tar file:

    ```bash
    sanity dataset import ../production.tar.gz production
    ```

    This command imports the specified tar file into the 'production' dataset. Reference: [https://www.sanity.io/docs/migrating-data](https://www.sanity.io/docs/migrating-data).

### Set Up Contact Form

1. Obtain the Gmail email address and password that will be used to send contact form submissions. Your gmail passoword will need to be an app password, to obtain it follow these [steps mentioned by google to get app password](https://support.google.com/accounts/answer/185833?hl=en).
2. Update the `.env.local` file with the following variables:

    ```dotenv
    GMAIL_EMAIL=<gmail_email_address>
    GMAIL_PASSWORD=<gmail_password>
    ```

3. Remove the `disabled` attribute from the `fieldset` tag wrapping the contact form inputs in [`Contact.tsx`](./components/home/Contact.tsx) component.

## How to Contribute

We welcome contributions to the Bellania project. If you would like to contribute, please follow the guidelines below:

1. Fork the project repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and ensure they follow the project's coding conventions.
5. Write appropriate tests for your changes, if applicable.
6. Commit your changes and push them to your forked repository.
7. Submit a pull request, describing the changes you made and why they should be included in the main project.

## License

The Bellania project is licensed under [MIT License](LICENSE).
