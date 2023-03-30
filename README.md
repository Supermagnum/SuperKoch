# SuperKoch
A idea and suggestions for a program that uses German psychologist Ludwig Koch's method to learn you how to receive and send morse code.



What is the koch method? 

The Koch method, named after German psychologist Ludwig Koch, which uses the full target speed from the outset but begins with just two characters. Once strings containing those two characters can be copied with 90% accuracy, an additional character is added, and so on until the full character set is mastered. 
Koch himself, with hand-picked students, got a group to master receiving morse code at 13 wpm in a mere 13.5 hours!

That's much faster than any other method in the psychological literature.
It's based on learned reflexes, and is arguably the best and fastest method available! 
Learning at speeds below 13 WPM is strongly discouraged because building reflexes does not work at slow speeds. 
More info about Koch's method here: https://www.qsl.net/n1irz/finley.morse.html

How morse code sounds at 15 wpm: 
https://youtu.be/EewFLTsHlFg
https://youtu.be/JskAldoROMM

How the speed is calculated:
The word PARIS is the standard for determing CW code speed. Each dit is one element, each dah is three elements, intra-character spacing is one element, inter-character spacing is three elements and inter-word spacing is seven elements. The word PARIS is exactly 50 elements.
Note that after each dit/dah of the letter P -- one element spacing is used except the last one. (Intra-Character).
After the last dit of P is sent, 3 elements are added (Inter-Character). After the word PARIS - 7 elements are used.
Thus:
P = di da da di = 1 1 3 1 3 1 1 (3) = 14 elements
A = di da = 1 1 3 (3) = 8 elements
R = di da di = 1 1 3 1 1 (3) = 10 elements
I = di di = 1 1 1 (3) = 6 elements
S = di di di = 1 1 1 1 1 [7] = 12 elements
Total = 50 elements
() = intercharacter
[] = interword

If you send PARIS 5 times in a minute (5WPM) you have sent 250 elements (using correct spacing). 
250 elements into 60 seconds per minute = 240 milliseconds per element.

13 words-per-minute is one element every 92.31 milliseconds.
The Farnsworth method sends the dits and dahs and intra-character spacing at a higher speed, 
then increasing the inter-character and inter-word spacing to slow the sending speed down to the overall speed. 
For example, to send at 5 wpm with 13 wpm characters in Farnsworth method, 
the dits and intra-character spacing would be 92.3 milliseconds, the dah would be 276.9 milliseconds, 
the inter-character spacing would be 1.443 seconds and inter-word spacing would be 3.367 seconds. 

Some basic information for those unfamiliar with morse keys: Example of a straight key: https://en.m.wikipedia.org/wiki/File:J38TelegraphKey.jpg

A straight key is the common telegraph key as seen in various movies. It is a simple bar with a knob on top and a contact underneath. When the bar is depressed against spring tension, it forms a circuit and allows electricity to flow. 
The problem with these straight keys are that the timing of the dots and dashes, as these are impossible to get 100% consistent timing on. That can confuse a computer.

Keys having two separate levers, one for dits and the other for dahs are called dual or dual-lever paddles. 
With a dual paddle both contacts may be closed simultaneously, enabling the "iambic" functions of an electronic keyer that is designed to support them. 
The operator can create a series of alternating dits and dahs . A single-paddle also utilizes separate contacts for dits and dahs. 
A example of a dual lever paddle: http://www.morsex.com/bencher/by1.jpg

More on morse keys: https://en.m.wikipedia.org/wiki/Telegraph_key


The international Morse code table:

https://en.m.wikipedia.org/wiki/File:International_Morse_Code.svg There are codes for Letters, numbers, punctuation, prosigns for Morse code and non-English variants, can be found here: https://en.m.wikipedia.org/wiki/Morse_code


A graphical representation of what is possible at different speeds. These speed "limits" are approximated, it's easy for someone who handles 30 wpm to go slower. https://github.com/Supermagnum/SuperKoch/blob/master/Screenshot_20210102-035710__01__01__01__01__01.jpg Something interesting happens when one can handle speeds above 30 wpm, you will start to hear the complete word!

But, there is a thing..

NO ONE HAS USED THIS METHOD TO TRAIN A PERSON HOW TO RECEIVE AND SEND!

It should work for both as it will teach muscle memory.

There are NO software that can teach both, only receive!


How the software should work,and it's modes:

It should keep track of the users progress,time used and other statistics. 
Some of it may be posted to https://lcwo.net/ if an API is available.

Basic and the most important function:

Training mode example: First the program sends a series of K's in CW for 30 seconds while the character K is displayed. Then it repeats the procedure with the character M. When that is complete it sends a four characters group using K and M in random places without displaying the signs. It then waits for a four characters input using the keyboard or the morse device, shows the characters you have gotten correct in green, the wrong ones in red. 
That continues until the user has gotten 90 % correct of a number of groups, then a new letter is introduced ( for example X ), it is sent for 30 seconds while the character is displayed. 
Then the lesson continues using the new character until 90% of groups is correct, a new character or prosign is introduced and the lessons continues until all characters are learned. 
It may also be possible to display the character K and send the character in morse 5 times and wait for 4~10 around seconds for the answer using the morse key. 
There should be not to harsh timing requirements on receiving, some normal slack should be permitted as long as the CW decoder can decode perhaps 70% of the transmitted CW it should be good. It should also support multiple users on the same software instance.
It should also display statistics of a users progress and time used,and what characters the user needs to focus on if the user is struggling with those. 

The slowest permitted speed should be 13 WPM. Any speed below this is wasted time.

It must have a Graphical user interface and be compatible with morserino as top priority. 

------------------

Options that can be added when the basic functionality works:

It should also be possible to adjust the mininum and maximum number of characters in the groups and if they are of random size. It should support Farnsworth timing, characters are sent at the same speed as at higher speeds, while extra spacing is inserted between characters and words to slow the transmission down.
The advantage of this is that you get used to recognising characters at a higher speed,the characters does not "blend together" as easily and thus it will be easier to increase the speed later on.

Realistic mode example: Adds signal fading,static and white noise to imitate more "realistic conditions", as Hannes Matuschek Kochmorse has it. It is available at: https://github.com/hmatuschek/kochmorse . Kochmorse does have a CW detector, but it can't be used to input characters during learning how to receive Morse and it seems not to support winkeyer interfaces.
Morse alphabets that should be used : Primarly International, but the possibility to add regional extras like the Norwegian Æ Ø and Å. 
Those extras should be possible to add to the characters learned with a option in settings.

Compatibility with a Murmur client that can connect to a murmur server, that enables chatting in morse code with other users. The client is available at: https://www.mumble.info/ Similar low latency open source free software solutions could also be used.
A existing murmur/mumble server  already exists: http://internetcw.weebly.com/
Suggestion for a plugin for mumble: https://forums.mumble.info/topic/2542-fading-and-white-noise-plugin/ This may be done by the software itself if a plugin is to cumbersome.

Compatible with Hamsphere: http://hamsphere.com/

Compatibility with: http://www.morserino.info/

Morserino's code: https://github.com//oe1wkl/Morserino-32
It communicates by serial data over USB connection. 

Platform Compatibility: Linux Ubuntu and variants,Windows and Mac OS. 




I hope that anyone is willing to program it.

It's discussed on reddit here:
https://www.reddit.com/r/amateurradio/comments/zkiu7j/a_question_about_the_viability_of_using_kochs/?utm_source=share&utm_medium=android_app&utm_name=androidcss&utm_term=1&utm_content=share_button
