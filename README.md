# SuperKoch
A idea for a program that uses German psychologist Ludwig Koch's method to learn you how to receive and send morse code.


Platform Compatibility: Linux Ubuntu and variants,Windows and Mac OS.
A website could solve this issue.

Inputs: iambic,paddles, straight key and bug. 
Standard inputs like a keyboard and mouse and a winkeyer interface.

Winkeyer can be emulated using a Aurdino:
https://github.com/k3ng/k3ng_cw_keyer/wiki

Some basic information for those unfamiliar with morse keys:
Example of a straight key: https://en.m.wikipedia.org/wiki/File:J38TelegraphKey.jpg 

A straight key is the common telegraph key as seen in various movies.
It is a simple bar with a knob on top and a contact underneath. When the bar is depressed against spring tension, it forms a circuit and allows electricity to flow. 
The problem with these straight keys are that the timing of the dots and dashes, as these are impossible to get 100% consistent timing on. 
That can confuse a computer.

Keys having two separate levers, one for dits and the other for dahs are called dual or dual-lever paddles. 
With a dual paddle both contacts may be closed simultaneously, enabling the "iambic" functions of an electronic keyer that is designed to support them. 
The operator can create a series of alternating dits and dahs .
A single-paddle also utilizes separate contacts for dits and dahs. 
A example of a dual lever paddle: 
http://www.morsex.com/bencher/by1.jpg

More on morse keys: 
https://en.m.wikipedia.org/wiki/Telegraph_key

A typical Winkeyer interface: 
https://www.hamcrafters2.com/WKUSBX.html

It has a open source driver, available here:
https://github.com/ok2cqr/winkeyer_server

The international Morse code table: 

https://en.m.wikipedia.org/wiki/File:International_Morse_Code.svg There are codes for Letters, numbers, punctuation, prosigns for Morse code and non-English variants, can be found here: https://en.m.wikipedia.org/wiki/Morse_code

How the wpm or morse code speed are calculated: The basic element of Morse code is the dot and all elements can be defined in terms of multiples of the dot length. The word PARIS is used because this is the length of a typical word in English plain text, it has a total length of 50 dot lengths. 
If the word PARIS can be sent ten times in a minute using normal Morse code timing then the code speed is 10 WPM.
The character speed is related to dot length in seconds by the following formula: Speed (WPM) = 2.4 * (Dots per second)

Here are the ratios for the other code elements: Dash length=Dot length x 3
Pause between elements=Dot length
Pause between characters=Dot length x 3
Pause between words=Dot length x 7


The Koch method:

What is the koch method? 
The Koch method, named after German psychologist Ludwig Koch, which uses the full target speed from the outset but begins with just two characters. 
Once strings containing those two characters can be copied with 90% accuracy, an additional character is added, and so on until the full character set is mastered.
It's based on learned reflexes, and is arguably the best and fastest method available! 
Learning at speeds below 15 WPM is strongly discouraged because building reflexes does not work at slow speeds. 
More info about Koch's method here: 
https://www.qsl.net/n1irz/finley.morse.html


How morse code sounds at 15 wpm: 
https://youtu.be/EewFLTsHlFg
https://youtu.be/JskAldoROMM

A graphical representation of what is possible at different speeds.
These speed "limits" are approximated, it's easy for someone who handles 30 wpm to go slower.
https://github.com/Supermagnum/SuperKoch/blob/master/Screenshot_20210102-035710__01__01__01__01__01.jpg
Something interesting happens when one can handle speeds above 30 wpm, you will start to hear the complete word!


But, there is a thing.. 

NO ONE HAS USED THIS METHOD TO TRAIN A PERSON HOW TO RECEIVE AND SEND! It should work for both!

There are NO software that can teach both, only receive!

Koch himself, with hand-picked students, got a group to master receiving 12 wpm code in a mere 13.5 hours! 

That's much faster than any other method in the psychological literature.


How the software should work,and it's modes:

It should keep track of the users progress,time used and other statistics.

Training mode: First the program sends a series of K's in CW for 30 seconds while the character K is displayed. Then it repeats the procedure with the character M. When that is complete it sends a four characters group using K and M in random places without displaying the signs. It then waits for a four characters input using the keyboard or the morse device, shows the characters you have gotten correct in green, the wrong ones in red. That continues until the user has gotten 90 % correct of a number of groups, then a new letter is introduced ( for example X ), it is sent for 30 seconds while the character is displayed. Then the lesson continues using the new character until 90% of groups is correct, a new character or prosign is introduced and the lessons continues until all characters are learned.
It may also be possible to display the character K and send the character in morse 5 times and wait for 4~10 around seconds for the answer using the morse key or keyboard.
There should be not to harsh timing requirements on receiving, some normal slack should be permitted as long as the CW decoder can decode perhaps 70% of the transmitted CW it should be good.
Signals are not 100% perfect from a straight Morse key,this may "confuse" the software.
It should also support multiple users on the same software instance.

It should also display statistics of a users progress and time used.
The slowest permitted speed should be 13 WPM. 
Any speed below this is wasted time.

It should also be possible to adjust the mininum and maximum number of characters in the groups and if they are of random size.
It should support Farnsworth timing, characters are sent at the same speed as at higher speeds, while extra spacing is inserted between characters and words to slow the transmission down. 

The advantage of this is that you get used to recognising characters at a higher speed,the characters does not "blend together" as easily and thus it will be easier to increase the speed later on.

Realistic mode: 
Available during Realistic mode: signal fading and white noise to imitate more "realistic conditions", as Hannes Matuschek Kochmorse has it. 
It is available at: https://github.com/hmatuschek/kochmorse . 
Kochmorse does have a CW detector, but it can't be used to input characters during learning how to receive Morse and it seems not to support winkeyer interfaces.

Morse alphabets that should be used : Primarly International, but the possibility to add regional extras like the Norwegian Æ Ø and Å. 
Those extras should be possible to add to the characters learned with a option in settings.

Compatibility with a Murmur client that can connect to a murmur server,
that enables chatting in morse code with other users.
https://www.mumble.info/

A existing server already exists:
http://internetcw.weebly.com/


Suggestion for a plugin:
https://forums.mumble.info/topic/2542-fading-and-white-noise-plugin/
