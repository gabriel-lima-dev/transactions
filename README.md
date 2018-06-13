# Rendering Transactions
An Angular project to render transactions from an endpoint.

# Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4. You'll need to install it:

```
> npm install -g @angular/cli
```

# Congiguration: API Basic Auth
Edit the file `environments/environment.ts` with the API credentials:

```
export const environment = {
  production: false,
  apiUsername: '<username>',
  apiPassword: '<password>'
};
```

> PS: To avoid comminting the credentials you can try [OS Enviroment Variable](https://medium.com/@natchiketa/angular-cli-and-os-environment-variables-4cfa3b849659)

# Running
After the configuration just run:

```
> ng serve
```

# Technology Stack
- Angular 5.2.0
- Angular CLI
- ES6
- SCSS
- Layout: this project is based on Flexible Box Layout ([see the support](https://caniuse.com/#feat=flexbox))
- SVG Sprite for icons

### Components
- Credit Card Brand: shows the brand icon based on the card number/Regex
- Dropdown: handle dropdown/select options
- Filter: collection of dropdowns and submission of selected options
- Header: contains the filters
- Loading: an icon and text (optional) to show feedback when something it's loading
- Transaction: shows transactions
  - List: collection of transactions items
  - Header: header for transtacions list or transaction item
  - Item: single transaction with displaying the data
    - Card: credit card info of single transaction

### Services
- ApiInterceptor: intercept every request and handle authorization
- DropdownService: handle selecting options on dropdown
- TransactionService: get transactions from endpoint. Handle communication when transactions are updated or need to update.

### Models
All used interfaces.

### Animations
Collection of animation to use across components.

### Themes
You can write your own theme and apply your custom styles. There're currently two themes available: *Default* and *Dark* Theme.
To create a new theme see how `src/assets/scss/theme/` are structured, the most important file that you'll edit is the `config/_variable.theme.scss`.

#### Enabling a theme
Import your new theme on `src/assets/scss/theme/import.theme.scss`.
> IMPORTANT: Default Theme contains the base for all styles and should always be imported as last.

#### Components SCSS
*Required*: you need to import the theme file on each component to be able to access all global _styling/mixins/variables/functions_ E.g:

component.scss
```
@import 'theme/import.theme';
```

## To Do
- Create Pagination component
- Tests

## License
Copyright (c) Gabriel Lima Licensed under the MIT license.
