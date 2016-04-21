/* 
*
*
*
*
*
*NOTE: make a copy of index.html without ANY comments or to-do, and then upload that one to production
*-on 04-07-2016, I just grabbed the one in production and removed all comments since craig was showing it to his automation team
*-also maybe later it would be nice to move the main JS to sep file and minify it / obfuscate it
*
*
*I moved notes and GENERAL TODO into here on 05-07-2015
*
*04-21-2016 I added Google analytics code to the site's index.html
*
**Version: 1.2: major updates to HTML and output format, plus a move to shell1 from allied
*Version: 1.3: move into netbeans, move to github, etc etc
*05-05-2015 I removed popup which included changing the CSS
*version 1.4: 05-05-2015 and 05-06-2015: tons of changes to add various error checking, etc etc etc
*also supports encoded ampersands now, changed for loop structure, etc etc
*version 1.5.1: added some toPrecision(3) to fix issues caused by parsefloat
                updated text on page with disclaimer about rounding and info
*version 1.6: toPrecision was not a good solution, I changed it to Math.round and did some testing. Everything seems OK so far. 
*
*03-25-2016
**-updated version to 1.6
**-my toPrecision thing was not a good solution, I changed it to Math.round and did some testing. Everything seems OK so far. 
**toFixed is also no good because it converts to a string and so the pixel below was failing when it tried to round TWICE and the value was now a srting...
**AMOUNT=0&OID=56f2e33d7f5595316ab83ba7_free_1458758461000_0&containerTagId=12730&CID=1536367&CURRENCY=USD&TYPE=383212
**Uncaught TypeError: subTotal.toPrecision is not a function

* 
*
*
*03-16-2016
-I compared the live version from netbeans and the test version, they are the same
-Compare new rounding version and netbeans live version: good, only the changes I made yesterday are present, wasn't sure
-I updated the code in netbeans and commited/pushed to git
-I also just put the same code into the test version on shell 1
-so again as a reminder, the process for updates should be:
Edit in netbeans, then git commit/push
Then upload the file(s) to the shell1 test version if you want people to test first
Then once sure, copy/upload to the live version on shell1

03-15-2016
-I directly overwrote the code on my live version in response to some examples from polina that yielded incorrect subtotals
	QTY1=3&DISCOUNT=91.95&CID=1536956&AMT2=18.99&AMT1=17.99&TYPE=384479&ITEM2=Artemisinin&ITEM1=Pterostilbene&CURRENCY=USD&OID=33490&containerTagId=13429&QTY2=2 
-I did not update netbeans/github – I just edited the actual HTML file in shell1 for the live version
-I just added ".toPrecision(3)" on all the parsefloat sections and also to some other places
[ ] might have missed some plus need to think more about what I did :>
-also added info on the page that I am now rounding
-just look for toPrecision(3) and you should find all the updates, except the text about rounding
-also changed version to 1.5.1

Here's more info and the example from wes that yielded a weird result
(as opposed to polina's, which was totally incorrect)

http://stackoverflow.com/questions/4640404/parsefloat-rounding

 	 
	For future reference: because how Javascript manages float values, the number 1.35 Can't be exactly saved in a variable, or even computed. Try this in a Javascript console (1.35).toPrecision(52), it'll show you that the real value or 1.35 in Javascript is1.350000000000000088817841970012523233890533447265625 (all decimal beyond that are all 0). –


The pixel parser gives a super long number for stuff like this (which all should be clean when multiplied)

QTY1=2&CID=1528514&AMT2=14.4&AMT1=10.8&TYPE=363376&ITEM2=2008306&ITEM1=2010567&CURRENCY=USD&OID=8005719196&containerTagId=5376&QTY2=2

SUBTOTAL: 50.400000000000006

*
*
*
*PUSHING TEST VERSIONS:
*I created a separate dir on Shell 1
*just SFTP whatever you want into there, ensure you have the correct dir
*HAVE PEOPLE USE THAT before you push that version live
*change the version number when you push and make a note in here
*


*
*TODO need to deal with things like "DISCOUNT=", it causes NaN in the subtotal
*
*TODO how best keep track of version numbers? or don't?
*
*
*TODO do you need to escape input etc? esp if something located on external server, I don't want them doing XSS attacks etc
*JS/jQuery book has some great info on that 
*
**TODO you could have it display every param that is NOT in a list of known params
*
*TODO see notes in Onenote
*
*
*TODO update to match kibana version as needed but remember that a lot of this works differently 
*
*TODO verify that subtotal is a number and say something if it is not
*
*TODO do the same checks for DCNT and DISCOUNT that you are doing for AMT/AMOUNT
*should probably do it as a function since it's basically the same code 4 times
*
*/

