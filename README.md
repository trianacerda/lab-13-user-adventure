| HOME FOLDER index.html with have home.js                                                                                     | home.js                                                                                                                                                                        | DATA FOLDER data-quest.js                                                                                                                                             | QUEST FOLDER index.html quest.js | MAP FOLDER index.html map.js import quest-data in map.js           | INDIVIDUAL  QUEST  PAGE(QUEST DETAIL PAGE) ** this has 3 different URLS **                                                                               | RESULTS | NOTES                                                                                                                      |   |
|------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------|---|
| ## HTML * h3 with description FORM: * Input fields-- user name * Radio Buttons-- character * Submit Button-- state the game  | ## EVENTS (home.js) * Form Submit- (btn click)   * create our user    * store our user in localStorage                                                                         | { name: user input race:from radio btn hp: initialize @ 35 gold: initialize @ 0 completed: {  'quest': true } aka (use boolean) user.completed[questname] = true;   } |                                  | * links for each quest    on map.     * `./quest/?id=${quest_id}`; | ## HTML ELEMENTS  * h3 with name of the quest  * img showing the quest img  * <p> or <span> with description  * 3 radio btns with choices   * submit btn |         | **URL search window  windown.location.search booger = new URLSearchParams(window.location.search); booger.get('selected'); |   |
|                                                                                                                              | note:   userForm.addEventListener('submit'--from HTML--, e => { e.preventDefault(); const formData = new FormData(userForm); console.log(formData.get('name'--from HTML--); }) |                                                                                                                                                                       | quest.js  import findById        | make a for loop and loop through  `./quest/?id=${quest_id}`;       | build data for game  FILES:  * monsters  * hairy dragon   * treasure                                                                                     |         |                                                                                                                            |   |
|                                                                                                                              |                                                                                                                                                                                |                                                                                                                                                                       |                                  |                                                                    |                                                                                                                                                          |         |                                                                                                                            |   |

results.js
** grab all elements by ID
** write functions using temp literals to display message to user
based on user choice


