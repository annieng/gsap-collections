NOTES
# MMoser Exercise Two

Made sketch of animation to better understand what’s happening and which elements need to be build and tweened 

theme: record collections - treating this like a visual way to store your records and share with friends/collaborate with friends

next step was to understand what the data would look like — this one is a little more complicated than the previous which was just an array of objects without much nesting - there is heaving nesting of objects within objects here

next to put together basic template to build off of
— css styling

so far this has taken about 45min - 1hr
— sorting out what the data would look like took the longest

idea is to take the background image of each collection and tween it to expand to fill the screen along with the icon

next each collection would have select projects/playlists or whatever within it that would need to be loaded and tweened in from the right

wrote some basic next and previous click handlers to do first animation 

looked into react-transition-group to ease in the child component of a collection

used react-transition-group’s <Transition Element> to work a fade in component on clicking of  element

so far about 3 hours of work

// next steps
animate elements
— background 
- background image expansion
- icon
- replace text
- adding elements within child (own icons/images + names)

// things to improve
- better data structures
- using state to track selected collections/playlists for animation 
- animation toggleChild should only affect the clicked collection - separate components for each collection's playlists would be a way to achieve this