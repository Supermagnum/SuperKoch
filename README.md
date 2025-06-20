

Just to explain some basic information about Koch's method and how morse code speed is calculated. Information about the necessary hardware is further down, below description of the softwares suggested functions.

The Koch method, named after German Ludwig Koch,psychologist at Technische Hochschule, Braunschweig, in 1931,which uses the full target speed from the outset but begins with just two characters. Once strings containing those two characters can be copied with 90% accuracy, an additional character is added, and so on until the full character set is mastered. Your accuracy will of course drop when a new character is introduced, but it will go up again.
Koch himself, with hand-picked students, got a group to master receiving morse code at 13 wpm in a mere 13.5 hours!

That's much faster than any other method in the psychological literature. It's based on learned reflexes, and is arguably the best and fastest method available!

How the speed of morse code is calculated: 
The word PARIS is the standard for determing CW or morse code speed. Each dit is one element, each dah is three elements, intra-character spacing is one element, inter-character spacing is three elements and inter-word spacing is seven elements. 
The word PARIS is exactly 50 elements. Note that after each dit/dah of the letter P -- one element spacing is used except the last one. (Intra-Character). After the last dit of P is sent, 3 elements are added (Inter-Character). After the word PARIS - 7 elements are used. Thus: P = di da da di = 1 1 3 1 3 1 1 (3) = 14 elements A = di da = 1 1 3 (3) = 8 elements R = di da di = 1 1 3 1 1 (3) = 10 elements I = di di = 1 1 1 (3) = 6 elements S = di di di = 1 1 1 1 1 [7] = 12 elements Total = 50 elements () = intercharacter [] = interword.

If you send PARIS 5 times in a minute (5WPM) you have sent 250 elements (using correct spacing). 250 elements into 60 seconds per minute = 240 milliseconds per element.

13 Words-Per-Minute is one element every 92.31 milliseconds. 

The Farnsworth method sends the dits and dahs and intra-character spacing at a higher speed, then increasing the inter-character and inter-word spacing to slow the sending speed down to the overall speed. For example, to send at 5 wpm with 13 wpm characters in Farnsworth method, the dits and intra-character spacing would be 92.3 milliseconds, the dah would be 276.9 milliseconds, the inter-character spacing would be 1.443 seconds and inter-word spacing would be 3.367 seconds.
That method is used to make it easier to identify pause between morse code signs, so that they don't "blend together".

Learning at speeds below 13 WPM is strongly discouraged because building reflexes does not work at slow speeds.
13 WPM sounds like this:
https://youtu.be/G0A_SRmedo8?si=fU5tKvBqOklFVx8y

I personally recommend 15 wpm as minimum.
It sounds like this:
https://youtu.be/JskAldoROMM
https://m.youtube.com/watch?v=EewFLTsHlFg&feature=youtu.be

The international Morse code table:

https://en.m.wikipedia.org/wiki/File:International_Morse_Code.svg There are codes for Letters, numbers, punctuation, prosigns for Morse code and non-English variants, can be found here: https://en.m.wikipedia.org/wiki/Morse_code

A graphical representation of what is possible at different speeds. These speed "limits" are approximated, it's easy for someone who handles 30 wpm to go slower. https://github.com/Supermagnum/SuperKoch/blob/master/Screenshot_20210102-035710__01__01__01__01__01.jpg Something interesting happens when one can handle speeds above 30 wpm, you will start to hear the complete word!

But, there is a thing..

It should work for both as it will teach muscle memory.

There are NO cross platform software compatible with morserino-32 that can teach both that has automatic progression, only receive!

How the software should work,and it's modes:

It should keep track of the users progress,time used and other statistics. 

Basic and the most important function:

Training mode example: First the program sends a series of K's in CW for 30 seconds while the character K is displayed. 
Then it repeats the procedure with the character M. When that is complete it sends a five characters group using K and M in random places without displaying the signs. 
It then waits for a five characters input using the keyboard or the morse device, shows the characters you have gotten correct in green, the wrong ones in red.
 
That continues until the user has gotten 90 % correct of a number of groups, then a new letter is introduced ( for example X ), it is sent for 30 seconds while the character is displayed. Then the lesson continues using the new character until 90% of groups is correct, a new character or prosign is introduced and the lessons continues until all characters are learned.

A teaching session should be no longer than 30 minutes.

It should be possible to add Farnsworth timing to add "space" between the signs.

It may also be possible to display the character K and send the character in morse 5 times, or display only the character and wait for 4~10 around seconds for the correct answer.

It should also display statistics of a users progress and time used,and what characters the user needs to focus on if the user is struggling with those when the entire alphabet is learned.
The CW tone must be possible to adjust.

It must have a Graphical user interface and be compatible with morserino as that will take care of the interfacing of different keys to the software. 

Options that can be added when the basic functionality works, in decending priority:

Realistic mode example: Adds signal fading,static,QRM and white noise to imitate more "realistic conditions", 
Morse alphabets that should be used : Primarly International, but the possibility to add regional extras like the Norwegian Æ Ø and Å. Those extras should be possible to add to the characters learned with a option in settings.

Support multiple users on the same software instance, a database will be needed.

Look at:
https://github.com/Supermagnum/Supermorse

and:
https://github.com/Supermagnum/supermorse-app

