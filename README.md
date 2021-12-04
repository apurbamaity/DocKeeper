# Dockeeper project

*This project is currently in beta and hosted at: [studytracker.tech](https://studytracker.tech). See the [version 1 roadmap here](https://github.com/faraday-academy/curriculum-app/projects/1).*

This app allows users to work as a team and store documents in their workspaces.They can then keep track of their progress,upload files and download files.



## Table of Contents

1. [Running Locally](#running-locally)
1. [Tech Stack](#tech-stack)
1. [Mockups](#mockups)
1. [Design](#design)
1. [Routes](#routes)
1. [Schema](#schema)
1. [API](#api)
1. [MVP Features](#mvp-features)
1. [Version 1 Features](#version-1-features)

## Running Locally

1. Clone this repo
1. `cd curriculum-front`
1. `npm i`
1. `npm run serve`

## Tech Stack


1. HTML
2. CSS
3. React JS
4. DB----Enter here
5. AWS/Heroku (hosting)

## Mockups

<p align="center">
  <img src="Images/main.png">
</p>

<p align="center">
  <img src="Images/index.png">
</p>

<p align="center">
  <img src="Images/form.png">
</p>



## Design

Color Palette:
<img src="mockups/color_palette.png" alt="color palete for application">
710627 - EA5455 - FAA275 - F5E4C3 - 34A7B2

## Routes

* / --> Home Page/Landing Page
* curricula --> shows all curricula
* curricula/create --> shows form to create
* curricula/id --> shows single curriculum
* curricula/id/update --> update single curriculum

## Schema

**Curriculum**

* id: UUID (pk)
* name: string
* goal: string
* description: string
* sections: [object]
    * name: string
    * resources: [object]
        * isCompleted: boolean (default: false)
        * name: string
        * url: string
    * projects:  [object]
        * isCompleted: boolean (default: false)
        * name: string
        * url: string
* createdBy: Mongo object id (userId, foreign key)
* createdAt: timestamp
* updatedAt: timestamp

**User**

* username: String
* email: String
* password: String (hashed password)
* isVerified: Boolean
* createdAt: timestamp
* updatedAt: timestamp

**Verification**

*This is just to store and expire verification codes that are sent to user by email.*

* userId: Mongo object id (userId, foreign key)
* code: Number

## API

**Prefix:** `/api/v1`

**Endpoints:**

`/curricula`

* get
* post

`/curricula/:id`

* get
* patch
* delete

`/count`

*get the ratio of completed tasks for each curriculum*

* get

## MVP Features

1. Home Page with sign in/Sign Up options
2. Form Page to Sign in or Sign Up
3. User can create a new workspace/join an existing workspace
4. User can upload files and read/download files inside the workspace.
5. User can also invite other players to join workspaces. 

## Version 1 Features

1. Users can log in and join/create workspaces
2. Users can upload/download/read documents inside their workpaces
3. Users can invite other users to their workspaces by invite code.
