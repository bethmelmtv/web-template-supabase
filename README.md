## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)



## Data model/ schema/ table definitoin (all mean the same thing)

### workshops
-topic
-id (generated by supabase)
-user-id (because we dont want to show partipants to anybody who isnt logged in) so that were not able to accidently access other people's data 

### participants 
-name
-id (generated by supabase)
-workshop-id
-user_id

remember
the smaller thing gets the id 

## Auth 
- comes with the template

## workshop-list page
dynamic list of workshops, each workshop also contains a list of partipants who belong to that workshop


## create-participant page 
- form

### event 
- on submit
    - get the data from the form
    - use the data to create a new participant
- on load.......