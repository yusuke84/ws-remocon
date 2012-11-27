# WS remote controller

## What's this.

A remote controller tool for Google presentations. By this software, you can operate slide by your handy smartphone.

## How to use

1st, Execute server process in your local PC.

> node app

2nd, find your PC's IP address and access to the server from remote smartphone. (URL shown below is assuming that your IP address is 192.168.0.10 and server's port number is 3000. Please change those number depending on your environments.

> Access below url from your smartphone
> http://192.168.0.10:3000/con.html
>
> You'll see two buttons. One is next slide and another is previous slide.

3rd, Display your Google presentation in preview mode and execute bookmarklet.

> You can find bookmarklet's code in Gist.
> https://gist.github.com/4152953
>
> If connection between bookmarklet and local WebSocket server succeed, you'll see alert message with 'connected' in your Google presentation.

4th, You can move slide next and previous from your handy smartphone.

> All you need to do is just tap those buttons.
