//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. Yo Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.u’ll have to think of someone else to invite.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//Print a second set of invitation messages, one for each person who is still in your list.
//namearray
let Guest:string[]=["Farrukh","Alish","Fajer","Yasir"]

//cannotcome
let canNotattend:string="Alish"
console.log(`${canNotattend} cannot make today for dinner.`)

//new guest list
let newguest:string="eman"
Guest[Guest.indexOf(canNotattend)]=newguest

//console.log(Guest)
//invitation
Guest.map((item)=>console.log(`Hello,${item} you are invited to dinner`));
