# Note Taker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Note Taker is a full stack application for taking notes and storing them on a server. Users can write brief to-do notes using a webpage and save them for later use in a file safely tucked away on the server side of the application.

[Video of Note Taker showing typical use case](https://drive.google.com/file/d/1grlH8r_owyYaGpnOS07owGYdum4-mLA_/view)

A sample deployment of the website is available on [Heroku](https://limitless-lowlands-41576.herokuapp.com/).


## Table of Contents

* [Usage](#usage)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Author](#author)
* [License](#license)


## Usage

Note Taker opens to a simple index page with a button that links to the main note page. The note page consists of a header, a left column of current notes, and a detailed note display on the right column. Clicking on a note in the left column displays both the note title and note text on the right display. Clicking the add icon in the header clears the note display and allows the user to enter infomration into the note title and note text areas. When both are filled out, a save icon appears in the header and can be clicked to add that note to the list of notes displayed on the left. Notes can also be deleted by clicking on the trash icon on the right side of the note in the left column. 


## Features

* Simple interface for displaying notes
* Persistant note storage across devices by use of JSON file located on server
* Ability to delete notes as they are completed and add new ones to take their place
* Use of varied HTTP requests and responses
  * GET, POST, and DELETE methods
  * Headers and body content used as needed


## Technologies Used

* HTML
* CSS
* JavaScript
  * Node.js
  * [Express.js](https://www.npmjs.com/package/express)
  * [uuid](https://www.npmjs.com/package/uuid)


## Author

John Netzel
* [Portfolio](https://commiedog.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/john-netzel-481112129/)
* [GitHub](https://github.com/CommieDog)


## License

&copy; 2022 John Netzel. All Rights Reserved. Licenced under the terms of the MIT License.