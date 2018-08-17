# Clonesite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Assignment Requirements

Today, you should focus on planning your application and building and separating your application into components. If you have additional time, consider adding a pipe and jumping into next week's content

More directives (practice with ngIf, ngFor, and more).
Full CRUD functionality that changes your models.
Firebase (a noSQL database) instead of a hard-coded dataset.
Seed data for your database.
Pipes for filtering data.
A router for adding additional pages.
Authentication and route guards.
Deployment (as a dry run for next week).
API calls.
CSS styling.
Tests using Jasmine and Protractor.

## SPECS

initial pass on specs--

site: old Reddit

all pages on site display col-md-9 + col-md-3 (need bootstrap)

left 9:

header component?
display header across top 180px of page, posts listing below that

postings component+
display number to left of article
display rank next to number
display thumbnail next to rank
display title/link next to thumbnail
display description and keywords below title
include # of comments, share save hide report below that

right 3:

right column component+
fake 180px login box in upper right
three ads below login section

if there is time:

add categories tabs to top of page, above header


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
