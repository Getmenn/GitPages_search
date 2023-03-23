# Bike theft tracking service

![](https://img.shields.io/npm/v/react?label=React&style=flat-square) ![](https://img.shields.io/npm/v/sass?label=sass&style=flat-square) ![](https://img.shields.io/npm/v/react-redux?label=React-redux&style=flat-square) ![](https://img.shields.io/npm/v/axios?label=axios&style=flat-square) :sunglasses:

**The client part**<br /><br />
The application contains one page and implements the following mechanism:
1. The user enters text in the search field, clicks the "Search" button
2. A request is sent to the Github API
3. Search results are displayed on the page.

## Functions⚡

1. Pagination capability: The number of items per page is selected from dropdown list (6, 12, 30).
2. When reloading the page, restore the search query in the search bar, cards
projects, the actual page (in the paginator) without sending a request to the Github API, i.e.
restore data from locally saved ones.
3. When you click on the card, go to the Github repository.
4. In the project card there is an opportunity to specify a comment.

## Site

link: https://getmenn.github.io/GitPages_search/
