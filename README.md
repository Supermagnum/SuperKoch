# SuperKoch
A idea and suggestions for a program that uses German psychologist Ludwig Koch's method to learn you how to receive and send morse code.



What is the koch method? 

The Koch method, named after German psychologist Ludwig Koch, which uses the full target speed from the outset but begins with just two characters. Once strings containing those two characters can be copied with 90% accuracy, an additional character is added, and so on until the full character set is mastered. 
Koch himself, with hand-picked students, got a group to master receiving 12 wpm code in a mere 13.5 hours!
That's much faster than any other method in the psychological literature.
It's based on learned reflexes, and is arguably the best and fastest method available! Learning at speeds below 15 WPM is strongly discouraged because building reflexes does not work at slow speeds. More info about Koch's method here: https://www.qsl.net/n1irz/finley.morse.html

How morse code sounds at 15 wpm: 
https://youtu.be/EewFLTsHlFg
https://youtu.be/JskAldoROMM


A graphical representation of what is possible at different speeds. These speed "limits" are approximated, it's easy for someone who handles 30 wpm to go slower. https://github.com/Supermagnum/SuperKoch/blob/master/Screenshot_20210102-035710__01__01__01__01__01.jpg Something interesting happens when one can handle speeds above 30 wpm, you will start to hear the complete word!

But, there is a thing..

NO ONE HAS USED THIS METHOD TO TRAIN A PERSON HOW TO RECEIVE AND SEND!

It should work for both as it will teach muscle memory.

There are NO software that can teach both, only receive!


How the software should work,and it's modes:
It should keep track of the users progress,time used and other statistics. Some of it may be posted to https://lcwo.net/ if an API is available.

Training mode example: First the program sends a series of K's in CW for 30 seconds while the character K is displayed. Then it repeats the procedure with the character M. When that is complete it sends a four characters group using K and M in random places without displaying the signs. It then waits for a four characters input using the keyboard or the morse device, shows the characters you have gotten correct in green, the wrong ones in red. 
That continues until the user has gotten 90 % correct of a number of groups, then a new letter is introduced ( for example X ), it is sent for 30 seconds while the character is displayed. 
Then the lesson continues using the new character until 90% of groups is correct, a new character or prosign is introduced and the lessons continues until all characters are learned. 
It may also be possible to display the character K and send the character in morse 5 times and wait for 4~10 around seconds for the answer using the morse key or keyboard. There should be not to harsh timing requirements on receiving, some normal slack should be permitted as long as the CW decoder can decode perhaps 70% of the transmitted CW it should be good. It should also support multiple users on the same software instance.
It should also display statistics of a users progress and time used,and what characters the user needs to focus on if the user is struggling with those. 

The slowest permitted speed should be 13 WPM. Any speed below this is wasted time.

It should also be possible to adjust the mininum and maximum number of characters in the groups and if they are of random size. It should support Farnsworth timing, characters are sent at the same speed as at higher speeds, while extra spacing is inserted between characters and words to slow the transmission down.
The advantage of this is that you get used to recognising characters at a higher speed,the characters does not "blend together" as easily and thus it will be easier to increase the speed later on.

Realistic mode example: Adds signal fading,static and white noise to imitate more "realistic conditions", as Hannes Matuschek Kochmorse has it. It is available at: https://github.com/hmatuschek/kochmorse . Kochmorse does have a CW detector, but it can't be used to input characters during learning how to receive Morse and it seems not to support winkeyer interfaces.
Morse alphabets that should be used : Primarly International, but the possibility to add regional extras like the Norwegian Æ Ø and Å. Those extras should be possible to add to the characters learned with a option in settings.

Compatibility with a Murmur client that can connect to a murmur server, that enables chatting in morse code with other users. The client is available at: https://www.mumble.info/ Similar low latency open source free software solutions could also be used.
A existing murmur/mumble server  already exists: http://internetcw.weebly.com/
Suggestion for a plugin for mumble: https://forums.mumble.info/topic/2542-fading-and-white-noise-plugin/ This may be done by the software itself if a plugin is to cumbersome.

Compatible with Hamsphere: http://hamsphere.com/

Compatibility with: http://www.morserino.info/

Morserino's code: https://github.com//oe1wkl/Morserino-32

Platform Compatibility: Linux Ubuntu and variants,Windows and Mac OS. 

Inputs: iambic,paddles, straight key and bug. Standard inputs like a keyboard and mouse and a winkeyer interface.

Winkeyer can be emulated using a Aurdino: https://github.com/k3ng/k3ng_cw_keyer/wiki
A typical Winkeyer interface: https://www.hamcrafters2.com/WKUSBX.html
It has a open source driver, available here: https://github.com/ok2cqr/winkeyer_server



I hope that anyone is willing to program it.
